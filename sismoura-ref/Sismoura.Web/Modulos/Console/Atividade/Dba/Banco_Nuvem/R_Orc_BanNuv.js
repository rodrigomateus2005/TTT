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
var R_Orc_BanNuv = /** @class */ (function (_super) {
    __extends(R_Orc_BanNuv, _super);
    function R_Orc_BanNuv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Orc_BanNuv.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Orc_BanNuv.prototype, "txtPeriodo", {
        get: function () {
            return window["txtPeriodo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Orc_BanNuv.prototype, "txtRazao_Social", {
        get: function () {
            return window['txtRazao_Social_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Orc_BanNuv.prototype, "txtCNPJ", {
        get: function () {
            return window['txtCNPJ_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Orc_BanNuv.prototype, "Grid", {
        get: function () {
            return window["Grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Orc_BanNuv.prototype, "cboSituacao", {
        get: function () {
            return window['cboSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Orc_BanNuv.prototype, "txtCod_Cliente", {
        get: function () {
            return window['txtCod_Cliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Orc_BanNuv.prototype, "optTipo_Cliente", {
        get: function () {
            return window['optTipo_Cliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Orc_BanNuv.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        var test = $("#optTipo_Cliente_List").find("input[value='1']").attr('checked', 'checked');
        if ($("#optTipo_Cliente_List").find("input[value='1']").prop("checked")) {
            $("#ClienteMoura").removeAttr("style");
            $("#SemCadastro").css("display", "none");
        }
        this.PreencherGrade();
    };
    R_Orc_BanNuv.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.optTipo_Cliente) {
            adicionarEventoMoura(this.optTipo_Cliente.SelectionChanged, this.OnSelecionarTipoCliente, this);
        }
    };
    R_Orc_BanNuv.prototype.OnSelecionarTipoCliente = function () {
        if ($("#optTipo_Cliente_List").find("input[value='1']").prop("checked") == false) {
            $("#SemCadastro").removeAttr("style");
            $("#ClienteMoura").css("display", "none");
            this.cboSituacao.LimparSelecao();
            this.txtCod_Cliente.Limpar();
        }
        else if ($("#optTipo_Cliente_List").find("input[value='1']").prop("checked")) {
            $("#ClienteMoura").removeAttr("style");
            $("#SemCadastro").css("display", "none");
            this.txtRazao_Social.Limpar();
            this.txtCNPJ.Limpar();
            this.cboSituacao.LimparSelecao();
        }
    };
    R_Orc_BanNuv.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var situacao = 0;
        var tipoCliente = 0;
        if ($("#optTipo_Cliente_List").find("input[value='1']").prop("checked")) {
            tipoCliente = 1;
        }
        else {
            tipoCliente = 0;
        }
        if (this.cboSituacao.GetValue() != null) {
            if (this.cboSituacao.GetValue().CNum() != 0) {
                situacao = this.cboSituacao.GetValue().CNum();
            }
        }
        var parametros = {
            dataInicio: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
            dataFim: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
            razaoSocial: this.txtRazao_Social.GetText(),
            CNPJ: this.txtCNPJ.GetText(),
            codCliente: this.txtCod_Cliente.GetText().CNum(),
            situacao: situacao,
            tipoCliente: tipoCliente
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("RelacaoOrcamentoBancoNuvem", parametros);
        this.Grid.PreencherGrid(retorno);
    };
    return R_Orc_BanNuv;
}(MouraPageRelacaoAngular));
var r_Orc_BanNuv = new R_Orc_BanNuv();
//# sourceMappingURL=R_Orc_BanNuv.js.map