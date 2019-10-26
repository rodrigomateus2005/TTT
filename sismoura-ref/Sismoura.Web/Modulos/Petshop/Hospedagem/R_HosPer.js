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
var R_HosPer = /** @class */ (function (_super) {
    __extends(R_HosPer, _super);
    function R_HosPer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_HosPer.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HosPer.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HosPer.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HosPer.prototype, "lstEmpresa", {
        //get cboEmpresa(): MouraComboBoxEmpresa {
        //    return window['cboEmpresa_Object'];
        //}
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HosPer.prototype, "cboTipoHospedagem", {
        get: function () {
            return window['cboTipoHospedagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HosPer.prototype, "txtLocalHospedagem", {
        get: function () {
            return window['txtLocalHospedagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HosPer.prototype, "chkCortesia", {
        get: function () {
            return window['chkCortesia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HosPer.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HosPer.prototype, "grdHospedagem", {
        get: function () {
            return window['grdHospedagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HosPer.prototype, "grdReserva", {
        get: function () {
            return window['grdReserva_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HosPer.prototype, "lstSituacoes", {
        get: function () {
            return window['lstSituacoes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HosPer.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_HosPer.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grdHospedagem) {
            adicionarEventoMoura(this.grdHospedagem.ClickBotaoLinha, this.OnGrdHospedagemClicouBotao, this);
            adicionarEventoMoura(this.grdHospedagem.CellPrepared, this.OnGridHospedagemCellPrepared, this);
        }
        if (this.grdReserva) {
            adicionarEventoMoura(this.grdReserva.ClickBotaoLinha, this.OnGrdReservaClicouBotao, this);
            adicionarEventoMoura(this.grdReserva.CellPrepared, this.OnGridReservaCellPrepared, this);
        }
    };
    R_HosPer.prototype.OnGridReservaCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data) {
                if (e.data['Situacao_Reserva'] == 'Finalizada') {
                    e.cellElement.css("color", "orange");
                }
                if (e.data['Situacao_Reserva'] == 'Cancelada') {
                    e.cellElement.css("color", "red");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_HosPer.prototype.OnGridHospedagemCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data) {
                if (e.data['Data_Checkout'] != null) {
                    e.cellElement.css("color", "orange");
                }
                if (e.data['Situacao_Hospedagem'] == 'Cancelada') {
                    e.cellElement.css("color", "red");
                }
                if (e.data['Cortesia'] == 'Sim') {
                    e.cellElement.css("color", "blue");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_HosPer.prototype.OnGrdHospedagemClicouBotao = function (s, e) {
        try {
            var codHospedagem = ("" + e.data['Codigo']).CNum();
            if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
                if (e.commandName == "fazer_checkin_checkout") {
                    abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroHospedagemPetz + "?CodigoHospedagem=" + codHospedagem), null);
                }
            }
            else {
                var parametrosTela = [];
                parametrosTela.push("CodigoHospedagem=" + CNum(codHospedagem));
                if (e.commandName == "fazer_checkin_checkout") {
                    abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroHospedagem), parametrosTela);
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_HosPer.prototype.OnGrdReservaClicouBotao = function (s, e) {
        try {
            var codReserva = ("" + e.data['Codigo']).CNum();
            if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
                if (e.commandName == "visualizar_reserva") {
                    abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroReservaHospedagemPetz + "?CodigoReserva=" + codReserva), null);
                }
                else if (e.commandName == "fazer_checklist") {
                    abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CheckListHospedagem + "?CodigoReserva=" + codReserva), null);
                }
            }
            else {
                var parametrosTela = [];
                parametrosTela.push("CodigoReserva=" + CNum(codReserva));
                if (e.commandName == "visualizar_reserva") {
                    abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroReservaHospedagem), parametrosTela);
                }
                else if (e.commandName == "fazer_checklist") {
                    abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CheckListHospedagem + "?CodigoReserva=" + codReserva), null);
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_HosPer.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            this.txtLocalHospedagem.Visible = false;
            this.cboTipoHospedagem.Visible = true;
        }
        else {
            this.txtLocalHospedagem.Visible = true;
            this.cboTipoHospedagem.Visible = false;
        }
    };
    R_HosPer.prototype.GerarGridHospedagem = function () {
        var _this = this;
        var parametros;
        if (!this.ValidadarFiltros()) {
            return;
        }
        var empresas = this.lstEmpresa.GetValuesRelacaoNumber();
        var situacoes = [];
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            situacoes = this.lstSituacoes.SelectedValues;
        }
        var desconsiderarCortesia;
        var tipoPeriodo;
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            desconsiderarCortesia = this.chkCortesia.Checked;
            tipoPeriodo = this.cboTipo.GetValue();
        }
        else {
            desconsiderarCortesia = false;
            tipoPeriodo = "";
        }
        try {
            var localTipo = void 0;
            if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
                localTipo = this.cboTipoHospedagem.GetValue();
            }
            else {
                localTipo = this.txtLocalHospedagem.GetText().CNum();
            }
            if (localTipo == null) {
                localTipo = 0;
            }
            parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                codProprietario: this.txtPet.TextBoxProprietario.GetText().CNum(),
                codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum(),
                localTipo: localTipo,
                empresas: empresas,
                situacoes: situacoes,
                desconsiderarCortesia: desconsiderarCortesia,
                tipoPeriodo: tipoPeriodo
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarGridHospedagem", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grdHospedagem.PreencherGrid(retorno);
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
            this.grdHospedagem.PreencherGrid(null);
            LogarException(ex);
            fecharEspera();
        }
    };
    R_HosPer.prototype.ValidadarFiltros = function () {
        try {
            if (!this.txtPeriodo.IsValido()) {
                MostrarAlerta("Informe o período.");
                return false;
            }
            if (!this.lstEmpresa.GetValues() || this.lstEmpresa.GetValues().length <= 0) {
                MostrarAlerta("Informe a empresa");
                return false;
            }
            return true;
        }
        catch (e) {
            LogarException(e);
        }
    };
    R_HosPer.prototype.GerarGridReserva = function () {
        var _this = this;
        var localTipo;
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            localTipo = this.cboTipoHospedagem.GetValue();
        }
        else {
            localTipo = this.txtLocalHospedagem.GetText().CNum();
        }
        if (localTipo == null) {
            localTipo = 0;
        }
        var parametros;
        if (!this.ValidadarFiltros()) {
            return;
        }
        var empresas = this.lstEmpresa.GetValuesRelacaoNumber();
        var situacoes = [];
        var tipoPeriodo;
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            tipoPeriodo = this.cboTipo.GetValue();
        }
        else {
            tipoPeriodo = "";
        }
        try {
            parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                codProprietario: this.txtPet.TextBoxProprietario.GetText().CNum(),
                codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum(),
                localTipo: localTipo,
                empresas: empresas,
                situacoes: situacoes,
                tipoPeriodo: tipoPeriodo
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarGridReserva", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grdReserva.PreencherGrid(retorno);
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
    R_HosPer.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            if (this.cboTipoHospedagem.GetText() == "") {
                MostrarAlerta("Informe o tipo da hospedagem");
                return;
            }
        }
        if (this.tab.GetActiveTabIndex() == 0) {
            this.GerarGridHospedagem();
        }
        else {
            this.GerarGridReserva();
        }
    };
    R_HosPer.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.grdHospedagem.PreencherGrid(null);
        this.grdReserva.PreencherGrid(null);
        this.txtLocalHospedagem.Limpar();
        if (this.cboTipoHospedagem) {
            this.cboTipoHospedagem.Combo.SetText("--Todos--");
        }
        this.txtPeriodo.Iniciar();
        this.txtPet.Limpar();
        this.cboTipo.SetValue("C");
        this.lstSituacoes.LimparSelecao();
    };
    return R_HosPer;
}(MouraPageRelacaoAngular));
var r_HosPer = new R_HosPer();
//# sourceMappingURL=R_HosPer.js.map