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
var C_ProMec = /** @class */ (function (_super) {
    __extends(C_ProMec, _super);
    function C_ProMec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ProMec.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProMec.prototype, "txtContrato", {
        get: function () {
            return window['txtContrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProMec.prototype, "txtMaquina", {
        get: function () {
            return window['txtMaquina_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProMec.prototype, "txtFazenda", {
        get: function () {
            return window['txtFazenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProMec.prototype, "txtTalhao", {
        get: function () {
            return window['txtTalhao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProMec.prototype, "txtHectares", {
        get: function () {
            return window['txtHectares_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProMec.prototype, "cboOperacao", {
        get: function () {
            return window['cboOperacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProMec.prototype, "txtDataInicial", {
        get: function () {
            return window['txtDataInicial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProMec.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProMec.prototype, "Prog", {
        get: function () {
            return this.GetScope()["Prog"];
        },
        set: function (value) {
            this.GetScope()["Prog"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_ProMec.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.AntesGravar, this.OnAntesGravar, this);
        if (this.txtContrato) {
            adicionarEventoMoura(this.txtContrato.Procurou, this.OnProcurouContrato, this);
        }
        if (this.txtMaquina) {
            adicionarEventoMoura(this.txtMaquina.AbriuProcura, this.OnProcurouMaquina, this);
            adicionarEventoMoura(this.txtMaquina.Procurou, this.OnPesquisouMaquina, this);
        }
        //if (this.cboOperacao){
        //    adicionarEventoDevExpress(this.cboOperacao.Combo.SelectedIndexChanged, this.OnSelecionouOperacao, this);
        //}
    };
    C_ProMec.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.BuscarGrid();
    };
    C_ProMec.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.BuscarGrid();
        return true;
    };
    C_ProMec.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        //let parametros2: any = {
        //    Operacao: this.cboOperacao.GetValue()
        //}
        //var codigoMaq;
        //codigoMaq = this.ExecutarFuncaoServerSideSynch("VerificarImplementoOperacao", parametros2)
        var parametros;
        parametros = {
            codMaquina: this.txtMaquina.GetText().CNum(),
            area: this.txtHectares.GetText()
        };
        var dias;
        var resto;
        var entidade = this.GetScope().Entity;
        entidade.Horas_Previstas = this.ExecutarFuncaoServerSideSynch("HorasPrevistas", parametros);
        dias = entidade.Horas_Previstas / 24;
        dias = Math.floor(dias);
        entidade.Data_Final_Prevista = this.txtDataInicial.Date.addDays(dias);
        return true;
    };
    C_ProMec.prototype.BuscarGrid = function () {
        var parametros = {
            contrato: this.txtContrato.GetText().CNum()
        };
        var Itens = this.ExecutarFuncaoServerSideSynch("CarregarProg", parametros);
        this.Prog = Itens;
    };
    C_ProMec.prototype.OnProcurouContrato = function (s, e) {
        var parametros = {
            contrato: this.txtContrato.GetText().CNum()
        };
        if (!this.txtContrato) {
            return;
        }
        this.txtMaquina.LimparParametros;
        this.txtMaquina.AddParametro("contrato", this.txtContrato.GetText());
        if (this.txtMaquina.GetText().CNum() > 0) {
            this.OnPesquisouMaquina(s, e);
        }
        ;
        this.BuscarGrid();
    };
    C_ProMec.prototype.OnProcurouMaquina = function (s, e) {
        this.txtMaquina.AddParametro("contrato", this.txtContrato.GetText());
    };
    C_ProMec.prototype.OnPesquisouMaquina = function (s, e) {
        var parametros = {
            contrato: this.txtContrato.GetText().CNum(),
            Maquina: this.txtMaquina.GetText().CNum()
        };
        if (!this.ExecutarFuncaoServerSideSynch("ValidarMaquina", parametros)) {
            this.txtMaquina.Focus();
            this.txtMaquina.LabelResultado.innerText = "";
            this.txtMaquina.SetText("");
            var entidade = this.GetScope().Entity;
            entidade.Maquina = 0;
            MostrarAlerta("Máquina não encontrada ou não está vinculada ao contrato informado!");
        }
        ;
    };
    return C_ProMec;
}(MouraPageCadastroAngular));
var c_ProMec = new C_ProMec();
//# sourceMappingURL=C_ProMec.js.map