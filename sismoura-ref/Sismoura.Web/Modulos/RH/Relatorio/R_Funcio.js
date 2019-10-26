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
var R_Funcio = /** @class */ (function (_super) {
    __extends(R_Funcio, _super);
    function R_Funcio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Funcio.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Funcio.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Funcio.prototype, "txtPeriodo", {
        get: function () {
            return window["txtPeriodo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Funcio.prototype, "lstCargo", {
        get: function () {
            return window["lstCargo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Funcio.prototype, "lstSecao", {
        get: function () {
            return window["lstSecao_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Funcio.prototype, "lstSetor", {
        get: function () {
            return window["lstSetor_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Funcio.prototype, "lstEmpresa", {
        get: function () {
            return window["lstEmpresa_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Funcio.prototype, "lstDepartamento", {
        get: function () {
            return window["lstDepartamento_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Funcio.prototype, "chlSituacao", {
        get: function () {
            return window["chlSituacao_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Funcio.prototype, "cboTipo", {
        get: function () {
            return window["cboTipo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Funcio.prototype, "cboTipoEmpresa", {
        get: function () {
            return window["cboTipoEmpresa_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Funcio.prototype, "gridModal", {
        get: function () {
            return window["gridModal_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Funcio.prototype, "mdDt", {
        get: function () {
            return window["mdDt_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Funcio.prototype, "btnFechar", {
        get: function () {
            return window["btnFechar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_Funcio.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_Funcio.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.cboTipo) {
            adicionarEventoMoura(this.cboTipo.SelectedItemChanged, this.OnTipoChanged, this);
        }
        if (this.btnFechar) {
            adicionarEventoMoura(this.btnFechar.Click, this.OnClickFechar, this);
        }
    };
    //
    R_Funcio.prototype.OnTipoChanged = function (s, e) {
        var tipo = this.cboTipo.GetValue();
        tipo == "N" ? this.txtPeriodo.Visible = false : this.txtPeriodo.Visible = true;
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = this.DataServidor();
        this.RefreshAngular();
    };
    R_Funcio.prototype.OnSelecionouLinha = function (s, e) {
        try {
            this.OnMostrarDadosEmpresa(CNum(e.data["Codigo"]));
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Funcio.prototype.OnClickFechar = function (s, e) {
        e.processOnServer = false;
        this.mdDt.Hide();
    };
    R_Funcio.prototype.OnMostrarDadosEmpresa = function (codUsuario) {
        this.gridModal.PreencherGrid(null);
        var parametros;
        try {
            parametros = {
                codUsuario: codUsuario
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGridModal", parametros);
            this.gridModal.PreencherGrid(retorno);
            this.mdDt.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    //
    R_Funcio.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.lstCargo.LimparSelecao();
        this.lstSecao.LimparSelecao();
        this.lstSetor.LimparSelecao();
        this.lstEmpresa.LimparSelecao();
        this.chlSituacao.LimparSelecao();
        this.lstDepartamento.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.Filtro.Tipo = "N";
        this.chlSituacao.SetValues(["1"]);
        this.Filtro.Tipo_Empresa = "C";
        this.txtPeriodo.Visible = false;
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = this.DataServidor();
        this.grid.PreencherGrid(null);
        this.gridModal.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_Funcio.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            parametros = {
                tipo: this.cboTipo.GetValue(),
                departamentos: this.lstDepartamento.GetValues().join(","),
                cargos: this.lstCargo.GetValues().join(","),
                setores: this.lstSetor.GetValues().join(","),
                secoes: this.lstSecao.GetValues().join(","),
                situacao: this.chlSituacao.GetValues().join(","),
                dataInicial: this.Filtro.Data_Inicial,
                dataFinal: this.Filtro.Data_Final,
                tipoEmpresa: this.cboTipoEmpresa.GetValue(),
                empresas: this.lstEmpresa.GetValues().join(",")
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    _this.AccordionFiltros.SetExpanded(false);
                }
                catch (ex) {
                    LogarException(ex);
                }
                finally {
                    fecharEspera();
                }
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    return R_Funcio;
}(MouraPageRelacaoAngular));
var r_Funcio = new R_Funcio();
//# sourceMappingURL=R_Funcio.js.map