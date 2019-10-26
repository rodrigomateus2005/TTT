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
var MouraProcurouObraEventArgs = /** @class */ (function (_super) {
    __extends(MouraProcurouObraEventArgs, _super);
    function MouraProcurouObraEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraProcurouObraEventArgs;
}(MouraEventArgs));
var MouraProcurouClienteEventArgs = /** @class */ (function (_super) {
    __extends(MouraProcurouClienteEventArgs, _super);
    function MouraProcurouClienteEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraProcurouClienteEventArgs;
}(MouraEventArgs));
var MouraProcurouObraEventHandler = /** @class */ (function (_super) {
    __extends(MouraProcurouObraEventHandler, _super);
    function MouraProcurouObraEventHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraProcurouObraEventHandler;
}(MouraGenericEventHandler));
var MouraProcurouClienteEventHandler = /** @class */ (function (_super) {
    __extends(MouraProcurouClienteEventHandler, _super);
    function MouraProcurouClienteEventHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraProcurouClienteEventHandler;
}(MouraGenericEventHandler));
var MouraTextBoxProcuraClienteObra = /** @class */ (function (_super) {
    __extends(MouraTextBoxProcuraClienteObra, _super);
    function MouraTextBoxProcuraClienteObra(id) {
        var _this = _super.call(this, id) || this;
        _this.ProcurouObra = new MouraEventHandler();
        _this.PesquisandoObra = new MouraTextBoxProcuraPesquisandoEventHandler();
        _this.ProcurouCliente = new MouraEventHandler();
        _this.PesquisandoCliente = new MouraTextBoxProcuraPesquisandoEventHandler();
        return _this;
    }
    Object.defineProperty(MouraTextBoxProcuraClienteObra.prototype, "UsarAjax", {
        get: function () {
            return this.usarAjax;
        },
        set: function (value) {
            this.usarAjax = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraClienteObra.prototype, "TextBoxCliente", {
        get: function () {
            return window[this.ID + "_TextBoxCliente_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraClienteObra.prototype, "TextBoxObra", {
        get: function () {
            return window[this.ID + "_TextBoxObra_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraClienteObra.prototype, "hdnExibirBotaoObras", {
        get: function () {
            return $("#" + this.ID + "_hdnExibirBotaoObras")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraClienteObra.prototype, "btnObra", {
        get: function () {
            return window[this.ID + "_btnObra_Botao"];
        },
        enumerable: true,
        configurable: true
    });
    MouraTextBoxProcuraClienteObra.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.TextBoxCliente) {
            adicionarEventoMoura(this.TextBoxCliente.Procurou, this.OnMouraTextBoxProcuraClienteProcurou, this);
            adicionarEventoMoura(this.TextBoxCliente.AbriuProcura, this.OnMouraTextBoxProcuraClienteAbriuProcura, this);
            adicionarEventoMoura(this.TextBoxCliente.Pesquisando, this.OnMouraTextBoxProcuraClientePesquisando, this);
            adicionarEventoMoura(this.TextBoxCliente.Limpou, this.OnMouraTextBoxProcuraClienteLimpou, this);
        }
        if (this.TextBoxObra) {
            adicionarEventoMoura(this.TextBoxObra.Pesquisando, this.OnMouraTextBoxProcuraObraPesquisando, this);
            adicionarEventoMoura(this.TextBoxObra.Procurou, this.OnMouraTextBoxProcuraObraProcurou, this);
            adicionarEventoMoura(this.TextBoxObra.ValidateMostrar, this.OnMouraTextBoxProcuraObraValidateMostrar, this);
        }
    };
    MouraTextBoxProcuraClienteObra.prototype.OnMouraTextBoxProcuraClientePesquisando = function (s, ev) {
        this.PesquisandoCliente.FireEvent(s, ev);
    };
    MouraTextBoxProcuraClienteObra.prototype.OnMouraTextBoxProcuraClienteAbriuProcura = function (s, ev) {
    };
    MouraTextBoxProcuraClienteObra.prototype.OnMouraTextBoxProcuraClienteProcurou = function (s, ev) {
        this.TextBoxObra.EsconderGradeTodos();
        this.TextBoxObra.LimparParametros();
        if (this.TextBoxCliente.GetText().CNum() > 0) {
            this.TextBoxObra.AddParametro("cliente", this.TextBoxCliente.GetText());
            var mostrarGrade = true;
            if (this.TextBoxObra.GetText().CNum() > 0) {
                var retorno;
                var codObra;
                if ($("body").children().scope && $("body").children().scope() && !String.IsNullOrWhiteSpace(this.TextBoxObra.NgModel)) {
                    try {
                        codObra = eval("$('body').children().scope()." + this.TextBoxObra.NgModel);
                    }
                    catch (ex) {
                        LogarException(ex);
                    }
                }
                else {
                    codObra = this.TextBoxObra.GetText();
                }
                var parametros = {
                    codObra: codObra
                };
                retorno = this.ExecutarHttpRequest("GetCodClienteByObra", parametros);
                if (retorno.CNum() != this.TextBoxCliente.GetText().CNum()) {
                    this.TextBoxObra.Limpar();
                }
                else {
                    mostrarGrade = false;
                }
            }
            if (mostrarGrade) {
                this.TextBoxObra.MostrarGradeTodos();
            }
            var parametros;
            var retorno;
            parametros = {
                codCliente: this.TextBoxCliente.GetText(),
            };
        }
        else {
            this.TextBoxObra.Limpar();
        }
        this.ProcurouCliente.FireEvent(this, new MouraEventArgs());
    };
    MouraTextBoxProcuraClienteObra.prototype.OnMouraTextBoxProcuraClienteLimpou = function (s, ev) {
        this.TextBoxObra.EsconderGradeTodos();
        this.TextBoxObra.Limpar();
    };
    MouraTextBoxProcuraClienteObra.prototype.OnMouraTextBoxProcuraObraPesquisando = function (s, ev) {
        this.PesquisandoObra.FireEvent(s, ev);
    };
    MouraTextBoxProcuraClienteObra.prototype.OnMouraTextBoxProcuraObraValidateMostrar = function (s, ev) {
        if (this.TextBoxCliente.GetText().CNum() <= 0) {
            toastr.warning("Informe um cliente");
            ev.Valido = false;
        }
    };
    MouraTextBoxProcuraClienteObra.prototype.Limpar = function () {
        if (this.TextBoxObra) {
            this.TextBoxObra.Limpar();
        }
        if (this.TextBoxCliente) {
            this.TextBoxCliente.Limpar();
        }
    };
    MouraTextBoxProcuraClienteObra.prototype.LimparParametros = function () {
        if (this.TextBoxObra) {
            this.TextBoxObra.LimparParametros();
        }
        if (this.TextBoxCliente) {
            this.TextBoxCliente.LimparParametros();
        }
    };
    MouraTextBoxProcuraClienteObra.prototype.OnMouraTextBoxProcuraObraProcurou = function (s, ev) {
        var parametros;
        var retorno;
        var limparObra;
        parametros = {
            codObra: this.TextBoxObra.GetText(),
        };
        retorno = this.ExecutarHttpRequest("GetCodClienteByObra", parametros);
        limparObra = false;
        if (this.TextBoxCliente.GetText().CNum() > 0) {
            if (retorno.CNum() != this.TextBoxCliente.GetText().CNum()) {
                limparObra = true;
                if (this.TextBoxObra.GetText().CNum() > 0)
                    MostrarAlerta("Essa obra não pertence ao cliente informado");
            }
        }
        if (retorno.CNum() > 0 && !limparObra) {
            if (this.TextBoxCliente.GetText().CNum() != retorno.CNum()) {
                pesquisarTextBoxProcura(this.TextBoxCliente.Textbox, retorno, true);
                selecionarProximoFocus(this.TextBoxObra.Textbox);
            }
            var quantidadeObras;
            parametros = {
                codCliente: this.TextBoxCliente.GetText(),
                inativo: 0
            };
            if (this.btnObra) {
                quantidadeObras = this.ExecutarHttpRequest("GetObras", parametros);
                if (quantidadeObras > 0) {
                    $("#" + this.btnObra.name + "_I").removeClass("invisible");
                    this.hdnExibirBotaoObras.value = "1";
                }
            }
        }
        else {
            limparObra = true;
        }
        if (limparObra) {
            this.TextBoxObra.Limpar();
            if (this.btnObra) {
                $("#" + this.btnObra.name + "_I").addClass("invisible");
                this.hdnExibirBotaoObras.value = "0";
            }
        }
        this.ProcurouObra.FireEvent(this, new MouraEventArgs());
    };
    return MouraTextBoxProcuraClienteObra;
}(MouraControl));
//# sourceMappingURL=MouraTextBoxProcuraClienteObra.js.map