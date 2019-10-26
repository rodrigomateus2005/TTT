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
var C_LancMensMan = /** @class */ (function (_super) {
    __extends(C_LancMensMan, _super);
    function C_LancMensMan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_LancMensMan.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        set: function (value) {
            window['grid_Object'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LancMensMan.prototype, "mensalidade", {
        get: function () {
            if (!this.GetScope()['Mensalidade']) {
                this.mensalidade = {};
            }
            return this.GetScope()['Mensalidade'];
        },
        set: function (value) {
            if (!this.GetScope()['Mensalidade']) {
                this.mensalidade = {};
            }
            this.GetScope()['Mensalidade'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LancMensMan.prototype, "btnAtualizarMensalidade", {
        get: function () {
            return window['btnAtualizarMensalidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LancMensMan.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LancMensMan.prototype, "txtContrato", {
        get: function () {
            return window['txtContrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_LancMensMan.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    C_LancMensMan.prototype.Init = function () {
        if (this.btnAtualizarMensalidade) {
            adicionarEventoMoura(this.btnAtualizarMensalidade.Click, this.OnBtnAtualizarMensalidade, this);
        }
        if (this.txtContrato) {
            adicionarEventoMoura(this.txtContrato.Procurou, this.OnDepoisProcurou, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.LimparCampos, this);
        }
    };
    C_LancMensMan.prototype.LimparCampos = function () {
        this.mensalidade = {};
        this.mensalidade.data = this.DataServidor();
        this.grid.PreencherGrid([]);
        this.RefreshAngular();
    };
    C_LancMensMan.prototype.OnDepoisProcurou = function (s, e) {
        if (this.txtContrato.GetText().CNum() == 0) {
            return false;
        }
        var parametros = {
            codContrato: this.txtContrato.GetText().CNum()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("getDadosContrato", parametros);
        if (!retorno || !retorno.contrato) {
            MostrarError('Contrato não encontrado.');
            return;
        }
        var contrato = retorno.contrato;
        if (contrato.Tipo_Cobranca != 1) {
            MostrarError('Apenas contratos mensais podem ser informados.');
            return;
        }
        var mensalidades = retorno.mensalidades;
        this.grid.PreencherGrid([]);
        if (mensalidades && mensalidades.length > 0)
            this.grid.PreencherGrid(mensalidades);
        this.mensalidade.valor = contrato.Valor_Mensalidade;
    };
    C_LancMensMan.prototype.OnBtnAtualizarMensalidade = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        if (!this.ValidarCamposObrigatorios()) {
            return false;
        }
        MsgBoxJS("Confirma a data de emiss\u00E3o: " + this.mensalidade.data.FormataData() + "?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
            if (result.Resultado == MsgBoxResult.No) {
                return;
            }
            _this.InserirMensalidade();
        }, null, 'Lançamento de Mensalidade Manual - Clubz');
    };
    C_LancMensMan.prototype.InserirMensalidade = function () {
        try {
            console.log(this.mensalidade);
            var parametros = {
                codContrato: this.mensalidade.contrato,
                dataPagamento: this.mensalidade.data,
                nsu: this.mensalidade.nsu,
                bandeira: this.mensalidade.bandeira,
                operadora: this.mensalidade.operadora,
                parcela: this.mensalidade.parcela,
                valor: this.mensalidade.valor,
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("Petz_Inserir_Mensalidade_Manual", parametros);
            if (retorno) {
                MostrarMensagem('Mensalidade inserida com sucesso.');
                this.OnDepoisProcurou(null, null);
                this.LimparCampos();
            }
            else {
                MostrarError('Erro ao inserir mensalidade.');
            }
        }
        catch (e) {
        }
    };
    return C_LancMensMan;
}(MouraPageAngular));
var c_LancMensMan = new C_LancMensMan();
var Mensalidade = /** @class */ (function () {
    function Mensalidade() {
    }
    return Mensalidade;
}());
//# sourceMappingURL=C_LancMensMan.js.map