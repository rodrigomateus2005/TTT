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
var C_HosChkLst = /** @class */ (function (_super) {
    __extends(C_HosChkLst, _super);
    function C_HosChkLst() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_HosChkLst.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosChkLst.prototype, "txtReserva", {
        get: function () {
            return window['txtReserva_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosChkLst.prototype, "txtProfissional", {
        get: function () {
            return window['txtProfissional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosChkLst.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosChkLst.prototype, "txtCheckListDescricao", {
        get: function () {
            return window['txtCheckListDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosChkLst.prototype, "btnImprimirCheckList", {
        get: function () {
            return window['btnImprimirCheckList_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosChkLst.prototype, "sgnCheckList", {
        get: function () {
            return window['sgnCheckList_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosChkLst.prototype, "btnAssinatura", {
        get: function () {
            return window['btnAssinatura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosChkLst.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosChkLst.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosChkLst.prototype, "btnExcluir", {
        get: function () {
            return window['btnExcluir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosChkLst.prototype, "CheckListItens", {
        get: function () {
            return this.GetScope()["CheckListItens"];
        },
        set: function (value) {
            this.GetScope()["CheckListItens"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HosChkLst.prototype, "Assinatura", {
        get: function () {
            return this.GetScope()["Assinatura"];
        },
        set: function (value) {
            this.GetScope()["Assinatura"] = value;
        },
        enumerable: true,
        configurable: true
    });
    //get grdAvaliacaoComportamento(): MouraGridViewJS {
    //    return window['grdAvaliacaoComportamento_Object'];
    //}
    //get txtObsAvaliacao(): MouraTextBox {
    //    return window['txtObsAvaliacao_Object'];
    //}
    //get cboChkLstCompAprovado(): MouraComboBox {
    //    return window['cboChkLstCompAprovado_Object'];
    //}
    C_HosChkLst.prototype.Init = function () {
        _super.prototype.Init.call(this);
        //if (this.txtHospedagem) {
        //    adicionarEventoMoura(this.txtHospedagem.Procurou, this.OnTxtHospedagemProcurou, this);
        //}
        if (this.txtReserva) {
            adicionarEventoMoura(this.txtReserva.Procurou, this.OnTxtReservaProcurou, this);
        }
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.Procurou, this.OnTxtCodigoProcurou, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.onBtnGravarClick, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.onBtnLimparClick, this);
        }
        //if (this.btnExcluir) {
        //    adicionarEventoDevExpress(this.btnExcluir.Botao.Click, this.onBtnExcluirClick, this);
        //}
        if (this.sgnCheckList) {
            adicionarEventoMoura(this.sgnCheckList.Salvou, this.OnSalvouAssinatura, this);
        }
        if (this.btnAssinatura) {
            adicionarEventoMoura(this.btnAssinatura.Click, this.OnClickAssinatura, this);
        }
        if (this.btnImprimirCheckList) {
            adicionarEventoMoura(this.btnImprimirCheckList.Click, this.OnClickImprimirChecklist, this);
        }
    };
    C_HosChkLst.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherHospedagem();
    };
    C_HosChkLst.prototype.OnClickImprimirChecklist = function (s, e) {
        try {
            e.processOnServer = false;
            if (!this.CheckListItens || this.CheckListItens.length == 0) {
                MostrarAlerta("Informe o CheckList!");
                return;
            }
            var parametros;
            parametros = {
                descricaoChecklist: this.txtCheckListDescricao.GetText(),
                itensChecklist: this.CheckListItens
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetImpressaoMatricialChecklist", parametros);
            this.ImprimirMatricial(ValoresSismoura.NomeTela + "_CheckList", retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosChkLst.prototype.OnSalvouAssinatura = function (s, e) {
        try {
            if (!this.Assinatura) {
                this.Assinatura = {};
                this.Assinatura.Reserva = this.txtReserva.GetText().CNum();
            }
            this.Assinatura.Assinatura = Sting64ToByteArray(this.sgnCheckList.assinaturaBase64);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosChkLst.prototype.OnClickAssinatura = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.txtReserva.GetText().CNum() == 0) {
                MostrarAlerta("Informe a reserva.");
                return;
            }
            if (!window['atob']) {
                MostrarAlerta("Navegador não suporta esse recurso");
                return;
            }
            var assinatura = "";
            if (this.Assinatura && this.Assinatura.Assinatura && this.Assinatura.Assinatura.length > 0) {
                assinatura = ByteArrayToSting64(this.Assinatura.Assinatura);
            }
            this.sgnCheckList.assinaturaBase64 = assinatura;
            this.sgnCheckList.abrir();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HosChkLst.prototype.onBtnGravarClick = function (s, e) {
        var _this = this;
        setTimeout(function () {
            try {
                var parametros = {
                    codReserva: _this.txtReserva.GetText().CNum()
                };
                var reserva = _this.ExecutarFuncaoServerSideSynch("GetReserva", parametros);
                //if (reserva.Tipo_Hospedagem == SiSMoura.Core.Entity.Animais_Hospedagem.TipoHospedagem.DAYCARE) {
                //    if (!this.ValidarAvaliacaoComportamental()) {
                //        return;
                //    }
                //}
                if (!_this.ValidarCheckList()) {
                    return;
                }
                //if (reserva.Tipo_Hospedagem == SiSMoura.Core.Entity.Animais_Hospedagem.TipoHospedagem.DAYCARE) {
                //    this.GravarAvaliacaoComportamental();
                //}
                _this.GravaCheckList();
            }
            catch (e) {
                LogarException(e);
            }
        }, 700);
    };
    C_HosChkLst.prototype.GravaCheckList = function () {
        var parametros = {
            codReserva: this.txtReserva.GetText().CNum(),
            codCheckList: this.txtCodigo.GetText().CNum(),
            codProfissional: this.txtProfissional.GetText().CNum(),
            descCheckList: this.txtCheckListDescricao.GetText(),
            Itens: this.CheckListItens,
            Assinatura: this.Assinatura,
            Tela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GravarCheckList", parametros);
        if (retorno) {
            MostrarMensagem("CheckList gravado com sucesso!");
        }
        else {
            MostrarAlerta("Ocorreu um erro ao gravar o registro.");
        }
    };
    C_HosChkLst.prototype.ValidarCheckList = function () {
        if (this.txtReserva.GetText().CNum() == 0) {
            MostrarAlerta("Informe a Reserva.");
            return false;
        }
        if (this.txtCodigo.GetText().CNum() == 0) {
            MostrarAlerta("Informe o CheckList que será realizado.");
            return false;
        }
        if (this.txtProfissional.GetText().CNum() == 0) {
            MostrarAlerta("Informe o profissional que realizou o checklist.");
            return false;
        }
        if (!(this.CheckListItens) || this.CheckListItens.length == 0) {
            MostrarAlerta("Os itens do checklist não foram carregados corretamente.");
            return false;
        }
        if (!this.Assinatura || !this.Assinatura.Assinatura || this.Assinatura.Assinatura.length == 0) {
            MostrarAlerta("O checklist não foi assinado.");
            return false;
        }
        return true;
    };
    C_HosChkLst.prototype.onBtnLimparClick = function (s, e) {
        try {
            this.LimparCampos();
        }
        catch (e) {
            LogarException(e);
        }
    };
    //private onBtnExcluirClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs) {
    //    try {
    //        if (this.txtReserva.GetText().CNum() == 0) {
    //            MostrarAlerta("Informe a Hospedagem.");
    //            return;
    //        }
    //        if (this.txtCodigo.GetText().CNum() == 0) {
    //            MostrarAlerta("Informe o CheckList.");
    //            return;
    //        }
    //        if (!(this.CheckListItens) || this.CheckListItens.length == 0) {
    //            MostrarAlerta("Os itens do checklist não foram carregados corretamente.");
    //            return;
    //        }
    //        MsgBoxJS("Deseja realmente excluir o registro?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnMsgBoxEcluirCheckList, this), undefined);
    //    } catch (e) {
    //        LogarException(e);
    //    }
    //}
    //protected OnMsgBoxEcluirCheckList(resultado: MsgBoxResultEventArgs) {
    //    try {
    //        if (resultado.Resultado == MsgBoxResult.No) {
    //            return;
    //        }
    //        var parametros: any = {
    //            codReserva: this.txtReserva.GetText().CNum(),
    //            codCheckList: this.txtCodigo.GetText().CNum(),
    //            Itens: this.CheckListItens,
    //            Assinatura: this.Assinatura,
    //            Tela: ValoresSismoura.NomeTela,
    //            codUsuario: ValoresSismoura.UsuarioLogado
    //        }
    //        var retorno: boolean = this.ExecutarFuncaoServerSideSynch("ExcluirCheckList", parametros);
    //        if (retorno) {
    //            this.LimparCampos();
    //            MostrarMensagem("Registro excluído com sucesso!");
    //        } else {
    //            MostrarAlerta("Ocorreu um erro ao excluir o registro.");
    //        }
    //    } catch (e) {
    //        LogarException(e);
    //    }
    //}
    C_HosChkLst.prototype.OnTxtReservaProcurou = function (s, e) {
        try {
            if (this.txtReserva.GetText().CNum() == 0) {
                this.LimparCampos();
                return;
            }
            var parametros = {
                codReserva: this.txtReserva.GetText().CNum()
            };
            var reserva = this.ExecutarFuncaoServerSideSynch("GetReserva", parametros);
            if (reserva && reserva.Cancelada) {
                MostrarAlerta("Esta reserva foi cancelada.");
                this.LimparCampos();
                return;
            }
            if (reserva && reserva.Checklist_Itens && reserva.Checklist_Itens.length > 0) {
                this.txtCodigo.Limpar();
                this.txtCodigo.Procurar(reserva.CheckListCodigo.toString());
            }
            else {
                this.txtCodigo.Limpar();
                this.grid.PreencherGrid(null);
            }
            this.txtReserva.LabelResultado.innerText = reserva.Observacao;
            if (CNum(reserva.Profissional_CheckList) > 0) {
                this.txtProfissional.Procurar(reserva.Profissional_CheckList.toString());
            }
            this.Assinatura = reserva.Assinatura;
            //if (this.cboChkLstCompAprovado) {
            //    this.cboChkLstCompAprovado.Obrigatorio = false;
            //}
            //if (reserva.Tipo_Hospedagem == SiSMoura.Core.Entity.Animais_Hospedagem.TipoHospedagem.DAYCARE) {
            //    if (this.cboChkLstCompAprovado) {
            //        this.cboChkLstCompAprovado.Obrigatorio = true;
            //    }
            //}
            //this.GetDadosAvaliacaoComportamental(reserva.Animal);
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosChkLst.prototype.OnTxtCodigoProcurou = function (s, e) {
        try {
            if (this.txtReserva.GetText().CNum() == 0) {
                MostrarAlerta("Informe a Reserva.");
                return;
            }
            var parametros = {
                codCheckList: this.txtCodigo.GetText().CNum(),
                codReserva: this.txtReserva.GetText().CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetByCheckListCodigo", parametros);
            this.CheckListItens = retorno.Itens;
            if (!String.IsNullOrWhiteSpace(retorno.Descricao)) {
                this.txtCheckListDescricao.SetText(retorno.Descricao);
            }
            else {
                this.txtCheckListDescricao.SetText(this.txtCodigo.GetResultado());
            }
            if (this.CheckListItens && this.CheckListItens.length > 0) {
                this.grid.PreencherGrid(this.CheckListItens);
            }
            //this.HabilitarDesabilitarCamposAvaliacaoComportamental(true);
            this.HabilitarDesabilitarCamposAvaliacaoFisica(false);
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_HosChkLst.prototype.LimparCampos = function () {
        this.CheckListItens = [];
        this.txtCodigo.Limpar();
        this.txtReserva.Limpar();
        this.grid.PreencherGrid(null);
        this.txtCheckListDescricao.Limpar();
        this.sgnCheckList.limpar();
        this.txtProfissional.Limpar();
        this.HabilitarDesabilitarCamposAvaliacaoFisica(true);
    };
    //private GetDadosAvaliacaoComportamental(codAnimal: number) {
    //    try {
    //        var parametros: any = {
    //            codAnimal: codAnimal
    //        }
    //        var retorno: SiSMoura.Core.Entity.Avaliacao_Comportamento_Retorno = this.ExecutarFuncaoServerSideSynch("GetAvaliacaoComportamental", parametros)
    //        if (retorno) {
    //            this.txtObsAvaliacao.SetText(retorno.Observacao);
    //            this.cboChkLstCompAprovado.Combo.SetValue(retorno.Aprovado);
    //            this.grdAvaliacaoComportamento.PreencherGrid(retorno.itens);
    //        } else {
    //            this.grdAvaliacaoComportamento.PreencherGrid(null);
    //        }
    //        this.HabilitarDesabilitarCamposAvaliacaoComportamental(true);
    //    } catch (e) {
    //        LogarException(e);
    //    }
    //}
    //private GravarAvaliacaoComportamental() {
    //    var avaliacao = <SiSMoura.Core.Entity.Avaliacao_Comportamento_Retorno>{};
    //    var itens: SiSMoura.Core.Entity.Avaliacao_Comportamento_Item_Retorno[] = this.grdAvaliacaoComportamento.DataSource;
    //    var parametros: any = {
    //        codReserva: this.txtReserva.GetText().CNum()
    //    }
    //    var reserva: SiSMoura.Core.Entity.Animais_Hospedagem_Reserva = this.ExecutarFuncaoServerSideSynch("GetReserva", parametros);
    //    avaliacao.Animal = reserva.Animal
    //    avaliacao.Aprovado = this.cboChkLstCompAprovado.Combo.GetValue()
    //    avaliacao.Observacao = this.txtObsAvaliacao.GetText();
    //    avaliacao.itens = itens;
    //    avaliacao.Data_Avaliacao = this.DataServidor();
    //    avaliacao.Profissional = this.txtProfissional.GetText().CNum();
    //    var parametros: any = {
    //        AvaliacaoJson: JSON.stringify(avaliacao),
    //        Tela: ValoresSismoura.NomeTela,
    //        codUsuario: ValoresSismoura.UsuarioLogado
    //    }
    //    var retorno = this.ExecutarFuncaoServerSideSynch("GravarAvaliacaoComportamental", parametros)
    //    if (retorno) {
    //        MostrarMensagem("Avaliação salva com sucesso!");
    //    } else {
    //        MostrarAlerta("Ocorreu um erro ao gravar o registro.");
    //    }
    //}
    //private ValidarAvaliacaoComportamental(): boolean {
    //    var isValido: boolean = true;
    //    var itens: SiSMoura.Core.Entity.Avaliacao_Comportamento_Item_Retorno[] = this.grdAvaliacaoComportamento.DataSource;
    //    for (var item of itens) {
    //        if (CNum(item.Codigo_Resposta) == 0) {
    //            isValido = false
    //            MostrarAlerta(`A resposta da pergunta: "${item.Pergunta}" não foi informada.`);
    //            return;
    //        }
    //    }
    //    if (String.IsNullOrWhiteSpace(this.cboChkLstCompAprovado.GetValue())) {
    //        MostrarAlerta(`Informe se o PET foi aprovado ou não.`);
    //        this.cboChkLstCompAprovado.Focus();
    //        return false;
    //    }
    //    if (this.txtProfissional.GetText().CNum() == 0) {
    //        MostrarAlerta(`Informe o profissional.`);
    //        this.txtProfissional.Focus();
    //        return false;
    //    }
    //    return isValido;
    //}
    C_HosChkLst.prototype.PreencherHospedagem = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.QueryString.CodigoReserva && CNum(_this.QueryString.CodigoReserva)) {
                _this.txtReserva.Procurar(_this.QueryString.CodigoReserva);
                _this.QueryString.CodigoReserva = null;
            }
        }, 700);
    };
    C_HosChkLst.prototype.HabilitarDesabilitarCamposAvaliacaoFisica = function (habilitar) {
        //Aba CheckList - Avaliação Fisica.
        if (this.txtCodigo.GetText().CNum() > 0) {
            this.txtCodigo.Disabled = !habilitar;
            this.txtCheckListDescricao.Disabled = !habilitar;
            this.txtProfissional.Disabled = !habilitar;
            //this.btnAssinatura.Botao.SetEnabled(habilitar);
            this.sgnCheckList.btnSalvar.disabled = !habilitar;
            this.sgnCheckList.btnLimpar.disabled = !habilitar;
            this.sgnCheckList.setEnabled(habilitar);
            this.grid.Enabled = habilitar;
            this.grid.PermitirEditarGrid = habilitar;
        }
        else {
            this.txtCodigo.Disabled = false;
            this.txtCheckListDescricao.Disabled = false;
            this.txtProfissional.Disabled = false;
            this.sgnCheckList.btnSalvar.disabled = false;
            this.sgnCheckList.btnLimpar.disabled = false;
            this.sgnCheckList.setEnabled(true);
            this.grid.PermitirEditarGrid = true;
            this.grid.Enabled = true;
        }
    };
    return C_HosChkLst;
}(MouraPageAngular));
var c_HosChkLst = new C_HosChkLst();
//# sourceMappingURL=C_HosChkLst.js.map