var ConcluirPagamento = /** @class */ (function () {
    function ConcluirPagamento(telaVenda) {
        this.TelaVenda = telaVenda;
    }
    Object.defineProperty(ConcluirPagamento.prototype, "TelaVenda", {
        get: function () {
            return this._telaVenda;
        },
        set: function (value) {
            this._telaVenda = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcluirPagamento.prototype, "TelaCartao", {
        get: function () {
            if (!this._telaCartao) {
                this._telaCartao = new InformarCartaoVenda(this.TelaVenda, this);
            }
            return this._telaCartao;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcluirPagamento.prototype, "txtTotalVenda", {
        get: function () {
            return window['txtTotalVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcluirPagamento.prototype, "txtAPagar", {
        get: function () {
            return window['txtAPagar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcluirPagamento.prototype, "txtValorRecebido", {
        get: function () {
            return window['txtValorRecebido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcluirPagamento.prototype, "txtTroco", {
        get: function () {
            return window['txtTroco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcluirPagamento.prototype, "txtDescontoP", {
        get: function () {
            return window['txtDescontoP_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcluirPagamento.prototype, "txtDescontoR", {
        get: function () {
            return window['txtDescontoR_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcluirPagamento.prototype, "txtValorDinheiro", {
        get: function () {
            return window['txtValorDinheiro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcluirPagamento.prototype, "txtValorCheque", {
        get: function () {
            return window['txtValorCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcluirPagamento.prototype, "txtValorCartao", {
        get: function () {
            return window['txtValorCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcluirPagamento.prototype, "txtValorCliente", {
        get: function () {
            return window['txtValorCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcluirPagamento.prototype, "mdConcluir", {
        get: function () {
            return window['mdConcluir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcluirPagamento.prototype, "btnPagVoltar", {
        get: function () {
            return window['btnPagVoltar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcluirPagamento.prototype, "btnPagConcluirVenda", {
        get: function () {
            return window['btnPagConcluirVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcluirPagamento.prototype, "dvPagMain", {
        get: function () {
            return $("#dvPagMain")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcluirPagamento.prototype, "imgDinheiro", {
        get: function () {
            return $("#imgDinheiro")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcluirPagamento.prototype, "imgCheque", {
        get: function () {
            return $("#imgCheque")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcluirPagamento.prototype, "imgCartao", {
        get: function () {
            return $("#imgCartao")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcluirPagamento.prototype, "imgCrediario", {
        get: function () {
            return $("#imgCrediario")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcluirPagamento.prototype, "hdnEmitiuSAT", {
        get: function () {
            return $("#hdnEmitiuSAT")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConcluirPagamento.prototype, "hdnVendaAtiva", {
        get: function () {
            return $("#hdnVendaAtiva")[0];
        },
        enumerable: true,
        configurable: true
    });
    ConcluirPagamento.prototype.Init = function () {
        if (this.btnPagConcluirVenda) {
            adicionarEventoMoura(this.btnPagConcluirVenda.Click, this.OnClickBotaoConcluir, this);
        }
        if (this.btnPagVoltar) {
            adicionarEventoMoura(this.btnPagVoltar.Click, this.OnClickBotaoVoltar, this);
        }
        if (this.txtValorDinheiro) {
            adicionarEventoJQuery(this.txtValorDinheiro.Textbox, "keydown", this.OnKeyDownValorDinheiro, this);
            adicionarEventoJQuery(this.txtValorDinheiro.Textbox, "change", this.OnChangeValoresPagamento, this);
        }
        if (this.txtValorCheque) {
            adicionarEventoJQuery(this.txtValorCheque.Textbox, "keydown", this.OnKeyDownValorCheque, this);
            adicionarEventoJQuery(this.txtValorCheque.Textbox, "change", this.OnChangeValoresPagamento, this);
        }
        if (this.TelaCartao.mdCartao) {
            adicionarEventoDevExpress(this.TelaCartao.mdCartao.ModalDialog.Closing, this.OnFechouModalCartao, this);
        }
        if (this.imgDinheiro) {
            adicionarEventoJQuery(this.imgDinheiro, "click", this.OnClickImagemDinheiro, this);
        }
        if (this.imgCheque) {
            adicionarEventoJQuery(this.imgCheque, "click", this.OnClickImagemCheque, this);
        }
        if (this.imgCartao) {
            adicionarEventoJQuery(this.imgCartao, "click", this.OnClickImagemCartao, this);
        }
        if (this.txtDescontoP && this.txtDescontoP.Textbox) {
            adicionarEventoJQuery(this.txtDescontoP.Textbox, "change", this.OnChangeDescontoPorc, this);
        }
        if (this.txtDescontoR && this.txtDescontoR.Textbox) {
            adicionarEventoJQuery(this.txtDescontoR.Textbox, "change", this.OnChangeDescontoValor, this);
        }
        this.TelaCartao.Init();
        this.CriarAtalhosModal();
    };
    ConcluirPagamento.prototype.AbrirTelaPagamento = function (totalVenda) {
        this.hdnEmitiuSAT.value = "";
        this.IniciarTelaPagamento(totalVenda);
        this.mdConcluir.Show();
        this.txtDescontoP.Focus();
    };
    ConcluirPagamento.prototype.IniciarTelaPagamento = function (totalVenda) {
        var zero = 0;
        this.txtTotalVenda.SetText(totalVenda.Format(2));
        this.txtAPagar.SetText(zero.Format(2));
        this.txtValorRecebido.SetText(zero.Format(2));
        this.txtTroco.SetText(zero.Format(2));
        this.txtDescontoP.SetText(zero.Format(2));
        this.txtDescontoR.SetText(zero.Format(2));
        this.txtValorDinheiro.SetText(zero.Format(2));
        this.txtValorCartao.SetText(zero.Format(2));
        this.txtValorCheque.SetText(zero.Format(2));
        this.txtValorCliente.SetText(zero.Format(2));
        this.CalculaTotaisVenda();
    };
    ConcluirPagamento.prototype.CalculaTotaisVenda = function () {
        var valorAPagar = this.txtTotalVenda.GetText().CNum() - this.txtDescontoR.GetText().CNum();
        if (valorAPagar < 0) {
            valorAPagar = 0;
        }
        this.txtAPagar.SetText(valorAPagar.Format(2));
        //Calcula a soma do valor do cartão
        this.TotalCartao();
        var valorRecebido;
        valorRecebido = this.txtValorDinheiro.GetText().CNum() + this.txtValorCheque.GetText().CNum() + this.txtValorCliente.GetText().CNum() + this.txtValorCartao.GetText().CNum();
        this.txtValorRecebido.SetText(valorRecebido.Format(2));
        this.txtTroco.SetText((valorRecebido - valorAPagar).Format(2));
    };
    ConcluirPagamento.prototype.CalculaDesconto = function (alterouPorcentagem) {
        var valorVenda = this.txtTotalVenda.GetText().CNum();
        var desconto = 0;
        if (alterouPorcentagem) {
            //Se alterou a porcentagem, deve calcular o valor do desconto
            if (this.txtDescontoP.GetText().CNum() >= 100) {
                MostrarAlerta("Desconto não pode ser maior ou igual a 100%");
                desconto = 0;
                this.txtDescontoP.SetText((0).Format(2));
                this.txtDescontoP.Focus();
            }
            else {
                desconto = valorVenda * (this.txtDescontoP.GetText().CNum() / 100);
            }
            this.txtDescontoR.SetText(desconto.Format(2));
        }
        else {
            //Se alterou o valor do desconto, deve calcular a porcentagem
            if (this.txtDescontoR.GetText().CNum() >= valorVenda || valorVenda <= 0) {
                MostrarAlerta("Desconto não pode ser maior ou igual a 100%");
                desconto = 0;
                this.txtDescontoR.SetText((0).Format(2));
                this.txtDescontoR.Focus();
            }
            else {
                desconto = (this.txtDescontoR.GetText().CNum() / valorVenda) * 100;
            }
            this.txtDescontoP.SetText(desconto.Format(2));
        }
        this.CalculaTotaisVenda();
    };
    ConcluirPagamento.prototype.TotalCartao = function () {
        var lista = this.TelaCartao.CartoesInformados;
        var soma = 0;
        for (var x = 0; x <= lista.length - 1; x++) {
            soma += lista[x].Valor;
        }
        this.txtValorCartao.SetText(soma.Format(2));
    };
    ConcluirPagamento.prototype.OnChangeDescontoPorc = function () {
        this.CalculaDesconto(true);
    };
    ConcluirPagamento.prototype.OnChangeDescontoValor = function () {
        this.CalculaDesconto(false);
    };
    ConcluirPagamento.prototype.OnClickBotaoVoltar = function (s, e) {
        e.processOnServer = false;
        this.mdConcluir.Hide();
    };
    ConcluirPagamento.prototype.OnClickBotaoConcluir = function (s, e) {
        e.processOnServer = false;
        this.FinalizarVenda();
    };
    ConcluirPagamento.prototype.CalculaTotalPagamentoRestante = function () {
        var retorno;
        this.CalculaTotaisVenda();
        retorno = this.txtAPagar.GetText().CNum() - this.txtValorRecebido.GetText().CNum();
        if (retorno < 0) {
            retorno = 0;
        }
        return retorno;
    };
    ConcluirPagamento.prototype.SetValorPagamentoTotal = function (textbox) {
        textbox.SetText(this.CalculaTotalPagamentoRestante().Format(2));
        //textbox.SelectAll();
        this.CalculaTotaisVenda();
    };
    ConcluirPagamento.prototype.OnKeyDownValorDinheiro = function (e) {
        var tecla = getTeclaCodeEvent(e);
        if (tecla && tecla == 187) {
            this.SetValorPagamentoTotal(this.txtValorDinheiro);
        }
    };
    ConcluirPagamento.prototype.OnKeyDownValorCheque = function (e) {
        var tecla = getTeclaCodeEvent(e);
        if (tecla && tecla == 187) {
            this.SetValorPagamentoTotal(this.txtValorCheque);
        }
    };
    ConcluirPagamento.prototype.OnChangeValoresPagamento = function () {
        this.CalculaTotaisVenda();
    };
    ConcluirPagamento.prototype.ValidaFinalizarVenda = function () {
        this.CalculaTotaisVenda();
        if (this.txtValorRecebido.GetText().CNum() < this.txtAPagar.GetText().CNum()) {
            MostrarAlerta("Informe o valor recebido");
            return false;
        }
        return true;
    };
    ConcluirPagamento.prototype.FinalizarVenda = function () {
        if (!this.ValidaFinalizarVenda()) {
            return;
        }
        //verifica se o PDV está configurado para emitir SAT
        if (this.TelaVenda.Configuracoes.Documento_Fiscal_Venda == 1 && String.IsNullOrWhiteSpace(this.hdnEmitiuSAT.value)) {
            this.EmitirSAT();
            return;
        }
        this.GravarVenda();
    };
    ConcluirPagamento.prototype.GravarVenda = function () {
        try {
            if (!this.ValidaFinalizarVenda()) {
                return;
            }
            var retorno;
            var parametros;
            var venda = {};
            if (!String.IsNullOrWhiteSpace(this.hdnVendaAtiva.value)) {
                venda.Codigo = this.hdnVendaAtiva.value.CNum();
            }
            else {
                venda.Codigo = 0;
            }
            venda.Acrescimo = 0;
            venda.Caixa = this.TelaVenda.InfVenda.Caixa;
            venda.Cancelada = false;
            venda.Cliente = 0;
            venda.Cpf_Cliente = "";
            venda.Desconto = this.txtDescontoR.GetText().CNum();
            venda.Empresa = this.TelaVenda.InfVenda.Empresa;
            venda.Deposito = this.TelaVenda.InfVenda.DepositoPadrao;
            venda.Endereco_Cliente = "";
            venda.Fone_Cliente = "";
            venda.Nome_Cliente = "";
            venda.Operador = ValoresSismoura.UsuarioLogado;
            venda.Pdv = this.TelaVenda.InfVenda.PDV;
            venda.Texto_Final = "";
            venda.Valor_Cartao = this.txtValorCartao.GetText().CNum();
            venda.Valor_Cheque_Prazo = 0;
            venda.Valor_Cheque_Vista = this.txtValorCheque.GetText().CNum();
            venda.Valor_Cliente = this.txtValorCliente.GetText().CNum();
            venda.Valor_Dinheiro = this.txtValorDinheiro.GetText().CNum();
            venda.Valor_Contra_Vale = 0;
            venda.Valor_Credito = 0;
            venda.Valor_Credito_Utilizado = 0;
            venda.Valor = this.txtTotalVenda.GetText().CNum();
            venda.Valor_Final = this.txtAPagar.GetText().CNum();
            venda.Valor_Ponto = 0;
            venda.Valor_Ticket = 0;
            venda.Valor_Troca = 0;
            venda.Valor_Troco = this.txtTroco.GetText().CNum();
            venda.Vendedor = this.TelaVenda.txtVendedor.GetText().CNum();
            parametros = {
                vendaEntity: JSON.stringify(venda),
                codPDV: this.TelaVenda.InfVenda.PDV,
                codCaixa: this.TelaVenda.InfVenda.Caixa,
                codEmpresa: this.TelaVenda.InfVenda.Empresa,
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado,
                produtos: this.TelaVenda.ItensVenda,
                cartoes: this.TelaCartao.CartoesInformados
            };
            abrirEspera("Aguarde. Finalizando a Venda");
            this.TelaVenda.ExecutarFuncaoServerSideAsynch("FinalizarVenda", parametros, this.OnFinalizouVenda, this.OnErroFinalizouVenda, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    ConcluirPagamento.prototype.OnFinalizouVenda = function (d) {
        fecharEspera();
        var retorno = JSON.parse(d).d;
        if (!retorno) {
            MostrarError("Ocorreu um erro ao finalizar a venda!");
            this.txtValorDinheiro.Focus();
            return;
        }
        var msgErro = retorno['MensagemErro'];
        var msgAlerta = retorno['MensagemAlerta'];
        if (!String.IsNullOrWhiteSpace(msgErro)) {
            MostrarAlerta(msgErro);
            this.txtValorDinheiro.Focus();
            return;
        }
        MostrarMensagem("Venda finalizada com sucesso!");
        //Mensagem de alerta deve finalizar a venda corretamente
        if (!String.IsNullOrWhiteSpace(msgAlerta)) {
            MostrarAlerta(msgAlerta);
        }
        this.IniciarTelaPagamento(0);
        this.mdConcluir.Hide();
        this.TelaVenda.NovaVenda();
    };
    ConcluirPagamento.prototype.OnErroFinalizouVenda = function (erro) {
        fecharEspera();
        this.txtValorDinheiro.Focus();
        LogarExceptionAjax(erro);
    };
    ConcluirPagamento.prototype.EmitirSAT = function () {
        if (!this.ValidaFinalizarVenda()) {
            return;
        }
        var retorno;
        var parametros;
        var requisicao = {};
        var produto = {};
        requisicao.Cod_Cliente = 0;
        requisicao.Nome = "";
        requisicao.Cpf_Cnpj = "";
        requisicao.Endereco = "";
        requisicao.Numero = "";
        requisicao.Bairro = "";
        requisicao.Cep = "";
        requisicao.Municipio = "";
        requisicao.Uf = "";
        requisicao.Data_Emissao = null;
        requisicao.Total_Produto = this.txtTotalVenda.GetText().CNum();
        requisicao.Valor_Desconto = this.txtDescontoR.GetText().CNum();
        requisicao.Outras_Despesas = 0;
        requisicao.Valor_Troco = this.txtTroco.GetText().CNum();
        requisicao.Valor_Total = this.txtAPagar.GetText().CNum();
        requisicao.Cancelado = false;
        requisicao.Venda = 0;
        requisicao.Vendedor = this.TelaVenda.txtVendedor.GetText().CNum();
        requisicao.Dados_Adicionais = "";
        requisicao.Valor_Total_Ibpt = 0;
        requisicao.Cod_Pdv = this.TelaVenda.InfVenda.PDV;
        requisicao.Status = 1;
        requisicao.Nome_Computador = "";
        requisicao.Produtos = [];
        var listaProdutos = this.TelaVenda.ItensVenda;
        for (var x = 0; x <= listaProdutos.length - 1; x++) {
            produto = {};
            produto.Num_Item = x + 1;
            produto.Produto = listaProdutos[x].Codigo;
            produto.Codigo_Barra = "";
            produto.Descricao = listaProdutos[x].Descricao;
            produto.Quantidade = listaProdutos[x].Quantidade;
            produto.Unitario = listaProdutos[x].Unitario;
            produto.Total = listaProdutos[x].Total;
            produto.Unidade = listaProdutos[x].Unidade;
            produto.Valor_Desconto = 0;
            produto.Valor_Outras_Despesas = 0;
            produto.Cod_Anp = "";
            produto.Observacao_Produto = "";
            produto.Codigo_Barra = listaProdutos[x].Codigo_Barra;
            requisicao.Produtos.push(produto);
        }
        requisicao.Pagamentos = [];
        if (this.txtValorDinheiro.GetText().CNum() > 0) {
            requisicao.Pagamentos.push(this.CriarPagamentoSAT(1, this.txtValorDinheiro.GetText().CNum()));
        }
        if (this.txtValorCheque.GetText().CNum() > 0) {
            requisicao.Pagamentos.push(this.CriarPagamentoSAT(2, this.txtValorCheque.GetText().CNum()));
        }
        if (this.txtValorCartao.GetText().CNum() > 0) {
            requisicao.Pagamentos.push(this.CriarPagamentoSAT(3, this.txtValorCartao.GetText().CNum()));
        }
        if (this.txtValorCliente.GetText().CNum() > 0) {
            requisicao.Pagamentos.push(this.CriarPagamentoSAT(5, this.txtValorCliente.GetText().CNum()));
        }
        parametros = {
            requisicao: requisicao,
            nomeTela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        abrirEspera("Aguarde. Emitindo SAT");
        this.TelaVenda.ExecutarFuncaoServerSideAsynch("EmitirSAT", parametros, this.OnEmitiuSAT, this.OnErroEmitirSAT, this);
    };
    ConcluirPagamento.prototype.catch = function (ex) {
        LogarException(ex);
    };
    /**
     * Cria uma classe do tipo Sat_Requisicao_Nf_Pagamento para emitir o SAT
     * idPagamento: Dinheiro = 1, Cheque = 2
                      Cartao_Credito = 3, Cartao_Debito = 4 ,
                      Cartao_Credito_Loja = 5, Vale_Alimentacao = 10
                      Vale_Refeicao = 11, Vale_Presente = 12
                      Vale_Combustivel = 13, Outros = 99
     */
    ConcluirPagamento.prototype.CriarPagamentoSAT = function (idPagamento, valor) {
        var pagamento = {};
        pagamento.Pagamento = idPagamento;
        pagamento.Valor = valor;
        return pagamento;
    };
    ConcluirPagamento.prototype.OnEmitiuSAT = function (d) {
        fecharEspera();
        var retorno = JSON.parse(d).d;
        var mensagemErro = retorno['Erro'];
        if (!String.IsNullOrWhiteSpace(mensagemErro)) {
            MostrarAlerta(mensagemErro);
            return;
        }
        this.hdnEmitiuSAT.value = "S";
        this.hdnVendaAtiva.value = retorno['Venda'];
        MostrarMensagem("SAT emitido com sucesso");
        this.FinalizarVenda();
    };
    ConcluirPagamento.prototype.OnErroEmitirSAT = function (erro) {
        fecharEspera();
        this.txtValorDinheiro.Focus();
        LogarExceptionAjax(erro);
    };
    ConcluirPagamento.prototype.AbrirModalCartao = function () {
        this.TelaCartao.AbrirModalCartao();
    };
    ConcluirPagamento.prototype.OnFechouModalCartao = function (s, e) {
        try {
            this.CalculaTotaisVenda();
            this.txtDescontoP.Focus();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    ConcluirPagamento.prototype.OnClickImagemDinheiro = function () {
        this.SetValorPagamentoTotal(this.txtValorDinheiro);
    };
    ConcluirPagamento.prototype.OnClickImagemCheque = function () {
        this.SetValorPagamentoTotal(this.txtValorCheque);
    };
    ConcluirPagamento.prototype.OnClickImagemCartao = function () {
        this.TelaCartao.AbrirModalCartao();
    };
    ConcluirPagamento.prototype.CriarAtalhosModal = function () {
        adicionarEventoJQuery(this.dvPagMain, "keydown", this.KeyESC, this);
        adicionarEventoJQuery(this.dvPagMain, "keydown", this.KeyF5, this);
        adicionarEventoJQuery(this.dvPagMain, "keydown", this.KeyF6, this);
        adicionarEventoJQuery(this.dvPagMain, "keydown", this.KeyF7, this);
        adicionarEventoJQuery(this.dvPagMain, "keydown", this.KeyF9, this);
    };
    ConcluirPagamento.prototype.KeyESC = function (e) {
        var tecla = getTeclaCodeEvent(e);
        if (tecla != enmKeyCode.ESC) {
            return;
        }
        StopPropagationJQuery(e);
        this.btnPagVoltar.DoClick();
    };
    ConcluirPagamento.prototype.KeyF5 = function (e) {
        var tecla = getTeclaCodeEvent(e);
        if (tecla != enmKeyCode.F5) {
            return;
        }
        if (e.ctrlKey || e.altKey) {
            return;
        }
        StopPropagationJQuery(e);
        this.FinalizarVenda();
    };
    ConcluirPagamento.prototype.KeyF6 = function (e) {
        var tecla = getTeclaCodeEvent(e);
        if (tecla != enmKeyCode.F6) {
            return;
        }
        if (e.ctrlKey || e.altKey) {
            return;
        }
        StopPropagationJQuery(e);
        this.txtValorDinheiro.Focus();
    };
    ConcluirPagamento.prototype.KeyF7 = function (e) {
        var tecla = getTeclaCodeEvent(e);
        if (tecla != enmKeyCode.F7) {
            return;
        }
        if (e.ctrlKey || e.altKey) {
            return;
        }
        StopPropagationJQuery(e);
        this.txtValorCheque.Focus();
    };
    ConcluirPagamento.prototype.KeyF9 = function (e) {
        var tecla = getTeclaCodeEvent(e);
        if (tecla != enmKeyCode.F9) {
            return;
        }
        if (e.ctrlKey || e.altKey) {
            return;
        }
        StopPropagationJQuery(e);
        this.TelaCartao.AbrirModalCartao();
    };
    return ConcluirPagamento;
}());
//# sourceMappingURL=ConcluirPagamento.js.map