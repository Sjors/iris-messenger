import Component from '../../BaseComponent';

import Account from './Account';
import Appearance from './Appearance';
import Backup from './Backup';
import Content from './Content';
import Dev from './Dev';
import IrisAccount from './IrisAccount';
import Language from './Language';
import Network from './Network';
import SocialNetwork from './SocialNetwork';

export default class SettingsContent extends Component {
  content = '';
  pages = {
    account: Account,
    network: Network,
    appearance: Appearance,
    language: Language,
    content: Content,
    backup: Backup,
    social_network: SocialNetwork,
    iris_account: IrisAccount,
    dev: Dev,
  };

  constructor() {
    super();
    this.content = 'home';
  }
  render() {
    const Content = this.pages[this.props.id] || this.pages.account;
    return <Content />;
  }
}
