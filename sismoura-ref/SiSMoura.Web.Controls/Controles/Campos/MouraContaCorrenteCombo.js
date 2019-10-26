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
var MouraContaCorrenteCombo = /** @class */ (function (_super) {
    __extends(MouraContaCorrenteCombo, _super);
    function MouraContaCorrenteCombo(id) {
        var _this = _super.call(this, id) || this;
        _this._valueItemTodos = null;
        return _this;
    }
    Object.defineProperty(MouraContaCorrenteCombo.prototype, "Config", {
        get: function () {
            return this.config;
        },
        set: function (value) {
            this.config = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraContaCorrenteCombo.prototype, "ValueItemTodos", {
        get: function () {
            return this._valueItemTodos;
        },
        set: function (value) {
            this._valueItemTodos = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraContaCorrenteCombo.prototype, "Combo", {
        get: function () {
            return window[this.ID + "_Combo"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraContaCorrenteCombo.prototype, "LabelBanco", {
        get: function () {
            return $("#" + this.ID + "_labelBanco")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraContaCorrenteCombo.prototype, "LabelAgencia", {
        get: function () {
            return $("#" + this.ID + "_labelAgencia")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraContaCorrenteCombo.prototype, "LabelContaCorrente", {
        get: function () {
            return $("#" + this.ID + "_labelContaCorrente")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraContaCorrenteCombo.prototype, "HiddenSourceJSON", {
        get: function () {
            return $("#" + this.ID + "_hdnSourceJSON")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraContaCorrenteCombo.prototype, "hdnEmpresas", {
        get: function () {
            return $("#" + this.ID + "_hdnEmpresas")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraContaCorrenteCombo.prototype, "CheckBox", {
        get: function () {
            return window[this.ID + '_CheckBox_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraContaCorrenteCombo.prototype, "DataSource", {
        get: function () {
            if (String.IsNullOrWhiteSpace(this.HiddenSourceJSON.value)) {
                return [];
            }
            else {
                return JSON.parse(DecodeTextoJSON(this.HiddenSourceJSON.value));
            }
        },
        set: function (value) {
            if (!value) {
                value = [];
            }
            this.HiddenSourceJSON.value = EncodeTextoJSON(JSON.stringify(value));
        },
        enumerable: true,
        configurable: true
    });
    MouraContaCorrenteCombo.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        //if (this.Combo != null && this.Combo) {
        //    adicionarEventoDevExpress(this.Combo.ValueChanged, this.OnComboSelectedIndexChanged, this);
        //}
        if (this.Combo) {
            adicionarEventoDevExpress(this.Combo.SelectedIndexChanged, this.OnComboSelectedIndexChanged, this);
            adicionarEventoDevExpress(this.Combo.Init, this.OnComboInit, this);
        }
        if (this.CheckBox) {
            adicionarEventoMoura(this.CheckBox.CheckChanged, this.OnCheckInativos, this);
        }
    };
    MouraContaCorrenteCombo.prototype.OnComboInit = function () {
        if (this.Combo && this.Combo.GetValue() != null && this.Combo.GetValue() != undefined && !String.IsNullOrWhiteSpace(this.NgModel)) {
            //faz isso, pois o angular as vezes preencheu a combo mas o texto não está correto na combo
            //fazendo isso, a combo se atualiza
            this.Combo.SetValue(this.Combo.GetValue());
        }
    };
    MouraContaCorrenteCombo.prototype.OnCheckInativos = function () {
        var empresas = [];
        var inativos;
        try {
            empresas = JSON.parse(this.hdnEmpresas.value);
        }
        catch (e) {
            empresas.push(0);
        }
        if (this.CheckBox) {
            inativos = !this.CheckBox.Checked;
        }
        this.Preencher(empresas, inativos);
    };
    MouraContaCorrenteCombo.prototype.OnComboSelectedIndexChanged = function (sender, e) {
        this.AtualizarLabels();
    };
    MouraContaCorrenteCombo.prototype.Limpar = function () {
        this.Combo.SetSelectedIndex(-1);
        this.AtualizarLabels();
    };
    MouraContaCorrenteCombo.prototype.AtualizarLabels = function () {
        var itemSelecionado = this.GetItemSelecionado();
        if (itemSelecionado != null) {
            this.LabelBanco.innerText = itemSelecionado.Banco;
            this.LabelAgencia.innerText = itemSelecionado.Numero_Agencia;
            if (itemSelecionado.Digito_Agencia != "" && itemSelecionado.Digito_Agencia != null) {
                this.LabelAgencia.innerText += "-" + itemSelecionado.Digito_Agencia;
            }
            if (this.Config == "C") {
                this.LabelContaCorrente.innerText = itemSelecionado.Nome_Banco;
            }
            else {
                this.LabelContaCorrente.innerText = itemSelecionado.Conta_Corrente;
                if (itemSelecionado.Digito_Conta != "") {
                    this.LabelContaCorrente.innerText += "-" + itemSelecionado.Digito_Conta;
                }
            }
        }
        else {
            this.LabelBanco.innerText = "";
            this.LabelAgencia.innerText = "";
            this.LabelContaCorrente.innerText = "";
        }
    };
    MouraContaCorrenteCombo.prototype.GetEmpresa = function () {
        var itemSelecionado = this.GetItemSelecionado();
        var retorno = 0;
        if (itemSelecionado) {
            retorno = ("" + itemSelecionado.Cod_Empresa).CNum();
        }
        return retorno;
    };
    MouraContaCorrenteCombo.prototype.SetContaCorrente = function (value) {
        if (this.Combo) {
            if (this.Combo.FindItemByValue(value)) {
                this.Combo.SetValue(value);
            }
            else {
                this.Limpar();
            }
        }
        this.AtualizarLabels();
    };
    MouraContaCorrenteCombo.prototype.GetContaCorrente = function () {
        var itemSelecionado = this.GetItemSelecionado();
        var retorno = "";
        if (itemSelecionado) {
            retorno = "" + itemSelecionado.Conta_Corrente;
        }
        return retorno;
    };
    MouraContaCorrenteCombo.prototype.GetContaCorrenteText = function () {
        var itemSelecionado = this.GetItemSelecionado();
        var retorno = "";
        if (itemSelecionado) {
            if (this.Config == "C") {
                retorno = "" + itemSelecionado.Nome_Banco;
            }
            else {
                retorno = "" + itemSelecionado.Conta_Corrente;
                if (itemSelecionado.Digito_Conta != "") {
                    retorno += "-" + itemSelecionado.Digito_Conta;
                }
            }
        }
        return retorno;
    };
    MouraContaCorrenteCombo.prototype.GetItemSelecionado = function () {
        var source = this.DataSource;
        var contemTodos = false;
        if (this.Combo.GetItemCount() > 0 && this.Combo.GetItem(0).text == "--Todos--") {
            contemTodos = true;
        }
        var indexSelecionado = this.Combo.GetSelectedIndex() - (contemTodos ? 1 : 0);
        var itemSelecionado = null;
        if (indexSelecionado >= 0) {
            itemSelecionado = source[indexSelecionado];
        }
        return itemSelecionado;
    };
    MouraContaCorrenteCombo.prototype.Preencher = function (codEmpresas, somenteAtivos) {
        try {
            this.hdnEmpresas.value = JSON.stringify(codEmpresas);
            var retornoString;
            var param = {
                codEmpresas: JSON.stringify(codEmpresas),
                somenteAtivos: (somenteAtivos ? "S" : "N"),
            };
            retornoString = this.ExecutarHttpRequest("GetContasCorrentesEmpresas", param);
            this.DataSource = [];
            if (!String.IsNullOrWhiteSpace(retornoString)) {
                this.DataSource = JSON.parse(DecodeTextoJSON(retornoString));
            }
            var source = this.DataSource;
            if (this.Combo) {
                var contemTodos = false;
                //Verifica se a combo possui o item todos para adicioná-lo novamente
                if (this.Combo.GetItemCount() > 0 && this.Combo.GetItem(0).text == "--Todos--") {
                    contemTodos = true;
                }
                this.Combo.ClearItems();
                if (contemTodos) {
                    this.Combo.AddItem("--Todos--", this.ValueItemTodos, "");
                }
                for (var x = 0; x <= source.length - 1; x++) {
                    try {
                        if (ValoresSismoura.ConfiguracoesRetaguarda.ControlCC == "Conta Corrente") {
                            this.Combo.AddItem("" + source[x].Conta_Corrente, source[x].Conta_Corrente, "");
                        }
                        else {
                            this.Combo.AddItem("" + source[x].Nome_Banco, source[x].Conta_Corrente, "");
                        }
                    }
                    catch (ex) {
                        if (ex && ex.message && ex.message.indexOf("Cannot read property 'style' of null") > -1) {
                            console.log(ex);
                        }
                        else {
                            LogarException(ex);
                        }
                    }
                }
            }
            this.AtualizarLabels();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraContaCorrenteCombo.prototype.IsValido = function () {
        if (this.Combo.GetSelectedIndex() < 0) {
            return false;
        }
        return _super.prototype.IsValido.call(this);
    };
    return MouraContaCorrenteCombo;
}(MouraCampo));
//# sourceMappingURL=MouraContaCorrenteCombo.js.map