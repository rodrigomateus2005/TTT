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
var C_PAni = /** @class */ (function (_super) {
    __extends(C_PAni, _super);
    function C_PAni() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_PAni.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PAni.prototype, "Peso", {
        get: function () {
            var that = this.GetScope()["Peso"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Peso"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PAni.prototype, "Pesos", {
        get: function () {
            return this.GetScope()["Pesos"];
        },
        set: function (value) {
            this.GetScope()["Pesos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PAni.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PAni.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PAni.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PAni.prototype, "txtPeso", {
        get: function () {
            return window['txtPeso_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_PAni.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.Validando, this.OnValidando, this);
            adicionarEventoMoura(this.Grid.LimpouItem, this.OnLimpouPeso, this);
        }
        if (this.txtPet) {
            adicionarEventoMoura(this.txtPet.ProcurouAnimal, this.OnProcurouAnimal, this);
            adicionarEventoMoura(this.txtPet.ProcurouProprietario, this.OnProcurouAnimal, this);
        }
    };
    C_PAni.prototype.OnProcurouAnimal = function (s, e) {
        if (this.EntityTela.Codigo != null || this.EntityTela.Codigo != undefined) {
            this.PreencherEntidade(this.EntityTela.Codigo.toString());
            this.Pesos = this.EntityTela.Pesos;
            this.RefreshAngular();
        }
    };
    C_PAni.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.txtCodigo.Visible = false;
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus && this.ParametrosTela.animal) {
            this.txtPet.TextBoxAnimal.Enabled = false;
            this.txtPet.TextBoxProprietario.Enabled = false;
            this.txtPet.TextBoxAnimal.Procurar(this.ParametrosTela.animal);
            this.Grid.Grid.ColunaVisible(this.Grid.Grid.GetColunaByName("botaoExcluir"), false);
        }
    };
    C_PAni.prototype.OnDepoisLimpar = function (Entity) {
        this.Pesos = [];
        this.Grid.Limpar();
        this.txtPet.TextBoxAnimal.Enabled = true;
        this.txtPet.TextBoxProprietario.Enabled = true;
        this.RefreshAngular();
    };
    C_PAni.prototype.OnValidando = function (s, e) {
        if (this.Peso.Data == null || this.Peso.Data == undefined) {
            MostrarAlerta("Data de pesagem Inválida!");
            e.cancelar = true;
            this.txtData.Focus();
            return;
        }
        if (this.Peso.Peso <= 0 || this.Peso.Peso == null || this.Peso.Peso == undefined) {
            MostrarAlerta("Informe um peso válido para o Animal!");
            e.cancelar = true;
            this.txtPeso.Focus();
            return;
        }
        if (this.Pesos.length > 0) {
            for (var x = 0; x < this.Pesos.length; x++) {
                if (this.Pesos[x].Data.getDate() === this.Peso.Data.getDate()) {
                    MostrarAlerta("Já existe um peso cadastrado para este animal nesta data");
                    e.cancelar = true;
                }
            }
        }
        this.RefreshAngular();
    };
    C_PAni.prototype.OnLimpouPeso = function (s, e) {
        this.Peso.Data = this.DataServidor();
        this.Peso.Peso = (0).Format(3).CNum();
        this.RefreshAngular();
    };
    return C_PAni;
}(MouraPageCadastroAngular));
var c_PAni = new C_PAni();
//# sourceMappingURL=C_PAni.js.map