webpackJsonp([2,8],{

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _isomorphicFetch = __webpack_require__(246);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _reactSelfPopagation = __webpack_require__(284);

var _reactSelfPopagation2 = _interopRequireDefault(_reactSelfPopagation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(250);

var TestSearch = function (_Component) {
    _inherits(TestSearch, _Component);

    function TestSearch() {
        _classCallCheck(this, TestSearch);

        return _possibleConstructorReturn(this, (TestSearch.__proto__ || Object.getPrototypeOf(TestSearch)).call(this));
    }

    _createClass(TestSearch, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // 存储 start
            componentStore.setById('TestSearch', this);
            // 存储 end
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {

            // 存储 start
            componentStore.clearById('TestSearch');
            // 存储 end
        }
    }, {
        key: 'searchFn',
        value: function searchFn() {
            var that = this;

            //'api/test/search'

            //代理？？？
            //fetch多个请求


            var req = new Request('http://localhost:3000/api/test/search', {
                method: 'post',
                //不缓存响应的结果
                cache: 'reload',
                body: {
                    a: 1, b: 2
                }
            });

            (0, _isomorphicFetch2.default)(req).then(function (response) {
                return response.json();
            }).then(function (data) {
                debugger;
                if (data.status == 200) {

                    alert('ok');
                }
            });

            var requestData = {
                number: this.refs.number.value,
                name: this.refs.name.value,
                pageNum: componentStore.getById('test_popagation1').state.currentPageNum
            };

            var responseData = [{
                name: 'new-item1'
            }, {
                name: 'new-item2'
            }, {
                name: 'new-item3'
            }];

            var testListComp = componentStore.getById('TestList');
            testListComp.state.data = responseData;
            testListComp.setState(testListComp.state);
        }
    }, {
        key: 'render',
        value: function render() {
            var self = this;

            return _react2.default.createElement(
                'div',
                { className: 'testSearch' },
                '\u6570\u91CF\uFF1A',
                _react2.default.createElement('input', { type: 'text', ref: 'number' }),
                '\u540D\u79F0\uFF1A',
                _react2.default.createElement('input', { type: 'text', ref: 'name' }),
                _react2.default.createElement('input', { type: 'button', value: '\u67E5\u8BE2', onClick: this.searchFn.bind(self) })
            );
        }
    }]);

    return TestSearch;
}(_react.Component);

;

var TestList = function (_Component2) {
    _inherits(TestList, _Component2);

    function TestList() {
        _classCallCheck(this, TestList);

        //设置初始状态，防止this.state为null报错
        var _this2 = _possibleConstructorReturn(this, (TestList.__proto__ || Object.getPrototypeOf(TestList)).call(this));

        _this2.state = {
            data: []
        };
        return _this2;
    }

    _createClass(TestList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            componentStore.setById('TestList', this);

            this.state.data = [{
                name: 'old-item1'
            }, {
                name: 'old-item2'
            }, {
                name: 'old-item3'
            }];
            this.setState(this.state);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {

            // 存储 start
            componentStore.clearById('TestList');
            // 存储 end
        }
    }, {
        key: 'render',
        value: function render() {

            var self = this;
            var lis = self.state.data.map(function (ele, i) {
                return _react2.default.createElement(
                    'li',
                    { key: i },
                    ele.name
                );
            });

            return _react2.default.createElement(
                'ul',
                null,
                lis
            );
        }
    }]);

    return TestList;
}(_react.Component);

;

var testWrap = function (_Component3) {
    _inherits(testWrap, _Component3);

    function testWrap() {
        _classCallCheck(this, testWrap);

        return _possibleConstructorReturn(this, (testWrap.__proto__ || Object.getPrototypeOf(testWrap)).call(this));
    }

    _createClass(testWrap, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            componentStore.setById('testWrap', this);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            componentStore.clearById('testWrap');
        }
    }, {
        key: 'render',
        value: function render() {

            var popagationCallback = function popagationCallback(num) {

                var requestData = {
                    number: componentStore.getById('TestSearch').refs.number.value,
                    name: componentStore.getById('TestSearch').refs.name.value,
                    pageNum: num
                };

                var responseData = [{
                    name: 'old-item1'
                }, {
                    name: 'old-item2'
                }, {
                    name: 'old-item3'
                }];

                var testListComp = componentStore.getById('TestList');
                testListComp.state.data = responseData;
                testListComp.setState(testListComp.state);
            };

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(TestSearch, null),
                _react2.default.createElement(TestList, null),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_reactSelfPopagation2.default, { callback: popagationCallback, $id: 'test_popagation1' })
                )
            );
        }
    }]);

    return testWrap;
}(_react.Component);

;

exports.default = testWrap;

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)

    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(245);
module.exports = self.fetch.bind(self);


