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
var R_PB_PF = /** @class */ (function (_super) {
    __extends(R_PB_PF, _super);
    function R_PB_PF() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_PB_PF.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PB_PF.prototype, "lstContaCorrente", {
        get: function () {
            return window['lstContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PB_PF.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PB_PF.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PB_PF.prototype, "txtNumeroCheque", {
        get: function () {
            return window['txtNumeroCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PB_PF.prototype, "cboTipoEmpresa", {
        get: function () {
            return window['cboTipoEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_PB_PF.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!(ValoresSismoura.ConfiguracoesRetaguarda.Talao_Cheque_Forma_Pagamento.CNum() == 0)) {
            this.txtNumeroCheque.Visible = true;
        }
        else {
            this.txtNumeroCheque.Visible = false;
        }
        if (this.lstEmpresa.GetAllValues().length == 1) {
            this.cboTipoEmpresa.Enabled = false;
        }
    };
    R_PB_PF.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_PB_PF.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Fornecedor = 0;
        this.Filtro.Conta_Contabil = 0;
        this.Filtro.Documento_Mercantil = 0;
        this.Filtro.Tipo_Data = "P";
        this.Filtro.Somente_Fiscal = false;
        this.lstContaCorrente.Lista.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.Filtro.Numero_Cheque = 0;
        this.Filtro.Tipo_Empresa = "P";
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_PB_PF.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                codFornecedor: CNum(this.Filtro.Fornecedor),
                codDocumentoMercantil: CNum(this.Filtro.Documento_Mercantil),
                codContaContabil: CNum(this.Filtro.Conta_Contabil),
                somenteFiscal: this.Filtro.Somente_Fiscal,
                tipoData: this.Filtro.Tipo_Data,
                codContasCorrentes: this.lstContaCorrente.Lista.GetValues(),
                codEmpresas: this.lstEmpresa.GetValues(),
                numeroCheque: CNum(this.Filtro.Numero_Cheque),
                tipoEmpresa: this.cboTipoEmpresa.GetText()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrade", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(retorno);
                _this.AccordionFiltros.SetExpanded(false);
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    return R_PB_PF;
}(MouraPageRelacaoAngular));
var r_PB_PF = new R_PB_PF();
//# sourceMappingURL=R_PB_PF.js.map