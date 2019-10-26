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
var Cockpit2 = /** @class */ (function (_super) {
    __extends(Cockpit2, _super);
    function Cockpit2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Cockpit2.prototype, "EmpresaIndividual", {
        get: function () {
            if (!this.GetScope()['EmpresaIndividual']) {
                this.GetScope()['EmpresaIndividual'] = ValoresSismoura.EmpresaPadraoUsuario;
            }
            return this.GetScope()['EmpresaIndividual'];
        },
        set: function (value) {
            this.GetScope()['EmpresaIndividual'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit2.prototype, "Empresa", {
        get: function () {
            if (!this.GetScope()['Empresa']) {
                this.GetScope()['Empresa'] = ValoresSismoura.EmpresaPadraoUsuario;
            }
            return this.GetScope()['Empresa'];
        },
        set: function (value) {
            this.GetScope()['Empresa'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit2.prototype, "lblValorFaturado", {
        get: function () {
            return window['lblValorFaturado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit2.prototype, "lblMarkup", {
        get: function () {
            return window['lblMarkup_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit2.prototype, "lblTicket", {
        get: function () {
            return window['lblTicket_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit2.prototype, "lblPA", {
        get: function () {
            return window['lblPA_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit2.prototype, "cboEmpresaFaturamentoIndividual", {
        get: function () {
            return window['cboEmpresaFaturamentoIndividual_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit2.prototype, "lblValorFaturadoInd", {
        get: function () {
            return window['lblValorFaturadoInd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit2.prototype, "lblMarkupInd", {
        get: function () {
            return window['lblMarkupInd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit2.prototype, "lblTicketInd", {
        get: function () {
            return window['lblTicketInd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit2.prototype, "lblPAInd", {
        get: function () {
            return window['lblPAInd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit2.prototype, "callBackPnlTop5PA", {
        get: function () {
            return window['callBackPnlTop5PA_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit2.prototype, "callBackPnlTop5Markup", {
        get: function () {
            return window['callBackPnlTop5Markup_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit2.prototype, "callBackPnlTop5ProdutosVendidos", {
        get: function () {
            return window['callBackPnlTop5ProdutosVendidos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit2.prototype, "callBackPnlTop5TicketMedio", {
        get: function () {
            return window['callBackPnlTop5TicketMedio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cockpit2.prototype, "FaturamentoTotal", {
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
    Object.defineProperty(Cockpit2.prototype, "FaturamentoIndividual", {
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
    Object.defineProperty(Cockpit2.prototype, "FaturamentoLojas", {
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
    Object.defineProperty(Cockpit2.prototype, "hdnEmpresa", {
        get: function () {
            return $('#hdnEmpresa')[0];
        },
        enumerable: true,
        configurable: true
    });
    Cockpit2.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    Cockpit2.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.Empresa = this.hdnEmpresa.value.CNum();
        if (this.Empresa <= 0) {
            this.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        }
        this.CorrigirLabels();
        var tela = this;
        if (intervalId == 0) {
            intervalId = setInterval(function () {
                tela.PreencherTodos();
            }, 60000);
        }
        if (!this.GetScope().MudouEmpresa) {
            this.GetScope().MudouEmpresa = $.proxy(this.MudouEmpresa, this);
            this.GetScope().$watch(function () { return tela.Empresa; }, this.GetScope().MudouEmpresa);
        }
        if (!this.GetScope().PreencherFaturamentoIndividual) {
            this.GetScope().PreencherFaturamentoIndividual = $.proxy(this.PreencherFaturamentoIndividual, this);
            this.GetScope().$watch(function () { return tela.EmpresaIndividual; }, this.GetScope().PreencherFaturamentoIndividual);
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
    Cockpit2.prototype.MudouEmpresa = function () {
        this.hdnEmpresa.value = this.Empresa.toString();
    };
    Cockpit2.prototype.CorrigirLabels = function () {
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
        if (this.cboEmpresaFaturamentoIndividual) {
            this.cboEmpresaFaturamentoIndividual.SetTextLabelControl("Empresa");
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
    Cockpit2.prototype.PreencherTodos = function () {
        this.PreencherFaturamentoLojas();
        this.PreencherFaturamentoTotal();
        this.PreencherFaturamentoIndividual();
    };
    Cockpit2.prototype.PreencherFaturamentoLojas = function () {
        try {
            var parametros;
            parametros = {
                codEmpresa: this.Empresa
            };
            this.FaturamentoLojas = this.ExecutarFuncaoServerSideSynch("GetFaturamentoLojas", parametros);
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Cockpit2.prototype.PreencherFaturamentoTotal = function () {
        try {
            var parametros;
            parametros = {
                codEmpresa: this.Empresa
            };
            this.FaturamentoTotal = this.ExecutarFuncaoServerSideSynch("GetFaturamentoTotal", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Cockpit2.prototype.PreencherFaturamentoIndividual = function () {
        try {
            var parametros;
            parametros = {
                empresa: this.EmpresaIndividual,
                codEmpresa: this.Empresa
            };
            this.FaturamentoIndividual = this.ExecutarFuncaoServerSideSynch("GetFaturamentoIndividual", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return Cockpit2;
}(MouraPageAngular));
var cockpit2 = new Cockpit2();
//# sourceMappingURL=Cockpit2.js.map