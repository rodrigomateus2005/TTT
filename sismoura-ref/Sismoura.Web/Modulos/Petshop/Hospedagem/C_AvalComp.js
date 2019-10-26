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
var C_AvalComp = /** @class */ (function (_super) {
    __extends(C_AvalComp, _super);
    function C_AvalComp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_AvalComp.prototype, "grdAvaliacaoComportamento", {
        get: function () {
            return window['grdAvaliacaoComportamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalComp.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AvalComp.prototype, "txtAtendimento", {
        get: function () {
            return window['txtAtendimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_AvalComp.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.AntesGravar, this.OnAntesGravar, this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.txtPet && this.txtPet.TextBoxAnimal) {
            adicionarEventoMoura(this.txtPet.TextBoxAnimal.Procurou, this.OnDepoisProcurouAnimal, this);
        }
        if (this.txtAtendimento) {
            adicionarEventoMoura(this.txtAtendimento.Procurou, this.OnDepoisProcurouAtendimento, this);
        }
    };
    C_AvalComp.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LerParametrosURL();
    };
    C_AvalComp.prototype.OnGravouSucesso = function (s, e) {
    };
    C_AvalComp.prototype.OnExcluiuSucesso = function (s, e) {
    };
    C_AvalComp.prototype.SelecionarRegistro = function (s, e) {
        //this.PreencherEntidade(e.data.Codigo);
    };
    C_AvalComp.prototype.OnAntesGravar = function () {
        if (!this.ValidarAvaliacaoComportamental()) {
            return false;
        }
        var entidade = this.GetScope().Entity;
        entidade.Avaliacao_Itens = [];
        var itens = this.grdAvaliacaoComportamento.DataSource;
        itens.forEach(function (x) {
            var item = {};
            item.Animais_Comportamento_Avaliacao = entidade.Codigo;
            item.Codigo_Comportamento_Pergunta = x.Codigo_Pergunta;
            item.Codigo_Comportamento_Resposta = x.Codigo_Resposta;
            item.Observacao_Resposta = x.Observacao;
            entidade.Avaliacao_Itens.push(item);
        });
        if (CNum(entidade.Codigo) == 0)
            entidade.Data_Avaliacao = this.DataServidor();
        this.GetScope().Entity = entidade;
        this.RefreshAngular();
        return _super.prototype.OnAntesGravar.call(this);
    };
    C_AvalComp.prototype.OnDepoisLimpar = function () {
        _super.prototype.OnDepoisLimpar.call(this, this.GetScope().Entity);
        this.txtPet.Limpar();
        this.txtPet.TextBoxAnimal.Disabled = true;
        this.txtPet.TextBoxProprietario.Disabled = true;
        this.txtAtendimento.Disabled = false;
        this.grdAvaliacaoComportamento.PreencherGrid([]);
    };
    C_AvalComp.prototype.OnDepoisBuscarExistente = function (Entidade) {
        var _this = this;
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        setTimeout(function () {
            if (!Entidade && Entidade.Codigo == 0)
                return;
            _this.txtAtendimento.Disabled = true;
            _this.GetDadosAvaliacao(Entidade.Codigo);
        }, 200);
    };
    C_AvalComp.prototype.OnDepoisProcurouAtendimento = function (s, e) {
        var _this = this;
        try {
            if (!this.EntityTela)
                return;
            if (this.EntityTela.Codigo && this.EntityTela.Codigo > 0)
                return;
            if (this.txtAtendimento.GetText().CNum() == 0)
                return;
            setTimeout(function () {
                var parametros = {
                    codAtendimento: CNum(_this.txtAtendimento.GetText().CNum())
                };
                var retorno = _this.ExecutarFuncaoServerSideSynch("GetProprietarioAnimal", parametros);
                if (retorno) {
                    var param = {
                        codAnimal: CNum(retorno.codAnimal)
                    };
                    //Verifica se existe avaliação para o animal informado.
                    var dadosAvaliacao = _this.ExecutarFuncaoServerSideSynch("GetAvaliacaoByAnimal", param);
                    if (dadosAvaliacao && dadosAvaliacao.Codigo > 0) {
                        _this.PreencherEntidade("" + dadosAvaliacao.Codigo);
                        _this.grdAvaliacaoComportamento.Focus(0, 0);
                    }
                    else {
                        _this.txtPet.TextBoxProprietario.Procurar(retorno.codProprietario);
                        _this.txtPet.TextBoxAnimal.Procurar(retorno.codAnimal);
                        _this.grdAvaliacaoComportamento.PreencherGrid(dadosAvaliacao.itens);
                    }
                }
            }, 300);
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_AvalComp.prototype.OnDepoisProcurouAnimal = function (s, e) {
        var _this = this;
        try {
            if (!this.EntityTela)
                return;
            if (this.EntityTela.Codigo && this.EntityTela.Codigo > 0)
                return;
            setTimeout(function () {
                var parametros = {
                    codAnimal: CNum(_this.txtPet.TextBoxAnimal.GetText().CNum())
                };
                //Verifica se existe avaliação para o animal informado.
                var dadosAvaliacao = _this.ExecutarFuncaoServerSideSynch("GetAvaliacaoByAnimal", parametros);
                if (dadosAvaliacao && dadosAvaliacao.Codigo > 0) {
                    _this.PreencherEntidade("" + dadosAvaliacao.Codigo);
                    _this.grdAvaliacaoComportamento.Focus(0, 0);
                }
                else {
                    _this.grdAvaliacaoComportamento.PreencherGrid(dadosAvaliacao.itens);
                }
            }, 300);
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_AvalComp.prototype.GetDadosAvaliacao = function (codAvaliacao) {
        var parametros = {
            codAvaliacao: codAvaliacao
        };
        var dadosAvaliacao = this.ExecutarFuncaoServerSideSynch("GetAvaliacaoById", parametros);
        if (dadosAvaliacao) {
            this.grdAvaliacaoComportamento.PreencherGrid(dadosAvaliacao.itens);
        }
        else {
            this.grdAvaliacaoComportamento.PreencherGrid([]);
        }
    };
    C_AvalComp.prototype.ValidarAvaliacaoComportamental = function () {
        var isValido = true;
        var itens = this.grdAvaliacaoComportamento.DataSource;
        for (var _i = 0, itens_1 = itens; _i < itens_1.length; _i++) {
            var item = itens_1[_i];
            if (CNum(item.Codigo_Resposta) == 0) {
                isValido = false;
                MostrarAlerta("A resposta da pergunta: \"" + item.Pergunta + "\" n\u00E3o foi informada.");
                return;
            }
        }
        return isValido;
    };
    C_AvalComp.prototype.LerParametrosURL = function () {
        if (this.QueryString.Parametros) {
            var parametros = this.ParametrosTela;
            if (parametros.codigo && parametros.codigo > 0) {
                this.PreencherEntidade("" + parametros.codigo);
            }
            else if (parametros.atendimento && parametros.atendimento > 0) {
                this.txtAtendimento.Procurar("" + parametros.atendimento);
                if (parametros.profissional && parametros.profissional > 0) {
                    this.EntityTela.Profissional = parametros.profissional;
                }
            }
            else if (parametros.pet && parametros.pet > 0) {
                this.txtPet.TextBoxAnimal.Procurar(parametros.pet);
            }
        }
    };
    return C_AvalComp;
}(MouraPageCadastroAngular));
var c_AvalComp = new C_AvalComp();
//# sourceMappingURL=C_AvalComp.js.map