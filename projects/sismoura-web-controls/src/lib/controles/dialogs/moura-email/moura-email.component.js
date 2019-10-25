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
var moura_grid_column_1 = require("../../grid/moura-grid-view/moura-grid-column");
var MouraEmailComponent = /** @class */ (function (_super) {
    __extends(MouraEmailComponent, _super);
    function MouraEmailComponent(mouraService) {
        var _this = _super.call(this) || this;
        _this.mouraService = mouraService;
        _this.anexos = [];
        _this.colunasGridAnexo = [];
        if (!_this.remetente || !_this.remetente.Codigo) {
            MostrarAlerta('Informe um Remetente');
            return _this;
        }
        if (String.IsNullOrWhiteSpace(_this.emailDestinatario)) {
            MostrarAlerta('Informe um E-Mail de Destino');
            return _this;
        }
        if (String.IsNullOrWhiteSpace(_this.assunto)) {
            MostrarAlerta('Informe um assunto');
            return _this;
        }
        if (String.IsNullOrWhiteSpace(_this.mensagem)) {
            MostrarAlerta('Informe uma mensagem');
            return _this;
        }
        var colunaNome = new moura_grid_column_1.MouraGridColumn('');
        colunaNome.caption = 'Anexo';
        colunaNome.fieldName = 'nome';
        _this.colunasGridAnexo.push(colunaNome);
        _this.mouraService.executarGet('/controles/Dialogs/MouraEmail', 'GetRemetentes', null).then(function (remetentes) {
            _this.remetentes = remetentes;
        });
        return _this;
    }
    Object.defineProperty(MouraEmailComponent.prototype, "ngFiles", {
        get: function () {
            return this.$ngFiles;
        },
        set: function (value) {
            this.$ngFiles = value;
            if (value && value.length > 0) {
                this.anexos.push({
                    nome: value[0].name,
                    content: value[0]
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraEmailComponent.prototype, "anexos", {
        get: function () {
            return this.$anexos;
        },
        set: function (value) {
            this.$anexos = value;
        },
        enumerable: true,
        configurable: true
    });
    MouraEmailComponent.prototype.abrir = function () {
        this.anexos = [];
        return this.modalMouraEmail.abrir();
    };
    MouraEmailComponent.prototype.onClickCancelar = function () {
        this.modalMouraEmail.fechar();
    };
    MouraEmailComponent.prototype.onClickEnviar = function () {
        var _this = this;
        var parametros = {
            codigoRementente: this.remetente ? this.remetente.Codigo : 0,
            mensagem: this.mensagem,
            assunto: this.assunto,
            destinatarios: this.emailDestinatario
        };
        for (var i = 0; i < this.anexos.length; i++) {
            var anexo = this.anexos[i];
            parametros['anexo' + i] = anexo.content;
        }
        this.mouraService.executarPostComArquivo('/controles/Dialogs/MouraEmail', 'EnviarEmail', parametros).then(function () {
            MostrarMensagem('E-mail enviado com sucesso');
            _this.modalMouraEmail.fechar();
        }).catch(function () {
            MostrarAlerta('Erro ao enviar email, tente novamente');
        });
    };
    __decorate([
        core_1.ViewChild('modalMouraEmail', { static: false })
    ], MouraEmailComponent.prototype, "modalMouraEmail", void 0);
    MouraEmailComponent = __decorate([
        core_1.Component({
            selector: 'moura-email',
            templateUrl: './moura-email.component.html',
            styleUrls: ['./moura-email.component.scss']
        })
    ], MouraEmailComponent);
    return MouraEmailComponent;
}(moura_control_component_1.MouraControlComponent));
exports.MouraEmailComponent = MouraEmailComponent;
//# sourceMappingURL=moura-email.component.js.map