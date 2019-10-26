var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MouraListControlEmpresa = /** @class */ (function (_super) {
    __extends(MouraListControlEmpresa, _super);
    function MouraListControlEmpresa(id) {
        return _super.call(this, id) || this;
    }
    MouraListControlEmpresa.prototype.GetEmpresas = function (codigoUsuario, regioes, estados, cidades) {
        // SiSMoura.Core.Entity.EmpresaRetorno
        var retorno;
        var retornoString;
        var param = {
            codigoUsuario: codigoUsuario,
            regioes: regioes,
            estados: estados,
            cidades: cidades
        };
        retornoString = this.ExecutarHttpRequest("GetEmpresas", param);
        retorno = [];
        if (!String.IsNullOrWhiteSpace(retornoString)) {
            retorno = JSON.parse(DecodeTextoJSON(retornoString));
        }
        return retorno;
    };
    MouraListControlEmpresa.prototype.GetMatrizes = function (codigoUsuario) {
        // SiSMoura.Core.Entity.EmpresaRetorno
        var retorno;
        var retornoString;
        var param = {
            codigoUsuario: codigoUsuario
        };
        retornoString = this.ExecutarHttpRequest("GetMatrizes", param);
        retorno = [];
        if (!String.IsNullOrWhiteSpace(retornoString)) {
            retorno = JSON.parse(DecodeTextoJSON(retornoString));
        }
        return retorno;
    };
    MouraListControlEmpresa.prototype.GetFiliais = function (codigoUsuario, Matriz) {
        // SiSMoura.Core.Entity.EmpresaRetorno
        var retorno;
        var retornoString;
        var param = {
            codigoUsuario: codigoUsuario,
            Matriz: Matriz
        };
        retornoString = this.ExecutarHttpRequest("GetFiliais", param);
        retorno = [];
        if (!String.IsNullOrWhiteSpace(retornoString)) {
            retorno = JSON.parse(DecodeTextoJSON(retornoString));
        }
        return retorno;
    };
    return MouraListControlEmpresa;
}(MouraListControl));
//# sourceMappingURL=MouraListControlEmpresa.js.map