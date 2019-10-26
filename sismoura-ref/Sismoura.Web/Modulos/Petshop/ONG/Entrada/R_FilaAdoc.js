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
var R_FilaAdoc = /** @class */ (function (_super) {
    __extends(R_FilaAdoc, _super);
    function R_FilaAdoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_FilaAdoc.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FilaAdoc.prototype, "grid", {
        get: function () { return window['grid_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FilaAdoc.prototype, "lstEmpresa", {
        get: function () { return window['lstEmpresa_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FilaAdoc.prototype, "cboStatusAdocao", {
        get: function () { return window['cboStatusAdocao_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FilaAdoc.prototype, "mdlAvaliacoes", {
        get: function () { return window['mdlAvaliacoes_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FilaAdoc.prototype, "txtUsuarioAvaliacao", {
        get: function () { return window['txtUsuarioAvaliacao_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FilaAdoc.prototype, "txtDataAvaliacao", {
        get: function () { return window['txtDataAvaliacao_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FilaAdoc.prototype, "txtHoraAvaliacao", {
        get: function () { return window['txtHoraAvaliacao_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FilaAdoc.prototype, "txtObservacaoFicha", {
        //get cboFichaAvaliacao(): MouraComboBox { return window['cboFichaAvaliacao_Object']; }
        get: function () { return window['txtObservacaoFicha_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FilaAdoc.prototype, "grdFichaAvaliacao", {
        get: function () { return window['grdFichaAvaliacao_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FilaAdoc.prototype, "grdAvaliacoesRealizadas", {
        get: function () { return window['grdAvaliacoesRealizadas_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FilaAdoc.prototype, "grdVisualizarFichaAval", {
        get: function () { return window['grdVisualizarFichaAval_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FilaAdoc.prototype, "txtObsFichaVisualizar", {
        get: function () { return window['txtObsFichaVisualizar_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FilaAdoc.prototype, "btnSalvarFicha", {
        get: function () { return window['btnSalvarFicha_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FilaAdoc.prototype, "btnLimpar", {
        get: function () { return window['btnLimpar_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_FilaAdoc.prototype, "mdlVisualizarFichaAval", {
        get: function () { return window['mdlVisualizarFichaAval_Object']; },
        enumerable: true,
        configurable: true
    });
    R_FilaAdoc.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.mdlAvaliacoes) {
            adicionarEventoMoura(this.mdlAvaliacoes.Fechou, this.OnFechouModal, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.ClickBotaoLinha, this.onClickAvaliacao, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.limparCamposFicha, this);
        }
        if (this.btnSalvarFicha) {
            adicionarEventoMoura(this.btnSalvarFicha.Click, this.onBtnSalvarFicha, this);
        }
        adicionarEventoMoura(this.grdAvaliacoesRealizadas.SelecionouLinha, this.OnSelecionouLinhaFichaAvaliacao, this);
        adicionarEventoMoura(this.grdAvaliacoesRealizadas.ExcluiuLinhaGrade, this.OnExcluirFichaAvaliacao, this);
        adicionarEventoMoura(this.grdAvaliacoesRealizadas.ExcluindoLinhaGrade, this.OnExcluindoFichaAvaliacao, this);
    };
    R_FilaAdoc.prototype.OnFechouModal = function (s, e) {
        this.limparCamposFicha(null, null);
    };
    R_FilaAdoc.prototype.limparCamposFicha = function (s, e) {
        var _this = this;
        setTimeout(function () {
            _this.txtUsuarioAvaliacao.Limpar();
            _this.txtDataAvaliacao.Date = _this.DataServidor();
            _this.txtHoraAvaliacao.textBoxHorario.SetDate(_this.DataServidor());
            _this.txtObservacaoFicha.Limpar();
            _this.grdFichaAvaliacao.PreencherGrid([]);
            _this.grdVisualizarFichaAval.PreencherGrid([]);
            _this.preencherFicha();
        });
    };
    R_FilaAdoc.prototype.preencherFicha = function () {
        try {
            var parametros;
            parametros = {
                codFicha: ValoresSismoura.ConfiguracoesPetshop.CheckList_Avaliacao_Diaria_Animais_Fila_Adocao,
                microchip: this.parametrosModal.microchip
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetFichaAvaliacao", parametros);
            if (!retorno) {
                MostrarError('Erro ao obter a ficha de avaliação.');
                return;
            }
            if (retorno.FichaAvaliacao)
                this.grdFichaAvaliacao.PreencherGrid(retorno.FichaAvaliacao);
            else
                this.grdFichaAvaliacao.PreencherGrid([]);
            if (retorno.AvaliacoesRealizadas)
                this.grdAvaliacoesRealizadas.PreencherGrid(retorno.AvaliacoesRealizadas);
            else
                this.grdAvaliacoesRealizadas.PreencherGrid([]);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_FilaAdoc.prototype.onBtnSalvarFicha = function (s, e) {
        var _this = this;
        try {
            if (e.cancelEventAndBubble)
                return;
            if (!this.parametrosModal) {
                MostrarError('Ocorreu um erro ao salvar a ficha.');
                return;
            }
            var avaliacao = {};
            avaliacao.Data = this.txtDataAvaliacao.Date;
            avaliacao.Data.setHours(this.txtHoraAvaliacao.textBoxHorario.GetDate().getHours(), this.txtHoraAvaliacao.textBoxHorario.GetDate().getMinutes());
            avaliacao.Microchip = this.parametrosModal.microchip;
            avaliacao.Animal = this.parametrosModal.codAnimal;
            avaliacao.Usuario = this.txtUsuarioAvaliacao.GetText().CNum();
            avaliacao.Observacao = this.txtObservacaoFicha.GetText();
            avaliacao.Itens = [];
            var itensGrid = this.grdFichaAvaliacao.DataSource;
            for (var x = 0; x < itensGrid.length; x++) {
                var item = {};
                item.Ficha_Avaliacao_Item = itensGrid[x].Codigo;
                item.Resposta = itensGrid[x].Resposta;
                item.Observacao = itensGrid[x].Observacao;
                avaliacao.Itens.push(item);
            }
            MsgBoxJS("Confirmar a avalia\u00E7\u00E3o na data e hora " + avaliacao.Data.FormataDataHora() + "?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.No) {
                    return;
                }
                var parametros = {
                    fichaJSON: JSON.stringify(avaliacao),
                    tela: ValoresSismoura.NomeTela,
                    codUsuario: ValoresSismoura.UsuarioLogado
                };
                abrirEspera("Aguarde. Gravando Avaliação...");
                _this.ExecutarFuncaoServerSideAsynch("salvarFichaAvaliacao", parametros, function (d) {
                    try {
                        fecharEspera();
                        var retorno = GetRetornoAJAX(d);
                        if (retorno) {
                            MostrarMensagem('Gravado com sucesso!');
                            _this.limparCamposFicha(null, null);
                        }
                        else {
                            MostrarError('Erro ao gravar!');
                        }
                    }
                    catch (ex) {
                        fecharEspera();
                        LogarException(ex);
                    }
                }, function (erro) {
                    fecharEspera();
                    LogarExceptionAjax(erro);
                }, _this);
            });
        }
        catch (e) {
            LogarException(e);
        }
    };
    R_FilaAdoc.prototype.onClickAvaliacao = function (s, e) {
        var _this = this;
        if (e.data['Status_Adocao'] != 'Aguardando Adoção') {
            MostrarAlerta('Este pet não está em fila de adoção.');
            return;
        }
        var codAnimal = "" + e.data['Codigo'];
        var microchip = "" + e.data['Microchip'];
        if (e.commandName == "AVALIACAO_DIARIA") {
            if (String.IsNullOrWhiteSpace(microchip)) {
                MostrarAlerta('Apenas animais com microchip podem ser avaliados.');
                return;
            }
            this.parametrosModal = {
                codAnimal: codAnimal,
                microchip: microchip
            };
            setTimeout(function () {
                _this.limparCamposFicha(null, null);
                _this.preencherFicha();
                _this.mdlAvaliacoes.Show();
            }, 200);
        }
    };
    R_FilaAdoc.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        setTimeout(function () {
            _this.LimparCampos();
        }, 300);
    };
    R_FilaAdoc.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (this.grid) {
            this.grid.PreencherGrid(null);
        }
        if (this.lstEmpresa) {
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        }
        if (this.cboStatusAdocao) {
            this.cboStatusAdocao.SetValue(0);
        }
        this.parametrosModal = null;
        //this.limparCamposFicha(null, null);
    };
    R_FilaAdoc.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (this.lstEmpresa.GetValues().length == 0) {
            MostrarAlerta("Informe a loja");
            return;
        }
        this.GetDadosRelacao();
    };
    R_FilaAdoc.prototype.GetDadosRelacao = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                empresas: this.lstEmpresa.GetValuesRelacao(),
                statusAdocao: this.cboStatusAdocao.GetValue()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetRelacaoFilaAdocao", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
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
    };
    R_FilaAdoc.prototype.OnSelecionouLinhaFichaAvaliacao = function (s, e) {
        try {
            var codFicha = ("" + e.data['Adocao_Ficha_Avaliacao']).CNum();
            var parametros = {
                codFicha: codFicha
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetDadosAvaliacao", parametros);
            if (!retorno || !retorno.DadosFichaAvaliacao) {
                return;
            }
            this.txtObsFichaVisualizar.SetText(retorno.DadosFichaAvaliacao[0].Observacao);
            this.grdVisualizarFichaAval.PreencherGrid(retorno.DadosFichaAvaliacao);
            this.mdlVisualizarFichaAval.Show();
        }
        catch (e) {
            LogarException(e);
        }
    };
    R_FilaAdoc.prototype.OnExcluindoFichaAvaliacao = function (s, e) {
        //if (!this.GetScope().Entity || this.GetScope().Entity.Cancelada || this.GetScope().Entity.Finalizado) {
        //    MostrarAlerta("Não será possível excluir este registro.");
        //    e.cancelar = true;
        //    return;
        //}
    };
    R_FilaAdoc.prototype.OnExcluirFichaAvaliacao = function (s, e) {
        try {
            console.log(e.item);
            var codFicha = CNum(e.item.Adocao_Ficha_Avaliacao);
            var parametros = {
                codFicha: codFicha,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ExcluirFichaAvaliacao", parametros);
            if (retorno) {
                MostrarMensagem("Avaliação excluída com sucesso.");
            }
            else {
                MostrarError("Erro ao excluir avaliação.");
            }
        }
        catch (e) {
        }
    };
    return R_FilaAdoc;
}(MouraPageRelacaoAngular));
var r_FilaAdoc = new R_FilaAdoc();
//# sourceMappingURL=R_FilaAdoc.js.map