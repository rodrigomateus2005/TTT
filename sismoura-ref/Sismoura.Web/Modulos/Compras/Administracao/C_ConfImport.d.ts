declare class C_ConfImport extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Configuracao_Importacao_Tabela> {
    readonly Grid: MouraGridViewJSEditavel;
    Itens: SiSMoura.Core.Entity.Configuracao_Importacao_Tabela_Campo[];
    Item: SiSMoura.Core.Entity.Configuracao_Importacao_Tabela_Campo;
    protected Init(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Configuracao_Importacao_Tabela): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Configuracao_Importacao_Tabela): void;
}
declare var c_ConfImport: C_ConfImport;
//# sourceMappingURL=C_ConfImport.d.ts.map