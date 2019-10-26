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
var MouraCallBackPanel = /** @class */ (function (_super) {
    __extends(MouraCallBackPanel, _super);
    function MouraCallBackPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MouraCallBackPanel.prototype, "CallBackPanel", {
        get: function () {
            return window[this.ID + "_callBackPanel"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCallBackPanel.prototype, "hdnBloquearCallBack", {
        get: function () {
            return $("#" + this.ID + "_hdnBloquearCallBack")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCallBackPanel.prototype, "BloquearCallback", {
        get: function () {
            if (this.hdnBloquearCallBack) {
                if (this.hdnBloquearCallBack.value == "S") {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    MouraCallBackPanel.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.CallBackPanel) {
            adicionarEventoDevExpress(this.CallBackPanel.EndCallback, this.OnEndCallBack, this);
            adicionarEventoDevExpress(this.CallBackPanel.CallbackError, this.OnCallBackError, this);
        }
    };
    MouraCallBackPanel.prototype.OnEndCallBack = function (s, e) {
        if (this.BloquearCallback) {
            $("#divCarregando2").hide();
        }
    };
    MouraCallBackPanel.prototype.OnCallBackError = function (s, e) {
        if (this.BloquearCallback) {
            $("#divCarregando2").hide();
        }
        console.log(e.message);
    };
    MouraCallBackPanel.prototype.PerformCallback = function (param) {
        if (this.CallBackPanel && !this.CallBackPanel.InCallback()) {
            if (this.BloquearCallback) {
                $("#divCarregando2").show();
            }
            this.CallBackPanel.PerformCallback(param);
        }
    };
    MouraCallBackPanel.prototype.InCallback = function () {
        if (this.CallBackPanel) {
            return this.CallBackPanel.InCallback();
        }
        else {
            return false;
        }
    };
    MouraCallBackPanel.prototype.ExecutarEndCallBackMoura = function (hdnMsgAlerta, hdnMsgErro, hdnMsgInfo) {
        var alerta = document.getElementById(hdnMsgAlerta);
        var info = document.getElementById(hdnMsgInfo);
        var erro = document.getElementById(hdnMsgErro);
        if (alerta) {
            if (alerta.value != '') {
                toastr.warning(alerta.value);
                alerta.value = '';
            }
        }
        if (info) {
            if (info.value != '') {
                toastr.info(info.value);
                info.value = '';
            }
        }
        if (erro) {
            if (erro.value != '') {
                toastr.error(erro.value);
                erro.value = '';
            }
        }
    };
    return MouraCallBackPanel;
}(MouraControl));
//# sourceMappingURL=MouraCallBackPanel.js.map