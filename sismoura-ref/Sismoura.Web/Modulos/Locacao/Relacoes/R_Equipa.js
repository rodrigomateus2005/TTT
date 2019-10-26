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
var R_Equipa = /** @class */ (function (_super) {
    __extends(R_Equipa, _super);
    function R_Equipa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Equipa.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Equipa.prototype, "txtGrupo", {
        get: function () {
            return window['txtGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Equipa.prototype, "txtControle", {
        get: function () {
            return window['txtControle_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Equipa.prototype, "chkInativo", {
        get: function () {
            return window['chkInativo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Equipa.prototype, "lstSituacao", {
        get: function () {
            return window['lstSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Equipa.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Equipa.prototype, "accRelacao", {
        get: function () {
            return window['accRelacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Equipa.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Equipa.prototype, "lstDeposito", {
        get: function () {
            return window["lstDeposito_Object"];
        },
        enumerable: true,
        configurable: true
    });
    R_Equipa.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.OnGridCellPrepared, this);
        }
        if (this.lstEmpresa) {
            adicionarEventoMoura(this.lstEmpresa.SelectionChanged, this.AlteraDeposito, this);
        }
    };
    R_Equipa.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_Equipa.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtGrupo.Limpar();
        this.txtControle.Limpar();
        this.chkInativo.Check.checked = false;
        this.lstSituacao.SetValue('1');
        this.grid.PreencherGrid(null);
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
    };
    R_Equipa.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (this.lstEmpresa.GetValues().length <= 0) {
            MostrarAlerta("Preencha o campo corretamente: Empresa.");
            return false;
        }
        var parametros;
        var equipamentos;
        parametros = {
            codGrupo: this.txtGrupo.GetText().CNum(),
            codControle: this.txtControle.GetText(),
            inativo: this.chkInativo.Check.checked,
            situacaoEquipamento: this.lstSituacao.GetValue(),
            empresas: this.lstEmpresa.GetValuesRelacao(),
            depositos: this.lstDeposito.GetValuesRelacao()
        };
        equipamentos = this.ExecutarFuncaoServerSideSynch("RelacaoEquipamentos", parametros);
        this.grid.PreencherGrid(equipamentos);
        this.accRelacao.SetExpanded(false);
        return true;
    };
    R_Equipa.prototype.OnGridCellPrepared = function (s, e) {
        try {
            //var corFonte: string = ;
            if (e.rowType == "data" && e.data != null) {
                if (e.data.Situacao_Equipamento == 'Locado' && e.column.dataField == 'Situacao_Equipamento') {
                    e.cellElement.css("color", "#cc0000");
                }
            }
            if (e.rowType == "data" && e.data != null) {
                if (e.data.Situacao_Equipamento == 'Disponível' && e.column.dataField == 'Situacao_Equipamento') {
                    e.cellElement.css("color", "#00cc00");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Equipa.prototype.AlteraDeposito = function () {
        var parametros;
        parametros = {
            codEmpresa: this.lstEmpresa.GetValues()
        };
        var itens;
        itens = this.ExecutarFuncaoServerSideSynch("PreencherComboDeposito", parametros);
        if (this.lstDeposito) {
            this.lstDeposito.RemoverTodosItens();
            for (var x = 0; x < itens.length; x++) {
                this.lstDeposito.AdicionarItem(itens[x].Descricao, itens[x].Codigo);
            }
        }
    };
    return R_Equipa;
}(MouraPageRelacaoAngular));
var r_Equipa = new R_Equipa();
//# sourceMappingURL=R_Equipa.js.map