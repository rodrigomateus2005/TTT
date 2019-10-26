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
var MouraPivotGridJS = /** @class */ (function (_super) {
    __extends(MouraPivotGridJS, _super);
    function MouraPivotGridJS(id) {
        var _this = _super.call(this, id) || this;
        _this._grafico = null;
        _this._dataSourceObject = null;
        _this._nomeBI = "";
        _this._alturaGrade = 320;
        _this._colunasIniciais = null;
        _this.widthPanel = 0;
        _this.criarGrid();
        _this.CellClick = new MouraGenericEventHandler();
        return _this;
    }
    Object.defineProperty(MouraPivotGridJS.prototype, "cboTipoGrafico", {
        get: function () {
            return window[this.ID + '_cboTipoGrafico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPivotGridJS.prototype, "cboLayout", {
        get: function () {
            return window[this.ID + '_cboLayout_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPivotGridJS.prototype, "pnGridPrincipal", {
        get: function () {
            return $("#" + this.ID + "_pnGridPrincipal")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPivotGridJS.prototype, "divGrid", {
        get: function () {
            return $("#" + this.ID + "_dvGrid")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPivotGridJS.prototype, "divGrafico", {
        get: function () {
            return $("#" + this.ID + "_dvChart")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPivotGridJS.prototype, "btnSalvarLayout", {
        get: function () {
            return window[this.ID + '_btnSalvarLayout_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPivotGridJS.prototype, "btnNovoLayout", {
        get: function () {
            return window[this.ID + '_btnNovoLayout_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPivotGridJS.prototype, "btnExcluirLayout", {
        get: function () {
            return window[this.ID + '_btnExcluirLayout_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPivotGridJS.prototype, "btnFullScreen", {
        get: function () {
            return window[this.ID + '_btnFullScreen_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPivotGridJS.prototype, "btnGrafico", {
        get: function () {
            return window[this.ID + '_btnGrafico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPivotGridJS.prototype, "btnFecharGrafico", {
        get: function () {
            return window[this.ID + '_btnFecharGrafico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPivotGridJS.prototype, "mdGrafico", {
        get: function () {
            return window[this.ID + '_mdGrafico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPivotGridJS.prototype, "Grid", {
        get: function () {
            try {
                return $(this.divGrid).dxPivotGrid('instance');
            }
            catch (ex) {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPivotGridJS.prototype, "Grafico", {
        get: function () {
            return this._grafico;
        },
        set: function (value) {
            this._grafico = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPivotGridJS.prototype, "DataSourceObject", {
        get: function () {
            return this._dataSourceObject;
        },
        set: function (value) {
            this._dataSourceObject = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPivotGridJS.prototype, "NomeBI", {
        get: function () {
            return this._nomeBI;
        },
        set: function (value) {
            this._nomeBI = value;
            this.LimparGrid(true);
            this.AtualizarComboLayout(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPivotGridJS.prototype, "AlturaGrade", {
        get: function () {
            return this._alturaGrade;
        },
        set: function (value) {
            this._alturaGrade = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPivotGridJS.prototype, "ColunasIniciais", {
        get: function () {
            if (!this._colunasIniciais) {
                return [];
            }
            else {
                return this._colunasIniciais;
            }
        },
        set: function (value) {
            this._colunasIniciais = value;
        },
        enumerable: true,
        configurable: true
    });
    MouraPivotGridJS.prototype.IniciarEventos = function () {
        var _this = this;
        _super.prototype.IniciarEventos.call(this);
        if (this.cboTipoGrafico) {
            adicionarEventoMoura(this.cboTipoGrafico.SelectedItemChanged, this.OnAlterouComboGrafico, this);
            if (this.cboTipoGrafico.Combo.isInitialized) {
                this.cboTipoGrafico.SetValue("bar");
            }
        }
        if (this.cboLayout) {
            adicionarEventoMoura(this.cboLayout.SelectedItemChanged, this.OnAlterouComboLayout, this);
        }
        if (this.btnSalvarLayout) {
            adicionarEventoMoura(this.btnSalvarLayout.Click, this.OnClickBotaoSalvarLayout, this);
        }
        if (this.btnNovoLayout) {
            adicionarEventoMoura(this.btnNovoLayout.Click, this.OnClickBotaoNovoLayout, this);
        }
        if (this.btnExcluirLayout) {
            adicionarEventoMoura(this.btnExcluirLayout.Click, this.OnClickBotaoExcluirLayout, this);
        }
        if (this.btnFullScreen) {
            adicionarEventoMoura(this.btnFullScreen.Click, this.OnClickBotaoFull, this);
        }
        if (this.btnGrafico) {
            adicionarEventoMoura(this.btnGrafico.Click, this.OnClickBotaoGrafico, this);
        }
        if (this.btnFecharGrafico) {
            adicionarEventoMoura(this.btnFecharGrafico.Click, this.OnClickBotaoFecharGrafico, this);
        }
        if (this.mdGrafico) {
            adicionarEventoMoura(this.mdGrafico.Fechou, this.OnFechouModal, this);
        }
        setTimeout(function () {
            _this.AtualizarComboLayout(0);
        }, 200);
    };
    MouraPivotGridJS.prototype.LimparGrid = function (removerColunas) {
        if (removerColunas) {
            this.CriarColunasGrade([]);
        }
        this.PreencherGrade([]);
    };
    MouraPivotGridJS.prototype.OnClickBotaoFull = function (s, e) {
        e.processOnServer = false;
        this.GrdFullScreen();
    };
    MouraPivotGridJS.prototype.OnClickBotaoGrafico = function (s, e) {
        e.processOnServer = false;
        if (this.cboTipoGrafico.Combo.isInitialized) {
            this.cboTipoGrafico.SetValue("bar");
        }
        this.mdGrafico.Show();
        this.MostrarGrafico();
    };
    MouraPivotGridJS.prototype.OnClickBotaoFecharGrafico = function (s, e) {
        e.processOnServer = false;
        this.mdGrafico.Hide();
    };
    MouraPivotGridJS.prototype.OnFechouModal = function (s, e) {
        this.EsconderGrafico();
    };
    MouraPivotGridJS.prototype.GrdFullScreen = function () {
        var pnGrade;
        var cssClass = 'DivGridJSfullScreenPivot';
        var tam = this.AlturaGrade;
        if (!tam) {
            tam = 320;
        }
        pnGrade = $(this.pnGridPrincipal);
        //Altera a classe para deixa full screen ou remover a classe
        pnGrade.toggleClass(cssClass);
        var height;
        var conta;
        if (this.IsGradeFullScreen(pnGrade)) {
            //Se estiver com a classe FullScreen, aumenta o tamanho da grade
            conta = Math.max(0, document.documentElement.clientHeight);
            conta = conta - 100;
            height = conta;
            this.btnFullScreen.Text = "Remover Full Screen";
            $(this.divGrid).css("width", "");
        }
        else {
            //Volta a grade ao tamanho original
            height = tam;
            this.btnFullScreen.Text = "Full Screen";
            $(this.divGrid).css("width", this.widthPanel + 'px');
        }
        this.Grid.option('height', height);
        //Altera o tamanho da grade
        //this.Height = height;
        //this.Refresh();
    };
    MouraPivotGridJS.prototype.IsGradeFullScreen = function (pnGrade) {
        var cssClass = 'DivGridJSfullScreenPivot';
        if (pnGrade.hasClass(cssClass)) {
            return true;
        }
        else {
            return false;
        }
    };
    MouraPivotGridJS.prototype.AtualizarComboLayout = function (codLayoutSelecionar) {
        try {
            if (!this.cboLayout.Combo.isInitialized) {
                return;
            }
            var retornoSTR;
            var param = {
                nomeBI: this.NomeBI
            };
            retornoSTR = MouraControl.ExecutarHttpRequestPost("MouraPivotGridJSCombo", param);
            this.cboLayout.ClearItems();
            this.cboLayout.AddItem("<< Novo Layout >>", 0, "");
            if (!String.IsNullOrWhiteSpace(retornoSTR)) {
                var layouts = JSON.parse(retornoSTR);
                if (layouts) {
                    for (var i = 0; i < layouts.length; i++) {
                        var item = layouts[i];
                        this.cboLayout.AddItem(item.Descricao, item.Codigo, "");
                    }
                }
            }
            this.cboLayout.SetValue(codLayoutSelecionar);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraPivotGridJS.prototype.criarGrid = function () {
        var _this = this;
        if (this.Grid)
            return;
        var width = $(this.divGrid).width() - 10;
        this.widthPanel = width;
        $(this.divGrid).css("width", width + 'px');
        var that = this;
        $(this.divGrid).dxPivotGrid({
            allowSortingBySummary: true,
            allowSorting: true,
            allowFiltering: true,
            allowExpandAll: true,
            height: that.AlturaGrade,
            rowHeaderLayout: "tree",
            showBorders: true,
            headerFilter: {
                allowSearch: true,
                texts: {
                    cancel: "Cancelar",
                    emptyValue: "",
                    ok: "OK"
                }
            },
            scrolling: {
                mode: "virtual",
                useNative: true
            },
            fieldChooser: {
                enabled: true,
                layout: 1,
                texts: {
                    allFields: "Todos os campos",
                    columnFields: "Campos da colunas",
                    dataFields: "Campos de dados",
                    filterFields: "Campos de filtro",
                    rowFields: "Campos das linhas"
                },
                title: "Seletor de campos"
            },
            onContextMenuPreparing: function (e) {
                var dataSource = e.component.getDataSource();
                //Não tem como ocultar colunas de grupo (Data, por exemplo)
                if (e.field && String.IsNullOrWhiteSpace(e.field.groupInterval)) {
                    e.items.push({
                        beginGroup: true,
                        text: "Ocultar Campo",
                        onItemClick: function (args) {
                            //dataSource.field(4, {
                            //    summaryDisplayMode: summaryDisplayModeValue,
                            //    format: format,
                            //    caption: caption
                            //});
                            e.field.area = undefined;
                            dataSource.load();
                        }
                    });
                }
            },
            onCellClick: function (e) { _this.OnCellClick(e); },
            loadPanel: {
                text: "Carregando...",
            },
            fieldPanel: {
                showColumnFields: true,
                showDataFields: true,
                showFilterFields: true,
                showRowFields: true,
                allowFieldDragging: true,
                visible: true,
                texts: {
                    columnFieldArea: "Arraste aqui campos para as colunas",
                    dataFieldArea: "Arraste aqui campos de dados",
                    filterFieldArea: "Arraste aqui campos de filtro",
                    rowFieldArea: "Arraste aqui campos para as linhas"
                }
            },
            texts: {
                collapseAll: "Recolher todos",
                dataNotAvailable: "N/A",
                expandAll: "Expandir todos",
                exportToExcel: "Exportar para Excel",
                grandTotal: "Total",
                noData: "Sem dados",
                removeAllSorting: "Remover todas ordenações",
                showFieldChooser: "Exibir seletor de campos",
                sortColumnBySummary: "Ordenar {0} por esta coluna",
                sortRowBySummary: "Ordenar {0} por esta linha",
                total: "{0} Total"
            },
            "export": {
                enabled: true,
                fileName: "Excel"
            },
        });
        this.CriarDataSourceObject([], {});
    };
    MouraPivotGridJS.prototype.OnCellClick = function (e) {
        this.CellClick.FireEvent(this, e);
    };
    MouraPivotGridJS.prototype.EsconderGrafico = function () {
        try {
            $(this.divGrafico).empty();
            $(this.divGrafico).removeData();
            this.Grafico._dispose();
        }
        catch (ex) {
        }
    };
    MouraPivotGridJS.prototype.MostrarGrafico = function () {
        this.Grafico = $(this.divGrafico).dxChart({
            commonSeriesSettings: {
                type: "bar"
            },
            tooltip: {
                enabled: true,
                zIndex: 100000,
                customizeTooltip: function (args) {
                    return {
                        html: args.seriesName + " - " + args.argumentText + ' <br />' + CNum(args.originalValue).Format(2)
                    };
                }
            },
            size: {
                height: 320
            },
            adaptiveLayout: {
                width: 450
            }
        }).dxChart("instance");
        this.Grid.bindChart(this.Grafico, {
            dataFieldsDisplayMode: "splitPanes",
            alternateDataFields: false
        });
    };
    MouraPivotGridJS.prototype.CriarDataSourceObject = function (fields, store) {
        this.DataSourceObject = new DevExpress.data.PivotGridDataSource({
            fields: fields,
            store: store
        });
        this.Grid.option('dataSource', this.DataSourceObject);
    };
    MouraPivotGridJS.prototype.PreencherGrade = function (data) {
        if (!data)
            data = [];
        this.setDataSourceGrid(data);
    };
    MouraPivotGridJS.prototype.setDataSourceGrid = function (data) {
        var ds = {};
        var value;
        if (data) {
            for (var x = 0; x <= data.length - 1; x++) {
                for (var propriedade in data[x]) {
                    var valor = data[x][propriedade];
                    if (valor != null && valor != undefined) {
                        if (typeof valor == "string") {
                            if (valor.indexOf("/Date(") >= 0) {
                                data[x][propriedade] = eval("new " + replaceAll(valor, "/", ""));
                            }
                        }
                    }
                }
            }
        }
        value = {
            type: "array",
            data: data
        };
        this.CriarDataSourceObject(this.DataSourceObject.fields(), value);
        //ds.store = value;                
        //this.Grid.option('dataSource', ds);
    };
    MouraPivotGridJS.prototype.IniciarGrade = function (colunas) {
        this.ColunasIniciais = colunas;
        this.CriarColunasGrade(colunas);
    };
    MouraPivotGridJS.prototype.CriarColunasGrade = function (colunas) {
        //var ds: any = {};    
        //ds.fields = data;
        //this.Grid.option('dataSource', ds);
        this.DataSourceObject.fields(colunas);
        this.DataSourceObject.reload();
    };
    MouraPivotGridJS.prototype.OnAlterouComboGrafico = function (s, e) {
        var value = {
            type: this.cboTipoGrafico.GetValue()
        };
        this.Grafico.option("commonSeriesSettings", value);
    };
    MouraPivotGridJS.prototype.OnAlterouComboLayout = function (s, e) {
        try {
            if (!this.cboLayout.Combo.isInitialized) {
                return;
            }
            var codLayout = CNum(this.cboLayout.GetValue());
            if (!codLayout) {
                return;
            }
            var retornoSTR;
            var param = {
                codLayout: codLayout
            };
            retornoSTR = MouraControl.ExecutarHttpRequestPost("MouraPivotGridJSGetLayout", param);
            if (!String.IsNullOrWhiteSpace(retornoSTR)) {
                var layout = JSON.parse(retornoSTR);
                if (layout && !String.IsNullOrWhiteSpace(layout.Campos)) {
                    var fields = JSON.parse(layout.Campos);
                    this.DataSourceObject.state(fields);
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraPivotGridJS.prototype.FuncaoFormataNumeroGrid = function (casasDecimais) {
        return function (value) {
            if (value == null || value == undefined || value.value == null || value.value == undefined) {
                return "";
            }
            else {
                if (typeof value.value == "number") {
                    return value.value.Format(casasDecimais);
                }
                else {
                    return value.value;
                }
            }
        };
    };
    MouraPivotGridJS.prototype.OnClickBotaoExcluirLayout = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        if (String.IsNullOrWhiteSpace(this.NomeBI)) {
            MostrarAlerta("Nenhum BI foi informado");
            return;
        }
        var codLayout = CNum(this.cboLayout.GetValue());
        if (!codLayout) {
            MostrarAlerta("Selecione o layout que deseja excluir");
            return;
        }
        MsgBoxJS("Deseja realmente excluir o layout selecionado?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
            if (result.Resultado == MsgBoxResult.Yes) {
                _this.ExcluirLayout(codLayout);
            }
        }, "", "");
    };
    MouraPivotGridJS.prototype.ExcluirLayout = function (codLayout) {
        var _this = this;
        try {
            var retornoSTR;
            var param = {
                codLayout: codLayout,
                codUsuario: ValoresSismoura.UsuarioLogado,
                nomeTela: ValoresSismoura.NomeTela
            };
            abrirEspera("");
            MouraControl.ExecutarHttpRequestAsyncPost("MouraPivotGridJSExcluirLayout", param, function (d) {
                fecharEspera();
                _this.AtualizarComboLayout(0);
                MostrarMensagem("Layout excluído com sucesso");
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
    MouraPivotGridJS.prototype.OnClickBotaoNovoLayout = function (s, e) {
        e.processOnServer = false;
        if (String.IsNullOrWhiteSpace(this.NomeBI)) {
            MostrarAlerta("Nenhum BI foi informado");
            return;
        }
        this.InputBoxLayout(0, "");
    };
    MouraPivotGridJS.prototype.OnClickBotaoSalvarLayout = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        if (String.IsNullOrWhiteSpace(this.NomeBI)) {
            MostrarAlerta("Nenhum BI foi informado");
            return;
        }
        var codLayout = CNum(this.cboLayout.GetValue());
        if (codLayout) {
            MsgBoxJS("O layout: '" + this.cboLayout.GetText() + "' será substituído pelo atual. Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.Yes) {
                    _this.InputBoxLayout(codLayout, _this.cboLayout.GetText());
                }
            }, "", "");
        }
        else {
            this.InputBoxLayout(0, "");
        }
    };
    MouraPivotGridJS.prototype.InputBoxLayout = function (codLayout, descricao) {
        var _this = this;
        InputBoxJS("Salvar layout", "Informe uma descrição para este layout", "", function (result) {
            if (!String.IsNullOrWhiteSpace(result.Valor)) {
                _this.SalvarLayout(codLayout, result.Valor);
            }
        }, this, descricao);
    };
    MouraPivotGridJS.prototype.SalvarLayout = function (codLayout, descricao) {
        var _this = this;
        try {
            var retornoSTR;
            var param = {
                codLayout: codLayout,
                descricao: descricao,
                nomeBI: this.NomeBI,
                campos: JSON.stringify(this.DataSourceObject.state()),
                codUsuario: ValoresSismoura.UsuarioLogado,
                nomeTela: ValoresSismoura.NomeTela
            };
            abrirEspera("");
            MouraControl.ExecutarHttpRequestAsyncPost("MouraPivotGridJSSalvar", param, function (d) {
                fecharEspera();
                if (!String.IsNullOrWhiteSpace(d)) {
                    var retorno = JSON.parse(d);
                    if (retorno && retorno.Codigo) {
                        _this.AtualizarComboLayout(retorno.Codigo);
                    }
                    MostrarMensagem("Layout salvo com sucesso");
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
    };
    return MouraPivotGridJS;
}(MouraControl));
//# sourceMappingURL=MouraPivotGridJS.js.map