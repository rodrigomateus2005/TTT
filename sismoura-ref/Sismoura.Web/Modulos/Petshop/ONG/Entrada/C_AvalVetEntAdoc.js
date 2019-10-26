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
var C_AvalVetEntAdoc = /** @class */ (function (_super) {
    __extends(C_AvalVetEntAdoc, _super);
    function C_AvalVetEntAdoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "grdCheckListItens", {
        get: function () {
            return window['grdCheckListItens_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "ItemEntrada", {
        get: function () {
            return this.GetScope()['ItemEntrada'];
        },
        set: function (value) {
            this.GetScope()['ItemEntrada'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "ItemCheckList", {
        get: function () {
            return this.GetScope()['ItemCheckList'];
        },
        set: function (value) {
            this.GetScope()['ItemCheckList'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "ItensCheckList", {
        get: function () {
            return this.GetScope()['ItensCheckList'];
        },
        set: function (value) {
            this.GetScope()['ItensCheckList'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "grdItensAvaliacaoComportamento", {
        get: function () {
            return window['grdItensAvaliacaoComportamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "ItemAvaliacaoComportamento", {
        get: function () {
            return this.GetScope()['ItemAvaliacaoComportamento'];
        },
        set: function (value) {
            this.GetScope()['ItemAvaliacaoComportamento'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "ItensAvaliacaoComportamento", {
        get: function () {
            return this.GetScope()['ItensAvaliacaoComportamento'];
        },
        set: function (value) {
            this.GetScope()['ItensAvaliacaoComportamento'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "txtCodigoAvaliacaoEntradaItem", {
        get: function () {
            return window['txtCodigoAvaliacaoEntradaItem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "txtMotivoReprovacao", {
        get: function () {
            return window['txtMotivoReprovacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "txtTratamentoAnterior", {
        get: function () {
            return window['txtTratamentoAnterior_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "txtAlteracaoExameFisicoCompormental", {
        get: function () {
            return window['txtAlteracaoExameFisicoCompormental_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "cboStatusAvaliacao", {
        get: function () {
            return window['cboStatusAvaliacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "cboAlteracaoExameFisicoComportamento", {
        get: function () {
            return window['cboAlteracaoExameFisicoComportamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "txtExameFisico", {
        get: function () {
            return window['txtExameFisico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "txtExameFisicoResultado", {
        get: function () {
            return window['txtExameFisicoResultado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "dlgDicasComportamento", {
        get: function () {
            return window['dlgDicasComportamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "imgAjuda", {
        get: function () {
            return $("#imgAjuda")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "grdVacinasAplicadas", {
        get: function () {
            return window['grdVacinasAplicadas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "VacinaRealizada", {
        get: function () {
            return this.GetScope()['VacinaRealizada'];
        },
        set: function (value) {
            this.GetScope()['VacinaRealizada'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "VacinasRealizadas", {
        get: function () {
            return this.GetScope()['VacinasRealizadas'];
        },
        set: function (value) {
            this.GetScope()['VacinasRealizadas'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "txtServicoVacina", {
        get: function () {
            return window['txtServicoVacina_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "txtMicroChip", {
        get: function () {
            return window['txtMicroChip_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalVetEntAdoc.prototype, "IsPetReprovadoOuNaoCompareceu", {
        get: function () {
            if (this.cboStatusAvaliacao.GetValue() == 4 /* enNaoCompareceu */ ||
                this.cboStatusAvaliacao.GetValue() == 2 /* enReprovado */) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    C_AvalVetEntAdoc.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        if (this.grdCheckListItens && this.grdCheckListItens.Grid) {
            adicionarEventoMoura(this.grdCheckListItens.AlterandoItem, this.OnGrdCheckListItensAlterandoItem, this);
        }
        if (this.grdVacinasAplicadas && this.grdVacinasAplicadas.Grid) {
            adicionarEventoMoura(this.grdVacinasAplicadas.AlterandoItem, this.OnGrdVacinasAplicadasAlterandoItem, this);
        }
        if (this.cboAlteracaoExameFisicoComportamento) {
            adicionarEventoMoura(this.cboAlteracaoExameFisicoComportamento.SelectedItemChanged, this.OnAlterouCboAlteracaoExameFisicoComplementar, this);
        }
        if (this.txtExameFisico) {
            adicionarEventoMoura(this.txtExameFisico.Procurou, this.OnProcurouExameFisico, this);
        }
        if (this.imgAjuda) {
            adicionarEventoJQuery(this.imgAjuda, 'click', this.OnAjudaClick, this);
        }
        if (this.txtServicoVacina) {
            adicionarEventoMoura(this.txtServicoVacina.Procurou, this.OntxtServicoVacinaProcurou, this);
        }
        if (this.cboStatusAvaliacao) {
            adicionarEventoMoura(this.cboStatusAvaliacao.SelectedItemChanged, this.OnCboStatusAvaliacaoChenged, this);
        }
    };
    C_AvalVetEntAdoc.prototype.OnCboStatusAvaliacaoChenged = function (s, e) {
        if (ValoresSismoura.ConfiguracoesPetshop.Animais_Adocao_Utilizar_MicroChip && !this.IsPetReprovadoOuNaoCompareceu && this.txtMicroChip.Visible) {
            this.txtMicroChip.Obrigatorio = true;
        }
        else {
            this.txtMicroChip.Obrigatorio = false;
        }
    };
    C_AvalVetEntAdoc.prototype.OnGravouSucesso = function (s, e) {
        //MostrarMensagem('Avaliação gravada com sucesso.');
    };
    C_AvalVetEntAdoc.prototype.OntxtServicoVacinaProcurou = function (s, e) {
        this.VacinaRealizada.Nome_Vacina = this.txtServicoVacina.GetResultado();
    };
    C_AvalVetEntAdoc.prototype.OnProcurouExameFisico = function (s, e) {
        var retorno;
        var parametros;
        if (!this.txtExameFisico) {
            return;
        }
        parametros = {
            codExameFisico: this.txtExameFisico.GetText().CNum()
        };
        var exameFisicoRetorno = this.ExecutarFuncaoServerSideSynch("GetInformacoescodExameFisico", parametros);
        if (String.IsNullOrWhiteSpace(this.EntityTela.Exame_Fisico)) {
            if (exameFisicoRetorno && !String.IsNullOrWhiteSpace(exameFisicoRetorno.Exame_Fisico)) {
                this.GetScope().Entity.Codigo_Exame_Fisico = exameFisicoRetorno.Codigo;
                this.GetScope().Entity.Exame_Fisico = exameFisicoRetorno.Exame_Fisico;
                this.GetScope().$applyAsync();
            }
        }
    };
    C_AvalVetEntAdoc.prototype.OnAlterouSituacaoEntradaItem = function () {
        if (this.txtMotivoReprovacao) {
            var status = CNum(this.EntityTela.Status_Avaliacao_Entrada);
            switch (status) {
                case 3 /* enAprovado */.valueOf():
                    this.txtMotivoReprovacao.Visible = false;
                    this.txtMotivoReprovacao.Obrigatorio = false;
                    break;
                case 1 /* enNaoAvaliado */.valueOf():
                    this.txtMotivoReprovacao.Visible = false;
                    this.txtMotivoReprovacao.Obrigatorio = false;
                    break;
                case 4 /* enNaoCompareceu */.valueOf():
                    this.txtMotivoReprovacao.Visible = false;
                    this.txtMotivoReprovacao.Obrigatorio = false;
                    break;
                case 2 /* enReprovado */.valueOf():
                    this.txtMotivoReprovacao.Visible = true;
                    this.txtMotivoReprovacao.Obrigatorio = true;
                    break;
                default:
                    this.GetScope().Entity.Status_Avaliacao_Entrada = 1 /* enNaoAvaliado */;
                    this.RefreshAngular();
            }
        }
    };
    C_AvalVetEntAdoc.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        try {
            if (!this.ParametrosTela) {
                this.FecharModal();
                return;
            }
            if (!this.GetScope().OnAlterouSituacaoEntradaItem) {
                this.GetScope().OnAlterouSituacaoEntradaItem = $.proxy(this.OnAlterouSituacaoEntradaItem, this);
                this.GetScope().$watch(function (scope) { return scope.Entity.Status_Avaliacao_Entrada; }, this.GetScope().OnAlterouSituacaoEntradaItem);
            }
            var codEntrada = this.ParametrosTela.Codigo_Entrada;
            var codEntradaItem = this.ParametrosTela.Codigo_Entrada_Item;
            var codAvaliacaoItem = this.ParametrosTela.Codigo_Avaliacao_Item;
            var codVeterinario = this.ParametrosTela.Codigo_Veterinario_Avaliacao;
            var codEmpresaEntrada = this.ParametrosTela.Codigo_Empresa_Entrada;
            this.is_veterinario = !String.IsNullOrWhiteSpace(this.ParametrosTela.isVeterinario) ? this.ParametrosTela.isVeterinario == 'S' ? true : false : false;
            this.cboEmpresa.SetValue(codEmpresaEntrada);
            if (codAvaliacaoItem > 0) {
                this.PreencherEntidade('' + codAvaliacaoItem);
            }
            else {
                this.preencherDadosAvaliacao(0, codEntradaItem, codVeterinario);
            }
        }
        catch (e) {
            this.FecharModal();
        }
    };
    C_AvalVetEntAdoc.prototype.preencherDadosAvaliacao = function (codAvaliacaoItem, codEntradaItem, codVeterinario) {
        var parametros = {
            codAvaliacaoItem: CNum(codAvaliacaoItem),
            codItemEntrada: codEntradaItem
        };
        var informacoesAdicionais = this.ExecutarFuncaoServerSideSynch('GetDadosAvaliacaoItem', parametros);
        if (informacoesAdicionais && informacoesAdicionais.Entrada_Item) {
            this.ItemEntrada = informacoesAdicionais.Entrada_Item;
            //this.cboEmpresa.SetValue(this.ItemEntrada.Empresa);
            if (informacoesAdicionais.CheckList && informacoesAdicionais.CheckList.Itens) {
                this.ItensCheckList = informacoesAdicionais.CheckList.Itens;
                this.grdCheckListItens.Grid.PreencherGrid(this.ItensCheckList);
            }
            if (informacoesAdicionais.CheckListAvaliacaoComportamento && informacoesAdicionais.CheckListAvaliacaoComportamento.Itens) {
                this.ItensAvaliacaoComportamento = informacoesAdicionais.CheckListAvaliacaoComportamento.Itens;
                this.grdItensAvaliacaoComportamento.Grid.PreencherGrid(this.ItensAvaliacaoComportamento);
            }
            if (informacoesAdicionais.Vacinas) {
                this.VacinasRealizadas = informacoesAdicionais.Vacinas;
                this.grdVacinasAplicadas.Grid.PreencherGrid(this.VacinasRealizadas);
            }
            this.txtMicroChip.Visible = false;
            this.txtMicroChip.Obrigatorio = false;
            if (this.is_veterinario) {
                if (String.IsNullOrWhiteSpace(this.ItemEntrada.Microchip) && this.txtMicroChip) {
                    this.txtMicroChip.Visible = true;
                    if (ValoresSismoura.ConfiguracoesPetshop.Animais_Adocao_Utilizar_MicroChip) {
                        this.txtMicroChip.Obrigatorio = true;
                    }
                }
            }
            this.GetScope().Entity.Entrada_Adocao_Item = codEntradaItem;
            this.GetScope().Entity.Veterinario_Avaliacao_Entrada = codVeterinario;
            this.RefreshAngular();
            if (this.is_veterinario) {
                //Habilitar campos do veterinário
                this.HabilitarDesabilitarCampos('V');
            }
            else {
                //Habilitar campos do usuário
                this.HabilitarDesabilitarCampos('U');
            }
        }
    };
    C_AvalVetEntAdoc.prototype.OnGrdVacinasAplicadasAlterandoItem = function (s, e) {
        debugger;
        //this.VacinaRealizada.Nome_Vacina = this.txtServicoVacina.GetResultado();
        e.item.Nome_Vacina = this.txtServicoVacina.GetResultado();
    };
    C_AvalVetEntAdoc.prototype.OnGrdCheckListItensAlterandoItem = function (s, e) {
    };
    C_AvalVetEntAdoc.prototype.OnDepoisLimpar = function (entidade) {
        _super.prototype.OnDepoisLimpar.call(this, entidade);
        this.ItemEntrada = {};
        this.ItensCheckList = [];
        this.ItensAvaliacaoComportamento = [];
        this.VacinasRealizadas = [];
        this.is_veterinario = false;
        this.grdCheckListItens.Grid.PreencherGrid(null);
        this.grdItensAvaliacaoComportamento.Grid.PreencherGrid(null);
        this.cboAlteracaoExameFisicoComportamento.SetValue('0');
        entidade.Status_Avaliacao_Entrada = 1 /* enNaoAvaliado */;
    };
    C_AvalVetEntAdoc.prototype.OnAntesGravar = function () {
        var checkListAnamnese = this.grdCheckListItens.Grid.DataSource;
        if (!checkListAnamnese || checkListAnamnese.length == 0) {
            MostrarAlerta('Informe a anamnese para prosseguir.');
            return false;
        }
        else {
            var itensNaoInformadosAnamnese = [];
            checkListAnamnese.forEach(function (x) {
                if (x.Resposta == 3 /* enNAO_INFORMADO */.valueOf()) {
                    itensNaoInformadosAnamnese.push(x.Descricao_Item);
                }
            });
            if (itensNaoInformadosAnamnese.length > 0) {
                if (this.is_veterinario) {
                    MsgBoxJS("A anamnese n\u00E3o foi conclu\u00EDda ainda. Por favor, solicite ao usu\u00E1rio que realizou a entrada a conclus\u00E3o da anamnese", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
                }
                else {
                    MsgBoxJS("Por favor, informe os itens da anamnese: </br><b> " + this.getListUlHtml(itensNaoInformadosAnamnese) + "</b>", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
                }
                return false;
            }
        }
        if (this.is_veterinario) {
            if (this.EntityTela.Status_Avaliacao_Entrada != 4 /* enNaoCompareceu */.valueOf()) {
                var checkListComportamento = this.grdItensAvaliacaoComportamento.Grid.DataSource;
                if (!checkListComportamento || checkListComportamento.length == 0) {
                    MostrarAlerta('Informe a avaliação comportamental para prosseguir.');
                    return false;
                }
                else {
                    var itensNaoInformadosAvalComportamental = [];
                    checkListComportamento.forEach(function (x) {
                        if (x.Resposta == 3 /* enNAO_INFORMADO */.valueOf()) {
                            itensNaoInformadosAvalComportamental.push(x.Descricao_Item + '</br>');
                        }
                    });
                    if (itensNaoInformadosAvalComportamental.length > 0) {
                        MsgBoxJS("Por favor, informe os itens da avalia\u00E7\u00E3o comportamental: </br><b> " + this.getListUlHtml(itensNaoInformadosAvalComportamental) + "</b>", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
                        return false;
                    }
                }
                if (String.IsNullOrWhiteSpace(this.GetScope().Entity.Exame_Fisico) || this.GetScope().Entity.Exame_Fisico.length == 0) {
                    MostrarAlerta('Informe o exame físico');
                    return false;
                }
            }
            if (this.EntityTela.Status_Avaliacao_Entrada == 1 /* enNaoAvaliado */.valueOf()) {
                MostrarAlerta('Informe o status desta avaliação');
                return false;
            }
            debugger;
            if (this.validarMicrochip(this.txtMicroChip.GetText())) {
                this.GetScope().Entity.Microchip = this.txtMicroChip.GetText();
            }
            else {
                return false;
            }
        }
        if (!this.VacinasRealizadas || this.VacinasRealizadas.length == 0) {
            MostrarAlerta('Informe uma vacina para prosseguir.');
            return false;
        }
        var checkListPreenchido = this.grdCheckListItens.Grid.DataSource;
        var checkListComportamentoPreenchido = this.grdItensAvaliacaoComportamento.Grid.DataSource;
        this.GetScope().Entity.CheckListAvaliacao = checkListPreenchido;
        this.GetScope().Entity.CheckListAvaliacaoComportamento = checkListComportamentoPreenchido;
        this.GetScope().Entity.Vacinas = this.VacinasRealizadas;
        if (this.cboAlteracaoExameFisicoComportamento.GetValue() == 'S') {
            this.GetScope().Entity.Alteracao_Exame_Fisico_Comportamento = true;
        }
        else {
            this.GetScope().Entity.Alteracao_Exame_Fisico_Comportamento = false;
        }
        this.RefreshAngular();
        return _super.prototype.OnAntesGravar.call(this);
    };
    C_AvalVetEntAdoc.prototype.validarMicrochip = function (chip) {
        if (ValoresSismoura.ConfiguracoesPetshop.Animais_Adocao_Utilizar_MicroChip) {
            if (String.IsNullOrWhiteSpace(this.txtMicroChip.GetText()) && !this.IsPetReprovadoOuNaoCompareceu) {
                MostrarAlerta('Por favor, informe o microchip do pet.');
                return false;
            }
        }
        if (!String.IsNullOrWhiteSpace(this.txtMicroChip.GetText()) && this.txtMicroChip.GetText().length < 15) {
            MostrarAlerta('Informe um microchip válido.');
            return false;
        }
        if (ValoresSismoura.ConfiguracoesPetshop.Animais_Adocao_Utilizar_MicroChip && !this.IsPetReprovadoOuNaoCompareceu) {
            var parametros = {
                microchip: this.txtMicroChip.GetText()
            };
            var animal = this.ExecutarFuncaoServerSideSynch("GetDadosAnimalByMicrochip", parametros);
            if (animal && animal.Codigo > 0) {
                MostrarAlerta('Já existe um pet cadastrado com o mesmo microchip.');
                return false;
            }
        }
        return true;
    };
    C_AvalVetEntAdoc.prototype.OnDepoisGravar = function () {
        //Passo a entidade que acabou de ser gravada como parametro, pois ela deverá ser usada na tela que abriu o modal com a url desta tela.
        return _super.prototype.OnDepoisGravar.call(this);
    };
    C_AvalVetEntAdoc.prototype.OnDepoisBuscarExistente = function (entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, entidade);
        this.preencherDadosAvaliacao(entidade.Codigo, entidade.Entrada_Adocao_Item, entidade.Veterinario_Avaliacao_Entrada);
        this.txtExameFisico.SetText(entidade.Exame_Fisico);
        if (entidade.Alteracao_Exame_Fisico_Comportamento) {
            this.cboAlteracaoExameFisicoComportamento.SetValue('1');
        }
        else {
            this.cboAlteracaoExameFisicoComportamento.SetValue('0');
        }
    };
    C_AvalVetEntAdoc.prototype.OnAjudaClick = function (e) {
        this.dlgDicasComportamento.ModalDialog.Show();
    };
    C_AvalVetEntAdoc.prototype.HabilitarDesabilitarCampos = function (tipoPerfil) {
        debugger;
        var status = CNum(this.GetScope().Entity.Status_Avaliacao_Entrada);
        this.cboEmpresa.Enabled = false;
        if (ValoresSismoura.UsuarioLogado == 0) {
            return;
        }
        if (tipoPerfil == 'V') { //Veterinario
            this.tab.AlterarVisibleAba('AbaExameFisico', true);
            this.tab.AlterarVisibleAba('AbaComportamentos', true);
            this.cboStatusAvaliacao.Enabled = true;
            this.grdCheckListItens.Grid.PermitirEditarGrid = false;
            this.grdCheckListItens.Grid.SetColunaEditavel("Resposta", false);
            this.grdCheckListItens.Grid.SetColunaEditavel("Observacao", false);
            if (this.txtCodigoAvaliacaoEntradaItem.GetText().CNum() > 0) {
                if (status != 1 /* enNaoAvaliado */.valueOf()) {
                    this.grdItensAvaliacaoComportamento.Grid.PermitirEditarGrid = false;
                    this.grdItensAvaliacaoComportamento.Grid.SetColunaEditavel("Resposta", false);
                    this.grdItensAvaliacaoComportamento.Grid.SetColunaEditavel("Observacao", false);
                    this.cboStatusAvaliacao.Enabled = false;
                    this.cboAlteracaoExameFisicoComportamento.Enabled = false;
                    this.txtExameFisico.Disabled = true;
                    this.txtAlteracaoExameFisicoCompormental.Enabled = false;
                    this.txtMotivoReprovacao.Enabled = false;
                    this.txtTratamentoAnterior.Enabled = false;
                    this.txtExameFisicoResultado.Enabled = false;
                }
                else {
                    this.grdItensAvaliacaoComportamento.Grid.PermitirEditarGrid = true;
                    this.grdItensAvaliacaoComportamento.Grid.SetColunaEditavel("Resposta", true);
                    this.grdItensAvaliacaoComportamento.Grid.SetColunaEditavel("Observacao", true);
                    this.cboStatusAvaliacao.Enabled = true;
                    this.cboAlteracaoExameFisicoComportamento.Enabled = true;
                    this.txtExameFisico.Disabled = false;
                    this.txtAlteracaoExameFisicoCompormental.Enabled = true;
                    this.txtMotivoReprovacao.Enabled = true;
                    this.txtTratamentoAnterior.Enabled = true;
                    this.txtExameFisicoResultado.Enabled = true;
                }
            }
        }
        else { //Usuario
            this.cboStatusAvaliacao.Enabled = false; //O usuário não pode alterar o status da avaliação, apenas o veterinário.
            this.tab.AlterarVisibleAba('AbaExameFisico', false);
            this.tab.AlterarVisibleAba('AbaComportamentos', true);
            //this.grdItensAvaliacaoComportamento.Grid.Enabled = false;
            this.grdItensAvaliacaoComportamento.Grid.SetColunaEditavel("Resposta", false);
            this.grdItensAvaliacaoComportamento.Grid.SetColunaEditavel("Observacao", false);
            this.grdItensAvaliacaoComportamento.Grid.PermitirEditarGrid = false;
            if (this.txtCodigoAvaliacaoEntradaItem.GetText().CNum() > 0) {
                if (status != 1 /* enNaoAvaliado */.valueOf()) {
                    //this.grdCheckListItens.Grid.Enabled = false;
                    this.grdCheckListItens.Grid.PermitirEditarGrid = false;
                    this.grdCheckListItens.Grid.SetColunaEditavel("Resposta", false);
                    this.grdCheckListItens.Grid.SetColunaEditavel("Observacao", false);
                    this.txtMotivoReprovacao.Enabled = false;
                    this.txtTratamentoAnterior.Enabled = false;
                }
                else {
                    //this.grdCheckListItens.Grid.Enabled = true;
                    this.grdCheckListItens.Grid.PermitirEditarGrid = true;
                    this.grdCheckListItens.Grid.SetColunaEditavel("Resposta", true);
                    this.grdCheckListItens.Grid.SetColunaEditavel("Observacao", true);
                    if (this.txtMotivoReprovacao) {
                        this.txtMotivoReprovacao.Enabled = true;
                    }
                    this.txtTratamentoAnterior.Enabled = true;
                }
            }
        }
        this.grdCheckListItens.AtualizarGrid();
        this.grdItensAvaliacaoComportamento.AtualizarGrid();
    };
    C_AvalVetEntAdoc.prototype.OnAlterouCboAlteracaoExameFisicoComplementar = function (s, e) {
        var valor = this.cboAlteracaoExameFisicoComportamento.GetValue();
        if (String.IsNullOrWhiteSpace(valor)) {
            return;
        }
        else if (valor == '1') {
            this.GetScope().Entity.Alteracao_Exame_Fisico_Comportamento = true;
            this.txtAlteracaoExameFisicoCompormental.Obrigatorio = true;
        }
        else {
            this.GetScope().Entity.Alteracao_Exame_Fisico_Comportamento = false;
            this.txtAlteracaoExameFisicoCompormental.Obrigatorio = false;
        }
        this.RefreshAngular();
    };
    C_AvalVetEntAdoc.prototype.getListUlHtml = function (array) {
        if (!array || array.length == 0) {
            return '';
        }
        var retorno = [];
        array.forEach(function (x) {
            retorno.push('<li>' + x + '</li>');
        });
        return '<ul>' + retorno.join("") + '</ul>';
    };
    return C_AvalVetEntAdoc;
}(MouraPageCadastroAngular));
var c_AvalVetEntAdoc = new C_AvalVetEntAdoc();
//# sourceMappingURL=C_AvalVetEntAdoc.js.map