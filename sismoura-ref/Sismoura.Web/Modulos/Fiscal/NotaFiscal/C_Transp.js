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
var C_Transp = /** @class */ (function (_super) {
    __extends(C_Transp, _super);
    function C_Transp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Transp.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "grdFornecedoresDuplicados", {
        get: function () {
            return window['grdFornecedoresDuplicados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "mdFornecedoresDuplicados", {
        get: function () {
            return window['mdFornecedoresDuplicados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "txtCep", {
        get: function () {
            return window['txtCep_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "txtEndereco", {
        get: function () {
            return window['txtEndereco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "txtBairro", {
        get: function () {
            return window['txtBairro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "txtNumero", {
        get: function () {
            return window['txtNumero_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "txtCidade", {
        get: function () {
            return window['txtCidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "lblCidade", {
        get: function () {
            return window['lblCidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "txtCGC", {
        get: function () {
            return window['txtCGC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "txtInsc", {
        get: function () {
            return window['txtInsc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "txtNome", {
        get: function () {
            return window['txtNome_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "optTipo", {
        get: function () {
            return window['optTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "chkPadrao", {
        get: function () {
            return window['chkPadrao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "chkDelivery", {
        get: function () {
            return window['chkDelivery_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "txtFone", {
        get: function () {
            return window['txtFone_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "txtFax", {
        get: function () {
            return window['txtFax_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "txtEmail", {
        get: function () {
            return window['txtEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "cboContribuinteIcms", {
        get: function () {
            return window['cboContribuinteIcms_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "txtObs", {
        get: function () {
            return window['txtObs_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "txtPlaca", {
        get: function () {
            return window['txtPlaca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "txtRntc", {
        get: function () {
            return window['txtRntc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "cboUf", {
        get: function () {
            return window['cboUf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "Transportadora", {
        get: function () {
            var that = this.GetScope()["Transportadora"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Transportadora"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "Transportadoras", {
        get: function () {
            return this.GetScope()["Transportadoras"];
        },
        set: function (value) {
            this.GetScope()["Transportadoras"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Transp.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Transp.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtCGC) {
            adicionarEventoMoura(this.txtCGC.LostFocus, this.OntxtCGCChange, this);
        }
        if (this.txtCep) {
            adicionarEventoMoura(this.txtCep.PesquisouCEP, this.OnConsultarCEP, this);
        }
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.Validando, this.OnValidando, this);
            adicionarEventoMoura(this.Grid.LimpouItem, this.LimparServico, this);
        }
    };
    C_Transp.prototype.OnValidando = function (s, e) {
        var x;
        var itens = this.Grid.Grid.DataSource;
        if (!itens) {
            itens = [];
        }
        for (x = 0; x < itens.length; x++) {
            if (itens[x].Placa == e.item.Placa) {
                MostrarAlerta("Esta Placa já foi inserida para este serviço");
                e.cancelar = true;
                this.txtPlaca.Focus();
                return;
            }
        }
        if (e.item.Placa == "") {
            MostrarAlerta("Informe a placa!");
            e.cancelar = true;
            this.txtPlaca.Focus();
            return;
        }
        else
            this.RefreshAngular();
    };
    C_Transp.prototype.LimparServico = function () {
        this.Transportadora.Placa = "";
        this.Transportadora.Uf = "";
        this.Transportadora.Rntc = "";
        this.RefreshAngular();
    };
    C_Transp.prototype.OnGridSelecionouItem = function (s, e) {
        this.mdFornecedoresDuplicados.Hide();
        this.txtCodigo.Procurar(e.data['Transportadora']);
    };
    C_Transp.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Transportadora_PlacaEntity = this.Transportadoras;
        return true;
    };
    C_Transp.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.LimparCampos();
        this.cboContribuinteIcms.SetSelectedIndex("1");
        this.optTipo.SetValue("J");
        return true;
    };
    C_Transp.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        this.cboContribuinteIcms.SetSelectedIndex("1");
        this.optTipo.SetValue("J");
        if (this.GetScope()) {
            if (!this.GetScope().MudouTipo) {
                this.GetScope().MudouTipo = $.proxy(this.MudouTipo, this);
                this.GetScope().$watch(function (scope) { return scope.Entity.PessoaEntity.Tipo; }, this.GetScope().MudouTipo);
            }
            else {
                this.MudouTipo(this.GetScope().Entity.PessoaEntity.Tipo, this.GetScope().Entity.PessoaEntity.Tipo);
            }
        }
    };
    C_Transp.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.Transportadoras = [];
        this.LimparServico();
        Entity.PessoaEntity = {};
        Entity.PessoaEntity.Contribuinte_Icms = "1";
        Entity.PessoaEntity.Tipo = "J";
        Entity.PessoaEntity.Padrao = false;
        //Entity.Delivery = false;
        this.txtCGC.Obrigatorio = false;
        if (this.ParametrosTela.CGC) {
            Entity.PessoaEntity.Cpf = this.ParametrosTela.CGC;
        }
        if (this.ParametrosTela.Nome) {
            Entity.PessoaEntity.Nome = replaceAll(this.ParametrosTela.Nome, "+", " ");
        }
        if (this.ParametrosTela.endereco) {
            Entity.PessoaEntity.Endereco_Nome = this.ParametrosTela.endereco;
        }
        if (this.ParametrosTela.fone_numero) {
            Entity.PessoaEntity.Fone_Numero = this.ParametrosTela.fone_numero;
        }
        if (this.ParametrosTela.fax_numero) {
            Entity.PessoaEntity.Fax_Numero = this.ParametrosTela.fax_numero;
        }
        if (this.ParametrosTela.bairro) {
            Entity.PessoaEntity.Bairro = this.ParametrosTela.bairro;
        }
        if (this.ParametrosTela.cep) {
            Entity.PessoaEntity.Cep = this.ParametrosTela.cep;
        }
        if (this.ParametrosTela.cidadeibge) {
            var cidade;
            var parametros;
            parametros = {
                codCidade: this.ParametrosTela.cidadeibge,
                nomeCidade: this.ParametrosTela.cidade
            };
            if (String.IsNullOrWhiteSpace(parametros.nomeCidade)) {
                parametros.nomeCidade = "";
            }
            cidade = this.ExecutarFuncaoServerSideSynch("getCidadeByNumIbge", parametros);
            if (cidade) {
                Entity.PessoaEntity.Cidade = cidade.Codigo;
            }
        }
        if (this.ParametrosTela.Insc) {
            Entity.PessoaEntity.Rg = this.ParametrosTela.Insc;
        }
        if (this.ParametrosTela.Obs) {
            Entity.PessoaEntity.Obs = this.ParametrosTela.Obs;
        }
        if (this.ParametrosTela.Tipo) {
            Entity.PessoaEntity.Tipo = this.ParametrosTela.Tipo;
        }
        if (this.ParametrosTela.ContribuinteIcms) {
            Entity.PessoaEntity.Contribuinte_Icms = this.ParametrosTela.ContribuinteIcms;
        }
        this.RefreshAngular();
    };
    C_Transp.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        this.LimparServico();
        var parametros;
        parametros = {
            codTransp: Entidade.Pessoa
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetByTranspPlaca", parametros);
        this.Transportadoras = retorno.Transportadoras;
        if (!Entidade.PessoaEntity)
            Entidade.PessoaEntity = {};
        this.MudouTipo(Entidade.PessoaEntity['Tipo'], "");
        var cidade = this.txtCidade.GetByIdProcura(Entidade.PessoaEntity['Cidade']);
        var nomeCidade = "";
        if (cidade) {
            nomeCidade = cidade.Descricao;
        }
        if (!Entidade.PessoaEntity.Campos_Valor) {
            Entidade.PessoaEntity.Campos_Valor = [];
        }
        this.RefreshAngular();
    };
    C_Transp.prototype.OnDepoisSetEntidade = function (Entidade) {
        if (!Entidade.PessoaEntity)
            Entidade.PessoaEntity = {};
        this.MudouTipo(Entidade.PessoaEntity['Tipo'], "");
        var cidade = this.txtCidade.GetByIdProcura(Entidade.PessoaEntity['Cidade']);
        var nomeCidade = "";
        if (cidade) {
            nomeCidade = cidade.Descricao;
        }
        if (!Entidade.PessoaEntity.Campos_Valor) {
            Entidade.PessoaEntity.Campos_Valor = [];
        }
    };
    C_Transp.prototype.MudouTipo = function (newValue, oldValue) {
        if (String.IsNullOrWhiteSpace(newValue)) {
            newValue = "F";
        }
        var entity = this.EntityTela;
        var contribuinte;
        if (newValue == "F") {
            this.txtCGC.IsCPF = true;
            this.MudarLabelComponente(this.txtCGC, "CPF");
            this.MudarLabelComponente(this.txtInsc, "R.G.");
            contribuinte = "9";
        }
        else {
            this.txtCGC.IsCPF = false;
            this.MudarLabelComponente(this.txtCGC, "CNPJ");
            this.MudarLabelComponente(this.txtInsc, "Inscrição Estadual");
            contribuinte = "1";
        }
        if (entity && entity.PessoaEntity) {
            if (entity.Pessoa == null) {
                entity.PessoaEntity.Contribuinte_Icms = contribuinte;
            }
        }
        this.cboContribuinteIcms.SetValue(entity.PessoaEntity.Contribuinte_Icms);
        entity.PessoaEntity.Cpf = this.txtCGC.GetText();
        this.RefreshAngular();
    };
    C_Transp.prototype.LimparCampos = function () {
        this.txtCGC.Limpar();
        this.txtNome.Limpar();
        this.txtCidade.Limpar();
        this.txtCep.Limpar();
        this.txtEndereco.Limpar();
        this.txtBairro.Limpar();
        this.txtNumero.Limpar();
        this.cboContribuinteIcms.LimparSelecao();
        this.chkPadrao.Checked = false;
        this.chkDelivery.Checked = false;
        this.txtInsc.Limpar();
        this.txtFone.TextBoxDDD.textContent = "";
        this.txtFone.TextBoxTelefone.textContent = "";
        this.txtFax.TextBoxDDD.textContent = "";
        this.txtFax.TextBoxTelefone.textContent = "";
        this.txtEmail.Limpar();
        this.txtObs.Limpar();
        this.Transportadoras = [];
        this.txtCodigo.Limpar();
    };
    C_Transp.prototype.MudarLabelComponente = function (componente, novoTexto) {
        if (!componente) {
            return;
        }
        if (componente.Obrigatorio || componente.ObrigatorioUsuario) {
            novoTexto = "* " + novoTexto;
        }
        componente.SetTextLabelControl(novoTexto);
    };
    C_Transp.prototype.OnConsultarCEP = function (s, e) {
        if (e.EncontrouEndereco) {
            var entity = this.GetScope().Entity;
            entity.PessoaEntity.Cep = this.txtCep.GetText();
            entity.PessoaEntity.Endereco_Nome = e.Endereco;
            entity.PessoaEntity.Bairro = e.Bairro;
            entity.PessoaEntity.Cidade = e.CidadeCodigo;
            this.GetScope().$applyAsync();
        }
        else {
            if (this.txtCep)
                this.txtCep.Focus();
        }
    };
    C_Transp.prototype.OntxtCGCChange = function () {
        var campo;
        var retorno = false;
        var parametros;
        campo = this.txtCGC.GetText();
        if (String.IsNullOrWhiteSpace(campo)) {
            return;
        }
        parametros = {
            campo: campo,
            codigoAtual: ("" + this.GetScope().Entity.Pessoa).CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("ValidarCNPJ", parametros);
        if (retorno) {
            MsgBoxJS("Há Transportadoras cadastradas com esse CPF/CNPJ, deseja visualiza - los ?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRepostaVisualizarTransportadoraCPF, this));
        }
    };
    C_Transp.prototype.OnRepostaVisualizarTransportadoraCPF = function (result) {
        var retorno;
        var parametros;
        var campo;
        var transportadorasDuplicadas;
        campo = this.txtCGC.GetText();
        if (result.Resultado == MsgBoxResult.No) {
            return;
        }
        parametros = {
            campo: campo
        };
        transportadorasDuplicadas = this.ExecutarFuncaoServerSideSynch("GetTransportadorasByCNPJ", parametros);
        this.txtCodigo.Procurar(transportadorasDuplicadas.Pessoa[0].Pessoa);
    };
    C_Transp.prototype.GetDadosPessoa = function (codigo) {
        var retorno = null;
        var parametros;
        if (codigo <= 0) {
            return retorno;
        }
        parametros = {
            codPessoa: codigo
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetDadosPessoa", parametros);
        return retorno;
    };
    return C_Transp;
}(MouraPageCadastroAngular));
var c_Transp = new C_Transp();
//# sourceMappingURL=C_Transp.js.map