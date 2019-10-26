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
var C_ConOng = /** @class */ (function (_super) {
    __extends(C_ConOng, _super);
    function C_ConOng() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PATH_DOCUMENTOS_CONTRATO_ONG = "~/Documentos/ContratosONG/";
        _this.validouDataContratoAdocao = false;
        _this.validouDataCancelamentoContratoAdocao = false;
        _this.validouMotivoCancelamentoDevolucao = false;
        return _this;
    }
    Object.defineProperty(C_ConOng.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConOng.prototype, "sgnContrato", {
        get: function () {
            return window['sgnContrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConOng.prototype, "cboMotivoCancelamento", {
        get: function () {
            return window['cboMotivoCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConOng.prototype, "txtUsuario", {
        get: function () {
            return window['txtUsuario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConOng.prototype, "txtDataCadastro", {
        get: function () {
            return window['txtDataCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConOng.prototype, "txtDataAdocao", {
        get: function () {
            return window['txtDataAdocao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConOng.prototype, "btnEmitirContrato", {
        //get txtOng(): MouraTextBoxProcura {
        //    return window['txtOng_Object'];
        //}
        get: function () {
            return window['btnEmitirContrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConOng.prototype, "btnEnviarEmailContrato", {
        get: function () {
            return window['btnEnviarEmailContrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConOng.prototype, "btnAnexos", {
        get: function () {
            return window['btnAnexos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConOng.prototype, "dlgAnexo", {
        get: function () {
            return window['dlgAnexo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConOng.prototype, "cboPossuiOutrosAnimais", {
        //get cboModelo(): MouraComboBox {
        //    return window['cboModelo_Object'];
        //}
        get: function () {
            return window['cboPossuiOutrosAnimais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConOng.prototype, "txtQuantosAnimaisPossui", {
        get: function () {
            return window['txtQuantosAnimaisPossui_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConOng.prototype, "btnCancelarContrato", {
        get: function () {
            return window['btnCancelarContrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConOng.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConOng.prototype, "txtPetONG", {
        get: function () {
            return window['txtPetONG_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConOng.prototype, "dlgMotivoCancelamento", {
        get: function () {
            return window['dlgMotivoCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConOng.prototype, "txtMdlMotivoCanc", {
        get: function () {
            return window['txtMdlMotivoCanc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConOng.prototype, "btnMldMotivoCancConfirmar", {
        get: function () {
            return window['btnMldMotivoCancConfirmar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConOng.prototype, "btnMldMotivoCancCancelar", {
        get: function () {
            return window['btnMldMotivoCancCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConOng.prototype, "btnAssinatura", {
        get: function () {
            return window['btnAssinatura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConOng.prototype, "hndUsuarioAutorizouCancelamento", {
        get: function () {
            return $("#hndUsuarioAutorizouCancelamento")[0];
        },
        enumerable: true,
        configurable: true
    });
    C_ConOng.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        setTimeout(function () {
            _this.txtPetONG.TextBoxProprietario.AddParametro("isOng", "true");
            if (ValoresSismoura.UsuarioLogado > 0) {
                _this.txtUsuario.Procurar("" + ValoresSismoura.UsuarioLogado);
                _this.txtUsuario.Enabled = false;
            }
            if (ValoresSismoura.EmpresaPadraoUsuario > 0) {
                _this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
            }
            //this.cboModelo.LimparSelecao();
            //if (ValoresSismoura.ConfiguracoesPetshop.Modelo_Impressao_Contrato_ONG && ValoresSismoura.ConfiguracoesPetshop.Modelo_Impressao_Contrato_ONG > 0) {
            //    this.cboModelo.SetValue(ValoresSismoura.ConfiguracoesPetshop.Modelo_Impressao_Contrato_ONG);
            //}
            _this.txtDataCadastro.Date = _this.DataServidor().ToDate();
            _this.txtDataAdocao.Date = _this.DataServidor().ToDate();
            if (_this.hndUsuarioAutorizouCancelamento) {
                _this.hndUsuarioAutorizouCancelamento.value = '';
            }
        }, 300);
    };
    C_ConOng.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnEmitirContrato) {
            adicionarEventoMoura(this.btnEmitirContrato.Click, this.OnClickBotaoImprimir, this);
        }
        if (this.btnEnviarEmailContrato) {
            adicionarEventoMoura(this.btnEnviarEmailContrato.Click, this.OnClickBotaonEnviarEmailContrato, this);
        }
        if (this.btnAnexos) {
            adicionarEventoMoura(this.btnAnexos.Click, this.OnBtnAnexoClick, this);
        }
        if (this.txtPetONG) {
            adicionarEventoMoura(this.txtPetONG.TextBoxProprietario.Procurou, this.OnTxtProprietarioOngProcurou, this);
            adicionarEventoMoura(this.txtPetONG.TextBoxAnimal.Procurou, this.OnTxtAnimalOngProcurou, this);
            this.txtPetONG.TextBoxAnimal.LabelControl.innerHTML = "* Animal ONG (F2)";
            this.txtPetONG.TextBoxProprietario.LabelControl.innerHTML = "* Proprietário ONG (F2)";
        }
        if (this.txtPet) {
            adicionarEventoMoura(this.txtPet.TextBoxAnimal.Procurou, this.OnDepoisProcurouAnimal, this);
            adicionarEventoMoura(this.txtPet.TextBoxProprietario.Procurou, this.OnTxtProprietarioAdotanteProcurou, this);
            this.txtPet.TextBoxAnimal.LabelControl.innerHTML = "* Animal Adotado (F2)";
            this.txtPet.TextBoxProprietario.LabelControl.innerHTML = "* Proprietário Adotante (F2)";
        }
        if (this.cboPossuiOutrosAnimais) {
            adicionarEventoDevExpress(this.cboPossuiOutrosAnimais.Combo.SelectedIndexChanged, this.OnCboPossuiAnimaisChange, this);
        }
        if (this.cboMotivoCancelamento) {
            adicionarEventoDevExpress(this.cboMotivoCancelamento.Combo.SelectedIndexChanged, this.OnCboMotivoCancelamento, this);
        }
        if (this.btnMldMotivoCancConfirmar) {
            adicionarEventoMoura(this.btnMldMotivoCancConfirmar.Click, this.onBtnMdlMotivoCancConfirmar, this);
        }
        if (this.btnMldMotivoCancCancelar) {
            adicionarEventoMoura(this.btnMldMotivoCancCancelar.Click, this.onBtnMdlMotivoCancCancelar, this);
        }
        if (this.btnCancelarContrato) {
            adicionarEventoMoura(this.btnCancelarContrato.Click, this.OnBtnCancelarContratoClick, this);
        }
        if (this.btnAssinatura) {
            adicionarEventoMoura(this.btnAssinatura.Click, this.OnBtnAssinaturaClick, this);
        }
        if (this.sgnContrato) {
            adicionarEventoMoura(this.sgnContrato.Salvou, this.OnSalvouAssinatura, this);
        }
    };
    C_ConOng.prototype.OnSalvouAssinatura = function (s, e) {
        try {
            var entidade;
            entidade = this.GetScope().Entity;
            if (!entidade.Assinatura) {
                entidade.Assinatura = {};
            }
            entidade.Assinatura.Assinatura = Sting64ToByteArray(this.sgnContrato.assinaturaBase64);
            if (String.IsNullOrWhiteSpace(this.sgnContrato.assinaturaBase64) || !entidade.Assinatura.Assinatura || entidade.Assinatura.Assinatura.length == 0) {
                MostrarAlerta('Não foi possível identificar a assinatura, por favor, colete a assinatura novamente.');
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConOng.prototype.OnBtnAssinaturaClick = function (s, e) {
        if (this.EntityTela.Cancelado) {
            MostrarAlerta("Contrato cancelado, não será possível prosseguir com a operação.");
            return false;
        }
        var assinatura = "";
        this.sgnContrato.limpar();
        var entidade;
        entidade = this.GetScope().Entity;
        if (entidade.Assinatura && entidade.Assinatura.Assinatura && entidade.Assinatura.Assinatura.length > 0) {
            assinatura = ByteArrayToSting64(entidade.Assinatura.Assinatura);
            this.sgnContrato.assinaturaBase64 = assinatura;
            this.sgnContrato.btnLimpar.disabled = true;
            this.sgnContrato.btnSalvar.disabled = true;
        }
        else {
            this.sgnContrato.btnLimpar.disabled = false;
            this.sgnContrato.btnSalvar.disabled = false;
            this.sgnContrato.setEnabled(true);
        }
        this.sgnContrato.abrir();
    };
    C_ConOng.prototype.ColetarAssinaturaCliente = function () {
        if (!window['atob']) {
            MostrarAlerta("Navegador não suporta esse recurso");
            return;
        }
        this.sgnContrato.assinaturaBase64 = '';
        this.sgnContrato.limpar();
        this.sgnContrato.abrir();
    };
    C_ConOng.prototype.catch = function (ex) {
        LogarException(ex);
    };
    C_ConOng.prototype.OnCboMotivoCancelamento = function (s, e) {
        this.txtMdlMotivoCanc.SetText(this.cboMotivoCancelamento.GetText() + '\n');
    };
    C_ConOng.prototype.OnCboPossuiAnimaisChange = function (s, e) {
        try {
            this.txtQuantosAnimaisPossui.Obrigatorio = false;
            this.txtQuantosAnimaisPossui.Visible = false;
            if (this.cboPossuiOutrosAnimais.GetValue() == 1) { // Sim
                this.txtQuantosAnimaisPossui.Obrigatorio = true;
                this.txtQuantosAnimaisPossui.Visible = true;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConOng.prototype.OnAntesDeletar = function () {
        _super.prototype.OnAntesDeletar.call(this);
        MostrarAlerta('Não é possilve excluir os contratos, realize o cancelamento.');
        return false;
    };
    C_ConOng.prototype.OnAntesBuscarExistente = function () {
        _super.prototype.OnAntesBuscarExistente.call(this);
        this.txtPet.Limpar();
    };
    C_ConOng.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        if (Entidade && Entidade.Codigo > 0) {
            if (Entidade.Possui_Outros_Animais_Quantidade && Entidade.Possui_Outros_Animais_Quantidade > 0) {
                this.cboPossuiOutrosAnimais.SetValue(1);
                this.txtQuantosAnimaisPossui.Visible = true;
                this.txtQuantosAnimaisPossui.Obrigatorio = true;
            }
            else {
                this.cboPossuiOutrosAnimais.SetValue(2);
                this.txtQuantosAnimaisPossui.Obrigatorio = false;
            }
            this.HabilitarCampos(false);
        }
    };
    C_ConOng.prototype.OnDepoisProcurouAnimal = function (s, e) {
        try {
            if (!this.EntityTela)
                return;
            if (this.EntityTela.Codigo && this.EntityTela.Codigo > 0)
                return;
            var parametros = {
                codAnimal: CNum(this.txtPet.TextBoxAnimal.GetText().CNum())
            };
            var contrato = this.ExecutarFuncaoServerSideSynch("GetContratoByAnimal", parametros);
            if (contrato && contrato.Codigo > 0 && !contrato.Cancelado) {
                MostrarAlerta("O Animal já possui um contrato!");
                this.PreencherEntidade("" + contrato.Codigo);
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_ConOng.prototype.OnAntesGravar = function () {
        var _this = this;
        if (this.GetScope().Entity && this.GetScope().Entity.Codigo && CNum(this.GetScope().Entity.Codigo) > 0) {
            MostrarAlerta('Este contrato não pode ser alterado.');
            return false;
        }
        if (this.GetScope().Entity.Cancelado) {
            MostrarAlerta('Este contrato foi cancelado.');
            return false;
        }
        if (this.GetScope().Entity) {
            this.GetScope().Entity.Data_Adocao = this.txtDataAdocao.Date.ToDate();
            this.GetScope().Entity.Data_Cadastro = this.txtDataCadastro.Date.ToDate();
            this.GetScope().Entity.Empresa = this.cboEmpresa.GetValue();
            this.GetScope().Entity.Fornecedor = this.GetScope().Entity.Proprietario_Origem_ONG;
            this.RefreshAngular();
        }
        var dtMesAtual = this.DataServidor();
        var dataInicialMes = dtMesAtual.firstDayOfMonth();
        var dataFinalMes = dtMesAtual.lastDayOfMonth();
        var dataAdocao = this.txtDataAdocao.Date.ToDate();
        dataInicialMes.setHours(0, 0, 0, 0);
        dataFinalMes.setHours(0, 0, 0, 0);
        dataAdocao.setHours(0, 0, 0, 0);
        if (!this.validouDataContratoAdocao) {
            if (!dataAdocao.isBetween(dataInicialMes, dataFinalMes, true)) {
                this.dlgFuncaoAdm.Verificar("Aut_Cad_Contrato_Data_Retro", ValoresSismoura.UsuarioLogado, false, function (retSucesso) {
                    if (retSucesso.Autorizado) {
                        _this.validouDataContratoAdocao = true;
                        _this.ClicarGravar();
                        return;
                    }
                    else {
                        MostrarAlerta('Usuário sem permissão para cadastrar contratos com data retroativa.');
                        _this.validouDataContratoAdocao = false;
                        return;
                    }
                }, function (retError) {
                    _this.validouDataContratoAdocao = false;
                    return;
                }, false);
                return false;
            }
        }
        debugger;
        if (ValoresSismoura.ConfiguracoesPetshop.Adocao_Utilizar_Assinatura_Digital) {
            var isAssinaturaColetada = function () {
                var ret = _this.EntityTela.Assinatura && _this.EntityTela.Assinatura.Assinatura && _this.EntityTela.Assinatura.Assinatura.length > 0;
                return ret ? true : false;
            };
            if (CNum(this.GetScope().Entity.Codigo) == 0 && !(isAssinaturaColetada())) {
                MostrarAlerta('A assinatura do cliente não foi coletada.');
                return false;
            }
        }
        return _super.prototype.OnAntesGravar.call(this);
    };
    C_ConOng.prototype.OnDepoisLimpar = function () {
        var _this = this;
        this.txtPetONG.TextBoxProprietario.LimparParametros();
        this.txtPetONG.TextBoxProprietario.AddParametro("isOng", "true");
        this.txtQuantosAnimaisPossui.Limpar();
        this.cboPossuiOutrosAnimais.LimparSelecao();
        this.txtQuantosAnimaisPossui.Visible = false;
        this.txtMdlMotivoCanc.Limpar();
        this.cboMotivoCancelamento.LimparSelecao();
        this.hndUsuarioAutorizouCancelamento.value = '';
        this.validouDataContratoAdocao = false;
        this.validouDataCancelamentoContratoAdocao = false;
        setTimeout(function () {
            _this.txtDataCadastro.Date = _this.DataServidor().ToDate();
            _this.txtDataAdocao.Date = _this.DataServidor().ToDate();
            //this.cboModelo.LimparSelecao();
            //if (ValoresSismoura.ConfiguracoesPetshop.Modelo_Impressao_Contrato_ONG && ValoresSismoura.ConfiguracoesPetshop.Modelo_Impressao_Contrato_ONG > 0) {
            //    this.cboModelo.SetValue(ValoresSismoura.ConfiguracoesPetshop.Modelo_Impressao_Contrato_ONG);
            //}
            if (ValoresSismoura.EmpresaPadraoUsuario > 0) {
                _this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
            }
            if (ValoresSismoura.UsuarioLogado > 0) {
                _this.txtUsuario.Procurar("" + ValoresSismoura.UsuarioLogado);
                _this.txtUsuario.Enabled = false;
            }
            if (_this.sgnContrato) {
                _this.sgnContrato.assinaturaBase64 = '';
                _this.sgnContrato.btnLimpar.disabled = false;
                _this.sgnContrato.btnSalvar.disabled = false;
            }
            _this.GetScope().Entity.Assinatura = {};
            _this.HabilitarCampos(true);
        }, 300);
        _super.prototype.OnDepoisLimpar.call(this, this.GetScope().Entity);
    };
    C_ConOng.prototype.OnClickBotaonEnviarEmailContrato = function (s, e) {
        e.processOnServer = false;
        this.EnviarEmailContrato();
    };
    C_ConOng.prototype.OnClickBotaoImprimir = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.GetScope().Entity.Codigo <= 0) {
                MostrarAlerta("Necessário gravar o contrato para imprimir o documento.");
                return;
            }
            var parametros_1 = {
                codAnimal: this.GetScope().Entity.Animal
            };
            var pet = this.ExecutarFuncaoServerSideSynch('GetDadosAnimal', parametros_1);
            var modeloContrato = pet.Castrado ? ValoresSismoura.ConfiguracoesPetshop.Modelo_Impressao_Contrato_Castrado_ONG : ValoresSismoura.ConfiguracoesPetshop.Modelo_Impressao_Contrato_Nao_Castrado_ONG;
            if (!modeloContrato || modeloContrato <= 0) {
                if (pet.Castrado) {
                    MostrarAlerta("Não foi possível identificar o modelo do contrato para os pets castrados!");
                }
                else {
                    MostrarAlerta("Não foi possível identificar o modelo do contrato para pets não castrados!");
                }
                return;
            }
            var parametros;
            parametros_1 = {
                codContrato: this.EntityTela.Codigo,
                codDocumento: modeloContrato
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetImpressaoContrato", parametros_1);
            this.ImprimirDocumentoWord(retorno.Itens, retorno.Documento, "N");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConOng.prototype.OnBtnAnexoClick = function (s, e) {
        e.processOnServer = false;
        if (this.EntityTela.Codigo <= 0) {
            MostrarAlerta("Informe um contrato já cadastrado");
            return;
        }
        this.dlgAnexo.MostrarClient(this.PATH_DOCUMENTOS_CONTRATO_ONG + this.EntityTela.Codigo);
    };
    C_ConOng.prototype.HabilitarCampos = function (flag) {
        this.txtPet.TextBoxAnimal.Disabled = !flag;
        this.txtPet.TextBoxProprietario.Disabled = !flag;
        this.txtPetONG.TextBoxAnimal.Disabled = !flag;
        this.txtPetONG.TextBoxProprietario.Disabled = !flag;
        this.cboEmpresa.Enabled = flag;
        //this.txtOng.Disabled = !flag;
        this.txtDataAdocao.Disabled = !flag;
        this.txtUsuario.Disabled = !flag;
        this.txtQuantosAnimaisPossui.Disabled = !flag;
        this.cboPossuiOutrosAnimais.Enabled = flag;
        if (this.EntityTela && CNum(this.EntityTela.Codigo) > 0) {
            if (CNum(this.txtUsuario.GetText()) > 0) {
                this.txtUsuario.Disabled = true;
            }
            else {
                this.txtUsuario.Disabled = false;
            }
        }
        else {
            if (ValoresSismoura.UsuarioLogado > 0) {
                this.txtUsuario.Procurar("" + ValoresSismoura.UsuarioLogado);
                this.txtUsuario.Disabled = true;
            }
        }
    };
    C_ConOng.prototype.OnTxtAnimalOngProcurou = function (s, e) {
        if (this.txtPetONG.TextBoxAnimal.GetText().CNum() == 0) {
            return;
        }
        var parametros = {
            codAnimal: this.txtPetONG.TextBoxAnimal.GetText().CNum(),
            codEmpresa: this.cboEmpresa.GetValue()
        };
        var dadosPetONG = this.ExecutarFuncaoServerSideSynch("GetDadosPetOng", parametros);
        if (dadosPetONG) {
            if (!dadosPetONG.isPetEmpresa) {
                MostrarAlerta("Este pet n\u00E3o poder\u00E1 ser adotado nesta loja pois sua entrada foi realizada por outra unidade.");
                this.txtPetONG.Limpar();
                return;
            }
        }
    };
    C_ConOng.prototype.OnTxtProprietarioOngProcurou = function (s, e) {
        try {
            //Primeiro cadastra um fornecedor marcando a flag ONG, ao gravar o sistema automaticamente gera um cliente para o fornecedor.
            //Isso só ocorre para Petz.
            var codONGProprietario = this.txtPetONG.TextBoxProprietario.GetText().CNum();
            if (codONGProprietario <= 0) {
                return;
            }
            var parametros = {
                codONG: codONGProprietario,
                codEmpresa: this.cboEmpresa.GetValue()
            };
            if (!this.ExecutarFuncaoServerSideSynch("IsOngEmpresa", parametros)) {
                MostrarAlerta("Não foi encontrada nenhuma ONG com esse código e empresa selecionada");
                this.txtPetONG.Limpar();
                this.txtPetONG.TextBoxProprietario.Focus();
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConOng.prototype.OnTxtProprietarioAdotanteProcurou = function (s, e) {
        try {
            //Primeiro cadastra um fornecedor marcando a flag ONG, ao gravar o sistema automaticamente gera um cliente para o fornecedor.
            //Isso só ocorre para Petz.
            var codProprietarioAdotante = this.txtPet.TextBoxProprietario.GetText().CNum();
            if (codProprietarioAdotante <= 0) {
                return;
            }
            var parametros = {
                codONG: codProprietarioAdotante,
                codEmpresa: 0
            };
            if (this.ExecutarFuncaoServerSideSynch("IsOngEmpresa", parametros)) {
                MostrarAlerta("Este proprietário é uma ONG.");
                this.txtPet.Limpar();
                this.txtPet.TextBoxProprietario.Focus();
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConOng.prototype.OnBtnCancelarContratoClick = function (s, e) {
        var _this = this;
        if (CNum(this.EntityTela.Codigo) <= 0) {
            MostrarAlerta("Informe um contrato.");
            return;
        }
        if (this.EntityTela.Cancelado) {
            MostrarAlerta("Este contrato já foi cancelado");
            return;
        }
        var dtCancelamento = this.DataServidor();
        var dataAdocao = this.txtDataAdocao.Date.ToDate();
        var dataInicialMes = dataAdocao.firstDayOfMonth();
        var dataFinalMes = dataAdocao.lastDayOfMonth();
        dataInicialMes.setHours(0, 0, 0, 0);
        dataFinalMes.setHours(0, 0, 0, 0);
        dataAdocao.setHours(0, 0, 0, 0);
        dtCancelamento.setHours(0, 0, 0, 0);
        if (!this.validouDataCancelamentoContratoAdocao) {
            if (!dtCancelamento.isBetween(dataInicialMes, dataFinalMes, true)) {
                this.dlgFuncaoAdm.Verificar("Aut_Cad_Contrato_Data_Retro", ValoresSismoura.UsuarioLogado, false, function (retSucesso) {
                    if (retSucesso.Autorizado) {
                        _this.validouDataCancelamentoContratoAdocao = true;
                        _this.btnCancelarContrato.DoClick();
                        return;
                    }
                    else {
                        MostrarAlerta('Usuário sem permissão para cancelar contratos com data retroativa.');
                        _this.validouDataCancelamentoContratoAdocao = false;
                        return;
                    }
                }, function (retError) {
                    _this.validouDataCancelamentoContratoAdocao = false;
                    return;
                }, false);
                return false;
            }
        }
        this.dlgFuncaoAdm.Verificar("Perm_Canc_Contr_Adoc", ValoresSismoura.UsuarioLogado, false, function (retSucesso) {
            _this.hndUsuarioAutorizouCancelamento.value = "" + retSucesso.Usuario;
            MsgBoxJS("Deseja realmente realizar o cancelamento deste contrato?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.No) {
                    _this.hndUsuarioAutorizouCancelamento.value = '';
                    return;
                }
                else {
                    //Exibir modal para informar o motivo do cancelamento.
                    _this.txtMdlMotivoCanc.Limpar();
                    _this.dlgMotivoCancelamento.ModalDialog.Show();
                    _this.cboMotivoCancelamento.LimparSelecao();
                }
            });
        }, function (retError) {
            _this.hndUsuarioAutorizouCancelamento.value = '';
        }, false);
    };
    C_ConOng.prototype.onBtnMdlMotivoCancConfirmar = function (s, e) {
        var _this = this;
        try {
            debugger;
            if (CNum(this.cboMotivoCancelamento.GetValue()) == 0) {
                MostrarAlerta("Informe o motivo do cancelamento.");
                return;
            }
            if (!this.validouMotivoCancelamentoDevolucao) {
                var param = {
                    codMotivo: this.cboMotivoCancelamento.GetValue()
                };
                var motivoDevolucao = this.ExecutarFuncaoServerSideSynch("GetMotivoCancelamentoByCodigo", param);
                if (motivoDevolucao && motivoDevolucao.Devolver_Animal) {
                    MsgBoxJS('Ao cancelar o contrato esse pet será devolvido direto para a ONG e não estará mais disponível para adoção. Deseja continuar?', MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                        if (result.Resultado == MsgBoxResult.No) {
                            return;
                        }
                        _this.validouMotivoCancelamentoDevolucao = true;
                        _this.btnMldMotivoCancConfirmar.DoClick();
                        return;
                    });
                    return;
                }
                else {
                    this.validouMotivoCancelamentoDevolucao = true;
                }
            }
            var parametros = {
                codContrato: this.GetScope().Entity.Codigo,
                motivoCancelamentoCodigo: CNum(this.cboMotivoCancelamento.GetValue()),
                motivoCancelamento: this.txtMdlMotivoCanc.GetText(),
                tela: ValoresSismoura.NomeTela,
                codUsuarioCancelou: CNum(this.hndUsuarioAutorizouCancelamento.value),
                codUsuarioLogado: ValoresSismoura.UsuarioLogado
            };
            var retCancelamento = this.ExecutarFuncaoServerSideSynch("CancelarContratoONG", parametros);
            if (retCancelamento) {
                MostrarMensagem('Contrato Cancelado com sucesso.');
                this.PreencherEntidade("" + this.GetScope().Entity.Codigo);
            }
            else {
                MostrarError('Erro ao cancelar o contrato.');
            }
            this.hndUsuarioAutorizouCancelamento.value = '';
            this.txtMdlMotivoCanc.Limpar();
            this.cboMotivoCancelamento.LimparSelecao();
            this.dlgMotivoCancelamento.Hide();
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_ConOng.prototype.onBtnMdlMotivoCancCancelar = function (s, e) {
        this.dlgMotivoCancelamento.ModalDialog.Hide();
        this.txtMdlMotivoCanc.Limpar();
        this.hndUsuarioAutorizouCancelamento.value = '';
        this.cboMotivoCancelamento.LimparSelecao();
        MostrarAlerta("Cancelamento do contrato não efetudado. Operação cancelada pelo usuário.");
    };
    C_ConOng.prototype.EnviarEmailContrato = function () {
        var parametros;
        if (!this.EntityTela.Codigo) {
            MostrarAlerta("Informe um contrato cadastrado");
            return;
        }
        try {
            var parametros;
            parametros = {
                codContrato: this.EntityTela.Codigo
            };
            abrirEspera("Aguarde. Enviando email...");
            this.ExecutarFuncaoServerSideAsynch("EnviarEmailContrato", parametros, function (d) {
                try {
                    var retorno = JSON.parse(d);
                    fecharEspera();
                    if (retorno) {
                        MostrarMensagem("Email enviado com sucesso.");
                    }
                    else {
                        MostrarAlerta("Email não enviado.");
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
        return true;
    };
    return C_ConOng;
}(MouraPageCadastroAngular));
var c_ConOng = new C_ConOng();
//# sourceMappingURL=C_ConOng.js.map