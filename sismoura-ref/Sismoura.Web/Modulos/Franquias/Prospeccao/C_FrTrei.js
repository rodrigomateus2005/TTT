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
var C_FrTrei = /** @class */ (function (_super) {
    __extends(C_FrTrei, _super);
    function C_FrTrei() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_FrTrei.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FrTrei.prototype, "Franquia_Treinamento_Realizado", {
        get: function () {
            var that = this.GetScope()["Franquia_Treinamento_Realizado"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Franquia_Treinamento_Realizado"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FrTrei.prototype, "Franquia_Treinamento_Realizados", {
        get: function () {
            return this.GetScope()["Franquia_Treinamento_Realizados"];
        },
        set: function (value) {
            this.GetScope()["Franquia_Treinamento_Realizados"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FrTrei.prototype, "txtTipoTreinamento", {
        get: function () {
            return window['txtTipoTreinamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FrTrei.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_FrTrei.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.Validando, this.OnValidando, this);
            adicionarEventoMoura(this.Grid.LimpouItem, this.OnLimpouTreinamento, this);
        }
    };
    C_FrTrei.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.OnLimpouTreinamento();
        this.PreencherGrade(Entity);
    };
    C_FrTrei.prototype.OnValidando = function (s, e) {
        var x;
        if (e.item.Tipo_Treinamento <= 0) {
            MostrarAlerta("Informe o tipo de treinamento");
            e.cancelar = true;
            this.txtTipoTreinamento.Focus();
            return;
        }
        if (e.item.Data_Inicio == null || e.item.Data_Inicio == undefined) {
            MostrarAlerta("Informe uma data de início");
            e.cancelar = true;
            this.txtPeriodo.textBoxCalendarioInicio.LostFocus;
            return;
        }
        if (this.txtPeriodo.textBoxDiferenca.GetText().CNum() <= 0) {
            MostrarAlerta("Informe um prazo válido");
            e.cancelar = true;
            this.txtPeriodo.textBoxDiferenca.Focus();
            return;
        }
        if (e.index < 0) {
            e.item.Treinamento = this.EntityTela.Codigo;
            e.item.TipoTreinamento = this.txtTipoTreinamento.GetText().CNum();
            e.item.TipoTreinamentoDescricao = this.txtTipoTreinamento.GetResultado();
            e.item.Prazo = this.txtPeriodo.textBoxDiferenca.GetText().CNum();
            this.Franquia_Treinamento_Realizado.Data_Termino = this.txtPeriodo.textBoxCalendarioFim.GetText().ToDate();
        }
        var itens = this.Grid.Grid.DataSource;
        if (!itens) {
            itens = [];
        }
        for (x = 0; x < itens.length; x++) {
            if (itens[x].Tipo_Treinamento == e.item.Tipo_Treinamento) {
                MostrarAlerta("Este treinamento já foi informado");
                e.cancelar = true;
                this.txtTipoTreinamento.Focus();
                return;
            }
        }
        this.RefreshAngular();
    };
    C_FrTrei.prototype.OnDepoisLimpar = function (Entity) {
        this.Franquia_Treinamento_Realizados = [];
        this.OnLimpouTreinamento();
        this.PreencherGrade(Entity);
    };
    C_FrTrei.prototype.OnLimpouTreinamento = function () {
        this.Franquia_Treinamento_Realizado.Tipo_Treinamento = 0;
        this.Franquia_Treinamento_Realizado.Data_Inicio = this.DataServidor();
        this.Franquia_Treinamento_Realizado.Data_Termino = this.DataServidor();
        this.txtPeriodo.textBoxDiferenca.Limpar();
        this.RefreshAngular();
    };
    C_FrTrei.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Franquia_Treinamento_Realizados = this.Franquia_Treinamento_Realizados;
        return true;
    };
    C_FrTrei.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade(this.EntityTela);
        return true;
    };
    C_FrTrei.prototype.PreencherGrade = function (Entity) {
        try {
            var codTreinamento = 0;
            var parametros;
            if (Entity.Codigo != null || Entity.Codigo != undefined) {
                codTreinamento = Entity.Codigo;
            }
            parametros = {
                codTreinamento: codTreinamento
            };
            var cad = this.ExecutarFuncaoServerSideSynch("GetTreinamentos", parametros);
            this.Franquia_Treinamento_Realizados = cad.Treinamentos;
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_FrTrei;
}(MouraPageCadastroAngular));
var c_FrTrei = new C_FrTrei();
//# sourceMappingURL=C_FrTrei.js.map