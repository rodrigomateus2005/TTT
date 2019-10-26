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
var C_Comuni = /** @class */ (function (_super) {
    __extends(C_Comuni, _super);
    function C_Comuni() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Comuni.prototype, "txtCodigo", {
        get: function () {
            return window["txtCodigo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Comuni.prototype, "lstFranquia", {
        get: function () {
            return window['lstFranquia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Comuni.prototype, "htmlEditor", {
        get: function () {
            return window['htmlEditor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Comuni.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    C_Comuni.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.htmlEditor.Html = "";
        this.PreencherGrade();
        this.PreencherFranquia();
    };
    C_Comuni.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.PreencherGrade();
        this.LimparFranquia();
        this.htmlEditor.Html = "";
        //this.htmlEditor.Html = this.GetTags();
    };
    C_Comuni.prototype.LimparFranquia = function () {
        this.lstFranquia.LimparSelecao();
    };
    C_Comuni.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        var franquias = [];
        this.LimparFranquia();
        this.htmlEditor.Html = Entity.Descricao;
        if (!Entity.Franquia_Comunicado_Enviado) {
            Entity.Franquia_Comunicado_Enviado = [];
        }
        for (var i = 0; i < Entity.Franquia_Comunicado_Enviado.length; i++) {
            franquias.push(Entity.Franquia_Comunicado_Enviado[i].Franquia.toString());
        }
        if (this.lstFranquia) {
            this.lstFranquia.SetValues(franquias);
        }
        return true;
    };
    C_Comuni.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entity = this.EntityTela;
        entity.Descricao = this.htmlEditor.Html;
        this.PreencherFranquia();
        return true;
    };
    C_Comuni.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        MsgBoxJS("Deseja enviar o comunicado?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnEnviarComunicado, this));
        return true;
    };
    C_Comuni.prototype.OnEnviarComunicado = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            var parametros;
            var envio;
            parametros = {
                CodComunicado: this.EntityTela.Codigo
            };
            envio = this.ExecutarFuncaoServerSideSynch("EnviarComunicado", parametros);
            if (envio) {
                MostrarMensagem("Comunicado enviado com sucesso!");
            }
        }
    };
    C_Comuni.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Comuni.prototype.GetTags = function () {
        var parametros;
        var tags;
        parametros = {};
        tags = this.ExecutarFuncaoServerSideSynch("PreencherTagsContrato", parametros);
        return tags;
    };
    C_Comuni.prototype.PreencherFranquia = function () {
        var franquias;
        if (this.lstFranquia) {
            franquias = this.lstFranquia.GetValues();
        }
        this.EntityTela.Franquia_Comunicado_Enviado = [];
        for (var x = 0; x <= franquias.length - 1; x++) {
            var franquia;
            franquia = {};
            franquia.Franquia = franquias[x].CNum();
            this.EntityTela.Franquia_Comunicado_Enviado.push(franquia);
        }
    };
    return C_Comuni;
}(MouraPageCadastroAngular));
var c_Comuni = new C_Comuni();
//# sourceMappingURL=C_Comuni.js.map