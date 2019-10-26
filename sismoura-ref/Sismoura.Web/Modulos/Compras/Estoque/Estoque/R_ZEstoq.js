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
var R_ZEstoq = /** @class */ (function (_super) {
    __extends(R_ZEstoq, _super);
    function R_ZEstoq() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ZEstoq.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ZEstoq.prototype, "chkIntervalo", {
        get: function () {
            return window['chkIntervalo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ZEstoq.prototype, "agpIntervalo", {
        get: function () {
            return window['agpIntervalo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ZEstoq.prototype, "txtGrupo", {
        get: function () {
            return window['txtGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ZEstoq.prototype, "txtInicio", {
        get: function () {
            return window['txtInicio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ZEstoq.prototype, "txtFim", {
        get: function () {
            return window['txtInicio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ZEstoq.prototype, "cboDeposito", {
        get: function () {
            return window['cboDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ZEstoq.prototype, "chkNegativos", {
        get: function () {
            return window['chkNegativos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ZEstoq.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ZEstoq.prototype, "btnZerar", {
        get: function () {
            return window['btnZerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_ZEstoq.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        this.agpIntervalo.Visible = false;
    };
    R_ZEstoq.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.chkIntervalo) {
            adicionarEventoMoura(this.chkIntervalo.CheckChanged, this.OnCheckIntervalo, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.btnZerar) {
            adicionarEventoMoura(this.btnZerar.Click, this.OnClickZerar, this);
        }
    };
    R_ZEstoq.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.LimpaAgrupamento(false);
        this.chkIntervalo.Checked = false;
        this.cboDeposito.SetSelectedIndex(0);
        this.chkNegativos.Checked = false;
        this.Filtro.Grupo = 0;
        this.Filtro.Subgrupo = 0;
        this.Filtro.Fornecedor = 0;
        this.Filtro.Marca = 0;
        this.Filtro.Linha = 0;
        if (this.grid.DataSource && this.grid.DataSource.length > 0) {
            this.grid.Grid.deselectAll();
        }
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_ZEstoq.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (this.VerificaCamposObrigatorios()) {
            try {
                parametros = {
                    deposito: CNum(this.cboDeposito.GetValue()),
                    baixarServico: ValoresSismoura.ConfiguracoesRetaguarda.baixar_servico_estoque,
                    grupo: CNum(this.Filtro.Grupo),
                    subgrupo: CNum(this.Filtro.Subgrupo),
                    marca: CNum(this.Filtro.Marca),
                    linha: CNum(this.Filtro.Linha),
                    fornecedor: CNum(this.Filtro.Fornecedor),
                    inicioIntervalo: CNum(this.Filtro.Inicio),
                    fimIntervalo: CNum(this.Filtro.Fim),
                    apenasNegativos: this.chkNegativos.Checked
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                    _this.grid.Grid.deselectAll();
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    _this.AccordionFiltros.SetExpanded(false);
                    _this.grid.Refresh();
                }, function (erro) {
                    fecharEspera();
                    LogarException(erro);
                }, this);
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    R_ZEstoq.prototype.OnCheckIntervalo = function (s, e) {
        if (this.chkIntervalo.Checked) {
            this.LimpaAgrupamento(true);
        }
        else {
            this.LimpaAgrupamento(false);
        }
    };
    R_ZEstoq.prototype.LimpaAgrupamento = function (visible) {
        this.agpIntervalo.Visible = visible;
        this.Filtro.Inicio = 0;
        this.Filtro.Fim = 0;
    };
    R_ZEstoq.prototype.VerificaCamposObrigatorios = function () {
        var retorno = true;
        if (CNum(this.cboDeposito.GetValue()) <= 0) {
            MostrarAlerta("Preencha o campo corretamente: Depósito");
            retorno = false;
        }
        else if (this.chkIntervalo.Checked) {
            if (CNum(this.Filtro.Fim) > 0) {
                if (CNum(this.Filtro.Inicio) <= 0) {
                    MostrarAlerta("Informe corretamente o intervalo do código do produto!");
                    retorno = false;
                    this.txtInicio.Focus();
                }
                else if (CNum(this.Filtro.Inicio) > 0) {
                    if (CNum(this.Filtro.Fim) <= 0 || CNum(this.Filtro.Inicio) > CNum(this.Filtro.Fim)) {
                        MostrarAlerta("Informe corretamente o intervalo do código do produto!");
                        retorno = false;
                        this.txtFim.Focus();
                    }
                }
            }
            else {
                MostrarAlerta("Informe corretamente o intervalo do código do produto!");
                retorno = false;
                this.txtFim.Focus();
            }
        }
        return retorno;
    };
    R_ZEstoq.prototype.OnSelecionouLinha = function (s, e) {
        /*this.grid.Grid.element().find("tr").css("font-weight", "normal");

        for (var x = 0; x < this.grid.Grid.getSelectedRowKeys().length; x++) {
            var index = this.grid.Grid.getRowIndexByKey(this.grid.Grid.getSelectedRowKeys()[x]);
            this.grid.Grid.getRowElement(index).css("font-weight", "bold");
        }*/
    };
    R_ZEstoq.prototype.OnClickZerar = function (s, e) {
        var _this = this;
        if (this.grid.GetSelectedRowsData.length > 0) {
            MsgBoxJS("O sistema irá ZERAR o estoque de TODOS os produtos selecionados na grade.<br />" +
                "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDeseja realmente continuar com a operação?", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, function (result) {
                if (result.Resultado == MsgBoxResult.Yes) {
                    _this.dlgFuncaoAdm.Verificar(null, ValoresSismoura.UsuarioLogado, false, function (retorno) {
                        if (retorno.Valido) {
                            _this.ZerarEstoque(retorno.Usuario);
                        }
                    }, _this, true);
                }
            });
        }
        else {
            MostrarAlerta("Selecione ao menos um produto para que o sistema execute a operação corretamente!");
        }
    };
    R_ZEstoq.prototype.ZerarEstoque = function (usuario) {
        var _this = this;
        var parametros;
        try {
            parametros = {
                produtos: this.grid.GetSelectedRowsData,
                usuario: usuario,
                tela: ValoresSismoura.NomeTela,
                deposito: CNum(this.cboDeposito.GetValue())
            };
            abrirEspera("Zerando o estoque de " + this.grid.GetSelectedRowsData.length + " produtos");
            this.ExecutarFuncaoServerSideAsynch("ZerarEstoque", parametros, function (d) {
                fecharEspera();
                _this.PreencherGrade();
                MsgBoxJS("Realizado com sucesso!", MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
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
    return R_ZEstoq;
}(MouraPageRelacaoAngular));
var r_ZEstoq = new R_ZEstoq();
//# sourceMappingURL=R_ZEstoq.js.map