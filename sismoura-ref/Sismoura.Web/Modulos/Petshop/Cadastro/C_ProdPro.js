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
var C_ProdPro = /** @class */ (function (_super) {
    __extends(C_ProdPro, _super);
    function C_ProdPro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ProdPro.prototype, "GridServico", {
        get: function () {
            return window['GridServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdPro.prototype, "Itens", {
        get: function () {
            if (!this.GetScope()["Itens"]) {
                return [];
            }
            else {
                return this.GetScope()["Itens"];
            }
        },
        set: function (value) {
            this.GetScope()["Itens"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdPro.prototype, "Item", {
        get: function () {
            if (!this.GetScope()["Item"]) {
                return null;
            }
            else {
                return this.GetScope()["Item"];
            }
        },
        set: function (value) {
            this.GetScope()["Item"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdPro.prototype, "txtServico", {
        get: function () {
            return window["txtServico_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdPro.prototype, "txtProfissional", {
        get: function () {
            return window["txtProfissional_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdPro.prototype, "txtCodigo", {
        get: function () {
            return window["txtCodigo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    C_ProdPro.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.GridServico) {
            adicionarEventoMoura(this.GridServico.Validando, this.OnValidandoAlteracao, this);
        }
        if (this.txtProfissional) {
            adicionarEventoMoura(this.txtProfissional.Procurou, this.OnMudouProfissional, this);
        }
    };
    C_ProdPro.prototype.VerificarExistencia = function (profissional) {
        var parametros = {
            Profissional: profissional
        };
        this._profissional = 0;
        var configuracao = this.ExecutarFuncaoServerSideSynch("GetCodigo", parametros);
        if (configuracao) {
            this.PreencherEntidade(configuracao);
            this.txtCodigo.SetText(configuracao);
        }
        else {
            this._profissional = this.EntityTela.Profissional;
            this.Limpar();
        }
        this.RefreshAngular();
    };
    C_ProdPro.prototype.OnMudouProfissional = function () {
        this.VerificarExistencia(this.txtProfissional.GetText().CNum());
    };
    C_ProdPro.prototype.OnValidandoAlteracao = function (s, e) {
        try {
            if (!this.Item) {
                return;
            }
            if ((this.Item.Hora == 0 || !this.Item.Hora) && (this.Item.Minutos == 0 || !this.Item.Minutos)) {
                MostrarAlerta("Informe a duração do serviço");
                e.cancelar = true;
                return;
            }
            var grupo = this.Itens.FirstOrDefault("Servico", this.Item.Servico);
            if (grupo) {
                MostrarAlerta("Este serviço já foi adicionado");
                e.cancelar = true;
                return;
            }
            this.Item.Servico_Nome = this.txtServico.GetResultado();
            e.item = this.Item;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ProdPro.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.txtCodigo.Visible = false;
    };
    C_ProdPro.prototype.OnDepoisLimpar = function (Entity) {
        this.Itens = [];
        this.Item = null;
        if (this._profissional > 0) {
            Entity.Profissional = this._profissional;
        }
        this.RefreshAngular();
    };
    C_ProdPro.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        return true;
    };
    C_ProdPro.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        try {
            var parametros = {
                entidadeSTR: JSON.stringify(Entidade)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("RetornarServicos", parametros);
            this.Itens = retorno;
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ProdPro.prototype.OnAntesGravar = function () {
        try {
            _super.prototype.OnAntesGravar.call(this);
            if (!this.Itens || this.Itens.length == 0) {
                MostrarAlerta("Informe ao menos um serviço");
                return false;
            }
            this.EntityTela.Itens = this.Itens;
            return true;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_ProdPro;
}(MouraPageCadastroAngular));
var c_ProdPro = new C_ProdPro();
//# sourceMappingURL=C_ProdPro.js.map