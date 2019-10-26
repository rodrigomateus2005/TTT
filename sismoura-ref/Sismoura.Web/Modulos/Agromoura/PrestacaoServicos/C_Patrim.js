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
var C_Patrim = /** @class */ (function (_super) {
    __extends(C_Patrim, _super);
    function C_Patrim() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Patrim.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Patrim.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Patrim.prototype, "txtPatrimonio", {
        get: function () {
            return window['txtPatrimonio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Patrim.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Patrim.prototype, "txtMaquina", {
        get: function () {
            return window['txtMaquina_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Patrim.prototype, "txtUsuario", {
        get: function () {
            return window['txtUsuario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Patrim.prototype, "cboSituacao", {
        get: function () {
            return window['cboSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Patrim.prototype, "txtID", {
        get: function () {
            return window['txtID_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Patrim.prototype, "txtValor", {
        get: function () {
            return window['txtValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Patrim.prototype, "Patrimonios", {
        get: function () {
            return this.GetScope()["Patrimonios"];
        },
        set: function (value) {
            this.GetScope()["Patrimonios"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Patrim.prototype, "codigo", {
        set: function (value) {
            this.codigo = value;
        },
        enumerable: true,
        configurable: true
    });
    C_Patrim.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.AntesGravar, this.OnAntesGravar, this);
        if (this.txtPatrimonio) {
            adicionarEventoMoura(this.txtPatrimonio.TextChanged, this.OnMudouCodigo, this);
        }
    };
    C_Patrim.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entidade = this.GetScope().Entity;
        entidade.N_Patrimonio = this.txtPatrimonio.GetText();
        return true;
    };
    C_Patrim.prototype.OnDepoisLimpar = function () {
        var entidade = this.GetScope().Entity;
        _super.prototype.OnDepoisLimpar.call(this, entidade);
        this.BuscarGrid();
        return entidade;
    };
    C_Patrim.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.BuscarGrid();
    };
    C_Patrim.prototype.BuscarGrid = function () {
        var parametros = {};
        var Itens = this.ExecutarFuncaoServerSideSynch("CarregarPatrimonios", parametros);
        this.Patrimonios = Itens;
    };
    C_Patrim.prototype.OnMudouCodigo = function (s, e) {
        var parametros = {
            Patrimonio: this.txtPatrimonio.GetText()
        };
        var entidade = this.GetScope().Entity;
        var Codigo = this.ExecutarFuncaoServerSideSynch("CodigoPatrimonio", parametros);
        if (Codigo != 0) {
            entidade.Codigo = Codigo;
            this.PreencherEntidade(Codigo);
        }
    };
    C_Patrim.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.BuscarGrid();
        return true;
    };
    return C_Patrim;
}(MouraPageCadastroAngular));
var c_Patrim = new C_Patrim();
//# sourceMappingURL=C_Patrim.js.map