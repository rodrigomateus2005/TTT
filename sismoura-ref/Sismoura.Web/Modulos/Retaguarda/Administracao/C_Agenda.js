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
var C_Agenda = /** @class */ (function (_super) {
    __extends(C_Agenda, _super);
    function C_Agenda() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nomeExistente = false;
        _this.codigosUsuario = [];
        return _this;
    }
    Object.defineProperty(C_Agenda.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Agenda.prototype, "gridTelFone", {
        get: function () {
            return window["gridTelFone_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Agenda.prototype, "txtData", {
        get: function () {
            return window["txtData_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Agenda.prototype, "cboTipoAgenda", {
        get: function () {
            return window["cboTipoAgenda_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Agenda.prototype, "lstUsuario", {
        get: function () {
            return window["lstUsuario_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Agenda.prototype, "txtCompromisso", {
        get: function () {
            return window["txtCompromisso_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Agenda.prototype, "txtHora", {
        get: function () {
            return window["txtHora_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Agenda.prototype, "txtUsuarioAgTel", {
        get: function () {
            return window["txtUsuarioAgTel_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Agenda.prototype, "txtNome", {
        get: function () {
            return window["txtNome_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Agenda.prototype, "txtTelefone", {
        get: function () {
            return window["txtTelefone_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Agenda.prototype, "btnAdicionar", {
        get: function () {
            return window["btnAdicionar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Agenda.prototype, "Agendas", {
        get: function () {
            if (!this.GetScope()["Agendas"]) {
                return [];
            }
            else {
                return this.GetScope()["Agendas"];
            }
        },
        set: function (value) {
            this.GetScope()["Agendas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Agenda.prototype, "Agenda", {
        get: function () {
            if (!this.GetScope()["Agenda"]) {
                return null;
            }
            else {
                return this.GetScope()["Agenda"];
            }
        },
        set: function (value) {
            this.GetScope()["Agenda"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Agenda.prototype, "AgendaTelefones", {
        get: function () {
            if (!this.GetScope()["AgendaTelefones"]) {
                return [];
            }
            else {
                return this.GetScope()["AgendaTelefones"];
            }
        },
        set: function (value) {
            this.GetScope()["AgendaTelefones"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Agenda.prototype, "AgendaTelefone", {
        get: function () {
            if (!this.GetScope()["AgendaTelefone"]) {
                return null;
            }
            else {
                return this.GetScope()["AgendaTelefone"];
            }
        },
        set: function (value) {
            this.GetScope()["AgendaTelefone"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Agenda.prototype, "AgendasUsuario", {
        get: function () {
            if (!this.GetScope()["AgendasUsuario"]) {
                return [];
            }
            else {
                return this.GetScope()["AgendasUsuario"];
            }
        },
        set: function (value) {
            this.GetScope()["AgendasUsuario"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Agenda.prototype, "AgendaUsuario", {
        get: function () {
            if (!this.GetScope()["AgendaUsuario"]) {
                return null;
            }
            else {
                return this.GetScope()["AgendaUsuario"];
            }
        },
        set: function (value) {
            this.GetScope()["AgendaUsuario"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Agenda.prototype, "AgendaCompromissos", {
        get: function () {
            if (!this.GetScope()["AgendaCompromissos"]) {
                return [];
            }
            else {
                return this.GetScope()["AgendaCompromissos"];
            }
        },
        set: function (value) {
            this.GetScope()["AgendaCompromissos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Agenda.prototype, "AgendaCompromisso", {
        get: function () {
            if (!this.GetScope()["AgendaCompromisso"]) {
                return null;
            }
            else {
                return this.GetScope()["AgendaCompromisso"];
            }
        },
        set: function (value) {
            this.GetScope()["AgendaCompromisso"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Agenda.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Agenda.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Agenda.prototype, "btnNovo", {
        get: function () {
            return window['btnNovo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Agenda.prototype, "mdCompromisso", {
        get: function () {
            return window['mdCompromisso_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Agenda.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        this.nomeExistente = false;
        this.btnAdicionar.Visible = false;
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnGridSelecionouItem, this);
            adicionarEventoMoura(this.grid.ExcluiuLinhaGrade, this.OnGrdExcluiuLinha, this);
            adicionarEventoMoura(this.grid.EditouItemGrade, this.OnGrdConsultasClickBotaoLinha, this);
        }
        if (this.gridTelFone) {
            adicionarEventoMoura(this.gridTelFone.SelecionouLinha, this.OnGridSelecionouItem, this);
            adicionarEventoMoura(this.gridTelFone.ExcluiuLinhaGrade, this.OnGrdExcluiuLinha, this);
            adicionarEventoMoura(this.gridTelFone.EditouItemGrade, this.OnGrdConsultasClickBotaoLinhaTelefone, this);
        }
        if (this.txtData) {
            adicionarEventoMoura(this.txtData.ValueChanged, this.MudouData, this);
        }
        if (this.cboTipoAgenda) {
            adicionarEventoMoura(this.cboTipoAgenda.SelectedItemChanged, this.MudouTipoAgenda, this);
        }
        if (this.btnNovo) {
            adicionarEventoMoura(this.btnNovo.Click, this.OnClickBtnNovo, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickBtnGravar, this);
        }
        //if (this.btnLimpar) {
        //    adicionarEventoDevExpress(this.btnLimpar.Botao.Click, this.OnClickBtnLimpar, this);
        //}
        var parametros = {};
        var retornoUsuarios = this.ExecutarFuncaoServerSideSynch("GetUsuarios", parametros);
        this.PreencherUsuarios(retornoUsuarios);
    };
    C_Agenda.prototype.OnGrdExcluiuLinha = function (s, e) {
        if (ValoresSismoura.UsuarioLogado == 0) {
            MostrarAlerta("Você está logado no sistema com o usuário Moura, não é permitido gravar um compromisso pois o mesmo não é cadastrado no sistema!");
            this.GerarGrade();
            return false;
        }
        var hora = e.item.Hora_Agenda;
        var codigoAgenda = e.item.Codigo_Agenda;
        var codigoAgendaTelefone = e.item.Codigo_Agenda_Telefone;
        var codigoAgendaUsuario = e.item.Codigo_Agenda_Usuario;
        e.item = {};
        e.item.Hora_Agenda = hora;
        this.Agendas[e.index] = e.item;
        e.item.Lida = false;
        e.item.Codigo_Agenda = 0;
        this.Deletar(codigoAgenda, codigoAgendaTelefone, codigoAgendaUsuario);
        this.grid.Refresh();
        return true;
    };
    C_Agenda.prototype.OnGrdConsultasClickBotaoLinha = function (s, e) {
        var agenda = this.Agendas[e.index];
        if (agenda.Compromisso) {
            agenda.Lida = true;
            agenda.Alterou = true;
        }
        else {
            MostrarAlerta("Não é possível marcar um horário como lido sem ter comprimisso");
            agenda.Lida = false;
            e.item.Lida = false;
            this.grid.Refresh();
        }
    };
    C_Agenda.prototype.OnClickBotaoFecharPagamento = function () {
        this.mdCompromisso.Hide();
        this.txtCompromisso.Limpar();
        this.txtHora.Limpar();
    };
    C_Agenda.prototype.OnGrdConsultasClickBotaoLinhaTelefone = function (s, e) {
        var agenda = this.Agendas[e.index];
        if (agenda.Compromisso) {
            agenda.Lida = true;
        }
        else {
            MostrarAlerta("Não é possível marcar um horário como lido sem ter comprimisso");
            agenda.Lida = false;
            e.item.Lida = false;
            this.gridTelFone.Refresh();
        }
    };
    C_Agenda.prototype.MudouData = function () {
        this.GerarGrade();
    };
    C_Agenda.prototype.OnClickIncluirAgenda = function (s, e) {
        var _this = this;
        if (this.cboTipoAgenda.GetValue() == "888888") {
            var retorno = this.ValidarCampos();
            if (!retorno) {
                //e.cancelar = true;
                return false;
            }
            var agenda = this.Agendas.find(function (item) { return item.Nome == _this.Agenda.Nome; });
            if (!this.nomeExistente) {
                if (agenda) {
                    if (agenda.Codigo_Agenda_Telefone > 0) {
                        MsgBoxJS("Este Nome já existe, deseja utilizalo?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnNomeExistente, this));
                        if (!this.nomeExistente) {
                            //e.cancelar = true;
                            return false;
                        }
                    }
                }
            }
            if (!this.Agenda.Codigo_Agenda_Telefone) {
                this.Agenda.Alterou = true;
                this.Agendas.push(this.Agenda);
            }
            else {
                var index = this.Agendas.indexOf(agenda);
                agenda.Alterou = true;
                this.Agendas[index] = agenda;
            }
            this.gridTelFone.PreencherGrid(this.Agendas);
            this.txtNome.Limpar();
            this.txtTelefone.Limpar();
            this.txtUsuarioAgTel.Limpar();
        }
        else {
            if (this.cboTipoAgenda.GetValue() == "999999" || this.lstUsuario.GetValues().length == 0
                || (this.lstUsuario.GetValues().length == 1 && this.lstUsuario.GetValues()[0] == this.cboTipoAgenda.GetValue())) {
                var retorno = this.ValidarCampos();
                if (!retorno) {
                    //e.cancelar = true;
                    return false;
                }
                var agenda = this.Agendas.find(function (item) { return item.Hora_Agenda == _this.Agenda.Hora_Agenda; });
                var index = this.Agendas.indexOf(agenda);
                this.Agenda.Abreviacao = ValoresSismoura.UsuarioLogadoAbreviacao;
                this.Agendas[index].Hora_Agenda = agenda.Hora_Agenda;
                this.Agendas[index].Compromisso = this.txtCompromisso.GetText();
                this.Agendas[index].Usuario = this.cboTipoAgenda.GetValue().CNum();
                this.Agendas[index].Alterou = true;
                this.grid.PreencherGrid(this.Agendas);
                this.OnClickBotaoFechar();
                this.txtCompromisso.Limpar();
                this.lstUsuario.LimparSelecao();
                this.OcultarCampos();
            }
            else {
                var agenda = this.Agendas.find(function (item) { return item.Hora_Agenda == _this.Agenda.Hora_Agenda; });
                if (this.lstUsuario.GetValues().length > 0) {
                    var usuarios = this.lstUsuario.GetValues();
                    for (var i = 0; i < this.lstUsuario.GetValues().length; i++) {
                        var agendaNova = {};
                        //this.Agenda = agenda;
                        agendaNova.Codigo_Agenda = agenda.Codigo_Agenda;
                        agendaNova.Hora_Agenda = agenda.Hora_Agenda;
                        agendaNova.Data = this.txtData.Date;
                        agendaNova.Usuario = this.lstUsuario.GetValues()[i].CNum();
                        agendaNova.Compromisso = this.txtCompromisso.GetText();
                        agendaNova.Alterou = true;
                        this.Agendas.push(agendaNova);
                        this.OnClickBotaoFechar();
                        this.OcultarCampos();
                    }
                    agenda.Comprimisso = "";
                    agenda.Usuario = "";
                }
                this.OnClickBotaoFechar();
                this.txtCompromisso.Limpar();
                this.lstUsuario.LimparSelecao();
            }
        }
    };
    //private nomeExistente: boolean = false;
    C_Agenda.prototype.OnNomeExistente = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.nomeExistente = true;
            this.OnClickIncluirAgenda(this.Agenda, null);
        }
        return false;
    };
    C_Agenda.prototype.OnGridSelecionouItem = function (s, e) {
        var _this = this;
        abrirEspera();
        setTimeout(function () {
            try {
                _this.AbrirModalInf(e.data.Codigo_Agenda_Telefone, e.rowKey);
                fecharEspera();
            }
            catch (ex) {
                fecharEspera();
                LogarException(ex);
            }
        }, 200);
        return true;
    };
    C_Agenda.prototype.AbrirModalInf = function (codigoAgendaTelefone, rowKey) {
        if (ValoresSismoura.UsuarioLogado == 0) {
            MostrarAlerta("Você está logado no sistema com o usuário Moura, não é permitido gravar um compromisso pois o mesmo não é cadastrado no sistema!");
            fecharEspera();
            return false;
        }
        if (this.cboTipoAgenda.GetValue() == "888888") {
            this.VisibilidadeCampos();
            var agenda = this.Agendas.find(function (item) { return item.Codigo_Agenda_Telefone == codigoAgendaTelefone; });
            agenda.Usuario = this.cboTipoAgenda.GetValue();
            this.Agenda = agenda;
            this.txtNome.SetText(agenda.Nome);
            this.txtUsuarioAgTel.Procurar(agenda.Codigo_Agenda_Telefone);
            this.txtTelefone.SetText(agenda.Telefone);
            this.cboTipoAgenda.SetValue(agenda.Usuario);
        }
        else {
            var agenda = this.Agendas.find(function (item) { return item.Contador == rowKey; });
            this.Agenda = agenda;
            if (agenda.Codigo_Agenda > 0 && agenda.Abreviacao != ValoresSismoura.UsuarioLogadoAbreviacao) {
                MsgBoxJS("Deseja alterar o horario do compromisso?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnAlterarCompromisso, this));
            }
            if ((this.cboTipoAgenda.GetValue() == "999999"
                || this.lstUsuario.GetValues().length == 0
                || (this.lstUsuario.GetValues().length == 1 && this.lstUsuario.GetValues[0] == this.cboTipoAgenda.GetValue())) && this.cboTipoAgenda.GetValue() != "888888") {
                this.VisibilidadeCampos();
                this.Agenda = agenda;
                agenda.Usuario = this.cboTipoAgenda.GetValue();
                this.txtHora.SetText(agenda.Hora_Agenda);
                if (agenda.Compromisso) {
                    this.txtCompromisso.SetText(agenda.Compromisso);
                }
                if (this.lstUsuario && agenda.Codigo_Agenda > 0) {
                    var selecionar = [];
                    selecionar.push("" + agenda.Usuario.CNum());
                    this.lstUsuario.LimparSelecao();
                    this.lstUsuario.SetValues(selecionar);
                }
                this.Agenda.Codigo_Agenda = agenda.Codigo_Agenda;
                /*if (this.Agenda.Codigo_Agenda == 0) {
                    this.txtCompromisso.Limpar();
                }*/
                this.Agenda.Data = this.txtData.Date;
                this.Agenda.Usuario = this.cboTipoAgenda.GetValue();
            }
            else {
                this.VisibilidadeCampos();
                if (this.lstUsuario.GetValues.length > 0) {
                    for (var i = 0; i < this.lstUsuario.GetValues().length; i++) {
                        this.Agenda.Usuario = this.lstUsuario.GetValues[i];
                        if (this.lstUsuario) {
                            var selecionar = [];
                            selecionar.push("" + this.Agenda.Usuario);
                            this.lstUsuario.LimparSelecao();
                            this.lstUsuario.SetValues(selecionar);
                        }
                        this.Agenda = {};
                        this.Agenda = agenda;
                        this.txtHora.SetText(agenda.Hora_Agenda);
                        if (agenda.Compromisso) {
                            this.txtCompromisso.SetText(agenda.Compromisso);
                        }
                        else {
                            this.txtCompromisso.SetText("");
                        }
                        this.Agenda.Codigo_Agenda = agenda.Codigo_Agenda;
                        this.Agenda.Data = this.txtData.Date;
                        this.Agendas.push(this.Agenda);
                    }
                }
            }
            this.mdCompromisso.Show();
        }
    };
    C_Agenda.prototype.OnAlterarCompromisso = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.VisibilidadeCampos();
        }
    };
    C_Agenda.prototype.OcultarCampos = function () {
        this.txtHora.Visible = false;
        this.txtCompromisso.Visible = false;
        this.lstUsuario.Visible = false;
        this.txtUsuarioAgTel.Visible = false;
        this.txtNome.Visible = false;
        this.txtTelefone.Visible = false;
        this.btnAdicionar.Visible = false;
    };
    C_Agenda.prototype.VisibilidadeCampos = function () {
        if (this.cboTipoAgenda.GetValue() == "888888") {
            this.grid.Visible = false;
            this.gridTelFone.Visible = true;
            this.txtHora.Visible = false;
            this.txtCompromisso.Visible = false;
            this.lstUsuario.Visible = false;
            this.txtUsuarioAgTel.Visible = true;
            this.txtNome.Visible = true;
            this.txtTelefone.Visible = true;
            this.txtData.Visible = false;
            this.btnAdicionar.Visible = true;
        }
        else if (this.cboTipoAgenda.GetValue() == "999999") {
            this.grid.Visible = true;
            this.gridTelFone.Visible = false;
            this.txtHora.Visible = true;
            this.txtCompromisso.Visible = true;
            this.lstUsuario.Visible = false;
            this.txtUsuarioAgTel.Visible = false;
            this.txtNome.Visible = false;
            this.txtTelefone.Visible = false;
            this.txtData.Visible = true;
            this.btnAdicionar.Visible = false;
        }
        else {
            this.grid.Visible = true;
            this.gridTelFone.Visible = false;
            this.txtHora.Visible = true;
            this.txtCompromisso.Visible = true;
            this.lstUsuario.Visible = true;
            this.txtUsuarioAgTel.Visible = false;
            this.txtNome.Visible = false;
            this.txtTelefone.Visible = false;
            this.txtData.Visible = true;
            this.btnAdicionar.Visible = false;
        }
    };
    C_Agenda.prototype.OcultarVisibilidadeTelefone = function () {
        this.gridTelFone.Visible = false;
        this.txtUsuarioAgTel.Visible = false;
        this.txtNome.Visible = false;
        this.txtTelefone.Visible = false;
        this.btnAdicionar.Visible = false;
    };
    C_Agenda.prototype.MudouTipoAgenda = function () {
        if (this.cboTipoAgenda.GetValue() == "888888") {
            this.txtData.Visible = true;
            //if (this.txtHora.Visible == true) {
            this.VisibilidadeCampos();
            //}
            this.GerarGrade();
        }
        else if (this.cboTipoAgenda.GetValue() == "999999") {
            if (this.txtHora.Visible == true) {
                this.VisibilidadeCampos();
                this.OcultarVisibilidadeTelefone();
            }
            this.GerarGrade();
        }
        else {
            if (this.txtHora.Visible == true) {
                this.VisibilidadeCampos();
                this.OcultarVisibilidadeTelefone();
            }
            this.GerarGrade();
        }
    };
    C_Agenda.prototype.LimparCampos = function () {
        try {
            this.txtData.Date = new Date();
            this.txtCompromisso.Limpar();
            this.txtHora.Limpar();
            this.cboTipoAgenda.LimparSelecao();
            this.cboTipoAgenda.SetSelectedIndex(0);
            this.lstUsuario.LimparSelecao();
            this.lstUsuario.Visible = false;
            this.txtHora.Visible = false;
            this.txtCompromisso.Visible = false;
            this.gridTelFone.Visible = false;
            this.txtNome.Visible = false;
            this.txtUsuarioAgTel.Visible = false;
            this.txtTelefone.Visible = false;
            this.nomeExistente = false;
            this.GerarGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Agenda.prototype.GerarGrade = function () {
        try {
            debugger;
            if (this.cboTipoAgenda.GetValue() != "888888") {
                if (!this.txtData.Date) {
                    MostrarAlerta("Informe a Data");
                    return false;
                }
            }
            if (this.cboTipoAgenda.GetValue().CNum() <= -1) {
                MostrarAlerta("Informe o Tipo de Agenda");
                return false;
            }
            var parametros = {
                data: this.txtData.Date,
                codUsuario: this.cboTipoAgenda.GetValue().CNum(),
            };
            this.ExecutarFuncaoServerSideAsynch("RelacaoAgenda", parametros, this.OnGerougrade, this.OnErrorGerarGrade, this);
            abrirEspera("");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Agenda.prototype.OnGerougrade = function (d) {
        try {
            fecharEspera();
            var retorno = GetRetornoAJAX(d);
            if (this.cboTipoAgenda.GetValue() == "888888") {
                this.Agendas = retorno.Agenda_Telefone;
                this.gridTelFone.PreencherGrid(retorno.Agenda_Telefone);
                this.gridTelFone.GroupBy("Letra_Agenda");
                this.gridTelFone.Visible = true;
                this.grid.Visible = false;
            }
            else {
                this.Agendas = retorno.Agenda;
                this.grid.PreencherGrid(retorno.Agenda);
                this.gridTelFone.Visible = false;
                this.grid.Visible = true;
            }
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    C_Agenda.prototype.OnErrorGerarGrade = function (erro) {
        try {
            fecharEspera();
            LogarException(erro);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Agenda.prototype.OnClickBtnLimpar = function (s, e) {
        this.LimparCampos();
        this.Agendas = [];
        this.RefreshAngular();
    };
    C_Agenda.prototype.OnClickBtnNovo = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
        this.Agendas = [];
        this.RefreshAngular();
    };
    C_Agenda.prototype.OnClickBtnGravar = function (s, e) {
        e.processOnServer = false;
        var retorno = this.ValidarCampos();
        if (retorno == true) {
            this.Gravar();
        }
    };
    C_Agenda.prototype.ConverterAgendaTelefone = function () {
        this.AgendaTelefones = [];
        var agendaAltera = this.Agendas.filter(function (f) { return f.Alterou == true; });
        for (var i = 0; i < agendaAltera.length; i++) {
            this.AgendaTelefone = {};
            this.AgendaTelefone.Codigo = agendaAltera[i].Codigo_Agenda_Telefone;
            this.AgendaTelefone.Nome = agendaAltera[i].Nome;
            this.AgendaTelefone.Telefone = agendaAltera[i].Telefone;
            this.AgendaTelefones.push(this.AgendaTelefone);
        }
    };
    C_Agenda.prototype.ConverterAgenda = function () {
        debugger;
        this.AgendaCompromissos = [];
        this.AgendaCompromisso = {};
        this.AgendasUsuario = [];
        this.AgendaUsuario = {};
        var agendaAltera = this.Agendas.filter(function (f) { return f.Alterou == true; });
        for (var i = 0; i < agendaAltera.length; i++) {
            // if (this.Agendas[i].Alterou) {
            this.AgendaCompromisso = {};
            this.AgendaUsuario = {};
            this.AgendaCompromisso.Compromisso = agendaAltera[i].Compromisso;
            this.AgendaCompromisso.Codigo = agendaAltera[i].Codigo_Agenda;
            this.AgendaCompromisso.Data = this.txtData.Date.FormataData().ToDate();
            this.AgendaCompromisso.Abreviacao = agendaAltera[i].Abreviacao;
            this.AgendaCompromisso.Lida = agendaAltera[i].Lida == true ? "X" : "N";
            this.AgendaCompromissos.push(this.AgendaCompromisso);
            if (this.cboTipoAgenda.GetValue() == "999999") {
                this.AgendaUsuario.Usuario = this.cboTipoAgenda.GetValue();
                this.AgendaUsuario.Codigo = agendaAltera[i].Codigo_Agenda_Usuario;
                this.AgendaUsuario.Responsavel = ValoresSismoura.UsuarioLogado;
                this.AgendaUsuario.Hora = agendaAltera[i].Hora_Agenda;
                this.AgendasUsuario.push(this.AgendaUsuario);
            }
            else {
                this.AgendaUsuario.Usuario = agendaAltera[i].Usuario;
                this.AgendaUsuario.Codigo = agendaAltera[i].Codigo_Agenda_Usuario;
                this.AgendaUsuario.Responsavel = ValoresSismoura.UsuarioLogado;
                this.AgendaUsuario.Hora = agendaAltera[i].Hora_Agenda;
                this.AgendasUsuario.push(this.AgendaUsuario);
                /*if (this.lstUsuario.GetValues().length > 0) {
                    for (var x = 0; x < this.lstUsuario.GetValues().length; x++) {
                        this.AgendaUsuario = <any>{};
                        this.AgendaUsuario.Usuario = this.lstUsuario.GetValues()[x].CNum();
                        this.AgendaUsuario.Codigo = agendaAltera[i].Codigo_Agenda_Usuario;
                        this.AgendaUsuario.Responsavel = ValoresSismoura.UsuarioLogado;
                        this.AgendaUsuario.Hora = agendaAltera[i].Hora_Agenda;
                        this.AgendasUsuario.push(this.AgendaUsuario);
                    }
                } else {
                    this.AgendaUsuario.Usuario = this.cboTipoAgenda.GetValue();
                    this.AgendaUsuario.Codigo = agendaAltera[i].Codigo_Agenda_Usuario;
                    this.AgendaUsuario.Responsavel = ValoresSismoura.UsuarioLogado;
                    this.AgendaUsuario.Hora = agendaAltera[i].Hora_Agenda;
                    this.AgendasUsuario.push(this.AgendaUsuario);
                }*/
                //}
            }
        }
    };
    C_Agenda.prototype.Gravar = function () {
        try {
            if (this.cboTipoAgenda.GetValue() == "888888") {
                this.ConverterAgendaTelefone();
            }
            else {
                this.ConverterAgenda();
            }
            var parametros = {
                agendaTelefones: this.AgendaTelefones,
                agendasUsuario: this.AgendasUsuario,
                agendaComprimissos: this.AgendaCompromissos,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("Gravar", parametros);
            this.txtCompromisso.Limpar();
            this.lstUsuario.LimparSelecao();
            (retorno == "Sucesso") ? MostrarMensagem("Registro gravado com sucesso!") : MostrarAlerta("Erro ao gravar o registro!");
            this.GerarGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Agenda.prototype.Deletar = function (codAgenda, codAgTel, codAgUsuario) {
        try {
            var parametros = {
                codAgTel: codAgTel == undefined ? 0 : codAgTel,
                codAgUsuario: codAgUsuario == undefined ? 0 : codAgUsuario,
                codAg: codAgenda == undefined ? 0 : codAgenda,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("Deletar", parametros);
            this.txtCompromisso.Limpar();
            this.lstUsuario.LimparSelecao();
            (retorno == "Sucesso") ? MostrarMensagem("Registro deletado com sucesso!") : MostrarAlerta("Erro ao deletar o registro!");
            this.GerarGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Agenda.prototype.ValidarCampos = function () {
        var agendaAlterou = this.Agendas.filter(function (f) { return f.Alterou == true; });
        if (agendaAlterou.length == 0) {
            if (this.cboTipoAgenda.GetValue() == "888888") {
                if (this.txtNome.GetText() == "" || this.txtNome.GetText() == undefined || this.txtNome.GetText() == null) {
                    MostrarAlerta("Preencha o campo corretamente: Nome.");
                    return false;
                }
                if (this.txtTelefone.GetText() == "" || this.txtTelefone.GetText() == undefined || this.txtTelefone.GetText() == null) {
                    MostrarAlerta("Preencha o campo corretamente: Telefone.");
                    return false;
                }
            }
            else {
                if (this.txtHora.GetText() == "" || this.txtHora.GetText() == undefined || this.txtHora.GetText() == null) {
                    MostrarAlerta("Preencha o campo corretamente: Hora.");
                    return false;
                }
                if (this.txtCompromisso.GetText() == "" || this.txtCompromisso.GetText() == undefined || this.txtCompromisso.GetText() == null) {
                    MostrarAlerta("Preencha o campo corretamente: Compromisso.");
                    return false;
                }
            }
        }
        return true;
    };
    C_Agenda.prototype.PreencherUsuarios = function (usuarios) {
        // this.Agenda.Usuarios = [];
        if (usuarios) {
            for (var x = 0; x < usuarios.length; x++) {
                if (usuarios[x].Codigo) {
                    this.codigosUsuario.push(usuarios[x].Codigo.toString());
                }
            }
        }
        else {
            this.lstUsuario.SetValues(this.cboTipoAgenda.GetValue());
        }
    };
    C_Agenda.prototype.OnClickBotaoFechar = function () {
        this.nomeExistente = false;
        this.txtCompromisso.Limpar();
        this.lstUsuario.LimparSelecao();
        this.mdCompromisso.Hide();
    };
    return C_Agenda;
}(MouraPageAngular));
var c_Agenda = new C_Agenda();
//# sourceMappingURL=C_Agenda.js.map