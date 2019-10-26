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
var R_PagtoEmailStoom = /** @class */ (function (_super) {
    __extends(R_PagtoEmailStoom, _super);
    function R_PagtoEmailStoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_PagtoEmailStoom.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PagtoEmailStoom.prototype, "grid", {
        get: function () { return window['grid_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PagtoEmailStoom.prototype, "txtPeriodo", {
        get: function () { return window['txtPeriodo_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PagtoEmailStoom.prototype, "cboTipoHospedagem", {
        get: function () { return window['cboTipoHospedagem_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PagtoEmailStoom.prototype, "cboStatus", {
        get: function () { return window['cboStatus_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PagtoEmailStoom.prototype, "cboEmpresa", {
        get: function () { return window['cboEmpresa_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PagtoEmailStoom.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_PagtoEmailStoom.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_PagtoEmailStoom.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.OnGridCellPrepared, this);
            adicionarEventoMoura(this.grid.ClickBotaoLinha, this.OnGrdidClicouBotao, this);
        }
    };
    R_PagtoEmailStoom.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (this.grid) {
            this.grid.PreencherGrid(null);
        }
        if (this.txtPeriodo) {
            this.txtPeriodo.Iniciar();
        }
        if (this.cboEmpresa) {
            this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        }
        if (this.cboTipoHospedagem) {
            this.cboTipoHospedagem.SetValue(0);
        }
        if (this.cboStatus) {
            this.cboStatus.SetValue(99);
        }
        this.txtPet.Limpar();
    };
    R_PagtoEmailStoom.prototype.OnGridCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data) {
                if (e.data['Status_Pagamento_Texto'] == "Autorizado") {
                    e.cellElement.css("color", "orange");
                }
                else if (e.data['Status_Pagamento_Texto'] == "Capturado") {
                    e.cellElement.css("color", "green");
                }
                else { //Não Autorizado
                    e.cellElement.css("color", "red");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_PagtoEmailStoom.prototype.OnGrdidClicouBotao = function (s, e) {
        try {
            var codReserva = ("" + e.data['Codigo_Reserva']).CNum();
            var status = ("" + e.data['Status_Pagamento']).CNum();
            var status_Texto = ("" + e.data['Status_Pagamento_Texto']);
            var cancelada = ("" + e.data['Cancelado']);
            if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
                if (e.commandName == "enviar_email_pagamento") {
                    if (cancelada == "SIM") {
                        MostrarAlerta("Esta reserva foi cancelada.");
                        return;
                    }
                    if (status == 0 /* enNaoAutorizado */) {
                        //reenvia o email.
                        var parametros = {
                            codReserva: codReserva
                        };
                        this.EnviarEmailPagamento(codReserva);
                    }
                    else {
                        MostrarAlerta("O pagamento j\u00E1 foi " + status_Texto + ", n\u00E3o ser\u00E1 poss\u00EDvel enviar o e-mail novamente.");
                        return;
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_PagtoEmailStoom.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!this.txtPeriodo.IsValido()) {
            MostrarAlerta("Informe o período corretamente.");
            return;
        }
        if (this.cboEmpresa.GetValue() == 0) {
            MostrarAlerta("Informe a empresa");
            return;
        }
        if (this.cboTipoHospedagem.GetText() == "") {
            MostrarAlerta("Informe o tipo da hospedagem");
            return;
        }
        if (!this.cboStatus.GetValue()) {
            MostrarAlerta("Informe o status");
            return;
        }
        this.GetDadosRelacao();
    };
    R_PagtoEmailStoom.prototype.GetDadosRelacao = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                codEmpresa: this.cboEmpresa.GetValue(),
                tipoHospedagem: this.cboTipoHospedagem.GetValue(),
                Status: this.cboStatus.GetValue(),
                codProprietario: this.txtPet.TextBoxProprietario.GetText().CNum(),
                codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum(),
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetStatusEmailPagamento", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    R_PagtoEmailStoom.prototype.EnviarEmailPagamento = function (codReserva) {
        var parametros;
        try {
            var parametros;
            parametros = {
                codReserva: codReserva
            };
            abrirEspera("Aguarde. Enviando email de pagamento...");
            this.ExecutarFuncaoServerSideAsynch("EnviarEmailPagamento", parametros, function (d) {
                try {
                    var retorno = JSON.parse(d);
                    fecharEspera();
                    if (retorno) {
                        MostrarMensagem("Email enviado com sucesso.");
                    }
                    else {
                        MostrarAlerta("Email não enviado.");
                    }
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
        return true;
    };
    return R_PagtoEmailStoom;
}(MouraPageRelacaoAngular));
var r_PagtoEmailStoom = new R_PagtoEmailStoom;
//# sourceMappingURL=R_PagtoEmailStoom.js.map