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
var C_CotacCF = /** @class */ (function (_super) {
    __extends(C_CotacCF, _super);
    function C_CotacCF() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.digitouProcura = false;
        return _this;
    }
    Object.defineProperty(C_CotacCF.prototype, "btnGerarArquivoBase", {
        get: function () {
            return window['btnGerarArquivoBase_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "btnGerarPedido", {
        get: function () {
            return window['btnGerarPedido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "btnDownload", {
        get: function () {
            return window['btnDownload_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "btnExportar", {
        get: function () {
            return window['btnExportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "btnFechar", {
        get: function () {
            return window['btnFechar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "hdnCaminhoSessao", {
        get: function () {
            return window['hdnCaminhoSessao'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "hdnRemessa", {
        get: function () {
            return window['hdnRemessa'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "hdnTipo", {
        get: function () {
            return window['hdnTipo'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "lblSituacao", {
        get: function () {
            return window['lblSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "Produto", {
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
    Object.defineProperty(C_CotacCF.prototype, "Produtos", {
        get: function () {
            return this.GetScope()["Produtos"];
        },
        set: function (value) {
            this.GetScope()["Produtos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "RetornoImportado", {
        get: function () {
            return this.GetScope()["RetornoImportado"];
        },
        set: function (value) {
            this.GetScope()["RetornoImportado"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "grdRetorno", {
        get: function () {
            return window['grdRetorno_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "txtCodigoBarras", {
        get: function () {
            return window['txtCodigoBarras_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "txtQuantidade", {
        get: function () {
            return window['txtQuantidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "txtPrecoReferencia", {
        get: function () {
            return window['txtPrecoReferencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "txtFabricante", {
        get: function () {
            return window['txtFabricante_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "fpXML", {
        get: function () {
            return window['fpXML_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "PathImportado", {
        get: function () {
            if (!this.GetScope()["PathImportado"]) {
                return "";
            }
            else {
                return this.GetScope()["PathImportado"];
            }
        },
        set: function (value) {
            this.GetScope()["PathImportado"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "hdnNomeArquivo", {
        get: function () {
            return $("#hdnNomeArquivo")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "gridDetalhes", {
        get: function () {
            return window['gridDetalhes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CotacCF.prototype, "mdDetalhes", {
        get: function () {
            return window["mdDetalhes_Object"];
        },
        enumerable: true,
        configurable: true
    });
    C_CotacCF.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.Validando, this.OnValidando, this);
            adicionarEventoMoura(this.Grid.LimpouItem, this.LimparProduto, this);
            adicionarEventoMoura(this.Grid.SelecionandoItem, this.OnSelecionouItem, this);
            adicionarEventoMoura(this.Grid.ExcluindoItem, this.OnExcluindoItem, this);
        }
        if (this.btnGerarArquivoBase) {
            adicionarEventoMoura(this.btnGerarArquivoBase.Click, this.OnClickGerar, this);
        }
        if (this.btnGerarPedido) {
            adicionarEventoMoura(this.btnGerarPedido.Click, this.OnClickGerarPedido, this);
        }
        if (this.btnExportar) {
            adicionarEventoMoura(this.btnExportar.Click, this.OnClickGerarRemessa, this);
        }
        if (this.btnFechar) {
            adicionarEventoMoura(this.btnFechar.Click, this.OnClickFechar, this);
        }
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Procurou, this.OnProcurouProduto, this);
            adicionarEventoMoura(this.txtProduto.KeyPressProcura, this.OnKeyPressProduto, this);
        }
        if (this.fpXML) {
            adicionarEventoMoura(this.fpXML.FileUploadComplete, this.OnFileUploadCompleted, this);
        }
        if (this.grdRetorno) {
            adicionarEventoMoura(this.grdRetorno.ClickBotaoLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_CotacCF.prototype.OnGridSelecionouItem = function (s, e) {
        if (e.commandName == "Detalhes") {
            this.Preencher_Grade_Detalhes(e.rowKey);
        }
    };
    C_CotacCF.prototype.Preencher_Grade_Detalhes = function (cotacao) {
        try {
            for (var i = 0; i < this.RetornoImportado.length; i++) {
                if (this.RetornoImportado[i].Codigo == cotacao) {
                    this.gridDetalhes.PreencherGrid(this.RetornoImportado[i].Produtos);
                    if (this.mdDetalhes) {
                        this.mdDetalhes.ModalDialog.Show();
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CotacCF.prototype.OnFileUploadCompleted = function (s, e) {
        try {
            if (this.fpXML && this.fpXML.File) {
                this.PathImportado = this.fpXML.PathSalvarArquivo + this.fpXML.File.name;
                this.CarregarRetorno(this.PathImportado);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CotacCF.prototype.OnClickGerar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        var parametros = {};
        this.hdnRemessa.value = "";
        abrirEspera("");
        this.ExecutarFuncaoServerSideAsynch("GetArquivoBase", parametros, function (d) {
            fecharEspera();
            var retorno = GetRetornoAJAX(d);
            _this.hdnRemessa.value = retorno.Base;
            _this.hdnTipo.value = "Base";
            _this.FazerDownload();
        }, this.TratarErroFuncaoAsync, this);
    };
    C_CotacCF.prototype.OnClickGerarPedido = function (s, e) {
        e.processOnServer = false;
        if (this.RetornoImportado.length == 0) {
            MostrarAlerta("Importe um arquivo de retorno primeiro!");
            return;
        }
        if (this.lblSituacao.Text != "Enviado") {
            MostrarAlerta("Já foi gerado o pedido de compra.");
            this.fpXML.Limpar();
            return;
        }
        var parametros = {
            Tela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado,
            codRemessa: this.txtCodigo.GetText().CNum(),
            lista: this.RetornoImportado
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GerarPedido", parametros);
        if (retorno == "True") {
            MostrarMensagem("Pedido(s) de Compra(s) gerado com sucesso. Acesse a tela de Relação de Pedido por Período");
            this.lblSituacao.Text = "Concluído";
        }
        else {
            MostrarAlerta(retorno);
        }
    };
    C_CotacCF.prototype.LimparCamposImportar = function () {
        this.grdRetorno.PreencherGrid([]);
        this.hdnNomeArquivo.value = "" + (new Date()).getTime();
    };
    C_CotacCF.prototype.CarregarRetorno = function (fileName) {
        var _this = this;
        if (String.IsNullOrWhiteSpace(fileName)) {
            MostrarAlerta("Nenhum arquivo foi importado!");
            return;
        }
        if (this.txtCodigo.GetText().CNum() == 0) {
            MostrarAlerta("Informe o código da remessa para pode importar o arquivo de retorno!");
            this.fpXML.Limpar();
            return;
        }
        if (this.lblSituacao.Text != "Enviado") {
            MostrarAlerta("Informe uma remessa com a situação (Enviada).");
            this.fpXML.Limpar();
            return;
        }
        this.LimparCamposImportar();
        this.RefreshAngular();
        var parametros = {
            nomeArquivo: fileName,
            Tela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado,
            codRemessa: this.txtCodigo.GetText().CNum()
        };
        abrirEspera("");
        this.ExecutarFuncaoServerSideAsynch("CarregarArquivoXml", parametros, function (d) {
            try {
                var retorno = GetRetornoAJAX(d);
                fecharEspera();
                if (!retorno) {
                    MostrarAlerta("Ocorreu um erro ao obter os dados do arquivo de retorno");
                    _this.fpXML.Limpar();
                    return;
                }
                else if (retorno.Erro != "" && retorno.Erro != null && retorno.Erro != undefined) {
                    MostrarAlerta(retorno.Erro);
                    _this.fpXML.Limpar();
                    return;
                }
                else {
                    _this.fpXML.Limpar();
                    _this.grdRetorno.PreencherGrid(retorno.Produtos);
                    _this.RetornoImportado = retorno.Produtos;
                    _this.RefreshAngular();
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
    };
    C_CotacCF.prototype.OnClickFechar = function (s, e) {
        e.processOnServer = false;
        this.mdDetalhes.ModalDialog.Hide();
    };
    C_CotacCF.prototype.OnClickGerarRemessa = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        if (this.txtCodigo.GetText().CNum() == 0) {
            MostrarAlerta("Informe a remessa a ser exportada!");
            return;
        }
        var parametros = {
            codCotacao: this.txtCodigo.GetText().CNum()
        };
        this.hdnRemessa.value = "";
        this.lblSituacao.Text = "Enviado";
        abrirEspera("");
        this.ExecutarFuncaoServerSideAsynch("GetArquivoRemessa", parametros, function (d) {
            fecharEspera();
            var retorno = GetRetornoAJAX(d);
            _this.hdnRemessa.value = retorno.Base;
            _this.hdnTipo.value = "Remessa";
            _this.FazerDownload();
        }, this.TratarErroFuncaoAsync, this);
    };
    C_CotacCF.prototype.LimparProduto = function () {
        this.Produto.Produto = 0;
        this.Produto.Produto_Nome = "";
        this.Produto.Codigo_Barra = "";
        this.Produto.Prazo_Entrega = 0;
        this.Produto.Quantidade = 0;
        this.Produto.Preco_Referencia = 0;
        this.Produto.Nome_Fornecedor = "";
        this.Produto.Fabricante = 0;
        this.fpXML.Limpar();
        this.RefreshAngular();
    };
    C_CotacCF.prototype.OnExcluindoItem = function (s, e) {
        if (this.CotacaoConcluida()) {
            MostrarAlerta("A cotação já foi concluída, não será possível alterar/excluir!");
            e.cancelar = true;
            return;
        }
    };
    C_CotacCF.prototype.OnSelecionouItem = function (s, e) {
        this.digitouProcura = false;
        this.Produto.Valor = e.item.Valor;
    };
    C_CotacCF.prototype.OnKeyPressProduto = function () {
        this.digitouProcura = true;
    };
    C_CotacCF.prototype.OnProcurouProduto = function () {
        var parametros;
        parametros = {
            codProduto: this.txtProduto.GetText().CNum()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("Preco_Custo", parametros);
        this.Produto.Preco_Referencia = retorno;
        var retorno = this.ExecutarFuncaoServerSideSynch("Codigo_Barra", parametros);
        this.Produto.Codigo_Barra = retorno;
        var retorno = this.ExecutarFuncaoServerSideSynch("Fabricante", parametros);
        if (retorno && retorno > 0) {
            this.txtFabricante.Procurar(retorno.toString());
            this.Produto.Fabricante = retorno;
        }
        else {
            this.txtFabricante.Limpar();
        }
        this.RefreshAngular();
    };
    C_CotacCF.prototype.OnValidando = function (s, e) {
        if (this.CotacaoConcluida()) {
            MostrarAlerta("A cotação já foi concluída, não será possível alterar!");
            e.cancelar = true;
            return;
        }
        if (e.item.Produto <= 0) {
            MostrarAlerta("Informe um produto para ser adicionado");
            e.cancelar = true;
            this.txtProduto.Focus();
            return;
        }
        if (e.item.Quantidade <= 0) {
            MostrarAlerta("Informe a quantidade");
            e.cancelar = true;
            this.txtQuantidade.Focus();
            return;
        }
        if (e.item.Codigo_Barra <= 0) {
            MostrarAlerta("Informe o código de barras");
            e.cancelar = true;
            this.txtQuantidade.Focus();
            return;
        }
        if (e.item.Preco_Referencia <= 0) {
            MostrarAlerta("Informe o preço de referência do produto para ser adicionado");
            e.cancelar = true;
            this.txtPrecoReferencia.Focus();
            return;
        }
        if (e.item.Fabricante <= 0) {
            MostrarAlerta("Informe o fabricante");
            e.cancelar = true;
            this.txtFabricante.Focus();
            return;
        }
        e.item.Nome_Fornecedor = this.txtFabricante.GetResultado();
        if (e.index < 0) {
            e.item.Produto_Nome = this.txtProduto.GetResultado();
        }
        if (this.Produtos) {
            for (var i = 0; i < this.Produtos.length; i++) {
                if (this.Produtos[i].Produto == this.Produto.Produto) {
                    MsgBoxJS("Deseja SOMAR a quantidade ja existente pela digitada?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRepostaQuantidade, this), i);
                    e.cancelar = true;
                    return;
                }
            }
        }
        this.RefreshAngular();
    };
    C_CotacCF.prototype.OnRepostaQuantidade = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.Produtos[result.Argument].Quantidade += this.Produto.Quantidade;
            this.Produtos[result.Argument].Codigo_Barra = this.Produto.Codigo_Barra;
            this.Produtos[result.Argument].Preco_Referencia = this.Produto.Preco_Referencia;
            this.Produtos[result.Argument].Fabricante = this.Produto.Fabricante;
            this.Produtos[result.Argument].Nome_Fornecedor = this.Produto.Nome_Fornecedor;
            this.Grid.Grid.Refresh();
            this.LimparProduto();
            this.RefreshAngular();
        }
    };
    C_CotacCF.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.CotacaoConcluida()) {
            MostrarAlerta("A cotação já foi concluída, não será possível alterar!");
            return false;
        }
        this.EntityTela.Itens = this.Produtos;
        if (this.EntityTela.Codigo == 0 || this.EntityTela.Codigo == undefined || this.EntityTela.Codigo == null) {
            this.EntityTela.Situacao = 0;
        }
        this.PreencherEmpresa();
        return true;
    };
    C_CotacCF.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        var parametros = {
            codCotacao: this.EntityTela.Codigo
        };
        return true;
    };
    C_CotacCF.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Codigo = 0;
        Entity.Data = this.DataServidor();
        Entity.Situacao = 0;
        this.lblSituacao.Text = "";
        this.grdRetorno.PreencherGrid([]);
        this.Produtos = [];
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.LimparProduto();
        this.digitouProcura = false;
    };
    C_CotacCF.prototype.FazerDownload = function () {
        var parametros = {
            Tipo: this.hdnTipo.value,
            Texto: this.hdnRemessa.value,
            Tela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        var NomeArquivo = this.ExecutarFuncaoServerSideSynch("FazerDownload", parametros);
        var parametrosTela = [];
        abrirTelaNovaAbaParametros(formataURLRelativa("Modulos/Geral/AbrirArquivo.aspx"), parametrosTela);
    };
    C_CotacCF.prototype.PreencherEmpresa = function () {
        var empresas;
        if (this.lstEmpresa) {
            empresas = this.lstEmpresa.GetValues();
        }
        this.EntityTela.Empresas = [];
        for (var x = 0; x <= empresas.length - 1; x++) {
            var empresa;
            empresa = {};
            empresa.Empresa = empresas[x].CNum();
            this.EntityTela.Empresas.push(empresa);
        }
    };
    C_CotacCF.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        if (this.lstEmpresa) {
            var selecionar = [];
            for (var x = 0; x <= Entity.Empresas.length - 1; x++) {
                selecionar.push("" + Entity.Empresas[x].Empresa);
            }
            this.lstEmpresa.LimparSelecao();
            this.lstEmpresa.SetValues(selecionar);
        }
        if (Entity.Situacao == 0) {
            this.lblSituacao.Text = "Pendente";
        }
        else if (Entity.Situacao == 1) {
            this.lblSituacao.Text = "Enviado";
        }
        else if (Entity.Situacao == 2) {
            this.lblSituacao.Text = "Concluído";
        }
        $(this.lblSituacao.LabelComponente).css("color", "red");
        this.GetCadastrados();
        return true;
    };
    C_CotacCF.prototype.CotacaoConcluida = function () {
        if (this.EntityTela.Codigo == null) {
            return false;
        }
        var parametros = {
            codCotacao: this.EntityTela.Codigo
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("CotacaoConcluida", parametros);
        return retorno;
    };
    C_CotacCF.prototype.GetCadastrados = function () {
        try {
            var parametros;
            parametros = {
                codCotacao: this.EntityTela.Codigo
            };
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            var retorno = this.ExecutarFuncaoServerSideSynch("RetornoCadastrado", parametros);
            this.Produtos = cad;
            if (retorno) {
                this.grdRetorno.PreencherGrid(retorno);
                this.RetornoImportado = retorno;
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_CotacCF;
}(MouraPageCadastroAngular));
var c_CotacCF = new C_CotacCF();
//# sourceMappingURL=C_CotacCF.js.map