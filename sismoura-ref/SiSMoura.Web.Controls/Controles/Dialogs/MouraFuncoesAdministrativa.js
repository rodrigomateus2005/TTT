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
var enmAutorizacaoMarcado;
(function (enmAutorizacaoMarcado) {
    enmAutorizacaoMarcado[enmAutorizacaoMarcado["Nenhum"] = 0] = "Nenhum";
    enmAutorizacaoMarcado[enmAutorizacaoMarcado["Gravar"] = 1] = "Gravar";
    enmAutorizacaoMarcado[enmAutorizacaoMarcado["Alterar"] = 2] = "Alterar";
    enmAutorizacaoMarcado[enmAutorizacaoMarcado["Excluir"] = 4] = "Excluir";
    enmAutorizacaoMarcado[enmAutorizacaoMarcado["Imprimir"] = 8] = "Imprimir";
    enmAutorizacaoMarcado[enmAutorizacaoMarcado["Excel"] = 16] = "Excel";
    enmAutorizacaoMarcado[enmAutorizacaoMarcado["OcultarColunas"] = 32] = "OcultarColunas";
    enmAutorizacaoMarcado[enmAutorizacaoMarcado["Todos"] = 63] = "Todos";
})(enmAutorizacaoMarcado || (enmAutorizacaoMarcado = {}));
var MouraFuncoesAdministrativasRetorno = /** @class */ (function () {
    function MouraFuncoesAdministrativasRetorno() {
    }
    return MouraFuncoesAdministrativasRetorno;
}());
var MouraFuncoesAdministrativa = /** @class */ (function (_super) {
    __extends(MouraFuncoesAdministrativa, _super);
    function MouraFuncoesAdministrativa(id) {
        return _super.call(this, id) || this;
    }
    Object.defineProperty(MouraFuncoesAdministrativa.prototype, "Context", {
        get: function () {
            return window[this.ID + "_Context"];
        },
        set: function (value) {
            window[this.ID + "_Context"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFuncoesAdministrativa.prototype, "FuncaoRetorno", {
        get: function () {
            return window[this.ID + "_FuncaoRetorno"];
        },
        set: function (value) {
            window[this.ID + "_FuncaoRetorno"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFuncoesAdministrativa.prototype, "FuncaoRetornoCancelamento", {
        get: function () {
            return window[this.ID + "_FuncaoRetornoCancelamento"];
        },
        set: function (value) {
            window[this.ID + "_FuncaoRetornoCancelamento"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFuncoesAdministrativa.prototype, "CodigoUsuario", {
        get: function () {
            return window[this.ID + "_CodigoUsuario"];
        },
        set: function (value) {
            window[this.ID + "_CodigoUsuario"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFuncoesAdministrativa.prototype, "hdncodfuncaoadm", {
        get: function () {
            return $("#" + this.ID + "_hdncodfuncaoadm")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFuncoesAdministrativa.prototype, "hdnUsarAngular", {
        get: function () {
            return $("#" + this.ID + "_hdnUsarAngular")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFuncoesAdministrativa.prototype, "FuncaoAdministrativa", {
        get: function () {
            return window[this.ID + "_FuncaoAdministrativa"];
        },
        set: function (value) {
            window[this.ID + "_FuncaoAdministrativa"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFuncoesAdministrativa.prototype, "IsClientMode", {
        get: function () {
            return window[this.ID + "isClientMode"];
        },
        set: function (value) {
            window[this.ID + "isClientMode"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFuncoesAdministrativa.prototype, "Modal", {
        get: function () {
            return window[this.ID + "_Modal_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFuncoesAdministrativa.prototype, "painel", {
        get: function () {
            return $("#" + this.ID + "_painel")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFuncoesAdministrativa.prototype, "painelFuncao", {
        get: function () {
            return $("#" + this.ID + "_painelFuncao")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFuncoesAdministrativa.prototype, "painelLogin", {
        get: function () {
            return $("#" + this.ID + "_painelLogin")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFuncoesAdministrativa.prototype, "painelSenha", {
        get: function () {
            return $("#" + this.ID + "_painelSenha")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFuncoesAdministrativa.prototype, "painelBotoes", {
        get: function () {
            return $("#" + this.ID + "_painelBotoes")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFuncoesAdministrativa.prototype, "painelRadios", {
        get: function () {
            return $("#" + this.ID + "_painelRadios")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFuncoesAdministrativa.prototype, "labelFuncao", {
        get: function () {
            return $("#" + this.ID + "_labelFuncao")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFuncoesAdministrativa.prototype, "login", {
        get: function () {
            return $("#" + this.ID + "_login")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFuncoesAdministrativa.prototype, "senha", {
        get: function () {
            return $("#" + this.ID + "_senha")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFuncoesAdministrativa.prototype, "botaoOk", {
        get: function () {
            return window[this.ID + "_botaoOk_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFuncoesAdministrativa.prototype, "botaoCancelar", {
        get: function () {
            return window[this.ID + "_botaoCancelar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    MouraFuncoesAdministrativa.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.botaoCancelar) {
            adicionarEventoMoura(this.botaoCancelar.Click, this.OnBotaoCancelarClick, this);
        }
        if (this.botaoOk) {
            adicionarEventoMoura(this.botaoOk.Click, this.OnBotaoOKClick, this);
        }
        this.IsClientMode = false;
        if (this.hdnUsarAngular.value == "S") {
            this.IsClientMode = true;
        }
        this.redirecionar = true;
    };
    MouraFuncoesAdministrativa.prototype.OnBotaoCancelarClick = function (s, e) {
        if (!this.IsClientMode)
            return;
        if (this.hdnUsarAngular.value == "S") {
            e.processOnServer = false;
        }
        e.cancelEventAndBubble = true;
        if (this.redirecionar) {
            window.location.href = formataURLRelativa("/Principal.aspx?A=N");
        }
        else {
            MostrarAlerta("Ação cancelada pelo usuário.");
            this.Modal.Hide();
            this.IsClientMode = false;
            var retorno = {};
            retorno.Valido = false;
            retorno.Autorizado = false;
            retorno.Cancelado = true;
            if (this.FuncaoRetornoCancelamento) {
                $.proxy(this.FuncaoRetornoCancelamento, this.Context)(retorno);
            }
        }
    };
    MouraFuncoesAdministrativa.prototype.OnBotaoOKClick = function (s, e) {
        if (!this.IsClientMode)
            return;
        if (this.hdnUsarAngular.value == "S") {
            e.processOnServer = false;
        }
        e.cancelEventAndBubble = true;
        var funcao;
        if (this.hdnUsarAngular.value == "S") {
            funcao = this.hdncodfuncaoadm.value;
        }
        else {
            funcao = this.FuncaoAdministrativa;
        }
        if (String.IsNullOrWhiteSpace(funcao)) {
            funcao = this.FuncaoAdministrativa;
        }
        var param = {
            nomeFuncao: funcao,
            usuario: this.login.value,
            senha: this.senha.value,
            loginWindows: false
        };
        var retornoS;
        try {
            retornoS = this.ExecutarHttpRequest("GetAutorizacoesLoginPorNomeFuncao", param);
        }
        catch (ex) {
            LogarException(ex);
        }
        retornoS = DecodeTextoJSON(retornoS);
        var retorno;
        if (!String.IsNullOrWhiteSpace(retornoS)) {
            retorno = JSON.parse(retornoS);
        }
        if (!retorno) {
            MostrarAlerta("Login ou senha incorretos.");
        }
        else if (retorno.Autorizado || String.IsNullOrWhiteSpace(funcao)) {
            retorno.Valido = true;
            //if (this.hdnUsarAngular.value != "S") {
            if (this.FuncaoRetorno) {
                $.proxy(this.FuncaoRetorno, this.Context)(retorno);
            }
            //}
            this.login.value = "";
            this.senha.value = "";
            if (retorno.Valido) {
                this.Modal.Hide();
                this.IsClientMode = false;
            }
        }
        else {
            MostrarAlerta("O usuário informado não tem permissão para executar esta ação. Informe outro usuário.");
        }
    };
    MouraFuncoesAdministrativa.prototype.Verificar = function (funcaoAdministrativa, codigoUsuario, redirecionar, funcaoRetorno, context, sempreVerificar, funcaoRetornoCancelamento) {
        this.redirecionar = redirecionar;
        if (!String.IsNullOrWhiteSpace(funcaoAdministrativa)) {
            var param = {
                nomeFuncao: funcaoAdministrativa,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retornoS;
            try {
                retornoS = this.ExecutarHttpRequest("GetAutorizacoesPorCodigoUsuario", param);
            }
            catch (ex) {
                LogarException(ex);
            }
            retornoS = DecodeTextoJSON(retornoS);
            var retorno;
            if (!String.IsNullOrWhiteSpace(retornoS)) {
                retorno = JSON.parse(retornoS);
            }
            if (!sempreVerificar || !retorno.SolicitarAutorizacao) {
                if (retorno && (!retorno.SenhaAoAbrir && retorno.Autorizado)) {
                    retorno.Valido = true;
                    $.proxy(funcaoRetorno, context)(retorno);
                    if (retorno.Valido)
                        return;
                }
            }
            param = {
                nomeFuncao: funcaoAdministrativa
            };
            var descricao;
            try {
                descricao = this.ExecutarHttpRequest("GetDescricaoFuncaoAdministrativaPorNome", param);
            }
            catch (ex) {
                LogarException(ex);
            }
            if (String.IsNullOrWhiteSpace(descricao))
                return;
            this.labelFuncao.innerText = descricao;
        }
        this.FuncaoAdministrativa = funcaoAdministrativa;
        this.CodigoUsuario = codigoUsuario;
        this.FuncaoRetorno = funcaoRetorno;
        this.Context = context;
        if (funcaoRetornoCancelamento) {
            this.FuncaoRetornoCancelamento = funcaoRetornoCancelamento;
        }
        this.Modal.Show();
        this.IsClientMode = true;
    };
    MouraFuncoesAdministrativa.prototype.VerificarPorCodigo = function (funcaoAdministrativa, codigoUsuario, redirecionar, funcaoRetorno, context) {
        this.redirecionar = redirecionar;
        var param = {
            codFuncao: funcaoAdministrativa,
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        var retornoS;
        try {
            retornoS = this.ExecutarHttpRequest("GetAutorizacoesPorCodigo", param);
        }
        catch (ex) {
            LogarException(ex);
        }
        retornoS = DecodeTextoJSON(retornoS);
        var retorno;
        if (!String.IsNullOrWhiteSpace(retornoS)) {
            retorno = JSON.parse(retornoS);
        }
        if (retorno && (!retorno.SenhaAoAbrir && retorno.Autorizado)) {
            retorno.Valido = true;
            $.proxy(funcaoRetorno, context)(retorno);
            if (retorno.Valido)
                return;
        }
        param = {
            codFuncao: funcaoAdministrativa
        };
        var descricao;
        try {
            descricao = this.ExecutarHttpRequest("GetDescricaoFuncaoAdministrativaPorCodigo", param);
        }
        catch (ex) {
            LogarException(ex);
        }
        if (String.IsNullOrWhiteSpace(descricao))
            return;
        this.FuncaoAdministrativa = "";
        this.CodigoUsuario = codigoUsuario;
        this.FuncaoRetorno = funcaoRetorno;
        this.Context = context;
        this.labelFuncao.innerText = descricao;
        this.Modal.Show();
        this.IsClientMode = true;
    };
    return MouraFuncoesAdministrativa;
}(MouraControl));
//# sourceMappingURL=MouraFuncoesAdministrativa.js.map