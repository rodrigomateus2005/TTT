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
var C_Promoc = /** @class */ (function (_super) {
    __extends(C_Promoc, _super);
    function C_Promoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Promoc.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "txtDesconto", {
        get: function () {
            return window['txtDesconto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "txtPromocao", {
        get: function () {
            return window['txtPromocao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "btnImportar", {
        get: function () {
            return window['btnImportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "btnProrrogar", {
        get: function () {
            return window['btnProrrogar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "btnFechar", {
        get: function () {
            return window['btnFechar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "btnGravarProrrogar", {
        get: function () {
            return window['btnGravarProrrogar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "lstSemana", {
        get: function () {
            return window['lstSemana_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "txtPeriodoProrrogar", {
        get: function () {
            return window['txtPeriodoProrrogar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "cboSituacao", {
        get: function () {
            return window['cboSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "gridProrrogar", {
        get: function () {
            return window['gridProrrogar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "gridDias", {
        get: function () {
            return window['gridDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "gridEmpresas", {
        get: function () {
            return window['gridEmpresas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "txtDataProrrogar", {
        get: function () {
            return window['txtDataProrrogar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "cboEmpresaProrrogar", {
        get: function () {
            return window['cboEmpresaProrrogar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "lstSemanaProrrogar", {
        get: function () {
            return window['lstSemanaProrrogar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "hdnExistente", {
        get: function () {
            return $("#hdnExistente")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "hdnBuscando", {
        get: function () {
            return $("#hdnBuscando")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "mdProrrogar", {
        get: function () {
            return window["mdProrrogar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc.prototype, "mdDetalhes", {
        get: function () {
            return window["mdDetalhes_Object"];
        },
        enumerable: true,
        configurable: true
    });
    C_Promoc.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnImportar) {
            adicionarEventoMoura(this.btnImportar.Click, this.OnClickBotaoAbrirAtualizacaoPreco, this);
        }
        if (this.btnProrrogar) {
            adicionarEventoMoura(this.btnProrrogar.Click, this.OnClickBotaoProrrogar, this);
        }
        if (this.btnFechar) {
            adicionarEventoMoura(this.btnFechar.Click, this.OnClickBotaoFechar, this);
        }
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnClickBotaoGerar, this);
        }
        if (this.btnGravarProrrogar) {
            adicionarEventoMoura(this.btnGravarProrrogar.Click, this.GravarPromocaoProrrogar, this);
        }
        this.OnCboSituacao(null, null);
        if (this.txtDesconto) {
            adicionarEventoMoura(this.txtDesconto.TextChanged, this.OnTextBoxDescontoChange, this);
        }
        if (this.txtPromocao) {
            adicionarEventoMoura(this.txtPromocao.TextChanged, this.OnTextBoxPromocaoChange, this);
        }
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Procurou, this.VerificarPromocaoExistente, this);
        }
        if (this.cboSituacao) {
            adicionarEventoDevExpress(this.cboSituacao.Combo.SelectedIndexChanged, this.OnCboSituacao, this);
        }
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
            adicionarEventoMoura(this.Grid.ClickBotaoLinha, this.OnGridSelecionouItem, this);
        }
        if (this.gridProrrogar) {
            adicionarEventoMoura(this.gridProrrogar.CellPrepared, this.OnGridCellPrepared, this);
        }
    };
    C_Promoc.prototype.OnGridCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data) {
                var validadeInicial = new Date(e.data["Validade_Inicial"]);
                var validadeFinal = new Date(e.data["Validade_Final"]);
                var dataAtual = new Date;
                dataAtual.setHours(0, 0, 0, 0);
                validadeInicial = validadeInicial.ToDate();
                validadeFinal = validadeFinal.ToDate();
                dataAtual = dataAtual.ToDate();
                if (dataAtual < validadeInicial) {
                    e.cellElement.css("color", "blue");
                }
                else if (dataAtual > validadeFinal) {
                    e.cellElement.css("color", "red");
                }
                else if (dataAtual >= validadeInicial && dataAtual <= validadeFinal) {
                    e.cellElement.css("color", "green");
                }
            }
        }
        catch (ex) {
        }
    };
    C_Promoc.prototype.OnClickBotaoGerar = function (s, e) {
        try {
            e.processOnServer = false;
            this.Preencher_Grade_Prorrogar();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Promoc.prototype.OnClickBotaoAbrirAtualizacaoPreco = function (s, e) {
        try {
            e.processOnServer = false;
            var parametros = [];
            abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.ImportarProdutosPromocao), parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Promoc.prototype.OnTextBoxDescontoChange = function () {
        if (this.txtDesconto.GetText().CNum() < 0 || this.txtDesconto.GetText().CNum() > 100) {
            if (this.txtDesconto.GetText().CNum() < 0) {
                MostrarAlerta("Informe uma porcentagem maior que zero");
            }
            else {
                MostrarAlerta("A porcentagem de desconto não pode ser maior que 100 %");
            }
            this.txtDesconto.Limpar();
            this.txtDesconto.Focus();
            return;
        }
        return this.Calcular_Valor();
    };
    C_Promoc.prototype.OnTextBoxPromocaoChange = function () {
        return this.Calcular_PCento();
    };
    C_Promoc.prototype.OnCboSituacao = function (s, e) {
        if (this.cboSituacao.GetSelectedIndex() < 1) {
            this.txtPeriodoProrrogar.Visible = false;
        }
        else {
            this.txtPeriodoProrrogar.Visible = true;
        }
    };
    C_Promoc.prototype.Calcular_Valor = function () {
        var precoProduto;
        var parametros;
        var valor;
        parametros = {
            codProduto: this.txtProduto.GetText().CNum()
        };
        precoProduto = this.ExecutarFuncaoServerSideSynch("ObterPrecoProduto", parametros);
        if (precoProduto > 0) {
            valor = precoProduto - ((this.txtDesconto.GetText().CNum() / 100) * precoProduto);
            this.txtPromocao.SetText(valor.Format(this.txtPromocao.QuantidadeCasas));
        }
    };
    C_Promoc.prototype.Calcular_PCento = function () {
        var precoProduto;
        var parametros;
        var valor;
        parametros = {
            codProduto: this.txtProduto.GetText().CNum()
        };
        precoProduto = this.ExecutarFuncaoServerSideSynch("ObterPrecoProduto", parametros);
        if (precoProduto > 0) {
            valor = 100 - ((this.txtPromocao.GetText().CNum() * 100) / precoProduto);
            if (valor > 100 || valor < 0) {
                MostrarAlerta("A porcentagem de desconto não pode ser maior que 100 % ou menor que 0 %");
                this.txtPromocao.Limpar();
                this.txtPromocao.Focus();
                return;
            }
            this.txtDesconto.SetText(valor.Format(this.txtDesconto.QuantidadeCasas));
        }
    };
    C_Promoc.prototype.OnGridSelecionouItem = function (s, e) {
        if (e.commandName == "Detalhes") {
            this.Preencher_Grade_Detalhes(e.rowKey);
        }
        else {
            this.PreencherEntidade(e.rowKey);
        }
    };
    C_Promoc.prototype.Preencher_Grade_Detalhes = function (promoc) {
        try {
            var parametros;
            parametros = {
                Promocao: promoc
            };
            var reg = this.ExecutarFuncaoServerSideSynch("Preencher_Grade_Empresas", parametros);
            this.gridEmpresas.PreencherGrid(reg);
            this.gridEmpresas.Grid.deselectAll();
            var reg = this.ExecutarFuncaoServerSideSynch("Preencher_Grade_Dias", parametros);
            this.gridDias.PreencherGrid(reg);
            this.gridDias.Grid.deselectAll();
            if (this.mdDetalhes) {
                this.mdDetalhes.ModalDialog.Show();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Promoc.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_Promoc.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
        this.lstEmpresa.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.lstSemana.LimparSelecao();
        this.txtPeriodo.textBoxCalendarioInicio.SetDate(new Date);
        this.txtPeriodo.textBoxCalendarioFim.SetDate(new Date);
        this.txtDesconto.SetText("0".FormatNumber(2));
        this.Limpar_Modal_Prorrogar();
    };
    C_Promoc.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.EntityTela.Codigo == null) {
            this.EntityTela.Codigo = 0;
        }
        this.EntityTela.Validade_Inicial = this.txtPeriodo.textBoxCalendarioInicio.GetDate();
        this.EntityTela.Validade_Final = this.txtPeriodo.textBoxCalendarioFim.GetDate();
        this.PreencherPromocaoEmpresa();
        this.PreencherPromocaoSemana();
        var entidade = this.EntityTela;
        entidade.Data_Cadastro = new Date();
        entidade.Data_Carga = new Date();
        var parametros;
        parametros = {
            entidade: entidade,
            empresas: this.lstEmpresa.GetValues(),
            dias: this.lstSemana.GetValues(),
            produto: this.txtProduto.GetText().CNum(),
            dataInicio: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
            dataFim: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
            promocao: this.txtPromocao.GetText().CNum(),
            codigo: this.txtCodigo.GetText().CNum()
        };
        var msg = this.ExecutarFuncaoServerSideSynch("VerificarPromocao", parametros);
        if (msg != "") {
            MostrarAlerta(msg);
            return false;
        }
        return true;
    };
    C_Promoc.prototype.Preencher_Grade_Prorrogar = function () {
        try {
            var parametros;
            parametros = {
                situacao: this.cboSituacao.GetValue(),
                dataInicio: this.txtPeriodoProrrogar.textBoxCalendarioInicio.GetValue(),
                dataFim: this.txtPeriodoProrrogar.textBoxCalendarioFim.GetValue(),
                empresaProrrogar: this.cboEmpresaProrrogar.GetValue()
            };
            var reg = this.ExecutarFuncaoServerSideSynch("Preencher_Grade_Prorrogar", parametros);
            this.gridProrrogar.PreencherGrid(reg);
            this.gridProrrogar.Grid.deselectAll();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Promoc.prototype.OnClickBotaoFechar = function () {
        if (this.mdProrrogar) {
            this.mdProrrogar.ModalDialog.Hide();
        }
    };
    C_Promoc.prototype.OnClickBotaoProrrogar = function (s, e) {
        e.processOnServer = false;
        this.Limpar_Modal_Prorrogar();
        if (this.mdProrrogar) {
            this.mdProrrogar.ModalDialog.Show();
        }
    };
    C_Promoc.prototype.Calcular_PCentoExistente = function (Entity) {
        var precoProduto;
        var precoPromocao;
        var parametros;
        var valor;
        precoProduto = Entity.Preco_Produto;
        precoPromocao = Entity.Preco_Promocao;
        if (precoProduto > 0) {
            valor = 100 - ((precoPromocao * 100) / precoProduto);
            this.txtDesconto.SetText(valor.Format(this.txtDesconto.QuantidadeCasas));
        }
    };
    C_Promoc.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.hdnBuscando.value = "sim";
        this.Calcular_PCentoExistente(Entity);
        this.txtPeriodo.textBoxCalendarioInicio.SetDate(Entity.Validade_Inicial.FormataData().ToDate());
        this.txtPeriodo.textBoxCalendarioFim.SetDate(Entity.Validade_Final.FormataData().ToDate());
        if (this.lstEmpresa) {
            var selecionar = [];
            for (var x = 0; x <= Entity.promocaoEmpresa.length - 1; x++) {
                selecionar.push("" + Entity.promocaoEmpresa[x].Empresa);
            }
            this.lstEmpresa.LimparSelecao();
            this.lstEmpresa.SetValues(selecionar);
        }
        if (this.lstSemana) {
            var selecionar = [];
            for (var x = 0; x <= Entity.promocaoSemana.length - 1; x++) {
                selecionar.push("" + Entity.promocaoSemana[x].Dia);
            }
            this.lstSemana.LimparSelecao();
            this.lstSemana.SetValues(selecionar);
        }
        return true;
    };
    C_Promoc.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        this.Calcular_PCentoExistente(this.EntityTela);
        return true;
    };
    C_Promoc.prototype.VerificarPromocaoExistente = function () {
        try {
            var parametros;
            parametros = {
                Produto: this.txtProduto.GetText().CNum(),
                codPromocao: this.txtCodigo.GetText().CNum()
            };
            var cad = this.ExecutarFuncaoServerSideSynch("VerificarPromocaoExistente", parametros);
            this.hdnExistente.value = cad;
            if (cad != 0 && this.hdnBuscando.value == "") {
                MsgBoxJS("Já existe uma promoção cadastrada para este produto. Deseja visualizar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.RespostaExistente, this));
            }
            this.hdnBuscando.value = "";
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Promoc.prototype.PreencherPromocaoEmpresa = function () {
        var empresas;
        if (this.lstEmpresa) {
            empresas = this.lstEmpresa.GetValues();
        }
        this.EntityTela.promocaoEmpresa = [];
        for (var x = 0; x <= empresas.length - 1; x++) {
            var empresa;
            empresa = {};
            empresa.Empresa = empresas[x].CNum();
            empresa.Data_Carga = new Date();
            this.EntityTela.promocaoEmpresa.push(empresa);
        }
    };
    C_Promoc.prototype.PreencherPromocaoSemana = function () {
        this.EntityTela.promocaoSemana = [];
        var semana;
        var dias;
        if (this.lstSemana) {
            dias = this.lstSemana.GetValues();
        }
        if (dias.length > 0) {
            for (var x = 0; x <= dias.length - 1; x++) {
                semana = {};
                semana.Dia = dias[x].CNum();
                semana.Data_Carga = new Date();
                this.EntityTela.promocaoSemana.push(semana);
            }
        }
    };
    C_Promoc.prototype.RespostaExistente = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.PreencherEntidade(this.hdnExistente.value);
        }
        else {
            this.hdnExistente.value = "";
        }
    };
    C_Promoc.prototype.GravarPromocaoProrrogar = function () {
        try {
            if (this.txtDataProrrogar.Date == null || this.txtDataProrrogar.Date == undefined) {
                MostrarMensagemCampoObrigatorio("Prorrogar Para");
            }
            else if (this.gridProrrogar.GetSelectedRowsData.length = 0) {
                MostrarAlerta("Selecione ao menos um registro para atualizá-lo");
            }
            else {
                var dataProrrogar = this.txtDataProrrogar.Date;
                var dataAtual = new Date;
                if (dataProrrogar.FormataData > dataAtual.FormataData) {
                    MostrarAlerta("A data para prorrogar deve ser maior que a data atual.");
                }
                else {
                    var parametros;
                    parametros = {
                        Tela: "C_Promoc.aspx",
                        Usuario: ValoresSismoura.UsuarioLogado,
                        dataProrrogar: this.txtDataProrrogar.Date,
                        dias: this.lstSemanaProrrogar.SelectedValues,
                        valor: JSON.stringify(this.gridProrrogar.GetSelectedRowsData)
                    };
                    var gravou = this.ExecutarFuncaoServerSideSynch("GravarPromocaoProrrogar", parametros);
                    if (gravou == "True") {
                        MostrarMensagem("Registro gravado com sucesso!");
                        this.Preencher_Grade_Prorrogar();
                        this.PreencherGrade();
                    }
                    else {
                        MostrarAlerta(gravou);
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Promoc.prototype.PreencherGrade = function () {
        try {
            var parametrosUsuario = {
                Usuario: ValoresSismoura.UsuarioLogado
            };
            var parametros = {
                Empresas: this.ExecutarFuncaoServerSideSynch("EmpresasUsuario", parametrosUsuario)
            };
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Promoc.prototype.Limpar_Modal_Prorrogar = function () {
        this.gridProrrogar.PreencherGrid(null);
        this.gridProrrogar.LimparSelecao();
        this.txtPeriodoProrrogar.IniciarDataAtual();
        this.cboSituacao.SetSelectedIndex(0);
        this.txtDataProrrogar.Date = null;
        this.cboEmpresaProrrogar.SetValue(0);
        this.lstSemana.LimparSelecao();
        this.lstSemanaProrrogar.LimparSelecao();
        this.txtPeriodoProrrogar.Visible = false;
    };
    return C_Promoc;
}(MouraPageCadastroAngular));
var c_Promoc = new C_Promoc();
//# sourceMappingURL=C_Promoc.js.map