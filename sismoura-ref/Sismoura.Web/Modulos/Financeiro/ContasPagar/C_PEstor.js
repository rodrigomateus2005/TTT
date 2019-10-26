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
var C_PEstor = /** @class */ (function (_super) {
    __extends(C_PEstor, _super);
    function C_PEstor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_PEstor.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PEstor.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PEstor.prototype, "txtCodigo", {
        get: function () {
            return $("#txtCodigo")[0];
            ;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PEstor.prototype, "txtFornecedor", {
        get: function () {
            return window['txtFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_PEstor.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    C_PEstor.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.SelecionouLinha, this);
        }
        if (this.txtFornecedor) {
            adicionarEventoMoura(this.txtFornecedor.Procurou, this.OnDepoisProcurou, this);
        }
    };
    C_PEstor.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            parametros = {
                dataInicio: this.Filtro.Periodo_Inicial,
                dataFim: this.Filtro.Periodo_Final,
                fornecedor: CNum(this.Filtro.Fornecedor)
            };
            abrirEspera("");
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
    C_PEstor.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.DataServidor();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Fornecedor = 0;
        this.grid.PreencherGrid(null);
        this.LimparContaSelecionado();
        this.RefreshAngular();
    };
    C_PEstor.prototype.LimparContaSelecionado = function () {
        this.txtCodigo.value = "0";
        this.Filtro.Baixa = "";
        this.Filtro.Numero = "";
        this.Filtro.Parcela = "";
        this.Filtro.ContaCorrente = "";
        this.Filtro.DocBancario = "";
        this.Filtro.Valor = CNum(0).Format(2);
        this.RefreshAngular();
    };
    C_PEstor.prototype.PreencherTela = function (codigo) {
        var parametros;
        try {
            parametros = {
                codigo: codigo
            };
            var entidade = this.ExecutarFuncaoServerSideSynch("ObterPorCodigo", parametros);
            if (entidade) {
                this.txtCodigo.value = entidade.Codigo;
                this.Filtro.Numero = entidade.N_Doc_Merc;
                this.Filtro.Parcela = entidade.Parcela;
                this.Filtro.Baixa = ConvertToDate(entidade.Data_Pagamento).FormataData();
                this.Filtro.ContaCorrente = entidade.Conta_Corrente;
                this.Filtro.DocBancario = entidade.N_Doc_Bancario;
                this.Filtro.Valor = CNum(entidade.Valor).Format(2);
                this.RefreshAngular();
            }
            else {
                this.LimparCampos();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PEstor.prototype.SelecionouLinha = function (s, e) {
        this.PreencherTela(CNum(e.data["Codigo"]));
    };
    C_PEstor.prototype.ClickBotaoEstornar = function (s, e) {
        var codigo = CNum(this.txtCodigo.value);
        if (codigo > 0) {
            MsgBoxJS("Deseja realmente realizar o estorno da conta a receber selecionada?<br\>As contas baixadas em conjunto também serão estornadas", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, $.proxy(this.OnSelecionouMsgBox, this), "estornar_conta_pagar");
        }
        else {
            MostrarAlerta("Selecione a conta a pagar que será estornada");
        }
    };
    C_PEstor.prototype.OnSelecionouMsgBox = function (e) {
        if (e.Argument == "estornar_conta_pagar" && e.Resultado == MsgBoxResult.Yes) {
            this.EstornarContaPagar(CNum(this.txtCodigo.value));
        }
    };
    C_PEstor.prototype.EstornarContaPagar = function (codigo) {
        var _this = this;
        var parametros;
        try {
            parametros = {
                codContaPagar: codigo,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("EstonarContaPagar", parametros, function (d) {
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
    C_PEstor.prototype.OnDepoisProcurou = function (s, e) {
        var parametros;
        try {
            if (ValoresSismoura.ConfiguracoesRetaguarda.Procura_Fornecedor_Buscar_Empresa) {
                parametros = {
                    codUsuario: ValoresSismoura.UsuarioLogado,
                    fornecedor: CNum(this.Filtro.Fornecedor)
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("isFornecedorEmpresa", parametros);
                if (!String.IsNullOrWhiteSpace(retorno)) {
                    MostrarAlerta(retorno);
                    this.Filtro.Fornecedor = 0;
                    this.RefreshAngular();
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_PEstor;
}(MouraPageRelacaoAngular));
var c_PEstor = new C_PEstor();
//# sourceMappingURL=C_PEstor.js.map