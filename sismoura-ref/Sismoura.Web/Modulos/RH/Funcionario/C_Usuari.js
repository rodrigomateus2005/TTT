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
var C_Usuari = /** @class */ (function (_super) {
    __extends(C_Usuari, _super);
    function C_Usuari() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Usuari.prototype, "chkAutonomo", {
        get: function () {
            return window["chkAutonomo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari.prototype, "chkContador", {
        get: function () {
            return window["chkContador_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari.prototype, "chkFranqueado", {
        get: function () {
            return window["chkFranqueado_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari.prototype, "chkFranqueador", {
        get: function () {
            return window["chkFranqueador_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari.prototype, "chkSocio", {
        get: function () {
            return window["chkSocio_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari.prototype, "mdMensagem", {
        get: function () {
            return window['mdMensagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari.prototype, "txtMensagem", {
        get: function () {
            return window['txtMensagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari.prototype, "btnOK", {
        get: function () {
            return window['btnOK_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Usuari.prototype.Init = function () {
        _super.prototype.Init.call(this);
        this.AdicionarEventosPagina();
        this.VerificaCheckBoxAutonomo();
    };
    C_Usuari.prototype.OnCheckBoxSelectedIndexChangedAutonomo = function () {
        if (this.chkFranqueado.Check != undefined) {
            this.chkFranqueado.Check.checked = false;
            this.chkFranqueador.Check.checked = false;
        }
        this.chkSocio.Check.checked = false;
        this.chkContador.Check.checked = false;
        this.VerificaCheckBoxAutonomo();
    };
    C_Usuari.prototype.VerificaCheckBoxAutonomo = function () {
        if (this.chkAutonomo.Check.checked == true) {
            if (this.chkFranqueado.Check != undefined) {
                this.chkFranqueado.Check.disabled = true;
                this.chkFranqueador.Check.disabled = true;
            }
            this.chkSocio.Check.disabled = true;
            this.chkContador.Check.disabled = true;
        }
        else {
            if (this.chkFranqueado.Check != undefined) {
                this.chkFranqueado.Check.disabled = false;
                this.chkFranqueador.Check.disabled = false;
            }
            this.chkSocio.Check.disabled = false;
            this.chkContador.Check.disabled = false;
        }
    };
    C_Usuari.prototype.OnCheckBoxSelectedIndexChangedContador = function () {
        if (this.chkContador.Check.checked) {
            var texto;
            texto = "Usuários marcados com esse perfil, só terão acesso as seguintes telas: \r\n\r\n";
            texto = texto + "- Relação de Produtos Vinculados a Regra de Imposto  ";
            texto = texto + "- Relação de Produtos Vinculados a Regra de Imposto \r\n";
            texto = texto + "- Relação de Produtos Vinculados a Regra de Imposto por CFOP \r\n";
            texto = texto + "- Relação de Regra de Imposto \r\n";
            texto = texto + "- Relação Analítica de Apuração do ICMS \r\n";
            texto = texto + "- Resumo das Operações com ICMS \r\n";
            texto = texto + "- Relação de Apuração do IPI \r\n";
            texto = texto + "- Relação de Notas Fiscais no Período - Cliente / Fornecedor  \r\n";
            texto = texto + "- Relação de Notas Fiscais no Período - Grupo / SubGrupo / Diária  \r\n";
            texto = texto + "- Relação de Notas Fiscais Agrupadas por Produtos  \r\n";
            texto = texto + "- Relação de Vendas com Nota Fiscal do Consumidor NFC-e \r\n";
            texto = texto + "- Relação Para Escrituração Fiscal NFCe \r\n";
            texto = texto + "- Relação de Vendas por Grupo de Produto NFC-e \r\n";
            texto = texto + "- Relação de Vendas com Cupom Fiscal Eletrônico SAT \r\n";
            texto = texto + "- Relação para Escrituração Fiscal SAT \r\n";
            texto = texto + "- Relação de Vendas por Grupo de Produto SAT \r\n";
            texto = texto + "- Relação de Redução Z \r\n";
            texto = texto + "- Relação de NFS-e emitidas \r\n";
            texto = texto + "- Relação de Compras no Período \r\n";
            texto = texto + "- Relação de Compras por Produto \r\n\r\n";
            texto = texto + "Para que o usuário tenha acesso a mais telas, coloque um outro perfil para o mesmo e atribua permissões a partir das funções administrativas do sistema.";
            this.txtMensagem.SetText(texto);
            this.mdMensagem.Show();
        }
    };
    C_Usuari.prototype.AdicionarEventosPagina = function () {
        if (this.chkAutonomo.Check) {
            adicionarEventoJQuery(this.chkAutonomo.Check, "change", this.OnCheckBoxSelectedIndexChangedAutonomo, this);
        }
        if (this.chkContador.Check) {
            adicionarEventoJQuery(this.chkContador.Check, "change", this.OnCheckBoxSelectedIndexChangedContador, this);
        }
        if (this.btnOK) {
            adicionarEventoMoura(this.btnOK.Click, this.ONClickOK, this);
        }
    };
    C_Usuari.prototype.MostrarModalMensagem = function (s, e) {
        e.processOnServer = false;
        if (this.chkContador.Check.checked) {
            this.mdMensagem.Show();
        }
    };
    C_Usuari.prototype.ONClickOK = function (s, e) {
        e.processOnServer = false;
        this.mdMensagem.Hide();
    };
    return C_Usuari;
}(MouraPageCadastro));
var c_Usuari = new C_Usuari();
//# sourceMappingURL=C_Usuari.js.map