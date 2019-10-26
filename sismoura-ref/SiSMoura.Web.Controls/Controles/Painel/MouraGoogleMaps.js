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
var MouraGoogleMaps = /** @class */ (function (_super) {
    __extends(MouraGoogleMaps, _super);
    function MouraGoogleMaps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MouraGoogleMaps.prototype, "APIKEY", {
        get: function () {
            return this.apiKEY;
        },
        set: function (api) {
            this.apiKEY = api;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGoogleMaps.prototype, "URLENDERECO", {
        get: function () {
            return this.urlEndereco;
        },
        set: function (url) {
            this.urlEndereco = url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGoogleMaps.prototype, "URLDIRECTION", {
        get: function () {
            return this.urlDirection;
        },
        set: function (url) {
            this.urlDirection = url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGoogleMaps.prototype, "CallBackPanel", {
        get: function () {
            return window[this.ID + "_callBackPanel"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGoogleMaps.prototype, "IFrame", {
        get: function () {
            return $("#" + this.ID + "_IFrame")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGoogleMaps.prototype, "hdnURL", {
        get: function () {
            return $("#" + this.ID + "_hdnURL")[0];
        },
        enumerable: true,
        configurable: true
    });
    MouraGoogleMaps.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
    };
    MouraGoogleMaps.prototype.SetURL = function (value) {
        if (this.hdnURL) {
            this.hdnURL.value = value;
        }
        if (this.IFrame) {
            this.IFrame.src = value;
        }
    };
    MouraGoogleMaps.prototype.FormatarEnderecoPesquisa = function (endereco, numeroEndereco, cidadeEstado) {
        var tmpEndereco = "";
        if (String.IsNullOrWhiteSpace(endereco) || String.IsNullOrWhiteSpace(cidadeEstado)) {
            return "";
        }
        else {
            if (String.IsNullOrWhiteSpace(numeroEndereco)) {
                tmpEndereco = endereco + ", " + cidadeEstado;
            }
            else {
                tmpEndereco = endereco + " " + numeroEndereco + ", " + cidadeEstado;
            }
            tmpEndereco = tmpEndereco.trim();
            tmpEndereco = replaceAll(tmpEndereco, " ", "+");
            return tmpEndereco;
        }
    };
    MouraGoogleMaps.prototype.ProcurarEndereco = function (endereco, numeroEndereco, cidadeEstado) {
        if (this.IFrame) {
            //Para pesquisar documentação sobre esta API, procurar no google por Google Maps Embed API
            //Utilizar uma URL e passar os parâmetros
            //Documentação atual:  https://developers.google.com/maps/documentation/embed/guide
            //KEY utilizado configurado para o e-mail programacao@jnmoura.com.br (conta do google)
            if (String.IsNullOrWhiteSpace(endereco) || String.IsNullOrWhiteSpace(cidadeEstado)) {
                this.Limpar();
            }
            else {
                var url = "";
                var tmpEndereco;
                url = replaceAll(this.URLENDERECO, "{0}", this.APIKEY);
                url = replaceAll(url, "{1}", this.FormatarEnderecoPesquisa(endereco, numeroEndereco, cidadeEstado));
                this.SetURL(url);
            }
        }
    };
    MouraGoogleMaps.prototype.ProcurarDirecoes = function (enderecoOrigem, numeroEnderecoOrigem, cidadeEstadoOrigem, enderecoDestino, numeroEnderecoDestino, cidadeEstadoDestino) {
        if (this.IFrame) {
            //Para pesquisar documentação sobre esta API, procurar no google por Google Maps Embed API
            //Utilizar uma URL e passar os parâmetros
            //Documentação atual:  https://developers.google.com/maps/documentation/embed/guide
            //KEY utilizado configurado para o e-mail programacao@jnmoura.com.br (conta do google)
            if (String.IsNullOrWhiteSpace(enderecoOrigem) || String.IsNullOrWhiteSpace(cidadeEstadoOrigem) ||
                String.IsNullOrWhiteSpace(enderecoDestino) || String.IsNullOrWhiteSpace(cidadeEstadoDestino)) {
                this.Limpar();
            }
            else {
                var url = "";
                var tmpEndereco;
                url = replaceAll(this.URLDIRECTION, "{0}", this.APIKEY);
                url = replaceAll(url, "{1}", this.FormatarEnderecoPesquisa(enderecoOrigem, numeroEnderecoOrigem, cidadeEstadoOrigem));
                url = replaceAll(url, "{2}", this.FormatarEnderecoPesquisa(enderecoDestino, numeroEnderecoDestino, cidadeEstadoDestino));
                this.SetURL(url);
            }
        }
    };
    MouraGoogleMaps.prototype.Limpar = function () {
        this.SetURL("");
    };
    return MouraGoogleMaps;
}(MouraControl));
//# sourceMappingURL=MouraGoogleMaps.js.map