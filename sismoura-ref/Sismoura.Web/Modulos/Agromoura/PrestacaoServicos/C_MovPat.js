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
var C_MovPat = /** @class */ (function (_super) {
    __extends(C_MovPat, _super);
    function C_MovPat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_MovPat.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MovPat.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MovPat.prototype, "txtCodPatrimonio", {
        get: function () {
            return window['txtCodPatrimonio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MovPat.prototype, "txtPatrimonio", {
        get: function () {
            return window['txtPatrimonio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MovPat.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MovPat.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MovPat.prototype, "txtMaquina", {
        get: function () {
            return window['txtMaquina_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MovPat.prototype, "txtUsuario", {
        get: function () {
            return window['txtUsuario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MovPat.prototype, "cboSituacao", {
        get: function () {
            return window['cboSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MovPat.prototype, "txtObservacao", {
        get: function () {
            return window['txtObservacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MovPat.prototype, "Dados", {
        get: function () {
            return this.GetScope()["Dados"];
        },
        set: function (value) {
            this.GetScope()["Dados"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MovPat.prototype, "codigo", {
        set: function (value) {
            this.codigo = value;
        },
        enumerable: true,
        configurable: true
    });
    C_MovPat.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtPatrimonio) {
            adicionarEventoMoura(this.txtPatrimonio.LostFocus, this.OnMudouCodigo, this);
        }
        if (this.txtCodPatrimonio) {
            adicionarEventoMoura(this.txtCodPatrimonio.Procurou, this.OnProcurou, this);
        }
        if (this.grd) {
            adicionarEventoMoura(this.grd.SelecionouItem, this.OnGrdSelecionouItem, this);
        }
    };
    C_MovPat.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar;
        this.txtPatrimonio.Limpar();
        Entity.Data = new Date();
        this.GetScope().$applyAsync();
        this.BuscarGrid();
        return Entity;
    };
    C_MovPat.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.BuscarGrid();
    };
    C_MovPat.prototype.OnProcurou = function (s, e) {
        var Patrimonio = this.txtCodPatrimonio.GetText().CNum();
        var parametros = {
            Patrimonio: Patrimonio
        };
        if (Patrimonio != 0) {
            var entidade = this.GetScope().Entity;
            var Codigo = this.ExecutarFuncaoServerSideSynch("N_Patrimonio", parametros);
            if (Codigo != "") {
                this.txtPatrimonio.SetText(Codigo);
            }
        }
        this.BuscarGrid();
    };
    C_MovPat.prototype.OnGrdSelecionouItem = function (s, e) {
        var historico = e.item;
        if (historico) {
            this.txtCodigo.Procurar(e.item.Cod_Movimentacao);
        }
    };
    C_MovPat.prototype.BuscarGrid = function () {
        var parametros = {
            Patrimonio: this.txtCodPatrimonio.GetText().CNum()
        };
        var Itens = this.ExecutarFuncaoServerSideSynch("CarregarPatrimonios", parametros);
        this.Dados = Itens;
    };
    C_MovPat.prototype.OnMudouCodigo = function (s, e) {
        var Patrimonio = this.txtPatrimonio.GetText();
        var parametros = {
            Patrimonio: Patrimonio
        };
        if (Patrimonio != null && Patrimonio != undefined && Patrimonio != "") {
            var entidade = this.GetScope().Entity;
            var Codigo = this.ExecutarFuncaoServerSideSynch("CodigoPatrimonio", parametros);
            if (Codigo != 0) {
                entidade.Patrimonio = Codigo;
                this.BuscarGrid();
            }
            else {
                MostrarAlerta("Patrimônio não encontrado(a) ou Inativo(a)");
                this.txtPatrimonio.SetText("");
                this.txtPatrimonio.Textbox.focus();
                entidade.Patrimonio = 0;
                this.GetScope().$applyAsync();
            }
        }
    };
    C_MovPat.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.BuscarGrid();
        return true;
    };
    return C_MovPat;
}(MouraPageCadastroAngular));
var c_MovPat = new C_MovPat();
//# sourceMappingURL=C_MovPat.js.map