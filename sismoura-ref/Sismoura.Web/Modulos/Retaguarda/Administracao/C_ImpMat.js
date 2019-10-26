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
var C_ImpMat = /** @class */ (function (_super) {
    __extends(C_ImpMat, _super);
    function C_ImpMat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ImpMat.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpMat.prototype, "btnTeste", {
        get: function () {
            return window['btnTeste_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpMat.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpMat.prototype, "txtCaminho", {
        get: function () {
            return window['txtCaminho_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ImpMat.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        //if (this.btnTeste && this.btnTeste.Botao) {
        //    adicionarEventoDevExpress(this.btnTeste.Botao.Click, this.OnClickBotaoTeste, this);
        //} 
    };
    C_ImpMat.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_ImpMat.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.Grid.PreencherGrid(cad);
            this.Grid.Refresh();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ImpMat.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Codigo = null;
        Entity.Descricao = null;
        Entity.Caminho = null;
        Entity.Saltos = 0;
        Entity.Modelo = 0;
        Entity.UsarDLL = false;
        Entity.Remover_Acento = true;
        this.PreencherGrade();
        this.RefreshAngular();
    };
    C_ImpMat.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_ImpMat.prototype.OnSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_ImpMat.prototype.OnClickBotaoTeste = function (s, e) {
        //protected click() {
        try {
            if (!this.EntityTela.Caminho) {
                MostrarAlerta("Informe o caminho da impressora!");
                return;
            }
            var parametros;
            parametros = {
                Caminho: this.EntityTela.Caminho,
                Saltos: this.EntityTela.Saltos,
                Remover_Acento: this.EntityTela.Remover_Acento
            };
            var cad = this.ExecutarFuncaoServerSideSynch("TestarImpressora", parametros);
            if (!cad) {
                MostrarAlerta("Ocorreu um erro inesperado.");
            }
            else {
                MostrarMensagem("Impressão realizada com sucesso!");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_ImpMat;
}(MouraPageCadastroAngular));
var c_ImpMat = new C_ImpMat();
//# sourceMappingURL=C_ImpMat.js.map