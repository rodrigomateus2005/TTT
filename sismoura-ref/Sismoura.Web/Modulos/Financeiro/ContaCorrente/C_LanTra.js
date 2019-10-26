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
var C_LanTra = /** @class */ (function (_super) {
    __extends(C_LanTra, _super);
    function C_LanTra() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_LanTra.prototype, "txtTipoLancamentoContabilOrigem", {
        get: function () {
            return window['txtTipoLancamentoContabilOrigem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanTra.prototype, "txtTipoLancamentoContabilOrigem_hdnEmpresaContabil", {
        get: function () {
            return $("#txtTipoLancamentoContabilOrigem_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanTra.prototype, "txtTipoLancamentoContabilDestino", {
        get: function () {
            return window['txtTipoLancamentoContabilDestino_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanTra.prototype, "txtTipoLancamentoContabilDestino_hdnEmpresaContabil", {
        get: function () {
            return $("#txtTipoLancamentoContabilDestino_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanTra.prototype, "cboContaCorrenteOrigem", {
        get: function () {
            return window['cboContaCorrenteOrigem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanTra.prototype, "cboContaCorrenteDestino", {
        get: function () {
            return window['cboContaCorrenteDestino_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_LanTra.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboContaCorrenteDestino) {
            adicionarEventoDevExpress(this.cboContaCorrenteOrigem.Combo.SelectedIndexChanged, this.MudouEmpresaOrigem, this);
        }
        if (this.cboContaCorrenteDestino) {
            adicionarEventoDevExpress(this.cboContaCorrenteOrigem.Combo.SelectedIndexChanged, this.MudouEmpresaDestino, this);
        }
        if (this.txtTipoLancamentoContabilOrigem) {
            adicionarEventoMoura(this.txtTipoLancamentoContabilOrigem.Procurou, this.OntxtTipoLancamentoContabilOrigemPesquisou, this);
        }
        if (this.txtTipoLancamentoContabilDestino) {
            adicionarEventoMoura(this.txtTipoLancamentoContabilDestino.Procurou, this.txtTipoLancamentoContabilDestinoPesquisou, this);
        }
    };
    C_LanTra.prototype.MudouEmpresaOrigem = function () {
        this.txtTipoLancamentoContabilOrigem.Limpar();
        this.txtTipoLancamentoContabilOrigem.LimparParametros();
        this.txtTipoLancamentoContabilOrigem.AddParametro("TipoConfiguracaoContabil", "LS");
        this.txtTipoLancamentoContabilOrigem.AddParametro("codEmpresa", "" + this.cboContaCorrenteOrigem.GetEmpresa());
        this.PreencherEmpresaContabil(this.cboContaCorrenteOrigem.GetEmpresa());
    };
    C_LanTra.prototype.MudouEmpresaDestino = function () {
        this.txtTipoLancamentoContabilDestino.Limpar();
        this.txtTipoLancamentoContabilDestino.LimparParametros();
        this.txtTipoLancamentoContabilDestino.AddParametro("TipoConfiguracaoContabil", "LE");
        this.txtTipoLancamentoContabilDestino.AddParametro("codEmpresa", "" + this.cboContaCorrenteDestino.GetEmpresa());
        this.PreencherEmpresaContabil(this.cboContaCorrenteDestino.GetEmpresa());
    };
    C_LanTra.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherEmpresaContabil(ValoresSismoura.EmpresaPadraoUsuario);
    };
    C_LanTra.prototype.PreencherEmpresaContabil = function (codEmpresa) {
        if (this.txtTipoLancamentoContabilDestino_hdnEmpresaContabil != undefined) {
            this.txtTipoLancamentoContabilDestino_hdnEmpresaContabil.value = codEmpresa;
        }
        if (this.txtTipoLancamentoContabilOrigem_hdnEmpresaContabil != undefined) {
            this.txtTipoLancamentoContabilOrigem_hdnEmpresaContabil.value = codEmpresa;
        }
    };
    C_LanTra.prototype.OntxtTipoLancamentoContabilOrigemPesquisou = function () {
        try {
            var parametros;
            parametros = {
                configuracaoLancamento: this.txtTipoLancamentoContabilOrigem.GetText().CNum(),
                Tipo: "Origem"
            };
            var retorno = "" + this.ExecutarFuncaoServerSideSynch("VerificarTipoLancamento", parametros);
            if (retorno != "") {
                MostrarAlerta(retorno);
                this.txtTipoLancamentoContabilOrigem.Limpar();
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_LanTra.prototype.txtTipoLancamentoContabilDestinoPesquisou = function () {
        try {
            var parametros;
            parametros = {
                configuracaoLancamento: this.txtTipoLancamentoContabilDestino.GetText().CNum(),
                Tipo: "Destino"
            };
            var retorno = "" + this.ExecutarFuncaoServerSideSynch("VerificarTipoLancamento", parametros);
            if (retorno != "") {
                MostrarAlerta(retorno);
                this.txtTipoLancamentoContabilDestino.Limpar();
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_LanTra;
}(MouraPage));
var c_LanTra = new C_LanTra();
//# sourceMappingURL=C_LanTra.js.map