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
var C_AgAnim = /** @class */ (function (_super) {
    __extends(C_AgAnim, _super);
    function C_AgAnim() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_AgAnim.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgAnim.prototype, "Grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgAnim.prototype, "txtData", {
        get: function () {
            return window["txtData_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgAnim.prototype, "txtProprietario", {
        get: function () {
            return window["txtProprietario_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgAnim.prototype, "txtProfissional", {
        get: function () {
            return window["txtProfissional_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgAnim.prototype, "txtGrupo", {
        get: function () {
            return window["txtGrupo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgAnim.prototype, "txtServico", {
        get: function () {
            return window["txtServico_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgAnim.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgAnim.prototype, "lstTipoHora", {
        get: function () {
            return window["lstTipoHora_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgAnim.prototype, "accFiltro", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgAnim.prototype, "btnNovo", {
        get: function () {
            return window['btnNovo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgAnim.prototype, "btnHistoricoImprimirMatricial", {
        get: function () {
            return window['btnHistoricoImprimirMatricial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgAnim.prototype, "btnHistoricoVisualizarWord", {
        get: function () {
            return window['btnHistoricoVisualizarWord_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgAnim.prototype, "mdHistoricoCompleto", {
        get: function () {
            return window['mdHistoricoCompleto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgAnim.prototype, "txtHistorico", {
        get: function () {
            return window['txtHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgAnim.prototype, "btnTicket", {
        get: function () {
            return window['btnTicket_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgAnim.prototype, "btnParticipante", {
        get: function () {
            return window['btnParticipante_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgAnim.prototype, "hdnServico", {
        get: function () {
            return $("#hdnServico")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AgAnim.prototype, "hdnServicoAtendimento", {
        get: function () {
            return $("#hdnServicoAtendimento")[0];
        },
        enumerable: true,
        configurable: true
    });
    C_AgAnim.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        try {
            this.txtData.Date = new Date();
            this.txtProfissional.Limpar();
            this.txtProprietario.Limpar();
            this.txtGrupo.Limpar();
            this.txtServico.Limpar();
            this.cboEmpresa.LimparSelecao();
            this.lstTipoHora.SetValue("S");
            if (ValoresSismoura && ValoresSismoura.EmpresaPadraoUsuario > 0) {
                this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
            }
            this.GerarGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgAnim.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    C_AgAnim.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.CellPrepared, this.OnGridCellPrepared, this);
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouLinha, this);
            adicionarEventoMoura(this.Grid.ClickBotaoLinha, this.OnGridClicouBotao, this);
            adicionarEventoMoura(this.Grid.RowValidating, this.OnGridRowValidating, this);
            //Exibir linhas
            if (this.Grid.Grid) {
                this.Grid.Grid.option("showRowLines", true);
            }
        }
        if (this.btnNovo) {
            adicionarEventoMoura(this.btnNovo.Click, this.OnClickBtnNovo, this);
        }
        if (this.btnHistoricoImprimirMatricial) {
            adicionarEventoMoura(this.btnHistoricoImprimirMatricial.Click, this.OnClickHistoricoImprimirMatricial, this);
        }
        if (this.btnHistoricoVisualizarWord) {
            adicionarEventoMoura(this.btnHistoricoVisualizarWord.Click, this.OnClickHistoricoImprimirWord, this);
        }
        if (this.btnTicket) {
            adicionarEventoMoura(this.btnTicket.Click, this.OnClickImprimirTicket, this);
        }
        if (this.txtProfissional) {
            adicionarEventoMoura(this.txtProfissional.AntesAbrirProcura, this.OnAntesAbrirProcuraProfissional, this);
        }
    };
    C_AgAnim.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!this.ValidarCampos()) {
            return;
        }
        this.GerarGrade();
        if (this.accFiltro) {
            this.accFiltro.SetExpanded(false);
        }
    };
    C_AgAnim.prototype.GerarGrade = function () {
        try {
            //Estava voltando 1 hora por conta do horário de verão, como a data estava com o horário meia noite (00:00:00), 
            //voltava a data para o dia anterior na hora de deserializar a data.
            var dt;
            dt = this.txtData.Date;
            dt.setHours(12);
            var parametros = {
                data: dt,
                codProfissional: this.txtProfissional.GetText().CNum(),
                codServico: this.txtServico.GetText().CNum(),
                codGrupo: this.txtGrupo.GetText().CNum(),
                codEmpresa: this.cboEmpresa.GetValue(),
                tipoHora: this.lstTipoHora.GetValue(),
                codProprietario: this.txtProprietario.GetText().CNum()
            };
            this.ExecutarFuncaoServerSideAsynch("RelacaoAgenda", parametros, this.OnGerougrade, this.OnErrorGerarGrade, this);
            abrirEspera("");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgAnim.prototype.OnGerougrade = function (d) {
        try {
            fecharEspera();
            var retorno = GetRetornoAJAX(d);
            this.Grid.PreencherGrid(retorno);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    C_AgAnim.prototype.OnErrorGerarGrade = function (erro) {
        try {
            fecharEspera();
            LogarException(erro);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgAnim.prototype.ValidarCampos = function () {
        if (this.txtData.Date == null || this.txtData.Date == undefined) {
            MostrarAlerta("Informe a data!");
            return false;
        }
        return true;
    };
    C_AgAnim.prototype.OnGridRowValidating = function (s, e) {
        try {
            if (!e.newData || !e.oldData) {
                return;
            }
            var campoAlterado = "";
            var valorAlterado = null;
            var codServicoAtendimento = e.oldData.Codigo_Servico_Atendimento;
            if (!codServicoAtendimento) {
                this.Grid.Grid.cancelEditData();
                return;
            }
            for (var prop in e.newData) {
                campoAlterado = prop;
            }
            if (!String.IsNullOrWhiteSpace(campoAlterado)) {
                valorAlterado = e.newData[campoAlterado];
            }
            if (campoAlterado == "Observacao") {
                var retornoOBS = this.AlterarObservacao(codServicoAtendimento, valorAlterado);
                if (!String.IsNullOrWhiteSpace(retornoOBS)) {
                    this.Grid.Grid.cancelEditData();
                    MostrarAlerta(retornoOBS);
                }
            }
            else if (campoAlterado == "Profissional_Codigo") {
                var retornoProf = this.AlterarProfissional(codServicoAtendimento, valorAlterado);
                if (!String.IsNullOrWhiteSpace(retornoProf)) {
                    this.Grid.Grid.cancelEditData();
                    MostrarAlerta(retornoProf);
                }
            }
        }
        catch (ex) {
            e.isValid = false;
            e.errorText = "Ocorreu um erro no sistema";
            LogarException(ex);
        }
    };
    C_AgAnim.prototype.AlterarObservacao = function (codServicoAtendimento, novaObservacao) {
        try {
            var parametros = {
                codServicoAtendimento: codServicoAtendimento,
                novaObservacao: novaObservacao,
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            return this.ExecutarFuncaoServerSideSynch("AlterarObservacao", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgAnim.prototype.AlterarProfissional = function (codServicoAtendimento, codNovoProfissional) {
        try {
            var parametros = {
                codServicoAtendimento: codServicoAtendimento,
                codNovoProfissional: codNovoProfissional,
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            return this.ExecutarFuncaoServerSideSynch("AlterarProfissional", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgAnim.prototype.OnGridCellPrepared = function (s, e) {
        try {
            var filedName = "";
            if (e.column && e.column.dataField) {
                filedName = e.column.dataField;
            }
            if (e.rowType == "data" && e.data) {
                if (filedName == "Hora_Servico") {
                    e.cellElement.css("font-weight", "bold");
                }
                var corFundo = e.data["Cor_Fundo_CSS"];
                var corFonte = e.data["Cor_Fonte_CSS"];
                if (!String.IsNullOrWhiteSpace(corFundo)) {
                    e.cellElement.css("background-color", corFundo);
                }
                if (!String.IsNullOrWhiteSpace(corFonte)) {
                    e.cellElement.css("color", corFonte);
                }
            }
        }
        catch (ex) {
        }
    };
    C_AgAnim.prototype.OnGridSelecionouLinha = function (s, e) {
        try {
            var codAtendimento = ("" + e.data['Atendimento']).CNum();
            var codProfissional = ("" + e.data['Profissional_Codigo']).CNum();
            var horaAtendimento = ("" + e.data['Hora_Servico']);
            var parametros = [];
            if (codAtendimento > 0) {
                abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDeAtendimento), "" + codAtendimento);
            }
            else {
                parametros.push("Data_Atendimento=" + this.txtData.Date);
                parametros.push("Horario_Atendimento=" + horaAtendimento);
                if (this.txtProfissional.GetText().CNum() > 0) {
                    parametros.push("CodProfissional=" + this.txtProfissional.GetText().CNum());
                }
                abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroDeAtendimento), parametros);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgAnim.prototype.OnGridClicouBotao = function (s, e) {
        try {
            var codAnimal = ("" + e.data['Codigo_Animal']).CNum();
            var codAtendimento = ("" + e.data['Atendimento']).CNum();
            var codProfissional = ("" + e.data['Profissional_Codigo']).CNum();
            var codServicoAtendimento = ("" + e.data['Codigo_Servico_Atendimento']).CNum();
            var codServico = ("" + e.data['Cod_Servico']).CNum();
            var concluido = ("" + e.data['ServicoConcluido']).toUpperCase();
            var parametros = [];
            if (e.commandName == "btnParticipante") {
                this.hdnServico.value = "" + codServico;
                this.hdnServicoAtendimento.value = "" + codServicoAtendimento;
                this.btnParticipante.DoClick();
            }
            else if (e.commandName == "btnCheckin") {
                if (codAnimal > 0) {
                    parametros.push("codAnimal=" + codAnimal);
                }
                if (codAtendimento > 0) {
                    parametros.push("codAtendimento=" + codAtendimento);
                }
                if (codProfissional > 0) {
                    parametros.push("codProfissional=" + codProfissional);
                }
                abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroDeCheckin), parametros);
            }
            else if (e.commandName == "btnConcluir") {
                if (concluido == "S") {
                    MostrarAlerta("Serviço já concluído!");
                    return;
                }
                this.ConcluirServico(codServicoAtendimento);
            }
            else if (e.commandName == "btnHistorico") {
                this.HistoricoCompletoAnimal(codAnimal);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgAnim.prototype.ConcluirServico = function (codServico) {
        try {
            if (codServico <= 0) {
                MostrarAlerta("Nenhum serviço selecionado!");
                return;
            }
            MsgBoxJS("Deseja realmente concluir o serviço?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouOpcaoConcluir, this), codServico);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgAnim.prototype.OnSelecionouOpcaoConcluir = function (e) {
        try {
            if (e.Resultado != MsgBoxResult.Yes) {
                return;
            }
            if (String.IsNullOrWhiteSpace(e.Argument)) {
                return;
            }
            var codServico = e.Argument;
            var parametros = {
                codServicoAtendimento: codServico,
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ConcluirServico", parametros);
            if (String.IsNullOrWhiteSpace(retorno)) {
                MostrarMensagem("Serviço concluído com sucesso");
                this.PreencherGrade();
            }
            else {
                MostrarAlerta(retorno);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgAnim.prototype.OnClickBtnNovo = function (s, e) {
        try {
            e.processOnServer = false;
            abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroDeAtendimento), []);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgAnim.prototype.HistoricoCompletoAnimal = function (codAnimal) {
        try {
            if (codAnimal <= 0) {
                MostrarAlerta("Informe o animal");
                return;
            }
            var parametros = {
                codAnimal: codAnimal
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetHistoricoCompleto", parametros);
            if (String.IsNullOrWhiteSpace(retorno)) {
                MostrarAlerta("Este animal não possui histórico");
            }
            else {
                this.txtHistorico.SetText(retorno);
                this.mdHistoricoCompleto.Show();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgAnim.prototype.OnClickHistoricoImprimirMatricial = function (s, e) {
        try {
            e.processOnServer = false;
            if (String.IsNullOrWhiteSpace(this.txtHistorico.GetText())) {
                MostrarAlerta("Não ha nada para imprimir!");
                return;
            }
            this.ImprimirMatricial(ValoresSismoura.NomeTela + "_MatricialHistorico", this.txtHistorico.GetText());
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgAnim.prototype.OnClickHistoricoImprimirWord = function (s, e) {
        try {
            e.processOnServer = false;
            if (String.IsNullOrWhiteSpace(this.txtHistorico.GetText())) {
                MostrarAlerta("Não ha nada para imprimir!");
                return;
            }
            var documento = this.txtHistorico.GetText();
            documento = replaceAll(documento, "\r\n", "<br />");
            documento = replaceAll(documento, "\r", "<br />");
            documento = replaceAll(documento, "\n", "<br />");
            this.ImprimirDocumentoWord({}, documento, "S");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgAnim.prototype.OnClickImprimirTicket = function (s, e) {
        try {
            e.processOnServer = false;
            var atendimentos = [];
            for (var x = 0; x <= this.Grid.DataSource.length - 1; x++) {
                var codigo = this.Grid.DataSource[x]['Atendimento'];
                if (codigo) {
                    atendimentos.push(codigo);
                }
            }
            var parametros = {
                listaAtendimentos: atendimentos
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ImprimirTicket", parametros);
            if (String.IsNullOrWhiteSpace(retorno)) {
                MostrarAlerta("Nenhum atendimento na grade");
            }
            else {
                this.ImprimirMatricial(ValoresSismoura.NomeTela + "_Ticket", retorno);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AgAnim.prototype.OnAntesAbrirProcuraProfissional = function (s, e) {
        e.Cancelar = false;
        this.txtProfissional.AddParametro("EmpProf", "" + this.cboEmpresa.GetValue());
    };
    return C_AgAnim;
}(MouraPageRelacaoAngular));
var c_AgAnim = new C_AgAnim();
//# sourceMappingURL=C_AgAnim.js.map