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
var C_AmbR = /** @class */ (function (_super) {
    __extends(C_AmbR, _super);
    function C_AmbR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_AmbR.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AmbR.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AmbR.prototype, "txtMicroResp", {
        get: function () {
            return window['txtMicroResp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AmbR.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_AmbR.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        this.PreencherGrade();
    };
    C_AmbR.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
    };
    C_AmbR.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_AmbR.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        _super.prototype.Limpar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_AmbR.prototype.PreencherGrade = function () {
        try {
            var parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_AmbR;
}(MouraPageCadastroAngular));
var c_AmbR = new C_AmbR();
//# sourceMappingURL=C_AmbR.js.map