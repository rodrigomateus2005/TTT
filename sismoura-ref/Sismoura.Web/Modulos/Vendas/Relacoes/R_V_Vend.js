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
var R_V_Vend = /** @class */ (function (_super) {
    __extends(R_V_Vend, _super);
    function R_V_Vend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_V_Vend.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_V_Vend.prototype, "Tipo", {
        get: function () {
            return this.GetScope()["Tipo"];
        },
        set: function (value) {
            this.GetScope()["Tipo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_V_Vend.prototype, "TipoRelacao", {
        get: function () {
            return this.GetScope()["TipoRelacao"];
        },
        set: function (value) {
            this.GetScope()["TipoRelacao"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_V_Vend.prototype, "gridSubgrupo", {
        get: function () {
            return window['gridSubgrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_V_Vend.prototype, "gridGrupo", {
        get: function () {
            return window['gridGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_V_Vend.prototype, "gridPagamento", {
        get: function () {
            return window['gridPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_V_Vend.prototype, "gridCliente", {
        get: function () {
            return window['gridCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_V_Vend.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_V_Vend.prototype, "txtVendedor", {
        get: function () {
            return window['txtVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_V_Vend.prototype, "cboCaixa", {
        get: function () {
            return window['cboCaixa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_V_Vend.prototype, "txtCidade", {
        get: function () {
            return window['txtCidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_V_Vend.prototype, "cboTipoRelacao", {
        get: function () {
            return window['cboTipoRelacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_V_Vend.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_V_Vend.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_V_Vend.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_V_Vend.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouTipo) {
            this.GetScope().MudouTipo = $.proxy(this.MudouTipo, this);
            this.GetScope().$watch(function (scope) { return scope.Tipo; }, this.GetScope().MudouTipo);
        }
        this.Tipo = "Grupo";
        this.TipoRelacao = "T";
        this.RefreshAngular();
    };
    R_V_Vend.prototype.MudouTipo = function () {
        switch (this.Tipo) {
            case "Grupo": {
                this.gridGrupo.Visible = true;
                this.gridSubgrupo.Visible = false;
                this.gridPagamento.Visible = false;
                this.gridCliente.Visible = false;
                break;
            }
            case "Subgrupo": {
                this.gridGrupo.Visible = false;
                this.gridSubgrupo.Visible = true;
                this.gridPagamento.Visible = false;
                this.gridCliente.Visible = false;
                break;
            }
            case "Pagamento": {
                this.gridGrupo.Visible = false;
                this.gridSubgrupo.Visible = false;
                this.gridPagamento.Visible = true;
                this.gridCliente.Visible = false;
                break;
            }
            case "Cliente": {
                this.gridGrupo.Visible = false;
                this.gridSubgrupo.Visible = false;
                this.gridPagamento.Visible = false;
                this.gridCliente.Visible = true;
                break;
            }
        }
        this.LimparGrades();
    };
    R_V_Vend.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (this.txtVendedor.GetText() == "") {
            MostrarAlerta('Preencha corretamente o Campo: Vendedor');
            this.txtVendedor.Focus();
            return;
        }
        if (!this.txtPeriodo.IsValido()) {
            MostrarAlerta('Preencha corretamente o Campo: Período');
            return;
        }
        var caixa = 0;
        if (this.cboCaixa.cboCaixa.GetValue() != null) {
            caixa = this.cboCaixa.cboCaixa.GetValue();
        }
        var parametros = {
            tipo: this.Tipo,
            dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
            dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
            codVendedor: this.txtVendedor.GetText().CNum(),
            codPDV: this.cboCaixa.cboPdv.GetValue().CNum(),
            codCaixa: caixa,
            codCidade: this.txtCidade.GetText().CNum(),
            tipoRelacao: this.cboTipoRelacao.GetValue(),
            listaEmpresas: this.lstEmpresa.GetValues(),
            discriminarData: true,
            exibirTrocas: true,
            codUsuario: ValoresSismoura.UsuarioLogado,
            nomeTela: ValoresSismoura.NomeTela
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrade", parametros);
        switch (this.Tipo) {
            case "Grupo": {
                this.gridGrupo.PreencherGrid(retorno);
                break;
            }
            case "Subgrupo": {
                this.gridSubgrupo.PreencherGrid(retorno);
                break;
            }
            case "Pagamento": {
                this.gridPagamento.PreencherGrid(retorno);
                break;
            }
            case "Cliente": {
                this.gridCliente.PreencherGrid(retorno);
                break;
            }
        }
    };
    R_V_Vend.prototype.LimparGrades = function () {
        this.gridGrupo.PreencherGrid([]);
        this.gridSubgrupo.PreencherGrid([]);
        this.gridPagamento.PreencherGrid([]);
        this.gridCliente.PreencherGrid([]);
    };
    R_V_Vend.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtVendedor.Limpar();
        this.txtPeriodo.IniciarDataAtual();
        this.Tipo = "Grupo";
        this.TipoRelacao = "T";
        this.lstEmpresa.LimparSelecao();
        this.txtCidade.Limpar();
        var empresaPadrao = [];
        empresaPadrao.push("" + ValoresSismoura.EmpresaPadraoUsuario);
        this.lstEmpresa.SetValues(empresaPadrao);
        this.cboCaixa.cboPdv.SetValue(0);
        this.cboCaixa.cboCaixa.LimparSelecao();
        this.cboTipoRelacao.SetSelectedIndex(0);
        this.cboTipo.SetSelectedIndex(0);
        this.LimparGrades();
    };
    return R_V_Vend;
}(MouraPageRelacaoAngular));
var r_V_Vend = new R_V_Vend();
//# sourceMappingURL=R_V_Vend.js.map