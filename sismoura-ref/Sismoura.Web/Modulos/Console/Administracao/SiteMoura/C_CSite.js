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
var C_CSite = /** @class */ (function (_super) {
    __extends(C_CSite, _super);
    function C_CSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CSite.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CSite.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CSite.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_CSite.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.txtCodigo.Visible = false;
        this.PreencherGrade();
    };
    C_CSite.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtCliente) {
            adicionarEventoMoura(this.txtCliente.Procurou, this.OnProcurouCliente, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
    };
    C_CSite.prototype.Limpar = function () {
        _super.prototype.Limpar.call(this);
        this.EntityTela.Cliente = 0;
        this.txtCliente.Limpar();
        this.EntityTela.Descritivo = "";
        this.EntityTela.Destaque_Inicial = false;
        this.EntityTela.Exibir_Site = true;
        this.EntityTela.Nome_Site = "";
        this.EntityTela.Prioridade = 0;
        this.EntityTela.Url_Facebook = "";
        this.EntityTela.Url_Instagram = "";
        this.EntityTela.Url_Logo = "";
        this.EntityTela.Url_Site = "";
        this.EntityTela.Url_Twitter = "";
        this.RefreshAngular();
    };
    C_CSite.prototype.OnProcurouCliente = function () {
        if (CNum(this.txtCliente.GetText()) > 0) {
            this.VerificaRegistro(CNum(this.txtCliente.GetText()));
        }
    };
    C_CSite.prototype.VerificaRegistro = function (cliente) {
        var parametros;
        try {
            parametros = {
                cliente: cliente
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificaRegistro", parametros);
            if (retorno.Cliente) {
                this.EntityTela.Cliente = retorno.Cliente;
            }
            else {
                this.EntityTela.Nome_Site = retorno.Nome_Fantasia;
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CSite.prototype.PreencherGrade = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {};
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(retorno);
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    C_CSite.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Cliente = CNum(this.txtCliente.GetText());
        return true;
    };
    C_CSite.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_CSite.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_CSite.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.txtCliente.Procurar(Entity.Cliente.toString());
    };
    C_CSite.prototype.OnSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    return C_CSite;
}(MouraPageCadastroAngular));
var c_CSite = new C_CSite();
//# sourceMappingURL=C_CSite.js.map