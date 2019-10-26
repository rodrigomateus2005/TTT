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
var R_RC_PPA = /** @class */ (function (_super) {
    __extends(R_RC_PPA, _super);
    function R_RC_PPA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_RC_PPA.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_PPA.prototype, "lstPosicaoTitulo", {
        get: function () {
            return window['lstPosicaoTitulo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_PPA.prototype, "lstContaCorrente", {
        get: function () {
            return window['lstContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_PPA.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_PPA.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_RC_PPA.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_RC_PPA.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.lstEmpresa) {
            adicionarEventoMoura(this.lstEmpresa.SelectionChanged, this.OnMudouEmpresa, this);
        }
    };
    R_RC_PPA.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Dia_Pagamento = 0;
        this.Filtro.Valor_Inicial = 0;
        this.Filtro.Valor_Final = 0;
        this.Filtro.Vendedor = 0;
        this.Filtro.Zona_Venda = 0;
        this.lstPosicaoTitulo.LimparSelecao();
        this.lstContaCorrente.Lista.LimparSelecao();
        this.Filtro.Somente_Fiscal = false;
        this.Filtro.Sem_Convenio = false;
        this.Filtro.Cliente_Inativo = true;
        this.Filtro.Documento_Mercantil = "0";
        this.Filtro.Tipo_Data = "V";
        if (ValoresSismoura.ConfiguracoesRetaguarda.Conta_Vendedor_Cliente) {
            this.Filtro.Tipo_Vendedor = "C";
        }
        else {
            this.Filtro.Tipo_Vendedor = "V";
        }
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.lstContaCorrente.Preencher(this.lstEmpresa.GetValuesNumber(), true);
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_RC_PPA.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (this.ValidarCamposObrigatorios()) {
            try {
                parametros = {
                    dataInicial: this.Filtro.Periodo_Inicial,
                    dataFinal: this.Filtro.Periodo_Final,
                    codVendedor: CNum(this.Filtro.Vendedor),
                    codZonaVenda: CNum(this.Filtro.Zona_Venda),
                    documentoMercantil: CNum(this.Filtro.Documento_Mercantil),
                    diaPagamento: CNum(this.Filtro.Dia_Pagamento),
                    tipoVendedor: this.Filtro.Tipo_Vendedor,
                    codPosicoesTitulos: this.lstPosicaoTitulo.GetValues(),
                    valorInicial: CNum(this.Filtro.Valor_Inicial),
                    valorFinal: CNum(this.Filtro.Valor_Final),
                    codEmpresas: this.lstEmpresa.GetValues(),
                    somenteFiscal: this.Filtro.Somente_Fiscal,
                    semConvenio: this.Filtro.Sem_Convenio,
                    clienteInativo: this.Filtro.Cliente_Inativo,
                    codContasCorrente: this.lstContaCorrente.Lista.GetValues(),
                    tipoData: this.Filtro.Tipo_Data
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
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
        }
    };
    R_RC_PPA.prototype.OnMudouEmpresa = function (s, e) {
        this.lstContaCorrente.Preencher(this.lstEmpresa.GetValuesNumber(), true);
    };
    return R_RC_PPA;
}(MouraPageRelacaoAngular));
var r_RC_PPA = new R_RC_PPA();
//# sourceMappingURL=R_RC_PPA.js.map