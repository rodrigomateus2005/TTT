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
var C_ResApF = /** @class */ (function (_super) {
    __extends(C_ResApF, _super);
    function C_ResApF() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ResApF.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ResApF.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ResApF.prototype, "btnResgatar", {
        get: function () {
            return window['btnResgatar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ResApF.prototype, "cboConta_Corrente_Origem", {
        get: function () {
            return window['cboConta_Corrente_Origem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ResApF.prototype, "cboConta_Corrente_Destino", {
        get: function () {
            return window['cboConta_Corrente_Destino_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ResApF.prototype, "cboConta_Corrente_Destino_Modal", {
        get: function () {
            return window['cboConta_Corrente_Destino_Modal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ResApF.prototype, "txtValor_Resgate", {
        get: function () {
            return window['txtValor_Resgate_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ResApF.prototype, "txtJuros", {
        get: function () {
            return window['txtJuros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ResApF.prototype, "lblTotal", {
        get: function () {
            return window['lblTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ResApF.prototype, "lblConta_CorrenteOrigem", {
        get: function () {
            return window['lblConta_CorrenteOrigem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ResApF.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ResApF.prototype, "mdResgate", {
        get: function () {
            return window['mdResgate_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ResApF.prototype, "hdnCodigo", {
        get: function () {
            return $("#hdnCodigo")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ResApF.prototype, "hdnValor", {
        get: function () {
            return $("#hdnValor")[0];
        },
        enumerable: true,
        configurable: true
    });
    C_ResApF.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnClickGerar, this);
        }
        if (this.btnResgatar) {
            adicionarEventoMoura(this.btnResgatar.Click, this.OnClickResgatar, this);
        }
        if (this.txtJuros) {
            adicionarEventoMoura(this.txtJuros.TextChanged, this.CalcularTotal, this);
        }
        if (this.txtValor_Resgate) {
            adicionarEventoMoura(this.txtValor_Resgate.TextChanged, this.CalcularTotal, this);
        }
        if (this.grd) {
            adicionarEventoMoura(this.grd.ClickBotaoLinha, this.OnClickBotaoLinha, this);
        }
    };
    C_ResApF.prototype.OnClickBotaoLinha = function (s, e) {
        if (e.commandName == "Resgatar") {
            this.lblConta_CorrenteOrigem.Text = e.data.Conta_Corrente_Origem;
            this.hdnCodigo.value = e.data.Codigo;
            this.hdnValor.value = e.data.Valor_Resgate;
            this.txtValor_Resgate.Textbox.value = e.data.Valor_Resgate.Format(2);
            this.cboConta_Corrente_Destino_Modal.LimparSelecao();
            this.txtJuros.Textbox.value = "";
            this.lblTotal.Text = e.data.Valor_Resgate.Format(2);
            this.mdResgate.Show();
        }
    };
    C_ResApF.prototype.CalcularTotal = function () {
        var base = this.txtValor_Resgate.Textbox.value.CNum();
        this.lblTotal.Text = (base + (base / 100 * this.txtJuros.Textbox.value.CNum())).Format(2);
    };
    C_ResApF.prototype.OnClickResgatar = function (s, e) {
        e.processOnServer = false;
        if (this.cboConta_Corrente_Destino_Modal) {
            if (this.cboConta_Corrente_Destino_Modal.GetValue() == null) {
                MostrarAlerta("Preencha o campo corretamente: Conta Corrente Destino");
                return;
            }
        }
        if (this.txtValor_Resgate) {
            if (this.txtValor_Resgate.Textbox.value.CNum() == 0) {
                MostrarAlerta("Preencha o campo corretamente: Valor do Resgate");
                return;
            }
        }
        if (this.txtValor_Resgate.Textbox.value.CNum() > this.hdnValor.value.CNum()) {
            MostrarAlerta("O valor do resgate não pode ser maior que o saldo a ser resgatado");
            return;
        }
        var parametros;
        parametros = {
            codAplicacao: this.hdnCodigo.value.CNum(),
            Conta_Corrente_Destino: this.cboConta_Corrente_Destino_Modal.GetValue(),
            Valor_Resgate: this.txtValor_Resgate.Textbox.value.CNum(),
            Porcentagem_Juros: this.txtJuros.Textbox.value.CNum()
        };
        var retorno;
        retorno = this.ExecutarFuncaoServerSideSynch("GravarResgate", parametros);
        if (retorno == true) {
            MostrarMensagem("Resgate realizado com sucesso!");
            this.preencherGrade();
        }
        else {
            MostrarError("Não foi possível realizar o resgate!");
        }
        this.mdResgate.Hide();
    };
    C_ResApF.prototype.OnClickGerar = function (s, e) {
        e.processOnServer = false;
        if (this.txtPeriodo) {
            if (this.txtPeriodo.textBoxCalendarioInicio.GetDate() == null || this.txtPeriodo.textBoxCalendarioFim.GetDate() == null) {
                MostrarAlerta("Preencha o campo corretamente: Período");
                return;
            }
        }
        this.preencherGrade();
    };
    C_ResApF.prototype.preencherGrade = function () {
        var parametros;
        var Aplicacoes;
        var conta;
        var conta_destino;
        if (this.cboConta_Corrente_Origem.GetValue() != null) {
            conta = this.cboConta_Corrente_Origem.GetValue();
        }
        else {
            conta = "";
        }
        if (this.cboConta_Corrente_Destino.GetValue() != null) {
            conta_destino = this.cboConta_Corrente_Destino.GetValue();
        }
        else {
            conta_destino = "";
        }
        parametros = {
            dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
            dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
            conta_Corrente: conta,
            conta_corrente_Destino: conta_destino
        };
        Aplicacoes = this.ExecutarFuncaoServerSideSynch("PreencherGrade", parametros);
        if (Aplicacoes) {
            this.grd.PreencherGrid(Aplicacoes);
        }
    };
    return C_ResApF;
}(MouraPageAngular));
var c_ResApF = new C_ResApF();
//# sourceMappingURL=C_ResApF.js.map