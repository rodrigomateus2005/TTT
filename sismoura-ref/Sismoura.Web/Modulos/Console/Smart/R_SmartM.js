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
var R_SmartM = /** @class */ (function (_super) {
    __extends(R_SmartM, _super);
    function R_SmartM() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_SmartM.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SmartM.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SmartM.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SmartM.prototype, "cboAno", {
        get: function () {
            return window['cboAno_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SmartM.prototype, "txtUsuario", {
        get: function () {
            return window['txtUsuario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_SmartM.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_SmartM.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.ClickBotaoLinha, this.ClickBotaoLinha, this);
        }
        if (this.txtUsuario) {
            adicionarEventoMoura(this.txtUsuario.Procurou, this.ProcurouUsuario, this);
        }
    };
    R_SmartM.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Ano = this.DataServidor().getFullYear();
        this.Filtro.Tipo = "0";
        this.Filtro.Usuario = 0;
        this.Filtro.Relacionar = "0";
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_SmartM.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            parametros = {
                ano: CNum(this.Filtro.Ano),
                usuario: CNum(this.Filtro.Usuario),
                tipo: this.Filtro.Tipo + "",
                relacionar: this.Filtro.Relacionar + ""
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.grid.PreencherGrid(retorno);
            this.accCadastro.SetExpanded(false);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_SmartM.prototype.ClickBotaoLinha = function (s, e) {
        var codigo = e.data["Codigo"];
        try {
            if (e.commandName == "btnMeta") {
                var parametros = [];
                parametros.push("Codigo=" + codigo);
                parametros.push("Ano=" + CNum(this.Filtro.Ano));
                abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroDeMetaSmart), parametros);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_SmartM.prototype.ProcurouUsuario = function (s, e) {
        if (this.Filtro.Usuario) {
            var anos = void 0;
            var parametros = void 0;
            parametros = {
                usuario: CNum(this.Filtro.Usuario)
            };
            anos = this.ExecutarFuncaoServerSideSynch("GetAnoMetaCadastrada", parametros);
            if (anos == null || anos.length == 0) {
                MostrarAlerta("Usuário sem METAS cadastradas.");
            }
            else {
                this.PreencherComboAno(anos);
            }
        }
    };
    R_SmartM.prototype.PreencherComboAno = function (itens) {
        if (this.cboAno && this.cboAno.Combo) {
            for (var x = 0; x < itens.length; x++) {
                this.cboAno.Combo.AddItem(itens[x].toString(), itens[x], "");
            }
        }
    };
    return R_SmartM;
}(MouraPageRelacaoAngular));
var r_SmartM = new R_SmartM();
//# sourceMappingURL=R_SmartM.js.map