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
var C_TabPre = /** @class */ (function (_super) {
    __extends(C_TabPre, _super);
    function C_TabPre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_TabPre.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabPre.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabPre.prototype, "cboPrecoBase", {
        get: function () {
            return window['cboPrecoBase_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabPre.prototype, "cboOperacao", {
        get: function () {
            return window['cboOperacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabPre.prototype, "txtMargem", {
        get: function () {
            return window['txtMargem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabPre.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabPre.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabPre.prototype, "chkIsTabelaEspecial", {
        get: function () {
            return window['chkIsTabelaEspecial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabPre.prototype, "divPeriodoListaPreco", {
        get: function () {
            return $('#divPeriodoListaPreco')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabPre.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabPre.prototype, "grdDiasSemana", {
        get: function () {
            return window['grdDiasSemana_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabPre.prototype, "Dias", {
        get: function () {
            return this.GetScope()["Dias"];
        },
        set: function (value) {
            this.GetScope()["Dias"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TabPre.prototype, "Dia", {
        get: function () {
            return this.GetScope()["Dia"];
        },
        set: function (value) {
            this.GetScope()["Dia"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_TabPre.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.chkIsTabelaEspecial.Visible = ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus;
        this.PreencherGrade();
    };
    C_TabPre.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_TabPre.prototype.PreencherGrade = function () {
        try {
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", {});
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_TabPre.prototype.OnAntesGravar = function () {
        var _this = this;
        _super.prototype.OnAntesGravar.call(this);
        if (ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Preco_Automatico_Atendimento) {
            if (this.Dias) {
                this.GetScope().Entity.Dias = [];
                var listaPreco = 0;
                if (this.EntityTela.Codigo)
                    listaPreco = this.EntityTela.Codigo;
                var param = {
                    dias: this.Dias,
                    listaPreco: listaPreco,
                    empresas: this.lstEmpresa.GetValuesRelacaoNumber()
                };
                //const isDiaPeriodoCadastrado: boolean = this.ExecutarFuncaoServerSideSynch("IsDiaPeriodoCadastrado", param);
                //if (isDiaPeriodoCadastrado) {
                //    MostrarAlerta("Já existe uma Lista de Preço cadastrada para o dia e hora informado");
                //    return false;
                //}
                var sair_1 = false;
                this.Dias.forEach(function (q) {
                    if (q.Hora_Inicio_Dois != '00:00' || q.Hora_Fim_Dois != '00:00') {
                        if (q.Hora_Inicio_Dois <= q.Hora_Fim || q.Hora_Inicio_Dois <= q.Hora_Inicio) {
                            sair_1 = true;
                            MostrarAlerta("A continuação de Hora Ínicio e/ou Fim não pode ser maior que a primeira");
                            return;
                        }
                        if (q.Hora_Fim_Dois <= q.Hora_Fim || q.Hora_Fim_Dois <= q.Hora_Inicio) {
                            sair_1 = true;
                            MostrarAlerta("A continuação de Hora Ínicio e/ou Fim não pode ser maior que a primeira");
                            return;
                        }
                        if (q.Hora_Fim_Dois <= q.Hora_Inicio_Dois) {
                            sair_1 = true;
                            MostrarAlerta("A continuação de Hora Fim não pode ser menor do que a ínicio");
                            return;
                        }
                    }
                    if (q.Hora_Fim != '00:00') {
                        _this.GetScope().Entity.Dias.push({
                            Dia_Semana: q.Dia_Semana,
                            Hora_Inicio: q.Hora_Inicio,
                            Hora_Fim: q.Hora_Fim,
                            Hora_Inicio_Dois: q.Hora_Inicio_Dois,
                            Hora_Fim_Dois: q.Hora_Fim_Dois
                        });
                    }
                });
                if (sair_1) {
                    return false;
                }
            }
        }
        this.GetScope().Entity.Empresas = [];
        for (var x = 0; x < this.lstEmpresa.GetValues().length; x++) {
            var empresa = {};
            empresa.Empresa = +this.lstEmpresa.GetValues()[x];
            this.GetScope().Entity.Empresas.push(empresa);
        }
        if (this.cboTipo.GetText() == '') {
            this.EntityTela.Tipo = -1;
        }
        return true;
    };
    C_TabPre.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        if (!ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            MsgBoxJS("Deseja atualizar todos os produtos nessa Lista de Preço?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouAtualizarTodos, this));
        }
        this.PreencherGrade();
        return true;
    };
    C_TabPre.prototype.OnSelecionouAtualizarTodos = function (result) {
        var _this = this;
        if (result.Resultado == MsgBoxResult.Yes) {
            try {
                var parametros = {
                    lista: this.txtCodigo.GetText().CNum()
                };
                abrirEspera("Carregando ...");
                this.ExecutarFuncaoServerSideAsynch("InserirCorrigirListaPreco", parametros, function (d) {
                    fecharEspera();
                    if (d) {
                        MostrarMensagem("Lista atualizada com sucesso");
                        _this.PreencherGrade();
                    }
                }, function (e) {
                    fecharEspera();
                    LogarException(e);
                }, this);
            }
            catch (ex) {
                LogarException(ex);
            }
        }
        else {
            this.PreencherEntidade("" + this.EntityTela.Codigo);
        }
    };
    C_TabPre.prototype.LimparCampos = function () {
        this.txtCodigo.Limpar();
        this.txtDescricao.Limpar();
        this.txtMargem.Limpar();
        this.lstEmpresa.LimparSelecao();
        this.cboPrecoBase.SetValue('Preco_Custo');
        this.cboOperacao.SetValue(0);
        this.cboTipo.SetSelectedIndex(-1);
    };
    C_TabPre.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_TabPre.prototype.OnDepoisLimpar = function (Entity) {
        Entity.Preco_Base = 'Preco_Custo';
        Entity.Operacao = 0;
        this.lstEmpresa.LimparSelecao();
        this.PreencherEmpresas(Entity.Empresas);
        Entity.Dias = [];
        this.PreencherDias(null);
        if (!ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Preco_Automatico_Atendimento) {
            $(this.divPeriodoListaPreco).addClass("invisible");
        }
    };
    C_TabPre.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_TabPre.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.PreencherEmpresas(Entity.Empresas);
        if (ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Preco_Automatico_Atendimento) {
            this.PreencherDias(Entity.Dias);
        }
    };
    C_TabPre.prototype.PreencherEmpresas = function (empresas) {
        var codigos = [];
        if (empresas) {
            for (var x = 0; x < empresas.length; x++) {
                codigos.push(empresas[x].Empresa.toString());
            }
            if (this.lstEmpresa) {
                this.lstEmpresa.SetValues(codigos);
            }
        }
    };
    C_TabPre.prototype.PreencherDias = function (dias) {
        try {
            var diasGrid = [];
            var horaInicio_1 = "";
            var horaFim_1 = "";
            var horaInicioDois_1 = "";
            var horaFimDois_1 = "";
            var _loop_1 = function (x) {
                horaInicio_1 = "00:00";
                horaFim_1 = "00:00";
                horaInicioDois_1 = "00:00";
                horaFimDois_1 = "00:00";
                if (dias) {
                    //const diaEncontrado = dias.find(q => q.Dia_Semana === x);
                    //if (diaEncontrado) {
                    //    horaInicio = dias[x].Hora_Inicio;
                    //    horaFim = dias[x].Hora_Fim;
                    //}
                    dias.forEach(function (q) {
                        if (q.Dia_Semana == x) {
                            horaInicio_1 = q.Hora_Inicio;
                            horaFim_1 = q.Hora_Fim;
                            horaInicioDois_1 = q.Hora_Inicio_Dois;
                            horaFimDois_1 = q.Hora_Fim_Dois;
                        }
                    });
                }
                diasGrid.push({
                    Descricao_Dia: this_1.RetornaDiaDescricao(x),
                    Dia_Semana: x,
                    Hora_Inicio: horaInicio_1,
                    Hora_Fim: horaFim_1,
                    Hora_Inicio_Dois: horaInicioDois_1,
                    Hora_Fim_Dois: horaFimDois_1
                });
            };
            var this_1 = this;
            for (var x = 1; x <= 8; x++) {
                _loop_1(x);
            }
            this.Dias = diasGrid;
            this.GetScope().$applyAsync();
            this.grdDiasSemana.AtualizarGrid();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_TabPre.prototype.RetornaDiaDescricao = function (dia) {
        var retorno = "";
        try {
            switch (dia) {
                case 1:
                    retorno = "Domingo";
                    break;
                case 2:
                    retorno = "Segunda-feira";
                    break;
                case 3:
                    retorno = "Terça-feira";
                    break;
                case 4:
                    retorno = "Quarta-feira";
                    break;
                case 5:
                    retorno = "Quinta-feira";
                    break;
                case 6:
                    retorno = "Sexta-feira";
                    break;
                case 7:
                    retorno = "Sábado";
                    break;
                case 8:
                    retorno = "Feriado";
                    break;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return retorno;
    };
    return C_TabPre;
}(MouraPageCadastroAngular));
var c_TabPre = new C_TabPre();
//# sourceMappingURL=C_TabPre.js.map