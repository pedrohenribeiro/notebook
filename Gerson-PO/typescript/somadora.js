var Somadora = /** @class */ (function () {
    function Somadora() {
    }
    //number depois da função é o tipo de retorno, nesse caso sendo number
    //number = int e double do java
    Somadora.prototype.somar = function (numero1, numero2) {
        return numero1 + numero2;
    };
    return Somadora;
}());
var soma1 = new Somadora();
console.log(soma1.somar(10, 20));
