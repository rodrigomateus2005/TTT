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
var C_Promis = /** @class */ (function (_super) {
    __extends(C_Promis, _super);
    function C_Promis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Promis.prototype, "Entity", {
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
    Object.defineProperty(C_Promis.prototype, "Impressao", {
        get: function () {
            if (!this.GetScope()["Impressao"]) {
                this.GetScope()["Impressao"] = {};
            }
            return this.GetScope()["Impressao"];
        },
        set: function (value) {
            this.GetScope()["Impressao"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promis.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promis.prototype, "btnExcluir", {
        get: function () {
            return window['btnExcluir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promis.prototype, "btnImprimir", {
        get: function () {
            return window['btnImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promis.prototype, "btnImprimirConfig", {
        get: function () {
            return window['btnImprimirConfig_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promis.prototype, "btnSelecionar", {
        get: function () {
            return window['btnSelecionar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promis.prototype, "btnOk", {
        get: function () {
            return window['btnOk_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promis.prototype, "btnCancelar", {
        get: function () {
            return window['btnCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promis.prototype, "mdModelo", {
        get: function () {
            return window['mdModelo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promis.prototype, "txtVenda", {
        get: function () {
            return window['txtVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promis.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promis.prototype, "lblOrcamento", {
        get: function () {
            return window['lblOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promis.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Promis.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouImpressao) {
            this.GetScope().MudouImpressao = $.proxy(this.MudouImpressao, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Impressao.Imprimir; }, this.GetScope().MudouImpressao);
        }
        this.LimparCampos();
    };
    C_Promis.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtVenda) {
            adicionarEventoMoura(this.txtVenda.Procurou, this.OnProcurouVenda, this);
            adicionarEventoDevExpress(this.txtVenda.BotaoNovo.Click, this.LimparCampos, this);
        }
        if (this.btnSelecionar) {
            adicionarEventoMoura(this.btnSelecionar.Click, this.OnClickSelecionar, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.OnCellPrepared, this);
            adicionarEventoMoura(this.grid.RowValidating, this.OnRowValidating, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickGravar, this);
        }
        if (this.btnExcluir) {
            adicionarEventoMoura(this.btnExcluir.Click, this.OnClickExcluir, this);
        }
        if (this.btnImprimir) {
            adicionarEventoMoura(this.btnImprimir.Click, this.OnClickImprimir, this);
        }
        if (this.btnImprimirConfig) {
            adicionarEventoMoura(this.btnImprimirConfig.Click, this.OnClickImprimirConfig, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnClickCancelar, this);
        }
        if (this.btnOk) {
            adicionarEventoMoura(this.btnOk.Click, this.OnClickOk, this);
        }
    };
    C_Promis.prototype.LimparCampos = function () {
        this.Entity.Venda = 0;
        this.Entity.Data = null;
        this.Entity.Data_Formatada = "";
        this.Entity.Nome_Vendedor = "";
        this.Entity.Nome_Cliente = "";
        this.Entity.Orcamento = 0;
        this.Entity.Codigo_Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.lblOrcamento.Visible = false;
        this.grid.PreencherGrid(null);
        this.LimparCamposImpressao();
        this.RefreshAngular();
    };
    C_Promis.prototype.LimparCamposImpressao = function () {
        this.Impressao.Modelo = "1";
        this.Impressao.Imprimir = "E";
        this.Impressao.Parcelas = "P";
        this.Impressao.Modelo_Configurado = null;
        this.RefreshAngular();
    };
    C_Promis.prototype.MudouImpressao = function () {
        if (this.Impressao.Imprimir == "E") {
            this.cboEmpresa.Visible = true;
        }
        else {
            this.cboEmpresa.Visible = false;
        }
    };
    C_Promis.prototype.OnProcurouVenda = function (s, e) {
        if (CNum(this.txtVenda.GetText()) > 0) {
            this.PreencherGrade();
        }
        else {
            this.LimparCampos();
        }
    };
    C_Promis.prototype.PreencherGrade = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                codVenda: CNum(this.txtVenda.GetText())
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.Entity = retorno.Dados_Promissoria;
                if (CNum(_this.Entity.Codigo_Empresa) <= 0) {
                    _this.Entity.Codigo_Empresa = ValoresSismoura.EmpresaPadraoUsuario;
                }
                if (String.IsNullOrWhiteSpace(retorno.Erro)) {
                    if (CNum(_this.Entity.Orcamento) > 0) {
                        _this.lblOrcamento.Visible = true;
                    }
                    _this.grid.PreencherGrid(retorno.Dados_Grade);
                }
                else {
                    MsgBoxJS(retorno.Erro, MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, function (r) {
                        if (r.Resultado == MsgBoxResult.Ok) {
                            _this.LimparCampos();
                        }
                    });
                }
                _this.RefreshAngular();
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
    C_Promis.prototype.OnClickSelecionar = function (s, e) {
        e.processOnServer = false;
        var dadosSelecionados = this.grid.DataSource.filter(function (item) { return (item.Imprimir == true || item.Emitir == true); });
        var acao;
        if (dadosSelecionados.length == this.grid.DataSource.length) {
            acao = false;
        }
        else {
            acao = true;
        }
        this.grid.DataSource.forEach(function (item) {
            item.Imprimir = acao;
            if (CNum(item.Codigo_Promissoria) <= 0) {
                item.Emitir = acao;
            }
        });
        this.grid.Refresh();
    };
    C_Promis.prototype.OnCellPrepared = function (s, e) {
        if (e.rowType == "data") {
            if (e.data["Imprimir"] == true || e.data["Emitir"] == true) {
                e.cellElement.css("color", "blue");
                e.cellElement.css("font-weight", "bold");
            }
            else {
                e.cellElement.css("color", "black");
                e.cellElement.css("font-weight", "normal");
            }
        }
    };
    C_Promis.prototype.OnClickGravar = function (s, e) {
        e.processOnServer = false;
        var dadosSelecionados = this.grid.DataSource.filter(function (item) {
            return item.Emitir == true;
        });
        if (dadosSelecionados.length <= 0) {
            MostrarAlerta("Não há nenhuma Promissoria para ser emitida!");
            return;
        }
        if (this.Impressao.Parcelas == "A") {
            this.GravarPromissoriaAgrupada(false);
        }
        else {
            this.GravarPromissoria(false);
        }
    };
    C_Promis.prototype.GravarPromissoriaAgrupada = function (configurado) {
        var _this = this;
        var parametros;
        try {
            var dadosGrade = this.grid.DataSource;
            parametros = {
                codVenda: this.Entity.Venda,
                codCliente: CNum(this.Entity.Codigo_Cliente),
                codVendedor: CNum(this.Entity.Codigo_Vendedor),
                tipoImpressao: this.Impressao.Imprimir,
                dadosContasReceber: JSON.stringify(dadosGrade),
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GravarPromissoriaAgrupada", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                var promissoriasImpressao = dadosGrade.filter(function (item) { return item.Imprimir; });
                if (CNum(retorno) > 0) {
                    MostrarMensagem("Promissória(s) gravada(s) com sucesso!");
                    _this.PreencherGrade();
                }
                if (configurado) {
                    if (promissoriasImpressao.length > 0) {
                        setTimeout(function () { _this.ImprimirConfigurado(_this.Impressao.Modelo_Configurado, [retorno]); }, 300);
                    }
                }
                else {
                    MsgBoxJS("Deseja imprimir a promissoria?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                        if (result.Resultado == MsgBoxResult.Yes) {
                            _this.ImprimirPromissoriaAgrupada(_this.Impressao.Modelo, [retorno]);
                        }
                    });
                }
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
    C_Promis.prototype.GravarPromissoria = function (configurado) {
        var _this = this;
        var parametros;
        var dadosGrade = this.grid.DataSource.filter(function (item) { return item.Emitir; });
        try {
            parametros = {
                codVenda: this.Entity.Venda,
                codCliente: CNum(this.Entity.Codigo_Cliente),
                codVendedor: CNum(this.Entity.Codigo_Vendedor),
                tipoImpressao: this.Impressao.Imprimir,
                codigosContasReceber: dadosGrade.map(function (item) { return item.Codigo_Conta_Receber; }),
                //modelo: this.Impressao.Modelo,
                //configurado: configurado,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GravarPromissoria", parametros, function (d) {
                fecharEspera();
                var promissoriasImpressao = dadosGrade
                    .filter(function (item) { return item.Imprimir; })
                    .map(function (item) { return item.Codigo_Conta_Receber; });
                var codigos = GetRetornoAJAX(d);
                if (codigos) {
                    if (codigos.length > 0) {
                        MostrarMensagem("Promissória(s) gravada(s) com sucesso!");
                        _this.PreencherGrade();
                    }
                }
                var codigosSelecionadosImpressao = [];
                setTimeout(function () {
                    dadosGrade = _this.grid.DataSource;
                    if (promissoriasImpressao.length > 0) {
                        for (var x = 0; x < promissoriasImpressao.length; x++) {
                            var aux = dadosGrade.FindAll("Codigo_Conta_Receber", promissoriasImpressao[x])[0];
                            if (aux) {
                                if (aux.Imprimir) {
                                    codigosSelecionadosImpressao.push(aux.Codigo_Promissoria);
                                }
                            }
                        }
                        var arquivo;
                        if (configurado) {
                            _this.ImprimirConfigurado(_this.Impressao.Modelo_Configurado, codigosSelecionadosImpressao);
                        }
                        else {
                            _this.ImprimirPromissorias(_this.Impressao.Modelo, codigosSelecionadosImpressao);
                            //arquivo = this.Impressao.Modelo == "1" ? "Promissoria_Modelo_Um.REPX" : "Promissoria_Modelo_Dois.REPX"
                            //AbrirReport("~/Report/Fixos/", arquivo);
                        }
                    }
                }, 300);
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
    C_Promis.prototype.ImprimirPromissoriaAgrupada = function (modelo, codPromissoria) {
        var _this = this;
        var parametros;
        try {
            parametros = {
                modelo: modelo,
                ultimaPromissoria: codPromissoria[codPromissoria.length - 1],
                codigoPromissorias: codPromissoria,
                tipoImpressao: this.Impressao.Imprimir
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PrepararImpressaoAgrupada", parametros, function (d) {
                fecharEspera();
                var arquivo = _this.Impressao.Modelo == "1" ? "Promissoria_Modelo_Um.REPX" : "Promissoria_Modelo_Dois.REPX";
                AbrirReport("~/Report/Fixos/", arquivo);
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
    C_Promis.prototype.ImprimirPromissorias = function (modelo, codPromissoria) {
        var _this = this;
        var parametros;
        try {
            parametros = {
                modelo: modelo,
                codigoPromissorias: codPromissoria,
                tipoImpressao: this.Impressao.Imprimir
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PrepararImpressao", parametros, function (d) {
                fecharEspera();
                var arquivo = _this.Impressao.Modelo == "1" ? "Promissoria_Modelo_Um.REPX" : "Promissoria_Modelo_Dois.REPX";
                AbrirReport("~/Report/Fixos/", arquivo);
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
    C_Promis.prototype.ImprimirConfigurado = function (modelo, codPromissorias) {
        var _this = this;
        var dadosGrade = this.grid.DataSource;
        var promissoriasSelecionadas = [];
        if (!codPromissorias) {
            codPromissorias = dadosGrade.map(function (item) { return item.Codigo_Promissoria; });
        }
        else if (codPromissorias.length <= 0) {
            codPromissorias = dadosGrade.map(function (item) { return item.Codigo_Promissoria; });
        }
        for (var x = 0; x < codPromissorias.length; x++) {
            var aux = dadosGrade.FindAll("Codigo_Promissoria", codPromissorias[x])[0];
            if (aux) {
                if (aux.Imprimir) {
                    promissoriasSelecionadas.push(aux.Codigo_Promissoria);
                }
            }
        }
        if (promissoriasSelecionadas.length > 0) {
            var parametros = void 0;
            parametros = {
                codigosPromissorias: promissoriasSelecionadas,
                modelo: CNum(this.Impressao.Modelo_Configurado),
                agrupar: this.Impressao.Parcelas == "A"
            };
            try {
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("PrepararImpressaoConfigurada", parametros, function (d) {
                    fecharEspera();
                    AbrirReport("~/Report/Fixos/", "Promissoria_Modelo_Configurado.REPX");
                }, function (erro) {
                    _this.mdModelo.Hide();
                    fecharEspera();
                    LogarException(erro);
                }, this);
            }
            catch (ex) {
                this.mdModelo.Hide();
                fecharEspera();
                LogarException(ex);
            }
        }
        this.mdModelo.Hide();
    };
    C_Promis.prototype.OnClickExcluir = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        if (CNum(this.Entity.Venda) <= 0) {
            MostrarAlerta("Informe uma Venda para continuar!");
            return;
        }
        var dadosGrade = this.grid.DataSource;
        var promissorias = dadosGrade.filter(function (item) {
            return CNum(item.Codigo_Promissoria) > 0;
        });
        if (promissorias.length > 0) {
            MsgBoxJS("Deseja excluir todas as " + promissorias.length + " promissorias dessa Venda?", MsgBoxOptions.YesNoCancel, MsgBoxIcon.Alert, function (r) {
                if (r.Resultado == MsgBoxResult.Yes) {
                    _this.ExcluirPromissorias();
                }
            });
        }
        else {
            MostrarAlerta("Não há nenhuma Promissoria para ser excluída!");
        }
    };
    C_Promis.prototype.ExcluirPromissorias = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                codVenda: CNum(this.Entity.Venda)
            };
            this.ExecutarFuncaoServerSideAsynch("ExcluirPromissoria", parametros, function (d) {
                fecharEspera();
                MostrarMensagem("Promissórias excluídas com sucesso!");
                _this.PreencherGrade();
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
    C_Promis.prototype.OnClickImprimir = function (s, e) {
        e.processOnServer = false;
        var dadosGrade = this.grid.DataSource;
        var promissoriasSelecionadas = dadosGrade.filter(function (item) {
            return item.Imprimir == true;
        });
        if (promissoriasSelecionadas.length > 0) {
            var codigosPromissorias = dadosGrade.filter(function (item) {
                return CNum(item.Codigo_Promissoria) > 0;
            });
            if (codigosPromissorias.length > 0) {
                var codigosPromissorias = promissoriasSelecionadas.filter(function (item) { return CNum(item.Codigo_Promissoria) > 0; })
                    .map(function (item) { return item.Codigo_Promissoria; });
                if (this.Impressao.Parcelas == "A") {
                    this.ImprimirPromissoriaAgrupada(this.Impressao.Modelo, codigosPromissorias);
                }
                else {
                    if (codigosPromissorias.filter(function (item) { return item === codigosPromissorias[0]; }).length > 1) {
                        MostrarAlerta("As promissórias dessa venda foram emitidas agrupadas! Para imprimir uma por parcela, exclua as promissórias e emita as mesmas novamente!");
                        return;
                    }
                    this.ImprimirPromissorias(this.Impressao.Modelo, codigosPromissorias);
                }
            }
            else {
                MostrarAlerta("Nenhuma promissória gerada para ser impressa!");
            }
        }
        else {
            MostrarAlerta("Nenhuma promissória selecionada para ser impressa!");
        }
    };
    C_Promis.prototype.OnClickImprimirConfig = function (s, e) {
        e.processOnServer = false;
        var dadosGrade = this.grid.DataSource;
        var promissoriasSelecionadas = dadosGrade.filter(function (item) {
            return (item.Emitir == true || item.Imprimir == true);
        });
        if (promissoriasSelecionadas.length > 0) {
            this.mdModelo.Show();
        }
        else {
            MostrarAlerta("Nenhuma promissória selecionada!");
        }
    };
    C_Promis.prototype.OnClickCancelar = function (s, e) {
        e.processOnServer = false;
        this.mdModelo.Hide();
    };
    C_Promis.prototype.OnClickOk = function (s, e) {
        e.processOnServer = false;
        var dadosGrade = this.grid.DataSource;
        var promissoriasEmitir = dadosGrade.filter(function (item) {
            return item.Emitir == true;
        });
        if (promissoriasEmitir.length > 0) {
            if (this.Impressao.Parcelas == "A") {
                this.GravarPromissoriaAgrupada(true);
            }
            else {
                this.GravarPromissoria(true);
            }
        }
        else {
            this.ImprimirConfigurado(this.Impressao.Modelo_Configurado, []);
        }
    };
    C_Promis.prototype.OnRowValidating = function (s, e) {
        if (CNum(e.oldData.Codigo_Promissoria) > 0) {
            if (e.newData.Emitir) {
                e.newData.Emitir = false;
                MostrarAlerta("Já foi emitida promissória desta conta receber!");
            }
        }
        else {
            if (e.newData.Imprimir) {
                e.newData.Emitir = true;
            }
        }
    };
    return C_Promis;
}(MouraPageAngular));
var c_Promis = new C_Promis();
//# sourceMappingURL=C_Promis.js.map