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
var C_SeqProd = /** @class */ (function (_super) {
    __extends(C_SeqProd, _super);
    function C_SeqProd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_SeqProd.prototype, "GridServico", {
        get: function () {
            return window['GridServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqProd.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqProd.prototype, "Itens", {
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
    Object.defineProperty(C_SeqProd.prototype, "Item", {
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
    Object.defineProperty(C_SeqProd.prototype, "txtServico", {
        get: function () {
            return window['txtServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqProd.prototype, "txtOrdem", {
        get: function () {
            return window['txtOrdem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqProd.prototype, "txtServicoItem", {
        get: function () {
            return window['txtServicoItem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_SeqProd.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.GridServico) {
            adicionarEventoMoura(this.GridServico.AdicionandoItem, this.OnValidandoAlteracaoServico, this);
            adicionarEventoMoura(this.GridServico.ItemAdicionado, this.CorrigirOrdem, this);
            adicionarEventoMoura(this.GridServico.ItemExcluido, this.OnExcluiItem, this);
            adicionarEventoMoura(this.GridServico.LimpouItem, this.atualizarTextOrdem, this);
        }
        if (this.txtServico) {
            adicionarEventoMoura(this.txtServico.Procurou, this.OnMudouServico, this);
        }
    };
    C_SeqProd.prototype.OnMudouServico = function () {
        this.VerificarExistencia(this.txtServico.GetText().CNum());
        this.atualizarTextOrdem();
    };
    C_SeqProd.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.txtCodigo.Visible = false;
    };
    C_SeqProd.prototype.VerificarExistencia = function (empresa) {
        var parametros = {
            Servico: empresa
        };
        var configuracao = this.ExecutarFuncaoServerSideSynch("GetCodigo", parametros);
        if (configuracao) {
            this.PreencherEntidade(configuracao);
            this.txtCodigo.SetText(configuracao);
            this.OnDepoisBuscarExistente(this.EntityTela);
        }
        else {
            this.txtCodigo.SetText("");
            this.Item = null;
            this.Itens = [];
            this.GridServico.AtualizarGrid();
        }
        this.RefreshAngular();
    };
    C_SeqProd.prototype.atualizarTextOrdem = function () {
        var ordem;
        if (this.Itens) {
            ordem = this.Itens.Max("Ordem") + 1;
        }
        else {
            ordem = 1;
        }
        if (!this.Item) {
            this.Item = {};
        }
        this.Item.Ordem = ordem;
        this.txtOrdem.SetText(ordem.toString());
    };
    C_SeqProd.prototype.OnDepoisSetEntidade = function (Entidade) {
        this.Item.Ordem = 1;
    };
    C_SeqProd.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.Itens = [];
        this.GridServico.AtualizarGrid();
    };
    C_SeqProd.prototype.OnDepoisBuscarExistente = function (Entidade) {
        try {
            _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
            this.Itens = [];
            var parametros = {
                Configuracao: Entidade.Codigo
            };
            var Servicos = this.ExecutarFuncaoServerSideSynch("GetServicos", parametros);
            if (Servicos) {
                this.Itens = Servicos;
            }
            this.GridServico.AtualizarGrid();
            this.atualizarTextOrdem();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SeqProd.prototype.OnExcluiItem = function () {
        this.CorrigirOrdem();
        this.atualizarTextOrdem();
    };
    C_SeqProd.prototype.CorrigirOrdem = function () {
        var anterior = 0;
        var novo = 0;
        var arrayOrder = this.Itens.sort(function (a, b) {
            if (a.Ordem < b.Ordem)
                return -1;
            if (a.Ordem > b.Ordem)
                return 1;
            return 0;
        });
        for (var i = 0; i < arrayOrder.length; i++) {
            if (this.Item.Ordem == this.Itens[i].Ordem && this.Item.Servico != this.Itens[i].Servico) {
                novo = this.Item.Ordem + 1;
                this.Itens[i].Ordem = novo;
            }
            else if ((this.Itens[i].Ordem - anterior) > 1) {
                this.Itens[i].Ordem = anterior + 1;
            }
            else if (novo > 0 && this.Item.Servico != this.Itens[i].Servico) {
                novo += 1;
                this.Itens[i].Ordem = novo;
            }
            anterior = this.Itens[i].Ordem;
        }
        this.GridServico.Grid.PreencherGrid(this.Itens);
        this.GridServico.AtualizarGrid();
        this.GridServico.Grid.OrderBy("Ordem", "asc");
    };
    C_SeqProd.prototype.OnValidandoAlteracaoServico = function (s, e) {
        try {
            if (this.txtServico.GetText().CNum() == 0) {
                MostrarAlerta("Informe o serviço principal");
                e.cancelar = true;
                return;
            }
            if (this.txtOrdem.GetText().CNum() == 0) {
                MostrarAlerta("Informe a ordem corretamente");
                e.cancelar = true;
                return;
            }
            if (this.txtServico.GetText().CNum() == this.txtServicoItem.GetText().CNum()) {
                MostrarAlerta("O serviço secundário não pode ser igual ao serviço principal");
                e.cancelar = true;
                return;
            }
            var ordem;
            ordem = this.Itens.Max("Ordem") + 1;
            if (this.txtOrdem.GetText().CNum() > ordem) {
                MostrarAlerta("A ordem não pode ser superior a " + ordem);
                e.cancelar = true;
                return;
            }
            var servico = this.Itens.FirstOrDefault("Servico", this.Item.Servico);
            if (servico) {
                MostrarAlerta("Este serviço já está adicionado");
                e.cancelar = true;
            }
            else {
                e.item.Servico_Nome = this.txtServicoItem.GetResultado();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SeqProd.prototype.OnAntesGravar = function () {
        try {
            _super.prototype.OnAntesGravar.call(this);
            if (!this.Itens || this.Itens.length == 0) {
                MostrarAlerta("Informe ao menos um serviço secundário");
                return false;
            }
            this.EntityTela.Codigo = this.txtCodigo.GetText().CNum();
            this.EntityTela.Itens = [];
            this.EntityTela.Itens = this.Itens;
            return true;
        }
        catch (ex) {
            LogarException(ex);
            return false;
        }
    };
    return C_SeqProd;
}(MouraPageCadastroAngular));
var c_SeqProd = new C_SeqProd();
//# sourceMappingURL=C_SeqProd.js.map