/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Api; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(config) {
    _classCallCheck(this, Api);

    this._url = config.url;
    this._headers = config.headers;
  }

  _createClass(Api, [{
    key: "_responseResult",
    value: function _responseResult(res) {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
    }
  }, {
    key: "getInitialCards",
    value: function getInitialCards() {
      var _this = this;

      return fetch("".concat(this._url, "/cards"), {
        method: 'GET',
        headers: this._headers
      }).then(function (res) {
        return _this._responseResult(res);
      });
    }
  }, {
    key: "getUserData",
    value: function getUserData() {
      var _this2 = this;

      return fetch("".concat(this._url, "/users/me"), {
        method: 'GET',
        headers: this._headers
      }).then(function (res) {
        return _this2._responseResult(res);
      });
    }
  }, {
    key: "addNewCard",
    value: function addNewCard(data) {
      var _this3 = this;

      return fetch("".concat(this._url, "/cards"), {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(data)
      }).then(function (res) {
        return _this3._responseResult(res);
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(id) {
      var _this4 = this;

      return fetch("".concat(this._url, "/cards/").concat(id), {
        method: 'DELETE',
        headers: this._headers
      }).then(function (res) {
        return _this4._responseResult(res);
      });
    }
  }, {
    key: "updateUserData",
    value: function updateUserData(data) {
      var _this5 = this;

      return fetch("".concat(this._url, "/users/me"), {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(data)
      }).then(function (res) {
        return _this5._responseResult(res);
      });
    }
  }, {
    key: "addLike",
    value: function addLike(id) {
      var _this6 = this;

      return fetch("".concat(this._url, "/cards/likes/").concat(id), {
        method: 'PUT',
        headers: this._headers
      }).then(function (res) {
        return _this6._responseResult(res);
      });
    }
  }, {
    key: "deleteLike",
    value: function deleteLike(id) {
      var _this7 = this;

      return fetch("".concat(this._url, "/cards/likes/").concat(id), {
        method: 'DELETE',
        headers: this._headers
      }).then(function (res) {
        return _this7._responseResult(res);
      });
    }
  }, {
    key: "updateAvatar",
    value: function updateAvatar(data) {
      var _this8 = this;

      return fetch("".concat(this._url, "/users/me/avatar"), {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify(data)
      }).then(function (res) {
        return _this8._responseResult(res);
      });
    }
  }]);

  return Api;
}();



/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = /*#__PURE__*/function () {
  function Card(cardData, handleCardClick, showConfirmPopupHandle, likeAddHandler, likeRemoveHandler, cardSelector, myId) {
    _classCallCheck(this, Card);

    this._link = cardData.link;
    this._name = cardData.name;
    this._likes = cardData.likes;
    this._id = cardData._id;
    this._ownerId = cardData.owner._id;
    this._handleCardClick = handleCardClick;
    this._showConfirmPopupHandle = showConfirmPopupHandle;
    this._likeAddHandler = likeAddHandler;
    this._likeRemoveHandler = likeRemoveHandler;
    this._cardSelector = cardSelector;
    this._myId = myId;
  }

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardTemplate = document.querySelector(this._cardSelector).content.children[0];
      var cardElement = cardTemplate.cloneNode(true);
      return cardElement;
    }
  }, {
    key: "_showImg",
    value: function _showImg() {
      this._handleCardClick(this._name, this._link);
    }
  }, {
    key: "_showConfirmMessage",
    value: function _showConfirmMessage() {
      this._showConfirmPopupHandle(this);
    }
  }, {
    key: "getCardId",
    value: function getCardId() {
      return this._id;
    }
  }, {
    key: "removeCard",
    value: function removeCard() {
      this._element.remove();
    }
  }, {
    key: "_likeToggle",
    value: function _likeToggle() {
      this._buttonLike.classList.toggle('card__like_active');

      if (this._buttonLike.classList.contains('card__like_active')) {
        this._likeAddHandler(this);
      } else {
        this._likeRemoveHandler(this);
      }
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      var _this = this;

      this._element = this._getTemplate();

      var cardImage = this._element.querySelector('.card__images');

      cardImage.src = this._link;
      cardImage.alt = "\u0424\u043E\u0442\u043E ".concat(this._name);
      this._buttonLike = this._element.querySelector('.card__like');
      this._buttonRemove = this._element.querySelector('.card__trash');

      if (this._ownerId === this._myId) {
        this._buttonRemove.classList.add('card__trash_active');
      }

      if (this._likes.some(function (item) {
        return item._id === _this._myId;
      })) {
        this._buttonLike.classList.add('card__like_active');
      }

      this._element.querySelector('.card__title').textContent = this._name;
      this.countLikes(this._likes);

      this._setEventListeners();

      return this._element;
    }
  }, {
    key: "countLikes",
    value: function countLikes(likes) {
      this._element.querySelector('.card__count').textContent = likes.length;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;

      if (this._ownerId === this._myId) {
        this._buttonRemove.addEventListener('click', function () {
          _this2._showConfirmMessage();
        });
      }

      this._buttonLike.addEventListener('click', function () {
        _this2._likeToggle();
      });

      this._element.querySelector('.card__images').addEventListener('click', function () {
        _this2._showImg();
      });
    }
  }]);

  return Card;
}();



/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormValidator; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(data, formElement) {
    _classCallCheck(this, FormValidator);

    this.formSelector = data.formSelector;
    this.inputSelector = data.inputSelector;
    this.submitButtonSelector = data.submitButtonSelector;
    this.inactiveButtonClass = data.inactiveButtonClass;
    this.inputErrorClass = data.inputErrorClass;
    this.errorClass = data.errorClass;
    this.formElement = formElement;
  }

  _createClass(FormValidator, [{
    key: "_showInputError",
    value: function _showInputError(formElement, inputElement, errorMessage) {
      var errorElement = formElement.querySelector("#".concat(inputElement.id, "-error"));
      inputElement.classList.add(this.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this.errorClass);
    }
  }, {
    key: "_hideInputError",
    value: function _hideInputError(formElement, inputElement) {
      var errorElement = formElement.querySelector("#".concat(inputElement.id, "-error"));
      inputElement.classList.remove(this.inputErrorClass);
      errorElement.classList.remove(this.errorClass);
      errorElement.textContent = '';
    }
  }, {
    key: "_isValid",
    value: function _isValid(formElement, inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(formElement, inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(formElement, inputElement);
      }
    }
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput(inputList) {
      return inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
      });
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
      if (this._hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.disabled = true;
      } else {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.disabled = false;
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners(formElement) {
      var _this = this;

      var inputList = Array.from(formElement.querySelectorAll(this.inputSelector));
      var buttonElement = formElement.querySelector(this.submitButtonSelector);
      inputList.forEach(function (inputElement) {
        inputElement.addEventListener('input', function () {
          _this._isValid(formElement, inputElement);

          _this._toggleButtonState(inputList, buttonElement, _this.inactiveButtonClass);
        });
      });

      this._toggleButtonState(inputList, buttonElement, this.inactiveButtonClass);
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._setEventListeners(this.formElement);
    }
  }]);

  return FormValidator;
}();



