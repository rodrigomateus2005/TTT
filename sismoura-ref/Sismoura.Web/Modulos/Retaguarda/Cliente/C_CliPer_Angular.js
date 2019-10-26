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
var C_CliPer_Angular = /** @class */ (function (_super) {
    __extends(C_CliPer_Angular, _super);
    function C_CliPer_Angular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CliPer_Angular.prototype, "Item", {
        get: function () {
            var that = this.GetScope()["Item"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Item"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliPer_Angular.prototype, "Itens", {
        get: function () {
            return this.GetScope()["Itens"];
        },
        set: function (value) {
            this.GetScope()["Itens"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliPer_Angular.prototype, "GridCadastroCampos", {
        get: function () {
            return window['GridCadastroCampos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliPer_Angular.prototype, "GridItens", {
        get: function () {
            return window['GridItens_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliPer_Angular.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliPer_Angular.prototype, "cboPertence", {
        get: function () {
            return window['cboPertence_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliPer_Angular.prototype, "txtMascara", {
        get: function () {
            return window['txtMascara_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliPer_Angular.prototype, "txtItemDescricao", {
        get: function () {
            return window['txtItemDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliPer_Angular.prototype, "txtItem", {
        get: function () {
            return window['txtItem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliPer_Angular.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_CliPer_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.EntityTela.Tipo_Campo = "Combo";
        this.cboTipo.Combo.SetSelectedIndex(0);
        this.EntityTela.Pessoa = 1;
        this.cboPertence.Combo.SetSelectedIndex(0);
        this.txtMascara.Visible = false;
        if (!this.GetScope().AlterouTipoCampo) {
            this.GetScope().AlterouTipoCampo = $.proxy(this.AlterouTipoCampo, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Tipo_Campo; }, this.GetScope().AlterouTipoCampo);
        }
        this.PreencherGrade();
        this.OnDepoisLimpar(this.GetScope().Entity);
        this.txtItem.Limpar();
        this.RefreshAngular();
    };
    C_CliPer_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.GridCadastroCampos) {
            adicionarEventoMoura(this.GridCadastroCampos.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.GridItens) {
            adicionarEventoMoura(this.GridItens.LimpouItem, this.LimparItem, this);
            adicionarEventoMoura(this.GridItens.Validando, this.OnValidando, this);
            adicionarEventoMoura(this.GridItens.AdicionandoItem, this.OnClicouAdicionar, this);
        }
        if (this.txtItem) {
            adicionarEventoMoura(this.txtItem.LostFocus, this.OnTxtItemLostFocus, this);
        }
    };
    C_CliPer_Angular.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_CliPer_Angular.prototype.PreencherGrade = function () {
        try {
            var parametros = {};
            this.GridCadastroCampos.PreencherGrid(this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros));
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CliPer_Angular.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Tipo_Campo = "Combo";
        Entity.Pessoa = 1;
        this.Itens = [];
        this.LimparItem();
        this.txtItem.SetText("");
        this.RefreshAngular();
    };
    C_CliPer_Angular.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.LimparItem();
        var parametros = {
            codCampo: Entity.Codigo
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetItens", parametros);
        this.Itens = retorno.Itens;
        this.RefreshAngular();
    };
    C_CliPer_Angular.prototype.AlterouTipoCampo = function () {
        var tipo = this.cboTipo.GetValue();
        if (tipo == "Máscara" || tipo == "Telefone") {
            this.txtMascara.Visible = true;
        }
        else {
            this.txtMascara.Visible = false;
        }
    };
    C_CliPer_Angular.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Campos_Item = this.Itens;
        return true;
    };
    C_CliPer_Angular.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_CliPer_Angular.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_CliPer_Angular.prototype.LimparItem = function () {
        this.Item.Campo = 0;
        this.Item.Item = 0;
        this.Item.Descricao = "";
        this.Item.Codigo = 0;
        this.RefreshAngular();
    };
    C_CliPer_Angular.prototype.OnValidando = function (s, e) {
        if (this.cboTipo.GetValue() != "Combo") {
            MostrarAlerta("Somente o tipo de campo Combo pode possuir itens");
            e.cancelar = true;
            this.txtCodigo.Focus();
            return;
        }
        if (this.Itens.FirstOrDefault("Item", e.item.Item)) {
            this.Itens.FirstOrDefault("Item", e.item.Item).Descricao = e.item.Descricao;
            this.GridItens.AtualizarGrid();
            e.cancelar = true;
            this.txtItemDescricao.Limpar();
            this.txtItem.Limpar();
            return;
        }
    };
    C_CliPer_Angular.prototype.OnClicouAdicionar = function (s, e) {
        e.item.Item = s.Itens.length + 1;
    };
    C_CliPer_Angular.prototype.OnTxtItemLostFocus = function () {
        if (this.txtItem.GetText() != "" && this.txtItem.GetText() != "0") {
            var item = this.Itens.FirstOrDefault("Codigo", this.Item.Item);
            if (item != undefined) {
                this.Item.Descricao = item.Descricao;
                this.RefreshAngular();
            }
            else {
                MostrarAlerta("Registro não encontrado ou inativo");
                this.txtItem.Limpar();
            }
        }
    };
    return C_CliPer_Angular;
}(MouraPageCadastroAngular));
var c_CliPer_Angular = new C_CliPer_Angular();
//# sourceMappingURL=C_CliPer_Angular.js.map