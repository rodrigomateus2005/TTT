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
var C_CioAn = /** @class */ (function (_super) {
    __extends(C_CioAn, _super);
    function C_CioAn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CioAn.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CioAn.prototype, "Cio", {
        get: function () {
            var that = this.GetScope()["Cio"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Cio"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CioAn.prototype, "Cios", {
        get: function () {
            return this.GetScope()["Cios"];
        },
        set: function (value) {
            this.GetScope()["Cios"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CioAn.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CioAn.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CioAn.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CioAn.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CioAn.prototype, "btnNovo", {
        get: function () {
            return window['btnNovo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CioAn.prototype, "btnExcluir", {
        get: function () {
            return window['btnExcluir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_CioAn.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.Validando, this.OnValidando, this);
            adicionarEventoMoura(this.Grid.LimpouItem, this.OnLimpouPeriodo, this);
        }
        if (this.txtPet) {
            adicionarEventoMoura(this.txtPet.ProcurouAnimal, this.OnProcurouAnimal, this);
            adicionarEventoMoura(this.txtPet.ProcurouProprietario, this.OnProcurouAnimal, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnGravarRegistro, this);
        }
        if (this.btnNovo) {
            adicionarEventoMoura(this.btnNovo.Click, this.OnLimparCampos, this);
        }
        if (this.btnExcluir) {
            adicionarEventoMoura(this.btnExcluir.Click, this.OnExcluirRegistro, this);
        }
    };
    C_CioAn.prototype.OnProcurouAnimal = function (s, e) {
        this.PrencherGridCio();
    };
    C_CioAn.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    C_CioAn.prototype.OnLimpouPeriodo = function () {
        this.txtPeriodo.textBoxCalendarioInicio.SetDate(this.DataServidor());
        this.txtPeriodo.textBoxCalendarioFim.SetDate(this.DataServidor());
        this.RefreshAngular();
    };
    C_CioAn.prototype.OnValidando = function (s, e) {
        var dataInicial = this.txtPeriodo.textBoxCalendarioInicio.GetText();
        var dataFinal = this.txtPeriodo.textBoxCalendarioFim.GetText();
        if (this.txtPet.TextBoxAnimal.GetText().CNum() <= 0) {
            MostrarMensagemCampoObrigatorio("Animal");
            e.cancelar = true;
            return;
        }
        if (dataInicial == "01/01/0100" || dataInicial == undefined) {
            MostrarMensagemCampoObrigatorio("Data Inicial");
            e.cancelar = true;
            this.txtPeriodo.textBoxCalendarioInicio.LostFocus;
            return;
        }
        if (dataFinal == "01/01/0100" || dataFinal == undefined) {
            MostrarMensagemCampoObrigatorio("Data Final");
            e.cancelar = true;
            this.txtPeriodo.textBoxCalendarioFim.LostFocus;
            return;
        }
        if (this.Cios.length > 0) {
            for (var x = 0; x < this.Cios.length; x++) {
                if (this.Cios[x].Datainicial.getTime() == dataInicial.ToDate().getTime() &&
                    this.Cios[x].Datafinal.getTime() == dataFinal.ToDate().getTime()) {
                    MostrarAlerta("Já existe esse período de cio informado para esse animal");
                    e.cancelar = true;
                    return;
                }
            }
        }
        this.Cio.Animal = this.txtPet.TextBoxAnimal.GetText().CNum();
        this.Cio.Datainicial = this.txtPeriodo.textBoxCalendarioInicio.GetDate();
        this.Cio.Datafinal = this.txtPeriodo.textBoxCalendarioFim.GetDate();
        this.RefreshAngular();
    };
    C_CioAn.prototype.OnGravarRegistro = function (s, e) {
        e.processOnServer = false;
        var codAnimal = this.txtPet.TextBoxAnimal.GetText().CNum();
        if (codAnimal <= 0) {
            MostrarMensagemCampoObrigatorio("Animal");
            return false;
        }
        try {
            var parametros;
            parametros = {
                listaCios: this.Cios,
                codAnimal: codAnimal,
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var gravarRegistro = this.ExecutarFuncaoServerSideSynch("GravarAlterarRegistro", parametros);
            if (gravarRegistro) {
                MostrarMensagem("Registro " + codAnimal + " gravado com sucesso!");
                this.PrencherGridCio();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CioAn.prototype.OnExcluirRegistro = function (s, e) {
        e.processOnServer = false;
        var codAnimal = this.txtPet.TextBoxAnimal.GetText().CNum();
        if (codAnimal <= 0) {
            MostrarAlerta("Informe o registro que será excluído");
            return false;
        }
        MsgBoxJS("Deseja realmente Excluir os registro(s)?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespondeuExcluir, this));
    };
    C_CioAn.prototype.OnRespondeuExcluir = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            var codAnimal = this.txtPet.TextBoxAnimal.GetText().CNum();
            try {
                var parametros;
                parametros = {
                    listaCios: this.Cios,
                    codAnimal: codAnimal,
                    nomeTela: ValoresSismoura.NomeTela,
                    codUsuario: ValoresSismoura.UsuarioLogado
                };
                var excluirRegistro = this.ExecutarFuncaoServerSideSynch("ExcluirRegistro", parametros);
                if (excluirRegistro) {
                    MostrarMensagem("Registro " + codAnimal + " excluído com sucesso!");
                    this.LimparCampos();
                }
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    C_CioAn.prototype.PrencherGridCio = function () {
        var codAnimal = this.txtPet.TextBoxAnimal.GetText().CNum();
        if (codAnimal != null || codAnimal != undefined) {
            var parametros;
            parametros = {
                codAnimal: codAnimal
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetPeriodoCios", parametros);
            this.Cios = retorno.Cios;
            this.RefreshAngular();
        }
    };
    C_CioAn.prototype.OnLimparCampos = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
    };
    C_CioAn.prototype.LimparCampos = function () {
        this.txtPet.TextBoxAnimal.Limpar();
        this.txtPet.TextBoxProprietario.Limpar();
        this.OnLimpouPeriodo();
        this.Cios = [];
        this.Grid.Limpar();
        this.RefreshAngular();
    };
    return C_CioAn;
}(MouraPageAngular));
var c_CioAn = new C_CioAn();
//# sourceMappingURL=C_CioAn.js.map