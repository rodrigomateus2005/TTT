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
var C_REstor_Angular = /** @class */ (function (_super) {
    __extends(C_REstor_Angular, _super);
    function C_REstor_Angular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_REstor_Angular.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_REstor_Angular.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_REstor_Angular.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_REstor_Angular.prototype, "chkExcluirResiduos", {
        get: function () {
            return window['chkExcluirResiduos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_REstor_Angular.prototype, "chkExcluirCheques", {
        get: function () {
            return window['chkExcluirCheques_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_REstor_Angular.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_REstor_Angular.prototype, "btnEstornar", {
        get: function () {
            return window['btnEstornar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_REstor_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    C_REstor_Angular.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.LimpaContaSelecionada();
        this.chkExcluirCheques.Checked = true;
        this.chkExcluirResiduos.Checked = true;
        this.Filtro.TipoData = "B";
        this.Filtro.Periodo_Inicial = this.DataServidor();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Cliente = "";
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    C_REstor_Angular.prototype.LimpaContaSelecionada = function () {
        this.Filtro.DocumentoEstornar = "";
        this.Filtro.Parcela = "";
        this.Filtro.Valor = "";
        this.Filtro.DataBaixa = "";
        this.RefreshAngular();
    };
    C_REstor_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.SelecionouLinha, this);
        }
    };
    C_REstor_Angular.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        var lista;
        lista = this.lstEmpresa.GetValues();
        if (lista.length == 0) {
            MostrarAlerta("Selecione ao menos uma empresa!");
            RecebeFoco("lstEmpresa");
            return;
        }
        var parametros;
        try {
            this.LimpaContaSelecionada();
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                tipoData: this.Filtro.TipoData,
                codCliente: CNum(this.Filtro.Cliente),
                empresas: lista.join(",")
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(retorno);
                _this.accCadastro.SetExpanded(false);
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
    C_REstor_Angular.prototype.ClickBotaoEstornar = function (s, e) {
        if (!this.Filtro.DocumentoEstornar) {
            MostrarAlerta("Selecione a conta que será estornada");
            return;
        }
        MsgBoxJS("Deseja realmente realizar o estorno da conta a receber selecionada?<br\>As contas baixadas em conjunto também serão estornadas", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, $.proxy(this.OnSelecionouMsgBox, this), "estornar_parcela");
    };
    C_REstor_Angular.prototype.OnSelecionouMsgBox = function (e) {
        if (e.Argument == "estornar_parcela" && e.Resultado == MsgBoxResult.Yes) {
            this.Estornar(CNum(this.Filtro.DocumentoEstornar));
        }
    };
    C_REstor_Angular.prototype.Estornar = function (codContaReceber) {
        var _this = this;
        var parametros;
        if (!this.Filtro.Motivo) {
            MostrarAlerta("Preencha o campo corretamente: Motivo");
            return;
        }
        try {
            parametros = {
                codContaReceber: codContaReceber,
                motivo: this.Filtro.Motivo,
                excluirResiduos: this.chkExcluirResiduos.Checked,
                excluirCheques: this.chkExcluirCheques.Checked,
                tela: ValoresSismoura.NomeTela
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("Estornar", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                MostrarMensagem(retorno);
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
    };
    C_REstor_Angular.prototype.SelecionouLinha = function (s, e) {
        this.PreencherContaEstorno(CNum(e.data["Codigo"]));
    };
    C_REstor_Angular.prototype.PreencherContaEstorno = function (codContaReceber) {
        var parametros;
        try {
            parametros = {
                codContaReceber: codContaReceber
            };
            var conta = this.ExecutarFuncaoServerSideSynch("ObterAtivosPorCodigo", parametros);
            if (!conta) {
                MostrarAlerta("Conta a Receber não encontrada");
                return;
            }
            else if (!conta.Baixa) {
                MostrarAlerta("A conta selecionada não foi baixada");
                return;
            }
            this.Filtro.DocumentoEstornar = conta.Codigo;
            this.Filtro.Parcela = conta.Parcela;
            this.Filtro.Valor = CNum(conta.Valor_Recebido).Format(2);
            this.Filtro.DataBaixa = ConvertToDate(conta.Data_Baixa).FormataData();
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_REstor_Angular;
}(MouraPageRelacaoAngular));
var c_REstor_Angular = new C_REstor_Angular();
//# sourceMappingURL=C_REstor_Angular.js.map