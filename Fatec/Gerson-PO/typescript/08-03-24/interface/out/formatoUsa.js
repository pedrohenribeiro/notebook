"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormatoUSA = /** @class */ (function () {
    function FormatoUSA(data) {
        this.data = data;
    }
    FormatoUSA.prototype.formatar = function () {
        return "".concat(this.data.pegarData.getMonth(), "/").concat(this.data.pegarData.getDay(), "/").concat(this.data.pegarData.getFullYear());
    };
    return FormatoUSA;
}());
exports.default = FormatoUSA;
