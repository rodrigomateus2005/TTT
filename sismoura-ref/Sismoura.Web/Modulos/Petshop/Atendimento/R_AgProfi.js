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
var R_AgProfi = /** @class */ (function (_super) {
    __extends(R_AgProfi, _super);
    function R_AgProfi() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NOVO_ATENDIMENTO = "novoAtendimento";
        return _this;
    }
    Object.defineProperty(R_AgProfi.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "Grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "txtPeriodo", {
        get: function () {
            return window["txtPeriodo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "dlgMotivoExclusao", {
        get: function () {
            return window['dlgMotivoExclusao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "txtMotivoExclusao", {
        get: function () {
            return window['txtMotivoExclusao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "btnConfirmarExclusao", {
        get: function () {
            return window['btnConfirmarExclusao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "btnCancelarExclusao", {
        get: function () {
            return window['btnCancelarExclusao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "dlgMotivoCancelamento", {
        get: function () {
            return window['dlgMotivoCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "txtMotivoCancelamento", {
        get: function () {
            return window['txtMotivoCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "btnConfirmarCancelamento", {
        get: function () {
            return window['btnConfirmarCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "btnCancelarCancelamento", {
        get: function () {
            return window['btnCancelarCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "txtProfissional", {
        get: function () {
            return window["txtProfissional_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "cboTipoProfissional", {
        get: function () {
            return window['cboTipoProfissional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "accFiltro", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "btnExcluir", {
        get: function () {
            return window['btnExcluir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "btnCancelamento", {
        get: function () {
            return window['btnCancelamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "btnEncaixe", {
        get: function () {
            return window['btnEncaixe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "btnFecharHistorico", {
        get: function () {
            return window['btnFecharHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "grdHistorico", {
        get: function () {
            return window['grdHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "lstHistAtendimentos", {
        get: function () {
            return window['lstHistAtendimentos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "lblHistAtendimento", {
        get: function () {
            return window['lblHistAtendimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "lblHistProprietario", {
        get: function () {
            return window['lblHistProprietario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "lblHistAnimal", {
        get: function () {
            return window['lblHistAnimal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "lblHistTotal", {
        get: function () {
            return window['lblHistTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "lblHistVenda", {
        get: function () {
            return window['lblHistVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "lblHistCadastrado", {
        get: function () {
            return window['lblHistCadastrado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "dlgHistorico", {
        get: function () {
            return window['dlgHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgProfi.prototype, "btnCadastroAtividade", {
        get: function () {
            return window['btnCadastroAtividade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_AgProfi.prototype.LimparCampos = function () {
        var _this = this;
        _super.prototype.LimparCampos.call(this);
        try {
            this.txtPeriodo.IniciarDataAtual();
            this.txtProfissional.Limpar();
            if (this.cboTipoProfissional.GetItemCount() > 0) {
                setTimeout(function () {
                    _this.cboTipoProfissional.SetSelectedIndex(0);
                }, 200);
            }
            this.ConfigurarGrade();
            this.Grid.PreencherGrid([]);
            //this.lstEmpresa.LimparSelecao();
            if (ValoresSismoura && ValoresSismoura.EmpresaPadraoUsuario > 0) {
                this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
            }
            setTimeout(function () {
                if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus && _this.cboTipoProfissional.Combo.GetItemCount() > 1)
                    _this.cboTipoProfissional.SetValue(2); //DEFAULT CENTRO DE ESTÉTICA (PETZ).
            }, 700);
            this.codProfissional = 0;
            this.codEmpresa = 0;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgProfi.prototype.ConfigurarGrade = function () {
        // this.Grid.GroupBy("Fantasia");
        this.Grid.FixarColuna("Horario_Atendimento", true);
        var opt = this.Grid.Grid.option("paging");
        opt.pageSize = 50;
        this.Grid.Grid.option("paging", opt);
        // this.Grid.FuncaoGroup("Fantasia", this.FuncaoSort, this);
        // this.Grid.FuncaoCustomText("Fantasia", this.FuncaoCustomText, this);
        //this.Grid.OrderBy("Distancia_Empresa", "asc");
    };
    R_AgProfi.prototype.FuncaoSort = function (data) {
        var retorno;
        if (this.txtPet.TextBoxProprietario.GetText().CNum() > 0) {
            retorno = "##" + Right(new Array(20).join("0") + data.Distancia_Empresa, 20) + "|" + data.Fantasia;
        }
        else {
            retorno = "|" + data.Fantasia;
        }
        return retorno;
    };
    R_AgProfi.prototype.FuncaoCustomText = function (data) {
        var valor = data.valueText;
        if (!String.IsNullOrWhiteSpace(valor)) {
            return ("" + valor).split("|")[1];
        }
        else {
            return "";
        }
    };
    R_AgProfi.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.btnExcluir.Visible = !ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus;
        this.btnCancelamento.Visible = ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus;
        this.LimparCampos();
    };
    R_AgProfi.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.CellPrepared, this.OnGridCellPrepared, this);
            adicionarEventoMoura(this.Grid.ClickBotaoLinha, this.OnGridClicouBotao, this);
            //Exibir linhas
            if (this.Grid.Grid) {
                this.Grid.Grid.option("showRowLines", true);
            }
        }
        if (this.btnExcluir) {
            adicionarEventoMoura(this.btnExcluir.Click, this.OnClickBotaoExcluir, this);
        }
        if (this.btnCancelamento)
            adicionarEventoMoura(this.btnCancelamento.Click, this.OnClickBotaoCancelamento, this);
        if (this.txtPet.TextBoxProprietario) {
            adicionarEventoMoura(this.txtPet.TextBoxProprietario.Procurou, this.OnPesquisouCliente, this);
        }
        if (this.dlgTelaModal) {
            adicionarEventoMoura(this.dlgTelaModal.Retornou, this.OnRetornouModalAtendimento, this);
        }
        if (this.btnEncaixe)
            adicionarEventoMoura(this.btnEncaixe.Click, this.OnClickBtnEncaixe, this);
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
        if (this.btnCancelarCancelamento) {
            adicionarEventoMoura(this.btnCancelarCancelamento.Click, this.OnClickCancelarCancelamento, this);
        }
        if (this.lstHistAtendimentos && this.lstHistAtendimentos.PainelList) {
            $(this.lstHistAtendimentos.PainelList).css("width", "100%");
        }
    };
    R_AgProfi.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!this.ValidarCampos()) {
            return;
        }
        this.GerarGrade();
    };
    R_AgProfi.prototype.GerarGrade = function () {
        var _this = this;
        try {
            var parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                tipoProfissional: ("" + this.cboTipoProfissional.GetValue()).CNum(),
                codProfissional: this.txtProfissional.GetText().CNum(),
                empresa: CNum(this.cboEmpresa.GetValue()),
                codCliente: this.txtPet.TextBoxProprietario.GetText().CNum()
            };
            this.ExecutarFuncaoServerSideAsynch("RelacaoAgenda", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (_this.accFiltro) {
                        _this.accFiltro.SetExpanded(false);
                    }
                    _this.Grid.Colunas = retorno.ColunasGrade;
                    _this.Grid.TotalizacoesColunas = retorno.Totalizacoes;
                    _this.Grid.iniciarGrid();
                    _this.ConfigurarGrade();
                    _this.Grid.PreencherGrid(retorno.Dados);
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
    R_AgProfi.prototype.ValidarCampos = function () {
        if (this.txtPeriodo.textBoxCalendarioInicio.GetDate() == null || this.txtPeriodo.textBoxCalendarioInicio.GetDate() == undefined) {
            MostrarAlerta("Informe o período!");
            return false;
        }
        if (this.txtPeriodo.textBoxCalendarioFim.GetDate() == null || this.txtPeriodo.textBoxCalendarioFim.GetDate() == undefined) {
            MostrarAlerta("Informe o período!");
            return false;
        }
        if (("" + this.cboTipoProfissional.GetValue()).CNum() <= 0) {
            MostrarAlerta("Informe o tipo de profissional");
            return false;
        }
        if (CNum(this.cboEmpresa.GetValue()) <= 0) {
            MostrarAlerta("Informe a empresa");
            return false;
        }
        return true;
    };
    R_AgProfi.prototype.OnGridCellPrepared = function (s, e) {
        try {
            var name = "";
            if (e.column && e.column) {
                name = e.column.name;
            }
            if (e.rowType == "data" && e.data) {
                if (name.substring(0, 26).toLowerCase() == "botaotemplate_profissional") {
                    var cor = e.data[replaceAllNoCase(name, "botaotemplate_", "")];
                    var dadosAtendimento = cor.split("|")[3];
                    cor = cor.split("|")[0];
                    if (!String.IsNullOrWhiteSpace(cor)) {
                        e.cellElement.css("background-color", cor);
                        e.cellElement.css("color", cor);
                        e.cellElement.addClass("botaoFull");
                        if (!String.IsNullOrWhiteSpace(dadosAtendimento)) {
                            $(e.cellElement).find("input").attr("title", dadosAtendimento);
                            $(e.cellElement).find("input").attr("value", dadosAtendimento);
                            $(e.cellElement).find("input").css("color", "black");
                        }
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgProfi.prototype.OnGridClicouBotao = function (s, e) {
        var _this = this;
        try {
            if (String.IsNullOrWhiteSpace(e.commandName)) {
                return;
            }
            var horaAtendimento = e.data['Horario_Atendimento'];
            this.codEmpresa = ("" + e.data['Codigo_Empresa']).CNum();
            if (e.commandName.substring(0, 13).toLowerCase() == "profissional|") {
                var valorCampo = "" + e.data[e.commandName];
                var dadosProfissional = e.commandName.split("|")[1]; //obtem os dados do profissional (Formato Codigo-Nome)
                var dataAte = e.commandName.split("|")[1]; //obtem os dados do profissional (Formato Codigo-Nome)
                this.codProfissional = CNum(dadosProfissional.split("-")[0]); //Obtém o código do profissional
                this.dataAtendimento = ("" + e.commandName.split("|")[2]);
                var atendimentos = valorCampo.split("|")[1];
                var disponivel = valorCampo.split("|")[2].CNum();
                if (!String.IsNullOrWhiteSpace(atendimentos)) {
                    var atendimentosArray = atendimentos.split(",");
                    this.lstHistAtendimentos.RemoverTodosItens();
                    atendimentosArray.forEach(function (q) {
                        var param = {
                            codAtendimento: q.CNum()
                        };
                        var historico = _this.ExecutarFuncaoServerSideSynch("HistoricoAnimal", param);
                        if (historico) {
                            _this.lstHistAtendimentos.AdicionarItem(q + " - " + historico.Cliente + " - " + historico.Hora_Servico, q.CNum().toString());
                        }
                    });
                    if (this.lstHistAtendimentos) {
                        adicionarEventoJQuery(this.lstHistAtendimentos.RadioButtonList, "change", this.OnLstHistAtendimentoChange, this);
                    }
                    this.lstHistAtendimentos.LimparSelecao();
                    this.lstHistAtendimentos.SetValue(atendimentosArray[0]);
                    this.CarregarHistoricoAtendimento(atendimentosArray[0].CNum(), false);
                }
                else if (disponivel) {
                    this.AbrirNovoAtendimento(this.dataAtendimento, horaAtendimento, this.codProfissional, this.codEmpresa, false);
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
    R_AgProfi.prototype.AbrirNovoAtendimento = function (dataAtendimento, horaAtendimento, codProfissional, codEmpresa, isEncaixe) {
        var parametros = [];
        parametros.push("Data_Atendimento=" + dataAtendimento);
        parametros.push("Horario_Atendimento=" + horaAtendimento);
        parametros.push("CodProfissional=" + codProfissional);
        parametros.push("codEmpresa=" + codEmpresa);
        if (this.txtPet.TextBoxAnimal.GetText().CNum() > 0) {
            parametros.push("codAnimal=" + this.txtPet.TextBoxAnimal.GetText().CNum());
        }
        else if (this.txtPet.TextBoxProprietario.GetText().CNum() > 0) {
            parametros.push("codProprietario=" + this.txtPet.TextBoxProprietario.GetText().CNum());
        }
        parametros.push("isAgendaConsolidada=S");
        if (isEncaixe)
            parametros.push("isEncaixe=S");
        this.dlgTelaModal.AbrirTelaModal(formataURLRelativa(URLTela.CadastroDeAtendimento), parametros, this.NOVO_ATENDIMENTO);
    };
    R_AgProfi.prototype.AbrirAtendimento = function (codAtendimento) {
        var parametros = [];
        parametros.push("codigo=" + codAtendimento);
        this.dlgTelaModal.AbrirTelaModal(formataURLRelativa(URLTela.CadastroDeAtendimento), parametros, "");
    };
    R_AgProfi.prototype.OnPesquisouCliente = function (s, e) {
        this.ConfigurarGrade();
        this.Grid.PreencherGrid([]);
    };
    R_AgProfi.prototype.OnRetornouModalAtendimento = function (s, e) {
        try {
            if (e.IDComponenteProcura == this.NOVO_ATENDIMENTO) {
                if (e.ParametrosObject && e.ParametrosObject.codigo) {
                    var param = {
                        codAtendimento: e.ParametrosObject.codigo.CNum()
                    };
                    var historico = this.ExecutarFuncaoServerSideSynch("HistoricoAnimal", param);
                    if (!historico) {
                        return;
                    }
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
    R_AgProfi.prototype.CarregarHistoricoAtendimento = function (codAtendimento, isProximoAtendimento) {
        try {
            if (codAtendimento <= 0) {
                MostrarAlerta("Informe um atendimento para consultar");
                return;
            }
            var parametros;
            parametros = {
                codAtendimento: codAtendimento
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
            if (retorno.Cliente) {
                this.lblHistProprietario.Text = retorno.Cliente;
            }
            else {
                this.lblHistProprietario.Text = "";
            }
            if (retorno.Animal) {
                this.lblHistAnimal.Text = retorno.Animal;
            }
            else {
                this.lblHistAnimal.Text = "";
            }
            if (retorno.Venda && retorno.Venda > 0) {
                this.lblHistVenda.Visible = true;
                this.lblHistVenda.Text = "Venda: " + retorno.Venda;
            }
            else {
                this.lblHistVenda.Visible = false;
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
            if (!isProximoAtendimento)
                this.dlgHistorico.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgProfi.prototype.OnClickBtnEncaixe = function (s, e) {
        e.processOnServer = false;
        try {
            if (!this.dataAtendimento) {
                MostrarAlerta("Data de atendimento inválida");
                return;
            }
            this.AbrirNovoAtendimento(this.dataAtendimento, this.grdHistorico.DataSource[0].Hora_Servico, this.codProfissional, this.codEmpresa, true);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgProfi.prototype.OnFechouHistorico = function (s, e) {
        try {
            if (this.lstHistAtendimentos)
                this.lstHistAtendimentos.RemoverTodosItens();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgProfi.prototype.OnLstHistAtendimentoChange = function () {
        try {
            if (this.lstHistAtendimentos) {
                if (this.lstHistAtendimentos.GetValue()) {
                    this.CarregarHistoricoAtendimento(this.lstHistAtendimentos.GetValue().CNum(), true);
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgProfi.prototype.OnClickBotaoFecharHistorico = function (s, e) {
        try {
            e.processOnServer = false;
            this.dlgHistorico.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgProfi.prototype.OnClickBotaoCadastroAtividade = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.lblHistAtendimento.Text.CNum() <= 0) {
                return;
            }
            this.AbrirAtendimento(this.lblHistAtendimento.Text.CNum());
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgProfi.prototype.OnClickCancelarExclusao = function (s, e) {
        e.processOnServer = false;
        this.dlgMotivoExclusao.Hide();
    };
    R_AgProfi.prototype.OnClickCancelarCancelamento = function (s, e) {
        e.processOnServer = false;
        this.dlgMotivoCancelamento.Hide();
    };
    R_AgProfi.prototype.OnClickConfirmarExclusao = function (s, e) {
        e.processOnServer = false;
        if (String.IsNullOrWhiteSpace(this.txtMotivoExclusao.GetText())) {
            MostrarAlerta("Informe o motivo da exclusão!");
            this.txtMotivoExclusao.Focus();
            return;
        }
        this.dlgMotivoExclusao.Hide();
        this.respondeuMotivoExclusao = true;
        try {
            if (this.lblHistAtendimento.Text.CNum() <= 0) {
                return;
            }
            var parametros = {
                atendimento: this.lblHistAtendimento.Text.CNum(),
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
    R_AgProfi.prototype.OnClickConfirmarCancelamento = function (s, e) {
        e.processOnServer = false;
        try {
            if (this.lblHistAtendimento.Text.CNum() <= 0)
                return;
            if (String.IsNullOrWhiteSpace(this.txtMotivoCancelamento.GetText())) {
                MostrarAlerta("Informe o motivo do cancelamento!");
                this.txtMotivoCancelamento.Focus();
                return;
            }
            MsgBoxJS("Deseja realmente cancelar o atendimento <b>" + this.lblHistAtendimento.Text + "</b>?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespostaCancelarAtendimento, this));
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgProfi.prototype.OnDepoisExcluir = function (result) {
        this.dlgHistorico.Hide();
        this.GerarGrade();
    };
    R_AgProfi.prototype.OnRespostaCancelarAtendimento = function (result) {
        if (result.Resultado == MsgBoxResult.No)
            return;
        this.dlgMotivoCancelamento.Hide();
        this.respondeuMotivoCancelamento = true;
        try {
            var parametros = {
                atendimento: this.lblHistAtendimento.Text.CNum(),
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado,
                motivo: this.txtMotivoCancelamento.GetText()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ExcluirAgendamento", parametros);
            MsgBoxJS("Atendimento cancelado com sucesso", MsgBoxOptions.OkOnly, null);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AgProfi.prototype.OnClickBotaoExcluir = function (s, e) {
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
    R_AgProfi.prototype.OnClickBotaoCancelamento = function (s, e) {
        e.processOnServer = false;
        if (this.respondeuMotivoCancelamento) {
            this.respondeuMotivoCancelamento = false;
            return true;
        }
        else {
            this.txtMotivoCancelamento.SetText("");
            this.dlgMotivoCancelamento.Show();
            return false;
        }
    };
    return R_AgProfi;
}(MouraPageRelacaoAngular));
var r_AgProfi = new R_AgProfi();
//# sourceMappingURL=R_AgProfi.js.map