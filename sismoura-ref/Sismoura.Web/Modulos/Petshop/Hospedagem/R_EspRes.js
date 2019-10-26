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
var R_EspRes = /** @class */ (function (_super) {
    __extends(R_EspRes, _super);
    function R_EspRes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_EspRes.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EspRes.prototype, "grid", {
        get: function () { return window['grid_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EspRes.prototype, "txtPeriodo", {
        get: function () { return window['txtPeriodo_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EspRes.prototype, "txtPet", {
        get: function () { return window['txtPet_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EspRes.prototype, "cboEmpresa", {
        get: function () { return window['cboEmpresa_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EspRes.prototype, "cboTamanhoBaia", {
        get: function () { return window['cboTamanhoBaia_Object']; },
        enumerable: true,
        configurable: true
    });
    R_EspRes.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        this.ObterParametrosRelacao();
    };
    R_EspRes.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinhaGrid, this);
            adicionarEventoMoura(this.grid.ExcluiuLinhaGrade, this.OnExcluiuRegistroGrade, this);
        }
    };
    R_EspRes.prototype.OnExcluiuRegistroGrade = function (s, e) {
        try {
            if (e.item['Codigo']) {
                var parametros = {
                    codReserva: CNum(e.item['Codigo']),
                    tela: ValoresSismoura.NomeTela,
                    codUsuario: ValoresSismoura.UsuarioLogado
                };
                var resultado = this.ExecutarFuncaoServerSideSynch("ExcluirReserva", parametros);
                if (resultado) {
                    MostrarMensagem("Registro excluído com sucesso.");
                }
                else {
                    MostrarAlerta("Falha ao remover o registro");
                }
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    R_EspRes.prototype.OnSelecionouLinhaGrid = function (s, e) {
        if (e && e.data['Codigo']) {
            var codigo = e.data['Codigo'];
            abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroReservaHospedagemPetz + "?CodigoEspera=" + codigo), null);
        }
    };
    R_EspRes.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (this.grid) {
            this.grid.PreencherGrid(null);
        }
        if (this.txtPeriodo) {
            this.txtPeriodo.Iniciar();
        }
        if (this.cboEmpresa) {
            this.cboEmpresa.LimparSelecao;
        }
        if (this.txtPet) {
            this.txtPet.TextBoxAnimal.Limpar();
            this.txtPet.TextBoxProprietario.Limpar();
        }
        this.cboTamanhoBaia.SetValue("0");
    };
    R_EspRes.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!this.txtPeriodo.IsValido()) {
            MostrarAlerta("Informe o período corretamente.");
            return;
        }
        if (this.cboEmpresa.GetValue() == 0) {
            MostrarAlerta("Informe a empresa");
            return;
        }
        this.GetDadosRelacao(this.txtPeriodo.textBoxCalendarioInicio.GetDate(), this.txtPeriodo.textBoxCalendarioFim.GetDate(), this.cboEmpresa.GetValue(), this.txtPet.TextBoxProprietario.GetText().CNum(), this.txtPet.TextBoxAnimal.GetText().CNum(), this.cboTamanhoBaia.GetValue());
    };
    R_EspRes.prototype.GetDadosRelacao = function (dataInicial, dataFinal, codEmpresa, codProprietario, codAnimal, tamanhoBaia) {
        var _this = this;
        var parametros;
        try {
            parametros = {
                dataInicial: dataInicial,
                dataFinal: dataFinal,
                codEmpresa: codEmpresa,
                codProprietario: codProprietario,
                codAnimal: codAnimal,
                tamanhoBaia: tamanhoBaia
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetReservasEspera", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    //this.grid.GroupBy("Empresa");
                    //this.grid.CollapseAll();
                    //this.grid.CellPrepared
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
    R_EspRes.prototype.ObterParametrosRelacao = function () {
        var _this = this;
        setTimeout(function () {
            debugger;
            if (_this.QueryString.Parametros) {
                try {
                    var parametros = _this.ParametrosTela;
                    var dataInicial = parametros.dataInicial;
                    var dataFinal = parametros.dataFinal;
                    var codEmpresa = parametros.codEmpresa;
                    var tamanhoBaia = parametros.tamanhoBaia;
                    _this.txtPeriodo.textBoxCalendarioInicio.SetDate(ConvertToDate(dataInicial));
                    _this.txtPeriodo.textBoxCalendarioFim.SetDate(ConvertToDate(dataFinal));
                    _this.cboEmpresa.SetValue(codEmpresa);
                    _this.cboTamanhoBaia.SetValue(tamanhoBaia);
                    _this.GetDadosRelacao(ConvertToDate(dataInicial), ConvertToDate(dataFinal), codEmpresa, 0, 0, _this.cboTamanhoBaia.GetValue());
                }
                catch (ex) {
                    LogarException(ex);
                }
            }
        }, 700);
    };
    return R_EspRes;
}(MouraPageRelacaoAngular));
var r_EspRes = new R_EspRes;
//# sourceMappingURL=R_EspRes.js.map