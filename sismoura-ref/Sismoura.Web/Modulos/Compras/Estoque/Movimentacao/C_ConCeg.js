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
var C_ConCeg = /** @class */ (function (_super) {
    __extends(C_ConCeg, _super);
    function C_ConCeg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ConCeg.prototype, "MovItens", {
        get: function () {
            if (!this.GetScope()["MovItens"]) {
                this.GetScope()["MovItens"] = [];
            }
            return this.GetScope()["MovItens"];
        },
        set: function (value) {
            this.GetScope()["MovItens"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCeg.prototype, "MovItem", {
        get: function () {
            if (!this.GetScope()["MovItem"]) {
                this.GetScope()["MovItem"] = {};
            }
            return this.GetScope()["MovItem"];
        },
        set: function (value) {
            this.GetScope()["MovItem"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCeg.prototype, "mdConfCega", {
        get: function () {
            return window['mdConfCega_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCeg.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCeg.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCeg.prototype, "lstEmpresaOrigem", {
        get: function () {
            return window['lstEmpresaOrigem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCeg.prototype, "lstEmpresaDestino", {
        get: function () {
            return window['lstEmpresaDestino_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCeg.prototype, "txtResponsavel", {
        get: function () {
            return window['txtResponsavel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCeg.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCeg.prototype, "mdLoginAcesso", {
        get: function () {
            return window['mdLoginAcesso_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCeg.prototype, "txtUsuario", {
        get: function () {
            return window['txtUsuario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCeg.prototype, "txtSenha", {
        get: function () {
            return window['txtSenha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCeg.prototype, "grdMd", {
        get: function () {
            return window['grdMd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ConCeg.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherEmpresasOrigem();
        if (!ValoresSismoura.ConfiguracoesRetaguarda.Transferencia_Realizada_Empresa_Responsavel) {
            this.PreencherEmpresasDestino(); // Preenche todas
        }
        this.LimparCampos();
        this.LimparCamposMd();
        this.RefreshAngular();
    };
    C_ConCeg.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.mdConfCega) {
            adicionarEventoMoura(this.mdConfCega.Fechou, this.OnFechouMdConfCega, this);
        }
        if (this.grd) {
            adicionarEventoMoura(this.grd.ClickBotaoLinha, this.OnClickBtnConferir, this);
        }
        if (this.grdMd) {
            adicionarEventoMoura(this.grdMd.Validando, this.OnValidando, this);
        }
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Pesquisando, this.OnTxtProdutoPesquisando, this);
        }
    };
    C_ConCeg.prototype.OnFechouMdConfCega = function (e) {
        this.LimparCamposMd();
    };
    C_ConCeg.prototype.LimparCampos = function () {
        this.lstEmpresaOrigem.txtProcura.value = "";
        this.lstEmpresaOrigem.procurarItemLista();
        this.lstEmpresaDestino.txtProcura.value = "";
        this.lstEmpresaDestino.procurarItemLista();
        this.txtPeriodo.Iniciar();
        this.lstEmpresaOrigem.SelecionarEmpresaPadraoUsuario();
        this.lstEmpresaDestino.SelecionarEmpresaPadraoUsuario();
        this.grd.PreencherGrid(null);
        this.RefreshAngular();
    };
    C_ConCeg.prototype.LimparCamposMd = function () {
        this.txtResponsavel.Limpar();
        this.txtProduto.Limpar();
        this.grdMd.Grid.PreencherGrid(null);
        this.MovItens = [];
        //this.movimentacaoSelecionada = <any>{};
    };
    C_ConCeg.prototype.PreencherEmpresasDestino = function () {
        this.lstEmpresaDestino.RemoverTodosItens(true);
        var parametros = {};
        var retorno = this.ExecutarFuncaoServerSideSynch("PreencherListaEmpresas", parametros);
        for (var i = 0; i < retorno.length; i++) {
            this.lstEmpresaDestino.AdicionarItem(retorno[i].Fantasia, retorno[i].Codigo);
        }
    };
    C_ConCeg.prototype.PreencherEmpresasOrigem = function () {
        var parametros = {};
        var retorno = this.ExecutarFuncaoServerSideSynch("PreencherListaEmpresas", parametros);
        for (var i = 0; i < retorno.length; i++) {
            this.lstEmpresaOrigem.AdicionarItem(retorno[i].Fantasia, retorno[i].Codigo);
        }
    };
    C_ConCeg.prototype.OnClickBtnConferir = function (s, e) {
        try {
            if (!e.data) {
                return;
            }
            if (e.commandName == "conferir") { // mdConfCega
                this.LimparCamposMd();
                this.movimentacaoSelecionada = e.data;
                this.mdConfCega.Show();
                this.txtResponsavel.Focus();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConCeg.prototype.OnValidando = function (s, e) {
        if (this.txtProduto.GetText() == "") {
            MostrarAlerta("Insira o código do produto para podê-lo adicioná-lo na grade.");
            e.cancelar = true;
            this.txtProduto.Focus();
            return;
        }
    };
    C_ConCeg.prototype.OnClickConcluir = function () {
        if (this.txtResponsavel.GetText() == "") {
            MostrarAlerta("Insira um responsável pela conferência.");
            this.txtResponsavel.Focus();
            return;
        }
        if (this.grdMd.Grid.DataSource.length <= 0) {
            MostrarAlerta("Insira ao menos um item na movimentação.");
            this.txtProduto.Focus();
            return;
        }
        // Verificar config. Conferência de Transferência: Solicitar senha ao informar o Responsável
        if (ValoresSismoura.ConfiguracoesRetaguarda.senha_responsavel_conferencia) {
            this.mdLoginAcesso.Show();
            var parametros = { codigo: this.txtResponsavel.GetText() };
            this.txtUsuario.SetText(this.ExecutarFuncaoServerSideSynch("GetNomeUsuarioByCodigo", parametros));
            this.txtUsuario.Enabled = false;
            this.txtSenha.Focus();
        }
        else {
            this.realizarTransferencia();
        }
    };
    // pnBotoes
    C_ConCeg.prototype.OnClickGerar = function () {
        try {
            if (this.txtPeriodo.textBoxCalendarioInicio.GetDate() == null
                || this.txtPeriodo.textBoxCalendarioFim.GetDate() == null) {
                MostrarAlerta("Preencha o campo corretamente: Período");
                return;
            }
            var codEmpresasOrigem = this.lstEmpresaOrigem.GetValues();
            var empresasOrigem;
            if (codEmpresasOrigem) {
                empresasOrigem = codEmpresasOrigem.join(",");
            }
            var codEmpresasDestino = this.lstEmpresaDestino.GetValues();
            var empresasDestino;
            if (codEmpresasDestino) {
                empresasDestino = codEmpresasDestino.join(",");
            }
            var parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                empresasOrigem: empresasOrigem,
                empresasDestino: empresasDestino
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrade", parametros);
            this.grd.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConCeg.prototype.OnClickLimpar = function (s, e) {
        this.LimparCampos();
    };
    C_ConCeg.prototype.OnTxtProdutoPesquisando = function (s, e) {
        var _this = this;
        var codProduto = this.txtProduto.GetText();
        if (codProduto == "") {
            this.txtProduto.Focus();
            return;
        }
        var parametros = { codigo: codProduto };
        var retorno = this.ExecutarFuncaoServerSideSynch("PesquisandoProduto", parametros);
        if (retorno) {
            // Não pode transferir produtos controlados por lote (Farmácia)
            if (retorno.Controlado) {
                MostrarAlerta("Não é possível transferir produtos controlados!");
                e.Valido = false;
                return;
            }
            this.MovItem = {};
            // Monto a entidade
            this.MovItem.Cod_Produto = retorno.Codigo;
            // Vejo se o produto já está na grade
            var a = this.MovItens.filter(function (e) { return e.Cod_Produto == _this.MovItem.Cod_Produto; })[0];
            // Se já está na lista somo + 1 (RN)
            if (a) {
                a.Qtde += 1;
            }
            else {
                this.MovItem.Nome_Produto = retorno.Nome;
                this.MovItem.Qtde = 1;
                this.MovItem.Preco_Custo = retorno.Preco_Custo;
                this.MovItem.Preco_Venda = retorno.Preco_Produto;
                // Jogo na lista
                this.MovItens.push(this.MovItem);
            }
            e.Valido = false;
        }
        else {
            e.Valido = true;
        }
        // Limpo os campos da tela
        this.txtProduto.SetText("");
        this.txtProduto.Focus();
        this.RefreshAngular();
        this.grdMd.AtualizarGrid();
    };
    C_ConCeg.prototype.OnClickValidar = function () {
        if (!this.isNumeric(this.txtSenha.GetText())) {
            this.txtSenha.SetText("");
            this.txtSenha.Focus();
            MostrarAlerta("A senha permite apenas caracteres numéricos");
            return;
        }
        else { // Validar com WebMethod
            var parametros = {
                abreviacao: this.txtUsuario.GetText(),
                senha: this.txtSenha.GetText()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ValidarUsuario", parametros);
            if (!retorno) {
                MostrarAlerta("Operador não cadastrado ou senha inválida!");
                this.txtSenha.SetText("");
                this.txtSenha.Focus();
            }
            else {
                // VALIDOU TUDO O QUE TINHA PRA VALIDAR
                this.realizarTransferencia();
                this.txtUsuario.SetText("");
                this.txtSenha.SetText("");
                this.mdLoginAcesso.Hide();
                this.mdConfCega.Hide();
            }
        }
    };
    C_ConCeg.prototype.isNumeric = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    C_ConCeg.prototype.realizarTransferencia = function () {
        // Passar a movimentação
        var movimentacao = {};
        movimentacao.Codigo = 0; // GeraCodigo
        movimentacao.Data = this.DataServidor();
        movimentacao.Hora = this.DataServidor().toTimeString().split(' ')[0];
        movimentacao.Deposito = this.movimentacaoSelecionada.Deposito_Destino;
        movimentacao.Tipo = 4;
        if (this.txtResponsavel.GetText() == "") {
            movimentacao.Usuario = ValoresSismoura.UsuarioLogado;
        }
        else {
            movimentacao.Usuario = CNum(this.txtResponsavel.GetText());
        }
        movimentacao.Responsavel = CNum(this.txtResponsavel.GetText());
        movimentacao.Codigo_Saida_Originou = this.movimentacaoSelecionada.Codigo;
        movimentacao.Empresa_Origem = this.movimentacaoSelecionada.Cod_Empresa_Origem;
        movimentacao.Deposito_Origem = this.movimentacaoSelecionada.Deposito_Origem;
        movimentacao.Empresa_Destino = this.movimentacaoSelecionada.Cod_Empresa_Destino;
        movimentacao.Deposito_Destino = this.movimentacaoSelecionada.Deposito_Destino;
        // Passa uma lista de Movimentacao_Item
        var movimentacaoItens = [];
        var movItemAux;
        for (var i = 0; i < this.MovItens.length; i++) {
            movItemAux = {};
            movItemAux.Movimentacao = 0; // GeraCodigo
            movItemAux.Produto = CNum(this.MovItens[i].Cod_Produto);
            movItemAux.Qtde = CNum(this.MovItens[i].Qtde);
            movItemAux.Preco_Custo = CNum(this.MovItens[i].Preco_Custo);
            movItemAux.Preco_Venda = CNum(this.MovItens[i].Preco_Venda);
            movItemAux.Confirmado = true;
            movItemAux.Responsavel_Conferencia = CNum(this.txtResponsavel.GetText());
            movimentacaoItens.push(movItemAux);
        }
        movimentacao.Itens = movimentacaoItens;
        var parametros = {
            movimentacaoEntrada: movimentacao,
            tela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("Transferir", parametros);
        if (retorno) {
            MostrarMensagem("Transferência realizada com sucesso!");
            this.mdConfCega.Hide();
            this.OnClickGerar();
            this.movimentacaoSelecionada = {};
        }
        else {
            MostrarAlerta("Houve um erro ao processar a transferência, confira os dados.");
        }
    };
    return C_ConCeg;
}(MouraPageAngular));
var c_ConCeg = new C_ConCeg();
//# sourceMappingURL=C_ConCeg.js.map