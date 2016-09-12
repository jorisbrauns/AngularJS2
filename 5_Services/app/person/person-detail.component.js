"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var person_model_1 = require('./person.model');
var PersonDetailComponent = (function () {
    function PersonDetailComponent(route) {
        this.route = route;
    }
    PersonDetailComponent.prototype.ngOnInit = function () {
        this.route.params.forEach(function (params) {
            console.log(params);
            // if (params['id'] !== undefined) {
            //     let id = params['id'];
            // } else {
            //     this.person = new Person("","","",0,"");
            // }
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', person_model_1.Person)
    ], PersonDetailComponent.prototype, "person", void 0);
    PersonDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'person-detail',
            templateUrl: 'person-detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], PersonDetailComponent);
    return PersonDetailComponent;
}());
exports.PersonDetailComponent = PersonDetailComponent;
//# sourceMappingURL=person-detail.component.js.map