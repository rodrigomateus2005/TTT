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
var C_Servi = /** @class */ (function (_super) {
    __extends(C_Servi, _super);
    function C_Servi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Servi.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Servi.prototype, "chkEnviarAplicativo", {
        get: function () {
            return window['chkEnviarAplicativo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Servi.prototype, "chkServicoEscala", {
        get: function () {
            return window['chkServicoEscala_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Servi.prototype, "cboTaxaTributaria", {
        get: function () {
            return window['cboTaxaTributaria_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Servi.prototype, "cboRaca", {
        get: function () {
            return window['cboRaca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Servi.prototype, "cboEspecieIG", {
        get: function () {
            return window['cboEspecieIG_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Servi.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Servi.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Servi.prototype, "grdPrecos", {
        get: function () {
            return window['grdPrecos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Servi.prototype, "grdRacas", {
        get: function () {
            return window['grdRacas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Servi.prototype, "grdIG", {
        get: function () {
            return window['grdIG_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Servi.prototype, "Precos", {
        //
        get: function () {
            return this.GetScope()["Precos"];
        },
        set: function (value) {
            this.GetScope()["Precos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Servi.prototype, "Racas", {
        //
        get: function () {
            return this.GetScope()["Racas"];
        },
        set: function (value) {
            this.GetScope()["Racas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Servi.prototype, "Informacoes", {
        //
        get: function () {
            return this.GetScope()["Informacoes"];
        },
        set: function (value) {
            this.GetScope()["Informacoes"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Servi.prototype, "Ig", {
        //
        get: function () {
            return this.GetScope()["Ig"];
        },
        set: function (value) {
            this.GetScope()["Ig"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Servi.prototype, "Impostos", {
        //
        get: function () {
            return this.GetScope()["Impostos"];
        },
        set: function (value) {
            this.GetScope()["Impostos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    //
    C_Servi.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            if (this.chkEnviarAplicativo)
                this.chkEnviarAplicativo.Visible = false;
            if (this.chkServicoEscala)
                this.chkServicoEscala.Visible = false;
            if (this.tab) {
                this.tab.AlterarVisibleAba("AbaRacas", false);
                this.tab.AlterarVisibleAba("AbaInformacoesGerais", false);
            }
        }
        else {
            if (this.tab) {
                this.tab.AlterarVisibleAba("AbaRacas", true);
                this.tab.AlterarVisibleAba("AbaInformacoesGerais", true);
                this.tab.AlterarVisibleAba("AbaImpostos", false);
            }
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Varios_Precos) {
            this.tab.AlterarVisibleAba("AbaPrecos", true);
        }
        else {
            this.tab.AlterarVisibleAba("AbaPrecos", false);
        }
        if (this.cboTaxaTributaria) {
            var param = {};
            var utilizaECF = this.ExecutarFuncaoServerSideSynch("ExisteEcfCadastrada", param);
            this.cboTaxaTributaria.Obrigatorio = utilizaECF;
            this.cboTaxaTributaria.Visible = utilizaECF;
        }
        this.preencherRegistrosCadastrados();
    };
    C_Servi.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid)
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridClickBotaoLinha, this);
        if (this.grdPrecos)
            adicionarEventoMoura(this.grdPrecos.AlterandoItem, this.OnAlterandoItemListaPreco, this);
        if (this.grdRacas)
            adicionarEventoMoura(this.grdRacas.ItemAdicionado, this.OnAdicionouItemRaca, this);
        if (this.grdIG) {
            adicionarEventoMoura(this.grdIG.ItemAdicionado, this.OnAdicionouItemIG, this);
            adicionarEventoMoura(this.grdIG.Validando, this.OnValidandoItemIg, this);
        }
    };
    C_Servi.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entidade = this.GetScope().Entity;
        this.PreencherEntidadePrecos(entidade);
        this.PreencherEntidadeIG(entidade);
        this.PreencherEntidadeImpostos(entidade);
        this.PreencherEntidadeRacas(entidade);
        return true;
    };
    C_Servi.prototype.preencherRegistrosCadastrados = function () {
        var _this = this;
        try {
            var param = {};
            this.ExecutarFuncaoServerSideAsynch("PreencherGradeRegistrosCadastrados", param, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.Grid.PreencherGrid(retorno);
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, function (erro) {
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Servi.prototype.PreencherListaPreco = function (Servico) {
        var _this = this;
        try {
            var parametros = {
                Codigo: Servico
            };
            this.ExecutarFuncaoServerSideAsynch("GetListasPreco", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    (retorno) ? _this.Precos = retorno : _this.Precos = [];
                    _this.RefreshAngular();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, function (erro) {
                _this.Precos = [];
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Servi.prototype.PreencherListaRacas = function (Servico) {
        var _this = this;
        try {
            var parametros = {
                Codigo: Servico
            };
            this.ExecutarFuncaoServerSideAsynch("GetListaRaca", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    (retorno) ? _this.Racas = retorno : _this.Racas = [];
                    _this.RefreshAngular();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, function (erro) {
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Servi.prototype.PreencherListaIG = function (Servico) {
        var _this = this;
        try {
            var parametros = {
                Codigo: Servico
            };
            this.ExecutarFuncaoServerSideAsynch("GetListaIG", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    (retorno) ? _this.Informacoes = retorno : _this.Informacoes = [];
                    _this.RefreshAngular();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, function (erro) {
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Servi.prototype.PreencherListaRegrasImposto = function (Servico) {
        var _this = this;
        try {
            var parametros = {
                Codigo: Servico
            };
            this.ExecutarFuncaoServerSideAsynch("GetListaRegrasImposto", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    (retorno) ? _this.Impostos = retorno : _this.Impostos = [];
                    _this.RefreshAngular();
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, function (erro) {
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Servi.prototype.OnGridClickBotaoLinha = function (s, e) {
        this.PreencherEntidade(e.data["Codigo"]);
    };
    C_Servi.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.preencherRegistrosCadastrados();
        return true;
    };
    C_Servi.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.preencherRegistrosCadastrados();
        return true;
    };
    C_Servi.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        this.preencherRegistrosCadastrados();
        this.PreencherListaPreco(Entidade.Codigo);
        this.PreencherListaRacas(Entidade.Codigo);
        this.PreencherListaIG(Entidade.Codigo);
        this.PreencherListaRegrasImposto(Entidade.Codigo);
        this.RefreshAngular();
    };
    C_Servi.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.PreencherListaPreco(0);
        this.PreencherListaRegrasImposto(0);
        this.PreencherListaIG(0);
        this.preencherRegistrosCadastrados();
        this.grdIG.btnNovo.DoClick();
    };
    C_Servi.prototype.OnAlterandoItemListaPreco = function (s, e) {
        var valorAnterior = e.oldRowValue;
        var valorAtual = e.item;
        var param = {
            servicoSTR: JSON.stringify(this.EntityTela),
            oldValueSTR: JSON.stringify(valorAnterior),
            newValueSTR: JSON.stringify(valorAtual)
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("CalcularValoresLista", param);
        e.item = retorno;
    };
    C_Servi.prototype.OnAdicionouItemRaca = function (s, e) {
        var item = e.item;
        item.Descricao_Raca = this.cboRaca.GetText();
        e.item = item;
    };
    C_Servi.prototype.OnValidandoItemIg = function (s, e) {
        var _this = this;
        var novoItem = e.item;
        var item;
        if (this.Informacoes) {
            if (novoItem.Id > 0) {
                item = this.Informacoes.filter(function (q) { return q.Id == novoItem.Id; });
                var retorno = this.Informacoes.filter(function (q) { return q.Codigo_Especie == _this.Ig.Codigo_Especie && q.Tipo == _this.Ig.Tipo && q.Id != _this.Ig.Id; });
                if (retorno && retorno.length > 0) {
                    MostrarAlerta("IG já cadastrada para a espécie e tipo!");
                    e.cancelar = true;
                    return;
                }
                retorno = this.Informacoes.filter(function (q) { return q.Codigo_Especie == _this.Ig.Codigo_Especie && q.Tipo == 0 && q.Id != _this.Ig.Id; });
                if (retorno && retorno.length > 0) {
                    MostrarAlerta("IG já cadastrada para todos os tipos dessa espécie!");
                    e.cancelar = true;
                    return;
                }
                if (this.Ig.Tipo == 0) {
                    retorno = this.Informacoes.filter(function (q) { return q.Codigo_Especie == _this.Ig.Codigo_Especie && q.Id != _this.Ig.Id; });
                    if (retorno && retorno.length > 0) {
                        MostrarAlerta("IG já cadastrada para a espécie e tipo!");
                        e.cancelar = true;
                        return;
                    }
                }
                if (item && item.length > 0) {
                    item[0].Ig = novoItem.Ig;
                    item[0].Tipo = novoItem.Tipo;
                    item[0].Tipo_Descricao = this.cboTipo.GetText();
                    this.grdIG.Limpar();
                    this.grdIG.AtualizarGrid();
                    this.RefreshAngular();
                    e.cancelar = true;
                }
            }
            else {
                if (this.Ig.Tipo == 0) {
                    var retorno = this.Informacoes.filter(function (q) { return q.Codigo_Especie == _this.Ig.Codigo_Especie && q.Id != _this.Ig.Id; });
                    if (retorno && retorno.length > 0) {
                        MostrarAlerta("IG já cadastrada para a espécie e tipo!");
                        e.cancelar = true;
                        return;
                    }
                }
                else {
                    var retorno = this.Informacoes.filter(function (q) { return q.Codigo_Especie == _this.Ig.Codigo_Especie && q.Tipo == 0; });
                    if (retorno && retorno.length > 0) {
                        MostrarAlerta("IG já cadastrada para todos os tipos dessa espécie!");
                        e.cancelar = true;
                        return;
                    }
                }
                var newitem = this.Informacoes.filter(function (q) { return q.Codigo_Especie == _this.Ig.Codigo_Especie && q.Tipo == _this.Ig.Tipo; });
                if (newitem && newitem.length > 0) {
                    newitem[0].Ig = novoItem.Ig;
                    this.grdIG.Limpar();
                    this.grdIG.AtualizarGrid();
                    this.RefreshAngular();
                    e.cancelar = true;
                }
            }
        }
    };
    C_Servi.prototype.OnAdicionouItemIG = function (s, e) {
        var item = e.item;
        item.Nome_Especie = this.cboEspecieIG.GetText();
        item.Tipo_Descricao = this.cboTipo.GetText();
        e.item = item;
    };
    C_Servi.prototype.PreencherEntidadePrecos = function (entidade) {
        var precos = this.Precos.filter(function (q) { return q.Valor_Produto_Preco > 0 || q.Quantidade_Minima_Produto_Preco > 0; });
        entidade.Precos = [];
        precos.forEach(function (item) {
            var preco = {};
            preco.Codigo = item.Codigo_Produto_Preco;
            preco.Comissao = item.Comissao_Produto_Preco;
            preco.Data_Carga = new Date();
            preco.Lista_Preco = item.Codigo_Lista;
            preco.Margem = item.Margem_Produto_Preco;
            preco.Produto = item.Produto;
            preco.Qtde_Minima = item.Quantidade_Minima_Produto_Preco;
            preco.Valor = item.Valor_Produto_Preco;
            entidade.Precos.push(preco);
        });
    };
    C_Servi.prototype.PreencherEntidadeRacas = function (entidade) {
        var Itens = this.Racas;
        entidade.Racas = [];
        Itens.forEach(function (item) {
            var raca = {};
            raca.Id = item.Id;
            raca.Raca = item.Raca;
            raca.Servico = item.Servico;
            entidade.Racas.push(raca);
        });
    };
    C_Servi.prototype.PreencherEntidadeIG = function (entidade) {
        var Itens = this.Informacoes;
        entidade.Ig = [];
        Itens.forEach(function (item) {
            var ig = {};
            ig.Id = item.Id;
            ig.Codigo_Especie = item.Codigo_Especie;
            ig.Codigo_Servico = item.Codigo_Servico;
            ig.Ig = item.Ig;
            ig.Tipo = item.Tipo;
            entidade.Ig.push(ig);
        });
    };
    C_Servi.prototype.PreencherEntidadeImpostos = function (entidade) {
        var Itens = this.Impostos;
        entidade.Impostos = [];
        Itens.forEach(function (regra) {
            var regraImposto = {};
            regraImposto.Codigo = regra.Codigo;
            regraImposto.Empresa = regra.Codigo_Empresa;
            regraImposto.Tipo_Regra_Imposto = regra.Codigo_Tipo_Regra;
            regraImposto.Pauta_Valor_Money = regra.Pauta_Valor;
            entidade.Impostos.push(regraImposto);
        });
    };
    return C_Servi;
}(MouraPageCadastroAngular));
var c_Servi = new C_Servi();
//# sourceMappingURL=C_Servi.js.map