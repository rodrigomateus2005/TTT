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
var C_HisPdr = /** @class */ (function (_super) {
    __extends(C_HisPdr, _super);
    function C_HisPdr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_HisPdr.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HisPdr.prototype, "lstDescricao", {
        get: function () {
            return window['lstDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_HisPdr.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_HisPdr.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.SelecionouLinha, this);
        }
        if (this.lstDescricao) {
            adicionarEventoMoura(this.lstDescricao.SelectionChanged, this.SelectionChanged, this);
        }
        if (this.lstDescricao.btnMarcar) {
            adicionarEventoDevExpress(this.lstDescricao.btnMarcar.Click, this.ClickMarcar, this);
        }
    };
    C_HisPdr.prototype.PreencherGrade = function () {
        var parametros;
        try {
            parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.Grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HisPdr.prototype.SelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
        this.ValidarItemHabilitado();
        this.RefreshAngular();
    };
    C_HisPdr.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.GetScope().Entity.Descricoes = [];
        for (var x = 0; x < this.lstDescricao.GetValues().length; x++) {
            var descricoes = {};
            descricoes.Campo = this.lstDescricao.GetValues()[x];
            this.GetScope().Entity.Descricoes.push(descricoes);
        }
        return true;
    };
    C_HisPdr.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Codigo = 0;
        Entity.Descricao = "";
        this.lstDescricao.LimparSelecao();
        this.ItemEnable("DM", true);
        this.ItemEnable("ND", true);
        this.RefreshAngular();
    };
    C_HisPdr.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        this.RefreshAngular();
        return true;
    };
    C_HisPdr.prototype.OnDepoisClickNovo = function () {
        _super.prototype.OnDepoisClickNovo.call(this);
        return true;
    };
    C_HisPdr.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_HisPdr.prototype.OnDepoisBuscarExistente = function (entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, entity);
        var descricoes = [];
        try {
            this.lstDescricao.LimparSelecao();
            var parametros = {
                codigo: entity.Codigo,
                descricoes: this.lstDescricao.GetValuesRelacao()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetByHistoricoCampo", parametros);
            this.EntityTela.Descricoes = retorno;
            if (this.EntityTela.Descricoes) {
                for (var x = 0; x < this.EntityTela.Descricoes.length; x++) {
                    descricoes.push(this.EntityTela.Descricoes[x].Campo);
                }
                if (this.lstDescricao) {
                    this.EntityTela.Descricoes = [];
                    this.lstDescricao.SetValues(descricoes);
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        this.ValidarItemHabilitado();
    };
    C_HisPdr.prototype.ItemEnable = function (value, status) {
        var posicao;
        if (value == "DM") {
            posicao = 3;
        }
        else {
            posicao = 2;
        }
        if (status) {
            this.lstDescricao.Lista.getElementsByTagName("input")[posicao].disabled = false;
        }
        else {
            this.lstDescricao.Lista.getElementsByTagName("input")[posicao].disabled = true;
        }
    };
    C_HisPdr.prototype.ValidarItemHabilitado = function () {
        this.ItemEnable("DM", true);
        this.ItemEnable("ND", true);
        if ($.inArray("ND", this.lstDescricao.SelectedValues) >= 0) {
            this.ItemEnable("DM", false);
            this.lstDescricao.LimparSelecaoItems(["DM"]);
        }
        else if ($.inArray("DM", this.lstDescricao.SelectedValues) >= 0) {
            this.ItemEnable("ND", false);
            this.lstDescricao.LimparSelecaoItems(["ND"]);
        }
    };
    C_HisPdr.prototype.SelectionChanged = function (s, e) {
        this.ValidarItemHabilitado();
    };
    C_HisPdr.prototype.ClickMarcar = function (s, e) {
        this.ValidarItemHabilitado();
    };
    return C_HisPdr;
}(MouraPageCadastroAngular));
var c_HisPdr = new C_HisPdr();
//# sourceMappingURL=C_HisPdr.js.map