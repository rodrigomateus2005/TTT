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
var R_IdPRodOrcam = /** @class */ (function (_super) {
    __extends(R_IdPRodOrcam, _super);
    function R_IdPRodOrcam() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_IdPRodOrcam.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IdPRodOrcam.prototype, "txtFornecedor", {
        get: function () {
            return window['txtFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IdPRodOrcam.prototype, "txtGrupo", {
        get: function () {
            return window['txtGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IdPRodOrcam.prototype, "txtSubgrupo", {
        get: function () {
            return window['txtSubgrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IdPRodOrcam.prototype, "txtLinha", {
        get: function () {
            return window['txtLinha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IdPRodOrcam.prototype, "txtCor", {
        get: function () {
            return window['txtCor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IdPRodOrcam.prototype, "txtMarca", {
        get: function () {
            return window['txtMarca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IdPRodOrcam.prototype, "txtReferencia", {
        get: function () {
            return window['txtReferencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IdPRodOrcam.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IdPRodOrcam.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IdPRodOrcam.prototype, "btnMarcar", {
        get: function () {
            return window['btnMarcar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IdPRodOrcam.prototype, "btnDesmarcar", {
        get: function () {
            return window['btnDesmarcar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IdPRodOrcam.prototype, "GetProdutos", {
        get: function () {
            return this.Grid.DataSource;
        },
        set: function (value) {
            this.Grid.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    R_IdPRodOrcam.prototype.Init = function () {
        _super.prototype.Init.call(this);
        this.btnMarcar.SetEnabled(false);
        this.btnDesmarcar.SetEnabled(false);
        $('#btnMarcar_Botao').css('cursor', 'not-allowed');
        $('#btnDesmarcar_Botao').css('cursor', 'not-allowed');
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.Gravar, this);
        }
        if (this.btnMarcar) {
            adicionarEventoMoura(this.btnMarcar.Click, this.MarcarTodos, this);
        }
        if (this.btnDesmarcar) {
            adicionarEventoMoura(this.btnDesmarcar.Click, this.DesmarcarTodos, this);
        }
    };
    R_IdPRodOrcam.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Grid.PreencherGrid(null);
        this.txtFornecedor.Limpar();
        this.txtGrupo.Limpar();
        this.txtSubgrupo.Limpar();
        this.txtLinha.Limpar();
        this.txtMarca.Limpar();
        this.txtCor.Limpar();
        this.txtReferencia.Limpar();
        this.btnMarcar.SetEnabled(false);
        this.btnDesmarcar.SetEnabled(false);
        $('#btnMarcar_Botao').css('cursor', 'not-allowed');
        $('#btnDesmarcar_Botao').css('cursor', 'not-allowed');
    };
    R_IdPRodOrcam.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros = {
            Fornecedor: this.txtFornecedor.GetText().CNum(),
            Grupo: this.txtGrupo.GetText().CNum(),
            Subgrupo: this.txtSubgrupo.GetText().CNum(),
            Linha: this.txtLinha.GetText().CNum(),
            Cor: this.txtCor.GetText().CNum(),
            Marca: this.txtMarca.GetText().CNum(),
            Referencia: this.txtReferencia.GetText()
        };
        var ListaProdutos = this.ExecutarFuncaoServerSideSynch("GetProdutosGrade", parametros);
        if (ListaProdutos != null) {
            this.Grid.PreencherGrid(ListaProdutos);
            this.btnMarcar.SetEnabled(true);
            this.btnDesmarcar.SetEnabled(true);
            $('#btnMarcar_Botao').css('cursor', 'default');
            $('#btnDesmarcar_Botao').css('cursor', 'default');
        }
        else {
            this.Grid.PreencherGrid(null);
            fecharEspera();
            MostrarAlerta("Não existem produtos para exibir com as informações especificadas!");
        }
    };
    R_IdPRodOrcam.prototype.Gravar = function (s, e) {
        try {
            e.processOnServer = false;
            abrirEspera("Gravando registros. Aguarde.");
            if (this.Grid.DataSource.length > 0) {
                var paramBanco = {
                    Fornecedor: this.txtFornecedor.GetText().CNum(),
                    Grupo: this.txtGrupo.GetText().CNum(),
                    Subgrupo: this.txtSubgrupo.GetText().CNum(),
                    Linha: this.txtLinha.GetText().CNum(),
                    Cor: this.txtCor.GetText().CNum(),
                    Marca: this.txtMarca.GetText().CNum(),
                    Referencia: this.txtReferencia.GetText()
                };
                var ProdutosBanco = this.ExecutarFuncaoServerSideSynch("GetProdutosGrade", paramBanco);
                var ListaProdutos_1 = [];
                this.Grid.DataSource.forEach(function (f) {
                    var p = ProdutosBanco.FirstOrDefault("Codigo", f.Codigo);
                    if (f.Utilizar_Orcamento != p.Utilizar_Orcamento) {
                        ListaProdutos_1.push(f);
                    }
                });
                var parametros = {
                    Produtos: ListaProdutos_1
                };
                this.ExecutarFuncaoServerSideAsynch("Gravar", parametros, function (d) {
                    try {
                        fecharEspera();
                        MostrarMensagem("Registros alterados com sucesso.");
                    }
                    catch (ex) {
                        fecharEspera();
                        LogarException(ex);
                    }
                }, function (erro) {
                    fecharEspera();
                    LogarExceptionAjax(erro);
                }, this);
            }
            else {
                fecharEspera();
                MostrarAlerta("Nenhum registro para gravar!");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_IdPRodOrcam.prototype.MarcarTodos = function (s, e) {
        e.processOnServer = false;
        var Marcar = [];
        this.Grid.DataSource.forEach(function (f) {
            f.Utilizar_Orcamento = true;
            Marcar.push(f);
        });
        this.Grid.PreencherGrid(Marcar);
    };
    R_IdPRodOrcam.prototype.DesmarcarTodos = function (s, e) {
        e.processOnServer = false;
        var Desmarcar = [];
        this.Grid.DataSource.forEach(function (f) {
            f.Utilizar_Orcamento = false;
            Desmarcar.push(f);
        });
        this.Grid.PreencherGrid(Desmarcar);
    };
    return R_IdPRodOrcam;
}(MouraPageRelacaoAngular));
var r_IdPRodOrcam = new R_IdPRodOrcam();
//# sourceMappingURL=R_IdProdOrcam.js.map