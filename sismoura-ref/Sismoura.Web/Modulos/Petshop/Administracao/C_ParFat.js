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
var C_ParFat = /** @class */ (function (_super) {
    __extends(C_ParFat, _super);
    function C_ParFat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ParFat.prototype, "Empresas", {
        get: function () {
            if (!this.GetScope()['Empresas']) {
                this.GetScope()['Empresas'] = [];
            }
            return this.GetScope()['Empresas'];
        },
        set: function (value) {
            this.GetScope()['Empresas'] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_ParFat.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    C_ParFat.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    C_ParFat.prototype.LimparCampos = function () {
        this.CarregarEmpresas();
        this.RefreshAngular();
    };
    C_ParFat.prototype.CarregarEmpresas = function () {
        var parametros;
        parametros = {};
        this.Empresas = [];
        this.Empresas = this.ExecutarFuncaoServerSideSynch("CarregarEmpresas", parametros);
        this.RefreshAngular();
    };
    C_ParFat.prototype.SalvarEmpresas = function () {
        var param = {
            empresas: JSON.stringify(this.Empresas),
            tela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("SalvarEmpresas", param);
        if (retorno) {
            MostrarMensagem("Empresas alteradas com sucesso");
        }
    };
    return C_ParFat;
}(MouraPageAngular));
var c_ParFat = new C_ParFat();
//# sourceMappingURL=C_ParFat.js.map