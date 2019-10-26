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
var C_PCCont_OLD = /** @class */ (function (_super) {
    __extends(C_PCCont_OLD, _super);
    function C_PCCont_OLD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_PCCont_OLD.prototype, "txtCodigo_hdnEmpresaContabil", {
        get: function () {
            return $("#txtCodigo_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont_OLD.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont_OLD.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont_OLD.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont_OLD.prototype, "txtCodigoContabil", {
        get: function () {
            return window['txtCodigoContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont_OLD.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont_OLD.prototype, "cboOrigem", {
        get: function () {
            return window['cboOrigem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont_OLD.prototype, "cboModalidade", {
        get: function () {
            return window['cboModalidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont_OLD.prototype, "cboNaturezaSped", {
        get: function () {
            return window['cboNaturezaSped_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont_OLD.prototype, "txtPlanoContasSped", {
        get: function () {
            return window['txtPlanoContasSped_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont_OLD.prototype, "ckbInativo", {
        get: function () {
            return window['ckbInativo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_PCCont_OLD.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.AntesAbrirProcura, this.OnCodigoAntesAbrirProcura, this);
        }
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.PesquisandoContabil, this.OnCodigoPesquisando, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.PreencherEmpresaContabil, this);
        }
        this.PreencherEmpresaContabil();
        if (this.txtCodigo_hdnEmpresaContabil != undefined) {
            this.txtCodigo_hdnEmpresaContabil.value = this.cboEmpresa.GetValue();
        }
    };
    C_PCCont_OLD.prototype.PreencherEmpresaContabil = function () {
        if (this.txtCodigo_hdnEmpresaContabil != undefined) {
            this.txtCodigo_hdnEmpresaContabil.value = this.cboEmpresa.GetValue();
        }
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.AntesAbrirProcura, this.OnCodigoAntesAbrirProcura, this);
        }
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.PesquisandoContabil, this.OnCodigoPesquisando, this);
        }
    };
    C_PCCont_OLD.prototype.OnCodigoAntesAbrirProcura = function (s, ev) {
        this.txtCodigo.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    C_PCCont_OLD.prototype.OnCodigoPesquisando = function (s, ev) {
        this.txtCodigo.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
        var retorno = {};
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        parametros = {
            codigoContaContabil: this.txtCodigo.TextBoxAdicional.value.CNum(),
            empresa: this.cboEmpresa.GetValue()
        };
        parametroReduzido = {
            reduzido: this.txtCodigo.TextBoxAdicional.value.CNum(),
        };
        if (this.txtCodigo.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (retorno == null) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Contábil não pertence a empresa selecionada!');
                    this.txtCodigo.Limpar();
                    this.txtCodigo.Focus();
                }
            }
            else {
                this.txtDescricao.SetText(retorno.Descricao);
                this.txtCodigoContabil.SetText(retorno.Codigocontabil);
                this.cboTipo.SetValue(retorno.Tipo);
                this.cboOrigem.SetValue(retorno.OrigemEnum);
                this.cboModalidade.SetValue(retorno.ModalidadeEnum);
                this.cboNaturezaSped.SetValue(retorno.NaturezaSpedEnum);
                if (retorno.PlanoContasSped != undefined) {
                    this.txtPlanoContasSped.Procurar(retorno.PlanoContasSped);
                }
                this.ckbInativo.Checked = retorno.Inativo;
            }
        }
    };
    return C_PCCont_OLD;
}(MouraPage));
var c_PCCont_OLD = new C_PCCont_OLD();
//# sourceMappingURL=C_PCCont_OLD.js.map