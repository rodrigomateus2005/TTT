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
var C_Config = /** @class */ (function (_super) {
    __extends(C_Config, _super);
    function C_Config() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Config.prototype, "Entity", {
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
    Object.defineProperty(C_Config.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Config.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Config.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        var entidade = this.GetEntidade();
        if (entidade) {
            this.Entity = entidade;
            this.cboContaCorrente.SetContaCorrente(entidade.Conta_Corrente_Padrao_Cheque);
        }
        this.RefreshAngular();
    };
    C_Config.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickGravar, this);
        }
    };
    C_Config.prototype.OnClickGravar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        this.Entity.Conta_Corrente_Padrao_Cheque = this.cboContaCorrente.GetContaCorrente();
        this.Entity.Conta_Porcentagem = CNum(this.Entity.Conta_Porcentagem);
        this.Entity.Conta_Contabil_Cheque = CNum(this.Entity.Conta_Contabil_Cheque);
        this.Entity.Conta_Contabil_Retorno = CNum(this.Entity.Conta_Contabil_Retorno);
        this.Entity.Boleto_Codigo = CNum(this.Entity.Boleto_Codigo);
        this.Entity.Selecionar_Respons_Imprimir = this.Entity.Permitir_Resp_Imprimir == "S";
        if (this.Entity.Permitir_Resp_Imprimir == "S") {
            var mensagem = "";
            mensagem += "ATENÇÃO! Caso a Empresa utilize 'Arquivo de Retorno (.RET)' para dar baixa nos boletos, ";
            mensagem += "a configuração 'Financeiro > Boleto > Arquivo de Retorno > ";
            mensagem += "Configuração do Arquivo de Retorno > 'Tipo de identificação do arquivo de retorno' ";
            mensagem += "DEVE ser igual a 'Codigo conta a receber', para que o sistema baixe as Contas a receber ";
            mensagem += "pelo Código e não pelo Nosso Número, sendo que nos casos do boleto ser impresso pelo banco, ";
            mensagem += "quem gera o 'Nosso Número' não é a empresa/cedente, já o Código do Contas a Receber sempre será o mesmo!";
            MsgBoxJS(mensagem, MsgBoxOptions.OkOnly, MsgBoxIcon.Info, function (r) { return _this.GravarConfiguracao(); });
            return;
        }
        this.GravarConfiguracao();
    };
    C_Config.prototype.GetEntidade = function () {
        var parametros;
        try {
            parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("GetEntidade", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Config.prototype.LimparCampos = function () {
        this.Entity.Conta_Contabil = "";
        this.Entity.Conta_Porcentagem = 0;
        this.Entity.Conta_Contabil_Cheque = 0;
        this.Entity.Centro_Custo = "";
        this.cboContaCorrente.Limpar();
        this.Entity.Parcelas_Word = 0;
        this.Entity.Contrato_Qtde_Tags = 0;
        this.Entity.Permitir_Resp_Imprimir = "S";
        this.Entity.Boleto_Codigo = 0;
        this.Entity.Especie_Doc = "";
        this.Entity.Local_Pagamento = "";
        this.Entity.Porcentagem_Juros = 0;
        this.Entity.Porcentagem_Multa = 0;
        this.Entity.Boleto_Mensagem1 = "";
        this.Entity.Boleto_Mensagem2 = "";
        this.Entity.Boleto_Mensagem3 = "";
        this.Entity.Boleto_Mensagem4 = "";
        this.Entity.Boleto_Mensagem5 = "";
        this.Entity.Conta_Contabil_Retorno = 0;
        this.RefreshAngular();
    };
    C_Config.prototype.GravarConfiguracao = function () {
        var parametros;
        try {
            parametros = {
                entity: this.Entity,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GravarConfiguracao", parametros, function (d) {
                fecharEspera();
                MostrarMensagem("Configurações alteradas com sucesso!");
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
    return C_Config;
}(MouraPageAngular));
var c_Config = new C_Config();
//# sourceMappingURL=C_Config.js.map