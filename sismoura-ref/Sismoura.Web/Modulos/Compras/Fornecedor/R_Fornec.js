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
var R_Fornec = /** @class */ (function (_super) {
    __extends(R_Fornec, _super);
    function R_Fornec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Fornec.prototype, "AccordionFiltros", {
        get: function () {
            return window["accCadastro_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Fornec.prototype, "grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Fornec.prototype, "chkRepresentantes", {
        get: function () {
            return window['chkRepresentantes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Fornec.prototype, "Entity", {
        get: function () {
            if (!this.GetScope()["Entity"]) {
                this.GetScope()["Entity"] = {};
            }
            return this.GetScope()["Entity"];
        },
        set: function (value) {
            this.GetScope()["Entity"] = value;
        },
        enumerable: true,
        configurable: true
    });
    R_Fornec.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        if (!this.GetScope().OnchkRepresentantes) {
            this.GetScope().OnchkRepresentantes = $.proxy(this.OnchkRepresentantes, this);
            this.GetScope().$watch(function (scope) { return scope.Representantes; }, this.GetScope().OnchkRepresentantes);
        }
    };
    R_Fornec.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
    };
    R_Fornec.prototype.OnSelecionouLinha = function (s, e) {
        abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDeFornecedor), e.rowKey);
    };
    R_Fornec.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Entity.Segmento = "0";
        this.Entity.Cidade = null;
        this.Entity.Comprador = null;
        this.Entity.Filtro = "0";
        this.Entity.Representantes = null;
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_Fornec.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            var configuracao = void 0;
            if (ValoresSismoura.ConfiguracoesRetaguarda.Campo_Comprador == 0) {
                configuracao = false;
            }
            else {
                configuracao = true;
            }
            parametros = {
                comprador: CNum(this.Entity.Comprador),
                segmento: CNum(this.Entity.Segmento),
                cidade: CNum(this.Entity.Cidade),
                filtro: this.Entity.Filtro,
                configuracao: configuracao
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Fornec.prototype.OnchkRepresentantes = function () {
        this.grid.ColunaVisible("Representante", this.chkRepresentantes.Checked);
    };
    return R_Fornec;
}(MouraPageRelacaoAngular));
var r_Fornec = new R_Fornec();
//# sourceMappingURL=R_Fornec.js.map