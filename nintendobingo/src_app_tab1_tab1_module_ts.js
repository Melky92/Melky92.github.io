"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 8383:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2371);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 4265:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2371);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 456);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 8383);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 2371:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_UCB_CSIDEV_Desktop_projects_BingoNintendo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab1.page.html */ 2817);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 8443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);






let Tab1Page = class Tab1Page {
    constructor(formBuilder, toastController) {
        this.formBuilder = formBuilder;
        this.toastController = toastController;
    }
    ngOnInit() {
        this.bingoForm = this.formBuilder.group({
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(10)]],
            opcion1: [false],
            opcion2: [false],
            opcion3: [false],
            opcion4: [false],
            opcion5: [false],
            opcion6: [false],
            opcion7: [false],
            opcion8: [false],
            opcion9: [false],
            opcion10: [false],
            opcion11: [false],
            opcion12: [false],
            opcion13: [false],
            opcion14: [false],
            opcion15: [false],
            opcion16: [false],
            opcion17: [false],
            opcion18: [false],
            opcion19: [false],
            opcion20: [false],
            opcion21: [false],
            opcion22: [false],
            opcion23: [false],
            opcion24: [false],
            opcion25: [false],
        });
    }
    makeEntryKey(name) {
        return name.toString().toLowerCase().replace(/\s/g, '');
    }
    addBingoEntry(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let entrykey = this.makeEntryKey(data.nombre);
            let newEntry = { [entrykey]: data };
            try {
                let res = yield fetch('https://getpantry.cloud/apiv1/pantry/42246c73-26f8-4874-8219-dd4ead8eea31/basket/bingo', {
                    headers: {
                        "accept": "application/json, text/plain, */*",
                        "accept-language": "en-US,en;q=0.9,es;q=0.8",
                        "content-type": "application/json;charset=UTF-8",
                    },
                    method: 'put',
                    body: JSON.stringify({ entries: newEntry }),
                });
                console.log(res);
                return true;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.bingoForm.value);
            let was_added = yield this.addBingoEntry(this.bingoForm.value);
            if (was_added) {
                alert("GG WP IZI");
            }
            else {
                alert("algo salió mal D:");
            }
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab1',
        template: _C_Users_UCB_CSIDEV_Desktop_projects_BingoNintendo_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab1Page);



/***/ }),

