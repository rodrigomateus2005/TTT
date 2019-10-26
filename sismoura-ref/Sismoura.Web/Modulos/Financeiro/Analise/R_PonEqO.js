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
var R_PonEqO = /** @class */ (function (_super) {
    __extends(R_PonEqO, _super);
    function R_PonEqO() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_PonEqO.prototype, "mdSimular", {
        get: function () {
            return window['mdSimular_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PonEqO.prototype, "txtCustoFixo", {
        get: function () {
            return window['txtCustoFixo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PonEqO.prototype, "txtLucroDesejado", {
        get: function () {
            return window['txtLucroDesejado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PonEqO.prototype, "txtFaturamentoNec", {
        get: function () {
            return window['txtFaturamentoNec_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PonEqO.prototype, "txtFaturamentoMes", {
        get: function () {
            return window['txtFaturamentoMes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PonEqO.prototype, "txtDiferenca", {
        get: function () {
            return window['txtDiferenca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PonEqO.prototype, "lblTotalMC", {
        get: function () {
            return window['lblTotalMC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_PonEqO.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.mdSimular && this.mdSimular.ModalDialog) {
            adicionarEventoDevExpress(this.mdSimular.ModalDialog.EndCallback, this.OnEndCallBackModalSimular, this);
        }
        if (this.txtCustoFixo) {
            adicionarEventoMoura(this.txtCustoFixo.TextChanged, this.OnTextBoxCustoFixoChange, this);
        }
        if (this.txtLucroDesejado) {
            adicionarEventoMoura(this.txtLucroDesejado.TextChanged, this.OnTextBoxLucroDesejadoChange, this);
        }
    };
    R_PonEqO.prototype.OnEndCallBackModalSimular = function () {
        this.txtCustoFixo.Focus();
    };
    R_PonEqO.prototype.OnTextBoxCustoFixoChange = function () {
        this.CalcularSimulacao();
    };
    R_PonEqO.prototype.OnTextBoxLucroDesejadoChange = function () {
        this.CalcularSimulacao();
    };
    R_PonEqO.prototype.CalcularSimulacao = function () {
        var custoFixo;
        var lucro;
        var mcMedio;
        var total;
        custoFixo = this.txtCustoFixo.GetText().CNum();
        lucro = this.txtLucroDesejado.GetText().CNum();
        mcMedio = this.lblTotalMC.Text.CNum();
        total = 0;
        if (mcMedio > 0) {
            total = ((custoFixo + lucro) / mcMedio);
        }
        total = total * 100;
        this.txtFaturamentoNec.SetText(total.Format(this.txtFaturamentoNec.QuantidadeCasas));
        this.txtDiferenca.SetText((total - this.txtFaturamentoMes.GetText().CNum()).Format(this.txtDiferenca.QuantidadeCasas));
    };
    return R_PonEqO;
}(MouraPage));
var r_PonEqO = new R_PonEqO;
//# sourceMappingURL=R_PonEqO.js.map