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
var R_Imp_Systax = /** @class */ (function (_super) {
    __extends(R_Imp_Systax, _super);
    function R_Imp_Systax() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Imp_Systax.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Imp_Systax.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Imp_Systax.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Imp_Systax.prototype, "cboCenario", {
        get: function () {
            return window['cboCenario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Imp_Systax.prototype, "btnAtualizar", {
        get: function () {
            return window['btnAtualizar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Imp_Systax.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Imp_Systax.prototype, "accFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Imp_Systax.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnAtualizar) {
            adicionarEventoMoura(this.btnAtualizar.Click, this.OnClicouBotaoConfirmar, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.OnGridComparacaoCellPrepared, this);
        }
    };
    R_Imp_Systax.prototype.OnClicouBotaoConfirmar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        MsgBoxJS("Deseja realmente atualizar as regras de impostos dos produtos?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (q) {
            if (q.Resultado == MsgBoxResult.Yes) {
                var parametros = {
                    listaProdutos: _this.grid.DataSource,
                    empresa: _this.cboEmpresa.GetValue(),
                    nomeTela: ValoresSismoura.NomeTela,
                    codUsuario: ValoresSismoura.UsuarioLogado
                };
                abrirEspera("Aguarde, atualizando as regras de imposto dos produtos!");
                _this.ExecutarFuncaoServerSideAsynch("AtualiarRegraProdutos", parametros, function (d) {
                    fecharEspera();
                    if (d) {
                        MostrarMensagem("Regras atualizadas com sucesso!");
                        _this.LimparCampos();
                    }
                }, function (e) {
                    fecharEspera();
                    LogarException(e);
                }, _this);
            }
        });
    };
    R_Imp_Systax.prototype.OnPageLoad = function () {
        this.LimparCampos();
    };
    R_Imp_Systax.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (this.txtData) {
            this.txtData.Date.setDate(Date.now());
        }
        if (this.cboCenario) {
            this.cboCenario.LimparSelecao;
        }
        this.grid.PreencherGrid(null);
        this.accFiltros.SetExpanded(true);
    };
    R_Imp_Systax.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!this.txtData.IsValido()) {
            MostrarAlerta("Informe o período corretamente.");
            return;
        }
        this.GetDadosRelacao(this.txtData.Date, this.cboCenario.GetValue(), this.cboEmpresa.GetValue());
    };
    R_Imp_Systax.prototype.OnGridComparacaoCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data != null) {
                if (e.data.isRetornoSystax == true) {
                    e.cellElement.css("color", "#0c58d3");
                }
                else {
                    e.cellElement.css("color", "#d20c0c");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Imp_Systax.prototype.GetDadosRelacao = function (dataInicial, codCenario, codEmpresa) {
        var _this = this;
        var parametros;
        try {
            parametros = {
                dataInicial: dataInicial,
                codCenario: codCenario,
                empresa: codEmpresa
            };
            abrirEspera("Aguarde, consultando os dados na base de dados da Systax e gerando um comparativo com os valores do sistema");
            this.ExecutarFuncaoServerSideAsynch("PreencherRelacao", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    _this.accFiltros.SetExpanded(false);
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
    };
    return R_Imp_Systax;
}(MouraPageRelacaoAngular));
var r_Imp_Systax = new R_Imp_Systax();
//# sourceMappingURL=R_Imp_Systax.js.map