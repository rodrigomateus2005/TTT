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
var C_SalIni = /** @class */ (function (_super) {
    __extends(C_SalIni, _super);
    function C_SalIni() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_SalIni.prototype, "txtContraPartidaPassivo_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContraPartidaPassivo_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalIni.prototype, "txtContraPartidaAtivo_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContraPartidaAtivo_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalIni.prototype, "Entity", {
        get: function () {
            if (!this.GetScope()["Entity"]) {
                this.GetScope()["Entity"] = {};
            }
            return this.GetScope()["Entity"];
        },
        set: function (value) {
            this.GetScope()["Entity"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalIni.prototype, "Ativos", {
        get: function () {
            if (!this.GetScope()["Ativos"]) {
                return [];
            }
            else {
                return this.GetScope()["Ativos"];
            }
        },
        set: function (value) {
            this.GetScope()["Ativos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalIni.prototype, "Passivos", {
        get: function () {
            if (!this.GetScope()["Passivos"]) {
                return [];
            }
            else {
                return this.GetScope()["Passivos"];
            }
        },
        set: function (value) {
            this.GetScope()["Passivos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalIni.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalIni.prototype, "txtContraPartidaPassivo", {
        get: function () {
            return window['txtContraPartidaPassivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalIni.prototype, "txtContraPartidaAtivo", {
        get: function () {
            return window['txtContraPartidaAtivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalIni.prototype, "txtDataLancamento", {
        get: function () {
            return window['txtDataLancamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalIni.prototype, "txtHistoricoAtivo", {
        get: function () {
            return window['txtHistoricoAtivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalIni.prototype, "txtHistoricoPassivo", {
        get: function () {
            return window['txtHistoricoPassivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalIni.prototype, "grdAtivo", {
        get: function () {
            return window['grdAtivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalIni.prototype, "grdPassivo", {
        get: function () {
            return window['grdPassivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalIni.prototype, "btnCadastrar", {
        get: function () {
            return window['btnCadastrar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalIni.prototype, "lblAtivo", {
        get: function () {
            return window['lblAtivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalIni.prototype, "lblPassivo", {
        get: function () {
            return window['lblPassivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_SalIni.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtContraPartidaPassivo) {
            adicionarEventoMoura(this.txtContraPartidaPassivo.AntesAbrirProcura, this.OnContraPartidaPassivoAntesAbrirProcura, this);
        }
        if (this.txtContraPartidaPassivo) {
            adicionarEventoMoura(this.txtContraPartidaPassivo.PesquisandoContabil, this.OnContraPartidaPassivoPesquisando, this);
        }
        if (this.txtContraPartidaAtivo) {
            adicionarEventoMoura(this.txtContraPartidaAtivo.AntesAbrirProcura, this.OnContraPartidaAtivoAntesAbrirProcura, this);
        }
        if (this.txtContraPartidaAtivo) {
            adicionarEventoMoura(this.txtContraPartidaAtivo.PesquisandoContabil, this.OnContraPartidaAtivoPesquisando, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.PreencherEmpresaContabil, this);
        }
        if (this.btnCadastrar) {
            adicionarEventoMoura(this.btnCadastrar.Click, this.OnClickGravar, this);
        }
        if (this.grdAtivo) {
            adicionarEventoMoura(this.grdAtivo.ItemAlterado, this.OnEditouItemAtivo, this);
        }
        if (this.grdPassivo) {
            adicionarEventoMoura(this.grdPassivo.ItemAlterado, this.OnEditouItemPassivo, this);
        }
        this.PreencherEmpresaContabil();
    };
    C_SalIni.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrades();
        //this.PreencherEmpresaContabil();
        this.CalcularLabels();
    };
    C_SalIni.prototype.OnEditouItemAtivo = function (s, e) {
        if (e.item.Valor_Debito > 0 && e.item.Valor_Credito > 0) {
            e.item.Valor_Debito = 0;
            e.item.Valor_Credito = 0;
            MostrarAlerta("Informar valores apenas de débito ou crédito");
            return;
        }
        else if (e.item.Valor_Debito < 0 && e.item.Valor_Credito < 0) {
            e.item.Valor_Debito = 0;
            e.item.Valor_Credito = 0;
            MostrarAlerta("Informar valores apenas de débito ou crédito");
            return;
        }
        this.CalcularLabels();
    };
    C_SalIni.prototype.CalcularLabels = function () {
        var credAtv = this.Ativos.Sum("Valor_Credito").Format(2);
        var debAtv = this.Ativos.Sum("Valor_Debito").Format(2);
        var credPas = this.Passivos.Sum("Valor_Credito").Format(2);
        var debPas = this.Passivos.Sum("Valor_Debito").Format(2);
        var totalAtv = debAtv.CNum() - credAtv.CNum();
        var totalPas = debPas.CNum() - credPas.CNum();
        if (totalAtv < 0) {
            totalAtv = totalAtv * (-1);
        }
        if (totalPas < 0) {
            totalPas = totalPas * (-1);
        }
        this.lblAtivo.Text = (totalAtv).Format(2);
        this.lblPassivo.Text = (totalPas).Format(2);
    };
    C_SalIni.prototype.OnEditouItemPassivo = function (s, e) {
        if (e.item.Valor_Debito > 0 && e.item.Valor_Credito > 0) {
            e.item.Valor_Debito = 0;
            e.item.Valor_Credito = 0;
            MostrarAlerta("Informar valores apenas de débito ou crédito");
            return;
        }
        else if (e.item.Valor_Debito < 0 && e.item.Valor_Credito < 0) {
            e.item.Valor_Debito = 0;
            e.item.Valor_Credito = 0;
            MostrarAlerta("Informar valores apenas de débito ou crédito");
            return;
        }
        this.CalcularLabels();
    };
    C_SalIni.prototype.PreencherGrades = function () {
        var paramsAtv = {
            codEmpresa: this.cboEmpresa.GetValue(),
            origem: 'A'
        };
        var paramsPas = {
            codEmpresa: this.cboEmpresa.GetValue(),
            origem: 'P'
        };
        var retornoAtivo = null;
        retornoAtivo = this.ExecutarFuncaoServerSideSynch("PreencherGridAtivo", paramsAtv);
        if (retornoAtivo != null) {
            this.Ativos = retornoAtivo;
        }
        this.RefreshAngular();
        var retornoPassivo = null;
        retornoPassivo = this.ExecutarFuncaoServerSideSynch("PreencherGridPassivo", paramsPas);
        if (retornoPassivo != null) {
            this.Passivos = retornoPassivo;
        }
    };
    C_SalIni.prototype.OnClickGravar = function (s, e) {
        e.processOnServer = false;
        var arrayAtivos = [];
        var arrayPassivos = [];
        if (this.lblAtivo.Text.CNum() - this.lblPassivo.Text.CNum() != 0) {
            MostrarAlerta("Total do Ativo diferente do Total do Passivo corrija esta situação antes de cadastrar os saldos");
            e.processOnServer = false;
            return;
        }
        this.grdAtivo.Grid.DataSource.forEach(function (q) {
            var gradeAtivos = {
                Codigo: q.Codigo,
                CodigoContabil: q.CodigoContabil,
                Descricao: q.Descricao,
                Valor_Debito: q.Valor_Debito,
                Valor_Credito: q.Valor_Credito
            };
            arrayAtivos.push(q);
        });
        this.grdPassivo.Grid.DataSource.forEach(function (q) {
            var gradePassivos = {
                Codigo: q.Codigo,
                CodigoContabil: q.CodigoContabil,
                Descricao: q.Descricao,
                Valor_Debito: q.Valor_Debito,
                Valor_Credito: q.Valor_Credito
            };
            arrayPassivos.push(q);
        });
        var params = {
            codEmpresa: this.cboEmpresa.GetValue(),
            data: this.txtDataLancamento.Date,
            histAtivo: this.txtHistoricoAtivo.GetText().CNum(),
            histPassivo: this.txtHistoricoPassivo.GetText().CNum(),
            contraPartidaAtivo: this.txtContraPartidaAtivo.GetText().CNum(),
            contraPartidaPassivo: this.txtContraPartidaPassivo.GetText().CNum(),
            arrayAtivos: JSON.stringify(arrayAtivos),
            arrayPassivos: JSON.stringify(arrayPassivos),
            usuario: ValoresSismoura.UsuarioLogado,
            tela: ValoresSismoura.NomeTela
        };
        //SE O USUARIO QUISER GRAVAR NA CONTABIL_SALDO_INICIAL, DEVE DEIXAR TODOS CAMPOS EM BRANCO
        if (this.txtDataLancamento.Date == null) {
            if (this.txtHistoricoAtivo.GetText() != "" || this.txtContraPartidaAtivo.GetText() != "") {
                MostrarAlerta("Preencha corretamente todas as informações para a geração dos lançamentos de saldo inicial.");
                return;
            }
            if (this.txtHistoricoPassivo.GetText() != "" || this.txtContraPartidaPassivo.GetText() != "") {
                MostrarAlerta("Preencha corretamente todas as informações para a geração dos lançamentos de saldo inicial.");
                return;
            }
        }
        else {
            //SE QUISER GERAR O SALDO POR LANCAMENTO DEVE PREENCHER TODOS
            if (this.txtHistoricoAtivo.GetText() == "" || this.txtContraPartidaAtivo.GetText() == "") {
                MostrarAlerta("Preencha corretamente todas as informações para a geração dos lançamentos de saldo inicial.");
                return;
            }
            if (this.txtHistoricoPassivo.GetText() == "" || this.txtContraPartidaPassivo.GetText() == "") {
                MostrarAlerta("Preencha corretamente todas as informações para a geração dos lançamentos de saldo inicial.");
                return;
            }
        }
        if (this.ExecutarFuncaoServerSideSynch("GerarSaldoInicial", params)) {
            MostrarMensagem("Registros gravados com sucesso!");
            this.LimparCampos();
            this.RefreshAngular();
            this.CalcularLabels();
        }
        else {
            MostrarError("Ocorreu um erro ao gravar os registros");
        }
    };
    C_SalIni.prototype.PreencherEmpresaContabil = function () {
        this.txtContraPartidaAtivo.Limpar();
        this.txtContraPartidaPassivo.Limpar();
        if (this.txtContraPartidaPassivo_hdnEmpresaContabil != undefined) {
            this.txtContraPartidaPassivo_hdnEmpresaContabil.value = this.cboEmpresa.GetValue();
        }
        if (this.txtContraPartidaAtivo_hdnEmpresaContabil != undefined) {
            this.txtContraPartidaAtivo_hdnEmpresaContabil.value = this.cboEmpresa.GetValue();
        }
        if (this.txtContraPartidaPassivo) {
            adicionarEventoMoura(this.txtContraPartidaPassivo.AntesAbrirProcura, this.OnContraPartidaPassivoAntesAbrirProcura, this);
        }
        if (this.txtContraPartidaPassivo) {
            adicionarEventoMoura(this.txtContraPartidaPassivo.PesquisandoContabil, this.OnContraPartidaPassivoPesquisando, this);
        }
        if (this.txtContraPartidaAtivo) {
            adicionarEventoMoura(this.txtContraPartidaAtivo.AntesAbrirProcura, this.OnContraPartidaAtivoAntesAbrirProcura, this);
        }
        if (this.txtContraPartidaAtivo) {
            adicionarEventoMoura(this.txtContraPartidaAtivo.PesquisandoContabil, this.OnContraPartidaAtivoPesquisando, this);
        }
        this.PreencherGrades();
    };
    C_SalIni.prototype.OnContraPartidaPassivoAntesAbrirProcura = function (s, ev) {
        this.txtContraPartidaPassivo.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    C_SalIni.prototype.OnContraPartidaPassivoPesquisando = function (s, ev) {
        this.txtContraPartidaPassivo.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        parametros = {
            codigoContaContabil: this.txtContraPartidaPassivo.TextBoxAdicional.value.CNum(),
            empresa: this.cboEmpresa.GetValue()
        };
        parametroReduzido = {
            reduzido: this.txtContraPartidaPassivo.TextBoxAdicional.value.CNum(),
        };
        if (this.txtContraPartidaPassivo.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta de Contra Partida não pertence a empresa selecionada!');
                    this.txtContraPartidaPassivo.Limpar();
                    this.txtContraPartidaPassivo.Focus();
                }
            }
        }
    };
    C_SalIni.prototype.OnContraPartidaAtivoAntesAbrirProcura = function (s, ev) {
        this.txtContraPartidaAtivo.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
    };
    C_SalIni.prototype.OnContraPartidaAtivoPesquisando = function (s, ev) {
        this.txtContraPartidaAtivo.AddParametro("codEmpresa", this.cboEmpresa.GetValue());
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        parametros = {
            codigoContaContabil: this.txtContraPartidaAtivo.TextBoxAdicional.value.CNum(),
            empresa: this.cboEmpresa.GetValue()
        };
        parametroReduzido = {
            reduzido: this.txtContraPartidaAtivo.TextBoxAdicional.value.CNum(),
        };
        if (this.txtContraPartidaAtivo.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta de Contra Partida não pertence a empresa selecionada!');
                    this.txtContraPartidaAtivo.Limpar();
                    this.txtContraPartidaAtivo.Focus();
                }
            }
        }
    };
    C_SalIni.prototype.LimparCampos = function () {
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.txtContraPartidaAtivo.Limpar();
        this.txtContraPartidaPassivo.Limpar();
        this.txtHistoricoAtivo.Limpar();
        this.txtHistoricoPassivo.Limpar();
        this.Entity.Data = null;
        this.GetScope().$applyAsync();
        this.RefreshAngular();
    };
    return C_SalIni;
}(MouraPageAngular));
var c_SalIni = new C_SalIni();
//# sourceMappingURL=C_SalIni.js.map