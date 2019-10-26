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
var C_HistAc = /** @class */ (function (_super) {
    __extends(C_HistAc, _super);
    function C_HistAc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.prodRemover = [];
        _this.filtroDevolucao = [];
        return _this;
    }
    Object.defineProperty(C_HistAc.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HistAc.prototype, "btnNovo", {
        get: function () {
            return window['btnNovo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HistAc.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HistAc.prototype, "cboUf", {
        get: function () {
            return window['cboUf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HistAc.prototype, "cboMotivo", {
        get: function () {
            return window['cboMotivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HistAc.prototype, "grdHistorico", {
        get: function () {
            return window['grdHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HistAc.prototype, "grdDevolvidos", {
        get: function () {
            return window['grdDevolvidos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HistAc.prototype, "grdAlterados", {
        get: function () {
            return window['grdAlterados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HistAc.prototype, "btnRemoverDevolvidos", {
        get: function () {
            return window['btnRemoverDevolvidos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_HistAc.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboMotivo) {
            adicionarEventoMoura(this.cboMotivo.SelectedItemChanged, this.OnMudouMotivo, this);
        }
    };
    C_HistAc.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.GetEmpresaUF();
        this.LimparCampos();
    };
    C_HistAc.prototype.GetEmpresaUF = function () {
        try {
            this.empresaUF = [];
            var parametros = {
                codEmpresa: ValoresSismoura.EmpresaPadraoUsuario
            };
            this.empresaUF = this.ExecutarFuncaoServerSideSynch("GetEmpresaUF", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HistAc.prototype.OnClickRemoverDevolvidos = function () {
        var _this = this;
        try {
            var parametros;
            if (this.grdDevolvidos.DataSource.length <= 0) {
                MostrarAlerta('Não existem produtos para remover na lista de devolvidos!');
                return;
            }
            abrirEspera("");
            parametros = {
                codEmpresa: this.cboEmpresa.GetValue()
            };
            var cnpj = this.ExecutarFuncaoServerSideSynch('getCnpjEmpresa', parametros);
            parametros = {
                cnpj: cnpj,
                produtos: this.prodRemover
            };
            this.ExecutarFuncaoServerSideAsynch("RemoveDevolvidosIMendes", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    if (retorno) {
                        MostrarMensagem('Os produtos devolvidos foram removidos!');
                        _this.btnGerar.DoClick();
                    }
                    else {
                        MostrarAlerta('Ocorreu um erro!');
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
            fecharEspera();
            LogarException(ex);
        }
    };
    C_HistAc.prototype.OnClickGerar = function () {
        var _this = this;
        try {
            abrirEspera("");
            var parametros;
            parametros = {
                codEmpresa: this.cboEmpresa.GetValue()
            };
            var cnpj = this.ExecutarFuncaoServerSideSynch('getCnpjEmpresa', parametros);
            parametros = {
                cnpj: cnpj
            };
            this.ExecutarFuncaoServerSideAsynch("GetHistoricoAcessoIMendes", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    if (retorno) {
                        _this.grdHistorico.PreencherGrid(retorno.Dados.detalhes);
                        //this.grdDevolvidos.PreencherGrid(retorno.Dados.prodDevolvidos);
                        _this.filtroDevolucao = retorno.Dados.prodDevolvidos;
                        _this.OnMudouMotivo();
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
            parametros = {
                cnpj: cnpj,
                uf: this.empresaUF
            };
            this.ExecutarFuncaoServerSideAsynch("GetAlteradosIMendes", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (retorno) {
                        _this.grdAlterados.PreencherGrid(retorno.Dados.produto);
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
            fecharEspera();
            MostrarAlerta("Houve uma falha na consulta");
        }
    };
    C_HistAc.prototype.OnMudouMotivo = function () {
        var _this = this;
        if (this.cboMotivo.GetValue() === 'TD') {
            this.grdDevolvidos.PreencherGrid(this.filtroDevolucao);
        }
        else {
            this.grdDevolvidos.PreencherGrid(this.filtroDevolucao.filter(function (filtro) { return filtro.motivo === _this.cboMotivo.GetText(); }));
        }
        this.prodRemover = [];
        this.grdDevolvidos.DataSource.forEach(function (item) {
            return _this.prodRemover.push(item.id);
        });
    };
    C_HistAc.prototype.LimparCampos = function () {
        this.grdAlterados.PreencherGrid([]);
        this.grdDevolvidos.PreencherGrid([]);
        this.grdHistorico.PreencherGrid([]);
        this.prodRemover = [];
        this.filtroDevolucao = [];
        this.cboUf.SetValue(this.empresaUF);
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.cboMotivo.SetValue("TD");
    };
    return C_HistAc;
}(MouraPageAngular));
var c_HistAc = new C_HistAc();
//# sourceMappingURL=C_HistAc.js.map