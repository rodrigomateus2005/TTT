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
var C_Produt_Old = /** @class */ (function (_super) {
    __extends(C_Produt_Old, _super);
    function C_Produt_Old() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Produt_Old.prototype, "ListaPrecos", {
        get: function () {
            return this.DeserializarJSONEncoded(this.hdnListaPrecos.value);
        },
        set: function (value) {
            this.hdnListaPrecos.value = this.SerializarJSONEncoded(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "txtCodigoBarras", {
        get: function () {
            return window['txtCodigoBarras_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "cboEmpresaFornecedor", {
        get: function () {
            return window['cboEmpresaFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "hdnCodProduto", {
        get: function () {
            return $('#hdnCodProduto')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "hdnRespondeuCodBarras", {
        get: function () {
            return $('#hdnRespondeuCodBarras')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "btnBuscarProduto", {
        get: function () {
            return window['btnBuscarProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "hdnConfiguracoespermitirPerguntarCodBarra", {
        get: function () {
            return $('#hdnConfiguracoespermitirPerguntarCodBarra')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "hdnConfiguracoesGerarCodBarraBalanca", {
        get: function () {
            return $('#hdnConfiguracoesGerarCodBarraBalanca')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "hdnGerarCodBarra", {
        get: function () {
            return $('#hdnGerarCodBarra')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "chkProdutoBalanca", {
        get: function () {
            return window['chkProdutoBalanca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "txtPrecoCusto", {
        get: function () {
            return window['txtPrecoCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "txtMarkup_P", {
        get: function () {
            return window['txtMarkup_P_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "txtPrecoVenda", {
        get: function () {
            return window['txtPrecoVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "txtFatorCusto", {
        get: function () {
            return window['txtFatorCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "txtPrecoPorcentagem", {
        get: function () {
            return window['txtPrecoPorcentagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "hdnCampoAtualizar", {
        get: function () {
            return $('#hdnCampoAtualizar')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "hdnListaPrecos", {
        get: function () {
            return $('#hdnListaPrecos')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "hdnCalcularMargem", {
        get: function () {
            return $('#hdnCalcularMargem')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "mdFarmarcia", {
        get: function () {
            return window['mdFarmarcia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "cboLaboratorio", {
        get: function () {
            return window['cboLaboratorio_comboBox'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "mdDrogaria", {
        get: function () {
            return window['mdManipulacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "txtDiluicao", {
        get: function () {
            return window['txtDiluicao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "hdnCalcularDolar", {
        get: function () {
            return $('#hdnCalcularDolar')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "hdnCotacaoDolar", {
        get: function () {
            return $('#hdnCotacaoDolar')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "txtPrecoDolar", {
        get: function () {
            return window['txtPrecoDolar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "txtMargemReal", {
        get: function () {
            return window['txtMargemReal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "cbpListaPrecos", {
        get: function () {
            return window['cbpListaPrecos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "mdImportarDados", {
        get: function () {
            return window['mdImportarDados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "txtProdutoImportar", {
        get: function () {
            return window['txtProdutoImportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "txtFornecedor", {
        get: function () {
            return window['txtFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "mdInfExtraBalanca", {
        get: function () {
            return window['mdInfExtraBalanca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "txtInfExtra1", {
        get: function () {
            return window['txtInfExtra1_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "txtProdutoSimilar", {
        get: function () {
            return window['txtProdutoSimilar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "chkA1", {
        get: function () {
            return window['chkA1_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "chkA2", {
        get: function () {
            return window['chkA2_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "chkA3", {
        get: function () {
            return window['chkA3_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "chkB1", {
        get: function () {
            return window['chkB1_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "chkB2", {
        get: function () {
            return window['chkB2_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "chkC1", {
        get: function () {
            return window['chkC1_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "chkC2", {
        get: function () {
            return window['chkC2_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "chkC3", {
        get: function () {
            return window['chkC3_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "chkC4", {
        get: function () {
            return window['chkC4_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "chkC5", {
        get: function () {
            return window['chkC5_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "chkBMPO", {
        get: function () {
            return window['chkBMPO_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "chkBSPO", {
        get: function () {
            return window['chkBSPO_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "hdnURLConsulta", {
        get: function () {
            return $('#hdnURLConsulta')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "btnMaisInformacoes", {
        get: function () {
            return window['btnMaisInformacoes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "btnHistoricoPreco", {
        get: function () {
            return window['btnHistoricoPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "btnGerarHistoricoPreco", {
        get: function () {
            return window['btnGerarHistoricoPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "cboHistoricoTipo", {
        get: function () {
            return window['cboHistoricoTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "cboHistoricoCampoAlterado", {
        get: function () {
            return window['cboHistoricoCampoAlterado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "mdHistoricoPreco", {
        get: function () {
            return window['mdHistoricoPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "txtPeriodoHistoricoPreco", {
        get: function () {
            return window['txtPeriodoHistoricoPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "grdHistoricoPreco", {
        get: function () {
            return window['grdHistoricoPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "txtQtdeCaixaFarmacia", {
        //get btnInativos(): MouraButton {
        //    return window['btnInativos_Object'];
        //}
        //get mdInativosEmpresa(): MouraModal {
        //    return window['mdInativosEmpresa_Object'];
        //}
        //get txtDescricao(): MouraTextBox {
        //    return window['txtDescricao_Object'];
        //}
        //get grdInativosporEmpresa(): MouraGridView {
        //    return window['grdInativosporEmpresa_Object'];
        //}
        //get lblProduto(): MouraLabel {
        //    return window['lblProduto_Object'];
        //}
        get: function () {
            return window['txtQtdeCaixaFarmacia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "txtValorMaxAprovadoMS", {
        get: function () {
            return window['txtValorMaxAprovadoMS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "txtValorUnitarioCaixa", {
        get: function () {
            return window['txtValorUnitarioCaixa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "chkFarmaciaPopular", {
        get: function () {
            return window['chkFarmaciaPopular_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "chkGratuidade", {
        get: function () {
            return window['chkGratuidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "txtTabelaPreco", {
        get: function () {
            return window['txtTabelaPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "GridPrecos", {
        get: function () {
            return window['GridPrecos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Produt_Old.prototype, "GridEstoque", {
        get: function () {
            return window['GridEstoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Produt_Old.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtMarkup_P) {
            adicionarEventoMoura(this.txtMarkup_P.TextChanged, this.OnTextBoxMarkupChange, this);
        }
        if (this.txtPrecoCusto) {
            adicionarEventoMoura(this.txtPrecoCusto.TextChanged, this.OnTextBoxPrecoCustoChange, this);
        }
        if (this.txtCodigoBarras) {
            adicionarEventoMoura(this.txtCodigoBarras.TextChanged, this.OnTextBoxCodigoBarrasChange, this);
        }
        if (this.txtPrecoVenda) {
            adicionarEventoMoura(this.txtPrecoVenda.TextChanged, this.OnTextBoxPrecoVendaChange, this);
        }
        if (this.txtPrecoDolar) {
            adicionarEventoMoura(this.txtPrecoDolar.TextChanged, this.OnTextBoxPrecoDolarChange, this);
        }
        if (this.chkA1 && this.chkA1.Check && this.chkA2 && this.chkA2.Check && this.chkA3 && this.chkA3.Check &&
            this.chkB1 && this.chkB1.Check && this.chkB2 && this.chkB2.Check && this.chkC1 && this.chkC1.Check &&
            this.chkC2 && this.chkC2.Check && this.chkC3 && this.chkC3.Check && this.chkC4 && this.chkC4.Check &&
            this.chkC5 && this.chkC5.Check) {
            adicionarEventoMoura(this.chkA1.CheckChanged, this.OnChkA1CheckChange, this);
            adicionarEventoMoura(this.chkA2.CheckChanged, this.OnChkA2CheckChange, this);
            adicionarEventoMoura(this.chkA3.CheckChanged, this.OnChkA3CheckChange, this);
            adicionarEventoMoura(this.chkB1.CheckChanged, this.OnChkB1CheckChange, this);
            adicionarEventoMoura(this.chkB2.CheckChanged, this.OnChkB2CheckChange, this);
            adicionarEventoMoura(this.chkC1.CheckChanged, this.OnChkC1CheckChange, this);
            adicionarEventoMoura(this.chkC2.CheckChanged, this.OnChkC2CheckChange, this);
            adicionarEventoMoura(this.chkC3.CheckChanged, this.OnChkC3CheckChange, this);
            adicionarEventoMoura(this.chkC4.CheckChanged, this.OnChkC4CheckChange, this);
            adicionarEventoMoura(this.chkC5.CheckChanged, this.OnChkC5CheckChange, this);
        }
        if (this.txtFornecedor) {
            adicionarEventoMoura(this.txtFornecedor.Procurou, this.OnPesquisouFornecedor, this);
        }
        if (this.cboEmpresaFornecedor) {
            adicionarEventoMoura(this.cboEmpresaFornecedor.SelectedItemChanged, this.OnComboBoxEmpresaFornecedorChange, this);
        }
        if (this.mdFarmarcia && this.mdFarmarcia.ModalDialog) {
            adicionarEventoDevExpress(this.mdFarmarcia.ModalDialog.EndCallback, this.OnEndCallBackModalFarmacia, this);
        }
        if (this.mdDrogaria && this.mdDrogaria.ModalDialog) {
            adicionarEventoDevExpress(this.mdDrogaria.ModalDialog.EndCallback, this.OnEndCallBackModalManipulacao, this);
        }
        if (this.mdImportarDados && this.mdImportarDados.ModalDialog) {
            adicionarEventoDevExpress(this.mdImportarDados.ModalDialog.EndCallback, this.OnEndCallBackModalImportarDados, this);
        }
        if (this.mdInfExtraBalanca && this.mdInfExtraBalanca.ModalDialog) {
            adicionarEventoDevExpress(this.mdInfExtraBalanca.ModalDialog.EndCallback, this.OnEndCallBackModalInfExtraBalanca, this);
        }
        if (this.btnMaisInformacoes) {
            adicionarEventoMoura(this.btnMaisInformacoes.Click, this.abrirConsultaPrecos, this);
        }
        //if (this.btnInativos && this.btnInativos.Botao) {
        //    adicionarEventoDevExpress(this.btnInativos.Botao.Click, this.OnClickInativosPorEmpresa, this);
        //}
        if (this.btnHistoricoPreco) {
            adicionarEventoMoura(this.btnHistoricoPreco.Click, this.OnClickHistoricoPreco, this);
        }
        if (this.btnGerarHistoricoPreco) {
            adicionarEventoMoura(this.btnGerarHistoricoPreco.Click, this.OnClickGerarHistorico, this);
        }
        if (this.chkFarmaciaPopular) {
            adicionarEventoMoura(this.chkFarmaciaPopular.CheckChanged, this.CorrigirCamposFarmaciaPopular, this);
        }
        if (this.chkGratuidade) {
            adicionarEventoMoura(this.chkGratuidade.CheckChanged, this.CorrigirCamposGratuidade, this);
        }
        if (this.txtQtdeCaixaFarmacia) {
            adicionarEventoMoura(this.txtQtdeCaixaFarmacia.TextChanged, this.OnTextBoxQtdeCaixaFarmaciaChange, this);
        }
        if (this.txtValorMaxAprovadoMS) {
            adicionarEventoMoura(this.txtValorMaxAprovadoMS.TextChanged, this.OnTextBoxValorMaxAprovadoMS, this);
        }
        if (this.txtTabelaPreco) {
            adicionarEventoMoura(this.txtTabelaPreco.TextChanged, this.OnTextBoxTabelaPrecoChange, this);
        }
    };
    C_Produt_Old.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.Limpar();
    };
    C_Produt_Old.prototype.OnDepoisLimpar = function () {
        _super.prototype.OnDepoisLimpar.call(this, {});
        this.Limpar();
    };
    C_Produt_Old.prototype.Limpar = function () {
        this.hdnGerarCodBarra.value = "0";
        this.hdnCodProduto.value = "0";
        this.hdnRespondeuCodBarras.value = "N";
    };
    C_Produt_Old.prototype.OnAntesGravar = function () {
        if (_super.prototype.OnAntesGravar.call(this) && this.hdnGerarCodBarra.value != "1") {
            if ((!this.chkProdutoBalanca.Check) || (this.chkProdutoBalanca.Check && !this.chkProdutoBalanca.Check.checked) || this.hdnConfiguracoesGerarCodBarraBalanca.value != "0") {
                if (this.hdnConfiguracoespermitirPerguntarCodBarra.value == "1" && this.txtCodigoBarras.GetText() == "") {
                    if (this.hdnRespondeuCodBarras.value == "N") {
                        this.Modal.AbrirClient("O produto não possui código de barras. Deseja que o sistema gere?", MouraModalDialogBotoes.Sim | MouraModalDialogBotoes.Nao, $.proxy(this.respontaCodBarras, this));
                        return false;
                    }
                    else {
                        this.hdnRespondeuCodBarras.value = "N";
                    }
                }
            }
        }
        return true;
    };
    C_Produt_Old.prototype.respontaCodBarras = function (botaoSelecionado) {
        this.hdnRespondeuCodBarras.value = "S";
        this.hdnGerarCodBarra.value = (botaoSelecionado == MouraModalDialogBotoes.Sim ? "1" : "0");
        this.ClicarGravar();
    };
    C_Produt_Old.prototype.abrirConsultaPrecos = function (s, e) {
        e.processOnServer = false;
        if (this.hdnURLConsulta && this.txtCodigo && this.txtCodigo.Textbox) {
            var url = this.hdnURLConsulta.value;
            var codigo = this.txtCodigo.GetText();
            if (!codigo || codigo == '') {
                MostrarAlerta('Informe um produto já cadastrado');
            }
            else {
                abrirTelaNovaAbaCodigo(url, codigo);
            }
        }
        return false;
    };
    C_Produt_Old.prototype.OnClickHistoricoPreco = function (s, e) {
        e.processOnServer = false;
        this.mdHistoricoPreco.Show();
    };
    C_Produt_Old.prototype.OnClickGerarHistorico = function (s, e) {
        e.processOnServer = false;
        var parametros;
        var Historico;
        if (this.txtCodigo.GetText().CNum() <= 0) {
            return;
        }
        parametros = {
            codProduto: this.txtCodigo.GetText().CNum(),
            dataInicio: this.txtPeriodoHistoricoPreco.textBoxCalendarioInicio.GetDate(),
            dataFim: this.txtPeriodoHistoricoPreco.textBoxCalendarioFim.GetDate(),
            tipoRegistro: this.cboHistoricoTipo.GetText().CNum(),
            campoAlterado: this.cboHistoricoCampoAlterado.GetText().CNum()
        };
        Historico = this.ExecutarFuncaoServerSideSynch("PreencherGradeHistorico", parametros);
        if (Historico) {
            this.grdHistoricoPreco.PreencherGrid(Historico);
        }
    };
    //protected OnClickInativosPorEmpresa(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs) {
    //    e.processOnServer = false;
    //    var parametros: any;
    //    var empresas: any;
    //    if (this.txtCodigo.GetText().CNum() <= 0) {
    //        return;
    //    }
    //    parametros = {
    //        codProduto: this.txtCodigo.GetText().CNum()
    //    }
    //    this.lblProduto.Text = this.txtDescricao.GetText();
    //    empresas = this.ExecutarFuncaoServerSideSynch("RetornarEmpresas", parametros);
    //    if (empresas) {
    //        this.grdInativosporEmpresa.p(empresas);
    //    }
    //    this.mdInativosEmpresa.Show();
    //}
    C_Produt_Old.prototype.selecionarCheck = function (chk, valor) {
        if (chk && chk.Check) {
            chk.Check.checked = valor;
        }
    };
    C_Produt_Old.prototype.validarDocumento = function () {
        if (this.chkA1.Check.checked || this.chkA2.Check.checked || this.chkA3.Check.checked || this.chkB1.Check.checked ||
            this.chkB2.Check.checked || this.chkC1.Check.checked || this.chkC2.Check.checked || this.chkC3.Check.checked ||
            this.chkC4.Check.checked || this.chkC5.Check.checked) {
            this.selecionarCheck(this.chkBSPO, true);
        }
        else {
            this.selecionarCheck(this.chkBSPO, false);
            ;
        }
        if (this.chkA1.Check.checked || this.chkA2.Check.checked || this.chkA3.Check.checked || this.chkB2.Check.checked ||
            this.chkC4.Check.checked) {
            this.selecionarCheck(this.chkBMPO, true);
        }
        else {
            this.selecionarCheck(this.chkBMPO, false);
        }
    };
    C_Produt_Old.prototype.OnChkA1CheckChange = function () {
        this.validarDocumento();
    };
    C_Produt_Old.prototype.OnChkA2CheckChange = function () {
        this.validarDocumento();
    };
    C_Produt_Old.prototype.OnChkA3CheckChange = function () {
        this.validarDocumento();
    };
    C_Produt_Old.prototype.OnChkB1CheckChange = function () {
        this.validarDocumento();
    };
    C_Produt_Old.prototype.OnChkB2CheckChange = function () {
        this.validarDocumento();
    };
    C_Produt_Old.prototype.OnChkC1CheckChange = function () {
        this.validarDocumento();
    };
    C_Produt_Old.prototype.OnChkC2CheckChange = function () {
        this.validarDocumento();
    };
    C_Produt_Old.prototype.OnChkC3CheckChange = function () {
        this.validarDocumento();
    };
    C_Produt_Old.prototype.OnChkC4CheckChange = function () {
        this.validarDocumento();
    };
    C_Produt_Old.prototype.OnChkC5CheckChange = function () {
        this.validarDocumento();
    };
    C_Produt_Old.prototype.OnEndCallBackModalInfExtraBalanca = function () {
        this.txtInfExtra1.Textbox.focus();
    };
    C_Produt_Old.prototype.OnEndCallBackModalImportarDados = function () {
        this.txtProdutoImportar.Focus();
    };
    C_Produt_Old.prototype.OnEndCallBackModalFarmacia = function () {
        this.CorrigirCamposFarmaciaPopular();
        this.cboLaboratorio.Focus();
    };
    C_Produt_Old.prototype.OnEndCallBackModalManipulacao = function () {
        this.txtDiluicao.Textbox.focus();
    };
    C_Produt_Old.prototype.OnTextBoxPrecoDolarChange = function () {
        return this.CalcularDolar();
    };
    C_Produt_Old.prototype.OnTextBoxMarkupChange = function () {
        if (this.txtMargemReal && this.txtMargemReal.Textbox) {
            this.txtMargemReal.Textbox.value = this.txtMarkup_P.Textbox.value.FormatNumber(3);
        }
        if (this.hdnCalcularDolar.value == "1" && this.txtPrecoDolar && this.txtPrecoDolar.Textbox) {
            return this.CalcularDolar();
        }
        else {
            return this.AtualizarValorVenda();
        }
    };
    C_Produt_Old.prototype.OnComboBoxEmpresaFornecedorChange = function () {
        this.txtFornecedor.LimparParametros();
        this.txtFornecedor.AddParametro("codEmpresa", this.cboEmpresaFornecedor.GetValue().toString());
    };
    C_Produt_Old.prototype.OnPesquisouFornecedor = function (s, e) {
        var parametros;
        var retorno;
        if (this.txtFornecedor.GetText().CNum() <= 0) {
            return;
        }
        parametros = {
            codFornecedor: this.txtFornecedor.GetText().CNum(),
            codEmpresa: this.cboEmpresaFornecedor.GetValue()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("isFornecedorPertenceEmpresa", parametros);
        if (!retorno) {
            this.txtFornecedor.Limpar();
            this.txtFornecedor.LimparParametros();
            MostrarAlerta("Este fornecedor não pertece a empresa selecionada!");
            this.txtFornecedor.Focus();
            return;
        }
    };
    C_Produt_Old.prototype.OnTextBoxPrecoCustoChange = function () {
        return this.AtualizarValoresProduto();
    };
    C_Produt_Old.prototype.OnTextBoxCodigoBarrasChange = function () {
        var parametros;
        var retorno;
        parametros = {
            codProduto: this.txtCodigo.GetText().CNum(),
            codBarras: this.txtCodigoBarras.GetText()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GerarCodigoBarras", parametros);
        this.txtCodigoBarras.SetText(retorno);
        parametros = {
            codProduto: this.txtCodigo.GetText().CNum(),
            codBarras: this.txtCodigoBarras.GetText()
        };
        var codProduto = this.ExecutarFuncaoServerSideSynch("IsCodigoBarrasUtilizado", parametros);
        if (codProduto > 0) {
            this.hdnCodProduto.value = codProduto.toString();
            this.Modal.AbrirClient("Este Código de Barras já está cadastrado para o produto " + codProduto + " Deseja visualizá-lo?", MouraModalDialogBotoes.Sim | MouraModalDialogBotoes.Nao, $.proxy(this.OnRespostaVerProdutoCodigoBarras, this));
        }
        //if (this.ExecutarFuncaoServerSideSynch("IsCodBarrasIgualCodProduto", parametros)) {
        //    this.hdnCodProduto.value = codProduto.toString();
        //    this.Modal.AbrirClient("O Código de barras informado é igual ao código de um produto existente no banco de dados. Informe um novo código de barras.",
        //        MouraModalDialogBotoes.OK, null);
        //}
    };
    C_Produt_Old.prototype.OnRespostaVerProdutoCodigoBarras = function (botaoSelecionado) {
        if (botaoSelecionado == MouraModalDialogBotoes.Sim) {
            this.btnBuscarProduto.DoClick();
        }
    };
    C_Produt_Old.prototype.OnTextBoxPrecoVendaChange = function () {
        this.AtualizarMargem();
        this.AtualizarMarkup();
        if (this.txtPrecoVenda.Textbox.value.CNum() == 0) {
            this.txtPrecoVenda.Textbox.value = "";
        }
        else if (this.txtPrecoPorcentagem && this.txtPrecoPorcentagem.Textbox) {
            this.txtPrecoPorcentagem.Textbox.value = "";
        }
        var listaPrecosLocal = this.ListaPrecos;
        for (var x = 0; x < listaPrecosLocal.length; x++) {
            var preco = listaPrecosLocal[x];
            if (preco.Margem_Lista >= 0 && preco.Preco_Base_Lista == "Preco_Produto") {
                if (preco.Operacao_Subtrair_Lista) {
                    preco.Valor_Produto_Preco = this.txtPrecoVenda.GetText().CNum() - (preco.Margem_Lista / 100) * this.txtPrecoVenda.GetText().CNum();
                }
                else {
                    preco.Valor_Produto_Preco = this.txtPrecoVenda.GetText().CNum() + (preco.Margem_Lista / 100) * this.txtPrecoVenda.GetText().CNum();
                }
            }
            if (preco.Custo_Produto_Preco <= 0) {
                preco.Custo_Produto_Preco = this.txtPrecoCusto.GetText().CNum();
            }
        }
        this.ListaPrecos = listaPrecosLocal;
        //this.GridPrecos.Grid.PerformCallback();
        this.GridPrecos.PerformCallback();
    };
    C_Produt_Old.prototype.AtualizarValoresProduto = function () {
        if (this.hdnCampoAtualizar.value == "M") {
            this.AtualizarMargem();
            this.AtualizarMarkup();
        }
        else {
            this.AtualizarValorVenda();
        }
    };
    C_Produt_Old.prototype.AtualizarValorVenda = function () {
        var precoVenda;
        var parametros;
        parametros = {
            precoCusto: this.txtPrecoCusto.GetText().CNum(),
            margem: this.txtMarkup_P.GetText().CNum()
        };
        precoVenda = this.ExecutarFuncaoServerSideSynch("ObterPrecoVenda", parametros);
        this.txtPrecoVenda.Textbox.value = precoVenda.Format(this.txtPrecoVenda.QuantidadeCasas);
        this.cbpListaPrecos.CallBackPanel.PerformCallback("AtualizarValorListas");
    };
    C_Produt_Old.prototype.AtualizarMarkup = function () {
        var MarkUp;
        var Lucro;
        var Custo;
        Custo = this.txtPrecoCusto.GetText().CNum();
        Lucro = this.txtPrecoVenda.GetText().CNum() - Custo;
        if (Custo > 0) {
            MarkUp = ((Lucro / Custo) * 100);
        }
        ;
        this.txtMarkup_P.SetText(MarkUp.Format(2));
    };
    C_Produt_Old.prototype.AtualizarMargem = function () {
        var margem;
        var parametros;
        parametros = {
            precoCusto: this.txtPrecoCusto.GetText().CNum(),
            precoVenda: this.txtPrecoVenda.GetText().CNum()
        };
        margem = this.ExecutarFuncaoServerSideSynch("ObterMargemProduto", parametros);
        if (this.hdnCalcularMargem.value == "1") {
            this.txtMarkup_P.Textbox.value = margem.Format(this.txtMarkup_P.QuantidadeCasas);
        }
        if (this.txtMargemReal && this.txtMargemReal.Textbox) {
            this.txtMargemReal.Textbox.value = margem.Format(this.txtMargemReal.QuantidadeCasas);
        }
        this.cbpListaPrecos.CallBackPanel.PerformCallback("AtualizarMargemListas");
    };
    C_Produt_Old.prototype.CalcularDolar = function () {
        var valor;
        valor = this.hdnCotacaoDolar.value.CNum() * this.txtPrecoDolar.GetText().CNum();
        this.txtPrecoCusto.Textbox.value = valor.Format(this.txtPrecoCusto.QuantidadeCasas);
        this.txtPrecoVenda.Textbox.value = (this.txtPrecoCusto.Textbox.value.CNum() * (1 + (this.txtMarkup_P.Textbox.value.CNum() / 100))).Format(this.txtPrecoVenda.QuantidadeCasas);
    };
    C_Produt_Old.prototype.CorrigirCamposFarmaciaPopular = function () {
        if (this.chkFarmaciaPopular.Check.checked) {
            this.txtQtdeCaixaFarmacia.Textbox.readOnly = false;
            this.chkGratuidade.Check.disabled = false;
        }
        else {
            this.txtQtdeCaixaFarmacia.Textbox.value = "0".FormatNumber(this.txtQtdeCaixaFarmacia.QuantidadeCasas);
            this.txtQtdeCaixaFarmacia.Textbox.readOnly = true;
            this.chkGratuidade.Check.checked = false;
            this.chkGratuidade.Check.disabled = true;
        }
        this.CorrigirCamposGratuidade();
    };
    C_Produt_Old.prototype.CorrigirCamposGratuidade = function () {
        if (this.chkGratuidade.Check.checked) {
            this.txtValorMaxAprovadoMS.Textbox.readOnly = false;
        }
        else {
            this.txtValorMaxAprovadoMS.Textbox.readOnly = true;
            this.txtValorMaxAprovadoMS.Textbox.value = "0".FormatNumber(this.txtValorMaxAprovadoMS.QuantidadeCasas);
            this.txtValorUnitarioCaixa.Textbox.value = "0".FormatNumber(this.txtValorUnitarioCaixa.QuantidadeCasas);
            if (this.chkFarmaciaPopular.Check.checked) {
                if (this.txtQtdeCaixaFarmacia.GetText().CNum() > 0) {
                    this.txtValorMaxAprovadoMS.Textbox.value = (this.txtPrecoVenda.GetText().CNum() / this.txtQtdeCaixaFarmacia.GetText().CNum()).Format(5);
                }
                this.txtValorUnitarioCaixa.Textbox.value = (this.txtPrecoVenda.GetText().CNum()).Format(2);
            }
        }
    };
    C_Produt_Old.prototype.OnTextBoxQtdeCaixaFarmaciaChange = function () {
        var valor;
        if (this.chkGratuidade.Check.checked) {
            valor = 0;
            this.txtValorMaxAprovadoMS.SetText(valor.Format(this.txtValorMaxAprovadoMS.QuantidadeCasas));
            this.txtValorUnitarioCaixa.SetText(valor.Format(this.txtValorMaxAprovadoMS.QuantidadeCasas));
            return;
        }
        if (this.txtQtdeCaixaFarmacia.GetText().CNum() > 0) {
            valor = this.txtPrecoVenda.GetText().CNum() / this.txtQtdeCaixaFarmacia.GetText().CNum();
            this.txtValorMaxAprovadoMS.SetText(valor.Format(5));
            this.txtValorUnitarioCaixa.Textbox.value = this.txtPrecoVenda.GetText();
            return;
        }
    };
    C_Produt_Old.prototype.OnTextBoxValorMaxAprovadoMS = function () {
        var valor;
        valor = this.txtValorMaxAprovadoMS.GetText().CNum() * this.txtQtdeCaixaFarmacia.GetText().CNum();
        this.txtValorUnitarioCaixa.SetText(valor.Format(this.txtValorUnitarioCaixa.QuantidadeCasas));
    };
    C_Produt_Old.prototype.OnTextBoxTabelaPrecoChange = function () {
        var precoVenda;
        var parametros;
        parametros = {
            codTabela: this.txtTabelaPreco.GetText().CNum()
        };
        precoVenda = this.ExecutarFuncaoServerSideSynch("ObterPrecoTabela", parametros);
        //this.AtualizarValoresProduto();
        if (precoVenda > 0) {
            this.txtPrecoVenda.Textbox.value = precoVenda.Format(this.txtPrecoVenda.QuantidadeCasas);
        }
        else if (precoVenda == -1) {
            this.txtTabelaPreco.SetText("");
            MostrarAlerta("Tabela de Preço não cadastrada.");
        }
        else {
            this.txtTabelaPreco.SetText("");
        }
        this.AtualizarMargem();
    };
    return C_Produt_Old;
}(MouraPageCadastro));
var c_Produt_Old = new C_Produt_Old;
//# sourceMappingURL=C_Produt_Old.js.map