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
var R_Chekin = /** @class */ (function (_super) {
    __extends(R_Chekin, _super);
    function R_Chekin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Chekin.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "Grid", {
        get: function () {
            return window["Grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "chkLocal", {
        get: function () {
            return window["chkLocal_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "chkSituacao", {
        get: function () {
            return window["chkSituacao_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "dlgServico", {
        get: function () {
            return window['dlgServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "grdServico", {
        get: function () {
            return window['grdServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "btnSalvar", {
        get: function () {
            return window['btnSalvar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "btnFechar", {
        get: function () {
            return window['btnFechar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "mdlDesistencia", {
        get: function () {
            return window["mdlDesistencia_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "lblCodCheckin", {
        get: function () {
            return window['lblCodCheckin_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "lblCodCliente", {
        get: function () {
            return window['lblCodCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "txtAssunto", {
        get: function () {
            return window["txtAssunto_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "hdnCodigoInterval", {
        get: function () {
            return $('#hdnCodigoInterval')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "hdnCHKServico", {
        get: function () {
            return $('#hdnCHKServico')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "chkMostrarConcluidos", {
        get: function () {
            return window['chkMostrarConcluidos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "chkTempoAdicionar", {
        get: function () {
            return window['chkTempoAdicionar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "txtTempoAtualizacao", {
        get: function () {
            return window['txtTempoAtualizacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "chkPeriodo", {
        get: function () {
            return window['chkPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "accFiltro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "accLegendas", {
        get: function () {
            return window['accLegendas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "txtCheckin", {
        get: function () {
            return window['txtCheckin_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "btnServico", {
        get: function () {
            return window['btnServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "btnOkDesistencia", {
        get: function () {
            return window['btnOkDesistencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "txtMotivoDesistencia", {
        get: function () {
            return window['txtMotivoDesistencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "pnC", {
        get: function () {
            return $('#pnC')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Chekin.prototype, "btnNovoCheckin", {
        get: function () {
            return window['btnNovoCheckin_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Chekin.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.chkLocal.LimparSelecao();
        this.chkSituacao.LimparSelecao();
        this.cboEmpresa.LimparSelecao();
        this.txtAssunto.Limpar();
        this.chkMostrarConcluidos.Checked = false;
        this.txtTempoAtualizacao.SetText('30');
        this.chkTempoAdicionar.Checked = true;
        this.chkPeriodo.Checked = true;
        if (ValoresSismoura && ValoresSismoura.EmpresaPadraoUsuario > 0) {
            this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        }
        this.LimparInterval();
        this.Grid.PreencherGrid([]);
    };
    R_Chekin.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        this.AlterarVisiblePeriodo();
    };
    R_Chekin.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.CellPrepared, this.OnGridCellPrepared, this);
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouLinha, this);
            adicionarEventoMoura(this.Grid.ClickBotaoLinha, this.OnGridClicouBotao, this);
        }
        if (this.chkPeriodo) {
            adicionarEventoMoura(this.chkPeriodo.CheckChanged, this.OnCheckPeriodoChanged, this);
        }
        if (this.btnOkDesistencia) {
            adicionarEventoMoura(this.btnOkDesistencia.Click, this.OnClickBotaoConfirmarEvento, this);
        }
        if (this.btnSalvar) {
            adicionarEventoMoura(this.btnSalvar.Click, this.OnClickBotaoSalvar, this);
        }
        if (this.btnFechar) {
            adicionarEventoMoura(this.btnFechar.Click, this.OnClickBotaoFechar, this);
        }
        if (this.chkMostrarConcluidos)
            adicionarEventoMoura(this.chkMostrarConcluidos.CheckChanged, this.OnchkMostrarConcluidosCheckChanged, this);
        if (this.chkSituacao)
            adicionarEventoMoura(this.chkSituacao.SelectionChanged, this.OnchkchkSituacaoSelectionChanged, this);
        this.PreencherLabel();
        //this.pnC.innerHTML = " <div class='span2'><span id='lblCol' style='color:Black;background-color: #11001f;'>&nbsp &nbsp &nbsp</span><span id='lblteste' style='color:#11001f;'>TESTE</span></div>";
        if (this.btnNovoCheckin) {
            adicionarEventoMoura(this.btnNovoCheckin.Click, this.OnClickBotaoNovoCheckin, this);
        }
    };
    R_Chekin.prototype.OnchkchkSituacaoSelectionChanged = function () {
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            var situacao = [];
            var selecionou = false;
            if (ValoresSismoura.ConfiguracoesPetshop.Checkin_Situacao_Finalizado) {
                situacao.push(ValoresSismoura.ConfiguracoesPetshop.Checkin_Situacao_Finalizado.toString());
                for (var i = 0; i < this.chkSituacao.GetValues().length; i++) {
                    if (this.chkSituacao.GetValues()[i] == situacao[0]) {
                        selecionou = true;
                    }
                }
                this.chkMostrarConcluidos.Checked = selecionou;
            }
        }
    };
    R_Chekin.prototype.OnchkMostrarConcluidosCheckChanged = function () {
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            var situacao = [];
            var selecionados = [];
            if (ValoresSismoura.ConfiguracoesPetshop.Checkin_Situacao_Finalizado) {
                situacao.push(ValoresSismoura.ConfiguracoesPetshop.Checkin_Situacao_Finalizado.toString());
                if (this.chkMostrarConcluidos && this.chkMostrarConcluidos.Checked) {
                    this.chkSituacao.SetValues(situacao);
                }
                else {
                    for (var i = 0; i < this.chkSituacao.GetValues().length; i++) {
                        if (this.chkSituacao.GetValues()[i] != situacao[0]) {
                            selecionados.push(this.chkSituacao.GetValues()[i]);
                        }
                    }
                    this.chkSituacao.LimparSelecao();
                    this.chkSituacao.SetValues(selecionados);
                }
            }
        }
    };
    R_Chekin.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (this.txtTempoAtualizacao.GetText().CNum() != 0 && this.chkTempoAdicionar.Check.checked == false) {
            return MostrarAlerta("Marque a opção de Atualizar a cada (segundos)");
        }
        if (this.chkTempoAdicionar.Check.checked && this.txtTempoAtualizacao.GetText().CNum() < 10) {
            return MostrarAlerta("O tempo de atualização deve ser maior ou igual a 10 segundos");
        }
        if (!this.ValidarCampos()) {
            this.chkTempoAdicionar.Checked = false;
            return;
        }
        var codigoInterval = this.Refresh();
        this.hdnCodigoInterval.value = codigoInterval;
        if (this.accFiltro) {
            this.accFiltro.SetExpanded(false);
        }
    };
    R_Chekin.prototype.AlterarVisiblePeriodo = function () {
        if (this.chkPeriodo.Checked) {
            this.txtPeriodo.Visible = true;
        }
        else {
            this.txtPeriodo.Visible = false;
        }
    };
    R_Chekin.prototype.GerarGrade = function () {
        try {
            var parametros = {
                locais: this.chkLocal.SelectedValues,
                situacoes: this.chkSituacao.SelectedValues,
                codEmpresa: this.cboEmpresa.GetValue(),
                mostrarConcluidos: this.chkMostrarConcluidos.Checked,
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                filtrarPeriodo: this.chkPeriodo.Checked,
                codAssunto: this.txtAssunto.GetText().CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("RelacaoCheckin", parametros);
            this.Grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Chekin.prototype.PreencherLabel = function () {
        try {
            var retorno = this.ExecutarFuncaoServerSideSynch("SituacaoChekin", undefined);
            this.pnC.innerHTML = retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Chekin.prototype.ValidarCampos = function () {
        if (this.cboEmpresa.GetValue() <= 0) {
            MostrarAlerta("Informe a empresa!");
            return false;
        }
        return true;
    };
    R_Chekin.prototype.OnGridCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data) {
                var corFundo = "" + e.data["Cor_Fundo_CSS"];
                var corFonte = "" + e.data["Cor_Fonte_CSS"];
                if (!String.IsNullOrWhiteSpace(corFundo)) {
                    e.cellElement.css("background-color", corFundo);
                }
                if (!String.IsNullOrWhiteSpace(corFonte)) {
                    e.cellElement.css("color", corFonte);
                }
                var name = "";
                if (e.column && e.column) {
                    name = e.column.dataField;
                }
                if (e.rowType == "data" && e.data) {
                    if (name.toLowerCase() == "pago") {
                        var valor = e.data["Pago"];
                        if ((!String.IsNullOrWhiteSpace(valor)) && (valor == "Não")) {
                            e.cellElement.css("background-color", "Red");
                            e.cellElement.css("color", "White");
                            e.cellElement.css("font-size", "14px");
                        }
                    }
                }
            }
        }
        catch (ex) {
        }
    };
    R_Chekin.prototype.OnGridSelecionouLinha = function (s, e) {
        try {
            var codigo = "" + e.data['Codigo'];
            this.txtCheckin.Procurar(codigo);
            this.txtCheckin.BotaoCadastro.DoClick();
        }
        catch (ex) {
        }
    };
    R_Chekin.prototype.OnGridClicouBotao = function (s, e) {
        try {
            var codCheckIn = ("" + e.data['Codigo']).CNum();
            var finalizado = ("" + e.data['Finalizado']).toUpperCase();
            var codAtendimento = ("" + e.data['Codigo_Atendimento']).CNum();
            var codAnimal = ("" + e.data['Codigo_Animal']).CNum();
            var codCliente = ("" + e.data['Codigo_Cliente']).CNum();
            var codAssunto = ("" + e.data['CodAssunto']).CNum();
            var codProfissional = ("" + e.data['Codigo_Profissional']).CNum();
            var codSituacaoAtual = ("" + e.data['Codigo_Situacao']).CNum();
            var codConvenio = ("" + e.data['Cod_Convenio']).CNum();
            var autorizacaoConvenio = ("" + e.data['Autorizacao_Convenio'].toString());
            var parametros = [];
            if (e.commandName == "btnAtendimento") {
                this.MudarSituacaoCheckin(codCheckIn, codSituacaoAtual, finalizado);
                if (codAtendimento > 0) {
                    parametros.push("codAtendimento=" + codAtendimento);
                }
                parametros.push("codAnimal=" + codAnimal);
                parametros.push("codCheckIn=" + codCheckIn);
                if (codConvenio > 0) {
                    parametros.push("codConvenio=" + codConvenio);
                }
                if (!String.IsNullOrWhiteSpace(autorizacaoConvenio)) {
                    parametros.push("autorizacaoConvenio=" + autorizacaoConvenio);
                }
                //this.dlgTelaModal.AbrirTelaModal(URLTela.CadastroDeAtendimento, parametros, "");Mendigo Eduardo
                abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroDeAtendimento), parametros);
                this.PreencherGrade();
            }
            else if (e.commandName == "btnAtendimentoContinuo") {
                this.MudarSituacaoCheckin(codCheckIn, codSituacaoAtual, finalizado);
                parametros.push("codAnimal=" + codAnimal);
                parametros.push("codCheckIn=" + codCheckIn);
                abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroDeAtendimentoContinuo), parametros);
                this.PreencherGrade();
            }
            else if (e.commandName == "BtnDesistencia") {
                this.OnClickDesistencia(codCheckIn, codCliente);
            }
            else if (e.commandName == "btnConsulta") {
                this.MudarSituacaoCheckin(codCheckIn, codSituacaoAtual, finalizado);
                parametros.push("codAnimal=" + codAnimal);
                parametros.push("profissional=" + codProfissional);
                parametros.push("codCheckIn=" + codCheckIn);
                parametros.push("Codassunto=" + codAssunto);
                if (codConvenio > 0) {
                    parametros.push("codConvenio=" + codConvenio);
                }
                if (!String.IsNullOrWhiteSpace(autorizacaoConvenio)) {
                    parametros.push("autorizacaoConvenio=" + autorizacaoConvenio);
                }
                abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroDeConsultaDoAnimal), parametros);
                this.PreencherGrade();
            }
            else if (e.commandName == "btnFinalizar") {
                this.FinalizarCheckin(codCheckIn, codCliente, "n", "");
            }
            else if (e.commandName == "btnServico") {
                this.AbrirServico(codCheckIn);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Chekin.prototype.OnClickBotaoConfirmarEvento = function (s, e) {
        e.processOnServer = false;
        //var parametros: any;
        //var retorno: string;
        if (this.txtMotivoDesistencia.GetText().trim() == "") {
            MostrarAlerta("Informe a Justificativa!");
            return;
        }
        var codCheckin = this.lblCodCheckin.Text.CNum();
        var codCliente = this.lblCodCliente.Text.CNum();
        this.FinalizarCheckin(codCheckin, codCliente, "s", this.txtMotivoDesistencia.GetText());
        this.txtMotivoDesistencia.Limpar();
        this.lblCodCheckin.Text = "";
        this.lblCodCliente.Text = "";
        this.mdlDesistencia.Hide();
        return false;
    };
    R_Chekin.prototype.OnClickDesistencia = function (checkIn, codCliente) {
        if (this.mdlDesistencia && this.mdlDesistencia.ModalDialog) {
            this.mdlDesistencia.ModalDialog.Show();
        }
        this.lblCodCheckin.Text = checkIn.toString();
        this.lblCodCliente.Text = codCliente.toString();
        return false;
    };
    R_Chekin.prototype.FinalizarCheckin = function (codCheckIn, codCliente, isDesistencia, motivoDesistencia) {
        try {
            var aux = codCheckIn + '|' + codCliente + '|' + isDesistencia + '|' + motivoDesistencia;
            MsgBoxJS("Deseja realmente finalizar este check-in?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouOpcaoFinalizar, this), aux);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Chekin.prototype.OnSelecionouOpcaoFinalizar = function (e) {
        try {
            if (e.Resultado != MsgBoxResult.Yes) {
                return;
            }
            if (String.IsNullOrWhiteSpace(e.Argument)) {
                return;
            }
            var codCheckIn = ("" + e.Argument).split("|")[0].CNum();
            var codCliente = ("" + e.Argument).split("|")[1].CNum();
            var isDesistencia = false;
            var motivoDesistencia = ("" + e.Argument).split("|")[3].toString();
            if (("" + e.Argument).split("|")[2].toLowerCase() == "s") {
                isDesistencia = true;
            }
            var parametros = {
                codCheckIn: codCheckIn,
                codCliente: codCliente,
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado,
                isDesistencia: isDesistencia,
                motivoDesistencia: motivoDesistencia
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("FinalizarCheckin", parametros);
            if (!retorno) {
                return;
            }
            if (retorno.Sucesso) {
                if (!String.IsNullOrWhiteSpace(retorno.Mensagem)) {
                    MostrarMensagem(retorno.Mensagem);
                }
            }
            else {
                if (!String.IsNullOrWhiteSpace(retorno.MensagemErro)) {
                    MostrarAlerta(retorno.MensagemErro);
                }
            }
            this.PreencherGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Chekin.prototype.AbrirServico = function (codCheckIn) {
        try {
            this.CarregarServicosCheckin(codCheckIn);
            this.dlgServico.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Chekin.prototype.CarregarServicosCheckin = function (codCheckin) {
        if (codCheckin <= 0) {
            MostrarAlerta("O Check-in não foi informado");
            return;
        }
        this.hdnCHKServico.value = codCheckin.toString();
        var parametros = {
            codCheckin: codCheckin
        };
        var Servicos = this.ExecutarFuncaoServerSideSynch("GetServicosCheckin", parametros);
        this.grdServico.PreencherGrid(Servicos);
    };
    R_Chekin.prototype.OnClickBotaoSalvar = function (s, e) {
        e.processOnServer = false;
        var parametros = {
            codCheckin: this.hdnCHKServico.value.CNum(),
            servicos: this.grdServico.DataSource,
            nomeTela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GravarServicosCheckin", parametros);
        if (retorno) {
            MostrarMensagem("Registro gravado com sucesso!");
        }
        this.CarregarServicosCheckin(this.hdnCHKServico.value.CNum());
    };
    R_Chekin.prototype.OnClickBotaoFechar = function (s, e) {
        e.processOnServer = false;
        this.dlgServico.Hide();
    };
    R_Chekin.prototype.LimparInterval = function () {
        if (this.hdnCodigoInterval.value.CNum() != 0) {
            clearInterval(this.hdnCodigoInterval.value.CNum());
            this.hdnCodigoInterval.value = "";
        }
    };
    R_Chekin.prototype.Refresh = function () {
        var codigo = 0;
        this.LimparInterval();
        if (this.chkTempoAdicionar.Check.checked) {
            this.GerarGrade();
            codigo = setInterval($.proxy(function () {
                this.GerarGrade();
            }, this), this.txtTempoAtualizacao.GetText().CNum() * 1000);
        }
        else {
            this.GerarGrade();
        }
        return codigo.toString();
    };
    R_Chekin.prototype.OnCheckPeriodoChanged = function () {
        this.AlterarVisiblePeriodo();
    };
    R_Chekin.prototype.MudarSituacaoCheckin = function (codCheckIn, codSituacaoAtual, finalizado) {
        try {
            var parametros = {
                codCheckIn: codCheckIn,
                codSituacaoAtual: codSituacaoAtual,
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado,
                finalizado: (finalizado == "SIM" ? true : false)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("MudarSituacaoAndamento", parametros);
            if (!String.IsNullOrWhiteSpace(retorno)) {
                MostrarMensagem(retorno);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Chekin.prototype.OnClickBotaoNovoCheckin = function (s, e) {
        e.processOnServer = false;
        try {
            abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroDeCheckin), []);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_Chekin;
}(MouraPageRelacaoAngular));
var r_Chekin = new R_Chekin();
//# sourceMappingURL=R_Chekin.js.map