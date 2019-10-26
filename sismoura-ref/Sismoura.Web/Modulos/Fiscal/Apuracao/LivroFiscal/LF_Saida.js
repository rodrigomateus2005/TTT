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
var Arquivo;
(function (Arquivo) {
    Arquivo["LIVRO_FISCAL"] = "Livro_Fiscal_Saida";
    Arquivo["RESUMO_UF"] = "Livro_Fiscal_Saida_UF";
    Arquivo["RESUMO_CFOP"] = "Livro_Fiscal_Saida_CFOP";
})(Arquivo || (Arquivo = {}));
var LF_Saida = /** @class */ (function (_super) {
    __extends(LF_Saida, _super);
    function LF_Saida() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LF_Saida.prototype, "AccordionFiltros", {
        get: function () {
            return window["accCadastro_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LF_Saida.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LF_Saida.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LF_Saida.prototype, "gridLivroSaida", {
        get: function () {
            return window['gridLivroSaida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LF_Saida.prototype, "gridResumoUF", {
        get: function () {
            return window['gridResumoUF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LF_Saida.prototype, "gridResumoCFOP", {
        get: function () {
            return window['gridResumoCFOP_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LF_Saida.prototype, "btnImprimir", {
        get: function () {
            return window['btnImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LF_Saida.prototype, "tabResultado", {
        get: function () {
            return window['tabResultado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    LF_Saida.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    LF_Saida.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.gridLivroSaida.CellPrepared, this.OnGerouLinhaLivroFiscal, this);
        if (this.btnImprimir) {
            adicionarEventoMoura(this.btnImprimir.Click, this.Imprimir, this);
        }
    };
    LF_Saida.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            if (this.txtPeriodo.textBoxCalendarioFim.GetDate().getTime() > Date.now()) {
                MostrarAlerta('Data inválida. Não é possível gerar o Livro Fiscal com o Período de apuração superior a data atual.');
                return;
            }
            parametros = {
                DataInicio: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                DataFim: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                CodigoEmpresa: this.cboEmpresa.GetValue()
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch('PreencherGrade', parametros, function (d) {
                var retorno = JSON.parse(d).d;
                if (retorno.LivroSaida)
                    _this.gridLivroSaida.PreencherGrid(retorno.LivroSaida);
                if (retorno.ResumoCFOP)
                    _this.gridResumoCFOP.PreencherGrid(retorno.ResumoCFOP);
                if (retorno.ResumoUF)
                    _this.gridResumoUF.PreencherGrid(retorno.ResumoUF);
                fecharEspera();
            }, function (e) {
                fecharEspera();
                LogarException(e);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    LF_Saida.prototype.Imprimir = function (s, e) {
        this.RefreshAngular();
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        var caminho = "~/Report/Fixos/";
        var parametros;
        try {
            parametros = {
                Cod_Empresa: ValoresSismoura.EmpresaPadraoUsuario,
                DataInicio: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                DataFim: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                Grade: this.tabResultado.GetActiveTabIndex()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PrepararImpressao", parametros);
            var arquivo = void 0;
            switch (this.tabResultado.GetActiveTabIndex()) {
                case 0:
                    arquivo = Arquivo.LIVRO_FISCAL;
                    break;
                case 1:
                    arquivo = Arquivo.RESUMO_UF;
                    break;
                case 2:
                    arquivo = Arquivo.RESUMO_CFOP;
                    break;
            }
            if (!String.IsNullOrWhiteSpace(retorno)) {
                MostrarAlerta('');
            }
            else {
                AbrirReport(caminho, arquivo + ".REPX");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    LF_Saida.prototype.LimparCampos = function () {
        this.txtPeriodo.Iniciar();
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.gridResumoCFOP.PreencherGrid([]);
        this.gridResumoUF.PreencherGrid([]);
        this.gridLivroSaida.PreencherGrid([]);
    };
    LF_Saida.prototype.OnGerouLinhaLivroFiscal = function (s, e) {
        if (e.rowType === 'data') {
            var item = e.row.data;
            if (item.Importado === 'Sim') {
                e.cellElement.css('background-color', 'orange');
            }
        }
    };
    return LF_Saida;
}(MouraPageRelacaoAngular));
var lF_Saida = new LF_Saida();
//# sourceMappingURL=LF_Saida.js.map