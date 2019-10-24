class MouraGridColumn {
  private get instaceDevextreme(): DevExpress.ui.dxDataGrid {
    if (!this.mouraGridViewController || !this.mouraGridViewController.devExtremeGridView) {
      return null;
    }

    return this.mouraGridViewController.devExtremeGridView.instance;
  }

  private $mouraGridViewController: MouraGridViewController;
  public get mouraGridViewController(): MouraGridViewController {
    return this.$mouraGridViewController;
  }
  public set mouraGridViewController(value: MouraGridViewController) {
    this.$mouraGridViewController = value;

    this.iniciarColuna();
  }

  private $name: string;
  public get name(): string {
    return this.$name;
  }

  private $fieldName: string;
  public get fieldName(): string {
    return this.$fieldName;
  }
  public set fieldName(value: string) {
    this.$fieldName = value;

    this.setColumnOption('dataField', value);
  }

  private $caption: string;
  public get caption(): string {
    return this.$caption;
  }
  public set caption(value: string) {
    this.$caption = value;

    this.setColumnOption('caption', value);
  }

  private $width: number;
  public get width(): number {
    return this.$width;
  }
  public set width(value: number) {
    this.$width = value;

    this.setColumnOption('width', value);
  }

  private $visible: boolean;
  public get visible(): boolean {
    return this.$visible;
  }
  public set visible(value: boolean) {
    this.$visible = value;

    this.setColumnOption('visible', value);
  }

  private $allowEditing: boolean;
  public get allowEditing(): boolean {
    return this.$allowEditing;
  }
  public set allowEditing(value: boolean) {
    this.$allowEditing = value;

    this.setColumnOption('allowEditing', value);
  }

  formatString: string;
  casasDecimais: number;
  isColunaSelecao: boolean;
  isEditavel: boolean;
  isObrigatorio: boolean;
  maxLength: number;
  dataSourceCombo: string;
  valueFieldName: string;
  textFieldName: string;
  minValue: number;
  maxValue: number;
  groupIndex: number;
  isColunaAgrupamento: boolean;

  constructor(name: string) {
    this.$name = name;
    this.visible = true;
    this.width = 100;
  }

  public iniciarColuna() {
    if (!this.instaceDevextreme) {
      return;
    }

    const opt = this.instaceDevextreme.columnOption(this.name);

    if (!opt) {
      this.instaceDevextreme.addColumn(this.getOptDevExpressColumn());
    } else {
      this.settarTodasAsPropriedades();
    }
  }

  protected getOptDevExpressColumn(): DevExpress.ui.dxDataGridColumn {
    const opt: DevExpress.ui.dxDataGridColumn = {
      index: this.instaceDevextreme.columnCount()
      , name: this.name
      , dataField: this.fieldName
      , caption: this.caption
      , allowEditing: this.allowEditing
      , width: this.width
      , visible: this.visible
    };

    return opt;
  }

  protected settarTodasAsPropriedades(): void {
    this.fieldName = this.fieldName;
    this.caption = this.caption;
    this.allowEditing = this.allowEditing;
    this.width = this.width;
    this.visible = this.visible;
  }

  protected setColumnOption(optionName: string, value: any) {
    if (!optionName) {
      return;
    }

    if (!this.instaceDevextreme) {
      return;
    }

    this.instaceDevextreme.columnOption(this.name, optionName, value);
  }
}
