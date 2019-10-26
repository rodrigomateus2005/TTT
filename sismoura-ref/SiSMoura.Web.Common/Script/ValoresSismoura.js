var ValoresSismoura = /** @class */ (function () {
    function ValoresSismoura() {
    }
    Object.defineProperty(ValoresSismoura, "ApplicationPath", {
        get: function () {
            return this._applicationPath;
        },
        set: function (value) {
            if (value && value != null) {
                if (value.charAt(value.length - 1) != "/") {
                    value += "/";
                }
            }
            this._applicationPath = value;
        },
        enumerable: true,
        configurable: true
    });
    return ValoresSismoura;
}());
//# sourceMappingURL=ValoresSismoura.js.map