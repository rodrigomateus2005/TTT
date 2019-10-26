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
var C_AtenAni = /** @class */ (function (_super) {
    __extends(C_AtenAni, _super);
    function C_AtenAni() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.UltimoRegistro = 0;
        return _this;
    }
    Object.defineProperty(C_AtenAni.prototype, "Atendimento", {
        //get agpData(): HTMLInputElement {
        //    return <HTMLInputElement> $("#agpData_Label")[0];
        //}
        get: function () {
            return this.GetScope()["Entity"];
        },
        set: function (value) {
            this.GetScope()["Entity"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "Servicos", {
        get: function () {
            return this.GetScope()["Servicos"];
        },
        set: function (value) {
            this.GetScope()["Servicos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "Servico", {
        get: function () {
            return this.GetScope()["Servico"];
        },
        set: function (value) {
            this.GetScope()["Servico"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "lblEspecie", {
        get: function () {
            return window['lblEspecie_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "lblRaca", {
        get: function () {
            return window['lblRaca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "lblIdade", {
        get: function () {
            return window['lblIdade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "chkJuntarServicos", {
        get: function () {
            return window['chkJuntarServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "lblUltimo", {
        get: function () {
            return window['lblUltimo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "txtServico", {
        get: function () {
            return window['txtServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "cboListaPreco", {
        get: function () {
            return window['cboListaPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "txtValorUnitario", {
        get: function () {
            return window['txtValorUnitario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "txtQuantidade", {
        get: function () {
            return window['txtQuantidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "txtDesconto", {
        get: function () {
            return window['txtDesconto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "btnImprimir", {
        get: function () {
            return window['btnImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "txtDescontoPorcent", {
        get: function () {
            return window['txtDescontoPorcent_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "lblTotal", {
        get: function () {
            return window['lblTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "cboModelo", {
        get: function () {
            return window['cboModelo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "txtDataServico", {
        get: function () {
            return window['txtDataServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "txtHoraServico", {
        get: function () {
            return window['txtHoraServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "txtHoraPegar", {
        get: function () {
            return window['txtHoraPegar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "txtHoraEntrega", {
        get: function () {
            return window['txtHoraEntrega_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "txtProfissional", {
        get: function () {
            return window['txtProfissional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "txtObservacao", {
        get: function () {
            return window['txtObservacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "grdServicos", {
        get: function () {
            return window['grdServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "txtDias", {
        get: function () {
            return window['txtDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "txtQuantidaDeDias", {
        get: function () {
            return window['txtQuantidaDeDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "btnNovo", {
        get: function () {
            return window['btnNovo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AtenAni.prototype, "chkData", {
        get: function () {
            return window['chkData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_AtenAni.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.txtPet.ProcurouAnimal, this.OnTxtPetProcurouAnimal, this);
        adicionarEventoMoura(this.txtServico.Procurou, this.OnTxtServicoProcurou, this);
        if (this.cboListaPreco && this.cboListaPreco.Combo) {
            adicionarEventoDevExpress(this.cboListaPreco.Combo.SelectedIndexChanged, this.OnCboListaPreco_comboBoxChange, this);
            adicionarEventoDevExpress(this.cboListaPreco.Combo.GotFocus, this.OnCboListaPrecoGotFocus, this);
        }
        if (this.grdServicos) {
            adicionarEventoMoura(this.grdServicos.AdicionandoItem, this.OnAdicionandoItemServico, this);
            adicionarEventoMoura(this.grdServicos.SetouItem, this.OnSetouItemServico, this);
            adicionarEventoMoura(this.grdServicos.LimpouItem, this.OnLimpouItemServico, this);
            adicionarEventoMoura(this.grdServicos.ItemAdicionado, this.OnAdiciouItemServico, this);
            adicionarEventoMoura(this.grdServicos.Validando, this.OnValidandoItemServico, this);
            adicionarEventoMoura(this.grdServicos.ExcluindoItem, this.OnExcluindoItemServico, this);
        }
        if (this.txtProfissional) {
            adicionarEventoMoura(this.txtProfissional.AntesAbrirProcura, this.OnAntesAbrirProcura, this);
        }
        if (this.btnNovo) {
            adicionarEventoMoura(this.btnNovo.Click, this.OnNovoClick, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnGravarClick, this);
        }
        if (this.btnImprimir) {
            adicionarEventoMoura(this.btnImprimir.Click, this.OnClickImprimir, this);
        }
        if (this.chkData) {
            adicionarEventoMoura(this.chkData.CheckChanged, this.OnCheckData, this);
        }
        if (this.lblUltimo) {
            this.AtualizarUltimoAtendimento();
        }
    };
    C_AtenAni.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparAtendimento();
        setTimeout($.proxy(function () {
            if (this.ParametrosTela.Horario_Atendimento) {
                try {
                    this.GetScope().Entity.horarioAtendimento = this.ParametrosTela.Horario_Atendimento.ToDate();
                    this.GetScope().$applyAsync();
                }
                catch (ex) {
                }
            }
            if (this.ParametrosTela.codAtendimento) {
                this.GetScope().Entity.Codigo = this.ParametrosTela.codAtendimento.CNum();
                this.GetScope().$applyAsync();
            }
            else if (this.ParametrosTela.codAnimal) {
                this.GetScope().Entity.Cod_Animal = this.ParametrosTela.codAnimal.CNum();
                this.GetScope().$applyAsync();
            }
            if (this.ParametrosTela.codCheckIn) {
                this.GetScope().Entity.TempCodigoCheckIn = this.ParametrosTela.codCheckIn.CNum();
                this.GetScope().$applyAsync();
            }
        }, this), 500);
    };
    C_AtenAni.prototype.LimparAtendimento = function () {
        this.Atendimento = {};
        this.OnDepoisLimpar(this.Atendimento);
    };
    C_AtenAni.prototype.OnDepoisLimpar = function (Entity) {
        Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        Entity.Operador = ValoresSismoura.UsuarioLogadoAbreviacao;
        Entity.TempCodigoCheckIn = 0;
        Entity.Data = new Date();
        Entity.Servicos = [];
        Entity.Produtos = [];
        Entity["Juntar"] = true;
        this.chkData.Checked = false;
        this.Servicos = [];
        this.mostrouFuncao = false;
        this.grdServicos.Limpar();
        this.txtDias.ReadOnly = false;
        this.txtDataServico.Disabled = false;
        this.AtualizarUltimoAtendimento();
        this.UltimoRegistro = 0;
    };
    C_AtenAni.prototype.VerificarAutorizacaoDescontoAtendimento = function (retorno) {
        if (retorno.Autorizado) {
            this.mostrouFuncao = true;
            this.grdServicos.AdicionarOuAlterarItemAtual();
        }
        else {
            this.mostrouFuncao = false;
            MostrarAlerta("O usuário não tem permissão para aplicar o desconto no serviço.");
        }
    };
    C_AtenAni.prototype.PreencherServicos = function (entidade) {
        try {
            var servicos = this.Servicos;
            var servicosExistentes = entidade.Servicos;
            entidade.Servicos = [];
            for (var x = 0; x < servicos.length; x++) {
                var novoServico = {};
                var servicoGrid;
                for (var y = 0; y < servicosExistentes.length; y++) {
                    if (servicosExistentes[y].Codigo == servicos[x].Codigo) {
                        novoServico = servicosExistentes[y];
                        y = servicosExistentes.length;
                    }
                }
                servicoGrid = servicos[x];
                novoServico.Codigo = servicoGrid.Codigo;
                novoServico.Cod_Animal = entidade.Cod_Animal;
                novoServico.Concluido = servicoGrid.Concluido;
                novoServico.Data = servicoGrid.Data;
                novoServico.Data_Entrega = servicoGrid.Data_Entrega;
                novoServico.Desconto = servicoGrid.Desconto;
                novoServico.Finalizado = false;
                novoServico.Obs = servicoGrid.Observacao;
                novoServico.Qtde = servicoGrid.Quantidade;
                novoServico.Servico = servicoGrid.Servico_Codigo;
                novoServico.Usuario = ValoresSismoura.UsuarioLogado;
                novoServico.Valor = servicoGrid.Valor;
                novoServico.Participantes = servicoGrid.Participantes;
                novoServico.VacinaAgendada = servicoGrid.VacinaAgendada;
                novoServico.ServicoConsulta_Origem = servicoGrid.ServicoConsulta_Origem;
                novoServico.Lote = servicoGrid.Lote;
                novoServico.Data_Validade = servicoGrid.Data_Validade;
                novoServico.Laboratorio = servicoGrid.Laboratorio;
                novoServico.Partida = servicoGrid.Partida;
                novoServico.Lista_Preco = servicoGrid.Lista_Preco;
                if (!servicoGrid.Entregar) {
                    novoServico.Hora_Entrega = "";
                }
                else {
                    novoServico.Hora_Entrega = servicoGrid.Entregar.FormataHoraSismoura();
                }
                if (!servicoGrid.Pegar) {
                    novoServico.Hora_Pegar = "";
                }
                else {
                    novoServico.Hora_Pegar = servicoGrid.Pegar.FormataHoraSismoura();
                }
                if (!servicoGrid.Previsao) {
                    novoServico.Hora_Servico = "";
                }
                else {
                    novoServico.Hora_Servico = servicoGrid.Previsao.FormataHoraSismoura();
                }
                if (servicoGrid.Profissional_Codigo) {
                    novoServico.Profi1 = servicoGrid.Profissional_Codigo;
                }
                if (!novoServico.Participantes) {
                    novoServico.Participantes = [];
                }
                entidade.Servicos.push(novoServico);
            }
            this.adicionarCamposComputadosAtendimento(entidade);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AtenAni.prototype.adicionarCamposComputadosAtendimento = function (atendimento) {
        if (atendimento.__lookupGetter__("Valor_Total") == undefined) {
            atendimento.Valor_Total = undefined;
            atendimento.__defineGetter__("Valor_Total", function () {
                var valorTotal = 0.0;
                if (atendimento.Servicos) {
                    for (var x = 0; x < atendimento.Servicos.length; x++) {
                        valorTotal += (atendimento.Servicos[x].Valor * atendimento.Servicos[x].Qtde) - atendimento.Servicos[x].Desconto;
                    }
                }
                if (atendimento.Produtos) {
                    for (var x = 0; x < atendimento.Produtos.length; x++) {
                        valorTotal += (atendimento.Produtos[x].Valor_Unitario * atendimento.Produtos[x].Qtde) - atendimento.Produtos[x].Desconto;
                    }
                }
                return valorTotal;
            });
            atendimento.__defineSetter__("Valor_Total", function (val) {
            });
        }
    };
    C_AtenAni.prototype.GetTotalServicos = function () {
        var servicos;
        var retorno = 0;
        servicos = this.Servicos;
        for (var x = 0; x < servicos.length - 1; x++) {
            retorno += servicos[x].Total;
        }
        return retorno;
    };
    C_AtenAni.prototype.OnLimpouItemServico = function (s, e) {
        try {
            var entidade;
            entidade = e.item;
            this.retornoComplementosItemServico = null;
            var servicos = this.Servicos;
            if (!servicos)
                servicos = [];
            var maxContador = 0;
            for (var x = 0; x < servicos.length; x++) {
                if (servicos[x].Contador > maxContador) {
                    maxContador = servicos[x].Contador;
                }
            }
            entidade.Contador = maxContador + 1;
            entidade.Quantidade = 1;
            entidade.Valor = 0.0;
            entidade.Desconto = 0.0;
            entidade.GerarSemData = false;
            this.chkData.Checked = false;
            if (this.horarioAtendimento) {
                entidade.Data = this.horarioAtendimento;
                entidade.Previsao = this.horarioAtendimento;
            }
            else {
                entidade.Data = new Date();
                entidade.Previsao = new Date();
            }
            this.txtQuantidaDeDias.Limpar();
            this.txtDias.Limpar();
            this.OnCheckData();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AtenAni.prototype.OnExcluindoItemServico = function (s, e) {
        try {
            if (this.Atendimento.IsPago) {
                MostrarAlerta("Este serviço não pode ser excluído, pois já foi pago");
                e.cancelar = true;
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AtenAni.prototype.getRetornoComplementoItemServico = function (entidade, indexItem) {
        try {
            if (!this.retornoComplementosItemServico || this.retornoComplementosItemServico.Codigo_Servico != entidade.Servico_Codigo) {
                var parametros;
                var contemAgendamentoSelecionado = false;
                if (entidade.VacinaAgendada) {
                    contemAgendamentoSelecionado = true;
                }
                parametros = {
                    codServico: entidade.Servico_Codigo,
                    indexItem: indexItem,
                    codAtendimento: this.Atendimento.Codigo,
                    codAnimal: this.Atendimento.Cod_Animal,
                    codProfissional: entidade.Profissional_Codigo,
                    contemAgendamentoSelecionado: contemAgendamentoSelecionado,
                    dataServico: entidade.Data,
                    horaServico: entidade.Previsao,
                    codEmpresa: this.cboEmpresa.GetValue()
                };
                if (parametros.codAtendimento == null || parametros.codAtendimento == undefined) {
                    parametros.codAtendimento = 0;
                }
                if (parametros.codAnimal == null || parametros.codAnimal == undefined) {
                    parametros.codAnimal = 0;
                }
                if (parametros.codProfissional == null || parametros.codProfissional == undefined) {
                    parametros.codProfissional = 0;
                }
                if (parametros.codServico == null || parametros.codServico == undefined) {
                    parametros.codServico = 0;
                }
                this.retornoComplementosItemServico = this.ExecutarFuncaoServerSideSynch("RetornarComplementosItemServico", parametros);
            }
            return this.retornoComplementosItemServico;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AtenAni.prototype.OnValidandoItemServico = function (s, e) {
        try {
            var entidade;
            entidade = e.item;
            this.getRetornoComplementoItemServico(entidade, e.index);
            if (entidade.Servico_Codigo <= 0) {
                e.errorText = "Informe o serviço!";
                e.cancelar = true;
                return;
            }
            if (entidade.Valor <= 0) {
                e.errorText = "Informe o valor!!!";
                e.cancelar = true;
                return;
            }
            if (!entidade.Data && this.txtDataServico.Obrigatorio) {
                e.errorText = "Informe a data de serviço!!!";
                e.cancelar = true;
                return;
            }
            if (!entidade.Previsao) {
                e.errorText = "Informe a hora do serviço corretamente!!!";
                e.cancelar = true;
                return;
            }
            //if (!entidade.Entregar) {
            //    e.errorText = "Informe a Hora Entrega corretamente!!!"
            //    e.cancelar = true;
            //    return;
            //}
            //if (!entidade.Pegar) {
            //    e.errorText = "Informe a Hora Pegar corretamente!!!"
            //    e.cancelar = true;
            //    return;
            //}
            if (entidade.Profissional_Codigo <= 0) {
                e.errorText = "Informe o profissional!!!";
                e.cancelar = true;
                return;
            }
            if (this.retornoComplementosItemServico.IsAtendimentoEmComanda) {
                //MostrarAlerta("Não é possível incluir serviços em um atendimento que está em uma comanda");
                e.errorText = "Não é possível incluir serviços em um atendimento que está em uma comanda";
                e.cancelar = true;
                return;
            }
            if (ValoresSismoura.PorcentagemDescontoMaximoAtendimento > 0) {
                if (!this.mostrouFuncao) {
                    if (entidade.Desconto_Porcentagem > ValoresSismoura.PorcentagemDescontoMaximoAtendimento) {
                        this.dlgFuncaoAdm.Verificar("DesAtend", ValoresSismoura.UsuarioLogado, true, this.VerificarAutorizacaoDescontoAtendimento, this);
                        e.cancelar = true;
                        return;
                    }
                }
            }
            e.item.Total = ((e.item.Quantidade * e.item.Valor) - e.item.Desconto);
            this.RefreshAngular();
            //if (this.retornoComplementosItemServico.IsMostrarFuncaoAdmRetorno && !this.mostrouFuncao) {
            //    this.dlgFuncaoAdm.Verificar("BloRetCo", ValoresSismoura.UsuarioLogado, this.VerificarFuncaoAdmBloquearRetorno, this);
            //    e.cancelar = true;
            //    return;
            //}
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AtenAni.prototype.OnSelecionouOpcaoInserirServico = function (e) {
        try {
            if (e.Resultado == MsgBoxResult.Yes) {
                //somar a quantidade existente na grade           
                var servicos = this.Servicos;
                if (!servicos) {
                    servicos = [];
                }
                if (this.Servico && this.Servico.Quantidade) {
                    servicos[e.Argument].Quantidade = servicos[e.Argument].Quantidade + this.Servico.Quantidade;
                }
                this.Servicos = servicos;
                this.grdServicos.Limpar();
                this.grdServicos.AtualizarGrid();
                this.txtServico.Focus();
            }
            else {
                //adicionar novo servico
                this.grdServicos.AdicionarOuAlterarItemAtual();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AtenAni.prototype.OnSetouItemServico = function (s, e) {
        var entidade;
        entidade = e.item;
        this.IniciarValoresAutomaticosServico(entidade);
    };
    C_AtenAni.prototype.IniciarValoresAutomaticosServico = function (servico) {
        if (servico.__lookupGetter__("Total") == undefined) {
            servico.Total = undefined;
            servico.__defineGetter__("Total", function () {
                return (servico.Quantidade * servico.Valor) - servico.Desconto;
            });
            servico.__defineSetter__("Total", function (val) {
            });
        }
        if (servico.__lookupGetter__("Desconto_Porcentagem") == undefined) {
            servico.Desconto_Porcentagem = undefined;
            servico.__defineGetter__("Desconto_Porcentagem", function () {
                if ((servico.Valor * servico.Quantidade) == 0)
                    return 0;
                return (servico.Desconto / (servico.Valor * servico.Quantidade)) * 100;
            });
            servico.__defineSetter__("Desconto_Porcentagem", function (val) {
                if (val < 0) {
                    val = 0;
                }
                if (val > 100) {
                    val = 100;
                }
                servico.Desconto = (servico.Valor * servico.Quantidade) * (val / 100);
            });
        }
        if (servico.__lookupGetter__("Concluido_Text") == undefined) {
            servico.Concluido_Text = undefined;
            servico.__defineGetter__("Concluido_Text", function () {
                return servico.Concluido ? "Sim" : "Não";
            });
            servico.__defineSetter__("Concluido_Text", function (val) {
                servico.Concluido = (val == "Sim");
            });
        }
    };
    C_AtenAni.prototype.OnAdicionandoItemServico = function (s, e) {
        if (this.txtServico.GetText().CNum() <= 0) {
            MostrarAlerta("Informe um serviço!");
            this.txtServico.Focus();
            e.cancelar = true;
            return;
        }
        if (this.txtValorUnitario.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o valor unitário corretamente!");
            this.txtValorUnitario.Focus();
            e.cancelar = true;
            return;
        }
        if (this.txtQuantidade.GetText().CNum() <= 0) {
            MostrarAlerta("Informe a quantidade corretamente!");
            this.txtValorUnitario.Focus();
            e.cancelar = true;
            return;
        }
        if (this.txtDataServico.GetTextLabelControl == null && !this.chkData.Checked) {
            MostrarAlerta("Informe a data inicial !");
            this.txtDataServico.Focus();
            e.cancelar = true;
            return;
        }
        if (this.txtHoraServico == null) {
            MostrarAlerta("Informe a hora do serviço !");
            //this.txtHoraServico.Focus();
            e.cancelar = true;
            return;
        }
        if (this.txtProfissional.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o profissional !");
            this.txtProfissional.Focus();
            e.cancelar = true;
            return;
        }
        if (this.txtDias.GetText().CNum() <= 0 && !this.chkData.Checked) {
            MostrarAlerta("Informe a quantidade de dias do serviço corretamente!");
            this.txtDias.Focus();
            e.cancelar = true;
            return;
        }
        if (this.txtQuantidaDeDias.GetText().CNum() <= 0) {
            MostrarAlerta("Informe a quantidade de serviços corretamente!");
            this.txtQuantidaDeDias.Focus();
            e.cancelar = true;
            return;
        }
    };
    C_AtenAni.prototype.OnAdiciouItemServico = function (s, e) {
        try {
            var entidade = e.item;
            var data = entidade.Data;
            var hora = this.txtHoraServico.textBoxHorario.GetDate().getHours();
            var minuto = this.txtHoraServico.textBoxHorario.GetDate().getMinutes();
            var segundo = this.txtHoraServico.textBoxHorario.GetDate().getSeconds();
            entidade.Lista_Preco = 0;
            if (this.listaPrecos.length > 0 && this.cboListaPreco && this.cboListaPreco.Combo) {
                entidade.Lista_Preco = this.listaPrecos[this.cboListaPreco.Combo.GetSelectedIndex()].Codigo;
            }
            e.item.GerarSemData = this.chkData.Checked;
            if (this.chkData.Checked) {
                data = null;
            }
            if (data != null && data != undefined) {
                data.setHours(hora);
                data.setMinutes(minuto);
                data.setSeconds(segundo);
            }
            e.item.Data = data;
            entidade.Servico_Descricao = this.txtServico.GetResultado();
            entidade.Profissional_Descricao = this.txtProfissional.GetResultado();
            for (var x = 1; x < this.txtQuantidaDeDias.GetText().CNum(); x++) {
                var clone = {};
                angular.copy(entidade, clone);
                if (!this.chkData.Checked) {
                    data = data.addDays(this.txtDias.GetText().CNum());
                    var hora = this.txtHoraServico.textBoxHorario.GetDate().getHours();
                    var minuto = this.txtHoraServico.textBoxHorario.GetDate().getMinutes();
                    var segundo = this.txtHoraServico.textBoxHorario.GetDate().getSeconds();
                    data.setHours(hora);
                    data.setMinutes(minuto);
                    data.setSeconds(segundo);
                }
                clone.Data = data;
                this.Servicos.push(clone);
            }
            this.txtServico.Focus();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AtenAni.prototype.OnAntesSetEntidade = function (eventArg) {
        try {
            if (eventArg.Entidade.Data && !eventArg.Entidade.Data.getDate) {
                eventArg.Entidade.Data = ("" + eventArg.Entidade.Data).ToDate();
            }
            eventArg.Entidade.RetornarOperadorData = function () {
                var retorno = "";
                retorno = eventArg.Entidade.Operador;
                if (eventArg.Entidade.Data) {
                    retorno += " / " + eventArg.Entidade.Data.FormataData();
                }
                return retorno;
            };
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AtenAni.prototype.OnTxtPetProcurouAnimal = function (s, e) {
        try {
            var parametros;
            var complementosAnimal;
            parametros = {
                codigoAnimal: this.txtPet.TextBoxAnimal.GetText().CNum()
            };
            complementosAnimal = this.ExecutarFuncaoServerSideSynch("RetornarComplementosAnimal", parametros);
            if (complementosAnimal) {
                var infoAnimal = complementosAnimal.InformacoesAnimal;
                if (this.lblEspecie)
                    this.lblEspecie.Text = infoAnimal.Especie;
                if (this.lblRaca)
                    this.lblRaca.Text = infoAnimal.Raca;
                if (this.lblIdade)
                    this.lblIdade.Text = infoAnimal.IdadeSexo;
                this.GetScope().$applyAsync();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AtenAni.prototype.OnCboListaPreco_comboBoxChange = function (s, e) {
        try {
            if (this.cboListaPreco && this.cboListaPreco.Combo && this.listaPrecos) {
                if (this.cboListaPreco.Combo.GetSelectedIndex() >= 0 && this.cboListaPreco.Combo.GetSelectedIndex() < this.listaPrecos.length) {
                    //this.txtValorUnitario.SetText(this.listaPrecos[this.cboListaPreco.Combo.GetSelectedIndex()].Preco.Format(2));
                    this.Servico.Valor = this.listaPrecos[this.cboListaPreco.Combo.GetSelectedIndex()].Preco;
                    this.GetScope().$applyAsync();
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AtenAni.prototype.OnNovoClick = function (s, e) {
        e.processOnServer = false;
        this.LimparAtendimento();
    };
    C_AtenAni.prototype.OnGravarClick = function (s, e) {
        e.processOnServer = false;
        if (this.ValidarCamposObrigatorios()) {
            this.GravarContinuos();
        }
    };
    C_AtenAni.prototype.OnTxtServicoProcurou = function (s, e) {
        try {
            var parametros;
            var infoProprietario;
            parametros = {
                codigoServico: this.txtServico.GetText(),
                codigoEmpresa: this.cboEmpresa.GetValue()
            };
            var entidadeServico = this.GetScope().Servico;
            entidadeServico.Quantidade = 1;
            this.listaPrecos = this.ExecutarFuncaoServerSideSynch("GetListasPrecos", parametros);
            if (this.cboListaPreco && this.cboListaPreco.Combo) {
                this.cboListaPreco.Combo.ClearItems();
                for (var x = 0; x < this.listaPrecos.length; x++) {
                    this.cboListaPreco.Combo.AddItem(this.listaPrecos[x].Descricao, this.listaPrecos[x].Codigo, "");
                }
                if (this.cboListaPreco.Combo.GetItemCount() == 1) {
                    this.cboListaPreco.Combo.SetSelectedIndex(0);
                    entidadeServico.Valor = this.listaPrecos[0].Preco;
                }
                else {
                    this.cboListaPreco.Combo.SetText("");
                    entidadeServico.Valor = 0.0;
                }
            }
            else {
                if (this.listaPrecos.length > 0) {
                    entidadeServico.Valor = this.listaPrecos[0].Preco;
                }
                else {
                    entidadeServico.Valor = 0.0;
                }
            }
            this.Servico.VacinaAgendada = null;
            this.retornoComplementosItemServico = null;
            this.GetScope().$applyAsync();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AtenAni.prototype.OnClickImprimir = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.lblUltimo.Text.CNum() <= 0) {
                MostrarAlerta("Grave o atendimento para ser impresso!");
                return;
            }
            var parametros;
            var codModelo;
            codModelo = 0;
            if (this.cboModelo.Combo && this.cboModelo) {
                codModelo = ("" + this.cboModelo.Combo.GetValue()).CNum();
            }
            parametros = {
                codigoAtendimento: this.lblUltimo.Text.CNum(),
                codigoModelo: codModelo
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetImpressaoAtendimento", parametros);
            if (!String.IsNullOrWhiteSpace(retorno.Alerta)) {
                MostrarAlerta(retorno.Alerta);
            }
            else {
                this.ImprimirDocumentoWord(retorno.TagsImpressaoWord, retorno.ImpressaoWord, "S");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AtenAni.prototype.OnCheckData = function () {
        var check;
        check = this.chkData.Checked;
        //this.txtDataServico.Obrigatorio = !check;
        //this.txtDias.Obrigatorio = !check;
        if (check) {
            this.txtDataServico.LabelControl.innerText = "Data Inicial";
            this.txtDias.LabelControl.innerText = "Dias";
            this.txtDataServico.Date = null;
            this.txtDias.SetText("");
            this.chkJuntarServicos.Checked = false;
        }
        else {
            this.txtDataServico.LabelControl.innerText = "* Data Inicial";
            this.txtDias.LabelControl.innerText = "* Dias";
            this.txtDataServico.Date = new Date();
        }
        this.txtDias.ReadOnly = check;
        this.txtDataServico.Disabled = check;
    };
    C_AtenAni.prototype.OnCboListaPrecoGotFocus = function (s, e) {
        if (this.cboListaPreco && this.cboListaPreco.Combo) {
            this.cboListaPreco.Combo.ShowDropDown();
        }
    };
    C_AtenAni.prototype.OnAntesAbrirProcura = function (s, e) {
        e.Cancelar = false;
        this.txtProfissional.AddParametro("EmpProf", "" + this.cboEmpresa.GetValue());
    };
    C_AtenAni.prototype.GravarContinuos = function () {
        var _this = this;
        try {
            var servicos = this.Servicos;
            var servicosExistentes = this.Servicos;
            var servicosEnviar = [];
            //Entity.Operador = ValoresSismoura.UsuarioLogadoAbreviacao;
            for (var x = 0; x < servicos.length; x++) {
                var novoServico = {};
                var servicoGrid;
                servicoGrid = servicos[x];
                novoServico.Codigo = servicoGrid.Codigo;
                novoServico.Cod_Animal = this.Atendimento.Cod_Animal;
                novoServico.Concluido = servicoGrid.Concluido;
                novoServico.Data = servicoGrid.Data;
                novoServico.Data_Entrega = servicoGrid.Data_Entrega;
                novoServico.GerarSemData = servicoGrid.GerarSemData;
                novoServico.Desconto = servicoGrid.Desconto;
                novoServico.Finalizado = false;
                novoServico.Obs = servicoGrid.Observacao;
                novoServico.Qtde = servicoGrid.Quantidade;
                novoServico.Servico = servicoGrid.Servico_Codigo;
                novoServico.Usuario = ValoresSismoura.UsuarioLogado;
                novoServico.Valor = servicoGrid.Valor;
                novoServico.Participantes = servicoGrid.Participantes;
                novoServico.VacinaAgendada = servicoGrid.VacinaAgendada;
                novoServico.ServicoConsulta_Origem = servicoGrid.ServicoConsulta_Origem;
                novoServico.Lote = servicoGrid.Lote;
                novoServico.Data_Validade = servicoGrid.Data_Validade;
                novoServico.Laboratorio = servicoGrid.Laboratorio;
                novoServico.Partida = servicoGrid.Partida;
                novoServico.Lista_Preco = servicoGrid.Lista_Preco;
                if (!servicoGrid.Entregar) {
                    novoServico.Hora_Entrega = "";
                }
                else {
                    novoServico.Hora_Entrega = servicoGrid.Entregar.FormataHoraSismoura();
                }
                if (!servicoGrid.Pegar) {
                    novoServico.Hora_Pegar = "";
                }
                else {
                    novoServico.Hora_Pegar = servicoGrid.Pegar.FormataHoraSismoura();
                }
                if (!servicoGrid.Previsao) {
                    novoServico.Hora_Servico = "";
                }
                else {
                    novoServico.Hora_Servico = servicoGrid.Previsao.FormataHoraSismoura();
                }
                if (servicoGrid.Profissional_Codigo) {
                    novoServico.Profi1 = servicoGrid.Profissional_Codigo;
                }
                if (!novoServico.Participantes) {
                    novoServico.Participantes = [];
                }
                servicosEnviar.push(novoServico);
            }
            if (this.Servicos.length <= 0) {
                MostrarAlerta("É necessário adicionar serviços para gravar!");
                this.txtServico.Focus();
                return;
            }
            if (this.UltimoRegistro != 0) {
                MostrarAlerta("Este cadastro já foi salvo! Clique no botão 'Novo' para realizar um novo cadastro!");
                return;
            }
            var parametros;
            parametros = {
                servicosJSON: JSON.stringify(servicosEnviar),
                juntarServico: this.chkJuntarServicos.Check.checked,
                empresa: this.cboEmpresa.GetValue(),
                CodCheckin: this.Atendimento.TempCodigoCheckIn
            };
            abrirEspera("Aguarde. Gravando o registro");
            this.ExecutarFuncaoServerSideAsynch("GravarContinuos", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (retorno > 0) {
                    _this.lblUltimo.Text = retorno;
                    MostrarMensagem("Atendimentos gravados com sucesso");
                    _this.UltimoRegistro = retorno;
                }
                else {
                    MostrarError("Ocorreu um erro no sistema");
                    _this.txtServico.Focus();
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
    C_AtenAni.prototype.AtualizarUltimoAtendimento = function () {
        var retorno;
        var parametros;
        retorno = this.ExecutarFuncaoServerSideSynch("GetUltimoAtendimento", parametros);
        if (this.lblUltimo) {
            this.lblUltimo.Text = retorno;
        }
    };
    return C_AtenAni;
}(MouraPageAngular));
var c_AtenAni = new C_AtenAni();
//# sourceMappingURL=C_AtenAni.js.map