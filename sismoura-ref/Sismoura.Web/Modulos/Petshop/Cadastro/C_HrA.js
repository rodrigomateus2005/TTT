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
var C_HrA = /** @class */ (function (_super) {
    __extends(C_HrA, _super);
    function C_HrA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_HrA.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrA.prototype, "txtMedico", {
        get: function () {
            return window['txtMedico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrA.prototype, "txtProfissionalDe", {
        get: function () {
            return window['txtProfissionalDe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrA.prototype, "txtIntervalo", {
        get: function () {
            return window['txtIntervalo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrA.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrA.prototype, "txtHora", {
        get: function () {
            return window['txtHora_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrA.prototype, "txtHoraFinal", {
        get: function () {
            return window['txtHoraFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrA.prototype, "lstDia", {
        get: function () {
            return window['lstDia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrA.prototype, "dlgCopia", {
        get: function () {
            return window['dlgCopia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrA.prototype, "btnCopiar", {
        get: function () {
            return window['btnCopiar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrA.prototype, "btnConfirmarCopia", {
        get: function () {
            return window['btnConfirmarCopia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrA.prototype, "btnCancelaCopia", {
        get: function () {
            return window['btnCancelaCopia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrA.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrA.prototype, "Botoes", {
        get: function () {
            return window['Botoes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_HrA.prototype.onCboEmpresaSelectedItemChanged = function () {
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            var parametros = {
                codProfissional: this.txtMedico.GetText().CNum(),
                codEmpresa: this.cboEmpresa.GetValue()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("BloquearCadastro", parametros);
            if (retorno) {
                MostrarAlerta("Utilize a tela: Cadastro de Horário de Atendimento para realizar o cadastro da escala deste profissional");
                this.txtMedico.Limpar();
                return;
            }
        }
        this.PreencherGrade();
    };
    C_HrA.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtMedico) {
            adicionarEventoMoura(this.txtMedico.Procurou, this.OnProcurouProfissional, this);
            if (this.txtMedico.BotaoNovo) {
                adicionarEventoDevExpress(this.txtMedico.BotaoNovo.Click, this.OnClickNovoProcura, this);
            }
        }
        if (this.btnCopiar) {
            adicionarEventoMoura(this.btnCopiar.Click, this.OnClickCopiar, this);
        }
        if (this.cboEmpresa)
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.onCboEmpresaSelectedItemChanged, this);
        if (this.btnConfirmarCopia) {
            adicionarEventoMoura(this.btnConfirmarCopia.Click, this.OnClickConfirmarCopia, this);
        }
        if (this.btnCancelaCopia) {
            adicionarEventoMoura(this.btnCancelaCopia.Click, this.OnClickCancelarCopia, this);
        }
        if (this.Botoes) {
            if (this.Botoes.BotaoNovo) {
                adicionarEventoMoura(this.Botoes.BotaoNovo.Click, this.OnClickNovo, this);
            }
            if (this.Botoes.BotaoGravar) {
                adicionarEventoMoura(this.Botoes.BotaoGravar.Click, this.OnClickGravar, this);
            }
            if (this.Botoes.BotaoExcluir) {
                adicionarEventoMoura(this.Botoes.BotaoExcluir.Click, this.OnClickExcluir, this);
            }
        }
    };
    C_HrA.prototype.OnClickCopiar = function (s, e) {
        e.processOnServer = false;
        if (this.txtMedico.GetText().CNum() <= 0) {
            MostrarAlerta("Informe um profissional para receber os horários.");
            return;
        }
        var parametros = {
            codProfissional: this.txtMedico.GetText().CNum(),
            codEmpresa: this.cboEmpresa.GetValue()
        };
        var horario = this.ExecutarFuncaoServerSideSynch("VerificarExistenciaHorario", parametros);
        if (horario && !String.IsNullOrWhiteSpace(horario)) {
            MostrarAlerta(horario);
            return;
        }
        this.txtProfissionalDe.Limpar();
        this.dlgCopia.Show();
    };
    C_HrA.prototype.OnClickConfirmarCopia = function (s, e) {
        e.processOnServer = false;
        if (this.txtProfissionalDe.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o profissional de origem.");
            return;
        }
        if (this.txtProfissionalDe.GetText().CNum() == this.txtMedico.GetText().CNum()) {
            MostrarAlerta("Profissional de origem e destino devem ser diferentes");
            return;
        }
        MsgBoxJS("O horário atual do Profissional " + this.txtMedico.GetResultado() + " será excluido para ser adicionado a cópia! Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespondeuConfirmarCopia, this));
    };
    C_HrA.prototype.OnClickCancelarCopia = function (s, e) {
        e.processOnServer = false;
        this.dlgCopia.Hide();
    };
    C_HrA.prototype.OnRespondeuConfirmarCopia = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            try {
                var parametros;
                parametros = {
                    codProfissionalDe: this.txtProfissionalDe.GetText().CNum(),
                    codMedico: this.txtMedico.GetText().CNum()
                };
                var copiarHorario = this.ExecutarFuncaoServerSideSynch("CopiarHorario", parametros);
                if (copiarHorario) {
                    MostrarMensagem("Horário copiado com sucesso!");
                    this.dlgCopia.Hide();
                    this.PreencherGrade();
                }
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    C_HrA.prototype.OnRespondeuExcluir = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            var retorno = [];
            var param = {
                codProfissional: this.txtMedico.GetText().CNum(),
                codEmpresa: this.cboEmpresa.GetValue()
            };
            for (var x = 0; x < this.grid.GetSelectedRowsData.length; x++) {
                retorno[x] = this.grid.GetSelectedRowsData[x].ID;
            }
            if (retorno.length <= 0) {
                MostrarAlerta("Selecione ao menos um registro na grade para excluir!");
                return;
            }
            try {
                var parametros;
                parametros = {
                    retorno: retorno
                };
                var ajusteIntervalo = this.ExecutarFuncaoServerSideSynch("ExcluirRegistroLinha", parametros);
                if (ajusteIntervalo) {
                    this.PreencherGrade();
                    MostrarMensagem("Registro Excluído com sucesso!");
                }
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    C_HrA.prototype.OnClickGravar = function (s, e) {
        e.processOnServer = false;
        var intervalo = 0;
        var dias = this.lstDia.GetValues();
        var diferencaMinutos = 0;
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            var paramet = {
                codProfissional: this.txtMedico.GetText().CNum(),
                codEmpresa: this.cboEmpresa.GetValue()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("BloquearCadastro", paramet);
            if (retorno) {
                MostrarAlerta("Utilize a tela: Cadastro de Horário de Atendimento para realizar o cadastro da escala deste profissional");
                return;
            }
        }
        var param = {
            codProfissional: this.txtMedico.GetText().CNum(),
            codEmpresa: this.cboEmpresa.GetValue()
        };
        var horario = this.ExecutarFuncaoServerSideSynch("VerificarExistenciaHorario", param);
        if (horario && !String.IsNullOrWhiteSpace(horario)) {
            MostrarAlerta(horario);
            return;
        }
        if (this.validarCampos()) {
            try {
                var parametros;
                parametros = {
                    codProfissional: this.txtMedico.GetText().CNum(),
                    lstDia: dias,
                    horaInicial: this.txtHora.textBoxHorario.GetText(),
                    horaFinal: this.txtHoraFinal.textBoxHorario.GetText(),
                    codEmpresa: this.cboEmpresa.GetValue(),
                    intervalo: this.txtIntervalo.GetText().CNum()
                };
                var ajusteIntervalo = this.ExecutarFuncaoServerSideSynch("AjustarIntervalo", parametros);
                if (ajusteIntervalo) {
                    MostrarMensagem("Registro(s) gravado(s) com sucesso");
                    this.PreencherGrade();
                    this.LimparCamposHorario();
                }
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    C_HrA.prototype.validarCampos = function () {
        var diferencaMinutos = calcularDiferencaData(this.txtHoraFinal.textBoxHorario.GetText().ToDate(), this.txtHora.textBoxHorario.GetText().ToDate(), DiferencaData.Minutes);
        var dias = this.lstDia.GetValues();
        if (this.txtMedico.GetText().CNum() <= 0) {
            MostrarAlerta("Preencha o campo corretamente: Profissional");
            return false;
        }
        if (dias.length == 0) {
            MostrarAlerta("Preencha o campo corretamente: Dia");
            return false;
        }
        if (this.txtHora.textBoxHorario.GetText() == "00:00") {
            MostrarAlerta("Preencha o campo corretamente: Hora Inicial");
            return false;
        }
        if (this.txtHoraFinal.textBoxHorario.GetText() == "00:00") {
            MostrarAlerta("Preencha o campo corretamente: Hora Final");
            return false;
        }
        if (this.txtHora.textBoxHorario.GetDate() > this.txtHoraFinal.textBoxHorario.GetDate()) {
            MostrarAlerta("A Hora Final informada é inferior a Hora Inicial");
            return false;
        }
        if (this.txtIntervalo.GetText().CNum() < 5) {
            MostrarAlerta("O intervalo está com um valor muito baixo, informe um valor maior ou igual a 5 minutos");
            return false;
        }
        if (this.txtIntervalo.GetText().CNum() > diferencaMinutos) {
            MostrarAlerta("O intervalo não pode ser maior que a diferença entre a hora inicial e a hora final!");
            return false;
        }
        return true;
    };
    C_HrA.prototype.OnClickExcluir = function (s, e) {
        e.processOnServer = false;
        MsgBoxJS("Deseja realmente Excluir os registro(s)?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespondeuExcluir, this));
    };
    C_HrA.prototype.OnClickNovo = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
    };
    C_HrA.prototype.OnClickNovoProcura = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
    };
    C_HrA.prototype.LimparCampos = function () {
        this.txtMedico.Limpar();
        this.LimparCamposHorario();
        this.PreencherGrade();
    };
    C_HrA.prototype.OnProcurouProfissional = function () {
        this.PreencherGrade();
    };
    C_HrA.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_HrA.prototype.PreencherGrade = function () {
        try {
            var codFuncionario = 0;
            if (this.txtMedico.GetText().CNum() != null || this.txtMedico.GetText().CNum() != undefined) {
                codFuncionario = this.txtMedico.GetText().CNum();
            }
            var parametros;
            parametros = {
                codProfissional: codFuncionario,
                codEmpresa: this.cboEmpresa.GetValue()
            };
            var cad = this.ExecutarFuncaoServerSideSynch("GetByProfissional", parametros);
            this.grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HrA.prototype.LimparCamposHorario = function () {
        this.lstDia.LimparSelecao();
        this.txtHora.textBoxHorario.SetDate("00:00:00".ToDate());
        this.txtHoraFinal.textBoxHorario.SetDate("00:00:00".ToDate());
        this.txtIntervalo.SetText("0");
    };
    return C_HrA;
}(MouraPageAngular));
var c_HrA = new C_HrA();
//# sourceMappingURL=C_HrA.js.map