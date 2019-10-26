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
var E_ArqFis = /** @class */ (function (_super) {
    __extends(E_ArqFis, _super);
    function E_ArqFis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(E_ArqFis.prototype, "mdEmail", {
        get: function () {
            return window['mdEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(E_ArqFis.prototype, "txtEmailContabilista", {
        get: function () {
            return window['txtEmailContabilista_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(E_ArqFis.prototype, "txtEmailSecundario", {
        get: function () {
            return window['txtEmailSecundario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(E_ArqFis.prototype, "txtCorpoEmail", {
        get: function () {
            return window['txtCorpoEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(E_ArqFis.prototype, "btnEnviar", {
        get: function () {
            return window['btnEnviar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(E_ArqFis.prototype, "btnCancelar", {
        get: function () {
            return window['btnCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(E_ArqFis.prototype, "enviarEmail", {
        get: function () {
            return window['enviarEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(E_ArqFis.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(E_ArqFis.prototype, "txtMesAno", {
        get: function () {
            return window['txtMesAno_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(E_ArqFis.prototype, "btnExportar", {
        get: function () {
            return window['btnExportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(E_ArqFis.prototype, "optTipo", {
        get: function () {
            return window['optTipo_Objec'];
        },
        enumerable: true,
        configurable: true
    });
    E_ArqFis.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnEnviar) {
            adicionarEventoMoura(this.btnEnviar.Click, this.OnClickEnviarEmail, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnClickCancelarEmail, this);
        }
        //if (this.btnExportar && this.btnExportar.Botao) {
        //    adicionarEventoDevExpress(this.btnExportar.Botao.Click, this.OnClickExportar, this);
        //}
    };
    E_ArqFis.prototype.OnClickExportar = function (s, e) {
        e.processOnServer = false;
        try {
            var textoCorpo = void 0;
            var parametros = {
                codEmpresa: ValoresSismoura.EmpresaPadraoUsuario
            };
            var retorno = this.ExecutarFuncaoServerSideSynch('ObterEmailContabilista', parametros);
            if (!String.IsNullOrWhiteSpace(retorno)) {
                this.txtEmailContabilista.SetText(retorno);
            }
            textoCorpo = 'Segue em anexo os arquivos fiscais referente ';
            if (this.txtPeriodo.textBoxCalendarioInicio.GetDate() != null && this.txtPeriodo.textBoxCalendarioFim.GetDate() != null) {
                textoCorpo + this.txtPeriodo.textBoxCalendarioInicio.GetDate().FormataData() + ' a ' + this.txtPeriodo.textBoxCalendarioFim.GetDate().FormataData();
            }
            else if (this.txtMesAno && this.txtMesAno.Date != null) {
                textoCorpo + ' a ' + this.txtMesAno.GetDate().FormataData();
            }
            textoCorpo = textoCorpo + '\n\nVALORES TOTAIS \n\n';
            textoCorpo = textoCorpo + 'NF             R$' + '\n';
            textoCorpo = textoCorpo + 'NF Canceladas  R$' + '\n\n';
            textoCorpo = textoCorpo + 'TOTAL NF POR CFOP \n\n';
            textoCorpo = textoCorpo + 'CFOP           R$' + '\n';
            textoCorpo = textoCorpo + 'CFOP           R$' + '\n';
            this.txtCorpoEmail.SetText(textoCorpo);
            this.mdEmail.Show();
            if (this.txtEmailContabilista.GetText() == '') {
                MostrarAlerta("O contabilista não possui email cadastrado");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    E_ArqFis.prototype.OnClickEnviarEmail = function (s, e) {
        e.processOnServer = false;
        //let destinatarios: string[] = [];
        //let anexos: string[] = [];
        //destinatarios.push(this.txtEmailContabilista.GetText());
        //if (!String.IsNullOrWhiteSpace(this.txtEmailSecundario.GetText())) {
        //    destinatarios.push(this.txtEmailSecundario.GetText());
        //}
        //anexos.push('C:\Users\igor_silva\Downloads\ArquivosFiscais.zip');
        ////this.enviarEmail.AdicionarAnexo('C:\Users\igor_silva\Downloads\ArquivosFiscais.zip')
        ////this.enviarEmail.Destinatarios = destinatarios;
        ////this.enviarEmail.txtAssunto.SetText('');
        ////this.enviarEmail.txtMensagem.Html = this.txtCorpoEmail.GetText()
        ////this.enviarEmail.cboRemetentes.SetValue(1);
        //this.enviarEmail.PreencherInformacoesEmail(destinatarios, anexos, 'Teste', this.txtCorpoEmail.GetText(), 1)
        //this.enviarEmail.btnEnviar.Botao.DoClick();
        //MostrarMensagem('Deu bom !');
        try {
            if (String.IsNullOrWhiteSpace(this.txtEmailContabilista.GetText())) {
                return;
            }
            var parametros = {
                codEmpresa: ValoresSismoura.EmpresaPadraoUsuario,
                mensagem: this.txtCorpoEmail.GetText(),
                emailContabilista: this.txtEmailContabilista.GetText(),
                emailSecundario: this.txtEmailSecundario.GetText(),
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch('EnviarEmailContador', parametros);
            if (retorno) {
                MostrarMensagem('E-mail enviado com sucesso!');
                this.mdEmail.Hide();
            }
            else {
                MostrarAlerta('Ocorreu um erro ao enviar e-mail!');
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    E_ArqFis.prototype.OnClickCancelarEmail = function (s, e) {
        e.processOnServer = false;
        this.mdEmail.Hide();
    };
    return E_ArqFis;
}(MouraPage));
var e_ArqFis = new E_ArqFis();
//# sourceMappingURL=E_ArqFis.js.map