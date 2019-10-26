var PluginMouraWeb = /** @class */ (function () {
    function PluginMouraWeb() {
    }
    PluginMouraWeb.Connect = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.connection && _this.connection.state) {
                resolve();
            }
            else {
                if (!_this.connection) {
                    var bearer = _this.ExecutarFuncaoServerSideAsynch("GetTokenPlugin", {}).then(function (retorno) {
                        _this.connection = new signalR.HubConnectionBuilder()
                            .withUrl(_this.urlPlugin + "SismouraHub?Token=" + retorno)
                            .configureLogging(signalR.LogLevel.Information)
                            .build();
                        _this.connection.onclose(function (err) {
                            if (err.message.indexOf("Invalid Token") > -1) {
                                MostrarError("Token do Plugin Invalido");
                                _this.connection = null;
                            }
                            else {
                                _this.connection.start();
                            }
                        });
                        _this.connection.start().then(function () {
                            resolve();
                        }).catch(reject);
                    });
                }
            }
        });
    };
    PluginMouraWeb.Imprimir = function (porta, rawText) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.VerificarPluginMoura().then(function () {
                _this.connection.invoke("Imprimir", porta, rawText).then(resolve).catch(reject);
            });
        });
    };
    PluginMouraWeb.CriarArquivo = function (caminho, conteudo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.VerificarPluginMoura().then(function () {
                _this.connection.invoke("CriarArquivo", caminho, conteudo).then(resolve).catch(reject);
            });
        });
    };
    PluginMouraWeb.CriarDiretorio = function (caminho) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.VerificarPluginMoura().then(function () {
                _this.connection.invoke("CriarDiretorio", caminho).then(resolve).catch(reject);
            });
        });
    };
    PluginMouraWeb.ExecuteShell = function (command, args, workingDirectory) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.VerificarPluginMoura().then(function () {
                _this.connection.invoke("ExecuteShell", command, args, workingDirectory).then(resolve).catch(reject);
            });
        });
    };
    PluginMouraWeb.GetImpressorasInstaladas = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.VerificarPluginMoura().then(function () {
                _this.connection.invoke("GetImpressorasInstaladas").then(resolve).catch(reject);
            });
        });
    };
    PluginMouraWeb.GetCertificados = function (dominioWindows, usuarioWindows, senhaWindows) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.VerificarPluginMoura().then(function () {
                _this.connection.invoke("GetCertificados", dominioWindows, usuarioWindows, senhaWindows).then(resolve).catch(reject);
            });
        });
    };
    PluginMouraWeb.AssinarDocumento = function (dominioWindows, usuarioWindows, senhaWindows, tipoArquivo, dadosAssinar, nomeCertificado, senhaCertificado) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.VerificarPluginMoura().then(function () {
                _this.connection.invoke("AssinarDocumento", dominioWindows, usuarioWindows, senhaWindows, tipoArquivo, dadosAssinar, nomeCertificado, senhaCertificado).then(resolve).catch(reject);
            });
        });
    };
    PluginMouraWeb.GetIps = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.VerificarPluginMoura().then(function () {
                _this.connection.invoke("GetIps").then(resolve).catch(reject);
            });
        });
    };
    PluginMouraWeb.GetTempFolder = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.VerificarPluginMoura().then(function () {
                _this.connection.invoke("GetTempFolder").then(resolve).catch(reject);
            });
        });
    };
    PluginMouraWeb.IsOnline = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            $.get(_this.urlPlugin + "api/Sismoura/VersaoPlugin", null)
                .promise().then(function (versaoPlugin) {
                if (!versaoPlugin) {
                    resolve(false);
                    return;
                }
                else {
                    if (_this.VerificarVersaoPlugin(versaoPlugin)) {
                        try {
                            _this.Connect().then(function () {
                                resolve(true);
                            }).catch(function () { reject(false); });
                        }
                        catch (ex) {
                            resolve(false);
                        }
                    }
                    else {
                        resolve(false);
                    }
                }
            })
                .catch(function (ex) {
                resolve(false);
            });
        });
    };
    PluginMouraWeb.VerificarPluginMoura = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.IsOnline().then(function (isOnline) {
                if (isOnline) {
                    resolve(true);
                }
                else {
                    var parser = new UAParser();
                    var result = parser.getResult();
                    if (result.os.name.indexOf("Linux") > -1) {
                        alert("Não Suportado");
                    }
                    else {
                        if (result.cpu.architecture == "ia64" || result.cpu.architecture == "amd64") {
                            window.open(formataURLRelativa("/Plugin/InstaladorWindows/pluginMouraWeb64.msi"), "_self");
                        }
                        else {
                            window.open(formataURLRelativa("/Plugin/InstaladorWindows/pluginMouraWeb32.msi"), "_self");
                        }
                    }
                    reject();
                }
            });
        });
    };
    PluginMouraWeb.VerificarVersaoPlugin = function (versao) {
        var versaoArr = versao.split(".");
        var versaoMinArr = PluginMouraWeb.VERSAO_MIN_PLUGIN.split(".");
        for (var x = 0; x < versaoMinArr.length; x++) {
            if (versaoArr.length <= x) {
                return false;
            }
            if (versaoArr[x].CNum() < versaoMinArr[x].CNum()) {
                return false;
            }
            else if (versaoArr[x].CNum() > versaoMinArr[x].CNum()) {
                return true;
            }
        }
        return true;
    };
    PluginMouraWeb.ExecutarFuncaoServerSideAsynch = function (nomeFuncao, parametros) {
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
        return new Promise(function (resolve, reject) {
            $.ajax({
                async: true,
                type: "post",
                url: link + "/" + nomeFuncao,
                data: JSON.stringify(parametros),
                contentType: "application/json; charset=utf-8",
                dataType: "text",
                timeout: 1800000,
                success: function (ret) { resolve(JSON.parse(ret).d); },
                error: reject
            });
        });
    };
    PluginMouraWeb.VERSAO_MIN_PLUGIN = "1.0.0.0";
    PluginMouraWeb.urlPlugin = "http://localhost:5050/";
    return PluginMouraWeb;
}());
//# sourceMappingURL=PluginMouraWeb.js.map