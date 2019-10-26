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
var R_IndChe = /** @class */ (function (_super) {
    __extends(R_IndChe, _super);
    function R_IndChe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_IndChe.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IndChe.prototype, "txtPeriodo", {
        //Filtros
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IndChe.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IndChe.prototype, "txtProfissional", {
        get: function () {
            return window['txtProfissional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IndChe.prototype, "chkApenasParaProfissional", {
        get: function () {
            return window['chkApenasParaProfissional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IndChe.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_IndChe.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_IndChe.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_IndChe.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (ValoresSismoura && ValoresSismoura.EmpresaPadraoUsuario > 0) {
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario;
        }
        this.txtPeriodo.Iniciar();
        this.txtProfissional.Limpar();
        this.chkApenasParaProfissional.Checked = false;
        this.grd.PreencherGrid([]);
    };
    R_IndChe.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var dataInicio = this.txtPeriodo.textBoxCalendarioInicio.GetDate();
        var dataFim = this.txtPeriodo.textBoxCalendarioFim.GetDate();
        if (!this.ValidarPeriodo(dataInicio, dataFim)) {
            MostrarAlerta("Informe um período correto.");
            return;
        }
        var parametros = {
            dataInicio: dataInicio,
            dataFim: dataFim,
            empresas: this.lstEmpresa.GetValuesRelacaoNumber(),
            profissional: this.txtProfissional.GetText().CNum(),
            apenasParaProfissional: this.chkApenasParaProfissional.Checked
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrade", parametros);
        this.grd.PreencherGrid(retorno);
    };
    R_IndChe.prototype.ValidarPeriodo = function (dataInicio, dataFim) {
        if (!dataInicio)
            return false;
        if (!dataFim)
            return false;
        return true;
    };
    return R_IndChe;
}(MouraPageRelacaoAngular));
var r_IndChe = new R_IndChe();
//# sourceMappingURL=R_IndChe.js.map