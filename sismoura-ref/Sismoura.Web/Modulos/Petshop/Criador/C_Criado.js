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
var C_Criado = /** @class */ (function (_super) {
    __extends(C_Criado, _super);
    function C_Criado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Criado.prototype, "btnImportar", {
        get: function () {
            return window['btnImportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Criado.prototype, "mdFornecedor", {
        get: function () {
            return window['mdFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Criado.prototype, "txtCep", {
        get: function () {
            return window['txtCep_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Criado.prototype, "txtCPF", {
        get: function () {
            return window['txtCPF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Criado.prototype, "txtNome", {
        get: function () {
            return window['txtNome_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Criado.prototype, "txtRG", {
        get: function () {
            return window['txtRG_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Criado.prototype, "txtFantasia", {
        get: function () {
            return window['txtFantasia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Criado.prototype, "txtApelido", {
        get: function () {
            return window['txtApelido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Criado.prototype, "txtFornecedor", {
        get: function () {
            return window['txtFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Criado.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Criado.prototype, "mdCriadoresDuplicados", {
        get: function () {
            return window['mdCriadoresDuplicados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Criado.prototype, "grdCriadoresDuplicados", {
        get: function () {
            return window['grdCriadoresDuplicados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Criado.prototype, "lstTipo", {
        get: function () {
            return window["lstTipo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    C_Criado.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnImportar) {
            adicionarEventoMoura(this.btnImportar.Click, this.OnClickImportar, this);
        }
        if (this.txtFornecedor) {
            adicionarEventoMoura(this.txtFornecedor.Procurou, this.OnProcurouFornecedor, this);
        }
        if (this.txtCep) {
            adicionarEventoMoura(this.txtCep.PesquisouCEP, this.OnConsultarCEP, this);
        }
        if (this.txtCPF) {
            adicionarEventoMoura(this.txtCPF.LostFocus, this.OnTextBoxCpfChange, this);
        }
        if (this.grdCriadoresDuplicados) {
            adicionarEventoMoura(this.grdCriadoresDuplicados.SelecionouLinha, this.SelecionarCriador, this);
        }
    };
    C_Criado.prototype.SelecionarCriador = function (s, e) {
        this.mdCriadoresDuplicados.Hide();
        this.txtCodigo.Procurar(e.data['Criador']);
    };
    C_Criado.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        if (!Entidade.PessoaEntity)
            Entidade.PessoaEntity = {};
        this.MudouTipo(Entidade.PessoaEntity['Tipo'], "");
    };
    C_Criado.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var Entidade = this.GetScope().Entity;
        var msg;
        if (this.EntityTela.PessoaEntity.Tipo == "F") {
            msg = "CPF já cadastrado. Deseja continuar?";
        }
        else {
            msg = "CNPJ já cadastrado. Deseja continuar?";
        }
        var pessoaCpf = "";
        if (this.EntityTela.PessoaEntity.Cpf != null || this.EntityTela.PessoaEntity.Cpf != undefined) {
            pessoaCpf = this.EntityTela.PessoaEntity.Cpf;
            try {
                var parametros;
                var codCriador = Entidade.PessoaEntity.Codigo;
                if (!codCriador) {
                    codCriador = 0;
                }
                parametros = {
                    pessoaCpf: pessoaCpf,
                    codCriador: codCriador
                };
                var verificaCpf = this.ExecutarFuncaoServerSideSynch("VerificaCPFPessoa", parametros);
                if (verificaCpf) {
                    MsgBoxJS(msg, MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespondeuMensagemExistente, this));
                    return false;
                }
            }
            catch (ex) {
                LogarException(ex);
            }
        }
        return true;
    };
    C_Criado.prototype.OnRespondeuMensagemExistente = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.GravarAngular();
        }
        else {
            return;
        }
    };
    C_Criado.prototype.OnProcurouFornecedor = function () {
        var fornecedor = this.GetDadosFornecedor(this.txtFornecedor.GetText().CNum());
        if (fornecedor) {
            this.Limpar();
            var entidade = this.GetScope().Entity;
            entidade.PessoaEntity = fornecedor.PessoaEntity;
            this.txtCodigo.PermitirInexistente = true;
            this.SetEntity(entidade);
            this.txtCodigo.PermitirInexistente = false;
            this.RefreshAngular();
        }
        this.mdFornecedor.Hide();
        return;
    };
    C_Criado.prototype.GetDadosFornecedor = function (codigo) {
        var retorno = null;
        var parametros;
        if (codigo <= 0) {
            return retorno;
        }
        parametros = {
            codFornecedor: codigo
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetDadosFornecedor", parametros);
        return retorno;
    };
    C_Criado.prototype.OnConsultarCEP = function (s, e) {
        if (e.EncontrouEndereco) {
            var entidade = this.GetScope().Entity;
            entidade.PessoaEntity.Bairro = e.Bairro;
            entidade.PessoaEntity.Endereco_Nome = e.Endereco;
            entidade.PessoaEntity.Cidade = e.CidadeCodigo;
            this.GetScope().$applyAsync();
        }
        else {
            this.txtCep.Focus();
        }
    };
    C_Criado.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (this.GetScope()) {
            if (!this.GetScope().MudouTipo) {
                this.GetScope().MudouTipo = $.proxy(this.MudouTipo, this);
                this.GetScope().$watch(function (scope) { return scope.Entity.PessoaEntity.Tipo; }, this.GetScope().MudouTipo);
            }
            //Comentar_Atualizacao_Microchip
            //if (this.ParametrosURL.Codigo) {
            //    this.GetScope().Entity.Pessoa = this.ParametrosURL.Codigo;
            //}
            //FIM
            this.GetScope().$applyAsync();
        }
    };
    C_Criado.prototype.MudouTipo = function (newValue, oldValue) {
        var entity = this.GetScope().Entity;
        var contribuinte;
        if (newValue == "F") {
            this.txtCPF.IsCPF = true;
            this.MudarLabelComponente(this.txtCPF, "CPF");
            this.MudarLabelComponente(this.txtNome, "Nome");
            this.MudarLabelComponente(this.txtRG, "RG");
            this.txtApelido.Visible = true;
            this.txtFantasia.Visible = false;
        }
        else {
            this.txtCPF.IsCPF = false;
            this.MudarLabelComponente(this.txtCPF, "CNPJ");
            this.MudarLabelComponente(this.txtNome, "Razão Social");
            this.MudarLabelComponente(this.txtRG, "Inscrição Estadual");
            this.txtApelido.Visible = false;
            this.txtFantasia.Visible = true;
        }
        this.GetScope().$applyAsync();
    };
    C_Criado.prototype.MudarLabelComponente = function (componente, novoTexto) {
        if (!componente) {
            return;
        }
        if (componente.Obrigatorio || componente.ObrigatorioUsuario) {
            novoTexto = "* " + novoTexto;
        }
        componente.SetTextLabelControl(novoTexto);
    };
    C_Criado.prototype.OnDepoisLimpar = function (Entity) {
        Entity.PessoaEntity = {};
        Entity.PessoaEntity.Tipo = "J";
        this.GetScope().$applyAsync();
    };
    C_Criado.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        return true;
    };
    C_Criado.prototype.OnClickImportar = function (s, e) {
        e.processOnServer = false;
        this.txtFornecedor.Limpar();
        this.mdFornecedor.Show();
        return false;
    };
    C_Criado.prototype.OnTextBoxCpfChange = function () {
        var campo;
        var retorno = false;
        var parametros;
        campo = this.EntityTela.PessoaEntity.Cpf;
        if (campo == "") {
            return;
        }
        if (this.EntityTela.PessoaEntity.Codigo == null || this.EntityTela.PessoaEntity.Codigo == undefined) {
            return;
        }
        parametros = {
            campo: campo,
            codigoAtual: ("" + this.GetScope().Entity.Pessoa).CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("ValidarCNPJ", parametros);
        if (retorno) {
            MsgBoxJS("Há Criadores cadastrados com esse CPF/CNPJ, deseja visualiza - los ?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRepostaVisualizarCriadorCPF, this));
        }
    };
    C_Criado.prototype.OnRepostaVisualizarCriadorCPF = function (result) {
        var retorno;
        var parametros;
        var campo;
        var criadoresDuplicados;
        campo = this.EntityTela.PessoaEntity.Cpf;
        if (result.Resultado == MsgBoxResult.No) {
            return;
        }
        parametros = {
            campo: campo
        };
        criadoresDuplicados = this.ExecutarFuncaoServerSideSynch("GetCriadoresByCNPJ", parametros);
        this.grdCriadoresDuplicados.PreencherGrid(null);
        if (criadoresDuplicados) {
            this.grdCriadoresDuplicados.PreencherGrid(criadoresDuplicados);
        }
        this.mdCriadoresDuplicados.Show();
    };
    C_Criado.prototype.OnDepoisSetEntidade = function (Entidade) {
        if (!Entidade.PessoaEntity)
            Entidade.PessoaEntity = {};
        this.MudouTipo(Entidade.PessoaEntity['Tipo'], "");
    };
    return C_Criado;
}(MouraPageCadastroAngular));
var c_Criado = new C_Criado();
//# sourceMappingURL=C_Criado.js.map