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
var C_Custo = /** @class */ (function (_super) {
    __extends(C_Custo, _super);
    function C_Custo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Custo.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Custo.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Custo.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_Custo.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_Custo.prototype.PreencherEmpresas = function (empresas) {
        var codigos = [];
        if (empresas) {
            for (var x = 0; x < empresas.length; x++) {
                codigos.push(empresas[x].Empresa.toString());
            }
            if (this.lstEmpresa) {
                this.lstEmpresa.SetValues(codigos);
            }
        }
        else {
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        }
    };
    C_Custo.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_Custo.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.PreencherGrade();
        this.PreencherEmpresas(Entity.Empresas);
    };
    C_Custo.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.GetScope().Entity.Empresas = [];
        //var empresa: SiSMoura.Core.Entity.Centro_Custo_Empresa = this.GetScope().Entity.Empresas;
        for (var x = 0; x < this.lstEmpresa.GetValues().length; x++) {
            var empresa = {};
            empresa.Empresa = +this.lstEmpresa.GetValues()[x];
            this.GetScope().Entity.Empresas.push(empresa);
        }
        if (this.GetScope().Entity.Empresas.length <= 0) {
            MostrarAlerta("O Centro de Custo deve ser vinculado a pelo menos uma Empresa");
            return false;
        }
        //var flag: boolean;
        //var emp = this.lstEmpresa.GetValues();
        ////Adicionar
        //for (var x = 0; x < emp.length; x++) {
        //    flag = false;
        //    for (var y = 0; y < this.EntityTela.Empresas.length; y++) {
        //        if (emp[x].CNum() == this.EntityTela.Empresas[y].Empresa) {
        //            flag = true;
        //            break;
        //        }
        //    }
        //    if (!flag) {
        //        var empresa: SiSMoura.Core.Entity.Centro_Custo_Empresa = <SiSMoura.Core.Entity.Centro_Custo_Empresa>{};
        //        empresa.Empresa = emp[x].CNum();
        //        this.EntityTela.Empresas.push(empresa);
        //    }
        //}
        ////Remover
        //for (var x = 0; x < this.EntityTela.Empresas.length; x++) {
        //    flag = false;
        //    for (var y = 0; y < emp.length; y++) {                
        //        if (emp[y].CNum() == this.EntityTela.Empresas[x].Empresa) {
        //            flag = true;
        //            break;
        //        }                
        //    }
        //    if (!flag) {
        //        this.EntityTela.Empresas.splice(x, 1);
        //    }
        //}
        return true;
    };
    C_Custo.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Custo.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.PreencherEmpresas(Entity.Empresas);
    };
    C_Custo.prototype.PreencherGrade = function () {
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
    return C_Custo;
}(MouraPageCadastroAngular));
var c_Custo = new C_Custo();
//# sourceMappingURL=C_Custo.js.map