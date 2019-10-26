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
var C_Regi = /** @class */ (function (_super) {
    __extends(C_Regi, _super);
    function C_Regi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Regi.prototype, "GridRegi", {
        get: function () {
            return window['GridRegi_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Regi.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Regi.prototype, "txtRegiao", {
        get: function () {
            return window['txtRegiao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Regi.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.GridRegi) {
            adicionarEventoMoura(this.GridRegi.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_Regi.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_Regi.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_Regi.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_Regi.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Regi.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.GridRegi.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Regi.prototype.OnAntesDeletar = function () {
        try {
            var parametros;
            parametros = { codRegiao: this.EntityTela.Codigo };
            var zonaVenda = this.ExecutarFuncaoServerSideSynch("VerificaZonaVenda", parametros);
            if (zonaVenda > 0) {
                MostrarAlerta("Não será possível Excluir o registro pois o mesmo já foi utilizado no cadastro de Zona de Venda!");
                this.LimparCampos();
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return true;
    };
    C_Regi.prototype.LimparCampos = function () {
        this.txtCodigo.Limpar();
        this.txtRegiao.Limpar();
    };
    return C_Regi;
}(MouraPageCadastroAngular));
var c_Regi = new C_Regi();
//# sourceMappingURL=C_Regi.js.map