var ComandaVenda = /** @class */ (function () {
    function ComandaVenda(telaVenda) {
        this.TelaVenda = telaVenda;
    }
    Object.defineProperty(ComandaVenda.prototype, "TelaVenda", {
        get: function () {
            return this._telaVenda;
        },
        set: function (value) {
            this._telaVenda = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComandaVenda.prototype, "mdComanda", {
        get: function () {
            return window['mdComanda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComandaVenda.prototype, "btnGravarComanda", {
        get: function () {
            return window['btnGravarComanda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComandaVenda.prototype, "btnFecharComanda", {
        get: function () {
            return window['btnFecharComanda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComandaVenda.prototype, "txtComanda", {
        get: function () {
            return window['txtComanda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    ComandaVenda.prototype.Init = function () {
        if (this.btnFecharComanda) {
            adicionarEventoMoura(this.btnFecharComanda.Click, this.OnClickBotaoFecharComanda, this);
        }
        if (this.btnGravarComanda) {
            adicionarEventoMoura(this.btnGravarComanda.Click, this.OnClickBotaoGravarComanda, this);
        }
        if (this.txtComanda) {
            adicionarEventoMoura(this.txtComanda.TextChanged, this.OnKeyDownComanda, this);
        }
    };
    ComandaVenda.prototype.AbrirComanda = function () {
        this.mdComanda.Show();
        this.txtComanda.Focus();
    };
    ComandaVenda.prototype.GravarComanda = function (comanda, codEmpresa, codVendedor) {
        try {
            var item;
            var produtosVenda = this.TelaVenda.ItensVenda;
            if (produtosVenda.length <= 0) {
                MostrarAlerta("Nenhum item na venda para gravar a comanda!");
                return;
            }
            var lista = [];
            for (var x = 0; x <= produtosVenda.length - 1; x++) {
                item = {};
                item.Codigo = comanda;
                item.Vendedor = codVendedor;
                item.Item = 0;
                item.Produto = produtosVenda[x].Codigo;
                item.Quantidade = produtosVenda[x].Quantidade;
                item.Unitario = produtosVenda[x].Unitario;
                item.Total = produtosVenda[x].Total;
                item.Cancelado = false;
                item.Preco_Custo = produtosVenda[x].Preco_Custo;
                item.Unidade = produtosVenda[x].Unidade;
                item.Taxa_Tributaria = produtosVenda[x].Taxa_Tributaria;
                item.Comissao = 0;
                item.Observacao = "";
                item.Cliente = 0;
                item.Mesa = null;
                item.Data = null;
                item.Numero_Entrega = null;
                item.Atendimento = null;
                item.Finalizar_Atendimento = false;
                item.Codigo_Os = null;
                item.Empresa = codEmpresa;
                item.Pdv = this.TelaVenda.InfVenda.PDV;
                lista.push(item);
            }
            var retorno;
            var parametros;
            parametros = {
                comanda: comanda,
                codEmpresa: codEmpresa,
                codVendedor: codVendedor,
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado,
                produtos: lista
            };
            retorno = this.TelaVenda.ExecutarFuncaoServerSideSynch("GravarComanda", parametros);
            if (!String.IsNullOrWhiteSpace(retorno)) {
                MostrarAlerta(retorno);
                return false;
            }
            else {
                return true;
            }
        }
        catch (ex) {
            LogarException(ex);
            return false;
        }
    };
    ComandaVenda.prototype.OnClickBotaoFecharComanda = function (s, e) {
        e.processOnServer = false;
        this.LimparCamposComanda();
        this.mdComanda.Hide();
    };
    ComandaVenda.prototype.OnClickBotaoGravarComanda = function (s, e) {
        e.processOnServer = false;
        if (String.IsNullOrWhiteSpace(this.txtComanda.GetText())) {
            MostrarAlerta("Informe a descrição da comanda!");
            this.txtComanda.Focus();
            return;
        }
        if (this.GravarComanda(this.txtComanda.GetText(), this.TelaVenda.InfVenda.Empresa, this.TelaVenda.txtVendedor.GetText().CNum())) {
            MostrarMensagem("Comanda gravada com sucesso");
            this.LimparCamposComanda();
            this.mdComanda.Hide();
            this.TelaVenda.NovaVenda();
        }
    };
    ComandaVenda.prototype.LimparCamposComanda = function () {
        this.txtComanda.Limpar();
    };
    ComandaVenda.prototype.OnKeyDownComanda = function (e) {
        var tecla = getTeclaCodeEvent(e);
        if (tecla && tecla == 13) {
            e.cancelBubble = true;
            e.returnValue = false;
            //e.stopPropagation works in Firefox.
            if (e.stopPropagation) {
                e.stopPropagation();
                e.preventDefault();
            }
            this.btnGravarComanda.DoClick();
        }
    };
    return ComandaVenda;
}());
//# sourceMappingURL=ComandaVenda.js.map