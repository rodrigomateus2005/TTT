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
var C_Marca = /** @class */ (function (_super) {
    __extends(C_Marca, _super);
    function C_Marca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Marca.prototype, "chkInativo", {
        get: function () {
            return window["chkInativo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Marca.prototype, "chkPadrao", {
        get: function () {
            return window["chkPadrao_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Marca.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Marca.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
            adicionarEventoMoura(this.Grid.CellPrepared, this.OnGridCellPrepared, this);
        }
        //this.AdicionarEventosPagina();
        //this.VerificaCheckBoxAutonomo();
    };
    //protected OnCheckBoxSelectedIndexChangedInativo() {
    //    this.VerificaCheckBoxAutonomo();
    //}
    //protected OnCheckBoxSelectedIndexChangedPadrao() {
    //    this.VerificaCheckBoxAutonomo();
    //}
    //    protected VerificaCheckBoxAutonomo() {
    //        if (this.chkInativo.Check.checked == true) {
    //            this.chkPadrao.Check.disabled = true;
    //        } else {
    //            this.chkPadrao.Check.disabled = false;
    //        }
    //        if (this.chkPadrao.Check.checked == true) {
    //            this.chkInativo.Check.disabled = true;
    //        }
    //        else {
    //            this.chkInativo.Check.disabled = false;
    //        }
    //}
    //    protected AdicionarEventosPagina() {
    //        if (this.chkInativo.Check) {
    //            adicionarEventoJQuery(this.chkInativo.Check, "change", this.OnCheckBoxSelectedIndexChangedInativo, this);
    //        }
    //        if (this.chkPadrao.Check) {
    //            adicionarEventoJQuery(this.chkPadrao.Check, "change", this.OnCheckBoxSelectedIndexChangedPadrao, this);
    //        }
    //    }
    C_Marca.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_Marca.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
        this.LimparCampos(this.EntityTela);
        if (!this.GetScope().MudouInativo) {
            this.GetScope().MudouInativo = $.proxy(this.MudouInativo, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Inativo; }, this.GetScope().MudouInativo);
        }
        if (!this.GetScope().MudouPadrao) {
            this.GetScope().MudouPadrao = $.proxy(this.MudouPadrao, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Padrao; }, this.GetScope().MudouPadrao);
        }
    };
    C_Marca.prototype.MudouInativo = function () {
        if (this.EntityTela.Inativo == true) {
            this.chkPadrao.Check.disabled = true;
        }
        else if (this.EntityTela.Inativo == false) {
            this.chkPadrao.Check.disabled = false;
        }
    };
    C_Marca.prototype.MudouPadrao = function () {
        if (this.EntityTela.Padrao == true) {
            this.chkInativo.Check.disabled = true;
        }
        else if (this.EntityTela.Padrao == false) {
            this.chkInativo.Check.disabled = false;
        }
    };
    C_Marca.prototype.OnDepoisLimpar = function (Entity) {
        this.LimparCampos(Entity);
        this.RefreshAngular();
        this.PreencherGrade();
    };
    C_Marca.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Marca.prototype.PreencherGrade = function () {
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
    C_Marca.prototype.OnGridCellPrepared = function (s, e) {
        try {
            //var corFonte: string = ;
            if (e.rowType == "data" && e.data != null) {
                if (e.data.Inativo == "S" && e.data.Padrao == "N") {
                    e.cellElement.css("color", "#FF0000");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Marca.prototype.LimparCampos = function (Entity) {
        Entity.Data_Carga = this.DataServidor();
        this.chkInativo.Check.disabled = false;
        this.chkPadrao.Check.disabled = false;
        this.RefreshAngular();
    };
    return C_Marca;
}(MouraPageCadastroAngular));
var c_Marca = new C_Marca();
//# sourceMappingURL=C_Marca.js.map