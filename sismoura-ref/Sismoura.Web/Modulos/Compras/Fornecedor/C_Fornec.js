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
var C_Fornec = /** @class */ (function (_super) {
    __extends(C_Fornec, _super);
    function C_Fornec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Fornec.prototype, "ListaRepresentantes", {
        get: function () {
            return this.grdRep.DataSource;
        },
        set: function (value) {
            this.grdRep.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtGrupoFornecedorContabil", {
        get: function () {
            return window['txtGrupoFornecedorContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtContaIntegracaoContabil", {
        get: function () {
            return window['txtContaIntegracaoContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "mdImportarDados", {
        get: function () {
            return window['mdImportarDados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "btnImpotar", {
        get: function () {
            return window['btnImpotar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "btnImportarCliente", {
        get: function () {
            return window['btnImportarCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtCep", {
        get: function () {
            return window['txtCep_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtCodPostal", {
        get: function () {
            return window['txtCodPostal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtCepPagamento", {
        get: function () {
            return window['txtCepPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtCodPostalPagamento", {
        get: function () {
            return window['txtCodPostalPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtEndereco", {
        get: function () {
            return window['txtEndereco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtBairro", {
        get: function () {
            return window['txtBairro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtNumero", {
        get: function () {
            return window['txtNumero_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtCidade", {
        get: function () {
            return window['txtCidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtCPF", {
        get: function () {
            return window['txtCPF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtRG", {
        get: function () {
            return window['txtRG_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtFantasia", {
        get: function () {
            return window['txtFantasia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtNome", {
        get: function () {
            return window['txtNome_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtValorMinimoCompra", {
        get: function () {
            return window['txtValorMinimoCompra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "Mapa", {
        get: function () {
            return window['Mapa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "hdnEnderecoEmpresa", {
        get: function () {
            return $('#hdnEnderecoEmpresa')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "hdnCidadeEmpresa", {
        get: function () {
            return $('#hdnCidadeEmpresa')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "hdnNumeroEmpresa", {
        get: function () {
            return $('#hdnNumeroEmpresa')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "btnProcurarEndereco", {
        get: function () {
            return window['btnProcurarEndereco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "btnTracarRota", {
        get: function () {
            return window['btnTracarRota_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "lstTipoFornecedor", {
        get: function () {
            return window['lstTipoFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "optTipo", {
        get: function () {
            return window['optTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtContatoRepres", {
        get: function () {
            return window['txtContatoRepres_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtFoneRepres", {
        get: function () {
            return window['txtFoneRepres_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtFone2Repres", {
        get: function () {
            return window['txtFone2Repres_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtFaxRepres", {
        get: function () {
            return window['txtFaxRepres_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtE_Mail_Repres", {
        get: function () {
            return window['txtE_Mail_Repres_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "btnAdicionarRepres", {
        get: function () {
            return window['btnAdicionarRepres_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "grdRep", {
        get: function () {
            return window['grdRep_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "mdFornecedoresDuplicados", {
        get: function () {
            return window['mdFornecedoresDuplicados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "grdFornecedoresDuplicados", {
        get: function () {
            return window['grdFornecedoresDuplicados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "chkIsHotelParceiro", {
        get: function () {
            return window['chkIsHotelParceiro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "chkCoteFacil", {
        get: function () {
            return window['chkCoteFacil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "chkListarPedSemanal", {
        get: function () {
            return window['chkListarPedSemanal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "lstEspecies", {
        get: function () {
            return window['lstEspecies_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "optTipoHospedagem", {
        get: function () {
            return window['optTipoHospedagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fornec.prototype, "txtContaContabil", {
        get: function () {
            return window['txtContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Fornec.prototype.Init = function () {
        var _this = this;
        _super.prototype.Init.call(this);
        if (ValoresSismoura.ConfiguracoesRetaguarda.Integracao_Systextil) {
            this.txtValorMinimoCompra.Visible = true;
            this.chkListarPedSemanal.Visible = true;
        }
        else {
            this.txtValorMinimoCompra.Visible = false;
            this.chkListarPedSemanal.Visible = false;
        }
        if (this.btnImpotar) {
            adicionarEventoMoura(this.btnImpotar.Click, this.OnClickBotaoImportar, this);
        }
        if (this.btnImportarCliente) {
            adicionarEventoMoura(this.btnImportarCliente.Click, this.OnClickBotaoImportarCliente, this);
        }
        if (this.txtCep) {
            adicionarEventoMoura(this.txtCep.PesquisouCEP, this.OnConsultarCEP, this);
        }
        if (this.txtCepPagamento) {
            adicionarEventoMoura(this.txtCepPagamento.PesquisouCEP, this.OnConsultarCEPPagamento, this);
        }
        if (this.btnProcurarEndereco) {
            adicionarEventoMoura(this.btnProcurarEndereco.Click, this.OnClickProcurarEndereco, this);
        }
        if (this.btnTracarRota) {
            adicionarEventoMoura(this.btnTracarRota.Click, this.OnClickTracarRota, this);
        }
        if (this.btnAdicionarRepres) {
            adicionarEventoMoura(this.btnAdicionarRepres.Click, this.OnClickAdicionarRepresentante, this);
        }
        if (this.grdRep) {
            adicionarEventoMoura(this.grdRep.ExcluiuLinhaGrade, this.OnDepoisExcluiLinhaGrade, this);
        }
        if (this.txtCPF) {
            adicionarEventoMoura(this.txtCPF.LostFocus, this.OnTextBoxCpfChange, this);
            adicionarEventoMoura(this.txtCPF.Procurou, this.OnTxtCPFProcurou, this);
        }
        if (this.txtGrupoFornecedorContabil) {
            adicionarEventoMoura(this.txtGrupoFornecedorContabil.Procurou, this.ValidarGrupo, this);
            if (this.lstEmpresa && this.txtGrupoFornecedorContabil.Visible) {
                this.txtGrupoFornecedorContabil.AddParametro("empresas", this.lstEmpresa.GetValues().join(","));
            }
        }
        if (this.txtContaIntegracaoContabil) {
            adicionarEventoMoura(this.txtContaIntegracaoContabil.Procurou, this.ValidarConta, this);
        }
        if (this.txtNome) {
            adicionarEventoMoura(this.txtNome.LostFocus, this.OnTextBoxNomeChange, this);
        }
        if (this.grdFornecedoresDuplicados) {
            adicionarEventoMoura(this.grdFornecedoresDuplicados.SelecionouLinha, this.SelecionarFornecedor, this);
        }
        if (this.chkIsHotelParceiro) {
            adicionarEventoMoura(this.chkIsHotelParceiro.CheckChanged, this.OnChkIsHotelParceiroChanged, this);
        }
        if (this.chkCoteFacil) {
            adicionarEventoMoura(this.chkCoteFacil.CheckChanged, this.OnchkCoteFacilChanged, this);
        }
        if (this.lstEmpresa) {
            adicionarEventoMoura(this.lstEmpresa.SelectionChanged, this.PreencherParametros, this);
        }
        if (this.chkListarPedSemanal) {
            adicionarEventoMoura(this.chkListarPedSemanal.CheckChanged, function () {
                if (_this.chkListarPedSemanal.Checked) {
                    _this.txtValorMinimoCompra.Obrigatorio = true;
                }
                else {
                    _this.txtValorMinimoCompra.Obrigatorio = false;
                }
            }, this);
        }
    };
    C_Fornec.prototype.OnChkIsHotelParceiroChanged = function (s, e) {
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            this.tab.AlterarVisibleAba("AbaHotelParceiro", this.chkIsHotelParceiro.Checked);
        }
    };
    C_Fornec.prototype.OnchkCoteFacilChanged = function (s, e) {
        if (this.chkCoteFacil.Checked) {
            this.lstTipoFornecedor.SetValue("FAB");
            this.txtCPF.Obrigatorio = false;
        }
        else {
            this.lstTipoFornecedor.SetValue("DIS");
            this.txtCPF.Obrigatorio = true;
        }
    };
    C_Fornec.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var Entidade = this.GetScope().Entity;
        if (!String.IsNullOrWhiteSpace(this.txtCPF.GetText())) {
            if (Entidade.PessoaEntity) {
                Entidade.PessoaEntity.Cpf = this.txtCPF.GetText();
            }
        }
        if (this.lstTipoFornecedor && !String.IsNullOrWhiteSpace(this.lstTipoFornecedor.GetValue())) {
            if (this.lstTipoFornecedor.GetValue() == "FAB") {
                Entidade.Fabricante = true;
                Entidade.Distribuidora = false;
            }
            else {
                Entidade.Fabricante = false;
                Entidade.Distribuidora = true;
            }
        }
        else {
            Entidade.Fabricante = false;
            Entidade.Distribuidora = true;
        }
        Entidade.Fornecedor_Contatos = this.ListaRepresentantes;
        //Entidade.Data_Carga = new Date();
        if (this.lstEmpresa) {
            if (!Entidade.Empresas) {
                Entidade.Empresas = [];
            }
            var valores = this.lstEmpresa.GetValues();
            //Verifica as empresas que não estão na lista a ser salva
            for (var x = 0; x <= valores.length - 1; x++) {
                var empresa = this.ProcuraEmpresa(valores[x].CNum(), Entidade.Empresas);
                if (!empresa) {
                    empresa = {};
                    empresa.Codigo = 0;
                    empresa.Empresa = valores[x].CNum();
                    Entidade.Empresas.push(empresa);
                }
            }
            //Remove da lista as empresas que foram desmarcadas
            var count = 0;
            while (count <= Entidade.Empresas.length - 1) {
                var temp = Entidade.Empresas[count];
                var index = valores.indexOf("" + temp.Empresa);
                //Caso a empresa não esteja selecionada na lista, deve removê-la 
                if (index < 0) {
                    Entidade.Empresas.splice(count, 1);
                    count -= 1;
                }
                count += 1;
            }
        }
        var retorno = false;
        var parametros;
        if (this.txtGrupoFornecedorContabil.Visible) {
            parametros = {
                codigoGrupo: this.txtGrupoFornecedorContabil.GetText().CNum(),
                empresas: this.lstEmpresa.GetValues()
            };
            if (this.txtGrupoFornecedorContabil.GetText().CNum() > 0) {
                retorno = this.ExecutarFuncaoServerSideSynch("VerificarGrupoEmpresa", parametros);
                if (!retorno) {
                    MostrarAlerta('O Grupo Fornecedor Contábil não pertence a(s) empresa(s) selecionada(s)!');
                    return false;
                }
            }
        }
        else if (this.txtContaIntegracaoContabil.Visible) {
            parametros = {
                codigo: this.txtContaIntegracaoContabil.GetText().CNum(),
                empresas: this.lstEmpresa.GetValues()
            };
            if (this.txtContaIntegracaoContabil.GetText().CNum() > 0) {
                retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaEmpresa", parametros);
                if (!retorno) {
                    MostrarAlerta('A Conta Integração Contábil não pertence a(s) empresa(s) selecionada(s)!');
                    return false;
                }
            }
        }
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            if (this.chkIsHotelParceiro.Checked) {
                if (this.lstEspecies.SelectedValues.length == 0) {
                    MostrarAlerta('Informe as espécies que este parceiro atende.');
                    return false;
                }
                Entidade.Especies = [];
                for (var i = 0; i < this.lstEspecies.SelectedValues.length; i++) {
                    var especie = {};
                    especie.Especie = this.lstEspecies.SelectedValues[i];
                    especie.Fornecedor = Entidade.Pessoa;
                    Entidade.Especies.push(especie);
                }
                if (!this.optTipoHospedagem || !this.optTipoHospedagem.GetValue()) {
                    MostrarAlerta('Informe o tipo de hospedagem.');
                    return false;
                }
            }
        }
        if (this.chkListarPedSemanal.Visible) {
            if (!this.validaCampoNulo(Entidade)) {
                return false;
            }
        }
        else {
            this.preencheValores(Entidade, null, 0);
        }
        if (ValoresSismoura.Sistema_Pais == 607 /* Portugal */) {
            Entidade.PessoaEntity.Cep = this.txtCodPostal.GetText();
            Entidade.PessoaEntity.Cep_Pagamento = this.txtCodPostalPagamento.GetText();
        }
        if (!this.ValidarCamposObrigatorios()) {
            return false;
        }
        //if (this.txtContaContabil.GetText().CNum() < 0 || String.IsNullOrWhiteSpace(this.txtContaContabil.GetText())) {
        //    MostrarAlerta("Preencha o campo corretamente: Conta Contábil");
        //    return false;
        //}
        this.GetScope().Entity = Entidade;
        return true;
    };
    C_Fornec.prototype.validaCampoNulo = function (Entidade) {
        if (this.chkListarPedSemanal.Checked) {
            return this.campoChecado(Entidade);
        }
        else {
            return this.campoNaoChecado(Entidade);
        }
    };
    C_Fornec.prototype.campoChecado = function (Entidade) {
        var valor = this.txtValorMinimoCompra.GetText();
        this.preencheValores(Entidade, true, valor.CNum());
        return true;
    };
    C_Fornec.prototype.campoNaoChecado = function (Entidade) {
        var valor = this.txtValorMinimoCompra.GetText();
        if (valor == null) {
            this.preencheValores(Entidade, false, 0);
        }
        else {
            this.preencheValores(Entidade, false, valor.CNum());
        }
        return true;
    };
    C_Fornec.prototype.preencheValores = function (Entidade, bool, valor) {
        Entidade.Valor_Minimo_Compra = valor;
        Entidade.Pedido_Semanal = bool;
    };
    C_Fornec.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (this.GetScope()) {
            if (!this.GetScope().MudouTipo) {
                this.GetScope().MudouTipo = $.proxy(this.MudouTipo, this);
                this.GetScope().$watch(function (scope) { return scope.Entity.PessoaEntity.Tipo; }, this.GetScope().MudouTipo);
            }
            else {
                this.MudouTipo(this.GetScope().Entity.PessoaEntity.Tipo, this.GetScope().Entity.PessoaEntity.Tipo);
            }
        }
        this.tab.AlterarVisibleAba("AbaHotelParceiro", ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus);
        this.chkIsHotelParceiro.Visible = ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus;
        //this.optTipoHospedagem.Visible = ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus;
        //setTimeout(() => {          
        //Se não tiver passado a razão social, não precisa procurar mais nenhum registro
        if (String.IsNullOrWhiteSpace(this.ParametrosTela.razao)) {
            return;
        }
        //Parametros vindos da entrada de produto para cadastrar um novo fornecedor
        if (!String.IsNullOrWhiteSpace(this.ParametrosTela.cnpj)) {
            this.EntityTela.PessoaEntity.Cpf = this.ParametrosTela.cnpj;
        }
        if (!String.IsNullOrWhiteSpace(this.ParametrosTela.razao)) {
            this.EntityTela.PessoaEntity.Nome = this.ParametrosTela.razao;
        }
        if (!String.IsNullOrWhiteSpace(this.ParametrosTela.fantasia)) {
            this.EntityTela.PessoaEntity.Nome_Fantasia = this.ParametrosTela.fantasia;
        }
        if (!String.IsNullOrWhiteSpace(this.ParametrosTela.logradouro)) {
            this.EntityTela.PessoaEntity.Endereco_Nome = this.ParametrosTela.logradouro;
        }
        if (!String.IsNullOrWhiteSpace(this.ParametrosTela.numero)) {
            this.EntityTela.PessoaEntity.Numero = this.ParametrosTela.numero;
        }
        if (!String.IsNullOrWhiteSpace(this.ParametrosTela.bairro)) {
            this.EntityTela.PessoaEntity.Bairro = this.ParametrosTela.bairro;
        }
        if (!String.IsNullOrWhiteSpace(this.ParametrosTela.cep)) {
            this.EntityTela.PessoaEntity.Cep = this.ParametrosTela.cep;
        }
        if (!String.IsNullOrWhiteSpace(this.ParametrosTela.ie)) {
            this.EntityTela.PessoaEntity.Rg = this.ParametrosTela.ie;
        }
        if (!String.IsNullOrWhiteSpace(this.ParametrosTela.tipo)) {
            this.EntityTela.PessoaEntity.Tipo = this.ParametrosTela.tipo;
        }
        this.RefreshAngular();
        //parametros.push("cidadeibge", this.NFeImportada.Fornecedor_Cidade_IBGE);
        //}, 700);           
    };
    //protected OnSelectionChangeTipo() {
    //    if (this.txtCPF) {
    //        this.txtCPF.Limpar();
    //    }
    //}
    C_Fornec.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.PessoaEntity = {};
        Entity.PessoaEntity.Tipo = "J";
        Entity.Especies = [];
        Entity.Fabricante = false;
        Entity.Distribuidora = true;
        Entity.Descer_Carga = true;
        Entity.Tipo_Hospedagem = 0;
        //Entity.PessoaEntity.Empresa_Origem = ValoresSismoura.EmpresaPadraoUsuario;
        if (this.lstTipoFornecedor) {
            this.lstTipoFornecedor.SetValue("DIS");
        }
        this.txtCPF.Obrigatorio = true;
        if (this.Mapa) {
            this.Mapa.Limpar();
        }
        Entity.Empresas = [];
        if (this.lstEmpresa) {
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        }
        this.ListaRepresentantes = [];
        this.criarEntidadePersonalizados(Entity);
        if (this.ParametrosTela.cnpj) {
            Entity.PessoaEntity.Cpf = this.ParametrosTela.cnpj;
        }
        if (this.ParametrosTela.Nome) {
            Entity.PessoaEntity.Nome = replaceAll(this.ParametrosTela.Nome, "+", " ");
        }
        if (this.ParametrosTela.Endereco) {
            Entity.PessoaEntity.Endereco = replaceAll(this.ParametrosTela.Endereco, "+", " ");
        }
        if (this.ParametrosTela.numero) {
            Entity.PessoaEntity.Numero = this.ParametrosTela.numero;
        }
        if (this.ParametrosTela.Bairro) {
            Entity.PessoaEntity.Bairro = this.ParametrosTela.Bairro;
        }
        if (this.ParametrosTela.cep) {
            Entity.PessoaEntity.Cep = this.ParametrosTela.cep;
        }
        if (this.ParametrosTela.cidadeibge) {
            var cidade;
            var parametros;
            parametros = {
                codCidade: this.ParametrosTela.cidadeibge,
                nomeCidade: this.ParametrosTela.cidade
            };
            if (String.IsNullOrWhiteSpace(parametros.nomeCidade)) {
                parametros.nomeCidade = "";
            }
            cidade = this.ExecutarFuncaoServerSideSynch("getCidadeByNumIbge", parametros);
            if (cidade) {
                Entity.PessoaEntity.Cidade = cidade.Codigo;
            }
        }
        if (this.ParametrosTela.ie) {
            Entity.PessoaEntity.Rg = this.ParametrosTela.ie;
        }
        if (this.ParametrosTela.tipo) {
            Entity.PessoaEntity.Tipo = this.ParametrosTela.tipo;
        }
        //if (this.optTipoHospedagem) {
        //    this.optTipoHospedagem.SetValue("-1");
        //}
        //this.lstEspecies.LimparSelecao();
        //this.chkIsHotelParceiro.Checked = false;
        //this.tab.AlterarVisibleAba("AbaHotelParceiro", false)
        this.GetScope().$applyAsync();
        this.txtCodPostal.Visible = false;
        this.txtCodPostalPagamento.Visible = false;
        if (ValoresSismoura.ConfiguracoesRetaguarda.Sistema_Pais == 607 /* Portugal */) {
            this.txtCep.Visible = false;
            this.txtCep.Obrigatorio = false;
            this.txtCepPagamento.Visible = false;
            this.txtCodPostal.Visible = true;
            this.txtCodPostal.Limpar();
            this.txtCodPostalPagamento.Visible = true;
            this.txtCodPostalPagamento.Limpar();
            this.txtRG.SetTextLabelControl("N° Segurança Social");
        }
    };
    C_Fornec.prototype.ValidarGrupo = function () {
        var retorno = false;
        var parametros;
        parametros = {
            codigoGrupo: this.txtGrupoFornecedorContabil.GetText().CNum(),
            empresas: this.lstEmpresa.GetValues()
        };
        if (this.txtGrupoFornecedorContabil.GetText().CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarGrupoEmpresa", parametros);
            if (!retorno) {
                MostrarAlerta('O Grupo Fornecedor Contábil não pertence a(s) empresa(s) selecionada(s)!');
                this.txtGrupoFornecedorContabil.Limpar();
            }
        }
    };
    C_Fornec.prototype.ValidarConta = function () {
        var retorno = false;
        var parametros;
        parametros = {
            codigo: this.txtContaIntegracaoContabil.GetText().CNum(),
            empresas: this.lstEmpresa.GetValues()
        };
        if (this.txtContaIntegracaoContabil.GetText().CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaEmpresa", parametros);
            if (!retorno) {
                MostrarAlerta('A Conta Integração Contábil não pertence a(s) empresa(s) selecionada(s)!');
                this.txtContaIntegracaoContabil.Limpar();
            }
        }
    };
    C_Fornec.prototype.ProcuraEmpresa = function (codEmpresa, lista) {
        var retorno = null;
        if (!lista) {
            lista = [];
        }
        for (var x = 0; x <= lista.length - 1; x++) {
            if (lista[x].Empresa == codEmpresa) {
                retorno = lista[x];
                break;
            }
        }
        return retorno;
    };
    C_Fornec.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        if (!Entidade.PessoaEntity)
            Entidade.PessoaEntity = {};
        this.MudouTipo(Entidade.PessoaEntity['Tipo'], "");
        var cidade = this.txtCidade.GetByIdProcura(Entidade.PessoaEntity['Cidade']);
        var nomeCidade = "";
        if (cidade) {
            nomeCidade = cidade.Descricao;
        }
        this.Mapa.ProcurarEndereco(Entidade.PessoaEntity['Endereco_Nome'], Entidade.PessoaEntity['Numero'], nomeCidade);
        if (!Entidade.PessoaEntity.Campos_Valor) {
            Entidade.PessoaEntity.Campos_Valor = [];
        }
        if (this.lstTipoFornecedor) {
            if (Entidade.Fabricante) {
                this.lstTipoFornecedor.SetValue("FAB");
            }
            else {
                this.lstTipoFornecedor.SetValue("DIS");
            }
        }
        if (this.chkListarPedSemanal) {
            var parametros = {
                codigo: Entidade.Pessoa
            };
            var pedidoSemanal = this.ExecutarFuncaoServerSideSynch("retornaPedidoSemanal", parametros) == "True";
            if (pedidoSemanal) {
                this.chkListarPedSemanal.Checked = true;
                this.txtValorMinimoCompra.Obrigatorio = true;
            }
            else {
                this.chkListarPedSemanal.Checked = false;
                this.txtValorMinimoCompra.Obrigatorio = false;
            }
        }
        if (!Entidade.Empresas) {
            Entidade.Empresas = [];
        }
        if (this.lstEmpresa) {
            var selecionar = [];
            for (var x = 0; x <= Entidade.Empresas.length - 1; x++) {
                selecionar.push("" + Entidade.Empresas[x].Empresa);
            }
            this.lstEmpresa.LimparSelecao();
            this.lstEmpresa.SetValues(selecionar);
        }
        if (!Entidade.Fornecedor_Contatos) {
            Entidade.Fornecedor_Contatos = [];
        }
        if (Entidade.isHotelParceiro) {
            this.tab.AlterarVisibleAba("AbaHotelParceiro", true);
            if (Entidade.Especies && Entidade.Especies.length > 0) {
                var valoresSelecionar = [];
                for (var i = 0; i < Entidade.Especies.length; i++) {
                    valoresSelecionar.push(Entidade.Especies[i].Especie.toString());
                }
                this.lstEspecies.SetValues(valoresSelecionar);
            }
        }
        else {
            this.tab.AlterarVisibleAba("AbaHotelParceiro", false);
        }
        this.ListaRepresentantes = Entidade.Fornecedor_Contatos;
        this.criarEntidadePersonalizados(Entidade);
        if (ValoresSismoura.Sistema_Pais == 607 /* Portugal */) {
            this.txtCodPostal.SetText(Entidade.PessoaEntity.Cep);
            this.txtCodPostalPagamento.SetText(Entidade.PessoaEntity.Cep_Pagamento);
        }
    };
    C_Fornec.prototype.OnDepoisSetEntidade = function (Entidade) {
        if (!Entidade.PessoaEntity)
            Entidade.PessoaEntity = {};
        this.MudouTipo(Entidade.PessoaEntity['Tipo'], "");
        var cidade = this.txtCidade.GetByIdProcura(Entidade.PessoaEntity['Cidade']);
        var nomeCidade = "";
        if (cidade) {
            nomeCidade = cidade.Descricao;
        }
        this.Mapa.ProcurarEndereco(Entidade.PessoaEntity['Endereco_Nome'], Entidade.PessoaEntity['Numero'], nomeCidade);
        if (!Entidade.PessoaEntity.Campos_Valor) {
            Entidade.PessoaEntity.Campos_Valor = [];
        }
        if (this.lstTipoFornecedor) {
            if (Entidade.Fabricante) {
                this.lstTipoFornecedor.SetValue("FAB");
            }
            else {
                this.lstTipoFornecedor.SetValue("DIS");
            }
        }
        if (!Entidade.Empresas) {
            Entidade.Empresas = [];
        }
        if (this.lstEmpresa) {
            var selecionar = [];
            for (var x = 0; x <= Entidade.Empresas.length - 1; x++) {
                selecionar.push("" + Entidade.Empresas[x].Empresa);
            }
            this.lstEmpresa.LimparSelecao();
            this.lstEmpresa.SetValues(selecionar);
        }
        if (!Entidade.Fornecedor_Contatos) {
            Entidade.Fornecedor_Contatos = [];
        }
        this.ListaRepresentantes = Entidade.Fornecedor_Contatos;
        this.criarEntidadePersonalizados(Entidade);
    };
    C_Fornec.prototype.criarEntidadePersonalizados = function (Entidade) {
        var listaOrdem = [];
        if (!Entidade.PessoaEntity.Campos_Valor) {
            Entidade.PessoaEntity.Campos_Valor = [];
        }
        $("[moura-personalizado-campo]").each(function (index, element) {
            var campo = parseInt($(element).attr("moura-personalizado-campo"));
            var encontrado;
            for (var x = 0; x < Entidade.PessoaEntity.Campos_Valor.length; x++) {
                if (Entidade.PessoaEntity.Campos_Valor[x].Campo == campo) {
                    encontrado = Entidade.PessoaEntity.Campos_Valor[x];
                    break;
                }
            }
            if (!encontrado) {
                encontrado = {};
                encontrado.Campo = campo;
                encontrado.Cliente = Entidade.Pessoa;
            }
            listaOrdem.push(encontrado);
        });
        Entidade.PessoaEntity.Campos_Valor = listaOrdem;
    };
    C_Fornec.prototype.MudouTipo = function (newValue, oldValue) {
        if (String.IsNullOrWhiteSpace(newValue)) {
            newValue = "F";
        }
        var entity = this.EntityTela;
        var contribuinte;
        if (ValoresSismoura.Sistema_Pais == 607 /* Portugal */) {
            if (newValue == "F") {
                this.txtCPF.IsCPF = true;
                this.MudarLabelComponente(this.txtNome, "Nome");
                this.MudarLabelComponente(this.txtRG, "Citizen Card");
                this.MudarLabelComponente(this.txtFantasia, "Apelido");
                contribuinte = "9";
            }
            else {
                this.txtCPF.IsCPF = false;
                this.MudarLabelComponente(this.txtNome, "Razão Social");
                this.MudarLabelComponente(this.txtRG, "N° Segurança Social");
                this.MudarLabelComponente(this.txtFantasia, "Fantasia");
                contribuinte = "1";
            }
        }
        else {
            if (newValue == "F") {
                this.txtCPF.IsCPF = true;
                this.MudarLabelComponente(this.txtNome, "Nome");
                this.MudarLabelComponente(this.txtRG, "R.G.");
                this.MudarLabelComponente(this.txtFantasia, "Apelido");
                contribuinte = "9";
            }
            else {
                this.txtCPF.IsCPF = false;
                this.MudarLabelComponente(this.txtNome, "Razão Social");
                this.MudarLabelComponente(this.txtRG, "Inscrição Estadual");
                this.MudarLabelComponente(this.txtFantasia, "Fantasia");
                contribuinte = "1";
            }
        }
        if (entity && entity.PessoaEntity) {
            if (entity.Pessoa == 0) {
                entity.PessoaEntity.Contribuinte_Icms = contribuinte;
            }
        }
        entity.PessoaEntity.Cpf = this.txtCPF.GetText();
        if (this.chkCoteFacil.Checked) {
            this.lstTipoFornecedor.SetValue("FAB");
            this.txtCPF.Obrigatorio = false;
        }
        else {
            this.lstTipoFornecedor.SetValue("DIS");
            this.txtCPF.Obrigatorio = true;
        }
        this.RefreshAngular();
    };
    C_Fornec.prototype.MudarLabelComponente = function (componente, novoTexto) {
        if (!componente) {
            return;
        }
        if (componente.Obrigatorio || componente.ObrigatorioUsuario) {
            novoTexto = "* " + novoTexto;
        }
        componente.SetTextLabelControl(novoTexto);
    };
    C_Fornec.prototype.OnConsultarCEP = function (s, e) {
        if (e.EncontrouEndereco) {
            var entity = this.GetScope().Entity;
            entity.PessoaEntity.Cep = this.txtCep.GetText();
            entity.PessoaEntity.Endereco_Nome = e.Endereco;
            entity.PessoaEntity.Bairro = e.Bairro;
            entity.PessoaEntity.Cidade = e.CidadeCodigo;
            this.GetScope().$applyAsync();
        }
        else {
            if (this.txtCep)
                this.txtCep.Focus();
        }
    };
    C_Fornec.prototype.SelecionarFornecedor = function (s, e) {
        this.mdFornecedoresDuplicados.Hide();
        if (e.data['CodigoFornecedor'] > 0) {
            this.txtCodigo.Procurar(e.data['CodigoFornecedor']);
            return;
        }
        var parametros = {
            codigo: CNum(e.data['Codigo'])
        };
        var pessoa = this.ExecutarFuncaoServerSideSynch('GetPessoaByCodigo', parametros);
        if (pessoa) {
            var entidade = this.GetScope().Entity;
            entidade.PessoaEntity = pessoa;
            this.txtCodigo.PermitirInexistente = true;
            this.SetEntity(entidade);
            this.txtCodigo.PermitirInexistente = false;
            this.RefreshAngular();
        }
        this.mdFornecedoresDuplicados.Hide();
    };
    C_Fornec.prototype.OnTextBoxCpfChange = function () {
        var campo = this.txtCPF.GetText();
        if (String.IsNullOrWhiteSpace(campo)) {
            return;
        }
        var parametros = {
            campo: campo,
            codigoAtual: CNum(this.GetScope().Entity.Pessoa)
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("ValidarCNPJ", parametros);
        if (retorno) {
            MsgBoxJS('Há fornecedores e/ou clientes cadastrados com esse CPF/CNPJ, deseja visualizá-los?', MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRepostaVisualizarFornecedorCPF, this));
        }
    };
    C_Fornec.prototype.OnRepostaVisualizarFornecedorCPF = function (result) {
        if (result.Resultado == MsgBoxResult.No) {
            return;
        }
        var parametros = {
            campo: this.txtCPF.GetText()
        };
        var fornecedoresDuplicados = this.ExecutarFuncaoServerSideSynch("GetFornecedoresByCNPJ", parametros);
        if (fornecedoresDuplicados) {
            this.grdFornecedoresDuplicados.PreencherGrid(fornecedoresDuplicados);
        }
        this.mdFornecedoresDuplicados.Show();
    };
    C_Fornec.prototype.OnTextBoxNomeChange = function () {
        var campo;
        var retorno = false;
        var parametros;
        campo = this.txtNome.GetText();
        if (String.IsNullOrWhiteSpace(campo)) {
            return;
        }
        parametros = {
            campo: campo,
            codigoAtual: ("" + this.GetScope().Entity.Pessoa).CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("ValidarRazaoSocial", parametros);
        if (retorno) {
            MsgBoxJS("Há Fornecedores cadastrados com esse nome, deseja visualiza - los ?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRepostaVisualizarFornecedorNome, this));
        }
    };
    C_Fornec.prototype.OnRepostaVisualizarFornecedorNome = function (result) {
        if (result.Resultado == MsgBoxResult.No) {
            return;
        }
        var parametros = {
            campo: this.txtNome.GetText()
        };
        var fornecedoresDuplicados = this.ExecutarFuncaoServerSideSynch("GetFornecedoresByRazao", parametros);
        if (fornecedoresDuplicados) {
            this.grdFornecedoresDuplicados.PreencherGrid(fornecedoresDuplicados);
        }
        this.mdFornecedoresDuplicados.Show();
    };
    C_Fornec.prototype.OnConsultarCEPPagamento = function (s, e) {
        if (e.EncontrouEndereco) {
            var entity = this.GetScope().Entity;
            entity.PessoaEntity.Endereco_Pagamento = e.Endereco;
            entity.PessoaEntity.Bairro_Pagamento = e.Bairro;
            entity.PessoaEntity.Cidade_Pagamento = e.CidadeCodigo;
            entity.PessoaEntity.Cep_Pagamento = this.txtCepPagamento.GetText();
            this.GetScope().$applyAsync();
        }
        else {
            if (this.txtCepPagamento)
                this.txtCepPagamento.Focus();
        }
    };
    C_Fornec.prototype.OnClickProcurarEndereco = function (s, e) {
        this.ProcurarEndereco(true);
        e.processOnServer = false;
    };
    C_Fornec.prototype.OnClickTracarRota = function (s, e) {
        this.TracarRota(true);
        e.processOnServer = false;
    };
    C_Fornec.prototype.ProcurarEndereco = function (mostrarMensagemAlerta) {
        if (this.Mapa) {
            var endereco = "";
            var numero = "";
            var cidade = "";
            if (this.txtEndereco) {
                endereco = this.txtEndereco.GetText();
            }
            if (this.txtNumero) {
                numero = this.txtNumero.GetText();
            }
            if (this.txtCidade) {
                cidade = this.txtCidade.GetResultado();
            }
            if (String.IsNullOrWhiteSpace(endereco)) {
                MostrarAlerta('Informe o endereço do fornecedor');
                return;
            }
            if (String.IsNullOrWhiteSpace(cidade)) {
                MostrarAlerta('Informe a cidade do fornecedor');
                return;
            }
            this.Mapa.ProcurarEndereco(endereco, numero, cidade);
        }
    };
    C_Fornec.prototype.TracarRota = function (mostrarMensagemAlerta) {
        if (this.Mapa) {
            var endereco = "";
            var numero = "";
            var cidade = "";
            if (this.txtEndereco) {
                endereco = this.txtEndereco.GetText();
            }
            if (this.txtNumero) {
                numero = this.txtNumero.GetText();
            }
            if (this.txtCidade) {
                cidade = this.txtCidade.GetResultado();
            }
            if (String.IsNullOrWhiteSpace(endereco)) {
                MostrarAlerta('Informe o endereço do fornecedor');
                return;
            }
            if (String.IsNullOrWhiteSpace(cidade)) {
                MostrarAlerta('Informe a cidade do fornecedor');
                return;
            }
            var enderecoOrigem = "";
            var numeroOrigem = "";
            var cidadeOrigem = "";
            if (this.hdnEnderecoEmpresa) {
                enderecoOrigem = this.hdnEnderecoEmpresa.value;
            }
            if (this.hdnNumeroEmpresa) {
                numeroOrigem = this.hdnNumeroEmpresa.value;
            }
            if (this.hdnCidadeEmpresa) {
                cidadeOrigem = this.hdnCidadeEmpresa.value;
            }
            if (String.IsNullOrWhiteSpace(enderecoOrigem)) {
                MostrarAlerta('Endereço da empresa padrão não foi informado');
                return;
            }
            if (String.IsNullOrWhiteSpace(cidadeOrigem)) {
                MostrarAlerta('Cidade da empresa padrão não foi informada');
                return;
            }
            this.Mapa.ProcurarDirecoes(enderecoOrigem, numeroOrigem, cidadeOrigem, endereco, numero, cidade);
        }
    };
    C_Fornec.prototype.OnClickAdicionarRepresentante = function (s, e) {
        e.processOnServer = false;
        if (String.IsNullOrWhiteSpace(this.txtContatoRepres.GetText())) {
            MostrarMensagemCampoObrigatorio("Contato");
            return;
        }
        var lista = this.ListaRepresentantes;
        if (!lista) {
            lista = [];
        }
        var representante = {};
        representante.Codigo = lista.length + 1;
        representante.Contato = this.txtContatoRepres.GetText();
        representante.Fone = this.txtFoneRepres.GetText();
        representante.Fone2 = this.txtFone2Repres.GetText();
        representante.Fax = this.txtFaxRepres.GetText();
        representante.Email = this.txtE_Mail_Repres.GetText();
        lista.push(representante);
        this.ListaRepresentantes = lista;
        this.LimparCamposRepresentante();
        this.txtContatoRepres.Focus();
        return false;
    };
    C_Fornec.prototype.LimparCamposRepresentante = function () {
        this.txtContatoRepres.Limpar();
        this.txtFoneRepres.Limpar();
        this.txtFone2Repres.Limpar();
        this.txtFaxRepres.Limpar();
        this.txtE_Mail_Repres.Limpar();
    };
    C_Fornec.prototype.OnClickBotaoImportar = function (s, e) {
        e.processOnServer = false;
        this.mdImportarDados.Show();
        this.txtCliente.Limpar();
        this.txtCliente.Focus();
        return false;
    };
    C_Fornec.prototype.OnClickBotaoImportarCliente = function (s, e) {
        e.processOnServer = false;
        if (this.txtCliente.GetText().CNum() <= 0) {
            MostrarMensagemCampoObrigatorio('Cliente');
            return;
        }
        var cliente = this.GetDadosCliente(this.txtCliente.GetText().CNum());
        if (cliente) {
            this.Limpar();
            var entidade = this.GetScope().Entity;
            entidade.PessoaEntity = cliente.PessoaEntity;
            entidade.Pessoa = cliente.Pessoa;
            this.txtCodigo.PermitirInexistente = true;
            this.SetEntity(entidade);
            this.txtCodigo.PermitirInexistente = false;
        }
        this.mdImportarDados.Hide();
        return false;
    };
    C_Fornec.prototype.GetDadosCliente = function (codigo) {
        var retorno = null;
        var parametros;
        if (codigo <= 0) {
            return retorno;
        }
        parametros = {
            codCliente: codigo
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetDadosCliente", parametros);
        return retorno;
    };
    C_Fornec.prototype.OnDepoisExcluiLinhaGrade = function () {
        var lista = this.ListaRepresentantes;
        var item = 0;
        for (var x = 0; x <= lista.length - 1; x++) {
            item += 1;
            lista[x].Codigo = item;
        }
        this.ListaRepresentantes = lista;
        this.grdRep.Refresh();
    };
    C_Fornec.prototype.PreencherParametros = function () {
        this.txtGrupoFornecedorContabil.LimparParametros();
        this.ValidarGrupo();
        if (this.lstEmpresa && this.txtGrupoFornecedorContabil.Visible) {
            if (this.lstEmpresa.GetValues().length > 0) {
                this.txtGrupoFornecedorContabil.AddParametro("empresas", this.lstEmpresa.GetValues().join(","));
            }
            else {
                this.txtGrupoFornecedorContabil.AddParametro("empresas", "NULL");
            }
        }
    };
    C_Fornec.prototype.ImprimirFicha = function () {
        try {
            if (!this.EntityTela || !this.EntityTela.Pessoa) {
                MostrarAlerta("Informe um fornecedor cadastrado para imprimir");
                return;
            }
            var parametros = {
                codCliente: this.EntityTela.Pessoa,
                codCidade: CNum(this.EntityTela.PessoaEntity.Cidade),
                codCidadePagamento: CNum(this.EntityTela.PessoaEntity.Cidade_Pagamento),
                tituloRelatorio: "Cadastro de Fornecedor"
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PrepararImpressaoFicha", parametros);
            if (!String.IsNullOrWhiteSpace(retorno)) {
                MostrarAlerta(retorno);
            }
            else {
                AbrirReport("~/Report/Fixos/", "FichaFornecedor.REPX");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Fornec.prototype.OnTxtCPFProcurou = function (s, e) {
        this.EntityTela.PessoaEntity.Nome = e.DadosEmpresa.RazaoSocial;
        this.EntityTela.PessoaEntity.Nome_Fantasia = e.DadosEmpresa.NomeFantasia;
        this.EntityTela.PessoaEntity.Cep = e.DadosEmpresa.EnderecoCEP;
        this.EntityTela.PessoaEntity.Endereco_Nome = e.DadosEmpresa.EnderecoLogradouro;
        this.EntityTela.PessoaEntity.Bairro = e.DadosEmpresa.EnderecoBairro;
        this.EntityTela.PessoaEntity.Numero = e.DadosEmpresa.EnderecoNumero;
        this.EntityTela.PessoaEntity.Complemento = e.DadosEmpresa.EnderecoComplemento;
        this.EntityTela.PessoaEntity.Email = e.DadosEmpresa.Email;
        this.EntityTela.PessoaEntity.Cidade = e.DadosEmpresa.CodigoCidadeSismoura;
        this.GetScope().$applyAsync();
    };
    return C_Fornec;
}(MouraPageCadastroAngular));
var c_Fornec = new C_Fornec();
//# sourceMappingURL=C_Fornec.js.map