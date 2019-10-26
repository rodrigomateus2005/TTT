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
var MouraComboBoxPDV = /** @class */ (function (_super) {
    __extends(MouraComboBoxPDV, _super);
    function MouraComboBoxPDV(id) {
        var _this = _super.call(this, id) || this;
        _this.listPDV = [];
        _this.ComboPDVSelectedIndexChanged = new MouraEventHandler();
        _this.ListaEmpresaSelectedIndexChanged = new MouraEventHandler();
        return _this;
    }
    Object.defineProperty(MouraComboBoxPDV.prototype, "divBotao", {
        get: function () {
            return $("#" + this.ID + "_divBotao");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxPDV.prototype, "divCombo", {
        get: function () {
            return $("#" + this.ID + "_divCombo");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxPDV.prototype, "divTotal", {
        get: function () {
            return $("#" + this.ID + "_divTotal");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxPDV.prototype, "cboPdv", {
        get: function () {
            return window[this.ID + "_cboPdv_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxPDV.prototype, "lstEmpresa", {
        get: function () {
            return window[this.ID + "_lstEmpresa_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxPDV.prototype, "agrupamento", {
        get: function () {
            return window[this.ID + "_agrupamento_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxPDV.prototype, "ExibirListBoxEmpresa", {
        get: function () {
            return this._exibirListBoxEmpresa;
        },
        set: function (value) {
            this._exibirListBoxEmpresa = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxPDV.prototype, "SelecionarEmpresaPadrao", {
        get: function () {
            return this._selecionarEmpresaPadrao;
        },
        set: function (value) {
            this._selecionarEmpresaPadrao = value;
            if (this.lstEmpresa) {
                if (!value) {
                    this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxPDV.prototype, "EmpresaAutoPostBack", {
        get: function () {
            return this._EmpresaAutoPostBack;
        },
        set: function (value) {
            this._EmpresaAutoPostBack = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxPDV.prototype, "PdvAutoPostBack", {
        get: function () {
            return this._EmpresaAutoPostBack;
        },
        set: function (value) {
            this._PdvAutoPostBack = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxPDV.prototype, "dlgAnexo", {
        get: function () {
            return window[this.ID + '_dlgAnexo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    MouraComboBoxPDV.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.cboPdv) {
            adicionarEventoDevExpress(this.cboPdv.Combo.SelectedIndexChanged, this.OnComboChange, this);
        }
        if (this.lstEmpresa.btnMarcar) {
            adicionarEventoDevExpress(this.lstEmpresa.btnMarcar.Click, this.ListaSelectedIndexChanged, this);
        }
        if (this.lstEmpresa.btnDesmarcar) {
            adicionarEventoDevExpress(this.lstEmpresa.btnDesmarcar.Click, this.OnClickDesmarcar, this);
        }
        adicionarEventoJQuery($("#" + this.ID + "_lstEmpresa_List").find("input"), "change", this.ListaSelectedIndexChanged, this);
    };
    MouraComboBoxPDV.prototype.OnComboChange = function () {
        this.ComboPDVSelectedIndexChanged.FireEvent(this, new MouraEventArgs());
        this.ListaEmpresaSelectedIndexChanged.FireEvent(this, new MouraEventArgs());
    };
    MouraComboBoxPDV.prototype.ListaSelectedIndexChanged = function () {
        if (this.EmpresaAutoPostBack) {
            __doPostBack(this.AspUniqueId, "empresaAutoPostBack");
        }
        if (this.PdvAutoPostBack) {
            __doPostBack(this.AspUniqueId, "pdvAutoPostBack");
        }
        // __doPostBack(this.AspUniqueId, "listEmpresaChanged");
        this.OnSelectedIndexChange();
    };
    MouraComboBoxPDV.prototype.Limpar = function () {
        if (this.ExibirListBoxEmpresa) {
            var empresas = [];
            var codigoUsuario = 0;
            this.lstEmpresa.RemoverTodosItens(true);
            if (ValoresSismoura.UsuarioLogado > 0) {
                codigoUsuario = ValoresSismoura.UsuarioLogado;
            }
            this.lstEmpresa.Preencher(codigoUsuario);
            this.lstEmpresa.LimparSelecao();
            if (this.SelecionarEmpresaPadrao) {
                this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
                this.OnSelectedIndexChange();
            }
            else {
                this.cboPdv.ClearItems();
            }
            adicionarEventoJQuery($("#" + this.ID + "_lstEmpresa_List").find("input"), "change", this.ListaSelectedIndexChanged, this);
        }
        else {
            this.lstEmpresa.Visible = false;
        }
    };
    Object.defineProperty(MouraComboBoxPDV.prototype, "EmpresasSelecionadas", {
        get: function () {
            if (this.lstEmpresa.GetValues().length > 0) {
                if (this.lstEmpresa.GetValues[0] == 0 && this.lstEmpresa.GetValues[0]) {
                    var retorno = [];
                    for (var i = 0; i < this.lstEmpresa.GetValues().length; i++) {
                        retorno.push(this.lstEmpresa.GetValues[i]);
                    }
                    return retorno;
                }
            }
            return this.lstEmpresa.GetValuesRelacao();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxPDV.prototype, "PDVSelecionado", {
        get: function () {
            var retorno;
            retorno = this.cboPdv.GetValue();
            return retorno;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxPDV.prototype, "PDVSCarregados", {
        get: function () {
            var retorno;
            for (var i = 0; i < this.listPDV.length; i++) {
                retorno.push(this.listPDV[i].Codigo);
            }
            return retorno;
        },
        enumerable: true,
        configurable: true
    });
    MouraComboBoxPDV.prototype.OnSelectedIndexChange = function () {
        var codEmpresas = [];
        this.listPDV = [];
        var count = 0;
        var empresas = $("#" + this.ID + "_lstEmpresa_List").find("input");
        for (var x = 0; x < empresas.length; x++) {
            if (empresas[x].checked) {
                count++;
            }
        }
        if (count > 0) {
            this.cboPdv.ClearItems();
            codEmpresas = this.lstEmpresa.GetValuesRelacaoNumber();
            var param = {
                empresas: JSON.stringify(codEmpresas)
            };
            if (codEmpresas.length > 0) {
                var retornoString = this.ExecutarHttpRequest("GetByEmpresas", param);
                var retorno = [];
                if (!String.IsNullOrWhiteSpace(retornoString)) {
                    retorno = JSON.parse(DecodeTextoJSON(retornoString));
                }
                this.listPDV = retorno;
            }
            else {
                var retornoString = this.ExecutarHttpRequest("GetAllPdvs", param);
                var retorno = [];
                if (!String.IsNullOrWhiteSpace(retornoString)) {
                    retorno = JSON.parse(DecodeTextoJSON(retornoString));
                }
                this.listPDV = retorno;
            }
            var listPdvOrdenada = this.listPDV.sort(function (a, b) {
                if (a.Descricao.trim().toUpperCase() < b.Descricao.trim().toUpperCase()) {
                    return -1;
                }
                if (a.Descricao.trim().toUpperCase() > b.Descricao.trim().toUpperCase()) {
                    return 1;
                }
                return 0;
            });
            ;
            for (var i = 0; i < listPdvOrdenada.length; i++) {
                var pdv = listPdvOrdenada[i];
                this.cboPdv.AddItem(pdv.Descricao, pdv.Codigo.toString(), "");
            }
            this.cboPdv.AddItem("--Todos--", 0, "");
            this.cboPdv.SetValue(0);
        }
        else {
            this.cboPdv.ClearItems();
        }
        this.ListaEmpresaSelectedIndexChanged.FireEvent(this, new MouraEventArgs());
    };
    MouraComboBoxPDV.prototype.OnClickDesmarcar = function () {
        this.cboPdv.ClearItems();
    };
    return MouraComboBoxPDV;
}(MouraControl));
//# sourceMappingURL=MouraComboBoxPDV.js.map