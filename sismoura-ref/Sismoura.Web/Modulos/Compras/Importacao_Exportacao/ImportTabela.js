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
var ImportTabela = /** @class */ (function (_super) {
    __extends(ImportTabela, _super);
    function ImportTabela() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PATH_DOCUMENTOS = "~/Documentos/Importacao/";
        return _this;
    }
    Object.defineProperty(ImportTabela.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportTabela.prototype, "btnAnexos", {
        get: function () {
            return window['btnAnexos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportTabela.prototype, "dlgAnexo", {
        get: function () {
            return window['dlgAnexo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportTabela.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportTabela.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportTabela.prototype, "btnReverter", {
        get: function () {
            return window['btnReverter_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportTabela.prototype, "cboConfig", {
        get: function () {
            return window['cboConfig_Object'];
        },
        enumerable: true,
        configurable: true
    });
    ImportTabela.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnAnexos) {
            adicionarEventoMoura(this.btnAnexos.Click, this.OnBtnAnexoClick, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.OnBtnLimparClick, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnBtnGravarClick, this);
        }
        if (this.btnReverter)
            adicionarEventoMoura(this.btnReverter.Click, this.OnBtnReverterClick, this);
        if (this.dlgAnexo) {
            adicionarEventoMoura(this.dlgAnexo.fileUpload.FileUploadComplete, this.OnFilesUploadComplete, this);
        }
        if (this.cboConfig)
            adicionarEventoMoura(this.cboConfig.SelectedItemChanged, this.OnComboBoxConfigChange, this);
    };
    ImportTabela.prototype.OnComboBoxConfigChange = function () {
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            var param = {
                codConfiguracao: this.cboConfig.GetValue()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("HabilitarBotaoReverter", param);
            if (retorno) {
                this.btnReverter.Visible = retorno;
            }
            else {
                this.btnReverter.Visible = false;
            }
            this.RefreshAngular();
        }
    };
    ImportTabela.prototype.OnFilesUploadComplete = function (source, ev) {
        var _this = this;
        abrirEspera("Aguarde, carregando histórico dos serviços!");
        this.dlgAnexo.btnFechar.DoClick();
        this.GetScope()["itensHistorico"] = [];
        this.GetScope().$applyAsync();
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            var parametros = {
                Path: this.PATH_DOCUMENTOS,
                codConfiguracao: this.cboConfig.GetValue()
            };
            abrirEspera("Aguarde, importando dados da planilha!");
            this.ExecutarFuncaoServerSideAsynch("ImportarDadosPlanilha", parametros, function (d) {
                debugger;
                fecharEspera();
                if (GetRetornoAJAX(d)) {
                    _this.GetScope()["Registros"] = GetRetornoAJAX(d).ServicosTabela;
                    _this.GetScope()["itensHistorico"] = GetRetornoAJAX(d).Historico;
                    if (!String.IsNullOrWhiteSpace(GetRetornoAJAX(d).msgRetorno)) {
                        MostrarMensagem(GetRetornoAJAX(d).msgRetorno);
                    }
                    _this.GetScope().$applyAsync();
                }
            }, function (e) {
                fecharEspera();
                LogarException(e);
            }, this);
        }
        else {
            var parametros = {
                Path: this.PATH_DOCUMENTOS,
                codConfiguracao: this.cboConfig.GetValue()
            };
            this.ExecutarFuncaoServerSideAsynch("ImportarDadosPlanilha", parametros, function (d) {
                debugger;
                fecharEspera();
                if (GetRetornoAJAX(d)) {
                    _this.GetScope()["Registros"] = GetRetornoAJAX(d).ServicosTabela;
                    _this.GetScope()["itensHistorico"] = GetRetornoAJAX(d).Historico;
                    _this.GetScope().$applyAsync();
                }
            }, function (e) {
                fecharEspera();
                LogarException(e);
            }, this);
        }
    };
    ImportTabela.prototype.OnBtnAnexoClick = function (s, e) {
        e.processOnServer = false;
        if (this.cboConfig.GetValue() == null) {
            MostrarAlerta("Selecione uma configuração de importação!");
            return;
        }
        this.dlgAnexo.MostrarClient(this.PATH_DOCUMENTOS);
    };
    ImportTabela.prototype.OnBtnReverterClick = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            var param = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("UltimaAtualizacaoUsuario", param);
            if (retorno) {
                if (retorno == "") {
                    MostrarAlerta("Nenhuma importação realizada pelo usuário logado!");
                    return;
                }
            }
            MsgBoxJS("Atenção, os registros serão atualizados de acordo com o que estava antes da última importação (" + retorno + "). Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (q) {
                if (q.Resultado == MsgBoxResult.Yes) {
                    abrirEspera("Aguarde, revertendo atualização!");
                    var parametros = {};
                    _this.ExecutarFuncaoServerSideAsynch("ReverterRegistros", parametros, function (d) {
                        debugger;
                        fecharEspera();
                        if (String.IsNullOrWhiteSpace(GetRetornoAJAX(d))) {
                            MostrarError(GetRetornoAJAX(d));
                        }
                        else {
                            MostrarMensagem(GetRetornoAJAX(d));
                            _this.LimparCampos();
                        }
                    }, function (e) {
                        fecharEspera();
                        LogarException(e);
                    }, _this);
                }
            });
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    ImportTabela.prototype.OnBtnGravarClick = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        if (this.GetScope()["Registros"] == {}) {
            MostrarAlerta("Importe a planilha para gravar os registros!");
            return;
        }
        try {
            MsgBoxJS("Atenção, os registros serão importados de acordo com as informações da planilha. Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (q) {
                if (q.Resultado == MsgBoxResult.Yes) {
                    abrirEspera("Aguarde, inserindo os registros!");
                    var parametros = {
                        dados: JSON.stringify(_this.GetScope()["Registros"]),
                        codConfiguracao: _this.cboConfig.GetValue(),
                        itensHistorico: _this.GetScope()["itensHistorico"]
                    };
                    _this.ExecutarFuncaoServerSideAsynch("GravarRegistros", parametros, function (d) {
                        debugger;
                        fecharEspera();
                        if (String.IsNullOrWhiteSpace(GetRetornoAJAX(d))) {
                            MostrarMensagem("Registros atualizados com sucesso!");
                            _this.LimparCampos();
                        }
                        else {
                            MostrarError(GetRetornoAJAX(d));
                        }
                    }, function (e) {
                        fecharEspera();
                        LogarException(e);
                    }, _this);
                }
            });
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    ImportTabela.prototype.OnBtnLimparClick = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
    };
    ImportTabela.prototype.LimparCampos = function () {
        this.cboConfig.LimparSelecao();
        this.btnReverter.Visible = false;
        this.dlgAnexo.grdAnexos.PreencherGrid([]);
        this.ExcluirAnexos(this.PATH_DOCUMENTOS);
        this.GetScope()["Registros"] = {};
        this.GetScope().$applyAsync();
    };
    ImportTabela.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    return ImportTabela;
}(MouraPageAngular));
var importTabela = new ImportTabela();
//# sourceMappingURL=ImportTabela.js.map