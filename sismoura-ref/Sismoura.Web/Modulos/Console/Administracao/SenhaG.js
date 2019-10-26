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
var SenhaG = /** @class */ (function (_super) {
    __extends(SenhaG, _super);
    function SenhaG() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SenhaG.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SenhaG.prototype, "txtAtendente", {
        get: function () {
            return window['txtAtendente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SenhaG.prototype, "txtContato", {
        get: function () {
            return window['txtContato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SenhaG.prototype, "lblSenha", {
        get: function () {
            return window['lblSenha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SenhaG.prototype, "lblCnpj", {
        get: function () {
            return window['lblCnpj_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SenhaG.prototype, "lblEndereco", {
        get: function () {
            return window['lblEndereco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SenhaG.prototype, "lblDiaPagamento", {
        get: function () {
            return window['lblDiaPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SenhaG.prototype, "lblValor", {
        get: function () {
            return window['lblValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SenhaG.prototype, "lblUltimoPagamento", {
        get: function () {
            return window['lblUltimoPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SenhaG.prototype, "lblVencido", {
        get: function () {
            return window['lblVencido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SenhaG.prototype, "lbSenhalQtdeMaquinas", {
        get: function () {
            return window['lbSenhalQtdeMaquinas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SenhaG.prototype, "hdnSenhaTag", {
        get: function () {
            return window["hdnSenhaTag"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SenhaG.prototype, "btnAntiga", {
        get: function () {
            return window['btnAntiga_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SenhaG.prototype, "btnSenhaTresDias", {
        get: function () {
            return window['btnSenhaTresDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SenhaG.prototype, "btnRegistrarQtdeMaquinas", {
        get: function () {
            return window['btnRegistrarQtdeMaquinas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SenhaG.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SenhaG.prototype, "btnAtualizado", {
        get: function () {
            return window['btnAtualizado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SenhaG.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SenhaG.prototype, "RetornoFinanceiroCliente", {
        get: function () {
            return this.GetScope()["RetornoFinanceiroCliente"];
        },
        set: function (value) {
            this.GetScope()["RetornoFinanceiroCliente"] = value;
        },
        enumerable: true,
        configurable: true
    });
    SenhaG.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtCliente)
            adicionarEventoMoura(this.txtCliente.Procurou, this.OnDepoisProcurarCliente, this);
        if (this.txtAtendente)
            adicionarEventoMoura(this.txtAtendente.AntesAbrirProcura, this.OnAntesAbrirProcuraAtendente, this);
        if (this.btnLimpar)
            adicionarEventoMoura(this.btnLimpar.Click, this.OnClickBtnLimpar, this);
        if (this.btnGravar)
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickBtnGravar, this);
        if (this.btnAntiga)
            adicionarEventoMoura(this.btnAntiga.Click, this.OnClickBtnAntiga, this);
        if (this.btnSenhaTresDias)
            adicionarEventoMoura(this.btnSenhaTresDias.Click, this.OnClickBtnSenhaTresDias, this);
        if (this.btnRegistrarQtdeMaquinas)
            adicionarEventoMoura(this.btnRegistrarQtdeMaquinas.Click, this.OnClickBtnRegistrarQtdeMaquinas, this);
        if (this.btnAtualizado)
            adicionarEventoMoura(this.btnAtualizado.Click, this.OnClickBtnAtualizado, this);
    };
    SenhaG.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos(true);
    };
    SenhaG.prototype.OnClickBtnLimpar = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos(true);
    };
    SenhaG.prototype.LimparCampos = function (limparCliente) {
        this.hdnSenhaTag.value = "";
        this.txtAtendente.Limpar();
        this.txtContato.Limpar();
        this.lblDiaPagamento.Text = "";
        this.lblUltimoPagamento.Text = "";
        this.lblValor.Text = "";
        this.lblVencido.Text = "";
        this.lbSenhalQtdeMaquinas.Text = "";
        this.lbSenhalQtdeMaquinas.Visible = false;
        this.btnAntiga.Visible = false;
        this.btnSenhaTresDias.Visible = false;
        this.btnAtualizado.Visible = false;
        if (limparCliente) {
            this.txtCliente.Limpar();
            this.txtCliente.Focus();
        }
        this.entrouPergunta = false;
        this.RetornoFinanceiroCliente = null;
        this.RefreshAngular();
    };
    SenhaG.prototype.OnDepoisProcurarCliente = function (s, e) {
        try {
            if (this.txtCliente.GetText().CNum() <= 0) {
                this.LimparCampos(true);
                return;
            }
            this.LimparCampos(false);
            var parametros = void 0;
            parametros = { codCliente: this.txtCliente.GetText().CNum() };
            var retornoFinanceiro = this.ExecutarFuncaoServerSideSynch("GetRetornoFinanceiroCliente", parametros);
            if (!retornoFinanceiro || retornoFinanceiro.ClienteNaoCadastrado) {
                MostrarAlerta("Cliente não cadastrado!");
                this.LimparCampos(true);
                return;
            }
            if (retornoFinanceiro.ClienteInativo) {
                MostrarAlerta("Cliente " + retornoFinanceiro.Cliente.Nome + " está Inativo!");
                this.LimparCampos(true);
                return;
            }
            if (retornoFinanceiro.ClienteSemContrato) {
                MostrarAlerta("O Cliente " + retornoFinanceiro.Cliente.Nome + " não possui contrato! Favor entrar em contato com o Financeiro!");
                this.LimparCampos(true);
                return;
            }
            if (String.IsNullOrWhiteSpace(retornoFinanceiro.SenhaTresDias) && String.IsNullOrWhiteSpace(retornoFinanceiro.SenhaNormal)) {
                MostrarAlerta("Cliente com débitos vencidos à " + retornoFinanceiro.DiasDebitos + " dia(s) e o usuário logado não possui permissão para liberar a senha!");
                this.LimparCampos(true);
                return;
            }
            if (String.IsNullOrWhiteSpace(retornoFinanceiro.SenhaNormal)) {
                MostrarAlerta("Cliente com débitos vencidos à " + retornoFinanceiro.DiasDebitos + " dia(s). Apenas a senha de 3 dias será liberada!");
                this.btnSenhaTresDias.Visible = true;
            }
            if (retornoFinanceiro.DiasDebitos >= 30) {
                MostrarAlerta("Cliente com débitos vencidos à " + retornoFinanceiro.DiasDebitos + " dias!");
            }
            this.RetornoFinanceiroCliente = retornoFinanceiro;
            this.RefreshAngular();
            if (this.RetornoFinanceiroCliente.ClienteDesatualizado) {
                this.AtualizarSenhaAntiga();
            }
            if (retornoFinanceiro.Cliente.Vencimento) {
                var diaPagamento = ConvertToDate(retornoFinanceiro.Cliente.Vencimento).getDate().toString();
                if (diaPagamento.length < 2)
                    diaPagamento = ('0' + diaPagamento);
                this.lblDiaPagamento.Text = diaPagamento;
            }
            this.lblUltimoPagamento.Text = (retornoFinanceiro.Cliente.Ultimo_Pagamento) ? ConvertToDate(retornoFinanceiro.Cliente.Ultimo_Pagamento).FormataData() : "";
            this.lblValor.Text = (retornoFinanceiro.Cliente.Valor) ? retornoFinanceiro.Cliente.Valor.Format(2) : "";
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    SenhaG.prototype.OnAntesAbrirProcuraAtendente = function (s, e) {
        e.Cancelar = false;
        this.txtAtendente.AddParametro("notUsuarioEmpresa", "1");
    };
    SenhaG.prototype.AtualizarSenhaAntiga = function () {
        var _this = this;
        if (this.RetornoFinanceiroCliente && this.RetornoFinanceiroCliente.ClienteDesatualizado) {
            MsgBoxJS("Informe a senha: " + this.RetornoFinanceiroCliente.SenhaNormalAntiga + "<br>Deu certo a senha passada?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.No)
                    MsgBoxJS("Pergunte: <br> Nesta tela que pediu a senha, existe uma mensagem grande dizendo: 'Sua licença de uso expirou. Você pode renová-la automaticamente pela internet ou entrar em contato com a Moura Informática pelos telefones abaixo ou através do suporte on-line no site www.jnmoura.com.br.'? <br> A mensagem existe?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                        if (result.Resultado == MsgBoxResult.No)
                            MsgBoxJS("Pergunte: <br> A data do computador é a dia " + new Date().FormataData() + " (data de hoje)", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                                if (result.Resultado == MsgBoxResult.No)
                                    MsgBoxJS("Peça para alterar a data do computador. Caso não foi possível mudar a data, fale com o suporte para ajudá-lo.", MsgBoxOptions.OkOnly, MsgBoxIcon.Info, function (result) {
                                        return;
                                    });
                            });
                        else {
                            _this.SistemaAtualizado(_this.txtCliente.GetText().CNum());
                        }
                    });
            });
        }
    };
    SenhaG.prototype.OnClickBtnGravar = function (s, e) {
        e.processOnServer = false;
        var cliente = this.txtCliente.GetText().CNum();
        var atendente = this.txtAtendente.GetText().CNum();
        var contato = this.txtContato.GetText();
        if (cliente <= 0) {
            MostrarAlerta("Informe o Cliente!");
            return;
        }
        if (atendente <= 0) {
            MostrarAlerta("Informe o Atendendte!");
            return;
        }
        if (String.IsNullOrWhiteSpace(contato)) {
            MostrarAlerta("Informe o Contato no Cliente!");
            return;
        }
        var parametros = {
            codCliente: cliente,
            senha: this.lblSenha.Text,
            codUsuario: atendente,
            contato: contato,
            tela: ValoresSismoura.NomeTela
        };
        this.ExecutarFuncaoServerSideSynch("GravarClienteSenha", parametros);
        this.LimparCampos(true);
    };
    SenhaG.prototype.OnClickBtnAntiga = function (s, e) {
        e.processOnServer = false;
        if (this.RetornoFinanceiroCliente) {
            MsgBoxJS(this.RetornoFinanceiroCliente.SenhaNormalAntiga, MsgBoxOptions.OkOnly, MsgBoxIcon.Info, function (result) {
                setTimeout(function () { }, 200);
            }, null);
        }
    };
    SenhaG.prototype.OnClickBtnSenhaTresDias = function (s, e) {
        e.processOnServer = false;
        if (this.RetornoFinanceiroCliente) {
            if (!String.IsNullOrWhiteSpace(this.RetornoFinanceiroCliente.SenhaTresDias))
                MsgBoxJS("Esta senha vai liberar o sistema para uso durante 3 dias apenas! Senha: " + this.RetornoFinanceiroCliente.SenhaTresDias, MsgBoxOptions.OkOnly, MsgBoxIcon.Info, function (result) {
                    setTimeout(function () { }, 200);
                }, null);
        }
    };
    SenhaG.prototype.OnClickBtnRegistrarQtdeMaquinas = function (s, e) {
        e.processOnServer = false;
        if (!this.RetornoFinanceiroCliente || !this.RetornoFinanceiroCliente.Cliente) {
            return;
        }
        try {
            var cnpj = this.RetornoFinanceiroCliente.Cliente.Cpf;
            if (String.IsNullOrWhiteSpace(cnpj))
                return;
            var codCliente = this.txtCliente.GetText().CNum();
            if (codCliente <= 0)
                return;
            prompt("Informe a senha gerada no sistema do cliente");
            var parametros = {
                codCliente: codCliente,
                cnpj: cnpj
            };
            var senha = this.ExecutarFuncaoServerSideSynch("GetQtdeMaquinas", parametros);
            this.lbSenhalQtdeMaquinas.Visible = true;
            this.lbSenhalQtdeMaquinas.Text = senha;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    SenhaG.prototype.OnClickBtnAtualizado = function (s, e) {
        e.processOnServer = false;
        var cliente = this.txtCliente.GetText().CNum();
        if (cliente <= 0)
            return;
        this.SistemaAtualizado(cliente);
    };
    SenhaG.prototype.SistemaAtualizado = function (codCliente) {
        try {
            this.ExecutarFuncaoServerSideSynch("SistemaAtualizado", { codCliente: codCliente });
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return SenhaG;
}(MouraPageAngular));
var senhaG = new SenhaG();
//# sourceMappingURL=SenhaG.js.map