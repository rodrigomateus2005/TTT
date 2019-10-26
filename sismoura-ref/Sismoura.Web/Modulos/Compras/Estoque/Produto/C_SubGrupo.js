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
var C_SubGrupo = /** @class */ (function (_super) {
    __extends(C_SubGrupo, _super);
    function C_SubGrupo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_SubGrupo.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_SubGrupo.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
            adicionarEventoMoura(this.Grid.CellPrepared, this.OnGridCellPrepared, this);
        }
    };
    C_SubGrupo.prototype.OnGridCellPrepared = function (s, e) {
        try {
            //var corFonte: string = ;
            if (e.rowType == "data" && e.data != null) {
                if (e.data.Inativo == "S") {
                    e.cellElement.css("color", "#FF0000");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SubGrupo.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_SubGrupo.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_SubGrupo.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_SubGrupo.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_SubGrupo.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cadSubgrupos = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(cadSubgrupos);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_SubGrupo;
}(MouraPageCadastroAngular));
var c_SubGrupo = new C_SubGrupo();
//# sourceMappingURL=C_SubGrupo.js.map