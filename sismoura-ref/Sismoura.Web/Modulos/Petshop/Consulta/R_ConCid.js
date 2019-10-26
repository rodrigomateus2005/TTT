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
var R_ConCid = /** @class */ (function (_super) {
    __extends(R_ConCid, _super);
    function R_ConCid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ConCid.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCid.prototype, "Grid", {
        get: function () {
            return window["Grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCid.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCid.prototype, "rdnTipo", {
        get: function () {
            return window['rdnTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCid.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCid.prototype, "accFiltro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCid.prototype, "txtCID", {
        get: function () {
            return window['txtCID_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCid.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCid.prototype, "txtProfissional", {
        get: function () {
            return window['txtProfissional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCid.prototype, "txtAssunto", {
        get: function () {
            return window['txtAssunto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCid.prototype, "lstGrupoCid", {
        get: function () {
            return window['lstGrupoCid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_ConCid.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.lstEmpresa.LimparSelecao();
        if (ValoresSismoura && ValoresSismoura.EmpresaPadraoUsuario > 0) {
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        }
        this.txtProfissional.Limpar();
        this.txtPeriodo.Iniciar();
        this.txtCID.Limpar();
        this.txtPet.Limpar();
        this.txtAssunto.Limpar();
        this.lstGrupoCid.LimparSelecao();
        if (this.accFiltro) {
            this.accFiltro.SetExpanded(true);
        }
        this.rdnTipo.SetValue("G");
        this.Grid.PreencherGrid(null);
    };
    R_ConCid.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_ConCid.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.lstGrupoCid.SelectionChanged, this.OnGrupoCidChange, this);
        adicionarEventoMoura(this.txtCID.Procurou, this.OntxtCIDProcurou, this);
    };
    R_ConCid.prototype.OntxtCIDProcurou = function () {
        var validar;
        var parametros = {
            cid: this.txtCID.GetText().CNum(),
            arrGruposCid: this.lstGrupoCid.GetValuesRelacao()
        };
        validar = this.ExecutarFuncaoServerSideSynch("validarCid", parametros);
        if (!validar) {
            MostrarAlerta("Este CID não pertence a nenhum grupo selecionado");
            this.txtCID.Limpar();
            return;
        }
    };
    R_ConCid.prototype.OnGrupoCidChange = function () {
        this.txtCID.LimparParametros();
        this.txtCID.Limpar();
        var parametros = {
            arrGruposCid: this.lstGrupoCid.GetValuesRelacao()
        };
        var grupos = this.ExecutarFuncaoServerSideSynch("gruposSelecionados", parametros);
        this.txtCID.AddParametro("grupos", grupos);
    };
    R_ConCid.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        this.GerarGrade();
        if (this.accFiltro) {
            this.accFiltro.SetExpanded(false);
        }
    };
    R_ConCid.prototype.GerarGrade = function () {
        var _this = this;
        var empresas = this.lstEmpresa.GetValuesRelacao();
        var grupos = this.lstGrupoCid.GetValuesRelacao();
        try {
            var parametros = {
                arrEmpresas: empresas,
                arrGruposCid: grupos,
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                codProfissional: this.txtProfissional.GetText().CNum(),
                codCliente: this.txtPet.TextBoxProprietario.GetText().CNum(),
                codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum(),
                codCID: this.txtCID.GetText().CNum(),
                codAssunto: this.txtAssunto.GetText().CNum(),
                agrupamento: this.rdnTipo.GetValue()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("RelacaoConsultasCid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    fecharEspera();
                    _this.Grid.Grid.columnOption(0, "groupIndex", null);
                    _this.Grid.Grid.columnOption(1, "groupIndex", null);
                    _this.Grid.Grid.columnOption(0, "groupIndex", null);
                    _this.Grid.Grid.columnOption(1, "groupIndex", null);
                    _this.Grid.PreencherGrid(retorno);
                    _this.Grid.LimparFiltros();
                    if (_this.rdnTipo.GetValue() && _this.rdnTipo.GetValue() == "G") {
                        _this.Grid.GroupBy("Grupo");
                    }
                    else {
                        _this.Grid.GroupBy("CID");
                        _this.Grid.GroupBy("Grupo");
                    }
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_ConCid;
}(MouraPageRelacaoAngular));
var r_ConCid = new R_ConCid();
//# sourceMappingURL=R_ConCid.js.map