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
var I_LanCon = /** @class */ (function (_super) {
    __extends(I_LanCon, _super);
    function I_LanCon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(I_LanCon.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(I_LanCon.prototype, "fileUpload", {
        get: function () {
            return window['fileUpload_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(I_LanCon.prototype, "lblNomeArquivo", {
        get: function () {
            return window['lblNomeArquivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(I_LanCon.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(I_LanCon.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(I_LanCon.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(I_LanCon.prototype, "btnNovo", {
        get: function () {
            return window['btnNovo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(I_LanCon.prototype, "PathArquivo", {
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
    I_LanCon.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.fileUpload) {
            adicionarEventoMoura(this.fileUpload.FileUploadStart, this.OnFilesUploadStart, this);
            adicionarEventoMoura(this.fileUpload.FileUploadComplete, this.OnFileUploadCompleted, this);
        }
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnClickGerar, this);
        }
        if (this.btnNovo) {
            adicionarEventoMoura(this.btnNovo.Click, this.OnClickNovo, this);
        }
    };
    I_LanCon.prototype.OnClickNovo = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
    };
    I_LanCon.prototype.OnFilesUploadStart = function (source, ev) {
        this.lblNomeArquivo.Text = this.replaceSpecialChars(this.fileUpload.FileName);
    };
    I_LanCon.prototype.replaceSpecialChars = function (str) {
        str = str.replace(/[ÀÁÂÃÄÅ]/, "A");
        str = str.replace(/[àáâãäå]/, "a");
        str = str.replace(/[ÈÉÊË]/, "E");
        str = str.replace(/[Ç]/, "C");
        str = str.replace(/[ç]/, "c");
        return str;
    };
    I_LanCon.prototype.LimparCampos = function () {
        this.lblNomeArquivo.Text = "";
        this.lblNomeArquivo.Visible = false;
        this.PathArquivo = "";
        this.Grid.PreencherGrid(null);
    };
    I_LanCon.prototype.OnClickGerar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        var arq;
        var nomeArquivo;
        arq = this.PathArquivo;
        if (String.IsNullOrWhiteSpace(this.PathArquivo)) {
            MostrarAlerta("Nenhum arquivo foi importado!");
            return;
        }
        if (this.cboEmpresa.GetValue() == null || this.cboEmpresa.GetValue() == 0) {
            MostrarAlerta("Informe a empresa!");
            return;
        }
        var parametros = {
            nomeArquivo: arq,
            empresa: this.cboEmpresa.GetValue(),
        };
        abrirEspera("");
        this.ExecutarFuncaoServerSideAsynch("PreencheLista", parametros, function (d) {
            fecharEspera();
            var lista = GetRetornoAJAX(d);
            if (lista.length > 0) {
                MostrarAlerta("Existem lançamentos com erro, não será possível importar o arquivo!");
                _this.Grid.PreencherGrid(lista);
            }
            else {
                MostrarMensagem("Lançamentos importados com sucesso!");
                _this.lblNomeArquivo.Text = "";
                _this.PathArquivo = "";
            }
        }, this.TratarErroFuncaoAsync, this);
    };
    I_LanCon.prototype.OnFileUploadCompleted = function (s, e) {
        try {
            this.PathArquivo = e.callbackData;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return I_LanCon;
}(MouraPageAngular));
var i_LanCon = new I_LanCon();
//# sourceMappingURL=I_LanCon.js.map