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
var MouraTextBoxProcuraComLista = /** @class */ (function (_super) {
    __extends(MouraTextBoxProcuraComLista, _super);
    function MouraTextBoxProcuraComLista(id) {
        return _super.call(this, id) || this;
    }
    Object.defineProperty(MouraTextBoxProcuraComLista.prototype, "hdnSource", {
        get: function () {
            return window[this.ID + "_hdnSource"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraComLista.prototype, "cbpItens", {
        get: function () {
            return window[this.ID + "_cbpItens_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraComLista.prototype, "agrProcura", {
        get: function () {
            return window[this.ID + "_agrProcura_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraComLista.prototype, "agrItens", {
        get: function () {
            return window[this.ID + "_agrItens_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraComLista.prototype, "txtProcura", {
        get: function () {
            return window[this.ID + "_txtProcura_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraComLista.prototype, "lstItens", {
        get: function () {
            return window[this.ID + "_lstItens_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraComLista.prototype, "btnAdicionar", {
        get: function () {
            return window[this.ID + "_btnAdicionar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraComLista.prototype, "btnRemover", {
        get: function () {
            return window[this.ID + "_btnRemover_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraComLista.prototype, "btnLimpar", {
        get: function () {
            return window[this.ID + "_btnLimpar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraComLista.prototype, "divProc", {
        get: function () {
            return window[this.ID + "_divProc"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxProcuraComLista.prototype, "SourceLista", {
        get: function () {
            if (String.IsNullOrWhiteSpace(this.hdnSource.value)) {
                this.hdnSource.value = EncodeTextoJSON(JSON.stringify([]));
            }
            var aux;
            aux = JSON.parse(DecodeTextoJSON(this.hdnSource.value));
            return aux;
        },
        set: function (value) {
            if (this.hdnSource) {
                if (!value) {
                    this.hdnSource.value = EncodeTextoJSON(JSON.stringify([]));
                }
                else {
                    this.hdnSource.value = EncodeTextoJSON(JSON.stringify(value));
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    MouraTextBoxProcuraComLista.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.btnAdicionar) {
            adicionarEventoMoura(this.btnAdicionar.Click, this.OnBtnAdicionarClick, this);
        }
        if (this.btnRemover) {
            adicionarEventoMoura(this.btnRemover.Click, this.OnBtnRemoverClick, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.OnBtnLimparClick, this);
        }
        if (this.lstItens) {
            adicionarEventoJQuery(this.lstItens.Lista, "ondblclick", this.OnLstItensDoubleClick, this);
        }
    };
    MouraTextBoxProcuraComLista.prototype.AdicionarItem = function (value, text) {
        if (value > 0 && text != "") {
            if (this.SourceLista.filter(function (q) { return q.Value == value; }).length == 0) {
                var ret;
                ret = this.SourceLista;
                ret.push({ Value: value, Text: text });
                this.SourceLista = ret;
                this.lstItens.AdicionarItem(text, value);
            }
        }
    };
    MouraTextBoxProcuraComLista.prototype.Limpar = function () {
        var ret = [];
        this.SourceLista = ret;
        this.lstItens.RemoverTodosItens();
        this.txtProcura.Limpar();
    };
    MouraTextBoxProcuraComLista.prototype.SetVisible = function (visible) {
        if (this.agrProcura) {
            this.agrProcura.Visible = visible;
        }
        if (this.agrItens) {
            this.agrItens.Visible = visible;
        }
    };
    MouraTextBoxProcuraComLista.prototype.RemoverItem = function (index) {
        var ret = this.SourceLista;
        ret.splice(index, 1);
        this.lstItens.RemoverItem(index);
        this.SourceLista = ret;
    };
    MouraTextBoxProcuraComLista.prototype.OnBtnAdicionarClick = function (s, e) {
        e.processOnServer = false;
        this.AdicionarItem(this.txtProcura.GetText().CNum(), this.txtProcura.GetText() + " - " + this.txtProcura.LabelResultado.innerText);
        this.txtProcura.Limpar();
    };
    MouraTextBoxProcuraComLista.prototype.OnBtnRemoverClick = function (s, e) {
        e.processOnServer = false;
        if (this.lstItens.SelectedIndex > -1) {
            this.RemoverItem(this.lstItens.SelectedIndex);
        }
    };
    MouraTextBoxProcuraComLista.prototype.OnBtnLimparClick = function (s, e) {
        e.processOnServer = false;
        this.Limpar();
    };
    MouraTextBoxProcuraComLista.prototype.OnLstItensDoubleClick = function (e) {
        this.btnRemover.DoClick();
    };
    return MouraTextBoxProcuraComLista;
}(MouraControl));
//# sourceMappingURL=MouraTextBoxProcuraComLista.js.map