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
var Encomen = /** @class */ (function (_super) {
    __extends(Encomen, _super);
    function Encomen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Encomen.prototype, "chkPadrao", {
        get: function () {
            return window['chkPadrao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Encomen.prototype, "txtProdutoCodigo", {
        get: function () {
            return window['txtProdutoCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Encomen.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Encomen.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Encomen.prototype, "cboSituacao", {
        get: function () {
            return window['cboSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Encomen.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Encomen.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        $(this.txtProdutoCodigo.LabelResultado).hide();
    };
    Encomen.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.txtProdutoCodigo) {
            adicionarEventoMoura(this.txtProdutoCodigo.Procurou, this.OnProcurouProduto, this);
        }
        if (this.txtCliente) {
            adicionarEventoMoura(this.txtCliente.Procurou, this.OnProcurouCliente, this);
        }
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.Procurou, this.OnProcurouCodigo, this);
        }
        if (this.chkPadrao) {
            adicionarEventoMoura(this.chkPadrao.CheckChanged, this.OnCheckChanged, this);
        }
    };
    Encomen.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.chkPadrao.Check.disabled = true;
        this.PreencherGradeRegistrosCadastrados();
    };
    Encomen.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Situacao = CNum(this.cboSituacao.GetValue());
        return true;
    };
    Encomen.prototype.Limpar = function () {
        var _this = this;
        _super.prototype.Limpar.call(this);
        this.EntityTela.Cliente = 0;
        this.EntityTela.Codigo = 0;
        this.EntityTela.Produto = "";
        this.EntityTela.Qtde = 0;
        this.EntityTela.Situacao = 0;
        setTimeout(function () {
            _this.cboSituacao.SetSelectedIndex(0);
        }, 100);
        this.EntityTela.Emissao = this.DataServidor();
        this.chkPadrao.Check.disabled = false;
        this.chkPadrao.Checked = true;
        this.txtProdutoCodigo.Limpar();
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    Encomen.prototype.OnSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.data["Codigo"]);
    };
    Encomen.prototype.PreencherGradeRegistrosCadastrados = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                codCliente: CNum(this.txtCliente.GetText()),
                todos: this.chkPadrao.Checked
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGradeRegistrosCadastrados", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(retorno);
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    Encomen.prototype.OnProcurouProduto = function (s, e) {
        if (CNum(this.txtProdutoCodigo.GetText()) > 0) {
            this.EntityTela.Produto = this.txtProdutoCodigo.GetResultado();
        }
        else {
            this.EntityTela.Produto = "";
        }
        this.RefreshAngular();
    };
    Encomen.prototype.OnProcurouCliente = function (s, e) {
        if (CNum(this.txtCliente.GetText()) > 0) {
            this.PreencherGradeRegistrosCadastrados();
        }
    };
    Encomen.prototype.OnCheckChanged = function (s, e) {
        if (this.chkPadrao.Checked && CNum(this.EntityTela.Cliente) > 0) {
            this.PreencherGradeRegistrosCadastrados();
        }
        else {
            this.grid.PreencherGrid(null);
        }
    };
    Encomen.prototype.OnProcurouCodigo = function () {
        if (CNum(this.txtCodigo.GetText()) <= 0) {
            this.chkPadrao.Check.disabled = false;
        }
    };
    Encomen.prototype.OnDepoisGravar = function () {
        var _this = this;
        _super.prototype.OnDepoisGravar.call(this);
        var codCliente = this.EntityTela.Cliente;
        this.EntityTela.Codigo = 0;
        setTimeout(function () {
            _this.txtCliente.Procurar(codCliente.toString());
            _this.OnProcurouCliente({}, {});
            _this.EntityTela.Produto = "";
            _this.txtProdutoCodigo.Limpar();
            _this.EntityTela.Qtde = 0;
            _this.RefreshAngular();
        }, 100);
        this.RefreshAngular();
        return true;
    };
    return Encomen;
}(MouraPageCadastroAngular));
var encomen = new Encomen();
//# sourceMappingURL=Encomen.js.map