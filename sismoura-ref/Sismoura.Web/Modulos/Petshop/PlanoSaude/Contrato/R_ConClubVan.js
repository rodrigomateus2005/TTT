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
var R_ConclubVan = /** @class */ (function (_super) {
    __extends(R_ConclubVan, _super);
    function R_ConclubVan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ConclubVan.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConclubVan.prototype, "cboTipoPeriodo", {
        get: function () {
            return window['cboTipoPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConclubVan.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConclubVan.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConclubVan.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConclubVan.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConclubVan.prototype, "grdResultado", {
        get: function () {
            return window['grdResultado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_ConclubVan.prototype.OnPageLoad = function () {
        this.LimparCampos();
    };
    R_ConclubVan.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grdResultado) {
            adicionarEventoMoura(this.grdResultado.SelecionouLinha, this.OnGrdResultadoSelecionouLinha, this);
        }
    };
    R_ConclubVan.prototype.OnGrdResultadoSelecionouLinha = function (s, e) {
        abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroContratoClubz), e.rowKey);
    };
    R_ConclubVan.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (this.txtPeriodo) {
            this.txtPeriodo.Iniciar();
        }
        if (this.cboTipo) {
            this.cboTipo.SetValue(0);
        }
        if (this.txtPet) {
            this.txtPet.TextBoxAnimal.Limpar();
            this.txtPet.TextBoxProprietario.Limpar();
        }
        if (this.lstEmpresa) {
            this.lstEmpresa.LimparSelecao();
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        }
        if (this.cboTipoPeriodo)
            this.cboTipoPeriodo.SetValue(0);
    };
    R_ConclubVan.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!this.txtPeriodo.IsValido()) {
            MostrarAlerta("Informe o período corretamente.");
            return;
        }
        this.GetDadosRelacao(this.txtPeriodo.textBoxCalendarioInicio.GetDate(), this.txtPeriodo.textBoxCalendarioFim.GetDate(), this.txtPet.TextBoxProprietario.GetText().CNum(), this.txtPet.TextBoxAnimal.GetText().CNum(), this.lstEmpresa.GetValuesNumber(), this.cboTipo.GetValue(), this.cboTipoPeriodo.GetValue());
    };
    R_ConclubVan.prototype.GetDadosRelacao = function (dataInicial, dataFinal, codProprietario, codAnimal, empresas, tipo, tipoPeriodo) {
        var _this = this;
        var parametros;
        try {
            parametros = {
                dataInicial: dataInicial,
                dataFinal: dataFinal,
                codProprietario: codProprietario,
                codAnimal: codAnimal,
                empresas: empresas,
                tipo: tipo,
                tipoPeriodo: tipoPeriodo
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrade", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grdResultado.PreencherGrid(retorno);
                    if (retorno == null || retorno.length == 0) {
                        MostrarAlerta("Nenhum registro encontrado!");
                    }
                    else {
                        _this.AccordionFiltros.SetExpanded(false);
                    }
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
    return R_ConclubVan;
}(MouraPageRelacaoAngular));
var r_ConclubVan = new R_ConclubVan();
//# sourceMappingURL=R_ConClubVan.js.map