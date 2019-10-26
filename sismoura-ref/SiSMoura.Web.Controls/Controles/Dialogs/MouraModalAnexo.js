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
var MouraModalAnexo = /** @class */ (function (_super) {
    __extends(MouraModalAnexo, _super);
    function MouraModalAnexo(id) {
        return _super.call(this, id) || this;
    }
    Object.defineProperty(MouraModalAnexo.prototype, "PathAnexo", {
        get: function () {
            return this.hdnPathAnexo.value;
        },
        set: function (value) {
            this.hdnPathAnexo.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalAnexo.prototype, "dlgAnexo", {
        get: function () {
            return window[this.ID + '_dlgAnexo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalAnexo.prototype, "fileUpload", {
        get: function () {
            return window[this.ID + '_fileUpload_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalAnexo.prototype, "grdAnexos", {
        get: function () {
            return window[this.ID + '_grdAnexos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalAnexo.prototype, "cboTipo", {
        get: function () {
            return window[this.ID + '_cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalAnexo.prototype, "btnFechar", {
        get: function () {
            return window[this.ID + '_btnFechar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalAnexo.prototype, "btnAtualizarAnexos", {
        get: function () {
            return window[this.ID + '_btnAtualizarAnexos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalAnexo.prototype, "hdnPathAnexo", {
        get: function () {
            return $('#' + this.ID + '_hdnPathAnexo')[0];
        },
        enumerable: true,
        configurable: true
    });
    MouraModalAnexo.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.btnAtualizarAnexos) {
            adicionarEventoMoura(this.btnAtualizarAnexos.Click, this.OnBtnAtualizarAnexosClick, this);
        }
        if (this.btnFechar) {
            adicionarEventoMoura(this.btnFechar.Click, this.OnBtnFecharClick, this);
        }
        if (this.grdAnexos) {
            adicionarEventoMoura(this.grdAnexos.ExcluiuLinhaGrade, this.OnGrdAnexosExcluiuLinhaGrade, this);
            adicionarEventoMoura(this.grdAnexos.SelecionouLinha, this.OnGrdAnexosSelecionouLinha, this);
        }
        if (this.fileUpload && this.fileUpload.FileUpload) {
            adicionarEventoDevExpress(this.fileUpload.FileUpload.FilesUploadComplete, this.OnFileUploadFilesUploadComplete, this);
        }
    };
    MouraModalAnexo.prototype.CarregarAnexos = function (path) {
        this.PathAnexo = path;
        if (!this.criarEAtualizarGradeArquivos()) {
            MostrarAlerta("Informe um caminho válido");
            return false;
        }
        return true;
    };
    MouraModalAnexo.prototype.Hide = function () {
        this.dlgAnexo.Hide();
    };
    MouraModalAnexo.prototype.MostrarClient = function (path) {
        if (!this.CarregarAnexos(path)) {
            return;
        }
        if (this.cboTipo && this.cboTipo.GetItemCount() > 0) {
            this.cboTipo.SetSelectedIndex(0);
        }
        this.dlgAnexo.Show();
    };
    MouraModalAnexo.prototype.criarEAtualizarGradeArquivos = function () {
        try {
            if (String.IsNullOrWhiteSpace(this.PathAnexo)) {
                this.grdAnexos.PreencherGrid([]);
                return true;
            }
            var param = {
                path: this.PathAnexo
            };
            var retorno = JSON.parse(this.ExecutarHttpRequest("CriarERetornarArquivosGradePath", param));
            if (retorno) {
                this.grdAnexos.PreencherGrid(retorno);
                return true;
            }
            else {
                return false;
            }
        }
        catch (ex) {
            LogarException(ex);
            return false;
        }
    };
    MouraModalAnexo.prototype.OnBtnAtualizarAnexosClick = function (s, e) {
        e.processOnServer = false;
        try {
            this.criarEAtualizarGradeArquivos();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraModalAnexo.prototype.OnBtnFecharClick = function (s, e) {
        e.processOnServer = false;
        this.dlgAnexo.Hide();
    };
    MouraModalAnexo.prototype.OnGrdAnexosSelecionouLinha = function (s, e) {
        abrirTelaNovaAbaParametros(e.data.PathArquivo, []);
    };
    MouraModalAnexo.prototype.OnGrdAnexosExcluiuLinhaGrade = function (s, e) {
        var param = {
            pathArquivo: e.item.PathArquivo
        };
        try {
            var retorno = this.ExecutarHttpRequest("ExcluirAnexo", param);
            MostrarAlerta("Anexo excluído");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraModalAnexo.prototype.OnFileUploadFilesUploadComplete = function (s, e) {
        this.criarEAtualizarGradeArquivos();
    };
    return MouraModalAnexo;
}(MouraControl));
//# sourceMappingURL=MouraModalAnexo.js.map