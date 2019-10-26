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
var C_INFD = /** @class */ (function (_super) {
    __extends(C_INFD, _super);
    function C_INFD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_INFD.prototype, "cboAmbiente", {
        get: function () {
            return window['cboAmbiente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_INFD.prototype, "cboImpressora", {
        get: function () {
            return window['cboImpressora_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_INFD.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_INFD.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.dlgSelecaoImpressora) {
            adicionarEventoMoura(this.cboAmbiente.SelectedItemChanged, this.OnPreencheComboImpressora, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnGridSelecionouLinha, this);
        }
    };
    C_INFD.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    C_INFD.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("PreencherGrade", parametros);
            this.grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_INFD.prototype.OnPreencheComboImpressora = function () {
        this.cboImpressora.ClearItems();
        var parametros;
        parametros = {
            ambiente: this.cboAmbiente.GetValue()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("PreencherComboImpressora", parametros);
        this.EntityTela.Id_Maquina = retorno[0].Micro_Resp;
        for (var i = 0; i < retorno.length; i++) {
            this.cboImpressora.AddItem(retorno[i].Descricao, retorno[i].Codigo, "");
        }
        this.RefreshAngular();
    };
    C_INFD.prototype.OnGridSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_INFD.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.LimparCampos();
        this.RefreshAngular();
    };
    C_INFD.prototype.LimparCampos = function () {
        this.cboAmbiente.SetValue("");
        this.cboImpressora.ClearItems();
        this.PreencherGrade();
    };
    C_INFD.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Ipmanual = "S";
        return true;
    };
    C_INFD.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        var parametros;
        parametros = {};
        var cad = this.ExecutarFuncaoServerSideSynch("PreencherGrade", parametros);
        for (var i = 0; i < cad.length; i++) {
            if (cad[i].Codigo == Entity.Codigo) {
                if (this.cboAmbiente.GetValue() != cad[i].ARCodigo) {
                    this.cboAmbiente.SetValue(cad[i].ARCodigo);
                    this.OnPreencheComboImpressora();
                }
                Entity.Impressora_Nao_Fiscal = cad[i].Impressora_Nao_Fiscal;
            }
        }
    };
    C_INFD.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    return C_INFD;
}(MouraPageCadastroAngular));
var c_INFD = new C_INFD();
//# sourceMappingURL=C_INFD.js.map