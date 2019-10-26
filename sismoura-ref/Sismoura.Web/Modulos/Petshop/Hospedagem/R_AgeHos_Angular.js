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
var R_AgeHos_Angular = /** @class */ (function (_super) {
    __extends(R_AgeHos_Angular, _super);
    function R_AgeHos_Angular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_AgeHos_Angular.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgeHos_Angular.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgeHos_Angular.prototype, "grdAnimaisBaia", {
        get: function () {
            return window['grdAnimaisBaia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgeHos_Angular.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgeHos_Angular.prototype, "cboEmpresa", {
        //get txtPet(): MouraTextBoxProcuraProprietarioAnimal {
        //    return window['txtPet_Object'];
        //}
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgeHos_Angular.prototype, "cboTipoHospedagem", {
        get: function () {
            return window['cboTipoHospedagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgeHos_Angular.prototype, "accFiltro", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgeHos_Angular.prototype, "mdlAnimaisBaia", {
        get: function () {
            return window['mdlAnimaisBaia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgeHos_Angular.prototype, "lblAnimaisBaia", {
        get: function () {
            return window['lblAnimaisBaia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgeHos_Angular.prototype, "lblCapacidadeBaia", {
        get: function () {
            return window['lblCapacidadeBaia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_AgeHos_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.OnGridCellPrepared, this);
            adicionarEventoMoura(this.grid.ClickBotaoLinha, this.OnGridClicouBotao, this);
            if (this.grid.Grid) {
                this.grid.Grid.option("showRowLines", true);
            }
        }
        if (this.grdAnimaisBaia) {
            adicionarEventoMoura(this.grdAnimaisBaia.SelecionouLinha, this.OnGrdAnimaisBaiaSelecionouLinha, this);
            adicionarEventoMoura(this.grdAnimaisBaia.CellPrepared, this.OnGrdAnimaisBaiaCellPrepared, this);
        }
    };
    R_AgeHos_Angular.prototype.OnGrdAnimaisBaiaSelecionouLinha = function (s, e) {
        try {
            var hospedagem = ("" + e.data['Hospedagem']).CNum();
            var reserva = ("" + e.data['Reserva']).CNum();
            var presenca = ("" + e.data['Presenca']);
            if (presenca.toLocaleLowerCase() == 'reserva') {
                if (reserva > 0) {
                    abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroReservaHospedagemPetz), "" + reserva);
                }
            }
            else {
                if (hospedagem > 0) {
                    abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroHospedagemPetz), "" + hospedagem);
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgeHos_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_AgeHos_Angular.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!this.txtPeriodo.IsValido()) {
            MostrarAlerta("Informe o período corretamente.");
            return;
        }
        this.GerarGrade();
    };
    R_AgeHos_Angular.prototype.OnGridClicouBotao = function (s, e) {
        try {
            var dados = e.data[e.commandName];
            var tipoHospedagem = dados.split("|")[0];
            var quantidadeAnimaisBaia = dados.split("|")[1];
            var dataInicio = this.TratarData(dados.split("|")[2]);
            var dataFim = this.TratarData(dados.split("|")[3]);
            var baia = dados.split("|")[4];
            var lotacaoMaxima = dados.split("|")[5];
            var data = e.commandName.ToDate();
            if (CNum(quantidadeAnimaisBaia) == 0) {
                MostrarAlerta("Não existem animais hospedados neste dia, a baia está livre.");
                return;
            }
            this.lblAnimaisBaia.Text = "Animais hospedados: " + quantidadeAnimaisBaia;
            this.lblCapacidadeBaia.Text = "Vagas disponíveis: " + (lotacaoMaxima.CNum() - quantidadeAnimaisBaia.CNum());
            this.GerarGradeAnimaisBaia(CNum(baia), data, data);
            //if (tipoHospedagem != 'R') {
            //    this.GerarGradeAnimaisBaia(CNum(baia), data, data);
            //}
        }
        catch (e) {
            LogarException(e);
        }
    };
    R_AgeHos_Angular.prototype.TratarData = function (data) {
        try {
            var nData = ConvertToDate(data);
            if (!(data.length > 10)) {
                return nData;
            }
            var aux = data.split(" ")[1];
            var hora = CNum(aux.split(":")[0]);
            var minutos = CNum(aux.split(":")[1]);
            var segundos = CNum(aux.split(":")[2]);
            nData.setHours(hora, minutos, segundos, 0);
            return nData;
        }
        catch (e) {
            LogarException(e);
        }
    };
    R_AgeHos_Angular.prototype.GerarGrade = function () {
        var _this = this;
        if (!this.cboTipoHospedagem || !this.cboTipoHospedagem.GetValue()) {
            MostrarAlerta("Informe o filtro tipo de hospedagem");
            return;
        }
        if (!this.cboEmpresa || CNum(this.cboEmpresa.GetValue()) == 0) {
            MostrarAlerta("Informe o filtro empresa");
            return;
        }
        try {
            var parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                tipoHospedagem: this.cboTipoHospedagem.GetValue().CNum(),
                codEmpresa: this.cboEmpresa.GetValue()
            };
            this.ExecutarFuncaoServerSideAsynch("GerarGridHospedagem", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (_this.accFiltro) {
                        _this.accFiltro.SetExpanded(false);
                    }
                    _this.grid.Colunas = retorno.ColunasGrade;
                    //this.grid.TotalizacoesColunas = retorno.Totalizacoes;
                    _this.grid.iniciarGrid();
                    _this.ConfigurarGrade();
                    _this.grid.PreencherGrid(retorno.Dados);
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
            abrirEspera("");
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    R_AgeHos_Angular.prototype.GerarGradeAnimaisBaia = function (codBaia, dataInicio, dataFim) {
        var _this = this;
        try {
            var parametros = {
                dataInicial: dataInicio.ToDate(),
                dataFinal: dataFim.ToDate(),
                codBaia: codBaia
            };
            this.ExecutarFuncaoServerSideAsynch("GetAnimaisAusentes", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (_this.accFiltro) {
                        _this.accFiltro.SetExpanded(false);
                    }
                    _this.grdAnimaisBaia.PreencherGrid(retorno);
                    _this.mdlAnimaisBaia.Show();
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
            abrirEspera("");
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    R_AgeHos_Angular.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        try {
            this.txtPeriodo.Iniciar();
            this.ConfigurarGrade();
            this.grid.PreencherGrid([]);
            this.cboTipoHospedagem.SetValue(0);
            if (ValoresSismoura && ValoresSismoura.EmpresaPadraoUsuario > 0) {
                this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
            }
            this.cboTipoHospedagem.SetSelectedIndex(0);
            this.grdAnimaisBaia.PreencherGrid([]);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgeHos_Angular.prototype.ConfigurarGrade = function () {
        this.grid.FixarColuna("Baia", true);
        this.grid.ExibirLinhaFiltro = false;
        var opt = this.grid.Grid.option("paging");
        opt.pageSize = 50;
        this.grid.Grid.option("paging", opt);
    };
    R_AgeHos_Angular.prototype.OnGrdAnimaisBaiaCellPrepared = function (s, e) {
        if (e.rowType == "data" && e.data) {
            var presenca = e.data["Presenca"];
            var isReserva = presenca.toLowerCase() == "reserva";
            if (isReserva) {
                e.cellElement.css("background-color", "orange");
            }
        }
    };
    R_AgeHos_Angular.prototype.OnGridCellPrepared = function (s, e) {
        try {
            var name = "";
            if (e.column && e.column) {
                name = e.column.name;
            }
            if (e.rowType == "data" && e.data) {
                if (e.columnIndex != 0) {
                    if (name.substring(0, 14).toLowerCase() == "botaotemplate_") {
                        debugger;
                        var data = e.data[replaceAllNoCase(name, "botaotemplate_", "")];
                        var tipo_hospedagem = e.data["Tipo_Hospedagem"];
                        //disponibilidade da baia
                        var disponibilidade = data.split("|")[0];
                        //Quantidade de petz na Baia
                        var quantidade = data.split("|")[1];
                        //Data inicio da diária
                        var dataInicio = new Date(data.split("|")[2]);
                        //Data fim da diária
                        var dataFim = new Date(data.split("|")[3]);
                        //Codigo da Baia
                        var baia = data.split("|")[4];
                        //Quantidade máxima permitida na baia.
                        var lotacaoMaxima = data.split("|")[5];
                        var isBaiaComunitaria = data.split("|")[6];
                        if (isBaiaComunitaria.toLowerCase() == "false" && tipo_hospedagem.toLowerCase() != "daycare") {
                            if (quantidade.CNum() > 0) {
                                $(e.cellElement[0]).find('input').val(0);
                            }
                            else {
                                $(e.cellElement[0]).find('input').val("" + (lotacaoMaxima.CNum() - quantidade.CNum()));
                            }
                        }
                        else {
                            $(e.cellElement[0]).find('input').val("" + (lotacaoMaxima.CNum() - quantidade.CNum()));
                        }
                        //$(e.cellElement[0]).find('input').val(`${lotacaoMaxima.CNum() - quantidade.CNum()}`);
                    }
                    var cor = "";
                    if (isBaiaComunitaria.toLowerCase() == "false" && tipo_hospedagem.toLowerCase() != "daycare") { //Baias que permitem mais de um animal de proprietários diferentes.
                        if (quantidade.CNum() == 0) { //Sem animais na baia.
                            cor = "green";
                        }
                        else {
                            cor = "black";
                        }
                    }
                    else {
                        if (quantidade.CNum() < lotacaoMaxima.CNum()) {
                            cor = "green";
                        }
                        else {
                            cor = "black";
                        }
                    }
                    //if (disponibilidade == "R") { //RESERVADA
                    //    cor = "orange";
                    //} else {
                    //    if (isBaiaComunitaria.toLowerCase() == "false" && tipo_hospedagem.toLowerCase() != "daycare") { //Baias que permitem mais de um animal de proprietários diferentes.
                    //        if (quantidade.CNum() == 0) { //Sem animais na baia.
                    //            cor = "green";
                    //        } else {
                    //            cor = "black";
                    //        }
                    //    } else {
                    //        if (quantidade.CNum() < lotacaoMaxima.CNum()) {
                    //            cor = "green";
                    //        } else {
                    //            cor = "black";
                    //        }
                    //    }
                    //}
                    if (!String.IsNullOrWhiteSpace(cor)) {
                        e.cellElement.css("background-color", cor);
                        e.cellElement.css("color", "white");
                        e.cellElement.addClass("botaoFull");
                    }
                }
            }
        }
        catch (ex) {
        }
    };
    return R_AgeHos_Angular;
}(MouraPageRelacaoAngular));
var r_AgeHos_Angular = new R_AgeHos_Angular();
//# sourceMappingURL=R_AgeHos_Angular.js.map