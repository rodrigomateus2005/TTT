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
var MouraSelecaoDeImpressora = /** @class */ (function (_super) {
    __extends(MouraSelecaoDeImpressora, _super);
    function MouraSelecaoDeImpressora(id) {
        var _this = _super.call(this, id) || this;
        _this.ClickOk = new MouraEventHandler();
        _this.ClickCancel = new MouraEventHandler();
        return _this;
    }
    Object.defineProperty(MouraSelecaoDeImpressora.prototype, "chave", {
        get: function () {
            return window[this.ID + "_chave"];
        },
        set: function (value) {
            window[this.ID + "_chave"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraSelecaoDeImpressora.prototype, "isClient", {
        get: function () {
            return window[this.ID + "_isClient"];
        },
        set: function (value) {
            window[this.ID + "_isClient"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraSelecaoDeImpressora.prototype, "ImpressoraSelecionada", {
        get: function () {
            return this.cboImpressora.Combo.GetValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraSelecaoDeImpressora.prototype, "modal", {
        get: function () {
            return window[this.ID + '_Modal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraSelecaoDeImpressora.prototype, "cboImpressora", {
        get: function () {
            return window[this.ID + '_cboImpressora_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraSelecaoDeImpressora.prototype, "chkLembrar", {
        get: function () {
            return window[this.ID + '_chkLembrar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraSelecaoDeImpressora.prototype, "botaoOk", {
        get: function () {
            return window[this.ID + '_botoaOk_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraSelecaoDeImpressora.prototype, "botaoCancel", {
        get: function () {
            return window[this.ID + '_botaoCancel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    MouraSelecaoDeImpressora.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.botaoOk) {
            adicionarEventoMoura(this.botaoOk.Click, this.OnBotaoOKClick, this);
        }
        if (this.botaoCancel) {
            adicionarEventoMoura(this.botaoCancel.Click, this.OnBotaoCancelarClick, this);
        }
    };
    MouraSelecaoDeImpressora.prototype.AbrirClient = function (chave) {
        this.cboImpressora.Combo.SetSelectedIndex(-1);
        this.chkLembrar.Check.checked = false;
        this.chave = chave;
        this.isClient = true;
        var param = {
            chave: chave
        };
        var retorno = this.ExecutarHttpRequest("RetornarImpressoraPadrao", param);
        if (retorno && retorno > 0) {
            this.cboImpressora.SetValue(retorno);
            this.chkLembrar.Check.checked = true;
        }
        this.modal.Show();
    };
    MouraSelecaoDeImpressora.prototype.OnBotaoOKClick = function (s, e) {
        if (!this.isClient)
            return;
        e.processOnServer = false;
        if (this.cboImpressora.Combo.GetSelectedIndex() >= 0) {
            if (this.chkLembrar.Check.checked) {
                var param = {
                    chave: this.chave,
                    impressora: this.cboImpressora.GetValue()
                };
                this.ExecutarHttpRequest("SalvarImpressoraPadrao", param);
            }
            else {
                var param = {
                    chave: this.chave
                };
                this.ExecutarHttpRequest("ExcluirImpressoraPadrao", param);
            }
            this.ClickOk.FireEvent(this, e);
            this.modal.Hide();
            this.isClient = false;
        }
        else {
            MostrarAlerta("Escolha uma impressora!");
        }
    };
    MouraSelecaoDeImpressora.prototype.OnBotaoCancelarClick = function (s, e) {
        if (!this.isClient)
            return;
        e.processOnServer = false;
        this.ClickCancel.FireEvent(this, e);
        this.modal.Hide();
        this.isClient = false;
    };
    return MouraSelecaoDeImpressora;
}(MouraControl));
//# sourceMappingURL=MouraSelecaoDeImpressora.js.map