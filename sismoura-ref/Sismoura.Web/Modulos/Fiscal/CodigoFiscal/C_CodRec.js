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
var C_CodRec = /** @class */ (function (_super) {
    __extends(C_CodRec, _super);
    function C_CodRec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CodRec.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CodRec.prototype, "cboUF", {
        get: function () {
            return window['cboUF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CodRec.prototype, "txtCodigoReceita", {
        get: function () {
            return window['txtCodigoReceita_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CodRec.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CodRec.prototype, "txtValidadeInicial", {
        get: function () {
            return window['txtValidadeInicial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CodRec.prototype, "txtValidadeFinal", {
        get: function () {
            return window['txtValidadeFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CodRec.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CodRec.prototype, "lblNomeArquivo", {
        get: function () {
            return window['lblNomeArquivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CodRec.prototype, "hdnPath", {
        get: function () {
            return $('#hdnPath')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CodRec.prototype, "btnImportar", {
        get: function () {
            return window['btnImportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CodRec.prototype, "fileUpload", {
        get: function () {
            return window['fileUpload_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_CodRec.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.fileUpload && this.fileUpload.FileUpload) {
            adicionarEventoDevExpress(this.fileUpload.FileUpload.FilesUploadStart, this.OnFilesUploadStart, this);
            adicionarEventoDevExpress(this.fileUpload.FileUpload.FileUploadComplete, this.OnFilesUploadComplete, this);
        }
        if (this.btnImportar) {
            adicionarEventoMoura(this.btnImportar.Click, this.OnClickImportar, this);
        }
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.Procurou, this.BuscarGrade, this);
        }
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGrdSelecionouItem, this);
        }
        if (this.cboUF) {
            adicionarEventoMoura(this.cboUF.SelectedItemChanged, this.BuscarGrade, this);
        }
    };
    C_CodRec.prototype.BuscarGrade = function () {
        var UF;
        if (this.cboUF.GetValue() != "") {
            UF = "" + this.cboUF.GetValue();
        }
        else {
            UF = "";
        }
        var parametros = {
            UF: UF
        };
        var Itens = this.ExecutarFuncaoServerSideSynch("GetCodigosReceitaByUF", parametros);
        this.Grid.PreencherGrid(Itens);
    };
    C_CodRec.prototype.OnGrdSelecionouItem = function (s, e) {
        this.txtCodigo.Procurar(e.data.Codigo);
    };
    C_CodRec.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.BuscarGrade();
        return true;
    };
    C_CodRec.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.BuscarGrade();
        return true;
    };
    C_CodRec.prototype.OnFilesUploadStart = function (source, ev) {
        if (this.fileUpload.FileName.substr(-4) != ".txt") {
            MostrarAlerta("Informe um arquivo do tipo .txt");
            this.lblNomeArquivo.Text = "";
        }
        else {
            this.lblNomeArquivo.Text = this.fileUpload.FileName;
        }
        this.GetScope().$applyAsync();
    };
    C_CodRec.prototype.OnFilesUploadComplete = function (source, ev) {
        this.GetScope().$applyAsync();
    };
    C_CodRec.prototype.OnClickImportar = function (s, e) {
        e.processOnServer = false;
        if (this.cboUF.GetText() == "") {
            MostrarAlerta("Informe a UF correspondente ao arquivo a ser importado!");
        }
        else if (this.lblNomeArquivo.Text == "") {
            MostrarAlerta("Informe o arquivo a ser importado!");
        }
        else {
            var parametros;
            var retorno;
            var pathCaminho;
            parametros = {
                pathCaminho: this.hdnPath.value,
                UF: this.cboUF.GetText()
            };
            retorno = this.ExecutarFuncaoServerSideSynch("ImportarArquivo", parametros);
            if (retorno == "") {
                MostrarAlerta("Arquivo inválido!");
            }
            else if (retorno == "Arquivo importado com sucesso") {
                MostrarMensagem(retorno);
                this.lblNomeArquivo.Text = "";
                this.BuscarGrade();
            }
            else {
                MostrarAlerta(retorno);
            }
        }
    };
    C_CodRec.prototype.OnAntesGravar = function () {
        try {
            _super.prototype.OnAntesGravar.call(this);
            var validadeInicial = this.txtValidadeInicial.Date;
            var validadeFinal = this.txtValidadeFinal.Date;
            if (validadeFinal != null || validadeFinal != undefined) {
                if (validadeInicial > validadeFinal) {
                    MostrarAlerta("A Validade Inicial não pode ser maior do que a Validade Final");
                    return false;
                }
            }
            return true;
        }
        catch (ex) {
            LogarException(ex);
            return false;
        }
    };
    return C_CodRec;
}(MouraPageCadastroAngular));
var c_CodRec = new C_CodRec();
//# sourceMappingURL=C_CodRec.js.map