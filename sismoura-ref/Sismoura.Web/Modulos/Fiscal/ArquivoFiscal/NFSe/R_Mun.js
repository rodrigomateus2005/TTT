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
var R_Mun = /** @class */ (function (_super) {
    __extends(R_Mun, _super);
    function R_Mun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Mun.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Mun.prototype, "cboEstado", {
        get: function () {
            return window['cboEstado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Mun.prototype, "cboHomologado", {
        get: function () {
            return window['cboHomologado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Mun.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Mun.prototype, "mdCidade", {
        get: function () {
            return window['mdCidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Mun.prototype, "lblNome", {
        get: function () {
            return window['lblNome_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Mun.prototype, "llbCodIBGE", {
        get: function () {
            return window['llbCodIBGE_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Mun.prototype, "lblModelo", {
        get: function () {
            return window['lblModelo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Mun.prototype, "lblProvedor", {
        get: function () {
            return window['lblProvedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Mun.prototype, "lblWSProducao", {
        get: function () {
            return window['lblWSProducao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Mun.prototype, "lblWSHomologacao", {
        get: function () {
            return window['lblWSHomologacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Mun.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    R_Mun.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.cboEstado.SetSelectedIndex(0);
        this.cboHomologado.SetSelectedIndex(0);
    };
    R_Mun.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {
                estado: this.cboEstado.GetText(),
                homologado: this.cboHomologado.GetText()
            };
            var municipios = this.ExecutarFuncaoServerSideSynch("GetMunicipios", parametros);
            this.grid.PreencherGrid(municipios);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Mun.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.cboEstado.SetValue(0);
        this.cboHomologado.SetValue(0);
        this.grid.PreencherGrid(null);
    };
    R_Mun.prototype.OnGridSelecionouItem = function (s, e) {
        this.lblNome.Text = e.data.Municipio + " - " + e.data.UF;
        this.llbCodIBGE.Text = e.data.Codigo_Municipio_IBGE;
        this.lblModelo.Text = e.data.Modelo;
        this.lblProvedor.Text = e.data.Provedor;
        this.lblWSProducao.Text = e.data.WS_Producao;
        this.lblWSHomologacao.Text = e.data.WS_Homologacao;
        this.mdCidade.Show();
    };
    return R_Mun;
}(MouraPageRelacaoAngular));
var r_Mun = new R_Mun();
//# sourceMappingURL=R_Mun.js.map