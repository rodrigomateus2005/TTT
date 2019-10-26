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
var R_MensAtras = /** @class */ (function (_super) {
    __extends(R_MensAtras, _super);
    function R_MensAtras() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_MensAtras.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MensAtras.prototype, "grid", {
        get: function () { return window['grid_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MensAtras.prototype, "lstEmpresa", {
        get: function () { return window['lstEmpresa_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MensAtras.prototype, "cboRaca", {
        get: function () { return window['cboRaca_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MensAtras.prototype, "txtPeriodo", {
        get: function () { return window['txtPeriodo_Object']; },
        enumerable: true,
        configurable: true
    });
    R_MensAtras.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        setTimeout(function () {
            _this.LimparCampos();
        }, 300);
    };
    R_MensAtras.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnGrdClicouBotao, this);
            adicionarEventoMoura(this.grid.CellPrepared, this.OnPreencheuGrid, this);
        }
    };
    R_MensAtras.prototype.OnGrdClicouBotao = function (s, e) {
        try {
            var codContrato = ("" + e.data['Cod_Contrato']).CNum();
            abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroContratoClubz), "" + codContrato);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_MensAtras.prototype.OnPreencheuGrid = function (s, e) {
        //if (e.rowType == "data" && e.data) {
        //    if (e.data['Cancelado'] == 'Sim') {
        //        e.cellElement.css("color", "red");
        //    }
        //}
    };
    R_MensAtras.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (this.grid) {
            this.grid.PreencherGrid(null);
        }
        if (this.lstEmpresa) {
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        }
        if (this.cboRaca) {
            this.cboRaca.LimparSelecao();
        }
    };
    R_MensAtras.prototype.PreencherGrade = function () {
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
    R_MensAtras.prototype.GetDadosRelacao = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                empresas: this.lstEmpresa.GetValuesRelacao()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetMensalidadesAtrasadas", parametros, function (d) {
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
    return R_MensAtras;
}(MouraPageRelacaoAngular));
var r_MensAtras = new R_MensAtras();
//# sourceMappingURL=R_MensAtras.js.map