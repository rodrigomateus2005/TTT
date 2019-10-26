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
var R_Demis = /** @class */ (function (_super) {
    __extends(R_Demis, _super);
    function R_Demis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Demis.prototype, "cboEmpresa", {
        //Empresa
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Demis.prototype, "cboTipo", {
        //Tipo
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Demis.prototype, "txtFuncionario", {
        //Funcionário
        get: function () {
            return window['txtFuncionario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Demis.prototype, "txtDataEmissao", {
        //Data Emissão
        get: function () {
            return window['txtDataEmissao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Demis.prototype, "txtDataInicio", {
        //Data Início
        get: function () {
            return window['txtDataInicio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Demis.prototype, "txtDataFim", {
        //Data Fim
        get: function () {
            return window['txtDataFim_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Demis.prototype, "cboEmpregadoDevera", {
        //Empregado Deverá
        get: function () {
            return window['cboEmpregadoDevera_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Demis.prototype, "txtComparecerAs", {
        //Comparecer As
        get: function () {
            return window['txtComparecerAs_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Demis.prototype, "txtDataComparecimento", {
        //Data Comparecimento
        get: function () {
            return window['txtDataComparecimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Demis.prototype, "txtPrazoComparecimento", {
        //Prazo Comparecimento
        get: function () {
            return window['txtPrazoComparecimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Demis.prototype, "btnLimparGrid", {
        //Botão Oculto Limpar Grid
        get: function () {
            return window['btnLimparGrid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Demis.prototype, "Grid", {
        //Grid
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Demis.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboTipo) {
            adicionarEventoDevExpress(this.cboTipo.Combo.ValueChanged, this.oncboTipoChange, this);
            if (this.passouLoad) {
                this.executar_Click(false);
            }
            //if (this.cboTipo.GetValue() == null || this.cboTipo.GetValue() == undefined) {
            //    MostrarAlerta("Init True");
            //    this.executar_Click(true);
            //} else {
            //    MostrarAlerta("Init false");
            //    this.executar_Click(false);
            //}
        }
    };
    R_Demis.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        setTimeout($.proxy(function () {
            this.cboTipo.Combo.SetSelectedIndex(0);
            this.executar_Click(true);
            this.passouLoad = true;
        }, this), 500);
    };
    R_Demis.prototype.oncboTipoChange = function () {
        this.executar_Click(true);
    };
    R_Demis.prototype.executar_Click = function (limpar) {
        var opt = this.cboTipo.GetValue();
        if (limpar) {
            this.bloquearLimparTodosCampos();
        }
        else {
            this.bloquearTodosCampos();
        }
        switch (opt) {
            case "1":
                break;
            case "2":
                this.txtDataInicio.Disabled = false;
                this.txtDataFim.Disabled = false;
                this.cboEmpregadoDevera.Combo.SetEnabled(true);
                var aux = this.cboEmpregadoDevera.Combo.GetSelectedIndex();
                this.cboEmpregadoDevera.ClearItems();
                this.cboEmpregadoDevera.Combo.AddItem("Redução de 2 (duas) horas diárias", 4, "");
                this.cboEmpregadoDevera.Combo.AddItem("Redução de 7 (sete) dias corridos", 5, "");
                this.cboEmpregadoDevera.Combo.SetSelectedIndex(aux);
                break;
            case "3":
                this.txtDataInicio.Disabled = false;
                this.txtDataFim.Disabled = false;
                break;
            case "4":
                this.txtComparecerAs.textBoxHorario.SetEnabled(true);
                this.txtDataComparecimento.Disabled = false;
                break;
            case "6":
                this.txtDataFim.Disabled = false;
                break;
            case "7":
                this.txtDataFim.Disabled = false;
                break;
            case "8":
                this.txtDataInicio.Disabled = false;
                this.txtDataFim.Disabled = false;
                this.txtPrazoComparecimento.Textbox.disabled = false;
                break;
            case "9":
                this.cboEmpregadoDevera.Combo.SetEnabled(true);
                var aux = this.cboEmpregadoDevera.Combo.GetSelectedIndex();
                this.cboEmpregadoDevera.ClearItems();
                this.cboEmpregadoDevera.Combo.AddItem("Cumprir o Aviso Prévio", 1, "");
                this.cboEmpregadoDevera.Combo.AddItem("Ser dispensado do Aviso Prévio", 2, "");
                this.cboEmpregadoDevera.Combo.AddItem("Outros (especificar no verso)", 3, "");
                this.cboEmpregadoDevera.Combo.SetSelectedIndex(aux);
                break;
        }
    };
    R_Demis.prototype.bloquearLimparTodosCampos = function () {
        this.bloquearTodosCampos();
        this.txtDataInicio.Date = null;
        this.txtDataFim.Date = null;
        this.cboEmpregadoDevera.Combo.ClearItems();
        this.txtComparecerAs.textBoxHorario.SetDate(null);
        this.txtDataComparecimento.Date = null;
        this.txtPrazoComparecimento.SetText("");
        if (this.Grid.Grid.GetRowKey(0) != null) {
            this.btnLimparGrid.DoClick();
        }
    };
    R_Demis.prototype.bloquearTodosCampos = function () {
        this.txtDataInicio.Disabled = true;
        this.txtDataFim.Disabled = true;
        this.cboEmpregadoDevera.Combo.SetEnabled(false);
        this.txtComparecerAs.textBoxHorario.SetEnabled(false);
        this.txtDataComparecimento.Disabled = true;
        this.txtPrazoComparecimento.Textbox.disabled = true;
    };
    return R_Demis;
}(MouraPage));
var r_Demis = new R_Demis();
//# sourceMappingURL=R_Demis.js.map