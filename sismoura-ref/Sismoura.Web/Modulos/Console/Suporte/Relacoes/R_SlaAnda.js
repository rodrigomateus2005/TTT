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
var R_SlaAnda = /** @class */ (function (_super) {
    __extends(R_SlaAnda, _super);
    function R_SlaAnda() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_SlaAnda.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SlaAnda.prototype, "Grid", {
        get: function () {
            return window["Grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SlaAnda.prototype, "lstIlha", {
        get: function () {
            return window["lstIlha_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SlaAnda.prototype, "chkSomenteAtrasada", {
        get: function () {
            return window["chkSomenteAtrasada_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SlaAnda.prototype, "chkTempoAdicionar", {
        get: function () {
            return window["chkTempoAdicionar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SlaAnda.prototype, "txtTempoAtualizacao", {
        get: function () {
            return window["txtTempoAtualizacao_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SlaAnda.prototype, "txtGrpAten", {
        get: function () {
            return window["txtGrpAten_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SlaAnda.prototype, "hdnCodigoInterval", {
        get: function () {
            return $('#hdnCodigoInterval')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SlaAnda.prototype, "ilha", {
        get: function () {
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SlaAnda.prototype, "accFiltro", {
        get: function () {
            return window['accFiltro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_SlaAnda.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtGrpAten.Limpar();
        this.txtTempoAtualizacao.Limpar();
        this.lstIlha.LimparSelecao();
        this.chkSomenteAtrasada.Check.checked = false;
        this.chkTempoAdicionar.Check.checked = false;
        this.LimparInterval();
        this.Grid.PreencherGrid([]);
    };
    R_SlaAnda.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_SlaAnda.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.CellPrepared, this.OnGridCellPrepared, this);
        }
    };
    R_SlaAnda.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (this.txtTempoAtualizacao.GetText().CNum() != 0 && this.chkTempoAdicionar.Check.checked == false) {
            return MostrarAlerta("Marque a opção de Atualizar a cada (segundos)");
        }
        if (this.chkTempoAdicionar.Check.checked && this.txtTempoAtualizacao.GetText().CNum() < 10) {
            return MostrarAlerta("O tempo de atualização deve ser maior ou igual a 10 segundos");
        }
        var codigoInterval = this.Refresh();
        this.hdnCodigoInterval.value = codigoInterval;
        if (this.accFiltro) {
            this.accFiltro.SetExpanded(false);
        }
    };
    R_SlaAnda.prototype.GerarGrade = function () {
        var parametros = {
            listaIlha: this.lstIlha.SelectedValues,
            codGrupo: this.txtGrpAten.GetText().CNum(),
            slaAtrasado: this.chkSomenteAtrasada.Check.checked
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("RelacaoSlaAndamento", parametros);
        this.Grid.PreencherGrid(retorno);
    };
    R_SlaAnda.prototype.OnGridCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data) {
                var tempoUtilizado = "" + e.data["Tempo_Utilizado"];
                var tempoPrevisto = "" + e.data["Tempo_Previsto"];
                if (tempoUtilizado.CNum() > tempoPrevisto.CNum()) {
                    e.cellElement.css("color", "red");
                }
            }
        }
        catch (ex) {
        }
    };
    R_SlaAnda.prototype.LimparInterval = function () {
        if (this.hdnCodigoInterval.value.CNum() != 0) {
            clearInterval(this.hdnCodigoInterval.value.CNum());
            this.hdnCodigoInterval.value = "";
        }
    };
    R_SlaAnda.prototype.Refresh = function () {
        var codigo = 0;
        this.LimparInterval();
        if (this.chkTempoAdicionar.Check.checked) {
            this.GerarGrade();
            codigo = setInterval($.proxy(function () {
                this.GerarGrade();
            }, this), this.txtTempoAtualizacao.GetText().CNum() * 1000);
        }
        else {
            this.GerarGrade();
        }
        return codigo.toString();
    };
    return R_SlaAnda;
}(MouraPageRelacaoAngular));
var r_SlaAnda = new R_SlaAnda();
//# sourceMappingURL=R_SlaAnda.js.map