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
var C_ZonaV = /** @class */ (function (_super) {
    __extends(C_ZonaV, _super);
    function C_ZonaV() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ZonaV.prototype, "accItens", {
        get: function () {
            return window['accItens_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ZonaV.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ZonaV.prototype, "gridComissao", {
        get: function () {
            return window['gridComissao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ZonaV.prototype, "Cadastrados", {
        get: function () {
            if (!this.GetScope()['Cadastrados']) {
                this.GetScope()['Cadastrados'] = [];
            }
            return this.GetScope()['Cadastrados'];
        },
        set: function (value) {
            this.GetScope()['Cadastrados'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ZonaV.prototype, "Comissoes", {
        get: function () {
            if (!this.GetScope()['Comissoes']) {
                this.GetScope()['Comissoes'] = [];
            }
            return this.GetScope()['Comissoes'];
        },
        set: function (value) {
            this.GetScope()['Comissoes'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ZonaV.prototype, "Comissao", {
        get: function () {
            if (!this.GetScope()['Comissao']) {
                this.GetScope()['Comissao'] = {};
            }
            return this.GetScope()['Comissao'];
        },
        set: function (value) {
            this.GetScope()['Comissao'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ZonaV.prototype, "txtTaxaServico", {
        get: function () {
            return window['txtTaxaServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ZonaV.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ZonaV.prototype, "txtComissaoMoura", {
        get: function () {
            return window['txtComissaoMoura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ZonaV.prototype, "txtComissao", {
        get: function () {
            return window['txtComissao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ZonaV.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (ValoresSismoura.ConfiguracoesRetaguarda.taxa_serv_zona_venda != "S") {
            this.txtTaxaServico.Visible = true;
        }
        else {
            this.txtTaxaServico.Visible = false;
        }
        var parametros = {};
        var cad = this.ExecutarFuncaoServerSideSynch("GetEmpresaPadrao", parametros);
        if (cad == "64152986000106") {
            this.gridComissao.Grid.Visible = true;
            this.gridComissao.btnAdiconar.Visible = true;
            this.gridComissao.btnNovo.Visible = true;
            this.txtContaContabil.Visible = true;
            this.txtComissaoMoura.Obrigatorio = true;
            this.accItens.Visible = true;
            this.txtComissao.Visible = false;
        }
        else {
            this.accItens.Visible = false;
            this.gridComissao.btnAdiconar.Visible = false;
            this.gridComissao.btnNovo.Visible = false;
            this.gridComissao.Grid.Visible = false;
            this.txtContaContabil.Visible = false;
            this.txtComissaoMoura.Obrigatorio = false;
        }
        this.OnDepoisLimpar(this.EntityTela);
        this.PreencherGrade();
    };
    C_ZonaV.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.Grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.gridComissao) {
            adicionarEventoMoura(this.gridComissao.AdicionandoItem, this.OnAdicionandoItemComissao, this);
        }
    };
    C_ZonaV.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.Comissoes = [];
        this.LimparCamposComissao();
        this.RefreshAngular();
        return true;
    };
    C_ZonaV.prototype.LimparCamposComissao = function () {
        this.Comissao.ContaContabil = null;
        this.Comissao.Comissao = null;
    };
    C_ZonaV.prototype.OnSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        this.PreencherDadosComissao();
    };
    C_ZonaV.prototype.PreencherGrade = function () {
        var parametros;
        if (!this.EntityTela) {
            return;
        }
        try {
            parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.Cadastrados = retorno;
            this.Grid.Grid.Refresh();
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    C_ZonaV.prototype.PreencherDadosComissao = function () {
        var parametros;
        try {
            parametros = {
                codigo: CNum(this.EntityTela.Codigo)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherDadosComissao", parametros);
            this.Comissoes = retorno;
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    C_ZonaV.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_ZonaV.prototype.OnDepoisClickNovo = function () {
        _super.prototype.OnDepoisClickNovo.call(this);
        return true;
    };
    C_ZonaV.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_ZonaV.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Zona_Venda_Comissao_Itens = this.Comissoes;
        return true;
    };
    C_ZonaV.prototype.OnAdicionandoItemComissao = function (s, e) {
        var validaContaContabil = this.Comissoes.FindAll("Cod_Conta_Contabil", e.item.Cod_Conta_Contabil);
        if (validaContaContabil.length > 0) {
            MostrarAlerta("Esta Conta Contábil já está adicionada na grade");
            e.cancelar = true;
            return;
        }
        e.item.Contador = this.Comissoes.Max("Contador") + 1;
        e.item.Conta_Contabil_Descricao = this.txtContaContabil.GetResultado();
    };
    C_ZonaV.prototype.OnDepoisBuscarExistente = function (entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, entity);
        this.PreencherDadosComissao();
    };
    return C_ZonaV;
}(MouraPageCadastroAngular));
var c_ZonaV = new C_ZonaV();
//# sourceMappingURL=C_ZonaV.js.map