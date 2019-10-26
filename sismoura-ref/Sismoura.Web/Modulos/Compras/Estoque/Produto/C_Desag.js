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
var C_Desag = /** @class */ (function (_super) {
    __extends(C_Desag, _super);
    function C_Desag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.produtoExcluido = [];
        return _this;
    }
    Object.defineProperty(C_Desag.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Desag.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Desag.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Desag.prototype, "cboRealizarDesag", {
        get: function () {
            return window['cboRealizarDesag_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Desag.prototype, "txtSubProduto", {
        get: function () {
            return window['txtSubProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Desag.prototype, "txtPeso", {
        get: function () {
            return window['txtPeso_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Desag.prototype, "chkPerda", {
        get: function () {
            return window['chkPerda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Desag.prototype, "txtAjusteCusto", {
        get: function () {
            return window['txtAjusteCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Desag.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Desag.prototype, "grdSubProd", {
        get: function () {
            return window['grdSubProd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Desag.prototype, "Desagregado", {
        get: function () {
            var that = this.GetScope()["Desagregado"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Desagregado"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Desag.prototype, "Desagregados", {
        get: function () {
            return this.GetScope()["Desagregados"];
        },
        set: function (value) {
            this.GetScope()["Desagregados"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_Desag.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.grdSubProd) {
            adicionarEventoMoura(this.grdSubProd.Validando, this.OnValidando, this);
            adicionarEventoMoura(this.grdSubProd.Grid.SelecionouLinha, this.OnClickBotaoLinhaItem, this);
            adicionarEventoMoura(this.grdSubProd.Grid.ExcluiuLinhaGrade, this.OnClickBotaoExcluiuItem, this);
            adicionarEventoMoura(this.grdSubProd.btnNovo.Click, this.OnBotaoNovo, this);
        }
        if (this.chkPerda) {
            adicionarEventoMoura(this.chkPerda.CheckChanged, this.OnConfigurarPerda, this);
        }
    };
    C_Desag.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        this.PreencherGrade();
    };
    C_Desag.prototype.OnClickBotaoLinhaItem = function (s, e) {
        try {
            if (e.data.Cod_Subproduto > 0) {
                this.txtSubProduto.Procurar(e.data.Cod_Subproduto);
            }
            if (e.data.Percentual_Peso > 0) {
                this.txtPeso.SetText(e.data.Percentual_Peso.Format(2));
            }
            this.chkPerda.Checked = e.data.Perda;
            if (e.data.Perda) {
                this.txtAjusteCusto.LabelControl.innerText = "% Ajuste Custo";
                this.txtAjusteCusto.Enabled = false;
            }
            else {
                this.txtAjusteCusto.LabelControl.innerText = "* % Ajuste Custo";
                this.txtAjusteCusto.Enabled = true;
            }
            this.txtAjusteCusto.SetText(e.data.Percentual_Custo.Format(2));
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Desag.prototype.OnClickBotaoExcluiuItem = function (s, e) {
        try {
            this.produtoExcluido.push(e.item);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Desag.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
        this.PreencherGradeSubProdutos(this.EntityTela);
    };
    C_Desag.prototype.PreencherGrade = function () {
        try {
            var parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Desag.prototype.OnValidando = function (s, e) {
        try {
            var entidade = e.item;
            entidade.Descricao_Subproduto = this.txtSubProduto.GetResultado();
            if (this.chkPerda.Checked) {
                entidade.Perda = true;
                entidade.Descricao_Perda = "Sim";
            }
            else {
                entidade.Perda = false;
                entidade.Descricao_Perda = "Não";
            }
            if (this.txtSubProduto.GetText().CNum() == 0) {
                MostrarAlerta("Informe um Subproduto!");
                e.cancelar = true;
                return;
            }
            if (this.txtSubProduto.GetText().CNum() == this.txtProduto.GetText().CNum()) {
                MostrarAlerta("Informe um Subproduto diferente do Produto já inserido acima!");
                e.cancelar = true;
                return;
            }
            if (this.txtPeso.GetText().CNum() == 0) {
                MostrarAlerta("Informe um % Peso!");
                e.cancelar = true;
                return;
            }
            if (!this.chkPerda.Check.checked && this.txtAjusteCusto.GetText().CNum() == 0) {
                MostrarAlerta("Informe um % Ajuste Custo!");
                e.cancelar = true;
                return;
            }
            var item = this.Desagregados.FirstOrDefault("Cod_Subproduto", this.Desagregado.Cod_Subproduto);
            if (item) {
                MostrarAlerta("Subproduto já cadastrado!");
                e.cancelar = true;
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Desag.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var soma = this.grdSubProd.Grid.DataSource.Sum("Percentual_Peso");
        if (soma != 100) {
            MostrarAlerta("Obrigatoriamente a soma dos percentuais dos subprodutos deverá ser 100%");
            return;
        }
        var item = this.Grid.DataSource.FirstOrDefault("Cod_Produto", this.EntityTela.Cod_Produto);
        if (item && this.EntityTela.Codigo == item.Codigo) {
            this.EntityTela.SubProdutos = this.Desagregados;
        }
        else if (item) {
            MostrarAlerta("Já existe desagregação relacionada com este produto!");
            return;
        }
        var parametros = {
            lista: this.produtoExcluido,
            tela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        this.ExecutarFuncaoServerSideSynch("ExcluirSubProduto", parametros);
        this.EntityTela.SubProdutos = this.Desagregados;
        return true;
    };
    C_Desag.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        if (Entity.SubProdutos && Entity.SubProdutos.length > 0) {
            this.PreencherGradeSubProdutos(Entity);
        }
    };
    C_Desag.prototype.PreencherGradeSubProdutos = function (Entity) {
        var parametros = {
            json: JSON.stringify(Entity.SubProdutos)
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetAdicionaisSubProdutoDesagregados", parametros);
        if (retorno) {
            this.Desagregados = retorno;
        }
        this.RefreshAngular();
    };
    C_Desag.prototype.OnConfigurarPerda = function () {
        if (this.chkPerda.Check.checked) {
            this.txtAjusteCusto.LabelControl.innerText = "% Ajuste Custo";
            this.Desagregado.Percentual_Custo = 0;
            this.txtAjusteCusto.Enabled = false;
        }
        else {
            this.txtAjusteCusto.LabelControl.innerText = "* % Ajuste Custo";
            this.Desagregado.Percentual_Custo = 0;
            this.txtAjusteCusto.Enabled = true;
        }
    };
    C_Desag.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.LimparCampos();
    };
    C_Desag.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        this.produtoExcluido = [];
        return true;
    };
    C_Desag.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Desag.prototype.OnBotaoNovo = function () {
        this.txtSubProduto.Limpar();
        this.txtPeso.SetText("0,00");
        this.chkPerda.Checked = false;
        this.txtAjusteCusto.LabelControl.innerText = "* % Ajuste Custo";
        this.Desagregado.Percentual_Custo = 0;
        this.txtAjusteCusto.SetText("0,00");
        this.txtAjusteCusto.Enabled = true;
    };
    C_Desag.prototype.LimparCampos = function () {
        this.Desagregados = [];
        this.txtCodigo.Limpar();
        this.txtDescricao.Limpar();
        this.txtProduto.Limpar();
        this.cboRealizarDesag.LimparSelecao();
        this.OnBotaoNovo();
        this.txtPeso.LabelControl.innerText = "* % Peso";
    };
    return C_Desag;
}(MouraPageCadastroAngular));
var c_Desag = new C_Desag();
//# sourceMappingURL=C_Desag.js.map