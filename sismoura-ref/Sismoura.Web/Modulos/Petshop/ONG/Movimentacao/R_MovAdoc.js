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
var R_MovAdco = /** @class */ (function (_super) {
    __extends(R_MovAdco, _super);
    function R_MovAdco() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_MovAdco.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MovAdco.prototype, "grid", {
        get: function () { return window['grid_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MovAdco.prototype, "txtPeriodo", {
        get: function () { return window['txtPeriodo_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MovAdco.prototype, "lstEmpresa", {
        get: function () { return window['lstEmpresa_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MovAdco.prototype, "cboTipoMovimento", {
        get: function () { return window['cboTipoMovimento_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MovAdco.prototype, "txtPet", {
        get: function () { return window['txtPet_Object']; },
        enumerable: true,
        configurable: true
    });
    R_MovAdco.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.OnGridCellPrepared, this);
        }
    };
    R_MovAdco.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_MovAdco.prototype.OnGridCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data) {
                if (e.data['Movimento'] == "Entrada") {
                    e.cellElement.css("color", "green");
                }
                else if (e.data['Movimento'] == "Saída") {
                    e.cellElement.css("color", "red");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_MovAdco.prototype.LimparCampos = function () {
        var _this = this;
        _super.prototype.LimparCampos.call(this);
        if (this.grid) {
            this.grid.PreencherGrid(null);
            this.grid.LimparFiltros();
        }
        if (this.txtPeriodo) {
            this.txtPeriodo.Iniciar();
        }
        setTimeout(function () {
            if (_this.lstEmpresa) {
                _this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
            }
            _this.cboTipoMovimento.SetValue(0);
        }, 100);
    };
    R_MovAdco.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!this.txtPeriodo.IsValido()) {
            MostrarAlerta("Informe o período corretamente.");
            return;
        }
        if (this.lstEmpresa.GetValues().length == 0) {
            MostrarAlerta("Informe a empresa");
            return;
        }
        this.GetDadosRelacao();
    };
    R_MovAdco.prototype.GetDadosRelacao = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                empresas: this.lstEmpresa.GetValuesRelacao(),
                tipoMovimento: CNum(this.cboTipoMovimento.GetValue()),
                animal: this.txtPet.TextBoxAnimal.GetText().CNum()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetRelacaoEntradaAdocao", parametros, function (d) {
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
    return R_MovAdco;
}(MouraPageRelacaoAngular));
var r_MovAdco = new R_MovAdco();
//# sourceMappingURL=R_MovAdoc.js.map