/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(256);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(113)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../../node_modules/.0.26.2@css-loader/index.js?sourceMap!../../../../../../../node_modules/.6.0.2@sass-loader/lib/loader.js?sourceMap!../../../../../../../node_modules/.3.2.0@autoprefixer-loader/index.js?browsers=last 2 version!./reactSelf-popagation.scss", function() {
			var newContent = require("!!../../../../../../../node_modules/.0.26.2@css-loader/index.js?sourceMap!../../../../../../../node_modules/.6.0.2@sass-loader/lib/loader.js?sourceMap!../../../../../../../node_modules/.3.2.0@autoprefixer-loader/index.js?browsers=last 2 version!./reactSelf-popagation.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(257);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(113)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/.0.26.2@css-loader/index.js?sourceMap!../../../../../../node_modules/.6.0.2@sass-loader/lib/loader.js?sourceMap!../../../../../../node_modules/.3.2.0@autoprefixer-loader/index.js?browsers=last 2 version!./test.scss", function() {
			var newContent = require("!!../../../../../../node_modules/.0.26.2@css-loader/index.js?sourceMap!../../../../../../node_modules/.6.0.2@sass-loader/lib/loader.js?sourceMap!../../../../../../node_modules/.3.2.0@autoprefixer-loader/index.js?browsers=last 2 version!./test.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(114)();
// imports


// module
exports.push([module.i, ".reactSelf-popagation {\n  background: red; }\n  .reactSelf-popagation > span {\n    padding: 0px 6px;\n    height: 20px;\n    border: 1px solid green;\n    text-align: center;\n    line-height: 20px; }\n  .reactSelf-popagation > span.current {\n    background: yellow; }\n", "", {"version":3,"sources":["/../frontEnd/src/js/module/login/test/reactSelf-popagation/F:/root/webpack-react-redux/frontEnd/src/js/module/login/test/reactSelf-popagation/reactSelf-popagation.scss"],"names":[],"mappings":"AAAA;EACC,gBAAc,EAWd;EAZD;IAGE,iBAAe;IACf,aAAW;IACX,wBAAsB;IACtB,mBAAiB;IACjB,kBAAgB,EAChB;EARF;IAUE,mBAAiB,EACjB","file":"reactSelf-popagation.scss","sourcesContent":[".reactSelf-popagation{\r\n\tbackground:red;\r\n\t>span{\r\n\t\tpadding:0px 6px;\r\n\t\theight:20px;\r\n\t\tborder:1px solid green;\r\n\t\ttext-align:center;\r\n\t\tline-height:20px;\r\n\t}\r\n\t>span.current{\r\n\t\tbackground:yellow;\r\n\t}\r\n}"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(114)();
// imports


// module
exports.push([module.i, ".testSearch {\n  background: gray; }\n\n.css3Test {\n  transform: scale(2, 2); }\n", "", {"version":3,"sources":["/../frontEnd/src/js/module/login/test/F:/root/webpack-react-redux/frontEnd/src/js/module/login/test/test.scss"],"names":[],"mappings":"AAAA;EACC,iBAAgB,EAChB;;AAED;EACC,uBAAqB,EACrB","file":"test.scss","sourcesContent":[".testSearch{\r\n\tbackground: gray;\r\n}\r\n\r\n.css3Test{\r\n\ttransform: scale(2,2);\r\n}"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(247);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(249);

var Propagation = function (_Component) {
  _inherits(Propagation, _Component);

  function Propagation() {
    _classCallCheck(this, Propagation);

    //设置初始状态，防止this.state为null报错
    var _this = _possibleConstructorReturn(this, (Propagation.__proto__ || Object.getPrototypeOf(Propagation)).call(this));

    _this.state = {
      totalDataCount: 100,
      pageSize: 10,
      currentPageNum: 1
    };
    return _this;
  }

  _createClass(Propagation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // 存储 start
      componentStore.modules[this.props.$id] = this;
      // 存储 end
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      // 存储 start
      componentStore.modules[this.props.$id] = null;
      delete componentStore.modules[this.props.$id];
      // 存储 end
    }
  }, {
    key: 'clickFn',
    value: function clickFn(ev) {
      this.state.currentPageNum = ev.target.innerHTML;
      this.switchPage();
    }
  }, {
    key: 'preClick',
    value: function preClick() {
      this.state.currentPageNum--;
      if (this.state.currentPageNum <= 1) {
        this.state.currentPageNum = 1;
      }
      this.switchPage();
    }
  }, {
    key: 'nextClick',
    value: function nextClick() {
      this.state.currentPageNum++;
      if (this.state.currentPageNum >= this.state.totalPageCount) {
        this.state.currentPageNum = this.state.totalPageCount;
      }
      this.switchPage();
    }
  }, {
    key: 'switchPage',
    value: function switchPage() {
      this.setState(this.state);
      this.props.callback && this.props.callback(this.state.currentPageNum);
    }
  }, {
    key: 'render',
    value: function render() {

      var self = this;

      //总页数 = 总条数/每页条数
      self.state.totalPageCount = Math.ceil(self.state.totalDataCount / self.state.pageSize);

      //此处循环有没有好办法？？？？？？？？？
      var tmlpArr = [];
      for (var i = 0; i < self.state.totalPageCount; i++) {
        tmlpArr.push(i);
      };

      var lis = tmlpArr.map(function (ele, i) {
        var pageNum = i + 1;
        return _react2.default.createElement(
          'span',
          { key: i, onClick: self.clickFn.bind(self),
            className: (0, _classnames2.default)({
              "current": pageNum == self.state.currentPageNum
            })
          },
          pageNum
        );
      });

      return _react2.default.createElement(
        'span',
        { className: 'reactSelf-popagation' },
        _react2.default.createElement(
          'span',
          { onClick: this.preClick.bind(self) },
          '\u4E0A\u4E00\u9875'
        ),
        lis,
        _react2.default.createElement(
          'span',
          { onClick: this.nextClick.bind(self) },
          '\u4E0B\u4E00\u9875'
        )
      );
    }
  }]);

  return Propagation;
}(_react.Component);

;

exports.default = Propagation;

/***/ })

});
//# sourceMappingURL=test.cdfa5.chunk.js.map