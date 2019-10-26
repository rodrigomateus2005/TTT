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
var G_SATF = /** @class */ (function (_super) {
    __extends(G_SATF, _super);
    function G_SATF() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(G_SATF.prototype, "optTipo", {
        get: function () {
            return window['optTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SATF.prototype, "txtMesAno", {
        get: function () {
            return window['txtMesAno_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SATF.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SATF.prototype, "btnDownload", {
        get: function () {
            return window['btnDownload_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SATF.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    G_SATF.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.optTipo) {
            adicionarEventoMoura(this.optTipo.SelectionChanged, this.OnSelectionChanged, this);
            this.optTipo.SetValue("P");
        }
        if (this.btnDownload) {
            adicionarEventoMoura(this.btnDownload.Click, this.OnClickDownload, this);
        }
    };
    G_SATF.prototype.OnClickDownload = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        var dataInicial;
        var dataFinal;
        if (this.optTipo.GetValue() == "M") {
            dataInicial = this.txtMesAno.GetDate();
            dataFinal = this.txtMesAno.GetDate();
        }
        else {
            dataInicial = this.txtPeriodo.textBoxCalendarioInicio.GetDate();
            dataFinal = this.txtPeriodo.textBoxCalendarioFim.GetDate();
        }
        var parametros = {
            Empresas: this.lstEmpresa.GetValues(),
            Tipo: this.optTipo.GetValue(),
            dataInicial: dataInicial,
            dataFinal: dataFinal
        };
        abrirEspera("");
        this.ExecutarFuncaoServerSideAsynch("FazerDownload", parametros, function (d) {
            fecharEspera();
            var retorno = GetRetornoAJAX(d);
            if (retorno) {
                _this.FazerDownload();
            }
            else {
                MostrarAlerta("Nenhuma venda encontrada neste período.");
            }
        }, this.TratarErroFuncaoAsync, this);
    };
    G_SATF.prototype.FazerDownload = function () {
        var parametrosTela = [];
        abrirTelaNovaAbaParametros(formataURLRelativa("Modulos/Geral/AbrirArquivo.aspx"), parametrosTela);
    };
    G_SATF.prototype.OnSelectionChanged = function () {
        if (this.optTipo.GetValue() == "M") {
            this.txtMesAno.Visible = true;
            this.txtMesAno.Obrigatorio = true;
            this.txtPeriodo.Visible = false;
            this.txtPeriodo.Obrigatorio = false;
        }
        else {
            this.txtMesAno.Visible = false;
            this.txtMesAno.Obrigatorio = false;
            this.txtPeriodo.Visible = true;
            this.txtPeriodo.Obrigatorio = true;
        }
    };
    return G_SATF;
}(MouraPageAngular));
var g_SATF = new G_SATF();
//# sourceMappingURL=G_SAFT.js.map