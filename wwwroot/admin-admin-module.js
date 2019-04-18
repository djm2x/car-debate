(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/@aspnet/signalr/dist/esm/AbortController.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/AbortController.js ***!
  \******************************************************************/
/*! exports provided: AbortController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbortController", function() { return AbortController; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Rough polyfill of https://developer.mozilla.org/en-US/docs/Web/API/AbortController
// We don't actually ever use the API being polyfilled, we always use the polyfill because
// it's a very new API right now.
// Not exported from index.
/** @private */
var AbortController = /** @class */ (function () {
    function AbortController() {
        this.isAborted = false;
        this.onabort = null;
    }
    AbortController.prototype.abort = function () {
        if (!this.isAborted) {
            this.isAborted = true;
            if (this.onabort) {
                this.onabort();
            }
        }
    };
    Object.defineProperty(AbortController.prototype, "signal", {
        get: function () {
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbortController.prototype, "aborted", {
        get: function () {
            return this.isAborted;
        },
        enumerable: true,
        configurable: true
    });
    return AbortController;
}());

//# sourceMappingURL=AbortController.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/DefaultHttpClient.js":
/*!********************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/DefaultHttpClient.js ***!
  \********************************************************************/
/*! exports provided: DefaultHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultHttpClient", function() { return DefaultHttpClient; });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "./node_modules/@aspnet/signalr/dist/esm/Errors.js");
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpClient */ "./node_modules/@aspnet/signalr/dist/esm/HttpClient.js");
/* harmony import */ var _NodeHttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NodeHttpClient */ "./node_modules/@aspnet/signalr/dist/esm/NodeHttpClient.js");
/* harmony import */ var _XhrHttpClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./XhrHttpClient */ "./node_modules/@aspnet/signalr/dist/esm/XhrHttpClient.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/** Default implementation of {@link @aspnet/signalr.HttpClient}. */
var DefaultHttpClient = /** @class */ (function (_super) {
    __extends(DefaultHttpClient, _super);
    /** Creates a new instance of the {@link @aspnet/signalr.DefaultHttpClient}, using the provided {@link @aspnet/signalr.ILogger} to log messages. */
    function DefaultHttpClient(logger) {
        var _this = _super.call(this) || this;
        if (typeof XMLHttpRequest !== "undefined") {
            _this.httpClient = new _XhrHttpClient__WEBPACK_IMPORTED_MODULE_3__["XhrHttpClient"](logger);
        }
        else {
            _this.httpClient = new _NodeHttpClient__WEBPACK_IMPORTED_MODULE_2__["NodeHttpClient"](logger);
        }
        return _this;
    }
    /** @inheritDoc */
    DefaultHttpClient.prototype.send = function (request) {
        // Check that abort was not signaled before calling send
        if (request.abortSignal && request.abortSignal.aborted) {
            return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]());
        }
        if (!request.method) {
            return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
            return Promise.reject(new Error("No url defined."));
        }
        return this.httpClient.send(request);
    };
    DefaultHttpClient.prototype.getCookieString = function (url) {
        return this.httpClient.getCookieString(url);
    };
    return DefaultHttpClient;
}(_HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));

//# sourceMappingURL=DefaultHttpClient.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/Errors.js":
/*!*********************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/Errors.js ***!
  \*********************************************************/
/*! exports provided: HttpError, TimeoutError, AbortError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return HttpError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return TimeoutError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbortError", function() { return AbortError; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Error thrown when an HTTP request fails. */
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    /** Constructs a new instance of {@link @aspnet/signalr.HttpError}.
     *
     * @param {string} errorMessage A descriptive error message.
     * @param {number} statusCode The HTTP status code represented by this error.
     */
    function HttpError(errorMessage, statusCode) {
        var _newTarget = this.constructor;
        var _this = this;
        var trueProto = _newTarget.prototype;
        _this = _super.call(this, errorMessage) || this;
        _this.statusCode = statusCode;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        _this.__proto__ = trueProto;
        return _this;
    }
    return HttpError;
}(Error));

/** Error thrown when a timeout elapses. */
var TimeoutError = /** @class */ (function (_super) {
    __extends(TimeoutError, _super);
    /** Constructs a new instance of {@link @aspnet/signalr.TimeoutError}.
     *
     * @param {string} errorMessage A descriptive error message.
     */
    function TimeoutError(errorMessage) {
        var _newTarget = this.constructor;
        if (errorMessage === void 0) { errorMessage = "A timeout occurred."; }
        var _this = this;
        var trueProto = _newTarget.prototype;
        _this = _super.call(this, errorMessage) || this;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        _this.__proto__ = trueProto;
        return _this;
    }
    return TimeoutError;
}(Error));

/** Error thrown when an action is aborted. */
var AbortError = /** @class */ (function (_super) {
    __extends(AbortError, _super);
    /** Constructs a new instance of {@link AbortError}.
     *
     * @param {string} errorMessage A descriptive error message.
     */
    function AbortError(errorMessage) {
        var _newTarget = this.constructor;
        if (errorMessage === void 0) { errorMessage = "An abort occurred."; }
        var _this = this;
        var trueProto = _newTarget.prototype;
        _this = _super.call(this, errorMessage) || this;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        _this.__proto__ = trueProto;
        return _this;
    }
    return AbortError;
}(Error));

//# sourceMappingURL=Errors.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/HandshakeProtocol.js":
/*!********************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/HandshakeProtocol.js ***!
  \********************************************************************/
/*! exports provided: HandshakeProtocol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandshakeProtocol", function() { return HandshakeProtocol; });
/* harmony import */ var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextMessageFormat */ "./node_modules/@aspnet/signalr/dist/esm/TextMessageFormat.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./node_modules/@aspnet/signalr/dist/esm/Utils.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.


/** @private */
var HandshakeProtocol = /** @class */ (function () {
    function HandshakeProtocol() {
    }
    // Handshake request is always JSON
    HandshakeProtocol.prototype.writeHandshakeRequest = function (handshakeRequest) {
        return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].write(JSON.stringify(handshakeRequest));
    };
    HandshakeProtocol.prototype.parseHandshakeResponse = function (data) {
        var responseMessage;
        var messageData;
        var remainingData;
        if (Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["isArrayBuffer"])(data) || (typeof Buffer !== "undefined" && data instanceof Buffer)) {
            // Format is binary but still need to read JSON text from handshake response
            var binaryData = new Uint8Array(data);
            var separatorIndex = binaryData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].RecordSeparatorCode);
            if (separatorIndex === -1) {
                throw new Error("Message is incomplete.");
            }
            // content before separator is handshake response
            // optional content after is additional messages
            var responseLength = separatorIndex + 1;
            messageData = String.fromCharCode.apply(null, binaryData.slice(0, responseLength));
            remainingData = (binaryData.byteLength > responseLength) ? binaryData.slice(responseLength).buffer : null;
        }
        else {
            var textData = data;
            var separatorIndex = textData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].RecordSeparator);
            if (separatorIndex === -1) {
                throw new Error("Message is incomplete.");
            }
            // content before separator is handshake response
            // optional content after is additional messages
            var responseLength = separatorIndex + 1;
            messageData = textData.substring(0, responseLength);
            remainingData = (textData.length > responseLength) ? textData.substring(responseLength) : null;
        }
        // At this point we should have just the single handshake message
        var messages = _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__["TextMessageFormat"].parse(messageData);
        var response = JSON.parse(messages[0]);
        if (response.type) {
            throw new Error("Expected a handshake response from the server.");
        }
        responseMessage = response;
        // multiple messages could have arrived with handshake
        // return additional data to be parsed as usual, or null if all parsed
        return [remainingData, responseMessage];
    };
    return HandshakeProtocol;
}());

//# sourceMappingURL=HandshakeProtocol.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/HttpClient.js":
/*!*************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/HttpClient.js ***!
  \*************************************************************/
/*! exports provided: HttpResponse, HttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/** Represents an HTTP response. */
var HttpResponse = /** @class */ (function () {
    function HttpResponse(statusCode, statusText, content) {
        this.statusCode = statusCode;
        this.statusText = statusText;
        this.content = content;
    }
    return HttpResponse;
}());

/** Abstraction over an HTTP client.
 *
 * This class provides an abstraction over an HTTP client so that a different implementation can be provided on different platforms.
 */
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.get = function (url, options) {
        return this.send(__assign({}, options, { method: "GET", url: url }));
    };
    HttpClient.prototype.post = function (url, options) {
        return this.send(__assign({}, options, { method: "POST", url: url }));
    };
    HttpClient.prototype.delete = function (url, options) {
        return this.send(__assign({}, options, { method: "DELETE", url: url }));
    };
    /** Gets all cookies that apply to the specified URL.
     *
     * @param url The URL that the cookies are valid for.
     * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
     */
    // @ts-ignore
    HttpClient.prototype.getCookieString = function (url) {
        return "";
    };
    return HttpClient;
}());

//# sourceMappingURL=HttpClient.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/HttpConnection.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/HttpConnection.js ***!
  \*****************************************************************/
/*! exports provided: HttpConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpConnection", function() { return HttpConnection; });
/* harmony import */ var _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultHttpClient */ "./node_modules/@aspnet/signalr/dist/esm/DefaultHttpClient.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ITransport */ "./node_modules/@aspnet/signalr/dist/esm/ITransport.js");
/* harmony import */ var _LongPollingTransport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LongPollingTransport */ "./node_modules/@aspnet/signalr/dist/esm/LongPollingTransport.js");
/* harmony import */ var _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ServerSentEventsTransport */ "./node_modules/@aspnet/signalr/dist/esm/ServerSentEventsTransport.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Utils */ "./node_modules/@aspnet/signalr/dist/esm/Utils.js");
/* harmony import */ var _WebSocketTransport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WebSocketTransport */ "./node_modules/@aspnet/signalr/dist/esm/WebSocketTransport.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var MAX_REDIRECTS = 100;
var WebSocketModule = null;
var EventSourceModule = null;
if (typeof window === "undefined" && "function" !== "undefined") {
    // In order to ignore the dynamic require in webpack builds we need to do this magic
    // @ts-ignore: TS doesn't know about these names
    var requireFunc =  true ? require : undefined;
    WebSocketModule = requireFunc("ws");
    EventSourceModule = requireFunc("eventsource");
}
/** @private */
var HttpConnection = /** @class */ (function () {
    function HttpConnection(url, options) {
        if (options === void 0) { options = {}; }
        this.features = {};
        _Utils__WEBPACK_IMPORTED_MODULE_5__["Arg"].isRequired(url, "url");
        this.logger = Object(_Utils__WEBPACK_IMPORTED_MODULE_5__["createLogger"])(options.logger);
        this.baseUrl = this.resolveUrl(url);
        options = options || {};
        options.logMessageContent = options.logMessageContent || false;
        var isNode = typeof window === "undefined";
        if (!isNode && typeof WebSocket !== "undefined" && !options.WebSocket) {
            options.WebSocket = WebSocket;
        }
        else if (isNode && !options.WebSocket) {
            if (WebSocketModule) {
                options.WebSocket = WebSocketModule;
            }
        }
        if (!isNode && typeof EventSource !== "undefined" && !options.EventSource) {
            options.EventSource = EventSource;
        }
        else if (isNode && !options.EventSource) {
            if (typeof EventSourceModule !== "undefined") {
                options.EventSource = EventSourceModule;
            }
        }
        this.httpClient = options.httpClient || new _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_0__["DefaultHttpClient"](this.logger);
        this.connectionState = 2 /* Disconnected */;
        this.options = options;
        this.onreceive = null;
        this.onclose = null;
    }
    HttpConnection.prototype.start = function (transferFormat) {
        transferFormat = transferFormat || _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"].Binary;
        _Utils__WEBPACK_IMPORTED_MODULE_5__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"], "transferFormat");
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Starting connection with transfer format '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][transferFormat] + "'.");
        if (this.connectionState !== 2 /* Disconnected */) {
            return Promise.reject(new Error("Cannot start a connection that is not in the 'Disconnected' state."));
        }
        this.connectionState = 0 /* Connecting */;
        this.startPromise = this.startInternal(transferFormat);
        return this.startPromise;
    };
    HttpConnection.prototype.send = function (data) {
        if (this.connectionState !== 1 /* Connected */) {
            throw new Error("Cannot send data if the connection is not in the 'Connected' State.");
        }
        // Transport will not be null if state is connected
        return this.transport.send(data);
    };
    HttpConnection.prototype.stop = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.connectionState = 2 /* Disconnected */;
                        // Set error as soon as possible otherwise there is a race between
                        // the transport closing and providing an error and the error from a close message
                        // We would prefer the close message error.
                        this.stopError = error;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.startPromise];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        if (!this.transport) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.transport.stop()];
                    case 5:
                        _a.sent();
                        this.transport = undefined;
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.startInternal = function (transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var url, negotiateResponse, redirects, _loop_1, this_1, state_1, e_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.baseUrl;
                        this.accessTokenFactory = this.options.accessTokenFactory;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 12, , 13]);
                        if (!this.options.skipNegotiation) return [3 /*break*/, 5];
                        if (!(this.options.transport === _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets)) return [3 /*break*/, 3];
                        // No need to add a connection ID in this case
                        this.transport = this.constructTransport(_ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets);
                        // We should just call connect directly in this case.
                        // No fallback or negotiate in this case.
                        return [4 /*yield*/, this.transport.connect(url, transferFormat)];
                    case 2:
                        // We should just call connect directly in this case.
                        // No fallback or negotiate in this case.
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3: throw Error("Negotiation can only be skipped when using the WebSocket transport directly.");
                    case 4: return [3 /*break*/, 11];
                    case 5:
                        negotiateResponse = null;
                        redirects = 0;
                        _loop_1 = function () {
                            var accessToken_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this_1.getNegotiationResponse(url)];
                                    case 1:
                                        negotiateResponse = _a.sent();
                                        // the user tries to stop the connection when it is being started
                                        if (this_1.connectionState === 2 /* Disconnected */) {
                                            return [2 /*return*/, { value: void 0 }];
                                        }
                                        if (negotiateResponse.error) {
                                            throw Error(negotiateResponse.error);
                                        }
                                        if (negotiateResponse.ProtocolVersion) {
                                            throw Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
                                        }
                                        if (negotiateResponse.url) {
                                            url = negotiateResponse.url;
                                        }
                                        if (negotiateResponse.accessToken) {
                                            accessToken_1 = negotiateResponse.accessToken;
                                            this_1.accessTokenFactory = function () { return accessToken_1; };
                                        }
                                        redirects++;
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _a.label = 6;
                    case 6: return [5 /*yield**/, _loop_1()];
                    case 7:
                        state_1 = _a.sent();
                        if (typeof state_1 === "object")
                            return [2 /*return*/, state_1.value];
                        _a.label = 8;
                    case 8:
                        if (negotiateResponse.url && redirects < MAX_REDIRECTS) return [3 /*break*/, 6];
                        _a.label = 9;
                    case 9:
                        if (redirects === MAX_REDIRECTS && negotiateResponse.url) {
                            throw Error("Negotiate redirection limit exceeded.");
                        }
                        return [4 /*yield*/, this.createTransport(url, this.options.transport, negotiateResponse, transferFormat)];
                    case 10:
                        _a.sent();
                        _a.label = 11;
                    case 11:
                        if (this.transport instanceof _LongPollingTransport__WEBPACK_IMPORTED_MODULE_3__["LongPollingTransport"]) {
                            this.features.inherentKeepAlive = true;
                        }
                        this.transport.onreceive = this.onreceive;
                        this.transport.onclose = function (e) { return _this.stopConnection(e); };
                        // only change the state if we were connecting to not overwrite
                        // the state if the connection is already marked as Disconnected
                        this.changeState(0 /* Connecting */, 1 /* Connected */);
                        return [3 /*break*/, 13];
                    case 12:
                        e_2 = _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Failed to start the connection: " + e_2);
                        this.connectionState = 2 /* Disconnected */;
                        this.transport = undefined;
                        throw e_2;
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.getNegotiationResponse = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, headers, token, negotiateUrl, response, e_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.accessTokenFactory) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1:
                        token = _b.sent();
                        if (token) {
                            headers = (_a = {},
                                _a["Authorization"] = "Bearer " + token,
                                _a);
                        }
                        _b.label = 2;
                    case 2:
                        negotiateUrl = this.resolveNegotiateUrl(url);
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Sending negotiation request: " + negotiateUrl + ".");
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.httpClient.post(negotiateUrl, {
                                content: "",
                                headers: headers,
                            })];
                    case 4:
                        response = _b.sent();
                        if (response.statusCode !== 200) {
                            throw Error("Unexpected status code returned from negotiate " + response.statusCode);
                        }
                        return [2 /*return*/, JSON.parse(response.content)];
                    case 5:
                        e_3 = _b.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Failed to complete negotiation with the server: " + e_3);
                        throw e_3;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HttpConnection.prototype.createConnectUrl = function (url, connectionId) {
        if (!connectionId) {
            return url;
        }
        return url + (url.indexOf("?") === -1 ? "?" : "&") + ("id=" + connectionId);
    };
    HttpConnection.prototype.createTransport = function (url, requestedTransport, negotiateResponse, requestedTransferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var connectUrl, transports, _i, transports_1, endpoint, transport, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        connectUrl = this.createConnectUrl(url, negotiateResponse.connectionId);
                        if (!this.isITransport(requestedTransport)) return [3 /*break*/, 2];
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Connection was provided an instance of ITransport, using that directly.");
                        this.transport = requestedTransport;
                        return [4 /*yield*/, this.transport.connect(connectUrl, requestedTransferFormat)];
                    case 1:
                        _a.sent();
                        // only change the state if we were connecting to not overwrite
                        // the state if the connection is already marked as Disconnected
                        this.changeState(0 /* Connecting */, 1 /* Connected */);
                        return [2 /*return*/];
                    case 2:
                        transports = negotiateResponse.availableTransports || [];
                        _i = 0, transports_1 = transports;
                        _a.label = 3;
                    case 3:
                        if (!(_i < transports_1.length)) return [3 /*break*/, 9];
                        endpoint = transports_1[_i];
                        this.connectionState = 0 /* Connecting */;
                        transport = this.resolveTransport(endpoint, requestedTransport, requestedTransferFormat);
                        if (!(typeof transport === "number")) return [3 /*break*/, 8];
                        this.transport = this.constructTransport(transport);
                        if (!!negotiateResponse.connectionId) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getNegotiationResponse(url)];
                    case 4:
                        negotiateResponse = _a.sent();
                        connectUrl = this.createConnectUrl(url, negotiateResponse.connectionId);
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, this.transport.connect(connectUrl, requestedTransferFormat)];
                    case 6:
                        _a.sent();
                        this.changeState(0 /* Connecting */, 1 /* Connected */);
                        return [2 /*return*/];
                    case 7:
                        ex_1 = _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Failed to start the transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "': " + ex_1);
                        this.connectionState = 2 /* Disconnected */;
                        negotiateResponse.connectionId = undefined;
                        return [3 /*break*/, 8];
                    case 8:
                        _i++;
                        return [3 /*break*/, 3];
                    case 9: throw new Error("Unable to initialize any of the available transports.");
                }
            });
        });
    };
    HttpConnection.prototype.constructTransport = function (transport) {
        switch (transport) {
            case _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets:
                if (!this.options.WebSocket) {
                    throw new Error("'WebSocket' is not supported in your environment.");
                }
                return new _WebSocketTransport__WEBPACK_IMPORTED_MODULE_6__["WebSocketTransport"](this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || false, this.options.WebSocket);
            case _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].ServerSentEvents:
                if (!this.options.EventSource) {
                    throw new Error("'EventSource' is not supported in your environment.");
                }
                return new _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_4__["ServerSentEventsTransport"](this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || false, this.options.EventSource);
            case _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].LongPolling:
                return new _LongPollingTransport__WEBPACK_IMPORTED_MODULE_3__["LongPollingTransport"](this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || false);
            default:
                throw new Error("Unknown transport: " + transport + ".");
        }
    };
    HttpConnection.prototype.resolveTransport = function (endpoint, requestedTransport, requestedTransferFormat) {
        var transport = _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][endpoint.transport];
        if (transport === null || transport === undefined) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + endpoint.transport + "' because it is not supported by this client.");
        }
        else {
            var transferFormats = endpoint.transferFormats.map(function (s) { return _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][s]; });
            if (transportMatches(requestedTransport, transport)) {
                if (transferFormats.indexOf(requestedTransferFormat) >= 0) {
                    if ((transport === _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].WebSockets && !this.options.WebSocket) ||
                        (transport === _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"].ServerSentEvents && !this.options.EventSource)) {
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' because it is not supported in your environment.'");
                    }
                    else {
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Selecting transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "'.");
                        return transport;
                    }
                }
                else {
                    this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' because it does not support the requested transfer format '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"][requestedTransferFormat] + "'.");
                }
            }
            else {
                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Debug, "Skipping transport '" + _ITransport__WEBPACK_IMPORTED_MODULE_2__["HttpTransportType"][transport] + "' because it was disabled by the client.");
            }
        }
        return null;
    };
    HttpConnection.prototype.isITransport = function (transport) {
        return transport && typeof (transport) === "object" && "connect" in transport;
    };
    HttpConnection.prototype.changeState = function (from, to) {
        if (this.connectionState === from) {
            this.connectionState = to;
            return true;
        }
        return false;
    };
    HttpConnection.prototype.stopConnection = function (error) {
        this.transport = undefined;
        // If we have a stopError, it takes precedence over the error from the transport
        error = this.stopError || error;
        if (error) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Error, "Connection disconnected with error '" + error + "'.");
        }
        else {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information, "Connection disconnected.");
        }
        this.connectionState = 2 /* Disconnected */;
        if (this.onclose) {
            this.onclose(error);
        }
    };
    HttpConnection.prototype.resolveUrl = function (url) {
        // startsWith is not supported in IE
        if (url.lastIndexOf("https://", 0) === 0 || url.lastIndexOf("http://", 0) === 0) {
            return url;
        }
        if (typeof window === "undefined" || !window || !window.document) {
            throw new Error("Cannot resolve '" + url + "'.");
        }
        // Setting the url to the href propery of an anchor tag handles normalization
        // for us. There are 3 main cases.
        // 1. Relative  path normalization e.g "b" -> "http://localhost:5000/a/b"
        // 2. Absolute path normalization e.g "/a/b" -> "http://localhost:5000/a/b"
        // 3. Networkpath reference normalization e.g "//localhost:5000/a/b" -> "http://localhost:5000/a/b"
        var aTag = window.document.createElement("a");
        aTag.href = url;
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information, "Normalizing '" + url + "' to '" + aTag.href + "'.");
        return aTag.href;
    };
    HttpConnection.prototype.resolveNegotiateUrl = function (url) {
        var index = url.indexOf("?");
        var negotiateUrl = url.substring(0, index === -1 ? url.length : index);
        if (negotiateUrl[negotiateUrl.length - 1] !== "/") {
            negotiateUrl += "/";
        }
        negotiateUrl += "negotiate";
        negotiateUrl += index === -1 ? "" : url.substring(index);
        return negotiateUrl;
    };
    return HttpConnection;
}());

function transportMatches(requestedTransport, actualTransport) {
    return !requestedTransport || ((actualTransport & requestedTransport) !== 0);
}
//# sourceMappingURL=HttpConnection.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/HubConnection.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/HubConnection.js ***!
  \****************************************************************/
