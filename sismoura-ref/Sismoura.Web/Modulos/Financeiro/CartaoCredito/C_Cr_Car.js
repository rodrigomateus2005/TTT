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
var C_Cr_Car = /** @class */ (function (_super) {
    __extends(C_Cr_Car, _super);
    function C_Cr_Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Cr_Car.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cr_Car.prototype, "FiltroModal", {
        get: function () {
            if (!this.GetScope()['FiltroModal']) {
                this.GetScope()['FiltroModal'] = {};
            }
            return this.GetScope()['FiltroModal'];
        },
        set: function (value) {
            this.GetScope()['FiltroModal'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cr_Car.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cr_Car.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cr_Car.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cr_Car.prototype, "lstCartao", {
        get: function () {
            return window['lstCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cr_Car.prototype, "cboCartao", {
        get: function () {
            return window['cboCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cr_Car.prototype, "rblTipoCartao", {
        get: function () {
            return window['rblTipoCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cr_Car.prototype, "mdLancamento", {
        get: function () {
            return window['mdLancamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cr_Car.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cr_Car.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cr_Car.prototype, "btnOK", {
        get: function () {
            return window['btnOK_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cr_Car.prototype, "cboSituacao", {
        get: function () {
            return window['cboSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cr_Car.prototype, "btnMdOK", {
        get: function () {
            return window['btnMdOK_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cr_Car.prototype, "rblTipo", {
        get: function () {
            return window['rblTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Cr_Car.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.mdLancamento.Hide();
        this.LimparCampos();
    };
    C_Cr_Car.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.TipoPeriodo = "V";
        this.Filtro.TipoCartao = "C";
        this.Filtro.SituacaoCartao = -1;
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.rblTipoCartao.SetValue("C");
        this.Filtro.Cartao = "C";
        this.PreencheListaCartao();
        this.lstCartao.CheckBoxList.prop("checked", true);
        this.Filtro.Situacao = -1;
        this.LimparCamposModal();
        this.Grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    C_Cr_Car.prototype.LimparCamposModal = function () {
        this.FiltroModal.Data = this.DataServidor();
        this.FiltroModal.ContaContabil = "";
        this.FiltroModal.DocumentoBancario = "";
        this.FiltroModal.DocumentoMercantil = "";
        this.FiltroModal.Observacao = "";
        this.cboContaCorrente.Limpar();
        this.FiltroModal.DocumentoBancarioCbo = -1;
        this.FiltroModal.DocumentoMercantilCbo = -1;
        this.FiltroModal.Tipo = "1";
        this.RefreshAngular();
    };
    C_Cr_Car.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.lstEmpresa) {
            adicionarEventoMoura(this.lstEmpresa.SelectionChanged, this.lstEmpresa_SelectedIndexChanged, this);
        }
        if (this.rblTipoCartao) {
            adicionarEventoMoura(this.rblTipoCartao.SelectionChanged, this.rblTipoCartao_SelectionChanged, this);
        }
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.CellPrepared, this.RowPrepared, this);
            adicionarEventoMoura(this.Grid.CalculateCustomSummary, this.CalculateCustomSummary, this);
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.Grid_SelecionouLinha, this);
        }
        if (this.cboContaCorrente) {
            adicionarEventoDevExpress(this.cboContaCorrente.Combo.SelectedIndexChanged, this.cboContaCorrente_SelectedIndexChanged, this);
        }
        if (this.btnOK) {
            adicionarEventoMoura(this.btnOK.Click, this.btnOK_Click, this);
        }
        if (this.btnMdOK) {
            adicionarEventoMoura(this.btnMdOK.Click, this.btnMdOK_Click, this);
        }
    };
    C_Cr_Car.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                situacao: this.Filtro.SituacaoCartao,
                cartao: this.Filtro.Cartao,
                cartoes: this.lstCartao.GetValues().join(","),
                tipoData: this.Filtro.TipoPeriodo,
                tipoCartao: this.Filtro.TipoCartao,
                empresa: this.lstEmpresa.GetValues().join(",")
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                var retorno = GetRetornoAJAX(d);
                _this.Grid.deselectAll();
                _this.Grid.PreencherGrid(retorno);
                _this.accCadastro.SetExpanded(false);
                fecharEspera();
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
    C_Cr_Car.prototype.PreencheListaCartao = function () {
        var _this = this;
        var parametros;
        if (this.rblTipoCartao.GetValue() == "C") {
            try {
                parametros = {
                    empresas: this.lstEmpresa.GetValues().join(",")
                };
                if (this.lstEmpresa.GetValues().length === 0) {
                    this.lstCartao.RemoverTodosItens();
                    return;
                }
                abrirEspera("Aguarde, carregando cartões");
                this.ExecutarFuncaoServerSideAsynch("PreencherListaCartao", parametros, function (d) {
                    var itens = GetRetornoAJAX(d);
                    if (_this.lstEmpresa) {
                        _this.lstCartao.RemoverTodosItens();
                        if (itens.length <= 4000) {
                            for (var x = 0; x < itens.length; x++) {
                                _this.lstCartao.AdicionarItem(itens[x].Descricao, itens[x].Codigo);
                            }
                        }
                        else {
                            MostrarAlerta("Filtre melhor a procura!");
                            //this.lstEmpresa.SelecionarEmpresaPadraoUsuario();  
                            _this.lstEmpresa.LimparSelecao();
                            fecharEspera();
                            return;
                        }
                    }
                    _this.lstCartao.Visible = true;
                    _this.cboCartao.Visible = false;
                    fecharEspera();
                }, function (erro) {
                    fecharEspera();
                    LogarException(erro);
                }, this);
                //var itens = this.ExecutarFuncaoServerSideSynch("PreencherListaCartao", parametros);
                //if (this.lstEmpresa) {
                //    this.lstCartao.RemoverTodosItens();
                //    for (var x = 0; x < itens.length; x++) {
                //        this.lstCartao.AdicionarItem(itens[x].Descricao, itens[x].Codigo);
                //    }
                //}
                //this.lstCartao.Visible = true;
                //this.cboCartao.Visible = false;
            }
            catch (ex) {
                LogarException(ex);
            }
        }
        else {
            this.lstCartao.Visible = false;
            this.cboCartao.Visible = true;
        }
    };
    C_Cr_Car.prototype.lstEmpresa_SelectedIndexChanged = function (s, e) {
        if (this.lstEmpresa.GetAllValues() != []) {
            this.PreencheListaCartao();
        }
    };
    C_Cr_Car.prototype.rblTipoCartao_SelectionChanged = function (s, e) {
        this.PreencheListaCartao();
    };
    C_Cr_Car.prototype.validarCamposObrigatoriosModal = function () {
        var retorno = true;
        var mensagem = "Preencha o campo corretamente: ";
        if (CNum(this.FiltroModal.DocumentoBancarioCbo) <= 0) {
            MostrarAlerta(mensagem += "Documento Bancário");
            retorno = false;
        }
        else if (CNum(this.FiltroModal.DocumentoMercantilCbo) <= 0) {
            MostrarAlerta(mensagem += "Documento Mercantil");
            retorno = false;
        }
        else if (CNum(this.FiltroModal.ContaContabil) <= 0) {
            MostrarAlerta(mensagem += "Conta Contábil");
            retorno = false;
        }
        return retorno;
    };
    C_Cr_Car.prototype.GerarLancamentoConfirmado = function () {
        var _this = this;
        var codigos = this.GetValoresRowsSelecionadas("Codigo");
        var mensagem = "";
        if (codigos != null && codigos.length <= 0) {
            MostrarMensagemCampoObrigatorio("situacao");
            return;
        }
        var parametros;
        try {
            parametros = {
                codigos: codigos,
                cartoes: this.GetValoresRowsSelecionadas("Cartao"),
                valores_final: this.GetValoresRowsSelecionadas("Valor_Final"),
                tipo: CNum(this.FiltroModal.Tipo),
                tela: ValoresSismoura.NomeTela,
                usuario: ValoresSismoura.UsuarioLogado,
                contaCorrenteCbo: this.cboContaCorrente.GetContaCorrente(),
                data: this.FiltroModal.Data,
                contaContabil: this.FiltroModal.ContaContabil,
                documentoMercantil: this.FiltroModal.DocumentoMercantil,
                documentoMercantilCbo: CNum(this.FiltroModal.DocumentoMercantilCbo),
                documentoBancarioCbo: CNum(this.FiltroModal.DocumentoBancarioCbo),
                documentoBancario: this.FiltroModal.DocumentoBancario,
                observacao: this.FiltroModal.Observacao
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarLancamentoConfirmado", parametros, function (d) {
                fecharEspera();
                mensagem = GetRetornoAJAX(d);
                if (CNum(mensagem.substring(0, 1)) > 0) {
                    MostrarMensagem("Lançamento " + mensagem + " gerado com sucesso.");
                    _this.mdLancamento.Hide();
                    _this.Grid.deselectAll();
                    _this.Grid.PreencherGrid(null);
                    _this.PreencherGrade();
                }
                else {
                    MostrarAlerta(mensagem);
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
    C_Cr_Car.prototype.ConfirmarContas = function () {
        var _this = this;
        var parametros;
        try {
            if (this.Filtro.Situacao == 0) {
                parametros = {
                    valores: this.GetValoresRowsSelecionadas("Codigo"),
                    situacao: this.Filtro.Situacao,
                    tela: ValoresSismoura.NomeTela,
                    usuario: ValoresSismoura.UsuarioLogado
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("ConfirmarContas", parametros, function (d) {
                    fecharEspera();
                    _this.PreencherGrade();
                }, function (erro) {
                    fecharEspera();
                    LogarException(erro);
                }, this);
            }
            else {
                this.LimparCamposModal();
                this.mdLancamento.Show();
            }
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    C_Cr_Car.prototype.RowPrepared = function (s, e) {
        try {
            if (e.rowType == "data") {
                var situacao = e.data["Situacao"];
                if (!String.IsNullOrWhiteSpace(situacao)) {
                    if (situacao == "1") {
                        e.cellElement.css("color", "red");
                    }
                }
                if (this.Grid.GetSelectedRowsData.filter(function (item) { return item.Codigo == e.data["Codigo"]; }).length > 0) {
                    e.cellElement.css("font-weight", "bold");
                }
                else {
                    e.cellElement.css("font-weight", "normal");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Cr_Car.prototype.cboContaCorrente_SelectedIndexChanged = function (s, e) {
        this.txtContaContabil.Limpar();
        this.txtContaContabil.AddParametro("Empresa", this.cboContaCorrente.GetContaCorrente());
    };
    C_Cr_Car.prototype.btnOK_Click = function (s, e) {
        var valores = this.GetValoresRowsSelecionadas("Codigo");
        var situacao = this.GetValoresRowsSelecionadas("Situacao");
        try {
            if (this.cboSituacao.GetSelectedIndex() < 0) {
                MostrarAlerta("Selecione uma situação");
                return;
            }
            if (valores != null && valores.length <= 0) {
                MostrarAlerta("Selecione ao menos uma conta");
                return;
            }
            if (this.Filtro.Situacao == 1) {
                var i = void 0;
                for (i = 0; i < situacao.length; i++) {
                    if (situacao[i] != null && !String.IsNullOrWhiteSpace(situacao[i].toString())) {
                        if (situacao[i] == 1) {
                            MostrarAlerta("Não é permitido confirmar uma Conta a Receber no Cartão já confirmada");
                            return;
                        }
                    }
                }
            }
            MsgBoxJS("Deseja alterar para a situação " + this.cboSituacao.GetText() + "?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouMsgBox, this), "alterar");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Cr_Car.prototype.btnMdOK_Click = function (s, e) {
        MsgBoxJS("Deseja mesmo gerar o Lançamento?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouMsgBox, this), "gerar_Lancamento");
    };
    C_Cr_Car.prototype.OnSelecionouMsgBox = function (e) {
        var parametros;
        if (e.Argument == "alterar" && e.Resultado == MsgBoxResult.Yes) {
            this.ConfirmarContas();
        }
        else if (e.Argument == "gerar_Lancamento" && e.Resultado == MsgBoxResult.Yes) {
            if (this.validarCamposObrigatoriosModal()) {
                this.GerarLancamentoConfirmado();
            }
        }
        else if (e.Resultado == MsgBoxResult.No && e.Argument == "excluir_grade") {
            return;
        }
    };
    C_Cr_Car.prototype.CalculateCustomSummary = function (s, e) {
        switch (e.options.summaryProcess) {
            case "start":
                this.somaColuna = 0;
                this.counter = 0;
                break;
            case "calculate":
                if (this.Grid.Grid.isRowSelected(this.Grid.Grid.getSelectedRowKeys()[this.counter])) {
                    if (e.options.name == "Valor_Final") {
                        this.somaColuna += e.options.value;
                    }
                    this.counter++;
                }
                break;
            case "finalize":
                e.options.totalValue = this.somaColuna;
                this.RefreshAngular();
                break;
        }
    };
    C_Cr_Car.prototype.Grid_SelecionouLinha = function (s, e) {
        this.Grid.Refresh();
        this.RefreshAngular();
    };
    C_Cr_Car.prototype.GetValoresRowsSelecionadas = function (campo) {
        var retorno = [];
        try {
            for (var i = 0; i < this.Grid.GetSelectedRowsData.length; i++) {
                retorno.push(this.Grid.GetSelectedRowsData[i][campo]);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return retorno;
    };
    return C_Cr_Car;
}(MouraPageRelacaoAngular));
var c_Cr_Car = new C_Cr_Car();
//# sourceMappingURL=C_Cr_Car.js.map