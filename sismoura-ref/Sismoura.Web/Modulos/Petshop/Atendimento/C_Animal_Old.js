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
var C_Animal_Old = /** @class */ (function (_super) {
    __extends(C_Animal_Old, _super);
    function C_Animal_Old() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Animal_Old.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "txtServico", {
        get: function () {
            return window['txtServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "txtValorUnitario", {
        get: function () {
            return window['txtValorUnitario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "txtQuantidade", {
        get: function () {
            return window['txtQuantidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "txtDesconto", {
        get: function () {
            return window['txtDesconto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "txtDescontoPorcent", {
        get: function () {
            return window['txtDescontoPorcent_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "txtObservacao", {
        get: function () {
            return window['txtObservacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "lblTotal", {
        get: function () {
            return window['lblTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "cboListaPreco_comboBox", {
        get: function () {
            return window['cboListaPreco_comboBox'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "dlgVacinasAgendadas", {
        get: function () {
            return window['dlgVacinasAgendadas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "txtProfissionalAgendamento", {
        get: function () {
            return window['txtProfissionalAgendamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "grdAgendamentos", {
        get: function () {
            return window['grdAgendamentos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "btnVoltarAgendamento", {
        get: function () {
            return window['btnVoltarAgendamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "btnPendentes", {
        get: function () {
            return $('#btnPendentes')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "hdnAgendamentoSelecionado", {
        get: function () {
            return $('#hdnAgendamentoSelecionado')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "hdnPendentesVisible", {
        get: function () {
            return $('#hdnPendentesVisible')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "hdnDoc", {
        get: function () {
            return $('#hdnDoc')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "hdnDocSelecionado", {
        get: function () {
            return $('#hdnDocSelecionado')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "btnVacinasSpan", {
        get: function () {
            return $('#btnVacinas')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "btnVacinas", {
        get: function () {
            return window['btnVacinas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "hdnAgendamentoVisible", {
        get: function () {
            return $('#hdnAgendamentoVisible')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "btnDiagnostico", {
        get: function () {
            return $('#btnDiagnostico')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "hdnDiagnosticoVisible", {
        get: function () {
            return $('#hdnDiagnosticoVisible')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "lblEndereco_TextBox", {
        get: function () {
            return $('#lblEndereco_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "lblComplemento_TextBox", {
        get: function () {
            return $('#lblComplemento_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "lblCidade_TextBox", {
        get: function () {
            return $('#lblCidade_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "lblFone_TextBox", {
        get: function () {
            return $('#lblFone_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "lblSaldoDevedor_TextBox", {
        get: function () {
            return $('#lblSaldoDevedor_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "lblCredito_TextBox", {
        get: function () {
            return $('#lblCredito_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "lblEspecie_TextBox", {
        get: function () {
            return $('#lblEspecie_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "lblRaca_TextBox", {
        get: function () {
            return $('#lblRaca_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "lblTemperamento_TextBox", {
        get: function () {
            return $('#lblTemperamento_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "lblPeso_TextBox", {
        get: function () {
            return $('#lblPeso_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "lblDataNascimento_TextBox", {
        get: function () {
            return $('#lblDataNascimento_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "lblIdadeSexo_TextBox", {
        get: function () {
            return $('#lblIdadeSexo_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "lblPelagem_TextBox", {
        get: function () {
            return $('#lblPelagem_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "lblCHIP_TextBox", {
        get: function () {
            return $('#lblCHIP_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "lblRGA_TextBox", {
        get: function () {
            return $('#lblRGA_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "lblObsServico_TextBox", {
        get: function () {
            return $('#lblObsServico_TextBox')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "txtProfissional", {
        get: function () {
            return window['txtProfissional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "callBackServico", {
        get: function () {
            return window['callBackServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "grdDoc", {
        get: function () {
            return window['grdDoc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "btnImpDoc", {
        get: function () {
            return window['btnImpDoc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "btnZanthus", {
        get: function () {
            return window['btnZanthus_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "lblZanthus", {
        get: function () {
            return window['lblZanthus_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "hdnMsgAdicionar", {
        get: function () {
            return $('#hdnMsgAdicionar')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "hdnServicoPacote", {
        get: function () {
            return $('#hdnServicoPacote')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Animal_Old.prototype, "AgendamentoSelecionado", {
        get: function () {
            if (String.IsNullOrWhiteSpace(this.hdnAgendamentoSelecionado.value)) {
                return null;
            }
            else {
                return JSON.parse(DecodeTextoJSON(this.hdnAgendamentoSelecionado.value));
            }
        },
        set: function (value) {
            if (value == null || value == undefined) {
                this.hdnAgendamentoSelecionado.value = "";
            }
            else {
                this.hdnAgendamentoSelecionado.value = EncodeTextoJSON(JSON.stringify(value));
            }
        },
        enumerable: true,
        configurable: true
    });
    C_Animal_Old.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.txtPet.ProcurouAnimal, this.OnTxtPetProcurouAnimal, this);
        adicionarEventoMoura(this.txtPet.ProcurouProprietario, this.OnTxtPetProcurouProprietario, this);
        if (this.txtServico) {
            adicionarEventoMoura(this.txtServico.Procurou, this.OnTxtServicoProcurou, this);
        }
        adicionarEventoMoura(this.txtQuantidade.TextChanged, this.OnTxtValoresChange, this);
        adicionarEventoMoura(this.txtValorUnitario.TextChanged, this.OnTxtValoresChange, this);
        adicionarEventoMoura(this.txtDesconto.TextChanged, this.OnTxtValoresChange, this);
        adicionarEventoMoura(this.txtDescontoPorcent.TextChanged, this.OnTxtDescontoPorcentChange, this);
        adicionarEventoMoura(this.txtQuantidade.LostFocus, this.OnTxtValoresChange, this);
        adicionarEventoMoura(this.txtValorUnitario.LostFocus, this.OnTxtValoresChange, this);
        adicionarEventoMoura(this.txtDesconto.LostFocus, this.OnTxtValoresChange, this);
        if (this.btnZanthus) {
            adicionarEventoMoura(this.btnZanthus.Click, this.OnClickBotaoZanthus, this);
        }
        if (this.cboListaPreco_comboBox) {
            adicionarEventoDevExpress(this.cboListaPreco_comboBox.SelectedIndexChanged, this.OnCboListaPreco_comboBoxChange, this);
        }
        if (this.txtProfissional) {
            adicionarEventoMoura(this.txtProfissional.AntesAbrirProcura, this.OnAntesAbrirProcura, this);
        }
        if (this.txtProfissionalAgendamento) {
            adicionarEventoMoura(this.txtProfissionalAgendamento.AntesAbrirProcura, this.OnAntesAbrirProcuraProfissionalAgendamento, this);
        }
        if (this.cboListaPreco_comboBox) {
            adicionarEventoDevExpress(this.cboListaPreco_comboBox.GotFocus, this.OnCboListaPrecoGotFocus, this);
        }
        if (this.btnVacinas) {
            adicionarEventoMoura(this.btnVacinas.Click, this.OnClickBtnVacina, this);
        }
        if (this.btnVoltarAgendamento) {
            adicionarEventoMoura(this.btnVoltarAgendamento.Click, this.OnClickbtnVoltarAgendamento, this);
        }
        if (this.grdAgendamentos) {
            adicionarEventoMoura(this.grdAgendamentos.SelecionouLinha, this.OnSelecionouLinhaAgendamento, this);
        }
        if (this.grdDoc) {
            adicionarEventoMoura(this.grdDoc.ClickBotaoImprimir, this.OnClickImprimirDoc, this);
            if (this.grdDoc.DataSource.length <= 0) {
                this.PreencherGridDocumentos();
            }
        }
        this.VerificaEnabledCampos();
    };
    C_Animal_Old.prototype.OnTxtPetProcurouAnimal = function (s, e) {
        var mostrarAgendamento;
        var mostrarDiagnostico;
        var parametros;
        var infoAnimal;
        var mostrarMensagem = false;
        parametros = {
            codigoAtendimento: this.txtCodigo.GetText(),
            codigoAnimal: this.txtPet.TextBoxAnimal.GetText()
        };
        mostrarAgendamento = this.ExecutarFuncaoServerSideSynch("VerificarPodeMostrarAgendamento", parametros);
        mostrarDiagnostico = this.ExecutarFuncaoServerSideSynch("VerificarPodeMostrarDiagnostico", parametros);
        if (mostrarAgendamento) {
            mostrarMensagem = true;
            this.hdnAgendamentoVisible.value = "1";
            $(this.btnVacinasSpan).removeClass("invisible");
        }
        else {
            this.hdnAgendamentoVisible.value = "0";
            $(this.btnVacinasSpan).addClass("invisible");
        }
        if (mostrarDiagnostico) {
            this.hdnDiagnosticoVisible.value = "1";
            $(this.btnDiagnostico).removeClass("invisible");
        }
        else {
            this.hdnDiagnosticoVisible.value = "0";
            $(this.btnDiagnostico).addClass("invisible");
        }
        parametros = {
            codigoAnimal: this.txtPet.TextBoxAnimal.GetText()
        };
        infoAnimal = this.ExecutarFuncaoServerSideSynch("GetInformacoesAnimal", parametros);
        if (this.lblEspecie_TextBox)
            this.lblEspecie_TextBox.value = infoAnimal.Especie;
        if (this.lblRaca_TextBox)
            this.lblRaca_TextBox.value = infoAnimal.Raca;
        if (this.lblIdadeSexo_TextBox)
            this.lblIdadeSexo_TextBox.value = infoAnimal.IdadeSexo;
        if (this.lblPeso_TextBox)
            this.lblPeso_TextBox.value = infoAnimal.Peso;
        if (this.lblDataNascimento_TextBox)
            this.lblDataNascimento_TextBox.value = infoAnimal.DataNascimento;
        if (this.lblCHIP_TextBox)
            this.lblCHIP_TextBox.value = infoAnimal.Chip;
        if (this.lblRGA_TextBox)
            this.lblRGA_TextBox.value = infoAnimal.Rga;
        if (this.lblPelagem_TextBox)
            this.lblPelagem_TextBox.value = infoAnimal.Pelagem;
        if (this.lblTemperamento_TextBox)
            this.lblTemperamento_TextBox.value = infoAnimal.Temperamento;
        if (this.lblObsServico_TextBox)
            this.lblObsServico_TextBox.value = infoAnimal.ObsServico;
        if (this.txtObservacao && !String.IsNullOrWhiteSpace(infoAnimal.ObsServico))
            this.txtObservacao.SetText(infoAnimal.ObsServico);
        if (mostrarMensagem) {
            setTimeout($.proxy(function () {
                MsgBoxJS("Este animal possui agendamentos de serviços cadastrados. Deseja visualiza-los?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouMSGBoxAgendamento, this), null);
            }, this), 200);
        }
    };
    C_Animal_Old.prototype.OnSelecionouMSGBoxAgendamento = function (e) {
        if (e.Resultado == MsgBoxResult.Yes) {
            var btnDiag = window['btnVacinas_Object'];
            if (btnDiag) {
                btnDiag.DoClick();
            }
        }
    };
    C_Animal_Old.prototype.OnTxtPetProcurouProprietario = function (s, e) {
        var mostrarAtendimentosPendentes;
        var parametros;
        var infoProprietario;
        parametros = {
            codigoProprietario: this.txtPet.TextBoxProprietario.GetText()
        };
        mostrarAtendimentosPendentes = this.ExecutarFuncaoServerSideSynch("VerificarPodeMostrarAtendimentosPendentes", parametros);
        if (mostrarAtendimentosPendentes) {
            this.hdnPendentesVisible.value = "1";
            $(this.btnPendentes).removeClass("invisible");
        }
        else {
            this.hdnPendentesVisible.value = "0";
            $(this.btnPendentes).addClass("invisible");
        }
        parametros = {
            codigoProprietario: this.txtPet.TextBoxProprietario.GetText()
        };
        infoProprietario = this.ExecutarFuncaoServerSideSynch("GetInformacoesProprietario", parametros);
        if (this.lblEndereco_TextBox)
            this.lblEndereco_TextBox.value = infoProprietario.Endrereco;
        if (this.lblComplemento_TextBox)
            this.lblComplemento_TextBox.value = infoProprietario.Complemento;
        if (this.lblFone_TextBox)
            this.lblFone_TextBox.value = infoProprietario.Telefone;
        if (this.lblCidade_TextBox)
            this.lblCidade_TextBox.value = infoProprietario.Cidade;
        if (this.lblSaldoDevedor_TextBox)
            this.lblSaldoDevedor_TextBox.value = infoProprietario.SaldoDevedor.Format(2);
        if (this.lblCredito_TextBox)
            this.lblCredito_TextBox.value = infoProprietario.Credito.Format(2);
    };
    C_Animal_Old.prototype.OnCboListaPreco_comboBoxChange = function (s, e) {
        if (this.cboListaPreco_comboBox && this.listaPrecos) {
            if (this.cboListaPreco_comboBox.GetSelectedIndex() >= 0 && this.cboListaPreco_comboBox.GetSelectedIndex() < this.listaPrecos.length) {
                this.txtValorUnitario.SetText(this.listaPrecos[this.cboListaPreco_comboBox.GetSelectedIndex()].Preco.Format(2));
            }
        }
        this.OnTxtValoresChange();
    };
    C_Animal_Old.prototype.OnTxtServicoProcurou = function (s, e) {
        var parametros;
        var infoProprietario;
        parametros = {
            codigoServico: this.txtServico.GetText(),
            codigoEmpresa: "" + this.cboEmpresa.GetValue(),
            codCliente: this.txtPet.TextBoxProprietario.GetText().CNum()
        };
        this.txtQuantidade.SetText((1.0).Format(ValoresSismoura.CasasDecimaisEstoque));
        var retorno = this.ExecutarFuncaoServerSideSynch("GetInfoServico", parametros);
        if (retorno) {
            this.listaPrecos = retorno['lista_precos'];
            var servicoPacote = retorno['servico_pacote'];
            var Produto_Promocao = retorno['promocao_servico'];
            if (servicoPacote != null && servicoPacote != undefined && servicoPacote > 0) {
                this.hdnServicoPacote.value = "S";
                MostrarAlerta("O serviço informado faz parte de um pacote, não será possível alterar o valor, pois o mesmo já foi pago na venda " + servicoPacote);
            }
            else {
                this.hdnServicoPacote.value = "N";
            }
        }
        else {
            this.listaPrecos = [];
            this.hdnServicoPacote.value = "N";
        }
        this.VerificaEnabledCampos();
        this.AgendamentoSelecionado = null;
        //if (this.txtValorUnitario.Disabled) {
        //    setTimeout($.proxy(function () {
        //        this.txtQuantidade.Focus();
        //    }, this), 100);
        //} else {                
        //    setTimeout($.proxy(function () {
        //        this.txtValorUnitario.Focus();
        //    }, this), 100);
        //}        
        if (this.cboListaPreco_comboBox) {
            this.cboListaPreco_comboBox.ClearItems();
            for (var x = 0; x < this.listaPrecos.length; x++) {
                this.cboListaPreco_comboBox.AddItem(this.listaPrecos[x].Descricao, this.listaPrecos[x].Codigo, "");
            }
            if (this.cboListaPreco_comboBox.GetItemCount() == 1) {
                this.cboListaPreco_comboBox.SetSelectedIndex(0);
                this.txtValorUnitario.SetText(this.listaPrecos[0].Preco.Format(2));
            }
            else {
                this.cboListaPreco_comboBox.SetText("");
                this.txtValorUnitario.SetText("0,00");
            }
        }
        else {
            if (Produto_Promocao != undefined || Produto_Promocao != null) {
                this.txtValorUnitario.SetText(Produto_Promocao.Preco_Promocao.Format(2));
            }
            else {
                if (this.listaPrecos.length > 0) {
                    this.txtValorUnitario.SetText(this.listaPrecos[0].Preco.Format(2));
                }
                else {
                    this.txtValorUnitario.SetText("0,00");
                }
            }
        }
        this.OnTxtValoresChange();
    };
    C_Animal_Old.prototype.OnTxtValoresChange = function () {
        var valorSubTotal = this.txtValorUnitario.GetText().CNum() * this.txtQuantidade.GetText().CNum();
        var valorDesconto = this.txtDesconto.GetText().CNum();
        var valorDescontoPorcentagem;
        if (valorDesconto < 0 || valorDesconto > valorSubTotal) {
            valorDesconto = 0;
        }
        if (this.txtQuantidade.GetText().CNum().Format(this.txtQuantidade.QuantidadeCasas).CNum() <= 0) {
            this.txtQuantidade.SetText("1");
        }
        this.txtDesconto.SetText(valorDesconto.Format(2));
        this.lblTotal.SetText((valorSubTotal - valorDesconto).Format(2));
        valorDescontoPorcentagem = 0;
        if (valorSubTotal > 0) {
            valorDescontoPorcentagem = (valorDesconto / valorSubTotal) * 100;
        }
        this.txtDescontoPorcent.SetText(valorDescontoPorcentagem.Format(2));
    };
    C_Animal_Old.prototype.OnTxtDescontoPorcentChange = function () {
        var valorSubTotal = this.txtValorUnitario.GetText().CNum() * this.txtQuantidade.GetText().CNum();
        var valorDesconto;
        valorDesconto = 0;
        if (this.txtDescontoPorcent.GetText().CNum() > 0 && this.txtDescontoPorcent.GetText().CNum() <= 100) {
            valorDesconto = valorSubTotal * (this.txtDescontoPorcent.GetText().CNum() / 100);
        }
        this.txtDesconto.SetText(valorDesconto.Format(2));
        this.OnTxtValoresChange();
    };
    C_Animal_Old.prototype.PreencherGridDocumentos = function () {
        var source = [];
        if (this.hdnDoc && !String.IsNullOrWhiteSpace(this.hdnDoc.value)) {
            source = JSON.parse(DecodeTextoJSON(this.hdnDoc.value));
        }
        this.grdDoc.PreencherGrid(source);
    };
    C_Animal_Old.prototype.OnClickImprimirDoc = function (s, e) {
        this.hdnDocSelecionado.value = "" + e.rowKey;
        this.btnImpDoc.DoClick();
    };
    C_Animal_Old.prototype.OnClickBotaoZanthus = function (s, e) {
        e.processOnServer = false;
        var codigo = this.txtCodigo.GetText();
        if (codigo.CNum() <= 0) {
            MostrarAlerta("Informe um atendimento!");
            return;
        }
        MsgBoxJS("Deseja realmente enviar o atendimento para que seja pago na Zanthus?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecinouOpcaoZanthus, this), null);
    };
    C_Animal_Old.prototype.OnSelecinouOpcaoZanthus = function (e) {
        if (e.Resultado != MsgBoxResult.Yes) {
            return;
        }
        var parametros;
        parametros = {
            codAtendimento: this.txtCodigo.GetText().CNum(),
            tela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("EnviarAtendimentoZanthus", parametros);
        if (!String.IsNullOrWhiteSpace(retorno)) {
            MostrarAlerta(retorno);
            return;
        }
        else {
            MostrarMensagem("Envio realizado com sucesso!");
            if (this.lblZanthus) {
                this.lblZanthus.Text = "Enviado para Zanthus";
            }
        }
    };
    C_Animal_Old.prototype.VerificaEnabledCampos = function () {
        if (!this.hdnServicoPacote) {
            return;
        }
        var disabled = false;
        if (this.hdnServicoPacote.value == "S") {
            disabled = true;
        }
        this.txtDesconto.Disabled = disabled;
        this.txtDescontoPorcent.Disabled = disabled;
        this.txtValorUnitario.Disabled = disabled;
    };
    C_Animal_Old.prototype.OnAntesAbrirProcura = function (s, e) {
        e.Cancelar = false;
        this.txtProfissional.AddParametro("EmpProf", "" + this.cboEmpresa.GetValue());
    };
    C_Animal_Old.prototype.OnAntesAbrirProcuraProfissionalAgendamento = function (s, e) {
        e.Cancelar = false;
        this.txtProfissionalAgendamento.AddParametro("EmpProf", "" + this.cboEmpresa.GetValue());
    };
    C_Animal_Old.prototype.OnCboListaPrecoGotFocus = function (s, e) {
        var combo = this.cboListaPreco_comboBox;
        if (combo) {
            combo.ShowDropDown();
        }
    };
    C_Animal_Old.prototype.OnClickBtnVacina = function (s, e) {
        e.processOnServer = false;
        try {
            var parametros;
            var retorno;
            parametros = {
                codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum()
            };
            retorno = this.ExecutarFuncaoServerSideSynch("PreencherGridAgendamento", parametros);
            this.grdAgendamentos.PreencherGrid(retorno);
            this.dlgVacinasAgendadas.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Animal_Old.prototype.OnClickbtnVoltarAgendamento = function (s, e) {
        e.processOnServer = false;
        this.dlgVacinasAgendadas.Hide();
    };
    C_Animal_Old.prototype.OnSelecionouLinhaAgendamento = function (s, e) {
        var codigo = ("" + e.rowKey).CNum();
        try {
            var parametros;
            var retorno;
            parametros = {
                codAgendamento: codigo
            };
            retorno = this.ExecutarFuncaoServerSideSynch("GetAgendamentoServico", parametros);
            if (retorno) {
                this.txtServico.Procurar("" + retorno.Servico);
                if (this.txtProfissionalAgendamento.GetText().CNum() > 0) {
                    this.txtProfissional.Procurar(this.txtProfissionalAgendamento.GetText());
                }
                else {
                    this.txtProfissional.Limpar();
                }
                this.txtQuantidade.SetText((1.0).Format(ValoresSismoura.CasasDecimaisEstoque));
                this.AgendamentoSelecionado = retorno;
                this.dlgVacinasAgendadas.Hide();
                MostrarMensagem("Preencha as demais informações do serviço e clique em Adicionar");
                setTimeout($.proxy(function () {
                    this.txtServico.Focus();
                }, this), 100);
            }
            else {
                MostrarAlerta("Agendamento não encontrado!");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_Animal_Old;
}(MouraPageCadastro));
var c_Animal_Old = new C_Animal_Old();
//# sourceMappingURL=C_Animal_Old.js.map