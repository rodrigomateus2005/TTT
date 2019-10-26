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
var C_ExaSta = /** @class */ (function (_super) {
    __extends(C_ExaSta, _super);
    function C_ExaSta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ExaSta.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ExaSta.prototype, "corFonte", {
        get: function () {
            return window['corFonte_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ExaSta.prototype, "corFundo", {
        get: function () {
            return window['corFundo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ExaSta.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_ExaSta.prototype.OnAntesSetEntidade = function (eventArg) {
        try {
            _super.prototype.OnAntesSetEntidade.call(this, eventArg);
            if (!eventArg.Entidade.Cor_Fundo)
                return;
            if (eventArg.Entidade.Cor_Fundo.toString().CNum() == 0 && eventArg.Entidade.Cor_Fonte.toString().CNum() == 0) {
                return;
            }
            var parametros;
            parametros = {
                valueLong: eventArg.Entidade.Cor_Fonte
            };
            var corFonte = this.ExecutarFuncaoServerSideSynch("ConverterLongToHexa", parametros);
            this.corFonte.SetColor(corFonte);
            parametros = {
                valueLong: eventArg.Entidade.Cor_Fundo
            };
            var corFundo = this.ExecutarFuncaoServerSideSynch("ConverterLongToHexa", parametros);
            this.corFundo.SetColor(corFundo);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ExaSta.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_ExaSta.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_ExaSta.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
        this.corFundo.SetColor("#FFFFFF");
        this.corFonte.SetColor("#000000");
    };
    C_ExaSta.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_ExaSta.prototype.PreencherGrade = function () {
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
    C_ExaSta.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var parametros;
        parametros = {
            valueHexa: this.corFonte.GetColor()
        };
        var corFonte = this.ExecutarFuncaoServerSideSynch("ConverterHexaToLong", parametros);
        this.EntityTela.Cor_Fonte = corFonte;
        parametros = {
            valueHexa: this.corFundo.GetColor()
        };
        var corFundo = this.ExecutarFuncaoServerSideSynch("ConverterHexaToLong", parametros);
        this.EntityTela.Cor_Fundo = corFundo;
        try {
            if (this.EntityTela.Padrao) {
                var parametros;
                var codExame = this.EntityTela.Codigo;
                if (!codExame) {
                    codExame = 0;
                }
                parametros = {
                    codExame: codExame
                };
                var entidade = this.ExecutarFuncaoServerSideSynch("GetByPadrao", parametros);
                if (entidade > 0) {
                    MsgBoxJS("Existe outro status marcado como padrão. Deseja realmente alterar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespondeuMensagemExistente, this));
                    return false;
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return true;
    };
    C_ExaSta.prototype.OnRespondeuMensagemExistente = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            try {
                var parametros;
                var codExame = this.EntityTela.Codigo;
                if (!codExame) {
                    codExame = 0;
                }
                parametros = {
                    codExame: codExame
                };
                var verifica = this.ExecutarFuncaoServerSideSynch("GetResposta", parametros);
                this.ClicarGravar();
            }
            catch (ex) {
                LogarException(ex);
            }
        }
        else {
            this.EntityTela.Padrao = false;
            this.RefreshAngular();
        }
    };
    return C_ExaSta;
}(MouraPageCadastroAngular));
var c_ExaSta = new C_ExaSta();
//# sourceMappingURL=C_ExaSta.js.map