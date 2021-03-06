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
var EnviandoMensagemWhatsAppEventArgs = /** @class */ (function (_super) {
    __extends(EnviandoMensagemWhatsAppEventArgs, _super);
    function EnviandoMensagemWhatsAppEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EnviandoMensagemWhatsAppEventArgs;
}(MouraEventArgs));
var MouraWhatsApp = /** @class */ (function (_super) {
    __extends(MouraWhatsApp, _super);
    function MouraWhatsApp(id) {
        var _this = _super.call(this, id) || this;
        _this.EnviandoMensagem = new MouraGenericEventHandler();
        return _this;
    }
    Object.defineProperty(MouraWhatsApp.prototype, "commandArgument", {
        get: function () {
            //return window[this.ID + "_commandArgument"]
            return this.hdnCommandArgument.value;
        },
        set: function (value) {
            this.hdnCommandArgument.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraWhatsApp.prototype, "destinatarios", {
        get: function () {
            //return window[this.ID + "_destinatarios"];
            if (String.IsNullOrWhiteSpace(this.hdnDestinatarios.value))
                return [];
            return JSON.parse(replaceAll(this.hdnDestinatarios.value, "'", '"'));
        },
        set: function (value) {
            this.hdnDestinatarios.value = replaceAll(JSON.stringify(value), '"', "'");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraWhatsApp.prototype, "IsClient", {
        get: function () {
            return window[this.ID + "_IsClient"];
        },
        set: function (value) {
            window[this.ID + "_IsClient"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraWhatsApp.prototype, "pnModal", {
        get: function () {
            return window[this.ID + "_pnModal_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraWhatsApp.prototype, "txtMensagem", {
        get: function () {
            return window[this.ID + "_txtMensagem_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraWhatsApp.prototype, "txtDestinatarios", {
        get: function () {
            return window[this.ID + "_txtDestinatarios_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraWhatsApp.prototype, "chkGravarModelo", {
        get: function () {
            return window[this.ID + "_chkModelo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraWhatsApp.prototype, "btnEnviar", {
        get: function () {
            return window[this.ID + "_btnEnviar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraWhatsApp.prototype, "btnCancelar", {
        get: function () {
            return window[this.ID + "_btnCancelar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraWhatsApp.prototype, "hdnCommandArgument", {
        get: function () {
            return window[this.ID + "_hdnCommandArgument"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraWhatsApp.prototype, "hdnDestinatarios", {
        get: function () {
            return window[this.ID + "_hdnDestinatarios"];
        },
        enumerable: true,
        configurable: true
    });
    MouraWhatsApp.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.btnEnviar) {
            adicionarEventoMoura(this.btnEnviar.Click, this.OnBtnEnviarClick, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnBtnCancelarClick, this);
        }
    };
    MouraWhatsApp.prototype.AbrirClient = function (commandArgument, destinatarios) {
        this.IsClient = true;
        this.commandArgument = commandArgument;
        this.destinatarios = destinatarios;
        this.chkGravarModelo.Check.checked = false;
        this.pnModal.Show();
        this.txtDestinatarios.SetText("");
        if (this.txtDestinatarios && this.txtDestinatarios.Visible && destinatarios && destinatarios.length > 0) {
            this.txtDestinatarios.SetText(destinatarios.join("; "));
        }
        var param = { commandArgument: commandArgument };
        var texto = this.ExecutarHttpRequest("GetMensagemSalvaSMS", param);
        this.txtMensagem.SetText("");
        if (texto) {
            this.txtMensagem.SetText(texto);
        }
    };
    MouraWhatsApp.prototype.OnBtnEnviarClick = function (s, e) {
        if (!this.IsClient) {
            return;
        }
        e.processOnServer = false;
        try {
            var smsPara = [];
            var param;
            if (this.txtDestinatarios && this.txtDestinatarios.Visible) {
                if (!String.IsNullOrWhiteSpace(this.txtDestinatarios.GetText())) {
                    var sms = this.txtDestinatarios.GetText();
                    sms = replaceAll(sms, ",", ";");
                    var smsList = sms.split(";");
                    for (var x = 0; x < smsList.length; x++) {
                        if (!String.IsNullOrWhiteSpace(smsList[x])) {
                            smsPara.push(smsList[x]);
                        }
                    }
                }
            }
            else {
                smsPara = this.destinatarios;
            }
            if (!smsPara || smsPara.length <= 0) {
                MostrarAlerta("Informe o campo Destinatário");
                return;
            }
            if (String.IsNullOrWhiteSpace(this.txtMensagem.GetText())) {
                MostrarAlerta("Informe o campo Mensagem");
                return;
            }
            if (this.chkGravarModelo.Check && this.chkGravarModelo.Check.checked) {
                param = {
                    commandArgument: this.commandArgument,
                    mensagem: this.txtMensagem.GetText(),
                    nomeTela: ValoresSismoura.NomeTela
                };
                this.ExecutarHttpRequest("GravarModeloMensagem", param);
            }
            var contador = 1;
            var lista = [];
            var msg;
            for (var i = 0; i < smsPara.length; i++) {
                msg = {};
                msg.Celular_Destinatario = smsPara[i];
                msg.ID_Mensagem = new Date().getMilliseconds().toString() + "_" + contador;
                var evt = new EnviandoMensagemEventArgs();
                evt.Mensagem = this.txtMensagem.GetText();
                evt.Index = i;
                this.EnviandoMensagem.FireEvent(this, evt);
                msg.Mensagem = evt.Mensagem.ConverterCaracter();
                lista.push(msg);
                contador++;
            }
            //param = {
            //    mensagens: JSON.stringify(lista)
            //    , nomeTela: ValoresSismoura.NomeTela
            //};
            //this.ExecutarHttpRequest("EnviarSms", param);
            abrirTelaNovaAbaParametros("http://api.whatsapp.com/send?phone=" + this.txtDestinatarios.GetText() + "&text=" + this.txtMensagem.GetText());
            this.pnModal.Hide();
            MostrarMensagem("Envio realizado com sucesso.");
        }
        catch (ex) {
            //If InStr(ex.Message, "(401)", CompareMethod.Text) > 0 Then
            //Throw New MouraMensagemException("Envio não autorizado. Verifique o login e a senha", "")
            //Else
            //LogarException(ex)
            //Throw
            //End If
            var mensagem = $(ex.responseText).find("h2").text();
            if (mensagem.indexOf("(401)") > -1) {
                MostrarAlerta("Envio não autorizado. Verifique o login e a senha");
            }
            else {
                MostrarAlerta(mensagem);
            }
        }
    };
    MouraWhatsApp.prototype.OnBtnCancelarClick = function (s, e) {
        e.processOnServer = false;
        this.pnModal.Hide();
        this.IsClient = false;
    };
    return MouraWhatsApp;
}(MouraControl));
//# sourceMappingURL=MouraWhatsApp.js.map