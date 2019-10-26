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
var C_LimPro = /** @class */ (function (_super) {
    __extends(C_LimPro, _super);
    function C_LimPro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_LimPro.prototype, "gridProdutos", {
        get: function () {
            return window['gridProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "gridModal", {
        get: function () {
            return window['gridModal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "btnImportar", {
        get: function () {
            return window['btnImportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "btnVoltar", {
        get: function () {
            return window['btnVoltar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "btnAtualizar", {
        get: function () {
            return window['btnAtualizar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "btnAlterar", {
        get: function () {
            return window['btnAlterar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "txtGrupo", {
        get: function () {
            return window['txtGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "txtMarca", {
        get: function () {
            return window['txtMarca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "txtModelo", {
        get: function () {
            return window['txtModelo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "txtFornecedor", {
        get: function () {
            return window['txtFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "txtCor", {
        get: function () {
            return window['txtCor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "txtLinha", {
        get: function () {
            return window['txtLinha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "txtQuantidadPermitida", {
        get: function () {
            return window['txtQuantidadPermitida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "txtReferencia", {
        get: function () {
            return window['txtReferencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "txtQtdeMaxima", {
        get: function () {
            return window['txtQtdeMaxima_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "mdProdutos", {
        get: function () {
            return window["mdProdutos_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "cboOperacao", {
        get: function () {
            return window['cboOperacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "cboMarcado", {
        get: function () {
            return window['cboMarcado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "Entity", {
        get: function () {
            return this.GetScope()["Entity"];
        },
        set: function (value) {
            this.GetScope()["Entity"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "Produtos", {
        get: function () {
            return this.GetScope()["Produtos"];
        },
        set: function (value) {
            this.GetScope()["Produtos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "Selecionados", {
        get: function () {
            if (!this.GetScope()["Selecionados"]) {
                this.GetScope()["Selecionados"] = [];
            }
            return this.GetScope()["Selecionados"];
        },
        set: function (value) {
            this.GetScope()["Selecionados"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "ngMdProdutos", {
        get: function () {
            return this.GetScope()["ngMdProdutos"];
        },
        set: function (value) {
            this.GetScope()["ngMdProdutos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LimPro.prototype, "ngMdProduto", {
        get: function () {
            var that = this.GetScope()["ngMdProduto"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["ngMdProduto"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_LimPro.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnImportar) {
            adicionarEventoMoura(this.btnImportar.Click, this.OnClickbtnImportar, this);
        }
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnClickbtnGerar, this);
        }
        if (this.btnAtualizar) {
            adicionarEventoMoura(this.btnAtualizar.Click, this.OnClickbtnAtualizar, this);
        }
        if (this.btnVoltar) {
            adicionarEventoMoura(this.btnVoltar.Click, this.OnClickbtnVoltar, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickbtnGravar, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.OnClickbtnLimpar, this);
        }
        if (this.btnAlterar) {
            adicionarEventoMoura(this.btnAlterar.Click, this.OnClickbtnAlterar, this);
        }
        if (this.gridProdutos) {
            adicionarEventoMoura(this.gridProdutos.Grid.ExcluiuLinhaGrade, this.OnExcluiuProduto, this);
        }
        if (this.gridModal) {
            adicionarEventoMoura(this.gridModal.Validando, this.ValidarCampos, this);
        }
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Procurou, this.OnProcurouProduto, this);
        }
    };
    C_LimPro.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().OnAlterouQuantidade) {
            this.GetScope().OnAlterouQuantidade = $.proxy(this.OnAlterouQuantidade, this);
            this.GetScope().$watch(function (scope) {
                return scope.Entity.Quantidade_Maxima;
            }, this.GetScope().OnAlterouQuantidade);
        }
        this.Entity = {};
        setTimeout(function () {
            _this.LimparCampos();
            _this.Produtos = [];
            _this.PreencherGradeProdutos();
        }, 100);
        this.txtProduto.Focus();
    };
    C_LimPro.prototype.PreencherGradeModal = function () {
        try {
            var parametros;
            parametros = {
                produto: CNum(this.Entity.Produto),
                fornecedor: CNum(this.txtFornecedor.GetText()),
                grupo: CNum(this.txtGrupo.GetText()),
                marca: CNum(this.txtMarca.GetText()),
                modelo: CNum(this.txtModelo.GetText()),
                cor: CNum(this.txtCor.GetText()),
                linha: CNum(this.txtLinha.GetText()),
                referencia: this.txtReferencia.GetText(),
                descricao: this.txtDescricao.GetText()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GerarGradeModal", parametros);
            this.ngMdProdutos = retorno;
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_LimPro.prototype.PreencherGradeProdutos = function () {
        try {
            var parametros;
            parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Produtos = retorno;
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_LimPro.prototype.OnClickbtnImportar = function (s, e) {
        e.processOnServer = false;
        this.txtDescricao.Focus();
        this.mdProdutos.Show();
    };
    C_LimPro.prototype.OnClickbtnGerar = function (s, e) {
        e.processOnServer = false;
        this.PreencherGradeModal();
        this.gridModal.Grid.Grid.clearSelection();
        this.RefreshAngular();
    };
    C_LimPro.prototype.OnClickbtnAtualizar = function (s, e) {
        e.processOnServer = false;
        var selecionados = this.gridModal.Grid.GetSelectedRowsData;
        if (selecionados.length <= 0) {
            MostrarAlerta("Nenhum produto selecionado na grade!");
            return;
        }
        var produto = {};
        var produtos = [];
        for (var i = 0; i < selecionados.length; i++) {
            produto = {
                Produto: CNum(selecionados[i].Produto),
                Quantidade_Maxima: CNum(selecionados[i].Quantidade_Maxima)
            };
            produtos.push(produto);
        }
        this.Gravar(produtos);
        this.LimparCampos();
        this.Produtos = [];
        this.PreencherGradeProdutos();
        this.txtProduto.Focus();
        this.RefreshAngular();
    };
    C_LimPro.prototype.OnClickbtnVoltar = function (s, e) {
        e.processOnServer = false;
        this.limparModal();
        this.mdProdutos.Hide();
    };
    C_LimPro.prototype.OnClickbtnGravar = function (s, e) {
        if (this.ValidarBotaoGravar()) {
            var produto = {
                Codigo: CNum(this.Entity.Codigo),
                Produto: CNum(this.Entity.Produto),
                Quantidade_Maxima: CNum(this.Entity.Quantidade_Maxima),
                Data_Cadastro: ConvertToDate(this.Entity.Data_Cadastro)
            };
            this.Gravar([produto]);
            this.LimparCampos();
            this.Produtos = [];
            this.PreencherGradeProdutos();
            this.txtProduto.Focus();
            this.RefreshAngular();
        }
    };
    C_LimPro.prototype.OnClickbtnLimpar = function (s, e) {
        this.LimparCampos();
        this.Produtos = [];
        this.PreencherGradeProdutos();
        this.txtProduto.Focus();
        this.RefreshAngular();
    };
    C_LimPro.prototype.OnClickbtnAlterar = function (s, e) {
        if (this.ValidarBotaoAlterar()) {
            if (this.cboMarcado.GetText() == "<<Todos>>") {
                var selecionados = this.ngMdProdutos;
                this.AlterarQuantidadeMaxima(selecionados);
            }
            else if (this.cboMarcado.GetText() == "Sim") {
                var selecionados = this.gridModal.Grid.GetSelectedRowsData;
                this.AlterarQuantidadeMaxima(selecionados);
            }
            else if (this.cboMarcado.GetText() == "Não") {
                var selecionados = this.gridModal.Grid.GetUnselectedRowsData;
                this.AlterarQuantidadeMaxima(selecionados);
            }
        }
        this.gridModal.AtualizarGrid();
    };
    C_LimPro.prototype.AlterarQuantidadeMaxima = function (selecionados) {
        for (var i = 0; i < selecionados.length; i++) {
            if (this.cboOperacao.GetText() == "Somar") {
                if (this.txtQtdeMaxima.GetText().CNum() <= 100)
                    selecionados[i].Quantidade_Maxima += this.txtQtdeMaxima.GetText().CNum();
                else
                    selecionados[i].Quantidade_Maxima += 100;
            }
            else if (this.cboOperacao.GetText() == "Subtrair") {
                selecionados[i].Quantidade_Maxima -= this.txtQtdeMaxima.GetText().CNum();
                if (selecionados[i].Quantidade_Maxima < 1)
                    selecionados[i].Quantidade_Maxima = 1;
            }
            else if (this.cboOperacao.GetText() == "Substituir") {
                selecionados[i].Quantidade_Maxima = this.txtQtdeMaxima.GetText().CNum();
            }
        }
    };
    C_LimPro.prototype.Gravar = function (produtos) {
        try {
            var parametros = {
                produtos: produtos,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("Gravar", parametros);
            (retorno) ? MostrarMensagem("Registro gravado com sucesso!") : MostrarAlerta("Erro ao gravar o registro!");
            this.Entity.Quantidade_Maxima = 1;
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_LimPro.prototype.OnProcurouProduto = function () {
        var that = this;
        var produto = this.Produtos.filter(function (prod) {
            return prod.Produto == CNum(that.Entity.Produto);
        });
        if (produto.length > 0) {
            this.Entity = produto[0];
        }
    };
    C_LimPro.prototype.ValidarCampos = function (s, e) {
        var entity = e.item;
        var entityOld = cloneObject(e.oldRowValue);
        if (CNum(e.valorAlterado) <= 0) {
            entity.Quantidade_Maxima = 1;
            e.cancelar = true;
            return false;
        }
        this.gridModal.Grid.SelectRows(e.item.Produto, true);
        return true;
    };
    C_LimPro.prototype.OnExcluiuProduto = function (s, e) {
        var parametros = {
            codigo: e.item.Codigo,
            tela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("RemoverCartao", parametros);
        (retorno) ? MostrarMensagem("Registro apagado com sucesso!") : MostrarAlerta("Erro ao apagar o registro!");
        this.LimparCampos();
    };
    C_LimPro.prototype.ValidarBotaoGravar = function () {
        if (this.txtProduto.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o produto!");
            this.txtProduto.Focus();
            return false;
        }
        if (this.txtQuantidadPermitida.GetText().CNum() <= 0) {
            MostrarAlerta("A quantidade máxima deve ser informada!");
            this.txtQuantidadPermitida.Focus();
            return false;
        }
        return true;
    };
    C_LimPro.prototype.ValidarBotaoAlterar = function () {
        if (this.txtQtdeMaxima.GetText().CNum() <= 0) {
            MostrarAlerta("Informe a quantidade máxima");
            this.txtQtdeMaxima.Focus();
            return false;
        }
        if (this.cboOperacao.GetSelectedIndex() == -1) {
            MostrarAlerta("Selecione a operação desejada!");
            this.cboOperacao.Focus();
            return false;
        }
        return true;
    };
    C_LimPro.prototype.limparModal = function () {
        this.txtDescricao.Limpar();
        this.txtGrupo.Limpar();
        this.txtMarca.Limpar();
        this.txtModelo.Limpar();
        this.txtFornecedor.Limpar();
        this.txtReferencia.Limpar();
        this.txtCor.Limpar();
        this.txtLinha.Limpar();
        this.ngMdProdutos = [];
        this.RefreshAngular();
    };
    C_LimPro.prototype.LimparCampos = function () {
        this.Entity = {};
        this.Entity.Quantidade_Maxima = 1;
        this.Selecionados = [];
        this.gridModal.Grid.SelectRows(null, false);
        this.Entity.Produto = null;
        this.limparModal();
        this.RefreshAngular();
        //this.txtQuantidadPermitida.QuantidadeCasas = ValoresSismoura.CasasDecimaisEstoque;
    };
    C_LimPro.prototype.OnAlterouQuantidade = function () {
        if (this.Entity.Quantidade_Maxima <= 0) {
            this.Entity.Quantidade_Maxima = 1;
            this.RefreshAngular();
        }
    };
    return C_LimPro;
}(MouraPageAngular));
var c_LimPro = new C_LimPro();
//# sourceMappingURL=C_LimPro.js.map