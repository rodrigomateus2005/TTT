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
var C_Prospeccao = /** @class */ (function (_super) {
    __extends(C_Prospeccao, _super);
    function C_Prospeccao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Prospeccao.prototype, "lblArquivoDownload", {
        //get fileUpload(): MouraFileUpload {
        //    return window['fileUpload_Object'];
        //}
        //get lblNomeArquivo(): MouraLabel {
        //    return window['lblNomeArquivo_Object'];
        //}
        get: function () {
            return window['lblArquivoDownload_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Prospeccao.prototype, "fpXML", {
        get: function () {
            return window['fpXML_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Prospeccao.prototype, "accExperiencia", {
        get: function () {
            return window['accExperiencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Prospeccao.prototype, "PathArquivoImportado", {
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
    Object.defineProperty(C_Prospeccao.prototype, "GridDependente", {
        get: function () {
            return window['GridDependente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Prospeccao.prototype, "GridEscolaridade", {
        get: function () {
            return window['GridEscolaridade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Prospeccao.prototype, "gridBens", {
        get: function () {
            return window['gridBens_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Prospeccao.prototype, "grdAnexos", {
        get: function () {
            return window['grdAnexos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Prospeccao.prototype, "txtCep", {
        get: function () {
            return window['txtCep_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Prospeccao.prototype, "Franquia_Anexo", {
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
    Object.defineProperty(C_Prospeccao.prototype, "Franquia_Prospeccao_Anexo", {
        get: function () {
            return this.GetScope()["Franquia_Prospeccao_Anexo"];
        },
        set: function (value) {
            this.GetScope()["Franquia_Prospeccao_Anexo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Prospeccao.prototype, "Franquia_Prospeccao_Bem", {
        // Lista de Bens
        get: function () {
            var that = this.GetScope()["Franquia_Prospeccao_Bem"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Franquia_Prospeccao_Bem"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Prospeccao.prototype, "Franquia_Prospeccao_Bens", {
        get: function () {
            return this.GetScope()["Franquia_Prospeccao_Bens"];
        },
        set: function (value) {
            this.GetScope()["Franquia_Prospeccao_Bens"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Prospeccao.prototype, "Franquia_Curso", {
        //Lista de Cursos 
        get: function () {
            var that = this.GetScope()["Franquia_Curso"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Franquia_Curso"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Prospeccao.prototype, "Franquia_Prospeccao_Curso", {
        get: function () {
            return this.GetScope()["Franquia_Prospeccao_Curso"];
        },
        set: function (value) {
            this.GetScope()["Franquia_Prospeccao_Curso"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Prospeccao.prototype, "Franquia_Dependente", {
        //Lista de Dependentes 
        get: function () {
            var that = this.GetScope()["Franquia_Dependente"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Franquia_Dependente"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Prospeccao.prototype, "Franquia_Prospeccao_Dependente", {
        get: function () {
            return this.GetScope()["Franquia_Prospeccao_Dependente"];
        },
        set: function (value) {
            this.GetScope()["Franquia_Prospeccao_Dependente"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Prospeccao.prototype, "hdnCaminhoSessao", {
        get: function () {
            return $("#hdnCaminhoSessao")[0];
        },
        enumerable: true,
        configurable: true
    });
    C_Prospeccao.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        if (this.fpXML) {
            adicionarEventoMoura(this.fpXML.FileUploadComplete, this.OnFileUploadXMLCompleted, this);
        }
        //if (this.fileUpload && this.fileUpload.FileUpload) {
        //    adicionarEventoDevExpress(this.fileUpload.FileUpload.FilesUploadStart, this.OnFilesUploadStart, this);
        //}
        if (this.txtCep) {
            adicionarEventoMoura(this.txtCep.PesquisouCEP, this.OnConsultarCEP, this);
        }
        if (this.GridDependente) {
            adicionarEventoMoura(this.GridDependente.Validando, this.OnValidandoDependentes, this);
            adicionarEventoMoura(this.GridDependente.LimpouItem, this.OnLimpouDependentes, this);
            //adicionarEventoMoura(this.GridDependente.Grid.EditouItemGrade, this.OnEditouItemDependente, this);
        }
        if (this.GridEscolaridade) {
            adicionarEventoMoura(this.GridEscolaridade.Validando, this.OnValidandoEscolaridade, this);
            adicionarEventoMoura(this.GridEscolaridade.LimpouItem, this.OnLimpouEscolaridade, this);
            //adicionarEventoMoura(this.GridEscolaridade.Grid.EditouItemGrade, this.OnEditouItemEscolaridade, this);
        }
        if (this.gridBens) {
            adicionarEventoMoura(this.gridBens.Validando, this.OnValidandoBens, this);
            adicionarEventoMoura(this.gridBens.LimpouItem, this.OnLimpouBens, this);
            adicionarEventoMoura(this.gridBens.SelecionouItem, this.OnSelecionouItemBem, this);
            //adicionarEventoMoura(this.gridBens.Grid.EditouItemGrade, this.OnEditouItemBens, this);
        }
        if (this.grdAnexos) {
            adicionarEventoMoura(this.grdAnexos.Validando, this.OnValidandoAnexos, this);
            adicionarEventoMoura(this.grdAnexos.SelecionouItem, this.OnSelecionouItem, this);
            adicionarEventoMoura(this.grdAnexos.LimpouItem, this.OnLimpouAnexos, this);
        }
    };
    C_Prospeccao.prototype.OnSelecionouItemBem = function (s, e) {
        //if (this.EntityTela.Codigo == undefined) {
        //    this.EntityTela.Codigo = 0;
        //}
        //abrirTelaNovaAbaParametros(this.hdnCaminhoSessao.value + "\\" + "Documentos\\Franquia" + "\\" + this.EntityTela.Codigo + "\\" + e.item.NomeArquivo, []);
        this.Franquia_Prospeccao_Bem.Quitado = e.item.Quitado > 0;
        this.RefreshAngular();
    };
    C_Prospeccao.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (this.GetScope()) {
            if (!this.GetScope().MudouExperienciaEmpresarial) {
                this.GetScope().MudouExperienciaEmpresarial = $.proxy(this.MudouExperienciaEmpresarial, this);
                this.GetScope().$watch(function (scope) { return scope.Entity.Empresarial_Experiencia; }, this.GetScope().MudouExperienciaEmpresarial);
            }
            this.GetScope().$applyAsync();
        }
    };
    C_Prospeccao.prototype.OnSelecionouItem = function (s, e) {
        if (this.EntityTela.Codigo == undefined) {
            this.EntityTela.Codigo = 0;
        }
        abrirTelaNovaAbaParametros(this.hdnCaminhoSessao.value + "\\" + "Documentos\\Franquia" + "\\" + this.EntityTela.Codigo + "\\" + e.item.NomeArquivo, []);
    };
    C_Prospeccao.prototype.MudouExperienciaEmpresarial = function () {
        var entity = this.GetScope().Entity;
        var contribuinte;
        if (!entity.Empresarial_Experiencia) {
            this.accExperiencia.Visible = false;
        }
        else {
            this.accExperiencia.Visible = true;
        }
        this.GetScope().$applyAsync();
    };
    C_Prospeccao.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.PreencherGradeAnexo(Entity);
        this.PreencherGradeDependente(Entity);
        this.PreencherGradeCurso(Entity);
        this.PreencherGradeBens(Entity);
        this.criarEntidadePersonalizados(Entity);
        this.RefreshAngular();
    };
    C_Prospeccao.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Franquia_Prospeccao_Anexo = this.Franquia_Prospeccao_Anexo;
        this.EntityTela.Franquia_Prospeccao_Bens = this.Franquia_Prospeccao_Bens;
        this.EntityTela.Franquia_Prospeccao_Dependente = this.Franquia_Prospeccao_Dependente;
        this.EntityTela.Franquia_Prospeccao_Curso = this.Franquia_Prospeccao_Curso;
        return true;
    };
    C_Prospeccao.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGradeDependente(this.EntityTela);
        this.PreencherGradeCurso(this.EntityTela);
        this.PreencherGradeBens(this.EntityTela);
        this.PreencherGradeAnexo(this.EntityTela);
        this.RefreshAngular();
        if (this.Franquia_Prospeccao_Anexo.length > 0) {
            if (this.EntityTela.Codigo != null) {
                var parametros;
                parametros = {
                    codProspeccao: this.EntityTela.Codigo
                };
                var moverArquivo = this.ExecutarFuncaoServerSideSynch("CriarPastaPermanente", parametros);
                if (!moverArquivo) {
                    MostrarAlerta("Ocorreu um erro ao mover os arquivos");
                }
            }
        }
        return true;
    };
    C_Prospeccao.prototype.OnDepoisLimpar = function (Entity) {
        this.Franquia_Prospeccao_Bens = [];
        this.Franquia_Prospeccao_Curso = [];
        this.Franquia_Prospeccao_Dependente = [];
        this.Franquia_Prospeccao_Anexo = [];
        this.GridDependente.Grid.PreencherGrid(null);
        this.GridEscolaridade.Grid.PreencherGrid(null);
        this.grdAnexos.Grid.PreencherGrid(null);
        this.gridBens.Grid.PreencherGrid(null);
        this.OnLimpouAnexos();
        this.OnLimpouBens();
        this.OnLimpouDependentes();
        this.OnLimpouEscolaridade();
        this.criarEntidadePersonalizados(Entity);
        Entity.Data_Cadastro = this.DataServidor();
        Entity.Situacao = 0;
        Entity.Qualificacao_Conhecimento = 0;
        Entity.Tipo = 0;
    };
    C_Prospeccao.prototype.OnConsultarCEP = function (s, e) {
        if (e.EncontrouEndereco) {
            var entidade = this.GetScope().Entity;
            entidade.Bairro = e.Bairro;
            entidade.Loradouro = e.Endereco;
            entidade.Cidade = e.CidadeCodigo;
            this.GetScope().$applyAsync();
        }
        else {
            this.txtCep.Focus();
        }
    };
    C_Prospeccao.prototype.OnValidandoDependentes = function (s, e) {
        if (e.index < 0) {
            e.item.Contador = this.Franquia_Prospeccao_Dependente.Max("Contador") + 1;
        }
        if (e.item.Nome == undefined || e.item.Nome == "") {
            MostrarAlerta("Informe o nome do dependente");
            e.cancelar = true;
            return;
        }
        if (e.item.Data_Nascimento == undefined) {
            MostrarAlerta("Informe uma data válida");
            e.cancelar = true;
            return;
        }
        if (e.item.Data_Nascimento > this.DataServidor()) {
            MostrarAlerta("Informe uma data de nascimento inferior a data atual");
            e.cancelar = true;
            return;
        }
        //if (e.item.Grau_Parentesco == undefined) {
        //    MostrarAlerta("Informe o Grau de Parentesco");
        //    e.cancelar = true;
        //    return;
        //}
        this.RefreshAngular();
    };
    C_Prospeccao.prototype.OnLimpouDependentes = function () {
        this.Franquia_Dependente.Nome = "";
        this.Franquia_Dependente.Data_Nascimento = this.DataServidor();
        this.Franquia_Dependente.Grau_Parentesco = "";
    };
    //protected OnEditouItemDependente(s: any, e: MouraGridViewJSItemEventArgs) {
    //    this.Franquia_Dependente.Nome = e.item.Nome;
    //    this.Franquia_Dependente.Data_Nascimento = e.item.Data_Nascimento;
    //    this.Franquia_Dependente.Grau_Parentesco = e.item.Grau_Parentesco;
    //    this.RefreshAngular();
    //}
    C_Prospeccao.prototype.OnValidandoEscolaridade = function (s, e) {
        if (e.index < 0) {
            e.item.Contador = this.Franquia_Prospeccao_Curso.Max("Contador") + 1;
        }
        if (e.item.Instituicao == undefined || e.item.Instituicao == "") {
            MostrarAlerta("Informe a Instituição");
            e.cancelar = true;
            return;
        }
        if (e.item.Curso == undefined || e.item.Curso == "") {
            MostrarAlerta("Informe o Curso");
            e.cancelar = true;
            return;
        }
        if (e.item.Inicio == undefined) {
            MostrarAlerta("Informe uma data de início válida");
            e.cancelar = true;
            return;
        }
        if (e.item.Termino == undefined) {
            MostrarAlerta("Informe uma data de término válida");
            e.cancelar = true;
            return;
        }
        if (e.item.Inicio.getTime() > e.item.Termino.getTime()) {
            MostrarAlerta("A data de início não deve ser maior que a data de término");
            e.cancelar = true;
            return;
        }
        if (e.item.Situacao <= 0) {
            MostrarAlerta("Informe a situação");
            e.cancelar = true;
            return;
        }
        if (e.item.Termino.getTime() > this.DataServidor().getTime() && e.item.Situacao == 1) {
            MostrarAlerta("Informe uma data de término inferior a data atual para cursos que já foram concluídos");
            e.cancelar = true;
            return;
        }
    };
    C_Prospeccao.prototype.OnLimpouEscolaridade = function () {
        this.Franquia_Curso.Curso = "";
        this.Franquia_Curso.Instituicao = "";
        this.Franquia_Curso.Inicio = this.DataServidor();
        this.Franquia_Curso.Termino = this.DataServidor();
        this.Franquia_Curso.Situacao = 0;
    };
    //protected OnEditouItemEscolaridade(s: any, e: MouraGridViewJSItemEventArgs) {
    //    this.Franquia_Curso.Instituicao = e.item.Instituicao;
    //    this.Franquia_Curso.Curso = e.item.Curso;
    //    this.Franquia_Curso.Inicio = e.item.Inicio;
    //    this.Franquia_Curso.Termino = e.item.Termino;
    //    this.Franquia_Curso.Situacao = e.item.Situacao;
    //    this.RefreshAngular();
    //}
    C_Prospeccao.prototype.OnValidandoBens = function (s, e) {
        if (e.index < 0) {
            e.item.Contador = this.Franquia_Prospeccao_Bens.Max("Contador") + 1;
        }
        if (e.item.Tipo == 0) {
            MostrarAlerta("Informe o tipo");
            e.cancelar = true;
            return;
        }
        if (e.item.Descricao == "") {
            MostrarAlerta("Informe a descrição");
            e.cancelar = true;
            return;
        }
        if (e.item.Valor == 0) {
            MostrarAlerta("Informe o valor");
            e.cancelar = true;
            return;
        }
        if (e.item.Quitado) {
            e.item.Quitado_Texto = "SIM";
        }
        else {
            e.item.Quitado_Texto = "NÃO";
        }
        this.RefreshAngular();
    };
    C_Prospeccao.prototype.OnLimpouBens = function () {
        this.Franquia_Prospeccao_Bem.Tipo = 0;
        this.Franquia_Prospeccao_Bem.Descricao = "";
        this.Franquia_Prospeccao_Bem.Valor = 0;
        this.Franquia_Prospeccao_Bem.Quitado = false;
    };
    //protected OnEditouItemBens(s: any, e: MouraGridViewJSItemEventArgs) {
    //    this.Franquia_Prospeccao_Bem.Tipo = e.item.Tipo;
    //    this.Franquia_Prospeccao_Bem.Descricao = e.item.Descricao;
    //    this.Franquia_Prospeccao_Bem.Quitado = e.item.Quitado;
    //    this.RefreshAngular();
    //}
    C_Prospeccao.prototype.OnValidandoAnexos = function (s, e) {
        if (e.item.NomeArquivo == undefined) {
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
            if (itens[x].NomeArquivo == e.item.NomeArquivo) {
                MostrarAlerta("Este arquivo já foi adicionado");
                var parametros;
                parametros = {
                    nome: e.item.NomeArquivo
                };
                var excluir = this.ExecutarFuncaoServerSideSynch("ExcluirArquivoTemporario", parametros);
                this.fpXML.Limpar();
                e.cancelar = true;
                return;
            }
        }
    };
    C_Prospeccao.prototype.OnLimpouAnexos = function () {
        this.fpXML.Limpar();
    };
    //protected OnFilesUploadStart(source: DevExpress.Web.Scripts.ASPxClientUploadControl, ev: any) {
    //    this.lblNomeArquivo.Text = this.fileUpload.FileName
    //}
    C_Prospeccao.prototype.OnFileUploadXMLCompleted = function (s, e) {
        try {
            if (this.fpXML && this.fpXML.File) {
                this.PathArquivoImportado = this.fpXML.PathSalvarArquivo.replace("0", "" + (this.EntityTela.Codigo + 0)) + this.fpXML.File.name;
                this.Franquia_Anexo.Cod_Prospeccao = this.EntityTela.Codigo;
                this.Franquia_Anexo.NomeArquivo = this.fpXML.File.name;
                var tipo = this.Franquia_Anexo.NomeArquivo.split(".");
                this.Franquia_Anexo.Tipo = tipo[tipo.length - 1];
                this.Franquia_Anexo.NomeArquivoCompleto = this.PathArquivoImportado;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Prospeccao.prototype.PreencherGradeDependente = function (Entity) {
        try {
            var parametros;
            var codCandidato = 0;
            if (Entity.Codigo != undefined || Entity.Codigo != 0) {
                codCandidato = Entity.Codigo;
            }
            parametros = {
                codCandidato: codCandidato
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetDependentes", parametros);
            this.Franquia_Prospeccao_Dependente = retorno;
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Prospeccao.prototype.PreencherGradeCurso = function (Entity) {
        try {
            var parametros;
            var codCandidato = 0;
            if (Entity.Codigo != undefined || Entity.Codigo != 0) {
                codCandidato = Entity.Codigo;
            }
            parametros = {
                codCandidato: codCandidato
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetEscolaridade", parametros);
            this.Franquia_Prospeccao_Curso = retorno;
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Prospeccao.prototype.PreencherGradeBens = function (Entity) {
        try {
            var parametros;
            var codCandidato = 0;
            if (Entity.Codigo != undefined || Entity.Codigo != 0) {
                codCandidato = Entity.Codigo;
            }
            parametros = {
                codCandidato: codCandidato
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetBens", parametros);
            this.Franquia_Prospeccao_Bens = retorno;
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Prospeccao.prototype.PreencherGradeAnexo = function (Entity) {
        try {
            var parametros;
            var codProspeccao = 0;
            if (Entity.Codigo != undefined || Entity.Codigo != 0) {
                codProspeccao = Entity.Codigo;
            }
            parametros = {
                codProspeccao: codProspeccao
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetAnexos", parametros);
            this.Franquia_Prospeccao_Anexo = retorno;
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Prospeccao.prototype.criarEntidadePersonalizados = function (Entity) {
        var listaOrdem = [];
        if (!Entity.Campos_Valor) {
            Entity.Campos_Valor = [];
        }
        $("[moura-personalizado-campo]").each(function (index, element) {
            var campo = parseInt($(element).attr("moura-personalizado-campo"));
            var encontrado;
            for (var x = 0; x < Entity.Campos_Valor.length; x++) {
                if (Entity.Campos_Valor[x].Campo == campo) {
                    encontrado = Entity.Campos_Valor[x];
                    break;
                }
            }
            if (!encontrado) {
                encontrado = {};
                encontrado.Campo = campo;
                encontrado.Cliente = Entity.Codigo;
            }
            listaOrdem.push(encontrado);
        });
        Entity.Campos_Valor = listaOrdem;
    };
    C_Prospeccao.prototype.OnDepoisSetEntidade = function (Entity) {
        this.criarEntidadePersonalizados(Entity);
    };
    C_Prospeccao.prototype.GetAcao = function () {
        var parametros;
        parametros = {
            codSituacao: this.EntityTela.Situacao
        };
        var acao = this.ExecutarFuncaoServerSideSynch("GetAcao", parametros);
        return acao;
    };
    C_Prospeccao.prototype.Trocar_Tag = function (mensagem) {
        var parametros;
        parametros = {
            html: mensagem,
            codProspeccao: this.EntityTela.Codigo
        };
        var html = this.ExecutarFuncaoServerSideSynch("Trocar_Tag", parametros);
        return html;
    };
    C_Prospeccao.prototype.EnviarEmail = function (infoEmail, msgNova) {
        try {
            var parametros;
            parametros = {
                dadosEmail: infoEmail,
                msgNova: msgNova
            };
            var enviouEmail = this.ExecutarFuncaoServerSideSynch("EnviarEmailFranquia", parametros);
            if (enviouEmail) {
                MostrarMensagem("E-mail enviado com sucesso!");
                return true;
            }
            else {
                MostrarAlerta("Falha no envio do e-mail!");
            }
            return false;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Prospeccao.prototype.EnviarSms = function (Entity) {
        try {
            var parametros;
            parametros = {
                codProspeccao: this.EntityTela.Codigo,
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var enviouSms = this.ExecutarFuncaoServerSideSynch("EnviarSmsFranquia", parametros);
            if (enviouSms) {
                MostrarMensagem("Mensagem sms enviada com sucesso!");
                return true;
            }
            else {
                MostrarAlerta("Envio não autorizado, verifique o login e a senha");
            }
            return false;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Prospeccao.prototype.OnGravouSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
        var acao = this.GetAcao();
        try {
            if (acao == 2) {
                var parametros;
                parametros = {
                    codProspeccao: this.EntityTela.Codigo
                };
                var informacoesEmail = this.ExecutarFuncaoServerSideSynch("RetornarInformacaoEmail", parametros);
                if (informacoesEmail != null) {
                    var msgNova = this.Trocar_Tag(informacoesEmail.Mensagem);
                    this.EnviarEmail(informacoesEmail, msgNova);
                }
            }
            else if (acao == 3) {
                var celular = entidade.Ddd_Celular + entidade.Fone_Celular;
                if (celular == null || celular.length < 10) {
                    MostrarAlerta("O candidato não possui celular informado!");
                    return;
                }
                this.EnviarSms(entidade);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_Prospeccao;
}(MouraPageCadastroAngular));
var c_Prospeccao = new C_Prospeccao();
//# sourceMappingURL=C_Prospeccao.js.map