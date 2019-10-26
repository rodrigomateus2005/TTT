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
var MouraContaCorrenteLista = /** @class */ (function (_super) {
    __extends(MouraContaCorrenteLista, _super);
    function MouraContaCorrenteLista(id) {
        return _super.call(this, id) || this;
    }
    Object.defineProperty(MouraContaCorrenteLista.prototype, "CheckBox", {
        get: function () {
            return window[this.ID + '_CheckBox_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraContaCorrenteLista.prototype, "Lista", {
        get: function () {
            return window[this.ID + '_Lista_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraContaCorrenteLista.prototype, "HiddenSourceJSON", {
        get: function () {
            return $("#" + this.ID + "_hdnSourceJSON")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraContaCorrenteLista.prototype, "hdnEmpresas", {
        get: function () {
            return $("#" + this.ID + "_hdnEmpresas")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraContaCorrenteLista.prototype, "DataSource", {
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
    MouraContaCorrenteLista.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.CheckBox) {
            adicionarEventoMoura(this.CheckBox.CheckChanged, this.OnCheckInativos, this);
        }
        this.OnCheckInativos();
    };
    MouraContaCorrenteLista.prototype.OnCheckInativos = function () {
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
    MouraContaCorrenteLista.prototype.Preencher = function (codEmpresas, somenteAtivos) {
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
            this.Lista.AspUniqueIdLista = this.Lista.AspUniqueId + "_List" + "$" + this.ID + "_Lista_List";
            if (this.Lista) {
                var selecionados = this.Lista.GetValues();
                this.Lista.RemoverTodosItens();
                for (var x = 0; x <= source.length - 1; x++) {
                    try {
                        if (ValoresSismoura.ConfiguracoesRetaguarda.ControlCC == "C") {
                            this.Lista.AdicionarItem("" + source[x].Conta_Corrente, source[x].Conta_Corrente);
                        }
                        else {
                            this.Lista.AdicionarItem("" + source[x].BancoContaLista, source[x].Conta_Corrente);
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
                this.Lista.SetValues(selecionados);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return MouraContaCorrenteLista;
}(MouraCampo));
//# sourceMappingURL=MouraContaCorrenteLista.js.map