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
var C_Vasilh = /** @class */ (function (_super) {
    __extends(C_Vasilh, _super);
    function C_Vasilh() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Vasilh.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Vasilh.prototype, "txtNota_Saida", {
        get: function () {
            return window['txtNota_Sai_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Vasilh.prototype, "lblCliente", {
        get: function () {
            return window['lblCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Vasilh.prototype, "lblClienteNome", {
        get: function () {
            return window['lblClienteNome_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Vasilh.prototype, "lblData_Saida", {
        get: function () {
            return window['lblData_Saida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Vasilh.prototype, "lblValor_Saida", {
        get: function () {
            return window['lblValor_Saida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Vasilh.prototype, "txtProdutoC", {
        get: function () {
            return window['txtProdutoC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Vasilh.prototype, "txtClienteProcura", {
        get: function () {
            return window['txtClienteProcura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Vasilh.prototype, "lblCod_ONU", {
        get: function () {
            return window['lblCod_ONU_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Vasilh.prototype, "lblNome", {
        get: function () {
            return window['lblNome_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Vasilh.prototype, "txtQtde_Retirada", {
        get: function () {
            return window['txtQtde_Retirada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Vasilh.prototype, "txtQtde_Entregue", {
        get: function () {
            return window['txtQtde_Entregue_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Vasilh.prototype, "txtSerie", {
        get: function () {
            return window['txtSerie_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Vasilh.prototype, "Produto", {
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
    Object.defineProperty(C_Vasilh.prototype, "Produtos", {
        get: function () {
            return this.GetScope()["Produtos"];
        },
        set: function (value) {
            this.GetScope()["Produtos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Vasilh.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Vasilh.prototype, "btnNotas", {
        get: function () {
            return window['btnNotas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Vasilh.prototype, "mdNotas", {
        get: function () {
            return window['mdNotas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Vasilh.prototype, "gridProcura", {
        get: function () {
            return window['gridProcura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Vasilh.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.MudouTipo, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.Validando, this.OnValidando, this);
        }
        if (this.txtProdutoC) {
            adicionarEventoMoura(this.txtProdutoC.Procurou, this.OntxtProdutoCProcurou, this);
            adicionarEventoMoura(this.txtProdutoC.LostFocus, this.OntxtProdutoCProcurou, this);
        }
        if (this.txtNota_Saida) {
            adicionarEventoJQuery(this.txtNota_Saida.Textbox, "blur", this.MudouTipo, this);
        }
        if (this.txtSerie) {
            adicionarEventoJQuery(this.txtSerie.Textbox, "blur", this.MudouTipo, this);
        }
        if (this.gridProcura) {
            adicionarEventoMoura(this.gridProcura.SelecionouLinha, this.OnGridSelecionouItem, this);
            adicionarEventoMoura(this.gridProcura.SelecionouLinha, this.MudouTipo, this);
        }
        if (this.txtClienteProcura) {
            adicionarEventoMoura(this.txtClienteProcura.Procurou, this.OntxtClienteProcura, this);
        }
        if (this.btnNotas) {
            adicionarEventoMoura(this.btnNotas.Click, this.OnClickNotas, this);
        }
    };
    C_Vasilh.prototype.OnGridSelecionouItem = function (s, e) {
        this.LimparProduto();
        if (this.txtNota_Saida.GetText().CNum() != e.data['Formulario'] && this.txtSerie.GetText().CNum() != e.data['Serie']) {
            this.LimparCliente();
        }
        this.txtNota_Saida.SetText(e.data['Formulario']);
        this.txtSerie.SetText(e.data['Serie']);
        this.cboEmpresa.SetValue(e.data['Empresa']);
        this.EntityTela.Cliente = e.data['Codigo_Cliente'];
        this.LimparModal();
        this.mdNotas.Hide();
        ;
    };
    C_Vasilh.prototype.OntxtClienteProcura = function (s, e) {
        var entity;
        var parametros;
        var result;
        try {
            if (this.txtClienteProcura.GetText().CNum() > 0) {
                parametros = {
                    campo: this.txtClienteProcura.GetText().CNum()
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("GetbyCodigoNFTop", parametros);
                if (retorno) {
                    this.gridProcura.PreencherGrid(retorno);
                }
            }
            else {
                this.gridProcura.Grid.refresh();
                this.txtClienteProcura.Focus();
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Vasilh.prototype.OnClickNotas = function (s, e) {
        e.processOnServer = false;
        this.mdNotas.Show();
        this.gridProcura.Refresh();
        this.gridProcura.AjustarWidth();
        this.gridProcura.Grid.refresh();
        this.txtClienteProcura.Focus();
        return;
    };
    C_Vasilh.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        //if (<any>this.GetScope()) {
        //    if (!(<any>this.GetScope()).MudouTipo) {
        //        (<any>this.GetScope()).MudouTipo = $.proxy(this.MudouTipo, this);
        //        var tela = this;
        //        this.GetScope().$watch(function (scope: IMouraScope<SiSMoura.Core.Entity.Controle_Vasilhame>) {
        //            if (tela.GetScope().Entity.FiscalNfEntity) {
        //                    if (tela.GetScope().Entity.FiscalNfEntity.Serie != undefined) {
        //                        return scope.Entity.FiscalNfEntity.Serie;
        //                    }
        //            }
        //        }, (<any>this.GetScope()).MudouTipo);
        //    }
        //}
    };
    C_Vasilh.prototype.MudouTipo = function () {
        var entity = this.GetScope().Entity;
        var parametros;
        var result;
        var Cliente;
        this.LimparProduto();
        this.grid.Grid.PreencherGrid(null);
        try {
            if ((this.txtSerie.GetText() == "" || this.txtSerie.GetText().CNum() < 0) || (this.txtNota_Saida.GetText() == "" || this.txtNota_Saida.GetText().CNum() < 0)) {
                this.LimparCliente();
                return;
            }
            if (this.cboEmpresa.GetValue() > 0) {
                if (this.txtNota_Saida.GetText().CNum() > 0 && this.txtSerie.GetText().CNum() > 0) {
                    if (this.EntityTela.Cliente > 0) {
                        Cliente = this.EntityTela.Cliente;
                    }
                    else {
                        Cliente = 0;
                    }
                    parametros = {
                        nota: this.txtNota_Saida.GetText().CNum(),
                        serie: this.txtSerie.GetText().CNum(),
                        codCliente: Cliente,
                        empresa: this.cboEmpresa.GetValue()
                    };
                    result = this.ExecutarFuncaoServerSideSynch("GetbyCodigoNF", parametros);
                    if (result) {
                        entity.Nota_Fiscal = result.Codigo;
                        entity.Cliente = result.Cliente;
                        entity.Data_Cadastro = result.Data_Emissao;
                        this.lblCliente.Text = result.Cliente;
                        this.lblClienteNome.Text = result.Fiscal.Nome;
                        this.lblData_Saida.Text = result.Data_Emissao;
                        this.lblValor_Saida.Text = (result.Fiscal.Total_Nf.Format(2));
                        this.SetEntity(entity);
                        parametros = {
                            campo: result.Codigo
                        };
                        var retorno = this.ExecutarFuncaoServerSideSynch("GetbyNotaFiscal", parametros);
                        if (retorno) {
                            entity.Codigo = retorno.Codigo[0].Codigo;
                            parametros = {
                                campo: entity.Codigo
                            };
                            var retorno = this.ExecutarFuncaoServerSideSynch("GetByCodigoVasilh", parametros);
                            if (retorno) {
                                this.Produtos = retorno.Produtos;
                            }
                        }
                    }
                    else {
                        MostrarAlerta("Nenhum Formulário encontrado para a Empresa selecionada!");
                        this.LimparCliente();
                        this.LimparProduto();
                        return;
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Vasilh.prototype.OntxtProdutoCProcurou = function (s, e) {
        this.GetCadastrados();
    };
    C_Vasilh.prototype.OnLimparProduto = function (s, e) {
        this.LimparProduto();
    };
    C_Vasilh.prototype.OnValidando = function (s, e) {
        try {
            var x;
            var itens = this.grid.Grid.DataSource;
            if (this.lblCliente.Text.CNum() > 0) {
                if (!itens) {
                    itens = [];
                }
                for (x = 0; x < itens.length; x++) {
                    if (itens[x].Produto == e.item.Produto) {
                        MostrarAlerta("Este produto já foi adiconado na grade!");
                        e.cancelar = true;
                        this.txtProdutoC.Focus();
                        return;
                    }
                }
                if (e.item.Produto <= 0) {
                    MostrarAlerta("Informe um produto para ser adicionado");
                    e.cancelar = true;
                    this.txtProdutoC.Focus();
                    return;
                }
                if (this.txtSerie.GetText().CNum() <= 0) {
                    MostrarAlerta("Preencha corretamente o campo: Serie");
                    this.txtSerie.Focus();
                    e.cancelar = true;
                    return;
                }
                if (this.txtNota_Saida.GetText().CNum() <= 0) {
                    MostrarAlerta("Preencha corretamente o campo: Formulário");
                    this.txtNota_Saida.Focus();
                    e.cancelar = true;
                    return;
                }
            }
            else {
                MostrarAlerta("Preencha corretamente o campo: Série e  Formulário");
                e.cancelar = true;
                return;
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Vasilh.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.LimparCliente();
        this.LimparProduto();
        this.txtNota_Saida.SetText("");
        this.txtSerie.SetText("");
        this.txtSerie.Focus();
        this.RefreshAngular();
    };
    C_Vasilh.prototype.LimparModal = function () {
        this.txtClienteProcura.Limpar();
        this.gridProcura.PreencherGrid(null);
    };
    C_Vasilh.prototype.LimparProduto = function () {
        this.Produto.Produto = "";
        this.Produto.Nome = "";
        this.Produto.Codigo_Onu = "";
        this.Produto.Qtde_Retirada = "";
        this.Produto.Qtde_Entregue = "";
    };
    C_Vasilh.prototype.LimparCliente = function () {
        this.Produtos = [];
        this.lblClienteNome.Text = "";
        this.lblCliente.Text = "";
        this.lblValor_Saida.Text = "";
        this.lblData_Saida.Text = "";
    };
    C_Vasilh.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
    };
    C_Vasilh.prototype.GetCadastrados = function () {
        try {
            if (this.txtProdutoC.GetText() != undefined || this.txtProdutoC.GetText() != "" || this.txtProdutoC.GetText().CNum() != 0) {
                var parametros;
                parametros = {
                    codProduto: this.txtProdutoC.GetText().CNum()
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("GetByProduto", parametros);
                if (retorno) {
                    this.Produto.Produto = retorno['Codigo'];
                    this.Produto.Nome = retorno['Nome'];
                    this.Produto.Codigo_Onu = retorno['Cod_Onu'];
                    this.txtQtde_Retirada.Focus();
                }
                else {
                    this.lblCod_ONU.Text = "";
                    this.lblNome.Text = "";
                    this.txtQtde_Entregue.Limpar();
                    this.txtQtde_Retirada.Limpar();
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Vasilh.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.Produtos.length == 0) {
            MostrarAlerta("Não há nenhum vasilhame para informar!");
            this.MudouTipo();
            return false;
        }
        else {
            this.EntityTela.VasilhameProdutoEntity = this.Produtos;
            return true;
        }
    };
    C_Vasilh.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        var Entity;
        this.OnDepoisLimpar(Entity);
        this.grid.Grid.PreencherGrid(null);
        return true;
    };
    return C_Vasilh;
}(MouraPageCadastroAngular));
var c_Vasilh = new C_Vasilh();
//# sourceMappingURL=C_Vasilh.js.map