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
var C_PlanNivel = /** @class */ (function (_super) {
    __extends(C_PlanNivel, _super);
    function C_PlanNivel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_PlanNivel.prototype, "Usuarios", {
        get: function () {
            return this.GetScope()["Usuarios"];
        },
        set: function (value) {
            this.GetScope()["Usuarios"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlanNivel.prototype, "Usuario", {
        get: function () {
            return this.GetScope()["Usuario"];
        },
        set: function (value) {
            this.GetScope()["Usuario"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlanNivel.prototype, "cboNivel", {
        get: function () {
            return window['cboNivel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlanNivel.prototype, "grdUsuario", {
        get: function () {
            return window['grdUsuario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlanNivel.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlanNivel.prototype, "txtUsuario", {
        get: function () {
            return window['txtUsuario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlanNivel.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_PlanNivel.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.grdUsuario.Grid) {
            adicionarEventoMoura(this.grdUsuario.Validando, this.OnValidandoItemUsuario, this);
        }
    };
    C_PlanNivel.prototype.OnValidandoItemUsuario = function (s, e) {
        var fieldAlterado = "" + e.fieldNameAlterado;
        var entidade;
        entidade = e.item;
        if ((entidade.Usuario == 0) || (entidade.Usuario == null)) {
            e.errorText = "Informe o campo Usuário!";
            e.cancelar = true;
            return;
        }
        if (this.VerificaExistenciaUsuario(entidade.Usuario)) {
            e.errorText = "O Usuário informado já foi adicionado!";
            e.cancelar = true;
            return;
        }
        if (this.EntityTela.Nivel == 0) {
            e.errorText = "Não é permitido vincular nenhum usuário quando o nível for igual a 0 (Zero) !";
            e.cancelar = true;
            return;
        }
        entidade.NomeUsuario = this.txtUsuario.GetResultado();
    };
    C_PlanNivel.prototype.VerificaExistenciaUsuario = function (codUsuario) {
        var retorno = false;
        var entidade = this.Usuarios.FirstOrDefault("Usuario", codUsuario);
        if (entidade != null) {
            retorno = true;
        }
        return retorno;
    };
    C_PlanNivel.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_PlanNivel.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_PlanNivel.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.Usuarios = [];
        this.PreencherGrade();
    };
    C_PlanNivel.prototype.OnDepoisBuscarExistente = function (Entidade) {
        try {
            _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
            var parametros;
            if (Entidade.Usuarios) {
                parametros = {
                    listaUsuarios: Entidade.Usuarios
                };
                this.Usuarios = this.ExecutarFuncaoServerSideSynch("RetornaUsuariosComplemento", parametros);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PlanNivel.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entidade = this.Grid.DataSource.FirstOrDefault("Nivel", this.EntityTela.Nivel);
        if ((entidade != null) && (entidade.Codigo != this.EntityTela.Codigo)) {
            MostrarMensagem("Já existe um registro gravado para o nível informado!");
            return false;
        }
        if (this.Usuarios) {
            this.EntityTela.Usuarios = this.Usuarios;
        }
        return true;
    };
    C_PlanNivel.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_PlanNivel.prototype.PreencherGrade = function () {
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
    return C_PlanNivel;
}(MouraPageCadastroAngular));
var c_PlanNivel = new C_PlanNivel();
//# sourceMappingURL=C_PlanNivel.js.map