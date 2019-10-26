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
var R_PosDia = /** @class */ (function (_super) {
    __extends(R_PosDia, _super);
    function R_PosDia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_PosDia.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PosDia.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PosDia.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PosDia.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_PosDia.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_PosDia.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.OnGridCellPrepared, this);
        }
    };
    R_PosDia.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        this.PreencherGrid();
    };
    R_PosDia.prototype.PreencherGrid = function () {
        var _this = this;
        var parametros;
        try {
            var empresa = [];
            for (var x = 0; x < this.lstEmpresa.GetValues().length; x++) {
                empresa.push(this.lstEmpresa.GetValues()[x]);
            }
            if (empresa.length <= 0) {
                MostrarAlerta("Informe ao menos uma empresa!");
                return false;
            }
            var parametrosExisteContaEmpresa = {
                empresas: empresa
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("RetornaContaCorrente", parametrosExisteContaEmpresa);
            if (!retorno.existemContasEmpresa) {
                MostrarAlerta("Informe ao menos uma empresa que possua conta corrente");
                return false;
            }
            debugger;
            var dataFinal = ConvertToDate(this.Filtro.Periodo_Final);
            var dataInicial = ConvertToDate(this.Filtro.Periodo_Inicial);
            var dataInicialAdd = dataInicial.addMonths(3);
            var empresas = empresa.join(",");
            parametros = {
                dataInicial: dataInicial,
                dataFinal: dataFinal,
                empresas: empresas,
                codContasCorrente: retorno.codContasCorrente.join(",")
            };
            //this.AccordionFiltros.SetExpanded(false);
            this.OnGridColumns();
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                var retorno = GetRetornoAJAX(d);
                var lista = retorno[0];
                var colunasExistente = [];
                if (_this.grid.Colunas.length == 3) {
                    colunasExistente = _this.grid.Colunas;
                }
                _this.grid.Colunas = [];
                _this.grid.TotalizacoesAgrupamentoColunas = [];
                for (var x = 0; x < colunasExistente.length; x++) {
                    if (colunasExistente[x] != undefined) {
                        _this.grid.Colunas.push(colunasExistente[x]);
                    }
                }
                for (var prop in lista) {
                    if (prop == "Posicao" || prop == "SubPosicao")
                        continue;
                    var coluna = {};
                    var totalizaColuna = {};
                    var totalizaColunaFinal = {};
                    var listaNomeColuna = prop.split("-");
                    coluna.FieldName = prop;
                    if (prop != "Total") {
                        coluna.Caption = listaNomeColuna[2] + "/" + listaNomeColuna[1] + "/" + listaNomeColuna[0];
                    }
                    else {
                        coluna.Caption = listaNomeColuna[0];
                    }
                    coluna.Width = 200;
                    coluna.CasasDecimais = 2;
                    coluna.Tipo = "numerodecimal";
                    totalizaColuna.CasasDecimais = 2;
                    totalizaColuna.FieldName = prop;
                    totalizaColuna.DisplayFormat = "Total {0}";
                    totalizaColuna.MostrarNaColuna = prop;
                    totalizaColuna.TipoDado = "numerodecimal";
                    totalizaColuna.TipoTotalizacao = "sum";
                    if (coluna.Tipo != undefined) {
                        _this.grid.Colunas.push(coluna);
                    }
                    _this.grid.TotalizacoesAgrupamentoColunas.push(totalizaColuna);
                }
                _this.grid.iniciarGrid();
                _this.grid.PreencherGrid(retorno);
                _this.grid.OrderBy("Posicao", "ASC");
                _this.grid.GroupBy("Posicao");
                _this.grid.Refresh();
                setTimeout(function () {
                    try {
                        //Remove o número do agrupamento. Este número foi utilizado para que o campo fosse ordenado corretamente
                        var resultado = $(_this.grid.pnPrincipal).find(".dx-group-row").find(".dx-group-cell");
                        if (resultado) {
                            for (var i = 0; i < resultado.length; i++) {
                                var item = resultado[i];
                                if (item && !String.IsNullOrWhiteSpace(item.innerText) && item.innerText.toLowerCase().indexOf("posição:") >= 0) {
                                    item.innerText = item.innerText.substring(12);
                                }
                            }
                        }
                        fecharEspera();
                    }
                    catch (ex) {
                        fecharEspera();
                    }
                }, 2000);
                _this.AccordionFiltros.SetExpanded(true);
            }, function (erro) {
                fecharEspera();
                _this.LimparCampos();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
            this.LimparCampos();
        }
    };
    R_PosDia.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.DataServidor();
        this.Filtro.Periodo_Final = ConvertToDate(this.DataServidor()).addDays(6);
        this.lstEmpresa.LimparSelecao();
        this.Filtro.Empresa = [];
        this.grid.PreencherGrid(null);
        this.lstEmpresa.SetValues(["" + ValoresSismoura.EmpresaPadraoUsuario]);
        this.OnGridColumns();
        this.RefreshAngular();
    };
    R_PosDia.prototype.OnGridCellPrepared = function (s, e) {
        if (e.rowType == "data" && e.column) {
            var nomeColuna = e.column.name;
            var dataField = "";
            if (e.column.dataField) {
                dataField = e.column.dataField;
            }
            if (!String.IsNullOrWhiteSpace(e.data['Posicao']) && dataField == "Posicao") {
                var auxPosicao = e.data['Posicao'];
                auxPosicao = auxPosicao.substring(2);
                e.displayValue = auxPosicao;
            }
            if (!String.IsNullOrWhiteSpace(nomeColuna) && nomeColuna == "botaoTemplate_Visualizar") {
                debugger;
                if (e.data['Posicao'] == "00-Saldos" || e.data['Posicao'] == "03-(+) CONTAS RECEBIDAS"
                    || e.data['Posicao'] == "07-(-) CONTAS PAGAS" || e.data['Posicao'] == "08-Total do dia R$"
                    || e.data['Posicao'] == "09-Total do dia %") {
                    $(e.cellElement).find("input").css("display", "none");
                }
                else {
                    var that = this;
                    $(e.cellElement).find("input").on("click", function () {
                        var parametros = [];
                        var empresa = [];
                        for (var x = 0; x < that.lstEmpresa.GetValues().length; x++) {
                            empresa.push(that.lstEmpresa.GetValues()[x]);
                        }
                        var month = "";
                        if (that.txtPeriodo.textBoxCalendarioFim.GetDate().getMonth() < 10) {
                            month = "0" + that.txtPeriodo.textBoxCalendarioFim.GetDate().getMonth();
                        }
                        else {
                            month = that.txtPeriodo.textBoxCalendarioFim.GetDate().getMonth().toString();
                        }
                        parametros.push("dataInicial=" + (that.txtPeriodo.textBoxCalendarioInicio.GetDate().getDate() + "/" + month + "/" + that.txtPeriodo.textBoxCalendarioInicio.GetDate().getFullYear()));
                        parametros.push("dataFinal=" + (that.txtPeriodo.textBoxCalendarioFim.GetDate().getDate() + "/" + month + "/" + that.txtPeriodo.textBoxCalendarioFim.GetDate().getFullYear()));
                        parametros.push("empresas=" + empresa.join(","));
                        if (e.data['Posicao'] == "01-(+) CONTAS A RECEBER VENCIDAS" || e.data['Posicao'] == "02-(+) CONTAS A RECEBER") {
                            abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.RelacaoContasReceberPeriodo), parametros);
                        }
                        else if (e.data['Posicao'] == "06-(-) CONTAS A PAGAR") {
                            abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.RelacaoContasPagarPeriodo), parametros);
                        }
                        else if (e.data['Posicao'] == "04-(+) CHEQUES") {
                            abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.RelacaoChequesPeriodo), parametros);
                        }
                        else if (e.data['Posicao'] == "05-(+) CARTÕES DE CRÉDITO") {
                            abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.RelacaoContasReceberCartao), parametros);
                        }
                    });
                }
            }
        }
        else if (e.rowType == "group" && e.column) {
            //var dataField: string = "";
            //if ((e.column as any).dataField) {
            //    dataField = (e.column as any).dataField;
            //}
            //if (!String.IsNullOrWhiteSpace(e.data['Posicao']) && dataField == "Posicao") {
            //    var auxPosicao: string = e.data['Posicao'];
            //    auxPosicao = auxPosicao.substring(2);
            //    e.displayValue = auxPosicao;
            //}
        }
    };
    R_PosDia.prototype.OnGridColumns = function () {
        var colunasExistente = [];
        colunasExistente.push(this.grid.Colunas[0]);
        colunasExistente.push(this.grid.Colunas[1]);
        colunasExistente.push(this.grid.Colunas[2]);
        this.grid.Colunas = [];
        this.grid.Colunas = colunasExistente;
        this.grid.iniciarGrid();
        this.grid.Refresh();
        this.RefreshAngular();
    };
    return R_PosDia;
}(MouraPageRelacaoAngular));
var r_PosDia = new R_PosDia();
//# sourceMappingURL=R_PosDia.js.map