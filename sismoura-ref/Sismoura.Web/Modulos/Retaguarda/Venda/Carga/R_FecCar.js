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
var R_FecCar = /** @class */ (function (_super) {
    __extends(R_FecCar, _super);
    function R_FecCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_FecCar.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FecCar.prototype, "mdItens", {
        get: function () {
            return window['mdItens_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FecCar.prototype, "lblPedido", {
        get: function () {
            return window['lblPedido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FecCar.prototype, "gridItens", {
        get: function () {
            return window['gridItens_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FecCar.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_FecCar.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.documentos = this.GetDocumentos();
        this.LimparCampos();
    };
    R_FecCar.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.gridItens) {
            adicionarEventoMoura(this.gridItens.CellPrepared, this.CellPrepared, this);
        }
    };
    R_FecCar.prototype.GetDocumentos = function () {
        var retorno = [];
        try {
            retorno = this.ExecutarFuncaoServerSideSynch("GetDocumentos", {});
        }
        catch (ex) {
            LogarException(ex);
        }
        return retorno;
    };
    R_FecCar.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.TipoData = "1";
        this.Filtro.Periodo_Inicial = this.DataServidor();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_FecCar.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (this.ValidarCamposObrigatorios()) {
            try {
                parametros = {
                    tipoData: CNum(this.Filtro.TipoData),
                    dataInicial: this.Filtro.Periodo_Inicial,
                    dataFinal: this.Filtro.Periodo_Final
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                }, function (erro) {
                    fecharEspera();
                    LogarException(erro);
                }, this);
            }
            catch (ex) {
                fecharEspera();
                LogarException(ex);
            }
        }
    };
    R_FecCar.prototype.OnSelecionouLinha = function (s, e) {
        this.mdItens.Show();
        this.lblPedido.Text = CNum(e.data["Codigo"]).toString();
        this.PreencherGridItens(CNum(e.data["Codigo"]));
    };
    R_FecCar.prototype.PreencherGridItens = function (carga) {
        var _this = this;
        var parametros;
        try {
            parametros = {
                carga: carga
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGridItens", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.gridItens.PreencherGrid(retorno);
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    R_FecCar.prototype.CellPrepared = function (s, e) {
        var soma = 0;
        var campo;
        if (e.rowType == "data") {
            if (e.column["dataField"] == "Devolucoes") {
                for (var x = 0; x < this.documentos.length; x++) {
                    campo = replaceAll(this.documentos[x].Descricao, " ", "").replace(".", "");
                    soma += CNum(e.data[campo]);
                }
                if (soma > 0) {
                    e.data["Devolucoes"] = CNum(e.data["Valor_Original"]) -
                        CNum(e.data[replaceAll(this.documentos[0].Descricao, " ", "").replace(".", "")]) +
                        CNum(e.data[replaceAll(this.documentos[1].Descricao, " ", "").replace(".", "")]) +
                        CNum(e.data[replaceAll(this.documentos[2].Descricao, " ", "").replace(".", "")]) +
                        CNum(e.data[replaceAll(this.documentos[3].Descricao, " ", "").replace(".", "")]) +
                        CNum(e.data[replaceAll(this.documentos[4].Descricao, " ", "").replace(".", "")]);
                }
                else {
                    e.data["Devolucoes"] = 0;
                }
                e.data["Total"] = soma + CNum(e.data["Cancelado"]);
            }
        }
    };
    return R_FecCar;
}(MouraPageRelacaoAngular));
var r_FecCar = new R_FecCar();
//# sourceMappingURL=R_FecCar.js.map