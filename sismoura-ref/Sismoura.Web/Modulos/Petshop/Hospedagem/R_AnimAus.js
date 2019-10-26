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
var R_AnimAus = /** @class */ (function (_super) {
    __extends(R_AnimAus, _super);
    function R_AnimAus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_AnimAus.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AnimAus.prototype, "grid", {
        get: function () { return window['grid_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AnimAus.prototype, "txtPeriodo", {
        get: function () { return window['txtPeriodo_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AnimAus.prototype, "cboTipoHospedagem", {
        get: function () { return window['cboTipoHospedagem_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AnimAus.prototype, "cboPago", {
        get: function () { return window['cboPago_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AnimAus.prototype, "cboPresenca", {
        get: function () { return window['cboPresenca_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AnimAus.prototype, "cboEmpresa", {
        get: function () { return window['cboEmpresa_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AnimAus.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_AnimAus.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_AnimAus.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.OnGridCellPrepared, this);
        }
    };
    R_AnimAus.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (this.grid) {
            this.grid.PreencherGrid(null);
        }
        if (this.txtPeriodo) {
            this.txtPeriodo.Iniciar();
        }
        if (this.cboEmpresa) {
            this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        }
        if (this.cboTipoHospedagem) {
            this.cboTipoHospedagem.SetValue(0);
        }
        this.txtPet.Limpar();
    };
    R_AnimAus.prototype.OnGridCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data) {
                if (e.data['Presenca'] == "Falta") {
                    e.cellElement.css("color", "red");
                }
                else if (e.data['Presenca'] == "Presente") {
                    e.cellElement.css("color", "green");
                }
                else { //Não informada
                    e.cellElement.css("color", "orange");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AnimAus.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!this.txtPeriodo.IsValido()) {
            MostrarAlerta("Informe o período corretamente.");
            return;
        }
        if (this.cboEmpresa.GetValue() == 0) {
            MostrarAlerta("Informe a empresa");
            return;
        }
        if (this.cboTipoHospedagem.GetText() == "") {
            MostrarAlerta("Informe o tipo da hospedagem");
            return;
        }
        this.GetDadosRelacao();
    };
    R_AnimAus.prototype.GetDadosRelacao = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                codEmpresa: this.cboEmpresa.GetValue(),
                tipoHospedagem: this.cboTipoHospedagem.GetValue(),
                Pago: this.cboPago.GetValue(),
                Presenca: this.cboPresenca.GetValue(),
                codProprietario: this.txtPet.TextBoxProprietario.GetText().CNum(),
                codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetAnimaisAusentes", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
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
    return R_AnimAus;
}(MouraPageRelacaoAngular));
var r_AnimAus = new R_AnimAus;
//# sourceMappingURL=R_AnimAus.js.map