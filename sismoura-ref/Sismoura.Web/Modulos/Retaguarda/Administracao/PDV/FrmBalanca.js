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
var FrmBalanca = /** @class */ (function (_super) {
    __extends(FrmBalanca, _super);
    function FrmBalanca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FrmBalanca.prototype, "cboModelo", {
        get: function () {
            return window['cboModelo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmBalanca.prototype, "cboListaPreco", {
        get: function () {
            return window['cboListaPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmBalanca.prototype, "lblInfoModelo", {
        get: function () {
            return window['lblInfoModelo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmBalanca.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmBalanca.prototype, "Filtro", {
        get: function () {
            if (!this.GetScope()["Filtro"]) {
                this.GetScope()["Filtro"] = {};
            }
            return this.GetScope()["Filtro"];
        },
        set: function (value) {
            this.GetScope()["Filtro"] = value;
        },
        enumerable: true,
        configurable: true
    });
    FrmBalanca.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        this.modelo = ValoresSismoura.ConfiguracoesRetaguarda.Modelo_Balanca_Etiqueta;
        if (this.modelo == "" || !this.modelo) {
            this.cboModelo.Visible = true;
        }
        else {
            this.lblInfoModelo.Text = this.modelo;
            this.cboModelo.Visible = false;
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Balanca_Gerar_Lista_Preco) {
            if (this.modelo != "") {
                this.cboModelo.Enabled = false;
            }
            else {
                this.cboModelo.Enabled = true;
            }
            this.cboListaPreco.Visible = true;
        }
        else {
            this.cboListaPreco.Visible = false;
        }
    };
    FrmBalanca.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnClickGerar, this);
        }
        if (this.cboModelo) {
            adicionarEventoDevExpress(this.cboModelo.Combo.SelectedIndexChanged, this.OnMudouModelo, this);
        }
    };
    FrmBalanca.prototype.LimparCampos = function () {
        this.Filtro.Modelo = "F";
        this.Filtro.ListaPreco = "1";
        this.cboListaPreco.SetSelectedIndex(0);
        this.RefreshAngular();
    };
    FrmBalanca.prototype.OnClickGerar = function (s, e) {
        var modeloListaPreco;
        var usarReduzido;
        if (String.IsNullOrWhiteSpace(this.modelo)) {
            MostrarAlerta("Nenhum modelo de impressora configurado!");
            return;
        }
        modeloListaPreco = 0;
        if (ValoresSismoura.ConfiguracoesRetaguarda.Balanca_Gerar_Lista_Preco) {
            if (this.cboListaPreco.GetItemCount() > 0) {
                modeloListaPreco = this.cboListaPreco.GetValue();
            }
        }
        if (!this.VerificaModeloBalanca(this.modelo)) {
            return;
        }
        this.GerarArquivo(this.modelo, modeloListaPreco);
    };
    FrmBalanca.prototype.GerarArquivo = function (modelo, modeloListaPreco) {
        var parametros;
        try {
            parametros = {
                modelo: modelo,
                modeloListaPreco: modeloListaPreco
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarArquivo", parametros, function (d) {
                fecharEspera();
                //abrirTelaNovaAbaParametros(formataURLRelativa("Modulos/Geral/AbrirArquivo.aspx"), parametrosTela);
                var retorno = GetRetornoAJAX(d);
                if (retorno) {
                    if (!retorno.Sucesso) {
                        MostrarAlerta(retorno.Mensagem);
                    }
                    else {
                        MostrarMensagem(retorno.Mensagem);
                        var dado = retorno.Arquivo;
                        if (retorno.NomeArquivo == "produtodabalanca.txt" || retorno.NomeArquivo == "PRODUTOS.txt") {
                            downloadArquivo(new Uint8Array(dado), retorno.NomeArquivo, "text/plain");
                        }
                        else {
                            downloadArquivo(new Uint8Array(dado), retorno.NomeArquivo, "application/zip");
                        }
                    }
                }
                else {
                    MostrarAlerta("A configuração Modelo da Balança de Etiquetas não está configurada corretamente. Por favor, verifique-a!");
                }
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    FrmBalanca.prototype.OnMudouModelo = function (s, e) {
        this.lblInfoModelo.Text = this.cboModelo.GetText();
        this.modelo = this.cboModelo.GetText();
    };
    FrmBalanca.prototype.VerificaModeloBalanca = function (modelo) {
        var retorno = true;
        var digitoAnterior = ValoresSismoura.ConfiguracoesRetaguarda.Anterior;
        var digitoPosterior = ValoresSismoura.ConfiguracoesRetaguarda.Posterior;
        var formatoCodigo = ValoresSismoura.ConfiguracoesRetaguarda.Formato;
        if (modelo == "FILIZOLA" || modelo == "TOLEDO") {
            if (digitoAnterior == 2 && digitoPosterior == "" && formatoCodigo == "000000") {
                retorno = true;
            }
            else if (digitoAnterior == 2 && digitoPosterior == "0" && formatoCodigo == "00000") {
                retorno = true;
            }
            else if (digitoAnterior == 2 && digitoPosterior == "00" && formatoCodigo == "0000") {
                retorno = true;
            }
            else {
                retorno = false;
            }
            if (!retorno) {
                if (digitoAnterior != 2) {
                    MostrarAlerta("A configuração DIGITO ANTERIOR está incorreta!. O correto seria DIGITO ANTERIOR = 2");
                }
                else {
                    var formatoCerto = void 0;
                    var digitoCerto = void 0;
                    if (formatoCodigo == "0000" || digitoPosterior == "00") {
                        formatoCerto = "0000";
                        digitoCerto = "00";
                    }
                    else if (formatoCodigo == "00000" || digitoPosterior == "0") {
                        formatoCerto = "00000";
                        digitoPosterior = "0";
                    }
                    else if (formatoCodigo == "000000" || digitoPosterior == "") {
                        formatoCerto = "000000";
                        digitoPosterior = "";
                    }
                    var mensagem = "A configuração FORMATO DO CÓDIGO está configurado " + formatoCodigo + "e a configuração DIGITO POSTERIOR está " + digitoPosterior + "<br />";
                    mensagem += "O correto seria FORMATO DO CÓDIGO = " + formatoCerto + " e DIGITO POSTERIOR = " + digitoCerto;
                    MostrarAlerta(mensagem);
                }
            }
        }
        return retorno;
    };
    return FrmBalanca;
}(MouraPageAngular));
var frmBalanca = new FrmBalanca();
//# sourceMappingURL=FrmBalanca.js.map