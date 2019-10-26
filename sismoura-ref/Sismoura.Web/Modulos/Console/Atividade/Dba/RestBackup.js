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
var RestBackup = /** @class */ (function (_super) {
    __extends(RestBackup, _super);
    function RestBackup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idInterval = null;
        _this.fileUploaded = null;
        _this.executandoBackup = false;
        return _this;
    }
    Object.defineProperty(RestBackup.prototype, "cboServidor", {
        get: function () {
            return window['cboServidor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestBackup.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestBackup.prototype, "txtNomeBanco", {
        get: function () {
            return window['txtNomeBanco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestBackup.prototype, "txtNomeUsuario", {
        get: function () {
            return window['txtNomeUsuario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestBackup.prototype, "fpPath", {
        get: function () {
            return window['fpPath_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestBackup.prototype, "cboTipoBanco", {
        get: function () {
            return window['cboTipoBanco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestBackup.prototype, "IsDba", {
        get: function () {
            return ($("#hdnIsDba").val() == "S" ? true : false);
        },
        enumerable: true,
        configurable: true
    });
    RestBackup.prototype.Init = function () {
        var _this = this;
        _super.prototype.Init.call(this);
        if (this.fpPath) {
            adicionarEventoMoura(this.fpPath.FileUploadComplete, this.OnFileUploaded, this);
        }
        if (!this.idInterval) {
            this.idInterval = setInterval(function () {
                _this.AtualizarStatus();
            }, 1000);
        }
        this.HabilitaCampos();
    };
    RestBackup.prototype.HabilitaCampos = function () {
        if (!this.IsDba) {
            this.cboServidor.Enabled = false;
            this.txtCliente.Disabled = true;
            this.txtNomeBanco.Enabled = false;
            this.txtNomeUsuario.Enabled = false;
            this.cboTipoBanco.Enabled = false;
        }
    };
    RestBackup.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.HabilitaCampos();
        if (this.ParametrosURL && this.ParametrosURL.codMigracao) {
            this.GetDadosMigracao(CNum(this.ParametrosURL.codMigracao));
        }
    };
    RestBackup.prototype.GetDadosMigracao = function (codMigracao) {
        if (!codMigracao) {
            return;
        }
        //var parametros: any = {
        //    codMigracao: codMigracao
        //};
        //var retorno = this.ExecutarFuncaoServerSideSynch(
        //    "GetDadosMigracao",
        //    parametros            
        //);
    };
    RestBackup.prototype.OnClickBotaoIniciar = function () {
        var _this = this;
        try {
            var parametros;
            this.HabilitaCampos();
            if (!this.ValidarCamposObrigatorios()) {
                return;
            }
            if (!this.fileUploaded || String.IsNullOrWhiteSpace(this.fileUploaded.name)) {
                MostrarAlerta("Informe o arquivo de backup do banco de dados. Aguarde até que o arquivo seja inteiramente carregado");
                return;
            }
            parametros = {
                codServidor: CNum(this.cboServidor.GetValue()),
                codCliente: CNum(this.txtCliente.GetText()),
                nomeBanco: this.txtNomeBanco.GetText(),
                nomeUsuario: this.txtNomeUsuario.GetText(),
                pathSalvarBackup: this.fpPath.PathSalvarArquivo,
                fileName: this.fpPath.File.name,
                codUsuario: ValoresSismoura.UsuarioLogado,
                nomeTela: ValoresSismoura.NomeTela,
                codTipoBanco: CNum(this.cboTipoBanco.GetValue())
            };
            abrirEspera();
            this.executandoBackup = true;
            this.ExecutarFuncaoServerSideAsynch("IniciarProcesso", parametros, function (d) {
                _this.executandoBackup = false;
                fecharEspera();
                var bancoCliente = GetRetornoAJAX(d);
                if (bancoCliente) {
                    MostrarMensagem("Restore concluído com sucesso!");
                    _this.IncluirBancoBackup(CNum(bancoCliente.Codigo));
                }
                else {
                    MostrarMensagem("Ocorreu um erro ao restuarar o banco de dados");
                }
            }, function (erro) {
                _this.executandoBackup = false;
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            this.executandoBackup = false;
            fecharEspera();
            LogarException(ex);
        }
    };
    RestBackup.prototype.IncluirBancoBackup = function (codBanco) {
        var parametros = {
            codBanco: codBanco
        };
        abrirEspera("Incluindo banco de dados na rotina de backup");
        this.ExecutarFuncaoServerSideAsynch("IncluirControleBackup", parametros, function (d) {
            fecharEspera();
            MostrarMensagem("Banco de dados incluído no controle de backup!");
        }, function (erro) {
            fecharEspera();
            LogarException(erro);
            MostrarMensagem("Ocorreu um erro ao incluir o banco de dados na rotina de backup, porém o banco de dados já está restaurado no servidor. <br />Entre em contato com o DBA");
        }, this);
    };
    RestBackup.prototype.OnFileUploaded = function (s, e) {
        this.fileUploaded = this.fpPath.File;
    };
    RestBackup.prototype.AtualizarStatus = function () {
        var _this = this;
        try {
            if (!this.executandoBackup) {
                return;
            }
            var parametros;
            parametros = {};
            this.ExecutarFuncaoServerSideAsynch("GetStatusAtualizacao", parametros, function (d) {
                var retorno = GetRetornoAJAX(d);
                if (!_this.executandoBackup) {
                    return;
                }
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
    return RestBackup;
}(MouraPageAngular));
var restBackup = new RestBackup();
//# sourceMappingURL=RestBackup.js.map