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
var R_EscEmp = /** @class */ (function (_super) {
    __extends(R_EscEmp, _super);
    function R_EscEmp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_EscEmp.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EscEmp.prototype, "Grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EscEmp.prototype, "txtData", {
        get: function () {
            return window["txtData_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EscEmp.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EscEmp.prototype, "lstDia", {
        get: function () {
            return window['lstDia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EscEmp.prototype, "cboTipoProfissional", {
        get: function () {
            return window['cboTipoProfissional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EscEmp.prototype, "accFiltro", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EscEmp.prototype, "btnRecolher", {
        get: function () {
            return window['btnRecolher_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EscEmp.prototype, "btnExpandir", {
        get: function () {
            return window['btnExpandir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_EscEmp.prototype.LimparCampos = function () {
        var _this = this;
        _super.prototype.LimparCampos.call(this);
        try {
            this.txtData.textBoxCalendarioInicio.SetDate(this.DataServidor());
            this.txtData.textBoxCalendarioFim.SetDate(this.DataServidor().addDays(7));
            this.ConfigurarGrade();
            this.Grid.PreencherGrid([]);
            if (ValoresSismoura && ValoresSismoura.EmpresaPadraoUsuario > 0) {
                var empresa = [];
                empresa.push(ValoresSismoura.EmpresaPadraoUsuario.toString());
                this.lstEmpresa.SetValues(empresa);
            }
            setTimeout(function () {
                if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus && _this.cboTipoProfissional.Combo.GetItemCount() > 1) {
                    _this.cboTipoProfissional.SetValue(1); //DEFAULT CENTRO DE ESTÉTICA (PETZ).
                }
            }, 700);
            this.codEmpresa = 0;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_EscEmp.prototype.ConfigurarGrade = function () {
        this.Grid.GroupBy("Empresa");
        this.Grid.FixarColuna("Nome_Profissional", true);
        this.Grid.FixarColuna("Sala", true);
        this.Grid.FixarColuna("Categoria", true);
        var opt = this.Grid.Grid.option("paging");
        opt.pageSize = 200;
        this.Grid.Grid.option("paging", opt);
    };
    R_EscEmp.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_EscEmp.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.CellPrepared, this.OnGridCellPrepared, this);
            if (this.Grid.Grid) {
                this.Grid.Grid.option("showRowLines", true);
            }
        }
        if (this.btnExpandir) {
            adicionarEventoMoura(this.btnExpandir.Click, this.OnClickBtnExpandir, this);
        }
        if (this.btnRecolher) {
            adicionarEventoMoura(this.btnRecolher.Click, this.OnClickBtnRecolher, this);
        }
    };
    R_EscEmp.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!this.ValidarCampos()) {
            return;
        }
        this.GerarGrade();
    };
    R_EscEmp.prototype.GerarGrade = function () {
        var _this = this;
        try {
            var dtInicial;
            dtInicial = this.txtData.textBoxCalendarioInicio.GetDate();
            dtInicial.setHours(12);
            var dtFinal;
            dtFinal = this.txtData.textBoxCalendarioFim.GetDate();
            dtFinal.setHours(12);
            if (!this.lstEmpresa.GetValues() || this.lstEmpresa.GetValues().length == 0) {
                MostrarAlerta("Informe ao menos uma empresa");
                return;
            }
            if (!this.lstDia.GetValues() || this.lstDia.GetValues().length == 0) {
                MostrarAlerta("Informe ao menos um dia da semana");
                return;
            }
            var parametros = {
                dataInicial: dtInicial,
                dataFinal: dtFinal,
                tipoProfissional: ("" + this.cboTipoProfissional.GetValue()).CNum(),
                empresa: this.lstEmpresa.GetValues(),
                dias: this.lstDia.GetValues()
            };
            this.ExecutarFuncaoServerSideAsynch("RelacaoAgenda", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (_this.accFiltro) {
                        _this.accFiltro.SetExpanded(false);
                    }
                    _this.Grid.Colunas = retorno.ColunasGrade;
                    _this.Grid.iniciarGrid();
                    _this.ConfigurarGrade();
                    _this.Grid.PreencherGrid(retorno.Dados);
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
            abrirEspera("");
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    R_EscEmp.prototype.ValidarCampos = function () {
        if ((this.txtData.textBoxCalendarioInicio.GetDate() == null || this.txtData.textBoxCalendarioInicio.GetDate() == undefined) || (this.txtData.textBoxCalendarioFim.GetDate() == null || this.txtData.textBoxCalendarioFim.GetDate() == undefined)) {
            MostrarAlerta("Informe a data corretamente!");
            return false;
        }
        if (("" + this.cboTipoProfissional.GetValue()).CNum() <= 0) {
            MostrarAlerta("Informe o tipo de profissional");
            return false;
        }
        return true;
    };
    R_EscEmp.prototype.OnGridCellPrepared = function (s, e) {
        try {
            var name = "";
            if (e.column && e.column) {
                name = e.column.name;
            }
            if (e.rowType == "header") {
                if (e.column.dataField != "Empresa" && e.column.dataField != "Nome_Profissional" && e.column.dataField != "Sala" && e.column.dataField != "Categoria") {
                    var coluna = e.column.dataField.substring(0, 6);
                    if (coluna == "Ignore") {
                        e.cellElement.attr("style", "display: none");
                    }
                    else if (e.column.dataField.substring(0, 6) != "Branco") {
                        e.cellElement.attr("colspan", "4");
                    }
                }
            }
            if (e.rowType == "data" && e.data) {
                if (e.column.dataField != "Empresa" && e.column.dataField != "Nome_Profissional" && e.column.dataField != "Sala" && e.column.dataField != "Categoria") {
                    var valor = e.data[e.column.dataField];
                    var dadosEscala = void 0;
                    var cor = void 0;
                    if (valor) {
                        dadosEscala = valor.split("|")[0];
                        if (valor.split("|")[1]) {
                            cor = valor.split("|")[1];
                        }
                        else if (dadosEscala == "Black") {
                            cor = dadosEscala;
                        }
                    }
                    if (!String.IsNullOrWhiteSpace(cor)) {
                        e.cellElement.css("background-color", cor);
                        e.cellElement.css("color", cor);
                        if (cor != 'Black') {
                            $(e.cellElement)[0].innerText = dadosEscala;
                        }
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_EscEmp.prototype.OnClickBtnExpandir = function (s, e) {
        try {
            e.processOnServer = false;
            this.Grid.ExpandAll(0);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_EscEmp.prototype.OnClickBtnRecolher = function (s, e) {
        try {
            e.processOnServer = false;
            this.Grid.CollapseAll();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_EscEmp;
}(MouraPageRelacaoAngular));
var r_EscEmp = new R_EscEmp();
//# sourceMappingURL=R_EscEmp.js.map