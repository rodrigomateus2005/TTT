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
var R_AltPRej = /** @class */ (function (_super) {
    __extends(R_AltPRej, _super);
    function R_AltPRej() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_AltPRej.prototype, "txtProprietario", {
        get: function () {
            return window['txtProprietario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AltPRej.prototype, "cboTipoNota", {
        get: function () {
            return window['cboTipoNota_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AltPRej.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AltPRej.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AltPRej.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AltPRej.prototype, "txtNCM", {
        get: function () {
            return window['txtNCM_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AltPRej.prototype, "cboCFOP", {
        get: function () {
            return window['cboCFOP_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AltPRej.prototype, "cboSituacao", {
        get: function () {
            return window['cboSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AltPRej.prototype, "cboST_PIS", {
        //get txtCST(): MouraTextBox{
        //    return window['txtCST_Object'];
        //}
        //get txtST_PIS(): MouraTextBox{
        //    return window['txtST_PIS_Object'];
        //}
        get: function () {
            return window['cboST_PIS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AltPRej.prototype, "cboST_COFINS", {
        get: function () {
            return window['cboST_COFINS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AltPRej.prototype, "txtAliq_PIS", {
        get: function () {
            return window['txtAliq_PIS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AltPRej.prototype, "cboSt_IPI_Saida", {
        //get txtST_COFINS(): MouraTextBox{
        //    return window['txtST_COFINS_Object'];
        //}
        get: function () {
            return window['cboSt_IPI_Saida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AltPRej.prototype, "txtAliq_COFINS", {
        get: function () {
            return window['txtAliq_COFINS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AltPRej.prototype, "txtAliq_IPI", {
        //get txtST_IPI(): MouraTextBox{
        //    return window['txtST_IPI_Object'];
        //}
        get: function () {
            return window['txtAliq_IPI_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AltPRej.prototype, "Produtos", {
        get: function () {
            return this.GetScope()['Produtos'];
        },
        set: function (value) {
            this.GetScope()['Produtos'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AltPRej.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AltPRej.prototype, "btnCorrigir", {
        get: function () {
            return window['btnCorrigir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AltPRej.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_AltPRej.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboTipoNota) {
            adicionarEventoDevExpress(this.cboTipoNota.Combo.SelectedIndexChanged, this.OnCboTipoNotaChanged, this);
        }
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.onBtnGerarClick, this);
        }
        if (this.btnCorrigir) {
            adicionarEventoMoura(this.btnCorrigir.Click, this.onBtnCorrigirClick, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.onBtnLimparClick, this);
        }
    };
    R_AltPRej.prototype.ValidarFiltros = function () {
        try {
            if (this.txtPeriodo.textBoxCalendarioInicio.GetDate() > this.txtPeriodo.textBoxCalendarioFim.GetDate()) {
                MostrarAlerta("A data inicial deve ser menor que a data final.");
                return false;
            }
            if (this.cboTipoNota.GetText() == "") {
                MostrarAlerta("Informe o tipo da nota.");
                return false;
            }
            if (this.cboEmpresa.GetValue() == 0) {
                MostrarAlerta("Informe a empresa.");
                return false;
            }
            return true;
        }
        catch (e) {
            LogarException(e);
        }
    };
    R_AltPRej.prototype.onBtnGerarClick = function (s, e) {
        if (!this.ValidarFiltros()) {
            return;
        }
        var parametros = {
            dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
            dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
            tipoNF: this.cboTipoNota.GetValue(),
            codEmpresa: this.cboEmpresa.GetValue()
        };
        abrirEspera("Gerando Relação...");
        this.ExecutarFuncaoServerSideAsynch("GetProdutosRejeicaoNF", parametros, this.OnGerouGrade, this.funcaoErro, this);
        //var retorno: any[] = this.ExecutarFuncaoServerSideSynch("GetProdutosRejeicaoNF", parametros);
        //this.grid.PreencherGrid(retorno);
    };
    R_AltPRej.prototype.OnGerouGrade = function (d) {
        try {
            var retorno = JSON.parse(d);
            if (retorno.d) {
                this.Produtos = retorno.d;
                this.grid.PreencherGrid(retorno.d);
            }
            else {
                this.grid.PreencherGrid(null);
                this.Produtos = [];
                fecharEspera();
                MostrarAlerta("Filtre melhor sua busca!!");
            }
            fecharEspera();
        }
        catch (ex) {
            fecharEspera();
        }
    };
    R_AltPRej.prototype.ValidarCampos = function () {
        var s = this.grid.Grid.getSelectedRowsData();
        if (!s || s.length == 0) {
            MostrarAlerta("Nenhum produto foi selecionado.");
            return false;
        }
        var NCM = this.txtNCM.GetText();
        var CFOP = this.cboCFOP.GetText();
        var CST = this.cboSituacao.GetText();
        if (String.IsNullOrWhiteSpace(NCM)) {
            MostrarAlerta("Informe o campo NCM.");
            return false;
        }
        if (String.IsNullOrWhiteSpace(CFOP)) {
            MostrarAlerta("Informe o campo CFOP.");
            return false;
        }
        if (String.IsNullOrWhiteSpace(CST)) {
            MostrarAlerta("Informe o campo CST.");
            return false;
        }
        return true;
    };
    R_AltPRej.prototype.onBtnCorrigirClick = function (s, e) {
        var _this = this;
        try {
            if (!this.ValidarCampos()) {
                return;
            }
            var NCM = this.txtNCM.GetText();
            var CFOP = this.cboCFOP.GetText();
            var CST = this.cboSituacao.GetValue();
            var ST_PIS = this.cboST_PIS.GetValue();
            var ALIQ_PIS = this.txtAliq_PIS.GetText().CNum();
            var ST_COFINS = this.cboST_COFINS.GetValue();
            var ALIQ_COFINS = this.txtAliq_COFINS.GetText().CNum();
            var ST_IPI = this.cboSt_IPI_Saida.GetValue();
            var ALIQ_IPI = this.txtAliq_IPI.GetText().CNum();
            var selecionados = this.grid.Grid.getSelectedRowsData();
            if (selecionados && selecionados.length > 0) {
                selecionados.forEach(function (x) {
                    x.NCM = NCM;
                    x.CFOP = CFOP;
                    x.CST = CST;
                    x.ST_PIS = ST_PIS;
                    x.Aliquota_PIS = ALIQ_PIS;
                    x.ST_COFINS = ST_COFINS;
                    x.Aliquota_COFINS = ALIQ_COFINS;
                    x.ST_IPI = ST_IPI;
                    x.Aliquota_IPI = ALIQ_IPI;
                });
            }
            //console.log(selecionados);
            var parametros = {
                produtos: selecionados
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("CorrigirProdutos", parametros);
            if (retorno) {
                MostrarMensagem("Informações atualizadas com sucesso.");
                var tipoNotaSelecionado = this.cboTipoNota.GetValue();
                this.LimparCampos();
                this.grid.deselectAll();
                this.cboTipoNota.SetValue(tipoNotaSelecionado);
                setTimeout(function () {
                    _this.onBtnGerarClick(null, null);
                }, 300);
            }
            else {
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    R_AltPRej.prototype.onBtnLimparClick = function (s, e) {
        this.LimparCampos();
    };
    R_AltPRej.prototype.LimparCampos = function () {
        this.cboTipoNota.LimparSelecao();
        this.txtPeriodo.Iniciar();
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.grid.PreencherGrid(null);
        this.txtNCM.Limpar();
        this.cboCFOP.LimparSelecao();
        this.cboSituacao.LimparSelecao();
        this.cboST_PIS.LimparSelecao();
        this.txtAliq_PIS.Limpar();
        this.cboST_COFINS.LimparSelecao();
        this.txtAliq_COFINS.Limpar();
        this.cboSt_IPI_Saida.LimparSelecao();
        this.txtAliq_IPI.Limpar();
        this.Produtos = [];
    };
    R_AltPRej.prototype.OnCboTipoNotaChanged = function (s, e) {
        var tipoNota = this.cboTipoNota.GetValue();
        this.grid.PreencherGrid(null);
        this.LimparCampos();
        this.cboTipoNota.SetValue(tipoNota);
    };
    return R_AltPRej;
}(MouraPageAngular));
var r_AltPRej = new R_AltPRej();
//# sourceMappingURL=R_AltPRej.js.map