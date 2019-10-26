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
var C_Client = /** @class */ (function (_super) {
    __extends(C_Client, _super);
    function C_Client() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Client.prototype, "DadosAnimais", {
        get: function () {
            return this.grdAni.DataSource;
        },
        set: function (value) {
            this.grdAni.PreencherGrid(value);
            this.grdAni.Refresh();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "btnPreco", {
        get: function () {
            return window['btnPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "txtCPF", {
        get: function () {
            return window['txtCPF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "lstTipo", {
        get: function () {
            return window["lstTipo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "txtRG", {
        get: function () {
            return window['txtRG_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "txtCep", {
        get: function () {
            return window['txtCep_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "txtCodPostal", {
        get: function () {
            return window['txtCodPostal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "txtEndereco", {
        get: function () {
            return window['txtEndereco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "txtComplemento", {
        get: function () {
            return window['txtComplemento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "txtBairro", {
        get: function () {
            return window['txtBairro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "txtNumero", {
        get: function () {
            return window['txtNumero_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "txtCidade", {
        get: function () {
            return window['txtCidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "txtFantasia", {
        get: function () {
            return window['txtFantasia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "txtApelido", {
        get: function () {
            return window['txtApelido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "btnAssinatura", {
        get: function () {
            return window['btnAssinatura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "btnIncluirAnimal", {
        get: function () {
            return window['btnIncluirAnimal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "sgnPessoa", {
        get: function () {
            return window['sgnPessoa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "btnConsultarCliente", {
        get: function () {
            return window['btnConsultarCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "btnCadastrarAnimal", {
        get: function () {
            return window['btnCadastrarAnimal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "cboProfissional", {
        get: function () {
            return window["cboProfissional_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "cboClinica", {
        get: function () {
            return window["cboClinica_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "cboContribuinteICMS", {
        get: function () {
            return window["cboContribuinteICMS_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "grdAni", {
        //get cbpAnimais(): MouraCallBackPanel {
        //    return window['cbpAnimais_Object'];
        //}
        //get grdAnimais(): MouraGridView {
        //    return window['grdAnimais_Object']
        //}
        get: function () {
            return window['grdAni_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "Mapa", {
        get: function () {
            return window['Mapa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "btnProcurarEndereco", {
        get: function () {
            return window['btnProcurarEndereco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "btnTracarRota", {
        get: function () {
            return window['btnTracarRota_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "hdnCodigo", {
        get: function () {
            return $('#hdnCodigo')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "hdnEnderecoEmpresa", {
        get: function () {
            return $('#hdnEnderecoEmpresa')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "urlDescProdCliente", {
        get: function () {
            return $('#urlDescProdCliente')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "hdnCidadeEmpresa", {
        get: function () {
            return $('#hdnCidadeEmpresa')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "hdnNumeroEmpresa", {
        get: function () {
            return $('#hdnNumeroEmpresa')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "btnProdutosContinuos", {
        //get hdnAnimais(): HTMLInputElement {
        //    return <HTMLInputElement> $("#hdnAnimais")[0];
        //}
        get: function () {
            return window['btnProdutosContinuos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "mdProdutosContinuos", {
        get: function () {
            return window['mdProdutosContinuos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "grdProdutosContinuos", {
        get: function () {
            return window['grdProdutosContinuos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "txtAnimal", {
        get: function () {
            return window['txtAnimal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "chkBloquearCrediario", {
        get: function () {
            return window["chkBloquearCrediario_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "optTipo", {
        //get txtFormula(): MouraTextBoxProcura {
        //    return <MouraTextBoxProcura> window['txtFormula_Object'];
        //}
        get: function () {
            return window['optTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "ProdutosContinuos", {
        get: function () {
            return this.GetScope()["ProdutosContinuos"];
        },
        set: function (value) {
            this.GetScope()["ProdutosContinuos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "ProdutoContinuo", {
        get: function () {
            return this.GetScope()["ProdutoContinuo"];
        },
        set: function (value) {
            this.GetScope()["ProdutoContinuo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "cboSexo", {
        get: function () {
            return window['cboSexo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "lblTotalAtendimentos", {
        get: function () {
            return window['lblTotalAtendimentos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "agp1", {
        get: function () {
            return $('#agpC1_Label')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "EnvioSms", {
        get: function () {
            return window['EnvioSms_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "EnvioWhatsApp", {
        get: function () {
            return window['EnvioWhatsApp_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "EnvioEmail", {
        get: function () {
            return window['EnvioEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "txtNome", {
        get: function () {
            return window['txtNome_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "chkConsumidorFinal", {
        get: function () {
            return window['chkConsumidor_Final_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Client.prototype, "lstEmpresasONG", {
        get: function () {
            return window['lstEmpresasONG_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Client.prototype.Init = function () {
        _super.prototype.Init.call(this);
        //if (this.connectionString) {
        //    this.connectionString.Item = "Conectar_Franqueador";
        //    this.connectionString.Valor = "S"
        //}
        adicionarEventoMoura(this.AntesGravar, this.OnAntesGravarCliente, this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        //verifica se encontrou o txtCPF e codigo, pois eles serão utilizados na função
        if (this.txtCPF) {
            adicionarEventoMoura(this.txtCPF.LostFocus, this.consultarCPF, this);
        }
        //if (this.lstTipo) {
        //    adicionarEventoMoura(this.lstTipo.SelectionChanged, this.OnChangeLstTipo, this);
        //}
        if (this.txtCep) {
            adicionarEventoMoura(this.txtCep.PesquisouCEP, this.OnConsultarCEP, this);
        }
        if (this.btnProcurarEndereco) {
            adicionarEventoMoura(this.btnProcurarEndereco.Click, this.OnClickProcurarEndereco, this);
        }
        if (this.btnPreco) {
            adicionarEventoMoura(this.btnPreco.Click, this.OnClickPreco, this);
        }
        if (this.btnTracarRota) {
            adicionarEventoMoura(this.btnTracarRota.Click, this.OnClickTracarRota, this);
        }
        if (this.btnAssinatura) {
            adicionarEventoMoura(this.btnAssinatura.Click, this.OnClickAssinatura, this);
        }
        if (this.sgnPessoa) {
            adicionarEventoMoura(this.sgnPessoa.Salvou, this.OnSalvouAssinatura, this);
        }
        if (this.btnIncluirAnimal) {
            adicionarEventoMoura(this.btnIncluirAnimal.Click, this.OnClickIncluirAnimal, this);
        }
        if (this.grdAni) {
            adicionarEventoMoura(this.grdAni.ClickBotaoLinha, this.OnClickLinhaGrade, this);
            adicionarEventoMoura(this.grdAni.SelecionouLinha, this.OnSelecionouLinhaGrade, this);
        }
        if (this.btnCadastrarAnimal) {
            adicionarEventoMoura(this.btnCadastrarAnimal.Click, this.OnClickCadastrarAnimal, this);
        }
        if (this.dlgTelaModal) {
            adicionarEventoMoura(this.dlgTelaModal.Retornou, this.OnRetornouDlgModal, this);
        }
        if (this.cboClinica) {
            adicionarEventoDevExpress(this.cboClinica.SelectedIndexChanged, this.OnComboBoxClinicaChange, this);
        }
        if (this.btnProdutosContinuos) {
            adicionarEventoMoura(this.btnProdutosContinuos.Click, this.OnClickProdutosContinuos, this);
        }
        if (this.grdProdutosContinuos) {
            adicionarEventoMoura(this.grdProdutosContinuos.SetouItem, this.OnSetouProdutoContinuo, this);
            adicionarEventoMoura(this.grdProdutosContinuos.LimpouItem, this.OnLimpouProdutoContinuo, this);
            adicionarEventoMoura(this.grdProdutosContinuos.Validando, this.OnValidandoProdutoContinuo, this);
        }
        if (this.txtAnimal) {
            adicionarEventoMoura(this.txtAnimal.Procurou, this.OnPesquisouDadosAnimal, this);
        }
        if (this.txtCPF) {
            adicionarEventoMoura(this.txtCPF.Procurou, this.OnTxtCPFProcurou, this);
        }
    };
    C_Client.prototype.OnGravouSucesso = function (s, e) {
        var entidade = this.GetScope().Entity;
        this.CarregarAnimais(entidade.Pessoa);
    };
    C_Client.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouTipo) {
            this.GetScope().MudouTipo = $.proxy(this.MudouTipo, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.PessoaEntity.Tipo; }, this.GetScope().MudouTipo);
        }
        //Recurso usado apenas para Petz.
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            if (!this.GetScope().OnCheckBoxIsOngChanged) {
                this.GetScope().OnCheckBoxIsOngChanged = $.proxy(this.OnCheckBoxIsOngChanged, this);
                this.GetScope().$watch(function (scope) { return scope.Entity.PessoaEntity.IsOng; }, this.GetScope().OnCheckBoxIsOngChanged);
            }
        }
        else {
            this.tab.AlterarVisibleAba("AbaDadosOng", false);
        }
        if (!this.GetScope().MudouTipoProduto) {
            var that = this;
            this.ProdutoContinuo = {};
            this.ProdutoContinuo.Tipo = "P";
            this.GetScope().MudouTipoProduto = $.proxy(this.MudouTipoProduto, this);
            this.GetScope().$watch(function (scope) { return that.ProdutoContinuo.Tipo; }, this.GetScope().MudouTipoProduto);
        }
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.Procurou, this.OnPesquisouEntity, this);
        }
    };
    C_Client.prototype.OnPesquisouEntity = function (s, e) {
        var parametros;
        var pertenceCliente;
        if (this.txtCodigo.GetText().CNum() <= 0) {
            return;
        }
        if (this.GetScope().Entity.PessoaEntity.Empresa_Origem == 0) {
            this.cboEmpresa.SetValue(0);
        }
    };
    C_Client.prototype.OnPesquisouDadosAnimal = function (s, e) {
        var parametros;
        var pertenceCliente;
        if (this.txtAnimal.GetText().CNum() <= 0) {
            return;
        }
        parametros = {
            codAnimal: this.txtAnimal.GetText().CNum(),
            codCliente: this.txtCodigo.GetText().CNum()
        };
        pertenceCliente = this.ExecutarFuncaoServerSideSynch("IsAnimalPertenceCliente", parametros);
        if (!pertenceCliente) {
            MostrarAlerta("O codigo do animal informado não pertence a este Cliente!");
            this.txtAnimal.Limpar();
            $(this.txtAnimal.Textbox).focus();
            return;
        }
        this.ProdutoContinuo.Animal = this.txtAnimal.GetText().CNum();
        this.GetScope().$applyAsync();
    };
    C_Client.prototype.OnSetouProdutoContinuo = function (s, e) {
        var entidade;
        entidade = e.item;
        entidade.Contador = 1;
        if (this.ProdutosContinuos.length > 0) {
            var values = [];
            if (this.ProdutosContinuos.length != 0) {
                for (var x = 0; x < this.ProdutosContinuos.length; x++) {
                    values[x] = this.ProdutosContinuos[x].Id;
                }
            }
            var id = Math.max.apply(Math, values);
            if (e.item.Id == 0) {
                e.item.Id = id + 1;
            }
        }
        else {
            var parametros = {
                codigo: this.txtCodigo.GetText().CNum()
            };
            var id = this.ExecutarFuncaoServerSideSynch("GetByMaxIdProdutoContinuo", parametros);
            if (id == null) {
                id = 1;
                e.item.Id = id;
            }
            else {
                e.item.Id = id.CNum() + 1;
            }
        }
    };
    C_Client.prototype.OnLimpouProdutoContinuo = function (s, e) {
        var entidade;
        entidade = e.item;
        entidade.Tipo = "P";
        entidade.Duracao = 0.0;
        entidade.Produto = 0.0;
        entidade.Animal = 0.0;
    };
    C_Client.prototype.OnValidandoProdutoContinuo = function (s, e) {
        var entidade;
        entidade = e.item;
        if (entidade.Produto <= 0 || entidade.Produto == null || entidade.Produto == undefined) {
            if (this.optTipo.GetValue() == "P") {
                MostrarAlerta("Informe o Produto");
            }
            else {
                MostrarAlerta("Informe a Fórmula");
            }
            e.cancelar = true;
            return;
        }
        if (entidade.Duracao <= 0 || entidade.Duracao == null || entidade.Duracao == undefined) {
            if (this.optTipo.GetValue() == "P") {
                MostrarAlerta("Informe a quantidade de dias de duração do produto!");
            }
            else {
                MostrarAlerta("Informe a quantidade de dias de duração da fórmula!");
            }
            e.cancelar = true;
            return;
        }
        entidade.Animal_Nome = this.txtAnimal.GetResultado();
        entidade.Produto_Nome = this.txtProduto.GetResultado();
        if (this.optTipo.GetValue() == "P") {
            entidade.Tipo_Nome = "Produto";
        }
        else {
            entidade.Tipo_Nome = "Fórmula";
        }
        if (this.ProdutosContinuos && this.ProdutosContinuos.length > 0) {
            for (var x = 0; x < this.ProdutosContinuos.length; x++) {
                if (this.ProdutosContinuos[x].Produto === entidade.Produto) {
                    this.ProdutosContinuos.splice(x, 1);
                }
            }
        }
    };
    C_Client.prototype.OnAntesGravarCliente = function (s, e) {
        var animais = "";
        animais = JSON.stringify(this.DadosAnimais);
        e.ParametrosAdicionais.Parametros.push(this.CriarItemParametro("animais", animais));
    };
    C_Client.prototype.OnComboBoxClinicaChange = function () {
        var parametros;
        var valorRestante;
        parametros = {
            codClinica: this.cboClinica.GetValue(),
        };
        this.itens = this.ExecutarFuncaoServerSideSynch("PreencherComboProfissional", parametros);
        this.cboProfissional.ClearItems();
        for (var x = 0; x < this.itens.length; x++) {
            this.cboProfissional.AddItem(this.itens[x].Descricao, this.itens[x].Codigo, "");
        }
        if (this.cboProfissional.GetItemCount() == 1) {
            this.cboProfissional.SetSelectedIndex(-1);
        }
        else {
            this.cboProfissional.SetText("");
        }
    };
    C_Client.prototype.MudouTipo = function (newValue, oldValue) {
        if (String.IsNullOrWhiteSpace(newValue)) {
            newValue = "F";
        }
        var parametros;
        if (ValoresSismoura.Sistema_Pais == 607 /* Portugal */) {
            if (newValue == "F") {
                this.txtCPF.IsCPF = true;
                this.txtCPF.SetTextLabelControl("NIF");
                this.txtRG.SetTextLabelControl("Citizen Card");
                this.txtFantasia.Visible = false;
                this.txtFantasia.PermitirConfigurarObrigatorio = false;
                this.txtApelido.Visible = true;
                this.txtApelido.PermitirConfigurarObrigatorio = false;
            }
            else {
                this.txtCPF.IsCPF = false;
                this.txtCPF.SetTextLabelControl("NIPC");
                this.txtRG.SetTextLabelControl("N° Segurança Social");
                this.txtApelido.Visible = false;
                this.txtApelido.PermitirConfigurarObrigatorio = false;
                this.txtFantasia.Visible = true;
                this.txtFantasia.PermitirConfigurarObrigatorio = true;
            }
        }
        else {
            if (newValue == "F") {
                this.txtCPF.IsCPF = true;
                this.txtCPF.SetTextLabelControl("CPF");
                this.txtRG.SetTextLabelControl("R.G.");
                this.txtFantasia.Visible = false;
                this.txtFantasia.PermitirConfigurarObrigatorio = false;
                this.txtApelido.Visible = true;
                this.txtApelido.PermitirConfigurarObrigatorio = true;
            }
            else {
                this.txtCPF.IsCPF = false;
                this.txtCPF.SetTextLabelControl("CNPJ");
                this.txtRG.SetTextLabelControl("Inscrição Estadual");
                this.txtApelido.Visible = false;
                this.txtApelido.PermitirConfigurarObrigatorio = false;
                this.txtFantasia.Visible = true;
                this.txtFantasia.PermitirConfigurarObrigatorio = true;
            }
        }
        this.EntityTela.PessoaEntity.Cpf = this.txtCPF.GetText();
        this.RefreshAngular();
    };
    //protected OnChangeLstTipo() {
    //    this.txtCPF.Limpar();
    //    this.txtRG.Limpar();
    //}
    C_Client.prototype.MudouTipoProduto = function (newValue, oldValue) {
        if (String.IsNullOrWhiteSpace(newValue)) {
            newValue = "P";
        }
        if (this.txtProduto) {
            if (newValue == "P") {
                this.txtProduto.SetTextLabelControl("Produto (F2)");
                this.txtProduto.Engine = "Sismoura.Web.View.ProdutoProcura";
                this.txtProduto.Limpar();
            }
            else {
                this.txtProduto.SetTextLabelControl("Fórmula (F2)");
                this.txtProduto.Engine = "Sismoura.Web.View.Farmacia_FormulaProcura";
                this.txtProduto.Limpar();
            }
        }
    };
    C_Client.prototype.consultarCPF = function () {
        var retorno;
        var parametros;
        var msg;
        if (!this.txtCPF.GetText() || this.txtCPF.GetText().trim() == "") {
            return;
        }
        parametros = {
            codCliente: this.txtCodigo.GetText().CNum(),
            cpfCliente: this.txtCPF.GetText()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("ValidarCPF", parametros);
        if (!retorno || retorno == '') {
            return;
        }
        if (retorno.toLowerCase().substring(0, 4) == 'erro' && retorno.indexOf("|") > 0) {
            MsgBoxJS(retorno.split("|")[1], MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(this.OnClicouOKMsgBoxCPFInvalido, this));
        }
        if (retorno.toLowerCase().substring(0, 7) == 'cliente' && retorno.indexOf("|") > 0) {
            //this.hdnCodigo.value = retorno.split("|")[1];
            msg = "Este CPF/CNPJ já está cadastrado para outro cliente: <br />" + retorno.split("|")[1];
            msg += " - " + retorno.split("|")[2];
            msg += "<br /><br />Deseja ver os dados do cliente?";
            MsgBoxJS(msg, MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnClicouOpcaoMsgBoxCPF, this), retorno.split("|")[1]);
        }
        if (retorno.toLowerCase().substring(0, 10) == 'fornecedor' && retorno.indexOf("|") > 0) {
            msg = "Este CPF/CNPJ já está cadastrado para o fornecedor: <br />" + retorno.split("|")[1];
            msg += " - " + retorno.split("|")[2];
            msg += "<br /><br />Deseja torná-lo um cliente?";
            MsgBoxJS(msg, MsgBoxOptions.YesNo, MsgBoxIcon.Info, $.proxy(this.OnClicouOpcaoMsgBoxFornecedorCPF, this), retorno.split("|")[1]);
        }
    };
    C_Client.prototype.OnClicouOpcaoMsgBoxCPF = function (resultado) {
        if (resultado.Resultado == MsgBoxResult.Yes && this.btnConsultarCliente) {
            var codigo = ("" + resultado.Argument).CNum();
            if (codigo > 0) {
                var entidade = this.GetScope().Entity;
                entidade.Pessoa = codigo;
                this.GetScope().$applyAsync();
            }
            //this.btnConsultarCliente.DoClick();
        }
    };
    C_Client.prototype.OnClicouOpcaoMsgBoxFornecedorCPF = function (resultado) {
        if (resultado.Resultado == MsgBoxResult.Yes) {
            var codigo = ("" + resultado.Argument).CNum();
            var parametros;
            if (codigo > 0) {
                parametros = {
                    codCliente: codigo,
                    nomeTela: ValoresSismoura.NomeTela,
                    codUsuario: ValoresSismoura.UsuarioLogado
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("GravarCliente", parametros);
                if (retorno) {
                    this.EntityTela.Pessoa = codigo;
                    this.RefreshAngular();
                }
            }
        }
    };
    C_Client.prototype.OnClicouOKMsgBoxCPFInvalido = function (resultado) {
        this.txtCPF.Textbox.focus();
        var entidade = this.GetScope().Entity;
        entidade.PessoaEntity.Cpf = '';
        this.GetScope().$applyAsync();
    };
    C_Client.prototype.OnConsultarCEP = function (s, e) {
        if (e.EncontrouEndereco) {
            var entidade = this.GetScope().Entity;
            entidade.PessoaEntity.Bairro = e.Bairro;
            entidade.PessoaEntity.Endereco_Nome = e.Endereco;
            entidade.PessoaEntity.Cidade = e.CidadeCodigo;
            entidade.PessoaEntity.Cep = this.txtCep.GetText();
            this.GetScope().$applyAsync();
        }
        else {
            this.txtCep.Limpar();
            this.txtCep.Focus();
        }
    };
    C_Client.prototype.OnClickProcurarEndereco = function (s, e) {
        this.ProcurarEndereco(true);
        e.processOnServer = false;
    };
    C_Client.prototype.OnClickPreco = function (s, e) {
        e.processOnServer = false;
        var entidade = this.GetScope().Entity;
        if (entidade.Pessoa <= 0) {
            MostrarAlerta("Insira um cliente");
            return;
        }
        abrirTelaNovaAbaParametros(formataURLRelativa(this.urlDescProdCliente.value), ["Cliente=" + entidade.Pessoa]);
    };
    C_Client.prototype.ProcurarEndereco = function (mostrarMensagemAlerta) {
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
                MostrarAlerta('Informe o endereço do cliente');
                return;
            }
            if (String.IsNullOrWhiteSpace(cidade)) {
                MostrarAlerta('Informe a cidade do cliente');
                return;
            }
            this.Mapa.ProcurarEndereco(endereco, numero, cidade);
        }
    };
    C_Client.prototype.CarregarAnimais = function (codProprietario) {
        //Estabelecimento = 3 (PetShop). Caso não seja pet, não precisa carregar a grade de animais
        if (ValoresSismoura.Estabelecimento != 3) {
            return;
        }
        var codProp = codProprietario;
        if (!codProp) {
            codProp = 0;
        }
        if (codProp <= 0) {
            this.DadosAnimais = [];
        }
        else {
            var retorno;
            var parametros;
            parametros = {
                codCliente: codProp
            };
            retorno = this.ExecutarFuncaoServerSideSynch("GetDadosAnimais", parametros);
            this.DadosAnimais = retorno;
        }
    };
    C_Client.prototype.CarregarProdutosContinuos = function (codProprietario) {
        var codProp = codProprietario;
        if (!codProp) {
            codProp = 0;
        }
        if (codProp <= 0) {
            this.ProdutosContinuos = [];
        }
        else {
            var retorno;
            var parametros;
            parametros = {
                codCliente: codProp
            };
            retorno = this.ExecutarFuncaoServerSideSynch("GetProdutosContinuos", parametros);
            this.ProdutosContinuos = retorno;
        }
    };
    C_Client.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        if (!Entidade.PessoaEntity.Produtos_Continuos) {
            Entidade.PessoaEntity.Produtos_Continuos = [];
        }
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
        if (!Entidade.PessoaEntity.Produtos_Continuos) {
            Entidade.PessoaEntity.Produtos_Continuos = [];
        }
        this.CarregarAnimais(Entidade.Pessoa);
        this.CarregarProdutosContinuos(Entidade.Pessoa);
        this.criarEntidadePersonalizados(Entidade);
        this.AtualizarTotalAtendimentos();
        this.txtAnimal.AddParametro("proprietario", Entidade.Pessoa.toString());
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            if (Entidade.PessoaEntity.IsOng) {
                this.CarregarEmpresasOng();
            }
        }
        if (ValoresSismoura.Sistema_Pais == 607 /* Portugal */) {
            this.txtCodPostal.SetText(Entidade.PessoaEntity.Cep);
        }
        if (ValoresSismoura.Sistema_Pais == 607 /* Portugal */) {
            this.txtCPF.Enabled = false;
            this.txtNome.Enabled = false;
        }
    };
    C_Client.prototype.CarregarEmpresasOng = function () {
        try {
            var parametros = {
                codOng: this.txtCodigo.GetText().CNum()
            };
            var empresasVinculadasONg = this.ExecutarFuncaoServerSideSynch("GetEmpresasVinculadasONG", parametros);
            if (empresasVinculadasONg && empresasVinculadasONg.length > 0) {
                this.lstEmpresasONG.SetValues(empresasVinculadasONg.map(String));
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_Client.prototype.AtualizarTotalAtendimentos = function () {
        var parametros;
        parametros = {
            codCliente: this.txtCodigo.GetText().CNum()
        };
        this.lblTotalAtendimentos.Text = this.ExecutarFuncaoServerSideSynch("GetTotalAtendimentoByProprietario", parametros);
    };
    C_Client.prototype.OnDepoisSetEntidade = function (Entidade) {
        if (!Entidade.PessoaEntity) {
            Entidade.PessoaEntity = {};
            Entidade.PessoaEntity.Tipo = "F";
        }
        //this.MudouTipo(<string>Entidade.PessoaEntity['Tipo'], "");
        var cidade = this.txtCidade.GetByIdProcura(Entidade.PessoaEntity['Cidade']);
        var nomeCidade = "";
        if (cidade) {
            nomeCidade = cidade.Descricao;
        }
        this.Mapa.ProcurarEndereco(Entidade.PessoaEntity['Endereco_Nome'], Entidade.PessoaEntity['Numero'], nomeCidade);
        if (!Entidade.PessoaEntity.Campos_Valor) {
            Entidade.PessoaEntity.Campos_Valor = [];
        }
        if (!Entidade.PessoaEntity.Produtos_Continuos) {
            Entidade.PessoaEntity.Produtos_Continuos = [];
        }
        this.CarregarAnimais(Entidade.Pessoa);
        this.CarregarProdutosContinuos(Entidade.Pessoa);
        this.criarEntidadePersonalizados(Entidade);
        this.AtualizarTotalAtendimentos();
    };
    C_Client.prototype.criarEntidadePersonalizados = function (Entidade) {
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
    C_Client.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entidade = this.GetScope().Entity;
        if (this.cboSexo && this.cboSexo.Combo) {
            entidade.PessoaEntity.Sexo = this.cboSexo.GetValue();
        }
        if (this.cboContribuinteICMS.GetSelectedIndex() > 0) {
            entidade.PessoaEntity.Contribuinte_Icms = this.cboContribuinteICMS.GetValue().toString();
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.SismouraWeb_LetrasMaiusculas) {
            if (entidade.PessoaEntity.Nome)
                entidade.PessoaEntity.Nome = entidade.PessoaEntity.Nome.toLocaleUpperCase();
            if (entidade.PessoaEntity.Apelido)
                entidade.PessoaEntity.Apelido = entidade.PessoaEntity.Apelido.toLocaleUpperCase().toString();
            if (entidade.PessoaEntity.Nome_Fantasia)
                entidade.PessoaEntity.Nome_Fantasia = entidade.PessoaEntity.Nome_Fantasia.toLocaleUpperCase();
            if (entidade.PessoaEntity.Endereco_Nome)
                entidade.PessoaEntity.Endereco_Nome = entidade.PessoaEntity.Endereco_Nome.toLocaleUpperCase();
            if (entidade.PessoaEntity.Endereco_Nome)
                entidade.PessoaEntity.Endereco_Nome = entidade.PessoaEntity.Endereco_Nome.toLocaleUpperCase();
            if (entidade.PessoaEntity.Complemento)
                entidade.PessoaEntity.Complemento = entidade.PessoaEntity.Complemento.toLocaleUpperCase();
            if (entidade.PessoaEntity.Bairro)
                entidade.PessoaEntity.Bairro = entidade.PessoaEntity.Bairro.toLocaleUpperCase();
            if (entidade.PessoaEntity.Observacao_Endereco)
                entidade.PessoaEntity.Observacao_Endereco = entidade.PessoaEntity.Observacao_Endereco.toLocaleUpperCase();
        }
        if (ValoresSismoura.Sistema_Pais == 607 /* Portugal */) {
            entidade.PessoaEntity.Cpf = this.txtCPF.GetText();
            entidade.PessoaEntity.Cep = this.txtCodPostal.GetText();
        }
        if (entidade.PessoaEntity.Tipo == "F") {
            entidade.PessoaEntity.Nome_Fantasia = "";
        }
        else {
            entidade.PessoaEntity.Apelido = "";
        }
        this.PreencherProdutos(entidade);
        if (!this.EntityTela.PreencheuClasse) {
            this.chkConsumidorFinal.Checked = true;
        }
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            if (this.txtCodigo.GetText().CNum() == 0) {
                MsgBoxJS('O cadastro de novos clientes deve ser realizado no CadPetz, esta tela só deverá ser utilizada para marcar clientes que são ONGs de adoção.', MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
                return false;
            }
            else {
                if (!this.EntityTela.PessoaEntity.IsOng) {
                    MostrarAlerta('Este cliente não foi marcado como uma ONG. Esta tela só poderá ser usada para parametrizar ONGs');
                    return false;
                }
                else {
                    this.EntityTela.PessoaEntity.IsOng = true;
                    this.EntityTela.PessoaEntity.Empresas_Ong = this.lstEmpresasONG.GetValuesNumber();
                    if (!this.EntityTela.PessoaEntity.Empresas_Ong || this.EntityTela.PessoaEntity.Empresas_Ong.length == 0) {
                        MostrarAlerta('Informe as empresas vinculadas a esta ONG na aba: Informações - ONG');
                        return false;
                    }
                }
            }
        }
        return true;
    };
    C_Client.prototype.PreencherProdutos = function (entidade) {
        var produtos = this.ProdutosContinuos;
        var produtosExistentes = entidade.PessoaEntity.Produtos_Continuos;
        entidade.PessoaEntity.Produtos_Continuos = [];
        for (var x = 0; x < produtos.length; x++) {
            var novoProduto = {};
            var produtoGrid;
            for (var y = 0; y < produtosExistentes.length; y++) {
                if (produtosExistentes[y].Id == produtos[x].Id) {
                    novoProduto = produtosExistentes[y];
                    y = produtosExistentes.length;
                }
            }
            produtoGrid = produtos[x];
            if (produtoGrid.Animal == null) {
                produtoGrid.Animal = 0;
            }
            novoProduto.Id = produtoGrid.Id;
            novoProduto.Produto = produtoGrid.Produto;
            novoProduto.Duracao = produtoGrid.Duracao;
            novoProduto.Tipo = produtoGrid.Tipo;
            novoProduto.Animais = produtoGrid.Animal_Nome;
            novoProduto.Cod_Animais = produtoGrid.Animal;
            entidade.PessoaEntity.Produtos_Continuos.push(novoProduto);
        }
    };
    C_Client.prototype.OnDepoisLimpar = function (Entity) {
        Entity.PessoaEntity = {};
        Entity.PessoaEntity.Tipo = "F";
        Entity.PessoaEntity.Contribuinte_Icms = "";
        Entity.PessoaEntity.Bloquear_Crediario = ValoresSismoura.BloquearVendaCrediario;
        Entity.PessoaEntity.Empresa_Origem = ValoresSismoura.EmpresaPadraoUsuario;
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            this.lstEmpresasONG.LimparSelecao();
            Entity.PessoaEntity.Empresas_Ong = [];
        }
        this.ProdutoContinuo = {};
        this.ProdutoContinuo.Tipo = "P";
        if (this.Mapa) {
            this.Mapa.Limpar();
        }
        if (ValoresSismoura.Sistema_Pais == 607 /* Portugal */) {
            this.txtCPF.Enabled = true;
            this.txtNome.Enabled = true;
        }
        this.CarregarAnimais(Entity.Pessoa);
        this.CarregarProdutosContinuos(Entity.Pessoa);
        this.criarEntidadePersonalizados(Entity);
        this.grdProdutosContinuos.Limpar();
        this.chkConsumidorFinal.Checked = false;
        this.txtAnimal.LimparParametros();
        this.txtCodigo.Limpar();
        this.AtualizarTotalAtendimentos();
        this.txtCodPostal.Visible = false;
        if (ValoresSismoura.ConfiguracoesRetaguarda.Sistema_Pais == 607 /* Portugal */) {
            this.txtCep.Visible = false;
            this.txtCep.Obrigatorio = false;
            this.txtCodPostal.Visible = true;
            this.txtCodPostal.Limpar();
        }
        this.GetScope().$applyAsync();
    };
    C_Client.prototype.OnClickTracarRota = function (s, e) {
        this.TracarRota(true);
        e.processOnServer = false;
    };
    C_Client.prototype.OnClickProdutosContinuos = function (s, e) {
        e.processOnServer = false;
        this.mdProdutosContinuos.Show();
        this.grdProdutosContinuos.AtualizarGrid();
    };
    C_Client.prototype.OnClickAssinatura = function (s, e) {
        e.processOnServer = false;
        if (!window['atob']) {
            MostrarAlerta("Navegador não suporta esse recurso");
            return;
        }
        var assinatura = "";
        var entidade;
        entidade = this.GetScope().Entity;
        if (entidade.PessoaEntity.Assinatura) {
            assinatura = ByteArrayToSting64(entidade.PessoaEntity.Assinatura.Assinatura);
        }
        this.sgnPessoa.assinaturaBase64 = assinatura;
        this.sgnPessoa.abrir();
    };
    C_Client.prototype.OnClickIncluirAnimal = function (s, e) {
        e.processOnServer = false;
        var animal = {};
        var lista = this.DadosAnimais;
        animal.Animal_Venda = "N";
        animal.Castrado = "N";
        animal.Chip = "";
        animal.Cod_Especie = null;
        animal.Cod_Raca = null;
        animal.Cod_Proprietario = this.txtCodigo.GetText().CNum();
        animal.Codigo = 0;
        animal.Codigo_Venda = 0;
        animal.Contador = this.DadosAnimais.length + 1;
        animal.Cor = "";
        animal.Data_Cadastro = new Date();
        animal.Data_Obito = null;
        animal.Data_Venda = null;
        animal.Inativo = "N";
        animal.Nasc = null;
        animal.Nome_Animal = "";
        animal.Nome_Pedigree = "";
        animal.Observacao_Exame = "";
        animal.Observacao_Servico = "";
        animal.Pelagem = null;
        animal.Peso = 0;
        animal.Preco_Custo = 0;
        animal.Rga = "";
        animal.Sexo = "";
        animal.Tipo_Pelagem = null;
        animal.Valor = 0;
        animal.Vendido = "N";
        lista.push(animal);
        this.DadosAnimais = lista;
        setTimeout($.proxy(function () { this.grdAni.SetFocusEditCell(this.DadosAnimais.length - 1, "Nome_Animal"); }, this), 200);
    };
    C_Client.prototype.OnSalvouAssinatura = function (s, e) {
        var entidade;
        entidade = this.GetScope().Entity;
        if (!entidade.PessoaEntity.Assinatura) {
            entidade.PessoaEntity.Assinatura = {};
            entidade.PessoaEntity.Assinatura.Pessoa = entidade.Pessoa;
        }
        entidade.PessoaEntity.Assinatura.Assinatura = Sting64ToByteArray(this.sgnPessoa.assinaturaBase64);
    };
    C_Client.prototype.TracarRota = function (mostrarMensagemAlerta) {
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
                MostrarAlerta('Informe o endereço do cliente');
                return;
            }
            if (String.IsNullOrWhiteSpace(cidade)) {
                MostrarAlerta('Informe a cidade do cliente');
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
    C_Client.prototype.OnClickLinhaGrade = function (s, e) {
        if (e.commandName == "plano_vacinacao") {
            var codigo;
            if (e.data) {
                codigo = "" + e.data['Codigo'];
            }
            if (String.IsNullOrWhiteSpace(codigo) || codigo.CNum() <= 0) {
                MostrarAlerta("É necessário gravar as informações!");
                return;
            }
            abrirTelaNovaAbaParametros(formataURLRelativa("/Modulos/Petshop/Vacinas/C_AniPla.aspx"), ["codAnimal=" + codigo]);
        }
    };
    C_Client.prototype.OnSelecionouLinhaGrade = function (s, e) {
        var codigo;
        if (e.data) {
            codigo = "" + e.data['Codigo'];
        }
        if (String.IsNullOrWhiteSpace(codigo) || codigo.CNum() <= 0) {
            MostrarAlerta("O animal ainda não foi gravado no banco de dados!");
            return;
        }
        var parametros = ["codigo=" + codigo];
        this.dlgTelaModal.AbrirTelaModal(formataURLRelativa(URLTela.CadastroDeAnimal), parametros, "");
    };
    C_Client.prototype.OnClickCadastrarAnimal = function (s, e) {
        e.processOnServer = false;
        if (this.txtCodigo.GetText().CNum() <= 0) {
            MostrarAlerta("Cliente ainda não foi cadastrado!");
            return;
        }
        var parametros = [];
        parametros.push("proprietario=" + this.txtCodigo.GetText());
        this.dlgTelaModal.AbrirTelaModal(formataURLRelativa(URLTela.CadastroDeAnimal), parametros, "");
    };
    C_Client.prototype.OnRetornouDlgModal = function (s, e) {
        this.CarregarAnimais(this.txtCodigo.GetText().CNum());
    };
    C_Client.prototype.OnClickEnviarSMS = function () {
        if (!this.EnvioSms) {
            return;
        }
        if (!this.EntityTela || !this.EntityTela.PessoaEntity || !this.EntityTela.Pessoa) {
            MostrarAlerta("Informe um cliente cadastrado para enviar o SMS");
            return;
        }
        if (String.IsNullOrWhiteSpace(this.EntityTela.PessoaEntity.Celular)) {
            MostrarAlerta("Informe o celular do cliente");
            return;
        }
        this.EnvioSms.AbrirClient(ValoresSismoura.NomeTela, ["55" + this.EntityTela.PessoaEntity.Celular.replace(" ", "").replace("-", "")]);
    };
    C_Client.prototype.OnClickEnviarWhatsApp = function () {
        if (!this.EnvioWhatsApp) {
            return;
        }
        if (!this.EntityTela || !this.EntityTela.PessoaEntity || !this.EntityTela.Pessoa) {
            MostrarAlerta("Informe um cliente cadastrado para enviar o SMS");
            return;
        }
        if (String.IsNullOrWhiteSpace(this.EntityTela.PessoaEntity.Celular)) {
            MostrarAlerta("Informe o celular do cliente");
            return;
        }
        this.EnvioWhatsApp.AbrirClient(ValoresSismoura.NomeTela, ["55" + this.EntityTela.PessoaEntity.Celular.replace(" ", "").replace("-", "")]);
    };
    C_Client.prototype.OnClickEnviarEmail = function () {
        if (!this.EnvioEmail) {
            return;
        }
        if (!this.EntityTela || !this.EntityTela.PessoaEntity || !this.EntityTela.Pessoa) {
            MostrarAlerta("Informe um cliente cadastrado para enviar o e-mail");
            return;
        }
        var email = this.EntityTela.PessoaEntity.Email;
        if (String.IsNullOrWhiteSpace(email)) {
            MostrarAlerta("O cliente não possui email cadastrado");
            return;
        }
        this.EnvioEmail.MostrarClient([email], [], "", "");
    };
    C_Client.prototype.OnTxtCPFProcurou = function (s, e) {
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
    C_Client.prototype.OnCheckBoxIsOngChanged = function () {
        this.tab.AlterarVisibleAba("AbaDadosOng", this.EntityTela.PessoaEntity.IsOng);
    };
    return C_Client;
}(MouraPageCadastroAngular));
var c_Client = new C_Client();
//# sourceMappingURL=C_Client.js.map