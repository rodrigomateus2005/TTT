declare class MouraContaCorrenteLista extends MouraCampo {
    readonly CheckBox: MouraCheckBox;
    readonly Lista: MouraCheckBoxList;
    readonly HiddenSourceJSON: HTMLInputElement;
    readonly hdnEmpresas: HTMLInputElement;
    DataSource: SiSMoura.Core.Entity.Conta_Corrente[];
    constructor(id: string);
    protected IniciarEventos(): void;
    OnCheckInativos(): void;
    Preencher(codEmpresas: number[], somenteAtivos: boolean): void;
}
//# sourceMappingURL=MouraContaCorrenteLista.d.ts.map