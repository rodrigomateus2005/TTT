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
var P_AltPre = /** @class */ (function (_super) {
    __extends(P_AltPre, _super);
    function P_AltPre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(P_AltPre.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(P_AltPre.prototype, "txtPreco", {
        get: function () {
            return window['txtPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(P_AltPre.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(P_AltPre.prototype, "txtNovoPreco", {
        get: function () {
            return window['txtNovoPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(P_AltPre.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(P_AltPre.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(P_AltPre.prototype, "txtId", {
        get: function () {
            return window['txtId_Object'];
        },
        enumerable: true,
        configurable: true
    });
    P_AltPre.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Procurou, this.OnBuscouProduto, this);
            adicionarEventoMoura(this.txtProduto.TextChanged, this.MudouTextoProduto, this);
            adicionarEventoDevExpress(this.txtProduto.BotaoNovo.Click, this.OnLimparProduto, this);
        }
        if (this.cboTipo) {
            adicionarEventoMoura(this.cboTipo.SelectedItemChanged, this.OnAlterouTipo, this);
        }
    };
    P_AltPre.prototype.MudouTextoProduto = function () {
        if (this.txtProduto.GetText() == "") {
            this.LimparCampos();
        }
    };
    P_AltPre.prototype.OnLimparProduto = function (s, e) {
        this.OnDepoisLimpar(this.EntityTela);
    };
    P_AltPre.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        this.PreencherGrade();
    };
    P_AltPre.prototype.OnBuscouProduto = function (s, e) {
        this.PreencherComboPreco(this.EntityTela.Codigo_Produto);
        this.OnAlterouTipo();
    };
    P_AltPre.prototype.PreencherComboPreco = function (codProduto) {
        this.cboTipo.ClearItems();
        var parametros = {
            codProduto: this.EntityTela.Codigo_Produto
        };
        var retornoLista = this.ExecutarFuncaoServerSideSynch("GetListaPreco", parametros);
        if (retornoLista.length > 0) {
            this.cboTipo.Visible = true;
            this.cboTipo.AddItem("Preço de Venda", 0, "");
            for (var i = 0; i < retornoLista.length; i++) {
                this.cboTipo.AddItem(retornoLista[i].Descricao, retornoLista[i].Codigo, "");
            }
            if (this.txtId.GetText() == "") { // Está inserindo um registro novo, seta o valor padrão no combo
                this.EntityTela.Lista_Preco = 0;
                this.cboTipo.SetSelectedIndex(0);
            }
            else { // Está setando um registro pela lista, não deixar alterar o tipo, pois pode gerar inconsistências
                if (this.EntityTela.Lista_Preco == null || this.EntityTela.Lista_Preco == 0) {
                    this.EntityTela.Lista_Preco = 0;
                    this.cboTipo.SetSelectedIndex(0);
                }
                else {
                    this.cboTipo.SetValue(this.EntityTela.Lista_Preco);
                }
                this.cboTipo.Enabled = false;
            }
        }
        else {
            this.EntityTela.Lista_Preco = 0;
            this.cboTipo.Visible = false;
        }
    };
    P_AltPre.prototype.OnAlterouTipo = function () {
        this.txtPreco.SetText("0,00");
        if (this.EntityTela.Codigo_Produto != null) {
            var parametros = {
                codProduto: this.EntityTela.Codigo_Produto
            };
            if (this.cboTipo.GetValue() == 0 || !this.cboTipo.Visible) {
                var preco = this.ExecutarFuncaoServerSideSynch("GetPrecoProduto", parametros);
                this.txtPreco.SetText(preco.Format(2));
            }
            else {
                var paramList = {
                    codProduto: CNum(this.EntityTela.Codigo_Produto),
                    codListaPreco: CNum(this.cboTipo.GetValue())
                };
                var precoLista = this.ExecutarFuncaoServerSideSynch("GetValorListaPreco", paramList);
                this.txtPreco.SetText(precoLista.Format(2));
            }
        }
    };
    P_AltPre.prototype.OnSelecionouLinha = function (s, e) {
        this.LimparCampos();
        this.PreencherEntidade("" + e.rowKey);
        /*this.PreencherComboPreco(CNum(e.data["Codigo_Produto"]));

        if (e.data["Lista_Preco"] == null) {
            this.cboTipo.SetValue(0);
        } else {
            this.cboTipo.SetValue(e.data["Lista_Preco"]);
        }

        this.cboTipo.Enabled = false;*/
    };
    P_AltPre.prototype.PreencherGrade = function () {
        try {
            var parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    P_AltPre.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar;
        if (this.EntityTela.Valor_Produto == this.EntityTela.Valor) {
            MostrarAlerta("O novo preço deve ser diferente do preço atual!");
            return false;
        }
        if (this.txtId.GetText() == "") { // Inserindo
            var parametros = {
                codProduto: CNum(this.EntityTela.Codigo_Produto),
                codListaPreco: CNum(this.EntityTela.Lista_Preco),
                data: this.EntityTela.Data
            };
            var prodProg = this.ExecutarFuncaoServerSideSynch("IsProdutoProgramado", parametros);
            if (!prodProg) {
                /*if (this.EntityTela.Lista_Preco == 0) {
                    this.EntityTela.Lista_Preco = null;
                }*/
                return true;
            }
            else {
                if (prodProg.Lista_Preco == 0) {
                    MostrarAlerta("Alteração do Preço deste Produto já está programada para data informada!");
                    return false;
                }
                else {
                    MostrarAlerta("Alteração da Lista de Preço deste Produto já está programada para data informada!");
                    return false;
                }
            }
        }
        else { // Alterando
            var parametros = {
                codProduto: CNum(this.EntityTela.Codigo_Produto),
                codListaPreco: CNum(this.EntityTela.Lista_Preco),
                data: this.EntityTela.Data
            };
            var prodProg = this.ExecutarFuncaoServerSideSynch("IsProdutoProgramado", parametros);
            if (prodProg) { // Já possui um registro com a mesma data e com o mesmo produto
                if (prodProg.ID != this.EntityTela.ID) {
                    if (prodProg.Data.ToDate().getTime() === this.EntityTela.Data.getTime()) {
                        MostrarAlerta("Já existe um registro com a mesma data informada para a alteração de preço do produto especificado. Informe outra data.");
                        return false;
                    }
                }
                else {
                    return true;
                }
            }
            else {
                return true;
            }
        }
    };
    P_AltPre.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.EntityTela.Data = this.EntityTela.Data.ToDate();
        if (this.EntityTela.Lista_Preco == null || this.EntityTela.Lista_Preco == 0) {
            this.EntityTela.Lista_Preco = 0;
            this.cboTipo.SetSelectedIndex(0);
        }
        else {
            this.cboTipo.SetValue(this.EntityTela.Lista_Preco);
        }
        this.PreencherGrade();
        return true;
    };
    P_AltPre.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.LimparCampos();
        Entity.Data = this.DataServidor();
    };
    P_AltPre.prototype.OnAntesDeletar = function () {
        _super.prototype.OnAntesDeletar.call(this);
        return true;
    };
    P_AltPre.prototype.OnDepoisDeletar = function () {
        this.PreencherGrade();
        return true;
    };
    P_AltPre.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        Entity.Data = Entity.Data.ToDate();
        if (Entity.Lista_Preco == null || Entity.Lista_Preco == 0) {
            this.EntityTela.Lista_Preco = 0;
            Entity.Lista_Preco = 0;
            this.cboTipo.SetSelectedIndex(0);
        }
        else {
            this.cboTipo.SetValue(this.EntityTela.Lista_Preco);
        }
        this.cboTipo.Enabled = false;
        var parametros = {
            codProduto: CNum(Entity.Codigo_Produto),
            codListaPreco: CNum(Entity.Lista_Preco),
            data: Entity.Data.ToDate()
        };
        var prog = this.ExecutarFuncaoServerSideSynch("VerificarPrecoAlterado", parametros);
        if (prog) {
            if (prog.Preco_Alterado) {
                this.txtData.Enabled = false;
                this.txtNovoPreco.Enabled = false;
            }
        }
    };
    P_AltPre.prototype.LimparCampos = function () {
        this.txtProduto.Limpar();
        this.txtPreco.SetText("0,00");
        this.txtData.Date = new Date();
        this.txtNovoPreco.SetText("0,00");
        this.cboTipo.ClearItems();
        this.cboTipo.Visible = true;
        this.cboTipo.Enabled = true;
        this.txtId.Limpar();
        this.txtData.Enabled = true;
        this.txtNovoPreco.Enabled = true;
    };
    return P_AltPre;
}(MouraPageCadastroAngular));
var p_AltPre = new P_AltPre();
//# sourceMappingURL=P_AltPre.js.map