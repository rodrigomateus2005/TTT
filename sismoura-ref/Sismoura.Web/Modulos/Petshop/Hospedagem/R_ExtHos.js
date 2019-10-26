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
var R_ExtHos = /** @class */ (function (_super) {
    __extends(R_ExtHos, _super);
    function R_ExtHos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ExtHos.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ExtHos.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ExtHos.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ExtHos.prototype, "txtProfissional", {
        get: function () {
            return window['txtProfissional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ExtHos.prototype, "lstSituacoes", {
        //get cboConcluido(): MouraComboBox {
        //    return window['cboConcluido_Object'];
        //}
        //get cboPassouPDV(): MouraComboBox {
        //    return window['cboPassouPDV_Object'];
        //}
        get: function () {
            return window['lstSituacoes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ExtHos.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ExtHos.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ExtHos.prototype, "grdDiscriminada", {
        get: function () {
            return window['grdDiscriminada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ExtHos.prototype, "grdResumida", {
        get: function () {
            return window['grdResumida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ExtHos.prototype, "grdProdutoResumida", {
        get: function () {
            return window['grdProdutoResumida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ExtHos.prototype, "grdProdutoConsumidoResumida", {
        get: function () {
            return window['grdProdutoConsumidoResumida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ExtHos.prototype, "cboTipoHospedagem", {
        get: function () { return window['cboTipoHospedagem_Object']; },
        enumerable: true,
        configurable: true
    });
    R_ExtHos.prototype.Init = function () {
        _super.prototype.Init.call(this);
        //if (this.grdHospedagem) {
        //    adicionarEventoMoura(this.grdHospedagem.ClickBotaoLinha, this.OnGrdHospedagemClicouBotao, this);
        //}
        //if (this.grdReserva) {
        //    adicionarEventoMoura(this.grdReserva.ClickBotaoLinha, this.OnGrdReservaClicouBotao, this);
        //}
    };
    R_ExtHos.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_ExtHos.prototype.GerarGridHospedagem = function (tipoRelacao) {
        var _this = this;
        var parametros;
        try {
            if (!this.ValidadarFiltros()) {
                return;
            }
            var situacoes = [];
            if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
                situacoes = this.lstSituacoes.SelectedValues;
            }
            parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                codProprietario: this.txtPet.TextBoxProprietario.GetText().CNum(),
                codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum(),
                codProfissional: this.txtProfissional.GetText().CNum(),
                situacoes: situacoes,
                empresas: this.lstEmpresa.GetValuesRelacao(),
                tipoRelacao: tipoRelacao,
                tipoHospedagem: this.cboTipoHospedagem.GetValue()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetServicosHospedagem", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (tipoRelacao == "D") {
                        _this.grdDiscriminada.PreencherGrid(retorno);
                        _this.grdDiscriminada.GroupBy("Tipo_Servico");
                        _this.grdDiscriminada.GroupBy("Hospedagem");
                        _this.grdDiscriminada.GroupBy("Atendimento");
                    }
                    else if (tipoRelacao == "A") {
                        _this.grdResumida.PreencherGrid(retorno);
                        _this.grdDiscriminada.GroupBy("Tipo_Servico");
                    }
                    else {
                        //this.grdProdutoResumida.PreencherGrid(retorno);
                        _this.grdProdutoConsumidoResumida.PreencherGrid(retorno);
                    }
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    R_ExtHos.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (this.tab.GetActiveTabIndex() == 0) {
            this.GerarGridHospedagem("D"); //Discriminada.
        }
        else if (this.tab.GetActiveTabIndex() == 1) {
            this.GerarGridHospedagem("A"); //Agrupada.
        }
        else {
            this.GerarGridHospedagem("P");
        }
    };
    R_ExtHos.prototype.ValidadarFiltros = function () {
        try {
            if (!this.txtPeriodo.IsValido()) {
                MostrarAlerta("Informe o período.");
                return false;
            }
            if (this.lstEmpresa.GetValues().length == 0) {
                MostrarAlerta("Informe uma empresa.");
                return false;
            }
            if (this.cboTipoHospedagem.GetText() == "") {
                MostrarAlerta("Informe o tipo da hospedagem");
                return;
            }
            return true;
        }
        catch (e) {
            LogarException(e);
        }
    };
    R_ExtHos.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtProfissional.Limpar();
        this.lstSituacoes.LimparSelecao();
        this.grdResumida.PreencherGrid([]);
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.grdDiscriminada.PreencherGrid([]);
        this.txtPeriodo.Iniciar();
        this.txtPet.Limpar();
        if (this.cboTipoHospedagem) {
            this.cboTipoHospedagem.SetValue(0);
        }
    };
    return R_ExtHos;
}(MouraPageRelacaoAngular));
var r_ExtHos = new R_ExtHos();
//# sourceMappingURL=R_ExtHos.js.map