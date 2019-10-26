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
var C_LanCon_OLD = /** @class */ (function (_super) {
    __extends(C_LanCon_OLD, _super);
    function C_LanCon_OLD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_LanCon_OLD.prototype, "txtHistorico", {
        get: function () {
            return window['txtHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon_OLD.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon_OLD.prototype, "cboEmpresa_comboBox", {
        get: function () {
            return window['cboListaPreco_comboBox'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon_OLD.prototype, "txtContaDebito_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaDebito_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon_OLD.prototype, "txtContaCredito_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaCredito_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon_OLD.prototype, "txtContaDebito", {
        get: function () {
            return window['txtContaDebito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon_OLD.prototype, "txtContaCredito", {
        get: function () {
            return window['txtContaCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanCon_OLD.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_LanCon_OLD.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.txtHistorico.Procurou, this.OnTxtHistoricoProcurou, this);
        if (this.txtContaCredito) {
            adicionarEventoMoura(this.txtContaCredito.AntesAbrirProcura, this.OnContaContabilCreditoAntesAbrirProcura, this);
        }
        if (this.txtContaCredito) {
            adicionarEventoMoura(this.txtContaCredito.PesquisandoContabil, this.OnContaContabilCreditoPesquisando, this);
        }
        if (this.txtContaDebito) {
            adicionarEventoMoura(this.txtContaDebito.AntesAbrirProcura, this.OnContaContabilDebitoAntesAbrirProcura, this);
        }
        if (this.txtContaDebito) {
            adicionarEventoMoura(this.txtContaDebito.PesquisandoContabil, this.OnContaContabilDebitoPesquisando, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.PreencherEmpresaContabil(), this);
        }
        this.PreencherEmpresaContabil();
    };
    C_LanCon_OLD.prototype.PreencherEmpresaContabil = function () {
        if (this.txtContaDebito_hdnEmpresaContabil != undefined) {
            this.txtContaDebito_hdnEmpresaContabil.value = this.cboEmpresa.GetValue();
        }
        if (this.txtContaCredito_hdnEmpresaContabil != undefined) {
            this.txtContaCredito_hdnEmpresaContabil.value = this.cboEmpresa.GetValue();
        }
        if (this.txtContaDebito) {
            adicionarEventoMoura(this.txtContaDebito.AntesAbrirProcura, this.OnContaContabilDebitoAntesAbrirProcura, this);
        }
        if (this.txtContaDebito) {
            adicionarEventoMoura(this.txtContaDebito.PesquisandoContabil, this.OnContaContabilDebitoPesquisando, this);
        }
        if (this.txtContaCredito) {
            adicionarEventoMoura(this.txtContaCredito.AntesAbrirProcura, this.OnContaContabilCreditoAntesAbrirProcura, this);
        }
        if (this.txtContaCredito) {
            adicionarEventoMoura(this.txtContaCredito.PesquisandoContabil, this.OnContaContabilCreditoPesquisando, this);
        }
    };
    C_LanCon_OLD.prototype.OnContaContabilCreditoAntesAbrirProcura = function (s, ev) {
        this.txtContaCredito.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    C_LanCon_OLD.prototype.OnContaContabilCreditoPesquisando = function (s, ev) {
        this.txtContaCredito.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        var parametroSintetica;
        parametros = {
            codigoContaContabil: this.txtContaCredito.TextBoxAdicional.value.CNum(),
            empresa: this.cboEmpresa.GetValue()
        };
        parametroReduzido = {
            reduzido: this.txtContaCredito.TextBoxAdicional.value.CNum(),
        };
        parametroSintetica = {
            codigoContaContabil: this.txtContaCredito.TextBoxAdicional.value.CNum(),
        };
        if (this.txtContaCredito.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Crédito não pertence a empresa selecionada!');
                    this.txtContaCredito.Limpar();
                    this.txtContaCredito.Focus();
                }
            }
            else if (this.ExecutarFuncaoServerSideSynch("IsContaSintetica", parametroSintetica)) {
                ev.Cancelar = true;
                MostrarAlerta('A conta contábil deve ser do tipo Analítica!');
                this.txtContaCredito.Limpar();
                this.txtContaCredito.Focus();
            }
        }
    };
    C_LanCon_OLD.prototype.OnContaContabilDebitoAntesAbrirProcura = function (s, ev) {
        this.txtContaDebito.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    C_LanCon_OLD.prototype.OnContaContabilDebitoPesquisando = function (s, ev) {
        this.txtContaDebito.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        var parametroSintetica;
        parametros = {
            codigoContaContabil: this.txtContaDebito.TextBoxAdicional.value.CNum(),
            empresa: this.cboEmpresa.GetValue()
        };
        parametroReduzido = {
            reduzido: this.txtContaDebito.TextBoxAdicional.value.CNum(),
        };
        parametroSintetica = {
            codigoContaContabil: this.txtContaDebito.TextBoxAdicional.value.CNum(),
        };
        if (this.txtContaDebito.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Débito não pertence a empresa selecionada!');
                    this.txtContaDebito.Limpar();
                    this.txtContaDebito.Focus();
                }
            }
            else if (this.ExecutarFuncaoServerSideSynch("IsContaSintetica", parametroSintetica)) {
                ev.Cancelar = true;
                MostrarAlerta('A conta contábil deve ser do tipo Analítica!');
                this.txtContaDebito.Limpar();
                this.txtContaDebito.Focus();
            }
        }
    };
    C_LanCon_OLD.prototype.OnTxtHistoricoProcurou = function (s, e) {
        if (this.txtHistorico.GetText().CNum() > 0 && String.IsNullOrWhiteSpace(this.txtDescricao.GetText())) {
            this.txtDescricao.SetText(this.txtHistorico.GetResultado());
        }
    };
    return C_LanCon_OLD;
}(MouraPage));
var c_LanCon_OLD = new C_LanCon_OLD();
//# sourceMappingURL=C_LanCon_OLD.js.map