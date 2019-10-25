"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moura_control_component_1 = require("../../core/moura-control/moura-control.component");
var MouraModalComponent = /** @class */ (function (_super) {
    __extends(MouraModalComponent, _super);
    function MouraModalComponent() {
        return _super.call(this) || this;
    }
    Object.defineProperty(MouraModalComponent.prototype, "draggable", {
        get: function () {
            return this.$draggable;
        },
        set: function (value) {
            this.$draggable = value;
            if (this.instance) {
                $(this.divModal.nativeElement).dialog('option', 'draggable', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalComponent.prototype, "fullScreen", {
        get: function () {
            return this.$fullScreen;
        },
        set: function (value) {
            this.$fullScreen = value;
            if (this.instance) {
                this.atualizarTamanhos();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalComponent.prototype, "titulo", {
        get: function () {
            return this.$titulo;
        },
        set: function (value) {
            this.$titulo = value;
            if (this.instance) {
                $(this.divModal.nativeElement).dialog('option', 'title', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    MouraModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var dialogOptions = {
            autoOpen: false
            // , appendTo: this.$element[0]
            ,
            title: this.titulo,
            modal: true,
            width: 500,
            height: 300,
            draggable: this.draggable,
            close: function (event, ui) {
                _this.onClose();
            }
        };
        this.instance = $(this.divModal.nativeElement).dialog(dialogOptions).dialog('instance');
        // $(this.$element).appendTo("body");
        this.atualizarTamanhos();
    };
    MouraModalComponent.prototype.atualizarTamanhos = function () {
        if (this.fullScreen) {
            this.draggable = false;
            var w = $(window).width() - 10;
            var h = $(window).height();
            $(this.divModal.nativeElement).dialog('option', 'height', h);
            $(this.divModal.nativeElement).dialog('option', 'width', w);
        }
        else {
        }
    };
    MouraModalComponent.prototype.abrir = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            $(_this.divModal.nativeElement).dialog('open');
            _this.resolve = resolve;
            _this.reject = reject;
        });
    };
    MouraModalComponent.prototype.fechar = function () {
        $(this.divModal.nativeElement).dialog('close');
    };
    MouraModalComponent.prototype.onClose = function () {
        this.resolve();
    };
    __decorate([
        core_1.ViewChild('divModal', { static: true })
    ], MouraModalComponent.prototype, "divModal", void 0);
    __decorate([
        core_1.Input()
    ], MouraModalComponent.prototype, "draggable", null);
    __decorate([
        core_1.Input()
    ], MouraModalComponent.prototype, "fullScreen", null);
    __decorate([
        core_1.Input()
    ], MouraModalComponent.prototype, "titulo", null);
    MouraModalComponent = __decorate([
        core_1.Component({
            selector: 'moura-modal',
            templateUrl: './moura-modal.component.html',
            styleUrls: ['./moura-modal.component.scss'],
            exportAs: 'mouraModal'
        })
    ], MouraModalComponent);
    return MouraModalComponent;
}(moura_control_component_1.MouraControlComponent));
exports.MouraModalComponent = MouraModalComponent;
//# sourceMappingURL=moura-modal.component.js.map