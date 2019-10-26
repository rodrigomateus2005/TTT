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
var C_VisDiaN = /** @class */ (function (_super) {
    __extends(C_VisDiaN, _super);
    function C_VisDiaN() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_VisDiaN.prototype, "grdHistorico", {
        get: function () {
            return window['grdHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VisDiaN.prototype, "grdRfid", {
        get: function () {
            return window['grdRfid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VisDiaN.prototype, "grdTelefones", {
        get: function () {
            return window['grdTelefones_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VisDiaN.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VisDiaN.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VisDiaN.prototype, "lblCidade", {
        get: function () {
            return window['lblCidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VisDiaN.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VisDiaN.prototype, "txtHora", {
        get: function () {
            return window['txtHora_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VisDiaN.prototype, "txtContato", {
        get: function () {
            return window['txtContato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VisDiaN.prototype, "cboTipo_Atendimento", {
        get: function () {
            return window['cboTipo_Atendimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VisDiaN.prototype, "cboSituacao", {
        get: function () {
            return window['cboSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VisDiaN.prototype, "txtReagendamento", {
        get: function () {
            return window['txtReagendamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VisDiaN.prototype, "txtHoraReagendamento", {
        get: function () {
            return window['txtHoraReagendamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VisDiaN.prototype, "txtVendedor", {
        get: function () {
            return window['txtVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VisDiaN.prototype, "txtHistorico", {
        get: function () {
            return window['txtHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VisDiaN.prototype, "cboNaoFechamento", {
        get: function () {
            return window['cboNaoFechamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VisDiaN.prototype, "btnEmail", {
        get: function () {
            return window['btnEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VisDiaN.prototype, "hdnUsuario", {
        get: function () {
            return $("#hdnUsuario")[0];
        },
        enumerable: true,
        configurable: true
    });
    C_VisDiaN.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.txtCliente.Pesquisando, this.OnClientePesquisando, this);
        adicionarEventoMoura(this.txtCliente.Limpou, this.LimparCampos, this);
        adicionarEventoMoura(this.txtCliente.Procurou, this.OntxtClienteProcurou, this);
        adicionarEventoMoura(this.cboSituacao.SelectedItemChanged, this.OncboSituacaoMudou, this);
        adicionarEventoMoura(this.cboTipo_Atendimento.SelectedItemChanged, this.ObrigarResponsavel, this);
        adicionarEventoMoura(this.grdHistorico.SelecionouLinha, this.SelecionouGrade, this);
        adicionarEventoMoura(this.txtCodigo.Pesquisando, this.OnCodigoPesquisando, this);
        adicionarEventoMoura(this.txtCodigo.Procurou, this.OnProcurou, this);
        adicionarEventoMoura(this.btnEmail.Click, this.OnbtnEmailClick, this);
        this.txtCliente.Focus();
        this.cboNaoFechamento.Visible = false;
    };
    C_VisDiaN.prototype.OnbtnEmailClick = function (s, e) {
        var parametros = {
            vendedor: this.txtVendedor.GetText().CNum()
        };
        var parametrosConf = {};
        var parametrosEmail = {
            Cliente: this.txtCliente.GetText().CNum(),
            CodigoHistorico: this.txtCodigo.GetText().CNum()
        };
        if (this.txtCodigo.GetText().CNum() == 0) {
            toastr.warning('Informe o histórico!');
            this.txtCodigo.Focus();
        }
        else if (this.txtVendedor.GetText().CNum() == 0) {
            toastr.warning('Informe um responsável!');
            this.txtVendedor.Focus();
        }
        else if (!this.ExecutarFuncaoServerSideSynch("VeriricarEmailResponsavel", parametros)) {
            toastr.warning('O responsável pela visita não possui email!');
            this.txtCliente.Focus();
        }
        else if (!this.ExecutarFuncaoServerSideSynch("VerificarConfiguracaoEmail", parametrosConf)) {
            toastr.warning('O responsável pela visita não possui email!');
            this.txtCliente.Focus();
        }
        else if (this.ExecutarFuncaoServerSideSynch("EnviarEmail", parametrosEmail)) {
            toastr.info('Email enviado com sucesso!');
        }
        else {
            toastr.warning('Não foi possível enviar o email!');
        }
    };
    C_VisDiaN.prototype.OnAntesDeletar = function () {
        _super.prototype.OnAntesDeletar.call(this);
        toastr.warning('Não é possível excluir o histórico da visita!');
        return false;
    };
    C_VisDiaN.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        var parametros = {
            cliente: this.txtCliente.GetText().CNum()
        };
        var Historico = this.ExecutarFuncaoServerSideSynch("CarregarHistorico", parametros);
        this.grdHistorico.PreencherGrid(Historico);
        if (ConvertToDate(this.EntityTela.Reagendamento) && ConvertToDate(this.EntityTela.Hora_ReagendamentoRetorno) && CNum(this.EntityTela.Situacao) !== 3 && CNum(this.EntityTela.Situacao) !== 2) {
            this.VerificarReagendamentoExactSales();
        }
        else if (CNum(this.EntityTela.Situacao) === 2) {
            this.VenderLeadExactSales();
        }
        else if (CNum(this.EntityTela.Situacao) === 3) {
            this.DescartarLeadExactSales();
        }
        this.GetScope().$applyAsync();
        return true;
    };
    C_VisDiaN.prototype.VerificarReagendamentoExactSales = function () {
        var parametros;
        try {
            parametros = {
                codVisita: CNum(this.EntityTela.Visita),
                codHistorico: CNum(this.EntityTela.Codigo),
                codCliente: CNum(this.EntityTela.Cliente),
                dataReagendamento: ConvertToDate(this.EntityTela.Reagendamento),
                horaReagendamento: ConvertToDate(this.EntityTela.Hora_ReagendamentoRetorno).FormataHoraMinSegSismoura(),
                historico: this.EntityTela.Historico,
                codResponsavel: CNum(this.EntityTela.Responsavel),
                tipoAtendimento: CNum(this.EntityTela.Tipo_Atendimento),
                codSituacao: CNum(this.EntityTela.Situacao),
                codMotivoNao: CNum(this.EntityTela.Motivo_Nao_Fechamento),
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var msg = this.ExecutarFuncaoServerSideSynch("VerificarReagendamentoExactSales", parametros);
            if (!String.IsNullOrWhiteSpace(msg)) {
                MsgBoxJS(msg, MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_VisDiaN.prototype.VenderLeadExactSales = function () {
        var parametros;
        try {
            parametros = {
                codVisita: CNum(this.EntityTela.Visita),
                codCliente: CNum(this.EntityTela.Cliente),
                dataReagendamento: ConvertToDate(this.EntityTela.Reagendamento),
                horaReagendamento: ConvertToDate(this.EntityTela.Hora_ReagendamentoRetorno).FormataHoraMinSegSismoura(),
                codResponsavel: CNum(this.EntityTela.Responsavel)
            };
            var msg = this.ExecutarFuncaoServerSideSynch("VenderLeadExactSales", parametros);
            if (!String.IsNullOrWhiteSpace(msg)) {
                MsgBoxJS(msg, MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_VisDiaN.prototype.DescartarLeadExactSales = function () {
        var parametros;
        try {
            parametros = {
                codVisita: CNum(this.EntityTela.Visita),
                codCliente: CNum(this.EntityTela.Cliente),
                codMotivoNaoFechamento: CNum(this.EntityTela.Motivo_Nao_Fechamento),
                codResponsavel: CNum(this.EntityTela.Responsavel),
            };
            var msg = this.ExecutarFuncaoServerSideSynch("DescartarLeadExactSales", parametros);
            if (!String.IsNullOrWhiteSpace(msg)) {
                MsgBoxJS(msg, MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_VisDiaN.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entidade = this.GetScope().Entity;
        try {
            if (entidade.Codigo > 0) {
                MostrarAlerta("Não é possível editar um registro já existente!!");
                return false;
            }
            var parametros = {
                Codigo: this.txtCodigo.GetText().CNum(),
                Usuario: this.hdnUsuario.value.CNum()
            };
            if (this.txtCliente.GetText().CNum() != 0) {
                var msg = this.ExecutarFuncaoServerSideSynch("ValidarAlteracao", parametros);
                if (msg != "") {
                    toastr.warning('Somente o usuário ' + msg.toString() + ' pode alterar este histórico!');
                    return false;
                }
            }
            if (this.txtCliente.GetText().CNum() == 0) {
                toastr.warning('Informe um cliente!');
                this.txtCliente.Focus();
                return false;
            }
            if (this.txtVendedor.GetText().CNum() == 0 && this.txtVendedor.Visible) {
                toastr.warning('Informe o responsável!');
                this.txtVendedor.Focus();
                return false;
            }
            if (this.cboSituacao.GetSelectedIndex() == 2 && (entidade.Motivo_Nao_Fechamento == 0 || entidade.Motivo_Nao_Fechamento == undefined)) {
                toastr.warning('Informe o motivo de não fechamento!');
                this.cboNaoFechamento.Focus();
                return false;
            }
            entidade.Cliente = this.txtCliente.GetText().CNum();
            entidade.Motivo_Nao_Fechamento = CNum(this.cboNaoFechamento.GetValue());
            entidade.Reagendamento = this.txtReagendamento.Date;
            entidade.Hora_ReagendamentoRetorno = this.txtHoraReagendamento.textBoxHorario.GetDate();
        }
        catch (ex) {
            LogarException(ex);
        }
        return true;
    };
    C_VisDiaN.prototype.OnProcurou = function () {
        if (this.txtCodigo.GetText().CNum() == 0) {
            this.Limpar();
        }
        else {
            this.OncboSituacaoMudou();
            this.ObrigarResponsavel();
            this.Habilitar(true);
        }
        this.GetScope().$applyAsync();
    };
    C_VisDiaN.prototype.Habilitar = function (Flag) {
        this.txtHora.Enabled = false;
        this.txtData.Disabled = false;
        this.txtContato.Disabled = Flag;
        this.cboTipo_Atendimento.Enabled = !Flag;
        this.txtHistorico.Disabled = Flag;
        if (this.txtVendedor.Visible) {
            this.txtVendedor.Disabled = Flag;
            this.btnEmail.Visible = true;
        }
        else {
            this.btnEmail.Visible = false;
        }
        this.cboSituacao.Enabled = !Flag;
        if (this.cboNaoFechamento.Visible) {
            this.cboNaoFechamento.Enabled = !Flag;
        }
        if (this.txtHoraReagendamento.Visible) {
            this.txtHoraReagendamento.Enabled = true;
        }
        if (this.txtReagendamento.Visible) {
            this.txtReagendamento.Disabled = Flag;
        }
    };
    C_VisDiaN.prototype.LimparCampos = function () {
        _super.prototype.Limpar.call(this);
        this.grdHistorico.PreencherGrid(null);
        this.grdRfid.PreencherGrid(null);
        this.grdTelefones.PreencherGrid(null);
    };
    C_VisDiaN.prototype.OnClientePesquisando = function (s, ev) {
        var parametros = {
            Cliente: this.txtCliente.GetText().CNum(),
            Usuario: this.hdnUsuario.value.CNum()
        };
        if (!this.ExecutarFuncaoServerSideSynch("VerificarResponsavelVisita", parametros) && this.ExecutarFuncaoServerSideSynch("IsParceiro", parametros)) {
            toastr.warning('Você não é o responsável por este atendimento!');
            this.txtCliente.Focus();
            ev.Valido = false;
            this.Limpar();
            this.LimparCampos();
            this.GetScope().$applyAsync();
        }
    };
    C_VisDiaN.prototype.OnCodigoPesquisando = function (s, ev) {
        var parametros = {
            Codigo: this.txtCodigo.GetText().CNum(),
            Cliente: this.txtCliente.GetText().CNum()
        };
        if (this.txtCliente.GetText().CNum() == 0 || this.txtCodigo.GetText().CNum() == 0 || !this.ExecutarFuncaoServerSideSynch("VerificarHistoricoCliente", parametros)) {
            toastr.warning('Histórico não encontrado!');
            this.txtCodigo.Focus();
            ev.Valido = false;
            this.Limpar();
            this.GetScope().$applyAsync();
        }
    };
    C_VisDiaN.prototype.SelecionouGrade = function (s, e) {
        this.txtCodigo.Procurar(e.data['Codigo']);
    };
    C_VisDiaN.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar;
        var parametros = {
            Usuario: this.hdnUsuario.value
        };
        Entity.Hora = new Date();
        Entity.Data = new Date();
        this.Habilitar(false);
        if (this.ExecutarFuncaoServerSideSynch("IsParceiro", parametros)) {
            Entity.Tipo_Atendimento = 31;
            Entity.Responsavel = this.hdnUsuario.value.CNum();
            this.txtVendedor.Disabled = true;
        }
        else {
            Entity.Tipo_Atendimento = 16;
        }
        this.cboNaoFechamento.Visible = false;
        this.btnEmail.Visible = false;
        this.GetScope().$applyAsync();
    };
    C_VisDiaN.prototype.ObrigarResponsavel = function () {
        var parametros = {
            Tipo: this.cboTipo_Atendimento.GetValue()
        };
        this.txtVendedor.Visible = this.ExecutarFuncaoServerSideSynch("ObrigarResponsavel", parametros);
        if (!this.txtVendedor.Visible) {
            this.txtVendedor.Limpar();
        }
    };
    C_VisDiaN.prototype.OncboSituacaoMudou = function () {
        var entidade = this.GetScope().Entity;
        if (this.cboSituacao.GetSelectedIndex() == 2) {
            this.cboNaoFechamento.Visible = true;
            this.txtHoraReagendamento.Visible = false;
            this.txtReagendamento.Visible = false;
            entidade.Hora_ReagendamentoRetorno = null;
            entidade.Reagendamento = null;
        }
        else {
            this.cboNaoFechamento.Visible = false;
            entidade.Motivo_Nao_Fechamento = null;
            this.txtHoraReagendamento.Visible = true;
            this.txtReagendamento.Visible = true;
        }
    };
    C_VisDiaN.prototype.OntxtClienteProcurou = function () {
        if (CNum(this.txtCliente.GetText()) > 0) {
            var parametros = {
                cliente: this.txtCliente.GetText().CNum()
            };
            var Itens = this.ExecutarFuncaoServerSideSynch("CarregarTelefones", parametros);
            this.grdTelefones.PreencherGrid(Itens);
            var Historico = this.ExecutarFuncaoServerSideSynch("CarregarHistorico", parametros);
            this.grdHistorico.PreencherGrid(Historico);
            var RFID = this.ExecutarFuncaoServerSideSynch("CarregarRFID", parametros);
            this.grdRfid.PreencherGrid(RFID);
            this.Limpar();
            this.txtVendedor.LimparParametros;
            this.txtVendedor.AddParametro("cliente", this.txtCliente.GetText());
            var cidade = this.ExecutarFuncaoServerSideSynch("CarregarCidade", parametros);
            this.grdRfid.PreencherGrid(RFID);
            this.lblCidade.SetTextLabelControl("Cidade: " + cidade);
            this.GetScope().$applyAsync();
        }
        else {
            this.LimparCampos();
        }
    };
    C_VisDiaN.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        //setTimeout($.proxy(function () {
        //    if (this.ParametrosTela.cliente) {
        //        this.txtCliente.Procurar(this.ParametrosTela.cliente.CNum());
        //    }
        //}, this), 500);
        if (this.ParametrosTela.cliente) {
            if (this.txtCliente) {
                this.txtCliente.Procurar(this.ParametrosTela.cliente.CNum());
            }
        }
    };
    return C_VisDiaN;
}(MouraPageCadastroAngular));
var c_VisDiaN = new C_VisDiaN();
//# sourceMappingURL=C_VisDiaN.js.map