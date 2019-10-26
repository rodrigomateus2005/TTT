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
var C_OrcAss = /** @class */ (function (_super) {
    __extends(C_OrcAss, _super);
    function C_OrcAss() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_OrcAss.prototype, "btnExportar", {
        get: function () {
            return window['btnExportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAss.prototype, "btnImportar", {
        get: function () {
            return window['btnImportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAss.prototype, "mdImportacao", {
        get: function () {
            return window['mdImportacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAss.prototype, "btnMdImportar", {
        get: function () {
            return window['btnMdImportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAss.prototype, "fUpload", {
        get: function () {
            return window['fUpload_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_OrcAss.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnExportar) {
            adicionarEventoMoura(this.btnExportar.Click, this.OnClickBotaoExportar, this);
        }
        if (this.btnImportar) {
            adicionarEventoMoura(this.btnImportar.Click, this.OnClickBotaoImportar, this);
        }
        if (this.btnMdImportar) {
            adicionarEventoMoura(this.btnMdImportar.Click, this.OnClickImportarModal, this);
        }
    };
    C_OrcAss.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    C_OrcAss.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        return true;
    };
    C_OrcAss.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        return true;
    };
    C_OrcAss.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        return true;
    };
    C_OrcAss.prototype.OnClickBotaoExportar = function () {
        var exportacao = [];
        var parametros = {
            isExportacao: true
        };
        abrirEspera();
        this.ExecutarFuncaoServerSideAsynch("Exportar", parametros, function (d) {
            exportacao = GetRetornoAJAX(d);
            fecharEspera();
            downloadArquivo(JSON.stringify(exportacao), "AssinaturasOrcamento.moura", "");
        }, function (e) {
            LogarException(e);
            fecharEspera();
        }, this);
    };
    C_OrcAss.prototype.OnClickBotaoImportar = function () {
        this.fUpload.Limpar();
        this.mdImportacao.Show();
    };
    C_OrcAss.prototype.OnClickImportarModal = function () {
        var _this = this;
        MsgBoxJS("Ao importar um arquivo todos os registros existentes no banco de dados serão sobrescritos. Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, function (d) {
            if (d.Resultado == MsgBoxResult.Yes) {
                _this.ExecutarImportacao();
            }
        });
    };
    C_OrcAss.prototype.ExecutarImportacao = function () {
        var _this = this;
        abrirEspera();
        var parametros = {
            codUsuario: ValoresSismoura.UsuarioLogado,
            nomeArq: this.fUpload.File.name
        };
        this.ExecutarFuncaoServerSideAsynch("ExecutarImportacao", parametros, function (d) {
            var msg = GetRetornoAJAX(d);
            _this.mdImportacao.Hide();
            _this.fUpload.Limpar();
            fecharEspera();
            MostrarMensagem(msg);
        }, function (e) {
            fecharEspera();
            _this.fUpload.Limpar();
            LogarException(e);
        }, this);
    };
    return C_OrcAss;
}(MouraPageCadastroAngular));
var c_OrcAss = new C_OrcAss();
//# sourceMappingURL=C_OrcAss.js.map