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
var C_CfgLinEmp = /** @class */ (function (_super) {
    __extends(C_CfgLinEmp, _super);
    function C_CfgLinEmp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CfgLinEmp.prototype, "txtEmpresa", {
        get: function () {
            return window['txtEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CfgLinEmp.prototype, "txtLinha", {
        get: function () {
            return window['txtLinha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CfgLinEmp.prototype, "chkUtilizarEscala", {
        get: function () {
            return window['chkUtilizarEscala_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CfgLinEmp.prototype, "grdConfig", {
        get: function () {
            return window['grdConfig_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CfgLinEmp.prototype, "Configs", {
        get: function () {
            return this.GetScope()["Configs"];
        },
        set: function (value) {
            this.GetScope()["Configs"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CfgLinEmp.prototype, "Config", {
        get: function () {
            return this.GetScope()["Config"];
        },
        set: function (value) {
            this.GetScope()["Config"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CfgLinEmp.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CfgLinEmp.prototype, "btnExcluir", {
        get: function () {
            return window['btnExcluir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CfgLinEmp.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_CfgLinEmp.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtEmpresa) {
            adicionarEventoMoura(this.txtEmpresa.Procurou, this.OnTxtEmpresaProcurou, this);
        }
        if (this.grdConfig) {
            adicionarEventoMoura(this.grdConfig.AdicionandoItem, this.OnAdicionandoGrdConfig, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickGravar, this);
        }
        if (this.btnExcluir) {
            adicionarEventoMoura(this.btnExcluir.Click, this.OnClickExcluir, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.OnClickLimpar, this);
        }
    };
    C_CfgLinEmp.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    C_CfgLinEmp.prototype.LimparCampos = function () {
        try {
            this.txtEmpresa.Limpar();
            this.txtLinha.Limpar();
            this.chkUtilizarEscala.Checked = false;
            this.Configs = [];
            this.grdConfig.Grid.PreencherGrid([]);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CfgLinEmp.prototype.OnTxtEmpresaProcurou = function (s, e) {
        try {
            var configList = this.ExecutarFuncaoServerSideSynch("GetConfigs", { empresa: this.txtEmpresa.GetText().CNum() });
            if (configList) {
                this.PreencherGrade(configList);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CfgLinEmp.prototype.PreencherGrade = function (entityList) {
        try {
            this.Configs = entityList;
            this.grdConfig.Grid.PreencherGrid(this.Configs);
            this.GetScope().$applyAsync();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CfgLinEmp.prototype.OnAdicionandoGrdConfig = function (s, e) {
        var entidade = e.item;
        try {
            if (this.txtEmpresa.GetText().CNum() <= 0) {
                MostrarAlerta("Informe a empresa primeiramente");
                e.cancelar = true;
                return;
            }
            if (this.txtLinha.GetText().CNum() <= 0) {
                MostrarAlerta("Informe a linha");
                e.cancelar = true;
                return;
            }
            if (this.Configs) {
                var linhaEncontrada_1 = false;
                this.Configs.forEach(function (q) {
                    if (entidade.Codigo_Linha == q.Codigo_Linha) {
                        linhaEncontrada_1 = true;
                        return;
                    }
                });
                if (linhaEncontrada_1) {
                    MostrarAlerta("Configuração para essa Linha já inserida");
                    e.cancelar = true;
                    return;
                }
            }
            entidade.Linha = this.txtLinha.GetResultado();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CfgLinEmp.prototype.OnClickGravar = function (s, e) {
        e.processOnServer = false;
        try {
            if (this.txtEmpresa.GetText().CNum() <= 0) {
                MostrarAlerta("Informe a Empresa");
                return;
            }
            if (!this.Configs || this.Configs.length <= 0) {
                MostrarAlerta("Informe as Configurações");
                return;
            }
            var param = {
                empresa: this.txtEmpresa.GetText().CNum(),
                configs: this.Configs,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("Gravar", param, function (d) {
                fecharEspera();
                (d) ? MostrarMensagem("Registro gravado com sucesso") : MostrarError("Ocorreu um erro no sistema");
            }, function (err) {
                fecharEspera();
                LogarExceptionAjax(err);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CfgLinEmp.prototype.OnClickExcluir = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            if (this.txtEmpresa.GetText().CNum() <= 0) {
                MostrarAlerta("Nenhuma empresa selecionada para excluir as configurações");
                return;
            }
            MsgBoxJS("Deseja realmente excluir as configurações cadastradas para a empresa selecionada?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.Yes) {
                    var param = {
                        empresa: _this.txtEmpresa.GetText().CNum(),
                        tela: ValoresSismoura.NomeTela,
                        codUsuario: ValoresSismoura.UsuarioLogado
                    };
                    abrirEspera();
                    _this.ExecutarFuncaoServerSideAsynch("Excluir", param, function (d) {
                        fecharEspera();
                        (d) ? MostrarMensagem("Registro exclluido com sucesso") : MostrarError("Ocorreu um erro no sistema");
                        _this.LimparCampos();
                    }, function (err) {
                        fecharEspera();
                        LogarExceptionAjax(err);
                    }, _this);
                }
            });
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CfgLinEmp.prototype.OnClickLimpar = function (s, e) {
        e.processOnServer = false;
        try {
            this.LimparCampos();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_CfgLinEmp;
}(MouraPageAngular));
var c_CfgLinEmp = new C_CfgLinEmp();
//# sourceMappingURL=C_CfgLinEmp.js.map