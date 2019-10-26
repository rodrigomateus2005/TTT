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
var C_TabNcm = /** @class */ (function (_super) {
    __extends(C_TabNcm, _super);
    function C_TabNcm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_TabNcm.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabNcm.prototype, "txtNCM", {
        get: function () {
            return window['txtNCM_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabNcm.prototype, "txtUnTrib", {
        get: function () {
            return window['txtUnTrib_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabNcm.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabNcm.prototype, "txtDtVigIni", {
        get: function () {
            return window['txtDtVigIni_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabNcm.prototype, "txtDtVigFim", {
        get: function () {
            return window['txtDtVigFim_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabNcm.prototype, "txtDtVigAlt", {
        get: function () {
            return window['txtDtVigAlt_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabNcm.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_TabNcm.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
    };
    C_TabNcm.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
        this.txtDtVigIni.Date = new Date();
        this.txtDtVigFim.Date = new Date();
        this.txtDtVigAlt.Date = new Date();
    };
    C_TabNcm.prototype.OnSelecionouLinha = function (s, e) {
        this.txtCodigo.Procurar(e.data['Codigo']);
    };
    C_TabNcm.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.txtDtVigFim.Date != null) {
            if (this.txtDtVigFim.Date < this.txtDtVigIni.Date) {
                MostrarAlerta("A Data de Vigência Final não pode ser anterior que a Data de Vigência Inicial!");
                return false;
            }
        }
        return true;
    };
    C_TabNcm.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_TabNcm.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_TabNcm.prototype.LimparCampos = function () {
        this.txtCodigo.Limpar();
        this.txtNCM.Limpar();
        this.txtUnTrib.Limpar();
        this.txtDescricao.Limpar();
        this.txtDtVigIni.Date = null;
        this.txtDtVigFim.Date = null;
        this.txtDtVigAlt.Date = null;
        this.RefreshAngular();
    };
    C_TabNcm.prototype.PreencherGrade = function () {
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
    return C_TabNcm;
}(MouraPageCadastroAngular));
var c_TabNcm = new C_TabNcm();
//# sourceMappingURL=C_TabNcm.js.map