declare class C_CfgCom extends MouraPage {
    readonly txtContaContabil: MouraTextBoxProcura;
    readonly cboContaCorrente: MouraContaCorrenteCombo;
    protected Init(): void;
    protected OnAntesAbrirProcuraContaContabil(s: any, e: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    protected OnDepoisBuscarContaContabil(): void;
}
declare const c_CfgCom: C_CfgCom;
//# sourceMappingURL=C_CfgCom.d.ts.map