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
var C_AniCon = /** @class */ (function (_super) {
    __extends(C_AniCon, _super);
    function C_AniCon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_AniCon.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AniCon.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AniCon.prototype, "txtCep", {
        get: function () {
            return window['txtCep_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_AniCon.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.SelecionarRegistro, this);
        }
        if (this.txtCep) {
            adicionarEventoMoura(this.txtCep.PesquisouCEP, this.OnConsultarCEP, this);
        }
        this.AtualizarGrid();
    };
    C_AniCon.prototype.OnGravouSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_AniCon.prototype.OnExcluiuSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_AniCon.prototype.AtualizarGrid = function () {
        var parametros = {};
        var retorno = this.ExecutarFuncaoServerSideSynch("CarregarConvenios", parametros);
        this.Grid.PreencherGrid(retorno);
    };
    C_AniCon.prototype.SelecionarRegistro = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
    };
    C_AniCon.prototype.OnConsultarCEP = function (s, e) {
        if (e.EncontrouEndereco) {
            var entidade = this.GetScope().Entity;
            entidade.Bairro = e.Bairro;
            entidade.Logradouro = e.Endereco;
            entidade.Cidade = e.CidadeCodigo;
            this.GetScope().$applyAsync();
        }
        else {
            this.txtCep.Focus();
        }
    };
    return C_AniCon;
}(MouraPageCadastroAngular));
var c_AniCon = new C_AniCon();
//# sourceMappingURL=C_AniCon.js.map