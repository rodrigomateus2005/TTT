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
var C_CliIme = /** @class */ (function (_super) {
    __extends(C_CliIme, _super);
    function C_CliIme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CliIme.prototype, "Pessoa", {
        get: function () {
            if (!this.GetScope()['Pessoa']) {
                this.GetScope()['Pessoa'] = {};
            }
            return this.GetScope()['Pessoa'];
        },
        set: function (value) {
            this.GetScope()['Pessoa'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliIme.prototype, "Empresa", {
        get: function () {
            if (!this.GetScope()['Empresa']) {
                this.GetScope()['Empresa'] = {};
            }
            return this.GetScope()['Empresa'];
        },
        set: function (value) {
            this.GetScope()['Empresa'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliIme.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliIme.prototype, "txtValorMens", {
        get: function () {
            return window['txtValorMens_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliIme.prototype, "txtObs", {
        get: function () {
            return window['txtObs_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliIme.prototype, "btnIntegrar", {
        get: function () {
            return window['btnIntegrar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliIme.prototype, "btnCRM", {
        get: function () {
            return window['btnCRM_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliIme.prototype, "btnNovo", {
        get: function () {
            return window['btnNovo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliIme.prototype, "cboSituCad", {
        get: function () {
            return window['cboSituCad_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliIme.prototype, "txtCnpj", {
        // Campos Obrigatórios
        get: function () {
            return window['txtCnpj_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliIme.prototype, "txtFantasia", {
        get: function () {
            return window['txtFantasia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliIme.prototype, "txtEndereco", {
        get: function () {
            return window['txtEndereco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliIme.prototype, "txtNumero", {
        get: function () {
            return window['txtNumero_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliIme.prototype, "txtBairro", {
        get: function () {
            return window['txtBairro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliIme.prototype, "txtMunicipio", {
        get: function () {
            return window['txtMunicipio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliIme.prototype, "txtUf", {
        get: function () {
            return window['txtUf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliIme.prototype, "txtTel", {
        get: function () {
            return window['txtTel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliIme.prototype, "txtContato", {
        get: function () {
            return window['txtContato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliIme.prototype, "txtEmail", {
        get: function () {
            return window['txtEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    //
    C_CliIme.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.Procurou, this.PreencherPessoa, this);
        }
        if (this.btnCRM) {
            adicionarEventoMoura(this.btnCRM.Click, this.abrirLink, this);
        }
        if (this.btnIntegrar) {
            adicionarEventoMoura(this.btnIntegrar.Click, this.onClickIntegrar, this);
        }
        if (this.btnNovo) {
            adicionarEventoMoura(this.btnNovo.Click, this.onClickNovo, this);
        }
    };
    C_CliIme.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().VerificaCombo) {
            this.GetScope().VerificaCombo = $.proxy(this.VerificaCombo, this);
            var that = this;
            this.GetScope().$watch(function () { if (that.Pessoa != null) {
                return that.Pessoa.status;
            } }, this.GetScope().VerificaCombo);
        }
        this.LimparCampos();
    };
    C_CliIme.prototype.PreencherPessoa = function () {
        if (this.txtCodigo.GetResultado() == "" || this.txtCodigo.GetText() == "") {
            this.LimparCampos();
            return;
        }
        var parametros = {
            codPessoa: this.Pessoa.Codigo,
            codEmpresa: ValoresSismoura.EmpresaPadraoUsuario
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("PreencherPessoa", parametros);
        this.Pessoa.Cpf = retorno.Pessoa.Cpf;
        this.Pessoa.Nome_Fantasia = retorno.Pessoa.Nome_Fantasia;
        this.Pessoa.Endereco_Nome = retorno.Pessoa.Endereco_Nome;
        this.Pessoa.Numero = retorno.Pessoa.Numero;
        this.Pessoa.Obs = retorno.Pessoa.Obs;
        this.Pessoa.Bairro = retorno.Pessoa.Bairro;
        this.Pessoa.Cidade = retorno.Cidade.Cidade;
        this.Pessoa.UF = retorno.Cidade.Estado;
        this.Pessoa.Fone_Numero = retorno.Pessoa.Fone_Numero;
        this.Pessoa.Contato = retorno.Pessoa.Contato_Cliente;
        this.Pessoa.Email = retorno.Pessoa.Email;
        this.Pessoa.Valor_Implantacao = 0;
        this.Pessoa.Valor_Mensalidade = 0;
        this.Pessoa.Regime_Tributario = retorno.Pessoa.Regime_Tributario;
    };
    C_CliIme.prototype.onClickNovo = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
    };
    C_CliIme.prototype.LimparCampos = function () {
        this.Pessoa = {};
        this.Pessoa.status = "N";
        this.RefreshAngular();
    };
    C_CliIme.prototype.VerificaCombo = function () {
        if (this.Pessoa.status != "N") {
            this.txtObs.Obrigatorio = true;
        }
        else {
            this.txtObs.Obrigatorio = false;
        }
    };
    C_CliIme.prototype.abrirLink = function (s, e) {
        e.processOnServer = false;
        window.open("http://consultatributos.com.br:8080/crm", "_blank");
    };
    C_CliIme.prototype.onClickIntegrar = function (s, e) {
        e.processOnServer = false;
        try {
            if (!this.ValidarCamposObrigatorios()) {
                if (!this.Pessoa.Regime_Tributario) {
                    MostrarAlerta("O Regime Tributário deve informar um dos valores: S=ME(Simples Nacional), R = Lucro Real ou P= Lucro Presumido.");
                }
                if (!this.Pessoa.Tipo_Atividade) {
                    MostrarAlerta("Informe o Tipo de Atividade");
                }
                return;
            }
            if (!this.validaCamposCliente())
                return;
            if (this.Pessoa) {
                var parametros = {
                    entidade: JSON.stringify(this.Pessoa),
                    codUsuario: ValoresSismoura.UsuarioLogado,
                    tela: ValoresSismoura.NomeTela
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("EnviarCliente", parametros);
                if (retorno) {
                    MostrarMensagem("Cadastro Realizado com Sucesso!");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    /*
        true - se todos os campos estão preenchidos
        false - se ao menos um campo estiver vazio ('')
    */
    C_CliIme.prototype.validaCamposCliente = function () {
        var camposObrigatorios = [
            this.txtCnpj,
            this.txtFantasia,
            this.txtEndereco,
            this.txtNumero,
            this.txtBairro,
            this.txtMunicipio,
            this.txtUf,
            this.txtTel,
            this.txtContato,
            this.txtEmail,
        ];
        for (var _i = 0, camposObrigatorios_1 = camposObrigatorios; _i < camposObrigatorios_1.length; _i++) {
            var campo = camposObrigatorios_1[_i];
            if (campo.GetText().trim() === '') {
                MostrarAlerta("Preencha o campo corretamente: " + campo.LabelInicial);
                return false;
            }
        }
        return true;
    };
    return C_CliIme;
}(MouraPageAngular));
var c_CliIme = new C_CliIme;
//# sourceMappingURL=C_CliIme.js.map