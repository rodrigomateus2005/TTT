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
var MouraProcurouAnimalEventArgs = /** @class */ (function (_super) {
    __extends(MouraProcurouAnimalEventArgs, _super);
    function MouraProcurouAnimalEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraProcurouAnimalEventArgs;
}(MouraEventArgs));
var MouraProcurouProprietarioEventArgs = /** @class */ (function (_super) {
    __extends(MouraProcurouProprietarioEventArgs, _super);
    function MouraProcurouProprietarioEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraProcurouProprietarioEventArgs;
}(MouraEventArgs));
var MouraProcurouAnimalEventHandler = /** @class */ (function (_super) {
    __extends(MouraProcurouAnimalEventHandler, _super);
    function MouraProcurouAnimalEventHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraProcurouAnimalEventHandler;
}(MouraGenericEventHandler));
var MouraProcurouProprietarioEventHandler = /** @class */ (function (_super) {
    __extends(MouraProcurouProprietarioEventHandler, _super);
    function MouraProcurouProprietarioEventHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraProcurouProprietarioEventHandler;
}(MouraGenericEventHandler));
var MouraTextBoxProcuraProprietarioAnimal = /** @class */ (function (_super) {
    __extends(MouraTextBoxProcuraProprietarioAnimal, _super);
    function MouraTextBoxProcuraProprietarioAnimal(id) {
        var _this = _super.call(this, id) || this;
        _this.ProcurouAnimal = new MouraEventHandler();
        _this.PesquisandoAnimal = new MouraTextBoxProcuraPesquisandoEventHandler();
        _this.ProcurouProprietario = new MouraEventHandler();
        _this.PesquisandoProprietario = new MouraTextBoxProcuraPesquisandoEventHandler();
        return _this;
    }
    Object.defineProperty(MouraTextBoxProcuraProprietarioAnimal.prototype, "UsarAjax", {
        get: function () {
            return this.usarAjax;
        },
        set: function (value) {
            this.usarAjax = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraProprietarioAnimal.prototype, "SexoAnimal", {
        get: function () {
            return this.sexoAnimal;
        },
        set: function (value) {
            this.sexoAnimal = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraProprietarioAnimal.prototype, "TextBoxProprietario", {
        get: function () {
            return window[this.ID + "_TextBoxProprietario_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraProprietarioAnimal.prototype, "TextBoxAnimal", {
        get: function () {
            return window[this.ID + "_TextBoxAnimal_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraProprietarioAnimal.prototype, "TextBoxConvenio", {
        get: function () {
            return window[this.ID + "_TextBoxConvenio_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraProprietarioAnimal.prototype, "hdnExibirBotaoAgendamentos", {
        get: function () {
            return $("#" + this.ID + "_hdnExibirBotaoAgendamentos")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraProprietarioAnimal.prototype, "btnAgendamento", {
        get: function () {
            return window[this.ID + "_btnAgendamento_Botao"];
        },
        enumerable: true,
        configurable: true
    });
    MouraTextBoxProcuraProprietarioAnimal.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.TextBoxProprietario) {
            adicionarEventoMoura(this.TextBoxProprietario.Procurou, this.OnMouraTextBoxProcuraProprietarioProcurou, this);
            adicionarEventoMoura(this.TextBoxProprietario.AbriuProcura, this.OnMouraTextBoxProcuraProprietarioAbriuProcura, this);
            adicionarEventoMoura(this.TextBoxProprietario.Pesquisando, this.OnMouraTextBoxProcuraProprietarioPesquisando, this);
            adicionarEventoMoura(this.TextBoxProprietario.Limpou, this.OnMouraTextBoxProcuraProprietarioLimpou, this);
        }
        if (this.TextBoxAnimal) {
            adicionarEventoMoura(this.TextBoxAnimal.Pesquisando, this.OnMouraTextBoxProcuraAnimalPesquisando, this);
            adicionarEventoMoura(this.TextBoxAnimal.Procurou, this.OnMouraTextBoxProcuraAnimalProcurou, this);
            adicionarEventoMoura(this.TextBoxAnimal.ValidateMostrar, this.OnMouraTextBoxProcuraAnimalValidateMostrar, this);
        }
        this.AdicionarParametroSexo();
    };
    MouraTextBoxProcuraProprietarioAnimal.prototype.OnMouraTextBoxProcuraProprietarioPesquisando = function (s, ev) {
        this.PesquisandoProprietario.FireEvent(s, ev);
    };
    MouraTextBoxProcuraProprietarioAnimal.prototype.OnMouraTextBoxProcuraProprietarioAbriuProcura = function (s, ev) {
    };
    MouraTextBoxProcuraProprietarioAnimal.prototype.OnMouraTextBoxProcuraProprietarioProcurou = function (s, ev) {
        this.TextBoxAnimal.EsconderGradeTodos();
        this.TextBoxAnimal.LimparParametros();
        this.AdicionarParametroSexo();
        if (this.TextBoxProprietario.GetText().CNum() > 0) {
            this.TextBoxAnimal.AddParametro("proprietario", this.TextBoxProprietario.GetText());
            var mostrarGrade = true;
            if (this.TextBoxAnimal.GetText().CNum() > 0) {
                var retorno;
                var codigoAnimal;
                if ($("body").children().scope && $("body").children().scope() && !String.IsNullOrWhiteSpace(this.TextBoxAnimal.NgModel)) {
                    try {
                        codigoAnimal = eval("$('body').children().scope()." + this.TextBoxAnimal.NgModel);
                    }
                    catch (ex) {
                        LogarException(ex);
                    }
                }
                else {
                    codigoAnimal = this.TextBoxAnimal.GetText();
                }
                var parametros = {
                    codigoAnimal: codigoAnimal,
                    sexoAnimal: this.SexoAnimal
                };
                retorno = this.ExecutarHttpRequest("GetCodProprietarioByAnimal", parametros);
                if (retorno.CNum() != this.TextBoxProprietario.GetText().CNum()) {
                    this.TextBoxAnimal.Limpar();
                    if (this.TextBoxConvenio)
                        this.TextBoxConvenio.Limpar();
                }
                else {
                    mostrarGrade = false;
                }
            }
            if (mostrarGrade) {
                this.TextBoxAnimal.MostrarGradeTodos();
            }
            var parametros;
            var retorno;
            parametros = {
                codigoProprietario: this.TextBoxProprietario.GetText(),
            };
        }
        else {
            this.TextBoxAnimal.Limpar();
            if (this.TextBoxConvenio)
                this.TextBoxConvenio.Limpar();
        }
        this.ProcurouProprietario.FireEvent(this, new MouraEventArgs());
    };
    MouraTextBoxProcuraProprietarioAnimal.prototype.AdicionarParametroSexo = function () {
        if (this.SexoAnimal > 0) {
            if (this.SexoAnimal == 1) {
                this.TextBoxAnimal.AddParametro("sexo", "M");
            }
            else {
                this.TextBoxAnimal.AddParametro("sexo", "F");
            }
        }
    };
    MouraTextBoxProcuraProprietarioAnimal.prototype.OnMouraTextBoxProcuraProprietarioLimpou = function (s, ev) {
        this.TextBoxAnimal.EsconderGradeTodos();
        this.TextBoxAnimal.Limpar();
        if (this.TextBoxConvenio) {
            this.TextBoxConvenio.Limpar();
        }
    };
    MouraTextBoxProcuraProprietarioAnimal.prototype.OnMouraTextBoxProcuraAnimalPesquisando = function (s, ev) {
        this.PesquisandoAnimal.FireEvent(s, ev);
    };
    MouraTextBoxProcuraProprietarioAnimal.prototype.OnMouraTextBoxProcuraAnimalValidateMostrar = function (s, ev) {
        if (this.TextBoxProprietario.GetText().CNum() <= 0) {
            toastr.warning("Informe um proprietário");
            ev.Valido = false;
        }
    };
    MouraTextBoxProcuraProprietarioAnimal.prototype.Limpar = function () {
        //this.LimparParametros();
        if (this.TextBoxAnimal) {
            this.TextBoxAnimal.Limpar();
        }
        if (this.TextBoxProprietario) {
            this.TextBoxProprietario.Limpar();
        }
        if (this.TextBoxConvenio) {
            this.TextBoxConvenio.Limpar();
        }
    };
    MouraTextBoxProcuraProprietarioAnimal.prototype.LimparParametros = function () {
        if (this.TextBoxAnimal) {
            this.TextBoxAnimal.LimparParametros();
        }
        if (this.TextBoxProprietario) {
            this.TextBoxProprietario.LimparParametros();
        }
    };
    MouraTextBoxProcuraProprietarioAnimal.prototype.OnMouraTextBoxProcuraAnimalProcurou = function (s, ev) {
        var parametros;
        var retorno;
        var limparAnimal;
        parametros = {
            codigoAnimal: this.TextBoxAnimal.GetText(),
            sexoAnimal: this.SexoAnimal
        };
        retorno = this.ExecutarHttpRequest("GetCodProprietarioByAnimal", parametros);
        limparAnimal = false;
        if (this.TextBoxProprietario.GetText().CNum() > 0) {
            if (retorno.CNum() != this.TextBoxProprietario.GetText().CNum()) {
                limparAnimal = true;
                if (this.TextBoxAnimal.GetText().CNum() > 0)
                    MostrarAlerta("Esse animal não pertence ao proprietário informado");
            }
        }
        if (retorno.CNum() > 0 && !limparAnimal) {
            if (this.TextBoxProprietario.GetText().CNum() != retorno.CNum()) {
                pesquisarTextBoxProcura(this.TextBoxProprietario.Textbox, retorno, true);
                selecionarProximoFocus(this.TextBoxAnimal.Textbox);
            }
            var quantidadeAgendamentos;
            parametros = {
                codigoAnimal: this.TextBoxAnimal.GetText(),
            };
            if (this.btnAgendamento) {
                quantidadeAgendamentos = this.ExecutarHttpRequest("GetQuantidadeVacinasAgendas", parametros);
                if (quantidadeAgendamentos > 0) {
                    $("#" + this.btnAgendamento.name + "_I").removeClass("invisible");
                    this.hdnExibirBotaoAgendamentos.value = "1";
                }
            }
        }
        else {
            limparAnimal = true;
        }
        if (limparAnimal) {
            this.TextBoxAnimal.Limpar();
            if (this.btnAgendamento) {
                $("#" + this.btnAgendamento.name + "_I").addClass("invisible");
                this.hdnExibirBotaoAgendamentos.value = "0";
            }
            if (this.TextBoxConvenio)
                this.TextBoxConvenio.Limpar();
        }
        this.ProcurouAnimal.FireEvent(this, new MouraEventArgs());
    };
    return MouraTextBoxProcuraProprietarioAnimal;
}(MouraControl));
//# sourceMappingURL=MouraTextBoxProcuraProprietarioAnimal.js.map