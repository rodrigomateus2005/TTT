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
var C_CliVei_Angular = /** @class */ (function (_super) {
    __extends(C_CliVei_Angular, _super);
    function C_CliVei_Angular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CliVei_Angular.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliVei_Angular.prototype, "CodigoRepresentante", {
        get: function () {
            return this.GetScope()["CodigoRepresentante"];
        },
        set: function (value) {
            this.GetScope()["CodigoRepresentante"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_CliVei_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.CodigoRepresentante = this.ParametrosTela.CodRepresentante;
        this.PreencherGrade();
    };
    C_CliVei_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_CliVei_Angular.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_CliVei_Angular.prototype.PreencherGrade = function () {
        try {
            if (this.CodigoRepresentante > 0) {
                var parametros = {
                    codRepresentante: this.CodigoRepresentante
                };
                this.Grid.PreencherGrid(this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros));
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CliVei_Angular.prototype.OnDepoisLimpar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_CliVei_Angular.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_CliVei_Angular.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    return C_CliVei_Angular;
}(MouraPageCadastroAngular));
var c_CliVei_Angular = new C_CliVei_Angular();
//# sourceMappingURL=C_CliVei_Angular.js.map