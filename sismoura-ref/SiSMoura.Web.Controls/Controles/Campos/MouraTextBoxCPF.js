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
var MouraTextBoxCPFPesquisouEventArgs = /** @class */ (function (_super) {
    __extends(MouraTextBoxCPFPesquisouEventArgs, _super);
    function MouraTextBoxCPFPesquisouEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraTextBoxCPFPesquisouEventArgs;
}(MouraEventArgs));
var MouraTextBoxCPF = /** @class */ (function (_super) {
    __extends(MouraTextBoxCPF, _super);
    function MouraTextBoxCPF(id) {
        var _this = _super.call(this, id) || this;
        if (!_this.Procurou)
            _this.Procurou = new MouraGenericEventHandler();
        return _this;
    }
    Object.defineProperty(MouraTextBoxCPF.prototype, "Procurou", {
        get: function () {
            return window[this.ID + '_Procurou'];
        },
        set: function (value) {
            window[this.ID + '_Procurou'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxCPF.prototype, "hdnCanProcurar", {
        get: function () {
            return $("#" + this.ID + "_hdnCanProcurar")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxCPF.prototype, "hdnIsCPF", {
        get: function () {
            return $("#" + this.ID + "_hdnIsCPF")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxCPF.prototype, "Modal", {
        get: function () {
            return window[this.ID + "_Modal_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxCPF.prototype, "BotaoConsultar", {
        get: function () {
            return window[this.ID + "_BotaoConsultar"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxCPF.prototype, "imageCaptcha", {
        get: function () {
            return $("#" + this.ID + "_imageCaptcha")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxCPF.prototype, "textBoxCaptcha", {
        get: function () {
            return $("#" + this.ID + "_textBoxCaptcha")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxCPF.prototype, "BotaoOKCaptcha", {
        get: function () {
            return window[this.ID + "_BotaoOKCaptcha_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxCPF.prototype, "IsCPF", {
        get: function () {
            if (this.hdnIsCPF) {
                if (this.hdnIsCPF.value == "S") {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        },
        set: function (value) {
            if (this.hdnIsCPF) {
                if (value) {
                    this.hdnIsCPF.value = "S";
                }
                else {
                    this.hdnIsCPF.value = "N";
                }
            }
            this.AtualizarMascaras();
            this.AtualizarPodeProcurar();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxCPF.prototype, "CanProcurar", {
        get: function () {
            if (this.hdnCanProcurar) {
                if (this.hdnCanProcurar.value == "S") {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        },
        set: function (value) {
            if (this.hdnCanProcurar) {
                if (value) {
                    this.hdnCanProcurar.value = "S";
                }
                else {
                    this.hdnCanProcurar.value = "N";
                }
            }
            this.AtualizarPodeProcurar();
        },
        enumerable: true,
        configurable: true
    });
    MouraTextBoxCPF.prototype.AtualizarPodeProcurar = function () {
        if (this.BotaoConsultar) {
            if (this.IsCPF) {
                $(this.BotaoConsultar.GetMainElement()).css("visibility", "hidden");
                //this.BotaoConsultar.SetVisible(false)
            }
            else {
                if (this.CanProcurar) {
                    //this.BotaoConsultar.SetVisible(true)
                    $(this.BotaoConsultar.GetMainElement()).css("visibility", "visible");
                }
                else {
                    //this.BotaoConsultar.SetVisible(false)
                    $(this.BotaoConsultar.GetMainElement()).css("visibility", "hidden");
                }
            }
        }
    };
    MouraTextBoxCPF.prototype.AtualizarMascaras = function () {
        if (ValoresSismoura.Sistema_Pais == 607 /* Portugal */) {
            if (this.Textbox) {
                $(this.Textbox).attr("data-inputmask", "'mask': '999999999'");
                $(this.Textbox).inputmask("999999999");
            }
            if (this.IsCPF) {
                if (this.LabelControl) {
                    if (this.Obrigatorio || this.ObrigatorioUsuario) {
                        this.SetTextLabelControl("* NIF");
                    }
                    else {
                        this.SetTextLabelControl("NIF");
                    }
                }
            }
            else {
                if (this.LabelControl) {
                    if (this.Obrigatorio || this.ObrigatorioUsuario) {
                        this.SetTextLabelControl("* NIPC");
                    }
                    else {
                        this.SetTextLabelControl("NIPC");
                    }
                }
            }
        }
        else if (this.IsCPF) {
            if (this.Textbox) {
                $(this.Textbox).attr("data-inputmask", "'mask': '999.999.999-99'");
                $(this.Textbox).inputmask("999.999.999-99");
            }
            if (this.LabelControl) {
                if (this.Obrigatorio || this.ObrigatorioUsuario) {
                    this.SetTextLabelControl("* CPF");
                }
                else {
                    this.SetTextLabelControl("CPF");
                }
            }
        }
        else {
            if (this.Textbox) {
                $(this.Textbox).attr("data-inputmask", "'mask': '99.999.999/9999-99'");
                $(this.Textbox).inputmask("99.999.999/9999-99");
            }
            if (this.LabelControl) {
                if (this.Obrigatorio || this.ObrigatorioUsuario) {
                    this.SetTextLabelControl("* CNPJ");
                }
                else {
                    this.SetTextLabelControl("CNPJ");
                }
            }
        }
    };
    MouraTextBoxCPF.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.BotaoConsultar) {
            adicionarEventoDevExpress(this.BotaoConsultar.Click, this.OnBotaoConsultarClick, this);
        }
        if (this.BotaoOKCaptcha) {
            adicionarEventoMoura(this.BotaoOKCaptcha.Click, this.OnBotaoOKCaptchaClick, this);
        }
        if (this.Textbox) {
            adicionarEventoJQuery(this.Textbox, "keydown", this.OnTextBoxProcuraKeyDown, this);
        }
        this.AtualizarPodeProcurar();
    };
    MouraTextBoxCPF.prototype.ConsultarAPI = function () {
        var _this = this;
        if (!this.IsCPF) {
            if (String.IsNullOrWhiteSpace(this.Textbox.value)) {
                MostrarAlerta("Informe o CNPJ");
                return;
            }
            abrirEspera("Aguarde. Consultando o CNPJ");
            this.ExecutarHttpRequestAsyncPost("CNPJApiConsulta", {
                cnpj: this.Textbox.value
            }, function (d) {
                fecharEspera();
                var resultado;
                debugger;
                if (!String.IsNullOrWhiteSpace(d)) {
                    resultado = JSON.parse(d);
                }
                else {
                    MostrarAlerta("Ocorreu um erro ao consultar o CNPJ");
                    return;
                }
                if (resultado && resultado.RazaoSocial) {
                    var evt = new MouraTextBoxCPFPesquisouEventArgs();
                    evt.DadosEmpresa = resultado;
                    _this.Procurou.FireEvent(_this, evt);
                }
                else {
                    MostrarAlerta("Erro ao tentar consultar CNPJ. Tente novamente");
                }
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
    };
    MouraTextBoxCPF.prototype.Consultar = function () {
        var _this = this;
        if (!this.IsCPF) {
            var sessionName;
            var sessionValue;
            if (this.ticketCaptcha) {
                sessionName = this.ticketCaptcha.sessionName;
                sessionValue = this.ticketCaptcha.sessionValue;
            }
            if (!this.Textbox.value || this.Textbox.value.length < 18) {
                return;
            }
            this.ExecutarHttpRequestAsyncPost("GerarCaptchaConsultaCnpj", {
                sessionName: sessionName,
                sessionValue: sessionValue
            }, function (d) {
                _this.ticketCaptcha = JSON.parse(d);
                _this.imageCaptcha.src = "data:image/png;base64," + _this.ticketCaptcha.captcha;
                _this.textBoxCaptcha.value = "";
                _this.Modal.Show();
            }, function (erro) {
                MostrarAlerta("Erro ao tentar consultar CNPJ. Tente novamente");
            }, this);
        }
    };
    MouraTextBoxCPF.prototype.OnBotaoConsultarClick = function (s, e) {
        e.processOnServer = false;
        //this.Consultar()
        this.ConsultarAPI();
    };
    MouraTextBoxCPF.prototype.OnBotaoOKCaptchaClick = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        this.ExecutarHttpRequestAsyncPost("ConsultarCnpj", {
            sessionName: this.ticketCaptcha.sessionName,
            sessionValue: this.ticketCaptcha.sessionValue,
            captcha: this.textBoxCaptcha.value,
            cnpj: this.Textbox.value
        }, function (d) {
            var resultado;
            if (!String.IsNullOrWhiteSpace(d)) {
                resultado = JSON.parse(d);
            }
            if (resultado && resultado.RazaoSocial) {
                var evt = new MouraTextBoxCPFPesquisouEventArgs();
                evt.DadosEmpresa = resultado;
                _this.Procurou.FireEvent(_this, evt);
            }
            else {
                MostrarAlerta("Erro ao tentar consultar CNPJ. Tente novamente");
            }
            _this.Modal.Hide();
        }, function (erro) {
            MostrarAlerta("Erro ao tentar consultar CNPJ. Tente novamente");
            _this.Modal.Hide();
        }, this);
    };
    MouraTextBoxCPF.prototype.OnTextBoxProcuraKeyDown = function (e) {
        if (this.CanProcurar && !this.IsCPF) {
            var abrirPesquisa = false;
            if (e.keyCode == 113)
                abrirPesquisa = true; //F2
            if (abrirPesquisa) {
                //this.Consultar();
                this.ConsultarAPI();
            }
        }
    };
    return MouraTextBoxCPF;
}(MouraTextBox));
//# sourceMappingURL=MouraTextBoxCPF.js.map