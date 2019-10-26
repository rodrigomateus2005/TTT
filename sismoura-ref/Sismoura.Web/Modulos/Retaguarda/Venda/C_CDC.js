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
var C_CDC = /** @class */ (function (_super) {
    __extends(C_CDC, _super);
    function C_CDC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CDC.prototype, "grdParcela", {
        get: function () {
            return window['grdParcela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CDC.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CDC.prototype, "Parcelas", {
        get: function () {
            return this.GetScope()["Parcelas"];
        },
        set: function (value) {
            this.GetScope()["Parcelas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CDC.prototype, "txtParcela", {
        get: function () {
            return window['txtParcela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CDC.prototype, "txtDiasDebito", {
        get: function () {
            return window['txtDiasDebito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CDC.prototype, "txtDiasCredito", {
        get: function () {
            return window['txtDiasCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CDC.prototype, "txtFator", {
        get: function () {
            return window['txtFator_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CDC.prototype, "txtDescontado", {
        get: function () {
            return window['txtDescontado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CDC.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_CDC.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.grdParcela) {
            adicionarEventoMoura(this.grdParcela.AdicionandoItem, this.OnClickIncluirParcela, this);
        }
        if (this.grdParcela) {
            adicionarEventoMoura(this.grdParcela.LimpouItem, this.OnClickAdicionouParcela, this);
        }
        if (this.grd) {
            adicionarEventoMoura(this.grd.SelecionouLinha, this.onGridSelecionouLinha, this);
        }
    };
    C_CDC.prototype.OnGravouSucesso = function (s, e) {
    };
    C_CDC.prototype.OnExcluiuSucesso = function (s, e) {
    };
    C_CDC.prototype.OnDepoisLimpar = function (Entity) {
        //this.grd.PreencherGrid(null);
        this.grdParcela.Grid.PreencherGrid(null);
        this.txtDiasDebito.SetText("0");
        this.txtDiasCredito.SetText("0");
        this.GetScope()["Parcelas"] = [];
        this.grdParcela.Limpar();
        this.txtFator.Limpar();
    };
    C_CDC.prototype.OnClickIncluirParcela = function (s, e) {
        if (this.txtParcela.GetText().CNum() <= 0) {
            MostrarAlerta("Campo Parcela obrigatório");
            RecebeFoco("txtParcela");
            e.cancelar = true;
        }
        if (this.txtFator.GetText().CNum() <= 0) {
            MostrarAlerta("Campo Fator obrigatório");
            RecebeFoco("txtFator");
            e.cancelar = true;
        }
        if (this.txtFator.GetText().CNum() > 10000) {
            MostrarAlerta("O fator não pode ser maior que 10.000 mil");
            RecebeFoco("txtFator");
            e.cancelar = true;
        }
        e.item.Id = 0;
        var entidade = this.GetScope().Entity;
        if (this.Parcelas.length > 0) {
            var values = [];
            if (this.Parcelas.length != 0) {
                for (var x = 0; x < this.Parcelas.length; x++) {
                    values[x] = this.Parcelas[x].Id;
                }
            }
            var id = Math.max.apply(Math, values);
            if (e.item.Id == 0) {
                e.item.Id = id + 1;
            }
        }
        else {
            var parametros = {
                codigo: this.txtCodigo.GetText().CNum()
            };
            var id = this.ExecutarFuncaoServerSideSynch("GetByMaxIdParcela", parametros);
            if (id == null) {
                id = 1;
                e.item.Id = id;
            }
            else {
                e.item.Id = id.CNum() + 1;
            }
        }
    };
    C_CDC.prototype.OnClickAdicionouParcela = function (s, e) {
        this.AlterarCampoParcela(e.item);
    };
    C_CDC.prototype.OnAntesSetEntidade = function (eventArg) {
        _super.prototype.OnAntesSetEntidade.call(this, eventArg);
        var parametro = {};
        this.grd.PreencherGrid(this.ExecutarFuncaoServerSideSynch("PreencherGrade", parametro));
    };
    C_CDC.prototype.onGridSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
    };
    C_CDC.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        var parametros = {
            codCdc: Entidade.Codigo
        };
        var parcelas = this.ExecutarFuncaoServerSideSynch("PreencherGradeParcela", parametros);
        this.Parcelas = parcelas;
    };
    C_CDC.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entidade = this.GetScope().Entity;
        this.PreencherParcelas(entidade);
        return true;
    };
    C_CDC.prototype.PreencherParcelas = function (entidade) {
        var parcelas = this.Parcelas;
        var parcelasExistentes = entidade.Cdc_Dias;
        entidade.Cdc_Dias = [];
        for (var x = 0; x < parcelas.length; x++) {
            var novaParcela = {};
            var parcelasGrid = void 0;
            if (!parcelasExistentes)
                parcelasExistentes = [];
            for (var y = 0; y < parcelasExistentes.length; y++) {
                if (parcelasExistentes[y].Id == parcelas[x].Id) {
                    novaParcela = parcelasExistentes[y];
                    y = parcelasExistentes.length;
                }
            }
            parcelasGrid = parcelas[x];
            novaParcela.Dias = parcelasGrid.Dias;
            novaParcela.Fator = parcelasGrid.Fator;
            entidade.Cdc_Dias.push(novaParcela);
        }
    };
    C_CDC.prototype.AlterarCampoParcela = function (entidade) {
        if (this.txtParcela) {
            var parcelasExistentes = this.GetScope()["Parcelas"];
            var parcela = 0;
            var maior = 0;
            if (parcelasExistentes) {
                for (var x = 0; x < parcelasExistentes.length; x++) {
                    if (parcelasExistentes[x].Dias > maior) {
                        maior = parcelasExistentes[x].Dias;
                    }
                }
                parcela = maior + 1;
            }
            entidade.Dias = parcela;
            this.GetScope().$applyAsync();
        }
    };
    return C_CDC;
}(MouraPageCadastroAngular));
var c_CDC = new C_CDC();
//# sourceMappingURL=C_CDC.js.map