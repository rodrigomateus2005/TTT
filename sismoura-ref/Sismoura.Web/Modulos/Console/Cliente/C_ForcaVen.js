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
var C_ForcaVen = /** @class */ (function (_super) {
    __extends(C_ForcaVen, _super);
    function C_ForcaVen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.codigosCliente = [];
        _this.codigosProduto = [];
        return _this;
    }
    Object.defineProperty(C_ForcaVen.prototype, "lblUsuarioInseriu", {
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
    Object.defineProperty(C_ForcaVen.prototype, "lstCamposCliente", {
        get: function () {
            return window['lstCamposCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForcaVen.prototype, "lstCamposProduto", {
        get: function () {
            return window['lstCamposProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForcaVen.prototype, "lblUsuarioAlterou", {
        get: function () {
            return window['lblUsuarioAlterou_Object'];
        },
        set: function (value) {
            this.GetScope()["lblUsuarioAlterou_Object"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForcaVen.prototype, "lblDataInseriu", {
        get: function () {
            return window['lblDataInseriu_Object'];
        },
        set: function (value) {
            this.GetScope()["lblDataInseriu_Object"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForcaVen.prototype, "lblDataAlterou", {
        get: function () {
            return window['lblDataAlterou_Object'];
        },
        set: function (value) {
            this.GetScope()["lblDataAlterou_Object"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForcaVen.prototype, "grdDispositivos", {
        get: function () {
            return window['grdDispositivos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForcaVen.prototype, "Dispositivo", {
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
    Object.defineProperty(C_ForcaVen.prototype, "Dispositivos", {
        get: function () {
            return this.GetScope()["Dispositivos"];
        },
        set: function (value) {
            this.GetScope()["Dispositivos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForcaVen.prototype, "Campos", {
        get: function () {
            return this.GetScope()["Campos"];
        },
        set: function (value) {
            this.GetScope()["Campos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForcaVen.prototype, "Campo", {
        get: function () {
            return this.GetScope()["Campo"];
        },
        set: function (value) {
            this.GetScope()["Campo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForcaVen.prototype, "mdDispositivo", {
        //Componentes Modal Dispositivos
        get: function () {
            return window["mdDispositivo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForcaVen.prototype, "txtDescDispositivo", {
        get: function () {
            return window['txtDescDispositivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForcaVen.prototype, "txtPDVDispositivo", {
        get: function () {
            return window['txtPDVDispositivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForcaVen.prototype, "txtDeposito", {
        get: function () {
            return window['txtDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForcaVen.prototype, "txtCasasDecValor", {
        get: function () {
            return window['txtCasasDecValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForcaVen.prototype, "txtCasasDecQtde", {
        get: function () {
            return window['txtCasasDecQtde_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForcaVen.prototype, "btnAddDispositivo", {
        get: function () {
            return window['btnAddDispositivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForcaVen.prototype, "btnFechar", {
        get: function () {
            return window['btnFechar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ForcaVen.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.AntesGravar, this.OnAntesGravar, this);
        if (this.grdDispositivos) {
            adicionarEventoMoura(this.grdDispositivos.SelecionouItem, this.OnSelecionouLinha, this);
            adicionarEventoMoura(this.grdDispositivos.LimpouItem, this.OnLimpouLinha, this);
            adicionarEventoMoura(this.grdDispositivos.Validando, this.OnValidandoLinha, this);
            adicionarEventoMoura(this.grdDispositivos.ItemAlterado, this.OnAlterouItemLinha, this);
        }
        if (this.btnAddDispositivo) {
            adicionarEventoMoura(this.btnAddDispositivo.Click, this.OnClickbtnAddDispositivo, this);
        }
        if (this.btnFechar) {
            adicionarEventoMoura(this.btnFechar.Click, this.OnClickbtnFechar, this);
        }
        //if (this.grdDispositivos) {
        //    
        //}
    };
    C_ForcaVen.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.OnDepoisLimpar(this.GetScope().Entity);
    };
    C_ForcaVen.prototype.OnSelecionouLinha = function () {
        try {
            this.mdDispositivo.ModalDialog.Show();
            this.txtDescDispositivo.Focus();
            if (!this.Dispositivo.Tipo) {
                this.Dispositivo.Tipo = 1;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ForcaVen.prototype.OnLimpouLinha = function (s, e) {
        try {
            var item = e.item;
            if (item) {
                this.LimparDispositivo(item);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ForcaVen.prototype.OnValidandoLinha = function (s, e) {
        try {
            var item = e.item;
            if (item) {
                var isDescDuplicada;
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
                    e.cancelar = true;
                    return;
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ForcaVen.prototype.OnAlterouItemLinha = function (s, e) {
        this.mdDispositivo.Hide();
        this.RefreshAngular();
    };
    C_ForcaVen.prototype.OnClickbtnAddDispositivo = function (s, e) {
        if (!e.cancelEventAndBubble) {
            e.processOnServer = false;
            try {
                var isDescDuplicada = void 0;
                var parametros;
                this.grdDispositivos.AdicionarOuAlterarItemAtual();
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    C_ForcaVen.prototype.OnClickbtnFechar = function (s, e) {
        e.processOnServer = false;
        this.mdDispositivo.Hide();
    };
    C_ForcaVen.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherEntidade(this.EntityTela.Cliente.toString());
        this.AtualizarLabels(this.EntityTela);
        this.RefreshAngular();
        return true;
    };
    C_ForcaVen.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.LimparDispositivo(this.Dispositivo);
        if (Entity) {
            this.AtualizarLabels(Entity);
        }
        else {
            Entity.Data_Habilitado = this.DataServidor();
            Entity.Data_Inseriu = this.DataServidor();
        }
        debugger;
        var parametros = {
            codForcaVenda: Entity.ID
        };
        var retornoCampos = this.ExecutarFuncaoServerSideSynch("GetByCampos", parametros);
        this.EntityTela.Campos = retornoCampos;
        this.PreencherCampos(this.EntityTela.Campos);
        this.RefreshAngular();
    };
    C_ForcaVen.prototype.PreencherCampos = function (campos) {
        if (campos) {
            for (var x = 0; x < campos.length; x++) {
                if (campos[x].Codigo_Tela == 2) {
                    this.codigosCliente.push(campos[x].Campo.toString());
                }
                else {
                    this.codigosProduto.push(campos[x].Campo.toString());
                }
            }
            if (this.lstCamposCliente) {
                this.lstCamposCliente.SetValues(this.codigosCliente);
            }
            if (this.lstCamposProduto) {
                this.lstCamposProduto.SetValues(this.codigosProduto);
            }
        }
    };
    C_ForcaVen.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Cliente = 0;
        Entity.Habilitado = false;
        this.AtualizarLabels(Entity);
        this.lstCamposCliente.LimparSelecao();
        this.lstCamposProduto.LimparSelecao();
        this.Dispositivos = [];
        this.LimparDispositivo(this.Dispositivo);
    };
    C_ForcaVen.prototype.LimparDispositivo = function (dispositivo) {
        dispositivo.Codigo = 0;
        dispositivo.Descricao = "";
        dispositivo.Dispositivo = "";
        dispositivo.ID_Dispositivo = "";
        dispositivo.Status = 0;
        dispositivo.Data_Inclusao = this.DataServidor();
        dispositivo.Casas_Decimais_Valor = 0;
        dispositivo.Casas_Decimais_Qtde = 0;
        dispositivo.Desconto_Utilizado = 0;
        this.RefreshAngular();
    };
    C_ForcaVen.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Dispositivos = this.Dispositivos;
        this.Campos = [];
        for (var x = 0; x < this.lstCamposCliente.GetValues().length; x++) {
            this.Campo = {};
            this.Campo.Campo = this.lstCamposCliente.GetValues()[x];
            this.Campo.Codigo_Tela = 2;
            this.Campos.push(this.Campo);
        }
        for (var x = 0; x < this.lstCamposProduto.GetValues().length; x++) {
            this.Campo = {};
            this.Campo.Campo = this.lstCamposProduto.GetValues()[x];
            this.Campo.Codigo_Tela = 1;
            this.Campos.push(this.Campo);
        }
        this.EntityTela.Campos = this.Campos;
        this.RefreshAngular();
        return true;
    };
    C_ForcaVen.prototype.AtualizarLabels = function (Entity) {
        if (!String.IsNullOrWhiteSpace((Entity.Cliente.toString())) && Entity.Cliente > 0) {
            var parametros;
            parametros = {
                codCliente: Entity.Cliente
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetInformacoesCliente", parametros);
            var dispositivos = this.ExecutarFuncaoServerSideSynch("GetDispositivosPorCliente", parametros);
            this.lblUsuarioInseriu.Text = retorno.Informacoes[0].Usuario_Inseriu_Nome;
            this.lblUsuarioAlterou.Text = retorno.Informacoes[0].Usuario_Alterou_Nome;
            this.lblDataInseriu.Text = "";
            if (retorno.Informacoes[0].Data_Inseriu) {
                this.lblDataInseriu.Text = retorno.Informacoes[0].Data_Inseriu.ToDate().FormataDataHora();
            }
            this.lblDataAlterou.Text = "";
            if (retorno.Informacoes[0].Data_Alterou) {
                this.lblDataAlterou.Text = retorno.Informacoes[0].Data_Alterou.ToDate().FormataDataHora();
            }
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
    return C_ForcaVen;
}(MouraPageCadastroAngular));
var c_ForcaVen = new C_ForcaVen();
//# sourceMappingURL=C_ForcaVen.js.map