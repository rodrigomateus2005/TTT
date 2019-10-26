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
var MouraGridViewJSEditavelItemEventArgs = /** @class */ (function (_super) {
    __extends(MouraGridViewJSEditavelItemEventArgs, _super);
    function MouraGridViewJSEditavelItemEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraGridViewJSEditavelItemEventArgs;
}(MouraEventArgs));
var MouraGridViewJSEditavelItemCancelavelEventArgs = /** @class */ (function (_super) {
    __extends(MouraGridViewJSEditavelItemCancelavelEventArgs, _super);
    function MouraGridViewJSEditavelItemCancelavelEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraGridViewJSEditavelItemCancelavelEventArgs;
}(MouraEventArgs));
var MouraGridViewJSEditavelItemValidandoEventArgs = /** @class */ (function (_super) {
    __extends(MouraGridViewJSEditavelItemValidandoEventArgs, _super);
    function MouraGridViewJSEditavelItemValidandoEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraGridViewJSEditavelItemValidandoEventArgs;
}(MouraGridViewJSEditavelItemCancelavelEventArgs));
var RetornoExtendidoAdicionarAlterar = /** @class */ (function () {
    function RetornoExtendidoAdicionarAlterar() {
    }
    return RetornoExtendidoAdicionarAlterar;
}());
var MouraGridViewJSEditavel = /** @class */ (function (_super) {
    __extends(MouraGridViewJSEditavel, _super);
    function MouraGridViewJSEditavel(id) {
        var _this = _super.call(this, id) || this;
        if (!_this.SetandoItem)
            _this.SetandoItem = new MouraGenericEventHandler();
        if (!_this.SetouItem)
            _this.SetouItem = new MouraGenericEventHandler();
        if (!_this.SelecionandoItem)
            _this.SelecionandoItem = new MouraGenericEventHandler();
        if (!_this.SelecionouItem)
            _this.SelecionouItem = new MouraGenericEventHandler();
        if (!_this.LimpandoItem)
            _this.LimpandoItem = new MouraGenericEventHandler();
        if (!_this.LimpouItem)
            _this.LimpouItem = new MouraGenericEventHandler();
        if (!_this.AdicionandoItem)
            _this.AdicionandoItem = new MouraGenericEventHandler();
        if (!_this.ItemAdicionado)
            _this.ItemAdicionado = new MouraGenericEventHandler();
        if (!_this.AlterandoItem)
            _this.AlterandoItem = new MouraGenericEventHandler();
        if (!_this.ItemAlterado)
            _this.ItemAlterado = new MouraGenericEventHandler();
        if (!_this.ExcluindoItem)
            _this.ExcluindoItem = new MouraGenericEventHandler();
        if (!_this.ItemExcluido)
            _this.ItemExcluido = new MouraGenericEventHandler();
        if (!_this.Validando)
            _this.Validando = new MouraGenericEventHandler();
        if (!_this.ClicouAdicionar)
            _this.ClicouAdicionar = new MouraGenericEventHandler();
        var instancia = _this;
        angular.element(document).ready(function () {
            instancia.Limpar();
        });
        return _this;
    }
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "SetandoItem", {
        get: function () {
            return window[this.ID + '_SetandoItem'];
        },
        set: function (value) {
            window[this.ID + '_SetandoItem'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "SetouItem", {
        get: function () {
            return window[this.ID + '_SetouItem'];
        },
        set: function (value) {
            window[this.ID + '_SetouItem'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "SelecionandoItem", {
        get: function () {
            return window[this.ID + '_SelecionandoItem'];
        },
        set: function (value) {
            window[this.ID + '_SelecionandoItem'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "SelecionouItem", {
        get: function () {
            return window[this.ID + '_SelecionouItem'];
        },
        set: function (value) {
            window[this.ID + '_SelecionouItem'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "LimpandoItem", {
        get: function () {
            return window[this.ID + '_LimpandoItem'];
        },
        set: function (value) {
            window[this.ID + '_LimpandoItem'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "LimpouItem", {
        get: function () {
            return window[this.ID + '_LimpouItem'];
        },
        set: function (value) {
            window[this.ID + '_LimpouItem'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "AdicionandoItem", {
        get: function () {
            return window[this.ID + '_AdicionandoItem'];
        },
        set: function (value) {
            window[this.ID + '_AdicionandoItem'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "ItemAdicionado", {
        get: function () {
            return window[this.ID + '_ItemAdicionado'];
        },
        set: function (value) {
            window[this.ID + '_ItemAdicionado'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "AlterandoItem", {
        get: function () {
            return window[this.ID + '_AlterandoItem'];
        },
        set: function (value) {
            window[this.ID + '_AlterandoItem'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "ItemAlterado", {
        get: function () {
            return window[this.ID + '_ItemAlterado'];
        },
        set: function (value) {
            window[this.ID + '_ItemAlterado'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "ExcluindoItem", {
        get: function () {
            return window[this.ID + '_ExcluindoItem'];
        },
        set: function (value) {
            window[this.ID + '_ExcluindoItem'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "ItemExcluido", {
        get: function () {
            return window[this.ID + '_ItemExcluido'];
        },
        set: function (value) {
            window[this.ID + '_ItemExcluido'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "Validando", {
        get: function () {
            return window[this.ID + '_Validando'];
        },
        set: function (value) {
            window[this.ID + '_Validando'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "ClicouAdicionar", {
        get: function () {
            return window[this.ID + '_ClicouAdicionar'];
        },
        set: function (value) {
            window[this.ID + '_ClicouAdicionar'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "btnAdiconar", {
        get: function () {
            return window[this.ID + "_btnAdiconar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "btnNovo", {
        get: function () {
            return window[this.ID + "_btnNovo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "Grid", {
        get: function () {
            return window[this.ID + "_Grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "pnGeral", {
        get: function () {
            return $("#" + this.ID + "_pnGeral")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "Scope", {
        get: function () {
            return angular.element(this.pnGeral).scope();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "NgItem", {
        get: function () {
            return this._ngItem;
        },
        set: function (value) {
            this._ngItem = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "NgItens", {
        get: function () {
            return this._ngItens;
        },
        set: function (value) {
            this._ngItens = value;
            this.AtualizarGrid();
            if (this.Scope) {
                this.Scope.$watch(value, $.proxy(this.AtualizarGrid, this));
                this.Scope.$watchCollection(value, $.proxy(this.AtualizarGrid, this));
            }
            else {
                angular.element(document).ready($.proxy(function () {
                    if (this.Scope) {
                        this.Scope.$watch(value, $.proxy(this.AtualizarGrid, this));
                        this.Scope.$watchCollection(value, $.proxy(this.AtualizarGrid, this));
                    }
                }, this));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "IndexSelecionado", {
        get: function () {
            return this._indexSelecionado;
        },
        set: function (value) {
            this._indexSelecionado = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "Item", {
        get: function () {
            return this.Scope[this._ngItem];
        },
        set: function (value) {
            if (this.Scope) {
                this.Scope[this._ngItem] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "Visible", {
        get: function () {
            return $(this.pnGeral).is(":visible");
        },
        set: function (visible) {
            (visible) ? $(this.pnGeral).show() : $(this.pnGeral).hide();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJSEditavel.prototype, "Itens", {
        get: function () {
            if (!this.Scope)
                return null;
            if (!this.Scope[this._ngItens]) {
                this.Scope[this._ngItens] = [];
            }
            if (!Array.isArray(this.Scope[this._ngItens])) {
                this.Scope[this._ngItens] = [];
            }
            return this.Scope[this._ngItens];
        },
        set: function (value) {
            this.Scope[this._ngItens] = value;
        },
        enumerable: true,
        configurable: true
    });
    MouraGridViewJSEditavel.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.btnAdiconar) {
            this.btnAdiconar.IdGridEditavel = this.ID;
            adicionarEventoMoura(this.btnAdiconar.Click, this.OnAdicionarClick, this);
        }
        if (this.btnNovo) {
            adicionarEventoMoura(this.btnNovo.Click, this.OnNovoClick, this);
        }
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnSelecionouLinha, this);
            adicionarEventoMoura(this.Grid.ExcluindoLinhaGrade, this.OnExcluindoItem, this);
            adicionarEventoMoura(this.Grid.ExcluiuLinhaGrade, this.OnExcluiuItem, this);
            adicionarEventoMoura(this.Grid.RowValidating, this.OnGridRowValidating, this);
            //adicionarEventoDevExtreme(this.Grid.Grid, "rowValidating", this.OnGridRowValidating, this);
            this.AtualizarGrid();
        }
    };
    MouraGridViewJSEditavel.prototype.OnGridRowValidating = function (s, e) {
        var entidadeVerificar;
        var indexEntidade;
        try {
            if (!String.IsNullOrWhiteSpace(this.Grid.CampoID) && e.oldData[this.Grid.CampoID] != null && e.oldData[this.Grid.CampoID] != undefined) {
                var encontrou = false;
                for (var x = 0; x <= this.Itens.length - 1; x++) {
                    if (this.Itens[x][this.Grid.CampoID] == e.oldData[this.Grid.CampoID]) {
                        indexEntidade = x;
                        encontrou = true;
                        break;
                    }
                }
                if (!encontrou) {
                    indexEntidade = this.Itens.indexOf(e.oldData);
                }
            }
            else {
                indexEntidade = this.Itens.indexOf(e.oldData);
            }
        }
        catch (ex) {
            indexEntidade = this.Itens.indexOf(e.oldData);
        }
        entidadeVerificar = cloneObject(e.oldData);
        if (entidadeVerificar) {
            for (var prop in e.newData) {
                entidadeVerificar[prop] = e.newData[prop];
            }
            var retornoEXT = new RetornoExtendidoAdicionarAlterar();
            e.isValid = this.AdicionarOuAlterarItemAtualInterno(entidadeVerificar, indexEntidade, retornoEXT, true, e.newData, e.oldData);
            e.errorText = retornoEXT.errorText;
        }
    };
    MouraGridViewJSEditavel.prototype.AtualizarGrid = function () {
        if (this.Grid) {
            this.Grid.PreencherGrid(this.Itens);
        }
    };
    MouraGridViewJSEditavel.prototype.OnAdicionarClick = function (s, e) {
        e.processOnServer = false;
        if (e.cancelEventAndBubble)
            return;
        var args = {};
        args.cancelar = false;
        this.ClicouAdicionar.FireEvent(this, args);
        if (!args.cancelar) {
            this.AdicionarOuAlterarItemAtual();
        }
    };
    MouraGridViewJSEditavel.prototype.OnNovoClick = function (s, e) {
        e.processOnServer = false;
        this.Limpar();
    };
    MouraGridViewJSEditavel.prototype.AdicionarOuAlterarItemAtual = function () {
        var retornoEXT = new RetornoExtendidoAdicionarAlterar();
        this.AdicionarOuAlterarItemAtualInterno(this.Item, this.IndexSelecionado, retornoEXT, false, null, this.Item);
    };
    MouraGridViewJSEditavel.prototype.AdicionarOuAlterarItemAtualInterno = function (item, index, retornoExtendido, isRowEditing, newValue, oldData) {
        var fieldNameAlterado = "", valorPropriedade = null;
        if (newValue) {
            for (var prop in newValue) {
                fieldNameAlterado = prop;
                valorPropriedade = newValue[prop];
                break;
            }
        }
        var retorno = true;
        var evtValidando = new MouraGridViewJSEditavelItemValidandoEventArgs();
        evtValidando.item = item;
        evtValidando.cancelar = false;
        evtValidando.index = index;
        evtValidando.errorText = "";
        evtValidando.fieldNameAlterado = fieldNameAlterado;
        evtValidando.valorAlterado = valorPropriedade;
        evtValidando.oldRowValue = oldData;
        retornoExtendido.errorText = "";
        this.Validando.FireEvent(this, evtValidando);
        item = evtValidando.item;
        retornoExtendido.errorText = evtValidando.errorText;
        if (!evtValidando.cancelar) {
            if (index >= 0) {
                var evtAlterando = new MouraGridViewJSEditavelItemValidandoEventArgs();
                evtAlterando.item = item;
                evtAlterando.cancelar = false;
                evtAlterando.index = index;
                evtAlterando.errorText = "";
                evtAlterando.fieldNameAlterado = fieldNameAlterado;
                evtAlterando.valorAlterado = valorPropriedade;
                evtAlterando.oldRowValue = oldData;
                this.AlterandoItem.FireEvent(this, evtAlterando);
                item = evtAlterando.item;
                retornoExtendido.errorText = evtAlterando.errorText;
                if (!evtAlterando.cancelar) {
                    this.Itens[index] = item;
                    var evtAlterado = new MouraGridViewJSEditavelItemEventArgs();
                    evtAlterado.item = item;
                    evtAlterado.index = index;
                    this.Itens[index] = evtAlterado.item;
                    this.ItemAlterado.FireEvent(this, evtAlterado);
                    if (!ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
                        if (newValue) {
                            if (newValue[fieldNameAlterado]) {
                                newValue[fieldNameAlterado] = item[fieldNameAlterado];
                            }
                        }
                    }
                    this.Limpar();
                }
                else {
                    retorno = false;
                }
            }
            else {
                var evtAdicionando = new MouraGridViewJSEditavelItemValidandoEventArgs();
                evtAdicionando.item = item;
                evtAdicionando.cancelar = false;
                evtAdicionando.index = index;
                evtAdicionando.errorText = "";
                evtAdicionando.fieldNameAlterado = fieldNameAlterado;
                evtAdicionando.valorAlterado = valorPropriedade;
                evtAdicionando.oldRowValue = oldData;
                this.AdicionandoItem.FireEvent(this, evtAdicionando);
                item = evtAdicionando.item;
                retornoExtendido.errorText = evtAdicionando.errorText;
                if (!evtAdicionando.cancelar) {
                    this.Itens.push(item);
                    var evtAdicionado = new MouraGridViewJSEditavelItemEventArgs();
                    evtAdicionado.item = item;
                    evtAdicionado.index = index;
                    this.ItemAdicionado.FireEvent(this, evtAdicionado);
                    if (!ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
                        if (newValue) {
                            if (newValue[fieldNameAlterado]) {
                                newValue[fieldNameAlterado] = item[fieldNameAlterado];
                            }
                        }
                    }
                    this.Limpar();
                }
                else {
                    retorno = false;
                }
            }
            this.AtualizarGrid();
        }
        else {
            retorno = false;
        }
        if (!isRowEditing && retorno == false && !String.IsNullOrWhiteSpace(retornoExtendido.errorText)) {
            MostrarAlerta(retornoExtendido.errorText);
        }
        return retorno;
    };
    MouraGridViewJSEditavel.prototype.OnSelecionouLinha = function (s, e) {
        var indexRow = e.rowIndex;
        try {
            indexRow = this.Grid.DataSource.indexOf(e.data);
        }
        catch (e) { }
        this.Selecionar(indexRow);
    };
    MouraGridViewJSEditavel.prototype.OnExcluindoItem = function (s, e) {
        var evtExcluindo = new MouraGridViewJSEditavelItemCancelavelEventArgs();
        evtExcluindo.cancelar = false;
        evtExcluindo.index = e.index;
        evtExcluindo.item = e.item;
        this.ExcluindoItem.FireEvent(this, evtExcluindo);
        e.cancelar = evtExcluindo.cancelar;
    };
    MouraGridViewJSEditavel.prototype.OnExcluiuItem = function (s, e) {
        var evtExclui = new MouraGridViewJSEditavelItemEventArgs();
        evtExclui.index = e.index;
        evtExclui.item = e.item;
        if (e.index == this.IndexSelecionado) {
            this.Limpar();
        }
        this.Scope.$applyAsync();
        this.ItemExcluido.FireEvent(this, evtExclui);
    };
    MouraGridViewJSEditavel.prototype.Excluir = function (index) {
        this.Grid.Excluir(index, false);
    };
    MouraGridViewJSEditavel.prototype.Selecionar = function (index) {
        if (index < 0 || index >= this.Itens.length) {
            return;
        }
        var item = this.Itens[index];
        item = cloneObject(item);
        var evtSelecionando = new MouraGridViewJSEditavelItemCancelavelEventArgs();
        evtSelecionando.item = item;
        evtSelecionando.cancelar = false;
        evtSelecionando.index = this.IndexSelecionado;
        this.SelecionandoItem.FireEvent(this, evtSelecionando);
        if (!evtSelecionando.cancelar) {
            this.SetItem(item);
            var evtSelecionado = new MouraGridViewJSEditavelItemEventArgs();
            evtSelecionado.item = item;
            evtSelecionado.index = this.IndexSelecionado;
            this.SelecionouItem.FireEvent(this, evtSelecionado);
            this.IndexSelecionado = index;
            this.Scope.$applyAsync();
        }
    };
    MouraGridViewJSEditavel.prototype.Limpar = function () {
        var item = {};
        var evtLimpando = new MouraGridViewJSEditavelItemCancelavelEventArgs();
        evtLimpando.item = item;
        evtLimpando.cancelar = false;
        evtLimpando.index = this.IndexSelecionado;
        this.LimpandoItem.FireEvent(this, evtLimpando);
        if (!evtLimpando.cancelar) {
            this.SetItem(item);
            var evtLimpou = new MouraGridViewJSEditavelItemEventArgs();
            evtLimpou.item = item;
            evtLimpou.index = this.IndexSelecionado;
            this.LimpouItem.FireEvent(this, evtLimpou);
            this.IndexSelecionado = -1;
            if (this.Scope) {
                this.Scope.$applyAsync();
            }
        }
    };
    MouraGridViewJSEditavel.prototype.SetItem = function (item) {
        var evtSetando = new MouraGridViewJSEditavelItemCancelavelEventArgs();
        evtSetando.item = item;
        evtSetando.cancelar = false;
        evtSetando.index = this.IndexSelecionado;
        this.SetandoItem.FireEvent(this, evtSetando);
        if (!evtSetando.cancelar) {
            this.Item = item;
            var evtSetou = new MouraGridViewJSEditavelItemEventArgs();
            evtSetou.item = item;
            evtSetou.index = this.IndexSelecionado;
            if (this.Scope) {
                this.Scope.$applyAsync();
            }
            this.SetouItem.FireEvent(this, evtSetou);
        }
    };
    return MouraGridViewJSEditavel;
}(MouraControl));
//# sourceMappingURL=MouraGridViewJSEditavel.js.map