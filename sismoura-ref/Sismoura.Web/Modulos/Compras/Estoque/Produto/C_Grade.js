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
var C_Grade = /** @class */ (function (_super) {
    __extends(C_Grade, _super);
    function C_Grade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Grade.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Grade.prototype, "txtTamanhos", {
        get: function () {
            return window['txtTamanhos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Grade.prototype, "Tamanhos", {
        get: function () {
            return this.GetScope()["Tamanhos"];
        },
        set: function (value) {
            this.GetScope()["Tamanhos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Grade.prototype, "Tamanho", {
        get: function () {
            var that = this.GetScope()["Tamanho"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Tamanho"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_Grade.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.Validando, this.OnValidando, this);
            adicionarEventoMoura(this.grid.LimpouItem, this.LimparCampos, this);
        }
    };
    C_Grade.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    C_Grade.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.LimparCampos();
        var parametros;
        parametros = {
            codGrade: Entity.Codigo
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetCadastradoByGrade", parametros);
        this.Tamanhos = retorno.Tamanho;
        this.RefreshAngular();
    };
    C_Grade.prototype.OnValidando = function (s, e) {
        var x;
        if (String.IsNullOrWhiteSpace(e.item.Tamanho)) {
            MostrarAlerta("Tamanho informado vazio");
            e.cancelar = true;
            this.txtTamanhos.Focus();
            return;
        }
        var itens = this.Tamanhos;
        if (!itens) {
            itens = [];
        }
        for (x = 0; x < itens.length; x++) {
            if (itens[x].Tamanho == e.item.Tamanho) {
                MostrarAlerta("Tamanho já inserido");
                e.cancelar = true;
                this.txtTamanhos.Focus();
                return;
            }
        }
        this.RefreshAngular();
    };
    C_Grade.prototype.OnDepoisLimpar = function (Entity) {
        Entity.Codigo = 0;
        Entity.Descricao = "";
        this.Tamanhos = [];
        this.LimparCampos();
    };
    C_Grade.prototype.LimparCampos = function () {
        this.Tamanho.Tamanho = "";
        this.RefreshAngular();
    };
    C_Grade.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Tamanho = this.Tamanhos;
        this.EntityTela.Data_Carga = this.DataServidor();
        return true;
    };
    return C_Grade;
}(MouraPageCadastroAngular));
var c_Grade = new C_Grade();
//# sourceMappingURL=C_Grade.js.map