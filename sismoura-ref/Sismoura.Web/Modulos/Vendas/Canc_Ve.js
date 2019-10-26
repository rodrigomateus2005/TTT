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
var Canc_Ve = /** @class */ (function (_super) {
    __extends(Canc_Ve, _super);
    function Canc_Ve() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Canc_Ve.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canc_Ve.prototype, "txtVenda", {
        get: function () {
            return window['txtVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canc_Ve.prototype, "txtMotivo", {
        get: function () {
            return window['txtMotivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canc_Ve.prototype, "btnCancelar", {
        get: function () {
            return window['btnCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canc_Ve.prototype, "btnNovo", {
        get: function () {
            return window['btnNovo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canc_Ve.prototype, "btnReativar", {
        get: function () {
            return window['btnReativar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canc_Ve.prototype, "txtCupomFiscal", {
        get: function () {
            return window['txtCupomFiscal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canc_Ve.prototype, "lblCodCliente", {
        get: function () {
            return window['lblCodCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canc_Ve.prototype, "lblNome", {
        get: function () {
            return window['lblNome_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canc_Ve.prototype, "lblApelido", {
        get: function () {
            return window['lblApelido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canc_Ve.prototype, "lblAcrescimo", {
        get: function () {
            return window['lblAcrescimo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canc_Ve.prototype, "lblDesconto", {
        get: function () {
            return window['lblDesconto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canc_Ve.prototype, "lblTotal", {
        get: function () {
            return window['lblTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Canc_Ve.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnClickCancelar, this);
        }
        if (this.btnReativar) {
            adicionarEventoMoura(this.btnReativar.Click, this.OnClickReativar, this);
        }
        if (this.btnNovo) {
            adicionarEventoMoura(this.btnNovo.Click, this.OnClickNovo, this);
        }
        if (this.txtVenda) {
            adicionarEventoMoura(this.txtVenda.Procurou, this.OnProcurouVenda, this);
        }
    };
    Canc_Ve.prototype.OnProcurouVenda = function () {
        if (this.txtVenda.GetText().CNum() == 0) {
            return;
        }
        this.PreencherGrade();
    };
    Canc_Ve.prototype.OnClickCancelar = function (s, e) {
        e.processOnServer = false;
        var parametros;
        var codVenda = this.txtVenda.GetText().CNum();
        var motivo = this.txtMotivo.GetText();
        if (codVenda <= 0) {
            MostrarAlerta("Informe a Venda!");
            return;
        }
        else if (motivo == "") {
            MostrarAlerta("Informe o Motivo!");
            return;
        }
        else if (!ValoresSismoura.ConfiguracoesRetaguarda.Cancelar_Venda_Efetivada) {
            parametros = {
                codVenda: codVenda
            };
            var tipoImpressao = this.ExecutarFuncaoServerSideSynch("GetTipoImpressaoVenda", parametros);
            if (tipoImpressao == "S" || tipoImpressao == "F" || tipoImpressao == "N") {
                MostrarAlerta("Não é possivel o cancelamento de uma venda fiscal pelo Retaguarda!");
                return;
            }
        }
        try {
            parametros = {
                codVenda: this.txtVenda.GetText().CNum()
            };
            var funcaoAd = this.ExecutarFuncaoServerSideSynch("VerificaPermissaoUsuario", parametros);
            if (funcaoAd == "Venda") {
                this.dlgFuncaoAdm.Verificar("SenCanVe", ValoresSismoura.UsuarioLogado, false, this.VerificarAutorizacaoCancelarVendaDataMaior, this);
            }
            else if (funcaoAd == "Caixa") {
                this.dlgFuncaoAdm.Verificar("RetCanVe", ValoresSismoura.UsuarioLogado, false, this.VerificarAutorizacaoCaixaAberto, this);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Canc_Ve.prototype.VerificarAutorizacaoCancelarVendaDataMaior = function (retorno) {
        if (retorno.Autorizado) {
            this.MostrarCancelarVenda();
        }
        else {
            MostrarAlerta("A data da Venda é menor do que a data atual.");
        }
    };
    Canc_Ve.prototype.VerificarAutorizacaoCaixaAberto = function (retorno) {
        if (retorno.Autorizado) {
            this.MostrarCancelarVenda();
        }
        else {
            MostrarAlerta("Usuário não autorizado a cancelar venda, pois o caixa do PDV ainda está aberto.");
        }
    };
    Canc_Ve.prototype.OnClickReativar = function (s, e) {
        e.processOnServer = false;
        try {
            var venda = this.txtVenda.GetText().CNum();
            if (venda <= 0) {
                MostrarAlerta("Informe a Venda!");
                return;
            }
            MsgBoxJS("Deseja realmente reativar esta venda?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespondeuReativar, this));
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Canc_Ve.prototype.OnClickNovo = function (s, e) {
        e.processOnServer = false;
        debugger;
        this.limparCampos();
    };
    Canc_Ve.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        var parametros;
        //this.PreencherGrade();
        this.limparCampos();
        this.btnReativar.Visible = !this.ExecutarFuncaoServerSideSynch("isPaf", parametros);
    };
    Canc_Ve.prototype.PreencherGrade = function () {
        try {
            var parametros;
            var cancelada;
            var situacao = "";
            var motivoCancelada = "";
            var cupomFiscal = 0;
            var codCliente = 0;
            var nomeCliente = "";
            var apelidoCliente = "";
            var acrescimo = 0;
            var desconto = 0;
            var total = 0;
            parametros = {
                codVenda: this.txtVenda.GetText().CNum()
            };
            var venda = this.ExecutarFuncaoServerSideSynch("GetVendaCancelar", parametros);
            if (venda) {
                for (var x = 0; x < venda.length; x++) {
                    if (venda[x].Cancelada == "S") {
                        cancelada = true;
                    }
                    else {
                        cancelada = false;
                    }
                    situacao = venda[x].Situacao;
                    motivoCancelada = venda[x].Motivo_Cancelamento;
                    cupomFiscal = venda[x].Codigo_Cupom_Fiscal;
                    codCliente = venda[x].Cliente;
                    nomeCliente = venda[x].Nome_Cliente;
                    apelidoCliente = venda[x].Nome_Fantasia;
                    acrescimo = venda[x].Acrescimo;
                    desconto = venda[x].Desconto + venda[x].TROCA;
                    total = venda[x].Total + total;
                }
            }
            if (ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Modulo_Contabil) {
                try {
                    parametros = {
                        codVenda: this.txtVenda.GetText().CNum(),
                        cupom: this.txtCupomFiscal.GetText()
                    };
                    var verificaVendaContabil = this.ExecutarFuncaoServerSideSynch("VerificaVendasContabil", parametros);
                    if (verificaVendaContabil == "Sat") {
                        this.DesativaBotoes();
                        MostrarAlerta("Não é possível cancelar essa venda, pois a mesma foi realizada através do aparelho SAT");
                    }
                    else if (verificaVendaContabil == "Fiscal") {
                        this.DesativaBotoes();
                        MostrarAlerta("Não é possível cancelar essa venda, pois a mesma já emitiu Cupom fiscal");
                    }
                    else if (verificaVendaContabil == "NFSE") {
                        this.AtivaBotoes();
                        MostrarAlerta("ATENÇÃO.FOI EMITIDA UMA NOTA DE SERVIÇOS (NFS - e) PARA ESTA VENDA, <br>ANTES DE CANCELAR A VENDA NO SISTEMA CERTIFIQUE- SE DE QUE HOUVE O CANCELAMENTO DESTA VENDA NO SITE.");
                    }
                    else if (verificaVendaContabil == "fiscalCupom") {
                        this.DesativaBotoes();
                        MostrarAlerta("Não é possível cancelar essa venda, pois a mesma já emitiu Cupom fiscal");
                    }
                    else {
                        this.AtivaBotoes();
                    }
                }
                catch (ex) {
                    LogarException(ex);
                }
            }
            var verificacoes = this.ExecutarFuncaoServerSideSynch("GetVerificacoesCancelamento", parametros);
            this.txtCupomFiscal.SetText(cupomFiscal.toString());
            if (cancelada || situacao == "07000") {
                this.DesativaBotoes();
                MostrarAlerta("Venda já cancelada!");
                this.txtMotivo.ReadOnly = true;
                this.txtMotivo.SetText(motivoCancelada);
                this.txtCupomFiscal.ReadOnly = true;
                return;
                //VERIFICA SE A CARGA ESTA MARCADA COMO CONCLUÍDA
            }
            else if (verificacoes.Concluida == "S") {
                this.DesativaBotoes();
                MostrarAlerta("Esta venda está marcada como CONCLUÍDA em sua carga. Não será possível alterá-la!");
                return;
                //VERIFICA SE POSSUÍ UMA ENTREGA ATRELADA A VENDA
            }
            else if (verificacoes.Cod_Entrega > 0) {
                this.DesativaBotoes();
                MostrarAlerta("Esta venda não pode ser cancelada pois ela está relacionada à uma entrega parcial! Entrega: " + verificacoes.Cod_Entrega + " ");
                return;
                //VERIFICA SE A VENDA JA POSSUI PARCELA PAGA
            }
            else if (verificacoes.Doc_Pago > 0) {
                debugger;
                this.DesativaBotoes();
                MostrarAlerta("Esta Venda não pode ser cancelada porque já possui parcelas pagas!");
                return;
            }
            else {
                if (verificacoes.Cliente_Credito != null) {
                    try {
                        parametros = {
                            codCliente: verificacoes.Cliente_Credito.Cliente
                        };
                        var creditoAtual = this.ExecutarFuncaoServerSideSynch("GetCreditoAtual", parametros);
                        if ((creditoAtual - verificacoes.Cliente_Credito.Valor) < 0) {
                            MsgBoxJS("A venda gerou um crédito de R$ " + verificacoes.Cliente_Credito.Valor + ", <br>o saldo atual do cliente é R$ " + creditoAtual +
                                ". <br> O cancelamento da venda irá negativar os créditos do cliente. Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespondeuMensagemExistente, this));
                            return;
                        }
                    }
                    catch (ex) {
                        LogarException(ex);
                    }
                }
                this.AtivaBotoes();
            }
            this.grid.PreencherGrid(venda);
            this.lblCodCliente.Text = codCliente.toString();
            this.lblCodCliente.Visible = true;
            this.lblNome.Text = nomeCliente;
            this.lblNome.Visible = true;
            this.lblApelido.Text = apelidoCliente;
            this.lblApelido.Visible = true;
            this.lblAcrescimo.Text = acrescimo.toString();
            this.lblDesconto.Text = desconto.toString();
            this.lblTotal.Text = "" + (total + acrescimo - desconto).Format(2);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Canc_Ve.prototype.OnRespondeuMensagemExistente = function (result) {
        if (result.Resultado == MsgBoxResult.No) {
            this.DesativaBotoes();
        }
    };
    Canc_Ve.prototype.OnRespondeuReativar = function (result) {
        var parametros;
        var codVenda = this.txtVenda.GetText().CNum();
        if (result.Resultado == MsgBoxResult.Yes) {
            if (codVenda <= 0) {
                MostrarAlerta("Informe a Venda!");
                return;
            }
            try {
                parametros = {
                    codVenda: codVenda
                };
                var reativarVenda = this.ExecutarFuncaoServerSideSynch("ReativarVenda", parametros);
                if (reativarVenda == "Cancelada") {
                    MostrarAlerta("Esta venda não pode ser reativada, pois não foi cancelada");
                }
                else if (reativarVenda == "Sat") {
                    MostrarAlerta("Esta venda foi realizada através do SAT, por isso não poderá ser reativada.");
                }
                else {
                    MostrarMensagem(reativarVenda);
                }
            }
            catch (ex) {
                LogarException(ex);
            }
            finally {
                this.AtivaBotoes();
            }
        }
    };
    Canc_Ve.prototype.OnRespondeuCancelar = function (result) {
        var parametros;
        if (result.Resultado == MsgBoxResult.Yes) {
            try {
                parametros = {
                    codVenda: this.txtVenda.GetText().CNum(),
                    motivo: this.txtMotivo.GetText()
                };
                var cancelarVenda = this.ExecutarFuncaoServerSideSynch("CancelarVenda", parametros);
                MostrarMensagem(cancelarVenda);
                this.DesativaBotoes();
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    Canc_Ve.prototype.DesativaBotoes = function () {
        this.btnCancelar.SetEnabled(false);
        this.btnReativar.SetEnabled(true);
    };
    Canc_Ve.prototype.AtivaBotoes = function () {
        this.txtMotivo.SetText("");
        this.btnCancelar.SetEnabled(true);
        this.btnReativar.SetEnabled(false);
    };
    Canc_Ve.prototype.limparCampos = function () {
        this.txtVenda.Limpar();
        this.txtCupomFiscal.Limpar();
        this.txtMotivo.Limpar();
        this.lblAcrescimo.Text = "0";
        this.lblApelido.Text = "";
        this.lblCodCliente.Text = "";
        this.lblDesconto.Text = "0";
        this.lblNome.Text = "";
        this.lblTotal.Text = "0,00";
        this.txtMotivo.ReadOnly = false;
        this.txtCupomFiscal.ReadOnly = false;
        this.btnCancelar.SetEnabled(true);
        this.btnReativar.SetEnabled(true);
        this.grid.PreencherGrid([]);
    };
    Canc_Ve.prototype.MostrarCancelarVenda = function () {
        MsgBoxJS("Deseja mesmo cancelar esta venda?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespondeuCancelar, this));
    };
    return Canc_Ve;
}(MouraPageAngular));
var canc_Ve = new Canc_Ve();
//# sourceMappingURL=Canc_Ve.js.map