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
var MouraTelaModalRetornouEventArgs = /** @class */ (function (_super) {
    __extends(MouraTelaModalRetornouEventArgs, _super);
    function MouraTelaModalRetornouEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraTelaModalRetornouEventArgs;
}(MouraEventArgs));
var MouraTelaModal = /** @class */ (function (_super) {
    __extends(MouraTelaModal, _super);
    function MouraTelaModal(id) {
        var _this = _super.call(this, id) || this;
        _this.Retornou = new MouraGenericEventHandler();
        _this.Fechou = new MouraEventHandler();
        return _this;
    }
    Object.defineProperty(MouraTelaModal.prototype, "IFrame", {
        get: function () {
            return $("#" + this.ID + "_IFrame")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTelaModal.prototype, "HiddenRetorno", {
        get: function () {
            return $("#" + this.ID + "_HiddenRetorno")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTelaModal.prototype, "hdnClient", {
        get: function () {
            return $("#" + this.ID + "_hdnClient")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTelaModal.prototype, "Modal", {
        get: function () {
            return window[this.ID + '_Modal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    MouraTelaModal.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.Modal && this.Modal.ModalDialog && this.hdnClient && this.hdnClient.value == "S") {
            adicionarEventoDevExpress(this.Modal.ModalDialog.Closing, this.OnFechouModal, this);
        }
    };
    MouraTelaModal.prototype.LimparCampos = function () {
        this.AtualizaURLIFrame("", [], false);
        this.HiddenRetorno.value = "";
        this.idComponenteProcura = "";
    };
    MouraTelaModal.prototype.AbrirTelaModal = function (urlTela, parametros, idComponenteProcura, naoFecharModalAoGravar) {
        this.LimparCampos();
        if (naoFecharModalAoGravar) {
            this.naoFecharModalAoGravar = true;
        }
        this.idComponenteProcura = idComponenteProcura;
        this.AtualizaURLIFrame(urlTela, parametros, false);
        this.Modal.Show();
    };
    MouraTelaModal.prototype.AbrirTelaModalUrlPropria = function (urlTela) {
        this.LimparCampos();
        this.idComponenteProcura = "";
        this.AtualizaURLIFrame(urlTela, [], true);
        this.Modal.Show();
    };
    MouraTelaModal.prototype.OnFechouModal = function (s, e) {
        this.LimparCampos();
        this.Fechou.FireEvent(this, new MouraEventArgs());
    };
    MouraTelaModal.prototype.AtualizaURLIFrame = function (url, parametros, isUrlPropria) {
        if (String.IsNullOrWhiteSpace(url)) {
            this.IFrame.src = "";
            return;
        }
        var aux = url;
        if (!isUrlPropria) {
            aux += "?IsModal=1&HiddenRetorno=" + this.HiddenRetorno.id + "&IsJavaScript=1";
            aux += "&IdMouraTelaModal=" + this.ID + ";";
        }
        if (!parametros) {
            parametros = [];
        }
        var par = "";
        for (var x = 0; x <= parametros.length - 1; x++) {
            if (par != "") {
                par += "|";
            }
            par += parametros[x];
        }
        if (par != "") {
            par = "&Parametros=(" + this.TrataURLParametros(par) + ")";
            aux += par;
        }
        else {
            aux += "&Parametros=()";
        }
        this.IFrame.src = aux;
        //IFrame.Attributes.Add("src", ResolveClientUrl(UrlTela) & "?IsModal=1&HiddenRetorno=" & HiddenRetorno.ClientID & "&Parametros=(" & SiSMoura.Core.Common.Funcoes.ParametrosToString(Parametros) & ")")
    };
    MouraTelaModal.prototype.TrataURLParametros = function (parametros) {
        var retorno = parametros;
        retorno = replaceAll(retorno, "%", "%25");
        retorno = replaceAll(retorno, "&", "%26");
        retorno = replaceAll(retorno, "/", "%2F");
        return retorno;
    };
    MouraTelaModal.prototype.FinalizarModal = function (strParametros) {
        if (this.naoFecharModalAoGravar) {
            return;
        }
        var idProcura = this.idComponenteProcura;
        this.Modal.Hide();
        var args = {};
        if (String.IsNullOrWhiteSpace(strParametros)) {
            args.Parametros = this.HiddenRetorno.value;
        }
        else {
            args.Parametros = strParametros;
        }
        args.ParametrosObject = StringToParametros(args.Parametros);
        args.IDComponenteProcura = idProcura;
        this.Retornou.FireEvent(this, args);
        //Caso tenha passado um componente de procura, ele deve ser preenchido com o codigo
        if (!String.IsNullOrWhiteSpace(idProcura)) {
            var procura = window[idProcura];
            if (procura && args.ParametrosObject && args.ParametrosObject.codigo && !String.IsNullOrWhiteSpace(args.ParametrosObject.codigo)) {
                var codigo = "" + args.ParametrosObject.codigo;
                procura.Limpar();
                procura.Procurar(codigo);
                procura.Focus();
            }
        }
    };
    MouraTelaModal.prototype.FecharModal = function () {
        this.Modal.Hide();
    };
    return MouraTelaModal;
}(MouraControl));
//# sourceMappingURL=MouraTelaModal.js.map