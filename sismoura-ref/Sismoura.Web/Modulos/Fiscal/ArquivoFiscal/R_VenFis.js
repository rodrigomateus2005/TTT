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
var R_VenFis = /** @class */ (function (_super) {
    __extends(R_VenFis, _super);
    function R_VenFis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_VenFis.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "cboEmissorCupom", {
        get: function () {
            return window['cboEmissorCupom_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "chkCPF", {
        get: function () {
            return window['chkCPF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "cboECF", {
        get: function () {
            return window['cboECF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "cboLista", {
        get: function () {
            return window['cboLista_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "cboTaxa_Tributaria", {
        get: function () {
            return window['cboTaxa_Tributaria_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "chkDiscriminar", {
        get: function () {
            return window['chkDiscriminar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "chkPIS_CONFINS", {
        get: function () {
            return window['chkPIS_CONFINS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "lstGrupoProduto", {
        get: function () {
            return window['lstGrupoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "grdResumido", {
        get: function () {
            return window['grdResumido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "grdDiscriminado", {
        get: function () {
            return window['grdDiscriminado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "grdPisCofins", {
        get: function () {
            return window['grdPisCofins_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "pntbRelacoes", {
        get: function () {
            return window['pntbRelacoes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "abaResumido", {
        get: function () {
            return window['abaResumido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "abaDiscriminado", {
        get: function () {
            return window['abaDiscriminado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "abaPisCofins", {
        get: function () {
            return window['abaPisCofins_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "lblICMSRetido", {
        get: function () {
            return window['lblICMSRetido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "lblICMSIsento", {
        get: function () {
            return window['lblICMSIsento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "lblICMSNormal", {
        get: function () {
            return window['lblICMSNormal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "lblTotalEmitido", {
        get: function () {
            return window['lblTotalEmitido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "lblTotalCancelado", {
        get: function () {
            return window['lblTotalCancelado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_VenFis.prototype, "lblValorTotalFinal", {
        get: function () {
            return window['lblValorTotalFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_VenFis.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.chkDiscriminar) {
            adicionarEventoMoura(this.chkDiscriminar.CheckChanged, this.OnVizualizarComponentes, this);
        }
        if (this.cboEmissorCupom || this.cboEmissorCupom.Combo) {
            adicionarEventoMoura(this.cboEmissorCupom.SelectedItemChanged, this.OnVizualizarComponentes, this);
        }
        if (this.lstEmpresa) {
            adicionarEventoMoura(this.lstEmpresa.SelectionChanged, this.OnVizualizarComponentes, this);
        }
        if (this.chkPIS_CONFINS) {
            adicionarEventoMoura(this.chkPIS_CONFINS.CheckChanged, this.OnVizualizarComponentes, this);
        }
        adicionarEventoMoura(this.grdResumido.CellPrepared, this.OnGridCellPrepared, this);
        adicionarEventoMoura(this.grdDiscriminado.CellPrepared, this.OnGridCellPrepared, this);
        adicionarEventoMoura(this.grdPisCofins.CellPrepared, this.OnGridCellPrepared, this);
    };
    R_VenFis.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_VenFis.prototype.OnVizualizarComponentes = function () {
        if (this.chkDiscriminar.Check.checked) {
            this.cboLista.Enabled = true;
            this.cboTaxa_Tributaria.Enabled = true;
            this.lstGrupoProduto.Visible = true;
            this.chkCPF.Enabled = false;
            this.chkCPF.Checked = false;
        }
        else {
            this.cboLista.Enabled = false;
            this.cboTaxa_Tributaria.Enabled = false;
            this.lstGrupoProduto.Visible = false;
            this.chkCPF.Enabled = true;
        }
        if (this.chkPIS_CONFINS.Check.checked) {
            this.lblTotalEmitido.Visible = false;
            this.lblTotalCancelado.Visible = false;
            this.lblValorTotalFinal.Visible = false;
        }
        else {
            this.lblTotalEmitido.Visible = true;
            this.lblTotalCancelado.Visible = true;
            this.lblValorTotalFinal.Visible = true;
            this.lblTotalEmitido.Text = "";
            this.lblTotalCancelado.Text = "";
            this.lblValorTotalFinal.Text = "";
        }
        if (this.cboEmissorCupom.GetText() == 'Impressora Fiscal') {
            this.cboECF.Visible = true;
            this.cboTaxa_Tributaria.Visible = true;
            this.lblTotalEmitido.SetTextLabelControl("Cupom Emitido");
            this.lblTotalCancelado.SetTextLabelControl("Cupom Cancelado");
            //recebe e trata a(s) empresa(s) selecionadas(s) para inserir nos parâmetros;
            var codEmpresas = this.lstEmpresa.GetValues();
            var empresas;
            if (codEmpresas) {
                empresas = codEmpresas.join(",");
            }
            var parametros = {
                empresas: empresas
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherCboECF", parametros);
            this.cboECF.ClearItems();
            if (retorno) {
                if (retorno.length > 0) {
                    this.cboECF.AddItem("--Todos--", "0", "");
                    for (var i in retorno)
                        this.cboECF.AddItem(retorno[i].Numero_Serie, retorno[i].Codigo, "");
                    this.cboECF.SetSelectedIndex(0);
                }
                else
                    this.cboECF.ClearItems();
            }
            else
                this.cboECF.ClearItems();
        }
        else {
            if (this.cboEmissorCupom.GetText() == 'SAT') {
                this.lblTotalEmitido.SetTextLabelControl("CF-e Emitido");
                this.lblTotalCancelado.SetTextLabelControl("CF-e Cancelado");
                this.cboECF.Visible = false;
                this.cboTaxa_Tributaria.Visible = false;
            }
            else {
                this.lblTotalEmitido.SetTextLabelControl("NFC-e Emitido");
                this.lblTotalCancelado.SetTextLabelControl("NFC-e Cancelado");
                this.cboECF.Visible = false;
                this.cboTaxa_Tributaria.Visible = false;
            }
        }
        this.lblTotalEmitido.Text = "";
        this.lblTotalCancelado.Text = "";
        this.lblValorTotalFinal.Text = "";
    };
    R_VenFis.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        try {
            if (this.txtPeriodo.textBoxCalendarioInicio.GetDate() == null || this.txtPeriodo.textBoxCalendarioFim.GetDate() == null) {
                MostrarAlerta("Preencha o campo corretamente: Período Emissão do Cupom Fiscal");
                return;
            }
            if ((this.cboECF.GetValue() == null) && (this.cboEmissorCupom.GetText() == 'Impressora Fiscal')) { //if (this.cboECF.GetValue() == null) {
                MostrarAlerta("Preencha o campo corretamente: ECF");
                return;
            }
            if (this.chkDiscriminar.Check.checked || (this.chkDiscriminar.Check.checked && this.chkPIS_CONFINS.Check.checked)) { //Discriminado
                this.pntbRelacoes.AlterarVisibleAba('abaResumido', false);
                this.pntbRelacoes.AlterarVisibleAba('abaDiscriminado', true);
                this.pntbRelacoes.AlterarVisibleAba('abaPisCofins', false);
                this.grdResumido.PreencherGrid(null);
                this.grdPisCofins.PreencherGrid(null);
                this.lblICMSRetido.Visible = false;
                this.lblICMSIsento.Visible = false;
                this.lblICMSNormal.Visible = false;
                if (this.cboEmissorCupom.GetText() == 'Impressora Fiscal') { //Impressora Fiscal
                    this.GerarRelacaoDiscriminadoImpFiscal();
                }
                else if (this.cboEmissorCupom.GetText() == 'SAT') { //SAT
                    this.GerarRelacaoDiscriminadoSAT_NFCe("RelacaoVendaCupFiscDiscriminadoSAT");
                }
                else { //NFC-e
                    this.GerarRelacaoDiscriminadoSAT_NFCe("RelacaoVendaCupFiscDiscriminadoNFCe");
                }
            }
            else if (this.chkPIS_CONFINS.Check.checked) { //PIS/COFINS
                this.pntbRelacoes.AlterarVisibleAba('abaResumido', false);
                this.pntbRelacoes.AlterarVisibleAba('abaDiscriminado', false);
                this.pntbRelacoes.AlterarVisibleAba('abaPisCofins', true);
                this.lblICMSRetido.Visible = true;
                this.lblICMSIsento.Visible = true;
                this.lblICMSNormal.Visible = true;
                this.grdResumido.PreencherGrid(null);
                this.grdDiscriminado.PreencherGrid(null);
                if (this.cboEmissorCupom.GetText() == 'Impressora Fiscal') { //Impressora Fiscal
                    this.GerarRelacaoPisCofinsImpFiscal();
                }
                else if (this.cboEmissorCupom.GetText() == 'SAT') { //SAT
                    this.GerarRelacaoPisCofinsSAT_NFCe("RelacaoVendaCupFiscPisCofinsSAT");
                }
                else { //NFC-e
                    this.GerarRelacaoPisCofinsSAT_NFCe("RelacaoVendaCupFiscPisCofinsNFCe");
                }
            }
            else { //Resumido
                this.pntbRelacoes.AlterarVisibleAba('abaResumido', true);
                this.pntbRelacoes.AlterarVisibleAba('abaDiscriminado', false);
                this.pntbRelacoes.AlterarVisibleAba('abaPisCofins', false);
                this.grdDiscriminado.PreencherGrid(null);
                this.grdPisCofins.PreencherGrid(null);
                this.lblICMSRetido.Visible = false;
                this.lblICMSIsento.Visible = false;
                this.lblICMSNormal.Visible = false;
                if (this.cboEmissorCupom.GetText() == 'Impressora Fiscal') { //Impressora Fiscal
                    this.GerarRelacaoResumidoImpFiscal();
                }
                else if (this.cboEmissorCupom.GetText() == 'SAT') { //SAT
                    this.GerarRelacaoResumidoSAT_NFCe("RelacaoVendaCupFiscResumidoSAT");
                }
                else { //NFC-e
                    this.GerarRelacaoResumidoSAT_NFCe("RelacaoVendaCupFiscResumidoNFCe");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    //#region Relações Resumido
    R_VenFis.prototype.GerarRelacaoResumidoImpFiscal = function () {
        var _this = this;
        try {
            //recebe e trata a(s) empresa(s) selecionadas(s) para inserir nos parâmetros;
            var codEmpresas = this.lstEmpresa.GetValues();
            var empresas;
            if (codEmpresas) {
                empresas = codEmpresas.join(",");
            }
            var parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                codEcf: this.cboECF.GetValue(),
                isCpfCnpj: this.chkCPF.Check.checked,
                emissor: this.cboEmissorCupom.GetText(),
                empresas: empresas
            };
            abrirEspera("Aguarde...");
            this.ExecutarFuncaoServerSideAsynch("RelacaoVendaCupFiscResumidoImpFiscal", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (_this.AccordionFiltros) {
                        _this.AccordionFiltros.SetExpanded(false);
                    }
                    _this.MontarGrade(_this.grdResumido, retorno);
                    _this.grdResumido.PreencherGrid(retorno.Dados);
                    if (retorno.ValorEmitidos) {
                        _this.lblTotalEmitido.Text = retorno.ValorEmitidos.Format(ValoresSismoura.CasasDecimaisValor);
                    }
                    if (retorno.ValorCancelados) {
                        _this.lblTotalCancelado.Text = retorno.ValorCancelados.Format(ValoresSismoura.CasasDecimaisValor);
                    }
                    if (retorno.ValorTotal) {
                        _this.lblValorTotalFinal.Text = retorno.ValorTotal.Format(ValoresSismoura.CasasDecimaisValor);
                    }
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    R_VenFis.prototype.GerarRelacaoResumidoSAT_NFCe = function (nomeFuncao) {
        var _this = this;
        try {
            //recebe e trata a(s) empresa(s) selecionadas(s) para inserir nos parâmetros;
            var codEmpresas = this.lstEmpresa.GetValues();
            var empresas;
            if (codEmpresas) {
                empresas = codEmpresas.join(",");
            }
            var parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                isCpfCnpj: this.chkCPF.Check.checked,
                emissor: this.cboEmissorCupom.GetText(),
                empresas: empresas + ""
            };
            abrirEspera("Aguarde...");
            this.ExecutarFuncaoServerSideAsynch(nomeFuncao, parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (_this.AccordionFiltros) {
                        _this.AccordionFiltros.SetExpanded(false);
                    }
                    _this.MontarGrade(_this.grdResumido, retorno);
                    _this.grdResumido.PreencherGrid(retorno.Dados);
                    if (retorno.ValorEmitidos) {
                        _this.lblTotalEmitido.Text = retorno.ValorEmitidos.Format(ValoresSismoura.CasasDecimaisValor);
                    }
                    if (retorno.ValorCancelados) {
                        _this.lblTotalCancelado.Text = retorno.ValorCancelados.Format(ValoresSismoura.CasasDecimaisValor);
                    }
                    if (retorno.ValorTotal) {
                        _this.lblValorTotalFinal.Text = retorno.ValorTotal.Format(ValoresSismoura.CasasDecimaisValor);
                    }
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    //#endregion
    //#region Relações Discriminado
    R_VenFis.prototype.GerarRelacaoDiscriminadoImpFiscal = function () {
        var _this = this;
        try {
            //recebe e trata a(s) empresa(s) selecionadas(s) para inserir nos parâmetros;
            var codEmpresas = this.lstEmpresa.GetValues();
            var empresas;
            if (codEmpresas) {
                empresas = codEmpresas.join(",");
            }
            var parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                codEcf: this.cboECF.GetValue(),
                tipoLista: this.cboLista.GetValue(),
                codTaxaTributaria: this.cboTaxa_Tributaria.GetSelectedIndex(),
                grupoProdutos: this.lstGrupoProduto.GetValuesRelacao(),
                emissor: this.cboEmissorCupom.GetText(),
                lstGrupoProdutos: this.lstGrupoProduto.CheckBoxList.length,
                empresas: empresas
            };
            abrirEspera("Aguarde...");
            this.ExecutarFuncaoServerSideAsynch("RelacaoVendaCupFiscDiscriminadoImpFiscal", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (_this.AccordionFiltros) {
                        _this.AccordionFiltros.SetExpanded(false);
                    }
                    _this.MontarGrade(_this.grdDiscriminado, retorno);
                    _this.grdDiscriminado.PreencherGrid(retorno.Dados);
                    if (retorno.ValorEmitidos) {
                        _this.lblTotalEmitido.Text = retorno.ValorEmitidos.Format(ValoresSismoura.CasasDecimaisValor);
                    }
                    if (retorno.ValorCancelados) {
                        _this.lblTotalCancelado.Text = retorno.ValorCancelados.Format(ValoresSismoura.CasasDecimaisValor);
                    }
                    if (retorno.ValorTotal) {
                        _this.lblValorTotalFinal.Text = retorno.ValorTotal.Format(ValoresSismoura.CasasDecimaisValor);
                    }
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    R_VenFis.prototype.GerarRelacaoDiscriminadoSAT_NFCe = function (nomeFuncao) {
        var _this = this;
        try {
            //recebe e trata a(s) empresa(s) selecionadas(s) para inserir nos parâmetros;
            var codEmpresas = this.lstEmpresa.GetValues();
            var empresas;
            if (codEmpresas) {
                empresas = codEmpresas.join(",");
            }
            var parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                tipoLista: this.cboLista.GetValue(),
                codTaxaTributaria: this.cboTaxa_Tributaria.GetSelectedIndex(),
                grupoProdutos: this.lstGrupoProduto.GetValuesRelacao(),
                emissor: this.cboEmissorCupom.GetText(),
                lstGrupoProdutos: this.lstGrupoProduto.CheckBoxList.length,
                empresas: empresas + ""
            };
            abrirEspera("Aguarde...");
            this.ExecutarFuncaoServerSideAsynch(nomeFuncao, parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (_this.AccordionFiltros) {
                        _this.AccordionFiltros.SetExpanded(false);
                    }
                    _this.MontarGrade(_this.grdDiscriminado, retorno);
                    _this.grdDiscriminado.PreencherGrid(retorno.Dados);
                    if (retorno.ValorEmitidos) {
                        _this.lblTotalEmitido.Text = retorno.ValorEmitidos.Format(ValoresSismoura.CasasDecimaisValor);
                    }
                    if (retorno.ValorCancelados) {
                        _this.lblTotalCancelado.Text = retorno.ValorCancelados.Format(ValoresSismoura.CasasDecimaisValor);
                    }
                    if (retorno.ValorTotal) {
                        _this.lblValorTotalFinal.Text = retorno.ValorTotal.Format(ValoresSismoura.CasasDecimaisValor);
                    }
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    //#endregion
    //#region Relações PIS/COFINS
    R_VenFis.prototype.GerarRelacaoPisCofinsImpFiscal = function () {
        var _this = this;
        try {
            //recebe e trata a(s) empresa(s) selecionadas(s) para inserir nos parâmetros;
            var codEmpresas = this.lstEmpresa.GetValues();
            var empresas;
            if (codEmpresas) {
                empresas = codEmpresas.join(",");
            }
            var parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                codEcf: this.cboECF.GetValue(),
                emissor: this.cboEmissorCupom.GetText(),
                empresas: empresas
            };
            abrirEspera("Aguarde...");
            this.ExecutarFuncaoServerSideAsynch("RelacaoVendaCupFiscPisCofinsImpFiscal", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (_this.AccordionFiltros) {
                        _this.AccordionFiltros.SetExpanded(false);
                    }
                    _this.MontarGrade(_this.grdPisCofins, retorno);
                    _this.grdPisCofins.PreencherGrid(retorno.Dados);
                    _this.lblICMSRetido.Text = retorno.ICMS_Retido.Format(ValoresSismoura.CasasDecimaisValor);
                    _this.lblICMSIsento.Text = retorno.ICMS_Isento.Format(ValoresSismoura.CasasDecimaisValor);
                    _this.lblICMSNormal.Text = retorno.ICMS_Normal.Format(ValoresSismoura.CasasDecimaisValor);
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    R_VenFis.prototype.GerarRelacaoPisCofinsSAT_NFCe = function (nomeFuncao) {
        var _this = this;
        try {
            //recebe e trata a(s) empresa(s) selecionadas(s) para inserir nos parâmetros;
            var codEmpresas = this.lstEmpresa.GetValues();
            var empresas;
            if (codEmpresas) {
                empresas = codEmpresas.join(",");
            }
            var parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                emissor: this.cboEmissorCupom.GetText(),
                empresas: empresas + ""
            };
            abrirEspera("Aguarde...");
            this.ExecutarFuncaoServerSideAsynch(nomeFuncao, parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (_this.AccordionFiltros) {
                        _this.AccordionFiltros.SetExpanded(false);
                    }
                    _this.MontarGrade(_this.grdPisCofins, retorno);
                    _this.grdPisCofins.PreencherGrid(retorno.Dados);
                    _this.lblICMSRetido.Text = retorno.ICMS_Retido.Format(ValoresSismoura.CasasDecimaisValor);
                    _this.lblICMSIsento.Text = retorno.ICMS_Isento.Format(ValoresSismoura.CasasDecimaisValor);
                    _this.lblICMSNormal.Text = retorno.ICMS_Normal.Format(ValoresSismoura.CasasDecimaisValor);
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    //#endregion
    R_VenFis.prototype.MontarGrade = function (grid, retorno) {
        grid.Colunas = retorno.ColunasGrade;
        grid.TotalizacoesColunas = retorno.Totalizacoes;
        grid.iniciarGrid();
    };
    R_VenFis.prototype.OnGridCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data != null) {
                if (e.data.Cancelada == "S") {
                    e.cellElement.css("color", "#FF0000");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_VenFis.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.pntbRelacoes.AlterarVisibleAba('abaResumido', true);
        this.pntbRelacoes.AlterarVisibleAba('abaDiscriminado', false);
        this.pntbRelacoes.AlterarVisibleAba('abaPisCofins', false);
        this.txtPeriodo.IniciarDataAtual();
        this.cboEmissorCupom.SetSelectedIndex(0);
        this.cboECF.SetSelectedIndex(0);
        this.cboLista.SetSelectedIndex(0);
        this.cboLista.Enabled = false;
        this.cboTaxa_Tributaria.SetSelectedIndex(0);
        this.cboTaxa_Tributaria.Enabled = false;
        this.chkCPF.Checked = false;
        this.chkDiscriminar.Checked = false;
        this.chkPIS_CONFINS.Checked = false;
        this.grdResumido.PreencherGrid(null);
        this.grdDiscriminado.PreencherGrid(null);
        this.grdPisCofins.PreencherGrid(null);
        this.lstGrupoProduto.LimparSelecao();
        this.lstGrupoProduto.Visible = false;
        this.lblICMSRetido.Text = (0).Format(ValoresSismoura.CasasDecimaisValor);
        this.lblICMSRetido.Visible = false;
        this.lblICMSIsento.Text = (0).Format(ValoresSismoura.CasasDecimaisValor);
        this.lblICMSIsento.Visible = false;
        this.lblICMSNormal.Text = (0).Format(ValoresSismoura.CasasDecimaisValor);
        this.lblICMSNormal.Visible = false;
    };
    return R_VenFis;
}(MouraPageRelacaoAngular));
var r_VenFis = new R_VenFis();
//# sourceMappingURL=R_VenFis.js.map