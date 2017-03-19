/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _App = __webpack_require__(4);

	var _App2 = _interopRequireDefault(_App);

	var _State = __webpack_require__(1);

	var _utility = __webpack_require__(3);

	var util = _interopRequireWildcard(_utility);

	var _TitleCard = __webpack_require__(5);

	var _TitleCard2 = _interopRequireDefault(_TitleCard);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isMobile = util.isMobileDevice(); // true or false


	var cards = [new _TitleCard2.default({ name: 'Dave' })];

	console.log('starting');
	console.log(cards);

	document.body.innerHTML = cards[0].template();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.state = undefined;

	var _content = __webpack_require__(2);

	var state = exports.state = {
		content: _content.content

	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var content = exports.content = {
		title: '',
		intro: '',

		cards: [{
			type: 'basic',
			content: {
				images: [{
					name: 'image.jpg',
					caption: 'Picture caption',
					credit: 'Credit Name'
				}],
				grid: {
					style: '', // icon || square || circle
					icon: 'icon.svg', //icon shape, color controlled through app
					total: '', // int as number or string
					hilighted: '' // int as number or string
				},
				text: {
					display: 'Card  title',
					quote: {
						text: 'Quote text',
						credit: 'Who said it'
					},
					list: [// type is controlled by template (?)
					'First list item', 'Ssecond list item'],
					number: {
						type: 'percent', //int, float, percent
						value: 50 // provide conversion from string as fallback
					}
				}
			},
			animations: { // controlled by template (?)
				enter: '',
				active: '',
				exit: ''
			}

		} // end of card data


		]
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.siblings = siblings;
	exports.closest = closest;
	exports.delegate = delegate;
	exports.addClass = addClass;
	exports.removeClass = removeClass;
	exports.IEdetection = IEdetection;
	exports.detectChrome = detectChrome;
	exports.loadMaterialIcons = loadMaterialIcons;
	exports.addStyleSheetToHead = addStyleSheetToHead;
	exports.addScriptToHead = addScriptToHead;
	exports.detectIE = detectIE;
	/* Utility functions */
	function siblings(selector) {
		var element = document.querySelector(selector);
		var childElements = Array.from(element.parentNode.children);
		return childElements.filter(function (child) {
			return child !== element;
		});
	}

	function closest(element, query) {
		while (!!element && element !== document) {
			if (!Element.prototype.matches) {
				/* polyfill of matches method for IE */
				Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
					var matches = (this.document || this.ownerDocument).querySelectorAll(query),
					    i = matches.length;
					while (--i >= 0 && matches.item(i) !== this) {}
					return i > -1;
				};
			} else if (element.matches(query)) {
				return element;
			}
			element = element.parentNode;
		}
		return null;
	}

	function delegate(selector, eventName, targetSelector, listener) {
		document.querySelector(selector).addEventListener(eventName, function (event) {
			var closestMatch = closest(event.target, targetSelector);
			if (closestMatch) {
				event.delegateTarget = closestMatch;
				listener(event);
			}
		});
	}

	var randomNumber = exports.randomNumber = function randomNumber(low, high) {
		return Math.floor(Math.random() * high) + low;
	};

	function addClass(elem, className) {
		if (!!elem.classList) {
			elem.classList.add(className);
		} else {
			elem.className += ' ' + className;
		}
	}
	function removeClass(elem, className) {
		if (!!elem) {
			if (elem.classList) {
				elem.classList.remove(className);
			} else {
				elem.className = elem.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		}
	}

	function IEdetection() {
		console.warn('running IE detect');
		var ie = function () {
			var undef = void 0,
			    v = 3,
			    div = document.createElement('div'),
			    all = div.getElementsByTagName('i');
			while (div.innerHTML = '<!--[if gt IE ' + ++v + ']><i></i><![endif]-->', all[0]) {}
			return v > 4 ? v : undef;
		}();
		console.warn('IE version', ie);
		if (ie <= 11) {
			document.getElementById('appContainer').innerHTML = 'Sorry, this feature is not supported in your browser.';
			/*document.getElementById('appContainer').style.display = 'none';
	  document.getElementById('popupContainer').style.display = 'none';*/
		} else {
				//document.getElementById('ieDetect').innerHTML = '';
				//document.getElementById('ieDetect').style.display = 'none';
			}
	}

	function detectChrome() {
		// please note, 
		// that IE11 now returns undefined again for window.chrome
		// and new Opera 30 outputs true for window.chrome
		// and new IE Edge outputs to true now for window.chrome
		// and if not iOS Chrome check
		// so use the below updated condition
		var isChromium = window.chrome,
		    winNav = window.navigator,
		    vendorName = winNav.vendor,
		    isOpera = winNav.userAgent.indexOf("OPR") > -1,
		    isIEedge = winNav.userAgent.indexOf("Edge") > -1,
		    isIOSChrome = winNav.userAgent.match("CriOS");

		if (isIOSChrome) {
			// is Google Chrome on IOS
			return false;
		} else if (isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false) {
			// is Google Chrome
			return true;
		} else {
			// not Google Chrome 
			return false;
		}
	}

	function loadMaterialIcons() {
		var head = document.getElementsByTagName('head')[0];
		var iconFont = document.createElement('link');
		iconFont.id = 'mdlIconFont';
		iconFont.rel = 'stylesheet';
		iconFont.type = 'text/css';
		iconFont.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
		iconFont.media = 'all';
		head.appendChild(iconFont);
	}
	function addStyleSheetToHead(url, className) {
		var head = document.getElementsByTagName('head')[0];
		var link = document.createElement('link');
		link.className = className || 'ndi-customStyleSheet';
		link.rel = 'stylesheet';
		link.type = 'text/css';
		link.href = url;
		link.media = 'all';
		head.appendChild(link);
	}
	function addScriptToHead(url, className) {
		var head = document.getElementsByTagName('head')[0];
		var scriptFile = document.createElement('script');
		scriptFile.className = className || 'ndi-customScripts';;
		scriptFile.type = 'text/javascript';
		scriptFile.src = url;
		head.appendChild(scriptFile);
	}

	var isMobileDevice = exports.isMobileDevice = function isMobileDevice() {
		var mobile = /iPad|Android|webOS|iPhone|iPod|Blackberry/.test(navigator.userAgent) && !window.MSStream;
		return mobile ? true : false;
	};

	var isIOSDevice = function isIOSDevice() {
		var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
		return ios ? true : false;
	};

	function detectIE() {
		var ua = window.navigator.userAgent;
		// Test values; Uncomment to check result …
		// IE 10
		// ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

		// IE 11
		// ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

		// Edge 12 (Spartan)
		// ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

		// Edge 13
		// ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

		var msie = ua.indexOf('MSIE ');
		if (msie > 0) {
			// IE 10 or older => return version number
			return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		}
		var trident = ua.indexOf('Trident/');
		if (trident > 0) {
			// IE 11 => return version number
			var rv = ua.indexOf('rv:');
			return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
		}
		var edge = ua.indexOf('Edge/');
		if (edge > 0) {
			// Edge (IE 12+) => return version number
			return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
		}
		// other browser
		return false;
	}

	var addEvent = exports.addEvent = function addEvent(object, type, callback) {
		if (object == null || typeof object == 'undefined') {
			console.error('Cannot add ' + type + ' to ' + object + '. Object not recognised');
			return;
		}
		if (object.addEventListener) {
			object.addEventListener(type, callback, false);
		} else if (object.attachEvent) {
			object.attachEvent("on" + type, callback);
		} else {
			object["on" + type] = callback;
		}
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _style = __webpack_require__(6);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TitleCard = function () {
		function TitleCard(props) {
			_classCallCheck(this, TitleCard);

			this.props = props;
		}

		_createClass(TitleCard, [{
			key: 'template',
			value: function template() {
				return '<div class="' + _style2.default.card + '">\n\t\t\t<h1>Hello ' + this.props.name + '</h1>\n\t\t</div>';
			}
		}]);

		return TitleCard;
	}();

	exports.default = TitleCard;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"card":"style__card___Hxtuf"};

/***/ }
/******/ ]);