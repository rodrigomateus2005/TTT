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
var R_SerLan = /** @class */ (function (_super) {
    __extends(R_SerLan, _super);
    function R_SerLan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.novoAtendimento = "novoAtendimento";
        return _this;
    }
    Object.defineProperty(R_SerLan.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SerLan.prototype, "txtPeriodo", {
        //Filtros
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SerLan.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SerLan.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SerLan.prototype, "txtPrestador", {
        get: function () {
            return window['txtPrestador_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SerLan.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_SerLan.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grd) {
            adicionarEventoMoura(this.grd.SelecionouLinha, this.OnGrdClickBotaoLinha, this);
        }
        if (this.txtPrestador) {
            adicionarEventoMoura(this.txtPrestador.AntesAbrirProcura, this.OnAntesAbrirProcuraProfissional, this);
            adicionarEventoMoura(this.txtPrestador.Procurou, this.OnTxtPrestadorProcurou, this);
        }
        if (this.dlgTelaModal) {
            adicionarEventoMoura(this.dlgTelaModal.Fechou, this.OnFechouModalAtendimento, this);
        }
    };
    R_SerLan.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_SerLan.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (ValoresSismoura && ValoresSismoura.EmpresaPadraoUsuario > 0) {
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario;
        }
        this.txtPeriodo.Iniciar();
        this.txtPet.Limpar();
        this.txtPet.TextBoxAnimal.Visible = false;
        this.txtPrestador.Limpar();
        this.grd.PreencherGrid([]);
    };
    R_SerLan.prototype.OnAntesAbrirProcuraProfissional = function (s, e) {
        e.Cancelar = false;
        this.txtPrestador.AddParametro("isTerceirizado", "1");
    };
    R_SerLan.prototype.OnTxtPrestadorProcurou = function (s, e) {
        try {
            if (this.txtPrestador.GetText().CNum() <= 0)
                return;
            var param = {
                codProfissional: this.txtPrestador.GetText().CNum()
            };
            if (!this.ExecutarFuncaoServerSideSynch("isPrestadorServico", param)) {
                MostrarAlerta("Profissional informado não é um Prestador de Serviço.");
                this.txtPrestador.Limpar();
                this.txtPrestador.Focus();
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_SerLan.prototype.ValidarPeriodo = function (dataInicio, dataFim) {
        if (!dataInicio || !dataFim) {
            return false;
        }
        return true;
    };
    R_SerLan.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var dataInicio = this.txtPeriodo.textBoxCalendarioInicio.GetDate();
        var dataFim = this.txtPeriodo.textBoxCalendarioFim.GetDate();
        if (!this.ValidarPeriodo(dataInicio, dataFim)) {
            MostrarAlerta("Informe um período correto.");
            return;
        }
        try {
            var parametros = {
                dataInicial: dataInicio,
                dataFinal: dataFim,
                codProprietario: this.txtPet.TextBoxProprietario.GetText().CNum(),
                empresas: this.lstEmpresa.GetValuesRelacaoNumber(),
                codProfissional: this.txtPrestador.GetText().CNum()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarGrid", parametros, function (d) {
                try {
                    fecharEspera();
                    _this.grd.PreencherGrid(GetRetornoAJAX(d));
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
            this.grd.PreencherGrid([]);
            LogarException(ex);
            fecharEspera();
        }
    };
    R_SerLan.prototype.OnGrdClickBotaoLinha = function (s, e) {
        try {
            if (!e.data) {
                return;
            }
            var servicosStr = JSON.stringify(this.ExecutarFuncaoServerSideSynch("GetServicosHora", { codigoLancamento: e.data.Codigo_Lancamento }));
            var data = e.data.Data_Hora;
            var params = [
                "Data_Atendimento=" + data.FormataData(),
                "CodProfissional=" + e.data.Codigo_Prestador,
                "codEmpresa=" + e.data.Codigo_Empresa,
                "codProprietario=" + e.data.Codigo_Proprietario,
                "codAnimal=" + e.data.Codigo_Animal,
                "servicos=" + servicosStr,
                "lancamentoPrestador=" + e.data.Codigo_Lancamento
            ];
            this.dlgTelaModal.AbrirTelaModal(formataURLRelativa(URLTela.CadastroDeAtendimento), params, this.novoAtendimento, true);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_SerLan.prototype.OnFechouModalAtendimento = function (s, e) {
        try {
            this.PreencherGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_SerLan;
}(MouraPageRelacaoAngular));
var r_SerLan = new R_SerLan();
//# sourceMappingURL=R_SerLan.js.map