/*! exports provided: HubConnectionState, HubConnection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubConnectionState", function() { return HubConnectionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubConnection", function() { return HubConnection; });
/* harmony import */ var _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HandshakeProtocol */ "./node_modules/@aspnet/signalr/dist/esm/HandshakeProtocol.js");
/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IHubProtocol */ "./node_modules/@aspnet/signalr/dist/esm/IHubProtocol.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils */ "./node_modules/@aspnet/signalr/dist/esm/Utils.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var DEFAULT_TIMEOUT_IN_MS = 30 * 1000;
var DEFAULT_PING_INTERVAL_IN_MS = 15 * 1000;
/** Describes the current state of the {@link HubConnection} to the server. */
var HubConnectionState;
(function (HubConnectionState) {
    /** The hub connection is disconnected. */
    HubConnectionState[HubConnectionState["Disconnected"] = 0] = "Disconnected";
    /** The hub connection is connected. */
    HubConnectionState[HubConnectionState["Connected"] = 1] = "Connected";
})(HubConnectionState || (HubConnectionState = {}));
/** Represents a connection to a SignalR Hub. */
var HubConnection = /** @class */ (function () {
    function HubConnection(connection, logger, protocol) {
        var _this = this;
        _Utils__WEBPACK_IMPORTED_MODULE_3__["Arg"].isRequired(connection, "connection");
        _Utils__WEBPACK_IMPORTED_MODULE_3__["Arg"].isRequired(logger, "logger");
        _Utils__WEBPACK_IMPORTED_MODULE_3__["Arg"].isRequired(protocol, "protocol");
        this.serverTimeoutInMilliseconds = DEFAULT_TIMEOUT_IN_MS;
        this.keepAliveIntervalInMilliseconds = DEFAULT_PING_INTERVAL_IN_MS;
        this.logger = logger;
        this.protocol = protocol;
        this.connection = connection;
        this.handshakeProtocol = new _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_0__["HandshakeProtocol"]();
        this.connection.onreceive = function (data) { return _this.processIncomingData(data); };
        this.connection.onclose = function (error) { return _this.connectionClosed(error); };
        this.callbacks = {};
        this.methods = {};
        this.closedCallbacks = [];
        this.id = 0;
        this.receivedHandshakeResponse = false;
        this.connectionState = HubConnectionState.Disconnected;
        this.cachedPingMessage = this.protocol.writeMessage({ type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Ping });
    }
    /** @internal */
    // Using a public static factory method means we can have a private constructor and an _internal_
    // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
    // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
    // public parameter-less constructor.
    HubConnection.create = function (connection, logger, protocol) {
        return new HubConnection(connection, logger, protocol);
    };
    Object.defineProperty(HubConnection.prototype, "state", {
        /** Indicates the state of the {@link HubConnection} to the server. */
        get: function () {
            return this.connectionState;
        },
        enumerable: true,
        configurable: true
    });
    /** Starts the connection.
     *
     * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
     */
    HubConnection.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var handshakeRequest, handshakePromise;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        handshakeRequest = {
                            protocol: this.protocol.name,
                            version: this.protocol.version,
                        };
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Starting HubConnection.");
                        this.receivedHandshakeResponse = false;
                        handshakePromise = new Promise(function (resolve, reject) {
                            _this.handshakeResolver = resolve;
                            _this.handshakeRejecter = reject;
                        });
                        return [4 /*yield*/, this.connection.start(this.protocol.transferFormat)];
                    case 1:
                        _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Sending handshake request.");
                        return [4 /*yield*/, this.sendMessage(this.handshakeProtocol.writeHandshakeRequest(handshakeRequest))];
                    case 2:
                        _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Using HubProtocol '" + this.protocol.name + "'.");
                        // defensively cleanup timeout in case we receive a message from the server before we finish start
                        this.cleanupTimeout();
                        this.resetTimeoutPeriod();
                        this.resetKeepAliveInterval();
                        // Wait for the handshake to complete before marking connection as connected
                        return [4 /*yield*/, handshakePromise];
                    case 3:
                        // Wait for the handshake to complete before marking connection as connected
                        _a.sent();
                        this.connectionState = HubConnectionState.Connected;
                        return [2 /*return*/];
                }
            });
        });
    };
    /** Stops the connection.
     *
     * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
     */
    HubConnection.prototype.stop = function () {
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Stopping HubConnection.");
        this.cleanupTimeout();
        this.cleanupPingTimer();
        return this.connection.stop();
    };
    /** Invokes a streaming hub method on the server using the specified name and arguments.
     *
     * @typeparam T The type of the items returned by the server.
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
     */
    HubConnection.prototype.stream = function (methodName) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var invocationDescriptor = this.createStreamInvocation(methodName, args);
        var promiseQueue;
        var subject = new _Utils__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        subject.cancelCallback = function () {
            var cancelInvocation = _this.createCancelInvocation(invocationDescriptor.invocationId);
            var cancelMessage = _this.protocol.writeMessage(cancelInvocation);
            delete _this.callbacks[invocationDescriptor.invocationId];
            return promiseQueue.then(function () {
                return _this.sendMessage(cancelMessage);
            });
        };
        this.callbacks[invocationDescriptor.invocationId] = function (invocationEvent, error) {
            if (error) {
                subject.error(error);
                return;
            }
            else if (invocationEvent) {
                // invocationEvent will not be null when an error is not passed to the callback
                if (invocationEvent.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion) {
                    if (invocationEvent.error) {
                        subject.error(new Error(invocationEvent.error));
                    }
                    else {
                        subject.complete();
                    }
                }
                else {
                    subject.next((invocationEvent.item));
                }
            }
        };
        var message = this.protocol.writeMessage(invocationDescriptor);
        promiseQueue = this.sendMessage(message)
            .catch(function (e) {
            subject.error(e);
            delete _this.callbacks[invocationDescriptor.invocationId];
        });
        return subject;
    };
    HubConnection.prototype.sendMessage = function (message) {
        this.resetKeepAliveInterval();
        return this.connection.send(message);
    };
    /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
     *
     * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
     * be processing the invocation.
     *
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
     */
    HubConnection.prototype.send = function (methodName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var invocationDescriptor = this.createInvocation(methodName, args, true);
        var message = this.protocol.writeMessage(invocationDescriptor);
        return this.sendMessage(message);
    };
    /** Invokes a hub method on the server using the specified name and arguments.
     *
     * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
     * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
     * resolving the Promise.
     *
     * @typeparam T The expected return type.
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
     */
    HubConnection.prototype.invoke = function (methodName) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var invocationDescriptor = this.createInvocation(methodName, args, false);
        var p = new Promise(function (resolve, reject) {
            // invocationId will always have a value for a non-blocking invocation
            _this.callbacks[invocationDescriptor.invocationId] = function (invocationEvent, error) {
                if (error) {
                    reject(error);
                    return;
                }
                else if (invocationEvent) {
                    // invocationEvent will not be null when an error is not passed to the callback
                    if (invocationEvent.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion) {
                        if (invocationEvent.error) {
                            reject(new Error(invocationEvent.error));
                        }
                        else {
                            resolve(invocationEvent.result);
                        }
                    }
                    else {
                        reject(new Error("Unexpected message type: " + invocationEvent.type));
                    }
                }
            };
            var message = _this.protocol.writeMessage(invocationDescriptor);
            _this.sendMessage(message)
                .catch(function (e) {
                reject(e);
                // invocationId will always have a value for a non-blocking invocation
                delete _this.callbacks[invocationDescriptor.invocationId];
            });
        });
        return p;
    };
    /** Registers a handler that will be invoked when the hub method with the specified method name is invoked.
     *
     * @param {string} methodName The name of the hub method to define.
     * @param {Function} newMethod The handler that will be raised when the hub method is invoked.
     */
    HubConnection.prototype.on = function (methodName, newMethod) {
        if (!methodName || !newMethod) {
            return;
        }
        methodName = methodName.toLowerCase();
        if (!this.methods[methodName]) {
            this.methods[methodName] = [];
        }
        // Preventing adding the same handler multiple times.
        if (this.methods[methodName].indexOf(newMethod) !== -1) {
            return;
        }
        this.methods[methodName].push(newMethod);
    };
    HubConnection.prototype.off = function (methodName, method) {
        if (!methodName) {
            return;
        }
        methodName = methodName.toLowerCase();
        var handlers = this.methods[methodName];
        if (!handlers) {
            return;
        }
        if (method) {
            var removeIdx = handlers.indexOf(method);
            if (removeIdx !== -1) {
                handlers.splice(removeIdx, 1);
                if (handlers.length === 0) {
                    delete this.methods[methodName];
                }
            }
        }
        else {
            delete this.methods[methodName];
        }
    };
    /** Registers a handler that will be invoked when the connection is closed.
     *
     * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
     */
    HubConnection.prototype.onclose = function (callback) {
        if (callback) {
            this.closedCallbacks.push(callback);
        }
    };
    HubConnection.prototype.processIncomingData = function (data) {
        this.cleanupTimeout();
        if (!this.receivedHandshakeResponse) {
            data = this.processHandshakeResponse(data);
            this.receivedHandshakeResponse = true;
        }
        // Data may have all been read when processing handshake response
        if (data) {
            // Parse the messages
            var messages = this.protocol.parseMessages(data, this.logger);
            for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                var message = messages_1[_i];
                switch (message.type) {
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation:
                        this.invokeClientMethod(message);
                        break;
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].StreamItem:
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion:
                        var callback = this.callbacks[message.invocationId];
                        if (callback != null) {
                            if (message.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Completion) {
                                delete this.callbacks[message.invocationId];
                            }
                            callback(message);
                        }
                        break;
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Ping:
                        // Don't care about pings
                        break;
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Close:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "Close message received from server.");
                        // We don't want to wait on the stop itself.
                        // tslint:disable-next-line:no-floating-promises
                        this.connection.stop(message.error ? new Error("Server returned an error on close: " + message.error) : undefined);
                        break;
                    default:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Invalid message type: " + message.type + ".");
                        break;
                }
            }
        }
        this.resetTimeoutPeriod();
    };
    HubConnection.prototype.processHandshakeResponse = function (data) {
        var _a;
        var responseMessage;
        var remainingData;
        try {
            _a = this.handshakeProtocol.parseHandshakeResponse(data), remainingData = _a[0], responseMessage = _a[1];
        }
        catch (e) {
            var message = "Error parsing handshake response: " + e;
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, message);
            var error = new Error(message);
            // We don't want to wait on the stop itself.
            // tslint:disable-next-line:no-floating-promises
            this.connection.stop(error);
            this.handshakeRejecter(error);
            throw error;
        }
        if (responseMessage.error) {
            var message = "Server returned handshake error: " + responseMessage.error;
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, message);
            this.handshakeRejecter(message);
            // We don't want to wait on the stop itself.
            // tslint:disable-next-line:no-floating-promises
            this.connection.stop(new Error(message));
            throw new Error(message);
        }
        else {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Debug, "Server handshake complete.");
        }
        this.handshakeResolver();
        return remainingData;
    };
    HubConnection.prototype.resetKeepAliveInterval = function () {
        var _this = this;
        this.cleanupPingTimer();
        this.pingServerHandle = setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.connectionState === HubConnectionState.Connected)) return [3 /*break*/, 4];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.sendMessage(this.cachedPingMessage)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = _b.sent();
                        // We don't care about the error. It should be seen elsewhere in the client.
                        // The connection is probably in a bad or closed state now, cleanup the timer so it stops triggering
                        this.cleanupPingTimer();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); }, this.keepAliveIntervalInMilliseconds);
    };
    HubConnection.prototype.resetTimeoutPeriod = function () {
        var _this = this;
        if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
            // Set the timeout timer
            this.timeoutHandle = setTimeout(function () { return _this.serverTimeout(); }, this.serverTimeoutInMilliseconds);
        }
    };
    HubConnection.prototype.serverTimeout = function () {
        // The server hasn't talked to us in a while. It doesn't like us anymore ... :(
        // Terminate the connection, but we don't need to wait on the promise.
        // tslint:disable-next-line:no-floating-promises
        this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
    };
    HubConnection.prototype.invokeClientMethod = function (invocationMessage) {
        var _this = this;
        var methods = this.methods[invocationMessage.target.toLowerCase()];
        if (methods) {
            methods.forEach(function (m) { return m.apply(_this, invocationMessage.arguments); });
            if (invocationMessage.invocationId) {
                // This is not supported in v1. So we return an error to avoid blocking the server waiting for the response.
                var message = "Server requested a response, which is not supported in this version of the client.";
                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, message);
                // We don't need to wait on this Promise.
                // tslint:disable-next-line:no-floating-promises
                this.connection.stop(new Error(message));
            }
        }
        else {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "No client method with the name '" + invocationMessage.target + "' found.");
        }
    };
    HubConnection.prototype.connectionClosed = function (error) {
        var _this = this;
        var callbacks = this.callbacks;
        this.callbacks = {};
        this.connectionState = HubConnectionState.Disconnected;
        // if handshake is in progress start will be waiting for the handshake promise, so we complete it
        // if it has already completed this should just noop
        if (this.handshakeRejecter) {
            this.handshakeRejecter(error);
        }
        Object.keys(callbacks)
            .forEach(function (key) {
            var callback = callbacks[key];
            callback(null, error ? error : new Error("Invocation canceled due to connection being closed."));
        });
        this.cleanupTimeout();
        this.cleanupPingTimer();
        this.closedCallbacks.forEach(function (c) { return c.apply(_this, [error]); });
    };
    HubConnection.prototype.cleanupPingTimer = function () {
        if (this.pingServerHandle) {
            clearTimeout(this.pingServerHandle);
        }
    };
    HubConnection.prototype.cleanupTimeout = function () {
        if (this.timeoutHandle) {
            clearTimeout(this.timeoutHandle);
        }
    };
    HubConnection.prototype.createInvocation = function (methodName, args, nonblocking) {
        if (nonblocking) {
            return {
                arguments: args,
                target: methodName,
                type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation,
            };
        }
        else {
            var id = this.id;
            this.id++;
            return {
                arguments: args,
                invocationId: id.toString(),
                target: methodName,
                type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].Invocation,
            };
        }
    };
    HubConnection.prototype.createStreamInvocation = function (methodName, args) {
        var id = this.id;
        this.id++;
        return {
            arguments: args,
            invocationId: id.toString(),
            target: methodName,
            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].StreamInvocation,
        };
    };
    HubConnection.prototype.createCancelInvocation = function (id) {
        return {
            invocationId: id,
            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__["MessageType"].CancelInvocation,
        };
    };
    return HubConnection;
}());

//# sourceMappingURL=HubConnection.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/HubConnectionBuilder.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/HubConnectionBuilder.js ***!
  \***********************************************************************/
/*! exports provided: HubConnectionBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubConnectionBuilder", function() { return HubConnectionBuilder; });
/* harmony import */ var _HttpConnection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpConnection */ "./node_modules/@aspnet/signalr/dist/esm/HttpConnection.js");
/* harmony import */ var _HubConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HubConnection */ "./node_modules/@aspnet/signalr/dist/esm/HubConnection.js");
/* harmony import */ var _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JsonHubProtocol */ "./node_modules/@aspnet/signalr/dist/esm/JsonHubProtocol.js");
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loggers */ "./node_modules/@aspnet/signalr/dist/esm/Loggers.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utils */ "./node_modules/@aspnet/signalr/dist/esm/Utils.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.





/** A builder for configuring {@link @aspnet/signalr.HubConnection} instances. */
var HubConnectionBuilder = /** @class */ (function () {
    function HubConnectionBuilder() {
    }
    HubConnectionBuilder.prototype.configureLogging = function (logging) {
        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(logging, "logging");
        if (isLogger(logging)) {
            this.logger = logging;
        }
        else {
            this.logger = new _Utils__WEBPACK_IMPORTED_MODULE_4__["ConsoleLogger"](logging);
        }
        return this;
    };
    HubConnectionBuilder.prototype.withUrl = function (url, transportTypeOrOptions) {
        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(url, "url");
        this.url = url;
        // Flow-typing knows where it's at. Since HttpTransportType is a number and IHttpConnectionOptions is guaranteed
        // to be an object, we know (as does TypeScript) this comparison is all we need to figure out which overload was called.
        if (typeof transportTypeOrOptions === "object") {
            this.httpConnectionOptions = transportTypeOrOptions;
        }
        else {
            this.httpConnectionOptions = {
                transport: transportTypeOrOptions,
            };
        }
        return this;
    };
    /** Configures the {@link @aspnet/signalr.HubConnection} to use the specified Hub Protocol.
     *
     * @param {IHubProtocol} protocol The {@link @aspnet/signalr.IHubProtocol} implementation to use.
     */
    HubConnectionBuilder.prototype.withHubProtocol = function (protocol) {
        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(protocol, "protocol");
        this.protocol = protocol;
        return this;
    };
    /** Creates a {@link @aspnet/signalr.HubConnection} from the configuration options specified in this builder.
     *
     * @returns {HubConnection} The configured {@link @aspnet/signalr.HubConnection}.
     */
    HubConnectionBuilder.prototype.build = function () {
        // If httpConnectionOptions has a logger, use it. Otherwise, override it with the one
        // provided to configureLogger
        var httpConnectionOptions = this.httpConnectionOptions || {};
        // If it's 'null', the user **explicitly** asked for null, don't mess with it.
        if (httpConnectionOptions.logger === undefined) {
            // If our logger is undefined or null, that's OK, the HttpConnection constructor will handle it.
            httpConnectionOptions.logger = this.logger;
        }
        // Now create the connection
        if (!this.url) {
            throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
        }
        var connection = new _HttpConnection__WEBPACK_IMPORTED_MODULE_0__["HttpConnection"](this.url, httpConnectionOptions);
        return _HubConnection__WEBPACK_IMPORTED_MODULE_1__["HubConnection"].create(connection, this.logger || _Loggers__WEBPACK_IMPORTED_MODULE_3__["NullLogger"].instance, this.protocol || new _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_2__["JsonHubProtocol"]());
    };
    return HubConnectionBuilder;
}());

function isLogger(logger) {
    return logger.log !== undefined;
}
//# sourceMappingURL=HubConnectionBuilder.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/IHubProtocol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/IHubProtocol.js ***!
  \***************************************************************/
/*! exports provided: MessageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return MessageType; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
/** Defines the type of a Hub Message. */
var MessageType;
(function (MessageType) {
    /** Indicates the message is an Invocation message and implements the {@link @aspnet/signalr.InvocationMessage} interface. */
    MessageType[MessageType["Invocation"] = 1] = "Invocation";
    /** Indicates the message is a StreamItem message and implements the {@link @aspnet/signalr.StreamItemMessage} interface. */
    MessageType[MessageType["StreamItem"] = 2] = "StreamItem";
    /** Indicates the message is a Completion message and implements the {@link @aspnet/signalr.CompletionMessage} interface. */
    MessageType[MessageType["Completion"] = 3] = "Completion";
    /** Indicates the message is a Stream Invocation message and implements the {@link @aspnet/signalr.StreamInvocationMessage} interface. */
    MessageType[MessageType["StreamInvocation"] = 4] = "StreamInvocation";
    /** Indicates the message is a Cancel Invocation message and implements the {@link @aspnet/signalr.CancelInvocationMessage} interface. */
    MessageType[MessageType["CancelInvocation"] = 5] = "CancelInvocation";
    /** Indicates the message is a Ping message and implements the {@link @aspnet/signalr.PingMessage} interface. */
    MessageType[MessageType["Ping"] = 6] = "Ping";
    /** Indicates the message is a Close message and implements the {@link @aspnet/signalr.CloseMessage} interface. */
    MessageType[MessageType["Close"] = 7] = "Close";
})(MessageType || (MessageType = {}));
//# sourceMappingURL=IHubProtocol.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js":
/*!**********************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/ILogger.js ***!
  \**********************************************************/
/*! exports provided: LogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// These values are designed to match the ASP.NET Log Levels since that's the pattern we're emulating here.
/** Indicates the severity of a log message.
 *
 * Log Levels are ordered in increasing severity. So `Debug` is more severe than `Trace`, etc.
 */
var LogLevel;
(function (LogLevel) {
    /** Log level for very low severity diagnostic messages. */
    LogLevel[LogLevel["Trace"] = 0] = "Trace";
    /** Log level for low severity diagnostic messages. */
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    /** Log level for informational diagnostic messages. */
    LogLevel[LogLevel["Information"] = 2] = "Information";
    /** Log level for diagnostic messages that indicate a non-fatal problem. */
    LogLevel[LogLevel["Warning"] = 3] = "Warning";
    /** Log level for diagnostic messages that indicate a failure in the current operation. */
    LogLevel[LogLevel["Error"] = 4] = "Error";
    /** Log level for diagnostic messages that indicate a failure that will terminate the entire application. */
    LogLevel[LogLevel["Critical"] = 5] = "Critical";
    /** The highest possible log level. Used when configuring logging to indicate that no log messages should be emitted. */
    LogLevel[LogLevel["None"] = 6] = "None";
})(LogLevel || (LogLevel = {}));
//# sourceMappingURL=ILogger.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/ITransport.js":
/*!*************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/ITransport.js ***!
  \*************************************************************/
/*! exports provided: HttpTransportType, TransferFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpTransportType", function() { return HttpTransportType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferFormat", function() { return TransferFormat; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// This will be treated as a bit flag in the future, so we keep it using power-of-two values.
/** Specifies a specific HTTP transport type. */
var HttpTransportType;
(function (HttpTransportType) {
    /** Specifies no transport preference. */
    HttpTransportType[HttpTransportType["None"] = 0] = "None";
    /** Specifies the WebSockets transport. */
    HttpTransportType[HttpTransportType["WebSockets"] = 1] = "WebSockets";
    /** Specifies the Server-Sent Events transport. */
    HttpTransportType[HttpTransportType["ServerSentEvents"] = 2] = "ServerSentEvents";
    /** Specifies the Long Polling transport. */
    HttpTransportType[HttpTransportType["LongPolling"] = 4] = "LongPolling";
})(HttpTransportType || (HttpTransportType = {}));
/** Specifies the transfer format for a connection. */
var TransferFormat;
(function (TransferFormat) {
    /** Specifies that only text data will be transmitted over the connection. */
    TransferFormat[TransferFormat["Text"] = 1] = "Text";
    /** Specifies that binary data will be transmitted over the connection. */
    TransferFormat[TransferFormat["Binary"] = 2] = "Binary";
})(TransferFormat || (TransferFormat = {}));
//# sourceMappingURL=ITransport.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/JsonHubProtocol.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/JsonHubProtocol.js ***!
  \******************************************************************/
/*! exports provided: JsonHubProtocol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonHubProtocol", function() { return JsonHubProtocol; });
/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IHubProtocol */ "./node_modules/@aspnet/signalr/dist/esm/IHubProtocol.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ITransport */ "./node_modules/@aspnet/signalr/dist/esm/ITransport.js");
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loggers */ "./node_modules/@aspnet/signalr/dist/esm/Loggers.js");
/* harmony import */ var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextMessageFormat */ "./node_modules/@aspnet/signalr/dist/esm/TextMessageFormat.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.





var JSON_HUB_PROTOCOL_NAME = "json";
/** Implements the JSON Hub Protocol. */
var JsonHubProtocol = /** @class */ (function () {
    function JsonHubProtocol() {
        /** @inheritDoc */
        this.name = JSON_HUB_PROTOCOL_NAME;
        /** @inheritDoc */
        this.version = 1;
        /** @inheritDoc */
        this.transferFormat = _ITransport__WEBPACK_IMPORTED_MODULE_2__["TransferFormat"].Text;
    }
    /** Creates an array of {@link @aspnet/signalr.HubMessage} objects from the specified serialized representation.
     *
     * @param {string} input A string containing the serialized representation.
     * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
     */
    JsonHubProtocol.prototype.parseMessages = function (input, logger) {
        // The interface does allow "ArrayBuffer" to be passed in, but this implementation does not. So let's throw a useful error.
        if (typeof input !== "string") {
            throw new Error("Invalid input for JSON hub protocol. Expected a string.");
        }
        if (!input) {
            return [];
        }
        if (logger === null) {
            logger = _Loggers__WEBPACK_IMPORTED_MODULE_3__["NullLogger"].instance;
        }
        // Parse the messages
        var messages = _TextMessageFormat__WEBPACK_IMPORTED_MODULE_4__["TextMessageFormat"].parse(input);
        var hubMessages = [];
        for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
            var message = messages_1[_i];
            var parsedMessage = JSON.parse(message);
            if (typeof parsedMessage.type !== "number") {
                throw new Error("Invalid payload.");
            }
            switch (parsedMessage.type) {
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Invocation:
                    this.isInvocationMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].StreamItem:
                    this.isStreamItemMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Completion:
                    this.isCompletionMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Ping:
                    // Single value, no need to validate
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_0__["MessageType"].Close:
                    // All optional values, no need to validate
                    break;
                default:
                    // Future protocol changes can add message types, old clients can ignore them
                    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
                    continue;
            }
            hubMessages.push(parsedMessage);
        }
        return hubMessages;
    };
    /** Writes the specified {@link @aspnet/signalr.HubMessage} to a string and returns it.
     *
     * @param {HubMessage} message The message to write.
     * @returns {string} A string containing the serialized representation of the message.
     */
    JsonHubProtocol.prototype.writeMessage = function (message) {
        return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_4__["TextMessageFormat"].write(JSON.stringify(message));
    };
    JsonHubProtocol.prototype.isInvocationMessage = function (message) {
        this.assertNotEmptyString(message.target, "Invalid payload for Invocation message.");
        if (message.invocationId !== undefined) {
            this.assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.");
        }
    };
    JsonHubProtocol.prototype.isStreamItemMessage = function (message) {
        this.assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message.");
        if (message.item === undefined) {
            throw new Error("Invalid payload for StreamItem message.");
        }
    };
    JsonHubProtocol.prototype.isCompletionMessage = function (message) {
        if (message.result && message.error) {
            throw new Error("Invalid payload for Completion message.");
        }
        if (!message.result && message.error) {
            this.assertNotEmptyString(message.error, "Invalid payload for Completion message.");
        }
        this.assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.");
    };
    JsonHubProtocol.prototype.assertNotEmptyString = function (value, errorMessage) {
        if (typeof value !== "string" || value === "") {
            throw new Error(errorMessage);
        }
    };
    return JsonHubProtocol;
}());

