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
var Reg_Inv = /** @class */ (function (_super) {
    __extends(Reg_Inv, _super);
    function Reg_Inv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Reg_Inv.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reg_Inv.prototype, "cboDeposito", {
        get: function () {
            return window['cboDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Reg_Inv.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnComboBoxEmpresaChange, this);
    };
    Reg_Inv.prototype.OnComboBoxEmpresaChange = function () {
        this.AtualizarDeposito();
    };
    Reg_Inv.prototype.AtualizarDeposito = function () {
        var parametros;
        var itens;
        parametros = {
            codEmpresa: this.cboEmpresa.GetValue(),
            inativo: false
        };
        itens = this.ExecutarFuncaoServerSideSynch("PreencherComboDeposito", parametros);
        if (this.cboDeposito && this.cboDeposito.Combo) {
            this.cboDeposito.ClearItems();
            for (var x = 0; x < itens.length; x++) {
                this.cboDeposito.Combo.AddItem(itens[x].Descricao, itens[x].Codigo, "");
            }
            this.cboDeposito.Combo.SetSelectedIndex(0);
        }
    };
    return Reg_Inv;
}(MouraPage));
var reg_Inv = new Reg_Inv();
//# sourceMappingURL=Reg_Inv.js.map