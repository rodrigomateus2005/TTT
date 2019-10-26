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
var Can_Cont = /** @class */ (function (_super) {
    __extends(Can_Cont, _super);
    function Can_Cont() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Can_Cont.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Can_Cont.prototype, "txtContrato", {
        get: function () {
            return window['txtContrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Can_Cont.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Can_Cont.prototype, "txtMotivo", {
        get: function () {
            return window['txtMotivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Can_Cont.prototype, "txtObserva\u00E7\u00E3o", {
        get: function () {
            return window['txtObservação_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Can_Cont.prototype, "btnCancelar", {
        get: function () {
            return window['btnCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Can_Cont.prototype, "btnGravarObs", {
        get: function () {
            return window['btnGravarObs_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Can_Cont.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Can_Cont.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.OnClickLimpar, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnClickCancelar, this);
        }
        if (this.btnGravarObs) {
            adicionarEventoMoura(this.btnGravarObs.Click, this.OnClickGravarObs, this);
        }
        if (this.txtContrato && this.txtContrato.Procurou) {
            adicionarEventoMoura(this.txtContrato.Procurou, this.OnContratoProcurou, this);
        }
        if (this.txtCliente && this.txtCliente.Procurou) {
            adicionarEventoMoura(this.txtCliente.Procurou, this.OnClienteProcurou, this);
        }
    };
    Can_Cont.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    Can_Cont.prototype.OnClienteProcurou = function () {
        var parametros;
        parametros = {
            codContrato: this.txtContrato.GetText().CNum(),
            codCliente: this.txtCliente.GetText().CNum()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("PesquisouCliente", parametros);
        if (retorno.convenio) {
            MostrarAlerta("Esse é um Código de um Convênio. Informe o Código de um Cliente");
            this.txtCliente.Focus();
        }
        if (retorno.contrato) {
            this.txtContrato.SetText(retorno.contrato.Codigo); //
            this.txtObservação.SetText(retorno.contrato.Observacao); //
        }
        else {
            this.LimparCamposSemCliente();
        }
        if (retorno.convenio) {
            if (retorno.contrato && retorno.contrato.Cliente != this.txtCliente.GetText().CNum()) {
                if (parametros.codCliente != 0 && parametros.codContrato != 0) {
                    this.LimparCamposSemCliente();
                    this.btnCancelar.SetEnabled(true);
                }
                else {
                    this.LimparCampos();
                }
            }
        }
    };
    Can_Cont.prototype.OnContratoProcurou = function () {
        try {
            var parametros;
            parametros = {
                codContrato: this.txtContrato.GetText().CNum()
                //codContrato: codigo
            };
            var contrato = this.ExecutarFuncaoServerSideSynch("PesquisouContrato", parametros);
            //this.LimparCampos();
            if (contrato) {
                if (this.txtCliente.GetText().CNum() == 0) {
                    this.txtCliente.Procurar(contrato.Cliente.toString());
                    this.txtObservação.SetText(contrato.Observacao);
                    if (!String.IsNullOrWhiteSpace(contrato.Motivo_Cancelado.toString()) && contrato.Motivo_Cancelado.toString() != "0") {
                        this.txtMotivo.Procurar(contrato.Motivo_Cancelado.toString());
                    }
                    if (typeof contrato.Data_Cancelado == "string") {
                        this.txtData.Date = contrato.Data_Cancelado.toString().ToDate();
                    }
                    else {
                        this.txtData.Date = contrato.Data_Cancelado;
                    }
                }
                else if (this.txtCliente.GetText().CNum() != contrato.Cliente) {
                    MostrarAlerta("Este contrato não pertence ao cliente selecionado");
                    this.LimparCamposSemCliente();
                    this.btnCancelar.SetEnabled(true);
                    return;
                }
                if (contrato.Data_Realizado_Cancelamento) {
                    MsgBoxJS("Este contrato já foi cancelado, deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRepostaContrato, this));
                }
                else {
                    this.PreencherContrato();
                    //this.btnCancelar.SetEnabled(true);
                }
            }
            if (this.txtContrato.GetText().CNum() != 0 && this.txtCliente.GetText().CNum() != 0) {
                if (!contrato || contrato.Cliente != this.txtCliente.GetText().CNum()) {
                    MostrarAlerta("Este contrato não pertence ao cliente selecionado");
                    this.txtContrato.SetText("");
                    return;
                }
            }
            //this.btnCancelar.SetEnabled(true);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Can_Cont.prototype.OnRepostaContrato = function (result) {
        if (result.Resultado == MsgBoxResult.No) {
            this.LimparCamposSemCliente();
            this.btnCancelar.SetEnabled(true);
            return;
        }
        else {
            this.PreencherContrato();
            //this.btnCancelar.SetEnabled(false);
        }
    };
    Can_Cont.prototype.PreencherContrato = function () {
        var parametros;
        parametros = {
            codContrato: this.txtContrato.GetText().CNum(),
            codCliente: this.txtCliente.GetText().CNum()
        };
        var contrato = this.ExecutarFuncaoServerSideSynch("RepostaContrato", parametros);
        if (contrato) {
            this.txtObservação.SetText(contrato.Observacao);
            if (contrato.Motivo_Cancelado > 0) {
                this.txtMotivo.Procurar(contrato.Motivo_Cancelado.toString());
            }
            else {
                this.txtMotivo.Limpar();
            }
            if (typeof contrato.Data_Cancelado == "string") {
                this.txtData.Date = contrato.Data_Cancelado.toString().ToDate();
            }
            else {
                this.txtData.Date = contrato.Data_Cancelado;
            }
        }
    };
    Can_Cont.prototype.OnClickCancelar = function (s, e) {
        e.processOnServer = false;
        var par = {
            codContrato: this.txtContrato.GetText().CNum()
        };
        var contrato = this.ExecutarFuncaoServerSideSynch("PesquisouContrato", par);
        if (this.txtContrato.GetText() == "") {
            MostrarAlerta("Selecione um contrato ou um cliente que possua um contrato");
            this.txtContrato.Focus();
            return;
        }
        if (contrato.Data_Realizado_Cancelamento) {
            MostrarAlerta("Este contrato já foi cancelado e não é possível ser cancelado novamente");
            return;
        }
        if (this.txtData.Date == undefined) {
            MostrarAlerta("Informe a data do cancelamento");
            this.txtData.Focus();
            return;
        }
        if (this.txtMotivo.GetText() == "") {
            MostrarAlerta("Selecione um motivo para o cancelamento do contrato");
            this.txtMotivo.Focus();
            return;
        }
        try {
            var parametros;
            parametros = {
                codContrato: this.txtContrato.GetText().CNum(),
                dataCancelamento: this.txtData.Date,
                motivo: this.txtMotivo.GetText().CNum(),
                observacao: this.txtObservação.GetText(),
                codCliente: this.txtCliente.GetText().CNum(),
                codUsuario: ValoresSismoura.UsuarioLogado,
                nomeTela: ValoresSismoura.NomeTela
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("CancelarContrato", parametros);
            if (retorno) {
                MostrarMensagem("Contrato cancelado com sucesso");
                this.LimparCampos();
            }
            else {
                MostrarAlerta("A data de cancelamento não pode ser inferior à data de emissão!");
                this.txtData.Focus();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Can_Cont.prototype.OnClickGravarObs = function (s, e) {
        e.processOnServer = false;
        if (this.txtContrato.GetText().CNum() != 0) {
            var parametros;
            parametros = {
                codContrato: this.txtContrato.GetText().CNum(),
                observacao: this.txtObservação.GetText(),
                codUsuario: ValoresSismoura.UsuarioLogado,
                nomeTela: ValoresSismoura.NomeTela
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GravarObservacao", parametros);
            if (retorno) {
                MostrarMensagem("Observação gravada com sucesso");
            }
            else {
                MostrarAlerta("Para gravar a observação será necessário cancelar o contrato");
                this.txtContrato.Focus();
            }
        }
        else {
            MostrarAlerta("Informe um contrato");
            this.txtContrato.Focus();
        }
    };
    Can_Cont.prototype.OnClickLimpar = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
    };
    Can_Cont.prototype.LimparCampos = function () {
        this.txtCliente.Limpar();
        this.LimparCamposSemCliente();
    };
    Can_Cont.prototype.LimparCamposSemCliente = function () {
        this.txtContrato.Limpar();
        this.txtData.Date = this.DataServidor();
        this.txtMotivo.Limpar();
        this.txtObservação.Limpar();
    };
    return Can_Cont;
}(MouraPageAngular));
var can_Cont = new Can_Cont();
//# sourceMappingURL=Can_Cont.js.map