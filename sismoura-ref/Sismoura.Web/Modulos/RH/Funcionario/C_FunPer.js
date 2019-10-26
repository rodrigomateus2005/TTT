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
var C_FunPer = /** @class */ (function (_super) {
    __extends(C_FunPer, _super);
    function C_FunPer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_FunPer.prototype, "hdnTempPath", {
        get: function () {
            return $("#hdnTempPath")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FunPer.prototype, "Funcionario_Perfil", {
        get: function () {
            if (!this.GetScope()["Funcionario_Perfil"]) {
                this.GetScope()["Funcionario_Perfil"] = {};
            }
            return this.GetScope()["Funcionario_Perfil"];
        },
        set: function (value) {
            this.GetScope()["Funcionario_Perfil"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FunPer.prototype, "Perfis", {
        get: function () {
            if (!this.GetScope()["Perfis"]) {
                this.GetScope()["Perfis"] = [];
            }
            return this.GetScope()["Perfis"];
        },
        set: function (value) {
            this.GetScope()["Perfis"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FunPer.prototype, "Funcionario_Perfil_Anexo", {
        get: function () {
            if (!this.GetScope()["Funcionario_Perfil_Anexo"]) {
                this.GetScope()["Funcionario_Perfil_Anexo"] = {};
            }
            return this.GetScope()["Funcionario_Perfil_Anexo"];
        },
        set: function (value) {
            this.GetScope()["Funcionario_Perfil_Anexo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FunPer.prototype, "Anexos", {
        get: function () {
            if (!this.GetScope()["Anexos"]) {
                this.GetScope()["Anexos"] = [];
            }
            return this.GetScope()["Anexos"];
        },
        set: function (value) {
            this.GetScope()["Anexos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FunPer.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FunPer.prototype, "txtPerfil", {
        get: function () {
            return window['txtPerfil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FunPer.prototype, "txtFuncionario", {
        get: function () {
            return window['txtFuncionario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FunPer.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FunPer.prototype, "GridAnexos", {
        get: function () {
            return window['gridAnexos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FunPer.prototype, "fileUpload", {
        get: function () {
            return window['fileUpload_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FunPer.prototype, "cboTipoArquivo", {
        get: function () {
            return window['cboTipoArquivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_FunPer.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouTipoArquivo) {
            this.GetScope().MudouTipoArquivo = $.proxy(this.MudouTipoArquivo, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Funcionario_Perfil_Anexo.Tipo; }, this.GetScope().MudouTipoArquivo);
        }
        if (!this.GetScope().MudouCodigo) {
            this.GetScope().MudouCodigo = $.proxy(this.MudouCodigo, this);
            var that = this;
            this.GetScope().$watch(function () { return that.EntityTela.Codigo; }, this.GetScope().MudouCodigo);
        }
        this.txtCodigo.Visible = false;
    };
    C_FunPer.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtPerfil) {
            adicionarEventoMoura(this.txtPerfil.Procurou, this.OnProcurouPerfil, this);
        }
        if (this.txtFuncionario) {
            adicionarEventoMoura(this.txtFuncionario.Procurou, this.OnProcurouFuncionario, this);
            adicionarEventoDevExpress(this.txtFuncionario.BotaoNovo.Click, this.OnClickLimpar, this);
        }
        if (this.Grid && this.Grid.Grid) {
            adicionarEventoMoura(this.Grid.AdicionandoItem, this.OnAdicionandoPerfil, this);
            adicionarEventoMoura(this.Grid.AlterandoItem, this.OnAlterandoPerfil, this);
            adicionarEventoMoura(this.Grid.SelecionouItem, this.OnSelecionouItem, this);
        }
        if (this.GridAnexos && this.GridAnexos.Grid) {
            adicionarEventoMoura(this.GridAnexos.AdicionandoItem, this.OnAdicionandoAnexo, this);
            adicionarEventoMoura(this.GridAnexos.LimpandoItem, this.OnLimpandoAnexo, this);
            adicionarEventoMoura(this.GridAnexos.SelecionandoItem, this.OnSelecionouAnexo, this);
            adicionarEventoMoura(this.GridAnexos.ItemExcluido, this.OnExcluiuAnexo, this);
        }
        if (this) {
            adicionarEventoMoura(this.AntesExcluir, this.OnAntesExcluir, this);
        }
    };
    C_FunPer.prototype.Limpar = function () {
        _super.prototype.Limpar.call(this);
        this.EntityTela.Funcionario = 0;
        this.LimparDocumentosTemporarios();
        this.LimparCamposPerfil(true);
        this.LimparCamposAnexo(true);
        this.RefreshAngular();
    };
    C_FunPer.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.Perfis = this.GetPerfisFuncionarios(Entity.Codigo);
        this.Anexos = this.GetAnexosFuncionarios(Entity.Codigo);
        this.RefreshAngular();
    };
    C_FunPer.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.Perfis.length <= 0) {
            MostrarAlerta("Informe ao menos um perfil!");
            return false;
        }
        this.EntityTela.Funcionario_Perfil = this.Perfis;
        this.EntityTela.Funcionario_Perfil_Anexo = this.Anexos;
        //this.VerificaAnexosExcluidos();
        return true;
    };
    C_FunPer.prototype.LimparCamposAnexo = function (limparGrade) {
        this.Funcionario_Perfil_Anexo.Tipo = "1";
        this.Funcionario_Perfil_Anexo.Nome_Arquivo = "";
        this.fileUpload.Limpar();
        this.fileUpload.File = null;
        if (limparGrade) {
            this.Anexos = [];
        }
        this.RefreshAngular();
    };
    C_FunPer.prototype.LimparCamposPerfil = function (limparGrade) {
        this.Funcionario_Perfil.Perfil = 0;
        this.Funcionario_Perfil.Caracteristica = "";
        this.Funcionario_Perfil.Como_No_Trabalho = "";
        this.Funcionario_Perfil.Como_Agir = "";
        this.Funcionario_Perfil.Que_Procura = "";
        this.Funcionario_Perfil.Padrao_Tomada_Decisao = "";
        this.Funcionario_Perfil.Ponto_Forte = "";
        if (limparGrade) {
            this.Perfis = [];
        }
        this.RefreshAngular();
    };
    C_FunPer.prototype.OnProcurouPerfil = function (s, e) {
        if (CNum(this.txtPerfil.GetText()) > 0) {
            this.Funcionario_Perfil = this.GetDadosPerfil(CNum(this.txtPerfil.GetText()));
            this.RefreshAngular();
        }
        else {
            this.LimparCamposPerfil(false);
        }
    };
    C_FunPer.prototype.OnProcurouFuncionario = function (s, e) {
        if (CNum(this.txtFuncionario.GetText()) > 0) {
            this.VerificarPerfilFuncionario();
        }
        else {
            this.Limpar();
        }
    };
    C_FunPer.prototype.GetDadosPerfil = function (codPerfil) {
        var parametros;
        try {
            parametros = {
                codPerfil: codPerfil
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetDadosPerfil", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_FunPer.prototype.VerificarPerfilFuncionario = function () {
        var _this = this;
        var parametros;
        var codFuncionario = CNum(this.txtFuncionario.GetText());
        try {
            parametros = {
                codFuncionario: codFuncionario
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificarPerfilFuncionario", parametros);
            this.EntityTela.Codigo = CNum(retorno);
            if (CNum(retorno) <= 0) {
                setTimeout(function () {
                    _this.EntityTela.Funcionario = codFuncionario;
                    _this.RefreshAngular();
                }, 50);
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_FunPer.prototype.GetPerfisFuncionarios = function (codRhPerfil) {
        var parametros;
        try {
            parametros = {
                codRhPerfil: codRhPerfil
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetFuncionarioItens", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_FunPer.prototype.GetAnexosFuncionarios = function (codRhPerfil) {
        var parametros;
        try {
            parametros = {
                codRhPerfil: codRhPerfil
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetAnexosFuncionarios", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_FunPer.prototype.OnAdicionandoPerfil = function (s, e) {
        if (this.ValidarCamposPerfil()) {
            var verificaPerfilInformado = this.Perfis.FindAll("Perfil", CNum(this.Funcionario_Perfil.Perfil));
            if (verificaPerfilInformado.length > 0) {
                e.cancelar = true;
                MostrarAlerta("Este perfil já foi informado!");
            }
            else {
                e.item.Descricao = this.txtPerfil.GetResultado();
            }
        }
        else {
            e.cancelar = true;
        }
    };
    C_FunPer.prototype.OnAlterandoPerfil = function (s, e) {
        if (this.ValidarCamposPerfil()) {
            e.item.Descricao = this.txtPerfil.GetResultado();
        }
        else {
            e.cancelar = true;
        }
    };
    C_FunPer.prototype.OnSelecionouItem = function (s, e) {
        var _this = this;
        setTimeout(function () {
            _this.Funcionario_Perfil = e.item;
            _this.RefreshAngular();
        }, 100);
    };
    C_FunPer.prototype.ValidarCamposPerfil = function () {
        var retorno = true;
        if (CNum(this.Funcionario_Perfil.Perfil) <= 0) {
            retorno = false;
            MostrarMensagemCampoObrigatorio("Perfil");
        }
        return retorno;
    };
    C_FunPer.prototype.OnClickLimpar = function (s, e) {
        e.processOnServer = false;
        this.Limpar();
    };
    C_FunPer.prototype.MudouTipoArquivo = function () {
        var type = "";
        switch (this.Funcionario_Perfil_Anexo.Tipo) {
            case "1":
                type = ".pdf";
                break;
            case "2":
                type = ".doc,.docx,.rtf,.odt";
                break;
            case "3":
                type = ".xls,.xlsx,.ods";
                break;
            case "4":
                type = ".ppt,.pptx,.odp";
                break;
            case "5":
                type = "";
                break;
            default:
                type = "";
        }
        this.fileUpload.ChangeAccept(type);
    };
    C_FunPer.prototype.OnAdicionandoAnexo = function (s, e) {
        if (CNum(this.Funcionario_Perfil_Anexo.Tipo) <= 0) {
            e.cancelar = true;
            MostrarMensagemCampoObrigatorio("Tipo");
        }
        else if (!this.fileUpload.File) {
            e.cancelar = true;
            MostrarAlerta("Selecione um arquivo");
        }
        else {
            e.item.Tipo = this.cboTipoArquivo.GetText();
            e.item.Nome_Arquivo = this.fileUpload.File.name;
            e.item.Nome_Arquivo_Completo = this.GetPathArquivo(this.fileUpload.PathSalvarArquivo + "/" + this.fileUpload.File.name);
        }
    };
    C_FunPer.prototype.OnLimpandoAnexo = function (s, e) {
        e.item.Tipo = "1";
        e.item.Nome_Arquivo = "";
        this.fileUpload.Limpar();
        this.fileUpload.File = null;
    };
    C_FunPer.prototype.GetPathArquivo = function (pathRelativo) {
        var parametros;
        try {
            parametros = {
                path: pathRelativo
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetPathArquivo", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_FunPer.prototype.OnSelecionouAnexo = function (s, e) {
        e.cancelar = true;
        var arquivo;
        if (CNum(this.EntityTela.Codigo) <= 0) {
            arquivo = this.hdnTempPath.value + e.item.Nome_Arquivo;
        }
        else {
            arquivo = "~/Documentos/Funcionario/" + CNum(this.EntityTela.Codigo) + "/" + e.item.Nome_Arquivo;
        }
        if (this.ArquivoExists(arquivo)) {
            //downloadURI(formataURLRelativa(replaceAll(arquivo, "~", "")), e.item.Nome_Arquivo);
            abrirTelaNovaAbaParametros(replaceAll(arquivo, "~", ""), []);
        }
        else {
            MostrarAlerta("Anexo não encontrado!");
        }
    };
    C_FunPer.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.AtualizarPathDocumentos();
        return true;
    };
    C_FunPer.prototype.AtualizarPathDocumentos = function () {
        var parametros;
        try {
            parametros = {
                codRhPerfil: this.EntityTela.Codigo,
                pathTemp: this.hdnTempPath.value
            };
            this.ExecutarFuncaoServerSideSynch("AtualizarPathDocumentos", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_FunPer.prototype.MudouCodigo = function () {
        var path;
        if (CNum(this.EntityTela.Codigo) > 0) {
            path = "~/Documentos/Funcionario/" + CNum(this.EntityTela.Codigo);
        }
        else {
            path = this.hdnTempPath.value;
        }
        this.fileUpload.PathSalvarArquivo = path;
    };
    C_FunPer.prototype.OnAntesExcluir = function () {
        this.DeletarDocumentos(this.EntityTela.Codigo);
    };
    C_FunPer.prototype.DeletarDocumentos = function (codRhPerfil) {
        var parametros;
        try {
            parametros = {
                path: "~/Documentos/Funcionario/" + codRhPerfil
            };
            this.ExecutarFuncaoServerSideSynch("DeletarDocumentos", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_FunPer.prototype.LimparDocumentosTemporarios = function () {
        var parametros;
        try {
            parametros = {
                pathTemp: this.hdnTempPath.value
            };
            this.ExecutarFuncaoServerSideSynch("LimparDocumentosTemporarios", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_FunPer.prototype.OnExcluiuAnexo = function (s, e) {
        this.DeletarAnexo(e.item);
    };
    C_FunPer.prototype.DeletarAnexo = function (anexo) {
        var parametros;
        try {
            parametros = {
                anexo: anexo,
                codUsuario: ValoresSismoura.UsuarioLogado,
                nomeTela: ValoresSismoura.NomeTela
            };
            this.ExecutarFuncaoServerSideSynch("DeletarAnexo", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_FunPer.prototype.ArquivoExists = function (arquivo) {
        var retorno;
        var parametros;
        try {
            parametros = {
                path: arquivo
            };
            retorno = this.ExecutarFuncaoServerSideSynch("ArquivoExists", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
        return retorno;
    };
    return C_FunPer;
}(MouraPageCadastroAngular));
var c_FunPer = new C_FunPer();
//# sourceMappingURL=C_FunPer.js.map