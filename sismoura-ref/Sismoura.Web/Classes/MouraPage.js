var MouraPage = /** @class */ (function () {
    function MouraPage() {
        this.devExpressIniciado = false;
        adicionarEventoJQuery(document, "ready", this.Init, this);
        adicionarEventoJQuery(document, "DevExpressInit", this.Init, this);
        adicionarEventoJQuery(document, "DevExpressInit", this.DevExpressInit, this);
    }
    Object.defineProperty(MouraPage.prototype, "CamposTela", {
        get: function () {
            var retorno = [];
            var campos = $("[moura-campo]");
            for (var x = 0; x < campos.length; x++) {
                var campoObject = window[$(campos[x]).attr("id") + "_Object"];
                if (campoObject) {
                    retorno.push(campoObject);
                }
            }
            return retorno;
        },
        enumerable: true,
        configurable: true
    });
    MouraPage.prototype.ValidarCamposObrigatorios = function () {
        try {
            var mensagem = "";
            var campos = this.CamposTela;
            for (var i = 0; i < campos.length; i++) {
                var campoObject = campos[i];
                if ((campoObject.Obrigatorio || campoObject.ObrigatorioUsuario) && (String.IsNullOrWhiteSpace(campoObject.ComponenteValidacao))) {
                    if (!campoObject.IsValido()) {
                        if (!String.IsNullOrWhiteSpace(mensagem)) {
                            mensagem += "<br/>";
                        }
                        if (campoObject.LabelControl) {
                            var labelText = campoObject.LabelControl.innerText;
                            if (String.IsNullOrWhiteSpace(labelText)) {
                                if ($("#" + campoObject.ID).parents("[moura-campo]").length > 0) {
                                    var agrupamento = window[$("#" + campoObject.ID).parents("[moura-campo]")[0].id + '_Object'];
                                    if (agrupamento && agrupamento instanceof MouraAgrupamento) {
                                        labelText = agrupamento.GetTextLabelControl();
                                    }
                                }
                            }
                            mensagem += "Preencha o campo corretamente: " + this.TratarManesagemLabel(labelText);
                        }
                        else {
                            mensagem += "Preencha o campo corretamente: " + this.TratarManesagemLabel(campoObject.ID);
                        }
                    }
                }
            }
            if (!String.IsNullOrWhiteSpace(mensagem)) {
                MostrarAlerta(mensagem);
                return false;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return true;
    };
    MouraPage.prototype.TratarManesagemLabel = function (mensagem) {
        if (String.IsNullOrWhiteSpace(mensagem)) {
            mensagem = "";
        }
        return replaceAll(replaceAll(mensagem, '*', ''), '(F2)', '');
    };
    Object.defineProperty(MouraPage.prototype, "ParametrosTela", {
        get: function () {
            if (this.QueryString.Parametros) {
                return StringToParametros(this.QueryString.Parametros);
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    MouraPage.prototype.GerarKeyStoom = function (campoInicial, valoresCampos, campoFinal) {
        try {
            var parametros;
            parametros = {
                campoInicial: campoInicial,
                valoresCampos: valoresCampos,
                campoFinal: campoFinal
            };
            return this.ExecutarFuncaoServerSideSynch("GerarKeyStoom", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraPage.prototype.ExcluirAnexos = function (path) {
        try {
            var parametros = {
                path: path
            };
            this.ExecutarFuncaoServerSideSynch("LimparAnexos", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Object.defineProperty(MouraPage.prototype, "QueryString", {
        get: function () {
            return getUrlVars();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPage.prototype, "fullview", {
        get: function () {
            return window["fullview_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPage.prototype, "botaoSair", {
        get: function () {
            return window["botaoSair_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPage.prototype, "btnHome", {
        get: function () {
            return window["btnHome_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPage.prototype, "BotaoAjuda", {
        get: function () {
            return window["BotaoAjuda_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPage.prototype, "hdnLoginURL", {
        get: function () {
            return $("#hdnLoginURL")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPage.prototype, "hdnURLPage", {
        get: function () {
            return $("#hdnURLPage")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPage.prototype, "Modal", {
        get: function () {
            return window['MsgBox_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPage.prototype, "dlgFuncaoAdm", {
        get: function () {
            return window['dlgFuncaoAdm_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPage.prototype, "dlgSelecaoImpressora", {
        get: function () {
            return window['dlgSelecaoImpressora_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPage.prototype, "hdnParametrosURL", {
        get: function () {
            return $('#hdnParametrosURL')[0];
        },
        enumerable: true,
        configurable: true
    });
    MouraPage.prototype.LimparParametrosURL = function () {
        this.hdnParametrosURL.value = "";
    };
    Object.defineProperty(MouraPage.prototype, "hdnPermissoesTela", {
        get: function () {
            return $("#hdnPermissoesTela")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPage.prototype, "PermissoesTela", {
        get: function () {
            var retorno = null;
            if (this.hdnPermissoesTela && !String.IsNullOrWhiteSpace(this.hdnPermissoesTela.value)) {
                retorno = JSON.parse(DecodeTextoJSON(this.hdnPermissoesTela.value));
                return retorno;
            }
            if (!retorno) {
                retorno = {};
                retorno.Alterar = true;
                retorno.Gravar = true;
                retorno.Excluir = true;
                return retorno;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPage.prototype, "dlgTelaModal", {
        //Dialog de tela modal é comum para todas as telas
        get: function () {
            return window['dlgTelaModal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPage.prototype, "ParametrosURL", {
        get: function () {
            if (!String.IsNullOrWhiteSpace(this.hdnParametrosURL.value)) {
                return JSON.parse(DecodeTextoJSON(this.hdnParametrosURL.value));
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    MouraPage.prototype.OnPageLoad = function () {
        this.validarImendes();
    };
    MouraPage.prototype.validarImendes = function () {
        if (ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_iMendes) {
            var parametros = {};
            var qtdeDias;
            var link;
            link = window.location.href;
            if (link.endsWith('.aspx') && (link.indexOf('Login', 0) <= 0)) {
                qtdeDias = this.ExecutarFuncaoServerSideSynch("getDiasUltimaTransacao", parametros);
                if (qtdeDias >= 15 || qtdeDias == -1) { // -1 = Nunca feito
                    MsgBoxJS("Sistema está há mais de 15 dias sem atualizar as regras de imposto dos produtos. Realize a integração dos tributos no módulo fiscal.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, function (e) { }, {}, "Integrador iMendes");
                    //Atividade: 1169308 - Igor Andrade (RAJ)
                    //if (ValoresSismoura.ConfiguracoesRetaguarda.Integrador_Automatico_iMendes) {
                    //    var msg = (qtdeDias == -1) ? "A integração/atualização tributária nunca foi relizada!" : "A última integração/atualização tributária foi realizada à 15 dias atrás!";
                    //    MsgBoxJS(msg + " Realizando atualização automática.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, function (e) { }, {}, "Integrador iMendes");
                    //    try {
                    //        var parametros: any = {
                    //            codEmpresa: ValoresSismoura.EmpresaPadraoUsuario,
                    //            codUsuario: ValoresSismoura.UsuarioLogado
                    //        };
                    ////MouraPageNaoLogada
                    //        this.ExecutarFuncaoServerSideAsynch("AtualizariMendes",
                    //            parametros,
                    //            (d: any) => {
                    //                try {
                    //                    var retorno = GetRetornoAJAX(d);
                    //                    if (retorno) {
                    //                        MostrarMensagem('As regras foram atualizadas!');
                    //                    }
                    //                    else {
                    //                        MostrarAlerta('Ocorreu um erro ao atualizar as regras!');
                    //                    }
                    //                } catch (ex) {
                    //                    LogarException(ex);
                    //                }
                    //            },
                    //            (erro: any) => {
                    //                LogarExceptionAjax(erro);
                    //            },
                    //            this);
                    //    } catch (ex) {
                    //        LogarException(ex);
                    //    }
                    //} else {
                    //MsgBoxJS("Sistema está há mais de 15 dias sem atualizar as regras de imposto dos produtos. Realize a integração dos tributos no módulo fiscal.", MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, function (e) { }, {}, "Integrador iMendes");
                    //}
                }
            }
        }
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            var link_1 = window.location.href;
            if (link_1.endsWith('.aspx') && (link_1.indexOf('Login', 0) <= 0)) {
                //MsgBoxJS("teste", MsgBoxOptions.OkOnly, MsgBoxIcon.Question, (result: MsgBoxResultEventArgs) => { });
            }
        }
    };
    MouraPage.prototype.Init = function () {
        if (this.dlgSelecaoImpressora) {
            adicionarEventoMoura(this.dlgSelecaoImpressora.ClickOk, this.OnDlgSelecaoImpressoraClickOK, this);
        }
        if (this.fullview) {
            adicionarEventoMoura(this.fullview.Click, this.fullview_Click, this);
        }
        if (this.botaoSair) {
            adicionarEventoMoura(this.botaoSair.Click, this.botaoSair_Click, this);
        }
        if (this.BotaoAjuda) {
            adicionarEventoMoura(this.BotaoAjuda.Click, this.BotaoAjuda_Click, this);
        }
    };
    MouraPage.prototype.DevExpressInit = function () {
        this.devExpressIniciado = true;
    };
    MouraPage.prototype.ExecutarFuncaoServerSideSynch = function (nomeFuncao, parametros) {
        var resposta;
        var link;
        link = window.location.href;
        link = link.split("?")[0];
        if (!link.endsWith(".aspx")) {
            if (!link.endsWith("/")) {
                link += "/";
            }
            link += "Login";
        }
        resposta = ExecutarAjaxCallbackSync("post", link + "/" + nomeFuncao, JSON.stringify(parametros));
        return JSON.parse(resposta).d;
    };
    MouraPage.prototype.ExecutarFuncaoServerSideAsynch = function (nomeFuncao, parametros, funcaoSucesso, funcaoErro, context) {
        var resposta;
        var link;
        link = window.location.href;
        link = link.split("?")[0];
        if (!link.endsWith(".aspx")) {
            if (!link.endsWith("/")) {
                link += "/";
            }
            link += "Login";
        }
        ExecutarAjaxCallBackAsync("post", link + "/" + nomeFuncao, JSON.stringify(parametros), funcaoSucesso, funcaoErro, context);
    };
    MouraPage.prototype.ExecutarFuncaoServerSideGETAsynch = function (nomeFuncao, parametros, funcaoSucesso, funcaoErro, context) {
        var resposta;
        var link;
        link = window.location.href;
        link = link.split("?")[0];
        if (!link.endsWith(".aspx")) {
            if (!link.endsWith("/")) {
                link += "/";
            }
            link += "Login";
        }
        ExecutarAjaxCallBackAsync("GET", link + "/" + nomeFuncao, JSON.stringify(parametros), funcaoSucesso, funcaoErro, context);
    };
    MouraPage.prototype.ImprimirMatricial = function (chave, texto) {
        this.dlgSelecaoImpressora.AbrirClient(chave);
        this.tempImpressao = texto;
    };
    MouraPage.prototype.fullview_Click = function (s, e) {
        $("body").toggleClass("clean");
        $('#sidebar').toggleClass("hide-sidebar mobile-sidebar");
        $('#content').toggleClass("full-content");
        $('.footer').toggleClass("footerHidden");
    };
    MouraPage.prototype.botaoSair_Click = function (s, e) {
        this.Deslogar();
    };
    MouraPage.prototype.Deslogar = function () {
        $.ajax({
            type: "POST",
            url: formataURLRelativa("/Principal.aspx/Deslogar"),
            data: {},
            contentType: "application/json"
        }).done(function () {
            window.location.href = formataURLRelativa("/Login");
        });
    };
    MouraPage.prototype.BotaoAjuda_Click = function (s, e) {
        var nomeTela = ValoresSismoura.NomeTela;
        var nomeModulo = ValoresSismoura.NomeModulo;
        nomeTela = nomeTela.substr(0, nomeTela.length - 5);
        window.open("http://jnmoura.com.br/Helper/Helper.aspx?Tela=" + nomeTela + "&Modulo=" + nomeModulo, "_blank");
    };
    MouraPage.prototype.OnDlgSelecaoImpressoraClickOK = function (s, e) {
        var parametros;
        parametros = {
            codigoImpressora: this.dlgSelecaoImpressora.ImpressoraSelecionada,
            texto: this.tempImpressao
        };
        this.ExecutarFuncaoServerSideSynch("ImprimirTextoImpressoraMatricial", parametros);
    };
    MouraPage.prototype.TratarErroFuncaoAsync = function (erro) {
        fecharEspera();
        LogarException(erro);
    };
    MouraPage.prototype.ImprimirDocumentoWord = function (itensSubstituir, documento, bloquearTela) {
        var parametros;
        var urlTela;
        parametros = {
            itensSubstituir: itensSubstituir,
            documento: documento
        };
        this.ExecutarFuncaoServerSideSynch("SetConteudoImprimirDocumentoWord", parametros);
        if (bloquearTela == "S") {
            urlTela = URLTela.EditorHTML + '?blEdt=1';
        }
        else {
            urlTela = URLTela.EditorHTML;
        }
        abrirTelaNovaAbaParametros(formataURLRelativa(urlTela), []);
    };
    MouraPage.prototype.ImprimirDocumentoWordAnimal = function (itensSubstituir, documento, bloquearTela, nomeDocumento) {
        var parametros;
        var urlTela;
        parametros = {
            itensSubstituir: itensSubstituir,
            documento: documento,
            Nome_Documento: nomeDocumento
        };
        this.ExecutarFuncaoServerSideSynch("SetConteudoImprimirDocumentoWordAnimal", parametros);
        if (bloquearTela == "S") {
            urlTela = URLTela.EditorHTML + '?blEdt=1&Nome_Documento=' + nomeDocumento;
        }
        else {
            urlTela = URLTela.EditorHTML + '?Nome_Documento=' + nomeDocumento;
        }
        abrirTelaNovaAbaParametros(formataURLRelativa(urlTela), []);
    };
    MouraPage.prototype.ImprimirDocumentoMatricial = function (conteudo, colunas) {
        try {
            var parametros;
            var urlTela;
            parametros = {
                conteudo: conteudo,
                colunas: colunas
            };
            this.ExecutarFuncaoServerSideSynch("SetConteudoTextoMatricial", parametros);
            //abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.PrintText), []);            
            if (this.dlgTelaModal) {
                this.dlgTelaModal.AbrirTelaModal(formataURLRelativa(URLTela.PrintText), [], "");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraPage.prototype.ExecutarPluginChrome = function (nomeFuncao, parametros) {
        return new Promise(function (resolve, reject) {
            try {
                var retorno = {};
                var jsonEnviar;
                var jsonParametros = "{}";
                if (!String.IsNullOrWhiteSpace(parametros)) {
                    jsonParametros = parametros;
                }
                jsonEnviar = "{\"" + nomeFuncao + "\": " + jsonParametros + "}";
                chrome.runtime.sendMessage(ValoresSismoura.IdExtensaoChrome, JSON.parse(jsonEnviar), function (response) {
                    try {
                        if (response) {
                            if (response.message) {
                                if (response.message.success == true) {
                                    retorno.isExtensaoInstalada = true;
                                    retorno.isSucesso = true;
                                    retorno.jsonRetorno = response.message;
                                }
                                else {
                                    retorno.isExtensaoInstalada = true;
                                    retorno.isSucesso = false;
                                }
                            }
                            else {
                                retorno.isExtensaoInstalada = false;
                                retorno.isSucesso = false;
                            }
                        }
                        else {
                            retorno.isExtensaoInstalada = false;
                            retorno.isSucesso = false;
                        }
                        resolve(retorno);
                    }
                    catch (ex) {
                        reject(ex);
                    }
                });
            }
            catch (ex) {
                reject(ex);
            }
        });
    };
    MouraPage.prototype.DataServidor = function () {
        try {
            var parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("DataServidor", parametros);
            return ConvertToDate(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraPage.prototype.PrimeiroDiaMes = function () {
        var retorno;
        var dataServidor;
        dataServidor = this.DataServidor();
        retorno = new Date(dataServidor.getFullYear(), dataServidor.getMonth(), 1);
        return ConvertToDate(retorno);
    };
    MouraPage.prototype.ObterDadosPessoa = function (codCliente) {
        try {
            var parametros = {
                codCliente: codCliente
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ObterDadosPessoa", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
            return null;
        }
    };
    MouraPage.prototype.ObterDadosProduto = function (codProduto) {
        try {
            var parametros = {
                codProduto: codProduto
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ObterDadosProduto", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
            return null;
        }
    };
    MouraPage.prototype.StatusExamePadrao = function () {
        try {
            var parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("ObterStatusExamePadrao", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
            return "";
        }
    };
    MouraPage.prototype.FecharModal = function () {
        if (this.dlgTelaModal) {
            this.dlgTelaModal.FecharModal();
        }
    };
    MouraPage.prototype.DeserializarJSONEncoded = function (jsonString) {
        return JSON.parse(replaceAll(jsonString, '#Q;', '"'));
    };
    MouraPage.prototype.SerializarJSONEncoded = function (objeto) {
        return replaceAll(JSON.stringify(objeto), '"', '#Q;');
    };
    MouraPage.prototype.funcaoErro = function (erro) {
        fecharEspera();
        LogarExceptionAjax(erro);
    };
    MouraPage.prototype.EnviarMensagemWhatsApp = function (mensagem, numero) {
        abrirTelaNovaAbaParametros("http://api.whatsapp.com/send?phone=" + numero + "&text=" + mensagem, null);
    };
    MouraPage.prototype.ProcurarCampos = function () {
        var fooObjects = [];
        for (var key in window) {
            var value = window[key];
            if (value instanceof MouraCampo) {
                var controle = value;
                if (controle.ExibirNaConfiguracaoDeCampos) {
                    fooObjects.push(value);
                }
            }
        }
    };
    return MouraPage;
}());
$(document).ready(function () {
    var tpInstanciaTela = $("#hdnInstanciaTS").val();
    if (String.IsNullOrWhiteSpace(tpInstanciaTela)) {
        tpInstanciaTela = "mpCadastroAngular";
    }
    ValoresSismoura.InstanciaTela = null;
    if (window[tpInstanciaTela]) {
        ValoresSismoura.InstanciaTela = window[tpInstanciaTela];
        if (window[tpInstanciaTela].OnPageLoad) {
            window[tpInstanciaTela].OnPageLoad();
        }
    }
});
//# sourceMappingURL=MouraPage.js.map