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
var C_MailHosp = /** @class */ (function (_super) {
    __extends(C_MailHosp, _super);
    function C_MailHosp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_MailHosp.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MailHosp.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MailHosp.prototype, "htmlEditorMensagem", {
        get: function () {
            return window['htmlEditorMensagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MailHosp.prototype, "txtTipoDocumento", {
        //get htmlEditorAssinatura(): MouraHTMLEditor {
        //    return window['htmlEditorAssinatura_Object'];
        //}
        get: function () {
            return window['txtTipoDocumento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MailHosp.prototype, "Anexo", {
        get: function () {
            return this.GetScope()['Anexo'];
        },
        set: function (value) {
            this.GetScope()['Anexo'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MailHosp.prototype, "Anexos", {
        get: function () {
            return this.GetScope()['Anexos'];
        },
        set: function (value) {
            this.GetScope()['Anexos'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MailHosp.prototype, "grdAnexos", {
        get: function () {
            return window['grdAnexos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MailHosp.prototype, "grdRegistros", {
        get: function () {
            return window['grdRegistros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MailHosp.prototype, "optTipoHospedagem", {
        get: function () {
            return window['optTipoHospedagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_MailHosp.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.grdRegistros) {
            adicionarEventoMoura(this.grdRegistros.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.grdAnexos) {
            adicionarEventoMoura(this.grdAnexos.AdicionandoItem, this.OnAdicionandoAnexo, this);
            adicionarEventoMoura(this.grdAnexos.ExcluindoItem, this.OnExcluiondoAnexo, this);
        }
    };
    C_MailHosp.prototype.OnExcluiondoAnexo = function (s, e) {
        try {
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_MailHosp.prototype.OnAdicionandoAnexo = function (s, e) {
        try {
            var entidade;
            entidade = e.item;
            if (this.txtTipoDocumento.GetText().CNum() == 0) {
                MostrarAlerta("Informe o documento deste anexo");
                e.cancelar = true;
            }
            else {
                entidade.Codigo = 0;
                if (this.txtCodigo.GetText().CNum() > 0) {
                    entidade.Hospedagem_Email = this.txtCodigo.GetText().CNum();
                }
                entidade.Tipo_Documento = this.txtTipoDocumento.GetText().CNum();
                entidade.Descricao_Documento = this.txtTipoDocumento.GetResultado().toString();
                this.txtTipoDocumento.Limpar();
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_MailHosp.prototype.OnGravouSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
    };
    C_MailHosp.prototype.OnExcluiuSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
    };
    C_MailHosp.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (!this.ValidarCampos()) {
            return false;
        }
        var entidade;
        entidade = this.GetScope().Entity;
        //entidade.Assinatura_Email = this.htmlEditorAssinatura.Html.toString();
        //entidade.Mensagem = this.htmlEditorMensagem.Html.toString();
        var parametros = {
            html: this.htmlEditorMensagem.Html.toString()
        };
        entidade.Mensagem = this.ExecutarFuncaoServerSideSynch("GetHtmlEmbedImage", parametros);
        entidade.Anexos = this.Anexos;
        this.GetScope().Entity = entidade;
        this.RefreshAngular();
        return true;
    };
    C_MailHosp.prototype.ValidarCampos = function () {
        try {
            //if (String.IsNullOrWhiteSpace(this.htmlEditorAssinatura.Html.toString())) {
            //    MostrarAlerta("Informe a assinatura do email.");
            //    return false;
            //}
            if (String.IsNullOrWhiteSpace(this.htmlEditorMensagem.Html.toString())) {
                MostrarAlerta("Informe o corpo do email.");
                return false;
            }
            return true;
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_MailHosp.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.GetCadastrados();
        return true;
    };
    C_MailHosp.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_MailHosp.prototype.OnDepoisLimpar = function (Entity) {
        this.GetCadastrados();
        //Entity = <SiSMoura.Core.Entity.Animais_Hospedagem_Email>{};
        this.txtCodigo.Limpar();
        this.optTipoHospedagem.SetValue("0");
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        //this.htmlEditorAssinatura.Html = "";
        //this.htmlEditorAssinatura.Html = this.GetTags();
        this.htmlEditorMensagem.Html = "";
        this.htmlEditorMensagem.Html = this.GetTags();
        this.Anexo = {};
        this.Anexos = [];
        this.grdAnexos.Grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    C_MailHosp.prototype.GetCadastrados = function () {
        try {
            //var parametros: any;
            //parametros = {};
            //var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            //this.grdRegistros.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_MailHosp.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.optTipoHospedagem.SetValue("0");
    };
    C_MailHosp.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        var parametros = {
            codEmailHospedagem: Entidade.Codigo
        };
        this.Anexos = this.ExecutarFuncaoServerSideSynch("GetAnexosByEmailHospedagem", parametros);
        //this.htmlEditorAssinatura.Html = Entidade.Assinatura_Email;
        this.htmlEditorMensagem.Html = Entidade.Mensagem;
    };
    C_MailHosp.prototype.GetTags = function () {
        var parametros;
        var tags;
        parametros = {};
        tags = this.ExecutarFuncaoServerSideSynch("PreencherTags", parametros);
        return tags;
    };
    return C_MailHosp;
}(MouraPageCadastroAngular));
var c_MailHosp = new C_MailHosp();
//# sourceMappingURL=C_MailHosp.js.map