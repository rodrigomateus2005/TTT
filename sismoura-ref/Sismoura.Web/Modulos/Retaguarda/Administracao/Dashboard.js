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
var Dashboard = /** @class */ (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Dashboard.prototype, "hdnAtualizouConteudo", {
        get: function () {
            return $("#hdnAtualizouConteudo")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "btnSelecionarPainel", {
        get: function () {
            return window['btnSelecionarPainel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "grdTopMargem", {
        get: function () {
            return window['grdTopMargem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "grdTopProduto", {
        get: function () {
            return window['grdTopProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "grdTopMargemDiario", {
        get: function () {
            return window['grdTopMargemDiario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "grdTopProdutoDiario", {
        get: function () {
            return window['grdTopProdutoDiario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "cboLocalLoja", {
        get: function () {
            return window['cboLocalLoja_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "cboLocalGlobal", {
        get: function () {
            return window['cboLocalGlobal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "cboEmpresaTopMargem", {
        get: function () {
            return window['cboEmpresaTopMargem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "cboEmpresaTopProduto", {
        get: function () {
            return window['cboEmpresaTopProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "cboEmpresaTopProdutosDiario", {
        get: function () {
            return window['cboEmpresaTopProdutosDiario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "cboEmpresaTopMargemDiario", {
        get: function () {
            return window['cboEmpresaTopMargemDiario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockTopMargem", {
        get: function () {
            return window['dockTopMargem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockTopProdutos", {
        get: function () {
            return window['dockTopProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockTopMargemDiario", {
        get: function () {
            return window['dockTopMargemDiario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockTopProdutosDiario", {
        get: function () {
            return window['dockTopProdutosDiario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "mdDock", {
        get: function () {
            return window['mdDock_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "grdPaineis", {
        get: function () {
            return window['grdPaineis_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "btnPaineis", {
        get: function () {
            return window['btnPaineis_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockFinanceiro", {
        get: function () {
            return window['dockFinanceiro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "lblReceberBaixadasMes", {
        get: function () {
            return window['lblReceberBaixadasMes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "lblReceberVencerMes", {
        get: function () {
            return window['lblReceberVencerMes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "lblReceberSaldo", {
        get: function () {
            return window['lblReceberSaldo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "lblReceberVencidasMesAtual", {
        get: function () {
            return window['lblReceberVencidasMesAtual_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "lblReceberVencidasMesAnterior", {
        get: function () {
            return window['lblReceberVencidasMesAnterior_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "lblReceberVencidasMesAnterior2", {
        get: function () {
            return window['lblReceberVencidasMesAnterior2_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "lblContasPagasMes", {
        get: function () {
            return window['lblContasPagasMes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "lblContasPagarVencidas", {
        get: function () {
            return window['lblContasPagarVencidas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "lblPrevisaoPagar", {
        get: function () {
            return window['lblPrevisaoPagar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "lblContasPagar", {
        get: function () {
            return window['lblContasPagar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockPagar", {
        get: function () {
            return window['dockPagar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "lblSaldoPrevisaoReceber", {
        get: function () {
            return window['lblSaldoPrevisaoReceber_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "lblSaldoPrevisaoPagar", {
        get: function () {
            return window['lblSaldoPrevisaoPagar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "lblSaldoFinanceiro", {
        get: function () {
            return window['lblSaldoFinanceiro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockSaldoFinanceiro", {
        get: function () {
            return window['dockSaldoFinanceiro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "LstEmpresa", {
        get: function () {
            return window['LstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockResultado", {
        get: function () {
            return window['dockResultado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "grdResultado", {
        get: function () {
            return window['grdResultado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "grdDfeEntrada", {
        get: function () {
            return window['grdDfeEntrada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockDfeEntrada", {
        get: function () {
            return window['dockDfeEntrada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockDfe", {
        get: function () {
            return window['dockDfe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "lblNotasBaixadas", {
        get: function () {
            return window['lblNotasBaixadas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "lblNotasConfirmadas", {
        get: function () {
            return window['lblNotasConfirmadas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockTotalVendas", {
        get: function () {
            return window['dockTotalVendas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "grdTotalVendas", {
        get: function () {
            return window['grdTotalVendas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "grdVendasVendedor", {
        get: function () {
            return window['grdVendasVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockVendasVendedor", {
        get: function () {
            return window['dockVendasVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "grdContratosEmp", {
        get: function () {
            return window['grdContratosEmp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockContratoEmp", {
        get: function () {
            return window['dockContratoEmp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockContratoCancEmp", {
        get: function () {
            return window['dockContratoCancEmp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "grdContratosCancEmp", {
        get: function () {
            return window['grdContratosCancEmp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockContratoSaldoEmp", {
        get: function () {
            return window['dockContratoSaldoEmp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "grdContratosSaldoEmp", {
        get: function () {
            return window['grdContratosSaldoEmp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockTicketMedioDiario", {
        get: function () {
            return window['dockTicketMedioDiario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "grdTicketMedioDiario", {
        get: function () {
            return window['grdTicketMedioDiario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockTicketMedioMensal", {
        get: function () {
            return window['dockTicketMedioMensal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "grdTicketMedioMensal", {
        get: function () {
            return window['grdTicketMedioMensal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockPetServicoProf", {
        get: function () {
            return window['dockPetServicoProf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "grdAtendProf", {
        get: function () {
            return window['grdAtendProf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockEstoqueTanque", {
        get: function () {
            return window['dockEstoqueTanque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "grdEstoqueTanque", {
        get: function () {
            return window['grdEstoqueTanque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockUltLmc", {
        get: function () {
            return window['dockUltLmc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "grdUltLmc", {
        get: function () {
            return window['grdUltLmc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockEvolucaoVendas", {
        get: function () {
            return window['dockEvolucaoVendas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "GraficoEvolucaoVendas", {
        get: function () {
            try {
                return $("#graficoEvolucaoVendas").dxChart('instance');
            }
            catch (ex) {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "btnRecarregar", {
        get: function () {
            return window['btnRecarregar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockVendasFPgto", {
        get: function () {
            return window['dockVendasFPgto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "lblTVendaPgto", {
        get: function () {
            return window['lblTVendaPgto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "GraficoVendasFormaPgto", {
        get: function () {
            try {
                return $("#graficoVendasFormaPgto").dxChart('instance');
            }
            catch (ex) {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockEvolucaoPet", {
        get: function () {
            return window['dockEvolucaoPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "GraficoEvolucaoPet", {
        get: function () {
            try {
                return $("#graficoEvolucaoPet").dxChart('instance');
            }
            catch (ex) {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockEstoque", {
        get: function () {
            return window['dockEstoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "GraficoEstoque", {
        get: function () {
            try {
                return $("#graficoEstoque").dxChart('instance');
            }
            catch (ex) {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockCompras", {
        get: function () {
            return window['dockCompras_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "GraficoCompras", {
        get: function () {
            try {
                return $("#graficoCompras").dxChart('instance');
            }
            catch (ex) {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockContratoCancelado", {
        get: function () {
            return window['dockContratoCancelado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "GraficoContratoCancelado", {
        get: function () {
            try {
                return $("#graficoContratoCancelado").dxChart('instance');
            }
            catch (ex) {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockVendaAutomacaoLitros", {
        get: function () {
            return window['dockVendaAutomacaoLitros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "GraficoVendaAutomacaoLitros", {
        get: function () {
            try {
                return $("#graficoVendaAutomacaoLitros").dxChart('instance');
            }
            catch (ex) {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockVendaAutomacaoValor", {
        get: function () {
            return window['dockVendaAutomacaoValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "GraficoVendaAutomacaoValor", {
        get: function () {
            try {
                return $("#graficoVendaAutomacaoValor").dxChart('instance');
            }
            catch (ex) {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockCheckinLotacaoLoja", {
        get: function () {
            return window['dockCheckinLotacaoLoja_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "grdCheckinLotacaoLoja", {
        get: function () {
            return window['grdCheckinLotacaoLoja_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "dockCheckinLotacaoGlobal", {
        get: function () {
            return window['dockCheckinLotacaoGlobal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dashboard.prototype, "grdCheckinLotacaoGlobal", {
        get: function () {
            return window['grdCheckinLotacaoGlobal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Dashboard.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboEmpresaTopMargem) {
            adicionarEventoMoura(this.cboEmpresaTopMargem.SelectedItemChanged, this.onComboBoxEmpresaTopMargemChange, this);
        }
        if (this.cboEmpresaTopProduto) {
            adicionarEventoMoura(this.cboEmpresaTopProduto.SelectedItemChanged, this.onComboBoxEmpresaTopProdutoChange, this);
        }
        if (this.cboEmpresaTopMargemDiario) {
            adicionarEventoMoura(this.cboEmpresaTopMargemDiario.SelectedItemChanged, this.onComboBoxEmpresaTopMargemDiarioChange, this);
        }
        if (this.cboLocalLoja) {
            adicionarEventoMoura(this.cboLocalLoja.SelectedItemChanged, this.onComboBoxLocalLojaChange, this);
        }
        if (this.cboLocalGlobal) {
            adicionarEventoMoura(this.cboLocalGlobal.SelectedItemChanged, this.onComboBoxLocalGlobalChange, this);
        }
        if (this.cboEmpresaTopProdutosDiario) {
            adicionarEventoMoura(this.cboEmpresaTopProdutosDiario.SelectedItemChanged, this.onComboBoxEmpresaTopProdutoDiarioChange, this);
        }
        if (this.btnPaineis) {
            adicionarEventoMoura(this.btnPaineis.Click, this.OnBtnPaineisClick, this);
        }
        if (this.btnRecarregar) {
            adicionarEventoMoura(this.btnRecarregar.Click, this.OnClickRecarregar, this);
        }
        if (this.btnSelecionarPainel) {
            adicionarEventoMoura(this.btnSelecionarPainel.Click, this.OnClickSelecionarPaineis, this);
        }
    };
    Dashboard.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        if (String.IsNullOrWhiteSpace(this.hdnAtualizouConteudo.value)) {
            this.hdnAtualizouConteudo.value = "S";
            setTimeout(function () {
                _this.AtualizarConteudoTela();
            }, 500);
        }
        if (this.dockCheckinLotacaoLoja) {
            this.dockCheckinLotacaoLoja.dockPanel.SetVisible(false);
        }
        if (this.dockCheckinLotacaoGlobal) {
            this.dockCheckinLotacaoGlobal.dockPanel.SetVisible(false);
        }
    };
    Dashboard.prototype.OnClickRecarregar = function (s, e) {
        try {
            e.processOnServer = false;
            this.AtualizarConteudoTela();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.OnClickSelecionarPaineis = function (s, e) {
        try {
            //e.processOnServer = false;
            //var paineis = this.grdPaineis.GetSelectedRowsData;
            //
            //if (paineis && paineis.length > 0) {
            //    for (var x = 0; x <= paineis.length - 1; x++) {
            //        var dock: MouraDockPanel = window[paineis[x].Nome_Dock + '_Object'];
            //        if (dock) {
            //            dock.dock.SetVisible(true);
            //            dock.AdjustControl();
            //        }
            //    }
            //}
            //this.grdPaineis.PreencherGrid([]);
            //this.grdPaineis.deselectAll();
            //this.mdDock.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarConteudoTela = function () {
        this.hdnAtualizouConteudo.value = "S";
        this.AtualizarDockFinanceiro();
        this.AtualizarDockPagar();
        this.AtualizarDockSaldoFinanceiro();
        this.AtualizarDockResultado();
        this.AtualizarGridTopProduto();
        this.AtualizarGridTopProdutoDiario();
        this.AtualizarDockDFE();
        this.AtualizarDockDfeEntrada();
        this.AtualizarDockTotalVendas();
        this.AtualizarDockVendasVendedor();
        this.AtualizarGridMargem();
        this.AtualizarGridMargemDiario();
        this.AtualizarDockContratoEmp();
        this.AtualizarDockContratoCancEmp();
        this.AtualizarDockContratoSaldoEmp();
        this.AtualizarDockTicketMedioDiario();
        this.AtualizarDockTicketMedioMensal();
        this.AtualizarDockPetServicoProf();
        this.AtualizarDockEstoqueTanque();
        this.AtualizarDockUltLmc();
        this.AtualizarDockEvolucaoVendas();
        this.AtualizarDockVendasFPgto();
        this.AtualizarDockEvolucaoPet();
        this.AtualizarDockEstoque();
        this.AtualizarDockCompras();
        this.AtualizarDockContratoCancelado();
        this.AtualizarDockVendaAutomacaoLitros();
        this.AtualizarDockVendaAutomacaoValor();
        this.AtualizarDockCheckinLotacaoLoja();
        this.AtualizarDockCheckinLotacaoGlobal();
    };
    Dashboard.prototype.CriarGraficoEvolucaovendas = function () {
        if (this.GraficoEvolucaoVendas) {
            return;
        }
        $("#graficoEvolucaoVendas").dxChart({
            palette: "default",
            commonSeriesSettings: {
                argumentField: "Mes",
                type: "line",
                label: {
                    visible: false,
                    customizeText: function (par) {
                        if (par && par.value) {
                            return par.value.Format(2);
                        }
                        else {
                            return (0).Format(2);
                        }
                    }
                }
            },
            margin: {
                bottom: 0
            },
            argumentAxis: {
                valueMarginsEnabled: false,
                discreteAxisDivisionMode: "crossLabels",
                grid: {
                    visible: true
                }
            },
            legend: {
                verticalAlignment: "bottom",
                horizontalAlignment: "center",
                itemTextPosition: "right"
            },
            title: {
                text: "",
            },
            tooltip: {
                enabled: true,
                customizeTooltip: function (e) {
                    var tooltips = [];
                    var series = dashboard.GraficoEvolucaoVendas.getAllSeries();
                    for (var i = 0; i < series.length; i++) {
                        var valor;
                        if (series[i].getPointsByArg(e.argument) && series[i].getPointsByArg(e.argument)[0].originalValue) {
                            valor = series[i].getPointsByArg(e.argument)[0].originalValue.Format(2);
                        }
                        else {
                            valor = (0).Format(2);
                        }
                        tooltips.push("<span style='text-align: left'>" + series[i].name + ": <b>" + valor + "</b></span>");
                    }
                    return {
                        text: "<b>" + e.argument + "</b><br/>" + tooltips.join("<br/>")
                    };
                },
            },
        }).dxChart("instance");
    };
    Dashboard.prototype.CriarGraficoEvolucaoPet = function () {
        if (this.GraficoEvolucaoPet) {
            return;
        }
        $("#graficoEvolucaoPet").dxChart({
            palette: "default",
            commonSeriesSettings: {
                argumentField: "Mes",
                type: "line",
                label: {
                    visible: false,
                    customizeText: function (par) {
                        if (par && par.value) {
                            return par.value.Format(2);
                        }
                        else {
                            return (0).Format(2);
                        }
                    }
                }
            },
            margin: {
                bottom: 0
            },
            argumentAxis: {
                valueMarginsEnabled: false,
                discreteAxisDivisionMode: "crossLabels",
                grid: {
                    visible: true
                }
            },
            legend: {
                verticalAlignment: "bottom",
                horizontalAlignment: "center",
                itemTextPosition: "right"
            },
            title: {
                text: "",
            },
            tooltip: {
                enabled: true,
                customizeTooltip: function (arg) {
                    var valor;
                    if (arg && arg.value) {
                        valor = arg.value.Format(2);
                    }
                    else {
                        valor = (0).Format(2);
                    }
                    return {
                        text: arg.seriesName + ": " + valor
                    };
                }
            }
        }).dxChart("instance");
    };
    Dashboard.prototype.CriarGraficoEstoque = function () {
        if (this.GraficoEstoque) {
            return;
        }
        $("#graficoEstoque").dxChart({
            palette: "default",
            commonSeriesSettings: {
                argumentField: "Mes",
                type: "line",
                label: {
                    visible: false,
                    customizeText: function (par) {
                        if (par && par.value) {
                            return par.value.Format(2);
                        }
                        else {
                            return (0).Format(2);
                        }
                    }
                },
            },
            margin: {
                bottom: 0
            },
            argumentAxis: {
                valueMarginsEnabled: false,
                discreteAxisDivisionMode: "crossLabels",
                grid: {
                    visible: true
                }
            },
            legend: {
                verticalAlignment: "bottom",
                horizontalAlignment: "center",
                itemTextPosition: "right"
            },
            title: {
                text: "",
            },
            tooltip: {
                enabled: true,
                customizeTooltip: function (arg) {
                    var valor;
                    if (arg && arg.value) {
                        valor = arg.value.Format(2);
                    }
                    else {
                        valor = (0).Format(2);
                    }
                    return {
                        text: arg.seriesName + ": " + valor
                    };
                }
            }
        }).dxChart("instance");
    };
    Dashboard.prototype.CriarGraficoCompras = function () {
        if (this.GraficoCompras) {
            return;
        }
        $("#graficoCompras").dxChart({
            palette: "default",
            commonSeriesSettings: {
                argumentField: "Mes",
                type: "line",
                label: {
                    visible: false,
                    customizeText: function (par) {
                        if (par && par.value) {
                            return par.value.Format(2);
                        }
                        else {
                            return (0).Format(2);
                        }
                    }
                },
            },
            margin: {
                bottom: 0
            },
            argumentAxis: {
                valueMarginsEnabled: false,
                discreteAxisDivisionMode: "crossLabels",
                grid: {
                    visible: true
                }
            },
            legend: {
                verticalAlignment: "bottom",
                horizontalAlignment: "center",
                itemTextPosition: "right"
            },
            title: {
                text: "",
            },
            tooltip: {
                enabled: true,
                customizeTooltip: function (arg) {
                    var valor;
                    if (arg && arg.value) {
                        valor = arg.value.Format(2);
                    }
                    else {
                        valor = (0).Format(2);
                    }
                    return {
                        text: arg.seriesName + ": " + valor
                    };
                }
            }
        }).dxChart("instance");
    };
    Dashboard.prototype.CriarGraficoAutomacaoLitros = function () {
        if (this.GraficoVendaAutomacaoLitros) {
            return;
        }
        $("#graficoVendaAutomacaoLitros").dxChart({
            palette: "default",
            commonSeriesSettings: {
                argumentField: "Mes",
                type: "line",
                label: {
                    visible: false,
                    customizeText: function (par) {
                        if (par && par.value) {
                            return par.value.Format(3);
                        }
                        else {
                            return (0).Format(3);
                        }
                    }
                },
            },
            margin: {
                bottom: 0
            },
            argumentAxis: {
                valueMarginsEnabled: false,
                discreteAxisDivisionMode: "crossLabels",
                grid: {
                    visible: true
                }
            },
            legend: {
                verticalAlignment: "bottom",
                horizontalAlignment: "center",
                itemTextPosition: "right"
            },
            title: {
                text: "",
            },
            tooltip: {
                enabled: true,
                customizeTooltip: function (e) {
                    var tooltips = [];
                    var series = dashboard.GraficoVendaAutomacaoLitros.getAllSeries();
                    for (var i = 0; i < series.length; i++) {
                        var valor;
                        if (series[i].getPointsByArg(e.argument) && series[i].getPointsByArg(e.argument)[0].originalValue) {
                            valor = series[i].getPointsByArg(e.argument)[0].originalValue.Format(3);
                        }
                        else {
                            valor = (0).Format(3);
                        }
                        tooltips.push("<span style='text-align: left'>" + series[i].name + ": <b>" + valor + "</b></span>");
                    }
                    return {
                        text: "<b>" + e.argument + "</b><br/>" + tooltips.join("<br/>")
                    };
                },
            },
        }).dxChart("instance");
    };
    Dashboard.prototype.CriarGraficoAutomacaoValor = function () {
        if (this.GraficoVendaAutomacaoValor) {
            return;
        }
        $("#graficoVendaAutomacaoValor").dxChart({
            palette: "default",
            commonSeriesSettings: {
                argumentField: "Mes",
                type: "line",
                label: {
                    visible: false,
                    customizeText: function (par) {
                        if (par && par.value) {
                            return par.value.Format(2);
                        }
                        else {
                            return (0).Format(2);
                        }
                    }
                },
            },
            margin: {
                bottom: 0
            },
            argumentAxis: {
                valueMarginsEnabled: false,
                discreteAxisDivisionMode: "crossLabels",
                grid: {
                    visible: true
                }
            },
            legend: {
                verticalAlignment: "bottom",
                horizontalAlignment: "center",
                itemTextPosition: "right",
                visible: true,
            },
            adaptiveLayout: {
                keepLabels: false,
            },
            title: {
                text: "",
            },
            tooltip: {
                enabled: true,
                customizeTooltip: function (e) {
                    var tooltips = [];
                    var series = dashboard.GraficoVendaAutomacaoValor.getAllSeries();
                    for (var i = 0; i < series.length; i++) {
                        var valor;
                        if (series[i].getPointsByArg(e.argument) && series[i].getPointsByArg(e.argument)[0].originalValue) {
                            valor = series[i].getPointsByArg(e.argument)[0].originalValue.Format(2);
                        }
                        else {
                            valor = (0).Format(2);
                        }
                        tooltips.push("<span style='text-align: left'>" + series[i].name + ": <b>" + valor + "</b></span>");
                    }
                    return {
                        text: "<b>" + e.argument + "</b><br/>" + tooltips.join("<br/>")
                    };
                },
            },
        }).dxChart("instance");
    };
    Dashboard.prototype.CriarGraficoVendasFormaPgto = function () {
        if (this.GraficoVendasFormaPgto) {
            return;
        }
        $("#graficoVendasFormaPgto").dxChart({
            palette: "default",
            commonSeriesSettings: {
                label: {
                    visible: false,
                    type: "bar",
                    customizeText: function (par) {
                        if (par && par.value) {
                            return par.value.Format(2);
                        }
                        else {
                            return (0).Format(2);
                        }
                    }
                }
            },
            series: [{
                    type: "bar",
                    argumentField: "Forma",
                    valueField: "Valor",
                    name: "Valor Vendido",
                }],
            argumentAxis: {
                hoverMode: "allArgumentPoints",
                label: {
                    displayMode: "stagger",
                },
                valueMarginsEnabled: false,
                discreteAxisDivisionMode: "crossLabels",
                grid: {
                    visible: true
                }
            },
            legend: {
                verticalAlignment: "bottom",
                horizontalAlignment: "center",
                itemTextPosition: "right",
                visible: false,
            },
            title: {
                text: "",
            },
            tooltip: {
                enabled: true,
                customizeTooltip: function (arg) {
                    var valor;
                    if (arg && arg.value) {
                        valor = arg.value.Format(2);
                    }
                    else {
                        valor = (0).Format(2);
                    }
                    return {
                        text: arg.seriesName + ": " + valor
                    };
                }
            }
        }).dxChart("instance");
    };
    Dashboard.prototype.CriarGraficoContratoCancelado = function () {
        if (this.GraficoContratoCancelado) {
            return;
        }
        $("#graficoContratoCancelado").dxChart({
            palette: "default",
            commonSeriesSettings: {
                label: {
                    visible: false,
                    type: "bar",
                    customizeText: function (par) {
                        if (par && par.value) {
                            return par.value.Format(0);
                        }
                        else {
                            return (0).Format(0);
                        }
                    }
                }
            },
            series: [{
                    type: "bar",
                    argumentField: "motivo",
                    valueField: "contratos",
                    name: "Contratos Cancelados",
                }],
            argumentAxis: {
                hoverMode: "allArgumentPoints",
                label: {
                    displayMode: "rotate",
                    rotationAngle: 45,
                    font: {
                        size: 8,
                    },
                    customizeText: function (e) {
                        var result = e.valueText;
                        if (result && result.length > 15) {
                            result = result.substring(0, 15) + "...";
                        }
                        return result;
                    }
                },
                valueMarginsEnabled: false,
                discreteAxisDivisionMode: "crossLabels",
                grid: {
                    visible: true
                }
            },
            legend: {
                verticalAlignment: "bottom",
                horizontalAlignment: "center",
                itemTextPosition: "right",
                visible: false,
            },
            title: {
                text: "",
            },
            tooltip: {
                enabled: true,
                customizeTooltip: function (arg) {
                    var valor;
                    if (arg && arg.value) {
                        valor = arg.value.Format(0);
                    }
                    else {
                        valor = (0).Format(0);
                    }
                    return {
                        text: arg.argumentText + ": <b>" + valor + "</b>"
                    };
                }
            }
        }).dxChart("instance");
    };
    Dashboard.prototype.AtualizarGridMargem = function () {
        try {
            if (!this.dockTopMargem) {
                return;
            }
            var parametros;
            parametros = {
                codEmpresa: this.cboEmpresaTopMargem.GetValue()
            };
            this.dockTopMargem.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherGradeTopMargem", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    dashboard.grdTopMargem.PreencherGrid(retorno);
                    dashboard.dockTopMargem.HideLoadingPanel();
                    dashboard.dockTopMargem.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarGridTopProduto = function () {
        try {
            if (!this.dockTopProdutos) {
                return;
            }
            var parametros;
            parametros = {
                codEmpresa: this.cboEmpresaTopProduto.GetValue()
            };
            dashboard.dockTopProdutos.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherGradeTopProdutoVendido", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    dashboard.grdTopProduto.PreencherGrid(retorno);
                    dashboard.dockTopProdutos.HideLoadingPanel();
                    dashboard.dockTopProdutos.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarGridMargemDiario = function () {
        try {
            if (!this.dockTopMargemDiario) {
                return;
            }
            var parametros;
            parametros = {
                codEmpresa: this.cboEmpresaTopMargemDiario.GetValue()
            };
            this.dockTopMargemDiario.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherGradeTopMargemDiario", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    dashboard.grdTopMargemDiario.PreencherGrid(retorno);
                    dashboard.dockTopMargemDiario.HideLoadingPanel();
                    dashboard.dockTopMargemDiario.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarGridTopProdutoDiario = function () {
        try {
            if (!this.dockTopProdutosDiario) {
                return;
            }
            var parametros;
            parametros = {
                codEmpresa: this.cboEmpresaTopProdutosDiario.GetValue()
            };
            dashboard.dockTopProdutosDiario.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherGradeTopProdutoVendidoDiario", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    dashboard.grdTopProdutoDiario.PreencherGrid(retorno);
                    dashboard.dockTopProdutosDiario.HideLoadingPanel();
                    dashboard.dockTopProdutosDiario.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.onComboBoxEmpresaTopMargemChange = function () {
        return this.AtualizarGridMargem();
    };
    Dashboard.prototype.onComboBoxEmpresaTopProdutoChange = function () {
        return this.AtualizarGridTopProduto();
    };
    Dashboard.prototype.onComboBoxEmpresaTopMargemDiarioChange = function () {
        return this.AtualizarGridMargemDiario();
    };
    Dashboard.prototype.onComboBoxLocalLojaChange = function () {
        return this.AtualizarDockCheckinLotacaoLoja();
    };
    Dashboard.prototype.onComboBoxLocalGlobalChange = function () {
        return this.AtualizarDockCheckinLotacaoGlobal();
    };
    Dashboard.prototype.onComboBoxEmpresaTopProdutoDiarioChange = function () {
        return this.AtualizarGridTopProdutoDiario();
    };
    Dashboard.prototype.OnBtnPaineisClick = function (s, e) {
        e.processOnServer = false;
        this.grdPaineis.PreencherGrid([]);
        this.mdDock.Show();
        var listaComponenetes;
        var parametros;
        parametros = {};
        listaComponenetes = this.ExecutarFuncaoServerSideSynch("GetListaComponentes", parametros);
        if (this.grdPaineis.VisibleRowsCount() > 0) {
            this.grdPaineis.deselectAll();
        }
        this.grdPaineis.PreencherGrid(listaComponenetes);
    };
    Dashboard.prototype.AtualizarDockFinanceiro = function () {
        try {
            if (!this.dockFinanceiro) {
                return;
            }
            var parametros;
            parametros = {
                empresasSelecionadas: this.LstEmpresa.GetValuesRelacaoNumber(),
            };
            dashboard.dockFinanceiro.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherContasReceber", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    dashboard.lblReceberBaixadasMes.Text = retorno['lblReceberBaixadasMes'];
                    dashboard.lblReceberSaldo.Text = retorno['lblReceberSaldo'];
                    dashboard.lblReceberVencerMes.Text = retorno['lblReceberVencerMes'];
                    dashboard.lblReceberVencidasMesAnterior.Text = retorno['lblReceberVencidasMesAnterior'];
                    dashboard.lblReceberVencidasMesAnterior2.Text = retorno['lblReceberVencidasMesAnterior2'];
                    dashboard.lblReceberVencidasMesAtual.Text = retorno['lblReceberVencidasMesAtual'];
                    dashboard.dockFinanceiro.HideLoadingPanel();
                    dashboard.dockFinanceiro.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockSaldoFinanceiro = function () {
        try {
            if (!this.dockSaldoFinanceiro) {
                return;
            }
            var parametros;
            parametros = {
                empresasSelecionadas: this.LstEmpresa.GetValuesRelacaoNumber(),
            };
            dashboard.dockSaldoFinanceiro.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherSaldoGeralFinanceiro", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    dashboard.lblSaldoPrevisaoPagar.Text = retorno['lblSaldoPrevisaoPagar'];
                    dashboard.lblSaldoPrevisaoReceber.Text = retorno['lblSaldoPrevisaoReceber'];
                    dashboard.lblSaldoFinanceiro.Text = retorno['lblSaldoFinanceiro'];
                    dashboard.dockSaldoFinanceiro.HideLoadingPanel();
                    dashboard.dockSaldoFinanceiro.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockPagar = function () {
        try {
            if (!this.dockPagar) {
                return;
            }
            var parametros;
            parametros = {
                empresasSelecionadas: this.LstEmpresa.GetValuesRelacaoNumber(),
            };
            dashboard.dockPagar.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherContasPagar", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    dashboard.lblContasPagar.Text = retorno['lblContasPagar'];
                    dashboard.lblContasPagarVencidas.Text = retorno['lblContasPagarVencidas'];
                    dashboard.lblContasPagasMes.Text = retorno['lblContasPagasMes'];
                    dashboard.lblPrevisaoPagar.Text = retorno['lblPrevisaoPagar'];
                    dashboard.dockPagar.HideLoadingPanel();
                    dashboard.dockPagar.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockResultado = function () {
        try {
            if (!this.dockResultado) {
                return;
            }
            var parametros;
            parametros = {
                empresasSelecionadas: this.LstEmpresa.GetValuesRelacaoNumber(),
            };
            dashboard.dockResultado.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherGradeResultado", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    dashboard.grdResultado.PreencherGrid(retorno);
                    dashboard.dockResultado.HideLoadingPanel();
                    dashboard.dockResultado.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockDFE = function () {
        try {
            if (!this.dockDfe) {
                return;
            }
            var parametros;
            parametros = {
                empresasSelecionadas: this.LstEmpresa.GetValuesRelacaoNumber(),
            };
            dashboard.dockDfe.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherNotas", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    dashboard.lblNotasBaixadas.Text = retorno['lblNotasBaixadas'];
                    dashboard.lblNotasConfirmadas.Text = retorno['lblNotasConfirmadas'];
                    dashboard.dockDfe.HideLoadingPanel();
                    dashboard.dockDfe.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockDfeEntrada = function () {
        try {
            if (!this.dockDfeEntrada) {
                return;
            }
            var parametros;
            parametros = {};
            dashboard.dockDfeEntrada.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherGradeDfeEntrada", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    dashboard.grdDfeEntrada.PreencherGrid(retorno);
                    dashboard.dockDfeEntrada.HideLoadingPanel();
                    dashboard.dockDfeEntrada.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockTotalVendas = function () {
        try {
            if (!this.dockTotalVendas) {
                return;
            }
            var parametros;
            parametros = {
                empresasSelecionadas: this.LstEmpresa.GetValuesRelacaoNumber(),
            };
            dashboard.dockTotalVendas.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherGradeTotalVendas", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    dashboard.grdTotalVendas.PreencherGrid(retorno);
                    dashboard.dockTotalVendas.HideLoadingPanel();
                    dashboard.dockTotalVendas.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockVendasVendedor = function () {
        try {
            if (!this.dockVendasVendedor) {
                return;
            }
            var parametros;
            parametros = {
                empresasSelecionadas: this.LstEmpresa.GetValuesRelacaoNumber(),
            };
            this.dockVendasVendedor.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherGradeVendasVendedor", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    dashboard.grdVendasVendedor.PreencherGrid(retorno);
                    dashboard.dockVendasVendedor.HideLoadingPanel();
                    dashboard.dockVendasVendedor.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockContratoEmp = function () {
        try {
            if (!this.dockContratoEmp) {
                return;
            }
            var parametros;
            parametros = {
                empresasSelecionadas: this.LstEmpresa.GetValuesRelacaoNumber(),
            };
            dashboard.dockContratoEmp.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherContratos", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    dashboard.grdContratosEmp.PreencherGrid(retorno);
                    dashboard.dockContratoEmp.HideLoadingPanel();
                    dashboard.dockContratoEmp.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockContratoCancEmp = function () {
        try {
            if (!this.dockContratoCancEmp) {
                return;
            }
            var parametros;
            parametros = {
                empresasSelecionadas: this.LstEmpresa.GetValuesRelacaoNumber(),
            };
            dashboard.dockContratoCancEmp.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherContratosCancelados", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    dashboard.grdContratosCancEmp.PreencherGrid(retorno);
                    dashboard.dockContratoCancEmp.HideLoadingPanel();
                    dashboard.dockContratoCancEmp.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockContratoSaldoEmp = function () {
        try {
            if (!this.dockContratoSaldoEmp) {
                return;
            }
            var parametros;
            parametros = {
                empresasSelecionadas: this.LstEmpresa.GetValuesRelacaoNumber(),
            };
            dashboard.dockContratoSaldoEmp.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherContratosSaldo", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    dashboard.grdContratosSaldoEmp.PreencherGrid(retorno);
                    dashboard.dockContratoSaldoEmp.HideLoadingPanel();
                    dashboard.dockContratoSaldoEmp.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockTicketMedioDiario = function () {
        try {
            if (!this.dockTicketMedioDiario) {
                return;
            }
            var parametros;
            parametros = {
                empresasSelecionadas: this.LstEmpresa.GetValuesRelacaoNumber(),
            };
            dashboard.dockTicketMedioDiario.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherGradeTicketMedioDiario", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    dashboard.grdTicketMedioDiario.PreencherGrid(retorno);
                    dashboard.dockTicketMedioDiario.HideLoadingPanel();
                    dashboard.dockTicketMedioDiario.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockTicketMedioMensal = function () {
        try {
            if (!this.dockTicketMedioMensal) {
                return;
            }
            var parametros;
            parametros = {
                empresasSelecionadas: this.LstEmpresa.GetValuesRelacaoNumber(),
            };
            dashboard.dockTicketMedioMensal.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherGradeTicketMedio", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    dashboard.grdTicketMedioMensal.PreencherGrid(retorno);
                    dashboard.dockTicketMedioMensal.HideLoadingPanel();
                    dashboard.dockTicketMedioMensal.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockPetServicoProf = function () {
        try {
            if (!this.dockPetServicoProf) {
                return;
            }
            var parametros;
            parametros = {
                empresasSelecionadas: this.LstEmpresa.GetValuesRelacaoNumber(),
            };
            dashboard.dockPetServicoProf.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherGradeAtendimentosProfissional", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    dashboard.grdAtendProf.PreencherGrid(retorno);
                    dashboard.dockPetServicoProf.HideLoadingPanel();
                    dashboard.dockPetServicoProf.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockEstoqueTanque = function () {
    };
    Dashboard.prototype.AtualizarDockUltLmc = function () {
        try {
            if (!this.dockUltLmc) {
                return;
            }
            var parametros;
            parametros = {};
            dashboard.dockUltLmc.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherGradeUltLmc", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    dashboard.grdUltLmc.PreencherGrid(retorno);
                    dashboard.dockUltLmc.HideLoadingPanel();
                    dashboard.dockUltLmc.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockEvolucaoVendas = function () {
        try {
            this.CriarGraficoEvolucaovendas();
            if (!this.dockEvolucaoVendas) {
                return;
            }
            var parametros;
            parametros = {
                empresasSelecionadas: this.LstEmpresa.GetValuesRelacaoNumber(),
            };
            dashboard.dockEvolucaoVendas.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherGraficoVendas", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    var series = [];
                    if (retorno && retorno.Empresas && retorno.Empresas.length > 0) {
                        for (var x = 0; x <= retorno.Empresas.length - 1; x++) {
                            var item = {};
                            item.valueField = ("" + retorno.Empresas[x]).split("###")[0];
                            item.name = ("" + retorno.Empresas[x]).split("###")[1];
                            series.push(item);
                        }
                    }
                    dashboard.GraficoEvolucaoVendas.option("series", series);
                    dashboard.GraficoEvolucaoVendas.option("dataSource", retorno.Dados);
                    dashboard.dockEvolucaoVendas.HideLoadingPanel();
                    dashboard.dockEvolucaoVendas.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockVendasFPgto = function () {
        var _this = this;
        try {
            this.CriarGraficoVendasFormaPgto();
            if (!this.dockVendasFPgto) {
                return;
            }
            var parametros;
            this.lblTVendaPgto.Text = "";
            parametros = {
                empresasSelecionadas: this.LstEmpresa.GetValuesRelacaoNumber(),
            };
            dashboard.dockVendasFPgto.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherGraficoVendasPagto", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    if (!retorno) {
                        dashboard.GraficoVendasFormaPgto.option("dataSource", []);
                        _this.lblTVendaPgto.Text = "";
                    }
                    else {
                        dashboard.GraficoVendasFormaPgto.option("dataSource", retorno.Dados);
                        _this.lblTVendaPgto.Text = retorno.Label;
                    }
                    dashboard.dockVendasFPgto.HideLoadingPanel();
                    dashboard.dockVendasFPgto.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            this.lblTVendaPgto.Text = "";
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockEvolucaoPet = function () {
        try {
            this.CriarGraficoEvolucaoPet();
            if (!this.dockEvolucaoPet) {
                return;
            }
            var parametros;
            parametros = {
                empresasSelecionadas: this.LstEmpresa.GetValuesRelacaoNumber(),
            };
            dashboard.dockEvolucaoPet.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherGraficoEvolucaoPet", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    var series = [];
                    if (retorno && retorno.Empresas && retorno.Empresas.length > 0) {
                        for (var x = 0; x <= retorno.Empresas.length - 1; x++) {
                            var item = {};
                            item.valueField = ("" + retorno.Empresas[x]).split("###")[0];
                            item.name = ("" + retorno.Empresas[x]).split("###")[1];
                            series.push(item);
                        }
                    }
                    dashboard.GraficoEvolucaoPet.option("series", series);
                    dashboard.GraficoEvolucaoPet.option("dataSource", retorno.Dados);
                    dashboard.dockEvolucaoPet.HideLoadingPanel();
                    dashboard.dockEvolucaoPet.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockEstoque = function () {
        try {
            this.CriarGraficoEstoque();
            if (!this.dockEstoque) {
                return;
            }
            var parametros;
            parametros = {
                empresasSelecionadas: this.LstEmpresa.GetValuesRelacaoNumber(),
            };
            dashboard.dockEstoque.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherGraficoEstoque", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    var series = [];
                    if (retorno && retorno.Empresas && retorno.Empresas.length > 0) {
                        for (var x = 0; x <= retorno.Empresas.length - 1; x++) {
                            var item = {};
                            item.valueField = ("" + retorno.Empresas[x]).split("###")[0];
                            item.name = ("" + retorno.Empresas[x]).split("###")[1];
                            series.push(item);
                        }
                    }
                    dashboard.GraficoEstoque.option("series", series);
                    dashboard.GraficoEstoque.option("dataSource", retorno.Dados);
                    dashboard.dockEstoque.HideLoadingPanel();
                    dashboard.dockEstoque.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockCompras = function () {
        try {
            this.CriarGraficoCompras();
            if (!this.dockCompras) {
                return;
            }
            var parametros;
            parametros = {
                empresasSelecionadas: this.LstEmpresa.GetValuesRelacaoNumber(),
            };
            dashboard.dockCompras.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherGraficoCompras", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    var series = [];
                    if (retorno && retorno.Empresas && retorno.Empresas.length > 0) {
                        for (var x = 0; x <= retorno.Empresas.length - 1; x++) {
                            var item = {};
                            item.valueField = ("" + retorno.Empresas[x]).split("###")[0];
                            item.name = ("" + retorno.Empresas[x]).split("###")[1];
                            series.push(item);
                        }
                    }
                    dashboard.GraficoCompras.option("series", series);
                    dashboard.GraficoCompras.option("dataSource", retorno.Dados);
                    dashboard.dockCompras.HideLoadingPanel();
                    dashboard.dockCompras.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockContratoCancelado = function () {
        try {
            this.CriarGraficoContratoCancelado();
            if (!this.dockContratoCancelado) {
                return;
            }
            var parametros;
            parametros = {
                empresasSelecionadas: this.LstEmpresa.GetValuesRelacaoNumber(),
            };
            dashboard.dockContratoCancelado.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherGraficoContratoCancelado", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    if (!retorno) {
                        dashboard.GraficoContratoCancelado.option("dataSource", []);
                    }
                    else {
                        dashboard.GraficoContratoCancelado.option("dataSource", retorno.Dados);
                    }
                    dashboard.dockContratoCancelado.HideLoadingPanel();
                    dashboard.dockContratoCancelado.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockVendaAutomacaoLitros = function () {
        try {
            this.CriarGraficoAutomacaoLitros();
            if (!this.dockVendaAutomacaoLitros) {
                return;
            }
            var parametros;
            parametros = {
                empresasSelecionadas: this.LstEmpresa.GetValuesRelacaoNumber(),
            };
            dashboard.dockVendaAutomacaoLitros.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherGraficoAutomacaoLitros", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    var series = [];
                    if (retorno && retorno.Empresas && retorno.Empresas.length > 0) {
                        for (var x = 0; x <= retorno.Empresas.length - 1; x++) {
                            var item = {};
                            item.valueField = ("" + retorno.Empresas[x]).split("###")[0];
                            item.name = ("" + retorno.Empresas[x]).split("###")[1];
                            series.push(item);
                        }
                    }
                    dashboard.GraficoVendaAutomacaoLitros.option("series", series);
                    dashboard.GraficoVendaAutomacaoLitros.option("dataSource", retorno.Dados);
                    dashboard.dockVendaAutomacaoLitros.HideLoadingPanel();
                    dashboard.dockVendaAutomacaoLitros.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockVendaAutomacaoValor = function () {
        try {
            this.CriarGraficoAutomacaoValor();
            if (!this.dockVendaAutomacaoValor) {
                return;
            }
            var parametros;
            parametros = {
                empresasSelecionadas: this.LstEmpresa.GetValuesRelacaoNumber(),
            };
            dashboard.dockVendaAutomacaoValor.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherGraficoAutomacaoValor", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    var series = [];
                    if (retorno && retorno.Empresas && retorno.Empresas.length > 0) {
                        for (var x = 0; x <= retorno.Empresas.length - 1; x++) {
                            var item = {};
                            item.valueField = ("" + retorno.Empresas[x]).split("###")[0];
                            item.name = ("" + retorno.Empresas[x]).split("###")[1];
                            series.push(item);
                        }
                    }
                    dashboard.GraficoVendaAutomacaoValor.option("series", series);
                    dashboard.GraficoVendaAutomacaoValor.option("dataSource", retorno.Dados);
                    dashboard.dockVendaAutomacaoValor.HideLoadingPanel();
                    dashboard.dockVendaAutomacaoValor.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockCheckinLotacaoLoja = function () {
        try {
            if (!this.dockCheckinLotacaoLoja) {
                return;
            }
            var parametros;
            var local = 0;
            if (this.cboLocalLoja && this.cboLocalLoja.GetValue() != null) {
                local = this.cboLocalLoja.GetValue();
            }
            parametros = {
                local: local
            };
            dashboard.dockCheckinLotacaoLoja.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherGradeLotacaoLoja", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    dashboard.grdCheckinLotacaoLoja.PreencherGrid(retorno);
                    dashboard.dockCheckinLotacaoLoja.HideLoadingPanel();
                    dashboard.dockCheckinLotacaoLoja.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Dashboard.prototype.AtualizarDockCheckinLotacaoGlobal = function () {
        try {
            if (!this.dockCheckinLotacaoGlobal) {
                return;
            }
            var parametros;
            var local = 0;
            if (this.cboLocalGlobal && this.cboLocalGlobal.GetValue() != null) {
                local = this.cboLocalGlobal.GetValue();
            }
            parametros = {
                local: local
            };
            dashboard.dockCheckinLotacaoGlobal.ShowLoadingPanel();
            this.ExecutarFuncaoServerSideAsynch("PreencherGradeLotacaoGlobal", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    dashboard.grdCheckinLotacaoGlobal.PreencherGrid(retorno);
                    dashboard.dockCheckinLotacaoGlobal.HideLoadingPanel();
                    dashboard.dockCheckinLotacaoGlobal.AdjustControl();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return Dashboard;
}(MouraPage));
var dashboard = new Dashboard();
//# sourceMappingURL=Dashboard.js.map