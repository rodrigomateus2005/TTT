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
var R_EquiObr = /** @class */ (function (_super) {
    __extends(R_EquiObr, _super);
    function R_EquiObr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_EquiObr.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EquiObr.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EquiObr.prototype, "txtCLiente", {
        get: function () {
            return window['txtCLiente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EquiObr.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EquiObr.prototype, "txtObra", {
        get: function () {
            return window['txtObra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EquiObr.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EquiObr.prototype, "accRelacao", {
        get: function () {
            return window['accRelacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_EquiObr.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.Grid.ClickBotaoLinha, this.OnGridClickBotaoLinha, this);
        }
        this.LimparCampos();
    };
    R_EquiObr.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtPeriodo.textBoxCalendarioInicio.SetDate(new Date());
        this.txtPeriodo.textBoxCalendarioFim.SetDate(new Date());
        this.txtCLiente.Limpar();
        this.txtProduto.Limpar();
        this.txtObra.Limpar();
        this.grid.Grid.PreencherGrid([]);
    };
    R_EquiObr.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (this.txtPeriodo.textBoxCalendarioInicio.GetValue() == null && this.txtPeriodo.textBoxCalendarioFim.GetValue() == null) {
            MostrarAlerta("Preencha o campo corretamente: Período");
            return false;
        }
        parametros = {
            codCliente: this.txtCLiente.GetText().CNum(),
            codProduto: this.txtProduto.GetText().CNum(),
            codObra: this.txtObra.GetText().CNum(),
            dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetValue(),
            dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetValue()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("RelacaoObras", parametros);
        this.grid.Grid.ClickBotaoLinha;
        this.grid.Grid.PreencherGrid(retorno);
        return true;
    };
    R_EquiObr.prototype.OnGridClickBotaoLinha = function (s, e) {
        try {
            if (!e.data) {
                return;
            }
            if (e.commandName === "Locacao") {
                var parametros = [];
                if (CNum(e.data.Id) > 0) {
                    parametros.push("Id=" + CNum(e.data.Id));
                    this.dlgTelaModal.AbrirTelaModal(formataURLRelativa(URLTela.CadastroLocacao), parametros, "");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_EquiObr;
}(MouraPageRelacaoAngular));
var r_EquiObr = new R_EquiObr();
//# sourceMappingURL=R_EquiObr.js.map