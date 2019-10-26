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
var C_CfgPag = /** @class */ (function (_super) {
    __extends(C_CfgPag, _super);
    function C_CfgPag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CfgPag.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CfgPag.prototype, "cboConta", {
        get: function () {
            return window['cboConta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_CfgPag.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.cboConta) {
            adicionarEventoDevExpress(this.cboConta.Combo.SelectedIndexChanged, this.OnComboSelectedIndexChanged, this);
        }
    };
    C_CfgPag.prototype.OnComboSelectedIndexChanged = function () {
        this.cboConta.AtualizarLabels();
    };
    C_CfgPag.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_CfgPag.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_CfgPag.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.PreencherGrade();
        this.cboConta.Limpar();
        this.cboConta.CheckBox.Checked = false;
    };
    C_CfgPag.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_CfgPag.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
    };
    C_CfgPag.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_CfgPag;
}(MouraPageCadastroAngular));
var c_CfgPag = new C_CfgPag();
//# sourceMappingURL=C_CfgPag.js.map