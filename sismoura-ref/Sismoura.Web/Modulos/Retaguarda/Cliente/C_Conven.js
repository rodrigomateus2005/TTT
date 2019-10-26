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
var C_Conven = /** @class */ (function (_super) {
    __extends(C_Conven, _super);
    function C_Conven() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Conven.prototype, "lstTipo", {
        get: function () {
            return window['lstTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Conven.prototype, "txtCPF", {
        get: function () {
            return window['txtCPF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Conven.prototype, "txtRG", {
        get: function () {
            return window['txtRG_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Conven.prototype, "txtCep", {
        get: function () {
            return window['txtCep_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Conven.prototype, "txtEndereco", {
        get: function () {
            return window['txtEndereco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Conven.prototype, "txtBairro", {
        get: function () {
            return window['txtBairro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Conven.prototype, "txtNumero", {
        get: function () {
            return window['txtNumero_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Conven.prototype, "grdGrupos", {
        get: function () {
            return window['grdGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Conven.prototype, "cboOperadora", {
        get: function () {
            return window['cboOperadora_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Conven.prototype, "cboTipo_Custo", {
        get: function () {
            return window['cboTipo_Custo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Conven.prototype, "cboContribuinte_ICMS", {
        get: function () {
            return window['cboContribuinte_ICMS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Conven.prototype, "Grupos", {
        get: function () {
            return this.GetScope()["Grupos"];
        },
        set: function (value) {
            this.GetScope()["Grupos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Conven.prototype, "txtDesconto", {
        get: function () {
            return window['txtDesconto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Conven.prototype, "txtAcrescimo", {
        get: function () {
            return window['txtAcrescimo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Conven.prototype, "txtLayout", {
        get: function () {
            return window['txtLayout_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Conven.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.txtCep) {
            adicionarEventoMoura(this.txtCep.PesquisouCEP, this.OnConsultarCEP, this);
        }
        if (this.lstTipo) {
            adicionarEventoJQuery(this.lstTipo.RadioButtonList, "change", this.SetTextOnCpf, this);
        }
    };
    C_Conven.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouTipo) {
            this.GetScope().MudouTipo = $.proxy(this.MudouTipo, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Tipo; }, this.GetScope().MudouTipo);
        }
        if (!this.GetScope().MudouPrecoCusto) {
            this.GetScope().MudouPrecoCusto = $.proxy(this.MudouPrecoCusto, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Vender_Preco_Custo; }, this.GetScope().MudouPrecoCusto);
        }
        this.BuscarGrid();
    };
    C_Conven.prototype.SetTextOnCpf = function () {
        var entidade = this.GetScope().Entity;
        if (this.lstTipo.GetValue() == "J")
            entidade.Cnpj = "__.___.___/____-__";
        else
            entidade.Cnpj = "___.___.___-__";
    };
    C_Conven.prototype.BuscarGrid = function () {
        var parametros = {
            codConvenio: 0
        };
        var Grupos = this.ExecutarFuncaoServerSideSynch("CarregarGrupos", parametros);
        this.Grupos = Grupos;
    };
    C_Conven.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        Entidade.Contribuinte_ICMS = this.GetIcmsFromPessoa(Entidade.Codigo_Cliente);
        this.cboContribuinte_ICMS.SetValue(Entidade.Contribuinte_ICMS);
        if (!Entidade.Convenio_Grupo) {
            Entidade.Convenio_Grupo = [];
        }
        var parametros = {
            codConvenio: Entidade.Codigo
        };
        var Grupos = this.ExecutarFuncaoServerSideSynch("CarregarGrupos", parametros);
        this.Grupos = Grupos;
        this.txtLayout.SetText(Entidade.Codigo_Layout);
    };
    C_Conven.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entidade = this.GetScope().Entity;
        if (entidade.Dia_Pagamento == null) {
            if (entidade.Dia_Pagamento <= 0 || entidade.Dia_Pagamento > 31) {
                MostrarAlerta("Por favor preencha o campo Dia do Pagamento com um dia correto do mês.");
                return false;
            }
            MostrarAlerta("Por favor preencha o campo Dia do Pagamento com um dia correto do mês.");
            return false;
        }
        if (entidade.Dia_Fechamento < 0 || entidade.Dia_Fechamento > 31) {
            MostrarAlerta("Por favor preencha o campo Dia do Fechamento com um dia correto do mês.");
            return false;
        }
        entidade.Operadora = this.cboOperadora.GetValue();
        entidade.Tipo_Custo = this.cboTipo_Custo.GetValue();
        entidade.Contribuinte_ICMS = this.cboContribuinte_ICMS.GetValue();
        this.PreencherGrupos(entidade);
        //Validacoes aqui
        return true;
    };
    C_Conven.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        //this.cboOperadora.SetValue("0");
        //this.cboContribuinte_ICMS.SetValue("9");
        //this.cboTipo_Custo.SetValue("PRECO_CUSTO");
        return true;
    };
    C_Conven.prototype.PreencherGrupos = function (entidade) {
        var grupos = this.Grupos;
        //let gruposExistentes = entidade.Convenio_Grupo;
        entidade.Convenio_Grupo = [];
        for (var x = 0; x < grupos.length; x++) {
            var novoGrupo = {};
            var grupoGrid = void 0;
            //if (!gruposExistentes)
            //    gruposExistentes = [];
            //for (let y = 0; y < gruposExistentes.length; y++) {
            //    if (gruposExistentes[y].Id == grupos[x].Id) {
            //        novoGrupo = gruposExistentes[y];
            //        //y = gruposExistentes.length;
            //    }
            //}
            grupoGrid = grupos[x];
            novoGrupo.Id = grupoGrid.Id;
            novoGrupo.Convenio = grupoGrid.Convenio;
            novoGrupo.Grupo = grupoGrid.Grupo;
            novoGrupo.Vender = grupoGrid.Vender;
            novoGrupo.Desconto = grupoGrid.Desconto;
            novoGrupo.Acrescimo = grupoGrid.Acrescimo;
            entidade.Convenio_Grupo.push(novoGrupo);
        }
    };
    C_Conven.prototype.OnGravouSucesso = function (s, e) {
    };
    C_Conven.prototype.OnExcluiuSucesso = function (s, e) {
    };
    C_Conven.prototype.MudouTipo = function (newValue, oldValue) {
        if (String.IsNullOrWhiteSpace(newValue)) {
            newValue = "F";
        }
        if (newValue == "F") {
            this.txtCPF.IsCPF = true;
            this.txtRG.SetTextLabelControl("R.G.");
        }
        else {
            this.txtCPF.IsCPF = false;
            this.txtRG.SetTextLabelControl("Inscrição Estadual");
        }
    };
    C_Conven.prototype.GetIcmsFromPessoa = function (codCliente) {
        var parametros = {
            codCliente: codCliente
        };
        return this.ExecutarFuncaoServerSideSynch("GetIcmsFromPessoa", parametros);
    };
    C_Conven.prototype.OnConsultarCEP = function (s, e) {
        if (e.EncontrouEndereco) {
            var entidade = this.GetScope().Entity;
            entidade.Bairro = e.Bairro;
            entidade.Endereco = e.Endereco;
            entidade.Cidade = e.CidadeCodigo;
            this.GetScope().$applyAsync();
        }
        else {
            this.txtCep.Focus();
        }
    };
    C_Conven.prototype.OnDepoisSetEntidade = function (Entidade) {
        this.MudouTipo(Entidade['Tipo'], "");
    };
    C_Conven.prototype.OnDepoisLimpar = function (Entity) {
        Entity.Tipo = "J";
        this.BuscarGrid();
        this.cboOperadora.SetValue("0");
        this.cboContribuinte_ICMS.SetValue("9");
        this.cboTipo_Custo.SetValue("PRECO_CUSTO");
        this.txtLayout.Limpar();
    };
    C_Conven.prototype.MudouPrecoCusto = function () {
        if (this.EntityTela.Vender_Preco_Custo) {
            this.txtDesconto.Enabled = false;
            this.txtAcrescimo.Enabled = false;
            this.EntityTela.Desconto = 0;
            this.EntityTela.Acrescimo = 0;
        }
        else {
            this.txtDesconto.Enabled = true;
            this.txtAcrescimo.Enabled = true;
        }
        this.RefreshAngular();
    };
    return C_Conven;
}(MouraPageCadastroAngular));
var c_Conven = new C_Conven();
//# sourceMappingURL=C_Conven.js.map