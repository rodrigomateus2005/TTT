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
var R_HisAci = /** @class */ (function (_super) {
    __extends(R_HisAci, _super);
    function R_HisAci() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_HisAci.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisAci.prototype, "txtPeriodo", {
        //Filtros
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisAci.prototype, "cboOrigemAcidente", {
        get: function () {
            return window['cboOrigemAcidente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisAci.prototype, "txtTipoAcidente", {
        get: function () {
            return window['txtTipoAcidente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisAci.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisAci.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisAci.prototype, "txtProfissional", {
        get: function () {
            return window['txtProfissional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisAci.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_HisAci.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_HisAci.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (ValoresSismoura && ValoresSismoura.EmpresaPadraoUsuario > 0) {
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario;
        }
        this.cboOrigemAcidente.SetSelectedIndex(0);
        this.txtTipoAcidente.Limpar();
        this.txtPeriodo.Iniciar();
        this.txtPet.Limpar();
        this.txtProfissional.Limpar();
        this.grd.PreencherGrid([]);
    };
    R_HisAci.prototype.PreencherGrade = function () {
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
                origemAcidente: ("" + this.cboOrigemAcidente.GetValue()).CNum(),
                tipoAcidente: this.txtTipoAcidente.GetText().CNum(),
                codProprietario: this.txtPet.TextBoxProprietario.GetText().CNum(),
                codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum(),
                codProfissional: this.txtProfissional.GetText().CNum()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarGrid", parametros, function (d) {
                try {
                    fecharEspera();
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
    R_HisAci.prototype.ValidarPeriodo = function (dataInicio, dataFim) {
        if (!dataInicio)
            return false;
        if (!dataFim)
            return false;
        return true;
    };
    return R_HisAci;
}(MouraPageRelacaoAngular));
var r_HisAci = new R_HisAci();
//# sourceMappingURL=R_HisAci.js.map