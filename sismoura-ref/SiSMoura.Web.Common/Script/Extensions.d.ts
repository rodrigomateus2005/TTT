interface String {
    CNum: () => number;
    ConverterCaracter: () => string;
    FormatNumber: (casas?: number) => string;
    Format: (...args: string[]) => string;
    ToDate: () => Date;
    FormataData: () => string;
    startsWith(str: string): boolean;
    endsWith(str: string): boolean;
    soNumeros(): string;
    GetString: () => string;
}
interface StringConstructor {
    IsNullOrWhiteSpace: (value: string) => boolean;
}
interface Number {
    Format: (casas?: number) => string;
}
interface Array<T> {
    Sum(prop: string): number;
    Max(prop: string): number;
    FirstOrDefault(FieldName: string, valor: any): T;
    FindAll(FieldName: string, valor: any): Array<T>;
}
interface Date {
    FormataData: () => string;
    FormataHoraSismoura: () => string;
    FormataHoraMinSegSismoura: () => string;
    DateAdd: (date: any, type: any, amount: any) => Date;
    toNoon: () => Date;
    GetMesExtenso: () => string;
    dateAdd: (interval: string, n: number) => Date;
    addDays: (n: number) => Date;
    addMonths: (n: number) => Date;
    firstDayOfMonth: () => Date;
    lastDayOfMonth: () => Date;
    isBefore: (date: Date, orEqual: boolean) => boolean;
    isAfter: (date: Date, orEqual: boolean) => boolean;
    isBetween: (a: Date, b: Date, orEqual: boolean) => boolean;
    FormataDataHora: () => string;
    ToDate: () => Date;
}
//# sourceMappingURL=Extensions.d.ts.map