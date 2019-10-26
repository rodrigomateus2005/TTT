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
var M_SaiEst = /** @class */ (function (_super) {
    __extends(M_SaiEst, _super);
    function M_SaiEst() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.verifica = false;
        return _this;
    }
    Object.defineProperty(M_SaiEst.prototype, "Itens", {
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
    Object.defineProperty(M_SaiEst.prototype, "Item", {
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
    Object.defineProperty(M_SaiEst.prototype, "dlgLote", {
        get: function () {
            return window['dlgLote_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "dlgProdRepetido", {
        get: function () {
            return window['dlgProdRepetido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "dlgTransferencia", {
        get: function () {
            return window['dlgTransferencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "LotesInformados", {
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
    Object.defineProperty(M_SaiEst.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "txtSugestao", {
        get: function () {
            return window['txtSugestao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "txtMovimentacao", {
        get: function () {
            return window['txtMovimentacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "txtResponsavel", {
        get: function () {
            return window['txtResponsavel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "txtDocumento", {
        get: function () {
            return window['txtDocumento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "txtObservacao", {
        get: function () {
            return window['txtObservacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "cboDeposito", {
        get: function () {
            return window['cboDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "cboMotivo", {
        get: function () {
            return window['cboMotivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "cboDepositoTransferencia", {
        get: function () {
            return window['cboDepositoTransferencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "cboMotivoTransferencia", {
        get: function () {
            return window['cboMotivoTransferencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "lblEstoque", {
        get: function () {
            return window['lblEstoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "lblCaixa", {
        get: function () {
            return window['lblCaixa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "lblEstoqueAnterior", {
        get: function () {
            return window['lblEstoqueAnterior_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "lblPrecoCusto", {
        get: function () {
            return window['lblPrecoCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "lblMediaPrecoVenda", {
        get: function () {
            return window['lblMediaPrecoVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "lblUnidade", {
        get: function () {
            return window['lblUnidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "btnTransferencia", {
        get: function () {
            return window['btnTransferencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "btnTicket", {
        get: function () {
            return window['btnTicket_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "btnCancelarTransferencia", {
        get: function () {
            return window['btnCancelarTransferencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "btnOkTransferencia", {
        get: function () {
            return window['btnOkTransferencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "btnSomar", {
        get: function () {
            return window['btnSomar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "btnAlterar", {
        get: function () {
            return window['btnAlterar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "btnCancelar", {
        get: function () {
            return window['btnCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "mdValoresDesag", {
        get: function () {
            return window['mdValoresDesag_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "grdSubDesag", {
        get: function () {
            return window['grdSubDesag_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "lblTotalQtd", {
        get: function () {
            return window['lblTotalQtd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "lblTotalPeso", {
        get: function () {
            return window['lblTotalPeso_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "lblTotalMedia", {
        get: function () {
            return window['lblTotalMedia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_SaiEst.prototype, "lblTotalCusto", {
        get: function () {
            return window['lblTotalCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    M_SaiEst.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Procurou, this.OnTextBoxProdutoProcurou, this);
        }
        if (this.cboDeposito) {
            adicionarEventoDevExpress(this.cboDeposito.Combo.SelectedIndexChanged, this.OnComboDepositoSelectedIndexChanged, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnComboEmpresaSelectedIndexChanged, this);
        }
        if (this.cboMotivo) {
            adicionarEventoMoura(this.cboMotivo.SelectedItemChanged, this.OnComboMotivoSelectedIndexChanged, this);
        }
        if (this.btnTicket) {
            adicionarEventoMoura(this.btnTicket.Click, this.OnClickTicket, this);
        }
        if (this.btnTransferencia) {
            adicionarEventoMoura(this.btnTransferencia.Click, this.OnClickTransferencia, this);
        }
        if (this.btnOkTransferencia) {
            adicionarEventoMoura(this.btnOkTransferencia.Click, this.OnClickOkTransferencia, this);
        }
        if (this.btnCancelarTransferencia) {
            adicionarEventoMoura(this.btnCancelarTransferencia.Click, this.OnCancelarClick, this);
        }
        if (this.btnSomar) {
            adicionarEventoMoura(this.btnSomar.Click, this.OnClickSomar, this);
        }
        if (this.btnAlterar) {
            adicionarEventoMoura(this.btnAlterar.Click, this.OnClickAlterar, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnClickCancelar, this);
        }
        if (this.Grid && this.Grid.btnAdiconar) {
            adicionarEventoMoura(this.Grid.AdicionandoItem, this.AdicionarItem, this);
            adicionarEventoMoura(this.Grid.Grid.CellPrepared, this.OnCellPrepared, this);
            adicionarEventoMoura(this.Grid.Grid.ClickBotaoLinha, this.OnClicouBotaoLinhaProduto, this);
        }
        if (this.dlgLote) {
            adicionarEventoMoura(this.dlgLote.InformouLote, this.OnInformouLoteProduto, this);
        }
        if (this.grdSubDesag) {
            adicionarEventoMoura(this.grdSubDesag.RowValidating, this.OnEditouItemProduto, this);
        }
    };
    M_SaiEst.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.GetVisibilidadeSugestao();
        this.btnTransferencia.Visible = false;
        if (!this.GetScope().Codigo) {
            this.GetScope().Codigo = $.proxy(this.ProcurouMovimento, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Codigo; }, this.GetScope().Codigo);
        }
    };
    M_SaiEst.prototype.GetVisibilidadeSugestao = function () {
        var visibilidade = false; //ValoresSismoura.ConfiguracoesRetaguarda.Informar_Pedido_Saida;
        this.txtSugestao.txtProcura.Visible = visibilidade;
        this.txtSugestao.lstItens.Visible = visibilidade;
        this.txtSugestao.btnAdicionar.Visible = visibilidade;
        this.txtSugestao.btnRemover.Visible = visibilidade;
        this.txtSugestao.btnLimpar.Visible = visibilidade;
        this.txtSugestao.txtProcura.LabelControl.hidden = visibilidade;
    };
    M_SaiEst.prototype.Limpar = function () {
        _super.prototype.Limpar.call(this);
        this.LimparCampos();
    };
    M_SaiEst.prototype.LimparCampos = function () {
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.RefreshAngular();
        this.PreencherComboDeposito();
        if (this.cboDeposito.GetItemCount() > 0) {
            this.cboDeposito.SetSelectedIndex(0);
            this.EntityTela.Deposito = CNum(this.cboDeposito.GetValue());
        }
        else {
            this.cboDeposito.LimparSelecao();
            this.EntityTela.Deposito = 0;
        }
        this.txtSugestao.Limpar();
        this.LimparCamposItens();
        this.Itens = [];
    };
    M_SaiEst.prototype.LimparCamposItens = function () {
        this.Item = {};
        this.Item.Codigo = 0;
        this.Item.Qtde = 0;
        this.Item.Motivo_Codigo = 0;
        this.Item.Documento = 0;
        this.Item.Obs = "";
        this.lblEstoque.Text = "0,00";
        this.lblCaixa.Text = "0,00";
        this.lblEstoqueAnterior.Text = "0,00";
        this.lblMediaPrecoVenda.Text = "0,00";
        this.lblPrecoCusto.Text = "0,00";
        this.RefreshAngular();
    };
    M_SaiEst.prototype.ProcurouMovimento = function () {
        if (this.EntityTela.Tipo != 3 && this.EntityTela.Tipo) {
            MostrarAlerta("Essa movimentação não é uma saida!");
            this.Limpar();
            return;
        }
    };
    M_SaiEst.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        if (Entity.Sugestoes) {
            for (var x = 0; x < Entity.Sugestoes.length; x++) {
                this.txtSugestao.AdicionarItem(Entity.Sugestoes[x].Id, Entity.Sugestoes[x].Id.toString());
            }
        }
        this.cboEmpresa.SetValue(Entity.Loja_Destino);
        this.PreencherComboDeposito();
        this.cboDeposito.SetValue(Entity.Deposito);
        this.CarregarItensMovimentacao(Entity.Codigo);
        this.criarEntidadePersonalizados(Entity);
        if (Entity.Itens) {
            for (var x = 0; x < Entity.Itens.length; x++) {
                this.Itens[x].MovEntradaDesag = Entity.Itens[x].MovEntradaDesag;
            }
        }
    };
    M_SaiEst.prototype.atualizarLabelEstoque = function () {
        var estoque;
        var resposta;
        var parametros;
        parametros = {
            produto: this.txtProduto.GetText(),
            deposito: this.cboDeposito.GetValue()
        };
        try {
            estoque = this.ExecutarFuncaoServerSideSynch("GetProdutoInfo", parametros);
            this.lblEstoque.Text = estoque.Estoque.Format(2);
            this.lblCaixa.Text = estoque.EstoqueCaixa.Format(2);
            this.lblEstoqueAnterior.Text = estoque.EstoqueAnterior.Format(2);
            this.lblPrecoCusto.Text = estoque.PrecoCusto.Format(2);
            this.lblMediaPrecoVenda.Text = estoque.PrecoVenda.Format(2);
            this.lblUnidade.Text = estoque.Unidade;
        }
        catch (ex) {
        }
    };
    M_SaiEst.prototype.OnTextBoxProdutoProcurou = function () {
        this.atualizarLabelEstoque();
    };
    M_SaiEst.prototype.OnComboDepositoSelectedIndexChanged = function (s, e) {
        this.atualizarLabelEstoque();
    };
    M_SaiEst.prototype.OnComboEmpresaSelectedIndexChanged = function (s, e) {
        this.PreencherComboDeposito();
    };
    M_SaiEst.prototype.PreencherComboDeposito = function () {
        var depositos;
        var parametros;
        parametros = {
            empresa: this.cboEmpresa.GetValue().toString()
        };
        depositos = this.ExecutarFuncaoServerSideSynch("GetDepositos", parametros);
        this.cboDeposito.ClearItems();
        for (var x = 0; x < depositos.length; x++) {
            this.cboDeposito.AddItem(depositos[x].Descricao, depositos[x].Codigo, "");
        }
    };
    M_SaiEst.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Loja_Destino = CNum(this.cboEmpresa.GetValue());
        Entity.Itens = [];
        Entity.Data = new Date();
        this.criarEntidadePersonalizados(Entity);
        this.dlgLote.Limpar();
        this.verifica = false;
        this.itemClicado = {};
    };
    M_SaiEst.prototype.criarEntidadePersonalizados = function (Entidade) {
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
    M_SaiEst.prototype.IsProdutoLote = function (produto) {
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
    M_SaiEst.prototype.CarregarItensMovimentacao = function (codigo) {
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
    M_SaiEst.prototype.ObterDadosEspecificosProduto = function (codProduto) {
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
    M_SaiEst.prototype.VerificaCamposItem = function () {
        var mensagem = "Preencha o campo corretamente: ";
        var retorno = true;
        try {
            if (CNum(this.Item.Produto_Codigo) <= 0) {
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
            else {
                var mov = this.ObterMovDescPorCodigo(CNum(this.Item.Motivo_Codigo));
                if (mov) {
                    if (mov.Solicitar_Documento && CNum(this.Item.Documento) <= 0) {
                        MostrarAlerta("O motivo selecionado requer um documento");
                        retorno = false;
                    }
                    if (mov.Solicitar_Obs && retorno && String.IsNullOrWhiteSpace(this.Item.Obs)) {
                        MostrarAlerta("O motivo selecionado requer uma observação");
                        retorno = false;
                    }
                }
            }
            if (!ValoresSismoura.ConfiguracoesRetaguarda.Saida_Sem_Estoque && retorno) {
                if (this.Item.Qtde > CNum(this.lblEstoque.Text)) {
                    MostrarAlerta("O sistema está configurado para não permitir que o estoque fique negativo.");
                    retorno = false;
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return retorno;
    };
    M_SaiEst.prototype.VerificaObrigatoriedadeCampos = function (motivo) {
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
    M_SaiEst.prototype.OnComboMotivoSelectedIndexChanged = function (s, e) {
        this.VerificaObrigatoriedadeCampos(CNum(this.cboMotivo.GetValue()));
    };
    M_SaiEst.prototype.ObterMovDescPorCodigo = function (motivo) {
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
    M_SaiEst.prototype.SomarQtdeProduto = function () {
        var _this = this;
        var index;
        index = this.Itens.filter(function (item) { return item.Produto_Codigo == _this.Item.Produto_Codigo; })[0].Contador;
        this.Itens[index - 1].Qtde += this.Item.Qtde;
        this.LimparCamposItens();
        this.verifica = false;
        this.Grid.Grid.Refresh();
    };
    M_SaiEst.prototype.AlterarQtdeProduto = function () {
        var _this = this;
        var index;
        index = this.Itens.filter(function (item) { return item.Produto_Codigo == _this.Item.Produto_Codigo; })[0].Contador;
        this.Itens[index - 1].Qtde = this.Item.Qtde;
        this.LimparCamposItens();
        this.verifica = false;
        this.Grid.Grid.Refresh();
    };
    M_SaiEst.prototype.OnClickSomar = function (s, e) {
        this.SomarQtdeProduto();
        this.dlgProdRepetido.Hide();
    };
    M_SaiEst.prototype.OnClickAlterar = function (s, e) {
        this.AlterarQtdeProduto();
        this.dlgProdRepetido.Hide();
    };
    M_SaiEst.prototype.OnClickCancelar = function (s, e) {
        this.dlgProdRepetido.Hide();
    };
    M_SaiEst.prototype.VerificaProdutoRepetido = function () {
        var retorno = false;
        if (this.Itens.FindAll("Produto_Codigo", this.Item.Produto_Codigo).length > 0) {
            if (ValoresSismoura.ConfiguracoesRetaguarda.Produto_Repetido_Saida == "PERGUNTAR") {
                this.dlgProdRepetido.Show();
                retorno = true;
            }
            else if (ValoresSismoura.ConfiguracoesRetaguarda.Produto_Repetido_Saida == "SOMAR") {
                this.SomarQtdeProduto();
                retorno = true;
            }
            else if (ValoresSismoura.ConfiguracoesRetaguarda.Produto_Repetido_Saida == "ALTERAR") {
                this.AlterarQtdeProduto();
                retorno = true;
            }
        }
        return retorno;
    };
    M_SaiEst.prototype.AdicionarItem = function (s, e) {
        if (this.VerificaCamposItem()) {
            if (this.IsProdutoLote(this.Item.Produto_Codigo) && !this.verifica) {
                this.dlgLote.Limpar();
                this.AbrirModalLote();
                e.cancelar = true;
                return;
            }
            else {
                if (this.VerificaProdutoRepetido()) {
                    e.cancelar = true;
                    return;
                }
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
                    //e.item.Produto_CodigoBarra = produto.Produto_CodigoBarras;
                    e.item.Referencia = produto.Referencia;
                    e.item.Tamanho = produto.Tamanho;
                    e.item.Unidade = produto.Unidade;
                    this.CarregarListaLoteProduto();
                    e.item.Lotes = this.listaLote;
                    e.item.Lote = this.GetLotesExtenso();
                    e.item.Produto_CodigoBarras = produto.Produto_CodigoBarras;
                }
                else {
                    e.cancelar = true;
                    MostrarAlerta("Preencha o campo corretamente: Produto");
                    return;
                }
                this.motivo = this.cboMotivo.GetText();
                this.LimparCamposItens();
            }
        }
        else {
            e.cancelar = true;
        }
        this.verifica = false;
    };
    M_SaiEst.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.Itens.length <= 0) {
            MostrarAlerta("Informe ao menos um produto!");
            return false;
        }
        this.EntityTela.Hora = ConvertToDate(new Date()).toTimeString().slice(0, 8);
        this.EntityTela.Loja_Destino = CNum(this.cboEmpresa.GetValue());
        this.EntityTela.Tipo = 3;
        this.EntityTela.Aprovado = true;
        this.criarEntidadePersonalizados(this.EntityTela);
        if (this.EntityTela.Usuario <= 0) {
            this.EntityTela.Usuario = ValoresSismoura.UsuarioLogado;
        }
        this.PreencherSugestoes(this.EntityTela);
        this.PreencherItens(this.EntityTela);
        return true;
    };
    M_SaiEst.prototype.PreencherItens = function (Entity) {
        var aux;
        var auxLote;
        this.EntityTela.Itens = [];
        for (var x = 0; x < this.Itens.length; x++) {
            aux = {};
            aux.E_S = "S";
            aux.Movimentacao = Entity.Codigo;
            aux.Produto = this.Itens[x].Produto_Codigo;
            aux.Qtde = this.Itens[x].Qtde;
            aux.Motivo = this.Itens[x].Motivo_Codigo;
            aux.Documento = this.Itens[x].Documento;
            aux.Obs = this.Itens[x].Obs;
            aux.Preco_Custo = this.Itens[x].Preco_Custo;
            aux.Preco_Venda = this.Itens[x].Preco_Venda;
            //aux.Codigo_Barra = this.Itens[x].Produto_CodigoBarras
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
            aux.MovEntradaDesag = this.Itens[x].MovEntradaDesag;
            Entity.Itens.push(aux);
        }
    };
    M_SaiEst.prototype.PreencherSugestoes = function (Entity) {
        var values;
        var aux;
        values = this.txtSugestao.SourceLista.map(function (sugestoes) { return sugestoes.Value; });
        var _loop_1 = function (x) {
            aux = Entity.Sugestoes.filter(function (item) { return item.Sugestao == values[x]; })[0] || null;
            if (!aux) {
                aux = {};
                aux.Movimentacao = Entity.Codigo;
                aux.Sugestao = values[x];
            }
            Entity.Sugestoes.push(aux);
        };
        for (var x = 0; x < values.length; x++) {
            _loop_1(x);
        }
    };
    M_SaiEst.prototype.OnClickTicket = function (s, e) {
        this.ImprimirTicket();
    };
    M_SaiEst.prototype.ImprimirTicket = function () {
        var _this = this;
        var parametros;
        if (this.Itens.length <= 0) {
            MostrarAlerta("Não há nada para imprimir!");
            return;
        }
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
    M_SaiEst.prototype.AbrirModalLote = function () {
        var produtos = [];
        var lote = {};
        lote.Produto = CNum(this.Item.Produto_Codigo);
        lote.Deposito_Codigo = CNum(this.EntityTela.Deposito);
        lote.Deposito_Descricao = this.cboDeposito.GetText();
        lote.Quantidade = this.Item.Qtde;
        produtos.push(lote);
        this.dlgLote.Mostrar(produtos, MouraModalLoteTipoJS.Saida, this.LotesInformados, false, 0);
    };
    M_SaiEst.prototype.OnInformouLoteProduto = function () {
        this.verifica = true;
        this.Grid.btnAdiconar.DoClick();
        this.dlgLote.Limpar();
        this.LimparCamposItens();
    };
    M_SaiEst.prototype.CarregarListaLoteProduto = function () {
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
    M_SaiEst.prototype.GetLotesExtenso = function () {
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
    M_SaiEst.prototype.OnCancelarClick = function (s, e) {
        this.dlgTransferencia.Hide();
    };
    M_SaiEst.prototype.OnClickTransferencia = function (s, e) {
        this.dlgTransferencia.Show();
        var parametros;
        try {
            parametros = {
                empresa: this.cboEmpresa.GetValue(),
                movimentacao: this.EntityTela.Codigo
            };
            var deposito = this.ExecutarFuncaoServerSideSynch("ObtemDadosComboDepositoTransferencia", parametros);
            this.cboDepositoTransferencia.ClearItems();
            for (var x = 0; x < deposito.length; x++) {
                this.cboDepositoTransferencia.AddItem(deposito[x].Descricao, deposito[x].Codigo, null);
            }
            this.cboDepositoTransferencia.SetSelectedIndex(-1);
            this.cboMotivoTransferencia.SetSelectedIndex(-1);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    M_SaiEst.prototype.OnClickOkTransferencia = function (s, e) {
        var _this = this;
        if (this.EntityTela.Codigo <= 0) {
            MostrarAlerta("Informe uma movimentação válida");
            return;
        }
        var parametros;
        try {
            parametros = {
                movimentacao: this.EntityTela.Codigo,
                depositoTransferencia: CNum(this.cboDepositoTransferencia.GetValue()),
                motivoTransferencia: CNum(this.cboMotivoTransferencia.GetValue()),
                nomeTela: ValoresSismoura.NomeTela
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("Transferir", parametros, function (d) {
                fecharEspera();
                var mensagem = GetRetornoAJAX(d);
                if (mensagem != "") {
                    _this.dlgTransferencia.Hide();
                    MostrarMensagem(mensagem);
                }
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
    M_SaiEst.prototype.OnClicouBotaoLinhaProduto = function (s, e) {
        if (e.commandName === "desagregacao") {
            var item = e.data;
            this.itemClicado = item;
            if (!this.CarregarDesagregacao(item)) {
                MostrarAlerta("Desagregação cadastrada com tipo inválido, acesse a tela Cadastro de Desagregação para corrigir esta situação", 20000);
                return;
            }
            this.mdValoresDesag.Show();
        }
    };
    //Desabilitar o botão Desagregação da grid
    M_SaiEst.prototype.OnCellPrepared = function (s, e) {
        if (e.data) {
            if (e.column["caption"] == "Desagregação") {
                if (!this.VerificarDesagregacao(e.row.data['Produto_Codigo'])) {
                    e.cellElement.find("input").attr("disabled", "false");
                }
            }
        }
    };
    M_SaiEst.prototype.OnCancelarDesagClick = function () {
        this.mdValoresDesag.Hide();
    };
    M_SaiEst.prototype.OnClickConcluirDesag = function () {
        if (this.OnVerificarSomaQuantidade(this.itemClicado)) {
            var index = this.Itens.indexOf(this.itemClicado);
            if (index >= 0) {
                this.Itens[index].MovEntradaDesag = this.grdSubDesag.DataSource;
                this.RefreshAngular();
            }
            this.itemClicado = {};
            this.mdValoresDesag.Hide();
        }
    };
    M_SaiEst.prototype.VerificarDesagregacao = function (Produto_Codigo) {
        var retorno;
        var parametros = {
            codProduto: Produto_Codigo
        };
        retorno = this.ExecutarFuncaoServerSideSynch("VerificaRegistroDesagregados", parametros);
        if (retorno) {
            return retorno;
        }
    };
    M_SaiEst.prototype.CarregarDesagregacao = function (item) {
        try {
            var retorno;
            var verificacao = false;
            retorno = this.VerificarDesagregacao(item.Produto_Codigo);
            if (retorno && retorno.Realizar_Desagregacao.CNum() == 2 /* SaidaEstoque */) {
                if (item.MovEntradaDesag && item.MovEntradaDesag.length > 0) {
                    for (var x = 0; x < item.MovEntradaDesag.length; x++) {
                        var produto = this.ObterDadosProduto(item.MovEntradaDesag[x].Subproduto);
                        if (produto) {
                            item.MovEntradaDesag[x].Descricao_Produto = produto.Nome;
                        }
                        if (item.MovEntradaDesag[x].Percentual_Peso_Ajustado == 0) {
                            item.MovEntradaDesag[x].Percentual_Peso_Ajustado = null;
                            item.MovEntradaDesag[x].Media_Ponderada = null;
                            item.MovEntradaDesag[x].Custo_Total = null;
                            item.MovEntradaDesag[x].Custo_Unitario = null;
                        }
                    }
                    this.grdSubDesag.PreencherGrid(item.MovEntradaDesag);
                    this.lblTotalQtd.Text = item.MovEntradaDesag.Sum("Quantidade").Format(4);
                    this.lblTotalPeso.Text = item.MovEntradaDesag.Sum("Percentual_Peso_Ajustado").Format(2);
                    this.lblTotalMedia.Text = item.MovEntradaDesag.Sum("Media_Ponderada").Format(2);
                    this.lblTotalCusto.Text = item.MovEntradaDesag.Sum("Custo_Total").Format(2);
                    verificacao = true;
                }
                else {
                    verificacao = this.CalcularSubprodutos(item);
                }
            }
            return verificacao;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    M_SaiEst.prototype.CalcularSubprodutos = function (item) {
        try {
            var parametros = {
                codProduto: item.Produto_Codigo,
                quantidade: item.Qtde,
                precoCusto: item.Preco_Custo
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetCalcularSubProdutosProduto", parametros);
            if (retorno && retorno.length > 0) {
                this.grdSubDesag.PreencherGrid(retorno);
                this.lblTotalQtd.Text = retorno.Sum("Quantidade").Format(4);
                this.lblTotalPeso.Text = retorno.Sum("Percentual_Peso_Ajustado").Format(2);
                this.lblTotalMedia.Text = retorno.Sum("Media_Ponderada").Format(2);
                this.lblTotalCusto.Text = retorno.Sum("Custo_Total").Format(2);
            }
            else {
                return false;
            }
            return true;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    M_SaiEst.prototype.OnEditouItemProduto = function (s, e) {
        var valorAtual = this.grdSubDesag.DataSource.Sum("Quantidade");
        this.lblTotalQtd.Text = ((this.lblTotalQtd.Text.CNum() - e.oldData.Quantidade) + e.newData.Quantidade).Format(4);
        e.key.Custo_Unitario = e.key.Custo_Total / e.newData.Quantidade;
        this.grdSubDesag.Refresh();
    };
    M_SaiEst.prototype.OnVerificarSomaQuantidade = function (produto) {
        if (this.lblTotalQtd.Text.CNum() != produto.Qtde) {
            MostrarAlerta("A soma da Quantidade da grade deve ser igual a Quantidade informada na tela", 20000);
            return false;
        }
        return true;
    };
    return M_SaiEst;
}(MouraPageCadastroAngular));
var m_SaiEst = new M_SaiEst();
//# sourceMappingURL=M_SaiEst.js.map