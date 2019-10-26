declare class C_AdicBD extends MouraPageAngular {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnEditouItem(s: any, e: MouraGridViewJSItemEventArgs): void;
    protected GravarItem(item: SiSMoura.Core.Entity.Rh_Adicional_Banco_Horas): void;
    protected PreencherGrade(): void;
}
declare const c_AdicBD: C_AdicBD;
//# sourceMappingURL=C_AdicBD.d.ts.map