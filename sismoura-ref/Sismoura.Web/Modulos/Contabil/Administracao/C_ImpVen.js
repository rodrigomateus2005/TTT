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
var C_ImpVen = /** @class */ (function (_super) {
    __extends(C_ImpVen, _super);
    function C_ImpVen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ImpVen.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpVen.prototype, "txtContaCredito", {
        get: function () {
            return window['txtContaCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpVen.prototype, "txtContaDebito", {
        get: function () {
            return window['txtContaDebito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpVen.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpVen.prototype, "rdnForma", {
        get: function () {
            return window['rdnForma_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpVen.prototype, "cboImposto", {
        get: function () {
            return window['cboImposto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpVen.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ImpVen.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.AntesAbrirProcura, this.OntxtCodigoAntesAbrirProcura, this);
        }
        if (this.txtContaCredito) {
            adicionarEventoMoura(this.txtContaCredito.AntesAbrirProcura, this.OntxtContaCreditoAntesAbrirProcura, this);
        }
        if (this.txtContaDebito) {
            adicionarEventoMoura(this.txtContaDebito.AntesAbrirProcura, this.OntxtContaDebitoAntesAbrirProcura, this);
        }
        if (this.cboImposto) {
            adicionarEventoMoura(this.cboImposto.SelectedItemChanged, this.cboImpostoSelectedItemChanged, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.GetCadastrados, this);
        }
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnClickBotaoLinha, this);
        }
    };
    C_ImpVen.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.GetCadastrados();
    };
    C_ImpVen.prototype.OnClickBotaoLinha = function (s, e) {
        try {
            this.PreencherEntidade(e.data.Codigo);
            this.cboEmpresa.SetValue(e.data.Empresa);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ImpVen.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.GetCadastrados();
        return true;
    };
    C_ImpVen.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.cboEmpresa.Disabled = false;
        Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.RefreshAngular();
        this.GetCadastrados();
        return true;
    };
    C_ImpVen.prototype.OnDepoisBuscarExistente = function (Entity) {
        try {
            _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
            if (Entity) {
                this.cboEmpresa.Disabled = true;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ImpVen.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.GetCadastrados();
        return true;
    };
    C_ImpVen.prototype.GetCadastrados = function () {
        var parametros;
        this.RefreshAngular();
        parametros = {
            empresa: this.cboEmpresa.GetValue()
        };
        var cad = this.ExecutarFuncaoServerSideSynch("GetRegistrosCadastrados", parametros);
        this.Grid.PreencherGrid(cad);
    };
    C_ImpVen.prototype.cboImpostoSelectedItemChanged = function () {
        this.rdnForma.SetEnabledByIndex(false, 0);
        this.rdnForma.SetEnabledByIndex(false, 1);
        if (this.cboImposto.GetValue() == "IRPJ" || this.cboImposto.GetValue() == "CSLL") {
            this.EntityTela.Forma_Escrituracao = "M";
            this.rdnForma.SetValue("M");
            this.rdnForma.SetEnabledByIndex(true, 0);
            this.rdnForma.SetEnabledByIndex(true, 1);
        }
    };
    C_ImpVen.prototype.OntxtContaDebitoAntesAbrirProcura = function (s, ev) {
        this.txtContaDebito.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
    };
    C_ImpVen.prototype.OntxtContaCreditoAntesAbrirProcura = function (s, ev) {
        this.txtContaCredito.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
    };
    C_ImpVen.prototype.OntxtCodigoAntesAbrirProcura = function (s, ev) {
        this.txtCodigo.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
    };
    return C_ImpVen;
}(MouraPageCadastroAngular));
var c_ImpVen = new C_ImpVen();
//# sourceMappingURL=C_ImpVen.js.map