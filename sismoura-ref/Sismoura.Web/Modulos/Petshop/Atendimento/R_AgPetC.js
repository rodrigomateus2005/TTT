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
var R_AgPetC = /** @class */ (function (_super) {
    __extends(R_AgPetC, _super);
    function R_AgPetC() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NOVO_ATENDIMENTO = "novoAtendimento";
        return _this;
    }
    Object.defineProperty(R_AgPetC.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "Grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "txtData", {
        get: function () {
            return window["txtData_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "dlgMotivoExclusao", {
        get: function () {
            return window['dlgMotivoExclusao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "chkProfPreferencial", {
        get: function () {
            return window['chkProfPreferencial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "txtMotivoExclusao", {
        get: function () {
            return window['txtMotivoExclusao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "txtServico", {
        //Comentar_Atualizacao_Microchip
        get: function () {
            return window['txtServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnConfirmarExclusao", {
        //FIM
        get: function () {
            return window['btnConfirmarExclusao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnCancelarExclusao", {
        get: function () {
            return window['btnCancelarExclusao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "dlgMotivoCancelamento", {
        get: function () {
            return window['dlgMotivoCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "dlgMotivoReagendamento", {
        get: function () {
            return window['dlgMotivoReagendamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "txtMotivoCancelamento", {
        get: function () {
            return window['txtMotivoCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnConfirmarCancelamento", {
        get: function () {
            return window['btnConfirmarCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnCancelarCancelamento", {
        get: function () {
            return window['btnCancelarCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "txtProfissional", {
        get: function () {
            return window["txtProfissional_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "cboTipoProfissional", {
        get: function () {
            return window['cboTipoProfissional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "cboMotivoCancelamento", {
        get: function () {
            return window['cboMotivoCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "cboMotivoReagendamento", {
        get: function () {
            return window['cboMotivoReagendamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "accFiltro", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnRecolher", {
        get: function () {
            return window['btnRecolher_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnExpandir", {
        get: function () {
            return window['btnExpandir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnExcluir", {
        get: function () {
            return window['btnExcluir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnCancelamento", {
        get: function () {
            return window['btnCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnEncaixe", {
        get: function () {
            return window['btnEncaixe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnCheckin", {
        get: function () {
            return window['btnCheckin_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnReagendar", {
        get: function () {
            return window['btnReagendar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnConfirmarReagendamento", {
        get: function () {
            return window['btnConfirmarReagendamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnCancelarReagendamento", {
        get: function () {
            return window['btnCancelarReagendamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnFecharHistorico", {
        get: function () {
            return window['btnFecharHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "grdHistorico", {
        get: function () {
            return window['grdHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "lstHistAtendimentos", {
        get: function () {
            return window['lstHistAtendimentos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "lblHistAtendimento", {
        get: function () {
            return window['lblHistAtendimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "lblHistProprietario", {
        get: function () {
            return window['lblHistProprietario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "lblHistTotal", {
        get: function () {
            return window['lblHistTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "lblPreferencial", {
        get: function () {
            return $('#lblPreferencial')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "lblPreferencialCor", {
        get: function () {
            return $('#lblPreferencialCor')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "lblClienteFaltou", {
        get: function () {
            return $('#lblClienteFaltou')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "lblClienteFaltouCor", {
        get: function () {
            return $('#lblClienteFaltouCor')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "lblHistCadastrado", {
        get: function () {
            return window['lblHistCadastrado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "dlgHistorico", {
        get: function () {
            return window['dlgHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnCadastroAtividade", {
        get: function () {
            return window['btnCadastroAtividade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnAvaliacao", {
        get: function () {
            return window['btnAvaliacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnListaEspera", {
        //Lista Espera
        get: function () {
            return window['btnListaEspera_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "dlgListaEspera", {
        get: function () {
            return window['dlgListaEspera_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "grdServicosEspera", {
        get: function () {
            return window['grdServicosEspera_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "Servicos", {
        get: function () {
            return this.GetScope()["Servicos"];
        },
        set: function (value) {
            this.GetScope()["Servicos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "txtPetEspera", {
        get: function () {
            return window['txtPetEspera_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "txtServicoEspera", {
        get: function () {
            return window['txtServicoEspera_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "cboEmpresaEspera", {
        get: function () {
            return window['cboEmpresaEspera_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "txtProfissionalEspera", {
        get: function () {
            return window['txtProfissionalEspera_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "txtPeriodoEspera", {
        get: function () {
            return window['txtPeriodoEspera_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "chkHorarioEspera", {
        get: function () {
            return window['chkHorarioEspera_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "txtHoraInicioEspera", {
        get: function () {
            return window['txtHoraInicioEspera_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "txtHoraFimEspera", {
        get: function () {
            return window['txtHoraFimEspera_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnConfirmarEspera", {
        get: function () {
            return window['btnConfirmarEspera_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnCancelarEspera", {
        get: function () {
            return window['btnCancelarEspera_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "dlgVerificarClienteListaEspera", {
        get: function () {
            return window['dlgVerificarClienteListaEspera_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "lblTotalListaEsperaResultado", {
        get: function () {
            return window['lblTotalListaEsperaResultado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "lblCodProprietarioLista", {
        get: function () {
            return window['lblCodProprietarioLista_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "lblProprietarioLista", {
        get: function () {
            return window['lblProprietarioLista_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "lblTelefoneLista", {
        get: function () {
            return window['lblTelefoneLista_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "lblCodAnimalLista", {
        get: function () {
            return window['lblCodAnimalLista_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "lblAnimalLista", {
        get: function () {
            return window['lblAnimalLista_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "lblData", {
        get: function () {
            return window['lblData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnFinalizarAtendimentoLista", {
        get: function () {
            return window['btnFinalizarAtendimentoLista_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnProximoLista", {
        get: function () {
            return window['btnProximoLista_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnMenos", {
        get: function () {
            return window['btnMenos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "btnMais", {
        get: function () {
            return window['btnMais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "agpData", {
        get: function () {
            return window['agpData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgPetC.prototype, "accFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_AgPetC.prototype.OnClickBtnMenos = function (s, e) {
        try {
            e.processOnServer = false;
            this.txtData.Date = this.txtData.Date.addDays(-1);
            this.lblData.Text = "Data: " + this.txtData.Date.FormataData() + " (" + this.retornarDiaSemana(this.txtData.Date.getDay()) + ")";
            this.GerarGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnClickBtnMais = function (s, e) {
        try {
            e.processOnServer = false;
            this.txtData.Date = this.txtData.Date.addDays(1);
            this.lblData.Text = "Data: " + this.txtData.Date.FormataData() + " (" + this.retornarDiaSemana(this.txtData.Date.getDay()) + ")";
            this.GerarGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.LimparCampos = function () {
        var _this = this;
        _super.prototype.LimparCampos.call(this);
        try {
            this.agpData.Visible = false;
            this.txtData.Date = new Date();
            this.txtProfissional.Limpar();
            //this.cboTipoProfissional.LimparSelecao();
            this.ConfigurarGrade();
            this.Grid.PreencherGrid([]);
            //this.lstEmpresa.LimparSelecao();
            if (ValoresSismoura && ValoresSismoura.EmpresaPadraoUsuario > 0) {
                this.lstEmpresa.SelecionarEmpresaPadraoUsuario;
            }
            setTimeout(function () {
                if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus && _this.cboTipoProfissional.Combo.GetItemCount() > 1) {
                    _this.cboTipoProfissional.SetValue(2); //DEFAULT CENTRO DE ESTÉTICA (PETZ).
                    _this.verificarAgendamento(2);
                }
            }, 700);
            this.codProfissional = 0;
            this.codEmpresa = 0;
            this.LimparCamposEspera();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.LimparCamposEspera = function () {
        this.txtPeriodoEspera.IniciarDataAtual();
        if (this.txtPetEspera) {
            this.txtPetEspera.Limpar();
        }
        this.txtServicoEspera.Limpar();
        this.cboEmpresaEspera.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.txtProfissionalEspera.Limpar();
        this.chkHorarioEspera.Checked = false;
        this.txtHoraInicioEspera.textBoxHorario.SetText("");
        this.txtHoraInicioEspera.Visible = false;
        this.txtHoraFimEspera.textBoxHorario.SetText("");
        this.txtHoraFimEspera.Visible = false;
        this.Servicos = [];
        this.grdServicosEspera.Grid.PreencherGrid([]);
        this.listaEspera = [];
        this.lblTotalListaEsperaResultado.Text = "";
        this.lblCodProprietarioLista.Text = "";
        this.lblProprietarioLista.Text = "";
        this.lblTelefoneLista.Text = "";
        this.lblCodAnimalLista.Text = "";
        this.lblAnimalLista.Text = "";
        this.btnProximoLista.Text = "Próximo";
    };
    R_AgPetC.prototype.ConfigurarGrade = function () {
        this.Grid.GroupBy("Fantasia");
        this.Grid.FixarColuna("Nome_Profissional", true);
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus && this.cboTipoProfissional.GetValue() == 1) {
            this.Grid.FixarColuna("Sala", true);
        }
        var opt = this.Grid.Grid.option("paging");
        opt.pageSize = 50;
        this.Grid.Grid.option("paging", opt);
        this.Grid.FuncaoGroup("Fantasia", this.FuncaoSort, this);
        this.Grid.FuncaoCustomText("Fantasia", this.FuncaoCustomText, this);
        //this.Grid.OrderBy("Distancia_Empresa", "asc");
    };
    R_AgPetC.prototype.FuncaoSort = function (data) {
        var retorno;
        if (this.txtPet.TextBoxProprietario.GetText().CNum() > 0) {
            retorno = "##" + Right(new Array(20).join("0") + data.Distancia_Empresa, 20) + "|" + data.Fantasia;
        }
        else {
            retorno = "|" + data.Fantasia;
        }
        return retorno;
    };
    R_AgPetC.prototype.FuncaoCustomText = function (data) {
        var valor = data.valueText;
        if (!String.IsNullOrWhiteSpace(valor)) {
            return ("" + valor).split("|")[1];
        }
        else {
            return "";
        }
    };
    R_AgPetC.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.btnExcluir.Visible = !ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus;
        this.btnCancelamento.Visible = ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus;
        this.LimparCampos();
    };
    R_AgPetC.prototype.OnMotivoSelectedItemChanged = function () {
        var parametro = {
            codMotivo: this.cboMotivoCancelamento.GetValue()
        };
        var exibirObservacao = this.ExecutarFuncaoServerSideSynch("ExibirObservacao", parametro);
        if (exibirObservacao == true) {
            this.txtMotivoCancelamento.Visible = true;
        }
        else {
            this.txtMotivoCancelamento.Visible = false;
            this.txtMotivoCancelamento.SetText("");
        }
    };
    R_AgPetC.prototype.OnchkProfPreferencialCheckChanged = function () {
        try {
            var parametros = {
                codAtendimento: this.lstHistAtendimentos.GetValue().CNum(),
                preferencial: this.chkProfPreferencial.Checked
            };
            this.ExecutarFuncaoServerSideSynch("AtualizarAgendamentoPreferencial", parametros);
            this.PreencherGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnSelectedItemChanged = function () {
    };
    R_AgPetC.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.chkProfPreferencial)
            adicionarEventoMoura(this.chkProfPreferencial.CheckChanged, this.OnchkProfPreferencialCheckChanged, this);
        if (this.cboTipoProfissional)
            adicionarEventoMoura(this.cboTipoProfissional.SelectedItemChanged, this.OnSelectedItemChanged, this);
        if (this.cboMotivoCancelamento)
            adicionarEventoMoura(this.cboMotivoCancelamento.SelectedItemChanged, this.OnMotivoSelectedItemChanged, this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.CellPrepared, this.OnGridCellPrepared, this);
            adicionarEventoMoura(this.Grid.ClickBotaoLinha, this.OnGridClicouBotao, this);
            //Exibir linhas
            if (this.Grid.Grid) {
                this.Grid.Grid.option("showRowLines", true);
            }
            if (this.grdServicosEspera)
                adicionarEventoMoura(this.grdServicosEspera.AdicionandoItem, this.OnClickIncluirServicoEspera, this);
        }
        if (this.grdHistorico)
            adicionarEventoMoura(this.grdHistorico.ClickBotaoLinha, this.OnGridHistoricoClicouBotao, this);
        if (this.btnExpandir) {
            adicionarEventoMoura(this.btnExpandir.Click, this.OnClickBtnExpandir, this);
        }
        if (this.btnExcluir) {
            adicionarEventoMoura(this.btnExcluir.Click, this.OnClickBotaoExcluir, this);
        }
        if (this.btnCancelamento)
            adicionarEventoMoura(this.btnCancelamento.Click, this.OnClickBotaoCancelamento, this);
        if (this.btnRecolher) {
            adicionarEventoMoura(this.btnRecolher.Click, this.OnClickBtnRecolher, this);
        }
        if (this.btnMenos) {
            adicionarEventoMoura(this.btnMenos.Click, this.OnClickBtnMenos, this);
        }
        if (this.btnMais) {
            adicionarEventoMoura(this.btnMais.Click, this.OnClickBtnMais, this);
        }
        if (this.btnRecolher) {
            adicionarEventoMoura(this.btnRecolher.Click, this.OnClickBtnRecolher, this);
        }
        if (this.btnReagendar)
            adicionarEventoMoura(this.btnReagendar.Click, this.OnClickBtnReagendar, this);
        if (this.btnCancelarReagendamento)
            adicionarEventoMoura(this.btnCancelarReagendamento.Click, this.OnClickbtnCancelarReagendamento, this);
        if (this.btnConfirmarReagendamento)
            adicionarEventoMoura(this.btnConfirmarReagendamento.Click, this.OnClickbtnConfirmarReagendamento, this);
        if (this.txtPet.TextBoxProprietario) {
            adicionarEventoMoura(this.txtPet.TextBoxProprietario.Procurou, this.OnPesquisouCliente, this);
        }
        if (this.lstEmpresa) {
            adicionarEventoMoura(this.lstEmpresa.AntesAbrirProcuraEmpresa, this.OnAntesAbrirPesquisaEmpresa, this);
        }
        if (this.dlgTelaModal) {
            adicionarEventoMoura(this.dlgTelaModal.Retornou, this.OnRetornouModalAtendimento, this);
        }
        if (this.btnEncaixe)
            adicionarEventoMoura(this.btnEncaixe.Click, this.OnClickBtnEncaixe, this);
        if (this.btnCheckin)
            adicionarEventoMoura(this.btnCheckin.Click, this.OnClickbtnCheckin, this);
        if (this.btnAvaliacao)
            adicionarEventoMoura(this.btnAvaliacao.Click, this.OnClickbtnAvaliacao, this);
        if (this.dlgHistorico)
            adicionarEventoMoura(this.dlgHistorico.Fechou, this.OnFechouHistorico, this);
        if (this.btnFecharHistorico) {
            adicionarEventoMoura(this.btnFecharHistorico.Click, this.OnClickBotaoFecharHistorico, this);
        }
        if (this.btnCadastroAtividade) {
            adicionarEventoMoura(this.btnCadastroAtividade.Click, this.OnClickBotaoCadastroAtividade, this);
        }
        if (this.btnConfirmarExclusao) {
            adicionarEventoMoura(this.btnConfirmarExclusao.Click, this.OnClickConfirmarExclusao, this);
        }
        if (this.btnConfirmarCancelamento)
            adicionarEventoMoura(this.btnConfirmarCancelamento.Click, this.OnClickConfirmarCancelamento, this);
        if (this.btnCancelarExclusao) {
            adicionarEventoMoura(this.btnCancelarExclusao.Click, this.OnClickCancelarExclusao, this);
        }
        if (this.btnCancelarCancelamento)
            adicionarEventoMoura(this.btnCancelarCancelamento.Click, this.OnClickCancelarCancelamento, this);
        //Lista Espera
        if (this.txtProfissionalEspera) {
            adicionarEventoMoura(this.txtProfissionalEspera.AntesAbrirProcura, this.OnAntesAbrirProcuraProfissionalEspera, this);
            adicionarEventoMoura(this.txtProfissionalEspera.Procurou, this.OnTxtProfissionalEsperaProcurou, this);
        }
        if (this.chkHorarioEspera)
            adicionarEventoMoura(this.chkHorarioEspera.CheckChanged, this.OnCheckHorarioEspera, this);
        if (this.btnListaEspera)
            adicionarEventoMoura(this.btnListaEspera.Click, this.OnClickListaEspera, this);
        if (this.btnConfirmarEspera)
            adicionarEventoMoura(this.btnConfirmarEspera.Click, this.OnClickConfirmarEspera, this);
        if (this.btnCancelarEspera)
            adicionarEventoMoura(this.btnCancelarEspera.Click, this.OnClickCancelarEspera, this);
        if (this.btnFinalizarAtendimentoLista)
            adicionarEventoMoura(this.btnFinalizarAtendimentoLista.Click, this.OnClickFinalizarAtendimentoLista, this);
        if (this.btnProximoLista)
            adicionarEventoMoura(this.btnProximoLista.Click, this.OnClickProximoLista, this);
        if (this.cboTipoProfissional)
            adicionarEventoMoura(this.cboTipoProfissional.SelectedItemChanged, this.cboTipoProfissionalSelectedItemChanged, this);
    };
    R_AgPetC.prototype.verificarAgendamento = function (tipo) {
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            if (tipo == 1) {
                if (this.lblPreferencial)
                    this.lblPreferencial.hidden = false;
                if (this.lblPreferencialCor)
                    this.lblPreferencialCor.hidden = false;
                if (this.lblClienteFaltou)
                    this.lblClienteFaltou.hidden = false;
                if (this.lblClienteFaltouCor)
                    this.lblClienteFaltouCor.hidden = false;
                if (this.chkProfPreferencial)
                    this.chkProfPreferencial.Visible = true;
            }
            else {
                if (this.lblPreferencial)
                    this.lblPreferencial.hidden = true;
                if (this.lblPreferencialCor)
                    this.lblPreferencialCor.hidden = true;
                if (this.lblClienteFaltou)
                    this.lblClienteFaltou.hidden = true;
                if (this.lblClienteFaltouCor)
                    this.lblClienteFaltouCor.hidden = true;
                if (this.chkProfPreferencial)
                    this.chkProfPreferencial.Visible = false;
            }
        }
    };
    R_AgPetC.prototype.cboTipoProfissionalSelectedItemChanged = function () {
        this.verificarAgendamento(this.cboTipoProfissional.GetValue());
    };
    R_AgPetC.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!this.ValidarCampos()) {
            return;
        }
        this.GerarGrade();
        this.lblData.Text = "Data: " + this.txtData.Date.FormataData() + " (" + this.retornarDiaSemana(this.txtData.Date.getDay()) + ")";
        this.agpData.Visible = true;
    };
    R_AgPetC.prototype.retornarDiaSemana = function (dia) {
        if (dia == 0) {
            return "Domingo";
        }
        else if (dia == 1) {
            return "Segunda-Feira";
        }
        else if (dia == 2) {
            return "Terça-Feira";
        }
        else if (dia == 3) {
            return "Quarta-Feira";
        }
        else if (dia == 4) {
            return "Quinta-Feira";
        }
        else if (dia == 5) {
            return "Sexta-Feira";
        }
        else if (dia == 6) {
            return "Sábado";
        }
        return "";
    };
    R_AgPetC.prototype.GerarGrade = function () {
        var _this = this;
        try {
            var dt;
            dt = this.txtData.Date;
            dt.setHours(12);
            var parametros = {
                data: dt,
                tipoProfissional: ("" + this.cboTipoProfissional.GetValue()).CNum(),
                codProfissional: this.txtProfissional.GetText().CNum(),
                empresas: this.lstEmpresa.GetValuesRelacaoNumber(),
                codCliente: this.txtPet.TextBoxProprietario.GetText().CNum()
            };
            this.ExecutarFuncaoServerSideAsynch("RelacaoAgenda", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (_this.accFiltro) {
                        _this.accFiltro.SetExpanded(false);
                    }
                    //Comentar_Atualizacao_Microchip
                    //var parametrosMedico: any = {
                    //    proprietario: this.txtPet.TextBoxProprietario.GetText().CNum(),
                    //    animal: this.txtPet.TextBoxAnimal.GetText().CNum(),
                    //    servico: this.txtServico.GetText().CNum(),
                    //    data: this.txtData.TextBoxCalendario.GetDate()
                    //}
                    //this.codMedicoPreferencial = 0;
                    //const medico = this.ExecutarFuncaoServerSideSynch("MedicoPreferencialServico", parametrosMedico);
                    //if (medico && medico > 0) {
                    //    this.codMedicoPreferencial = medico;
                    //}
                    //FIM
                    _this.Grid.Colunas = retorno.ColunasGrade;
                    _this.Grid.TotalizacoesColunas = retorno.Totalizacoes;
                    _this.Grid.AlturaGrade = 117 + (17 * _this.lstEmpresa.GetValues().length) + (35 * retorno.Dados.length);
                    if (_this.Grid.AlturaGrade > 300) {
                        _this.Grid.AlturaGrade = 300;
                    }
                    _this.Grid.iniciarGrid();
                    _this.Grid.PreencherGrid(retorno.Dados);
                    _this.ConfigurarGrade();
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
            abrirEspera("");
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    R_AgPetC.prototype.ValidarCampos = function () {
        if (this.txtData.Date == null || this.txtData.Date == undefined) {
            MostrarAlerta("Informe a data!");
            return false;
        }
        if (("" + this.cboTipoProfissional.GetValue()).CNum() <= 0) {
            MostrarAlerta("Informe o tipo de profissional");
            return false;
        }
        return true;
    };
    R_AgPetC.prototype.OnGridCellPrepared = function (s, e) {
        try {
            var name = "";
            if (e.column && e.column) {
                name = e.column.name;
            }
            if (e.rowType == "data" && e.data) {
                if (name.substring(0, 18).toLowerCase() == "botaotemplate_hora") {
                    var cor = e.data[replaceAllNoCase(name, "botaotemplate_", "")];
                    var dadosAtendimento = cor.split("|")[3];
                    cor = cor.split("|")[0];
                    if (!String.IsNullOrWhiteSpace(cor)) {
                        e.cellElement.css("background-color", cor);
                        e.cellElement.css("color", cor);
                        e.cellElement.addClass("botaoFull");
                        if (cor.toLowerCase() != "green")
                            $(e.cellElement).find("input").attr("title", dadosAtendimento);
                    }
                }
                //Comentar_Atualizacao_Microchip
                //}else if (this.codMedicoPreferencial == e.data["Codigo_Profissional"]) {
                //    if (!String.IsNullOrWhiteSpace(e.cellElement[0].innerText)) {
                //       e.cellElement.css("background-color", "blue");
                //        e.cellElement.css("color", "white");
                //    }
                //}
                //FIM          
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnGridClicouBotao = function (s, e) {
        var _this = this;
        try {
            if (String.IsNullOrWhiteSpace(e.commandName)) {
                return;
            }
            this.codProfissional = ("" + e.data['Codigo_Profissional']).CNum();
            this.codEmpresa = ("" + e.data['Codigo_Empresa']).CNum();
            var dataAtendimento_1 = ("" + e.data['Data_Atendimento']);
            var Codigo_Sala_1 = ("" + e.data['CodigoSala']).CNum();
            var Sala_Descricao_1 = ("" + e.data['Sala']);
            if (e.commandName.substring(0, 5).toLowerCase() == "hora-") {
                var valorCampo = "" + e.data[e.commandName];
                var atendimentos = valorCampo.split("|")[1];
                var disponivel = valorCampo.split("|")[2].CNum();
                if (!String.IsNullOrWhiteSpace(atendimentos)) {
                    var atendimentosArray = atendimentos.split(",");
                    this.lstHistAtendimentos.RemoverTodosItens();
                    atendimentosArray.forEach(function (q) {
                        var param = {
                            codAtendimento: q.CNum(),
                            tipoProfissional: _this.cboTipoProfissional.GetValue()
                        };
                        var historico = _this.ExecutarFuncaoServerSideSynch("HistoricoAnimal", param);
                        if (historico)
                            if (historico.IsAppAgendamento) {
                                if (historico.FormaPagamentoApp == 2 /* LOJA */.valueOf()) {
                                    _this.lstHistAtendimentos.AdicionarItem(q + " - " + historico.Animal + " - " + historico.Hora_Servico + " - App (" + historico.Status_Atendimento_Zanthus + ") - Pagamento em Loja", q.CNum().toString());
                                }
                                else {
                                    _this.lstHistAtendimentos.AdicionarItem(q + " - " + historico.Animal + " - " + historico.Hora_Servico + " - App (" + historico.Status_Atendimento_Zanthus + ") - Pagamento Cart\u00E3ode Cr\u00E9dito", q.CNum().toString());
                                }
                            }
                            else {
                                _this.lstHistAtendimentos.AdicionarItem(q + " - " + historico.Animal + " - " + historico.Hora_Servico + " - " + historico.Pago, q.CNum().toString());
                            }
                    });
                    if (this.lstHistAtendimentos)
                        adicionarEventoJQuery(this.lstHistAtendimentos.RadioButtonList, "change", this.OnLstHistAtendimentoChange, this);
                    this.lstHistAtendimentos.LimparSelecao();
                    this.lstHistAtendimentos.SetValue(atendimentosArray[0]);
                    this.CarregarHistoricoAtendimento(atendimentosArray[0].CNum(), false);
                }
                else if (disponivel) {
                    if (this.cboTipoProfissional.GetValue() == 1) {
                        MsgBoxJS("Preferência por profissional?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                            var resultado = false;
                            if (result.Resultado == MsgBoxResult.Yes) {
                                resultado = true;
                            }
                            _this.AbrirNovoAtendimento(dataAtendimento_1, replaceAllNoCase(e.commandName.split("-")[1], "_", ":"), _this.codProfissional, _this.codEmpresa, false, resultado, Codigo_Sala_1, Sala_Descricao_1);
                        }, null);
                    }
                    else {
                        this.AbrirNovoAtendimento(dataAtendimento_1, replaceAllNoCase(e.commandName.split("-")[1], "_", ":"), this.codProfissional, this.codEmpresa, false, false, 0, '');
                    }
                }
                else {
                    MostrarAlerta("Este horário não está disponível para agendamento");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnClickBtnExpandir = function (s, e) {
        try {
            e.processOnServer = false;
            this.Grid.ExpandAll(0);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnClickBtnRecolher = function (s, e) {
        try {
            e.processOnServer = false;
            this.Grid.CollapseAll();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnClickbtnCancelarReagendamento = function (s, e) {
        e.processOnServer = false;
        this.cboMotivoReagendamento.LimparSelecao();
        this.dlgMotivoReagendamento.Hide();
    };
    R_AgPetC.prototype.OnClickBtnReagendar = function (s, e) {
        e.processOnServer = false;
        var param = {
            codAtendimento: this.lstHistAtendimentos.GetValue().CNum()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("possuiReagendamento", param);
        if (retorno) {
            MostrarAlerta("Não é possível reagendar, pois já foi realizado um reagendamento para este atendimento!");
            return;
        }
        this.dlgMotivoReagendamento.Show();
    };
    R_AgPetC.prototype.OnClickbtnConfirmarReagendamento = function (s, e) {
        e.processOnServer = false;
        if (!this.cboMotivoReagendamento.GetValue() || this.cboMotivoReagendamento.GetValue() == null || this.cboMotivoReagendamento.GetValue() == 0) {
            MostrarAlerta("Informe o motivo do reagendamento!");
            this.cboMotivoReagendamento.Focus();
            return;
        }
        this.reagendamento(this.cboMotivoReagendamento.GetValue());
        this.dlgMotivoReagendamento.Hide();
        this.cboMotivoReagendamento.LimparSelecao();
    };
    R_AgPetC.prototype.reagendamento = function (motivo) {
        try {
            var param;
            param = {
                codAtendimento: this.lstHistAtendimentos.GetValue().CNum(),
                tipoProfissional: this.cboTipoProfissional.GetValue()
            };
            var codAnimal;
            var codCheckin;
            var codConvenio;
            var local = this.cboTipoProfissional.GetText();
            var retorno = this.ExecutarFuncaoServerSideSynch("HistoricoAnimal", param);
            if (retorno && retorno.Dados) {
                codAnimal = retorno.Dados[0].Codigo_Animal;
            }
            this.AbrirNovoAtendimento("", "", 0, this.codEmpresa, false, false, 0, '', codAnimal, motivo, this.lstHistAtendimentos.GetValue().CNum());
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.AbrirNovoAtendimento = function (dataAtendimento, horaAtendimento, codProfissional, codEmpresa, isEncaixe, isAgendamentoPreferencial, Codigo_Sala, Sala_Descricao, codAnimal, motivoReagendamento, atendimentoReagendamento) {
        var parametros = [];
        parametros.push("Data_Atendimento=" + dataAtendimento);
        parametros.push("Horario_Atendimento=" + horaAtendimento);
        parametros.push("CodProfissional=" + codProfissional);
        parametros.push("codEmpresa=" + codEmpresa);
        parametros.push("Codigo_Sala=" + Codigo_Sala);
        parametros.push("Sala_Descricao=" + Sala_Descricao);
        if (this.txtPet.TextBoxAnimal.GetText().CNum() > 0) {
            parametros.push("codAnimal=" + this.txtPet.TextBoxAnimal.GetText().CNum());
            parametros.push("isAgendaConsolidada=S");
        }
        else if (codAnimal > 0) {
            parametros.push("codAnimal=" + codAnimal);
            parametros.push("Motivo_Reagendamento=" + motivoReagendamento);
            parametros.push("Atendimento_Reagendamento=" + atendimentoReagendamento);
        }
        else if (this.txtPet.TextBoxProprietario.GetText().CNum() > 0) {
            parametros.push("codProprietario=" + this.txtPet.TextBoxProprietario.GetText().CNum());
            parametros.push("isAgendaConsolidada=S");
        }
        else {
            parametros.push("isAgendaConsolidada=S");
        }
        if (isEncaixe)
            parametros.push("isEncaixe=S");
        if (isAgendamentoPreferencial)
            parametros.push("isAgendamentoPreferencial=S");
        this.dlgTelaModal.AbrirTelaModal(formataURLRelativa(URLTela.CadastroDeAtendimento), parametros, this.NOVO_ATENDIMENTO);
    };
    R_AgPetC.prototype.AbrirAtendimento = function (codAtendimento) {
        var parametros = [];
        parametros.push("codigo=" + codAtendimento);
        if (this.codProfissional > 0) {
            parametros.push("codProfissional=" + this.codProfissional);
        }
        parametros.push("isAgendaConsolidada=S");
        this.dlgTelaModal.AbrirTelaModal(formataURLRelativa(URLTela.CadastroDeAtendimento), parametros, "", true);
    };
    R_AgPetC.prototype.OnPesquisouCliente = function (s, e) {
        this.ConfigurarGrade();
        this.Grid.PreencherGrid([]);
    };
    R_AgPetC.prototype.OnAntesAbrirPesquisaEmpresa = function (s, e) {
        try {
            if (this.txtPet.TextBoxProprietario.GetText().CNum() > 0) {
                var cliente = this.ObterDadosPessoa(this.txtPet.TextBoxProprietario.GetText().CNum());
                if (cliente) {
                    e.EnderecoPesquisa = cliente.Endereco + " " + cliente.Cidade_Nome + " " + cliente.Cidade_Estado;
                    e.CepPesquisa = cliente.CEP;
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnRetornouModalAtendimento = function (s, e) {
        try {
            if (e.IDComponenteProcura == this.NOVO_ATENDIMENTO) {
                if (e.ParametrosObject && e.ParametrosObject.codigo) {
                    var param = {
                        codAtendimento: e.ParametrosObject.codigo.CNum(),
                        tipoProfissional: this.cboTipoProfissional.GetValue()
                    };
                    var historico = this.ExecutarFuncaoServerSideSynch("HistoricoAnimal", param);
                    if (!historico)
                        return;
                    this.lstHistAtendimentos.AdicionarItem(e.ParametrosObject.codigo + " - " + historico.Animal + " - " + historico.Hora_Servico, e.ParametrosObject.codigo.CNum().toString());
                    if (this.lstHistAtendimentos)
                        adicionarEventoJQuery(this.lstHistAtendimentos.RadioButtonList, "change", this.OnLstHistAtendimentoChange, this);
                    this.lstHistAtendimentos.LimparSelecao();
                    this.lstHistAtendimentos.SetValue(e.ParametrosObject.codigo);
                    this.CarregarHistoricoAtendimento(e.ParametrosObject.codigo, false);
                }
            }
            this.PreencherGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.CarregarHistoricoAtendimento = function (codAtendimento, isProximoAtendimento) {
        try {
            if (codAtendimento <= 0) {
                MostrarAlerta("Informe um atendimento para consultar");
                return;
            }
            var parametros;
            parametros = {
                codAtendimento: codAtendimento,
                tipoProfissional: this.cboTipoProfissional.GetValue()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("HistoricoAnimal", parametros);
            if (!retorno.Dados || retorno.Dados.length <= 0) {
                MostrarAlerta("Nenhum atendimento encontrado!");
                return;
            }
            this.grdHistorico.PreencherGrid([]);
            this.grdHistorico.PreencherGrid(retorno.Dados);
            if (retorno.Dados) {
                var total = retorno.Dados.Sum("Total");
                this.lblHistTotal.Text = total.Format(2);
            }
            else {
                this.lblHistTotal.Text = "";
            }
            this.lblHistAtendimento.Text = "" + codAtendimento;
            if (retorno.Animal) {
                this.lblHistAtendimento.Text += " - " + retorno.Animal;
            }
            if (retorno.Cliente) {
                this.lblHistProprietario.Text = retorno.Cliente;
            }
            else {
                this.lblHistProprietario.Text = "";
            }
            if (retorno.isAgendamentoPreferencial && retorno.isAgendamentoPreferencial == "1") {
                this.chkProfPreferencial.Checked = true;
            }
            else {
                this.chkProfPreferencial.Checked = false;
            }
            if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
                if (retorno.ClienteFaltou && retorno.ClienteFaltou == "1") {
                    this.btnCadastroAtividade.Visible = false;
                    this.btnCancelamento.Visible = false;
                    this.btnEncaixe.Visible = false;
                    this.btnCheckin.Visible = false;
                    this.chkProfPreferencial.Enabled = false;
                    this.btnReagendar.Visible = true;
                }
                else {
                    this.btnCadastroAtividade.Visible = true;
                    this.btnCancelamento.Visible = true;
                    this.btnEncaixe.Visible = true;
                    this.btnCheckin.Visible = true;
                    this.chkProfPreferencial.Enabled = true;
                    this.btnReagendar.Visible = false;
                }
            }
            var texto = "";
            if (!String.IsNullOrWhiteSpace(retorno.Usuario_Cadastro)) {
                texto += retorno.Usuario_Cadastro;
            }
            if (retorno.Data_Cadastro) {
                texto += " - " + ConvertToDate(retorno.Data_Cadastro).FormataDataHora();
            }
            this.lblHistCadastrado.Text = texto;
            var texto = "";
            if (!String.IsNullOrWhiteSpace(retorno.Usuario_Alterou)) {
                texto += retorno.Usuario_Alterou;
            }
            this.lblHistCadastrado.Text = this.lblHistCadastrado.Text + '  ' + texto;
            if (!isProximoAtendimento) {
                this.dlgHistorico.Show();
                if (this.cboTipoProfissional.GetValue() != 4) {
                    this.btnAvaliacao.Visible = false;
                }
                else {
                    this.btnAvaliacao.Visible = true;
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnClickBtnEncaixe = function (s, e) {
        e.processOnServer = false;
        try {
            this.AbrirNovoAtendimento(this.txtData.Date.FormataData(), this.grdHistorico.DataSource[0].Hora_Servico, this.codProfissional, this.codEmpresa, true, false, 0, '');
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnClickbtnAvaliacao = function (s, e) {
        e.processOnServer = false;
        try {
            var codProfissional = 0;
            if (this.grdHistorico.DataSource && this.grdHistorico.DataSource[0].codProfissional) {
                codProfissional = this.grdHistorico.DataSource[0].codProfissional;
            }
            var param = {
                codAtendimento: this.lstHistAtendimentos.GetValue().CNum(),
                tipoProfissional: this.cboTipoProfissional.GetValue()
            };
            var paramTela = [];
            var codAnimal;
            var retorno = this.ExecutarFuncaoServerSideSynch("HistoricoAnimal", param);
            if (retorno && retorno.Dados) {
                codAnimal = retorno.Dados[0].Codigo_Animal;
            }
            var parametros = {
                codAnimal: codAnimal
            };
            var codAvaliacao = this.ExecutarFuncaoServerSideSynch("GetAvaliacaoByAnimal", parametros);
            if (codAvaliacao > 0) {
                paramTela.push("codigo=" + codAvaliacao);
            }
            else {
                paramTela.push("atendimento=" + this.lstHistAtendimentos.GetValue().CNum());
                paramTela.push("profissional=" + codProfissional);
            }
            abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.AvaliacaoComportamental), paramTela);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnClickbtnCheckin = function (s, e) {
        e.processOnServer = false;
        try {
            var parametros = [];
            var param;
            param = {
                codAtendimento: this.lstHistAtendimentos.GetValue().CNum(),
                tipoProfissional: this.cboTipoProfissional.GetValue()
            };
            var codAnimal;
            var codCheckin;
            var codConvenio;
            var local = this.cboTipoProfissional.GetText();
            var retorno = this.ExecutarFuncaoServerSideSynch("HistoricoAnimal", param);
            if (retorno && retorno.Dados) {
                codAnimal = retorno.Dados[0].Codigo_Animal;
                codCheckin = retorno.Dados[0].Codigo_Checkin;
                codConvenio = retorno.Dados[0].Convenio;
            }
            var codAtendimento = this.lstHistAtendimentos.GetValue().CNum();
            var codProfissional = this.codProfissional;
            if (codCheckin > 0) {
                parametros.push("codCheckin=" + codCheckin);
            }
            else {
                if (codAnimal > 0) {
                    parametros.push("codAnimal=" + codAnimal);
                }
                if (codAtendimento > 0) {
                    parametros.push("codAtendimento=" + codAtendimento);
                }
                if (codProfissional > 0) {
                    parametros.push("codProfissional=" + codProfissional);
                }
                if (codConvenio > 0) {
                    parametros.push("codConvenio=" + codConvenio);
                }
                if (!String.IsNullOrWhiteSpace(local)) {
                    parametros.push("local=" + local);
                }
            }
            abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroDeCheckin), parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnGridHistoricoClicouBotao = function (s, e) {
        try {
            var codServicoAtendimento = ("" + e.data['Codigo_Servico_Atendimento']).CNum();
            var concluido = ("" + e.data['Concluido']).toUpperCase();
            var parametros = [];
            if (e.commandName == "btnConcluir") {
                if (concluido.toLowerCase() == "sim") {
                    MostrarAlerta("Serviço já concluído!");
                    return;
                }
                this.ConcluirServico(codServicoAtendimento);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.ConcluirServico = function (codServico) {
        try {
            if (codServico <= 0) {
                MostrarAlerta("Nenhum serviço selecionado!");
                return;
            }
            MsgBoxJS("Deseja realmente concluir o serviço?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouOpcaoConcluir, this), codServico);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnSelecionouOpcaoConcluir = function (e) {
        try {
            if (e.Resultado != MsgBoxResult.Yes) {
                return;
            }
            if (String.IsNullOrWhiteSpace(e.Argument)) {
                return;
            }
            var codServico = e.Argument;
            var parametros = {
                codServicoAtendimento: codServico,
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ConcluirServico", parametros);
            if (String.IsNullOrWhiteSpace(retorno)) {
                MostrarMensagem("Serviço concluído com sucesso");
                this.CarregarHistoricoAtendimento(this.lstHistAtendimentos.GetValue().CNum(), true);
            }
            else {
                MostrarAlerta(retorno);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnFechouHistorico = function (s, e) {
        try {
            if (this.lstHistAtendimentos)
                this.lstHistAtendimentos.RemoverTodosItens();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnLstHistAtendimentoChange = function () {
        try {
            if (this.lstHistAtendimentos)
                if (this.lstHistAtendimentos.GetValue())
                    this.CarregarHistoricoAtendimento(this.lstHistAtendimentos.GetValue().CNum(), true);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnClickBotaoFecharHistorico = function (s, e) {
        try {
            e.processOnServer = false;
            this.dlgHistorico.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnClickBotaoCadastroAtividade = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.lstHistAtendimentos.GetValue().CNum() <= 0) {
                return;
            }
            this.AbrirAtendimento(this.lstHistAtendimentos.GetValue().CNum());
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnClickIncluirServicoEspera = function (s, e) {
        if (this.txtServicoEspera.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o serviço para adicionar");
            e.cancelar = true;
            return;
        }
        var novoItem = e.item;
        novoItem.Nome_Servico = this.txtServicoEspera.GetResultado();
    };
    R_AgPetC.prototype.OnClickCancelarExclusao = function (s, e) {
        e.processOnServer = false;
        this.dlgMotivoExclusao.Hide();
    };
    R_AgPetC.prototype.OnClickCancelarCancelamento = function (s, e) {
        e.processOnServer = false;
        this.dlgMotivoCancelamento.Hide();
    };
    R_AgPetC.prototype.OnClickListaEspera = function (s, e) {
        e.processOnServer = false;
        this.grdServicosEspera.Grid.Refresh();
        this.dlgListaEspera.Show();
        this.txtPetEspera.TextBoxProprietario.Focus();
    };
    R_AgPetC.prototype.OnAntesAbrirProcuraProfissionalEspera = function (s, e) {
        e.Cancelar = false;
        this.txtProfissionalEspera.AddParametro("EmpProf", "" + this.cboEmpresaEspera.GetValue());
    };
    R_AgPetC.prototype.OnTxtProfissionalEsperaProcurou = function (s, e) {
        if (this.txtProfissionalEspera.GetText().CNum() <= 0)
            return;
        var param = {
            codProfissional: this.txtProfissionalEspera.GetText().CNum(),
            codEmpresa: this.cboEmpresaEspera.GetValue()
        };
        if (!this.ExecutarFuncaoServerSideSynch("ValidarProfissionalEmpresa", param)) {
            MostrarAlerta("O Profissional informado não pode realizar nenhum serviço para a empresa do atendimento.Para permitir, abra o Cadastro de Profissional e marque- o na empresa desejada.Logo após realize novamente o procedimento.");
            this.txtProfissionalEspera.Limpar();
            this.txtProfissionalEspera.Focus();
        }
    };
    R_AgPetC.prototype.OnCheckHorarioEspera = function (s, e) {
        if (s.Check) {
            this.txtHoraInicioEspera.Visible = s.Checked;
            this.txtHoraFimEspera.Visible = s.Checked;
        }
    };
    R_AgPetC.prototype.OnClickConfirmarEspera = function (s, e) {
        e.processOnServer = false;
        try {
            var msgValidacao = this.ValidarCamposEspera();
            if (!String.IsNullOrWhiteSpace(msgValidacao)) {
                MostrarAlerta(msgValidacao);
                return;
            }
            var novaEspera_1 = {};
            novaEspera_1.Proprietario = this.txtPetEspera.TextBoxProprietario.GetText().CNum();
            novaEspera_1.Animal = this.txtPetEspera.TextBoxAnimal.GetText().CNum();
            novaEspera_1.Empresa = this.cboEmpresaEspera.GetValue();
            novaEspera_1.Profissional = this.txtProfissionalEspera.GetText().CNum();
            novaEspera_1.Data_Inicio = this.txtPeriodoEspera.textBoxCalendarioInicio.GetDate();
            novaEspera_1.Data_Fim = this.txtPeriodoEspera.textBoxCalendarioFim.GetDate();
            if (this.chkHorarioEspera.Checked) {
                novaEspera_1.Hora_Inicio = this.txtHoraInicioEspera.textBoxHorario.GetText();
                novaEspera_1.Hora_Fim = this.txtHoraFimEspera.textBoxHorario.GetText();
            }
            novaEspera_1.Animais_Lista_Espera_Servico = [];
            this.Servicos.forEach(function (q) {
                var novoServico = {};
                novoServico.Codigo_Servico = q.Codigo_Servico;
                novaEspera_1.Animais_Lista_Espera_Servico.push(novoServico);
            });
            var param = {
                novaEsperaJSON: JSON.stringify(novaEspera_1),
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            if (this.ExecutarFuncaoServerSideSynch("GravarListaEspera", param)) {
                MostrarMensagem("Cliente adicionado na Lista de Espera");
                this.dlgListaEspera.Hide();
                this.LimparCamposEspera();
            }
            else
                MostrarError("Erro ao inserir cliente na Lista de Espera");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.ValidarCamposEspera = function () {
        try {
            if (this.txtPetEspera.TextBoxProprietario.GetText().CNum() <= 0 || this.txtPetEspera.TextBoxAnimal.GetText().CNum() <= 0)
                return "Informe o proprietário e o animal corretamente";
            if (this.cboEmpresaEspera.GetValue() <= 0)
                return "Informe a empresa corretamente";
            if (this.txtPeriodoEspera.textBoxCalendarioInicio.GetDate() < new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()))
                return "Ínicio da espera não pode ser menor do que hoje";
            if (this.txtPeriodoEspera.textBoxCalendarioFim.GetDate() < this.txtPeriodoEspera.textBoxCalendarioInicio.GetDate())
                return "Fim da espera não pode ser maior do que o ínicio";
            if (this.chkHorarioEspera.Checked) {
                var horaInicio = this.txtHoraInicioEspera.textBoxHorario.GetText().split(':')[0].CNum();
                var minInicio = this.txtHoraInicioEspera.textBoxHorario.GetText().split(':')[1].CNum();
                var horaFim = this.txtHoraFimEspera.textBoxHorario.GetText().split(':')[0].CNum();
                var minFim = this.txtHoraFimEspera.textBoxHorario.GetText().split(':')[1].CNum();
                if (this.txtHoraInicioEspera.textBoxHorario.GetDate().setHours(horaInicio, minInicio) >=
                    this.txtHoraFimEspera.textBoxHorario.GetDate().setHours(horaFim, minFim))
                    return "A hora ínicio do período não pode ser maior ou igual que a hora final";
            }
            if (!this.Servicos || this.Servicos.length <= 0)
                return "Informe ao menos um serviço para inserir na Lista de Espera!";
            var param = {
                proprietario: this.txtPetEspera.TextBoxProprietario.GetText().CNum()
            };
            if (this.ExecutarFuncaoServerSideSynch("isProprietarioListaEspera", param))
                return "Proprietário informado já se encontra na Lista de Espera";
            return "";
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnClickCancelarEspera = function (s, e) {
        e.processOnServer = false;
        this.LimparCamposEspera();
        this.dlgListaEspera.Hide();
    };
    R_AgPetC.prototype.OnClickConfirmarExclusao = function (s, e) {
        e.processOnServer = false;
        if (String.IsNullOrWhiteSpace(this.txtMotivoExclusao.GetText())) {
            MostrarAlerta("Informe o motivo da exclusão!");
            this.txtMotivoExclusao.Focus();
            return;
        }
        this.dlgMotivoExclusao.Hide();
        this.respondeuMotivoExclusao = true;
        try {
            if (this.lstHistAtendimentos.GetValue().CNum() <= 0) {
                return;
            }
            var parametros = {
                atendimento: this.lstHistAtendimentos.GetValue().CNum(),
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado,
                motivo: this.txtMotivoExclusao.GetText()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ExcluirAgendamento", parametros);
            MsgBoxJS("Atendimento excluído com sucesso", MsgBoxOptions.OkOnly, MsgBoxIcon.Info, $.proxy(this.OnDepoisExcluir, this));
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnClickConfirmarCancelamento = function (s, e) {
        e.processOnServer = false;
        try {
            if (this.lstHistAtendimentos.GetValue().CNum() <= 0)
                return;
            if (!this.cboMotivoCancelamento.GetValue() || this.cboMotivoCancelamento.GetValue() == null || this.cboMotivoCancelamento.GetValue() == 0) {
                MostrarAlerta("Informe o motivo do cancelamento!");
                this.cboMotivoCancelamento.Focus();
                return;
            }
            if (String.IsNullOrWhiteSpace(this.txtMotivoCancelamento.GetText()) && this.txtMotivoCancelamento.Visible == true) {
                MostrarAlerta("Informe a observação do cancelamento!");
                this.txtMotivoCancelamento.Focus();
                return;
            }
            MsgBoxJS("Deseja realmente cancelar o atendimento <b>" + this.lstHistAtendimentos.GetValue() + "</b>?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespostaCancelarAtendimento, this));
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnDepoisExcluir = function (result) {
        this.dlgHistorico.Hide();
        this.GerarGrade();
    };
    R_AgPetC.prototype.OnDepoisCancelamento = function (result) {
        try {
            var param = {
                atendimentoCancelado: this.lstHistAtendimentos.GetValue().CNum(),
                tipoProfissional: this.cboTipoProfissional.GetValue()
            };
            this.listaEspera = this.ExecutarFuncaoServerSideSynch("GetListaEspera", param);
            this.dlgHistorico.Hide();
            this.GerarGrade();
            if (this.listaEspera)
                if (this.listaEspera.length > 0)
                    MsgBoxJS("Possui cliente na Lista de Espera que se encaixa no horário cancelado, deseja visualizar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespostaVisualizarLista, this));
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnRespostaCancelarAtendimento = function (result) {
        if (result.Resultado == MsgBoxResult.No)
            return;
        this.dlgMotivoCancelamento.Hide();
        this.respondeuMotivoCancelamento = true;
        try {
            var parametros = {
                atendimento: this.lstHistAtendimentos.GetValue().CNum(),
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado,
                motivo: this.txtMotivoCancelamento.GetText(),
                codMotivo: this.cboMotivoCancelamento.GetValue()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ExcluirAgendamento", parametros);
            MsgBoxJS("Atendimento cancelado com sucesso", MsgBoxOptions.OkOnly, MsgBoxIcon.Info, $.proxy(this.OnDepoisCancelamento, this));
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnRespostaVisualizarLista = function (result) {
        if (result.Resultado == MsgBoxResult.Yes)
            this.VerificarClientesListaEspera();
        else
            this.listaEspera = [];
    };
    R_AgPetC.prototype.VerificarClientesListaEspera = function () {
        try {
            if (this.listaEspera.length <= 0)
                return;
            this.lblTotalListaEsperaResultado.Text = this.listaEspera.length.toString();
            var param = {
                codEspera: this.listaEspera[0]
            };
            var proprietarioRetorno = this.ExecutarFuncaoServerSideSynch("GetDadosProprietarioEspera", param);
            if (!proprietarioRetorno)
                return;
            this.lblCodProprietarioLista.Text = proprietarioRetorno.Codigo_Proprietario.toString();
            this.lblProprietarioLista.Text = proprietarioRetorno.Nome_Proprietario.toString();
            this.lblTelefoneLista.Text = proprietarioRetorno.Telefone_Proprietario;
            this.lblCodAnimalLista.Text = proprietarioRetorno.Codigo_Animal.toString();
            this.lblAnimalLista.Text = proprietarioRetorno.Nome_Animal;
            if (this.listaEspera.length == 1)
                this.btnProximoLista.Text = "Cancelar";
            this.dlgVerificarClienteListaEspera.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnClickProximoLista = function (s, e) {
        e.processOnServer = false;
        try {
            var param = {
                codEspera: this.listaEspera[0],
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            this.ExecutarFuncaoServerSideSynch("ExcluirClienteEspera", param);
            this.listaEspera.shift();
            if (this.listaEspera.length <= 0) {
                this.LimparCamposEspera();
                this.dlgVerificarClienteListaEspera.Hide();
                this.codProfissional = 0;
                return;
            }
            this.VerificarClientesListaEspera();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnClickFinalizarAtendimentoLista = function (s, e) {
        e.processOnServer = false;
        try {
            var dataAtendimento = this.txtData.Date.FormataData();
            var profissional = this.codProfissional;
            var codAnimal = this.lblCodAnimalLista.Text.CNum();
            var codProprietario = this.lblCodProprietarioLista.Text.CNum();
            var empresa = this.codEmpresa;
            var parametros = {
                espera: this.listaEspera[0],
                horaServico: ("" + this.grdHistorico.DataSource[0].Hora_Servico)
            };
            var servicos = this.ExecutarFuncaoServerSideSynch("GetServicosHora", parametros);
            var servicosStr = JSON.stringify(servicos);
            var params = [
                "codigoEspera=" + this.listaEspera[0],
                "Data_Atendimento=" + dataAtendimento,
                "CodProfissional=" + profissional,
                "codEmpresa=" + empresa,
                "codAnimal=" + codAnimal,
                "codProprietario=" + codProprietario,
                "servicos=" + servicosStr,
                "isAgendaConsolidada=S"
            ];
            this.dlgVerificarClienteListaEspera.Hide();
            this.dlgTelaModal.AbrirTelaModal(formataURLRelativa(URLTela.CadastroDeAtendimento), params, this.NOVO_ATENDIMENTO);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgPetC.prototype.OnClickBotaoExcluir = function (s, e) {
        e.processOnServer = false;
        if (this.respondeuMotivoExclusao) {
            this.respondeuMotivoExclusao = false;
            return true;
        }
        else {
            this.txtMotivoExclusao.SetText("");
            this.dlgMotivoExclusao.Show();
            return false;
        }
    };
    R_AgPetC.prototype.OnClickBotaoCancelamento = function (s, e) {
        e.processOnServer = false;
        if (this.respondeuMotivoCancelamento) {
            this.respondeuMotivoCancelamento = false;
            return true;
        }
        else {
            this.cboMotivoCancelamento.LimparSelecao();
            this.txtMotivoCancelamento.Visible = false;
            this.txtMotivoCancelamento.SetText("");
            this.dlgMotivoCancelamento.Show();
            return false;
        }
    };
    return R_AgPetC;
}(MouraPageRelacaoAngular));
var r_AgPetC = new R_AgPetC();
//# sourceMappingURL=R_AgPetC.js.map