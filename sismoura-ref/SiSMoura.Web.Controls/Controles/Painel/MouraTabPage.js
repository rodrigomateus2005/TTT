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
var MouraTabPage = /** @class */ (function (_super) {
    __extends(MouraTabPage, _super);
    function MouraTabPage(id) {
        return _super.call(this, id) || this;
    }
    Object.defineProperty(MouraTabPage.prototype, "Text", {
        get: function () {
            return this._Text;
        },
        set: function (value) {
            this._Text = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTabPage.prototype, "Enabled", {
        get: function () {
            return this._Enabled;
        },
        set: function (value) {
            this._Enabled = value;
            if (this.MouraTabPanel) {
                if ($(this.MouraTabPanel.Painel).tabs("instance")) {
                    if (value) {
                        $(this.MouraTabPanel.Painel).tabs("enable", 1);
                        $(this.MouraTabPanel.Painel).show();
                    }
                    else {
                        $(this.MouraTabPanel.Painel).tabs("disable", 1);
                    }
                    this.validarTabAtiva();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTabPage.prototype, "Visible", {
        get: function () {
            return this._Visible;
        },
        set: function (value) {
            this._Visible = value;
            if (this.MouraTabPanel) {
                if ($(this.MouraTabPanel.Painel).tabs("instance")) {
                    if (this.TabIndex > -1 && this.Painel) {
                        var liCabecalho = $(this.MouraTabPanel.Cabecalho).find('[aria-controls="' + this.Painel.id + '"]');
                        if (value) {
                            liCabecalho.show();
                            $(this.MouraTabPanel.Painel).show();
                        }
                        else {
                            liCabecalho.hide();
                        }
                        this.validarTabAtiva();
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTabPage.prototype, "MouraTabPanel", {
        get: function () {
            return this._MouraTabPanel;
        },
        set: function (value) {
            this._MouraTabPanel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTabPage.prototype, "TabIndex", {
        get: function () {
            if (this.MouraTabPanel) {
                return $(this.MouraTabPanel.PainelInterno).find("[aria-labelledby]").index(this.Painel);
            }
            return -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTabPage.prototype, "Painel", {
        get: function () {
            return window[this.ID + "_Painel"];
        },
        enumerable: true,
        configurable: true
    });
    MouraTabPage.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
    };
    MouraTabPage.prototype.validarTabAtiva = function () {
        if (this.MouraTabPanel && this.MouraTabPanel.Tabs && this.MouraTabPanel.Tabs.length > 0 && this.TabIndex < this.MouraTabPanel.Tabs.length && this.TabIndex > -1) {
            var tabActive;
            var tabNotEnableVisible;
            if (this.MouraTabPanel.ActiveTabIndex > -1 && this.MouraTabPanel.ActiveTabIndex < this.MouraTabPanel.Tabs.length) {
                tabActive = this.MouraTabPanel.Tabs[this.MouraTabPanel.ActiveTabIndex];
            }
            if (!tabActive) {
                this.MouraTabPanel.ActiveTabIndex = this.TabIndex;
                tabActive = this;
            }
            var achou = true;
            if (!tabActive.Visible || !tabActive.Enabled) {
                achou = false;
                for (var i = 0; i < this.MouraTabPanel.Tabs.length; i++) {
                    var tab = this.MouraTabPanel.Tabs[i];
                    if (tab.Visible && tab.Enabled) {
                        this.MouraTabPanel.ActiveTabIndex = tab.TabIndex;
                        achou = true;
                        break;
                    }
                    if (tab.Visible && !tab.Enabled && !tabNotEnableVisible) {
                        tabNotEnableVisible = tab;
                    }
                }
            }
            //if (!achou && tabNotEnableVisible) {
            //    this.MouraTabPanel.ActiveTabIndex = tabNotEnableVisible.TabIndex;
            //    achou = true;
            //}
            if (!achou) {
                $(this.MouraTabPanel.Painel).hide();
            }
        }
    };
    return MouraTabPage;
}(MouraControl));
//# sourceMappingURL=MouraTabPage.js.map