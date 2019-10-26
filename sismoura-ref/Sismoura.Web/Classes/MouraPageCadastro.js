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
var MouraPageCadastro = /** @class */ (function (_super) {
    __extends(MouraPageCadastro, _super);
    function MouraPageCadastro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MouraPageCadastro.prototype, "BotoesCadastro", {
        get: function () {
            return window["BotoesCadastro_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPageCadastro.prototype, "ValorCodigo", {
        get: function () {
            var campoCodigo = $("form").attr("campo-codigo");
            var retorno;
            if (campoCodigo) {
                retorno = window[campoCodigo];
                if (window[campoCodigo]) {
                    if (window[campoCodigo + "_Object"]) {
                        var t = window[campoCodigo + "_Object"];
                        retorno = t.GetText().CNum();
                    }
                    else {
                        var h = window[campoCodigo];
                        retorno = h.value.CNum();
                    }
                }
            }
            return retorno;
        },
        enumerable: true,
        configurable: true
    });
    MouraPageCadastro.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.BotoesCadastro) {
            adicionarEventoMoura(this.BotoesCadastro.ClickGravar, this.OnClickGravar, this);
            adicionarEventoMoura(this.BotoesCadastro.ClickExcluir, this.OnClickExcluir, this);
            adicionarEventoMoura(this.BotoesCadastro.ClickNovo, this.OnClickNovo, this);
        }
        if (this.Gravou) {
            this.OnDepoisGravar();
            this.Gravou = false;
        }
    };
    MouraPageCadastro.prototype.OnClickGravar = function (s, e) {
        if (!this.OnAntesGravar()) {
            e.cancelar = true;
        }
    };
    MouraPageCadastro.prototype.OnClickExcluir = function (s, e) {
        e.cancelar = true;
        if (this.OnAntesDeletar()) {
            this.MostrarModalExcluir();
        }
    };
    MouraPageCadastro.prototype.OnClickNovo = function (s, e) {
        if (!this.OnAntesNovo()) {
            e.cancelar = true;
        }
    };
    MouraPageCadastro.prototype.MostrarModalExcluir = function () {
        if (this.ValorCodigo <= 0 || this.ValorCodigo == undefined || this.ValorCodigo == null) {
            MostrarAlerta("Informe o registro que será excluído");
            return;
        }
        this.Modal.Modal.Show();
        executarCallBackPanelArgumento(this.Modal.Modal.ModalDialog, this.BotoesCadastro.BotaoExcluir.ID);
    };
    MouraPageCadastro.prototype.OnAntesGravar = function () {
        return true;
    };
    MouraPageCadastro.prototype.OnAntesDeletar = function () {
        return true;
    };
    MouraPageCadastro.prototype.OnAntesNovo = function () {
        return true;
    };
    MouraPageCadastro.prototype.OnDepoisGravar = function () {
        return true;
    };
    MouraPageCadastro.prototype.OnDepoisDeletar = function () {
        return true;
    };
    MouraPageCadastro.prototype.OnDepoisClickNovo = function () {
        return true;
    };
    MouraPageCadastro.prototype.OnDepoisLimpar = function (Entity) {
    };
    MouraPageCadastro.prototype.ClicarGravar = function () {
        this.BotoesCadastro.BotaoGravar.DoClick();
    };
    MouraPageCadastro.prototype.ClicarExcluir = function () {
        this.BotoesCadastro.BotaoExcluir.DoClick();
    };
    MouraPageCadastro.prototype.ClicarNovo = function () {
        this.BotoesCadastro.BotaoNovo.DoClick();
    };
    return MouraPageCadastro;
}(MouraPage));
//# sourceMappingURL=MouraPageCadastro.js.map