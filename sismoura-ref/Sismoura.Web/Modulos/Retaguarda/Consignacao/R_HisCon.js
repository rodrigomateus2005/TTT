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
var R_HisCon = /** @class */ (function (_super) {
    __extends(R_HisCon, _super);
    function R_HisCon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_HisCon.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCon.prototype, "agpPeriodo", {
        get: function () {
            return window['agpPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCon.prototype, "agpConsignacao", {
        get: function () {
            return window['agpConsignacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCon.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCon.prototype, "lblData", {
        get: function () {
            return window['lblData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCon.prototype, "lblCliente", {
        get: function () {
            return window['lblCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCon.prototype, "lblVendedor", {
        get: function () {
            return window['lblVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCon.prototype, "lblAjudante", {
        get: function () {
            return window['lblAjudante_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCon.prototype, "lblUtmConsig", {
        get: function () {
            return window['lblUtmConsig_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCon.prototype, "txtMsgRodape", {
        get: function () {
            return window['txtMsgRodape_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCon.prototype, "txtInfoAdicionais", {
        get: function () {
            return window['txtInfoAdicionais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCon.prototype, "txtConsignacao", {
        get: function () {
            return window['txtConsignacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCon.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_HisCon.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_HisCon.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        this.PreenchelblUtmConsig();
        if (!this.GetScope().OnAlterouFiltro) {
            this.GetScope().OnAlterouFiltro = $.proxy(this.OnAlterouFiltro, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Filtro.Filtrar; }, this.GetScope().OnAlterouFiltro);
        }
    };
    R_HisCon.prototype.OnAlterouFiltro = function () {
        if (this.Filtro.Filtrar == "P") {
            this.agpPeriodo.Visible = true;
            this.agpConsignacao.Visible = false;
            this.txtPeriodo.Obrigatorio = true;
            this.txtConsignacao.Obrigatorio = false;
        }
        else if (this.Filtro.Filtrar == "C") {
            this.agpPeriodo.Visible = false;
            this.agpConsignacao.Visible = true;
            this.txtConsignacao.Obrigatorio = true;
            this.txtPeriodo.Obrigatorio = false;
        }
    };
    R_HisCon.prototype.PreencherGrade = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial),
                dataFinal: ConvertToDate(this.Filtro.Periodo_Final),
                cliente: CNum(this.Filtro.Cliente),
                consignacao: CNum(this.Filtro.Consignacao)
            };
            if (this.Filtro.Filtrar == "P") {
                parametros.tipoFiltro = "P";
            }
            else if (this.Filtro.Filtrar == "C") {
                parametros.tipoFiltro = "C";
            }
            this.Filtro.InfoAdicionais = "";
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (retorno.length > 0) {
                    _this.AccordionFiltros.SetExpanded(false);
                    if (retorno[0].Vendas != null) {
                        if (retorno[0].Vendas.trim().substr(0, 3) != ", ," && retorno[0].Vendas != "") {
                            if (retorno[0].Vendas.trim().substr(0, 2) == ", ") {
                                var vendas = retorno[0].Vendas.replace(retorno[0].Vendas.substr(0, 3), "");
                            }
                            else {
                                var vendas = retorno[0].Vendas;
                            }
                            if (vendas != "") {
                                if (_this.Filtro.InfoAdicionais == "") {
                                    _this.Filtro.InfoAdicionais = "Venda(s): " + vendas;
                                }
                                else {
                                    _this.Filtro.InfoAdicionais = _this.Filtro.InfoAdicionais + "\r\nVenda(s): " + vendas;
                                }
                            }
                        }
                    }
                    if (retorno[0].Mensagem_Final_Informada != null) {
                        if (retorno[0].Mensagem_Final_Informada.trim().substr(0, 3) != ", ," && retorno[0].Vendas != "") {
                            if (retorno[0].Mensagem_Final_Informada.substr(0, 2) == ", " || retorno[0].Mensagem_Final_Informada.substr(0, 3) == " , ") {
                                var msgFinal = retorno[0].Mensagem_Final_Informada.replace(retorno[0].Mensagem_Final_Informada.substr(0, 3), "");
                            }
                            else {
                                var msgFinal = retorno[0].Mensagem_Final_Informada;
                            }
                            if (msgFinal != "") {
                                if (_this.Filtro.InfoAdicionais == "") {
                                    _this.Filtro.InfoAdicionais = "Observação(s): " + msgFinal;
                                }
                                else {
                                    _this.Filtro.InfoAdicionais = _this.Filtro.InfoAdicionais + "\r\nObservação(s): " + msgFinal;
                                }
                            }
                        }
                    }
                    _this.PreencherTxts();
                    if (_this.Filtro.Filtrar == "C") {
                        _this.PreencherLbls();
                        if (retorno) {
                            var totalVendido = 0, totalAcrescimo = 0, totalFrete = 0, totalDesconto = 0, diferenca = 0;
                            if (!_this.VerificaVendasMultiConsig(retorno)) {
                                for (var i = 0; i < retorno.length; i++) {
                                    if (retorno[i].Total_Vendido != null) {
                                        totalVendido += retorno[i].Total_Vendido;
                                    }
                                    if (retorno[i].Acrescimo != null) {
                                        totalAcrescimo += retorno[i].Acrescimo;
                                    }
                                    if (retorno[i].Frete != null) {
                                        totalFrete += retorno[i].Frete;
                                    }
                                    if (retorno[i].Desconto != null) {
                                        ;
                                        totalDesconto += retorno[i].Desconto;
                                    }
                                }
                                totalVendido = (totalVendido + totalAcrescimo + totalFrete) - totalDesconto;
                                if (CNum(retorno[0].Total_Dinheiro) < totalVendido) {
                                    diferenca = totalVendido - CNum(retorno[0].Total_Dinheiro);
                                }
                                else {
                                    diferenca = CNum(retorno[0].Total_Dinheiro) - totalVendido;
                                }
                                if (diferenca > 0.05) {
                                    MostrarAlerta("Os totais por formas de pagamento estão diferentes do total vendido. Por favor verifique esta consignação!");
                                }
                            }
                        }
                    }
                    var restante = 0;
                    for (var i = 0; i < retorno.length; i++) {
                        restante += retorno[i].Restante;
                    }
                    if (restante > 0) {
                        MostrarAlerta("Esta consignação possui itens em aberto favor vender ou devolver!");
                    }
                    _this.grid.PreencherGrid(retorno);
                    _this.RefreshAngular();
                }
                else {
                    if (_this.Filtro.Filtrar == "P") {
                        MostrarAlerta("Nenhuma consignação encontrada para o período informado!!!");
                    }
                    else if (_this.Filtro.Filtrar == "C") {
                        MostrarAlerta("Código da consignação inexistente!");
                    }
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
    R_HisCon.prototype.PreencherTxts = function () {
        var parametros = {
            dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial),
            dataFinal: ConvertToDate(this.Filtro.Periodo_Final),
            cliente: CNum(this.Filtro.Cliente),
            consignacao: CNum(this.Filtro.Consignacao)
        };
        if (this.Filtro.Filtrar == "P") {
            parametros.tipoFiltro = "P";
        }
        else if (this.Filtro.Filtrar == "C") {
            parametros.tipoFiltro = "C";
        }
        var retorno = this.ExecutarFuncaoServerSideSynch("PreencherTxts", parametros);
        if (retorno.length > 0) {
            if (retorno[0].Documentos != null) {
                if (retorno[0].Documentos.trim().substr(0, 3) != ", ," && retorno[0].Documentos != "") {
                    if (retorno[0].Documentos.trim().substr(0, 2) == ", ") {
                        var documentos = retorno[0].Documentos.replace(retorno[0].Documentos.substr(0, 3), "");
                    }
                    else {
                        var documentos = retorno[0].Documentos;
                    }
                    if (!String.IsNullOrWhiteSpace(documentos)) {
                        if (this.Filtro.InfoAdicionais == "") {
                            this.Filtro.InfoAdicionais = "Documento(s): " + documentos;
                        }
                        else {
                            this.Filtro.InfoAdicionais = this.Filtro.InfoAdicionais + "\r\nDocumento(s): " + documentos;
                        }
                    }
                }
            }
            if (this.Filtro.Filtrar == "C") {
                if (retorno[0].Devolucoes != null) {
                    if (retorno[0].Devolucoes.trim().substr(0, 3) != ", ," && retorno[0].Devolucoes != "") {
                        if (retorno[0].Devolucoes.trim().substr(0, 2) == ", ") {
                            var devolucoes = retorno[0].Devolucoes.replace(retorno[0].Devolucoes.substr(0, 3), "");
                        }
                        else {
                            var devolucoes = retorno[0].Devolucoes;
                        }
                        if (devolucoes != "") {
                            if (this.Filtro.InfoAdicionais == "") {
                                this.Filtro.InfoAdicionais = "Devolução(ões): " + devolucoes;
                            }
                            else {
                                this.Filtro.InfoAdicionais = this.Filtro.InfoAdicionais + "\r\nDevolução(ões): " + devolucoes;
                            }
                        }
                    }
                }
            }
        }
    };
    R_HisCon.prototype.PreencherLbls = function () {
        var parametros = {
            dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial),
            dataFinal: ConvertToDate(this.Filtro.Periodo_Final),
            cliente: CNum(this.Filtro.Cliente),
            consignacao: CNum(this.Filtro.Consignacao),
            tipoFiltro: "C",
            sel: 1
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("PreencherLbls", parametros);
        if (retorno.length == 0) {
            parametros.sel = 2;
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherLbls", parametros);
            if (retorno.length == 0) {
                parametros.sel = 3;
                var retorno = this.ExecutarFuncaoServerSideSynch("PreencherLbls", parametros);
                if (retorno.length == 0) {
                    return;
                }
            }
        }
        this.lblData.Text = "Data: " + ConvertToDate(retorno[0].Data).FormataData();
        this.lblCliente.Text = "Cliente: " + retorno[0].Cliente;
        this.lblVendedor.Text = "Vendedor: " + retorno[0].Vendedor;
        this.lblAjudante.Text = "Ajudante: " + retorno[0].Ajudante;
    };
    R_HisCon.prototype.VerificaVendasMultiConsig = function (retorno) {
        if (retorno[0].Vendas == "" || retorno[0].Vendas == null) {
            return false;
        }
        var vendas = retorno[0].Vendas.trim();
        vendas = vendas.replace(", ", ",");
        var parametros = {
            vendas: vendas
        };
        var consigs = this.ExecutarFuncaoServerSideSynch("PreencherVerificaVendas", parametros);
        if (consigs.length > 0) {
            var consig = consigs[0].consigs.trim();
            consig = consig.split(",");
            if (consig.length == 1) {
                return false;
            }
        }
        MostrarAlerta("A(s) venda(s) desta consignação esta vinculada as consignações " + consigs + "." + " O valor Total será diferente.");
        return true;
    };
    R_HisCon.prototype.PreenchelblUtmConsig = function () {
        var parametros;
        var retorno = this.ExecutarFuncaoServerSideSynch("PreencherVerificaUltConsig", parametros);
        this.lblUtmConsig.Text = "Última Consignação: " + retorno[0].Ultima_Consignacao;
        this.RefreshAngular();
    };
    R_HisCon.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        var now = this.DataServidor();
        this.Filtro.Periodo_Inicial = now;
        this.Filtro.Periodo_Final = now;
        this.Filtro.Clente = "";
        this.Filtro.Consignacao = "";
        this.Filtro.Filtrar = "C";
        this.Filtro.InfoAdicionais = "";
        this.lblData.Text = "Data: ";
        this.lblCliente.Text = "Cliente: ";
        this.lblVendedor.Text = "Vendedor: ";
        this.lblAjudante.Text = "Ajudante: ";
        this.txtMsgRodape.SetText(ValoresSismoura.ConfiguracoesRetaguarda.Mensgem_Rodape_Hist_Consignacao);
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    return R_HisCon;
}(MouraPageRelacaoAngular));
var r_HisCon = new R_HisCon();
//# sourceMappingURL=R_HisCon.js.map