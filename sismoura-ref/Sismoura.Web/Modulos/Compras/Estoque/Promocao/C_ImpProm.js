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
var C_ImpProm = /** @class */ (function (_super) {
    __extends(C_ImpProm, _super);
    function C_ImpProm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ImpProm.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpProm.prototype, "btnAlterar", {
        get: function () {
            return window['btnAlterar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpProm.prototype, "btnAtualizar", {
        get: function () {
            return window['btnAtualizar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpProm.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpProm.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpProm.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpProm.prototype, "txtFornecedor", {
        get: function () {
            return window['txtFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpProm.prototype, "txtGrupo", {
        get: function () {
            return window['txtGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpProm.prototype, "txtSubGrupo", {
        get: function () {
            return window['txtSubGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpProm.prototype, "txtCodReferencia", {
        get: function () {
            return window['txtCodReferencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpProm.prototype, "txtReferencia", {
        get: function () {
            return window['txtReferencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpProm.prototype, "txtMarca", {
        get: function () {
            return window['txtMarca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpProm.prototype, "txtCor", {
        get: function () {
            return window['txtCor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpProm.prototype, "txtLinha", {
        get: function () {
            return window['txtLinha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpProm.prototype, "txtModelo", {
        get: function () {
            return window['txtModelo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpProm.prototype, "cboMarcado", {
        get: function () {
            return window['cboMarcado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpProm.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpProm.prototype, "txtPorcentagem", {
        get: function () {
            return window['txtPorcentagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpProm.prototype, "txtValor", {
        get: function () {
            return window['txtValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpProm.prototype, "cboOperacao", {
        get: function () {
            return window['cboOperacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpProm.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpProm.prototype, "lstSemana", {
        get: function () {
            return window['lstSemana_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ImpProm.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.Gerar, this);
        }
        if (this.btnAlterar) {
            adicionarEventoMoura(this.btnAlterar.Click, this.OnClickBtnAlterar, this);
        }
        if (this.btnAtualizar) {
            adicionarEventoMoura(this.btnAtualizar.Click, this.OnClickBtnAtualizar, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.OnClickBtnLimpar, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.EditouItemGrade, this.OnEditouItem, this);
        }
    };
    C_ImpProm.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        //Utilizar linha ou ser estabelecimento LojaRoupa
        if (!ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Campo_Linha || ValoresSismoura.ConfiguracoesRetaguarda.Estabelecimento == 2) {
            this.txtLinha.Visible = false;
        }
        this.txtReferencia.Visible = !ValoresSismoura.UsarCadastroReferencia;
        this.txtCodReferencia.Visible = ValoresSismoura.UsarCadastroReferencia;
    };
    C_ImpProm.prototype.Gerar = function (s, e) {
        e.processOnServer = false;
        this.PreencherGrade();
    };
    C_ImpProm.prototype.PreencherGrade = function () {
        try {
            var parametros;
            this.grid.deselectAll();
            parametros = {
                codFornecedor: this.txtFornecedor.GetText().CNum(),
                codGrupo: this.txtGrupo.GetText().CNum(),
                codSubGrupo: this.txtSubGrupo.GetText().CNum(),
                codReferencia: this.txtCodReferencia.GetText().CNum(),
                codMarca: this.txtMarca.GetText().CNum(),
                codCor: this.txtCor.GetText().CNum(),
                codModelo: this.txtModelo.GetText().CNum(),
                descricao: this.txtDescricao.GetText(),
                codLinha: this.txtLinha.GetText().CNum(),
                referencia: this.txtReferencia.GetText()
            };
            var Produtos = this.ExecutarFuncaoServerSideSynch("GetProdutos", parametros);
            this.grid.PreencherGrid(Produtos);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ImpProm.prototype.OnClickBtnAlterar = function (s, e) {
        e.processOnServer = false;
        MsgBoxJS("Deseja Continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespostaBtnAlterar, this));
    };
    C_ImpProm.prototype.OnClickBtnAtualizar = function (s, e) {
        e.processOnServer = false;
        MsgBoxJS("Deseja Continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespostaBtnAtualizar, this));
    };
    C_ImpProm.prototype.OnClickBtnLimpar = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
    };
    C_ImpProm.prototype.LimparCampos = function () {
        //this.grid.deselectAll();
        this.txtDescricao.SetText("");
        this.txtFornecedor.Limpar();
        this.txtGrupo.Limpar();
        this.txtSubGrupo.Limpar();
        this.txtLinha.Limpar();
        this.txtCodReferencia.Limpar();
        this.txtReferencia.SetText("");
        this.txtMarca.Limpar();
        this.txtCor.Limpar();
        this.txtModelo.Limpar();
        this.cboOperacao.SetValue("0");
        this.cboMarcado.SetValue("0");
        this.txtPorcentagem.SetText("0".FormatNumber(2));
        this.txtValor.SetText("0".FormatNumber(ValoresSismoura.CasasDecimaisValor));
        this.txtPeriodo.IniciarDataAtual();
        this.lstSemana.LimparSelecao();
        this.lstEmpresa.LimparSelecao();
        this.grid.PreencherGrid(null);
    };
    C_ImpProm.prototype.OnRespostaBtnAlterar = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.AlterarGrade();
        }
    };
    C_ImpProm.prototype.OnRespostaBtnAtualizar = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.AtualizarGrade();
        }
    };
    C_ImpProm.prototype.AlterarGrade = function () {
        try {
            if (this.txtPorcentagem.GetText().CNum() > 0 && this.txtValor.GetText().CNum() > 0) {
                MostrarAlerta("Os campos Porcentagem e Valor estão com valores informados. Informe apenas um dos campos!");
                return;
            }
            if (this.txtValor.GetText().CNum() <= 0 && this.txtPorcentagem.GetText().CNum() <= 0) {
                MostrarAlerta("A porcentagem ou o valor precisam ser maior que zero!");
                return;
            }
            if (this.txtPorcentagem.GetText().CNum() >= 100) {
                MostrarAlerta("A porcentagem não deve ser maior ou igual a 100!");
                return;
            }
            var produtosSelecionados;
            //todos = 0 / marcado = 1 / não marcado = 2
            if (this.cboMarcado.GetValue().CNum() == 1) {
                produtosSelecionados = this.grid.GetSelectedRowsData;
            }
            else if (this.cboMarcado.GetValue().CNum() == 2) {
                produtosSelecionados = this.grid.GetUnselectedRowsData;
            }
            else {
                produtosSelecionados = this.grid.DataSource;
            }
            //Subtrair = 0 / Substituir = 1
            if (this.cboOperacao.GetValue().CNum() == 0) {
                this.Subtrair(produtosSelecionados);
            }
            else {
                this.Substituir(produtosSelecionados);
            }
            this.grid.Refresh();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ImpProm.prototype.AtualizarGrade = function () {
        try {
            var produtosSelecionados = this.grid.GetSelectedRowsData;
            var listaPromocoes = [];
            var empresas = this.lstEmpresa.GetValues();
            var semanas = this.lstSemana.GetValues();
            //if (this.txtPeriodo.textBoxCalendarioInicio.GetDate() == null || this.txtPeriodo.textBoxCalendarioFim.GetDate() == null) {
            //    MostrarAlerta("Preencha o campo corretamente: " + this.txtPeriodo.LabelControl.innerText);
            //    return;
            //}
            if (!this.ValidarCamposObrigatorios()) {
                return;
            }
            for (var x = 0; x < produtosSelecionados.length; x++) {
                var promo = {};
                promo.Produto = produtosSelecionados[x].Codigo_Produto;
                promo.Data_Cadastro = new Date;
                promo.Usuario = ValoresSismoura.UsuarioLogado;
                promo.Validade_Inicial = this.txtPeriodo.textBoxCalendarioInicio.GetDate();
                promo.Validade_Final = this.txtPeriodo.textBoxCalendarioFim.GetDate();
                promo.Preco_Promocao = produtosSelecionados[x].Preco_Promocao;
                promo.Preco_Produto = produtosSelecionados[x].Preco_Produto;
                promo.Data_Carga = new Date;
                promo.promocaoEmpresa = [];
                promo.promocaoSemana = [];
                for (var y = 0; y < empresas.length; y++) {
                    var emp = {};
                    emp.Data_Carga = new Date;
                    emp.Empresa = empresas[y].CNum();
                    promo.promocaoEmpresa.push(emp);
                }
                for (var y = 0; y < semanas.length; y++) {
                    var sem = {};
                    sem.Data_Carga = new Date;
                    sem.Dia = semanas[y].CNum();
                    promo.promocaoSemana.push(sem);
                }
                listaPromocoes.push(promo);
            }
            var parametros;
            parametros = {
                listaPromocoes: listaPromocoes,
                codUsuario: ValoresSismoura.UsuarioLogado,
                nomeTela: ValoresSismoura.NomeTela
            };
            this.ExecutarFuncaoServerSideSynch("AtualizarGrade", parametros);
            MostrarMensagem("Registros atualizados com sucesso!");
            this.PreencherGrade();
            this.grid.Refresh();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ImpProm.prototype.Subtrair = function (produtos) {
        for (var x = 0; x < produtos.length; x++) {
            if (this.txtValor.GetText().CNum() > 0) {
                produtos[x].Preco_Promocao = produtos[x].Preco_Produto - this.txtValor.GetText().CNum();
                produtos[x].Desconto = produtos[x].Preco_Produto - produtos[x].Preco_Promocao;
                produtos[x].Desconto_Porc = (produtos[x].Desconto * 100) / produtos[x].Preco_Produto;
            }
            else {
                produtos[x].Preco_Promocao = (1 - (this.txtPorcentagem.GetText().CNum() / 100)) * produtos[x].Preco_Produto;
                produtos[x].Desconto = produtos[x].Preco_Produto - produtos[x].Preco_Promocao;
                produtos[x].Desconto_Porc = (produtos[x].Desconto * 100) / produtos[x].Preco_Produto;
            }
            this.OnEditouItem({}, this.PreencherItem(produtos[x]));
            if (produtos[x].Preco_Promocao >= produtos[x].Preco_Produto) {
                produtos[x].Preco_Promocao = 0;
            }
            if (produtos[x].Preco_Promocao < 0) {
                produtos[x].Preco_Promocao = 0;
            }
            if (produtos[x].Desconto >= produtos[x].Preco_Produto) {
                produtos[x].Desconto = 0;
            }
            if (produtos[x].Desconto_Porc >= 100) {
                produtos[x].Desconto_Porc = 0;
            }
            if (produtos[x].Desconto_Porc < 0) {
                produtos[x].Desconto_Porc = 0;
            }
        }
    };
    C_ImpProm.prototype.Substituir = function (produtos) {
        for (var x = 0; x < produtos.length; x++) {
            if (this.txtValor.GetText().CNum() > 0) {
                produtos[x].Preco_Promocao = this.txtValor.GetText().CNum();
                produtos[x].Desconto = produtos[x].Preco_Produto - produtos[x].Preco_Promocao;
                produtos[x].Desconto_Porc = (produtos[x].Desconto * 100) / produtos[x].Preco_Produto;
            }
            else {
                produtos[x].Preco_Promocao = (produtos[x].Preco_Produto / 100) * this.txtPorcentagem.GetText().CNum();
                produtos[x].Desconto = produtos[x].Preco_Produto - produtos[x].Preco_Promocao;
                produtos[x].Desconto_Porc = (produtos[x].Desconto * 100) / produtos[x].Preco_Produto;
            }
            this.OnEditouItem({}, this.PreencherItem(produtos[x]));
            if (produtos[x].Preco_Promocao >= produtos[x].Preco_Produto) {
                produtos[x].Preco_Promocao = 0;
            }
            if (produtos[x].Preco_Promocao < 0) {
                produtos[x].Preco_Promocao = 0;
            }
            if (produtos[x].Desconto >= produtos[x].Preco_Produto) {
                produtos[x].Desconto = 0;
            }
            if (produtos[x].Desconto_Porc >= 100) {
                produtos[x].Desconto_Porc = 0;
            }
            if (produtos[x].Desconto_Porc < 0) {
                produtos[x].Desconto_Porc = 0;
            }
        }
    };
    C_ImpProm.prototype.PreencherItem = function (e) {
        var item = {};
        item.item = {};
        item.item.Contador = e.Contador;
        item.item.Codigo_Produto = e.Codigo_Produto;
        item.item.Nome_Produto = e.Nome_Produto;
        item.item.Preco_Custo = e.Preco_Custo;
        item.item.Preco_Produto = e.Preco_Produto;
        item.item.Desconto = e.Desconto;
        item.item.Desconto_Porc = e.Desconto_Porc;
        item.item.Preco_Produto = e.Preco_Produto;
        item.item.Preco_Promocao = e.Preco_Promocao;
        item.item.Grupo = e.Grupo;
        item.item.SubGrupo = e.SubGrupo;
        item.item.Marca = e.Marca;
        item.item.Cor = e.Cor;
        return item;
    };
    C_ImpProm.prototype.OnEditouItem = function (s, e) {
        if (e.item.Preco_Promocao == null)
            e.item.Preco_Promocao = 0;
        if (e.item.Desconto == null)
            e.item.Desconto = 0;
        if (e.item.Desconto_Porc == null)
            e.item.Desconto_Porc = 0;
        if (e.item.Preco_Promocao >= e.item.Preco_Produto) {
            MostrarAlerta("O preço da promoção não pode ser igual/maior ao valor do produto");
            e.item.Preco_Promocao = 0;
            //return;
        }
        if (e.item.Preco_Promocao < 0) {
            MostrarAlerta("O preço da promoção não pode ser menor que zero");
            e.item.Preco_Promocao = 0;
            //return;
        }
        if (e.item.Desconto >= e.item.Preco_Produto) {
            MostrarAlerta("O desconto não pode ser igual/maior ao valor do produto");
            e.item.Desconto = 0;
            //return;
        }
        if (e.item.Desconto_Porc >= 100) {
            MostrarAlerta("O desconto não pode ser igual/maior a 100%");
            e.item.Desconto_Porc = 0;
            //return;
        }
        if (e.item.Desconto_Porc < 0) {
            MostrarAlerta("O desconto não pode ser menor que 0%");
            e.item.Desconto_Porc = 0;
            //return;
        }
        if (e.propriedade == "Desconto") {
            if (e.item.Desconto > 0) {
                e.item.Preco_Promocao = e.item.Preco_Produto - e.item.Desconto;
                e.item.Desconto_Porc = (e.item.Desconto * 100) / e.item.Preco_Produto;
            }
            else {
                e.item.Preco_Promocao = 0;
                e.item.Desconto = 0;
                e.item.Desconto_Porc = 0;
            }
        }
        if (e.propriedade == "Desconto_Porc") {
            if (e.item.Preco_Produto > 0 && e.item.Desconto_Porc > 0) {
                e.item.Desconto = (e.item.Preco_Produto * e.item.Desconto_Porc) / 100;
                e.item.Preco_Promocao = e.item.Preco_Produto - e.item.Desconto;
            }
            else {
                e.item.Preco_Promocao = 0;
                e.item.Desconto = 0;
                e.item.Desconto_Porc = 0;
            }
        }
        if (e.propriedade == "Preco_Promocao") {
            if (e.item.Preco_Promocao != 0) {
                e.item.Desconto = e.item.Preco_Produto - e.item.Preco_Promocao;
                e.item.Desconto_Porc = (e.item.Desconto * 100) / e.item.Preco_Produto;
            }
            else {
                e.item.Preco_Promocao = 0;
                e.item.Desconto = 0;
                e.item.Desconto_Porc = 0;
            }
        }
        this.grid.Refresh();
    };
    return C_ImpProm;
}(MouraPage));
var c_ImpProm = new C_ImpProm();
//# sourceMappingURL=C_ImpProm.js.map