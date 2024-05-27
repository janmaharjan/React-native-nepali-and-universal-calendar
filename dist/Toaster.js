"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Toaster = /*#__PURE__*/function () {
  function Toaster() {
    _classCallCheck(this, Toaster);
  }
  return _createClass(Toaster, [{
    key: "customToast",
    value: function customToast(msg) {
      _reactNative.ToastAndroid.show(msg, _reactNative.ToastAndroid.SHORT);
    }
  }, {
    key: "connectionFailed",
    value: function connectionFailed() {
      alert('Failed to connect.');
    }
  }, {
    key: "serverFailed",
    value: function serverFailed() {
      alert('Failed to connect the server.');
    }
  }, {
    key: "cannotFetch",
    value: function cannotFetch() {
      alert('Failed to Fetch.');
    }
  }, {
    key: "success",
    value: function success() {
      alert('Success.');
    }
  }, {
    key: "invalidUser",
    value: function invalidUser() {
      alert('Invalid User! Username or password is incorrect.');
    }
  }, {
    key: "offline",
    value: function offline() {
      alert('You are offline.');
    }
  }, {
    key: "notSynced",
    value: function notSynced() {
      alert('Still previous user has not synced collected information.');
    }
  }, {
    key: "simpleError",
    value: function simpleError() {
      alert('Error');
    }
  }]);
}();
var toaster = new Toaster();
var _default = exports["default"] = toaster;