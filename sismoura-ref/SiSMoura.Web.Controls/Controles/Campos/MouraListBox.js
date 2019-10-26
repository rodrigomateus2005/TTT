var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MouraListBoxClickEventArgs = /** @class */ (function () {
    function MouraListBoxClickEventArgs() {
    }
    return MouraListBoxClickEventArgs;
}());
var MouraListBox = /** @class */ (function (_super) {
    __extends(MouraListBox, _super);
    function MouraListBox(id) {
        var _this = _super.call(this, id) || this;
        if (!_this.DoubleClick)
            _this.DoubleClick = new MouraGenericEventHandler();
        return _this;
    }
    Object.defineProperty(MouraListBox.prototype, "DoubleClick", {
        get: function () {
            return window[this.ID + "_DoubleClick"];
        },
        set: function (value) {
            window[this.ID + "_DoubleClick"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraListBox.prototype, "Lista", {
        get: function () {
            return $('#' + this.ID + '_List')[0];
        },
        enumerable: true,
        configurable: true
    });
    MouraListBox.prototype.IniciarEventos = function () {
        if (this.Lista) {
            adicionarEventoJQuery(this.Lista, "dblclick", this.OnDblClickLista, this);
        }
    };
    MouraListBox.prototype.OnDblClickLista = function (e) {
        if (!e.target.nodeName)
            return;
        if (("" + e.target.nodeName).toUpperCase() != "OPTION")
            return;
        var args = new MouraListBoxClickEventArgs();
        args.Text = e.target.text;
        args.Value = e.target.value;
        this.DoubleClick.FireEvent(this, args);
    };
    MouraListBox.prototype.AdicionarItem = function (texto, valor) {
        if (this.Lista) {
            $(this.Lista).append($('<option>', {
                value: valor,
                text: texto
            }));
        }
    };
    MouraListBox.prototype.RemoverTodosItens = function () {
        $(this.Lista).find('option').remove();
    };
    MouraListBox.prototype.RemoverItem = function (index) {
        $(this.Lista).find('option').slice(index, index + 1).detach();
    };
    Object.defineProperty(MouraListBox.prototype, "SelectedIndex", {
        get: function () {
            return this.Lista.selectedIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraListBox.prototype, "SelectedValue", {
        get: function () {
            if (this.SelectedIndex >= 0) {
                var opt = this.Lista.options[this.SelectedIndex];
                var t = opt;
                //return <string><any> opt.value;     
                return t.value;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    return MouraListBox;
}(MouraCampo));
//# sourceMappingURL=MouraListBox.js.map