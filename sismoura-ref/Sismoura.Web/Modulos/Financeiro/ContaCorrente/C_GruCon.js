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
var C_GruCon = /** @class */ (function (_super) {
    __extends(C_GruCon, _super);
    function C_GruCon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_GruCon.prototype, "Entity", {
        get: function () {
            if (!this.GetScope()["Entity"]) {
                this.GetScope()["Entity"] = {};
            }
            return this.GetScope()["Entity"];
        },
        set: function (value) {
            this.GetScope()["Entity"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruCon.prototype, "Entidades", {
        get: function () {
            if (!this.GetScope()["Entidades"]) {
                this.GetScope()["Entidades"] = [];
            }
            return this.GetScope()["Entidades"];
        },
        set: function (value) {
            this.GetScope()["Entidades"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruCon.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruCon.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruCon.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruCon.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruCon.prototype, "btnExcluir", {
        get: function () {
            return window['btnExcluir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruCon.prototype, "btnNovo", {
        get: function () {
            return window['btnNovo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_GruCon.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    C_GruCon.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.Procurou, this.OnDepoisProcurouCodigo, this);
        }
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.Procurou, this.OnDepoisProcurouContaContabil, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.AdicionandoItem, this.OnAntesAdicionarItem, this);
        }
        if (this.btnNovo) {
            adicionarEventoMoura(this.btnNovo.Click, this.OnClickNovo, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickGravar, this);
        }
        if (this.btnExcluir) {
            adicionarEventoMoura(this.btnExcluir.Click, this.OnClickExcluir, this);
        }
    };
    C_GruCon.prototype.LimparCampos = function () {
        this.txtCodigo.Limpar();
        this.Entity.Subconta = 0;
        this.Entity.Operacao = "";
        this.Entidades = [];
        this.RefreshAngular();
    };
    C_GruCon.prototype.OnDepoisProcurouCodigo = function (s, e) {
        var codigo = CNum(this.txtCodigo.GetText());
        if (codigo > 0) {
            if (!this.IsSintetico(codigo)) {
                MostrarAlerta("Você não pode utilizar uma conta analítica");
                this.txtCodigo.Limpar();
                this.RefreshAngular();
            }
            else {
                this.OnDepoisBuscarExistente(codigo);
            }
        }
    };
    C_GruCon.prototype.OnDepoisProcurouContaContabil = function (s, e) {
        if (CNum(this.txtContaContabil.GetText()) > 0) {
            if (!this.VerificaOrigemAndSintetica(CNum(this.txtContaContabil.GetText()))) {
                this.Entity.Subconta = 0;
                this.RefreshAngular();
            }
        }
    };
    C_GruCon.prototype.OnClickExcluir = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        MsgBoxJS("Deseja realmente excluir o registro?", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, function (r) {
            if (r.Resultado == MsgBoxResult.Yes) {
                _this.ExcluirRegistro(CNum(_this.txtCodigo.GetText()));
            }
        });
    };
    C_GruCon.prototype.ExcluirRegistro = function (conta) {
        var _this = this;
        var parametros;
        try {
            parametros = {
                conta: conta,
                tela: ValoresSismoura.NomeTela,
                usuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("ExcluirRegistro", parametros, function (d) {
                fecharEspera();
                MostrarMensagem("Registro excluído com sucesso!");
                _this.LimparCampos();
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
    C_GruCon.prototype.OnClickGravar = function (s, e) {
        e.processOnServer = false;
        var parametros;
        if (this.ValidarCamposObrigatorios()) {
            try {
                parametros = {
                    codConta: CNum(this.txtCodigo.GetText()),
                    listaTela: this.Entidades,
                    tela: ValoresSismoura.NomeTela,
                    usuario: ValoresSismoura.UsuarioLogado
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("Gravar", parametros, function (d) {
                    fecharEspera();
                    MostrarMensagem("Registro gravado com sucesso !");
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
    C_GruCon.prototype.OnAntesAdicionarItem = function (s, e) {
        if (!this.ValidarAdicionar()) {
            e.cancelar = true;
        }
        else if (this.Entidades.FindAll("Subconta", e.item.Subconta).length > 0) {
            e.cancelar = true;
            MostrarAlerta("Essa Conta Contábil já foi adicionada!");
        }
        else {
            e.item.Descricao = this.txtContaContabil.GetResultado();
        }
    };
    C_GruCon.prototype.ValidarAdicionar = function () {
        var retorno = true;
        if (CNum(this.txtCodigo.GetText()) <= 0) {
            MostrarMensagemCampoObrigatorio("Código");
            retorno = false;
        }
        else if (CNum(this.Entity.Subconta) <= 0) {
            MostrarMensagemCampoObrigatorio("Conta Contábil");
            retorno = false;
        }
        else if (String.IsNullOrWhiteSpace(this.Entity.Operacao)) {
            MostrarMensagemCampoObrigatorio("Operação");
            retorno = false;
        }
        return retorno;
    };
    C_GruCon.prototype.OnClickNovo = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
    };
    C_GruCon.prototype.ValidarCamposObrigatorios = function () {
        _super.prototype.ValidarCamposObrigatorios.call(this);
        if (this.Entidades.length <= 0) {
            MostrarAlerta("Informe as conta que serão agrupadas!");
            return false;
        }
        return true;
    };
    C_GruCon.prototype.IsSintetico = function (codContaContabil) {
        var parametros;
        try {
            parametros = {
                codContaContabil: codContaContabil
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("IsSintetico", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_GruCon.prototype.VerificaOrigemAndSintetica = function (codContaContabil) {
        var parametros;
        try {
            parametros = {
                codContaContabil: codContaContabil
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificaOrigemAndSintetica", parametros);
            if (retorno.Erro) {
                MostrarAlerta(retorno.MensagemAlerta);
            }
            return !retorno.Erro;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_GruCon.prototype.OnDepoisBuscarExistente = function (codigo) {
        this.PreencherGrade(codigo);
    };
    C_GruCon.prototype.PreencherGrade = function (codigo) {
        var _this = this;
        var parametros;
        try {
            parametros = {
                codigo: codigo
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                var retorno = GetRetornoAJAX(d);
                _this.Entidades = retorno;
                _this.RefreshAngular();
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
    return C_GruCon;
}(MouraPageAngular));
var c_GruCon = new C_GruCon();
//# sourceMappingURL=C_GruCon.js.map