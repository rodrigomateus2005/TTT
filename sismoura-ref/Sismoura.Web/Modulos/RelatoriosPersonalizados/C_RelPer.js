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
var C_RelPer = /** @class */ (function (_super) {
    __extends(C_RelPer, _super);
    function C_RelPer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_RelPer.prototype, "Filtros", {
        get: function () {
            return this.GetScope()["Filtros"];
        },
        set: function (value) {
            this.GetScope()["Filtros"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RelPer.prototype, "Colunas", {
        get: function () {
            return this.GetScope()["Colunas"];
        },
        set: function (value) {
            this.GetScope()["Colunas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RelPer.prototype, "Totalizadores", {
        get: function () {
            return this.GetScope()["Totalizadores"];
        },
        set: function (value) {
            this.GetScope()["Totalizadores"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RelPer.prototype, "txtFiltroVariavel_Inicio", {
        get: function () {
            return window['txtFiltroVariavel_Inicio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RelPer.prototype, "txtFiltroVariavel_Fim", {
        get: function () {
            return window['txtFiltroVariavel_Fim_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RelPer.prototype, "cboFiltroCasas_Decimais", {
        get: function () {
            return window['cboFiltroCasas_Decimais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RelPer.prototype, "txtFiltroMaxLenght", {
        get: function () {
            return window['txtFiltroMaxLenght_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RelPer.prototype, "txtFiltroCampo_Codigo", {
        get: function () {
            return window['txtFiltroCampo_Codigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RelPer.prototype, "txtFiltroCampo_Descricao", {
        get: function () {
            return window['txtFiltroCampo_Descricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RelPer.prototype, "cboFiltroEngine_Procura", {
        get: function () {
            return window['cboFiltroEngine_Procura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RelPer.prototype, "chkFiltroExibir_Todos", {
        get: function () {
            return window['chkFiltroExibir_Todos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RelPer.prototype, "txtFiltroScript", {
        get: function () {
            return window['txtFiltroScript_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RelPer.prototype, "cboColunaCasas_Decimais", {
        get: function () {
            return window['cboColunaCasas_Decimais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RelPer.prototype, "btnExportar", {
        get: function () {
            return window['btnExportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RelPer.prototype, "btnImportar", {
        get: function () {
            return window['btnImportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RelPer.prototype, "btnTestar", {
        get: function () {
            return window['btnTestar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RelPer.prototype, "fpImport", {
        get: function () {
            return window['fpImport_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_RelPer.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnExportar) {
            adicionarEventoMoura(this.btnExportar.Click, this.btnExportar_Click, this);
        }
        if (this.btnImportar) {
            adicionarEventoMoura(this.btnImportar.Click, this.btnImportar_Click, this);
        }
        if (this.btnTestar) {
            adicionarEventoMoura(this.btnTestar.Click, this.btnTestar_Click, this);
        }
        if (this.fpImport) {
            adicionarEventoMoura(this.fpImport.ValueChanged, this.fpImport_ValueChanged, this);
        }
    };
    C_RelPer.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouFiltroTipo) {
            this.GetScope().MudouFiltroTipo = $.proxy(this.MudouFiltroTipo, this);
            this.GetScope().$watch(function (scope) { return scope.Filtro.Tipo; }, this.GetScope().MudouFiltroTipo);
        }
        if (!this.GetScope().MudouColunaTipo) {
            this.GetScope().MudouColunaTipo = $.proxy(this.MudouColunaTipo, this);
            this.GetScope().$watch(function (scope) { return scope.Coluna.Tipo; }, this.GetScope().MudouColunaTipo);
        }
    };
    C_RelPer.prototype.MudouFiltroTipo = function (newValue, oldValue) {
        this.txtFiltroVariavel_Fim.Visible = false;
        this.cboFiltroCasas_Decimais.Visible = false;
        this.txtFiltroMaxLenght.Visible = false;
        this.cboFiltroEngine_Procura.Visible = false;
        this.chkFiltroExibir_Todos.Visible = false;
        this.txtFiltroCampo_Codigo.Visible = false;
        this.txtFiltroCampo_Descricao.Visible = false;
        this.txtFiltroScript.Visible = false;
        this.txtFiltroVariavel_Inicio.SetTextLabelControl("Variável");
        if (newValue && typeof newValue == "string") {
            newValue = newValue.CNum();
        }
        switch (newValue) {
            case 3 /* Periodo_Data */:
            case 4 /* Periodo_Hora */:
                this.txtFiltroVariavel_Inicio.SetTextLabelControl("Variável Inicio");
                this.txtFiltroVariavel_Fim.Visible = true;
                break;
            case 0 /* Texto */:
                this.txtFiltroMaxLenght.Visible = true;
                break;
            case 2 /* Numero_Decimal */:
                this.cboFiltroCasas_Decimais.Visible = true;
                break;
            case 8 /* Combobox */:
                this.chkFiltroExibir_Todos.Visible = true;
            case 7 /* CheckboxList */:
                this.txtFiltroCampo_Codigo.Visible = true;
                this.txtFiltroCampo_Descricao.Visible = true;
                this.txtFiltroScript.Visible = true;
                break;
            case 9 /* ProcuraComLista */:
            case 10 /* Procura */:
                this.cboFiltroEngine_Procura.Visible = true;
                break;
        }
    };
    C_RelPer.prototype.MudouColunaTipo = function (newValue, oldValue) {
        if (newValue && typeof newValue == "string") {
            newValue = newValue.CNum();
        }
        this.cboColunaCasas_Decimais.Visible = false;
        if (newValue == 2 /* Numero_Decimal */) {
            this.cboColunaCasas_Decimais.Visible = true;
        }
    };
    C_RelPer.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Permitir_Agrupar = true;
        Entity.Permitir_Mover = true;
        Entity.Permitir_Ordernar = true;
        this.Filtros = [];
        this.Colunas = [];
        this.Totalizadores = [];
    };
    C_RelPer.prototype.OnAntesGravar = function () {
        if (_super.prototype.OnAntesGravar.call(this)) {
            this.EntityTela.Filtros = this.Filtros;
            this.EntityTela.Colunas = this.Colunas;
            this.EntityTela.Totalizadores = this.Totalizadores;
            return true;
        }
    };
    C_RelPer.prototype.OnAntesSetEntidade = function (Evento) {
        if (Evento.Entidade) {
            this.Filtros = Evento.Entidade.Filtros;
            this.Colunas = Evento.Entidade.Colunas;
            this.Totalizadores = Evento.Entidade.Totalizadores;
        }
        else {
            this.Filtros = [];
            this.Colunas = [];
            this.Totalizadores = [];
        }
    };
    C_RelPer.prototype.btnExportar_Click = function () {
        var exportar = cloneObject(this.EntityTela);
        delete exportar.Codigo;
        downloadArquivo(JSON.stringify(exportar), "exportacao.json", "application/json");
    };
    C_RelPer.prototype.btnImportar_Click = function () {
        this.fpImport.AbrirTela();
    };
    C_RelPer.prototype.btnTestar_Click = function () {
        if (this.EntityTela && this.EntityTela.Codigo > 0) {
            abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.RelacaoPersonalizada) + "?codRelacao=" + this.EntityTela.Codigo.toString(), null);
        }
    };
    C_RelPer.prototype.fpImport_ValueChanged = function (s, e) {
        var _this = this;
        if (e.value.length > 0) {
            if (!e.value[0].name.endsWith(".json")) {
                MostrarAlerta("Apenas arquivos .json são permitidos");
            }
            else {
                var reader = new FileReader();
                reader.onloadend = function (ev) {
                    var contentFile = reader.result;
                    try {
                        var entity = JSON.parse(contentFile);
                        _this.SetEntity(entity);
                    }
                    catch (e) {
                        MostrarError("Arquivo JSON inválido");
                    }
                };
                reader.readAsText(e.value[0]);
            }
            this.fpImport.FileUpload.reset();
        }
    };
    return C_RelPer;
}(MouraPageCadastroAngular));
var c_RelPer = new C_RelPer();
//# sourceMappingURL=C_RelPer.js.map