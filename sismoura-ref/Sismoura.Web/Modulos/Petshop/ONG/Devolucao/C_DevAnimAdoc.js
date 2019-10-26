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
var C_DevAnimAdoc = /** @class */ (function (_super) {
    __extends(C_DevAnimAdoc, _super);
    function C_DevAnimAdoc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.validouDataDevolucao = false;
        _this.enviarEmailDevolucao = false;
        return _this;
    }
    Object.defineProperty(C_DevAnimAdoc.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DevAnimAdoc.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DevAnimAdoc.prototype, "txtDataDevolucao", {
        get: function () {
            return window['txtDataDevolucao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DevAnimAdoc.prototype, "cboMotivoDevolucao", {
        get: function () {
            return window['cboMotivoDevolucao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DevAnimAdoc.prototype, "btnEnviarEmailDevolucao", {
        get: function () {
            return window['btnEnviarEmailDevolucao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_DevAnimAdoc.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.txtPet.TextBoxProprietario.AddParametro("isOng", "true");
        if (this.GetScope().Entity) {
            this.GetScope().Entity.Data_Cadastro = this.DataServidor();
            this.GetScope().Entity.Data_Devolucao = this.DataServidor();
            this.GetScope().Entity.Usuario = ValoresSismoura.UsuarioLogado;
            this.GetScope().Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        }
        this.RefreshAngular();
    };
    C_DevAnimAdoc.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        if (this.txtPet) {
            adicionarEventoMoura(this.txtPet.TextBoxProprietario.Procurou, this.OnTxtProprietarioOngProcurou, this);
            this.txtPet.TextBoxAnimal.LabelControl.innerHTML = "* Animal ONG (F2)";
            this.txtPet.TextBoxProprietario.LabelControl.innerHTML = "* Proprietário ONG (F2)";
        }
        if (this.btnEnviarEmailDevolucao) {
            adicionarEventoMoura(this.btnEnviarEmailDevolucao.Click, this.OnClickBotaonEnviarEmailDevolucao, this);
        }
    };
    C_DevAnimAdoc.prototype.OnGravouSucesso = function () {
        var _this = this;
        setTimeout(function () {
            debugger;
            if (_this.enviarEmailDevolucao) {
                _this.EnviarEmailDevolucao();
            }
        }, 200);
    };
    C_DevAnimAdoc.prototype.OnDepoisGravar = function () {
        this.PreencherEntidade("" + this.EntityTela.Codigo);
        return _super.prototype.OnDepoisGravar.call(this);
    };
    C_DevAnimAdoc.prototype.OnAntesGravar = function () {
        var _this = this;
        if (this.GetScope().Entity && this.GetScope().Entity.Codigo > 0) {
            MostrarAlerta('Esta devolução não pode ser alterada.');
            return false;
        }
        var dtDevolucao = this.txtDataDevolucao.Date.ToDate();
        var dtAtual = this.DataServidor();
        var dataInicialMes = dtAtual.firstDayOfMonth();
        var dataFinalMes = dtAtual.lastDayOfMonth();
        dataInicialMes.setHours(0, 0, 0, 0);
        dataFinalMes.setHours(0, 0, 0, 0);
        dtDevolucao.setHours(0, 0, 0, 0);
        if (!this.validouDataDevolucao) {
            if (!dtDevolucao.isBetween(dataInicialMes, dataFinalMes, true)) {
                MsgBoxJS('A data da devolução está fora do mês vigênte, deseja continuar?', MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                    if (result.Resultado == MsgBoxResult.No) {
                        return;
                    }
                    _this.validouDataDevolucao = true;
                    _this.enviarEmailDevolucao = true;
                    _this.ClicarGravar();
                });
                return;
            }
        }
        this.enviarEmailDevolucao = true;
        return _super.prototype.OnAntesGravar.call(this);
    };
    C_DevAnimAdoc.prototype.OnDepoisLimpar = function (entidade) {
        this.txtPet.TextBoxProprietario.AddParametro("isOng", "true");
        entidade.Data_Cadastro = this.DataServidor();
        entidade.Data_Devolucao = this.DataServidor();
        entidade.Usuario = ValoresSismoura.UsuarioLogado;
        entidade.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.validouDataDevolucao = false;
        this.enviarEmailDevolucao = false;
    };
    C_DevAnimAdoc.prototype.OnAntesDeletar = function () {
        MostrarAlerta('Não é possível excluir uma devolução');
        return false;
    };
    C_DevAnimAdoc.prototype.OnTxtProprietarioOngProcurou = function (s, e) {
        try {
            //Primeiro cadastra um fornecedor marcando a flag ONG, ao gravar o sistema automaticamente gera um cliente para o fornecedor.
            //Isso só ocorre para Petz.
            var codONGProprietario = this.txtPet.TextBoxProprietario.GetText().CNum();
            if (codONGProprietario <= 0) {
                return;
            }
            var parametros = {
                codONG: codONGProprietario,
                codEmpresa: this.cboEmpresa.GetValue()
            };
            if (!this.ExecutarFuncaoServerSideSynch("IsOngEmpresa", parametros)) {
                MostrarAlerta("Não foi encontrada nenhuma ONG com esse código e empresa selecionada");
                this.txtPet.Limpar();
                this.txtPet.TextBoxProprietario.Focus();
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_DevAnimAdoc.prototype.OnClickBotaonEnviarEmailDevolucao = function (s, e) {
        e.processOnServer = false;
        this.EnviarEmailDevolucao();
    };
    C_DevAnimAdoc.prototype.EnviarEmailDevolucao = function () {
        var parametros;
        if (!this.EntityTela.Codigo) {
            MostrarAlerta("Informe uma devolução cadastrada");
            return;
        }
        try {
            var parametros;
            parametros = {
                codDevolucao: this.EntityTela.Codigo
            };
            abrirEspera("Aguarde. Enviando email...");
            this.ExecutarFuncaoServerSideAsynch("EnviarEmailDevolucao", parametros, function (d) {
                try {
                    var retorno = JSON.parse(d);
                    fecharEspera();
                    if (retorno) {
                        MostrarMensagem("Email enviado com sucesso.");
                    }
                    else {
                        MostrarAlerta("Email não enviado.");
                    }
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
        return true;
    };
    return C_DevAnimAdoc;
}(MouraPageCadastroAngular));
var c_DevAnimAdoc = new C_DevAnimAdoc();
//# sourceMappingURL=C_DevAnimAdoc.js.map