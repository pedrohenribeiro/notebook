"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormatoBrasil = /** @class */ (function () {
    function FormatoBrasil(data) {
        this.data = data;
    }
    FormatoBrasil.prototype.formatar = function () {
        return "".concat(this.data.pegarData.getDay(), "/").concat(this.data.pegarData.getMonth(), "/").concat(this.data.pegarData.getFullYear());
    };
    return FormatoBrasil;
}());
exports.default = FormatoBrasil;
