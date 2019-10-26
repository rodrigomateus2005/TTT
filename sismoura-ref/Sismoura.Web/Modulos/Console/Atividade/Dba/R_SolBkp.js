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
var R_SolBkp = /** @class */ (function (_super) {
    __extends(R_SolBkp, _super);
    function R_SolBkp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idInterval = null;
        _this.executandoBackup = false;
        return _this;
    }
    Object.defineProperty(R_SolBkp.prototype, "txtBancoCliente", {
        get: function () {
            return window['txtBancoCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SolBkp.prototype, "lblBackup", {
        get: function () {
            return window['lblBackup_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_SolBkp.prototype.Init = function () {
        var _this = this;
        _super.prototype.Init.call(this);
        if (!this.idInterval) {
            this.idInterval = setInterval(function () {
                _this.AtualizarStatus();
            }, 1000);
        }
    };
    R_SolBkp.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_SolBkp.prototype.OnClickBackup = function () {
        var _this = this;
        if (this.txtBancoCliente.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o banco do cliente");
            return;
        }
        MsgBoxJS("Deseja realmente solicitar um backup do banco de dados selecionado?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
            if (result.Resultado == MsgBoxResult.Yes) {
                _this.BackupBanco();
            }
        }, null, "");
    };
    R_SolBkp.prototype.BackupBanco = function () {
        var _this = this;
        try {
            var parametros;
            if (this.txtBancoCliente.GetText().CNum() <= 0) {
                MostrarAlerta("Informe o banco do cliente");
                return;
            }
            parametros = {
                codBancoCliente: this.txtBancoCliente.GetText().CNum(),
                codUsuario: ValoresSismoura.UsuarioLogado,
                tela: ValoresSismoura.NomeTela
            };
            this.lblBackup.Text = "";
            abrirEspera();
            this.executandoBackup = true;
            this.ExecutarFuncaoServerSideAsynch("SolicitarBackup", parametros, function (d) {
                try {
                    _this.executandoBackup = false;
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (!String.IsNullOrWhiteSpace(retorno)) {
                        MostrarMensagem("Backup concluído com sucesso!");
                        _this.lblBackup.Text = retorno;
                    }
                }
                catch (ex) {
                    _this.executandoBackup = false;
                    LogarException(ex);
                }
            }, function (erro) {
                _this.executandoBackup = false;
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            this.executandoBackup = false;
            LogarException(ex);
        }
    };
    R_SolBkp.prototype.AtualizarStatus = function () {
        try {
            if (!this.executandoBackup) {
                return;
            }
            var parametros;
            parametros = {};
            this.ExecutarFuncaoServerSideAsynch("GetStatusAtualizacao", parametros, function (d) {
                var retorno = GetRetornoAJAX(d);
                if (!String.IsNullOrWhiteSpace(retorno)) {
                    abrirEspera(retorno);
                }
            }, function (erro) {
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_SolBkp.prototype.DownloadArquivo = function () {
        if (String.IsNullOrWhiteSpace(this.lblBackup.Text)) {
            MostrarAlerta("Não foi gerado nenhum backup. Clique no botão Solicitar Backup");
            return;
        }
        window.open(this.lblBackup.Text, "_blank");
    };
    return R_SolBkp;
}(MouraPageAngular));
var r_SolBkp = new R_SolBkp();
//# sourceMappingURL=R_SolBkp.js.map