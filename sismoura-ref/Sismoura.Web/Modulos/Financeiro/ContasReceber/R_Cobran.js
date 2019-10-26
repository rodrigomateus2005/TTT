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
var R_Cobran = /** @class */ (function (_super) {
    __extends(R_Cobran, _super);
    function R_Cobran() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Cobran.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Cobran.prototype, "lstContaCorrente", {
        get: function () {
            return window["lstContaCorrente_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Cobran.prototype, "lstEmpresa", {
        get: function () {
            return window["lstEmpresa_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Cobran.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Cobran.prototype, "lblTotalContratos", {
        get: function () {
            return window["lblTotalContratos_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Cobran.prototype, "lblTotalClientes", {
        get: function () {
            return window["lblTotalClientes_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_Cobran.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_Cobran.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.lstEmpresa) {
            adicionarEventoMoura(this.lstEmpresa.SelectionChanged, this.OnEmpresaChanged, this);
        }
    };
    //
    R_Cobran.prototype.OnEmpresaChanged = function (s, e) {
        var empresas = this.lstEmpresa.GetValuesNumber();
        if (empresas.length <= 0) {
            this.lstContaCorrente.Lista.RemoverTodosItens();
        }
        else {
            this.PreencherContasCorrente(empresas);
        }
    };
    R_Cobran.prototype.PreencherContasCorrente = function (empresa) {
        try {
            this.lstContaCorrente.Preencher(empresa, !this.lstContaCorrente.CheckBox.Check);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    //
    R_Cobran.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = this.DataServidor();
        this.Filtro.Tipo_Vendedor = "V";
        this.Filtro.Cidade = 0;
        this.Filtro.Cliente = 0;
        this.Filtro.Zona_Venda = 0;
        this.Filtro.Cliente_Inativo = true;
        this.Filtro.Somente_Fiscal = false;
        this.Filtro.Total_Contratos = "";
        this.Filtro.Total_Clientes = "";
        this.grid.PreencherGrid(null);
        this.lstContaCorrente.Lista.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.PreencherContasCorrente(this.lstEmpresa.GetValuesNumber());
        this.RefreshAngular();
    };
    R_Cobran.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            parametros = {
                dataInicial: this.Filtro.Data_Inicial,
                dataFinal: this.Filtro.Data_Final,
                codVendedor: CNum(this.Filtro.Vendedor),
                codCliente: CNum(this.Filtro.Cliente),
                codCidade: CNum(this.Filtro.Cidade),
                codZonaVenda: CNum(this.Filtro.Zona_Venda),
                tipoVendedor: this.Filtro.Tipo_Vendedor,
                somenteClientesAtivos: this.Filtro.Cliente_Inativo,
                somenteFiscal: this.Filtro.Somente_Fiscal,
                contasCorrentes: this.lstContaCorrente.Lista.GetValues().join(","),
                empresas: this.lstEmpresa.GetValues().join(",")
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                var retorno = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(retorno.Dados_Grade);
                _this.lblTotalClientes.Text = retorno.Total_Clientes;
                _this.lblTotalContratos.Text = retorno.Total_Contratos;
                _this.AccordionFiltros.SetExpanded(false);
                fecharEspera();
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
    return R_Cobran;
}(MouraPageRelacaoAngular));
var r_Cobran = new R_Cobran();
//# sourceMappingURL=R_Cobran.js.map