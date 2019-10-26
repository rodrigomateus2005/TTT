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
var R_RCCOM = /** @class */ (function (_super) {
    __extends(R_RCCOM, _super);
    function R_RCCOM() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_RCCOM.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RCCOM.prototype, "mdEmail", {
        get: function () {
            return window['mdEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RCCOM.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RCCOM.prototype, "mouraEmail", {
        get: function () {
            return window['mouraEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RCCOM.prototype, "lstFormaPagamento", {
        get: function () {
            return window['lstFormaPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RCCOM.prototype, "btnEnviar", {
        get: function () {
            return window['btnEnviar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RCCOM.prototype, "btnGerarLista", {
        get: function () {
            return window['btnGerarLista_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RCCOM.prototype, "btnImprimirC", {
        get: function () {
            return window['btnImprimirC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RCCOM.prototype, "btnCancelar", {
        get: function () {
            return window['btnCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RCCOM.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RCCOM.prototype, "Email", {
        get: function () {
            if (!this.GetScope()["Email"]) {
                this.GetScope()["Email"] = {};
            }
            return this.GetScope()["Email"];
        },
        set: function (value) {
            this.GetScope()["Email"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RCCOM.prototype, "btnEnviarEmail", {
        get: function () {
            return window['btnEnviarEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_RCCOM.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_RCCOM.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnGerarLista) {
            adicionarEventoMoura(this.btnGerarLista.Click, this.OnClickMalaDireta, this);
        }
        if (this.btnEnviar) {
            adicionarEventoMoura(this.btnEnviar.Click, this.OnClickEnviar, this);
        }
        if (this.btnImprimirC) {
            adicionarEventoMoura(this.btnImprimirC.Click, this.OnClickImprimir, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnClickCancelar, this);
        }
        if (this.btnEnviarEmail) {
            adicionarEventoMoura(this.btnEnviarEmail.Click, this.OnClickEnviarEmail, this);
        }
    };
    R_RCCOM.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (this.ValidarCamposObrigatorios()) {
            try {
                parametros = {
                    dataInicial: this.Filtro.Periodo_Inicial,
                    dataFinal: this.Filtro.Periodo_Final,
                    codCliente: CNum(this.Filtro.Cliente),
                    contaCorrente: this.cboContaCorrente.GetContaCorrente(),
                    formaPagamento: this.lstFormaPagamento.GetValues().join(",")
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    _this.AccordionFiltros.SetExpanded(false);
                }, function (erro) {
                    fecharEspera();
                    LogarException(erro);
                }, this);
            }
            catch (ex) {
                fecharEspera();
                LogarException(ex);
            }
        }
    };
    R_RCCOM.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Cliente = 0;
        this.lstFormaPagamento.LimparSelecao();
        this.cboContaCorrente.Combo.SetSelectedIndex(0);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.grid.PreencherGrid(null);
        this.AccordionFiltros.SetExpanded(true);
        this.LimparCamposModal();
        this.RefreshAngular();
    };
    R_RCCOM.prototype.LimparCamposModal = function () {
        this.Email.Assunto = "";
        this.Email.Mensagem = "";
        this.Email.Config = "";
        this.RefreshAngular();
    };
    R_RCCOM.prototype.OnClickMalaDireta = function (s, e) {
        e.processOnServer = false;
        if (this.grid.GetSelectedRowsData.length <= 0) {
            MostrarAlerta("Nenhum cliente foi selecionado!");
            return;
        }
        this.GerarListaMalaDireta();
    };
    R_RCCOM.prototype.GerarListaMalaDireta = function () {
        var parametros;
        try {
            parametros = {
                codClientes: this.grid.GetSelectedRowsData.map(function (item) { return item.Codigo_Cliente; }),
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarListaMalaDireta", parametros, function (d) {
                fecharEspera();
                MostrarMensagem("Lista gerada com sucesso!");
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
    R_RCCOM.prototype.OnClickEnviar = function (s, e) {
        e.processOnServer = false;
        if (CNum(this.Filtro.Modelo) > 0) {
            if (this.grid.GetSelectedRowsData.length > 0) {
                if (this.VerificaDestinarios()) {
                    this.LimparCamposModal();
                    this.mdEmail.Show();
                }
            }
            else {
                MostrarAlerta("Selecione ao menos um cliente!");
            }
        }
    };
    R_RCCOM.prototype.VerificaDestinarios = function () {
        var clientes = this.grid.GetSelectedRowsData;
        for (var x = 0; x < clientes.length; x++) {
            if (String.IsNullOrWhiteSpace(clientes[x].Email)) {
                MostrarAlerta("O cliente " + clientes[x].Nome_Cliente + " não possui um endereço de E-Mail cadastrado. Por favor, informe-o no Cadastro de Clientes!");
                return false;
            }
        }
        return true;
    };
    R_RCCOM.prototype.OnClickImprimir = function (s, e) {
        if (this.ValidarCamposObrigatorios()) {
            if (CNum(this.Filtro.Modelo) > 0) {
                if (CNum(this.Filtro.Comunicado) > 0) {
                    if (this.grid.GetSelectedRowsData.length > 0) {
                        this.Imprimir();
                    }
                    else {
                        MostrarAlerta("Selecione ao mesno um cliente!");
                    }
                }
                else {
                    MostrarMensagemCampoObrigatorio("Comunicado");
                }
            }
            else {
                MostrarMensagemCampoObrigatorio("Modelo Comunicado");
            }
        }
    };
    R_RCCOM.prototype.Imprimir = function () {
        var parametros;
        try {
            parametros = {
                codModelo: CNum(this.Filtro.Modelo),
                codComunicado: CNum(this.Filtro.Comunicado),
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                dadosGrade: JSON.stringify(this.grid.GetSelectedRowsData)
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("Imprimir", parametros, function (d) {
                fecharEspera();
                AbrirReport("~/Report/Fixos/", "ComunicadoClientesContasR.REPX");
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
    R_RCCOM.prototype.OnClickCancelar = function (s, e) {
        e.processOnServer = false;
        this.mdEmail.Hide();
    };
    R_RCCOM.prototype.OnClickEnviarEmail = function (s, e) {
        e.processOnServer = false;
        if (this.ValidarCamposModal()) {
            this.EnviarEmail();
        }
    };
    R_RCCOM.prototype.EnviarEmail = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                assunto: this.Email.Assunto,
                mensagem: this.Email.Mensagem,
                codConfig: CNum(this.Email.Config),
                dadosGrade: JSON.stringify(this.grid.GetSelectedRowsData),
                codModelo: CNum(this.Filtro.Modelo),
                formasPagamento: this.lstFormaPagamento.GetValues().join(",")
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("EnviarEmail", parametros, function (d) {
                fecharEspera();
                MostrarMensagem("E-Mail(s) enviado(s) com sucesso!");
                _this.mdEmail.Hide();
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
    R_RCCOM.prototype.ValidarCamposModal = function () {
        var retorno = true;
        if (String.IsNullOrWhiteSpace(this.Email.Assunto)) {
            retorno = false;
            MostrarMensagemCampoObrigatorio("Assunto");
        }
        else if (String.IsNullOrWhiteSpace(this.Email.Mensagem)) {
            retorno = false;
            MostrarMensagemCampoObrigatorio("Mensagem");
        }
        else if (String.IsNullOrWhiteSpace(this.Email.Config)) {
            retorno = false;
            MostrarMensagemCampoObrigatorio("Configuração de E-Mail");
        }
        return retorno;
    };
    return R_RCCOM;
}(MouraPageRelacaoAngular));
var r_RCCOM = new R_RCCOM();
//# sourceMappingURL=R_RCCOM.js.map