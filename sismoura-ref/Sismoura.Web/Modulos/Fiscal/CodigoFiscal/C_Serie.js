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
var C_Serie = /** @class */ (function (_super) {
    __extends(C_Serie, _super);
    function C_Serie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Serie.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Serie.prototype, "cboAmbiente", {
        get: function () {
            return window['cboAmbiente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Serie.prototype, "cboModeloImpressao", {
        get: function () {
            return window['cboModeloImpressao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Serie.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Serie.prototype, "txtUltimaNotaEmitida", {
        get: function () {
            return window['txtUltimaNotaEmitida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Serie.prototype, "gridNotasPorEmpresa", {
        get: function () {
            return window['gridNotasPorEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Serie.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Serie.prototype, "SeriesEmpresa", {
        get: function () {
            if (!this.GetScope()["SeriesEmpresa"]) {
                this.GetScope()["SeriesEmpresa"] = {};
            }
            return this.GetScope()["SeriesEmpresa"];
        },
        set: function (value) {
            this.GetScope()["SeriesEmpresa"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Serie.prototype, "SerieEmpresa", {
        get: function () {
            return this.GetScope()["SerieEmpresa"];
        },
        set: function (value) {
            this.GetScope()["SerieEmpresa"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_Serie.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.gridNotasPorEmpresa) {
            adicionarEventoMoura(this.gridNotasPorEmpresa.Grid.SelecionouLinha, this.OnGridSeriesSelecionouItem, this);
            adicionarEventoMoura(this.gridNotasPorEmpresa.Validando, this.OnValidando, this);
        }
    };
    C_Serie.prototype.OnGridSeriesSelecionouItem = function (s, e) {
        this.SerieEmpresa.Empresa = e.data.Empresa;
        this.SerieEmpresa.Ultima_Nota = e.data.Ultima_Nota;
        this.RefreshAngular();
    };
    C_Serie.prototype.OnValidando = function (s, e) {
        try {
            var seriesAnteriores = this.gridNotasPorEmpresa.Grid.DataSource;
            var serieJaExiste_1 = false;
            e.item.Modelo = this.EntityTela.Modelo;
            e.item.Serie = this.EntityTela.Serie_Nfp;
            seriesAnteriores.forEach(function (serie) {
                if (serie.Empresa == e.item.Empresa && serie.Modelo == e.item.Modelo &&
                    serie.Serie == e.item.Serie) {
                    serieJaExiste_1 = true;
                }
            });
            if (!this.EntityTela.Modelo) {
                MostrarAlerta('Preencha corretamento o campo: Modelo da Nota Fiscal');
                e.cancelar = true;
                return;
            }
            if (!this.EntityTela.Serie_Nfp) {
                MostrarAlerta('Preencha corretamente o campo: Série NF');
                e.cancelar = true;
                return;
            }
            if (!e.item.Empresa) {
                MostrarAlerta('Preencha corretamento o campo: Empresa');
                e.cancelar = true;
                return;
            }
            if (!e.item.Ultima_Nota) {
                MostrarAlerta('Preencha corretamento o campo: Última Nota Emitida');
                e.cancelar = true;
                return;
            }
            if (serieJaExiste_1) {
                e.cancelar = true;
                MostrarAlerta('Empresa já cadastrada');
                this.gridNotasPorEmpresa.btnNovo.DoClick();
                return;
            }
            e.item.DescEmpresa = this.cboEmpresa.GetText();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Serie.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_Serie.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
        if (!this.GetScope().MudouModelo) {
            this.GetScope().MudouModelo = $.proxy(this.MudouModelo, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Modelo; }, this.GetScope().MudouModelo);
        }
    };
    C_Serie.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.EntityTela.Ambiente == undefined && !this.cboAmbiente.Visible) {
            this.EntityTela.Ambiente = "P";
        }
        this.EntityTela.Data_carga = new Date();
        this.EntityTela.SeriesEmpresa = this.SeriesEmpresa;
        return true;
    };
    C_Serie.prototype.MudouModelo = function () {
        var modelo = this.EntityTela.Modelo;
        if (modelo == 1) {
            this.cboModeloImpressao.Visible = true;
        }
        else {
            this.cboModeloImpressao.Visible = false;
        }
        if (modelo == 55 || modelo == 58) {
            this.cboAmbiente.Visible = true;
        }
        else {
            this.cboAmbiente.Visible = false;
        }
        this.RefreshAngular();
    };
    C_Serie.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
        Entity.Codigo = 0;
        this.cboEmpresa.SetValue(-1);
        this.txtUltimaNotaEmitida.SetText('');
        Entity.Modelo = -1;
        this.SeriesEmpresa = [];
        this.cboAmbiente.Visible = false;
        this.cboModeloImpressao.Visible = false;
        this.RefreshAngular();
    };
    C_Serie.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.GetSeriesEmpresa(this.EntityTela);
        this.SeriesEmpresa = this.EntityTela.SeriesEmpresa;
        this.PreencherGrade();
        return true;
    };
    C_Serie.prototype.OnDepoisBuscarExistente = function (Entidade) {
        try {
            _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
            this.cboEmpresa.SetValue(-1);
            this.txtUltimaNotaEmitida.SetText('');
            this.GetSeriesEmpresa(Entidade);
            this.SeriesEmpresa = Entidade.SeriesEmpresa;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Serie.prototype.GetSeriesEmpresa = function (Entidade) {
        try {
            var seriesEmpresa = void 0;
            var parametros = void 0;
            parametros = {
                CodigoSerie: Entidade.Codigo,
                Modelo: Entidade.Modelo,
                Serie: Entidade.Serie_Nfp
            };
            seriesEmpresa = this.ExecutarFuncaoServerSideSynch('GetSeriesEmpresa', parametros);
            Entidade.SeriesEmpresa = seriesEmpresa;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Serie.prototype.OnAntesDeletar = function () {
        var empresasCadastradas;
        empresasCadastradas = this.gridNotasPorEmpresa.Grid.DataSource.filter(function (empresa) { return empresa.Codigo; });
        if (empresasCadastradas.length > 0) {
            MostrarAlerta('Não será possível excluir esta série pois ela está vinculada a uma nota fiscal!');
            return false;
        }
        return _super.prototype.OnDepoisDeletar.call(this);
    };
    C_Serie.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_Serie;
}(MouraPageCadastroAngular));
var c_Serie = new C_Serie();
//# sourceMappingURL=C_Serie.js.map