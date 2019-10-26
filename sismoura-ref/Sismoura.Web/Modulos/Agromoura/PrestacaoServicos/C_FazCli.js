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
var C_FazCli = /** @class */ (function (_super) {
    __extends(C_FazCli, _super);
    function C_FazCli() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_FazCli.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FazCli.prototype, "txtNome", {
        get: function () {
            return window['txtNome_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FazCli.prototype, "txtTalhoes", {
        get: function () {
            return window['txtTalhoes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FazCli.prototype, "txtArea", {
        get: function () {
            return window['txtArea_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FazCli.prototype, "txtProprietario", {
        get: function () {
            return window['txtProprietario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FazCli.prototype, "txtCep", {
        get: function () {
            return window['txtCep_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FazCli.prototype, "txtEndereco", {
        get: function () {
            return window['txtEndereco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FazCli.prototype, "txtTelefone", {
        get: function () {
            return window['txtTelefone_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FazCli.prototype, "txtEmail", {
        get: function () {
            return window['txtEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FazCli.prototype, "txtCPF", {
        get: function () {
            return window['txtCPF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FazCli.prototype, "txtGerente", {
        get: function () {
            return window['txtGerente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FazCli.prototype, "txtEndereco_cobranca", {
        get: function () {
            return window['txtEndereco_cobranca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_FazCli.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (!this.GetScope().MudouTipo) {
            this.GetScope().MudouTipo = $.proxy(this.MudouTipo, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Tipo; }, this.GetScope().MudouTipo);
        }
        if (this.txtCep) {
            adicionarEventoMoura(this.txtCep.PesquisouCEP, this.OnConsultarCEP, this);
        }
        this.txtCPF.IsCPF = true;
        if (this.txtCPF) {
            adicionarEventoMoura(this.txtCPF.LostFocus, this.consultarCPF, this);
        }
    };
    C_FazCli.prototype.OnConsultarCEP = function (s, e) {
        if (e.EncontrouEndereco) {
            var entidade = this.GetScope().Entity;
            entidade.Endereco = e.Endereco;
            entidade.Municipio = e.CidadeCodigo;
            this.GetScope().$applyAsync();
        }
        else {
            this.txtCep.Focus();
        }
    };
    C_FazCli.prototype.consultarCPF = function () {
        var retorno;
        var parametros;
        if (!this.txtCPF.GetText() || this.txtCPF.GetText().trim() == "") {
            return;
        }
        parametros = {
            cpfCliente: this.txtCPF.GetText()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("ValidarCPF", parametros);
        if (!retorno || retorno == '') {
            return;
        }
        if (retorno.toLowerCase().substring(0, 4) == 'erro' && retorno.indexOf("|") > 0) {
            MsgBoxJS(retorno.split("|")[1], MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(this.OnClicouOKMsgBoxCPFInvalido, this));
        }
    };
    C_FazCli.prototype.OnClicouOpcaoMsgBoxCPF = function (resultado) {
        if (resultado.Resultado == MsgBoxResult.Yes) {
            var codigo = ("" + resultado.Argument).CNum();
            if (codigo > 0) {
                var entidade = this.GetScope().Entity;
                entidade.Cpf = codigo.toString();
                this.GetScope().$applyAsync();
            }
        }
    };
    C_FazCli.prototype.OnClicouOKMsgBoxCPFInvalido = function (resultado) {
        this.txtCPF.Textbox.focus();
        var entidade = this.GetScope().Entity;
        entidade.Cpf = '';
        this.GetScope().$applyAsync();
    };
    C_FazCli.prototype.MudouTipo = function (newValue, oldValue) {
        if (String.IsNullOrWhiteSpace(newValue)) {
            newValue = "F";
        }
        if (newValue == "F") {
            this.txtCPF.IsCPF = true;
        }
        else {
            this.txtCPF.IsCPF = false;
        }
    };
    C_FazCli.prototype.OnDepoisSetEntidade = function (Entidade) {
        this.MudouTipo(Entidade['Tipo'], "");
    };
    C_FazCli.prototype.OnDepoisLimpar = function (Entity) {
        Entity.Tipo = "F";
    };
    return C_FazCli;
}(MouraPageCadastroAngular));
var c_FazCli = new C_FazCli();
//# sourceMappingURL=C_FazCli.js.map