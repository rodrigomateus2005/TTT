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
var M_DevCli = /** @class */ (function (_super) {
    __extends(M_DevCli, _super);
    function M_DevCli() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.verifica = false;
        return _this;
    }
    Object.defineProperty(M_DevCli.prototype, "Itens", {
        get: function () {
            if (!this.GetScope()['Itens']) {
                this.GetScope()['Itens'] = [];
            }
            return this.GetScope()['Itens'];
        },
        set: function (value) {
            this.GetScope()['Itens'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_DevCli.prototype, "Item", {
        get: function () {
            if (!this.GetScope()['Item']) {
                this.GetScope()['Item'] = {};
            }
            return this.GetScope()['Item'];
        },
        set: function (value) {
            this.GetScope()['Item'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_DevCli.prototype, "dlgLote", {
        get: function () {
            return window['dlgLote_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_DevCli.prototype, "LotesInformados", {
        get: function () {
            if (!this.dlgLote.Informados) {
                return [];
            }
            else {
                return this.dlgLote.Informados;
            }
        },
        set: function (value) {
            this.dlgLote.Informados = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_DevCli.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_DevCli.prototype, "txtDocumento", {
        get: function () {
            return window['txtDocumento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_DevCli.prototype, "txtResponsavel", {
        get: function () {
            return window['txtResponsavel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_DevCli.prototype, "txtObservacao", {
        get: function () {
            return window['txtObservacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_DevCli.prototype, "cboDeposito", {
        get: function () {
            return window['cboDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_DevCli.prototype, "cboMotivo", {
        get: function () {
            return window['cboMotivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_DevCli.prototype, "lblEstoque", {
        get: function () {
            return window['lblEstoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_DevCli.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_DevCli.prototype, "btnTicket", {
        get: function () {
            return window['btnTicket_Object'];
        },
        enumerable: true,
        configurable: true
    });
    M_DevCli.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().Codigo) {
            this.GetScope().Codigo = $.proxy(this.ProcurouMovimento, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Codigo; }, this.GetScope().Codigo);
        }
    };
    M_DevCli.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Procurou, this.OnTextBoxProdutoProcurou, this);
        }
        if (this.cboDeposito) {
            adicionarEventoDevExpress(this.cboDeposito.Combo.SelectedIndexChanged, this.OnComboDepositoSelectedIndexChanged, this);
        }
        if (this.cboMotivo) {
            adicionarEventoDevExpress(this.cboMotivo.Combo.SelectedIndexChanged, this.OnComboMotivoSelectedIndexChanged, this);
        }
        if (this.Grid && this.Grid.btnAdiconar) {
            adicionarEventoMoura(this.Grid.AdicionandoItem, this.AdicionarItem, this);
        }
        if (this.btnTicket) {
            adicionarEventoMoura(this.btnTicket.Click, this.OnClickTicket, this);
        }
        if (this.dlgLote) {
            adicionarEventoMoura(this.dlgLote.InformouLote, this.OnInformouLoteProduto, this);
        }
    };
    M_DevCli.prototype.atualizarLabelEstoque = function () {
        var estoque;
        var parametros;
        parametros = {
            produto: this.txtProduto.GetText(),
            deposito: this.cboDeposito.GetValue()
        };
        estoque = this.ExecutarFuncaoServerSideSynch("GetEstoqueByProduto", parametros);
        this.lblEstoque.Text = estoque.Format(2);
    };
    M_DevCli.prototype.OnTextBoxProdutoProcurou = function () {
        this.atualizarLabelEstoque();
    };
    M_DevCli.prototype.OnComboDepositoSelectedIndexChanged = function () {
        this.atualizarLabelEstoque();
    };
    M_DevCli.prototype.OnComboMotivoSelectedIndexChanged = function (s, e) {
        this.VerificaObrigatoriedadeCampos(CNum(this.cboMotivo.GetValue()));
    };
    M_DevCli.prototype.Limpar = function () {
        _super.prototype.Limpar.call(this);
        this.txtDocumento.SetTextLabelControl("Documento");
        this.txtObservacao.SetTextLabelControl("Observação");
        this.LimparCamposItens();
        this.Itens = [];
    };
    M_DevCli.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Itens = [];
        Entity.Data = this.DataServidor();
        this.dlgLote.Limpar();
        this.verifica = false;
        this.criarEntidadePersonalizados(Entity);
    };
    M_DevCli.prototype.criarEntidadePersonalizados = function (Entidade) {
        var listaOrdem = [];
        if (!Entidade.Campos_Valor) {
            Entidade.Campos_Valor = [];
        }
        $("[moura-personalizado-campo]").each(function (index, element) {
            var campo = parseInt($(element).attr("moura-personalizado-campo"));
            var encontrado;
            for (var x = 0; x < Entidade.Campos_Valor.length; x++) {
                if (Entidade.Campos_Valor[x].Campo == campo) {
                    encontrado = Entidade.Campos_Valor[x];
                    break;
                }
            }
            if (!encontrado) {
                encontrado = {};
                encontrado.Campo = campo;
                encontrado.Movimentacao = Entidade.Codigo;
            }
            listaOrdem.push(encontrado);
        });
        for (var x = 0; x < listaOrdem.length; x++) {
            if (listaOrdem[x].Movimentacao != undefined) {
                var parametros = {
                    codCampo: listaOrdem[x].Campo,
                    item: listaOrdem[x].Movimentacao
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("GetByItemPersonalizado", parametros);
                if (retorno && retorno.Descricao) {
                    listaOrdem[x].Valor = retorno.Descricao;
                }
            }
        }
        Entidade.Campos_Valor = listaOrdem;
    };
    M_DevCli.prototype.LimparCamposItens = function () {
        this.Item = {};
        this.Item.Codigo = 0;
        this.Item.Qtde = 0;
        this.Item.Motivo_Codigo = 0;
        this.Item.Documento = 0;
        this.Item.Obs = "";
        this.lblEstoque.Text = "0,00";
        this.RefreshAngular();
    };
    M_DevCli.prototype.ObterMovDescPorCodigo = function (motivo) {
        var parametros;
        var mov;
        try {
            parametros = {
                motivo: motivo
            };
            mov = this.ExecutarFuncaoServerSideSynch("ObterMovDesc", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
        return mov;
    };
    M_DevCli.prototype.VerificaCamposItem = function () {
        var mensagem = "Preencha o campo corretamente: ";
        var retorno = true;
        try {
            var mov = this.ObterMovDescPorCodigo(CNum(this.Item.Motivo_Codigo));
            if (mov) {
                if (mov.Solicitar_Documento) {
                    if (CNum(this.Item.Documento) <= 0) {
                        MostrarAlerta(mensagem += "Documento");
                        retorno = false;
                    }
                }
                if (mov.Solicitar_Obs && retorno) {
                    if (String.IsNullOrWhiteSpace(this.Item.Obs)) {
                        MostrarAlerta(mensagem += "Observação");
                        retorno = false;
                    }
                }
            }
            else if (CNum(this.Item.Produto_Codigo) <= 0) {
                MostrarAlerta(mensagem += "Produto");
                retorno = false;
            }
            else if (CNum(this.Item.Qtde) <= 0) {
                MostrarAlerta(mensagem += "Quantidade");
                retorno = false;
            }
            else if (CNum(this.Item.Motivo_Codigo) <= 0) {
                MostrarAlerta(mensagem += "Motivo");
                retorno = false;
            }
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
        return retorno;
    };
    M_DevCli.prototype.VerificaObrigatoriedadeCampos = function (motivo) {
        var mov;
        try {
            mov = this.ObterMovDescPorCodigo(motivo);
            if (mov) {
                if (mov.Solicitar_Documento) {
                    this.txtDocumento.SetTextLabelControl("*Documento");
                }
                else {
                    this.txtDocumento.SetTextLabelControl("Documento");
                }
                if (mov.Solicitar_Obs) {
                    this.txtObservacao.SetTextLabelControl("*Observação");
                }
                else {
                    this.txtObservacao.SetTextLabelControl("Observação");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    M_DevCli.prototype.AdicionarItem = function (s, e) {
        if (this.VerificaCamposItem()) {
            if (this.IsProdutoLote(this.Item.Produto_Codigo) && !this.verifica) {
                this.dlgLote.Limpar();
                this.AbrirModalLote();
                e.cancelar = true;
                return;
            }
            else {
                var produto = this.ObterDadosEspecificosProduto(this.Item.Produto_Codigo);
                if (produto) {
                    if (this.Itens.length > 0) {
                        e.item.Contador = this.Itens.Max("Contador") + 1;
                    }
                    else {
                        e.item.Contador = 1;
                    }
                    e.item.Marca = produto.NomeMarca;
                    e.item.Cor = produto.NomeCor;
                    e.item.Motivo_Descricao = this.cboMotivo.GetText();
                    e.item.Preco_Custo = produto.Preco_Custo;
                    e.item.Preco_Venda = produto.Preco_Produto;
                    e.item.Produto_Codigo = produto.Codigo;
                    e.item.Produto_Descricao = produto.Descricao;
                    e.item.Produto_CodigoBarras = produto.Codigos_Barra;
                    e.item.Referencia = produto.Referencia;
                    e.item.Tamanho = produto.Tamanho;
                    e.item.Unidade = produto.Unidade;
                    this.CarregarListaLoteProduto();
                    e.item.Lotes = this.listaLote;
                    e.item.Lotes_Extenso = this.GetLotesExtenso();
                }
                else {
                    e.cancelar = true;
                    MostrarAlerta("Preencha o campo corretamente: Produto");
                    return;
                }
                this.LimparCamposItens();
            }
        }
        else {
            e.cancelar = true;
        }
        this.verifica = false;
    };
    M_DevCli.prototype.IsProdutoLote = function (produto) {
        var retorno = false;
        try {
            var prod = this.ObterDadosEspecificosProduto(produto);
            if (prod) {
                retorno = prod.IsControlado;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return retorno;
    };
    M_DevCli.prototype.ObterDadosEspecificosProduto = function (codProduto) {
        var parametros;
        var retorno;
        try {
            parametros = {
                produto: codProduto
            };
            var prod = this.ExecutarFuncaoServerSideSynch("ObterProduto", parametros);
            if (prod) {
                retorno = prod;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return retorno;
    };
    M_DevCli.prototype.AbrirModalLote = function () {
        var produtos = [];
        var lote = {};
        lote.Produto = CNum(this.Item.Produto_Codigo);
        lote.Deposito_Codigo = CNum(this.EntityTela.Deposito);
        lote.Deposito_Descricao = this.cboDeposito.GetText();
        lote.Quantidade = this.Item.Qtde;
        produtos.push(lote);
        this.dlgLote.Mostrar(produtos, MouraModalLoteTipoJS.Entrada, this.LotesInformados, false, 0);
    };
    M_DevCli.prototype.ProcurouMovimento = function () {
        if (this.EntityTela.Tipo != 4 && this.EntityTela.Tipo) {
            MostrarAlerta("Essa movimentação não é uma entrada!");
            this.Limpar();
            return;
        }
    };
    M_DevCli.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.CarregarItensMovimentacao(Entity.Codigo);
        this.criarEntidadePersonalizados(Entity);
    };
    M_DevCli.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.Itens.length <= 0) {
            MostrarAlerta("Informe ao menos um produto!");
            return false;
        }
        this.EntityTela.Hora = ConvertToDate(new Date()).toTimeString().slice(0, 8);
        this.EntityTela.Tipo = 4;
        this.EntityTela.Aprovado = true;
        if (this.EntityTela.Usuario <= 0) {
            this.EntityTela.Usuario = ValoresSismoura.UsuarioLogado;
        }
        this.PreencherItens(this.EntityTela);
        this.criarEntidadePersonalizados(this.EntityTela);
        return true;
    };
    M_DevCli.prototype.PreencherItens = function (Entity) {
        var aux;
        var auxLote;
        Entity.Itens = [];
        for (var x = 0; x < this.Itens.length; x++) {
            aux = {};
            aux.E_S = "E";
            aux.Movimentacao = Entity.Codigo;
            aux.Produto = this.Itens[x].Produto_Codigo;
            aux.Qtde = this.Itens[x].Qtde;
            aux.Motivo = this.Itens[x].Motivo_Codigo;
            aux.Documento = this.Itens[x].Documento;
            aux.Obs = this.Itens[x].Obs;
            aux.Preco_Custo = this.Itens[x].Preco_Custo;
            aux.Preco_Venda = this.Itens[x].Preco_Venda;
            aux.MovimentoLote = [];
            if (!this.Itens[x].Lotes) {
                this.Itens[x].Lotes = [];
            }
            for (var i = 0; i < this.Itens[x].Lotes.length; i++) {
                auxLote = {};
                auxLote.Fornecedor = this.Itens[x].Lotes[i].Fornecedor_Codigo;
                auxLote.Lote = this.Itens[x].Lotes[i].Lote;
                auxLote.Movimento = Entity.Codigo;
                auxLote.Movimento_Item = aux.Codigo;
                auxLote.Produto = this.Itens[x].Lotes[i].Produto_Codigo;
                auxLote.Qtde = this.Itens[x].Lotes[i].Quantidade;
                auxLote.InformacoesAdicionaisLote = this.Itens[x].Lotes[i];
                aux.MovimentoLote.push(auxLote);
            }
            Entity.Itens.push(aux);
        }
    };
    M_DevCli.prototype.CarregarItensMovimentacao = function (codigo) {
        var parametros;
        try {
            parametros = {
                codigo: codigo
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("CarregarItensMovimentacao", parametros);
            this.Itens = retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    M_DevCli.prototype.OnClickTicket = function (s, e) {
        this.ImprimirTicket();
    };
    M_DevCli.prototype.ImprimirTicket = function () {
        var _this = this;
        var parametros;
        if (this.Itens.length <= 0) {
            MostrarAlerta("Não há nada para imprimir!");
            return;
        }
        //} else if (ValoresSismoura.ConfiguracoesRetaguarda.Porta_Impressora.trim() == "") {
        //    MostrarAlerta("Configure o caminho da impressora no Módulo Retaguarda > Configurações > Porta de Impressão Matricial do Sistema, ou entre em contato com a JN Moura Informática.");
        //    return;
        //}
        try {
            parametros = {
                responsavel: this.txtResponsavel.LabelResultado.textContent,
                data: ConvertToDate(this.EntityTela.Data),
                movimentacao: this.EntityTela.Codigo,
                Itens: this.Itens
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("MontaTicket", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.ImprimirMatricial("Ticket", retorno);
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
    M_DevCli.prototype.OnInformouLoteProduto = function () {
        this.verifica = true;
        this.Grid.btnAdiconar.DoClick();
        this.dlgLote.Limpar();
        this.LimparCamposItens();
    };
    M_DevCli.prototype.CarregarListaLoteProduto = function () {
        this.listaLote = [];
        var aux;
        for (var x = 0; x < this.LotesInformados.length; x++) {
            aux = {};
            aux.DataFabricacao = this.LotesInformados[x].DataFabricacao;
            aux.DataRecebimento = this.LotesInformados[x].DataRecebimento;
            aux.Deposito_Codigo = this.LotesInformados[x].Deposito_Codigo;
            aux.Deposito_Descricao = this.LotesInformados[x].Deposito_Descricao;
            aux.EPC = this.LotesInformados[x].EPC;
            aux.Fornecedor_Codigo = this.LotesInformados[x].Fornecedor_Codigo;
            aux.Fornecedor_Nome = this.LotesInformados[x].Fornecedor_Nome;
            aux.Localizacao1_Codigo = this.LotesInformados[x].Localizacao1_Codigo;
            aux.Localizacao1_Descricao = this.LotesInformados[x].Localizacao1_Descricao;
            aux.Localizacao2_Codigo = this.LotesInformados[x].Localizacao2_Codigo;
            aux.Localizacao2_Descricao = this.LotesInformados[x].Localizacao2_Descricao;
            aux.Localizacao3_Codigo = this.LotesInformados[x].Localizacao3_Codigo;
            aux.Localizacao3_Descricao = this.LotesInformados[x].Localizacao3_Descricao;
            aux.Lote = this.LotesInformados[x].Lote;
            aux.Peso = this.LotesInformados[x].Peso;
            aux.Produto_Codigo = this.LotesInformados[x].Produto_Codigo;
            aux.Produto_Descricao = this.LotesInformados[x].Produto_Descricao;
            aux.Quantidade = this.LotesInformados[x].Quantidade;
            aux.Validade = this.LotesInformados[x].Validade;
            this.listaLote.push(aux);
        }
    };
    M_DevCli.prototype.GetLotesExtenso = function () {
        var parametros;
        try {
            parametros = {
                itens: this.listaLote
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetNomeLotesExtenso", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return M_DevCli;
}(MouraPageCadastroAngular));
var m_DevCli = new M_DevCli();
//# sourceMappingURL=M_DevCli.js.map