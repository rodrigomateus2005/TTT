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
var MouraTextBoxPeriodo = /** @class */ (function (_super) {
    __extends(MouraTextBoxPeriodo, _super);
    function MouraTextBoxPeriodo(id) {
        return _super.call(this, id) || this;
    }
    Object.defineProperty(MouraTextBoxPeriodo.prototype, "textBoxCalendarioInicio", {
        get: function () {
            return window[this.ID + "_TextBoxInicio"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxPeriodo.prototype, "textBoxCalendarioFim", {
        get: function () {
            return window[this.ID + "_TextBoxFim"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxPeriodo.prototype, "textBoxDiferenca", {
        get: function () {
            //return <HTMLInputElement> $("#" + this.ID + "_textBoxDiferenca")[0];return <HTMLInputElement> $("#" + this.ID + "_textBoxDiferenca")[0];
            return window[this.ID + "_textBoxDiferenca_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxPeriodo.prototype, "Enabled", {
        get: function () {
            if (this.textBoxCalendarioInicio && this.textBoxCalendarioInicio.GetEnabled) {
                return this.textBoxCalendarioInicio.GetEnabled();
            }
            return false;
        },
        set: function (value) {
            if (this.textBoxCalendarioInicio && this.textBoxCalendarioInicio.SetEnabled) {
                this.textBoxCalendarioInicio.SetEnabled(value);
            }
            if (this.textBoxCalendarioFim && this.textBoxCalendarioFim.SetEnabled) {
                this.textBoxCalendarioFim.SetEnabled(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxPeriodo.prototype, "NgModelInicial", {
        get: function () {
            return this._ngModelInicial;
        },
        set: function (value) {
            this._ngModelInicial = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTextBoxPeriodo.prototype, "NgModelFinal", {
        get: function () {
            return this._ngModelFinal;
        },
        set: function (value) {
            this._ngModelFinal = value;
        },
        enumerable: true,
        configurable: true
    });
    MouraTextBoxPeriodo.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.textBoxDiferenca) {
            adicionarEventoMoura(this.textBoxDiferenca.TextChanged, this.OnTextBoxDiferencaChange, this);
        }
        if (this.textBoxCalendarioInicio) {
            adicionarEventoDevExpress(this.textBoxCalendarioInicio.ValueChanged, this.OnTextBoxCalendarioInicioChange, this);
        }
        if (this.textBoxCalendarioFim) {
            adicionarEventoDevExpress(this.textBoxCalendarioFim.ValueChanged, this.OnTextBoxCalendarioFimChange, this);
        }
    };
    MouraTextBoxPeriodo.prototype.OnTextBoxCalendarioFimChange = function (s, e) {
        this.AtualizarDiferenca();
    };
    MouraTextBoxPeriodo.prototype.OnTextBoxCalendarioInicioChange = function (s, e) {
        this.AtualizarDiferenca();
    };
    MouraTextBoxPeriodo.prototype.OnTextBoxDiferencaChange = function (e) {
        var dataFim;
        var numeroDeDias;
        dataFim = this.textBoxCalendarioInicio.GetDate();
        numeroDeDias = this.textBoxDiferenca.GetText().CNum();
        if (numeroDeDias < 0) {
            this.AtualizarDiferenca();
            return;
        }
        if (numeroDeDias > 145732) {
            this.textBoxDiferenca.SetText("145732");
            numeroDeDias = 145732;
        }
        dataFim.setDate(dataFim.getDate() + numeroDeDias);
        if (dataFim.getTime() > new Date(2199, 0, 1, 0, 0, 0, 0).getTime()) {
            dataFim = new Date(2199, 0, 1, 0, 0, 0, 0);
        }
        this.textBoxCalendarioFim.SetDate(dataFim);
        this.AtualizarDiferenca();
    };
    MouraTextBoxPeriodo.prototype.AtualizarDiferenca = function () {
        if (!this.textBoxDiferenca || !this.textBoxDiferenca.Textbox)
            return;
        var d;
        var dataInicio;
        var dataFim;
        var resultado;
        dataInicio = this.textBoxCalendarioInicio.GetDate();
        dataFim = this.textBoxCalendarioFim.GetDate();
        resultado = calcularDiferencaData(dataInicio, dataFim, DiferencaData.Days);
        this.textBoxDiferenca.SetText(resultado.Format(0));
    };
    MouraTextBoxPeriodo.prototype.Iniciar = function () {
        var data;
        data = new Date();
        this.textBoxCalendarioFim.SetDate(data);
        data = data.addDays((data.getDate() - 1) * -1);
        this.textBoxCalendarioInicio.SetDate(data);
        this.AtualizarDiferenca();
    };
    MouraTextBoxPeriodo.prototype.IniciarDataAtual = function () {
        var data;
        data = new Date();
        this.textBoxCalendarioFim.SetDate(data);
        this.textBoxCalendarioInicio.SetDate(data);
        this.AtualizarDiferenca();
    };
    MouraTextBoxPeriodo.prototype.IsValido = function () {
        if (this.textBoxCalendarioInicio.GetDate() == null || this.textBoxCalendarioInicio.GetDate() == undefined ||
            this.textBoxCalendarioFim.GetDate() == null || this.textBoxCalendarioFim.GetDate() == undefined) {
            return false;
        }
        return _super.prototype.IsValido.call(this);
    };
    return MouraTextBoxPeriodo;
}(MouraCampo));
//# sourceMappingURL=MouraTextBoxPeriodo.js.map