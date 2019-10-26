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
var C_Jazigo = /** @class */ (function (_super) {
    __extends(C_Jazigo, _super);
    function C_Jazigo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Jazigo.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Jazigo.prototype, "lblAnimalJazigo", {
        get: function () {
            return window['lblAnimalJazigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Jazigo.prototype, "lblProprietario", {
        get: function () {
            return window['lblProprietario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Jazigo.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_Jazigo.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_Jazigo.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        this.PreencherGrade();
    };
    C_Jazigo.prototype.OnDepoisLimpar = function (Entity) {
        this.LimparCampos();
        this.PreencherGrade();
    };
    C_Jazigo.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Jazigo.prototype.PreencherGrade = function () {
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
    C_Jazigo.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        this.LimparCampos();
        try {
            var parametros;
            parametros = {
                codJazigo: Entidade.Codigo
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetAnimalJazigo", parametros);
            if (retorno.nomeAnimal.length > 0) {
                for (var i = 0; i < retorno.nomeAnimal.length; i++) {
                    this.lblAnimalJazigo.Text += retorno.nomeAnimal[i].Nome_Animal + "\n";
                }
            }
            if (retorno.proprietario.length > 0) {
                this.lblProprietario.Text = retorno.proprietario[0].Nome;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Jazigo.prototype.LimparCampos = function () {
        this.lblAnimalJazigo.Text = "";
        this.lblProprietario.Text = "";
    };
    return C_Jazigo;
}(MouraPageCadastroAngular));
var c_Jazigo = new C_Jazigo();
//# sourceMappingURL=C_Jazigo.js.map