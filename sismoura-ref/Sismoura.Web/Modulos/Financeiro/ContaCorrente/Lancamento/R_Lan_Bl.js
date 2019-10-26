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
var R_Lan_Bl = /** @class */ (function (_super) {
    __extends(R_Lan_Bl, _super);
    function R_Lan_Bl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Lan_Bl.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Lan_Bl.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Lan_Bl.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Lan_Bl.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Lan_Bl.prototype, "btnLiberar", {
        get: function () {
            return window['btnLiberar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Lan_Bl.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouListarTodos) {
            this.GetScope().MudouListarTodos = $.proxy(this.MudouListarTodos, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Filtro.Listar_Todos; }, this.GetScope().MudouListarTodos);
        }
    };
    R_Lan_Bl.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnLiberar) {
            adicionarEventoMoura(this.btnLiberar.Click, this.OnClickLiberar, this);
        }
    };
    R_Lan_Bl.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.grid.PreencherGrid(null);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.cboContaCorrente.Limpar();
        this.Filtro.Data_Movimento = null;
        this.Filtro.Listar_Todos = false;
        this.RefreshAngular();
    };
    R_Lan_Bl.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (this.ValidarCamposObrigatorios()) {
            try {
                parametros = {
                    dataInicial: this.Filtro.Periodo_Inicial,
                    dataFinal: this.Filtro.Periodo_Final,
                    contaCorrente: this.cboContaCorrente.GetContaCorrente(),
                    listarTodos: this.Filtro.Listar_Todos
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
    R_Lan_Bl.prototype.MudouListarTodos = function () {
        this.txtPeriodo.Obrigatorio = !(this.Filtro.Listar_Todos);
        this.txtPeriodo.Visible = !(this.Filtro.Listar_Todos);
    };
    R_Lan_Bl.prototype.OnClickLiberar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        MsgBoxJS("Deseja realmente liberar o(s) lançamento(s)?", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, function (r) {
            if (r.Resultado == MsgBoxResult.Yes) {
                _this.LiberarLancamento();
            }
        });
    };
    R_Lan_Bl.prototype.LiberarLancamento = function () {
        var _this = this;
        var parametros;
        if (this.ValidarLiberacao()) {
            try {
                parametros = {
                    listaNroDocumentos: this.grid.GetSelectedRowsData.map(function (item) { return item.Numero_Documento; }),
                    dataMovimento: this.Filtro.Data_Movimento,
                    codUsuario: ValoresSismoura.UsuarioLogado,
                    nomeTela: ValoresSismoura.NomeTela
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("LiberarLancamento", parametros, function (d) {
                    fecharEspera();
                    MsgBoxJS("Lançamento(s) desbloqueado(s) com sucesso", MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
                    _this.PreencherGrade();
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
    R_Lan_Bl.prototype.ValidarLiberacao = function () {
        var retorno = true;
        if (!ConvertToDate(this.Filtro.Data_Movimento)) {
            MostrarAlerta("Informe a data do movimento!");
            retorno = false;
        }
        else if (this.grid.GetSelectedRowsData.length <= 0) {
            MostrarAlerta("Selecione os lançamentos que deseja desbloquear");
            retorno = false;
        }
        return retorno;
    };
    return R_Lan_Bl;
}(MouraPageRelacaoAngular));
var r_Lan_Bl = new R_Lan_Bl();
//# sourceMappingURL=R_Lan_Bl.js.map