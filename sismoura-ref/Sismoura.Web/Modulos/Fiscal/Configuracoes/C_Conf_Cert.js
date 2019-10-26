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
var C_Conf_Cert = /** @class */ (function (_super) {
    __extends(C_Conf_Cert, _super);
    function C_Conf_Cert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Conf_Cert.prototype, "cboTipoArquivo", {
        get: function () {
            return window['cboTipoArquivo_comboBox'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Conf_Cert.prototype, "cboCertificados", {
        get: function () {
            return window['cboCertificados_comboBox'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Conf_Cert.prototype, "btnAnexos", {
        get: function () {
            return window['btnAnexos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Conf_Cert.prototype, "txtSenha", {
        get: function () {
            return window['txtSenha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Conf_Cert.prototype, "chkBancoNuvem", {
        get: function () {
            return window['chkBancoNuvem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Conf_Cert.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboTipoArquivo) {
            adicionarEventoDevExpress(this.cboTipoArquivo.ValueChanged, this.OnValueChangedComboTipo, this);
        }
        this.OnValueChangedComboTipo(null, null);
    };
    C_Conf_Cert.prototype.OnValueChangedComboTipo = function (s, e) {
        if (this.cboTipoArquivo.GetValue() == "3") {
            this.btnAnexos.Visible = false;
            this.cboCertificados.SetVisible(true);
            this.txtSenha.Visible = false;
            this.chkBancoNuvem.Visible = true;
        }
        else {
            this.btnAnexos.Visible = true;
            this.cboCertificados.SetVisible(false);
            this.txtSenha.Visible = true;
            this.chkBancoNuvem.Visible = false;
        }
        return false;
    };
    return C_Conf_Cert;
}(MouraPage));
var c_Conf_Cert = new C_Conf_Cert();
//# sourceMappingURL=C_Conf_Cert.js.map