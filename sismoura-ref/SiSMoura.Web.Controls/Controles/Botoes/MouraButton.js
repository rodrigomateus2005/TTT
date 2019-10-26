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
var MouraClickEventArgs = /** @class */ (function (_super) {
    __extends(MouraClickEventArgs, _super);
    function MouraClickEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraClickEventArgs;
}(MouraEventArgs));
var MouraButton = /** @class */ (function (_super) {
    __extends(MouraButton, _super);
    function MouraButton(id) {
        var _this = _super.call(this, id) || this;
        _this.Click = new MouraGenericEventHandler();
        return _this;
    }
    Object.defineProperty(MouraButton.prototype, "Botao", {
        //private get Botao(): HTMLButtonElement {
        //    return <HTMLButtonElement>window[this.ID + "_Botao"];
        //}
        get: function () {
            return window[this.ID + "_Botao"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraButton.prototype, "ClickBotao", {
        get: function () {
            return this._clickBotao;
        },
        set: function (value) {
            this._clickBotao = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraButton.prototype, "IdGridEditavel", {
        get: function () {
            return this._idGridEditavel;
        },
        set: function (value) {
            this._idGridEditavel = value;
        },
        enumerable: true,
        configurable: true
    });
    MouraButton.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        this.Text = this.Text;
        //if (this.Botao) {
        //    adicionarEventoJQuery(this.Botao, "click", this.OnClickValidar, this);
        //}
        if (this.Botao) {
            adicionarEventoDevExpress(this.Botao.Click, this.OnClickValidar, this);
        }
    };
    Object.defineProperty(MouraButton.prototype, "Text", {
        //public get Text(): string {
        //    if (!this.Botao) return "";
        //    return this.Botao.innerText;
        //}
        //public set Text(value: string) {
        //    if (!this.Botao) {
        //        return;
        //    }
        //    if (value) {
        //        value = value.GetString()
        //    }
        //    this.Botao.innerText = value;
        //}
        //public GetEnabled(): boolean {
        //    if (this.Botao) {
        //        return this.Botao.disabled;
        //    } else {
        //        return false;
        //    }
        //}
        //public SetEnabled(value: boolean) {
        //    if (this.Botao) {
        //        this.Botao.disabled = !value;
        //    }
        //}
        //public DoClick() {
        //    if (this.Botao) {
        //        this.Botao.click();
        //    }
        //}
        //public get Visible(): boolean {
        //    if (this.Botao) {
        //        return !this.Botao.hidden;
        //    } else {
        //        return false;
        //    }
        //}
        //public set Visible(value: boolean) {
        //    if (this.Botao) {
        //        this.Botao.hidden = !value;
        //    }
        //}
        //protected OnClickValidar(e: MouseEvent) {
        //    try {
        //        var abortarClick = (): boolean => {
        //            e.preventDefault();
        //            e.cancelBubble = true;
        //            return false;
        //        };
        //        if (!this.ValidarCamposObrigatorios()) {
        //            return abortarClick();
        //        }
        //        var ev = new MouraClickEventArgs();
        //        if (this.AutoPostBack) {
        //            ev.processOnServer = true;
        //        }
        //        if (this.ClickFromServer) {
        //            this.ClickFromServer(this, ev);
        //        }
        //        for (var x = 0; x < this.Click.Count(); x++) {
        //            if (!ev.cancelEventAndBubble) {
        //                this.Click.FireEvent(this, ev, x);
        //            } else {
        //                return abortarClick();
        //            }
        //        }
        //        if (ev.cancelEventAndBubble) {
        //            return abortarClick();
        //        }
        //        if (!String.IsNullOrWhiteSpace(this.ClickBotao)) {
        //            ev.processOnServer = false;
        //            eval(this.ClickBotao);
        //        }
        //        if (ev.processOnServer) {
        //            __doPostBack(this.AspUniqueId, "Click");
        //        }
        //        e.preventDefault();
        //    } catch (ex) {
        //        LogarException(ex);
        //        throw ex;
        //    }
        //}
        get: function () {
            if (!this.Botao)
                return "";
            return this.Botao.GetText();
        },
        set: function (value) {
            if (!this.Botao || !this.Botao.GetInternalButton()) {
                return;
            }
            if (value) {
                value = value.GetString();
            }
            this.Botao.SetText(value);
        },
        enumerable: true,
        configurable: true
    });
    MouraButton.prototype.GetEnabled = function () {
        if (this.Botao) {
            return this.Botao.GetEnabled();
        }
        else {
            return false;
        }
    };
    MouraButton.prototype.SetEnabled = function (value) {
        if (this.Botao) {
            this.Botao.SetEnabled(value);
        }
    };
    MouraButton.prototype.DoClick = function () {
        if (this.Botao) {
            this.Botao.DoClick();
        }
    };
    Object.defineProperty(MouraButton.prototype, "Visible", {
        get: function () {
            if (this.Botao) {
                return this.Botao.GetVisible();
            }
            else {
                return false;
            }
        },
        set: function (value) {
            if (this.Botao) {
                this.Botao.SetVisible(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    MouraButton.prototype.OnClickValidar = function (s, e) {
        try {
            var abortarClick = function () {
                e.processOnServer = false;
                e.cancelEventAndBubble = true;
                return false;
            };
            if (!this.ValidarCamposObrigatorios()) {
                return abortarClick();
            }
            var ev = new MouraClickEventArgs();
            if (this.AutoPostBack) {
                ev.processOnServer = true;
            }
            if (this.ClickFromServer) {
                this.ClickFromServer(this, ev);
            }
            for (var x = 0; x < this.Click.Count(); x++) {
                if (!ev.cancelEventAndBubble) {
                    this.Click.FireEvent(this, ev, x);
                }
                else {
                    return abortarClick();
                }
            }
            if (ev.cancelEventAndBubble) {
                return abortarClick();
            }
            if (!String.IsNullOrWhiteSpace(this.ClickBotao)) {
                ev.processOnServer = false;
                eval(this.ClickBotao);
            }
            if (ev.processOnServer) {
                __doPostBack(this.AspUniqueId, "Click");
            }
            ev.processOnServer = false;
        }
        catch (ex) {
            LogarException(ex);
            throw ex;
        }
    };
    MouraButton.prototype.ValidarCamposObrigatorios = function () {
        try {
            var campos = $("[moura-campo]");
            var mensagem = "";
            for (var x = 0; x < campos.length; x++) {
                var campoObject = window[$(campos[x]).attr("id") + "_Object"];
                if (campoObject) {
                    if ((campoObject.Obrigatorio || campoObject.ObrigatorioUsuario) && (campoObject.ComponenteValidacao && (campoObject.ComponenteValidacao == this.ID || campoObject.ComponenteValidacao == this.IdGridEditavel))) {
                        if (!campoObject.IsValido() && campoObject.VisibleInicial) {
                            if (!String.IsNullOrWhiteSpace(mensagem)) {
                                mensagem += "<br/>";
                            }
                            if (campoObject.LabelControl) {
                                mensagem += "Preencha o campo corretamente: " + this.TratarManesagemLabel(campoObject.LabelControl.innerText);
                            }
                            else {
                                mensagem += "Preencha o campo corretamente: " + this.TratarManesagemLabel(campoObject.ID);
                            }
                        }
                    }
                }
            }
            if (!String.IsNullOrWhiteSpace(mensagem)) {
                MostrarAlerta(mensagem);
                return false;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return true;
    };
    MouraButton.prototype.TratarManesagemLabel = function (mensagem) {
        if (String.IsNullOrWhiteSpace(mensagem)) {
            mensagem = "";
        }
        return replaceAll(replaceAll(mensagem, '*', ''), '(F2)', '');
    };
    return MouraButton;
}(MouraControl));
//# sourceMappingURL=MouraButton.js.map