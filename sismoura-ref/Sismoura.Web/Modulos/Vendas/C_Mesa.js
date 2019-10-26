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
var C_Mesa = /** @class */ (function (_super) {
    __extends(C_Mesa, _super);
    function C_Mesa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Mesa.prototype, "txtGarcons", {
        get: function () {
            return window['txtGarcons_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Mesa.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Mesa.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_Mesa.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_Mesa.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_Mesa.prototype.OnAntesSetEntidade = function (eventArg) {
        _super.prototype.OnAntesSetEntidade.call(this, eventArg);
        if (this.txtGarcons) {
            this.txtGarcons.Limpar();
        }
        if (eventArg.Entidade.Garcons && eventArg.Entidade.Garcons.length > 0) {
            var parametros;
            parametros = {
                codMesa: eventArg.Entidade.Codigo
            };
            var garcons = this.ExecutarFuncaoServerSideSynch("GetGarconsMesa", parametros);
            if (this.txtGarcons) {
                for (var x = 0; x < garcons.length; x++) {
                    this.txtGarcons.AdicionarItem(garcons[x].Value, garcons[x].Text);
                }
            }
        }
    };
    C_Mesa.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_Mesa.prototype.OnAntesGravar = function () {
        var _this = this;
        if (this.txtGarcons) {
            var existentes = this.EntityTela.Garcons;
            if (!existentes) {
                existentes = [];
            }
            for (var x = 0; x < this.txtGarcons.SourceLista.length; x++) {
                if (existentes.filter(function (q) { return q.Garcom == _this.txtGarcons.SourceLista[x].Value; }).length == 0) {
                    existentes.push({ Garcom: this.txtGarcons.SourceLista[x].Value, Mesa: this.EntityTela.Codigo });
                }
            }
            for (var x = 0; x < existentes.length; x++) {
                if (this.txtGarcons.SourceLista.filter(function (q) { return q.Value == existentes[x].Garcom; }).length == 0) {
                    existentes.splice(x, 1);
                }
            }
            this.EntityTela.Garcons = existentes;
        }
        return _super.prototype.OnAntesGravar.call(this);
    };
    C_Mesa.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Mesa.prototype.PreencherGrade = function () {
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
    return C_Mesa;
}(MouraPageCadastroAngular));
var c_Mesa = new C_Mesa();
//# sourceMappingURL=C_Mesa.js.map