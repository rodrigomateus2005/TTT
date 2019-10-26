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
var C_ComCot = /** @class */ (function (_super) {
    __extends(C_ComCot, _super);
    function C_ComCot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.menorPrazo = 99999;
        _this.pintar = false;
        _this.sublinhar = false;
        return _this;
    }
    Object.defineProperty(C_ComCot.prototype, "Produto", {
        get: function () {
            if (!this.GetScope()["Produto"]) {
                this.GetScope()["Produto"] = {};
            }
            return this.GetScope()["Produto"];
        },
        set: function (value) {
            this.GetScope()["Produto"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComCot.prototype, "Produtos", {
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
    Object.defineProperty(C_ComCot.prototype, "Item", {
        get: function () {
            if (!this.GetScope()["Item"]) {
                this.GetScope()["Item"] = {};
            }
            return this.GetScope()["Item"];
        },
        set: function (value) {
            this.GetScope()["Item"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComCot.prototype, "Itens", {
        get: function () {
            if (!this.GetScope()["Itens"]) {
                this.GetScope()["Itens"] = [];
            }
            return this.GetScope()["Itens"];
        },
        set: function (value) {
            this.GetScope()["Itens"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComCot.prototype, "ItemPedido", {
        get: function () {
            if (!this.GetScope()["ItemPedido"]) {
                this.GetScope()["ItemPedido"] = {};
            }
            return this.GetScope()["ItemPedido"];
        },
        set: function (value) {
            this.GetScope()["ItemPedido"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComCot.prototype, "ItensPedido", {
        get: function () {
            if (!this.GetScope()["ItensPedido"]) {
                this.GetScope()["ItensPedido"] = [];
            }
            return this.GetScope()["ItensPedido"];
        },
        set: function (value) {
            this.GetScope()["ItensPedido"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComCot.prototype, "btnLimparCampos", {
        get: function () {
            return window['btnLimparCampos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComCot.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComCot.prototype, "btnBuscarProdutos", {
        get: function () {
            return window['btnBuscarProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComCot.prototype, "btnComparar", {
        get: function () {
            return window['btnComparar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComCot.prototype, "btnMontar", {
        get: function () {
            return window['btnMontar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComCot.prototype, "btnGerarPedido", {
        get: function () {
            return window['btnGerarPedido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComCot.prototype, "mdProdutos", {
        get: function () {
            return window['mdProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComCot.prototype, "mdPedido", {
        get: function () {
            return window['mdPedido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComCot.prototype, "gridProdutos", {
        get: function () {
            return window['gridProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComCot.prototype, "gridPedido", {
        get: function () {
            return window['gridPedido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComCot.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComCot.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComCot.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComCot.prototype, "cboDeposito", {
        get: function () {
            return window['cboDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComCot.prototype, "cboFormaPagamento", {
        get: function () {
            return window['cboFormaPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ComCot.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    C_ComCot.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnLimparCampos) {
            adicionarEventoMoura(this.btnLimparCampos.Click, this.ClicouLimparCampos, this);
        }
        if (this.btnBuscarProdutos) {
            adicionarEventoMoura(this.btnBuscarProdutos.Click, this.ClicouAdicionarProduto, this);
        }
        if (this.btnComparar) {
            adicionarEventoMoura(this.btnComparar.Click, this.ClicouCompararProdutos, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.ClicouLimparProduto, this);
        }
        if (this.btnMontar) {
            adicionarEventoMoura(this.btnMontar.Click, this.ClicouMontarPedido, this);
        }
        if (this.btnGerarPedido) {
            adicionarEventoMoura(this.btnGerarPedido.Click, this.ClicouGerarPedido, this);
        }
        //if (this.txtProduto) {
        //    adicionarEventoMoura(this.txtProduto.Procurou, this.OnDepoisBuscouProduto, this);
        //}
        if (this.gridProdutos && this.gridProdutos.Grid) {
            adicionarEventoMoura(this.gridProdutos.Grid.CellPrepared, this.GridProdutoOnCellPrepared, this);
            adicionarEventoMoura(this.gridProdutos.AdicionandoItem, this.OnClicouAdicionar, this);
        }
        if (this.grid && this.grid.Grid) {
            adicionarEventoMoura(this.grid.Grid.SelecionouLinha, this.OnSelecionouItem, this);
            adicionarEventoMoura(this.grid.Grid.CellPrepared, this.OnCellPrepared, this);
        }
        if (this.gridPedido && this.gridPedido.Grid) {
            adicionarEventoMoura(this.gridPedido.Grid.SelecionouLinha, this.OnSelecionouPedido, this);
            adicionarEventoMoura(this.gridPedido.AlterandoItem, this.AlterouItemPedido, this);
            adicionarEventoMoura(this.gridPedido.LimpouItem, this.LimpouItemPedido, this);
        }
        if (this.mdPedido) {
            adicionarEventoMoura(this.mdPedido.Fechou, this.FechouModalPedido, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnEmpresaChanged, this);
        }
    };
    C_ComCot.prototype.LimparCampos = function () {
        this.LimparCamposProduto();
        this.LimparCamposPedido();
        this.Itens = [];
        this.grid.Grid.LimparSelecao();
        this.grid.Grid.Refresh();
        this.RefreshAngular();
    };
    C_ComCot.prototype.LimparCamposProduto = function () {
        this.Produtos = [];
        this.Produto.Data_Inicial = this.DataServidor().DateAdd(this.DataServidor(), "m", -1);
        this.Produto.Data_Final = this.DataServidor();
        this.Produto.Codigo = 0;
        this.RefreshAngular();
    };
    C_ComCot.prototype.LimparCamposPedido = function () {
        this.ItensPedido = [];
        //this.cboEmpresa.LimparSelecao();
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        // this.ItemPedido.Empresa = ValoresSismoura.EmpresaPadraoUsuario
        this.AlteraDeposito();
        this.cboDeposito.SetSelectedIndex(0);
        this.cboFormaPagamento.SetSelectedIndex(0);
        this.RefreshAngular();
        this.gridPedido.Grid.LimparSelecao();
        this.gridPedido.Grid.Refresh();
    };
    C_ComCot.prototype.ClicouLimparCampos = function (s, e) {
        this.LimparCampos();
    };
    C_ComCot.prototype.ClicouLimparProduto = function (s, e) {
        this.LimparCamposProduto();
    };
    C_ComCot.prototype.ClicouAdicionarProduto = function (s, e) {
        this.LimparCamposProduto();
        this.mdProdutos.Show();
    };
    C_ComCot.prototype.ClicouCompararProdutos = function (s, e) {
        //Verifica se o produto não esta na grade
        if (this.Produtos.length > 0) {
            for (var y = 0; y < this.Produtos.length; y++) {
                if (this.Itens.FindAll("NomeProduto", this.Produtos[y].NomeProduto).length <= 0) {
                    // Buscando a menor e mais recente cotação do produto, dentro do período, de cada fornecedor
                    // do produto.
                    var fornecedoresProduto = [];
                    fornecedoresProduto = this.Produtos.FindAll("CodProduto", this.Produtos[y].CodProduto);
                    for (var x = 0; x < fornecedoresProduto.length; x++) {
                        var fornecAtual = fornecedoresProduto[x].NomeFornecedor;
                        var arrayAux = fornecedoresProduto.FindAll("NomeFornecedor", fornecAtual);
                        x += arrayAux.length - 1;
                        arrayAux = arrayAux.sort(function (a, b) { return b.Data - a.Data; });
                        this.Itens = this.Itens.concat(arrayAux[0]);
                    }
                    //Ordena a grid em por produto e valor
                    this.Itens.sort(function (a, b) {
                        if (a.NomeProduto == b.NomeProduto && a.NomeFornecedor != b.NomeFornecedor) {
                            return a.Valor - b.Valor;
                        }
                        else {
                            return 1;
                        }
                    });
                    // Alterando a cor do valor para vermelho caso seja o maior valor do produto
                    // ou azul caso seja o menor
                    this.AlteraCorValor();
                    for (var x = 1; x <= this.Itens.length; x++) {
                        this.Itens[x - 1].Contador = x;
                    }
                }
            }
            this.grid.Grid.Grid.clearSelection();
            this.mdProdutos.Hide();
            this.LimparCamposProduto();
        }
        else {
            MostrarAlerta("Nenhum produto na grade para ser comparado!");
        }
    };
    C_ComCot.prototype.ClicouMontarPedido = function (s, e) {
        if (this.grid.Grid.GetSelectedRowsData.length <= 0) {
            MostrarAlerta("Selecione os produtos dos fornecedores que irão gerar 'Pedido de compra'!<br /> Após clique no botão 'Montar Pedido'.");
            return;
        }
        this.ItensPedido = this.grid.Grid.GetSelectedRowsData;
        for (var x = 0; x < this.ItensPedido.length; x++) {
            this.ItensPedido[x].Total = this.ItensPedido[x].Qtde * this.ItensPedido[x].Valor;
        }
        this.gridPedido.Grid.Grid.selectAll();
        this.gridPedido.Grid.Refresh();
        this.RefreshAngular();
        this.mdPedido.Show();
    };
    C_ComCot.prototype.ValidarCamposPedido = function () {
        var retorno = true;
        var arrayAux = this.gridPedido.Grid.GetSelectedRowsData;
        if (arrayAux.length <= 0) {
            MostrarAlerta("Selecione ao menos um produto de um fornecedor para gerar o Pedido de Compra");
            retorno = false;
        }
        else if (arrayAux.FindAll("CodFornecedor", arrayAux[0].CodFornecedor).length != arrayAux.length) {
            MostrarAlerta("Para gerar o pedido de compra, você não pode selecionar 2 fornecedores diferentes!");
            retorno = false;
        }
        else if (CNum(this.cboDeposito.GetValue()) <= 0) {
            MostrarAlerta("Preencha o campo corretamente: Depósito");
            retorno = false;
        }
        else if (CNum(this.cboEmpresa.GetValue()) <= 0) {
            MostrarAlerta("Preencha o campo corretamente: Empresa");
            retorno = false;
        }
        else if (!this.ValidarEmpresaFornecedor()) {
            retorno = false;
        }
        return retorno;
    };
    C_ComCot.prototype.ValidarEmpresaFornecedor = function () {
        var parametros;
        var retorno = true;
        if (CNum(this.ItensPedido[0].CodFornecedor) <= 0) {
            retorno = false;
        }
        else {
            parametros = {
                codFornecedor: CNum(this.ItensPedido[0].CodFornecedor),
                codEmpresa: CNum(this.cboEmpresa.GetValue())
            };
            var cad = this.ExecutarFuncaoServerSideSynch("isFornecedorPertenceEmpresa", parametros);
            if (!cad) {
                MostrarAlerta("Este fornecedor não pertece a empresa selecionada!");
                retorno = false;
            }
        }
        return retorno;
    };
    C_ComCot.prototype.ClicouGerarPedido = function (s, e) {
        var _this = this;
        if (this.ValidarCamposPedido()) {
            var parametros;
            var produtosSelecionados = this.gridPedido.Grid.GetSelectedRowsData;
            try {
                parametros = {
                    produtos: produtosSelecionados,
                    empresa: CNum(this.cboEmpresa.GetValue()),
                    deposito: CNum(this.cboDeposito.GetValue()),
                    formaPagamento: CNum(this.cboFormaPagamento.GetValue()),
                    tela: ValoresSismoura.NomeTela,
                    codUsuario: ValoresSismoura.UsuarioLogado
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("GravaPedidoCompra", parametros, function (d) {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDePedidoDeCompra), retorno);
                    _this.mdPedido.Hide();
                }, function (erro) {
                    fecharEspera();
                    LogarException(erro);
                }, this);
            }
            catch (ex) {
                fecharEspera();
                LogarException(ex);
            }
        }
    };
    C_ComCot.prototype.OnClicouAdicionar = function (s, e) {
        var _this = this;
        var parametros;
        if (!this.VerificaCamposProdutos()) {
            this.Produtos = [];
            e.cancelar = true;
            return;
        }
        if (this.Produtos.FindAll("CodProduto", CNum(this.Produto.Codigo)).length > 0) {
            MsgBoxJS("O produto já está adicionado na grade, deseja adicionar novamente?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (r) {
                if (r.Resultado == MsgBoxResult.Yes) {
                    _this.AdicionarProduto();
                }
            });
            e.cancelar = true;
            return;
        }
        else {
            this.AdicionarProduto();
            e.cancelar = true;
        }
    };
    C_ComCot.prototype.AdicionarProduto = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                codigo: CNum(this.Produto.Codigo),
                dataInicial: this.Produto.Data_Inicial,
                dataFinal: this.Produto.Data_Final
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGridProdutos", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.Produtos = _this.Produtos.concat(retorno);
                if (retorno) {
                    if (retorno.length <= 0) {
                        MostrarAlerta("Não há cotação para o produto informado no período!");
                    }
                    else {
                        _this.VerificaCotacaoMenorEntrada();
                    }
                }
                else {
                    MostrarAlerta("Não há cotação para o produto informado no período!");
                }
                _this.Produto.Codigo = 0;
                _this.RefreshAngular();
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
    C_ComCot.prototype.VerificaCotacaoMenorEntrada = function () {
        var parametros;
        this.menor = 0;
        this.pintar = false;
        if (!this.Produtos || !this.Produto.Codigo || CNum(this.Produto.Codigo) <= 0) {
            return;
        }
        try {
            parametros = {
                codProduto: CNum(this.Produto.Codigo)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificaPrecoEntrada", parametros);
            if (retorno) {
                for (var x = 0; x < this.Produtos.length; x++) {
                    if (this.Produtos[x].Valor < retorno.Valor_Unitario) {
                        if (this.menor == 0) {
                            this.menor = this.Produtos[x].Contador;
                        }
                        else {
                            if (this.Produtos[x].Valor < this.Produtos[this.menor - 1].Valor) {
                                this.menor = this.Produtos[x].Contador;
                            }
                        }
                    }
                }
                if (this.menor == 0) {
                    if (this.Produtos[this.menor].CodFornecedor != retorno.Codigo_Fornecedor) {
                        this.pintar = true;
                        this.menor = 1;
                    }
                }
                else if (this.Produtos[this.menor - 1].CodFornecedor != retorno.Codigo_Fornecedor) {
                    this.pintar = true;
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ComCot.prototype.VerificaCamposProdutos = function () {
        var mensagem = "Preencha o campo corretamente: ";
        var retorno = true;
        if (!ConvertToDate(this.Produto.Data_Inicial) || !ConvertToDate(this.Produto.Data_Final)) {
            MostrarAlerta(mensagem += "Período");
            retorno = false;
        }
        else if (!ValidarPeriodo(this.Produto.Data_Inicial, this.Produto.Data_Final)) {
            MostrarAlerta(mensagem += "Período");
            retorno = false;
        }
        else if (CNum(this.Produto.Codigo) <= 0) {
            retorno = false;
        }
        return retorno;
    };
    C_ComCot.prototype.OnSelecionouItem = function (s, e) {
        this.grid.Grid.Grid.element().find("tr").css("font-weight", "normal");
        for (var x = 0; x < this.grid.Grid.Grid.getSelectedRowKeys().length; x++) {
            var index = this.grid.Grid.Grid.getRowIndexByKey(this.grid.Grid.Grid.getSelectedRowKeys()[x]);
            this.grid.Grid.Grid.getRowElement(index).css("font-weight", "bold");
        }
    };
    C_ComCot.prototype.OnSelecionouPedido = function (s, e) {
        this.gridPedido.Grid.Grid.element().find("tr").css("font-weight", "normal");
        for (var x = 0; x < this.gridPedido.Grid.Grid.getSelectedRowKeys().length; x++) {
            var index = this.gridPedido.Grid.Grid.getRowIndexByKey(this.gridPedido.Grid.Grid.getSelectedRowKeys()[x]);
            this.gridPedido.Grid.Grid.getRowElement(index).css("font-weight", "bold");
        }
    };
    C_ComCot.prototype.AlteraCorValor = function () {
        var menorValor = 0;
        var maiorValor = 0;
        var index = 0;
        for (var x = 0; x < this.Itens.length; x++) {
            var arrayAux = this.Itens.FindAll("NomeProduto", this.Itens[x].NomeProduto);
            arrayAux = arrayAux.sort(function (a, b) { return a.Valor - b.Valor; });
            menorValor = arrayAux[0].Valor;
            arrayAux = arrayAux.sort(function (a, b) { return b.Valor - a.Valor; });
            maiorValor = arrayAux[0].Valor;
            for (var y = 0; y < arrayAux.length; y++) {
                index = this.Itens.indexOf(arrayAux[y]);
                if (this.Itens[index].Valor == menorValor) {
                    this.Itens[index].Cor = "A";
                }
                else if (this.Itens[index].Valor == maiorValor && maiorValor > menorValor) {
                    this.Itens[index].Cor = "V";
                }
            }
            x += arrayAux.length - 1;
        }
        this.VerificaSublinhar();
        this.grid.Grid.Refresh();
    };
    C_ComCot.prototype.VerificaSublinhar = function () {
        var index;
        for (var x = 0; x < this.Itens.length; x++) {
            var arrayAux = this.Itens.FindAll("NomeProduto", this.Itens[x].NomeProduto);
            arrayAux = arrayAux.sort(function (a, b) { return a.Prazo_Entrega - b.Prazo_Entrega; });
            var menorValor = arrayAux[0].Prazo_Entrega;
            for (var y = 0; y < arrayAux.length; y++) {
                index = this.Itens.indexOf(arrayAux[y]);
                if (this.Itens[index].Prazo_Entrega == menorValor) {
                    if (this.Itens[index].Cor == "A") {
                        this.Itens[index].Cor = "AS";
                    }
                    else if (this.Itens[index].Cor == "V") {
                        this.Itens[index].Cor = "VS";
                    }
                }
            }
            x += arrayAux.length - 1;
        }
    };
    C_ComCot.prototype.OnCellPrepared = function (s, e) {
        if (e.rowType == "data" && e.data != null) {
            if (e.data["Cor"]) {
                if (e.column["dataField"] == "Valor") {
                    if (e.data["Cor"] == "A" || e.data["Cor"] == "AS") {
                        e.cellElement.css("color", "blue");
                    }
                    else if (e.data["Cor"] == "V" || e.data["Cor"] == "VS") {
                        e.cellElement.css("color", "red");
                    }
                    if (e.data["Cor"] == "AS" || e.data["Cor"] == "VS") {
                        e.cellElement.css("text-decoration", "underline");
                    }
                }
            }
        }
        if (e.rowType == "group") {
            if (e.column["dataField"] == "NomeProduto") {
                e.cellElement.css("color", "black");
                e.cellElement.css("font-weight", "bold");
            }
        }
    };
    C_ComCot.prototype.GridProdutoOnCellPrepared = function (s, e) {
        if (e.rowType == "data" && e.data) {
            if (e.data["Contador"] == this.menor) {
                if (this.pintar) {
                    e.cellElement.css("background-color", "#00ff00");
                }
            }
        }
    };
    C_ComCot.prototype.FechouModalPedido = function (s, e) {
        this.LimparCamposPedido();
    };
    C_ComCot.prototype.AlterouItemPedido = function (s, e) {
        e.item.Total = e.item.Qtde * e.item.Valor;
    };
    C_ComCot.prototype.LimpouItemPedido = function (s, e) {
        e.item.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
    };
    C_ComCot.prototype.OnEmpresaChanged = function (s, e) {
        this.AlteraDeposito();
    };
    C_ComCot.prototype.AlteraDeposito = function () {
        var parametros;
        parametros = {
            codEmpresa: this.cboEmpresa.GetValue()
        };
        var itens;
        itens = this.ExecutarFuncaoServerSideSynch("PreencherComboDeposito", parametros);
        //
        if (this.cboDeposito && this.cboDeposito.Combo) {
            this.cboDeposito.ClearItems();
            for (var x = 0; x < itens.length; x++) {
                this.cboDeposito.Combo.AddItem(itens[x].Descricao, itens[x].Codigo, "");
            }
            if (this.cboDeposito.Combo.GetItemCount() == 1) {
                this.cboDeposito.Combo.SetSelectedIndex(0);
            }
        }
    };
    return C_ComCot;
}(MouraPageAngular));
var c_ComCot = new C_ComCot();
//# sourceMappingURL=C_ComCot.js.map