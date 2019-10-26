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
var C_SenBan = /** @class */ (function (_super) {
    __extends(C_SenBan, _super);
    function C_SenBan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_SenBan.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_SenBan.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_SenBan.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        //if (Entity) {
        //    Entity.Senha = "";
        //}
    };
    C_SenBan.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_SenBan.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_SenBan.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
        Entity.Permitir_Solicitar_Backup = true;
    };
    C_SenBan.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_SenBan.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SenBan.prototype.TestarConexao = function () {
        try {
            var parametros;
            if (!this.EntityTela) {
                MostrarAlerta("Selecione um registro para testar a conexão");
                return;
            }
            if (!this.EntityTela.Servidor_Banco || String.IsNullOrWhiteSpace(this.EntityTela.Banco) ||
                String.IsNullOrWhiteSpace(this.EntityTela.Usuario) || String.IsNullOrWhiteSpace(this.EntityTela.Senha)) {
                MostrarAlerta("Informe os parâmetros de conexão corretamente");
                return;
            }
            parametros = {
                codServidor: this.EntityTela.Servidor_Banco,
                banco: this.EntityTela.Banco,
                usuario: this.EntityTela.Usuario,
                senha: this.EntityTela.Senha
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("TestarConexao", parametros);
            if (!String.IsNullOrWhiteSpace(retorno)) {
                MostrarAlerta(retorno);
            }
            else {
                MostrarMensagem("Conexão realizada com sucesso");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_SenBan;
}(MouraPageCadastroAngular));
var c_SenBan = new C_SenBan();
//# sourceMappingURL=C_SenBan.js.map