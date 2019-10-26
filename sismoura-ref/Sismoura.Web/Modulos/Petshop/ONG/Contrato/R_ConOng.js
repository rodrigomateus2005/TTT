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
var R_ConOng = /** @class */ (function (_super) {
    __extends(R_ConOng, _super);
    function R_ConOng() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ConOng.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConOng.prototype, "hdnRacas", {
        get: function () {
            return $('#hdnRacas')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConOng.prototype, "grid", {
        get: function () { return window['grid_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConOng.prototype, "txtPeriodo", {
        get: function () { return window['txtPeriodo_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConOng.prototype, "lstEmpresa", {
        //get cboEmpresa(): MouraComboBoxEmpresa { return window['cboEmpresa_Object']; }
        get: function () { return window['lstEmpresa_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConOng.prototype, "cboRaca", {
        get: function () { return window['cboRaca_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConOng.prototype, "cboEspecie", {
        get: function () { return window['cboEspecie_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConOng.prototype, "cboSituacao", {
        get: function () { return window['cboSituacao_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConOng.prototype, "cboTipoPeriodo", {
        get: function () { return window['cboTipoPeriodo_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConOng.prototype, "txtOng", {
        get: function () { return window['txtOng_Object']; },
        enumerable: true,
        configurable: true
    });
    R_ConOng.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        setTimeout(function () {
            _this.LimparCampos();
            var paramProc = {};
            _this.txtOng.AddParametro("isOng", "true");
            _this.cboTipoPeriodo.SetValue(2);
        }, 300);
    };
    R_ConOng.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnGrdClicouBotao, this);
            adicionarEventoMoura(this.grid.CellPrepared, this.OnPreencheuGrid, this);
        }
        if (this.cboEspecie) {
            adicionarEventoMoura(this.cboEspecie.SelectedItemChanged, this.onCboEspecie_Changed, this);
        }
    };
    R_ConOng.prototype.OnPreencheuGrid = function (s, e) {
        if (e.rowType == "data" && e.data) {
            if (e.data['Cancelado'] == 'Sim') {
                e.cellElement.css("color", "red");
            }
        }
    };
    R_ConOng.prototype.onCboEspecie_Changed = function (s, e) {
        var especie = this.cboEspecie.GetValue();
        var racas = this.DeserializarJSONEncoded(this.hdnRacas.value);
        var lracas = racas.FindAll("Especie", especie);
        this.cboRaca.ClearItems();
        for (var x = 0; x < lracas.length; x++) {
            this.cboRaca.Combo.AddItem(lracas[x].Raca, lracas[x].Codigo, "");
        }
    };
    R_ConOng.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (this.grid) {
            this.grid.PreencherGrid(null);
        }
        if (this.txtPeriodo) {
            this.txtPeriodo.Iniciar();
        }
        if (this.lstEmpresa) {
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        }
        if (this.cboRaca) {
            this.cboRaca.LimparSelecao();
        }
        if (this.cboEspecie) {
            this.cboEspecie.LimparSelecao();
        }
        this.txtOng.Limpar();
        this.txtOng.LimparParametros();
        var paramProc = {};
        this.txtOng.AddParametro("isOng", "true");
        this.cboTipoPeriodo.SetValue(2);
        this.cboSituacao.SetValue("Ativos");
    };
    R_ConOng.prototype.PreencherGrade = function () {
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
    R_ConOng.prototype.GetDadosRelacao = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                empresas: this.lstEmpresa.GetValuesRelacao(),
                codRaca: CNum(this.cboRaca.GetValue()),
                codEspecie: CNum(this.cboEspecie.GetValue()),
                codOng: CNum(this.txtOng.GetText()),
                tipoFiltroData: this.cboTipoPeriodo.GetValue(),
                situacao: this.cboSituacao.GetValue()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetRelacaoContratosOng", parametros, function (d) {
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
    R_ConOng.prototype.OnGrdClicouBotao = function (s, e) {
        try {
            var codContrato = ("" + e.data['Contrato']).CNum();
            abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroContratoONGPetz), "" + codContrato);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_ConOng;
}(MouraPageRelacaoAngular));
var r_ConOng = new R_ConOng();
//# sourceMappingURL=R_ConOng.js.map