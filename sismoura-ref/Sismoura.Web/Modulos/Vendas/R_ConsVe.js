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
var R_ConsVe = /** @class */ (function (_super) {
    __extends(R_ConsVe, _super);
    function R_ConsVe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ConsVe.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "txtVenda", {
        get: function () {
            return window['txtVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "txtObservacao", {
        get: function () {
            return window['txtObservacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "lblCliente", {
        get: function () {
            return window['lblCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "lblConsignacao", {
        get: function () {
            return window['lblConsignacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "lblData", {
        get: function () {
            return window['lblData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "lblOrigemVenda", {
        get: function () {
            return window['lblOrigemVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "lblUsuarioLogado", {
        get: function () {
            return window['lblUsuarioLogado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "lblIbpt", {
        get: function () {
            return window['lblIbpt_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "lblSubTotal", {
        get: function () {
            return window['lblSubTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "lblCreditoUtilizado", {
        get: function () {
            return window['lblCreditoUtilizado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "lblDevolvidoTroca", {
        get: function () {
            return window['lblDevolvidoTroca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "lblDescontoInformado", {
        get: function () {
            return window['lblDescontoInformado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "lblDescontoTotal", {
        get: function () {
            return window['lblDescontoTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "lblDescontoUnitarioSoma", {
        get: function () {
            return window['lblDescontoUnitarioSoma_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "lblAcrescimo", {
        get: function () {
            return window['lblAcrescimo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "lblTotal", {
        get: function () {
            return window['lblTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "lblCreditoGanho", {
        get: function () {
            return window['lblCreditoGanho_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "lblFormaPagamento", {
        get: function () {
            return window['lblFormaPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "lblTroco", {
        get: function () {
            return window['lblTroco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "grdProdutos", {
        get: function () {
            return window['grdProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "grdCartao", {
        get: function () {
            return window['grdCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "grdCDC", {
        get: function () {
            return window['grdCDC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "grdCheques", {
        get: function () {
            return window['grdCheques_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "grdCrediario", {
        get: function () {
            return window['grdCrediario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConsVe.prototype, "grdCrediarioAgrupado", {
        get: function () {
            return window['grdCrediarioAgrupado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_ConsVe.prototype.OnPageLoad = function () {
        this.LimparCampos();
        this.lblDescontoUnitarioSoma.Text = '0,00';
        if (this.ParametrosTela["codigo"]) {
            this.txtVenda.Procurar(this.ParametrosTela["codigo"]);
        }
    };
    R_ConsVe.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtVenda) {
            adicionarEventoMoura(this.txtVenda.Procurou, this.PreencherGrade, this);
        }
    };
    R_ConsVe.prototype.PreencherGrade = function () {
        var codVenda = CNum(this.txtVenda.GetText());
        try {
            var parametros;
            parametros = {
                codVenda: codVenda
            };
            this.PreencherDadosVenda(parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_ConsVe.prototype.PreencherGridProdutos = function (parametros) {
        var cad = this.ExecutarFuncaoServerSideSynch("GetProdutos", parametros);
        this.grdProdutos.PreencherGrid(cad);
    };
    R_ConsVe.prototype.PreencherGridCheques = function (parametros) {
        var cad = this.ExecutarFuncaoServerSideSynch("GetCheques", parametros);
        this.grdCheques.PreencherGrid(cad);
    };
    R_ConsVe.prototype.PreencherGridCrediario = function (parametros) {
        var cad = this.ExecutarFuncaoServerSideSynch("GetCrediario", parametros);
        this.grdCrediario.PreencherGrid(cad);
    };
    R_ConsVe.prototype.PreencherGridCartao = function (parametros) {
        var cad = this.ExecutarFuncaoServerSideSynch("GetCartao", parametros);
        this.grdCartao.PreencherGrid(cad);
    };
    R_ConsVe.prototype.PreencherGridCrediarioAgrupado = function (parametros) {
        var cad = this.ExecutarFuncaoServerSideSynch("GetCrediarioAgrupado", parametros);
        this.grdCrediarioAgrupado.PreencherGrid(cad);
    };
    R_ConsVe.prototype.PreencherGridCDC = function (parametros) {
        var cad = this.ExecutarFuncaoServerSideSynch("GetCDC", parametros);
        this.grdCDC.PreencherGrid(cad);
    };
    R_ConsVe.prototype.DadosVenda = function (parametros) {
        var cad = this.ExecutarFuncaoServerSideSynch("GetVendaPorCodigo", parametros);
        return cad;
    };
    R_ConsVe.prototype.PreencherDadosVenda = function (parametros) {
        var dados = this.DadosVenda(parametros);
        if (dados) {
            var consignacao = this.ExecutarFuncaoServerSideSynch("GetConsignacaoVenda", parametros);
            this.PreencherGridProdutos(parametros);
            this.PreencherGridCheques(parametros);
            this.PreencherGridCrediario(parametros);
            this.PreencherGridCartao(parametros);
            this.PreencherGridCrediarioAgrupado(parametros);
            this.lblOrigemVenda.Text = this.ExecutarFuncaoServerSideSynch("GetOrigemVenda", parametros);
            this.lblConsignacao.Text = consignacao == '0,00' ? "" : consignacao;
            this.lblDevolvidoTroca.Text = this.ExecutarFuncaoServerSideSynch("GetTotalDevolvidoTroca", parametros);
            this.lblSubTotal.Text = dados.Valor.Format(ValoresSismoura.CasasDecimaisValor);
            this.lblCreditoUtilizado.Text = dados.Valor_Credito_Utilizado.Format(ValoresSismoura.CasasDecimaisValor);
            this.lblDescontoInformado.Text = dados.Desconto.Format(ValoresSismoura.CasasDecimaisValor);
            this.lblDescontoTotal.Text = (dados.Desconto - dados.Valor_Credito_Utilizado).Format(ValoresSismoura.CasasDecimaisValor);
            this.lblDescontoUnitarioSoma.Text = dados.Produtos.Sum('Desconto').Format(ValoresSismoura.CasasDecimaisValor);
            this.lblAcrescimo.Text = dados.Acrescimo.Format(ValoresSismoura.CasasDecimaisValor);
            this.lblTotal.Text = dados.Valor_Final.Format(ValoresSismoura.CasasDecimaisValor);
            this.lblCreditoGanho.Text = dados.Valor_Credito.Format(ValoresSismoura.CasasDecimaisValor);
            this.lblFormaPagamento.Text = dados.FormaPagamentoString;
            this.lblTroco.Text = dados.Valor_Troco.Format(ValoresSismoura.CasasDecimaisValor);
            this.txtObservacao.SetText(dados.Texto_Final);
            this.ExibirData(dados);
            this.ExibirDadosCliente(dados);
            this.ExibirTextoIbpt(dados);
            this.ExibirUsuarioLogado(dados);
            this.ExibirMensagemVendaCancelada(dados);
        }
        else {
            var codigo = this.txtVenda.GetText();
            if (codigo.CNum() > 0) {
                MostrarAlerta('Venda não encontrado(a) ou inativo(a)');
            }
            this.LimparCampos();
        }
    };
    R_ConsVe.prototype.ExibirData = function (venda) {
        if (venda.VendedorEntity) {
            this.lblData.Text = venda.Data.ToDate().FormataDataHora() + " / " + venda.VendedorEntity.Abreviacao;
        }
        else {
            this.lblData.Text = venda.Data.ToDate().FormataDataHora();
        }
    };
    R_ConsVe.prototype.ExibirDadosCliente = function (venda) {
        if (venda.ClienteEntity) {
            this.lblCliente.Text = venda.ClienteEntity.Nome;
        }
        else {
            if (venda.Nome_Cliente) {
                this.lblCliente.Text = venda.Nome_Cliente + " (não cadastrado)";
            }
            else {
                this.lblCliente.Text = "";
            }
        }
    };
    R_ConsVe.prototype.ExibirTextoIbpt = function (venda) {
        if (venda.Texto_Ibpt) {
            this.lblIbpt.Text = venda.Texto_Ibpt;
            this.lblIbpt.Visible = true;
        }
        else {
            this.lblIbpt.Visible = false;
        }
    };
    R_ConsVe.prototype.ExibirUsuarioLogado = function (venda) {
        if (venda.UsuarioLogadoEntity) {
            this.lblUsuarioLogado.Text = venda.UsuarioLogadoEntity.Abreviacao;
        }
        else {
            this.lblUsuarioLogado.Text = '';
        }
    };
    R_ConsVe.prototype.ExibirMensagemVendaCancelada = function (venda) {
        if (venda.Cancelada) {
            MsgBoxJS("Venda cancelada <br> Motivo: " + venda.Motivo_Cancelamento, MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
        }
    };
    R_ConsVe.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtVenda.SetText('');
        this.txtObservacao.Limpar();
        this.lblCliente.Text = '';
        this.lblConsignacao.Text = '';
        this.lblData.Text = '';
        this.lblOrigemVenda.Text = '';
        this.lblDescontoUnitarioSoma.Text = '';
        this.lblUsuarioLogado.Text = '';
        this.lblIbpt.Text = '';
        this.lblIbpt.Visible = false;
        this.lblSubTotal.Text = '';
        this.lblCreditoUtilizado.Text = '';
        this.lblDevolvidoTroca.Text = '';
        this.lblDescontoInformado.Text = '';
        this.lblDescontoTotal.Text = '';
        this.lblDescontoUnitarioSoma.Text = '';
        this.lblAcrescimo.Text = '';
        this.lblTotal.Text = '';
        this.lblCreditoGanho.Text = '';
        this.lblFormaPagamento.Text = '';
        this.lblTroco.Text = '';
        this.grdProdutos.PreencherGrid(null);
        this.grdCartao.PreencherGrid(null);
        this.grdCDC.PreencherGrid(null);
        this.grdCheques.PreencherGrid(null);
        this.grdCrediario.PreencherGrid(null);
        this.grdCrediarioAgrupado.PreencherGrid(null);
    };
    return R_ConsVe;
}(MouraPageRelacaoAngular));
var r_ConsVe = new R_ConsVe();
//# sourceMappingURL=R_ConsVe.js.map