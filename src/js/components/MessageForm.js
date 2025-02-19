import { Component } from 'preact';

import Helpers from '../Helpers';
import Events from '../nostr/Events';
import Key from '../nostr/Key';

const mentionRegex = /\B@[\u00BF-\u1FFF\u2C00-\uD7FF\w]*$/;

export default class MessageForm extends Component {
  async sendNostr(msg) {
    const event = {
      kind: 1,
      content: msg.text,
    };
    if (msg.replyingTo) {
      const id = Key.toNostrHexAddress(msg.replyingTo);
      const replyingTo = await new Promise((resolve) => {
        Events.getEventById(id, true, (e) => resolve(e));
      });
      event.tags = replyingTo.tags.filter((tag) => tag[0] === 'p');
      let rootTag = replyingTo.tags?.find((t) => t[0] === 'e' && t[3] === 'root');
      if (!rootTag) {
        rootTag = replyingTo.tags?.find((t) => t[0] === 'e');
      }
      if (rootTag) {
        event.tags.unshift(['e', id, '', 'reply']);
        event.tags.unshift(['e', rootTag[1], '', 'root']);
      } else {
        event.tags.unshift(['e', id, '', 'root']);
      }
      if (!event.tags?.find((t) => t[0] === 'p' && t[1] === replyingTo.pubkey)) {
        event.tags.push(['p', replyingTo.pubkey]);
      }
    }

    function handleTagged(regex, tagType) {
      const taggedItems = [...msg.text.matchAll(regex)]
        .map((m) => m[0])
        .filter((m, i, a) => a.indexOf(m) === i);

      if (taggedItems) {
        event.tags = event.tags || [];
        for (const tag of taggedItems) {
          const hexTag = Key.toNostrHexAddress(tag.match(/npub[a-zA-Z0-9]{59,60}/)[0]);
          if (!hexTag) {
            continue;
          }
          const newTag = [tagType, hexTag, '', 'mention'];
          // add if not already present
          if (!event.tags?.find((t) => t[0] === newTag[0] && t[1] === newTag[1])) {
            event.tags.push(newTag);
          }
        }
      }
    }

    handleTagged(Helpers.pubKeyRegex, 'p');
    handleTagged(Helpers.noteRegex, 'e');

    const hashtags = [...msg.text.matchAll(Helpers.hashtagRegex)].map((m) => m[0].slice(1));
    if (hashtags.length) {
      event.tags = event.tags || [];
      for (const hashtag of hashtags) {
        if (!event.tags?.find((t) => t[0] === 't' && t[1] === hashtag)) {
          event.tags.push(['t', hashtag]);
        }
      }
    }

    console.log('sending event', event);
    return Events.publish(event);
  }

  onMsgTextPaste(event) {
    const pasted = (event.clipboardData || window.clipboardData).getData('text');
    const magnetRegex = /^magnet:\?xt=urn:btih:*/;
    if (
      (pasted !== this.state.torrentId && pasted.indexOf('.torrent') > -1) ||
      pasted.match(magnetRegex)
    ) {
      this.setState({ torrentId: pasted });
    }
  }

  checkMention(event) {
    const val = event.target.value.slice(0, event.target.selectionStart);
    const matches = val.match(mentionRegex);
    if (matches) {
      const match = matches[0].slice(1);
      if (!Key.toNostrHexAddress(match)) {
        this.setState({ mentioning: match });
      }
    } else if (this.state.mentioning) {
      this.setState({ mentioning: null });
    }
  }
}
