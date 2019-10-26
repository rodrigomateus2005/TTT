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
var C_ConCar = /** @class */ (function (_super) {
    __extends(C_ConCar, _super);
    function C_ConCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ConCar.prototype, "txtContaContabilCartao_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaContabilCartao_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCar.prototype, "txtContaContabilTaxa_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaContabilTaxa_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCar.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCar.prototype, "txtContaContabilTaxa", {
        get: function () {
            return window['txtContaContabilTaxa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCar.prototype, "txtContaContabilCartao", {
        get: function () {
            return window['txtContaContabilCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ConCar.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtContaContabilCartao) {
            adicionarEventoMoura(this.txtContaContabilCartao.AntesAbrirProcura, this.OnContaContabilCartaoAntesAbrirProcura, this);
        }
        if (this.txtContaContabilCartao) {
            adicionarEventoMoura(this.txtContaContabilCartao.PesquisandoContabil, this.OnContaContabilCartaoPesquisando, this);
        }
        if (this.txtContaContabilTaxa) {
            adicionarEventoMoura(this.txtContaContabilTaxa.AntesAbrirProcura, this.OnContaContabilTaxaAntesAbrirProcura, this);
        }
        if (this.txtContaContabilTaxa) {
            adicionarEventoMoura(this.txtContaContabilTaxa.PesquisandoContabil, this.OnContaContabilTaxaPesquisando, this);
        }
        this.PreencherEmpresaContabil();
    };
    C_ConCar.prototype.PreencherEmpresaContabil = function () {
        if (this.txtContaContabilCartao_hdnEmpresaContabil != undefined) {
            this.txtContaContabilCartao_hdnEmpresaContabil.value = this.cboEmpresa.GetValue();
        }
        if (this.txtContaContabilTaxa_hdnEmpresaContabil != undefined) {
            this.txtContaContabilTaxa_hdnEmpresaContabil.value = this.cboEmpresa.GetValue();
        }
        if (this.txtContaContabilCartao) {
            adicionarEventoMoura(this.txtContaContabilCartao.AntesAbrirProcura, this.OnContaContabilCartaoAntesAbrirProcura, this);
        }
        if (this.txtContaContabilCartao) {
            adicionarEventoMoura(this.txtContaContabilCartao.PesquisandoContabil, this.OnContaContabilCartaoPesquisando, this);
        }
        if (this.txtContaContabilTaxa) {
            adicionarEventoMoura(this.txtContaContabilTaxa.AntesAbrirProcura, this.OnContaContabilTaxaAntesAbrirProcura, this);
        }
        if (this.txtContaContabilTaxa) {
            adicionarEventoMoura(this.txtContaContabilTaxa.PesquisandoContabil, this.OnContaContabilTaxaPesquisando, this);
        }
    };
    C_ConCar.prototype.OnContaContabilCartaoAntesAbrirProcura = function (s, ev) {
        this.txtContaContabilCartao.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    C_ConCar.prototype.OnContaContabilCartaoPesquisando = function (s, ev) {
        this.txtContaContabilCartao.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        parametros = {
            codigoContaContabil: this.txtContaContabilCartao.TextBoxAdicional.value.CNum(),
            empresa: this.cboEmpresa.GetValue()
        };
        parametroReduzido = {
            reduzido: this.txtContaContabilCartao.TextBoxAdicional.value.CNum(),
        };
        if (this.txtContaContabilCartao.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Contábil não pertence a empresa selecionada!');
                    this.txtContaContabilCartao.Limpar();
                    this.txtContaContabilCartao.Focus();
                }
            }
        }
    };
    C_ConCar.prototype.OnContaContabilTaxaAntesAbrirProcura = function (s, ev) {
        this.txtContaContabilTaxa.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    C_ConCar.prototype.OnContaContabilTaxaPesquisando = function (s, ev) {
        this.txtContaContabilTaxa.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        parametros = {
            codigoContaContabil: this.txtContaContabilTaxa.TextBoxAdicional.value.CNum(),
            empresa: this.cboEmpresa.GetValue()
        };
        parametroReduzido = {
            reduzido: this.txtContaContabilTaxa.TextBoxAdicional.value.CNum(),
        };
        if (this.txtContaContabilTaxa.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Contábil não pertence a empresa selecionada!');
                    this.txtContaContabilTaxa.Limpar();
                    this.txtContaContabilTaxa.Focus();
                }
            }
        }
    };
    return C_ConCar;
}(MouraPage));
var c_ConCar = new C_ConCar();
//# sourceMappingURL=C_ConCar.js.map