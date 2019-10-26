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
var R_IndcHosp = /** @class */ (function (_super) {
    __extends(R_IndcHosp, _super);
    function R_IndcHosp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_IndcHosp.prototype, "PercentualClientesNaoRecorrentesHotel", {
        get: function () {
            if (!this.GetScope()['PercentualClientesNaoRecorrentesHotel']) {
                this.GetScope()['PercentualClientesNaoRecorrentesHotel'] = {};
            }
            return this.GetScope()['PercentualClientesNaoRecorrentesHotel'];
        },
        set: function (value) {
            this.GetScope()['PercentualClientesNaoRecorrentesHotel'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IndcHosp.prototype, "PercentualClientesNaoRecorrentesDaycare", {
        get: function () {
            if (!this.GetScope()['PercentualClientesNaoRecorrentesDaycare']) {
                this.GetScope()['PercentualClientesNaoRecorrentesDaycare'] = {};
            }
            return this.GetScope()['PercentualClientesNaoRecorrentesDaycare'];
        },
        set: function (value) {
            this.GetScope()['PercentualClientesNaoRecorrentesDaycare'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IndcHosp.prototype, "FaturamentoHotel", {
        get: function () {
            if (!this.GetScope()['FaturamentoHotel']) {
                this.GetScope()['FaturamentoHotel'] = {};
            }
            return this.GetScope()['FaturamentoHotel'];
        },
        set: function (value) {
            this.GetScope()['FaturamentoHotel'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IndcHosp.prototype, "AccordionFiltros", {
        get: function () { return window["accFiltros_Object"]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IndcHosp.prototype, "txtPeriodo", {
        get: function () { return window['txtPeriodo_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IndcHosp.prototype, "txtPet", {
        get: function () { return window['txtPet_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IndcHosp.prototype, "lstEmpresa", {
        get: function () { return window['lstEmpresa_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IndcHosp.prototype, "cboTipoHospedagem", {
        get: function () { return window['cboTipoHospedagem_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IndcHosp.prototype, "tab", {
        get: function () { return window['tab_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IndcHosp.prototype, "grdFaturamentoHospedagem", {
        get: function () { return window['grdFaturamentoHospedagem_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IndcHosp.prototype, "grdCortesias", {
        get: function () { return window['grdCortesias_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IndcHosp.prototype, "grdRankinClientes", {
        get: function () { return window['grdRankinClientes_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IndcHosp.prototype, "grdRacasFrequentes", {
        get: function () { return window['grdRacasFrequentes_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IndcHosp.prototype, "grdClientesNaoRecorrentes", {
        get: function () { return window['grdClientesNaoRecorrentes_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_IndcHosp.prototype, "grdNovosClientes", {
        get: function () { return window['grdNovosClientes_Object']; },
        enumerable: true,
        configurable: true
    });
    R_IndcHosp.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_IndcHosp.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_IndcHosp.prototype.GerarGridClientesNaoRecorrentes = function () {
        var _this = this;
        var parametros;
        if (!this.ValidadarFiltros()) {
            return;
        }
        var empresas = this.lstEmpresa.GetValuesRelacaoNumber();
        try {
            parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                tipoHospedagem: this.cboTipoHospedagem.GetValue(),
                empresas: empresas
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetRelacaoClientesNaoRecorrentes", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grdClientesNaoRecorrentes.PreencherGrid(retorno);
                    _this.grdClientesNaoRecorrentes.GroupBy('Tipo_Hospedagem');
                    if (retorno && retorno.length > 0) {
                        _this.PercentualClientesNaoRecorrentesHotel = retorno[0].Percentual_Nao_Recorrentes_Hotel;
                        _this.PercentualClientesNaoRecorrentesDaycare = retorno[0].Percentual_Nao_Recorrentes_Daycare;
                        _this.GetScope().$applyAsync();
                    }
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
            this.grdCortesias.PreencherGrid(null);
            LogarException(ex);
            fecharEspera();
        }
    };
    R_IndcHosp.prototype.GerarGridRacasFrequentes = function () {
        var _this = this;
        var parametros;
        if (!this.ValidadarFiltros()) {
            return;
        }
        var empresas = this.lstEmpresa.GetValuesRelacaoNumber();
        try {
            parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                tipoHospedagem: this.cboTipoHospedagem.GetValue(),
                empresas: empresas
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetRelacaoRacasMaisFrequentes", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grdRacasFrequentes.PreencherGrid(retorno);
                    _this.grdRacasFrequentes.GroupBy('Tipo_Hospedagem');
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
            this.grdCortesias.PreencherGrid(null);
            LogarException(ex);
            fecharEspera();
        }
    };
    R_IndcHosp.prototype.GerarGridRankingClientes = function () {
        var _this = this;
        var parametros;
        if (!this.ValidadarFiltros()) {
            return;
        }
        var empresas = this.lstEmpresa.GetValuesRelacaoNumber();
        try {
            parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                tipoHospedagem: this.cboTipoHospedagem.GetValue(),
                empresas: empresas
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetRelacaoClientesVips", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grdRankinClientes.PreencherGrid(retorno);
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
            this.grdCortesias.PreencherGrid(null);
            LogarException(ex);
            fecharEspera();
        }
    };
    R_IndcHosp.prototype.GerarGridCortesiaHospedagem = function () {
        var _this = this;
        var parametros;
        if (!this.ValidadarFiltros()) {
            return;
        }
        var empresas = this.lstEmpresa.GetValuesRelacaoNumber();
        try {
            parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                codProprietario: this.txtPet.TextBoxProprietario.GetText().CNum(),
                codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum(),
                tipoHospedagem: this.cboTipoHospedagem.GetValue(),
                empresas: empresas
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarGridCortesiaHospedagem", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grdCortesias.PreencherGrid(retorno);
                    _this.grdCortesias.GroupBy('Mes');
                    _this.grdCortesias.CollapseAll();
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
            this.grdCortesias.PreencherGrid(null);
            LogarException(ex);
            fecharEspera();
        }
    };
    R_IndcHosp.prototype.GerarGridFaturamentoHospedagem = function () {
        var _this = this;
        var parametros;
        if (!this.ValidadarFiltros()) {
            return;
        }
        var empresas = this.lstEmpresa.GetValuesRelacaoNumber();
        try {
            parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                codProprietario: this.txtPet.TextBoxProprietario.GetText().CNum(),
                codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum(),
                tipoHospedagem: this.cboTipoHospedagem.GetValue(),
                empresas: empresas
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarGridFaturamentoHospedagem", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grdFaturamentoHospedagem.PreencherGrid(retorno);
                    _this.grdFaturamentoHospedagem.GroupBy('Mes');
                    _this.grdFaturamentoHospedagem.CollapseAll();
                    _this.grdFaturamentoHospedagem.OrderBy('Data_Pagamento', 'ASC');
                    if (retorno && retorno.length > 0 && retorno[0]) {
                        var mediaDiariasHotel = 0;
                        var quantidadePetsHotel = 0;
                        var quantidadePetsDaycare = 0;
                        if (retorno.FindAll('Tipo_Hospedagem', 'Hotel')) {
                            var totalHospedagemHotel = retorno.FindAll('Tipo_Hospedagem', 'Hotel').length;
                            var totalDiariasHotel = retorno.FindAll('Tipo_Hospedagem', 'Hotel').Sum('Quantidade_Diarias');
                            mediaDiariasHotel = totalDiariasHotel / totalHospedagemHotel;
                            quantidadePetsHotel = retorno.FindAll('Tipo_Hospedagem', 'Hotel').length;
                        }
                        if (retorno.FindAll('Tipo_Hospedagem', 'Daycare')) {
                            quantidadePetsDaycare = retorno.FindAll('Tipo_Hospedagem', 'Daycare').length;
                        }
                        var infoFaturamento = {
                            totalBruto: retorno.Sum('Valor_Bruto'),
                            totalDesconto: retorno.Sum('Desconto'),
                            totalLiquido: retorno.Sum('Valor_Liquido'),
                            quantidadePetsHotel: quantidadePetsHotel,
                            quantidadePetsDaycare: quantidadePetsDaycare,
                            mediaDiarias: mediaDiariasHotel,
                        };
                        _this.FaturamentoHotel = infoFaturamento;
                        _this.GetScope().$applyAsync();
                    }
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
            this.grdFaturamentoHospedagem.PreencherGrid(null);
            LogarException(ex);
            fecharEspera();
        }
    };
    R_IndcHosp.prototype.GerarGridNovosClientes = function () {
        var _this = this;
        var parametros;
        if (!this.ValidadarFiltros()) {
            return;
        }
        var empresas = this.lstEmpresa.GetValuesRelacaoNumber();
        try {
            parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                tipoHospedagem: this.cboTipoHospedagem.GetValue(),
                empresas: empresas
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetRelacaoNovosClientes", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grdNovosClientes.PreencherGrid(retorno);
                    _this.grdNovosClientes.GroupBy('Mes');
                    _this.grdNovosClientes.GroupBy('Tipo_Hospedagem');
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
            this.grdCortesias.PreencherGrid(null);
            LogarException(ex);
            fecharEspera();
        }
    };
    R_IndcHosp.prototype.ValidadarFiltros = function () {
        try {
            if (!this.txtPeriodo.IsValido()) {
                MostrarAlerta("Informe o período.");
                return false;
            }
            if (!this.lstEmpresa.GetValues() || this.lstEmpresa.GetValues().length <= 0) {
                MostrarAlerta("Informe uma empresa");
                return false;
            }
            if (this.cboTipoHospedagem.GetText() == "") {
                MostrarAlerta("Informe o tipo da hospedagem");
                return false;
            }
            return true;
        }
        catch (e) {
            LogarException(e);
        }
    };
    R_IndcHosp.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        this.GerarGridFaturamentoHospedagem();
        this.GerarGridCortesiaHospedagem();
        this.GerarGridRacasFrequentes();
        this.GerarGridRankingClientes();
        this.GerarGridClientesNaoRecorrentes();
        this.GerarGridNovosClientes();
        //const IndexAbaAtiva = this.tab.GetTabByName('').TabIndex;
        //if (this.tab.GetActiveTabIndex() == 0) {
        //    this.GerarGridHospedagem();
        //} else {
        //    this.GerarGridReserva();
        //}
    };
    R_IndcHosp.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.grdFaturamentoHospedagem.PreencherGrid(null);
        this.grdCortesias.PreencherGrid(null);
        this.grdRacasFrequentes.PreencherGrid(null);
        this.grdRankinClientes.PreencherGrid(null);
        this.grdClientesNaoRecorrentes.PreencherGrid(null);
        this.grdNovosClientes.PreencherGrid(null);
        if (this.cboTipoHospedagem) {
            this.cboTipoHospedagem.Combo.SetText("--Todos--");
        }
        this.txtPeriodo.Iniciar();
        this.txtPet.Limpar();
        //this.lstSituacoes.LimparSelecao();
    };
    return R_IndcHosp;
}(MouraPageRelacaoAngular));
var r_IndcHosp = new R_IndcHosp();
//# sourceMappingURL=R_IndcHosp.js.map