//# sourceMappingURL=JsonHubProtocol.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/Loggers.js":
/*!**********************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/Loggers.js ***!
  \**********************************************************/
/*! exports provided: NullLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullLogger", function() { return NullLogger; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
/** A logger that does nothing when log messages are sent to it. */
var NullLogger = /** @class */ (function () {
    function NullLogger() {
    }
    /** @inheritDoc */
    // tslint:disable-next-line
    NullLogger.prototype.log = function (_logLevel, _message) {
    };
    /** The singleton instance of the {@link @aspnet/signalr.NullLogger}. */
    NullLogger.instance = new NullLogger();
    return NullLogger;
}());

//# sourceMappingURL=Loggers.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/LongPollingTransport.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/LongPollingTransport.js ***!
  \***********************************************************************/
/*! exports provided: LongPollingTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongPollingTransport", function() { return LongPollingTransport; });
/* harmony import */ var _AbortController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbortController */ "./node_modules/@aspnet/signalr/dist/esm/AbortController.js");
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Errors */ "./node_modules/@aspnet/signalr/dist/esm/Errors.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ITransport */ "./node_modules/@aspnet/signalr/dist/esm/ITransport.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utils */ "./node_modules/@aspnet/signalr/dist/esm/Utils.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





// Not exported from 'index', this type is internal.
/** @private */
var LongPollingTransport = /** @class */ (function () {
    function LongPollingTransport(httpClient, accessTokenFactory, logger, logMessageContent) {
        this.httpClient = httpClient;
        this.accessTokenFactory = accessTokenFactory;
        this.logger = logger;
        this.pollAbort = new _AbortController__WEBPACK_IMPORTED_MODULE_0__["AbortController"]();
        this.logMessageContent = logMessageContent;
        this.running = false;
        this.onreceive = null;
        this.onclose = null;
    }
    Object.defineProperty(LongPollingTransport.prototype, "pollAborted", {
        // This is an internal type, not exported from 'index' so this is really just internal.
        get: function () {
            return this.pollAbort.aborted;
        },
        enumerable: true,
        configurable: true
    });
    LongPollingTransport.prototype.connect = function (url, transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var pollOptions, token, pollUrl, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(url, "url");
                        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isRequired(transferFormat, "transferFormat");
                        _Utils__WEBPACK_IMPORTED_MODULE_4__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_3__["TransferFormat"], "transferFormat");
                        this.url = url;
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Connecting.");
                        // Allow binary format on Node and Browsers that support binary content (indicated by the presence of responseType property)
                        if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_3__["TransferFormat"].Binary &&
                            (typeof XMLHttpRequest !== "undefined" && typeof new XMLHttpRequest().responseType !== "string")) {
                            throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
                        }
                        pollOptions = {
                            abortSignal: this.pollAbort.signal,
                            headers: {},
                            timeout: 100000,
                        };
                        if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_3__["TransferFormat"].Binary) {
                            pollOptions.responseType = "arraybuffer";
                        }
                        return [4 /*yield*/, this.getAccessToken()];
                    case 1:
                        token = _a.sent();
                        this.updateHeaderToken(pollOptions, token);
                        pollUrl = url + "&_=" + Date.now();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) polling: " + pollUrl + ".");
                        return [4 /*yield*/, this.httpClient.get(pollUrl, pollOptions)];
                    case 2:
                        response = _a.sent();
                        if (response.statusCode !== 200) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "(LongPolling transport) Unexpected response code: " + response.statusCode + ".");
                            // Mark running as false so that the poll immediately ends and runs the close logic
                            this.closeError = new _Errors__WEBPACK_IMPORTED_MODULE_1__["HttpError"](response.statusText || "", response.statusCode);
                            this.running = false;
                        }
                        else {
                            this.running = true;
                        }
                        this.receiving = this.poll(this.url, pollOptions);
                        return [2 /*return*/];
                }
            });
        });
    };
    LongPollingTransport.prototype.getAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.accessTokenFactory) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/, null];
                }
            });
        });
    };
    LongPollingTransport.prototype.updateHeaderToken = function (request, token) {
        if (!request.headers) {
            request.headers = {};
        }
        if (token) {
            // tslint:disable-next-line:no-string-literal
            request.headers["Authorization"] = "Bearer " + token;
            return;
        }
        // tslint:disable-next-line:no-string-literal
        if (request.headers["Authorization"]) {
            // tslint:disable-next-line:no-string-literal
            delete request.headers["Authorization"];
        }
    };
    LongPollingTransport.prototype.poll = function (url, pollOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var token, pollUrl, response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, , 8, 9]);
                        _a.label = 1;
                    case 1:
                        if (!this.running) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.getAccessToken()];
                    case 2:
                        token = _a.sent();
                        this.updateHeaderToken(pollOptions, token);
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        pollUrl = url + "&_=" + Date.now();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) polling: " + pollUrl + ".");
                        return [4 /*yield*/, this.httpClient.get(pollUrl, pollOptions)];
                    case 4:
                        response = _a.sent();
                        if (response.statusCode === 204) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Information, "(LongPolling transport) Poll terminated by server.");
                            this.running = false;
                        }
                        else if (response.statusCode !== 200) {
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Error, "(LongPolling transport) Unexpected response code: " + response.statusCode + ".");
                            // Unexpected status code
                            this.closeError = new _Errors__WEBPACK_IMPORTED_MODULE_1__["HttpError"](response.statusText || "", response.statusCode);
                            this.running = false;
                        }
                        else {
                            // Process the response
                            if (response.content) {
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) data received. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["getDataDetail"])(response.content, this.logMessageContent) + ".");
                                if (this.onreceive) {
                                    this.onreceive(response.content);
                                }
                            }
                            else {
                                // This is another way timeout manifest.
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Poll timed out, reissuing.");
                            }
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        if (!this.running) {
                            // Log but disregard errors that occur after stopping
                            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Poll errored after shutdown: " + e_1.message);
                        }
                        else {
                            if (e_1 instanceof _Errors__WEBPACK_IMPORTED_MODULE_1__["TimeoutError"]) {
                                // Ignore timeouts and reissue the poll.
                                this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Poll timed out, reissuing.");
                            }
                            else {
                                // Close the connection with the error as the result.
                                this.closeError = e_1;
                                this.running = false;
                            }
                        }
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 1];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Polling complete.");
                        // We will reach here with pollAborted==false when the server returned a response causing the transport to stop.
                        // If pollAborted==true then client initiated the stop and the stop method will raise the close event after DELETE is sent.
                        if (!this.pollAborted) {
                            this.raiseOnClose();
                        }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    LongPollingTransport.prototype.send = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.running) {
                    return [2 /*return*/, Promise.reject(new Error("Cannot send until the transport is connected"))];
                }
                return [2 /*return*/, Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["sendMessage"])(this.logger, "LongPolling", this.httpClient, this.url, this.accessTokenFactory, data, this.logMessageContent)];
            });
        });
    };
    LongPollingTransport.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deleteOptions, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Stopping polling.");
                        // Tell receiving loop to stop, abort any current request, and then wait for it to finish
                        this.running = false;
                        this.pollAbort.abort();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 5, 6]);
                        return [4 /*yield*/, this.receiving];
                    case 2:
                        _a.sent();
                        // Send DELETE to clean up long polling on the server
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) sending DELETE request to " + this.url + ".");
                        deleteOptions = {
                            headers: {},
                        };
                        return [4 /*yield*/, this.getAccessToken()];
                    case 3:
                        token = _a.sent();
                        this.updateHeaderToken(deleteOptions, token);
                        return [4 /*yield*/, this.httpClient.delete(this.url, deleteOptions)];
                    case 4:
                        _a.sent();
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) DELETE request sent.");
                        return [3 /*break*/, 6];
                    case 5:
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, "(LongPolling transport) Stop finished.");
                        // Raise close event here instead of in polling
                        // It needs to happen after the DELETE request is sent
                        this.raiseOnClose();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    LongPollingTransport.prototype.raiseOnClose = function () {
        if (this.onclose) {
            var logMessage = "(LongPolling transport) Firing onclose event.";
            if (this.closeError) {
                logMessage += " Error: " + this.closeError;
            }
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Trace, logMessage);
            this.onclose(this.closeError);
        }
    };
    return LongPollingTransport;
}());

//# sourceMappingURL=LongPollingTransport.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/NodeHttpClient.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/NodeHttpClient.js ***!
  \*****************************************************************/
/*! exports provided: NodeHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeHttpClient", function() { return NodeHttpClient; });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "./node_modules/@aspnet/signalr/dist/esm/Errors.js");
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpClient */ "./node_modules/@aspnet/signalr/dist/esm/HttpClient.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils */ "./node_modules/@aspnet/signalr/dist/esm/Utils.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};




var requestModule;
if (typeof XMLHttpRequest === "undefined") {
    // In order to ignore the dynamic require in webpack builds we need to do this magic
    // @ts-ignore: TS doesn't know about these names
    var requireFunc =  true ? require : undefined;
    requestModule = requireFunc("request");
}
var NodeHttpClient = /** @class */ (function (_super) {
    __extends(NodeHttpClient, _super);
    function NodeHttpClient(logger) {
        var _this = _super.call(this) || this;
        if (typeof requestModule === "undefined") {
            throw new Error("The 'request' module could not be loaded.");
        }
        _this.logger = logger;
        _this.cookieJar = requestModule.jar();
        _this.request = requestModule.defaults({ jar: _this.cookieJar });
        return _this;
    }
    NodeHttpClient.prototype.send = function (httpRequest) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var requestBody;
            if (Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["isArrayBuffer"])(httpRequest.content)) {
                requestBody = Buffer.from(httpRequest.content);
            }
            else {
                requestBody = httpRequest.content || "";
            }
            var currentRequest = _this.request(httpRequest.url, {
                body: requestBody,
                // If binary is expected 'null' should be used, otherwise for text 'utf8'
                encoding: httpRequest.responseType === "arraybuffer" ? null : "utf8",
                headers: __assign({ 
                    // Tell auth middleware to 401 instead of redirecting
                    "X-Requested-With": "XMLHttpRequest" }, httpRequest.headers),
                method: httpRequest.method,
                timeout: httpRequest.timeout,
            }, function (error, response, body) {
                if (httpRequest.abortSignal) {
                    httpRequest.abortSignal.onabort = null;
                }
                if (error) {
                    if (error.code === "ETIMEDOUT") {
                        _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Timeout from HTTP request.");
                        reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["TimeoutError"]());
                    }
                    _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Error from HTTP request. " + error);
                    reject(error);
                    return;
                }
                if (response.statusCode >= 200 && response.statusCode < 300) {
                    resolve(new _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"](response.statusCode, response.statusMessage || "", body));
                }
                else {
                    reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"](response.statusMessage || "", response.statusCode || 0));
                }
            });
            if (httpRequest.abortSignal) {
                httpRequest.abortSignal.onabort = function () {
                    currentRequest.abort();
                    reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]());
                };
            }
        });
    };
    NodeHttpClient.prototype.getCookieString = function (url) {
        return this.cookieJar.getCookieString(url);
    };
    return NodeHttpClient;
}(_HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));

//# sourceMappingURL=NodeHttpClient.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/ServerSentEventsTransport.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/ServerSentEventsTransport.js ***!
  \****************************************************************************/
/*! exports provided: ServerSentEventsTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerSentEventsTransport", function() { return ServerSentEventsTransport; });
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ITransport */ "./node_modules/@aspnet/signalr/dist/esm/ITransport.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ "./node_modules/@aspnet/signalr/dist/esm/Utils.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/** @private */
var ServerSentEventsTransport = /** @class */ (function () {
    function ServerSentEventsTransport(httpClient, accessTokenFactory, logger, logMessageContent, eventSourceConstructor) {
        this.httpClient = httpClient;
        this.accessTokenFactory = accessTokenFactory;
        this.logger = logger;
        this.logMessageContent = logMessageContent;
        this.eventSourceConstructor = eventSourceConstructor;
        this.onreceive = null;
        this.onclose = null;
    }
    ServerSentEventsTransport.prototype.connect = function (url, transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(url, "url");
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(transferFormat, "transferFormat");
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"], "transferFormat");
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(SSE transport) Connecting.");
                        // set url before accessTokenFactory because this.url is only for send and we set the auth header instead of the query string for send
                        this.url = url;
                        if (!this.accessTokenFactory) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1:
                        token = _a.sent();
                        if (token) {
                            url += (url.indexOf("?") < 0 ? "?" : "&") + ("access_token=" + encodeURIComponent(token));
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, new Promise(function (resolve, reject) {
                            var opened = false;
                            if (transferFormat !== _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"].Text) {
                                reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
                                return;
                            }
                            var eventSource;
                            if (typeof window !== "undefined") {
                                eventSource = new _this.eventSourceConstructor(url, { withCredentials: true });
                            }
                            else {
                                // Non-browser passes cookies via the dictionary
                                var cookies = _this.httpClient.getCookieString(url);
                                eventSource = new _this.eventSourceConstructor(url, { withCredentials: true, headers: { Cookie: cookies } });
                            }
                            try {
                                eventSource.onmessage = function (e) {
                                    if (_this.onreceive) {
                                        try {
                                            _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(SSE transport) data received. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getDataDetail"])(e.data, _this.logMessageContent) + ".");
                                            _this.onreceive(e.data);
                                        }
                                        catch (error) {
                                            _this.close(error);
                                            return;
                                        }
                                    }
                                };
                                eventSource.onerror = function (e) {
                                    var error = new Error(e.data || "Error occurred");
                                    if (opened) {
                                        _this.close(error);
                                    }
                                    else {
                                        reject(error);
                                    }
                                };
                                eventSource.onopen = function () {
                                    _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information, "SSE connected to " + _this.url);
                                    _this.eventSource = eventSource;
                                    opened = true;
                                    resolve();
                                };
                            }
                            catch (e) {
                                reject(e);
                                return;
                            }
                        })];
                }
            });
        });
    };
    ServerSentEventsTransport.prototype.send = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.eventSource) {
                    return [2 /*return*/, Promise.reject(new Error("Cannot send until the transport is connected"))];
                }
                return [2 /*return*/, Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["sendMessage"])(this.logger, "SSE", this.httpClient, this.url, this.accessTokenFactory, data, this.logMessageContent)];
            });
        });
    };
    ServerSentEventsTransport.prototype.stop = function () {
        this.close();
        return Promise.resolve();
    };
    ServerSentEventsTransport.prototype.close = function (e) {
        if (this.eventSource) {
            this.eventSource.close();
            this.eventSource = undefined;
            if (this.onclose) {
                this.onclose(e);
            }
        }
    };
    return ServerSentEventsTransport;
}());

//# sourceMappingURL=ServerSentEventsTransport.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/TextMessageFormat.js":
/*!********************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/TextMessageFormat.js ***!
  \********************************************************************/
/*! exports provided: TextMessageFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextMessageFormat", function() { return TextMessageFormat; });
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Not exported from index
/** @private */
var TextMessageFormat = /** @class */ (function () {
    function TextMessageFormat() {
    }
    TextMessageFormat.write = function (output) {
        return "" + output + TextMessageFormat.RecordSeparator;
    };
    TextMessageFormat.parse = function (input) {
        if (input[input.length - 1] !== TextMessageFormat.RecordSeparator) {
            throw new Error("Message is incomplete.");
        }
        var messages = input.split(TextMessageFormat.RecordSeparator);
        messages.pop();
        return messages;
    };
    TextMessageFormat.RecordSeparatorCode = 0x1e;
    TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode);
    return TextMessageFormat;
}());

//# sourceMappingURL=TextMessageFormat.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/Utils.js":
/*!********************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/Utils.js ***!
  \********************************************************/
/*! exports provided: Arg, getDataDetail, formatArrayBuffer, isArrayBuffer, sendMessage, createLogger, Subject, SubjectSubscription, ConsoleLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arg", function() { return Arg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataDetail", function() { return getDataDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatArrayBuffer", function() { return formatArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayBuffer", function() { return isArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLogger", function() { return createLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscription", function() { return SubjectSubscription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleLogger", function() { return ConsoleLogger; });
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js");
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loggers */ "./node_modules/@aspnet/signalr/dist/esm/Loggers.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/** @private */
var Arg = /** @class */ (function () {
    function Arg() {
    }
    Arg.isRequired = function (val, name) {
        if (val === null || val === undefined) {
            throw new Error("The '" + name + "' argument is required.");
        }
    };
    Arg.isIn = function (val, values, name) {
        // TypeScript enums have keys for **both** the name and the value of each enum member on the type itself.
        if (!(val in values)) {
            throw new Error("Unknown " + name + " value: " + val + ".");
        }
    };
    return Arg;
}());

/** @private */
function getDataDetail(data, includeContent) {
    var detail = "";
    if (isArrayBuffer(data)) {
        detail = "Binary data of length " + data.byteLength;
        if (includeContent) {
            detail += ". Content: '" + formatArrayBuffer(data) + "'";
        }
    }
    else if (typeof data === "string") {
        detail = "String data of length " + data.length;
        if (includeContent) {
            detail += ". Content: '" + data + "'";
        }
    }
    return detail;
}
/** @private */
function formatArrayBuffer(data) {
    var view = new Uint8Array(data);
    // Uint8Array.map only supports returning another Uint8Array?
    var str = "";
    view.forEach(function (num) {
        var pad = num < 16 ? "0" : "";
        str += "0x" + pad + num.toString(16) + " ";
    });
    // Trim of trailing space.
    return str.substr(0, str.length - 1);
}
// Also in signalr-protocol-msgpack/Utils.ts
/** @private */
function isArrayBuffer(val) {
    return val && typeof ArrayBuffer !== "undefined" &&
        (val instanceof ArrayBuffer ||
            // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
            (val.constructor && val.constructor.name === "ArrayBuffer"));
}
/** @private */
function sendMessage(logger, transportName, httpClient, url, accessTokenFactory, content, logMessageContent) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, headers, token, responseType, response;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!accessTokenFactory) return [3 /*break*/, 2];
                    return [4 /*yield*/, accessTokenFactory()];
                case 1:
                    token = _b.sent();
                    if (token) {
                        headers = (_a = {},
                            _a["Authorization"] = "Bearer " + token,
                            _a);
                    }
                    _b.label = 2;
                case 2:
                    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(" + transportName + " transport) sending data. " + getDataDetail(content, logMessageContent) + ".");
                    responseType = isArrayBuffer(content) ? "arraybuffer" : "text";
                    return [4 /*yield*/, httpClient.post(url, {
                            content: content,
                            headers: headers,
                            responseType: responseType,
                        })];
                case 3:
                    response = _b.sent();
                    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(" + transportName + " transport) request complete. Response status: " + response.statusCode + ".");
                    return [2 /*return*/];
            }
        });
    });
}
/** @private */
function createLogger(logger) {
    if (logger === undefined) {
        return new ConsoleLogger(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information);
    }
    if (logger === null) {
        return _Loggers__WEBPACK_IMPORTED_MODULE_1__["NullLogger"].instance;
    }
    if (logger.log) {
        return logger;
    }
    return new ConsoleLogger(logger);
}
/** @private */
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.next = function (item) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.next(item);
        }
    };
    Subject.prototype.error = function (err) {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            if (observer.error) {
                observer.error(err);
            }
        }
    };
    Subject.prototype.complete = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            if (observer.complete) {
                observer.complete();
            }
        }
    };
    Subject.prototype.subscribe = function (observer) {
        this.observers.push(observer);
        return new SubjectSubscription(this, observer);
    };
    return Subject;
}());

/** @private */
var SubjectSubscription = /** @class */ (function () {
    function SubjectSubscription(subject, observer) {
        this.subject = subject;
        this.observer = observer;
    }
    SubjectSubscription.prototype.dispose = function () {
        var index = this.subject.observers.indexOf(this.observer);
        if (index > -1) {
            this.subject.observers.splice(index, 1);
        }
        if (this.subject.observers.length === 0 && this.subject.cancelCallback) {
            this.subject.cancelCallback().catch(function (_) { });
        }
    };
    return SubjectSubscription;
}());

/** @private */
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger(minimumLogLevel) {
        this.minimumLogLevel = minimumLogLevel;
    }
    ConsoleLogger.prototype.log = function (logLevel, message) {
        if (logLevel >= this.minimumLogLevel) {
            switch (logLevel) {
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Critical:
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Error:
                    console.error("[" + new Date().toISOString() + "] " + _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                    break;
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Warning:
                    console.warn("[" + new Date().toISOString() + "] " + _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                    break;
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information:
                    console.info("[" + new Date().toISOString() + "] " + _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                    break;
                default:
                    // console.debug only goes to attached debuggers in Node, so we use console.log for Trace and Debug
                    console.log("[" + new Date().toISOString() + "] " + _ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"][logLevel] + ": " + message);
                    break;
            }
        }
    };
    return ConsoleLogger;
}());

//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/WebSocketTransport.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/WebSocketTransport.js ***!
  \*********************************************************************/
/*! exports provided: WebSocketTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketTransport", function() { return WebSocketTransport; });
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ITransport */ "./node_modules/@aspnet/signalr/dist/esm/ITransport.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ "./node_modules/@aspnet/signalr/dist/esm/Utils.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/** @private */
var WebSocketTransport = /** @class */ (function () {
    function WebSocketTransport(httpClient, accessTokenFactory, logger, logMessageContent, webSocketConstructor) {
        this.logger = logger;
        this.accessTokenFactory = accessTokenFactory;
        this.logMessageContent = logMessageContent;
        this.webSocketConstructor = webSocketConstructor;
        this.httpClient = httpClient;
        this.onreceive = null;
        this.onclose = null;
    }
    WebSocketTransport.prototype.connect = function (url, transferFormat) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(url, "url");
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isRequired(transferFormat, "transferFormat");
                        _Utils__WEBPACK_IMPORTED_MODULE_2__["Arg"].isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"], "transferFormat");
                        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) Connecting.");
                        if (!this.accessTokenFactory) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.accessTokenFactory()];
                    case 1:
                        token = _a.sent();
                        if (token) {
                            url += (url.indexOf("?") < 0 ? "?" : "&") + ("access_token=" + encodeURIComponent(token));
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, new Promise(function (resolve, reject) {
                            url = url.replace(/^http/, "ws");
                            var webSocket;
                            var cookies = _this.httpClient.getCookieString(url);
                            if (typeof window === "undefined" && cookies) {
                                // Only pass cookies when in non-browser environments
                                webSocket = new _this.webSocketConstructor(url, undefined, {
                                    headers: {
                                        Cookie: "" + cookies,
                                    },
                                });
                            }
                            if (!webSocket) {
                                // Chrome is not happy with passing 'undefined' as protocol
                                webSocket = new _this.webSocketConstructor(url);
                            }
                            if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_1__["TransferFormat"].Binary) {
                                webSocket.binaryType = "arraybuffer";
                            }
                            // tslint:disable-next-line:variable-name
                            webSocket.onopen = function (_event) {
                                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Information, "WebSocket connected to " + url + ".");
                                _this.webSocket = webSocket;
                                resolve();
                            };
                            webSocket.onerror = function (event) {
                                var error = null;
                                // ErrorEvent is a browser only type we need to check if the type exists before using it
                                if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                                    error = event.error;
                                }
                                reject(error);
                            };
                            webSocket.onmessage = function (message) {
                                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) data received. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getDataDetail"])(message.data, _this.logMessageContent) + ".");
                                if (_this.onreceive) {
                                    _this.onreceive(message.data);
                                }
                            };
                            webSocket.onclose = function (event) { return _this.close(event); };
                        })];
                }
            });
        });
    };
    WebSocketTransport.prototype.send = function (data) {
        if (this.webSocket && this.webSocket.readyState === this.webSocketConstructor.OPEN) {
            this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) sending data. " + Object(_Utils__WEBPACK_IMPORTED_MODULE_2__["getDataDetail"])(data, this.logMessageContent) + ".");
            this.webSocket.send(data);
            return Promise.resolve();
        }
        return Promise.reject("WebSocket is not in the OPEN state");
    };
    WebSocketTransport.prototype.stop = function () {
        if (this.webSocket) {
            // Clear websocket handlers because we are considering the socket closed now
            this.webSocket.onclose = function () { };
            this.webSocket.onmessage = function () { };
            this.webSocket.onerror = function () { };
            this.webSocket.close();
            this.webSocket = undefined;
            // Manually invoke onclose callback inline so we know the HttpConnection was closed properly before returning
            // This also solves an issue where websocket.onclose could take 18+ seconds to trigger during network disconnects
            this.close(undefined);
        }
        return Promise.resolve();
    };
    WebSocketTransport.prototype.close = function (event) {
        // webSocket will be null if the transport did not start successfully
        this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].Trace, "(WebSockets transport) socket closed.");
        if (this.onclose) {
            if (event && (event.wasClean === false || event.code !== 1000)) {
                this.onclose(new Error("WebSocket closed with status code: " + event.code + " (" + event.reason + ")."));
            }
            else {
                this.onclose();
            }
        }
    };
    return WebSocketTransport;
}());

