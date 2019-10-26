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
var C_DesTit = /** @class */ (function (_super) {
    __extends(C_DesTit, _super);
    function C_DesTit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_DesTit.prototype, "Entity", {
        get: function () {
            if (!this.GetScope()["Entity"]) {
                this.GetScope()["Entity"] = {};
            }
            return this.GetScope()["Entity"];
        },
        set: function (value) {
            this.GetScope()["Entity"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DesTit.prototype, "btnConfirmar", {
        get: function () {
            return window['btnConfirmar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DesTit.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DesTit.prototype, "optOpcao", {
        get: function () {
            return window['optOpcao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DesTit.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DesTit.prototype, "txtContaReceber", {
        get: function () {
            return window['txtContaReceber_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DesTit.prototype, "txtCheque", {
        get: function () {
            return window['txtCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DesTit.prototype, "cboPosicao", {
        get: function () {
            return window['cboPosicao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DesTit.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DesTit.prototype, "lblCliente", {
        get: function () {
            return window['lblCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DesTit.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_DesTit.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        this.optOpcao.SetValue("CR");
        this.OnMudouOpcao();
        if (!this.GetScope().MudouDescontoValor) {
            this.GetScope().MudouDescontoValor = $.proxy(this.MudouDescontoValor, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Entity.Descontado; }, this.GetScope().MudouDescontoValor);
        }
        if (!this.GetScope().MudouDescontoPorcentagem) {
            this.GetScope().MudouDescontoPorcentagem = $.proxy(this.MudouDescontoPorcentagem, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Entity.Descontado_Porcentagem; }, this.GetScope().MudouDescontoPorcentagem);
        }
    };
    C_DesTit.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.LimparCampos, this);
        }
        if (this.optOpcao) {
            adicionarEventoMoura(this.optOpcao.SelectionChanged, this.OnMudouOpcao, this);
        }
        if (this.btnConfirmar) {
            adicionarEventoMoura(this.btnConfirmar.Click, this.OnClickConfirmar, this);
        }
        if (this.txtCheque) {
            adicionarEventoMoura(this.txtCheque.Procurou, this.OnBuscouCheque, this);
        }
        if (this.txtContaReceber) {
            adicionarEventoMoura(this.txtContaReceber.Procurou, this.OnBuscouContaReceber, this);
        }
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.Procurou, this.OnBuscouContaContabil, this);
        }
    };
    C_DesTit.prototype.ValidarCamposObrigatorios = function () {
        var retorno = _super.prototype.ValidarCamposObrigatorios.call(this);
        if (retorno) {
            if (this.optOpcao.GetValue() == "CR") {
                if (CNum(this.Entity.Conta_Receber) <= 0) {
                    MostrarMensagemCampoObrigatorio("Conta Receber");
                    retorno = false;
                }
            }
            else if (this.optOpcao.GetValue() == "CH") {
                if (CNum(this.Entity.Cheque) <= 0) {
                    MostrarMensagemCampoObrigatorio("Cheque");
                    retorno = false;
                }
            }
        }
        return retorno;
    };
    C_DesTit.prototype.LimparCampos = function () {
        this.Entity.Cheque = 0;
        this.Entity.Conta_Receber = 0;
        this.Entity.Valor_Titulo = 0;
        this.Entity.Descontado = 0;
        this.Entity.Descontado_Porcentagem = 0;
        this.Entity.Valor_Final = 0;
        this.Entity.Fornecedor = 0;
        this.cboContaCorrente.Limpar();
        this.Entity.Documento_Bancario = 0;
        this.Entity.Documento_Mercantil = 0;
        this.Entity.Conta_Contabil = 0;
        this.lblCliente.Text = "";
        this.cboPosicao.SetSelectedIndex(0);
        this.txtData.Date = null;
        this.RefreshAngular();
    };
    C_DesTit.prototype.OnMudouOpcao = function () {
        if (this.optOpcao.GetValue() == "CR") {
            this.cboContaCorrente.Obrigatorio = false;
            this.txtContaReceber.Visible = true;
            this.txtCheque.Visible = false;
            this.cboPosicao.Visible = true;
        }
        else {
            this.cboContaCorrente.Obrigatorio = true;
            this.txtContaReceber.Visible = false;
            this.txtCheque.Visible = true;
            this.cboPosicao.Visible = false;
        }
        this.LimparCampos();
    };
    C_DesTit.prototype.OnClickConfirmar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        if (this.ValidarCamposObrigatorios()) {
            MsgBoxJS("Confirma desconto do título selecionado?", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, function (r) {
                if (r.Resultado == MsgBoxResult.Yes) {
                    _this.Confirmar();
                }
            });
        }
    };
    C_DesTit.prototype.Confirmar = function () {
        var _this = this;
        var parametros;
        try {
            /*Fazendo isto, pois quando o campo fica invisível seu valor fica null e estoura exception*/
            this.Entity.Cheque = CNum(this.Entity.Cheque);
            this.Entity.Conta_Receber = CNum(this.Entity.Conta_Receber);
            parametros = {
                entidade: this.Entity,
                dataCredito: ConvertToDate(this.txtData.Date),
                posicaoTitulo: CNum(this.cboPosicao.GetValue()),
                tela: ValoresSismoura.NomeTela,
                usuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("ConfirmarDesconto", parametros, function (d) {
                fecharEspera();
                MostrarMensagem("Título descontado com sucesso!");
                _this.LimparCampos();
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
    C_DesTit.prototype.OnBuscouCheque = function (s, e) {
        if (CNum(this.txtCheque.GetText()) > 0) {
            this.BuscarByCheque(CNum(this.txtCheque.GetText()));
        }
    };
    C_DesTit.prototype.OnBuscouContaReceber = function (s, e) {
        if (CNum(this.txtContaReceber.GetText()) > 0) {
            this.BuscarByContaReceber(CNum(this.txtContaReceber.GetText()));
        }
    };
    C_DesTit.prototype.BuscarByCheque = function (cheque) {
        var _this = this;
        var parametros;
        try {
            parametros = {
                cheque: cheque
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("BuscarByCheque", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (retorno.Erro) {
                    MostrarAlerta(retorno.MensagemAlerta);
                    _this.LimparCampos();
                }
                else {
                    _this.Entity.Valor_Titulo = retorno.Entidade[0].Valor;
                    _this.Entity.Valor_Final = retorno.Entidade[0].Valor;
                    if (!String.IsNullOrWhiteSpace(retorno.Entidade[0].Conta_Corrente)) {
                        _this.cboContaCorrente.SetContaCorrente(retorno.Entidade[0].Conta_Corrente);
                    }
                    _this.lblCliente.Text = retorno.Entidade[0].Nome;
                }
                _this.RefreshAngular();
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
    C_DesTit.prototype.BuscarByContaReceber = function (contaReceber) {
        var _this = this;
        var parametros;
        try {
            parametros = {
                contaReceber: contaReceber
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("BuscarByContaReceber", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (retorno.Erro) {
                    MostrarAlerta(retorno.MensagemAlerta);
                    _this.LimparCampos();
                }
                else {
                    _this.Entity.Valor_Titulo = retorno.Entidade[0].Valor;
                    _this.Entity.Valor_Final = retorno.Entidade[0].Valor;
                    if (!String.IsNullOrWhiteSpace(retorno.Entidade[0].Conta_Corrente)) {
                        _this.cboContaCorrente.SetContaCorrente(retorno.Entidade[0].Conta_Corrente);
                    }
                    _this.lblCliente.Text = retorno.Entidade[0].Nome;
                }
                _this.RefreshAngular();
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
    C_DesTit.prototype.MudouDescontoPorcentagem = function () {
        var total;
        if (this.Entity.Descontado_Porcentagem <= 0) {
            return;
        }
        if (CNum(this.Entity.Valor_Titulo) <= 0) {
            this.Entity.Descontado = 0;
            this.Entity.Descontado_Porcentagem = 0;
            this.RefreshAngular();
            return;
        }
        if (CNum(this.Entity.Descontado_Porcentagem) >= 100) {
            MostrarAlerta("O valor descontado não pode ser maior ou igual a 100%");
            this.Entity.Descontado_Porcentagem = 0;
        }
        else {
            total = CNum(this.Entity.Valor_Titulo) * (1 - CNum(this.Entity.Descontado_Porcentagem) / 100);
            this.Entity.Valor_Final = total;
            this.Entity.Descontado = CNum(this.Entity.Valor_Titulo) - total;
        }
        this.RefreshAngular();
    };
    C_DesTit.prototype.MudouDescontoValor = function () {
        if (this.Entity.Descontado <= 0) {
            return;
        }
        if (CNum(this.Entity.Valor_Titulo) <= 0) {
            this.Entity.Descontado = 0;
            this.Entity.Descontado_Porcentagem = 0;
            this.RefreshAngular();
            return;
        }
        if (this.Entity.Descontado >= this.Entity.Valor_Final) {
            MostrarAlerta("O valor descontado não pode ser maior ou igual ao valor do título!");
            this.Entity.Descontado = 0;
        }
        else {
            var total = CNum(this.Entity.Valor_Titulo) - CNum(this.Entity.Descontado);
            this.Entity.Valor_Final = total;
            if (CNum(this.Entity.Valor_Titulo) != 0) {
                var porc = (CNum(this.Entity.Valor_Final) / CNum(this.Entity.Valor_Titulo));
                porc = (1 - porc) * 100;
            }
            else {
                porc = 0;
            }
            this.Entity.Descontado_Porcentagem = porc;
        }
        this.RefreshAngular();
    };
    C_DesTit.prototype.VerificarContaContabilEmpresa = function (codigoContaContabil, empresa) {
        var parametros;
        try {
            empresa = CNum(empresa) <= 0 ? ValoresSismoura.EmpresaPadraoUsuario : empresa;
            parametros = {
                codigoContaContabil: codigoContaContabil,
                empresa: empresa
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (retorno.Erro) {
                MostrarAlerta(retorno.MensagemAlerta);
            }
            return !retorno.Erro;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_DesTit.prototype.OnBuscouContaContabil = function (s, e) {
        if (CNum(this.txtContaContabil.GetText()) > 0) {
            if (!this.VerificarContaContabilEmpresa(CNum(this.txtContaContabil.GetText()), this.cboContaCorrente.GetEmpresa())) {
                this.txtContaContabil.Limpar();
            }
        }
    };
    return C_DesTit;
}(MouraPageAngular));
var c_DesTit = new C_DesTit();
//# sourceMappingURL=C_DesTit.js.map