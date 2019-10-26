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
var C_AdicBD = /** @class */ (function (_super) {
    __extends(C_AdicBD, _super);
    function C_AdicBD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_AdicBD.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_AdicBD.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.EditouItemGrade, this.OnEditouItem, this);
        }
    };
    C_AdicBD.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_AdicBD.prototype.OnEditouItem = function (s, e) {
        if (e.item.Adicional == null)
            e.item.Adicional = 0;
        if (e.item.Codigo == null)
            e.item.Codigo = 0;
        if (e.item.Adicional < 0 || e.item.Adicional > 100) {
            e.item.Adicional = 0;
            MostrarAlerta("Informe valores entre 0 e 100!");
            return;
        }
        this.GravarItem(e.item);
        MostrarMensagem(e.item.Dia + " alterado(a) com sucesso!");
        this.Grid.Refresh();
    };
    C_AdicBD.prototype.GravarItem = function (item) {
        var parametros;
        try {
            parametros = {
                adicional: item,
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            this.ExecutarFuncaoServerSideSynch("SalvarAdicional", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AdicBD.prototype.PreencherGrade = function () {
        var parametros;
        try {
            parametros = {};
            this.Grid.PreencherGrid(this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros));
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_AdicBD;
}(MouraPageAngular));
var c_AdicBD = new C_AdicBD();
//# sourceMappingURL=C_AdicBD.js.map