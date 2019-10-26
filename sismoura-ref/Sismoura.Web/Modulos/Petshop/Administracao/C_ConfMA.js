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
var C_ConfMA = /** @class */ (function (_super) {
    __extends(C_ConfMA, _super);
    function C_ConfMA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ConfMA.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfMA.prototype, "lstTipoProfissional", {
        get: function () {
            return window['lstTipoProfissional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfMA.prototype, "txtEmpresa", {
        get: function () {
            return window['txtEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ConfMA.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtEmpresa) {
            adicionarEventoMoura(this.txtEmpresa.Procurou, this.OnMudouEmpresa, this);
        }
    };
    C_ConfMA.prototype.VerificarExistencia = function (empresa) {
        var parametros = {
            codEmpresa: empresa
        };
        var configuracao = this.ExecutarFuncaoServerSideSynch("GetCodigoByEmpresa", parametros);
        if (configuracao) {
            this.PreencherEntidade(configuracao);
            this.txtCodigo.SetText(configuracao);
        }
        this.RefreshAngular();
    };
    C_ConfMA.prototype.OnMudouEmpresa = function () {
        this.VerificarExistencia(this.txtEmpresa.GetText().CNum());
    };
    C_ConfMA.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Tipos = [];
        this.lstTipoProfissional.LimparSelecao();
    };
    C_ConfMA.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        if (this.lstTipoProfissional) {
            var selecionar = [];
            for (var x = 0; x <= Entity.Tipos.length - 1; x++) {
                selecionar.push("" + Entity.Tipos[x].Tipo_Profissional);
            }
            this.lstTipoProfissional.LimparSelecao();
            this.lstTipoProfissional.SetValues(selecionar);
        }
    };
    C_ConfMA.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.PreencherTipos();
        return true;
    };
    C_ConfMA.prototype.PreencherTipos = function () {
        var tipos;
        if (this.lstTipoProfissional) {
            tipos = this.lstTipoProfissional.GetValues();
        }
        this.EntityTela.Tipos = [];
        for (var x = 0; x <= tipos.length - 1; x++) {
            var tipo;
            tipo = {};
            tipo.Tipo_Profissional = tipos[x].CNum();
            this.EntityTela.Tipos.push(tipo);
        }
    };
    return C_ConfMA;
}(MouraPageCadastroAngular));
var c_ConfMA = new C_ConfMA();
//# sourceMappingURL=C_ConfMA.js.map