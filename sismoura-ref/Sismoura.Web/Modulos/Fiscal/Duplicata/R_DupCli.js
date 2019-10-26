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
var R_DupCli = /** @class */ (function (_super) {
    __extends(R_DupCli, _super);
    function R_DupCli() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_DupCli.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_DupCli.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_DupCli.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_DupCli.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_DupCli.prototype.PreencherGrade = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                codCliente: CNum(this.Filtro.Cliente)
            };
            if (parametros.codCliente == 0) {
                MostrarAlerta("Preencha corretamente o campo: Cliente");
                return;
            }
            this.AccordionFiltros.SetExpanded(false);
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("GetData", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(retorno);
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    R_DupCli.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Cliente = "";
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    return R_DupCli;
}(MouraPageRelacaoAngular));
var r_DupCli = new R_DupCli();
//# sourceMappingURL=R_DupCli.js.map