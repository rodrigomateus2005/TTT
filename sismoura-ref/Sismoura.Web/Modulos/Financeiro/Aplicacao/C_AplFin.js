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
var C_AplFin = /** @class */ (function (_super) {
    __extends(C_AplFin, _super);
    function C_AplFin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_AplFin.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AplFin.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AplFin.prototype, "txtFornecedor", {
        get: function () {
            return window['txtFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AplFin.prototype, "txtValor", {
        get: function () {
            return window['txtValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AplFin.prototype, "txtJuros", {
        get: function () {
            return window['txtJuros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AplFin.prototype, "txtDias", {
        get: function () {
            return window['txtDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AplFin.prototype, "txtData_Parcela", {
        get: function () {
            return window['txtData_Parcela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AplFin.prototype, "txtParcelas", {
        get: function () {
            return window['txtParcelas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AplFin.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AplFin.prototype, "cboConta_Corrente_Destino", {
        get: function () {
            return window['cboConta_Corrente_Destino_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AplFin.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AplFin.prototype, "Dados", {
        get: function () {
            return this.GetScope()["Dados"];
        },
        set: function (value) {
            this.GetScope()["Dados"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AplFin.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_AplFin.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.Procurou, this.OnProcurou, this);
        }
        if (this.cboTipo) {
            adicionarEventoDevExpress(this.cboTipo.Combo.SelectedIndexChanged, this.alterarTipo, this);
        }
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.GerarParcelas, this);
        }
    };
    C_AplFin.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.alterarTipo();
        this.GetScope().$applyAsync();
    };
    C_AplFin.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.cboTipo.LimparSelecao();
        this.alterarTipo();
        Entity.Aplicacao_Parcelas = [];
        this.Dados = [];
        this.grid.Limpar();
        Entity.Data = new Date();
        Entity.Data_Parcela = new Date();
        this.GetScope().$applyAsync();
    };
    C_AplFin.prototype.OnProcurou = function () {
        var parametros = {
            Aplicacao: this.txtCodigo.GetText().CNum()
        };
        if (this.txtCodigo.GetText().CNum() > 0) {
            var Itens = this.ExecutarFuncaoServerSideSynch("getByAplicacao", parametros);
            this.Dados = Itens;
            var entidade = this.GetScope().Entity;
            entidade.Aplicacao_Parcelas = this.Dados;
            this.GetScope().Entity = entidade;
            this.alterarTipo();
            this.GetScope().$applyAsync();
        }
    };
    C_AplFin.prototype.alterarTipo = function () {
        if (this.cboTipo.GetValue() == "0") {
            this.txtFornecedor.Visible = false;
        }
        else if (this.cboTipo.GetValue() == "1") {
            this.txtFornecedor.Visible = true;
        }
        else {
            this.txtFornecedor.Visible = false;
        }
    };
    C_AplFin.prototype.GerarParcelas = function (s, e) {
        e.processOnServer = false;
        if (this.txtValor.GetText().CNum() == 0) {
            MostrarAlerta("Preencha o campo corretamente: Valor Total");
        }
        else if (this.txtParcelas.GetText().CNum() == 0) {
            MostrarAlerta("Preencha o campo corretamente: Parcelas");
        }
        else if (this.txtData_Parcela.Date == null) {
            MostrarAlerta("Preencha o campo corretamente: Data da Primeira parcela");
        }
        else if (this.txtDias.GetText().CNum() == 0) {
            MostrarAlerta("Informe os dias para gerar a parcela!");
        }
        else {
            var parametros = {
                Valor: this.txtValor.GetText().CNum(),
                Juros: this.txtJuros.GetText().CNum(),
                Parcelas: this.txtParcelas.GetText().CNum(),
                Data: this.txtData_Parcela.Date,
                Dias: this.txtDias.GetText().CNum()
            };
            var Itens = this.ExecutarFuncaoServerSideSynch("Gerar_Parcelas", parametros);
            this.Dados = Itens;
            var entidade = this.GetScope().Entity;
            entidade.Aplicacao_Parcelas = this.Dados;
            this.GetScope().Entity = entidade;
            this.GetScope().$applyAsync();
        }
    };
    return C_AplFin;
}(MouraPageCadastroAngular));
var c_AplFin = new C_AplFin();
//# sourceMappingURL=C_AplFin.js.map