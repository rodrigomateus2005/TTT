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
var R_AniEsp = /** @class */ (function (_super) {
    __extends(R_AniEsp, _super);
    function R_AniEsp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_AniEsp.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AniEsp.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AniEsp.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AniEsp.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AniEsp.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_AniEsp.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grd)
            adicionarEventoMoura(this.grd.ExcluiuLinhaGrade, this.OnExcluiuItem, this);
    };
    R_AniEsp.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_AniEsp.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtPeriodo.IniciarDataAtual();
        this.txtPet.TextBoxAnimal.Limpar();
        this.txtPet.TextBoxProprietario.Limpar();
        this.cboEmpresa.LimparSelecao;
        this.grd.PreencherGrid([]);
    };
    R_AniEsp.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var dataInicio = this.txtPeriodo.textBoxCalendarioInicio.GetDate();
        var dataFim = this.txtPeriodo.textBoxCalendarioFim.GetDate();
        if (!this.ValidarPeriodo(dataInicio, dataFim)) {
            MostrarAlerta("Informe um período correto.");
            return;
        }
        if (this.cboEmpresa.GetValue() == 0) {
            MostrarAlerta("Informe a empresa");
            return;
        }
        try {
            var param = {
                dataInicial: dataInicio,
                dataFinal: dataFim,
                codProprietario: this.txtPet.TextBoxProprietario.GetText().CNum(),
                codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum(),
                codEmpresa: this.cboEmpresa.GetValue()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarGrid", param, function (d) {
                try {
                    fecharEspera();
                    _this.grd.PreencherGrid(GetRetornoAJAX(d));
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
        }
        catch (ex) {
            this.grd.PreencherGrid([]);
            LogarException(ex);
            fecharEspera();
        }
    };
    R_AniEsp.prototype.ValidarPeriodo = function (dataInicio, dataFim) {
        if (!dataInicio)
            return false;
        if (!dataFim)
            return false;
        return true;
    };
    R_AniEsp.prototype.OnExcluiuItem = function (s, e) {
        try {
            if (!e.item)
                return;
            var param = {
                codigoEspera: e.item.Codigo,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("Excluir_Espera", param);
            if (retorno)
                MostrarMensagem("Espera excluída com sucesso!");
            else
                MostrarError("Ocorreu um erro no sistema");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_AniEsp;
}(MouraPageRelacaoAngular));
var r_AniEsp = new R_AniEsp();
//# sourceMappingURL=R_AniEsp.js.map