//# sourceMappingURL=WebSocketTransport.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/XhrHttpClient.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/XhrHttpClient.js ***!
  \****************************************************************/
/*! exports provided: XhrHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrHttpClient", function() { return XhrHttpClient; });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "./node_modules/@aspnet/signalr/dist/esm/Errors.js");
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpClient */ "./node_modules/@aspnet/signalr/dist/esm/HttpClient.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js");
// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var XhrHttpClient = /** @class */ (function (_super) {
    __extends(XhrHttpClient, _super);
    function XhrHttpClient(logger) {
        var _this = _super.call(this) || this;
        _this.logger = logger;
        return _this;
    }
    /** @inheritDoc */
    XhrHttpClient.prototype.send = function (request) {
        var _this = this;
        // Check that abort was not signaled before calling send
        if (request.abortSignal && request.abortSignal.aborted) {
            return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]());
        }
        if (!request.method) {
            return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
            return Promise.reject(new Error("No url defined."));
        }
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(request.method, request.url, true);
            xhr.withCredentials = true;
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            // Explicitly setting the Content-Type header for React Native on Android platform.
            xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            var headers = request.headers;
            if (headers) {
                Object.keys(headers)
                    .forEach(function (header) {
                    xhr.setRequestHeader(header, headers[header]);
                });
            }
            if (request.responseType) {
                xhr.responseType = request.responseType;
            }
            if (request.abortSignal) {
                request.abortSignal.onabort = function () {
                    xhr.abort();
                    reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]());
                };
            }
            if (request.timeout) {
                xhr.timeout = request.timeout;
            }
            xhr.onload = function () {
                if (request.abortSignal) {
                    request.abortSignal.onabort = null;
                }
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(new _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"](xhr.status, xhr.statusText, xhr.response || xhr.responseText));
                }
                else {
                    reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"](xhr.statusText, xhr.status));
                }
            };
            xhr.onerror = function () {
                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Error from HTTP request. " + xhr.status + ": " + xhr.statusText + ".");
                reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"](xhr.statusText, xhr.status));
            };
            xhr.ontimeout = function () {
                _this.logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__["LogLevel"].Warning, "Timeout from HTTP request.");
                reject(new _Errors__WEBPACK_IMPORTED_MODULE_0__["TimeoutError"]());
            };
            xhr.send(request.content || "");
        });
    };
    return XhrHttpClient;
}(_HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));

//# sourceMappingURL=XhrHttpClient.js.map

/***/ }),

/***/ "./node_modules/@aspnet/signalr/dist/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@aspnet/signalr/dist/esm/index.js ***!
  \********************************************************/
/*! exports provided: VERSION, AbortError, HttpError, TimeoutError, HttpClient, HttpResponse, DefaultHttpClient, HubConnection, HubConnectionState, HubConnectionBuilder, MessageType, LogLevel, HttpTransportType, TransferFormat, NullLogger, JsonHubProtocol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "./node_modules/@aspnet/signalr/dist/esm/Errors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbortError", function() { return _Errors__WEBPACK_IMPORTED_MODULE_0__["AbortError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpError", function() { return _Errors__WEBPACK_IMPORTED_MODULE_0__["HttpError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return _Errors__WEBPACK_IMPORTED_MODULE_0__["TimeoutError"]; });

/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpClient */ "./node_modules/@aspnet/signalr/dist/esm/HttpClient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return _HttpClient__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]; });

/* harmony import */ var _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultHttpClient */ "./node_modules/@aspnet/signalr/dist/esm/DefaultHttpClient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultHttpClient", function() { return _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_2__["DefaultHttpClient"]; });

/* harmony import */ var _HubConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HubConnection */ "./node_modules/@aspnet/signalr/dist/esm/HubConnection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubConnection", function() { return _HubConnection__WEBPACK_IMPORTED_MODULE_3__["HubConnection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubConnectionState", function() { return _HubConnection__WEBPACK_IMPORTED_MODULE_3__["HubConnectionState"]; });

/* harmony import */ var _HubConnectionBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HubConnectionBuilder */ "./node_modules/@aspnet/signalr/dist/esm/HubConnectionBuilder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HubConnectionBuilder", function() { return _HubConnectionBuilder__WEBPACK_IMPORTED_MODULE_4__["HubConnectionBuilder"]; });

/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IHubProtocol */ "./node_modules/@aspnet/signalr/dist/esm/IHubProtocol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return _IHubProtocol__WEBPACK_IMPORTED_MODULE_5__["MessageType"]; });

/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ILogger */ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return _ILogger__WEBPACK_IMPORTED_MODULE_6__["LogLevel"]; });

/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ITransport */ "./node_modules/@aspnet/signalr/dist/esm/ITransport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpTransportType", function() { return _ITransport__WEBPACK_IMPORTED_MODULE_7__["HttpTransportType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransferFormat", function() { return _ITransport__WEBPACK_IMPORTED_MODULE_7__["TransferFormat"]; });

/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Loggers */ "./node_modules/@aspnet/signalr/dist/esm/Loggers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NullLogger", function() { return _Loggers__WEBPACK_IMPORTED_MODULE_8__["NullLogger"]; });

/* harmony import */ var _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./JsonHubProtocol */ "./node_modules/@aspnet/signalr/dist/esm/JsonHubProtocol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonHubProtocol", function() { return _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_9__["JsonHubProtocol"]; });

// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Version token that will be replaced by the prepack command
/** The version of the SignalR client. */
var VERSION = "1.1.4";










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _dash_dash_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dash/dash.component */ "./src/app/admin/dash/dash.component.ts");
/* harmony import */ var _marque_marque_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marque/marque.component */ "./src/app/admin/marque/marque.component.ts");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./country/country.component */ "./src/app/admin/country/country.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./role/role.component */ "./src/app/admin/role/role.component.ts");
/* harmony import */ var _transmission_transmission_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transmission/transmission.component */ "./src/app/admin/transmission/transmission.component.ts");
/* harmony import */ var _carburant_carburant_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./carburant/carburant.component */ "./src/app/admin/carburant/carburant.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/user.component */ "./src/app/admin/user/user.component.ts");
/* harmony import */ var _model_model_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./model/model.component */ "./src/app/admin/model/model.component.ts");
/* harmony import */ var _advert_advert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./advert/advert.component */ "./src/app/admin/advert/advert.component.ts");
/* harmony import */ var _typevoiture_typevoiture_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./typevoiture/typevoiture.component */ "./src/app/admin/typevoiture/typevoiture.component.ts");
/* harmony import */ var _typeuser_typeuser_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./typeuser/typeuser.component */ "./src/app/admin/typeuser/typeuser.component.ts");















var routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: '', component: _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        children: [
            { path: '', redirectTo: 'dash', pathMatch: 'full' },
            { path: 'dash', component: _dash_dash_component__WEBPACK_IMPORTED_MODULE_4__["DashComponent"], data: { state: 'dash' } },
            { path: 'marque', component: _marque_marque_component__WEBPACK_IMPORTED_MODULE_5__["MarqueComponent"], data: { state: 'marque' } },
            { path: 'country', component: _country_country_component__WEBPACK_IMPORTED_MODULE_6__["CountryComponent"], data: { state: 'country' } },
            { path: 'role', component: _role_role_component__WEBPACK_IMPORTED_MODULE_7__["RoleComponent"], data: { state: 'role' } },
            { path: 'transmission', component: _transmission_transmission_component__WEBPACK_IMPORTED_MODULE_8__["TransmissionComponent"], data: { state: 'transmission' } },
            { path: 'carburant', component: _carburant_carburant_component__WEBPACK_IMPORTED_MODULE_9__["CarburantComponent"], data: { state: 'carburant' } },
            { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_10__["UserComponent"], data: { state: 'user' } },
            { path: 'typeuser', component: _typeuser_typeuser_component__WEBPACK_IMPORTED_MODULE_14__["TypeuserComponent"], data: { state: 'typeuser' } },
            { path: 'model', component: _model_model_component__WEBPACK_IMPORTED_MODULE_11__["ModelComponent"], data: { state: 'model' } },
            { path: 'advert', component: _advert_advert_component__WEBPACK_IMPORTED_MODULE_12__["AdvertComponent"], data: { state: 'advert' } },
            { path: 'typevoiture', component: _typevoiture_typevoiture_component__WEBPACK_IMPORTED_MODULE_13__["TypevoitureComponent"], data: { state: 'typevoiture' } },
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <mat-toolbar color=\"warn\" style=\"height: 50px\" class=\"fixed-top\">\n    <button mat-button style=\"height: 100%; border-radius: 0; margin-left: 5px;\" [routerLink]=\"['/home']\"\n      routerLinkActive=\"router-link-active\">\n      <mat-icon>home</mat-icon>\n    </button>\n    <button mat-button style=\"height: 100%; border-radius: 0; margin-left: 5px;\" [routerLink]=\"['/admin']\"\n      routerLinkActive=\"router-link-active\">\n      <mat-icon>admin</mat-icon>admin\n    </button>\n    <span class=\"example-spacer\"></span>\n    <button mat-button style=\"height: 100%; border-radius: 0; margin-left: 5px;\" [routerLink]=\"['/auth']\"\n      routerLinkActive=\"router-link-active\">\n      <mat-icon>about</mat-icon>auth\n    </button>\n  </mat-toolbar>\n</header>\n<mat-sidenav-container class=\"example-sidenav-container\" style=\" height: 100%;\">\n  <mat-sidenav #snav [mode]=\"(!mobileQuery.matches) ? 'side' : 'over'\" [opened]=\"opened && !mobileQuery.matches\"\n    [fixedInViewport]=\"true\" fixedTopGap=\"50\" style=\"box-shadow: 2px 2px 10px 1px rgba(0,0,0,.2);\">\n    <mat-nav-list class=\"list\" style=\"width: 180px; padding: 0;\">\n      <mat-divider></mat-divider>\n      <mat-list-item [routerLink]=\"['/admin/dash']\" (click)=\"currentSection = '/admin/dash'\"\n        [style.background-color]=\"(currentSection === '/admin/dash') ? 'rgba(73, 255, 185, 0.534)' : ''\">\n        <i class=\"fas fa-chart-line icon-size\"></i>\n        <span>Dash-board</span>\n        <span style=\"border-bottom: 5px solid rgba(73, 255, 185, 0.534);\"></span>\n      </mat-list-item>\n    </mat-nav-list>\n    <mat-accordion>\n      <mat-expansion-panel class=\"override\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Data\n          </mat-panel-title>\n\n        </mat-expansion-panel-header>\n        <mat-nav-list class=\"list\" style=\"width: 180px; padding: 0;\">\n          <mat-divider></mat-divider>\n\n          <mat-list-item [routerLink]=\"['/admin/advert']\" (click)=\"currentSection = '/admin/advert'\"\n            [style.background-color]=\"(currentSection === '/admin/advert') ? 'rgba(73, 255, 185, 0.534)' : ''\">\n            <i class=\"fas fa-chart-line icon-size\"></i>\n            <span>advert</span>\n            <span style=\"border-bottom: 5px solid rgba(73, 255, 185, 0.534);\"></span>\n          </mat-list-item>\n          <mat-list-item [routerLink]=\"['/admin/role']\" (click)=\"currentSection = '/admin/role'\"\n            [style.background-color]=\"(currentSection === '/admin/role') ? 'rgba(73, 255, 185, 0.534)' : ''\">\n            <i class=\"fas fa-chart-line icon-size\"></i>\n            <span>Role</span>\n            <span style=\"border-bottom: 5px solid rgba(73, 255, 185, 0.534);\"></span>\n          </mat-list-item>\n          <mat-list-item [routerLink]=\"['/admin/user']\" (click)=\"currentSection = '/admin/user'\"\n            [style.background-color]=\"(currentSection === '/admin/user') ? 'rgba(73, 255, 185, 0.534)' : ''\">\n            <i class=\"fas fa-chart-line icon-size\"></i>\n            <span>user</span>\n            <span style=\"border-bottom: 5px solid rgba(73, 255, 185, 0.534);\"></span>\n          </mat-list-item>\n          <mat-list-item [routerLink]=\"['/admin/typeuser']\" (click)=\"currentSection = '/admin/typeuser'\"\n            [style.background-color]=\"(currentSection === '/admin/typeuser') ? 'rgba(73, 255, 185, 0.534)' : ''\">\n            <i class=\"fas fa-chart-line icon-size\"></i>\n            <span>typeuser</span>\n            <span style=\"border-bottom: 5px solid rgba(73, 255, 185, 0.534);\"></span>\n          </mat-list-item>\n          <mat-list-item [routerLink]=\"['/admin/country']\" (click)=\"currentSection = '/admin/country'\"\n            [style.background-color]=\"(currentSection === '/admin/country') ? 'rgba(73, 255, 185, 0.534)' : ''\">\n            <i class=\"fas fa-chart-line icon-size\"></i>\n            <span>Country</span>\n            <span style=\"border-bottom: 5px solid rgba(73, 255, 185, 0.534);\"></span>\n          </mat-list-item>\n          <mat-list-item [routerLink]=\"['/admin/model']\" (click)=\"currentSection = '/admin/model'\"\n            [style.background-color]=\"(currentSection === '/admin/model') ? 'rgba(73, 255, 185, 0.534)' : ''\">\n            <i class=\"fas fa-chart-line icon-size\"></i>\n            <span>model</span>\n            <span style=\"border-bottom: 5px solid rgba(73, 255, 185, 0.534);\"></span>\n          </mat-list-item>\n\n          <mat-list-item [routerLink]=\"['/admin/typevoiture']\" (click)=\"currentSection = '/admin/typevoiture'\"\n            [style.background-color]=\"(currentSection === '/admin/typevoiture') ? 'rgba(73, 255, 185, 0.534)' : ''\">\n            <i class=\"fas fa-chart-line icon-size\"></i>\n            <span>typevoiture</span>\n            <span style=\"border-bottom: 5px solid rgba(73, 255, 185, 0.534);\"></span>\n          </mat-list-item>\n          <mat-list-item [routerLink]=\"['/admin/marque']\" (click)=\"currentSection = '/admin/marque'\"\n            [style.background-color]=\"(currentSection === '/admin/marque') ? 'rgba(73, 255, 185, 0.534)' : ''\">\n            <i class=\"fas fa-chart-line icon-size\"></i>\n            <span>Marque</span>\n            <span style=\"border-bottom: 5px solid rgba(73, 255, 185, 0.534);\"></span>\n          </mat-list-item>\n          <mat-list-item [routerLink]=\"['/admin/transmission']\" (click)=\"currentSection = '/admin/transmission'\"\n            [style.background-color]=\"(currentSection === '/admin/transmission') ? 'rgba(73, 255, 185, 0.534)' : ''\">\n            <i class=\"fas fa-chart-line icon-size\"></i>\n            <span>transmission</span>\n            <span style=\"border-bottom: 5px solid rgba(73, 255, 185, 0.534);\"></span>\n          </mat-list-item>\n          <mat-list-item [routerLink]=\"['/admin/carburant']\" (click)=\"currentSection = '/admin/carburant'\"\n            [style.background-color]=\"(currentSection === '/admin/carburant') ? 'rgba(73, 255, 185, 0.534)' : ''\">\n            <i class=\"fas fa-chart-line icon-size\"></i>\n            <span>carburant</span>\n            <span style=\"border-bottom: 5px solid rgba(73, 255, 185, 0.534);\"></span>\n          </mat-list-item>\n        </mat-nav-list>\n      </mat-expansion-panel>\n      <mat-expansion-panel class=\"override\" (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            ...\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <p>I'm visible because I am open</p>\n      </mat-expansion-panel>\n    </mat-accordion>\n    <!-- <mat-nav-list style=\"width: 180px; padding: 0;\">\n      <div style=\"height:180px; padding: 0;\">\n        <img matLine [src]=\"userImg\" alt=\"mourabit\" width=\"180px\" height=\"180px\">\n\n        \n      </div>\n      <mat-divider></mat-divider>\n      <mat-list-item [routerLink]=\"['/client/dash']\" (click)=\"currentSection = '/client/dash'\"\n        [ngStyle]=\"{'background-color': (currentSection === '/client/dash') ? 'rgba(73, 255, 185, 0.534)' : ''}\">\n        <i class=\"fas fa-chart-line\" style=\"font-size: 20px;margin-right: 5px;\"></i>\n        <span>Dash-board</span>\n        <span style=\"border-bottom: 5px solid rgba(73, 255, 185, 0.534);\"></span>\n      </mat-list-item>\n      <mat-divider></mat-divider>\n      <mat-list-item [routerLink]=\"['/client/add']\" (click)=\"currentSection = '/client/add'\"\n        [ngStyle]=\"{'background-color': (currentSection === '/client/add') ? 'rgba(73, 255, 185, 0.534)' : ''}\">\n        <i class=\"fas fa-chart-line\" style=\"font-size: 20px;margin-right: 5px;\"></i>\n        <span>Ajouter Demande</span>\n        <span style=\"border-bottom: 5px solid rgba(73, 255, 185, 0.534);\"></span>\n      </mat-list-item>\n      <mat-list-item [routerLink]=\"['/client/demande']\" (click)=\"currentSection = '/client/demande'\"\n        [ngStyle]=\"{'background-color': (currentSection === '/client/demande') ? 'rgba(73, 255, 185, 0.534)' : ''}\">\n        <i class=\"fas fa-chart-line\" style=\"font-size: 20px;margin-right: 5px;\"></i>\n        <span>Vos demandes</span>\n        <span style=\"border-bottom: 5px solid rgba(73, 255, 185, 0.534);\"></span>\n      </mat-list-item>\n\n      <mat-divider></mat-divider>\n      <mat-list-item [routerLink]=\"['/client/actualite']\" (click)=\"currentSection = '/client/actualite'\"\n        [ngStyle]=\"{'background-color': (currentSection === '/client/actualite') ? 'rgba(73, 255, 185, 0.534)' : ''}\">\n        <i class=\"fas fa-file-word\" style=\"font-size: 20px;margin-right: 5px;\"></i>\n        <span>Actualite</span>\n      </mat-list-item>\n\n      <mat-list-item [routerLink]=\"['/client/archive-envoi']\" (click)=\"currentSection = '/client/archive-envoi'\"\n        [ngStyle]=\"{'background-color': (currentSection === '/client/archive-envoi') ? 'rgba(73, 255, 185, 0.534)' : ''}\">\n        <i class=\"fas fa-file-word\" style=\"font-size: 20px;margin-right: 5px;\"></i>\n        <span>Archive envoi</span>\n      </mat-list-item>\n     \n      <mat-divider></mat-divider>\n      \n    </mat-nav-list> -->\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <main style=\"margin-top: 65px;\" [@routerTransition]=\"getState(o)\">\n      <router-outlet #o=\"outlet\"></router-outlet>\n    </main>\n\n    <!-- <footer>\n      <mat-toolbar class=\"mt-2 text\" color=\"primary\">\n        <mat-toolbar-row style=\"height: 70px\">\n          <span style=\"margin-left: auto; margin-right: auto;\"> © {{ d | date:\"dd/MMMM/yyyy\" }} - Yaasin MOURABIT</span>\n        </mat-toolbar-row>\n      </mat-toolbar>\n    </footer> -->\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field-wrapper {\n  padding-bottom: 0px; }\n\n.mat-elevation-z6, mat-toolbar-row {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.example-is-mobile .example-toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */ }\n\nh1.example-app-name {\n  margin-left: 8px; }\n\n.example-sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  flex: 1; }\n\n.example-is-mobile .example-sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\n  flex: 1 0 auto; }\n\n.content-wrap {\n  padding-top: 80px; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\nmat-sidenav {\n  box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.2); }\n\nbutton:hover {\n  background-color: rgba(247, 38, 212, 0.856); }\n\n.override {\n  border-top-right-radius: 0 !important;\n  border-top-left-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n  border-bottom-left-radius: 0 !important;\n  border-radius: 0 !important;\n  width: 180px; }\n\n.icon-size {\n  font-size: 20px;\n  margin-right: 5px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vRDpcXGRldlxcYXNwVGVzdEFwcFxcbXZjL3NyY1xcYXBwXFxhZG1pblxcYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBbUIsRUFDcEI7O0FBQ0Q7RUFDRSw0SEFBMkgsRUFDNUg7O0FBRUQ7RUFDRSxnQkFBZTtFQUNmLCtFQUErRSxFQUVoRjs7QUFFRDtFQUNFLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFOzZGQUN5RjtFQUN6RixRQUFPLEVBQ1I7O0FBRUQ7RUFDRTtrRUFDOEQ7RUFDOUQsZUFBYyxFQUNmOztBQUNEO0VBQ0Usa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsZUFBYyxFQUNmOztBQUVEO0VBQ0UsaURBQTRDLEVBQzdDOztBQUVEO0VBQ0UsNENBQTJDLEVBQzVDOztBQUVEO0VBQ0Usc0NBQXFDO0VBQ3JDLHFDQUFvQztFQUNwQyx5Q0FBd0M7RUFDeEMsd0NBQXVDO0VBQ3ZDLDRCQUEyQjtFQUMzQixhQUFZLEVBRWI7O0FBRUQ7RUFDRSxnQkFBZTtFQUFDLGtCQUFpQixFQUNsQyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDs7XHJcbiAgfVxyXG4gIC5tYXQtZWxldmF0aW9uLXo2ICxtYXQtdG9vbGJhci1yb3cge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXHJcbiAgICAvLyB6LWluZGV4OiAyO1xyXG4gIH1cclxuICBcclxuICBoMS5leGFtcGxlLWFwcC1uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcclxuICAgICAgIGNhdXNlcyBgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+YCB0byBhY3QgYXMgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBkZXNrdG9wIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcclxuICAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXHJcbiAgICBmbGV4OiAxIDAgYXV0bztcclxuICB9XHJcbiAgLmNvbnRlbnQtd3JhcCB7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuICBcclxuICBtYXQtc2lkZW5hdntcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCAtMXB4IHJnYmEoMCwwLDAsLjIpO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ3LCAzOCwgMjEyLCAwLjg1Nik7XHJcbiAgfVxyXG5cclxuICAub3ZlcnJpZGV7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50OyBcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5pY29uLXNpemUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O21hcmdpbi1yaWdodDogNXB4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/animations */ "./src/app/utils/animations.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _shared_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/session.service */ "./src/app/shared/session.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_notify_hub_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/notify-hub.service */ "./src/app/shared/notify-hub.service.ts");








var AdminComponent = /** @class */ (function () {
    function AdminComponent(overlayContainer, changeDetectorRef, media, router, session, notify, route) {
        this.overlayContainer = overlayContainer;
        this.router = router;
        this.session = session;
        this.notify = notify;
        this.route = route;
        this.panelOpenState = false;
        this.currentSection = 'section1';
        this.userImg = '../../assets/picto-logo.png';
        this.opened = true;
        this.totalNotif = 0;
        // define the limite size
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        // mobileQuery.matches is listen for the size
        // wa can now use mobileQuery.matches booleen in the template
        this.mobileQuery.addListener(function (e) { return changeDetectorRef.detectChanges(); });
        this.currentSection = this.router.url.toString();
        //
        // notify.noteHubCnx();
    }
    AdminComponent.prototype.ngOnInit = function () { };
    AdminComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            animations: [_utils_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"]],
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["MediaMatcher"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _shared_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            _shared_notify_hub_service__WEBPACK_IMPORTED_MODULE_7__["NotifyHubService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _dash_dash_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dash/dash.component */ "./src/app/admin/dash/dash.component.ts");
/* harmony import */ var _mat_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mat.module */ "./src/app/mat.module.ts");
/* harmony import */ var _utils_loader_loader_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/loader/loader.module */ "./src/app/utils/loader/loader.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _marque_marque_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./marque/marque.component */ "./src/app/admin/marque/marque.component.ts");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./country/country.component */ "./src/app/admin/country/country.component.ts");
/* harmony import */ var _advert_advert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./advert/advert.component */ "./src/app/admin/advert/advert.component.ts");
/* harmony import */ var _carburant_carburant_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./carburant/carburant.component */ "./src/app/admin/carburant/carburant.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./role/role.component */ "./src/app/admin/role/role.component.ts");
/* harmony import */ var _transmission_transmission_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./transmission/transmission.component */ "./src/app/admin/transmission/transmission.component.ts");
/* harmony import */ var _typevoiture_typevoiture_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./typevoiture/typevoiture.component */ "./src/app/admin/typevoiture/typevoiture.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/user.component */ "./src/app/admin/user/user.component.ts");
/* harmony import */ var _model_model_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./model/model.component */ "./src/app/admin/model/model.component.ts");
/* harmony import */ var _user_role_user_role_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user-role/user-role.component */ "./src/app/admin/user-role/user-role.component.ts");
/* harmony import */ var _typeuser_typeuser_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./typeuser/typeuser.component */ "./src/app/admin/typeuser/typeuser.component.ts");





















