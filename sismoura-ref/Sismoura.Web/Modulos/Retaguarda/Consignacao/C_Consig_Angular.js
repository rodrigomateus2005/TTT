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
var C_Consig_Angular = /** @class */ (function (_super) {
    __extends(C_Consig_Angular, _super);
    function C_Consig_Angular() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.verifica = true;
        _this.somarQtde = false;
        _this.gravou = false;
        return _this;
    }
    Object.defineProperty(C_Consig_Angular.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "gridImportar", {
        get: function () {
            return window['gridImportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "txtQuantidade", {
        get: function () {
            return window['txtQuantidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "lblConsig", {
        get: function () {
            return window['lblConsig_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "rblLote", {
        get: function () {
            return window['rblLote_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "cboLote", {
        get: function () {
            return window['cboLote_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "txtCodigoConsig", {
        get: function () {
            return window['txtCodigoConsig_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "txtAjudante", {
        get: function () {
            return window['txtAjudante_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "cboProdImport", {
        get: function () {
            return window['cboProdImport_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "chkImportarDadosCliente", {
        get: function () {
            return window['chkImportarDadosCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "txtDataCadastro", {
        get: function () {
            return window['txtDataCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "txtDataVencimento", {
        get: function () {
            return window['txtDataVencimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "txtVendedor", {
        get: function () {
            return window['txtVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "cboDeposito", {
        get: function () {
            return window['cboDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "cboTipoConsig", {
        get: function () {
            return window['cboTipoConsig_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "lblValidade", {
        get: function () {
            return window['lblValidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "mdImportar", {
        get: function () {
            return window['mdImportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "btnImportarConsig", {
        get: function () {
            return window['btnImportarConsig_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "btnImprimirCupom", {
        get: function () {
            return window['btnImprimirCupom_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "btnImprimirMeiaFolha", {
        get: function () {
            return window['btnImprimirMeiaFolha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "btnImportar", {
        get: function () {
            return window['btnImportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Consig_Angular.prototype, "Itens", {
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
    Object.defineProperty(C_Consig_Angular.prototype, "ItensConsignacao", {
        get: function () {
            if (!this.GetScope()['ItensConsignacao']) {
                this.GetScope()['ItensConsignacao'] = {};
            }
            return this.GetScope()['ItensConsignacao'];
        },
        set: function (value) {
            this.GetScope()['ItensConsignacao'] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_Consig_Angular.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        setTimeout(function () { return _this.LimparCampoProduto(); }, 100);
    };
    C_Consig_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid && this.grid.btnAdiconar && this.grid.btnNovo) {
            adicionarEventoMoura(this.grid.ItemExcluido, this.ExcluiuItem, this);
            adicionarEventoMoura(this.grid.ExcluindoItem, this.OnAntesExcluir, this);
            adicionarEventoMoura(this.grid.Validando, this.AdicionandoItem, this);
            adicionarEventoMoura(this.grid.LimpouItem, this.OnClicouBotaoNovoProduto, this);
        }
        if (this.gridImportar) {
            adicionarEventoMoura(this.gridImportar.SelecionouLinha, this.gridImportar_SelecionouLinha, this);
        }
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Procurou, this.OnBuscouProduto, this);
        }
        if (this.cboLote) {
            adicionarEventoDevExpress(this.cboLote.Combo.SelectedIndexChanged, this.MudouIndexCboLote, this);
        }
        if (this.rblLote) {
            adicionarEventoMoura(this.rblLote.SelectionChanged, this.MudouIndexRblLote, this);
        }
        if (this.cboDeposito) {
            adicionarEventoDevExpress(this.cboDeposito.Combo.SelectedIndexChanged, this.MudouIndexCboDeposito, this);
        }
        if (this.txtCliente) {
            adicionarEventoMoura(this.txtCliente.Procurou, this.OnBuscouCliente, this);
        }
        if (this.btnImportarConsig) {
            adicionarEventoMoura(this.btnImportarConsig.Click, this.OnClicouImportConsig, this);
        }
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnClicouGerar, this);
        }
        if (this.btnImprimirCupom) {
            adicionarEventoMoura(this.btnImprimirCupom.Click, this.OnClicouImprimir, this);
        }
        if (this.btnImprimirMeiaFolha) {
            adicionarEventoMoura(this.btnImprimirMeiaFolha.Click, this.OnClicouImprimirMeiaFolha, this);
        }
        if (this.btnImportar) {
            adicionarEventoMoura(this.btnImportar.Click, this.OnClicouImportar, this);
        }
    };
    C_Consig_Angular.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.gravou = false;
        var parametros = {};
        this.lblConsig.Text = "0";
        Entity.Tipo = 1;
        Entity.Data_Cadastro = this.DataServidor();
        Entity.Data_Vencimento = this.DataServidor();
        //Entity.ItensConsignacao = [];
        this.grid.Grid.PreencherGrid(null);
        try {
            this.lblConsig.Text = this.ExecutarFuncaoServerSideSynch("GetUltimaConsignacao", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
        this.LimparCampoProduto();
        this.LimparModal();
    };
    C_Consig_Angular.prototype.LimparCampoProduto = function () {
        this.ItensConsignacao = {};
        this.ItensConsignacao.Qtde_Consignada = 1;
        this.ItensConsignacao.Documento = "";
        this.ItensConsignacao.Preco_Unitario = 0;
        this.cboDeposito.SetSelectedIndex(0);
        this.ItensConsignacao.Deposito = this.cboDeposito.GetValue();
        this.rblLote.SetValue("N");
        this.rblLote.Visible = false;
        this.cboLote.Visible = false;
        this.RefreshAngular();
    };
    C_Consig_Angular.prototype.LimparModal = function () {
        this.txtCodigoConsig.Limpar();
        this.txtPeriodo.IniciarDataAtual();
        this.gridImportar.PreencherGrid(null);
        this.cboProdImport.SetValue(0);
        this.chkImportarDadosCliente.Checked = false;
        this.RefreshAngular();
    };
    C_Consig_Angular.prototype.OnDepoisClickNovo = function () {
        _super.prototype.OnDepoisClickNovo.call(this);
        return true;
    };
    C_Consig_Angular.prototype.PreencherGrade = function (codigo) {
        var parametros;
        var numeros = [];
        if (codigo) {
            try {
                parametros = {
                    codigo: codigo,
                    produto: this.cboProdImport.GetValue()
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
                this.grid.Grid.PreencherGrid(retorno);
                this.Itens = retorno;
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    C_Consig_Angular.prototype.ValidarVendedorAjudante = function () {
        if (this.grid.Grid.VisibleRowsCount() > 0 && ValoresSismoura.ConfiguracoesRetaguarda.Consignacao_Permitir_Vendedor) {
            var dados = this.grid.Grid.DataSource;
            var mensagem = "";
            for (var x = 0; x < dados.length; x++) {
                if (dados[x].Vendedor != CNum(this.ItensConsignacao.Vendedor)) {
                    mensagem = "Esta consignação já pertence ao Vendedor " + dados[x].Vendedor;
                }
                else if (dados[x].Ajudante != CNum(this.ItensConsignacao.Ajudante)) {
                    mensagem = "Esta consignação já pertence ao Ajudante " + dados[x].Ajudante;
                }
                if (mensagem != "") {
                    MostrarAlerta(mensagem);
                    return false;
                }
            }
        }
        return true;
    };
    C_Consig_Angular.prototype.ValidarProduto = function () {
        var validador = true;
        var mensagem = "Preencha o campo corretamente: ";
        if (CNum(this.ItensConsignacao.Produto) <= 0) {
            mensagem += "Produto";
            validador = false;
        }
        else if (CNum(this.txtQuantidade.GetText()) <= 0) {
            mensagem += "Quantidade";
            validador = false;
        }
        else if (CNum(this.ItensConsignacao.Preco_Unitario) <= 0) {
            mensagem += "Valor Unitario";
            validador = false;
        }
        else if (ValoresSismoura.ConfiguracoesRetaguarda.Cad_Consig_Campos_Obrigatorios) {
            if (CNum(this.ItensConsignacao.Ajudante) <= 0) {
                mensagem += "Ajudante";
                validador = false;
            }
        }
        else if (CNum(this.ItensConsignacao.Vendedor) <= 0) {
            mensagem += "Vendedor";
            validador = false;
        }
        else if (CNum(this.ItensConsignacao.Produto) > 0) {
            if (this.IsControlado(CNum(this.ItensConsignacao.Produto))) {
                if (this.cboLote.GetSelectedIndex() == -1) {
                    mensagem += "Lote";
                    validador = false;
                }
            }
            else if (this.VerificaDeposito(CNum(this.ItensConsignacao.Deposito), CNum(this.ItensConsignacao.Produto), this.cboLote.GetText())) {
                mensagem = "Não existe lote cadastrado do produto " + this.txtProduto.LabelResultado.textContent + ", com o depósito " + this.cboDeposito.GetText();
                validador = false;
            }
        }
        //Esta configuração não permite que um produto seja consignado se não houver quantidade do mesmo em estoque
        if (ValoresSismoura.ConfiguracoesRetaguarda.Consignacao && validador) {
            if (CNum(this.ItensConsignacao.Estoque) <= 0) {
                this.LimparCampoProduto();
                mensagem = "Falta de produto em estoque, dê entrada no produto";
                validador = false;
            }
            else if (CNum(this.ItensConsignacao.Estoque) < CNum(this.ItensConsignacao.Qtde_Consignada)) {
                mensagem = "Quantidade maior que estoque";
                validador = false;
            }
        }
        if (!validador) {
            MostrarAlerta(mensagem);
        }
        return validador;
    };
    C_Consig_Angular.prototype.ValidarCliente = function () {
        var parametros;
        var bloquear_consignacao;
        try {
            parametros = {
                codCliente: this.EntityTela.Cliente
            };
            bloquear_consignacao = this.ExecutarFuncaoServerSideSynch("ValidarCliente", parametros);
            if (bloquear_consignacao) {
                MostrarAlerta("Não é possível fazer consignações para este cliente. Ele está marcado como a opção 'Bloquear Consignação' no cadastro de clientes.");
                return false;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return true;
    };
    C_Consig_Angular.prototype.VerificaConsignacaoExistente = function () {
        if (!ValoresSismoura.ConfiguracoesRetaguarda.Alterar_Consignacao_Existente && !this.gravou) {
            MostrarAlerta("A consignação não pode ser alterada.");
            return false;
        }
        return true;
    };
    C_Consig_Angular.prototype.ValidarAlteracaoConsignacao = function () {
        var retorno = true;
        if (!ValoresSismoura.ConfiguracoesRetaguarda.Alterar_Consignacao_Existente && this.EntityTela.Codigo > 0 && !this.gravou) {
            retorno = false;
            MostrarAlerta("A consignação não pode ser alterada.");
        }
        return retorno;
    };
    C_Consig_Angular.prototype.ValidaTelaAbertaUsuario = function () {
        var parametros;
        try {
            parametros = {
                codigo: this.EntityTela.Codigo,
                tela: ValoresSismoura.NomeTela
            };
            this.ExecutarFuncaoServerSideSynch("ValidaTelaAbertaUsuario", parametros);
        }
        catch (ex) {
            this.EntityTela.Cliente = 0;
            LogarException(ex);
        }
    };
    C_Consig_Angular.prototype.ValidarExclusaoGrade = function (codigo) {
        var dados = this.grid.Grid.DataSource;
        var mensagem;
        var retorno = true;
        if (dados) {
            var s = dados.FirstOrDefault("Contador", codigo);
            if (s) {
                if (s.Qtde_Vendida > 0) {
                    mensagem = "vendido";
                }
                else {
                    mensagem = "devolvido";
                }
                MostrarAlerta("Não será possível remover o item, pois o produto já foi " + mensagem);
                retorno = false;
            }
        }
        return retorno;
    };
    C_Consig_Angular.prototype.ValidarDocumentoRepetido = function () {
        var retorno = true;
        var parametros;
        if (this.EntityTela.Cliente > 0) {
            if (ValoresSismoura.ConfiguracoesRetaguarda.Gravar_Consig_documento_Diferente) {
                try {
                    parametros = {
                        documento: this.ItensConsignacao.Documento,
                        codigo: this.EntityTela.Codigo
                    };
                    var item = this.ExecutarFuncaoServerSideSynch("GetByConsignacaoDocumento", parametros);
                    if (item) {
                        retorno = false;
                        MostrarAlerta("O documento informado já foi utilizado na consignação " + item.Consignacao);
                    }
                }
                catch (ex) {
                    LogarException(ex);
                }
            }
        }
        return retorno;
    };
    C_Consig_Angular.prototype.ValidarConsignacaoFinalizada = function () {
        var retorno = true;
        var parametros;
        if (this.EntityTela.Codigo > 0) {
            try {
                parametros = {
                    codigo: this.EntityTela.Codigo
                };
                var item = this.ExecutarFuncaoServerSideSynch("RetornaConsigQtdeMaiorZero", parametros);
                if (!item) {
                    retorno = false;
                    MostrarAlerta("A consignação " + this.EntityTela.Codigo + " está finalizada!</br>Para altera-la cancele a venda ou a devolução de algum item.");
                }
            }
            catch (ex) {
                LogarException(ex);
            }
        }
        return retorno;
    };
    C_Consig_Angular.prototype.ValidarPreencherEntidade = function () {
        var retorno = true;
        var parametros;
        try {
            parametros = {
                codCliente: this.EntityTela.Cliente,
                valorUnitario: this.ItensConsignacao.Preco_Unitario,
                quantidade: this.ItensConsignacao.Qtde_Consignada
            };
            var d = this.ExecutarFuncaoServerSideSynch("ValidarPreencherEntidade", parametros);
            if (d != "") {
                MostrarAlerta(d);
                retorno = false;
            }
            else if (this.EntityTela.Data_Vencimento < this.EntityTela.Data_Cadastro) {
                MostrarAlerta("A data de vencimento não pode ser menor que a data de cadastro.");
                retorno = false;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return retorno;
    };
    C_Consig_Angular.prototype.VerificaValidadeLote = function () {
        var parametros;
        try {
            parametros = {
                lote: this.cboLote.GetValue(),
                codigo: this.EntityTela.Codigo,
                deposito: this.cboDeposito.GetValue()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificaValidadeLote", parametros);
            if (retorno) {
                if (retorno.Id != retorno.IdSelecionado) {
                    MsgBoxJS("O Lote: " + retorno.loteVerificado + " tem a data de vencimento menor que a data do lote selecionado. Deseja substituí-lo pelo lote selecionado?", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, function (result) {
                        if (result.Resultado == MsgBoxResult.Yes && result.Argument == "alterar_lote") {
                            var codigo = result.Argument;
                        }
                    }, "alterar_lote");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Consig_Angular.prototype.ValidarCamposModal = function () {
        var retorno = true;
        if (!this.txtPeriodo.IsValido() || !ValidarPeriodo(this.txtPeriodo.textBoxCalendarioInicio.GetDate(), this.txtPeriodo.textBoxCalendarioFim.GetDate())) {
            MostrarAlerta("Preencha o campo corretamente: Período");
            retorno = false;
        }
        return retorno;
    };
    C_Consig_Angular.prototype.IsControlado = function (produto) {
        var parametros;
        var retorno = false;
        try {
            parametros = {
                produto: produto
            };
            retorno = this.ExecutarFuncaoServerSideSynch("IsControlado", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
        return retorno;
    };
    C_Consig_Angular.prototype.VerificaDeposito = function (deposito, produto, lote) {
        var parametros;
        var retorno = false;
        try {
            parametros = {
                deposito: deposito,
                produto: produto,
                lote: lote
            };
            retorno = this.ExecutarFuncaoServerSideSynch("VerificaDeposito", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
        return retorno;
    };
    C_Consig_Angular.prototype.OnAntesExcluir = function (s, e) {
        this.gravou = false;
        if (e.item.Contador) {
            if (!this.ValidarAlteracaoConsignacao()) {
                e.cancelar = true;
                return;
            }
            if (!this.ValidarExclusaoGrade(e.item.Contador)) {
                e.cancelar = true;
                return;
            }
        }
    };
    C_Consig_Angular.prototype.ExcluiuItem = function (s, e) {
        MostrarMensagem("Registro excluído com sucesso!");
    };
    C_Consig_Angular.prototype.AdicionandoItem = function (s, e) {
        var _this = this;
        var dados = this.Itens;
        var aux;
        this.gravou = false;
        if (!this.ValidarAlteracaoConsignacao()) {
            e.cancelar = true;
            return;
        }
        if (!this.ValidarVendedorAjudante()) {
            e.cancelar = true;
            return;
        }
        if (!this.ValidarProduto()) {
            e.cancelar = true;
            return;
        }
        if (!this.ValidarDocumentoRepetido()) {
            e.cancelar = true;
            return;
        }
        var item = dados.filter(function (item) { return item.Produto == CNum(_this.ItensConsignacao.Produto) && item.Documento === _this.ItensConsignacao.Documento; })[0] || null;
        if (this.verifica) {
            if (dados.length > 0) {
                if (item) {
                    if (item.Qtde_Vendida == 0 && item.Qtde_Devolvida == 0) {
                        this.posicao = item.Contador;
                        MsgBoxJS("Produto já existente na grade. Deseja somar a quantidade?", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, function (result) {
                            if (result.Resultado == MsgBoxResult.Yes && result.Argument == "somar") {
                                _this.verifica = false;
                                _this.somarQtde = true;
                                _this.AdicionandoItem(s, e);
                                return;
                            }
                            else if (result.Resultado == MsgBoxResult.No && result.Argument == "somar") {
                                _this.verifica = false;
                                _this.somarQtde = false;
                                _this.AdicionandoItem(s, e);
                                return;
                            }
                        }, "somar");
                        e.cancelar = true;
                        return;
                    }
                }
            }
        }
        if (this.somarQtde) {
            this.Itens[this.posicao - 1].Qtde_Consignada = item.Qtde_Consignada + e.item.Qtde_Consignada;
            //e.item.Qtde_Consignada = this.Itens[this.posicao];
            //e.item.Qtde_Consignada += item.Qtde_Consignada;
            this.grid.AtualizarGrid();
        }
        else {
            if (!e.item.Contador) {
                e.item.Contador = this.Itens.length + 1;
                e.item.CodItem = 0;
                e.item.Consignacao = this.EntityTela.Codigo;
            }
        }
        e.item.NomeProduto = this.txtProduto.LabelResultado.textContent;
        e.item.NomeVendedor = this.txtVendedor.LabelResultado.textContent.GetString();
        e.item.Lote = this.cboLote.GetText();
        e.item.Total = e.item.Preco_Unitario * e.item.Qtde_Consignada;
        e.item.Acrescimo = 0;
        e.item.Desconto = 0;
        e.item.TotalFinal = 0;
        try {
            var parametros = {
                codProduto: CNum(this.ItensConsignacao.Produto)
            };
            var produto = this.ExecutarFuncaoServerSideSynch("ObterProduto", parametros);
            e.item.Referencia = produto.Referencia;
            e.item.CodBarra = produto.Codigo_Barra;
            if (this.cboLote.Visible) {
                parametros = {
                    valor: CNum(this.cboLote.GetValue())
                };
                var estoqueLote = this.ExecutarFuncaoServerSideSynch("ObterEstoqueLote", parametros);
                if (estoqueLote) {
                    e.item.Fornecedor = estoqueLote.Fornecedor;
                }
                else {
                    e.item.Fornecedor = 0;
                }
            }
            else {
                e.item.Fornecedor = 0;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        e.item.Qtde_Vendida = 0;
        e.item.Qtde_Devolvida = 0;
        e.item.Qtde_Restante = 0;
        this.txtProduto.Focus();
        this.verifica = true;
        this.somarQtde = false;
        e.cancelar = false;
        setTimeout(function () { return _this.LimparCampoProduto(); }, 10);
        return;
    };
    C_Consig_Angular.prototype.OnClicouBotaoNovoProduto = function (s, e) {
        this.LimparCampoProduto();
        this.somarQtde = false;
        this.verifica = true;
    };
    C_Consig_Angular.prototype.OnAntesNovo = function () {
        this.Itens = [];
        this.LimparCampoProduto();
        this.somarQtde = false;
        this.verifica = true;
        return true;
    };
    C_Consig_Angular.prototype.OnBuscouProduto = function (s, e) {
        var parametros;
        if (this.ItensConsignacao.Produto) {
            try {
                parametros = {
                    codProduto: CNum(this.ItensConsignacao.Produto)
                };
                var produto = this.ExecutarFuncaoServerSideSynch("ObterProduto", parametros);
                if (produto) {
                    if (produto.Tipo_Produto == 5) {
                        MostrarAlerta("Produto informado é do tipo Consumo Interno! Para que o mesmo possa ser vendido, acesse o cadastro de produto – aba Informações e altere o tipo do produto.");
                        this.ItensConsignacao.Produto = "";
                        this.txtProduto.Focus();
                        return false;
                    }
                    this.ItensConsignacao.Preco_Unitario = produto.Preco_Produto;
                    if (produto.Controlado) {
                        this.cboLote.Visible = true;
                        this.rblLote.Visible = true;
                        this.PreencherLote();
                    }
                    else {
                        this.cboLote.Visible = false;
                        this.rblLote.Visible = false;
                        parametros = {
                            produto: CNum(this.ItensConsignacao.Produto),
                            deposito: this.cboDeposito.GetValue()
                        };
                        this.ItensConsignacao.Estoque = this.ExecutarFuncaoServerSideSynch("RetornaEstoqueProduto", parametros);
                        this.RefreshAngular();
                    }
                }
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    C_Consig_Angular.prototype.PreencherLote = function () {
        this.cboLote.ClearItems();
        var parametros;
        if (this.ItensConsignacao.Produto && this.cboDeposito.GetSelectedIndex() >= 0 && this.rblLote.GetValue() != "") {
            parametros = {
                produto: CNum(this.ItensConsignacao.Produto),
                deposito: this.cboDeposito.GetValue(),
                ordenacao: this.rblLote.GetValue()
            };
            var itens;
            try {
                itens = this.ExecutarFuncaoServerSideSynch("PreencherComboLote", parametros);
            }
            catch (ex) {
                LogarException(ex);
            }
            if (this.cboLote) {
                for (var x = 0; x < itens.length; x++) {
                    this.cboLote.AddItem(itens[x].Lote, itens[x].Id, "");
                }
                this.cboLote.SetSelectedIndex(0);
            }
        }
    };
    C_Consig_Angular.prototype.MudouIndexCboLote = function (s, e) {
        var parametros;
        if (this.ItensConsignacao.Produto && this.cboDeposito.GetSelectedIndex() > 0 && this.rblLote.GetValue() != "") {
            parametros = {
                produto: CNum(this.ItensConsignacao.Produto),
                deposito: this.cboDeposito.GetValue(),
                lote: this.cboLote.GetValue()
            };
            var estoque = this.ExecutarFuncaoServerSideSynch("ObterEstoque", parametros);
            this.ItensConsignacao.Estoque = estoque.Total;
        }
        else {
            this.ItensConsignacao.Estoque = "0";
        }
        if (this.rblLote.GetValue() == "V") {
            this.ItensConsignacao.Validade = "Val " + estoque.Validade;
        }
        this.RefreshAngular();
    };
    C_Consig_Angular.prototype.MudouIndexRblLote = function (s, e) {
        this.PreencherLote();
        if (this.rblLote.GetValue() == "V") {
            this.lblValidade.Visible = true;
        }
        else {
            this.lblValidade.Visible = false;
        }
    };
    C_Consig_Angular.prototype.MudouIndexCboDeposito = function (s, e) {
        this.PreencherLote();
        var parametros = {
            produto: CNum(this.ItensConsignacao.Produto),
            deposito: this.cboDeposito.GetValue()
        };
        try {
            this.ItensConsignacao.Estoque = CNum(this.ExecutarFuncaoServerSideSynch("RetornaEstoqueProduto", parametros));
        }
        catch (ex) {
            LogarException(ex);
        }
        this.RefreshAngular();
    };
    C_Consig_Angular.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        var parametros;
        Entity.Data_Cadastro = ConvertToDate(Entity.Data_Cadastro);
        Entity.Data_Vencimento = ConvertToDate(Entity.Data_Vencimento);
    };
    C_Consig_Angular.prototype.PreencherEntidade = function (codigo) {
        _super.prototype.PreencherEntidade.call(this, codigo);
        if (this.EntityTela.Codigo) {
            this.PreencherGrade(this.EntityTela.Codigo);
            this.RefreshAngular();
            if (!this.VerificaConsignacaoExistente()) {
                return;
            }
            else if (!this.ValidarPreencherEntidade()) {
                return;
            }
            else if (!this.ValidarAlteracaoConsignacao()) {
                return;
            }
            else if (!this.ValidarConsignacaoFinalizada()) {
                return;
            }
        }
        this.gravou = false;
    };
    C_Consig_Angular.prototype.OnBuscouCliente = function (s, e) {
        if (this.txtCliente.GetText() != "") {
            this.ValidarCliente();
        }
    };
    C_Consig_Angular.prototype.OnClicouImportConsig = function (s, e) {
        this.mdImportar.Show();
        this.LimparModal();
    };
    C_Consig_Angular.prototype.OnClicouGerar = function (s, e) {
        var parametros;
        if (!this.ValidarCamposModal()) {
            return;
        }
        try {
            parametros = {
                codConsig: CNum(this.txtCodigoConsig.GetText()),
                dataInicio: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFim: this.txtPeriodo.textBoxCalendarioFim.GetDate()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ImportarConsignacao", parametros);
            if (retorno && retorno != []) {
                this.gridImportar.PreencherGrid(retorno);
            }
            else {
                MostrarAlerta("A consignação não possui produtos com a situação selecionada para importação. Selecione outra situação para que os produto sejam importados.");
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Consig_Angular.prototype.OnClicouImprimir = function (s, e) {
        var parametros;
        if (!this.EntityTela.Codigo) {
            MostrarAlerta("Informe uma consignação para ser impressa!");
            return;
        }
        try {
            parametros = {
                codigo: CNum(this.txtCodigo.GetText())
            };
            var texto = this.ExecutarFuncaoServerSideSynch("MontaCupom", parametros);
            this.ImprimirMatricial(ValoresSismoura.NomeTela + "_Cupom", texto);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Consig_Angular.prototype.OnClicouImprimirMeiaFolha = function (s, e) {
        var parametros;
        if (!this.EntityTela.Codigo) {
            MostrarAlerta("Informe uma consignação para ser impressa!");
            return;
        }
        try {
            parametros = {
                codigo: this.EntityTela.Codigo
            };
            var texto = this.ExecutarFuncaoServerSideSynch("MontaCupomMeiaFolha", parametros);
            this.ImprimirMatricial(ValoresSismoura.NomeTela + "_Impressao", texto);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Consig_Angular.prototype.OnClicouImportar = function (s, e) {
        var valor = this.GetValoresRowsSelecionadas("Codigo");
        var codigo;
        if ((valor && valor.length <= 0) && CNum(this.txtCodigoConsig.GetText()) <= 0) {
            MostrarAlerta("Selecione a consignação que será importada.");
            return;
        }
        else if (valor && valor.length >= 2) {
            MostrarAlerta("Selecione apenas uma consignação para importar.");
            return;
        }
        if (CNum(this.txtCodigoConsig.GetText()) > 0) {
            codigo = CNum(this.txtCodigoConsig.GetText());
        }
        else {
            codigo = valor[0];
        }
        this.PreencherGrade(codigo);
        if (this.grid.Grid.DataSource.length <= 0) {
            MostrarAlerta("A consignação não possui produtos com a situação selecionada para importação. Selecione outra situação para que os produto sejam importados.");
            return;
        }
        this.mdImportar.Hide();
        this.LimparModal();
        this.txtProduto.Focus();
    };
    C_Consig_Angular.prototype.GetValoresRowsSelecionadas = function (campo) {
        var retorno = [];
        try {
            for (var i = 0; i < this.gridImportar.GetSelectedRowsData.length; i++) {
                retorno.push(this.gridImportar.GetSelectedRowsData[i][campo]);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return retorno;
    };
    C_Consig_Angular.prototype.PintarLinhas = function () {
        this.gridImportar.Grid.element().find("tr").css("font-weight", "normal");
        for (var x = 0; x < this.gridImportar.Grid.getSelectedRowKeys().length; x++) {
            var index = this.gridImportar.Grid.getRowIndexByKey(this.gridImportar.Grid.getSelectedRowKeys()[x]);
            this.gridImportar.Grid.getRowElement(index).css("font-weight", "bold");
        }
    };
    C_Consig_Angular.prototype.gridImportar_SelecionouLinha = function (s, e) {
        this.PintarLinhas();
        //this.gridImportar.Refresh();
        //setTimeout(() => this.PintarLinhas(), 150);
        this.RefreshAngular();
    };
    C_Consig_Angular.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.gravou = false;
        if (!this.ValidarAlteracaoConsignacao()) {
            return false;
        }
        if (!this.ValidarConsignacaoFinalizada()) {
            return false;
        }
        if (!this.ValidarPreencherEntidade()) {
            return false;
        }
        this.EntityTela.ItensConsignacao = this.Itens;
        return true;
    };
    C_Consig_Angular.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade(this.EntityTela.Codigo);
        this.gravou = true;
        return true;
    };
    return C_Consig_Angular;
}(MouraPageCadastroAngular));
var c_Consig_Angular = new C_Consig_Angular();
//# sourceMappingURL=C_Consig_Angular.js.map