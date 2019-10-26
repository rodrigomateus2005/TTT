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
var MouraControl = /** @class */ (function () {
    function MouraControl(id) {
        this.id = id;
        $(document).on("DevExpressInit", $.proxy(this.IniciarEventos, this));
        this.IniciarEventos();
    }
    Object.defineProperty(MouraControl.prototype, "ID", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraControl.prototype, "AspUniqueId", {
        get: function () {
            return this.aspUniqueId;
        },
        set: function (value) {
            this.aspUniqueId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraControl.prototype, "UsarCallBack", {
        get: function () {
            return this.usarCallBack;
        },
        set: function (value) {
            this.usarCallBack = value;
        },
        enumerable: true,
        configurable: true
    });
    MouraControl.prototype.IniciarEventos = function () {
    };
    MouraControl.prototype.ExecutarHttpRequest = function (nomeFuncao, data) {
        return MouraControl.ExecutarHttpRequest(nomeFuncao, data);
    };
    MouraControl.ExecutarHttpRequestPost = function (nomeFuncao, data) {
        return ExecutarAjaxCallbackSync("POST", ValoresSismoura.ApplicationPath + "JNPost.ashx/" + nomeFuncao, JSON.stringify(data));
    };
    MouraControl.prototype.ExecutarHttpRequestAsyncPost = function (nomeFuncao, data, funcaoSucesso, funcaoErro, context) {
        return MouraControl.ExecutarHttpRequestAsyncPost(nomeFuncao, data, funcaoSucesso, funcaoErro, context);
    };
    MouraControl.ExecutarHttpRequestAsyncPost = function (nomeFuncao, data, funcaoSucesso, funcaoErro, context) {
        return ExecutarAjaxCallBackAsync("POST", ValoresSismoura.ApplicationPath + "JNPost.ashx/" + nomeFuncao, JSON.stringify(data), funcaoSucesso, funcaoErro, context);
    };
    MouraControl.ExecutarHttpRequest = function (nomeFuncao, data) {
        return ExecutarAjaxCallbackSync("GET", ValoresSismoura.ApplicationPath + "JN.ashx/" + nomeFuncao, data);
    };
    MouraControl.prototype.ExecutarHttpRequestAsync = function (nomeFuncao, data, funcaoSucesso, funcaoErro, context) {
        return MouraControl.ExecutarHttpRequestAsync(nomeFuncao, data, funcaoSucesso, funcaoErro, context);
    };
    MouraControl.ExecutarHttpRequestAsync = function (nomeFuncao, data, funcaoSucesso, funcaoErro, context) {
        return ExecutarAjaxCallBackAsync("GET", ValoresSismoura.ApplicationPath + "JN.ashx/" + nomeFuncao, data, funcaoSucesso, funcaoErro, context);
    };
    MouraControl.prototype.DownloadHttpRequestPost = function (nomeFuncao, data) {
        return new Promise(function (resolve, reject) {
            ExecutarDownloadBlobHttpRequestAsyncPost(nomeFuncao, data).then(function (ret) {
                var req = ret.request;
                var blob = req.response;
                var fileName = req.getResponseHeader("fileName");
                var link = document.createElement('a');
                if (!fileName) {
                    fileName = "download";
                }
                link.href = window.URL.createObjectURL(blob);
                link.download = fileName;
                link.click();
                resolve();
            }).catch(function (e) {
                LogarException(e);
                reject();
            });
        });
    };
    MouraControl.prototype.ExecutarHttpRequestWebMethodPageAsync = function (nomeFuncao, data, funcaoSucesso, funcaoErro, context) {
        return MouraControl.ExecutarHttpRequestWebMethodPageAsync(nomeFuncao, data, funcaoSucesso, funcaoErro, context);
    };
    MouraControl.ExecutarHttpRequestWebMethodPageAsync = function (nomeFuncao, data, funcaoSucesso, funcaoErro, context) {
        return ExecutarAjaxCallBackAsync("POST", ValoresSismoura.ApplicationPath + "WebMethod.aspx/" + nomeFuncao, JSON.stringify(data), funcaoSucesso, funcaoErro, context);
    };
    MouraControl.prototype.adicionarEventoDevExpress = function (evento, handler, context) {
        adicionarEventoDevExpress(evento, handler, context);
    };
    MouraControl.prototype.abrirTelaNovaAbaCampoCodigo = function (url, codigo) {
        if ((!url) || (url == null) || (url == ''))
            return;
        if ((codigo) && (codigo != '')) {
            url = url + "?Parametros=(codigo=" + codigo + ")";
        }
        window.open(url, "_blank");
    };
    MouraControl.prototype.IsValido = function () {
        return true;
    };
    return MouraControl;
}());
var MouraHandlerPair = /** @class */ (function () {
    function MouraHandlerPair() {
    }
    return MouraHandlerPair;
}());
var MouraGenericEventHandler = /** @class */ (function () {
    function MouraGenericEventHandler() {
        this.ClearHandlers();
    }
    MouraGenericEventHandler.prototype.AddHandler = function (handler, executionContext) {
        if (!handler || handler == null)
            return;
        if (this.GetIndexHandler(handler) >= 0)
            return;
        var item = new MouraHandlerPair();
        item.handler = handler;
        item.executionContext = executionContext;
        this.handlerList.push(item);
    };
    MouraGenericEventHandler.prototype.RemoveHandler = function (handler, executionContext) {
        var index;
        index = this.GetIndexHandler(handler, executionContext);
        if (index > -1) {
            this.handlerList.splice(index, 1);
        }
    };
    MouraGenericEventHandler.prototype.GetIndexHandler = function (handler, executionContext) {
        var index = -1;
        for (var x = 0; x < this.handlerList.length; x++) {
            if (this.handlerList[x].handler == handler) {
                index = x;
                break;
            }
        }
        return index;
    };
    MouraGenericEventHandler.prototype.ClearHandlers = function () {
        this.handlerList = new Array();
    };
    MouraGenericEventHandler.prototype.FireEvent = function (sender, eventArgs, indexEvent) {
        for (var x = 0; x < this.handlerList.length; x++) {
            if (!this.handlerList[x].handler || this.handlerList[x].handler == null)
                continue;
            var handlerTratado;
            if (indexEvent != undefined && indexEvent != null) {
                if (indexEvent != x)
                    continue;
            }
            if (this.handlerList[x].executionContext && this.handlerList[x].executionContext != null) {
                handlerTratado = $.proxy(this.handlerList[x].handler, this.handlerList[x].executionContext);
            }
            else {
                handlerTratado = this.handlerList[x].handler;
            }
            handlerTratado(sender, eventArgs);
        }
    };
    MouraGenericEventHandler.prototype.Count = function () {
        if (!this.handlerList)
            return 0;
        return this.handlerList.length;
    };
    return MouraGenericEventHandler;
}());
var MouraEventHandler = /** @class */ (function (_super) {
    __extends(MouraEventHandler, _super);
    function MouraEventHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraEventHandler;
}(MouraGenericEventHandler));
var MouraEventArgs = /** @class */ (function () {
    function MouraEventArgs() {
    }
    return MouraEventArgs;
}());
//# sourceMappingURL=MouraControl.js.map