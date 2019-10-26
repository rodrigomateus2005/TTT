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
var MouraEmail = /** @class */ (function (_super) {
    __extends(MouraEmail, _super);
    function MouraEmail(id) {
        var _this = _super.call(this, id) || this;
        _this.EnviouEmail = new MouraEventHandler();
        return _this;
    }
    Object.defineProperty(MouraEmail.prototype, "Destinatarios", {
        get: function () {
            return JSON.parse(DecodeTextoJSON(this.hdnDestinatarios.value));
        },
        set: function (value) {
            this.hdnDestinatarios.value = EncodeTextoJSON(JSON.stringify(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraEmail.prototype, "Anexos", {
        get: function () {
            return JSON.parse(DecodeTextoJSON(this.hdnAnexos.value));
        },
        set: function (value) {
            this.hdnAnexos.value = EncodeTextoJSON(JSON.stringify(value));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraEmail.prototype, "hdnDestinatarios", {
        get: function () {
            return window[this.ID + '_hdnDestinatarios'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraEmail.prototype, "hdnAnexos", {
        get: function () {
            return window[this.ID + '_hdnAnexos'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraEmail.prototype, "pnModal", {
        get: function () {
            return window[this.ID + '_pnModal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraEmail.prototype, "btnCancelar", {
        get: function () {
            return window[this.ID + '_btnCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraEmail.prototype, "btnEnviar", {
        get: function () {
            return window[this.ID + '_btnEnviar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraEmail.prototype, "btnAtualizar", {
        get: function () {
            return window[this.ID + '_btnAtualizar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraEmail.prototype, "txtEmail", {
        get: function () {
            return window[this.ID + '_txtEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraEmail.prototype, "txtAssunto", {
        get: function () {
            return window[this.ID + '_txtAssunto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraEmail.prototype, "txtMensagem", {
        get: function () {
            return window[this.ID + '_txtMensagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraEmail.prototype, "grdAnexos", {
        get: function () {
            return window[this.ID + '_grdAnexos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraEmail.prototype, "fpArquivo", {
        get: function () {
            return window[this.ID + '_fpArquivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraEmail.prototype, "cboRemetentes", {
        get: function () {
            return window[this.ID + '_Remententes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    MouraEmail.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnBtnCancelarClick, this);
        }
        if (this.btnEnviar) {
            adicionarEventoMoura(this.btnEnviar.Click, this.OnBtnEnviarClick, this);
        }
        if (this.btnAtualizar) {
            adicionarEventoMoura(this.btnAtualizar.Click, this.OnBtnAtualizarClick, this);
        }
        if (this.fpArquivo) {
            adicionarEventoMoura(this.fpArquivo.FileUploadComplete, this.OnFpArquivoUploadComplete, this);
        }
        if (this.pnModal) {
            adicionarEventoMoura(this.pnModal.Fechou, this.OnPnModalFechou, this);
            adicionarEventoMoura(this.pnModal.Abriu, this.OnPnModalAbriu, this);
        }
        if (this.grdAnexos) {
            adicionarEventoMoura(this.grdAnexos.ExcluiuLinhaGrade, this.OnGrdAnexosExcluiuLinhaGrade, this);
        }
    };
    MouraEmail.prototype.OnBtnCancelarClick = function (s, e) {
        e.processOnServer = false;
        this.pnModal.Hide();
    };
    MouraEmail.prototype.OnBtnEnviarClick = function (s, e) {
        try {
            e.processOnServer = false;
            if (!this.cboRemetentes.GetValue()) {
                MostrarAlerta("Informe um remetente");
                return;
            }
            if (this.txtEmail && this.txtEmail.Textbox) {
                if (String.IsNullOrWhiteSpace(this.txtEmail.GetText())) {
                    MostrarAlerta("Informe um E-Mail");
                    return;
                }
            }
            else {
                if (!this.Destinatarios || this.Destinatarios.length == 0) {
                    MostrarAlerta("E-Mail sem destinatários");
                    return;
                }
            }
            if (String.IsNullOrWhiteSpace(this.txtAssunto.GetText())) {
                MostrarAlerta("Informe um assunto");
                return;
            }
            if (String.IsNullOrWhiteSpace(this.txtMensagem.Html)) {
                MostrarAlerta("Informe uma mensagem");
                return;
            }
            var anexos = [];
            var dest = [];
            for (var x = 0; x < this.Anexos.length; x++) {
                anexos.push(this.Anexos[x].FullFileName);
            }
            if (this.txtEmail && this.txtEmail.Textbox) {
                var em = replaceAll(this.txtEmail.GetText(), ",", ";");
                dest = em.split(";");
            }
            else {
                dest = this.Destinatarios;
            }
            var param = {
                codRemetente: this.cboRemetentes.GetValue(),
                assunto: this.txtAssunto.GetText(),
                mensagem: this.txtMensagem.Html,
                destinatarios: JSON.stringify(dest),
                anexos: JSON.stringify(anexos)
            };
            var retorno = this.ExecutarHttpRequest("EnviarEmail", param);
            MostrarMensagem("E-mail enviado com sucesso");
            this.EnviouEmail.FireEvent(this, new MouraEventArgs());
            this.pnModal.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraEmail.prototype.OnBtnAtualizarClick = function (s, e) {
        e.processOnServer = false;
        this.preencherGrid();
    };
    MouraEmail.prototype.OnFpArquivoUploadComplete = function (s, e) {
        this.preencherGrid();
    };
    MouraEmail.prototype.OnPnModalAbriu = function (s, e) {
        var _this = this;
        setTimeout(function () {
            _this.txtMensagem.Editor.SetHeight($("#" + _this.txtMensagem.ID).parent().height() - $("#" + _this.txtMensagem.ID).position().top);
        }, 0);
    };
    MouraEmail.prototype.OnPnModalFechou = function (s, e) {
        var arquivos = [];
        for (var x = 0; x < this.Anexos.length; x++) {
            arquivos.push(this.Anexos[x].FullFileName);
        }
        var param = {
            FullFilesName: JSON.stringify(arquivos)
        };
        var retorno = this.ExecutarHttpRequest("DeletarAnexosEmail", param);
    };
    MouraEmail.prototype.OnGrdAnexosExcluiuLinhaGrade = function (s, e) {
        var item = e.item;
        var param = {
            FullFilesName: JSON.stringify([item.FullFileName])
        };
        var retorno = this.ExecutarHttpRequest("DeletarAnexosEmail", param);
        this.Anexos = this.grdAnexos.DataSource;
    };
    MouraEmail.prototype.MostrarClient = function (destinatarios, anexosFixos, assuntoEmail, corpoEmail) {
        this.Destinatarios = destinatarios;
        this.LimparCampos();
        if (this.txtEmail && this.txtEmail.Textbox) {
            this.txtEmail.SetText(destinatarios.join(", "));
        }
        if (this.txtAssunto && this.txtAssunto.Textbox) {
            this.txtAssunto.SetText(assuntoEmail);
        }
        if (this.txtMensagem && this.txtMensagem.Editor) {
            this.txtMensagem.Html = corpoEmail;
        }
        if (anexosFixos) {
            for (var x = 0; x < anexosFixos.length; x++) {
                this.AdicionarAnexo(anexosFixos[x]);
            }
        }
        this.preencherGrid();
        this.pnModal.Show();
    };
    MouraEmail.prototype.PreencherInformacoesEmail = function (destinatarios, anexosFixos, assuntoEmail, corpoEmail, codRemetente) {
        this.cboRemetentes.Combo.SetValue(codRemetente);
        this.Destinatarios = destinatarios;
        this.LimparCampos();
        if (this.txtEmail && this.txtEmail.Textbox) {
            this.txtEmail.SetText(destinatarios.join(", "));
        }
        if (this.txtAssunto && this.txtAssunto.Textbox) {
            this.txtAssunto.SetText(assuntoEmail);
        }
        if (this.txtMensagem && this.txtMensagem.Editor) {
            this.txtMensagem.Html = corpoEmail;
        }
        if (anexosFixos) {
            for (var x = 0; x < anexosFixos.length; x++) {
                this.AdicionarAnexo(anexosFixos[x]);
            }
        }
        this.preencherGrid();
        //this.pnModal.Show();
    };
    MouraEmail.prototype.AdicionarAnexo = function (caminhoAspArquivo) {
        var param = {
            RelativeAspFileName: caminhoAspArquivo
        };
        var retorno = this.ExecutarHttpRequest("AdicionarAnexosEmail", param);
        this.preencherGrid();
    };
    MouraEmail.prototype.LimparCampos = function () {
        this.txtAssunto.SetText("");
        this.txtMensagem.Html = "";
        this.txtEmail.SetText("");
        this.Anexos = [];
        this.grdAnexos.PreencherGrid([]);
    };
    MouraEmail.prototype.preencherGrid = function () {
        var param = {};
        var retorno = JSON.parse(this.ExecutarHttpRequest("RetornarAnexosEmail", param));
        this.Anexos = retorno;
        this.grdAnexos.PreencherGrid(this.Anexos);
    };
    return MouraEmail;
}(MouraControl));
//# sourceMappingURL=MouraEmail.js.map