/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popup; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);

    this._popup = document.querySelector(popupSelector);
    this._handleClose = this._handleClose.bind(this);
    this._escClose = this._handleEscClose.bind(this);
  }

  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popup.classList.add('popup_opened');

      window.addEventListener('keydown', this._escClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popup.classList.remove('popup_opened');

      window.removeEventListener('keydown', this._escClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      document.addEventListener('click', this._handleClose);
    }
  }, {
    key: "_handleClose",
    value: function _handleClose(evt) {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
        this.close();
      }
    }
  }]);

  return Popup;
}();



/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PopupWithForm; });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(popupSelector, handleSubmitForm) {
    var _this;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._handleSubmitForm = handleSubmitForm;
    _this._form = _this._popup.querySelector('.popup__form');
    _this._inputList = _this._popup.querySelectorAll('.popup__input');
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;

      this._formValues = {};

      this._inputList.forEach(function (input) {
        return _this2._formValues[input.name] = input.value;
      });

      return this._formValues;
    }
  }, {
    key: "renderLoading",
    value: function renderLoading(isLoading) {
      if (isLoading) {
        this._form.querySelector('.popup__button').textContent = 'Сохранение...';
      } else {
        this._form.querySelector('.popup__button').textContent = 'Сохранить';
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);

      this._form.addEventListener('submit', function (evt) {
        evt.preventDefault();

        _this3.renderLoading(true);

        _this3._handleSubmitForm(_this3._getInputValues());
      });
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);

      this._form.reset();
    }
  }]);

  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PopupWithImage; });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage() {
    _classCallCheck(this, PopupWithImage);

    return _super.apply(this, arguments);
  }

  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(name, link) {
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);

      _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["popupImages"].src = link;
      _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["popupImages"].alt = 'Изображение места ' + name;
      _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["popupText"].textContent = name;
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/PopupWithSubmit.js":
/*!*******************************************!*\
  !*** ./src/components/PopupWithSubmit.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PopupWithSubmit; });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithSubmit = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithSubmit, _Popup);

  var _super = _createSuper(PopupWithSubmit);

  function PopupWithSubmit(popupSelector, handleSubmitPopup) {
    var _this;

    _classCallCheck(this, PopupWithSubmit);

    _this = _super.call(this, popupSelector);
    _this._handleSubmitPopup = handleSubmitPopup;
    _this._buttonConfirm = _this._popup.querySelector('.popup__button');
    return _this;
  }

  _createClass(PopupWithSubmit, [{
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(PopupWithSubmit.prototype), "setEventListeners", this).call(this);

      this._buttonConfirm.addEventListener('click', function () {
        _this2._handleSubmitPopup(_this2._card);
      });
    }
  }, {
    key: "open",
    value: function open(card) {
      _get(_getPrototypeOf(PopupWithSubmit.prototype), "open", this).call(this);

      this._card = card;
    }
  }]);

  return PopupWithSubmit;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Section; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var items = _ref.items,
        renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      this._items.forEach(function (item) {
        return _this._renderer(item);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(element) {
      this._container.prepend(element);
    }
  }]);

  return Section;
}();



/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserInfo; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(selectors) {
    _classCallCheck(this, UserInfo);

    this._name = document.querySelector(selectors.name);
    this._about = document.querySelector(selectors.about);
    this._avatar = document.querySelector(selectors.avatar);
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._name.textContent,
        about: this._about.textContent
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(userData) {
      this._name.textContent = userData.name;
      this._about.textContent = userData.about;
      this._avatar.src = userData.avatar;
      this._avatar.alt = "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 ".concat(userData.name);
    }
  }]);

  return UserInfo;
}();



/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithSubmit_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithSubmit.js */ "./src/components/PopupWithSubmit.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");










var myId = 0;
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  name: '.profile__title',
  about: '.profile__subtitle',
  avatar: '.profile__avatar'
});
var cardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
  items: [],
  renderer: function renderer(item) {
    createCard(item);
  }
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["itemContainer"]);

var createCard = function createCard(cardData) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_2__["default"](cardData, handleCardClick, handleConfirmRemove, handleAddLikes, handleRemoveLikes, '#itemTemplate', myId);
  var cardElement = card.generateCard();
  cardList.addItem(cardElement);
}; //добавление и удаление лайков


var handleAddLikes = function handleAddLikes(card) {
  api.addLike(card.getCardId()).then(function (cardData) {
    card.countLikes(cardData.likes);
  }).catch(function (error) {
    return alert(error);
  });
};

var handleRemoveLikes = function handleRemoveLikes(card) {
  api.deleteLike(card.getCardId()).then(function (cardData) {
    card.countLikes(cardData.likes);
  }).catch(function (error) {
    return alert(error);
  });
};

var confirmSubmitHandler = function confirmSubmitHandler(card) {
  api.deleteCard(card.getCardId()).then(function () {
    card.removeCard();
    popupCofirmRemove.close();
  }).catch(function (error) {
    return alert(error);
  });
};

var formEditSubmitHandler = function formEditSubmitHandler(userData) {
  api.updateUserData(userData).then(function (newUserData) {
    userInfo.setUserInfo(newUserData);
    popupEdit.close();
  }).catch(function (error) {
    return alert(error);
  }).finally(function () {
    popupEdit.renderLoading(false);
  });
};

var formAddSubmitHandler = function formAddSubmitHandler(cardData) {
  api.addNewCard(cardData).then(function (newCardData) {
    createCard(newCardData);
    popupAdd.close();
  }).catch(function (error) {
    return alert(error);
  }).finally(function () {
    popupAdd.renderLoading(false);
  });
};

var formAvatarSubmitHandler = function formAvatarSubmitHandler(formData) {
  api.updateAvatar(formData).then(function (res) {
    userInfo.setUserInfo(res);
    popupAvatar.close();
  }).catch(function (error) {
    return alert(error);
  }).finally(function () {
    popupAvatar.renderLoading(false);
  });
};

var popupWithImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__["default"]('.popup__container_image');
var popupEdit = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"]('.popup__container_prof', formEditSubmitHandler);
var popupAdd = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"]('.popup__container_add', formAddSubmitHandler);
var popupCofirmRemove = new _components_PopupWithSubmit_js__WEBPACK_IMPORTED_MODULE_6__["default"]('.popup__container_confirm', confirmSubmitHandler);
var popupAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_4__["default"]('.popup__container_avatar', formAvatarSubmitHandler);
popupWithImage.setEventListeners();
popupEdit.setEventListeners();
popupAdd.setEventListeners();
popupCofirmRemove.setEventListeners();
popupAvatar.setEventListeners(); //открытие попап подтверждения удаления карточки

var handleConfirmRemove = function handleConfirmRemove(card) {
  popupCofirmRemove.open(card);
}; //открытие попапа


var handleCardClick = function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}; // отрисовка карточек


var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
  url: 'https://mesto.nomoreparties.co/v1/cohort-17',
  headers: {
    authorization: '1cc28c27-5ad4-4b72-97ab-db6c8b468da3',
    'content-type': 'application/json'
  }
});
var initialCards = api.getInitialCards();
var initialUserInfo = api.getUserData();
var promises = [initialCards, initialUserInfo];
Promise.all(promises).then(function (arrays) {
  myId = arrays[1]._id;
  userInfo.setUserInfo(arrays[1]);
  arrays[0].forEach(function (card) {
    createCard(card);
  });
}).catch(function (error) {
  return alert(error);
}); // валидация форм