var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
                _dash_dash_component__WEBPACK_IMPORTED_MODULE_5__["DashComponent"],
                _marque_marque_component__WEBPACK_IMPORTED_MODULE_10__["MarqueComponent"],
                _country_country_component__WEBPACK_IMPORTED_MODULE_11__["CountryComponent"],
                _advert_advert_component__WEBPACK_IMPORTED_MODULE_12__["AdvertComponent"],
                _carburant_carburant_component__WEBPACK_IMPORTED_MODULE_13__["CarburantComponent"],
                _role_role_component__WEBPACK_IMPORTED_MODULE_14__["RoleComponent"],
                _transmission_transmission_component__WEBPACK_IMPORTED_MODULE_15__["TransmissionComponent"],
                _typevoiture_typevoiture_component__WEBPACK_IMPORTED_MODULE_16__["TypevoitureComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"],
                _model_model_component__WEBPACK_IMPORTED_MODULE_18__["ModelComponent"],
                _user_role_user_role_component__WEBPACK_IMPORTED_MODULE_19__["UserRoleComponent"],
                _typeuser_typeuser_component__WEBPACK_IMPORTED_MODULE_20__["TypeuserComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"],
                _mat_module__WEBPACK_IMPORTED_MODULE_6__["MatModule"],
                _utils_loader_loader_module__WEBPACK_IMPORTED_MODULE_7__["LoaderModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            ],
            entryComponents: [
                _user_role_user_role_component__WEBPACK_IMPORTED_MODULE_19__["UserRoleComponent"]
            ],
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/advert/advert.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/advert/advert.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"m-nav-trimdown\" role=\"navigation\">\n  <ul class=\"m-nav-mobile-menu-group\">\n    <li> <a href=\"/fr/products/?nc2=h_mo\">Produits</a> </li>\n    <li> <a href=\"/fr/solutions/?nc2=h_mo\">Solutions</a> </li>\n    <li> <a href=\"/fr/pricing/?nc2=h_mo\">Tarification</a> </li>\n    <li> <a href=\"/fr/what-is-aws/?nc2=h_mo\">Introduction &agrave; AWS</a> </li>\n    <li> <a href=\"/fr/getting-started/?nc2=h_mo\">Mise en route</a> </li>\n    <li> <a href=\"/fr/documentation/?nc2=h_mo\">Documentation</a> </li>\n    <li> <a href=\"/fr/training/?nc2=h_mo\">Formation et certification</a> </li>\n    <li> <a href=\"/fr/developer/?nc2=h_mo\">Centre pour d&eacute;veloppeurs</a> </li>\n    <li> <a href=\"/fr/solutions/case-studies/?nc2=h_mo\">T&eacute;moignages de r&eacute;ussite</a> </li>\n    <li> <a href=\"/fr/partners/?nc2=h_mo\">R&eacute;seau de partenaires</a> </li>\n    <li> <a href=\"https://aws.amazon.com/marketplace/?nc2=h_mo\">AWS&nbsp;Marketplace</a> </li>\n    <li> <a href=\"https://console.aws.amazon.com/support/home?nc2=h_ql_cu\">Support</a> </li>\n    <li> <a href=\"https://console.aws.amazon.com/console/home\">Se connecter &agrave; la console</a> </li>\n    <li> <a href=\"/fr/console/mobile/\">T&eacute;l&eacute;charger l'application mobile</a> </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/admin/advert/advert.component.scss":
/*!****************************************************!*\
  !*** ./src/app/admin/advert/advert.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkdmVydC9hZHZlcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/advert/advert.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/advert/advert.component.ts ***!
  \**************************************************/
/*! exports provided: AdvertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertComponent", function() { return AdvertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdvertComponent = /** @class */ (function () {
    function AdvertComponent() {
    }
    AdvertComponent.prototype.ngOnInit = function () {
    };
    AdvertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-advert',
            template: __webpack_require__(/*! ./advert.component.html */ "./src/app/admin/advert/advert.component.html"),
            styles: [__webpack_require__(/*! ./advert.component.scss */ "./src/app/admin/advert/advert.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdvertComponent);
    return AdvertComponent;
}());



/***/ }),

/***/ "./src/app/admin/carburant/carburant.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/carburant/carburant.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button mat-raised-button (click)=\"openDialogForAddEdit()\">Ajouter</button> -->\n<div class=\"container \">\n    <mat-card style=\"border-radius: 0;\">\n      <form [formGroup]=\"myForm\" (ngSubmit)=\"submit(myForm)\">\n        <div class=\"row\">\n          <div class=\"ml-3\">\n            <mat-form-field>\n              <input matInput formControlName=\"name\" placeholder=\"Name\" required>\n            </mat-form-field>\n          </div>\n          &nbsp;\n          <div class=\"ml-3 mt-3\">\n            <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"!myForm.valid\">\n              <mat-icon>{{!isEdit ? 'add' : 'create'}}</mat-icon>\n            </button>\n            &nbsp;\n            <button mat-stroked-button type=\"button\" (click)=\"reset()\">\n              <mat-icon>refresh</mat-icon>\n            </button>\n          </div>\n  \n  \n        </div>\n      </form>\n    </mat-card>\n  \n  \n  \n    <div class=\"example-container mat-elevation-z8 mt-3 mb-3\">\n      <div class=\"example-loading-shade\"\n        *ngIf=\"dataSourceHandler.isLoadingResults || dataSourceHandler.isRateLimitReached\">\n        <mat-spinner *ngIf=\"dataSourceHandler.isLoadingResults\"></mat-spinner>\n        <div class=\"example-rate-limit-reached\" *ngIf=\"dataSourceHandler.isRateLimitReached\">\n          API rate limit has been reached. It will be reset in one minute.\n        </div>\n      </div>\n      <table mat-table #table [dataSource]=\"dataSource\" aria-label=\"Elements\">\n        <ng-container [matColumnDef]=\"columnDefs[0].columnDef\">\n          <th mat-header-cell *matHeaderCellDef>{{columnDefs[0].headName}}</th>\n          <td mat-cell *matCellDef=\"let row\">{{row[columnDefs[0].columnDef]}}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"option\" style=\"flex-direction: row-reverse;\">\n          <th mat-header-cell *matHeaderCellDef> Option </th>\n          <td mat-cell *matCellDef=\"let row\">\n  \n            <div class=\"button-row\">\n              <button mat-icon-button color=\"primary\" (click)=\"edit(row)\">\n                <mat-icon>create</mat-icon>\n              </button>\n              <button mat-icon-button color=\"warn\" (click)=\"delete(row)\">\n                <mat-icon>delete_sweep</mat-icon>\n              </button>\n            </div>\n          </td>\n        </ng-container>\n  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n  \n      <mat-paginator #paginator [length]=\"dataSourceHandler.resultsLength\" pageIndex=\"0\" pageSize=\"15\"\n        [pageSizeOptions]=\"[5, 25, 50, 100, 250]\">\n      </mat-paginator>\n    </div>\n  \n  </div>"

/***/ }),

/***/ "./src/app/admin/carburant/carburant.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/carburant/carburant.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NhcmJ1cmFudC9jYXJidXJhbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/carburant/carburant.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/carburant/carburant.component.ts ***!
  \********************************************************/
/*! exports provided: CarburantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarburantComponent", function() { return CarburantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_table_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/table-datasource */ "./src/app/admin/shared/table-datasource.ts");
/* harmony import */ var _app_shared_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/shared/models */ "./src/app/shared/models.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_Carburant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/Carburant.service */ "./src/app/admin/shared/Carburant.service.ts");







var CarburantComponent = /** @class */ (function () {
    function CarburantComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        // @ViewChild(MatSort) sort: MatSort;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataSource = [];
        //
        this.columnDefs = [
            { columnDef: 'name', headName: 'name' },
            { columnDef: 'option', headName: 'Option' },
        ];
        this.i = 0;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = [
            this.columnDefs[this.i++].columnDef,
            this.columnDefs[this.i++].columnDef,
        ];
        this.o = new _app_shared_models__WEBPACK_IMPORTED_MODULE_4__["Carburant"]();
        this.isEdit = false;
    }
    CarburantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSourceHandler = new _shared_table_datasource__WEBPACK_IMPORTED_MODULE_3__["TableDataSource"](this.paginator, this.service, this.update);
        // data is subscribed now , every event happen the will change and ofcource the datasource for table
        this.dataSourceHandler.methode().subscribe(function (data) {
            _this.dataSource = data;
            // console.log(data);
        });
        this.createForm();
    };
    // reset input
    CarburantComponent.prototype.createForm = function () {
        this.myForm = this.fb.group({
            id: this.o.id,
            name: [this.o.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    CarburantComponent.prototype.resetForm = function () {
        this.o = new _app_shared_models__WEBPACK_IMPORTED_MODULE_4__["Carburant"]();
        this.myForm.reset({
            id: this.o.id,
            name: this.o.name,
        });
    };
    CarburantComponent.prototype.submit = function (myForm) {
        var obj = myForm.value;
        if (!this.isEdit) {
            this.post(obj);
        }
        else {
            this.put(obj);
        }
    };
    CarburantComponent.prototype.post = function (obj) {
        var _this = this;
        console.log(obj);
        this.service.post(obj).subscribe(function (r) {
            _this.update.next(true);
            console.log(r);
            _this.resetForm();
        }, function (error) {
            console.log(error);
        });
    };
    CarburantComponent.prototype.put = function (obj) {
        var _this = this;
        this.service.put(obj).subscribe(function (r) {
            _this.update.next(true);
            console.log(r);
            _this.isEdit = false;
            _this.resetForm();
            _this.myForm.get('id').enable();
        }, function (error) {
            console.log(error);
        });
    };
    CarburantComponent.prototype.delete = function (o) {
        var _this = this;
        this.service.delete(o.id).subscribe(function (r) {
            _this.update.next(true);
        }, function (error) {
            console.log(error);
        });
    };
    CarburantComponent.prototype.edit = function (o) {
        console.log(o);
        this.o = o;
        this.isEdit = true;
        this.myForm.get('id').disable();
        this.createForm();
    };
    CarburantComponent.prototype.reset = function () {
        this.resetForm();
        this.myForm.get('id').enable();
        this.isEdit = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], CarburantComponent.prototype, "paginator", void 0);
    CarburantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carburant',
            template: __webpack_require__(/*! ./carburant.component.html */ "./src/app/admin/carburant/carburant.component.html"),
            styles: [__webpack_require__(/*! ./carburant.component.scss */ "./src/app/admin/carburant/carburant.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_Carburant_service__WEBPACK_IMPORTED_MODULE_6__["CarburantService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CarburantComponent);
    return CarburantComponent;
}());



/***/ }),

/***/ "./src/app/admin/country/country.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/country/country.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button mat-raised-button (click)=\"openDialogForAddEdit()\">Ajouter</button> -->\n<div class=\"container \">\n    <mat-card style=\"border-radius: 0;\">\n      <form [formGroup]=\"myForm\" (ngSubmit)=\"submit(myForm)\">\n        <div class=\"row\">\n          <div class=\"ml-3\">\n            <mat-form-field>\n              <input matInput formControlName=\"name\" placeholder=\"Name\" required>\n            </mat-form-field>\n            &nbsp;\n            <mat-form-field>\n              <input matInput formControlName=\"imageUrl\" placeholder=\"Image Url\" required>\n            </mat-form-field>\n          </div>\n          &nbsp;\n          <div class=\"ml-3 mt-3\">\n            <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"!myForm.valid\">\n              <mat-icon>{{!isEdit ? 'add' : 'create'}}</mat-icon>\n            </button>\n            &nbsp;\n            <button mat-stroked-button type=\"button\" (click)=\"reset()\">\n                <mat-icon>refresh</mat-icon>\n            </button>\n          </div>\n  \n  \n        </div>\n      </form>\n    </mat-card>\n  \n  \n  \n    <div class=\"example-container mat-elevation-z8 mt-3 mb-3\">\n      <div class=\"example-loading-shade\"\n        *ngIf=\"dataSourceHandler.isLoadingResults || dataSourceHandler.isRateLimitReached\">\n        <mat-spinner *ngIf=\"dataSourceHandler.isLoadingResults\"></mat-spinner>\n        <div class=\"example-rate-limit-reached\" *ngIf=\"dataSourceHandler.isRateLimitReached\">\n          API rate limit has been reached. It will be reset in one minute.\n        </div>\n      </div>\n      <table mat-table #table [dataSource]=\"dataSource\" aria-label=\"Elements\">\n          <ng-container [matColumnDef]=\"columnDefs[0].columnDef\">\n            <th mat-header-cell *matHeaderCellDef>{{columnDefs[0].headName}}</th>\n            <td mat-cell *matCellDef=\"let row\">{{row[columnDefs[0].columnDef]}}</td>\n          </ng-container>\n          <ng-container [matColumnDef]=\"columnDefs[1].columnDef\">\n              <th mat-header-cell *matHeaderCellDef>{{columnDefs[1].headName}}</th>\n              <td mat-cell *matCellDef=\"let row\">{{row[columnDefs[1].columnDef]}}</td>\n            </ng-container>\n          <ng-container matColumnDef=\"option\" >\n            <th mat-header-cell *matHeaderCellDef style=\"position: absolute; right: 2px;\"> Option </th>\n            <td mat-cell *matCellDef=\"let row\">\n    \n              <div class=\"button-row\">\n                <button mat-icon-button color=\"primary\" (click)=\"edit(row)\">\n                  <mat-icon>create</mat-icon>\n                </button>\n                <button mat-icon-button color=\"warn\" (click)=\"delete(row)\">\n                  <mat-icon>delete_sweep</mat-icon>\n                </button>\n              </div>\n            </td>\n          </ng-container>\n    \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n  \n      <mat-paginator #paginator [length]=\"dataSourceHandler.resultsLength\" pageIndex=\"0\" pageSize=\"15\"\n        [pageSizeOptions]=\"[5, 25, 50, 100, 250]\">\n      </mat-paginator>\n    </div>\n  \n  </div>"

/***/ }),

/***/ "./src/app/admin/country/country.component.scss":
/*!******************************************************!*\
  !*** ./src/app/admin/country/country.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvdW50cnkvY291bnRyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/country/country.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/country/country.component.ts ***!
  \****************************************************/
/*! exports provided: CountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryComponent", function() { return CountryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_table_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/table-datasource */ "./src/app/admin/shared/table-datasource.ts");
/* harmony import */ var _app_shared_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/shared/models */ "./src/app/shared/models.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_country_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/country.service */ "./src/app/admin/shared/country.service.ts");







var CountryComponent = /** @class */ (function () {
    function CountryComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        // @ViewChild(MatSort) sort: MatSort;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataSource = [];
        //
        this.columnDefs = [
            { columnDef: 'name', headName: 'name' },
            { columnDef: 'imageUrl', headName: 'Image url' },
            { columnDef: 'option', headName: 'Option' },
        ];
        this.i = 0;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = [
            this.columnDefs[this.i++].columnDef,
            this.columnDefs[this.i++].columnDef,
            this.columnDefs[this.i++].columnDef,
        ];
        this.o = new _app_shared_models__WEBPACK_IMPORTED_MODULE_4__["Country"]();
        this.isEdit = false;
    }
    CountryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSourceHandler = new _shared_table_datasource__WEBPACK_IMPORTED_MODULE_3__["TableDataSource"](this.paginator, this.service, this.update);
        // data is subscribed now , every event happen the will change and ofcource the datasource for table
        this.dataSourceHandler.methode().subscribe(function (data) {
            _this.dataSource = data;
            // console.log(data);
        });
        this.createForm();
    };
    // reset input
    CountryComponent.prototype.createForm = function () {
        this.myForm = this.fb.group({
            id: this.o.id,
            name: [this.o.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            imageUrl: [this.o.imageUrl, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    CountryComponent.prototype.resetForm = function () {
        this.o = new _app_shared_models__WEBPACK_IMPORTED_MODULE_4__["Country"]();
        this.myForm.reset({
            id: this.o.id,
            name: this.o.name,
        });
    };
    CountryComponent.prototype.submit = function (myForm) {
        var obj = myForm.value;
        if (!this.isEdit) {
            this.post(obj);
        }
        else {
            this.put(obj);
        }
    };
    CountryComponent.prototype.post = function (obj) {
        var _this = this;
        console.log(obj);
        this.service.post(obj).subscribe(function (r) {
            _this.update.next(true);
            console.log(r);
            _this.resetForm();
        }, function (error) {
            console.log(error);
        });
    };
    CountryComponent.prototype.put = function (obj) {
        var _this = this;
        this.service.put(obj).subscribe(function (r) {
            _this.update.next(true);
            console.log(r);
            _this.isEdit = false;
            _this.resetForm();
            _this.myForm.get('id').enable();
        }, function (error) {
            console.log(error);
        });
    };
    CountryComponent.prototype.delete = function (o) {
        var _this = this;
        this.service.delete(o.id).subscribe(function (r) {
            _this.update.next(true);
        }, function (error) {
            console.log(error);
        });
    };
    CountryComponent.prototype.edit = function (o) {
        console.log(o);
        this.o = o;
        this.isEdit = true;
        this.myForm.get('id').disable();
        this.createForm();
    };
    CountryComponent.prototype.reset = function () {
        this.resetForm();
        this.myForm.get('id').enable();
        this.isEdit = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], CountryComponent.prototype, "paginator", void 0);
    CountryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-country',
            template: __webpack_require__(/*! ./country.component.html */ "./src/app/admin/country/country.component.html"),
            styles: [__webpack_require__(/*! ./country.component.scss */ "./src/app/admin/country/country.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_country_service__WEBPACK_IMPORTED_MODULE_6__["CountryService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CountryComponent);
    return CountryComponent;
}());



/***/ }),

/***/ "./src/app/admin/dash/dash.component.html":
/*!************************************************!*\
  !*** ./src/app/admin/dash/dash.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dash works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/dash/dash.component.scss":
/*!************************************************!*\
  !*** ./src/app/admin/dash/dash.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2gvZGFzaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/dash/dash.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/dash/dash.component.ts ***!
  \**********************************************/
/*! exports provided: DashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashComponent", function() { return DashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashComponent = /** @class */ (function () {
    function DashComponent() {
    }
    DashComponent.prototype.ngOnInit = function () {
    };
    DashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dash',
            template: __webpack_require__(/*! ./dash.component.html */ "./src/app/admin/dash/dash.component.html"),
            styles: [__webpack_require__(/*! ./dash.component.scss */ "./src/app/admin/dash/dash.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashComponent);
    return DashComponent;
}());



/***/ }),

/***/ "./src/app/admin/marque/marque.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/marque/marque.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button mat-raised-button (click)=\"openDialogForAddEdit()\">Ajouter</button> -->\n<div class=\"container \">\n  <mat-card style=\"border-radius: 0;\">\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"submit(myForm)\">\n      <div class=\"row\">\n        <div class=\"ml-3\">\n          <mat-form-field>\n            <input matInput formControlName=\"name\" placeholder=\"Name\" required>\n          </mat-form-field>\n          &nbsp;\n          <mat-form-field>\n            <input matInput formControlName=\"imageUrl\" placeholder=\"Image Url\" required>\n          </mat-form-field>\n          &nbsp;\n          <mat-form-field>\n            <mat-select placeholder=\"Country\" formControlName=\"idCountry\">\n              <mat-option value=\"\">...</mat-option>\n              <mat-option *ngFor=\"let o of countries | async\" [value]=\"o.id\">{{o.name}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        &nbsp;\n        <div class=\"ml-3 mt-3\">\n          <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"!myForm.valid\">\n            <mat-icon>{{!isEdit ? 'add' : 'create'}}</mat-icon>\n          </button>\n          &nbsp;\n          <button mat-stroked-button type=\"button\" (click)=\"reset()\">\n            <mat-icon>refresh</mat-icon>\n          </button>\n        </div>\n\n\n      </div>\n    </form>\n  </mat-card>\n\n\n\n  <div class=\"example-container mat-elevation-z8 mt-3 mb-3\">\n    <div class=\"example-loading-shade\"\n      *ngIf=\"dataSourceHandler.isLoadingResults || dataSourceHandler.isRateLimitReached\">\n      <mat-spinner *ngIf=\"dataSourceHandler.isLoadingResults\"></mat-spinner>\n      <div class=\"example-rate-limit-reached\" *ngIf=\"dataSourceHandler.isRateLimitReached\">\n        API rate limit has been reached. It will be reset in one minute.\n      </div>\n    </div>\n    <table mat-table #table [dataSource]=\"dataSource\" aria-label=\"Elements\">\n      <ng-container [matColumnDef]=\"columnDefs[0].columnDef\">\n        <th mat-header-cell *matHeaderCellDef>{{columnDefs[0].headName}}</th>\n        <td mat-cell *matCellDef=\"let row\">{{row[columnDefs[0].columnDef]}}</td>\n      </ng-container>\n      <ng-container [matColumnDef]=\"columnDefs[1].columnDef\">\n        <th mat-header-cell *matHeaderCellDef>{{columnDefs[1].headName}}</th>\n        <td mat-cell *matCellDef=\"let row\">{{row[columnDefs[1].columnDef]}}</td>\n      </ng-container>\n      <ng-container [matColumnDef]=\"columnDefs[2].columnDef\">\n          <th mat-header-cell *matHeaderCellDef>{{columnDefs[2].headName}}</th>\n          <td mat-cell *matCellDef=\"let row\">{{row[columnDefs[2].columnDef].name}}</td>\n        </ng-container>\n      <ng-container matColumnDef=\"option\" style=\"flex-direction: row-reverse;\">\n        <th mat-header-cell *matHeaderCellDef> Option </th>\n        <td mat-cell *matCellDef=\"let row\">\n\n          <div class=\"button-row\">\n            <button mat-icon-button color=\"primary\" (click)=\"edit(row)\">\n              <mat-icon>create</mat-icon>\n            </button>\n            <button mat-icon-button color=\"warn\" (click)=\"delete(row)\">\n              <mat-icon>delete_sweep</mat-icon>\n            </button>\n          </div>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator #paginator [length]=\"dataSourceHandler.resultsLength\" pageIndex=\"0\" pageSize=\"15\"\n      [pageSizeOptions]=\"[5, 25, 50, 100, 250]\">\n    </mat-paginator>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/marque/marque.component.scss":
/*!****************************************************!*\
  !*** ./src/app/admin/marque/marque.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21hcnF1ZS9tYXJxdWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/marque/marque.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/marque/marque.component.ts ***!
  \**************************************************/
/*! exports provided: MarqueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarqueComponent", function() { return MarqueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_table_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/table-datasource */ "./src/app/admin/shared/table-datasource.ts");
/* harmony import */ var _app_shared_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/shared/models */ "./src/app/shared/models.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_marque_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/marque.service */ "./src/app/admin/shared/marque.service.ts");
/* harmony import */ var _shared_country_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/country.service */ "./src/app/admin/shared/country.service.ts");








