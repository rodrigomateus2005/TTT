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
var MouraTextBoxComLista = /** @class */ (function (_super) {
    __extends(MouraTextBoxComLista, _super);
    function MouraTextBoxComLista(id) {
        return _super.call(this, id) || this;
    }
    Object.defineProperty(MouraTextBoxComLista.prototype, "hdnSource", {
        get: function () {
            return window[this.ID + "_hdnSource"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxComLista.prototype, "txtProcura", {
        get: function () {
            return window[this.ID + "_txtProcura_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxComLista.prototype, "lstItens", {
        get: function () {
            return window[this.ID + "_lstItens_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxComLista.prototype, "btnAdicionar", {
        get: function () {
            return window[this.ID + "_btnAdicionar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxComLista.prototype, "btnRemover", {
        get: function () {
            return window[this.ID + "_btnRemover_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxComLista.prototype, "btnLimpar", {
        get: function () {
            return window[this.ID + "_btnLimpar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxComLista.prototype, "SourceLista", {
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
    MouraTextBoxComLista.prototype.IniciarEventos = function () {
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
            adicionarEventoJQuery(this.lstItens.Lista, "dblclick", this.OnLstItensDoubleClick, this);
        }
    };
    MouraTextBoxComLista.prototype.AdicionarItem = function (text) {
        if (!String.IsNullOrWhiteSpace(text)) {
            if (this.SourceLista.filter(function (q) { return q.Text == text; }).length == 0) {
                var ret;
                ret = this.SourceLista;
                ret.push({ Text: text });
                this.SourceLista = ret;
                this.lstItens.AdicionarItem(text, "");
            }
        }
    };
    MouraTextBoxComLista.prototype.Limpar = function () {
        var ret = [];
        this.SourceLista = ret;
        this.lstItens.RemoverTodosItens();
        this.txtProcura.Limpar();
    };
    MouraTextBoxComLista.prototype.RemoverItem = function (index) {
        var ret = this.SourceLista;
        ret.splice(index, 1);
        this.lstItens.RemoverItem(index);
        this.SourceLista = ret;
    };
    MouraTextBoxComLista.prototype.OnBtnAdicionarClick = function (s, e) {
        e.processOnServer = false;
        this.AdicionarItem(this.txtProcura.GetText());
        this.txtProcura.Limpar();
        this.txtProcura.Focus();
    };
    MouraTextBoxComLista.prototype.OnBtnRemoverClick = function (s, e) {
        e.processOnServer = false;
        if (this.lstItens.SelectedIndex > -1) {
            this.RemoverItem(this.lstItens.SelectedIndex);
        }
    };
    MouraTextBoxComLista.prototype.OnBtnLimparClick = function (s, e) {
        e.processOnServer = false;
        this.Limpar();
    };
    MouraTextBoxComLista.prototype.OnLstItensDoubleClick = function (e) {
        this.btnRemover.DoClick();
    };
    return MouraTextBoxComLista;
}(MouraControl));
//# sourceMappingURL=MouraTextBoxComLista.js.map