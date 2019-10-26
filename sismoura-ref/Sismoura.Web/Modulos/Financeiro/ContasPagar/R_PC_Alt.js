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
var R_PC_Alt = /** @class */ (function (_super) {
    __extends(R_PC_Alt, _super);
    function R_PC_Alt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_PC_Alt.prototype, "AccordionFiltros", {
        get: function () {
            return window['AccordionFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PC_Alt.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PC_Alt.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PC_Alt.prototype, "txtFornecedor", {
        get: function () {
            return window['txtFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PC_Alt.prototype, "lstContaCorrente", {
        get: function () {
            return window['lstContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PC_Alt.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PC_Alt.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_PC_Alt.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_PC_Alt.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.ClickBotao, this);
        }
    };
    R_PC_Alt.prototype.PreencherGrade = function () {
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
                empresas: this.lstEmpresa.GetValues().join(",")
            };
            this.accCadastro.SetExpanded(false);
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("GetRelacaoContasPagarAlteradas", parametros, function (d) {
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
    R_PC_Alt.prototype.ClickBotao = function (s, e) {
        abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDeContasAPagar), e.data["Codigo_Conta_Pagar"]);
    };
    R_PC_Alt.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        var dataInicio = new Date();
        dataInicio.setDate(1);
        this.txtPeriodo.textBoxCalendarioInicio.SetDate(dataInicio);
        this.txtPeriodo.textBoxCalendarioFim.SetDate(new Date());
        this.txtFornecedor.Limpar();
        this.lstContaCorrente.Lista.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.grid.PreencherGrid(null);
    };
    return R_PC_Alt;
}(MouraPageRelacaoAngular));
var r_PC_Alt = new R_PC_Alt();
//# sourceMappingURL=R_PC_Alt.js.map