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
var R_Encamin_Angular = /** @class */ (function (_super) {
    __extends(R_Encamin_Angular, _super);
    function R_Encamin_Angular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Encamin_Angular.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Encamin_Angular.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Encamin_Angular.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Encamin_Angular.prototype, "lstGrupo", {
        get: function () {
            return window['lstGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Encamin_Angular.prototype, "lstSubGrupo", {
        get: function () {
            return window['lstSubGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Encamin_Angular.prototype, "txtLinha", {
        get: function () {
            return window['txtLinha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Encamin_Angular.prototype, "cboTipoEncaminhamento", {
        get: function () {
            return window['cboTipoEncaminhamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Encamin_Angular.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Encamin_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid)
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnGrdSelecionouItem, this);
    };
    R_Encamin_Angular.prototype.OnGrdSelecionouItem = function (s, e) {
        if (e.rowKey) {
            var paramTela = [];
            paramTela.push("codigo=" + e.data["Atendimento"]);
            abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroDeAtendimento), paramTela);
        }
    };
    R_Encamin_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_Encamin_Angular.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (ValoresSismoura && ValoresSismoura.EmpresaPadraoUsuario > 0) {
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario;
        }
        this.cboTipoEncaminhamento.SetValue("T");
        this.grid.PreencherGrid([]);
        this.txtLinha.Limpar();
        this.lstGrupo.LimparSelecao();
        this.lstSubGrupo.LimparSelecao();
    };
    R_Encamin_Angular.prototype.PreencherGrade = function () {
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
                tipoEncaminhamento: this.cboTipoEncaminhamento.GetValue(),
                empresas: this.lstEmpresa.GetValuesRelacaoNumber(),
                Grupos: this.lstGrupo.GetValuesRelacao(),
                Subgrupos: this.lstSubGrupo.GetValuesRelacao(),
                Linha: this.txtLinha.GetText().CNum()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarGrid", parametros, function (d) {
                try {
                    fecharEspera();
                    if (GetRetornoAJAX(d).length == 0) {
                        MostrarAlerta("Nenhum registro encontrado.");
                    }
                    _this.grid.PreencherGrid(GetRetornoAJAX(d));
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
            this.grid.PreencherGrid([]);
            LogarException(ex);
            fecharEspera();
        }
    };
    R_Encamin_Angular.prototype.ValidarPeriodo = function (dataInicio, dataFim) {
        if (!dataInicio)
            return false;
        if (!dataFim)
            return false;
        return true;
    };
    return R_Encamin_Angular;
}(MouraPageRelacaoAngular));
var r_Encamin_Angular = new R_Encamin_Angular();
//# sourceMappingURL=R_Encamin_Angular.js.map