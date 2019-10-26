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
var C_RBaixa = /** @class */ (function (_super) {
    __extends(C_RBaixa, _super);
    function C_RBaixa() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.creditoCliente = 0;
        return _this;
    }
    Object.defineProperty(C_RBaixa.prototype, "BaixaReceber", {
        get: function () {
            return window['BaixaReceber_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RBaixa.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RBaixa.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RBaixa.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RBaixa.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RBaixa.prototype, "mdResiduo", {
        get: function () {
            return window['mdResiduo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RBaixa.prototype, "mdCredito", {
        get: function () {
            return window['mdCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RBaixa.prototype, "btnCancelarResiduo", {
        get: function () {
            return window['btnCancelarResiduo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RBaixa.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RBaixa.prototype, "btnBaixar", {
        get: function () {
            return window['btnBaixar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RBaixa.prototype, "btnOkResiduo", {
        get: function () {
            return window['btnOkResiduo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RBaixa.prototype, "btnOkCredito", {
        get: function () {
            return window['btnOkCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RBaixa.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RBaixa.prototype, "Valor", {
        get: function () {
            if (!this.GetScope()["Valor"]) {
                this.GetScope()["Valor"] = {};
            }
            return this.GetScope()["Valor"];
        },
        set: function (value) {
            this.GetScope()["Valor"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RBaixa.prototype, "Residuo", {
        get: function () {
            if (!this.GetScope()["Residuo"]) {
                this.GetScope()["Residuo"] = {};
            }
            return this.GetScope()["Residuo"];
        },
        set: function (value) {
            this.GetScope()["Residuo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RBaixa.prototype, "Credito", {
        get: function () {
            if (!this.GetScope()["Credito"]) {
                this.GetScope()["Credito"] = {};
            }
            return this.GetScope()["Credito"];
        },
        set: function (value) {
            this.GetScope()["Credito"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RBaixa.prototype, "txtMulta", {
        //get Multa(): any {
        //    if (!this.GetScope()["Multa"]) {
        //        this.GetScope()["Multa"] = {};
        //    }
        //    return this.GetScope()["Multa"];
        //}
        //set Multa(value: any) {
        //    this.GetScope()["Multa"] = value;
        //}
        get: function () {
            return window['txtMulta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_RBaixa.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.OnClickLimpar, this);
        }
        if (this.btnCancelarResiduo) {
            adicionarEventoMoura(this.btnCancelarResiduo.Click, this.OnClickCancelarResiduo, this);
        }
        if (this.btnBaixar) {
            adicionarEventoMoura(this.btnBaixar.Click, this.OnClickBaixar, this);
        }
        if (this.txtCliente) {
            adicionarEventoMoura(this.txtCliente.Procurou, this.OnProcurouCliente, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnMudouEmpresa, this);
        }
        if (this.btnOkResiduo) {
            adicionarEventoMoura(this.btnOkResiduo.Click, this.OnClickOkResiduo, this);
        }
        if (this.btnOkCredito) {
            adicionarEventoMoura(this.btnOkCredito.Click, this.OnClickOkCredito, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.BaixaReceber) {
            adicionarEventoMoura(this.BaixaReceber.BaixouConta, this.OnBaixouConta, this);
        }
    };
    C_RBaixa.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().CalculaTotalBaixaReceber) {
            this.GetScope().CalculaTotalBaixaReceber = $.proxy(this.CalculaTotalBaixaReceber, this);
            var that = this;
            this.GetScope().$watch(function () { return that.EntityTela.Valor_Abatimento; }, this.GetScope().CalculaTotalBaixaReceber);
            this.GetScope().$watch(function () { return that.EntityTela.Valor_Juros; }, this.GetScope().CalculaTotalBaixaReceber);
            //this.GetScope().$watch(function () { return that.Valor.Multa }, (<any>this.GetScope()).CalculaTotalBaixaReceber);
            this.GetScope().$watch(function () { return that.EntityTela.Multa; }, this.GetScope().CalculaTotalBaixaReceber);
        }
    };
    C_RBaixa.prototype.OnDepoisBuscarExistente = function (Entity) {
        var _this = this;
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        if (ValoresSismoura.ConfiguracoesRetaguarda.Bloquear_Cliente_Empresa && !this.IsContaReceberEmpresas(Entity.Codigo)) {
            MostrarAlerta("A Conta a Receber não possui vínculo com nenhuma das empresas vinculadas ao usuário logado!");
            this.Limpar();
        }
        else {
            if (Entity.Baixa) {
                MostrarAlerta("Conta a Receber já baixada!");
                setTimeout(function () { return _this.Limpar(); }, 150);
                return;
            }
            else if (Entity.Impagavel) {
                MostrarAlerta("Esta conta está selecionada como impagável. Altere o cadastro da conta antes de realizar a baixar!");
                this.Limpar();
                return;
            }
            if (ValoresSismoura.ConfiguracoesRetaguarda.Trazer_Vencimento_Baixa) {
                Entity.Data_Baixa = Entity.Data_Vencimento;
            }
            else {
                Entity.Data_Baixa = this.DataServidor();
            }
            Entity.Numero_Documento = CNum(Entity.Numero_Documento);
            if (Entity.Data_Vencimento) {
                var multa = 0;
                // Juros
                if (ValoresSismoura.ConfiguracoesRetaguarda.Juros > 0) {
                    var diffTime_1 = this.DataServidor().getTime() - ConvertToDate(Entity.Data_Vencimento).getTime();
                    var dias_1 = Math.ceil(diffTime_1 / (1000 * 60 * 60 * 24));
                    if (dias_1 > 0) {
                        var juros = 0;
                        if (dias_1 > ValoresSismoura.ConfiguracoesRetaguarda.Carencia) {
                            juros = (((dias_1 - 1) / 30) * ValoresSismoura.ConfiguracoesRetaguarda.Juros);
                            Entity.Valor_Juros = (juros * Entity.Valor) / 100;
                        }
                    }
                }
                // Abatimento
                if (ValoresSismoura.ConfiguracoesRetaguarda.Desconto_Antes_Pagto > 0 && Entity.Data_Vencimento > this.DataServidor()) {
                    Entity.Valor_Abatimento = ((Entity.Valor * ValoresSismoura.ConfiguracoesRetaguarda.Desconto_Antes_Pagto) / 100);
                }
                // Multa
                var diffTime = this.DataServidor().getTime() - ConvertToDate(Entity.Data_Vencimento).getTime();
                var dias = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                if (this.txtMulta.Visible && dias < 0) {
                    var porcMulta = CNum(this.ObterPorcentagemMulta());
                    if (porcMulta > 2) {
                        MostrarAlerta("A porcentagem de multa não deve ultrapassar 2% em relação ao valor original da conta. Valor Máximo permitido: (Valor correspondente a 2%)");
                        Entity.Multa = 0;
                        return;
                    }
                    multa = (Entity.Valor * (porcMulta / 100));
                    Entity.Multa = CNum(multa);
                }
                var valorTotal = Entity.Valor + Entity.Valor_Juros - Entity.Valor_Abatimento + Entity.Multa;
            }
            else {
                valorTotal = Entity.Valor;
            }
            this.Valor.ValorTotal = valorTotal;
            this.Valor.ValorPago = valorTotal;
            // Crédito
            if (ValoresSismoura.ConfiguracoesRetaguarda.U_Cred_CR && ValoresSismoura.ConfiguracoesRetaguarda.M_Func_Cred == 0) {
                var pessoa;
                var valor = 0;
                pessoa = this.ObterDadosPessoa(Entity.Codigo_Cliente);
                if (pessoa) {
                    valor = this.GetValorCredito(pessoa);
                    if (valor > valorTotal) {
                        valor = (valorTotal - CNum("0.1"));
                    }
                    if (valor > 0) {
                        this.Valor.Credito = valor;
                        if (valor > valorTotal) {
                            this.Valor.ValorTotal = 0;
                            this.Valor.ValorPago = 0;
                        }
                        else {
                            this.Valor.ValorTotal = valor;
                            this.Valor.ValorPago = valor;
                        }
                        MostrarAlerta("Este cliente possui um crédito de " + valor.Format(2) + " reais e esse valor será descontado nessa operação");
                    }
                }
            }
            if (this.grid.DataSource.length <= 0 && Entity.Codigo_Cliente > 0) {
                this.PreencherGrade(Entity.Codigo_Cliente);
            }
            this.cboContaCorrente.SetContaCorrente(Entity.Conta_Corrente);
        }
        this.verificouData = false;
        this.verificouResiduo = false;
        this.verificouPedirSenha = false;
        this.RefreshAngular();
    };
    C_RBaixa.prototype.Limpar = function () {
        _super.prototype.Limpar.call(this);
        this.EntityTela.Codigo = 0;
        this.EntityTela.Codigo_Cliente = 0;
        this.EntityTela.Data_Emissao = null;
        this.EntityTela.Data_Vencimento = null;
        this.EntityTela.Numero_Documento = 0;
        this.EntityTela.Numero_Orcamento = 0;
        this.EntityTela.Data_Baixa = this.DataServidor();
        this.EntityTela.Valor = 0;
        this.EntityTela.Valor_Juros = 0;
        this.EntityTela.Valor_Abatimento = 0;
        this.Valor.ValorTotal = 0;
        this.Valor.ValorPago = 0;
        this.cboContaCorrente.Limpar();
        this.EntityTela.Observacao = "";
        this.Valor.Recibo = "N";
        this.Valor.Credito = 0;
        this.EntityTela.Empresa = 0;
        this.EntityTela.Multa = 0;
        //this.Valor.Multa = 0;
        //mdCredito
        this.Credito.CreditoCliente = 0;
        this.Credito.ValorOperacao = 0;
        this.Credito.CreditoInformado = 0;
        //mdResiduo
        this.Residuo.DataEmissao = null;
        this.Residuo.DataVencimento = null;
        this.Residuo.ValorOriginal = 0;
        this.Residuo.ValorResiduo = 0;
        this.creditoCliente = 0;
        this.verificouData = false;
        this.verificouResiduo = false;
        this.verificouPedirSenha = false;
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    C_RBaixa.prototype.OnClickLimpar = function (s, e) {
        e.processOnServer = false;
        this.Limpar();
    };
    C_RBaixa.prototype.OnClickCancelarResiduo = function (s, e) {
        e.processOnServer = false;
        this.mdResiduo.Hide();
    };
    C_RBaixa.prototype.CalculaTotalBaixaReceber = function () {
        var txtValorOriginal = CNum(this.EntityTela.Valor);
        var txtDesconto = CNum(this.EntityTela.Valor_Abatimento);
        //var txtAcrescimo = CNum(this.EntityTela.Valor_Juros) + CNum(this.Valor.Multa);
        var txtAcrescimo = CNum(this.EntityTela.Valor_Juros) + CNum(this.EntityTela.Multa);
        var txtCredito = CNum(this.Valor.Credito);
        if (this.CalularPorcentagemMulta()) {
            var valorTotal = txtValorOriginal + txtAcrescimo - txtDesconto - txtCredito;
            if (valorTotal < 0) {
                valorTotal = 0;
            }
            this.Valor.ValorPago = valorTotal;
            this.Valor.ValorTotal = valorTotal;
        }
        this.RefreshAngular();
    };
    C_RBaixa.prototype.PreencherGrade = function (cliente) {
        var _this = this;
        var parametros;
        try {
            parametros = {
                codCliente: cliente,
                usuario: ValoresSismoura.UsuarioLogado,
                empresa: CNum(this.EntityTela.Empresa),
                bloquearClienteEmpresa: ValoresSismoura.ConfiguracoesRetaguarda.Bloquear_Cliente_Empresa
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(retorno);
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
    C_RBaixa.prototype.OnClickBaixar = function (s, e) {
        e.processOnServer = false;
        this.BaixarContaReceber();
    };
    C_RBaixa.prototype.OnProcurouCliente = function (s, e) {
        if (CNum(this.EntityTela.Codigo_Cliente)) {
            this.PreencherGrade(CNum(this.EntityTela.Codigo_Cliente));
        }
    };
    C_RBaixa.prototype.OnMudouEmpresa = function (s, e) {
        this.PreencherGrade(CNum(this.EntityTela.Codigo_Cliente));
    };
    C_RBaixa.prototype.GetValorCredito = function (pessoa) {
        var parametros;
        try {
            parametros = {
                codPessoa: pessoa.Codigo
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetValorCredito", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RBaixa.prototype.IsContaReceberEmpresas = function (codigo) {
        var parametros;
        try {
            parametros = {
                codigo: codigo
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("IsContaReceberEmpresas", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RBaixa.prototype.ValidarCamposObrigatorios = function () {
        var retorno = _super.prototype.ValidarCamposObrigatorios.call(this);
        var mensagem = "Preencha o campo corretamente: ";
        if (retorno) {
            if (CNum(this.EntityTela.Codigo) <= 0) {
                mensagem += "Código<br />";
                retorno = false;
            }
            else if (CNum(this.EntityTela.Valor_Abatimento) > (CNum(this.EntityTela.Valor) + CNum(this.EntityTela.Valor_Juros))) {
                mensagem += "O valor do Abatimento não pode ser maior do que o valor da conta a receber!";
                retorno = false;
            }
            if (!retorno) {
                MostrarAlerta(mensagem);
            }
        }
        return retorno;
    };
    C_RBaixa.prototype.BaixarContaReceber = function () {
        var _this = this;
        try {
            if (!this.ValidarCamposObrigatorios()) {
                return;
            }
            if ((ConvertToDate(this.EntityTela.Data_Baixa) == new Date()) && !(this.verificouData)) {
                this.dlgFuncaoAdm.Verificar("CRAltDa", ValoresSismoura.UsuarioLogado, false, function (retorno) {
                    if (retorno.Autorizado) {
                        _this.verificouData = true;
                        _this.BaixarContaReceber();
                    }
                    else {
                        MostrarAlerta("Usuário sem autorização para a operação");
                        return;
                    }
                }, this);
                return;
            }
            else {
                this.verificouData = true;
            }
            var valorReceber = this.EntityTela.Valor + this.EntityTela.Valor_Juros - this.EntityTela.Valor_Abatimento;
            //Resíduo
            if ((valorReceber > CNum(this.Valor.ValorPago)) && !(this.verificouResiduo)) {
                this.dlgFuncaoAdm.Verificar("CRAltVl", ValoresSismoura.UsuarioLogado, false, function (retorno) {
                    if (retorno.Autorizado) {
                        _this.verificouResiduo = true;
                        _this.BaixarContaReceber();
                    }
                    else {
                        MostrarAlerta("Usuário sem autorização para a operação");
                        return;
                    }
                }, this);
                return;
            }
            else {
                this.verificouResiduo = true;
            }
            var diffTime = new Date().getTime() - ConvertToDate(this.EntityTela.Data_Vencimento).getTime();
            var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            if (!this.verificouPedirSenha) {
                if (ValoresSismoura.ConfiguracoesRetaguarda.Pedir_Senha_Dar_Baixa > 0 && ConvertToDate(this.EntityTela.Data_Vencimento)) {
                    if (diffDays > ValoresSismoura.ConfiguracoesRetaguarda.Pedir_Senha_Dar_Baixa) {
                        // Na base de dados existem 3 itens na tabela Programa com o nome "SolSenBa".
                        // Por esse motivo é necessário passar o código.
                        this.dlgFuncaoAdm.Verificar("SolSenBa", ValoresSismoura.UsuarioLogado, false, function (retorno) {
                            if (retorno.Autorizado) {
                                _this.verificouPedirSenha = true;
                                _this.BaixarContaReceber();
                            }
                            else {
                                MostrarAlerta("Usuário sem autorização para a operação");
                                return;
                            }
                        }, this);
                        return;
                    }
                }
                else {
                    this.verificouPedirSenha = true;
                }
            }
            if (this.ValidarCredito()) {
                this.ValidarBaixa();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RBaixa.prototype.ValidarCredito = function () {
        var _this = this;
        var parametros;
        var valida = false;
        try {
            parametros = {
                codigo: CNum(this.EntityTela.Codigo),
                juros: CNum(this.EntityTela.Valor_Juros),
                abatimento: CNum(this.EntityTela.Valor_Abatimento),
                cliente: CNum(this.EntityTela.Codigo_Cliente)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ValidarCredito", parametros);
            if (retorno) {
                if (retorno.VerificaResiduo) {
                    valida = this.ValidarResiduo(retorno.Valor, CNum(CNum(this.Valor.ValorPago).Format(ValoresSismoura.CasasDecimaisValor)));
                }
                if (retorno.Verifica) {
                    if (retorno.ValorCredito || retorno.ValorReceber) {
                        this.Credito.CreditoCliente = retorno.ValorCredito;
                        this.Credito.ValorOperacao = retorno.ValorReceber;
                        this.Credito.CreditoInformado = 0;
                        this.creditoCliente = retorno.ValorCredito;
                        this.RefreshAngular();
                        valida = false;
                        this.mdCredito.Show();
                    }
                    else if (retorno.Movimentacao) {
                        MsgBoxJS("Caso tenha realizado movimentação com o PDV informado, ao trocar a empresa vinculada poderá gerar inconsistência nos relatórios!", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, function (r) {
                            if (r.Resultado == MsgBoxResult.No) {
                                _this.creditoCliente = 0;
                            }
                            if (_this.ValidarResiduo(retorno.ValorReceber, CNum(CNum(_this.Valor.ValorPago).Format(ValoresSismoura.CasasDecimaisValor)))) {
                                _this.ValidarBaixa();
                            }
                        });
                        valida = false;
                    }
                }
            }
            return valida;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RBaixa.prototype.ValidarResiduo = function (valorReceber, valorPago) {
        if (!ValoresSismoura.ConfiguracoesRetaguarda.Baixa_Rec_Residuo && valorReceber > valorPago) {
            this.Residuo.ValorOriginal = valorReceber.Format(ValoresSismoura.CasasDecimaisValor);
            this.Residuo.ValorResiduo = (valorReceber - valorPago).Format(ValoresSismoura.CasasDecimaisValor);
            this.Residuo.DataVencimento = this.DataServidor().addMonths(1);
            if (ValoresSismoura.ConfiguracoesRetaguarda.CR_EmissaoResiduo && ConvertToDate(this.EntityTela.Data_Emissao)) {
                this.Residuo.DataEmissao = this.EntityTela.Data_Emissao;
            }
            else {
                this.Residuo.DataEmissao = this.DataServidor();
            }
            this.mdResiduo.Show();
            return false;
        }
        return true;
    };
    C_RBaixa.prototype.ValidarBaixa = function () {
        var parametros;
        try {
            parametros = {
                codigo: this.EntityTela.Codigo
            };
            this.ExecutarFuncaoServerSideSynch("ValidarBaixa", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
        this.BaixarConta();
    };
    C_RBaixa.prototype.BaixarConta = function () {
        try {
            var parametros;
            parametros = {
                codConta: this.EntityTela.Codigo,
                creditoCliente: this.creditoCliente,
                valorPago: CNum(this.Valor.ValorPago)
            };
            var contaReceber = this.ExecutarFuncaoServerSideSynch("GetDadosBaixa", parametros);
            this.BaixaReceber.Mostrar(contaReceber.Codigo, ValoresSismoura.NomeTela, ValoresSismoura.UsuarioLogado, contaReceber.ValorPago, contaReceber.ContaContabil, this.cboContaCorrente.GetContaCorrente(), this.EntityTela.Observacao, this.EntityTela.Valor_Juros, this.EntityTela.Valor_Abatimento, this.EntityTela.Data_Baixa, contaReceber.CodEmpresa, this.creditoCliente, contaReceber.N_Doc_Bancario, ConvertToDate(this.Residuo.DataEmissao), ConvertToDate(this.Residuo.DataVencimento), contaReceber.Doc_Bancario, this.EntityTela.Multa);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RBaixa.prototype.OnBaixouConta = function (s, e) {
        var parametros;
        if (this.Valor.Recibo == "S") {
            this.ImprimirRecibo();
        }
        this.Limpar();
    };
    C_RBaixa.prototype.ImprimirRecibo = function () {
        var parametros;
        parametros = {
            codigo: this.EntityTela.Codigo
        };
        try {
            var texto = this.ExecutarFuncaoServerSideSynch("GetTextoRecibo", parametros);
            this.ImprimirMatricial(ValoresSismoura.NomeTela + "_recibo", texto);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RBaixa.prototype.OnClickOkResiduo = function (s, e) {
        e.processOnServer = false;
        if (!ConvertToDate(this.Residuo.DataEmissao)) {
            MostrarAlerta("Preencha o campo corretamente: Data Emissão");
        }
        else if (!ConvertToDate(this.Residuo.DataVencimento)) {
            MostrarAlerta("Preencha o campo corretamente: Data Vencimento");
        }
        this.mdResiduo.Hide();
        this.ValidarBaixa();
    };
    C_RBaixa.prototype.OnClickOkCredito = function (s, e) {
        e.processOnServer = false;
        if (CNum(this.Credito.CreditoInformado) > CNum(this.Credito.ValorOperacao)) {
            this.Credito.CreditoInformado = 0;
            this.creditoCliente = 0;
            MostrarAlerta("O valor do crédito não pode ser maior ao valor da operação!");
            return;
        }
        this.creditoCliente = CNum(this.Credito.CreditoInformado);
        this.mdCredito.Hide();
        if (this.ValidarResiduo(CNum(this.Credito.ValorOperacao), CNum(CNum(this.Valor.ValorPago).Format(ValoresSismoura.CasasDecimaisValor)))) {
            this.ValidarBaixa();
        }
    };
    C_RBaixa.prototype.OnSelecionouLinha = function (s, e) {
        this.txtCodigo.Procurar(e.data["Codigo"]);
    };
    C_RBaixa.prototype.ObterPorcentagemMulta = function () {
        var parametros;
        try {
            var retorno = this.ExecutarFuncaoServerSideSynch("ObterPorcentagemMulta", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RBaixa.prototype.CalularPorcentagemMulta = function () {
        if (this.Valor.Multa == 0)
            return true;
        var porcMulta = this.EntityTela.Multa / this.EntityTela.Valor * 100;
        if (porcMulta > 2) {
            MostrarAlerta("A porcentagem de multa não deve ultrapassar 2% em relação ao valor original da conta. Valor Máximo permitido: (Valor correspondente a 2%)");
            this.EntityTela.Multa = 0;
            return false;
        }
        return true;
    };
    return C_RBaixa;
}(MouraPageCadastroAngular));
var c_RBaixa = new C_RBaixa();
//# sourceMappingURL=C_RBaixa.js.map