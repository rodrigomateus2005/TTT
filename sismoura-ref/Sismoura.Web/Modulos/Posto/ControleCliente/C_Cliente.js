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
var C_Cliente = /** @class */ (function (_super) {
    __extends(C_Cliente, _super);
    function C_Cliente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    C_Cliente.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    C_Cliente.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    C_Cliente.prototype.Limpar = function () {
        _super.prototype.Limpar.call(this);
    };
    C_Cliente.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (CNum(this.EntityTela.Codigo) <= 0) {
            MostrarAlerta("Informe um cliente para gravar o controle!");
            return false;
        }
        return true;
    };
    C_Cliente.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        this.AtualizarHistoricoProcedimento(["@Codigo=" + Entidade.Codigo.toString()], true);
    };
    C_Cliente.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.AtualizarHistoricoProcedimento([
            "@Codigo=" + this.EntityTela.Codigo.toString(),
            "@Limite_Credito=" + this.EntityTela.Limite_Credito.Format(ValoresSismoura.CasasDecimaisValor),
            "@Limite_Cheque_Pendente=" + this.EntityTela.Limite_Cheque_Pendente.Format(ValoresSismoura.CasasDecimaisValor),
            "@Bloquear_Crediario=" + (this.EntityTela.Bloquear_Crediario ? "S" : "N"),
            "@Bloquear_Venda_Cheque=" + (this.EntityTela.Bloquear_Venda_Cheque ? "S" : "N"),
            "@Bloquear_Alterar_Placa=" + (this.EntityTela.Bloquear_Alterar_Placa ? "S" : "N"),
            "@Bloquear_Alterar_Dependente=" + (this.EntityTela.Bloquear_Alterar_Dependente ? "S" : "N"),
            "@Inativo=" + (this.EntityTela.Inativo ? "S" : "N")
        ], false);
        return true;
    };
    C_Cliente.prototype.AtualizarHistoricoProcedimento = function (parametrosProcedure, consulta) {
        var parametros;
        try {
            parametros = {
                codCliente: CNum(this.EntityTela.Codigo),
                parametros: parametrosProcedure,
                consulta: consulta,
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            this.ExecutarFuncaoServerSideSynch("AtualizarHistoricoProcedimento", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_Cliente;
}(MouraPageCadastroAngular));
var c_Cliente = new C_Cliente();
//# sourceMappingURL=C_Cliente.js.map