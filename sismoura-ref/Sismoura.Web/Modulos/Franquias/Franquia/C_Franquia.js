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
var C_Franquia = /** @class */ (function (_super) {
    __extends(C_Franquia, _super);
    function C_Franquia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Franquia.prototype, "fpXML", {
        get: function () {
            return window['fpXML_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Franquia.prototype, "gdvSocios", {
        get: function () {
            return window['gdvSocios_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Franquia.prototype, "grdAnexos", {
        get: function () {
            return window['grdAnexos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Franquia.prototype, "grdAnexosCandidato", {
        get: function () {
            return window['grdAnexosCandidato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Franquia.prototype, "Franquia_Socio", {
        // Lista de Sócios
        get: function () {
            var that = this.GetScope()["Franquia_Socio"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Franquia_Socio"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Franquia.prototype, "Franquia_Socios", {
        get: function () {
            return this.GetScope()["Franquia_Socios"];
        },
        set: function (value) {
            this.GetScope()["Franquia_Socios"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Franquia.prototype, "Franquia_Anexo", {
        //Lista de Anexos
        get: function () {
            var that = this.GetScope()["Franquia_Anexo"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Franquia_Anexo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Franquia.prototype, "Franquia_Anexos", {
        get: function () {
            return this.GetScope()["Franquia_Anexos"];
        },
        set: function (value) {
            this.GetScope()["Franquia_Anexos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Franquia.prototype, "Franquia_Prospeccao_Anexo", {
        //Lista de Anexos de Candidato
        get: function () {
            var that = this.GetScope()["Franquia_Prospeccao_Anexo"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Franquia_Prospeccao_Anexo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Franquia.prototype, "Franquia_Prospeccao_Anexos", {
        get: function () {
            return this.GetScope()["Franquia_Prospeccao_Anexos"];
        },
        set: function (value) {
            this.GetScope()["Franquia_Prospeccao_Anexos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Franquia.prototype, "PathArquivoImportado", {
        //Pasta do Arquivo 
        get: function () {
            if (!this.GetScope()["PathArquivoImportado"]) {
                return "";
            }
            else {
                return this.GetScope()["PathArquivoImportado"];
            }
        },
        set: function (value) {
            this.GetScope()["PathArquivoImportado"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Franquia.prototype, "txtCep", {
        get: function () {
            return window['txtCep_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Franquia.prototype, "txtSocio_Cep", {
        get: function () {
            return window['txtSocio_Cep_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Franquia.prototype, "txtSocio_Cidade", {
        get: function () {
            return window['txtSocio_Cidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Franquia.prototype, "txtCodigoCandidato", {
        get: function () {
            return window['txtCodigoCandidato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Franquia.prototype, "hdnCaminhoSessao", {
        get: function () {
            return $("#hdnCaminhoSessao")[0];
        },
        enumerable: true,
        configurable: true
    });
    C_Franquia.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.fpXML) {
            adicionarEventoMoura(this.fpXML.FileUploadComplete, this.OnFileUploadXMLCompleted, this);
        }
        if (this.gdvSocios) {
            adicionarEventoMoura(this.gdvSocios.Validando, this.OnValidandoSocios, this);
            adicionarEventoMoura(this.gdvSocios.LimpouItem, this.OnLimpouSocios, this);
        }
        if (this.grdAnexos) {
            adicionarEventoMoura(this.grdAnexos.Validando, this.OnValidandoAnexo, this);
            adicionarEventoMoura(this.grdAnexos.LimpouItem, this.OnLimpouAnexo, this);
            adicionarEventoMoura(this.grdAnexos.SelecionouItem, this.OnSelecionouItem, this);
        }
        if (this.txtCep) {
            adicionarEventoMoura(this.txtCep.PesquisouCEP, this.OnConsultarCEP, this);
        }
        if (this.txtSocio_Cep) {
            adicionarEventoMoura(this.txtSocio_Cep.PesquisouCEP, this.OnConsultarCEPSocio, this);
        }
        if (this.txtCodigoCandidato) {
            adicionarEventoMoura(this.txtCodigoCandidato.Procurou, this.OnProcurouCandidato, this);
        }
    };
    C_Franquia.prototype.OnSelecionouItem = function (s, e) {
        if (this.EntityTela.Codigo == undefined) {
            this.EntityTela.Codigo = 0;
        }
        abrirTelaNovaAbaParametros(this.hdnCaminhoSessao.value + "\\" + "Documentos\\Franquia" + "\\F_" + this.EntityTela.Codigo + "\\" + e.item.Nomearquivo, []);
    };
    C_Franquia.prototype.OnValidandoSocios = function (s, e) {
        if (e.item.Nome == undefined || e.item.Nome == null) {
            MostrarMensagemCampoObrigatorio("Nome");
            e.cancelar = true;
            return;
        }
        if (e.item.Percentual_Capital <= 0 || e.item.Percentual_Capital == undefined) {
            MostrarAlerta("O Percentual do Capital deve ser maior que zero");
            e.cancelar = true;
            return;
        }
        if (e.item.Percentual_Capital > 100) {
            MostrarAlerta("O Percentual do Capital não pode ser maior que 100%");
            e.cancelar = true;
            return;
        }
        if (e.item.Valor_Capital == undefined || e.item.ValorCapital <= 0) {
            MostrarAlerta("O valor do Capital deve ser maior que zero");
            e.cancelar = true;
            return;
        }
        if (e.item.Cidade == undefined || e.item.Cidade == null) {
            MostrarAlerta("Informe a cidade");
            e.cancelar = true;
            return;
        }
        if (e.index < 0) {
            e.item.NomeCidade = this.txtSocio_Cidade.GetResultado();
        }
        this.RefreshAngular();
    };
    C_Franquia.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.OnLimpouSocios();
        this.PreencherGradeSocios(Entity);
        this.Franquia_Anexos = Entity.Franquia_Anexos;
        if (Entity.Codigo_Candidato != 0) {
            this.PreencherGradeAnexoCandidato(Entity);
        }
        this.RefreshAngular();
    };
    C_Franquia.prototype.OnProcurouCandidato = function () {
        try {
            var parametros;
            if (this.EntityTela.Codigo_Candidato != null || this.EntityTela.Codigo_Candidato != undefined) {
                parametros = {
                    codCandidato: this.EntityTela.Codigo_Candidato
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("GetCandidatoByCodigo", parametros);
                if (retorno != null) {
                    this.Franquia_Socio.Nome = retorno.Nome;
                    this.Franquia_Socio.Cep = retorno.Cep;
                    this.Franquia_Socio.Endereco = retorno.Loradouro;
                    this.Franquia_Socio.Numero = retorno.Numero;
                    this.Franquia_Socio.Cidade = retorno.Cidade;
                    this.Franquia_Socio.Complemento = retorno.Complemento;
                    this.Franquia_Socio.Ddd_Telefone = retorno.Ddd_Celular;
                    this.Franquia_Socio.Telefone = retorno.Fone_Celular;
                    this.Franquia_Socio.Bairro = retorno.Bairro;
                    this.EntityTela.Banco = retorno.Banco;
                    this.EntityTela.Agencia = retorno.Agencia;
                    this.EntityTela.Conta = retorno.Conta;
                    this.EntityTela.Tipo_Conta = retorno.Tipo;
                    this.EntityTela.Gerente = retorno.Gerente;
                    this.PreencherGradeAnexoCandidato(this.EntityTela);
                    this.RefreshAngular();
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Franquia.prototype.OnDepoisLimpar = function (Entity) {
        this.Franquia_Socios = [];
        this.Franquia_Anexos = [];
        this.Franquia_Prospeccao_Anexos = [];
        this.OnLimpouSocios();
        this.OnLimpouAnexo();
        this.grdAnexos.Grid.PreencherGrid(null);
        this.grdAnexosCandidato.Grid.PreencherGrid(null);
        Entity.Data_Cadastro = this.DataServidor();
    };
    C_Franquia.prototype.OnLimpouSocios = function () {
        this.Franquia_Socio.Nome = "";
        this.Franquia_Socio.Percentual_Capital = 0;
        this.Franquia_Socio.Valor_Capital = 0;
        this.Franquia_Socio.Cep = "";
        this.Franquia_Socio.Endereco = "";
        this.Franquia_Socio.Complemento = "";
        this.Franquia_Socio.Bairro = "";
        this.Franquia_Socio.Numero = 0;
        this.Franquia_Socio.Cidade = 0;
        this.Franquia_Socio.Ddd_Telefone = "";
        this.Franquia_Socio.Telefone = "";
        this.Franquia_Socio.NomeCidade = "";
    };
    C_Franquia.prototype.OnValidandoAnexo = function (s, e) {
        if (e.item.Nomearquivo == "") {
            MostrarAlerta("Informe ao menos um arquivo");
            e.cancelar = true;
            return;
        }
        var itens = this.grdAnexos.Grid.DataSource;
        var x;
        if (!itens) {
            itens = [];
        }
        for (x = 0; x < itens.length; x++) {
            if (itens[x].Nomearquivo == e.item.Nomearquivo) {
                MostrarAlerta("Este arquivo já foi adicionado");
                var parametros;
                parametros = {
                    nome: e.item.Nomearquivo
                };
                var excluir = this.ExecutarFuncaoServerSideSynch("ExcluirArquivoTemporario", parametros);
                this.fpXML.Limpar();
                e.cancelar = true;
                return;
            }
        }
    };
    C_Franquia.prototype.OnLimpouAnexo = function () {
        this.Franquia_Anexo.Tipo = "";
        this.Franquia_Anexo.Nomearquivo = "";
        this.fpXML.Limpar();
    };
    C_Franquia.prototype.OnConsultarCEP = function (s, e) {
        if (e.EncontrouEndereco) {
            var entidade = this.GetScope().Entity;
            entidade.ClienteEntity.PessoaEntity.Bairro = e.Bairro;
            entidade.ClienteEntity.PessoaEntity.Endereco = e.Endereco;
            entidade.ClienteEntity.PessoaEntity.Cidade = e.CidadeCodigo;
            this.GetScope().$applyAsync();
        }
        else {
            this.txtCep.Focus();
        }
    };
    C_Franquia.prototype.OnConsultarCEPSocio = function (s, e) {
        if (e.EncontrouEndereco) {
            this.Franquia_Socio.Bairro = e.Bairro;
            this.Franquia_Socio.Endereco = e.Endereco;
            this.Franquia_Socio.Cidade = e.CidadeCodigo;
            this.GetScope().$applyAsync();
        }
        else {
            this.txtCep.Focus();
        }
    };
    C_Franquia.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Franquia_Socios = this.Franquia_Socios;
        this.EntityTela.Franquia_Anexos = this.Franquia_Anexos;
        return true;
    };
    C_Franquia.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGradeSocios(this.EntityTela);
        this.PreencherGradeAnexo(this.EntityTela);
        this.RefreshAngular();
        if (this.Franquia_Anexos.length > 0) {
            if (this.EntityTela.Codigo != null) {
                var parametros;
                parametros = {
                    codFranquia: this.EntityTela.Codigo
                };
                var moverArquivo = this.ExecutarFuncaoServerSideSynch("CriarPastaPermanente", parametros);
                if (!moverArquivo) {
                    MostrarAlerta("Ocorreu um erro ao mover os arquivos");
                }
            }
        }
        return true;
    };
    C_Franquia.prototype.PreencherGradeSocios = function (Entity) {
        try {
            var parametros;
            var codFranquia = 0;
            if (Entity.Codigo != undefined || Entity.Codigo != 0) {
                codFranquia = Entity.Codigo;
            }
            parametros = {
                codFranquia: codFranquia
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetSocios", parametros);
            this.Franquia_Socios = retorno.Socios;
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Franquia.prototype.PreencherGradeAnexo = function (Entity) {
        try {
            var parametros;
            var codFranquia = 0;
            if (Entity.Codigo != undefined || Entity.Codigo != 0) {
                codFranquia = Entity.Codigo;
            }
            parametros = {
                codFranquia: codFranquia
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetAnexos", parametros);
            this.Franquia_Anexos = retorno;
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Franquia.prototype.PreencherGradeAnexoCandidato = function (Entity) {
        try {
            var parametros;
            parametros = {
                codCandidato: Entity.Codigo_Candidato
            };
            var anexosCandidato = this.ExecutarFuncaoServerSideSynch("GetAnexosCandidato", parametros);
            if (anexosCandidato != null) {
                this.Franquia_Prospeccao_Anexos = anexosCandidato;
                this.RefreshAngular();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Franquia.prototype.OnFileUploadXMLCompleted = function (s, e) {
        try {
            if (this.fpXML && this.fpXML.File) {
                this.PathArquivoImportado = this.PathArquivoImportado + "F_";
                this.PathArquivoImportado = this.fpXML.PathSalvarArquivo.replace("0", "" + (this.EntityTela.Codigo + 0)) + this.fpXML.File.name;
                this.Franquia_Anexo.Franquia = this.EntityTela.Codigo;
                this.Franquia_Anexo.Nomearquivo = this.fpXML.File.name;
                var tipo = this.Franquia_Anexo.Nomearquivo.split(".");
                this.Franquia_Anexo.Tipo = tipo[tipo.length - 1];
                this.Franquia_Anexo.Nomearquivocompleto = this.PathArquivoImportado;
                //this.Franquia_Anexo.Tipo = this.fpXML.File.type;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_Franquia;
}(MouraPageCadastroAngular));
var c_Franquia = new C_Franquia();
//# sourceMappingURL=C_Franquia.js.map