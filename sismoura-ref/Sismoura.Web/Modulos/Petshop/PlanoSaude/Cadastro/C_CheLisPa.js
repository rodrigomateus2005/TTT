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
var C_CheLisPa = /** @class */ (function (_super) {
    __extends(C_CheLisPa, _super);
    function C_CheLisPa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CheLisPa.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CheLisPa.prototype, "grdItens", {
        get: function () {
            return window['grdItens_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CheLisPa.prototype, "txtTipoTriagem", {
        get: function () {
            return window['txtTipoTriagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CheLisPa.prototype, "cboScore", {
        get: function () {
            return window['cboScore_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CheLisPa.prototype, "Item", {
        get: function () {
            if (!this.GetScope()["Item"]) {
                this.GetScope()["Item"] = {};
            }
            return this.GetScope()["Item"];
        },
        set: function (value) {
            this.GetScope()["Item"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CheLisPa.prototype, "Itens", {
        get: function () {
            if (!this.GetScope()["Itens"]) {
                this.GetScope()["Itens"] = [];
            }
            return this.GetScope()["Itens"];
        },
        set: function (value) {
            this.GetScope()["Itens"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_CheLisPa.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.grdItens) {
            adicionarEventoMoura(this.grdItens.Validando, this.OnValidando, this);
        }
    };
    C_CheLisPa.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.OnDepoisLimpar(this.EntityTela);
    };
    C_CheLisPa.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Itens = this.Itens;
        return true;
    };
    C_CheLisPa.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherEntidade(this.EntityTela.Codigo + "");
        return true;
    };
    C_CheLisPa.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        this.RefreshAngular();
    };
    C_CheLisPa.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        this.PreencherGrade();
        //this.Itens = Entidade.Itens;
        this.PreencherItens();
        this.RefreshAngular();
    };
    C_CheLisPa.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.PreencherGrade();
        this.Itens = [];
        this.RefreshAngular();
    };
    C_CheLisPa.prototype.OnValidando = function (s, e) {
        if (e.index < 0) {
            if (this.Item.Descricao == "") {
                MostrarAlerta("Informe a descrição do item");
                e.cancelar = true;
                return;
            }
            if (!this.Item.Tipo_Triagem) {
                MostrarAlerta("Informe o tipo de triagem");
                e.cancelar = true;
                return;
            }
            //if (!this.Item.TipoTriagemEntity) {
            //    this.Item.TipoTriagemEntity = <any>{};
            //}
            if (this.txtTipoTriagem) {
                //this.Item.TipoTriagemEntity.Descricao = this.txtTipoTriagem.GetResultado();
                this.Item.Tipo_Triagem_Text = this.txtTipoTriagem.GetResultado();
            }
            //if (!this.Item.ScoreEntity) {
            //    this.Item.ScoreEntity = <any>{};
            //}
            if (this.cboScore) {
                //this.Item.ScoreEntity.Descricao = this.cboScore.GetText();
                this.Item.Score_Text = this.cboScore.GetText();
            }
            this.Item.Contador = this.Itens.Max("Contador") + 1;
            e.item = this.Item;
        }
        this.RefreshAngular();
    };
    C_CheLisPa.prototype.PreencherItens = function () {
        try {
            var parametros;
            parametros = {
                codigo: this.EntityTela.Codigo
            };
            this.Itens = this.ExecutarFuncaoServerSideSynch("GetItensCadastrados", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CheLisPa.prototype.PreencherGrade = function () {
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
    return C_CheLisPa;
}(MouraPageCadastroAngular));
var c_CheLisPa = new C_CheLisPa();
//# sourceMappingURL=C_CheLisPa.js.map