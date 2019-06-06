"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TransitIcon = function (_Component) {
  (0, _inherits3.default)(TransitIcon, _Component);

  function TransitIcon() {
    (0, _classCallCheck3.default)(this, TransitIcon);
    return (0, _possibleConstructorReturn3.default)(this, (TransitIcon.__proto__ || (0, _getPrototypeOf2.default)(TransitIcon)).apply(this, arguments));
  }

  (0, _createClass3.default)(TransitIcon, [{
    key: "render",
    value: function render() {
      // TODO: Find a better general transit icon to use than the bus icon.
      return _react2.default.createElement(
        "svg",
        { version: "1.1", viewBox: "0 0 32 32", height: "100%", width: "100%" },
        _react2.default.createElement(
          "g",
          null,
          _react2.default.createElement(
            "g",
            null,
            _react2.default.createElement(
              "g",
              null,
              _react2.default.createElement("path", { d: "M19.9,14.4c-1.1,0-2,0.7-2.3,1.7c0.3,0,4.3,0,4.6,0C21.9,15.1,21,14.4,19.9,14.4z" }),
              _react2.default.createElement("path", { d: "M26.9,7c-0.2-0.7-0.5-1.4-1.2-1.8c-5.2-2.7-14.4-2.6-19.1,0C6.2,5.5,5.4,6.1,5.1,7c-0.4,1.5-0.6,3-0.6,3.7l0,5.7l0,2.2 v6.1c0,0.2,0.2,0.3,0.4,0.3h22.3c0.2,0,0.3-0.1,0.3-0.3v-5.2l0-8.9C27.5,9.7,27.3,8.1,26.9,7z M11,4.9h9.9V6H11V4.9z M7.9,21.4 c-1,0-1.8-0.8-1.8-1.8c0-0.5,0.2-0.9,0.5-1.3C7,18,7.5,17.8,7.9,17.8c1,0,1.8,0.8,1.8,1.8C9.7,20.6,8.9,21.4,7.9,21.4z M24,21.4 c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8c1,0,1.8,0.8,1.8,1.8C25.8,20.6,25,21.4,24,21.4z M25.2,16.4H6.5C6.2,16.4,6,16,6,15.8 l0.5-7.9c0-0.4,0.3-0.8,0.8-0.8h17.4c0.2,0,0.7,0.5,0.7,1l0.6,7.7C26,16.1,25.6,16.4,25.2,16.4z" })
            ),
            _react2.default.createElement(
              "g",
              null,
              _react2.default.createElement("path", { d: "M6.5,27.6c0,0.8,0.8,1.2,1.6,1.2c0.4,0,0.8-0.1,1-0.3c0.3-0.2,0.4-0.5,0.4-0.9c0,0,0-1.7,0-1.9c-0.2,0-2.8,0-3,0 C6.5,25.9,6.5,27.6,6.5,27.6z" }),
              _react2.default.createElement("path", { d: "M22.3,27.6c0,0.8,0.8,1.1,1.6,1.1c0.8,0,1.6-0.4,1.6-1.1c0,0,0-1.7,0-1.8c-0.2,0-3.1,0-3.2,0 C22.3,25.9,22.3,27.6,22.3,27.6z" })
            )
          )
        )
      );
    }
  }]);
  return TransitIcon;
}(_react.Component);

exports.default = TransitIcon;
module.exports = exports["default"];

//# sourceMappingURL=transit-icon.js