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
var R_Propri = /** @class */ (function (_super) {
    __extends(R_Propri, _super);
    function R_Propri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Propri.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Propri.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Propri.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Propri.prototype, "lstAniversariantes", {
        get: function () {
            return window['lstAniversariantes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Propri.prototype, "EnvioSms", {
        get: function () {
            return window['EnvioSms_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Propri.prototype, "btnSms", {
        get: function () {
            return window['btnSms_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Propri.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_Propri.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnSms) {
            adicionarEventoMoura(this.btnSms.Click, this.OnEnviarSms, this);
        }
    };
    R_Propri.prototype.OnEnviarSms = function () {
        try {
            if (this.grid.GetSelectedRowsData.length > 0) {
                var listaSelecionados = [];
                var listaCodigos = [];
                listaSelecionados = this.grid.GetSelectedRowsData;
                for (var i in listaSelecionados) {
                    if (listaSelecionados[i].Celular && !String.IsNullOrWhiteSpace(listaSelecionados[i].Celular.trim())) {
                        listaCodigos.push(listaSelecionados[i].Celular);
                    }
                    else {
                        MostrarAlerta("Destinat\u00E1rio " + listaSelecionados[i].Nome + " n\u00E3o possui celular cadastrado!");
                    }
                    this.EnvioSms.AbrirClient("", listaCodigos);
                }
            }
            else {
                MostrarAlerta("Selecione um destinatário");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Propri.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        try {
            abrirEspera();
            var parametros = {};
            if (this.ValidarCamposObrigatorios) {
                parametros = {
                    somenteProprietariosComAnimal: this.Filtro.Apenas_Cadastrados,
                    empresas: this.lstEmpresa.GetValuesRelacao().join(","),
                    messesAniversarios: this.lstAniversariantes.GetValues().join(",")
                };
            }
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = "";
                    retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    _this.AccordionFiltros.SetExpanded(false);
                }
                catch (ex) {
                    LogarException(ex);
                }
                finally {
                    fecharEspera();
                }
            }, function (error) {
                LogarException(error);
                fecharEspera();
            }, this);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    R_Propri.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.lstAniversariantes.LimparSelecao();
        this.Filtro.Apenas_Cadastrados = false;
        this.lstEmpresa.Limpar();
        this.lstEmpresa.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    return R_Propri;
}(MouraPageRelacaoAngular));
var r_Propri = new R_Propri();
//# sourceMappingURL=R_Propri.js.map