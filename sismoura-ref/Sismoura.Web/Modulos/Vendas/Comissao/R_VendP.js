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
var R_VendP = /** @class */ (function (_super) {
    __extends(R_VendP, _super);
    function R_VendP() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listaCodVenda = [];
        _this.listaPagamentoVenda = [];
        _this.listaPagamentoVendedor = [];
        _this.listaPagamentoGrupo = [];
        _this.listaPagamentoFornecedor = [];
        return _this;
    }
    Object.defineProperty(R_VendP.prototype, "gridVenda", {
        get: function () {
            return window['gridVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "gridGrupo", {
        get: function () {
            return window['gridGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "gridVendedor", {
        get: function () {
            return window['gridVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "gridFornecedor", {
        get: function () {
            return window['gridFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "gridFaixa", {
        get: function () {
            return window['gridFaixa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "txtVendedor", {
        get: function () {
            return window['txtVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "txtComissao", {
        get: function () {
            return window['txtComissao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "lstCalcular", {
        get: function () {
            return window['lstCalcular_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "lstTipo", {
        get: function () {
            return window['lstTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "chkConsid_Desc_Baixa", {
        get: function () {
            return window['chkConsid_Desc_Baixa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "chkConsid_Acresc_Baixa", {
        get: function () {
            return window['chkConsid_Acresc_Baixa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "lblValorTotal", {
        get: function () {
            return window['lblValorTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "lblTrocas", {
        get: function () {
            return window['lblTrocas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "lblAcrescimo", {
        get: function () {
            return window['lblAcrescimo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "lblTotalItem", {
        get: function () {
            return window['lblTotalItem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "lblTotalVolume", {
        get: function () {
            return window['lblTotalVolume_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "lblTotalVendedor", {
        get: function () {
            return window['lblTotalVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "lblDesconto", {
        get: function () {
            return window['lblDesconto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "lblTotalFinal", {
        get: function () {
            return window['lblTotalFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "lblComissao", {
        get: function () {
            return window['lblComissao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "lblComissaoPaga", {
        get: function () {
            return window['lblComissaoPaga_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "lblMsgVendedor", {
        get: function () {
            return window['lblMsgVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "cboPdv", {
        get: function () {
            return window['cboPdv_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "btnPagar", {
        get: function () {
            return window['btnPagar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VendP.prototype, "agpPagamento", {
        get: function () {
            return window['agpPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_VendP.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_VendP.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.lstCalcular) {
            adicionarEventoMoura(this.lstCalcular.SelectionChanged, this.MostrarCampos, this);
        }
        if (this.lstTipo) {
            adicionarEventoMoura(this.lstTipo.SelectionChanged, this.MostrarCamposTipo, this);
        }
        //if (this.btnPagar) {
        //    adicionarEventoMoura(this.btnPagar.ClickBotao, this.PagamentoComissao, this);
        //}
    };
    R_VendP.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        this.PreencherGrid();
    };
    R_VendP.prototype.MostrarCampos = function () {
        if (this.lstCalcular.GetValue() == "1") {
            this.chkConsid_Acresc_Baixa.Visible = false;
            this.chkConsid_Desc_Baixa.Visible = false;
        }
        else {
            this.chkConsid_Acresc_Baixa.Visible = true;
            this.chkConsid_Desc_Baixa.Visible = true;
        }
    };
    R_VendP.prototype.LimparCamposTipo = function () {
        this.Filtro = [];
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Tipo = "1";
        this.lstCalcular.SetValue("1");
        this.Filtro.Calcular = "1";
        this.Filtro.Vendedor = "";
        this.Filtro.Zona_Venda = "";
        this.Filtro.Venda_Comissao_Paga = false;
        this.Filtro.Desc_Baixa = false;
        this.Filtro.Acresc_Baixa = false;
        this.Filtro.Comissao = "";
        this.Filtro.Pdv = "";
        this.MostrarCampos();
        this.lblValorTotal.Text = "0,00";
        this.lblTrocas.Text = "0,00";
        this.lblAcrescimo.Text = "0,00";
        this.lblDesconto.Text = "0,00";
        this.lblTotalFinal.Text = "0,00";
        this.lblComissao.Text = "0,00";
        this.lblComissaoPaga.Text = "0,00";
        this.lblTotalVolume.Text = "0,00";
        this.lblTotalItem.Text = "0,00";
        this.lblMsgVendedor.Text = "";
        this.lblMsgVendedor.Visible = false;
        this.txtData.Visible = false;
        this.btnPagar.Visible = false;
        this.agpPagamento.Visible = false;
    };
    R_VendP.prototype.MostrarCamposTipo = function () {
        debugger;
        this.LimparCamposTipo();
        if (this.lstTipo.GetValue() == "1") {
            this.gridVenda.Visible = true;
            this.gridVendedor.Visible = false;
            this.gridGrupo.Visible = false;
            this.gridFornecedor.Visible = false;
            this.gridFaixa.Visible = false;
            this.txtComissao.Visible = true;
            this.lblMsgVendedor.Visible = false;
            this.lblTotalItem.Visible = true;
            this.lblTotalVolume.Visible = true;
            this.gridVenda.Refresh();
        }
        else if (this.lstTipo.GetValue() == "2") {
            this.gridVenda.Visible = false;
            this.gridVendedor.Visible = true;
            this.lblMsgVendedor.Visible = true;
            this.gridGrupo.Visible = false;
            this.gridFornecedor.Visible = false;
            this.gridFaixa.Visible = false;
            this.txtComissao.Visible = true;
            this.lblTotalItem.Visible = true;
            this.lblTotalVolume.Visible = true;
            this.gridVendedor.Refresh();
        }
        else if (this.lstTipo.GetValue() == "3") {
            this.gridVenda.Visible = false;
            this.gridVendedor.Visible = false;
            this.gridGrupo.Visible = true;
            this.gridFornecedor.Visible = false;
            this.gridFaixa.Visible = false;
            this.txtComissao.Visible = false;
            this.lblMsgVendedor.Visible = false;
            this.lblTotalItem.Visible = false;
            this.lblTotalVolume.Visible = false;
            this.gridGrupo.Refresh();
        }
        else if (this.lstTipo.GetValue() == "4") {
            this.gridVenda.Visible = false;
            this.gridVendedor.Visible = false;
            this.gridGrupo.Visible = false;
            this.gridFornecedor.Visible = true;
            this.gridFaixa.Visible = false;
            this.txtComissao.Visible = true;
            this.lblMsgVendedor.Visible = false;
            this.lblTotalItem.Visible = false;
            this.lblTotalVolume.Visible = false;
            this.gridFornecedor.Refresh();
            this.btnPagar.Visible = false;
            this.txtData.Visible = false;
            this.agpPagamento.Visible = false;
        }
        else if (this.lstTipo.GetValue() == "5") {
            this.gridVenda.Visible = false;
            this.gridVendedor.Visible = false;
            this.gridGrupo.Visible = false;
            this.gridFornecedor.Visible = false;
            this.gridFaixa.Visible = true;
            this.txtComissao.Visible = false;
            this.lblMsgVendedor.Visible = false;
            this.lblTotalItem.Visible = false;
            this.lblTotalVolume.Visible = false;
            this.gridFaixa.Refresh();
            this.btnPagar.Visible = false;
            this.txtData.Visible = false;
            this.agpPagamento.Visible = false;
        }
        this.RefreshAngular();
    };
    R_VendP.prototype.PreencherGrid = function () {
        var _this = this;
        debugger;
        var parametros;
        try {
            if (this.lstTipo.GetValue() == "4") {
                if (ValoresSismoura.ConfiguracoesRetaguarda.Bloquear_Servico_RComissao) {
                    MostrarAlerta("Observação: Nesta opção o valor do serviço estará sendo levado em consideração!");
                }
                var parametro = {
                    dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial),
                    dataFinal: ConvertToDate(this.Filtro.Periodo_Final),
                    codVendedor: CNum(this.Filtro.Vendedor),
                    vendaComissaoPaga: this.Filtro.Venda_Comissao_Paga,
                    codPdv: CNum(this.Filtro.Pdv),
                    empresas: this.cboPdv.lstEmpresa.GetValues().join(",")
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("VerificarProdutosFornecedor", parametro);
                if (!String.IsNullOrWhiteSpace(retorno.Msg)) {
                    MsgBoxJS(retorno.Msg, MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
                    return false;
                }
            }
            else if (this.lstTipo.GetValue() == "5") {
                var parametro = {};
                var retorno = this.ExecutarFuncaoServerSideSynch("GetByFaixaDesconto", parametro);
                if (!retorno) {
                    MsgBoxJS("Não há nenhuma Faixa de Desconto cadastrada!<br/>Deseja cadastrá - las agora ?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnAbrirTela, this), null);
                    return false;
                }
            }
            parametros = {
                dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial),
                dataFinal: ConvertToDate(this.Filtro.Periodo_Final),
                codVendedor: CNum(this.Filtro.Vendedor),
                codZona: CNum(this.Filtro.Zona_Venda),
                codPdv: CNum(this.cboPdv.PDVSelecionado == undefined ? 0 : this.cboPdv.PDVSelecionado),
                empresas: this.cboPdv.lstEmpresa.GetValues().join(","),
                tipo: CNum(this.Filtro.Tipo),
                calcular: CNum(this.Filtro.Calcular),
                vendaComissaoPaga: this.Filtro.Venda_Comissao_Paga,
                descBaixa: this.Filtro.Desc_Baixa,
                acrescBaixa: this.Filtro.Acresc_Baixa,
                comissao: (!this.Filtro.Comissao) ? 0 : this.Filtro.Comissao
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (_this.Filtro.Tipo == 1) {
                    _this.listaPagamentoVenda = [];
                    _this.gridVenda.PreencherGrid(retorno.Lista);
                    _this.gridVenda.GroupBy("Codigo_Venda");
                    if (retorno.Comissao != undefined) {
                        if (retorno.Comissao > 0) {
                            _this.txtData.Visible = true;
                            _this.btnPagar.Visible = true;
                            _this.agpPagamento.Visible = true;
                        }
                    }
                    _this.listaPagamentoVenda = retorno.ListaPagamentoVenda;
                    _this.gridVenda.Refresh();
                    _this.RefreshAngular();
                }
                else if (_this.Filtro.Tipo == 2) {
                    _this.listaPagamentoVendedor = [];
                    _this.gridVendedor.PreencherGrid(retorno.Lista);
                    _this.gridVendedor.GroupBy("Codigo_Venda");
                    if (retorno.Comissao != undefined) {
                        if (retorno.Comissao > 0) {
                            _this.txtData.Visible = true;
                            _this.btnPagar.Visible = true;
                            _this.agpPagamento.Visible = true;
                        }
                    }
                    _this.listaPagamentoVendedor = retorno.ListaPagamentoVendedor;
                    _this.gridVendedor.Refresh();
                    _this.RefreshAngular();
                }
                else if (_this.Filtro.Tipo == 3) {
                    _this.listaPagamentoGrupo = [];
                    _this.gridGrupo.PreencherGrid(retorno.Lista);
                    _this.gridGrupo.GroupBy("Codigo_Grupo");
                    if (retorno.Comissao != undefined) {
                        if (retorno.Comissao > 0) {
                            _this.txtData.Visible = true;
                            _this.btnPagar.Visible = true;
                            _this.agpPagamento.Visible = true;
                        }
                    }
                    _this.listaPagamentoGrupo = retorno.ListaPagamentoGrupo;
                    _this.gridGrupo.Refresh();
                    _this.RefreshAngular();
                }
                else if (_this.Filtro.Tipo == 4) {
                    _this.listaPagamentoFornecedor = [];
                    _this.gridFornecedor.PreencherGrid(retorno.Lista);
                    _this.gridFornecedor.GroupBy("Codigo_Fornecedor");
                    if (retorno.Comissao != undefined) {
                        if (retorno.Comissao > 0) {
                            _this.txtData.Visible = true;
                            _this.btnPagar.Visible = true;
                            _this.agpPagamento.Visible = true;
                        }
                    }
                    _this.listaPagamentoFornecedor = retorno.ListaPagamentoFornecedor;
                    _this.gridFornecedor.Refresh();
                    _this.RefreshAngular();
                }
                else if (_this.Filtro.Tipo == 5) {
                    _this.gridFaixa.PreencherGrid(retorno.Lista);
                    _this.gridFaixa.GroupBy("Faixa_Desconto");
                    _this.gridFaixa.Refresh();
                    _this.RefreshAngular();
                }
                _this.lblAcrescimo.Text = retorno.Acrescimo.Format(2);
                _this.lblDesconto.Text = retorno.Desconto.Format(2);
                _this.lblTrocas.Text = retorno.total_devolvido.Format(2);
                _this.lblValorTotal.Text = retorno.Valor_Total.Format(2);
                if (retorno.Total_Item != undefined) {
                    _this.lblTotalItem.Text = retorno.Total_Item.Format(2);
                }
                if (retorno.Total_Volume != undefined) {
                    _this.lblTotalVolume.Text = retorno.Total_Volume.Format(2);
                }
                if (retorno.Total_Final != undefined) {
                    _this.lblTotalFinal.Text = retorno.Total_Final.Format(2);
                }
                if (retorno.Comissao != undefined) {
                    _this.lblComissao.Text = retorno.Comissao.Format(2);
                }
                if (retorno.Comissao_Paga != undefined) {
                    _this.lblComissaoPaga.Text = retorno.Comissao_Paga.Format(2);
                }
                _this.lblMsgVendedor.Text = retorno.msgVendedor;
                return true;
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
    R_VendP.prototype.OnAbrirTela = function (e) {
        try {
            if (e.Resultado == MsgBoxResult.Yes) {
                abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroComissaoFaixaDesconto), []);
            }
            else {
                return false;
            }
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    R_VendP.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        debugger;
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Tipo = "1";
        this.Filtro.Calcular = "1";
        this.Filtro.Vendedor = "";
        this.Filtro.Zona_Venda = "";
        this.Filtro.Venda_Comissao_Paga = false;
        this.Filtro.Desc_Baixa = false;
        this.Filtro.Acresc_Baixa = false;
        this.Filtro.Comissao = "";
        this.Filtro.Pdv = "";
        this.gridGrupo.PreencherGrid(null);
        this.gridVenda.PreencherGrid(null);
        this.lblValorTotal.Text = "0,00";
        this.lblTrocas.Text = "0,00";
        this.lblAcrescimo.Text = "0,00";
        this.lblDesconto.Text = "0,00";
        this.lblTotalFinal.Text = "0,00";
        this.lblComissao.Text = "0,00";
        this.lblComissaoPaga.Text = "0,00";
        this.lblTotalVolume.Text = "0,00";
        this.lblTotalItem.Text = "0,00";
        this.lblMsgVendedor.Visible = false;
        this.btnPagar.Visible = false;
        this.txtData.Visible = false;
        this.agpPagamento.Visible = false;
        this.txtData.Date = new Date();
        this.lstTipo.SetValue("1");
        this.cboPdv.Limpar();
        var padraoLanc = 0;
        if (!String.IsNullOrWhiteSpace(ValoresSismoura.ConfiguracoesRetaguarda.Com_CC_Padrao_Lanc)) {
            padraoLanc = ValoresSismoura.ConfiguracoesRetaguarda.Com_CC_Padrao_Lanc.CNum();
        }
        if ((padraoLanc > 0) && ValoresSismoura.ConfiguracoesRetaguarda.Com_Ger_Lanc_Pago && String.IsNullOrWhiteSpace(this.txtVendedor.GetText())) {
            this.txtVendedor.Obrigatorio = true;
        }
        else {
            this.txtVendedor.Obrigatorio = false;
        }
        this.chkConsid_Acresc_Baixa.Visible = false;
        this.chkConsid_Desc_Baixa.Visible = false;
        this.listaCodVenda = [];
        this.listaPagamentoVenda = [];
        this.listaPagamentoVendedor = [];
        this.listaPagamentoGrupo = [];
        this.listaPagamentoFornecedor = [];
    };
    R_VendP.prototype.PagamentoComissao = function () {
        var _this = this;
        try {
            abrirEspera();
            setTimeout(function () {
                try {
                    if (_this.gridVenda.DataSource.length > 0 || _this.gridVendedor.DataSource.length > 0 || _this.gridGrupo.DataSource.length > 0 || _this.gridFornecedor.DataSource.length > 0) {
                        var parametro = {
                            listaPagamentoVenda: _this.listaPagamentoVenda,
                            listaPagamentoVendedor: _this.listaPagamentoVendedor,
                            listaPagamentoGrupo: _this.listaPagamentoGrupo,
                            listaPagamentoFornecedor: _this.listaPagamentoFornecedor,
                            tipo: _this.lstTipo.GetValue(),
                            dataPagamento: ConvertToDate(_this.txtData.Date),
                            tela: ValoresSismoura.NomeTela,
                            codUsuario: ValoresSismoura.UsuarioLogado,
                            valor: _this.lblComissao.Text.CNum(),
                            codVendedor: CNum(_this.txtVendedor.GetText()),
                            vendedor: _this.txtVendedor.GetResultado(),
                            valorTotal: _this.lblValorTotal.Text.CNum(),
                            dataInicial: ConvertToDate(_this.Filtro.Periodo_Inicial),
                            dataFinal: ConvertToDate(_this.Filtro.Periodo_Final),
                            codPdv: CNum(_this.cboPdv.PDVSelecionado),
                            pago: _this.Filtro.Venda_Comissao_Paga
                        };
                        var retorno = _this.ExecutarFuncaoServerSideSynch("PagamentoComissao", parametro);
                        if (retorno) {
                            fecharEspera();
                            MostrarMensagem("Operação efetuada com sucesso!!!");
                            _this.PreencherGrid();
                        }
                    }
                    else {
                        fecharEspera();
                        MostrarAlerta("Não há registros, gere a relação antes de pagar!");
                    }
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, 200);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    return R_VendP;
}(MouraPageRelacaoAngular));
var r_VendP = new R_VendP();
//# sourceMappingURL=R_VendP.js.map