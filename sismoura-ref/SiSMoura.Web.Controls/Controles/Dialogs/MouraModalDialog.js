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
var MouraModalDialogBotoes;
(function (MouraModalDialogBotoes) {
    MouraModalDialogBotoes[MouraModalDialogBotoes["OK"] = 1] = "OK";
    MouraModalDialogBotoes[MouraModalDialogBotoes["Sim"] = 2] = "Sim";
    MouraModalDialogBotoes[MouraModalDialogBotoes["Nao"] = 4] = "Nao";
    MouraModalDialogBotoes[MouraModalDialogBotoes["Cancelar"] = 8] = "Cancelar";
})(MouraModalDialogBotoes || (MouraModalDialogBotoes = {}));
var MouraModalDialog = /** @class */ (function (_super) {
    __extends(MouraModalDialog, _super);
    function MouraModalDialog(id) {
        return _super.call(this, id) || this;
    }
    Object.defineProperty(MouraModalDialog.prototype, "BotaoSim", {
        get: function () {
            return $("#" + this.ID + "_BotaoSim")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalDialog.prototype, "BotaoNao", {
        get: function () {
            return $("#" + this.ID + "_BotaoNao")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalDialog.prototype, "BotaoOK", {
        get: function () {
            return $("#" + this.ID + "_BotaoOK")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalDialog.prototype, "BotaoCancelar", {
        get: function () {
            return $("#" + this.ID + "_BotaoCancelar")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalDialog.prototype, "hdnCommand", {
        get: function () {
            return $("#" + this.ID + "_hdnCommand")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalDialog.prototype, "hdnParametros", {
        get: function () {
            return $("#" + this.ID + "_hdnParametros")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalDialog.prototype, "LabelMensagem", {
        get: function () {
            return $("#" + this.ID + "_LabelMensagem")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalDialog.prototype, "imgExclamacao", {
        get: function () {
            return $("#" + this.ID + "_imgExclamacao")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalDialog.prototype, "imgInterrogacao", {
        get: function () {
            return $("#" + this.ID + "_imgInterrogacao")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalDialog.prototype, "Modal", {
        get: function () {
            return window[this.ID + "_Modal_Object"];
        },
        enumerable: true,
        configurable: true
    });
    MouraModalDialog.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.BotaoSim) {
            adicionarEventoJQuery(this.BotaoSim, "click", this.OnClickBotao, this);
        }
        if (this.BotaoNao) {
            adicionarEventoJQuery(this.BotaoNao, "click", this.OnClickBotao, this);
        }
        if (this.BotaoOK) {
            adicionarEventoJQuery(this.BotaoOK, "click", this.OnClickBotao, this);
        }
        if (this.BotaoCancelar) {
            adicionarEventoJQuery(this.BotaoCancelar, "click", this.OnClickBotao, this);
        }
    };
    MouraModalDialog.prototype.AbrirClient = function (mensagem, botoes, funcaoRetorno) {
        if (!this.Modal)
            return;
        this.LabelMensagem.innerText = mensagem;
        $(this.BotaoOK).addClass("displayNone");
        $(this.BotaoCancelar).addClass("displayNone");
        $(this.BotaoNao).addClass("displayNone");
        $(this.BotaoSim).addClass("displayNone");
        $(this.imgExclamacao).addClass("displayNone");
        $(this.imgInterrogacao).addClass("displayNone");
        if ((MouraModalDialogBotoes.OK & botoes) == MouraModalDialogBotoes.OK) {
            $(this.BotaoOK).removeClass("displayNone");
        }
        if ((MouraModalDialogBotoes.Cancelar & botoes) == MouraModalDialogBotoes.Cancelar) {
            $(this.BotaoCancelar).removeClass("displayNone");
        }
        if ((MouraModalDialogBotoes.Sim & botoes) == MouraModalDialogBotoes.Sim) {
            $(this.BotaoNao).removeClass("displayNone");
        }
        if ((MouraModalDialogBotoes.Nao & botoes) == MouraModalDialogBotoes.Nao) {
            $(this.BotaoSim).removeClass("displayNone");
        }
        if (botoes == MouraModalDialogBotoes.OK) {
            $(this.imgExclamacao).removeClass("displayNone");
        }
        else {
            $(this.imgInterrogacao).removeClass("displayNone");
        }
        this.funcaoRetornoClient = funcaoRetorno;
        this.Modal.ModalDialog.Show();
    };
    MouraModalDialog.prototype.OnClickBotao = function (ev) {
        if (this.funcaoRetornoClient) {
            var funcaoBackup;
            ev.preventDefault();
            ev.returnValue = false;
            var botaoSelecionado;
            if (ev.target.id == this.BotaoOK.id) {
                botaoSelecionado = MouraModalDialogBotoes.OK;
            }
            else if (ev.target.id == this.BotaoSim.id) {
                botaoSelecionado = MouraModalDialogBotoes.Sim;
            }
            else if (ev.target.id == this.BotaoCancelar.id) {
                botaoSelecionado = MouraModalDialogBotoes.Cancelar;
            }
            else if (ev.target.id == this.BotaoNao.id) {
                botaoSelecionado = MouraModalDialogBotoes.Nao;
            }
            funcaoBackup = this.funcaoRetornoClient;
            this.Modal.ModalDialog.Hide();
            this.funcaoRetornoClient = null;
            funcaoBackup(botaoSelecionado);
            return false;
        }
    };
    MouraModalDialog.prototype.executarClickServer = function (key, botao, parametros) {
        this.hdnCommand.value = key;
        this.hdnParametros.value = parametros;
        __doPostBack(this.AspUniqueId, botao.valueOf().toString());
    };
    return MouraModalDialog;
}(MouraControl));
//# sourceMappingURL=MouraModalDialog.js.map