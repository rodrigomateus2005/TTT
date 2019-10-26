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
var R_WordAprov = /** @class */ (function (_super) {
    __extends(R_WordAprov, _super);
    function R_WordAprov() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_WordAprov.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_WordAprov.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_WordAprov.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_WordAprov.prototype, "cboNivel", {
        get: function () {
            return window['cboNivel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_WordAprov.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_WordAprov.prototype.OnPageLoad = function () {
        this.LimparCampos();
    };
    R_WordAprov.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.CellPrepared, this.OnGridCellPrepared, this);
            adicionarEventoMoura(this.Grid.ClickBotaoLinha, this.OnGridClicouBotao, this);
        }
    };
    R_WordAprov.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (this.txtPeriodo) {
            this.txtPeriodo.Iniciar();
        }
        if (this.cboNivel) {
            this.cboNivel.LimparSelecao;
        }
        if (this.txtPet) {
            this.txtPet.TextBoxAnimal.Limpar();
            this.txtPet.TextBoxProprietario.Limpar();
        }
    };
    R_WordAprov.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!this.txtPeriodo.IsValido()) {
            MostrarAlerta("Informe o período corretamente.");
            return;
        }
        this.GetDadosRelacao(this.txtPeriodo.textBoxCalendarioInicio.GetDate(), this.txtPeriodo.textBoxCalendarioFim.GetDate(), this.cboNivel.GetValue(), this.txtPet.TextBoxProprietario.GetText().CNum(), this.txtPet.TextBoxAnimal.GetText().CNum());
    };
    R_WordAprov.prototype.GetDadosRelacao = function (dataInicial, dataFinal, nivel, codProprietario, codAnimal) {
        var _this = this;
        var parametros;
        try {
            parametros = {
                dataInicial: dataInicial,
                dataFinal: dataFinal,
                nivel: nivel,
                codProprietario: codProprietario,
                codAnimal: codAnimal
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherRelacao", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.Grid.PreencherGrid(retorno);
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
    R_WordAprov.prototype.OnGridCellPrepared = function (s, e) {
        try {
            var name = "";
            if (e.column && e.column) {
                name = e.column.dataField;
            }
            if (e.rowType == "data" && e.data) {
                if (name.toLowerCase() == "nivel_atual") {
                    e.cellElement.css("background-color", "orange");
                    e.cellElement.css("color", "White");
                }
                else if (name.toLowerCase() == "nivel_autorizacao") {
                    e.cellElement.css("background-color", "green");
                    e.cellElement.css("color", "White");
                }
            }
        }
        catch (ex) {
        }
    };
    R_WordAprov.prototype.OnGridClicouBotao = function (s, e) {
        try {
            if (ValoresSismoura.UsuarioLogado == 0) {
                MostrarAlerta("Não é possível aprovar ou reprovar procedimentos com o usuário Moura!");
                return;
            }
            debugger;
            var codAutorizacao = ("" + e.data['Codigo']).CNum();
            var codNivelAtual = ("" + e.data['Codigo_Nivel_Atual']).CNum();
            var codNivelServico = ("" + e.data['Codigo_Nivel_Autorizacao']).CNum();
            var nivelAtual = ("" + e.data['Nivel_Atual']).toUpperCase();
            var parametros;
            parametros = {
                nivel: codNivelAtual,
                usuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificaNivelAutorizacaoUsuario", parametros);
            if (retorno) {
                if (e.commandName == "btnAprovar") {
                    this.AtualizarStatusAprovacao(codAutorizacao, codNivelAtual, codNivelServico, true);
                }
                else if (e.commandName == "btnReprovar") {
                    this.AtualizarStatusAprovacao(codAutorizacao, codNivelAtual, codNivelServico, false);
                }
            }
            else {
                MostrarAlerta("O Usuário " + ValoresSismoura.UsuarioLogadoAbreviacao + " não tem permissão para Aprovar ou Desaprovar um procedimento de nível " + nivelAtual);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_WordAprov.prototype.AtualizarStatusAprovacao = function (codAutorizacao, codNivelAtual, codNivelServico, isAprovado) {
        try {
            var parametros;
            parametros = {
                codAutorizacao: codAutorizacao,
                usuarioAprovacao: ValoresSismoura.UsuarioLogado,
                nivelAtual: codNivelAtual,
                nivelNecessario: codNivelServico,
                isAprovado: isAprovado,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("AtualizarStatusAprovacaoProcedimento", parametros);
            if (retorno) {
                MostrarMensagem("Registro Atualizado com Sucesso!");
            }
            this.PreencherGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_WordAprov;
}(MouraPageRelacaoAngular));
var r_WorkAprov = new R_WordAprov();
//# sourceMappingURL=R_WorkAprov.js.map