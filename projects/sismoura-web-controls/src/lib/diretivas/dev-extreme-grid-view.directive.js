"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DevExtremeGridViewDirective = /** @class */ (function () {
    function DevExtremeGridViewDirective(elementRef) {
        this.elementRef = elementRef;
        this.alturaGrade = 300;
        this.permitirOrdenacao = true;
        this.permitirMoverColunas = true;
        this.exibirLinhaFiltro = true;
        this.paginacoesPermitidas = [50, 100, 200];
        this.instance = $(elementRef.nativeElement).dxDataGrid(this.getOptDevExpressGrid()).dxDataGrid('instance');
    }
    Object.defineProperty(DevExtremeGridViewDirective.prototype, "alturaGrade", {
        get: function () {
            return this.$alturaGrade;
        },
        set: function (value) {
            this.$alturaGrade = value;
            this.setGridOption('height', value + 'px');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevExtremeGridViewDirective.prototype, "permitirMoverColunas", {
        get: function () {
            return this.$permitirMoverColunas;
        },
        set: function (value) {
            this.$permitirMoverColunas = value;
            this.setGridOption('allowColumnReordering', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevExtremeGridViewDirective.prototype, "permitirOrdenacao", {
        get: function () {
            return this.$permitirOrdenacao;
        },
        set: function (value) {
            this.$permitirOrdenacao = value;
            if (value) {
                this.setGridOption('sorting.mode', 'single');
            }
            else {
                this.setGridOption('sorting.mode', 'none');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevExtremeGridViewDirective.prototype, "permitirEditarGrid", {
        get: function () {
            return this.$permitirEditarGrid;
        },
        set: function (value) {
            this.$permitirEditarGrid = value;
            if (value) {
                this.setGridOption('editing', {
                    mode: 'cell',
                    allowUpdating: true
                });
            }
            else {
                this.setGridOption('editing', null);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevExtremeGridViewDirective.prototype, "exibirLinhaFiltro", {
        get: function () {
            return this.$exibirLinhaFiltro;
        },
        set: function (value) {
            this.$exibirLinhaFiltro = value;
            this.setGridOption('filterRow.visible', value);
            this.setGridOption('headerFilter.visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevExtremeGridViewDirective.prototype, "exibirPainelPesquisa", {
        get: function () {
            return this.$exibirPainelPesquisa;
        },
        set: function (value) {
            this.$exibirPainelPesquisa = value;
            this.setGridOption('searchPanel.visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevExtremeGridViewDirective.prototype, "exibirAgrupamento", {
        get: function () {
            return this.$exibirAgrupamento;
        },
        set: function (value) {
            this.$exibirAgrupamento = value;
            this.setGridOption('groupPanel.visible', value);
            this.setGridOption('grouping.contextMenuEnabled', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevExtremeGridViewDirective.prototype, "exibirPaginacao", {
        get: function () {
            return this.$exibirPaginacao;
        },
        set: function (value) {
            this.$exibirPaginacao = value;
            this.setGridOption('paging.enabled', value);
            this.setGridOption('pager.showPageSizeSelector', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevExtremeGridViewDirective.prototype, "tamahoPaginacao", {
        get: function () {
            return this.$tamahoPaginacao;
        },
        set: function (value) {
            this.$tamahoPaginacao = value;
            this.setGridOption('paging.pageSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevExtremeGridViewDirective.prototype, "paginacoesPermitidas", {
        get: function () {
            return this.$paginacoesPermitidas;
        },
        set: function (value) {
            this.$paginacoesPermitidas = value;
            this.setGridOption('paging.pageSize', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DevExtremeGridViewDirective.prototype, "ngDataSource", {
        get: function () {
            return this.$ngDataSource;
        },
        set: function (value) {
            this.$ngDataSource = value;
            var ds = {
                store: {
                    type: 'array',
                    data: value
                }
            };
            this.setGridOption('dataSource', ds);
        },
        enumerable: true,
        configurable: true
    });
    DevExtremeGridViewDirective.prototype.getOptDevExpressGrid = function () {
        var opt;
        opt = {
            allowColumnReordering: this.permitirMoverColunas,
            allowColumnResizing: true,
            columnAutoWidth: false,
            export: {
                enabled: false,
                excelFilterEnabled: true,
                fileName: 'Arquivo',
                texts: {
                    exportTo: 'Exportar para'.GetString(),
                    exportAll: 'Exportar para o Excel'.GetString(),
                    exportSelectedRows: 'Exportar Linhas Selecionadas'.GetString()
                }
            },
            filterRow: {
                visible: this.exibirLinhaFiltro,
                applyFilterText: 'Aplicar Filtro'.GetString(),
                showAllText: 'Mostrar Todos'.GetString(),
                resetOperationText: 'Reiniciar'.GetString(),
                operationDescriptions: {
                    between: 'Entre'.GetString(),
                    contains: 'Contém'.GetString(),
                    endsWith: 'Termina com'.GetString(),
                    equal: 'Igual'.GetString(),
                    greaterThan: 'Maior que'.GetString(),
                    greaterThanOrEqual: 'Maior ou igual'.GetString(),
                    lessThan: 'Menor que'.GetString(),
                    lessThanOrEqual: 'Menor ou igual'.GetString(),
                    notContains: 'Não contém'.GetString(),
                    notEqual: 'Não é igual'.GetString(),
                    startsWith: 'Começa com'.GetString()
                }
            },
            headerFilter: {
                visible: this.exibirLinhaFiltro,
                height: 220,
                texts: {
                    cancel: 'Cancelar'.GetString(),
                    ok: 'OK'.GetString(),
                    emptyValue: '(vazios)'.GetString(),
                    false: 'falso'.GetString()
                },
                width: 250
            },
            searchPanel: {
                visible: this.exibirPainelPesquisa,
                placeholder: 'Procurar na Grade'.GetString(),
                searchVisibleColumnsOnly: false,
                width: 250,
            },
            groupPanel: {
                visible: this.exibirAgrupamento,
                emptyPanelText: 'Arraste uma coluna para agrupar'.GetString()
            },
            grouping: {
                contextMenuEnabled: this.exibirAgrupamento,
                texts: {
                    groupByThisColumn: 'Agupar por esta coluna'.GetString(),
                    groupContinuedMessage: 'Continuação da página anterior'.GetString(),
                    groupContinuesMessage: 'Continua na próxima página'.GetString(),
                    ungroup: 'Desagrupar'.GetString(),
                    ungroupAll: 'Desagrupar todos'.GetString()
                }
            },
            sorting: {
                mode: this.permitirOrdenacao ? 'single' : 'none',
                ascendingText: 'Classificação Crescente'.GetString(),
                descendingText: 'Classificação Decrescente'.GetString(),
                clearText: 'Limpar Classificação'.GetString()
            },
            noDataText: 'Não existem dados para mostrar'.GetString(),
            loadPanel: {
                text: 'Carregando...'.GetString()
            },
            height: this.alturaGrade + 'px',
            // stateStoring: {
            //     enabled: this.SalvarStateGrid,
            //     type: 'sessionStorage',
            //     storageKey: this.ID
            // },
            columnChooser: {
                emptyPanelText: 'Arraste uma coluna para ocultá-la'.GetString(),
                title: 'Seletor de Coluna'.GetString()
            },
            paging: {
                enabled: this.exibirPaginacao,
                pageSize: this.tamahoPaginacao
            },
            pager: {
                showPageSizeSelector: this.exibirPaginacao,
                allowedPageSizes: this.paginacoesPermitidas
            },
            columnResizingMode: 'widget',
            scrolling: {
                useNative: true,
                showScrollbar: 'always',
            },
        };
        // var totalizacoes = this.CriarTotalizacoes();
        // if (totalizacoes) {
        //     opt.summary = totalizacoes;
        // }
        // Habilita a edição da grid
        if (this.permitirEditarGrid) {
            opt.editing = {
                mode: 'cell',
                allowUpdating: true
            };
        }
        // //Habilita a seleção da linha
        // if (isSelecionarLinha) {
        //    opt.selection = {
        //        mode: 'multiple',
        //        showCheckBoxesMode: 'always',
        //        allowSelectAll: this.ExibirBotaoSelecionarTodos,
        //    }
        // }
        return opt;
    };
    DevExtremeGridViewDirective.prototype.setGridOption = function (optionName, value) {
        if (!optionName) {
            return;
        }
        if (!this.instance) {
            return;
        }
        this.instance.option(optionName, value);
    };
    DevExtremeGridViewDirective.prototype.atualizar = function () {
        this.instance.refresh();
    };
    DevExtremeGridViewDirective = __decorate([
        core_1.Directive({
            selector: '[devExtremeGridView]'
        })
    ], DevExtremeGridViewDirective);
    return DevExtremeGridViewDirective;
}());
exports.DevExtremeGridViewDirective = DevExtremeGridViewDirective;
//# sourceMappingURL=dev-extreme-grid-view.directive.js.map