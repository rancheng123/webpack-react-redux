webpackJsonp([5,7],{

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductList = function (_Component) {
    _inherits(ProductList, _Component);

    function ProductList() {
        _classCallCheck(this, ProductList);

        return _possibleConstructorReturn(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).call(this));
    }

    _createClass(ProductList, [{
        key: 'productAdd',
        value: function productAdd() {
            window.location.hash = 'productAdd';
        }
    }, {
        key: 'productDetail',
        value: function productDetail() {
            window.location.hash = 'productDetail';
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('input', { type: 'button', value: '\u6DFB\u52A0', onClick: this.productAdd })
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'span',
                            null,
                            'Car 100$'
                        ),
                        _react2.default.createElement('input', { type: 'button', value: '\u67E5\u770B\u8BE6\u60C5', onClick: this.productDetail })
                    )
                )
            );
        }
    }]);

    return ProductList;
}(_react.Component);

;

exports.default = ProductList;

/***/ })

});
//# sourceMappingURL=product_list.20cac.chunk.js.map