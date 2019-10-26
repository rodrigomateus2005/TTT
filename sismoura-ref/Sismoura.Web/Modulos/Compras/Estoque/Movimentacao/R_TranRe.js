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
var R_TranRe = /** @class */ (function (_super) {
    __extends(R_TranRe, _super);
    function R_TranRe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_TranRe.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_TranRe.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_TranRe.prototype, "cboMovimento", {
        get: function () {
            return window["cboMovimento_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_TranRe.prototype, "txtProduto", {
        get: function () {
            return window["txtProduto_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_TranRe.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_TranRe.prototype, "lstEmpresaOrigem", {
        get: function () {
            return window['lstEmpresaOrigem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_TranRe.prototype, "lstEmpresaDestino", {
        get: function () {
            return window['lstEmpresaDestino_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_TranRe.prototype, "lstDepositoOrigem", {
        get: function () {
            return window['lstDepositoOrigem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_TranRe.prototype, "lstDepositoDestino", {
        get: function () {
            return window['lstDepositoDestino_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_TranRe.prototype, "mdItensTransf", {
        get: function () {
            return window['mdItensTransf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_TranRe.prototype, "lblMovimentacao", {
        get: function () {
            return window['lblMovimentacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_TranRe.prototype, "lblDataMovimentacao", {
        get: function () {
            return window['lblDataMovimentacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_TranRe.prototype, "grdItens", {
        get: function () {
            return window['grdItens_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_TranRe.prototype, "agpLegenda1", {
        get: function () {
            return window['agpLegenda1_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_TranRe.prototype, "agpLegenda2", {
        get: function () {
            return window['agpLegenda2_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_TranRe.prototype, "agpLegenda3", {
        get: function () {
            return window['agpLegenda3_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_TranRe.prototype, "agpDivergencia", {
        get: function () {
            return window['agpDivergencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_TranRe.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.lstEmpresaOrigem) {
            adicionarEventoMoura(this.lstEmpresaOrigem.SelectionChanged, this.ClicouEmpOrigem, this);
        }
        if (this.lstEmpresaDestino) {
            adicionarEventoMoura(this.lstEmpresaDestino.SelectionChanged, this.ClicouEmpDestino, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnGridSelecionouItem, this);
            adicionarEventoMoura(this.grid.CellPrepared, this.PintarGridMovimentacao, this);
        }
        if (this.grdItens) {
            adicionarEventoMoura(this.grdItens.CellPrepared, this.PintarGridItensMovimentacao, this);
        }
    };
    R_TranRe.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (ValoresSismoura.ConfiguracoesRetaguarda.Mod_Conferencia_Estoque == "Visível") {
            this.agpLegenda1.Visible = false;
            this.agpLegenda2.Visible = false;
            this.agpLegenda3.Visible = false;
            this.agpDivergencia.Visible = false;
        }
        this.LimparCampos();
    };
    R_TranRe.prototype.LimparCampos = function () {
        this.cboMovimento.SetSelectedIndex(0);
        this.grid.PreencherGrid(null);
        this.lstEmpresaOrigem.txtProcura.value = "";
        this.lstEmpresaOrigem.procurarItemLista();
        this.lstEmpresaDestino.txtProcura.value = "";
        this.lstEmpresaDestino.procurarItemLista();
        this.lstEmpresaOrigem.SetValues(this.lstEmpresaOrigem.GetAllValues().map(String));
        this.ClicouEmpOrigem(new MouraEventHandler);
        this.lstEmpresaDestino.SetValues(this.lstEmpresaDestino.GetAllValues().map(String));
        this.ClicouEmpDestino(new MouraEventHandler);
        this.txtPeriodo.Iniciar();
        this.txtProduto.Limpar();
        this.RefreshAngular();
    };
    R_TranRe.prototype.LimparCamposMdItens = function () {
        this.grdItens.PreencherGrid(null);
        this.lblMovimentacao.Text = "";
        this.lblDataMovimentacao.Text = "";
    };
    R_TranRe.prototype.OnGridSelecionouItem = function (s, e) {
        this.LimparCamposMdItens();
        this.mdItensTransf.Show();
        this.lblMovimentacao.Text = e.data["Codigo"];
        this.lblDataMovimentacao.Text = e.data["Data"].FormataData();
        // REGRA DE NEGÓCIO CASO A CONFIGURAÇÃO ESTEJA ATIVADA        
        if (ValoresSismoura.ConfiguracoesRetaguarda.Mod_Conferencia_Estoque == "Cega") {
            if (e.data["Codigo_Saida_Originou"] > 0) { // Movimentação de entrada
                var parametrosEntrada = {
                    codMovimentacao: CNum(this.lblMovimentacao.Text),
                    tipoMov: "E"
                };
                var retornoEntrada = this.ExecutarFuncaoServerSideSynch("GetItensByTipo", parametrosEntrada);
                var parametrosSaida = {
                    codMovimentacao: CNum(e.data["Codigo_Saida_Originou"]),
                    tipoMov: "S"
                };
                var retornoSaida = this.ExecutarFuncaoServerSideSynch("GetItensByTipo", parametrosSaida);
                for (var i = 0; i < retornoEntrada.length; i++) {
                    var prod = retornoSaida.FindAll("CodProduto", retornoEntrada[i].CodProduto)[0];
                    if (prod == undefined) {
                        retornoEntrada[i].Divergencia = "2"; // Azul
                    }
                    else {
                        retornoEntrada[i].Qtde_Transferida = prod.Qtde_Transferida;
                        if (prod.Qtde_Transferida != retornoEntrada[i].Qtde_Conferida) { // Vermelho
                            retornoEntrada[i].Divergencia = "0";
                        }
                    }
                }
                this.agpLegenda2.Visible = false; // Não tem a legenda laranja
                this.agpLegenda1.Visible = true;
                this.agpLegenda3.Visible = true;
                this.grdItens.PreencherGrid(retornoEntrada);
            }
            else { // Movimentação de saída
                var paramEntrada = {
                    codMovSaidaOriginou: CNum(this.lblMovimentacao.Text)
                };
                var retornoEntrada = this.ExecutarFuncaoServerSideSynch("GetItensMovByCodSaida", paramEntrada);
                var parametrosSaida = {
                    codMovimentacao: CNum(this.lblMovimentacao.Text),
                    tipoMov: "S"
                };
                var retornoSaida = this.ExecutarFuncaoServerSideSynch("GetItensByTipo", parametrosSaida);
                if (retornoEntrada.length > 0) { // Se não possui movimentação de entrada, não possui divergências
                    for (var i = 0; i < retornoSaida.length; i++) {
                        var prod = retornoEntrada.FindAll("Produto", retornoSaida[i].CodProduto)[0];
                        if (prod == undefined) {
                            retornoSaida[i].Divergencia = "1"; // Laranja
                        }
                        else {
                            retornoSaida[i].Qtde_Conferida = prod.Qtde;
                            if (prod.Qtde != retornoSaida[i].Qtde_Transferida) { // Vermelho
                                retornoSaida[i].Divergencia = "0";
                            }
                        }
                    }
                }
                this.agpLegenda3.Visible = false; // Não tem a legenda azul
                this.agpLegenda1.Visible = true;
                this.agpLegenda2.Visible = true;
                this.grdItens.PreencherGrid(retornoSaida);
            }
        }
        else { // Preenche a grade normalmente
            var parametrosEntrada = {
                codMovimentacao: CNum(this.lblMovimentacao.Text)
            };
            var retornoEntrada = this.ExecutarFuncaoServerSideSynch("GetItens", parametrosEntrada);
            this.grdItens.PreencherGrid(retornoEntrada);
        }
    };
    R_TranRe.prototype.PintarGridMovimentacao = function (s, e) {
        if (e.rowType == "data" && e.data["Divergencia"] != "") {
            e.cellElement.css("font-weight", "bold");
            e.cellElement.css("color", "red");
        }
    };
    R_TranRe.prototype.PintarGridItensMovimentacao = function (s, e) {
        if (e.rowType == "data" && e.data["Divergencia"] != "") {
            e.cellElement.css("font-weight", "bold");
            // 0 - Vermelho
            // Itens que obtiveram quantidades divergentes na movimentação de entrada (conferência)
            // 1 - Laranja
            // SOMENTE PARA SAÍDA - Itens que não foram confirmados na movimentação de entrada (conferência)
            // 2 - Azul
            // SOMENTE PARA ENTRADA - Itens que não fazem parte da movimentação de saída
            if (e.data["Divergencia"] == "0") {
                e.cellElement.css("color", "red");
            }
            else if (e.data["Divergencia"] == "1") {
                e.cellElement.css("color", "orange");
            }
            else if (e.data["Divergencia"] == "2") {
                e.cellElement.css("color", "blue");
            }
        }
    };
    R_TranRe.prototype.ClicouEmpOrigem = function (e) {
        var parametros = {
            codEmpresas: this.lstEmpresaOrigem.GetValues()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetDepositosByEmpresas", parametros);
        this.lstDepositoOrigem.RemoverTodosItens();
        for (var i = 0; i < retorno.length; i++) {
            this.lstDepositoOrigem.AdicionarItem(retorno[i].Descricao, retorno[i].Codigo);
        }
    };
    R_TranRe.prototype.ClicouEmpDestino = function (e) {
        var parametros = {
            codEmpresas: this.lstEmpresaDestino.GetValues()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetDepositosByEmpresas", parametros);
        this.lstDepositoDestino.RemoverTodosItens();
        for (var i = 0; i < retorno.length; i++) {
            this.lstDepositoDestino.AdicionarItem(retorno[i].Descricao, retorno[i].Codigo);
        }
    };
    R_TranRe.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            if (this.txtProduto.GetText().trim() != "") {
                // Validação
                var codDepositos = this.lstDepositoOrigem.GetValues();
                var depositos;
                if (codDepositos) {
                    depositos = codDepositos.join(",");
                }
                var parametros = {
                    produto: CNum(this.txtProduto.GetText()),
                    depositos: depositos
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("VerificarProdutoDeposito", parametros);
                if (retorno) {
                    MostrarAlerta("O produto não existe no depósito de origem selecionado.");
                    return;
                }
            }
            // Passou da validação, preencher a grade com os registros
            var codDepositosOrigem = this.lstDepositoOrigem.GetValues();
            var depositosOrigem;
            if (codDepositosOrigem) {
                depositosOrigem = codDepositosOrigem.join(",");
            }
            var codDepositosDestino = this.lstDepositoDestino.GetValues();
            var depositosDestino;
            if (codDepositosDestino) {
                depositosDestino = codDepositosDestino.join(",");
            }
            var parametrosGrade = {
                produto: CNum(this.txtProduto.GetText()),
                depositosOrigem: depositosOrigem,
                depositosDestino: depositosDestino,
                movimento: CNum(this.cboMovimento.GetValue()),
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate()
            };
            var dados = this.ExecutarFuncaoServerSideSynch("PreencherGrade", parametrosGrade);
            // Validar as movimentações
            if (ValoresSismoura.ConfiguracoesRetaguarda.Mod_Conferencia_Estoque == "Cega") {
                for (var i = 0; i < dados.length; i++) {
                    if (dados[i].Tipo_Movimentacao == "Saída") { // Saída
                        var paramEntrada = {
                            codMovSaidaOriginou: CNum(dados[i].Codigo)
                        };
                        var itensEntrada = this.ExecutarFuncaoServerSideSynch("GetItensMovByCodSaida", paramEntrada);
                        if (itensEntrada.length > 0) { // Se não possui movimentação de entrada, já sai da validação
                            var paramSaida = {
                                codMovimentacao: CNum(dados[i].Codigo)
                            };
                            var itensSaida = this.ExecutarFuncaoServerSideSynch("GetItensMov", paramSaida);
                            // 1. Está faltando um dos ITENS
                            // 2. Divergência entre as quantidades de AO MENOS UM dos itens
                            // OBS.: Ao encontrar UMA divergência ele já sai do for para não fazer validações desnecessárias
                            for (var j = 0; j < itensSaida.length; j++) {
                                var prod = itensEntrada.FindAll("Produto", itensSaida[j].Produto)[0];
                                if (prod == undefined) { // Verifico se o produto está na outra lista
                                    dados[i].Divergencia = "S"; // Está faltando
                                    break;
                                }
                                else { // Se está eu verifico a quantidade
                                    if (prod.Qtde != itensSaida[j].Qtde) {
                                        dados[i].Divergencia = "S"; // Qtde. Divergente
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    else { //Entrada
                        // Se é uma movimentação de entrada ela obrigatoriamente tem que ter uma movimentação de saída que a originou
                        var paramEntrada = {
                            codMovimentacao: CNum(dados[i].Codigo)
                        };
                        var itensEntrada = this.ExecutarFuncaoServerSideSynch("GetItensMov", paramEntrada);
                        var paramSaida = {
                            codMovimentacao: CNum(dados[i].Codigo_Saida_Originou)
                        };
                        var itensSaida = this.ExecutarFuncaoServerSideSynch("GetItensMov", paramSaida);
                        // 1. Está faltando um dos ITENS
                        // 2. Divergência entre as quantidades de AO MENOS UM dos itens
                        // OBS.: Ao encontrar UMA divergência ele já sai do for para não fazer validações desnecessárias
                        for (var j = 0; j < itensEntrada.length; j++) {
                            var prod = itensSaida.FindAll("Produto", itensEntrada[j].Produto)[0];
                            if (prod == undefined) { // Verifico se o produto está na outra lista
                                dados[i].Divergencia = "S"; // Está faltando
                                break;
                            }
                            else { // Se está eu verifico a quantidade
                                if (prod.Qtde != itensEntrada[j].Qtde) {
                                    dados[i].Divergencia = "S"; // Qtde. Divergente
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            this.grid.PreencherGrid(dados);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_TranRe;
}(MouraPageRelacaoAngular));
var r_TranRe = new R_TranRe();
//# sourceMappingURL=R_TranRe.js.map