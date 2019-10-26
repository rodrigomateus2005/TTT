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
var C_Clinic = /** @class */ (function (_super) {
    __extends(C_Clinic, _super);
    function C_Clinic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Clinic.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Clinic.prototype, "txtCep", {
        get: function () {
            return window['txtCep_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Clinic.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.txtCep) {
            adicionarEventoMoura(this.txtCep.PesquisouCEP, this.OnConsultarCEP, this);
        }
    };
    C_Clinic.prototype.OnSelecionouLinha = function (e, s) {
        this.PreencherEntidade("" + s.rowKey);
    };
    C_Clinic.prototype.OnConsultarCEP = function (entity, e) {
        if (e.EncontrouEndereco) {
            this.EntityTela.Cep = this.txtCep.GetText();
            this.EntityTela.Endereco = e.Endereco;
            this.EntityTela.Bairro = e.Bairro;
            this.EntityTela.Cidade = e.CidadeCodigo;
            this.GetScope().$applyAsync();
        }
        else {
            if (this.txtCep)
                this.txtCep.Focus();
        }
    };
    C_Clinic.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Clinic.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.PreencherGrade();
    };
    C_Clinic.prototype.PreencherGrade = function () {
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
    return C_Clinic;
}(MouraPageCadastroAngular));
var c_Clinic = new C_Clinic();
//# sourceMappingURL=C_Clinic.js.map