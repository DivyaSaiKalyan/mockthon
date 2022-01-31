'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">mockthon documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-AppModule-c26d27f5a5e99ff0834acf25a755278827f58efad3096781f521e2a39229709c25c3d23445632029e2ba77b73b00a605c99ec1ac9a3fd291c86b92c6ce5f1c0f"' : 'data-target="#xs-controllers-links-module-AppModule-c26d27f5a5e99ff0834acf25a755278827f58efad3096781f521e2a39229709c25c3d23445632029e2ba77b73b00a605c99ec1ac9a3fd291c86b92c6ce5f1c0f"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AppModule-c26d27f5a5e99ff0834acf25a755278827f58efad3096781f521e2a39229709c25c3d23445632029e2ba77b73b00a605c99ec1ac9a3fd291c86b92c6ce5f1c0f"' : 'id="xs-controllers-links-module-AppModule-c26d27f5a5e99ff0834acf25a755278827f58efad3096781f521e2a39229709c25c3d23445632029e2ba77b73b00a605c99ec1ac9a3fd291c86b92c6ce5f1c0f"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AppController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AppModule-c26d27f5a5e99ff0834acf25a755278827f58efad3096781f521e2a39229709c25c3d23445632029e2ba77b73b00a605c99ec1ac9a3fd291c86b92c6ce5f1c0f"' : 'data-target="#xs-injectables-links-module-AppModule-c26d27f5a5e99ff0834acf25a755278827f58efad3096781f521e2a39229709c25c3d23445632029e2ba77b73b00a605c99ec1ac9a3fd291c86b92c6ce5f1c0f"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AppModule-c26d27f5a5e99ff0834acf25a755278827f58efad3096781f521e2a39229709c25c3d23445632029e2ba77b73b00a605c99ec1ac9a3fd291c86b92c6ce5f1c0f"' : 'id="xs-injectables-links-module-AppModule-c26d27f5a5e99ff0834acf25a755278827f58efad3096781f521e2a39229709c25c3d23445632029e2ba77b73b00a605c99ec1ac9a3fd291c86b92c6ce5f1c0f"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AppService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/BookingModule.html\" data-type=\"entity-link\" >BookingModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-BookingModule-fd3d00406ec26b9718e6b6850cf12d797b9161cc1e48d9a316cc8a935c53d842f9274aff00c350b8d79c4289c38c076bb1cc998d06a4120af05d556f9a152db2"' : 'data-target="#xs-controllers-links-module-BookingModule-fd3d00406ec26b9718e6b6850cf12d797b9161cc1e48d9a316cc8a935c53d842f9274aff00c350b8d79c4289c38c076bb1cc998d06a4120af05d556f9a152db2"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-BookingModule-fd3d00406ec26b9718e6b6850cf12d797b9161cc1e48d9a316cc8a935c53d842f9274aff00c350b8d79c4289c38c076bb1cc998d06a4120af05d556f9a152db2"' : 'id="xs-controllers-links-module-BookingModule-fd3d00406ec26b9718e6b6850cf12d797b9161cc1e48d9a316cc8a935c53d842f9274aff00c350b8d79c4289c38c076bb1cc998d06a4120af05d556f9a152db2"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/BookingController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BookingController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-BookingModule-fd3d00406ec26b9718e6b6850cf12d797b9161cc1e48d9a316cc8a935c53d842f9274aff00c350b8d79c4289c38c076bb1cc998d06a4120af05d556f9a152db2"' : 'data-target="#xs-injectables-links-module-BookingModule-fd3d00406ec26b9718e6b6850cf12d797b9161cc1e48d9a316cc8a935c53d842f9274aff00c350b8d79c4289c38c076bb1cc998d06a4120af05d556f9a152db2"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-BookingModule-fd3d00406ec26b9718e6b6850cf12d797b9161cc1e48d9a316cc8a935c53d842f9274aff00c350b8d79c4289c38c076bb1cc998d06a4120af05d556f9a152db2"' : 'id="xs-injectables-links-module-BookingModule-fd3d00406ec26b9718e6b6850cf12d797b9161cc1e48d9a316cc8a935c53d842f9274aff00c350b8d79c4289c38c076bb1cc998d06a4120af05d556f9a152db2"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/BookingService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BookingService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/ConfigureService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ConfigureService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/StaffinfoService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >StaffinfoService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ConfigureModule.html\" data-type=\"entity-link\" >ConfigureModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-ConfigureModule-7c4f70ea68593117daa8bdee3723b89a2333226fe76e44da8729b3cd8dc4c2f47f9d640d44f711a0a1454ba6721fca77b852bdfcfcb5d3be1ff0ee6ee1b9ee56"' : 'data-target="#xs-controllers-links-module-ConfigureModule-7c4f70ea68593117daa8bdee3723b89a2333226fe76e44da8729b3cd8dc4c2f47f9d640d44f711a0a1454ba6721fca77b852bdfcfcb5d3be1ff0ee6ee1b9ee56"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-ConfigureModule-7c4f70ea68593117daa8bdee3723b89a2333226fe76e44da8729b3cd8dc4c2f47f9d640d44f711a0a1454ba6721fca77b852bdfcfcb5d3be1ff0ee6ee1b9ee56"' : 'id="xs-controllers-links-module-ConfigureModule-7c4f70ea68593117daa8bdee3723b89a2333226fe76e44da8729b3cd8dc4c2f47f9d640d44f711a0a1454ba6721fca77b852bdfcfcb5d3be1ff0ee6ee1b9ee56"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/ConfigureController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ConfigureController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-ConfigureModule-7c4f70ea68593117daa8bdee3723b89a2333226fe76e44da8729b3cd8dc4c2f47f9d640d44f711a0a1454ba6721fca77b852bdfcfcb5d3be1ff0ee6ee1b9ee56"' : 'data-target="#xs-injectables-links-module-ConfigureModule-7c4f70ea68593117daa8bdee3723b89a2333226fe76e44da8729b3cd8dc4c2f47f9d640d44f711a0a1454ba6721fca77b852bdfcfcb5d3be1ff0ee6ee1b9ee56"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-ConfigureModule-7c4f70ea68593117daa8bdee3723b89a2333226fe76e44da8729b3cd8dc4c2f47f9d640d44f711a0a1454ba6721fca77b852bdfcfcb5d3be1ff0ee6ee1b9ee56"' : 'id="xs-injectables-links-module-ConfigureModule-7c4f70ea68593117daa8bdee3723b89a2333226fe76e44da8729b3cd8dc4c2f47f9d640d44f711a0a1454ba6721fca77b852bdfcfcb5d3be1ff0ee6ee1b9ee56"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/ConfigureService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ConfigureService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/StaffinfoModule.html\" data-type=\"entity-link\" >StaffinfoModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-StaffinfoModule-23a76bc95ba8729e0fdcb5e9ad54ffb359e1e2eb77b47ba74243fcffd34e45ef5bb86c1792b371ff3ef25292b2e4fa45e78a4357a5b8d474cf693409d90be0d7"' : 'data-target="#xs-controllers-links-module-StaffinfoModule-23a76bc95ba8729e0fdcb5e9ad54ffb359e1e2eb77b47ba74243fcffd34e45ef5bb86c1792b371ff3ef25292b2e4fa45e78a4357a5b8d474cf693409d90be0d7"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-StaffinfoModule-23a76bc95ba8729e0fdcb5e9ad54ffb359e1e2eb77b47ba74243fcffd34e45ef5bb86c1792b371ff3ef25292b2e4fa45e78a4357a5b8d474cf693409d90be0d7"' : 'id="xs-controllers-links-module-StaffinfoModule-23a76bc95ba8729e0fdcb5e9ad54ffb359e1e2eb77b47ba74243fcffd34e45ef5bb86c1792b371ff3ef25292b2e4fa45e78a4357a5b8d474cf693409d90be0d7"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/StaffinfoController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >StaffinfoController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-StaffinfoModule-23a76bc95ba8729e0fdcb5e9ad54ffb359e1e2eb77b47ba74243fcffd34e45ef5bb86c1792b371ff3ef25292b2e4fa45e78a4357a5b8d474cf693409d90be0d7"' : 'data-target="#xs-injectables-links-module-StaffinfoModule-23a76bc95ba8729e0fdcb5e9ad54ffb359e1e2eb77b47ba74243fcffd34e45ef5bb86c1792b371ff3ef25292b2e4fa45e78a4357a5b8d474cf693409d90be0d7"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-StaffinfoModule-23a76bc95ba8729e0fdcb5e9ad54ffb359e1e2eb77b47ba74243fcffd34e45ef5bb86c1792b371ff3ef25292b2e4fa45e78a4357a5b8d474cf693409d90be0d7"' : 'id="xs-injectables-links-module-StaffinfoModule-23a76bc95ba8729e0fdcb5e9ad54ffb359e1e2eb77b47ba74243fcffd34e45ef5bb86c1792b371ff3ef25292b2e4fa45e78a4357a5b8d474cf693409d90be0d7"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/StaffinfoService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >StaffinfoService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UserModule.html\" data-type=\"entity-link\" >UserModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-UserModule-85a11fd52415ddf07851ad074e0f2a7be532f5b70cf5fd52b617e732d9aed71a8207cb146fb1b561b08fdb576206d47d2b2f02afc79262b4caa4d84c513bb790"' : 'data-target="#xs-controllers-links-module-UserModule-85a11fd52415ddf07851ad074e0f2a7be532f5b70cf5fd52b617e732d9aed71a8207cb146fb1b561b08fdb576206d47d2b2f02afc79262b4caa4d84c513bb790"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-UserModule-85a11fd52415ddf07851ad074e0f2a7be532f5b70cf5fd52b617e732d9aed71a8207cb146fb1b561b08fdb576206d47d2b2f02afc79262b4caa4d84c513bb790"' : 'id="xs-controllers-links-module-UserModule-85a11fd52415ddf07851ad074e0f2a7be532f5b70cf5fd52b617e732d9aed71a8207cb146fb1b561b08fdb576206d47d2b2f02afc79262b4caa4d84c513bb790"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/UserController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UserController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-UserModule-85a11fd52415ddf07851ad074e0f2a7be532f5b70cf5fd52b617e732d9aed71a8207cb146fb1b561b08fdb576206d47d2b2f02afc79262b4caa4d84c513bb790"' : 'data-target="#xs-injectables-links-module-UserModule-85a11fd52415ddf07851ad074e0f2a7be532f5b70cf5fd52b617e732d9aed71a8207cb146fb1b561b08fdb576206d47d2b2f02afc79262b4caa4d84c513bb790"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-UserModule-85a11fd52415ddf07851ad074e0f2a7be532f5b70cf5fd52b617e732d9aed71a8207cb146fb1b561b08fdb576206d47d2b2f02afc79262b4caa4d84c513bb790"' : 'id="xs-injectables-links-module-UserModule-85a11fd52415ddf07851ad074e0f2a7be532f5b70cf5fd52b617e732d9aed71a8207cb146fb1b561b08fdb576206d47d2b2f02afc79262b4caa4d84c513bb790"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/UserService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UserService</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/jwtServiceClass.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >jwtServiceClass</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links"' : 'data-target="#xs-controllers-links"', ">\n                                <span class=\"icon ion-md-swap\"></span>\n                                <span>Controllers</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"controllers/AppController.html\" data-type=\"entity-link\" >AppController</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"controllers/BookingController.html\" data-type=\"entity-link\" >BookingController</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"controllers/ConfigureController.html\" data-type=\"entity-link\" >ConfigureController</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"controllers/StaffinfoController.html\" data-type=\"entity-link\" >StaffinfoController</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"controllers/UserController.html\" data-type=\"entity-link\" >UserController</a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#entities-links"' : 'data-target="#xs-entities-links"', ">\n                                <span class=\"icon ion-ios-apps\"></span>\n                                <span>Entities</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"entities/BookingOperationTheater.html\" data-type=\"entity-link\" >BookingOperationTheater</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/Login.html\" data-type=\"entity-link\" >Login</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/OperationTheaterInfo.html\" data-type=\"entity-link\" >OperationTheaterInfo</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/StaffCategory.html\" data-type=\"entity-link\" >StaffCategory</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/staffInfo.html\" data-type=\"entity-link\" >staffInfo</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"entities/User.html\" data-type=\"entity-link\" >User</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/BadRequest.html\" data-type=\"entity-link\" >BadRequest</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CommonEntity.html\" data-type=\"entity-link\" >CommonEntity</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ForbiddenException.html\" data-type=\"entity-link\" >ForbiddenException</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/GlobalAccess.html\" data-type=\"entity-link\" >GlobalAccess</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/HttpExceptionFilter.html\" data-type=\"entity-link\" >HttpExceptionFilter</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/loginDto.html\" data-type=\"entity-link\" >loginDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Maintenance.html\" data-type=\"entity-link\" >Maintenance</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/NotFound.html\" data-type=\"entity-link\" >NotFound</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/staffInfoDto.html\" data-type=\"entity-link\" >staffInfoDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/TypeOrmInterface.html\" data-type=\"entity-link\" >TypeOrmInterface</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Unauthorized.html\" data-type=\"entity-link\" >Unauthorized</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/userDto.html\" data-type=\"entity-link\" >userDto</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AppService.html\" data-type=\"entity-link\" >AppService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/BookingService.html\" data-type=\"entity-link\" >BookingService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/CacheManagerInterceptor.html\" data-type=\"entity-link\" >CacheManagerInterceptor</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ConfigureService.html\" data-type=\"entity-link\" >ConfigureService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/jwtServiceClass.html\" data-type=\"entity-link\" >jwtServiceClass</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/LoggerMiddleware.html\" data-type=\"entity-link\" >LoggerMiddleware</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/StaffinfoService.html\" data-type=\"entity-link\" >StaffinfoService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/UserService.html\" data-type=\"entity-link\" >UserService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ValidationPipe.html\" data-type=\"entity-link\" >ValidationPipe</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"', ">\n                            <span class=\"icon ion-ios-lock\"></span>\n                            <span>Guards</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"', ">\n                            <li class=\"link\">\n                                <a href=\"guards/RolesGuards.html\" data-type=\"entity-link\" >RolesGuards</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/SwaggerConfig.html\" data-type=\"entity-link\" >SwaggerConfig</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));