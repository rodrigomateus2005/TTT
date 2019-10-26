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
var C_Saldo = /** @class */ (function (_super) {
    __extends(C_Saldo, _super);
    function C_Saldo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Saldo.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Saldo.prototype, "btnCalcular", {
        get: function () {
            return window['btnCalcular_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Saldo.prototype, "btnGerarLote", {
        get: function () {
            return window['btnGerarLote_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Saldo.prototype, "mdSaldos", {
        get: function () {
            return window['mdSaldos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Saldo.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Saldo.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Saldo.prototype, "lstContaCorrente_Lista", {
        get: function () {
            return window['lstContaCorrente_Lista_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Saldo.prototype, "lstContaCorrente_CheckBox", {
        get: function () {
            return window['lstContaCorrente_CheckBox_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Saldo.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnCalcular) {
            adicionarEventoMoura(this.btnCalcular.Click, this.OnClickCalcular, this);
        }
        if (this.btnGerarLote) {
            adicionarEventoMoura(this.btnGerarLote.Click, this.OnClickGerarLote, this);
        }
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
    };
    C_Saldo.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.GetCadastrados();
    };
    C_Saldo.prototype.OnSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_Saldo.prototype.OnClickCalcular = function (s, e) {
        e.processOnServer = false;
        this.LimparCamposCalcular();
        this.mdSaldos.Show();
    };
    C_Saldo.prototype.LimparCamposCalcular = function () {
        if (this.txtData.Date) {
            this.txtPeriodo.textBoxCalendarioInicio.SetDate(this.txtData.Date);
            this.txtPeriodo.textBoxCalendarioFim.SetDate(this.txtData.Date);
        }
        else {
            this.txtPeriodo.IniciarDataAtual();
        }
        this.lstContaCorrente_Lista.LimparSelecao();
        this.lstContaCorrente_CheckBox.Checked = false;
    };
    C_Saldo.prototype.OnClickGerarLote = function (s, e) {
        e.processOnServer = false;
        try {
            if (!this.txtPeriodo.textBoxCalendarioInicio.GetDate() || !this.txtPeriodo.textBoxCalendarioFim.GetDate()) {
                MostrarAlerta("Preencha Correntamente o campo: Período.");
                return;
            }
            if (this.lstContaCorrente_Lista) {
                if (this.lstContaCorrente_Lista.GetValues().length <= 0) {
                    MostrarAlerta("Preencha o campo corretamente: Conta Corrente");
                    return;
                }
            }
            MsgBoxJS("Deseja realmente lançar os saldos iniciais para as contas selecionadas?</br></br> Atenção: Se já existir um saldo cadastrado neste período para a conta corrente ele será substituído!", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRepostaGerarSaldos, this));
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Saldo.prototype.OnRepostaGerarSaldos = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            var parametros;
            parametros = {
                lstContaCorrente: this.lstContaCorrente_Lista.GetValues(),
                dataInicio: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFim: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GerarSaldosLote", parametros);
            if (retorno) {
                this.mdSaldos.Hide();
                MostrarMensagem("Saldos cadastrados com sucesso!");
                this.GetCadastrados();
            }
        }
        else {
            return;
        }
    };
    C_Saldo.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Id = 0;
        Entity.Data = this.DataServidor();
        Entity.Saldo = 0;
        Entity.Conta_Corrente = "";
        Entity.Conciliado = false;
        Entity.Conciliado_Data = this.DataServidor();
        Entity.Dc = "";
        this.LimparCamposCalcular();
        this.GetCadastrados();
    };
    C_Saldo.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var parametros;
        if (!this.EntityTela.Id) {
            this.EntityTela.Id = 0;
        }
        parametros = {
            codSaldo: this.EntityTela.Id,
            contaCorrente: this.EntityTela.Conta_Corrente,
            data: this.EntityTela.Data.ToDate()
        };
        var saldo = this.ExecutarFuncaoServerSideSynch("VerificaSaldoInicial", parametros);
        if (!saldo) {
            MostrarAlerta("Já existe um saldo inicial cadastrado para a conta corrente na data informada.");
            return false;
        }
        return true;
    };
    C_Saldo.prototype.GetCadastrados = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(cad);
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Saldo.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.GetCadastrados();
        return true;
    };
    return C_Saldo;
}(MouraPageCadastroAngular));
var c_Saldo = new C_Saldo();
//# sourceMappingURL=C_Saldo.js.map