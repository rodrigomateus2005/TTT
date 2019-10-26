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
var C_MCanAg = /** @class */ (function (_super) {
    __extends(C_MCanAg, _super);
    function C_MCanAg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_MCanAg.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MCanAg.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MCanAg.prototype, "chkExibirObservacao", {
        get: function () {
            return window['chkExibirObservacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_MCanAg.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid)
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        if (this.cboTipo)
            adicionarEventoMoura(this.cboTipo.SelectedItemChanged, this.cboTipoSelectedItemChanged, this);
    };
    C_MCanAg.prototype.cboTipoSelectedItemChanged = function () {
        if (this.cboTipo && this.cboTipo.GetValue() == '2') {
            this.chkExibirObservacao.Visible = false;
        }
        else {
            this.chkExibirObservacao.Visible = true;
        }
        this.PreencherGrade();
    };
    C_MCanAg.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_MCanAg.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.cboTipo.SetValue(0);
        this.PreencherGrade();
    };
    C_MCanAg.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.cboTipo.SetValue(0);
        Entity.Tipo = 0;
        this.PreencherGrade();
    };
    C_MCanAg.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_MCanAg.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_MCanAg.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {
                tipo: this.cboTipo.GetValue()
            };
            var cadastrados = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(cadastrados);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_MCanAg;
}(MouraPageCadastroAngular));
var c_MCanAg = new C_MCanAg();
//# sourceMappingURL=C_MCanAg.js.map