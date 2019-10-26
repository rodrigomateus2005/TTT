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
var R_RankingProd = /** @class */ (function (_super) {
    __extends(R_RankingProd, _super);
    function R_RankingProd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.somaIcms = 0;
        _this.somaQtde = 0;
        _this.somaFatura = 0;
        _this.somaCompra = 0;
        return _this;
    }
    Object.defineProperty(R_RankingProd.prototype, "AccordionFiltros", {
        get: function () {
            return window["accCadastro_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RankingProd.prototype, "Produtos", {
        get: function () {
            if (!this.GetScope()["Produtos"]) {
                this.GetScope()["Produtos"] = [];
            }
            return this.GetScope()["Produtos"];
        },
        set: function (value) {
            this.GetScope()["Produtos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RankingProd.prototype, "btnExcel", {
        get: function () {
            return window['btnExcel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RankingProd.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RankingProd.prototype, "txtMarca", {
        get: function () {
            return window['txtMarca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RankingProd.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RankingProd.prototype, "lstLinha", {
        get: function () {
            return window['lstLinha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RankingProd.prototype, "lstProdutos", {
        //get lstProdutos(): MouraCheckBoxList {
        //    return window['lstProdutos_Object'];
        //}
        get: function () {
            return window['lstProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RankingProd.prototype, "lstFormaPagamento", {
        get: function () {
            return window['lstFormaPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RankingProd.prototype, "chkConsiderarTrocas", {
        get: function () {
            return window['chkConsiderarTrocas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RankingProd.prototype, "chkUtilizarCustoVenda", {
        get: function () {
            return window['chkUtilizarCustoVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RankingProd.prototype, "chkLojaPropria", {
        get: function () {
            return window['chkLojaPropria_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RankingProd.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_RankingProd.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.lstEmpresa) {
            adicionarEventoMoura(this.lstEmpresa.SelectionChanged, this.OnAlterouEmpresa, this);
        }
        if (this.lstFormaPagamento) {
            adicionarEventoMoura(this.lstFormaPagamento.SelectionChanged, this.OnAlterouFormaPagamento, this);
        }
        if (this.lstLinha) {
            adicionarEventoMoura(this.lstLinha.SelectionChanged, this.OnAlterouLinha, this);
        }
        //if (this.lstProdutos) {
        //    adicionarEventoMoura(this.lstProdutos.SelectionChanged, this.OnAlterouProdutos, this);
        //}
        if (this.chkConsiderarTrocas) { }
        if (this.chkLojaPropria) { }
        if (this.chkUtilizarCustoVenda) { }
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.OnGerouLinhaMarkup, this);
            adicionarEventoMoura(this.grid.CalculateCustomSummary, this.OnCalculateCustomSummary, this);
        }
        if (this.txtPeriodo) {
            adicionarEventoDevExpress(this.txtPeriodo.textBoxCalendarioInicio.DateChanged, this.AlterouPeriodoInicial, this);
            adicionarEventoDevExpress(this.txtPeriodo.textBoxCalendarioFim.DateChanged, this.AlterouPeriodoFim, this);
        }
        if (this.btnExcel) {
            adicionarEventoMoura(this.btnExcel.Click, this.OnClicouExcel, this);
        }
    };
    R_RankingProd.prototype.OnClicouExcel = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        var dadosGrid = [];
        dadosGrid = this.grid.DataSource;
        if (dadosGrid.length <= 0) {
            MostrarAlerta("Não há registros para gerar o arquivo de Excel!");
            return;
        }
        var somaIcms = 0;
        var somaQtde = 0;
        var somaFatura = 0;
        for (var i = 0; i < dadosGrid.length; i++) {
            somaIcms += dadosGrid[i].Custo_Icms_Saida;
            somaQtde += dadosGrid[i].Quantidade_Faturada;
            somaFatura += dadosGrid[i].Valor_Faturado;
        }
        var parametros = {
            Dados: dadosGrid,
            somaCustoIcmsS: somaIcms,
            somaQuantidade: somaQtde,
            somaFaturamento: somaFatura,
            dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
            dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
            LojaPropria: this.chkLojaPropria.Checked
        };
        abrirEspera("");
        this.ExecutarFuncaoServerSideAsynch("ExportarExcel", parametros, function (d) {
            fecharEspera();
            _this.FazerDownload();
        }, this.TratarErroFuncaoAsync, this);
    };
    R_RankingProd.prototype.FazerDownload = function () {
        var parametrosTela = [];
        abrirTelaNovaAbaParametros(formataURLRelativa("Modulos/Geral/AbrirArquivo.aspx"), parametrosTela);
    };
    R_RankingProd.prototype.OnGerouLinhaMarkup = function (s, e) {
        if (e.rowType == "data") {
            if (e.row.data['Porcentagem_Markup'] > 100) {
                e.cellElement.css("background-color", "#32cd32");
            }
            else if (e.row.data['Porcentagem_Markup'] < 20) {
                e.cellElement.css("background-color", "##ffa07a");
            }
        }
    };
    R_RankingProd.prototype.OnCalculateCustomSummary = function (s, e) {
        switch (e.options.summaryProcess) {
            case "start":
                // Initializing "totalValue" here
                this.somaIcms = 0;
                this.somaQtde = 0;
                this.somaFatura = 0;
                break;
            case "calculate":
                if (e.options.name == "Custo_Icms_Saida") {
                    this.somaIcms += e.options.value;
                }
                if (e.options.name == "Quantidade_Faturada") {
                    this.somaQtde += e.options.value;
                }
                if (e.options.name == "Valor_Faturado") {
                    this.somaFatura += e.options.value;
                }
                if (e.options.name == "Custo_Ultima_Compra") {
                    this.somaCompra += e.options.value;
                }
                break;
            case "finalize":
                if (e.options.name == "Custo_Icms") {
                    if (this.somaQtde > 0) {
                        e.options.totalValue = (this.somaIcms / this.somaQtde);
                    }
                }
                if (e.options.name == "Valor_Medio_Venda") {
                    if (this.somaQtde > 0) {
                        e.options.totalValue = (this.somaFatura / this.somaQtde);
                    }
                }
                if (e.options.name == "Porcentagem_Markup") {
                    if (this.somaFatura > 0) {
                        if (this.chkLojaPropria.Checked) {
                            var cTotal = (this.somaCompra * this.somaQtde);
                            if (cTotal > 0) {
                                e.options.totalValue = ((this.somaFatura - cTotal) / cTotal * 100);
                            }
                            else {
                                e.options.totalValue = 0;
                            }
                        }
                        else {
                            e.options.totalValue = (((this.somaFatura - this.somaIcms) / this.somaIcms) * 100);
                        }
                    }
                }
                break;
        }
    };
    R_RankingProd.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.carregarFormaspagamento();
        this.LimparCampos();
        this.carregarProdutos();
    };
    R_RankingProd.prototype.AlterouPeriodoInicial = function () {
        //this.lstProdutos.LimparSelecao();
        //this.carregarProdutos();
    };
    R_RankingProd.prototype.AlterouPeriodoFim = function () {
        //this.lstProdutos.RemoverTodosItens();
        //this.carregarProdutos();
    };
    R_RankingProd.prototype.OnAlterouEmpresa = function () {
        //this.lstProdutos.RemoverTodosItens();
        this.lstFormaPagamento.RemoverTodosItens();
        this.carregarProdutos();
        this.grid.PreencherGrid(null);
        this.carregarFormaspagamento();
    };
    R_RankingProd.prototype.carregarProdutos = function () {
        var _this = this;
        if (this.txtPeriodo.textBoxCalendarioInicio.GetDate() != null && this.txtPeriodo.textBoxCalendarioFim.GetDate() != null) {
            var empresasSelecionadas = this.lstEmpresa.GetValues();
            var linhasSelecionadas = this.lstLinha.GetValues();
            if (empresasSelecionadas.length > 0) {
                var empresas = this.lstEmpresa.GetValues().join(",");
                var linha;
                if (linhasSelecionadas.length > 0) {
                    linha = this.lstLinha.GetValues().join(",");
                }
                else {
                    linha = this.lstLinha.GetValuesRelacao().join(",");
                }
                var parametros = {
                    dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                    dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                    empresas: empresas,
                    linha: linha
                };
                abrirEspera("Carregando registros...");
                this.ExecutarFuncaoServerSideAsynch("PreencherListaProdutos", parametros, function (d) {
                    try {
                        fecharEspera();
                        var retorno = GetRetornoAJAX(d);
                        for (var x = 0; x <= retorno.length - 1; x++) {
                            _this.lstProdutos.AdicionarItem(retorno[x].Descricao, retorno[x].Codigo);
                        }
                    }
                    catch (ex) {
                        fecharEspera();
                        LogarException(ex);
                    }
                }, function (erro) {
                    fecharEspera();
                    LogarException(erro);
                }, this);
            }
        }
        else {
            this.txtPeriodo.IniciarDataAtual();
        }
    };
    R_RankingProd.prototype.carregarFormaspagamento = function () {
        var _this = this;
        var listaEmpresas = this.lstEmpresa.GetValues();
        if (listaEmpresas.length > 0) {
            var empresas = this.lstEmpresa.GetValues().join(",");
            var parametros = {
                empresas: empresas
            };
            abrirEspera("Carregando registros...");
            this.ExecutarFuncaoServerSideAsynch("PreencherListaPagamento", parametros, function (d) {
                try {
                    fecharEspera();
                    var retornoPagamento = GetRetornoAJAX(d);
                    for (var i = 0; i <= retornoPagamento.length - 1; i++) {
                        _this.lstFormaPagamento.AdicionarItem(retornoPagamento[i].Descricao, retornoPagamento[i].Tipo);
                    }
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
    };
    R_RankingProd.prototype.OnAlterouFormaPagamento = function () {
        this.grid.PreencherGrid(null);
    };
    R_RankingProd.prototype.OnAlterouLinha = function () {
        this.grid.PreencherGrid(null);
        var linhasSelecionadas = this.lstLinha.GetValues();
        if (linhasSelecionadas.length > 0) {
            var empresas = this.lstEmpresa.GetValues().join(",");
            var linha = this.lstLinha.GetValues().join(",");
            var parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                empresas: empresas,
                linha: linha
            };
            //abrirEspera("Carregando registros...");
            //var retorno = this.ExecutarFuncaoServerSideSynch("PreencherListaProdutos", parametros);
            //fecharEspera();
            //for (var x = 0; x <= retorno.length - 1; x++) {
            //    this.lstProdutos.AdicionarItem(retorno[x].Descricao, retorno[x].Codigo);
            //}
        }
    };
    R_RankingProd.prototype.OnAlterouProdutos = function () {
        this.grid.PreencherGrid(null);
    };
    R_RankingProd.prototype.LimparCampos = function () {
        this.chkUtilizarCustoVenda.Checked = false;
        this.chkLojaPropria.Checked = false;
        this.chkConsiderarTrocas.Checked = true;
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.lstFormaPagamento.btnMarcar.DoClick();
        this.txtPeriodo.IniciarDataAtual();
        this.grid.PreencherGrid(null);
        this.lstProdutos.Limpar();
        this.txtMarca.Limpar();
    };
    R_RankingProd.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var selecionouDinheiro = false;
        var selecionouCheque = false;
        var selecionouCrediario = false;
        var selecionouTicket = false;
        var selecionouTodos = false;
        var cartoes = "";
        var formasPagamento = this.lstFormaPagamento.GetValuesRelacao();
        var empresas = this.lstEmpresa.GetValues().join(",");
        var linha = "";
        var produtos = "";
        try {
            this.Produtos = [];
            if (!this.ValidarCampos()) {
                return;
            }
            if ((this.lstFormaPagamento.SelectedValues.length == this.lstFormaPagamento.CheckBoxList.length)
                || this.lstFormaPagamento.SelectedValues.length == 0) {
                selecionouTodos = true;
            }
            else {
                for (var i = 0; i < formasPagamento.length; i++) {
                    if (formasPagamento[i].split("|")[0].toUpperCase() == "D") {
                        selecionouDinheiro = true;
                    }
                    else if (formasPagamento[i].split("|")[0].toUpperCase() == "CH") {
                        selecionouCheque = true;
                    }
                    else if (formasPagamento[i].split("|")[0].toUpperCase() == "CRE") {
                        selecionouCrediario = true;
                    }
                    else if (formasPagamento[i].split("|")[0].toUpperCase() == "T") {
                        selecionouTicket = true;
                    }
                    else if (formasPagamento[i].split("|")[0].toUpperCase() == "C") {
                        cartoes = cartoes + "'" + formasPagamento[i].split("|")[1] + "',";
                    }
                }
                if (cartoes.length > 0) {
                    if (cartoes[cartoes.length - 1] === ",") {
                        cartoes = cartoes.slice(0, -1);
                    }
                }
            }
            if ((this.lstLinha.SelectedValues.length != this.lstLinha.CheckBoxList.length)
                && this.lstLinha.SelectedValues.length > 0) {
                linha = this.lstLinha.GetValues().join(",");
            }
            //if ((this.lstProdutos.SelectedValues.length != this.lstProdutos.CheckBoxList.length) && this.lstProdutos.SelectedValues.length > 0) {
            //    produtos = this.lstProdutos.GetValues().join(",");
            //}
            if (this.lstProdutos.SourceLista.length > 0) {
                produtos = this.lstProdutos.SourceLista.map((function (e) { return e.Value; })).join(',');
            }
            var parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                empresas: empresas,
                produtos: produtos,
                linha: linha,
                selecionouDinheiro: selecionouDinheiro,
                cartoes: cartoes,
                selecionouCheque: selecionouCheque,
                selecionouCrediario: selecionouCrediario,
                selecionouTicket: selecionouTicket,
                selecionouTodos: selecionouTodos,
                considerarTrocas: this.chkConsiderarTrocas.Checked,
                utilizarCustoVenda: this.chkUtilizarCustoVenda.Checked,
                marca: this.txtMarca.GetText().CNum(),
                lojaPropria: this.chkLojaPropria.Checked
            };
            try {
                abrirEspera("Carregando registros...");
                this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                    try {
                        fecharEspera();
                        _this.grid.PreencherGrid(GetRetornoAJAX(d));
                        _this.grid.OrderBy("Ranking", "asc");
                    }
                    catch (ex) {
                        fecharEspera();
                        LogarException(ex);
                    }
                }, function (erro) {
                    fecharEspera();
                    LogarExceptionAjax(erro);
                }, this);
            }
            catch (ex) {
                this.grid.PreencherGrid([]);
                LogarException(ex);
                fecharEspera();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_RankingProd.prototype.ValidarCampos = function () {
        return this.ValidarCamposObrigatorios();
    };
    return R_RankingProd;
}(MouraPageRelacaoAngular));
var r_RankingProd = new R_RankingProd;
//# sourceMappingURL=R_RankingProd.js.map