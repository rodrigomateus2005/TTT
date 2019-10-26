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
var C_ContPlan = /** @class */ (function (_super) {
    __extends(C_ContPlan, _super);
    function C_ContPlan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PATH_DOCUMENTOS_HOSPEDAGEM = "~/Documentos/ContratosClubeVantagens/";
        _this.flagPagamento = false;
        return _this;
    }
    Object.defineProperty(C_ContPlan.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "cboPlano", {
        get: function () {
            return window['cboPlano_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "lblTempoContrato", {
        get: function () {
            return window['lblTempoContrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "grdTriagemItens", {
        get: function () {
            return window['grdTriagemItens_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "txtProfissional_Responsavel", {
        get: function () {
            return window['txtProfissional_Responsavel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "txtDataTriagem", {
        get: function () {
            return window['txtDataTriagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "txtTriagemProcura", {
        get: function () {
            return window['txtTriagemProcura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "txtParcelas", {
        get: function () {
            return window['txtParcelas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "txtVencimentoInicial", {
        get: function () {
            return window['txtVencimentoInicial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "txtValorContrato", {
        get: function () {
            return window['txtValorContrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "cboTipoDias", {
        get: function () {
            return window['cboTipoDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "cboScore", {
        get: function () {
            return window['cboScore_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "txtDias", {
        get: function () {
            return window['txtDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "grdParcelas", {
        get: function () {
            return window['grdParcelas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "lblStatusContrato", {
        get: function () {
            return window['lblStatusContrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "lblDescricaoPontuacao", {
        get: function () {
            return window['lblDescricaoPontuacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "CarenciasServicos", {
        get: function () {
            if (!this.GetScope()["CarenciasServicos"]) {
                this.GetScope()["CarenciasServicos"] = {};
            }
            return this.GetScope()["CarenciasServicos"];
        },
        set: function (value) {
            this.GetScope()["CarenciasServicos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "CarenciaServico", {
        get: function () {
            return this.GetScope()["CarenciaServico"];
        },
        set: function (value) {
            this.GetScope()["CarenciaServico"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "hdnConfigPetz", {
        get: function () {
            return $("#hdnConfigPetz")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "ConfigPetz", {
        get: function () {
            if (this.hdnConfigPetz && !String.IsNullOrWhiteSpace(this.hdnConfigPetz.value)) {
                return JSON.parse(DecodeTextoJSON(this.hdnConfigPetz.value));
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "URLStoom", {
        get: function () {
            if (this.ConfigPetz) {
                var url = ("" + this.ConfigPetz.URL_WS_STOOM).trim();
                if (!url.endsWith("/")) {
                    url += "/";
                }
                return url;
            }
            else {
                return "";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "txtPeriodo_Vigencia", {
        get: function () {
            return window['txtPeriodo_Vigencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "txtValorMensalidade", {
        get: function () {
            return window['txtValorMensalidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "btnEmitirContrato", {
        get: function () {
            return window['btnEmitirContrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "cboModelo", {
        get: function () {
            return window['cboModelo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "btnAnexos", {
        get: function () {
            return window['btnAnexos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "dlgAnexo", {
        get: function () {
            return window['dlgAnexo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "grdServicoCarencia", {
        get: function () {
            return window['grdServicoCarencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "txtServico", {
        get: function () {
            return window['txtServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "cboTipoCobranca", {
        get: function () {
            return window['cboTipoCobranca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "mdmdCancelamento", {
        get: function () {
            return window['mdCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "txtValorPago", {
        get: function () {
            return window['txtValorPago_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "txtParcelaAtual", {
        get: function () {
            return window['txtParcelaAtual_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "txtParcelaDevolver", {
        get: function () {
            return window['txtParcelaDevolver_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "txtValorTotalDevolver", {
        get: function () {
            return window['txtValorTotalDevolver_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContPlan.prototype, "btnCancelarContrato", {
        get: function () {
            return window['btnCancelarContrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ContPlan.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtTriagemProcura) {
            adicionarEventoMoura(this.txtTriagemProcura.Procurou, this.OnTxtTriagemProcuraProcurou, this);
        }
        if (this.txtPet) {
            adicionarEventoMoura(this.txtPet.TextBoxAnimal.Procurou, this.OnPesquisouPet, this);
        }
        if (this.btnEmitirContrato) {
            adicionarEventoMoura(this.btnEmitirContrato.Click, this.OnClickBotaoImprimir, this);
        }
        if (this.btnAnexos) {
            adicionarEventoMoura(this.btnAnexos.Click, this.OnBtnAnexoClick, this);
        }
        if (this.dlgTelaModal && this.dlgTelaModal.Modal && this.dlgTelaModal.Modal.ModalDialog) {
            adicionarEventoDevExpress(this.dlgTelaModal.Modal.ModalDialog.Closing, this.OnFechouModalPagamento, this);
        }
        if (this.grdTriagemItens) {
            adicionarEventoMoura(this.grdTriagemItens.EditouItemGrade, this.EditouTriagem, this);
            adicionarEventoMoura(this.grdTriagemItens.RowValidating, this.ValidandoTriagem, this);
        }
        if (this.grdServicoCarencia) {
            adicionarEventoMoura(this.grdServicoCarencia.Validando, this.OnValidandoItemCarencia, this);
        }
        if (this.cboTipoCobranca && this.cboTipoCobranca.Combo) {
            adicionarEventoDevExpress(this.cboTipoCobranca.Combo.SelectedIndexChanged, this.OnMudouCobranca, this);
        }
    };
    C_ContPlan.prototype.OnMudouCobranca = function (s, e) {
        this.EntityTela.Tipo_Cobranca = this.cboTipoCobranca.GetValue();
        this.RefreshAngular();
        this.AlterarValorPlano(this.EntityTela);
    };
    C_ContPlan.prototype.VerificaExistenciaServico = function (codServico) {
        var retorno = false;
        var entidade = this.CarenciasServicos.FirstOrDefault("Codigo_Servico", codServico);
        if (entidade != null) {
            retorno = true;
        }
        return retorno;
    };
    C_ContPlan.prototype.OnValidandoItemCarencia = function (s, e) {
        try {
            var entidade;
            entidade = e.item;
            if (e.index < 0) {
                if (!entidade.Codigo_Servico) {
                    MostrarAlerta("Serviço não encontrado");
                    e.cancelar = true;
                    return;
                }
                if (!entidade.Carencia) {
                    MostrarAlerta("Informe o campo Carência");
                    e.cancelar = true;
                    return;
                }
                if (this.VerificaExistenciaServico(entidade.Codigo_Servico)) {
                    MostrarAlerta("O serviço informado já foi adicionado na grade!");
                    e.cancelar = true;
                    return;
                }
                entidade.Nome_Servico = this.txtServico.GetResultado();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ContPlan.prototype.EditouTriagem = function (s, e) {
        this.OnAlterouPlano();
    };
    C_ContPlan.prototype.ValidandoTriagem = function (s, e) {
        if (this.IsBloquearContrato(this.EntityTela)) {
            //MostrarAlerta("Esse contrato não permite edição");
            e.errorText = "Esse contrato não permite edição";
            e.isValid = false;
            return;
        }
    };
    C_ContPlan.prototype.OnBtnAnexoClick = function (s, e) {
        e.processOnServer = false;
        if (this.EntityTela.Codigo <= 0) {
            MostrarAlerta("Informe um contrato já cadastrado");
            return;
        }
        this.dlgAnexo.MostrarClient(this.PATH_DOCUMENTOS_HOSPEDAGEM + this.EntityTela.Codigo);
    };
    C_ContPlan.prototype.OnClickBotaoImprimir = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.GetScope().Entity.Codigo <= 0) {
                MostrarAlerta("Informe um contrato existente!");
                return;
            }
            var parametros;
            parametros = {
                codContrato: this.EntityTela.Codigo,
                codDocumento: this.cboModelo.GetValue()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetImpressaoContrato", parametros);
            this.ImprimirDocumentoWord(retorno.Itens, retorno.Documento, "N");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ContPlan.prototype.OnTxtTriagemProcuraProcurou = function (s, e) {
        try {
            if ((!this.EntityTela.Triagem) || (this.EntityTela.Triagem == 0)) {
                return;
            }
            var parametros;
            parametros = {
                codContrato: CNum(this.EntityTela.Codigo),
                codTriagem: CNum(this.EntityTela.Triagem)
            };
            var valido = this.ExecutarFuncaoServerSideSynch("isTriagemAtiva", parametros);
            if (!valido) {
                MostrarAlerta("Este registro não pode ser utilizado para novos contratos");
                this.EntityTela.Triagem_Itens = [];
                this.EntityTela.Triagem = 0;
                this.grdTriagemItens.PreencherGrid([]);
                this.RefreshAngular();
                return;
            }
            parametros = {
                codigoContrato: ("" + this.GetScope().Entity.Codigo).CNum(),
                codigotriagem: this.GetScope().Entity.Triagem,
                triagemExistentes: this.GetScope().Entity.Triagem_Itens
            };
            if (!parametros.triagemExistentes) {
                parametros.triagemExistentes = [];
            }
            if (!parametros.codigotriagem) {
                parametros.codigotriagem = 0;
            }
            var triagemAtualizado = this.ExecutarFuncaoServerSideSynch("GetTriagemPreenchido", parametros);
            if (!triagemAtualizado) {
                triagemAtualizado = {};
            }
            this.GetScope().Entity.Triagem_Itens = triagemAtualizado;
            this.grdTriagemItens.PreencherGrid(triagemAtualizado);
            this.GetScope().$applyAsync();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ContPlan.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.grdTriagemItens.PreencherGrid([]);
        this.lblTempoContrato.Text = "";
        this.txtPet.Limpar();
        if (ValoresSismoura.EmpresaPadraoUsuario) {
            Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        }
        var dataAtual = ConvertToDate(this.DataServidor());
        Entity.Data_Inicio = dataAtual;
        var data = ConvertToDate(cloneObject(Entity.Data_Inicio));
        Entity.Data_Fim = data.dateAdd("y", 1);
        Entity.Data_Triagem = dataAtual;
        Entity.Tipo_Cobranca = 1;
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus && !String.IsNullOrWhiteSpace(ValoresSismoura.ConfiguracoesPetshop.Exame_Fisico_Clube_Vantagens)) {
            Entity.Exame_Fisico = ValoresSismoura.ConfiguracoesPetshop.Exame_Fisico_Clube_Vantagens;
        }
        this.HabilitaCamposPagamento(true);
        this.dlgAnexo.CarregarAnexos("");
        this.AtualizarStatusContrato(Entity);
        this.grdParcelas.PreencherGrid([]);
        this.flagPagamento = false;
        this.CarenciasServicos = [];
        this.isContratoFilhote = false;
        this.isMudouTipoPlano = false;
    };
    C_ContPlan.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        this.txtValorMensalidade.Enabled = false;
        this.txtPeriodo_Vigencia.Enabled = false;
        this.AtualizarStatusContrato(this.EntityTela);
        if (!this.GetScope().CodigoPlano) {
            this.GetScope().CodigoPlano = $.proxy(this.OnAlterouPlano, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Plano; }, this.GetScope().CodigoPlano);
        }
        if (this.grdTriagemItens) {
            setTimeout(function () {
                _this.grdTriagemItens.Grid.option("pageSize", 200);
            }, 1000);
        }
        this.flagPagamento = false;
        this.cboScore.Visible = false;
    };
    C_ContPlan.prototype.CarregarParcelasGeradas = function () {
        try {
            var parametros;
            if (!this.EntityTela || !this.EntityTela.Codigo) {
                this.grdParcelas.PreencherGrid([]);
            }
            else {
                parametros = {
                    codContrato: CNum(this.EntityTela.Codigo)
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("GetParcelasGeradas", parametros);
                this.grdParcelas.PreencherGrid(retorno);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ContPlan.prototype.OnAlterouPlano = function () {
        this.AlterarValorPlano(this.EntityTela);
        this.isMudouTipoPlano = true;
    };
    C_ContPlan.prototype.CalcularTotalPontos = function () {
        var triagens = this.grdTriagemItens.DataSource;
        var x;
        var pontos = 0;
        for (x = 0; x < triagens.length; x++) {
            if (triagens[x].Resposta) {
                pontos += CNum(triagens[x].Pontuacao_Item);
            }
        }
        return pontos;
    };
    C_ContPlan.prototype.AlterarValorPlano = function (entity) {
        try {
            if (this.IsBloquearContrato(entity)) {
                return;
            }
            //Se o contrato já estiver salvo, não altera o valor da mensalidade
            //if (CNum(this.EntityTela.Codigo) > 0)  {
            //    return;
            //}
            var parametros;
            parametros = {
                codigoPlano: CNum(this.EntityTela.Plano),
                totalPontos: CNum(this.CalcularTotalPontos()),
                codCliente: this.txtPet.TextBoxProprietario.GetText().CNum(),
                codAnimal: CNum(this.EntityTela.Animal),
                codContrato: CNum(this.EntityTela.Codigo),
                tipoCobranca: CNum(this.EntityTela.Tipo_Cobranca)
            };
            entity.Valor_Mensalidade = this.ExecutarFuncaoServerSideSynch("GetValorMensalidadePlano", parametros);
            var pontuacaoIdade;
            parametros = {
                codPlano: CNum(this.EntityTela.Plano),
                codAnimal: CNum(this.EntityTela.Animal),
                totalPontos: CNum(this.CalcularTotalPontos())
            };
            pontuacaoIdade = this.ExecutarFuncaoServerSideSynch("GetPontuacao", parametros);
            if (pontuacaoIdade) {
                this.lblDescricaoPontuacao.Text = pontuacaoIdade.Descricao;
                entity.Pontuacao_Idade = pontuacaoIdade.Codigo;
            }
            else {
                this.lblDescricaoPontuacao.Text = "";
                entity.Pontuacao_Idade = 0;
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ContPlan.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.EntityTela.Codigo == null || this.isMudouTipoPlano) {
            this.EntityTela.Data_Cadastro = this.DataServidor();
            var parametros = {
                codPlano: this.EntityTela.Plano,
                codAnimal: this.EntityTela.Animal
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificaContratoFilhotes", parametros);
            if (retorno) {
                if (retorno.IsFilhote) {
                    debugger;
                    if (retorno.IsPassouPrazo) {
                        if (retorno.TipoFilhote == 1) {
                            MostrarAlerta("Não é possível utilizar um contrato específico para filhotes, pois o Pet foi vendido a mais de 30 dias!");
                        }
                        else if (retorno.TipoFilhote == 2) {
                            MostrarAlerta("Não é possível utilizar um contrato específico para filhotes, pois o idade do PET é maior que a idade máxima permitida!");
                        }
                        return false;
                    }
                    this.isContratoFilhote = true;
                }
                else {
                    this.isContratoFilhote = false;
                    MostrarAlerta("Não é possível utilizar um contrato específico para filhotes para o animal informado!");
                    return false;
                }
            }
        }
        this.EntityTela.Usuario_Cadastro = ValoresSismoura.UsuarioLogado;
        this.AlterarValorPlano(this.EntityTela);
        if (this.CarenciasServicos) {
            this.EntityTela.Carencias_Servicos = this.CarenciasServicos;
        }
        return true;
    };
    C_ContPlan.prototype.isContratoSalvo = function () {
        var retorno = false;
        if (this.EntityTela && this.EntityTela.Codigo && this.EntityTela.Codigo > 0) {
            retorno = true;
        }
        return retorno;
    };
    C_ContPlan.prototype.OnClickBotaoFecharModal = function () {
        this.mdmdCancelamento.Hide();
    };
    C_ContPlan.prototype.OnClickCancelarContratoAnual = function () {
        var _this = this;
        try {
            MsgBoxJS("Deseja realmente solicitar cancelamento do contrato?<br />Após esta solicitação não será mais possível utilizar o contrato", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.Yes) {
                    _this.EntityTela.Data_Cancelado = new Date();
                    _this.EntityTela.Usuario_Cancelamento = ValoresSismoura.UsuarioLogado;
                    _this.EntityTela.Motivo_Cancelamento = "Cancelando contrato anual";
                    var parametros = {
                        entidade: JSON.stringify(_this.EntityTela)
                    };
                    var retorno = _this.ExecutarFuncaoServerSideSynch("EnviarEmailCancelamento", parametros);
                    _this.mdmdCancelamento.Hide();
                    if (retorno) {
                        _this.ClicarGravar();
                        _this.AtualizarStatusContrato(_this.EntityTela);
                    }
                }
            }, null, "");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ContPlan.prototype.OnClickBotaoPagamento = function () {
        var _this = this;
        try {
            this.flagPagamento = true;
            if (!this.isContratoSalvo()) {
                MostrarAlerta("Informe um contrato salvo");
                return;
            }
            var pessoa = this.ObterDadosPessoa(this.txtPet.TextBoxProprietario.GetText().CNum());
            if (!pessoa) {
                MostrarAlerta("Cliente não encontrado!");
                return;
            }
            if (ConvertToDate(this.EntityTela.Data_Cancelado)) {
                MostrarAlerta("Este contrato foi cancelado!");
                return;
            }
            var pet = this.GetDadosAnimal(this.txtPet.TextBoxAnimal.GetText().CNum());
            if (!pet) {
                MostrarAlerta("Animal não encontrado!");
                return;
            }
            if (String.IsNullOrWhiteSpace(pet.Chip)) {
                MostrarAlerta("Para fazer o pagamento é necessário que o animal tenha um microchip!");
                return;
            }
            if (!pet.Data_Nascimento) {
                MostrarAlerta("Para fazer o pagamento é necessário que o animal tenha a data de nascimento!");
                return;
            }
            if (this.dlgAnexo && this.dlgAnexo.grdAnexos.DataSource && this.dlgAnexo.grdAnexos.DataSource.length <= 0) {
                MostrarAlerta("Para fazer o pagamento é necessário que o contrato tenha ao menos um documento anexado!");
                return;
            }
            var retorno = false;
            var parametros = {
                codigoContrato: this.EntityTela.Codigo,
            };
            if (this.EntityTela.Tipo_Cobranca == 2 /* enAnual */) {
                retorno = this.ExecutarFuncaoServerSideSynch("PETZ_VerificaExistenciaPagamentoPlano", parametros);
            }
            if (!retorno) {
                MsgBoxJS("Deseja realmente solicitar o pagamento?<br />Após esta solicitação não será mais possível alterar o valor da mensalidade do contrato", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                    if (result.Resultado == MsgBoxResult.Yes) {
                        if (_this.EntityTela.Tipo_Cobranca == 2 /* enAnual */) {
                            _this.EntityTela.Data_Solicitou_Pagamento = new Date();
                        }
                        _this.ClicarGravar();
                    }
                }, null, "");
            }
            else {
                MostrarAlerta("Já foi gerado um atendimento para o contrato informado!");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ContPlan.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        if (this.flagPagamento) {
            var pessoa = this.ObterDadosPessoa(this.txtPet.TextBoxProprietario.GetText().CNum());
            this.IniciarPagamento(pessoa);
        }
        this.flagPagamento = false;
        return true;
    };
    C_ContPlan.prototype.IniciarPagamento = function (pessoa) {
        try {
            var key;
            var dados;
            var url = this.URLStoom + "assinatura_Loja.html?";
            var parametros = {
                codContrato: (this.EntityTela.Codigo),
                codUsuario: ValoresSismoura.UsuarioLogado,
                tela: ValoresSismoura.NomeTela
            };
            var retornoFuncao = this.ExecutarFuncaoServerSideSynch("AtualizaContratoEnviadoPagamento", parametros);
            if (String.IsNullOrWhiteSpace(retornoFuncao)) {
                if (this.EntityTela.Tipo_Cobranca == 1) {
                    url += "idContrato=" + CNum(this.EntityTela.Codigo);
                    url += "&cpfContrato=" + ("" + pessoa.CPF).soNumeros();
                    url += "&nomeContrato=" + encodeURI(pessoa.Nome);
                    url += "&emailContrato=" + encodeURI(pessoa.Email);
                    url += "&telefoneContrato=" + ("" + pessoa.Fone).soNumeros();
                    if (!String.IsNullOrWhiteSpace(pessoa.Sexo)) {
                        url += "&sexoContrato=" + pessoa.Sexo.trim().substring(0, 1).toUpperCase();
                    }
                    pessoa.Data_Nascimento = ConvertToDate(pessoa.Data_Nascimento);
                    if (pessoa.Data_Nascimento) {
                        url += "&dataAniversarioContrato=" + pessoa.Data_Nascimento.FormataData().soNumeros();
                    }
                    url += "&valorContrato=" + CNum(this.EntityTela.Valor_Mensalidade);
                    dados = "" + CNum(this.EntityTela.Codigo);
                    dados += "" + CNum(this.EntityTela.Valor_Mensalidade);
                    dados += ("" + pessoa.CPF).soNumeros();
                    key = this.GerarKeyStoom("petz", dados, "clube");
                    url += "&key=" + key;
                    this.dlgTelaModal.Modal.SetHeaderText("Após concluir a operação, clique no botão fechar para voltar ao contrato");
                    this.dlgTelaModal.AbrirTelaModalUrlPropria(url);
                }
                else {
                    parametros = {
                        codContrato: CNum(this.EntityTela.Codigo),
                        valorContrato: CNum(this.EntityTela.Valor_Mensalidade),
                        empresaContrato: CNum(this.EntityTela.Empresa),
                        tipoCobranca: CNum(this.EntityTela.Tipo_Cobranca)
                    };
                    var retorno = this.ExecutarFuncaoServerSideSynch("GerarMensalidadeValorIntegral", parametros);
                    if (retorno) {
                        MostrarMensagem("O Atendimento foi criado com sucesso, para começar a utilizar o plano de saúde importe e faça a cobrança do mesmo na Zanthus!");
                    }
                    else {
                        MostrarError("Ocorreu um erro ao gerar o atendimento");
                    }
                    this.PreencherEntidade(this.EntityTela.Codigo.toString());
                }
                this.CarregarParcelasGeradas();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ContPlan.prototype.OnClickBotaoCancelarPagamento = function () {
        var _this = this;
        try {
            var url;
            var dados;
            var key;
            var multa = 0;
            var msg = "Deseja realmente cancelar o pagamento do contrato?";
            if (!this.isContratoSalvo()) {
                MostrarAlerta("Informe um contrato salvo");
                return;
            }
            if (ConvertToDate(this.EntityTela.Data_Cancelado)) {
                MostrarAlerta("Este contrato já foi cancelado!");
                return;
            }
            if (!ConvertToDate(this.EntityTela.Data_Integracao_Pagamento)) {
                MostrarAlerta("Este contrato ainda não foi pago");
                return;
            }
            if (this.isContratoFilhote) {
                var parametros = {
                    contrato: CNum(this.EntityTela.Codigo)
                };
                var parcelaAtual = this.ExecutarFuncaoServerSideSynch("RetornaQtdeParcelasPagas", parametros);
                if (parcelaAtual == 0)
                    parcelaAtual = 1;
                if (parcelaAtual < 6) {
                    var parcelasMulta = 6 - parcelaAtual;
                    if (parcelasMulta == 0)
                        parcelasMulta = 1;
                    multa = (parcelasMulta * this.EntityTela.Valor_Mensalidade);
                    msg += "<br>Uma multa de R$" + multa.Format(2) + " será cobrada devido ao cancelamento ser realizado antes do período mínimo em contrato que é de 6 meses!";
                }
                else {
                    multa = 0;
                }
            }
            if (this.EntityTela.Tipo_Cobranca == 1 /* enMensal */) {
                this.dlgFuncaoAdm.Verificar("clubePetzCancelamento", ValoresSismoura.UsuarioLogado, false, function (retorno) {
                    if (!retorno.Autorizado) {
                        return;
                    }
                    MsgBoxJS(msg, MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                        if (result.Resultado == MsgBoxResult.Yes) {
                            if (multa == 0) {
                                url = _this.URLStoom + "cancel_AssinaturaLoja.html?";
                                url += "idContrato=" + CNum(_this.EntityTela.Codigo);
                                dados = "" + CNum(_this.EntityTela.Codigo);
                                key = _this.GerarKeyStoom("petz", dados, "clube");
                                url += "&key=" + key;
                                _this.dlgTelaModal.Modal.SetHeaderText("Após concluir a operação, clique no botão fechar para voltar ao contrato");
                                _this.dlgTelaModal.AbrirTelaModalUrlPropria(url);
                            }
                            else {
                                var parametros = {
                                    codContrato: CNum(_this.EntityTela.Codigo),
                                    valorMulta: CNum(multa)
                                };
                                var retorno = _this.ExecutarFuncaoServerSideSynch("CancelarContratoMulta", parametros);
                                if (retorno) {
                                    if (retorno.sucesso) {
                                        MsgBoxJS(retorno.msg, MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
                                        _this.EntityTela.Data_Cancelado = new Date();
                                        _this.EntityTela.Usuario_Cancelamento = ValoresSismoura.UsuarioLogado;
                                        _this.EntityTela.Motivo_Cancelamento = "Cancelando contrato mensal filhotes";
                                        _this.EntityTela.Valor_Multa = multa;
                                        _this.ClicarGravar();
                                        _this.AtualizarStatusContrato(_this.EntityTela);
                                    }
                                    else {
                                        MostrarError("Ocorreu um erro ao cancelar o contrato: " + retorno.msg);
                                    }
                                }
                                else {
                                    MostrarError("Ocorreu um erro ao cancelar o contrato");
                                }
                            }
                        }
                    }, null, "");
                }, this, true);
            }
            else {
                var parametros = {
                    contrato: CNum(this.EntityTela.Codigo)
                };
                this.EntityTela.Parcela_Atual = this.ExecutarFuncaoServerSideSynch("RetornaQtdeParcelasPagas", parametros);
                this.EntityTela.Valor_Pago = this.EntityTela.Valor_Mensalidade;
                if (this.EntityTela.Parcela_Atual == 0)
                    this.EntityTela.Parcela_Atual = 1;
                if (this.isContratoFilhote) {
                    if (this.EntityTela.Parcela_Atual <= 6) {
                        this.EntityTela.Parcelas_Devolver = 6;
                    }
                    else {
                        this.EntityTela.Parcelas_Devolver = 12 - this.EntityTela.Parcela_Atual;
                    }
                }
                else {
                    this.EntityTela.Parcelas_Devolver = 12 - this.EntityTela.Parcela_Atual;
                }
                this.EntityTela.Valor_Devolvido = (this.EntityTela.Valor_Pago / 12) * this.EntityTela.Parcelas_Devolver;
                this.GetScope().$applyAsync();
                this.mdmdCancelamento.Show();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ContPlan.prototype.OnClickAlterarPagamento = function () {
        var _this = this;
        try {
            debugger;
            var url = this.URLStoom + "edit_AssinaturaLoja.html?";
            var dados;
            var key;
            if (!this.isContratoSalvo()) {
                MostrarAlerta("Informe um contrato salvo");
                return;
            }
            if (ConvertToDate(this.EntityTela.Data_Cancelado)) {
                MostrarAlerta("Este contrato foi cancelado!");
                return;
            }
            if (this.EntityTela.Tipo_Cobranca == 2 /* enAnual */) {
                MostrarAlerta("Opção disponível apenas para contratos com o tipo de pagamento Mensal!");
                return;
            }
            MsgBoxJS("Deseja realmente alterar o pagamento do contrato?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.Yes) {
                    url += "idContrato=" + CNum(_this.EntityTela.Codigo);
                    dados = "" + CNum(_this.EntityTela.Codigo);
                    key = _this.GerarKeyStoom("petz", dados, "clube");
                    url += "&key=" + key;
                    _this.dlgTelaModal.Modal.SetHeaderText("Após concluir a operação, clique no botão fechar para voltar ao contrato");
                    _this.dlgTelaModal.AbrirTelaModalUrlPropria(url);
                }
            }, null, "");
            this.CarregarParcelasGeradas();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ContPlan.prototype.GetDadosAnimal = function (codAnimal) {
        var parametros = {
            codAnimal: codAnimal
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetDadosAnimal", parametros);
        return retorno;
    };
    C_ContPlan.prototype.OnClickEmailAlterarPagamento = function () {
        var _this = this;
        try {
            if (!this.isContratoSalvo()) {
                MostrarAlerta("Informe um contrato salvo");
                return;
            }
            if (ConvertToDate(this.EntityTela.Data_Cancelado)) {
                MostrarAlerta("Este contrato foi cancelado!");
                return;
            }
            if (this.EntityTela.Tipo_Cobranca == 2 /* enAnual */) {
                MostrarAlerta("Opção disponível apenas para contratos com o tipo de pagamento Mensal!");
                return;
            }
            var parametros = {
                codPessoa: this.txtPet.TextBoxProprietario.GetText().CNum()
            };
            var retornoEmail = this.ExecutarFuncaoServerSideSynch("GetEmailCliente", parametros);
            var msg;
            if (!String.IsNullOrWhiteSpace(retornoEmail)) {
                msg = "Atenção! O e-mail será enviado para o endereço: <b>" + retornoEmail + "</b>.Deseja continuar? <br>Verifique o e-mail com o cliente e caso esteja errado realize a correção do mesmo no CadPetz.";
            }
            else {
                msg = "Deseja realmente enviar o link para o e-mail do cliente?";
            }
            MsgBoxJS(msg, MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.Yes) {
                    var parametros = {
                        contrato: _this.EntityTela.Codigo
                    };
                    var retorno = _this.ExecutarFuncaoServerSideSynch("EnviarEmailTrocaPagamento", parametros);
                    if (retorno) {
                        MostrarMensagem("E-mail enviado com sucesso");
                    }
                }
            }, null, "");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ContPlan.prototype.OnClickAtualizarStatus = function () {
        var _this = this;
        try {
            if (!this.isContratoSalvo()) {
                MostrarAlerta("Informe um contrato salvo");
                return;
            }
            if (this.EntityTela.Tipo_Cobranca == 2 /* enAnual */) {
                MostrarAlerta("Opção disponível apenas para contratos com o tipo de pagamento Mensal!");
                return;
            }
            var parametros;
            parametros = {
                codContrato: CNum(this.EntityTela.Codigo),
            };
            abrirEspera("Aguarde. Consultando integração de pagamento");
            var retorno = this.ExecutarFuncaoServerSideAsynch("AtualizarStatusIntegracao", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (!String.IsNullOrWhiteSpace(retorno)) {
                    MostrarAlerta(retorno);
                }
                _this.AtualizarDadosTela();
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
    C_ContPlan.prototype.OnAntesBuscarExistente = function () {
        _super.prototype.OnAntesBuscarExistente.call(this);
        this.txtPet.Limpar();
    };
    C_ContPlan.prototype.OnDepoisBuscarExistente = function (Entidade) {
        try {
            _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
            this.flagPagamento = false;
            var parametros;
            if (Entidade) {
                parametros = {
                    Entidade: JSON.stringify(Entidade)
                };
                this.lblTempoContrato.Text = this.ExecutarFuncaoServerSideSynch("RetornaDiasUtilizacao", parametros);
                parametros = {
                    codigoContrato: Entidade.Codigo
                };
                var InformacoesAdicionais = this.ExecutarFuncaoServerSideSynch("GetInformacoesAdicionaisContrato", parametros);
                Entidade.Triagem_Itens = InformacoesAdicionais.Triagens;
                this.CarenciasServicos = InformacoesAdicionais.Carencias;
                this.grdTriagemItens.PreencherGrid(Entidade.Triagem_Itens);
                Entidade.Data_Cadastro = ConvertToDate(Entidade.Data_Cadastro);
                Entidade.Data_Cancelado = ConvertToDate(Entidade.Data_Cancelado);
                Entidade.Data_Fim = ConvertToDate(Entidade.Data_Fim);
                Entidade.Data_Inicio = ConvertToDate(Entidade.Data_Inicio);
                Entidade.Data_Integracao_Pagamento = ConvertToDate(Entidade.Data_Integracao_Pagamento);
                Entidade.Data_Solicitou_Pagamento = ConvertToDate(Entidade.Data_Solicitou_Pagamento);
                if (this.IsBloquearContrato(Entidade)) {
                    //Se já estiver pago, não habilita os campos
                    this.HabilitaCamposPagamento(false);
                }
                else {
                    this.AlterarValorPlano(Entidade);
                    this.HabilitaCamposPagamento(true);
                }
                this.dlgAnexo.CarregarAnexos(this.PATH_DOCUMENTOS_HOSPEDAGEM + Entidade.Codigo);
                this.AtualizarStatusContrato(Entidade);
                this.CarregarParcelasGeradas();
                var parametros = {
                    codPlano: Entidade.Plano,
                    codAnimal: Entidade.Animal
                };
                var objPlano = this.ExecutarFuncaoServerSideSynch("VerificaContratoFilhotes", parametros);
                if (objPlano) {
                    if (objPlano.IsFilhote) {
                        this.isContratoFilhote = objPlano.IsFilhote;
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ContPlan.prototype.IsBloquearContrato = function (Entidade) {
        if (Entidade.Data_Integracao_Pagamento) {
            return true;
        }
        else {
            return false;
        }
    };
    C_ContPlan.prototype.HabilitaCamposPagamento = function (habilitar) {
        this.txtValorMensalidade.Enabled = false;
        this.txtPeriodo_Vigencia.Enabled = false;
        if (this.txtPet)
            this.txtPet.TextBoxAnimal.Disabled = !habilitar;
        if (this.txtPet)
            this.txtPet.TextBoxProprietario.Disabled = !habilitar;
        if (this.cboPlano)
            this.cboPlano.Enabled = habilitar;
        if (this.cboEmpresa)
            this.cboEmpresa.Enabled = habilitar;
        if (this.cboScore)
            this.cboScore.Enabled = habilitar;
        if (this.txtProfissional_Responsavel)
            this.txtProfissional_Responsavel.Enabled = habilitar;
        if (this.txtDataTriagem)
            this.txtDataTriagem.Enabled = habilitar;
        if (this.txtTriagemProcura)
            this.txtTriagemProcura.Enabled = habilitar;
        if (this.cboTipoCobranca)
            this.cboTipoCobranca.Enabled = habilitar;
    };
    C_ContPlan.prototype.AtualizarStatusContrato = function (entity) {
        if (!ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            this.lblStatusContrato.Visible = false;
            return;
        }
        this.lblStatusContrato.Visible = true;
        if (!entity)
            return;
        entity.Data_Integracao_Pagamento = ConvertToDate(entity.Data_Integracao_Pagamento);
        entity.Data_Solicitou_Pagamento = ConvertToDate(entity.Data_Solicitou_Pagamento);
        entity.Data_Cancelado = ConvertToDate(entity.Data_Cancelado);
        if (entity.Data_Cancelado) {
            this.lblStatusContrato.Text = "Contrato Cancelado - Data do Cancelamento: " + entity.Data_Cancelado.FormataData();
            if (CNum(entity.Valor_Multa) > 0) {
                this.lblStatusContrato.Text += " - Cobrada multa no valor de R$" + entity.Valor_Multa.Format(2);
            }
            if (CNum(entity.Valor_Devolvido) > 0) {
                this.lblStatusContrato.Text += " - Reembolsado o valor de R$" + entity.Valor_Devolvido.Format(2);
            }
        }
        else if (entity.Data_Integracao_Pagamento) {
            if (entity.Tipo_Cobranca == 1 /* enMensal */) {
                this.lblStatusContrato.Text = "Mensalidade paga - Último pagamento: " + entity.Data_Integracao_Pagamento.FormataData();
            }
            else {
                this.lblStatusContrato.Text = "Contrato pago - Data do pagamento: " + entity.Data_Integracao_Pagamento.FormataData();
            }
        }
        else if (entity.Data_Solicitou_Pagamento) {
            this.lblStatusContrato.Text = "Pagamento solicitado";
        }
        else {
            this.lblStatusContrato.Text = "Pendente de pagamento";
        }
    };
    C_ContPlan.prototype.OnPesquisouPet = function (s, e) {
        try {
            if (!this.EntityTela)
                return;
            var msg = [];
            if (this.EntityTela.Codigo && this.EntityTela.Codigo > 0)
                return;
            var parametros = {
                codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetContratoAtivoAnimal", parametros);
            if (retorno) {
                var contrato = retorno.Contrato;
                if (contrato) {
                    MostrarMensagem("Este animal já tem um contrato ativo");
                    this.PreencherEntidade("" + contrato.Codigo);
                }
                else if (retorno.Animal) {
                    var pet = retorno.Animal;
                    //if (String.IsNullOrWhiteSpace(pet.Chip)) {
                    //    msg.push("Este animal não tem um chip informado em seu cadastro");
                    //}
                    if (!pet.Data_Nascimento) {
                        msg.push("Este animal não tem um data de nascimento informado em seu cadastro");
                    }
                    debugger;
                    if (msg.length > 0) {
                        MostrarAlerta(msg.join("<br />"));
                        this.EntityTela.Animal = 0;
                        this.txtPet.TextBoxAnimal.Focus();
                        this.GetScope().$applyAsync();
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ContPlan.prototype.OnFechouModalPagamento = function (s, e) {
        this.OnClickAtualizarStatus();
    };
    C_ContPlan.prototype.AtualizarDadosTela = function () {
        if (!this.EntityTela)
            return;
        var codigo = this.EntityTela.Codigo;
        //Recarrega a tela
        if (codigo) {
            this.PreencherEntidade("" + codigo);
        }
    };
    return C_ContPlan;
}(MouraPageCadastroAngular));
var c_ContPlan = new C_ContPlan();
//# sourceMappingURL=C_ContPlan.js.map