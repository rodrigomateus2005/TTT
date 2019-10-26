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
var R_SolPe = /** @class */ (function (_super) {
    __extends(R_SolPe, _super);
    function R_SolPe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_SolPe.prototype, "AccordionFiltros", {
        get: function () {
            return window["accCadastro_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SolPe.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SolPe.prototype, "Entity", {
        get: function () {
            if (!this.GetScope()["Entity"]) {
                this.GetScope()["Entity"] = {};
            }
            return this.GetScope()["Entity"];
        },
        set: function (value) {
            this.GetScope()["Entity"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SolPe.prototype, "Status", {
        get: function () {
            return window['cboStatus_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_SolPe.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_SolPe.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
    };
    R_SolPe.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Entity.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Entity.Periodo_Final = this.DataServidor();
        this.Entity.Status = "T";
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_SolPe.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            parametros = {
                dataInicio: this.Entity.Periodo_Inicial,
                dataFim: this.Entity.Periodo_Final,
                status: this.Entity.Status,
                codigoUsuario: ValoresSismoura.EmpresaPadraoUsuario
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    R_SolPe.prototype.OnSelecionouLinha = function (s, e) {
        abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDeSolicitacao), e.rowKey);
    };
    return R_SolPe;
}(MouraPageRelacaoAngular));
var r_SolPe = new R_SolPe();
//# sourceMappingURL=R_SolPe.js.map