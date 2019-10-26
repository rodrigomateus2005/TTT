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
var MouraTabPanel = /** @class */ (function (_super) {
    __extends(MouraTabPanel, _super);
    function MouraTabPanel(id) {
        var _this = _super.call(this, id) || this;
        if (!_this.ActiveTabChanged)
            _this.ActiveTabChanged = new MouraEventHandler();
        return _this;
    }
    Object.defineProperty(MouraTabPanel.prototype, "ActiveTabChanged", {
        get: function () {
            return window[this.ID + '_ActiveTabChanged'];
        },
        set: function (value) {
            window[this.ID + '_ActiveTabChanged'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTabPanel.prototype, "NomesTabs", {
        get: function () {
            return this._NomesTabs;
        },
        set: function (value) {
            this._NomesTabs = value;
            this.iniciarJqueryUITabs();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTabPanel.prototype, "ActiveTabIndex", {
        get: function () {
            return this.hdnActiveTabIndex.value.CNum();
        },
        set: function (value) {
            $(this.Painel).tabs("option", "active", value);
            this.hdnActiveTabIndex.value = value.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTabPanel.prototype, "hdnActiveTabIndex", {
        get: function () {
            return window[this.ID + "_hdnActiveTabIndex"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTabPanel.prototype, "Painel", {
        get: function () {
            return window[this.ID + "_Painel"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTabPanel.prototype, "PainelInterno", {
        get: function () {
            return window[this.ID + "_PainelInterno"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTabPanel.prototype, "Cabecalho", {
        get: function () {
            return window[this.ID + "_Cabecalho"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTabPanel.prototype, "Tabs", {
        get: function () {
            var retorno = [];
            if (this.NomesTabs) {
                for (var i = 0; i < this.NomesTabs.length; i++) {
                    var nomeTab = this.NomesTabs[i];
                    retorno.push(window[nomeTab + "_Object"]);
                }
            }
            return retorno;
        },
        enumerable: true,
        configurable: true
    });
    MouraTabPanel.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        this.iniciarJqueryUITabs();
    };
    MouraTabPanel.prototype.iniciarJqueryUITabs = function () {
        var _this = this;
        var instanciaTab = $(this.Painel).tabs("instance");
        if (!instanciaTab) {
            var cabecalhoTabs = $(this.Cabecalho);
            var disabled = [];
            for (var i = 0; i < this.Tabs.length; i++) {
                var tab = this.Tabs[i];
                if (tab && tab.Painel) {
                    var cabecalhoTab = $("<li class=\"item\"></li>");
                    cabecalhoTab.append("<a href=\"#" + tab.Painel.id + "\">" + tab.Text.GetString() + "</a>");
                    if (!tab.Visible) {
                        cabecalhoTab.hide();
                    }
                    if (!tab.Enabled) {
                        disabled.push(i);
                    }
                    tab.MouraTabPanel = this;
                    cabecalhoTabs.append(cabecalhoTab);
                }
            }
            if (cabecalhoTabs.children().length > 0) {
                $(this.Painel).tabs({
                    active: this.ActiveTabIndex,
                    disabled: disabled,
                    activate: function (event, ui) {
                        _this.hdnActiveTabIndex.value = $(_this.Painel).tabs("option", "active");
                        if (_this.AutoPostBack) {
                            __doPostBack(_this.AspUniqueId, "ActiveTabChanged");
                        }
                        else {
                            _this.ActiveTabChanged.FireEvent(_this, new MouraEventArgs());
                            if (ui.newPanel && ui.newPanel.length > 0) {
                                RedrawGridsJS(ui.newPanel[0].id);
                            }
                        }
                    }
                });
            }
        }
    };
    MouraTabPanel.prototype.OnActiveTabChanged = function (source, e) {
        if (e.tab && e.tab.tabControl && e.tab.tabControl.GetMainElement()) {
            RedrawGridsJS(e.tab.tabControl.GetMainElement().id);
        }
    };
    MouraTabPanel.prototype.AlterarVisibleAba = function (Aba, Visible) {
        var tab = this.GetTabByName(Aba);
        if (tab) {
            tab.Visible = Visible;
        }
    };
    MouraTabPanel.prototype.IsAbaVisible = function (Aba) {
        var tab = this.GetTabByName(Aba);
        if (tab) {
            return tab.Visible;
        }
        return false;
    };
    MouraTabPanel.prototype.SetActiveTabIndex = function (index) {
        this.ActiveTabIndex = index;
    };
    MouraTabPanel.prototype.GetActiveTabIndex = function () {
        return this.ActiveTabIndex;
    };
    MouraTabPanel.prototype.GetTabByName = function (name) {
        for (var i = 0; i < this.Tabs.length; i++) {
            var tab = this.Tabs[i];
            if (tab.ID == name) {
                return tab;
            }
        }
        return null;
    };
    Object.defineProperty(MouraTabPanel.prototype, "Visible", {
        get: function () {
            return !$(this.Painel).is(":hide");
        },
        set: function (visible) {
            if (visible) {
                $(this.Painel).show();
            }
            else {
                $(this.Painel).hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    return MouraTabPanel;
}(MouraControl));
//# sourceMappingURL=MouraTabPanel.js.map