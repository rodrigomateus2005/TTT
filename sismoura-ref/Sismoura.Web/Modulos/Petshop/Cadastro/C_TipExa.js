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
var C_TipExa = /** @class */ (function (_super) {
    __extends(C_TipExa, _super);
    function C_TipExa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_TipExa.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipExa.prototype, "chkInativo", {
        get: function () {
            return window['chkInativo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipExa.prototype, "Tipo_Exames", {
        get: function () {
            return this.GetScope()["Tipo_Exames"];
        },
        set: function (value) {
            this.GetScope()["Tipo_Exames"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipExa.prototype, "Tipo_Exame", {
        get: function () {
            return this.GetScope()["Tipo_Exame"];
        },
        set: function (value) {
            this.GetScope()["Tipo_Exame"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipExa.prototype, "btnPainel", {
        get: function () {
            return window['btnPainel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipExa.prototype, "dlgPainel", {
        get: function () {
            return window['dlgPainel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipExa.prototype, "txtTipoExamePainel", {
        get: function () {
            return window['txtTipoExamePainel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipExa.prototype, "grdPainel", {
        get: function () {
            return window['grdPainel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_TipExa.prototype, "btnSalvarPainel", {
        get: function () {
            return window['btnSalvarPainel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_TipExa.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.btnPainel) {
            adicionarEventoMoura(this.btnPainel.Click, this.OnBtnPainelClick, this);
        }
        if (this.grdPainel) {
            adicionarEventoMoura(this.grdPainel.AdicionandoItem, this.OnAdicionandoGrdPainel, this);
        }
        if (this.btnSalvarPainel) {
            adicionarEventoMoura(this.btnSalvarPainel.Click, this.OnBtnSalvarPainelClick, this);
        }
    };
    C_TipExa.prototype.OnGravouSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
    };
    C_TipExa.prototype.OnExcluiuSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
    };
    C_TipExa.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var animaisPainel = [];
        if (this.Tipo_Exames && this.Tipo_Exames.length > 0) {
            this.Tipo_Exames.forEach(function (q) {
                animaisPainel.push({
                    Tipo_Exame: q.Codigo_Tipo_Exame
                });
            });
        }
        this.EntityTela.Tipo_Exames = animaisPainel;
        return true;
    };
    C_TipExa.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.GetCadastrados();
        return true;
    };
    C_TipExa.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        this.chkInativo.Checked = this.EntityTela.Inativo;
    };
    C_TipExa.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.chkInativo.Checked = false;
        this.txtTipoExamePainel.Limpar();
        this.Tipo_Exames = [];
        this.grdPainel.Grid.PreencherGrid([]);
        this.GetCadastrados();
        this.RefreshAngular();
    };
    C_TipExa.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.Tipo_Exames = this.ExecutarFuncaoServerSideSynch("GetPainel", { tipoExame: Entity.Codigo });
        this.grdPainel.Grid.Refresh();
    };
    C_TipExa.prototype.GetCadastrados = function () {
        try {
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", {});
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_TipExa.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.OnDepoisLimpar(this.GetScope().Entity);
    };
    C_TipExa.prototype.OnBtnPainelClick = function (s, e) {
        e.processOnServer = false;
        try {
            this.grdPainel.AtualizarGrid();
            this.dlgPainel.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_TipExa.prototype.OnAdicionandoGrdPainel = function (s, e) {
        var entidade = e.item;
        try {
            if (!this.ValidarAdicionarPainel(entidade)) {
                e.cancelar = true;
                return;
            }
            entidade.Tipo_Exame = this.txtTipoExamePainel.GetResultado();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_TipExa.prototype.ValidarAdicionarPainel = function (entidade) {
        try {
            if (this.EntityTela.Codigo) {
                if (this.EntityTela.Codigo == entidade.Codigo_Tipo_Exame) {
                    MostrarAlerta("Não é possível adicionar o mesmo Tipo de Exame do cadastro");
                    return false;
                }
            }
            var encontrado_1 = false;
            if (this.Tipo_Exames) {
                this.Tipo_Exames.forEach(function (q) {
                    if (q.Codigo_Tipo_Exame == entidade.Codigo_Tipo_Exame) {
                        encontrado_1 = true;
                    }
                });
            }
            if (encontrado_1) {
                MostrarAlerta("Tipo de exame já inserido");
                return false;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return true;
    };
    C_TipExa.prototype.OnBtnSalvarPainelClick = function (s, e) {
        e.processOnServer = false;
        try {
            this.dlgPainel.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_TipExa;
}(MouraPageCadastroAngular));
var c_TipExa = new C_TipExa();
//# sourceMappingURL=C_TipExa.js.map