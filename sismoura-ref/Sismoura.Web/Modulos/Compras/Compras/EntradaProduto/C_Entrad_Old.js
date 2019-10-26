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
var C_Entrad_Old = /** @class */ (function (_super) {
    __extends(C_Entrad_Old, _super);
    function C_Entrad_Old() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.respondeuContasPagar = false;
        return _this;
    }
    Object.defineProperty(C_Entrad_Old.prototype, "grdItens", {
        get: function () {
            return window["grdProduto_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "cboDeposito", {
        get: function () {
            return window['cboDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "btnAdicionarProduto", {
        get: function () {
            return window["btnAdicionarProduto_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "btnAdicionarServico", {
        get: function () {
            return window["btnAdicionarServico_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "mdProdutos", {
        get: function () {
            return window["mdProdutos_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "mdServicos", {
        get: function () {
            return window["mdServicos_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "mdImportarXML", {
        get: function () {
            return window["mdImportarXML_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtProduto", {
        get: function () {
            return window["txtProduto_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtServico", {
        get: function () {
            return window["txtServico_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtNota", {
        get: function () {
            return window["txtNota_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtICMSServP", {
        get: function () {
            return window["txtICMSServP_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtICMSServR", {
        get: function () {
            return window["txtICMSServR_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtISSP", {
        get: function () {
            return window["txtISSP_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtISSR", {
        get: function () {
            return window["txtISSR_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtCifFob", {
        get: function () {
            return window["txtCifFob_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "cboTipoServico", {
        get: function () {
            return window["cboTipoServico_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtAliquotaPISServico", {
        get: function () {
            return window["txtAliquotaPISServico_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtValorPISServico", {
        get: function () {
            return window["txtValorPISServico_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtSerie", {
        get: function () {
            return window["txtSerie_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtFornecedor", {
        get: function () {
            return window["txtFornecedor_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "hdnCodigo", {
        get: function () {
            return $("#hdnCodigo")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "btnBuscarNota", {
        get: function () {
            return window["btnBuscarNota_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtQuantidade", {
        get: function () {
            return window["txtQuantidade_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtValorUnitario", {
        get: function () {
            return window["txtValorUnitario_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "lblSubTotal", {
        get: function () {
            return window["lblSubTotal_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtDescontoR", {
        get: function () {
            return window["txtDescontoR_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtEncargos", {
        get: function () {
            return window["txtEncargos_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtDescontoP", {
        get: function () {
            return window["txtDescontoP_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtTotalProduto", {
        get: function () {
            return window["txtTotalProduto_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtQtdeServico", {
        get: function () {
            return window["txtQtdeServico_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtUnitarioServico", {
        get: function () {
            return window["txtUnitarioServico_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "lblTotalServico", {
        get: function () {
            return window["lblTotalServico_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "cboCST", {
        get: function () {
            return window["cboCST_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "cboTipoDias", {
        get: function () {
            return window["cboTipoDias_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtBaseICMSR", {
        get: function () {
            return window["txtBaseICMSR_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtICMS", {
        get: function () {
            return window["txtICMS_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtValorICMSR", {
        get: function () {
            return window["txtValorICMSR_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtBaseIcmsStR", {
        get: function () {
            return window["txtBaseIcmsStR_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtIcmsStP", {
        get: function () {
            return window["txtIcmsStP_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtIcmsStR", {
        get: function () {
            return window["txtIcmsStR_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtDiasVencimento", {
        get: function () {
            return window["txtDiasVencimento_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtVencInicial", {
        get: function () {
            return window["txtVencInicial_TextBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtDataEmissaoD", {
        get: function () {
            return window["txtDataEmissaoD_TextBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "hdnEntradaDataEmissao", {
        get: function () {
            return $("#hdnEntradaDataEmissao")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "hdnXmlCadastrado", {
        get: function () {
            return $("#hdnXmlCadastrado")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtDias", {
        get: function () {
            return window["txtDias_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "cboModeloNF", {
        get: function () {
            return window["cboModeloNF_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtChaveNFE", {
        get: function () {
            return window["txtChaveNFE_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "cbpImportarXml", {
        get: function () {
            return window["cbpImportarXml_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "cboTanque", {
        get: function () {
            return window["cboTanque_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "cboCombustivel", {
        get: function () {
            return window["cboCombustivel_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "hdnEmpresaCombustivel", {
        get: function () {
            return $("#hdnEmpresaCombustivel")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "hdnPossuiContasPagar", {
        get: function () {
            return $("#hdnPossuiContasPagar")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "lblCombustivelRestante", {
        get: function () {
            return window["lblCombustivelRestante_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "hdnCombustiveis", {
        get: function () {
            return $("#hdnCombustiveis")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "hdnRateioCombustiveis", {
        get: function () {
            return $("#hdnRateioCombustiveis")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtQtdTanque", {
        get: function () {
            return window['txtQtdTanque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "cboSTPis", {
        get: function () {
            return window['cboSTPis_comboBox'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "cboSTCOFINS", {
        get: function () {
            return window['cboSTCOFINS_comboBox'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "cboSTPisServico", {
        get: function () {
            return window['cboSTPisServico_comboBox'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "cboSTCofinsServico", {
        get: function () {
            return window['cboSTCofinsServico_comboBox'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtBasePIS", {
        get: function () {
            return window['txtBasePIS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtAliquotaPIS", {
        get: function () {
            return window['txtAliquotaPIS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtValorPIS", {
        get: function () {
            return window['txtValorPIS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtBaseCOFINS", {
        get: function () {
            return window['txtBaseCOFINS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtAliquotaCOFINS", {
        get: function () {
            return window['txtAliquotaCOFINS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtValorCOFINS", {
        get: function () {
            return window['txtValorCOFINS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtAliquotaCOFINSServico", {
        get: function () {
            return window['txtAliquotaCOFINSServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtValorCofinsServico", {
        get: function () {
            return window['txtValorCofinsServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "cboSTIPI", {
        get: function () {
            return window['cboSTIPI_comboBox'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtIPIP", {
        get: function () {
            return window['txtIPIP_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtIPIR", {
        get: function () {
            return window['txtIPIR_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "txtCentroCusto", {
        get: function () {
            return window['txtCentroCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entrad_Old.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Entrad_Old.prototype.Init = function () {
        _super.prototype.Init.call(this);
        this.AdicionarEventosPagina();
        if (this.txtCentroCusto) {
            adicionarEventoMoura(this.txtCentroCusto.Procurou, this.OnDepoisBuscarCentroCusto, this);
        }
    };
    C_Entrad_Old.prototype.OnDepoisBuscarCentroCusto = function () {
        if (this.txtCentroCusto.GetText() != "") {
            var parametros;
            parametros = {
                codCentroCusto: this.txtCentroCusto.GetText().CNum(),
                codEmpresa: this.cboContaCorrente.GetEmpresa()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificarEmpresas", parametros);
            if (!retorno) {
                MostrarAlerta("Centro de Custo informado não está vinculada a empresa da conta corrente, utilizar a tela Cadastro de Centro de Custo para corrigir esta situação");
                this.txtCentroCusto.Limpar();
                this.txtCentroCusto.Focus();
                return;
            }
        }
    };
    C_Entrad_Old.prototype.OnComboBoxCombustivelChange = function () {
        if (!this.cboTanque || !this.cboCombustivel)
            return;
        var parametros;
        var itens;
        var valorRestante;
        parametros = {
            codCombustivel: this.cboCombustivel.GetValue(),
            codEmpresa: this.hdnEmpresaCombustivel.value.CNum()
        };
        itens = this.ExecutarFuncaoServerSideSynch("PreencherComboTanque", parametros);
        this.cboTanque.ClearItems();
        for (var x = 0; x < itens.length; x++) {
            this.cboTanque.AddItem(itens[x].Descricao, itens[x].Codigo, "");
        }
        if (this.cboTanque.GetItemCount() == 1) {
            this.cboTanque.SetSelectedIndex(0);
        }
        else {
            this.cboTanque.SetText("");
        }
        //parametros = {
        //    codCombustivel: this.cboCombustivel.GetValue(),
        //    listaDisponiveis: this.hdnCombustiveis.value,
        //    listaAdicionados: this.hdnRateioCombustiveis.value
        //}
        //if (this.lblCombustivelRestante) {
        //    valorRestante = this.ExecutarFuncaoServerSideSynch("'QuantidadeCombustivelRestante", parametros);
        //    this.lblCombustivelRestante.Text = valorRestante.Format(this.txtQtdTanque.QuantidadeCasas);
        //} else {
        //    this.lblCombustivelRestante.Text = "";
        //}
    };
    C_Entrad_Old.prototype.OnComboBoxModeloSelectedIndexChanged = function () {
        if (this.cboModeloNF.GetValue() == 55 || this.cboModeloNF.GetValue() == 57) {
            this.txtChaveNFE.Textbox.readOnly = false;
        }
        else {
            this.txtChaveNFE.SetText("");
            this.txtChaveNFE.Textbox.readOnly = true;
        }
    };
    C_Entrad_Old.prototype.OnComboTipoDiasSelectedIndexChanged = function () {
        if (this.cboTipoDias.GetValue() == "V" || this.txtVencInicial.GetDate() == null) {
            this.txtDias.Textbox.value = "0";
        }
        else {
            this.txtDias.Textbox.value = this.txtVencInicial.GetDate().getDate().toString();
        }
    };
    C_Entrad_Old.prototype.OnTextBoxDiasVencimentoChange = function () {
        var dataResult;
        dataResult = new Date();
        dataResult.setDate(this.dataBase().getDate() + this.txtDiasVencimento.GetText().CNum());
        this.txtVencInicial.SetDate(dataResult);
    };
    C_Entrad_Old.prototype.OntextBoxVencInicialChange = function () {
        var diff;
        if (this.txtVencInicial.GetDate() != null) {
            diff = this.daysBetween(this.dataBase(), this.txtVencInicial.GetDate());
        }
        else {
            diff = 0;
        }
        this.txtDiasVencimento.Textbox.value = diff.toString();
    };
    C_Entrad_Old.prototype.daysBetween = function (startDate, endDate) {
        // 24 * 60 * 60 * 1000;
        var millisecDia = 86400000;
        return Math.round((endDate - startDate) / millisecDia);
    };
    C_Entrad_Old.prototype.dataBase = function () {
        var base;
        // 0 = Data atual
        // 1 = Data de emissão
        if (this.hdnEntradaDataEmissao.value.CNum() == 0 || this.txtDataEmissaoD.GetDate() == null) {
            base = new Date();
        }
        else {
            base = this.txtDataEmissaoD.GetDate();
        }
        return new Date(base.getFullYear(), base.getMonth(), base.getDate());
    };
    C_Entrad_Old.prototype.OnComboBoxCSTSelectedIndexChanged = function () {
        var parametros;
        var habilitarIcms;
        var habilitarIcmsSt;
        var zero;
        zero = 0;
        parametros = {
            cst: this.cboCST.GetValue()
        };
        habilitarIcms = this.ExecutarFuncaoServerSideSynch("HabilitarCamposIcms", parametros);
        habilitarIcmsSt = this.ExecutarFuncaoServerSideSynch("HabilitarCamposIcmsSt", parametros);
        // ICMS
        if (habilitarIcms) {
            this.txtBaseICMSR.Textbox.readOnly = false;
            this.txtICMS.Textbox.readOnly = false;
        }
        else {
            this.txtBaseICMSR.Textbox.value = zero.Format(this.txtBaseICMSR.QuantidadeCasas);
            this.txtBaseICMSR.Textbox.readOnly = true;
            this.txtICMS.Textbox.value = zero.Format(this.txtICMS.QuantidadeCasas);
            this.txtICMS.Textbox.readOnly = true;
            this.txtValorICMSR.Textbox.value = zero.Format(this.txtValorICMSR.QuantidadeCasas);
        }
        //ICMS ST
        if (habilitarIcmsSt) {
            this.txtBaseIcmsStR.Textbox.readOnly = false;
            this.txtIcmsStP.Textbox.readOnly = false;
            this.txtIcmsStR.Textbox.readOnly = false;
        }
        else {
            this.txtBaseIcmsStR.Textbox.value = zero.Format(this.txtBaseIcmsStR.QuantidadeCasas);
            this.txtBaseIcmsStR.Textbox.readOnly = true;
            this.txtIcmsStP.Textbox.value = zero.Format(this.txtIcmsStP.QuantidadeCasas);
            this.txtIcmsStP.Textbox.readOnly = true;
            this.txtIcmsStR.Textbox.value = zero.Format(this.txtIcmsStR.QuantidadeCasas);
            this.txtIcmsStR.Textbox.readOnly = true;
        }
        this.OnTextBoxQuantidadeChange();
    };
    C_Entrad_Old.prototype.OnTextBoxValorServicoChange = function () {
        var v = 0;
        v = this.txtUnitarioServico.GetText().CNum() * this.txtQtdeServico.GetText().CNum();
        this.lblTotalServico.Text = v.Format(2);
    };
    C_Entrad_Old.prototype.OnTextBoxtxtDescontoPChange = function () {
        var n = 0;
        if (this.txtDescontoP.GetText().CNum() >= 100) {
            MostrarAlerta("O desconto não pode ser maior ou igual a 100 %");
            this.txtDescontoP.Textbox.value = n.Format(2);
            this.txtDescontoR.Textbox.value = n.Format(2);
            this.txtDescontoP.Textbox.focus();
        }
        else {
            this.CalcularValorDesconto();
        }
        return this.CalcularTotalProduto();
    };
    C_Entrad_Old.prototype.CalcularValorDesconto = function () {
        var n = 0;
        n = (this.txtDescontoP.GetText().CNum() / 100) * (this.txtValorUnitario.GetText().CNum() * this.txtQuantidade.GetText().CNum());
        this.txtDescontoR.Textbox.value = n.Format(2);
    };
    C_Entrad_Old.prototype.CalcularValorDescontoPorc = function () {
        var porc = this.txtDescontoP.GetText().CNum();
        var desc = this.txtDescontoR.GetText().CNum();
        var valorProduto = this.txtValorUnitario.GetText().CNum();
        if (porc == 0) {
            if (desc > 0) {
                porc = (100 * desc) / (valorProduto * (100 - porc) / 100);
            }
        }
        else {
            if (desc > 0) {
                porc = (desc * 100 / valorProduto);
            }
        }
        this.txtDescontoP.Textbox.value = porc.Format(2);
    };
    C_Entrad_Old.prototype.OnTextBoxDescontoRChange = function () {
        this.CalcularValorDescontoPorc();
        this.CalcularTotalProduto();
    };
    C_Entrad_Old.prototype.OnTextBoxEncargosChange = function () {
        this.CalcularTotalProduto();
    };
    C_Entrad_Old.prototype.OnTextBoxQuantidadeChange = function () {
        this.CalcularValorDesconto();
        this.CalcularValorDescontoPorc();
        this.CalcularSubTotal();
        this.CalcularTotalProduto();
        this.PreencherBaseImpostos();
    };
    C_Entrad_Old.prototype.OnTextBoxValorUnitario = function () {
        this.CalcularSubTotal();
        this.CalcularValorDesconto();
        this.CalcularValorDescontoPorc();
        this.CalcularTotalProduto();
        this.PreencherBaseImpostos();
    };
    C_Entrad_Old.prototype.CalcularSubTotal = function () {
        var valor;
        valor = this.txtQuantidade.GetText().CNum() * this.txtValorUnitario.GetText().CNum();
        this.lblSubTotal.Text = valor.Format(2);
    };
    C_Entrad_Old.prototype.CalcularTotalProduto = function () {
        var valor;
        valor = (this.txtQuantidade.GetText().CNum() * this.txtValorUnitario.GetText().CNum() - this.txtDescontoR.GetText().CNum() + this.txtEncargos.GetText().CNum());
        this.txtTotalProduto.Textbox.value = valor.Format(this.txtTotalProduto.QuantidadeCasas);
    };
    C_Entrad_Old.prototype.OnTextBoxNotaChange = function () {
        return this.ObterInformacoesNota();
    };
    C_Entrad_Old.prototype.OnTextBoxSerieChange = function () {
        return this.ObterInformacoesNota();
    };
    C_Entrad_Old.prototype.OnTextBoxFornecedorPesquisou = function () {
        return this.ObterInformacoesNota();
    };
    C_Entrad_Old.prototype.ObterInformacoesNota = function () {
        var parametros;
        if (this.txtNota.GetText().CNum() == 0 || this.txtFornecedor.GetText().CNum() == 0)
            return;
        parametros = {
            numeroNota: this.txtNota.GetText().CNum(),
            serie: this.txtSerie.GetText(),
            codFornecedor: this.txtFornecedor.GetText().CNum()
        };
        this.hdnCodigo.value = this.ExecutarFuncaoServerSideSynch("ObterChaveNota", parametros);
        if (this.btnBuscarNota && this.hdnCodigo.value.CNum() > 0) {
            this.btnBuscarNota.DoClick();
        }
    };
    C_Entrad_Old.prototype.OnClickBotaoAdicionarProduto = function (s, e) {
        e.processOnServer = false;
        if (this.mdProdutos) {
            this.mdProdutos.ModalDialog.Show();
            this.OncboSTCOFINSSelectedIndexChanged();
            this.OncboSTPisSelectedIndexChanged();
            this.OncboSTIPISelectedIndexChanged();
            if (this.txtProduto) {
                this.txtProduto.Focus();
            }
        }
        return false;
    };
    C_Entrad_Old.prototype.OnClickBotaoAdicionarServico = function (s, e) {
        e.processOnServer = false;
        if (this.mdServicos) {
            this.mdServicos.ModalDialog.Show();
            this.OnComboBoxTipoServicoChange();
            this.OncboSTPisServicoSelectedIndexChanged();
            this.OncboSTCOFINSServicoSelectedIndexChanged();
            if (this.txtServico) {
                this.txtServico.Focus();
            }
        }
        return false;
    };
    C_Entrad_Old.prototype.OnEndCallBackImportarXml = function () {
        if (this.hdnXmlCadastrado.value.CNum() > 0) {
            this.mdImportarXML.ModalDialog.Hide();
            this.btnBuscarNota.DoClick();
        }
    };
    C_Entrad_Old.prototype.OntxtBaseICMSRChange = function () {
        this.RecalcularValorIcms();
    };
    C_Entrad_Old.prototype.OntxtICMSChange = function () {
        this.RecalcularValorIcms();
    };
    C_Entrad_Old.prototype.RecalcularValorIcms = function () {
        if (!this.txtBaseICMSR || !this.txtICMS || !this.txtValorICMSR)
            return;
        var valorIcms;
        valorIcms = (this.txtICMS.GetText().CNum() / 100) * this.txtBaseICMSR.GetText().CNum();
        this.txtValorICMSR.Textbox.value = valorIcms.Format(this.txtValorICMSR.QuantidadeCasas);
    };
    C_Entrad_Old.prototype.OntxtBaseIcmsStRChange = function () {
        this.RecalcularValorIcmsSt();
    };
    C_Entrad_Old.prototype.OntxtIcmsStPChange = function () {
        this.RecalcularValorIcmsSt();
    };
    C_Entrad_Old.prototype.RecalcularValorIcmsSt = function () {
        if (!this.txtBaseIcmsStR || !this.txtIcmsStP || !this.txtIcmsStR)
            return;
        var valorSt;
        valorSt = (this.txtIcmsStP.GetText().CNum() / 100) * this.txtBaseIcmsStR.GetText().CNum();
        this.txtIcmsStR.Textbox.value = valorSt.Format(this.txtIcmsStR.QuantidadeCasas);
    };
    C_Entrad_Old.prototype.OncboSTPisSelectedIndexChanged = function () {
        var zero = 0;
        if (this.cboSTPis.GetValue() == "70" || this.cboSTPis.GetValue() == "71" || this.cboSTPis.GetValue() == "72" || this.cboSTPis.GetValue() == "73" || this.cboSTPis.GetValue() == "74" || this.cboSTPis.GetValue() == "75") {
            this.txtBasePIS.Textbox.readOnly = true;
            this.txtBasePIS.Textbox.value = zero.Format(this.txtBasePIS.QuantidadeCasas);
            this.txtAliquotaPIS.Textbox.readOnly = true;
            this.txtAliquotaPIS.Textbox.value = zero.Format(this.txtAliquotaPIS.QuantidadeCasas);
            this.txtValorPIS.Textbox.readOnly = true;
            this.txtValorPIS.Textbox.value = zero.Format(this.txtValorPIS.QuantidadeCasas);
        }
        else {
            this.txtBasePIS.Textbox.readOnly = false;
            this.txtAliquotaPIS.Textbox.readOnly = false;
            this.txtValorPIS.Textbox.readOnly = false;
        }
    };
    C_Entrad_Old.prototype.OncboSTPisServicoSelectedIndexChanged = function () {
        var zero = 0;
        if (this.cboSTPisServico.GetValue() == "70" || this.cboSTPisServico.GetValue() == "71" || this.cboSTPisServico.GetValue() == "72" || this.cboSTPisServico.GetValue() == "73" || this.cboSTPisServico.GetValue() == "74" || this.cboSTPisServico.GetValue() == "75") {
            this.txtAliquotaPISServico.Textbox.readOnly = true;
            this.txtAliquotaPISServico.Textbox.value = zero.Format(this.txtAliquotaPIS.QuantidadeCasas);
            this.txtValorPISServico.Textbox.readOnly = true;
            this.txtValorPISServico.Textbox.value = zero.Format(this.txtValorPIS.QuantidadeCasas);
        }
        else {
            this.txtAliquotaPISServico.Textbox.readOnly = false;
            this.txtValorPISServico.Textbox.readOnly = false;
        }
    };
    C_Entrad_Old.prototype.OncboSTCOFINSSelectedIndexChanged = function () {
        var zero = 0;
        if (this.cboSTCOFINS.GetValue() == "70" || this.cboSTCOFINS.GetValue() == "71" || this.cboSTCOFINS.GetValue() == "72" || this.cboSTCOFINS.GetValue() == "73" || this.cboSTCOFINS.GetValue() == "74" || this.cboSTCOFINS.GetValue() == "75") {
            this.txtBaseCOFINS.Textbox.readOnly = true;
            this.txtBaseCOFINS.Textbox.value = zero.Format(this.txtBaseCOFINS.QuantidadeCasas);
            this.txtAliquotaCOFINS.Textbox.readOnly = true;
            this.txtAliquotaCOFINS.Textbox.value = zero.Format(this.txtAliquotaCOFINS.QuantidadeCasas);
            this.txtValorCOFINS.Textbox.readOnly = true;
            this.txtValorCOFINS.Textbox.value = zero.Format(this.txtValorCOFINS.QuantidadeCasas);
        }
        else {
            this.txtBaseCOFINS.Textbox.readOnly = false;
            this.txtAliquotaCOFINS.Textbox.readOnly = false;
            this.txtValorCOFINS.Textbox.readOnly = false;
        }
    };
    C_Entrad_Old.prototype.OncboSTCOFINSServicoSelectedIndexChanged = function () {
        var zero = 0;
        if (this.cboSTCofinsServico.GetValue() == "70" || this.cboSTCofinsServico.GetValue() == "71" || this.cboSTCofinsServico.GetValue() == "72" || this.cboSTCofinsServico.GetValue() == "73" || this.cboSTCofinsServico.GetValue() == "74" || this.cboSTCofinsServico.GetValue() == "75") {
            this.txtAliquotaCOFINSServico.Textbox.readOnly = true;
            this.txtAliquotaCOFINSServico.Textbox.value = zero.Format(this.txtAliquotaCOFINS.QuantidadeCasas);
            this.txtValorCofinsServico.Textbox.readOnly = true;
            this.txtValorCofinsServico.Textbox.value = zero.Format(this.txtValorCOFINS.QuantidadeCasas);
        }
        else {
            this.txtAliquotaCOFINSServico.Textbox.readOnly = false;
            this.txtValorCofinsServico.Textbox.readOnly = false;
        }
    };
    C_Entrad_Old.prototype.OntxtBasePisChanged = function () {
        this.RecalcularValorPis();
    };
    C_Entrad_Old.prototype.OntxtAliquotaPisChanged = function () {
        this.RecalcularValorPis();
    };
    C_Entrad_Old.prototype.RecalcularValorPis = function () {
        var valorPis;
        valorPis = (this.txtAliquotaPIS.GetText().CNum() / 100) * this.txtBasePIS.GetText().CNum();
        this.txtValorPIS.Textbox.value = valorPis.Format(this.txtValorPIS.QuantidadeCasas);
    };
    C_Entrad_Old.prototype.OntxtBaseCOFINSChanged = function () {
        this.RecalcularValorCofins();
    };
    C_Entrad_Old.prototype.OntxtAliquotaCOFINS = function () {
        this.RecalcularValorCofins();
    };
    C_Entrad_Old.prototype.RecalcularValorCofins = function () {
        var valorCofins;
        valorCofins = (this.txtAliquotaCOFINS.GetText().CNum() / 100) * this.txtBaseCOFINS.GetText().CNum();
        this.txtValorCOFINS.Textbox.value = valorCofins.Format(this.txtValorCOFINS.QuantidadeCasas);
    };
    C_Entrad_Old.prototype.OncboSTIPISelectedIndexChanged = function () {
        var zero;
        zero = 0;
        if (this.cboSTIPI.GetValue() == "01" || this.cboSTIPI.GetValue() == "02" || this.cboSTIPI.GetValue() == "03" || this.cboSTIPI.GetValue() == "04" || this.cboSTIPI.GetValue() == "05") {
            this.txtIPIP.Textbox.readOnly = true;
            this.txtIPIP.Textbox.value = zero.Format(this.txtIPIP.QuantidadeCasas);
            this.txtIPIR.Textbox.readOnly = true;
            this.txtIPIR.Textbox.value = zero.Format(this.txtIPIR.QuantidadeCasas);
        }
        else {
            this.txtIPIP.Textbox.readOnly = false;
            this.txtIPIR.Textbox.readOnly = false;
        }
    };
    C_Entrad_Old.prototype.OntxtIPIPChanged = function () {
        var valorIpi;
        valorIpi = (this.txtIPIP.GetText().CNum() / 100) * (this.txtValorUnitario.GetText().CNum() * this.txtQuantidade.GetText().CNum());
        this.txtIPIR.Textbox.value = valorIpi.Format(this.txtIPIR.QuantidadeCasas);
    };
    C_Entrad_Old.prototype.OntxtIPIRChanged = function () {
        var aliqIpi;
        var valorTotal;
        valorTotal = (this.txtValorUnitario.GetText().CNum() * this.txtQuantidade.GetText().CNum());
        if (valorTotal > 0) {
            aliqIpi = (this.txtIPIR.GetText().CNum() * 100) / valorTotal;
        }
        else {
            aliqIpi = 0;
        }
        this.txtIPIP.Textbox.value = aliqIpi.Format(this.txtIPIP.QuantidadeCasas);
    };
    C_Entrad_Old.prototype.PreencherBaseImpostos = function () {
        if (this.txtBaseICMSR && this.txtBaseICMSR.Textbox && this.txtBaseICMSR.Textbox.readOnly == false) {
            this.txtBaseICMSR.Textbox.value = this.txtTotalProduto.GetText();
            this.RecalcularValorIcms();
        }
        if (this.txtBaseIcmsStR && this.txtBaseIcmsStR.Textbox && this.txtBaseIcmsStR.Textbox.readOnly == false) {
            this.txtBaseIcmsStR.Textbox.value = this.txtTotalProduto.GetText();
            this.RecalcularValorIcmsSt();
        }
        if (this.txtBasePIS && this.txtBasePIS.Textbox && this.txtBasePIS.Textbox.readOnly == false) {
            this.txtBasePIS.Textbox.value = this.txtTotalProduto.GetText();
            this.RecalcularValorPis();
        }
        if (this.txtBaseCOFINS && this.txtBaseCOFINS.Textbox && this.txtBaseCOFINS.Textbox.readOnly == false) {
            this.txtBaseCOFINS.Textbox.value = this.txtTotalProduto.GetText();
            this.RecalcularValorCofins();
        }
    };
    C_Entrad_Old.prototype.AdicionarEventosPagina = function () {
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnComboBoxEmpresaChange, this);
        }
        if (this.cboCST) {
            adicionarEventoDevExpress(this.cboCST.SelectedIndexChanged, this.OnComboBoxCSTSelectedIndexChanged, this);
        }
        if (this.btnAdicionarProduto) {
            adicionarEventoMoura(this.btnAdicionarProduto.Click, this.OnClickBotaoAdicionarProduto, this);
        }
        if (this.btnAdicionarServico) {
            adicionarEventoMoura(this.btnAdicionarServico.Click, this.OnClickBotaoAdicionarServico, this);
        }
        if (this.txtNota) {
            adicionarEventoMoura(this.txtNota.TextChanged, this.OnTextBoxNotaChange, this);
        }
        if (this.txtSerie) {
            adicionarEventoMoura(this.txtSerie.TextChanged, this.OnTextBoxSerieChange, this);
        }
        if (this.txtFornecedor) {
            adicionarEventoMoura(this.txtFornecedor.Procurou, this.OnTextBoxFornecedorPesquisou, this);
        }
        if (this.txtQuantidade) {
            adicionarEventoMoura(this.txtQuantidade.TextChanged, this.OnTextBoxQuantidadeChange, this);
        }
        if (this.txtValorUnitario) {
            adicionarEventoMoura(this.txtValorUnitario.TextChanged, this.OnTextBoxValorUnitario, this);
        }
        if (this.txtDescontoR) {
            adicionarEventoMoura(this.txtDescontoR.TextChanged, this.OnTextBoxDescontoRChange, this);
        }
        if (this.txtEncargos) {
            adicionarEventoMoura(this.txtEncargos.TextChanged, this.OnTextBoxEncargosChange, this);
        }
        if (this.txtDescontoP) {
            adicionarEventoMoura(this.txtDescontoP.TextChanged, this.OnTextBoxtxtDescontoPChange, this);
        }
        if (this.txtUnitarioServico) {
            adicionarEventoMoura(this.txtUnitarioServico.TextChanged, this.OnTextBoxValorServicoChange, this);
        }
        if (this.txtQtdeServico) {
            adicionarEventoMoura(this.txtQtdeServico.TextChanged, this.OnTextBoxValorServicoChange, this);
        }
        if (this.txtDiasVencimento) {
            adicionarEventoMoura(this.txtDiasVencimento.TextChanged, this.OnTextBoxDiasVencimentoChange, this);
        }
        if (this.txtVencInicial) {
            adicionarEventoDevExpress(this.txtVencInicial.ValueChanged, this.OntextBoxVencInicialChange, this);
        }
        if (this.txtDataEmissaoD) {
            adicionarEventoDevExpress(this.txtDataEmissaoD.ValueChanged, this.OntextBoxVencInicialChange, this);
        }
        if (this.cboTipoDias) {
            adicionarEventoDevExpress(this.cboTipoDias.SelectedIndexChanged, this.OnComboTipoDiasSelectedIndexChanged, this);
        }
        if (this.cboTipoServico) {
            adicionarEventoDevExpress(this.cboTipoServico.Combo.SelectedIndexChanged, this.OnComboBoxTipoServicoChange, this);
        }
        if (this.txtISSP && this.txtISSR) {
            adicionarEventoMoura(this.txtISSP.TextChanged, this.OnTxtISSPorcChange, this);
        }
        if (this.txtAliquotaPISServico && this.txtValorPISServico) {
            adicionarEventoMoura(this.txtAliquotaPISServico.TextChanged, this.OnTxtPISPorcChange, this);
        }
        if (this.cboModeloNF) {
            adicionarEventoDevExpress(this.cboModeloNF.SelectedIndexChanged, this.OnComboBoxModeloSelectedIndexChanged, this);
        }
        if (this.cbpImportarXml && this.cbpImportarXml.CallBackPanel) {
            adicionarEventoDevExpress(this.cbpImportarXml.CallBackPanel.EndCallback, this.OnEndCallBackImportarXml, this);
        }
        if (this.cboCombustivel) {
            adicionarEventoDevExpress(this.cboCombustivel.SelectedIndexChanged, this.OnComboBoxCombustivelChange, this);
        }
        if (this.txtICMS) {
            adicionarEventoMoura(this.txtICMS.TextChanged, this.OntxtICMSChange, this);
        }
        if (this.txtBaseICMSR) {
            adicionarEventoMoura(this.txtBaseICMSR.TextChanged, this.OntxtBaseICMSRChange, this);
        }
        if (this.txtIcmsStP) {
            adicionarEventoMoura(this.txtIcmsStP.TextChanged, this.OntxtIcmsStPChange, this);
        }
        if (this.txtBaseIcmsStR) {
            adicionarEventoMoura(this.txtBaseIcmsStR.TextChanged, this.OntxtIcmsStPChange, this);
        }
        if (this.cboSTPis) {
            adicionarEventoDevExpress(this.cboSTPis.SelectedIndexChanged, this.OncboSTPisSelectedIndexChanged, this);
        }
        if (this.cboSTCOFINS) {
            adicionarEventoDevExpress(this.cboSTCOFINS.SelectedIndexChanged, this.OncboSTCOFINSSelectedIndexChanged, this);
        }
        if (this.cboSTPisServico) {
            adicionarEventoDevExpress(this.cboSTPisServico.SelectedIndexChanged, this.OncboSTPisServicoSelectedIndexChanged, this);
        }
        if (this.cboSTCofinsServico) {
            adicionarEventoDevExpress(this.cboSTCofinsServico.SelectedIndexChanged, this.OncboSTCOFINSServicoSelectedIndexChanged, this);
        }
        if (this.txtBasePIS) {
            adicionarEventoMoura(this.txtBasePIS.TextChanged, this.OntxtBasePisChanged, this);
        }
        if (this.txtAliquotaPIS) {
            adicionarEventoMoura(this.txtAliquotaPIS.TextChanged, this.OntxtAliquotaPisChanged, this);
        }
        if (this.txtBaseCOFINS) {
            adicionarEventoMoura(this.txtBaseCOFINS.TextChanged, this.OntxtBaseCOFINSChanged, this);
        }
        if (this.txtAliquotaCOFINS) {
            adicionarEventoMoura(this.txtAliquotaCOFINS.TextChanged, this.OntxtAliquotaCOFINS, this);
        }
        if (this.cboSTIPI) {
            adicionarEventoDevExpress(this.cboSTIPI.SelectedIndexChanged, this.OncboSTIPISelectedIndexChanged, this);
        }
        if (this.txtIPIP) {
            adicionarEventoMoura(this.txtIPIP.TextChanged, this.OntxtIPIPChanged, this);
        }
        if (this.txtIPIR) {
            adicionarEventoMoura(this.txtIPIR.TextChanged, this.OntxtIPIRChanged, this);
        }
        if (this.txtServico) {
            adicionarEventoMoura(this.txtServico.Procurou, this.OnPesquisouDadosServico, this);
        }
    };
    C_Entrad_Old.prototype.OnComboBoxEmpresaChange = function () {
        this.AtualizarDeposito();
    };
    C_Entrad_Old.prototype.AtualizarDeposito = function () {
        var parametros;
        var itens;
        parametros = {
            codEmpresa: this.cboEmpresa.GetValue(),
            inativo: false
        };
        itens = this.ExecutarFuncaoServerSideSynch("PreencherComboDeposito", parametros);
        if (this.cboDeposito && this.cboDeposito.Combo) {
            this.cboDeposito.ClearItems();
            for (var x = 0; x < itens.length; x++) {
                this.cboDeposito.Combo.AddItem(itens[x].Descricao, itens[x].Codigo, "");
            }
            this.cboDeposito.Combo.SetSelectedIndex(0);
        }
    };
    C_Entrad_Old.prototype.OnPesquisouDadosServico = function (s, e) {
        var parametros;
        var retorno;
        var valor = 0;
        parametros = {
            codServico: this.txtServico.GetText().CNum()
        };
        var entidadeServico = this.ExecutarFuncaoServerSideSynch("GetDadosServico", parametros);
        if (entidadeServico) {
            valor = entidadeServico.Preco_Custo;
        }
        this.txtUnitarioServico.SetText(valor.Format(ValoresSismoura.CasasDecimaisValor));
        this.OnTextBoxValorServicoChange();
        this.OnTxtISSPorcChange();
        this.OnTxtPISPorcChange();
    };
    C_Entrad_Old.prototype.OnTxtISSPorcChange = function () {
        var valor;
        valor = ((this.txtISSP.GetText().CNum() * this.lblTotalServico.Text.CNum()) / 100);
        this.txtISSR.SetText(valor.Format(ValoresSismoura.CasasDecimaisValor));
    };
    C_Entrad_Old.prototype.OnTxtPISPorcChange = function () {
        var valor;
        valor = ((this.txtAliquotaPISServico.GetText().CNum() * this.lblTotalServico.Text.CNum()) / 100);
        this.txtValorPISServico.SetText(valor.Format(ValoresSismoura.CasasDecimaisValor));
    };
    C_Entrad_Old.prototype.OnComboBoxTipoServicoChange = function () {
        if (this.cboTipoServico.GetValue() == 6) {
            this.txtICMSServP.Visible = true;
            this.txtICMSServR.Visible = true;
            this.txtCifFob.Visible = true;
            //this.txtISSP.Visible = true;
            //this.txtISSR.Visible = true;
        }
        else {
            this.txtICMSServP.Visible = false;
            this.txtICMSServR.Visible = false;
            this.txtCifFob.Visible = false;
            //this.txtISSP.Visible = false;
            //this.txtISSR.Visible = false;
        }
    };
    C_Entrad_Old.prototype.OnAntesDeletar = function () {
        if (!this.respondeuContasPagar) {
            if (this.hdnPossuiContasPagar.value == "1") {
                MsgBoxJS("Atenção! Existem contas a pagar relacionadas a essa entrada:<BR />" + this.hdnPossuiContasPagar.value + " Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.RespostaContasPagar, this));
                return false;
            }
        }
        else {
            this.respondeuContasPagar = false;
        }
        return _super.prototype.OnAntesDeletar.call(this);
    };
    C_Entrad_Old.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.OnComboBoxTipoServicoChange();
        this.respondeuContasPagar = false;
    };
    C_Entrad_Old.prototype.RespostaContasPagar = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.respondeuContasPagar = true;
            this.ClicarExcluir();
        }
    };
    return C_Entrad_Old;
}(MouraPageCadastro));
var c_Entrad_Old = new C_Entrad_Old();
//# sourceMappingURL=C_Entrad_Old.js.map