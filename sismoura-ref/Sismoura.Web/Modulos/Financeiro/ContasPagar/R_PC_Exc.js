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
var R_PC_Exc = /** @class */ (function (_super) {
    __extends(R_PC_Exc, _super);
    function R_PC_Exc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_PC_Exc.prototype, "AccordionFiltros", {
        get: function () {
            return window['AccordionFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PC_Exc.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PC_Exc.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PC_Exc.prototype, "txtFornecedor", {
        get: function () {
            return window['txtFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PC_Exc.prototype, "lstContaCorrente", {
        get: function () {
            return window['lstContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PC_Exc.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PC_Exc.prototype, "chkFornecedorInativo", {
        get: function () {
            return window['chkFornecedorInativo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PC_Exc.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_PC_Exc.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_PC_Exc.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        try {
            var dataInicial = this.txtPeriodo.textBoxCalendarioInicio.GetDate();
            var dataFinal = this.txtPeriodo.textBoxCalendarioFim.GetDate();
            var parametros = {
                dataInicial: dataInicial,
                dataFinal: dataFinal,
                codFornecedor: this.txtFornecedor.GetText().CNum(),
                contasCorrentes: this.lstContaCorrente.Lista.GetValues().join(","),
                empresas: this.lstEmpresa.GetValues().join(","),
                fornecedorInativo: this.chkFornecedorInativo.Checked
            };
            this.accCadastro.SetExpanded(false);
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("GetRelacaoContasPagarExcluidas", parametros, function (d) {
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
    R_PC_Exc.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        var dataInicio = new Date();
        dataInicio.setDate(1);
        this.txtPeriodo.textBoxCalendarioInicio.SetDate(dataInicio);
        this.txtPeriodo.textBoxCalendarioFim.SetDate(new Date());
        this.chkFornecedorInativo.Checked = false;
        this.txtFornecedor.Limpar();
        this.lstContaCorrente.Lista.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.grid.PreencherGrid(null);
    };
    return R_PC_Exc;
}(MouraPageRelacaoAngular));
var r_PC_Exc = new R_PC_Exc();
//# sourceMappingURL=R_PC_Exc.js.map