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
var C_ContGru = /** @class */ (function (_super) {
    __extends(C_ContGru, _super);
    function C_ContGru() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ContGru.prototype, "txtContaContabilGrupo_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaContabilGrupo_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContGru.prototype, "txtContaContabilCusto_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaContabilCusto_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContGru.prototype, "txtContaContabilEstoque_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaContabilEstoque_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContGru.prototype, "hdnPreencher", {
        get: function () {
            return $("#hdnPreencher")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContGru.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContGru.prototype, "txtContaContabilGrupo", {
        get: function () {
            return window['txtContaContabilGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContGru.prototype, "txtGrupo", {
        get: function () {
            return window['txtGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContGru.prototype, "txtContaContabilCusto", {
        get: function () {
            return window['txtContaContabilCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContGru.prototype, "txtContaContabilEstoque", {
        get: function () {
            return window['txtContaContabilEstoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContGru.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContGru.prototype, "txtHistoricoEntrada", {
        get: function () {
            return window['txtHistoricoEntrada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContGru.prototype, "txtHistoricoSaida", {
        get: function () {
            return window['txtHistoricoSaida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContGru.prototype, "txtHistoricoCusto", {
        get: function () {
            return window['txtHistoricoCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContGru.prototype, "chkDesconsiderarCusto", {
        get: function () {
            return window['chkDesconsiderarCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContGru.prototype, "btnGrupo", {
        get: function () {
            return window['btnGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContGru.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContGru.prototype, "GrdSub", {
        get: function () {
            return window['GrdSub_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContGru.prototype, "mdGrupo", {
        get: function () {
            return window['mdGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ContGru.prototype.Init = function () {
        _super.prototype.Init.call(this);
        var parametros = {};
        if (this.btnGrupo) {
            adicionarEventoMoura(this.btnGrupo.Click, this.OnClickGrupo, this);
        }
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouLinha, this);
        }
        if (this.GrdSub) {
            adicionarEventoMoura(this.GrdSub.SelecionouLinha, this.OnGrdSubSelecionouLinha, this);
        }
        if (this.txtGrupo) {
            adicionarEventoMoura(this.txtGrupo.Procurou, this.OnGrupoProcurou, this);
        }
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.Procurou, this.OnProcurou, this);
        }
        if (this.txtContaContabilGrupo) {
            adicionarEventoMoura(this.txtContaContabilGrupo.AntesAbrirProcura, this.OnContaContabilGrupoAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaContabilGrupo.PesquisandoContabil, this.OnContaContabilGrupoPesquisando, this);
        }
        if (this.txtContaContabilCusto) {
            adicionarEventoMoura(this.txtContaContabilCusto.AntesAbrirProcura, this.OnContaContabilCustoAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaContabilCusto.PesquisandoContabil, this.OnContaContabilCustoPesquisando, this);
        }
        if (this.txtContaContabilEstoque) {
            adicionarEventoMoura(this.txtContaContabilEstoque.AntesAbrirProcura, this.OnContaContabilEstoqueAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaContabilEstoque.PesquisandoContabil, this.OnContaContabilEstoquePesquisando, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.PreencherEmpresaContabil, this);
        }
        this.PreencherEmpresaContabil();
    };
    C_ContGru.prototype.OnGridSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_ContGru.prototype.OnGrupoProcurou = function () {
        if (this.txtGrupo.GetText().CNum() > 0 && this.cboEmpresa.GetValue() > 0) {
            var parametros = {
                codGrupo: this.txtGrupo.GetText().CNum(),
                codEmpresa: this.cboEmpresa.GetValue()
            };
            var grupo = this.ExecutarFuncaoServerSideSynch("GrupoCadastrado", parametros);
            if (grupo > 0) {
                this.PreencherEntidade(grupo);
            }
            else {
                var codEmpresa = this.cboEmpresa.GetValue();
                var codGrupo = this.txtGrupo.GetText();
                this.LimparCampos();
                this.EntityTela.Empresa = codEmpresa;
                this.txtGrupo.Procurar(codGrupo);
                this.GetCadastrados();
            }
        }
    };
    C_ContGru.prototype.LimparCampos = function () {
        this.chkDesconsiderarCusto.Checked = false;
        this.txtHistoricoCusto.Limpar();
        this.txtHistoricoSaida.Limpar();
        this.txtHistoricoEntrada.Limpar();
        this.txtContaContabilEstoque.Limpar();
        this.txtContaContabilGrupo.Limpar();
        this.txtContaContabilCusto.Limpar();
        this.txtCodigo.Limpar();
    };
    C_ContGru.prototype.OnGrdSubSelecionouLinha = function (s, e) {
        this.mdGrupo.Hide();
        var codEmpresa = this.cboEmpresa.GetValue();
        this.LimparCampos();
        this.EntityTela.Empresa = codEmpresa;
        this.txtGrupo.Procurar(e.rowKey);
        this.GetCadastrados();
    };
    C_ContGru.prototype.OnClickGrupo = function (s, e) {
        e.processOnServer = false;
        var parametros = {
            codEmpresa: this.cboEmpresa.GetValue()
        };
        var grupos = this.ExecutarFuncaoServerSideSynch("PreencherGradeGrupoSemConfiguracao", parametros);
        this.GrdSub.PreencherGrid(grupos);
        this.mdGrupo.Show();
    };
    C_ContGru.prototype.GetCadastrados = function () {
        var parametros;
        parametros = {
            codEmpresa: this.cboEmpresa.GetValue()
        };
        var cad = this.ExecutarFuncaoServerSideSynch("GetRegistrosCadastrados", parametros);
        this.Grid.PreencherGrid(cad);
    };
    C_ContGru.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.GetCadastrados();
        return true;
    };
    C_ContGru.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.GetCadastrados();
        return true;
    };
    C_ContGru.prototype.OnProcurou = function () {
        this.GetCadastrados();
    };
    C_ContGru.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.GetCadastrados();
        return true;
    };
    C_ContGru.prototype.PreencherEmpresaContabil = function () {
        this.GetCadastrados();
        this.OnGrupoProcurou();
        if (this.txtContaContabilGrupo_hdnEmpresaContabil != undefined) {
            this.txtContaContabilGrupo_hdnEmpresaContabil.value = this.cboEmpresa.GetValue();
        }
        if (this.txtContaContabilEstoque_hdnEmpresaContabil != undefined) {
            this.txtContaContabilEstoque_hdnEmpresaContabil.value = this.cboEmpresa.GetValue();
        }
        if (this.txtContaContabilCusto_hdnEmpresaContabil != undefined) {
            this.txtContaContabilCusto_hdnEmpresaContabil.value = this.cboEmpresa.GetValue();
        }
        if (this.txtContaContabilGrupo) {
            adicionarEventoMoura(this.txtContaContabilGrupo.AntesAbrirProcura, this.OnContaContabilGrupoAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaContabilGrupo.PesquisandoContabil, this.OnContaContabilGrupoPesquisando, this);
        }
        if (this.txtContaContabilCusto) {
            adicionarEventoMoura(this.txtContaContabilCusto.AntesAbrirProcura, this.OnContaContabilCustoAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaContabilCusto.PesquisandoContabil, this.OnContaContabilCustoPesquisando, this);
        }
        if (this.txtContaContabilEstoque) {
            adicionarEventoMoura(this.txtContaContabilEstoque.AntesAbrirProcura, this.OnContaContabilEstoqueAntesAbrirProcura, this);
            adicionarEventoMoura(this.txtContaContabilEstoque.PesquisandoContabil, this.OnContaContabilEstoquePesquisando, this);
        }
    };
    C_ContGru.prototype.OnContaContabilGrupoAntesAbrirProcura = function (s, ev) {
        this.txtContaContabilGrupo.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    C_ContGru.prototype.OnContaContabilGrupoPesquisando = function (s, ev) {
        this.txtContaContabilGrupo.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        parametros = {
            codigoContaContabil: this.txtContaContabilGrupo.TextBoxAdicional.value.CNum(),
            empresa: this.cboEmpresa.GetValue()
        };
        parametroReduzido = {
            reduzido: this.txtContaContabilGrupo.TextBoxAdicional.value.CNum(),
        };
        var parametroSintetica = {
            codigoContaContabil: this.txtContaContabilGrupo.TextBoxAdicional.value.CNum(),
        };
        if (this.txtContaContabilGrupo.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Contábil de Receita do Grupo não pertence a empresa selecionada!');
                    this.txtContaContabilGrupo.Limpar();
                    this.txtContaContabilGrupo.Focus();
                }
            }
            else if (this.ExecutarFuncaoServerSideSynch("IsContaSintetica", parametroSintetica)) {
                ev.Cancelar = true;
                MostrarAlerta('A conta contábil deve ser do tipo Analítica!');
                this.txtContaContabilGrupo.Limpar();
                this.txtContaContabilGrupo.Focus();
            }
        }
    };
    C_ContGru.prototype.OnContaContabilCustoAntesAbrirProcura = function (s, ev) {
        this.txtContaContabilCusto.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    C_ContGru.prototype.OnContaContabilEstoqueAntesAbrirProcura = function (s, ev) {
        this.txtContaContabilEstoque.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    C_ContGru.prototype.OnContaContabilCustoPesquisando = function (s, ev) {
        this.txtContaContabilCusto.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        parametros = {
            codigoContaContabil: this.txtContaContabilCusto.TextBoxAdicional.value.CNum(),
            empresa: this.cboEmpresa.GetValue()
        };
        parametroReduzido = {
            reduzido: this.txtContaContabilCusto.TextBoxAdicional.value.CNum(),
        };
        var parametroSintetica = {
            codigoContaContabil: this.txtContaContabilCusto.TextBoxAdicional.value.CNum(),
        };
        if (this.txtContaContabilCusto.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Contábil Custo não pertence a empresa selecionada!');
                    this.txtContaContabilCusto.Limpar();
                    this.txtContaContabilCusto.Focus();
                }
            }
            else if (this.ExecutarFuncaoServerSideSynch("IsContaSintetica", parametroSintetica)) {
                ev.Cancelar = true;
                MostrarAlerta('A conta contábil deve ser do tipo Analítica!');
                this.txtContaContabilCusto.Limpar();
                this.txtContaContabilCusto.Focus();
            }
        }
    };
    C_ContGru.prototype.OnContaContabilEstoquePesquisando = function (s, ev) {
        this.txtContaContabilEstoque.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        parametros = {
            codigoContaContabil: this.txtContaContabilEstoque.TextBoxAdicional.value.CNum(),
            empresa: this.cboEmpresa.GetValue()
        };
        parametroReduzido = {
            reduzido: this.txtContaContabilEstoque.TextBoxAdicional.value.CNum(),
        };
        var parametroSintetica = {
            codigoContaContabil: this.txtContaContabilEstoque.TextBoxAdicional.value.CNum(),
        };
        if (this.txtContaContabilEstoque.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Contábil Estoque não pertence a empresa selecionada!');
                    this.txtContaContabilEstoque.Limpar();
                    this.txtContaContabilEstoque.Focus();
                }
            }
            else if (this.ExecutarFuncaoServerSideSynch("IsContaSintetica", parametroSintetica)) {
                ev.Cancelar = true;
                MostrarAlerta('A conta contábil deve ser do tipo Analítica!');
                this.txtContaContabilEstoque.Limpar();
                this.txtContaContabilEstoque.Focus();
            }
        }
    };
    return C_ContGru;
}(MouraPageCadastroAngular));
var c_ContGru = new C_ContGru();
//# sourceMappingURL=C_ContGru.js.map