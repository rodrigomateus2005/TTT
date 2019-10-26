declare class MouraGridStackPanelCoordenadas {
    X: number;
    Y: number;
    Width: number;
    Height: number;
}
declare class MouraGridStackPanel extends MouraControl {
    readonly Panel: HTMLDivElement;
    readonly InstaceGridStack: GridStack;
    constructor(id: string);
    protected IniciarEventos(): void;
    GetPanelsLocations(): MouraGridStackPanelCoordenadas[];
}
//# sourceMappingURL=MouraGridStackPanel.d.ts.map