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
var G_Parc = /** @class */ (function (_super) {
    __extends(G_Parc, _super);
    function G_Parc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(G_Parc.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Parc.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Parc.prototype, "cboContaCorrente", {
        get: function () {
            return window['cboContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Parc.prototype, "btnGerarP", {
        get: function () {
            return window['btnGerarP_Object'];
        },
        enumerable: true,
        configurable: true
    });
    G_Parc.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    G_Parc.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.OnCellPrepared, this);
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.btnGerarP) {
            adicionarEventoMoura(this.btnGerarP.Click, this.OnClickGerarParcelas, this);
        }
        if (this.cboContaCorrente) {
            adicionarEventoDevExpress(this.cboContaCorrente.Combo.SelectedIndexChanged, this.OnMudouContaCorrente, this);
        }
    };
    G_Parc.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        /*Valor que estava chumbado no EXE*/
        this.Filtro.QtdeMeses = 3;
        this.Filtro.Servico = 0;
        this.cboContaCorrente.Limpar();
        this.Filtro.NomeConta = "";
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    G_Parc.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        if (this.ValidarCamposObrigatorios()) {
            var parametros = void 0;
            this.grid.PreencherGrid(null);
            try {
                parametros = {
                    dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial),
                    dataFinal: ConvertToDate(this.Filtro.Periodo_Final),
                    qtdeMeses: CNum(this.Filtro.QtdeMeses),
                    contaCorrente: this.cboContaCorrente.GetContaCorrente(),
                    servico: CNum(this.Filtro.Servico)
                };
                abrirEspera("Aguarde. Gerando a relação...");
                this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                    var retorno = GetRetornoAJAX(d);
                    if (retorno) {
                        if (retorno.length > 0) {
                            _this.grid.PreencherGrid(retorno);
                            _this.grid.deselectAll();
                            var selecionados = retorno.filter(function (item) { return String.IsNullOrWhiteSpace(item.Boleto) && CNum(item.Receber) <= 0; });
                            _this.grid.SelectRows(selecionados.map(function (item) { return item.Contador; }), true);
                        }
                        else {
                            MsgBoxJS("Não há Recebimentos Previstos neste período informado !", MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
                        }
                    }
                    else {
                        MsgBoxJS("Não há Recebimentos Previstos neste período informado !", MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
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
        }
    };
    G_Parc.prototype.OnCellPrepared = function (s, e) {
        if (e.rowType == "data") {
            if (String.IsNullOrWhiteSpace(e.data["Boleto"]) && CNum(e.data["Receber"]) <= 0) {
                e.cellElement.css("color", "blue");
            }
            else {
                e.cellElement.css("color", "red");
            }
        }
    };
    G_Parc.prototype.OnSelecionouLinha = function (s, e) {
        var _this = this;
        this.grid.Grid.getDataByKeys([e.rowKey]).then(function (item) {
            //Verifica se a linha está vermelha.
            if (!String.IsNullOrWhiteSpace(item[0].Boleto) || CNum(item[0].Receber) > 0) {
                //Se estiver, desseleciona a linha.
                _this.grid.Grid.deselectRows([e.rowKey]);
            }
            else {
                //Se não estiver vermelha, verifica: 
                var color = "blue";
                //Se a linha for desselecionada, a sua cor deve ser alterada para preto.
                //Se, estiver sido selecionada, sua cor deve ser alterada para azul.
                if (!_this.grid.Grid.isRowSelected(e.rowKey)) {
                    color = "black";
                }
                _this.grid.Grid.getRowElement(e.rowIndex).find("td").each(function (index, elem) {
                    $(elem).css("color", color);
                });
            }
        });
    };
    G_Parc.prototype.OnClickGerarParcelas = function (s, e) {
        e.processOnServer = false;
        var dadosSelecionados = this.grid.GetSelectedRowsData;
        if (this.grid.DataSource.length <= 0) {
            MostrarAlerta("Selecione ao menos um contrato!");
        }
        else if (dadosSelecionados.length <= 0) {
            MostrarAlerta("Os contratos já possuem parcelas geradas!");
        }
        else {
            this.GerarParcelas(dadosSelecionados);
        }
    };
    G_Parc.prototype.GerarParcelas = function (dadosSelecionados) {
        var _this = this;
        var parametros;
        try {
            parametros = {
                parcelas: dadosSelecionados,
                contaCorrente: this.cboContaCorrente.GetContaCorrente(),
                tela: ValoresSismoura.NomeTela,
                usuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera("Aguarde. Gerando as parcelas dos contratos...");
            this.ExecutarFuncaoServerSideAsynch("GerarParcelas", parametros, function (d) {
                fecharEspera();
                MostrarMensagem(dadosSelecionados.length + " parcelas geradas com sucesso !");
                _this.LimparCampos();
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
    G_Parc.prototype.OnMudouContaCorrente = function (s, e) {
        if (!String.IsNullOrWhiteSpace(this.cboContaCorrente.GetContaCorrente())) {
            this.PreencherNomeContaCorrente();
        }
    };
    G_Parc.prototype.PreencherNomeContaCorrente = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                contaCorrente: this.cboContaCorrente.GetContaCorrente()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetNomeContaCorrente", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.Filtro.NomeConta = retorno;
                _this.RefreshAngular();
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
    return G_Parc;
}(MouraPageRelacaoAngular));
var g_Parc = new G_Parc();
//# sourceMappingURL=G_Parc.js.map