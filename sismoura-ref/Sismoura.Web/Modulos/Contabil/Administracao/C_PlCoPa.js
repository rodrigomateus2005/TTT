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
var C_PlCoPa = /** @class */ (function (_super) {
    __extends(C_PlCoPa, _super);
    function C_PlCoPa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_PlCoPa.prototype, "txtContaContabil_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaContabil_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "txtContaDebitoCartao_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaDebitoCartao_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "txtContaContabilSobra_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaContabilSobra_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "txtContaContabilQuebra_hdnEmpresaContabil", {
        get: function () {
            return $("#txtContaContabilQuebra_hdnEmpresaContabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "cboFormaPagamento", {
        get: function () {
            return window['cboFormaPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "txtCartao", {
        get: function () {
            return window['txtCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "txtHistorico", {
        get: function () {
            return window['txtHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "txtContaContabilSobra", {
        get: function () {
            return window['txtContaContabilSobra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "txtContaContabilQuebra", {
        get: function () {
            return window['txtContaContabilQuebra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "txtContaDebito", {
        get: function () {
            return window['txtContaDebito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "txtContaDebitoCartao", {
        get: function () {
            return window['txtContaDebitoCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "chkLanMultiplo", {
        get: function () {
            return window['chkLanMultiplo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "txtHistorico_", {
        get: function () {
            return window['txtHistorico__Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "txtHistoricoSobra", {
        get: function () {
            return window['txtHistoricoSobra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "txtHistoricoQuebra", {
        get: function () {
            return window['txtHistoricoQuebra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "Tab", {
        get: function () {
            return window['Tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "lblCartoes", {
        get: function () {
            return window['lblCartoes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "GridVenda", {
        get: function () {
            return window['GridVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "Cartoes", {
        get: function () {
            return this.GetScope()["Cartoes"];
        },
        set: function (value) {
            this.GetScope()["Cartoes"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoPa.prototype, "Cartao", {
        get: function () {
            if (!this.GetScope()["Cartao"]) {
                return null;
            }
            else {
                return this.GetScope()["Cartao"];
            }
        },
        set: function (value) {
            this.GetScope()["Cartao"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_PlCoPa.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.DepoisPesquisar, this.OnDepoisPesquisar, this);
        adicionarEventoMoura(this.LimpouRegistro, this.LimparCampos, this);
        var parametros = {};
        if (this.GridVenda) {
            adicionarEventoMoura(this.GridVenda.Validando, this.OnClickBotaoGravar, this);
            adicionarEventoMoura(this.GridVenda.LimpouItem, this.OnClickBotaoLimpar, this);
            adicionarEventoMoura(this.GridVenda.Grid.SelecionouLinha, this.OnClickBotaoLinhaCartao, this);
        }
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.AntesAbrirProcura, this.OnContaContabilAntesAbrirProcura, this);
        }
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.PesquisandoContabil, this.OnContaContabilPesquisando, this);
        }
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.Procurou, this.PreencherDiferencaCaixa, this);
        }
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnClickBotaoLinha, this);
        }
        if (this.txtContaContabilSobra) {
            adicionarEventoMoura(this.txtContaContabilSobra.AntesAbrirProcura, this.OnContaContabilSobraAntesAbrirProcura, this);
        }
        if (this.txtContaContabilSobra) {
            adicionarEventoMoura(this.txtContaContabilSobra.PesquisandoContabil, this.OnContaContabilSobraPesquisando, this);
        }
        if (this.txtContaContabilQuebra) {
            adicionarEventoMoura(this.txtContaContabilQuebra.AntesAbrirProcura, this.OnContaContabilQuebraAntesAbrirProcura, this);
        }
        if (this.txtContaContabilQuebra) {
            adicionarEventoMoura(this.txtContaContabilQuebra.PesquisandoContabil, this.OnContaContabilQuebraPesquisando, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.cboEmpresaSelectedItemChanged, this);
        }
        if (this.cboFormaPagamento) {
            adicionarEventoMoura(this.cboFormaPagamento.SelectedItemChanged, this.VerificarCadastro, this);
        }
        if (this.txtContaDebito) {
            adicionarEventoMoura(this.txtContaDebito.PesquisandoContabil, this.OnContaContabilDebitoPesquisando, this);
        }
        if (this.txtContaDebitoCartao) {
            adicionarEventoMoura(this.txtContaDebitoCartao.PesquisandoContabil, this.OnContaContabilDebitoCartaoPesquisando, this);
            adicionarEventoMoura(this.txtContaDebitoCartao.AntesAbrirProcura, this.OnContaDebitoCartaoAntesAbrirProcura, this);
        }
        this.PreencherEmpresaContabil();
    };
    C_PlCoPa.prototype.OnClickBotaoLinhaCartao = function (s, e) {
        try {
            this.Cartao.CodigoCartao = e.data.CodigoCartao;
            this.txtCartao.Procurar(e.data.CodigoCartao);
            this.txtContaDebito.Limpar();
            if (e.data.CodigoContabil != "") {
                var parametrosSintetica = {
                    codigo: e.data.CodigoContabil,
                    codEmpresa: this.GetScope().Entity.Empresa
                };
                if (this.ExecutarFuncaoServerSideSynch("IsContaSinteticaReduzido", parametrosSintetica)) {
                    this.txtContaDebito.Limpar();
                    this.txtContaDebito.Focus();
                    return;
                }
                if (e.data.CodContabilInterno > 0) {
                    this.txtContaDebito.Procurar(e.data.CodContabilInterno);
                }
                else {
                    this.txtContaDebito.Procurar(e.data.CodigoContabil);
                }
                this.Cartao.CodigoContabil = e.data.CodigoContabil;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PlCoPa.prototype.OnClickBotaoLinha = function (s, e) {
        try {
            this.LimparCamposEmpresa();
            this.PreencherEntidade(e.data.Codigo);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PlCoPa.prototype.OnDepoisLimpar = function (Entity) {
        this.LimparCampos();
    };
    C_PlCoPa.prototype.OnDepoisPesquisar = function (s, e) {
        this.PreencherDiferencaCaixa();
        var parametros = {
            codigo: this.GetScope().Entity.Forma_Pagamento
        };
        var pagamento = this.ExecutarFuncaoServerSideSynch("GetFormaPagamentoDescricao", parametros);
        if (this.GetScope().Entity.Empresa != this.cboEmpresa.GetValue()) {
            this.GetCadastrados(this.GetScope().Entity.Empresa);
        }
        if (pagamento == "Cartão de Crédito" || pagamento == "Cartão de Débito") {
            this.PreencherGradeVenda();
            this.HabilitarCampos(true);
            this.MostrarGrupoTaxaOperadora(true);
        }
    };
    C_PlCoPa.prototype.PreencherGradeVenda = function () {
        var tipo;
        if (this.GetScope().Entity.Forma_Pagamento == null || this.GetScope().Entity.Forma_Pagamento == 0) {
            tipo = this.cboFormaPagamento.GetValue().CNum();
        }
        else {
            tipo = this.GetScope().Entity.Forma_Pagamento;
        }
        var parametros = {
            codEmpresa: this.GetScope().Entity.Empresa,
            Tipo: tipo
        };
        var cartoes = this.ExecutarFuncaoServerSideSynch("PreencherGradeVenda", parametros);
        if (cartoes) {
            this.Cartoes = cartoes;
        }
    };
    C_PlCoPa.prototype.PreencherDiferencaCaixa = function () {
        try {
            var empresa;
            if (this.GetScope().Entity.Empresa != undefined) {
                empresa = this.GetScope().Entity.Empresa;
            }
            else {
                empresa = this.cboEmpresa.GetValue();
            }
            var parametros = {
                codEmpresa: empresa
            };
            this.txtContaDebitoCartao.Limpar();
            this.txtHistorico_.Limpar();
            this.txtContaContabilSobra.Limpar();
            this.txtHistoricoSobra.Limpar();
            this.txtContaContabilQuebra.Limpar();
            this.txtHistoricoQuebra.Limpar();
            var parametro = this.ExecutarFuncaoServerSideSynch("GetParametrosEmpresa", parametros);
            if (parametro) {
                if (parametro.Conta_Taxa_Cartao != 0) {
                    this.txtContaDebitoCartao.Procurar(parametro.Conta_Taxa_Cartao.toString());
                }
                if (parametro.Historico_Taxa_Cartao != 0) {
                    this.txtHistorico_.Procurar(parametro.Historico_Taxa_Cartao.toString());
                }
                if (parametro.Conta_Sobra_Caixa != 0) {
                    this.txtContaContabilSobra.Procurar(parametro.Conta_Sobra_Caixa.toString());
                }
                if (parametro.Historico_Sobra_Caixa != 0) {
                    this.txtHistoricoSobra.Procurar(parametro.Historico_Sobra_Caixa.toString());
                }
                if (parametro.Conta_Quebra_Caixa != 0) {
                    this.txtContaContabilQuebra.Procurar(parametro.Conta_Quebra_Caixa.toString());
                }
                if (parametro.Historico_Quebra_Caixa != 0) {
                    this.txtHistoricoQuebra.Procurar(parametro.Historico_Quebra_Caixa.toString());
                }
                this.chkLanMultiplo.Checked = parametro.Taxa_Lancamento_Multiplo;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PlCoPa.prototype.OnDepoisClickNovo = function () {
        this.LimparCampos();
        return true;
    };
    C_PlCoPa.prototype.LimparCampos = function () {
        this.LimparCamposEmpresa();
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.GetCadastrados(this.cboEmpresa.GetValue());
    };
    C_PlCoPa.prototype.LimparCamposEmpresa = function () {
        this.cboFormaPagamento.LimparSelecao();
        this.txtCartao.Limpar();
        this.txtCodigo.Limpar();
        this.txtContaDebito.Limpar();
        this.txtHistorico.Limpar();
        this.txtContaDebitoCartao.Limpar();
        this.txtHistorico_.Limpar();
        this.txtContaContabilSobra.Limpar();
        this.txtHistoricoSobra.Limpar();
        this.txtContaContabilQuebra.Limpar();
        this.txtHistoricoQuebra.Limpar();
        this.HabilitarCampos(false);
        this.Cartoes = [];
        this.MostrarGrupoTaxaOperadora(false);
    };
    C_PlCoPa.prototype.cboEmpresaSelectedItemChanged = function () {
        var empresa = this.cboEmpresa.GetValue();
        this.LimparCamposEmpresa();
        this.cboEmpresa.SetValue(empresa);
        this.PreencherEmpresaContabil();
        this.GetCadastrados(empresa);
        this.PreencherDiferencaCaixa();
        this.PreencherFormaPagamento();
        var parametros = {
            codEmpresa: empresa
        };
        var tipo = this.ExecutarFuncaoServerSideSynch("TipoParametroCartao", parametros);
        if (tipo == "Bandeira" && this.txtContaContabil) {
            this.txtContaContabil.Obrigatorio = false;
        }
    };
    C_PlCoPa.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.GridVenda.btnNovo.Text = "Limpar";
        this.EntityTela.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.MostrarGrupoTaxaOperadora(false);
        this.PreencherFormaPagamento();
        this.GetCadastrados(ValoresSismoura.EmpresaPadraoUsuario);
        this.PreencherDiferencaCaixa();
    };
    C_PlCoPa.prototype.HabilitarCampos = function (flag) {
        var codEmpresa;
        if (this.GetScope().Entity != undefined) {
            if (this.GetScope().Entity.Empresa != undefined) {
                codEmpresa = this.GetScope().Entity.Empresa;
            }
            else {
                codEmpresa = this.cboEmpresa.GetValue();
            }
        }
        else {
            codEmpresa = this.cboEmpresa.GetValue();
        }
        var parametros = {
            codEmpresa: codEmpresa
        };
        var tipo = this.ExecutarFuncaoServerSideSynch("TipoParametroCartao", parametros);
        if (tipo == "Tipo" && flag == true) {
            flag = false;
        }
        this.txtContaDebito.Obrigatorio = !flag;
        this.txtCartao.Visible = flag;
        this.lblCartoes.Visible = flag;
        this.GridVenda.Visible = flag;
    };
    C_PlCoPa.prototype.PreencherFormaPagamento = function () {
        try {
            this.cboFormaPagamento.ClearItems();
            var codEmpresa = 0;
            if (this.GetScope().Entity != undefined) {
                if (this.GetScope().Entity.Empresa != undefined) {
                    codEmpresa = this.GetScope().Entity.Empresa;
                }
                else {
                    codEmpresa = this.cboEmpresa.GetValue();
                }
            }
            else {
                codEmpresa = this.cboEmpresa.GetValue();
            }
            var parametros = {
                codEmpresa: codEmpresa
            };
            var FormasPagamento = this.ExecutarFuncaoServerSideSynch("PreencherFormaPagamento", parametros);
            if (FormasPagamento && FormasPagamento.length > 0) {
                var x = 0;
                for (x = 0; x < FormasPagamento.length; ++x) {
                    this.cboFormaPagamento.Combo.AddItem(FormasPagamento[x].Descricao, FormasPagamento[x].Codigo, "");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PlCoPa.prototype.GetCadastrados = function (empresa) {
        try {
            var parametros;
            var codEmpresa;
            if (this.GetScope().Entity != undefined) {
                if (this.GetScope().Entity.Empresa != undefined) {
                    codEmpresa = this.GetScope().Entity.Empresa;
                }
                else {
                    codEmpresa = this.cboEmpresa.GetValue();
                }
            }
            else {
                codEmpresa = this.cboEmpresa.GetValue();
            }
            parametros = {
                codEmpresa: empresa
            };
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PlCoPa.prototype.OnDepoisGravar = function () {
        var parametros = {
            cartoes: this.Cartoes
        };
        if (this.cboFormaPagamento.GetText() == "Cartão de Crédito"
            || this.cboFormaPagamento.GetText() == "Cartão de Débito") {
            this.ExecutarFuncaoServerSideSynch("GravarCartoes", parametros);
        }
        this.GetCadastrados(this.GetScope().Entity.Empresa);
        this.PreencherGradeVenda();
        this.RefreshAngular();
        return true;
    };
    C_PlCoPa.prototype.OnAntesGravar = function () {
        var parametros = {
            codEmpresa: this.cboEmpresa.GetValue()
        };
        this.EntityTela.Empresa = this.cboEmpresa.GetValue();
        this.EntityTela.Forma_Pagamento_Descricao = this.cboFormaPagamento.GetText();
        var parametro = this.ExecutarFuncaoServerSideSynch("GetParametrosEmpresa", parametros);
        if (parametro) {
            parametro.Conta_Taxa_Cartao = this.txtContaDebitoCartao.GetText().CNum();
            parametro.Historico_Taxa_Cartao = this.txtHistorico_.GetText().CNum();
            parametro.Taxa_Lancamento_Multiplo = this.chkLanMultiplo.Checked;
            parametro.Conta_Sobra_Caixa = this.txtContaContabilSobra.GetText().CNum();
            parametro.Historico_Sobra_Caixa = this.txtHistoricoSobra.GetText().CNum();
            parametro.Conta_Quebra_Caixa = this.txtContaContabilQuebra.GetText().CNum();
            parametro.Historico_Quebra_Caixa = this.txtHistoricoQuebra.GetText().CNum();
            parametro.Tela = ValoresSismoura.NomeTela;
            var entidade = this.GetScope().Entity;
            entidade.Parametros = parametro;
            return true;
        }
        else {
            MostrarAlerta("A empresa não possui parâmetros cadastrados, acesse a tela Contábil > Administração > Parâmetros e realize a configuração da mesma.");
            return false;
        }
    };
    C_PlCoPa.prototype.OnClickBotaoLimpar = function (s, e) {
        try {
            this.txtCartao.Limpar();
            this.txtContaDebito.Limpar();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PlCoPa.prototype.OnClickBotaoGravar = function (s, e) {
        try {
            if (this.txtCartao.GetText().CNum() == 0) {
                MostrarAlerta("Informe um cartão");
                e.cancelar = true;
            }
            if (this.txtHistorico.GetText() == "" || this.txtHistorico.GetText().CNum() == 0) {
                MostrarAlerta("Informe um Histórico");
                e.cancelar = true;
            }
            var parametroSintetica = {
                codigo: this.txtContaDebito.TextBoxAdicional.value.CNum(),
                codEmpresa: this.cboEmpresa.GetValue()
            };
            if (this.ExecutarFuncaoServerSideSynch("IsContaSinteticaReduzido", parametroSintetica)) {
                e.cancelar = true;
                MostrarAlerta('A conta contábil débito deve ser do tipo Analítica!');
                this.txtContaDebito.Limpar();
                this.txtContaDebito.Focus();
            }
            if (!this.ValidarCamposObrigatorios()) {
                e.cancelar = true;
                MostrarAlerta("Preencha corretamente os campos obrigatórios!");
            }
            else {
                var cartao = e.item;
                var lista = this.Cartoes;
                var item = lista.FirstOrDefault("CodigoCartao", cartao.CodigoCartao);
                if (item) {
                    item.CodigoContabil = this.txtContaDebito.TextBoxAdicional.value.CNum();
                    item.CodContabilInterno = this.txtContaDebito.GetText().CNum();
                    item.ContaContabil = this.txtContaDebito.GetText().CNum();
                    item.ContaContabilDescricao = this.txtContaDebito.GetResultado();
                }
                this.GridVenda.Grid.PreencherGrid(lista);
                e.cancelar = true;
                this.txtCartao.Limpar();
                this.txtContaDebito.Limpar();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PlCoPa.prototype.VerificarCadastro = function () {
        var parametros = {
            formaPagamento: this.cboFormaPagamento.GetValue(),
            empresa: this.cboEmpresa.GetValue()
        };
        this.Cartoes = [];
        var codigo = this.ExecutarFuncaoServerSideSynch("CodigoFormaPagamento", parametros);
        if (codigo > 0) {
            this.txtCodigo.Procurar(codigo.toString());
            if (this.cboFormaPagamento.GetText() == "Cartão de Crédito" || this.cboFormaPagamento.GetText() == "Cartão de Débito") {
                this.PreencherGradeVenda();
            }
            else {
                this.Cartoes = [];
            }
        }
        else {
            var forma = this.cboFormaPagamento.GetValue();
            var preencher;
            if (this.cboFormaPagamento.GetText() == "Cartão de Crédito" || this.cboFormaPagamento.GetText() == "Cartão de Débito") {
                preencher = true;
            }
            this.LimparCampos();
            this.cboFormaPagamento.SetValue(forma);
            if (preencher) {
                this.PreencherGradeVenda();
            }
        }
        if (this.cboFormaPagamento.GetText() == "Cartão de Crédito" || this.cboFormaPagamento.GetText() == "Cartão de Débito") {
            this.MostrarGrupoTaxaOperadora(true);
            this.HabilitarCampos(true);
        }
        else {
            this.MostrarGrupoTaxaOperadora(false);
            this.HabilitarCampos(false);
        }
    };
    C_PlCoPa.prototype.MostrarGrupoTaxaOperadora = function (flag) {
        this.txtContaDebitoCartao.Obrigatorio = flag;
        this.txtHistorico_.Obrigatorio = flag;
        this.Tab.AlterarVisibleAba("abaTaxaOperadora", flag);
    };
    C_PlCoPa.prototype.OnContaContabilDebitoPesquisando = function (s, ev) {
        this.txtContaDebito.LimparParametros();
        this.txtContaDebito.AddParametro("tipo", "A");
        this.txtContaDebito.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        var parametroSintetica;
        parametros = {
            codigoContaContabil: this.txtContaDebito.TextBoxAdicional.value.CNum(),
            empresa: this.cboEmpresa.GetValue().toString()
        };
        parametroReduzido = {
            reduzido: this.txtContaDebito.TextBoxAdicional.value.CNum(),
        };
        parametroSintetica = {
            codigo: this.txtContaDebito.TextBoxAdicional.value.CNum(),
            codEmpresa: this.cboEmpresa.GetValue()
        };
        if (this.txtContaDebito.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Débito não pertence a empresa selecionada!');
                    this.txtContaDebito.Limpar();
                    this.txtContaDebito.Focus();
                }
            }
            else if (this.ExecutarFuncaoServerSideSynch("IsContaSinteticaReduzido", parametroSintetica)) {
                ev.Cancelar = true;
                MostrarAlerta('A conta contábil deve ser do tipo Analítica!');
                this.txtContaDebito.Limpar();
                this.txtContaDebito.Focus();
            }
        }
    };
    C_PlCoPa.prototype.OnContaContabilDebitoCartaoPesquisando = function (s, ev) {
        this.txtContaDebitoCartao.LimparParametros();
        this.txtContaDebitoCartao.AddParametro("tipo", "A");
        this.txtContaDebitoCartao.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        var parametroSintetica;
        parametros = {
            codigoContaContabil: this.txtContaDebitoCartao.TextBoxAdicional.value.CNum(),
            empresa: this.cboEmpresa.GetValue().toString()
        };
        parametroReduzido = {
            reduzido: this.txtContaDebitoCartao.TextBoxAdicional.value.CNum(),
        };
        parametroSintetica = {
            codigo: this.txtContaDebito.TextBoxAdicional.value.CNum(),
            codEmpresa: this.cboEmpresa.GetValue()
        };
        if (this.txtContaDebitoCartao.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Débito não pertence a empresa selecionada!');
                    this.txtContaDebitoCartao.Limpar();
                    this.txtContaDebitoCartao.Focus();
                }
            }
            else if (this.ExecutarFuncaoServerSideSynch("IsContaSinteticaReduzido", parametroSintetica)) {
                ev.Cancelar = true;
                MostrarAlerta('A conta contábil deve ser do tipo Analítica!');
                this.txtContaDebitoCartao.Limpar();
                this.txtContaDebitoCartao.Focus();
            }
        }
    };
    C_PlCoPa.prototype.PreencherEmpresaContabil = function () {
        if (this.txtContaContabil_hdnEmpresaContabil != undefined) {
            this.txtContaContabil_hdnEmpresaContabil.value = this.cboEmpresa.GetValue().toString();
        }
        if (this.txtContaDebitoCartao_hdnEmpresaContabil != undefined) {
            this.txtContaDebitoCartao_hdnEmpresaContabil.value = this.cboEmpresa.GetValue().toString();
        }
        if (this.txtContaContabilSobra_hdnEmpresaContabil != undefined) {
            this.txtContaContabilSobra_hdnEmpresaContabil.value = this.cboEmpresa.GetValue().toString();
        }
        if (this.txtContaContabilQuebra_hdnEmpresaContabil != undefined) {
            this.txtContaContabilQuebra_hdnEmpresaContabil.value = this.cboEmpresa.GetValue().toString();
        }
        if (this.txtContaDebitoCartao) {
            adicionarEventoMoura(this.txtContaDebitoCartao.PesquisandoContabil, this.OnContaContabilDebitoCartaoPesquisando, this);
            adicionarEventoMoura(this.txtContaDebitoCartao.AntesAbrirProcura, this.OnContaDebitoCartaoAntesAbrirProcura, this);
        }
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.AntesAbrirProcura, this.OnContaContabilAntesAbrirProcura, this);
        }
        if (this.txtContaContabil) {
            adicionarEventoMoura(this.txtContaContabil.PesquisandoContabil, this.OnContaContabilPesquisando, this);
        }
        if (this.txtContaContabilSobra) {
            adicionarEventoMoura(this.txtContaContabilSobra.AntesAbrirProcura, this.OnContaContabilSobraAntesAbrirProcura, this);
        }
        if (this.txtContaContabilSobra) {
            adicionarEventoMoura(this.txtContaContabilSobra.PesquisandoContabil, this.OnContaContabilSobraPesquisando, this);
        }
        if (this.txtContaContabilQuebra) {
            adicionarEventoMoura(this.txtContaContabilQuebra.AntesAbrirProcura, this.OnContaContabilQuebraAntesAbrirProcura, this);
        }
        if (this.txtContaContabilQuebra) {
            adicionarEventoMoura(this.txtContaContabilQuebra.PesquisandoContabil, this.OnContaContabilQuebraPesquisando, this);
        }
    };
    C_PlCoPa.prototype.OnContaDebitoCartaoAntesAbrirProcura = function (s, ev) {
        this.txtContaDebitoCartao.LimparParametros();
        this.txtContaDebitoCartao.AddParametro("tipo", "A");
        this.txtContaDebitoCartao.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
    };
    C_PlCoPa.prototype.OnContaContabilAntesAbrirProcura = function (s, ev) {
        this.txtContaContabil.LimparParametros();
        this.txtContaContabil.AddParametro("tipo", "A");
        this.txtContaContabil.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
    };
    C_PlCoPa.prototype.OnContaContabilPesquisando = function (s, ev) {
        this.txtContaContabil.LimparParametros();
        this.txtContaContabil.AddParametro("tipo", "A");
        this.txtContaContabil.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroReduzido;
        parametros = {
            codigoContaContabil: this.txtContaContabil.TextBoxAdicional.value.CNum(),
            empresa: this.cboEmpresa.GetValue()
        };
        parametroReduzido = {
            reduzido: this.txtContaContabil.TextBoxAdicional.value.CNum(),
        };
        if (this.txtContaContabil.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Contábil não pertence a empresa selecionada!');
                    this.txtContaContabil.Limpar();
                    this.txtContaContabil.Focus();
                }
            }
        }
    };
    C_PlCoPa.prototype.OnContaContabilSobraAntesAbrirProcura = function (s, ev) {
        this.txtContaContabilSobra.LimparParametros();
        this.txtContaContabilSobra.AddParametro("tipo", "A");
        this.txtContaContabilSobra.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
    };
    C_PlCoPa.prototype.OnContaContabilQuebraAntesAbrirProcura = function (s, ev) {
        this.txtContaContabilQuebra.LimparParametros();
        this.txtContaContabilQuebra.AddParametro("tipo", "A");
        this.txtContaContabilQuebra.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
    };
    C_PlCoPa.prototype.OnContaContabilQuebraPesquisando = function (s, ev) {
        this.txtContaContabilQuebra.LimparParametros();
        this.txtContaContabilQuebra.AddParametro("tipo", "A");
        this.txtContaContabilQuebra.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroSintetica;
        var parametroReduzido;
        parametros = {
            codigoContaContabil: this.txtContaContabilQuebra.TextBoxAdicional.value.CNum(),
            empresa: this.cboEmpresa.GetValue()
        };
        parametroReduzido = {
            reduzido: this.txtContaContabilQuebra.TextBoxAdicional.value.CNum(),
        };
        parametroSintetica = {
            codigo: this.txtContaDebito.TextBoxAdicional.value.CNum(),
            codEmpresa: this.cboEmpresa.GetValue()
        };
        if (this.txtContaContabilQuebra.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Contábil Sobra de Caixa não pertence a empresa selecionada!');
                    this.txtContaContabilQuebra.Limpar();
                    this.txtContaContabilQuebra.Focus();
                }
            }
            else if (this.ExecutarFuncaoServerSideSynch("IsContaSinteticaReduzido", parametroSintetica)) {
                ev.Cancelar = true;
                MostrarAlerta('A conta contábil deve ser do tipo Analítica!');
                this.txtContaContabilQuebra.Limpar();
                this.txtContaContabilQuebra.Focus();
            }
        }
    };
    C_PlCoPa.prototype.OnContaContabilSobraPesquisando = function (s, ev) {
        this.txtContaContabilSobra.LimparParametros();
        this.txtContaContabilSobra.AddParametro("tipo", "A");
        this.txtContaContabilSobra.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
        var retorno = false;
        var retornoContaContabilExiste = false;
        var parametros;
        var parametroSintetica;
        var parametroReduzido;
        parametros = {
            codigoContaContabil: this.txtContaContabilSobra.TextBoxAdicional.value.CNum(),
            empresa: this.cboEmpresa.GetValue()
        };
        parametroReduzido = {
            reduzido: this.txtContaContabilSobra.TextBoxAdicional.value.CNum(),
        };
        parametroSintetica = {
            codigo: this.txtContaDebito.TextBoxAdicional.value.CNum(),
            codEmpresa: this.cboEmpresa.GetValue()
        };
        if (this.txtContaContabilSobra.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (!retorno) {
                retornoContaContabilExiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroReduzido);
                if (retornoContaContabilExiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A Conta Contábil Sobra de Caixa não pertence a empresa selecionada!');
                    this.txtContaContabilSobra.Limpar();
                    this.txtContaContabilSobra.Focus();
                }
            }
            else if (this.ExecutarFuncaoServerSideSynch("IsContaSinteticaReduzido", parametroSintetica)) {
                ev.Cancelar = true;
                MostrarAlerta('A conta contábil deve ser do tipo Analítica!');
                this.txtContaContabilSobra.Limpar();
                this.txtContaContabilSobra.Focus();
            }
        }
    };
    return C_PlCoPa;
}(MouraPageCadastroAngular));
var c_PlCoPa = new C_PlCoPa();
//# sourceMappingURL=C_PlCoPa.js.map