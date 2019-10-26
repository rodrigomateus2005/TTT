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
var MouraModal = /** @class */ (function (_super) {
    __extends(MouraModal, _super);
    function MouraModal(id) {
        var _this = _super.call(this, id) || this;
        _this._exibirNaConfiguracaoDeCampos = false;
        _this.Abriu = new MouraEventHandler();
        _this.Fechou = new MouraEventHandler();
        return _this;
    }
    Object.defineProperty(MouraModal.prototype, "Titulo", {
        get: function () {
            if (!this.ModalDialog)
                return "";
            return this.ModalDialog.GetHeaderText();
        },
        set: function (value) {
            if (!this.ModalDialog)
                return;
            if (value) {
                value = value.GetString();
            }
            this.ModalDialog.SetHeaderText(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModal.prototype, "ExibirNaConfiguracaoDeCampos", {
        get: function () {
            return this._exibirNaConfiguracaoDeCampos;
        },
        set: function (value) {
            this._exibirNaConfiguracaoDeCampos = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModal.prototype, "ModalDialog", {
        get: function () {
            return window[this.ID + "_Modal"];
        },
        enumerable: true,
        configurable: true
    });
    MouraModal.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        this.Titulo = this.Titulo;
        if (this.ModalDialog) {
            adicionarEventoDevExpress(this.ModalDialog.Closing, this.OnClosing, this);
        }
    };
    MouraModal.prototype.OnClosing = function () {
        this.Fechou.FireEvent(this, new MouraEventArgs());
    };
    MouraModal.prototype.Show = function () {
        if (this.ModalDialog) {
            this.ModalDialog.Show();
            this.Abriu.FireEvent(this, new MouraEventArgs());
        }
    };
    MouraModal.prototype.Hide = function () {
        if (this.ModalDialog) {
            this.ModalDialog.Hide();
            //this.Fechou.FireEvent(this, new MouraEventArgs());
        }
    };
    MouraModal.prototype.BringToFront = function () {
        if (this.ModalDialog) {
            this.ModalDialog.BringWindowToFront(this.ModalDialog.GetWindow(1));
            //this.ModalDialog.BringToFront();
        }
    };
    MouraModal.prototype.SetHeaderText = function (value) {
        this.Titulo = value;
    };
    return MouraModal;
}(MouraControl));
//# sourceMappingURL=MouraModal.js.map