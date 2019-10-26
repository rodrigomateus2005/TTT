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
var R_AgeCan = /** @class */ (function (_super) {
    __extends(R_AgeCan, _super);
    function R_AgeCan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_AgeCan.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgeCan.prototype, "txtPeriodo", {
        //Filtros
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgeCan.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgeCan.prototype, "cboMotivoCancelamento", {
        get: function () {
            return window['cboMotivoCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgeCan.prototype, "cboTipoProfissional", {
        get: function () {
            return window['cboTipoProfissional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgeCan.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgeCan.prototype, "gridServicos", {
        get: function () {
            return window['gridServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgeCan.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgeCan.prototype, "txtProfissional", {
        get: function () {
            return window['txtProfissional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgeCan.prototype, "mdServicos", {
        get: function () {
            return window['mdServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgeCan.prototype, "btnFechar", {
        get: function () {
            return window['btnFechar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_AgeCan.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grd)
            adicionarEventoMoura(this.grd.SelecionouLinha, this.OnGrdSelecionouItem, this);
        if (this.btnFechar)
            adicionarEventoMoura(this.btnFechar.Click, this.OnClickFecharModal, this);
    };
    R_AgeCan.prototype.OnGrdSelecionouItem = function (s, e) {
        var _this = this;
        if (e.rowKey) {
            var codAtendimento = e.rowKey;
            this.gridServicos.PreencherGrid(null);
            try {
                var parametros = {
                    codigoAgendamento: codAtendimento
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("GetServicos", parametros, function (d) {
                    try {
                        fecharEspera();
                        if (GetRetornoAJAX(d).length == 0) {
                            MostrarAlerta("Nenhum serviço encontrado.");
                        }
                        _this.gridServicos.PreencherGrid(GetRetornoAJAX(d));
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
                this.gridServicos.PreencherGrid([]);
                LogarException(ex);
                fecharEspera();
            }
            this.mdServicos.ModalDialog.Show();
        }
    };
    R_AgeCan.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_AgeCan.prototype.OnClickFecharModal = function (s, e) {
        try {
            e.processOnServer = false;
            this.mdServicos.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgeCan.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (ValoresSismoura && ValoresSismoura.EmpresaPadraoUsuario > 0) {
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario;
        }
        this.txtPeriodo.Iniciar();
        this.grd.PreencherGrid([]);
        this.cboMotivoCancelamento.SetValue("0");
        this.cboTipoProfissional.SetValue("0");
    };
    R_AgeCan.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var dataInicio = this.txtPeriodo.textBoxCalendarioInicio.GetDate();
        var dataFim = this.txtPeriodo.textBoxCalendarioFim.GetDate();
        if (!this.ValidarPeriodo(dataInicio, dataFim)) {
            MostrarAlerta("Informe um período correto.");
            return;
        }
        try {
            var parametros = {
                dataInicial: dataInicio,
                dataFinal: dataFim,
                empresas: this.lstEmpresa.GetValuesRelacaoNumber(),
                profissional: this.txtProfissional.GetText().CNum(),
                proprietario: this.txtPet.TextBoxProprietario.GetText().CNum(),
                animal: this.txtPet.TextBoxAnimal.GetText().CNum(),
                codMotivo: this.cboMotivoCancelamento.GetValue(),
                tipoProfissional: this.cboTipoProfissional.GetValue()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarGrid", parametros, function (d) {
                try {
                    fecharEspera();
                    if (GetRetornoAJAX(d).length == 0) {
                        MostrarAlerta("Nenhum registro encontrado.");
                    }
                    _this.grd.PreencherGrid(GetRetornoAJAX(d));
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
            this.grd.PreencherGrid([]);
            LogarException(ex);
            fecharEspera();
        }
    };
    R_AgeCan.prototype.ValidarPeriodo = function (dataInicio, dataFim) {
        if (!dataInicio)
            return false;
        if (!dataFim)
            return false;
        return true;
    };
    return R_AgeCan;
}(MouraPageRelacaoAngular));
var r_AgeCan = new R_AgeCan();
//# sourceMappingURL=R_AgeCan.js.map