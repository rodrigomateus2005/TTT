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
var C_RecCar = /** @class */ (function (_super) {
    __extends(C_RecCar, _super);
    function C_RecCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_RecCar.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RecCar.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RecCar.prototype, "cboCartao", {
        get: function () {
            return window['cboCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RecCar.prototype, "txtValor", {
        get: function () {
            return window['txtValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RecCar.prototype, "txtValorFinal", {
        get: function () {
            return window['txtValorFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RecCar.prototype, "hdnValorDescontado", {
        get: function () {
            return $('#hdnValorDescontado')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RecCar.prototype, "hdnJuros", {
        get: function () {
            return $('#hdnJuros')[0];
        },
        enumerable: true,
        configurable: true
    });
    C_RecCar.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.DepoisPesquisar, this.OnDepoisPesquisar, this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.onGridSelecionouLinha, this);
        }
        if (this.txtValor) {
            adicionarEventoMoura(this.txtValor.TextChanged, this.OnTextBoxValorChange, this);
        }
        if (this.txtValorFinal) {
            adicionarEventoMoura(this.txtValorFinal.TextChanged, this.OnTextBoxValorFinalChange, this);
        }
        if (this.cboCartao) {
            adicionarEventoMoura(this.cboCartao.SelectedItemChanged, this.OnComboBoxCartaoChange, this);
        }
    };
    C_RecCar.prototype.OnExcluiuSucesso = function (s, e) {
    };
    C_RecCar.prototype.OnDepoisPesquisar = function (s, e) {
        this.ValorDescontado();
    };
    C_RecCar.prototype.OnTextBoxValorChange = function () {
        if (this.txtValor && this.txtValorFinal.Textbox) {
            var valor1 = (this.GetScope().Entity.Valor + ((this.GetScope().Entity.Valor / 100) * this.hdnJuros.value.CNum()));
            var valor2 = (valor1 - ((valor1 / 100) * this.hdnValorDescontado.value.CNum())).Format(2).CNum();
            this.GetScope().Entity.Valor_Final = valor2;
            var valor_descontado = ((((this.GetScope().Entity.Valor - this.GetScope().Entity.Valor_Final) * 100) / this.GetScope().Entity.Valor));
            if (this.txtValor.GetText().CNum() > 0 || this.txtValorFinal.GetText().CNum() > 0) {
                this.hdnValorDescontado.value = valor_descontado.Format(2);
            }
            this.GetScope().$applyAsync();
        }
    };
    C_RecCar.prototype.OnComboBoxCartaoChange = function () {
        this.ValorDescontado();
    };
    C_RecCar.prototype.OnTextBoxValorFinalChange = function () {
        if (this.txtValor && this.txtValorFinal.Textbox) {
            var valor_descontado = ((((this.txtValor.GetText().CNum() - this.GetScope().Entity.Valor_Final) * 100) / this.txtValor.GetText().CNum()));
            if (this.GetScope().Entity.Valor > 0 && this.GetScope().Entity.Valor_Final > 0) {
                this.hdnValorDescontado.value = valor_descontado.Format(2);
            }
        }
    };
    C_RecCar.prototype.OnAntesSetEntidade = function (eventArg) {
        _super.prototype.OnAntesSetEntidade.call(this, eventArg);
        var parametro = {};
        this.grid.PreencherGrid(this.ExecutarFuncaoServerSideSynch("PreencherGrade", parametro));
    };
    //protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Cartao_Recebido) {
    //}
    C_RecCar.prototype.onGridSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
        this.ValorDescontado();
    };
    C_RecCar.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entidade = this.GetScope().Entity;
        var parametros = {
            cartao: this.cboCartao.GetValue()
        };
        // var descontado: number = this.ExecutarFuncaoServerSideSynch("GetDescontadoCartao", parametros);
        entidade.Descontado = this.hdnValorDescontado.value.CNum();
        return true;
    };
    C_RecCar.prototype.ValorDescontado = function () {
        var valor;
        var entidade = this.GetScope().Entity;
        var parametros = {
            cartao: (entidade.Cartao == null || entidade.Cartao == undefined) ? this.cboCartao.GetValue() : entidade.Cartao
        };
        var descontado = this.ExecutarFuncaoServerSideSynch("GetDescontadoCartao", parametros);
        entidade.Descontado = descontado;
        this.hdnValorDescontado.value = descontado.Format(2);
        if (!entidade.Juros) {
            entidade.Juros = 0;
        }
        this.hdnJuros.value = entidade.Juros.Format(2);
    };
    return C_RecCar;
}(MouraPageCadastroAngular));
var c_RecCar = new C_RecCar();
//# sourceMappingURL=C_RecCar.js.map