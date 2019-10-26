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
var C_AtmExa_Petz = /** @class */ (function (_super) {
    __extends(C_AtmExa_Petz, _super);
    function C_AtmExa_Petz() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PATH_DOCUMENTOS = "~/Documentos/Exames/";
        _this.exame = 0;
        return _this;
    }
    Object.defineProperty(C_AtmExa_Petz.prototype, "ProprietarioCadastrado", {
        get: function () {
            return String.IsNullOrWhiteSpace(this.EntityTela.Nome_Proprietario);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "AnimalCadastrado", {
        get: function () {
            return String.IsNullOrWhiteSpace(this.EntityTela.Nome_Animal)
                && String.IsNullOrWhiteSpace(this.EntityTela.Sexo)
                && !this.EntityTela.Data_Nascimento
                && !this.EntityTela.Raca;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "Animal", {
        get: function () {
            return this.GetScope()["Animal"];
        },
        set: function (value) {
            this.GetScope()["Animal"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "Proprietario", {
        get: function () {
            return this.GetScope()["Proprietario"];
        },
        set: function (value) {
            this.GetScope()["Proprietario"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "ListaResultadosRecebidos", {
        get: function () {
            return this.GetScope()["ListaResultadosRecebidos"];
        },
        set: function (value) {
            this.GetScope()["ListaResultadosRecebidos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "ListaResultadosAlterados", {
        get: function () {
            return this.GetScope()["ListaResultadosAlterados"];
        },
        set: function (value) {
            this.GetScope()["ListaResultadosAlterados"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "txtClinica", {
        get: function () {
            return window['txtClinica_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "txtObservacaoCodigo", {
        get: function () {
            return window['txtObservacaoCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "grdResultado", {
        get: function () {
            return window['grdResultado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "grdExames", {
        get: function () {
            return window['grdExames_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "btnOkAnimal", {
        get: function () {
            return window['btnOkAnimal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "btnAnimal", {
        get: function () {
            return window['btnAnimal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "btnCancelarAnimal", {
        get: function () {
            return window['btnCancelarAnimal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "btnAnexo", {
        get: function () {
            return window['btnAnexo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "btnEmail", {
        get: function () {
            return window['btnEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "txtStatus", {
        get: function () {
            return window['txtStatus_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "Tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "dlgDadosAnimal", {
        //get cboModelo(): MouraComboBoxEmpresa {
        //    return <MouraComboBoxEmpresa>window['cboModelo_Object'];
        //}
        get: function () {
            return window['dlgDadosAnimal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "dlgAnexo", {
        get: function () {
            return window['dlgAnexo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "EnviarEmail", {
        get: function () {
            return window['EnviarEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "htmlEditor", {
        get: function () {
            return window['htmlEditor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "dlgDepoisGravar", {
        get: function () {
            return window['dlgDepoisGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "grdProximosExames", {
        get: function () {
            return window['grdProximosExames_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "btnEnviarExame", {
        get: function () {
            return window['btnEnviarExame_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "btnFecharEnvio", {
        get: function () {
            return window['btnFecharEnvio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "dlgMotivoRecusa", {
        get: function () {
            return window['dlgMotivoRecusa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "txtMotivoRecusa", {
        get: function () {
            return window['txtMotivoRecusa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "txtObservacaoRecusa", {
        get: function () {
            return window['txtObservacaoRecusa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtmExa_Petz.prototype, "btnConfirmarRecusa", {
        get: function () {
            return window['btnConfirmarRecusa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    //get btnImprimirGenerico(): MouraButton {
    //    return <MouraButton>window['btnImprimirGenerico_Object'];
    //}
    //get btnImprimir(): MouraButton {
    //    return <MouraButton>window['btnImprimir_Object'];
    //}
    C_AtmExa_Petz.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Tab) {
            adicionarEventoMoura(this.Tab.ActiveTabChanged, this.OnTabChanged, this);
        }
        if (this.btnOkAnimal) {
            adicionarEventoMoura(this.btnOkAnimal.Click, this.OnBtnOkAnimalClick, this);
        }
        //if (this.btnImprimir) {
        //    adicionarEventoDevExpress(this.btnImprimir.Botao.Click, this.OnBtnImprimirClick, this);
        //}
        //if (this.btnImprimirGenerico) {
        //    adicionarEventoDevExpress(this.btnImprimirGenerico.Botao.Click, this.OnBtnImprimirGenericoClick, this);
        //}
        if (this.btnAnimal.Visible == true) {
            adicionarEventoMoura(this.btnAnimal.Click, this.OnBtnAnimalClick, this);
        }
        if (this.btnCancelarAnimal) {
            adicionarEventoMoura(this.btnCancelarAnimal.Click, this.OnBtnCancelarAnimalClick, this);
        }
        if (this.btnAnexo) {
            adicionarEventoMoura(this.btnAnexo.Click, this.OnBtnAnexoClick, this);
        }
        if (this.btnEmail) {
            adicionarEventoMoura(this.btnEmail.Click, this.OnBtnEmailClick, this);
        }
        if (this.grdResultado) {
            adicionarEventoMoura(this.grdResultado.RowValidating, this.OnGrdResultadoValidandoItem, this);
            adicionarEventoMoura(this.grdResultado.EditouItemGrade, this.OnGrdResultadoEditouItemGrade, this);
        }
        if (this.txtClinica) {
            adicionarEventoMoura(this.txtClinica.Procurou, this.OnTxtClinicaPesquisou, this);
        }
        if (this.txtObservacaoCodigo) {
            adicionarEventoMoura(this.txtObservacaoCodigo.Procurou, this.OnTxtObservacaoDescricaoPesquisou, this);
        }
        if (this.grdExames) {
            adicionarEventoMoura(this.grdExames.SelecionouLinha, this.OnGrdgrdExamesSelecionouLinha, this);
        }
        if (this.grdProximosExames) {
            adicionarEventoMoura(this.grdProximosExames.SelecionouLinha, this.OnGrdProximosExamesSelecionouLinha, this);
            adicionarEventoMoura(this.grdProximosExames.ClickBotaoLinha, this.OnGrdProximosExamesClickBotaoLinha, this);
        }
        if (this.btnEnviarExame) {
            adicionarEventoMoura(this.btnEnviarExame.Click, this.OnBtnEnviarExameClick, this);
        }
        if (this.btnFecharEnvio) {
            adicionarEventoMoura(this.btnFecharEnvio.Click, this.OnBtnFecharEnvioClick, this);
        }
        if (this.dlgMotivoRecusa) {
            adicionarEventoMoura(this.dlgMotivoRecusa.Fechou, this.OnFechouModalMotivoRecusa, this);
        }
        if (this.btnConfirmarRecusa) {
            adicionarEventoMoura(this.btnConfirmarRecusa.Click, this.OnClickConfirmarRecusa, this);
        }
    };
    C_AtmExa_Petz.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        if (this.GetScope()) {
            this.GetScope().$watch(function (scope) {
                return _this.ProprietarioCadastrado;
            }, function (newValue, oldValue, scope) {
                _this.verificarProprietarioObrigatorio();
            });
            this.GetScope().$watch(function (scope) {
                return _this.AnimalCadastrado;
            }, function (newValue, oldValue, scope) {
                _this.verificarAnimalObrigatorio();
            });
            this.GetScope().$watch(function (scope) {
                return scope.Entity['Tipo_Exame'];
            }, function (newValue, oldValue, scope) {
                _this.atualizarGrids(_this.GetScope().Entity);
            });
            this.GetScope().$watch(function (scope) {
                return scope.Entity.Cod_Proprietario;
            }, function (newValue, oldValue, scope) {
                _this.atualizarProprietario();
            });
            this.GetScope().$watch(function (scope) {
                return scope.Entity.Cod_Animal;
            }, function (newValue, oldValue, scope) {
                _this.atualizarAnimal();
            });
            this.GetScope().$watch(function (scope) {
                var retorno;
                if (_this.Animal) {
                    if (_this.Animal.EspecieEntity) {
                        retorno = _this.Animal.EspecieEntity.Codigo;
                    }
                }
                return retorno;
            }, function (newValue, oldValue, scope) {
                _this.atualizarGrids(_this.GetScope().Entity);
            });
        }
        if (this.ParametrosTela.animal) {
            this.GetScope().Entity.Cod_Animal = this.ParametrosTela.animal.CNum();
            this.GetScope().$applyAsync();
        }
        else if (this.ParametrosTela.codigo) {
            this.CarregarExame(this.ParametrosTela.codigo.CNum());
        }
        this.txtStatus.Enabled = false;
    };
    C_AtmExa_Petz.prototype.OnTabChanged = function (s, e) {
        try {
            this.htmlEditor.Html += '';
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AtmExa_Petz.prototype.OnGrdgrdExamesSelecionouLinha = function (s, e) {
        this.CarregarExame(("" + e.rowKey).CNum());
        //if (CNum(e.data['Cod_Tipo_Exame']) < 0 || CNum(e.data['Cod_Tipo_Exame']) == null) {
        //    MostrarAlerta("Não existem modelos cadastrados para este exame, utilize a impressão genérica ou cadastre um novo");
        //} else {
        //    this.cboModelo.SetValue(CNum(e.data['Cod_Tipo_Exame']));
        //}
    };
    C_AtmExa_Petz.prototype.CarregarExame = function (codExame) {
        var parametros = {
            CodExame: codExame
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetExameAnimal", parametros);
        this.SetEntity(retorno);
    };
    C_AtmExa_Petz.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Exame_Observacao = {};
        Entity.Data = new Date();
        Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        //this.cboModelo.LimparSelecao();
    };
    C_AtmExa_Petz.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        if (Entity.Exame_Observacao) {
            if (!String.IsNullOrWhiteSpace(Entity.Exame_Observacao.Observacao)) {
                if (this.Tab) {
                    this.Tab.SetActiveTabIndex(1);
                }
            }
        }
        //const parametros: any = {
        //    codigo: Entity.Codigo
        //    , codAnimal: Entity.Cod_Animal
        //}
        //const retorno = this.ExecutarFuncaoServerSideSynch("getCodigoTipoExame", parametros);
        //if (retorno.length > 0) {
        //    this.cboModelo.SetValue(CNum(retorno[0].COD_TIPO_EXAME));
        //}
    };
    C_AtmExa_Petz.prototype.OnAntesSetEntidade = function (eventArg) {
        _super.prototype.OnAntesSetEntidade.call(this, eventArg);
        if (eventArg.Entidade.Cod_Hospedagem_Servico > 0) {
            eventArg.Cancelar = true;
            MostrarMensagem("Este código é de uma hospedagem");
            return;
        }
        if (eventArg.Entidade.Codigo > 0) {
            var parametros = {
                codExame: eventArg.Entidade.Codigo,
                codEmpresa: eventArg.Entidade.Empresa
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("verificarExame", parametros);
            if (retorno.IsAtendimento) {
                eventArg.Cancelar = true;
                MostrarMensagem("Este código é de um atendimento normal");
                return;
            }
            if (!retorno.PertenceEmpresa) {
                eventArg.Cancelar = true;
                MostrarMensagem("Usuário não pertence a empresa do atendimento!");
                return;
            }
        }
        if (!eventArg.Entidade.Exame_Observacao) {
            eventArg.Entidade.Exame_Observacao = {};
        }
        this.ListaResultadosAlterados = [];
        //this.cboModelo.SetValue(eventArg.Entidade.Exames.)
        this.atualizarGrids(eventArg.Entidade);
        var html = "";
        if (eventArg.Entidade.Exame_Observacao.Observacao != null && eventArg.Entidade.Exame_Observacao.Observacao != undefined && eventArg.Entidade.Exame_Observacao.Observacao != "") {
            html = eventArg.Entidade.Exame_Observacao.Observacao;
        }
        else {
            html = this.ExecutarFuncaoServerSideSynch("GetHtmlPadraoExame", { codAtendimento: eventArg.Entidade.Codigo, exames: this.grdResultado.DataSource });
        }
        this.htmlEditor.Html = html;
    };
    C_AtmExa_Petz.prototype.OnAntesGravar = function () {
        if (ValoresSismoura.ConfiguracoesPetshop.Status_Exame_Finalizado <= 0) {
            MostrarAlerta("Configuração de Status Exame Finalizado não configurada");
            return false;
        }
        this.EntityTela.Exame_Observacao.Observacao = this.htmlEditor.Html;
        this.EntityTela.Exames = this.GetExames();
        this.EntityTela.Status_Exame = ValoresSismoura.ConfiguracoesPetshop.Status_Exame_Finalizado;
        return _super.prototype.OnAntesGravar.call(this);
    };
    C_AtmExa_Petz.prototype.GetExames = function () {
        var _this = this;
        var dados = this.getListaExames(this.EntityTela);
        var retorno = [];
        var exame;
        dados.forEach(function (item, index, array) {
            if (!String.IsNullOrWhiteSpace(item.Valor)) {
                exame = {};
                exame.Animal = _this.EntityTela.Cod_Animal;
                exame.Atendimento = item.Atendimento;
                exame.Codigo = item.Codigo_Atendimento_Exame;
                exame.Descricao = item.Valor;
                exame.Exame = item.Codigo_Exame;
                exame.Formula_Calculo = item.Formula;
                if (item.TipoValor != "A") {
                    exame.Resultado_Calculo = item.Resultado.CNum();
                }
                exame.Tipo_Exame = item.TipoExame;
                retorno.push(exame);
            }
        });
        if ((retorno.length == 0) && (this.GetScope().Entity['Tipo_Exame'] > 0)) {
            exame = {};
            exame.Animal = this.EntityTela.Cod_Animal;
            exame.Atendimento = 0;
            exame.Codigo = 0;
            exame.Descricao = "";
            exame.Exame = 0;
            exame.Formula_Calculo = "";
            exame.Resultado_Calculo = 0;
            exame.Tipo_Exame = this.GetScope().Entity['Tipo_Exame'];
            retorno.push(exame);
        }
        return retorno;
    };
    C_AtmExa_Petz.prototype.OnBtnOkAnimalClick = function (s, e) {
        e.processOnServer = false;
        if (String.IsNullOrWhiteSpace(this.EntityTela.Nome_Animal)) {
            MostrarAlerta("Informe o nome do animal");
            return;
        }
        if (String.IsNullOrWhiteSpace(this.EntityTela.Sexo)) {
            MostrarAlerta("Informe o sexo do animal");
            return;
        }
        if (!this.EntityTela.Data_Nascimento) {
            MostrarAlerta("Informe o nascimento do animal");
            return;
        }
        if (String.IsNullOrWhiteSpace(this.EntityTela.Nome_Proprietario)) {
            MostrarAlerta("Informe o nome do proprietario");
            return;
        }
        if (this.EntityTela.Raca <= 0) {
            MostrarAlerta("Informe a raça do animal");
            return;
        }
        this.txtPet.TextBoxAnimal.Obrigatorio = false;
        this.txtPet.TextBoxProprietario.Obrigatorio = false;
        this.dlgDadosAnimal.Hide();
        this.atualizarGrids(this.EntityTela);
    };
    //private OnBtnImprimirClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs) {
    //    e.processOnServer = false;
    //    this.imprimirExame(false);
    //}
    //private OnBtnImprimirGenericoClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs) {
    //    e.processOnServer = false;
    //    this.imprimirExame(true);
    //}
    C_AtmExa_Petz.prototype.OnBtnAnimalClick = function (s, e) {
        e.processOnServer = false;
        this.dlgDadosAnimal.Show();
    };
    C_AtmExa_Petz.prototype.OnBtnCancelarAnimalClick = function (s, e) {
        e.processOnServer = false;
        this.LimparDadosAnimais();
        this.dlgDadosAnimal.Hide();
    };
    C_AtmExa_Petz.prototype.OnBtnEmailClick = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        if (!this.EntityTela.Codigo) {
            MostrarAlerta("Informe um exame cadastrado");
            return;
        }
        MsgBoxJS('Deseja realmente reenviar os resultados para o proprietário?', MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
            if (result.Resultado == MsgBoxResult.No)
                return;
            _this.EnviarResultadoEmail(true, true);
        });
        //const parametros: any = {
        //    codExame: this.EntityTela.Codigo
        //    , codProprietario: this.EntityTela.Cod_Proprietario
        //};
        //const retorno = this.ExecutarFuncaoServerSideSynch("RetornarInformacoesEmail", parametros);
        //this.EnviarEmail.MostrarClient(retorno.destinatarios, retorno.anexos, "Exame Pet", "");
    };
    C_AtmExa_Petz.prototype.OnBtnAnexoClick = function (s, e) {
        e.processOnServer = false;
        if (this.EntityTela.Codigo <= 0) {
            MostrarAlerta("Informe um exame já cadastrado");
            return;
        }
        this.dlgAnexo.MostrarClient(this.PATH_DOCUMENTOS + this.EntityTela.Codigo);
    };
    //public imprimirExame(generico: boolean) {
    //    if (this.txtPet.TextBoxAnimal.GetText().CNum() <= 0 && this.txtPet.TextBoxAnimal.Obrigatorio) {
    //        MostrarAlerta("Informe o animal");
    //        return;
    //    }
    //    if (this.GetScope().Entity['Tipo_Exame'] <= 0) {
    //        MostrarAlerta("Informe o tipo de exame");
    //        return;
    //    }
    //    if (typeof this.EntityTela.Data == 'string') {
    //        this.EntityTela.Data = ("" + this.EntityTela.Data).ToDate();
    //    }
    //    if (typeof this.EntityTela.Data_Nascimento == 'string') {
    //        this.EntityTela.Data_Nascimento = ("" + this.EntityTela.Data_Nascimento).ToDate();
    //    }
    //    if (generico) {
    //        let colunasVisiveis: string[] = []
    //        this.grdResultado.Colunas.forEach((coluna) => {
    //            if (coluna.Visible) {
    //                colunasVisiveis.push(coluna.FieldName);
    //            }
    //        });
    //        const parametros: any = {
    //            codExame: this.EntityTela.Codigo
    //            , listaExames: this.getListaExames(this.EntityTela)
    //            , tipoExame: this.EntityTela.Exame_Observacao.Tipo_Exame
    //            , interpretacao: this.htmlEditor.Html
    //            , codAnimal: this.EntityTela.Cod_Animal
    //            , codEmpresa: this.EntityTela.Empresa
    //            , colunasVisiveis: colunasVisiveis
    //        };
    //        const retorno = this.ExecutarFuncaoServerSideSynch("RetornarImpresaoExameGenerica", parametros);
    //        this.ImprimirDocumentoWord(retorno.Itens, retorno.Documento, "N");
    //    } else {
    //        const nome: any = this.EntityTela.Nome_Animal == null ? this.Animal.Nome_Animal == null ? "" : this.Animal.Nome_Animal : this.EntityTela.Nome_Animal;
    //        const raca: any = this.EntityTela.Raca == null ? this.Animal.RacaEntity == null ? 0 : this.Animal.RacaEntity.Codigo : this.EntityTela.Raca;
    //        const sexo: any = this.EntityTela.Sexo == null ? this.Animal.Sexo == null ? "" : this.Animal.Sexo : this.EntityTela.Sexo;
    //        const dataNascimento: any = this.EntityTela.Data_Nascimento == null ? this.Animal.Nasc == null ? "" : this.Animal.Nasc.ToDate() : this.EntityTela.Data_Nascimento.ToDate();
    //        const clinica: any = this.EntityTela.Clinica_Laboratorio == null ? "" : this.EntityTela.Clinica_Laboratorio;
    //        const proprietario: any = this.EntityTela.Nome_Proprietario == null ? this.Proprietario.Nome == null ? "" : this.Proprietario.Nome : this.EntityTela.Nome_Proprietario
    //        const parametros: any = {
    //            codExame: this.EntityTela.Codigo,
    //            listaExames: this.getListaExames(this.EntityTela),
    //            tipoExame: this.GetScope().Entity['Tipo_Exame'],
    //            interpretacao: this.htmlEditor.Html,
    //            codAnimal: this.EntityTela.Cod_Animal,
    //            animalNaoCadastrado: {
    //                Nome: nome,
    //                codRaca: raca,
    //                Sexo: sexo,
    //                DataNascimento: dataNascimento,
    //                Clinica: clinica
    //            },
    //            codProprietario: this.EntityTela.Cod_Proprietario,
    //            proprietarioNaoCadastrado: {
    //                Nome: proprietario
    //            },
    //            dataExame: this.EntityTela.Data,
    //            codEmpresa: this.EntityTela.Empresa,
    //            codModelo: this.cboModelo.GetValue() == null ? 0 : this.cboModelo.GetValue()
    //        };
    //        const retorno = this.ExecutarFuncaoServerSideSynch("RetornarImpresaoExame", parametros);
    //        this.ImprimirDocumentoWord(retorno.Itens, retorno.Documento, "S");
    //    }
    //}
    C_AtmExa_Petz.prototype.LimparDadosAnimais = function () {
        delete this.EntityTela.Nome_Animal;
        delete this.EntityTela.Sexo;
        delete this.EntityTela.Raca;
        delete this.EntityTela.Data_Nascimento;
        delete this.EntityTela.Nome_Proprietario;
        delete this.EntityTela.Clinica_Laboratorio;
        delete this.EntityTela.Sexo;
    };
    C_AtmExa_Petz.prototype.OnTxtObservacaoDescricaoPesquisou = function (s, e) {
        var atendimento;
        var entidade = this.EntityTela;
        var parametros;
        if (!String.IsNullOrWhiteSpace(this.txtObservacaoCodigo.LabelControl.innerHTML)) {
            this.EntityTela.Exame_Observacao.Observacao = this.txtObservacaoCodigo.LabelControl.innerHTML;
        }
        if (entidade.Codigo) {
            parametros = {
                CodExame: entidade.Codigo
            };
            atendimento = this.ExecutarFuncaoServerSideSynch("GetExameAnimal", parametros);
        }
        if (!atendimento || (atendimento.Observacao_Laboratorio_Codigo != (entidade.Observacao_Laboratorio_Codigo || 0))) {
            if (entidade.Observacao_Laboratorio_Codigo) {
                parametros = {
                    codigo: entidade.Observacao_Laboratorio_Codigo
                };
                var observacao = this.ExecutarFuncaoServerSideSynch("GetObservacaoByCodigo", parametros);
                entidade.Observacao_Laboratorio = observacao.Descricao;
            }
            else {
                entidade.Observacao_Laboratorio = null;
            }
        }
        else {
            entidade.Observacao_Laboratorio_Codigo = atendimento.Observacao_Laboratorio_Codigo;
            entidade.Observacao_Laboratorio = atendimento.Observacao_Laboratorio;
        }
    };
    C_AtmExa_Petz.prototype.OnTxtClinicaPesquisou = function (s, e) {
        if (ValoresSismoura.ConfiguracoesPetshop.Utilizar_laboratorio) {
            if (this.EntityTela.Clinica) {
                var parametros = {
                    codClinica: this.EntityTela.Clinica
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("IsClinica", parametros);
                if (!retorno) {
                    MostrarAlerta("Esse código informado não é uma clinica, pois tem animais cadastrados");
                    this.txtClinica.Limpar();
                }
            }
        }
    };
    C_AtmExa_Petz.prototype.OnGrdResultadoValidandoItem = function (s, e) {
        var item = e.oldData;
        if (item) {
            var valor = e.newData["Valor"];
            if (item.TipoValor == "N" || !item.TipoValor) {
                if (!String.IsNullOrWhiteSpace(valor) && isNaN(parseFloat(valor))) {
                    e.isValid = false;
                    e.errorText = "O campo valor aceita somente números para o Tipo de Exame selecionado.";
                    return;
                }
                else if (String.IsNullOrWhiteSpace(item.Formula) && valor.length > 12) {
                    e.isValid = false;
                    e.errorText = "O campo valor aceita até 12 dígitos para o Tipo de Exame selecionado.";
                    return;
                }
            }
            item.Valor = valor;
            if (this.ListaResultadosAlterados.filter(function (value, index, array) { return value.Codigo_Exame == item.Codigo_Exame; }).length == 0) {
                this.ListaResultadosAlterados.push(item);
            }
            try {
                this.CalcularFormulas();
            }
            catch (e) {
            }
        }
    };
    C_AtmExa_Petz.prototype.OnGrdResultadoEditouItemGrade = function (s, e) {
        try {
            this.htmlEditor.Html = this.ExecutarFuncaoServerSideSynch("GetHtmlPadraoExame", { codAtendimento: this.EntityTela.Codigo, exames: this.grdResultado.DataSource });
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AtmExa_Petz.prototype.atualizarGrids = function (Entity) {
        if (!Entity.Codigo) {
            Entity.Codigo = 0;
        }
        if (!Entity.Especie) {
            Entity.Especie = 0;
        }
        if (Entity.Exames) {
            if (Entity.Exames.length > 0) {
                Entity['Tipo_Exame'] = Entity.Exames[0].Tipo_Exame;
            }
        }
        var retorno;
        if (this.Animal && this.Animal.EspecieEntity) {
            var parametros = {
                codAtendimento: Entity.Codigo,
                codAnimal: this.Animal.Codigo,
                codEspecie: this.Animal.EspecieEntity.Codigo
            };
            retorno = this.ExecutarFuncaoServerSideSynch("RetornarGradesTela", parametros);
        }
        if (!retorno) {
            retorno = {};
        }
        if (!retorno.Resultado) {
            retorno.Resultado = [];
        }
        if (!retorno.Exames) {
            retorno.Exames = [];
        }
        this.grdExames.PreencherGrid(retorno.Exames);
        this.ListaResultadosRecebidos = retorno.Resultado;
        this.filtrarGridResultados(Entity);
    };
    C_AtmExa_Petz.prototype.filtrarGridResultados = function (Entity) {
        var listaPreencher = this.getListaExames(Entity);
        listaPreencher = listaPreencher.filter(function (value, index, array) { return value.TipoExame.toString() == Entity['Tipo_Exame']; });
        listaPreencher = listaPreencher.sort(function (a, b) { return a.Codigo_Exame < b.Codigo_Exame ? -1 : 1; });
        this.grdResultado.PreencherGrid(listaPreencher);
        this.CalcularFormulas();
    };
    C_AtmExa_Petz.prototype.getListaExames = function (Entity) {
        var listaRetorno = [];
        this.ListaResultadosAlterados.forEach(function (value, index, array) {
            listaRetorno.push(value);
        });
        this.ListaResultadosRecebidos.forEach(function (value, index, array) {
            var existe = false;
            listaRetorno.forEach(function (valueExistente, indexExistente, arrayExistente) {
                if (value.Codigo_Exame == valueExistente.Codigo_Exame) {
                    existe = true;
                }
            });
            if (!existe) {
                listaRetorno.push(value);
            }
        });
        return listaRetorno;
    };
    C_AtmExa_Petz.prototype.atualizarProprietario = function () {
        var retorno;
        if (this.EntityTela.Cod_Proprietario) {
            var parametros = {
                codCliente: this.EntityTela.Cod_Proprietario
            };
            retorno = this.ExecutarFuncaoServerSideSynch("RetornarInfoCliente", parametros);
        }
        if (retorno) {
            this.inicializarPessoaEntity(retorno.Pessoa, retorno.Cidade);
            this.Proprietario = retorno.Pessoa;
        }
        else {
            this.Proprietario = null;
        }
    };
    C_AtmExa_Petz.prototype.atualizarAnimal = function () {
        var retorno;
        if (this.EntityTela.Cod_Animal) {
            var parametros = {
                codAnimal: this.EntityTela.Cod_Animal
            };
            retorno = this.ExecutarFuncaoServerSideSynch("RetornarInfoAnimal", parametros);
        }
        if (retorno) {
            this.inicializarAnimalEntity(retorno);
            this.Animal = retorno;
        }
        else {
            this.Animal = null;
        }
        this.atualizarGrids(this.EntityTela);
    };
    C_AtmExa_Petz.prototype.verificarProprietarioObrigatorio = function () {
        if (this.ProprietarioCadastrado) {
            $(this.txtPet.TextBoxProprietario.Textbox).removeAttr("disabled");
            this.txtPet.TextBoxProprietario.Obrigatorio = true;
        }
        else {
            $(this.txtPet.TextBoxProprietario.Textbox).attr("disabled", "disabled");
            this.txtPet.TextBoxProprietario.Obrigatorio = false;
            delete this.EntityTela.Cod_Proprietario;
            this.txtPet.TextBoxProprietario.Limpar();
        }
    };
    C_AtmExa_Petz.prototype.verificarAnimalObrigatorio = function () {
        if (this.AnimalCadastrado) {
            $(this.txtPet.TextBoxAnimal.Textbox).removeAttr("disabled");
            this.txtPet.TextBoxAnimal.Obrigatorio = true;
        }
        else {
            $(this.txtPet.TextBoxAnimal.Textbox).attr("disabled", "disabled");
            this.txtPet.TextBoxAnimal.Obrigatorio = false;
            delete this.EntityTela.Cod_Animal;
            this.txtPet.TextBoxAnimal.Limpar();
        }
    };
    C_AtmExa_Petz.prototype.inicializarAtendimentoEntity = function (atendimento) {
        criarPropertyObjeto(atendimento, "asdasd", function (value) {
        }, function () {
            return atendimento.Cod_Animal;
        });
    };
    C_AtmExa_Petz.prototype.inicializarPessoaEntity = function (pessoa, cidade) {
        if (!pessoa)
            return;
        criarPropertyObjeto(pessoa, "Endereco_Formatado", function (value) {
        }, function () {
            var cidadeEstado = "";
            if (cidade) {
                cidadeEstado = cidade.Cidade + " - " + cidade.Estado;
            }
            return MontarEnderecoProprietario(pessoa.Endereco, pessoa.Bairro, cidadeEstado);
        });
    };
    C_AtmExa_Petz.prototype.inicializarAnimalEntity = function (animal) {
        criarPropertyObjeto(animal, "Idade_Sexo_Formatado", function (value) {
        }, function () {
            var retorno;
            if (animal.Nasc) {
                retorno = animal.Idade_Formatada;
            }
            if (!String.IsNullOrWhiteSpace(retorno)) {
                retorno += String.IsNullOrWhiteSpace(animal.Sexo_Formatado) ? "" : " / " + animal.Sexo_Formatado;
            }
            else {
                retorno = animal.Sexo_Formatado;
            }
            return retorno;
        });
    };
    C_AtmExa_Petz.prototype.CalcularFormulas = function () {
        var lista = this.grdResultado.DataSource;
        var exame = null;
        var Exames;
        var equacao = "";
        var resultado;
        var resultDecimal;
        var valorDigitado;
        try {
            lista.forEach(function (item, index, array) {
                Exames = [];
                equacao = "";
                exame = null;
                if (!String.IsNullOrWhiteSpace(item.Formula) && item.TipoValor != "A") {
                    var formulaExtracao = item.Formula;
                    while (formulaExtracao.indexOf("<") > -1) {
                        var startCodigoFormula = formulaExtracao.indexOf("<");
                        var endCodigoFormula = formulaExtracao.indexOf(">");
                        Exames.push(formulaExtracao.substring(startCodigoFormula + 1, endCodigoFormula).CNum());
                        formulaExtracao = formulaExtracao.substr(endCodigoFormula + 1);
                    }
                    equacao = item.Formula;
                    Exames.forEach(function (e, indexE, arrayE) {
                        exame = lista.filter(function (t, i, a) { return t.Codigo_Exame == e; }).pop();
                        if (exame) {
                            valorDigitado = exame.Valor.CNum().toString();
                            valorDigitado = replaceAll(valorDigitado, ".", "");
                            valorDigitado = replaceAll(valorDigitado, ",", ".");
                            equacao = replaceAll(equacao, "<" + e.toFixed() + ">", valorDigitado);
                        }
                    });
                    try {
                        resultDecimal = eval(equacao);
                        resultado = resultDecimal.Format(item.Calculo_Casas);
                    }
                    catch (ex) {
                        resultado = "";
                    }
                    item.Resultado = resultado;
                }
                else {
                    item.Resultado = item.Valor;
                }
            });
        }
        catch (ex) {
        }
    };
    C_AtmExa_Petz.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        try {
            this.PreencherProximosExames();
            (this.grdProximosExames.Visible) ? this.dlgDepoisGravar.Show() : this.EnviarResultadoEmail(true, false);
        }
        catch (ex) {
            LogarException(ex);
        }
        return true;
    };
    C_AtmExa_Petz.prototype.PreencherProximosExames = function () {
        if (ValoresSismoura.ConfiguracoesPetshop.Status_Exame_Execucao <= 0) {
            MostrarAlerta("Configuração de status em execução não configurada");
            return false;
        }
        var param = {
            codAnimal: this.EntityTela.Cod_Animal,
            codExame: this.EntityTela.Codigo,
            statusExameExecucao: ValoresSismoura.ConfiguracoesPetshop.Status_Exame_Execucao
        };
        var proximosExames = this.ExecutarFuncaoServerSideSynch("GetExamesPendentes", param);
        if (!proximosExames || proximosExames.length <= 0) {
            this.grdProximosExames.PreencherGrid([]);
            this.grdProximosExames.Visible = false;
        }
        else {
            this.grdProximosExames.Visible = true;
            this.grdProximosExames.PreencherGrid(proximosExames);
            this.grdProximosExames.Refresh();
        }
    };
    C_AtmExa_Petz.prototype.OnGrdProximosExamesSelecionouLinha = function (s, e) {
        var codExame = CNum(e.data['Codigo_Exame']);
        if (codExame <= 0) {
            return;
        }
        this.dlgDepoisGravar.Hide();
        this.EntityTela.Codigo = codExame;
        this.RefreshAngular();
    };
    C_AtmExa_Petz.prototype.OnGrdProximosExamesClickBotaoLinha = function (s, e) {
        try {
            if (e.commandName == 'btnRecusado') {
                this.exame = ("" + this.grdProximosExames.DataSource[e.rowIndex].Codigo_Exame).CNum();
                this.dlgMotivoRecusa.Show();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AtmExa_Petz.prototype.EnviarResultadoEmail = function (enviarTudo, apenasCliente) {
        try {
            if (ValoresSismoura.ConfiguracoesPetshop.Status_Exame_Finalizado <= 0) {
                MostrarAlerta("Status finalizado não configurado");
                return;
            }
            if (ValoresSismoura.ConfiguracoesPetshop.Remetente_Resultado_Exame <= 0) {
                MostrarAlerta("Nenhuma e-mail configurado como remetente");
                return;
            }
            if (ValoresSismoura.ConfiguracoesPetshop.Configuracao_Email_Resultado_Exame <= 0) {
                MostrarAlerta("Nenhum layout foi configurado");
                return;
            }
            var param = {
                codExame: this.EntityTela.Codigo,
                statusFinalizado: ValoresSismoura.ConfiguracoesPetshop.Status_Exame_Finalizado,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado,
                enviarTudo: enviarTudo,
                apenasCliente: apenasCliente
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("EnviarResultadoExame", param, function (d) {
                var retorno = GetRetornoAJAX(d);
                fecharEspera();
                (String.IsNullOrWhiteSpace(retorno)) ? MostrarMensagem("E-mails enviados com sucesso") : MostrarAlerta(retorno);
            }, function (er) {
                fecharEspera();
                LogarExceptionAjax(er);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    C_AtmExa_Petz.prototype.OnBtnEnviarExameClick = function (s, e) {
        e.processOnServer = false;
        this.EnviarResultadoEmail(false, false);
        this.dlgDepoisGravar.Hide();
    };
    C_AtmExa_Petz.prototype.OnBtnFecharEnvioClick = function (s, e) {
        e.processOnServer = false;
        this.dlgDepoisGravar.Hide();
    };
    C_AtmExa_Petz.prototype.OnClickConfirmarRecusa = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            if (this.txtMotivoRecusa.GetText().CNum() <= 0) {
                MostrarAlerta("Informe o motivo da recusa!");
                this.txtMotivoRecusa.Focus();
                return;
            }
            MsgBoxJS("Deseja realmente recusar o Exame?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.No)
                    return;
                var param = {
                    exame: _this.exame,
                    motivoRecusa: _this.txtMotivoRecusa.GetText().CNum(),
                    observacao: _this.txtObservacaoRecusa.GetText(),
                    codUsuario: ValoresSismoura.UsuarioLogado,
                    tela: ValoresSismoura.NomeTela
                };
                abrirEspera();
                _this.ExecutarFuncaoServerSideAsynch("RecusarExame", param, function (d) {
                    fecharEspera();
                    if (d) {
                        MostrarMensagem("Exame Recusado com sucesso");
                        _this.dlgMotivoRecusa.Hide();
                        _this.PreencherProximosExames();
                        //if (ValoresSismoura.ConfiguracoesPetshop.Configuracao_Email_Exame_Recusado <= 0) {
                        //    MostrarAlerta("Configuração de e e-mail não encontrada");
                        //    return;
                        //}
                        //if (ValoresSismoura.ConfiguracoesPetshop.Remetente_Email_Exame_Recusado <= 0) {
                        //    MostrarAlerta("Nenhuma e-mail configurado como remetente");
                        //    return;
                        //}
                        ////const param: any = {
                        ////    atendimento: this.atendimento
                        ////};
                        //(this.ExecutarFuncaoServerSideSynch("EnviarEmailExameRecusado", param)) ?
                        //    MostrarMensagem("E-mail enviado com sucesso") :
                        //    MostrarAlerta("Erro ao enviar e-mail. Verifique se o profissional solicitante possue e-mail cadastrado no sistema");
                    }
                    else {
                        MostrarError("Ocorreu um erro no sistema");
                    }
                }, function (err) {
                    fecharEspera();
                    LogarExceptionAjax(err);
                }, _this);
            });
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AtmExa_Petz.prototype.OnFechouModalMotivoRecusa = function (s, e) {
        this.txtMotivoRecusa.Limpar();
        this.txtObservacaoRecusa.Limpar();
    };
    return C_AtmExa_Petz;
}(MouraPageCadastroAngular));
var c_AtmExa_Petz = new C_AtmExa_Petz();
//# sourceMappingURL=C_AtmExa_Petz.js.map