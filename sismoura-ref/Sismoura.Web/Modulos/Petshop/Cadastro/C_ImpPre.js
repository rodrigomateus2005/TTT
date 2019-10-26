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
var C_ImpPre = /** @class */ (function (_super) {
    __extends(C_ImpPre, _super);
    function C_ImpPre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ImpPre.prototype, "txtAliquota", {
        get: function () {
            return window['txtAliquota_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpPre.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ImpPre.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtAliquota) {
            adicionarEventoMoura(this.txtAliquota.LostFocus, this.OnTxtAliquotaLostFocus, this);
        }
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_ImpPre.prototype.OnTxtAliquotaLostFocus = function (e) {
        try {
            if (this.GetScope().Entity.Aliquota > 100) {
                this.GetScope().Entity.Aliquota = 100;
            }
            else if (this.GetScope().Entity.Aliquota < 0) {
                this.GetScope().Entity.Aliquota = 0;
            }
            this.GetScope().$applyAsync();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ImpPre.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_ImpPre.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_ImpPre.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_ImpPre.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_ImpPre.prototype.PreencherGrade = function () {
        try {
            var registros = this.ExecutarFuncaoServerSideSynch("GetCadastrados", {});
            this.Grid.PreencherGrid(registros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_ImpPre;
}(MouraPageCadastroAngular));
var c_ImpPre = new C_ImpPre();
//# sourceMappingURL=C_ImpPre.js.map