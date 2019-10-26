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
var C_ParamRoyPro = /** @class */ (function (_super) {
    __extends(C_ParamRoyPro, _super);
    function C_ParamRoyPro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ParamRoyPro.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamRoyPro.prototype, "cboTipoRoyalties", {
        get: function () {
            return window['cboTipoRoyalties_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamRoyPro.prototype, "txtPercentRoyalties", {
        get: function () {
            return window['txtPercentRoyalties_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamRoyPro.prototype, "cboTipoTaxaProp", {
        get: function () {
            return window['cboTipoTaxaProp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamRoyPro.prototype, "txtPercentTaxaProp", {
        get: function () {
            return window['txtPercentTaxaProp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamRoyPro.prototype, "txtDiaVencimento", {
        get: function () {
            return window['txtDiaVencimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamRoyPro.prototype, "btnAdicionar", {
        get: function () {
            return window['btnAdicionar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamRoyPro.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamRoyPro.prototype, "btnNovo", {
        get: function () {
            return window['btnNovo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamRoyPro.prototype, "grdParametros", {
        get: function () {
            return window['grdParametros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamRoyPro.prototype, "txtQtdeParcelas", {
        get: function () {
            return window['txtQtdeParcelas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamRoyPro.prototype, "txtIntervaloParcelas", {
        get: function () {
            return window['txtIntervaloParcelas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamRoyPro.prototype, "Parametros", {
        get: function () {
            if (!this.GetScope()["Parametros"]) {
                return [];
            }
            else {
                return this.GetScope()["Parametros"];
            }
        },
        set: function (value) {
            this.GetScope()["Parametros"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamRoyPro.prototype, "Parametro", {
        get: function () {
            if (!this.GetScope()["Parametro"]) {
                return;
            }
            else {
                return this.GetScope()["Parametro"];
            }
        },
        set: function (value) {
            this.GetScope()["Parametro"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_ParamRoyPro.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grdParametros) {
            adicionarEventoMoura(this.grdParametros.ExcluiuLinhaGrade, this.OnExcluirLinhaGrade, this);
        }
        if (this.btnAdicionar) {
            adicionarEventoMoura(this.btnAdicionar.Click, this.OnValidandoItem, this);
        }
        if (this.cboTipoRoyalties) {
            adicionarEventoMoura(this.cboTipoRoyalties.SelectedItemChanged, this.OnTipoRoyaltyChanged, this);
            this.cboTipoRoyalties.SetValue("Selecionar");
        }
        if (this.cboTipoTaxaProp) {
            adicionarEventoMoura(this.cboTipoTaxaProp.SelectedItemChanged, this.OnTipoTaxaRoyaltyChanged, this);
            this.cboTipoTaxaProp.SetValue("Selecionar");
        }
        if (this.txtQtdeParcelas) {
            adicionarEventoMoura(this.txtQtdeParcelas.TextChanged, this.DigitouParcelas, this);
        }
        if (this.txtIntervaloParcelas) {
            adicionarEventoMoura(this.txtIntervaloParcelas.TextChanged, this.DigitouIntervalo, this);
        }
        if (this.txtDiaVencimento) {
            adicionarEventoMoura(this.txtDiaVencimento.TextChanged, this.DigitouVencimento, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickGravar, this);
        }
        if (this.btnNovo) {
            adicionarEventoMoura(this.btnNovo.Click, this.OnClickNovo, this);
        }
    };
    C_ParamRoyPro.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.lstEmpresa.LimparSelecao();
        this.PreencherCadastrados();
        this.txtDiaVencimento.Textbox.setAttribute("style", "margin-left: -20px;");
        this.txtIntervaloParcelas.Textbox.setAttribute("style", "margin-left: -20px;");
    };
    C_ParamRoyPro.prototype.OnValidandoItem = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.lstEmpresa.GetValues().length == 0) {
                MostrarAlerta("Informe ao menos uma Empresa!");
                return;
            }
            if (this.cboTipoRoyalties.GetValue() >= "0") {
                if (this.txtPercentRoyalties.GetText() == "") {
                    MostrarAlerta("Informe o Valor/Percentual de Royalties!");
                    this.txtPercentRoyalties.Focus();
                    return;
                }
            }
            if (this.cboTipoTaxaProp.GetValue() >= "0") {
                if (this.txtPercentTaxaProp.GetText() == "") {
                    MostrarAlerta("Informe o Valor/Percentual da taxa de Propaganda!");
                    this.txtPercentTaxaProp.Focus();
                    return;
                }
            }
            if (this.txtIntervaloParcelas.GetText().CNum() > 10) {
                MostrarAlerta("O intervalo entre parcelas não deverá ser maior que 10.");
                this.txtIntervaloParcelas.Focus();
                return;
            }
            if (this.txtQtdeParcelas.GetText().CNum() > 10) {
                MostrarAlerta("A quantidade de parcelas não deverá ser maior que 10.");
                this.txtQtdeParcelas.Focus();
                return;
            }
            this.ValidarCamposObrigatorios();
            var listaGrade = this.grdParametros.DataSource;
            var listaEmpresas = this.lstEmpresa.GetValuesNumber();
            //this.Parametros = [];
            for (var i = 0; i < listaEmpresas.length; i++) {
                this.Parametro = {};
                this.Parametro.Empresa = listaEmpresas[i];
                this.Parametro.Empresa_Exibicao = this.lstEmpresa.GetTexts()[i];
                this.Parametro.Royalty_Tipo = this.cboTipoRoyalties.GetValue();
                if (this.cboTipoRoyalties.GetValue() > 0) {
                    this.Parametro.Royalty_Valor = (this.txtPercentRoyalties.GetText().FormatNumber(1).CNum());
                }
                else {
                    this.Parametro.Royalty_Valor = this.txtPercentRoyalties.GetText().CNum();
                }
                if (this.cboTipoTaxaProp.GetValue() > 0) {
                    this.Parametro.Taxa_Propaganda_Valor = (this.txtPercentTaxaProp.GetText().FormatNumber(1).CNum());
                }
                else {
                    this.Parametro.Taxa_Propaganda_Valor = this.txtPercentTaxaProp.GetText().CNum();
                }
                this.Parametro.Taxa_Propaganda_Tipo = this.cboTipoTaxaProp.GetValue();
                this.Parametro.Royalty_Tipo_Exibicao = this.cboTipoRoyalties.GetText();
                this.Parametro.Taxa_Propaganda_Tipo_Exibicao = this.cboTipoTaxaProp.GetText();
                this.Parametro.Dia_Vencimento = this.txtDiaVencimento.GetText().CNum();
                this.Parametro.Qtde_Parcela = this.txtQtdeParcelas.GetText().CNum();
                this.Parametro.Intervalo_Entre_Parcelas = this.txtIntervaloParcelas.GetText().CNum();
                this.Parametros.push(this.Parametro);
            }
            this.grdParametros.PreencherGrid(this.Parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ParamRoyPro.prototype.OnTipoRoyaltyChanged = function () {
        this.ValidaTipoRoyalty();
    };
    C_ParamRoyPro.prototype.OnTipoTaxaRoyaltyChanged = function () {
        this.ValidaTipoTaxaPropaganda();
    };
    C_ParamRoyPro.prototype.ValidaTipoRoyalty = function () {
        if (this.cboTipoRoyalties.GetValue() == 0) {
            this.txtPercentRoyalties.SetTextLabelControl("Valor de Royalties (R$)");
        }
        else {
            this.txtPercentRoyalties.SetTextLabelControl("Percentual de Royalties (%)");
        }
    };
    C_ParamRoyPro.prototype.ValidaTipoTaxaPropaganda = function () {
        if (this.cboTipoTaxaProp.GetValue() == 0) {
            this.txtPercentTaxaProp.SetTextLabelControl("Valor de Propaganda (R$)");
        }
        else {
            this.txtPercentTaxaProp.SetTextLabelControl("Percentual de Taxa de Propaganda (%)");
        }
    };
    C_ParamRoyPro.prototype.DigitouParcelas = function () {
        if (this.txtQtdeParcelas.GetText() < "1" || this.txtQtdeParcelas.GetText() > "4") {
            MostrarAlerta("informe uma data correta!");
            this.txtQtdeParcelas.Limpar();
            this.txtQtdeParcelas.Focus();
        }
        if (this.txtQtdeParcelas.GetText() == "1") {
            this.txtIntervaloParcelas.Enabled = false;
        }
        else {
            this.txtIntervaloParcelas.Enabled = true;
        }
    };
    C_ParamRoyPro.prototype.DigitouVencimento = function () {
        if (this.txtDiaVencimento.GetText().CNum() < 1 || this.txtDiaVencimento.GetText().CNum() > 31) {
            MostrarAlerta("Informe uma data correta!");
            this.txtDiaVencimento.Limpar();
            this.txtDiaVencimento.Focus();
        }
    };
    C_ParamRoyPro.prototype.DigitouIntervalo = function () {
        if (this.txtIntervaloParcelas.GetText() == "" || this.txtIntervaloParcelas.GetText().CNum() < 0) {
            MostrarAlerta("Informe um intervalo correto!");
            this.txtIntervaloParcelas.Limpar();
            this.txtIntervaloParcelas.Focus();
        }
        else if (!this.validaIntervalo()) {
            MostrarAlerta("O Intervalo Entre as Parcelas deve ser escolhido de modo que as parcelas sejam pagas dentro do mesmo mês.");
            this.txtIntervaloParcelas.Limpar();
            this.txtIntervaloParcelas.Focus();
        }
    };
    C_ParamRoyPro.prototype.validaIntervalo = function () {
        var intervalo = this.txtIntervaloParcelas.GetText().CNum();
        var parcelas = this.txtQtdeParcelas.GetText().CNum();
        var vencimento = this.txtDiaVencimento.GetText().CNum();
        if ((intervalo * parcelas) + vencimento < 30) {
            return true;
        }
        else {
            return false;
        }
    };
    C_ParamRoyPro.prototype.OnClickGravar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        var parametrosRoyalty = [];
        parametrosRoyalty = this.Parametros;
        var parametros = {
            entity: parametrosRoyalty,
            tela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        abrirEspera("");
        this.ExecutarFuncaoServerSideAsynch("Gravar", parametros, function (d) {
            fecharEspera();
            var retorno = GetRetornoAJAX(d);
            if (retorno == "Sucesso") {
                MostrarMensagem("Gravado com sucesso!");
                _this.LimparCampos();
            }
            else {
                MostrarAlerta(retorno);
            }
        }, this.TratarErroFuncaoAsync, this);
    };
    C_ParamRoyPro.prototype.OnExcluirLinhaGrade = function (s, e) {
        try {
            var parametros = {
                entity: e.item,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            this.ExecutarFuncaoServerSideAsynch("Excluir", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (retorno == "Sucesso") {
                    MostrarMensagem("Excluído com sucesso!");
                }
                else {
                    MostrarAlerta(retorno);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ParamRoyPro.prototype.OnClickNovo = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
        this.Parametros = [];
        this.RefreshAngular();
    };
    C_ParamRoyPro.prototype.LimparCampos = function () {
        this.txtDiaVencimento.Limpar();
        this.txtIntervaloParcelas.Limpar();
        this.txtPercentRoyalties.Limpar();
        this.txtPercentTaxaProp.Limpar();
        this.txtQtdeParcelas.Limpar();
        this.cboTipoRoyalties.SetValue("Selecionar");
        this.cboTipoTaxaProp.SetValue("Selecionar");
        this.lstEmpresa.LimparSelecao();
    };
    C_ParamRoyPro.prototype.PreencherCadastrados = function () {
        try {
            this.Parametros = [];
            var parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            if (retorno) {
                this.Parametros = retorno;
            }
            this.grdParametros.PreencherGrid(this.Parametros);
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_ParamRoyPro;
}(MouraPageAngular));
var c_ParamRoyPro = new C_ParamRoyPro();
//# sourceMappingURL=C_ParamRoyPro.js.map