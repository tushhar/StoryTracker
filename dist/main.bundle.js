webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<story [defects]=\"defects\" \n(delete)=\"deleteDefect($event.defect)\"\n(update)=\"updateDefect($event.defect)\"\n></story>\n<!-- <button (click)=\"addRow()\">ADD</button> -->\n<a class=\"btn-floating btn-medium waves-effect waves-light red\" style=\"float: right\" (click)=\"addRow()\"><i class=\"material-icons\">+</i></a>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storyService__ = __webpack_require__("../../../../../src/app/storyService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_storyService) {
        this._storyService = _storyService;
        this.defects = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getDefects();
    };
    AppComponent.prototype.getDefects = function () {
        var _this = this;
        this.defects = this._storyService.returnDefects().subscribe(
        // the first argument is a function which runs on success
        function (data) { _this.defects = data; }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () { return console.log('done loading defects'); });
    };
    AppComponent.prototype.updateDefect = function (defect) {
        var _this = this;
        this._storyService.updateDefect(defect).subscribe(function (data) {
            // refresh the list
            _this.getDefects();
            return true;
        }, function (error) {
            console.error("Error saving defect!");
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
        });
    };
    AppComponent.prototype.deleteDefect = function (defect) {
        var _this = this;
        if (confirm("Are you sure you want to delete " + defect.story + "?")) {
            this._storyService.deleteDefect(defect.idn).subscribe(function (data) {
                // refresh the list
                _this.getDefects();
                return true;
            }, function (error) {
                console.error("Error deleting defect!");
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
            });
        }
    };
    AppComponent.prototype.addRow = function () {
        var _this = this;
        var defect = { idn: "", story: "new", developer: "", tester: "", analysis: true, coding: false, testing: false, done: false, block: false };
        this._storyService.createDefect(defect).subscribe(function (data) {
            // refresh the list
            _this.getDefects();
            return true;
        }, function (error) {
            console.error("Error saving defect!");
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__storyService__["a" /* StoryService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__story_story_component__ = __webpack_require__("../../../../../src/app/story/story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storyService__ = __webpack_require__("../../../../../src/app/storyService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__story_story_component__["a" /* StoryComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__storyService__["a" /* StoryService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/story/story.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/story/story.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-panel\">Sprint progress  <div class=\"progress\"><div class=\"determinate\" [style.width]=\"percentageofdone + '%'\"></div>\n</div>\n</div>\n\n<div class=\"card-panel\">\n\n<table class=\"striped responsive-table\">\n    \n      <tr>\n        <th>Story</th>\n        <th>Developer</th>\n        <th>Tester</th>\n        <th> Analysis</th>\n        <th> Coding</th>\n        <th>&nbsp;&nbsp;Testing</th>\n        <th>&nbsp;&nbsp;Done</th>\n        <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Actions</th>\n        <th>&nbsp;&nbsp;&nbsp;&nbsp;Block</th>\n      </tr>\n    \n      <tr *ngFor=\"let defect of defects;let bi = index\">\n        <td>\n          <input type=\"text\" size=\"15\" maxlength=\"15\" [(ngModel)]=\"defect.story\" class=\"form-control\" />\n        </td>\n        \n        <td>\n          <input type=\"text\" size=\"15\" maxlength=\"15\" [(ngModel)]=\"defect.developer\" class=\"form-control\" />\n        </td>\n    \n        <td>\n          <input type=\"text\" size=\"15\" maxlength=\"15\" [(ngModel)]=\"defect.tester\" class=\"form-control\" />\n        </td>\n      <td>\n          <button class=\"btn waves-effect waves-light\" [style.background]=\" (defect.analysis) ?'#42f445':'#adb0b5'\" (click)=\"selectAnalysis(defect)\">&nbsp;&nbsp;&nbsp;&nbsp;</button>\n        </td>\n        <td>\n            <button class=\"btn waves-effect waves-light\" [style.background]=\" (defect.coding) ?'#42f445':'#adb0b5'\" (click)=\"selectCoding(defect)\">&nbsp;&nbsp;&nbsp;&nbsp;</button>\n          </td>\n          <td>\n              <button class=\"btn waves-effect waves-light\" [style.background]=\" (defect.testing) ?'#42f445':'#adb0b5'\" (click)=\"selectTesting(defect)\">&nbsp;&nbsp;&nbsp;&nbsp;</button>\n         </td>\n         <td>\n            <button class=\"btn waves-effect waves-light\" [style.background]=\" (defect.done) ?'#42f445':'#adb0b5'\" (click)=\"selectDone(defect)\">&nbsp;&nbsp;&nbsp;&nbsp;</button>\n       </td>\n       <td>\n        <!-- <a class=\"waves-effect waves-light btn\" (click)=\"deleteMe(defect)\">Delete</a><br/>\n        <a class=\"waves-effect waves-light btn\" (click)=\"updateMe(defect)\">Update</a> -->\n        <button class=\"btn\" (click)=\"deleteMe(defect)\">Delete</button>\n        <button class=\"btn\" (click)=\"updateMe(defect)\">Update</button>\n        \n   </td>\n   <td>\n      <button class=\"btn waves-effect waves-light\" [style.background]=\" !(defect.block) ?'#adb0b5':'#f44141'\" (click)=\"blockMe(defect)\">Block</button>\n   </td>\n\n      </tr>\n    \n    </table>\n \n   \n  </div>"

/***/ }),

/***/ "../../../../../src/app/story/story.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoryComponent = (function () {
    function StoryComponent() {
        this.numberofdone = 0;
        this.numberofanalysis = 0;
        this.numberoftesting = 0;
        this.numberofcoding = 0;
        this.percentageofdone = 0;
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.update = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.block = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    StoryComponent.prototype.ngOnInit = function () {
    };
    StoryComponent.prototype.selectAnalysis = function (defect) {
        defect.block = false;
        defect.analysis = true;
        defect.coding = false;
        defect.done = false;
        defect.testing = false;
        this.updateMe(defect);
    };
    ;
    StoryComponent.prototype.selectCoding = function (defect) {
        defect.block = false;
        defect.analysis = true;
        defect.coding = true;
        defect.done = false;
        defect.testing = false;
        this.updateMe(defect);
    };
    ;
    StoryComponent.prototype.selectTesting = function (defect) {
        defect.block = false;
        defect.analysis = true;
        defect.coding = true;
        defect.done = false;
        defect.testing = true;
        this.updateMe(defect);
    };
    ;
    StoryComponent.prototype.selectDone = function (defect) {
        defect.block = false;
        defect.analysis = true;
        defect.coding = true;
        defect.done = true;
        defect.testing = true;
        this.updateMe(defect);
    };
    ;
    StoryComponent.prototype.deleteMe = function (defect) {
        this.delete.emit({ defect: defect });
    };
    ;
    StoryComponent.prototype.updateMe = function (defect) {
        this.summary();
        this.update.emit({ defect: defect });
    };
    ;
    StoryComponent.prototype.blockMe = function (defect) {
        if (defect.block) {
            defect.block = false;
            defect.analysis = true;
        }
        else {
            defect.block = true;
            defect.analysis = false;
            defect.coding = false;
            defect.done = false;
            defect.testing = false;
        }
        this.updateMe(defect);
    };
    ;
    StoryComponent.prototype.summary = function () {
        var done = 0;
        var testing = 0;
        var analysis = 0;
        var coding = 0;
        for (var i = 0, len = this.defects.length; i < len; i++) {
            if (this.defects[i].done) {
                done = done + 1;
            }
            if (this.defects[i].analysis) {
                analysis = analysis + 1;
            }
            if (this.defects[i].coding) {
                coding = coding + 1;
            }
            if (this.defects[i].testing) {
                testing = testing + 1;
            }
        }
        this.numberofdone = done;
        this.numberoftesting = testing - done;
        this.numberofcoding = coding - testing;
        this.numberofanalysis = analysis - coding;
        this.percentageofdone = (this.numberofdone / this.defects.length) * 100;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], StoryComponent.prototype, "defects", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], StoryComponent.prototype, "delete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], StoryComponent.prototype, "update", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], StoryComponent.prototype, "block", void 0);
    StoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'story',
            template: __webpack_require__("../../../../../src/app/story/story.component.html"),
            styles: [__webpack_require__("../../../../../src/app/story/story.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], StoryComponent);
    return StoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/storyService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoryService = (function () {
    function StoryService(http) {
        this.http = http;
        this.defects = null;
    }
    StoryService.prototype.returnDefects = function () {
        return this.http.get('/defects').map(function (res) { return res.json(); });
    };
    StoryService.prototype.deleteDefect = function (index) {
        return this.http.delete('/defect/' + index);
        // for (var i = 0, len = this.defects.length; i < len; i++) {
        //     if(this.defects[i].idn == index){
        //         this.defects.splice(i,1);
        //     }
        //   }
    };
    StoryService.prototype.updateDefect = function (defect) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify({ "idn": defect.idn, "story": defect.story, "developer": defect.developer, "tester": defect.tester, "analysis": defect.analysis, "coding": defect.coding, "testing": defect.testing, "done": defect.done, "block": defect.block });
        return this.http.put('/defect/' + defect.idn, body, options).map(function (res) { return res.json(); });
        // for (var i = 0, len = this.defects.length; i < len; i++) {
        //     if(this.defects[i].idn ==defect.idn){
        //         this.defects[i]=defect;
        //     }
        //   }
    };
    StoryService.prototype.createDefect = function (defect) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify({ "idn": defect.idn, "story": defect.story, "developer": defect.developer, "tester": defect.tester, "analysis": defect.analysis, "coding": defect.coding, "testing": defect.testing, "done": defect.done, "block": defect.block });
        return this.http.post('/defect/', body, options).map(function (res) { return res.json(); });
    };
    StoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], StoryService);
    return StoryService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map