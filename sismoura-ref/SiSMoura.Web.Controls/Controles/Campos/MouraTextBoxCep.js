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
var MouraTextBoxCepPesquisouEventArgs = /** @class */ (function (_super) {
    __extends(MouraTextBoxCepPesquisouEventArgs, _super);
    function MouraTextBoxCepPesquisouEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraTextBoxCepPesquisouEventArgs;
}(MouraEventArgs));
var MouraTextBoxCep = /** @class */ (function (_super) {
    __extends(MouraTextBoxCep, _super);
    function MouraTextBoxCep(id) {
        var _this = _super.call(this, id) || this;
        _this.PesquisouCEP = new MouraGenericEventHandler();
        return _this;
    }
    Object.defineProperty(MouraTextBoxCep.prototype, "hdnProcuraAjax", {
        get: function () {
            return $("#" + this.ID + "_hdnProcuraAjax")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxCep.prototype, "botaoProcurar", {
        get: function () {
            return window[this.ID + "_botaoProcurar"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxCep.prototype, "IsProcuraAjax", {
        get: function () {
            if (this.hdnProcuraAjax && this.hdnProcuraAjax.value == "S") {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    MouraTextBoxCep.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.IsProcuraAjax && this.botaoProcurar) {
            adicionarEventoDevExpress(this.botaoProcurar.Click, this.OnClickBotaoProcurar, this);
        }
    };
    MouraTextBoxCep.prototype.OnClickBotaoProcurar = function (s, e) {
        e.processOnServer = false;
        this.ExecutarProcuraCEP(this.GetText());
    };
    MouraTextBoxCep.prototype.ExecutarProcuraCEP = function (cep) {
        if (String.IsNullOrWhiteSpace(cep)) {
            return;
        }
        var retornoSTR;
        var retorno;
        var param = { CEP: cep };
        retornoSTR = this.ExecutarHttpRequest("GetEnderecoByCEP", param);
        if (!String.IsNullOrWhiteSpace(retornoSTR)) {
            retorno = JSON.parse(retornoSTR);
        }
        else {
            retorno = null;
        }
        var evento;
        evento = new MouraTextBoxCepPesquisouEventArgs;
        if (retorno) {
            evento.Bairro = retorno.Bairro;
            evento.CidadeCodigo = retorno.CidadeCodigo;
            evento.CidadeDescricao = retorno.CidadeDescricao;
            evento.EncontrouEndereco = retorno.EncontrouEndereco;
            evento.Endereco = retorno.Endereco;
            evento.Erro = retorno.Erro;
            evento.Estado = retorno.Estado;
            evento.MensagemErro = retorno.MensagemErro;
            if (!retorno.EncontrouEndereco) {
                MostrarAlerta("Ocorreu um erro ao consultar o CEP.<br />Possíveis causas: Serviço indisponível / Cep não existe / Sem conexão com a internet");
            }
            this.PesquisouCEP.FireEvent(this, evento);
        }
        else {
            MostrarAlerta("Ocorreu um erro ao consultar o CEP.<br />Possíveis causas: Serviço indisponível / Cep não existe / Sem conexão com a internet");
        }
        return retorno;
    };
    return MouraTextBoxCep;
}(MouraTextBox));
//# sourceMappingURL=MouraTextBoxCep.js.map