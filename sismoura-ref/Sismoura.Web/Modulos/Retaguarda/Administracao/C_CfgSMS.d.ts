declare class C_CfgSMS extends MouraPageAngular {
    Configuracao: SiSMoura.Core.Entity.Configuracao_Sms;
    readonly lblStatus: MouraLabel;
    readonly btnAtivarEnvioSMS: MouraButton;
    readonly btnSalvarConfig: MouraButton;
    OnPageLoad(): void;
    Init(): void;
    private GetConfiguracao;
    private GetMacAddressHash;
    private OnClickAtivar;
    private GravarConfiguracao;
    private OnClickSalvar;
}
declare const c_CfgSMS: C_CfgSMS;
//# sourceMappingURL=C_CfgSMS.d.ts.map