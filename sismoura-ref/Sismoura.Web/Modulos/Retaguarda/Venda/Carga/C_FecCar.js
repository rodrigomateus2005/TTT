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
var C_FecCar = /** @class */ (function (_super) {
    __extends(C_FecCar, _super);
    function C_FecCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_FecCar.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FecCar.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FecCar.prototype, "btnFechar", {
        get: function () {
            return window['btnFechar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FecCar.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_FecCar.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    C_FecCar.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnFechar) {
            adicionarEventoMoura(this.btnFechar.Click, this.OnClickFecharCarga, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.OnCellPrepared, this);
            adicionarEventoMoura(this.grid.ClickBotaoLinha, this.OnClickBotao, this);
        }
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.Procurou, this.BuscouCarga, this);
        }
    };
    C_FecCar.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (this.ValidarCamposObrigatorios()) {
            try {
                parametros = {
                    codigo: this.Filtro.Codigo
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    if (_this.grid.DataSource.length <= 0) {
                        MostrarAlerta("Nenhuma Venda pendente nesta carga !");
                        _this.LimparCampos();
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
        }
    };
    C_FecCar.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Produto = 0;
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    C_FecCar.prototype.OnClickFecharCarga = function (s, e) {
        var incompleto = false;
        if (this.grid.DataSource.length > 0) {
            var dadosGrade = this.grid.DataSource;
            for (var x = 0; x < dadosGrade.length && !incompleto; x++) {
                if ((CNum(dadosGrade[x].Valor_Recebido) == 0 && CNum(dadosGrade[x].Valor_Parcela) > 0) || (dadosGrade[x].Concluida == "N" && CNum(dadosGrade[x].CodVenda) > 0)) {
                    incompleto = true;
                }
            }
            if (!incompleto) {
                this.FecharCarga();
            }
            else {
                MostrarAlerta("As baixas relacionadas a esta carga não estão completas ou os Pedidos não estão concluídos !!!!");
            }
        }
        else {
            MostrarAlerta("Nenhuma carga selecionada!,<br />Busque por uma carga e clique em Gerar!");
        }
    };
    C_FecCar.prototype.FecharCarga = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                itens: this.grid.DataSource,
                carga: CNum(this.Filtro.Codigo),
                usuario: ValoresSismoura.UsuarioLogado,
                tela: ValoresSismoura.NomeTela
            };
            this.ExecutarFuncaoServerSideAsynch("FecharCarga", parametros, function (d) {
                fecharEspera();
                MostrarMensagem("Fechamento concluído !");
                _this.PreencherGrade();
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    C_FecCar.prototype.OnCellPrepared = function (s, e) {
        var name = "";
        if (e.column && e.column) {
            name = e.column.name;
        }
        try {
            if (e.rowType == "data" && e.data) {
                if (name.substring(0, 26).toLowerCase() == "botaotemplate_confirmar") {
                    var name = "";
                    if (e.data["Concluida"] == "S") {
                        $(e.cellElement).find("input").attr("title", "Desconfirmar");
                        $(e.cellElement).find("input").attr("value", "Desconfirmar");
                    }
                    else {
                        $(e.cellElement).find("input").attr("title", "Confirmar");
                        $(e.cellElement).find("input").attr("value", "Confirmar");
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_FecCar.prototype.ConcluirCargaVenda = function (venda, concluida) {
        var parametros;
        var aux;
        var data = null;
        if (concluida == "S") {
            data = this.DataServidor();
        }
        try {
            parametros = {
                venda: venda,
                confirmar: concluida,
                dataConcluido: data
            };
            this.ExecutarFuncaoServerSideSynch("ConfirmarCargaVenda", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_FecCar.prototype.OnClickBotao = function (s, e) {
        try {
            if (e.data["Concluida"] == "N") {
                e.data["Concluida"] = "S";
            }
            else {
                e.data["Concluida"] = "N";
            }
            this.ConcluirCargaVenda(CNum(e.data["CodVenda"]), e.data["Concluida"]);
            if (e.data["Concluida"] == "S") {
                this.grid.Grid.getRowElement(e.rowIndex).find("input").attr("title", "Desconfirmar");
                this.grid.Grid.getRowElement(e.rowIndex).find("input").attr("value", "Desconfirmar");
            }
            else {
                this.grid.Grid.getRowElement(e.rowIndex).find("input").attr("title", "Confirmar");
                this.grid.Grid.getRowElement(e.rowIndex).find("input").attr("value", "Confirmar");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_FecCar.prototype.BuscouCarga = function (s, e) {
        if (CNum(this.txtCodigo.GetText()) > 0) {
            this.Filtro.Codigo = CNum(this.txtCodigo.GetText());
            this.PreencherGrade();
        }
    };
    return C_FecCar;
}(MouraPageRelacaoAngular));
var c_FecCar = new C_FecCar();
//# sourceMappingURL=C_FecCar.js.map