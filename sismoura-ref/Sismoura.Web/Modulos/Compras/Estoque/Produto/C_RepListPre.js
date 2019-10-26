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
var C_RepListPre = /** @class */ (function (_super) {
    __extends(C_RepListPre, _super);
    function C_RepListPre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_RepListPre.prototype, "txtListaDe", {
        get: function () {
            return window['txtListaDe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RepListPre.prototype, "txtListaPara", {
        get: function () {
            return window['txtListaPara_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RepListPre.prototype, "btnReplicar", {
        get: function () {
            return window['btnReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RepListPre.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_RepListPre.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnReplicar) {
            adicionarEventoMoura(this.btnReplicar.Click, this.onClicouBotaoReplicar, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.onClicouBotaoLimpar, this);
        }
        if (this.txtListaDe) {
            adicionarEventoMoura(this.txtListaDe.Procurou, this.OnProcurouListaOrigem, this);
        }
        if (this.txtListaPara) {
            adicionarEventoMoura(this.txtListaPara.Procurou, this.OnProcurouListaDestino, this);
        }
    };
    C_RepListPre.prototype.OnProcurouListaOrigem = function (e) {
        try {
            var parametros = {
                codLista: this.txtListaDe.GetText().CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("RetornaProdutosLista", parametros);
            if (retorno) {
                this.txtListaDe.LabelResultado.innerText = this.txtListaDe.GetResultado() + '  |  Qtde de Produtos na lista: ' + retorno;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RepListPre.prototype.OnProcurouListaDestino = function (e) {
        try {
            var parametros = {
                codLista: this.txtListaPara.GetText().CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("RetornaProdutosLista", parametros);
            if (retorno) {
                this.txtListaPara.LabelResultado.innerText = this.txtListaPara.GetResultado() + '  |  Qtde de Produtos na lista: ' + retorno;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RepListPre.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    C_RepListPre.prototype.LimparCampos = function () {
        this.txtListaPara.Limpar();
        this.txtListaDe.Limpar();
    };
    C_RepListPre.prototype.onClicouBotaoLimpar = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
    };
    C_RepListPre.prototype.onClicouBotaoReplicar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        if (this.txtListaDe.GetText().CNum() == 0 || this.txtListaPara.GetText().CNum() == 0) {
            MostrarAlerta("Informe a lista de preço de origem e destino!");
            return;
        }
        if (this.txtListaDe.GetText().CNum() == this.txtListaPara.GetText().CNum()) {
            MostrarAlerta("Não é possível replicar produtos com origem e destino iguais!");
            return;
        }
        try {
            MsgBoxJS("Atenção, os produtos da lista " + this.txtListaDe.GetResultado() + " serão replicados para a lista " + this.txtListaPara.GetResultado() + ". Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (q) {
                if (q.Resultado == MsgBoxResult.Yes) {
                    abrirEspera("Aguarde, inserindo os registros!");
                    var parametros = {
                        listaOrigem: _this.txtListaDe.GetText().CNum(),
                        listaDestino: _this.txtListaPara.GetText().CNum()
                    };
                    _this.ExecutarFuncaoServerSideAsynch("ReplicarProdutosLista", parametros, function (d) {
                        fecharEspera();
                        if (d) {
                            MostrarMensagem("Produtos inseridos com sucesso!");
                            _this.LimparCampos();
                        }
                    }, function (e) {
                        fecharEspera();
                        LogarException(e);
                    }, _this);
                }
            });
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
        return false;
    };
    return C_RepListPre;
}(MouraPageAngular));
var c_RepListPre = new C_RepListPre();
//# sourceMappingURL=C_RepListPre.js.map