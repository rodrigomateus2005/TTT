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
var C_RLote = /** @class */ (function (_super) {
    __extends(C_RLote, _super);
    function C_RLote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_RLote.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RLote.prototype, "Baixa", {
        get: function () {
            return window['Baixa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RLote.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RLote.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RLote.prototype, "gridBaixa", {
        get: function () {
            return window['gridBaixa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RLote.prototype, "txtBordero", {
        get: function () {
            return window['txtBordero_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RLote.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RLote.prototype, "txtClienteNF", {
        get: function () {
            return window['txtClienteNF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RLote.prototype, "txtNotaFiscal", {
        get: function () {
            return window['txtNotaFiscal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RLote.prototype, "txtValorNF", {
        get: function () {
            return window['txtValorNF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RLote.prototype, "txtDataEmissaoNF", {
        get: function () {
            return window['txtDataEmissaoNF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RLote.prototype, "txtDesconto_P", {
        get: function () {
            return window['txtDesconto_P_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RLote.prototype, "txtDesconto_R", {
        get: function () {
            return window['txtDesconto_R_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RLote.prototype, "btnBaixar", {
        get: function () {
            return window['btnBaixar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RLote.prototype, "lblSelecionado", {
        get: function () {
            return window['lblSelecionado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RLote.prototype, "txtMulta", {
        get: function () {
            return window['txtMulta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_RLote.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouTipo) {
            this.GetScope().MudouTipo = $.proxy(this.MudouTipo, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Filtro.Tipo; }, this.GetScope().MudouTipo);
        }
        if (!this.GetScope().MudouTipoDesconto) {
            this.GetScope().MudouTipoDesconto = $.proxy(this.MudouTipoDesconto, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Filtro.TipoDesconto; }, this.GetScope().MudouTipoDesconto);
        }
        this.LimparCampos();
    };
    C_RLote.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.lstEmpresa) {
            adicionarEventoMoura(this.lstEmpresa.SelectionChanged, this.OnEmpresaChanged, this);
        }
        if (this.btnBaixar) {
            adicionarEventoMoura(this.btnBaixar.Click, this.OnClickBaixar, this);
        }
        if (this.txtNotaFiscal) {
            adicionarEventoMoura(this.txtNotaFiscal.LostFocus, this.OnLostFocusNotaFiscal, this);
        }
        if (this.gridBaixa) {
            adicionarEventoMoura(this.gridBaixa.SelecionouLinha, this.SelecionouLinha, this);
            adicionarEventoMoura(this.gridBaixa.CellPrepared, this.CellPrepared, this);
        }
        if (this.Baixa) {
            adicionarEventoMoura(this.Baixa.BaixouConta, this.OnBaixouContas, this);
        }
        if (this.txtMulta) {
            adicionarEventoMoura(this.txtMulta.TextChanged, this.OnTextChangedTextMulta, this);
        }
    };
    C_RLote.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Tipo = "V";
        this.Filtro.TipoDesconto = "P";
        this.LimparCamposBaixa();
        this.CorrigirCamposDesconto();
        this.LimparFiltros();
        this.lblSelecionado.Text = CNum("0").Format(ValoresSismoura.CasasDecimaisValor);
        this.RefreshAngular();
    };
    C_RLote.prototype.LimparCamposBaixa = function () {
        this.Filtro.DataBaixa = this.DataServidor();
        this.Filtro.Juros = 0;
        this.Filtro.Observacao = "";
        this.Filtro.DescontoR = 0;
        this.Filtro.Multa = 0;
        this.RefreshAngular();
    };
    C_RLote.prototype.CorrigirCamposDesconto = function () {
        if (this.Filtro.TipoDesconto == "P") {
            this.Filtro.DescontoR = 0;
            this.txtDesconto_R.Visible = false;
            this.txtDesconto_P.Visible = true;
        }
        else {
            this.Filtro.DescontoP = 0;
            this.txtDesconto_P.Visible = false;
            this.txtDesconto_R.Visible = true;
        }
    };
    C_RLote.prototype.LimparFiltros = function () {
        this.Filtro.Bordero = 0;
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Cliente = 0;
        this.Filtro.Convenio = 0;
        this.Filtro.Venda = 0;
        this.Filtro.NossoNumero = "";
        this.Filtro.NotaFiscal = 0;
        this.Filtro.ClienteNF = "";
        this.Filtro.ValorNF = 0;
        this.Filtro.DataEmissaoNF = "";
        this.Filtro.Impagavel = true;
        this.CorrigirFiltros();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.PreencherComboContaCorrente();
        this.cboContaCorrente.Combo.SetSelectedIndex(this.cboContaCorrente.Combo.GetItemCount() - 1);
        this.gridBaixa.PreencherGrid(null);
        this.RefreshAngular();
    };
    C_RLote.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        var empresas = this.lstEmpresa.GetValues();
        var contaCorrente;
        if (empresas.length <= 0) {
            MostrarAlerta("Informe a empresa!");
            return;
        }
        if (!this.Filtro.Tipo) {
            MostrarMensagemCampoObrigatorio("Tipo");
            return;
        }
        if ((this.Filtro.Tipo == "V" || this.Filtro.Tipo == "E") && !ValidarPeriodo(this.Filtro.Periodo_Inicial, this.Filtro.Periodo_Final)) {
            return;
        }
        if (this.Filtro.Tipo == "F" && CNum(this.Filtro.NotaFiscal) <= 0) {
            MostrarMensagemCampoObrigatorio("Nota Fiscal");
            return;
        }
        if (this.Filtro.Tipo == "B" && CNum(this.Filtro.Bordero) <= 0) {
            MostrarMensagemCampoObrigatorio("Borderô");
            return;
        }
        if (this.cboContaCorrente.Combo.GetValue() == "0") {
            contaCorrente = "0";
        }
        else {
            contaCorrente = this.cboContaCorrente.GetContaCorrente();
        }
        try {
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                bordero: CNum(this.Filtro.Bordero),
                cliente: CNum(this.Filtro.Cliente),
                notaFiscal: CNum(this.Filtro.NotaFiscal),
                convenio: CNum(this.Filtro.Convenio),
                venda: CNum(this.Filtro.Venda),
                nossoNumero: CNum(this.Filtro.NossoNumero),
                contaCorrente: contaCorrente,
                tipo: this.Filtro.Tipo,
                empresas: empresas.join(","),
                impagavel: this.Filtro.Impagavel
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                var retorno = GetRetornoAJAX(d);
                _this.gridBaixa.PreencherGrid(retorno);
                _this.gridBaixa.GroupBy("Nome_Cliente");
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
    };
    C_RLote.prototype.CorrigirFiltros = function () {
        switch (this.Filtro.Tipo) {
            case "V": //Data venda
                this.txtBordero.Visible = false;
                this.txtPeriodo.Visible = true;
                this.txtNotaFiscal.Visible = false;
                this.txtClienteNF.Visible = false;
                this.txtValorNF.Visible = false;
                this.txtDataEmissaoNF.Visible = false;
                break;
            case "E": //Data Emissão
                this.txtBordero.Visible = false;
                this.txtPeriodo.Visible = true;
                this.txtNotaFiscal.Visible = false;
                this.txtClienteNF.Visible = false;
                this.txtValorNF.Visible = false;
                this.txtDataEmissaoNF.Visible = false;
                break;
            case "F": //Nota Fiscal
                this.txtBordero.Visible = false;
                this.txtPeriodo.Visible = false;
                this.txtNotaFiscal.Visible = true;
                this.txtClienteNF.Visible = true;
                this.txtValorNF.Visible = true;
                this.txtDataEmissaoNF.Visible = true;
                break;
            case "B": //Borderô
                this.txtPeriodo.Visible = false;
                this.txtBordero.Visible = true;
                this.txtNotaFiscal.Visible = false;
                this.txtClienteNF.Visible = false;
                this.txtValorNF.Visible = false;
                this.txtDataEmissaoNF.Visible = false;
                break;
        }
    };
    C_RLote.prototype.MudouTipoDesconto = function () {
        this.CorrigirCamposDesconto();
    };
    C_RLote.prototype.MudouTipo = function () {
        this.LimparFiltros();
    };
    C_RLote.prototype.PreencherComboContaCorrente = function () {
        this.cboContaCorrente.Combo.ClearItems();
        this.cboContaCorrente.Preencher(this.lstEmpresa.GetValuesNumber(), false);
        this.cboContaCorrente.Combo.AddItem("--Todos--", "0", "");
    };
    C_RLote.prototype.OnEmpresaChanged = function (s, e) {
        this.PreencherComboContaCorrente();
    };
    C_RLote.prototype.OnClickBaixar = function (s, e) {
        e.processOnServer = false;
        var bloquearContaVencida = false;
        try {
            var codigos = this.gridBaixa.GetSelectedRowsData.map(function (item) { return item.Codigo; });
            if (codigos.length <= 0) {
                MostrarAlerta("Nenhuma conta selecionada para efetuar a baixa");
                return;
            }
            else if (!ConvertToDate(this.Filtro.DataBaixa)) {
                MostrarMensagemCampoObrigatorio("Data Baixa");
                return;
            }
            else if (CNum(this.Filtro.DescontoP) >= 100) {
                MostrarAlerta("O valor do campo Desconto (%) deve ser menor do que 100");
                return;
            }
            else if (ValoresSismoura.ConfiguracoesRetaguarda.Pedir_Senha_Dar_Baixa) {
                bloquearContaVencida = this.VerificaBloqueioContaVencida(codigos);
            }
            if (bloquearContaVencida) {
                //TODO: Na base de dados existem 3 itens na tabela Programa com o nome "SolSenBa".
                this.dlgFuncaoAdm.Verificar("SolSenBa", ValoresSismoura.UsuarioLogado, false, this.OnCarregouFuncaoBloquearBaixaReceberLote, this);
                return;
            }
            this.BaixarContas();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RLote.prototype.OnCarregouFuncaoBloquearBaixaReceberLote = function (retorno) {
        if (retorno.Autorizado) {
            this.BaixarContas();
        }
        else {
            MostrarAlerta("Usuário sem autorização para a operação");
            return;
        }
    };
    C_RLote.prototype.VerificaBloqueioContaVencida = function (codigos) {
        var parametros;
        try {
            parametros = {
                codigos: codigos
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificaBloqueioContaVencida", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RLote.prototype.BaixarContas = function () {
        var codigos = this.gridBaixa.GetSelectedRowsData.map(function (item) { return item.Codigo; });
        var valorDesconto;
        var valorReceber;
        if (codigos.length <= 0) {
            MostrarAlerta("Nenhuma conta selecionada para efetuar a baixa");
            return;
        }
        var dados = this.GetDadosBaixarContas(codigos);
        if (this.Filtro.TipoDesconto == "P") {
            valorDesconto = dados.ValorReceber * CNum(this.Filtro.DescontoP) / 100;
        }
        else {
            valorDesconto = CNum(this.Filtro.DescontoR);
        }
        if (valorDesconto > dados.ValorReceber) {
            MostrarAlerta("O valor do desconto deve ser menor do que o valor a receber");
            return;
        }
        valorReceber = dados.ValorReceber - valorDesconto + CNum(this.Filtro.Juros) + CNum(this.txtMulta.GetText());
        this.Baixa.MostrarEmLote(codigos, ValoresSismoura.NomeTela, ValoresSismoura.UsuarioLogado, valorReceber, dados.ContaContabilPadrao, dados.ContaCorrentePadrao, this.Filtro.Observacao, CNum(this.Filtro.Juros), valorDesconto, ConvertToDate(this.Filtro.DataBaixa), dados.FormaPagamentoPadrao, this.Filtro.TipoDesconto, CNum(this.txtMulta.GetText()));
    };
    C_RLote.prototype.GetDadosBaixarContas = function (codigos) {
        var parametros;
        try {
            parametros = {
                codigos: codigos
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetDadosBaixarContas", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RLote.prototype.OnLostFocusNotaFiscal = function (s, e) {
        this.Filtro.ClienteNF = "";
        this.Filtro.ValorNF = "";
        this.Filtro.DataEmissaoNF = "";
        if (CNum(this.Filtro.NotaFiscal) > 0) {
            this.PreencherInformacoesNF();
        }
        this.RefreshAngular();
    };
    C_RLote.prototype.PreencherInformacoesNF = function () {
        var parametros;
        try {
            parametros = {
                codNF: CNum(this.Filtro.NotaFiscal)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetDadosNF", parametros);
            if (retorno) {
                this.Filtro.ClienteNF = retorno.Nome;
                this.Filtro.ValorNF = retorno.Total_NF;
                this.Filtro.DataEmissaoNF = retorno.Data_Emissao;
            }
            else {
                MostrarAlerta("Nota Fiscal não encontrada");
                this.Filtro.NotaFiscal = 0;
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RLote.prototype.OnBaixouContas = function (s, e) {
        this.LimparCamposBaixa();
        this.PreencherGrade();
    };
    C_RLote.prototype.SelecionouLinha = function (s, e) {
        this.gridBaixa.Refresh();
        this.lblSelecionado.Text = (this.gridBaixa.GetSelectedRowsData.Sum("Valor")).Format(ValoresSismoura.CasasDecimaisValor);
        if (this.txtMulta.Visible) {
            this.CalularPorcentagemMulta();
        }
        this.RefreshAngular();
    };
    C_RLote.prototype.CellPrepared = function (s, e) {
        if (e.rowType == "data") {
            if (this.gridBaixa.GetSelectedRowsData.filter(function (item) { return item.Codigo == e.data["Codigo"]; }).length > 0) {
                e.cellElement.css("font-weight", "bold");
            }
            else {
                e.cellElement.css("font-weight", "normal");
            }
        }
    };
    C_RLote.prototype.OnTextChangedTextMulta = function () {
        var codigos = this.gridBaixa.GetSelectedRowsData.map(function (item) { return item.Codigo; });
        var valoresSelecionados = (this.gridBaixa.GetSelectedRowsData.Sum("Valor")).Format(ValoresSismoura.CasasDecimaisValor);
        var porcMulta = (CNum(this.txtMulta.GetText()) / CNum(valoresSelecionados)) * 100;
        if (codigos.length <= 0) {
            MostrarAlerta("Nenhuma conta selecionada para efetuar o cálculo da multa");
            this.txtMulta.Limpar();
            return;
        }
        if (porcMulta > 2) {
            MostrarAlerta("A porcentagem de multa não deve ultrapassar 2% em relação ao valor original da(s) conta(s). Valor Máximo permitido: (Valor correspondente a 2%)");
            this.txtMulta.Limpar();
            this.txtMulta.Focus();
            return;
        }
    };
    C_RLote.prototype.ObterPorcentagemMulta = function () {
        var parametros;
        try {
            var retorno = this.ExecutarFuncaoServerSideSynch("ObterPorcentagemMulta", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RLote.prototype.CalularPorcentagemMulta = function () {
        this.Filtro.Multa = 0;
        var porcMulta = this.ObterPorcentagemMulta();
        var valores = this.gridBaixa.GetSelectedRowsData.map(function (item) { return item.Valor; });
        var dtVencimento = this.gridBaixa.GetSelectedRowsData.map(function (item) { return item.Vencimento; });
        var DtAtual = new Date(Date.now());
        if (porcMulta > 2) {
            MostrarAlerta("A porcentagem de multa não deve ultrapassar 2% em relação ao valor original da(s) conta(s). Valor Máximo permitido: (Valor correspondente a 2%)");
            return;
        }
        for (var x = 0; x < valores.length; x++) {
            var dt = new Date();
            //Verificando se a conta está vencida para calcular a multa
            if ((((Date.parse(dt.toString())) - (Date.parse(DtAtual.toString()))) / (24 * 60 * 60 * 1000)) < 0) {
                this.Filtro.Multa += CNum(valores[x]) * (porcMulta / 100);
            }
        }
    };
    return C_RLote;
}(MouraPageRelacaoAngular));
var c_RLote = new C_RLote();
//# sourceMappingURL=C_RLote.js.map