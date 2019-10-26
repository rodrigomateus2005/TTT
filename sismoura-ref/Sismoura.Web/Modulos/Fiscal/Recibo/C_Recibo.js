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
var C_Recibo = /** @class */ (function (_super) {
    __extends(C_Recibo, _super);
    function C_Recibo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Recibo.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Recibo.prototype, "Produto", {
        get: function () {
            var that = this.GetScope()["Produto"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Produto"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Recibo.prototype, "Produtos", {
        get: function () {
            return this.GetScope()["Produtos"];
        },
        set: function (value) {
            this.GetScope()["Produtos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Recibo.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Recibo.prototype, "lblData", {
        get: function () {
            return window['lblData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Recibo.prototype, "lblCidade", {
        get: function () {
            return window['lblCidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Recibo.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Recibo.prototype, "txtVenda", {
        get: function () {
            return window['txtVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Recibo.prototype, "txtVencimento", {
        get: function () {
            return window['txtVencimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Recibo.prototype.Init = function () {
        _super.prototype.Init.call(this);
        //if (this.Grid) {
        //    adicionarEventoMoura(this.Grid.Validando, this.OnValidando, this);
        //}
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnEmpresaAlterou, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnEmpresaAlterou, this);
        }
        if (this.txtVenda) {
            adicionarEventoMoura(this.txtVenda.Procurou, this.OnVendaProcurou, this);
        }
    };
    C_Recibo.prototype.OnVendaProcurou = function (s, e) {
        try {
            if (this.txtVenda.GetText().CNum() > 0) {
                var parametros;
                parametros = {
                    Codigo: this.EntityTela.Venda
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("obterProdutosVenda", parametros);
                if (retorno) {
                    if (retorno.Venda(0).Data_Vencimento) {
                        this.EntityTela.Vencimento = retorno.Venda(0).Data_Vencimento;
                    }
                    else {
                        this.EntityTela.Vencimento = retorno.Venda(0).Data;
                    }
                    this.EntityTela.Cod_Cliente = retorno.Venda(0).Cod_Cliente;
                    this.EntityTela.Nome_Cliente = retorno.Venda(0).Nome;
                    this.EntityTela.Valor = retorno.Venda(0).Valor_Final;
                    if (retorno.Venda(0).Nome_Cidade) {
                        this.lblCidade.Text = retorno.Venda(0).Nome_Cidade + "-" + retorno.Venda(0).Estado;
                    }
                    else {
                        this.lblCidade.Text = "";
                    }
                }
                parametros = {
                    Codigo: this.EntityTela.Venda
                };
                var resultado = this.ExecutarFuncaoServerSideSynch("obterProdutosVenda", parametros);
                if (resultado) {
                    this.Produtos = resultado.Produtos;
                }
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Recibo.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouTipo) {
            this.GetScope().MudouTipo = $.proxy(this.MudouTipo, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Codigo; }, this.GetScope().MudouVenda);
        }
    };
    C_Recibo.prototype.MudouTipo = function () {
        var parametros;
        parametros = {
            Codigo: this.cboEmpresa.GetValue(),
            Usuario: ValoresSismoura.UsuarioLogado,
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("obterRecibo", parametros);
        if (retorno) {
            if (retorno.UsuarioEmpresa <= 0) {
                MostrarAlerta("O Usuário não tem vínculo com a empresa cadastrada ao recibo!" + "</br>" + "Para resolver acesse: RH > Funcionário > Cadastro de Funcionário");
                this.txtCodigo.Focus();
                return;
            }
            this.SetEntity(retorno.Recibo);
        }
        else {
            MostrarAlerta("Recibo não cadastrado!");
        }
        return retorno;
    };
    C_Recibo.prototype.OnEmpresaAlterou = function () {
        var retorno = this.OnDadosEmpresa();
        if (retorno) {
            this.lblCidade.Text = retorno.Cidade + " - " + retorno.Estado;
        }
    };
    C_Recibo.prototype.OnDadosEmpresa = function () {
        var parametros;
        parametros = {
            codEmpresa: this.cboEmpresa.GetValue()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetbyEmpresa", parametros);
        return retorno;
    };
    C_Recibo.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.lblData.Text = "" + Date.now();
        var retorno = this.OnDadosEmpresa();
        if (retorno) {
            this.lblCidade.Text = retorno.Cidade + " - " + retorno.Estado;
        }
    };
    return C_Recibo;
}(MouraPageCadastroAngular));
var c_Recibo = new C_Recibo();
//# sourceMappingURL=C_Recibo.js.map