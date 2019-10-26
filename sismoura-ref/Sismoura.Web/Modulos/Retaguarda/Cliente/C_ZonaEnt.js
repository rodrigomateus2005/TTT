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
var C_ZonaEnt = /** @class */ (function (_super) {
    __extends(C_ZonaEnt, _super);
    function C_ZonaEnt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ZonaEnt.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ZonaEnt.prototype, "grdDiasSemana", {
        get: function () {
            return window['grdDiasSemana_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ZonaEnt.prototype, "lstDia", {
        get: function () {
            return window['lstDia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ZonaEnt.prototype, "mdDiasSemana", {
        get: function () {
            return window['mdDiasSemana_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ZonaEnt.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
            adicionarEventoMoura(this.Grid.ClickBotaoLinha, this.OnGridClicouBotao, this);
        }
    };
    C_ZonaEnt.prototype.OnGridSelecionouItem = function (s, e) {
        this.lstDia.LimparSelecao();
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_ZonaEnt.prototype.PreencherDias = function (dias) {
        var codigos = [];
        if (dias && dias.length > 0) {
            for (var x = 0; x < dias.length; x++) {
                codigos.push(dias[x].Dia_Semana.toString());
            }
            if (this.lstDia) {
                this.lstDia.SetValues(codigos);
            }
        }
        else {
            this.lstDia.LimparSelecao();
        }
    };
    C_ZonaEnt.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.GetScope().Entity.ZonasEntregaSemanal = [];
        for (var x = 0; x < this.lstDia.GetValues().length; x++) {
            var zona_entrega = {};
            zona_entrega.Dia_Semana = +this.lstDia.GetValues()[x];
            this.GetScope().Entity.ZonasEntregaSemanal.push(zona_entrega);
        }
        if (this.GetScope().Entity.ZonasEntregaSemanal.length <= 0) {
            MostrarAlerta("Selecione pelo menos um dia da semana");
            return false;
        }
        return true;
    };
    C_ZonaEnt.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.PreencherDias(Entity.ZonasEntregaSemanal);
    };
    C_ZonaEnt.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_ZonaEnt.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
        Entity.ZonasEntregaSemanal = [];
        this.PreencherDias(Entity.ZonasEntregaSemanal);
        this.RefreshAngular();
    };
    C_ZonaEnt.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_ZonaEnt.prototype.PreencherGrade = function () {
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
    C_ZonaEnt.prototype.OnGridClicouBotao = function (s, e) {
        if (e.commandName == "btnDias") {
            try {
                var codZonaEntrega = ("" + e.data['Codigo']).CNum();
                var parametros;
                parametros = {
                    codZonaEntrega: codZonaEntrega
                };
                var dias = this.ExecutarFuncaoServerSideSynch("GetDiasSemana", parametros);
                this.grdDiasSemana.PreencherGrid(dias);
                this.mdDiasSemana.Show();
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    return C_ZonaEnt;
}(MouraPageCadastroAngular));
var c_ZonaEnt = new C_ZonaEnt();
//# sourceMappingURL=C_ZonaEnt.js.map