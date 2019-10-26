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
var IFoodPedidos = /** @class */ (function (_super) {
    __extends(IFoodPedidos, _super);
    function IFoodPedidos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(IFoodPedidos.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IFoodPedidos.prototype, "grdPedidos", {
        get: function () {
            return window['grdPedidos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IFoodPedidos.prototype, "btnConfirmar", {
        get: function () {
            return window['btnConfirmar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IFoodPedidos.prototype, "btnSaiuParaEntrega", {
        get: function () {
            return window['btnSaiuParaEntrega_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IFoodPedidos.prototype, "btnEntregue", {
        get: function () {
            return window['btnEntregue_Object'];
        },
        enumerable: true,
        configurable: true
    });
    IFoodPedidos.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnCboEmpresaSelectedItemChanged, this);
        }
        if (this.grdPedidos) {
            adicionarEventoMoura(this.grdPedidos.ClickBotaoLinha, this.OnGrdPedidoSelecionouLinha, this);
        }
        if (this.btnConfirmar) {
            adicionarEventoMoura(this.btnConfirmar.Click, this.OnBtnConfirmarTokenClick, this);
        }
        if (this.btnSaiuParaEntrega) {
            adicionarEventoMoura(this.btnSaiuParaEntrega.Click, this.OnBtnSaiuParaEntregaTokenClick, this);
        }
        if (this.btnEntregue) {
            adicionarEventoMoura(this.btnEntregue.Click, this.OnBtnEntregueTokenClick, this);
        }
    };
    IFoodPedidos.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        var that = this;
        setInterval(function () {
            that.preencherPedidos();
        }, 10 * 1000); //10 segundos
        this.preencherPedidos();
    };
    IFoodPedidos.prototype.preencherPedidos = function () {
        var parametros = {
            empresa: this.cboEmpresa.GetValue()
        };
        var pedidos = this.ExecutarFuncaoServerSideSynch("ObterTodosPedidos", parametros);
        this.grdPedidos.PreencherGrid(pedidos);
    };
    IFoodPedidos.prototype.OnCboEmpresaSelectedItemChanged = function (s, e) {
        this.preencherPedidos();
    };
    IFoodPedidos.prototype.OnGrdPedidoSelecionouLinha = function (s, e) {
        abrirTelaNovaAbaCodigo(formataURLRelativa("/Modulos/IFood/IFoodPedidoDetalhe.aspx"), e.data.Id);
    };
    IFoodPedidos.prototype.OnBtnConfirmarTokenClick = function (s, e) {
        e.processOnServer = false;
        var pedidosSelecionados = this.grdPedidos.GetSelectedRowsData;
        var idsSelecionados = [];
        for (var x = 0; x < pedidosSelecionados.length; x++) {
            idsSelecionados.push(pedidosSelecionados[x].Reference.toString());
        }
        var parametros = {
            empresa: this.cboEmpresa.GetValue(),
            references: idsSelecionados
        };
        this.ExecutarFuncaoServerSideSynch("ConfirmarPedidos", parametros);
        this.preencherPedidos();
    };
    IFoodPedidos.prototype.OnBtnSaiuParaEntregaTokenClick = function (s, e) {
        e.processOnServer = false;
        var pedidosSelecionados = this.grdPedidos.GetSelectedRowsData;
        var idsSelecionados = [];
        for (var x = 0; x < pedidosSelecionados.length; x++) {
            idsSelecionados.push(pedidosSelecionados[x].Reference.toString());
        }
        var parametros = {
            empresa: this.cboEmpresa.GetValue(),
            references: idsSelecionados
        };
        this.ExecutarFuncaoServerSideSynch("SaiuParaEntregarPedidos", parametros);
        this.preencherPedidos();
    };
    IFoodPedidos.prototype.OnBtnEntregueTokenClick = function (s, e) {
        e.processOnServer = false;
        var pedidosSelecionados = this.grdPedidos.GetSelectedRowsData;
        var idsSelecionados = [];
        for (var x = 0; x < pedidosSelecionados.length; x++) {
            idsSelecionados.push(pedidosSelecionados[x].Reference.toString());
        }
        var parametros = {
            empresa: this.cboEmpresa.GetValue(),
            references: idsSelecionados
        };
        this.ExecutarFuncaoServerSideSynch("EntregouPedidos", parametros);
        this.preencherPedidos();
    };
    return IFoodPedidos;
}(MouraPageCadastroAngular));
var iFoodPedidos = new IFoodPedidos;
//# sourceMappingURL=IFoodPedidos.js.map