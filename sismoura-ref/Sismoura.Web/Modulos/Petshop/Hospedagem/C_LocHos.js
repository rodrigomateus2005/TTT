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
var C_LocHos = /** @class */ (function (_super) {
    __extends(C_LocHos, _super);
    function C_LocHos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_LocHos.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LocHos.prototype, "optTipoHospedagem", {
        get: function () {
            return window['optTipoHospedagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_LocHos.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_LocHos.prototype.OnGravouSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
    };
    C_LocHos.prototype.OnExcluiuSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
    };
    C_LocHos.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            if (!this.optTipoHospedagem.GetValue()) {
                MostrarAlerta("Informe o tipo de hospedagem.");
                return false;
            }
        }
        return true;
    };
    C_LocHos.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.GetCadastrados();
        return true;
    };
    C_LocHos.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_LocHos.prototype.OnDepoisLimpar = function (Entity) {
        this.optTipoHospedagem.SetValue("0");
        this.GetCadastrados();
        this.RefreshAngular();
    };
    C_LocHos.prototype.GetCadastrados = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_LocHos.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.OnDepoisLimpar(this.GetScope().Entity);
    };
    return C_LocHos;
}(MouraPageCadastroAngular));
var c_LocHos = new C_LocHos();
//# sourceMappingURL=C_LocHos.js.map