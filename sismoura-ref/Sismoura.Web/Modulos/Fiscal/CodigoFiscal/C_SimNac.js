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
var C_SimNac = /** @class */ (function (_super) {
    __extends(C_SimNac, _super);
    function C_SimNac() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_SimNac.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SimNac.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SimNac.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SimNac.prototype, "txtICMS", {
        get: function () {
            return window['txtICMS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SimNac.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SimNac.prototype, "accGrid", {
        get: function () {
            return window['accGrid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_SimNac.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGradeRegistrosCadastrados();
        if (this.cboEmpresa.GetValue() < 0) {
            MostrarAlerta(this.MensagemUsuarioLogado());
        }
        this.LimparCampos();
    };
    C_SimNac.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_SimNac.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_SimNac.prototype.PreencherGradeRegistrosCadastrados = function () {
        try {
            var parametros = {};
            var retorno = void 0;
            retorno = this.ExecutarFuncaoServerSideSynch('GetRegistrosCadastrados', parametros);
            this.Grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SimNac.prototype.MensagemUsuarioLogado = function () {
        var mensagem = 'O usuário logado não tem vinculo com nenhuma empresa. ';
        mensagem += 'Para resolver acesse: RH > Funcionário > Cadastro de Funcionário e selecione ';
        mensagem += 'ao menos uma empresa.';
        return mensagem;
    };
    C_SimNac.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGradeRegistrosCadastrados();
        return true;
    };
    C_SimNac.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.PreencherGradeRegistrosCadastrados();
        Entity.Empresa = 1;
        Entity.Vigencia = new Date();
        this.RefreshAngular();
    };
    C_SimNac.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
    };
    C_SimNac.prototype.LimparCampos = function () {
        this.txtCodigo.SetText('');
        this.txtData.Date = new Date();
        this.cboEmpresa.SetValue(1);
        this.txtICMS.SetText('');
    };
    return C_SimNac;
}(MouraPageCadastroAngular));
var c_SimNac = new C_SimNac();
//# sourceMappingURL=C_SimNac.js.map