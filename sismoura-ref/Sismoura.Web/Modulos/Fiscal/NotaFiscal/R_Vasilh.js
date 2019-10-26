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
var R_Vasilh = /** @class */ (function (_super) {
    __extends(R_Vasilh, _super);
    function R_Vasilh() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Vasilh.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Vasilh.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Vasilh.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Vasilh.prototype, "txtClienteProcura", {
        get: function () {
            return window['txtClienteProcura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Vasilh.prototype, "txtNota_Saida", {
        get: function () {
            return window['txtNota_Saida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Vasilh.prototype, "txtSerie", {
        get: function () {
            return window['txtSerie_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Vasilh.prototype, "lblCliente", {
        get: function () {
            return window['lblCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Vasilh.prototype, "lblClienteNome", {
        get: function () {
            return window['lblClienteNome_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Vasilh.prototype, "lblData_Saida", {
        get: function () {
            return window['lblData_Saida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Vasilh.prototype, "lblValor_Saida", {
        get: function () {
            return window['lblValor_Saida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Vasilh.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Vasilh.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtSerie) {
            adicionarEventoMoura(this.txtSerie.LostFocus, this.MudouTipo, this);
            adicionarEventoMoura(this.txtSerie.TextChanged, this.MudouTipo, this);
        }
        if (this.txtNota_Saida) {
            adicionarEventoMoura(this.txtNota_Saida.LostFocus, this.MudouTipo, this);
            adicionarEventoMoura(this.txtNota_Saida.TextChanged, this.MudouTipo, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.MudouTipo, this);
        }
        if (this.txtClienteProcura) {
            adicionarEventoMoura(this.txtClienteProcura.Procurou, this.MudouTipo, this);
        }
    };
    R_Vasilh.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_Vasilh.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        var Serie;
        var Nota;
        var Cliente;
        if (this.txtPeriodo.textBoxCalendarioInicio.GetDate() == null || this.txtPeriodo.textBoxCalendarioFim.GetDate() == null) {
            MostrarAlerta("Preenchimento incorreto: Data");
            return;
        }
        if (this.txtSerie.GetText() == "" || this.txtSerie.GetText().CNum() < 0) {
            Serie = 0;
        }
        else {
            Serie = this.txtSerie.GetText().CNum();
        }
        if (this.txtNota_Saida.GetText() == "" || this.txtNota_Saida.GetText().CNum() < 0) {
            Nota = 0;
        }
        else {
            Nota = this.txtNota_Saida.GetText().CNum();
        }
        if (this.txtClienteProcura.GetText().CNum() <= 0) {
            Cliente = 0;
        }
        else {
            Cliente = this.txtClienteProcura.GetText().CNum();
        }
        try {
            if (this.cboEmpresa.GetValue() > 0) {
                parametros = {
                    dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                    dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                    cliente: Cliente,
                    notaSaida: Nota,
                    serie: Serie,
                    empresa: this.cboEmpresa.GetValue()
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
                if (retorno.length > 0) {
                    this.Grid.PreencherGrid(retorno);
                }
                else {
                    this.Grid.PreencherGrid(null);
                }
            }
            else {
                MostrarAlerta("Preenchimento incorreto: Empresa");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Vasilh.prototype.MudouTipo = function () {
        var parametros;
        var result;
        try {
            if (this.txtSerie.GetText() == "" || this.txtSerie.GetText().CNum() < 0) {
                this.LimparLabels();
            }
            if (this.txtNota_Saida.GetText() == "" || this.txtNota_Saida.GetText().CNum() < 0) {
                this.LimparLabels();
            }
            if (this.cboEmpresa.GetValue() > 0) {
                if (this.txtNota_Saida.GetText().CNum() > 0 && this.txtSerie.GetText().CNum() > 0) {
                    parametros = {
                        nota: this.txtNota_Saida.GetText().CNum(),
                        serie: this.txtSerie.GetText().CNum(),
                        codCliente: 0,
                        empresa: this.cboEmpresa.GetValue()
                    };
                    result = this.ExecutarFuncaoServerSideSynch("GetbyCodigoNF", parametros);
                    if (result) {
                        if (this.txtClienteProcura.GetText().CNum() > 0) {
                            if (result.Fiscal.Codigo_Cliente != this.txtClienteProcura.GetText().CNum()) {
                                MostrarAlerta("Preenchimento Incorreto: Formulário não pertence ao Cliente informado!");
                                this.txtNota_Saida.SetText("");
                                this.txtSerie.SetText("");
                                this.MudouTipo();
                                return;
                            }
                        }
                        this.lblCliente.Text = result.Cliente;
                        this.lblClienteNome.Text = result.Nome;
                        this.lblValor_Saida.Text = result.Fiscal.Total_Nf.Format(2);
                        this.lblData_Saida.Text = result.Data_Emissao;
                    }
                    else {
                        MostrarAlerta("Nenhum Formulário encontrado para a Empresa selecionada!");
                        this.lblData_Saida.Text = "";
                        this.lblValor_Saida.Text = "";
                        this.lblClienteNome.Text = "";
                        this.lblCliente.Text = "";
                        this.txtNota_Saida.SetText("");
                        this.txtSerie.SetText("");
                    }
                }
            }
            else {
                MostrarAlerta("Preenchimento incorreto: Empresa");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Vasilh.prototype.LimparLabels = function () {
        this.lblData_Saida.Text = "";
        this.lblValor_Saida.Text = "";
        this.lblClienteNome.Text = "";
        this.lblCliente.Text = "";
    };
    R_Vasilh.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.lblData_Saida.Text = "";
        this.lblValor_Saida.Text = "";
        this.lblClienteNome.Text = "";
        this.lblCliente.Text = "";
        this.txtNota_Saida.SetText("");
        this.txtSerie.SetText("");
        this.txtClienteProcura.Limpar();
        this.Grid.PreencherGrid(null);
        this.txtPeriodo.Iniciar();
        this.txtClienteProcura.Focus();
    };
    return R_Vasilh;
}(MouraPageRelacaoAngular));
var r_Vasilh = new R_Vasilh();
//# sourceMappingURL=R_Vasilh.js.map