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
var R_RelPer = /** @class */ (function (_super) {
    __extends(R_RelPer, _super);
    function R_RelPer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_RelPer.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RelPer.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RelPer.prototype, "hdnCodRelatorio", {
        get: function () {
            return window['hdnCodRelatorio'];
        },
        enumerable: true,
        configurable: true
    });
    R_RelPer.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_RelPer.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.GetScope()["filtros"] = {};
        this.Grid.PreencherGrid([]);
        this.RefreshAngular();
    };
    R_RelPer.prototype.ValidarCampos = function () {
        return this.ValidarCamposObrigatorios();
    };
    R_RelPer.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            this.Grid.PreencherGrid([]);
            if (!this.ValidarCampos()) {
                return;
            }
            var filtros = this.GetScope()["filtros"];
            var campos = this.CamposTela;
            if (!filtros) {
                filtros = {};
            }
            for (var i = 0; i < campos.length; i++) {
                var campo = campos[i];
                if (campo instanceof MouraTextBoxProcuraComLista) {
                    var textBoxComLista = campo;
                    var listaAdicionar = [];
                    if (textBoxComLista && textBoxComLista.SourceLista) {
                        for (var x = 0; x < textBoxComLista.SourceLista.length; x++) {
                            var itemLista = textBoxComLista.SourceLista[x];
                            listaAdicionar.push(itemLista.Value);
                        }
                    }
                    filtros[campo.ID] = listaAdicionar;
                }
                else if (campo instanceof MouraCheckBoxList) {
                    var chkList = campo;
                    filtros[campo.ID] = chkList.GetValues();
                }
                else if (campo instanceof MouraComboBoxCaixa) {
                    var comboCaixa = campo;
                    filtros[campo.ID] = comboCaixa.cboCaixa.GetValue();
                }
                else if (campo instanceof MouraListBoxEmpresa) {
                    var listaEmpresas = campo;
                    filtros[campo.ID] = listaEmpresas.GetValuesRelacao();
                }
            }
            parametros = {
                codRelatorio: this.hdnCodRelatorio.value.CNum(),
                filtros: filtros
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrade", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (!retorno.Erro) {
                    _this.AccordionFiltros.SetExpanded(false);
                    _this.Grid.PreencherGrid(retorno.Dados);
                }
                else {
                    //MostrarError("Ocorreu um erro no sistema".GetString());
                    MostrarAlerta("Não foi possível gerar o relatório, favor entrar em contato com o Suporte Técnico para verificar o Script cadastrado.");
                    console.error(retorno.Exception);
                }
                if (ValoresSismoura.UsuarioLogado == 0) {
                    console.log(retorno.QueryExecutada);
                }
                _this.RefreshAngular();
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
    return R_RelPer;
}(MouraPageRelacaoAngular));
var r_RelPer = new R_RelPer();
//# sourceMappingURL=R_RelPer.js.map