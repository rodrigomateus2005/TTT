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
var C_Pais = /** @class */ (function (_super) {
    __extends(C_Pais, _super);
    function C_Pais() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Pais.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Pais.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Pais.prototype, "txtCodESoc", {
        get: function () {
            return window['txtCodESoc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Pais.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Pais.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_Pais.prototype.OnValidando = function () {
        var ds;
        if (this.Grid) {
            ds = this.Grid.DataSource;
        }
        for (var x = 0; x < ds.length; x++) {
            if (ds[x].Cod_Esocial == this.EntityTela.Cod_Esocial) {
                if (ds[x].Codigo != this.EntityTela.Codigo) {
                    MostrarAlerta("Preencha o campo corretamente: O País ' " + ds[x].Descricao + " ' já possui o Código ESocial informado!");
                    return false;
                }
            }
        }
        return true;
    };
    C_Pais.prototype.OntxtCodESoc = function () {
        if (this.EntityTela.Cod_Esocial == "0") {
            this.EntityTela.Cod_Esocial = "";
            this.RefreshAngular();
        }
    };
    C_Pais.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
        this.txtDescricao.Enabled = true;
        this.txtCodESoc.Enabled = true;
        if (this.GetScope()) {
            if (!this.GetScope().MudouTipo) {
                this.GetScope().MudouTipo = $.proxy(this.MudouTipo, this);
                this.GetScope().$watch(function (scope) { return scope.Entity.Padrao; }, this.GetScope().MudouTipo);
            }
        }
        if (this.GetScope()) {
            if (!this.GetScope().MudouZero) {
                this.GetScope().MudouZero = $.proxy(this.MudouZero, this);
                this.GetScope().$watch(function (scope) { return scope.Entity.Cod_Esocial; }, this.GetScope().MudouZero);
            }
        }
    };
    C_Pais.prototype.OnGridSelecionouItem = function (s, e) {
        this.txtCodigo.Procurar(e.data['Codigo']);
    };
    C_Pais.prototype.MudouZero = function (Padrao) {
        this.OntxtCodESoc();
    };
    C_Pais.prototype.MudouTipo = function (Padrao) {
        if (Padrao == true) {
            this.txtDescricao.Enabled = false;
            this.txtCodESoc.Enabled = false;
        }
        else {
            this.txtDescricao.Enabled = true;
            this.txtCodESoc.Enabled = true;
        }
        this.OntxtCodESoc();
    };
    C_Pais.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.OnValidando()) {
            return true;
        }
        else {
            return false;
        }
    };
    C_Pais.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        this.LimparCampos();
        this.txtCodigo.Focus();
        this.txtCodigo.Limpar();
        this.OntxtCodESoc();
        return true;
    };
    C_Pais.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
        this.txtDescricao.Enabled = true;
        this.txtCodESoc.Enabled = true;
        if (this.ParametrosTela.Descricao) {
            Entity.Descricao = this.ParametrosTela.Descricao;
        }
        if (this.ParametrosTela.Cod_Esocial) {
            Entity.Cod_Esocial = this.ParametrosTela.Cod_Esocial;
        }
        if (this.ParametrosTela.Padrao) {
            Entity.Padrao = this.ParametrosTela.Padrao;
        }
        Entity.Cod_Esocial = undefined;
        this.RefreshAngular();
    };
    C_Pais.prototype.PreencherGrade = function () {
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
    C_Pais.prototype.LimparCampos = function () {
        this.txtDescricao.Limpar();
        this.txtCodESoc.SetText("");
        this.txtCodigo.Limpar();
        this.RefreshAngular();
    };
    return C_Pais;
}(MouraPageCadastroAngular));
var c_Pais = new C_Pais();
//# sourceMappingURL=C_Pais.js.map