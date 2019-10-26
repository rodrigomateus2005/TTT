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
var M_ConSeq = /** @class */ (function (_super) {
    __extends(M_ConSeq, _super);
    function M_ConSeq() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lstAuxiliar = [];
        return _this;
    }
    Object.defineProperty(M_ConSeq.prototype, "Produto", {
        get: function () {
            var that = this.GetScope()["Produto"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Produto"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "Produtos", {
        get: function () {
            return this.GetScope()["Produtos"];
        },
        set: function (value) {
            this.GetScope()["Produtos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "txtResponsavel", {
        get: function () {
            return window['txtResponsavel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "txtMovimentacao", {
        get: function () {
            return window['txtMovimentacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "chkMostrar_Estoque", {
        get: function () {
            return window['chkMostrar_Estoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "chkQuantidade", {
        get: function () {
            return window['chkQuantidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "cboDeposito", {
        get: function () {
            return window['cboDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "cboMotivo", {
        get: function () {
            return window['cboMotivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "txtQuantidade", {
        get: function () {
            return window['txtQuantidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "txtDocumento", {
        get: function () {
            return window['txtDocumento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "txtObs", {
        get: function () {
            return window['txtObs_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "txtLocalizacao", {
        get: function () {
            return window['txtLocalizacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "btnAprovar", {
        get: function () {
            return window['btnAprovar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "btnComparar", {
        get: function () {
            return window['btnComparar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "btnRFIDImportarContagem", {
        get: function () {
            return window['btnRFIDImportarContagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "GridModal", {
        get: function () {
            return window['GridModal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "btnImportar", {
        get: function () {
            return window['btnImportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "mdRFID", {
        get: function () {
            return window['mdRFID_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(M_ConSeq.prototype, "btnCancelar", {
        get: function () {
            return window['btnCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    M_ConSeq.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.cboDeposito.SetSelectedIndex(0);
    };
    M_ConSeq.prototype.Init = function () {
        _super.prototype.Init.call(this);
        this.txtQuantidade.Visible = false;
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.Validando, this.OnValidando, this);
            adicionarEventoMoura(this.Grid.ExcluindoItem, this.OnExcluir, this);
            adicionarEventoMoura(this.Grid.LimpouItem, this.MudouExibirQtd, this);
            adicionarEventoMoura(this.Grid.ItemAdicionado, this.AdicionouItem, this);
        }
        if (this.chkQuantidade) {
            adicionarEventoMoura(this.chkQuantidade.CheckChanged, this.MudouExibirQtd, this);
        }
        if (this.chkMostrar_Estoque) {
            adicionarEventoMoura(this.chkMostrar_Estoque.CheckChanged, this.MudouMostrarEstoque, this);
        }
        if (this.btnAprovar) {
            adicionarEventoMoura(this.btnAprovar.Click, this.OnClickAprovar, this);
        }
        if (this.btnComparar) {
            adicionarEventoMoura(this.btnComparar.Click, this.OnClickComparar, this);
        }
        if (this.btnRFIDImportarContagem) {
            adicionarEventoMoura(this.btnRFIDImportarContagem.Click, this.OnClickRFID, this);
        }
        if (this.btnImportar) {
            adicionarEventoMoura(this.btnImportar.Click, this.OnClickImportar, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnClickCancelar, this);
        }
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnClickGerar, this);
        }
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Procurou, this.OnProcurouProduto, this);
        }
    };
    M_ConSeq.prototype.MudouMostrarEstoque = function () {
        if (this.chkMostrar_Estoque.Checked) {
            this.Produtos = this.lstAuxiliar.filter(function (t) { return t.Qtde > 0; });
        }
        else {
            this.Produtos = this.lstAuxiliar;
        }
        this.RefreshAngular();
    };
    M_ConSeq.prototype.OnClickCancelar = function (s, e) {
        e.processOnServer = false;
        this.LimparCamposModal();
        this.mdRFID.Hide();
    };
    M_ConSeq.prototype.OnClickGerar = function (s, e) {
        e.processOnServer = false;
        var parametros;
        try {
            parametros = {
                dataInicio: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFim: this.txtPeriodo.textBoxCalendarioFim.GetDate()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            if (retorno.length > 0) {
                this.GridModal.PreencherGrid(retorno);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    M_ConSeq.prototype.OnClickImportar = function (s, e) {
        e.processOnServer = false;
        var codigos;
        var parametros;
        if (this.GridModal.DataSource.length < 0) {
            MostrarAlerta("Informe uma contagem a ser importada!");
            this.txtCodigo.Focus();
            this.Automatico = true;
            return;
        }
        var itens = this.GridModal.DataSource;
        var result;
        var itensImportar = [];
        var importado = [];
        if (!itens) {
            itens = [];
        }
        for (var x = 0; x < itens.length; x++) {
            if (itens[x].Importar = true) {
                itensImportar[x] = itens[x].CodContagem;
            }
        }
        codigos = itens.filter(function (t) { return t.Importar; }).map(function (p) { return p.CodContagem; });
        if (itensImportar.length > 0) {
            parametros = {
                codigos: codigos
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGridImportacao", parametros);
            if (retorno.length > 0) {
                var Deposito;
                var Entity = this.GetScope().Entity;
                for (var i = 0; i < retorno.length; i++) {
                    Deposito = retorno[i].Deposito;
                    if (this.cboDeposito.Combo.GetItemCount() < 0) {
                        this.cboDeposito.SetSelectedIndex(-1);
                    }
                    if (this.cboDeposito.Combo.GetItem(i).value.CNum() == Deposito) {
                        this.cboMotivo.SetSelectedIndex(i);
                    }
                    parametros = {};
                    var Configuracao = this.ExecutarFuncaoServerSideSynch("ValidarConfiguracao", parametros);
                    if (!Configuracao) {
                        retorno[i].Diferenca = retorno[i].Qtde - retorno[i].Estoque;
                    }
                    else {
                        retorno[i].Diferenca = "Não foi possível calcular.";
                    }
                    this.Produto.Produto = retorno[i].Produto;
                    this.Produto.Descricao = retorno[i].Descricao;
                    this.Produto.Cor = retorno[i].Nome;
                    this.Produto.Tamanho = retorno[i].Tamanho;
                    this.Produto.Codigo_Barra = retorno[i].Codigo_Barra;
                    this.Produto.Diferenca = retorno[i].Diferenca;
                    this.Produto.Estoque = retorno[i].Estoque;
                    this.Produto.Deposito = retorno[i].Deposito;
                    this.Produto.Qtde = retorno[i].Qtde;
                    this.Automatico = true;
                    this.Grid.btnAdiconar.DoClick();
                }
            }
        }
        this.mdRFID.Hide();
        this.LimparCamposModal();
        this.txtProduto.Focus();
    };
    M_ConSeq.prototype.OnClickRFID = function (s, e) {
        e.processOnServer = false;
        this.mdRFID.Show();
        this.GridModal.PreencherGrid(null);
    };
    M_ConSeq.prototype.OnClickComparar = function (s, e) {
        e.processOnServer = false;
        if (this.cboDeposito.GetValue() <= 0) {
            MostrarAlerta("Preencha corretamente o campo: Depósito");
            return;
        }
        var parametros = [];
        parametros.push("Parametro=" + this.cboDeposito.GetValue());
        abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.RelacaodeProdutosNaoContadosnoPeriodo), parametros);
    };
    M_ConSeq.prototype.OnClickAprovar = function (s, e) {
        e.processOnServer = false;
        var now = new Date();
        now.setHours(0, 0, 0, 0); //Atv. 1078238 - retornava diferente = true quando comparado com a Data da entity, que vem com horário 00:00:00.
        if (this.EntityTela.Codigo > 0 && this.EntityTela.Aprovado == true && this.EntityTela.Codigo != null) {
            MostrarAlerta("Operação não permitida. Registro já aprovado!");
            return;
        }
        var dataEntidade = new Date(this.EntityTela.Data.ToDate().getFullYear(), this.EntityTela.Data.ToDate().getMonth(), this.EntityTela.Data.ToDate().getDay(), 0, 0, 0);
        var dataAtual = new Date(now.getFullYear(), now.getMonth(), now.getDay(), 0, 0, 0);
        if (dataEntidade.getTime() != dataAtual.getTime()) {
            MsgBoxJS("ATENÇÃO: esta contagem não foi feita na data de hoje, deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRepostaData, this));
            return;
        }
        if (this.EntityTela.Codigo <= 0) {
            MostrarAlerta("Nenhuma contagem a ser aprovada!");
            this.txtMovimentacao.Focus();
            return;
        }
        if (this.Produtos.length < 0) {
            MostrarAlerta("Nenhum estoque a ser atualizado!");
            this.txtProduto.Focus();
            return;
        }
        MsgBoxJS("ATENÇÃO: O estoque será SOMADO para os produtos informados. Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnReposta, this));
    };
    M_ConSeq.prototype.OnRepostaData = function (result) {
        var parametros;
        var campo;
        if (result.Resultado == MsgBoxResult.No) {
            return;
        }
        if (this.EntityTela.Codigo <= 0) {
            MostrarAlerta("Nenhuma contagem a ser aprovada!");
            this.txtMovimentacao.Focus();
            return;
        }
        if (this.Produtos.length < 0) {
            MostrarAlerta("Nenhum estoque a ser atualizado!");
            this.txtProduto.Focus();
            return;
        }
        MsgBoxJS("ATENÇÃO: O estoque será SOMADO para os produtos informados. Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnReposta, this));
    };
    M_ConSeq.prototype.OnReposta = function (result) {
        var parametros;
        var campo;
        if (result.Resultado == MsgBoxResult.No) {
            return;
        }
        var itens = this.Grid.Grid.DataSource;
        parametros = {
            entity: itens,
            codMovimentacao: this.EntityTela.Codigo,
            Tela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("AprovarMovimentacao", parametros);
        if (retorno['Mensagem']) {
            MostrarMensagem(retorno['Mensagem']);
            //this.OnDepoisBuscarExistente(this.GetScope().Entity);
            this.LimparProduto();
            this.Produtos = [];
            this.OnDepoisLimpar(this.EntityTela);
        }
        else if (retorno['Alerta']) {
            MostrarAlerta(retorno['Alerta']);
        }
        else {
            return;
        }
        this.txtMovimentacao.Procurou;
    };
    M_ConSeq.prototype.LimparCamposModal = function () {
        this.txtPeriodo.Iniciar();
        this.txtCodigo.SetText("");
    };
    M_ConSeq.prototype.AdicionouItem = function (sender, e) {
        this.MudouExibirQtd();
        this.txtProduto.Focus();
    };
    M_ConSeq.prototype.MudouExibirQtd = function () {
        this.txtQuantidade.SetText("1,000");
        this.Produto.Qtde = 1;
        this.txtQuantidade.Visible = this.chkQuantidade.Checked;
        if (this.Produtos.length < 1) {
            this.txtData.Enabled = true;
            this.cboMotivo.Enabled = true;
            this.txtDocumento.Enabled = true;
            this.txtObs.Enabled = true;
            this.cboDeposito.Enabled = true;
            this.txtResponsavel.Enabled = true;
        }
        else {
            this.txtData.Enabled = false;
            this.cboMotivo.Enabled = false;
            this.txtDocumento.Enabled = false;
            this.txtObs.Enabled = false;
            this.cboDeposito.Enabled = false;
            this.txtResponsavel.Enabled = false;
        }
    };
    M_ConSeq.prototype.OnExcluir = function (s, e) {
        if (this.EntityTela.Codigo > 0 && this.EntityTela.Aprovado == true && this.EntityTela.Codigo != null) {
            MostrarAlerta("Operação não permitida. Registro já aprovado!");
            e.cancelar = true;
            return;
        }
        var itens = this.Grid.Grid.DataSource;
        this.MudouExibirQtd();
        this.lstAuxiliar = itens;
    };
    M_ConSeq.prototype.OnValidando = function (s, e) {
        try {
            if (this.EntityTela.Codigo > 0 && this.EntityTela.Aprovado == true && this.EntityTela.Codigo != null) {
                MostrarAlerta("Operação não permitida. Registro já aprovado!");
                e.cancelar = true;
                return;
            }
            var x;
            var itens = this.Grid.Grid.DataSource;
            var parametros;
            var result;
            if (!itens) {
                itens = [];
            }
            if (e.item.Qtde == undefined) {
                e.item.Qtde = 1;
            }
            if (e.item.Produto < 0) {
                MostrarAlerta("Preencha corretamente o campo: Produto");
                e.cancelar = true;
                this.txtResponsavel.Focus();
                return;
            }
            parametros = {};
            var Retornar = this.ExecutarFuncaoServerSideSynch("RetornarValorPadrao", parametros);
            if (!Retornar) {
                for (x = 0; x < itens.length; x++) {
                    if (itens[x].Produto == e.item.Produto) {
                        itens[x].Qtde = itens[x].Qtde + e.item.Qtde;
                        itens[x].Diferenca = itens[x].Qtde - itens[x].Estoque;
                        this.Grid.Grid.Refresh();
                        this.LimparProduto();
                        this.txtProduto.Focus();
                        e.cancelar = true;
                        return;
                    }
                }
            }
            if (e.index < 0) {
                e.item.Item_Contagem = this.Produtos.Max("Item_Contagem") + 1;
            }
            var Entidade = this.GetScope().Entity;
            if (Entidade.Aprovado != true) {
                if (this.Automatico == false) {
                    if (this.txtDocumento.GetText() == "" || this.txtDocumento.GetText().CNum() == 0) {
                        MostrarAlerta("Preencha corretamente o campo: Documento");
                        e.cancelar = true;
                        this.txtResponsavel.Focus();
                        return;
                    }
                    if (this.txtObs.GetText() == "") {
                        MostrarAlerta("Preencha corretamente o campo: Observação");
                        e.cancelar = true;
                        this.txtResponsavel.Focus();
                        return;
                    }
                    if (this.cboMotivo.GetSelectedIndex() < 0) {
                        MostrarAlerta("Preencha corretamente o campo: Motivo");
                        e.cancelar = true;
                        this.txtResponsavel.Focus();
                        return;
                    }
                    if (this.txtResponsavel.GetText() == "" || this.txtResponsavel.GetText().CNum() == 0) {
                        MostrarAlerta("Preencha corretamente o campo: Responsável");
                        e.cancelar = true;
                        this.txtResponsavel.Focus();
                        return;
                    }
                }
            }
            parametros = {
                codProduto: e.item.Produto
            };
            var controlado = this.ExecutarFuncaoServerSideSynch("Controlado", parametros);
            if (controlado) {
                MostrarAlerta("O produto informado está marcado como controlado, sendo assim não é possível realizar a contagem de estoque, pois énecessário referenciá-lo a um determinado lote.Para realizar o procedimento no produto informado utilize a tela de corrigir estoque/lote.");
                this.txtProduto.Limpar();
                this.txtProduto.Focus();
                return;
            }
            else {
                parametros = {};
                var Configuracao = this.ExecutarFuncaoServerSideSynch("ValidarConfiguracao", parametros);
                if (Configuracao) {
                    parametros = {
                        codProduto: e.item.Produto
                    };
                    var Tipo = this.ExecutarFuncaoServerSideSynch("GetbyTipoProduto", parametros);
                    if (Tipo) {
                        MostrarAlerta("O tipo do produto está marcado como produto de Consumo Interno.Produtos marcados como Consumo Interno, não controlam estoque.");
                        this.txtProduto.Limpar();
                        this.txtProduto.Focus();
                        return;
                    }
                    else {
                        parametros = {
                            codProduto: e.item.Produto,
                            deposito: this.cboDeposito.GetValue()
                        };
                        var Estoque = this.ExecutarFuncaoServerSideSynch("retornaEstoque", parametros);
                        parametros = {
                            codigo: e.item.Produto
                        };
                        var retorno = this.ExecutarFuncaoServerSideSynch("GetByProdutoCaracteristicas", parametros);
                        if (retorno) {
                            if (retorno['Caracteristicas'].length > 0) {
                                e.item.Descricao = retorno['Caracteristicas'][0].Descricao;
                                e.item.Cor = retorno['Caracteristicas'][0].Nome;
                                e.item.Tamanho = retorno['Caracteristicas'][0].Tamanho;
                                e.item.Codigo_Barra = retorno['Caracteristicas'][0].Codigo_Barra;
                            }
                        }
                        else {
                            parametros = {
                                codigo: e.item.Produto
                            };
                            var retorno = this.ExecutarFuncaoServerSideSynch("GetByProduto", parametros);
                            if (retorno) {
                                e.item.Descricao = retorno['Nome'];
                            }
                        }
                        e.item.Estoque = Estoque;
                        e.item.Obs = this.txtObs.GetText();
                        e.item.Documento = this.txtDocumento.GetText();
                        e.item.Motivo = this.cboMotivo.GetValue();
                    }
                    parametros = {};
                    var Configuracao = this.ExecutarFuncaoServerSideSynch("ValidarConfiguracao", parametros);
                    if (Configuracao) {
                        e.item.Diferenca = e.item.Qtde - e.item.Estoque;
                    }
                    else {
                        e.item.Diferenca = "Não foi possível calcular.";
                    }
                    for (var i = 0; i < itens.length; i++) {
                        if (this.lstAuxiliar[i] == undefined) {
                            this.lstAuxiliar[i] = e.item;
                        }
                    }
                }
            }
            this.Automatico = false;
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    M_ConSeq.prototype.OnDepoisBuscarExistente = function (Entidade) {
        try {
            _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
            var parametros;
            var result;
            this.LimparProduto();
            this.Produtos = [];
            this.Grid.Grid.PreencherGrid(null);
            this.Produtos = [];
            if (Entidade.Tipo != 9) {
                MostrarAlerta("Esta movimentação não é uma Contagem Sequencial!");
                Entidade.Codigo = 0;
                this.SetEntity(Entidade);
                return;
            }
            this.cboDeposito.SetValue(Entidade.Deposito);
            parametros = {
                codigo: Entidade.Codigo
            };
            result = this.ExecutarFuncaoServerSideSynch("GetbyMovimentoItem", parametros);
            if (result) {
                this.txtObs.SetText(result[0].Obs);
                this.txtDocumento.SetText(result[0].Documento);
                if (result[0].Motivo == 0) {
                    this.cboMotivo.SetSelectedIndex(-1);
                }
                else {
                    this.cboMotivo.SetValue(result[0].Motivo);
                }
            }
            parametros = {
                codigo: this.EntityTela.Codigo
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("BuscarGrid", parametros);
            if (retorno) {
                this.Produtos = retorno.Produtos;
                this.Grid.Grid.PreencherGrid(this.Produtos);
                this.lstAuxiliar = this.Produtos;
                for (var x = 0; x < retorno.Produtos.length; x++) {
                    parametros = {};
                    var Configuracao = this.ExecutarFuncaoServerSideSynch("ValidarConfiguracao", parametros);
                    if (Configuracao) {
                        this.Produtos[x].Diferenca = (this.Produtos[x].Estoque - this.Produtos[x].Qtde) * -1;
                    }
                    else {
                        this.Produtos[x].Diferenca = "Não foi possível calcular";
                    }
                }
            }
            else {
                MostrarAlerta("Movimentação não encontrada!!");
                return;
            }
            if (Entidade.Codigo && Entidade.Aprovado == true) {
                this.OnCamposEnable(false);
                if (this.txtDocumento.GetText() == "" || this.txtObs.GetText() == "" || this.cboMotivo.GetSelectedIndex() == -1) {
                    this.CamposObrigatorios(false);
                }
                return;
            }
            else if (this.txtDocumento.GetText() == "" || this.txtObs.GetText() == "" || this.cboMotivo.GetSelectedIndex() == -1) {
                this.CamposObrigatorios(true);
                this.OnCamposEnable(true);
            }
        }
        catch (ex) {
            LogarException(ex);
            this.Limpar();
        }
    };
    M_ConSeq.prototype.CamposObrigatorios = function (flag) {
        this.txtDocumento.Obrigatorio = flag;
        this.txtObs.Obrigatorio = flag;
        this.cboMotivo.Obrigatorio = flag;
    };
    M_ConSeq.prototype.OnCamposEnable = function (flag) {
        this.txtData.Enabled = flag;
        this.cboMotivo.Enabled = flag;
        this.txtDocumento.Enabled = flag;
        this.txtObs.Enabled = flag;
        this.cboDeposito.Enabled = flag;
        this.txtResponsavel.Enabled = flag;
        this.chkQuantidade.Enabled = flag;
        this.txtProduto.Enabled = flag;
        this.txtQuantidade.Enabled = flag;
        this.txtLocalizacao.Enabled = flag;
        this.chkMostrar_Estoque.Enabled = flag;
    };
    M_ConSeq.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.EntityTela.Codigo > 0 && this.EntityTela.Aprovado == true && this.EntityTela.Codigo != null) {
            MostrarAlerta("Operação não permitida. Registro já aprovado!");
            return false;
        }
        var now = new Date();
        this.EntityTela.Hora = new Date().toLocaleTimeString();
        this.EntityTela.Gravou_Web = true;
        this.EntityTela.Tipo = 9;
        this.EntityTela.Deposito = this.cboDeposito.GetValue();
        if (this.Produtos.length == 0) {
            MostrarAlerta("Não há nenhum produto para informar!");
            return false;
        }
        else {
            for (var x = 0; x < this.Produtos.length; x++) {
                this.Produtos[x].Motivo = this.cboMotivo.GetValue();
                this.Produtos[x].Obs = this.txtObs.GetText();
                this.Produtos[x].Documento = this.txtDocumento.GetText();
            }
            this.Produtos = this.Produtos;
            this.EntityTela.Itens = this.Produtos;
            return true;
        }
    };
    M_ConSeq.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        MostrarAlerta("Atenção: Para atualizar o(s) estoque(s) do(s) produto(s) alterado(s) na contagem utilize o botão Aprovar");
        //this.LimparProduto();
        //this.Produtos = [];
        //this.OnDepoisLimpar(this.EntityTela);
        return true;
    };
    M_ConSeq.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.LimparProduto();
        this.Produtos = [];
        this.txtMovimentacao.Limpar();
        this.LimparMovimentacao();
        this.OnCamposEnable(true);
        Entity.Data = this.DataServidor();
        this.cboMotivo.SetSelectedIndex(0);
        this.cboDeposito.SetSelectedIndex(0);
        Entity.Deposito = this.cboDeposito.GetValue();
        this.Automatico = false;
        this.CamposObrigatorios(true);
        this.MudouExibirQtd();
    };
    M_ConSeq.prototype.LimparProduto = function () {
        this.txtProduto.Limpar();
        this.txtQuantidade.SetText("1,000");
    };
    M_ConSeq.prototype.LimparMovimentacao = function () {
        this.LimparProduto();
        this.Produtos = [];
        this.chkMostrar_Estoque.Checked = false;
        this.chkQuantidade.Checked = false;
        this.txtDocumento.SetText("");
        this.txtObs.SetText("");
        this.cboMotivo.SetSelectedIndex(-1);
        this.Grid.Grid.PreencherGrid(null);
    };
    M_ConSeq.prototype.OnAntesDeletar = function () {
        _super.prototype.OnAntesDeletar.call(this);
        if (this.EntityTela.Codigo > 0 && this.EntityTela.Aprovado == true && this.EntityTela.Codigo != null) {
            MostrarAlerta("Operação não permitida. Registro já aprovado!");
            return false;
        }
        return true;
    };
    M_ConSeq.prototype.OnProcurouProduto = function (e) {
        if (this.Produto) {
            if (!this.chkQuantidade.Checked && this.Produto.Produto > 0) {
                this.Grid.AdicionarOuAlterarItemAtual();
                this.txtProduto.Focus();
            }
        }
    };
    return M_ConSeq;
}(MouraPageCadastroAngular));
var m_ConSeq = new M_ConSeq();
//# sourceMappingURL=M_ConSeq.js.map