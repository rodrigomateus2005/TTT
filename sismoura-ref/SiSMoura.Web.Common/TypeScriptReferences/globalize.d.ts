// Type definitions for Globalize
// Project: https://github.com/jquery/globalize
// Definitions by: Aram Taieb <https://github.com/afromogli/>
// Definitions: https://github.com/afromogli/DefinitelyTyped

interface NumberFormatterOptions {
    minimumIntegerDigits?: number;
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    minimumSignificantDigits?: number;
    maximumSignificantDigits?: number;
    round?: string;
    useGrouping?: boolean;
}

interface DateFormatterOptions {
}

interface NumberParserOptions {
    style?: string;
}

interface Cldr {
    main(path: string): string;
}

interface GlobalizeStatic {
    load(jsonData: any): void;
    locale(locale: string): Cldr;
    cldr: Cldr;



    numberFormatter(options?: NumberFormatterOptions): (value: number) => string;
    formatNumber(value: number, options?: NumberFormatterOptions): string;

    numberParser(options?: NumberParserOptions): (value: string) => number;
    parseNumber(value: string, options?: NumberParserOptions): number;

    parseDate(value: string, options?: DateFormatterOptions): Date;
    dateFormatter(options?: DateFormatterOptions): (value: Date) => string;
}

declare var Globalize: GlobalizeStatic; 