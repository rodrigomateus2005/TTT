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
var R_Entreg = /** @class */ (function (_super) {
    __extends(R_Entreg, _super);
    function R_Entreg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Entreg.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Entreg.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Entreg.prototype, "lstEmpresa", {
        get: function () {
            return window["lstEmpresa_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Entreg.prototype, "cboBairro", {
        get: function () {
            return window["cboBairro_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_Entreg.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_Entreg.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    //
    R_Entreg.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Cidade = 0;
        this.Filtro.Cliente = 0;
        this.Filtro.Motorista = 0;
        this.Filtro.Vendas = "0";
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = this.DataServidor();
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_Entreg.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            abrirEspera("");
            parametros = {
                dataInicial: this.Filtro.Data_Inicial,
                dataFinal: this.Filtro.Data_Final,
                cliente: CNum(this.Filtro.Cliente),
                cidade: CNum(this.Filtro.Cidade),
                situacao: CNum(this.Filtro.Situacao),
                motorista: CNum(this.Filtro.Motorista),
                bairro: this.cboBairro.GetText(),
                empresas: this.lstEmpresa.GetValues().join(",")
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno.Dados_Grade);
                    _this.Filtro.Vendas = retorno.Dados_Label;
                    _this.AccordionFiltros.SetExpanded(false);
                    _this.RefreshAngular();
                }
                catch (ex) {
                    LogarException(ex);
                }
                finally {
                    fecharEspera();
                }
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
    return R_Entreg;
}(MouraPageRelacaoAngular));
var r_Entreg = new R_Entreg();
//# sourceMappingURL=R_Entreg.js.map