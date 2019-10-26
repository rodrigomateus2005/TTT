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
var MouraReport = /** @class */ (function (_super) {
    __extends(MouraReport, _super);
    function MouraReport(id) {
        return _super.call(this, id) || this;
    }
    Object.defineProperty(MouraReport.prototype, "Modal", {
        get: function () {
            return window[this.ID + '_Modal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraReport.prototype, "botaoAbrir", {
        get: function () {
            return window[this.ID + '_botaoAbrir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraReport.prototype, "botaoEditar", {
        get: function () {
            return window[this.ID + '_botaoEditar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraReport.prototype, "botaoCancel", {
        get: function () {
            return window[this.ID + '_botaoCancel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraReport.prototype, "cboReport", {
        get: function () {
            return window[this.ID + '_cboReport_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraReport.prototype, "hdnPathReport", {
        get: function () {
            return $("#" + this.ID + "_hdnPathReport")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraReport.prototype, "PathRelatorios", {
        get: function () {
            if (String.IsNullOrWhiteSpace(this.hdnPathReport.value)) {
                this.hdnPathReport.value = "~/Report/Fixos/";
            }
            if (!this.hdnPathReport.value.endsWith("/")) {
                this.hdnPathReport.value += "/";
            }
            return this.hdnPathReport.value;
        },
        set: function (value) {
            this.hdnPathReport.value = value;
        },
        enumerable: true,
        configurable: true
    });
    MouraReport.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        this.PathRelatorios = "";
        if (this.botaoCancel) {
            adicionarEventoMoura(this.botaoCancel.Click, this.OnClickCancelar, this);
        }
        if (this.botaoEditar) {
            adicionarEventoMoura(this.botaoEditar.Click, this.OnClickEditar, this);
        }
        if (this.botaoAbrir) {
            adicionarEventoMoura(this.botaoAbrir.Click, this.OnClickAbrir, this);
        }
    };
    MouraReport.prototype.OnClickCancelar = function (s, e) {
        e.processOnServer = false;
        this.Modal.Hide();
    };
    MouraReport.prototype.OnClickEditar = function (s, e) {
        e.processOnServer = false;
        var parametros = "?caminho=" + this.PathRelatorios + "&nome=" + this.cboReport.GetValue();
        abrirTelaNovaAbaParametros(formataURLRelativa("ReportDesign.aspx" + parametros), []);
        this.Modal.Hide();
    };
    MouraReport.prototype.OnClickAbrir = function (s, e) {
        e.processOnServer = false;
        AbrirReportInternal(this.PathRelatorios, this.cboReport.GetValue());
        this.Modal.Hide();
    };
    MouraReport.prototype.Mostrar = function (path, arquivo) {
        this.PathRelatorios = path;
        this.cboReport.ClearItems();
        this.cboReport.AddItem(arquivo, arquivo, "");
        this.cboReport.SetSelectedIndex(0);
        this.Modal.Show();
    };
    return MouraReport;
}(MouraControl));
//# sourceMappingURL=MouraReport.js.map