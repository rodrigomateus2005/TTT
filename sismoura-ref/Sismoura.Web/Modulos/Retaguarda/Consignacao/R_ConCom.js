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
var R_ConCom = /** @class */ (function (_super) {
    __extends(R_ConCom, _super);
    function R_ConCom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ConCom.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCom.prototype, "gridDiscriminada", {
        get: function () {
            return window['gridDiscriminada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCom.prototype, "gridResumida", {
        get: function () {
            return window['gridResumida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCom.prototype, "gridResumidaFiltro", {
        get: function () {
            return window['gridResumidaFiltro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCom.prototype, "rblOpcao", {
        get: function () {
            return window['rblOpcao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCom.prototype, "rblOrdenar", {
        get: function () {
            return window['rblOrdenar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCom.prototype, "txtAjudante", {
        get: function () {
            return window['txtAjudante_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCom.prototype, "txtVendedor", {
        get: function () {
            return window['txtVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_ConCom.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouGerar) {
            this.GetScope().MudouGerar = $.proxy(this.MudouGerar, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Filtro.Gerar; }, this.GetScope().MudouGerar);
        }
        if (!this.GetScope().VerificarColunas) {
            this.GetScope().VerificarColunas = $.proxy(this.VerificarColunas, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Filtro.Opcao; }, this.GetScope().VerificarColunas);
        }
        this.LimparCampos();
    };
    R_ConCom.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtVendedor) {
            adicionarEventoMoura(this.txtVendedor.Procurou, this.OnDepoisProcurou, this);
        }
    };
    R_ConCom.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.DataServidor();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Ordenar = "A";
        this.Filtro.Gerar = "D";
        this.Filtro.TotalVendido = CNum(0).Format(2);
        this.Filtro.TotalDesconto = CNum(0).Format(2);
        this.Filtro.TotalLiquido = CNum(0).Format(2);
        this.Filtro.TotalComissao = CNum(0).Format(2);
        this.gridDiscriminada.PreencherGrid(null);
        this.gridResumida.PreencherGrid(null);
        this.gridResumidaFiltro.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_ConCom.prototype.MudouGerar = function () {
        var _this = this;
        if (this.Filtro.Gerar == "R") {
            this.rblOpcao.Visible = true;
            this.Filtro.Opcao = "V";
        }
        else {
            this.rblOpcao.Visible = false;
        }
        abrirEspera("");
        setTimeout(function () {
            _this.VerificarColunas();
            fecharEspera();
        }, 50);
        this.RefreshAngular();
    };
    R_ConCom.prototype.VerificarColunas = function () {
        var colunasVisiveis = [];
        var colunasInvisiveis = [];
        if (this.Filtro.Gerar == "D") {
            this.gridDiscriminada.Visible = true;
            this.gridResumida.Visible = false;
            this.gridResumidaFiltro.Visible = false;
        }
        else if (this.Filtro.Gerar == "R" && this.Filtro.Opcao == "V") {
            this.gridDiscriminada.Visible = false;
            this.gridResumida.Visible = true;
            this.gridResumidaFiltro.Visible = false;
            this.gridResumida.ColunaVisible("Vendedor", true);
            this.gridResumida.ColunaVisible("Ajudante", true);
            this.gridResumida.ColunaVisible("Obs", true);
        }
        else if (this.Filtro.Gerar == "R" && this.Filtro.Opcao == "C") {
            this.gridDiscriminada.Visible = false;
            this.gridResumida.Visible = true;
            this.gridResumidaFiltro.Visible = false;
            this.gridResumida.ColunaVisible("Vendedor", false);
            this.gridResumida.ColunaVisible("Ajudante", false);
            this.gridResumida.ColunaVisible("Obs", false);
        }
        else if (this.Filtro.Gerar == "RV") {
            this.gridDiscriminada.Visible = false;
            this.gridResumida.Visible = false;
            this.gridResumidaFiltro.Visible = true;
            this.gridResumidaFiltro.ColunaVisible("Vendedor", true);
            this.gridResumidaFiltro.ColunaVisible("Ajudante", false);
        }
        else if (this.Filtro.Gerar == "RA") {
            this.gridDiscriminada.Visible = false;
            this.gridResumida.Visible = false;
            this.gridResumidaFiltro.Visible = true;
            this.gridResumidaFiltro.ColunaVisible("Vendedor", false);
            this.gridResumidaFiltro.ColunaVisible("Ajudante", true);
        }
        this.gridResumida.PreencherGrid(null);
        this.gridDiscriminada.PreencherGrid(null);
        this.gridResumidaFiltro.PreencherGrid(null);
        this.Filtro.TotalVendido = CNum(0).Format(2);
        this.Filtro.TotalDesconto = CNum(0).Format(2);
        this.Filtro.TotalLiquido = CNum(0).Format(2);
        this.Filtro.TotalComissao = CNum(0).Format(2);
        this.RefreshAngular();
    };
    R_ConCom.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (this.ValidarCamposObrigatorios()) {
            if (this.Filtro.Gerar == "D") {
                this.GerarGradeDiscriminada();
            }
            else if (this.Filtro.Gerar == "R" && this.Filtro.Opcao == "V") {
                this.GerarGradeResumida();
            }
            else if (this.Filtro.Gerar == "R" && this.Filtro.Opcao == "C") {
                this.GerarGradeResumidaConsignacao();
            }
            else if (this.Filtro.Gerar == "RV" || this.Filtro.Gerar == "RA") {
                this.GerarGradeResumidaFiltros();
            }
        }
    };
    R_ConCom.prototype.GerarGradeDiscriminada = function () {
        var _this = this;
        var parametros;
        var ordenar;
        ordenar = this.rblOrdenar.Visible ? this.Filtro.Ordenar : "V";
        try {
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                vendedor: CNum(this.Filtro.Vendedor),
                ajudante: CNum(this.Filtro.Ajudante),
                ordernar: ordenar,
                comissao: CNum(this.Filtro.Comissao)
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarGradeDiscriminada", parametros, function (d) {
                var retorno = GetRetornoAJAX(d);
                _this.gridDiscriminada.PreencherGrid(retorno);
                if (retorno.length > 0) {
                    _this.Filtro.TotalVendido = retorno.Sum("Total_Vendido").Format(ValoresSismoura.CasasDecimaisValor);
                    _this.Filtro.TotalComissao = retorno.Sum("Valor_Comissao").Format(ValoresSismoura.CasasDecimaisValor);
                    _this.Filtro.TotalDesconto = retorno.Sum("Total_Desconto").Format(ValoresSismoura.CasasDecimaisValor);
                    _this.Filtro.TotalLiquido = retorno.Sum("Total_Liquido").Format(ValoresSismoura.CasasDecimaisValor);
                }
                else {
                    _this.Filtro.TotalVendido = CNum(0).Format(2);
                    _this.Filtro.TotalComissao = CNum(0).Format(2);
                    _this.Filtro.TotalDesconto = CNum(0).Format(2);
                    _this.Filtro.TotalLiquido = CNum(0).Format(2);
                }
                _this.gridDiscriminada.GroupBy("Codigo");
                _this.RefreshAngular();
                _this.AccordionFiltros.SetExpanded(false);
                fecharEspera();
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
    R_ConCom.prototype.GerarGradeResumida = function () {
        var _this = this;
        var parametros;
        var ordenar;
        ordenar = this.rblOrdenar.Visible ? this.Filtro.Ordenar : "V";
        try {
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                vendedor: CNum(this.Filtro.Vendedor),
                ajudante: CNum(this.Filtro.Ajudante),
                ordernar: ordenar,
                comissao: CNum(this.Filtro.Comissao)
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarGradeResumida", parametros, function (d) {
                var retorno = GetRetornoAJAX(d);
                _this.gridResumida.PreencherGrid(retorno);
                _this.Filtro.TotalVendido = retorno.Sum("Total_Vendido").Format(ValoresSismoura.CasasDecimaisValor);
                _this.Filtro.TotalDesconto = retorno.Sum("Total_Desconto").Format(ValoresSismoura.CasasDecimaisValor);
                _this.Filtro.TotalLiquido = retorno.Sum("Total_Liquido").Format(ValoresSismoura.CasasDecimaisValor);
                _this.Filtro.TotalComissao = retorno.Sum("Valor_Comissao").Format(ValoresSismoura.CasasDecimaisValor);
                _this.RefreshAngular();
                _this.AccordionFiltros.SetExpanded(false);
                fecharEspera();
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
    R_ConCom.prototype.GerarGradeResumidaConsignacao = function () {
        var _this = this;
        var parametros;
        var ordenar;
        ordenar = this.rblOrdenar.Visible ? this.Filtro.Ordenar : "V";
        try {
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                vendedor: CNum(this.Filtro.Vendedor),
                ajudante: CNum(this.Filtro.Ajudante),
                ordernar: ordenar
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarGradeResumidaConsignacao", parametros, function (d) {
                var retorno = GetRetornoAJAX(d);
                _this.gridResumida.PreencherGrid(retorno);
                _this.Filtro.TotalVendido = retorno.Sum("Total_Vendido").Format(ValoresSismoura.CasasDecimaisValor);
                _this.Filtro.TotalDesconto = retorno.Sum("Total_Desconto").Format(ValoresSismoura.CasasDecimaisValor);
                _this.Filtro.TotalLiquido = retorno.Sum("Total_Liquido").Format(ValoresSismoura.CasasDecimaisValor);
                if (CNum(_this.Filtro.Comissao) > 0) {
                    _this.Filtro.TotalComissao = (retorno.Sum("Total_Liquido") * (CNum(_this.Filtro.Comissao) / 100)).Format(ValoresSismoura.CasasDecimaisValor);
                }
                else {
                    _this.Filtro.TotalComissao = CNum(0).Format(ValoresSismoura.CasasDecimaisValor);
                }
                _this.RefreshAngular();
                _this.AccordionFiltros.SetExpanded(false);
                fecharEspera();
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
    R_ConCom.prototype.GerarGradeResumidaFiltros = function () {
        var _this = this;
        var parametros;
        var ordenar;
        ordenar = this.rblOrdenar.Visible ? this.Filtro.Ordenar : "V";
        try {
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                vendedor: CNum(this.Filtro.Vendedor),
                ajudante: CNum(this.Filtro.Ajudante),
                ordernar: ordenar,
                comissao: CNum(this.Filtro.Comissao),
                filtro: this.Filtro.Gerar
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarGradeResumidaFiltros", parametros, function (d) {
                var retorno = GetRetornoAJAX(d);
                _this.gridResumidaFiltro.PreencherGrid(retorno);
                _this.Filtro.TotalVendido = _this.gridResumidaFiltro.DataSource.Sum("Total_Vendido").Format(ValoresSismoura.CasasDecimaisValor);
                _this.Filtro.TotalDesconto = _this.gridResumidaFiltro.DataSource.Sum("Total_Desconto").Format(ValoresSismoura.CasasDecimaisValor);
                _this.Filtro.TotalLiquido = _this.gridResumidaFiltro.DataSource.Sum("Total_Liquido").Format(ValoresSismoura.CasasDecimaisValor);
                _this.Filtro.TotalComissao = _this.gridResumidaFiltro.DataSource.Sum("Valor_Comissao").Format(ValoresSismoura.CasasDecimaisValor);
                _this.RefreshAngular();
                _this.AccordionFiltros.SetExpanded(false);
                fecharEspera();
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
    R_ConCom.prototype.OnDepoisProcurou = function (s, e) {
        if (CNum(this.txtVendedor.GetText()) > 0) {
            this.Filtro.Comissao = this.GetComissao(CNum(this.txtVendedor.GetText()));
        }
        else {
            this.Filtro.Comissao = 0;
        }
        this.RefreshAngular();
    };
    R_ConCom.prototype.GetComissao = function (codVendedor) {
        var parametros;
        try {
            parametros = {
                codVendedor: codVendedor
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetComissaoByVendedor", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_ConCom;
}(MouraPageRelacaoAngular));
var r_ConCom = new R_ConCom();
//# sourceMappingURL=R_ConCom.js.map