var validatorEditForm = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_8__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["validationSetting"], _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["profileFormEdit"]);
validatorEditForm.enableValidation();
var validatorAddForm = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_8__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["validationSetting"], _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["profileFormAdd"]);
validatorAddForm.enableValidation();
var validatorAvatar = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_8__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["validationSetting"], _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["profileAvatarEdit"]);
validatorAvatar.enableValidation();
_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["profileAddBtn"].addEventListener('click', function () {
  popupAdd.open();
});
_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["profileEditBtn"].addEventListener('click', function () {
  popupEdit.open();
  var currentUserInfo = userInfo.getUserInfo();
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["profileInputName"].value = currentUserInfo.name;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["profileInputProf"].value = currentUserInfo.about;
});
_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__["profileAvatar"].addEventListener('click', function () {
  popupAvatar.open();
});

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/*! exports provided: closeBtn, profileEditBtn, profilePopup, profileInputName, profileInputProf, profileTitle, profileSubtitle, profileAvatar, profileFormEdit, profileFormAdd, profileAvatarEdit, profileAddBtn, itemContainer, cardElement, popupImage, popupImages, popupText, openPopUpSelector, escKeyCode, validationSetting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeBtn", function() { return closeBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileEditBtn", function() { return profileEditBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profilePopup", function() { return profilePopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileInputName", function() { return profileInputName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileInputProf", function() { return profileInputProf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileTitle", function() { return profileTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileSubtitle", function() { return profileSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileAvatar", function() { return profileAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileFormEdit", function() { return profileFormEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileFormAdd", function() { return profileFormAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileAvatarEdit", function() { return profileAvatarEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileAddBtn", function() { return profileAddBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemContainer", function() { return itemContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardElement", function() { return cardElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupImage", function() { return popupImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupImages", function() { return popupImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupText", function() { return popupText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openPopUpSelector", function() { return openPopUpSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escKeyCode", function() { return escKeyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationSetting", function() { return validationSetting; });
var closeBtn = document.querySelectorAll('.popup__close-button');
var profileEditBtn = document.querySelector('.profile__edit-button');
var profilePopup = document.querySelector('.popup__container_prof');
var profileInputName = document.querySelector('.popup__input_type_name');
var profileInputProf = document.querySelector('.popup__input_type_prof');
var profileTitle = document.querySelector('.profile__title');
var profileSubtitle = document.querySelector('.profile__subtitle');
var profileAvatar = document.querySelector('.profile__avatar');
var profileFormEdit = document.querySelector('.popup__form-prof');
var profileFormAdd = document.querySelector('.popup__form_image-add');
var profileAvatarEdit = document.querySelector('.popup__form_avatar');
var profileAddBtn = document.querySelector('.profile__add-button');
var itemContainer = document.querySelector('.cards');
var cardElement = document.querySelector('#popup_add-card');
var popupImage = document.querySelector('.popup__container_image');
var popupImages = document.querySelector('.popup__images');
var popupText = document.querySelector('.popup__text');
var openPopUpSelector = 'popup_opened';
var escKeyCode = 'Escape';
var initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];
var validationSetting = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aFN1Ym1pdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiQXBpIiwiY29uZmlnIiwiX3VybCIsInVybCIsIl9oZWFkZXJzIiwiaGVhZGVycyIsInJlcyIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJzdGF0dXMiLCJmZXRjaCIsIm1ldGhvZCIsInRoZW4iLCJfcmVzcG9uc2VSZXN1bHQiLCJkYXRhIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZCIsIkNhcmQiLCJjYXJkRGF0YSIsImhhbmRsZUNhcmRDbGljayIsInNob3dDb25maXJtUG9wdXBIYW5kbGUiLCJsaWtlQWRkSGFuZGxlciIsImxpa2VSZW1vdmVIYW5kbGVyIiwiY2FyZFNlbGVjdG9yIiwibXlJZCIsIl9saW5rIiwibGluayIsIl9uYW1lIiwibmFtZSIsIl9saWtlcyIsImxpa2VzIiwiX2lkIiwiX293bmVySWQiLCJvd25lciIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfc2hvd0NvbmZpcm1Qb3B1cEhhbmRsZSIsIl9saWtlQWRkSGFuZGxlciIsIl9saWtlUmVtb3ZlSGFuZGxlciIsIl9jYXJkU2VsZWN0b3IiLCJfbXlJZCIsImNhcmRUZW1wbGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjaGlsZHJlbiIsImNhcmRFbGVtZW50IiwiY2xvbmVOb2RlIiwiX2VsZW1lbnQiLCJyZW1vdmUiLCJfYnV0dG9uTGlrZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNvbnRhaW5zIiwiX2dldFRlbXBsYXRlIiwiY2FyZEltYWdlIiwic3JjIiwiYWx0IiwiX2J1dHRvblJlbW92ZSIsImFkZCIsInNvbWUiLCJpdGVtIiwidGV4dENvbnRlbnQiLCJjb3VudExpa2VzIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwibGVuZ3RoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9zaG93Q29uZmlybU1lc3NhZ2UiLCJfbGlrZVRvZ2dsZSIsIl9zaG93SW1nIiwiRm9ybVZhbGlkYXRvciIsImZvcm1FbGVtZW50IiwiZm9ybVNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJpbnB1dEVsZW1lbnQiLCJlcnJvck1lc3NhZ2UiLCJlcnJvckVsZW1lbnQiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX3Nob3dJbnB1dEVycm9yIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJpbnB1dExpc3QiLCJidXR0b25FbGVtZW50IiwiX2hhc0ludmFsaWRJbnB1dCIsImRpc2FibGVkIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJfaXNWYWxpZCIsIl90b2dnbGVCdXR0b25TdGF0ZSIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cCIsIl9oYW5kbGVDbG9zZSIsImJpbmQiLCJfZXNjQ2xvc2UiLCJfaGFuZGxlRXNjQ2xvc2UiLCJ3aW5kb3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZ0Iiwia2V5IiwiY2xvc2UiLCJ0YXJnZXQiLCJQb3B1cFdpdGhGb3JtIiwiaGFuZGxlU3VibWl0Rm9ybSIsIl9oYW5kbGVTdWJtaXRGb3JtIiwiX2Zvcm0iLCJfaW5wdXRMaXN0IiwiX2Zvcm1WYWx1ZXMiLCJpbnB1dCIsInZhbHVlIiwiaXNMb2FkaW5nIiwicHJldmVudERlZmF1bHQiLCJyZW5kZXJMb2FkaW5nIiwiX2dldElucHV0VmFsdWVzIiwicmVzZXQiLCJQb3B1cFdpdGhJbWFnZSIsInBvcHVwSW1hZ2VzIiwicG9wdXBUZXh0IiwiUG9wdXBXaXRoU3VibWl0IiwiaGFuZGxlU3VibWl0UG9wdXAiLCJfaGFuZGxlU3VibWl0UG9wdXAiLCJfYnV0dG9uQ29uZmlybSIsIl9jYXJkIiwiY2FyZCIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfaXRlbXMiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiZWxlbWVudCIsInByZXBlbmQiLCJVc2VySW5mbyIsInNlbGVjdG9ycyIsIl9hYm91dCIsImFib3V0IiwiX2F2YXRhciIsImF2YXRhciIsInVzZXJEYXRhIiwidXNlckluZm8iLCJjYXJkTGlzdCIsImNyZWF0ZUNhcmQiLCJpdGVtQ29udGFpbmVyIiwiaGFuZGxlQ29uZmlybVJlbW92ZSIsImhhbmRsZUFkZExpa2VzIiwiaGFuZGxlUmVtb3ZlTGlrZXMiLCJnZW5lcmF0ZUNhcmQiLCJhZGRJdGVtIiwiYXBpIiwiYWRkTGlrZSIsImdldENhcmRJZCIsImNhdGNoIiwiZXJyb3IiLCJhbGVydCIsImRlbGV0ZUxpa2UiLCJjb25maXJtU3VibWl0SGFuZGxlciIsImRlbGV0ZUNhcmQiLCJyZW1vdmVDYXJkIiwicG9wdXBDb2Zpcm1SZW1vdmUiLCJmb3JtRWRpdFN1Ym1pdEhhbmRsZXIiLCJ1cGRhdGVVc2VyRGF0YSIsIm5ld1VzZXJEYXRhIiwic2V0VXNlckluZm8iLCJwb3B1cEVkaXQiLCJmaW5hbGx5IiwiZm9ybUFkZFN1Ym1pdEhhbmRsZXIiLCJhZGROZXdDYXJkIiwibmV3Q2FyZERhdGEiLCJwb3B1cEFkZCIsImZvcm1BdmF0YXJTdWJtaXRIYW5kbGVyIiwiZm9ybURhdGEiLCJ1cGRhdGVBdmF0YXIiLCJwb3B1cEF2YXRhciIsInBvcHVwV2l0aEltYWdlIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJvcGVuIiwiYXV0aG9yaXphdGlvbiIsImluaXRpYWxDYXJkcyIsImdldEluaXRpYWxDYXJkcyIsImluaXRpYWxVc2VySW5mbyIsImdldFVzZXJEYXRhIiwicHJvbWlzZXMiLCJhbGwiLCJhcnJheXMiLCJ2YWxpZGF0b3JFZGl0Rm9ybSIsInZhbGlkYXRpb25TZXR0aW5nIiwicHJvZmlsZUZvcm1FZGl0IiwiZW5hYmxlVmFsaWRhdGlvbiIsInZhbGlkYXRvckFkZEZvcm0iLCJwcm9maWxlRm9ybUFkZCIsInZhbGlkYXRvckF2YXRhciIsInByb2ZpbGVBdmF0YXJFZGl0IiwicHJvZmlsZUFkZEJ0biIsInByb2ZpbGVFZGl0QnRuIiwiY3VycmVudFVzZXJJbmZvIiwiZ2V0VXNlckluZm8iLCJwcm9maWxlSW5wdXROYW1lIiwicHJvZmlsZUlucHV0UHJvZiIsInByb2ZpbGVBdmF0YXIiLCJjbG9zZUJ0biIsInByb2ZpbGVQb3B1cCIsInByb2ZpbGVUaXRsZSIsInByb2ZpbGVTdWJ0aXRsZSIsInBvcHVwSW1hZ2UiLCJvcGVuUG9wVXBTZWxlY3RvciIsImVzY0tleUNvZGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FB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U0FBUyxHQUFHbEYsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQWxCO0FBQ0EsSUFBTXlLLGlCQUFpQixHQUFHLGNBQTFCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFFBQW5CO0FBRVAsSUFBTTVCLFlBQVksR0FBRyxDQUNuQjtBQUNFNUosTUFBSSxFQUFFLE9BRFI7QUFFRUYsTUFBSSxFQUNGO0FBSEosQ0FEbUIsRUFNbkI7QUFDRUUsTUFBSSxFQUFFLHFCQURSO0FBRUVGLE1BQUksRUFDRjtBQUhKLENBTm1CLEVBV25CO0FBQ0VFLE1BQUksRUFBRSxTQURSO0FBRUVGLE1BQUksRUFDRjtBQUhKLENBWG1CLEVBZ0JuQjtBQUNFRSxNQUFJLEVBQUUsVUFEUjtBQUVFRixNQUFJLEVBQ0Y7QUFISixDQWhCbUIsRUFxQm5CO0FBQ0VFLE1BQUksRUFBRSxvQkFEUjtBQUVFRixNQUFJLEVBQ0Y7QUFISixDQXJCbUIsRUEwQm5CO0FBQ0VFLE1BQUksRUFBRSxRQURSO0FBRUVGLE1BQUksRUFDRjtBQUhKLENBMUJtQixDQUFyQjtBQWlDTyxJQUFNc0ssaUJBQWlCLEdBQUc7QUFDL0J6SCxjQUFZLEVBQUUsY0FEaUI7QUFFL0JDLGVBQWEsRUFBRSxlQUZnQjtBQUcvQkMsc0JBQW9CLEVBQUUsZ0JBSFM7QUFJL0JDLHFCQUFtQixFQUFFLHdCQUpVO0FBSy9CQyxpQkFBZSxFQUFFLHlCQUxjO0FBTS9CQyxZQUFVLEVBQUU7QUFObUIsQ0FBMUIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLl91cmwgPSBjb25maWcudXJsO1xuICAgIHRoaXMuX2hlYWRlcnMgPSBjb25maWcuaGVhZGVycztcbiAgfVxuXG4gIF9yZXNwb25zZVJlc3VsdChyZXMpIHtcbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGDQntGI0LjQsdC60LA6ICR7cmVzLnN0YXR1c31gKTtcbiAgfVxuXG4gIGdldEluaXRpYWxDYXJkcygpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfS9jYXJkc2AsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlUmVzdWx0KHJlcyk7XG4gICAgfSk7XG4gIH1cbiAgZ2V0VXNlckRhdGEoKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX3VybH0vdXNlcnMvbWVgLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVJlc3VsdChyZXMpO1xuICAgIH0pO1xuICB9XG4gIGFkZE5ld0NhcmQoZGF0YSkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9L2NhcmRzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VSZXN1bHQocmVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZUNhcmQoaWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfS9jYXJkcy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlUmVzdWx0KHJlcyk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVVc2VyRGF0YShkYXRhKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX3VybH0vdXNlcnMvbWVgLCB7XG4gICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VSZXN1bHQocmVzKTtcbiAgICB9KTtcbiAgfVxuICBhZGRMaWtlKGlkKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX3VybH0vY2FyZHMvbGlrZXMvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXNwb25zZVJlc3VsdChyZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlTGlrZShpZCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9L2NhcmRzL2xpa2VzLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVzcG9uc2VSZXN1bHQocmVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUF2YXRhcihkYXRhKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX3VybH0vdXNlcnMvbWUvYXZhdGFyYCwge1xuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlUmVzdWx0KHJlcyk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBjYXJkRGF0YSxcbiAgICBoYW5kbGVDYXJkQ2xpY2ssXG4gICAgc2hvd0NvbmZpcm1Qb3B1cEhhbmRsZSxcbiAgICBsaWtlQWRkSGFuZGxlcixcbiAgICBsaWtlUmVtb3ZlSGFuZGxlcixcbiAgICBjYXJkU2VsZWN0b3IsXG4gICAgbXlJZFxuICApIHtcbiAgICB0aGlzLl9saW5rID0gY2FyZERhdGEubGluaztcbiAgICB0aGlzLl9uYW1lID0gY2FyZERhdGEubmFtZTtcbiAgICB0aGlzLl9saWtlcyA9IGNhcmREYXRhLmxpa2VzO1xuICAgIHRoaXMuX2lkID0gY2FyZERhdGEuX2lkO1xuICAgIHRoaXMuX293bmVySWQgPSBjYXJkRGF0YS5vd25lci5faWQ7XG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xuICAgIHRoaXMuX3Nob3dDb25maXJtUG9wdXBIYW5kbGUgPSBzaG93Q29uZmlybVBvcHVwSGFuZGxlO1xuICAgIHRoaXMuX2xpa2VBZGRIYW5kbGVyID0gbGlrZUFkZEhhbmRsZXI7XG4gICAgdGhpcy5fbGlrZVJlbW92ZUhhbmRsZXIgPSBsaWtlUmVtb3ZlSGFuZGxlcjtcbiAgICB0aGlzLl9jYXJkU2VsZWN0b3IgPSBjYXJkU2VsZWN0b3I7XG4gICAgdGhpcy5fbXlJZCA9IG15SWQ7XG4gIH1cblxuICBfZ2V0VGVtcGxhdGUoKSB7XG4gICAgY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkU2VsZWN0b3IpLmNvbnRlbnRcbiAgICAgIC5jaGlsZHJlblswXTtcblxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZFRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XG4gIH1cbiAgX3Nob3dJbWcoKSB7XG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKHRoaXMuX25hbWUsIHRoaXMuX2xpbmspO1xuICB9XG5cbiAgX3Nob3dDb25maXJtTWVzc2FnZSgpIHtcbiAgICB0aGlzLl9zaG93Q29uZmlybVBvcHVwSGFuZGxlKHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2FyZElkKCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIHJlbW92ZUNhcmQoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIF9saWtlVG9nZ2xlKCkge1xuICAgIHRoaXMuX2J1dHRvbkxpa2UuY2xhc3NMaXN0LnRvZ2dsZSgnY2FyZF9fbGlrZV9hY3RpdmUnKTtcblxuICAgIGlmICh0aGlzLl9idXR0b25MaWtlLmNsYXNzTGlzdC5jb250YWlucygnY2FyZF9fbGlrZV9hY3RpdmUnKSkge1xuICAgICAgdGhpcy5fbGlrZUFkZEhhbmRsZXIodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xpa2VSZW1vdmVIYW5kbGVyKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGdlbmVyYXRlQ2FyZCgpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcbiAgICBjb25zdCBjYXJkSW1hZ2UgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pbWFnZXMnKTtcbiAgICBjYXJkSW1hZ2Uuc3JjID0gdGhpcy5fbGluaztcbiAgICBjYXJkSW1hZ2UuYWx0ID0gYNCk0L7RgtC+ICR7dGhpcy5fbmFtZX1gO1xuXG4gICAgdGhpcy5fYnV0dG9uTGlrZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2xpa2UnKTtcbiAgICB0aGlzLl9idXR0b25SZW1vdmUgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX190cmFzaCcpO1xuXG4gICAgaWYgKHRoaXMuX293bmVySWQgPT09IHRoaXMuX215SWQpIHtcbiAgICAgIHRoaXMuX2J1dHRvblJlbW92ZS5jbGFzc0xpc3QuYWRkKCdjYXJkX190cmFzaF9hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLl9saWtlcy5zb21lKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtLl9pZCA9PT0gdGhpcy5fbXlJZDtcbiAgICAgIH0pXG4gICAgKSB7XG4gICAgICB0aGlzLl9idXR0b25MaWtlLmNsYXNzTGlzdC5hZGQoJ2NhcmRfX2xpa2VfYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fdGl0bGUnKS50ZXh0Q29udGVudCA9IHRoaXMuX25hbWU7XG4gICAgdGhpcy5jb3VudExpa2VzKHRoaXMuX2xpa2VzKTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG5cbiAgY291bnRMaWtlcyhsaWtlcykge1xuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX2NvdW50JykudGV4dENvbnRlbnQgPSBsaWtlcy5sZW5ndGg7XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHRoaXMuX293bmVySWQgPT09IHRoaXMuX215SWQpIHtcbiAgICAgIHRoaXMuX2J1dHRvblJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5fc2hvd0NvbmZpcm1NZXNzYWdlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fYnV0dG9uTGlrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuX2xpa2VUb2dnbGUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2VsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9faW1hZ2VzJylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5fc2hvd0ltZygpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvcihkYXRhLCBmb3JtRWxlbWVudCkge1xuICAgIHRoaXMuZm9ybVNlbGVjdG9yID0gZGF0YS5mb3JtU2VsZWN0b3I7XG4gICAgdGhpcy5pbnB1dFNlbGVjdG9yID0gZGF0YS5pbnB1dFNlbGVjdG9yO1xuICAgIHRoaXMuc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBkYXRhLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuaW5hY3RpdmVCdXR0b25DbGFzcyA9IGRhdGEuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLmlucHV0RXJyb3JDbGFzcyA9IGRhdGEuaW5wdXRFcnJvckNsYXNzO1xuICAgIHRoaXMuZXJyb3JDbGFzcyA9IGRhdGEuZXJyb3JDbGFzcztcbiAgICB0aGlzLmZvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XG4gIH1cbiAgX3Nob3dJbnB1dEVycm9yKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSkge1xuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmlucHV0RXJyb3JDbGFzcyk7XG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZXJyb3JDbGFzcyk7XG4gIH1cblxuICBfaGlkZUlucHV0RXJyb3IoZm9ybUVsZW1lbnQsIGlucHV0RWxlbWVudCkge1xuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmlucHV0RXJyb3JDbGFzcyk7XG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5lcnJvckNsYXNzKTtcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgfVxuICBfaXNWYWxpZChmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50KSB7XG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKFxuICAgICAgICBmb3JtRWxlbWVudCxcbiAgICAgICAgaW5wdXRFbGVtZW50LFxuICAgICAgICBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2VcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIF9oYXNJbnZhbGlkSW5wdXQoaW5wdXRMaXN0KSB7XG4gICAgcmV0dXJuIGlucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiAhaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkO1xuICAgIH0pO1xuICB9XG4gIF90b2dnbGVCdXR0b25TdGF0ZShpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQsIGluYWN0aXZlQnV0dG9uQ2xhc3MpIHtcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkpIHtcbiAgICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChpbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICAgIGJ1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoaW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgICBidXR0b25FbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIF9zZXRFdmVudExpc3RlbmVycyhmb3JtRWxlbWVudCkge1xuICAgIGNvbnN0IGlucHV0TGlzdCA9IEFycmF5LmZyb20oXG4gICAgICBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuaW5wdXRTZWxlY3RvcilcbiAgICApO1xuICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuXG4gICAgaW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc1ZhbGlkKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQpO1xuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZShcbiAgICAgICAgICBpbnB1dExpc3QsXG4gICAgICAgICAgYnV0dG9uRWxlbWVudCxcbiAgICAgICAgICB0aGlzLmluYWN0aXZlQnV0dG9uQ2xhc3NcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCwgdGhpcy5pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgfVxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKHRoaXMuZm9ybUVsZW1lbnQpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9wb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faGFuZGxlQ2xvc2UgPSB0aGlzLl9oYW5kbGVDbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2VzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcbiAgfVxuICBvcGVuKCkge1xuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwX29wZW5lZCcpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fZXNjQ2xvc2UpO1xuICB9XG4gIGNsb3NlKCkge1xuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwX29wZW5lZCcpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fZXNjQ2xvc2UpO1xuICB9XG4gIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcbiAgICBpZiAoZXZ0LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH1cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVDbG9zZSk7XG4gIH1cblxuICBfaGFuZGxlQ2xvc2UoZXZ0KSB7XG4gICAgaWYgKFxuICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX29wZW5lZCcpIHx8XG4gICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXBfX2Nsb3NlLWJ1dHRvbicpXG4gICAgKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIGhhbmRsZVN1Ym1pdEZvcm0pIHtcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl9oYW5kbGVTdWJtaXRGb3JtID0gaGFuZGxlU3VibWl0Rm9ybTtcbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtJyk7XG4gICAgdGhpcy5faW5wdXRMaXN0ID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwX19pbnB1dCcpO1xuICB9XG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICB0aGlzLl9mb3JtVmFsdWVzID0ge307XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goXG4gICAgICAoaW5wdXQpID0+ICh0aGlzLl9mb3JtVmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWUpXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5fZm9ybVZhbHVlcztcbiAgfVxuXG4gIHJlbmRlckxvYWRpbmcoaXNMb2FkaW5nKSB7XG4gICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2J1dHRvbicpLnRleHRDb250ZW50ID0gJ9Ch0L7RhdGA0LDQvdC10L3QuNC1Li4uJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2J1dHRvbicpLnRleHRDb250ZW50ID0gJ9Ch0L7RhdGA0LDQvdC40YLRjCc7XG4gICAgfVxuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5yZW5kZXJMb2FkaW5nKHRydWUpO1xuICAgICAgdGhpcy5faGFuZGxlU3VibWl0Rm9ybSh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICB9KTtcbiAgfVxuICBjbG9zZSgpIHtcbiAgICBzdXBlci5jbG9zZSgpO1xuICAgIHRoaXMuX2Zvcm0ucmVzZXQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuanMnO1xuaW1wb3J0IHsgcG9wdXBJbWFnZXMsIHBvcHVwVGV4dCB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuICBvcGVuKG5hbWUsIGxpbmspIHtcbiAgICBzdXBlci5vcGVuKCk7XG5cbiAgICBwb3B1cEltYWdlcy5zcmMgPSBsaW5rO1xuICAgIHBvcHVwSW1hZ2VzLmFsdCA9ICfQmNC30L7QsdGA0LDQttC10L3QuNC1INC80LXRgdGC0LAgJyArIG5hbWU7XG4gICAgcG9wdXBUZXh0LnRleHRDb250ZW50ID0gbmFtZTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhTdWJtaXQgZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIGhhbmRsZVN1Ym1pdFBvcHVwKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faGFuZGxlU3VibWl0UG9wdXAgPSBoYW5kbGVTdWJtaXRQb3B1cDtcbiAgICB0aGlzLl9idXR0b25Db25maXJtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19idXR0b24nKTtcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICB0aGlzLl9idXR0b25Db25maXJtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlU3VibWl0UG9wdXAodGhpcy5fY2FyZCk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuKGNhcmQpIHtcbiAgICBzdXBlci5vcGVuKCk7XG4gICAgdGhpcy5fY2FyZCA9IGNhcmQ7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcih7IGl0ZW1zLCByZW5kZXJlciB9LCBjb250YWluZXJTZWxlY3Rvcikge1xuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLl9jb250YWluZXIgPSBjb250YWluZXJTZWxlY3RvcjtcbiAgfVxuICByZW5kZXJJdGVtcygpIHtcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB0aGlzLl9yZW5kZXJlcihpdGVtKSk7XG4gIH1cbiAgYWRkSXRlbShlbGVtZW50KSB7XG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoZWxlbWVudCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JzKSB7XG4gICAgdGhpcy5fbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLm5hbWUpO1xuICAgIHRoaXMuX2Fib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMuYWJvdXQpO1xuICAgIHRoaXMuX2F2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLmF2YXRhcik7XG4gIH1cblxuICBnZXRVc2VySW5mbygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5fbmFtZS50ZXh0Q29udGVudCxcbiAgICAgIGFib3V0OiB0aGlzLl9hYm91dC50ZXh0Q29udGVudCxcbiAgICB9O1xuICB9XG5cbiAgc2V0VXNlckluZm8odXNlckRhdGEpIHtcbiAgICB0aGlzLl9uYW1lLnRleHRDb250ZW50ID0gdXNlckRhdGEubmFtZTtcbiAgICB0aGlzLl9hYm91dC50ZXh0Q29udGVudCA9IHVzZXJEYXRhLmFib3V0O1xuICAgIHRoaXMuX2F2YXRhci5zcmMgPSB1c2VyRGF0YS5hdmF0YXI7XG4gICAgdGhpcy5fYXZhdGFyLmFsdCA9IGDQmNC30L7QsdGA0LDQttC10L3QuNC1ICR7dXNlckRhdGEubmFtZX1gO1xuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcbmltcG9ydCB7XG4gIHZhbGlkYXRpb25TZXR0aW5nLFxuICBwcm9maWxlQWRkQnRuLFxuICBwcm9maWxlRWRpdEJ0bixcbiAgcHJvZmlsZUlucHV0TmFtZSxcbiAgcHJvZmlsZUlucHV0UHJvZixcbiAgcHJvZmlsZUZvcm1FZGl0LFxuICBwcm9maWxlRm9ybUFkZCxcbiAgcHJvZmlsZUF2YXRhcixcbiAgcHJvZmlsZUF2YXRhckVkaXQsXG4gIGl0ZW1Db250YWluZXIsXG59IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cy5qcyc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQuanMnO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzJztcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyc7XG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyc7XG5pbXBvcnQgUG9wdXBXaXRoU3VibWl0IGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoU3VibWl0LmpzJztcbmltcG9ydCBVc2VySW5mbyBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzJztcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyc7XG5pbXBvcnQgQXBpIGZyb20gJy4uL2NvbXBvbmVudHMvQXBpLmpzJztcblxubGV0IG15SWQgPSAwO1xuXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XG4gIG5hbWU6ICcucHJvZmlsZV9fdGl0bGUnLFxuICBhYm91dDogJy5wcm9maWxlX19zdWJ0aXRsZScsXG4gIGF2YXRhcjogJy5wcm9maWxlX19hdmF0YXInLFxufSk7XG5cbmNvbnN0IGNhcmRMaXN0ID0gbmV3IFNlY3Rpb24oXG4gIHtcbiAgICBpdGVtczogW10sXG4gICAgcmVuZGVyZXI6IChpdGVtKSA9PiB7XG4gICAgICBjcmVhdGVDYXJkKGl0ZW0pO1xuICAgIH0sXG4gIH0sXG4gIGl0ZW1Db250YWluZXJcbik7XG5cbmNvbnN0IGNyZWF0ZUNhcmQgPSBmdW5jdGlvbiAoY2FyZERhdGEpIHtcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKFxuICAgIGNhcmREYXRhLFxuICAgIGhhbmRsZUNhcmRDbGljayxcbiAgICBoYW5kbGVDb25maXJtUmVtb3ZlLFxuICAgIGhhbmRsZUFkZExpa2VzLFxuICAgIGhhbmRsZVJlbW92ZUxpa2VzLFxuICAgICcjaXRlbVRlbXBsYXRlJyxcbiAgICBteUlkXG4gICk7XG4gIGNvbnN0IGNhcmRFbGVtZW50ID0gY2FyZC5nZW5lcmF0ZUNhcmQoKTtcbiAgY2FyZExpc3QuYWRkSXRlbShjYXJkRWxlbWVudCk7XG59O1xuXG4vL9C00L7QsdCw0LLQu9C10L3QuNC1INC4INGD0LTQsNC70LXQvdC40LUg0LvQsNC50LrQvtCyXG5jb25zdCBoYW5kbGVBZGRMaWtlcyA9IGZ1bmN0aW9uIChjYXJkKSB7XG4gIGFwaVxuICAgIC5hZGRMaWtlKGNhcmQuZ2V0Q2FyZElkKCkpXG4gICAgLnRoZW4oKGNhcmREYXRhKSA9PiB7XG4gICAgICBjYXJkLmNvdW50TGlrZXMoY2FyZERhdGEubGlrZXMpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gYWxlcnQoZXJyb3IpKTtcbn07XG5cbmNvbnN0IGhhbmRsZVJlbW92ZUxpa2VzID0gZnVuY3Rpb24gKGNhcmQpIHtcbiAgYXBpXG4gICAgLmRlbGV0ZUxpa2UoY2FyZC5nZXRDYXJkSWQoKSlcbiAgICAudGhlbigoY2FyZERhdGEpID0+IHtcbiAgICAgIGNhcmQuY291bnRMaWtlcyhjYXJkRGF0YS5saWtlcyk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBhbGVydChlcnJvcikpO1xufTtcblxuY29uc3QgY29uZmlybVN1Ym1pdEhhbmRsZXIgPSBmdW5jdGlvbiAoY2FyZCkge1xuICBhcGlcbiAgICAuZGVsZXRlQ2FyZChjYXJkLmdldENhcmRJZCgpKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGNhcmQucmVtb3ZlQ2FyZCgpO1xuICAgICAgcG9wdXBDb2Zpcm1SZW1vdmUuY2xvc2UoKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGFsZXJ0KGVycm9yKSk7XG59O1xuXG5jb25zdCBmb3JtRWRpdFN1Ym1pdEhhbmRsZXIgPSBmdW5jdGlvbiAodXNlckRhdGEpIHtcbiAgYXBpXG4gICAgLnVwZGF0ZVVzZXJEYXRhKHVzZXJEYXRhKVxuICAgIC50aGVuKChuZXdVc2VyRGF0YSkgPT4ge1xuICAgICAgdXNlckluZm8uc2V0VXNlckluZm8obmV3VXNlckRhdGEpO1xuICAgICAgcG9wdXBFZGl0LmNsb3NlKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBhbGVydChlcnJvcikpXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgcG9wdXBFZGl0LnJlbmRlckxvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xufTtcblxuY29uc3QgZm9ybUFkZFN1Ym1pdEhhbmRsZXIgPSBmdW5jdGlvbiAoY2FyZERhdGEpIHtcbiAgYXBpXG4gICAgLmFkZE5ld0NhcmQoY2FyZERhdGEpXG4gICAgLnRoZW4oKG5ld0NhcmREYXRhKSA9PiB7XG4gICAgICBjcmVhdGVDYXJkKG5ld0NhcmREYXRhKTtcbiAgICAgIHBvcHVwQWRkLmNsb3NlKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBhbGVydChlcnJvcikpXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgcG9wdXBBZGQucmVuZGVyTG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBmb3JtQXZhdGFyU3VibWl0SGFuZGxlciA9IGZ1bmN0aW9uIChmb3JtRGF0YSkge1xuICBhcGlcbiAgICAudXBkYXRlQXZhdGFyKGZvcm1EYXRhKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHJlcyk7XG4gICAgICBwb3B1cEF2YXRhci5jbG9zZSgpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gYWxlcnQoZXJyb3IpKVxuICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgIHBvcHVwQXZhdGFyLnJlbmRlckxvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xufTtcblxuY29uc3QgcG9wdXBXaXRoSW1hZ2UgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoJy5wb3B1cF9fY29udGFpbmVyX2ltYWdlJyk7XG5jb25zdCBwb3B1cEVkaXQgPSBuZXcgUG9wdXBXaXRoRm9ybShcbiAgJy5wb3B1cF9fY29udGFpbmVyX3Byb2YnLFxuICBmb3JtRWRpdFN1Ym1pdEhhbmRsZXJcbik7XG5jb25zdCBwb3B1cEFkZCA9IG5ldyBQb3B1cFdpdGhGb3JtKFxuICAnLnBvcHVwX19jb250YWluZXJfYWRkJyxcbiAgZm9ybUFkZFN1Ym1pdEhhbmRsZXJcbik7XG5jb25zdCBwb3B1cENvZmlybVJlbW92ZSA9IG5ldyBQb3B1cFdpdGhTdWJtaXQoXG4gICcucG9wdXBfX2NvbnRhaW5lcl9jb25maXJtJyxcbiAgY29uZmlybVN1Ym1pdEhhbmRsZXJcbik7XG5cbmNvbnN0IHBvcHVwQXZhdGFyID0gbmV3IFBvcHVwV2l0aEZvcm0oXG4gICcucG9wdXBfX2NvbnRhaW5lcl9hdmF0YXInLFxuICBmb3JtQXZhdGFyU3VibWl0SGFuZGxlclxuKTtcblxucG9wdXBXaXRoSW1hZ2Uuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbnBvcHVwRWRpdC5zZXRFdmVudExpc3RlbmVycygpO1xucG9wdXBBZGQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbnBvcHVwQ29maXJtUmVtb3ZlLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5wb3B1cEF2YXRhci5zZXRFdmVudExpc3RlbmVycygpO1xuXG4vL9C+0YLQutGA0YvRgtC40LUg0L/QvtC/0LDQvyDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDRg9C00LDQu9C10L3QuNGPINC60LDRgNGC0L7Rh9C60LhcbmNvbnN0IGhhbmRsZUNvbmZpcm1SZW1vdmUgPSBmdW5jdGlvbiAoY2FyZCkge1xuICBwb3B1cENvZmlybVJlbW92ZS5vcGVuKGNhcmQpO1xufTtcblxuLy/QvtGC0LrRgNGL0YLQuNC1INC/0L7Qv9Cw0L/QsFxuY29uc3QgaGFuZGxlQ2FyZENsaWNrID0gZnVuY3Rpb24gKG5hbWUsIGxpbmspIHtcbiAgcG9wdXBXaXRoSW1hZ2Uub3BlbihuYW1lLCBsaW5rKTtcbn07XG5cbi8vINC+0YLRgNC40YHQvtCy0LrQsCDQutCw0YDRgtC+0YfQtdC6XG5jb25zdCBhcGkgPSBuZXcgQXBpKHtcbiAgdXJsOiAnaHR0cHM6Ly9tZXN0by5ub21vcmVwYXJ0aWVzLmNvL3YxL2NvaG9ydC0xNycsXG4gIGhlYWRlcnM6IHtcbiAgICBhdXRob3JpemF0aW9uOiAnMWNjMjhjMjctNWFkNC00YjcyLTk3YWItZGI2YzhiNDY4ZGEzJyxcbiAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICB9LFxufSk7XG5cbmNvbnN0IGluaXRpYWxDYXJkcyA9IGFwaS5nZXRJbml0aWFsQ2FyZHMoKTtcbmNvbnN0IGluaXRpYWxVc2VySW5mbyA9IGFwaS5nZXRVc2VyRGF0YSgpO1xuY29uc3QgcHJvbWlzZXMgPSBbaW5pdGlhbENhcmRzLCBpbml0aWFsVXNlckluZm9dO1xuXG5Qcm9taXNlLmFsbChwcm9taXNlcylcbiAgLnRoZW4oKGFycmF5cykgPT4ge1xuICAgIG15SWQgPSBhcnJheXNbMV0uX2lkO1xuICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKGFycmF5c1sxXSk7XG4gICAgYXJyYXlzWzBdLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgIGNyZWF0ZUNhcmQoY2FyZCk7XG4gICAgfSk7XG4gIH0pXG4gIC5jYXRjaCgoZXJyb3IpID0+IGFsZXJ0KGVycm9yKSk7XG5cbi8vINCy0LDQu9C40LTQsNGG0LjRjyDRhNC+0YDQvFxuY29uc3QgdmFsaWRhdG9yRWRpdEZvcm0gPSBuZXcgRm9ybVZhbGlkYXRvcih2YWxpZGF0aW9uU2V0dGluZywgcHJvZmlsZUZvcm1FZGl0KTtcbnZhbGlkYXRvckVkaXRGb3JtLmVuYWJsZVZhbGlkYXRpb24oKTtcblxuY29uc3QgdmFsaWRhdG9yQWRkRm9ybSA9IG5ldyBGb3JtVmFsaWRhdG9yKHZhbGlkYXRpb25TZXR0aW5nLCBwcm9maWxlRm9ybUFkZCk7XG52YWxpZGF0b3JBZGRGb3JtLmVuYWJsZVZhbGlkYXRpb24oKTtcblxuY29uc3QgdmFsaWRhdG9yQXZhdGFyID0gbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRhdGlvblNldHRpbmcsIHByb2ZpbGVBdmF0YXJFZGl0KTtcbnZhbGlkYXRvckF2YXRhci5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbnByb2ZpbGVBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHBvcHVwQWRkLm9wZW4oKTtcbn0pO1xuXG5wcm9maWxlRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgcG9wdXBFZGl0Lm9wZW4oKTtcbiAgY29uc3QgY3VycmVudFVzZXJJbmZvID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcbiAgcHJvZmlsZUlucHV0TmFtZS52YWx1ZSA9IGN1cnJlbnRVc2VySW5mby5uYW1lO1xuICBwcm9maWxlSW5wdXRQcm9mLnZhbHVlID0gY3VycmVudFVzZXJJbmZvLmFib3V0O1xufSk7XG5cbnByb2ZpbGVBdmF0YXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHBvcHVwQXZhdGFyLm9wZW4oKTtcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwX19jbG9zZS1idXR0b24nKTtcbmV4cG9ydCBjb25zdCBwcm9maWxlRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19lZGl0LWJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY29udGFpbmVyX3Byb2YnKTtcbmV4cG9ydCBjb25zdCBwcm9maWxlSW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJy5wb3B1cF9faW5wdXRfdHlwZV9uYW1lJ1xuKTtcbmV4cG9ydCBjb25zdCBwcm9maWxlSW5wdXRQcm9mID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJy5wb3B1cF9faW5wdXRfdHlwZV9wcm9mJ1xuKTtcbmV4cG9ydCBjb25zdCBwcm9maWxlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fdGl0bGUnKTtcbmV4cG9ydCBjb25zdCBwcm9maWxlU3VidGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsZV9fc3VidGl0bGUnKTtcbmV4cG9ydCBjb25zdCBwcm9maWxlQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2F2YXRhcicpO1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVGb3JtRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybS1wcm9mJyk7XG5leHBvcnQgY29uc3QgcHJvZmlsZUZvcm1BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm1faW1hZ2UtYWRkJyk7XG5leHBvcnQgY29uc3QgcHJvZmlsZUF2YXRhckVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm1fYXZhdGFyJyk7XG5leHBvcnQgY29uc3QgcHJvZmlsZUFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hZGQtYnV0dG9uJyk7XG5leHBvcnQgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcycpO1xuZXhwb3J0IGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVwX2FkZC1jYXJkJyk7XG5leHBvcnQgY29uc3QgcG9wdXBJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY29udGFpbmVyX2ltYWdlJyk7XG5leHBvcnQgY29uc3QgcG9wdXBJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2ltYWdlcycpO1xuZXhwb3J0IGNvbnN0IHBvcHVwVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fdGV4dCcpO1xuZXhwb3J0IGNvbnN0IG9wZW5Qb3BVcFNlbGVjdG9yID0gJ3BvcHVwX29wZW5lZCc7XG5leHBvcnQgY29uc3QgZXNjS2V5Q29kZSA9ICdFc2NhcGUnO1xuXG5jb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICBuYW1lOiAn0JDRgNGF0YvQtycsXG4gICAgbGluazpcbiAgICAgICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvYXJraHl6LmpwZycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAn0KfQtdC70Y/QsdC40L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjCcsXG4gICAgbGluazpcbiAgICAgICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQvY2hlbHlhYmluc2stb2JsYXN0LmpwZycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAn0JjQstCw0L3QvtCy0L4nLFxuICAgIGxpbms6XG4gICAgICAnaHR0cHM6Ly9waWN0dXJlcy5zMy55YW5kZXgubmV0L2Zyb250ZW5kLWRldmVsb3Blci9jYXJkcy1jb21wcmVzc2VkL2l2YW5vdm8uanBnJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICfQmtCw0LzRh9Cw0YLQutCwJyxcbiAgICBsaW5rOlxuICAgICAgJ2h0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9rYW1jaGF0a2EuanBnJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICfQpdC+0LvQvNC+0LPQvtGA0YHQutC40Lkg0YDQsNC50L7QvScsXG4gICAgbGluazpcbiAgICAgICdodHRwczovL3BpY3R1cmVzLnMzLnlhbmRleC5uZXQvZnJvbnRlbmQtZGV2ZWxvcGVyL2NhcmRzLWNvbXByZXNzZWQva2hvbG1vZ29yc2t5LXJheW9uLmpwZycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAn0JHQsNC50LrQsNC7JyxcbiAgICBsaW5rOlxuICAgICAgJ2h0dHBzOi8vcGljdHVyZXMuczMueWFuZGV4Lm5ldC9mcm9udGVuZC1kZXZlbG9wZXIvY2FyZHMtY29tcHJlc3NlZC9iYWlrYWwuanBnJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uU2V0dGluZyA9IHtcbiAgZm9ybVNlbGVjdG9yOiAnLnBvcHVwX19mb3JtJyxcbiAgaW5wdXRTZWxlY3RvcjogJy5wb3B1cF9faW5wdXQnLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogJy5wb3B1cF9fYnV0dG9uJyxcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogJ3BvcHVwX19idXR0b25fZGlzYWJsZWQnLFxuICBpbnB1dEVycm9yQ2xhc3M6ICdwb3B1cF9faW5wdXRfdHlwZV9lcnJvcicsXG4gIGVycm9yQ2xhc3M6ICdwb3B1cF9faW5wdXQtZXJyb3JfYWN0aXZlJyxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9