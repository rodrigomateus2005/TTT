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
var R_Repres = /** @class */ (function (_super) {
    __extends(R_Repres, _super);
    function R_Repres() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Repres.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Repres.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Repres.prototype, "enviarEmail", {
        get: function () {
            return window["enviarEmail_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_Repres.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_Repres.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid)
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
    };
    //
    R_Repres.prototype.OnSelecionouLinha = function (s, e) {
        try {
            if (e.columnIndex == 1) {
                abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroRepresentante), e.data["Codigo"]);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Repres.prototype.OnEnviarEmail = function () {
        try {
            if (this.grid.GetSelectedRowsData.length > 0) {
                var anexos = [];
                var listaSelecionados = [];
                var listaDestinatarios = [];
                listaSelecionados = this.grid.GetSelectedRowsData;
                for (var repres in listaSelecionados) {
                    listaSelecionados[repres].Email != "" ? listaDestinatarios.push(listaSelecionados[repres].Email) :
                        MostrarMensagem("Destinat\u00E1rio '" + listaSelecionados[repres].Nome + "' n\u00E3o possui e-mail cadastrado!");
                }
                console.log(listaDestinatarios);
                if (!(listaDestinatarios.length <= 0))
                    this.enviarEmail.MostrarClient(listaDestinatarios, anexos, "", "");
            }
            else {
                MostrarAlerta("Selecione um destinatário");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    //
    R_Repres.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = this.DataServidor();
        this.Filtro.Cidade = 0;
        this.Filtro.Bairro = " ";
        this.Filtro.Tipo = "1";
        this.Filtro.Email = false;
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_Repres.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            abrirEspera("");
            parametros = {
                dataInicial: this.Filtro.Data_Inicial,
                dataFinal: this.Filtro.Data_Final,
                bairro: this.Filtro.Bairro,
                codCidade: CNum(this.Filtro.Cidade),
                tipo: this.Filtro.Tipo,
                possuiEmail: this.Filtro.Email
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    _this.AccordionFiltros.SetExpanded(false);
                }
                catch (ex) {
                    LogarException(ex);
                }
                finally {
                    fecharEspera();
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
    return R_Repres;
}(MouraPageRelacaoAngular));
var r_Repres = new R_Repres();
//# sourceMappingURL=R_Repres.js.map