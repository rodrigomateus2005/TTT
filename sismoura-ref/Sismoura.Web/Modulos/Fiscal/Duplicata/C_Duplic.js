//interface IMouraScopeDuplicatas extends IMouraScope<SiSMoura.Core.Entity.Venda> {
//    Servico: SiSMoura.Core.Entity.VendaRetorno;
//    Item: SiSMoura.Core.Entity.FiscalNFProdutoRetorno;
//}
//class C_Duplic extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Fiscal_Duplicata>{
//    get Vendas(): any[] {
//        if (!this.GetScope()['Vendas']) {
//            this.GetScope()['Vendas'] = [];
//        }
//        return this.GetScope()['Vendas'];
//    }
//    set Vendas(value: any[]) {
//        this.GetScope()['Vendas'] = value;
//    }
//    get lblNome(): MouraLabel {
//        return window['lblNome_Object'];
//    }
//    get lblEndereco(): MouraLabel {
//        return window['lblEndereco_Object'];
//    }
//    get lblCidade(): MouraLabel {
//        return window['lblCidade_Object'];
//    }
//    get lblEstado(): MouraLabel {
//        return window['lblEstado_Object'];
//    }
//    get lblCPF_CNPJ(): MouraLabel {
//        return window['lblCPF_CNPJ_Object'];
//    }
//    get lblRG_IE(): MouraLabel {
//        return window['lblRG_IE_Object'];
//    }
//    get lblCEP(): MouraLabel {
//        return window['lblCEP_Object'];
//    }
//    get lblBairro(): MouraLabel {
//        return window['lblBairro_Object'];
//    }
//    get lblTelefone(): MouraLabel {
//        return window['lblTelefone_Object'];
//    }
//    get lblValorExtenso(): MouraLabel {
//        return window['lblValorExtenso_Object'];
//    }
//    get lblVendedorV(): MouraLabel {
//        return window['lblVendedorV_Object'];
//    }
//    get lblDataV(): MouraLabel {
//        return window['lblDataV_Object'];
//    }
//    get lblValorV(): MouraLabel {
//        return window['lblValorV_Object'];
//    }
//    get lblValorRecebidoV(): MouraLabel {
//        return window['lblValorRecebidoV_Object'];
//    }
//    get lblClienteV(): MouraLabel {
//        return window['lblClienteV_Object'];
//    }
//    get lblParcelasV(): MouraLabel {
//        return window['lblParcelasV_Object'];
//    }
//    get lblDataNF(): MouraLabel {
//        return window['lblDataNF_Object'];
//    }
//    get lblValorNF(): MouraLabel {
//        return window['lblValorNF_Object'];
//    }
//    get lblClienteNF(): MouraLabel {
//        return window['lblClienteNF_Object'];
//    }
//    get btnGerarDuplicata(): MouraButton {
//        return window['btnGerarDuplicata_Object'];
//    }
//    get btnOkV(): MouraButton {
//        return window['btnOk_Object'];
//    }
//    get btnCancelarV(): MouraButton {
//        return window['btnCancelar_Object'];
//    }
//    get btnGerarV(): MouraButton {
//        return window['btnGerar_Object'];
//    }
//    get btnBuscarNF(): MouraButton {
//        return window['btnBuscar_Object'];
//    }
//    get btnOkNF(): MouraButton {
//        return window['btnOkNF_Object'];
//    }
//    get btnCancelarNF(): MouraButton {
//        return window['btnGerarNF_Object'];
//    }
//    get btnGerarNF(): MouraButton {
//        return window['btnGerarNF_Object'];
//    }
//    get Grid(): MouraGridViewJS {
//        return window['Grid_Object'];
//    }
//    get GridVenda(): MouraGridViewJS {
//        return window['Grid_Object'];
//    }
//    get GridNotaFiscal(): MouraGridViewJS {
//        return window['GridNotaFiscal_Object'];
//    }   
//    get txtEmissao(): MouraTextBoxData {
//        return window['txtEmissao_Object'];
//    }
//    get txtVenda(): MouraTextBoxProcura {
//        return window['txtVenda_Object'];
//    }
//    get txtCliente(): MouraTextBoxProcura {
//        return window['txtCliente_Object'];
//    }   
//    get txtValorFatura(): MouraTextBox {
//        return window['txtValorFatura_Object'];
//    }     
//    get txtParcela(): MouraTextBox {
//        return window['txtParcela_Object'];
//    } 
//    get txtValorParcela(): MouraTextBox {
//        return window['txtValorParcela_Object'];
//    }
//    get txtVencimento(): MouraTextBoxData {
//        return window['txtVencimento_Object'];
//    }
//    get txtAte(): MouraTextBoxData {
//        return window['txtAte_Object'];
//    }
//    get txtFatura(): MouraTextBox {
//        return window['txtFatura_Object'];
//    }
//    get txtDuplicata(): MouraTextBox {
//        return window['txtDuplicata_Object'];
//    }
//    get txtDesconto(): MouraTextBox {
//        return window['txtDesconto_Object'];
//    }
//    get txtSobre(): MouraTextBox {
//        return window['txtSobre_Object'];
//    }
//    get txtControle(): MouraTextBox {
//        return window['txtControle_Object'];
//    }
//    get txtCondicoes(): MouraTextBox {
//        return window['txtCondicoes_Object'];
//    }
//    get txtDataInicialV(): MouraTextBoxData {
//        return window['txtDataInicialV_Object'];
//    }
//    get txtDataFinalV(): MouraTextBoxData {
//        return window['txtDataFinalV_Object'];
//    }
//    get txtDataInicialNF(): MouraTextBoxData {
//        return window['txtDataInicialNF_Object'];
//    }
//    get txtDataFinalNF(): MouraTextBoxData {
//        return window['txtDataFinalNF_Object'];
//    }
//    get txtClienteNF(): MouraTextBoxProcura {
//        return window['txtClienteNF_Object'];
//    }
//    get txtClienteV(): MouraTextBoxProcura {
//        return window['txtClienteV_Object'];
//    }
//    get txtCodNF(): MouraTextBoxProcura {
//        return window['txtCodNF_Object'];
//    }
//    get txtCep(): MouraTextBoxCep {
//        return window['txtCep_Object'];
//    }
//    get txtCodVenda(): MouraTextBoxProcura {
//        return window['txtCodVenda_Object'];
//    }    
//    get cboSerie(): MouraComboBox {
//        return window['cboSerie_Object'];
//    }
//    get mdGerarDuplicata(): MouraModal {
//        return window['mdGerarDuplicata_Object'];
//    }
//    protected Init() {
//        super.Init();
//        if (this.btnGerarDuplicata) {
//            adicionarEventoDevExpress(this.btnGerarDuplicata.Botao.Click, this.OnClickBotaoGerarDuplicata, this);
//        }
//        if (this.btnOkV) {
//            adicionarEventoDevExpress(this.btnOkV.Botao.Click, this.OnClickBotaoOkV, this);
//        }
//        if (this.btnCancelarV) {
//            adicionarEventoDevExpress(this.btnCancelarV.Botao.Click, this.OnClickBotaoCancelarV, this);
//        }
//        if (this.btnGerarV) {
//            adicionarEventoDevExpress(this.btnGerarV.Botao.Click, this.OnClickBotaoGerarV, this);
//        }
//        if (this.btnBuscarNF) {
//            adicionarEventoDevExpress(this.btnBuscarNF.Botao.Click, this.OnClickBotaoBuscarNF, this);
//        }
//        if (this.btnOkNF) {
//            adicionarEventoDevExpress(this.btnOkNF.Botao.Click, this.OnClickBotaoOkNF, this);
//        }
//        if (this.btnCancelarNF) {
//            adicionarEventoDevExpress(this.btnCancelarNF.Botao.Click, this.OnClickBotaoCancelarNF, this);
//        }
//        if (this.btnGerarNF) {
//            adicionarEventoDevExpress(this.btnGerarNF.Botao.Click, this.OnClickBotaoGerarNF, this);
//        }
//        if (this.txtClienteV) {
//            adicionarEventoMoura(this.txtClienteV.Procurou, this.OnPesquisouDadosCliente, this);
//        }
//        if (this.txtCodVenda) {
//            adicionarEventoMoura(this.txtCodVenda.Procurou, this.OnCodVendaProcurou, this);
//        }
//        if (this.Grid) {
//            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnSelecionouLinha, this);
//        }
//    }
//    public OnPageLoad(): void {
//        super.OnPageLoad();
//        this.LimparCampos();
//        this.PreencherGrade();
//    }
//    protected OnPesquisouDadosCliente() {
//        if (this.txtClienteV.GetText().CNum() == 0) {
//            return;
//        }
//        var parametros: any = {
//            codCliente: this.EntityTela.Cliente
//        }
//        abrirEspera("Aguarde, carregando os dados do cliente");
//        this.ExecutarFuncaoServerSideAsynch(
//            "GetDadosCliente",
//            parametros,
//            (d) => {
//                try {
//                    var retorno: any = GetRetornoAJAX(d);
//                    fecharEspera();
//                    if (!retorno) {
//                        MostrarAlerta("Ocorreu um erro ao obter os dados do cliente");
//                        MostrarAlerta("Cliente não encontrado!");
//                        return;
//                    }
//                    this.lblNome.Text = retorno.Nome;
//                    this.lblEndereco.Text = retorno.Endereco;
//                    this.lblCidade.Text = retorno.Cidade;
//                    this.lblEstado.Text = retorno.Estado;
//                    this.lblCPF_CNPJ.Text = retorno.CPF_CNPJ;
//                    this.lblRG_IE.Text = retorno.RG_IE;
//                    this.lblCEP.Text = retorno.CEP;
//                    this.lblBairro.Text = retorno.Bairro;
//                    this.lblTelefone.Text = retorno.Telefone;
//                    this.lblValorExtenso.Text = retorno.ValorExtenso;
//                    this.RefreshAngular();
//                } catch (ex) {
//                    fecharEspera();
//                    LogarException(ex);
//                }
//            },
//            (erro) => {
//                fecharEspera();
//                LogarException(erro);
//            },
//            this
//        );
//    }
//    //    abrirEspera("Aguarde, carregando os dados da nota fiscal");
//    //    this.ExecutarFuncaoServerSideAsynch(
//    //        "GetInformacoesEntrada",
//    //        parametros,
//    //        (d) => {
//    //            try {
//    //                var retorno: any = GetRetornoAJAX(d);
//    //                fecharEspera();
//    //                if (!retorno) {
//    //                    MostrarAlerta("Ocorreu um erro ao obter os dados da nota fiscal");
//    //                    return;
//    //                }
//    //                this.lblChaveAcessoCompra.Text = retorno.ChaveAcesso;
//    //                this.lblQtdeProdCompra.Text = retorno.QuantidadeItens;
//    //                this.lblCnpjCompra.Text = retorno.Fornecedor.CPF;
//    //                this.lblRazaoSocialCompra.Text = retorno.Fornecedor.Nome;
//    //                this.lblTotalProdutosCompra.Text = retorno.TotalProdutos;
//    //                this.lblTotalNFCompra.Text = retorno.TotalNota;
//    //                this.ProdutosCompra = retorno.Produtos;
//    //                this.ServicosCompra = retorno.Servicos;
//    //                this.FornecedorCompra = retorno.Fornecedor;
//    //                this.RefreshAngular();
//    //            } catch (ex) {
//    //                fecharEspera();
//    //                LogarException(ex);
//    //            }
//    //        },
//    //        (erro) => {
//    //            fecharEspera();
//    //            LogarException(erro);
//    //        },
//    //        this
//    //    );
//    //}
//    protected OnCodVendaProcurou() {
//        try {
//            debugger;
//            //if (this.txtCodVenda.GetText().CNum() == 0) {
//            //    return;
//            //}
//            //var parametros: any = {}
//            //var retorno: SiSMoura.Core.Entity.Venda = this.ExecutarFuncaoServerSideSynch("GetInformacoesVenda", parametros);
//            //if (retorno) {
//            //    this.Venda = retorno;
//            //    this.GetScope().$applyAsync();
//            //}
//            if (this.txtCodVenda.GetText().CNum() == 0) {
//                return;
//            }
//            var parametros: any = {
//                codVenda: this.txtCodVenda.GetText().CNum()
//            }
//            var retorno = this.ExecutarFuncaoServerSideSynch("GetInformacoesVenda", parametros);
//            if (!retorno) {
//                MostrarAlerta("Venda não encontrada!");
//                return;
//            } else {
//                this.lblVendedorV.Text = retorno.Venda.Vendedor;
//                this.lblDataV.Text = retorno.Venda.Data;
//                this.lblValorV.Text = retorno.Venda.Valor_Final;
//                //this.lblValorRecebidoV.Text = retorno.Venda.Valor_Recebido;
//                this.lblClienteV.Text = retorno.Venda.Nome_Cliente;
//                //this.lblParcelasV.Text = retorno.Venda.Parcela;
//            }
//        } catch (ex) {
//            LogarException(ex);
//        }
//    }
//    //protected OnCodVendaProcurou() {
//    //    debugger;
//    //    if (this.txtCodVenda.GetText().CNum() == 0) {
//    //        return;
//    //    }
//    //    var parametros: any = {
//    //        codVenda: this.txtCodVenda.GetText().CNum()
//    //    }
//    //    abrirEspera("Aguarde, carregando os dados da venda");
//    //    this.ExecutarFuncaoServerSideAsynch(
//    //        "GetInformacoesVenda",
//    //        parametros,
//    //        (d) => {
//    //            try {
//    //                var retorno: any = GetRetornoAJAX(d);
//    //                fecharEspera();
//    //                if (!retorno) {
//    //                    MostrarAlerta("Venda não encontrada!");
//    //                    return;
//    //                }
//    //                this.lblVendedorV.Text = retorno.Venda.Vendedor;
//    //                this.lblDataV.Text = retorno.Venda.Data;
//    //                this.lblValorV.Text = retorno.Venda.Valor_Final;
//    //                this.lblValorRecebidoV.Text = retorno.Valor_Recebido;
//    //                this.lblClienteV.Text = retorno.Venda.Nome_Cliente;
//    //                this.lblParcelasV.Text = retorno.Parcela;
//    //                this.RefreshAngular();
//    //            } catch (ex) {
//    //                fecharEspera();
//    //                LogarException(ex);
//    //            }
//    //        },
//    //        (erro) => {
//    //            fecharEspera();
//    //            LogarException(erro);
//    //        },
//    //        this
//    //    );
//    //}
//    public OnSelecionouLinha(e: any, s: MouraGridViewJSClickBotaoLinhaEventArgs) {
//        this.PreencherEntidade("" + s.rowKey);
//    }
//    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Fiscal_Duplicata) {
//        try {
//            super.OnDepoisBuscarExistente(Entidade);
//            this.GetVendas(Entidade);
//        } catch (ex) {
//            LogarException(ex);
//        }
//    }
//    protected GetVendas(Entidade: SiSMoura.Core.Entity.Fiscal_Duplicata) {
//        try {
//            let parametros: any;
//            parametros = {
//                codCliente: Entidade.Cliente,
//                valorFatura: Entidade.Valor,
//                Serie: Entidade.Serie_Nfp
//            }
//            seriesEmpresa = this.ExecutarFuncaoServerSideSynch('GetVendas', parametros);
//        } catch (ex) {
//            LogarException(ex);
//        }
//    }
//    protected OnDepoisGravar() {
//        super.OnDepoisGravar();
//        this.PreencherGrade();
//        return true;
//    }
//    protected PreencherGrade() {
//        try {
//            var parametros: any;
//            parametros = {}
//            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
//            this.Grid.PreencherGrid(cad);
//        } catch (ex) {
//            LogarException(ex);
//        }
//    }
//    protected OnClickBotaoGerarDuplicata(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs) {
//        e.processOnServer = false;
//        if (this.mdGerarDuplicata && this.mdGerarDuplicata.ModalDialog) {
//            this.mdGerarDuplicata.ModalDialog.Show();
//        }
//        return false;
//    }
//    protected OnClickBotaoBuscarNF(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs) {
//        e.processOnServer = false;
//        //this.preencherAnilhas();
//    }
//    protected preencherAnilhas() {
//        //var parametros: any = {
//        //    codProduto: this.Item.Codigo_Produto,
//        //    descricao: this.txtBuscaMicrochip.GetText()
//        //}
//        //var listaAnilhas = this.ExecutarFuncaoServerSideSynch("GetListaAnilhas", parametros);
//        //if (listaAnilhas && (listaAnilhas.length > 0 || this.txtBuscaMicrochip.GetText() != '')) {
//        //    if (this.ProdutoAnilhas == null || this.ProdutoAnilhas.length == 0) {
//        //        this.lblTotalProduto.Text = this.Item.Quantidade.toString().FormatNumber(0);
//        //        this.mdAnilha.ModalDialog.Show();
//        //        var listaAdicionada: SiSMoura.Core.Entity.Fiscal_Nf_Produto_Anilha[] = [];
//        //        if (listaAnilhas) {
//        //            for (var x = 0; x < this.ProdutosNota.length; x++) {
//        //                for (var y = 0; y < this.ProdutosNota[x].ProdutoAnilhas.length; y++) {
//        //                    listaAdicionada.push(this.ProdutosNota[x].ProdutoAnilhas[y]);
//        //                }
//        //            }
//        //            var novaLista: SiSMoura.Core.Entity.Fiscal_Nf_Produto_Anilha[] = [];
//        //            for (var x = 0; x < listaAnilhas.length; x++) {
//        //                var adicionar: boolean = true;
//        //                for (var y = 0; y < listaAdicionada.length; y++) {
//        //                    if (listaAnilhas[x].CodAnilha == listaAdicionada[y].CodAnilha) {
//        //                        adicionar = false;
//        //                    }
//        //                }
//        //                if (adicionar == true) {
//        //                    novaLista.push(listaAnilhas[x])
//        //                }
//        //            }
//        //            this.grdMicrochip.PreencherGrid(novaLista);
//        //            this.grdMicrochip.LimparSelecao();
//        //            this.GetScope().$apply();
//        //        }
//        //    }
//        //} else {
//        //    this.preencheuAnilha = true;
//        //}
//    }
//    protected OnClickBotaoCancelarV(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs) {
//        e.processOnServer = false;
//        this.mdGerarDuplicata.Hide();
//    }
//    protected OnClickBotaoCancelarNF(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs) {
//        e.processOnServer = false;
//        this.mdGerarDuplicata.Hide();
//    }
//    protected OnClickBotaoOkV(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs) {
//        e.processOnServer = false;
//        if (!this.txtCodVenda) {
//            MostrarAlerta("Informe a venda!");
//            return;
//        }
//        //var x;
//        //var contas: SiSMoura.Core.Entity.FiscalNFPagamentoRetorno[] = this.ContasGeradas;
//        //var lista: SiSMoura.Core.Entity.FiscalNFPagamentoRetorno[] = [];
//        //var ref: SiSMoura.Core.Entity.FiscalNFPagamentoRetorno = <any>{};
//        //for (x = 0; x < contas.length; ++x) {
//        //    ref = <SiSMoura.Core.Entity.FiscalNFPagamentoRetorno>{};
//        //    ref.Conta_Contabil = this.txtContaContabil.GetText().CNum();
//        //    ref.Conta_Corrente = this.cboContaCorrente.Combo.GetValue().CNum();
//        //    ref.Documento_Mercantil = this.cboDocumentoMercantilReceber.GetValue();
//        //    ref.Numero_Documento = contas[x].Numero_Documento;
//        //    ref.Origem = "NF";
//        //    ref.Parcela = contas[x].Parcela;
//        //    ref.Valor = contas[x].Valor;
//        //    ref.Vencimento = contas[x].Vencimento;
//        //    lista.push(ref);
//        //}
//        //this.Faturas = lista;
//        //this.txtParcela.Limpar();
//        //this.txtDiasVencimento.Limpar();
//        //this.txtContaContabil.Limpar();
//        //this.mdCobranca.Hide();
//        return false;
//    }
//    protected OnClickBotaoOkNF(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs) {
//        e.processOnServer = false;
//        if (!this.txtCodNF) {
//            MostrarAlerta("Informe a Nota Fiscal!");
//            return;
//        }
//        //if (String.IsNullOrWhiteSpace(this.cboDocumentoMercantilReceber.GetText())) {
//        //    return;
//        //}
//        //var x;
//        //var contas: SiSMoura.Core.Entity.FiscalNFPagamentoRetorno[] = this.ContasGeradas;
//        //var lista: SiSMoura.Core.Entity.FiscalNFPagamentoRetorno[] = [];
//        //var ref: SiSMoura.Core.Entity.FiscalNFPagamentoRetorno = <any>{};
//        //for (x = 0; x < contas.length; ++x) {
//        //    ref = <SiSMoura.Core.Entity.FiscalNFPagamentoRetorno>{};
//        //    ref.Conta_Contabil = this.txtContaContabil.GetText().CNum();
//        //    ref.Conta_Corrente = this.cboContaCorrente.Combo.GetValue().CNum();
//        //    ref.Documento_Mercantil = this.cboDocumentoMercantilReceber.GetValue();
//        //    ref.Numero_Documento = contas[x].Numero_Documento;
//        //    ref.Origem = "NF";
//        //    ref.Parcela = contas[x].Parcela;
//        //    ref.Valor = contas[x].Valor;
//        //    ref.Vencimento = contas[x].Vencimento;
//        //    lista.push(ref);
//        //}
//        //this.Faturas = lista;
//        //this.txtParcela.Limpar();
//        //this.txtDiasVencimento.Limpar();
//        //this.txtContaContabil.Limpar();
//        //this.mdCobranca.Hide();
//        return false;
//    }
//    protected PreencherGradeVenda() {
//        this.Vendas = this.ExecutarFuncaoServerSideSynch("GetCadastradosVendas", <any>{});
//        this.RefreshAngular();
//    }
//    protected OnClickBotaoGerarV(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs) {
//        e.processOnServer = false;
//        let parametros: any;
//        if (!this.ValidarCamposObrigatorios()) {
//            return;
//        }
//        try {
//            parametros = {
//                dataInicial: this.txtDataInicialV.Date,
//                dataFinal: this.txtDataFinalV.Date,
//                codCliente: this.EntityTela.Cliente
//            }
//            abrirEspera("");
//            this.ExecutarFuncaoServerSideAsynch(
//                "PreencherGridVenda",
//                parametros,
//                (d: any) => {
//                    fecharEspera();
//                    var retorno = GetRetornoAJAX(d);
//                    if (!retorno) {
//                        MostrarAlerta("Venda não encontrada!");
//                        return;
//                    } else {
//                        this.GridVenda.PreencherGrid(retorno);
//                    }
//                },
//                (erro: JQueryXHR) => {
//                    fecharEspera();
//                    LogarException(erro);
//                },
//                this
//            );
//        } catch (ex) {
//            fecharEspera();
//            LogarException(ex);
//        }   
//    }
//    protected OnClickBotaoGerarNF(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs) {
//        e.processOnServer = false;
//        //if (this.NFe != null && this.NFe.Situacao != null) {
//        //    if (this.NFe.Situacao.toUpperCase() == "AUTORIZADA" || this.NFe.Situacao.toUpperCase() == "CANCELADA") {
//        //        MostrarAlerta("Essa nota não pode ser alterada pois já esta com a situação " + this.NFe.Situacao.toUpperCase());
//        //        return;
//        //    }
//        //}
//        //var parametros: any;
//        //parametros = {
//        //    empresa: this.GetScope().Entity.Empresa
//        //    , dataInicial: this.txtDataInicialV.Date
//        //    , dataFinal: this.txtDataFinalV.Date
//        //    , tipoRelacao: this.cboTipoRelacao.GetValue()
//        //    , vendaInicial: this.txtVendaInicial.GetText().CNum()
//        //    , vendaFinal: this.txtVendaFinal.GetText().CNum()
//        //}
//        //abrirEspera("Aguarde, gerando a relação de vendas...")
//        //this.ExecutarFuncaoServerSideAsynch(
//        //    "GerarVendas",
//        //    parametros,
//        //    (d: SiSMoura.Core.Entity.FiscalNFVendaRetorno[]) => {
//        //        var retorno: SiSMoura.Core.Entity.FiscalNFVendaRetorno[] = GetRetornoAJAX(d);
//        //        this.RelacaoVendas = retorno;
//        //        fecharEspera();
//        //    },
//        //    (erro: any) => {
//        //        fecharEspera();
//        //        LogarExceptionAjax(erro);
//        //    },
//        //    this);
//        return false;
//    }
//    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Fiscal_Duplicata) {
//        super.OnDepoisLimpar(Entity);
//        this.LimparCampos();
//    }
//    protected LimparCampos() {
//        var data: Date = new Date();
//        this.txtEmissao.Date = data;
//        this.txtVenda.SetText("");    
//        this.txtCliente.SetText("");
//        this.txtValorFatura.SetText("");
//        this.txtParcela.SetText("");
//        this.txtValorParcela.SetText("");
//        this.txtVencimento.Date = data;
//        this.txtAte.Date = data;       
//        this.txtFatura.SetText("");
//        this.txtDuplicata.SetText("");
//        this.txtDesconto.SetText("");
//        this.txtSobre.SetText("");
//        this.txtControle.SetText("");
//        this.txtCondicoes.SetText("");
//        this.txtDataInicialV.Date = data;
//        this.txtDataFinalV.Date = data;
//        //this.txtDataInicialNF.Date = data;
//        this.txtDataFinalNF.Date = data;
//        this.cboSerie.SetSelectedIndex(0);
//        //this.txtCep.SetText("");
//        //this.txtClienteNF.SetText("");
//        //this.txtClienteV.SetText("");
//        //this.txtCodVenda.SetText("");
//    }
//}
//var c_Duplic = new C_Duplic();
//# sourceMappingURL=C_Duplic.js.map