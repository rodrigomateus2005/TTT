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
var C_CcCcor = /** @class */ (function (_super) {
    __extends(C_CcCcor, _super);
    function C_CcCcor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CcCcor.prototype, "txtContaContabil_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaContabil_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CcCcor.prototype, "txtContaContabilFornecedor_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaContabilFornecedor_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CcCcor.prototype, "txtContaContabilCliente_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaContabilCliente_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CcCcor.prototype, "txtContaJuros_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaJuros_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CcCcor.prototype, "txtContaDesconto_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaDesconto_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CcCcor.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CcCcor.prototype, "txtContaContabilFornecedor", {
        get: function () {
            return window['txtContaContabilFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CcCcor.prototype, "txtContaContabilCliente", {
        get: function () {
            return window['txtContaContabilCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CcCcor.prototype, "txtContaJuros", {
        get: function () {
            return window['txtContaJuros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CcCcor.prototype, "txtContaDesconto", {
        get: function () {
            return window['txtContaDesconto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CcCcor.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CcCcor.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CcCcor.prototype, "chkLancamentoMultiplo", {
        get: function () {
            return window['chkLancamentoMultiplo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CcCcor.prototype, "txtHistoricoBaixaPagar", {
        get: function () {
            return window['txtHistoricoBaixaPagar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CcCcor.prototype, "txtHistoricoBaixaReceber", {
        get: function () {
            return window['txtHistoricoBaixaReceber_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CcCcor.prototype, "txtHistoricoTransferencia", {
        get: function () {
            return window['txtHistoricoTransferencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CcCcor.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CcCcor.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CcCcor.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CcCcor.prototype, "txtContaContabilMulta", {
        get: function () {
            return window['txtContaContabilMulta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_CcCcor.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtContaDesconto) {
            adicionarEventoMoura(this.txtContaDesconto.AntesAbrirProcura, this.OnContaContabilDescontoAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaDesconto.PesquisandoContabil, this.OnContaContabilDescontoPesquisando, this);
        }
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnClickBotaoLinha, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickGravar, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.OnClickLimpar, this);
        }
        if (this.txtContaJuros) {
            adicionarEventoMoura(this.txtContaJuros.AntesAbrirProcura, this.OnContaContabilJurosAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaJuros.PesquisandoContabil, this.OnContaContabilJurosPesquisando, this);
        }
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.AntesAbrirProcura, this.OnContaContabilAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaContabil.PesquisandoContabil, this.OnContaContabilPesquisando, this);
        }
        if (this.txtContaContabilFornecedor) {
            adicionarEventoMoura(this.txtContaContabilFornecedor.AntesAbrirProcura, this.OnContaContabilFornecedorAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaContabilFornecedor.PesquisandoContabil, this.OnContaContabilFornecedorPesquisando, this);
        }
        if (this.txtContaContabilCliente) {
            adicionarEventoMoura(this.txtContaContabil.AntesAbrirProcura, this.OnContaContabilClienteAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaContabil.PesquisandoContabil, this.OnContaContabilPesquisando, this);
        }
        if (this.cboContaCorrente) {
            adicionarEventoDevExpress(this.cboContaCorrente.Combo.SelectedIndexChanged, this.PreencherTela, this);
        }
        if (this.cboEmpresa) {
            this.cboEmpresa.Visible = false;
        }
        if (this.txtContaContabilMulta) {
            adicionarEventoMoura(this.txtContaContabilMulta.AntesAbrirProcura, this.OnContaContabilMultaAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaContabilMulta.PesquisandoContabil, this.OnContaContabilMultaPesquisando, this);
        }
    };
    C_CcCcor.prototype.OnClickBotaoLinha = function (s, e) {
        try {
            this.cboContaCorrente.SetContaCorrente(e.rowKey);
            this.PreencherTela();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CcCcor.prototype.OnClickLimpar = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
        this.cboContaCorrente.Limpar();
    };
    C_CcCcor.prototype.OnClickGravar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        var parametros = {
            contaCorrente: this.cboContaCorrente.GetContaCorrente(),
            contaContabil: this.txtContaContabil.GetText().CNum(),
            contaContabilCliente: this.txtContaContabilCliente.GetText().CNum(),
            contaContabilFornecedor: this.txtContaContabilFornecedor.GetText().CNum(),
            historicoTransferencia: this.txtHistoricoTransferencia.GetText().CNum(),
            historicoBaixaPagar: this.txtHistoricoBaixaPagar.GetText().CNum(),
            historicoBaixaReceber: this.txtHistoricoBaixaReceber.GetText().CNum(),
            contaDesconto: this.txtContaDesconto.GetText().CNum(),
            contaJuros: this.txtContaJuros.GetText().CNum(),
            lancamentoMultiplo: this.chkLancamentoMultiplo.Checked,
            contaContabilMulta: this.txtContaContabilMulta.GetText().CNum()
        };
        abrirEspera("");
        this.ExecutarFuncaoServerSideAsynch("Gravar", parametros, function (d) {
            fecharEspera();
            var retorno = GetRetornoAJAX(d);
            if (retorno == "") {
                MostrarMensagem("Gravado com sucesso!");
                _this.GetRegistrosCadastrados();
            }
            else {
                MostrarAlerta(retorno);
            }
        }, this.TratarErroFuncaoAsync, this);
    };
    C_CcCcor.prototype.GetRegistrosCadastrados = function () {
        var parametros = {};
        var retorno = this.ExecutarFuncaoServerSideSynch("GetRegistrosCadastrados", parametros);
        if (retorno) {
            this.Grid.PreencherGrid(retorno);
        }
        else {
            this.Grid.PreencherGrid(null);
        }
    };
    C_CcCcor.prototype.PreencherEmpresaContabil = function (codEmpresa) {
        if (this.txtContaContabil_hdnEmpresaContabil != undefined) {
            this.txtContaContabil_hdnEmpresaContabil.value = codEmpresa;
        }
        if (this.txtContaContabilFornecedor_hdnEmpresaContabil != undefined) {
            this.txtContaContabilFornecedor_hdnEmpresaContabil.value = codEmpresa;
        }
        if (this.txtContaContabilCliente_hdnEmpresaContabil != undefined) {
            this.txtContaContabilCliente_hdnEmpresaContabil.value = codEmpresa;
        }
        if (this.txtContaDesconto_hdnEmpresaContabil != undefined) {
            this.txtContaDesconto_hdnEmpresaContabil.value = codEmpresa;
        }
        if (this.txtContaJuros_hdnEmpresaContabil != undefined) {
            this.txtContaJuros_hdnEmpresaContabil.value = codEmpresa;
        }
        if (this.txtContaDesconto) {
            adicionarEventoMoura(this.txtContaDesconto.AntesAbrirProcura, this.OnContaContabilDescontoAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaDesconto.PesquisandoContabil, this.OnContaContabilDescontoPesquisando, this);
        }
        if (this.txtContaJuros) {
            adicionarEventoMoura(this.txtContaJuros.AntesAbrirProcura, this.OnContaContabilJurosAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaJuros.PesquisandoContabil, this.OnContaContabilJurosPesquisando, this);
        }
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.AntesAbrirProcura, this.OnContaContabilAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaContabil.PesquisandoContabil, this.OnContaContabilPesquisando, this);
        }
        if (this.txtContaContabilFornecedor) {
            adicionarEventoMoura(this.txtContaContabilFornecedor.PesquisandoContabil, this.OnContaContabilFornecedorPesquisando, this);
            adicionarEventoMoura(this.txtContaContabilFornecedor.AntesAbrirProcura, this.OnContaContabilFornecedorAntesAbrirProcura, this);
        }
        if (this.txtContaContabilCliente) {
            adicionarEventoMoura(this.txtContaContabilCliente.AntesAbrirProcura, this.OnContaContabilClienteAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaContabilCliente.PesquisandoContabil, this.OnContaContabilClientePesquisando, this);
        }
        if (this.txtContaContabilMulta) {
            adicionarEventoMoura(this.txtContaContabilMulta.AntesAbrirProcura, this.OnContaContabilMultaAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaContabilMulta.PesquisandoContabil, this.OnContaContabilMultaPesquisando, this);
        }
    };
    C_CcCcor.prototype.PreencherTela = function () {
        var parametros = {
            Codigo: this.cboContaCorrente.GetContaCorrente()
        };
        var entidade;
        entidade = this.ExecutarFuncaoServerSideSynch("GetByContaCorrente", parametros);
        this.LimparCampos();
        if (entidade) {
            if (entidade.Conta_Contabil_Parametro > 0) {
                this.txtContaContabil.Procurar(entidade.Conta_Contabil_Parametro.toString());
            }
            if (entidade.Conta_Contabil_Fornecedor > 0) {
                this.txtContaContabilFornecedor.Procurar(entidade.Conta_Contabil_Fornecedor.toString());
            }
            if (entidade.Conta_Contabil_Cliente > 0) {
                this.txtContaContabilCliente.Procurar(entidade.Conta_Contabil_Cliente.toString());
            }
            if (entidade.Conta_Contabil_Juros > 0) {
                this.txtContaJuros.Procurar(entidade.Conta_Contabil_Juros.toString());
            }
            if (entidade.Conta_Contabil_Desconto > 0) {
                this.txtContaDesconto.Procurar(entidade.Conta_Contabil_Desconto.toString());
            }
            this.chkLancamentoMultiplo.Checked = entidade.Lancamento_Multiplo;
            if (entidade.Historico_Baixa_Pagar > 0) {
                this.txtHistoricoBaixaPagar.Procurar(entidade.Historico_Baixa_Pagar.toString());
            }
            if (entidade.Historico_Baixa_Receber > 0) {
                this.txtHistoricoBaixaReceber.Procurar(entidade.Historico_Baixa_Receber.toString());
            }
            if (entidade.Historico_Transferencia > 0) {
                this.txtHistoricoTransferencia.Procurar(entidade.Historico_Transferencia.toString());
            }
            if (entidade.Conta_Contabil_Multa > 0) {
                this.txtContaContabilMulta.Procurar(entidade.Conta_Contabil_Multa.toString());
            }
            this.cboEmpresa.SetValue(entidade.Cod_Empresa);
            this.PreencherEmpresaContabil(entidade.Cod_Empresa);
        }
        else {
            this.PreencherEmpresaContabil(ValoresSismoura.EmpresaPadraoUsuario);
        }
    };
    C_CcCcor.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.GetRegistrosCadastrados();
    };
    C_CcCcor.prototype.LimparCampos = function () {
        this.txtContaContabil.Limpar();
        this.txtContaContabilCliente.Limpar();
        this.txtContaContabilFornecedor.Limpar();
        this.txtContaDesconto.Limpar();
        this.txtContaJuros.Limpar();
        this.txtHistoricoBaixaPagar.Limpar();
        this.txtHistoricoBaixaReceber.Limpar();
        this.txtHistoricoTransferencia.Limpar();
        this.chkLancamentoMultiplo.Checked = false;
        this.cboEmpresa.LimparSelecao();
        this.txtContaContabilMulta.Limpar();
    };
    C_CcCcor.prototype.OnContaContabilJurosAntesAbrirProcura = function (s, ev) {
        var parametros = {
            contaCorrente: this.cboContaCorrente.GetContaCorrente()
        };
        var codEmpresa = this.ExecutarFuncaoServerSideSynch("GetByEmpresaPadrao", parametros);
        this.txtContaJuros.AddParametro("codEmpresa", codEmpresa);
    };
    C_CcCcor.prototype.OnContaContabilDescontoAntesAbrirProcura = function (s, ev) {
        var parametros = {
            contaCorrente: this.cboContaCorrente.GetContaCorrente()
        };
        var codEmpresa = this.ExecutarFuncaoServerSideSynch("GetByEmpresaPadrao", parametros);
        this.txtContaDesconto.AddParametro("codEmpresa", codEmpresa);
    };
    C_CcCcor.prototype.OnContaContabilAntesAbrirProcura = function (s, ev) {
        var parametros = {
            contaCorrente: this.cboContaCorrente.GetContaCorrente()
        };
        var codEmpresa = this.ExecutarFuncaoServerSideSynch("GetByEmpresaPadrao", parametros);
        this.txtContaContabil.AddParametro("codEmpresa", codEmpresa);
    };
    C_CcCcor.prototype.OnContaContabilMultaAntesAbrirProcura = function (s, ev) {
        var parametros = {
            contaCorrente: this.cboContaCorrente.GetContaCorrente()
        };
        var codEmpresa = this.ExecutarFuncaoServerSideSynch("GetByEmpresaPadrao", parametros);
        this.txtContaContabilMulta.AddParametro("codEmpresa", codEmpresa);
    };
    C_CcCcor.prototype.OnContaContabilJurosPesquisando = function (s, ev) {
        var parametros = {
            contaCorrente: this.cboContaCorrente.GetContaCorrente()
        };
        var codEmpresa = this.ExecutarFuncaoServerSideSynch("GetByEmpresaPadrao", parametros);
        this.txtContaJuros.AddParametro("codEmpresa", codEmpresa);
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        var parametroSintetica;
        parametros = {
            codigoContaContabil: this.txtContaJuros.TextBoxAdicional.value.CNum(),
            empresa: codEmpresa
        };
        parametroReduzido = {
            reduzido: this.txtContaJuros.TextBoxAdicional.value.CNum(),
        };
        parametroSintetica = {
            codigoContaContabil: this.txtContaJuros.TextBoxAdicional.value.CNum(),
        };
        if (this.txtContaJuros.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Contábil não pertence a empresa selecionada!');
                    this.txtContaJuros.Limpar();
                    this.txtContaJuros.Focus();
                }
            }
            else if (this.ExecutarFuncaoServerSideSynch("IsContaSintetica", parametroSintetica)) {
                ev.Cancelar = true;
                MostrarAlerta('A conta contábil deve ser do tipo Analítica!');
                this.txtContaJuros.Limpar();
                this.txtContaJuros.Focus();
            }
        }
    };
    C_CcCcor.prototype.OnContaContabilDescontoPesquisando = function (s, ev) {
        var parametros = {
            contaCorrente: this.cboContaCorrente.GetContaCorrente()
        };
        var codEmpresa = this.ExecutarFuncaoServerSideSynch("GetByEmpresaPadrao", parametros);
        this.txtContaDesconto.AddParametro("codEmpresa", codEmpresa);
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        var parametroSintetica;
        parametros = {
            codigoContaContabil: this.txtContaDesconto.TextBoxAdicional.value.CNum(),
            empresa: codEmpresa
        };
        parametroReduzido = {
            reduzido: this.txtContaDesconto.TextBoxAdicional.value.CNum(),
        };
        parametroSintetica = {
            codigoContaContabil: this.txtContaDesconto.TextBoxAdicional.value.CNum(),
        };
        if (this.txtContaDesconto.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Contábil não pertence a empresa selecionada!');
                    this.txtContaDesconto.Limpar();
                    this.txtContaDesconto.Focus();
                }
            }
            else if (this.ExecutarFuncaoServerSideSynch("IsContaSintetica", parametroSintetica)) {
                ev.Cancelar = true;
                MostrarAlerta('A conta contábil deve ser do tipo Analítica!');
                this.txtContaDesconto.Limpar();
                this.txtContaDesconto.Focus();
            }
        }
    };
    C_CcCcor.prototype.OnContaContabilPesquisando = function (s, ev) {
        var parametros = {
            contaCorrente: this.cboContaCorrente.GetContaCorrente()
        };
        var codEmpresa = this.ExecutarFuncaoServerSideSynch("GetByEmpresaPadrao", parametros);
        this.txtContaContabil.AddParametro("codEmpresa", codEmpresa);
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        var parametroSintetica;
        parametros = {
            codigoContaContabil: this.txtContaContabil.TextBoxAdicional.value.CNum(),
            empresa: codEmpresa
        };
        parametroReduzido = {
            reduzido: this.txtContaContabil.TextBoxAdicional.value.CNum(),
        };
        parametroSintetica = {
            codigoContaContabil: this.txtContaContabil.TextBoxAdicional.value.CNum(),
        };
        if (this.txtContaContabil.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Contábil não pertence a empresa selecionada!');
                    this.txtContaContabil.Limpar();
                    this.txtContaContabil.Focus();
                }
            }
            else if (this.ExecutarFuncaoServerSideSynch("IsContaSintetica", parametroSintetica)) {
                ev.Cancelar = true;
                MostrarAlerta('A conta contábil deve ser do tipo Analítica!');
                this.txtContaContabil.Limpar();
                this.txtContaContabil.Focus();
            }
        }
    };
    C_CcCcor.prototype.OnContaContabilMultaPesquisando = function (s, ev) {
        var parametros = {
            contaCorrente: this.cboContaCorrente.GetContaCorrente()
        };
        var codEmpresa = this.ExecutarFuncaoServerSideSynch("GetByEmpresaPadrao", parametros);
        this.txtContaContabilMulta.AddParametro("codEmpresa", codEmpresa);
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        var parametroSintetica;
        parametros = {
            codigoContaContabil: this.txtContaContabilMulta.TextBoxAdicional.value.CNum(),
            empresa: codEmpresa
        };
        parametroReduzido = {
            reduzido: this.txtContaContabilMulta.TextBoxAdicional.value.CNum(),
        };
        parametroSintetica = {
            codigoContaContabil: this.txtContaContabilMulta.TextBoxAdicional.value.CNum(),
        };
        if (this.txtContaContabilMulta.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Contábil não pertence a empresa selecionada!');
                    this.txtContaContabilMulta.Limpar();
                    this.txtContaContabilMulta.Focus();
                }
            }
            else if (this.ExecutarFuncaoServerSideSynch("IsContaSintetica", parametroSintetica)) {
                ev.Cancelar = true;
                MostrarAlerta('A conta contábil deve ser do tipo Analítica!');
                this.txtContaContabilMulta.Limpar();
                this.txtContaContabilMulta.Focus();
            }
        }
    };
    C_CcCcor.prototype.OnContaContabilFornecedorAntesAbrirProcura = function (s, ev) {
        var parametros = {
            contaCorrente: this.cboContaCorrente.GetContaCorrente()
        };
        var codEmpresa = this.ExecutarFuncaoServerSideSynch("GetByEmpresaPadrao", parametros);
        this.txtContaContabilFornecedor.AddParametro("codEmpresa", codEmpresa);
    };
    C_CcCcor.prototype.OnContaContabilFornecedorPesquisando = function (s, ev) {
        var parametros = {
            contaCorrente: this.cboContaCorrente.GetContaCorrente()
        };
        var codEmpresa = this.ExecutarFuncaoServerSideSynch("GetByEmpresaPadrao", parametros);
        this.txtContaContabilFornecedor.AddParametro("codEmpresa", codEmpresa);
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        var parametroSintetica;
        parametros = {
            codigoContaContabil: this.txtContaContabilFornecedor.TextBoxAdicional.value.CNum(),
            empresa: codEmpresa
        };
        parametroReduzido = {
            reduzido: this.txtContaContabilFornecedor.TextBoxAdicional.value.CNum(),
        };
        parametroSintetica = {
            codigoContaContabil: this.txtContaContabilFornecedor.TextBoxAdicional.value.CNum(),
        };
        if (this.txtContaContabilFornecedor.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Contábil não pertence a empresa selecionada!');
                    this.txtContaContabilFornecedor.Limpar();
                    this.txtContaContabilFornecedor.Focus();
                }
            }
            else if (this.ExecutarFuncaoServerSideSynch("IsContaSintetica", parametroSintetica)) {
                ev.Cancelar = true;
                MostrarAlerta('A conta contábil deve ser do tipo Analítica!');
                this.txtContaContabilFornecedor.Limpar();
                this.txtContaContabilFornecedor.Focus();
            }
        }
    };
    C_CcCcor.prototype.OnContaContabilClienteAntesAbrirProcura = function (s, ev) {
        var parametros = {
            contaCorrente: this.cboContaCorrente.GetContaCorrente()
        };
        var codEmpresa = this.ExecutarFuncaoServerSideSynch("GetByEmpresaPadrao", parametros);
        this.txtContaContabilCliente.AddParametro("codEmpresa", codEmpresa);
    };
    C_CcCcor.prototype.OnContaContabilClientePesquisando = function (s, ev) {
        var parametros = {
            contaCorrente: this.cboContaCorrente.GetContaCorrente()
        };
        var codEmpresa = this.ExecutarFuncaoServerSideSynch("GetByEmpresaPadrao", parametros);
        this.txtContaContabilCliente.AddParametro("codEmpresa", codEmpresa);
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        var parametroSintetica;
        parametros = {
            codigoContaContabil: this.txtContaContabilCliente.TextBoxAdicional.value.CNum(),
            empresa: codEmpresa
        };
        parametroReduzido = {
            reduzido: this.txtContaContabilCliente.TextBoxAdicional.value.CNum(),
        };
        parametroSintetica = {
            codigoContaContabil: this.txtContaContabilCliente.TextBoxAdicional.value.CNum(),
        };
        if (this.txtContaContabilCliente.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Contábil não pertence a empresa selecionada!');
                    this.txtContaContabilCliente.Limpar();
                    this.txtContaContabilCliente.Focus();
                }
            }
            else if (this.ExecutarFuncaoServerSideSynch("IsContaSintetica", parametroSintetica)) {
                ev.Cancelar = true;
                MostrarAlerta('A conta contábil deve ser do tipo Analítica!');
                this.txtContaContabilCliente.Limpar();
                this.txtContaContabilCliente.Focus();
            }
        }
    };
    return C_CcCcor;
}(MouraPageAngular));
var c_CcCcor = new C_CcCcor();
//# sourceMappingURL=C_CcCcor.js.map