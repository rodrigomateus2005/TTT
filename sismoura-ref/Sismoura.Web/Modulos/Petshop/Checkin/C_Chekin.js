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
var C_Chekin = /** @class */ (function (_super) {
    __extends(C_Chekin, _super);
    function C_Chekin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Chekin.prototype, "txtCodigo", {
        //get Grid(): MouraGridViewJS {
        //    return window['Grid_Object'];
        //}
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Chekin.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Chekin.prototype, "txtHora", {
        get: function () {
            return window['txtHora_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Chekin.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Chekin.prototype, "txtProfissional", {
        get: function () {
            return window['txtProfissional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Chekin.prototype, "cboSituacao", {
        get: function () {
            return window['cboSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Chekin.prototype, "cboLocal", {
        get: function () {
            return window['cboLocal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Chekin.prototype, "hdnSituacaoPadrao", {
        get: function () {
            return $("#hdnSituacaoPadrao")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Chekin.prototype, "hdnLocalPadrao", {
        get: function () {
            return $("#hdnLocalPadrao")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Chekin.prototype, "mdHistoricoCompleto", {
        get: function () {
            return window['mdHistoricoCompleto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Chekin.prototype, "txtHistorico", {
        get: function () {
            return window['txtHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Chekin.prototype, "cboIndicacao", {
        get: function () {
            return window['cboIndicacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Chekin.prototype, "cboIndicacaoPara", {
        get: function () {
            return window['cboIndicacaoPara_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Chekin.prototype, "txtProfissionalIndicado", {
        get: function () {
            return window['txtProfissionalIndicado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Chekin.prototype, "txtNomeIndicacao", {
        get: function () {
            return window['txtNomeIndicacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Chekin.prototype, "txtTelefoneIndicacao", {
        get: function () {
            return window['txtTelefoneIndicacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Chekin.prototype, "btnHistoricoCompleto", {
        get: function () {
            return window['btnHistoricoCompleto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Chekin.prototype, "btnFinalizar", {
        get: function () {
            return window['btnFinalizar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Chekin.prototype, "btnImprimir", {
        get: function () {
            return window['btnImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Chekin.prototype, "btnHistoricoImprimirMatricial", {
        get: function () {
            return window['btnHistoricoImprimirMatricial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Chekin.prototype, "btnHistoricoVisualizarWord", {
        get: function () {
            return window['btnHistoricoVisualizarWord_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Chekin.prototype, "txtConvenio", {
        get: function () {
            return window['txtConvenio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Chekin.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        //if (this.Grid) {
        //    adicionarEventoMoura(this.Grid.SelecionouLinha, this.SelecionarRegistro, this);
        //}
        if (this.txtData) {
            adicionarEventoMoura(this.txtData.ValueChanged, this.OnTxtDataChanged, this);
        }
        if (this.txtHora && this.txtHora.textBoxHorario) {
            adicionarEventoDevExpress(this.txtHora.textBoxHorario.DateChanged, this.OnTxtHoraChanged, this);
        }
        if (this.cboLocal && this.cboLocal.Combo)
            adicionarEventoDevExpress(this.cboLocal.Combo.SelectedIndexChanged, this.OnCboLocalChange, this);
        if (this.cboIndicacao && this.cboIndicacao.Combo)
            adicionarEventoDevExpress(this.cboIndicacao.Combo.SelectedIndexChanged, this.OnCboIndicacaoChange, this);
        if (this.cboIndicacaoPara && this.cboIndicacaoPara.Combo)
            adicionarEventoDevExpress(this.cboIndicacaoPara.Combo.SelectedIndexChanged, this.OnCboIndicacaoParaChange, this);
        if (this.btnHistoricoCompleto) {
            adicionarEventoMoura(this.btnHistoricoCompleto.Click, this.OnClickBotaoHistoricoCompleto, this);
        }
        if (this.btnFinalizar) {
            adicionarEventoMoura(this.btnFinalizar.Click, this.OnClickBotaoFinalizar, this);
        }
        if (this.btnImprimir) {
            adicionarEventoMoura(this.btnImprimir.Click, this.OnClickImprimir, this);
        }
        if (this.btnHistoricoImprimirMatricial) {
            adicionarEventoMoura(this.btnHistoricoImprimirMatricial.Click, this.OnClickHistoricoImprimirMatricial, this);
        }
        if (this.btnHistoricoVisualizarWord) {
            adicionarEventoMoura(this.btnHistoricoVisualizarWord.Click, this.OnClickHistoricoImprimirWord, this);
        }
        if (this.txtConvenio) {
            adicionarEventoMoura(this.txtConvenio.Procurou, this.OnProcurouConvenio, this);
        }
        this.AtualizarGrid();
    };
    C_Chekin.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            this.cboIndicacao.Visible = false;
            this.cboIndicacao.Obrigatorio = false;
        }
        if (this.GetScope()) {
            this.GetScope().$watch(function ($scope) {
                return $scope.Entity.Data_Checkin;
            }, $.proxy(this.OnMudouData, this));
            this.GetScope().$applyAsync();
        }
        setTimeout($.proxy(function () {
            var mudou = false;
            if (this.ParametrosURL.codAtendimento) {
                this.GetScope().Entity.Atendimento = this.ParametrosURL.codAtendimento.CNum();
                mudou = true;
            }
            if (this.ParametrosURL.codAnimal) {
                this.GetScope().Entity.Animal = this.ParametrosURL.codAnimal.CNum();
                mudou = true;
            }
            if (this.ParametrosURL.codProfissional) {
                this.GetScope().Entity.Profissional = this.ParametrosURL.codProfissional.CNum();
                mudou = true;
            }
            if (this.ParametrosURL.codCheckin) {
                this.txtCodigo.Procurar(this.ParametrosURL.codCheckin);
                mudou = true;
            }
            if (this.ParametrosURL.codConvenio) {
                this.GetScope().Entity.Convenio = this.ParametrosURL.codConvenio.CNum();
                mudou = true;
            }
            if (this.ParametrosURL.local) {
                var parametros = {
                    local: this.ParametrosURL.local
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("GetCodigoLocal", parametros);
                if (retorno > 0) {
                    this.GetScope().Entity.Local = retorno;
                    mudou = true;
                }
            }
            if (mudou) {
                this.GetScope().$applyAsync();
            }
            this.LimparParametrosURL();
        }, this), 200);
    };
    C_Chekin.prototype.OnMudouData = function () {
        if (typeof this.GetScope().Entity.Data_Checkin == "string") {
            this.GetScope().Entity.Data_Checkin = this.GetScope().Entity.Data_Checkin.toString().ToDate();
        }
        this.txtHora.textBoxHorario.SetDate(this.GetScope().Entity.Data_Checkin);
        this.txtData.Date = this.GetScope().Entity.Data_Checkin;
    };
    C_Chekin.prototype.AlterarEntidadeData = function () {
        var hora = this.txtHora.textBoxHorario.GetDate();
        var data = this.txtData.Date;
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
        this.GetScope().Entity.Data_Checkin = dataEntidade;
        this.GetScope().$applyAsync();
    };
    C_Chekin.prototype.OnTxtDataChanged = function () {
        this.AlterarEntidadeData();
    };
    C_Chekin.prototype.OnTxtHoraChanged = function () {
        this.AlterarEntidadeData();
    };
    C_Chekin.prototype.OnCboLocalChange = function (s, e) {
        try {
            if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
                if (this.cboLocal.GetValue() == "1") {
                    this.CancelaValidacaoIndicacao();
                }
                else {
                    this.cboIndicacao.Visible = true;
                    this.cboIndicacao.LimparSelecao();
                    this.AlteraVisibleIndicacao("N");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Chekin.prototype.OnCboIndicacaoChange = function (s, e) {
        try {
            this.AlteraVisibleIndicacao(this.cboIndicacao.GetValue());
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Chekin.prototype.OnCboIndicacaoParaChange = function (s, e) {
        try {
            var selecionado = this.cboIndicacaoPara.GetValue();
            if (selecionado == "P") {
                this.txtProfissionalIndicado.Visible = true;
                this.txtProfissionalIndicado.Obrigatorio = true;
                setTimeout($.proxy(function () {
                    this.txtProfissionalIndicado.Focus();
                }, this), 100);
            }
            else {
                this.txtProfissionalIndicado.Limpar();
                this.txtProfissionalIndicado.Visible = false;
                this.txtProfissionalIndicado.Obrigatorio = false;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Chekin.prototype.AlteraVisibleIndicacao = function (opcao) {
        try {
            var entity = this.GetScope().Entity;
            if (opcao == "S") {
                this.cboIndicacaoPara.Visible = true;
                this.cboIndicacaoPara.Obrigatorio = true;
                this.txtNomeIndicacao.Visible = true;
                this.txtNomeIndicacao.Obrigatorio = true;
                this.txtTelefoneIndicacao.Visible = true;
                if (entity.Codigo > 0) {
                    this.txtNomeIndicacao.SetText(entity.Nome_Indicacao);
                    if (!entity.DDD_Indicacao && !String.IsNullOrWhiteSpace(entity.DDD_Indicacao))
                        this.txtTelefoneIndicacao.TextBoxDDD.value = entity.DDD_Indicacao;
                    if (!entity.Fone_Numero_Indicacao && !String.IsNullOrWhiteSpace(entity.Fone_Numero_Indicacao))
                        this.txtTelefoneIndicacao.TextBoxTelefone.value = entity.Fone_Numero_Indicacao;
                }
            }
            else {
                this.cboIndicacaoPara.Visible = false;
                this.cboIndicacaoPara.Obrigatorio = false;
                this.cboIndicacaoPara.LimparSelecao();
                this.txtProfissionalIndicado.Visible = false;
                this.txtProfissionalIndicado.Obrigatorio = false;
                this.txtNomeIndicacao.Visible = false;
                this.txtNomeIndicacao.Obrigatorio = false;
                this.txtNomeIndicacao.Limpar();
                this.txtTelefoneIndicacao.Visible = false;
                this.txtTelefoneIndicacao.TextBoxDDD.value = "";
                this.txtTelefoneIndicacao.TextBoxTelefone.value = "";
                if (entity) {
                    entity.Nome_Indicacao = "";
                    entity.DDD_Indicacao = "";
                    entity.Fone_Numero_Indicacao = "";
                    entity.Indicacao_Para = "";
                }
            }
            this.GetScope().$applyAsync();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Chekin.prototype.OnGravouSucesso = function (s, e) {
        this.AtualizarGrid();
        this.ClicarNovo();
    };
    C_Chekin.prototype.OnExcluiuSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_Chekin.prototype.AtualizarGrid = function () {
        //try {
        //    var parametros: any = {}
        //    var retorno = this.ExecutarFuncaoServerSideSynch("AtualizarGrade", parametros);
        //    this.Grid.PreencherGrid(retorno);
        //} catch (ex) {
        //    LogarException(ex);
        //}
    };
    C_Chekin.prototype.SelecionarRegistro = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
    };
    C_Chekin.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entity = this.GetScope().Entity;
        if (entity) {
            if (entity.Data_Fim != undefined && entity.Data_Fim != null) {
                MostrarAlerta("Não é possivel alterar um check-in finalizado");
                return false;
            }
        }
        return true;
    };
    C_Chekin.prototype.OnAntesBuscarExistente = function () {
        _super.prototype.OnAntesBuscarExistente.call(this);
        this.txtPet.TextBoxProprietario.Limpar();
        this.txtPet.TextBoxAnimal.Limpar();
    };
    C_Chekin.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        var animal = 0;
        if (Entity.Animal) {
            animal = Entity.Animal;
        }
        this.txtPet.TextBoxProprietario.Limpar();
        Entity.Animal = animal;
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            if (Entity.Local == 1) {
                this.CancelaValidacaoIndicacao();
                return;
            }
        }
        this.cboIndicacao.Visible = true;
        if (!String.IsNullOrWhiteSpace(Entity.Nome_Indicacao)) {
            this.cboIndicacao.SetValue("S");
            this.AlteraVisibleIndicacao("S");
            if (Entity.Profissional_Indicado > 0) {
                this.cboIndicacaoPara.SetValue("P");
                this.txtProfissionalIndicado.Visible = true;
            }
        }
        else {
            this.cboIndicacao.SetValue("N");
            this.AlteraVisibleIndicacao("N");
        }
    };
    C_Chekin.prototype.CancelaValidacaoIndicacao = function () {
        this.cboIndicacao.SetValue("N");
        this.txtNomeIndicacao.Visible = true;
        this.txtNomeIndicacao.Obrigatorio = false;
        this.txtTelefoneIndicacao.Visible = true;
        this.cboIndicacao.Visible = false;
        this.cboIndicacaoPara.LimparSelecao();
        this.cboIndicacaoPara.Visible = false;
        this.cboIndicacaoPara.Obrigatorio = false;
        this.txtProfissionalIndicado.Limpar();
        this.txtProfissionalIndicado.Visible = false;
        this.txtProfissionalIndicado.Obrigatorio = false;
        this.txtProfissional.Obrigatorio = false;
    };
    C_Chekin.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        Entity.Data_Checkin = new Date();
        setTimeout($.proxy(function () {
            this.SetValoresPadroes();
        }, this), 100);
        this.txtPet.TextBoxProprietario.Limpar();
        this.cboIndicacao.LimparSelecao();
        this.cboIndicacaoPara.LimparSelecao();
        this.AlteraVisibleIndicacao("N");
    };
    C_Chekin.prototype.SetValoresPadroes = function () {
        if (!this.GetScope()) {
            return;
        }
        var Entity = this.GetScope().Entity;
        if (!Entity) {
            return;
        }
        //Verifica se o sistema está preenchendo o checkin de alguma outra tela pelo codigo
        if (Entity.Codigo && Entity.Codigo > 0) {
            return;
        }
        if (!String.IsNullOrWhiteSpace(this.hdnLocalPadrao.value)) {
            Entity.Local = this.hdnLocalPadrao.value.CNum();
            this.cboLocal.SetValue(Entity.Local);
        }
        else {
            Entity.Local = null;
            this.cboLocal.LimparSelecao();
        }
        if (!String.IsNullOrWhiteSpace(this.hdnSituacaoPadrao.value)) {
            Entity.Situacao = this.hdnSituacaoPadrao.value.CNum();
            this.cboSituacao.SetValue(Entity.Situacao);
        }
        else {
            Entity.Situacao = null;
            this.cboSituacao.LimparSelecao();
        }
        this.GetScope().$applyAsync();
    };
    C_Chekin.prototype.OnClickBotaoHistoricoCompleto = function (s, e) {
        e.processOnServer = false;
        this.HistoricoCompletoAnimal();
    };
    C_Chekin.prototype.HistoricoCompletoAnimal = function () {
        try {
            if (this.txtPet.TextBoxAnimal.GetText().CNum() <= 0) {
                MostrarAlerta("Informe o animal");
                return;
            }
            var parametros = {
                codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum()
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
    C_Chekin.prototype.OnClickBotaoFinalizar = function (s, e) {
        e.processOnServer = false;
        if (this.txtPet.TextBoxProprietario.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o código do check-in!");
            return;
        }
        this.FinalizarCheckin(this.txtCodigo.GetText().CNum(), this.txtPet.TextBoxProprietario.GetText().CNum());
    };
    C_Chekin.prototype.FinalizarCheckin = function (codCheckIn, codCliente) {
        try {
            var aux = codCheckIn + '|' + codCliente;
            MsgBoxJS("Deseja realmente finalizar este check-in?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouOpcaoFinalizar, this), aux);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Chekin.prototype.OnSelecionouOpcaoFinalizar = function (e) {
        try {
            if (e.Resultado != MsgBoxResult.Yes) {
                return;
            }
            if (String.IsNullOrWhiteSpace(e.Argument)) {
                return;
            }
            var codCheckIn = ("" + e.Argument).split("|")[0].CNum();
            var codCliente = ("" + e.Argument).split("|")[1].CNum();
            var parametros = {
                codCheckIn: codCheckIn,
                codCliente: codCliente,
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("FinalizarCheckin", parametros);
            if (!retorno) {
                return;
            }
            if (retorno.Sucesso) {
                if (!String.IsNullOrWhiteSpace(retorno.Mensagem)) {
                    MostrarMensagem(retorno.Mensagem);
                }
                this.PreencherEntidade(this.txtCodigo.GetText());
            }
            else {
                if (!String.IsNullOrWhiteSpace(retorno.MensagemErro)) {
                    MostrarAlerta(retorno.MensagemErro);
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Chekin.prototype.OnClickImprimir = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.txtCodigo.GetText().CNum() <= 0) {
                MostrarAlerta("Informe um check-in");
                return;
            }
            var parametros;
            parametros = {
                codCheckin: this.txtCodigo.GetText().CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ImprimirCheckin", parametros);
            if (String.IsNullOrWhiteSpace(retorno)) {
                MostrarAlerta("Check-in não encontrado");
                return;
            }
            this.ImprimirMatricial(ValoresSismoura.NomeTela + "_CheckIn", retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Chekin.prototype.OnClickHistoricoImprimirMatricial = function (s, e) {
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
    C_Chekin.prototype.OnProcurouConvenio = function (s, e) {
        if (this.txtPet.TextBoxAnimal.GetText().CNum() <= 0) {
            return;
        }
        this.VerificarElegibilidadePlano(this.txtPet.TextBoxAnimal.GetText().CNum());
    };
    C_Chekin.prototype.VerificarElegibilidadePlano = function (codAnimal) {
        try {
            if (!this.IsConvenioProprio(this.txtConvenio.GetText().CNum()) || !codAnimal) {
                return;
            }
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificaElegibilidadePlano", { codAnimal: codAnimal });
            if (!String.IsNullOrWhiteSpace(retorno.Alerta)) {
                MostrarAlerta(retorno.Alerta);
                this.txtConvenio.Focus();
                this.txtConvenio.Limpar();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Chekin.prototype.IsConvenioProprio = function (codConvenio) {
        try {
            if (!codConvenio) {
                return false;
            }
            return this.ExecutarFuncaoServerSideSynch("IsConvenioProprio", { codConvenio: codConvenio });
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Chekin.prototype.OnClickHistoricoImprimirWord = function (s, e) {
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
    return C_Chekin;
}(MouraPageCadastroAngular));
var c_Chekin = new C_Chekin();
//# sourceMappingURL=C_Chekin.js.map