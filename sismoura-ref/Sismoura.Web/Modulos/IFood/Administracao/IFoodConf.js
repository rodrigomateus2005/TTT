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
var IFoodConf = /** @class */ (function (_super) {
    __extends(IFoodConf, _super);
    function IFoodConf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(IFoodConf.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IFoodConf.prototype, "btnGerarToken", {
        get: function () {
            return window['btnGerarToken_Object'];
        },
        enumerable: true,
        configurable: true
    });
    IFoodConf.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.btnGerarToken) {
            adicionarEventoMoura(this.btnGerarToken.Click, this.OnBtnGerarTokenClick, this);
        }
    };
    IFoodConf.prototype.OnBtnGerarTokenClick = function (s, e) {
        e.processOnServer = false;
        var parametros = {
            username: this.GetScope().Entity.Username,
            senha: this.GetScope().Entity.Password
        };
        var accessToken = this.ExecutarFuncaoServerSideSynch("GerarAccessToken", parametros);
        if (accessToken) {
            this.GetScope().Entity.Acess_Token = accessToken.access_token;
            this.GetScope().Entity.Expires_in = accessToken.expires_in;
            this.GetScope().Entity.Scope = accessToken.scope;
            this.GetScope().Entity.Token_Type = accessToken.token_type;
            this.GetScope().$applyAsync();
        }
        else {
            MostrarAlerta("usuário ou senha incorretos");
        }
    };
    IFoodConf.prototype.OnGravouSucesso = function (s, e) {
        this.PreencherGrade();
    };
    IFoodConf.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    IFoodConf.prototype.OnExcluiuSucesso = function (s, e) {
        this.PreencherGrade();
    };
    IFoodConf.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    IFoodConf.prototype.PreencherGrade = function () {
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
    return IFoodConf;
}(MouraPageCadastroAngular));
var iFoodConf = new IFoodConf();
//# sourceMappingURL=IFoodConf.js.map