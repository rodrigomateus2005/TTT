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
var E_Conven = /** @class */ (function (_super) {
    __extends(E_Conven, _super);
    function E_Conven() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(E_Conven.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(E_Conven.prototype, "rblEmpresa", {
        get: function () {
            return window['rblEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(E_Conven.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(E_Conven.prototype, "gridRecalcular", {
        get: function () {
            return window['gridRecalcular_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(E_Conven.prototype, "mdRecalcular", {
        get: function () {
            return window['mdRecalcular_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(E_Conven.prototype, "btnRecalcular", {
        get: function () {
            return window['btnRecalcular_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(E_Conven.prototype, "btnCancelar", {
        get: function () {
            return window['btnCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    E_Conven.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    E_Conven.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.btnRecalcular) {
            adicionarEventoMoura(this.btnRecalcular.Click, this.OnClickRecalcular, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnClickCancelar, this);
        }
    };
    E_Conven.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (this.ValidarCamposObrigatorios()) {
            try {
                parametros = {
                    codConvenio: CNum(this.Filtro.Convenio),
                    empresas: this.rblEmpresa.GetValues()
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                }, function (erro) {
                    fecharEspera();
                    LogarException(erro);
                }, this);
            }
            catch (ex) {
                fecharEspera();
                LogarException(ex);
            }
        }
    };
    E_Conven.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.rblEmpresa.SelecionarEmpresaPadraoUsuario();
        this.Filtro.Convenio = 0;
        this.grid.PreencherGrid(null);
        this.gridRecalcular.PreencherGrid(null);
        this.RefreshAngular();
    };
    E_Conven.prototype.ValidarCamposObrigatorios = function () {
        var retorno = _super.prototype.ValidarCamposObrigatorios.call(this);
        if (retorno) {
            if (this.rblEmpresa.GetValues().length <= 0) {
                MostrarAlerta("Selecione uma empresa!");
                retorno = false;
            }
        }
        return retorno;
    };
    E_Conven.prototype.OnSelecionouLinha = function (s, e) {
        this.PreencherGridRecalcular(CNum(e.data["Codigo"]));
    };
    E_Conven.prototype.PreencherGridRecalcular = function (codigo) {
        var _this = this;
        var parametros;
        parametros = {
            codFechamento: codigo
        };
        try {
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGridRecalcular", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.gridRecalcular.PreencherGrid(retorno);
                _this.mdRecalcular.Show();
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    E_Conven.prototype.OnClickRecalcular = function (s, e) {
        e.processOnServer = false;
        var dadosSelecionados = this.gridRecalcular.GetSelectedRowsData;
        if (dadosSelecionados.length <= 0) {
            MostrarAlerta("Selecione ao menos uma conta para efetuar o recálculo.");
            return;
        }
        this.Recalcular(dadosSelecionados);
    };
    E_Conven.prototype.OnClickCancelar = function (s, e) {
        e.processOnServer = false;
        this.gridRecalcular.PreencherGrid(null);
        this.mdRecalcular.Hide();
    };
    E_Conven.prototype.Recalcular = function (dados) {
        var _this = this;
        var parametros;
        var lista;
        lista = dados;
        try {
            parametros = {
                lista: JSON.stringify(lista),
                excluirConvenio: lista.length == this.gridRecalcular.DataSource.length
            };
            this.ExecutarFuncaoServerSideAsynch("Recalcular", parametros, function (d) {
                MostrarMensagem("Todas as contas selecionadas foram estornadas com sucesso!");
                _this.mdRecalcular.Hide();
                _this.PreencherGrade();
                fecharEspera();
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    return E_Conven;
}(MouraPageRelacaoAngular));
var e_Conven = new E_Conven();
//# sourceMappingURL=E_Conven.js.map