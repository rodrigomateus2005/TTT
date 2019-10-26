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
var R_ComEst = /** @class */ (function (_super) {
    __extends(R_ComEst, _super);
    function R_ComEst() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ComEst.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComEst.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComEst.prototype, "txtGrupo", {
        get: function () {
            return window['txtGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComEst.prototype, "txtSubGrupo", {
        get: function () {
            return window['txtSubGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComEst.prototype, "txtLinha", {
        get: function () {
            return window['txtLinha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComEst.prototype, "chkEstoque", {
        get: function () {
            return window['chkEstoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComEst.prototype, "chkInativo", {
        get: function () {
            return window['chkInativo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComEst.prototype, "optOpcao", {
        get: function () {
            return window['optOpcao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComEst.prototype, "txtDias", {
        get: function () {
            return window['txtDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComEst.prototype, "lblItens", {
        get: function () {
            return window['lblItens_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_ComEst.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_ComEst.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_ComEst.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        var ValorParameter;
        try {
            parametros = {
                Grupo: this.txtGrupo.GetText().CNum(),
                SubGrupo: this.txtSubGrupo.GetText().CNum(),
                Linha: this.txtLinha.GetText().CNum(),
                Estoque: this.chkEstoque.Checked,
                Inativo: this.chkInativo.Checked,
                Dias: this.txtDias.GetText().CNum(),
                Opcao: this.optOpcao.GetValue(),
                Parametro: this.ParametrosTela.Parametro.CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            if (retorno.length > 0) {
                this.lblItens.SetTextLabelControl("Itens: " + retorno.length);
                var x;
                var itens = retorno;
                if (!itens) {
                    itens = [];
                }
                for (x = 0; x < itens.length; x++) {
                    itens[x].Custo_Total = itens[x].Preco_Custo * itens[x].Qtde;
                    parametros = {
                        codigo: itens[x].Codigo
                    };
                    var retorno = this.ExecutarFuncaoServerSideSynch("GetbyDataMovimentacao", parametros);
                    if (retorno.length > 0) {
                        itens[x].Ultima_Contagem = retorno[0].Data;
                    }
                }
                this.Grid.PreencherGrid(itens);
            }
            else {
                this.Grid.PreencherGrid(null);
                this.lblItens.SetTextLabelControl("Itens: 0");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_ComEst.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtDias.SetText("");
        this.txtGrupo.Limpar();
        this.txtLinha.Limpar();
        this.txtSubGrupo.Limpar();
        this.chkEstoque.Checked = false;
        this.chkInativo.Checked = false;
        this.optOpcao.SetValue("0");
        this.lblItens.SetTextLabelControl("Itens: 0");
        this.Grid.PreencherGrid(null);
        this.txtDias.Focus();
    };
    return R_ComEst;
}(MouraPageRelacaoAngular));
var r_ComEst = new R_ComEst();
//# sourceMappingURL=R_ComEst.js.map