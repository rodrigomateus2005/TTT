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
var MouraTextBoxProcuraPesquisandoEventArgs = /** @class */ (function (_super) {
    __extends(MouraTextBoxProcuraPesquisandoEventArgs, _super);
    function MouraTextBoxProcuraPesquisandoEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraTextBoxProcuraPesquisandoEventArgs;
}(MouraEventArgs));
var MouraTextBoxProcuraPesquisandoEventHandler = /** @class */ (function (_super) {
    __extends(MouraTextBoxProcuraPesquisandoEventHandler, _super);
    function MouraTextBoxProcuraPesquisandoEventHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraTextBoxProcuraPesquisandoEventHandler;
}(MouraGenericEventHandler));
var MouraTextBoxProcuraValidateMostrarEventArgs = /** @class */ (function (_super) {
    __extends(MouraTextBoxProcuraValidateMostrarEventArgs, _super);
    function MouraTextBoxProcuraValidateMostrarEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraTextBoxProcuraValidateMostrarEventArgs;
}(MouraEventArgs));
var MouraTextBoxProcuraValidateMostrarEventHandler = /** @class */ (function (_super) {
    __extends(MouraTextBoxProcuraValidateMostrarEventHandler, _super);
    function MouraTextBoxProcuraValidateMostrarEventHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraTextBoxProcuraValidateMostrarEventHandler;
}(MouraGenericEventHandler));
var MouraTextBoxProcuraRetornoProcura = /** @class */ (function () {
    function MouraTextBoxProcuraRetornoProcura() {
    }
    return MouraTextBoxProcuraRetornoProcura;
}());
var ParametroProcura = /** @class */ (function () {
    function ParametroProcura() {
    }
    return ParametroProcura;
}());
var MouraTextBoxProcuraKeyPressEventArgs = /** @class */ (function (_super) {
    __extends(MouraTextBoxProcuraKeyPressEventArgs, _super);
    function MouraTextBoxProcuraKeyPressEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraTextBoxProcuraKeyPressEventArgs;
}(MouraEventArgs));
var MouraTextBoxProcuraAntesAbrirProcuraEventArgs = /** @class */ (function (_super) {
    __extends(MouraTextBoxProcuraAntesAbrirProcuraEventArgs, _super);
    function MouraTextBoxProcuraAntesAbrirProcuraEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraTextBoxProcuraAntesAbrirProcuraEventArgs;
}(MouraEventArgs));
var MouraTextBoxProcura = /** @class */ (function (_super) {
    __extends(MouraTextBoxProcura, _super);
    function MouraTextBoxProcura(id) {
        var _this = _super.call(this, id) || this;
        _this.idModalProcura = 'mdProcura';
        _this.idModalProcuraModal = 'mdProcura_Modal';
        _this.intervalMostrar = 0;
        if (!_this.Procurou)
            _this.Procurou = new MouraEventHandler();
        if (!_this.AbriuProcura)
            _this.AbriuProcura = new MouraEventHandler();
        if (!_this.Pesquisando)
            _this.Pesquisando = new MouraTextBoxProcuraPesquisandoEventHandler();
        if (!_this.ValidateMostrar)
            _this.ValidateMostrar = new MouraTextBoxProcuraValidateMostrarEventHandler();
        if (!_this.KeyPressProcura)
            _this.KeyPressProcura = new MouraGenericEventHandler();
        if (!_this.AntesAbrirProcura)
            _this.AntesAbrirProcura = new MouraGenericEventHandler();
        if (!_this.Limpou)
            _this.Limpou = new MouraEventHandler();
        adicionarEventoMoura(_this.Procurou, _this.OnThisProcurou, _this);
        return _this;
    }
    Object.defineProperty(MouraTextBoxProcura.prototype, "Procurou", {
        //public Procurou: MouraEventHandler;
        get: function () {
            return window[this.ID + '_Procurou'];
        },
        set: function (value) {
            window[this.ID + '_Procurou'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "AbriuProcura", {
        get: function () {
            return window[this.ID + '_AbriuProcura'];
        },
        set: function (value) {
            window[this.ID + '_AbriuProcura'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "Pesquisando", {
        get: function () {
            return window[this.ID + '_Pesquisando'];
        },
        set: function (value) {
            window[this.ID + '_Pesquisando'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "ValidateMostrar", {
        get: function () {
            return window[this.ID + '_ValidateMostrar'];
        },
        set: function (value) {
            window[this.ID + '_ValidateMostrar'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "KeyPressProcura", {
        get: function () {
            return window[this.ID + '_KeyPressProcura'];
        },
        set: function (value) {
            window[this.ID + '_KeyPressProcura'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "AntesAbrirProcura", {
        get: function () {
            return window[this.ID + '_AntesAbrirProcura'];
        },
        set: function (value) {
            window[this.ID + '_AntesAbrirProcura'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "Limpou", {
        get: function () {
            return window[this.ID + '_Limpou'];
        },
        set: function (value) {
            window[this.ID + '_Limpou'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "divTextBox", {
        get: function () {
            return $("#" + this.ID + "_divTextBox");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "TextBoxAdicional", {
        get: function () {
            return $("#" + this.ID + "_TextBoxAdicional")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "dlgTelaModal", {
        //Dialog de tela modal é comum para todas as procuras da tela
        get: function () {
            return window['dlgTelaModal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "valorAnterior", {
        //private valorAnterior: string;
        get: function () {
            if (this.hdnValorAnterior) {
                return this.hdnValorAnterior.value;
            }
            else {
                return null;
            }
        },
        set: function (value) {
            if (this.hdnValorAnterior) {
                this.hdnValorAnterior.value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "valorAdicionalAnterior", {
        get: function () {
            if (this.hdnValorAdicionalAnterior) {
                return this.hdnValorAdicionalAnterior.value;
            }
            else {
                return "";
            }
        },
        set: function (value) {
            if (this.hdnValorAdicionalAnterior) {
                this.hdnValorAdicionalAnterior.value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "Campos", {
        get: function () {
            return this.campos;
        },
        set: function (campos) {
            this.campos = campos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "IdCallbacksExecutar", {
        get: function () {
            return this.idCallbacksExecutar;
        },
        set: function (value) {
            this.idCallbacksExecutar = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "PermitirProcurar", {
        get: function () {
            return this.permitirProcurar;
        },
        set: function (value) {
            var imagem = $("#" + this.ID + "_ImagemPesquisar").get(0);
            if (imagem) {
                if (value) {
                    imagem.style.visibility = "visible";
                }
                else {
                    imagem.style.visibility = "hidden";
                }
            }
            this.permitirProcurar = value;
            this.SetTextLabelControl(this.GetTextLabelControl());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "PermitirInexistente", {
        get: function () {
            //return this.permitirInexistente;
            return window[this.ID + "_permitirInexistente"];
        },
        set: function (value) {
            //this.permitirInexistente = value;
            window[this.ID + "_permitirInexistente"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "UsarAjax", {
        get: function () {
            return this.usarAjax;
        },
        set: function (value) {
            this.usarAjax = value;
            //if (value && this.Combo) (<any>this.Combo).autoPostBack = false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "SomenteAtivos", {
        get: function () {
            return this.somenteAtivos;
        },
        set: function (value) {
            this.somenteAtivos = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "ExecutarDepoisAjax", {
        get: function () {
            return this.executarDepoisAjax;
        },
        set: function (value) {
            this.executarDepoisAjax = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "Engine", {
        get: function () {
            return this.engine;
        },
        set: function (value) {
            this.engine = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "URLCadastro", {
        get: function () {
            return this.urlCadastro;
        },
        set: function (value) {
            this.urlCadastro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "Disabled", {
        get: function () {
            if (this.Textbox) {
                return this.Textbox.disabled;
            }
            else {
                return false;
            }
        },
        set: function (disabled) {
            if (this.divTextBox) {
                if (disabled) {
                    this.divTextBox.addClass("disabledDiv");
                }
                else {
                    this.divTextBox.removeClass("disabledDiv");
                }
            }
            if (this.Textbox) {
                this.Textbox.disabled = disabled;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "IndexSelecionarGrade", {
        get: function () {
            return this.hdnIndexSelecionarGrade.value.CNum();
        },
        set: function (value) {
            this.hdnIndexSelecionarGrade.value = "" + value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "NgModel", {
        get: function () {
            return $(this.Textbox).attr("ng-model");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "Parametros", {
        get: function () {
            var retorno;
            retorno = [];
            if (this.hdnParametros) {
                try {
                    retorno = JSON.parse(replaceAll(this.hdnParametros.value, "'", '"'));
                }
                catch (ex) {
                    this.hdnParametros.value = '[]';
                }
            }
            return retorno;
        },
        enumerable: true,
        configurable: true
    });
    MouraTextBoxProcura.prototype.AddParametro = function (key, value) {
        var aux = this.Parametros;
        var encontrou = false;
        if (aux) {
            for (var x = 0; x <= aux.length - 1; x++) {
                if (aux[x].Key == key) {
                    aux[x].Value = value;
                    encontrou = true;
                }
            }
        }
        if (!encontrou) {
            var parametro = new ParametroProcura();
            parametro.Key = key;
            parametro.Value = value;
            aux.push(parametro);
        }
        if (this.hdnParametros) {
            this.hdnParametros.value = JSON.stringify(aux).split('"').join("'");
        }
    };
    MouraTextBoxProcura.prototype.LimparParametros = function () {
        if (this.hdnParametros) {
            this.hdnParametros.value = JSON.stringify([]);
        }
    };
    MouraTextBoxProcura.prototype.GetTextAdicional = function () {
        return this.TextBoxAdicional.value;
    };
    MouraTextBoxProcura.prototype.SetTextAdicional = function (value) {
        if (this.TextBoxAdicional) {
            this.TextBoxAdicional.value = value;
        }
    };
    Object.defineProperty(MouraTextBoxProcura.prototype, "LabelResultado", {
        //get Combo(): DevExpress.Web.Scripts.ASPxClientComboBox {
        //    return <DevExpress.Web.Scripts.ASPxClientComboBox> window[this.ID + "_TextBox_combo"];
        //}
        get: function () {
            return $("#" + this.ID + "_LabelResultado")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "hdnValorDigitado", {
        get: function () {
            return $("#" + this.ID + "_hdnValorDigitado")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "hdnValorAntigo", {
        get: function () {
            return $("#" + this.ID + "_hdnValorAntigo")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "hdnIndexSelecionarGrade", {
        get: function () {
            return $("#" + this.ID + "_TextBox_combo_Index")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "hdnValorAnterior", {
        get: function () {
            return $("#" + this.ID + "_hdnValorAnterior")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "hdnValorAdicionalAnterior", {
        get: function () {
            return $("#" + this.ID + "_hdnValorAdicionalAnterior")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "hdnUsarComboEmpresa", {
        get: function () {
            return $("#" + this.ID + "_hdnUsarComboEmpresa")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "hdnExibirCheckInativo", {
        get: function () {
            return $("#" + this.ID + "_hdnExibirCheckInativo")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "hdnExibirInformacoesAdicionais", {
        get: function () {
            return $("#" + this.ID + "_hdnExibirInformacoesAdicionais")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "hdnSomenteAtivos", {
        get: function () {
            return $("#" + this.ID + "_hdnSomenteAtivos")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "hdnLabelResultadoText", {
        get: function () {
            return $("#" + this.ID + "_hdnLabelResultadoText")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "UsarComboEmpresa", {
        get: function () {
            if (this.hdnUsarComboEmpresa) {
                if (this.hdnUsarComboEmpresa.value == 'S')
                    return true;
                else
                    return false;
            }
            else {
                return false;
            }
        },
        set: function (value) {
            if (this.hdnUsarComboEmpresa) {
                if (value == true)
                    this.hdnUsarComboEmpresa.value = 'S';
                else
                    this.hdnUsarComboEmpresa.value = 'N';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "ExibirCheckBoxInativo", {
        get: function () {
            if (this.hdnExibirCheckInativo) {
                if (this.hdnExibirCheckInativo.value == 'S')
                    return true;
                else
                    return false;
            }
            else {
                return false;
            }
        },
        set: function (value) {
            if (this.hdnExibirCheckInativo) {
                if (value == true)
                    this.hdnExibirCheckInativo.value = 'S';
                else
                    this.hdnExibirCheckInativo.value = 'N';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "ExibirInformacoesAdicionais", {
        get: function () {
            if (this.hdnExibirInformacoesAdicionais) {
                if (this.hdnExibirInformacoesAdicionais.value == 'S')
                    return true;
                else
                    return false;
            }
            else {
                return false;
            }
        },
        set: function (value) {
            if (this.hdnExibirInformacoesAdicionais) {
                if (value == true)
                    this.hdnExibirInformacoesAdicionais.value = 'S';
                else
                    this.hdnExibirInformacoesAdicionais.value = 'N';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "hdnScriptExecutarDepoisEndCallback", {
        get: function () {
            return $("#" + this.ID + "_hdnScriptExecutarDepoisEndCallback")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "hdnParametros", {
        get: function () {
            return $("#" + this.ID + "_hdnParametros")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "divGrid", {
        get: function () {
            return $("#" + this.ID + "_divGrid")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "grdProcura", {
        get: function () {
            return window[this.ID + "_grdProcura_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "tbGrid", {
        get: function () {
            return $("#" + this.ID + "_tbGrid");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "divFull", {
        get: function () {
            return $("#" + this.ID + "_divFull");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "BotaoMostrarGridProcura", {
        get: function () {
            return window[this.ID + "_BotaoMostrarGridProcura"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "lblCarregandoGrid", {
        get: function () {
            return $("#" + this.ID + "_lblCarregandoGrid")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "BotaoNovo", {
        get: function () {
            return window[this.ID + "_BotaoNovo"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcura.prototype, "BotaoCadastro", {
        get: function () {
            return window[this.ID + "_BotaoCadastro"];
        },
        enumerable: true,
        configurable: true
    });
    MouraTextBoxProcura.prototype.isSomenteAtivosProcura = function () {
        return this.SomenteAtivos;
    };
    MouraTextBoxProcura.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.Textbox) {
            adicionarEventoJQuery(this.Textbox, "keydown", this.OnTextBoxProcuraKeyDown, this);
            adicionarEventoJQuery(this.Textbox, "keypress", this.OnTextBoxProcuraKeyPress, this);
            adicionarEventoJQuery(this.Textbox, "blur", this.OnTextBoxProcuraLostFocus, this);
            adicionarEventoJQuery(this.Textbox, "focus", this.OnTextBoxProcuraGotFocus, this);
        }
        if (this.CallBackPanel) {
            adicionarEventoDevExpress(this.CallBackPanel.EndCallback, this.OnCallbackProcuraEndCallback, this);
        }
        if (this.grdProcura) {
            adicionarEventoMoura(this.grdProcura.CellClick, this.OnCellClickJS, this);
            adicionarEventoMoura(this.grdProcura.KeyDown, this.OnKeyDownGridJS, this);
            var elemento = this.grdProcura.tbMainJQuery;
            elemento.attr("tabindex", "-1");
            elemento.css("margin-top", "0");
            adicionarEventoJQuery(elemento, "blur", this.OnTableGridLostFocus, this);
        }
        if (this.divFull) {
            adicionarEventoJQuery(this.divFull, "click", this.OnClickDivFull, this);
        }
        if (this.LabelResultado) {
            if (this.ExibirInformacoesAdicionais) {
                adicionarEventoJQuery(this.LabelResultado, "click", this.OnClickLabelResultado, this);
                $(this.LabelResultado).addClass("labelResultadoInformacoesAdicionais");
            }
        }
        if (this.BotaoMostrarGridProcura) {
            adicionarEventoDevExpress(this.BotaoMostrarGridProcura.Click, this.OnBotaoMostrarGridClick, this);
        }
        if (this.BotaoCadastro) {
            adicionarEventoDevExpress(this.BotaoCadastro.Click, this.OnClickBotaoCadastro, this);
        }
    };
    MouraTextBoxProcura.prototype.GetText = function () {
        if (this.Textbox) {
            return this.Textbox.value;
        }
        else {
            return "";
        }
    };
    MouraTextBoxProcura.prototype.SetText = function (valor) {
        if (this.Textbox) {
            this.Textbox.value = valor;
        }
    };
    MouraTextBoxProcura.prototype.GetResultado = function () {
        if (this.LabelResultado) {
            return this.LabelResultado.innerText;
        }
        else {
            return "";
        }
    };
    MouraTextBoxProcura.prototype.MostrarInformacoesAdicionais = function () {
        if (this.ExibirInformacoesAdicionais) {
            this.OnClickLabelResultado();
        }
    };
    MouraTextBoxProcura.prototype.Limpar = function () {
        var valorDigitado = this.GetText();
        this.LimparInterno();
        if (valorDigitado != "") {
            this.Procurou.FireEvent(this, new MouraEventArgs());
        }
    };
    MouraTextBoxProcura.prototype.LimparInterno = function () {
        this.SetText("");
        this.SetTextAdicional("");
        if (this.LabelResultado)
            this.LabelResultado.innerText = "";
        if (this.hdnLabelResultadoText)
            this.hdnLabelResultadoText.value = "";
        if (this.hdnValorAnterior)
            this.hdnValorAntigo.value = "";
        this.valorAdicionalAnterior = "";
        this.valorAnterior = "";
        this.Limpou.FireEvent(this, new MouraEventArgs());
        AtualizarModelAngular(this.Textbox);
    };
    MouraTextBoxProcura.prototype.Procurar = function (codigo) {
        if (this.GetText() != codigo) {
            this.SetText(codigo);
        }
        if (this.UsarAjax) {
            this.ExecutarAjaxProcura();
        }
        else if (this.UsarCallBack) {
            this.ExecutarCallBackProcura();
        }
    };
    MouraTextBoxProcura.prototype.ExecutarCallBackProcura = function () {
        var id = this.GetText().CNum();
        if (this.GetText() != '') {
            if (this.GetText().indexOf(';') <= -1) {
                if (isNaN(id)) {
                    return;
                }
            }
            else {
                id = this.GetText().split(';')[0].CNum();
                this.SetText(id.toString());
            }
        }
        if (this.GetText() != this.hdnValorAntigo.value) {
            this.hdnValorAntigo.value = '';
            this.SetText('');
            this.CallBackPanel.PerformCallback(id.toString());
        }
    };
    MouraTextBoxProcura.prototype.ExecutarAjaxProcura = function () {
        if ((this.GetText() == this.valorAnterior) || (this.GetText() == "" && this.PermitirInexistente)) {
            return;
        }
        if (this.GetText() == "") {
            this.LimparInterno();
        }
        else {
            var retorno = MouraTextBoxProcura.GetByIdProcura(this.GetText(), this.Engine, this.somenteAtivos);
            var evento = new MouraTextBoxProcuraPesquisandoEventArgs();
            this.OnPesquisandoProcura(retorno, evento);
            if (evento.Valido) {
                if (!retorno && !this.PermitirInexistente) {
                    this.LimparInterno();
                    //toastr.warning("Registro não encontrado ou inativo");
                    this.RegistroInexistente();
                    this.Focus();
                }
                else {
                    var resultLabel;
                    var resultCodigo;
                    if (retorno) {
                        resultCodigo = retorno.Codigo;
                        resultLabel = retorno.Descricao;
                    }
                    else {
                        resultCodigo = this.GetText();
                        resultLabel = "";
                    }
                    if (this.LabelResultado)
                        this.LabelResultado.innerText = resultLabel;
                    if (this.hdnLabelResultadoText)
                        this.hdnLabelResultadoText.value = resultLabel;
                    this.SetText(resultCodigo);
                    this.valorAnterior = this.GetText();
                    AtualizarModelAngular(this.Textbox);
                }
            }
            else {
                this.LimparInterno();
            }
        }
        this.EsconderGradeTodos();
        this.OnProcurouProcura();
    };
    MouraTextBoxProcura.prototype.RegistroInexistente = function () {
        var label;
        label = this.GetTextLabelControl().replace(" (F2)", "");
        label = label.replace("* ", "");
        label = label.replace("*", "");
        if (label == "" || label.toLowerCase().ConverterCaracter() == "codigo") {
            toastr.warning("Registro não encontrado ou inativo");
        }
        else {
            toastr.warning(label + " não encontrado(a) ou inativo(a)");
        }
    };
    MouraTextBoxProcura.prototype.OnProcurouProcura = function () {
        this.Procurou.FireEvent(this, new MouraEventArgs());
    };
    MouraTextBoxProcura.prototype.OnPesquisandoProcura = function (retorno, evento) {
        evento.Valido = true;
        evento.Retorno = retorno;
        evento.Valor = this.GetText();
        this.Pesquisando.FireEvent(this, evento);
    };
    MouraTextBoxProcura.prototype.GetByIdProcura = function (id) {
        return MouraTextBoxProcura.GetByIdProcura(id, this.Engine, this.somenteAtivos);
    };
    MouraTextBoxProcura.GetByIdProcura = function (id, engine, somenteAtivos) {
        try {
            var retorno = null;
            var retornoString;
            var retornoArray;
            var param = { id: id, engine: engine, somenteAtivos: somenteAtivos };
            retornoString = this.ExecutarHttpRequest("GetByIdProcura", param);
            if (!String.IsNullOrWhiteSpace(retornoString)) {
                retorno = new MouraTextBoxProcuraRetornoProcura;
                retornoArray = retornoString.split("|");
                retorno.Codigo = retornoArray[0];
                retorno.Descricao = retornoArray[1];
            }
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraTextBoxProcura.prototype.MostrarGradeTodosTimer = function () {
        if (this.IsGradeTodosAparecendo())
            return;
        if (this.intervalMostrar == 0) {
            this.intervalMostrar = setInterval($.proxy(this.MostrarGradeTodos, this), 100);
        }
    };
    MouraTextBoxProcura.prototype.MostrarGradeTodos = function () {
        try {
            $(this.divGrid).show();
            $(this.divGrid).css("top", $(this.Textbox).position().top + 1 + $(this.Textbox).outerHeight());
            $(this.divGrid).css("left", $(this.Textbox).position().left);
            $(this.divGrid).css("z-index", "10");
            $(this.divGrid).css("background-color", "white");
            this.divFull.css("z-index", "9");
            this.divFull.css("position", "fixed");
            this.divFull.css("top", "0");
            this.divFull.css("left", "0");
            this.divFull.css("width", "100%");
            this.divFull.css("height", "100%");
            this.divFull.show();
            $(this.lblCarregandoGrid).show();
            $(this.lblCarregandoGrid).css("font-weight", "bolder");
            $(this.lblCarregandoGrid).css("font-size", "larger");
            $(this.lblCarregandoGrid).css("display", "block");
            $(this.lblCarregandoGrid).css("text-align", "center");
            $(this.lblCarregandoGrid).css("height", "100px");
            $(this.lblCarregandoGrid).css("border", "solid 1px");
            var param = {
                engine: this.Engine,
                hdnParametros: this.hdnParametros.value,
                somenteAtivos: (this.isSomenteAtivosProcura() ? "S" : "N"),
            };
            this.ExecutarHttpRequestAsync("PreencherGridProcuraResumida", param, this.OnPesquisouGradeResumida, this.OnPesquisouErro, this);
            this.grdProcura.tbMainJQuery.hide();
            //this.grdProcura.SetVisible(false);
            if (this.IsGradeTodosAparecendo) {
                clearInterval(this.intervalMostrar);
                this.intervalMostrar = 0;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraTextBoxProcura.prototype.EsconderGradeTodos = function () {
        this.divFull.hide();
        $(this.divGrid).hide();
        if (this.intervalMostrar != 0) {
            clearInterval(this.intervalMostrar);
            this.intervalMostrar = 0;
        }
    };
    MouraTextBoxProcura.prototype.IsGradeTodosAparecendo = function () {
        return $(this.divGrid).is(":visible");
    };
    MouraTextBoxProcura.prototype.OnTextboxCallbackPanelEndCallBack = function (s, e) {
        if (this.UsarCallBack) {
            selecionarIndex(s);
        }
    };
    MouraTextBoxProcura.prototype.OnThisProcurou = function (s, e) {
        if (this.IdCallbacksExecutar && this.IdCallbacksExecutar != null) {
            for (var x = 0; x < this.idCallbacksExecutar.length; x++) {
                window[this.idCallbacksExecutar[x]].PerformCallback(this.GetText());
            }
        }
    };
    MouraTextBoxProcura.prototype.OnTextBoxProcuraKeyDown = function (e) {
        if (this.PermitirProcurar) {
            var abrirPesquisa = false;
            if (e.keyCode == 113)
                abrirPesquisa = true; //F2
            if (abrirPesquisa) {
                this.abrirProcura("");
            }
        }
    };
    MouraTextBoxProcura.prototype.abrirProcura = function (valorTextoProcura) {
        $("#" + this.ID + "_ImagemPesquisar").get(0).click();
        $("#" + this.idModalProcuraModal + "_Descricao_Agrupamento_Painel").find("input[type=text]").first().focus();
        if (!String.IsNullOrWhiteSpace(valorTextoProcura)) {
            $("#" + this.idModalProcuraModal + " .campos").find("input[type=text]").first().val(valorTextoProcura);
        }
        this.AbriuProcura.FireEvent(this, new MouraEventArgs());
    };
    MouraTextBoxProcura.prototype.abrirModal = function (modal, ComboClientID, UsarCallBackPanel) {
        var event;
        event = {};
        event.Cancelar = false;
        this.AntesAbrirProcura.FireEvent(this, event);
        if (event.Cancelar) {
            return;
        }
        modal.CriouColunas = false;
        modal.hdnParametrosProcura.value = this.hdnParametros.value;
        modal.UsarComboEmpresa = this.UsarComboEmpresa;
        modal.ExibirCheckBoxInativo = this.ExibirCheckBoxInativo;
        modal.SomenteAtivos = this.SomenteAtivos;
        modal.UsarCallBackPanel = UsarCallBackPanel;
        modal.hdnComboClientID.value = ComboClientID;
        modal.Campos = this.campos;
        modal.Abrir(this.engine);
    };
    MouraTextBoxProcura.prototype.OnTextBoxProcuraKeyPress = function (e) {
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
                //(<HTMLImageElement> $("#" + this.ID + "_ImagemPesquisar").get(0)).click();
                //$("#" + this.idModalProcuraModal + "_Descricao_Agrupamento_Painel").find("input[type=text]").first().focus();
                //if (e.which) {
                //    $("#" + this.idModalProcuraModal + " .campos").find("input[type=text]").first().val(String.fromCharCode(e.which))
                //} else {
                //    $("#" + this.idModalProcuraModal + " .campos").find("input[type=text]").first().val(String.fromCharCode(e.keyCode))
                //}
                //this.AbriuProcura.FireEvent(this, new MouraEventArgs());
                var valorProcura = "";
                if (e.which) {
                    valorProcura = String.fromCharCode(e.which);
                }
                else {
                    valorProcura = String.fromCharCode(e.keyCode);
                }
                this.abrirProcura(valorProcura);
            }
        }
        else {
            if (e.which < 48 || e.which > 57) {
                e.preventDefault();
            }
        }
    };
    MouraTextBoxProcura.prototype.OnTextBoxProcuraLostFocus = function (e) {
        this.Procurar(this.GetText());
    };
    MouraTextBoxProcura.prototype.OnCallbackProcuraEndCallback = function (s, e) {
        if (this.GetText() == '' && this.hdnValorDigitado.value.CNum() > 0) {
            this.Focus();
            //toastr.warning('Registro não encontrado ou inativo');
            this.RegistroInexistente();
        }
        if (this.hdnScriptExecutarDepoisEndCallback.value != '') {
            eval(this.hdnScriptExecutarDepoisEndCallback.value);
        }
        this.Procurou.FireEvent(this, new MouraEventArgs());
    };
    MouraTextBoxProcura.prototype.OnTextBoxProcuraGotFocus = function (s, e) {
        this.valorAnterior = this.GetText();
    };
    //protected OnTextBoxProcuraEndCallBack(s: DevExpress.Web.Scripts.ASPxClientComboBox, e: any) {
    //    this.Procurou.FireEvent(this, new MouraEventArgs());
    //}
    MouraTextBoxProcura.prototype.OnPesquisouGradeResumida = function (retorno) {
        try {
            var resultado = null;
            var retornoString;
            retornoString = retorno;
            if (!String.IsNullOrWhiteSpace(retornoString)) {
                resultado = JSON.parse(retornoString);
                if (resultado) {
                    //Preencher grade
                    this.grdProcura.PreencherGrid(resultado);
                    $(this.lblCarregandoGrid).hide();
                    this.grdProcura.tbMainJQuery.show();
                    try {
                        setTimeout($.proxy(function () {
                            this.grdProcura.Focus(0, 0);
                        }, this), 200);
                    }
                    catch (ex2) {
                    }
                }
                if (this.grdProcura.VisibleRowsCount() <= 0) {
                    //$(".campos").find("input")[0].focus()
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraTextBoxProcura.prototype.OnPesquisouErro = function (erro) {
        LogarExceptionAjax(erro);
    };
    MouraTextBoxProcura.prototype.OnCellClickJS = function (s, e) {
        try {
            var col = e.columnIndex;
            var row = e.rowIndex;
            this.grdProcura.Focus(row, col);
            var campoID = this.grdProcura.CampoID;
            if (String.IsNullOrWhiteSpace(campoID)) {
                return;
            }
            try {
                var valorCampoID = "" + e.data[campoID];
                this.SelecionarLinhaGrid(valorCampoID);
                selecionarProximoFocus();
            }
            catch (ex) {
            }
        }
        catch (ex) {
        }
    };
    MouraTextBoxProcura.prototype.OnKeyDownGridJS = function (s, e) {
        //clicou enter
        try {
            var tecla = getTeclaCodeEvent(e.jQueryEvent);
            if (tecla == 13) {
                e.jQueryEvent.stopPropagation();
                //obtém a celula que está com o foco (célula que está com a classe dx-focused)
                var elemento = $(e.element).find(".dx-focused").first();
                var elementoPai = elemento.parent();
                var index = elementoPai.index();
                if (index != null && index != undefined) {
                    var valorCampoID = "" + this.grdProcura.Grid.getKeyByRowIndex(index);
                    //Precisa ser feito desta forma, pois por algum motivo quando faz com o ENTER o sistema
                    //não estava fechando o modal corretamente
                    //setTimeout(
                    //    $.proxy(function () {
                    //        this.SelecionarRegistro(valorCampoID);
                    //        selecionarProximoFocus();
                    //    }, this), 0);
                    this.SelecionarLinhaGrid(valorCampoID);
                }
            }
        }
        catch (ex) {
        }
    };
    MouraTextBoxProcura.prototype.SelecionarLinhaGrid = function (codigo) {
        if (!codigo) {
            return;
        }
        if (this.UsarAjax || this.UsarCallBack) {
            this.SetText(codigo);
            this.OnTextBoxProcuraLostFocus(null);
        }
        else {
            this.SetText(codigo);
            $(this.Textbox).change();
        }
        this.EsconderGradeTodos();
        this.Focus();
        this.grdProcura.PreencherGrid([]);
    };
    MouraTextBoxProcura.prototype.OnBotaoMostrarGridClick = function (s, e) {
        e.processOnServer = false;
        if (this.IsGradeTodosAparecendo()) {
            this.EsconderGradeTodos();
        }
        else {
            var ev = new MouraTextBoxProcuraValidateMostrarEventArgs();
            ev.Valido = true;
            this.ValidateMostrar.FireEvent(this, ev);
            if (ev.Valido) {
                this.MostrarGradeTodos();
            }
        }
    };
    MouraTextBoxProcura.prototype.OnTableGridLostFocus = function () {
        this.EsconderGradeTodos();
    };
    MouraTextBoxProcura.prototype.OnClickDivFull = function () {
        this.EsconderGradeTodos();
    };
    MouraTextBoxProcura.prototype.OnTableGridKeyDown = function (e) {
        var tecla = getTeclaCodeEvent(e);
        if (tecla == 13) {
            //this.SelecionarLinhaGrid(this.grdProcura.GetFocusedRowIndex());
        }
    };
    MouraTextBoxProcura.prototype.OnClickLabelResultado = function () {
        this.ExecutarGetInformacoesAdicionaisProcura();
    };
    MouraTextBoxProcura.prototype.ExecutarGetInformacoesAdicionaisProcura = function () {
        try {
            //if (this.GetText() == this.valorAnterior) {
            //    return;
            //}
            if (this.GetText() == "") {
                MostrarAlerta("Nenhum registro informado");
            }
            else {
                var retorno;
                var param = { id: this.GetText(), engine: this.Engine };
                retorno = this.ExecutarHttpRequest("GetInformacoesAdicionaisProcura", param);
                if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
                    var titulo = "";
                    if (this.Engine == "Sismoura.Web.View.ServicoPetProcura") {
                        titulo = "IG - Informações Gerais";
                    }
                    else if (this.Engine == "Sismoura.Web.View.ClienteProcura") {
                        titulo = "Confirmação Cadastral";
                    }
                    if (retorno != null && retorno != "") {
                        ExibirMensagemAdicionalProcura(retorno, titulo);
                    }
                }
                else {
                    if (retorno != null && retorno != "") {
                        ExibirMensagemAdicionalProcura(retorno);
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraTextBoxProcura.prototype.OnClickBotaoCadastro = function (s, e) {
        try {
            e.processOnServer = false;
            var parametros = [];
            if (String.IsNullOrWhiteSpace(this.URLCadastro)) {
                MostrarAlerta("URL da página não encontrada");
                return;
            }
            if (this.GetText().CNum() > 0) {
                parametros.push("codigo=" + this.GetText());
            }
            if (($("#txtClienteObra").length > 0) && $("#txtClienteObra_TextBoxCliente_TextBox").val().CNum() > 0) {
                parametros.push("CodCliente=" + $("#txtClienteObra_TextBoxCliente_TextBox").val().CNum());
                parametros.push("Inativo=0");
            }
            debugger;
            if (($("#txtPet").length > 0) && $("#txtPet_TextBoxProprietario_TextBox").val().CNum() > 0) {
                parametros.push("CodProprietario=" + $("#txtPet_TextBoxProprietario_TextBox").val().CNum());
            }
            this.dlgTelaModal.AbrirTelaModal(this.URLCadastro, parametros, this.ID + "_Object");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return MouraTextBoxProcura;
}(MouraTextBox));
//# sourceMappingURL=MouraTextBoxProcura.js.map