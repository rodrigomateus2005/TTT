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
var R_Con_D = /** @class */ (function (_super) {
    __extends(R_Con_D, _super);
    function R_Con_D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Con_D.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Con_D.prototype, "txtMovimentacao", {
        get: function () {
            return window['txtMovimentacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Con_D.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Con_D.prototype, "cboDeposito", {
        get: function () {
            return window['cboDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Con_D.prototype, "chkDivergentes", {
        get: function () {
            return window['chkDivergentes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Con_D.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_Con_D.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtMovimentacao) {
            adicionarEventoMoura(this.txtMovimentacao.TextChanged, this.MudouForma, this);
        }
    };
    R_Con_D.prototype.PreencherGrade = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial),
                dataFinal: ConvertToDate(this.Filtro.Periodo_Final),
                grupo: CNum(this.Filtro.Grupo),
                subGrupo: CNum(this.Filtro.SubGrupo),
                deposito: this.cboDeposito.GetValue(),
                movimentacao: CNum(this.Filtro.Movimentacao),
                divergentes: this.chkDivergentes.Checked
            };
            this.AccordionFiltros.SetExpanded(false);
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(retorno);
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
    R_Con_D.prototype.MudouForma = function () {
        var _this = this;
        try {
            if (CNum(this.Filtro.Movimentacao) <= 0) {
                return;
            }
            var parametros = {
                movimentacao: CNum(this.Filtro.Movimentacao)
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("PreencherLabels", parametros, function (d) {
                fecharEspera();
                var retorno;
                retorno = GetRetornoAJAX(d);
                console.log(retorno.length);
                if (retorno.length > 0) {
                    _this.Filtro.lblHora = retorno[0].Hora;
                    _this.Filtro.lblData = ConvertToDate(retorno[0].Data).FormataData();
                    _this.Filtro.lblDeposito = retorno[0].Deposito;
                    _this.Filtro.lblResponsavel = retorno[0].Responsavel;
                }
                else {
                    _this.Filtro.lblData = "";
                    _this.Filtro.lblHora = "";
                    _this.Filtro.lblDeposito = "";
                    _this.Filtro.lblResponsavel = "";
                    MostrarAlerta("Movimentação não encontrada!");
                }
                _this.RefreshAngular();
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
    R_Con_D.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.chkDivergentes.Checked = false;
        this.cboDeposito.SetValue(ValoresSismoura.DepositoPadrao);
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    return R_Con_D;
}(MouraPageRelacaoAngular));
var r_Con_D = new R_Con_D();
//# sourceMappingURL=R_Con_D.js.map