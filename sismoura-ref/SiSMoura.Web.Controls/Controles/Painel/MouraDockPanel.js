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
var MouraDockPanel = /** @class */ (function (_super) {
    __extends(MouraDockPanel, _super);
    function MouraDockPanel(id) {
        var _this = _super.call(this, id) || this;
        $(document).on("DevExpressEndCallback", $.proxy(_this.OnDockEndRender, _this));
        return _this;
    }
    Object.defineProperty(MouraDockPanel.prototype, "dock", {
        get: function () {
            return window[this.ID + "_dock"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDockPanel.prototype, "dockPanel", {
        get: function () {
            return window[this.ID + "_dock"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDockPanel.prototype, "LoadingPanel", {
        get: function () {
            return window[this.ID + "_loadingPanel"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraDockPanel.prototype, "PainelConteudo", {
        get: function () {
            return $("#" + this.ID + "_principal")[0];
        },
        enumerable: true,
        configurable: true
    });
    MouraDockPanel.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.dock) {
        }
    };
    MouraDockPanel.prototype.OnDockEndRender = function (e) {
        var tamanhoCorreto = $(this.dock.GetContentContainer(-1)).children("div").height() + 45;
        if (this.dock.GetWindowHeightInternal() != tamanhoCorreto) {
            this.dock.SetHeightInternal(tamanhoCorreto);
        }
    };
    MouraDockPanel.prototype.ShowLoadingPanel = function () {
        var _this = this;
        if (this.LoadingPanel) {
            setTimeout(function () {
                //this.LoadingPanel.ShowInElement($("#dockVendasVendedor_dock_PWC-1")[0]);
                _this.LoadingPanel.ShowInElement($("#" + _this.dockPanel.panelUID + "_dock_PWC-1")[0]);
            }, 100);
        }
    };
    MouraDockPanel.prototype.HideLoadingPanel = function () {
        var _this = this;
        if (this.LoadingPanel) {
            setTimeout(function () {
                _this.LoadingPanel.Hide();
            }, 100);
        }
    };
    MouraDockPanel.prototype.AdjustControl = function () {
        if (this.dockPanel) {
            this.dockPanel.AdjustControl();
        }
    };
    return MouraDockPanel;
}(MouraControl));
//# sourceMappingURL=MouraDockPanel.js.map