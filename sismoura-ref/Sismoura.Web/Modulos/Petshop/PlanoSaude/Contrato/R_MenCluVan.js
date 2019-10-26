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
var R_MenCluVan = /** @class */ (function (_super) {
    __extends(R_MenCluVan, _super);
    function R_MenCluVan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_MenCluVan.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MenCluVan.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MenCluVan.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MenCluVan.prototype, "cboStatus", {
        get: function () {
            return window['cboStatus_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MenCluVan.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_MenCluVan.prototype.OnPageLoad = function () {
        this.LimparCampos();
    };
    R_MenCluVan.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_MenCluVan.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (this.txtPeriodo) {
            this.txtPeriodo.Iniciar();
        }
        if (this.cboStatus) {
            this.cboStatus.LimparSelecao;
        }
        if (this.txtPet) {
            this.txtPet.TextBoxAnimal.Limpar();
            this.txtPet.TextBoxProprietario.Limpar();
        }
    };
    R_MenCluVan.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!this.txtPeriodo.IsValido()) {
            MostrarAlerta("Informe o período corretamente.");
            return;
        }
        this.GetDadosRelacao(this.txtPeriodo.textBoxCalendarioInicio.GetDate(), this.txtPeriodo.textBoxCalendarioFim.GetDate(), this.cboStatus.GetValue(), this.txtPet.TextBoxProprietario.GetText().CNum(), this.txtPet.TextBoxAnimal.GetText().CNum());
    };
    R_MenCluVan.prototype.GetDadosRelacao = function (dataInicial, dataFinal, status, codProprietario, codAnimal) {
        var _this = this;
        var parametros;
        try {
            parametros = {
                dataInicial: dataInicial,
                dataFinal: dataFinal,
                status: status,
                codProprietario: codProprietario,
                codAnimal: codAnimal
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetMensalidadeClubeVantagem", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
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
    return R_MenCluVan;
}(MouraPageRelacaoAngular));
var r_MenCluVan = new R_MenCluVan();
//# sourceMappingURL=R_MenCluVan.js.map