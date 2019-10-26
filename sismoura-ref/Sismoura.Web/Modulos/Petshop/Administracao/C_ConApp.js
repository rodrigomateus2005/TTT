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
var C_ConApp = /** @class */ (function (_super) {
    __extends(C_ConApp, _super);
    function C_ConApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ConApp.prototype, "Resultados", {
        get: function () {
            if (!this.GetScope()['Resultados']) {
                this.GetScope()['Resultados'] = [];
            }
            return this.GetScope()['Resultados'];
        },
        set: function (value) {
            this.GetScope()['Resultados'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConApp.prototype, "Funcionario", {
        get: function () {
            if (!this.GetScope()['Funcionario']) {
                this.GetScope()['Funcionario'] = {};
            }
            return this.GetScope()['Funcionario'];
        },
        set: function (value) {
            this.GetScope()['Funcionario'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConApp.prototype, "grdEmpresas", {
        get: function () {
            return window['grdEmpresas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ConApp.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    C_ConApp.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        if (!this.GetScope().CarregarFuncionario) {
            this.GetScope().CarregarFuncionario = $.proxy(this.CarregarFuncionario, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Funcionario.Cliente; }, this.GetScope().CarregarFuncionario);
        }
        if (this.grdEmpresas) {
            adicionarEventoMoura(this.grdEmpresas.Grid.CellComboBoxOpened, this.OnGridCellPrepared, this);
        }
    };
    C_ConApp.prototype.LimparCampos = function () {
        this.CarregarEmpresas();
        this.LimparFuncionario();
        this.RefreshAngular();
    };
    C_ConApp.prototype.LimparFuncionario = function () {
        this.Funcionario.Cliente = 0;
        this.Funcionario.Funcionario = false;
    };
    C_ConApp.prototype.CarregarEmpresas = function () {
        var parametros;
        parametros = {};
        this.Resultados = [];
        this.Resultados = this.ExecutarFuncaoServerSideSynch("CarregarEmpresas", parametros);
        this.RefreshAngular();
    };
    C_ConApp.prototype.OnGridCellPrepared = function (s, e) {
        var ds = e.component.getDataSource();
        ds.filter(function (item) {
            return item.Codigo == 0 || item.Empresas.filter(function (emp) { return emp.Empresa = e.data[0].Codigo; }).length > 0;
        });
        ds.load();
    };
    C_ConApp.prototype.SalvarEmpresas = function () {
        var parametros;
        var retorno;
        var envio = this.Resultados.map(function (value, index) {
            return {
                Empresa: value.Codigo,
                Enviar: value.Enviar_Aplicativo,
                ListaPreco: value.Lista_Preco_APP
            };
        });
        parametros = {
            empresas: envio
        };
        retorno = this.ExecutarFuncaoServerSideSynch("SalvarEmpresas", parametros);
        if (retorno) {
            MostrarMensagem("Empresas alteradas com sucesso");
        }
    };
    C_ConApp.prototype.CarregarFuncionario = function () {
        var parametros;
        var retorno;
        parametros = {
            codFuncionario: CNum(this.Funcionario.Cliente)
        };
        retorno = this.ExecutarFuncaoServerSideSynch("CarregarFuncionario", parametros);
        if (retorno) {
            this.Funcionario.Cliente = retorno.Codigo;
            this.Funcionario.Funcionario = retorno.isFuncionario;
        }
        this.RefreshAngular();
    };
    C_ConApp.prototype.AlterarFuncionario = function () {
        var parametros;
        var retorno;
        parametros = {
            codFuncionario: CNum(this.Funcionario.Cliente),
            isFuncionario: this.Funcionario.Funcionario
        };
        retorno = this.ExecutarFuncaoServerSideSynch("SalvarFuncionario", parametros);
        if (retorno) {
            MostrarMensagem("Funcionário alterado com sucesso");
        }
        this.LimparFuncionario();
        this.RefreshAngular();
    };
    return C_ConApp;
}(MouraPageAngular));
var c_ConApp = new C_ConApp();
//# sourceMappingURL=C_ConApp.js.map