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
var ConsChatOnLine = /** @class */ (function (_super) {
    __extends(ConsChatOnLine, _super);
    function ConsChatOnLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ConsChatOnLine.prototype, "txtChat", {
        get: function () {
            return window["txtChat_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsChatOnLine.prototype, "txtAtividade", {
        get: function () {
            return window['txtAtividade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsChatOnLine.prototype, "btnAtualizar", {
        get: function () {
            return window['btnAtualizar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsChatOnLine.prototype, "lblData", {
        get: function () {
            return window['lblData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsChatOnLine.prototype, "lblCliente", {
        get: function () {
            return window['lblCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConsChatOnLine.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    ConsChatOnLine.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnAtualizar) {
            adicionarEventoMoura(this.btnAtualizar.Click, this.OnClickBotaoAtualizar, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.OnClickBotaoLimpar, this);
        }
        if (this.txtAtividade) {
            adicionarEventoMoura(this.txtAtividade.Procurou, this.OnPesquisouAtividade, this);
        }
    };
    ConsChatOnLine.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparChat();
        this.txtAtividade.Limpar();
        var codAtividade = this.ParametrosTela['codAtividade'];
        if (!String.IsNullOrWhiteSpace(codAtividade)) {
            this.txtAtividade.Procurar(codAtividade);
        }
    };
    ConsChatOnLine.prototype.OnClickBotaoAtualizar = function (s, e) {
        e.processOnServer = false;
        this.ObterChat();
    };
    ConsChatOnLine.prototype.ObterChat = function () {
        try {
            var parametros = {
                codAtividade: this.txtAtividade.GetText().CNum(),
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherMensagens", parametros);
            if (retorno) {
                var dados = retorno.Atividade;
                if (dados) {
                    this.lblCliente.Text = dados.Razao_Social_Cliente;
                    var dataCadastro = ConvertToDate(dados.Data_Cadastro);
                    if (dataCadastro) {
                        this.lblData.Text = dataCadastro.FormataDataHora();
                    }
                }
                var mensagem = retorno.Mensagens;
                if (!String.IsNullOrWhiteSpace(mensagem)) {
                    this.txtChat.SetText(mensagem);
                }
                else {
                    MostrarMensagem("Este chat não possui nenhuma mensagem");
                    this.txtAtividade.Limpar();
                }
            }
        }
        catch (ex) {
            LogarException(ex);
            this.txtAtividade.Limpar();
        }
    };
    ConsChatOnLine.prototype.LimparChat = function () {
        this.txtChat.SetText("");
    };
    ConsChatOnLine.prototype.OnPesquisouAtividade = function (s, e) {
        this.LimparChat();
        if (this.txtAtividade.GetText().CNum() > 0) {
            this.ObterChat();
        }
        else {
            this.lblData.Text = "";
            this.lblCliente.Text = "";
        }
    };
    ConsChatOnLine.prototype.OnClickBotaoLimpar = function (s, e) {
        e.processOnServer = false;
        this.txtAtividade.Limpar();
        this.LimparChat();
    };
    return ConsChatOnLine;
}(MouraPageAngular));
var consChatOnLine = new ConsChatOnLine();
//# sourceMappingURL=ConsChatOnLine.js.map