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
var R_HisCRe = /** @class */ (function (_super) {
    __extends(R_HisCRe, _super);
    function R_HisCRe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_HisCRe.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCRe.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCRe.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCRe.prototype, "txtVendedor", {
        get: function () {
            return window['txtVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCRe.prototype, "txtDocumento", {
        get: function () {
            return window['txtDocumento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCRe.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_HisCRe.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    Object.defineProperty(R_HisCRe.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_HisCRe.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_HisCRe.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        try {
            var parametros = void 0;
            var dataInicial = this.txtPeriodo.textBoxCalendarioInicio.GetDate();
            var dataFinal = this.txtPeriodo.textBoxCalendarioFim.GetDate();
            var documentos = [];
            for (var x = 0; x < this.txtDocumento.lstItens.Lista.childElementCount; x++) {
                documentos.push(this.txtDocumento.lstItens.Lista[x].text);
            }
            parametros = {
                dataInicial: dataInicial,
                dataFinal: dataFinal,
                codVendedor: this.txtVendedor.GetText().CNum(),
                codCliente: this.txtCliente.GetText().CNum(),
                documento: documentos
            };
            var resposta = this.ExecutarFuncaoServerSideSynch('GetRelacaoConsigResumidaNoPeriodo', parametros);
            this.Grid.PreencherGrid(resposta);
            this.accCadastro.SetExpanded(false);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_HisCRe.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtCliente.Limpar();
        this.txtPeriodo.IniciarDataAtual();
        this.txtVendedor.Limpar();
        this.txtDocumento.Limpar();
        this.Grid.PreencherGrid(null);
        this.Grid.ExibirLinhaFiltro = true;
    };
    return R_HisCRe;
}(MouraPageRelacaoAngular));
var r_HisCRe = new R_HisCRe();
//# sourceMappingURL=R_HisCRe.js.map