var MarqueComponent = /** @class */ (function () {
    function MarqueComponent(service, serCountry, fb) {
        this.service = service;
        this.serCountry = serCountry;
        this.fb = fb;
        // @ViewChild(MatSort) sort: MatSort;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataSource = [];
        //
        this.columnDefs = [
            { columnDef: 'name', headName: 'name' },
            { columnDef: 'imageUrl', headName: 'Image url' },
            { columnDef: 'country', headName: 'country' },
            { columnDef: 'option', headName: 'Option' },
        ];
        this.i = 0;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = [
            this.columnDefs[this.i++].columnDef,
            this.columnDefs[this.i++].columnDef,
            this.columnDefs[this.i++].columnDef,
            this.columnDefs[this.i++].columnDef,
        ];
        this.o = new _app_shared_models__WEBPACK_IMPORTED_MODULE_4__["Marque"]();
        this.isEdit = false;
        this.countries = this.serCountry.get();
    }
    MarqueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSourceHandler = new _shared_table_datasource__WEBPACK_IMPORTED_MODULE_3__["TableDataSource"](this.paginator, this.service, this.update);
        // data is subscribed now , every event happen the will change and ofcource the datasource for table
        this.dataSourceHandler.methode().subscribe(function (data) {
            _this.dataSource = data;
            // console.log(data);
        });
        this.createForm();
    };
    // reset input
    MarqueComponent.prototype.createForm = function () {
        this.myForm = this.fb.group({
            id: this.o.id,
            name: [this.o.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            idCountry: [this.o.idCountry, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            imageUrl: [this.o.imageUrl, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    MarqueComponent.prototype.resetForm = function () {
        this.o = new _app_shared_models__WEBPACK_IMPORTED_MODULE_4__["Marque"]();
        this.myForm.reset({
            id: this.o.id,
            name: this.o.name,
        });
    };
    MarqueComponent.prototype.submit = function (myForm) {
        var obj = myForm.value;
        if (!this.isEdit) {
            this.post(obj);
        }
        else {
            this.put(obj);
        }
    };
    MarqueComponent.prototype.post = function (obj) {
        var _this = this;
        console.log(obj);
        this.service.post(obj).subscribe(function (r) {
            _this.update.next(true);
            console.log(r);
            _this.resetForm();
        }, function (error) {
            console.log(error);
        });
    };
    MarqueComponent.prototype.put = function (obj) {
        var _this = this;
        this.service.put(obj).subscribe(function (r) {
            _this.update.next(true);
            console.log(r);
            _this.isEdit = false;
            _this.resetForm();
            _this.myForm.get('id').enable();
        }, function (error) {
            console.log(error);
        });
    };
    MarqueComponent.prototype.delete = function (o) {
        var _this = this;
        this.service.delete(o.id).subscribe(function (r) {
            _this.update.next(true);
        }, function (error) {
            console.log(error);
        });
    };
    MarqueComponent.prototype.edit = function (o) {
        console.log(o);
        this.o = o;
        this.isEdit = true;
        this.myForm.get('id').disable();
        this.createForm();
    };
    MarqueComponent.prototype.reset = function () {
        this.resetForm();
        this.myForm.get('id').enable();
        this.isEdit = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], MarqueComponent.prototype, "paginator", void 0);
    MarqueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marque',
            template: __webpack_require__(/*! ./marque.component.html */ "./src/app/admin/marque/marque.component.html"),
            styles: [__webpack_require__(/*! ./marque.component.scss */ "./src/app/admin/marque/marque.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_marque_service__WEBPACK_IMPORTED_MODULE_6__["MarqueService"], _shared_country_service__WEBPACK_IMPORTED_MODULE_7__["CountryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], MarqueComponent);
    return MarqueComponent;
}());



/***/ }),

/***/ "./src/app/admin/model/model.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/model/model.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"aws-text-box section\"> \n    <div class=\"  \"> \n     <p><b>Cr&eacute;ez votre compte.</b></p> \n     <ol> \n      <li>Rendez-vous sur la <a href=\"https://aws.amazon.com/\" target=\"_blank\">page d'accueil d'Amazon Web Services</a>.</li> \n      <li>S&eacute;lectionnez <b>Inscription</b>.<br /> <b>Remarque&nbsp;:</b> si vous vous &ecirc;tes inscrit &agrave; AWS r&eacute;cemment, le bouton peut afficher <b>Sign In to the Console</b> (Connexion &agrave; la console).</li> \n      <li>Saisissez vos informations de compte, puis s&eacute;lectionnez <b>Continuer</b>.<br /> <b>Important&nbsp;:</b> assurez-vous de saisir vos informations de compte correctement, en particulier votre adresse e-mail. Si l'adresse e-mail que vous saisissez est incorrecte, vous ne pourrez pas acc&eacute;der &agrave; votre compte. Si <b>Create a new AWS account</b> (Cr&eacute;er un nouveau compte AWS) n’appara&icirc;t pas, s&eacute;lectionnez d'abord l'option <b>Sign in to a different account</b> (Se connecter &agrave; un autre compte), puis <b>Create a new AWS account</b> (Cr&eacute;er un compte AWS).</li> \n      <li>Choisissez <b>Personal</b> (Personnel) ou <b>Professional</b> (Professionnel).<br /> <b>Remarque&nbsp;:</b> les comptes personnels et professionnels ont les m&ecirc;mes fonctions et fonctionnalit&eacute;s.</li> \n      <li>Saisissez vos informations personnelles ou professionnelles.</li> \n      <li>Lisez et acceptez le <a href=\"https://aws.amazon.com/agreement/\" target=\"_blank\">Contrat client AWS</a>.<br /> <b>Remarque</b>&nbsp;: assurez-vous de lire et comprendre les conditions g&eacute;n&eacute;rales du Contrat client AWS.</li> \n      <li>Choisissez <b>Create Account and Continue</b> (Cr&eacute;er un compte et continuer).</li> \n     </ol> \n     <p>Vous recevez un e-mail pour confirmer la cr&eacute;ation de votre compte. Vous pouvez vous connecter &agrave; ce dernier avec l'adresse e-mail et le mot de passe que vous avez fournis. Toutefois, vous ne pouvez pas utiliser les services AWS tant que vous n'avez pas termin&eacute; l'activation de votre compte.</p> \n     <p><b>Ajoutez un moyen de paiement.</b></p> \n     <p>Sur la page <b>Payment Information</b> (Informations relatives au paiement), saisissez les informations relatives &agrave; votre moyen de paiement, puis s&eacute;lectionnez <b>Secure Submit</b> (Envoi s&eacute;curis&eacute;).</p> \n     <p><b>Remarque&nbsp;:</b> si vous souhaitez utiliser une autre adresse pour votre compte AWS, s&eacute;lectionnez <b>Use a new address</b> (Utiliser une nouvelle adresse) avant de cliquer sur <b>Secure Submit</b> (Envoi s&eacute;curis&eacute;).</p> \n     <p><b>V&eacute;rifiez votre num&eacute;ro de t&eacute;l&eacute;phone.</b></p> \n     <ol> \n      <li>Choisissez si vous souhaitez v&eacute;rifier votre compte par <b>SMS</b> ou <b>appel</b>.</li> \n      <li>S&eacute;lectionnez votre code de pays ou r&eacute;gion dans la liste.</li> \n      <li>Saisissez un num&eacute;ro de t&eacute;l&eacute;phone o&ugrave; vous serez joignable dans les minutes qui suivent.</li> \n      <li>Saisissez le code affich&eacute; dans le captcha.</li> \n      <li>Lorsque vous &ecirc;tes pr&ecirc;t &agrave; recevoir un appel, cliquez sur <b>Contact me</b> (Me contacter). Un syst&egrave;me automatis&eacute; vous contactera rapidement.</li> \n      <li>Saisissez le num&eacute;ro d'identification personnel que vous recevez par SMS ou appel vocal, puis cliquez sur <b>Continuer</b>.</li> \n     </ol> \n     <p><b>S&eacute;lectionnez un plan AWS Support.</b></p> \n     <p>Sur la page <b>Select a Support Plan</b> (S&eacute;lectionner un plan de support), s&eacute;lectionnez l'un des plans disponibles. Pour en savoir plus sur les plans de support disponibles et leurs avantages, consultez la section <a href=\"https://aws.amazon.com/premiumsupport/plans/\" target=\"_blank\">Comparer les plans AWS Support</a>.</p> \n     <p><b>Attendez l'activation du compte.</b></p> \n     <p>Apr&egrave;s que vous ayez choisi un plan de support, une page de confirmation indique que l'activation de votre compte est en cours. Bien que l'activation s'effectue g&eacute;n&eacute;ralement en quelques minutes, le processus peut prendre jusqu'&agrave; 24&nbsp;heures.</p> \n     <p>Vous pouvez vous connecter &agrave; votre compte AWS m&ecirc;me s'il est en cours d'activation. La page d'accueil AWS peut afficher un bouton qui indique &laquo;&nbsp;Complete Sign Up (Terminer l’inscription)&nbsp;&raquo; pendant ce temps, m&ecirc;me si vous avez termin&eacute; toutes les &eacute;tapes de la proc&eacute;dure d'inscription.</p> \n     <p>Une fois votre compte enti&egrave;rement activ&eacute;, vous recevrez un e-mail de confirmation. Apr&egrave;s avoir re&ccedil;u cet e-mail, vous disposez d’un acc&egrave;s complet &agrave; tous les services AWS.</p> \n     <p><b>R&eacute;solution des probl&egrave;mes de retards pendant l'activation du compte</b></p> \n     <p>Il peut arriver que l'activation d'un compte soit retard&eacute;e. Si le processus prend plus de 24&nbsp;heures, v&eacute;rifiez les points suivants&nbsp;:</p> \n     <ul> \n      <li><b>Terminez le processus d'activation de compte.</b> Vous avez peut-&ecirc;tre malencontreusement ferm&eacute; la fen&ecirc;tre de la proc&eacute;dure d'inscription avant d’avoir ajout&eacute; toutes les informations n&eacute;cessaires. Pour terminer la proc&eacute;dure d'inscription, rendez-vous sur <a></a><a href=\"https://aws-portal.amazon.com/gp/aws/developer/registration/index.html\" target=\"_blank\">https://aws-portal.amazon.com/gp/aws/developer/registration/index.html</a> et connectez-vous &agrave; l'aide de l'adresse e-mail et du mot de passe du compte.</li> \n      <li><b>V&eacute;rifiez les informations associ&eacute;es &agrave; votre moyen de paiement.</b> V&eacute;rifiez les <a target=\"_blank\"></a><a href=\"https://console.aws.amazon.com/billing/home#/paymentmethods\" target=\"_blank\">Moyens de paiement</a> dans la console AWS Billing and Cost Management. Corrigez les informations erron&eacute;es potentielles.</li> \n      <li><b>Contactez votre &eacute;tablissement financier.</b> Il arrive parfois que les &eacute;tablissements financiers rejettent les demandes d'autorisation AWS pour diff&eacute;rentes raisons. Contactez l'&eacute;tablissement qui a &eacute;mis votre moyen de paiement et demandez-lui d'approuver les demandes provenant d'AWS. <b><br /> Remarque&nbsp;:</b> AWS annule la demande d’autorisation d&egrave;s que votre &eacute;tablissement financier l'approuve. Aucuns frais ne vous sont factur&eacute;s pour les demandes d'autorisation AWS. Toutefois, il peut arriver qu'elles soient indiqu&eacute;es comme des frais modiques (g&eacute;n&eacute;ralement 1&nbsp;USD) sur votre relev&eacute; bancaire.</li> \n      <li><b>V&eacute;rifiez que vous n'avez pas re&ccedil;u d'e-mail vous demandant des informations suppl&eacute;mentaires.</b> Consultez votre messagerie &eacute;lectronique afin de v&eacute;rifier si AWS vous a demand&eacute; des informations de ce type.</li> \n      <li><b>Essayez un autre navigateur.</b></li> \n      <li><b>Contactez AWS Support.</b> Contactez <a target=\"_blank\"></a><a href=\"https://aws.amazon.com/support\" target=\"_blank\">AWS Support</a> pour obtenir de l'aide. Veillez &agrave; mentionner toutes les &eacute;tapes de d&eacute;pannage que vous avez d&eacute;j&agrave; essay&eacute;es<b>. <br /> Remarque</b>&nbsp;: ne fournissez pas d'informations sensibles, comme des num&eacute;ros de carte de cr&eacute;dit, dans vos &eacute;changes avec AWS.</li> \n     </ul> \n    </div> \n   </div> \n"

/***/ }),

/***/ "./src/app/admin/model/model.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/model/model.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21vZGVsL21vZGVsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/model/model.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/model/model.component.ts ***!
  \************************************************/
/*! exports provided: ModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelComponent", function() { return ModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModelComponent = /** @class */ (function () {
    function ModelComponent() {
    }
    ModelComponent.prototype.ngOnInit = function () {
    };
    ModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-model',
            template: __webpack_require__(/*! ./model.component.html */ "./src/app/admin/model/model.component.html"),
            styles: [__webpack_require__(/*! ./model.component.scss */ "./src/app/admin/model/model.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModelComponent);
    return ModelComponent;
}());



/***/ }),

/***/ "./src/app/admin/role/role.component.html":
/*!************************************************!*\
  !*** ./src/app/admin/role/role.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button mat-raised-button (click)=\"openDialogForAddEdit()\">Ajouter</button> -->\n<div class=\"container \">\n  <mat-card style=\"border-radius: 0;\">\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"submit(myForm)\">\n      <div class=\"row\">\n        <div class=\"ml-3\">\n          <mat-form-field>\n            <input matInput formControlName=\"name\" placeholder=\"Name\" required>\n          </mat-form-field>\n        </div>\n        &nbsp;\n        <div class=\"ml-3 mt-3\">\n          <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"!myForm.valid\">\n            <mat-icon>{{!isEdit ? 'add' : 'create'}}</mat-icon>\n          </button>\n          &nbsp;\n          <button mat-stroked-button type=\"button\" (click)=\"reset()\">\n            <mat-icon>refresh</mat-icon>\n          </button>\n        </div>\n\n\n      </div>\n    </form>\n  </mat-card>\n\n\n\n  <div class=\"example-container mat-elevation-z8 mt-3 mb-3\">\n    <div class=\"example-loading-shade\"\n      *ngIf=\"dataSourceHandler.isLoadingResults || dataSourceHandler.isRateLimitReached\">\n      <mat-spinner *ngIf=\"dataSourceHandler.isLoadingResults\"></mat-spinner>\n      <div class=\"example-rate-limit-reached\" *ngIf=\"dataSourceHandler.isRateLimitReached\">\n        API rate limit has been reached. It will be reset in one minute.\n      </div>\n    </div>\n    <table mat-table #table [dataSource]=\"dataSource\" aria-label=\"Elements\">\n      <ng-container [matColumnDef]=\"columnDefs[0].columnDef\">\n        <th mat-header-cell *matHeaderCellDef>{{columnDefs[0].headName}}</th>\n        <td mat-cell *matCellDef=\"let row\">{{row[columnDefs[0].columnDef]}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"option\" style=\"flex-direction: row-reverse;\">\n        <th mat-header-cell *matHeaderCellDef> Option </th>\n        <td mat-cell *matCellDef=\"let row\">\n\n          <div class=\"button-row\">\n            <button mat-icon-button color=\"primary\" (click)=\"edit(row)\">\n              <mat-icon>create</mat-icon>\n            </button>\n            <button mat-icon-button color=\"warn\" (click)=\"delete(row)\">\n              <mat-icon>delete_sweep</mat-icon>\n            </button>\n          </div>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator #paginator [length]=\"dataSourceHandler.resultsLength\" pageIndex=\"0\" pageSize=\"15\"\n      [pageSizeOptions]=\"[5, 25, 50, 100, 250]\">\n    </mat-paginator>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/role/role.component.scss":
/*!************************************************!*\
  !*** ./src/app/admin/role/role.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JvbGUvcm9sZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/role/role.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/role/role.component.ts ***!
  \**********************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_table_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/table-datasource */ "./src/app/admin/shared/table-datasource.ts");
/* harmony import */ var _app_shared_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/shared/models */ "./src/app/shared/models.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_super_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/super.service */ "./src/app/admin/shared/super.service.ts");







var RoleComponent = /** @class */ (function () {
    function RoleComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        // @ViewChild(MatSort) sort: MatSort;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataSource = [];
        //
        this.columnDefs = [
            { columnDef: 'name', headName: 'name' },
            { columnDef: 'option', headName: 'Option' },
        ];
        this.i = 0;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = [
            this.columnDefs[this.i++].columnDef,
            this.columnDefs[this.i++].columnDef,
        ];
        this.o = new _app_shared_models__WEBPACK_IMPORTED_MODULE_4__["Role"]();
        this.isEdit = false;
        this.service.controller = _app_shared_models__WEBPACK_IMPORTED_MODULE_4__["Role"].name;
    }
    RoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSourceHandler = new _shared_table_datasource__WEBPACK_IMPORTED_MODULE_3__["TableDataSource"](this.paginator, this.service, this.update);
        // data is subscribed now , every event happen the will change and ofcource the datasource for table
        this.dataSourceHandler.methode().subscribe(function (data) {
            _this.dataSource = data;
            // console.log(data);
        });
        this.createForm();
    };
    // reset input
    RoleComponent.prototype.createForm = function () {
        this.myForm = this.fb.group({
            id: this.o.id,
            name: [this.o.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    RoleComponent.prototype.resetForm = function () {
        this.o = new _app_shared_models__WEBPACK_IMPORTED_MODULE_4__["Role"]();
        this.myForm.reset({
            id: this.o.id,
            name: this.o.name,
        });
    };
    RoleComponent.prototype.submit = function (myForm) {
        var obj = myForm.value;
        if (!this.isEdit) {
            this.post(obj);
        }
        else {
            this.put(obj);
        }
    };
    RoleComponent.prototype.post = function (obj) {
        var _this = this;
        console.log(obj);
        this.service.post(obj).subscribe(function (r) {
            _this.update.next(true);
            console.log(r);
            _this.resetForm();
        }, function (error) {
            console.log(error);
        });
    };
    RoleComponent.prototype.put = function (obj) {
        var _this = this;
        this.service.put(obj).subscribe(function (r) {
            _this.update.next(true);
            console.log(r);
            _this.isEdit = false;
            _this.resetForm();
            _this.myForm.get('id').enable();
        }, function (error) {
            console.log(error);
        });
    };
    RoleComponent.prototype.delete = function (o) {
        var _this = this;
        this.service.delete(o.id).subscribe(function (r) {
            _this.update.next(true);
        }, function (error) {
            console.log(error);
        });
    };
    RoleComponent.prototype.edit = function (o) {
        console.log(o);
        this.o = o;
        this.isEdit = true;
        this.myForm.get('id').disable();
        this.createForm();
    };
    RoleComponent.prototype.reset = function () {
        this.resetForm();
        this.myForm.get('id').enable();
        this.isEdit = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], RoleComponent.prototype, "paginator", void 0);
    RoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! ./role.component.html */ "./src/app/admin/role/role.component.html"),
            styles: [__webpack_require__(/*! ./role.component.scss */ "./src/app/admin/role/role.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_super_service__WEBPACK_IMPORTED_MODULE_6__["SuperService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RoleComponent);
    return RoleComponent;
}());



/***/ }),

/***/ "./src/app/admin/shared/Carburant.service.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/shared/Carburant.service.ts ***!
  \***************************************************/
/*! exports provided: CarburantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarburantService", function() { return CarburantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _super_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./super.service */ "./src/app/admin/shared/super.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nguniversal_aspnetcore_engine_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nguniversal/aspnetcore-engine/tokens */ "./node_modules/@nguniversal/aspnetcore-engine/fesm5/tokens.js");





var CarburantService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CarburantService, _super);
    function CarburantService(http, originUrl) {
        var _this = _super.call(this, http, originUrl) || this;
        _this.http = http;
        _this.originUrl = originUrl;
        _this.controller = 'carburant';
        return _this;
    }
    CarburantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_nguniversal_aspnetcore_engine_tokens__WEBPACK_IMPORTED_MODULE_4__["ORIGIN_URL"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], CarburantService);
    return CarburantService;
}(_super_service__WEBPACK_IMPORTED_MODULE_2__["SuperService"]));



/***/ }),

/***/ "./src/app/admin/shared/country.service.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/shared/country.service.ts ***!
  \*************************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _super_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./super.service */ "./src/app/admin/shared/super.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nguniversal_aspnetcore_engine_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nguniversal/aspnetcore-engine/tokens */ "./node_modules/@nguniversal/aspnetcore-engine/fesm5/tokens.js");





var CountryService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CountryService, _super);
    function CountryService(http, originUrl) {
        var _this = _super.call(this, http, originUrl) || this;
        _this.http = http;
        _this.originUrl = originUrl;
        _this.controller = 'country';
        return _this;
    }
    CountryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_nguniversal_aspnetcore_engine_tokens__WEBPACK_IMPORTED_MODULE_4__["ORIGIN_URL"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], String])
    ], CountryService);
    return CountryService;
}(_super_service__WEBPACK_IMPORTED_MODULE_1__["SuperService"]));



/***/ }),

/***/ "./src/app/admin/shared/marque.service.ts":
/*!************************************************!*\
  !*** ./src/app/admin/shared/marque.service.ts ***!
  \************************************************/
/*! exports provided: MarqueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarqueService", function() { return MarqueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _super_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./super.service */ "./src/app/admin/shared/super.service.ts");
/* harmony import */ var _nguniversal_aspnetcore_engine_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nguniversal/aspnetcore-engine/tokens */ "./node_modules/@nguniversal/aspnetcore-engine/fesm5/tokens.js");





var MarqueService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarqueService, _super);
    function MarqueService(http, originUrl) {
        var _this = _super.call(this, http, originUrl) || this;
        _this.http = http;
        _this.originUrl = originUrl;
        _this.controller = 'marque';
        return _this;
    }
    MarqueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_nguniversal_aspnetcore_engine_tokens__WEBPACK_IMPORTED_MODULE_4__["ORIGIN_URL"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], MarqueService);
    return MarqueService;
}(_super_service__WEBPACK_IMPORTED_MODULE_3__["SuperService"]));



/***/ }),

/***/ "./src/app/admin/shared/role.service.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/shared/role.service.ts ***!
  \**********************************************/
/*! exports provided: RoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleService", function() { return RoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _super_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./super.service */ "./src/app/admin/shared/super.service.ts");
/* harmony import */ var _nguniversal_aspnetcore_engine_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nguniversal/aspnetcore-engine/tokens */ "./node_modules/@nguniversal/aspnetcore-engine/fesm5/tokens.js");





var RoleService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RoleService, _super);
    function RoleService(http, originUrl) {
        var _this = _super.call(this, http, originUrl) || this;
        _this.http = http;
        _this.originUrl = originUrl;
        _this.controller = 'role';
        return _this;
    }
    RoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_nguniversal_aspnetcore_engine_tokens__WEBPACK_IMPORTED_MODULE_4__["ORIGIN_URL"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], RoleService);
    return RoleService;
}(_super_service__WEBPACK_IMPORTED_MODULE_3__["SuperService"]));



/***/ }),

/***/ "./src/app/admin/shared/super.service.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/shared/super.service.ts ***!
  \***********************************************/
/*! exports provided: SuperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperService", function() { return SuperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nguniversal_aspnetcore_engine_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nguniversal/aspnetcore-engine/tokens */ "./node_modules/@nguniversal/aspnetcore-engine/fesm5/tokens.js");





var API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
var SuperService = /** @class */ (function () {
    function SuperService(http, originUrl) {
        var _this = this;
        this.http = http;
        this.originUrl = originUrl;
        // @Inject(ORIGIN_URL) originUrl: string;
        this.url = this.originUrl + "/api" || false;
        this.controller = '';
        this.get = function () { return _this.http.get(API_URL + "/" + _this.controller + "/get"); };
        this.getOne = function (id) { return _this.http.get(API_URL + "/" + _this.controller + "/get/" + id); };
        this.post = function (o) { return _this.http.post(API_URL + "/" + _this.controller + "/post", o); };
        this.put = function (o) { return _this.http.put(API_URL + "/" + _this.controller + "/put/" + o.id, o); };
        this.delete = function (id) { return _this.http.delete(API_URL + "/" + _this.controller + "/delete/" + id + "/"); };
        console.log("url: " + this.url + ", asp: " + originUrl + "/api, env: " + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);
    }
    SuperService.prototype.getList = function (startIndex, pageSize) {
        if (startIndex === void 0) { startIndex = 0; }
        if (pageSize === void 0) { pageSize = 6; }
        return this.http.get(API_URL + "/" + this.controller + "/GetList/" + startIndex + "/" + pageSize);
    };
    SuperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_nguniversal_aspnetcore_engine_tokens__WEBPACK_IMPORTED_MODULE_4__["ORIGIN_URL"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], SuperService);
    return SuperService;
}());



/***/ }),

/***/ "./src/app/admin/shared/table-datasource.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/shared/table-datasource.ts ***!
  \**************************************************/
/*! exports provided: TableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDataSource", function() { return TableDataSource; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


// @Injectable({
//   providedIn: 'root'
// })
var TableDataSource = /** @class */ (function () {
    function TableDataSource(paginator, serviceData, update) {
        this.paginator = paginator;
        this.serviceData = serviceData;
        this.update = update;
        this.isLoadingResults = true;
        this.resultsLength = 0;
        this.isRateLimitReached = false;
    }
    TableDataSource.prototype.methode = function () {
        var _this = this;
        var dataMutations = [
            this.paginator.page,
            this.update
        ];
        var obs = rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"].apply(void 0, dataMutations).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(function (update) {
            // if data is updated we init the page index to 0
            // need more operation here for sortable things
            if (update === true) {
                _this.paginator.pageIndex = 0;
            }
            _this.isLoadingResults = true;
            if (!_this.paginator.pageSize) {
                _this.paginator.pageSize = 15;
            }
            var startIndex = _this.paginator.pageIndex * _this.paginator.pageSize;
            return _this.serviceData.getList(startIndex, _this.paginator.pageSize);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (r) {
            // get length of data
            _this.resultsLength = r.count;
            _this.isLoadingResults = false;
            _this.isRateLimitReached = false;
            console.log(r);
            return r.list;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function () {
            _this.isLoadingResults = false;
            // Catch if the API has reached its rate limit. Return empty data.
            _this.isRateLimitReached = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }));
        return obs;
    };
    return TableDataSource;
}());



/***/ }),

/***/ "./src/app/admin/shared/transmission.service.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/shared/transmission.service.ts ***!
  \******************************************************/
/*! exports provided: TransmissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransmissionService", function() { return TransmissionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _super_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./super.service */ "./src/app/admin/shared/super.service.ts");
/* harmony import */ var _nguniversal_aspnetcore_engine_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nguniversal/aspnetcore-engine/tokens */ "./node_modules/@nguniversal/aspnetcore-engine/fesm5/tokens.js");





