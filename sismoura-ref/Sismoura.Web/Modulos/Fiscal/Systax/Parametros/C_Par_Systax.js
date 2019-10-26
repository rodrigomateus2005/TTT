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
var C_Par_Systax = /** @class */ (function (_super) {
    __extends(C_Par_Systax, _super);
    function C_Par_Systax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Par_Systax.prototype, "ParEmp", {
        get: function () {
            if (!this.GetScope()["ParEmp"]) {
                this.GetScope()["ParEmp"] = {};
            }
            return this.GetScope()["ParEmp"];
        },
        set: function (value) {
            this.GetScope()["ParEmp"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Par_Systax.prototype, "ParEmpresas", {
        get: function () {
            if (!this.GetScope()["ParEmpresas"]) {
                this.GetScope()["ParEmpresas"] = [];
            }
            return this.GetScope()["ParEmpresas"];
        },
        set: function (value) {
            this.GetScope()["ParEmpresas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Par_Systax.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Par_Systax.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Par_Systax.prototype, "cboOrigem", {
        get: function () {
            return window['cboOrigem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Par_Systax.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Par_Systax.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid.Grid) {
            adicionarEventoMoura(this.grid.Validando, this.OnValidandoItem, this);
        }
    };
    C_Par_Systax.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.cboEmpresa.LimparSelecao();
        this.CarregarDadosTela();
    };
    C_Par_Systax.prototype.OnValidandoItem = function (s, e) {
        var fieldAlterado = "" + e.fieldNameAlterado;
        var entidade;
        entidade = e.item;
        if ((entidade.Empresa == 0) || (entidade.Codigo_Origem_Systax == null)) {
            e.errorText = "Preencha os campos corretamente!";
            e.cancelar = true;
            return;
        }
        entidade.EmpresaDesc = this.cboEmpresa.GetText();
        entidade.OrigemDesc = this.cboOrigem.GetText();
    };
    C_Par_Systax.prototype.CarregarDadosTela = function () {
        var parametros = {
            codigo: 1
        };
        var registro = this.ExecutarFuncaoServerSideSynch("RetornaRegistro", parametros);
        if (registro) {
            this.GetScope().Entity = registro;
        }
        this.GetScope().$applyAsync();
    };
    C_Par_Systax.prototype.OnDepoisBuscarExistente = function (Entidade) {
        try {
            _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
            var parametros;
            if (Entidade.ParametrosEmpresa) {
                parametros = {
                    listaParametros: Entidade.ParametrosEmpresa
                };
                this.ParEmpresas = this.ExecutarFuncaoServerSideSynch("RetornaComplemento", parametros);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Par_Systax.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.ParametrosEmpresa = this.ParEmpresas;
        return true;
    };
    return C_Par_Systax;
}(MouraPageCadastroAngular));
var c_Par_Systax = new C_Par_Systax();
//# sourceMappingURL=C_Par_Systax.js.map