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
var C_OrcAte = /** @class */ (function (_super) {
    __extends(C_OrcAte, _super);
    function C_OrcAte() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_OrcAte.prototype, "grdServicos", {
        get: function () {
            return window['grdServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "Servico", {
        get: function () {
            var that = this.GetScope()["Servico"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Servico"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "Servicos", {
        get: function () {
            return this.GetScope()["Servicos"];
        },
        set: function (value) {
            this.GetScope()["Servicos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "Produto", {
        get: function () {
            var that = this.GetScope()["Produto"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Produto"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "Produtos", {
        get: function () {
            return this.GetScope()["Produtos"];
        },
        set: function (value) {
            this.GetScope()["Produtos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "txtServico", {
        get: function () {
            return window['txtServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "txtQuantidade", {
        get: function () {
            return window['txtQuantidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "txtValorUnitario", {
        get: function () {
            return window['txtValorUnitario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "txtDesconto", {
        get: function () {
            return window['txtDesconto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "txtProprietarioNome", {
        get: function () {
            return window['txtProprietarioNome_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "txtAnimalNome", {
        get: function () {
            return window['txtAnimalNome_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "lblValorTotal", {
        get: function () {
            return window['lblValorTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "grdProdutos", {
        get: function () {
            return window['grdProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "txtQuantidadeProduto", {
        get: function () {
            return window['txtQuantidadeProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "txtValorUnitarioProduto", {
        get: function () {
            return window['txtValorUnitarioProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "txtDescontoProduto", {
        get: function () {
            return window['txtDescontoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "lblTotalProduto", {
        get: function () {
            return window['lblTotalProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "txtData", {
        get: function () {
            return window['txtDAta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "lblCadastrado", {
        get: function () {
            return window['lblCadastrado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "cboModelo", {
        get: function () {
            return window['cboModelo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "btnImprimir", {
        get: function () {
            return window['btnImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "chkCobrado", {
        get: function () {
            return window['chkCobrado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "cboListaPreco", {
        get: function () {
            return window['cboListaPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "txtCPF", {
        get: function () {
            return window['txtCPF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "txtE_Mail", {
        get: function () {
            return window['txtE_Mail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "txtFone_DDD1", {
        get: function () {
            return window['txtFone_DDD1_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "lstTipo", {
        get: function () {
            return window['lstTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_OrcAte.prototype, "lblValorTotalOrcamento", {
        get: function () {
            return window['lblValorTotalOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_OrcAte.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnComboBoxEmpresaChange, this);
        }
        if (this.txtServico) {
            adicionarEventoMoura(this.txtServico.Procurou, this.OnTxtServicoProcurou, this);
        }
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Procurou, this.OnTxtProdutoProcurou, this);
        }
        if (this.cboListaPreco && this.cboListaPreco.Combo) {
            adicionarEventoDevExpress(this.cboListaPreco.Combo.SelectedIndexChanged, this.OnCboListaPreco_comboBoxChange, this);
            adicionarEventoDevExpress(this.cboListaPreco.Combo.GotFocus, this.OnCboListaPrecoGotFocus, this);
        }
        if (this.txtPet) {
            adicionarEventoMoura(this.txtPet.ProcurouProprietario, this.OnTxtPetProcurouProrprietario, this);
            adicionarEventoMoura(this.txtPet.ProcurouAnimal, this.OnTxtPetProcurouAnimal, this);
            $(this.txtPet.TextBoxProprietario.LabelResultado).css("display", "none");
            $(this.txtPet.TextBoxAnimal.LabelResultado).css("display", "none");
        }
        if (this.txtCodigo && this.txtCodigo.Procurou) {
            adicionarEventoMoura(this.txtCodigo.Procurou, this.OnCodigoProcurou, this);
        }
        if (this.btnImprimir) {
            adicionarEventoMoura(this.btnImprimir.Click, this.OnClickImprimir, this);
        }
        if (this.grdServicos) {
            adicionarEventoMoura(this.grdServicos.Validando, this.OnValidandoItemServico, this);
            adicionarEventoMoura(this.grdServicos.LimpouItem, this.LimparServico, this);
            adicionarEventoMoura(this.grdServicos.ItemAdicionado, this.OnAdicionouDoOrcamento, this);
            adicionarEventoMoura(this.grdServicos.ItemAlterado, this.OnAlterarOrcamento, this);
            adicionarEventoMoura(this.grdServicos.ItemExcluido, this.OnExcluiuDoOrcamento, this);
        }
        if (this.grdProdutos) {
            adicionarEventoMoura(this.grdProdutos.Validando, this.OnValidandoItemProduto, this);
            adicionarEventoMoura(this.grdProdutos.LimpouItem, this.LimparProduto, this);
            adicionarEventoMoura(this.grdProdutos.ItemAdicionado, this.OnAdicionouDoOrcamento, this);
            adicionarEventoMoura(this.grdProdutos.ItemAlterado, this.OnAlterarOrcamento, this);
            adicionarEventoMoura(this.grdProdutos.ItemExcluido, this.OnExcluiuDoOrcamento, this);
        }
        //if (this.txtPet.TextBoxProprietario) {
        //    adicionarEventoMoura(this.txtPet.TextBoxProprietario.TextChanged, this.OnTextBoxProprietarioChange, this);
        //}
    };
    C_OrcAte.prototype.OnComboBoxEmpresaChange = function () {
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            this.PreencherGridDocumentos(this.cboEmpresa.GetValue().toString());
        }
        this.RefreshAngular();
    };
    C_OrcAte.prototype.PreencherGridDocumentos = function (empresa) {
        var _this = this;
        this.cboModelo.ClearItems();
        var parametros = {
            codEmpresa: empresa
        };
        try {
            abrirEspera("Aguarde. Preenchendo Documentos");
            this.ExecutarFuncaoServerSideAsynch("PreencherDocumentosEmpresa", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                for (var x = 0; x < retorno.length; x++) {
                    _this.cboModelo.Combo.AddItem(retorno[x].Descricao, retorno[x].Codigo, "");
                }
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
    C_OrcAte.prototype.OnCboListaPrecoGotFocus = function (s, e) {
        if (this.cboListaPreco && this.cboListaPreco.Combo) {
            this.cboListaPreco.Combo.ShowDropDown();
        }
    };
    C_OrcAte.prototype.MudouTipo = function (newValue, oldValue) {
        if (String.IsNullOrWhiteSpace(newValue)) {
            newValue = "F";
        }
        if (newValue == "F") {
            this.txtCPF.LabelControl.innerText = "* CPF";
            this.txtCPF.IsCPF = true;
        }
        else {
            this.txtCPF.IsCPF = false;
            this.txtCPF.LabelControl.innerText = "* CNPJ";
        }
        this.EntityTela.Cpf = this.txtCPF.GetText();
        this.RefreshAngular();
    };
    C_OrcAte.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGridDocumentos(this.EntityTela.Empresa.toString());
        if (!this.GetScope().MudouTipo) {
            this.GetScope().MudouTipo = $.proxy(this.MudouTipo, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Tipo; }, this.GetScope().MudouTipo);
        }
        if (ValoresSismoura.ConfiguracoesPetshop) {
            this.cboListaPreco.Visible = ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus;
            this.txtValorUnitario.Enabled = !ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus;
            this.txtCPF.Visible = ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus;
            this.txtE_Mail.Visible = ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus;
            this.txtFone_DDD1.Visible = ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus;
            this.lstTipo.Visible = ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus;
            if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
                this.txtServico.SomenteAtivos = true;
            }
        }
        if (!this.GetScope().calcularTotalServico) {
            var that = this;
            this.LimparServico();
            this.GetScope().calcularTotalServico = $.proxy(this.calcularTotalServico, this);
            this.GetScope().$watch(function (scope) { return that.Servico.Cod_Servico; }, this.GetScope().calcularTotalServico);
            this.GetScope().$watch(function (scope) { return that.Servico.Quantidade; }, this.GetScope().calcularTotalServico);
            this.GetScope().$watch(function (scope) { return that.Servico.Valor_Unitario; }, this.GetScope().calcularTotalServico);
            this.GetScope().$watch(function (scope) { return that.Servico.Desconto; }, this.GetScope().calcularTotalServico);
        }
        if (!this.GetScope().calcularTotalProduto) {
            var that = this;
            this.LimparProduto();
            this.GetScope().calcularTotalProduto = $.proxy(this.calcularTotalProduto, this);
            this.GetScope().$watch(function (scope) { return that.Produto.Cod_Produto; }, this.GetScope().calcularTotalProduto);
            this.GetScope().$watch(function (scope) { return that.Produto.Quantidade; }, this.GetScope().calcularTotalProduto);
            this.GetScope().$watch(function (scope) { return that.Produto.Valor_Unitario; }, this.GetScope().calcularTotalProduto);
            this.GetScope().$watch(function (scope) { return that.Produto.Desconto; }, this.GetScope().calcularTotalProduto);
        }
        this.lblValorTotalOrcamento.Text = "0.00";
        this.OnDepoisLimpar(this.GetScope().Entity);
    };
    C_OrcAte.prototype.OnValidandoItemServico = function (s, e) {
        if (e.item.Cod_Servico <= 0) {
            MostrarAlerta("Informe um serviço para ser adicionado");
            e.cancelar = true;
            this.txtServico.Focus();
            return;
        }
        if (e.item.Quantidade <= 0) {
            MostrarAlerta("Informe a quantidade do serviço");
            e.cancelar = true;
            this.txtQuantidade.Focus();
            return;
        }
        if (e.item.Valor_Unitario <= 0) {
            MostrarAlerta("Informe o valor unitário do serviço");
            e.cancelar = true;
            this.txtValorUnitario.Focus();
            return;
        }
        if (e.item.Valor_Unitario <= e.item.Desconto) {
            MostrarAlerta("O desconto não pode ser maior que o valor unitário!");
            e.item.Desconto = 0;
            e.cancelar = true;
            this.txtDesconto.Focus();
            return;
        }
        e.item.Valor_Total = ((e.item.Valor_Unitario * e.item.Quantidade) - e.item.Desconto);
        if (e.index < 0) {
            e.item.TempNomeServico = this.txtServico.GetResultado();
        }
        this.RefreshAngular();
    };
    C_OrcAte.prototype.OnValidandoItemProduto = function (s, e) {
        if (e.item.Cod_Produto <= 0) {
            MostrarAlerta("Informe um produto para ser adicionado");
            e.cancelar = true;
            this.txtProduto.Focus();
            return;
        }
        if (e.item.Quantidade <= 0) {
            MostrarAlerta("Informe a quantidade do produto");
            e.cancelar = true;
            this.txtQuantidadeProduto.Focus();
            return;
        }
        if (e.item.Valor_Unitario <= 0) {
            MostrarAlerta("Informe o valor unitário do produto");
            e.cancelar = true;
            this.txtValorUnitarioProduto.Focus();
            return;
        }
        if (e.item.Valor_Unitario <= e.item.Desconto) {
            MostrarAlerta("O desconto não pode ser maior que o valor unitário!");
            e.cancelar = true;
            e.item.Desconto = 0;
            this.txtDescontoProduto.Focus();
            return;
        }
        e.item.Valor_Total = ((e.item.Valor_Unitario * e.item.Quantidade) - e.item.Desconto);
        if (e.index < 0) {
            e.item.TempNomeProduto = this.txtProduto.GetResultado();
        }
        this.RefreshAngular();
    };
    C_OrcAte.prototype.OnClickImprimir = function (s, e) {
        e.processOnServer = false;
        if (this.txtCodigo.GetText().CNum() <= 0) {
            MostrarAlerta("Informe um orçamento para ser impresso!");
            this.txtCodigo.Focus();
            return;
        }
        else {
            if (this.cboModelo.GetSelectedIndex() != -1) {
                try {
                    var parametros;
                    parametros = {
                        codOrcamento: this.EntityTela.Codigo,
                        codModelo: this.cboModelo.GetValue(),
                        servicos: this.Servicos,
                        produtos: this.Produtos
                    };
                    this.ExecutarFuncaoServerSideSynch("Imprimir", parametros);
                }
                catch (ex) {
                    LogarException(ex);
                }
            }
            else {
                MostrarAlerta("Selecione um modelo para ser impresso!");
                this.cboModelo.Focus();
                return;
            }
        }
        abrirTelaNovaAbaParametros(formataURLRelativa("/EditorHTML.aspx"), []);
    };
    C_OrcAte.prototype.OnCodigoProcurou = function () {
        if (this.txtCodigo.GetText() != "") {
            var parametros;
            //this.txtPet.TextBoxProprietario.Focus();            
            //parametros = {
            //    codOrcamento: this.EntityTela.Usuario_Cadastrou
            //}
            //this.lblCadastrado.Text = this.ExecutarFuncaoServerSideSynch("GetUsuarioCadastrou", parametros); 
            parametros = {
                codOrcamento: this.EntityTela.Codigo
            };
            this.Servicos = this.ExecutarFuncaoServerSideSynch("GetServicos", parametros);
            this.Produtos = this.ExecutarFuncaoServerSideSynch("GetProdutos", parametros);
            //
            //var serv = this.EntityTela.Servicos;
            //var prod = this.EntityTela.Produtos;
            //this.grdServicos.Grid.PreencherGrid(servicos);
            //this.grdProdutos.Grid.PreencherGrid(produtos);
        }
        //var parametros: any;
        //parametros = {
        //    usuarioCadastrou: this.EntityTela.Usuario_Cadastrou
        //}
        //var servicos = this.ExecutarFuncaoServerSideSynch("GetUsuarioCadastrou", parametros);        
    };
    C_OrcAte.prototype.calcularTotalServico = function () {
        var valorUnitario = this.Servico.Valor_Unitario;
        var quantidade = this.Servico.Quantidade;
        var desconto = this.Servico.Desconto;
        this.Servico.Valor_Total = ((valorUnitario - desconto) * quantidade).Format(2);
        this.RefreshAngular();
    };
    C_OrcAte.prototype.calcularTotalProduto = function () {
        var valorUnitario = this.Produto.Valor_Unitario;
        var quantidade = this.Produto.Quantidade;
        var desconto = this.Produto.Desconto;
        this.Produto.Valor_Total = ((valorUnitario * quantidade) - desconto).Format(2);
        this.RefreshAngular();
    };
    C_OrcAte.prototype.OnCboListaPreco_comboBoxChange = function (s, e) {
        try {
            if (this.cboListaPreco && this.cboListaPreco.Combo && this.listaPrecos) {
                if (this.cboListaPreco.Combo.GetSelectedIndex() >= 0 && this.cboListaPreco.Combo.GetSelectedIndex() < this.listaPrecos.length) {
                    this.Servico.Valor_Unitario = this.listaPrecos[this.cboListaPreco.Combo.GetSelectedIndex()].Preco;
                    this.GetScope().$applyAsync();
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_OrcAte.prototype.OnTxtServicoProcurou = function (s, e) {
        var parametros = {
            codigoServico: this.txtServico.GetText()
        };
        var param = {
            codigoServico: this.txtServico.GetText(),
            codigoEmpresa: "" + this.cboEmpresa.GetValue()
        };
        var resultado;
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            var retorno = this.ExecutarFuncaoServerSideSynch("GetInfoServico", param);
            if (retorno) {
                //if (retorno['isServicoZerado'] == "S") {
                //    this.txtValorUnitario.Obrigatorio = false;
                //} else {
                //    this.txtValorUnitario.Obrigatorio = true;
                //}
                this.listaPrecos = retorno['lista_precos'];
            }
        }
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus && this.cboListaPreco && this.cboListaPreco.Combo) {
            this.cboListaPreco.Combo.ClearItems();
            for (var x = 0; x < this.listaPrecos.length; x++) {
                this.cboListaPreco.Combo.AddItem(this.listaPrecos[x].Descricao, this.listaPrecos[x].Codigo, "");
            }
            if (this.cboListaPreco.Combo.GetItemCount() == 1) {
                this.cboListaPreco.Combo.SetSelectedIndex(0);
                resultado = this.listaPrecos[0].Preco;
            }
            else {
                this.cboListaPreco.Combo.SetText("");
                resultado = 0.0;
            }
        }
        else {
            resultado = this.ExecutarFuncaoServerSideSynch("GetValorServico", parametros);
        }
        this.Servico.Valor_Unitario = resultado;
        this.RefreshAngular();
    };
    C_OrcAte.prototype.OnTxtProdutoProcurou = function (s, e) {
        var parametros = {
            codigoProduto: this.txtProduto.GetText()
        };
        var prod = this.ExecutarFuncaoServerSideSynch("GetProduto", parametros);
        if (prod) {
            if (prod.Servico_Pet) {
                MostrarAlerta("Este é um serviço do Pet Shop e não pode ser adicionado na aba Produtos, adicione na aba Serviços");
                this.LimparProduto();
                this.txtProduto.Focus();
                return;
            }
            this.Produto.Valor_Unitario = prod.Preco_Produto; //.Format(ValoresSismoura.CasasDecimaisValor);
            //this.calcularTotalProduto();
        }
        this.RefreshAngular();
    };
    C_OrcAte.prototype.OnTxtPetProcurouProrprietario = function (s, e) {
        this.txtProprietarioNome.Textbox.value = this.txtPet.TextBoxProprietario.GetResultado();
        var parametros = {
            codProprietario: this.txtPet.TextBoxProprietario.GetText().CNum()
        };
        var proprietario = this.ExecutarFuncaoServerSideSynch("getInfoProprietario", parametros);
        if (proprietario) {
            this.txtCPF.Limpar();
            this.txtFone_DDD1.TextBoxDDD.value = '';
            this.txtFone_DDD1.TextBoxTelefone.value = '';
            this.txtE_Mail.Limpar();
            this.EntityTela.Tipo = 'F';
            if (proprietario.Tipo) {
                this.EntityTela.Tipo = proprietario.Tipo;
            }
            if (proprietario.Cpf) {
                this.EntityTela.Cpf = proprietario.Cpf;
            }
            if (proprietario.Email) {
                this.EntityTela.Email = proprietario.Email;
            }
            if (proprietario.ddd) {
                this.EntityTela.Ddd = proprietario.ddd;
            }
            if (proprietario.telefone) {
                this.EntityTela.Telefone = proprietario.telefone;
            }
        }
        this.RefreshAngular();
    };
    C_OrcAte.prototype.OnTxtPetProcurouAnimal = function (s, e) {
        this.txtAnimalNome.Textbox.value = this.txtPet.TextBoxAnimal.GetResultado();
    };
    //protected OnTextBoxDeValorChange() {
    //    this.calcularTotalServico();
    //}
    //protected OnTextBoxDeValorProdutoChange() {
    //    this.calcularTotalProduto();
    //}
    //protected OnTextBoxProprietarioChange() {
    //    this.txtProprietarioNome.Textbox.value = this.txtPet.TextBoxProprietario.GetResultado();
    //}
    C_OrcAte.prototype.OnDepoisLimpar = function (Entity) {
        Entity.Codigo = 0;
        Entity.Data = this.DataServidor();
        Entity.Usuario_Cadastrou = 0;
        Entity.Cod_Proprietario = 0;
        Entity.Nome_Proprietario = "";
        Entity.Cod_Animal = 0;
        Entity.Nome_Animal = "";
        Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        Entity.Usuario_Cadastrou = 0;
        Entity.Tipo = 'F';
        this.cboModelo.SetSelectedIndex(-1);
        //this.txtCodigo.Limpar();
        //this.txtData.Date = new Date;
        this.lblCadastrado.Text = "";
        //this.txtPet.TextBoxProprietario.Limpar();
        //this.txtProprietarioNome.Limpar();
        //this.txtPet.TextBoxAnimal.Limpar();
        //this.txtAnimalNome.Limpar();
        //this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        //Serviço
        this.LimparServico();
        //Produto
        this.LimparProduto();
        //Limpar a lista da grade
        //Serviços
        this.Servicos = [];
        //Produtos
        this.Produtos = [];
        this.lblValorTotalOrcamento.Text = "0,00";
    };
    C_OrcAte.prototype.LimparServico = function () {
        this.Servico.Cod_Servico = 0;
        this.Servico.Quantidade = 1;
        this.Servico.Valor_Unitario = 0;
        this.Servico.Desconto = 0;
        this.Servico.Valor_Total = 0;
        this.RefreshAngular();
    };
    C_OrcAte.prototype.LimparProduto = function () {
        this.Produto.Quantidade = 1;
        this.Produto.Valor_Unitario = 0;
        this.Produto.Desconto = 0;
        this.Produto.Valor_Total = 0;
        this.Produto.Cobrado = true;
        this.RefreshAngular();
    };
    C_OrcAte.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Servicos = this.Servicos;
        this.EntityTela.Produtos = this.Produtos;
        this.EntityTela.Nome_Proprietario = this.txtProprietarioNome.GetText();
        this.EntityTela.Nome_Animal = this.txtAnimalNome.GetText();
        return true;
    };
    C_OrcAte.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherEntidade(this.EntityTela.Codigo.toString());
        return true;
    };
    C_OrcAte.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.PreencherGrades(CNum(this.EntityTela.Codigo));
        this.AtualizaLabelOrcamento();
    };
    C_OrcAte.prototype.PreencherGrades = function (codOrcamento) {
        var parametros = {
            codOrcamento: codOrcamento
        };
        var produtos = this.ExecutarFuncaoServerSideSynch("getProdutos", parametros);
        this.Produtos = produtos;
        var servicos = this.ExecutarFuncaoServerSideSynch("getServicos", parametros);
        this.Servicos = servicos;
    };
    C_OrcAte.prototype.OnAdicionouDoOrcamento = function (s, e) {
        this.AtualizandoLabelOrcamento(e.item.Valor_Total);
    };
    C_OrcAte.prototype.OnAlterarOrcamento = function (s, e) {
        this.AtualizaLabelOrcamento();
    };
    C_OrcAte.prototype.AtualizaLabelOrcamento = function () {
        this.lblValorTotalOrcamento.Text = (this.Produtos.Sum("Valor_Total") + this.Servicos.Sum("Valor_Total")).Format(2);
    };
    C_OrcAte.prototype.OnExcluiuDoOrcamento = function (s, e) {
        this.AtualizandoLabelOrcamento(0 - e.item.Valor_Total);
    };
    C_OrcAte.prototype.AtualizandoLabelOrcamento = function (Valor) {
        this.lblValorTotalOrcamento.Text = (CNum(this.lblValorTotalOrcamento.Text) + Valor).Format(2);
    };
    return C_OrcAte;
}(MouraPageCadastroAngular));
var c_OrcAte = new C_OrcAte();
//# sourceMappingURL=C_OrcAte.js.map