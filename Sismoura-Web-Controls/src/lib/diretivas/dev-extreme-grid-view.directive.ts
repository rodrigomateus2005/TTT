import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[devExtremeGridView]'
})
export class DevExtremeGridViewDirective {

  public instance: DevExpress.ui.dxDataGrid;

    private $alturaGrade: number;
    public get alturaGrade(): number {
        return this.$alturaGrade;
    }
    public set alturaGrade(value: number) {
        this.$alturaGrade = value;

        this.setGridOption('height', value + 'px');
    }

    private $permitirMoverColunas: boolean;
    public get permitirMoverColunas(): boolean {
        return this.$permitirMoverColunas;
    }
    public set permitirMoverColunas(value: boolean) {
        this.$permitirMoverColunas = value;

        this.setGridOption('allowColumnReordering', value);
    }

    private $permitirOrdenacao: boolean;
    public get permitirOrdenacao(): boolean {
        return this.$permitirOrdenacao;
    }
    public set permitirOrdenacao(value: boolean) {
        this.$permitirOrdenacao = value;

        if (value) {
            this.setGridOption('sorting.mode', 'single');
        } else {
            this.setGridOption('sorting.mode', 'none');
        }
    }

    private $permitirEditarGrid: boolean;
    public get permitirEditarGrid(): boolean {
        return this.$permitirEditarGrid;
    }
    public set permitirEditarGrid(value: boolean) {
        this.$permitirEditarGrid = value;

        if (value) {
            this.setGridOption('editing', {
                mode: 'cell',
                allowUpdating: true
            });
        } else {
            this.setGridOption('editing', null);
        }
    }

    private $exibirLinhaFiltro: boolean;
    public get exibirLinhaFiltro(): boolean {
        return this.$exibirLinhaFiltro;
    }
    public set exibirLinhaFiltro(value: boolean) {
        this.$exibirLinhaFiltro = value;

        this.setGridOption('filterRow.visible', value);
        this.setGridOption('headerFilter.visible', value);
    }

    private $exibirPainelPesquisa: boolean;
    public get exibirPainelPesquisa(): boolean {
        return this.$exibirPainelPesquisa;
    }
    public set exibirPainelPesquisa(value: boolean) {
        this.$exibirPainelPesquisa = value;

        this.setGridOption('searchPanel.visible', value);
    }

    private $exibirAgrupamento: boolean;
    public get exibirAgrupamento(): boolean {
        return this.$exibirAgrupamento;
    }
    public set exibirAgrupamento(value: boolean) {
        this.$exibirAgrupamento = value;

        this.setGridOption('groupPanel.visible', value);
        this.setGridOption('grouping.contextMenuEnabled', value);
    }

    private $exibirPaginacao: boolean;
    public get exibirPaginacao(): boolean {
        return this.$exibirPaginacao;
    }
    public set exibirPaginacao(value: boolean) {
        this.$exibirPaginacao = value;

        this.setGridOption('paging.enabled', value);
        this.setGridOption('pager.showPageSizeSelector', value);
    }

    private $tamahoPaginacao: number;
    public get tamahoPaginacao(): number {
        return this.$tamahoPaginacao;
    }
    public set tamahoPaginacao(value: number) {
        this.$tamahoPaginacao = value;

        this.setGridOption('paging.pageSize', value);
    }

    private $paginacoesPermitidas: number[];
    public get paginacoesPermitidas(): number[] {
        return this.$paginacoesPermitidas;
    }
    public set paginacoesPermitidas(value: number[]) {
        this.$paginacoesPermitidas = value;

        this.setGridOption('paging.pageSize', value);
    }

    private $ngDataSource: any[];
    public get ngDataSource(): any[] {
        return this.$ngDataSource;
    }
    public set ngDataSource(value: any[]) {
        this.$ngDataSource = value;

        const ds = {
            store: {
                type: 'array',
                data: value
            }
        };

        this.setGridOption('dataSource', ds);
    }

    public constructor(private elementRef: ElementRef) {
        this.alturaGrade = 300;
        this.permitirOrdenacao = true;
        this.permitirMoverColunas = true;
        this.exibirLinhaFiltro = true;
        this.paginacoesPermitidas = [50, 100, 200];

        this.instance = $(elementRef.nativeElement).dxDataGrid(this.getOptDevExpressGrid()).dxDataGrid('instance');
    }

    protected getOptDevExpressGrid(): DevExpress.ui.dxDataGridOptions {
        let opt: DevExpress.ui.dxDataGridOptions;

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
            // onRowUpdated: $.proxy(this.OnRowUpdated(), this),
            // onEditorPreparing: $.proxy(this.OnEditorPreparing(), this),
            // onEditorPrepared: $.proxy(this.OnEditorPrepared, this),
            // onSelectionChanged: $.proxy(this.OnSelectionChanged, this),
            // onKeyDown: $.proxy(this.OnKeyDown, this),
            // onRowClick: $.proxy(this.OnRowClick, this),
            // onCellClick: $.proxy(this.OnCellClick, this),
            // onCellPrepared: $.proxy(this.OnCellPrepared, this),
            // onContextMenuPreparing: $.proxy(this.OnContextMenuPreparing, this),
            // onRowValidating: $.proxy(this.OnRowValidating, this),
            // onContentReady: $.proxy(this.OnContentReady, this),
            // onFileSaving: $.proxy(this.OnFileSaving, this),
            // onExporting: $.proxy(this.OnExporting, this),
            // onExported: $.proxy(this.OnExported, this)
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
    }

    protected setGridOption(optionName: string, value: any) {
        if (!optionName) {
            return;
        }

        if (!this.instance) {
            return;
        }

        this.instance.option(optionName, value);
    }

    public atualizar() {
        this.instance.refresh();
    }

}
