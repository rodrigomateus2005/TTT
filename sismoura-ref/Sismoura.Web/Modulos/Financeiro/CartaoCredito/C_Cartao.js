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
var C_Cartao = /** @class */ (function (_super) {
    __extends(C_Cartao, _super);
    function C_Cartao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Cartao.prototype, "Vinculo", {
        get: function () {
            var that = this.GetScope()["Vinculo"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Vinculo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cartao.prototype, "Vinculos", {
        get: function () {
            return this.GetScope()["Vinculos"];
        },
        set: function (value) {
            this.GetScope()["Vinculos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cartao.prototype, "Parcela", {
        get: function () {
            var that = this.GetScope()["Parcela"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Parcela"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cartao.prototype, "Parcelas", {
        get: function () {
            return this.GetScope()["Parcelas"];
        },
        set: function (value) {
            this.GetScope()["Parcelas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cartao.prototype, "gridParcelas", {
        get: function () {
            return window['gridParcelas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cartao.prototype, "gridVinculoTef", {
        get: function () {
            return window['gridVinculoTef_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cartao.prototype, "gridCadastrados", {
        get: function () {
            return window['gridCadastrados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cartao.prototype, "txtDia", {
        get: function () {
            return window['txtDia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cartao.prototype, "txtDiasMovimentacao", {
        get: function () {
            return window['txtDiasMovimentacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cartao.prototype, "txtDataBaseMovimentacao", {
        get: function () {
            return window['txtDataBaseMovimentacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cartao.prototype, "txtDiasParcela", {
        get: function () {
            return window['txtDiasParcela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cartao.prototype, "txtPorcentagem", {
        get: function () {
            return window['txtPorcentagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cartao.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cartao.prototype, "txtBandeira", {
        get: function () {
            return window['txtBandeira_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cartao.prototype, "txtParcelasTef", {
        get: function () {
            return window['txtParcelasTef_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cartao.prototype, "txtJurosParcela", {
        get: function () {
            return window['txtJurosParcela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Cartao.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.gridCadastrados) {
            adicionarEventoMoura(this.gridCadastrados.SelecionouLinha, this.OnGridSelecionouItem, this);
            //adicionarEventoMoura(this.grdProdutos.ItemAdicionado, this.OnAdiciouItemProduto, this);
            //adicionarEventoMoura(this.grdProdutos.Validando, this.OnValidandoItemProduto, this);
            //adicionarEventoMoura(this.grdProdutos.ItemExcluido, this.OnExcluiuItemProduto, this);
            //adicionarEventoMoura(this.grdProdutos.SelecionouItem, this.OnGrdProdutosSelecionouItem, this);
        }
        if (this.gridParcelas) {
            adicionarEventoMoura(this.gridParcelas.Validando, this.OnValidandoItemParcela, this);
            adicionarEventoMoura(this.gridParcelas.LimpouItem, this.LimparParcela, this);
        }
        if (this.gridVinculoTef) {
            adicionarEventoMoura(this.gridVinculoTef.Validando, this.OnValidandoItemVinculo, this);
            adicionarEventoMoura(this.gridVinculoTef.LimpouItem, this.LimparVinculo, this);
        }
        //if (this.cboContaCorrente) {
        //    adicionarEventoMoura(this.cboContaCorrente.CheckBox.CheckChanged, this.OnContaInativaChange, this);
        //}
    };
    C_Cartao.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().AlterarCamposParcelamento) {
            this.GetScope().AlterarCamposParcelamento = $.proxy(this.AlterarCamposParcelamento, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Tipo_Parcelamento; }, this.GetScope().AlterarCamposParcelamento);
        }
        //this.OnDepoisLimpar(this.EntityTela);
        //this.RefreshAngular();
    };
    C_Cartao.prototype.OnContaInativaChange = function () {
        this.AlterarCamposParcelamento();
    };
    C_Cartao.prototype.OnValidandoItemVinculo = function (s, e) {
        var parametros;
        if (!this.EntityTela.Codigo) {
            this.EntityTela.Codigo = 0;
        }
        if (e.item.Bandeira <= 0) {
            MostrarAlerta("Preencha o campo corretamente: Bandeira do TEF Dedicado");
            this.txtBandeira.Focus();
            e.cancelar = true;
            return;
        }
        if (!e.item.Parcelas || e.item.Parcelas <= 0) {
            MostrarAlerta("Preencha o campo corretamente: Parcelas");
            this.txtParcelasTef.Focus();
            e.cancelar = true;
            return;
        }
        parametros = {
            codigo: this.EntityTela.Codigo,
            codBandeira: e.item.Bandeira,
            parcelas: e.item.Parcelas
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("VerificarVinculo", parametros);
        if (retorno.OutroCartao) {
            MostrarAlerta("Esta Bandeira e Quantidade de parcelas já foram informadas para outro cartão!");
            e.cancelar;
            return;
        }
        if (retorno.JaInformado) {
            MostrarAlerta("Esta Bandeira e Quantidade de parcelas já foram informadas!");
            e.cancelar;
            return;
        }
        if (e.index < 0) {
            e.item.Descricao = this.txtBandeira.GetResultado();
        }
        this.RefreshAngular();
    };
    C_Cartao.prototype.OnValidandoItemParcela = function (s, e) {
        if (e.item.Dias <= 0) {
            MostrarAlerta("Preencha o campo corretamente: Dias");
            this.txtDiasParcela.Focus();
            e.cancelar = true;
            return;
        }
        for (var x = 0; x < this.Parcelas.length; x++) {
            if (this.Parcelas[x].Dias == e.item.Dias) {
                MostrarAlerta("Prazo cadastrado de " + e.item.Dias + " dias, já cadastrado!");
                this.txtDiasParcela.Focus();
                e.cancelar = true;
                return;
            }
        }
        if (e.item.Porcentagem <= 0) {
            MostrarAlerta("Preencha o campo corretamente: Porcentagem");
            this.txtPorcentagem.Focus();
            e.cancelar = true;
            return;
        }
        if (e.item.Porcentagem > 100) {
            MostrarAlerta("O campo Porcentagem deve ser inferior a 100");
            this.txtPorcentagem.Focus();
            e.cancelar = true;
            return;
        }
        if (e.item.Juros > 100) {
            MostrarAlerta("O campo Juros deve ser inferior a 100");
            this.txtJurosParcela.Focus();
            e.cancelar = true;
            return;
        }
        this.RefreshAngular();
    };
    C_Cartao.prototype.AlterarCamposParcelamento = function () {
        this.txtPorcentagem.SetTextLabelControl("* Porcentagem");
        switch (this.EntityTela.Tipo_Parcelamento) {
            case "V": {
                this.txtDia.Visible = false;
                this.txtDiasMovimentacao.Visible = false;
                this.txtDataBaseMovimentacao.Visible = false;
                this.txtDiasParcela.SetTextLabelControl("* Dias");
                break;
            }
            case "F": {
                this.txtDia.Visible = true;
                this.txtDiasMovimentacao.Visible = false;
                this.txtDataBaseMovimentacao.Visible = false;
                this.txtDia.SetTextLabelControl("* Dia");
                this.txtDiasParcela.SetTextLabelControl("* Parcela");
                break;
            }
            case "M": {
                this.txtDia.Visible = false;
                this.txtDiasMovimentacao.Visible = true;
                this.txtDataBaseMovimentacao.Visible = true;
                this.txtDiasMovimentacao.SetTextLabelControl("* Dias de Movimentação");
                this.txtDiasParcela.SetTextLabelControl("* Dias");
                break;
            }
        }
    };
    C_Cartao.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
        this.GetScope().$applyAsync();
    };
    C_Cartao.prototype.GetCadastrados = function () {
        try {
            var parametros;
            parametros = {
                codEmpresa: ValoresSismoura.EmpresaPadraoUsuario
            };
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.gridCadastrados.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Cartao.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        try {
            var parametros;
            this.Parcelas = Entity.Cartao_Dias;
            this.Vinculos = Entity.Cartao_Bandeira_Vinculo;
            //this.EntityTela.Conta_Corrente = Entity.Conta_Corrente;
            this.cboContaCorrente.SetContaCorrente(Entity.Conta_Corrente);
            for (var x = 0; x < this.Vinculos.length; x++) {
                parametros = {
                    codCartao: this.Vinculos[x].Bandeira
                };
                var retornoCartao = this.ExecutarFuncaoServerSideSynch("GetCartaoDescricao", parametros);
                this.Vinculos[x].Descricao = retornoCartao;
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Cartao.prototype.OnDepoisLimpar = function (Entity) {
        this.GetCadastrados();
        Entity.Codigo = 0;
        Entity.Descricao = "";
        Entity.Descontado = 0;
        Entity.Tipo = "C";
        Entity.Tipo_Parcelamento = "V";
        Entity.Dia = 0;
        Entity.Cartao_Especifico = "";
        Entity.Inativo = false;
        Entity.Conta_Contabil = 0;
        Entity.Fornecedor = 0;
        Entity.Dias_Movimentacao = 0;
        Entity.Data_Base_Movimentacao = this.DataServidor();
        Entity.Conta_Corrente = "";
        this.cboContaCorrente.Limpar();
        this.LimparVinculo();
        this.LimparParcela();
        this.Vinculos = [];
        this.Parcelas = [];
        this.RefreshAngular();
    };
    C_Cartao.prototype.LimparVinculo = function () {
        this.Vinculo.Bandeira = 0;
        this.Vinculo.Parcelas = 0;
        this.RefreshAngular();
    };
    C_Cartao.prototype.LimparParcela = function () {
        this.Parcela.Dias = 0;
        this.Parcela.Porcentagem = 0;
        this.Parcela.Juros = 0;
        this.Parcela.Descontado_Parcela = 0;
        this.RefreshAngular();
    };
    C_Cartao.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.GetScope().Entity.Cartao_Dias = this.gridParcelas.Grid.DataSource;
        this.GetScope().Entity.Cartao_Bandeira_Vinculo = this.gridVinculoTef.Grid.DataSource;
        return true;
    };
    return C_Cartao;
}(MouraPageCadastroAngular));
var c_Cartao = new C_Cartao();
//# sourceMappingURL=C_Cartao.js.map