declare var translateService: any;
declare var translateMoura: {
    idioma: string;
    traducao: {
        [key: string]: string;
    };
};
declare class MouraPageAngular extends MouraPage {
    constructor();
    protected GetScope(): ng.IScope;
    protected readonly hdnIsModalAg: HTMLInputElement;
    protected RefreshAngular(): void;
    protected readonly IsModal: boolean;
    protected Init(): void;
}
declare function angularErrorHandler($log: any): (exception: any, cause: any) => void;
declare function configurarTranslateProvider($translateProvider: any): void;
declare function setNgModelRadioButton(): void;
declare var Sys: any;
//# sourceMappingURL=MouraPageAngular.d.ts.map