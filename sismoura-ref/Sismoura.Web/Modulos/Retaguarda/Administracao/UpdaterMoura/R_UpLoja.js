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
var R_UpLoja = /** @class */ (function (_super) {
    __extends(R_UpLoja, _super);
    function R_UpLoja() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_UpLoja.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_UpLoja.prototype, "grid", {
        get: function () { return window['grid_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_UpLoja.prototype, "txtPeriodo", {
        get: function () { return window['txtPeriodo_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_UpLoja.prototype, "lstEmpresa", {
        get: function () { return window['lstEmpresa_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_UpLoja.prototype, "cboPerfilLoja", {
        get: function () { return window['cboPerfilLoja_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_UpLoja.prototype, "cboTipoAtualizacao", {
        get: function () { return window['cboTipoAtualizacao_Object']; },
        enumerable: true,
        configurable: true
    });
    R_UpLoja.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_UpLoja.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.onCellPrepared, this);
        }
    };
    R_UpLoja.prototype.onCellPrepared = function (args, event) {
        //console.log(event);
        var quantidadeLojasAtualizadas = 0;
        if (event.rowType == "group") {
            if (event.row.data) {
                var itens = event.row.data;
                var itens = itens.collapsedItems;
                if (!itens) {
                    return;
                }
                var x;
                for (x = 0; x <= itens.length; x++) {
                    var item = itens[0];
                    if (item['Data_Atualizado'] != null) {
                        //event.cellElement.css("color", "blue");
                        quantidadeLojasAtualizadas = quantidadeLojasAtualizadas + 1;
                    }
                }
                if (quantidadeLojasAtualizadas - 1 == itens.length) {
                    event.cellElement.css("color", "green");
                }
                else {
                    event.cellElement.css("color", "red");
                }
            }
        }
        else if (event.rowType == "data") {
            if (!event.row.data['Data_Atualizado']) {
                event.cellElement.css("color", "red");
            }
            else {
                event.cellElement.css("color", "green");
            }
        }
    };
    R_UpLoja.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (this.grid) {
            this.grid.PreencherGrid(null);
        }
        if (this.txtPeriodo) {
            this.txtPeriodo.Iniciar();
        }
        if (this.lstEmpresa) {
            this.lstEmpresa.LimparSelecao;
        }
        if (this.cboPerfilLoja) {
            this.cboPerfilLoja.LimparSelecao;
        }
        if (this.cboTipoAtualizacao) {
            this.cboTipoAtualizacao.LimparSelecao;
        }
    };
    R_UpLoja.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                empresas: this.lstEmpresa.GetValuesRelacao(),
                perfil: this.cboPerfilLoja.GetValue(),
                tipoAtualizacao: this.cboTipoAtualizacao.GetValue(),
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("getAtualizacoes", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    _this.grid.GroupBy("Empresa");
                    _this.grid.CollapseAll();
                    //this.grid.CellPrepared
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    return R_UpLoja;
}(MouraPageRelacaoAngular));
var r_UpLoja = new R_UpLoja;
//# sourceMappingURL=R_UpLoja.js.map