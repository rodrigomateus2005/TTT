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
var R_PrNEnc = /** @class */ (function (_super) {
    __extends(R_PrNEnc, _super);
    function R_PrNEnc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_PrNEnc.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PrNEnc.prototype, "txtEmpresa", {
        get: function () {
            return window['txtEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PrNEnc.prototype, "lblCNPJ", {
        get: function () {
            return window['lblCNPJ_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PrNEnc.prototype, "lblRazaoSocial", {
        get: function () {
            return window['lblRazaoSocial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PrNEnc.prototype, "lblIE", {
        get: function () {
            return window['lblIE_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PrNEnc.prototype, "lblEndereco", {
        get: function () {
            return window['lblEndereco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PrNEnc.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PrNEnc.prototype, "btnImprimir", {
        get: function () {
            return window['btnImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_PrNEnc.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtEmpresa) {
            adicionarEventoMoura(this.txtEmpresa.Procurou, this.OnPesquisouEmpresa, this);
        }
        if (this.btnImprimir) {
            adicionarEventoMoura(this.btnImprimir.Click, this.OnClickImprimir, this);
        }
    };
    R_PrNEnc.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        this.PreencherGrade();
    };
    R_PrNEnc.prototype.OnClickImprimir = function (s, e) {
        e.processOnServer = false;
    };
    R_PrNEnc.prototype.OnPesquisouEmpresa = function (s, e) {
        var parametros;
        parametros = {
            codEmpresa: this.txtEmpresa.GetText().CNum()
        };
        var empresa = this.ExecutarFuncaoServerSideSynch("GetEmpresa", parametros);
        if (empresa) {
            this.lblCNPJ.Text = empresa.Cnpj;
            this.lblRazaoSocial.Text = empresa.Razao_Social;
            this.lblIE.Text = empresa.Ie;
            this.lblEndereco.Text = empresa.Endereco;
        }
        else {
            this.LimparCamposEmpresa();
        }
    };
    R_PrNEnc.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        parametros = {};
        var resultado = this.ExecutarFuncaoServerSideSynch("GerarRelacao", parametros);
        this.Grid.PreencherGrid(resultado);
        this.Grid.Refresh();
    };
    R_PrNEnc.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtEmpresa.Limpar();
        this.txtEmpresa.Enabled = false;
        this.LimparCamposEmpresa();
        this.Grid.PreencherGrid(null);
        if (this.ParametrosTela.codEmpresa) {
            this.txtEmpresa.Procurar(this.ParametrosTela.codEmpresa);
        }
        else {
            this.txtEmpresa.Procurar(ValoresSismoura.EmpresaPadraoUsuario.toString());
        }
    };
    R_PrNEnc.prototype.LimparCamposEmpresa = function () {
        this.lblCNPJ.Text = "";
        this.lblRazaoSocial.Text = "";
        this.lblIE.Text = "";
        this.lblEndereco.Text = "";
    };
    return R_PrNEnc;
}(MouraPageRelacaoAngular));
var r_PrNEnc = new R_PrNEnc();
//# sourceMappingURL=R_PrNEnc.js.map