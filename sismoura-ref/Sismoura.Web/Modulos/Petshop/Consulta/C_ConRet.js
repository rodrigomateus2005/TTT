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
var C_ConRet = /** @class */ (function (_super) {
    __extends(C_ConRet, _super);
    function C_ConRet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ConRet.prototype, "grdConsulta", {
        get: function () {
            return window['grdConsulta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConRet.prototype, "grdRetorno", {
        get: function () {
            return window['grdRetorno_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConRet.prototype, "lblDiasRetorno", {
        get: function () {
            return window['lblDiasRetorno_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConRet.prototype, "txtServicoConsulta", {
        get: function () {
            return window['txtServicoConsulta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConRet.prototype, "txtServicoRetorno", {
        get: function () {
            return window['txtServicoRetorno_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConRet.prototype, "Consulta", {
        get: function () {
            var that = this.GetScope()["Consulta"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Consulta"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConRet.prototype, "Consultas", {
        get: function () {
            return this.GetScope()["Consultas"];
        },
        set: function (value) {
            this.GetScope()["Consultas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConRet.prototype, "Retorno", {
        get: function () {
            var that = this.GetScope()["Retorno"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Retorno"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConRet.prototype, "Retornos", {
        get: function () {
            return this.GetScope()["Retornos"];
        },
        set: function (value) {
            this.GetScope()["Retornos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_ConRet.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grdConsulta) {
            adicionarEventoMoura(this.grdConsulta.Validando, this.OnValidandoItemServicoConsulta, this);
            adicionarEventoMoura(this.grdConsulta.LimpouItem, this.LimparServicoConsulta, this);
            adicionarEventoMoura(this.grdConsulta.ItemExcluido, this.OnExcluiuConsulta, this);
        }
        if (this.grdRetorno) {
            adicionarEventoMoura(this.grdRetorno.Validando, this.OnValidandoItemServicoRetorno, this);
            adicionarEventoMoura(this.grdRetorno.LimpouItem, this.LimparServicoRetorno, this);
            adicionarEventoMoura(this.grdRetorno.ItemExcluido, this.OnExcluiuRetorno, this);
        }
    };
    C_ConRet.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        this.lblDiasRetorno.Text = ValoresSismoura.ConfiguracoesPetshop.Dias_Retorno + " dia(s)";
        this.GetServico();
    };
    C_ConRet.prototype.OnExcluiuConsulta = function (s, e) {
        this.OnExcluiuServico(e, 1);
        this.LimparServicoConsulta();
    };
    C_ConRet.prototype.OnExcluiuRetorno = function (s, e) {
        this.OnExcluiuServico(e, 2);
        this.LimparServicoRetorno();
    };
    C_ConRet.prototype.OnExcluiuServico = function (e, tipo) {
        try {
            var parametros;
            parametros = {
                tipo: tipo,
                codServico: e.item.Codigo,
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("RemoverRegistro", parametros);
            if (retorno) {
                MostrarMensagem("Serviço removido com sucesso");
            }
            this.GetServico();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConRet.prototype.OnValidandoItemServicoConsulta = function (s, e) {
        this.ValidarItem(e, 1, this.txtServicoConsulta.GetText());
        this.LimparServicoConsulta();
        this.txtServicoConsulta.Focus();
    };
    C_ConRet.prototype.OnValidandoItemServicoRetorno = function (s, e) {
        this.ValidarItem(e, 2, this.txtServicoRetorno.GetText());
        this.LimparServicoRetorno();
        this.txtServicoRetorno.Focus();
    };
    C_ConRet.prototype.ValidarItem = function (e, tipo, nomeServico) {
        try {
            if (e.item.Codigo == undefined || e.item.Codigo == null) {
                MostrarAlerta("Informe um serviço para ser adicionado");
                e.cancelar = true;
                return;
            }
            else {
                var parametros;
                parametros = {
                    tipo: tipo,
                    codServico: e.item.Codigo,
                    nomeTela: ValoresSismoura.NomeTela,
                    codUsuario: ValoresSismoura.UsuarioLogado
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("AdicionarRegistro", parametros);
                if (retorno) {
                    if (tipo == 1) {
                        MostrarMensagem("Consulta gravada com sucesso");
                    }
                    else {
                        MostrarMensagem("Retorno gravado com sucesso");
                    }
                    e.cancelar = true;
                }
                else {
                    if (tipo == 1) {
                        MostrarAlerta("Este serviço já está configurado como Consulta");
                    }
                    else {
                        MostrarAlerta("Este serviço já está configurado como Retorno");
                    }
                    e.cancelar = true;
                    return;
                }
            }
            this.GetServico();
        }
        catch (ex) {
            e.cancelar = true;
            MostrarAlerta("Ocorreu um erro ao inserir o serviço. Favor verficiar o cadastro do serviço.");
        }
    };
    C_ConRet.prototype.LimparCampos = function () {
        this.LimparServicoConsulta();
        this.LimparServicoRetorno();
    };
    C_ConRet.prototype.LimparServicoConsulta = function () {
        this.txtServicoConsulta.Limpar();
    };
    C_ConRet.prototype.LimparServicoRetorno = function () {
        this.txtServicoRetorno.Limpar();
    };
    C_ConRet.prototype.GetServico = function () {
        try {
            var parametros;
            parametros = {};
            var servico = this.ExecutarFuncaoServerSideSynch("GetServicos", parametros);
            this.Retornos = servico.Retorno;
            this.Consultas = servico.Consulta;
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_ConRet;
}(MouraPageAngular));
var c_ConRet = new C_ConRet();
//# sourceMappingURL=C_ConRet.js.map