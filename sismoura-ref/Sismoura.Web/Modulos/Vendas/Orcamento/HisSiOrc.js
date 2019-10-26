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
var HisSiOrc = /** @class */ (function (_super) {
    __extends(HisSiOrc, _super);
    function HisSiOrc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HisSiOrc.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HisSiOrc.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HisSiOrc.prototype, "txtCodigoOrcamento", {
        get: function () {
            return window["txtCodigoOrcamento_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    HisSiOrc.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    HisSiOrc.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtCodigoOrcamento)
            adicionarEventoMoura(this.txtCodigoOrcamento.LostFocus, this.OnGetOrcamento, this);
    };
    //
    HisSiOrc.prototype.OnGetOrcamento = function () {
        var _this = this;
        this.Filtro.Cliente = "";
        this.Filtro.Data = "";
        this.Filtro.Valor = "";
        if (CNum(this.txtCodigoOrcamento.GetText())) {
            try {
                var parametros = {
                    codOrcamento: CNum(this.Filtro.Orcamento)
                };
                this.ExecutarFuncaoServerSideAsynch("GetCodOrcamento", parametros, function (d) {
                    try {
                        var retorno = GetRetornoAJAX(d);
                        _this.Filtro.Cliente = retorno.ClienteText;
                        _this.Filtro.Data = retorno.DataText;
                        _this.Filtro.Valor = retorno.ValorText;
                        _this.RefreshAngular();
                    }
                    catch (ex) {
                        LogarException(ex);
                    }
                }, function (erro) {
                    LogarException(erro);
                }, this);
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    //
    HisSiOrc.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Orcamento = 0;
        this.Filtro.Cliente = "";
        this.Filtro.Data = "";
        this.Filtro.Valor = "";
        this.grid.PreencherGrid(null);
        this.AccordionFiltros.SetExpanded(true);
        this.RefreshAngular();
    };
    HisSiOrc.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            abrirEspera();
            parametros = {
                codOrcamento: CNum(this.Filtro.Orcamento)
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    _this.AccordionFiltros.SetExpanded(false);
                }
                catch (ex) {
                    LogarException(ex);
                }
                finally {
                    fecharEspera();
                }
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
    return HisSiOrc;
}(MouraPageRelacaoAngular));
var hisSiOrc = new HisSiOrc();
//# sourceMappingURL=HisSiOrc.js.map