var TransmissionService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TransmissionService, _super);
    function TransmissionService(http, originUrl) {
        var _this = _super.call(this, http, originUrl) || this;
        _this.http = http;
        _this.originUrl = originUrl;
        _this.controller = 'transmission';
        return _this;
    }
    TransmissionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_nguniversal_aspnetcore_engine_tokens__WEBPACK_IMPORTED_MODULE_4__["ORIGIN_URL"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], TransmissionService);
    return TransmissionService;
}(_super_service__WEBPACK_IMPORTED_MODULE_3__["SuperService"]));



/***/ }),

/***/ "./src/app/admin/shared/typeuser.service.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/shared/typeuser.service.ts ***!
  \**************************************************/
/*! exports provided: TypeuserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeuserService", function() { return TypeuserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _super_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./super.service */ "./src/app/admin/shared/super.service.ts");
/* harmony import */ var _nguniversal_aspnetcore_engine_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nguniversal/aspnetcore-engine/tokens */ "./node_modules/@nguniversal/aspnetcore-engine/fesm5/tokens.js");





var TypeuserService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TypeuserService, _super);
    function TypeuserService(http, originUrl) {
        var _this = _super.call(this, http, originUrl) || this;
        _this.http = http;
        _this.originUrl = originUrl;
        _this.controller = 'typeuser';
        return _this;
    }
    TypeuserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_nguniversal_aspnetcore_engine_tokens__WEBPACK_IMPORTED_MODULE_4__["ORIGIN_URL"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], TypeuserService);
    return TypeuserService;
}(_super_service__WEBPACK_IMPORTED_MODULE_3__["SuperService"]));



/***/ }),

/***/ "./src/app/admin/shared/typevoiture.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/shared/typevoiture.service.ts ***!
  \*****************************************************/
/*! exports provided: TypevoitureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypevoitureService", function() { return TypevoitureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _super_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./super.service */ "./src/app/admin/shared/super.service.ts");
/* harmony import */ var _nguniversal_aspnetcore_engine_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nguniversal/aspnetcore-engine/tokens */ "./node_modules/@nguniversal/aspnetcore-engine/fesm5/tokens.js");





var TypevoitureService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TypevoitureService, _super);
    function TypevoitureService(http, originUrl) {
        var _this = _super.call(this, http, originUrl) || this;
        _this.http = http;
        _this.originUrl = originUrl;
        _this.controller = 'typevoiture';
        return _this;
    }
    TypevoitureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_nguniversal_aspnetcore_engine_tokens__WEBPACK_IMPORTED_MODULE_4__["ORIGIN_URL"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], TypevoitureService);
    return TypevoitureService;
}(_super_service__WEBPACK_IMPORTED_MODULE_3__["SuperService"]));



/***/ }),

/***/ "./src/app/admin/shared/user-role.service.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/shared/user-role.service.ts ***!
  \***************************************************/
/*! exports provided: UserRoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleService", function() { return UserRoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _super_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./super.service */ "./src/app/admin/shared/super.service.ts");
/* harmony import */ var _nguniversal_aspnetcore_engine_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nguniversal/aspnetcore-engine/tokens */ "./node_modules/@nguniversal/aspnetcore-engine/fesm5/tokens.js");





var UserRoleService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserRoleService, _super);
    function UserRoleService(http, originUrl) {
        var _this = _super.call(this, http, originUrl) || this;
        _this.http = http;
        _this.originUrl = originUrl;
        // hack this is not good implementation
        _this.idUser = 0;
        _this.remove = function (idUser, idRole) {
            return _this.http.delete(_this.url + "/" + _this.controller + "/delete/" + idUser + "/" + idRole);
        };
        _this.controller = 'userrole';
        return _this;
    }
    UserRoleService.prototype.getList = function (startIndex, pageSize) {
        if (startIndex === void 0) { startIndex = 0; }
        if (pageSize === void 0) { pageSize = 6; }
        return this.getByUser(this.idUser, startIndex, pageSize);
    };
    UserRoleService.prototype.getByUser = function (idUser, startIndex, pageSize) {
        console.log(idUser, startIndex, pageSize);
        return this.http.get(this.url + "/" + this.controller + "/getByUser/" + idUser + "/" + startIndex + "/" + pageSize);
    };
    UserRoleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_nguniversal_aspnetcore_engine_tokens__WEBPACK_IMPORTED_MODULE_4__["ORIGIN_URL"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], UserRoleService);
    return UserRoleService;
}(_super_service__WEBPACK_IMPORTED_MODULE_3__["SuperService"]));



/***/ }),

/***/ "./src/app/admin/shared/user.service.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/shared/user.service.ts ***!
  \**********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _super_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./super.service */ "./src/app/admin/shared/super.service.ts");
/* harmony import */ var _nguniversal_aspnetcore_engine_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nguniversal/aspnetcore-engine/tokens */ "./node_modules/@nguniversal/aspnetcore-engine/fesm5/tokens.js");





var UserService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserService, _super);
    function UserService(http, originUrl) {
        var _this = _super.call(this, http, originUrl) || this;
        _this.http = http;
        _this.originUrl = originUrl;
        _this.controller = 'user';
        return _this;
    }
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_nguniversal_aspnetcore_engine_tokens__WEBPACK_IMPORTED_MODULE_4__["ORIGIN_URL"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
    ], UserService);
    return UserService;
}(_super_service__WEBPACK_IMPORTED_MODULE_3__["SuperService"]));



/***/ }),

/***/ "./src/app/admin/transmission/transmission.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/transmission/transmission.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button mat-raised-button (click)=\"openDialogForAddEdit()\">Ajouter</button> -->\n<div class=\"container \">\n    <mat-card style=\"border-radius: 0;\">\n      <form [formGroup]=\"myForm\" (ngSubmit)=\"submit(myForm)\">\n        <div class=\"row\">\n          <div class=\"ml-3\">\n            <mat-form-field>\n              <input matInput formControlName=\"name\" placeholder=\"Name\" required>\n            </mat-form-field>\n          </div>\n          &nbsp;\n          <div class=\"ml-3 mt-3\">\n            <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"!myForm.valid\">\n              <mat-icon>{{!isEdit ? 'add' : 'create'}}</mat-icon>\n            </button>\n            &nbsp;\n            <button mat-stroked-button type=\"button\" (click)=\"reset()\">\n              <mat-icon>refresh</mat-icon>\n            </button>\n          </div>\n  \n  \n        </div>\n      </form>\n    </mat-card>\n  \n  \n  \n    <div class=\"example-container mat-elevation-z8 mt-3 mb-3\">\n      <div class=\"example-loading-shade\"\n        *ngIf=\"dataSourceHandler.isLoadingResults || dataSourceHandler.isRateLimitReached\">\n        <mat-spinner *ngIf=\"dataSourceHandler.isLoadingResults\"></mat-spinner>\n        <div class=\"example-rate-limit-reached\" *ngIf=\"dataSourceHandler.isRateLimitReached\">\n          API rate limit has been reached. It will be reset in one minute.\n        </div>\n      </div>\n      <table mat-table #table [dataSource]=\"dataSource\" aria-label=\"Elements\">\n        <ng-container [matColumnDef]=\"columnDefs[0].columnDef\">\n          <th mat-header-cell *matHeaderCellDef>{{columnDefs[0].headName}}</th>\n          <td mat-cell *matCellDef=\"let row\">{{row[columnDefs[0].columnDef]}}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"option\" style=\"flex-direction: row-reverse;\">\n          <th mat-header-cell *matHeaderCellDef> Option </th>\n          <td mat-cell *matCellDef=\"let row\">\n  \n            <div class=\"button-row\">\n              <button mat-icon-button color=\"primary\" (click)=\"edit(row)\">\n                <mat-icon>create</mat-icon>\n              </button>\n              <button mat-icon-button color=\"warn\" (click)=\"delete(row)\">\n                <mat-icon>delete_sweep</mat-icon>\n              </button>\n            </div>\n          </td>\n        </ng-container>\n  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n  \n      <mat-paginator #paginator [length]=\"dataSourceHandler.resultsLength\" pageIndex=\"0\" pageSize=\"15\"\n        [pageSizeOptions]=\"[5, 25, 50, 100, 250]\">\n      </mat-paginator>\n    </div>\n  \n  </div>"

/***/ }),

/***/ "./src/app/admin/transmission/transmission.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/transmission/transmission.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3RyYW5zbWlzc2lvbi90cmFuc21pc3Npb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/transmission/transmission.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/transmission/transmission.component.ts ***!
  \**************************************************************/
/*! exports provided: TransmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransmissionComponent", function() { return TransmissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_table_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/table-datasource */ "./src/app/admin/shared/table-datasource.ts");
/* harmony import */ var _app_shared_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/shared/models */ "./src/app/shared/models.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_transmission_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/transmission.service */ "./src/app/admin/shared/transmission.service.ts");







var TransmissionComponent = /** @class */ (function () {
    function TransmissionComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        // @ViewChild(MatSort) sort: MatSort;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataSource = [];
        //
        this.columnDefs = [
            { columnDef: 'name', headName: 'name' },
            { columnDef: 'option', headName: 'Option' },
        ];
        this.i = 0;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = [
            this.columnDefs[this.i++].columnDef,
            this.columnDefs[this.i++].columnDef,
        ];
        this.o = new _app_shared_models__WEBPACK_IMPORTED_MODULE_4__["Transmission"]();
        this.isEdit = false;
    }
    TransmissionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSourceHandler = new _shared_table_datasource__WEBPACK_IMPORTED_MODULE_3__["TableDataSource"](this.paginator, this.service, this.update);
        // data is subscribed now , every event happen the will change and ofcource the datasource for table
        this.dataSourceHandler.methode().subscribe(function (data) {
            _this.dataSource = data;
            // console.log(data);
        });
        this.createForm();
    };
    // reset input
    TransmissionComponent.prototype.createForm = function () {
        this.myForm = this.fb.group({
            id: this.o.id,
            name: [this.o.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    TransmissionComponent.prototype.resetForm = function () {
        this.o = new _app_shared_models__WEBPACK_IMPORTED_MODULE_4__["Transmission"]();
        this.myForm.reset({
            id: this.o.id,
            name: this.o.name,
        });
    };
    TransmissionComponent.prototype.submit = function (myForm) {
        var obj = myForm.value;
        if (!this.isEdit) {
            this.post(obj);
        }
        else {
            this.put(obj);
        }
    };
    TransmissionComponent.prototype.post = function (obj) {
        var _this = this;
        console.log(obj);
        this.service.post(obj).subscribe(function (r) {
            _this.update.next(true);
            console.log(r);
            _this.resetForm();
        }, function (error) {
            console.log(error);
        });
    };
    TransmissionComponent.prototype.put = function (obj) {
        var _this = this;
        this.service.put(obj).subscribe(function (r) {
            _this.update.next(true);
            console.log(r);
            _this.isEdit = false;
            _this.resetForm();
            _this.myForm.get('id').enable();
        }, function (error) {
            console.log(error);
        });
    };
    TransmissionComponent.prototype.delete = function (o) {
        var _this = this;
        this.service.delete(o.id).subscribe(function (r) {
            _this.update.next(true);
        }, function (error) {
            console.log(error);
        });
    };
    TransmissionComponent.prototype.edit = function (o) {
        console.log(o);
        this.o = o;
        this.isEdit = true;
        this.myForm.get('id').disable();
        this.createForm();
    };
    TransmissionComponent.prototype.reset = function () {
        this.resetForm();
        this.myForm.get('id').enable();
        this.isEdit = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], TransmissionComponent.prototype, "paginator", void 0);
    TransmissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transmission',
            template: __webpack_require__(/*! ./transmission.component.html */ "./src/app/admin/transmission/transmission.component.html"),
            styles: [__webpack_require__(/*! ./transmission.component.scss */ "./src/app/admin/transmission/transmission.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_transmission_service__WEBPACK_IMPORTED_MODULE_6__["TransmissionService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], TransmissionComponent);
    return TransmissionComponent;
}());



/***/ }),

/***/ "./src/app/admin/typeuser/typeuser.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/typeuser/typeuser.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button mat-raised-button (click)=\"openDialogForAddEdit()\">Ajouter</button> -->\n<div class=\"container \">\n    <mat-card style=\"border-radius: 0;\">\n      <form [formGroup]=\"myForm\" (ngSubmit)=\"submit(myForm)\">\n        <div class=\"row\">\n          <div class=\"ml-3\">\n            <mat-form-field>\n              <input matInput formControlName=\"name\" placeholder=\"Name\" required>\n            </mat-form-field>\n          </div>\n          &nbsp;\n          <div class=\"ml-3 mt-3\">\n            <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"!myForm.valid\">\n              <mat-icon>{{!isEdit ? 'add' : 'create'}}</mat-icon>\n            </button>\n            &nbsp;\n            <button mat-stroked-button type=\"button\" (click)=\"reset()\">\n              <mat-icon>refresh</mat-icon>\n            </button>\n          </div>\n  \n  \n        </div>\n      </form>\n    </mat-card>\n  \n  \n  \n    <div class=\"example-container mat-elevation-z8 mt-3 mb-3\">\n      <div class=\"example-loading-shade\"\n        *ngIf=\"dataSourceHandler.isLoadingResults || dataSourceHandler.isRateLimitReached\">\n        <mat-spinner *ngIf=\"dataSourceHandler.isLoadingResults\"></mat-spinner>\n        <div class=\"example-rate-limit-reached\" *ngIf=\"dataSourceHandler.isRateLimitReached\">\n          API rate limit has been reached. It will be reset in one minute.\n        </div>\n      </div>\n      <table mat-table #table [dataSource]=\"dataSource\" aria-label=\"Elements\">\n        <ng-container [matColumnDef]=\"columnDefs[0].columnDef\">\n          <th mat-header-cell *matHeaderCellDef>{{columnDefs[0].headName}}</th>\n          <td mat-cell *matCellDef=\"let row\">{{row[columnDefs[0].columnDef]}}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"option\" style=\"flex-direction: row-reverse;\">\n          <th mat-header-cell *matHeaderCellDef> Option </th>\n          <td mat-cell *matCellDef=\"let row\">\n  \n            <div class=\"button-row\">\n              <button mat-icon-button color=\"primary\" (click)=\"edit(row)\">\n                <mat-icon>create</mat-icon>\n              </button>\n              <button mat-icon-button color=\"warn\" (click)=\"delete(row)\">\n                <mat-icon>delete_sweep</mat-icon>\n              </button>\n            </div>\n          </td>\n        </ng-container>\n  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n  \n      <mat-paginator #paginator [length]=\"dataSourceHandler.resultsLength\" pageIndex=\"0\" pageSize=\"15\"\n        [pageSizeOptions]=\"[5, 25, 50, 100, 250]\">\n      </mat-paginator>\n    </div>\n  \n  </div>"

/***/ }),

/***/ "./src/app/admin/typeuser/typeuser.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/typeuser/typeuser.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3R5cGV1c2VyL3R5cGV1c2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/typeuser/typeuser.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/typeuser/typeuser.component.ts ***!
  \******************************************************/
/*! exports provided: TypeuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeuserComponent", function() { return TypeuserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_table_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/table-datasource */ "./src/app/admin/shared/table-datasource.ts");
/* harmony import */ var _app_shared_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/shared/models */ "./src/app/shared/models.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_typeuser_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/typeuser.service */ "./src/app/admin/shared/typeuser.service.ts");







var TypeuserComponent = /** @class */ (function () {
    function TypeuserComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        // @ViewChild(MatSort) sort: MatSort;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataSource = [];
        //
        this.columnDefs = [
            { columnDef: 'name', headName: 'name' },
            { columnDef: 'option', headName: 'Option' },
        ];
        this.i = 0;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = [
            this.columnDefs[this.i++].columnDef,
            this.columnDefs[this.i++].columnDef,
        ];
        this.o = new _app_shared_models__WEBPACK_IMPORTED_MODULE_4__["TypeUser"]();
        this.isEdit = false;
    }
    TypeuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSourceHandler = new _shared_table_datasource__WEBPACK_IMPORTED_MODULE_3__["TableDataSource"](this.paginator, this.service, this.update);
        // data is subscribed now , every event happen the will change and ofcource the datasource for table
        this.dataSourceHandler.methode().subscribe(function (data) {
            _this.dataSource = data;
            // console.log(data);
        });
        this.createForm();
    };
    // reset input
    TypeuserComponent.prototype.createForm = function () {
        this.myForm = this.fb.group({
            id: this.o.id,
            name: [this.o.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    TypeuserComponent.prototype.resetForm = function () {
        this.o = new _app_shared_models__WEBPACK_IMPORTED_MODULE_4__["TypeUser"]();
        this.myForm.reset({
            id: this.o.id,
            name: this.o.name,
        });
    };
    TypeuserComponent.prototype.submit = function (myForm) {
        var obj = myForm.value;
        if (!this.isEdit) {
            this.post(obj);
        }
        else {
            this.put(obj);
        }
    };
    TypeuserComponent.prototype.post = function (obj) {
        var _this = this;
        console.log(obj);
        this.service.post(obj).subscribe(function (r) {
            _this.update.next(true);
            console.log(r);
            _this.resetForm();
        }, function (error) {
            console.log(error);
        });
    };
    TypeuserComponent.prototype.put = function (obj) {
        var _this = this;
        this.service.put(obj).subscribe(function (r) {
            _this.update.next(true);
            console.log(r);
            _this.isEdit = false;
            _this.resetForm();
            _this.myForm.get('id').enable();
        }, function (error) {
            console.log(error);
        });
    };
    TypeuserComponent.prototype.delete = function (o) {
        var _this = this;
        this.service.delete(o.id).subscribe(function (r) {
            _this.update.next(true);
        }, function (error) {
            console.log(error);
        });
    };
    TypeuserComponent.prototype.edit = function (o) {
        console.log(o);
        this.o = o;
        this.isEdit = true;
        this.myForm.get('id').disable();
        this.createForm();
    };
    TypeuserComponent.prototype.reset = function () {
        this.resetForm();
        this.myForm.get('id').enable();
        this.isEdit = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], TypeuserComponent.prototype, "paginator", void 0);
    TypeuserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-typeuser',
            template: __webpack_require__(/*! ./typeuser.component.html */ "./src/app/admin/typeuser/typeuser.component.html"),
            styles: [__webpack_require__(/*! ./typeuser.component.scss */ "./src/app/admin/typeuser/typeuser.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_typeuser_service__WEBPACK_IMPORTED_MODULE_6__["TypeuserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], TypeuserComponent);
    return TypeuserComponent;
}());



/***/ }),

/***/ "./src/app/admin/typevoiture/typevoiture.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/typevoiture/typevoiture.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button mat-raised-button (click)=\"openDialogForAddEdit()\">Ajouter</button> -->\n<div class=\"container \">\n    <mat-card style=\"border-radius: 0;\">\n      <form [formGroup]=\"myForm\" (ngSubmit)=\"submit(myForm)\">\n        <div class=\"row\">\n          <div class=\"ml-3\">\n            <mat-form-field>\n              <input matInput formControlName=\"name\" placeholder=\"Name\" required>\n            </mat-form-field>\n          </div>\n          &nbsp;\n          <div class=\"ml-3 mt-3\">\n            <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"!myForm.valid\">\n              <mat-icon>{{!isEdit ? 'add' : 'create'}}</mat-icon>\n            </button>\n            &nbsp;\n            <button mat-stroked-button type=\"button\" (click)=\"reset()\">\n              <mat-icon>refresh</mat-icon>\n            </button>\n          </div>\n  \n  \n        </div>\n      </form>\n    </mat-card>\n  \n  \n  \n    <div class=\"example-container mat-elevation-z8 mt-3 mb-3\">\n      <div class=\"example-loading-shade\"\n        *ngIf=\"dataSourceHandler.isLoadingResults || dataSourceHandler.isRateLimitReached\">\n        <mat-spinner *ngIf=\"dataSourceHandler.isLoadingResults\"></mat-spinner>\n        <div class=\"example-rate-limit-reached\" *ngIf=\"dataSourceHandler.isRateLimitReached\">\n          API rate limit has been reached. It will be reset in one minute.\n        </div>\n      </div>\n      <table mat-table #table [dataSource]=\"dataSource\" aria-label=\"Elements\">\n        <ng-container [matColumnDef]=\"columnDefs[0].columnDef\">\n          <th mat-header-cell *matHeaderCellDef>{{columnDefs[0].headName}}</th>\n          <td mat-cell *matCellDef=\"let row\">{{row[columnDefs[0].columnDef]}}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"option\" style=\"flex-direction: row-reverse;\">\n          <th mat-header-cell *matHeaderCellDef> Option </th>\n          <td mat-cell *matCellDef=\"let row\">\n  \n            <div class=\"button-row\">\n              <button mat-icon-button color=\"primary\" (click)=\"edit(row)\">\n                <mat-icon>create</mat-icon>\n              </button>\n              <button mat-icon-button color=\"warn\" (click)=\"delete(row)\">\n                <mat-icon>delete_sweep</mat-icon>\n              </button>\n            </div>\n          </td>\n        </ng-container>\n  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n  \n      <mat-paginator #paginator [length]=\"dataSourceHandler.resultsLength\" pageIndex=\"0\" pageSize=\"15\"\n        [pageSizeOptions]=\"[5, 25, 50, 100, 250]\">\n      </mat-paginator>\n    </div>\n  \n  </div>"

/***/ }),

/***/ "./src/app/admin/typevoiture/typevoiture.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/admin/typevoiture/typevoiture.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3R5cGV2b2l0dXJlL3R5cGV2b2l0dXJlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/typevoiture/typevoiture.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/typevoiture/typevoiture.component.ts ***!
  \************************************************************/
/*! exports provided: TypevoitureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypevoitureComponent", function() { return TypevoitureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_table_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/table-datasource */ "./src/app/admin/shared/table-datasource.ts");
/* harmony import */ var _app_shared_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/shared/models */ "./src/app/shared/models.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_typevoiture_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/typevoiture.service */ "./src/app/admin/shared/typevoiture.service.ts");







var TypevoitureComponent = /** @class */ (function () {
    function TypevoitureComponent(service, fb) {
        this.service = service;
        this.fb = fb;
        // @ViewChild(MatSort) sort: MatSort;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataSource = [];
        //
        this.columnDefs = [
            { columnDef: 'name', headName: 'name' },
            { columnDef: 'option', headName: 'Option' },
        ];
        this.i = 0;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = [
            this.columnDefs[this.i++].columnDef,
            this.columnDefs[this.i++].columnDef,
        ];
        this.o = new _app_shared_models__WEBPACK_IMPORTED_MODULE_4__["Typevoiture"]();
        this.isEdit = false;
    }
    TypevoitureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSourceHandler = new _shared_table_datasource__WEBPACK_IMPORTED_MODULE_3__["TableDataSource"](this.paginator, this.service, this.update);
        // data is subscribed now , every event happen the will change and ofcource the datasource for table
        this.dataSourceHandler.methode().subscribe(function (data) {
            _this.dataSource = data;
            // console.log(data);
        });
        this.createForm();
    };
    // reset input
    TypevoitureComponent.prototype.createForm = function () {
        this.myForm = this.fb.group({
            id: this.o.id,
            name: [this.o.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    TypevoitureComponent.prototype.resetForm = function () {
        this.o = new _app_shared_models__WEBPACK_IMPORTED_MODULE_4__["Typevoiture"]();
        this.myForm.reset({
            id: this.o.id,
            name: this.o.name,
        });
    };
    TypevoitureComponent.prototype.submit = function (myForm) {
        var obj = myForm.value;
        if (!this.isEdit) {
            this.post(obj);
        }
        else {
            this.put(obj);
        }
    };
    TypevoitureComponent.prototype.post = function (obj) {
        var _this = this;
        console.log(obj);
        this.service.post(obj).subscribe(function (r) {
            _this.update.next(true);
            console.log(r);
            _this.resetForm();
        }, function (error) {
            console.log(error);
        });
    };
    TypevoitureComponent.prototype.put = function (obj) {
        var _this = this;
        this.service.put(obj).subscribe(function (r) {
            _this.update.next(true);
            console.log(r);
            _this.isEdit = false;
            _this.resetForm();
            _this.myForm.get('id').enable();
        }, function (error) {
            console.log(error);
        });
    };
    TypevoitureComponent.prototype.delete = function (o) {
        var _this = this;
        this.service.delete(o.id).subscribe(function (r) {
            _this.update.next(true);
        }, function (error) {
            console.log(error);
        });
    };
    TypevoitureComponent.prototype.edit = function (o) {
        console.log(o);
        this.o = o;
        this.isEdit = true;
        this.myForm.get('id').disable();
        this.createForm();
    };
    TypevoitureComponent.prototype.reset = function () {
        this.resetForm();
        this.myForm.get('id').enable();
        this.isEdit = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], TypevoitureComponent.prototype, "paginator", void 0);
    TypevoitureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-typevoiture',
            template: __webpack_require__(/*! ./typevoiture.component.html */ "./src/app/admin/typevoiture/typevoiture.component.html"),
            styles: [__webpack_require__(/*! ./typevoiture.component.scss */ "./src/app/admin/typevoiture/typevoiture.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_typevoiture_service__WEBPACK_IMPORTED_MODULE_6__["TypevoitureService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], TypevoitureComponent);
    return TypevoitureComponent;
}());



/***/ }),

