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
var R_Contra_Angular = /** @class */ (function (_super) {
    __extends(R_Contra_Angular, _super);
    function R_Contra_Angular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Contra_Angular.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Contra_Angular.prototype, "Grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Contra_Angular.prototype, "optTipoData", {
        get: function () {
            return window['optTipoData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Contra_Angular.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Contra_Angular.prototype, "txtVendedor", {
        get: function () {
            return window['txtVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Contra_Angular.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Contra_Angular.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Contra_Angular.prototype, "chkSomenteCortesias", {
        get: function () {
            return window['chkSomenteCortesias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Contra_Angular.prototype, "chkSomenteEmitidos", {
        get: function () {
            return window['chkSomenteEmitidos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Contra_Angular.prototype, "chkDiscriminarParcelas", {
        get: function () {
            return window['chkDiscriminarParcelas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Contra_Angular.prototype, "lblContratosParcelasPendentes", {
        get: function () {
            return window['lblContratosParcelasPendentes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Contra_Angular.prototype, "lblTotalFinal", {
        get: function () {
            return window['lblTotalFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Contra_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.lblContratosParcelasPendentes.Visible = false;
        this.lblTotalFinal.Visible = false;
        this.optTipoData.SetValue("INI");
        var usuarioLogado = ValoresSismoura.UsuarioLogado;
        if (usuarioLogado != undefined) {
            var parametros;
            var retorno = this.ExecutarFuncaoServerSideSynch("GetEmpresaCNPJPadrao", parametros);
            if (retorno != null) {
                if (retorno.Cnpj == "64.152.986/0001-06" && (usuarioLogado != 2 && usuarioLogado != 33)) {
                    parametros = {
                        codGestor: ValoresSismoura.UsuarioLogado
                    };
                    var usuarios = this.ExecutarFuncaoServerSideSynch("GetUsuariosByGestor", parametros);
                    this.txtVendedor.AddParametro("gestor", usuarioLogado + "");
                    this.txtVendedor.Obrigatorio = true;
                    if (usuarios.length <= 0) {
                        MostrarAlerta("Atualmente você não coordena nenhum vendedor");
                    }
                }
                else {
                    this.txtVendedor.Obrigatorio = false;
                }
            }
        }
    };
    R_Contra_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtCliente) {
            adicionarEventoMoura(this.txtCliente.Procurou, this.txtCliente_Procurou, this);
        }
        if (this.txtVendedor) {
            adicionarEventoMoura(this.txtVendedor.Procurou, this.txtVendedor_Procurou, this);
        }
    };
    R_Contra_Angular.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtPeriodo.Iniciar();
        this.txtCliente.Limpar();
        this.txtVendedor.Limpar();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.chkSomenteEmitidos.Checked = false;
        this.chkSomenteCortesias.Checked = false;
        this.chkDiscriminarParcelas.Checked = false;
        this.Grid.PreencherGrid([]);
        this.optTipoData.SetValue("INI");
        this.lblContratosParcelasPendentes.Visible = false;
        this.lblTotalFinal.Visible = false;
    };
    R_Contra_Angular.prototype.txtVendedor_Procurou = function (s) {
        try {
            if (this.txtVendedor.GetText().CNum() > 0) {
                var parametros;
                var retorno = this.ExecutarFuncaoServerSideSynch("GetEmpresaCNPJPadrao", parametros);
                if (retorno != undefined) {
                    if (retorno.Cnpj == "64.152.986/0001-06" && (ValoresSismoura.UsuarioLogado != 2 && ValoresSismoura.UsuarioLogado != 33)) {
                        parametros = {
                            codGestor: ValoresSismoura.UsuarioLogado,
                            codUsuario: this.txtVendedor.GetText().CNum()
                        };
                        retorno = this.ExecutarFuncaoServerSideSynch("GetByGestorVendedor", parametros);
                        var vendedor = retorno;
                        if (vendedor != undefined) {
                            this.txtCliente.Focus();
                        }
                        else {
                            this.txtVendedor.Limpar();
                            this.txtCliente.LimparParametros();
                            this.txtVendedor.Focus();
                            MostrarAlerta("O vendedor selecionado não pertence ao gestor logado");
                        }
                    }
                }
                this.txtCliente.LimparParametros();
                this.txtCliente.AddParametro("vendedor", this.txtVendedor.GetText());
            }
            else {
                this.txtCliente.LimparParametros();
            }
            this.txtCliente.Limpar();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Contra_Angular.prototype.txtCliente_Procurou = function (s) {
        if (this.txtCliente.GetText().CNum() > 0 && this.txtVendedor.GetText().CNum() > 0) {
            var pessoa = this.ObterDadosPessoa(this.txtCliente.GetText().CNum());
            if (pessoa != undefined) {
                var vendedor = this.txtVendedor.GetText().CNum();
                if (pessoa.Vendedor != vendedor) {
                    this.txtCliente.Limpar();
                    MostrarAlerta("O cliente selecionado não pertence ao vendedor.");
                }
            }
        }
    };
    R_Contra_Angular.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        var lista;
        lista = this.lstEmpresa.GetValues();
        var empresas = lista.join(",");
        var parametros;
        parametros = {
            empresas: empresas
        };
        try {
            var ExisteConta = this.ExecutarFuncaoServerSideSynch("ExistemContasEmpresas", parametros);
            if (!ExisteConta) {
                MostrarAlerta("Informe ao menos uma empresa que possua conta corrente");
                return;
            }
            parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFInal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                codVendedor: this.txtVendedor.GetText().CNum(),
                codCliente: this.txtCliente.GetText().CNum(),
                somenteCortesias: this.chkSomenteCortesias.Checked,
                somenteEmitidos: this.chkSomenteEmitidos.Checked,
                tipoData: this.optTipoData.GetValue(),
                empresas: lista.join(","),
                exibirParcBaixadas: this.chkDiscriminarParcelas.Checked
            };
            if (this.AccordionFiltros) {
                this.AccordionFiltros.SetExpanded(false);
            }
            var retorno = this.ExecutarFuncaoServerSideSynch("RelacaoContratos", parametros);
            this.Grid.PreencherGrid(retorno);
            if (this.chkDiscriminarParcelas.Checked == true) {
                this.Grid.ColunaVisible("Parcelas_Pendentes", true);
                this.Grid.ColunaVisible("Codigo_Cliente", false);
                this.Grid.ColunaVisible("Valor", false);
                this.Grid.ColunaVisible("Valor_Parcela", true);
                this.Grid.GroupBy("Nome_Cliente");
                // this.Grid.ExpandAll(0);
                this.lblContratosParcelasPendentes.Visible = true;
                this.lblTotalFinal.Visible = true;
                var x = this.Grid.DataSource.map(function (item) { return item.Codigo_Contrato; }).filter(function (value, index, self) { return self.indexOf(value) === index; });
                this.lblContratosParcelasPendentes.Text = x.length + "";
                this.lblTotalFinal.Text = this.Grid.DataSource.Sum("Valor_Parcela").Format(4);
                //lblContratosParcelasPendentes.Text = Funcoes.CountDataTableDistinct(Of Long)(dt, "Contrato_Parcela_Aberta", "Codigo_Contrato").Formata(0)
            }
            else {
                this.Grid.ColunaVisible("Parcelas_Pendentes", false);
                this.Grid.ColunaVisible("Codigo_Cliente", true);
                this.Grid.ColunaVisible("Valor", true);
                this.Grid.ColunaVisible("Valor_Parcela", false);
                this.Grid.Grid.clearGrouping();
                this.lblContratosParcelasPendentes.Text = "";
                this.lblTotalFinal.Text = "";
                this.lblContratosParcelasPendentes.Visible = false;
                this.lblTotalFinal.Visible = false;
            }
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    return R_Contra_Angular;
}(MouraPageRelacaoAngular));
var r_Contra_Angular = new R_Contra_Angular;
//# sourceMappingURL=R_Contra_Angular.js.map