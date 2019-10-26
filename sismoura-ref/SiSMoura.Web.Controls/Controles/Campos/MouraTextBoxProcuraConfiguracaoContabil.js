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
var MouraTextBoxProcuraConfiguracaoContabilPesquisandoEventArgs = /** @class */ (function (_super) {
    __extends(MouraTextBoxProcuraConfiguracaoContabilPesquisandoEventArgs, _super);
    function MouraTextBoxProcuraConfiguracaoContabilPesquisandoEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraTextBoxProcuraConfiguracaoContabilPesquisandoEventArgs;
}(MouraEventArgs));
var MouraTextBoxProcuraConfiguracaoContabil = /** @class */ (function (_super) {
    __extends(MouraTextBoxProcuraConfiguracaoContabil, _super);
    function MouraTextBoxProcuraConfiguracaoContabil(id) {
        var _this = _super.call(this, id) || this;
        if (!_this.PesquisandoContabil)
            _this.PesquisandoContabil = new MouraGenericEventHandler();
        $(_this.Textbox).addClass("displayNone");
        $(_this.TextBoxAdicional).removeClass("displayNone");
        return _this;
    }
    Object.defineProperty(MouraTextBoxProcuraConfiguracaoContabil.prototype, "PesquisandoContabil", {
        get: function () {
            return window[this.ID + '_PesquisandoContabil'];
        },
        set: function (value) {
            window[this.ID + '_PesquisandoContabil'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraConfiguracaoContabil.prototype, "hdnEmpresaContabil", {
        get: function () {
            return $("#" + this.ID + "_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraConfiguracaoContabil.prototype, "hdnComponenteEmpresaContabil", {
        get: function () {
            return $("#" + this.ID + "_hdnComponenteEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraConfiguracaoContabil.prototype, "EmpresaContabil", {
        get: function () {
            try {
                var retorno = 0;
                if (!String.IsNullOrWhiteSpace(this.ComponenteEmpresaContabil)) {
                    var comp = window[this.ComponenteEmpresaContabil + '_Object'];
                    if (!comp) {
                        MostrarAlerta("O componente de empresa não foi encontrado. Entre em contato com a Moura Informática!");
                    }
                    else {
                        if (comp.GetValue) {
                            retorno = comp.GetValue();
                        }
                    }
                }
                else {
                    if (this.hdnEmpresaContabil) {
                        retorno = this.hdnEmpresaContabil.value.CNum();
                    }
                }
                return retorno;
            }
            catch (ex) {
                LogarException(ex);
            }
        },
        set: function (value) {
            if (this.hdnEmpresaContabil) {
                this.hdnEmpresaContabil.value = "" + value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraConfiguracaoContabil.prototype, "ComponenteEmpresaContabil", {
        get: function () {
            if (this.hdnComponenteEmpresaContabil) {
                return this.hdnComponenteEmpresaContabil.value;
            }
            else {
                return "";
            }
        },
        set: function (value) {
            if (this.hdnComponenteEmpresaContabil) {
                this.hdnComponenteEmpresaContabil.value = "" + value;
            }
        },
        enumerable: true,
        configurable: true
    });
    MouraTextBoxProcuraConfiguracaoContabil.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.TextBoxAdicional) {
            adicionarEventoJQuery(this.TextBoxAdicional, "keydown", this.OnTextBoxProcuraConfiguracaoContabilKeyDown, this);
            adicionarEventoJQuery(this.TextBoxAdicional, "keypress", this.OnTextBoxProcuraConfiguracaoContabilKeyPress, this);
            adicionarEventoJQuery(this.TextBoxAdicional, "blur", this.OnTextBoxProcuraConfiguracaoContabilLostFocus, this);
            adicionarEventoJQuery(this.TextBoxAdicional, "focus", this.OnTextBoxProcuraConfiguracaoContabilGotFocus, this);
        }
        this.CarregarCampoAdicional();
    };
    MouraTextBoxProcuraConfiguracaoContabil.prototype.CarregarCampoAdicional = function () {
        if (!String.IsNullOrWhiteSpace(this.GetText())) {
            this.valorAnterior = "";
            this.Procurar(this.GetText());
        }
    };
    MouraTextBoxProcuraConfiguracaoContabil.prototype.OnProcurouProcura = function () {
        if (this.GetText().CNum() > 0) {
            this.SetTextAdicional(this.GetCodigoReduzido(this.GetText().CNum()));
            this.valorAdicionalAnterior = this.GetTextAdicional();
        }
        _super.prototype.OnProcurouProcura.call(this);
    };
    MouraTextBoxProcuraConfiguracaoContabil.prototype.OnPesquisandoProcura = function (retorno, evento) {
        _super.prototype.OnPesquisandoProcura.call(this, retorno, evento);
    };
    MouraTextBoxProcuraConfiguracaoContabil.prototype.OnTextBoxProcuraConfiguracaoContabilKeyPress = function (e) {
        var args = new MouraTextBoxProcuraKeyPressEventArgs();
        args.Cancelar = false;
        args.Tecla = getTeclaCodeEvent(e);
        args.JQueryKey = e;
        this.KeyPressProcura.FireEvent(this, args);
        if (args.Cancelar) {
            StopPropagationJQuery(e);
            return;
        }
        if (this.PermitirProcurar) {
            var abrirPesquisa = true;
            if (e.which >= 48 && e.which <= 57)
                abrirPesquisa = false; //Números
            if (e.charCode == 0)
                abrirPesquisa = false; //Teclas especiais **FIREFOX**;
            if (abrirPesquisa) {
                e.preventDefault();
                var valorPesquisa = "";
                if (e.which) {
                    valorPesquisa = String.fromCharCode(e.which);
                }
                else {
                    valorPesquisa = String.fromCharCode(e.keyCode);
                }
                this.abrirProcura(valorPesquisa);
            }
        }
        else {
            if (e.which < 48 || e.which > 57) {
                e.preventDefault();
            }
        }
    };
    MouraTextBoxProcuraConfiguracaoContabil.prototype.OnTextBoxProcuraConfiguracaoContabilKeyDown = function (e) {
        if (this.PermitirProcurar) {
            var abrirPesquisa = false;
            if (e.keyCode == 113)
                abrirPesquisa = true; //F2
            if (abrirPesquisa) {
                this.abrirProcura("");
            }
        }
    };
    MouraTextBoxProcuraConfiguracaoContabil.prototype.OnTextBoxProcuraConfiguracaoContabilLostFocus = function (e) {
        try {
            if (this.GetTextAdicional().CNum() <= 0) {
                this.Limpar();
                return;
            }
            if (this.valorAdicionalAnterior == this.GetTextAdicional()) {
                return;
            }
            var nomeCampo;
            if (!String.IsNullOrWhiteSpace(this.ComponenteEmpresaContabil)) {
                var comp = window[this.ComponenteEmpresaContabil + '_Object'];
                if (!comp) {
                    nomeCampo = "Empresa";
                }
                else {
                    nomeCampo = comp.GetTextLabelControl().replace("* ", "");
                }
            }
            else {
                nomeCampo = "Empresa";
            }
            var empresa = this.EmpresaContabil;
            if (empresa <= 0) {
                MostrarAlerta(nomeCampo + " não informada!");
                this.Limpar();
                return;
            }
            this.valorAdicionalAnterior = this.GetTextAdicional();
            var tipoConfiguracao;
            for (var i = 0; i < this.Parametros.length; i++) {
                if (this.Parametros[i].Key == "TipoConfiguracaoContabil") {
                    tipoConfiguracao = this.Parametros[i].Value;
                }
            }
            var codigo = this.GetCodigoContabil(this.GetTextAdicional().CNum(), empresa, tipoConfiguracao);
            var evento = new MouraTextBoxProcuraConfiguracaoContabilPesquisandoEventArgs();
            evento.CodigoRetorno = codigo.CNum();
            this.PesquisandoContabil.FireEvent(this, evento);
            if (!evento.Cancelar) {
                if (codigo.CNum() > 0) {
                    this.Procurar(codigo);
                }
                else {
                    MostrarAlerta("Registro não encontrado ou inativo");
                    this.Limpar();
                    $(this.TextBoxAdicional).focus();
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraTextBoxProcuraConfiguracaoContabil.prototype.OnTextBoxProcuraConfiguracaoContabilGotFocus = function () {
        this.valorAdicionalAnterior = this.GetTextAdicional();
    };
    MouraTextBoxProcuraConfiguracaoContabil.prototype.GetCodigoReduzido = function (id) {
        try {
            var retornoString;
            var retorno = "";
            var param = { id: id };
            retornoString = this.ExecutarHttpRequest("GetCodigoConfiguracaoReduzido", param);
            if (retornoString.CNum() > 0) {
                retorno = retornoString;
            }
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraTextBoxProcuraConfiguracaoContabil.prototype.GetCodigoContabil = function (reduzido, codEmpresa, tipoConfiguracao) {
        try {
            var retornoString;
            var retorno = "";
            var param = { reduzido: reduzido, codEmpresa: codEmpresa, tipoConfiguracao: tipoConfiguracao };
            retornoString = this.ExecutarHttpRequest("GetCodigoConfiguracaoContabil", param);
            if (retornoString.CNum() > 0) {
                retorno = retornoString;
            }
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return MouraTextBoxProcuraConfiguracaoContabil;
}(MouraTextBoxProcura));
//# sourceMappingURL=MouraTextBoxProcuraConfiguracaoContabil.js.map