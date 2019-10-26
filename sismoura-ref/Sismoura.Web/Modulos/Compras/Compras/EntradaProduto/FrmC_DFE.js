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
var FrmC_DFE = /** @class */ (function (_super) {
    __extends(FrmC_DFE, _super);
    function FrmC_DFE() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FrmC_DFE.prototype, "chkIrEntrada", {
        //Principal
        //get grdDFe(): MouraGridView {
        //    return window['grdDFe_Object'];
        //}
        //get btnMarcar(): MouraButton {
        //    return window['btnMarcar_Object'];
        //}
        //get btnDesmarcar(): MouraButton {
        //    return window['btnDesmarcar_Object'];
        //}
        //Modal
        get: function () {
            return window['chkIrEntrada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmC_DFE.prototype, "cboOperacao", {
        get: function () {
            return window['cboOperacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmC_DFE.prototype, "txtJustificativa", {
        get: function () {
            return window['txtJustificativa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmC_DFE.prototype, "btnOk", {
        get: function () {
            return window['btnOk_Object'];
        },
        enumerable: true,
        configurable: true
    });
    FrmC_DFE.prototype.Init = function () {
        _super.prototype.Init.call(this);
        //Principal
        //if (this.btnMarcar) {
        //    adicionarEventoDevExpress(this.btnMarcar.Botao.Click, this.OnMarcarTodosClick, this);
        //}
        //if (this.btnDesmarcar) {
        //    adicionarEventoDevExpress(this.btnDesmarcar.Botao.Click, this.OnDesmarcarTodosClick, this);
        //}
        //Modal
        if (this.cboOperacao) {
            adicionarEventoDevExpress(this.cboOperacao.Combo.SelectedIndexChanged, this.OnComboBoxOperacaoChange, this);
        }
        if (this.btnOk) {
            adicionarEventoMoura(this.btnOk.Click, this.OnClickBtnOk, this);
        }
    };
    //Principal
    //protected OnMarcarTodosClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs) {
    //    e.processOnServer = false;
    //    if (this.grdDFe) {
    //        this.grdDFe.PerformCallback('selecionartodos');
    //    }
    //    return false;
    //}
    //protected OnDesmarcarTodosClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs) {
    //    e.processOnServer = false;
    //    if (this.grdDFe) {
    //        this.grdDFe.PerformCallback('desmarcartodos');
    //    }
    //    return false;
    //}
    //Modal
    FrmC_DFE.prototype.OnComboBoxOperacaoChange = function () {
        var operacao = this.cboOperacao.GetValue();
        switch (operacao) {
            case "C":
                this.irEntrada(true);
                break;
            case "D":
                this.irEntrada(false);
                break;
            case "R":
                this.irEntrada(false);
                break;
        }
    };
    FrmC_DFE.prototype.irEntrada = function (ir) {
        if (ir) {
            $("#chkIrEntrada").removeAttr("disabled");
            $("#chkIrEntrada_CheckBox").removeAttr("disabled");
            $("#txtJustificativa").addClass("invisible");
            this.chkIrEntrada.Check.checked = true;
        }
        else {
            $("#chkIrEntrada").attr("disabled", "disabled");
            $("#chkIrEntrada_CheckBox").attr("disabled", "disabled");
            $("#txtJustificativa").removeClass("invisible");
            this.chkIrEntrada.Check.checked = false;
        }
    };
    FrmC_DFE.prototype.OnClickBtnOk = function (s, e) {
        var operacao = this.cboOperacao.GetValue();
        var just = this.txtJustificativa.GetText();
        if (!this.ValidarJustificativa(operacao, just)) {
            e.processOnServer = false;
            MostrarAlerta("É necessário informar a justificativa(mínimo 25 caracteres) para essa Operação.");
        }
    };
    FrmC_DFE.prototype.ValidarJustificativa = function (operacao, just) {
        switch (operacao) {
            case "D":
                if (just.length < 25) {
                    return false;
                }
                break;
            case "R":
                if (just.length < 25) {
                    return false;
                }
                break;
        }
        return true;
    };
    return FrmC_DFE;
}(MouraPage));
var frmC_DFE = new FrmC_DFE();
//# sourceMappingURL=FrmC_DFE.js.map