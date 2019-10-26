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
var C_ValSerPro = /** @class */ (function (_super) {
    __extends(C_ValSerPro, _super);
    function C_ValSerPro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ValSerPro.prototype, "txtProfissional", {
        get: function () {
            return window['txtProfissional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ValSerPro.prototype, "txtServico", {
        get: function () {
            return window['txtServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ValSerPro.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ValSerPro.prototype, "Servicos", {
        get: function () {
            return this.GetScope()["Servicos"];
        },
        set: function (value) {
            this.GetScope()["Servicos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ValSerPro.prototype, "Servico", {
        get: function () {
            return this.GetScope()["Servico"];
        },
        set: function (value) {
            this.GetScope()["Servico"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ValSerPro.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ValSerPro.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ValSerPro.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtProfissional) {
            adicionarEventoMoura(this.txtProfissional.Procurou, this.OnProcurouProfissional, this);
        }
        if (this.grd) {
            adicionarEventoMoura(this.grd.AdicionandoItem, this.OnAdicionandoGrd, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickGravar, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.OnClickLimpar, this);
        }
    };
    C_ValSerPro.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    C_ValSerPro.prototype.LimparCampos = function () {
        try {
            this.txtProfissional.Limpar();
            this.grd.Grid.PreencherGrid([]);
            this.Servicos = [];
            this.Servico = {};
            this.txtServico.Limpar();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ValSerPro.prototype.OnProcurouProfissional = function (s, e) {
        try {
            if (this.txtProfissional.GetText().CNum() <= 0) {
                this.LimparCampos();
                return;
            }
            var retorno = [];
            retorno = this.ExecutarFuncaoServerSideSynch("GetServicos", { codProfissional: this.txtProfissional.GetText().CNum() });
            if (retorno) {
                this.Servicos = retorno;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ValSerPro.prototype.OnAdicionandoGrd = function (s, e) {
        try {
            var entidade_1 = e.item;
            if (entidade_1.Codigo_Servico == undefined || entidade_1.Codigo_Servico <= 0) {
                MostrarAlerta("Informe o Serviço");
                e.cancelar = true;
                return;
            }
            if (entidade_1.Valor_Servico == undefined || entidade_1.Valor_Servico <= 0) {
                MostrarAlerta("Informe o Valor do Serviço");
                e.cancelar = true;
                return;
            }
            var hasServicoLista_1 = false;
            if (this.Servicos) {
                this.Servicos.forEach(function (q) {
                    if (q.Codigo_Servico == entidade_1.Codigo_Servico) {
                        hasServicoLista_1 = true;
                        return;
                    }
                });
            }
            if (hasServicoLista_1) {
                MostrarAlerta("Serviço já adicionado");
                e.cancelar = true;
                return;
            }
            entidade_1.Servico = this.txtServico.GetResultado();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ValSerPro.prototype.OnClickLimpar = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
    };
    C_ValSerPro.prototype.OnClickGravar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            if (this.txtProfissional.GetText().CNum() <= 0) {
                MostrarAlerta("Informe o Profissional");
                return false;
            }
            var entityList_1 = [];
            if (this.Servicos) {
                this.Servicos.forEach(function (q) {
                    entityList_1.push({
                        Codigo_Profissional: _this.txtProfissional.GetText().CNum(),
                        Codigo_Servico: q.Codigo_Servico,
                        Valor_Servico: q.Valor_Servico
                    });
                });
            }
            var param = {
                codigoProfissional: this.txtProfissional.GetText().CNum(),
                servicos: entityList_1,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("GravarRegistros", param, function (d) {
                try {
                    fecharEspera();
                    (d) ? MostrarMensagem("Registros gravados com sucesso") : MostrarError("Ocorreu um erro no sistema");
                }
                catch (ex) {
                    fecharEspera();
                    LogarExceptionAjax(ex);
                }
            }, function (er) {
                fecharEspera();
                LogarExceptionAjax(er);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_ValSerPro;
}(MouraPageAngular));
var c_ValSerPro = new C_ValSerPro();
//# sourceMappingURL=C_ValSerPro.js.map