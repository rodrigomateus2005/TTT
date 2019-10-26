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
var V_OpProd = /** @class */ (function (_super) {
    __extends(V_OpProd, _super);
    function V_OpProd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(V_OpProd.prototype, "optTipo", {
        get: function () {
            return window['optTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V_OpProd.prototype, "cboModoFunc", {
        get: function () {
            return window['cboModoFunc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V_OpProd.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V_OpProd.prototype, "txtGrupo", {
        get: function () {
            return window['txtGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V_OpProd.prototype, "txtSubgrupo", {
        get: function () {
            return window['txtSubgrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V_OpProd.prototype, "txtOpcional", {
        get: function () {
            return window['txtOpcional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V_OpProd.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V_OpProd.prototype, "btnNovo", {
        get: function () {
            return window['btnNovo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V_OpProd.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V_OpProd.prototype, "Item", {
        get: function () {
            if (!this.GetScope()["Item"]) {
                this.GetScope()["Item"] = {};
            }
            return this.GetScope()["Item"];
        },
        set: function (value) {
            this.GetScope()["Item"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V_OpProd.prototype, "Itens", {
        get: function () {
            return this.GetScope()["Itens"];
        },
        set: function (value) {
            this.GetScope()["Itens"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V_OpProd.prototype, "Selecionados", {
        get: function () {
            if (!this.GetScope()["Selecionados"]) {
                this.GetScope()["Selecionados"] = [];
            }
            return this.GetScope()["Selecionados"];
        },
        set: function (value) {
            this.GetScope()["Selecionados"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V_OpProd.prototype, "Excluidos", {
        get: function () {
            if (!this.GetScope()["Excluidos"]) {
                this.GetScope()["Excluidos"] = [];
            }
            return this.GetScope()["Excluidos"];
        },
        set: function (value) {
            this.GetScope()["Excluidos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    V_OpProd.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.optTipo && this.txtProduto && this.txtGrupo && this.txtSubgrupo) {
            adicionarEventoMoura(this.optTipo.SelectionChanged, this.OnSelecionouTipo, this);
        }
        if (this.cboModoFunc) {
            adicionarEventoMoura(this.cboModoFunc.SelectedItemChanged, this.LimparTela, this);
        }
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Procurou, this.OnPesquisou, this);
        }
        if (this.txtGrupo) {
            adicionarEventoMoura(this.txtGrupo.Procurou, this.OnPesquisou, this);
        }
        if (this.txtSubgrupo) {
            adicionarEventoMoura(this.txtSubgrupo.Procurou, this.OnPesquisou, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickGravar, this);
        }
        if (this.btnNovo) {
            adicionarEventoMoura(this.btnNovo.Click, this.LimparTela, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.Validando, this.OnClickAdicionar, this);
            adicionarEventoMoura(this.grid.ItemExcluido, this.OnExcluiuItem, this);
        }
    };
    V_OpProd.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        //Iniciando a tela com a mesma regra do módulo Compras
        this.optTipo.SetValue("Produto");
        this.cboModoFunc.SetValue("P");
    };
    V_OpProd.prototype.OnPesquisou = function (s, e) {
        try {
            var tipo = this.optTipo.GetValue();
            var modoFunc = this.cboModoFunc.GetValue();
            var parametros = {
                modoFunc: modoFunc,
                tipo: tipo
            };
            switch (tipo) {
                case "Produto": {
                    parametros.campoCodigo = CNum(this.txtProduto.GetText());
                    break;
                }
                case "Grupo": {
                    parametros.campoCodigo = CNum(this.txtGrupo.GetText());
                    break;
                }
                case "Subgrupo": {
                    parametros.campoCodigo = CNum(this.txtSubgrupo.GetText());
                    break;
                }
            }
            if (parametros.campoCodigo <= 0) {
                return;
            }
            if (tipo == "Produto") {
                if (modoFunc == "C") {
                    var isValido = this.ExecutarFuncaoServerSideSynch("ValidarProdutoCardapio", parametros);
                    if (!isValido) {
                        MostrarAlerta("Produto não cadastrado no Cardápio Moura.");
                        this.LimparTela();
                        return;
                    }
                }
                this.Itens = this.ExecutarFuncaoServerSideSynch("GetAdicionaisByProduto", parametros);
            }
            else {
                this.Itens = this.ExecutarFuncaoServerSideSynch("GetProdutosByGrupoSubgrupo", parametros);
            }
            this.RefreshAngular();
            this.grid.AtualizarGrid();
        }
        catch (e) {
            LogarException(e);
        }
    };
    V_OpProd.prototype.OnClickAdicionar = function (s, e) {
        var _this = this;
        try {
            var msg = this.ValidarAntesAdicionar();
            if (!String.IsNullOrWhiteSpace(msg)) {
                MostrarAlerta(msg);
                return;
            }
            var opc = {};
            var parametros = {
                codOpcional: CNum(this.txtOpcional.GetText())
            };
            var tipo = this.optTipo.GetValue();
            if (tipo == "Produto") {
                e.item.Codigo = CNum(this.txtOpcional.GetText());
                var isDuplicado = this.Itens.filter(function (t) { return t.Codigo == e.item.Codigo; }).length > 0;
                if (!isDuplicado) {
                    var adc = this.ExecutarFuncaoServerSideSynch("GetDadosOpcional", parametros);
                    e.item.Codigo = adc.Codigo;
                    e.item.Nome = adc.Nome;
                    e.item.Valor = adc.Valor;
                }
                else {
                    MostrarAlerta("Este Opcional já foi adicionado ao Produto informado.");
                    e.cancelar = true;
                }
            }
            else {
                //Verifica os produtos que ainda não possuem o adicional informado
                var selecionados = this.Itens.filter(function (el) { return el.Selecionar && _this.Selecionados.filter(function (el2) { return el.Codigo == el2.Produto && el2.Adicional == CNum(_this.txtOpcional.GetText()); }).length <= 0; });
                for (var x = 0; x < selecionados.length; x++) {
                    var item = selecionados[x];
                    var prodAdc = {};
                    prodAdc.Id = 0;
                    prodAdc.Produto = CNum(item.Codigo);
                    prodAdc.Adicional = CNum(this.txtOpcional.GetText());
                    this.Selecionados.push(prodAdc);
                }
                e.cancelar = true;
                MostrarMensagem("Opcional adicionado ao(s) Produto(s) selecionado(s), para efetivar clique em \"Gravar\".");
            }
            var tipo = this.optTipo.GetValue();
            if (tipo == "Produto") {
                this.txtOpcional.Limpar();
                this.txtOpcional.Focus();
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    V_OpProd.prototype.OnExcluiuItem = function (s, e) {
        var excluido = {};
        excluido.Id = 0;
        excluido.Produto = CNum(this.txtProduto.GetText());
        excluido.Adicional = CNum(e.item.Codigo);
        //Se o Opcional atual já tiver sido excluído para este Produto
        var isDuplicado = this.Excluidos.filter(function (t) { return t = excluido; }).length > 0;
        if (!isDuplicado) {
            this.Excluidos.push(excluido);
        }
    };
    V_OpProd.prototype.OnClickGravar = function () {
        var _this = this;
        try {
            debugger;
            if (this.optTipo.GetValue() == "Produto") {
                for (var x = 0; x < this.Itens.length; x++) {
                    var item = this.Itens[x];
                    var prodAdicional = {};
                    prodAdicional.Id = 0;
                    prodAdicional.Produto = CNum(this.txtProduto.GetText());
                    prodAdicional.Adicional = CNum(item.Codigo);
                    this.Selecionados.push(prodAdicional);
                }
            }
            else {
                var selecionadosGrid = this.grid.Grid.GetSelectedRowsData;
                for (var x = 0; x < selecionadosGrid.length; x++) {
                    var prodAdicional = {};
                    prodAdicional.Id = 0;
                    prodAdicional.Produto = CNum(selecionadosGrid[x].Codigo);
                    prodAdicional.Adicional = CNum(this.txtOpcional.GetText());
                    this.Selecionados.push(prodAdicional);
                }
            }
            if (!(this.Selecionados.length <= 0)) {
                var parametros = {
                    prodAdicional: this.Selecionados,
                    prodExcluidos: this.Excluidos,
                    codUsuario: ValoresSismoura.UsuarioLogado
                };
                abrirEspera();
                this.ExecutarFuncaoServerSideAsynch("Gravar", parametros, function (d) {
                    fecharEspera();
                    MostrarMensagem("Registros gravados com sucesso!");
                    _this.LimparTela();
                }, function (erro) {
                    fecharEspera();
                    LogarException(erro);
                }, this);
            }
            else {
                MostrarAlerta("É necessário \"Adicionar\" pelo menos um Opcional a Produto(s) antes de Gravar.");
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    V_OpProd.prototype.ValidarAntesAdicionar = function () {
        try {
            var tipo = this.optTipo.GetValue();
            if (tipo == "Produto") {
                if (CNum(this.txtProduto.GetText()) <= 0) {
                    return "É necessário informar o Produto para adicionar o Opcional.";
                }
            }
            else {
                if (this.Itens.length <= 0) {
                    return "Não há Produtos na grade.";
                }
                //var selecionados = this.Itens.filter(function (t) { return t.Selecionar }).length;
                var selecionadosGrid = this.grid.Grid.GetSelectedRowsData;
                if (selecionadosGrid.length <= 0) {
                    return "Selecione pelo menos um Produto na grade.";
                }
                if (tipo == "Grupo") {
                    if (CNum(this.txtGrupo.GetText()) <= 0) {
                        return "É necessário informar o Grupo para adicionar o Opcional.";
                    }
                }
                else if (tipo == "Subgrupo") {
                    if (CNum(this.txtSubgrupo.GetText()) <= 0) {
                        return "É necessário informar o Produto para adicionar o Opcional.";
                    }
                }
            }
            if (CNum(this.txtOpcional.GetText()) <= 0) {
                return "É necessário informar o Opcional a ser adicionado.";
            }
            return "";
        }
        catch (e) {
            LogarException(e);
        }
    };
    V_OpProd.prototype.OnSelecionouTipo = function () {
        try {
            debugger;
            this.LimparTela();
            var tipo = this.optTipo.GetValue();
            this.txtProduto.Visible = tipo == "Produto";
            this.txtGrupo.Visible = tipo == "Grupo";
            this.txtSubgrupo.Visible = tipo == "Subgrupo";
            this.grid.Grid.ColunaVisible("Valor", tipo == "Produto");
            this.grid.Grid.ColunaVisible(this.grid.Grid.GetColunaByName("botaoExcluir"), tipo == "Produto");
            if (!(tipo == "Produto")) {
                this.grid.Grid.ColunaVisible({ index: -2 }, true);
            }
            else {
                this.grid.Grid.ColunaVisible({ index: -2 }, false);
            }
        }
        catch (e) { }
    };
    V_OpProd.prototype.LimparTela = function () {
        try {
            this.txtProduto.Limpar();
            this.txtGrupo.Limpar();
            this.txtSubgrupo.Limpar();
            this.txtOpcional.Limpar();
            this.Itens = [];
            this.Selecionados = [];
            this.Excluidos = [];
            this.RefreshAngular();
            this.grid.AtualizarGrid();
            this.grid.Grid.ColunaVisible("Selecionar", false);
        }
        catch (e) { }
    };
    return V_OpProd;
}(MouraPageAngular));
var v_OpProd = new V_OpProd;
//# sourceMappingURL=V_OpProd.js.map