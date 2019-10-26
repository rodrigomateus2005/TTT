declare class MouraListControlEmpresa extends MouraListControl {
    constructor(id: string);
    protected GetEmpresas(codigoUsuario: number, regioes: string, estados: string, cidades: string): SiSMoura.Core.Entity.EmpresaRetorno[];
    protected GetMatrizes(codigoUsuario: number): SiSMoura.Core.Entity.EmpresaRetorno[];
    protected GetFiliais(codigoUsuario: number, Matriz: number): SiSMoura.Core.Entity.EmpresaRetorno[];
}
//# sourceMappingURL=MouraListControlEmpresa.d.ts.map