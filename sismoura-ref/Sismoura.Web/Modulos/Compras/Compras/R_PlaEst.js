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
var R_PlaEst = /** @class */ (function (_super) {
    __extends(R_PlaEst, _super);
    function R_PlaEst() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_PlaEst.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "txtPeriodo", {
        get: function () {
            return window["txtPeriodo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "lblValorTotal", {
        get: function () {
            return window['lblValorTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "txtFornecedorPedido", {
        get: function () {
            return window["txtFornecedorPedido_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "hdnURLPedido", {
        get: function () {
            return $('#hdnURLPedido')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "hdnURLConsultaVenda", {
        get: function () {
            return $('#hdnURLConsultaVenda')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "hdnCodPedido", {
        get: function () {
            return $('#hdnCodPedido')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "txtProduto", {
        get: function () {
            return window["txtProduto_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "MouraTabPanel1", {
        get: function () {
            return window['MouraTabPanel1_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "cboConsidererProdutos", {
        //get chkComEstoqueMinimo(): MouraCheckBox {
        //    return window["chkComEstoqueMinimo_Object"];
        //}
        //get chkComEstoqueMaximo(): MouraCheckBox {
        //    return window["chkComEstoqueMaximo_Object"];
        //}
        //get chkProdutosNaoVendidos(): MouraCheckBox {
        //    return window["chkProdutosNaoVendidos_Object"];
        //}
        get: function () {
            return window['cboConsidererProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "chkConsiderarEstoqueMinimo", {
        get: function () {
            return window["chkConsiderarEstoqueMinimo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "chkPreencherProdutoSugestaoCompra", {
        get: function () {
            return window["chkPreencherProdutoSugestaoCompra_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "chkConsiderarEstoqueMaximo", {
        get: function () {
            return window["chkConsiderarEstoqueMaximo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "chkNaoCalcularSeguranca", {
        get: function () {
            return window["chkNaoCalcularSeguranca_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "chkProdutoFarmaciaPopular", {
        get: function () {
            return window["chkProdutoFarmaciaPopular_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "chkApenasMaiorZero", {
        get: function () {
            return window["chkApenasMaiorZero_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "txtGrupoLista", {
        //get lstGrupo(): MouraCheckBoxList {
        //    return window["lstGrupo_Object"];
        //}
        get: function () {
            return window['txtGrupoLista_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "txtSubGrupoLista", {
        //get lstSubGrupo(): MouraCheckBoxList {
        //    return window["lstSubGrupo_Object"];
        //}
        get: function () {
            return window['txtSubGrupoLista_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "txtMarca", {
        //get lstMarca(): MouraCheckBoxList {
        //    return window["lstMarca_Object"];
        //}
        get: function () {
            return window['txtMarca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "cboDeposito", {
        get: function () {
            return window['cboDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "lstEmpresa", {
        //
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "lstDeposito", {
        get: function () {
            return window["lstDeposito_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "txtFornecedor", {
        get: function () {
            return window["txtFornecedor_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "txtProjecao", {
        get: function () {
            return window["txtProjecao_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "lblA", {
        get: function () {
            return window["lblA_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "lblB", {
        get: function () {
            return window["lblB_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "lblC", {
        get: function () {
            return window["lblC_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "gridConsolidado", {
        get: function () {
            return window["gridConsolidado_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "cboFormaPagamento", {
        get: function () {
            return window["cboFormaPagamento_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "btnGerarPedido", {
        get: function () {
            return window['btnGerarPedido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "mdDiscriminar", {
        get: function () {
            return window['mdDiscriminar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "grdDiario", {
        get: function () {
            return window["grdDiario_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "grdMensal", {
        get: function () {
            return window["grdMensal_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "accCadastro", {
        get: function () {
            return window["accCadastro_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "txtReferencia", {
        get: function () {
            return window["txtReferencia_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "txtLinha", {
        get: function () {
            return window["txtLinha_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PlaEst.prototype, "txtCor", {
        get: function () {
            return window["txtCor_Object"];
        },
        enumerable: true,
        configurable: true
    });
    R_PlaEst.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.lstEmpresa) {
            adicionarEventoMoura(this.lstEmpresa.SelectionChanged, this.OnComboBoxEmpresaChange, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.EditouItemGrade, this.OnDepoisEditarItem, this);
            adicionarEventoMoura(this.grid.SelecionouLinha, this.DiscriminarVenda, this);
            adicionarEventoMoura(this.grid.ClickBotaoLinha, this.OnClickBotaoLinha, this);
        }
        if (this.gridConsolidado) {
            adicionarEventoMoura(this.gridConsolidado.EditouItemGrade, this.OnDepoisEditarItemConsolidado, this);
            adicionarEventoMoura(this.gridConsolidado.SelecionouLinha, this.DiscriminarVendaConsolidado, this);
            adicionarEventoMoura(this.gridConsolidado.ClickBotaoLinha, this.OnClickBotaoLinhaConsolidado, this);
        }
        if (this.btnGerarPedido) {
            adicionarEventoMoura(this.btnGerarPedido.Click, this.GerarPedido, this);
        }
        if (this.txtFornecedorPedido) {
            adicionarEventoMoura(this.txtFornecedorPedido.Procurou, this.OnPesquisouFornecedorPedido, this);
        }
        if (this.txtFornecedor) {
            adicionarEventoMoura(this.txtFornecedor.Procurou, this.OnPesquisouFornecedor, this);
            if (this.lstEmpresa) {
                this.txtFornecedor.AddParametro("Codigo_Empresa", this.lstEmpresa.GetValues().join(","));
            }
        }
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Procurou, this.OnPesquisouProduto, this);
            adicionarEventoMoura(this.txtProduto.AntesAbrirProcura, this.OnAntesAbrirProcuraProd, this);
            if (this.txtFornecedor) {
                this.txtProduto.AddParametro("Codigo_Fornecedor", this.txtFornecedor.GetText().toString());
            }
        }
        if (this.MouraTabPanel1 && this.MouraTabPanel1.Painel) {
            adicionarEventoMoura(this.MouraTabPanel1.ActiveTabChanged, this.OnTabChange, this);
        }
    };
    R_PlaEst.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.isLoad = true;
        this.LimparCampos();
        this.isLoad = false;
        //
        this.AlteraDeposito();
    };
    R_PlaEst.prototype.validarData = function () {
        var dataInicial = this.txtPeriodo.textBoxCalendarioInicio.GetDate();
        var dataFinal = this.txtPeriodo.textBoxCalendarioFim.GetDate();
        if ((dataInicial.getMonth() != dataFinal.getMonth()) || (dataInicial.getDay() != 1 && dataFinal.getDay() != dataFinal.lastDayOfMonth().getDay())) {
            this.Modal.AbrirClient("O Período informado não completa um mês fechado! A coluna 'Média de vendas p/ Mês' não será calculada, pois poderá haver distorção nos resultados!!", MouraModalDialogBotoes.OK, null);
        }
    };
    R_PlaEst.prototype.OnComboBoxEmpresaChange = function () {
        this.AlteraDeposito();
        //this.txtFornecedor.LimparParametros();
        //this.txtFornecedor.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
        this.ValidarFornocedorEmpresa();
        if (this.txtProduto) {
            this.txtProduto.LimparParametros();
            //this.txtProduto.AddParametro("Inativo_Empresa", "S");
            if (this.txtFornecedor) {
                this.txtProduto.AddParametro("Codigo_Fornecedor", this.txtFornecedor.GetText().toString());
                this.txtFornecedor.AddParametro("Codigo_Empresa", this.lstEmpresa.GetValues().join(","));
            }
        }
        this.ValidarProdutoInativoEmpresa();
        if (this.MouraTabPanel1) {
            this.MouraTabPanel1.AlterarVisibleAba("AbaConsolidado", this.ValidarAbaConsolidado());
            //if (!this.MouraTabPanel1.GetTabByName("AbaIndividualizado").GetVisible() && !this.ValidarAbaConsolidado()) {
            if (!this.MouraTabPanel1.GetTabByName("AbaConsolidado").Visible) {
                //this.MouraTabPanel1.Visible = false;
                this.MouraTabPanel1.AlterarVisibleAba("AbaIndividualizado", true);
                this.grid.PreencherGrid(null);
            }
            else {
                this.MouraTabPanel1.AlterarVisibleAba("AbaIndividualizado", false);
                this.gridConsolidado.PreencherGrid(null);
            }
        }
    };
    R_PlaEst.prototype.ValidarAbaConsolidado = function () {
        var empresas;
        var parametros = {};
        if (this.lstEmpresa) {
            empresas = this.lstEmpresa.GetValues();
        }
        if (this.lstEmpresa.CheckBoxList.length > 1) { //valida se o cliente trabalha com mais de uma empresa no sistema
            if (this.MouraTabPanel1) {
                if ((empresas.length > 1 || empresas.length == 0) && (this.ExecutarFuncaoServerSideSynch("GetEstoqueMinimoEmpresa", parametros))) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
        else {
            return true;
        }
        return true;
    };
    R_PlaEst.prototype.AlteraDeposito = function () {
        var parametros;
        parametros = {
            codEmpresa: this.lstEmpresa.GetValues()
        };
        var itens;
        itens = this.ExecutarFuncaoServerSideSynch("PreencherComboDeposito", parametros);
        //
        if (this.cboDeposito && this.cboDeposito.Combo) {
            this.cboDeposito.ClearItems();
            for (var x = 0; x < itens.length; x++) {
                this.cboDeposito.Combo.AddItem(itens[x].Descricao, itens[x].Codigo, "");
            }
            if (this.cboDeposito.Combo.GetItemCount() == 1) {
                this.cboDeposito.Combo.SetSelectedIndex(0);
            }
        }
        if (this.lstDeposito) {
            this.lstDeposito.RemoverTodosItens();
            for (var x = 0; x < itens.length; x++) {
                this.lstDeposito.AdicionarItem(itens[x].Descricao, itens[x].Codigo);
            }
        }
    };
    //
    R_PlaEst.prototype.OnPesquisouFornecedorPedido = function (s, e) {
        var parametros;
        var retorno;
        parametros = {
            codFornecedor: this.txtFornecedorPedido.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetFornecedor", parametros);
        if (retorno && retorno.PessoaEntity) {
            if (this.cboFormaPagamento) {
                if (retorno.PessoaEntity.Forma_Pagamento <= 0) {
                    this.cboFormaPagamento.SetValue("");
                }
                else {
                    this.cboFormaPagamento.SetValue(retorno.PessoaEntity.Forma_Pagamento);
                }
            }
        }
    };
    R_PlaEst.prototype.OnPesquisouFornecedor = function (s, e) {
        this.ValidarFornocedorEmpresa();
        this.ValidarProdutoFornecedor();
        this.txtFornecedorPedido.Procurar(this.txtFornecedor.GetText());
        if (this.lstEmpresa) {
            this.txtFornecedor.AddParametro("Codigo_Empresa", this.lstEmpresa.GetValues().join(","));
        }
        if (this.txtProduto) {
            if (this.txtFornecedor) {
                this.txtProduto.AddParametro("Codigo_Fornecedor", this.txtFornecedor.GetText().toString());
            }
        }
    };
    R_PlaEst.prototype.OnClickBotaoLinha = function (s, e) {
        if (e.commandName == "visualizar_venda") {
            var parametros;
            var retorno = 0;
            var url;
            url = this.hdnURLConsultaVenda.value;
            parametros = {
                codProduto: ("" + e.data.Codigo).CNum(),
                codEmpresa: e.data.Codigo_Empresa
            };
            retorno = this.ExecutarFuncaoServerSideSynch("GetUltimaVendabyProdutoEmpresa", parametros);
            if (retorno <= 0) {
                MostrarAlerta("Esse produto nunca foi vendido");
                return;
            }
            abrirTelaNovaAbaCodigo(url, retorno.toString());
        }
    };
    R_PlaEst.prototype.OnClickBotaoLinhaConsolidado = function (s, e) {
        if (e.commandName == "visualizar_venda") {
            var parametros;
            var retorno = 0;
            var url;
            url = this.hdnURLConsultaVenda.value;
            parametros = {
                codProduto: ("" + e.data.Codigo).CNum(),
                codEmpresa: ValoresSismoura.EmpresaPadraoUsuario
            };
            retorno = this.ExecutarFuncaoServerSideSynch("GetUltimaVendabyProdutoEmpresa", parametros);
            if (retorno <= 0) {
                MostrarAlerta("Esse produto nunca foi vendido");
                return;
            }
            abrirTelaNovaAbaCodigo(url, retorno.toString());
        }
    };
    R_PlaEst.prototype.ValidarProdutoInativoEmpresa = function () {
        var inativoProduto;
        var parametros;
        if (this.txtProduto.GetText().CNum() <= 0) {
            return;
        }
        parametros = {
            codProduto: this.txtProduto.GetText().CNum(),
            codEmpresa: this.lstEmpresa.GetValues()
        };
        inativoProduto = this.ExecutarFuncaoServerSideSynch("isProdutoInativoEmpresa", parametros);
        if (inativoProduto) {
            this.txtProduto.Limpar();
            this.txtProduto.LimparParametros();
            MostrarAlerta("Este produto está inativo para a(s) empresa(s) selecionada(s)!");
            this.txtProduto.Focus();
            return;
        }
    };
    R_PlaEst.prototype.OnAntesAbrirProcuraProd = function (s, e) {
        this.txtProduto.AddParametro("referencia", this.txtReferencia.GetText());
        this.txtProduto.AddParametro("linha", this.txtLinha.GetText());
        this.txtProduto.AddParametro("cor", this.txtCor.GetText());
    };
    R_PlaEst.prototype.OnPesquisouProduto = function (s, e) {
        this.txtProduto.AddParametro("referencia", this.txtReferencia.GetText());
        this.txtProduto.AddParametro("linha", this.txtLinha.GetText());
        this.txtProduto.AddParametro("cor", this.txtCor.GetText());
        this.ValidarProdutoInativoEmpresa();
        this.ValidarProdutoFornecedor();
    };
    R_PlaEst.prototype.ValidarProdutoFornecedor = function () {
        var produtoVinculado;
        var parametros;
        if (this.txtProduto.GetText().CNum() <= 0) {
            return;
        }
        parametros = {
            codProduto: this.txtProduto.GetText().CNum(),
            codEmpresa: this.lstEmpresa.GetValues(),
            codFornecedor: this.txtFornecedor.GetText().CNum()
        };
        produtoVinculado = this.ExecutarFuncaoServerSideSynch("isProdutoVinculadoFornecedor", parametros);
        if (!produtoVinculado) {
            this.txtProduto.Limpar();
            this.txtProduto.LimparParametros();
            //this.txtProduto.AddParametro("Inativo_Empresa", "S");
            this.txtProduto.AddParametro("Codigo_Fornecedor", this.txtFornecedor.GetText().toString());
            MostrarAlerta("Esse produto não possui vinculo com o fornecedor informado!");
            this.txtProduto.Focus();
            return;
        }
    };
    R_PlaEst.prototype.ValidarFornocedorEmpresa = function () {
        var parametros;
        var retorno;
        if (this.txtFornecedor.GetText().CNum() <= 0) {
            return;
        }
        parametros = {
            codFornecedor: this.txtFornecedor.GetText().CNum(),
            codEmpresa: this.lstEmpresa.GetValues()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("isFornecedorPertenceEmpresa", parametros);
        if (!retorno) {
            this.txtFornecedor.Limpar();
            this.txtFornecedor.LimparParametros();
            MostrarAlerta("Este fornecedor não pertece a(s) empresa(s) selecionada(s)!");
            this.txtFornecedor.Focus();
            return;
        }
    };
    R_PlaEst.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (this.txtPeriodo.textBoxCalendarioInicio.GetDate() == null || this.txtPeriodo.textBoxCalendarioFim.GetDate() == null) {
            MostrarAlerta("Por favor, informe o período de Vendas");
            return;
        }
        //if (this.chkBaseMultiplo.Checked && this.txtFornecedor.GetText() == "") {
        //    MostrarAlerta("Preencha o Fornecedor!");
        //}
        //this.validarData();
        var produtos;
        var parametros;
        var grupos = [];
        var subgrupos = [];
        var marcas = [];
        var produtoFarmacia;
        if (this.chkProdutoFarmaciaPopular.Check) {
            if (this.chkProdutoFarmaciaPopular.Check.checked) {
                produtoFarmacia = true;
            }
            else {
                produtoFarmacia = false;
            }
        }
        else {
            produtoFarmacia = false;
        }
        for (var i = 0; i < this.txtGrupoLista.SourceLista.length; i++) {
            grupos.push(this.txtGrupoLista.SourceLista[i].Value);
        }
        //for (var i = 0; i < this.lstGrupo.SelectedValues.length; i++) {
        //    grupos.push(this.lstGrupo.SelectedValues[i].CNum());
        //}
        //for (var i = 0; i < this.lstSubGrupo.SelectedValues.length; i++) {
        //    subgrupos.push(this.lstSubGrupo.SelectedValues[i].CNum());
        //}
        for (var i = 0; i < this.txtSubGrupoLista.SourceLista.length; i++) {
            subgrupos.push(this.txtSubGrupoLista.SourceLista[i].Value);
        }
        for (var i = 0; i < this.txtMarca.SourceLista.length; i++) {
            marcas.push(this.txtMarca.SourceLista[i].Value);
        }
        parametros = {
            dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
            dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
            produto: this.txtProduto.GetText().CNum(),
            projecao: this.txtProjecao.GetText().CNum(),
            fornecedor: this.txtFornecedor.GetText().CNum(),
            grupos: grupos,
            subgrupos: subgrupos,
            marcas: marcas,
            empresas: this.lstEmpresa.GetValuesRelacao(),
            depositos: this.lstDeposito.GetValuesRelacao()
            //, produtosComEstoqueAbaixoMinimo: this.chkComEstoqueMinimo.Check.checked
            ,
            buscarVendasNaoRealizadas: this.cboConsidererProdutos.GetValue().CNum(),
            considerarMinimoSugestao: this.chkConsiderarEstoqueMinimo.Check.checked,
            considerarMaximoSugestao: this.chkConsiderarEstoqueMaximo.Check.checked,
            naoCalcularSeguranca: this.chkNaoCalcularSeguranca.Check.checked
            //, mostrarProdutosSemCurvaABC: this.chkSemCurvaABC.Check.checked
            ,
            apenasProdutosSugestaoMaiorZero: this.chkApenasMaiorZero.Check.checked,
            produtoFarmaciaPopular: produtoFarmacia
            //, produtosComEstoqueMaximo: this.chkComEstoqueMaximo.Check.checked
            ,
            preencherPedidoSugestao: this.chkPreencherProdutoSugestaoCompra.Checked
            //, preencherBaseMultiplo: this.chkBaseMultiplo.Checked
            ,
            referencia: this.txtReferencia.GetText(),
            linha: this.txtLinha.GetText().CNum(),
            cor: this.txtCor.GetText().CNum()
        };
        abrirEspera();
        //this.ExecutarFuncaoServerSideAsynch("GetPlanejamentoDeEstoqueIndividualizado", parametros, this.OnGerouGradeIndividualizado, this.funcaoErro, this);
        //this.ExecutarFuncaoServerSideAsynch("GetPlanejamentoDeEstoqueConsolidado", parametros, this.OnGerouGradeConsolidado, this.funcaoErro, this);
        this.ExecutarFuncaoServerSideAsynch("GetPlanejamento", parametros, this.OnGerouGrade, this.funcaoErro, this);
        this.accCadastro.SetExpanded(false);
    };
    R_PlaEst.prototype.OnGerouGrade = function (d) {
        try {
            var retorno = JSON.parse(d);
            if (retorno.d) {
                if (retorno.d.Permitir) {
                    if (this.ValidarAbaConsolidado()) {
                        this.gridConsolidado.PreencherGrid(retorno.d.Consolidado);
                        this.grid.PreencherGrid(null);
                    }
                    else {
                        this.grid.PreencherGrid(retorno.d.Individualizado);
                        this.gridConsolidado.PreencherGrid(null);
                    }
                }
                else {
                    this.grid.PreencherGrid(null);
                    this.gridConsolidado.PreencherGrid(null);
                    //fecharEspera();
                    MostrarAlerta("Filtre melhor sua busca!!");
                }
            }
            this.CalcularTotal();
            fecharEspera();
        }
        catch (ex) {
            fecharEspera();
        }
    };
    //protected OnGerouGradeIndividualizado(d: any) {
    //    try {
    //        var retorno = JSON.parse(d);
    //        if (retorno.d) {
    //            if (retorno.d.Permitir) {
    //                this.grid.PreencherGrid(retorno.d.DataSource);
    //            } else {
    //                this.grid.PreencherGrid(null);
    //                this.gridConsolidado.PreencherGrid(null);
    //                fecharEspera();
    //                MostrarAlerta("Filtre melhor sua busca!!");
    //            }
    //        }
    //    } catch (ex){
    //        fecharEspera();
    //    }
    //}
    //protected OnGerouGradeConsolidado(d: any) {
    //    try{
    //        var retorno = JSON.parse(d);
    //        if (retorno.d) {
    //            if (retorno.d.Permitir) {
    //                this.gridConsolidado.PreencherGrid(retorno.d.DataSource);
    //            } else {
    //                this.grid.PreencherGrid(null);
    //                this.gridConsolidado.PreencherGrid(null);
    //                fecharEspera();
    //                MostrarAlerta("Filtre melhor sua busca!!");
    //            }
    //        }
    //        fecharEspera();
    //    } catch (ex) {
    //        fecharEspera();
    //    }
    //}
    R_PlaEst.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtPeriodo.Iniciar();
        this.txtProduto.Limpar();
        this.txtReferencia.Limpar();
        this.txtLinha.Limpar();
        this.txtCor.Limpar();
        this.chkApenasMaiorZero.Check.checked = false;
        //this.chkComEstoqueMaximo.Check.checked = false;
        //this.chkComEstoqueMinimo.Check.checked = false;
        this.chkConsiderarEstoqueMinimo.Check.checked = false;
        this.chkConsiderarEstoqueMaximo.Check.checked = false;
        this.chkNaoCalcularSeguranca.Check.checked = false;
        if (this.cboConsidererProdutos.Combo.GetItemCount() > 0) {
            this.cboConsidererProdutos.SetSelectedIndex("0");
        }
        //this.chkSemCurvaABC.Check.checked = false;
        this.chkApenasMaiorZero.Check.checked = false;
        if (this.chkProdutoFarmaciaPopular.Check) {
            this.chkProdutoFarmaciaPopular.Check.checked = false;
        }
        this.txtSubGrupoLista.Limpar();
        this.txtGrupoLista.Limpar();
        //this.lstGrupo.LimparSelecao();
        //this.lstSubGrupo.LimparSelecao();
        this.txtMarca.Limpar();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.lstDeposito.LimparSelecao();
        var parametros = {};
        //if (this.MouraTabPanel1) { // Lucas Viesi - Atv. 1059502
        //    this.MouraTabPanel1.AlterarVisibleAba("AbaIndividualizado", this.ExecutarFuncaoServerSideSynch("GetEstoqueMinimoEmpresa", parametros));
        //}
        //if (!this.isLoad) {
        this.OnComboBoxEmpresaChange();
        //}
        this.txtProjecao.SetText("");
        this.txtFornecedorPedido.Limpar();
        this.txtFornecedor.Limpar();
        this.cboFormaPagamento.LimparSelecao();
        this.txtProduto.LimparParametros();
        //this.txtProduto.AddParametro("Inativo_Empresa", "S");
        this.ValidarProdutoInativoEmpresa();
        this.grid.PreencherGrid(null);
        this.grid.LimparFiltros();
        this.gridConsolidado.PreencherGrid(null);
        this.gridConsolidado.LimparFiltros();
        this.grdDiario.PreencherGrid(null);
        this.grdDiario.LimparFiltros();
        this.grdMensal.PreencherGrid(null);
        this.grdMensal.LimparFiltros();
        this.hdnCodPedido.value = "0";
        this.CalcularTotal();
        //this.hdnURLPedido.value = "";
        this.chkPreencherProdutoSugestaoCompra.Checked = false;
        this.txtFornecedor.Obrigatorio = false;
    };
    R_PlaEst.prototype.OnTabChange = function () {
        this.CalcularTotal();
    };
    R_PlaEst.prototype.CalcularTotal = function () {
        var valorTotal;
        valorTotal = 0;
        var ds;
        var index;
        if (this.MouraTabPanel1) {
            index = this.MouraTabPanel1.GetActiveTabIndex();
            if (index == 0) { //Consolidado
                if (this.gridConsolidado) {
                    ds = this.gridConsolidado.DataSource;
                }
            }
            else if (index == 1) { //Individualizado
                if (this.grid) {
                    ds = this.grid.DataSource;
                }
            }
        }
        for (var x = 0; x < ds.length; x++) {
            if (ds[x].Pedido > 0) {
                valorTotal += ds[x].Pedido * ds[x].Preco_Custo;
            }
        }
        this.lblValorTotal.Text = valorTotal.Format(ValoresSismoura.CasasDecimaisValor);
    };
    R_PlaEst.prototype.DiscriminarVenda = function (s, e) {
        //let empresas: number[] = [];
        //for (var i = 0; i < this.lstEmpresa.GetValues().length; i++) {
        //    empresas.push(this.lstEmpresa.GetValues()[i].CNum());
        //}
        var retornoDiario;
        var retornoMensal;
        var parametros = {
            codProduto: e.data['Codigo'],
            dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
            dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
            empresas: this.lstEmpresa.GetValues()
        };
        retornoDiario = this.ExecutarFuncaoServerSideSynch("BuscarVendaDiscriminadaDiaria", parametros);
        this.grdDiario.PreencherGrid(retornoDiario);
        this.mdDiscriminar.Show();
        retornoMensal = this.ExecutarFuncaoServerSideSynch("BuscarVendaDiscriminadaMensal", parametros);
        this.grdMensal.PreencherGrid(retornoMensal);
    };
    R_PlaEst.prototype.DiscriminarVendaConsolidado = function (s, e) {
        //let empresas: number[] = [];
        //for (var i = 0; i < this.lstEmpresa.GetValues().length; i++) {
        //    empresas.push(this.lstEmpresa.GetValues()[i].CNum());
        //}
        var retornoDiario;
        var retornoMensal;
        var parametros = {
            codProduto: e.data['Codigo'],
            dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
            dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
            empresas: this.lstEmpresa.GetValues()
        };
        retornoDiario = this.ExecutarFuncaoServerSideSynch("BuscarVendaDiscriminadaDiaria", parametros);
        this.grdDiario.PreencherGrid(retornoDiario);
        this.mdDiscriminar.Show();
        retornoMensal = this.ExecutarFuncaoServerSideSynch("BuscarVendaDiscriminadaMensal", parametros);
        this.grdMensal.PreencherGrid(retornoMensal);
    };
    R_PlaEst.prototype.OnDepoisEditarItem = function (s, e) {
        var parametros;
        try {
            if (e.item.Estoque_Minimo == null) {
                e.item.Estoque_Minimo = 0;
            }
            if (e.item.Estoque_Maximo == null) {
                e.item.Estoque_Maximo = 0;
            }
            if (e.item.Pedido == null) {
                e.item.Pedido = 0;
            }
            if (e.item.Preco_Produto == null) {
                e.item.Preco_Produto = 0;
            }
            if (e.item.Preco_Custo == null) {
                e.item.Preco_Custo = 0;
            }
            if (e.item.Margem == null) {
                e.item.Margem = 0;
            }
            if (e.propriedade == "Preco_Produto") {
                if (e.item.Preco_Produto > 0 && e.item.Preco_Custo > 0) {
                    e.item.Margem = ((e.item.Preco_Produto / e.item.Preco_Custo) - 1) * 100;
                }
            }
            else {
                if (e.item.Margem > 0) {
                    e.item.Preco_Produto = e.item.Preco_Custo * ((e.item.Margem / 100) + 1);
                }
            }
            if (e.propriedade == "Fornecedores") {
                if (e.item.Fornecedores) {
                    var fornecedor = e.item.Fornecedores;
                    var retorno = void 0;
                    parametros = {
                        codFornecedor: fornecedor
                    };
                    retorno = this.ExecutarFuncaoServerSideSynch("BuscarFornecedor", parametros);
                    if (!retorno) {
                        e.item.Fornecedores = null;
                        MostrarAlerta("Fornecedor não encontrado!");
                    }
                }
            }
            if (e.propriedade == "Pedido") {
                if (this.chkConsiderarEstoqueMaximo.Check.checked) {
                    var estoqueMaximo = 0;
                    if (e.item) {
                        parametros = {
                            codProduto: e.item.Codigo,
                            codEmpresa: e.item.Codigo_Empresa
                        };
                        //estoqueMaximo = this.ExecutarFuncaoServerSideSynch("GetEstoqueMaximoProduto", parametros);
                        if (e.item.Pedido + e.item.Estoque > estoqueMaximo && estoqueMaximo > 0) {
                            MostrarAlerta("Este produto execedeu o limite do estoque máximo!");
                        }
                    }
                }
            }
            if (e.propriedade == "Estoque_Minimo") {
                if (e.item) {
                    if (e.item.Estoque_Minimo && e.item.Codigo) {
                        parametros = {
                            codProduto: e.item.Codigo,
                            codEmpresa: e.item.Codigo_Empresa,
                            estoqueMinimo: e.item.Estoque_Minimo,
                            nomeTela: ValoresSismoura.NomeTela,
                            codUsuario: ValoresSismoura.UsuarioLogado
                        };
                        this.ExecutarFuncaoServerSideSynch("AlterarEstoqueMinimo", parametros);
                    }
                }
            }
            if (e.item.Pedido != null && e.item.Preco_Custo != null) {
                e.item.Total = e.item.Pedido * e.item.Preco_Custo;
            }
            this.grid.Refresh();
            this.CalcularTotal();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_PlaEst.prototype.OnDepoisEditarItemConsolidado = function (s, e) {
        var parametros;
        try {
            if (e.item.Estoque_Minimo == null) {
                e.item.Estoque_Minimo = 0;
            }
            if (e.item.Estoque_Maximo == null) {
                e.item.Estoque_Maximo = 0;
            }
            if (e.item.Pedido == null) {
                e.item.Pedido = 0;
            }
            if (e.item.Preco_Produto == null) {
                e.item.Preco_Produto = 0;
            }
            if (e.item.Preco_Custo == null) {
                e.item.Preco_Custo = 0;
            }
            if (e.item.Margem == null) {
                e.item.Margem = 0;
            }
            if (e.propriedade == "Preco_Produto") {
                if (e.item.Preco_Produto > 0 && e.item.Preco_Custo > 0) {
                    e.item.Margem = ((e.item.Preco_Produto / e.item.Preco_Custo) - 1) * 100;
                }
            }
            else {
                if (e.item.Margem > 0) {
                    e.item.Preco_Produto = e.item.Preco_Custo * ((e.item.Margem / 100) + 1);
                }
            }
            if (e.propriedade == "Fornecedores") {
                if (e.item.Fornecedores) {
                    var fornecedor = e.item.Fornecedores;
                    var retorno = void 0;
                    parametros = {
                        codFornecedor: fornecedor
                    };
                    retorno = this.ExecutarFuncaoServerSideSynch("BuscarFornecedor", parametros);
                    if (!retorno) {
                        e.item.Fornecedores = null;
                        MostrarAlerta("Fornecedor não encontrado!");
                    }
                }
            }
            if (e.propriedade == "Pedido") {
                if (this.chkConsiderarEstoqueMaximo.Check.checked) {
                    var estoqueMaximo = 0;
                    if (e.item) {
                        parametros = {
                            codProduto: e.item.Codigo,
                            codEmpresa: ValoresSismoura.EmpresaPadraoUsuario
                        };
                        estoqueMaximo = this.ExecutarFuncaoServerSideSynch("GetEstoqueMaximoProduto", parametros);
                        if (e.item.Pedido + e.item.Estoque > estoqueMaximo && estoqueMaximo > 0) {
                            MostrarAlerta("Este produto execedeu o limite do estoque máximo!");
                        }
                    }
                }
            }
            if (e.propriedade == "Estoque_Minimo") {
                if (e.item) {
                    if (e.item.Estoque_Minimo && e.item.Codigo) {
                        parametros = {
                            codProduto: e.item.Codigo,
                            codEmpresa: ValoresSismoura.EmpresaPadraoUsuario,
                            estoqueMinimo: e.item.Estoque_Minimo,
                            nomeTela: ValoresSismoura.NomeTela,
                            codUsuario: ValoresSismoura.UsuarioLogado
                        };
                        this.ExecutarFuncaoServerSideSynch("AlterarEstoqueMinimo", parametros);
                    }
                }
            }
            if (e.item.Pedido != null && e.item.Preco_Custo != null) {
                e.item.Total = e.item.Pedido * e.item.Preco_Custo;
            }
            this.gridConsolidado.Refresh();
            this.CalcularTotal();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_PlaEst.prototype.GerarPedido = function (s, e) {
        e.processOnServer = false;
        //Atividade 1111403: Adicionada obrigatoriedade ao campo Forma de Pagamento do Fornecedor
        if (CNum(this.cboFormaPagamento.GetValue()) <= 0) {
            var msg = "Preencha corretamente o campo: Forma de Pagamento do Fornecedor. ";
            if (this.cboFormaPagamento.GetItemCount() <= 0) {
                msg += "\r\nOs registros deste campo devem ser cadastrados na tela Cadastro de Forma de Pagamento";
            }
            MostrarAlerta(msg);
            return;
        }
        var index;
        if (this.MouraTabPanel1) {
            index = this.MouraTabPanel1.GetActiveTabIndex();
            if (index == 0) { //Consolidado
                this.GerarPedidoConsolidado();
            }
            else if (index == 1) { //Individualizado
                this.GerarPedidoIndividualizado();
            }
        }
    };
    R_PlaEst.prototype.GerarPedidoIndividualizado = function () {
        var ds = this.grid.DataSource;
        var entidade;
        var entityList = [];
        var parametros;
        if (this.txtFornecedorPedido.GetText().CNum() == 0) {
            MostrarAlerta("Informe o fornecedor para o pedido");
            return;
        }
        //var empresas = ds.filter((x[Codigo_Empresa], i, a) => a.indexOf(x) == i);
        //var empresas = [];
        //ds.forEach(function (x) { empresas.push(x.Codigo_Empresa); });
        //empresas = empresas.filter((x, i, a) => a.indexOf(x) == i);
        for (var x = 0; x < ds.length; x++) {
            if (ds[x].Pedido > 0) {
                entidade = {};
                entidade.Fornecedor = this.txtFornecedorPedido.GetText().CNum();
                entidade.Empresa_Destino = ds[x].Codigo_Empresa;
                entidade.Deposito = ds[x].Codigo_Deposito;
                entidade.Produto = ds[x].Codigo;
                entidade.Quantidade = ds[x].Pedido;
                entidade.Valor = ds[x].Preco_Custo;
                entidade.Produto_Nome = ds[x].Nome;
                entityList.push(entidade);
            }
        }
        var retorno;
        var codFormaPagamento = 0;
        if (!String.IsNullOrWhiteSpace(this.cboFormaPagamento.GetValue())) {
            codFormaPagamento = this.cboFormaPagamento.GetValue();
        }
        parametros = {
            lista: entityList,
            tela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado,
            forma_pagamento: codFormaPagamento
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GerarPedido", parametros);
        if (!String.IsNullOrWhiteSpace(retorno)) {
            //this.hdnCodPedido.value = retorno.toString();
            MsgBoxJS("Pedido(s) de compra " + retorno + " gerado(s) com sucesso!", MsgBoxOptions.OkOnly, MsgBoxIcon.Question, null);
            //$.proxy(this.OnRepostaVisualizarPedido, this)
        }
        else {
            MostrarAlerta("Não há nenhum produto informado que possua quantidade e fornecedor informado para gerar o pedido!");
        }
    };
    R_PlaEst.prototype.GerarPedidoConsolidado = function () {
        var ds = this.gridConsolidado.DataSource;
        var entidade;
        var entityList = [];
        var codDeposito;
        var parametros;
        if (this.txtFornecedorPedido.GetText().CNum() == 0) {
            MostrarAlerta("Informe o fornecedor para o pedido");
            return;
        }
        parametros = {
            codEmpresa: ValoresSismoura.EmpresaPadraoUsuario
        };
        codDeposito = this.ExecutarFuncaoServerSideSynch("GetDepositoPadraoByEmpresa", parametros);
        for (var x = 0; x < ds.length; x++) {
            if (ds[x].Pedido > 0) {
                entidade = {};
                entidade.Fornecedor = this.txtFornecedorPedido.GetText().CNum();
                entidade.Empresa_Destino = ValoresSismoura.EmpresaPadraoUsuario;
                entidade.Deposito = codDeposito;
                entidade.Produto = ds[x].Codigo;
                entidade.Quantidade = ds[x].Pedido;
                entidade.Valor = ds[x].Preco_Custo;
                entidade.Produto_Nome = ds[x].Nome;
                entityList.push(entidade);
            }
        }
        var retorno;
        var codFormaPagamento = 0;
        if (!String.IsNullOrWhiteSpace(this.cboFormaPagamento.GetValue())) {
            codFormaPagamento = this.cboFormaPagamento.GetValue();
        }
        parametros = {
            lista: entityList,
            tela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado,
            forma_pagamento: codFormaPagamento
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GerarPedido", parametros);
        if (!String.IsNullOrWhiteSpace(retorno)) {
            this.hdnCodPedido.value = retorno.toString();
            MsgBoxJS("Pedido de compra " + retorno + " gerado com sucesso! Deseja visualiza-lo?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRepostaVisualizarPedido, this));
        }
        else {
            MostrarAlerta("Não há nenhum produto informado que possua quantidade e fornecedor informado para gerar o pedido!");
        }
    };
    R_PlaEst.prototype.OnRepostaVisualizarPedido = function (result) {
        var codPedido = this.hdnCodPedido.value.CNum();
        var url = this.hdnURLPedido.value;
        if (result.Resultado == MsgBoxResult.Yes) {
            if (codPedido > 0) {
                abrirTelaNovaAbaCodigo(url, codPedido.toString());
            }
        }
    };
    return R_PlaEst;
}(MouraPageRelacaoAngular));
var r_PlaEst = new R_PlaEst();
//# sourceMappingURL=R_PlaEst.js.map