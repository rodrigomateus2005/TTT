String.prototype.CNum = function () {
    var retorno;
    var s = this;
    s = s.toString();
    try {
        if (s == null || s == undefined) {
            s = '';
        }
        retorno = Globalize.parseNumber(s.toString());
        if (isNaN(retorno)) {
            retorno = 0.0;
        }
    }
    catch (err) {
        retorno = 0.0;
    }
    return retorno;
};
String.prototype.FormataData = function () {
    var s = this;
    return s.ToDate().FormataData();
};
String.prototype.ToDate = function () {
    var s = this;
    s = s.toString();
    if (s.indexOf("/Date(") >= 0) {
        return eval("new " + replaceAll(s, "/", ""));
    }
    else if (s.length == 5 && s.indexOf(":") == 2) {
        return Globalize.parseDate(s, { time: "short" });
    }
    else if (s.length == 8 && s.indexOf(":") == 2 && s.indexOf(":", 3) == 5) {
        return Globalize.parseDate(s, { time: "medium" });
    }
    else {
        return Globalize.parseDate(s);
    }
};
String.prototype.ConverterCaracter = function () {
    var str = this;
    //       ¯_(ツ)_/¯
    var mapaAcentosHex = {
        a: /[\xE0-\xE6]/g,
        A: /[\xC0-\xC6]/g,
        e: /[\xE8-\xEB]/g,
        E: /[\xC8-\xCB]/g,
        i: /[\xEC-\xEF]/g,
        I: /[\xCC-\xCF]/g,
        o: /[\xF2-\xF6]/g,
        O: /[\xD2-\xD6]/g,
        u: /[\xF9-\xFC]/g,
        U: /[\xD9-\xDC]/g,
        c: /\xE7/g,
        C: /\xC7/g,
        n: /\xF1/g,
        N: /\xD1/g,
    };
    for (var letra in mapaAcentosHex) {
        var expressaoRegular = mapaAcentosHex[letra];
        str = str.replace(expressaoRegular, letra);
    }
    return str;
};
String.prototype.Format = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var s = this;
    if (args) {
        for (var i = 0; i < args.length - 1; i++) {
            var reg = new RegExp("\\{" + i + "\\}", "gm");
            s = s.replace(reg, args[i + 1]);
        }
    }
    return s;
};
String.prototype.FormatNumber = function (casas) {
    var s = this;
    return s.toString().CNum().Format(casas);
};
String.IsNullOrWhiteSpace = function (value) {
    var s = value;
    if (!s) {
        return true;
    }
    if (s == null || s == undefined) {
        return true;
    }
    s = "" + s;
    if (s.trim() == "") {
        return true;
    }
    return false;
};
String.prototype.startsWith = function (str) {
    return str.length > 0 && this.substring(0, str.length) === str;
};
String.prototype.endsWith = function (str) {
    return str.length > 0 && this.substring(this.length - str.length, this.length) === str;
};
String.prototype.soNumeros = function () {
    var s = this;
    if (!s) {
        s = "";
    }
    s = s.replace(/\D/g, '');
    return s;
};
String.prototype.GetString = function () {
    var s = this;
    s = s.trim();
    try {
        if (!String.IsNullOrWhiteSpace(translateMoura.traducao[s])) {
            return translateMoura.traducao[s];
        }
        else {
            return s;
        }
    }
    catch (e) {
        return s;
    }
};
Number.prototype.Format = function (casas) {
    var n = this;
    if (!casas) {
        casas = 0;
    }
    var tmpGroup = true;
    if (casas <= 0) {
        tmpGroup = false;
    }
    return Globalize.numberFormatter({ useGrouping: tmpGroup, minimumFractionDigits: casas, maximumFractionDigits: casas })(n + 0);
};
if (!Array.prototype.Sum) {
    Object.defineProperty(Array.prototype, 'Sum', {
        enumerable: false,
        value: function (FieldName) {
            var total = 0;
            for (var i = 0, _len = this.length; i < _len; i++) {
                total += CNum(this[i][FieldName]);
            }
            return total;
        }
    });
}
if (!Array.prototype.Max) {
    Object.defineProperty(Array.prototype, 'Max', {
        enumerable: false,
        value: function (FieldName) {
            var maiorContador = 0;
            if (this.length > 0) {
                maiorContador = Math.max.apply(Math, this.map(function (o) { return o[FieldName]; }));
            }
            else {
                maiorContador = 0;
            }
            return maiorContador;
        }
    });
}
if (!Array.prototype.FirstOrDefault) {
    Object.defineProperty(Array.prototype, 'FirstOrDefault', {
        enumerable: false,
        value: function (FieldName, valor) {
            var retorno = null;
            for (var i = 0, _len = this.length; i < _len; i++) {
                if (this[i][FieldName] == valor) {
                    retorno = this[i];
                    break;
                }
            }
            return retorno;
        }
    });
}
if (!Array.prototype.FindAll) {
    Object.defineProperty(Array.prototype, 'FindAll', {
        enumerable: false,
        value: function (FieldName, valor) {
            var retorno = [];
            for (var i = 0, _len = this.length; i < _len; i++) {
                if (this[i][FieldName] == valor) {
                    retorno.push(this[i]);
                }
            }
            return retorno;
        }
    });
}
Date.prototype.FormataData = function () {
    var n = this;
    if (n && n.getDate) {
        return Globalize.dateFormatter()(n);
    }
    else {
        return "";
    }
};
Date.prototype.FormataHoraSismoura = function () {
    var n = this;
    if (n && n.getDate) {
        return Globalize.dateFormatter({ skeleton: "Hm" })(n);
    }
    else {
        return "";
    }
};
Date.prototype.FormataHoraMinSegSismoura = function () {
    var n = this;
    if (n && n.getDate) {
        return Globalize.dateFormatter({ skeleton: "Hms" })(n);
    }
    else {
        return "";
    }
};
Date.prototype.ToDate = function () {
    var n = this;
    if (n) {
        if (typeof n === 'string') {
            return new Date(parseInt(n.substr(6)));
        }
        else if (typeof n === 'object') {
            return n;
        }
    }
    else {
        return new Date();
    }
};
Date.prototype.DateAdd = function (date, type, amount) {
    var y = date.getFullYear(), m = date.getMonth(), d = date.getDate();
    if (type === 'y') {
        y += amount;
    }
    ;
    if (type === 'm') {
        m += amount;
    }
    ;
    if (type === 'd') {
        d += amount;
    }
    ;
    return new Date(y, m, d);
};
//interface Object {
//    getVariavelPrivada: (nome: string) => any;
//}
Date.prototype.toNoon = function () {
    var d = new Date(this.getTime());
    d.setHours(12, 0, 0, 0);
    return d;
};
Date.prototype.dateAdd = function (interval, n) {
    if (isNaN(n = parseInt(("" + n), 10))) {
        //Only accpets numbers
        throw "The second parameter must be a number. \n You passed: " + n;
    }
    var dt = new Date(this.getTime());
    switch (interval.toLowerCase()) {
        case "y":
            { // year
                this.setFullYear(this.getFullYear() + n);
                break;
            }
        case "q":
            { // quarter
                this.setMonth(this.getMonth() + (n * 3));
                break;
            }
        case "m":
            { // month
                this.setMonth(this.getMonth() + n);
                break;
            }
        case "d": // day / day of year
        case "w":
            { // weekday
                var y = this.getFullYear();
                var m = this.getMonth();
                var d = this.getDate();
                var newDate = new Date(y, m, d, 12, 0, 0);
                newDate.setDate(d + n);
                this.setTime(newDate.getTime());
                //this.setUTCDate(this.getUTCDate() + n);
                //var diff = this.getTime() - (dt.getTime() + (n*84600000));
                //this.setMilliseconds(diff);
                break;
            }
        case "ww":
            { // week of year
                this.setDate(this.getDate() + (n * 7));
                break;
            }
        case "h":
            { // hour
                this.setHours(this.getHours() + n);
                break;
            }
        case "n":
            { // minute
                this.setMinutes(this.getMinutes() + n);
                break;
            }
        case "s":
            { // second
                this.setSeconds(this.getSeconds() + n);
                break;
            }
        case "ms":
            { // milli second
                this.setMilliseconds(this.getMilliseconds() + n);
                break;
            }
        default:
            {
                //list of elegible intervals.
                throw "The first parameter must be a string from this list: \n" +
                    "y, q, m, d, w, ww, h, n, s, or ms. You passed: " + interval;
            }
    }
    switch (interval.toLowerCase()) {
        case "d": // day / day of year
        case "w":
            { // weekday
                break;
            }
        default:
            {
                if (this.getDate() != dt.getDate()) {
                    this.setDate(0);
                }
            }
    }
    return this;
};
Date.prototype.addDays = function (n) {
    var dt = new Date(this.getTime());
    return dt.dateAdd("d", n);
};
Date.prototype.addMonths = function (n) {
    var dt = new Date(this.getTime());
    return dt.dateAdd("m", n);
};
Date.prototype.firstDayOfMonth = function () {
    var dt = new Date(this.getTime());
    var y = this.getFullYear();
    var m = this.getMonth();
    dt.setTime((new Date(y, m, 1, 12, 0, 0)).getTime());
    return dt;
};
Date.prototype.lastDayOfMonth = function () {
    var dt = new Date(this.getTime());
    return dt.firstDayOfMonth().addMonths(1).addDays(-1);
};
Date.prototype.isBefore = function (date, orEqual) {
    return this.getTime() < date.getTime() || (orEqual && this.getTime() == date.getTime());
};
Date.prototype.isAfter = function (date, orEqual) {
    return this.getTime() > date.getTime() || (orEqual && this.getTime() == date.getTime());
};
Date.prototype.isBetween = function (a, b, orEqual) {
    return a.isBefore(this, orEqual) && this.isBefore(b, orEqual);
};
Date.prototype.FormataDataHora = function () {
    var n = this;
    if (n && n.getDate) {
        return Globalize.dateFormatter({ skeleton: "yMd Hm" })(n);
    }
    else {
        return "";
    }
};
Date.prototype.GetMesExtenso = function () {
    var arrayMonth = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    var n = this;
    if (n && n.getDate) {
        return arrayMonth[n.getMonth()];
    }
    else {
        return "";
    }
};
//#endregion
//# sourceMappingURL=Extensions.js.map