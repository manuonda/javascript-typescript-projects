"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Animal_1 = require("./Animal");
var Oso = /** @class */ (function (_super) {
    __extends(Oso, _super);
    function Oso(name, age, zone, food) {
        var _this = _super.call(this, name, age, zone) || this;
        _this.food = food;
        return _this;
    }
    Oso.prototype.move = function (distance) {
        if (distance === void 0) { distance = 20; }
        console.log("Oso camindando " + this.zone);
        _super.prototype.move.call(this, distance);
    };
    return Oso;
}(Animal_1.Animal));
var bearOne = new Oso("Josh", 10, "Canada", "fish");
console.log(bearOne.move());
// private console.log(bearOne.age);
// console.log(bearOne.zone); no pude ingresar a traves de su instancia pero si acceder
