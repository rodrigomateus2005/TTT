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
var R_CMVProd = /** @class */ (function (_super) {
    __extends(R_CMVProd, _super);
    function R_CMVProd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_CMVProd.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CMVProd.prototype, "cboDeposito", {
        get: function () {
            return window['cboDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CMVProd.prototype, "cboTipoCusto", {
        get: function () {
            return window['cboTipoCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CMVProd.prototype, "cboEstoqueFechamentoInicial", {
        get: function () {
            return window['cboEstoqueFechamentoInicial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CMVProd.prototype, "cboEstoqueFechamentoFinal", {
        get: function () {
            return window['cboEstoqueFechamentoFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CMVProd.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CMVProd.prototype, "lblTotalCMV", {
        get: function () {
            return window['lblTotalCMV_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CMVProd.prototype, "lblEstoqueInicial", {
        get: function () {
            return window['lblEstoqueInicial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CMVProd.prototype, "lblValorEntrada", {
        get: function () {
            return window['lblValorEntrada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CMVProd.prototype, "lblEstoqueFinal", {
        get: function () {
            return window['lblEstoqueFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_CMVProd.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.EmpresaChange, this);
        }
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.CellPrepared, this.PintarGridNegativo, this);
        }
        this.LimparCampos();
    };
    R_CMVProd.prototype.PintarGridNegativo = function (s, e) {
        if (e.rowType == "data" && e.data["isEstoque_Negativo"]) {
            e.cellElement.css("font-weight", "bold");
            e.cellElement.css("color", "red");
        }
    };
    R_CMVProd.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.EmpresaChange();
    };
    R_CMVProd.prototype.EmpresaChange = function () {
        var parametros = {
            codEmpresa: this.cboEmpresa.GetValue()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetEmpresaPadrao", parametros);
        if (retorno > 0) {
            this.cboDeposito.SetValue(retorno);
        }
    };
    R_CMVProd.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.cboTipoCusto.LimparSelecao();
        this.lblTotalCMV.Text = "";
        this.lblEstoqueFinal.Text = "";
        this.lblEstoqueInicial.Text = "";
        this.lblValorEntrada.Text = "";
        this.Grid.PreencherGrid(null);
    };
    R_CMVProd.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        parametros = {
            fechamentoInicial: this.cboEstoqueFechamentoInicial.GetValue(),
            fechamentoFinal: this.cboEstoqueFechamentoFinal.GetValue(),
            empresa: this.cboEmpresa.GetValue(),
            deposito: this.cboDeposito.GetValue(),
            tipoCusto: this.cboTipoCusto.GetValue()
        };
        abrirEspera();
        this.ExecutarFuncaoServerSideAsynch("ObterInfoCMV", parametros, function (d) {
            var retorno = GetRetornoAJAX(d);
            if (retorno) {
                _this.Grid.PreencherGrid(retorno.ProdutosCMV);
                _this.lblTotalCMV.Text = retorno.ValorCMV.Format(2);
                _this.lblEstoqueInicial.Text = retorno.ValorEstoqueInicial.Format(2);
                _this.lblEstoqueFinal.Text = retorno.ValorEstoqueFinal.Format(2);
                _this.lblValorEntrada.Text = retorno.ValorEntrada.Format(2);
            }
            fecharEspera();
        }, function (erro) {
            fecharEspera();
            LogarException(erro);
        }, this);
    };
    return R_CMVProd;
}(MouraPageRelacaoAngular));
var r_CMVProd = new R_CMVProd();
//# sourceMappingURL=R_CMVProd.js.map