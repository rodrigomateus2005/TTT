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
var C_VacRet = /** @class */ (function (_super) {
    __extends(C_VacRet, _super);
    function C_VacRet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_VacRet.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VacRet.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VacRet.prototype, "CodigoAnimal", {
        get: function () {
            return this.GetScope()["CodigoAnimal"];
        },
        set: function (value) {
            this.GetScope()["CodigoAnimal"] = value;
            if (this.Vacinacao) {
                this.Vacinacao.Animal = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VacRet.prototype, "Vacinacao", {
        get: function () {
            var that = this.GetScope()["Vacinacao"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Vacinacao"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VacRet.prototype, "Vacinacoes", {
        get: function () {
            return this.GetScope()["Vacinacoes"];
        },
        set: function (value) {
            this.GetScope()["Vacinacoes"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VacRet.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_VacRet.prototype, "txtVacina", {
        get: function () {
            return window['txtVacina_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_VacRet.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.Validando, this.OnValidandoVacinacao, this);
            adicionarEventoMoura(this.Grid.ItemAdicionado, this.OnItemAdicionadoVacinacao, this);
            adicionarEventoMoura(this.Grid.ItemExcluido, this.OnItemExcluidoVacinacao, this);
            adicionarEventoMoura(this.Grid.LimpouItem, this.OnLimpouVacinacao, this);
        }
        if (this.txtPet) {
            adicionarEventoMoura(this.txtPet.ProcurouAnimal, this.OnProcurouAnimal, this);
            adicionarEventoMoura(this.txtPet.ProcurouProprietario, this.OnProcurouAnimal, this);
        }
    };
    C_VacRet.prototype.OnProcurouAnimal = function (s, e) {
        this.Vacinacoes = [];
        if (this.txtPet.TextBoxAnimal.GetText() && this.txtPet.TextBoxAnimal.GetText().CNum()) {
            var codAnimal = this.txtPet.TextBoxAnimal.GetText().CNum();
            var parametros;
            parametros = {
                codAnimal: codAnimal
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ObterVacina", parametros);
            this.Vacinacoes = retorno;
        }
        this.RefreshAngular();
    };
    C_VacRet.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.txtCodigo.Visible = false;
    };
    C_VacRet.prototype.OnDepoisLimpar = function (Entity) {
        this.Vacinacoes = [];
        this.Grid.Limpar();
        this.RefreshAngular();
    };
    C_VacRet.prototype.OnLimpouVacinacao = function (s, e) {
        console.log(e.item);
        this.Vacinacao.Data_Aplicacao = this.DataServidor();
        this.RefreshAngular();
    };
    C_VacRet.prototype.OnValidandoVacinacao = function (s, e) {
        if (e.index < 0) {
            e.item.Vacina_Descricao = this.txtVacina.GetResultado();
        }
        if (this.Vacinacao.Vacina <= 0) {
            MostrarAlerta("Informe uma vacina aplicada!");
            e.cancelar = true;
            return;
        }
        if (this.Vacinacao.Data_Aplicacao == null || this.Vacinacao.Data_Aplicacao == undefined) {
            MostrarAlerta("Informe uma data de aplicação válida!");
            e.cancelar = true;
            return;
        }
        if (this.Vacinacoes.length > 0) {
            for (var x = 0; x < this.Vacinacoes.length; x++) {
                if (this.Vacinacoes[x].Data_Aplicacao.getDate() == this.Vacinacao.Data_Aplicacao.getDate()
                    && this.Vacinacoes[x].Vacina == this.Vacinacao.Vacina) {
                    MostrarAlerta("Já existe uma vacina aplicada para este animal para a data especificada");
                    e.cancelar = true;
                    return;
                }
            }
        }
        if (this.Vacinacao.Data_Aplicacao.getTime() > this.DataServidor().getTime() ||
            this.Vacinacao.Data_Aplicacao.getDate() == this.DataServidor().getDate()) {
            MostrarAlerta("A data de aplicação precisa ser anterior ao dia de hoje");
            e.cancelar = true;
            return;
        }
    };
    C_VacRet.prototype.OnItemAdicionadoVacinacao = function (s, e) {
        var item = e.item;
        item.Animal = this.CodigoAnimal;
        var param = {
            entityString: JSON.stringify(item)
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("Gravar", param);
        var entidade = JSON.parse(replaceAll(retorno, "'", '"'));
        item.Codigo = entidade.Codigo;
        MostrarMensagem("Vacinação gravada com sucesso");
    };
    C_VacRet.prototype.OnItemExcluidoVacinacao = function (s, e) {
        var item = e.item;
        item.Animal = this.CodigoAnimal;
        var param = {
            entityString: JSON.stringify(item)
        };
        this.ExecutarFuncaoServerSideSynch("Excluir", param);
        MostrarMensagem("Vacinação excluida com sucesso");
    };
    C_VacRet.prototype.OnAntesGravar = function () {
        //super.OnAntesGravar();
        //this.EntityTela.Vacinacoes = this.Vacinacoes;
        return true;
    };
    return C_VacRet;
}(MouraPageAngular));
var c_VacRet = new C_VacRet();
//# sourceMappingURL=C_VacRet.js.map