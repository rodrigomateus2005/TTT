declare class MouraGridViewJSClickBotaoLinhaEventArgs extends MouraEventArgs {
    commandName: string;
    buttonText: string;
    rowIndex: number;
    rowKey: any;
    data: any;
    columnIndex: number;
    cellElement: JQuery;
}
declare class MouraGridViewJSItemCancelavelEventArgs extends MouraEventArgs {
    index: number;
    item: any;
    cancelar: boolean;
}
declare class MouraGridViewJSItemEventArgs extends MouraEventArgs {
    index: number;
    item: any;
    propriedade: string;
}
declare class MouraGridViewCalculateCustomSummary extends MouraEventArgs {
    options: any;
}
/**
    EventArgs para o evento CellPrepared.
*/
declare class MouraGridViewJSCellPreparedEventArgs extends MouraEventArgs {
    /**
     * The widget instance.
     */
    component: Object;
    /**
     * The widget's container.
     */
    element: JQuery;
    /**
     * Data that is available for binding against the element. Available only in the Knockout and AngularJS approaches.
     */
    model: Object;
    /**
     * The object of a data source represented by the row to which the prepared cell belongs. This field is unavailable if the rowType field is set to "header", "filter" or "totalFooter".
     */
    data: Object;
    /**
     * The key of the row. If a field providing keys is not specified in a data source, the whole data object is considered the key. This field is unavailable if the rowType field is set to "header", "filter" or "totalFooter".
     */
    key: any;
    /**
     * The value of the prepared cell as it is specified in the data source.
     */
    value: any;
    /**
     * The value displayed by the prepared cell. Differs from the value field only when the column to which the prepared cell belongs uses lookup.
     */
    displayValue: string;
    /**
     * The value of the current cell in a string format. Use this field to get the value with applied format and precision.
     */
    text: string;
    /**
     * The index of the column to which the prepared cell belongs. For more information on how this index is calculated, refer to the Calculating the Column Index topic.
     */
    columnIndex: number;
    /**
     * The settings of the column to which the prepared cell belongs.
     */
    column: Object;
    /**
     * The visible index of the clicked row. When you have several pages in a grid, grid rows are indexed beginning with 0 on each page. Note that group rows are also counted and, thus, have row indexes. For further information about row indexes, see the Grid Rows topic.
     */
    rowIndex: number;
    /**
     * The type of the row to which the prepared cell belongs. This field can be set to one of the following values: "data", "detail", "group", "groupFooter", "header", "filter" or "totalFooter". Use this field to distinguish rows by type.
     */
    rowType: string;
    /**
     * The settings of the row to which the cell belongs.
     */
    row: DevExpress.ui.dxDataGridRow;
    /**
     * Indicates whether the prepared row is selected. This field is useful if the rowType field is set to "data"
     */
    isSelected: boolean;
    /**
     * Indicates whether or not the group cell is expanded. This field is unavailable if the rowType field is set to "header", "filter" or "totalFooter".
     */
    isExpanded: boolean;
    /**
     * The element of the prepared cell.
     */
    cellElement: JQuery;
}
interface dxDataGridSelectionChangedEventArgs {
    selectedRowsData: any[];
    selectedRowKeys: any[];
    currentSelectedRowKeys: any[];
    currentDeselectedRowKeys: any[];
    component: any;
    element: JQuery;
    model: any;
}
declare class MouraGridViewJSCellComboBoxOpened extends MouraEventArgs {
    component: DevExpress.ui.dxSelectBox;
    element: JQuery;
    data: Object;
    key: any;
    columnIndex: number;
    column: Object;
    rowIndex: number;
    dataIndex: number;
    row: DevExpress.ui.dxDataGridRow;
    isSelected: boolean;
    cellElement: JQuery;
}
//# sourceMappingURL=MouraGridViewJSClasses.d.ts.map