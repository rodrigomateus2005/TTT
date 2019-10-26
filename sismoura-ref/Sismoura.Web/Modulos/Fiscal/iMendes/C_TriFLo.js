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
var C_TriFLo = /** @class */ (function (_super) {
    __extends(C_TriFLo, _super);
    function C_TriFLo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_TriFLo.prototype, "GridProdutos", {
        get: function () {
            return window['GridProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TriFLo.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TriFLo.prototype, "btnConsultarTributacao", {
        get: function () {
            return window['btnConsultarTributacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TriFLo.prototype, "mdIntegracao", {
        get: function () {
            return window['mdIntegracao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TriFLo.prototype, "mdComparacao", {
        get: function () {
            return window['mdComparacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TriFLo.prototype, "GridIntegracao", {
        get: function () {
            return window['GridIntegracao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TriFLo.prototype, "grdComparacao", {
        get: function () {
            return window['grdComparacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TriFLo.prototype, "btnAtualizar", {
        get: function () {
            return window['btnAtualizar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TriFLo.prototype, "btnNaoEncontrados", {
        get: function () {
            return window['btnNaoEncontrados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TriFLo.prototype, "lblLocalizados", {
        get: function () {
            return window['lblLocalizados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TriFLo.prototype, "lblNaoLocalizados", {
        get: function () {
            return window['lblNaoLocalizados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TriFLo.prototype, "lstGrupo", {
        get: function () {
            return window['lstGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TriFLo.prototype, "lstSubGrupo", {
        get: function () {
            return window['lstSubGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TriFLo.prototype, "lstUF", {
        get: function () {
            return window['lstUF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TriFLo.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TriFLo.prototype, "btnComparacao", {
        get: function () {
            return window['btnComparacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TriFLo.prototype, "btnOk", {
        get: function () {
            return window['btnOk_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_TriFLo.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnClickGerar, this);
        }
        if (this.btnConsultarTributacao) {
            adicionarEventoMoura(this.btnConsultarTributacao.Click, this.OnClickConsultarTributacao, this);
        }
        if (this.btnAtualizar) {
            adicionarEventoMoura(this.btnAtualizar.Click, this.OnClickAtualizar, this);
        }
        if (this.btnNaoEncontrados) {
            adicionarEventoMoura(this.btnNaoEncontrados.Click, this.OnClickNaoEncontrados, this);
        }
        if (this.GridIntegracao) {
            adicionarEventoMoura(this.GridIntegracao.CellPrepared, this.OnGridIntegracaoCellPrepared, this);
        }
        if (this.grdComparacao) {
            adicionarEventoMoura(this.grdComparacao.CellPrepared, this.OnGridComparacaoCellPrepared, this);
        }
        if (this.btnComparacao) {
            adicionarEventoMoura(this.btnComparacao.Click, this.OnClickComparacao, this);
        }
        if (this.btnOk) {
            adicionarEventoMoura(this.btnOk.Click, this.OnClickOk, this);
        }
    };
    C_TriFLo.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.GetEmpresaUF();
        this.LimparCampos();
    };
    C_TriFLo.prototype.OnClickOk = function (s, e) {
        e.processOnServer = false;
        this.mdComparacao.Hide();
    };
    C_TriFLo.prototype.OnClickComparacao = function (s, e) {
        e.processOnServer = false;
        this.mdComparacao.Show();
        this.grdComparacao.PreencherGrid(this.comparacao);
    };
    C_TriFLo.prototype.OnClickGerar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        //this.mdComparacao.Show();
        try {
            abrirEspera("");
            var parametros = {
                listaGrupo: this.lstGrupo.GetValues(),
                listaSubGrupo: this.lstSubGrupo.GetValues()
            };
            this.ExecutarFuncaoServerSideAsynch("GetProdutosAtivosByGrupo", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (retorno) {
                        _this.GridProdutos.PreencherGrid(retorno);
                    }
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
        catch (ex) {
            MostrarAlerta("Houve um falha na consulta");
        }
    };
    C_TriFLo.prototype.OnClickConsultarTributacao = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            abrirEspera("");
            if (this.GridProdutos.DataSource.length >= 7000) {
                fecharEspera();
                MostrarAlerta("Não é possível realizar a consulta da quantidade de produtos gerados na relação. Filtre melhor a sua busca!");
                return;
            }
            //ValoresSismoura.EmpresaPadraoUsuario,
            var parametros = {
                codEmpresa: this.cboEmpresa.GetValue(),
                produtos: this.GridProdutos.DataSource,
                listaUF: this.lstUF.GetValues(),
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            //var retorno = this.ExecutarFuncaoServerSideSynch("GetProdutos", parametros);
            this.ExecutarFuncaoServerSideAsynch("GetProdutos", parametros, function (d) {
                try {
                    //fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (retorno) {
                        var produtos = [];
                        var retornos = [];
                        //var comparacao: any[] = [];
                        for (var i = 0; i < retorno.Produtos.length; i++) {
                            for (var x = 0; x < retorno.Produtos[i].length; x++) {
                                retorno.Produtos[i][x].UF = retorno.Retornos[i][0].uf;
                                produtos.push(retorno.Produtos[i][x]);
                            }
                        }
                        for (var i = 0; i < retorno.Retornos.length; i++) {
                            for (var x = 0; x < retorno.Retornos[i].length; x++) {
                                retornos.push(retorno.Retornos[i][x]);
                            }
                        }
                        _this.comparacao = retorno.RegraAtual;
                        //for (var x = 0; x < retornos.length; x++) {
                        //    comparacao = comparacao.concat(retornos[x].produto);
                        //}
                        _this.mdIntegracao.Show();
                        //this.grdComparacao.PreencherGrid(comparacao);
                        //this.mdComparacao.Show();
                        _this.GridIntegracao.PreencherGrid(produtos);
                        _this.PreencherRetornos(retornos);
                        _this.PreencherProdutos(produtos);
                        _this.atualizarLegendas();
                    }
                }
                catch (ex) {
                    LogarException(ex);
                }
                finally {
                    fecharEspera();
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
        }
        catch (ex) {
            MostrarAlerta("Houve um falha na consulta");
        }
    };
    C_TriFLo.prototype.PreencherRetornos = function (r) {
        this.retorno = r;
        for (var x = 0; x < this.retorno.length; x++) {
            this.retorno[x].cabecalho.dthr = this.retorno[x].cabecalho.dthr.ToDate();
            this.retorno[x].cabecalho.prodPend_datainicio = this.retorno[x].cabecalho.prodPend_datainicio.ToDate();
        }
        for (var x = 0; x < this.retorno.length; x++) {
            for (var y = 0; y < this.retorno[x].produto.length; y++) {
                this.retorno[x].produto[y].dtRev = this.retorno[x].produto[y].dtRev.ToDate();
            }
        }
        this.retorno = this.retorno;
    };
    C_TriFLo.prototype.PreencherProdutos = function (p) {
        this.produtos = p;
        //this.retorno.cabecalho.dthr = this.retorno.cabecalho.dthr.ToDate();
        //this.retorno.cabecalho.prodPend_datainicio = this.retorno.cabecalho.prodPend_datainicio.ToDate();
        //for (var x = 0; x < this.retorno.produto.length; x++) {
        //    this.retorno.produto[x].dtRev = this.retorno.produto[x].dtRev.ToDate()
        //}
        this.produtos = this.produtos;
    };
    C_TriFLo.prototype.OnClickAtualizar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            abrirEspera("Aguarde, atualizando as regras! Esse procedimento pode demorar vários minutos!!");
            var parametros = {
                retorno: this.retorno,
                produtos: this.produtos,
                codEmpresa: ValoresSismoura.EmpresaPadraoUsuario,
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            //var retorno = this.ExecutarFuncaoServerSideSynch("AtualizarRegra", parametros);
            this.ExecutarFuncaoServerSideAsynch("AtualizarRegra", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (retorno) {
                        MostrarMensagem("As regras dos produtos foram alteradas com sucesso");
                        _this.mdIntegracao.Hide();
                    }
                    else {
                        MostrarAlerta("Não foi possivel alterar a regra dos produtos");
                    }
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
        catch (ex) {
            LogarException(ex);
        }
    };
    C_TriFLo.prototype.GetEmpresaUF = function () {
        try {
            this.empresaUF = [];
            var parametros = {
                codEmpresa: ValoresSismoura.EmpresaPadraoUsuario
            };
            this.empresaUF.push(this.ExecutarFuncaoServerSideSynch("GetEmpresaUF", parametros));
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_TriFLo.prototype.OnClickNaoEncontrados = function (s, e) {
        e.processOnServer = false;
        var parametros = [];
        parametros.push("codEmpresa=" + ValoresSismoura.EmpresaPadraoUsuario);
        abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.ProdutosNLocalizadosiMendes), parametros);
    };
    C_TriFLo.prototype.LimparCampos = function () {
        this.produtos = {};
        this.retorno = [];
        this.comparacao = [];
        this.GridProdutos.LimparFiltros();
        this.GridIntegracao.LimparFiltros();
        this.lstUF.SetValues(this.empresaUF);
    };
    C_TriFLo.prototype.atualizarLegendas = function () {
        this.lblLocalizados.Text = '' + this.produtos.FindAll('encontrou', true).length;
        this.lblNaoLocalizados.Text = '' + this.produtos.FindAll('encontrou', false).length;
    };
    C_TriFLo.prototype.OnGridIntegracaoCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data != null) {
                if (e.data.encontrou) {
                    e.cellElement.css("color", "#0c58d3");
                }
                else {
                    e.cellElement.css("color", "#d20c0c");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_TriFLo.prototype.OnGridComparacaoCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data != null) {
                if (e.data.Antes_Depois == 'D') {
                    e.cellElement.css("color", "#0c58d3");
                }
                else {
                    e.cellElement.css("color", "#d20c0c");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_TriFLo;
}(MouraPageAngular));
var c_TriFLo = new C_TriFLo();
//# sourceMappingURL=C_TriFLo.js.map