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
var C_RegCit = /** @class */ (function (_super) {
    __extends(C_RegCit, _super);
    function C_RegCit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_RegCit.prototype, "txtRegiao", {
        get: function () {
            return window['txtRegiao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegCit.prototype, "txtCidade", {
        get: function () {
            return window['txtCidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegCit.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegCit.prototype, "btnAdicionar", {
        get: function () {
            return window['btnAdicionar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegCit.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegCit.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegCit.prototype, "Entity", {
        get: function () {
            return this.GetScope()["Entity"];
        },
        set: function (value) {
            this.GetScope()["Entity"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegCit.prototype, "Cidades", {
        get: function () {
            return this.GetScope()["Cidades"];
        },
        set: function (value) {
            this.GetScope()["Cidades"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegCit.prototype, "Cidade", {
        get: function () {
            var that = this.GetScope()["Cidade"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Cidade"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_RegCit.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtRegiao) {
            adicionarEventoMoura(this.txtRegiao.Procurou, this.OnPesquisouRegiao, this);
        }
        if (this.txtCidade) {
            adicionarEventoMoura(this.txtCidade.Procurou, this.OnPesquisouCidade, this);
        }
        if (this.btnAdicionar) {
            adicionarEventoMoura(this.btnAdicionar.Click, this.OnbtnAdicionarClick, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.ItemExcluido, this.Gravar, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.OnClickBtnLimpar, this);
        }
    };
    C_RegCit.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    C_RegCit.prototype.OnPesquisouRegiao = function (s, e) {
        try {
            var grade = this.PreencherGrade();
            this.Entity.Regiao_Descricao = this.txtRegiao.LabelResultado.textContent;
            if (grade.length > 0) {
                this.Cidades = grade;
            }
            else {
                this.Cidades = [];
                return;
            }
            this.txtCidade.Focus();
            this.grid.AtualizarGrid();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RegCit.prototype.OnPesquisouCidade = function (s, e) {
        this.Entity.Cidade_Descricao = this.txtCidade.LabelResultado.textContent;
    };
    C_RegCit.prototype.OnbtnAdicionarClick = function (s, e) {
        e.processOnServer = false;
        if (this.ValidarCampos() == false) {
            return;
        }
        else {
            if (this.Entity.Regiao) {
                this.Cidades.push(this.Entity);
                this.Gravar();
            }
            this.Entity.Cidade = "";
            this.txtCidade.Focus();
            this.RefreshAngular();
        }
    };
    C_RegCit.prototype.OnClickBtnLimpar = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
        this.RefreshAngular();
    };
    C_RegCit.prototype.PreencherGrade = function () {
        try {
            var parametros = {
                codRegiao: CNum(this.Entity.Regiao)
            };
            var cad = this.ExecutarFuncaoServerSideSynch("GetByRegiao", parametros);
            return cad;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RegCit.prototype.LimparCampos = function () {
        this.txtRegiao.Focus();
        this.Entity = {};
        this.Cidades = [];
    };
    C_RegCit.prototype.Gravar = function () {
        try {
            var parametros = {
                entity: this.Cidades,
                codRegiao: CNum(this.Entity.Regiao),
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GravarListaRegiaoCidade", parametros);
            (retorno) ? MostrarMensagem("Registro gravado com sucesso!") : MostrarAlerta("Erro ao gravar o registro!");
            this.Cidades = this.PreencherGrade();
            this.grid.AtualizarGrid();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RegCit.prototype.VerificarCidade = function () {
        var cidade;
        for (var i = 0; i < this.Cidades.length; i++) {
            if (this.Cidades[i].Cidade_Descricao == this.Entity.Cidade_Descricao) {
                return false;
            }
        }
        return true;
    };
    C_RegCit.prototype.ValidarCampos = function () {
        if (!this.Entity.Regiao) {
            this.txtRegiao.Focus();
            MostrarAlerta("Informe a Região!");
            return false;
        }
        if (!this.Entity.Cidade) {
            this.txtCidade.Focus();
            MostrarAlerta("Informe a Cidade!");
            return false;
        }
        if (this.VerificarCidade() == false) {
            this.txtCidade.Focus();
            MostrarAlerta("A cidade informada já foi adicionada a esta região!");
            return false;
        }
        return true;
    };
    return C_RegCit;
}(MouraPageAngular));
var c_RegCit = new C_RegCit();
//# sourceMappingURL=C_RegCit.js.map