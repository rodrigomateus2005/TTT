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
var R_SerRec = /** @class */ (function (_super) {
    __extends(R_SerRec, _super);
    function R_SerRec() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.atendimento = 0;
        _this.codAnimaisServicos = 0;
        _this.codAceiteTerceiro = 0;
        _this.novoAtendimento = "novoAtendimento";
        return _this;
    }
    Object.defineProperty(R_SerRec.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SerRec.prototype, "txtPeriodo", {
        //Filtros
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SerRec.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SerRec.prototype, "txtPrestador", {
        get: function () {
            return window['txtPrestador_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SerRec.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SerRec.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SerRec.prototype, "grdEscala", {
        get: function () {
            return window['grdEscala_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SerRec.prototype, "dlgAtendimento", {
        //Resposta Prestador
        get: function () {
            return window['dlgAtendimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SerRec.prototype, "txtValorRepasse", {
        get: function () {
            return window['txtValorRepasse_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SerRec.prototype, "txtObservacao", {
        get: function () {
            return window['txtObservacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SerRec.prototype, "btnConfirmar", {
        get: function () {
            return window['btnConfirmar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SerRec.prototype, "btnRecusar", {
        get: function () {
            return window['btnRecusar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_SerRec.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grd) {
            adicionarEventoMoura(this.grd.SelecionouLinha, this.OnGrdClickBotaoLinha, this);
        }
        if (this.txtPrestador) {
            adicionarEventoMoura(this.txtPrestador.AntesAbrirProcura, this.OnAntesAbrirProcuraProfissional, this);
            adicionarEventoMoura(this.txtPrestador.Procurou, this.OnTxtPrestadorProcurou, this);
        }
        if (this.grdEscala) {
            adicionarEventoMoura(this.grdEscala.ClickBotaoLinha, this.OnGrdEscalaClickBotaoLinha, this);
        }
        if (this.dlgAtendimento) {
            adicionarEventoMoura(this.dlgAtendimento.Fechou, this.OnFechouModalResposta, this);
        }
        if (this.btnConfirmar) {
            adicionarEventoMoura(this.btnConfirmar.Click, this.OnClickConfirmar, this);
        }
        if (this.btnRecusar) {
            adicionarEventoMoura(this.btnRecusar.Click, this.OnClickRecusar, this);
        }
        if (this.dlgTelaModal) {
            adicionarEventoMoura(this.dlgTelaModal.Fechou, this.OnFechouModalAtendimento, this);
        }
    };
    R_SerRec.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_SerRec.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (ValoresSismoura && ValoresSismoura.EmpresaPadraoUsuario > 0) {
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario;
        }
        this.txtPeriodo.Iniciar();
        this.txtPrestador.Limpar();
        this.grd.PreencherGrid([]);
        this.txtValorRepasse.Visible = false;
        this.atendimento = 0;
        this.codAnimaisServicos = 0;
        this.codAceiteTerceiro = 0;
    };
    R_SerRec.prototype.OnAntesAbrirProcuraProfissional = function (s, e) {
        e.Cancelar = false;
        this.txtPrestador.AddParametro("isTerceirizado", "1");
    };
    R_SerRec.prototype.OnTxtPrestadorProcurou = function (s, e) {
        try {
            if (this.txtPrestador.GetText().CNum() <= 0)
                return;
            var param = {
                codProfissional: this.txtPrestador.GetText().CNum()
            };
            if (!this.ExecutarFuncaoServerSideSynch("isPrestadorServico", param)) {
                MostrarAlerta("Profissional informado não é um Prestador de Serviço.");
                this.txtPrestador.Limpar();
                this.txtPrestador.Focus();
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_SerRec.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var dataInicio = this.txtPeriodo.textBoxCalendarioInicio.GetDate();
        var dataFim = this.txtPeriodo.textBoxCalendarioFim.GetDate();
        if (!this.ValidarPeriodo(dataInicio, dataFim)) {
            MostrarAlerta("Informe um período correto.");
            return;
        }
        try {
            var parametros = {
                dataInicial: dataInicio,
                dataFinal: dataFim,
                empresas: this.lstEmpresa.GetValuesRelacaoNumber(),
                codProfissional: this.txtPrestador.GetText().CNum(),
                tabIndex: this.tab.GetActiveTabIndex()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarGrid", parametros, function (d) {
                try {
                    fecharEspera();
                    (_this.tab.GetActiveTabIndex() == 0) ? _this.grd.PreencherGrid(GetRetornoAJAX(d)) : _this.grdEscala.PreencherGrid(GetRetornoAJAX(d));
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
            this.grd.PreencherGrid([]);
            this.grdEscala.PreencherGrid([]);
            LogarException(ex);
            fecharEspera();
        }
    };
    R_SerRec.prototype.PreencherGradeEscala = function () {
        try {
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_SerRec.prototype.ValidarPeriodo = function (dataInicio, dataFim) {
        if (!dataInicio)
            return false;
        if (!dataFim)
            return false;
        return true;
    };
    R_SerRec.prototype.OnGrdClickBotaoLinha = function (s, e) {
        try {
            if (!e.data) {
                return;
            }
            this.atendimento = ("" + e.data.Atendimento).CNum();
            if (this.atendimento <= 0) {
                return;
            }
            if (("" + e.data.Codigo_Recusa).CNum() == 3) {
                if (("" + e.data.Codigo_Aceite_Terceiro).CNum() > 0) {
                    this.codAceiteTerceiro = ("" + e.data.Codigo_Aceite_Terceiro).CNum();
                }
            }
            this.codAnimaisServicos = ("" + e.data.Codigo_Animais_Servicos).CNum();
            if (("" + e.data.Codigo_Recusa).CNum() == 2) {
                this.txtValorRepasse.Visible = true;
            }
            else {
                this.codAnimaisServicos = 0;
            }
            this.dlgAtendimento.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_SerRec.prototype.OnGrdEscalaClickBotaoLinha = function (s, e) {
        var _this = this;
        try {
            if (!e.data) {
                return;
            }
            var codigo_1 = ("" + e.data.Codigo).CNum();
            if (codigo_1 <= 0) {
                return;
            }
            MsgBoxJS("Deseja realmente informar que o ajuste foi realizado?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.No)
                    return;
                var param = {
                    codigoEntidade: codigo_1,
                    tela: ValoresSismoura.NomeTela,
                    codUsuario: ValoresSismoura.UsuarioLogado
                };
                if (_this.ExecutarFuncaoServerSideSynch("GravarAjusteRealizado", param)) {
                    MostrarMensagem("Ajuste realizado com sucesso");
                    _this.PreencherGrade();
                }
                else {
                    MostrarError("Ocorreu um erro no sistema");
                }
            });
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_SerRec.prototype.OnFechouModalResposta = function (s, e) {
        this.txtObservacao.Limpar();
        this.txtObservacao.Visible = true;
        this.txtValorRepasse.Limpar();
        this.txtValorRepasse.Visible = false;
        this.atendimento = 0;
        this.codAnimaisServicos = 0;
        this.codAceiteTerceiro = 0;
    };
    R_SerRec.prototype.OnClickConfirmar = function (s, e) {
        e.processOnServer = false;
        if (this.codAceiteTerceiro > 0) {
            var params = [
                "faltaServicoAtendimento=" + this.codAceiteTerceiro.toString()
            ];
            this.dlgTelaModal.AbrirTelaModal(formataURLRelativa(URLTela.CadastroDeAtendimento), params, this.novoAtendimento, true);
            return;
        }
        if (this.txtValorRepasse.Visible && this.txtValorRepasse.GetText().CNum() <= 0) {
            MostrarAlerta("É preciso informar o valor de repasse");
            return;
        }
        if (String.IsNullOrWhiteSpace(this.txtObservacao.GetText())) {
            MostrarAlerta("É preciso informar uma observação para confirmar");
            return;
        }
        this.ResponderRecusaPrestador(this.txtObservacao.GetText(), this.txtValorRepasse.GetText().CNum(), true);
    };
    R_SerRec.prototype.OnClickRecusar = function (s, e) {
        e.processOnServer = false;
        if (String.IsNullOrWhiteSpace(this.txtObservacao.GetText())) {
            MostrarAlerta("É preciso informar uma observação para recusar");
            return;
        }
        if (this.codAceiteTerceiro > 0) {
            this.RecusarFaltaServico(this.txtObservacao.GetText());
            return;
        }
        this.ResponderRecusaPrestador(this.txtObservacao.GetText(), 0, false);
    };
    R_SerRec.prototype.RecusarFaltaServico = function (observacao) {
        try {
            var param = {
                codAceiteTerceiro: this.codAceiteTerceiro,
                observacao: observacao,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("RecusarFaltaServico", param);
            if (retorno) {
                MostrarMensagem("Recusa realizada com sucesso");
                this.LimparCampos();
                this.dlgAtendimento.Hide();
                this.PreencherGrade();
            }
            else {
                MostrarError("Ocorreu um erro no sistema");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_SerRec.prototype.ResponderRecusaPrestador = function (observacao, valorRepasse, isConfirmar) {
        try {
            var param = {
                atendimento: this.atendimento,
                codAnimaisServicos: this.codAnimaisServicos,
                valorRepasse: valorRepasse,
                observacao: observacao,
                isConfirmar: isConfirmar,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ResponderRecusaPrestador", param);
            if (retorno) {
                (isConfirmar) ? MostrarMensagem("Confirmação realizada com sucesso") : MostrarMensagem("Recusa realizada com sucesso");
                this.LimparCampos();
                this.dlgAtendimento.Hide();
                this.PreencherGrade();
            }
            else {
                MostrarError("Ocorreu um erro no sistema");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_SerRec.prototype.OnFechouModalAtendimento = function (s, e) {
        try {
            MostrarMensagem("Confirmação realizada com sucesso");
            this.LimparCampos();
            this.dlgAtendimento.Hide();
            this.PreencherGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_SerRec;
}(MouraPageRelacaoAngular));
var r_SerRec = new R_SerRec();
//# sourceMappingURL=R_SerRec.js.map