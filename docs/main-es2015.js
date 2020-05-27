(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #todolistForm = \"ngForm\" (ngSubmit) = \"onAddTask(todolistForm)\">\n  <div class=\"form-group\">\n    <div class=\"todo-title\">To Do Lists</div>\n    <div class=\"task-input\">\n    <input type=\"text\" class=\"form-control\" id=\"todotask\" aria-describedby=\"todotask\" \n           name=\"taskName\" ngModel required>\n    </div>  \n  </div>\n  <div class=\"add-list\">\n  <button  type=\"submit\" [disabled]=!todolistForm.valid class=\"btn btn-primary\">Submit</button>\n</div>\n<ul class=\"task-list\" *ngFor=\"let task of finaltoDoLists ; trackBy:trackByItemId\" >\n <li> \n    <table class=\"table table-bordered\">\n        <tbody>\n          <tr>\n            <td>\n              <div class=\"form-check form-check-inline\">\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" [checked]=\"task.complete\" name=\"task.complete\" disabled>\n              </div>\n            </td>\n            <td class=\"task-row\"> {{task.title}} </td>\n            <td><button type=\"button\" class=\"btn btn-danger delete-button\" (click)=\"delete(task)\">Delete</button></td>\n            <td><button type=\"button\" class=\"btn btn-danger delete-button\" (click)=\"edit(task)\">Modify</button></td>\n            <td *ngIf = \"!task.complete\"><button type=\"button\" class=\"btn btn-danger delete-button\" (click)=\"onTaskStatusUpdate(task,'Done')\">Mark As Done</button></td>\n            <td *ngIf = \"task.complete\"><button type=\"button\" class=\"btn btn-danger delete-button\" (click)=\"onTaskStatusUpdate(task,'Undone')\">Mark As Undone</button></td>\n          </tr>\n        </tbody>\n      </table> \n </li>\n</ul>\n</form>\n\n<div *ngIf=\"isDuplicate\" class=\"alert alert-warning duplicate-alert\" role=\"alert\">\n  <h4 class=\"alert-heading\">ALERT</h4>\n  <p>You have already added this tasks. Do you want to add it again?</p>\n  <hr>\n  <button type=\"button\" class=\"btn btn-primary submit-button\" (click)=\"cancel()\">No</button>\n  <button type=\"button\" class=\"btn btn-primary cancel-button\" (click)=\"submit()\">Yes</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-task/edit-task.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-task/edit-task.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"edit-dialog\">\n    <h2 mat-dialog-title>Edit Task</h2>\n    <mat-dialog-content>\n        \n        <div fxLayout = \"column\">\n            <form #editTaskForm>\n            <label>Modified Name : </label>\n            <input type=\"text\" class=\"form-control\" id=\"editedtask\" aria-describedby=\"editedtask\" \n            name=\"editedTaskName\" [(ngModel)]=\"taskToEdit.title\" value=\"taskToEdit.title\" required>\n            </form>\n        </div>\n    \n    </mat-dialog-content>\n    \n    <mat-dialog-actions>\n        <button class=\"mat-raised-button\"(click)=\"close()\">Cancel</button>\n        <button class=\"mat-raised-button mat-primary\"(click)=\"onEditTask()\">Add to Cart</button>\n    </mat-dialog-actions>\n    </div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".todo-title {\n  text-align: center;\n  font-weight: bolder;\n  font-size: 50px;\n}\n\n.task-input {\n  width: 80%;\n  padding-left: 20%;\n  padding-top: 5%;\n}\n\n.add-list {\n  padding-left: 45%;\n  padding-bottom: 2%;\n}\n\n.task-list {\n  list-style: none;\n  margin-left: 17%;\n}\n\n.duplicate-alert {\n  width: 50%;\n  margin-left: 24%;\n}\n\n.submit-button {\n  width: 15%;\n  margin-left: 67%;\n  -index: 1;\n}\n\n.cancel-button {\n  margin-left: 3%;\n  width: 15%;\n}\n\n.task-row {\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZjpcXDIwMjBcXGdpdGh1YiBkZXBsb3ltZW50IHRlc1xcVE9ET0xJU1RcXHRvZG9saXN0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUVJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNBSjs7QURHQTtFQUVJLGVBQUE7RUFDQSxVQUFBO0FDREo7O0FESUE7RUFDSSxVQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9kby10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbi50YXNrLWlucHV0e1xyXG4gICAgd2lkdGg6ODAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbn1cclxuXHJcbi5hZGQtbGlzdHtcclxuICAgIHBhZGRpbmctbGVmdDogNDUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIlXHJcbn1cclxuXHJcbi50YXNrLWxpc3Qge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNyVcclxufVxyXG5cclxuLmR1cGxpY2F0ZS1hbGVydHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjQlO1xyXG59XHJcblxyXG4uc3VibWl0LWJ1dHRvblxyXG57XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY3JTtcclxuICAgIC1pbmRleDogMTtcclxufVxyXG5cclxuLmNhbmNlbC1idXR0b25cclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgd2lkdGg6IDE1JTtcclxufVxyXG5cclxuLnRhc2stcm93e1xyXG4gICAgd2lkdGg6NjAlXHJcbn1cclxuXHJcbi5tb2RhbCBmYWRle1xyXG4gICAgLy9kaXNwbGF5OiBub25lO1xyXG59XHJcbiIsIi50b2RvLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi50YXNrLWlucHV0IHtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZy1sZWZ0OiAyMCU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuLmFkZC1saXN0IHtcbiAgcGFkZGluZy1sZWZ0OiA0NSU7XG4gIHBhZGRpbmctYm90dG9tOiAyJTtcbn1cblxuLnRhc2stbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAxNyU7XG59XG5cbi5kdXBsaWNhdGUtYWxlcnQge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogMjQlO1xufVxuXG4uc3VibWl0LWJ1dHRvbiB7XG4gIHdpZHRoOiAxNSU7XG4gIG1hcmdpbi1sZWZ0OiA2NyU7XG4gIC1pbmRleDogMTtcbn1cblxuLmNhbmNlbC1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMyU7XG4gIHdpZHRoOiAxNSU7XG59XG5cbi50YXNrLXJvdyB7XG4gIHdpZHRoOiA2MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_todolist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/todolist.service */ "./src/app/shared/todolist.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-task/edit-task.component */ "./src/app/edit-task/edit-task.component.ts");





let AppComponent = class AppComponent {
    constructor(todolistService, dialog) {
        this.todolistService = todolistService;
        this.dialog = dialog;
        this.title = 'todolist';
        this._isDuplicate = false;
    }
    ngOnInit() {
        this.todolistService.getToDoLists().subscribe(success => {
            const list = [];
            list.push(success);
            this.finaltoDoLists = list[0].filter(task => task.title !== "");
        }, error => {
        });
    }
    get isDuplicate() {
        return this._isDuplicate;
    }
    onAddTask(data) {
        this.tasks = data.value.taskName;
        data.form.reset();
        this.onGetTasks(this.tasks);
    }
    onGetTasks(data) {
        this.toDoLists = [];
        this.todolistService.getToDoLists().subscribe(success => {
            this.toDoLists.push(success);
            const duplicate = this.toDoLists[0].find(list => list.title == data);
            if (duplicate) {
                this._isDuplicate = true;
            }
            else {
                this.submit();
            }
        });
    }
    cancel() {
        this._isDuplicate = false;
    }
    submit() {
        this._isDuplicate = false;
        const task = {
            "title": this.tasks
        };
        this.todolistService.addToDoLists(task).subscribe(success => {
            this.todolistService.getToDoLists().subscribe(success => {
                const list = [];
                list.push(success);
                this.finaltoDoLists = list[0].filter(task => task.title !== "");
            }, error => {
            });
        }, error => {
            console.log("error");
        });
    }
    delete(list) {
        this.todolistService.deleteToDoList(list).subscribe(success => {
            this.todolistService.getToDoLists().subscribe(success => {
                const list = [];
                list.push(success);
                this.finaltoDoLists = list[0].filter(task => task.title !== "");
            }, error => {
            });
        }, error => {
        });
    }
    edit(task) {
        const dialogRef = this.dialog.open(_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_4__["EditTaskComponent"], {
            width: '250px',
            panelClass: 'custom-modalbox',
            data: {
                taskToEdit: task
            }
        }).afterClosed().subscribe((editedLists) => {
            this.getToDoListFromServer();
        });
    }
    getToDoListFromServer() {
        this.todolistService.getToDoLists().subscribe(success => {
            const list = [];
            list.push(success);
            this.finaltoDoLists = list[0].filter(task => task.title !== "");
        }, error => {
        });
    }
    setTaskToEdit(task) {
        this.taskToEditId = task.id;
    }
    trackByItemId(index, item) {
        return item.id;
    }
    onTaskStatusUpdate(task, status) {
        const statusEdit = JSON.parse(JSON.stringify(task));
        statusEdit.complete = status === 'Done' ? true : false;
        this.todolistService.editToDoList(task.id, statusEdit).subscribe(success => {
            this.getToDoListFromServer();
        }, error => {
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _shared_todolist_service__WEBPACK_IMPORTED_MODULE_2__["TodolistService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('alertBox', { static: false })
], AppComponent.prototype, "alertBox", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-task/edit-task.component */ "./src/app/edit-task/edit-task.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_7__["EditTaskComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [_edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_7__["EditTaskComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/edit-task/edit-task.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-task/edit-task.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .edit-dialog{\r\n    margin-left: 200%;\r\n    margin-top: -111%;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: lightgray;\r\n    padding: 38px;\r\n    z-index: 2;\r\n}\r\n\r\n.mat-dialog-container{\r\n    transform: none;\r\n    margin-top: -110%  !important;\r\n    margin-left: 207%  !important;\r\n    background: lightgray !important;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    z-index: 2;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC10YXNrL2VkaXQtdGFzay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQkciLCJmaWxlIjoic3JjL2FwcC9lZGl0LXRhc2svZWRpdC10YXNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuZWRpdC1kaWFsb2d7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwJTtcclxuICAgIG1hcmdpbi10b3A6IC0xMTElO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiAzOHB4O1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLm1hdC1kaWFsb2ctY29udGFpbmVye1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogLTExMCUgICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjA3JSAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMjtcclxufSAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/edit-task/edit-task.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-task/edit-task.component.ts ***!
  \**************************************************/
/*! exports provided: EditTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function() { return EditTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _shared_todolist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/todolist.service */ "./src/app/shared/todolist.service.ts");




let EditTaskComponent = class EditTaskComponent {
    constructor(dialogRef, data, todolistService) {
        this.dialogRef = dialogRef;
        this.todolistService = todolistService;
        this.taskToEdit = JSON.parse(JSON.stringify(data.taskToEdit));
        this.editedTaskId = data.taskToEdit.id;
    }
    ngOnInit() {
    }
    onEditTask(editedTask) {
        const editedtask = this.taskToEdit;
        this.todolistService.editToDoList(this.editedTaskId, editedtask).subscribe(success => {
            this.close();
        }, error => {
        });
    }
    editTask() {
    }
    close() {
        this.dialogRef.close();
    }
};
EditTaskComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _shared_todolist_service__WEBPACK_IMPORTED_MODULE_3__["TodolistService"] }
];
EditTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-task',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-task.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-task/edit-task.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-task.component.css */ "./src/app/edit-task/edit-task.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], EditTaskComponent);



/***/ }),

/***/ "./src/app/shared/todolist.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/todolist.service.ts ***!
  \********************************************/
/*! exports provided: TodolistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodolistService", function() { return TodolistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TodolistService = class TodolistService {
    constructor(http) {
        this.http = http;
    }
    addToDoLists(task) {
        return this.http.post("http://localhost:3000/posts", task);
    }
    getToDoLists() {
        return this.http.get("http://localhost:3000/posts");
    }
    deleteToDoList(task) {
        const id = task.id;
        const url = "http://localhost:3000/posts/" + id;
        return this.http.delete(url);
    }
    editToDoList(id, task) {
        const url = "http://localhost:3000/posts/" + id;
        return this.http.put(url, task);
    }
};
TodolistService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TodolistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TodolistService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! f:\2020\github deployment tes\TODOLIST\todolist\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map