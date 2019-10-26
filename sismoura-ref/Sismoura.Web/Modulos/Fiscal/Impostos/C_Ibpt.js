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
var C_Ibpt = /** @class */ (function (_super) {
    __extends(C_Ibpt, _super);
    function C_Ibpt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Ibpt.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ibpt.prototype, "optOrigem", {
        get: function () {
            return window['optOrigem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ibpt.prototype, "fileUpload", {
        get: function () {
            return window['fileUpload_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ibpt.prototype, "lblNomeArquivo", {
        get: function () {
            return window['lblNomeArquivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ibpt.prototype, "btnCarregar", {
        get: function () {
            return window['btnCarregar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ibpt.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ibpt.prototype, "cboUf", {
        get: function () {
            return window['cboUf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ibpt.prototype, "lblVersaoSistema", {
        get: function () {
            return window['lblVersaoSistema_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ibpt.prototype, "lblVersaoOrigem", {
        get: function () {
            return window['lblVersaoOrigem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Ibpt.prototype, "PathArquivo", {
        get: function () {
            if (!this.GetScope()["PathArquivo"]) {
                return "";
            }
            else {
                return this.GetScope()["PathArquivo"];
            }
        },
        set: function (value) {
            this.GetScope()["PathArquivo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_Ibpt.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboUf) {
            adicionarEventoMoura(this.cboUf.SelectedItemChanged, this.OnSelecionouUf, this);
        }
        if (this.optOrigem) {
            adicionarEventoMoura(this.optOrigem.SelectionChanged, this.OnOptOrigemChange, this);
        }
        if (this.fileUpload) {
            adicionarEventoMoura(this.fileUpload.FileUploadStart, this.OnFilesUploadStart, this);
            adicionarEventoMoura(this.fileUpload.FileUploadComplete, this.OnFileUploadCompleted, this);
        }
        if (this.btnCarregar) {
            adicionarEventoMoura(this.btnCarregar.Click, this.OnClickGerar, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickBtnGravar, this);
        }
    };
    C_Ibpt.prototype.OnFilesUploadStart = function (source, ev) {
        if (this.cboUf.GetValue() == null) {
            MostrarAlerta("Informe o estado!");
        }
        else {
            this.lblNomeArquivo.Text = this.replaceSpecialChars(this.fileUpload.FileName);
        }
    };
    C_Ibpt.prototype.replaceSpecialChars = function (str) {
        str = str.replace(/[ÀÁÂÃÄÅ]/, "A");
        str = str.replace(/[àáâãäå]/, "a");
        str = str.replace(/[ÈÉÊË]/, "E");
        str = str.replace(/[Ç]/, "C");
        str = str.replace(/[ç]/, "c");
        return str;
    };
    C_Ibpt.prototype.OnSelecionouUf = function () {
        var uf = this.cboUf.GetText();
        this.getVersaoSistema(uf);
    };
    C_Ibpt.prototype.OnOptOrigemChange = function () {
        if (this.optOrigem.GetValue() == "Local") {
            this.fileUpload.FileUpload.SetVisible(true);
            this.btnCarregar.Visible = false;
        }
        else {
            this.OnSelecionouUf();
            this.fileUpload.FileUpload.SetVisible(false);
            this.btnCarregar.Visible = true;
        }
    };
    C_Ibpt.prototype.getVersaoSistema = function (uf) {
        try {
            var parametros;
            parametros = {
                uf: uf
            };
            if (uf == "") {
                this.lblVersaoOrigem.Visible = false;
                this.lblVersaoSistema.Visible = false;
            }
            else {
                var versao = this.ExecutarFuncaoServerSideSynch("getVersaoSistema", parametros);
                this.lblVersaoSistema.Visible = true;
                this.lblVersaoSistema.Text = versao;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Ibpt.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.lblVersaoOrigem.Visible = false;
        this.lblVersaoSistema.Visible = false;
        this.btnCarregar.Visible = false;
    };
    C_Ibpt.prototype.LimparCampos = function () {
        this.OnOptOrigemChange();
        this.cboUf.SetValue("");
        this.btnCarregar.Visible = false;
        this.lblVersaoOrigem.Visible = false;
        this.lblVersaoSistema.Visible = false;
        this.lblNomeArquivo.Text = "";
        this.lblNomeArquivo.Visible = false;
        this.PathArquivo = "";
        this.getVersaoSistema("");
        this.Grid.PreencherGrid(null);
    };
    C_Ibpt.prototype.OnClickGerar = function (s, e) {
        if (String.IsNullOrWhiteSpace(this.cboUf.GetText())) {
            MostrarAlerta("Informe o estado!");
            e.processOnServer = false;
            return;
        }
        var internet = (this.optOrigem.GetValue() == "Local") ? false : true;
        var arq;
        if (internet) {
            arq = "https://jnmoura.com.br/dw/tabelaIBPT/TabelaIBPTax" + this.cboUf.GetText() + this.lblVersaoSistema.Text + ".csv";
            this.lblNomeArquivo.Text = "Link: " + arq;
        }
        else {
            arq = this.PathArquivo;
            if (String.IsNullOrWhiteSpace(this.PathArquivo)) {
                MostrarAlerta("Nenhum arquivo foi importado!");
                return;
            }
        }
        var parametros = {
            nomeArquivo: arq,
            ufSelecionado: this.cboUf.GetText(),
            internet: internet
        };
        var teste = this.ExecutarFuncaoServerSideSynch("CarregarArquivo", parametros);
        this.Grid.PreencherGrid(teste);
    };
    C_Ibpt.prototype.OnClickBtnGravar = function (s, e) {
        var _this = this;
        abrirEspera("Gravando itens, isso pode levar alguns minutos...");
        e.processOnServer = false;
        setTimeout(function () {
            var ds = _this.Grid.DataSource;
            var entidade;
            var entityList = [];
            for (var x = 0; x < ds.length; x++) {
                entidade = {};
                entidade.Ncm = ds[x].Ncm;
                entidade.Origem = ds[x].Origem;
                entidade.Nacional_Federal = ds[x].Nacional_Federal;
                entidade.Importados_Federal = ds[x].Importados_Federal;
                entidade.Versao = ds[x].Versao;
                entidade.Estadual = ds[x].Estadual;
                entidade.Municipal = ds[x].Municipal;
                entidade.Vigencia_Inicio = ds[x].Vigencia_Inicio;
                entidade.Vigencia_Fim = ds[x].Vigencia_Fim;
                entidade.Uf = ds[x].Uf;
                entityList.push(entidade);
            }
            var parametros = {
                ibptList: entityList,
                uf: _this.cboUf.GetText(),
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = _this.ExecutarFuncaoServerSideSynch("GravarIbpt", parametros);
            //var parametros: any = {
            //    uf: this.cboUf.GetText(),
            //    ibptList: entityList
            //};
            //var retorno = this.ExecutarFuncaoServerSideSynch("GravarItens", parametros);
            if (retorno) {
                _this.LimparCampos();
            }
            else {
                MostrarAlerta("Erro ao gravar!");
            }
            fecharEspera();
        }, 150);
    };
    C_Ibpt.prototype.OnFileUploadCompleted = function (s, e) {
        try {
            this.PathArquivo = e.callbackData;
            if (this.cboUf.GetValue() != null) {
                this.btnCarregar.Visible = true;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_Ibpt;
}(MouraPageAngular));
var c_Ibpt = new C_Ibpt();
//# sourceMappingURL=C_Ibpt.js.map