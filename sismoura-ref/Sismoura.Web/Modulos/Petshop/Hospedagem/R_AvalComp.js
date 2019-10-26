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
var R_AvalComp = /** @class */ (function (_super) {
    __extends(R_AvalComp, _super);
    function R_AvalComp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_AvalComp.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AvalComp.prototype, "grid", {
        get: function () { return window['grid_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AvalComp.prototype, "txtPeriodo", {
        get: function () { return window['txtPeriodo_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AvalComp.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_AvalComp.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_AvalComp.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_AvalComp.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (this.grid) {
            this.grid.PreencherGrid(null);
        }
        if (this.txtPeriodo) {
            this.txtPeriodo.Iniciar();
        }
        this.txtPet.Limpar();
    };
    R_AvalComp.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!this.txtPeriodo.IsValido()) {
            MostrarAlerta("Informe o período corretamente.");
            return;
        }
        this.GetDadosRelacao();
    };
    R_AvalComp.prototype.GetDadosRelacao = function () {
        var _this = this;
        var parametros;
        if (!this.ValidadarFiltros()) {
            return;
        }
        try {
            parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                codProprietario: this.txtPet.TextBoxProprietario.GetText().CNum(),
                codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetRelacaoAvaliacaoComportamental", parametros, function (d) {
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
    R_AvalComp.prototype.ValidadarFiltros = function () {
        try {
            if (!this.txtPeriodo.IsValido()) {
                MostrarAlerta("Informe o período.");
                return false;
            }
            return true;
        }
        catch (e) {
            LogarException(e);
        }
    };
    return R_AvalComp;
}(MouraPageRelacaoAngular));
var r_AvalComp = new R_AvalComp;
//# sourceMappingURL=R_AvalComp.js.map