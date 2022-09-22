(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('gun'), require('gun/sea')) :
	typeof define === 'function' && define.amd ? define(['gun', 'gun/sea'], factory) :
	(global.iris = factory(global.Gun));
}(this, (function (Gun) { 'use strict';

	Gun = Gun && Gun.hasOwnProperty('default') ? Gun['default'] : Gun;

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _core = createCommonjsModule(function (module) {
	var core = module.exports = { version: '2.6.12' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
	});
	var _core_1 = _core.version;

	var $JSON = _core.JSON || (_core.JSON = { stringify: JSON.stringify });
	var stringify = function stringify(it) { // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

	var stringify$1 = createCommonjsModule(function (module) {
	module.exports = { "default": stringify, __esModule: true };
	});

	var _JSON$stringify = unwrapExports(stringify$1);

	var _iterStep = function (done, value) {
	  return { value: value, done: !!done };
	};

	var _iterators = {};

	var toString = {}.toString;

	var _cof = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	// fallback for non-array-like ES3 and non-enumerable old V8 strings

	// eslint-disable-next-line no-prototype-builtins
	var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return _cof(it) == 'String' ? it.split('') : Object(it);
	};

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

	// to indexed object, toObject with fallback for non-array-like ES3 strings


	var _toIobject = function (it) {
	  return _iobject(_defined(it));
	};

	var _library = true;

	var _global = createCommonjsModule(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
	});

	var _aFunction = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

	// optional / simple context binding

	var _ctx = function (fn, that, length) {
	  _aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var _isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var _anObject = function (it) {
	  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

	var _fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var _descriptors = !_fails(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var document$1 = _global.document;
	// typeof document.createElement is 'object' in old IE
	var is = _isObject(document$1) && _isObject(document$1.createElement);
	var _domCreate = function (it) {
	  return is ? document$1.createElement(it) : {};
	};

	var _ie8DomDefine = !_descriptors && !_fails(function () {
	  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])

	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var _toPrimitive = function (it, S) {
	  if (!_isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var dP = Object.defineProperty;

	var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  _anObject(O);
	  P = _toPrimitive(P, true);
	  _anObject(Attributes);
	  if (_ie8DomDefine) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var _objectDp = {
		f: f
	};

	var _propertyDesc = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var _hide = _descriptors ? function (object, key, value) {
	  return _objectDp.f(object, key, _propertyDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var hasOwnProperty = {}.hasOwnProperty;
	var _has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && _has(exports, key)) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? _ctx(out, _global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	var _export = $export;

	var _redefine = _hide;

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	var _toInteger = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

	// 7.1.15 ToLength

	var min = Math.min;
	var _toLength = function (it) {
	  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

	var max = Math.max;
	var min$1 = Math.min;
	var _toAbsoluteIndex = function (index, length) {
	  index = _toInteger(index);
	  return index < 0 ? max(index + length, 0) : min$1(index, length);
	};

	// false -> Array#indexOf
	// true  -> Array#includes



	var _arrayIncludes = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = _toIobject($this);
	    var length = _toLength(O.length);
	    var index = _toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var _shared = createCommonjsModule(function (module) {
	var SHARED = '__core-js_shared__';
	var store = _global[SHARED] || (_global[SHARED] = {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: _core.version,
	  mode: 'pure',
	  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
	});
	});

	var id = 0;
	var px = Math.random();
	var _uid = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

	var shared = _shared('keys');

	var _sharedKey = function (key) {
	  return shared[key] || (shared[key] = _uid(key));
	};

	var arrayIndexOf = _arrayIncludes(false);
	var IE_PROTO = _sharedKey('IE_PROTO');

	var _objectKeysInternal = function (object, names) {
	  var O = _toIobject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (_has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE 8- don't enum bug keys
	var _enumBugKeys = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)



	var _objectKeys = Object.keys || function keys(O) {
	  return _objectKeysInternal(O, _enumBugKeys);
	};

	var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  _anObject(O);
	  var keys = _objectKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

	var document$2 = _global.document;
	var _html = document$2 && document$2.documentElement;

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



	var IE_PROTO$1 = _sharedKey('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE$1 = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = _domCreate('iframe');
	  var i = _enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  _html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
	  return createDict();
	};

	var _objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE$1] = _anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : _objectDps(result, Properties);
	};

	var _wks = createCommonjsModule(function (module) {
	var store = _shared('wks');

	var Symbol = _global.Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
	};

	$exports.store = store;
	});

	var def = _objectDp.f;

	var TAG = _wks('toStringTag');

	var _setToStringTag = function (it, tag, stat) {
	  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

	var _iterCreate = function (Constructor, NAME, next) {
	  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
	  _setToStringTag(Constructor, NAME + ' Iterator');
	};

	// 7.1.13 ToObject(argument)

	var _toObject = function (it) {
	  return Object(_defined(it));
	};

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


	var IE_PROTO$2 = _sharedKey('IE_PROTO');
	var ObjectProto = Object.prototype;

	var _objectGpo = Object.getPrototypeOf || function (O) {
	  O = _toObject(O);
	  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

	var ITERATOR = _wks('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  _iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      _setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!_library && typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    _hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  _iterators[NAME] = $default;
	  _iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) _redefine(proto, key, methods[key]);
	    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
	  this._t = _toIobject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return _iterStep(1);
	  }
	  if (kind == 'keys') return _iterStep(0, index);
	  if (kind == 'values') return _iterStep(0, O[index]);
	  return _iterStep(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	_iterators.Arguments = _iterators.Array;

	var TO_STRING_TAG = _wks('toStringTag');

	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = _global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
	  _iterators[NAME] = _iterators.Array;
	}

	// true  -> String#at
	// false -> String#codePointAt
	var _stringAt = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(_defined(that));
	    var i = _toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

	var $at = _stringAt(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	_iterDefine(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

	// getting tag from 19.1.3.6 Object.prototype.toString()

	var TAG$1 = _wks('toStringTag');
	// ES3 wrong here
	var ARG = _cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	var _classof = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
	    // builtinTag case
	    : ARG ? _cof(O)
	    // ES3 arguments fallback
	    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

	var ITERATOR$1 = _wks('iterator');

	var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR$1]
	    || it['@@iterator']
	    || _iterators[_classof(it)];
	};

	var core_getIterator = _core.getIterator = function (it) {
	  var iterFn = core_getIteratorMethod(it);
	  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
	  return _anObject(iterFn.call(it));
	};

	var getIterator = core_getIterator;

	var getIterator$1 = createCommonjsModule(function (module) {
	module.exports = { "default": getIterator, __esModule: true };
	});

	var _getIterator = unwrapExports(getIterator$1);

	var f$1 = _wks;

	var _wksExt = {
		f: f$1
	};

	var iterator = _wksExt.f('iterator');

	var iterator$1 = createCommonjsModule(function (module) {
	module.exports = { "default": iterator, __esModule: true };
	});

	var _Symbol$iterator = unwrapExports(iterator$1);

	var _meta = createCommonjsModule(function (module) {
	var META = _uid('meta');


	var setDesc = _objectDp.f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !_fails(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!_has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!_has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};
	});
	var _meta_1 = _meta.KEY;
	var _meta_2 = _meta.NEED;
	var _meta_3 = _meta.fastKey;
	var _meta_4 = _meta.getWeak;
	var _meta_5 = _meta.onFreeze;

	var defineProperty = _objectDp.f;
	var _wksDefine = function (name) {
	  var $Symbol = _core.Symbol || (_core.Symbol = {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: _wksExt.f(name) });
	};

	var f$2 = Object.getOwnPropertySymbols;

	var _objectGops = {
		f: f$2
	};

	var f$3 = {}.propertyIsEnumerable;

	var _objectPie = {
		f: f$3
	};

	// all enumerable object keys, includes symbols



	var _enumKeys = function (it) {
	  var result = _objectKeys(it);
	  var getSymbols = _objectGops.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = _objectPie.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};

	// 7.2.2 IsArray(argument)

	var _isArray = Array.isArray || function isArray(arg) {
	  return _cof(arg) == 'Array';
	};

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

	var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

	var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return _objectKeysInternal(O, hiddenKeys);
	};

	var _objectGopn = {
		f: f$4
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

	var gOPN = _objectGopn.f;
	var toString$1 = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	var f$5 = function getOwnPropertyNames(it) {
	  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
	};

	var _objectGopnExt = {
		f: f$5
	};

	var gOPD = Object.getOwnPropertyDescriptor;

	var f$6 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = _toIobject(O);
	  P = _toPrimitive(P, true);
	  if (_ie8DomDefine) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
	};

	var _objectGopd = {
		f: f$6
	};

	// ECMAScript 6 symbols shim





	var META = _meta.KEY;





















	var gOPD$1 = _objectGopd.f;
	var dP$1 = _objectDp.f;
	var gOPN$1 = _objectGopnExt.f;
	var $Symbol = _global.Symbol;
	var $JSON$1 = _global.JSON;
	var _stringify = $JSON$1 && $JSON$1.stringify;
	var PROTOTYPE$2 = 'prototype';
	var HIDDEN = _wks('_hidden');
	var TO_PRIMITIVE = _wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = _shared('symbol-registry');
	var AllSymbols = _shared('symbols');
	var OPSymbols = _shared('op-symbols');
	var ObjectProto$1 = Object[PROTOTYPE$2];
	var USE_NATIVE = typeof $Symbol == 'function' && !!_objectGops.f;
	var QObject = _global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = _descriptors && _fails(function () {
	  return _objectCreate(dP$1({}, 'a', {
	    get: function () { return dP$1(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD$1(ObjectProto$1, key);
	  if (protoDesc) delete ObjectProto$1[key];
	  dP$1(it, key, D);
	  if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
	} : dP$1;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
	  _anObject(it);
	  key = _toPrimitive(key, true);
	  _anObject(D);
	  if (_has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP$1(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  _anObject(it);
	  var keys = _enumKeys(P = _toIobject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = _toPrimitive(key, true));
	  if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
	  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = _toIobject(it);
	  key = _toPrimitive(key, true);
	  if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
	  var D = gOPD$1(it, key);
	  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN$1(_toIobject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto$1;
	  var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto$1) $set.call(OPSymbols, value);
	      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, _propertyDesc(1, value));
	    };
	    if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
	    return this._k;
	  });

	  _objectGopd.f = $getOwnPropertyDescriptor;
	  _objectDp.f = $defineProperty;
	  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
	  _objectPie.f = $propertyIsEnumerable;
	  _objectGops.f = $getOwnPropertySymbols;

	  if (_descriptors && !_library) {
	    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  _wksExt.f = function (name) {
	    return wrap(_wks(name));
	  };
	}

	_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

	for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

	_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return _has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
	// https://bugs.chromium.org/p/v8/issues/detail?id=3443
	var FAILS_ON_PRIMITIVES = _fails(function () { _objectGops.f(1); });

	_export(_export.S + _export.F * FAILS_ON_PRIMITIVES, 'Object', {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    return _objectGops.f(_toObject(it));
	  }
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON$1 && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!_isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON$1, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	_setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	_setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	_setToStringTag(_global.JSON, 'JSON', true);

	_wksDefine('asyncIterator');

	_wksDefine('observable');

	var symbol = _core.Symbol;

	var symbol$1 = createCommonjsModule(function (module) {
	module.exports = { "default": symbol, __esModule: true };
	});

	unwrapExports(symbol$1);

	var _typeof_1 = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _iterator2 = _interopRequireDefault(iterator$1);



	var _symbol2 = _interopRequireDefault(symbol$1);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};
	});

	var _typeof = unwrapExports(_typeof_1);

	var runtime = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	!(function(global) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = module.exports;

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }

	      return ContinueSentinel;
	    }
	  };
	})(
	  // In sloppy mode, unbound `this` refers to the global object, fallback to
	  // Function constructor if we're in global strict mode. That is sadly a form
	  // of indirect eval which violates Content Security Policy.
	  (function() { return this })() || Function("return this")()
	);
	});

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g = (function() { return this })() || Function("return this")();

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	var runtimeModule = runtime;

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}

	var regenerator = runtimeModule;

	// most Object methods by ES6 should accept primitives



	var _objectSap = function (KEY, exec) {
	  var fn = (_core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
	};

	// 19.1.2.14 Object.keys(O)



	_objectSap('keys', function () {
	  return function keys(it) {
	    return _objectKeys(_toObject(it));
	  };
	});

	var keys = _core.Object.keys;

	var keys$1 = createCommonjsModule(function (module) {
	module.exports = { "default": keys, __esModule: true };
	});

	var _Object$keys = unwrapExports(keys$1);

	var classCallCheck = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	});

	var _classCallCheck = unwrapExports(classCallCheck);

	var possibleConstructorReturn = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _typeof3 = _interopRequireDefault(_typeof_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};
	});

	var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn);

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */


	var check = function (O, proto) {
	  _anObject(O);
	  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	var _setProto = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

	// 19.1.3.19 Object.setPrototypeOf(O, proto)

	_export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

	var setPrototypeOf = _core.Object.setPrototypeOf;

	var setPrototypeOf$1 = createCommonjsModule(function (module) {
	module.exports = { "default": setPrototypeOf, __esModule: true };
	});

	unwrapExports(setPrototypeOf$1);

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	_export(_export.S, 'Object', { create: _objectCreate });

	var $Object = _core.Object;
	var create = function create(P, D) {
	  return $Object.create(P, D);
	};

	var create$1 = createCommonjsModule(function (module) {
	module.exports = { "default": create, __esModule: true };
	});

	unwrapExports(create$1);

	var inherits = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;



	var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf$1);



	var _create2 = _interopRequireDefault(create$1);



	var _typeof3 = _interopRequireDefault(_typeof_1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};
	});

	var _inherits = unwrapExports(inherits);

	var global$1 = (typeof global !== "undefined" ? global :
	            typeof self !== "undefined" ? self :
	            typeof window !== "undefined" ? window : {});

	var _anInstance = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

	// call something on iterator step with safe closing on error

	var _iterCall = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) _anObject(ret.call(iterator));
	    throw e;
	  }
	};

	// check on default Array iterator

	var ITERATOR$2 = _wks('iterator');
	var ArrayProto = Array.prototype;

	var _isArrayIter = function (it) {
	  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$2] === it);
	};

	var _forOf = createCommonjsModule(function (module) {
	var BREAK = {};
	var RETURN = {};
	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod(iterable);
	  var f = _ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
	    result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = _iterCall(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports.BREAK = BREAK;
	exports.RETURN = RETURN;
	});

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)


	var SPECIES = _wks('species');
	var _speciesConstructor = function (O, D) {
	  var C = _anObject(O).constructor;
	  var S;
	  return C === undefined || (S = _anObject(C)[SPECIES]) == undefined ? D : _aFunction(S);
	};

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	var _invoke = function (fn, args, that) {
	  var un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
	};

	var process = _global.process;
	var setTask = _global.setImmediate;
	var clearTask = _global.clearImmediate;
	var MessageChannel = _global.MessageChannel;
	var Dispatch = _global.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;
	var run = function () {
	  var id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function (event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      _invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (_cof(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(_ctx(run, id, 1));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(_ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = _ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
	    defer = function (id) {
	      _global.postMessage(id + '', '*');
	    };
	    _global.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in _domCreate('script')) {
	    defer = function (id) {
	      _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
	        _html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(_ctx(run, id, 1), 0);
	    };
	  }
	}
	var _task = {
	  set: setTask,
	  clear: clearTask
	};

	var macrotask = _task.set;
	var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
	var process$1 = _global.process;
	var Promise$1 = _global.Promise;
	var isNode = _cof(process$1) == 'process';

	var _microtask = function () {
	  var head, last, notify;

	  var flush = function () {
	    var parent, fn;
	    if (isNode && (parent = process$1.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // Node.js
	  if (isNode) {
	    notify = function () {
	      process$1.nextTick(flush);
	    };
	  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
	  } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise$1 && Promise$1.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    var promise = Promise$1.resolve(undefined);
	    notify = function () {
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(_global, flush);
	    };
	  }

	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    } last = task;
	  };
	};

	// 25.4.1.5 NewPromiseCapability(C)


	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = _aFunction(resolve);
	  this.reject = _aFunction(reject);
	}

	var f$7 = function (C) {
	  return new PromiseCapability(C);
	};

	var _newPromiseCapability = {
		f: f$7
	};

	var _perform = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};

	var navigator$1 = _global.navigator;

	var _userAgent = navigator$1 && navigator$1.userAgent || '';

	var _promiseResolve = function (C, x) {
	  _anObject(C);
	  if (_isObject(x) && x.constructor === C) return x;
	  var promiseCapability = _newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var _redefineAll = function (target, src, safe) {
	  for (var key in src) {
	    if (safe && target[key]) target[key] = src[key];
	    else _hide(target, key, src[key]);
	  } return target;
	};

	var SPECIES$1 = _wks('species');

	var _setSpecies = function (KEY) {
	  var C = typeof _core[KEY] == 'function' ? _core[KEY] : _global[KEY];
	  if (_descriptors && C && !C[SPECIES$1]) _objectDp.f(C, SPECIES$1, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};

	var ITERATOR$3 = _wks('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR$3]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	} catch (e) { /* empty */ }

	var _iterDetect = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR$3]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR$3] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};

	var task = _task.set;
	var microtask = _microtask();




	var PROMISE = 'Promise';
	var TypeError$1 = _global.TypeError;
	var process$2 = _global.process;
	var versions = process$2 && process$2.versions;
	var v8 = versions && versions.v8 || '';
	var $Promise = _global[PROMISE];
	var isNode$1 = _classof(process$2) == 'process';
	var empty = function () { /* empty */ };
	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;

	var USE_NATIVE$1 = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);
	    var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode$1 || typeof PromiseRejectionEvent == 'function')
	      && promise.then(empty) instanceof FakePromise
	      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	      // we can't detect it synchronously, so just check versions
	      && v8.indexOf('6.6') !== 0
	      && _userAgent.indexOf('Chrome/66') === -1;
	  } catch (e) { /* empty */ }
	}();

	// helpers
	var isThenable = function (it) {
	  var then;
	  return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function (promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v;
	    var ok = promise._s == 1;
	    var i = 0;
	    var run = function (reaction) {
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then, exited;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value); // may throw
	            if (domain) {
	              domain.exit();
	              exited = true;
	            }
	          }
	          if (result === reaction.promise) {
	            reject(TypeError$1('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        if (domain && !exited) domain.exit();
	        reject(e);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function (promise) {
	  task.call(_global, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;
	    if (unhandled) {
	      result = _perform(function () {
	        if (isNode$1) {
	          process$2.emit('unhandledRejection', value, promise);
	        } else if (handler = _global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = _global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
	};
	var isUnhandled = function (promise) {
	  return promise._h !== 1 && (promise._a || promise._c).length === 0;
	};
	var onHandleUnhandled = function (promise) {
	  task.call(_global, function () {
	    var handler;
	    if (isNode$1) {
	      process$2.emit('rejectionHandled', promise);
	    } else if (handler = _global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function (value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function (value) {
	  var promise = this;
	  var then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};

	// constructor polyfill
	if (!USE_NATIVE$1) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    _anInstance(this, $Promise, PROMISE, '_h');
	    _aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = _redefineAll($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode$1 ? process$2.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = _ctx($resolve, promise, 1);
	    this.reject = _ctx($reject, promise, 1);
	  };
	  _newPromiseCapability.f = newPromiseCapability = function (C) {
	    return C === $Promise || C === Wrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}

	_export(_export.G + _export.W + _export.F * !USE_NATIVE$1, { Promise: $Promise });
	_setToStringTag($Promise, PROMISE);
	_setSpecies(PROMISE);
	Wrapper = _core[PROMISE];

	// statics
	_export(_export.S + _export.F * !USE_NATIVE$1, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	_export(_export.S + _export.F * (_library || !USE_NATIVE$1), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return _promiseResolve(_library && this === Wrapper ? $Promise : this, x);
	  }
	});
	_export(_export.S + _export.F * !(USE_NATIVE$1 && _iterDetect(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = _perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      _forOf(iterable, false, function (promise) {
	        var $index = index++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = _perform(function () {
	      _forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});

	_export(_export.P + _export.R, 'Promise', { 'finally': function (onFinally) {
	  var C = _speciesConstructor(this, _core.Promise || _global.Promise);
	  var isFunction = typeof onFinally == 'function';
	  return this.then(
	    isFunction ? function (x) {
	      return _promiseResolve(C, onFinally()).then(function () { return x; });
	    } : onFinally,
	    isFunction ? function (e) {
	      return _promiseResolve(C, onFinally()).then(function () { throw e; });
	    } : onFinally
	  );
	} });

	// https://github.com/tc39/proposal-promise-try




	_export(_export.S, 'Promise', { 'try': function (callbackfn) {
	  var promiseCapability = _newPromiseCapability.f(this);
	  var result = _perform(callbackfn);
	  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
	  return promiseCapability.promise;
	} });

	var promise = _core.Promise;

	var promise$1 = createCommonjsModule(function (module) {
	module.exports = { "default": promise, __esModule: true };
	});

	var _Promise = unwrapExports(promise$1);

	var isEnum$1 = _objectPie.f;
	var _objectToArray = function (isEntries) {
	  return function (it) {
	    var O = _toIobject(it);
	    var keys = _objectKeys(O);
	    var length = keys.length;
	    var i = 0;
	    var result = [];
	    var key;
	    while (length > i) {
	      key = keys[i++];
	      if (!_descriptors || isEnum$1.call(O, key)) {
	        result.push(isEntries ? [key, O[key]] : O[key]);
	      }
	    }
	    return result;
	  };
	};

	// https://github.com/tc39/proposal-object-values-entries

	var $values = _objectToArray(false);

	_export(_export.S, 'Object', {
	  values: function values(it) {
	    return $values(it);
	  }
	});

	var values = _core.Object.values;

	var values$1 = createCommonjsModule(function (module) {
	module.exports = { "default": values, __esModule: true };
	});

	var _Object$values = unwrapExports(values$1);

	// eslint-disable-line no-unused-vars

	var isNode$2 = false;
	try {
	  isNode$2 = Object.prototype.toString.call(global$1.process) === '[object process]';
	} catch (e) {
	}

	var userAgent = !isNode$2 && navigator && navigator.userAgent && navigator.userAgent.toLowerCase();
	var isElectron = userAgent && userAgent.indexOf(' electron/') > -1;

	var isMobile = !isNode$2 && function () {
	  if (isElectron) {
	    return false;
	  }
	  var check = false;
	  (function (a) {
	    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
	  })(navigator.userAgent || navigator.vendor || window.opera || '');
	  return check;
	}();

	function gunAsAnotherUser(gun, key, f) {
	  // Hacky way to use multiple users with gun
	  var gun2 = new Gun({ radisk: false, peers: _Object$keys(gun._.opt.peers) }); // TODO: copy other options too
	  var user = gun2.user();
	  user.auth(key);
	  setTimeout(function () {
	    var peers = _Object$values(gun2.back('opt.peers'));
	    peers.forEach(function (peer) {
	      gun2.on('bye', peer);
	    });
	  }, 20000);
	  return f(user);
	}

	function gunOnceDefined(node) {
	  return new _Promise(function (resolve) {
	    node.on(function (val, k, a, eve) {
	      if (val !== undefined) {
	        eve.off();
	        resolve(val);
	      }
	    });
	  });
	}

	async function loadGunDepth(chain) {
	  var maxDepth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  opts.maxBreadth = opts.maxBreadth || 50;
	  opts.cache = opts.cache || {};

	  return chain.then().then(function (layer) {

	    // Depth limit reached, or non-object, or array value returned
	    if (maxDepth < 1 || !layer || (typeof layer === 'undefined' ? 'undefined' : _typeof(layer)) !== 'object' || layer.constructor === Array) {
	      return layer;
	    }

	    var bcount = 0;
	    var promises = _Object$keys(layer).map(function (key) {
	      // Only fetch links & restrict total search queries to maxBreadth ^ maxDepth requests
	      if (!Gun.val.link.is(layer[key]) || ++bcount >= opts.maxBreadth) {
	        return;
	      }

	      // During one recursive lookup, don't fetch the same key multiple times
	      if (opts.cache[key]) {
	        return opts.cache[key].then(function (data) {
	          layer[key] = data;
	        });
	      }

	      return opts.cache[key] = loadGunDepth(chain.get(key), maxDepth - 1, opts).then(function (data) {
	        layer[key] = data;
	      });
	    });

	    return _Promise.all(promises).then(function () {
	      return layer;
	    });
	  });
	}

	var util = {
	  loadGunDepth: loadGunDepth,
	  gunOnceDefined: gunOnceDefined,
	  gunAsAnotherUser: gunAsAnotherUser,
	  getHash: async function getHash(str) {
	    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'base64';

	    if (!str) {
	      return undefined;
	    }
	    var hash = await Gun.SEA.work(str, undefined, undefined, { name: 'SHA-256' });
	    if (hash.length > 44) {
	      throw new Error('Gun.SEA.work returned an invalid SHA-256 hash longer than 44 chars: ' + hash + '. This is probably due to a sea.js bug on Safari.');
	    }
	    if (format === 'hex') {
	      return this.base64ToHex(hash);
	    }
	    return hash;
	  },
	  base64ToHex: function base64ToHex(str) {
	    var raw = atob(str);
	    var result = '';
	    for (var i = 0; i < raw.length; i++) {
	      var hex = raw.charCodeAt(i).toString(16);
	      result += hex.length === 2 ? hex : '0' + hex;
	    }
	    return result;
	  },
	  timeoutPromise: function timeoutPromise(promise, timeout) {
	    return _Promise.race([promise, new _Promise(function (resolve) {
	      setTimeout(function () {
	        resolve();
	      }, timeout);
	    })]);
	  },
	  getCaret: function getCaret(el) {
	    if (el.selectionStart) {
	      return el.selectionStart;
	    } else if (document.selection) {
	      el.focus();
	      var r = document.selection.createRange();
	      if (r == null) {
	        return 0;
	      }
	      var re = el.createTextRange(),
	          rc = re.duplicate();
	      re.moveToBookmark(r.getBookmark());
	      rc.setEndPoint('EndToStart', re);
	      return rc.text.length;
	    }
	    return 0;
	  },
	  injectCss: function injectCss() {
	    var elementId = 'irisStyle';
	    if (document.getElementById(elementId)) {
	      return;
	    }
	    var sheet = document.createElement('style');
	    sheet.id = elementId;
	    sheet.innerHTML = '\n      .iris-follow-button .hover {\n        display: none;\n      }\n\n      .iris-follow-button.following:hover .hover {\n        display: inline;\n      }\n\n      .iris-follow-button.following:hover .nonhover {\n        display: none;\n      }\n\n      .iris-identicon * {\n        box-sizing: border-box;\n      }\n\n      .iris-identicon {\n        vertical-align: middle;\n        border-radius: 50%;\n        text-align: center;\n        display: inline-block;\n        position: relative;\n        max-width: 100%;\n      }\n\n      .iris-distance {\n        z-index: 2;\n        position: absolute;\n        left:0%;\n        top:2px;\n        width: 100%;\n        text-align: right;\n        color: #fff;\n        text-shadow: 0 0 1px #000;\n        font-size: 75%;\n        line-height: 75%;\n        font-weight: bold;\n      }\n\n      .iris-pie {\n        border-radius: 50%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        box-shadow: 0px 0px 0px 0px #82FF84;\n        padding-bottom: 100%;\n        max-width: 100%;\n        -webkit-transition: all 0.2s ease-in-out;\n        -moz-transition: all 0.2s ease-in-out;\n        transition: all 0.2s ease-in-out;\n      }\n\n      .iris-card {\n        padding: 10px;\n        background-color: #f7f7f7;\n        color: #777;\n        border: 1px solid #ddd;\n        display: flex;\n        flex-direction: row;\n        overflow: hidden;\n      }\n\n      .iris-card a {\n        -webkit-transition: color 150ms;\n        transition: color 150ms;\n        text-decoration: none;\n        color: #337ab7;\n      }\n\n      .iris-card a:hover, .iris-card a:active {\n        text-decoration: underline;\n        color: #23527c;\n      }\n\n      .iris-pos {\n        color: #3c763d;\n      }\n\n      .iris-neg {\n        color: #a94442;\n      }\n\n      .iris-identicon img {\n        position: absolute;\n        top: 0;\n        left: 0;\n        max-width: 100%;\n        border-radius: 50%;\n        border-color: transparent;\n        border-style: solid;\n      }\n\n      .iris-chat-open-button {\n        background-color: #1e1e1e;\n        color: #fff;\n        padding: 15px;\n        cursor: pointer;\n        user-select: none;\n      }\n\n      .iris-chat-open-button svg {\n        width: 1em;\n      }\n\n      .iris-chat-open-button, .iris-chat-box {\n        position: fixed;\n        bottom: 0.5rem;\n        right: 0.5rem;\n        border-radius: 8px;\n        font-family: system-ui;\n        font-size: 15px;\n      }\n\n      .iris-chat-box {\n        background-color: #fff;\n        max-height: 25rem;\n        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);\n        height: calc(100% - 44px);\n        display: flex;\n        flex-direction: column;\n        width: 320px;\n        color: rgb(38, 38, 38);\n      }\n\n      .iris-chat-box.minimized {\n        height: auto;\n      }\n\n      .iris-chat-box.minimized .iris-chat-header {\n        border-radius: 8px;\n        cursor: pointer;\n      }\n\n      .iris-chat-box.minimized .iris-chat-messages, .iris-chat-box.minimized .iris-typing-indicator, .iris-chat-box.minimized .iris-chat-input-wrapper, .iris-chat-box.minimized .iris-chat-minimize, .iris-chat-box.minimized .iris-chat-close {\n        display: none;\n      }\n\n      .iris-chat-header {\n        background-color: #1e1e1e;\n        height: 44px;\n        color: #fff;\n        border-radius: 8px 8px 0 0;\n        text-align: center;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        flex: none;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        overflow: hidden;\n      }\n\n      .iris-chat-header-text {\n        flex: 1;\n      }\n\n      .iris-online-indicator {\n        color: #bfbfbf;\n        margin-right: 5px;\n        font-size: 12px;\n        user-select: none;\n        flex: none;\n      }\n\n      .iris-online-indicator.yes {\n        color: #80bf5f;\n      }\n\n      .iris-typing-indicator {\n        display: none;\n        background-color: rgba(255, 255, 255, 0.5);\n        font-size: 12px;\n        padding: 2px;\n        color: #777;\n      }\n\n      .iris-typing-indicator.yes {\n        display: block;\n      }\n\n      .iris-chat-messages {\n        flex: 1;\n        padding: 15px;\n        overflow-y: scroll;\n      }\n\n      .iris-chat-input-wrapper {\n        flex: none;\n        padding: 15px;\n        background-color: #efefef;\n        display: flex;\n        flex-direction: row;\n        border-radius: 0 0 8px 8px;\n      }\n\n      .iris-chat-input-wrapper textarea {\n        padding: 15px 8px;\n        border-radius: 4px;\n        border: 1px solid rgba(0,0,0,0);\n        width: auto;\n        font-size: 15px;\n        resize: none;\n        flex: 1;\n      }\n\n      .iris-chat-input-wrapper textarea:focus {\n        outline: none;\n        border: 1px solid #6dd0ed;\n      }\n\n      .iris-chat-input-wrapper button svg {\n        display: inline-block;\n        font-size: inherit;\n        height: 1em;\n        width: 1em;\n        overflow: visible;\n        vertical-align: -0.125em;\n      }\n\n      .iris-chat-input-wrapper button, .iris-chat-input-wrapper button:hover, .iris-chat-input-wrapper button:active, .iris-chat-input-wrapper button:focus {\n        flex: none;\n        color: #999;\n        background-color: transparent;\n        font-size: 30px;\n        padding: 5px;\n        border: 1px solid rgba(0,0,0,0);\n        border-radius: 4px;\n        margin-left: 5px;\n      }\n\n      .iris-chat-input-wrapper button:active, .iris-chat-input-wrapper button:focus {\n        outline: none;\n        border: 1px solid #6dd0ed;\n      }\n\n      .iris-chat-message {\n        display: flex;\n        flex-direction: column;\n        margin-bottom: 2px;\n        overflow-wrap: break-word;\n      }\n\n      .iris-msg-content {\n        background-color: #efefef;\n        padding: 6px 10px;\n        border-radius: 8px;\n        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);\n        flex: none;\n        max-width: 75%;\n      }\n\n      .emoji {\n        font-size: 1.3em;\n        line-height: 1em;\n      }\n\n      .iris-chat-message .emoji-only {\n        font-size: 3em;\n        text-align: center;\n      }\n\n      .iris-seen {\n        color: rgba(0, 0, 0, 0.45);\n        user-select: none;\n      }\n\n      .iris-seen.yes {\n        color: #4fc3f7;\n      }\n\n      .iris-seen svg {\n        width: 18px;\n      }\n\n      .iris-delivered-checkmark {\n        display: none;\n      }\n\n      .delivered .iris-delivered-checkmark {\n        display: initial;\n      }\n\n      .iris-chat-minimize, .iris-chat-close {\n        user-select: none;\n        cursor: pointer;\n        width: 45px;\n        line-height: 44px;\n      }\n\n      .iris-chat-message.their {\n        align-items: flex-start;\n      }\n\n      .iris-chat-message.their + .iris-chat-message.our .iris-msg-content, .day-separator + .iris-chat-message.our .iris-msg-content {\n        margin-top: 15px;\n        border-radius: 8px 0px 8px 8px;\n      }\n\n      .iris-chat-message.their:first-of-type .iris-msg-content {\n        border-radius: 0px 8px 8px 8px;\n      }\n\n      .iris-chat-message.our:first-of-type .iris-msg-content {\n        border-radius: 8px 0px 8px 8px;\n      }\n\n      .iris-chat-message.our + .iris-chat-message.their .iris-msg-content, .day-separator + .iris-chat-message.their .iris-msg-content {\n        margin-top: 15px;\n        border-radius: 0px 8px 8px 8px;\n      }\n\n      .iris-chat-message.our {\n        align-items: flex-end;\n      }\n\n      .iris-chat-message.our .iris-msg-content {\n        background-color: #c5ecf7;\n      }\n\n      .iris-chat-message .time {\n        text-align: right;\n        font-size: 12px;\n        color: rgba(0, 0, 0, 0.45);\n      }\n\n      .iris-non-string {\n        color: blue;\n      }\n\n      .day-separator {\n        display: inline-block;\n        border-radius: 8px;\n        background-color: rgba(227, 249, 255, 0.91);\n        padding: 6px 10px;\n        margin-top: 15px;\n        margin-left: auto;\n        margin-right: auto;\n        text-transform: uppercase;\n        font-size: 13px;\n        color: rgba(74, 74, 74, 0.88);\n        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);\n        user-select: none;\n      }\n\n      .day-separator:first-of-type {\n        margin-top: 0;\n      }\n\n      *[contenteditable="true"]:not(:focus) {\n        cursor: pointer;\n      }\n\n      *[contenteditable="true"] {\n        outline: none;\n      }\n\n      [placeholder]:empty:before {\n        content: attr(placeholder);\n        color: #999;\n      }\n\n      [placeholder]:empty:focus {\n        cursor: text;\n      }\n      ';
	    document.head.prepend(sheet);
	  },
	  getUrlParameter: function getUrlParameter(sParam, sParams) {
	    var sPageURL = sParams || window.location.search.substring(1);
	    var sURLVariables = sPageURL.split('&');
	    var sParameterName = void 0,
	        i = void 0;

	    for (i = 0; i < sURLVariables.length; i++) {
	      sParameterName = sURLVariables[i].split('=');
	      if (sParameterName[0] === sParam) {
	        return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
	      }
	    }
	  },
	  formatTime: function formatTime(date) {
	    var t = date.toLocaleTimeString(undefined, { timeStyle: 'short' });
	    var s = t.split(':');
	    if (s.length === 3) {
	      // safari tries to display seconds
	      return s[0] + ':' + s[1] + s[2].slice(2);
	    }
	    return t;
	  },
	  formatDate: function formatDate(date) {
	    var t = date.toLocaleString(undefined, { dateStyle: 'short', timeStyle: 'short' });
	    var s = t.split(':');
	    if (s.length === 3) {
	      // safari tries to display seconds
	      return s[0] + ':' + s[1] + s[2].slice(2);
	    }
	    return t;
	  },
	  debounce: function debounce(func, wait, immediate) {
	    var timeout = void 0;
	    return function () {
	      var context = this,
	          args = arguments;
	      var later = function later() {
	        timeout = null;
	        if (!immediate) func.apply(context, args);
	      };
	      var callNow = immediate && !timeout;
	      clearTimeout(timeout);
	      timeout = setTimeout(later, wait);
	      if (callNow) func.apply(context, args);
	    };
	  },
	  getDaySeparatorText: function getDaySeparatorText(date, dateStr, now, nowStr) {
	    if (!now) {
	      now = new Date();
	      nowStr = now.toLocaleDateString({ dateStyle: 'short' });
	    }
	    if (dateStr === nowStr) {
	      return 'today';
	    }
	    var dayDifference = Math.round((now - date) / (1000 * 60 * 60 * 24));
	    if (dayDifference == 0) {
	      return 'today';
	    }
	    if (dayDifference == 1) {
	      return 'yesterday';
	    }
	    if (dayDifference <= 5) {
	      return date.toLocaleDateString(undefined, { weekday: 'long' });
	    }
	    return dateStr;
	  },
	  setPublicState: function setPublicState(gun) {
	    this.publicState = gun;
	  },
	  getPublicState: function getPublicState() {
	    if (!this.publicState) {
	      this.publicState = new Gun('https://gun-us.herokuapp.com/gun');
	    }
	    return this.publicState;
	  },
	  createElement: function createElement(type, cls, parent) {
	    var el = document.createElement(type);
	    if (cls) {
	      el.setAttribute('class', cls);
	    }
	    if (parent) {
	      parent.appendChild(el);
	    }
	    return el;
	  },


	  isNode: isNode$2,
	  isElectron: isElectron,
	  isMobile: isMobile
	};

	// 19.1.2.1 Object.assign(target, source, ...)






	var $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	var _objectAssign = !$assign || _fails(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = _toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = _objectGops.f;
	  var isEnum = _objectPie.f;
	  while (aLen > index) {
	    var S = _iobject(arguments[index++]);
	    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!_descriptors || isEnum.call(S, key)) T[key] = S[key];
	    }
	  } return T;
	} : $assign;

	// 19.1.3.1 Object.assign(target, source)


	_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

	var assign = _core.Object.assign;

	var assign$1 = createCommonjsModule(function (module) {
	module.exports = { "default": assign, __esModule: true };
	});

	var _Object$assign = unwrapExports(assign$1);

	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
	var inited = false;
	function init () {
	  inited = true;
	  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	  for (var i = 0, len = code.length; i < len; ++i) {
	    lookup[i] = code[i];
	    revLookup[code.charCodeAt(i)] = i;
	  }

	  revLookup['-'.charCodeAt(0)] = 62;
	  revLookup['_'.charCodeAt(0)] = 63;
	}

	function toByteArray (b64) {
	  if (!inited) {
	    init();
	  }
	  var i, j, l, tmp, placeHolders, arr;
	  var len = b64.length;

	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

	  // base64 is 4/3 + up to two characters of the original data
	  arr = new Arr(len * 3 / 4 - placeHolders);

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len;

	  var L = 0;

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
	    arr[L++] = (tmp >> 16) & 0xFF;
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
	    arr[L++] = tmp & 0xFF;
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  if (!inited) {
	    init();
	  }
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
	  var output = '';
	  var parts = [];
	  var maxChunkLength = 16383; // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    output += lookup[tmp >> 2];
	    output += lookup[(tmp << 4) & 0x3F];
	    output += '==';
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
	    output += lookup[tmp >> 10];
	    output += lookup[(tmp >> 4) & 0x3F];
	    output += lookup[(tmp << 2) & 0x3F];
	    output += '=';
	  }

	  parts.push(output);

	  return parts.join('')
	}

	function read (buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? (nBytes - 1) : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];

	  i += d;

	  e = s & ((1 << (-nBits)) - 1);
	  s >>= (-nBits);
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1);
	  e >>= (-nBits);
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	function write (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
	  var i = isLE ? 0 : (nBytes - 1);
	  var d = isLE ? 1 : -1;
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

	  value = Math.abs(value);

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }

	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128;
	}

	var toString$2 = {}.toString;

	var isArray = Array.isArray || function (arr) {
	  return toString$2.call(arr) == '[object Array]';
	};

	var INSPECT_MAX_BYTES = 50;

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
	  ? global$1.TYPED_ARRAY_SUPPORT
	  : true;

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length);
	    that.__proto__ = Buffer.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length);
	    }
	    that.length = length;
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192; // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype;
	  return arr
	};

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	};

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype;
	  Buffer.__proto__ = Uint8Array;
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size);
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	};

	function allocUnsafe (that, size) {
	  assertSize(size);
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0;
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	};
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	};

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8';
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0;
	  that = createBuffer(that, length);

	  var actual = that.write(string, encoding);

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual);
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0;
	  that = createBuffer(that, length);
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255;
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array);
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset);
	  } else {
	    array = new Uint8Array(array, byteOffset, length);
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array;
	    that.__proto__ = Buffer.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array);
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (internalIsBuffer(obj)) {
	    var len = checked(obj.length) | 0;
	    that = createBuffer(that, len);

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len);
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	Buffer.isBuffer = isBuffer;
	function internalIsBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length;
	  var y = b.length;

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	};

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i;
	  if (length === undefined) {
	    length = 0;
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length;
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length);
	  var pos = 0;
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i];
	    if (!internalIsBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos);
	    pos += buf.length;
	  }
	  return buffer
	};

	function byteLength (string, encoding) {
	  if (internalIsBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string;
	  }

	  var len = string.length;
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer.byteLength = byteLength;

	function slowToString (encoding, start, end) {
	  var loweredCase = false;

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0;
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length;
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0;
	  start >>>= 0;

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8';

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase();
	        loweredCase = true;
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true;

	function swap (b, n, m) {
	  var i = b[n];
	  b[n] = b[m];
	  b[m] = i;
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length;
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1);
	  }
	  return this
	};

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length;
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3);
	    swap(this, i + 1, i + 2);
	  }
	  return this
	};

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length;
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7);
	    swap(this, i + 1, i + 6);
	    swap(this, i + 2, i + 5);
	    swap(this, i + 3, i + 4);
	  }
	  return this
	};

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0;
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	};

	Buffer.prototype.equals = function equals (b) {
	  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	};

	Buffer.prototype.inspect = function inspect () {
	  var str = '';
	  var max = INSPECT_MAX_BYTES;
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
	    if (this.length > max) str += ' ... ';
	  }
	  return '<Buffer ' + str + '>'
	};

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!internalIsBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0;
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0;
	  }
	  if (thisStart === undefined) {
	    thisStart = 0;
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length;
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0;
	  end >>>= 0;
	  thisStart >>>= 0;
	  thisEnd >>>= 0;

	  if (this === target) return 0

	  var x = thisEnd - thisStart;
	  var y = end - start;
	  var len = Math.min(x, y);

	  var thisCopy = this.slice(thisStart, thisEnd);
	  var targetCopy = target.slice(start, end);

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i];
	      y = targetCopy[i];
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset;
	    byteOffset = 0;
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff;
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000;
	  }
	  byteOffset = +byteOffset;  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1);
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1;
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0;
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding);
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (internalIsBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf$1(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF; // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf$1(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf$1 (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1;
	  var arrLength = arr.length;
	  var valLength = val.length;

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase();
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2;
	      arrLength /= 2;
	      valLength /= 2;
	      byteOffset /= 2;
	    }
	  }

	  function read$$1 (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i;
	  if (dir) {
	    var foundIndex = -1;
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read$$1(arr, i) === read$$1(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i;
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex;
	        foundIndex = -1;
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true;
	      for (var j = 0; j < valLength; j++) {
	        if (read$$1(arr, i + j) !== read$$1(val, j)) {
	          found = false;
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	};

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	};

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	};

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0;
	  var remaining = buf.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = Number(length);
	    if (length > remaining) {
	      length = remaining;
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length;
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2;
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16);
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed;
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write$$1 (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8';
	    length = this.length;
	    offset = 0;
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset;
	    length = this.length;
	    offset = 0;
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0;
	    if (isFinite(length)) {
	      length = length | 0;
	      if (encoding === undefined) encoding = 'utf8';
	    } else {
	      encoding = length;
	      length = undefined;
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset;
	  if (length === undefined || length > remaining) length = remaining;

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8';

	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	};

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	};

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return fromByteArray(buf)
	  } else {
	    return fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end);
	  var res = [];

	  var i = start;
	  while (i < end) {
	    var firstByte = buf[i];
	    var codePoint = null;
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1;

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint;

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte;
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1];
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          fourthByte = buf[i + 3];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint;
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD;
	      bytesPerSequence = 1;
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000;
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
	      codePoint = 0xDC00 | codePoint & 0x3FF;
	    }

	    res.push(codePoint);
	    i += bytesPerSequence;
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000;

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length;
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = '';
	  var i = 0;
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    );
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F);
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i]);
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length;

	  if (!start || start < 0) start = 0;
	  if (!end || end < 0 || end > len) end = len;

	  var out = '';
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i]);
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end);
	  var res = '';
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length;
	  start = ~~start;
	  end = end === undefined ? len : ~~end;

	  if (start < 0) {
	    start += len;
	    if (start < 0) start = 0;
	  } else if (start > len) {
	    start = len;
	  }

	  if (end < 0) {
	    end += len;
	    if (end < 0) end = 0;
	  } else if (end > len) {
	    end = len;
	  }

	  if (end < start) end = start;

	  var newBuf;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end);
	    newBuf.__proto__ = Buffer.prototype;
	  } else {
	    var sliceLen = end - start;
	    newBuf = new Buffer(sliceLen, undefined);
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start];
	    }
	  }

	  return newBuf
	};

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }

	  return val
	};

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length);
	  }

	  var val = this[offset + --byteLength];
	  var mul = 1;
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul;
	  }

	  return val
	};

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  return this[offset]
	};

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] | (this[offset + 1] << 8)
	};

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return (this[offset] << 8) | this[offset + 1]
	};

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	};

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	};

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val
	};

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var i = byteLength;
	  var mul = 1;
	  var val = this[offset + --i];
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val
	};

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	};

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset] | (this[offset + 1] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset + 1] | (this[offset] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	};

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	};

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return read(this, offset, true, 23, 4)
	};

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return read(this, offset, false, 23, 4)
	};

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return read(this, offset, true, 52, 8)
	};

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return read(this, offset, false, 52, 8)
	};

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var mul = 1;
	  var i = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  this[offset] = (value & 0xff);
	  return offset + 1
	};

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8;
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2
	};

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8);
	    this[offset + 1] = (value & 0xff);
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2
	};

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24);
	    this[offset + 2] = (value >>> 16);
	    this[offset + 1] = (value >>> 8);
	    this[offset] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4
	};

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24);
	    this[offset + 1] = (value >>> 16);
	    this[offset + 2] = (value >>> 8);
	    this[offset + 3] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4
	};

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = 0;
	  var mul = 1;
	  var sub = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  var sub = 0;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  if (value < 0) value = 0xff + value + 1;
	  this[offset] = (value & 0xff);
	  return offset + 1
	};

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2
	};

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8);
	    this[offset + 1] = (value & 0xff);
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2
	};

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	    this[offset + 2] = (value >>> 16);
	    this[offset + 3] = (value >>> 24);
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4
	};

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (value < 0) value = 0xffffffff + value + 1;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24);
	    this[offset + 1] = (value >>> 16);
	    this[offset + 2] = (value >>> 8);
	    this[offset + 3] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4
	};

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
	  }
	  write(buf, value, offset, littleEndian, 23, 4);
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	};

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	};

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
	  }
	  write(buf, value, offset, littleEndian, 52, 8);
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	};

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	};

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0;
	  if (!end && end !== 0) end = this.length;
	  if (targetStart >= target.length) targetStart = target.length;
	  if (!targetStart) targetStart = 0;
	  if (end > 0 && end < start) end = start;

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length;
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start;
	  }

	  var len = end - start;
	  var i;

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    );
	  }

	  return len
	};

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start;
	      start = 0;
	      end = this.length;
	    } else if (typeof end === 'string') {
	      encoding = end;
	      end = this.length;
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0);
	      if (code < 256) {
	        val = code;
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255;
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0;
	  end = end === undefined ? this.length : end >>> 0;

	  if (!val) val = 0;

	  var i;
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val;
	    }
	  } else {
	    var bytes = internalIsBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString());
	    var len = bytes.length;
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len];
	    }
	  }

	  return this
	};

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '=';
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity;
	  var codePoint;
	  var length = string.length;
	  var leadSurrogate = null;
	  var bytes = [];

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i);

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint;

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	        leadSurrogate = codePoint;
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	    }

	    leadSurrogate = null;

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint);
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF);
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo;
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i);
	    hi = c >> 8;
	    lo = c % 256;
	    byteArray.push(lo);
	    byteArray.push(hi);
	  }

	  return byteArray
	}


	function base64ToBytes (str) {
	  return toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i];
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}


	// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	function isBuffer(obj) {
	  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
	}

	function isFastBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}

	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
	}

	var pnglib = createCommonjsModule(function (module) {
	/**
	* A handy class to calculate color values.
	*
	* @version 1.0
	* @author Robert Eisele <robert@xarg.org>
	* @copyright Copyright (c) 2010, Robert Eisele
	* @link http://www.xarg.org/2010/03/generate-client-side-png-files-using-javascript/
	* @license http://www.opensource.org/licenses/bsd-license.php BSD License
	*
	*/

	(function() {

		// helper functions for that ctx
		function write(buffer, offs) {
			for (var i = 2; i < arguments.length; i++) {
				for (var j = 0; j < arguments[i].length; j++) {
					buffer[offs++] = arguments[i].charAt(j);
				}
			}
		}

		function byte2(w) {
			return String.fromCharCode((w >> 8) & 255, w & 255);
		}

		function byte4(w) {
			return String.fromCharCode((w >> 24) & 255, (w >> 16) & 255, (w >> 8) & 255, w & 255);
		}

		function byte2lsb(w) {
			return String.fromCharCode(w & 255, (w >> 8) & 255);
		}

		// modified from original source to support NPM
		var PNGlib = function(width,height,depth) {

			this.width   = width;
			this.height  = height;
			this.depth   = depth;

			// pixel data and row filter identifier size
			this.pix_size = height * (width + 1);

			// deflate header, pix_size, block headers, adler32 checksum
			this.data_size = 2 + this.pix_size + 5 * Math.floor((0xfffe + this.pix_size) / 0xffff) + 4;

			// offsets and sizes of Png chunks
			this.ihdr_offs = 0;									// IHDR offset and size
			this.ihdr_size = 4 + 4 + 13 + 4;
			this.plte_offs = this.ihdr_offs + this.ihdr_size;	// PLTE offset and size
			this.plte_size = 4 + 4 + 3 * depth + 4;
			this.trns_offs = this.plte_offs + this.plte_size;	// tRNS offset and size
			this.trns_size = 4 + 4 + depth + 4;
			this.idat_offs = this.trns_offs + this.trns_size;	// IDAT offset and size
			this.idat_size = 4 + 4 + this.data_size + 4;
			this.iend_offs = this.idat_offs + this.idat_size;	// IEND offset and size
			this.iend_size = 4 + 4 + 4;
			this.buffer_size  = this.iend_offs + this.iend_size;	// total PNG size

			this.buffer  = new Array();
			this.palette = new Object();
			this.pindex  = 0;

			var _crc32 = new Array();

			// initialize buffer with zero bytes
			for (var i = 0; i < this.buffer_size; i++) {
				this.buffer[i] = "\x00";
			}

			// initialize non-zero elements
			write(this.buffer, this.ihdr_offs, byte4(this.ihdr_size - 12), 'IHDR', byte4(width), byte4(height), "\x08\x03");
			write(this.buffer, this.plte_offs, byte4(this.plte_size - 12), 'PLTE');
			write(this.buffer, this.trns_offs, byte4(this.trns_size - 12), 'tRNS');
			write(this.buffer, this.idat_offs, byte4(this.idat_size - 12), 'IDAT');
			write(this.buffer, this.iend_offs, byte4(this.iend_size - 12), 'IEND');

			// initialize deflate header
			var header = ((8 + (7 << 4)) << 8) | (3 << 6);
			header+= 31 - (header % 31);

			write(this.buffer, this.idat_offs + 8, byte2(header));

			// initialize deflate block headers
			for (var i = 0; (i << 16) - 1 < this.pix_size; i++) {
				var size, bits;
				if (i + 0xffff < this.pix_size) {
					size = 0xffff;
					bits = "\x00";
				} else {
					size = this.pix_size - (i << 16) - i;
					bits = "\x01";
				}
				write(this.buffer, this.idat_offs + 8 + 2 + (i << 16) + (i << 2), bits, byte2lsb(size), byte2lsb(~size));
			}

			/* Create crc32 lookup table */
			for (var i = 0; i < 256; i++) {
				var c = i;
				for (var j = 0; j < 8; j++) {
					if (c & 1) {
						c = -306674912 ^ ((c >> 1) & 0x7fffffff);
					} else {
						c = (c >> 1) & 0x7fffffff;
					}
				}
				_crc32[i] = c;
			}

			// compute the index into a png for a given pixel
			this.index = function(x,y) {
				var i = y * (this.width + 1) + x + 1;
				var j = this.idat_offs + 8 + 2 + 5 * Math.floor((i / 0xffff) + 1) + i;
				return j;
			};

			// convert a color and build up the palette
			this.color = function(red, green, blue, alpha) {

				alpha = alpha >= 0 ? alpha : 255;
				var color = (((((alpha << 8) | red) << 8) | green) << 8) | blue;

				if (typeof this.palette[color] == "undefined") {
					if (this.pindex == this.depth) return "\x00";

					var ndx = this.plte_offs + 8 + 3 * this.pindex;

					this.buffer[ndx + 0] = String.fromCharCode(red);
					this.buffer[ndx + 1] = String.fromCharCode(green);
					this.buffer[ndx + 2] = String.fromCharCode(blue);
					this.buffer[this.trns_offs+8+this.pindex] = String.fromCharCode(alpha);

					this.palette[color] = String.fromCharCode(this.pindex++);
				}
				return this.palette[color];
			};

			// output a PNG string, Base64 encoded
			this.getBase64 = function() {

				var s = this.getDump();

				var ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
				var c1, c2, c3, e1, e2, e3, e4;
				var l = s.length;
				var i = 0;
				var r = "";

				do {
					c1 = s.charCodeAt(i);
					e1 = c1 >> 2;
					c2 = s.charCodeAt(i+1);
					e2 = ((c1 & 3) << 4) | (c2 >> 4);
					c3 = s.charCodeAt(i+2);
					if (l < i+2) { e3 = 64; } else { e3 = ((c2 & 0xf) << 2) | (c3 >> 6); }
					if (l < i+3) { e4 = 64; } else { e4 = c3 & 0x3f; }
					r+= ch.charAt(e1) + ch.charAt(e2) + ch.charAt(e3) + ch.charAt(e4);
				} while ((i+= 3) < l);
				return r;
			};

			// output a PNG string
			this.getDump = function() {

				// compute adler32 of output pixels + row filter bytes
				var BASE = 65521; /* largest prime smaller than 65536 */
				var NMAX = 5552;  /* NMAX is the largest n such that 255n(n+1)/2 + (n+1)(BASE-1) <= 2^32-1 */
				var s1 = 1;
				var s2 = 0;
				var n = NMAX;

				for (var y = 0; y < this.height; y++) {
					for (var x = -1; x < this.width; x++) {
						s1+= this.buffer[this.index(x, y)].charCodeAt(0);
						s2+= s1;
						if ((n-= 1) == 0) {
							s1%= BASE;
							s2%= BASE;
							n = NMAX;
						}
					}
				}
				s1%= BASE;
				s2%= BASE;
				write(this.buffer, this.idat_offs + this.idat_size - 8, byte4((s2 << 16) | s1));

				// compute crc32 of the PNG chunks
				function crc32(png, offs, size) {
					var crc = -1;
					for (var i = 4; i < size-4; i += 1) {
						crc = _crc32[(crc ^ png[offs+i].charCodeAt(0)) & 0xff] ^ ((crc >> 8) & 0x00ffffff);
					}
					write(png, offs+size-4, byte4(crc ^ -1));
				}

				crc32(this.buffer, this.ihdr_offs, this.ihdr_size);
				crc32(this.buffer, this.plte_offs, this.plte_size);
				crc32(this.buffer, this.trns_offs, this.trns_size);
				crc32(this.buffer, this.idat_offs, this.idat_size);
				crc32(this.buffer, this.iend_offs, this.iend_size);

				// convert PNG to string
				return "\x89PNG\r\n\x1a\n"+this.buffer.join('');
			};
		};

		// modified from original source to support NPM
		{
			module.exports = PNGlib;
		}
	})();
	});

	var identicon = createCommonjsModule(function (module) {
	/**
	 * Identicon.js 2.3.3
	 * http://github.com/stewartlord/identicon.js
	 *
	 * PNGLib required for PNG output
	 * http://www.xarg.org/download/pnglib.js
	 *
	 * Copyright 2018, Stewart Lord
	 * Released under the BSD license
	 * http://www.opensource.org/licenses/bsd-license.php
	 */

	(function() {
	    var PNGlib;
	    {
	        PNGlib = pnglib;
	    }

	    var Identicon = function(hash, options){
	        if (typeof(hash) !== 'string' || hash.length < 15) {
	            throw 'A hash of at least 15 characters is required.';
	        }

	        this.defaults = {
	            background: [240, 240, 240, 255],
	            margin:     0.08,
	            size:       64,
	            saturation: 0.7,
	            brightness: 0.5,
	            format:     'png'
	        };

	        this.options = typeof(options) === 'object' ? options : this.defaults;

	        // backward compatibility with old constructor (hash, size, margin)
	        if (typeof(arguments[1]) === 'number') { this.options.size   = arguments[1]; }
	        if (arguments[2])                      { this.options.margin = arguments[2]; }

	        this.hash        = hash;
	        this.background  = this.options.background || this.defaults.background;
	        this.size        = this.options.size       || this.defaults.size;
	        this.format      = this.options.format     || this.defaults.format;
	        this.margin      = this.options.margin !== undefined ? this.options.margin : this.defaults.margin;

	        // foreground defaults to last 7 chars as hue at 70% saturation, 50% brightness
	        var hue          = parseInt(this.hash.substr(-7), 16) / 0xfffffff;
	        var saturation   = this.options.saturation || this.defaults.saturation;
	        var brightness   = this.options.brightness || this.defaults.brightness;
	        this.foreground  = this.options.foreground || this.hsl2rgb(hue, saturation, brightness);
	    };

	    Identicon.prototype = {
	        background: null,
	        foreground: null,
	        hash:       null,
	        margin:     null,
	        size:       null,
	        format:     null,

	        image: function(){
	            return this.isSvg()
	                ? new Svg(this.size, this.foreground, this.background)
	                : new PNGlib(this.size, this.size, 256);
	        },

	        render: function(){
	            var image      = this.image(),
	                size       = this.size,
	                baseMargin = Math.floor(size * this.margin),
	                cell       = Math.floor((size - (baseMargin * 2)) / 5),
	                margin     = Math.floor((size - cell * 5) / 2),
	                bg         = image.color.apply(image, this.background),
	                fg         = image.color.apply(image, this.foreground);

	            // the first 15 characters of the hash control the pixels (even/odd)
	            // they are drawn down the middle first, then mirrored outwards
	            var i, color;
	            for (i = 0; i < 15; i++) {
	                color = parseInt(this.hash.charAt(i), 16) % 2 ? bg : fg;
	                if (i < 5) {
	                    this.rectangle(2 * cell + margin, i * cell + margin, cell, cell, color, image);
	                } else if (i < 10) {
	                    this.rectangle(1 * cell + margin, (i - 5) * cell + margin, cell, cell, color, image);
	                    this.rectangle(3 * cell + margin, (i - 5) * cell + margin, cell, cell, color, image);
	                } else if (i < 15) {
	                    this.rectangle(0 * cell + margin, (i - 10) * cell + margin, cell, cell, color, image);
	                    this.rectangle(4 * cell + margin, (i - 10) * cell + margin, cell, cell, color, image);
	                }
	            }

	            return image;
	        },

	        rectangle: function(x, y, w, h, color, image){
	            if (this.isSvg()) {
	                image.rectangles.push({x: x, y: y, w: w, h: h, color: color});
	            } else {
	                var i, j;
	                for (i = x; i < x + w; i++) {
	                    for (j = y; j < y + h; j++) {
	                        image.buffer[image.index(i, j)] = color;
	                    }
	                }
	            }
	        },

	        // adapted from: https://gist.github.com/aemkei/1325937
	        hsl2rgb: function(h, s, b){
	            h *= 6;
	            s = [
	                b += s *= b < .5 ? b : 1 - b,
	                b - h % 1 * s * 2,
	                b -= s *= 2,
	                b,
	                b + h % 1 * s,
	                b + s
	            ];

	            return [
	                s[ ~~h    % 6 ] * 255, // red
	                s[ (h|16) % 6 ] * 255, // green
	                s[ (h|8)  % 6 ] * 255  // blue
	            ];
	        },

	        toString: function(raw){
	            // backward compatibility with old toString, default to base64
	            if (raw) {
	                return this.render().getDump();
	            } else {
	                return this.render().getBase64();
	            }
	        },

	        isSvg: function(){
	            return this.format.match(/svg/i)
	        }
	    };

	    var Svg = function(size, foreground, background){
	        this.size       = size;
	        this.foreground = this.color.apply(this, foreground);
	        this.background = this.color.apply(this, background);
	        this.rectangles = [];
	    };

	    Svg.prototype = {
	        size:       null,
	        foreground: null,
	        background: null,
	        rectangles: null,

	        color: function(r, g, b, a){
	            var values = [r, g, b].map(Math.round);
	            values.push((a >= 0) && (a <= 255) ? a/255 : 1);
	            return 'rgba(' + values.join(',') + ')';
	        },

	        getDump: function(){
	          var i,
	                xml,
	                rect,
	                fg     = this.foreground,
	                bg     = this.background,
	                stroke = this.size * 0.005;

	            xml = "<svg xmlns='http://www.w3.org/2000/svg'"
	                + " width='" + this.size + "' height='" + this.size + "'"
	                + " style='background-color:" + bg + ";'>"
	                + "<g style='fill:" + fg + "; stroke:" + fg + "; stroke-width:" + stroke + ";'>";

	            for (i = 0; i < this.rectangles.length; i++) {
	                rect = this.rectangles[i];
	                if (rect.color == bg) continue;
	                xml += "<rect "
	                    + " x='"      + rect.x + "'"
	                    + " y='"      + rect.y + "'"
	                    + " width='"  + rect.w + "'"
	                    + " height='" + rect.h + "'"
	                    + "/>";
	            }
	            xml += "</g></svg>";

	            return xml;
	        },

	        getBase64: function(){
	            if ('function' === typeof btoa) {
	                return btoa(this.getDump());
	            } else if (Buffer) {
	                return new Buffer(this.getDump(), 'binary').toString('base64');
	            } else {
	                throw 'Cannot generate base64 output';
	            }
	        }
	    };

	    {
	        module.exports = Identicon;
	    }
	})();
	});

	var UNIQUE_ID_VALIDATORS = {
	  email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
	  bitcoin: /^[13][a-km-zA-HJ-NP-Z0-9]{26,33}$/,
	  bitcoin_address: /^[13][a-km-zA-HJ-NP-Z0-9]{26,33}$/,
	  ip: /^(([1-9]?\d|1\d\d|2[0-5][0-5]|2[0-4]\d)\.){3}([1-9]?\d|1\d\d|2[0-5][0-5]|2[0-4]\d)$/,
	  ipv6: /^(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}$/,
	  gpg_fingerprint: null,
	  gpg_keyid: null,
	  google_oauth2: null,
	  tel: /^\d{7,}$/,
	  phone: /^\d{7,}$/,
	  keyID: null,
	  url: /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi,
	  account: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
	  uuid: /[0-9a-f]{8}\-[0-9a-f]{4}\-[0-9a-f]{4}\-[0-9a-f]{4}\-[0-9a-f]{12}/
	};

	/**
	* A simple key-value pair with helper functions.
	*
	* Constructor: new Attribute(value), new Attribute(type, value) or new Attribute({type, value})
	*/

	var Attribute = function () {
	  /**
	  * @param {string} a
	  * @param {string} b
	  */
	  function Attribute(a, b) {
	    _classCallCheck(this, Attribute);

	    if (typeof a === 'object') {
	      if (typeof a.value !== 'string') {
	        throw new Error('param1.value must be a string, got ' + _typeof(a.value) + ': ' + _JSON$stringify(a.value));
	      }
	      if (typeof a.type !== 'string') {
	        throw new Error('param1.type must be a string, got ' + _typeof(a.type) + ': ' + _JSON$stringify(a.type));
	      }
	      b = a.value;
	      a = a.type;
	    }
	    if (typeof a !== 'string') {
	      throw new Error('First param must be a string, got ' + (typeof a === 'undefined' ? 'undefined' : _typeof(a)) + ': ' + _JSON$stringify(a));
	    }
	    if (!a.length) {
	      throw new Error('First param string is empty');
	    }
	    if (b) {
	      if (typeof b !== 'string') {
	        throw new Error('Second parameter must be a string, got ' + (typeof b === 'undefined' ? 'undefined' : _typeof(b)) + ': ' + _JSON$stringify(b));
	      }
	      if (!b.length) {
	        throw new Error('Second param string is empty');
	      }
	      this.type = a;
	      this.value = b;
	    } else {
	      this.value = a;
	      var t = Attribute.guessTypeOf(this.value);
	      if (t) {
	        this.type = t;
	      } else {
	        throw new Error('Type of attribute was omitted and could not be guessed');
	      }
	    }
	  }

	  /**
	  * @returns {Attribute} uuid
	  */


	  Attribute.getUuid = function getUuid() {
	    var b = function b(a) {
	      return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
	    };
	    return new Attribute('uuid', b());
	  };

	  /**
	  * @returns {Object} an object with attribute types as keys and regex patterns as values
	  */


	  Attribute.getUniqueIdValidators = function getUniqueIdValidators() {
	    return UNIQUE_ID_VALIDATORS;
	  };

	  /**
	  * @param {string} type attribute type
	  * @returns {boolean} true if the attribute type is unique
	  */


	  Attribute.isUniqueType = function isUniqueType(type) {
	    return _Object$keys(UNIQUE_ID_VALIDATORS).indexOf(type) > -1;
	  };

	  /**
	  * @returns {boolean} true if the attribute type is unique
	  */


	  Attribute.prototype.isUniqueType = function isUniqueType() {
	    return Attribute.isUniqueType(this.type);
	  };

	  /**
	  * @param {string} value guess type of this attribute value
	  * @returns {string} type of attribute value or undefined
	  */


	  Attribute.guessTypeOf = function guessTypeOf(value) {
	    for (var key in UNIQUE_ID_VALIDATORS) {
	      if (value.match(UNIQUE_ID_VALIDATORS[key])) {
	        return key;
	      }
	    }
	  };

	  /**
	  * @param {Attribute} a
	  * @param {Attribute} b
	  * @returns {boolean} true if params are equal
	  */


	  Attribute.equals = function equals(a, b) {
	    return a.equals(b);
	  };

	  /**
	  * @param {Attribute} a attribute to compare to
	  * @returns {boolean} true if attribute matches param
	  */


	  Attribute.prototype.equals = function equals(a) {
	    return a && this.type === a.type && this.value === a.value;
	  };

	  /**
	  * @returns {string} uri - `${encodeURIComponent(this.value)}:${encodeURIComponent(this.type)}`
	  * @example
	  * user%20example.com:email
	  */


	  Attribute.prototype.uri = function uri() {
	    return encodeURIComponent(this.value) + ':' + encodeURIComponent(this.type);
	  };

	  Attribute.prototype.identiconXml = function identiconXml() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    return util.getHash(encodeURIComponent(this.type) + ':' + encodeURIComponent(this.value), 'hex').then(function (hash) {
	      var identicon$$1 = new identicon(hash, { width: options.width, format: 'svg' });
	      return identicon$$1.toString(true);
	    });
	  };

	  Attribute.prototype.identiconSrc = function identiconSrc() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    return util.getHash(encodeURIComponent(this.type) + ':' + encodeURIComponent(this.value), 'hex').then(function (hash) {
	      var identicon$$1 = new identicon(hash, { width: options.width, format: 'svg' });
	      return 'data:image/svg+xml;base64,' + identicon$$1.toString();
	    });
	  };

	  /**
	  * Generate a visually recognizable representation of the attribute
	  * @param {object} options {width}
	  * @returns {HTMLElement} identicon div element
	  */


	  Attribute.prototype.identicon = function identicon$$1() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    options = _Object$assign({
	      width: 50,
	      showType: true
	    }, options);
	    util.injectCss(); // some other way that is not called on each identicon generation?

	    var div = document.createElement('div');
	    div.className = 'iris-identicon';
	    div.style.width = options.width + 'px';
	    div.style.height = options.width + 'px';

	    var img = document.createElement('img');
	    img.alt = '';
	    img.width = options.width;
	    img.height = options.width;
	    this.identiconSrc(options).then(function (src) {
	      return img.src = src;
	    });

	    if (options.showType) {
	      var name = document.createElement('span');
	      name.className = 'iris-distance';
	      name.style.fontSize = options.width > 50 ? options.width / 4 + 'px' : '10px';
	      name.textContent = this.type.slice(0, 5);
	      div.appendChild(name);
	    }

	    div.appendChild(img);

	    return div;
	  };

	  return Attribute;
	}();

	// eslint-disable-line no-unused-vars

	var myKey = void 0;

	/**
	* Key management utils. Wraps GUN's Gun.SEA. https://gun.eco/docs/Gun.SEA
	*/

	var Key = function () {
	  function Key() {
	    _classCallCheck(this, Key);
	  }

	  /**
	  * Load private key from datadir/iris.key on node.js or from local storage 'iris.myKey' in browser.
	  *
	  * If the key does not exist, it is generated.
	  * @param {string} datadir directory to find key from. In browser, localStorage is used instead.
	  * @param {string} keyfile keyfile name (within datadir)
	  * @param {Object} fs node: require('fs'); browser: leave empty.
	  * @returns {Promise<Object>} keypair object
	  */
	  Key.getActiveKey = async function getActiveKey() {
	    var datadir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.';
	    var keyfile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'iris.key';
	    var fs = arguments[2];

	    if (myKey) {
	      return myKey;
	    }
	    if (fs) {
	      var privKeyFile = datadir + '/' + keyfile;
	      if (fs.existsSync(privKeyFile)) {
	        var f = fs.readFileSync(privKeyFile, 'utf8');
	        myKey = Key.fromString(f);
	      } else {
	        var newKey = await Key.generate();
	        myKey = myKey || newKey; // eslint-disable-line require-atomic-updates
	        fs.writeFileSync(privKeyFile, Key.toString(myKey));
	        fs.chmodSync(privKeyFile, 400);
	      }
	      if (!myKey) {
	        throw new Error('loading default key failed - check ' + datadir + '/' + keyfile);
	      }
	    } else {
	      var str = window.localStorage.getItem('iris.myKey');
	      if (str) {
	        myKey = Key.fromString(str);
	      } else {
	        var _newKey = await Key.generate();
	        myKey = myKey || _newKey; // eslint-disable-line require-atomic-updates
	        window.localStorage.setItem('iris.myKey', Key.toString(myKey));
	      }
	      if (!myKey) {
	        throw new Error('loading default key failed - check localStorage iris.myKey');
	      }
	    }
	    return myKey;
	  };

	  Key.getDefault = function getDefault() {
	    var datadir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.';
	    var keyfile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'iris.key';

	    return Key.getActiveKey(datadir, keyfile);
	  };

	  Key.getActivePub = async function getActivePub() {
	    var datadir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.';
	    var keyfile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'iris.key';

	    var key = await Key.getActiveKey(datadir, keyfile);
	    return key.pub;
	  };

	  /**
	  *
	  */


	  Key.setActiveKey = function setActiveKey(key) {
	    var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	    var datadir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
	    var keyfile = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'iris.key';
	    var fs = arguments[4];

	    myKey = key;
	    if (!save) return;
	    if (util.isNode) {
	      var privKeyFile = datadir + '/' + keyfile;
	      fs.writeFileSync(privKeyFile, Key.toString(myKey));
	      fs.chmodSync(privKeyFile, 400);
	    } else {
	      window.localStorage.setItem('iris.myKey', Key.toString(myKey));
	    }
	  };

	  /**
	  * Serialize key as JSON string
	  * @param {Object} key key to serialize
	  * @returns {String} JSON Web Key string
	  */


	  Key.toString = function toString(key) {
	    return _JSON$stringify(key);
	  };

	  /**
	  * Get keyID
	  * @param {Object} key key to get an id for. Currently just returns the public key string.
	  * @returns {String} public key string
	  */


	  Key.getId = function getId(key) {
	    if (!(key && key.pub)) {
	      throw new Error('missing param');
	    }
	    return key.pub; // hack until GUN supports lookups by keyID
	    //return util.getHash(key.pub);
	  };

	  /**
	  * Get a keypair from a JSON string.
	  * @param {String} str key JSON
	  * @returns {Object} Gun.SEA keypair object
	  */


	  Key.fromString = function fromString(str) {
	    return JSON.parse(str);
	  };

	  /**
	  * Generate a new keypair
	  * @returns {Promise<Object>} Gun.SEA keypair object
	  */


	  Key.generate = function generate() {
	    return Gun.SEA.pair();
	  };

	  /**
	  * Sign a message
	  * @param {String} msg message to sign
	  * @param {Object} pair signing keypair
	  * @returns {Promise<String>} signed message string
	  */


	  Key.sign = async function sign(msg, pair) {
	    var sig = await Gun.SEA.sign(msg, pair);
	    return 'a' + sig;
	  };

	  /**
	  * Verify a signed message
	  * @param {String} msg message to verify
	  * @param {Object} pubKey public key of the signer
	  * @returns {Promise<String>} signature string
	  */


	  Key.verify = function verify(msg, pubKey) {

	    return Gun.SEA.verify(msg.slice(1), pubKey);
	  };

	  return Key;
	}();

	var errorMsg = 'Invalid  message:';

	var ValidationError = function (_Error) {
	  _inherits(ValidationError, _Error);

	  function ValidationError() {
	    _classCallCheck(this, ValidationError);

	    return _possibleConstructorReturn(this, _Error.apply(this, arguments));
	  }

	  return ValidationError;
	}(Error);

	/**
	* Signed message object. Your friends can index and relay your messages, while others can still verify that they were signed by you.
	*
	* Fields: signedData, signer (public key) and signature.
	*
	* signedData has an author, signer, type, time and optionally other fields.
	*
	* signature covers the utf8 string representation of signedData. Since messages are digitally signed, users only need to care about the message signer and not who relayed it or whose index it was found from.
	*
	* signer is the entity that verified its origin. In other words: message author and signer can be different entities, and only the signer needs to use Iris.
	*
	* For example, a crawler can import and sign other people's messages from Twitter. Only the users who trust the crawler will see the messages.
	*
	* "Rating" type messages, when added to an SocialNetwork, can add or remove Identities from the web of trust. Verification/unverification messages can add or remove Attributes from an Contact. Other types of messages such as social media "post" are just indexed by their author, recipient and time.
	*
	* Constructor: creates a message from the param obj.signedData that must contain at least the mandatory fields: author, recipient, type and time. You can use createRating() and createVerification() to automatically populate some of these fields and optionally sign the message.
	* @param obj
	*
	* @example
	* https://github.com/irislib/iris-lib/blob/master/__tests__/SignedMessage.js
	*
	* Rating message:
	* {
	*   signedData: {
	*     author: {name:'Alice', key:'ABCD1234'},
	*     recipient: {name:'Bob', email:'bob@example.com'},
	*     type: 'rating',
	*     rating: 1,
	*     maxRating: 10,
	*     minRating: -10,
	*     text: 'Traded 1 BTC'
	*   },
	*   signer: 'ABCD1234',
	*   signature: '1234ABCD'
	* }
	*
	* Verification message:
	* {
	*   signedData: {
	*     author: {name:'Alice', key:'ABCD1234'},
	*     recipient: {
	*       name: 'Bob',
	*       email: ['bob@example.com', 'bob.saget@example.com'],
	*       bitcoin: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa'
	*     },
	*     type: 'verification'
	*   },
	*   signer: 'ABCD1234',
	*   signature: '1234ABCD'
	* }
	*/


	var SignedMessage = function () {
	  function SignedMessage(obj) {
	    _classCallCheck(this, SignedMessage);

	    if (obj.signedData) {
	      this.signedData = obj.signedData;
	    }
	    if (obj.pubKey) {
	      this.pubKey = obj.pubKey;
	    }
	    if (obj.sig) {
	      if (typeof obj.sig !== 'string') {
	        throw new ValidationError('SignedMessage signature must be a string');
	      }
	      this.sig = obj.sig;
	      this.getHash();
	    }
	    this._validate();
	  }

	  SignedMessage._getArray = function _getArray(authorOrRecipient) {
	    var arr = [];
	    var keys = _Object$keys(authorOrRecipient);
	    for (var i = 0; i < keys.length; i++) {
	      var type = keys[i];
	      var value = authorOrRecipient[keys[i]];
	      if (typeof value === 'string') {
	        arr.push(new Attribute(type, value));
	      } else {
	        // array
	        for (var j = 0; j < value.length; j++) {
	          var elementValue = value[j];
	          arr.push(new Attribute(type, elementValue));
	        }
	      }
	    }
	    return arr;
	  };

	  SignedMessage._getIterable = function _getIterable(authorOrRecipient) {
	    var _ref;

	    return _ref = {}, _ref[_Symbol$iterator] = /*#__PURE__*/regenerator.mark(function _callee() {
	      var keys, i, type, value, j, elementValue;
	      return regenerator.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              keys = _Object$keys(authorOrRecipient);
	              i = 0;

	            case 2:
	              if (!(i < keys.length)) {
	                _context.next = 21;
	                break;
	              }

	              type = keys[i];
	              value = authorOrRecipient[keys[i]];

	              if (!(typeof value === 'string')) {
	                _context.next = 10;
	                break;
	              }

	              _context.next = 8;
	              return new Attribute(type, value);

	            case 8:
	              _context.next = 18;
	              break;

	            case 10:
	              j = 0;

	            case 11:
	              if (!(j < value.length)) {
	                _context.next = 18;
	                break;
	              }

	              elementValue = value[j];
	              _context.next = 15;
	              return new Attribute(type, elementValue);

	            case 15:
	              j++;
	              _context.next = 11;
	              break;

	            case 18:
	              i++;
	              _context.next = 2;
	              break;

	            case 21:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, this);
	    }), _ref;
	  };

	  /**
	  * @returns {object} Javascript iterator over author attributes
	  */


	  SignedMessage.prototype.getAuthorIterable = function getAuthorIterable() {
	    return SignedMessage._getIterable(this.signedData.author);
	  };

	  /**
	  * @returns {object} Javascript iterator over recipient attributes
	  */


	  SignedMessage.prototype.getRecipientIterable = function getRecipientIterable() {
	    return SignedMessage._getIterable(this.signedData.recipient);
	  };

	  /**
	  * @returns {array} Array containing author attributes
	  */


	  SignedMessage.prototype.getAuthorArray = function getAuthorArray() {
	    return SignedMessage._getArray(this.signedData.author);
	  };

	  /**
	  * @returns {array} Array containing recipient attributes
	  */


	  SignedMessage.prototype.getRecipientArray = function getRecipientArray() {
	    return this.signedData.recipient ? SignedMessage._getArray(this.signedData.recipient) : [];
	  };

	  /**
	  * @returns {string} SignedMessage signer keyID, i.e. base64 hash of public key
	  */


	  SignedMessage.prototype.getSignerKeyID = function getSignerKeyID() {
	    return this.pubKey; // hack until gun supports keyID lookups
	    //return util.getHash(this.pubKey);
	  };

	  SignedMessage.prototype._validate = function _validate() {
	    if (!this.signedData) {
	      throw new ValidationError(errorMsg + ' Missing signedData');
	    }
	    if (typeof this.signedData !== 'object') {
	      throw new ValidationError(errorMsg + ' signedData must be an object');
	    }
	    var d = this.signedData;

	    if (!d.type) {
	      throw new ValidationError(errorMsg + ' Missing type definition');
	    }
	    if (!d.author) {
	      throw new ValidationError(errorMsg + ' Missing author');
	    }
	    if (typeof d.author !== 'object') {
	      throw new ValidationError(errorMsg + ' Author must be object');
	    }
	    if (Array.isArray(d.author)) {
	      throw new ValidationError(errorMsg + ' Author must not be an array');
	    }
	    if (_Object$keys(d.author).length === 0) {
	      throw new ValidationError(errorMsg + ' Author empty');
	    }
	    if (this.pubKey) {
	      this.signerKeyHash = this.getSignerKeyID();
	    }
	    for (var attr in d.author) {
	      var t = _typeof(d.author[attr]);
	      if (t !== 'string') {
	        if (Array.isArray(d.author[attr])) {
	          for (var i = 0; i < d.author[attr].length; i++) {
	            if (typeof d.author[attr][i] !== 'string') {
	              throw new ValidationError(errorMsg + ' Author attribute must be string, got ' + attr + ': [' + d.author[attr][i] + ']');
	            }
	            if (d.author[attr][i].length === 0) {
	              throw new ValidationError(errorMsg + ' author ' + attr + ' in array[' + i + '] is empty');
	            }
	          }
	        } else {
	          throw new ValidationError(errorMsg + ' Author attribute must be string or array, got ' + attr + ': ' + d.author[attr]);
	        }
	      }
	      if (attr === 'keyID') {
	        if (t !== 'string') {
	          throw new ValidationError(errorMsg + ' Author keyID must be string, got ' + t);
	        }
	        if (this.signerKeyHash && d.author[attr] !== this.signerKeyHash) {
	          throw new ValidationError(errorMsg + ' If message has a keyID author, it must be signed by the same key');
	        }
	      }
	    }
	    if (d.recipient) {
	      if (typeof d.recipient !== 'object') {
	        throw new ValidationError(errorMsg + ' Recipient must be object');
	      }
	      if (Array.isArray(d.recipient)) {
	        throw new ValidationError(errorMsg + ' Recipient must not be an array');
	      }
	      if (_Object$keys(d.recipient).length === 0) {
	        throw new ValidationError(errorMsg + ' Recipient empty');
	      }
	      for (var _attr in d.recipient) {
	        var _t = _typeof(d.recipient[_attr]);
	        if (_t !== 'string') {
	          if (Array.isArray(d.recipient[_attr])) {
	            for (var _i = 0; _i < d.recipient[_attr].length; _i++) {
	              if (typeof d.recipient[_attr][_i] !== 'string') {
	                throw new ValidationError(errorMsg + ' Recipient attribute must be string, got ' + _attr + ': [' + d.recipient[_attr][_i] + ']');
	              }
	              if (d.recipient[_attr][_i].length === 0) {
	                throw new ValidationError(errorMsg + ' recipient ' + _attr + ' in array[' + _i + '] is empty');
	              }
	            }
	          } else {
	            throw new ValidationError(errorMsg + ' Recipient attribute must be string or array, got ' + _attr + ': ' + d.recipient[_attr]);
	          }
	        }
	      }
	    }
	    if (!(d.time || d.timestamp)) {
	      throw new ValidationError(errorMsg + ' Missing time field');
	    }

	    if (!Date.parse(d.time || d.timestamp)) {
	      throw new ValidationError(errorMsg + ' Invalid time field');
	    }

	    if (d.type === 'rating') {
	      if (isNaN(d.rating)) {
	        throw new ValidationError(errorMsg + ' Invalid rating');
	      }
	      if (isNaN(d.maxRating)) {
	        throw new ValidationError(errorMsg + ' Invalid maxRating');
	      }
	      if (isNaN(d.minRating)) {
	        throw new ValidationError(errorMsg + ' Invalid minRating');
	      }
	      if (d.rating > d.maxRating) {
	        throw new ValidationError(errorMsg + ' Rating is above maxRating');
	      }
	      if (d.rating < d.minRating) {
	        throw new ValidationError(errorMsg + ' Rating is below minRating');
	      }
	      if (typeof d.context !== 'string' || !d.context.length) {
	        throw new ValidationError(errorMsg + ' Rating messages must have a context field');
	      }
	    }

	    if (d.type === 'verification' || d.type === 'unverification') {
	      if (d.recipient.length < 2) {
	        throw new ValidationError(errorMsg + ' At least 2 recipient attributes are needed for a connection / disconnection. Got: ' + d.recipient);
	      }
	    }

	    return true;
	  };

	  /**
	  * @returns {boolean} true if message has a positive rating
	  */


	  SignedMessage.prototype.isPositive = function isPositive() {
	    return this.signedData.type === 'rating' && this.signedData.rating > (this.signedData.maxRating + this.signedData.minRating) / 2;
	  };

	  /**
	  * @returns {boolean} true if message has a negative rating
	  */


	  SignedMessage.prototype.isNegative = function isNegative() {
	    return this.signedData.type === 'rating' && this.signedData.rating < (this.signedData.maxRating + this.signedData.minRating) / 2;
	  };

	  /**
	  * @returns {boolean} true if message has a neutral rating
	  */


	  SignedMessage.prototype.isNeutral = function isNeutral() {
	    return this.signedData.type === 'rating' && this.signedData.rating === (this.signedData.maxRating + this.signedData.minRating) / 2;
	  };

	  /**
	  * @param {Object} key Gun.SEA keypair to sign the message with
	  */


	  SignedMessage.prototype.sign = async function sign(key) {
	    this.sig = await Key.sign(this.signedData, key);
	    this.pubKey = key.pub;
	    await this.getHash();
	    return true;
	  };

	  /**
	  * Create an iris message. SignedMessage time is automatically set. If signingKey is specified and author omitted, signingKey will be used as author.
	  * @param {Object} signedData message data object including author, recipient and other possible attributes
	  * @param {Object} signingKey optionally, you can set the key to sign the message with
	  * @returns {Promise<SignedMessage>}  message
	  */


	  SignedMessage.create = async function create(signedData, signingKey) {
	    if (!signedData.author && signingKey) {
	      signedData.author = { keyID: Key.getId(signingKey) };
	    }
	    signedData.time = signedData.time || new Date().toISOString();
	    var m = new SignedMessage({ signedData: signedData });
	    if (signingKey) {
	      await m.sign(signingKey);
	    }
	    return m;
	  };

	  /**
	  * Create an  verification message. SignedMessage signedData's type and time are automatically set. Recipient must be set. If signingKey is specified and author omitted, signingKey will be used as author.
	  * @returns {Promise<Object>} message object promise
	  */


	  SignedMessage.createVerification = function createVerification(signedData, signingKey) {
	    signedData.type = 'verification';
	    return SignedMessage.create(signedData, signingKey);
	  };

	  /**
	  * Create an  rating message. SignedMessage signedData's type, maxRating, minRating, time and context are set automatically. Recipient and rating must be set. If signingKey is specified and author omitted, signingKey will be used as author.
	  * @returns {Promise<Object>} message object promise
	  */


	  SignedMessage.createRating = function createRating(signedData, signingKey) {
	    signedData.type = 'rating';
	    signedData.context = signedData.context || 'iris';
	    signedData.maxRating = signedData.maxRating || 10;
	    signedData.minRating = signedData.minRating || -10;
	    return SignedMessage.create(signedData, signingKey);
	  };

	  /**
	  * @param {Index} index index to look up the message author from
	  * @returns {Contact} message author identity
	  */


	  SignedMessage.prototype.getAuthor = function getAuthor(index) {
	    for (var _iterator = this.getAuthorIterable(), _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);;) {
	      var _ref2;

	      if (_isArray) {
	        if (_i2 >= _iterator.length) break;
	        _ref2 = _iterator[_i2++];
	      } else {
	        _i2 = _iterator.next();
	        if (_i2.done) break;
	        _ref2 = _i2.value;
	      }

	      var a = _ref2;

	      if (a.isUniqueType()) {
	        return index.getContacts(a);
	      }
	    }
	  };

	  /**
	  * @param {Index} index index to look up the message recipient from
	  * @returns {Contact} message recipient identity or undefined
	  */


	  SignedMessage.prototype.getRecipient = function getRecipient(index) {
	    if (!this.signedData.recipient) {
	      return undefined;
	    }
	    for (var _iterator2 = this.getRecipientIterable(), _isArray2 = Array.isArray(_iterator2), _i3 = 0, _iterator2 = _isArray2 ? _iterator2 : _getIterator(_iterator2);;) {
	      var _ref3;

	      if (_isArray2) {
	        if (_i3 >= _iterator2.length) break;
	        _ref3 = _iterator2[_i3++];
	      } else {
	        _i3 = _iterator2.next();
	        if (_i3.done) break;
	        _ref3 = _i3.value;
	      }

	      var a = _ref3;

	      if (a.isUniqueType()) {
	        return index.getContacts(a);
	      }
	    }
	  };

	  /**
	  * @returns {string} base64 sha256 hash of message
	  */


	  SignedMessage.prototype.getHash = async function getHash() {
	    if (this.sig && !this.hash) {
	      this.hash = await util.getHash(this.sig);
	    }
	    return this.hash;
	  };

	  SignedMessage.prototype.getId = function getId() {
	    return this.getHash();
	  };

	  SignedMessage.fromSig = async function fromSig(obj) {
	    if (!obj.sig) {
	      throw new Error('Missing signature in object:', obj);
	    }
	    if (!obj.pubKey) {
	      throw new Error('Missing pubKey in object:');
	    }
	    //const signedData = await Key.verify(obj.sig, obj.pubKey); // disable sig verification while migrating to new gun :(
	    var signedData = JSON.parse(obj.sig.slice(4)).m;
	    var o = { signedData: signedData, sig: obj.sig, pubKey: obj.pubKey };
	    return new SignedMessage(o);
	  };

	  /**
	  * @return {boolean} true if message signature is valid. Otherwise throws ValidationError.
	  */


	  SignedMessage.prototype.verify = async function verify() {
	    if (!this.pubKey) {
	      throw new ValidationError(errorMsg + ' SignedMessage has no .pubKey');
	    }
	    if (!this.sig) {
	      throw new ValidationError(errorMsg + ' SignedMessage has no .sig');
	    }
	    this.signedData = await Key.verify(this.sig, this.pubKey);
	    if (!this.signedData) {
	      throw new ValidationError(errorMsg + ' Invalid signature');
	    }
	    if (this.hash) {
	      if (this.hash !== (await util.getHash(this.sig))) {
	        throw new ValidationError(errorMsg + ' Invalid message hash');
	      }
	    } else {
	      this.getHash();
	    }
	    return true;
	  };

	  /**
	  * @returns {string}
	  */


	  SignedMessage.prototype.serialize = function serialize() {
	    return { sig: this.sig, pubKey: this.pubKey };
	  };

	  SignedMessage.prototype.toString = function toString() {
	    return _JSON$stringify(this.serialize());
	  };

	  /**
	  * @returns {Promise<SignedMessage>}
	  */


	  SignedMessage.deserialize = async function deserialize(s) {
	    return SignedMessage.fromSig(s);
	  };

	  SignedMessage.fromString = async function fromString(s) {
	    return SignedMessage.fromSig(JSON.parse(s));
	  };

	  /**
	  *
	  */


	  SignedMessage.setReaction = async function setReaction(gun, msg, reaction) {
	    var hash = await msg.getHash();
	    gun.get('reactions').get(hash).put(reaction);
	    gun.get('reactions').get(hash).put(reaction);
	    gun.get('messagesByHash').get(hash).get('reactions').get(this.rootContact.value).put(reaction);
	    gun.get('messagesByHash').get(hash).get('reactions').get(this.rootContact.value).put(reaction);
	  };

	  return SignedMessage;
	}();

	/**
	* Private communication channel between two or more participants ([Gun](https://github.com/amark/gun) public keys). Can be used independently of other Iris stuff.
	*
	* Used as a core element of [iris-messenger](https://github.com/irislib/iris-messenger).
	*
	* ---
	*
	* #### Key-value API
	* `channel.put(key, value)` and `channel.on(key, callback)`.
	*
	* Note that each participant has their own versions of each key-value — they don't overwrite each other. `channel.on()` callback returns them all by default and has a parameter that indicates whose value you got.
	*
	* While values are encrypted, encryption of keys is not implemented yet.
	*
	* #### Message API
	* `channel.send()` and `channel.getMessages()` for timestamp-indexed chat-style messaging.
	*
	* Message data is encrypted, but timestamps are public so that peers can return your messages in a sequential order.
	*
	* ---
	*
	* You can open a channel with yourself for a private key-value space or a "note to self" type chat with yourself.
	*
	* **Note!** As of April 2020 Gun.SEA hashing function [is broken on Safari](https://github.com/amark/gun/issues/892). Channels don't work on Safari unless you patch sea.js by adding [this line](https://github.com/irislib/iris-messenger/blob/1e012581793485e6b8b5ed3c2ad0629716709366/src/js/sea.js#L270).
	*
	* **Privacy disclaimer:** Channel ids, data values and messages are encrypted, but message timestamps are unencrypted so that peers can return them to you in a sequential order. By looking at the unencrypted timestamps (or Gun subscriptions), it is possible to guess who are communicating with each other. This could be improved by indexing messages by *day* only, so making the guess would be more difficult, while you could still return them in a semi-sequential order.
	*
	* @param {Object} options
	* @param {string} options.key your keypair
	* @param {Object} options.gun [gun](https://github.com/amark/gun) instance
	* @param options.participants (optional) string or string array or permissions object ({'pub1':{read:true,write:true,admin:false},'pub2'...}) of participant public keys (your own key is included by default)
	* @param {string} options.chatLink (optional) chat link instead of participants list
	* @param {string} options.uuid (group channels only) unique channel identifier. Leave out for new channel.
	* @param {string} options.name (group channels only) channel name
	* @example
	* // Copy & paste this to console at https://iris.to or other page that has gun, sea and iris-lib
	* // Due to an unsolved bug, someoneElse's messages only start showing up after a reload
	*
	* var gun1 = new Gun('https://gun-us.herokuapp.com/gun');
	* var gun2 = new Gun('https://gun-us.herokuapp.com/gun');
	* var myKey = await iris.Key.getDefault();
	* var someoneElse = localStorage.getItem('someoneElsesKey');
	* if (someoneElse) {
	*  someoneElse = JSON.parse(someoneElse);
	* } else {
	*  someoneElse = await iris.Key.generate();
	*  localStorage.setItem('someoneElsesKey', JSON.stringify(someoneElse));
	* }
	*
	* iris.Channel.initUser(gun1, myKey); // saves myKey.epub to gun.user().get('epub')
	* iris.Channel.initUser(gun2, someoneElse);
	*
	* var ourChannel = new iris.Channel({key: myKey, gun: gun1, participants: someoneElse.pub});
	* var theirChannel = new iris.Channel({key: someoneElse, gun: gun2, participants: myKey.pub});
	*
	* var myChannels = {}; // you can list them in a user interface
	* function printMessage(msg, info) {
	*  console.log(`[${new Date(msg.time).toLocaleString()}] ${info.from.slice(0,8)}: ${msg.text}`)
	* }
	* iris.Channel.getChannels(gun1, myKey, channel => {
	*  var pub = channel.getCurrentParticipants()[0];
	*  gun1.user(pub).get('profile').get('name').on(name => channel.name = name);
	*  myChannels[pub] = channel;
	*  channel.getMessages(printMessage);
	*  channel.on('mood', (mood, from) => console.log(from.slice(0,8) + ' is feeling ' + mood));
	* });
	*
	* // you can play with these in the console:
	* ourChannel.send('message from myKey');
	* theirChannel.send('message from someoneElse');
	*
	* ourChannel.put('mood', 'blessed');
	* theirChannel.put('mood', 'happy');
	*
	* @example https://github.com/irislib/iris-lib/blob/master/__tests__/Channel.js
	*/

	var Channel = function () {
	  function Channel(options) {
	    var _this = this;

	    _classCallCheck(this, Channel);

	    this.DEFAULT_PERMISSIONS = { read: true, write: true };
	    this.key = options.key;
	    this.gun = options.gun;
	    this.myGroupSecret = options.myGroupSecret;
	    this.theirSecretUuids = {};
	    this.theirGroupSecrets = {};
	    this.user = this.gun.user();
	    this.user.auth(this.key);
	    this.user.put({ epub: this.key.epub });
	    this.secrets = {}; // maps participant public key to shared secret
	    this.ourSecretChannelIds = {}; // maps participant public key to our secret mutual channel id
	    this.theirSecretChannelIds = {}; // maps participant public key to their secret mutual channel id
	    this.messages = {};
	    this.chatLinks = {};
	    this.groupSubscriptions = {};
	    this.directSubscriptions = {};
	    this.getParticipantsCallbacks = {};

	    if (options.chatLink) {
	      this.useChatLink(options);
	    }

	    if (typeof options.participants === 'string') {
	      this.addParticipant(options.participants, options.save);
	    } else if (Array.isArray(options.participants)) {
	      var o = {};
	      options.participants.forEach(function (p) {
	        return o[p] = _Object$assign({}, _this.DEFAULT_PERMISSIONS);
	      });
	      options.participants = o;
	    }
	    if (typeof options.participants === 'object') {
	      // it's a group channel
	      var keys = _Object$keys(options.participants);
	      keys.forEach(function (k) {
	        if (k !== _this.key.pub) {
	          _this.addParticipant(k, options.save, _Object$assign({}, _this.DEFAULT_PERMISSIONS, options.participants[k]));
	        }
	      });
	      options.participants[this.key.pub] = options.participants[this.key.pub] || _Object$assign({}, this.DEFAULT_PERMISSIONS);
	      if (options.uuid) {
	        this.uuid = options.uuid;
	        this.name = options.name;
	      } else {
	        options.uuid = Attribute.getUuid().value;
	        this.uuid = options.uuid;
	        options.participants[this.key.pub].admin = true;
	        options.participants[this.key.pub].founder = true;
	      }
	      this.getChatLinks({ subscribe: true });
	    }
	    this.participants = options.participants;
	    if (options.uuid) {
	      // It's a group channel
	      // share secret uuid with other participants. since secret is already non-deterministic, maybe uuid could also be?
	      // generate channel-specific secret and share it with other participants
	      // put() keys should be encrypted first? so you could do put(uuid, secret)
	      // what if you join the channel with 2 unconnected devices? on reconnect, the older secret would be overwritten and messages unreadable. maybe participants should store each others' old keys? or maybe you should store them and re-encrypt old stuff when key changes? return them with map() instead?
	      this.putDirect('S' + this.uuid, this.getMyGroupSecret());
	      this.getMySecretUuid().then(function (s) {
	        _this.putDirect(_this.uuid, s); // TODO: encrypt keys in put()
	      });
	      this.onTheirDirect(this.uuid, function (s, k, from) {
	        _this.theirSecretUuids[from] = s;
	      });
	      this.onTheirDirect('S' + this.uuid, function (s, k, from) {
	        _this.theirGroupSecrets[from] = s;
	      });
	      // need to make put(), on(), send() and getMessages() behave differently when it's a group and retain the old versions for mutual signaling
	    }
	    this.onTheir('participants', function (participants, k, from) {
	      var hasAdmin = false;
	      var keys = _Object$keys(_this.participants);
	      for (var i = 0; i < keys.length; i++) {
	        if (_this.participants[keys[i]].admin || _this.participants[keys[i]].inviter) {
	          hasAdmin = true;
	          break;
	        }
	      }
	      if (!hasAdmin) {
	        keys.forEach(function (k) {
	          return _this.participants[k].admin = true;
	        }); // if no admins, make everyone admin
	      }
	      if (_this.participants[from] && (_this.participants[from].admin || _this.participants[from].inviter)) {
	        if (typeof participants === 'object') {
	          if (_JSON$stringify(_this.participants) === _JSON$stringify(participants)) {
	            return;
	          }
	          _this.participants = participants;
	          delete _this.participants[from].inviter;
	          _Object$keys(participants).forEach(function (k) {
	            if (k !== _this.key.pub) {
	              _this.addParticipant(k, true, _Object$assign({}, _this.DEFAULT_PERMISSIONS, participants[k]), true);
	            }
	          });
	          _this.participantsChanged();
	          options.saved = true;
	        }
	      }
	    });
	    if (!options.saved && (options.save === undefined || options.save === true)) {
	      this.save();
	    }
	  }

	  Channel.prototype.useChatLink = function useChatLink(options) {
	    var _this2 = this;

	    var s = options.chatLink.split('?');
	    if (s.length === 2) {
	      var chatWith = util.getUrlParameter('chatWith', s[1]);
	      var channelId = util.getUrlParameter('channelId', s[1]);
	      var inviter = util.getUrlParameter('inviter', s[1]);
	      var pub = inviter || chatWith;
	      if (chatWith) {
	        options.participants = pub;
	      } else if (channelId && inviter && inviter !== this.key.pub) {
	        // TODO! initializing it twice breaks things - new secret is generated
	        options.uuid = channelId;
	        options.participants = {};
	        options.participants[inviter] = _Object$assign({ inviter: true }, this.DEFAULT_PERMISSIONS);
	      }
	      if (pub !== this.key.pub) {
	        var sharedSecret = util.getUrlParameter('s', s[1]);
	        var linkId = util.getUrlParameter('k', s[1]);
	        if (sharedSecret && linkId) {
	          this.save(); // save the channel first so it's there before inviter subscribes to it
	          options.saved = true;
	          this.gun.user(pub).get('chatLinks').get(linkId).get('encryptedSharedKey').on(async function (encrypted) {
	            var sharedKey = await Gun.SEA.decrypt(encrypted, sharedSecret);
	            var encryptedChatRequest = await Gun.SEA.encrypt(_this2.key.pub, sharedSecret); // TODO encrypt is not deterministic, it uses salt
	            var channelRequestId = await util.getHash(encryptedChatRequest);
	            util.gunAsAnotherUser(_this2.gun, sharedKey, function (user) {
	              user.get('chatRequests').get(channelRequestId.slice(0, 12)).put(encryptedChatRequest);
	            });
	          });
	        }
	      }
	    }
	  };

	  Channel.prototype.getTheirSecretUuid = function getTheirSecretUuid(pub) {
	    var _this3 = this;

	    return new _Promise(function (resolve) {
	      if (!_this3.theirSecretUuids[pub]) {
	        _this3.onTheirDirect(_this3.uuid, function (s) {
	          _this3.theirSecretUuids[pub] = s;
	          resolve(_this3.theirSecretUuids[pub]);
	        }, pub);
	      } else {
	        resolve(_this3.theirSecretUuids[pub]);
	      }
	    });
	  };

	  Channel.prototype.getTheirGroupSecret = function getTheirGroupSecret(pub) {
	    var _this4 = this;

	    if (pub === this.key.pub) {
	      return this.getMyGroupSecret();
	    }
	    return new _Promise(function (resolve) {
	      if (!_this4.theirGroupSecrets[pub]) {
	        _this4.onTheirDirect('S' + _this4.uuid, function (s) {
	          _this4.theirGroupSecrets[pub] = s;
	          resolve(_this4.theirGroupSecrets[pub]);
	        }, pub);
	      } else {
	        resolve(_this4.theirGroupSecrets[pub]);
	      }
	    });
	  };

	  Channel.prototype.changeMyGroupSecret = function changeMyGroupSecret() {
	    this.myGroupSecret = Gun.SEA.random(32).toString('base64');
	    // TODO: secret should be archived and probably messages should include the encryption key id so past messages don't become unreadable
	    this.putDirect('S' + this.uuid, this.myGroupSecret);
	  };

	  /**
	  * Unsubscribe messages from a channel participants
	  *
	  * @param {string} participant public key
	  */


	  Channel.prototype.mute = async function mute(participant) {
	    this.gun.user(participant).get(this.theirSecretUuids[participant]).off();
	    // TODO: persist
	  };

	  /**
	  * Mute user and prevent them from seeing your further (and maybe past) messages
	  *
	  * @param {string} participant public key
	  */


	  Channel.prototype.block = async function block(participant) {
	    this.mute(participant);
	    this.putDirect(this.uuid, null);
	    this.putDirect('S' + this.uuid, null);
	    delete this.secrets[participant];
	    delete this.ourSecretChannelIds[participant];
	    delete this.theirSecretChannelIds[participant];
	    this.changeMyGroupSecret();
	  };

	  Channel.prototype.getMySecretUuid = async function getMySecretUuid() {
	    if (!this.mySecretUuid) {
	      var mySecret = await Gun.SEA.secret(this.key.epub, this.key);
	      var mySecretHash = await util.getHash(mySecret);
	      this.mySecretUuid = await util.getHash(mySecretHash + this.uuid);
	    }
	    return this.mySecretUuid;
	  };

	  /**
	  * List participants of the channel (other than you)
	  */


	  Channel.prototype.getCurrentParticipants = function getCurrentParticipants() {
	    return _Object$keys(this.secrets);
	  };

	  /**
	  * Subscribe to the changing list of participants by channel admins
	  */


	  Channel.prototype.getParticipants = function getParticipants(callback) {
	    if (this.getParticipantsCallbackId) {
	      this.getParticipantsCallbackId++;
	    } else {
	      this.getParticipantsCallbackId = 1;
	    }
	    this.getParticipantsCallbacks[this.getParticipantsCallbackId] = callback;
	    if (this.participants) {
	      callback(this.participants);
	    }
	  };

	  Channel.prototype.participantsChanged = function participantsChanged() {
	    var _this5 = this;

	    _Object$keys(this.getParticipantsCallbacks).forEach(function (id) {
	      _this5.getParticipantsCallbacks[id](_this5.participants);
	    });
	  };

	  /**
	  * Returns either the uuid of a group channel or the public key of a direct channel.
	  */


	  Channel.prototype.getId = function getId() {
	    return this.uuid || this.getCurrentParticipants()[0];
	  };

	  Channel.prototype.getSecret = async function getSecret(pub) {
	    if (!this.secrets[pub]) {
	      var epub = await util.gunOnceDefined(this.gun.user(pub).get('epub'));
	      this.secrets[pub] = await Gun.SEA.secret(epub, this.key);
	    }
	    return this.secrets[pub];
	  };

	  /**
	  *
	  */


	  Channel.getOurSecretChannelId = async function getOurSecretChannelId(gun, pub, pair) {
	    var epub = await util.gunOnceDefined(gun.user(pub).get('epub'));
	    var secret = await Gun.SEA.secret(epub, pair);
	    return util.getHash(secret + pub);
	  };

	  /**
	  *
	  */


	  Channel.getTheirSecretChannelId = async function getTheirSecretChannelId(gun, pub, pair) {
	    var epub = await util.gunOnceDefined(gun.user(pub).get('epub'));
	    var secret = await Gun.SEA.secret(epub, pair);
	    return util.getHash(secret + pair.pub);
	  };

	  /**
	  * Calls back with Channels that you have initiated or written to.
	  * @param {Object} gun user.authed gun instance
	  * @param {Object} keypair Gun.SEA keypair that the gun instance is authenticated with
	  * @param callback callback function that is called for each public key you have a channel with
	  */


	  Channel.getChannels = async function getChannels(gun, keypair, callback) {
	    var listenToChatLinks = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

	    var mySecret = await Gun.SEA.secret(keypair.epub, keypair);
	    if (listenToChatLinks) {
	      Channel.getMyChatLinks(gun, keypair, undefined, undefined, true);
	    }
	    var seen = {};

	    var handleChannel = async function handleChannel(value, ourSecretChannelId) {
	      if (value && !seen[ourSecretChannelId]) {
	        seen[ourSecretChannelId] = true;
	        if (ourSecretChannelId.length > 44) {
	          gun.user().get('chats').get(ourSecretChannelId).put(null);
	          return;
	        }
	        var encryptedChatId = await util.gunOnceDefined(gun.user().get('chats').get(ourSecretChannelId).get('pub'));
	        var chatId = await Gun.SEA.decrypt(encryptedChatId, mySecret);
	        if (!chatId) {
	          return;
	        }
	        if (chatId.pub || typeof chatId === 'string') {
	          callback(new Channel({
	            key: keypair,
	            gun: gun,
	            participants: chatId.pub || chatId,
	            save: false
	          }));
	        } else if (chatId.uuid && chatId.participants && chatId.myGroupSecret) {
	          callback(new Channel({
	            key: keypair,
	            gun: gun,
	            participants: chatId.participants,
	            uuid: chatId.uuid,
	            myGroupSecret: chatId.myGroupSecret,
	            save: false
	          }));
	        }
	      }
	    };

	    gun.user().get('chats').map().on(handleChannel);
	  };

	  Channel.prototype.getMyGroupSecret = function getMyGroupSecret() {
	    // group secret could be deterministic: hash(encryptToSelf(uuid + iterator))
	    if (!this.myGroupSecret) {
	      this.changeMyGroupSecret();
	    }
	    return this.myGroupSecret;
	  };

	  Channel.prototype.getOurSecretChannelId = async function getOurSecretChannelId(pub) {
	    if (!this.ourSecretChannelIds[pub]) {
	      var secret = await this.getSecret(pub);
	      this.ourSecretChannelIds[pub] = await util.getHash(secret + pub);
	    }
	    return this.ourSecretChannelIds[pub];
	  };

	  Channel.prototype.getTheirSecretChannelId = async function getTheirSecretChannelId(pub) {
	    if (!this.theirSecretChannelIds[pub]) {
	      var secret = await this.getSecret(pub);
	      this.theirSecretChannelIds[pub] = await util.getHash(secret + this.key.pub);
	    }
	    return this.theirSecretChannelIds[pub];
	  };

	  /**
	  * Get messages from the channel
	  */


	  Channel.prototype.getMessages = async function getMessages(callback) {
	    var _this6 = this;

	    // TODO: save callback and apply it when new participants are added to channel
	    this.getCurrentParticipants().forEach(async function (pub) {
	      if (pub !== _this6.key.pub) {
	        // Subscribe to their messages
	        var theirSecretChannelId = void 0;
	        if (_this6.uuid) {
	          theirSecretChannelId = await _this6.getTheirSecretUuid(pub);
	        } else {
	          theirSecretChannelId = await _this6.getTheirSecretChannelId(pub);
	        }
	        _this6.gun.user(pub).get('chats').get(theirSecretChannelId).get('msgs').map().once(function (data, key) {
	          _this6.messageReceived(callback, data, _this6.uuid || pub, false, key, pub);
	        });
	      }
	      if (!_this6.uuid) {
	        // Subscribe to our messages
	        var ourSecretChannelId = await _this6.getOurSecretChannelId(pub);
	        _this6.user.get('chats').get(ourSecretChannelId).get('msgs').map().once(function (data, key) {
	          _this6.messageReceived(callback, data, pub, true, key, _this6.key.pub);
	        });
	      }
	    });
	    if (this.uuid) {
	      // Subscribe to our messages
	      var mySecretUuid = await this.getMySecretUuid();
	      this.user.get('chats').get(mySecretUuid).get('msgs').map().once(function (data, key) {
	        _this6.messageReceived(callback, data, _this6.uuid, true, key, _this6.key.pub);
	      });
	    }
	  };

	  Channel.prototype.messageReceived = async function messageReceived(callback, data, channelId, selfAuthored, key, from) {
	    if (this.messages[key] || !data) {
	      return;
	    }
	    var secret = this.uuid ? await this.getTheirGroupSecret(from) : await this.getSecret(channelId);
	    var decrypted = await Gun.SEA.decrypt(data, secret);
	    if (typeof decrypted !== 'object') {
	      return;
	    }
	    var info = { selfAuthored: selfAuthored, channelId: channelId, from: from };
	    this.messages[key] = decrypted;
	    callback(decrypted, info);
	  };

	  /**
	  * Get latest message in this channel. Useful for channel listing.
	  */


	  Channel.prototype.getLatestMsg = async function getLatestMsg(callback) {
	    var _this7 = this;

	    var callbackIfLatest = async function callbackIfLatest(msg, info) {
	      if (!_this7.latest) {
	        _this7.latest = msg;
	        callback(msg, info);
	      } else {
	        var t = typeof _this7.latest.time === 'string' ? _this7.latest.time : _this7.latest.time.toISOString();
	        if (t < msg.time) {
	          _this7.latest = msg;
	          callback(msg, info);
	        }
	      }
	    };
	    this.onMy('latestMsg', function (msg) {
	      return callbackIfLatest(msg, { selfAuthored: true, from: _this7.key.pub });
	    });
	    this.onTheir('latestMsg', function (msg, k, from) {
	      return callbackIfLatest(msg, { selfAuthored: false, from: from });
	    });
	  };

	  /**
	  * Useful for notifications
	  * @param {integer} time last seen msg time (default: now)
	  */


	  Channel.prototype.setMyMsgsLastSeenTime = async function setMyMsgsLastSeenTime(time) {
	    time = time || new Date().toISOString();
	    return this.put('msgsLastSeenTime', time);
	  };

	  /**
	  * Useful for notifications
	  */


	  Channel.prototype.getMyMsgsLastSeenTime = async function getMyMsgsLastSeenTime(callback) {
	    var _this8 = this;

	    this.onMy('msgsLastSeenTime', function (time) {
	      _this8.myMsgsLastSeenTime = time;
	      if (callback) {
	        callback(_this8.myMsgsLastSeenTime);
	      }
	    });
	  };

	  /**
	  * For "seen" status indicator
	  */


	  Channel.prototype.getTheirMsgsLastSeenTime = async function getTheirMsgsLastSeenTime(callback) {
	    var _this9 = this;

	    this.onTheir('msgsLastSeenTime', function (time) {
	      _this9.theirMsgsLastSeenTime = time;
	      if (callback) {
	        callback(_this9.theirMsgsLastSeenTime);
	      }
	    });
	  };

	  Channel.prototype.removeParticipant = async function removeParticipant(pub) {
	    this.addParticipant(pub, true, { read: false, write: false });
	  };

	  /**
	  * Add a public key to the channel or update its permissions
	  * @param {string} pub
	  */


	  Channel.prototype.addParticipant = async function addParticipant(pub) {
	    var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	    var _this10 = this;

	    var permissions = arguments[2];
	    var subscribe = arguments[3];

	    if (permissions === undefined) {
	      permissions = this.DEFAULT_PERMISSIONS;
	    }
	    if (this.secrets[pub] && _JSON$stringify(this.secrets[pub]) === _JSON$stringify(permissions)) {
	      // TODO: should be this.participants[pub]
	      return;
	    }
	    this.secrets[pub] = null;
	    this.getSecret(pub);
	    var ourSecretChannelId = await this.getOurSecretChannelId(pub);
	    if (save) {
	      // Save their public key in encrypted format, so in channel listing we know who we are channeling with
	      var mySecret = await Gun.SEA.secret(this.key.epub, this.key);
	      this.gun.user().get('chats').get(ourSecretChannelId).get('pub').put((await Gun.SEA.encrypt({ pub: pub }, mySecret)));
	    }
	    if (this.uuid) {
	      this.participants[pub] = permissions;
	      if (save) {
	        this.putDirect('S' + this.uuid, this.getMyGroupSecret());
	        this.getMySecretUuid().then(function (s) {
	          _this10.putDirect(_this10.uuid, s); // TODO: encrypt keys in put()
	        });
	        this.onTheirDirect(this.uuid, function (s, k, from) {
	          _this10.theirSecretUuids[from] = s;
	        });
	        this.onTheirDirect('S' + this.uuid, function (s, k, from) {
	          _this10.theirGroupSecrets[from] = s;
	        });
	        this.save();
	      }
	    }
	    if (subscribe) {
	      _Object$values(this.directSubscriptions).forEach(function (arr) {
	        arr.forEach(function (o) {
	          if (!o.from || o.from === pub) {
	            _this10._onTheirDirectFromUser(pub, o.key, o.callback);
	          }
	        });
	      });
	      _Object$values(this.groupSubscriptions).forEach(function (arr) {
	        arr.forEach(function (o) {
	          if (o.from && o.from !== pub) {
	            return;
	          }
	          if (permissions.write) {
	            _this10._onTheirGroupFromUser(pub, o.key, o.callback);
	          } else {
	            // unsubscribe
	            o.event && o.event.off();
	          }
	        });
	      });
	    }
	  };

	  /**
	  * Send a message to the channel
	  * @param msg string or {time, text, ...} object
	  */


	  Channel.prototype.send = async function send(msg) {
	    if (typeof msg === 'string') {
	      msg = msg.trim();
	      if (msg.length === 0) {
	        return;
	      }
	      msg = {
	        time: new Date().toISOString(),
	        text: msg
	      };
	    } else if (typeof msg === 'object') {
	      msg.time = msg.time || new Date().toISOString();
	    } else {
	      throw new Error('msg param must be a string or an object');
	    }
	    //this.gun.user().get('message').set(temp);
	    if (this.uuid) {
	      var encrypted = await Gun.SEA.encrypt(_JSON$stringify(msg), this.getMyGroupSecret());
	      var mySecretUuid = await this.getMySecretUuid();
	      this.user.get('chats').get(mySecretUuid).get('msgs').get('' + msg.time).put(encrypted);
	      this.user.get('chats').get(mySecretUuid).get('latestMsg').put(encrypted);
	    } else {
	      var keys = this.getCurrentParticipants();
	      for (var i = 0; i < keys.length; i++) {
	        var _encrypted = await Gun.SEA.encrypt(_JSON$stringify(msg), (await this.getSecret(keys[i])));
	        var ourSecretChannelId = await this.getOurSecretChannelId(keys[i]);
	        this.user.get('chats').get(ourSecretChannelId).get('msgs').get('' + msg.time).put(_encrypted);
	        this.user.get('chats').get(ourSecretChannelId).get('latestMsg').put(_encrypted);
	      }
	    }
	  };

	  /**
	  * Save the channel to our channels list without sending a message
	  */


	  Channel.prototype.save = async function save() {
	    if (this.uuid) {
	      var mySecretUuid = await this.getMySecretUuid();
	      this.user.get('chats').get(mySecretUuid).get('msgs').get('a').put(null);
	      this.put('participants', this.participants); // public participants list
	      var mySecret = await Gun.SEA.secret(this.key.epub, this.key);
	      this.user.get('chats').get(mySecretUuid).get('pub').put((await Gun.SEA.encrypt({
	        uuid: this.uuid,
	        myGroupSecret: this.getMyGroupSecret(),
	        participants: this.participants // private participants list
	      }, mySecret)));
	      this.participantsChanged();
	    } else {
	      var keys = this.getCurrentParticipants();
	      for (var i = 0; i < keys.length; i++) {
	        var ourSecretChannelId = await this.getOurSecretChannelId(keys[i]);
	        this.user.get('chats').get(ourSecretChannelId).get('msgs').get('a').put(null);
	      }
	    }
	  };

	  /**
	  * Save a key-value pair, encrypt value. Each participant in the Channel writes to their own version of the key-value pair — they don't overwrite the same one.
	  * @param {string} key
	  * @param value
	  */


	  Channel.prototype.put = async function put(key, value) {
	    return (this.uuid ? this.putGroup : this.putDirect).call(this, key, value);
	  };

	  Channel.prototype.putGroup = async function putGroup(key, value) {
	    if (key === 'msgs') {
	      throw new Error('Sorry, you can\'t overwrite the msgs field which is used for .send()');
	    }
	    var encrypted = await Gun.SEA.encrypt(_JSON$stringify(value), this.getMyGroupSecret());
	    var mySecretUuid = await this.getMySecretUuid();
	    this.user.get('chats').get(mySecretUuid).get(key).put(encrypted);
	  };

	  Channel.prototype.putDirect = async function putDirect(key, value) {
	    if (key === 'msgs') {
	      throw new Error('Sorry, you can\'t overwrite the msgs field which is used for .send()');
	    }
	    var keys = this.getCurrentParticipants();
	    for (var i = 0; i < keys.length; i++) {
	      var encrypted = await Gun.SEA.encrypt(_JSON$stringify(value), (await this.getSecret(keys[i])));
	      var ourSecretChannelId = await this.getOurSecretChannelId(keys[i]);
	      this.user.get('chats').get(ourSecretChannelId).get(key).put(encrypted);
	    }
	  };

	  /**
	  * Subscribe to a key-value pair. Callback returns every participant's value unless you limit it with *from* param.
	  * @param {string} key
	  * @param {function} callback
	  * @param {string} from public key whose value you want, or *"me"* for your value only, or *"them"* for the value of others only
	  */


	  Channel.prototype.on = async function on(key, callback, from) {
	    return (this.uuid ? this.onGroup : this.onDirect).call(this, key, callback, from);
	  };

	  Channel.prototype.onDirect = async function onDirect(key, callback, from) {
	    var _this11 = this;

	    if (!from || from === 'me' || from === this.key.pub) {
	      this.onMy(key, function (val) {
	        return callback(val, _this11.key.pub);
	      });
	    }
	    if (!from || from !== 'me' && from !== this.key.pub) {
	      this.onTheir(key, function (val, k, pub) {
	        return callback(val, pub);
	      });
	    }
	  };

	  Channel.prototype.onGroup = async function onGroup(key, callback, from) {
	    var _this12 = this;

	    if (!from || from === 'me' || from === this.key.pub) {
	      this.onMyGroup(key, function (val) {
	        return callback(val, _this12.key.pub);
	      });
	    }
	    if (!from || from !== 'me' && from !== this.key.pub) {
	      this.onTheirGroup(key, function (val, k, pub) {
	        return callback(val, pub);
	      });
	    }
	  };

	  Channel.prototype.onMy = async function onMy(key, callback) {
	    return (this.uuid ? this.onMyGroup : this.onMyDirect).call(this, key, callback);
	  };

	  Channel.prototype.onMyDirect = async function onMyDirect(key, callback) {
	    var _this13 = this;

	    if (typeof callback !== 'function') {
	      throw new Error('onMy callback must be a function, got ' + (typeof callback === 'undefined' ? 'undefined' : _typeof(callback)));
	    }
	    var keys = this.getCurrentParticipants();

	    var _loop = async function _loop(i) {
	      var ourSecretChannelId = await _this13.getOurSecretChannelId(keys[i]);
	      _this13.gun.user().get('chats').get(ourSecretChannelId).get(key).on(async function (data) {
	        var decrypted = await Gun.SEA.decrypt(data, (await _this13.getSecret(keys[i])));
	        if (decrypted) {
	          callback(typeof decrypted.v !== 'undefined' ? decrypted.v : decrypted, key);
	        }
	      });
	      return 'break';
	    };

	    for (var i = 0; i < keys.length; i++) {
	      var _ret = await _loop(i);

	      if (_ret === 'break') break;
	    }
	  };

	  Channel.prototype.onMyGroup = async function onMyGroup(key, callback) {
	    var _this14 = this;

	    if (typeof callback !== 'function') {
	      throw new Error('onMy callback must be a function, got ' + (typeof callback === 'undefined' ? 'undefined' : _typeof(callback)));
	    }
	    var mySecretUuid = await this.getMySecretUuid();
	    var mySecret = await this.getMyGroupSecret();
	    this.gun.user().get('chats').get(mySecretUuid).get(key).on(async function (data) {
	      var decrypted = await Gun.SEA.decrypt(data, mySecret);
	      if (decrypted) {
	        callback(typeof decrypted.v !== 'undefined' ? decrypted.v : decrypted, key, _this14.key.pub);
	      }
	    });
	  };

	  Channel.prototype.onTheir = async function onTheir(key, callback, from) {
	    return (this.uuid ? this.onTheirGroup : this.onTheirDirect).call(this, key, callback, from);
	  };

	  Channel.prototype._onTheirDirectFromUser = async function _onTheirDirectFromUser(pub, key, callback) {
	    var _this15 = this;

	    if (!this.hasWritePermission(pub)) {
	      return;
	    }
	    var theirSecretChannelId = await this.getTheirSecretChannelId(pub);
	    this.gun.user(pub).get('chats').get(theirSecretChannelId).get(key).on(async function (data) {
	      if (!_this15.hasWritePermission(pub)) {
	        return;
	      }
	      var decrypted = await Gun.SEA.decrypt(data, (await _this15.getSecret(pub)));
	      if (decrypted) {
	        callback(typeof decrypted.v !== 'undefined' ? decrypted.v : decrypted, key, pub);
	      }
	    });
	  };

	  Channel.prototype.onTheirDirect = async function onTheirDirect(key, callback, from) {
	    var _this16 = this;

	    // TODO: subscribe to new channel participants
	    if (typeof callback !== 'function') {
	      throw new Error('onTheir callback must be a function, got ' + (typeof callback === 'undefined' ? 'undefined' : _typeof(callback)));
	    }
	    if (!Object.prototype.hasOwnProperty.call(this.directSubscriptions, key)) {
	      this.directSubscriptions[key] = [];
	    }
	    this.directSubscriptions[key].push({ key: key, callback: callback, from: from });
	    var participants = this.getCurrentParticipants();
	    participants.forEach(async function (pub) {
	      if (from && pub !== from) {
	        return;
	      }
	      _this16._onTheirDirectFromUser(pub, key, callback);
	    });
	  };

	  Channel.prototype.hasWritePermission = function hasWritePermission(pub) {
	    return !this.uuid || this.participants && this.participants[pub] && this.participants[pub].write;
	  };

	  Channel.prototype._onTheirGroupFromUser = async function _onTheirGroupFromUser(pub, key, callback, subscription) {
	    var _this17 = this;

	    if (!this.hasWritePermission(pub)) {
	      return;
	    }
	    var theirSecretUuid = await this.getTheirSecretUuid(pub);
	    this.gun.user(pub).get('chats').get(theirSecretUuid).get(key).on(async function (data, a, b, e) {
	      if (subscription) {
	        subscription.event = e;
	      }
	      if (!_this17.hasWritePermission(pub)) {
	        return;
	      }
	      var decrypted = await Gun.SEA.decrypt(data, (await _this17.getTheirGroupSecret(pub)));
	      if (decrypted) {
	        callback(typeof decrypted.v !== 'undefined' ? decrypted.v : decrypted, key, pub);
	      }
	    });
	  };

	  Channel.prototype.onTheirGroup = async function onTheirGroup(key, callback, from) {
	    var _this18 = this;

	    if (typeof callback !== 'function') {
	      throw new Error('onTheir callback must be a function, got ' + (typeof callback === 'undefined' ? 'undefined' : _typeof(callback)));
	    }
	    if (!Object.prototype.hasOwnProperty.call(this.groupSubscriptions, key)) {
	      this.groupSubscriptions[key] = [];
	    }
	    var subscription = { key: key, callback: callback, from: from };
	    this.groupSubscriptions[key].push(subscription);

	    this.getParticipants(function (participants) {
	      _Object$keys(participants).forEach(async function (pub) {
	        if (from && pub !== from) {
	          return;
	        }
	        if (!(participants[pub] && participants[pub].write)) {
	          return;
	        }
	        _this18._onTheirGroupFromUser(pub, key, callback, subscription);
	      });
	    });
	  };

	  /**
	  * Set typing status
	  */


	  Channel.prototype.setTyping = function setTyping(isTyping) {
	    var _this19 = this;

	    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

	    isTyping = typeof isTyping === 'undefined' ? true : isTyping;
	    timeout = timeout * 1000;
	    this.put('typing', isTyping ? new Date().toISOString() : new Date(0).toISOString());
	    clearTimeout(this.setTypingTimeout);
	    this.setTypingTimeout = setTimeout(function () {
	      return _this19.put('typing', false);
	    }, timeout);
	  };

	  /**
	  * Get typing status
	  */


	  Channel.prototype.getTyping = function getTyping(callback) {
	    var _this20 = this;

	    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
	    // TODO callback not called on setTyping(false), at least for self chat
	    timeout = timeout * 1000;
	    this.onTheir('typing', function (typing, key, pub) {
	      if (callback) {
	        var isTyping = typing && new Date() - new Date(typing) <= timeout;
	        callback(isTyping, pub);
	        _this20.getTypingTimeouts = _this20.getTypingTimeouts || {};
	        clearTimeout(_this20.getTypingTimeouts[pub]);
	        if (isTyping) {
	          _this20.getTypingTimeouts[pub] = setTimeout(function () {
	            return callback(false, pub);
	          }, timeout);
	        }
	      }
	    });
	  };

	  /**
	  * Add a chat button to page
	  * @param options {label, channelOptions}
	  */


	  Channel.addChatButton = function addChatButton() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    options = _Object$assign({ label: 'Chat' }, options);
	    if (!options.channelOptions) {
	      throw new Error('addChatButton missing options.channelOptions param');
	    }
	    util.injectCss();
	    var channel = void 0,
	        box = void 0;
	    var btn = util.createElement('div', 'iris-chat-open-button', document.body);
	    btn.setAttribute('id', 'iris-chat-open-button');
	    btn.innerHTML = '<svg style="margin-right:7px;margin-bottom: -0.2em" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 510 510" xml:space="preserve"><path fill="currentColor" d="M459,0H51C22.95,0,0,22.95,0,51v459l102-102h357c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z M102,178.5h306v51 H102V178.5z M306,306H102v-51h204V306z M408,153H102v-51h306V153z"></path></svg> ' + options.label;
	    btn.addEventListener('click', function () {
	      btn.setAttribute('style', 'display: none');
	      if (!channel) {
	        channel = new Channel(options.channelOptions);
	        box = channel.getChatBox();
	        document.body.appendChild(box);
	      } else {
	        box.setAttribute('style', ''); // show
	      }
	    });
	  };

	  /**
	  * Get a simple link that points to the channel.
	  *
	  * Direct channel: both users need to give their simple links. Use createChatLink() to get a two-way link that needs to be given by one user only.
	  *
	  * Group channel: Works only if the link recipient has been already added onto the channel participants list.
	  */


	  Channel.prototype.getSimpleLink = function getSimpleLink() {
	    var urlRoot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'https://iris.to/';

	    if (this.uuid) {
	      return urlRoot + '?channelId=' + this.uuid + '&inviter=' + this.key.pub;
	    }
	    return urlRoot + '?chatWith=' + this.getCurrentParticipants()[0];
	  };

	  /**
	  *
	  */


	  Channel.prototype.getChatLinks = async function getChatLinks(_ref) {
	    var _this21 = this;

	    var callback = _ref.callback,
	        urlRoot = _ref.urlRoot,
	        subscribe = _ref.subscribe;

	    urlRoot = urlRoot || 'https://iris.to/';
	    if (!this.uuid) {
	      throw new Error('Only group channels may have chat links');
	    }
	    var chatLinks = [];
	    var chatLinkSubscriptions = {};
	    this.on('chatLinks', function (links, from) {
	      // TODO: check admin permissions
	      if (!links || (typeof links === 'undefined' ? 'undefined' : _typeof(links)) !== 'object') {
	        return;
	      }
	      _Object$keys(links).forEach(function (linkId) {
	        var link = links[linkId];
	        if (link === null) {
	          chatLinkSubscriptions[linkId] && chatLinkSubscriptions[linkId].off(); // unsubscribe removed chat link
	          delete chatLinkSubscriptions[linkId];
	          callback && callback({ id: linkId, url: null });
	          return;
	        }
	        if (chatLinks.indexOf(linkId) !== -1) {
	          return;
	        }
	        var channels = [];
	        chatLinks.push(linkId);
	        var url = Channel.formatChatLink({ urlRoot: urlRoot, inviter: from, channelId: _this21.uuid, sharedSecret: link.sharedSecret, linkId: linkId });
	        callback && callback({ url: url, id: linkId });
	        if (subscribe) {
	          _this21.gun.user(link.sharedKey.pub).get('chatRequests').map().on(async function (encPub, requestId, a, e) {
	            if (!encPub || typeof encPub !== 'string' || encPub.length < 10) {
	              return;
	            }
	            chatLinkSubscriptions[linkId] = e;
	            var s = _JSON$stringify(encPub);
	            if (channels.indexOf(s) === -1) {
	              channels.push(s);
	              var pub = await Gun.SEA.decrypt(encPub, link.sharedSecret);
	              _this21.addParticipant(pub, undefined, undefined, true);
	            }
	          });
	        }
	      });
	    });
	  };

	  Channel.prototype.createChatLink = async function createChatLink() {
	    var urlRoot = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'https://iris.to/';

	    var sharedKey = await Gun.SEA.pair();
	    var sharedKeyString = _JSON$stringify(sharedKey);
	    var sharedSecret = await Gun.SEA.secret(sharedKey.epub, sharedKey);
	    var encryptedSharedKey = await Gun.SEA.encrypt(sharedKeyString, sharedSecret);
	    var ownerSecret = await Gun.SEA.secret(this.key.epub, this.key);
	    var ownerEncryptedSharedKey = await Gun.SEA.encrypt(sharedKeyString, ownerSecret);
	    var linkId = await util.getHash(encryptedSharedKey);
	    linkId = linkId.slice(0, 12);

	    // User has to exist, in order for .get(chatRequests).on() to be ever triggered
	    await util.gunAsAnotherUser(this.gun, sharedKey, function (user) {
	      return user.get('chatRequests').put({ a: 1 }).then();
	    });

	    this.chatLinks[linkId] = { sharedKey: sharedKey, sharedSecret: sharedSecret };
	    this.put('chatLinks', this.chatLinks);
	    this.user.get('chatLinks').get(linkId).put({ encryptedSharedKey: encryptedSharedKey, ownerEncryptedSharedKey: ownerEncryptedSharedKey });

	    return Channel.formatChatLink({ urlRoot: urlRoot, channelId: this.uuid, inviter: this.key.pub, sharedSecret: sharedSecret, linkId: linkId });
	  };

	  /**
	  * Get a channel box element that you can add to your page
	  */


	  Channel.prototype.getChatBox = function getChatBox() {
	    var _this22 = this;

	    util.injectCss();
	    var minimized = false;

	    var chatBox = util.createElement('div', 'iris-chat-box');
	    var header = util.createElement('div', 'iris-chat-header', chatBox);
	    var minimize = util.createElement('span', 'iris-chat-minimize', header);
	    minimize.innerText = '—';
	    minimize.addEventListener('click', function (e) {
	      e.stopPropagation();
	      chatBox.setAttribute('class', 'iris-chat-box minimized');
	      minimized = true;
	    });
	    var headerText = util.createElement('div', 'iris-chat-header-text', header);
	    var onlineIndicator = util.createElement('span', 'iris-online-indicator', headerText);
	    onlineIndicator.innerHTML = '&#x25cf;';
	    var nameEl = util.createElement('span', undefined, headerText);
	    var close = util.createElement('span', 'iris-chat-close', header);
	    close.innerHTML = '&#215;';
	    close.addEventListener('click', function () {
	      chatBox.setAttribute('style', 'display: none');
	      var openChatBtn = document.getElementById('iris-chat-open-button');
	      if (openChatBtn) {
	        openChatBtn.setAttribute('style', ''); // show
	      }
	    });
	    header.addEventListener('click', function () {
	      if (minimized) {
	        chatBox.setAttribute('class', 'iris-chat-box');
	        minimized = false;
	      }
	    });

	    var messages = util.createElement('div', 'iris-chat-messages', chatBox);

	    var typingIndicator = util.createElement('div', 'iris-typing-indicator', chatBox);
	    typingIndicator.innerText = 'typing...';
	    this.getTyping(function (isTyping) {
	      typingIndicator.setAttribute('class', 'iris-typing-indicator' + (isTyping ? ' yes' : ''));
	    });

	    var inputWrapper = util.createElement('div', 'iris-chat-input-wrapper', chatBox);
	    var textArea = util.createElement('textarea', undefined, inputWrapper);
	    textArea.setAttribute('rows', '1');
	    textArea.setAttribute('placeholder', 'Type a message');
	    if (util.isMobile) {
	      var sendBtn = util.createElement('button', undefined, inputWrapper);
	      sendBtn.innerHTML = '\n        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 486.736 486.736" style="enable-background:new 0 0 486.736 486.736;" xml:space="preserve" width="100px" height="100px" fill="#000000" stroke="#000000" stroke-width="0"><path fill="currentColor" d="M481.883,61.238l-474.3,171.4c-8.8,3.2-10.3,15-2.6,20.2l70.9,48.4l321.8-169.7l-272.4,203.4v82.4c0,5.6,6.3,9,11,5.9 l60-39.8l59.1,40.3c5.4,3.7,12.8,2.1,16.3-3.5l214.5-353.7C487.983,63.638,485.083,60.038,481.883,61.238z"></path></svg>\n      ';
	      sendBtn.addEventListener('click', function () {
	        _this22.send(textArea.value);
	        textArea.value = '';
	        _this22.setTyping(false);
	      });
	    }

	    var participants = this.getCurrentParticipants();
	    if (participants.length) {
	      var pub = participants[0];
	      this.gun.user(pub).get('profile').get('name').on(function (name) {
	        return nameEl.innerText = name;
	      });
	      Channel.getActivity(this.gun, pub, function (status) {
	        var cls = 'iris-online-indicator' + (status.isActive ? ' yes' : '');
	        onlineIndicator.setAttribute('class', cls);
	        var undelivered = messages.querySelectorAll('.iris-chat-message:not(.delivered)');
	        undelivered.forEach(function (msg) {
	          if (msg.getAttribute('data-time') <= status.lastActive) {
	            var c = msg.getAttribute('class');
	            msg.setAttribute('class', c + ' delivered');
	          }
	        });
	      });
	    }

	    this.getTheirMsgsLastSeenTime(function (time) {
	      var unseen = messages.querySelectorAll('.iris-seen:not(.yes)');
	      unseen.forEach(function (indicator) {
	        var msgEl = indicator.parentElement.parentElement.parentElement;
	        if (msgEl.getAttribute('data-time') <= time) {
	          var msgClass = msgEl.getAttribute('class');
	          if (msgClass.indexOf('delivered') === -1) {
	            msgEl.setAttribute('class', msgClass + ' delivered');
	          }
	          indicator.setAttribute('class', 'iris-seen yes');
	        }
	      });
	    });

	    this.getMessages(function (msg, info) {
	      var msgContent = util.createElement('div', 'iris-msg-content');
	      msgContent.innerText = msg.text;
	      var time = util.createElement('div', 'time', msgContent);
	      time.innerText = util.formatTime(new Date(msg.time));
	      if (info.selfAuthored) {
	        var cls = _this22.theirMsgsLastSeenTime >= msg.time ? 'iris-seen yes' : 'iris-seen';
	        var seenIndicator = util.createElement('span', cls, time);
	        seenIndicator.innerHTML = ' <svg version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 42"><polygon fill="currentColor" points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"></polygon><polygon class="iris-delivered-checkmark" fill="currentColor" points="55.6,12.1 32,35.7 29.4,33.1 26.6,36 32,41.3 58.4,14.9"></polygon></svg>';
	      }
	      msgContent.innerHTML = msgContent.innerHTML.replace(/\n/g, '<br>\n');

	      var msgEl = util.createElement('div', (info.selfAuthored ? 'our' : 'their') + ' iris-chat-message');
	      msgEl.appendChild(msgContent);
	      msgEl.setAttribute('data-time', msg.time);
	      for (var i = messages.children.length; i >= 0; i--) {
	        if (i === 0) {
	          messages.insertBefore(msgEl, messages.firstChild);
	        } else {
	          var t = messages.children[i - 1].getAttribute('data-time');
	          if (t && t < msg.time) {
	            messages.children[i - 1].insertAdjacentElement('afterend', msgEl);
	            break;
	          }
	        }
	      }
	      messages.scrollTop = messages.scrollHeight;
	    });

	    textArea.addEventListener('keyup', function (event) {
	      Channel.setActivity(_this22.gun, true); // TODO
	      _this22.setMyMsgsLastSeenTime(); // TODO
	      if (event.keyCode === 13) {
	        event.preventDefault();
	        var content = textArea.value;
	        var caret = util.getCaret(textArea);
	        if (event.shiftKey) {
	          textArea.value = content.substring(0, caret - 1) + '\n' + content.substring(caret, content.length);
	        } else {
	          textArea.value = content.substring(0, caret - 1) + content.substring(caret, content.length);
	          _this22.send(textArea.value);
	          textArea.value = '';
	          _this22.setTyping(false);
	        }
	      } else {
	        _this22.setTyping(!!textArea.value.length);
	      }
	    });

	    return chatBox;
	  };

	  /**
	  * Set the user's online/active status
	  * @param {object} gun
	  * @param {string} activity string: set the activity status every 3 seconds, null/false: stop updating
	  */


	  Channel.setActivity = function setActivity(gun, activity) {
	    if (gun.irisActivityStatus === activity) {
	      return;
	    }
	    gun.irisActivityStatus = activity;
	    clearTimeout(gun.setActivityTimeout);
	    var update = function update() {
	      gun.user().get('activity').put({ status: activity, time: new Date(Gun.state()).toISOString() });
	    };
	    update();
	    function timerUpdate() {
	      update();
	      gun.setActivityTimeout = setTimeout(timerUpdate, 3000);
	    }
	    if (activity) {
	      timerUpdate();
	    }
	  };

	  /**
	  * Get the online status of a user.
	  *
	  * @param {object} gun
	  * @param {string} pubKey public key of the user
	  * @param {boolean} callback receives a boolean each time the user's online status changes
	  */


	  Channel.getActivity = function getActivity(gun, pubKey, callback) {
	    var timeout = void 0;
	    gun.user(pubKey).get('activity').on(function (activity) {
	      if (!activity || !(activity.time && activity.status)) {
	        return;
	      }
	      clearTimeout(timeout);
	      var now = new Date(Gun.state());
	      var activityDate = new Date(activity.time);
	      var isActive = activityDate > new Date(now.getTime() - 10 * 1000) && activityDate < new Date(now.getTime() + 30 * 1000);
	      callback({ isActive: isActive, lastActive: activity.time, status: activity.status });
	      if (isActive) {
	        timeout = setTimeout(function () {
	          return callback({ isOnline: false, lastActive: activity.time });
	        }, 10000);
	      }
	    });
	  };

	  /**
	  * In order to receive messages from others, this method must be called for newly created
	  * users that have not started a channel with an existing user yet.
	  *
	  * It saves the user's key.epub (public key for encryption) into their gun user space,
	  * so others can find it and write encrypted messages to them.
	  *
	  * If you start a channel with an existing user, key.epub is saved automatically and you don't need
	  * to call this method.
	  */


	  Channel.initUser = function initUser(gun, key) {
	    var user = gun.user();
	    user.auth(key);
	    user.put({ epub: key.epub });
	  };

	  Channel.formatChatLink = function formatChatLink(_ref2) {
	    var urlRoot = _ref2.urlRoot,
	        chatWith = _ref2.chatWith,
	        channelId = _ref2.channelId,
	        inviter = _ref2.inviter,
	        sharedSecret = _ref2.sharedSecret,
	        linkId = _ref2.linkId;

	    var enc = encodeURIComponent;
	    if (channelId && inviter) {
	      return urlRoot + '?channelId=' + enc(channelId) + '&inviter=' + enc(inviter) + '&s=' + enc(sharedSecret) + '&k=' + enc(linkId);
	    }
	    return urlRoot + '?chatWith=' + enc(chatWith) + '&s=' + enc(sharedSecret) + '&k=' + enc(linkId);
	  };

	  /**
	  * Creates a channel link that can be used for two-way communication, i.e. only one link needs to be exchanged.
	  */


	  Channel.createChatLink = async function createChatLink(gun, key) {
	    var urlRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'https://iris.to/';

	    var user = gun.user();
	    user.auth(key);

	    // We create a new Gun user whose private key is shared with the chat link recipients.
	    // Chat link recipients can contact you by writing their public key to the shared key's user space.
	    var sharedKey = await Gun.SEA.pair();
	    var sharedKeyString = _JSON$stringify(sharedKey);
	    var sharedSecret = await Gun.SEA.secret(sharedKey.epub, sharedKey);
	    var encryptedSharedKey = await Gun.SEA.encrypt(sharedKeyString, sharedSecret);
	    var ownerSecret = await Gun.SEA.secret(key.epub, key);
	    var ownerEncryptedSharedKey = await Gun.SEA.encrypt(sharedKeyString, ownerSecret);
	    var linkId = await util.getHash(encryptedSharedKey);
	    linkId = linkId.slice(0, 12);

	    // User has to exist, in order for .get(chatRequests).on() to be ever triggered
	    util.gunAsAnotherUser(gun, sharedKey, function (user) {
	      user.get('chatRequests').put({ a: 1 });
	    });

	    console.log(3);

	    user.get('chatLinks').get(linkId).put({ encryptedSharedKey: encryptedSharedKey, ownerEncryptedSharedKey: ownerEncryptedSharedKey });

	    return Channel.formatChatLink({ urlRoot: urlRoot, chatWith: key.pub, sharedSecret: sharedSecret, linkId: linkId });
	  };

	  /**
	  *
	  */


	  Channel.getMyChatLinks = async function getMyChatLinks(gun, key) {
	    var urlRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'https://iris.to/';
	    var callback = arguments[3];
	    var subscribe = arguments[4];

	    var user = gun.user();
	    user.auth(key);
	    var mySecret = await Gun.SEA.secret(key.epub, key);
	    var chatLinks = [];
	    user.get('chatLinks').map().on(function (data, linkId) {
	      if (!data || chatLinks.indexOf(linkId) !== -1) {
	        return;
	      }
	      var channels = [];
	      user.get('chatLinks').get(linkId).get('ownerEncryptedSharedKey').on(async function (enc) {
	        if (!enc || chatLinks.indexOf(linkId) !== -1) {
	          return;
	        }
	        chatLinks.push(linkId);
	        var sharedKey = await Gun.SEA.decrypt(enc, mySecret);
	        var sharedSecret = await Gun.SEA.secret(sharedKey.epub, sharedKey);
	        var url = Channel.formatChatLink({ urlRoot: urlRoot, chatWith: key.pub, sharedSecret: sharedSecret, linkId: linkId });
	        if (callback) {
	          callback({ url: url, id: linkId });
	        }
	        if (subscribe) {
	          gun.user(sharedKey.pub).get('chatRequests').map().on(async function (encPub, requestId) {
	            if (!encPub) {
	              return;
	            }
	            var s = _JSON$stringify(encPub);
	            if (channels.indexOf(s) === -1) {
	              channels.push(s);
	              var pub = await Gun.SEA.decrypt(encPub, sharedSecret);
	              var channel = new Channel({ gun: gun, key: key, participants: pub });
	              channel.save();
	            }
	            util.gunAsAnotherUser(gun, sharedKey, function (user) {
	              // remove the channel request after reading
	              user.get('chatRequests').get(requestId).put(null);
	            });
	          });
	        }
	      });
	    });
	  };

	  /**
	  *
	  */


	  Channel.prototype.removeGroupChatLink = function removeGroupChatLink(linkId) {
	    this.chatLinks[linkId] = null;
	    this.put('chatLinks', this.chatLinks);
	    this.gun.user().get('chatLinks').get(linkId).put(null);
	  };

	  /**
	  *
	  */


	  Channel.removePrivateChatLink = function removePrivateChatLink(gun, key, linkId) {
	    gun.user().auth(key);
	    gun.user().get('chatLinks').get(linkId).put(null);
	  };

	  /**
	  *
	  */


	  Channel.deleteChannel = async function deleteChannel(gun, key, pub) {
	    gun.user().auth(key);
	    var channelId = await Channel.getOurSecretChannelId(gun, pub, key);
	    gun.user().get('channels').get(channelId).put(null);
	    gun.user().get('channels').get(channelId).off();
	  };

	  /**
	  *
	  */


	  Channel.deleteGroup = async function deleteGroup(gun, key, uuid) {
	    var mySecret = await Gun.SEA.secret(key.epub, key);
	    var mySecretHash = await util.getHash(mySecret);
	    var mySecretUuid = await util.getHash(mySecretHash + uuid);
	    gun.user().auth(key);
	    gun.user().get('channels').get(mySecretUuid).put(null);
	    gun.user().get('channels').get(mySecretUuid).off();
	  };

	  return Channel;
	}();

	var taggedTemplateLiteralLoose = createCommonjsModule(function (module, exports) {

	exports.__esModule = true;

	exports.default = function (strings, raw) {
	  strings.raw = raw;
	  return strings;
	};
	});

	var _taggedTemplateLiteralLoose = unwrapExports(taggedTemplateLiteralLoose);

	var n,l,u,t,o,r,f$8={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n);}function h(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return v(l,f,t,o,null)}function v(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u:r};return null==r&&null!=l.vnode&&l.vnode(f),f}function y(){return {current:null}}function p(n){return n.children}function d(n,l){this.props=n,this.context=l;}function _(n,l){if(null==l)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?_(n):null}function k$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k$1(n)}}function b(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g$1.__r++||o!==l.debounceRendering)&&((o=l.debounceRendering)||setTimeout)(g$1);}function g$1(){for(var n;g$1.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=s({},t)).__v=t.__v+1,j$1(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?_(t):o,t.__h),z(u,t),t.__e!=o&&k$1(t)));});}function w(n,l,u,i,t,o,r,c,s,a){var h,y,d,k,b,g,w,x=i&&i.__k||e,C=x.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(p,{children:k},null,null,null):k.__b>0?v(k.type,k.props,k.key,k.ref?k.ref:null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(d=x[h])||d&&k.key==d.key&&k.type===d.type)x[h]=void 0;else for(y=0;y<C;y++){if((d=x[y])&&k.key==d.key&&k.type===d.type){x[y]=void 0;break}d=null;}j$1(n,k,d=d||f$8,t,o,r,c,s,a),b=k.__e,(y=k.ref)&&d.ref!=y&&(w||(w=[]),d.ref&&w.push(d.ref,null,k),w.push(y,k.__c||b,k)),null!=b?(null==g&&(g=b),"function"==typeof k.type&&k.__k===d.__k?k.__d=s=m(k,s,n):s=A(n,k,d,x,b,s),"function"==typeof u.type&&(u.__d=s)):s&&d.__e==s&&s.parentNode!=n&&(s=_(d));}for(u.__e=g,h=C;h--;)null!=x[h]&&("function"==typeof u.type&&null!=x[h].__e&&x[h].__e==u.__d&&(u.__d=_(i,h+1)),N(x[h],x[h]));if(w)for(h=0;h<w.length;h++)M(w[h],w[++h],w[++h]);}function m(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?m(i,l,u):A(u,i,i,t,i.__e,l));return l}function A(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function C(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H(n,o,l[o],u[o],i);}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||c.test(l)?u:u+"px";}function H(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T:I,o):n.removeEventListener(l,o?T:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function I(n){this.l[n.type+!1](l.event?l.event(n):n);}function T(n){this.l[n.type+!0](l.event?l.event(n):n);}function j$1(n,u,i,t,o,r,f,e,c){var a,h,v,y,_,k,b,g,m,x,A,C,$,H=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=l.__b)&&a(u);try{n:if("function"==typeof H){if(g=u.props,m=(a=H.contextType)&&t[a.__c],x=a?m?m.props.value:a.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in H&&H.prototype.render?u.__c=h=new H(g,x):(u.__c=h=new d(g,x),h.constructor=H,h.render=O),m&&m.sub(h),h.props=g,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=H.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=s({},h.__s)),s(h.__s,H.getDerivedStateFromProps(g,h.__s))),y=h.props,_=h.state,v)null==H.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==H.getDerivedStateFromProps&&g!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(g,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(g,h.__s,x)||u.__v===i.__v){h.props=g,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(g,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,_,k);});}if(h.context=x,h.props=g,h.__v=u,h.__P=n,A=l.__r,C=0,"prototype"in H&&H.prototype.render)h.state=h.__s,h.__d=!1,A&&A(u),a=h.render(h.props,h.state,h.context);else do{h.__d=!1,A&&A(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++C<25);h.state=h.__s,null!=h.getChildContext&&(t=s(s({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,_)),$=null!=a&&a.type===p&&null==a.key?a.props.children:a,w(n,Array.isArray($)?$:[$],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,o,r,f,c);(a=l.diffed)&&a(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l.__e(n,u,i);}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l.__e(n,u.__v);}});}function L(l,u,i,t,o,r,e,c){var s,h,v,y=i.props,p=u.props,d=u.type,k=0;if("svg"===d&&(o=!0),null!=r)for(;k<r.length;k++)if((s=r[k])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[k]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else{if(r=r&&n.call(l.childNodes),h=(y=i.props||f$8).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},k=0;k<l.attributes.length;k++)y[l.attributes[k].name]=l.attributes[k].value;(v||h)&&(v&&(h&&v.__html==h.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C(l,p,y,o,c),v)u.__k=[];else if(k=u.props.children,w(l,Array.isArray(k)?k:[k],u,i,t,o&&"foreignObject"!==d,r,e,r?r[0]:i.__k&&_(i,0),c),null!=r)for(k=r.length;k--;)null!=r[k]&&a(r[k]);c||("value"in p&&void 0!==(k=p.value)&&(k!==l.value||"progress"===d&&!k||"option"===d&&k!==y.value)&&H(l,"value",k,y.value,!1),"checked"in p&&void 0!==(k=p.checked)&&k!==l.checked&&H(l,"checked",k,y.checked,!1));}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l.__e(n,i);}}function N(n,u,i){var t,o;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l.__e(n,u);}t.base=t.__P=null,n.__c=void 0;}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,"function"!=typeof n.type);i||null==n.__e||a(n.__e),n.__=n.__e=n.__d=void 0;}function O(n,l,u){return this.constructor(n,u)}function P(u,i,t){var o,r,e;l.__&&l.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,e=[],j$1(i,u=(!o&&t||i).__k=h(p,null,[u]),r||f$8,f$8,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,e,!o&&t?t:r?r.__e:i.firstChild,o),z(e,u);}function S(n,l){P(n,l,S);}function q(l,u,i){var t,o,r,f=s({},l.props);for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),v(l.type,f,t||l.key,o||l.ref,null)}n=e.slice,l={__e:function(n,l,u,i){for(var t,o,r;l=l.__;)if((t=l.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(n)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(n,i||{}),r=t.__d),r)return t.__E=t}catch(l){n=l;}throw n}},u=0,d.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(s({},u),this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),b(this));},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),b(this));},d.prototype.render=p,t=[],g$1.__r=0,r=0;

	function r$1(){return (r$1=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);}return t}).apply(this,arguments)}function i$2(t){this.getChildContext=function(){return t.context};var e=t.children,n=function(t,e){if(null==t)return {};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)e.indexOf(n=i[o])>=0||(r[n]=t[n]);return r}(t,["context","children"]);return q(e,n)}function a$1(){var o=new CustomEvent("_preact",{detail:{},bubbles:!0,cancelable:!0});this.dispatchEvent(o),this._vdom=h(i$2,r$1({},this._props,{context:o.detail.context}),function e(n,o){if(3===n.nodeType)return n.data;if(1!==n.nodeType)return null;var r=[],i={},a=0,c=n.attributes,l$$1=n.childNodes;for(a=c.length;a--;)"slot"!==c[a].name&&(i[c[a].name]=c[a].value,i[s$1(c[a].name)]=c[a].value);for(a=l$$1.length;a--;){var p$$1=e(l$$1[a],null),d$$1=l$$1[a].slot;d$$1?i[d$$1]=h(u$1,{name:d$$1},p$$1):r[a]=p$$1;}var h$$1=o?h(u$1,null,r):r;return h(o||n.nodeName.toLowerCase(),i,h$$1)}(this,this._vdomComponent)),(this.hasAttribute("hydrate")?S:P)(this._vdom,this._root);}function s$1(t){return t.replace(/-(\w)/g,function(t,e){return e?e.toUpperCase():""})}function c$1(t,e,r){if(this._vdom){var i={};i[t]=r=null==r?void 0:r,i[s$1(t)]=r,this._vdom=q(this._vdom,i),P(this._vdom,this._root);}}function l$1(){P(this._vdom=null,this._root);}function u$1(e,n){var o=this;return h("slot",r$1({},e,{ref:function(t){t?(o.ref=t,o._listener||(o._listener=function(t){t.stopPropagation(),t.detail.context=n;},t.addEventListener("_preact",o._listener))):o.ref.removeEventListener("_preact",o._listener);}}))}function register(t,e,n,o){function r(){var e=Reflect.construct(HTMLElement,[],r);return e._vdomComponent=t,e._root=o&&o.shadow?e.attachShadow({mode:"open"}):e,e}return (r.prototype=Object.create(HTMLElement.prototype)).constructor=r,r.prototype.connectedCallback=a$1,r.prototype.attributeChangedCallback=c$1,r.prototype.disconnectedCallback=l$1,n=n||t.observedAttributes||Object.keys(t.propTypes||{}),r.observedAttributes=n,n.forEach(function(t){Object.defineProperty(r.prototype,t,{get:function(){return this._vdom.props[t]},set:function(e){this._vdom?this.attributeChangedCallback(t,null,e):(this._props||(this._props={}),this._props[t]=e,this.connectedCallback());var n=typeof e;null!=e&&"string"!==n&&"boolean"!==n&&"number"!==n||this.setAttribute(t,e);}});}),customElements.define(e||t.tagName||t.displayName||t.name,r)}

	var n$1=function(t,s,r,e){var u;s[0]=0;for(var h=1;h<s.length;h++){var p=s[h++],a=s[h]?(s[0]|=p?1:2,r[s[h++]]):s[++h];3===p?e[0]=a:4===p?e[1]=Object.assign(e[1]||{},a):5===p?(e[1]=e[1]||{})[s[++h]]=a:6===p?e[1][s[++h]]+=a+"":p?(u=t.apply(a,n$1(t,a,r,["",null])),e.push(u),a[0]?s[0]|=2:(s[h-2]=0,s[h]=u)):e.push(a);}return e},t$1=new Map;function e$1(s){var r=t$1.get(this);return r||(r=new Map,t$1.set(this,r)),(r=n$1(this,r.get(s)||(r.set(s,r=function(n){for(var t,s,r=1,e="",u="",h=[0],p=function(n){1===r&&(n||(e=e.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,n,e):3===r&&(n||e)?(h.push(3,n,e),r=2):2===r&&"..."===e&&n?h.push(4,n,0):2===r&&e&&!n?h.push(5,0,!0,e):r>=5&&((e||!n&&5===r)&&(h.push(r,0,e,s),r=6),n&&(h.push(r,n,0,s),r=6)),e="";},a=0;a<n.length;a++){a&&(1===r&&p(),p(a));for(var l=0;l<n[a].length;l++)t=n[a][l],1===r?"<"===t?(p(),h=[h],r=3):e+=t:4===r?"--"===e&&">"===t?(r=1,e=""):e=t+e[0]:u?t===u?u="":e+=t:'"'===t||"'"===t?u=t:">"===t?(p(),r=1):r&&("="===t?(r=5,s=e,e=""):"/"===t&&(r<5||">"===n[a][l+1])?(p(),3===r&&(h=h[0]),r=h,(h=h[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(p(),r=2):e+=t),3===r&&"!--"===e&&(r=4,h=h[0]);}return p(),h}(s)),r),arguments,[])).length>1?r:r[0]}

	var m$1=e$1.bind(h);

	var _templateObject = _taggedTemplateLiteralLoose(['\n      <input\n        type="text"\n        value=', '\n        placeholder=', '\n        class=', '\n        onInput=', '\n        disabled=', ' />\n    '], ['\n      <input\n        type="text"\n        value=', '\n        placeholder=', '\n        class=', '\n        onInput=', '\n        disabled=', ' />\n    ']),
	    _templateObject2 = _taggedTemplateLiteralLoose(['\n      <', ' class=', ' ref=', ' contenteditable=', ' placeholder=', ' onInput=', '>\n        ', '\n      </', '>\n    '], ['\n      <', ' class=', ' ref=', ' contenteditable=', ' placeholder=', ' onInput=', '>\n        ', '\n      </', '>\n    ']);

	var TextNode = function (_Component) {
	  _inherits(TextNode, _Component);

	  function TextNode() {
	    _classCallCheck(this, TextNode);

	    var _this = _possibleConstructorReturn(this, _Component.call(this));

	    _this.ref = y();
	    _this.eventListeners = {};
	    _this.state = { value: '' };
	    return _this;
	  }

	  TextNode.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    if (prevProps.user !== this.props.user || prevProps.path !== this.props.path) {
	      this.setState({ value: '' });
	      this.eventListenersOff();
	      this.componentDidMount();
	    }
	  };

	  TextNode.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;

	    if (!this.props.path || this.props.user === undefined) {
	      return;
	    }
	    util.injectCss();
	    this.path = this.props.path;
	    this.user = this.props.user;
	    this.props.user && this.path && this.getValue(this.props.user);
	    var ps = util.getPublicState();
	    var myPub = ps._.user && ps._.user.is.pub;
	    var setMyPub = function setMyPub(myPub) {
	      _this2.setState({ myPub: myPub });
	      if (!_this2.props.user) {
	        _this2.user = myPub;
	        _this2.getValue(myPub);
	      }
	    };
	    if (myPub) {
	      setMyPub(myPub);
	    } else {
	      Key.getDefault().then(function (key) {
	        setMyPub(key.pub);
	      });
	    }
	  };

	  TextNode.prototype.getNode = function getNode(user) {
	    var base = util.getPublicState().user(user);
	    var path = this.path.split('/');
	    return path.reduce(function (sum, current) {
	      return sum.get(decodeURIComponent(current));
	    }, base);
	  };

	  TextNode.prototype.getValue = function getValue(user) {
	    var _this3 = this;

	    this.getNode(user).once();
	    this.getNode(user).on(function (value, a, b, e) {
	      _this3.eventListeners[_this3.path] = e;
	      if (_this3.unmounted) return;
	      if (!(_this3.ref.current && _this3.ref.current === document.activeElement)) {
	        _this3.setState({ value: value, class: typeof value === 'string' ? '' : 'iris-non-string' });
	      }
	    });
	  };

	  TextNode.prototype.eventListenersOff = function eventListenersOff() {
	    _Object$values(this.eventListeners).forEach(function (e) {
	      return e.off();
	    });
	    this.eventListeners = {};
	  };

	  TextNode.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.unmounted = true;
	    this.eventListenersOff();
	  };

	  TextNode.prototype.getParsedValue = function getParsedValue(s) {
	    if (this.props.json) {
	      try {
	        s = JSON.parse(s);
	      } catch (e) {
	      }
	    }
	    return s;
	  };

	  TextNode.prototype.onInput = function onInput(e) {
	    var val = this.getParsedValue(e.target.value || e.target.innerText);
	    this.getNode().put(val);
	    this.setState({ class: typeof val === 'string' ? '' : 'iris-non-string' });
	  };

	  TextNode.prototype.isEditable = function isEditable() {
	    return (!this.props.user || this.props.user === this.state.myPub) && String(this.props.editable) !== 'false';
	  };

	  TextNode.prototype.renderInput = function renderInput() {
	    var _this4 = this;

	    return m$1(_templateObject, this.state.value, this.props.placeholder || this.path, this.getClass(), function (e) {
	      return _this4.onInput(e);
	    }, !this.isEditable());
	  };

	  TextNode.prototype.renderTag = function renderTag() {
	    var _this5 = this;

	    var placeholder = this.props.placeholder || this.props.path;
	    var tag = this.props.tag || 'span';
	    return m$1(_templateObject2, tag, this.state.class, this.ref, this.isEditable(), placeholder, function (e) {
	      return _this5.onInput(e);
	    }, this.props.json ? _JSON$stringify(this.state.value) : this.state.value, tag);
	  };

	  TextNode.prototype.render = function render() {
	    return this.props.tag === 'input' ? this.renderInput() : this.renderTag();
	  };

	  return TextNode;
	}(d);

	!util.isNode && register(TextNode, 'iris-text', ['path', 'user', 'placeholder', 'editable', 'tag']);

	var _templateObject$1 = _taggedTemplateLiteralLoose(['\n      <input\n        type="text"\n        value=', '\n        placeholder=', '\n        onInput=', '\n        disabled=', ' />\n    '], ['\n      <input\n        type="text"\n        value=', '\n        placeholder=', '\n        onInput=', '\n        disabled=', ' />\n    ']),
	    _templateObject2$1 = _taggedTemplateLiteralLoose(['\n      <', ' ref=', ' contenteditable=', ' placeholder=', ' onInput=', '>\n        ', '\n      </', '>\n    '], ['\n      <', ' ref=', ' contenteditable=', ' placeholder=', ' onInput=', '>\n        ', '\n      </', '>\n    ']),
	    _templateObject3 = _taggedTemplateLiteralLoose(['<img style=', ' onClick=', ' src=', ' ...', '/>'], ['<img style=', ' onClick=', ' src=', ' ...', '/>']),
	    _templateObject4 = _taggedTemplateLiteralLoose(['<button class=', ' onClick=', '>Add image</button>'], ['<button class=', ' onClick=', '>Add image</button>']),
	    _templateObject5 = _taggedTemplateLiteralLoose(['\n      <span>\n        <input name="profile-photo-input" type="file" style="display:none;" onChange=', ' accept="image/*"/>\n        ', '\n      </span>\n    '], ['\n      <span>\n        <input name="profile-photo-input" type="file" style="display:none;" onChange=', ' accept="image/*"/>\n        ', '\n      </span>\n    ']);

	var toBase64 = function toBase64(file) {
	  return new _Promise(function (resolve, reject) {
	    var reader = new FileReader();
	    reader.readAsDataURL(file);
	    reader.onload = function () {
	      return resolve(reader.result);
	    };
	    reader.onerror = function (error) {
	      return reject(error);
	    };
	  });
	};

	var ImageNode = function (_TextNode) {
	  _inherits(ImageNode, _TextNode);

	  function ImageNode() {
	    _classCallCheck(this, ImageNode);

	    return _possibleConstructorReturn(this, _TextNode.apply(this, arguments));
	  }

	  ImageNode.prototype.getValue = function getValue(user) {
	    var _this2 = this;

	    this.getNode(user).on(function (value, a, b, e) {
	      _this2.eventListeners[_this2.path] = e;
	      _this2.setState({ value: value });
	    });
	  };

	  ImageNode.prototype.onChange = async function onChange(e) {
	    var file = e.target.files[0];
	    var data = await toBase64(file);
	    this.getNode().put(data);
	  };

	  ImageNode.prototype.renderInput = function renderInput() {
	    var _this3 = this;

	    return m$1(_templateObject$1, this.state.value, this.props.placeholder || this.path, function (e) {
	      return _this3.onInput(e);
	    }, !this.isEditable());
	  };

	  ImageNode.prototype.renderTag = function renderTag() {
	    var _this4 = this;

	    var placeholder = this.props.placeholder || this.props.path;
	    var tag = this.props.tag || 'span';
	    return m$1(_templateObject2$1, tag, this.ref, this.isEditable(), placeholder, function (e) {
	      return _this4.onInput(e);
	    }, this.state.value, tag);
	  };

	  ImageNode.prototype.onClick = function onClick() {
	    if (this.isEditable()) {
	      this.base.firstChild.click();
	    }
	  };

	  ImageNode.prototype.render = function render() {
	    var _this5 = this;

	    var editable = this.isEditable();
	    var val = this.state.value;
	    var src = val && val.indexOf('data:image') === 0 ? val : this.props.placeholder;
	    var _props = this.props,
	        alt = _props.alt,
	        width = _props.width,
	        height = _props.height;

	    var el = void 0;
	    if (src) {
	      var style = editable ? 'cursor: pointer;' : '';
	      el = m$1(_templateObject3, style, function (e) {
	        return _this5.onClick(e);
	      }, val, { alt: alt, width: width, height: height });
	    } else if (editable) {
	      el = m$1(_templateObject4, this.props['btn-class'], function (e) {
	        return _this5.onClick(e);
	      });
	    }
	    return m$1(_templateObject5, function (e) {
	      return _this5.onChange(e);
	    }, el);
	  };

	  return ImageNode;
	}(TextNode);

	!util.isNode && register(ImageNode, 'iris-img', ['path', 'user', 'placeholder', 'editable', 'alt', 'width', 'height']);

	var _templateObject$2 = _taggedTemplateLiteralLoose(['<button class=', ' onClick=', '>', '</button>'], ['<button class=', ' onClick=', '>', '</button>']);

	var CopyButton = function (_Component) {
	  _inherits(CopyButton, _Component);

	  function CopyButton() {
	    _classCallCheck(this, CopyButton);

	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }

	  CopyButton.prototype.copyToClipboard = function copyToClipboard(text) {
	    if (window.clipboardData && window.clipboardData.setData) {
	      // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
	      return window.clipboardData.setData('Text', text);
	    } else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
	      var textarea = document.createElement('textarea');
	      textarea.textContent = text;
	      textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in Microsoft Edge.
	      document.body.appendChild(textarea);
	      textarea.select();
	      try {
	        return document.execCommand('copy'); // Security exception may be thrown by some browsers.
	      } catch (ex) {
	        console.warn('Copy to clipboard failed.', ex);
	        return false;
	      } finally {
	        document.body.removeChild(textarea);
	      }
	    }
	  };

	  CopyButton.prototype.copy = function copy(e, str) {
	    var _this2 = this;

	    this.copyToClipboard(str);

	    var tgt = e.target;
	    this.originalWidth = this.originalWidth || tgt.offsetWidth + 1;
	    tgt.style.width = this.originalWidth;

	    this.setState({ copied: true });
	    clearTimeout(this.timeout);
	    this.timeout = setTimeout(function () {
	      return _this2.setState({ copied: false });
	    }, 2000);
	  };

	  CopyButton.prototype.onClick = function onClick(e) {
	    var _this3 = this;

	    e.preventDefault();
	    var str = typeof this.props.str === 'function' ? this.props.str() : this.props.str;

	    if (navigator.share && util.isMobile && !this.props['not-shareable']) {
	      navigator.share({ url: str, title: this.props.title }).catch(function (err) {
	        console.error('share failed', err);
	        _this3.copy(e, str);
	      });
	    } else {
	      this.copy(e, str);
	    }
	  };

	  CopyButton.prototype.render = function render() {
	    var _this4 = this;

	    var text = this.state.copied ? this.props['copied-text'] || 'Copied' : this.props.text || 'Copy';
	    return m$1(_templateObject$2, this.props['inner-class'] || 'copy-button', function (e) {
	      return _this4.onClick(e);
	    }, text);
	  };

	  return CopyButton;
	}(d);

	!util.isNode && register(CopyButton, 'iris-copy-button', ['str', 'not-shareable', 'text', 'copied-text', 'title', 'inner-class']);

	var _templateObject$3 = _taggedTemplateLiteralLoose(['\n      <button class="iris-follow-button ', ' ', '" onClick=', '>\n        <span class="nonhover">', '</span>\n        <span class="hover">Unfollow</span>\n      </button>\n    '], ['\n      <button class="iris-follow-button ', ' ', '" onClick=', '>\n        <span class="nonhover">', '</span>\n        <span class="hover">Unfollow</span>\n      </button>\n    ']);

	var FollowButton = function (_Component) {
	  _inherits(FollowButton, _Component);

	  function FollowButton() {
	    _classCallCheck(this, FollowButton);

	    var _this = _possibleConstructorReturn(this, _Component.call(this));

	    _this.eventListeners = {};
	    return _this;
	  }

	  FollowButton.prototype.onClick = function onClick(e) {
	    e.preventDefault();
	    var follow = !this.state.following;
	    util.getPublicState().user().get('follow').get(this.props.user).put(follow);
	  };

	  FollowButton.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;

	    util.injectCss();
	    Key.getDefault().then(function (key) {
	      util.getPublicState().user().auth(key);
	      util.getPublicState().user().get('follow').get(_this2.props.user).on(function (following, a, b, e) {
	        _this2.setState({ following: following });
	        _this2.eventListeners['follow'] = e;
	      });
	    });
	  };

	  FollowButton.prototype.componentWillUnmount = function componentWillUnmount() {
	    _Object$values(this.eventListeners).forEach(function (e) {
	      return e.off();
	    });
	  };

	  FollowButton.prototype.render = function render() {
	    var _this3 = this;

	    return m$1(_templateObject$3, this.state.following ? 'following' : '', this.props['inner-class'] || '', function (e) {
	      return _this3.onClick(e);
	    }, this.state.following ? 'Following' : 'Follow');
	  };

	  return FollowButton;
	}(d);

	!util.isNode && register(FollowButton, 'iris-follow-button', ['user']);

	/*eslint no-useless-escape: "off", camelcase: "off" */

	var index = {
	  SignedMessage: SignedMessage,
	  Attribute: Attribute,
	  Key: Key,
	  Channel: Channel,
	  util: util,
	  components: {
	    TextNode: TextNode,
	    ImageNode: ImageNode,
	    CopyButton: CopyButton,
	    FollowButton: FollowButton
	  }
	};

	return index;

})));
