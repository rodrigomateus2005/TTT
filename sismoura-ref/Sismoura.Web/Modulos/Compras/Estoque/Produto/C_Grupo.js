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
var C_Grupo = /** @class */ (function (_super) {
    __extends(C_Grupo, _super);
    function C_Grupo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Grupo.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Grupo.prototype, "grdContaContabil", {
        get: function () {
            return window['grdContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Grupo.prototype, "Conta", {
        get: function () {
            var that = this.GetScope()["Conta"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Conta"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Grupo.prototype, "Contas", {
        get: function () {
            return this.GetScope()["Contas"];
        },
        set: function (value) {
            this.GetScope()["Contas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Grupo.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Grupo.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Grupo.prototype, "cboGrupoMouraBurger", {
        get: function () {
            return window['cboGrupoMouraBurger_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Grupo.prototype, "txtPlanoContasSped", {
        get: function () {
            return window['txtPlanoContasSped_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Grupo.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Grupo.prototype, "acordContas", {
        get: function () {
            return window['acordContas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Grupo.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
            adicionarEventoMoura(this.Grid.CellPrepared, this.OnGridCellPrepared, this);
        }
        if (this.grdContaContabil) {
            adicionarEventoMoura(this.grdContaContabil.Validando, this.OnValidando, this);
            adicionarEventoMoura(this.grdContaContabil.LimpouItem, this.LimparConta, this);
        }
    };
    C_Grupo.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
        this.acordContas.Visible = false;
        this.cboEmpresa.Disabled = true;
        this.txtPlanoContasSped.Disabled = true;
        this.OnVerificaContaContabil();
    };
    C_Grupo.prototype.OnVerificaContaContabil = function () {
        try {
            var parametros;
            parametros = {
                codEmpresa: this.Conta.Empresa
            };
            var empresaUtilizaContabil = this.ExecutarFuncaoServerSideSynch("alterouEmpresa", parametros);
            if (!empresaUtilizaContabil) {
                this.acordContas.Visible = true;
                //this.cboEmpresa.Disabled = true;
                //this.txtPlanoContasSped.Disabled = true;
                try {
                    var parametros;
                    parametros = {};
                    var verificaRegime = this.ExecutarFuncaoServerSideSynch("verificaRegimeTributario", parametros);
                    if (verificaRegime) {
                        this.cboEmpresa.Disabled = false;
                        this.txtPlanoContasSped.Disabled = false;
                    }
                }
                catch (ex) {
                    LogarException(ex);
                }
                this.RefreshAngular();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Grupo.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_Grupo.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
        this.Contas = [];
        this.grdContaContabil.Limpar();
        Entity.Grupo_MouraBurger = "";
        if (this.cboGrupoMouraBurger) {
            this.cboGrupoMouraBurger.Visible = ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Modulo_MouraBurger;
        }
        this.acordContas.Visible = false;
        this.cboEmpresa.Disabled = true;
        this.txtPlanoContasSped.Disabled = true;
        this.OnVerificaContaContabil();
        this.LimparConta();
        this.RefreshAngular();
    };
    C_Grupo.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        this.PreencherGradeCC(this.EntityTela);
        return true;
    };
    C_Grupo.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.PreencherGradeCC(Entity);
        this.PreencherGrade();
    };
    C_Grupo.prototype.PreencherGrade = function () {
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
    C_Grupo.prototype.PreencherGradeCC = function (Entity) {
        if (Entity.Codigo != null || Entity.Codigo != undefined) {
            try {
                var parametros;
                parametros = {
                    codGrupo: Entity.Codigo
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("GetContaContabil", parametros);
                this.Contas = retorno.Contas;
                this.RefreshAngular();
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    C_Grupo.prototype.OnValidando = function (s, e) {
        if (e.index < 0) {
            e.item.Descricao_Grupo = this.txtDescricao.GetText();
            e.item.Descricao_Empresa = this.cboEmpresa.GetText();
            e.item.Descricao_Conta_Contabil = this.txtPlanoContasSped.GetResultado();
            e.item.Grupo = this.txtCodigo.GetText().CNum();
        }
        if (this.EntityTela.Codigo <= 0) {
            MostrarAlerta("É necessário informar um Grupo previamente cadastrado!");
            e.cancelar = true;
            this.txtCodigo.Focus();
            return;
        }
        if (e.item.Empresa <= 0 || e.item.Empresa == undefined) {
            MostrarAlerta("Informe a Empresa para adicionar o registro!");
            e.cancelar = true;
            this.cboEmpresa.Focus();
            return;
        }
        if (e.item.Conta_Contabil == null) {
            MostrarAlerta("Informe a Conta Contábil para adicionar o registro!");
            e.cancelar = true;
            this.txtPlanoContasSped.Focus();
            return;
        }
        if (this.verificaEmpresaConta(e.item.Conta_Contabil, e.item.Empresa)) {
            MostrarAlerta("A Conta Contábil informada não pertence a Empresa selecionada!");
            e.cancelar = true;
            this.txtPlanoContasSped.Focus();
            return;
        }
        if (this.verificaGrupoEmpresa(this.EntityTela.Codigo, e.item.Empresa)) {
            MostrarAlerta("A combinação de Grupo e Empresa informada já está cadastrada!");
            e.cancelar = true;
            this.txtPlanoContasSped.Focus();
            return;
        }
        this.RefreshAngular();
        MostrarMensagem("Conta Contábil salva com sucesso!");
    };
    C_Grupo.prototype.verificaEmpresaConta = function (codPlanoContaSpeed, codEmpresa) {
        try {
            var parametros;
            parametros = {
                codPlanoContaSpeed: codPlanoContaSpeed,
                codEmpresa: codEmpresa
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("isEmpresaContaContabil", parametros);
            if (retorno) {
                return true;
            }
            return false;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Grupo.prototype.verificaGrupoEmpresa = function (codGrupo, codEmpresa) {
        try {
            var parametros;
            parametros = {
                codGrupo: codGrupo,
                codEmpresa: codEmpresa
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("verificaContaContabilGrupo", parametros);
            if (retorno) {
                return true;
            }
            return false;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Grupo.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Contas = this.Contas;
        var taxaTributaria = this.EntityTela.Taxa_Tributaria;
        if (this.EntityTela.Codigo > 0) {
            if (taxaTributaria != null || taxaTributaria != undefined) {
                MsgBoxJS("Deseja atualizar a taxa tributária de todos os produtos deste grupo?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespondeuMensagemExistente, this));
                return false;
            }
        }
        return true;
    };
    C_Grupo.prototype.OnRespondeuMensagemExistente = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            try {
                var parametros;
                parametros = {
                    taxaTributaria: this.EntityTela.Taxa_Tributaria,
                    codGrupo: this.EntityTela.Codigo
                };
                var alterarTaxa = this.ExecutarFuncaoServerSideSynch("AtualizarAliquotaProdutos", parametros);
                this.GravarAngular();
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    C_Grupo.prototype.LimparConta = function () {
        this.Conta.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.RefreshAngular();
    };
    C_Grupo.prototype.OnGridCellPrepared = function (s, e) {
        try {
            //var corFonte: string = ;
            if (e.rowType == "data" && e.data != null) {
                if (e.data.Inativo == "Sim") {
                    e.cellElement.css("color", "#FF0000");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_Grupo;
}(MouraPageCadastroAngular));
var c_Grupo = new C_Grupo();
//# sourceMappingURL=C_Grupo.js.map