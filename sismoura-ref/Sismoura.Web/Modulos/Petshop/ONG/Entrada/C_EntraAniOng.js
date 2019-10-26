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
var C_EntraAniOng = /** @class */ (function (_super) {
    __extends(C_EntraAniOng, _super);
    function C_EntraAniOng() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enviarEmailEntrada = false;
        _this.AVALIACAO_VETERINARIA_ENTRADA_ADOCAO = "AVALIACAO_VETERINARIA_ENTRADA_ADOCAO";
        return _this;
    }
    Object.defineProperty(C_EntraAniOng.prototype, "hdnRacas", {
        get: function () {
            return $('#hdnRacas')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntraAniOng.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntraAniOng.prototype, "ItemEntrada", {
        get: function () {
            return this.GetScope()['ItemEntrada'];
        },
        set: function (value) {
            this.GetScope()['ItemEntrada'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntraAniOng.prototype, "ItensEntrada", {
        get: function () {
            return this.GetScope()['ItensEntrada'];
        },
        set: function (values) {
            this.GetScope()['ItensEntrada'] = values;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntraAniOng.prototype, "gridItensEntrada", {
        get: function () {
            return window['gridItensEntrada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntraAniOng.prototype, "cboRaca", {
        get: function () {
            return window['cboRaca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntraAniOng.prototype, "cboEspecie", {
        get: function () {
            return window['cboEspecie_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntraAniOng.prototype, "txtProprietario", {
        get: function () {
            return window['txtProprietario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntraAniOng.prototype, "txtMicrochip", {
        get: function () {
            return window['txtMicrochip_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntraAniOng.prototype, "lblSituacaoEntrada", {
        get: function () {
            return window['lblSituacaoEntrada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntraAniOng.prototype, "btnCancelarEntrada", {
        get: function () {
            return window['btnCancelarEntrada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntraAniOng.prototype, "dlgMotivoCancelamento", {
        get: function () {
            return window['dlgMotivoCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntraAniOng.prototype, "txtMdlMotivoCanc", {
        get: function () {
            return window['txtMdlMotivoCanc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntraAniOng.prototype, "btnMldMotivoCancConfirmar", {
        get: function () {
            return window['btnMldMotivoCancConfirmar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntraAniOng.prototype, "btnMldMotivoCancCancelar", {
        get: function () {
            return window['btnMldMotivoCancCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntraAniOng.prototype, "hndUsuarioAutorizouCancelamento", {
        get: function () {
            return $("#hndUsuarioAutorizouCancelamento")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntraAniOng.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntraAniOng.prototype, "cboBaiaAdocao", {
        get: function () {
            return window['cboBaiaAdocao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntraAniOng.prototype, "txtDataEntrada", {
        get: function () {
            return window['txtDataEntrada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntraAniOng.prototype, "txtUsuarioEntrada", {
        get: function () {
            return window['txtUsuarioEntrada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntraAniOng.prototype, "btnFinalizarEntrada", {
        get: function () {
            return window['btnFinalizarEntrada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EntraAniOng.prototype, "btnEnviarEmailEntrada", {
        get: function () {
            return window['btnEnviarEmailEntrada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_EntraAniOng.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        if (this.gridItensEntrada) {
            adicionarEventoMoura(this.gridItensEntrada.AdicionandoItem, this.OnAdicionandoItemGridEntrada, this);
            adicionarEventoMoura(this.gridItensEntrada.LimpouItem, this.OnLimpouItemEntrada, this);
            adicionarEventoMoura(this.gridItensEntrada.Validando, this.OnValidandoItemGridEntrada, this);
            adicionarEventoMoura(this.gridItensEntrada.AlterandoItem, this.OnAlterandoItemGridEntrada, this);
            adicionarEventoMoura(this.gridItensEntrada.Grid.ClickBotaoLinha, this.OnClickBotaoItemGrid, this);
            adicionarEventoMoura(this.gridItensEntrada.Grid.CellPrepared, this.OnGridItensEntradaCellPrepared, this);
        }
        if (this.txtProprietario) {
            adicionarEventoMoura(this.txtProprietario.Procurou, this.OnTxtProprietarioProcurou, this);
        }
        if (this.btnCancelarEntrada) {
            adicionarEventoMoura(this.btnCancelarEntrada.Click, this.OnBtnCancelarEntradaClick, this);
        }
        if (this.btnFinalizarEntrada) {
            adicionarEventoMoura(this.btnFinalizarEntrada.Click, this.OnBtnFinalizarEntradaClick, this);
        }
        if (this.btnEnviarEmailEntrada) {
            adicionarEventoMoura(this.btnEnviarEmailEntrada.Click, this.OnBtnEnviarEmailEntradaClick, this);
        }
        if (this.btnMldMotivoCancConfirmar) {
            adicionarEventoMoura(this.btnMldMotivoCancConfirmar.Click, this.onBtnMdlMotivoCancConfirmar, this);
        }
        if (this.btnMldMotivoCancCancelar) {
            adicionarEventoMoura(this.btnMldMotivoCancCancelar.Click, this.onBtnMdlMotivoCancCancelar, this);
        }
        if (this.dlgTelaModal) {
            adicionarEventoMoura(this.dlgTelaModal.Retornou, this.OnRetornouModalAvaliacaoVeterinarioEntradaAdocao, this);
        }
        if (this.cboEspecie) {
            adicionarEventoMoura(this.cboEspecie.SelectedItemChanged, this.onCboEspecieChange, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnCboEmpresaChanged, this);
        }
    };
    C_EntraAniOng.prototype.atualizarSituacaoEntrada = function (entidade) {
        if (entidade && entidade.Codigo > 0) {
            this.lblSituacaoEntrada.Visible = true;
            if (entidade.Status_Entrada == 2 /* enAprovada */.valueOf()) {
                this.lblSituacaoEntrada.Text = "Entrada Aprovada";
                this.lblSituacaoEntrada.LabelComponente.setAttribute('style', 'color: #009933');
            }
            else {
                this.lblSituacaoEntrada.Text = "Entrada Em Aberto";
                this.lblSituacaoEntrada.LabelComponente.setAttribute('style', 'color: #000000');
            }
        }
        else {
            this.lblSituacaoEntrada.Visible = false;
        }
    };
    C_EntraAniOng.prototype.OnCboEmpresaChanged = function (s, e) {
        this.preencherBaiasEmpresa(this.cboEmpresa.GetValue());
    };
    C_EntraAniOng.prototype.preencherBaiasEmpresa = function (codEmpresa) {
        try {
            this.cboBaiaAdocao.ClearItems();
            if (codEmpresa == 0) {
                return;
            }
            var baiasEmpresa = [];
            var parametros = {
                codEmpresa: codEmpresa
            };
            baiasEmpresa = this.ExecutarFuncaoServerSideSynch("GetBaiasEmpresa", parametros);
            for (var x = 0; x < baiasEmpresa.length; x++) {
                this.cboBaiaAdocao.AddItem(baiasEmpresa[x].Descricao, baiasEmpresa[x].Codigo, '');
            }
            if (baiasEmpresa && baiasEmpresa.length == 1) {
                if (this.GetScope().Entity) {
                    this.GetScope().Entity.Baia = baiasEmpresa[0].Codigo;
                    this.cboBaiaAdocao.SetValue(this.GetScope().Entity.Baia);
                    this.RefreshAngular();
                }
            }
            else {
                MostrarAlerta("A empresa " + this.cboEmpresa.GetText() + " n\u00E3o possui nenhuma baia cadastrada.");
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_EntraAniOng.prototype.OnGridItensEntradaCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data) {
                var status = CNum(e.data['Status_Avaliacao_Entrada']);
                switch (status) {
                    case 3 /* enAprovado */.valueOf():
                        e.cellElement.css("color", "green");
                        break;
                    case 4 /* enNaoCompareceu */.valueOf():
                        e.cellElement.css("color", "blue");
                        break;
                    case 2 /* enReprovado */.valueOf():
                        e.cellElement.css("color", "red");
                        break;
                    default:
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_EntraAniOng.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (this.txtProprietario) {
            this.txtProprietario.AddParametro("isOng", "true");
        }
        if (this.txtCodigo) {
            this.txtCodigo.AddParametro("codUsuarioLogado", ValoresSismoura.UsuarioLogado);
        }
        if (this.GetScope().Entity) {
            this.GetScope().Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        }
        this.preencherBaiasEmpresa(ValoresSismoura.EmpresaPadraoUsuario);
        this.enviarEmailEntrada = false;
        this.RefreshAngular();
    };
    C_EntraAniOng.prototype.OnDepoisLimpar = function (Entity) {
        var _this = this;
        var dtServidor = this.DataServidor();
        this.ItemEntrada = {};
        this.ItensEntrada = [];
        this.cboBaiaAdocao.ClearItems();
        if (this.txtProprietario) {
            this.txtProprietario.AddParametro("isOng", "true");
        }
        this.txtMdlMotivoCanc.Limpar();
        this.hndUsuarioAutorizouCancelamento.value = '';
        setTimeout(function () {
            Entity.Data_Entrada = dtServidor.ToDate();
            Entity.Usuario_Entrada = ValoresSismoura.UsuarioLogado;
            Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
            Entity.Status_Entrada = 1 /* enEmAberto */.valueOf();
            _this.preencherBaiasEmpresa(ValoresSismoura.EmpresaPadraoUsuario);
        }, 100);
        this.enviarEmailEntrada = false;
        this.RefreshAngular();
        setTimeout(function () {
            _this.atualizarSituacaoEntrada(null);
            _this.habilitarDesabilitar(null);
        }, 200);
    };
    C_EntraAniOng.prototype.OnAntesDeletar = function () {
        MostrarAlerta('Por favor, utilize o cancelamento.');
        return false;
    };
    C_EntraAniOng.prototype.OnAntesGravar = function () {
        if (!this.ItensEntrada || this.ItensEntrada.length == 0) {
            MostrarAlerta('Informe ao menos um pet para gravar a entrada.');
            return false;
        }
        var dtEntrada = this.txtDataEntrada.Date.ToDate();
        var dataAtual = this.DataServidor();
        dtEntrada.setHours(0, 0, 0, 0);
        dataAtual.setHours(0, 0, 0, 0);
        if (dtEntrada.isAfter(dataAtual, false)) {
            MostrarAlerta('A data de entrada não pode ser maior que a data atual.');
            return false;
        }
        this.GetScope().Entity.EntradaItens = this.ItensEntrada;
        if (this.cboEmpresa.GetValue() > 0 && (!this.GetScope().Entity.Empresa || this.GetScope().Entity.Empresa == 0)) {
            this.GetScope().Entity.Empresa = this.cboEmpresa.GetValue();
        }
        this.GetScope().Entity.Baia = this.cboBaiaAdocao.GetValue();
        this.RefreshAngular();
        return _super.prototype.OnAntesGravar.call(this);
    };
    C_EntraAniOng.prototype.OnDepoisBuscarExistente = function (Entity) {
        var _this = this;
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        var parameters = {
            codUsuario: ValoresSismoura.UsuarioLogado,
            codEmpresaEntrada: Entity.Empresa
        };
        var isUsuarioEmpresa = this.ExecutarFuncaoServerSideSynch('isUsuarioEmpresaEntrada', parameters);
        if (!isUsuarioEmpresa && ValoresSismoura.UsuarioLogado != 0) {
            MostrarAlerta('O usuário logado não tem vinculo com a empresa da entrada. Por favor, solicite ao departamento de adoções a verificação do ocorrido.');
            setTimeout(function () { return _this.Limpar(); }, 200);
            return false;
        }
        var parametros = {
            codEntrada: Entity.Codigo
        };
        var retorno = this.ExecutarFuncaoServerSideSynch('GetInformacoesEntrada', parametros);
        if (retorno) {
            this.ItensEntrada = retorno.ItensEntrada;
        }
        this.preencherBaiasEmpresa(Entity.Empresa);
        this.cboBaiaAdocao.SetValue(Entity.Baia);
        this.atualizarSituacaoEntrada(Entity);
        this.habilitarDesabilitar(Entity);
    };
    C_EntraAniOng.prototype.OnLimpouItemEntrada = function (s, e) {
        try {
            var entidade = e.item;
            entidade = e.item;
            var itens = this.ItensEntrada;
            if (!itens)
                itens = [];
            var maxContador = 0;
            for (var x = 0; x < itens.length; x++) {
                if (itens[x].Item > maxContador) {
                    maxContador = itens[x].Item;
                }
            }
            entidade.Item = maxContador + 1;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_EntraAniOng.prototype.OnAdicionandoItemGridEntrada = function (s, e) {
        var item = e.item;
        if (item) {
            var dtNascimento = item.Data_Nascimento.ToDate();
            var dataAtual = this.DataServidor();
            dtNascimento.setHours(0, 0, 0, 0);
            dataAtual.setHours(0, 0, 0, 0);
            if (dtNascimento.isAfter(dataAtual, true)) {
                e.errorText = 'A data de nascimento deve ser menor que a data atual.';
                e.cancelar = true;
                return;
            }
            if (!String.IsNullOrWhiteSpace(item.Microchip) && item.Microchip.length < 15) {
                e.errorText = 'Informe um microchip válido.';
                e.cancelar = true;
                return;
            }
            if (!String.IsNullOrWhiteSpace(item.Microchip) && item.Microchip.length == 15) {
                var petExistente;
                this.ItensEntrada.forEach(function (x) {
                    if (x.Microchip == item.Microchip) {
                        petExistente = x.Nome_Animal;
                        return;
                    }
                }, this);
                if (!String.IsNullOrWhiteSpace(petExistente)) {
                    e.errorText = "Este microchip j\u00E1 foi informado para o pet " + petExistente;
                    e.cancelar = true;
                    return;
                }
                var parametros = {
                    microchip: item.Microchip
                };
                var animal = this.ExecutarFuncaoServerSideSynch("GetDadosAnimalByMicrochip", parametros);
                if (animal && animal.Codigo > 0 && animal.Inativo == false) {
                    e.errorText = 'Já existe um pet cadastrado com o mesmo microchip.';
                    e.cancelar = true;
                    return;
                }
            }
        }
        e.item.Nome_Raca = this.cboRaca.GetText();
        e.item.Nome_Especie = this.cboEspecie.GetText();
        switch (e.item.Sexo) {
            case 'M':
                e.item.Sexo_Texto = 'Macho';
                break;
            default:
                e.item.Sexo_Texto = 'Fêmea';
        }
    };
    C_EntraAniOng.prototype.OnValidandoItemGridEntrada = function (s, e) {
        var item = e.item;
        if (e.fieldNameAlterado == "Data_Nascimento") {
            var dtNascimento = item.Data_Nascimento.ToDate();
            var dataAtual = this.DataServidor();
            dtNascimento.setHours(0, 0, 0, 0);
            dataAtual.setHours(0, 0, 0, 0);
            if (dtNascimento.isAfter(dataAtual, true)) {
                e.errorText = 'A data de nascimento deve ser menor que a data atual.';
                e.cancelar = true;
                return;
            }
        }
        else if (e.fieldNameAlterado == "Microchip") {
            if (!String.IsNullOrWhiteSpace(item.Microchip) && item.Microchip.length == 15) {
                var petExistente;
                this.ItensEntrada.forEach(function (x) {
                    if (x.Microchip == item.Microchip) {
                        petExistente = x.Nome_Animal;
                        return;
                    }
                }, this);
                if (!String.IsNullOrWhiteSpace(petExistente)) {
                    e.errorText = "Este microchip j\u00E1 foi informado para o pet " + petExistente;
                    e.cancelar = true;
                    return;
                }
                var parametros = {
                    microchip: item.Microchip
                };
                var animal = this.ExecutarFuncaoServerSideSynch("GetDadosAnimalByMicrochip", parametros);
                if (animal && animal.Codigo > 0) {
                    e.errorText = 'Já existe um pet cadastrado com o mesmo microchip.';
                    e.cancelar = true;
                    return;
                }
            }
        }
    };
    C_EntraAniOng.prototype.OnAlterandoItemGridEntrada = function (s, e) {
    };
    C_EntraAniOng.prototype.OnClickBotaoItemGrid = function (s, e) {
        var _this = this;
        if (e.commandName == "ENTRADA_ANIMAL_AVALIACAO") {
            if (CNum(this.EntityTela.Codigo) == 0) {
                MostrarAlerta('Grave a entrada para poder realizar a avaliação.');
                return false;
            }
            if (CNum(e.data.Codigo) == 0) {
                MostrarAlerta('O Item ainda não foi salvo. Grave a entrada para realizar a avaliação.');
                return false;
            }
            var parametros = {
                codUsuarioLogado: ValoresSismoura.UsuarioLogado
            };
            debugger;
            var retorno = this.ExecutarFuncaoServerSideSynch("GetProfissionalUsuario", parametros);
            if (retorno.Veterinario) {
                var vet = retorno.Veterinario;
                var isVetEmpresaEntrada = false;
                vet.Empresas.forEach(function (x) {
                    if (x.Empresa == _this.GetScope().Entity.Empresa) {
                        isVetEmpresaEntrada = true;
                        return;
                    }
                });
                if (!isVetEmpresaEntrada) {
                    //Quando o usuário for um veterinário de uma empresa que não tem acesso aos dados da empresa da entrda, o sistema não deve liberar.
                    MsgBoxJS("O usu\u00E1rio logado est\u00E1 vinculado a um veterin\u00E1rio que n\u00E3o tem acesso aos dados da empresa desta entrada.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
                    return;
                }
                else {
                    //Quando for um veterinário a tela virá com todos os campos liberados.
                    this.AbrirNovaAvaliacaoVeterinaria(CNum(e.data.Codigo), CNum(e.data.Codigo_Avaliacao_Item), true, vet.Codigo);
                }
            }
            else { //Quando for apenas um usuário do sistema a tela será liberada apenas com alguns campos.
                this.AbrirNovaAvaliacaoVeterinaria(CNum(e.data.Codigo), CNum(e.data.Codigo_Avaliacao_Item), false);
            }
        }
    };
    C_EntraAniOng.prototype.onCboEspecieChange = function (s, e) {
        this.cboRaca.ClearItems();
        var especie = this.cboEspecie.GetValue();
        var racas = this.DeserializarJSONEncoded(this.hdnRacas.value);
        var lracas = racas.FindAll("Especie", especie);
        for (var x = 0; x < lracas.length; x++) {
            this.cboRaca.Combo.AddItem(lracas[x].Raca, lracas[x].Codigo, "");
        }
        this.cboRaca.Focus();
    };
    C_EntraAniOng.prototype.OnTxtProprietarioProcurou = function (s, e) {
        if (this.txtProprietario.GetText().CNum() > 0) {
            var parametros = {
                codProprietario: this.txtProprietario.GetText().CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("DadosProprietario", parametros);
            if (!retorno) {
                MostrarError('Erro ao obter dados da ONG.');
                this.txtProprietario.Limpar();
                return;
            }
            else {
                var isOng = retorno.isOng;
                if (isOng) {
                    var empresas = retorno.Empresas_Vinculadas;
                    if (!empresas || empresas.length == 0) {
                        MostrarAlerta('A ONG informada não está vinculada a nenhuma empresa.');
                        this.txtProprietario.Limpar();
                        return;
                    }
                    else {
                        var empresaEntrada = this.cboEmpresa.GetValue();
                        var isONGEmpresa = false;
                        empresas.forEach(function (x) {
                            if (x.Empresa == empresaEntrada) {
                                isONGEmpresa = true;
                                return;
                            }
                        });
                        if (!isONGEmpresa) {
                            MostrarAlerta("A ONG informada n\u00E3o est\u00E1 vinculada a empresa " + this.cboEmpresa.GetText() + " entrada");
                            this.txtProprietario.Limpar();
                            return;
                        }
                    }
                }
                else {
                    MostrarAlerta('Este proprietário não é uma ONG.');
                    this.txtProprietario.Limpar();
                    return;
                }
            }
        }
    };
    C_EntraAniOng.prototype.OnBtnCancelarEntradaClick = function (s, e) {
        var _this = this;
        if (!this.GetScope().Entity || CNum(this.GetScope().Entity.Codigo) == 0) {
            MostrarAlerta('Informe uma entrada para realizar o cancelamento.');
            return;
        }
        if (this.GetScope().Entity.Cancelada) {
            MostrarAlerta('Esta entrada já foi cancelada.');
            return;
        }
        if (this.GetScope().Entity.Aprovada) {
            MostrarAlerta('Esta entrada já foi aprovada.');
            return;
        }
        this.dlgFuncaoAdm.Verificar("Perm_Canc_Entra_Adoc", ValoresSismoura.UsuarioLogado, false, function (retSucesso) {
            _this.hndUsuarioAutorizouCancelamento.value = "" + retSucesso.Usuario;
            MsgBoxJS("Deseja realmente realizar o cancelamento desta entrada?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.No) {
                    _this.hndUsuarioAutorizouCancelamento.value = '';
                    return;
                }
                else {
                    //Exibir modal para informar o motivo do cancelamento.
                    _this.txtMdlMotivoCanc.Limpar();
                    _this.dlgMotivoCancelamento.ModalDialog.SetMaximized(true);
                    _this.dlgMotivoCancelamento.ModalDialog.Show();
                    _this.hndUsuarioAutorizouCancelamento.value = '';
                }
            });
        }, function (retError) {
            _this.hndUsuarioAutorizouCancelamento.value = '';
        }, false);
    };
    C_EntraAniOng.prototype.onBtnMdlMotivoCancConfirmar = function (s, e) {
        try {
            if (String.IsNullOrWhiteSpace(this.txtMdlMotivoCanc.GetText())) {
                MostrarAlerta("Informe o motivo do cancelamento.");
                return;
            }
            this.GetScope().Entity.Cancelada = true;
            this.GetScope().Entity.Data_Cancelamento = this.DataServidor();
            this.GetScope().Entity.Motivo_Cancelamento = this.txtMdlMotivoCanc.GetText();
            this.GetScope().Entity.Usuario_Cancelou = CNum(this.hndUsuarioAutorizouCancelamento.value);
            this.hndUsuarioAutorizouCancelamento.value = '';
            this.ClicarGravar();
        }
        catch (e) {
            LogarException(e);
        }
        finally {
            this.txtMdlMotivoCanc.Limpar();
            this.dlgMotivoCancelamento.Hide();
        }
    };
    C_EntraAniOng.prototype.onBtnMdlMotivoCancCancelar = function (s, e) {
        this.dlgMotivoCancelamento.ModalDialog.Hide();
        this.txtMdlMotivoCanc.Limpar();
        MostrarAlerta("Cancelamento do contrato não efetudado. Operação cancelada pelo usuário.");
    };
    C_EntraAniOng.prototype.OnRetornouModalAvaliacaoVeterinarioEntradaAdocao = function (s, e) {
        try {
            if (e.IDComponenteProcura == this.AVALIACAO_VETERINARIA_ENTRADA_ADOCAO) {
                if (e.ParametrosObject && CNum(e.ParametrosObject.codigo) > 0) {
                    MostrarMensagem('Avaliação gravada com sucesso.');
                    var parametros = {
                        codAvaliacaoItem: CNum(e.ParametrosObject.codigo)
                    };
                    var avaliacao = this.ExecutarFuncaoServerSideSynch("GetAvaliacaoItemEntrada", parametros);
                    //console.log(avaliacao);
                    if (avaliacao && avaliacao.Codigo > 0) {
                        var parametros = {
                            codEntrada: this.GetScope().Entity.Codigo,
                            codItem: CNum(avaliacao.Entrada_Adocao_Item)
                        };
                        var retorno = this.ExecutarFuncaoServerSideSynch('GetItemEntrada', parametros);
                        if (retorno) {
                            var index = 0;
                            for (index = 0; index < this.ItensEntrada.length; index++) {
                                if (CNum(this.ItensEntrada[index].Codigo) == CNum(retorno.Item.Codigo)) {
                                    break;
                                }
                            }
                            this.ItensEntrada[index] = retorno.Item;
                            this.gridItensEntrada.AtualizarGrid();
                            console.log(this.ItensEntrada);
                        }
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_EntraAniOng.prototype.AbrirNovaAvaliacaoVeterinaria = function (codEntradaItem, codAvaliacaoItem, isVeterinario, codVeterinario) {
        var parametros = [];
        parametros.push("Codigo_Entrada=" + this.EntityTela.Codigo);
        parametros.push("Codigo_Empresa_Entrada=" + this.EntityTela.Empresa);
        parametros.push("Codigo_Entrada_Item=" + codEntradaItem);
        parametros.push("Codigo_Avaliacao_Item=" + codAvaliacaoItem);
        if (codVeterinario && codVeterinario > 0) {
            parametros.push("Codigo_Veterinario_Avaliacao=" + codVeterinario);
        }
        else {
            parametros.push("Codigo_Veterinario_Avaliacao=" + 0);
        }
        parametros.push("isVeterinario=" + (isVeterinario ? 'S' : 'N'));
        this.dlgTelaModal.AbrirTelaModal(formataURLRelativa(URLTela.CadastroAvaliacaoVeterinariaEntradaOng), parametros, this.AVALIACAO_VETERINARIA_ENTRADA_ADOCAO);
    };
    C_EntraAniOng.prototype.OnGravouSucesso = function () {
        var _this = this;
        setTimeout(function () {
            debugger;
            if (_this.enviarEmailEntrada) {
                _this.EnviarEmailEntrada(_this.GetScope().Entity);
            }
        }, 200);
    };
    C_EntraAniOng.prototype.OnDepoisGravar = function () {
        this.PreencherEntidade("" + this.EntityTela.Codigo);
        return _super.prototype.OnDepoisGravar.call(this);
    };
    C_EntraAniOng.prototype.getListUlHtml = function (array) {
        if (!array || array.length == 0) {
            return '';
        }
        var retorno = [];
        array.forEach(function (x) {
            retorno.push('<li>' + x + '</li>');
        });
        return '<ul>' + retorno.join("") + '</ul>';
    };
    C_EntraAniOng.prototype.habilitarDesabilitar = function (entidade) {
        if (entidade && entidade.Codigo > 0) {
            this.txtDataEntrada.Enabled = false;
            this.cboBaiaAdocao.Enabled = false;
            this.txtUsuarioEntrada.Disabled = true;
            if (ValoresSismoura.UsuarioLogado == 0 && this.txtUsuarioEntrada.GetText().CNum() == 0) {
                this.txtUsuarioEntrada.Disabled = false;
            }
            if (entidade.Status_Entrada == 2 /* enAprovada */.valueOf()
                || entidade.Cancelada) {
                this.btnCancelarEntrada.SetEnabled(false);
                this.btnFinalizarEntrada.SetEnabled(false);
            }
            else {
                this.btnCancelarEntrada.SetEnabled(true);
                this.btnFinalizarEntrada.SetEnabled(true);
            }
        }
        else {
            if (ValoresSismoura.UsuarioLogado == 0 && this.txtUsuarioEntrada.GetText().CNum() == 0) {
                this.txtUsuarioEntrada.Disabled = false;
            }
            this.cboBaiaAdocao.Enabled = true;
            this.txtProprietario.Disabled = false;
            this.txtDataEntrada.Enabled = true;
            this.btnCancelarEntrada.SetEnabled(true);
            this.btnFinalizarEntrada.SetEnabled(true);
        }
        this.habilitarDesabilitarGridEntrada(entidade);
    };
    C_EntraAniOng.prototype.habilitarDesabilitarGridEntrada = function (entidade) {
        var parametros = {
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        var retornoAutorizacao = this.ExecutarFuncaoServerSideSynch("VerificarPermissaoUsuarioEditarGrid", parametros);
        if (entidade && entidade.Codigo > 0) {
            if (entidade.Status_Entrada == 2 /* enAprovada */.valueOf()
                || entidade.Cancelada) {
                this.txtProprietario.Disabled = true;
                this.gridItensEntrada.Grid.PermitirEditarGrid = false;
                this.gridItensEntrada.Grid.ColunaVisible("Item", false);
                this.gridItensEntrada.btnAdiconar.SetEnabled(false);
                this.gridItensEntrada.Grid.SetColunaEditavel("Nome_Animal", false);
                this.gridItensEntrada.Grid.SetColunaEditavel("Sexo", false);
                this.gridItensEntrada.Grid.SetColunaEditavel("Microchip", false);
                this.gridItensEntrada.Grid.SetColunaEditavel("Data_Nascimento", false);
                this.gridItensEntrada.Grid.ColunaVisible(this.gridItensEntrada.Grid.GetColunaByName("botaoTemplate_ENTRADA_ANIMAL_AVALIACAO"), false);
            }
            else {
                if (retornoAutorizacao.Autorizado) {
                    this.txtProprietario.Disabled = false;
                }
                else {
                    this.txtProprietario.Disabled = true;
                }
                this.gridItensEntrada.Grid.PermitirEditarGrid = retornoAutorizacao.Autorizado;
                this.gridItensEntrada.Grid.ColunaVisible("Item", retornoAutorizacao.Autorizado);
                this.gridItensEntrada.btnAdiconar.SetEnabled(retornoAutorizacao.Autorizado);
                this.gridItensEntrada.Grid.SetColunaEditavel("Nome_Animal", retornoAutorizacao.Autorizado);
                this.gridItensEntrada.Grid.SetColunaEditavel("Sexo", retornoAutorizacao.Autorizado);
                this.gridItensEntrada.Grid.SetColunaEditavel("Microchip", retornoAutorizacao.Autorizado);
                this.gridItensEntrada.Grid.SetColunaEditavel("Data_Nascimento", retornoAutorizacao.Autorizado);
                this.gridItensEntrada.Grid.ColunaVisible(this.gridItensEntrada.Grid.GetColunaByName("botaoTemplate_ENTRADA_ANIMAL_AVALIACAO"), true);
            }
        }
        else {
            if (retornoAutorizacao.Autorizado) {
                this.txtProprietario.Disabled = false;
            }
            else {
                this.txtProprietario.Disabled = true;
            }
            this.gridItensEntrada.Grid.ColunaVisible("Item", retornoAutorizacao.Autorizado);
            this.gridItensEntrada.Grid.PermitirEditarGrid = retornoAutorizacao.Autorizado;
            this.gridItensEntrada.btnAdiconar.SetEnabled(retornoAutorizacao.Autorizado);
            this.gridItensEntrada.Grid.SetColunaEditavel("Nome_Animal", retornoAutorizacao.Autorizado);
            this.gridItensEntrada.Grid.SetColunaEditavel("Sexo", retornoAutorizacao.Autorizado);
            this.gridItensEntrada.Grid.SetColunaEditavel("Microchip", retornoAutorizacao.Autorizado);
            this.gridItensEntrada.Grid.SetColunaEditavel("Data_Nascimento", retornoAutorizacao.Autorizado);
            this.gridItensEntrada.Grid.ColunaVisible(this.gridItensEntrada.Grid.GetColunaByName("botaoTemplate_ENTRADA_ANIMAL_AVALIACAO"), false);
        }
        this.gridItensEntrada.AtualizarGrid();
    };
    C_EntraAniOng.prototype.aprovarEntrada = function (codUsuarioAprovou) {
        var _this = this;
        try {
            if (!this.ItensEntrada || this.ItensEntrada.length == 0) {
                MsgBoxJS('Informe ao meno um Pet para prosseguir com a entrada.', MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
                return;
            }
            //Validações antes de aprovar a entrada.
            //Verificar se foram realizadas as avaliações.
            var PetSemAvaliacao = [];
            this.ItensEntrada.forEach(function (x) {
                if (!x.Avaliacao_Item || x.Avaliacao_Item.Codigo == 0 || (x.Avaliacao_Item.Status_Avaliacao_Entrada == 1 /* enNaoAvaliado */.valueOf())) {
                    PetSemAvaliacao.push(x.Nome_Animal);
                }
            });
            if (PetSemAvaliacao.length > 0) {
                MsgBoxJS('Os Pets relacionados estão sem avaliação realizada. Informe o status da avaliação para prosseguir.</br><b>' + this.getListUlHtml(PetSemAvaliacao) + '</b>', MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
                return;
            }
            var PetsNaoAprovados = [];
            this.ItensEntrada.forEach(function (x) {
                if (x.Avaliacao_Item.Status_Avaliacao_Entrada == 2 /* enReprovado */
                    || x.Avaliacao_Item.Status_Avaliacao_Entrada == 4 /* enNaoCompareceu */) {
                    PetsNaoAprovados.push(x.Nome_Animal);
                }
            });
            var PetsAprovados = [];
            this.ItensEntrada.forEach(function (x) {
                if (x.Avaliacao_Item.Status_Avaliacao_Entrada == 3 /* enAprovado */.valueOf()) {
                    PetsAprovados.push(x.Nome_Animal);
                }
            });
            //Validar se foram informados todos os microchips na entrada.
            var petSemMicrochip = [];
            if (ValoresSismoura.ConfiguracoesPetshop.Animais_Adocao_Utilizar_MicroChip) {
                this.ItensEntrada.forEach(function (x) {
                    if (String.IsNullOrWhiteSpace(x.Microchip)) {
                        petSemMicrochip.push(x.Nome_Animal);
                    }
                });
            }
            if (petSemMicrochip.length > 0) {
                MsgBoxJS('Os Pets relacionados estão sem microchip. Informe o microchip para prosseguir.</br><b>' + this.getListUlHtml(petSemMicrochip) + '</b>', MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
                return;
            }
            if (PetsNaoAprovados.length > 0) {
                var msg = 'Os Pets abaixo <b>NÃO</b> foram aprovados, caso continue com a operação, apenas os <b>APROVADOS</b> irão entrar para o estoque. Deseja continuar?';
                MsgBoxJS(msg + '</br><b>' + this.getListUlHtml(PetsNaoAprovados) + '</b>', MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                    if (result.Resultado == MsgBoxResult.No) {
                        return;
                    }
                    _this.enviarEmailEntrada = true;
                    _this.GetScope().Entity.IsAprovandoEntrada = true;
                    _this.RefreshAngular();
                    _this.ClicarGravar();
                });
            }
            else {
                this.enviarEmailEntrada = true;
                this.GetScope().Entity.IsAprovandoEntrada = true;
                this.RefreshAngular();
                this.ClicarGravar();
            }
        }
        catch (e) {
        }
    };
    C_EntraAniOng.prototype.EnviarEmailEntrada = function (entidade) {
        var parametros;
        if (!this.GetScope().Entity || this.GetScope().Entity.Codigo == 0 || !entidade) {
            MostrarAlerta("Informe uma entrada cadastrada");
            return;
        }
        if (this.GetScope().Entity.Cancelada) {
            MostrarAlerta("A entrada foi cancelada, não será possível enviar o e-mail.");
            return;
        }
        if (this.GetScope().Entity.Status_Entrada != 2 /* enAprovada */.valueOf()) {
            MostrarAlerta("Entrada não aprovada. Para enviar o email a entrada deve ser aprovada antes.");
            return;
        }
        try {
            var parametros;
            parametros = {
                JsonEntrada: JSON.stringify(entidade)
            };
            abrirEspera("Aguarde. Enviando email da Entrada...");
            this.ExecutarFuncaoServerSideAsynch("EnviarEmailEntrada", parametros, function (d) {
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
        this.enviarEmailEntrada = false;
        return true;
    };
    C_EntraAniOng.prototype.OnBtnEnviarEmailEntradaClick = function (s, e) {
        try {
            this.EnviarEmailEntrada(this.GetScope().Entity);
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_EntraAniOng.prototype.OnBtnFinalizarEntradaClick = function (s, e) {
        if (!this.GetScope().Entity || !this.GetScope().Entity.Codigo || CNum(this.GetScope().Entity.Codigo) == 0) {
            MostrarAlerta('Informe o código da entrada para prosseguir.');
            return;
        }
        if (this.GetScope().Entity.Aprovada) {
            MostrarAlerta('A entrada já foi aprovada.');
            return;
        }
        if (this.GetScope().Entity.Cancelada) {
            MostrarAlerta('A entrada foi cancelada.');
            return;
        }
        this.aprovarEntrada(ValoresSismoura.UsuarioLogado);
    };
    return C_EntraAniOng;
}(MouraPageCadastroAngular));
var c_EntraAniOng = new C_EntraAniOng();
//# sourceMappingURL=C_EntraAniOng.js.map