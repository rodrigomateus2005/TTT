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
var C_TipoPlan = /** @class */ (function (_super) {
    __extends(C_TipoPlan, _super);
    function C_TipoPlan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_TipoPlan.prototype, "Servicos", {
        get: function () {
            return this.GetScope()["Servicos"];
        },
        set: function (value) {
            this.GetScope()["Servicos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "Servico", {
        get: function () {
            return this.GetScope()["Servico"];
        },
        set: function (value) {
            this.GetScope()["Servico"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "Pontuacao", {
        get: function () {
            if (!this.GetScope()["Pontuacao"]) {
                this.GetScope()["Pontuacao"] = {};
            }
            return this.GetScope()["Pontuacao"];
        },
        set: function (value) {
            this.GetScope()["Pontuacao"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "Pontuacoes", {
        get: function () {
            if (!this.GetScope()["Pontuacoes"]) {
                this.GetScope()["Pontuacoes"] = [];
            }
            return this.GetScope()["Pontuacoes"];
        },
        set: function (value) {
            this.GetScope()["Pontuacoes"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "DescontosServico", {
        get: function () {
            return this.GetScope()["DescontosServico"];
        },
        set: function (value) {
            this.GetScope()["DescontosServico"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "Descontos", {
        get: function () {
            return this.GetScope()["Descontos"];
        },
        set: function (value) {
            this.GetScope()["Descontos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "Desconto", {
        get: function () {
            return this.GetScope()["Desconto"];
        },
        set: function (value) {
            this.GetScope()["Desconto"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "cboListaPreco", {
        get: function () {
            return window['cboListaPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "cboRaca", {
        get: function () {
            return window['cboRaca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "cboScore", {
        get: function () {
            return window['cboScore_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "grdServicos", {
        get: function () {
            return window['grdServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "grdPontuacao", {
        get: function () {
            return window['grdPontuacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "grdDescontos", {
        get: function () {
            return window['grdDescontos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "txtServico", {
        get: function () {
            return window['txtServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "cboTipoValor", {
        get: function () {
            return window['cboTipoValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "txtValorCoparticipacao", {
        get: function () {
            return window['txtValorCoparticipacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "cboTipoPlano", {
        get: function () {
            return window['cboTipoPlano_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "txtPorcentagemDesconto", {
        get: function () {
            return window['txtPorcentagemDesconto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "tpPrincipal", {
        get: function () {
            return window['tpPrincipal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "mdDesconto", {
        get: function () {
            return window["mdDesconto_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "btnOkDesc", {
        get: function () {
            return window['btnOkDesc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "btnCancelarDesc", {
        get: function () {
            return window['btnCancelarDesc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "txtEspecies", {
        get: function () {
            return window['txtEspecies_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "cboNivelAutorizacao", {
        get: function () {
            return window['cboNivelAutorizacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "chkApenasFilhotes", {
        get: function () {
            return window['chkApenasFilhotes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "txtLimiteDiasCompra", {
        get: function () {
            return window['txtLimiteDiasCompra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "txtParcelasDescontar", {
        get: function () {
            return window['txtParcelasDescontar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "cboTipoFilhote", {
        get: function () {
            return window['cboTipoFilhote_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipoPlan.prototype, "txtIdadeMaxima", {
        get: function () {
            return window['txtIdadeMaxima_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_TipoPlan.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.grdServicos.Grid) {
            adicionarEventoMoura(this.grdServicos.LimpandoItem, this.OnLimpandoItemServico, this);
            adicionarEventoMoura(this.grdServicos.Validando, this.OnValidandoItemServico, this);
            adicionarEventoMoura(this.grdServicos.Grid.ClickBotaoLinha, this.OnGridClicouBotao, this);
        }
        if (this.grdPontuacao.Grid) {
            adicionarEventoMoura(this.grdPontuacao.Validando, this.OnValidandoPontuacao, this);
            adicionarEventoMoura(this.grdPontuacao.LimpandoItem, this.LimparPontuacao, this);
        }
        if (this.grdDescontos.Grid) {
            adicionarEventoMoura(this.grdDescontos.Validando, this.OnValidandoItemDesconto, this);
        }
        adicionarEventoMoura(this.txtServico.Procurou, this.OnTxtServicoProcurou, this);
        if (this.cboListaPreco && this.cboListaPreco.Combo) {
            adicionarEventoDevExpress(this.cboListaPreco.Combo.GotFocus, this.OnCboListaPrecoGotFocus, this);
        }
        if (this.btnCancelarDesc) {
            adicionarEventoMoura(this.btnCancelarDesc.Click, this.OnClickBotaoFechar, this);
        }
        if (this.btnOkDesc) {
            adicionarEventoMoura(this.btnOkDesc.Click, this.OnClickBotaoOk, this);
        }
        if (this.mdDesconto) {
            adicionarEventoDevExpress(this.mdDesconto.ModalDialog.Closing, this.OnFechouModal, this);
        }
    };
    C_TipoPlan.prototype.OnCheckApenasFilhotes = function () {
        this.txtLimiteDiasCompra.Visible = this.EntityTela.isPlanoFilhotes;
        this.txtParcelasDescontar.Visible = this.EntityTela.isPlanoFilhotes;
        this.cboTipoFilhote.Visible = this.EntityTela.isPlanoFilhotes;
        this.txtIdadeMaxima.Visible = this.EntityTela.isPlanoFilhotes;
    };
    C_TipoPlan.prototype.OnFechouModal = function (s, e) {
        this.codServ = 0;
        this.DescontosServico = [];
    };
    C_TipoPlan.prototype.OnClickBotaoOk = function (s, e) {
        e.processOnServer = false;
        var parametros = {
            listaCompleta: this.Descontos,
            listaServico: this.DescontosServico,
            codServico: this.codServ
        };
        this.Descontos = this.ExecutarFuncaoServerSideSynch("AtualizarListaDescontos", parametros);
        this.DescontosServico = [];
        this.codServ = 0;
        this.mdDesconto.Hide();
    };
    C_TipoPlan.prototype.OnClickBotaoFechar = function (s, e) {
        e.processOnServer = false;
        this.DescontosServico = [];
        this.codServ = 0;
        this.mdDesconto.Hide();
    };
    C_TipoPlan.prototype.OnGridClicouBotao = function (s, e) {
        var codServico = ("" + e.data['Servico']).CNum();
        if (e.commandName == "btnDescontoProgressivo") {
            this.OnClickDesconto(codServico);
        }
    };
    C_TipoPlan.prototype.OnClickDesconto = function (codServico) {
        var parametros = {
            codServico: codServico,
            listaDescontos: this.Descontos
        };
        this.DescontosServico = [];
        this.grdDescontos.Limpar();
        this.DescontosServico = this.ExecutarFuncaoServerSideSynch("GetDescontosServico", parametros);
        this.codServ = codServico;
        if (this.mdDesconto && this.mdDesconto.ModalDialog) {
            this.mdDesconto.ModalDialog.Show();
        }
        return false;
    };
    C_TipoPlan.prototype.OnValidandoPontuacao = function (s, e) {
        if (e.index < 0) {
            e.item.Contador = this.Pontuacoes.Max("Contador") + 1;
        }
        if (String.IsNullOrWhiteSpace(e.item.Descricao)) {
            MostrarAlerta("Informe uma descrição");
            e.cancelar = true;
            return;
        }
        if (CNum(e.item.Pontuacao_Final) < CNum(e.item.Pontuacao_Inicial)) {
            MostrarAlerta("A pontuação final deve ser maior que a pontuação inicial");
            e.cancelar = true;
            return;
        }
        if (CNum(e.item.Idade_Final) < CNum(e.item.Idade_Inicial)) {
            MostrarAlerta("A idade final deve ser maior que a idade inicial");
            e.cancelar = true;
            return;
        }
        if (CNum(e.item.Valor) <= 0) {
            MostrarAlerta("Informe o valor");
            e.cancelar = true;
            return;
        }
        if (!this.ValidarIntervaloPontuacao(CNum(e.item.Pontuacao_Inicial), CNum(e.item.Pontuacao_Final), CNum(e.item.Idade_Inicial), CNum(e.item.Idade_Final), CNum(e.item.Contador), JSON.stringify(this.Pontuacoes))) {
            MostrarAlerta("Já existe um registro nesta faixa de Pontuação / Idade");
            e.cancelar = true;
            return;
        }
        this.RefreshAngular();
    };
    C_TipoPlan.prototype.OnValidandoItemDesconto = function (s, e) {
        var fieldAlterado = "" + e.fieldNameAlterado;
        var entidade;
        entidade = e.item;
        if ((entidade.Porcentagem_Desconto == 0) || (entidade.Porcentagem_Desconto == null)) {
            e.errorText = "Informe o campo Porcentagem de Desconto!";
            e.cancelar = true;
            return;
        }
        if (this.Descontos) {
            entidade.Item = this.Descontos.length + 1;
        }
        else {
            entidade.Item = 1;
        }
        entidade.Cod_Servico = this.codServ;
    };
    C_TipoPlan.prototype.OnValidandoItemServico = function (s, e) {
        try {
            var entidade;
            entidade = e.item;
            if (e.index < 0) {
                if (!entidade.Servico) {
                    MostrarAlerta("Serviço não encontrado");
                    e.cancelar = true;
                    return;
                }
                if (CNum(this.EntityTela.Tipo_Plano == 3) && !entidade.Porcentagem_Desconto) {
                    MostrarAlerta("Informe o desconto");
                    e.cancelar = true;
                    return;
                }
                if (this.VerificaExistenciaServico(entidade.Servico)) {
                    MostrarAlerta("O serviço informado já foi adicionado na grade!");
                    e.cancelar = true;
                    return;
                }
                //if (!entidade.Nivel_Autorizacao) {
                //    MostrarAlerta("Informe o nível de autorização!");
                //    e.cancelar = true;
                //    return;
                //}
                entidade.Lista_Preco_Descricao = this.cboListaPreco.GetText();
                if (!entidade.ServicoEntity) {
                    entidade.ServicoEntity = {};
                }
                entidade.ServicoEntity.Nome = this.txtServico.GetResultado();
                //entidade.Servico_Descricao = this.txtServico.GetResultado();
                if (this.cboTipoValor.GetValue() == "F") {
                    entidade.Tipo_Valor_Coparticipacao_Descricao = "R$";
                }
                else {
                    entidade.Tipo_Valor_Coparticipacao_Descricao = "%";
                }
                entidade.Nivel_Autorizacao_Descricao = this.cboNivelAutorizacao.GetText();
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_TipoPlan.prototype.VerificaExistenciaServico = function (codServico) {
        var retorno = false;
        var entidade = this.Servicos.FirstOrDefault("Servico", codServico);
        if (entidade != null) {
            retorno = true;
        }
        return retorno;
    };
    C_TipoPlan.prototype.OnCboListaPrecoGotFocus = function (s, e) {
        if (this.cboListaPreco && this.cboListaPreco.Combo) {
            this.cboListaPreco.Combo.ShowDropDown();
        }
    };
    C_TipoPlan.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_TipoPlan.prototype.OnTxtServicoProcurou = function (s, e) {
        try {
            var parametros;
            var infoProprietario;
            parametros = {
                codigoServico: this.txtServico.GetText(),
                codigoEmpresa: "0" //verificar
            };
            var codTipo = 0;
            if (this.EntityTela && this.EntityTela.Tipo_Plano) {
                codTipo = this.EntityTela.Tipo_Plano;
            }
            if (codTipo == 3) {
                //se o tipo de plano for desconto, deve utilizar o preço que estiver sendo dado no atendimento
                if (this.cboListaPreco && this.cboListaPreco.Combo) {
                    this.cboListaPreco.Combo.ClearItems();
                    this.cboListaPreco.Combo.AddItem("Preço do Atendimento", -1, "");
                }
            }
            else {
                this.listaPrecos = this.ExecutarFuncaoServerSideSynch("GetListasPrecos", parametros);
                if (this.cboListaPreco && this.cboListaPreco.Combo) {
                    this.cboListaPreco.Combo.ClearItems();
                    for (var x = 0; x < this.listaPrecos.length; x++) {
                        this.cboListaPreco.Combo.AddItem(this.listaPrecos[x].Descricao, this.listaPrecos[x].Codigo, "");
                    }
                }
            }
            this.GetScope().$applyAsync();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_TipoPlan.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().TipoPlano) {
            this.GetScope().TipoPlano = $.proxy(this.OnALterouTipo, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Tipo_Plano; }, this.GetScope().TipoPlano);
        }
        if (!this.GetScope().IsFilhotes) {
            this.GetScope().IsFilhotes = $.proxy(this.OnCheckApenasFilhotes, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.isPlanoFilhotes; }, this.GetScope().IsFilhotes);
        }
        this.PreencherGrade();
    };
    C_TipoPlan.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.Servicos = [];
        this.Pontuacoes = [];
        this.Pontuacao = {};
        this.Descontos = [];
        this.PreencherGrade();
        Entity.Tipo_Plano = 3;
        this.txtEspecies.Limpar();
        this.lstEmpresa.LimparSelecao();
        Entity.isPlanoFilhotes = false;
        this.AlterarVisibleTipoValor(Entity);
        Entity.TipoFilhote = 0;
    };
    C_TipoPlan.prototype.LimparPontuacao = function (s, e) {
        e.item.Descricao = "";
        e.item.Pontuacao_Inicial = 0;
        e.item.Pontuacao_Final = 0;
        e.item.Idade_Inicial = 0;
        e.item.Idade_Final = 0;
        e.item.Valor = 0;
        //this.RefreshAngular();
    };
    C_TipoPlan.prototype.ValidarIntervaloPontuacao = function (pontuacaoInicial, pontuacaoFinal, idadeInicial, idadeFinal, contador, existentes) {
        var parametros;
        var retorno;
        parametros = {
            pontuacaoInicial: pontuacaoInicial,
            pontuacaoFinal: pontuacaoFinal,
            idadeInicial: idadeInicial,
            idadeFinal: idadeFinal,
            contador: contador,
            existentes: existentes
        };
        retorno = this.ExecutarFuncaoServerSideSynch("ValidarIntervaloPontuacao", parametros);
        return retorno;
    };
    C_TipoPlan.prototype.OnDepoisBuscarExistente = function (Entidade) {
        try {
            _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
            var parametros;
            if (Entidade.Servicos) {
                parametros = {
                    listaServicos: Entidade.Servicos
                };
                this.Servicos = this.ExecutarFuncaoServerSideSynch("RetornaServicosComplemento", parametros);
            }
            if (Entidade.Descontos) {
                parametros = {
                    listaDescontos: Entidade.Descontos
                };
                this.Descontos = this.ExecutarFuncaoServerSideSynch("RetornaDescontosComplemento", parametros);
            }
            this.Pontuacoes = Entidade.Pontuacoes;
            this.AlterarVisibleTipoValor(Entidade);
            this.CarregarEspecies(Entidade.Especies);
            this.CarregarEmpresas(Entidade.Empresas);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_TipoPlan.prototype.CarregarEspecies = function (especies) {
        if (especies && this.txtEspecies) {
            for (var x = 0; x < especies.length; x++) {
                this.txtEspecies.AdicionarItem(especies[x].Especie, especies[x].Especie + ' - ' + especies[x].EspecieEntity.Nome);
            }
        }
    };
    C_TipoPlan.prototype.CarregarEmpresas = function (empresas) {
        var codEmpresa = [];
        if (empresas && this.lstEmpresa) {
            for (var x = 0; x < empresas.length; x++) {
                codEmpresa.push(empresas[x].Empresa.toString());
            }
            this.lstEmpresa.SetValues(codEmpresa);
        }
    };
    C_TipoPlan.prototype.PreencherEspecies = function () {
        var retorno = [];
        var item;
        if (this.txtEspecies) {
            for (var x = 0; x < this.txtEspecies.SourceLista.length; x++) {
                item = {};
                item.Especie = this.txtEspecies.SourceLista[x].Value;
                item.Codigo_Plano = this.EntityTela.Codigo;
                retorno.push(item);
            }
        }
        return retorno;
    };
    C_TipoPlan.prototype.PreencherEmpresas = function () {
        var retorno = [];
        var item;
        if (this.lstEmpresa) {
            for (var x = 0; x < this.lstEmpresa.GetValues().length; x++) {
                item = {};
                item.Empresa = this.lstEmpresa.GetValues()[x].CNum();
                item.Codigo_Plano = this.EntityTela.Codigo;
                retorno.push(item);
            }
        }
        return retorno;
    };
    C_TipoPlan.prototype.OnALterouTipo = function () {
        this.AlterarVisibleTipoValor(this.EntityTela);
    };
    C_TipoPlan.prototype.AlterarVisibleTipoValor = function (entity) {
        if (entity.Tipo_Plano == 1) { //integral
            this.cboTipoValor.Visible = false;
            this.txtValorCoparticipacao.Visible = false;
            this.txtPorcentagemDesconto.Visible = false;
        }
        else if (entity.Tipo_Plano == 2) { //coparticipativo
            this.cboTipoValor.Visible = true;
            this.txtValorCoparticipacao.Visible = true;
            this.Servico.Tipo_Valor_Coparticipacao = "F";
            this.txtPorcentagemDesconto.Visible = false;
        }
        else if (entity.Tipo_Plano == 3) { //desconto
            this.cboTipoValor.Visible = false;
            this.txtValorCoparticipacao.Visible = false;
            this.txtPorcentagemDesconto.Visible = true;
        }
    };
    C_TipoPlan.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.EntityTela.Codigo == null) {
            this.EntityTela.Data_Cadastro = this.DataServidor();
        }
        if (this.Servicos) {
            this.EntityTela.Servicos = this.Servicos;
        }
        this.EntityTela.Pontuacoes = this.Pontuacoes;
        if (this.Descontos) {
            this.EntityTela.Descontos = this.Descontos;
        }
        this.EntityTela.Especies = this.PreencherEspecies();
        this.EntityTela.Empresas = this.PreencherEmpresas();
        return true;
    };
    C_TipoPlan.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_TipoPlan.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_TipoPlan.prototype.OnLimpandoItemServico = function (s, e) {
        var entidade = e.item;
        entidade.Porcentagem_Desconto = 100;
        e.item = entidade;
    };
    return C_TipoPlan;
}(MouraPageCadastroAngular));
var c_TipoPlan = new C_TipoPlan();
//# sourceMappingURL=C_TipoPlan.js.map