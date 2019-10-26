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
var C_RegImp_Angular = /** @class */ (function (_super) {
    __extends(C_RegImp_Angular, _super);
    function C_RegImp_Angular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_RegImp_Angular.prototype, "Contador", {
        get: function () {
            var that = this.GetScope()["Contador"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Contador"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "Contadores", {
        get: function () {
            return this.GetScope()["Contadores"];
        },
        set: function (value) {
            this.GetScope()["Contadores"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboExigibilidade", {
        get: function () {
            return window['cboExigibilidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "txtDecreto", {
        get: function () {
            return window['cboExigibilidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "txtGrupo_Fiscal", {
        get: function () {
            return window['txtGrupo_Fiscal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "txtTipoRegra", {
        get: function () {
            return window['txtTipoRegra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboCalculo_PIS", {
        get: function () {
            return window['cboCalculo_PIS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboST_PIS", {
        get: function () {
            return window['cboST_PIS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboST_PIS_Entrada", {
        get: function () {
            return window['cboST_PIS_Entrada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboCalculo_COFINS", {
        get: function () {
            return window['cboCalculo_COFINS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboST_COFINS", {
        get: function () {
            return window['cboST_COFINS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboST_COFINS_Entrada", {
        get: function () {
            return window['cboST_COFINS_Entrada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboCalculo_IPI", {
        get: function () {
            return window['cboCalculo_IPI_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboCalculo_Ipi_Saida", {
        get: function () {
            return window['cboCalculo_Ipi_Saida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboST_IPI", {
        get: function () {
            return window['cboST_IPI_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboSt_IPI_Saida", {
        get: function () {
            return window['cboSt_IPI_Saida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "chkSemCalIPI", {
        get: function () {
            return window['chkSemCalIPI_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboIncentivo", {
        get: function () {
            return window['cboIncentivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboCfopServico", {
        get: function () {
            return window['cboCfopServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboListaServico", {
        get: function () {
            return window['cboListaServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "chkISS_Retido", {
        get: function () {
            return window['chkISS_Retido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "txtDescricaoServico", {
        get: function () {
            return window['txtDescricaoServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboUF_Entrada", {
        get: function () {
            return window['cboUF_Entrada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "txtTaxaTributaria", {
        get: function () {
            return window['txtTaxaTributaria_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboModalidade_ST", {
        get: function () {
            return window['cboModalidade_ST_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboCFOP", {
        get: function () {
            return window['cboCFOP_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboCFOPEn", {
        get: function () {
            return window['cboCFOPEn_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboCfopEntradaDevolucao", {
        get: function () {
            return window['cboCfopEntradaDevolucao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboCSOSN", {
        get: function () {
            return window['cboCSOSN_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboCSTEn", {
        get: function () {
            return window['cboCSTEn_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboSituacao", {
        get: function () {
            return window['cboSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "cboUF_Saida", {
        get: function () {
            return window['cboUF_Saida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "chkSubstituicao_IVA", {
        get: function () {
            return window['chkSubstituicao_IVA_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "txtCodigoICMS", {
        get: function () {
            return window['txtCodigoICMS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "hdContador", {
        get: function () {
            return $('#hdContador')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RegImp_Angular.prototype, "tabCadastro", {
        get: function () {
            return window['tabCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_RegImp_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCamposEntidade(false, true);
    };
    C_RegImp_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.Validando, this.OnValidando, this);
        }
        if (this.txtTipoRegra) {
            adicionarEventoMoura(this.txtTipoRegra.Procurou, this.OnTipoRegraProcurou, this);
        }
        if (this.txtGrupo_Fiscal) {
            adicionarEventoMoura(this.txtGrupo_Fiscal.Procurou, this.OnGrupoFiscalProcurou, this);
        }
        if (this.txtCodigoICMS) {
            adicionarEventoMoura(this.txtCodigoICMS.LostFocus, this.OnCodigoICMSProcurou, this);
        }
        if (this.cboUF_Entrada) {
            adicionarEventoMoura(this.cboUF_Entrada.SelectedItemChanged, this.OnUF_EntradaMudou, this);
        }
        if (this.cboST_PIS_Entrada) {
            adicionarEventoMoura(this.cboST_PIS_Entrada.SelectedItemChanged, this.OnST_PIS_EntradaMudou, this);
        }
        if (this.cboST_PIS) {
            adicionarEventoMoura(this.cboST_PIS.SelectedItemChanged, this.OnST_PISMudou, this);
        }
        if (this.cboST_COFINS) {
            adicionarEventoMoura(this.cboST_COFINS.SelectedItemChanged, this.OnST_COFINSMudou, this);
        }
        if (this.cboST_COFINS_Entrada) {
            adicionarEventoMoura(this.cboST_COFINS_Entrada.SelectedItemChanged, this.OnST_COFINS_EntradaMudou, this);
        }
    };
    C_RegImp_Angular.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.OnTipoRegraProcurou();
        return true;
    };
    C_RegImp_Angular.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        for (var x = 0; x < this.Contadores.length; x++) {
            this.Contadores[x].Calcular_St_Iva = (this.Contadores[x].Calcular_St_Iva == "S") ? true : false;
        }
        this.EntityTela.Grupo_Fiscal_Cliente = this.txtGrupo_Fiscal.GetText().CNum();
        this.EntityTela.Tipo_Regra_Imposto = this.txtTipoRegra.GetText().CNum();
        var parametros;
        parametros = {};
        var retorno = this.ExecutarFuncaoServerSideSynch("ConfigIMENDES", parametros);
        if (retorno) {
            if (retorno.resposta == "True") {
                if (this.Gravar() == false) {
                    return false;
                }
                return true;
            }
            else {
                MostrarAlerta(retorno.resposta);
            }
        }
        return false;
    };
    C_RegImp_Angular.prototype.OnAntesDeletar = function () {
        _super.prototype.OnAntesDeletar.call(this);
        var retorno = this.ExcluirRegistro();
        if (retorno) {
            return true;
        }
        return false;
    };
    C_RegImp_Angular.prototype.Gravar = function () {
        if (this.txtTipoRegra.GetText().CNum() > 0) {
            var parametros;
            parametros = {
                Codigo: this.txtTipoRegra.GetText().CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("OnGravar", parametros);
            if (retorno) {
                if (retorno.Tipo = "ICMS") {
                    if (this.Contadores.length <= 0) {
                        MostrarAlerta("Configure os impostos de ICMS");
                        return false;
                    }
                }
            }
            return true;
        }
        return false;
    };
    C_RegImp_Angular.prototype.Gravar_Regra_ICMS = function () {
        var parametros;
        parametros = {
            entidade: this.Contadores,
            Tela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("OnGravar_Regra_ICMS", parametros);
        if (retorno) {
            return true;
        }
    };
    C_RegImp_Angular.prototype.OnST_COFINS_EntradaMudou = function () {
        this.Limpar_Campos_ST();
        this.cboST_PIS_Entrada.SetSelectedIndex(this.cboST_COFINS_Entrada.GetSelectedIndex());
        if (this.cboST_COFINS_Entrada.GetSelectedIndex() >= 0) {
            this.VerificaBase(this.cboST_COFINS_Entrada.GetValue());
        }
    };
    C_RegImp_Angular.prototype.OnST_COFINSMudou = function () {
        this.Limpar_Campos_ST();
        this.cboST_PIS.SetSelectedIndex(this.cboST_COFINS.GetSelectedIndex());
        if (this.cboST_COFINS.GetSelectedIndex() >= 0) {
            this.VerificaBase(this.cboST_COFINS.GetValue());
        }
    };
    C_RegImp_Angular.prototype.OnST_PISMudou = function () {
        this.Limpar_Campos_ST();
        this.cboST_COFINS.SetSelectedIndex(this.cboST_PIS.GetSelectedIndex());
        if (this.cboST_PIS.GetSelectedIndex() >= 0) {
            this.VerificaBase(this.cboST_PIS.GetValue());
        }
    };
    C_RegImp_Angular.prototype.OnST_PIS_EntradaMudou = function () {
        this.Limpar_Campos_ST();
        this.cboST_COFINS_Entrada.SetSelectedIndex(this.cboST_PIS_Entrada.GetSelectedIndex());
        if (this.cboST_PIS_Entrada.GetSelectedIndex() >= 0) {
            this.VerificaBase(this.cboST_PIS_Entrada.GetValue());
        }
    };
    C_RegImp_Angular.prototype.VerificaBase = function (cst) {
        var parametros;
        parametros = {};
        var retorno = this.ExecutarFuncaoServerSideSynch("VerificaBase", parametros);
        var regime_tributario;
        if (retorno) {
            regime_tributario = retorno.Reg_Trib;
        }
        if (cst = 1) {
            if (regime_tributario == 0) {
                if (this.EntityTela.Base_Pis == undefined || this.EntityTela.Base_Pis == 0) {
                    this.EntityTela.Base_Pis = 100.00;
                }
                if (this.EntityTela.Aliquota_Pis_P == undefined || this.EntityTela.Aliquota_Pis_P == 0) {
                    this.EntityTela.Aliquota_Pis_P = 0.65;
                }
                if (this.EntityTela.Base_Cofins == undefined || this.EntityTela.Base_Cofins == 0) {
                    this.EntityTela.Base_Cofins = 100.00;
                }
                if (this.EntityTela.Aliquota_Cofins_P == undefined || this.EntityTela.Aliquota_Cofins_P == 0) {
                    this.EntityTela.Aliquota_Cofins_P = 3.00;
                }
            }
            else if (regime_tributario == 1) {
                if (this.EntityTela.Base_Pis == undefined || this.EntityTela.Base_Pis == 0) {
                    this.EntityTela.Base_Pis = 100.00;
                }
                if (this.EntityTela.Aliquota_Pis_P == undefined || this.EntityTela.Aliquota_Pis_P == 0) {
                    this.EntityTela.Aliquota_Pis_P = 1.65;
                }
                if (this.EntityTela.Base_Cofins == undefined || this.EntityTela.Base_Cofins == 0) {
                    this.EntityTela.Base_Cofins = 100.00;
                }
                if (this.EntityTela.Aliquota_Cofins_P == undefined || this.EntityTela.Aliquota_Cofins_P == 0) {
                    this.EntityTela.Aliquota_Cofins_P = 7.60;
                }
            }
        }
        if (cst == 50) {
            if (regime_tributario == 0) {
                this.EntityTela.Base_Pis_Entrada = 100.00;
                this.EntityTela.Aliquota_Pis_Entrada = 0.65;
                this.EntityTela.Base_Cofins_Entrada = 100.00;
                this.EntityTela.Aliquota_Cofins_Entrada = 3.00;
            }
            else if (regime_tributario == 1) {
                this.EntityTela.Base_Pis_Entrada = 100.00;
                this.EntityTela.Aliquota_Pis_Entrada = 1.65;
                this.EntityTela.Base_Cofins_Entrada = 100.00;
                this.EntityTela.Aliquota_Cofins_Entrada = 7.60;
            }
        }
        else if (cst > 49) {
            this.EntityTela.Base_Pis_Entrada = undefined;
            this.EntityTela.Aliquota_Pis_Entrada = undefined;
            this.EntityTela.Base_Cofins_Entrada = undefined;
            this.EntityTela.Aliquota_Cofins_Entrada = undefined;
        }
        this.RefreshAngular();
    };
    C_RegImp_Angular.prototype.Limpar_Campos_ST = function () {
        this.EntityTela.Aliquota_Cofins_R = undefined;
        this.EntityTela.Aliquota_Pis_P = undefined;
        this.EntityTela.Aliquota_Pis_R = undefined;
        this.RefreshAngular();
    };
    C_RegImp_Angular.prototype.OnUF_EntradaMudou = function () {
        var grupoFiscal;
        var itens = this.grid.Grid.DataSource;
        if (this.txtGrupo_Fiscal.GetText().CNum() == undefined) {
            grupoFiscal = "0";
        }
        else {
            grupoFiscal = this.txtGrupo_Fiscal.GetText().CNum() + "";
        }
        if (!itens) {
            itens = [];
        }
        for (var x = 0; x < itens.length; x++) {
            if (itens[x].Uf_Destino == this.cboUF_Entrada.GetValue() && itens[x].Uf_Origem == this.cboUF_Saida.GetValue()
                && itens[x].Grupo_Fiscal_Cliente == grupoFiscal) {
                if (this.Contador.Codigo != undefined) {
                    this.LimparAbaICMS();
                }
                this.PreencherAbaICMS(0, itens[x].Contador);
            }
        }
    };
    C_RegImp_Angular.prototype.OnTipoRegraProcurou = function () {
        this.PreencherTela();
        if (this.txtTipoRegra.GetText().CNum() > 0) {
            var parametros;
            parametros = {
                Codigo: this.txtTipoRegra.GetText().CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ObterPorTipoRegra", parametros);
            if (retorno) {
                if (retorno.Tipo == "ISSQN") {
                    this.tabCadastro.AlterarVisibleAba("AbaICMS", false);
                    this.tabCadastro.AlterarVisibleAba("AbaIPI", false);
                    this.tabCadastro.AlterarVisibleAba("AbaISSQN", true);
                    this.tabCadastro.AlterarVisibleAba("AbaPIS", true);
                    this.tabCadastro.SetActiveTabIndex("AbaISSQN".CNum());
                }
                else if (retorno.Tipo = "ICMS") {
                    this.tabCadastro.AlterarVisibleAba("AbaICMS", true);
                    this.tabCadastro.AlterarVisibleAba("AbaIPI", true);
                    this.tabCadastro.AlterarVisibleAba("AbaISSQN", false);
                    this.tabCadastro.AlterarVisibleAba("AbaPIS", true);
                    this.tabCadastro.SetActiveTabIndex("AbaICMS".CNum());
                }
            }
            this.txtGrupo_Fiscal.Focus();
        }
        else {
            this.LimparCamposEntidade(true, true);
        }
    };
    C_RegImp_Angular.prototype.OnCodigoICMSProcurou = function () {
        this.PreencherAbaICMS(this.Contador.Codigo, 0);
    };
    C_RegImp_Angular.prototype.PreencherAbaICMS = function (codigo, contador) {
        var itens = this.grid.Grid.DataSource;
        var mensagem;
        var parametros;
        if (!itens) {
            itens = [];
        }
        for (var x = 0; x < itens.length; x++) {
            if (contador > 0) {
                if (itens[x].Contador == contador) {
                    this.grid.Selecionar(x);
                    this.cboUF_Entrada.SetValue(this.Contadores[x].Uf_Destino);
                }
            }
            else if (codigo > 0) {
                if (itens[x].Codigo == codigo) {
                    this.grid.Selecionar(x);
                    this.cboUF_Entrada.SetValue(this.Contadores[x].Uf_Destino);
                }
            }
        }
    };
    C_RegImp_Angular.prototype.OnGrupoFiscalProcurou = function () {
        if (this.EntityTela.Tipo_Regra_Imposto > 0) {
            this.PreencherTela();
            this.txtDecreto.Focus();
        }
        else {
            this.LimparCamposEntidade(false, false);
            this.txtGrupo_Fiscal.Focus();
        }
    };
    C_RegImp_Angular.prototype.PreencherTela = function () {
        var grupo;
        var retorno;
        retorno = {};
        if (this.txtTipoRegra.GetText().CNum() > 0) {
            if (this.txtGrupo_Fiscal.GetText().CNum() <= 0) {
                grupo = "0";
            }
            else {
                grupo = this.txtGrupo_Fiscal.GetText();
            }
            var parametros;
            parametros = {
                Codigo: this.txtTipoRegra.GetText().CNum(),
                Grupo: grupo
            };
            retorno = this.ExecutarFuncaoServerSideSynch("PreencherTela", parametros);
            if (retorno) {
                parametros = {
                    codServico: retorno.Cod_Servico_Iss
                };
                var Descricao = this.ExecutarFuncaoServerSideSynch("PreencherDescricaoServicoIss", parametros);
                this.txtDescricaoServico.SetText(Descricao);
            }
            this.PreencherDadosGrid(this.txtTipoRegra.GetText().CNum(), grupo);
        }
        this.SetEntity(retorno);
    };
    C_RegImp_Angular.prototype.PreencherDadosGrid = function (Codigo, Grupo) {
        var parametros;
        parametros = {
            Codigo: Codigo,
            Grupo: Grupo
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("PreencherDadosGrid", parametros);
        if (retorno) {
            var contador = 0;
            for (var x = 0; x < retorno.Grid.length; x++) {
                retorno.Grid[x].Calcular_St_Iva = (retorno.Grid[x].Calcular_St_Iva == true) ? "S" : "N";
                retorno.Grid[x].Contador = x + 1;
            }
            this.Contadores = retorno.Grid;
            this.RefreshAngular();
        }
    };
    C_RegImp_Angular.prototype.ExcluirRegistro = function () {
        var parametros;
        parametros = {};
        var retorno = this.ExecutarFuncaoServerSideSynch("ConfigIMENDES", parametros);
        if (retorno.resposta == "True") {
            return true;
        }
        else {
            MostrarAlerta(retorno.resposta);
        }
        return false;
    };
    C_RegImp_Angular.prototype.OnValidando = function (s, e) {
        try {
            var x;
            var Cst;
            var itens = this.grid.Grid.DataSource;
            var mensagem;
            var parametros;
            if (!itens) {
                itens = [];
            }
            if (!this.txtTipoRegra.GetText().CNum()) {
                MostrarAlerta("Tipo de Regra de Imposto");
                e.cancelar = true;
                this.txtTipoRegra.Focus();
                return;
            }
            if (this.txtTaxaTributaria.Visible == true) {
                if (e.item.Codigo_Taxa <= 0) {
                    MostrarAlerta("Taxa Tributária");
                    e.cancelar = true;
                    this.txtTaxaTributaria.Focus();
                    return;
                }
            }
            e.item.Uf_Origem = this.cboUF_Saida.GetValue();
            if (!e.item.Uf_Origem) {
                MostrarAlerta("Preencha o campo corretamente: UF Origem");
                e.cancelar = true;
                return;
            }
            if (e.item.Cst) {
                parametros = {
                    CST: e.item.Cst,
                    Origem: e.item.Uf_Origem
                };
                var Cst = this.ExecutarFuncaoServerSideSynch("GetByCst", parametros);
                if (Cst) {
                    if (!Cst.Regra_ICMS_Calcular_ICMS) {
                        mensagem = false;
                        if (e.item.Base_Icms) {
                            if (e.item.Base_Icms > 0) {
                                mensagem = true;
                            }
                        }
                        if (e.item.Aliquota_Icms) {
                            if (e.item.Aliquota_Icms > 0) {
                                mensagem = true;
                            }
                        }
                        if (e.item.Aliquota_Interna_ICMS) {
                            if (e.item.Aliquota_Interna_ICMS > 0) {
                                mensagem = true;
                            }
                        }
                        if (e.item.Aliquota_FCP) {
                            if (e.item.Aliquota_FCP > 0) {
                                mensagem = true;
                            }
                        }
                        if (mensagem) {
                            MostrarAlerta("Os campos do ICMS não podem ser preenchidos com o CST selecionado");
                            e.cancelar = true;
                            return;
                        }
                    }
                    if (e.item.Cst == "000" || e.item.Cst == "020") {
                        if (e.item.Base_Icms == 0) {
                            MostrarAlerta("A Base de Cálculo do ICMS é obrigatória para o CST selecionado!");
                            e.cancelar = true;
                            return;
                        }
                        if (e.item.Aliquota_Icms == 0) {
                            MostrarAlerta("A Alíquota de ICMS é obrigatória para o CST selecionado!");
                            e.cancelar = true;
                            return;
                        }
                        if (e.item.Codigo_Taxa == undefined && this.txtTaxaTributaria.Visible == true) {
                            MostrarAlerta("A Taxa Tributária é obrigatória para o CST selecionado!");
                            e.cancelar = true;
                            return;
                        }
                    }
                    if (!Cst.Regra_ICMS_ST_Calcular_ICMS) {
                        mensagem = false;
                        if (!e.item.Base_Icms_St) {
                            if (e.item.Base_Icms_St > 0) {
                                mensagem = true;
                            }
                        }
                        if (e.item.Aliquota_Icms_St) {
                            if (e.item.Aliquota_Icms_St > 0) {
                                mensagem = true;
                            }
                        }
                        if (e.item.Calcular_ST_IVA == true) {
                            mensagem = true;
                        }
                        if (e.item.IVA != undefined) {
                            if (e.item.IVA > 0) {
                                mensagem = true;
                            }
                        }
                        if (mensagem) {
                            MostrarAlerta("Os campos do ICMS ST não podem ser preenchidos com o CST selecionado");
                            e.cancelar = true;
                            return;
                        }
                    }
                }
            }
            if (e.item.Csosn) {
                parametros = {
                    CSOSN: e.item.Csosn
                };
                var Csosn = this.ExecutarFuncaoServerSideSynch("GetByCSOSN", parametros);
                if (Csosn) {
                    if ((!Csosn.Regra_ICMS_ST_Calcular_ICMS) || (!Csosn.Regra_ICMS_ST_Permitir_Reducao)) {
                        mensagem = false;
                        if (e.item.Base_Icms) {
                            if (e.item.Base_Icms > 0) {
                                mensagem = true;
                            }
                            if (e.item.Base_Icms) {
                                if (e.item.Base_Icms > 0) {
                                    mensagem = true;
                                }
                            }
                            if (e.item.Aliquota_Icms) {
                                if (e.item.Aliquota_Icms > 0) {
                                    mensagem = true;
                                }
                            }
                            if (e.item.Aliquota_Interna_ICMS) {
                                if (e.item.Aliquota_Interna_ICMS > 0) {
                                    mensagem = true;
                                }
                            }
                            if (e.item.Aliquota_FCP) {
                                if (e.item.Aliquota_FCP > 0) {
                                    mensagem = true;
                                }
                            }
                            if (mensagem) {
                                MostrarAlerta("Os campos do ICMS não podem ser preenchidos com o CSOSN selecionado");
                                e.cancelar = true;
                                return;
                            }
                        }
                    }
                    if (!Csosn.Regra_ICMS_ST_Calcular_ICMS) {
                        if (e.item.Base_Icms_St) {
                            if (e.item.Base_Icms_St > 0) {
                                mensagem = true;
                            }
                        }
                        if (e.item.Aliquota_Icms_St) {
                            if (e.item.Aliquota_Icms_St > 0) {
                            }
                        }
                        if (e.item.Calcular_ST_IVA == 1) {
                            mensagem = true;
                        }
                        if (e.item.IVA) {
                            if (e.item.IVA > 0) {
                                mensagem = true;
                            }
                        }
                        if (mensagem) {
                            MostrarAlerta("Os campos do ICMS ST não podem ser preenchidos com o CSOSN selecionado");
                            e.cancelar = true;
                            return;
                        }
                    }
                }
            }
            var contador = 0;
            if (this.Contadores.length > 0) {
                for (var y = 0; y < this.Contadores.length; y++) {
                    if (contador < this.Contadores[y].Contador) {
                        contador = this.Contadores[y].Contador;
                    }
                }
                e.item.Contador = contador + 1;
            }
            else {
                e.item.Contador = 1;
            }
            if (this.chkSubstituicao_IVA.Checked) {
                e.item.Calcular_ST_IVA = "S";
            }
            else {
                e.item.Calcular_ST_IVA = "N";
            }
            this.LimparAbaICMS();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_RegImp_Angular.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.LimparCamposEntidade(true, true);
        return true;
    };
    C_RegImp_Angular.prototype.LimparCamposEntidade = function (limparCampoCodigo, alterarVisibiliadeAbas) {
        this.cboExigibilidade.SetSelectedIndex(0);
        this.grid.Grid.PreencherGrid(null);
        if (alterarVisibiliadeAbas) {
            this.tabCadastro.AlterarVisibleAba("AbaICMS", true);
            this.tabCadastro.AlterarVisibleAba("AbaIPI", true);
            this.tabCadastro.AlterarVisibleAba("AbaISSQN", true);
            this.tabCadastro.AlterarVisibleAba("AbaPIS", true);
            this.tabCadastro.SetActiveTabIndex("AbaICMS".CNum());
        }
        if (limparCampoCodigo) {
            this.txtGrupo_Fiscal.Limpar();
            this.txtTipoRegra.Limpar();
        }
        this.cboCalculo_PIS.SetValue("P");
        this.cboST_PIS.SetSelectedIndex(-1);
        this.cboST_PIS_Entrada.SetSelectedIndex(-1);
        this.cboCalculo_COFINS.SetValue("P");
        this.cboST_COFINS.SetSelectedIndex(-1);
        this.cboST_COFINS_Entrada.SetSelectedIndex(-1);
        //'ABA ICMS
        this.Contador = {};
        this.LimparAbaICMS();
        //'ABA IPI
        this.cboCalculo_IPI.SetValue("P");
        this.cboCalculo_Ipi_Saida.SetValue("P");
        this.cboCalculo_IPI.SetSelectedIndex(0);
        this.cboCalculo_Ipi_Saida.SetSelectedIndex(0);
        this.cboST_IPI.SetSelectedIndex(-1);
        this.cboSt_IPI_Saida.SetSelectedIndex(-1);
        this.chkSemCalIPI.Checked = false;
        //'ABA SERVIÇO          
        this.cboListaServico.SetSelectedIndex(-1);
        this.cboIncentivo.SetSelectedIndex(0);
        this.cboCfopServico.SetSelectedIndex(-1);
        this.txtDescricaoServico.SetText("");
        this.chkISS_Retido.Checked = false;
        this.txtTipoRegra.Focus();
    };
    C_RegImp_Angular.prototype.LimparAbaICMS = function () {
        this.cboModalidade_ST.SetValue("4");
        this.cboCFOP.SetSelectedIndex(-1);
        this.cboCFOPEn.SetSelectedIndex(-1);
        this.cboCfopEntradaDevolucao.SetSelectedIndex(-1);
        this.cboCSOSN.SetSelectedIndex(-1);
        this.cboCSTEn.SetSelectedIndex(-1);
        this.cboSituacao.SetSelectedIndex(-1);
        this.cboUF_Entrada.SetSelectedIndex(-1);
        this.chkSubstituicao_IVA.Checked = false;
        var parametros;
        parametros = {};
        var retorno = this.ExecutarFuncaoServerSideSynch("VerificaBase", parametros);
        if (retorno) {
            parametros = {
                codCidade: retorno.Cidade
            };
            var resultado = this.ExecutarFuncaoServerSideSynch("VerificaCidade", parametros);
            if (resultado) {
                this.cboUF_Saida.SetValue(resultado.Estado);
            }
        }
        parametros = {};
        var CSOSN = this.ExecutarFuncaoServerSideSynch("GetEmpresaSimples", parametros);
        if (!CSOSN) {
            this.cboCSOSN.Visible = false;
        }
        else {
            this.cboCSOSN.Visible = true;
        }
        parametros = {};
        var CSN = this.ExecutarFuncaoServerSideSynch("GetEmpresaNormal", parametros);
        if (!CSN) {
            this.cboSituacao.Visible = false;
        }
        else {
            this.cboSituacao.Visible = true;
        }
    };
    return C_RegImp_Angular;
}(MouraPageCadastroAngular));
var c_RegImp_Angular = new C_RegImp_Angular();
//# sourceMappingURL=C_RegImp_Angular.js.map