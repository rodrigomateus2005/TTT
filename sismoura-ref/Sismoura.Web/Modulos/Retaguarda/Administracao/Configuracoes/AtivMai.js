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
var AtivMai = /** @class */ (function (_super) {
    __extends(AtivMai, _super);
    function AtivMai() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AtivMai.prototype, "pageContainer", {
        get: function () {
            return document.getElementById('pageContainer');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AtivMai.prototype, "ativCode", {
        get: function () {
            return document.getElementById('ativCode');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AtivMai.prototype, "hdnIpData", {
        get: function () {
            return document.getElementById('hdnIpData');
        },
        enumerable: true,
        configurable: true
    });
    AtivMai.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.Inicializar();
    };
    AtivMai.prototype.Inicializar = function () {
        var retorno = this.hdnIpData.value.split('|');
        fecharEspera();
        if (retorno[0] === 'NO_IP') {
            MostrarError("Năo foi possível detectar o IP do servidor. Favor entrar " +
                "em contato com o suporte.", 0);
            return;
        }
        else if (retorno[0] !== 'OK') {
            MostrarError('Ocorreu um erro interno no sistema: ' +
                retorno[0].substr(0, 20), 0);
            return;
        }
        abrirEspera('Aguarde, testando conexão com o servidor...');
        this.TestConnection(retorno[1]);
    };
    AtivMai.prototype.RenderQRCode = function (data) {
        new QRCode('qrcode', {
            text: data,
            width: 150,
            height: 150,
        });
        document.getElementById('qrcode').removeAttribute('title');
    };
    AtivMai.prototype.TestConnection = function (prefix) {
        var _this = this;
        var req = new XMLHttpRequest();
        req.timeout = 15000;
        req.addEventListener('load', function () { return _this.OnTestConnectionSuccess(req.responseText); });
        req.addEventListener('error', function () { return _this.OnTestConnectionFail(); });
        req.addEventListener('timeout', function () { return _this.OnTestConnectionTimeout(); });
        req.open('GET', prefix + 'VerificarConexao');
        req.send();
    };
    AtivMai.prototype.OnTestConnectionSuccess = function (d) {
        var isValid = false;
        try {
            var data = JSON.parse(d);
            isValid = typeof data['Sucesso'] === 'boolean' &&
                data['Sucesso'] === true;
        }
        catch (e) {
            // empty
        }
        fecharEspera();
        if (!isValid) {
            MostrarError('Năo foi possível verificar a conexão com o servidor. ' +
                'Favor entrar em contato com o suporte.', 0);
            return;
        }
        abrirEspera('Aguarde, gerando código de ativação...');
        this.SendGetCode();
    };
    AtivMai.prototype.OnTestConnectionFail = function () {
        fecharEspera();
        MostrarError('Năo foi possível verificar a conexão com o servidor. ' +
            'Favor entrar em contato com o suporte.', 0);
    };
    AtivMai.prototype.OnTestConnectionTimeout = function () {
        fecharEspera();
        MostrarError('O tempo limite de conexão com o servidor foi atingido. ' +
            'Favor entrar em contato com o suporte.', 0);
    };
    AtivMai.prototype.SendGetCode = function () {
        var _this = this;
        var params = {};
        this.ExecutarFuncaoServerSideAsynch('GerarCodigo', params, function (d) { return _this.OnGetCodeFinished(GetRetornoAJAX(d)); }, function (d) { return _this.OnGetCodeError(d); }, null);
    };
    AtivMai.prototype.SendGetDevices = function () {
        var _this = this;
        this.ExecutarFuncaoServerSideAsynch('ObterDispositivos', {}, function (d) { return _this.OnGetDevicesFinished(GetRetornoAJAX(d)); }, function (d) { return _this.OnGetDevicesError(d); }, null);
    };
    AtivMai.prototype.OnGetCodeFinished = function (d) {
        var retorno = d.split('|');
        console.log(retorno);
        fecharEspera();
        if (retorno[0] === 'ERR_API') {
            MostrarError('Năo foi possível se conectar ao servidor da Moura. ' +
                'Por favor tente novamente mais tarde.', 0);
            return;
        }
        else if (retorno[0] === 'NO_LOGIN') {
            MostrarError('Você deve estar logado para realizar esta ação.', 0);
            return;
        }
        else if (retorno[0] === 'NO_EMP') {
            MostrarError('Năo foi possível identificar a empresa cadastrada. ' +
                'Favor entrar em contato com o suporte.', 0);
            return;
        }
        else if (retorno[0] !== 'OK') {
            MostrarError('Ocorreu um erro interno no sistema: ' +
                retorno[0].substr(0, 20), 0);
            return;
        }
        var data = JSON.parse(retorno[1]);
        if (data['Sucesso'] !== true) {
            MostrarError('Ocorreu um erro interno no sistema: JSON retornou erro ' +
                data['Mensagem'], 0);
            return;
        }
        var code = data['Codigo'].substr(0, 4).toUpperCase() + '-' +
            data['Codigo'].substr(4, 4).toUpperCase();
        this.ativCode.innerText = code;
        this.RenderQRCode('rvm:ar:' + data['Codigo']);
        this.GetCode();
    };
    AtivMai.prototype.GetCode = function () {
        abrirEspera('Aguarde, obtendo lista de dispositivos...');
        this.SendGetDevices();
    };
    AtivMai.prototype.OnGetCodeError = function (erro) {
        fecharEspera();
        LogarException(erro);
    };
    AtivMai.prototype.OnGetDevicesFinished = function (d) {
        var _this = this;
        var index = d.indexOf('|');
        var result = d.substr(0, index);
        var data = d.substr(index + 1);
        if (result !== 'OK') {
            this.OnGetDevicesError(null);
            return;
        }
        var ret = JSON.parse(data);
        if (!ret.Sucesso || !ret.Dispositivos) {
            this.OnGetDevicesError(ret.Mensagem);
            return;
        }
        // possible null
        var _pn = function (fn, txt) {
            if (txt === '' || txt === null) {
                return '-';
            }
            return fn(txt);
        };
        // row element
        var _re = function (txt) {
            var el = document.createElement('td');
            el.innerText = txt;
            return el;
        };
        // format date
        var _fd = function (dtx) {
            var d = new Date(dtx);
            return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
        };
        // device name
        var _dn = function (dev) {
            var _a = dev.split('|'), devBrand = _a[0], devModel = _a[1];
            return devBrand + ' ' + devModel;
        };
        // status
        var _st = function (disp) {
            if (disp.Cancelado) {
                return 'Cancelado';
            }
            if (disp.DataAcesso !== null) {
                return 'Ativo';
            }
            if (disp.DataAcesso === null) {
                return 'Disponível';
            }
            return 'Desconhecido';
        };
        var elem = document.getElementById('tblBody');
        while (!!elem.firstChild) {
            elem.removeChild(elem.firstChild);
        }
        var _loop_1 = function (i) {
            var disp = ret.Dispositivos[i];
            var code = disp.Codigo.substr(0, 4).toUpperCase() + '-' +
                disp.Codigo.substr(4, 4).toUpperCase();
            var row = document.createElement('tr');
            row.appendChild(_re(code));
            row.appendChild(_re(_pn(_fd, disp.DataCadastro)));
            row.appendChild(_re(_pn(_fd, disp.DataAcesso)));
            row.appendChild(_re(_pn(_dn, disp.Dispositivo)));
            row.appendChild(_re(_st(disp)));
            if (disp.Cancelado) {
                row.appendChild(_re(''));
            }
            else {
                var el = document.createElement('td');
                var span = document.createElement('span');
                span.className = 'lnkBtn';
                span.innerText = 'Desativar';
                span.addEventListener('click', function () {
                    return _this.DisableDevice(disp.Codigo);
                });
                el.appendChild(span);
                row.appendChild(el);
            }
            elem.appendChild(row);
        };
        for (var i = 0; i < ret.Dispositivos.length; i++) {
            _loop_1(i);
        }
        fecharEspera();
        this.pageContainer.style.display = 'block';
    };
    AtivMai.prototype.OnGetDevicesError = function (erro) {
        console.error(erro);
        fecharEspera();
        LogarException(erro);
    };
    AtivMai.prototype.DisableDevice = function (code) {
        var _this = this;
        abrirEspera('Aguarde, desativando dispositivo...');
        var param = {
            data: {
                Codigo: code,
            },
        };
        this.ExecutarFuncaoServerSideAsynch('CancelarDispositivo', param, function (d) { return _this.OnCancelDeviceFinished(GetRetornoAJAX(d)); }, function (d) { return _this.OnGetDevicesError(d); }, null);
    };
    AtivMai.prototype.OnCancelDeviceFinished = function (d) {
        console.log(d);
        this.GetCode();
    };
    return AtivMai;
}(MouraPageAngular));
var ativMai = new AtivMai();
//# sourceMappingURL=AtivMai.js.map