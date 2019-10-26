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
var G_PISCOF_Angular = /** @class */ (function (_super) {
    __extends(G_PISCOF_Angular, _super);
    function G_PISCOF_Angular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(G_PISCOF_Angular.prototype, "grdPeriodo", {
        get: function () {
            return window['grdPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "grdCC", {
        get: function () {
            return window['grdCC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "txtMesAno", {
        get: function () {
            return window['txtMesAno_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "btnExportar", {
        get: function () {
            return window['btnExportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "btnDownload", {
        get: function () {
            return window['btnDownload_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "cboTipoApuracaoCC", {
        get: function () {
            return window['cboTipoApuracaoCC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "cboCstCC", {
        get: function () {
            return window['cboCstCC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "txtCodigoCC", {
        get: function () {
            return window['txtCodigoCC_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "Conta", {
        get: function () {
            var that = this.GetScope()["Conta"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Conta"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "Contas", {
        get: function () {
            return this.GetScope()["Contas"];
        },
        set: function (value) {
            this.GetScope()["Contas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "Periodo", {
        get: function () {
            var that = this.GetScope()["Periodo"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Periodo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "Periodos", {
        get: function () {
            return this.GetScope()["Periodos"];
        },
        set: function (value) {
            this.GetScope()["Periodos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "cboSituacao", {
        get: function () {
            return window['cboSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "cboMotivo", {
        get: function () {
            return window['cboMotivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "cboMeses", {
        get: function () {
            return window['cboMeses_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "chkSemMovimento", {
        get: function () {
            return window['chkSemMovimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "chkPresumidoConsolidado", {
        get: function () {
            return window['chkPresumidoConsolidado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "chkEnviarSemCredito", {
        get: function () {
            return window['chkEnviarSemCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "mdValidacao", {
        get: function () {
            return window['mdValidacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "txtValidacao", {
        get: function () {
            return window['txtValidacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "cboTipoArq", {
        get: function () {
            return window['cboTipoArq_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "caminhoSessao", {
        get: function () {
            var that = this.GetScope()["caminhoSessao"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["caminhoSessao"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_PISCOF_Angular.prototype, "arq", {
        get: function () {
            var that = this.GetScope()["arq"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["arq"] = value;
        },
        enumerable: true,
        configurable: true
    });
    G_PISCOF_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGradeContabil();
        this.OnCheckSemMovimentoChange();
    };
    G_PISCOF_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grdCC) {
            adicionarEventoMoura(this.grdCC.Grid.SelecionouLinha, this.OnGrdSelecionouItem, this);
            adicionarEventoMoura(this.grdCC.Validando, this.OnValidando, this);
            adicionarEventoMoura(this.grdCC.ItemAdicionado, this.GravarCC, this);
            adicionarEventoMoura(this.grdCC.ItemExcluido, this.ExcluirCC, this);
        }
        if (this.grdPeriodo) {
            adicionarEventoMoura(this.grdPeriodo.Validando, this.OnValidandoPeriodo, this);
            adicionarEventoMoura(this.grdPeriodo.ItemAdicionado, this.PeriodoAdicionado, this);
        }
        if (this.txtCodigoCC) {
            adicionarEventoJQuery(this.txtCodigoCC.Textbox, "blur", this.MudouTipo, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.PreencherGradeContabil, this);
        }
        if (this.btnExportar) {
            adicionarEventoMoura(this.btnExportar.Click, this.OnExportarClick, this);
        }
        if (this.chkSemMovimento) {
            adicionarEventoMoura(this.chkSemMovimento.CheckChanged, this.OnCheckSemMovimentoChange, this);
        }
    };
    G_PISCOF_Angular.prototype.MudouTipo = function () {
        var parametros;
        if (this.txtCodigoCC.GetText().CNum() > 0) {
            try {
                parametros = {
                    codigo: this.txtCodigoCC.GetText().CNum(),
                    empresa: this.cboEmpresa.GetValue()
                };
                var result = this.ExecutarFuncaoServerSideSynch("GetbyCodigo", parametros);
                if (result) {
                    this.cboTipoApuracaoCC.SetValue(result.Tipo);
                    this.Conta.Tipo = result.Tipo;
                    this.Conta.Cst = result.Cst;
                    this.Conta.Aliquota = result.Aliquota;
                    this.Conta.Conta_Contabil = result.Conta_Contabil;
                    this.RefreshAngular();
                }
                else {
                    MostrarAlerta("Registro não encontrado(a) ou inativo(a)");
                    this.LimparCamposCC();
                    return;
                }
            }
            catch (ex) {
                LogarException(ex);
            }
        }
        else {
            MostrarAlerta("Registro não encontrado(a) ou inativo(a)");
            this.LimparCamposCC();
            return;
        }
    };
    G_PISCOF_Angular.prototype.OnCheckSemMovimentoChange = function () {
        if (this.chkSemMovimento.Checked) {
            this.cboMotivo.Enabled = true;
            this.cboMeses.Enabled = true;
            this.grdPeriodo.Grid.Enabled = true;
        }
        else {
            this.cboMotivo.Enabled = false;
            this.cboMeses.Enabled = false;
            this.grdPeriodo.Grid.Enabled = false;
        }
    };
    G_PISCOF_Angular.prototype.GravarCC = function (s, e) {
        if (this.Contas.length >= 0) {
            var parametros = {
                entity: this.Contas,
                Tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GravarCC", parametros);
            if (retorno) {
                this.PreencherGradeContabil();
                this.LimparCamposCC();
            }
        }
    };
    G_PISCOF_Angular.prototype.ExcluirCC = function (s, e) {
        if (this.Contas.length >= 0) {
            var parametros = {
                cod: e.item.Codigo,
                Tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ExcluirCC", parametros);
            if (retorno) {
                this.LimparCamposCC();
                this.RefreshAngular();
            }
        }
    };
    G_PISCOF_Angular.prototype.LimparCamposCC = function () {
        this.Conta.Codigo = undefined;
        this.cboCstCC.SetSelectedIndex(-1);
        this.Conta.Tipo = undefined;
        this.Conta.Cst = undefined;
        this.Conta.Aliquota = undefined;
        this.Conta.Conta_Contabil = undefined;
        this.RefreshAngular();
    };
    G_PISCOF_Angular.prototype.OnValidando = function (s, e) {
        var x;
        var parametros;
        var itens = this.grdCC.Grid.DataSource;
        if (!itens) {
            itens = [];
        }
        for (x = 0; x < itens.length; x++) {
            if ((itens[x].Tipo == e.item.Tipo) && (itens[x].CST == e.item.Cst) && (e.item.Aliquota == e.item.Aliquota)) {
                MostrarAlerta("Já existe um registro salvo para essa combinação de CST, Tipo e Alíquota para a empresa selecionada! Código do registro: " + itens[x].Codigo);
                e.cancelar = true;
                return;
            }
        }
        if (e.item.Tipo_Format != undefined) {
            e.item.Tipo = e.item.Tipo_Format;
        }
        if (e.item.Tipo == undefined) {
            MostrarAlerta("Preencha corretamente o campo: Tipo");
            e.cancelar = true;
            this.cboTipoApuracaoCC.Focus();
            return;
        }
        if (e.item.Cst == undefined) {
            MostrarAlerta("Preencha corretamente o campo: CST");
            e.cancelar = true;
            this.cboCstCC.Focus();
            return;
        }
        if (e.item.Conta_Contabil == undefined || e.item.Conta_Contabil < 0) {
            MostrarAlerta("Preencha corretamente o campo: Conta Contábil");
            e.cancelar = true;
            this.cboCstCC.Focus();
            return;
        }
        e.item.Empresa = this.cboEmpresa.GetValue();
    };
    G_PISCOF_Angular.prototype.OnValidandoPeriodo = function (s, e) {
        var x;
        var parametros;
        var itens = this.grdPeriodo.Grid.DataSource;
        var ultimo = 0;
        if (!itens) {
            itens = [];
        }
        if (this.chkSemMovimento.Checked) {
            for (x = 0; x < itens.length; x++) {
                if (itens[x].Codigo > ultimo) {
                    ultimo = itens[x].Codigo;
                }
                if ((itens[x].Mes == e.item.Mes)) {
                    MostrarAlerta("Já existe um período adicionado para esse mês");
                    e.cancelar = true;
                    return;
                }
            }
            if (e.item.Motivo == undefined) {
                MostrarAlerta("Preencha corretamente o campo: Motivo");
                e.cancelar = true;
                this.cboMotivo.Focus();
                return;
            }
            if (e.item.Mes == undefined) {
                MostrarAlerta("Preencha corretamente o campo: Meses");
                e.cancelar = true;
                this.cboMeses.Focus();
                return;
            }
            e.item.Codigo = ultimo + 1;
            this.Periodo.Motivo_Descricao = this.cboMotivo.GetText();
            this.Periodo.Mes_Descricao = this.cboMeses.GetText();
        }
        else {
            e.cancelar = true;
            return;
        }
    };
    G_PISCOF_Angular.prototype.PeriodoAdicionado = function (s, e) {
        MostrarMensagem("Período adicionado com sucesso!");
    };
    G_PISCOF_Angular.prototype.OnExportarClick = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        var parametros;
        var enviarSemCredito;
        var gerarConsolidado;
        var semMovimento;
        var indSituacao;
        if (this.chkEnviarSemCredito.Checked) {
            enviarSemCredito = true;
        }
        else {
            enviarSemCredito = false;
        }
        if (this.chkPresumidoConsolidado.Checked) {
            gerarConsolidado = true;
        }
        else {
            gerarConsolidado = false;
        }
        if (this.chkSemMovimento.Checked) {
            semMovimento = true;
        }
        else {
            semMovimento = false;
        }
        var date;
        date = new Date();
        if (this.txtMesAno.Date > date) {
            MostrarAlerta("Data inválida. Não é possível gerar o SPED PIS/COFINS com mês de apuração superior ao mês da data atual.");
            return;
        }
        if (this.txtMesAno.Date == undefined) {
            MostrarAlerta("Informe o período de escrituração do SPED antes de realizar a exportação do arquivo.");
        }
        var elemento = this.cboSituacao.GetText();
        indSituacao = elemento.substring(0, 1);
        if (semMovimento && (this.Contas == undefined || this.Contas.length == 0)) {
            MostrarAlerta("Com a opção 'EFD PIS/COFINS sem movimento' marcada é necessário adicionar ao menos um mês e motivo aos períodos sem movimento!");
            this.cboMotivo.Focus();
            return;
        }
        var string;
        string = "Gerar Arquivo EFD PIS/ COFINS";
        abrirEspera();
        parametros = {
            periodosSemMovimento: this.Periodos,
            parametrosContaContabil: this.Contas,
            enviarSemCredito: enviarSemCredito,
            gerarConsolidado: gerarConsolidado,
            semMovimento: semMovimento,
            indSituacao: indSituacao,
            empresaCod: this.cboEmpresa.GetValue(),
            mesAno: this.txtMesAno.Date,
            TipoArquivo: this.cboTipoArq.GetValue()
        };
        this.ExecutarFuncaoServerSideAsynch("Exportar", parametros, function (d) {
            try {
                var result = GetRetornoAJAX(d);
                if (result) {
                    _this.QueryString;
                    if (result.caminhoSessao) {
                        _this.caminhoSessao = result.caminhoSessao;
                        _this.arq = result.arq;
                    }
                    if (result.Validar) {
                        _this.mdValidacao.Show();
                        _this.txtValidacao.SetText(result.Validar);
                        fecharEspera();
                    }
                    if (result.Sucesso) {
                        MostrarMensagem(string + "</br>" + result.Sucesso);
                        fecharEspera();
                        return;
                    }
                    if (result.erroNFSe) {
                        MostrarError(string + "</br>" + result.erroNFSe);
                        fecharEspera();
                        return;
                    }
                    fecharEspera();
                }
                else {
                    fecharEspera();
                }
            }
            catch (e) {
                LogarException(e);
                fecharEspera();
            }
        }, function (erro) {
            fecharEspera();
            LogarException(erro);
        }, this);
    };
    G_PISCOF_Angular.prototype.OnGrdSelecionouItem = function (s, e) {
        if (e.data.Tipo_Format == "PIS") {
            this.Conta.Tipo_Format = 1;
        }
        else if (e.data.Tipo_Format == "COFINS") {
            this.Conta.Tipo_Format = 2;
        }
        else {
            this.Conta.Tipo_Format = 0;
        }
    };
    G_PISCOF_Angular.prototype.PreencherGradeContabil = function () {
        var parametros = {
            codEmpresa: this.cboEmpresa.GetValue()
        };
        var Itens = this.ExecutarFuncaoServerSideSynch("CarregarGradeCC", parametros);
        if (Itens) {
            this.Contas = Itens;
            this.RefreshAngular();
        }
    };
    return G_PISCOF_Angular;
}(MouraPageAngular));
var g_PISCOF_Angular = new G_PISCOF_Angular();
//# sourceMappingURL=G_PISCOF_Angular.js.map