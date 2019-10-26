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
var C_Repre = /** @class */ (function (_super) {
    __extends(C_Repre, _super);
    function C_Repre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Repre.prototype, "txtCep", {
        get: function () {
            return window['txtCep_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Repre.prototype, "txtCPF", {
        get: function () {
            return window['txtCPF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Repre.prototype, "txtRG", {
        get: function () {
            return window['txtRG_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Repre.prototype, "txtFantasia", {
        get: function () {
            return window['txtFantasia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Repre.prototype, "btnVeiculo", {
        get: function () {
            return window['btnVeiculo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Repre.prototype, "lblDataCadastro", {
        get: function () {
            return window['lblDataCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Repre.prototype, "lblDataAlteracao", {
        get: function () {
            return window['lblDataAlteracao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Repre.prototype, "txtFone1", {
        get: function () {
            return window['txtFone1_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Repre.prototype, "txtFone2", {
        get: function () {
            return window['txtFone2_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Repre.prototype, "txtFone_Trabalho", {
        get: function () {
            return window['txtFone_Trabalho_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Repre.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtCep) {
            adicionarEventoMoura(this.txtCep.PesquisouCEP, this.OnConsultarCEP, this);
        }
        if (this.btnVeiculo) {
            adicionarEventoMoura(this.btnVeiculo.Click, this.OnClickVeiculo, this);
        }
    };
    C_Repre.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (this.GetScope()) {
            if (!this.GetScope().MudouTipo) {
                this.GetScope().MudouTipo = $.proxy(this.MudouTipo, this);
                this.GetScope().$watch(function (scope) { return scope.Entity.Tipo; }, this.GetScope().MudouTipo);
            }
            this.GetScope().$applyAsync();
        }
        this.VerificarConfiguracoesVeiculo();
    };
    C_Repre.prototype.OnDepoisLimpar = function (Entidade) {
        Entidade.Tipo = "F";
        this.btnVeiculo.SetEnabled(false);
        this.lblDataCadastro.Text = this.DataServidor().FormataDataHora();
        Entidade.Data_Cadastro = null;
        Entidade.Data_Alteracao = null;
        this.lblDataAlteracao.Text = "";
        this.PreencherCidadeEmpresa(Entidade);
        this.VerificarConfiguracaoTelefone();
        this.RefreshAngular();
    };
    C_Repre.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.AtualizarData(this.EntityTela);
        return true;
    };
    C_Repre.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        return true;
    };
    C_Repre.prototype.MudouTipo = function (newValue, oldValue) {
        var entity = this.GetScope().Entity;
        var contribuinte;
        if (newValue == "F") {
            this.txtCPF.IsCPF = true;
            this.MudarLabelComponente(this.txtCPF, "CPF");
            this.MudarLabelComponente(this.txtFantasia, "Apelido");
            this.MudarLabelComponente(this.txtRG, "R.G.");
        }
        else {
            this.txtCPF.IsCPF = false;
            this.MudarLabelComponente(this.txtCPF, "CNPJ");
            this.MudarLabelComponente(this.txtFantasia, "Fantasia");
            this.MudarLabelComponente(this.txtRG, "Inscrição Estadual");
        }
        this.GetScope().$applyAsync();
    };
    C_Repre.prototype.MudarLabelComponente = function (componente, novoTexto) {
        if (!componente) {
            return;
        }
        if (componente.Obrigatorio || componente.ObrigatorioUsuario) {
            novoTexto = "* " + novoTexto;
        }
        componente.SetTextLabelControl(novoTexto);
    };
    C_Repre.prototype.OnConsultarCEP = function (s, e) {
        if (e.EncontrouEndereco) {
            var entidade = this.GetScope().Entity;
            entidade.Bairro = e.Bairro;
            entidade.Endereco = e.Endereco;
            entidade.Cidade = e.CidadeCodigo;
            this.GetScope().$applyAsync();
        }
        else {
            this.txtCep.Focus();
        }
    };
    C_Repre.prototype.OnDepoisSetEntidade = function (Entidade) {
        if (!Entidade)
            Entidade = {};
        this.MudouTipo(Entidade['Tipo'], "");
    };
    C_Repre.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        if (!Entidade)
            Entidade = {};
        this.MudouTipo(Entidade['Tipo'], "");
        this.AtualizarData(Entidade);
        if (Entidade.Codigo > 0) {
            this.btnVeiculo.SetEnabled(true);
        }
    };
    C_Repre.prototype.OnClickVeiculo = function (s, e) {
        e.processOnServer = false;
        var entidade = this.GetScope().Entity;
        var parametros = [];
        parametros.push("CodRepresentante", entidade.Codigo);
        abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroVeiculo), parametros);
    };
    C_Repre.prototype.AtualizarData = function (Entidade) {
        var dataAlteracao = Entidade.Data_Alteracao;
        var dataCadastro = Entidade.Data_Cadastro;
        if (Entidade.Data_Cadastro == null || Entidade.Data_Cadastro == undefined) {
            Entidade.Data_Cadastro = this.DataServidor();
            this.lblDataCadastro.Text = Entidade.Data_Cadastro.FormataDataHora();
        }
        else {
            this.lblDataCadastro.Text = Entidade.Data_Cadastro.ToDate().FormataDataHora();
        }
        if (Entidade.Codigo > 0) {
            Entidade.Data_Alteracao = this.DataServidor();
            this.lblDataAlteracao.Text = Entidade.Data_Alteracao.FormataDataHora();
        }
        else {
            this.lblDataAlteracao.Text = "";
        }
    };
    C_Repre.prototype.PreencherCidadeEmpresa = function (Entidade) {
        var parametros;
        parametros = {
            codEmpresa: ValoresSismoura.EmpresaPadraoUsuario
        };
        var empresa = this.ExecutarFuncaoServerSideSynch("GetEmpresaByCodigo", parametros);
        if (empresa != null) {
            Entidade.Cidade = empresa.Cidade;
        }
    };
    C_Repre.prototype.VerificarConfiguracoesVeiculo = function () {
        try {
            var parametros;
            parametros = {};
            var verificaConfiguracao = this.ExecutarFuncaoServerSideSynch("VerificaConfiguracoesVeiculo", parametros);
            if (verificaConfiguracao) {
                this.btnVeiculo.Visible = true;
            }
            else {
                this.btnVeiculo.Visible = false;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Repre.prototype.VerificarConfiguracaoTelefone = function () {
        try {
            var parametros;
            parametros = {};
            var verificaConfiguracao = this.ExecutarFuncaoServerSideSynch("VerificaConfiguracaoTelefone", parametros);
            if (verificaConfiguracao) {
                this.txtFone1.iniciarMascara("(99)9999-9999");
                this.txtFone2.iniciarMascara("(99)9999-9999");
                this.txtFone_Trabalho.iniciarMascara("(99)9999-9999");
            }
            else {
                this.txtFone1.SetText("");
                this.txtFone2.SetText("");
                this.txtFone_Trabalho.SetText("");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_Repre;
}(MouraPageCadastroAngular));
var c_Repre = new C_Repre();
//# sourceMappingURL=C_Repre.js.map