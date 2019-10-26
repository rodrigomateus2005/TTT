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
var C_PDVMovel = /** @class */ (function (_super) {
    __extends(C_PDVMovel, _super);
    function C_PDVMovel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_PDVMovel.prototype, "lblUsuarioInseriu", {
        //Componentes Tela
        get: function () {
            return window['lblUsuarioInseriu_Object'];
        },
        set: function (value) {
            this.GetScope()["lblUsuarioInseriu_Object"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDVMovel.prototype, "lblUsuarioAlterou", {
        get: function () {
            return window['lblUsuarioAlterou_Object'];
        },
        set: function (value) {
            this.GetScope()["lblUsuarioAlterou_Object"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDVMovel.prototype, "lblDataInseriu", {
        get: function () {
            return window['lblDataInseriu_Object'];
        },
        set: function (value) {
            this.GetScope()["lblDataInseriu_Object"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDVMovel.prototype, "lblDataAlterou", {
        get: function () {
            return window['lblDataAlterou_Object'];
        },
        set: function (value) {
            this.GetScope()["lblDataAlterou_Object"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDVMovel.prototype, "grdDispositivos", {
        get: function () {
            return window['grdDispositivos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDVMovel.prototype, "Dispositivo", {
        get: function () {
            var that = this.GetScope()["Dispositivo"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Dispositivo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDVMovel.prototype, "Dispositivos", {
        get: function () {
            return this.GetScope()["Dispositivos"];
        },
        set: function (value) {
            this.GetScope()["Dispositivos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDVMovel.prototype, "mdDispositivo", {
        //Componentes Modal Dispositivos
        get: function () {
            return window["mdDispositivo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDVMovel.prototype, "txtDescDispositivo", {
        get: function () {
            return window['txtDescDispositivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDVMovel.prototype, "txtPDVDispositivo", {
        get: function () {
            return window['txtPDVDispositivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDVMovel.prototype, "txtDeposito", {
        get: function () {
            return window['txtDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDVMovel.prototype, "txtCasasDecValor", {
        get: function () {
            return window['txtCasasDecValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDVMovel.prototype, "txtCasasDecQtde", {
        get: function () {
            return window['txtCasasDecQtde_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDVMovel.prototype, "btnAddDispositivo", {
        get: function () {
            return window['btnAddDispositivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDVMovel.prototype, "btnFechar", {
        get: function () {
            return window['btnFechar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDVMovel.prototype, "cboTipoEmissao", {
        get: function () {
            return window['cboTipoEmissao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDVMovel.prototype, "txtSerieNFCe", {
        get: function () {
            return window['txtSerieNFCe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDVMovel.prototype, "chkNFceContingencia", {
        get: function () {
            return window['chkNFceContingencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDVMovel.prototype, "chkNFCeAmbiente", {
        get: function () {
            return window['chkNFCeAmbiente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDVMovel.prototype, "txtNFCeIdToken", {
        get: function () {
            return window['txtNFCeIdToken_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PDVMovel.prototype, "txtNFCeToken", {
        get: function () {
            return window['txtNFCeToken_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_PDVMovel.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.AntesGravar, this.OnAntesGravar, this);
        if (this.grdDispositivos) {
            adicionarEventoMoura(this.grdDispositivos.SelecionouItem, this.OnSelecionouLinha, this);
        }
        if (this.btnAddDispositivo) {
            adicionarEventoMoura(this.btnAddDispositivo.Click, this.OnClickbtnAddDispositivo, this);
        }
        if (this.btnFechar) {
            adicionarEventoMoura(this.btnFechar.Click, this.OnClickbtnFechar, this);
        }
    };
    C_PDVMovel.prototype.OnMudouTipoEmissao = function () {
        debugger;
        if (this.Dispositivo.Tipo_Emissao_Fiscal && this.Dispositivo.Tipo_Emissao_Fiscal == 1) {
            this.chkNFceContingencia.Visible = true;
            this.chkNFCeAmbiente.Visible = true;
            this.txtNFCeIdToken.Visible = true;
            this.txtNFCeToken.Visible = true;
            this.txtSerieNFCe.Visible = true;
        }
        else {
            this.chkNFceContingencia.Visible = false;
            this.chkNFCeAmbiente.Visible = false;
            this.txtNFCeIdToken.Visible = false;
            this.txtNFCeToken.Visible = false;
            this.txtSerieNFCe.Visible = false;
        }
    };
    C_PDVMovel.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.OnDepoisLimpar(this.GetScope().Entity);
    };
    C_PDVMovel.prototype.OnSelecionouLinha = function () {
        try {
            this.mdDispositivo.ModalDialog.Show();
            this.txtDescDispositivo.Focus();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PDVMovel.prototype.OnClickbtnAddDispositivo = function (s, e) {
        e.processOnServer = false;
        try {
            var isDescDuplicada = void 0;
            var parametros;
            parametros = {
                codCliente: this.EntityTela.Cliente,
                descDispositivo: this.Dispositivo.Descricao,
                codDispositivo: this.Dispositivo.Codigo
            };
            isDescDuplicada = this.ExecutarFuncaoServerSideSynch("IsDescricaoDuplicadaByCliente", parametros);
            if (isDescDuplicada) {
                MostrarAlerta("Preencha o campo corretamente: Descrição do dispositivo não pode se repetir para o mesmo cliente.");
                this.txtDescDispositivo.Focus();
                return;
            }
            else if (this.Dispositivo.Tipo <= 0) {
                MostrarAlerta("Preencha o campo corretamente: Tipo do dispositivo");
                return;
            }
            else if (this.Dispositivo.Status <= 0) {
                MostrarAlerta("Preencha o campo corretamente: Status do dispositivo");
                return;
            }
            else if (this.Dispositivo.Codigo_PDV <= 0) {
                MostrarAlerta("Preencha o campo corretamente: PDV do dispositivo");
                this.txtPDVDispositivo.Focus();
                return;
            }
            else if (this.Dispositivo.Deposito <= 0) {
                MostrarAlerta("Preencha o campo corretamente: Depósito do dispositivo");
                this.txtPDVDispositivo.Focus();
                return;
            }
            else {
                this.grdDispositivos.AdicionarOuAlterarItemAtual();
                this.mdDispositivo.Hide();
                this.RefreshAngular();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PDVMovel.prototype.OnClickbtnFechar = function (s, e) {
        e.processOnServer = false;
        this.mdDispositivo.Hide();
    };
    C_PDVMovel.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherEntidade(this.EntityTela.Cliente.toString());
        this.AtualizarLabels(this.EntityTela);
        this.RefreshAngular();
        return true;
    };
    C_PDVMovel.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.LimparDispositivo();
        if (Entity) {
            this.AtualizarLabels(Entity);
        }
        else {
            Entity.Data_Habilitado = this.DataServidor();
            Entity.Data_Inseriu = this.DataServidor();
        }
        this.RefreshAngular();
    };
    C_PDVMovel.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Cliente = 0;
        Entity.Habilitado = false;
        this.AtualizarLabels(Entity);
        this.Dispositivos = [];
        this.LimparDispositivo();
    };
    C_PDVMovel.prototype.LimparDispositivo = function () {
        this.Dispositivo = {};
        this.RefreshAngular();
    };
    C_PDVMovel.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Dispositivos = this.Dispositivos;
        this.RefreshAngular();
        return true;
    };
    C_PDVMovel.prototype.AtualizarLabels = function (Entity) {
        if (!String.IsNullOrWhiteSpace((Entity.Cliente.toString())) && Entity.Cliente > 0) {
            var parametros;
            parametros = {
                codCliente: Entity.Cliente
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetInformacoesCliente", parametros);
            var dispositivos = this.ExecutarFuncaoServerSideSynch("GetDispositivosPorCliente", parametros);
            this.lblUsuarioInseriu.Text = retorno.Informacoes[0].Usuario_Inseriu_Nome;
            this.lblUsuarioAlterou.Text = retorno.Informacoes[0].Usuario_Alterou_Nome;
            this.lblDataInseriu.Text = retorno.Informacoes[0].Data_Inseriu.ToDate().FormataDataHora();
            this.lblDataAlterou.Text = retorno.Informacoes[0].Data_Alterou.ToDate().FormataDataHora();
            this.Dispositivos = dispositivos;
        }
        else {
            this.lblUsuarioInseriu.Text = "-";
            this.lblUsuarioAlterou.Text = "-";
            this.lblDataInseriu.Text = "-";
            this.lblDataAlterou.Text = "-";
            Entity.Data_Habilitado = this.DataServidor();
        }
        this.RefreshAngular();
    };
    return C_PDVMovel;
}(MouraPageCadastroAngular));
var c_PDVMovel = new C_PDVMovel();
//# sourceMappingURL=C_PDVMovel.js.map