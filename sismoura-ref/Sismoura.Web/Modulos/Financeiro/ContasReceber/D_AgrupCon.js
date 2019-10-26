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
var D_AgrupCon = /** @class */ (function (_super) {
    __extends(D_AgrupCon, _super);
    function D_AgrupCon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(D_AgrupCon.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(D_AgrupCon.prototype, "btnDesfazer", {
        get: function () {
            return window['btnDesfazer_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(D_AgrupCon.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(D_AgrupCon.prototype, "txtCodReceber", {
        get: function () {
            return window['txtCodReceber_Object'];
        },
        enumerable: true,
        configurable: true
    });
    D_AgrupCon.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        $(this.txtCodReceber.LabelResultado).hide();
        this.LimparCampos();
    };
    D_AgrupCon.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.CellPrepared, this);
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.btnDesfazer) {
            adicionarEventoMoura(this.btnDesfazer.Click, this.OnClickDesfazer, this);
        }
        if (this.txtCodReceber) {
            adicionarEventoMoura(this.txtCodReceber.Procurou, this.OnProcurouCodReceber, this);
        }
    };
    D_AgrupCon.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.CodReceber = 0;
        this.Filtro.Cliente = 0;
        this.Filtro.Periodo_Inicial = this.DataServidor();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Agrupamento = "B";
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    D_AgrupCon.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (this.ValidarCamposObrigatorios()) {
            parametros = {
                agrupamento: this.Filtro.Agrupamento,
                cliente: CNum(this.Filtro.Cliente),
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                codReceber: CNum(this.Filtro.CodReceber)
            };
            try {
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    fecharEspera();
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
    D_AgrupCon.prototype.CellPrepared = function (s, e) {
        if (e.rowType == "data") {
            if (this.grid.GetSelectedRowsData.filter(function (item) { return item.CodReceber == e.data["CodReceber"]; }).length > 0) {
                e.cellElement.css("font-weight", "bold");
                e.cellElement.css("color", "blue");
            }
            else {
                e.cellElement.css("font-weight", "normal");
                e.cellElement.css("color", "black");
            }
        }
    };
    D_AgrupCon.prototype.OnClickDesfazer = function (s, e) {
        e.processOnServer = false;
        if (this.grid.GetSelectedRowsData.length <= 0) {
            MostrarAlerta("Selecione uma conta para desagrupar!");
            return;
        }
        this.DesfazerAgrupamento();
    };
    D_AgrupCon.prototype.DesfazerAgrupamento = function () {
        var _this = this;
        var parametros;
        try {
            var codigos = this.grid.GetSelectedRowsData.map(function (item) { return item.CodReceber; });
            parametros = {
                contas: codigos,
                tela: ValoresSismoura.NomeTela,
                usuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("DesfazerAgrupamento", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (retorno.Erro) {
                    MostrarAlerta(retorno.MensagemAlerta);
                }
                else {
                    MostrarMensagem(retorno.MensagemRetorno);
                    _this.Filtro.CodReceber = 0;
                    _this.PreencherGrade();
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
    D_AgrupCon.prototype.OnSelecionouLinha = function () {
        this.grid.Refresh();
    };
    D_AgrupCon.prototype.OnProcurouCodReceber = function (s, e) {
        if (CNum(this.txtCodReceber.GetResultado()) > 0) {
            this.Filtro.Cliente = CNum(this.txtCodReceber.GetResultado());
        }
        this.RefreshAngular();
    };
    return D_AgrupCon;
}(MouraPageRelacaoAngular));
var d_AgrupCon = new D_AgrupCon();
//# sourceMappingURL=D_AgrupCon.js.map