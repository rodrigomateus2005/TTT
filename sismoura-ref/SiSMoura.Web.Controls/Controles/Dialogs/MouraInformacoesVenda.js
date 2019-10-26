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
var MouraInformacoesVenda = /** @class */ (function (_super) {
    __extends(MouraInformacoesVenda, _super);
    function MouraInformacoesVenda(id) {
        var _this = _super.call(this, id) || this;
        _this.codVenda = 0;
        return _this;
    }
    Object.defineProperty(MouraInformacoesVenda.prototype, "mdInfVenda", {
        get: function () {
            return window[this.ID + '_mdInfVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraInformacoesVenda.prototype, "grdProdutos", {
        get: function () {
            return window[this.ID + '_grdProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraInformacoesVenda.prototype, "grdPagamentos", {
        get: function () {
            return window[this.ID + '_grdPagamentos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraInformacoesVenda.prototype, "lblVenda", {
        get: function () {
            return window[this.ID + '_lblVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraInformacoesVenda.prototype, "btnConsultaVenda", {
        get: function () {
            return window[this.ID + '_btnConsultaVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraInformacoesVenda.prototype, "lblData", {
        get: function () {
            return window[this.ID + '_lblData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraInformacoesVenda.prototype, "lblVendedor", {
        get: function () {
            return window[this.ID + '_lblVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraInformacoesVenda.prototype, "lblCliente", {
        get: function () {
            return window[this.ID + '_lblCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraInformacoesVenda.prototype, "lblComandas", {
        get: function () {
            return window[this.ID + '_lblComandas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraInformacoesVenda.prototype, "lblAtendimentos", {
        get: function () {
            return window[this.ID + '_lblAtendimentos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraInformacoesVenda.prototype, "lblCOO", {
        get: function () {
            return window[this.ID + '_lblCOO_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraInformacoesVenda.prototype, "lblSat", {
        get: function () {
            return window[this.ID + '_lblSat_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraInformacoesVenda.prototype, "btnFecharVenda", {
        get: function () {
            return window[this.ID + '_btnFecharVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraInformacoesVenda.prototype, "tbVenda", {
        get: function () {
            return window[this.ID + '_tbVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    MouraInformacoesVenda.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.btnFecharVenda) {
            adicionarEventoMoura(this.btnFecharVenda.Click, this.OnClickFecharVenda, this);
        }
        if (this.btnConsultaVenda) {
            adicionarEventoMoura(this.btnConsultaVenda.Click, this.OnClickConsultarVenda, this);
        }
    };
    MouraInformacoesVenda.prototype.Abrir = function (codVenda) {
        if (!codVenda) {
            MostrarAlerta("Código da venda não informado");
            return;
        }
        if (ValoresSismoura.Estabelecimento == 0) {
            this.lblAtendimentos.Visible = false;
        }
        this.LimparCampos();
        this.codVenda = codVenda;
        if (this.PreencherInformacoesVenda(codVenda)) {
            this.mdInfVenda.SetHeaderText("Informações da Venda: " + codVenda);
            this.tbVenda.SetActiveTabIndex(0);
            this.mdInfVenda.Show();
        }
    };
    MouraInformacoesVenda.prototype.LimparCampos = function () {
        this.grdPagamentos.PreencherGrid([]);
        this.grdProdutos.PreencherGrid([]);
        this.lblAtendimentos.Text = "";
        this.lblCliente.Text = "";
        this.lblComandas.Text = "";
        this.lblCOO.Text = "";
        this.lblData.Text = "";
        this.lblSat.Text = "";
        this.lblVenda.Text = "";
        this.lblVendedor.Text = "";
        this.lblCOO.Visible = false;
        this.lblSat.Visible = false;
        this.lblComandas.Visible = false;
    };
    MouraInformacoesVenda.prototype.PreencherInformacoesVenda = function (codVenda) {
        try {
            var param = {
                codVenda: codVenda
            };
            var retorno = this.ExecutarHttpRequest("GetInformacoesVenda", param);
            if (String.IsNullOrWhiteSpace(retorno)) {
                MostrarAlerta("Venda não encontrada");
                return false;
            }
            var dadosVenda = JSON.parse(retorno);
            if (!dadosVenda) {
                MostrarAlerta("Venda não encontrada");
                return false;
            }
            this.grdProdutos.PreencherGrid(dadosVenda.Produtos);
            this.grdPagamentos.PreencherGrid(dadosVenda.Pagamentos);
            this.lblVenda.Text = dadosVenda.CodVenda;
            this.lblData.Text = dadosVenda.Data;
            this.lblVendedor.Text = dadosVenda.Vendedor;
            this.lblCliente.Text = dadosVenda.Cliente;
            if (!String.IsNullOrWhiteSpace(dadosVenda.COO)) {
                this.lblCOO.Text = dadosVenda.COO;
                this.lblCOO.Visible = true;
            }
            if (!String.IsNullOrWhiteSpace(dadosVenda.SAT)) {
                this.lblSat.Text = dadosVenda.SAT;
                this.lblSat.Visible = true;
            }
            if (!String.IsNullOrWhiteSpace(dadosVenda.Comandas)) {
                this.lblComandas.Text = dadosVenda.Comandas;
                this.lblComandas.Visible = true;
            }
            if (!String.IsNullOrWhiteSpace(dadosVenda.Atendimentos)) {
                this.lblAtendimentos.Text = dadosVenda.Atendimentos;
                this.lblAtendimentos.Visible = true;
            }
            return true;
        }
        catch (ex) {
            LogarException(ex);
            return false;
        }
    };
    MouraInformacoesVenda.prototype.OnClickConsultarVenda = function (s, e) {
        e.processOnServer = false;
        consultarVenda(this.codVenda);
    };
    MouraInformacoesVenda.prototype.OnClickFecharVenda = function (s, e) {
        e.processOnServer = false;
        this.mdInfVenda.Hide();
    };
    return MouraInformacoesVenda;
}(MouraControl));
//# sourceMappingURL=MouraInformacoesVenda.js.map