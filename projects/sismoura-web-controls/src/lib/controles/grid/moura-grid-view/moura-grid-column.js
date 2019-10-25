"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MouraGridColumn = /** @class */ (function () {
    function MouraGridColumn(name) {
        this.$name = name;
        this.visible = true;
        this.width = 100;
    }
    Object.defineProperty(MouraGridColumn.prototype, "instaceDevextreme", {
        get: function () {
            if (!this.mouraGridViewController || !this.mouraGridViewController.devExtremeGridView) {
                return null;
            }
            return this.mouraGridViewController.devExtremeGridView.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridColumn.prototype, "mouraGridViewController", {
        get: function () {
            return this.$mouraGridViewController;
        },
        set: function (value) {
            this.$mouraGridViewController = value;
            this.iniciarColuna();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridColumn.prototype, "name", {
        get: function () {
            return this.$name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridColumn.prototype, "fieldName", {
        get: function () {
            return this.$fieldName;
        },
        set: function (value) {
            this.$fieldName = value;
            this.setColumnOption('dataField', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridColumn.prototype, "caption", {
        get: function () {
            return this.$caption;
        },
        set: function (value) {
            this.$caption = value;
            this.setColumnOption('caption', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridColumn.prototype, "width", {
        get: function () {
            return this.$width;
        },
        set: function (value) {
            this.$width = value;
            this.setColumnOption('width', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridColumn.prototype, "visible", {
        get: function () {
            return this.$visible;
        },
        set: function (value) {
            this.$visible = value;
            this.setColumnOption('visible', value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridColumn.prototype, "allowEditing", {
        get: function () {
            return this.$allowEditing;
        },
        set: function (value) {
            this.$allowEditing = value;
            this.setColumnOption('allowEditing', value);
        },
        enumerable: true,
        configurable: true
    });
    MouraGridColumn.prototype.iniciarColuna = function () {
        if (!this.instaceDevextreme) {
            return;
        }
        var opt = this.instaceDevextreme.columnOption(this.name);
        if (!opt) {
            this.instaceDevextreme.addColumn(this.getOptDevExpressColumn());
        }
        else {
            this.settarTodasAsPropriedades();
        }
    };
    MouraGridColumn.prototype.getOptDevExpressColumn = function () {
        var opt = {
            index: this.instaceDevextreme.columnCount(),
            name: this.name,
            dataField: this.fieldName,
            caption: this.caption,
            allowEditing: this.allowEditing,
            width: this.width,
            visible: this.visible
        };
        return opt;
    };
    MouraGridColumn.prototype.settarTodasAsPropriedades = function () {
        this.fieldName = this.fieldName;
        this.caption = this.caption;
        this.allowEditing = this.allowEditing;
        this.width = this.width;
        this.visible = this.visible;
    };
    MouraGridColumn.prototype.setColumnOption = function (optionName, value) {
        if (!optionName) {
            return;
        }
        if (!this.instaceDevextreme) {
            return;
        }
        this.instaceDevextreme.columnOption(this.name, optionName, value);
    };
    return MouraGridColumn;
}());
exports.MouraGridColumn = MouraGridColumn;
//# sourceMappingURL=moura-grid-column.js.map