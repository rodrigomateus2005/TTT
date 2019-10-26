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
var C_SerPre = /** @class */ (function (_super) {
    __extends(C_SerPre, _super);
    function C_SerPre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_SerPre.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SerPre.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SerPre.prototype, "txtHora", {
        get: function () {
            return window['txtHora_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SerPre.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SerPre.prototype, "Servicos", {
        get: function () {
            return this.GetScope()["Servicos"];
        },
        set: function (value) {
            this.GetScope()["Servicos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SerPre.prototype, "txtServico", {
        get: function () {
            return window['txtServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SerPre.prototype, "grdServicos", {
        get: function () {
            return window['grdServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SerPre.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SerPre.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_SerPre.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.OnClickLimpar, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickGravar, this);
        }
        if (this.grdServicos) {
            adicionarEventoMoura(this.grdServicos.Validando, this.ValidandoGrdServicos, this);
            adicionarEventoMoura(this.grdServicos.AdicionandoItem, this.OnAdicionandoGrdServicos, this);
        }
    };
    C_SerPre.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    C_SerPre.prototype.LimparCampos = function () {
        this.txtPet.Limpar();
        this.txtData.Date = new Date();
        this.txtHora.textBoxHorario.SetDate(new Date());
        this.txtServico.Limpar();
        this.Servicos = [];
        this.grdServicos.Grid.PreencherGrid(null);
    };
    C_SerPre.prototype.OnClickLimpar = function (s, e) {
        e.processOnServer = false;
        try {
            this.LimparCampos();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SerPre.prototype.ValidandoGrdServicos = function (s, e) {
        var entidade = e.item;
        if (entidade.Codigo_Servico <= 0) {
            MostrarAlerta("Informe um serviço");
            e.cancelar = true;
            return;
        }
    };
    C_SerPre.prototype.OnAdicionandoGrdServicos = function (s, e) {
        var entidade = e.item;
        entidade.Servico = this.txtServico.GetResultado();
    };
    C_SerPre.prototype.ValidarGravar = function () {
        if (this.txtPet.TextBoxAnimal.GetText().CNum() <= 0) {
            MostrarAlerta("Informe um pet para gravar");
            return false;
        }
        if (!this.txtData.Date) {
            MostrarAlerta("Informe uma data correta");
            return false;
        }
        if (String.IsNullOrWhiteSpace(this.txtHora.textBoxHorario.GetText())) {
            MostrarAlerta("Informe uma hora correta");
            return false;
        }
        if (this.cboEmpresa.GetValue() <= 0) {
            MostrarAlerta("Informe a empresa do atendimento");
            return false;
        }
        if (this.Servicos.length <= 0) {
            MostrarAlerta("Informe ao menos um serviço realizado");
            return false;
        }
        return true;
    };
    C_SerPre.prototype.OnClickGravar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            if (!this.ValidarGravar()) {
                return;
            }
            MsgBoxJS("Deseja realmente lançar o(s) serviço(s) informado(s)?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.No)
                    return;
                var servicosRealizados = [];
                _this.Servicos.forEach(function (q) {
                    var servicoRealizado = {
                        Codigo_Servico: q.Codigo_Servico
                    };
                    servicosRealizados.push(servicoRealizado);
                });
                var hora = _this.txtHora.textBoxHorario.GetText().split(':')[0].CNum();
                var minuto = _this.txtHora.textBoxHorario.GetText().split(':')[1].CNum();
                var dataServico = _this.txtData.Date;
                dataServico.setHours(hora);
                dataServico.setMinutes(minuto);
                var entidade = {
                    Codigo_Animal: _this.txtPet.TextBoxAnimal.GetText().CNum(),
                    Data_Hora: dataServico,
                    Empresa: _this.cboEmpresa.GetValue(),
                    Profissional: _this.ExecutarFuncaoServerSideSynch("GetCodPrestador", { codUsuario: ValoresSismoura.UsuarioLogado }),
                    ServicosRealizados: servicosRealizados
                };
                var param = {
                    entidade: JSON.stringify(entidade),
                    tela: ValoresSismoura.NomeTela,
                    codUsuario: ValoresSismoura.UsuarioLogado
                };
                abrirEspera("");
                _this.ExecutarFuncaoServerSideAsynch("GravarServicosRealizados", param, function (d) {
                    try {
                        fecharEspera();
                        if (d) {
                            MostrarMensagem("Serviços lançados com sucesso");
                            _this.LimparCampos();
                        }
                        else {
                            MostrarError("Ocorreu um erro no sistema");
                        }
                    }
                    catch (ex) {
                        fecharEspera();
                        LogarException(ex);
                    }
                }, function (erro) {
                    fecharEspera();
                    LogarExceptionAjax(erro);
                }, _this);
            });
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_SerPre;
}(MouraPageAngular));
var c_SerPre = new C_SerPre();
//# sourceMappingURL=C_SerPre.js.map