/***/ "./src/app/admin/user-role/user-role.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/user-role/user-role.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Roles for {{o.user.fullName}}</h1>\n<div mat-dialog-content>\n  <div class=\"container mt-3\">\n    <mat-card style=\"border-radius: 0;\">\n      <form [formGroup]=\"myForm\" (ngSubmit)=\"submit(myForm)\">\n        <div class=\"row\">\n          <div class=\"ml-3\">\n            <mat-form-field>\n              <input matInput placeholder=\"Name\" [value]=\"o.user.fullName\" readonly>\n            </mat-form-field>\n            &nbsp;\n            <mat-form-field>\n              <mat-select placeholder=\"Role\" formControlName=\"idRole\">\n                <mat-option value=\"\">...</mat-option>\n                <mat-option *ngFor=\"let o of roles | async\" [value]=\"o.id\">{{o.name}}</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          &nbsp;\n          <div class=\"ml-3 mt-3\">\n            <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"!myForm.valid\">\n              <mat-icon>{{!isEdit ? 'add' : 'create'}}</mat-icon>\n            </button>\n            &nbsp;\n            <button mat-stroked-button type=\"button\" (click)=\"reset()\">\n              <mat-icon>refresh</mat-icon>\n            </button>\n          </div>\n        </div>\n      </form>\n    </mat-card>\n\n\n\n    <div class=\"example-container mat-elevation-z8 mt-3 mb-3\">\n      <div class=\"example-loading-shade\"\n        *ngIf=\"dataSourceHandler.isLoadingResults || dataSourceHandler.isRateLimitReached\">\n        <mat-spinner *ngIf=\"dataSourceHandler.isLoadingResults\"></mat-spinner>\n        <div class=\"example-rate-limit-reached\" *ngIf=\"dataSourceHandler.isRateLimitReached\">\n          API rate limit has been reached. It will be reset in one minute.\n        </div>\n      </div>\n      <table mat-table #table [dataSource]=\"dataSource\" aria-label=\"Elements\">\n        <ng-container [matColumnDef]=\"columnDefs[0].columnDef\">\n          <th mat-header-cell *matHeaderCellDef>{{columnDefs[0].headName}}</th>\n          <td mat-cell *matCellDef=\"let row\">{{row[columnDefs[0].columnDef].fullName}}</td>\n        </ng-container>\n        <ng-container [matColumnDef]=\"columnDefs[1].columnDef\">\n          <th mat-header-cell *matHeaderCellDef>{{columnDefs[1].headName}}</th>\n          <td mat-cell *matCellDef=\"let row\">{{row[columnDefs[1].columnDef].name}}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"option\" style=\"flex-direction: row-reverse;\">\n          <th mat-header-cell *matHeaderCellDef> Option </th>\n          <td mat-cell *matCellDef=\"let row\">\n\n            <div class=\"button-row\">\n              <button mat-icon-button color=\"warn\" (click)=\"delete(row)\">\n                <mat-icon>delete_sweep</mat-icon>\n              </button>\n            </div>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n\n      <mat-paginator #paginator [length]=\"dataSourceHandler.resultsLength\" pageIndex=\"0\" pageSize=\"15\"\n        [pageSizeOptions]=\"[5, 25, 50, 100, 250]\">\n      </mat-paginator>\n    </div>\n\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\" type=\"button\">Annuler</button>\n  <button mat-button [mat-dialog-close]=\"\" color=\"primary\" type=\"button\" (click)=\"onOkClick()\"\n    cdkFocusInitial>Ok</button>\n</div>"

/***/ }),

/***/ "./src/app/admin/user-role/user-role.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/user-role/user-role.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXItcm9sZS91c2VyLXJvbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/user-role/user-role.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/user-role/user-role.component.ts ***!
  \********************************************************/
/*! exports provided: UserRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleComponent", function() { return UserRoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_table_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/table-datasource */ "./src/app/admin/shared/table-datasource.ts");
/* harmony import */ var _app_shared_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/shared/models */ "./src/app/shared/models.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_user_role_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/user-role.service */ "./src/app/admin/shared/user-role.service.ts");
/* harmony import */ var _shared_role_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/role.service */ "./src/app/admin/shared/role.service.ts");








var UserRoleComponent = /** @class */ (function () {
    function UserRoleComponent(service, serRole, fb, data, dialogRef) {
        this.service = service;
        this.serRole = serRole;
        this.fb = fb;
        this.data = data;
        this.dialogRef = dialogRef;
        // @ViewChild(MatSort) sort: MatSort;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataSource = [];
        //
        this.columnDefs = [
            { columnDef: 'user', headName: 'user' },
            { columnDef: 'role', headName: 'role' },
            { columnDef: 'option', headName: 'Option' },
        ];
        this.i = 0;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = [
            this.columnDefs[this.i++].columnDef,
            this.columnDefs[this.i++].columnDef,
            this.columnDefs[this.i++].columnDef,
        ];
        this.o = new _app_shared_models__WEBPACK_IMPORTED_MODULE_4__["UserRole"]();
        this.isEdit = false;
        this.roles = this.serRole.get();
        //
        this.o.user = this.data.user;
        this.service.idUser = this.o.user.id;
        console.log(this.o.idUser, this.service.idUser);
    }
    UserRoleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSourceHandler = new _shared_table_datasource__WEBPACK_IMPORTED_MODULE_3__["TableDataSource"](this.paginator, this.service, this.update);
        // data is subscribed now , every event happen the will change and ofcource the datasource for table
        this.dataSourceHandler.methode().subscribe(function (data) {
            _this.dataSource = data;
            // console.log(data);
        });
        this.createForm();
    };
    // reset input
    UserRoleComponent.prototype.createForm = function () {
        this.myForm = this.fb.group({
            idUser: this.o.user.id,
            idRole: [this.o.idRole, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    UserRoleComponent.prototype.resetForm = function () {
        this.o = new _app_shared_models__WEBPACK_IMPORTED_MODULE_4__["UserRole"]();
        this.createForm();
    };
    UserRoleComponent.prototype.submit = function (myForm) {
        var obj = myForm.value;
        if (!this.isEdit) {
            this.post(obj);
        }
        else {
            this.put(obj);
        }
    };
    UserRoleComponent.prototype.post = function (obj) {
        var _this = this;
        console.log(obj);
        this.service.post(obj).subscribe(function (r) {
            _this.update.next(true);
            console.log(r);
            _this.resetForm();
        }, function (error) {
            console.log(error);
        });
    };
    UserRoleComponent.prototype.put = function (obj) {
        var _this = this;
        this.service.put(obj).subscribe(function (r) {
            _this.update.next(true);
            console.log(r);
            _this.isEdit = false;
            _this.resetForm();
            _this.myForm.get('id').enable();
        }, function (error) {
            console.log(error);
        });
    };
    UserRoleComponent.prototype.delete = function (o) {
        var _this = this;
        this.service.remove(o.idUser, o.idRole).subscribe(function (r) {
            _this.update.next(true);
        }, function (error) {
            console.log(error);
        });
    };
    UserRoleComponent.prototype.edit = function (o) {
        console.log(o);
        this.o = o;
        this.isEdit = true;
        this.myForm.get('id').disable();
        this.createForm();
    };
    UserRoleComponent.prototype.reset = function () {
        this.resetForm();
        this.myForm.get('id').enable();
        this.isEdit = false;
    };
    UserRoleComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    UserRoleComponent.prototype.onOkClick = function () {
        this.dialogRef.close('ok');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], UserRoleComponent.prototype, "paginator", void 0);
    UserRoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-role',
            template: __webpack_require__(/*! ./user-role.component.html */ "./src/app/admin/user-role/user-role.component.html"),
            styles: [__webpack_require__(/*! ./user-role.component.scss */ "./src/app/admin/user-role/user-role.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_user_role_service__WEBPACK_IMPORTED_MODULE_6__["UserRoleService"], _shared_role_service__WEBPACK_IMPORTED_MODULE_7__["RoleService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]])
    ], UserRoleComponent);
    return UserRoleComponent;
}());



/***/ }),

/***/ "./src/app/admin/user/user.component.html":
/*!************************************************!*\
  !*** ./src/app/admin/user/user.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button mat-raised-button (click)=\"openDialogForAddEdit()\">Ajouter</button> -->\n<div class=\"container \">\n  <mat-card style=\"border-radius: 0;\">\n    <form [formGroup]=\"myForm\" (ngSubmit)=\"submit(myForm)\">\n      <div class=\"row\">\n        <div class=\"ml-3\">\n          <mat-form-field>\n            <input matInput formControlName=\"fullName\" placeholder=\"Full Name\" required>\n          </mat-form-field>\n          &nbsp;\n          <mat-form-field>\n            <mat-select placeholder=\"Type user\" formControlName=\"idTypeUser\">\n              <mat-option value=\"\">...</mat-option>\n              <mat-option *ngFor=\"let o of typeusers | async\" [value]=\"o.id\">{{o.name}}</mat-option>\n            </mat-select>\n          </mat-form-field>\n          &nbsp;\n          <mat-form-field>\n            <input matInput formControlName=\"imageUrl\" placeholder=\"IMage Url\" required>\n          </mat-form-field>\n          &nbsp;\n          <mat-form-field>\n            <input matInput formControlName=\"email\" placeholder=\"Email\" required>\n          </mat-form-field>\n          &nbsp;\n          <mat-form-field>\n            <input matInput formControlName=\"password\" placeholder=\"Password\" required>\n          </mat-form-field>\n          &nbsp;\n          <mat-form-field>\n            <input matInput formControlName=\"tel\" placeholder=\"Tel\" required>\n          </mat-form-field>\n          &nbsp;\n          <mat-form-field>\n            <textarea matInput formControlName=\"address\" placeholder=\"Textarea\"></textarea>\n          </mat-form-field>\n          &nbsp;\n        </div>\n        &nbsp;\n        <div class=\"ml-3 mt-3\">\n          <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"!myForm.valid\">\n            <mat-icon>{{!isEdit ? 'add' : 'create'}}</mat-icon>\n          </button>\n          &nbsp;\n          <button mat-stroked-button type=\"button\" (click)=\"reset()\">\n            <mat-icon>refresh</mat-icon>\n          </button>\n        </div>\n\n\n      </div>\n    </form>\n  </mat-card>\n\n\n\n  <div class=\"example-container mat-elevation-z8 mt-3 mb-3\">\n    <div class=\"example-loading-shade\"\n      *ngIf=\"dataSourceHandler.isLoadingResults || dataSourceHandler.isRateLimitReached\">\n      <mat-spinner *ngIf=\"dataSourceHandler.isLoadingResults\"></mat-spinner>\n      <div class=\"example-rate-limit-reached\" *ngIf=\"dataSourceHandler.isRateLimitReached\">\n        API rate limit has been reached. It will be reset in one minute.\n      </div>\n    </div>\n    <table mat-table #table [dataSource]=\"dataSource\" multiTemplateDataRows aria-label=\"Elements\">\n      <ng-container [matColumnDef]=\"columnDefs[0].columnDef\">\n        <th mat-header-cell *matHeaderCellDef>{{columnDefs[0].headName}}</th>\n        <td mat-cell *matCellDef=\"let row\">{{row[columnDefs[0].columnDef]}}</td>\n      </ng-container>\n      <ng-container [matColumnDef]=\"columnDefs[1].columnDef\">\n        <th mat-header-cell *matHeaderCellDef>{{columnDefs[1].headName}}</th>\n        <td mat-cell *matCellDef=\"let row\">{{row[columnDefs[1].columnDef]}}</td>\n      </ng-container>\n      <ng-container [matColumnDef]=\"columnDefs[2].columnDef\">\n        <th mat-header-cell *matHeaderCellDef>{{columnDefs[2].headName}}</th>\n        <td mat-cell *matCellDef=\"let row\">{{row[columnDefs[2].columnDef]}}</td>\n      </ng-container>\n      <ng-container matColumnDef=\"option\" style=\"flex-direction: row-reverse;\">\n        <th mat-header-cell *matHeaderCellDef> Option </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <div class=\"button-row\">\n            <button mat-icon-button (click)=\"openDialog(row)\">\n              <mat-icon>control_point</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"expandedElement = expandedElement === row ? null : row\">\n              <mat-icon>pan_tool</mat-icon>\n            </button>\n            <button mat-icon-button color=\"primary\" (click)=\"edit(row)\">\n              <mat-icon>create</mat-icon>\n            </button>\n            <button mat-icon-button color=\"warn\" (click)=\"delete(row)\">\n              <mat-icon>delete_sweep</mat-icon>\n            </button>\n          </div>\n        </td>\n      </ng-container>\n      <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n      <ng-container matColumnDef=\"expandedDetail\">\n        <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"displayedColumns.length\">\n          <div class=\"example-element-detail\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n\n            <div class=\"example-element-description\">\n              <h5>Address : {{element.address}}</h5>\n              <h5>Type user : {{element.typeUser.name}}</h5>\n              <h5>Image Url : {{element.imageUrl}}</h5>\n              <h5>Password : {{element.password}}</h5>\n              <h5>Roles : <span *ngFor=\"let e of element.userRoles\">-{{e.role.name}}</span></h5>\n            </div>\n          </div>\n        </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\" class=\"example-element-row\"\n        [class.example-expanded-row]=\"expandedElement === element\">\n      </tr>\n      <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n    </table>\n\n    <mat-paginator #paginator [length]=\"dataSourceHandler.resultsLength\" pageIndex=\"0\" pageSize=\"15\"\n      [pageSizeOptions]=\"[5, 25, 50, 100, 250]\">\n    </mat-paginator>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/admin/user/user.component.scss":
/*!************************************************!*\
  !*** ./src/app/admin/user/user.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\ntr.example-detail-row {\n  height: 0; }\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #f5f5f5; }\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef; }\n\n.example-element-row td {\n  border-bottom-width: 0; }\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex; }\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px; }\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal; }\n\n.example-element-description {\n  padding: 16px; }\n\n.example-element-description-attribution {\n  opacity: 0.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlci9EOlxcZGV2XFxhc3BUZXN0QXBwXFxtdmMvc3JjXFxhcHBcXGFkbWluXFx1c2VyXFx1c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVyxFQUNaOztBQUVEO0VBQ0UsVUFBUyxFQUNWOztBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGNBQWEsRUFDZDs7QUFFRDtFQUNFLGdCQUFlO0VBQ2Ysd0JBQXVCO0VBQ3ZCLGFBQVk7RUFDWixxQkFBb0I7RUFDcEIsY0FBYTtFQUNiLGNBQWEsRUFDZDs7QUFFRDtFQUNFLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICB0ci5leGFtcGxlLWRldGFpbC1yb3cge1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICB0ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgfVxyXG4gIFxyXG4gIHRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xyXG4gICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBoZWlnaHQ6IDEwNHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1lbGVtZW50LXN5bWJvbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/admin/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_table_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/table-datasource */ "./src/app/admin/shared/table-datasource.ts");
/* harmony import */ var _app_shared_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app/shared/models */ "./src/app/shared/models.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/admin/shared/user.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _user_role_user_role_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user-role/user-role.component */ "./src/app/admin/user-role/user-role.component.ts");
/* harmony import */ var _shared_typeuser_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/typeuser.service */ "./src/app/admin/shared/typeuser.service.ts");










var UserComponent = /** @class */ (function () {
    function UserComponent(service, serTypeUser, fb, dialog) {
        this.service = service;
        this.serTypeUser = serTypeUser;
        this.fb = fb;
        this.dialog = dialog;
        // @ViewChild(MatSort) sort: MatSort;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataSource = [];
        //
        this.columnDefs = [
            { columnDef: 'fullName', headName: 'fullName' },
            { columnDef: 'email', headName: 'email' },
            { columnDef: 'tel', headName: 'tel' },
            { columnDef: 'option', headName: 'Option' },
        ];
        this.i = 0;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = [
            this.columnDefs[this.i++].columnDef,
            this.columnDefs[this.i++].columnDef,
            this.columnDefs[this.i++].columnDef,
            this.columnDefs[this.i++].columnDef,
        ];
        this.o = new _app_shared_models__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.isEdit = false;
        this.typeusers = this.serTypeUser.get();
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSourceHandler = new _shared_table_datasource__WEBPACK_IMPORTED_MODULE_3__["TableDataSource"](this.paginator, this.service, this.update);
        // data is subscribed now , every event happen the will change and ofcource the datasource for table
        this.dataSourceHandler.methode().subscribe(function (data) {
            _this.dataSource = data;
            // console.log(data);
        });
        this.createForm();
    };
    // reset input
    UserComponent.prototype.createForm = function () {
        this.myForm = this.fb.group({
            id: this.o.id,
            fullName: [this.o.fullName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            imageUrl: [this.o.imageUrl, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            idTypeUser: [this.o.idTypeUser, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: [this.o.address, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [this.o.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [this.o.password, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tel: [this.o.tel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    UserComponent.prototype.resetForm = function () {
        this.o = new _app_shared_models__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.createForm();
    };
    UserComponent.prototype.submit = function (myForm) {
        var obj = myForm.value;
        if (!this.isEdit) {
            this.post(obj);
        }
        else {
            this.put(obj);
        }
    };
    UserComponent.prototype.post = function (obj) {
        var _this = this;
        console.log(obj);
        this.service.post(obj).subscribe(function (r) {
            _this.update.next(true);
            console.log(r);
            _this.resetForm();
        }, function (error) {
            console.log(error);
        });
    };
    UserComponent.prototype.put = function (obj) {
        var _this = this;
        this.service.put(obj).subscribe(function (r) {
            _this.update.next(true);
            console.log(r);
            _this.isEdit = false;
            _this.resetForm();
            _this.myForm.get('id').enable();
        }, function (error) {
            console.log(error);
        });
    };
    UserComponent.prototype.delete = function (o) {
        var _this = this;
        this.service.delete(o.id).subscribe(function (r) {
            _this.update.next(true);
        }, function (error) {
            console.log(error);
        });
    };
    UserComponent.prototype.edit = function (o) {
        console.log(o);
        this.o = o;
        this.isEdit = true;
        this.myForm.get('id').disable();
        this.createForm();
    };
    UserComponent.prototype.reset = function () {
        this.resetForm();
        this.myForm.get('id').enable();
        this.isEdit = false;
    };
    UserComponent.prototype.openDialog = function (o) {
        var _this = this;
        var dialogRef = this.dialog.open(_user_role_user_role_component__WEBPACK_IMPORTED_MODULE_8__["UserRoleComponent"], {
            width: '750px',
            disableClose: true,
            data: { user: o }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === undefined) {
                console.log('vous avez quittez le dialog');
            }
            else {
                _this.update.next(true);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], UserComponent.prototype, "paginator", void 0);
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/admin/user/user.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/admin/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _shared_typeuser_service__WEBPACK_IMPORTED_MODULE_9__["TypeuserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/shared/models.ts":
/*!**********************************!*\
  !*** ./src/app/shared/models.ts ***!
  \**********************************/
/*! exports provided: User, TypeUser, UserRole, Advert, Marque, Country, Model, Transmission, Role, Carburant, Typevoiture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeUser", function() { return TypeUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRole", function() { return UserRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Advert", function() { return Advert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marque", function() { return Marque; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transmission", function() { return Transmission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carburant", function() { return Carburant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Typevoiture", function() { return Typevoiture; });
var User = /** @class */ (function () {
    function User() {
        this.id = 0;
        this.fullName = '';
        this.imageUrl = '';
        this.address = '';
        this.email = '';
        this.password = '';
        this.tel = '';
        this.idTypeUser = 0;
        this.typeUser = new TypeUser();
        this.userRoles = [];
        this.adverts = [];
    }
    return User;
}());

var TypeUser = /** @class */ (function () {
    function TypeUser() {
        this.id = 0;
        this.name = '';
        this.users = [];
    }
    return TypeUser;
}());

var UserRole = /** @class */ (function () {
    function UserRole() {
        this.idUser = 0;
        this.idRole = 0;
        this.user = new User();
        this.role = new Role();
    }
    return UserRole;
}());

var Advert = /** @class */ (function () {
    function Advert() {
        this.id = 0;
        this.idUser = 0;
        this.idModel = 0;
        this.dateAdvert = new Date();
        this.dateSell = new Date();
        this.state = false;
        this.user = new User();
        this.model = new Model();
    }
    return Advert;
}());

var Marque = /** @class */ (function () {
    function Marque() {
        this.id = 0;
        this.name = '';
        this.imageUrl = '';
        this.idCountry = 0;
        this.country = new Country();
        this.models = [];
    }
    return Marque;
}());

var Country = /** @class */ (function () {
    function Country() {
        this.id = 0;
        this.name = '';
        this.imageUrl = '';
        this.models = [];
    }
    return Country;
}());

var Model = /** @class */ (function () {
    function Model() {
    }
    return Model;
}());

var Transmission = /** @class */ (function () {
    function Transmission() {
        this.id = 0;
        this.name = '';
    }
    return Transmission;
}());

var Role = /** @class */ (function () {
    function Role() {
        this.id = 0;
        this.name = '';
    }
    return Role;
}());

var Carburant = /** @class */ (function () {
    function Carburant() {
        this.id = 0;
        this.name = '';
    }
    return Carburant;
}());

var Typevoiture = /** @class */ (function () {
    function Typevoiture() {
        this.id = 0;
        this.name = '';
    }
    return Typevoiture;
}());



/***/ }),

/***/ "./src/app/shared/notify-hub.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/notify-hub.service.ts ***!
  \**********************************************/
/*! exports provided: NotifyHubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyHubService", function() { return NotifyHubService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _mytoastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mytoastr.service */ "./src/app/shared/mytoastr.service.ts");





var API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].hubUrl; // + 'Note'; // CommentHub
var NotifyHubService = /** @class */ (function () {
    function NotifyHubService(toastr) {
        this.toastr = toastr;
        this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newNotif = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // this.noteHubCnx();
    }
    NotifyHubService.prototype.noteHubCnx = function () {
        var _this = this;
        this.connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_2__["HubConnectionBuilder"]()
            .withUrl(API_URL + 'notify')
            .build();
        // connecter au hub
        this.connection.start().then(function (r) { return console.log(r); }).catch(function (e) { return console.log(e); });
        // this.connection.on('BroadcastIncident', (r: any) => this.notifyIncident(r));
        // this.connection.on('BroadcastEnvoi', (r: any) => this.notifyEnvoi(r));
        this.connection.on('BroadcastActualite', function (r) { return _this.notify(r); });
    };
    NotifyHubService.prototype.notify = function (r) {
        // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
        this.newNotif.next(true);
        this.refresh.next(r);
        // this.toastr.toastNotif(r); // .onTap.subscribe(() => console.log(r));
    };
    NotifyHubService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mytoastr_service__WEBPACK_IMPORTED_MODULE_4__["MyToastrService"]])
    ], NotifyHubService);
    return NotifyHubService;
}());



/***/ }),

/***/ "./src/app/shared/session.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/session.service.ts ***!
  \*******************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models */ "./src/app/shared/models.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var KEY_USER = 'USER_MAIN_PROJECT';
var SessionService = /** @class */ (function () {
    // public user: User;
    // public reader: Reader;
    // public antennas: Antenne[];
    // public isReaderConnected = false;
    function SessionService(platformId) {
        this.platformId = platformId;
        this._user = new _models__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.getSession();
    }
    Object.defineProperty(SessionService.prototype, "user", {
        get: function () {
            // this.getSession();
            // console.log(this._user);
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    // se connecter
    SessionService.prototype.doSignIn = function (user) {
        if (!user) {
            return;
        }
        this._user = user;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            localStorage.setItem(KEY_USER, btoa(JSON.stringify(this._user)));
        }
    };
    // se deconnecter
    SessionService.prototype.doSignOut = function () {
        // remove user from local storage to log user out
        this._user = new _models__WEBPACK_IMPORTED_MODULE_2__["User"]();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            localStorage.removeItem(KEY_USER);
        }
    };
    Object.defineProperty(SessionService.prototype, "isSignedIn", {
        // this methode is for our auth guard
        get: function () {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
                return !!localStorage.getItem(KEY_USER);
            }
        },
        enumerable: true,
        configurable: true
    });
    //
    SessionService.prototype.getSession = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            if (localStorage.getItem(KEY_USER)) {
                this._user = JSON.parse(atob(localStorage.getItem(KEY_USER)));
            }
        }
    };
    SessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], SessionService);
    return SessionService;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map