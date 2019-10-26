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
var R_AgendP = /** @class */ (function (_super) {
    __extends(R_AgendP, _super);
    function R_AgendP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_AgendP.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgendP.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgendP.prototype, "cboUsuario", {
        get: function () {
            return window['cboUsuario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AgendP.prototype, "cboTipoAgenda", {
        get: function () {
            return window['cboTipoAgenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_AgendP.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        debugger;
        if (this.cboTipoAgenda) {
            adicionarEventoMoura(this.cboTipoAgenda.SelectedItemChanged, this.OnVisibleUsuario, this);
        }
        this.cboUsuario.Visible = false;
        this.LimparCampos();
    };
    R_AgendP.prototype.OnVisibleUsuario = function () {
        if (this.cboTipoAgenda.GetValue() != "Empresa") {
            this.cboUsuario.Visible = true;
        }
        else {
            this.cboUsuario.Visible = false;
        }
        this.grid.Grid.clearGrouping();
        this.grid.PreencherGrid(null);
    };
    R_AgendP.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_AgendP.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        this.PreencherGrid();
    };
    R_AgendP.prototype.PreencherGrid = function () {
        var _this = this;
        var parametros;
        try {
            if (!this.Filtro.Periodo_Inicial) {
                MostrarAlerta("Data Inicial Incorreta");
                return false;
            }
            if (!this.Filtro.Periodo_Final) {
                MostrarAlerta("Data Final Incorreta");
                return false;
            }
            if (DiffDays(this.Filtro.Periodo_Inicial, this.Filtro.Periodo_Final) < 0) {
                MostrarAlerta("Data Final menor que Data Inicial!");
                return false;
            }
            if (!this.Filtro.Tipo_Agenda) {
                MostrarAlerta("Escolha a agenda para gerar");
                return false;
            }
            if (this.Filtro.Tipo_Agenda == "Pessoal") {
                if (this.Filtro.Usuario <= -1) {
                    MostrarAlerta("Selecione o usuário!");
                    return false;
                }
            }
            parametros = {
                dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial),
                dataFinal: ConvertToDate(this.Filtro.Periodo_Final),
                tipoAgenda: this.Filtro.Tipo_Agenda,
                usuario: this.Filtro.Usuario
            };
            //this.AccordionFiltros.SetExpanded(false)
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(retorno);
                if (_this.cboTipoAgenda.GetValue() == "Enviado") {
                    _this.grid.GroupBy("Destinatario");
                    _this.grid.GroupBy("Escreveu");
                }
                else {
                    _this.grid.Grid.clearGrouping();
                    _this.grid.GroupBy("Destinatario");
                }
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
        return;
    };
    R_AgendP.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.DataServidor();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Tipo_Agenda = "Empresa";
        this.Filtro.Usuario = 0;
        this.cboUsuario.Visible = false;
        this.grid.Grid.clearGrouping();
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    return R_AgendP;
}(MouraPageRelacaoAngular));
var r_AgendP = new R_AgendP();
//# sourceMappingURL=R_AgendP.js.map