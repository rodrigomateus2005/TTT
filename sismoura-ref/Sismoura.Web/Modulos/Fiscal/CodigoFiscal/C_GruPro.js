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
var C_GruPro = /** @class */ (function (_super) {
    __extends(C_GruPro, _super);
    function C_GruPro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_GruPro.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruPro.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruPro.prototype, "txtProduto", {
        get: function () {
            return window['txtProd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruPro.prototype, "txtGrupoFiscal", {
        get: function () {
            return window['txtGrupoFisc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruPro.prototype, "txtGrupoProcura", {
        get: function () {
            return window['txtGrupoProcura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruPro.prototype, "grdGrupoFiscal", {
        get: function () {
            return window['grdGrupoFiscal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruPro.prototype, "grdProduto", {
        get: function () {
            return window['grdProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruPro.prototype, "btnIncluirProduto", {
        get: function () {
            return window['btnIncluirProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruPro.prototype, "btnRemoverProduto", {
        get: function () {
            return window['btnRemoverProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruPro.prototype, "btnNovoProduto", {
        get: function () {
            return window['btnNovoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruPro.prototype, "btnCancelarProcura", {
        get: function () {
            return window['btnCancelarProcura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruPro.prototype, "btnGravarProcura", {
        get: function () {
            return window['btnGravarProcura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruPro.prototype, "btnProcura", {
        get: function () {
            return window['btnProcura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruPro.prototype, "mdProcura", {
        get: function () {
            return window['mdProcuraGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_GruPro.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grdGrupoFiscal) {
            adicionarEventoMoura(this.grdGrupoFiscal.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.grdProduto) {
            adicionarEventoMoura(this.grdProduto.SelecionouLinha, this.OnGridSelecionouItemProduto, this);
        }
        if (this.txtGrupoFiscal) {
            adicionarEventoMoura(this.txtGrupoFiscal.Procurou, this.OntxtGrupoFiscalMudou, this);
        }
        if (this.btnIncluirProduto) {
            adicionarEventoMoura(this.btnIncluirProduto.Click, this.OnClickIncluir, this);
        }
        if (this.btnRemoverProduto) {
            adicionarEventoMoura(this.btnRemoverProduto.Click, this.OnClickRemover, this);
        }
        if (this.btnNovoProduto) {
            adicionarEventoMoura(this.btnNovoProduto.Click, this.OnNovoProduto, this);
        }
        if (this.btnGravarProcura) {
            adicionarEventoMoura(this.btnGravarProcura.Click, this.OnGravarProcura, this);
        }
        if (this.btnCancelarProcura) {
            adicionarEventoMoura(this.btnCancelarProcura.Click, this.OnCancelarProcura, this);
        }
        if (this.btnProcura) {
            adicionarEventoMoura(this.btnProcura.Click, this.OnProcura, this);
        }
    };
    C_GruPro.prototype.OnCancelarProcura = function (s, e) {
        e.processOnServer = false;
        this.mdProcura.Hide();
        this.txtGrupoProcura.Procurar("");
        this.RefreshAngular();
        return;
    };
    C_GruPro.prototype.OnProcura = function (s, e) {
        e.processOnServer = false;
        if (this.txtGrupoFiscal.GetText() == "") {
            MostrarAlerta("Selecione um grupo fiscal!");
            return;
        }
        else {
            this.mdProcura.Show();
            return;
        }
    };
    C_GruPro.prototype.OnGravarProcura = function (s, e) {
        e.processOnServer = false;
        try {
            if (this.txtGrupoProcura.GetText().CNum() != 0) {
                MsgBoxJS("Deseja realmente alterar o grupo fiscal dos produtos do grupo: <b>" + this.txtGrupoProcura.GetResultado() + "</b>?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespostaGravarRegistro, this), "Atenção");
            }
            else {
                MostrarAlerta("Preencha corretamento o campo: Codigo!");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_GruPro.prototype.OnRespostaGravarRegistro = function (result) {
        if (result.Resultado == MsgBoxResult.No) {
            return;
        }
        var parametros;
        parametros = {
            codGru: this.txtGrupoProcura.GetText().CNum(),
            codFisc: this.txtGrupoFiscal.GetText().CNum()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("AtualizarGrupoProdutos", parametros);
        if (retorno) {
            this.OntxtGrupoFiscalMudou();
            this.txtGrupoProcura.Procurar("");
            this.mdProcura.Hide();
            this.RefreshAngular();
            return;
        }
    };
    C_GruPro.prototype.OnNovoProduto = function (s, e) {
        e.processOnServer = false;
        this.LimparCamposProduto();
    };
    C_GruPro.prototype.OnClickRemover = function (s, e) {
        e.processOnServer = false;
        var flag = false;
        this.AlteracaoProduto(flag);
    };
    C_GruPro.prototype.OnClickIncluir = function (s, e) {
        e.processOnServer = false;
        var flag = true;
        this.AlteracaoProduto(flag);
    };
    C_GruPro.prototype.AlteracaoProduto = function (flag) {
        try {
            var parametros;
            parametros = {
                flag: flag,
                codigoGrupo: this.txtGrupoFiscal.GetText().CNum(),
                codigoProduto: this.txtProduto.GetText().CNum(),
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("AlterarProduto", parametros);
            if ((retorno) && (flag != true)) {
                MostrarMensagem("Produto removido com sucesso!");
            }
            else if (retorno) {
                MostrarMensagem("Produto vinculado com sucesso!");
            }
            this.OntxtGrupoFiscalMudou();
            this.txtProduto.Limpar();
            this.txtProduto.Focus();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_GruPro.prototype.OntxtGrupoFiscalMudou = function () {
        if (this.txtGrupoFiscal.GetText() != "") {
            var parametros;
            parametros = {
                codigo: this.txtGrupoFiscal.GetText().CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetCadastradosProduto", parametros);
            this.grdProduto.PreencherGrid(retorno);
        }
        else {
            this.grdProduto.PreencherGrid(retorno);
        }
    };
    C_GruPro.prototype.OnGridSelecionouItem = function (s, e) {
        this.txtCodigo.Procurar(e.data['Codigo']);
    };
    C_GruPro.prototype.OnGridSelecionouItemProduto = function (s, e) {
        this.txtProduto.Procurar(e.data['Codigo']);
    };
    C_GruPro.prototype.LimparCamposProduto = function () {
        this.txtGrupoFiscal.Limpar();
        this.txtProduto.Limpar();
        this.OntxtGrupoFiscalMudou();
    };
    C_GruPro.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        return true;
    };
    C_GruPro.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        this.txtCodigo.Focus();
        return true;
    };
    C_GruPro.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
        this.LimparCamposProduto();
    };
    C_GruPro.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
        if (this.ParametrosTela.descricao) {
            Entity.Descricao = this.ParametrosTela.descricao;
        }
        this.RefreshAngular();
    };
    C_GruPro.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastradosGrupo", parametros);
            this.grdGrupoFiscal.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_GruPro;
}(MouraPageCadastroAngular));
var c_GruPro = new C_GruPro();
//# sourceMappingURL=C_GruPro.js.map