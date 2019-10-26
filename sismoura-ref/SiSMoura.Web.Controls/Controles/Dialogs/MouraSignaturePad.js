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
var MouraSignaturePad = /** @class */ (function (_super) {
    __extends(MouraSignaturePad, _super);
    function MouraSignaturePad(id) {
        var _this = _super.call(this, id) || this;
        _this.Salvou = new MouraEventHandler();
        return _this;
    }
    Object.defineProperty(MouraSignaturePad.prototype, "hdnImagem", {
        get: function () {
            return $("#" + this.ID + "_hdnImagem")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraSignaturePad.prototype, "Modal", {
        get: function () {
            return window[this.ID + "_Modal_Modal"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraSignaturePad.prototype, "Canvas", {
        get: function () {
            return $("#" + this.ID + "_Canvas")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraSignaturePad.prototype, "btnSalvar", {
        get: function () {
            return $("#" + this.ID + "_btnSalvar")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraSignaturePad.prototype, "btnLimpar", {
        get: function () {
            return $("#" + this.ID + "_btnLimpar")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraSignaturePad.prototype, "assinaturaBase64", {
        get: function () {
            return this.hdnImagem.value;
        },
        set: function (value) {
            if (!value)
                value = "";
            this.hdnImagem.value = value;
        },
        enumerable: true,
        configurable: true
    });
    MouraSignaturePad.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.Canvas) {
            this.signaturePad = new SignaturePad(this.Canvas);
            this.signaturePad.minWidth = 1.0;
            this.signaturePad.maxWidth = 1.5;
            this.signaturePad.penColor = "rgb(0, 0, 0)";
            this.atualizarAssinatura();
        }
        if (this.btnLimpar) {
            adicionarEventoJQuery(this.btnLimpar, "click", this.OnBtnLimparClick, this);
        }
        if (this.btnSalvar) {
            adicionarEventoJQuery(this.btnSalvar, "click", this.OnBtnSalvarClick, this);
        }
    };
    MouraSignaturePad.prototype.OnBtnLimparClick = function (ev) {
        this.limpar();
        ev.preventDefault();
    };
    MouraSignaturePad.prototype.OnBtnSalvarClick = function (ev) {
        this.hdnImagem.value = this.signaturePad.toDataURL().split(",")[1];
        if (this.signaturePad.isEmpty()) {
            this.hdnImagem.value = "";
        }
        this.Modal.Hide();
        ev.preventDefault();
        this.Salvou.FireEvent(this, new MouraEventArgs());
    };
    MouraSignaturePad.prototype.abrir = function () {
        this.Modal.Show();
        this.atualizarAssinatura();
    };
    MouraSignaturePad.prototype.limpar = function () {
        this.signaturePad.clear();
    };
    MouraSignaturePad.prototype.setEnabled = function (flag) {
        if (flag) {
            this.Canvas.removeAttribute('disabled');
            $("#" + this.ID + "_hdnImagem")[0].removeAttribute('disabled');
        }
        else {
            this.Canvas.setAttribute('disabled', 'disabled');
            $("#" + this.ID + "_hdnImagem")[0].setAttribute('disabled', 'disabled');
        }
    };
    MouraSignaturePad.prototype.atualizarAssinatura = function () {
        this.limpar();
        if (this.hdnImagem) {
            if (!String.IsNullOrWhiteSpace(this.hdnImagem.value)) {
                this.signaturePad.fromDataURL("data:image/png;base64," + this.hdnImagem.value);
            }
        }
    };
    return MouraSignaturePad;
}(MouraControl));
//# sourceMappingURL=MouraSignaturePad.js.map