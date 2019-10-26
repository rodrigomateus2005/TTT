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
var PrioAtiv = /** @class */ (function (_super) {
    __extends(PrioAtiv, _super);
    function PrioAtiv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PrioAtiv.prototype, "cboPeriodo", {
        get: function () {
            return window['cboPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "DockPendentes", {
        get: function () {
            return window['dockPendentes_dock'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "DockPriorizadas", {
        get: function () {
            return window['dockPriorizadas_dock'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "btnOkRecusa", {
        get: function () {
            return window['btnOkRecusa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "btnCancelRecusa", {
        get: function () {
            return window['btnCancelRecusa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "mdRecusa", {
        get: function () {
            return window['mdRecusa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "txtMotivoRecusa", {
        get: function () {
            return window['txtMotivoRecusa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "hdnAtividadeRecusa", {
        get: function () {
            return $('#hdnAtividadeRecusa')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "hdnPainelRecusa", {
        get: function () {
            return $('#hdnPainelRecusa')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "hdnPriorizacaoAtiva", {
        get: function () {
            return $('#hdnPriorizacaoAtiva')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "lblAtividadeRecusa", {
        get: function () {
            return window['lblAtividadeRecusa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "mdInf", {
        get: function () {
            return window['mdInf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "hdnAtividadeInf", {
        get: function () {
            return $('#hdnAtividadeInf')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "lblAtividadeInf", {
        get: function () {
            return window['lblAtividadeInf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "txtHistoricoAtividade", {
        get: function () {
            return window['txtHistoricoAtividade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "btnFecharInf", {
        get: function () {
            return window['btnFecharInf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "lblModuloInf", {
        get: function () {
            return window['lblModuloInf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "lblDataCadInf", {
        get: function () {
            return window['lblDataCadInf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "lblClienteInf", {
        get: function () {
            return window['lblClienteInf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "lblUsuarioCadastroInf", {
        get: function () {
            return window['lblUsuarioCadastroInf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "mdPriorizarProgramacao", {
        get: function () {
            return window['mdPriorizarProgramacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "btnFecharProg", {
        get: function () {
            return window['btnFecharProg_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "cboEquipe", {
        get: function () {
            return window['cboEquipe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "txtObservacaoProg", {
        get: function () {
            return window['txtObservacaoProg_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "txtDataProg", {
        get: function () {
            return window['txtDataProg_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "btnSalvarProg", {
        get: function () {
            return window['btnSalvarProg_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "lblModuloProg", {
        get: function () {
            return window['lblModuloProg_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "lblClienteProg", {
        get: function () {
            return window['lblClienteProg_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "lblAtividadeProg", {
        get: function () {
            return window['lblAtividadeProg_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "grdAtProg", {
        get: function () {
            return window['grdAtProg_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "btnInfProg", {
        get: function () {
            return window['btnInfProg_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "mdAtv", {
        get: function () {
            return window['mdAtv_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "btnProcurar", {
        get: function () {
            return window['btnProcurar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "btnGerarAtv", {
        get: function () {
            return window['btnGerarAtv_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PrioAtiv.prototype, "grdAtv", {
        get: function () {
            return window['grdAtv_Object'];
        },
        enumerable: true,
        configurable: true
    });
    PrioAtiv.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.DockPriorizadas) {
            adicionarEventoDevExpress(this.DockPriorizadas.AfterDock, this.OnDockPanelPriorizadas, this);
        }
        if (this.DockPendentes) {
            adicionarEventoDevExpress(this.DockPendentes.AfterDock, this.OnDockPanelPendentes, this);
        }
        if (this.btnCancelRecusa) {
            adicionarEventoMoura(this.btnCancelRecusa.Click, this.OnClickCancelRecusa, this);
        }
        if (this.btnOkRecusa) {
            adicionarEventoMoura(this.btnOkRecusa.Click, this.OnClickOKRecusa, this);
        }
        if (this.btnFecharInf) {
            adicionarEventoMoura(this.btnFecharInf.Click, this.OnClickFecharInf, this);
        }
        if (this.btnFecharProg) {
            adicionarEventoMoura(this.btnFecharProg.Click, this.OnClickFecharProg, this);
        }
        if (this.btnSalvarProg) {
            adicionarEventoMoura(this.btnSalvarProg.Click, this.OnClickSalvarPriorizacaoProg, this);
        }
        if (this.mdPriorizarProgramacao && this.mdPriorizarProgramacao.ModalDialog) {
            adicionarEventoDevExpress(this.mdPriorizarProgramacao.ModalDialog.Closing, this.OnCloseModalProgramacao, this);
        }
        if (this.cboEquipe && this.cboEquipe.Combo) {
            adicionarEventoDevExpress(this.cboEquipe.Combo.SelectedIndexChanged, this.OncboEquipeSelectedIndexChanged, this);
        }
        if (this.btnInfProg) {
            adicionarEventoMoura(this.btnInfProg.Click, this.OnClickMaisInformacoesProgramacao, this);
        }
        if (this.grdAtProg) {
            adicionarEventoMoura(this.grdAtProg.ClickBotaoLinha, this.OnClickBotaoGrade, this);
        }
        if (this.btnProcurar) {
            adicionarEventoMoura(this.btnProcurar.Click, this.OnClickBotaoProcurar, this);
        }
        if (this.btnGerarAtv) {
            adicionarEventoMoura(this.btnGerarAtv.Click, this.OnClickBotaoGerarProcura, this);
        }
        if (this.grdAtv) {
            adicionarEventoMoura(this.grdAtv.ClickBotaoLinha, this.OnClickBotaoGradeProcurar, this);
        }
        this.MinimizarDocks();
        var valor;
        if (this.hdnPriorizacaoAtiva.value.CNum() == ('' + this.cboPeriodo.GetValue()).CNum()) {
            valor = true;
        }
        else {
            valor = false;
        }
        this.SetAllowDragging(this.DockPendentes, valor);
        this.SetAllowDragging(this.DockPriorizadas, valor);
    };
    PrioAtiv.prototype.OnDockPanelPriorizadas = function (s, e) {
        e.processOnServer = false;
        e.panel.SetCollapsed(true);
    };
    PrioAtiv.prototype.OnDockPanelPendentes = function (s, e) {
        e.processOnServer = false;
        e.panel.SetCollapsed(false);
    };
    PrioAtiv.prototype.GravarPriorizacao = function (codAtividade) {
        try {
            var panels = this.DockPriorizadas.GetPanels();
            var isAtividadeJaPriorizada = false;
            var isAtividadePriorizadaAgora = false;
            if (!panels) {
                panels = [];
            }
            if (this.hdnPriorizacaoAtiva.value.CNum() != ('' + this.cboPeriodo.GetValue()).CNum()) {
                MostrarAlerta("Esta atividade não pode ser alterada em uma priorização antiga. Selecione a priorização desta semana e tente novamente");
                return;
            }
            isAtividadeJaPriorizada = this.IsAtividadePriorizada(codAtividade);
            var listaAtividades = [];
            var atividade;
            for (var x = 0; x <= panels.length - 1; x++) {
                atividade = this.GetAtividadePainel(panels[x].name);
                if (atividade > 0) {
                    listaAtividades.push(atividade);
                }
            }
            var retorno;
            var parametros;
            parametros = {
                codPriorizacao: ("" + this.cboPeriodo.GetValue()).CNum(),
                atividades: listaAtividades,
                codUsuario: ValoresSismoura.UsuarioLogado,
                nomeTela: ValoresSismoura.NomeTela
            };
            abrirEspera();
            retorno = this.ExecutarFuncaoServerSideSynch("GravarPrioridades", parametros);
            fecharEspera();
            if (!String.IsNullOrWhiteSpace(retorno)) {
                MostrarAlerta(retorno);
                return false;
            }
            else {
                //Verifica se a atividade está sendo priorizada agora para abrir o modal de priorização para a programação
                for (var x = 0; x <= listaAtividades.length - 1; x++) {
                    if (listaAtividades[x] == codAtividade) {
                        isAtividadePriorizadaAgora = true;
                        break;
                    }
                }
                if (!isAtividadeJaPriorizada && isAtividadePriorizadaAgora) {
                    this.AbrirModalPriorizarProgramacao(codAtividade);
                }
                return true;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    PrioAtiv.prototype.OnClickBotaoPriorizar = function (s, e, codAtividade, idPanel) {
        e.processOnServer = false;
        if (this.hdnPriorizacaoAtiva.value.CNum() != ('' + this.cboPeriodo.GetValue()).CNum()) {
            MostrarAlerta("Esta atividade não pode ser alterada em uma priorização antiga. Selecione a priorização desta semana e tente novamente");
            return;
        }
        if (!this.IsAtividadePriorizada(codAtividade)) {
            this.PriorizarAtividade(codAtividade);
        }
        else {
            this.AbrirModalPriorizarProgramacao(codAtividade);
        }
    };
    PrioAtiv.prototype.OncboEquipeSelectedIndexChanged = function (s, e) {
        this.FiltrarGradeEquipe();
    };
    PrioAtiv.prototype.FiltrarGradeEquipe = function () {
        var value = this.cboEquipe.GetText();
        if (String.IsNullOrWhiteSpace(value)) {
            value = null;
        }
        this.grdAtProg.FilterColumn("Equipe", value);
    };
    PrioAtiv.prototype.AbrirModalPriorizarProgramacao = function (codAtividade) {
        try {
            if (this.hdnPriorizacaoAtiva.value.CNum() != ('' + this.cboPeriodo.GetValue()).CNum()) {
                MostrarAlerta("Esta atividade não pode ser alterada em uma priorização antiga. Selecione a priorização desta semana e tente novamente");
                return;
            }
            var retorno;
            var parametros;
            parametros = {
                codAtividade: codAtividade
            };
            retorno = this.ExecutarFuncaoServerSideSynch("GetPriorizacaoProgramacao", parametros);
            if (!retorno) {
                MostrarAlerta("Atividade não encontrada!");
                return;
            }
            this.lblAtividadeProg.Text = "" + codAtividade;
            this.lblModuloProg.Text = retorno.Modulo;
            this.lblClienteProg.Text = retorno.Nome_Cliente;
            if (retorno.Reuniao) {
                this.txtObservacaoProg.SetText(retorno.Reuniao.Observacao);
                if (retorno.Reuniao.Data_Inicio_Atividade) {
                    retorno.Reuniao.Data_Inicio_Atividade = ("" + retorno.Reuniao.Data_Inicio_Atividade).ToDate();
                    this.txtDataProg.Date = retorno.Reuniao.Data_Inicio_Atividade;
                }
                else {
                    this.txtDataProg.Date = null;
                }
                if (retorno.Reuniao.Equipe) {
                    this.cboEquipe.SetValue(retorno.Reuniao.Equipe);
                }
                else {
                    this.cboEquipe.LimparSelecao();
                }
            }
            else {
                this.txtObservacaoProg.Limpar();
                this.txtDataProg.Date = null;
                this.cboEquipe.LimparSelecao();
            }
            this.FiltrarGradeEquipe();
            this.mdPriorizarProgramacao.Show();
            this.grdAtProg;
            //Preenche a grade
            setTimeout($.proxy(function () {
                this.grdAtProg.PreencherGrid(retorno.Grade);
                this.grdAtProg.GroypBy("Equipe");
                this.grdAtProg.OrderBy("Data_Inicio", "asc");
            }, this), 100);
            this.cboEquipe.Focus();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    PrioAtiv.prototype.OnClickSalvarPriorizacaoProg = function (s, e) {
        try {
            e.processOnServer = false;
            var equipe = ("" + this.cboEquipe.GetValue()).CNum();
            var data = this.txtDataProg.Date;
            if (equipe <= 0) {
                MostrarAlerta("Informe a Equipe");
                return;
            }
            if (!data) {
                MostrarAlerta("Informe a data de início!");
                return;
            }
            var retorno;
            var parametros;
            parametros = {
                codPriorizacao: ("" + this.cboPeriodo.GetValue()).CNum(),
                codAtividade: this.lblAtividadeProg.Text.CNum(),
                codEquipe: equipe,
                dataPriorizacao: data,
                observacao: this.txtObservacaoProg.GetText(),
                codUsuario: ValoresSismoura.UsuarioLogado,
                nomeTela: ValoresSismoura.NomeTela
            };
            retorno = this.ExecutarFuncaoServerSideSynch("GravarReuniao", parametros);
            if (!String.IsNullOrWhiteSpace(retorno)) {
                MostrarAlerta(retorno);
                return;
            }
            this.mdPriorizarProgramacao.Hide();
            MostrarMensagem("Atividade priorizada com sucesso!");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    PrioAtiv.prototype.OnCloseModalProgramacao = function (s, e) {
        this.grdAtProg.PreencherGrid([]);
    };
    PrioAtiv.prototype.GetAtividadePainel = function (nomePainel) {
        var retorno = 0;
        if (String.IsNullOrWhiteSpace(nomePainel)) {
            return 0;
        }
        var aux = nomePainel.split("_");
        if (aux.length == 3) {
            retorno = aux[1].CNum();
        }
        return retorno;
    };
    PrioAtiv.prototype.OnCliCkReprovarAtividade = function (s, e, codAtividade, idPainel) {
        e.processOnServer = false;
        if (this.IsAtividadePriorizada(codAtividade)) {
            MostrarAlerta("Esta atividade já foi priorizada e não pode ser reprovada!");
            return;
        }
        if (this.hdnPriorizacaoAtiva.value.CNum() != ('' + this.cboPeriodo.GetValue()).CNum()) {
            MostrarAlerta("Esta atividade não pode ser alterada em uma priorização antiga. Selecione a priorização desta semana e tente novamente");
            return;
        }
        this.txtMotivoRecusa.Limpar();
        this.hdnAtividadeRecusa.value = "" + codAtividade;
        this.lblAtividadeRecusa.Text = "" + codAtividade;
        this.hdnPainelRecusa.value = idPainel;
        this.mdRecusa.Show();
        this.txtMotivoRecusa.Focus();
    };
    PrioAtiv.prototype.OnClickOKRecusa = function (s, e) {
        e.processOnServer = false;
        if (String.IsNullOrWhiteSpace(this.txtMotivoRecusa.GetText())) {
            MostrarAlerta("Informe o motivo da recusa");
            this.txtMotivoRecusa.Focus();
            return;
        }
        if (this.ReprovarAtividade()) {
            this.txtMotivoRecusa.Limpar();
            this.lblAtividadeRecusa.Text = "";
            this.mdRecusa.Hide();
            var dock = window[this.hdnPainelRecusa.value];
            if (dock) {
                dock.Hide();
            }
            MostrarMensagem("Atividade reprovada com sucesso!");
        }
        else {
            this.txtMotivoRecusa.Focus();
        }
    };
    PrioAtiv.prototype.OnClickCancelRecusa = function (s, e) {
        e.processOnServer = false;
        this.mdRecusa.Hide();
    };
    PrioAtiv.prototype.ReprovarAtividade = function () {
        var retorno;
        var parametros;
        parametros = {
            codPriorizacao: ("" + this.cboPeriodo.GetValue()).CNum(),
            codAtividade: this.hdnAtividadeRecusa.value.CNum(),
            Motivo: this.txtMotivoRecusa.GetText(),
            codUsuario: ValoresSismoura.UsuarioLogado,
            nomeTela: ValoresSismoura.NomeTela
        };
        retorno = this.ExecutarFuncaoServerSideSynch("ReprovarAtividade", parametros);
        if (!String.IsNullOrWhiteSpace(retorno)) {
            MostrarAlerta(retorno);
            return false;
        }
        else {
            return true;
        }
    };
    PrioAtiv.prototype.MaisInformacoesAtividade = function (codAtividade) {
        var retorno;
        var parametros;
        if (!codAtividade) {
            return;
        }
        parametros = {
            codAtividade: codAtividade
        };
        try {
            retorno = this.ExecutarFuncaoServerSideSynch("GetInformacoesAtividade", parametros);
            if (!retorno) {
                MostrarAlerta("Atividade não encontrada!");
                return;
            }
            this.hdnAtividadeInf.value = "" + codAtividade;
            this.lblAtividadeInf.Text = "" + codAtividade;
            this.txtHistoricoAtividade.SetText(retorno.Historico);
            this.lblModuloInf.Text = retorno.Modulo;
            this.lblUsuarioCadastroInf.Text = retorno.Usuario_Cadastro_Nome;
            if (retorno.Data_Cadastro) {
                this.lblDataCadInf.Text = "" + retorno.Data_Cadastro.FormataData();
            }
            else {
                this.lblDataCadInf.Text = "";
            }
            this.lblClienteInf.Text = !String.IsNullOrWhiteSpace(retorno.Nome_Fantasia_Cliente) ? retorno.Nome_Fantasia_Cliente : retorno.Razao_Social_Cliente;
            this.mdInf.Show();
            this.mdInf.BringToFront();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    PrioAtiv.prototype.OnClickFecharInf = function (s, e) {
        e.processOnServer = false;
        this.mdInf.Hide();
    };
    PrioAtiv.prototype.OnDockClosing = function (s, e, codAtividade) {
        if (this.IsAtividadePriorizada(codAtividade)) {
            MostrarAlerta("Não é possível ocultar um painel que já foi priorizado");
            e.cancel = true;
        }
    };
    PrioAtiv.prototype.IsAtividadePriorizada = function (codAtividade) {
        try {
            var retorno;
            var parametros;
            parametros = {
                codPriorizacao: ("" + this.cboPeriodo.GetValue()).CNum(),
                codAtividade: codAtividade
            };
            retorno = this.ExecutarFuncaoServerSideSynch("IsAtividadePriorizada", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
            throw ex;
        }
    };
    PrioAtiv.prototype.OnClickFecharProg = function (s, e) {
        e.processOnServer = false;
        this.mdPriorizarProgramacao.Hide();
    };
    PrioAtiv.prototype.MinimizarDocks = function () {
        var panels = this.DockPriorizadas.GetPanels();
        if (!panels) {
            panels = [];
        }
        for (var x = 0; x <= panels.length - 1; x++) {
            panels[x].SetCollapsed(true);
        }
    };
    PrioAtiv.prototype.SetAllowDragging = function (dockZone, value) {
        var panels = dockZone.GetPanels();
        if (!panels) {
            panels = [];
        }
        for (var x = 0; x <= panels.length - 1; x++) {
            panels[x].allowDragging = value;
        }
    };
    PrioAtiv.prototype.OnClickMaisInformacoesProgramacao = function (s, e) {
        e.processOnServer = false;
        this.MaisInformacoesAtividade(this.lblAtividadeProg.Text.CNum());
    };
    PrioAtiv.prototype.OnClickBotaoGrade = function (s, e) {
        if (e.commandName == "btnAtividade") {
            var atividade = e.data['Atividade'];
            if (atividade) {
                this.MaisInformacoesAtividade(atividade);
            }
        }
    };
    PrioAtiv.prototype.OnClickBotaoProcurar = function (s, e) {
        e.processOnServer = false;
        //setTimeout(function () { this.grdAtv.PreencherGrid([]); }, 100);
        this.OnClickBotaoGerarProcura({}, {});
        this.mdAtv.Show();
    };
    PrioAtiv.prototype.OnClickBotaoGerarProcura = function (s, e) {
        e.processOnServer = false;
        try {
            if (this.hdnPriorizacaoAtiva.value.CNum() != ('' + this.cboPeriodo.GetValue()).CNum()) {
                MostrarAlerta("Você não pode alterar uma priorização antiga. Selecione a priorização desta semana e tente novamente");
                return;
            }
            var panels = this.DockPendentes.GetPanels();
            if (!panels) {
                panels = [];
            }
            var atividade;
            var lista = [];
            for (var x = 0; x <= panels.length - 1; x++) {
                atividade = this.GetAtividadePainel(panels[x].name);
                if (atividade > 0) {
                    lista.push(atividade);
                }
            }
            var retorno;
            var parametros;
            parametros = {
                atividades: lista
            };
            retorno = this.ExecutarFuncaoServerSideSynch("GetAtvidadesProcura", parametros);
            this.grdAtv.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    PrioAtiv.prototype.OnClickBotaoGradeProcurar = function (s, e) {
        var atividade = e.data['Atividade'];
        if (e.commandName == "btnAtividade") {
            if (atividade) {
                this.MaisInformacoesAtividade(atividade);
            }
        }
        else if (e.commandName == "btnProgramacao") {
            if (atividade) {
                if (this.PriorizarAtividade(atividade)) {
                    this.mdAtv.Hide();
                }
            }
        }
    };
    PrioAtiv.prototype.PriorizarAtividade = function (codAtividade) {
        if (codAtividade <= 0) {
            return false;
        }
        var panels = this.DockPendentes.GetPanels();
        if (!panels) {
            panels = [];
        }
        //Verifica se a atividade está pendende de priorização
        var atividadeAtual, encontrou = false;
        for (var x = 0; x <= panels.length - 1; x++) {
            atividadeAtual = this.GetAtividadePainel(panels[x].name);
            if (atividadeAtual == codAtividade) {
                encontrou = true;
                break;
            }
        }
        if (!encontrou) {
            MostrarAlerta("Esta atividade não está pendente de priorização!");
            return false;
        }
        var idPanel = "dp_" + codAtividade + "_dock";
        var panel = window[idPanel];
        if (panel) {
            panel.Dock(this.DockPriorizadas, null);
            panel.SetCollapsed(true);
            panel.EndDragging.FireEvent(panel, {});
            return true;
        }
        else {
            MostrarAlerta("Painel da atividade não encontrado");
            return false;
        }
    };
    return PrioAtiv;
}(MouraPage));
var prioAtiv = new PrioAtiv();
//# sourceMappingURL=PrioAtiv.js.map