/***/ 2817:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab1/tab1.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Bingo Nintendo\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Bingo Nintendo</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <form [formGroup]=\"bingoForm\" (ngSubmit)=\"onSubmit()\">\r\n    <ion-grid fixed >\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Escribi tu nombre completo</ion-label>\r\n            <ion-input formControlName=\"nombre\" type=\"text\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n         <ion-card>\r\n           <ion-card-content>\r\n             <ion-img src=\"../../assets/img/equino-fighter.png\"></ion-img>\r\n             <ion-card-subtitle>KOF XV</ion-card-subtitle>\r\n             <ion-checkbox formControlName=\"opcion1\"></ion-checkbox>\r\n           </ion-card-content>\r\n           \r\n         </ion-card>\r\n        </ion-col>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-img src=\"../../assets/img/gameboy.png\"></ion-img>\r\n              <ion-card-subtitle>GB/GBC en el NSO</ion-card-subtitle>\r\n              <ion-checkbox formControlName=\"opcion2\"></ion-checkbox>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-img src=\"../../assets/img/1-2Switch.png\"></ion-img>\r\n              <ion-card-subtitle>1-2 Switch 2</ion-card-subtitle>\r\n              <ion-checkbox formControlName=\"opcion3\"></ion-checkbox>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-img src=\"../../assets/img/splatoon.png\"></ion-img>\r\n              <ion-card-subtitle>Splatoon 3</ion-card-subtitle>\r\n              <ion-checkbox formControlName=\"opcion4\"></ion-checkbox>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-img src=\"../../assets/img/bayonetta.png\"></ion-img>\r\n              <ion-card-subtitle>Bayonetta</ion-card-subtitle>\r\n              <ion-checkbox formControlName=\"opcion5\"></ion-checkbox>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n         <ion-card>\r\n           <ion-card-content>\r\n             <ion-img src=\"../../assets/img/ports.png\"></ion-img>\r\n             <ion-card-subtitle>Ports</ion-card-subtitle>\r\n             <ion-checkbox formControlName=\"opcion6\"></ion-checkbox>\r\n           </ion-card-content>\r\n           \r\n         </ion-card>\r\n        </ion-col>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-img src=\"../../assets/img/xenoblade.png\"></ion-img>\r\n              <ion-card-subtitle>Xenoblade 3</ion-card-subtitle>\r\n              <ion-checkbox formControlName=\"opcion7\"></ion-checkbox>\r\n            </ion-card-content>\r\n            \r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-img src=\"../../assets/img/pikmin.png\"></ion-img>\r\n              <ion-card-subtitle>Pikmin 4</ion-card-subtitle>\r\n              <ion-checkbox formControlName=\"opcion8\"></ion-checkbox>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-img src=\"../../assets/img/dk.png\"></ion-img>\r\n              <ion-card-subtitle>Donkey Kong</ion-card-subtitle>\r\n              <ion-checkbox formControlName=\"opcion9\"></ion-checkbox>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-img src=\"../../assets/img/ff.png\"></ion-img>\r\n              <ion-card-subtitle>Final Fantasy Pixel Perfect</ion-card-subtitle>\r\n              <ion-checkbox formControlName=\"opcion10\"></ion-checkbox>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-img src=\"../../assets/img/fallguys.png\"></ion-img>\r\n              <ion-card-subtitle>Fall Guys</ion-card-subtitle>\r\n              <ion-checkbox formControlName=\"opcion11\"></ion-checkbox>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-img src=\"../../assets/img/silksong.png\"></ion-img>\r\n              <ion-card-subtitle>Silk Song</ion-card-subtitle>\r\n              <ion-checkbox formControlName=\"opcion12\"></ion-checkbox>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-img src=\"../../assets/img/pokemon.png\"></ion-img>\r\n              <ion-card-subtitle>Pokemon</ion-card-subtitle>\r\n              <ion-checkbox formControlName=\"opcion13\"></ion-checkbox>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-img src=\"../../assets/img/dq.png\"></ion-img>\r\n              <ion-card-subtitle>Dragon Quest III 2D HD/ XVII</ion-card-subtitle>\r\n              <ion-checkbox formControlName=\"opcion14\"></ion-checkbox>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-img src=\"../../assets/img/fireemblem.png\"></ion-img>\r\n              <ion-card-subtitle>Fire Emblem Echoes: Geneaology of Holy War</ion-card-subtitle>\r\n              <ion-checkbox formControlName=\"opcion15\"></ion-checkbox>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n    \r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n         <ion-card>\r\n           <ion-card-content>\r\n             <ion-img src=\"../../assets/img/p4g.png\"></ion-img>\r\n             <ion-card-subtitle>Persona 4 Golden</ion-card-subtitle>\r\n             <ion-checkbox formControlName=\"opcion16\"></ion-checkbox>\r\n           </ion-card-content>\r\n           \r\n         </ion-card>\r\n        </ion-col>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-img src=\"../../assets/img/metroid.png\"></ion-img>\r\n              <ion-card-subtitle>Metroid Prime(Trilogy, Remake, 4)</ion-card-subtitle>\r\n              <ion-checkbox formControlName=\"opcion17\"></ion-checkbox>\r\n            </ion-card-content>\r\n            \r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-img src=\"../../assets/img/resident.png\"></ion-img>\r\n              <ion-card-subtitle>Resident Evil</ion-card-subtitle>\r\n              <ion-checkbox formControlName=\"opcion18\"></ion-checkbox>\r\n            </ion-card-content>\r\n            \r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-img src=\"../../assets/img/digimon.png\"></ion-img>\r\n              <ion-card-subtitle>Digimon Survive</ion-card-subtitle>\r\n              <ion-checkbox formControlName=\"opcion19\"></ion-checkbox>\r\n            </ion-card-content>\r\n            \r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-img src=\"../../assets/img/n64.png\"></ion-img>\r\n              <ion-card-subtitle>Más juegos de N64 en NSO</ion-card-subtitle>\r\n              <ion-checkbox formControlName=\"opcion20\"></ion-checkbox>\r\n            </ion-card-content>\r\n            \r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-img src=\"../../assets/img/mariokart.png\"></ion-img>\r\n              <ion-card-subtitle>Mario Kart 9/ Nintendo Kart</ion-card-subtitle>\r\n              <ion-checkbox formControlName=\"opcion21\"></ion-checkbox>\r\n            </ion-card-content>\r\n            \r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-img src=\"../../assets/img/genshin.png\"></ion-img>\r\n              <ion-card-subtitle>Genshin Impact</ion-card-subtitle>\r\n              <ion-checkbox formControlName=\"opcion22\"></ion-checkbox>\r\n            </ion-card-content>\r\n            \r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-img src=\"../../assets/img/batman.png\"></ion-img>\r\n              <ion-card-subtitle>Batman Arkham Collection</ion-card-subtitle>\r\n              <ion-checkbox formControlName=\"opcion23\"></ion-checkbox>\r\n            </ion-card-content>\r\n            \r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-img src=\"../../assets/img/gba.png\"></ion-img>\r\n              <ion-card-subtitle>Game Boy Advance NSO</ion-card-subtitle>\r\n              <ion-checkbox formControlName=\"opcion24\"></ion-checkbox>\r\n            </ion-card-content>\r\n            \r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col sizeLg=\"2\" sizeMd=\"6\" size=\"2\" sizeXs=\"6\" sizeSm=\"6\" sizeXl=\"2\">\r\n          <ion-card>\r\n            <ion-card-content>\r\n              <ion-img src=\"../../assets/img/zelda.png\"></ion-img>\r\n              <ion-card-subtitle>Twilight Princess/ WindWaker</ion-card-subtitle>\r\n              <ion-checkbox formControlName=\"opcion25\"></ion-checkbox>\r\n            </ion-card-content>\r\n            \r\n          </ion-card>\r\n\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n      \r\n    </ion-grid>\r\n    <ion-row style=\"padding:0px 30px 30px 30px;\">\r\n      <ion-col size=\"12\">\r\n        <ion-card>\r\n          <ion-card-content>\r\n           <ion-button expand=\"full\" color=\"success\"  type=\"submit\" [disabled]=\"bingoForm.invalid\">\r\n             <ion-icon slot=\"start\" name=\"save-outline\"></ion-icon>\r\n             Guardar\r\n           </ion-button>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 8443:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map