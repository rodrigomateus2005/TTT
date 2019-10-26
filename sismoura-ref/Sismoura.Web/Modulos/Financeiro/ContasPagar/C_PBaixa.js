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
var C_PBaixa = /** @class */ (function (_super) {
    __extends(C_PBaixa, _super);
    function C_PBaixa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_PBaixa.prototype, "Conta_Pagar", {
        get: function () {
            return this.GetScope()["Conta_Pagar"];
        },
        set: function (value) {
            this.GetScope()["Conta_Pagar"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "btnBaixar", {
        get: function () {
            return window['btnBaixar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "txtFornecedor", {
        get: function () {
            return window['txtFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "cboDocMercantil", {
        get: function () {
            return window['cboDocMercantil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "txtDataVencimento", {
        get: function () {
            return window['txtDataVencimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "lblCalculadaEmDolar", {
        get: function () {
            return window['lblCalculadaEmDolar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "lblValorCotacao", {
        get: function () {
            return window['lblValorCotacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "txtValorNominal", {
        get: function () {
            return window['txtValorNominal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "lblEmpresa", {
        get: function () {
            return window['lblEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "lblValorOriginal", {
        get: function () {
            return window['lblValorOriginal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "lblValorResidio", {
        get: function () {
            return window['lblValorResidio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "btnCancelarResiduo", {
        get: function () {
            return window['btnCancelarResiduo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "btnOkResiduo", {
        get: function () {
            return window['btnOkResiduo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "txtDesconto", {
        get: function () {
            return window['txtDesconto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "txtJuros", {
        get: function () {
            return window['txtJuros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "txtValorPago", {
        get: function () {
            return window['txtValorPago_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "txtValorTotal", {
        get: function () {
            return window['txtValorTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "txtDataVencimentoResiduo", {
        get: function () {
            return window['txtDataVencimentoResiduo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "mdResiduo", {
        get: function () {
            return window['mdResiduo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "BaixaPagar", {
        get: function () {
            return window['BaixaPagar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PBaixa.prototype, "hdnCodConta", {
        get: function () {
            return window['hdnCodConta'];
        },
        enumerable: true,
        configurable: true
    });
    C_PBaixa.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.btnBaixar) {
            adicionarEventoMoura(this.btnBaixar.Click, this.OnClickBaixar, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.OnClickLimpar, this);
        }
        if (this.btnCancelarResiduo) {
            adicionarEventoMoura(this.btnCancelarResiduo.Click, this.OnClickCancelarResiduo, this);
        }
        if (this.btnOkResiduo) {
            adicionarEventoMoura(this.btnOkResiduo.Click, this.OnClickOkResiduo, this);
        }
        if (this.txtFornecedor) {
            adicionarEventoMoura(this.txtFornecedor.Procurou, this.OnPesquisouFornecedor, this);
        }
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.Procurou, this.OnPesquisouCodigo, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnCboEmpresaChange, this);
        }
        if (this.BaixaPagar) {
            adicionarEventoMoura(this.BaixaPagar.BaixouConta, this.OnBaixouConta, this);
        }
    };
    C_PBaixa.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        if (!this.GetScope().MudouDesconto) {
            this.GetScope().MudouDesconto = $.proxy(this.MudouDesconto, this);
            this.GetScope().$watch(function (scope) { return _this.Conta_Pagar.Desconto; }, this.GetScope().MudouDesconto);
        }
        if (!this.GetScope().MudouJuros) {
            this.GetScope().MudouJuros = $.proxy(this.MudouJuros, this);
            this.GetScope().$watch(function (scope) { return _this.Conta_Pagar.Juros; }, this.GetScope().MudouJuros);
        }
        if (this.hdnCodConta.value != "") {
            this.PreencherTela(CNum(this.hdnCodConta.value));
        }
    };
    C_PBaixa.prototype.MudouDesconto = function () {
        this.calculaTotalBaixaReceber();
    };
    C_PBaixa.prototype.MudouJuros = function () {
        this.calculaTotalBaixaReceber();
    };
    C_PBaixa.prototype.OnPesquisouCodigo = function () {
        if (this.Conta_Pagar.Codigo != undefined || this.Conta_Pagar.Codigo != null) {
            try {
                var parametros;
                parametros = {
                    codConta: this.Conta_Pagar.Codigo,
                    codUsuario: ValoresSismoura.UsuarioLogado
                };
                var vinculoEmpresa = this.ExecutarFuncaoServerSideSynch("VerificarVinculoEmpresa", parametros);
                if (!vinculoEmpresa) {
                    MostrarAlerta("A Conta a Pagar informada não possui vínculo com nenhumas das empresas vinculadas ao usuário logado!");
                    return;
                }
                else {
                    this.PreencherTela(this.Conta_Pagar.Codigo);
                }
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    C_PBaixa.prototype.PreencherTela = function (codConta) {
        try {
            var parametros;
            parametros = {
                codConta: codConta
            };
            var conta = this.ExecutarFuncaoServerSideSynch("ObterConta", parametros);
            if (conta.Pago) {
                MostrarAlerta("Documento já baixado");
                this.LimparCampos();
                return;
            }
            this.Conta_Pagar.Conta_Corrente = conta.Conta_Corrente;
            this.ObterContaCorrente(conta.Conta_Corrente);
            this.Conta_Pagar.Codigo = conta.Codigo;
            this.Conta_Pagar.Codigo_Fornecedor = conta.Codigo_Fornecedor;
            this.Conta_Pagar.Doc_Merc = conta.Doc_Merc;
            this.Conta_Pagar.N_Doc_Merc = conta.N_Doc_Merc;
            this.Conta_Pagar.Parcela = conta.Parcela;
            this.Conta_Pagar.Doc_Bancario = conta.Doc_Bancario;
            this.Conta_Pagar.Data_Vencimento = conta.Data_Vencimento;
            this.Conta_Pagar.N_Doc_Bancario = conta.N_Doc_Bancario;
            this.Conta_Pagar.Conta_Dolar = conta.Conta_Dolar;
            if (this.Conta_Pagar.Conta_Dolar) {
                var valor = this.ExecutarFuncaoServerSideSynch("GetValorUltimaCotacao", parametros);
                if (valor <= 0) {
                    MostrarAlerta("Não há cotação do dólar cadastrada");
                    return;
                }
                this.lblCalculadaEmDolar.Visible = true;
                this.lblValorCotacao.Visible = true;
                this.lblValorCotacao.Text = valor.Format(2);
                valor *= conta.Valor;
                this.txtValorNominal.SetText(valor.Format(2));
                this.Conta_Pagar.Valor_Pago = valor.Format(2);
                this.Conta_Pagar.Valor = valor.Format(2);
            }
            else {
                this.lblCalculadaEmDolar.Visible = false;
                this.lblValorCotacao.Visible = false;
                this.lblValorCotacao.Text = "";
                this.txtValorNominal.SetText(conta.Valor.Format(2));
                this.Conta_Pagar.Valor_Pago = conta.Valor;
                this.Conta_Pagar.Valor = conta.Valor;
            }
            this.Conta_Pagar.Juros = conta.Juros;
            this.Conta_Pagar.Desconto = conta.Desconto;
            this.Conta_Pagar.Observacao = !conta.Observacao ? "" : conta.Observacao;
            this.GetScope().$applyAsync();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PBaixa.prototype.ObterContaCorrente = function (codContaCorrente) {
        try {
            var parametros;
            parametros = {
                codContaCorrente: codContaCorrente
            };
            var contaCorrente = this.ExecutarFuncaoServerSideSynch("GetByContaCorrente", parametros);
            if (contaCorrente != null) {
                parametros = {
                    codEmpresa: contaCorrente.Cod_Empresa,
                };
                var empresa = this.ExecutarFuncaoServerSideSynch("GetEmpresa", parametros);
                if (empresa != null) {
                    this.lblEmpresa.Text = empresa.Razao_Social;
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PBaixa.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherTela(e.data["Codigo"]);
    };
    C_PBaixa.prototype.OnClickLimpar = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
    };
    C_PBaixa.prototype.OnClickOkResiduo = function (s, e) {
        e.processOnServer = false;
        try {
            if (this.txtDataVencimentoResiduo == null || this.txtDataVencimentoResiduo == undefined) {
                MostrarMensagemCampoObrigatorio("Vencimento");
                return;
            }
            this.BaixarConta();
            this.mdResiduo.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PBaixa.prototype.OnClickCancelarResiduo = function (s, e) {
        this.mdResiduo.Hide();
    };
    C_PBaixa.prototype.LimparCampos = function () {
        this.Conta_Pagar.Codigo = 0;
        this.Conta_Pagar.Codigo_Fornecedor = 0;
        this.Conta_Pagar.Doc_Merc = 0;
        this.Conta_Pagar.N_Doc_Merc = "";
        this.Conta_Pagar.Parcela = 0;
        this.Conta_Pagar.Data_Emissao = this.DataServidor();
        this.Conta_Pagar.Doc_Bancario = 0;
        this.Conta_Pagar.N_Doc_Bancario = "";
        this.Conta_Pagar.Data_Vencimento = this.DataServidor();
        this.Conta_Pagar.Valor = 0;
        this.Conta_Pagar.Valor_Pago = 0;
        this.txtValorNominal.SetText("0,00");
        this.Conta_Pagar.Juros = 0;
        this.Conta_Pagar.Desconto = 0;
        this.Conta_Pagar.Observacao = "";
        this.Grid.PreencherGrid(null);
        this.cboDocMercantil.Enabled = false;
        this.txtDataVencimento.Enabled = false;
        this.lblEmpresa.Text = "";
        this.lblCalculadaEmDolar.Visible = false;
        this.lblValorCotacao.Visible = false;
        this.lblValorCotacao.Text = "";
        this.RefreshAngular();
    };
    C_PBaixa.prototype.OnClickBaixar = function (s, e) {
        e.processOnServer = false;
        try {
            this.dlgFuncaoAdm.Verificar("baixapag", ValoresSismoura.UsuarioLogado, false, this.OnCarregouFuncaoBloquearBaixaPagar, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PBaixa.prototype.PreencherGrade = function () {
        var _this = this;
        try {
            var parametros;
            parametros = {
                codFornecedor: CNum(this.txtFornecedor.GetText()),
                codEmpresa: this.cboEmpresa.GetValue(),
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            this.Grid.deselectAll();
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherRegistrosCadastrados", parametros, function (d) {
                var cad = GetRetornoAJAX(d);
                _this.Grid.PreencherGrid(cad);
                fecharEspera();
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    C_PBaixa.prototype.OnPesquisouFornecedor = function () {
        if (CNum(this.txtFornecedor.GetText()) > 0) {
            try {
                var parametros;
                parametros = {
                    codFornecedor: CNum(this.txtFornecedor.GetText()),
                    codUsuario: ValoresSismoura.UsuarioLogado
                };
                var vinculoFornecedor = this.ExecutarFuncaoServerSideSynch("VerificarVinculoFornecedor", parametros);
                if (!vinculoFornecedor) {
                    MostrarAlerta("O fornecedor não possui vínculo com nenhumas das empresas vinculadas ao usuário logado!");
                    return;
                }
                else {
                    this.PreencherGrade();
                }
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    C_PBaixa.prototype.ValidarBaixa = function () {
        if (this.ValidarCamposObrigatorios()) {
            this.VerificarContaPagar();
        }
    };
    C_PBaixa.prototype.VerificarContaPagar = function () {
        var _this = this;
        try {
            var parametros;
            parametros = {
                codConta: this.Conta_Pagar.Codigo,
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("ObterConta", parametros, function (d) {
                var contaPagar = GetRetornoAJAX(d);
                if (contaPagar == null) {
                    MostrarAlerta("Conta a Pagar não cadastrada");
                    return;
                }
                if (contaPagar.Pago) {
                    MostrarAlerta("A conta " + contaPagar.Codigo + " já foi paga");
                    return;
                }
                if (contaPagar.Conta_Corrente == null) {
                    MostrarAlerta("A Conta a Pagar informada não possui Conta Corrente em seu cadastro!");
                    return;
                }
                parametros = {
                    codContaCorrente: contaPagar.Conta_Corrente
                };
                var empresaContaCorrente = _this.ExecutarFuncaoServerSideSynch("VerificarEmpresaContaCorrente", parametros);
                if (!empresaContaCorrente) {
                    MostrarAlerta("Essa conta pertence a uma empresa diferente das do usuário!");
                    return;
                }
                parametros = {
                    dataAtual: _this.DataServidor().ToDate(),
                    dataVencimento: contaPagar.Data_Vencimento.ToDate()
                };
                var diferencaDias = _this.ExecutarFuncaoServerSideSynch("CalcularDiferencaDias", parametros);
                if (ValoresSismoura.ConfiguracoesRetaguarda.Pedir_Senha_Dar_Baixa > 0 && diferencaDias > ValoresSismoura.ConfiguracoesRetaguarda.Pedir_Senha_Dar_Baixa) {
                    _this.dlgFuncaoAdm.Verificar("SolSenBaixa", ValoresSismoura.UsuarioLogado, false, _this.OnCarregouFuncaoSenhaDarBaixa, _this);
                }
                _this.VerificarResiduo();
                fecharEspera();
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    C_PBaixa.prototype.OnCarregouFuncaoSenhaDarBaixa = function (retorno) {
        if (retorno.Autorizado) {
            this.VerificarResiduo();
        }
        else {
            MostrarAlerta("Usuário sem permissão para baixar contas que venceram a mais de " + ValoresSismoura.ConfiguracoesRetaguarda.Pedir_Senha_Dar_Baixa + " dias");
            return;
        }
    };
    C_PBaixa.prototype.OnCarregouFuncaoBloquearBaixaPagar = function (retorno) {
        if (retorno.Autorizado) {
            this.ValidarBaixa();
        }
        else {
            MostrarAlerta("Usuário sem autorização para a operação");
            return;
        }
    };
    C_PBaixa.prototype.VerificarResiduo = function () {
        var valorOriginal = 0;
        valorOriginal = (this.txtValorNominal.GetText().CNum() + this.Conta_Pagar.Juros - this.Conta_Pagar.Desconto).Format(2).CNum();
        if (valorOriginal > this.Conta_Pagar.Valor_Pago) {
            this.lblValorOriginal.Text = "" + valorOriginal;
            this.lblValorResidio.Text = "" + (valorOriginal - this.Conta_Pagar.Valor_Pago);
            this.mdResiduo.Show();
        }
        else {
            this.BaixarConta();
        }
    };
    C_PBaixa.prototype.BaixarConta = function () {
        var _this = this;
        var valorCotacao;
        var docBancarioPadrao = 0;
        try {
            var parametros;
            parametros = {
                codConta: this.Conta_Pagar.Codigo,
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("ObterConta", parametros, function (d) {
                var contaPagar = GetRetornoAJAX(d);
                if (contaPagar == null) {
                    MostrarAlerta("Conta a pagar não cadastrada");
                    return;
                }
                if (contaPagar.Pago) {
                    MostrarAlerta("A conta informada já foi paga");
                    return;
                }
                if (contaPagar.Conta_Dolar) {
                    var valor = _this.ExecutarFuncaoServerSideSynch("GetValorUltimaCotacao", parametros);
                    if (valor <= 0) {
                        MostrarAlerta("Não há cotação do dólar cadastrada");
                        return;
                    }
                }
                if (_this.Conta_Pagar.Doc_Bancario > 0) {
                    docBancarioPadrao = _this.Conta_Pagar.Doc_Bancario;
                }
                else {
                    docBancarioPadrao = contaPagar.Doc_Merc;
                }
                _this.BaixaPagar.MostrarBaixa(contaPagar.Codigo, ValoresSismoura.NomeTela, ValoresSismoura.UsuarioLogado, _this.Conta_Pagar.Valor_Pago, contaPagar.Conta_Contabil, contaPagar.Conta_Corrente, _this.Conta_Pagar.Observacao, _this.Conta_Pagar.Juros, _this.Conta_Pagar.Desconto, _this.Conta_Pagar.Data_Emissao, _this.Conta_Pagar.N_Doc_Bancario, _this.Conta_Pagar.Data_Vencimento.ToDate(), valorCotacao, docBancarioPadrao);
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
            fecharEspera();
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    C_PBaixa.prototype.OnCboEmpresaChange = function () {
        try {
            this.PreencherGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PBaixa.prototype.calculaTotalBaixaReceber = function () {
        var txtValorOriginal = this.txtValorNominal.GetText().CNum();
        var txtDesconto = this.Conta_Pagar.Desconto;
        var txtAcrescimo = this.Conta_Pagar.Juros;
        //var casasTxtValorPago = this.Conta_Pagar.Valor_Pago;
        //var casasTxtValorTotal = this.Conta_Pagar.Valor;
        var valorTotal = txtValorOriginal + txtAcrescimo - txtDesconto;
        if (valorTotal < 0) {
            valorTotal = 0;
        }
        this.Conta_Pagar.Valor_Pago = valorTotal.Format(ValoresSismoura.CasasDecimaisValor).CNum();
        this.Conta_Pagar.Valor = valorTotal.Format(ValoresSismoura.CasasDecimaisValor).CNum();
        this.RefreshAngular();
    };
    C_PBaixa.prototype.OnBaixouConta = function () {
        if (this.txtFornecedor.GetText() != "") {
            this.PreencherGrade();
        }
    };
    return C_PBaixa;
}(MouraPageAngular));
var c_PBaixa = new C_PBaixa();
//# sourceMappingURL=C_PBaixa.js.map