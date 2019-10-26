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
var R_Credit = /** @class */ (function (_super) {
    __extends(R_Credit, _super);
    function R_Credit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Credit.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Credit.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Credit.prototype, "AccordionFiltrosSintetico", {
        get: function () {
            return window['accFiltrosSintetico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Credit.prototype, "AccordionFiltrosNaoUtilizados", {
        get: function () {
            return window['accFiltrosNaoUtilizados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Credit.prototype, "optTipoValidadeAnalitico", {
        get: function () {
            return window['optTipoValidadeAnalitico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Credit.prototype, "optTipoValidadeSintetico", {
        get: function () {
            return window['optTipoValidadeSintetico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Credit.prototype, "lblTotEntAnalitico", {
        get: function () {
            return window['lblTotEntAnalitico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Credit.prototype, "lblTotSaiAnalitico", {
        get: function () {
            return window['lblTotSaiAnalitico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Credit.prototype, "lblTotEntSintetico", {
        get: function () {
            return window['lblTotEntSintetico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Credit.prototype, "lblTotSaiSintetico", {
        get: function () {
            return window['lblTotSaiSintetico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Credit.prototype, "txtPeriodoNaoUtilizados", {
        get: function () {
            return window['txtPeriodoNaoUtilizados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Credit.prototype, "gridAnalitico", {
        get: function () {
            return window['gridAnalitico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Credit.prototype, "gridSintetico", {
        get: function () {
            return window['gridSintetico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Credit.prototype, "gridNaoUtilizados", {
        get: function () {
            return window['gridNaoUtilizados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Credit.prototype, "labelEnt", {
        get: function () {
            if (!this.GetScope()["labelEnt"]) {
                this.GetScope()["labelEnt"] = 0;
            }
            return this.GetScope()["labelEnt"];
        },
        set: function (value) {
            this.GetScope()["labelEnt"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Credit.prototype, "labelSai", {
        get: function () {
            if (!this.GetScope()["labelSai"]) {
                this.GetScope()["labelSai"] = 0;
            }
            return this.GetScope()["labelSai"];
        },
        set: function (value) {
            this.GetScope()["labelSai"] = value;
        },
        enumerable: true,
        configurable: true
    });
    R_Credit.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.gridSintetico) {
            adicionarEventoMoura(this.gridSintetico.CellPrepared, this.CellPrepared, this);
        }
    };
    R_Credit.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().OnAlteraTipoAnalitico) {
            this.GetScope().OnAlteraTipoAnalitico = $.proxy(this.OnAlteraTipoAnalitico, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Filtro.TipoData_Analitico; }, this.GetScope().OnAlteraTipoAnalitico);
        }
        if (!this.GetScope().OnAlteraTipoSintetico) {
            this.GetScope().OnAlteraTipoSintetico = $.proxy(this.OnAlteraTipoSintetico, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Filtro.TipoData_Sintetico; }, this.GetScope().OnAlteraTipoSintetico);
        }
        this.LimparCampos();
    };
    R_Credit.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        if (!this.ValidarPeriodoAba()) {
            return;
        }
        var parametros = this.SetParametros();
        try {
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("RelacaoCreditosCliente", parametros, function (d) {
                fecharEspera();
                var saldo = 0;
                var retorno = GetRetornoAJAX(d);
                for (var i = 0; i < retorno.length; i++) {
                    if (retorno[i].Entrada_Saida == "E") {
                        saldo += retorno[i].Valor;
                        retorno[i].Saldo = saldo;
                    }
                    else if (retorno[i].Entrada_Saida == "S") {
                        saldo -= retorno[i].Valor;
                        retorno[i].Saldo = saldo;
                    }
                }
                if (retorno) {
                    if (retorno.length > 0) {
                        if (_this.tab.GetActiveTabIndex() == 0) {
                            _this.AccordionFiltros.SetExpanded(false);
                            _this.gridAnalitico.PreencherGrid(retorno);
                        }
                        else if (_this.tab.GetActiveTabIndex() == 1) {
                            _this.AccordionFiltrosSintetico.SetExpanded(false);
                            _this.gridSintetico.PreencherGrid(retorno);
                        }
                        else if (_this.tab.GetActiveTabIndex() == 2) {
                            _this.AccordionFiltrosNaoUtilizados.SetExpanded(false);
                            _this.gridNaoUtilizados.PreencherGrid(retorno);
                        }
                    }
                    else {
                        var mensagem;
                        if (_this.tab.GetActiveTabIndex() == 0) {
                            mensagem = "Não foram encontrados lançamentos de créditos para o cliente informado!";
                        }
                        else if (_this.tab.GetActiveTabIndex() == 1) {
                            mensagem = "Nenhum registro encontrado!";
                        }
                        else if (_this.tab.GetActiveTabIndex() == 2) {
                            mensagem = "Não existe registro no período informado!";
                        }
                        MsgBoxJS(mensagem, MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
                    }
                }
                _this.LabelsTot(retorno);
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
    R_Credit.prototype.ValidarPeriodoAba = function () {
        var retorno = true;
        if (this.tab.GetActiveTabIndex() == 0) {
            if (!ValidarPeriodo(this.Filtro.Periodo_Inicial_Analitico, this.Filtro.Periodo_Final_Analitico)) {
                retorno = false;
            }
        }
        else if (this.tab.GetActiveTabIndex() == 1) {
            if (!ValidarPeriodo(this.Filtro.Periodo_Inicial_Sintetico, this.Filtro.Periodo_Final_Sintetico)) {
                retorno = false;
            }
        }
        else if (this.tab.GetActiveTabIndex() == 2) {
            if (!ValidarPeriodo(this.txtPeriodoNaoUtilizados.textBoxCalendarioInicio.GetDate(), this.txtPeriodoNaoUtilizados.textBoxCalendarioFim.GetDate())) {
                retorno = false;
            }
        }
        return retorno;
    };
    R_Credit.prototype.SetParametros = function () {
        if (this.tab.GetActiveTabIndex() == 0) {
            var parametros = {
                cliente: CNum(this.Filtro.Cliente_Analitico),
                tipoData: this.Filtro.TipoData_Analitico,
                tipoValidade: this.Filtro.TipoValidade_Analitico,
                dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial_Analitico),
                dataFinal: ConvertToDate(this.Filtro.Periodo_Final_Analitico),
                tipo: String(this.Filtro.Tipo_Analitico),
                credito: this.Filtro.Credito_Analitico,
                aba: "Analitico"
            };
        }
        else if (this.tab.GetActiveTabIndex() == 1) {
            var parametros = {
                cliente: CNum(this.Filtro.Cliente_Sintetico),
                tipoData: this.Filtro.TipoData_Sintetico,
                tipoValidade: this.Filtro.TipoValidade_Sintetico,
                dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial_Sintetico),
                dataFinal: ConvertToDate(this.Filtro.Periodo_Final_Sintetico),
                tipo: String(this.Filtro.Tipo_Sintetico),
                credito: this.Filtro.Credito_Sintetico,
                aba: "Sintetico"
            };
        }
        else if (this.tab.GetActiveTabIndex() == 2) {
            var parametros = {
                cliente: CNum(this.Filtro.Cliente_Sintetico),
                tipoData: this.Filtro.TipoData_Sintetico,
                tipoValidade: this.Filtro.TipoValidade_Sintetico,
                dataInicial: this.txtPeriodoNaoUtilizados.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodoNaoUtilizados.textBoxCalendarioFim.GetDate(),
                tipo: String(this.Filtro.Tipo_Sintetico),
                credito: this.Filtro.Credito_Sintetico,
                aba: "NaoUtilizados"
            };
        }
        return parametros;
    };
    R_Credit.prototype.LabelsTot = function (retorno) {
        this.LimpaLabelsTot();
        this.labelEnt = 0;
        this.labelSai = 0;
        for (var i = 0; i < retorno.length; i++) {
            if (retorno[i].Entrada_Saida == "E") {
                this.labelEnt += retorno[i].Valor;
                if (this.tab.GetActiveTabIndex() == 0) {
                    this.lblTotEntAnalitico.Text = "Entrada: " + this.labelEnt.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    });
                }
                else if (this.tab.GetActiveTabIndex() == 1) {
                    this.lblTotEntSintetico.Text = "Entrada: " + this.labelEnt.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    });
                }
            }
            else if (retorno[i].Entrada_Saida == "S") {
                this.labelSai += retorno[i].Valor;
                if (this.tab.GetActiveTabIndex() == 0) {
                    this.lblTotSaiAnalitico.Text = "Saída: " + this.labelSai.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    });
                }
                else if (this.tab.GetActiveTabIndex() == 1) {
                    this.lblTotSaiSintetico.Text = "Saída: " + this.labelSai.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    });
                }
            }
        }
    };
    R_Credit.prototype.OnAlteraTipoAnalitico = function () {
        this.optTipoValidadeAnalitico.Visible = this.Filtro.TipoData_Analitico == "Val";
    };
    R_Credit.prototype.OnAlteraTipoSintetico = function () {
        this.optTipoValidadeSintetico.Visible = this.Filtro.TipoData_Sintetico == "Val";
    };
    R_Credit.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        var dataAtual = this.DataServidor();
        this.Filtro.Periodo_Inicial_Analitico = dataAtual;
        this.Filtro.Periodo_Final_Analitico = dataAtual;
        this.Filtro.Periodo_Inicial_Sintetico = dataAtual;
        this.Filtro.Periodo_Final_Sintetico = dataAtual;
        this.txtPeriodoNaoUtilizados.textBoxCalendarioInicio.SetDate(dataAtual);
        this.txtPeriodoNaoUtilizados.textBoxCalendarioFim.SetDate(dataAtual);
        this.Filtro.TipoData_Analitico = "Cad";
        this.Filtro.TipoValidade_Analitico = "DtIn";
        this.Filtro.TipoData_Sintetico = "Cad";
        this.Filtro.TipoValidade_Sintetico = "DtIn";
        this.Filtro.Credito_Analitico = false;
        this.Filtro.Credito_Sintetico = false;
        this.Filtro.Tipo_Analitico = "TD";
        this.Filtro.Tipo_Sintetico = "TD";
        this.gridAnalitico.PreencherGrid(null);
        this.gridSintetico.PreencherGrid(null);
        this.gridNaoUtilizados.PreencherGrid(null);
        this.labelEnt = 0;
        this.labelSai = 0;
        this.LimpaLabelsTot();
        this.RefreshAngular();
    };
    R_Credit.prototype.LimpaLabelsTot = function () {
        this.lblTotEntAnalitico.Text = "Entrada: 0,00";
        this.lblTotSaiAnalitico.Text = "Saída: 0,00";
        this.lblTotEntSintetico.Text = "Entrada: 0,00";
        this.lblTotSaiSintetico.Text = "Saída: 0,00";
    };
    R_Credit.prototype.CellPrepared = function (s, e) {
        if (e.rowType == "data") {
            if (e.data["Entrada_Saida"] == "S") {
                e.cellElement.css("color", "red");
            }
            else if (e.data["Entrada_Saida"] == "E") {
                e.cellElement.css("color", "blue");
            }
        }
    };
    return R_Credit;
}(MouraPageRelacaoAngular));
var r_Credit = new R_Credit();
//# sourceMappingURL=R_Credit.js.map