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
var C_MotCanc = /** @class */ (function (_super) {
    __extends(C_MotCanc, _super);
    function C_MotCanc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_MotCanc.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MotCanc.prototype, "cboMotivoDevolucao", {
        get: function () {
            return window['cboMotivoDevolucao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MotCanc.prototype, "chkDevolver", {
        get: function () {
            return window['chkDevolver_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_MotCanc.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.SelecionarRegistro, this);
        }
        this.AtualizarGrid();
    };
    C_MotCanc.prototype.OnChkDevolver_Changed = function () {
        if (this.cboMotivoDevolucao) {
            this.cboMotivoDevolucao.Visible = this.chkDevolver.Checked;
            this.cboMotivoDevolucao.Obrigatorio = this.chkDevolver.Checked;
        }
    };
    C_MotCanc.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().OnChkDevolver_Changed) {
            this.GetScope().OnChkDevolver_Changed = $.proxy(this.OnChkDevolver_Changed, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Devolver_Animal; }, this.GetScope().OnChkDevolver_Changed);
        }
    };
    C_MotCanc.prototype.OnGravouSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_MotCanc.prototype.OnExcluiuSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_MotCanc.prototype.AtualizarGrid = function () {
        try {
            var parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("AtualizarGrade", parametros);
            this.Grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_MotCanc.prototype.SelecionarRegistro = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
    };
    C_MotCanc.prototype.OnDepoisLimpar = function () {
        _super.prototype.OnDepoisLimpar.call(this, this.GetScope().Entity);
    };
    return C_MotCanc;
}(MouraPageCadastroAngular));
var c_MotCanc = new C_MotCanc();
//# sourceMappingURL=C_MotCanc.js.map