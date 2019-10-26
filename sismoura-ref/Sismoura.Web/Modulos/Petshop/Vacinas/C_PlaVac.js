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
var C_PlaVac = /** @class */ (function (_super) {
    __extends(C_PlaVac, _super);
    function C_PlaVac() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_PlaVac.prototype, "txtServico", {
        get: function () {
            return window['txtServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlaVac.prototype, "txtDose", {
        get: function () {
            return window['txtDose_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlaVac.prototype, "txtDias", {
        get: function () {
            return window['txtDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlaVac.prototype, "Servico", {
        get: function () {
            var that = this.GetScope()["Servico"]; //Estava produto
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Servico"] = value; //ATV 902243: Estava produto
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlaVac.prototype, "Servicos", {
        get: function () {
            return this.GetScope()["Servicos"]; //ATV 902243: Estava produtos
        },
        set: function (value) {
            this.GetScope()["Servicos"] = value; //ATV 902243: Estava produtos
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlaVac.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_PlaVac.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.Validando, this.OnValidando, this);
            adicionarEventoMoura(this.Grid.LimpouItem, this.LimparServico, this);
        }
    };
    C_PlaVac.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouDoseAnual) {
            var that = this;
            this.LimparServico();
            this.GetScope().MudouDoseAnual = $.proxy(this.MudouDoseAnual, this);
            this.GetScope().$watch(function (scope) { return that.Servico.Anual; }, this.GetScope().MudouDoseAnual);
        }
        if (!this.GetScope().MudouDoseSemestral) {
            var that = this;
            this.LimparServico();
            this.GetScope().MudouDoseSemestral = $.proxy(this.MudouDoseSemestral, this);
            this.GetScope().$watch(function (scope) { return that.Servico.Semestral; }, this.GetScope().MudouDoseSemestral);
        }
        this.OnDepoisLimpar(this.GetScope().Entity);
    };
    C_PlaVac.prototype.MudouDoseAnual = function () {
        if (this.Servico.Anual) {
            this.Servico.Semestral = false;
        }
    };
    C_PlaVac.prototype.MudouDoseSemestral = function () {
        if (this.Servico.Semestral) {
            this.Servico.Anual = false;
        }
    };
    C_PlaVac.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.LimparServico();
        var parametros;
        parametros = {
            codPlano: Entity.Codigo
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetServicos", parametros);
        this.Servicos = retorno.Servicos;
        this.RefreshAngular();
    };
    C_PlaVac.prototype.OnValidando = function (s, e) {
        var x;
        if (e.item.Servico <= 0) {
            MostrarAlerta("Informe um serviço para ser adicionado");
            e.cancelar = true;
            this.txtServico.Focus();
            return;
        }
        if (e.item.Dose <= 0) {
            MostrarAlerta("Informe a quantidade de Doses");
            e.cancelar = true;
            this.txtDose.Focus();
            return;
        }
        if (e.item.Dias <= 0) {
            MostrarAlerta("Informe a quantidade de dias");
            e.cancelar = true;
            this.txtDias.Focus();
            return;
        }
        if (e.item.Semestral) {
            e.item.Semestral_Extenso = "Sim";
        }
        else {
            e.item.Semestral_Extenso = "Não";
        }
        if (e.item.Anual) {
            e.item.Anual_Extenso = "Sim";
        }
        else {
            e.item.Anual_Extenso = "Não";
        }
        if (e.index < 0) {
            e.item.Descricao_Servico = this.txtServico.GetResultado();
        }
        var itens = this.Grid.Grid.DataSource;
        if (!itens) {
            itens = [];
        }
        for (x = 0; x < itens.length; x++) {
            if (itens[x].Servico == e.item.Servico && itens[x].Dose == e.item.Dose) {
                MostrarAlerta("Esta dose já foi inserida para este serviço");
                e.cancelar = true;
                this.txtServico.Focus();
                return;
            }
        }
        this.RefreshAngular();
    };
    C_PlaVac.prototype.OnDepoisLimpar = function (Entity) {
        Entity.Codigo = 0;
        Entity.Descricao = "";
        this.Servicos = [];
        this.LimparServico();
    };
    C_PlaVac.prototype.LimparServico = function () {
        this.Servico.Servico = 0;
        this.Servico.Dose = 0;
        this.Servico.Dias = 0;
        this.Servico.Semestral = false;
        this.Servico.Anual = false;
        this.RefreshAngular();
    };
    C_PlaVac.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Servicos = this.Servicos;
        return true;
    };
    return C_PlaVac;
}(MouraPageCadastroAngular));
var c_PlaVac = new C_PlaVac();
//# sourceMappingURL=C_PlaVac.js.map