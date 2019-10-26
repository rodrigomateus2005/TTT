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
var C_ConCfg = /** @class */ (function (_super) {
    __extends(C_ConCfg, _super);
    function C_ConCfg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ConCfg.prototype, "txtContaContabilCheque_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaContabilCheque_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCfg.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCfg.prototype, "txtContaContabilCheque", {
        get: function () {
            return window['txtContaContabilCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCfg.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCfg.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ConCfg.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtContaContabilCheque) {
            adicionarEventoMoura(this.txtContaContabilCheque.AntesAbrirProcura, this.OnContaContabilChequeAntesAbrirProcura, this);
        }
        if (this.txtContaContabilCheque) {
            adicionarEventoMoura(this.txtContaContabilCheque.PesquisandoContabil, this.OnContaContabilChequePesquisando, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.onEmpresaChange, this);
        }
        if (this.txtContaContabilCheque_hdnEmpresaContabil != undefined) {
            this.txtContaContabilCheque_hdnEmpresaContabil.value = this.cboEmpresa.GetValue();
        }
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnClickBotaoLinha, this);
        }
        this.PreencherEmpresaContabil();
    };
    C_ConCfg.prototype.OnClickBotaoLinha = function (s, e) {
        try {
            this.PreencherEntidade(e.data.Codigo);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConCfg.prototype.PreencherEmpresaContabil = function () {
        if (this.txtContaContabilCheque_hdnEmpresaContabil != undefined) {
            this.txtContaContabilCheque_hdnEmpresaContabil.value = this.cboEmpresa.GetValue();
        }
        if (this.txtContaContabilCheque) {
            adicionarEventoMoura(this.txtContaContabilCheque.AntesAbrirProcura, this.OnContaContabilChequeAntesAbrirProcura, this);
        }
        if (this.txtContaContabilCheque) {
            adicionarEventoMoura(this.txtContaContabilCheque.PesquisandoContabil, this.OnContaContabilChequePesquisando, this);
        }
    };
    C_ConCfg.prototype.onEmpresaChange = function () {
        this.PreencherEmpresaContabil();
        var parametros;
        var empresa = this.cboEmpresa.GetValue();
        parametros = {
            codEmpresa: empresa
        };
        var cad = this.ExecutarFuncaoServerSideSynch("GetByEmpresa", parametros);
        if (cad > 0) {
            this.PreencherEntidade(cad);
        }
        else {
            this.txtCodigo.Limpar();
            this.txtContaContabilCheque.Limpar();
            this.cboEmpresa.SetValue(empresa);
        }
    };
    C_ConCfg.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.onEmpresaChange();
        this.GetCadastrados();
    };
    C_ConCfg.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.GetCadastrados();
        return true;
    };
    C_ConCfg.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.GetCadastrados();
        return true;
    };
    C_ConCfg.prototype.GetCadastrados = function () {
        var parametros;
        parametros = {};
        var cad = this.ExecutarFuncaoServerSideSynch("GetRegistrosCadastrados", parametros);
        this.Grid.PreencherGrid(cad);
    };
    C_ConCfg.prototype.OnContaContabilChequeAntesAbrirProcura = function (s, ev) {
        this.txtContaContabilCheque.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    C_ConCfg.prototype.OnContaContabilChequePesquisando = function (s, ev) {
        this.txtContaContabilCheque.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        var parametroSintetica;
        parametros = {
            codigoContaContabil: this.txtContaContabilCheque.TextBoxAdicional.value.CNum(),
            empresa: this.cboEmpresa.GetValue().toString()
        };
        parametroReduzido = {
            reduzido: this.txtContaContabilCheque.TextBoxAdicional.value.CNum(),
        };
        parametroSintetica = {
            codigoContaContabil: this.txtContaContabilCheque.TextBoxAdicional.value.CNum(),
        };
        if (this.txtContaContabilCheque.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Débito não pertence a empresa selecionada!');
                    this.txtContaContabilCheque.Limpar();
                    this.txtContaContabilCheque.Focus();
                }
            }
            else if (this.ExecutarFuncaoServerSideSynch("IsContaSintetica", parametroSintetica)) {
                ev.Cancelar = true;
                MostrarAlerta('A conta contábil deve ser do tipo Analítica!');
                this.txtContaContabilCheque.Limpar();
                this.txtContaContabilCheque.Focus();
            }
        }
    };
    return C_ConCfg;
}(MouraPageCadastroAngular));
var c_ConCfg = new C_ConCfg();
//# sourceMappingURL=C_ConCfg.js.map