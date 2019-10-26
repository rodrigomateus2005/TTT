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
var BIAtvConsole = /** @class */ (function (_super) {
    __extends(BIAtvConsole, _super);
    function BIAtvConsole() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dadosGrade = [];
        return _this;
    }
    Object.defineProperty(BIAtvConsole.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIAtvConsole.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIAtvConsole.prototype, "grdBI", {
        get: function () {
            return window['grdBI_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIAtvConsole.prototype, "chkConsiderarPosAtendimento", {
        get: function () {
            return window['chkConsiderarPosAtendimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIAtvConsole.prototype, "mdDetalhe", {
        get: function () {
            return window['mdDetalhe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIAtvConsole.prototype, "grdDetalhe", {
        get: function () {
            return window['grdDetalhe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIAtvConsole.prototype, "mdInf", {
        get: function () {
            return window['mdInf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIAtvConsole.prototype, "DadosAtividade", {
        get: function () {
            if (this.GetScope()) {
                return this.GetScope().DadosAtividade;
            }
            else {
                return null;
            }
        },
        set: function (value) {
            if (this.GetScope()) {
                this.GetScope()['DadosAtividade'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    BIAtvConsole.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.DadosAtividade = {};
    };
    BIAtvConsole.prototype.Init = function () {
        _super.prototype.Init.call(this);
        var dataInicial = new Date();
        dataInicial = new Date(dataInicial.getFullYear(), 0, 1);
        this.txtPeriodo.textBoxCalendarioInicio.SetDate(dataInicial);
        var dataFinal = new Date();
        this.txtPeriodo.textBoxCalendarioFim.SetDate(dataFinal);
        //this.txtPeriodo.Iniciar();
        if (this.grdBI) {
            adicionarEventoMoura(this.grdBI.CellClick, this.OnCellClick, this);
        }
        if (this.mdDetalhe) {
            adicionarEventoMoura(this.mdDetalhe.Fechou, this.OnFechouModal, this);
        }
        if (this.grdDetalhe) {
            adicionarEventoMoura(this.grdDetalhe.SelecionouLinha, this.SelecionouLinhaGrdAtividade, this);
        }
        this.CriarColunasGrade();
    };
    BIAtvConsole.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.dadosGrade = [];
        this.setDataSourceGrade();
        this.DadosAtividade = {};
    };
    BIAtvConsole.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        this.gerarDados();
    };
    BIAtvConsole.prototype.CriarColunasGrade = function () {
        this.grdBI.LimparGrid(true);
        this.CriarColunasAtividades();
    };
    BIAtvConsole.prototype.CriarColunasAtividades = function () {
        var colunas = [
            { caption: "Tipo de Atividade", dataField: "Tipo_Atividade", area: "row" },
            { dataField: "Data_Cadastro", caption: "Data de Cadastro", dataType: "date", area: "column", groupName: "DataCadastro" },
            { groupName: "DataCadastro", groupInterval: "year", groupIndex: 0, caption: "Ano" },
            { groupName: "DataCadastro", groupInterval: "month", groupIndex: 1, caption: "Mês" },
            { groupName: "DataCadastro", groupInterval: "day", groupIndex: 2, caption: "Dia" },
            { dataField: "Data_Termino", caption: "Data Término", dataType: "date", area: undefined, groupName: "DataTermino" },
            { groupName: "DataTermino", groupInterval: "year", groupIndex: 0, caption: "Ano" },
            { groupName: "DataTermino", groupInterval: "month", groupIndex: 1, caption: "Mês" },
            { groupName: "DataTermino", groupInterval: "day", groupIndex: 2, caption: "Dia" },
            { caption: "Situação Atual", dataField: "Situacao_Atual", area: "filter" },
            { caption: "Cliente", dataField: "Cliente", area: "filter" },
            { caption: "Módulo", dataField: "Modulo", area: undefined },
            { caption: "Responsável Cadastro", dataField: "Responsavel_Cadastro", area: "filter" },
            { caption: "Responsável Atual", dataField: "Responsavel_Atual", area: "filter" },
            { caption: "Grupo Atendimento", dataField: "Grupo_Atendimento", area: "filter" },
            { caption: "Segmento Cliente", dataField: "Segmento_Cliente", area: "filter" },
            { caption: "Período - Hora", dataField: "Hora_Cadastro_Meia", area: "filter" },
            { caption: "Cidade Cliente", dataField: "Cidade_Cliente", area: undefined },
            { caption: "Estado Cliente", dataField: "Estado_Cliente", area: undefined },
            { caption: "Cód. Atividade", dataField: "Codigo_Atividade", area: undefined },
            { caption: "Hora Cadastro", dataField: "Hora_Cadastro", area: undefined },
            {
                caption: "Qtde Atividades",
                dataField: "Quantidade",
                dataType: "number",
                summaryType: "sum",
                customizeText: this.grdBI.FuncaoFormataNumeroGrid(0),
                area: "data",
                isMeasure: true
            },
            {
                caption: "% Participação",
                dataField: "Quantidade",
                dataType: "number",
                summaryType: "sum",
                summaryDisplayMode: "percentOfGrandTotal",
                format: { type: 'percent', precision: 2 },
                area: "data",
                isMeasure: true
            },
        ];
        this.grdBI.IniciarGrade(colunas);
    };
    BIAtvConsole.prototype.gerarDados = function () {
        var _this = this;
        if (!this.txtPeriodo.textBoxCalendarioInicio.GetDate()) {
            MostrarAlerta("Informe a Data Inicial");
            return;
        }
        if (!this.txtPeriodo.textBoxCalendarioFim.GetDate()) {
            MostrarAlerta("Informe a Data Final");
            return;
        }
        var parametros = {
            dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
            dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
            codUsuario: ValoresSismoura.UsuarioLogado,
            considerarPosAtendimento: this.chkConsiderarPosAtendimento.Checked
        };
        this.dadosGrade = [];
        this.setDataSourceGrade();
        abrirEspera("Obtendo os registros do banco de dados...");
        this.ExecutarFuncaoServerSideAsynch("GetDados", parametros, function (d) {
            try {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                var idLista = retorno.idLista;
                var paginas = retorno.Paginas;
                if (!String.IsNullOrWhiteSpace(idLista)) {
                    _this.DownloadDados(idLista, paginas, 1);
                }
                //this.grdBI.PreencherGrade(retorno);   
                //this.accCadastro.SetExpanded(false);
            }
            catch (ex) {
                fecharEspera();
                LogarException(ex);
            }
        }, function (erro) {
            fecharEspera();
            LogarException(erro);
        }, this);
    };
    BIAtvConsole.prototype.DownloadDados = function (idLista, paginas, paginaAtual) {
        var _this = this;
        try {
            var parametros = {
                idLista: idLista,
            };
            if (paginaAtual > paginas) {
                paginaAtual = paginas;
            }
            abrirEspera("Fazendo download dos registros. Página " + paginaAtual + " de " + paginas);
            this.ExecutarFuncaoServerSideAsynch("GetPagina", parametros, function (d) {
                var _a;
                try {
                    var retorno = GetRetornoAJAX(d);
                    if (retorno && retorno.length > 0) {
                        (_a = _this.dadosGrade).push.apply(_a, retorno);
                        _this.DownloadDados(idLista, paginas, paginaAtual + 1);
                    }
                    else {
                        fecharEspera();
                        _this.setDataSourceGrade();
                        _this.AccordionFiltros.SetExpanded(false);
                    }
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
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
    BIAtvConsole.prototype.setDataSourceGrade = function () {
        this.grdBI.PreencherGrade(this.dadosGrade);
    };
    BIAtvConsole.prototype.OnCellClick = function (s, e) {
        var _this = this;
        if (!String.IsNullOrWhiteSpace(e.area) && e.area == "data") {
            var pivotGridDataSource = e.component.getDataSource();
            var drillDownDataSource = pivotGridDataSource.createDrillDownDataSource(e.cell);
            this.grdDetalhe.SetDrillDownDataSource(drillDownDataSource);
            this.mdDetalhe.Show();
            setTimeout(function () {
                _this.grdDetalhe.Refresh();
            }, 200);
        }
    };
    BIAtvConsole.prototype.FecharDetalhe = function () {
        this.mdDetalhe.Hide();
    };
    BIAtvConsole.prototype.OnFechouModal = function (s, e) {
        this.grdDetalhe.PreencherGrid([]);
    };
    BIAtvConsole.prototype.SelecionouLinhaGrdAtividade = function (s, e) {
        try {
            this.DadosAtividade = {};
            this.DadosAtividade.lblAtividadeInf = e.data["Codigo_Atividade"];
            this.DadosAtividade.lblClienteInf = e.data["Cliente"];
            var parametros = void 0;
            parametros = {
                codAtividade: CNum(e.data["Codigo_Atividade"]),
                retornarHistorico: true
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetDadosAtividade", parametros);
            this.DadosAtividade.lblUsuarioCadastrado = retorno.Usuario_Cadastro_Nome;
            this.DadosAtividade.lblUsuarioAtual = retorno.Usuario_Atual_Nome;
            this.DadosAtividade.lblSituacaoAtual = retorno.Situacao_Atividade_Descricao;
            this.DadosAtividade.lblModuloInf = retorno.Modulo;
            this.DadosAtividade.lblDataCadInf = ConvertToDate(retorno.Data_Cadastro).FormataDataHora();
            this.DadosAtividade.HistoricoAtividade = retorno.Historico;
            this.RefreshAngular();
            this.mdInf.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    BIAtvConsole.prototype.OnClickFecharModalDetalheAtividade = function () {
        this.mdInf.Hide();
    };
    return BIAtvConsole;
}(MouraPageRelacaoAngular));
var bIAtvConsole = new BIAtvConsole();
//# sourceMappingURL=BIAtvConsole.js.map