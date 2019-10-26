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
var C_TabPrecoEmp = /** @class */ (function (_super) {
    __extends(C_TabPrecoEmp, _super);
    function C_TabPrecoEmp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_TabPrecoEmp.prototype, "txtTabPreco", {
        get: function () {
            return window["txtTabPreco_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabPrecoEmp.prototype, "txtPreco", {
        get: function () {
            return window["txtPreco_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabPrecoEmp.prototype, "txtDesconto", {
        get: function () {
            return window["txtDesconto_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabPrecoEmp.prototype, "chkListaPadrao", {
        get: function () {
            return window["chkListaPadrao_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabPrecoEmp.prototype, "lblTooltip", {
        get: function () {
            return window["lblTooltip_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabPrecoEmp.prototype, "lstEmpresa", {
        get: function () {
            return window["lstEmpresa_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabPrecoEmp.prototype, "gridTabPreco", {
        get: function () {
            return window["gridTabPreco_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabPrecoEmp.prototype, "agpBotoes", {
        get: function () {
            return window["agpBotoes_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabPrecoEmp.prototype, "btnGravar", {
        get: function () {
            return window["btnGravar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabPrecoEmp.prototype, "btnLimpar", {
        get: function () {
            return window["btnLimpar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    C_TabPrecoEmp.prototype.Init = function () {
        var _this = this;
        _super.prototype.Init.call(this);
        this.MostrarListaPadrao();
        if (this.txtTabPreco) {
            adicionarEventoMoura(this.txtTabPreco.Procurou, function () {
                var parametros = {
                    codigo: _this.txtTabPreco.GetText()
                };
                var produto = _this.ExecutarFuncaoServerSideSynch("ObterPorCodigo", parametros);
                if (produto == null) {
                    MostrarAlerta("Produto não encontrado!");
                    _this.txtTabPreco.SetText("");
                }
                else {
                    _this.txtDesconto.SetText(produto.Preco_Desconto);
                    _this.txtPreco.SetText(produto.Preco_Custo);
                }
            }, this);
            adicionarEventoMoura(this.txtTabPreco.Limpou, function () {
                _this.txtPreco.Limpar();
                _this.txtDesconto.Limpar();
            }, this);
        }
    };
    C_TabPrecoEmp.prototype.MostrarListaPadrao = function () {
        var ListaPadrao = this.ExecutarFuncaoServerSideSynch("ListaPadrao", null);
        if (ListaPadrao != 0) {
            this.chkListaPadrao.Enabled = false;
        }
        else {
            this.chkListaPadrao.Enabled = true;
        }
    };
    C_TabPrecoEmp.prototype.onClickButtonGravar = function () {
        if (this.gridTabPreco.DataSource.length > 0) {
            var parametros = {
                listaGrade: this.gridTabPreco.DataSource,
                nomeTela: ValoresSismoura.NomeTela,
                usuario: ValoresSismoura.UsuarioLogado,
                listaPadrao: this.chkListaPadrao.Checked
            };
            this.ExecutarFuncaoServerSideSynch("GravarTabelaPrecoEmpresa", parametros);
            MostrarMensagem("Tabela de Preços por Empresa Gravada com Sucesso!");
        }
        else {
            MostrarAlerta("A Grade está vazia!");
        }
    };
    C_TabPrecoEmp.prototype.onClickButtonAdicionar = function () {
        var _this = this;
        if (this.ValidaCampos()) {
            var grid = this.gridTabPreco.DataSource;
            this.lstEmpresa.GetValuesNumber().forEach(function (value) {
                var item = {};
                item.Codigo = _this.txtTabPreco.GetText();
                item.Empresa = value;
                item.Valor = _this.txtPreco.GetText();
                item.Desconto = _this.txtDesconto.GetText();
                item.Tabela_Preco = _this.txtTabPreco.GetText();
                grid.push(item);
            });
            this.gridTabPreco.PreencherGrid(grid);
        }
    };
    C_TabPrecoEmp.prototype.ValidaCampos = function () {
        if (this.txtTabPreco.GetText() == '' || this.txtDesconto.GetText() == '' ||
            this.txtPreco.GetText() == '' || this.lstEmpresa.GetTexts().length == 0) {
            MostrarAlerta("Preencha os Campos Acima!");
            return false;
        }
        else {
            return true;
        }
    };
    C_TabPrecoEmp.prototype.LimpaCampos = function () {
        this.chkListaPadrao.Checked = false;
        this.lstEmpresa.btnDesmarcar.DoClick();
        this.txtDesconto.SetText("");
        this.txtPreco.SetText("");
        this.txtTabPreco.SetText("");
        this.txtTabPreco.Focus();
        this.gridTabPreco.PreencherGrid(null);
    };
    return C_TabPrecoEmp;
}(MouraPageAngular));
var c_TabPrecoEmp = new C_TabPrecoEmp();
//# sourceMappingURL=C_TabPrecoEmp.js.map