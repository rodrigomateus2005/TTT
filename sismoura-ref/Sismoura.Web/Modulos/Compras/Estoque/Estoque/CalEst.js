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
var CalEst = /** @class */ (function (_super) {
    __extends(CalEst, _super);
    function CalEst() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CalEst.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalEst.prototype, "txtPeriodo", {
        get: function () {
            return window["txtPeriodo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalEst.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalEst.prototype, "cboDeposito", {
        get: function () {
            return window['cboDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalEst.prototype, "cboParametro", {
        get: function () {
            return window['cboParametro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalEst.prototype, "chkConsiderarSaidas", {
        get: function () {
            return window["chkConsiderarSaidas_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalEst.prototype, "chkConsiderarDevolucoes", {
        get: function () {
            return window["chkConsiderarDevolucoes_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalEst.prototype, "chkUtilizarMediaCalculo", {
        get: function () {
            return window["chkUtilizarMediaCalculo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalEst.prototype, "txtPercentualSeguranca", {
        get: function () {
            return window["txtPercentualSeguranca_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalEst.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalEst.prototype, "txtMarca", {
        get: function () {
            return window["txtMarca_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalEst.prototype, "txtSubgrupo", {
        get: function () {
            return window["txtSubgrupo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalEst.prototype, "txtGrupo", {
        get: function () {
            return window["txtGrupo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalEst.prototype, "txtPeriodoMes", {
        get: function () {
            return window["txtPeriodoMes_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalEst.prototype, "txtNomeProduto", {
        get: function () {
            return window["txtNomeProduto_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalEst.prototype, "btnAtualizar", {
        get: function () {
            return window["btnAtualizar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalEst.prototype, "accFiltro", {
        get: function () {
            return window["accFiltro_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalEst.prototype, "accCadastro", {
        get: function () {
            return window["accCadastro_Object"];
        },
        enumerable: true,
        configurable: true
    });
    CalEst.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnComboBoxEmpresaChange, this);
        }
        if (this.cboParametro) {
            adicionarEventoMoura(this.cboParametro.SelectedItemChanged, this.OnComboBoxParametroChange, this);
        }
        if (this.btnAtualizar) {
            adicionarEventoMoura(this.btnAtualizar.Click, this.AtualizarProdutos, this);
        }
        if (this.isLoad) {
            this.LimparCampos();
        }
        this.OnComboBoxEmpresaChange();
        this.LimparCampos();
    };
    CalEst.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    CalEst.prototype.OnComboBoxEmpresaChange = function () {
        this.AlteraDeposito();
    };
    CalEst.prototype.AlteraDeposito = function () {
        var parametros;
        parametros = {
            codEmpresa: this.cboEmpresa.GetValue()
        };
        var itens;
        itens = this.ExecutarFuncaoServerSideSynch("PreencherComboDeposito", parametros);
        if (this.cboDeposito && this.cboDeposito.Combo) {
            this.cboDeposito.ClearItems();
            for (var x = 0; x < itens.length; x++) {
                this.cboDeposito.Combo.AddItem(itens[x].Descricao, itens[x].Codigo, "");
            }
            if (this.cboDeposito.Combo.GetItemCount() == 1) {
                this.cboDeposito.Combo.SetSelectedIndex(0);
            }
        }
    };
    CalEst.prototype.OnComboBoxParametroChange = function () {
        this.AlterarColunasGrade();
        if (this.cboParametro.GetValue() == null || this.cboParametro.GetValue() == undefined) {
            this.cboParametro.SetValue("M");
        }
        if (this.cboParametro.GetValue() == "M") {
            this.txtPeriodoMes.Visible = true;
            this.txtPeriodo.Visible = false;
        }
        else {
            this.txtPeriodoMes.Visible = false;
            this.txtPeriodo.Visible = true;
        }
    };
    CalEst.prototype.AlterarColunasGrade = function () {
        if (this.cboParametro) {
            if (this.cboParametro.GetValue() == "M") {
                this.grid.ColunaVisible("Est_Max_Dia", false);
                this.grid.ColunaVisible("Est_Min_Dia", false);
            }
            else if (this.cboParametro.GetValue() == "D") {
                this.grid.ColunaVisible("Est_Max_Dia", true);
                this.grid.ColunaVisible("Est_Min_Dia", true);
            }
        }
    };
    CalEst.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.cboParametro.SetValue("M");
        this.txtPeriodoMes.Date = new Date;
        this.txtPercentualSeguranca.Limpar;
        this.txtPeriodo.Iniciar();
        this.txtGrupo.Limpar();
        this.txtMarca.Limpar();
        this.txtSubgrupo.Limpar();
        this.txtNomeProduto.Limpar();
        this.txtPeriodoMes.Visible = true;
        this.txtPeriodo.Visible = false;
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        if (!this.isLoad) {
            this.OnComboBoxEmpresaChange();
        }
        this.chkConsiderarDevolucoes.Check.checked = false;
        this.chkConsiderarSaidas.Check.checked = false;
        this.chkUtilizarMediaCalculo.Check.checked = false;
        this.grid.PreencherGrid(null);
    };
    CalEst.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        var produtos;
        if (this.cboEmpresa) {
            if (this.cboEmpresa.GetValue() == null) {
                MostrarAlerta("Preencha o campo corretamente: Empresa");
                return;
            }
        }
        if (this.txtPeriodo) {
            if (this.txtPeriodo.textBoxCalendarioInicio.GetDate() == null || this.txtPeriodo.textBoxCalendarioFim.GetDate() == null) {
                MostrarAlerta("Preencha o campo corretamente: Meses para Média");
                return;
            }
        }
        if (this.cboParametro.GetValue() === 'M') {
            if (this.txtPeriodoMes.GetDate() == null) {
                MostrarAlerta("Preencha o campo corretamente: Meses para Média");
                return;
            }
        }
        if (this.cboParametro) {
            if (this.cboParametro.GetValue() == null) {
                MostrarAlerta("Preencha o campo corretamente: Parâmetro para Cálculo");
                return;
            }
        }
        if (this.txtPercentualSeguranca) {
            if (this.txtPercentualSeguranca.GetText().CNum() > 100) {
                MostrarAlerta("O campo Percentual de Segurança para Estoque Máximo deve ser menor ou igual a 100");
                return;
            }
        }
        if (this.txtPercentualSeguranca) {
            if (this.txtPercentualSeguranca.GetText().CNum() <= 0) {
                MostrarAlerta("Preencha o campo corretamente: Percentual de Segurança");
                return;
            }
        }
        var codDeposito;
        codDeposito = this.cboDeposito.GetValue();
        if (codDeposito == null || codDeposito == undefined) {
            codDeposito = 0;
        }
        var parametroCalculo;
        parametroCalculo = this.cboParametro.GetValue();
        if (parametroCalculo == null || parametroCalculo == undefined) {
            parametroCalculo = "M";
        }
        var dataInicial;
        var dataFinal;
        if (parametroCalculo == "M") {
            dataInicial = this.txtPeriodoMes.GetDate();
            dataFinal = this.txtPeriodoMes.GetDate();
        }
        else {
            dataInicial = this.txtPeriodo.textBoxCalendarioInicio.GetDate();
            dataFinal = this.txtPeriodo.textBoxCalendarioFim.GetDate();
        }
        parametros = {
            empresa: this.cboEmpresa.GetValue(),
            deposito: codDeposito,
            considerarOutrasSaidas: this.chkConsiderarSaidas.Check.checked,
            considerarDevolucoes: this.chkConsiderarDevolucoes.Check.checked,
            utilizarMedia: this.chkUtilizarMediaCalculo.Check.checked,
            dataInicial: dataInicial,
            dataFinal: dataFinal,
            grupo: this.txtGrupo.GetText().CNum(),
            subgrupo: this.txtSubgrupo.GetText().CNum(),
            marca: this.txtMarca.GetText().CNum(),
            nomeProduto: this.txtNomeProduto.GetText(),
            parametroCalculo: parametroCalculo,
            percentualSeguranca: this.txtPercentualSeguranca.GetText().CNum()
        };
        produtos = this.ExecutarFuncaoServerSideSynch("GetCalculaEstoqueMinimoMaximo", parametros);
        this.grid.PreencherGrid(produtos);
        if (this.accCadastro) {
            this.accCadastro.SetExpanded(false);
        }
        if (this.accFiltro) {
            this.accFiltro.SetExpanded(false);
        }
    };
    CalEst.prototype.AtualizarProdutos = function (s, e) {
        e.processOnServer = false;
        try {
            var selecionados = this.grid.GetSelectedRowsData;
            if (selecionados.length == 0 || selecionados == null) {
                MostrarAlerta("Selecione ao menos um item da grade para atualizar");
                return;
            }
            var parametros;
            var retorno;
            parametros = {
                selecionados: selecionados,
                empresa: this.cboEmpresa.GetValue(),
                tela: ValoresSismoura.NomeTela,
                usuario: ValoresSismoura.UsuarioLogado,
                estoque_minimo_dia: this.txtPeriodo.textBoxDiferenca.GetText().CNum(),
                estoque_maximo_dia: this.txtPeriodo.textBoxDiferenca.GetText().CNum()
            };
            retorno = this.ExecutarFuncaoServerSideSynch("Atualizar", parametros);
            if (retorno) {
                MostrarMensagem("Atualizado com sucesso");
            }
            this.LimparCampos();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return CalEst;
}(MouraPageRelacaoAngular));
var calEst = new CalEst();
//# sourceMappingURL=CalEst.js.map