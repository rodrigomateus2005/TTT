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
var C_AtmCon = /** @class */ (function (_super) {
    __extends(C_AtmCon, _super);
    function C_AtmCon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PATH_DOCUMENTOS = "~/Documentos/Consulta/";
        return _this;
    }
    Object.defineProperty(C_AtmCon.prototype, "ExamesSolicitados", {
        get: function () {
            return this.grdExamesSolicitados.DataSource;
        },
        set: function (value) {
            this.grdExamesSolicitados.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "grdInternacao", {
        get: function () {
            return window['grdInternacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "btnNovainternacao", {
        get: function () {
            return window['btnNovainternacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "btnVisualizarProtocolo", {
        get: function () {
            return window['btnVisualizarProtocolo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "btnSolicitarExames", {
        get: function () {
            return window['btnSolicitarExames_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "btnAtendimento", {
        get: function () {
            return window['btnAtendimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "btnAtendimentoContinuo", {
        get: function () {
            return window['btnAtendimentoContinuo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "btnVacinas", {
        get: function () {
            return window['btnVacinas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "btnPeso", {
        get: function () {
            return window['btnPeso_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "btnCarregarHistorico", {
        get: function () {
            return window['btnCarregarHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtVeterinario", {
        get: function () {
            return window['txtVeterinario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtHistorico", {
        get: function () {
            return window['txtHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtReceita", {
        get: function () {
            return window['txtReceita_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtDescricaoReceita", {
        get: function () {
            return window['txtDescricaoReceita_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtAnamnese", {
        get: function () {
            return window['txtAnamnese_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtDescricaoAnamnese", {
        get: function () {
            return window['txtDescricaoAnamnese_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtExameFisico", {
        get: function () {
            return window['txtExameFisico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtDescricaoExameFisico", {
        get: function () {
            return window['txtDescricaoExameFisico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "btnHistoricoImprimirMatricial", {
        get: function () {
            return window['btnHistoricoImprimirMatricial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "btnHistoricoVisualizarWord", {
        get: function () {
            return window['btnHistoricoVisualizarWord_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "btnImprimir", {
        get: function () {
            return window['btnImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "btnAnexo", {
        get: function () {
            return window['btnAnexo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "grdPesos", {
        get: function () {
            return window['grdPesos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "grdVacinasAgendadas", {
        get: function () {
            return window['grdVacinasAgendadas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "grdVacinasAplicadas", {
        get: function () {
            return window['grdVacinasAplicadas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "grdConsultas", {
        get: function () {
            return window['grdConsultas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "lblEndereco", {
        get: function () {
            return window['lblEndereco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "lblFone", {
        get: function () {
            return window['lblFone_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "lblComplemento", {
        get: function () {
            return window['lblComplemento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "lblEspecie", {
        get: function () {
            return window['lblEspecie_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "lblRaca", {
        get: function () {
            return window['lblRaca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "lblIdadeSexo", {
        get: function () {
            return window['lblIdadeSexo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "lblObsServico", {
        get: function () {
            return window['lblObsServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "lblCarteirinha", {
        get: function () {
            return window['lblCarteirinha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "lblChip", {
        get: function () {
            return window['lblChip_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "cboModelo", {
        get: function () {
            return window['cboModelo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "dlgAnexo", {
        get: function () {
            return window['dlgAnexo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtHora", {
        get: function () {
            return window['txtHora_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "mdDadosConsulta", {
        get: function () {
            return window['mdDadosConsulta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "mdSolicitarExames", {
        get: function () {
            return window['mdSolicitarExames_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "btnFecharCons", {
        get: function () {
            return window['btnFecharCons_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "tbConsulta", {
        get: function () {
            return window['tbConsulta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "btnAbrirExames", {
        get: function () {
            return window['btnAbrirExames_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "btnFecharExames", {
        get: function () {
            return window['btnFecharExames_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtLaboratorio", {
        get: function () {
            return window['txtLaboratorio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtSolicitante", {
        get: function () {
            return window['txtSolicitante_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtTipoExame", {
        get: function () {
            return window['txtTipoExame_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "btnAdicionarExame", {
        get: function () {
            return window['btnAdicionarExame_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "grdExamesSolicitados", {
        get: function () {
            return window['grdExamesSolicitados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtStatusExame", {
        get: function () {
            return window['txtStatusExame_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtResultadoExame", {
        get: function () {
            return window['txtResultadoExame_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtCodigoTratamento", {
        get: function () {
            return window['txtCodigoTratamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtTratamento", {
        get: function () {
            return window['txtTratamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtFichaClinica", {
        get: function () {
            return window['txtFichaClinica_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtDescricaoFichaClinica", {
        get: function () {
            return window['txtDescricaoFichaClinica_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "mdAnexo", {
        get: function () {
            return window["mdAnexo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtDiagnostico", {
        get: function () {
            return window['txtDiagnostico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmCon.prototype, "txtCID", {
        get: function () {
            return window['txtCID_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_AtmCon.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtPet) {
            adicionarEventoMoura(this.txtPet.ProcurouAnimal, this.OnTxtPetProcurouAnimal, this);
            adicionarEventoMoura(this.txtPet.ProcurouProprietario, this.OnTxtPetProcurouProprietario, this);
        }
        if (this.btnNovainternacao) {
            adicionarEventoMoura(this.btnNovainternacao.Click, this.OnClickNovaInternacao, this);
        }
        if (this.btnSolicitarExames) {
            adicionarEventoMoura(this.btnSolicitarExames.Click, this.OnClickSolicitarExames, this);
        }
        if (this.btnAtendimento) {
            adicionarEventoMoura(this.btnAtendimento.Click, this.OnClickAtendimento, this);
        }
        if (this.btnAtendimentoContinuo) {
            adicionarEventoMoura(this.btnAtendimentoContinuo.Click, this.OnClickAtendimentoContinuo, this);
        }
        if (this.btnPeso) {
            adicionarEventoMoura(this.btnPeso.Click, this.OnClickPesos, this);
        }
        if (this.btnVacinas) {
            adicionarEventoMoura(this.btnVacinas.Click, this.OnClickVacinas, this);
        }
        if (this.btnVisualizarProtocolo) {
            adicionarEventoMoura(this.btnVisualizarProtocolo.Click, this.OnClickProtocolo, this);
        }
        if (this.btnCarregarHistorico) {
            adicionarEventoMoura(this.btnCarregarHistorico.Click, this.OnClickCarregarHistorico, this);
        }
        if (this.txtReceita) {
            adicionarEventoMoura(this.txtReceita.Procurou, this.OnProcurouReceita, this);
        }
        if (this.txtAnamnese) {
            adicionarEventoMoura(this.txtAnamnese.Procurou, this.OnProcurouAnamnese, this);
        }
        if (this.txtCodigoTratamento) {
            adicionarEventoMoura(this.txtCodigoTratamento.Procurou, this.OnProcurouTratamento, this);
        }
        if (this.txtFichaClinica) {
            adicionarEventoMoura(this.txtFichaClinica.Procurou, this.OnProcurouFichaClinica, this);
        }
        if (this.txtExameFisico) {
            adicionarEventoMoura(this.txtExameFisico.Procurou, this.OnProcurouExameFisico, this);
        }
        if (this.btnHistoricoImprimirMatricial) {
            adicionarEventoMoura(this.btnHistoricoImprimirMatricial.Click, this.OnBtnHistoricoImprimirMatricialClick, this);
        }
        if (this.btnHistoricoVisualizarWord) {
            adicionarEventoMoura(this.btnHistoricoVisualizarWord.Click, this.OnBtnHistoricoVisualizarWordClick, this);
        }
        if (this.grdConsultas) {
            adicionarEventoMoura(this.grdConsultas.SelecionouLinha, this.OnGrdConsultasSelecionouLinha, this);
        }
        if (this.grdExamesSolicitados) {
            adicionarEventoMoura(this.grdExamesSolicitados.SelecionouLinha, this.OnGrdExamesSolicitadosSelecionouLinha, this);
            adicionarEventoMoura(this.grdExamesSolicitados.ExcluindoLinhaGrade, this.OnGrdExamesSolicitadosExcluirLinha, this);
        }
        if (this.btnImprimir) {
            adicionarEventoMoura(this.btnImprimir.Click, this.OnBtnImprimirClick, this);
        }
        if (this.btnAnexo) {
            adicionarEventoMoura(this.btnAnexo.Click, this.OnBtnAnexoClick, this);
        }
        if (this.btnAbrirExames) {
            adicionarEventoMoura(this.btnAbrirExames.Click, this.OnClickBotaoAbrirExames, this);
        }
        if (this.btnFecharExames) {
            adicionarEventoMoura(this.btnFecharExames.Click, this.OnClickBotaoFecharExames, this);
        }
        if (this.btnAdicionarExame) {
            adicionarEventoMoura(this.btnAdicionarExame.Click, this.OnClickBotaoAdicionarExame, this);
        }
        if (this.txtData) {
            adicionarEventoMoura(this.txtData.ValueChanged, this.OnTxtDataChanged, this);
        }
        if (this.btnFecharCons) {
            adicionarEventoMoura(this.btnFecharCons.Click, this.OnClickFecharCons, this);
        }
        if (this.txtVeterinario) {
            adicionarEventoMoura(this.txtVeterinario.AntesAbrirProcura, this.OnAntesAbrirProcuraVeterinario, this);
        }
        if (this.txtHora && this.txtHora.textBoxHorario) {
            adicionarEventoDevExpress(this.txtHora.textBoxHorario.DateChanged, this.OnTxtHoraChanged, this);
        }
        if (this.txtTipoExame) {
            adicionarEventoMoura(this.txtTipoExame.Procurou, this.OnProcurouTipoExame, this);
        }
        if (this.grdInternacao)
            adicionarEventoMoura(this.grdInternacao.ClickBotaoImprimir, this.OnClickImprimirInternacao, this);
        if (ValoresSismoura.ConfiguracoesPetshop.Utilizar_Ficha_Clinica) {
            this.tab.AlterarVisibleAba("AbaDiagnostico", false);
            this.tab.AlterarVisibleAba("AbaExameFisico", false);
            this.tab.AlterarVisibleAba("AbaAnamnese", false);
            this.tab.AlterarVisibleAba("AbaFichaClinica", true);
            if (this.txtFichaClinica) {
                this.txtFichaClinica.Visible = true;
                this.txtDescricaoFichaClinica.Visible = true;
                this.txtDescricaoFichaClinica.Obrigatorio = true;
            }
        }
        else {
            if (this.txtDiagnostico) {
                this.txtDiagnostico.Obrigatorio = true;
            }
        }
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            if (this.txtCID)
                adicionarEventoMoura(this.txtCID.Procurou, this.OntxtCidProcurou, this);
        }
    };
    C_AtmCon.prototype.OntxtCidProcurou = function (s, e) {
        try {
            this.pathCID = "";
            var parametros = void 0;
            this.EntityTela.visualizouProtocolo = true;
            if (this.perguntarProtocolo) {
                if (this.EntityTela.Cid > 0) {
                    parametros = {
                        codigo: this.EntityTela.Cid
                    };
                    this.pathCID = this.ExecutarFuncaoServerSideSynch("ObterPath", parametros);
                    if (this.pathCID != "") {
                        MsgBoxJS("Deseja visualizar o protocolo do CID?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouOpcaoCID, this));
                    }
                }
            }
            else {
                this.perguntarProtocolo = true;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AtmCon.prototype.OnSelecionouOpcaoCID = function (e) {
        try {
            if (e.Resultado == MsgBoxResult.Yes) {
                this.mdAnexo.MostrarClient(this.pathCID);
                this.mdAnexo.grdAnexos.Grid.deleteColumn("botaoExcluir");
                this.mdAnexo.dlgAnexo.Titulo = "Protocolo";
                $("#mdAnexo_fileUpload").hide();
                this.EntityTela.visualizouProtocolo = true;
            }
            else {
                this.EntityTela.visualizouProtocolo = false;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AtmCon.prototype.OnMudouData = function () {
        if (typeof this.GetScope().Entity.Data == "string") {
            this.GetScope().Entity.Data = this.GetScope().Entity.Data.toString().ToDate();
        }
        this.txtHora.textBoxHorario.SetDate(this.GetScope().Entity.Data);
        this.txtData.Date = this.GetScope().Entity.Data;
    };
    C_AtmCon.prototype.AlterarEntidadeData = function () {
        var hora = this.txtHora.textBoxHorario.GetDate();
        var data = this.txtData.Date;
        if (!data) {
            data = new Date();
        }
        var minutes = 0, hour = 0;
        if (!hora) {
            minutes = hora.getMinutes();
            hour = hora.getHours();
        }
        var dataEntidade;
        dataEntidade = new Date(data.getFullYear(), data.getMonth(), data.getDate(), hora.getHours(), hora.getMinutes());
        this.GetScope().Entity.Data = dataEntidade;
        this.GetScope().$applyAsync();
    };
    C_AtmCon.prototype.OnTxtDataChanged = function () {
        this.AlterarEntidadeData();
    };
    C_AtmCon.prototype.OnTxtHoraChanged = function () {
        this.AlterarEntidadeData();
    };
    C_AtmCon.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (this.GetScope()) {
            this.GetScope().$watch(function ($scope) {
                return $scope.Entity.Data;
            }, $.proxy(this.OnMudouData, this));
            this.GetScope().$applyAsync();
        }
        //setTimeout($.proxy(function () {
        if (this.ParametrosTela.codAnimal) {
            this.GetScope().Entity.Cod_Animal = this.ParametrosTela.codAnimal.CNum();
            this.GetScope().$applyAsync();
        }
        if (this.ParametrosTela.codConsulta) {
            this.GetScope().Entity.Codigo = this.ParametrosTela.codConsulta.CNum();
            this.GetScope().$applyAsync();
        }
        if (this.ParametrosTela.profissional) {
            this.GetScope().Entity.Cod_Veteri = this.ParametrosTela.profissional.CNum();
            this.GetScope().$applyAsync();
        }
        if (this.ParametrosTela.codCheckIn) {
            this.hdnCodigoCheckIn.value = this.ParametrosTela.codCheckIn;
        }
        if (this.ParametrosTela.codConvenio) {
            this.hdnCodigoConvenio.value = this.ParametrosTela.codConvenio.CNum();
        }
        if (this.ParametrosTela.autorizacaoConvenio) {
            this.hdnAutorizacaoConvenio.value = this.ParametrosTela.autorizacaoConvenio;
        }
        if (this.ParametrosTela.Codassunto) {
            this.GetScope().Entity.Assunto = this.ParametrosTela.Codassunto.CNum();
            this.GetScope().$applyAsync();
        }
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            this.txtCID.Obrigatorio = true;
        }
        this.txtResultadoExame.Visible = false;
        this.txtStatusExame.Enabled = false;
        //}, this), 500);
    };
    C_AtmCon.prototype.OnGrdExamesSolicitadosSelecionouLinha = function (s, e) {
        var url = URLTela.CadastroDeExameDoAnimal;
        var parametros = new Array();
        parametros.push("codigo=" + ("" + e.data['Codigo']));
        url = formataURLRelativa(url);
        abrirTelaNovaAbaParametros(url, parametros);
    };
    C_AtmCon.prototype.OnGrdExamesSolicitadosExcluirLinha = function (s, e) {
        if (e.item['Codigo'] > 0) {
            MsgBoxJS("Não é possível excluir um exame que já foi gravado!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
            e.cancelar = true;
        }
    };
    C_AtmCon.prototype.OnGrdConsultasSelecionouLinha = function (s, e) {
        var parametros;
        var retorno;
        parametros = {
            codConsulta: ("" + e.rowKey).CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetDadosConsulta", parametros);
        if (ValoresSismoura.ConfiguracoesPetshop.Utilizar_Ficha_Clinica) {
            this.tbConsulta.AlterarVisibleAba("abaConDiag", false);
            this.tbConsulta.AlterarVisibleAba("AbaConExa", false);
            this.tbConsulta.AlterarVisibleAba("AbaConAna", false);
            this.tbConsulta.AlterarVisibleAba("AbaFichaClinic", true);
        }
        else {
            this.tbConsulta.AlterarVisibleAba("abaConDiag", true);
            this.tbConsulta.AlterarVisibleAba("AbaConExa", true);
            this.tbConsulta.AlterarVisibleAba("AbaConAna", true);
            this.tbConsulta.AlterarVisibleAba("AbaFichaClinic", false);
        }
        try {
            if (this.tbConsulta) {
                if (ValoresSismoura.ConfiguracoesPetshop.Utilizar_Ficha_Clinica) {
                    this.tbConsulta.SetActiveTabIndex(3);
                }
                else {
                    this.tbConsulta.SetActiveTabIndex(0);
                }
            }
        }
        catch (ex) {
        }
        this.mdDadosConsulta.Show();
        this.GetScope().ConsultaRet = retorno;
        this.GetScope().$applyAsync();
    };
    C_AtmCon.prototype.OnAntesSetEntidade = function (eventArg) {
        _super.prototype.OnAntesSetEntidade.call(this, eventArg);
        if (this.txtExameFisico) {
            this.txtExameFisico.Limpar();
        }
        if (this.txtAnamnese) {
            this.txtAnamnese.Limpar();
        }
        if (this.txtHistorico) {
            this.txtHistorico.SetText("");
        }
        if (this.txtCodigoTratamento) {
            this.txtCodigoTratamento.Limpar();
        }
        if (this.txtFichaClinica) {
            this.txtFichaClinica.Limpar();
        }
    };
    C_AtmCon.prototype.OnAntesBuscarExistente = function () {
        _super.prototype.OnAntesBuscarExistente.call(this);
        this.perguntarProtocolo = false;
        this.txtPet.TextBoxProprietario.Limpar();
        this.txtPet.TextBoxAnimal.Limpar();
    };
    C_AtmCon.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        var animal = 0;
        if (Entity.Cod_Animal) {
            animal = Entity.Cod_Animal;
        }
        this.txtPet.TextBoxProprietario.Limpar();
        Entity.Cod_Animal = animal;
        Entity.visualizouProtocolo = true;
        this.perguntarProtocolo = true;
        this.ExamesSolicitados = Entity.ExamesSolicitados;
    };
    C_AtmCon.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        Entity.Data = new Date();
        Entity.Usuario = ValoresSismoura.UsuarioLogado;
        Entity.Assunto = 0;
        Entity.ExamesSolicitados = [];
        Entity.visualizouProtocolo = true;
        this.hdnCodigoCheckIn.value = "0";
        this.hdnCodigoConvenio.value = "0";
        this.hdnAutorizacaoConvenio.value = "";
        this.grdConsultas.PreencherGrid(null);
        this.grdPesos.PreencherGrid(null);
        this.grdVacinasAgendadas.PreencherGrid(null);
        this.grdVacinasAplicadas.PreencherGrid(null);
        this.grdInternacao.PreencherGrid(null);
        this.perguntarProtocolo = true;
        this.txtPet.TextBoxProprietario.Limpar();
        this.LimparSolicitarExames();
        this.txtResultadoExame.Visible = false;
    };
    C_AtmCon.prototype.LimparSolicitarExames = function () {
        try {
            this.txtLaboratorio.Limpar();
            this.txtSolicitante.Limpar();
            this.txtTipoExame.Limpar();
            this.txtStatusExame.Limpar();
            this.txtResultadoExame.Limpar();
            this.ExamesSolicitados = [];
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AtmCon.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.EntityTela.visualizouProtocolo = true;
        if (ValoresSismoura.ObrigarAgendarVacina) {
            abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.AgendamentoDeVacinas), ["animal=" + this.GetScope().Entity.Cod_Animal]);
        }
        if (this.EntityTela.ExamesSolicitados) {
            if (this.EntityTela.ExamesSolicitados.length > 0) {
                this.PreencherEntidade(this.EntityTela.Codigo.toString());
                if (!this.ExamesSolicitados || this.ExamesSolicitados.length <= 0) {
                    return true;
                }
                MsgBoxJS("Por favor, anotar o c\u00F3digo do pet: <b>" + this.EntityTela.Cod_Animal + "</b> no tubo, antes de enviar para o laborat\u00F3rio", MsgBoxOptions.OkOnly, MsgBoxIcon.Info, function (result) {
                    return true;
                });
            }
        }
        else {
            return true;
        }
    };
    C_AtmCon.prototype.OnTxtPetProcurouProprietario = function (s, e) {
        var parametros;
        parametros = {
            codProprietario: this.txtPet.TextBoxProprietario.GetText().CNum()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetDadosProprietario", parametros);
        if (retorno) {
            this.lblEndereco.Text = retorno.Endereco;
            this.lblFone.Text = retorno.Fone;
            this.lblComplemento.Text = retorno.Complemento;
        }
    };
    C_AtmCon.prototype.OnTxtPetProcurouAnimal = function (s, e) {
        var parametros;
        parametros = {
            codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetDadosAnimal", parametros);
        if (retorno) {
            this.lblEspecie.Text = retorno.Especie;
            this.lblRaca.Text = retorno.Raca;
            this.lblIdadeSexo.Text = retorno.IdadeSexo;
            this.lblObsServico.Text = retorno.ObsServico;
            this.lblCarteirinha.Text = retorno.Carterinha_Plano;
            this.lblChip.Text = retorno.Chip;
            this.grdConsultas.PreencherGrid(retorno.Consultas);
            this.grdPesos.PreencherGrid(retorno.Pesos);
            this.grdVacinasAgendadas.PreencherGrid(retorno.VacinasAgendadas);
            this.grdVacinasAplicadas.PreencherGrid(retorno.VacinasAplicadas);
            this.grdInternacao.PreencherGrid(retorno.Internacoes);
        }
    };
    C_AtmCon.prototype.OnClickNovaInternacao = function (s, e) {
        e.processOnServer = false;
        if (!this.txtPet || !this.txtPet.TextBoxAnimal) {
            return;
            //if (this.txtPet.TextBoxAnimal.GetText().CNum() <= 0) {
            //    MostrarAlerta("Informe um animal");
            //    return;
            //}
            //abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroDeInternacaoDoAnimal), ["codAnimal=" + this.txtPet.TextBoxAnimal.GetText()]);
        }
    };
    C_AtmCon.prototype.OnClickPesos = function (s, e) {
        e.processOnServer = false;
        if (!this.txtPet || !this.txtPet.TextBoxAnimal || !this.txtCodigo) {
            return;
        }
        if (this.txtPet.TextBoxAnimal.GetText().CNum() <= 0) {
            MostrarAlerta("Informe uma consulta com um animal válido");
            return;
        }
        var url = URLTela.CadastroDeHistoricoDePeso;
        url = formataURLRelativa(url);
        abrirTelaNovaAbaParametros(url, ["animal=" + this.txtPet.TextBoxAnimal.GetText()]);
    };
    C_AtmCon.prototype.OnClickAtendimento = function (s, e) {
        e.processOnServer = false;
        if (!this.txtPet || !this.txtPet.TextBoxAnimal || !this.txtCodigo) {
            return;
        }
        if (this.txtPet.TextBoxAnimal.GetText().CNum() <= 0) {
            MostrarAlerta("Informe uma consulta com um animal válido");
            return;
        }
        var url = URLTela.CadastroDeAtendimento;
        var parametros = new Array();
        parametros.push("codAnimal=" + this.txtPet.TextBoxAnimal.GetText());
        if (this.hdnCodigoCheckIn && this.hdnCodigoCheckIn.value != "0") {
            parametros.push("codCheckIn=" + this.hdnCodigoCheckIn.value);
        }
        if (this.hdnCodigoConvenio && this.hdnCodigoConvenio.value != "0") {
            parametros.push("codConvenio=" + this.hdnCodigoConvenio.value);
        }
        if (this.hdnAutorizacaoConvenio && this.hdnAutorizacaoConvenio.value != "") {
            parametros.push("autorizacaoConvenio=" + this.hdnAutorizacaoConvenio.value);
        }
        url = formataURLRelativa(url);
        abrirTelaNovaAbaParametros(url, parametros);
    };
    C_AtmCon.prototype.OnClickAtendimentoContinuo = function (s, e) {
        e.processOnServer = false;
        if (!this.txtPet || !this.txtPet.TextBoxAnimal || !this.txtCodigo) {
            return;
        }
        if (this.txtPet.TextBoxAnimal.GetText().CNum() <= 0) {
            MostrarAlerta("Informe uma consulta com um animal válido");
            return;
        }
        var url = URLTela.CadastroDeAtendimentoContinuo;
        url = formataURLRelativa(url);
        var parametros = new Array();
        parametros.push("codAnimal=" + this.txtPet.TextBoxAnimal.GetText());
        abrirTelaNovaAbaParametros(url, parametros);
    };
    C_AtmCon.prototype.OnClickBotaoAbrirExames = function (s, e) {
        e.processOnServer = false;
        var url = URLTela.CadastroDeExameDoAnimal;
        var parametros = new Array();
        parametros.push("animal=" + this.txtPet.TextBoxAnimal.GetText());
        if (this.txtCodigo.Textbox.value.CNum() > 0) {
            parametros.push("Codigo_Consulta=" + this.txtCodigo.GetText());
        }
        url = formataURLRelativa(url);
        abrirTelaNovaAbaParametros(url, parametros);
    };
    C_AtmCon.prototype.OnClickBotaoFecharExames = function (s, e) {
        e.processOnServer = false;
        this.mdSolicitarExames.Hide();
    };
    C_AtmCon.prototype.OnClickBotaoAdicionarExame = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        var ref = {};
        var lista = this.ExamesSolicitados;
        if (String.IsNullOrWhiteSpace(this.txtLaboratorio.GetText())) {
            MsgBoxJS("Informe o Laboratório Responsável!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
            this.txtLaboratorio.Focus();
            return;
        }
        if (String.IsNullOrWhiteSpace(this.txtSolicitante.GetText())) {
            MsgBoxJS("Informe o Veterinário Solicitante!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
            this.txtSolicitante.Focus();
            return;
        }
        if (String.IsNullOrWhiteSpace(this.txtTipoExame.GetText())) {
            MsgBoxJS("Informe o Tipo do Exame!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
            this.txtTipoExame.Focus();
            return;
        }
        if (String.IsNullOrWhiteSpace(this.txtStatusExame.GetText())) {
            MsgBoxJS("Informe o Status do Exame!", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
            this.txtStatusExame.Focus();
            return;
        }
        var examesList = this.ExecutarFuncaoServerSideSynch("GetPainelExameRetorno", { tipoExame: this.txtTipoExame.GetText().CNum() });
        if (!examesList || examesList.length <= 0) {
            ref.Item = this.ExamesSolicitados.length + 1;
            ref.StatusCodigo = this.txtStatusExame.GetText().CNum();
            ref.StatusDescricao = this.txtStatusExame.GetResultado();
            ref.TipoExameCodigo = this.txtTipoExame.GetText().CNum();
            ref.TipoExameDescricao = this.txtTipoExame.GetResultado();
            ref.Data = this.DataServidor();
            ref.LaboratorioCodigo = this.txtLaboratorio.GetText().CNum();
            ref.LaboratorioDescricao = this.txtLaboratorio.GetResultado();
            ref.Codigo = 0;
            ref.Resultado = this.txtResultadoExame.GetText();
            lista.push(ref);
        }
        else {
            var contador_1 = this.ExamesSolicitados.length;
            examesList.forEach(function (q) {
                contador_1 += 1;
                q.Item = contador_1;
                q.StatusCodigo = _this.txtStatusExame.GetText().CNum();
                q.StatusDescricao = _this.txtStatusExame.GetResultado();
                q.Data = _this.DataServidor();
                q.LaboratorioCodigo = _this.txtLaboratorio.GetText().CNum();
                q.LaboratorioDescricao = _this.txtLaboratorio.GetResultado();
                q.Codigo = 0;
                lista.push(q);
            });
        }
        this.ExamesSolicitados = lista;
        this.txtTipoExame.Limpar();
        this.txtTipoExame.Focus();
    };
    C_AtmCon.prototype.OnClickProtocolo = function (s, e) {
        e.processOnServer = false;
        if (!this.EntityTela.Cid || this.EntityTela.Cid == 0) {
            MostrarAlerta("Informe o CID!");
            return;
        }
        var parametros = {
            codigo: this.EntityTela.Cid
        };
        this.pathCID = this.ExecutarFuncaoServerSideSynch("ObterPath", parametros);
        if (this.pathCID == "") {
            MostrarAlerta("Este CID não possui protocolo!");
        }
        else {
            this.mdAnexo.MostrarClient(this.pathCID);
            this.mdAnexo.grdAnexos.Grid.deleteColumn("botaoExcluir");
            this.mdAnexo.dlgAnexo.Titulo = "Protocolo";
            $("#mdAnexo_fileUpload").hide();
            this.EntityTela.visualizouProtocolo = true;
        }
    };
    C_AtmCon.prototype.OnClickVacinas = function (s, e) {
        e.processOnServer = false;
        if (!this.txtPet || !this.txtPet.TextBoxAnimal || !this.txtCodigo) {
            return;
        }
        if (this.txtPet.TextBoxAnimal.GetText().CNum() <= 0) {
            MostrarAlerta("Informe uma consulta com um animal válido");
            return;
        }
        var url = URLTela.AgendamentoDeVacinas;
        url = formataURLRelativa(url);
        abrirTelaNovaAbaParametros(url, ["animal=" + this.txtPet.TextBoxAnimal.GetText()]);
    };
    C_AtmCon.prototype.OnClickSolicitarExames = function (s, e) {
        e.processOnServer = false;
        if (!this.txtPet || !this.txtPet.TextBoxAnimal || !this.txtCodigo) {
            return;
        }
        if (this.txtPet.TextBoxAnimal.GetText().CNum() <= 0) {
            MostrarAlerta("Informe uma consulta com um animal válido");
            return;
        }
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus == true) {
            this.txtTipoExame.Limpar();
            this.txtLaboratorio.Limpar();
            if (!String.IsNullOrWhiteSpace(this.txtVeterinario.GetText())) {
                this.txtSolicitante.Procurar(this.txtVeterinario.GetText());
            }
            this.txtStatusExame.Procurar(this.StatusExamePadrao());
            this.grdExamesSolicitados.AlturaGrade = 200;
            this.grdExamesSolicitados.Refresh();
            this.mdSolicitarExames.Show();
        }
        else {
            var url = URLTela.CadastroDeExameDoAnimal;
            var parametros = new Array();
            parametros.push("animal=" + this.txtPet.TextBoxAnimal.GetText());
            if (this.txtCodigo.Textbox.value.CNum() > 0) {
                parametros.push("Codigo_Consulta=" + this.txtCodigo.GetText());
            }
            url = formataURLRelativa(url);
            abrirTelaNovaAbaParametros(url, parametros);
        }
    };
    C_AtmCon.prototype.OnBtnHistoricoImprimirMatricialClick = function (s, e) {
        this.ImprimirMatricial("Hist_Consulta", this.txtHistorico.GetText());
    };
    C_AtmCon.prototype.OnBtnAnexoClick = function (s, e) {
        e.processOnServer = false;
        if (this.GetScope().Entity.Codigo <= 0) {
            MostrarAlerta("Informe uma consulta já gravada");
            return;
        }
        this.dlgAnexo.MostrarClient(this.PATH_DOCUMENTOS + this.GetScope().Entity.Codigo.toString());
    };
    C_AtmCon.prototype.OnBtnImprimirClick = function (s, e) {
        var parametros;
        e.processOnServer = false;
        if (this.txtCodigo.GetText().CNum() <= 0) {
            MostrarAlerta("Informe uma consulta gravada para imprimir");
            return;
        }
        if (("" + this.cboModelo.GetValue()).CNum() <= 0) {
            MostrarAlerta("Informe o modelo");
            return;
        }
        parametros = {
            codDocumento: this.cboModelo.GetValue(),
            codConsulta: this.txtCodigo.GetText().CNum()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetImpressaoConsulta", parametros);
        if (!retorno) {
            return;
        }
        this.ImprimirDocumentoWord(retorno.Itens, retorno.Documento, "N");
    };
    C_AtmCon.prototype.OnBtnHistoricoVisualizarWordClick = function (s, e) {
        var texto = "";
        texto = replaceAll(this.txtHistorico.GetText(), "\n", "<br>");
        texto = replaceAll(texto, "\t", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        texto = replaceAll(texto, " ", "&nbsp;");
        this.ImprimirDocumentoWord({}, texto, "N");
    };
    C_AtmCon.prototype.OnClickCarregarHistorico = function (s, e) {
        e.processOnServer = false;
        var retorno;
        var parametros;
        if (!this.txtPet || !this.txtPet.TextBoxAnimal || !this.txtHistorico) {
            return;
        }
        if (this.txtPet.TextBoxAnimal.GetText().CNum() <= 0) {
            MostrarAlerta("Informe um animal");
            return;
        }
        parametros = {
            codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetHistoricoCompleto", parametros);
        this.txtHistorico.SetText(retorno);
    };
    C_AtmCon.prototype.OnProcurouReceita = function (s, e) {
        var retorno;
        var parametros;
        if (!this.txtReceita) {
            return;
        }
        parametros = {
            codReceita: this.txtReceita.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetInformacoesReceita", parametros);
        if (!String.IsNullOrWhiteSpace(retorno)) {
            this.GetScope().Entity.Receita = retorno;
            this.GetScope().$applyAsync();
        }
    };
    C_AtmCon.prototype.OnProcurouAnamnese = function (s, e) {
        var retorno;
        var parametros;
        if (!this.txtAnamnese) {
            return;
        }
        parametros = {
            codAnamnese: this.txtAnamnese.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetInformacoesAnamnese", parametros);
        if (!String.IsNullOrWhiteSpace(retorno)) {
            this.GetScope().Entity.Anamnese = retorno;
            this.GetScope().$applyAsync();
        }
    };
    C_AtmCon.prototype.OnProcurouTratamento = function (s, e) {
        var retorno;
        var parametros;
        if (!this.txtCodigoTratamento) {
            return;
        }
        parametros = {
            codTratamento: this.txtCodigoTratamento.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetInformacoesTratamento", parametros);
        if (!String.IsNullOrWhiteSpace(retorno)) {
            this.GetScope().Entity.Tratamento = retorno.replace(":", "\n");
            this.GetScope().$applyAsync();
        }
    };
    C_AtmCon.prototype.OnProcurouFichaClinica = function (s, e) {
        var retorno;
        var parametros;
        if (!this.txtFichaClinica) {
            return;
        }
        parametros = {
            codFichaClinica: this.txtFichaClinica.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetInformacoesFichaClinica", parametros);
        if (!String.IsNullOrWhiteSpace(retorno)) {
            this.GetScope().Entity.Ficha_Clinica = retorno;
            this.GetScope().$applyAsync();
        }
    };
    C_AtmCon.prototype.OnProcurouExameFisico = function (s, e) {
        var retorno;
        var parametros;
        if (!this.txtExameFisico) {
            return;
        }
        parametros = {
            codExame: this.txtExameFisico.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetInformacoesExameFisico", parametros);
        if (!String.IsNullOrWhiteSpace(retorno)) {
            this.GetScope().Entity.Exame_Fisico = retorno;
            this.GetScope().$applyAsync();
        }
    };
    C_AtmCon.prototype.OnProcurouTipoExame = function (s, e) {
        try {
            var isExameResultado = this.ExecutarFuncaoServerSideSynch("IsExameResultado", { tipoExame: this.txtTipoExame.GetText().CNum() });
            this.txtResultadoExame.Visible = isExameResultado;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AtmCon.prototype.OnClickFecharCons = function (s, e) {
        e.processOnServer = false;
        this.mdDadosConsulta.Hide();
    };
    C_AtmCon.prototype.OnAntesGravar = function () {
        this.EntityTela.ExamesSolicitados = this.ExamesSolicitados;
        return _super.prototype.OnAntesGravar.call(this);
    };
    C_AtmCon.prototype.OnAntesAbrirProcuraVeterinario = function (s, e) {
        e.Cancelar = false;
        this.txtVeterinario.AddParametro("EmpProf", "" + this.cboEmpresa.GetValue());
    };
    C_AtmCon.prototype.OnClickImprimirInternacao = function (s, e) {
        try {
            var parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("GetImpressaoInternacao", parametros);
            if (!retorno) {
                return;
            }
            this.ImprimirDocumentoWord(retorno.Itens, retorno.Documento, "N");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_AtmCon;
}(MouraPageCadastroAngular));
var c_AtmCon = new C_AtmCon();
//# sourceMappingURL=C_AtmCon.js.map