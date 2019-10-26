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
var C_SaldoF = /** @class */ (function (_super) {
    __extends(C_SaldoF, _super);
    function C_SaldoF() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_SaldoF.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SaldoF.prototype, "cboImposto", {
        get: function () {
            return window['cboImposto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SaldoF.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SaldoF.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SaldoF.prototype, "txtCredito", {
        get: function () {
            return window['txtCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SaldoF.prototype, "txtDebito", {
        get: function () {
            return window['txtDebito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SaldoF.prototype, "txtOutros_ICMS_Devido", {
        get: function () {
            return window['txtOutros_ICMS_Devido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SaldoF.prototype, "txtSaldoDevedor", {
        get: function () {
            return window['txtSaldoDevedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SaldoF.prototype, "txtDeducao", {
        get: function () {
            return window['txtDeducao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SaldoF.prototype, "txtImpostoRecolher", {
        get: function () {
            return window['txtImpostoRecolher_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SaldoF.prototype, "txtSaldoCredor", {
        get: function () {
            return window['txtSaldoCredor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SaldoF.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_SaldoF.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.Procurou, this.BuscarGrade, this);
        }
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGrdSelecionouItem, this);
        }
        if (this.txtCredito) {
            adicionarEventoMoura(this.txtCredito.TextChanged, this.MudouTipo, this);
        }
        if (this.txtDebito) {
            adicionarEventoMoura(this.txtDebito.TextChanged, this.MudouTipo, this);
        }
        if (this.txtDeducao) {
            adicionarEventoMoura(this.txtDeducao.TextChanged, this.MudouTipo, this);
        }
        if (this.cboImposto) {
            adicionarEventoMoura(this.cboImposto.SelectedItemChanged, this.BuscarGrade, this);
        }
        if (this.txtOutros_ICMS_Devido) {
            adicionarEventoMoura(this.txtOutros_ICMS_Devido.TextChanged, this.MudouTipo, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.BuscarGrade, this);
        }
    };
    C_SaldoF.prototype.MudouTipo = function () {
        var entity = this.GetScope().Entity;
        var Debito = this.txtDebito.GetText().CNum();
        var Credito = this.txtCredito.GetText().CNum();
        var Deducao = this.txtDeducao.GetText().CNum();
        var Outros_ICMS_Devido = this.txtOutros_ICMS_Devido.GetText().CNum();
        var SaldoDevedor;
        SaldoDevedor = Debito - Credito;
        if (SaldoDevedor >= 0 && SaldoDevedor != undefined) {
            entity.Saldo_Devedor = SaldoDevedor;
            entity.Saldo_Credor = 0;
        }
        else if (SaldoDevedor < 0 && SaldoDevedor != undefined) {
            entity.Saldo_Devedor = 0;
            entity.Saldo_Credor = SaldoDevedor * (-1);
        }
        if (Outros_ICMS_Devido == undefined) {
            entity.Outros_ICMS_Devido = 0;
        }
        else {
            entity.Outros_ICMS_Devido = Outros_ICMS_Devido;
        }
        if (Deducao == undefined) {
            entity.Deducao = 0;
        }
        else {
            entity.Deducao = Deducao;
        }
        entity.Imposto_Recolher = (entity.Saldo_Devedor - entity.Deducao + entity.Outros_ICMS_Devido);
        this.RefreshAngular();
    };
    C_SaldoF.prototype.BuscarGrade = function (Imposto, Empresa) {
        if (this.cboImposto.GetValue() || this.cboEmpresa.GetValue()) {
            if (this.cboImposto.GetValue() > 0) {
                Imposto = "" + this.cboImposto.GetValue();
            }
            else {
                Imposto = "";
            }
            if (this.cboEmpresa.GetValue() > 0) {
                Empresa = "" + this.cboEmpresa.GetValue();
            }
            else {
                Empresa = "";
            }
            var parametros = {
                Imposto: Imposto,
                Empresa: Empresa
            };
        }
        else {
            var parametros = {};
        }
        var Itens = this.ExecutarFuncaoServerSideSynch("CarregarGrade", parametros);
        this.Grid.PreencherGrid(Itens);
    };
    C_SaldoF.prototype.OnGrdSelecionouItem = function (s, e) {
        this.txtCodigo.Procurar(e.data.Codigo);
    };
    C_SaldoF.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.BuscarGrade("", "");
        return true;
    };
    C_SaldoF.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.BuscarGrade("", "");
        return true;
    };
    C_SaldoF.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.EntityTela.Tipo == "A" && this.EntityTela.Codigo > 0) {
            MostrarAlerta("Só é possível alterar lançamentos manuais!");
            return false;
        }
        return true;
    };
    return C_SaldoF;
}(MouraPageCadastroAngular));
var c_SaldoF = new C_SaldoF();
//# sourceMappingURL=C_SaldoF.js.map