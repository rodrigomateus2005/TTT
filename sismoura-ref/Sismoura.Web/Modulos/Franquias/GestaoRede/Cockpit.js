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
var intervalId = 0;
var Cockpit = /** @class */ (function (_super) {
    __extends(Cockpit, _super);
    function Cockpit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Cockpit.prototype, "TipoFaturamento", {
        get: function () {
            return this.GetScope()['TipoFaturamento'];
        },
        set: function (value) {
            this.GetScope()['TipoFaturamento'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit.prototype, "Empresa", {
        get: function () {
            return this.GetScope()['Empresa'];
        },
        set: function (value) {
            this.GetScope()['Empresa'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit.prototype, "lblValorFaturado", {
        get: function () {
            return window['lblValorFaturado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit.prototype, "lblMarkup", {
        get: function () {
            return window['lblMarkup_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit.prototype, "lblTicket", {
        get: function () {
            return window['lblTicket_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit.prototype, "lblPA", {
        get: function () {
            return window['lblPA_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit.prototype, "cboGrupoFaturamentoIndividual", {
        get: function () {
            return window['cboGrupoFaturamentoIndividual_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit.prototype, "lblValorFaturadoInd", {
        get: function () {
            return window['lblValorFaturadoInd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit.prototype, "lblMarkupInd", {
        get: function () {
            return window['lblMarkupInd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit.prototype, "lblTicketInd", {
        get: function () {
            return window['lblTicketInd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit.prototype, "lblPAInd", {
        get: function () {
            return window['lblPAInd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit.prototype, "callBackPnlTopCincoLinhas", {
        get: function () {
            return window['callBackPnlTopCincoLinhas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit.prototype, "FaturamentoTotal", {
        get: function () {
            if (!this.GetScope()['FaturamentoTotal']) {
                this.GetScope()['FaturamentoTotal'] = {};
            }
            return this.GetScope()['FaturamentoTotal'];
        },
        set: function (value) {
            this.GetScope()['FaturamentoTotal'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit.prototype, "FaturamentoIndividual", {
        get: function () {
            if (!this.GetScope()['FaturamentoIndividual']) {
                this.GetScope()['FaturamentoIndividual'] = {};
            }
            return this.GetScope()['FaturamentoIndividual'];
        },
        set: function (value) {
            this.GetScope()['FaturamentoIndividual'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit.prototype, "FaturamentoLojas", {
        get: function () {
            if (!this.GetScope()['FaturamentoLojas']) {
                this.GetScope()['FaturamentoLojas'] = [];
            }
            return this.GetScope()['FaturamentoLojas'];
        },
        set: function (value) {
            this.GetScope()['FaturamentoLojas'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit.prototype, "pnlFaturamentoLoja", {
        get: function () {
            return window["pnlFaturamentoLoja_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit.prototype, "pnlFaturamentoGrupo", {
        get: function () {
            return window["pnlFaturamentoGrupo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit.prototype, "divPanelTopLinhas", {
        get: function () {
            return $('#pnlTop5linhas_ItemPanel')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit.prototype, "exibirPaineisLoja", {
        get: function () {
            return $('#exibirPaineisLoja')[0];
        },
        enumerable: true,
        configurable: true
    });
    Cockpit.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnCboEmpresaSelectionChanged, this);
        }
        if (this.cboGrupoFaturamentoIndividual) {
            adicionarEventoMoura(this.cboGrupoFaturamentoIndividual.SelectedItemChanged, this.OnCboGrupoIndividualSelectionChanged, this);
        }
    };
    Cockpit.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        var telas = this;
        this.CorrigirLabels();
        var tela = this;
        if (intervalId == 0) {
            intervalId = setInterval(function () {
                tela.PreencherFaturamentoGrupos();
                tela.PreencherFaturamentoTotal();
            }, 60000);
        }
        if (!this.GetScope().PreencherFaturamentoIndividual) {
            this.GetScope().PreencherFaturamentoIndividual = $.proxy(this.PreencherFaturamentoIndividual, this);
            this.GetScope().$watch(function () { return this.EmpresaIndividual; }, this.GetScope().PreencherFaturamentoIndividual);
        }
        this.FaturamentoTotal.ValorFaturado = 0;
        this.FaturamentoTotal.MKP = 0;
        this.FaturamentoTotal.VA = 0;
        this.FaturamentoTotal.PA = 0;
        this.FaturamentoIndividual.ValorFaturado = 0;
        this.FaturamentoIndividual.MKP = 0;
        this.FaturamentoIndividual.VA = 0;
        this.FaturamentoIndividual.PA = 0;
        this.PreencherTodos();
    };
    Cockpit.prototype.CorrigirLabels = function () {
        if (this.lblValorFaturado) {
            this.lblValorFaturado.SetTextLabelControl("1 - Valor Faturado");
        }
        if (this.lblMarkup) {
            this.lblMarkup.SetTextLabelControl("2 - MKP - Markup");
        }
        if (this.lblTicket) {
            this.lblTicket.SetTextLabelControl("3 - VA - Ticket");
        }
        if (this.lblPA) {
            this.lblPA.SetTextLabelControl("4 - PA - Peças A");
        }
        if (this.cboGrupoFaturamentoIndividual) {
            this.cboGrupoFaturamentoIndividual.SetTextLabelControl("Grupo");
        }
        if (this.lblValorFaturadoInd) {
            this.lblValorFaturadoInd.SetTextLabelControl("1 - Valor Faturado");
        }
        if (this.lblMarkupInd) {
            this.lblMarkupInd.SetTextLabelControl("2 - MKP - Markup");
        }
        if (this.lblTicketInd) {
            this.lblTicketInd.SetTextLabelControl("3 - VA - Ticket");
        }
        if (this.lblPAInd) {
            this.lblPAInd.SetTextLabelControl("4 - PA - Peças A");
        }
    };
    Cockpit.prototype.PreencherTodos = function () {
        var _this = this;
        setTimeout(function () {
            _this.PreencherFaturamentoGrupos();
            _this.PreencherFaturamentoTotal();
            _this.PreencherFaturamentoIndividual();
        }, 300);
    };
    Cockpit.prototype.PreencherFaturamentoLojas = function () {
        try {
            var parametros;
            parametros = {
                codEmpresa: this.cboEmpresa.GetValue()
            };
            this.FaturamentoLojas = this.ExecutarFuncaoServerSideSynch("GetFaturamentoLojas", parametros);
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Cockpit.prototype.CarregarTodosGraficos = function (flag) {
        if (flag) {
            this.callBackPnlTopCincoLinhas.PerformCallback('');
        }
    };
    Cockpit.prototype.PreencherFaturamentoTotal = function () {
        try {
            var parametros;
            parametros = {
                grupo: 0
            };
            this.FaturamentoTotal = this.ExecutarFuncaoServerSideSynch("GetFaturamentoTotal", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Cockpit.prototype.PreencherFaturamentoIndividual = function () {
        try {
            var parametros;
            parametros = {
                grupo: CNum(this.cboGrupoFaturamentoIndividual.GetValue())
            };
            this.FaturamentoIndividual = this.ExecutarFuncaoServerSideSynch("GetFaturamentoIndividual", parametros);
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    //Atividade:1107234
    Cockpit.prototype.ValidarGrupoDeEmpresasSelecionado = function () {
        if (this.Empresa <= 0)
            return false;
        return true;
    };
    Cockpit.prototype.OnCboGrupoIndividualSelectionChanged = function (s, e) {
        try {
            this.PreencherFaturamentoIndividual();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Cockpit.prototype.GerarRelacao = function () {
        var _this = this;
        this.callBackPnlTopCincoLinhas.PerformCallback('');
        setTimeout(function () {
            _this.PreencherFaturamentoTotal();
            _this.PreencherFaturamentoGrupos();
        }, 300);
    };
    Cockpit.prototype.OnCboEmpresaSelectionChanged = function (s, e) {
        this.GerarRelacao();
    };
    Cockpit.prototype.PreencherFaturamentoGrupos = function () {
        try {
            var parametros;
            this.FaturamentoLojas = null;
            parametros = {
                codEmpresa: this.cboEmpresa.GetValue()
            };
            this.FaturamentoLojas = this.ExecutarFuncaoServerSideSynch("GetFaturamentoGrupos", parametros);
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return Cockpit;
}(MouraPageAngular));
var cockpit = new Cockpit();
//# sourceMappingURL=Cockpit.js.map