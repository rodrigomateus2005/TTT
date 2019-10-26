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
var R_ConCeg = /** @class */ (function (_super) {
    __extends(R_ConCeg, _super);
    function R_ConCeg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ConCeg.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCeg.prototype, "txtPedido", {
        get: function () {
            return window['txtPedido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCeg.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCeg.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCeg.prototype, "txtFornecedor", {
        get: function () {
            return window['txtFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCeg.prototype, "gridConsulta", {
        get: function () {
            return window['gridConsulta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCeg.prototype, "btnConsulta", {
        get: function () {
            return window['btnConsulta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCeg.prototype, "mdConsulta", {
        get: function () {
            return window['mdConsulta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCeg.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCeg.prototype, "btnImprimir", {
        get: function () {
            return window['btnImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_ConCeg.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_ConCeg.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtPedido) {
            adicionarEventoMoura(this.txtPedido.Procurou, this.OnDepoisBuscouPedido, this);
        }
        if (this.btnConsulta) {
            adicionarEventoMoura(this.btnConsulta.Click, this.OnClickConsulta, this);
        }
        if (this.gridConsulta) {
            adicionarEventoMoura(this.gridConsulta.SelecionouLinha, this.OnSelecionouItem, this);
        }
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnClickGerarConsulta, this);
        }
        if (this.grid) {
            // Permite que o BR seja renderizado corretamente na coluna para pular uma linha entre os códigos de barra
            this.grid.SetEncodeHTMLColuna("Cod_Barra", false);
        }
        //if (this.btnImprimir) {
        //    adicionarEventoDevExpress(this.btnImprimir.Botao.Click, this.OnClickImprimir, this);
        //}
    };
    R_ConCeg.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Pedido = 0;
        this.Filtro.Fornecedor = "";
        this.Filtro.Emissao = "";
        this.grid.PreencherGrid(null);
        this.LimparCamposModal();
        this.RefreshAngular();
    };
    R_ConCeg.prototype.LimparCamposModal = function () {
        this.txtFornecedor.SetText("");
        this.txtPeriodo.Iniciar();
        this.gridConsulta.PreencherGrid(null);
    };
    R_ConCeg.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            parametros = {
                codPedido: CNum(this.Filtro.Pedido)
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                var mensagem;
                mensagem = "Não foi encontrado nenhum registro!<br /><br />";
                mensagem += " - Verifique se o pedido possui produtos.<br />";
                mensagem += " - Tente refazer o cadastro do pedido.";
                var retorno = GetRetornoAJAX(d);
                if (retorno) {
                    if (retorno.length > 0) {
                        _this.Filtro.Fornecedor = retorno[0].Fornecedor;
                        _this.Filtro.Emissao = ConvertToDate(retorno[0].Data_Emissao).FormataData();
                        _this.RefreshAngular();
                        _this.grid.PreencherGrid(retorno);
                    }
                    else {
                        MsgBoxJS(mensagem, MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
                        _this.LimparCampos();
                    }
                }
                else {
                    MsgBoxJS(mensagem, MsgBoxOptions.OkOnly, MsgBoxIcon.Alert);
                    _this.LimparCampos();
                }
                fecharEspera();
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
    R_ConCeg.prototype.OnDepoisBuscouPedido = function (s, e) {
        if (CNum(this.Filtro.Pedido) > 0) {
            this.PreencherGrade();
        }
        else {
            this.LimparCampos();
        }
    };
    R_ConCeg.prototype.OnClickConsulta = function (s, e) {
        this.mdConsulta.Show();
        this.LimparCamposModal();
    };
    R_ConCeg.prototype.OnSelecionouItem = function (s, e) {
        this.txtPedido.Procurar(e.data["Codigo"]);
        this.mdConsulta.Hide();
    };
    R_ConCeg.prototype.OnClickGerarConsulta = function (s, e) {
        var _this = this;
        if (ValidarPeriodo(this.txtPeriodo.textBoxCalendarioInicio.GetDate(), this.txtPeriodo.textBoxCalendarioFim.GetDate())) {
            var parametros = void 0;
            try {
                parametros = {
                    dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                    dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                    codFornecedor: CNum(this.txtFornecedor.GetText())
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("PreencherGridConsulta", parametros, function (d) {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (retorno) {
                        if (retorno.length > 0) {
                            _this.gridConsulta.PreencherGrid(retorno);
                        }
                        else {
                            MostrarAlerta("Nenhum pedido encontrado neste período!");
                            _this.gridConsulta.PreencherGrid(null);
                        }
                    }
                    else {
                        MostrarAlerta("Nenhum pedido encontrado neste período!");
                        _this.gridConsulta.PreencherGrid(null);
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
        }
        else {
            MostrarAlerta("Preencha o campo corretamente: Período");
        }
    };
    return R_ConCeg;
}(MouraPageRelacaoAngular));
var r_ConCeg = new R_ConCeg();
//# sourceMappingURL=R_ConCeg.js.map