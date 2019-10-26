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
var C_ConfEA = /** @class */ (function (_super) {
    __extends(C_ConfEA, _super);
    function C_ConfEA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ConfEA.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfEA.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfEA.prototype, "cboSerie", {
        get: function () {
            return window['cboSerie_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfEA.prototype, "txtDiaEmissao", {
        get: function () {
            return window['txtDiaEmissao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfEA.prototype, "cboTipoCompetencia", {
        get: function () {
            return window['cboTipoCompetencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfEA.prototype, "cboServico", {
        get: function () {
            return window['cboServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfEA.prototype, "cboServicoEspecifico", {
        get: function () {
            return window['cboServicoEspecifico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfEA.prototype, "txtDescricaoServico", {
        get: function () {
            return window['txtDescricaoServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfEA.prototype, "chkEmissaoTodos", {
        get: function () {
            return window['chkEmissaoTodos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfEA.prototype, "chkIssRetido", {
        get: function () {
            return window['chkIssRetido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfEA.prototype, "txtCidade", {
        get: function () {
            return window['txtCidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfEA.prototype, "txtValorEmissao", {
        get: function () {
            return window['txtValorEmissao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfEA.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfEA.prototype, "ServicoItens", {
        get: function () {
            if (!this.GetScope()["ServicoItens"]) {
                return [];
            }
            else {
                return this.GetScope()["ServicoItens"];
            }
        },
        set: function (value) {
            this.GetScope()["ServicoItens"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfEA.prototype, "Servico", {
        get: function () {
            if (!this.GetScope()["Servico"]) {
                return {};
            }
            else {
                return this.GetScope()["Servico"];
            }
        },
        set: function (value) {
            this.GetScope()["Servico"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfEA.prototype, "gridServicos", {
        get: function () {
            return window['gridServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ConfEA.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.chkEmissaoTodos) {
            adicionarEventoMoura(this.chkEmissaoTodos.CheckChanged, this.CheckChange, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.gridServicos) {
            adicionarEventoMoura(this.gridServicos.Validando, this.OnValidando, this);
            adicionarEventoMoura(this.gridServicos.Grid.SelecionouLinha, this.OnSelecionouLinhaServico, this);
        }
    };
    C_ConfEA.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().CheckChange) {
            this.GetScope().CheckChange = $.proxy(this.CheckChange, this);
            var that = this;
            this.GetScope().$watch(function (scope) { return scope.Entity.Emissao_Todos; }, this.GetScope().CheckChange);
        }
        if (!this.GetScope().PreencherComboServico) {
            this.GetScope().PreencherComboServico = $.proxy(this.PreencherComboServico, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Cod_Empresa; }, this.GetScope().PreencherComboServico);
        }
        this.LimparCampos();
        this.PreencherGrade();
    };
    C_ConfEA.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConfEA.prototype.PreencherGradeServico = function (Entidade) {
        var parametros;
        try {
            this.ServicoItens = [];
            parametros = {
                Id: Entidade.ID
            };
            abrirEspera("");
            this.ServicoItens = this.ExecutarFuncaoServerSideSynch("GetCadastradosServicos", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
        finally {
            fecharEspera();
            this.RefreshAngular();
        }
    };
    C_ConfEA.prototype.PreencherComboServico = function () {
        this.cboServicoEspecifico.ClearItems();
        var parametros;
        if (!this.EntityTela.Cod_Empresa) {
            return;
        }
        parametros = {
            codEmpresa: this.EntityTela.Cod_Empresa
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("PreencherComboServico", parametros);
        this.cboServico.ClearItems();
        for (var x = 0; x < retorno.length; x++) {
            this.cboServico.AddItem(retorno[x].Descricao, retorno[x].Codigo, "");
            this.cboServicoEspecifico.AddItem(retorno[x].Descricao, retorno[x].Codigo, "");
            if (retorno[x].Codigo == this.EntityTela.Servico) {
                this.cboServico.SetValue(this.EntityTela.Servico);
            }
        }
        this.cboServicoEspecifico.LimparSelecao();
    };
    C_ConfEA.prototype.OnSelecionouLinha = function (s, e) {
        this.PreencherEntidade("" + e.rowKey);
        this.EntityTela.Servico = e.data.Codigo_Servico;
        this.RefreshAngular();
        this.PreencherGradeServico(this.EntityTela);
        e.data.DescServ = "";
    };
    C_ConfEA.prototype.OnSelecionouLinhaServico = function (s, e) {
        this.txtCidade.Procurar(e.data.Codigo_Cidade);
        this.cboServicoEspecifico.SetValue(e.data.DescServ);
        if (e.data.ISS_Retido == "Sim" || e.data.ISS_Retido) {
            this.chkIssRetido.Checked = true;
        }
        else {
            this.chkIssRetido.Checked = false;
        }
    };
    C_ConfEA.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        debugger;
        this.EntityTela.ServicosEspecificos = [];
        for (var x = 0; x < this.ServicoItens.length; x++) {
            var servicoEspecifico = {};
            servicoEspecifico.Codigo_Cidade = this.ServicoItens[x].Codigo_Cidade;
            servicoEspecifico.Servico = this.ServicoItens[x].Servico;
            var issRetido = 0;
            if ((this.ServicoItens[x].ISS_Retido) != 0) {
                issRetido = 1;
            }
            servicoEspecifico.ISS_Retido = issRetido;
            this.EntityTela.ServicosEspecificos.push(servicoEspecifico);
        }
        return true;
    };
    C_ConfEA.prototype.OnValidando = function (s, e) {
        if (this.txtCidade.GetText() == "") {
            MostrarAlerta('Preencha o campo corretamente: Cidade');
            e.cancelar = true;
            return;
        }
        if (this.cboServicoEspecifico.GetValue() <= 0) {
            MostrarAlerta('Preencha o campo corretamente: Serviço Específico');
            e.cancelar = true;
            return;
        }
        var item = this.gridServicos.Grid.DataSource.FirstOrDefault("Codigo_Cidade", this.txtCidade.GetText());
        if (item) {
            MostrarAlerta('Cidade já possui um Serviço Específico cadastrado!');
            e.cancelar = true;
            return;
        }
        e.item.ISS_Retido = this.chkIssRetido.Checked;
        e.item.Cidade = this.txtCidade.GetResultado();
        e.item.DescServ = this.cboServicoEspecifico.GetText();
        e.item.Codigo_Cidade = this.txtCidade.GetText();
        e.item.Servico = this.cboServicoEspecifico.GetValue();
        this.cboServicoEspecifico.LimparSelecao();
    };
    C_ConfEA.prototype.CheckChange = function () {
        if (this.chkEmissaoTodos.Checked == true) {
            this.txtValorEmissao.Visible = false;
        }
        else {
            this.txtValorEmissao.Visible = true;
        }
    };
    C_ConfEA.prototype.OnAntesDeletar = function () {
        _super.prototype.OnAntesDeletar.call(this);
        var parametros;
        parametros = {
            ID: this.EntityTela.ID
        };
        this.EntityTela.ServicosEspecificos.push();
        if (this.ExecutarFuncaoServerSideSynch("VerificarClientes", parametros)) {
            MostrarAlerta("Não é possível excluir pois a empresa tem clientes vinculados na tela 'Configurar Clientes para Envio Automático'!");
            return false;
        }
        return true;
    };
    C_ConfEA.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_ConfEA.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        this.LimparCampos();
        this.EntityTela.ID = 0;
        return true;
    };
    C_ConfEA.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.LimparCampos();
    };
    C_ConfEA.prototype.LimparCampos = function () {
        this.ServicoItens = [];
        this.RefreshAngular();
    };
    return C_ConfEA;
}(MouraPageCadastroAngular));
var c_ConfEA = new C_ConfEA();
//# sourceMappingURL=C_ConfEA.js.map