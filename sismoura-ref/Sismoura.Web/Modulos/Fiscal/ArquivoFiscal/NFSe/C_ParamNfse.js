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
var C_ParamNfse = /** @class */ (function (_super) {
    __extends(C_ParamNfse, _super);
    function C_ParamNfse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ParamNfse.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamNfse.prototype, "lblLocal", {
        get: function () {
            return window['lblLocal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamNfse.prototype, "abaGeral", {
        get: function () {
            return window['abaGeral_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamNfse.prototype, "Tab", {
        get: function () {
            return window['Tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamNfse.prototype, "abaEtransparencia", {
        get: function () {
            return window['abaEtransparencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamNfse.prototype, "abaOsasco", {
        get: function () {
            return window['abaOsasco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamNfse.prototype, "abaNovaLima", {
        get: function () {
            return window['abaNovaLima_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamNfse.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamNfse.prototype, "btnExcluir", {
        get: function () {
            return window['btnExcluir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamNfse.prototype, "btnNovo", {
        get: function () {
            return window['btnNovo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParamNfse.prototype, "txtCpfResponsavel", {
        get: function () {
            return window['txtCpfResponsavel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ParamNfse.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.AbasVisible(false, 0);
        this.txtCpfResponsavel.IsCPF = true;
        this.txtCpfResponsavel.SetTextLabelControl("CPF do Responsável");
        this.txtCpfResponsavel.SetText("");
    };
    C_ParamNfse.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.ValidarCampos, this);
        }
        if (this.btnNovo) {
            adicionarEventoMoura(this.btnNovo.Click, this.OnClickBtnNovo, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickBtnGravar, this);
        }
    };
    C_ParamNfse.prototype.LimparCampos = function () {
        this.GetScope()["Entity"] = {};
        this.AbasVisible(false, 0);
        this.lblLocal.Text = "";
        this.txtCpfResponsavel.IsCPF = true;
        this.txtCpfResponsavel.SetTextLabelControl("CPF do Responsável");
        this.txtCpfResponsavel.SetText("");
        this.RefreshAngular();
    };
    C_ParamNfse.prototype.OnClickBtnNovo = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
    };
    C_ParamNfse.prototype.OnClickBtnGravar = function (s, e) {
        e.processOnServer = false;
        this.Gravar();
    };
    C_ParamNfse.prototype.Gravar = function () {
        try {
            var Entity = this.GetScope()["Entity"];
            if (this.cboEmpresa.GetValue() > 0) {
                var parametros = {
                    Entity: Entity,
                    tela: ValoresSismoura.NomeTela,
                    codUsuario: ValoresSismoura.UsuarioLogado
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("Gravar", parametros);
                if (retorno == "Sucesso") {
                    MostrarMensagem("Registro gravado com sucesso!");
                    this.LimparCampos();
                }
                else {
                    MostrarAlerta("Erro ao gravar o registro!");
                }
            }
            else {
                MostrarAlerta("Preenchimento incorreto: Empresa");
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ParamNfse.prototype.AbasVisible = function (flag, CodigoIbge) {
        this.lblLocal.Visible = flag;
        this.Tab.AlterarVisibleAba("abaGeral", true);
        if (this.cboEmpresa.Combo.length > 0) {
            if (CodigoIbge != 3303906 && CodigoIbge != 3525300) {
                //'Etransparência
                this.Tab.AlterarVisibleAba("abaEtransparencia", false);
            }
            else {
                this.Tab.AlterarVisibleAba("abaEtransparencia", true);
            }
            if (CodigoIbge != 3144805) {
                //Nova Lima
                this.Tab.AlterarVisibleAba("abaNovaLima", false);
            }
            else {
                this.Tab.AlterarVisibleAba("abaNovaLima", true);
            }
            if (CodigoIbge != 3534401) {
                //Osasco
                this.Tab.AlterarVisibleAba("abaOsasco", false);
            }
            else {
                this.Tab.AlterarVisibleAba("abaOsasco", true);
            }
        }
    };
    C_ParamNfse.prototype.ValidarCampos = function () {
        var Entity = this.GetScope()["Entity"];
        var parametros;
        parametros = {
            Empresa: this.cboEmpresa.GetValue()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetByCidade", parametros);
        if (retorno) {
            if (retorno.Cidade == undefined) {
                MostrarAlerta("A empresa selecionada não possui cidade informada em seu cadastro");
                this.LimparCampos();
                this.cboEmpresa.LimparSelecao();
                return;
            }
            if (retorno.Codigo_Cidade_IBGE == undefined) {
                MostrarAlerta("A cidade vinculada a empresa selecionada não possui `Cód. IBGE` informada em seu cadastro");
                this.LimparCampos();
                this.cboEmpresa.LimparSelecao();
                return;
            }
            this.lblLocal.Text = retorno.Cidade + " - " + retorno.Codigo_Cidade_IBGE + " - " + retorno.Estado;
            this.AbasVisible(true, retorno.Codigo_Cidade_IBGE);
        }
        else {
            MostrarAlerta("O município da empresa selecionada não está homologado para emissão de NFS- e pelo SismouraWEB");
            this.lblLocal.Text = "";
            this.AbasVisible(false, retorno.Codigo_Cidade_IBGE);
            this.cboEmpresa.LimparSelecao();
            return;
        }
        parametros = {
            Empresa: this.cboEmpresa.GetValue()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetByEmpresa", parametros);
        if (retorno) {
            this.GetScope()["Entity"] = retorno;
        }
    };
    return C_ParamNfse;
}(MouraPageAngular));
var c_ParamNfse = new C_ParamNfse();
//# sourceMappingURL=C_ParamNfse.js.map