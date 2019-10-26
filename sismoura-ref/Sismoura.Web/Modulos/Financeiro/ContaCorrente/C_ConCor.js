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
var C_ConCor = /** @class */ (function (_super) {
    __extends(C_ConCor, _super);
    function C_ConCor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ConCor.prototype, "accCadastro", {
        get: function () {
            return window["accCadastro_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCor.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCor.prototype, "cboEmpresa", {
        get: function () {
            return window["cboEmpresa_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCor.prototype, "txtCodigo", {
        get: function () {
            return window["txtCodigo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCor.prototype, "txtBanco", {
        get: function () {
            return window["txtBanco_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCor.prototype, "txtConta", {
        get: function () {
            return window['txtConta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCor.prototype, "lblSaldo", {
        get: function () {
            return window['lblSaldo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    //
    C_ConCor.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_ConCor.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnEmpresaChenged, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.txtBanco) {
            adicionarEventoMoura(this.txtBanco.Procurou, this.OnBuscouNomeBanco, this);
        }
        if (this.txtConta) {
            adicionarEventoMoura(this.txtConta.TextChanged, this.OnMudouConta, this);
        }
    };
    C_ConCor.prototype.Limpar = function () {
        _super.prototype.Limpar.call(this);
        this.EntityTela.ID = 0;
        this.EntityTela.Conta_Corrente = "";
        this.EntityTela.Digito_Conta = "";
        this.EntityTela.Numero_Agencia = "";
        this.EntityTela.Digito_Agencia = "";
        this.EntityTela.Banco = "";
        this.EntityTela.Nome_Banco = "";
        //this.EntityTela.Cod_Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        //this.EntityTela.Cpf = this.GetCnpj(CNum(this.cboEmpresa.GetValue()));
        this.EntityTela.Telefone = "";
        this.EntityTela.Contato = "";
        this.EntityTela.Cidade = "";
        this.EntityTela.Endereco = "";
        this.EntityTela.Limite_Cheque_Especial = 0.00;
        this.EntityTela.Nosso_Numero = 0;
        this.EntityTela.Nosso_Numero_Boleto = false;
        this.EntityTela.Padrao = false;
        this.EntityTela.Inativo = false;
        this.lblSaldo.Text = "0,00";
        this.EntityTela.Desconsiderar_Lancamentos = false;
        //this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.accCadastro.SetExpanded(true);
        this.RefreshAngular();
    };
    C_ConCor.prototype.OnDepoisLimpar = function (Entidade) {
        _super.prototype.OnDepoisLimpar.call(this, Entidade);
        Entidade.Cod_Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        Entidade.Cpf = this.GetCnpj(CNum(Entidade.Cod_Empresa));
        this.RefreshAngular();
    };
    //
    C_ConCor.prototype.OnBuscouNomeBanco = function () {
        try {
            if (CNum(this.txtBanco.GetText()) > 0) {
                this.EntityTela.Nome_Banco = this.GetNomeBanco(CNum(this.txtBanco.GetText()));
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConCor.prototype.OnSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.data["ID"]);
        this.accCadastro.SetExpanded(true);
    };
    //VERIFICAR SE JA EXISTE CONTAS MARCADAS COMO PADRAO
    //E CASO HAJA PERGUNTAR SE DESEJA ALTERAR A CONTA PADRAO
    //E SE DESEJA ALTERAR, MUDAR TODAS AS CONTAS 
    C_ConCor.prototype.OnAntesGravar = function () {
        var _this = this;
        _super.prototype.OnAntesGravar.call(this);
        try {
            this.EntityTela.Tipo = "J";
            this.EntityTela.Data_Carga = this.DataServidor();
            if (this.EntityTela.Inativo && this.EntityTela.Padrao) {
                MostrarAlerta("A Conta Corrente está definida como Padrão e Inativo, sendo assim a mesma deixará de ser Padrão");
                this.EntityTela.Padrao = false;
            }
            if (this.EntityTela.Padrao) {
                if (this.ExisteContaPadrao()) {
                    MsgBoxJS("Existe outra conta corrente marcada como padrão. Deseja realmente alterar?", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, function (result) {
                        if (result.Resultado == MsgBoxResult.Yes) {
                            //Se o usuário clicar em sim na mensagem, alterar todas as contas padrão para false
                            //Pois o usuário deseja alterar esta conta para padrão e só pode existir uma padrão
                            _this.ResetarContasCorrentesPadrao();
                        }
                        else {
                            _this.EntityTela.Padrao = false;
                            _this.RefreshAngular();
                            _this.ClicarGravar();
                        }
                    });
                    return false;
                }
            }
            if (this.EntityTela.Digito_Agencia.toUpperCase() === "X") {
                this.EntityTela.Digito_Agencia = "X";
            }
            this.EntityTela.Nome_Titular = this.cboEmpresa.GetText();
            return true;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConCor.prototype.ResetarContasCorrentesPadrao = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                contaCorrente: this.EntityTela.Conta_Corrente,
                codEmpresa: CNum(this.cboEmpresa.GetValue()),
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("ResetarContasCorrentesPadrao", parametros, function (d) {
                fecharEspera();
                _this.ClicarGravar();
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
    C_ConCor.prototype.ExisteContaPadrao = function () {
        var parametros;
        try {
            parametros = {
                contaCorrente: this.EntityTela.Conta_Corrente,
                codEmpresa: CNum(this.cboEmpresa.GetValue())
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ExisteContaPadrao", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConCor.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.lblSaldo.Text = this.GetSaldo(Entity.Conta_Corrente).Format(ValoresSismoura.CasasDecimaisValor);
    };
    C_ConCor.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_ConCor.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_ConCor.prototype.GetCnpj = function (codEmpresa) {
        try {
            var parametros = {
                codEmpresa: CNum(codEmpresa)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetCpf", parametros);
            if (retorno) {
                return retorno;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConCor.prototype.GetNomeBanco = function (codBanco) {
        try {
            if (codBanco > 0) {
                var parametros = { codBanco: codBanco };
                return this.ExecutarFuncaoServerSideSynch("GetBanco", parametros);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConCor.prototype.OnEmpresaChenged = function () {
        try {
            this.EntityTela.Cpf = this.GetCnpj(CNum(this.cboEmpresa.GetValue()));
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConCor.prototype.PreencherGrade = function () {
        var _this = this;
        try {
            var parametros = {};
            var empresas = [];
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("GetCadastrados", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                }
                catch (ex) {
                    LogarException(ex);
                }
                finally {
                    fecharEspera();
                }
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
    C_ConCor.prototype.OnMudouConta = function () {
        if (!String.IsNullOrWhiteSpace(this.txtConta.GetText())) {
            this.VerificarContaCorrente(this.txtConta.GetText());
        }
        else {
            this.Limpar();
        }
    };
    C_ConCor.prototype.VerificarContaCorrente = function (contaCorrente) {
        var _this = this;
        var parametros;
        try {
            parametros = {
                contaCorrente: contaCorrente
            };
            var id = this.ExecutarFuncaoServerSideSynch("GetIdContaCorrente", parametros);
            this.EntityTela.ID = id;
            if (id <= 0) {
                setTimeout(function () {
                    _this.EntityTela.Conta_Corrente = contaCorrente;
                }, 100);
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConCor.prototype.GetSaldo = function (contaCorrente) {
        var parametros;
        try {
            parametros = {
                contaCorrente: contaCorrente
            };
            var saldo = this.ExecutarFuncaoServerSideSynch("GetSaldo", parametros);
            return saldo;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_ConCor;
}(MouraPageCadastroAngular));
var c_ConCor = new C_ConCor();
//# sourceMappingURL=C_ConCor.js.map