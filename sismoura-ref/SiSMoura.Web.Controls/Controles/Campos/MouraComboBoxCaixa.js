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
var MouraComboBoxCaixa = /** @class */ (function (_super) {
    __extends(MouraComboBoxCaixa, _super);
    function MouraComboBoxCaixa(id) {
        return _super.call(this, id) || this;
    }
    Object.defineProperty(MouraComboBoxCaixa.prototype, "cboPdv", {
        get: function () {
            return window[this.ID + "_cboPdv_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxCaixa.prototype, "cboCaixa", {
        get: function () {
            return window[this.ID + "_cboCaixa_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxCaixa.prototype, "lstEmpresa", {
        get: function () {
            return window[this.ID + "_lstEmpresa_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxCaixa.prototype, "btnConsulta", {
        get: function () {
            return window[this.ID + "_btnConsulta_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxCaixa.prototype, "agrupamento", {
        get: function () {
            return window[this.ID + "_Agrupamento_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxCaixa.prototype, "divBotao", {
        get: function () {
            return window[this.ID + "_divBotao"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxCaixa.prototype, "divCombo", {
        get: function () {
            return window[this.ID + "_divCombo"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxCaixa.prototype, "divTotal", {
        get: function () {
            return window[this.ID + "_divTotal"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxCaixa.prototype, "hdnPeriodo", {
        get: function () {
            return $("#" + this.ID + "_hdnPeriodo")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxCaixa.prototype, "txtPeriodo", {
        //get hdnPeriodo(): HTMLInputElement {
        //    return window[this.ID + "_hdnPeriodo"];
        //}
        get: function () {
            return window[this.hdnPeriodo.value + "_Object"];
        },
        enumerable: true,
        configurable: true
    });
    MouraComboBoxCaixa.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.btnConsulta) {
            adicionarEventoMoura(this.btnConsulta.Click, this.OnBtnConsultaClick, this);
        }
    };
    MouraComboBoxCaixa.prototype.OnBtnConsultaClick = function (s, e) {
        e.processOnServer = false;
        debugger;
        var dataInicio;
        var dataFim;
        dataInicio = this.txtPeriodo.textBoxCalendarioInicio;
        dataFim = this.txtPeriodo.textBoxCalendarioFim;
        var empresas = "";
        if (this.lstEmpresa) {
            empresas = this.lstEmpresa.GetValues().join(",");
        }
        var parametros = {
            lstEmpresa: empresas
        };
        var pdvs = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("RetornarPdvs", parametros)));
        if (pdvs) {
            if (this.cboPdv) {
                var backupSelectedValue;
                backupSelectedValue = this.cboPdv.GetValue();
                this.cboPdv.ClearItems();
                if (pdvs.length > 0) {
                    this.cboPdv.AddItem("--Todos--", 0, "");
                    for (var i = 0; i < pdvs.length; i++) {
                        this.cboPdv.AddItem(pdvs[i].Descricao, pdvs[i].Codigo, "");
                    }
                    if (backupSelectedValue) {
                        this.cboPdv.SetValue(backupSelectedValue);
                    }
                    else {
                        this.cboPdv.SetSelectedIndex(0);
                    }
                }
            }
        }
        else {
            if (this.cboPdv) {
                this.cboPdv.LimparSelecao();
            }
        }
        parametros = {
            lstEmpresa: empresas,
            dataInicial: dataInicio.GetFormattedDate(),
            dataFinal: dataFim.GetFormattedDate(),
            codPdv: "" + this.cboPdv.GetValue()
        };
        var retorno = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("ConsultarPdvs", parametros)));
        if (retorno && retorno.length > 0) {
            if (this.cboCaixa) {
                //cboCaixa.DataSource = retorno
                //cboCaixa.DataBind()
                this.cboCaixa.ClearItems();
                if (retorno.length > 0) {
                    this.cboCaixa.AddItem("--Todos--", 0, "");
                    for (var i = 0; i < retorno.length; i++) {
                        this.cboCaixa.AddItem(retorno[i].Descricao_Caixa, retorno[i].Caixa, "");
                    }
                    this.cboCaixa.SetSelectedIndex(0);
                }
            }
            return;
        }
        else {
            if (this.cboCaixa && this.cboPdv) {
                //this.cboCaixa. remover todos os itens
                this.cboCaixa.LimparSelecao();
                MostrarAlerta("Não há nenhum caixa que foi aberto e fechado neste período!");
                this.cboPdv.Focus();
                return;
            }
        }
    };
    return MouraComboBoxCaixa;
}(MouraControl));
//# sourceMappingURL=MouraComboBoxCaixa.js.map