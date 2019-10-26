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
var MouraGridViewJS = /** @class */ (function (_super) {
    __extends(MouraGridViewJS, _super);
    function MouraGridViewJS(id) {
        var _this = _super.call(this, id) || this;
        _this.ID_COLUNA_FINAL = "colGradeFinal";
        _this._permitirMoverColunas = true;
        _this._permitirAgruparColunas = true;
        _this._salvarStateGrid = false;
        _this._dataFile = null;
        _this._cancelarExportacao = false;
        if (!_this.ExcluindoLinhaGrade)
            _this.ExcluindoLinhaGrade = new MouraGenericEventHandler();
        if (!_this.ExcluiuLinhaGrade)
            _this.ExcluiuLinhaGrade = new MouraGenericEventHandler();
        if (!_this.ClickBotaoLinha)
            _this.ClickBotaoLinha = new MouraGenericEventHandler();
        if (!_this.SelecionouLinha)
            _this.SelecionouLinha = new MouraGenericEventHandler();
        if (!_this.ClickBotaoImprimir)
            _this.ClickBotaoImprimir = new MouraGenericEventHandler();
        if (!_this.EditouItemGrade)
            _this.EditouItemGrade = new MouraGenericEventHandler();
        if (!_this.KeyDown)
            _this.KeyDown = new MouraGenericEventHandler();
        if (!_this.RowClick)
            _this.RowClick = new MouraGenericEventHandler();
        if (!_this.RowDblClick)
            _this.RowDblClick = new MouraGenericEventHandler();
        if (!_this.CellClick)
            _this.CellClick = new MouraGenericEventHandler();
        if (!_this.CellPrepared)
            _this.CellPrepared = new MouraGenericEventHandler();
        if (!_this.RowValidating)
            _this.RowValidating = new MouraGenericEventHandler();
        if (!_this.SalvandoArquivo)
            _this.SalvandoArquivo = new MouraGenericEventHandler();
        if (!_this.CalculateCustomSummary)
            _this.CalculateCustomSummary = new MouraGenericEventHandler();
        if (!_this.CellComboBoxOpened)
            _this.CellComboBoxOpened = new MouraGenericEventHandler();
        return _this;
    }
    Object.defineProperty(MouraGridViewJS.prototype, "ExcluindoLinhaGrade", {
        get: function () {
            return window[this.ID + "_ExcluindoLinhaGrade"];
        },
        set: function (value) {
            window[this.ID + "_ExcluindoLinhaGrade"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "ExcluiuLinhaGrade", {
        get: function () {
            return window[this.ID + "_ExcluiuLinhaGrade"];
        },
        set: function (value) {
            window[this.ID + "_ExcluiuLinhaGrade"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "ClickBotaoLinha", {
        get: function () {
            return window[this.ID + "_ClickBotaoLinha"];
        },
        set: function (value) {
            window[this.ID + "_ClickBotaoLinha"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "SelecionouLinha", {
        get: function () {
            return window[this.ID + "_SelecionouLinha"];
        },
        set: function (value) {
            window[this.ID + "_SelecionouLinha"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "ClickBotaoImprimir", {
        get: function () {
            return window[this.ID + "_ClickBotaoImprimir"];
        },
        set: function (value) {
            window[this.ID + "_ClickBotaoImprimir"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "EditouItemGrade", {
        get: function () {
            return window[this.ID + "_EditouItemGrade"];
        },
        set: function (value) {
            window[this.ID + "_EditouItemGrade"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "KeyDown", {
        get: function () {
            return window[this.ID + "_KeyDown"];
        },
        set: function (value) {
            window[this.ID + "_KeyDown"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "RowClick", {
        get: function () {
            return window[this.ID + "_RowClick"];
        },
        set: function (value) {
            window[this.ID + "_RowClick"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "RowDblClick", {
        get: function () {
            return window[this.ID + "_RowDblClick"];
        },
        set: function (value) {
            window[this.ID + "_RowDblClick"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "CellClick", {
        get: function () {
            return window[this.ID + "_CellClick"];
        },
        set: function (value) {
            window[this.ID + "_CellClick"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "CellPrepared", {
        get: function () {
            return window[this.ID + "_CellPrepared"];
        },
        set: function (value) {
            window[this.ID + "_CellPrepared"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "RowValidating", {
        get: function () {
            return window[this.ID + "_RowValidating"];
        },
        set: function (value) {
            window[this.ID + "_RowValidating"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "SalvandoArquivo", {
        get: function () {
            return window[this.ID + '_SalvandoArquivo'];
        },
        set: function (value) {
            window[this.ID + '_SalvandoArquivo'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "CalculateCustomSummary", {
        get: function () {
            return window[this.ID + "_CalculateCustomSummary"];
        },
        set: function (value) {
            window[this.ID + "_CalculateCustomSummary"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "CellComboBoxOpened", {
        get: function () {
            return window[this.ID + "_CalculateCustomSummary"];
        },
        set: function (value) {
            window[this.ID + "_CalculateCustomSummary"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "tbMain", {
        get: function () {
            return $("#" + this.ID + "_tbMain")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "tbMainJQuery", {
        get: function () {
            return $("#" + this.ID + "_tbMain");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "pnPrincipal", {
        get: function () {
            return $("#" + this.ID + "_pnPrincipal")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "hdnSource", {
        get: function () {
            return $("#" + this.ID + "_hdnSource")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "hdnTam", {
        get: function () {
            return $("#" + this.ID + "_hdnTam")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "btnSalvarLayout", {
        get: function () {
            return window[this.ID + '_btnSalvarLayout'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "btnImprimirExcel", {
        get: function () {
            return window[this.ID + '_btnImprimirExcel'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "btnImprimirGrade", {
        get: function () {
            return window[this.ID + '_btnImprimirGrade'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "btnImprimirPDF", {
        get: function () {
            return window[this.ID + '_btnImprimirPDF'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "btnFullScreen", {
        get: function () {
            return window[this.ID + '_btnFullScreen'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "hdnDadosLinhasSelecionadas", {
        get: function () {
            return $("#" + this.ID + "_hdnDadosLinhasSelecionadas")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "PermitirMoverColunas", {
        get: function () {
            return this._permitirMoverColunas;
        },
        set: function (value) {
            this._permitirMoverColunas = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "PermitirAgruparColunas", {
        get: function () {
            return this._permitirAgruparColunas;
        },
        set: function (value) {
            this._permitirAgruparColunas = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "Colunas", {
        get: function () {
            return this._colunas;
        },
        set: function (value) {
            this._colunas = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "Visible", {
        get: function () {
            return this._visible;
        },
        set: function (value) {
            if ($("#" + this.ID)) {
                if (value) {
                    $("#" + this.ID).css('display', '');
                }
                else {
                    $("#" + this.ID).css('display', 'none');
                }
            }
            this._visible = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "SalvarStateGrid", {
        get: function () {
            return this._salvarStateGrid;
        },
        set: function (value) {
            this._salvarStateGrid = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "Enabled", {
        get: function () {
            return this._enabled;
        },
        set: function (value) {
            if ($("#" + this.ID)) {
                if (value) {
                    $("#" + this.ID).removeAttr('disabled');
                }
                else {
                    $("#" + this.ID).attr('disabled', 'disabled');
                }
            }
            this._enabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "TotalizacoesColunas", {
        get: function () {
            return this._totalizacoesColunas;
        },
        set: function (value) {
            this._totalizacoesColunas = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "TotalizacoesAgrupamentoColunas", {
        get: function () {
            return this._totalizacoesAgrupamentoColunas;
        },
        set: function (value) {
            this._totalizacoesAgrupamentoColunas = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "CampoID", {
        get: function () {
            return this._campoID;
        },
        set: function (value) {
            this._campoID = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "ExibirPainelPesquisa", {
        get: function () {
            return this._exibirPainelPesquisa;
        },
        set: function (value) {
            this._exibirPainelPesquisa = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "ExibirPaginacao", {
        get: function () {
            return this._exibirPaginacao;
        },
        set: function (value) {
            this._exibirPaginacao = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "ExibirBotaoSelecionarTodos", {
        get: function () {
            return this._exibirBotaoSelecionarTodos;
        },
        set: function (value) {
            this._exibirBotaoSelecionarTodos = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "PermitirEditarGrid", {
        get: function () {
            return this._permitirEditarGrid;
        },
        set: function (value) {
            this._permitirEditarGrid = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "ExibirAgrupamento", {
        get: function () {
            return this._exibirAgrupamento;
        },
        set: function (value) {
            this._exibirAgrupamento = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "ExibirBotoesRodape", {
        get: function () {
            return this._exibirBotoesRodape;
        },
        set: function (value) {
            this._exibirBotoesRodape = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "ExibirLinhaFiltro", {
        get: function () {
            return this._exibirLinhaFiltro;
        },
        set: function (value) {
            this._exibirLinhaFiltro = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "PermitirOrdenacao", {
        get: function () {
            return this._permitirOrdenacao;
        },
        set: function (value) {
            this._permitirOrdenacao = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "AlturaGrade", {
        get: function () {
            return this._alturaGrade;
        },
        set: function (value) {
            this._alturaGrade = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "PageSize", {
        get: function () {
            return this._PageSize;
        },
        set: function (value) {
            this._PageSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "IsGradeProcura", {
        get: function () {
            return this._isGradeProcura;
        },
        set: function (value) {
            this._isGradeProcura = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "IDModalProcura", {
        get: function () {
            return this._idModalProcura;
        },
        set: function (value) {
            this._idModalProcura = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "CampoOrder", {
        get: function () {
            return this._campoOrder;
        },
        set: function (value) {
            this._campoOrder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "TipoOrder", {
        get: function () {
            return this._tipoOrder;
        },
        set: function (value) {
            this._tipoOrder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "Height", {
        get: function () {
            return this.Grid.option('height');
        },
        set: function (value) {
            this.Grid.option('height', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "Grid", {
        get: function () {
            try {
                return $(this.tbMain).dxDataGrid('instance');
            }
            catch (ex) {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "DataSource", {
        get: function () {
            var retorno = [];
            try {
                if (this.Grid) {
                    retorno = this.Grid.option('dataSource').store.data;
                }
                if (!retorno) {
                    retorno = [];
                }
            }
            catch (ex) {
                return [];
            }
            return retorno;
        },
        enumerable: true,
        configurable: true
    });
    MouraGridViewJS.prototype.Focus = function (linha, coluna) {
        if (!this.Grid) {
            return;
        }
        var celula = null;
        try {
            celula = this.Grid.getCellElement(linha, coluna);
        }
        catch (ex) {
            celula = null;
        }
        if (celula) {
            this.Grid.focus(celula);
        }
    };
    Object.defineProperty(MouraGridViewJS.prototype, "GetSelectedRowsData", {
        get: function () {
            if (!this.Grid) {
                return [];
            }
            var retorno = this.Grid.getSelectedRowsData();
            if (!retorno) {
                retorno = [];
            }
            return retorno;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridViewJS.prototype, "GetUnselectedRowsData", {
        get: function () {
            var Total;
            var Selecionados;
            var NaoSelecionados;
            var posCampoID;
            if (!this.Grid) {
                return [];
            }
            Total = this.DataSource;
            Selecionados = this.GetSelectedRowsData;
            NaoSelecionados = Total.filter(function (el) { return Selecionados.indexOf(el) < 0; });
            if (!NaoSelecionados) {
                NaoSelecionados = [];
            }
            return NaoSelecionados;
        },
        enumerable: true,
        configurable: true
    });
    MouraGridViewJS.prototype.SelectRows = function (keys, preserve) {
        if (this.Grid) {
            this.Grid.selectRows(keys, preserve);
        }
    };
    MouraGridViewJS.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.pnPrincipal) {
            try {
                $(this.pnPrincipal).removeResize($.proxy(this.OnResizeGrid, this));
            }
            catch (ex) {
            }
            $(this.pnPrincipal).resize($.proxy(this.OnResizeGrid, this));
        }
        if (this.btnImprimirExcel) {
            adicionarEventoDevExpress(this.btnImprimirExcel.Click, this.OnClickExportarExcel, this);
        }
        if (this.btnImprimirGrade) {
            adicionarEventoDevExpress(this.btnImprimirGrade.Click, this.OnClickImprimirGrade, this);
        }
        if (this.btnImprimirPDF) {
            adicionarEventoDevExpress(this.btnImprimirPDF.Click, this.OnClickExportarPDF, this);
        }
        if (this.btnSalvarLayout) {
            adicionarEventoDevExpress(this.btnSalvarLayout.Click, this.OnClickSalvarLayout, this);
        }
        if (this.btnFullScreen) {
            adicionarEventoDevExpress(this.btnFullScreen.Click, this.OnClickFullScreen, this);
        }
        if (!this.Grid) {
            this.iniciarGrid();
        }
        this.IniciarContextMenu();
    };
    MouraGridViewJS.prototype.IniciarContextMenu = function () {
        // http://ignitersworld.com/lab/contextMenu.html
        var _this = this;
        var menu = [{
                name: 'Exportação Excel Resumida (mais rápida)'.GetString(),
                fun: function () {
                    _this.Grid.exportToExcel(false);
                }
            }, {
                name: 'Exportação Excel Completa'.GetString(),
                fun: function () {
                    _this.ExportToExcelCompleto();
                }
            }];
        //Calling context menu
        if (this.btnImprimirExcel) {
            $('#' + this.btnImprimirExcel.name).contextMenu(menu);
            $('#' + this.btnImprimirExcel.name).empty();
        }
    };
    MouraGridViewJS.prototype.iniciarGrid = function () {
        var _this = this;
        if (!this.Colunas) {
            this.Colunas = [];
        }
        var cols = [];
        var coluna;
        var aux;
        var isSelecionarLinha = false;
        var i;
        for (i = 0; i <= this.Colunas.length - 1; i++) {
            coluna = {};
            aux = this.Colunas[i];
            var tipo;
            if (aux.Tipo != null && aux.Tipo != undefined) {
                tipo = aux.Tipo.toLowerCase();
            }
            else {
                tipo = "";
            }
            var tipoBotao = aux.TipoBotao;
            if (tipoBotao == null || tipoBotao == undefined) {
                tipoBotao = "";
            }
            tipoBotao = tipoBotao.toLowerCase();
            coluna.name = "";
            coluna.allowSearch = this.ExibirLinhaFiltro;
            coluna.allowEditing = false;
            coluna.groupIndex = aux.GroupIndex;
            coluna.visible = aux.Visible;
            if (aux.IsColunaSelecao) {
                coluna.allowSearch = false;
                coluna.allowReordering = false;
                coluna.allowGrouping = false;
                coluna.name = aux.Name;
                coluna.allowExporting = false;
                isSelecionarLinha = true;
            }
            else if (aux.IsColunaAgrupamento) {
                coluna.allowSearch = false;
                coluna.allowGrouping = false;
                coluna.alignment = "center";
                coluna.name = aux.Name;
            }
            else if (tipo == "botao") {
                coluna.allowEditing = false;
                coluna.allowFiltering = false;
                coluna.allowHeaderFiltering = false;
                coluna.allowSorting = true;
                coluna.allowSearch = false;
                coluna.allowGrouping = false;
                coluna.dataField = aux.FieldName;
                coluna.name = aux.Name;
                coluna.alignment = "center";
                coluna.allowExporting = false;
                if (tipoBotao == "excluir") {
                    coluna.cellTemplate = $.proxy(this.CriarTemplateBotaoExcluir(), this);
                }
                else if (tipoBotao == "selecionar") {
                    coluna.cellTemplate = $.proxy(this.CriarTemplateBotaoSelecionar(), this);
                }
                else if (tipoBotao == "imprimir") {
                    coluna.cellTemplate = $.proxy(this.CriarTemplateBotaoImprimir(), this);
                }
                else {
                    coluna.cellTemplate = $.proxy(this.CriarTemplateBotaoCustom(aux.ButtonText, aux.CommandName), this);
                }
            }
            else {
                coluna.allowGrouping = this.PermitirAgruparColunas;
                coluna.dataField = aux.FieldName;
                coluna.allowEditing = aux.IsEditavel;
            }
            if (tipo == "texto") {
                if (aux.MaxLength > 0) {
                    coluna.editorOptions = {};
                    coluna.editorOptions["maxLength"] = aux.MaxLength;
                }
                if (aux.IsEditavel) {
                    if (!coluna.editorOptions) {
                        coluna.editorOptions = {};
                    }
                    coluna.editorOptions["onFocusIn"] = function (e) { $(e.element).find("[type=text]").select(); };
                }
            }
            if (tipo == "spin" || tipo == 'numerointeiro' || tipo == 'numerodecimal') {
                coluna.editorOptions = {};
                if (aux.MaxValue > 0) {
                    coluna.editorOptions["max"] = aux.MaxValue;
                    coluna.editorOptions["min"] = aux.MinValue;
                }
                coluna.editorOptions["showClearButton"] = !aux.IsObrigatorio;
                coluna.editorOptions["invalidValueMessage"] = "O valor informado é inválido".GetString();
                coluna.editorOptions["onFocusIn"] = function (e) { $(e.element).find("[type=text]").select(); };
            }
            if (tipo == "combobox") {
                coluna.lookup = {};
                coluna.lookup.allowClearing = !aux.IsObrigatorio;
                if (String.IsNullOrWhiteSpace(aux.DataSourceCombo)) {
                    coluna.lookup.dataSource = null;
                }
                else {
                    coluna.lookup.dataSource = JSON.parse(DecodeTextoJSON(aux.DataSourceCombo));
                }
                coluna.lookup.displayExpr = aux.TextFieldName;
                coluna.lookup.valueExpr = aux.ValueFieldName;
                coluna.editorOptions = {};
                //Corrige o tamanho da lista que da combo que é exibida. Anteriormente a lista ficava muito grande
                coluna.editorOptions['onOpened'] = function (e) {
                    e.component._popup.option('maxHeight', 100);
                    var ele = e.element;
                    var evt = new MouraGridViewJSCellComboBoxOpened();
                    evt.key = _this.Grid.getKeyByRowIndex(ele.parentsUntil("tr").index());
                    ;
                    var col = _this.Grid.columnOption(aux.FieldName);
                    var row = _this.Grid.getVisibleRows().find(function (q) { return q.key == evt.key; });
                    evt.component = e.component;
                    evt.element = e.element;
                    evt.cellElement = ele.parent("td");
                    evt.column = col;
                    evt.columnIndex = col.index;
                    evt.row = row;
                    evt.rowIndex = row.rowIndex;
                    evt.dataIndex = row.dataIndex;
                    evt.isSelected = row.isSelected;
                    _this.Grid.getDataByKeys([evt.key]).then(function (data) {
                        evt.data = data;
                        _this.CellComboBoxOpened.FireEvent(_this, evt);
                    });
                };
                coluna.editorOptions["showClearButton"] = false;
            }
            if (coluna.allowEditing && aux.IsObrigatorio) {
                if (!coluna.validationRules) {
                    coluna.validationRules = [];
                }
                var req;
                req = {};
                req.type = 'required';
                req.message = 'Campo obrigatório'.GetString();
                coluna.validationRules.push(req);
            }
            if (String.IsNullOrWhiteSpace(aux.Caption))
                aux.Caption = "";
            coluna.caption = aux.Caption.GetString();
            if (aux.Width > 0) {
                coluna.width = aux.Width;
            }
            if (aux.CasasDecimais != null && aux.CasasDecimais != undefined && tipo != "") {
                if (tipo == 'numerointeiro' || tipo == 'numerodecimal' || tipo == 'spin') {
                    // coluna.customizeText = $.proxy(this.formataValor(aux.CasasDecimais, ""), this);
                    //A forma de formatar o número foi alterada, pois na forma acima o DevExpress exporta os valores para o Excel como string
                    //e o usuário não consegue fazer contas com as célular                                     
                    if (aux.CasasDecimais && aux.CasasDecimais > 0) {
                        //Somente formata se tiver alguma casa decimal. Se não tiver e o sistema formata com 0, é incluído um separador de milhar
                        //que não é necessário em um número inteiro
                        coluna.format = {
                            type: "fixedPoint",
                            precision: aux.CasasDecimais,
                        };
                    }
                    coluna.alignment = "right";
                }
            }
            else if (tipo == "data" || tipo == "datahora" || tipo == "datamesano" || tipo == "hora") {
                coluna.dataType = 'date';
                coluna.allowHeaderFiltering = false;
                coluna.format = aux.FormatString;
                //Utilizado para que na exportação do excel seja exibida exatamente o que está na celula
                coluna.customizeText = function (cellInfo) {
                    if (cellInfo != null && cellInfo != undefined) {
                        return cellInfo.valueText;
                    }
                    else {
                        return "";
                    }
                };
                if (tipo == "hora") {
                    //opts.editorElement.dxDateBox("instance").option("type", "time");   
                    coluna.editorOptions = {};
                    coluna.editorOptions["type"] = "time";
                    coluna.editorOptions["interval"] = 15;
                    //
                }
            }
            coluna.falseText = "Desmarcados".GetString();
            coluna.trueText = "Marcados".GetString();
            if (!aux.IsColunaSelecao) {
                cols.push(coluna);
            }
        }
        if (cols.length > 0) {
            //Adiciona uma coluna pequena no final para que o usuário possa redimensionar a última coluna
            coluna = {};
            coluna.name = this.ID_COLUNA_FINAL;
            coluna.allowSearch = false;
            coluna.allowReordering = false;
            coluna.allowGrouping = false;
            coluna.allowEditing = false;
            coluna.allowHeaderFiltering = false;
            coluna.allowSorting = true;
            coluna.allowResizing = false;
            coluna.allowHiding = false;
            coluna.allowExporting = false;
            coluna.groupIndex = null;
            coluna.visible = true;
            coluna.dataField = "";
            coluna.caption = "";
            coluna.width = 100;
            cols.push(coluna);
        }
        var modoSorting;
        if (this.PermitirOrdenacao) {
            modoSorting = "single";
        }
        else {
            modoSorting = "none";
        }
        var opt;
        var altura;
        if (this.AlturaGrade && this.AlturaGrade > 0) {
            altura = this.AlturaGrade + 'px';
        }
        else {
            altura = '300px';
        }
        opt = {
            allowColumnReordering: this.PermitirMoverColunas,
            allowColumnResizing: true,
            columnAutoWidth: false,
            //columnFixing: {
            //    enabled: true,
            //},
            "export": {
                enabled: false,
                excelFilterEnabled: true,
                fileName: "Arquivo",
                texts: {
                    exportTo: "Exportar para".GetString(),
                    exportAll: "Exportar para o Excel".GetString(),
                    exportSelectedRows: "Exportar Linhas Selecionadas".GetString()
                }
            },
            filterRow: {
                visible: this.ExibirLinhaFiltro,
                applyFilterText: "Aplicar Filtro".GetString(),
                showAllText: "Mostrar Todos".GetString(),
                resetOperationText: "Reiniciar".GetString(),
                operationDescriptions: {
                    between: "Entre".GetString(),
                    contains: "Contém".GetString(),
                    endsWith: "Termina com".GetString(),
                    equal: "Igual".GetString(),
                    greaterThan: "Maior que".GetString(),
                    greaterThanOrEqual: "Maior ou igual".GetString(),
                    lessThan: "Menor que".GetString(),
                    lessThanOrEqual: "Menor ou igual".GetString(),
                    notContains: "Não contém".GetString(),
                    notEqual: "Não é igual".GetString(),
                    startsWith: "Começa com".GetString()
                }
            },
            searchPanel: {
                visible: this.ExibirPainelPesquisa,
                placeholder: "Procurar na Grade".GetString(),
                searchVisibleColumnsOnly: false,
                width: 250,
            },
            headerFilter: {
                height: 220,
                texts: {
                    cancel: "Cancelar".GetString(),
                    ok: "OK".GetString(),
                    emptyValue: "(vazios)".GetString(),
                    "false": "falso".GetString()
                },
                visible: this.ExibirLinhaFiltro,
                width: 250
            },
            groupPanel: {
                visible: this.ExibirAgrupamento,
                emptyPanelText: "Arraste uma coluna para agrupar".GetString()
            },
            grouping: {
                contextMenuEnabled: this.ExibirAgrupamento,
                texts: {
                    groupByThisColumn: "Agupar por esta coluna".GetString(),
                    groupContinuedMessage: "Continuação da página anterior".GetString(),
                    groupContinuesMessage: "Continua na próxima página".GetString(),
                    ungroup: "Desagrupar".GetString(),
                    ungroupAll: "Desagrupar todos".GetString()
                }
            },
            sorting: {
                mode: modoSorting,
                ascendingText: "Classificação Crescente".GetString(),
                descendingText: "Classificação Decrescente".GetString(),
                clearText: "Limpar Classificação".GetString()
            },
            noDataText: "Não existem dados para mostrar".GetString(),
            loadPanel: {
                text: "Carregando...".GetString()
            },
            height: altura,
            stateStoring: {
                enabled: this.SalvarStateGrid,
                type: "sessionStorage",
                storageKey: this.ID
            },
            columnChooser: {
                emptyPanelText: "Arraste uma coluna para ocultá-la".GetString(),
                title: "Seletor de Coluna".GetString()
            },
            paging: {
                enabled: this.ExibirPaginacao,
                pageSize: this.PageSize
            },
            pager: {
                showPageSizeSelector: true,
                allowedPageSizes: [50, 100, 200]
            },
            columnResizingMode: "widget",
            scrolling: {
                useNative: true,
                showScrollbar: "always",
            },
            columns: cols,
            onRowUpdated: $.proxy(this.OnRowUpdated(), this),
            onEditorPreparing: $.proxy(this.OnEditorPreparing(), this),
            onEditorPrepared: $.proxy(this.OnEditorPrepared, this),
            onSelectionChanged: $.proxy(this.OnSelectionChanged, this),
            onKeyDown: $.proxy(this.OnKeyDown, this),
            onRowClick: $.proxy(this.OnRowClick, this),
            onCellClick: $.proxy(this.OnCellClick, this),
            onCellPrepared: $.proxy(this.OnCellPrepared, this),
            onContextMenuPreparing: $.proxy(this.OnContextMenuPreparing, this),
            onRowValidating: $.proxy(this.OnRowValidating, this),
            onContentReady: $.proxy(this.OnContentReady, this),
            onFileSaving: $.proxy(this.OnFileSaving, this),
            onExporting: $.proxy(this.OnExporting, this),
            onExported: $.proxy(this.OnExported, this)
        };
        var totalizacoes = this.CriarTotalizacoes();
        if (totalizacoes) {
            opt.summary = totalizacoes;
        }
        //Habilita a edição da grid
        if (this.PermitirEditarGrid) {
            opt.editing = {
                mode: "cell",
                allowUpdating: true
            };
        }
        //Habilita a seleção da linha
        if (isSelecionarLinha) {
            opt.selection = {
                mode: "multiple",
                showCheckBoxesMode: "always",
                allowSelectAll: this.ExibirBotaoSelecionarTodos,
            };
        }
        var visibleBotoes = (this.ExibirBotoesRodape);
        if (this.btnImprimirExcel) {
            this.btnImprimirExcel.SetVisible(visibleBotoes);
        }
        if (this.btnImprimirGrade) {
            this.btnImprimirGrade.SetVisible(visibleBotoes);
        }
        if (this.btnSalvarLayout) {
            this.btnSalvarLayout.SetVisible(visibleBotoes);
        }
        if (this.btnFullScreen) {
            this.btnFullScreen.SetVisible(visibleBotoes);
        }
        if (this.btnImprimirPDF) {
            this.btnImprimirPDF.SetVisible(visibleBotoes);
        }
        $(this.tbMain).dxDataGrid(opt).dxDataGrid("instance");
        //ordena a grid de acordo com a configuração
        if (!String.IsNullOrWhiteSpace(this.CampoOrder)) {
            setTimeout($.proxy(function () {
                if (this.TipoOrder == "des") {
                    this.OrderBy(this.CampoOrder, "desc");
                }
                else {
                    this.OrderBy(this.CampoOrder, "asc");
                }
            }, this), 200);
        }
        this.SetDataSourcePadraoGrade();
        this.AtualizarTamanhoGrade();
        this.CorrigeColunasEditaveis();
        this.CorrigePainelAgrupamento();
    };
    MouraGridViewJS.prototype.CorrigePainelAgrupamento = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.ExibirAgrupamento) {
                // Por algum motivo o painel de agrupamento nao está mais sendo exibido. Esta função tenta corrigir isso
                //this.Grid.option('groupPanel.visible', false);
                //this.Grid.option('groupPanel.visible', true);
                _this.Grid.repaint();
            }
        }, 2000);
    };
    //#region Eventos da Grid
    MouraGridViewJS.prototype.OnRowUpdated = function () {
        return function RowUpdated(e) {
            var _this = this;
            var source = this.DataSource;
            this.AtualizarHiddenDataSource(source);
            var evt = new MouraGridViewJSItemEventArgs();
            evt.index = this.Grid.getRowIndexByKey(e.key);
            evt.item = this.Grid.getVisibleRows()[evt.index].data;
            if (!evt.item) {
                if (!String.IsNullOrWhiteSpace(this.CampoID) && this.DataSource[evt.index][this.CampoID] != undefined) {
                    evt.item = this.DataSource.find(function (x) { return x[_this.CampoID] == e.key; });
                }
                else {
                    evt.item = this.DataSource[evt.index];
                }
            }
            for (var p in e.data) {
                evt.propriedade = p;
            }
            this.EditouItemGrade.FireEvent(this, evt);
            ;
        };
    };
    MouraGridViewJS.prototype.OnEditorPreparing = function () {
        var that = this;
        return function EditorPreparing(e) {
            var source = null;
            if (!that.ExibirBotaoSelecionarTodos) {
                try {
                    //Remove o checkbox SelectAll do header da grade se ela não puder ter a opção de selecionar todos
                    if (e.parentType == 'headerRow' && e.command == 'select') {
                        e.editorElement.remove();
                    }
                }
                catch (ex) {
                }
            }
        };
    };
    MouraGridViewJS.prototype.OnEditorPrepared = function (opts) {
        if (!opts) {
            return;
        }
        //Se a coluna for hora, o sistema muda o seletor do campo
        if (opts.dataType == 'date' && opts.format == 'HH:mm') {
            //opts.editorElement.dxDateBox("instance").option("type", "time");       
            //opts.editorElement.dxDateBox("instance").option("interval", "15");
            //opts.editorElement.dxDateBox("instance").option("min", undefined);
            //opts.editorElement.dxDateBox("instance").option("max", undefined);
        }
    };
    MouraGridViewJS.prototype.OnRowValidating = function (e) {
        this.RowValidating.FireEvent(this, e);
    };
    MouraGridViewJS.prototype.OnContentReady = function (e) {
        this.CorrigeColunasEditaveis();
    };
    MouraGridViewJS.prototype.OnSelectionChanged = function (e) {
        //e: {
        //    currentSelectedRowKeys: Array<any>;
        //    currentDeselectedRowKeys: Array<any>;
        //    selectedRowKeys: Array<any>;
        //    selectedRowsData: Array<any>;
        //}
        var ev = new MouraGridViewJSClickBotaoLinhaEventArgs();
        if (e.currentSelectedRowKeys && e.currentSelectedRowKeys.length > 0) {
            ev.rowKey = e.currentSelectedRowKeys[0];
        }
        else {
            ev.rowKey = e.currentDeselectedRowKeys[0];
        }
        ev.rowIndex = this.Grid.getRowIndexByKey(ev.rowKey);
        ev.data = this.Grid.getDataSource()[ev.rowIndex];
        this.AtualizaHiddenLinhasSelecionadas();
        this.SelecionouLinha.FireEvent(this, ev);
    };
    MouraGridViewJS.prototype.AtualizaHiddenLinhasSelecionadas = function () {
        this.hdnDadosLinhasSelecionadas.value = EncodeTextoJSON(JSON.stringify(this.Grid.getSelectedRowsData()));
    };
    MouraGridViewJS.prototype.OnKeyDown = function (e) {
        this.KeyDown.FireEvent(this, e);
    };
    MouraGridViewJS.prototype.OnRowClick = function (e) {
        var dtAtual = new Date();
        var diferenca = 300;
        if (this.dtUltClick) {
            diferenca = dtAtual - this.dtUltClick;
        }
        if (diferenca <= 200 && this.lastRowCLickedId === e.rowIndex) {
            this.dtUltClick = null;
            this.lastRowCLickedId = e.rowIndex;
            this.RowDblClick.FireEvent(this, e);
        }
        else {
            this.RowClick.FireEvent(this, e);
            this.dtUltClick = new Date();
        }
        this.lastRowCLickedId = e.rowIndex;
    };
    MouraGridViewJS.prototype.OnCellClick = function (e) {
        this.CellClick.FireEvent(this, e);
    };
    MouraGridViewJS.prototype.OnCellPrepared = function (e) {
        this.CellPrepared.FireEvent(this, e);
    };
    MouraGridViewJS.prototype.OnContextMenuPreparing = function (e) {
        var item;
        if (e.items) {
            //Exibe a opção para ocultar a coluna que foi selecionada
            item = {};
            item.text = "Ocultar esta Coluna".GetString();
            item.value = "ocultarColuna";
            item.onItemClick = $.proxy(this.OnClickOcultarColuna(e.column), this);
            e.items.push(item);
            //Exibe a opção "Seletor de Coluna"
            item = {};
            item.text = "Seletor de Coluna".GetString();
            item.value = "seletorColuna";
            item.onItemClick = $.proxy(this.OnClickSeletorColuna, this);
            e.items.push(item);
            //Exibe opção para alterar o tamanho da coluna
            //Com a opção que foi adicionada de redimensionar as colunas, isso nao pode ser feito
            //item = {}
            //item.text = "Alterar Tamanho da Coluna";
            //item.value = "tamanhoColuna";
            //item.onItemClick = $.proxy(this.OnClickTamanhoColuna(this.Grid.columnOption(e.column.index)), this);
            //e.items.push(item);
        }
    };
    MouraGridViewJS.prototype.OnClickOcultarColuna = function (coluna) {
        var _this = this;
        return $.proxy(function (e) {
            try {
                if (!String.IsNullOrWhiteSpace(coluna.name) && coluna.name == _this.ID_COLUNA_FINAL) {
                    MostrarAlerta("Esta coluna não pode ser oculta");
                    return;
                }
                _this.Grid.columnOption(coluna.index, 'visible', false);
            }
            catch (ex) {
            }
        }, this);
    };
    MouraGridViewJS.prototype.OnClickSeletorColuna = function (e) {
        this.Grid.showColumnChooser();
    };
    MouraGridViewJS.prototype.OnClickTamanhoColuna = function (coluna) {
        if (!coluna) {
            return;
        }
        var w = coluna.width;
        if (!w) {
            w = 100;
        }
        return $.proxy(function (e) {
            try {
                InputBoxJS("Alterar o tamanho da coluna", "Informe o novo tamanho", coluna, this.OnSelecionouInputTamanhoColuna, this, "" + w);
            }
            catch (ex) {
            }
        }, this);
    };
    MouraGridViewJS.prototype.OnSelecionouInputTamanhoColuna = function (result) {
        try {
            var coluna = result.Argument;
            if (coluna) {
                var tamanho = result.Valor.CNum();
                if (tamanho <= 0) {
                    MostrarAlerta("O valor informado é inválido!");
                    return;
                }
                if (tamanho > 1000) {
                    MostrarAlerta("O tamanho da coluna não pode ser maior que 1000!");
                    return;
                }
                this.Grid.columnOption(coluna.index, 'width', tamanho);
                this.Grid.refresh();
            }
        }
        catch (ex) {
        }
    };
    //#endregion
    //#region Templates de Botões
    MouraGridViewJS.prototype.CriarTemplateBotaoExcluir = function () {
        var tela = this;
        return function TemplateBotaoExcluir(container, options) {
            if (options.rowType == "data") {
                var botao = $('<input type="button" value="" class="gridDevExtremeBotaoExcluir" />');
                if (options.value) {
                    // botao.on("click", function () { tela.ExcluirRegistro(options.value) });
                    botao.on("click", function () { tela.ExcluirRegistro(options.data[tela.CampoID]); });
                }
                else {
                    botao.on("click", function () { tela.Excluir(options.rowIndex, true); });
                }
                botao.appendTo(container);
            }
        };
    };
    //protected CriarTotalizacoes(): any {
    //    var lista: Array<SiSMoura.Core.Entity.MouraGridSummary> = [];
    //    var totalizacao: any;
    //    var aux: SiSMoura.Core.Entity.MouraGridSummary;
    //    if (!this.TotalizacoesColunas) {
    //        this.TotalizacoesColunas = [];
    //    }
    //    for (var i = 0; i <= this.TotalizacoesColunas.length - 1; i++) {
    //        totalizacao = {};
    //        aux = this.TotalizacoesColunas[i];
    //        var tipo: string;
    //        if (aux.TipoDado != null && aux.TipoDado != undefined) {
    //            tipo = aux.TipoDado.toLowerCase();
    //        } else {
    //            tipo = "";
    //        }
    //        totalizacao.name = aux.FieldName;
    //        totalizacao.column = aux.FieldName;
    //        totalizacao.summaryType = aux.TipoTotalizacao;
    //        totalizacao.showInColumn = aux.MostrarNaColuna;
    //        totalizacao.displayFormat = aux.DisplayFormat;
    //        if (aux.CasasDecimais != null && aux.CasasDecimais != undefined && tipo != "") {
    //            if (tipo == 'numerointeiro' || tipo == 'numerodecimal' || tipo == 'spin') {
    //                totalizacao.customizeText = $.proxy(this.formataValor(aux.CasasDecimais, aux.DisplayFormat), this);
    //                totalizacao.alignment = "right";
    //                totalizacao.displayFormat = null;
    //            }
    //        }
    //        lista.push(totalizacao);
    //    }
    //    var retorno = <any>{};
    //    retorno.summary = <any>{};
    //    retorno.summary.groupItems = lista;
    //    retorno.summary.totalItems = lista;
    //    retorno.summary.calculateCustomSummary = (option) => {
    //        this.calculateCustomSummary(option);
    //    };
    //    return retorno.summary;
    //}
    MouraGridViewJS.prototype.CriarTotalizacoes = function () {
        var _this = this;
        var lista = [];
        var totalizacao;
        var aux;
        if (!this.TotalizacoesColunas) {
            this.TotalizacoesColunas = [];
        }
        if (!this.TotalizacoesAgrupamentoColunas) {
            this.TotalizacoesAgrupamentoColunas = [];
        }
        var retorno = {};
        retorno.summary = {};
        for (var i = 0; i <= this.TotalizacoesColunas.length - 1; i++) {
            aux = this.TotalizacoesColunas[i];
            lista.push(this.MouraGridSummaryToDevExtremeSummary(aux));
        }
        retorno.summary.totalItems = lista;
        lista = [];
        for (var i = 0; i <= this.TotalizacoesAgrupamentoColunas.length - 1; i++) {
            aux = this.TotalizacoesAgrupamentoColunas[i];
            lista.push(this.MouraGridSummaryToDevExtremeSummary(aux));
        }
        retorno.summary.groupItems = lista;
        retorno.summary.calculateCustomSummary = function (option) {
            _this.calculateCustomSummary(option);
        };
        return retorno.summary;
    };
    MouraGridViewJS.prototype.MouraGridSummaryToDevExtremeSummary = function (summary) {
        var totalizacao = {};
        var tipo;
        if (summary.TipoDado != null && summary.TipoDado != undefined) {
            tipo = summary.TipoDado.toLowerCase();
        }
        else {
            tipo = "";
        }
        totalizacao.name = summary.FieldName;
        totalizacao.column = summary.FieldName;
        totalizacao.summaryType = summary.TipoTotalizacao;
        totalizacao.displayFormat = summary.DisplayFormat;
        totalizacao.showInGroupFooter = summary.MostrarNoRodape;
        if (!String.IsNullOrWhiteSpace(summary.MostrarNaColuna)) {
            totalizacao.showInColumn = summary.MostrarNaColuna;
            totalizacao.alignByColumn = true;
        }
        if (summary.CasasDecimais != null && summary.CasasDecimais != undefined && tipo != "") {
            if (tipo == 'numerointeiro' || tipo == 'numerodecimal' || tipo == 'spin') {
                totalizacao.customizeText = $.proxy(this.formataValor(summary.CasasDecimais, summary.DisplayFormat), this);
                totalizacao.alignment = "right";
                totalizacao.displayFormat = null;
            }
        }
        return totalizacao;
    };
    MouraGridViewJS.prototype.calculateCustomSummary = function (options) {
        var evt = new MouraGridViewCalculateCustomSummary();
        evt.options = options;
        this.CalculateCustomSummary.FireEvent(this, evt);
        // Calculating "customSummary1"
        if (options.name == "customSummary1") {
            switch (options.summaryProcess) {
                case "start":
                    // Initializing "totalValue" here
                    break;
                case "calculate":
                    // Modifying "totalValue" here
                    break;
                case "finalize":
                    // Assigning the final value to "totalValue" here
                    break;
            }
        }
        // Calculating "customSummary2"
        if (options.name == "customSummary2") {
            // ...
            // Same "switch" statement here
        }
    };
    MouraGridViewJS.prototype.CriarTemplateBotaoSelecionar = function () {
        var tela = this;
        return function TemplateBotaoSelecionar(container, options) {
            if (options.rowType == "data") {
                var botao = $('<input type="button" value="" class="gridDevExtremeBotaoSelecionar" />');
                botao.on("click", function () { tela.ClickBotaoSelecionar(options); });
                botao.appendTo(container);
            }
        };
    };
    MouraGridViewJS.prototype.CriarTemplateBotaoImprimir = function () {
        var tela = this;
        return function TemplateBotaoImprimir(container, options) {
            if (options.rowType == "data") {
                var botao = $('<input type="button" value="" class="gridDevExtremeBotaoImprimir" />');
                botao.on("click", function () { tela.OnClickBotaoImprimir(options); });
                botao.appendTo(container);
            }
        };
    };
    MouraGridViewJS.prototype.CriarTemplateBotaoCustom = function (text, commandName) {
        var tela = this;
        return function TemplateBotaoCustom(container, options) {
            if (options.rowType == "data") {
                var botao = $('<input type="button" value="' + text + '" />');
                botao.on("click", function () { tela.ClickCustomButton(text, commandName, options); });
                botao.appendTo(container);
            }
        };
    };
    MouraGridViewJS.prototype.ClickBotaoSelecionar = function (options) {
        var args = this.CriarArgBotao("", "selecionar", options);
        this.SelecionouLinha.FireEvent(this, args);
    };
    MouraGridViewJS.prototype.OnClickBotaoImprimir = function (options) {
        var args = this.CriarArgBotao("", "imprimir", options);
        this.ClickBotaoImprimir.FireEvent(this, args);
    };
    MouraGridViewJS.prototype.ClickCustomButton = function (buttonText, commandName, options) {
        var args = this.CriarArgBotao(buttonText, commandName, options);
        this.ClickBotaoLinha.FireEvent(this, args);
    };
    MouraGridViewJS.prototype.CriarArgBotao = function (buttonText, commandName, options) {
        var args = {};
        args.buttonText = buttonText;
        args.columnIndex = options.columnIndex;
        args.commandName = commandName;
        args.data = options.data;
        args.rowIndex = options.rowIndex;
        if (!options.value && !String.IsNullOrWhiteSpace(this.CampoID) && options.data[this.CampoID]) {
            args.rowKey = options.data[this.CampoID];
        }
        else {
            args.rowKey = options.value;
        }
        args.cellElement = options.cellElement;
        return args;
    };
    //#endregion
    MouraGridViewJS.prototype.ExcluirRegistro = function (id) {
        if (id == null || id == undefined) {
            return;
        }
        this.Excluir(this.ProcuraRegistroByID(id), true);
    };
    MouraGridViewJS.prototype.Excluir = function (index, perguntar) {
        if (index == null || index == undefined) {
            return;
        }
        var registro = index;
        var evtExcluindo = new MouraGridViewJSItemCancelavelEventArgs();
        evtExcluindo.cancelar = false;
        evtExcluindo.index = registro;
        evtExcluindo.item = this.DataSource[registro];
        this.ExcluindoLinhaGrade.FireEvent(this, evtExcluindo);
        if (!evtExcluindo.cancelar) {
            if (perguntar) {
                MsgBoxJS("Deseja realmente excluir o registro selecionado?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.ExecutaExclusaoRegistro, this), index);
            }
            else {
                var e = new MsgBoxResultEventArgs();
                e.Argument = index;
                e.Resultado == MsgBoxResult.Yes;
                this.ExecutaExclusaoRegistro(e);
            }
        }
    };
    MouraGridViewJS.prototype.ExecutaExclusaoRegistro = function (e) {
        if (e.Resultado == MsgBoxResult.Yes) {
            var registro = e.Argument;
            var item = this.DataSource[registro];
            if (registro >= 0) {
                var evtExcluiu = new MouraGridViewJSItemEventArgs();
                this.DataSource.splice(registro, 1);
                this.Refresh();
                evtExcluiu.index = registro;
                evtExcluiu.item = item;
                if (this.ExcluiuLinhaGrade) {
                    this.ExcluiuLinhaGrade.FireEvent(this, evtExcluiu);
                }
            }
        }
    };
    MouraGridViewJS.prototype.ProcuraRegistroByID = function (id) {
        var retorno = -1;
        var lista = this.DataSource;
        if (id == null || id == undefined) {
            return null;
        }
        for (var x = 0; x <= lista.length - 1; x++) {
            if (lista[x][this.CampoID] == id) {
                retorno = x;
                break;
            }
        }
        return retorno;
    };
    MouraGridViewJS.prototype.OnResizeGrid = function () {
        try {
            this.AtualizarTamanhoGrade();
        }
        catch (ex) {
        }
    };
    MouraGridViewJS.prototype.VisibleRowsCount = function () {
        var linhas = 0;
        if (this.Grid.getVisibleRows()) {
            linhas = this.Grid.getVisibleRows().length;
        }
        return linhas;
    };
    MouraGridViewJS.prototype.SetFocusEditCell = function (rowIndex, fieldName) {
        try {
            this.Grid.editCell(rowIndex, fieldName);
        }
        catch (ex) {
        }
    };
    MouraGridViewJS.prototype.AtualizarTamanhoGrade = function () {
        if (this.Grid && this.tbMain) {
            corrigirTamanhoMouraGridViewJS(this.Grid, this.tbMain.id);
        }
        this.CorrigeColunasEditaveis();
    };
    MouraGridViewJS.prototype.PreencherGrid = function (datasource) {
        if (!this.Grid) {
            this.iniciarGrid();
        }
        if (datasource == null || datasource == undefined) {
            datasource = [];
        }
        this.setDataSourceGrid(datasource);
        this.Refresh();
        //this.AjustarWidth()
    };
    MouraGridViewJS.prototype.SetDrillDownDataSource = function (datasource) {
        if (!this.Grid) {
            this.iniciarGrid();
        }
        if (datasource == null || datasource == undefined) {
            datasource = {};
        }
        this.Grid.option('dataSource', datasource);
        this.Refresh();
        //this.AjustarWidth()
    };
    MouraGridViewJS.prototype.deselectAll = function () {
        if (this.Grid) {
            this.Grid.deselectAll();
            this.AtualizaHiddenLinhasSelecionadas();
        }
    };
    MouraGridViewJS.prototype.selectAll = function () {
        if (this.Grid) {
            this.Grid.selectAll();
            this.AtualizaHiddenLinhasSelecionadas();
        }
    };
    MouraGridViewJS.prototype.AjustarWidth = function () {
        this.Grid.element().css("max-width", "");
        this.Grid.element().css("width", "");
    };
    MouraGridViewJS.prototype.LimparSelecao = function () {
        if (!this.Grid) {
            this.iniciarGrid();
        }
        this.Grid.clearSelection();
    };
    MouraGridViewJS.prototype.Refresh = function () {
        setTimeout($.proxy(function () {
            this.AtualizarTamanhoGrade();
        }, this), 100);
    };
    MouraGridViewJS.prototype.setDataSourceGrid = function (data) {
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
        if (!String.IsNullOrWhiteSpace(this.CampoID)) {
            value = {
                type: "array",
                key: this.CampoID,
                data: data
            };
        }
        else {
            value = {
                type: "array",
                data: data
            };
        }
        ds.store = value;
        this.AtualizarHiddenDataSource(data);
        this.Grid.option('dataSource', ds);
    };
    MouraGridViewJS.prototype.AtualizarHiddenDataSource = function (data) {
        if (data == null || data == undefined) {
            this.hdnSource.value = "";
        }
        else {
            this.hdnSource.value = EncodeTextoJSON(JSON.stringify(data));
        }
    };
    MouraGridViewJS.prototype.SetDataSourcePadraoGrade = function () {
        if (this.hdnSource) {
            if (String.IsNullOrWhiteSpace(this.hdnSource.value)) {
                this.PreencherGrid([]);
            }
            else {
                this.PreencherGrid(JSON.parse(DecodeTextoJSON(this.hdnSource.value)));
            }
        }
    };
    MouraGridViewJS.prototype.formataValor = function (casasDecimais, prefixo) {
        return function (value) {
            if (value == null || value == undefined || value.value == null || value.value == undefined) {
                return "";
            }
            else {
                if (typeof value.value == "number") {
                    if (!String.IsNullOrWhiteSpace(prefixo)) {
                        var retorno = value.value.Format(casasDecimais);
                        retorno = replaceAll(prefixo, "{0}", retorno);
                        return retorno;
                    }
                    else {
                        return value.value.Format(casasDecimais);
                    }
                }
                else {
                    return value.value;
                }
            }
        };
    };
    MouraGridViewJS.prototype.GetColunaByFieldName = function (fieldName) {
        var retorno = null;
        for (var x = 0; x <= this.Grid.columnCount() - 1; x++) {
            var coluna = this.Grid.columnOption(x);
            if (!String.IsNullOrWhiteSpace(coluna.dataField) && coluna.dataField == fieldName) {
                retorno = coluna;
                break;
            }
        }
        return retorno;
    };
    MouraGridViewJS.prototype.GetColunaByName = function (name) {
        var retorno = null;
        for (var x = 0; x <= this.Grid.columnCount() - 1; x++) {
            var coluna = this.Grid.columnOption(x);
            if (!String.IsNullOrWhiteSpace(coluna.name) && coluna.name == name) {
                retorno = coluna;
                break;
            }
        }
        return retorno;
    };
    MouraGridViewJS.prototype.LimparFiltros = function () {
        if (!this.Grid) {
            this.iniciarGrid();
        }
        this.Grid.clearFilter();
        //for (var x = 0; x <= this.Grid.columnCount() - 1; x++) {
        //    var coluna: DevExpress.ui.dxDataGridColumn = <any>this.Grid.columnOption(x);
        //    if (!String.IsNullOrWhiteSpace(coluna.dataField)) {
        //        this.Grid.columnOption(coluna.index, 'filterValue', "");
        //    }
        //}
    };
    /** Ordena a Grid pela coluna desejada. No parãmetro tipo passar "asc" ou "desc" */
    MouraGridViewJS.prototype.OrderBy = function (fieldName, tipo) {
        var coluna = this.GetColunaByFieldName(fieldName);
        if (coluna) {
            try {
                this.Grid.columnOption(coluna.index, "sortOrder", tipo);
            }
            catch (ex) {
            }
        }
    };
    MouraGridViewJS.prototype.GroupBy = function (fieldName) {
        var coluna = this.GetColunaByFieldName(fieldName);
        if (coluna) {
            this.Grid.columnOption(coluna.index, "groupIndex", 0);
        }
    };
    MouraGridViewJS.prototype.ColunaVisible = function (colunaOuFieldName, visible) {
        var coluna;
        if (typeof colunaOuFieldName == 'string') {
            coluna = this.GetColunaByFieldName(colunaOuFieldName);
        }
        else {
            coluna = colunaOuFieldName;
        }
        if (coluna) {
            this.Grid.columnOption(coluna.index, "visible", visible);
        }
    };
    MouraGridViewJS.prototype.FilterColumn = function (fieldName, filter) {
        var coluna = this.GetColunaByFieldName(fieldName);
        if (coluna) {
            this.Grid.columnOption(coluna.index, 'filterValue', filter);
        }
    };
    MouraGridViewJS.prototype.SetColunaEditavel = function (fieldName, value) {
        var coluna = this.GetColunaByFieldName(fieldName);
        if (coluna) {
            this.Grid.columnOption(coluna.index, "allowEditing", value);
        }
    };
    MouraGridViewJS.prototype.FixarColuna = function (fieldName, value) {
        var coluna = this.GetColunaByFieldName(fieldName);
        if (coluna) {
            this.Grid.columnOption(coluna.index, "fixed", value);
            this.Grid.columnOption(coluna.index, "fixedPosition", "left");
        }
    };
    MouraGridViewJS.prototype.SetEncodeHTMLColuna = function (fieldName, value) {
        var coluna = this.GetColunaByFieldName(fieldName);
        if (coluna) {
            this.Grid.columnOption(coluna.index, "encodeHtml", value);
        }
    };
    MouraGridViewJS.prototype.SetHeightGrid = function (altura) {
        var alturaStr = altura + "px";
        this.Grid.option("height", alturaStr);
    };
    MouraGridViewJS.prototype.OnClickExportarExcel = function (s, e) {
        e.processOnServer = false;
        //this.Grid.exportToExcel(false);
    };
    MouraGridViewJS.prototype.OnClickExportarPDF = function (s, e) {
        e.processOnServer = false;
        this.ExportToPDF();
    };
    MouraGridViewJS.prototype.OnClickSalvarLayout = function (s, e) {
        e.processOnServer = false;
        this.SalvarLayout();
    };
    MouraGridViewJS.prototype.SalvarLayout = function () {
        try {
            var columnCount = this.Grid.columnCount();
            if (columnCount <= 0) {
                MostrarAlerta("Não existe nenhuma coluna na grade para salvar!");
                return;
            }
            var layout = {};
            layout.Codigo = 0;
            layout.Coluna_Order = "";
            layout.Colunas = [];
            layout.Data_Cadastro = new Date();
            if (this.IsGradeProcura && !String.IsNullOrWhiteSpace(this.IDModalProcura)) {
                var modal = window[this.IDModalProcura];
                if (modal) {
                    layout.Nomegrid = modal.Engine;
                }
                else {
                    layout.Nomegrid = this.ID;
                }
            }
            else {
                layout.Nomegrid = this.ID;
            }
            if (this.IsGradeProcura) {
                layout.Tela = "procura";
            }
            else {
                layout.Tela = ValoresSismoura.NomeTela;
            }
            layout.Tipo_Order = "";
            layout.Usuario = ValoresSismoura.UsuarioLogado;
            for (var i = 0; i < columnCount; i++) {
                var colGrade = this.Grid.columnOption(i);
                if (colGrade) {
                    //a coluna "final" não pode ser salva, pois é utilizada apenas para que o usuário possa redimensionar a última coluna                 
                    if (colGrade.name != this.ID_COLUNA_FINAL) {
                        var coluna = {};
                        coluna.Captioncoluna = colGrade.caption;
                        coluna.Datafield = colGrade.dataField;
                        coluna.Layout = 0;
                        if (String.IsNullOrWhiteSpace(colGrade.name)) {
                            coluna.Nomecoluna = "";
                        }
                        else {
                            coluna.Nomecoluna = colGrade.name;
                            coluna.Datafield = "";
                        }
                        coluna.Posicao = ("" + colGrade.visibleIndex).CNum();
                        coluna.Tamanho = ("" + colGrade.width).CNum();
                        coluna.Visible = colGrade.visible;
                        if (colGrade.sortIndex != undefined &&
                            colGrade.sortIndex != null &&
                            !String.IsNullOrWhiteSpace(colGrade.sortOrder) &&
                            colGrade.sortIndex == 0) {
                            layout.Coluna_Order = colGrade.dataField;
                            layout.Tipo_Order = colGrade.sortOrder.substr(0, 3);
                        }
                        layout.Colunas.push(coluna);
                    }
                }
            }
            var param = {
                tela: ValoresSismoura.NomeTela,
                layout: EncodeTextoJSON(JSON.stringify(layout))
            };
            abrirEspera();
            this.ExecutarHttpRequestAsync("MouraGridViewJSSalvarLayout", param, this.OnSalvouLayout, this.OnErroSalvarlayout, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraGridViewJS.prototype.OnSalvouLayout = function (e) {
        fecharEspera();
        MostrarMensagem("Layout salvo com sucesso!");
    };
    MouraGridViewJS.prototype.OnErroSalvarlayout = function (ex) {
        fecharEspera();
        LogarExceptionAjax(ex);
    };
    MouraGridViewJS.prototype.OnClickFullScreen = function (s, e) {
        e.processOnServer = false;
        this.GrdFullScreen();
    };
    MouraGridViewJS.prototype.MoverColunaParaAgrupamento = function (idAgrupamento, fieldNameColuna) {
        var colunas = this.Grid.option("columns");
        if (!colunas) {
            return;
        }
        var indexColunaAgrupamento = -1;
        var indexColunaMover = -1;
        for (var i = 0; i < colunas.length; i++) {
            var aux = colunas[i];
            if (aux && aux.name == idAgrupamento) {
                indexColunaAgrupamento = i;
            }
            else if (aux && !String.IsNullOrWhiteSpace(aux.dataField) && aux.dataField == fieldNameColuna) {
                indexColunaMover = i;
            }
        }
        if (indexColunaAgrupamento >= 0 && indexColunaMover >= 0) {
            var colunaAgrupamento = colunas[indexColunaAgrupamento];
            var colunaMover = colunas.splice(indexColunaMover, 1)[0];
            if (!colunaAgrupamento.columns) {
                colunaAgrupamento.columns = [];
            }
            colunaAgrupamento.columns.push(colunaMover);
        }
        this.Grid.option("columns", colunas);
    };
    MouraGridViewJS.prototype.GrdFullScreen = function () {
        var pnGrade;
        var cssClass = 'DivGridJSfullScreen';
        var tam = ("" + this.AlturaGrade);
        if (String.IsNullOrWhiteSpace(tam)) {
            tam = '300';
        }
        pnGrade = $(this.pnPrincipal);
        //Se a div da grid estiver sem a classe fulscreen, quer dizer que 
        //ela está no tamanho original
        if (!this.IsGradeFullScreen(pnGrade)) {
            //Armazena o tamanho original da grid            
            this.hdnTam.value = this.Height;
        }
        //Altera a classe para deixa full screen ou remover a classe
        pnGrade.toggleClass(cssClass);
        var height;
        var conta;
        if (this.IsGradeFullScreen(pnGrade)) {
            //Se estiver com a classe FullScreen, aumenta o tamanho da grade
            conta = Math.max(0, document.documentElement.clientHeight);
            conta = conta - 70;
            height = ("" + conta);
        }
        else {
            //Volta a grade ao tamanho original
            height = tam;
        }
        height = height + 'px';
        //Altera o tamanho da grade
        this.Height = height;
        this.Refresh();
    };
    MouraGridViewJS.prototype.IsGradeFullScreen = function (pnGrade) {
        var cssClass = 'DivGridJSfullScreen';
        if (pnGrade.hasClass(cssClass)) {
            return true;
        }
        else {
            return false;
        }
    };
    MouraGridViewJS.prototype.CorrigeColunasEditaveis = function () {
        if (!this.Colunas) {
            return;
        }
        if (!this.PermitirEditarGrid) {
            return;
        }
        for (var x = 0; x <= this.Colunas.length - 1; x++) {
            if (this.Colunas[x].IsEditavel && !String.IsNullOrWhiteSpace(this.Colunas[x].Caption)) {
                $("#" + this.pnPrincipal.id + " td[role='columnheader'][aria-label='" + this.Colunas[x].Caption + " Column']").css("background-color", "#045804");
            }
        }
    };
    MouraGridViewJS.prototype.SetPageSize = function (pageSize) {
        this.Grid.option('paging.pageSize', pageSize);
    };
    MouraGridViewJS.prototype.CancelChanges = function () {
        try {
            if (this.Grid) {
                this.Grid.cancelEditData();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraGridViewJS.prototype.CollapseAll = function () {
        this.Grid.collapseAll();
    };
    MouraGridViewJS.prototype.ExpandAll = function (groupIndex) {
        this.Grid.expandAll(groupIndex);
    };
    MouraGridViewJS.prototype.FuncaoSort = function (fieldName, funcaoSucesso, context) {
        var coluna = this.GetColunaByFieldName(fieldName);
        if (coluna) {
            this.Grid.columnOption(coluna.index, "calculateSortValue", $.proxy(funcaoSucesso, context));
        }
    };
    MouraGridViewJS.prototype.FuncaoGroup = function (fieldName, funcaoSucesso, context) {
        var coluna = this.GetColunaByFieldName(fieldName);
        if (coluna) {
            this.Grid.columnOption(coluna.index, "calculateGroupValue", $.proxy(funcaoSucesso, context));
        }
    };
    MouraGridViewJS.prototype.FuncaoCustomText = function (fieldName, funcaoSucesso, context) {
        var coluna = this.GetColunaByFieldName(fieldName);
        if (coluna) {
            this.Grid.columnOption(coluna.index, "customizeText", $.proxy(funcaoSucesso, context));
        }
    };
    MouraGridViewJS.prototype.ExportarExcel = function (selectionOnly) {
        this.Grid.exportToExcel(selectionOnly);
    };
    MouraGridViewJS.prototype.ExportToPDF = function () {
        var _this = this;
        abrirEspera("Aguarde. Exportando para PDF".GetString());
        var promise = this.ExportarExcelData(false);
        promise.then(function (retorno) {
            var aux = retorno;
            var param = {
                arquivoExcel: aux
            };
            _this.ExecutarHttpRequestAsyncPost("MouraGridViewJSExportPDF", param, function (d) {
                fecharEspera();
                var arquivoPDF = d;
                downloadArquivo(base64ToArrayBuffer(arquivoPDF), "Arquivo.pdf", "application/pdf");
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, _this);
        }).catch(function (erro) {
            fecharEspera();
            LogarException(erro);
            var e = erro;
        });
    };
    MouraGridViewJS.prototype.ExportToExcelCompleto = function () {
        var _this = this;
        var titulo = document.title;
        var cabecalho = this.MontaCabecalhoExcelCompleto();
        var rodape = "";
        abrirEspera("Aguarde. Exportando para Excel".GetString());
        var promise = this.ExportarExcelData(false);
        promise.then(function (retorno) {
            var aux = retorno;
            var param = {
                arquivoExcel: aux,
                titulo: titulo,
                cabecalho: cabecalho,
                rodape: rodape
            };
            _this.DownloadHttpRequestPost("MouraGridViewJSExcelFormatado", param).then(function () {
                fecharEspera();
            }).catch(function () {
                fecharEspera();
            });
        }).catch(function (erro) {
            fecharEspera();
            LogarException(erro);
            var e = erro;
        });
    };
    MouraGridViewJS.prototype.ExportarExcelData = function (selectionOnly) {
        //for (var x = 0; x < this.Colunas.length; x++) {
        //    if (this.Colunas[x].Tipo == "Botao") {
        //        this.Colunas[x].Visible = false;
        //    }
        //}
        var _this = this;
        this._cancelarExportacao = true;
        this.Grid.exportToExcel(selectionOnly);
        var promise = new Promise(function (resolve, reject) {
            // the resolve / reject functions control the fate of the promise
            var cont = 0;
            var retornoSTR = "";
            var interval = setInterval(function () {
                try {
                    cont++;
                    if (_this._dataFile) {
                        clearInterval(interval);
                        var reader = new FileReader();
                        reader.readAsDataURL(_this._dataFile);
                        reader.onloadend = function () {
                            retornoSTR = reader.result;
                            var pos = retornoSTR.indexOf(",");
                            if (pos > 0) {
                                retornoSTR = retornoSTR.substring(pos + 1).trim();
                            }
                            _this._dataFile = null;
                            _this._cancelarExportacao = false;
                            resolve(retornoSTR);
                        };
                    }
                    if (cont == 60) {
                        clearInterval(interval);
                        _this._cancelarExportacao = false;
                        reject("Erro ao exportar dados".GetString());
                    }
                }
                catch (ex) {
                    clearInterval(interval);
                    reject(ex);
                }
            }, 500);
        });
        //for (var x = 0; x < this.Colunas.length; x++) {
        //    if (this.Colunas[x].Tipo == "Botao") {
        //        this.Colunas[x].Visible = true;
        //    }
        //}
        return promise;
    };
    MouraGridViewJS.prototype.OnFileSaving = function (e) {
        e.cancel = this._cancelarExportacao;
        this.SalvandoArquivo.FireEvent(this, e);
        this._dataFile = e.data;
    };
    MouraGridViewJS.prototype.OnExported = function (e) {
        //var listaTemplates = this.Colunas.FindAll("Tipo", "Botao")
        //for (var i = 0; i < listaTemplates.length; i++) {
        //    if (listaTemplates[i].Visible) {
        //        this.Grid.columnOption(listaTemplates[i].Name, "visible", true);
        //    }
        //}
    };
    MouraGridViewJS.prototype.OnExporting = function (e) {
        //var listaTemplates = this.Colunas.FindAll("Tipo", "Botao")
        //for (var i = 0; i < listaTemplates.length; i++) {
        //    if (listaTemplates[i].Visible) {
        //        this.Grid.columnOption(listaTemplates[i].Name, "visible", false);
        //    }
        //}
    };
    MouraGridViewJS.prototype.AlterarDataSourceColunaCombo = function (fieldNameColunaCombo, novoDataSource) {
        var colunaGrid = this.GetColunaByFieldName(fieldNameColunaCombo);
        if (!colunaGrid) {
            console.error("Coluna não encontrada por este fieldname " + fieldNameColunaCombo);
            return;
        }
        if (!colunaGrid.lookup) {
            console.error("A coluna informada não é uma combo");
            return;
        }
        if (!novoDataSource) {
            novoDataSource = [];
        }
        //colunaGrid.lookup.dataSource = novoDataSource;
        this.Grid.columnOption(colunaGrid.index, 'lookup.dataSource', novoDataSource);
        this.Refresh();
        this.Grid.refresh();
    };
    MouraGridViewJS.prototype.MontaCabecalhoExcelCompleto = function () {
        if (!(ValoresSismoura.InstanciaTela) || !(ValoresSismoura.InstanciaTela instanceof MouraPageRelacaoAngular)) {
            return "";
        }
        var telaAtual = ValoresSismoura.InstanciaTela;
        var accordionFiltros = telaAtual.AccordionFiltros;
        if (!accordionFiltros) {
            console.warn("Accordion de filtros da relação não foi informado corretamente");
            return "";
        }
        var retorno = "";
        var statusExpanded = accordionFiltros.GetExpanded();
        accordionFiltros.SetExpanded(true);
        var itens = accordionFiltros.getControles();
        if (!itens) {
            itens = [];
        }
        for (var i = 0; i < itens.length; i++) {
            var item = itens[i];
            //Itens ocultos não serão exibidos
            if (!item.Visible) {
                continue;
            }
            //Componentes internos não são exibidos como filtros (Ex: Checkbox considerar inativos do combobox de conta corrente)
            if (item.IsComponenteInterno) {
                continue;
            }
            var campoAtual = "";
            var labelCampo = this.GetControlLabelCorreta(item);
            if (!String.IsNullOrWhiteSpace(labelCampo)) {
                labelCampo = replaceAll(labelCampo, "* ", "");
                labelCampo = replaceAll(labelCampo, " (F2)", "");
            }
            campoAtual = labelCampo + ": " + auxTexto;
            if (item instanceof MouraTextBoxProcuraComLista) {
                var txtLista = item;
                var auxTexto = "";
                if (txtLista.SourceLista) {
                    for (var x = 0; x < length; x++) {
                        var itemAtual = txtLista.SourceLista[x];
                        if (itemAtual) {
                            auxTexto += itemAtual.Text + ";";
                        }
                    }
                }
            }
            else if (item instanceof MouraTextBoxProcura) {
                var valor = item.GetText();
                if (!String.IsNullOrWhiteSpace(valor)) {
                    valor = valor + " - " + item.GetResultado();
                }
                campoAtual = labelCampo + ": " + valor;
            }
            else if (item instanceof MouraRadioButtonList) {
                campoAtual = labelCampo + ": " + item.GetSelectedText();
            }
            else if (item instanceof MouraComboBoxEmpresa) {
                campoAtual = labelCampo + ": " + item.GetText();
            }
            else if (item instanceof MouraContaCorrenteLista) {
                campoAtual = labelCampo + ": " + item.Lista.SelectedTextes.join("; ");
            }
            else if (item instanceof MouraListBoxEmpresa) {
                campoAtual = labelCampo + ": " + item.GetTexts().join("; ");
            }
            else if (item instanceof MouraCheckBoxList) {
                campoAtual = labelCampo + ": " + item.SelectedTextes.join("; ");
            }
            else if (item instanceof MouraListBox) {
                campoAtual = labelCampo + ": " + item.SelectedValue;
            }
            else if (item instanceof MouraTextBoxPeriodo) {
                var aux = [];
                if (item.textBoxCalendarioInicio.GetDate()) {
                    aux.push(item.textBoxCalendarioInicio.GetDate().FormataData());
                }
                if (item.textBoxCalendarioFim.GetDate()) {
                    aux.push(item.textBoxCalendarioFim.GetDate().FormataData());
                }
                campoAtual = labelCampo + ": " + aux.join(" - ");
            }
            else if (item instanceof MouraTextBoxData) {
                campoAtual = labelCampo + ": " + item.Date.FormataData();
            }
            else if (item instanceof MouraCheckBox) {
                campoAtual = labelCampo + ": " + (item.Checked ? "Marcado" : "Desmarcado");
            }
            else if (item instanceof MouraContaCorrenteCombo) {
                campoAtual = labelCampo + ": " + item.GetContaCorrenteText();
            }
            else if (item instanceof MouraComboBox) {
                campoAtual = labelCampo + ": " + item.GetText();
            }
            else if (item instanceof MouraTextBox) {
                campoAtual = labelCampo + ": " + item.GetText();
            }
            if (!String.IsNullOrWhiteSpace(campoAtual)) {
                if (!String.IsNullOrWhiteSpace(retorno)) {
                    retorno += "\r\n";
                }
                retorno += campoAtual;
            }
        }
        accordionFiltros.SetExpanded(statusExpanded);
        return retorno;
    };
    MouraGridViewJS.prototype.OnClickImprimirGrade = function (s, e) {
        e.processOnServer = false;
        this.ImprimirGrid();
        //this.Grid.exportToExcel(false);
    };
    MouraGridViewJS.prototype.GetControlLabelCorreta = function (componente) {
        if (componente instanceof MouraCheckBox) {
            return componente.Text;
        }
        else {
            var retorno = componente.GetTextLabelControl();
            if (String.IsNullOrWhiteSpace(retorno)) {
                //var aux As Control = componente.Parent
                //Do While Not aux Is Nothing
                //If TypeOf aux Is MouraAgrupamento AndAlso CType(aux, MouraAgrupamento).Label <> "" Then
                //retorno = CType(aux, MouraAgrupamento).Label
                //aux = Nothing
                //Else
                //aux = aux.Parent
                //End If
                //Loop
            }
            return retorno;
        }
    };
    MouraGridViewJS.prototype.ImprimirGrid = function () {
        var _this = this;
        var titulo = document.title;
        var cabecalho = this.MontaCabecalhoExcelCompleto();
        var rodape = "";
        abrirEspera("Aguarde. Preparando a impressão".GetString());
        var promise = this.ExportarExcelData(false);
        promise.then(function (retorno) {
            var aux = retorno;
            var param = {
                arquivoExcel: aux,
                titulo: titulo,
                cabecalho: cabecalho,
                rodape: rodape
            };
            _this.ExecutarHttpRequestAsyncPost("MouraGridViewJSImprimir", param, function (d) {
                fecharEspera();
                var arquivoRecebido = d;
                abrirTelaNovaAbaParametros(formataURLRelativa("EditorExcel.aspx"));
                //downloadArquivo(base64ToArrayBuffer(arquivoRecebido), "Arquivo.xlsx", "application/vnd.ms-excel");
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, _this);
        }).catch(function (erro) {
            fecharEspera();
            LogarException(erro);
            var e = erro;
        });
    };
    return MouraGridViewJS;
}(MouraControl));
//# sourceMappingURL=MouraGridViewJS.js.map