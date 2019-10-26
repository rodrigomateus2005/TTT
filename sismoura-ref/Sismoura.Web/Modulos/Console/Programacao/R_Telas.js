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
var R_Telas = /** @class */ (function (_super) {
    __extends(R_Telas, _super);
    function R_Telas() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.codTela = 0;
        return _this;
    }
    Object.defineProperty(R_Telas.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "cboIsConverter", {
        get: function () {
            return window['cboIsConverter_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "cboIsConvertida", {
        get: function () {
            return window['cboIsConvertida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "cboIsAngular", {
        get: function () {
            return window['cboIsAngular_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "cboModulo", {
        get: function () {
            return window['cboModulo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "txtTitulo", {
        get: function () {
            return window['txtTitulo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "mdTela", {
        get: function () {
            return window['mdTela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "lblTela", {
        get: function () {
            return window['lblTela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "lblTitulo", {
        get: function () {
            return window['lblTitulo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "lblModulo", {
        get: function () {
            return window['lblModulo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "lblConverter", {
        get: function () {
            return window['lblConverter_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "lblIsConvertida", {
        get: function () {
            return window['lblIsConvertida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "lblIsAngular", {
        get: function () {
            return window['lblIsAngular_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "lblObservacao", {
        get: function () {
            return window['lblObservacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "lblAtivConversao", {
        get: function () {
            return window['lblAtivConversao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "lblSituacaoAtivConversao", {
        get: function () {
            return window['lblSituacaoAtivConversao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "lblPrioridadeConversao", {
        get: function () {
            return window['lblPrioridadeConversao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "lblHorasConversao", {
        get: function () {
            return window['lblHorasConversao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "mdCadAtividade", {
        get: function () {
            return window['mdCadAtividade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "txtDescricaoAtividade", {
        get: function () {
            return window['txtDescricaoAtividade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "cboModuloAtividade", {
        get: function () {
            return window['cboModuloAtividade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "btnSalvarAtividade", {
        get: function () {
            return window['btnSalvarAtividade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "btnCancelarAtividade", {
        get: function () {
            return window['btnCancelarAtividade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Telas.prototype, "chkDesconsiderarBaixadasDev", {
        get: function () {
            return window['chkDesconsiderarBaixadasDev_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Telas.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnGridSelecionouItem, this);
            adicionarEventoMoura(this.grid.ClickBotaoLinha, this.OnClicouBotaoLinha, this);
        }
        if (this.btnCancelarAtividade) {
            adicionarEventoMoura(this.btnCancelarAtividade.Click, this.OnClickCancelarAtividade, this);
        }
        if (this.btnSalvarAtividade) {
            adicionarEventoMoura(this.btnSalvarAtividade.Click, this.OnClickSalvarAtividade, this);
        }
    };
    R_Telas.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_Telas.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        try {
            var parametros;
            parametros = {
                titulo: this.txtTitulo.GetText(),
                modulo: this.cboModulo.GetText(),
                isConverter: this.cboIsConverter.GetText(),
                isConvertida: this.cboIsConvertida.GetText(),
                isAngular: this.cboIsAngular.GetText(),
                desconsiderarBaixadasDev: this.chkDesconsiderarBaixadasDev.Checked
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("GetTelas", parametros, function (d) {
                fecharEspera();
                _this.AccordionFiltros.SetExpanded(false);
                var telas = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(telas);
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
    R_Telas.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.cboIsConverter.SetSelectedIndex(0);
        this.cboIsConvertida.SetSelectedIndex(0);
        this.cboIsAngular.SetSelectedIndex(0);
        this.cboModulo.SetSelectedIndex(0);
        this.codTela = 0;
        this.grid.PreencherGrid(null);
    };
    R_Telas.prototype.OnGridSelecionouItem = function (s, e) {
        this.lblTela.Text = e.data.Tela;
        this.lblTitulo.Text = e.data.Titulo;
        this.lblModulo.Text = e.data.Modulo;
        if (e.data.Converter == true) {
            this.lblConverter.Text = 'Sim';
        }
        else {
            this.lblConverter.Text = 'Não';
        }
        if (e.data.Isweb == true) {
            this.lblIsConvertida.Text = 'Sim';
        }
        else {
            this.lblIsConvertida.Text = 'Não';
        }
        if (e.data.Isangular == true) {
            this.lblIsAngular.Text = 'Sim';
        }
        else {
            this.lblIsAngular.Text = 'Não';
        }
        this.lblObservacao.Text = e.data.Observacao;
        this.lblAtivConversao.Text = e.data.Atividade_Conversao;
        this.lblSituacaoAtivConversao.Text = e.data.Situacao_Atividade_Conversao;
        this.lblPrioridadeConversao.Text = e.data.Prioridade_Conversao;
        this.lblHorasConversao.Text = e.data.Horas_Conversao;
        this.mdTela.Show();
    };
    R_Telas.prototype.OnClicouBotaoLinha = function (s, e) {
        try {
            if (e.commandName == "btnConversao") {
                var descricaoAtividade = "Converter a tela: " + e.data.Titulo;
                if (CNum(e.data.Atividade_Conversao) > 0) {
                    MostrarAlerta("Esta tela já tem uma atividade de conversão vinculada");
                    return;
                }
                if (e.data.Isangular && e.data.Isweb) {
                    MostrarAlerta("Esta tela já está convertida para Web e para Angular");
                    return;
                }
                if (!e.data.Isweb) {
                    descricaoAtividade += " para Web";
                }
                else if (!e.data.Isangular) {
                    descricaoAtividade += " para Angular";
                }
                var itemEncontrado = null;
                if (this.cboModuloAtividade) {
                    var retorno = this.cboModuloAtividade.GetItensCombo();
                    var listaItens = retorno.filter(function (t) { return ("" + t.text).toUpperCase() == ("" + e.data.Modulo).toUpperCase(); });
                    if (listaItens && listaItens.length > 0) {
                        itemEncontrado = listaItens[0];
                    }
                }
                if (itemEncontrado) {
                    this.cboModuloAtividade.SetValue(itemEncontrado.value);
                }
                else {
                    this.cboModuloAtividade.LimparSelecao();
                }
                this.txtDescricaoAtividade.SetText(descricaoAtividade);
                this.codTela = CNum(e.data.Codigo);
                this.mdCadAtividade.Show();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Telas.prototype.GravarAtividadeConversao = function (descricaoSolicitado, codModulo, codTela) {
        try {
            var parametros;
            parametros = {
                descricaoSolicitado: descricaoSolicitado,
                codModulo: codModulo,
                codUsuario: ValoresSismoura.UsuarioLogado,
                nomeTela: ValoresSismoura.NomeTela,
                codTela: codTela,
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("CadastrarAtividadeConversao", parametros);
            if (!String.IsNullOrWhiteSpace(retorno)) {
                MostrarMensagem(retorno);
            }
            this.codTela = 0;
            this.PreencherGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Telas.prototype.OnClickCancelarAtividade = function (s, e) {
        e.processOnServer = false;
        this.mdCadAtividade.Hide();
    };
    R_Telas.prototype.OnClickSalvarAtividade = function (s, e) {
        e.processOnServer = false;
        if (String.IsNullOrWhiteSpace(this.txtDescricaoAtividade.GetText())) {
            MostrarAlerta("Informe a descrição da atividade");
            return;
        }
        if (!CNum(this.cboModuloAtividade.GetValue())) {
            MostrarAlerta("Informe o módulo");
            return;
        }
        this.mdCadAtividade.Hide();
        this.GravarAtividadeConversao(this.txtDescricaoAtividade.GetText(), CNum(this.cboModuloAtividade.GetValue()), this.codTela);
    };
    return R_Telas;
}(MouraPageRelacaoAngular));
var r_Telas = new R_Telas();
//# sourceMappingURL=R_Telas.js.map