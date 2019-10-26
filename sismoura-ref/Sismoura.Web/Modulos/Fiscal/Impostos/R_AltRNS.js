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
var R_AltRNS = /** @class */ (function (_super) {
    __extends(R_AltRNS, _super);
    function R_AltRNS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_AltRNS.prototype, "chkSemNcm", {
        //FILTROS
        get: function () {
            return window['chkSemNcm_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AltRNS.prototype, "txtNcm", {
        get: function () {
            return window['txtNcm_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_AltRNS.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.chkSemNcm) {
            adicionarEventoMoura(this.chkSemNcm.CheckChanged, this.OnChkSemNcmCheckedChange, this);
        }
    };
    R_AltRNS.prototype.OnChkSemNcmCheckedChange = function () {
        if (this.chkSemNcm.Check.checked) {
            this.txtNcm.SetText("");
            this.txtNcm.ReadOnly = true;
        }
        else {
            this.txtNcm.ReadOnly = false;
        }
    };
    return R_AltRNS;
}(MouraPage));
var r_AltRNS = new R_AltRNS;
//# sourceMappingURL=R_AltRNS.js.map