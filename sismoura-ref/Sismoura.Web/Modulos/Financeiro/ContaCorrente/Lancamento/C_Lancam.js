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
var C_Lancam = /** @class */ (function (_super) {
    __extends(C_Lancam, _super);
    function C_Lancam() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.flag = true;
        _this.respondeuContas = false;
        return _this;
    }
    Object.defineProperty(C_Lancam.prototype, "lblTipoLancamento", {
        get: function () {
            return window["lblTipoLancamento_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Lancam.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Lancam.prototype, "hdnValidar", {
        get: function () {
            return $("#hdnValidar")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Lancam.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Lancam.prototype, "txtHora", {
        get: function () {
            return window['txtHora_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Lancam.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Lancam.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Lancam.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Lancam.prototype, "txtTipoLancamento", {
        get: function () {
            return window['txtTipoLancamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Lancam.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Lancam.prototype, "txtValor", {
        get: function () {
            return window['txtValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Lancam.prototype, "txtTipoLancamento_hdnEmpresaContabil", {
        get: function () {
            return $("#txtTipoLancamento_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Lancam.prototype, "grdRateioCentroCusto", {
        //Centro Custo
        get: function () {
            return window['grdRateioCentroCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Lancam.prototype, "Custos", {
        get: function () {
            return this.GetScope()["Custos"];
        },
        set: function (value) {
            this.GetScope()["Custos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Lancam.prototype, "txtCentroCusto", {
        get: function () {
            return window['txtCentroCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Lancam.prototype, "txtValorCentroCusto", {
        get: function () {
            return window['txtValorCentroCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Lancam.prototype, "rdTipoRateio", {
        get: function () {
            return window['rdTipoRateio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Lancam.prototype.Init = function () {
        _super.prototype.Init.call(this);
        //adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        //adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.CellPrepared, this.OnGridCellPrepared, this);
        }
        if (this.txtTipoLancamento) {
            adicionarEventoMoura(this.txtTipoLancamento.Procurou, this.OnPesquisandoTipoLancamento, this);
        }
        if (this.grdRateioCentroCusto) {
            adicionarEventoMoura(this.grdRateioCentroCusto.AdicionandoItem, this.OnClickIncluirCusto, this);
            adicionarEventoMoura(this.grdRateioCentroCusto.ItemAdicionado, this.OnCustoAdicionado, this);
            adicionarEventoMoura(this.grdRateioCentroCusto.AlterandoItem, this.OnEditandoItem, this);
        }
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.Procurou, this.OnDepoisBuscarContaContabil, this);
        }
        if (this.txtCentroCusto) {
            adicionarEventoMoura(this.txtCentroCusto.Procurou, this.OnDepoisBuscarCentroCusto, this);
            adicionarEventoMoura(this.txtCentroCusto.AbriuProcura, this.OnAbriuProcuraCentroCusto, this);
            adicionarEventoMoura(this.txtCentroCusto.AntesAbrirProcura, this.OnAntesAbrirProcuraCentroCusto, this);
        }
        if (this.cboContaCorrente) {
            adicionarEventoDevExpress(this.cboContaCorrente.Combo.SelectedIndexChanged, this.MudouEmpresa, this);
        }
    };
    C_Lancam.prototype.MudouEmpresa = function () {
        this.txtTipoLancamento.Limpar();
        this.txtTipoLancamento.LimparParametros();
        if (this.EntityTela.Entrada_Saida == "E") {
            this.txtTipoLancamento.AddParametro("TipoConfiguracaoContabil", "LE");
        }
        else {
            this.txtTipoLancamento.AddParametro("TipoConfiguracaoContabil", "LS");
        }
        this.txtTipoLancamento.AddParametro("codEmpresa", "" + this.cboContaCorrente.GetEmpresa());
        this.txtContaContabil.AddParametro("Empresa", this.cboContaCorrente.GetEmpresa().toString());
        this.PreencherEmpresaContabil(this.cboContaCorrente.GetEmpresa());
        this.OnDepoisBuscarContaContabil();
    };
    C_Lancam.prototype.OnEditandoItem = function (s, e) {
        if (e.item != null && e.item != undefined) {
            var valorTotal;
            var porc;
            var valorInformado = 0;
            for (var x = 0; x < this.Custos.length; x++) {
                if (e.item.Centro_Custo_Codigo != this.Custos[x].Centro_Custo_Codigo) {
                    valorInformado = valorInformado + this.Custos[x].Porcentagem;
                }
            }
            if (e.fieldNameAlterado == "Porcentagem") {
                valorInformado = valorInformado + e.item.Porcentagem;
                porc = e.item.Porcentagem;
            }
            else {
                valorInformado = valorInformado + (e.item.Valor * 100 / this.txtValor.GetText().CNum()).Format(2).CNum();
                porc = (e.item.Valor * 100 / this.txtValor.GetText().CNum()).Format(2).CNum();
            }
            if (valorInformado > 100) {
                if (this.flag) {
                    MostrarAlerta("Valor informado ultrapassa 100% do total do lançamento");
                    this.flag = !this.flag;
                }
                else {
                    this.flag = true;
                }
                e.cancelar = true;
                return;
            }
            else if (valorInformado <= 0) {
                if (this.flag) {
                    MostrarAlerta("Informe o valor corretamente");
                    this.flag = !this.flag;
                }
                else {
                    this.flag = true;
                }
                e.cancelar = true;
                return;
            }
            else {
                e.item.Valor = this.txtValor.GetText().CNum() / 100 * porc;
                e.item.Porcentagem = porc;
            }
        }
    };
    C_Lancam.prototype.PreencherEmpresaContabil = function (codEmpresa) {
        if (this.txtTipoLancamento_hdnEmpresaContabil != undefined) {
            this.txtTipoLancamento_hdnEmpresaContabil.value = codEmpresa;
        }
    };
    C_Lancam.prototype.OnAbriuProcuraCentroCusto = function () {
        this.txtCentroCusto.AddParametro("EmpresaCc", this.cboContaCorrente.GetEmpresa().toString());
    };
    C_Lancam.prototype.OnAntesAbrirProcuraCentroCusto = function () {
        this.txtCentroCusto.AddParametro("EmpresaCc", this.cboContaCorrente.GetEmpresa().toString());
    };
    C_Lancam.prototype.OnDepoisBuscarCentroCusto = function () {
        //if (this.cboContaCorrente.GetContaCorrente() == "" && this.txtCentroCusto.GetText() != "") {
        //    MostrarAlerta("Selecione uma conta corrente para informar o centro de custo");
        //    this.txtCentroCusto.Limpar();
        //    return;
        //}
        if (this.txtCentroCusto.GetText() != "") {
            var parametros;
            parametros = {
                codCentroCusto: this.txtCentroCusto.GetText().CNum(),
                contaCorrente: this.EntityTela.Conta_Corrente
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificarEmpresas", parametros);
            if (!retorno) {
                MostrarAlerta("Centro de Custo informado não está vinculada a empresa da conta corrente, utilizar a tela Cadastro de Centro de Custo para corrigir esta situação");
                this.txtCentroCusto.Limpar();
                this.txtCentroCusto.Focus();
                return;
            }
        }
    };
    C_Lancam.prototype.OnDepoisBuscarContaContabil = function () {
        var entidade = this.GetScope().Entity;
        var permitidaUsuario, i;
        var retorno;
        if (entidade.Conta_Contabil <= 0) {
            return;
        }
        var parametros = {
            codContaContabil: entidade.Conta_Contabil,
            usuarioLogado: ValoresSismoura.UsuarioLogado
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetByCod", parametros);
        if (retorno.Sintetico == "S") {
            MostrarAlerta("Você não pode usar uma Conta Sintética!");
            this.txtContaContabil.Limpar();
            return;
        }
        if (!retorno.Lancamento) {
            MostrarAlerta("A Conta Contábil não pode ser usada no Lançamento!. Para utilizar a Conta Contábil nessa tela, entre no Cadastro de Conta Contábil e marque o Check Lançamento.");
            this.txtContaContabil.Limpar();
            return;
        }
        if (!retorno.Empresas.FirstOrDefault("Empresa", this.cboContaCorrente.GetEmpresa().toString())) {
            MostrarAlerta("A Conta Contábil selecionada não pertence a empresa da Conta Corrente!");
            this.txtContaContabil.Limpar();
            return;
        }
    };
    C_Lancam.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        //this.utilizarTipoLancamento();
        if (this.txtTipoLancamento.Visible) {
            this.txtTipoLancamento.AddParametro("TipoConfiguracaoContabil", "LE");
        }
        if (!this.GetScope().MudouTipo) {
            this.GetScope().MudouTipo = $.proxy(this.MudouTipo, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Entrada_Saida; }, this.GetScope().MudouTipo);
        }
        if (!this.GetScope().MudouContaCorrente) {
            this.GetScope().MudouContaCorrente = $.proxy(this.MudouContaCorrente, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Conta_Corrente; }, this.GetScope().MudouContaCorrente);
        }
        this.OnDepoisLimpar(this.EntityTela);
        this.PreencherEmpresaContabil(ValoresSismoura.EmpresaPadraoUsuario);
    };
    C_Lancam.prototype.MudouContaCorrente = function (newValue, oldValue) {
        this.txtCentroCusto.LimparParametros();
        this.txtCentroCusto.AddParametro("EmpresaCc", "" + this.cboContaCorrente.GetEmpresa());
        this.OnDepoisBuscarCentroCusto();
        this.VerificarCentroCustoGrade(newValue, oldValue);
    };
    C_Lancam.prototype.VerificarCentroCustoGrade = function (newValue, oldValue) {
        if (this.Custos && this.Custos.length > 0) {
            if (!this.EntityTela.Conta_Corrente) {
                return;
            }
            for (var x = 0; x < this.Custos.length; x++) {
                var parametros = {
                    codCentroCusto: this.Custos[x].Centro_Custo_Codigo,
                    contaCorrente: this.EntityTela.Conta_Corrente
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("VerificarEmpresas", parametros);
                if (!retorno) {
                    MostrarAlerta("A empresa da conta corrente informada não possui vínculo com todos os Centros de Custo encontrados na grade de Rateio por Centro de Custo");
                    this.EntityTela.Conta_Corrente = oldValue;
                    break;
                }
            }
            return;
        }
    };
    C_Lancam.prototype.OnClickIncluirCusto = function (s, e) {
        var centroCusto = e.item;
        var vlrCentroCusto = this.txtValorCentroCusto.GetText().CNum();
        var valor = this.txtValor.GetText().CNum();
        var valorInformado = 0;
        for (var x = 0; x < this.Custos.length; x++) {
            valorInformado = valorInformado + this.Custos[x].Porcentagem;
        }
        if (this.rdTipoRateio.GetValue() == "P") {
            valorInformado = valorInformado + vlrCentroCusto;
        }
        else {
            valorInformado = valorInformado + (vlrCentroCusto * 100 / valor).Format(2).CNum();
        }
        if (valorInformado > 100) {
            MostrarAlerta("Valor informado ultrapassa 100% do total do lançamento");
            e.cancelar = true;
            return;
        }
        if (this.txtValor.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o valor do lançamento.");
            e.cancelar = true;
            return;
        }
        if (this.txtCentroCusto.GetText() == "") {
            MostrarAlerta("Informe o código do Centro de Custo.");
            e.cancelar = true;
            return;
        }
        for (var x = 0; x < this.Custos.length; x++) {
            if (this.Custos[x].Centro_Custo_Codigo == this.txtCentroCusto.GetText().CNum()) {
                MostrarAlerta("Centro de custo já inserido.");
                e.cancelar = true;
                return;
            }
        }
        if (this.txtValorCentroCusto.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o valor do Centro de Custo.");
            e.cancelar = true;
            return;
        }
        if (this.rdTipoRateio.GetValue() == "P" && this.txtValorCentroCusto.GetText().CNum() > 100) {
            MostrarAlerta("Ao selecionar o tipo '%', o valor do ventro de custo não pode ser maior do que 100.");
            e.cancelar = true;
            return;
        }
        var entidade = this.CarregarCentroCusto(this.txtCentroCusto.GetText().CNum());
        centroCusto.Centro_Custo_Codigo = entidade.Codigo;
        centroCusto.Centro_Custo_Descricao = entidade.Descricao;
        centroCusto.Centro_Custo = entidade.Cc;
        if (this.rdTipoRateio.GetValue() == "P") {
            centroCusto.Porcentagem = vlrCentroCusto;
            centroCusto.Valor = (valor * vlrCentroCusto / 100).Format(2).CNum();
        }
        else {
            centroCusto.Porcentagem = (vlrCentroCusto * 100 / valor).Format(2).CNum();
            centroCusto.Valor = vlrCentroCusto;
        }
    };
    C_Lancam.prototype.CarregarCentroCusto = function (codCentroCusto) {
        if (codCentroCusto <= 0) {
            this.Custos = [];
        }
        else {
            var retorno = void 0;
            var parametros = void 0;
            parametros = {
                codCentroCusto: codCentroCusto
            };
            retorno = this.ExecutarFuncaoServerSideSynch("CarregarCentroCusto", parametros);
            return retorno;
        }
    };
    C_Lancam.prototype.OnCustoAdicionado = function (s, e) {
        var centroCusto = e.item;
        var valor = this.txtValor.GetText().CNum();
        var totalAdicionado = 0;
        for (var x = 0; x < this.Custos.length; x++) {
            this.Custos[x].Porcentagem = (this.Custos[x].Valor * 100 / valor).Format(2).CNum();
            totalAdicionado += this.Custos[x].Valor;
        }
        totalAdicionado -= centroCusto.Valor;
        if (centroCusto.Valor > (valor - totalAdicionado)) {
            centroCusto.Valor = (valor - totalAdicionado);
        }
    };
    C_Lancam.prototype.MudouTipo = function (newValue, oldValue) {
        if (this.EntityTela.Configuracao_Lancamento && this.EntityTela.Configuracao_Lancamento != 0) {
            this.EntityTela.Configuracao_Lancamento = 0;
            if (newValue == 'E') {
                MostrarAlerta('O "Tipo de lançamento contabil" está configurado para Saída. Favor informar um tipo de lançamento configurado para entrada.');
            }
            else if (newValue != 'S') {
                MostrarAlerta('O "Tipo de lançamento contabil" está configurado para Entrada. Favor informar um tipo de lançamento configurado para saída.');
            }
        }
        if (this.txtTipoLancamento.Visible) {
            if (this.EntityTela.Entrada_Saida == "E") {
                this.txtTipoLancamento.AddParametro("TipoConfiguracaoContabil", "LE");
            }
            else {
                this.txtTipoLancamento.AddParametro("TipoConfiguracaoContabil", "LS");
            }
        }
    };
    C_Lancam.prototype.OnPesquisandoTipoLancamento = function (s, e) {
        if (this.EntityTela.Configuracao_Lancamento > 0) {
            var parametros;
            parametros = {
                codLancamento: this.EntityTela.Configuracao_Lancamento
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetLancamentoByCodigo", parametros);
            if (this.EntityTela.Entrada_Saida == "E") {
                if (retorno != "LE") {
                    //e.Valor = "0";
                    this.EntityTela.Configuracao_Lancamento = 0;
                    //this.txtTipoLancamento.Limpar();
                    MostrarAlerta("Tipo de Lançamento Contábil não encontrado(a) ou inativo(a)");
                }
            }
            else {
                if (retorno != "LS") {
                    //e.Valor = "0";
                    this.EntityTela.Configuracao_Lancamento = 0;
                    //this.txtTipoLancamento.Limpar();
                    MostrarAlerta("Tipo de Lançamento Contábil não encontrado(a) ou inativo(a)");
                }
            }
        }
        if (this.txtTipoLancamento.GetText() != "") {
            var contemReduzido;
            var params = {
                CodLancemento: this.GetScope().Entity.Configuracao_Lancamento
            };
            contemReduzido = this.ExecutarFuncaoServerSideSynch("ValidarReduzido", params);
            if (!contemReduzido) {
                MostrarAlerta("Tipo de Lançamento Contábil sem Código Reduzido parametrizado. Acesse a tela 'Configuração de Lançamento Contábil' e grave novamente o lançamento para que seja gerado o Reduzido.", 20000);
                this.GetScope().Entity.Configuracao_Lancamento = null;
            }
        }
        this.RefreshAngular();
    };
    //protected utilizarTipoLancamento() {
    //    var config = ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Modulo_Contabil;
    //    this.txtTipoLancamento.Visible = config;
    //    this.txtTipoLancamento.Obrigatorio = config;        
    //}
    C_Lancam.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        this.cboContaCorrente.SetContaCorrente(Entidade.Conta_Corrente);
        var data = Entidade.Data_Movimento;
        //this.txtHora.textBoxHorario.SetDate(this.AlterarEntidadeData(data.ToDate(), data.ToDate()));
        this.txtHora.textBoxHorario.SetDate(data.ToDate());
        if (this.txtTipoLancamento.Visible && Entidade.Configuracao_Lancamento > 0) {
            if (Entidade.Entrada_Saida == "E") {
                this.txtTipoLancamento.AddParametro("TipoConfiguracaoContabil", "LE");
            }
            else {
                this.txtTipoLancamento.AddParametro("TipoConfiguracaoContabil", "LS");
            }
        }
        this.GetScope().Entity.Data_Movimento = Entidade.Data_Movimento;
        this.GetScope().Entity.Conta_Contabil = Entidade.Conta_Contabil;
        this.txtContaContabil.AddParametro("Empresa", this.cboContaCorrente.GetEmpresa().toString());
        this.GetCadastrados();
    };
    C_Lancam.prototype.OnAntesSetEntidade = function (eventArg) {
        _super.prototype.OnAntesSetEntidade.call(this, eventArg);
        criarPropertyObjeto(eventArg.Entidade, "Tipo_Extenso", function (value) {
        }, function () {
            switch (eventArg.Entidade.Tipo) {
                case 1:
                    return "Lançamento";
                case 2:
                    return "Contas a Pagar";
                case 3:
                    return "Contas a Receber";
                default:
                    return "";
            }
        });
        eventArg.Entidade.Tela = "C_Lancam.aspx";
        var parametros = {
            codLancamento: eventArg.Entidade.Numero_Documento
        };
        var centroCustos = this.ExecutarFuncaoServerSideSynch("GetCentroCustoRetorno", parametros);
        this.Custos = centroCustos;
    };
    C_Lancam.prototype.PreencherCustos = function (entidade) {
        var custos = this.Custos;
        entidade.CentrosCusto = [];
        for (var x = 0; x < custos.length; x++) {
            var novoCusto = {};
            var custoGrid = void 0;
            custoGrid = custos[x];
            novoCusto.Codigo_Lancamento = this.txtCodigo.GetText().CNum();
            novoCusto.Codigo = custoGrid.Id;
            novoCusto.Centro_Custo = custoGrid.Centro_Custo_Codigo;
            novoCusto.Valor = custoGrid.Valor;
            entidade.CentrosCusto.push(novoCusto);
        }
    };
    C_Lancam.prototype.OnAntesDeletar = function () {
        if (!this.respondeuContas) {
            if (this.lblTipoLancamento.Text == "Contas a Pagar" || this.lblTipoLancamento.Text == "Contas a Receber") {
                MsgBoxJS("Atenção. Este lançamento foi gerado de " + this.lblTipoLancamento.Text + ". Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnResondeuContas, this));
                return false;
            }
        }
        else {
            this.respondeuContas = false;
        }
        return _super.prototype.OnAntesDeletar.call(this);
    };
    C_Lancam.prototype.OnResondeuContas = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.respondeuContas = true;
            this.ClicarExcluir();
        }
    };
    C_Lancam.prototype.GetCadastrados = function () {
        try {
            var dataMovimento;
            var parametros;
            var entity = this.GetScope().Entity;
            if (entity && entity.Data_Movimento) {
                dataMovimento = entity.Data_Movimento.FormataData().toString();
            }
            else {
                dataMovimento = "";
            }
            parametros = {
                contaCorrente: this.cboContaCorrente.GetContaCorrente().toString(),
                data: dataMovimento
            };
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Lancam.prototype.OnGridCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data != null && e.column.dataField == "Entrada_Saida") {
                if (e.data.Entrada_Saida == "E") {
                    e.cellElement.css("color", "#0000FF");
                }
                else {
                    e.cellElement.css("color", "#FF0000");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Lancam.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        var data = new Date;
        this.GetCadastrados();
        this.cboContaCorrente.Limpar();
        Entity.Tipo = 1;
        this.txtData.Date = new Date;
        this.txtHora.textBoxHorario.SetDate(new Date);
        Entity.Data_Movimento = new Date;
        this.rdTipoRateio.SetValue("V");
        this.Custos = [];
        //if (this.cboTipo) {
        //    this.cboTipo.SetValue("E");
        //}
        this.cboTipo.SetValue("E");
        this.Grid.PreencherGrid(null);
        Entity.Entrada_Saida = "E";
    };
    C_Lancam.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.GetCadastrados();
        return true;
    };
    C_Lancam.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entidade = this.GetScope().Entity;
        if (!this.ValidarContaContabil()) {
            return false;
        }
        var data = this.EntityTela.Data_Movimento;
        if (typeof data == "string") {
            data = ("" + data).ToDate();
        }
        this.EntityTela.Data_Movimento = this.AlterarEntidadeData(data, this.txtHora.textBoxHorario.GetDate());
        this.EntityTela.Conta_Corrente = this.cboContaCorrente.GetContaCorrente();
        this.PreencherCustos(entidade);
        return true;
    };
    C_Lancam.prototype.ValidarContaContabil = function () {
        try {
            var parametros;
            parametros = {
                contaContabil: this.txtContaContabil.GetText().CNum()
            };
            var cad = this.ExecutarFuncaoServerSideSynch("ValidarContaContabil", parametros);
            if (cad != "") {
                return false;
            }
            return true;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Lancam.prototype.AlterarEntidadeData = function (data, hora) {
        if (!data) {
            data = new Date();
        }
        var minutes = 0, hour = 0;
        if (!hora) {
            minutes = hora.getMinutes();
            hour = hora.getHours();
        }
        var dataEntidade;
        dataEntidade = new Date(data.getFullYear(), data.getMonth(), data.getDate(), hora.getHours(), hora.getMinutes());
        return dataEntidade;
    };
    return C_Lancam;
}(MouraPageCadastroAngular));
var c_Lancam = new C_Lancam();
//# sourceMappingURL=C_Lancam.js.map