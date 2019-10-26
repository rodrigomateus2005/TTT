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
var C_Entreg = /** @class */ (function (_super) {
    __extends(C_Entreg, _super);
    function C_Entreg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Entreg.prototype, "txtCodigo", {
        //Entrega
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "txtVenda", {
        get: function () {
            return window['txtVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "txtOrcamento", {
        get: function () {
            return window['txtOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "txtMotorista", {
        get: function () {
            return window['txtMotorista_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "txtPlaca", {
        get: function () {
            return window['txtPlaca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "txtTransportadora", {
        get: function () {
            return window['txtTransportadora_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "txtObservacao", {
        get: function () {
            return window['txtObservacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "cboSituacao", {
        get: function () {
            return window["cboSituacao_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "cboTipo", {
        get: function () {
            return window["cboTipo_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "hdnTipo", {
        get: function () {
            return $('#hdnTipo')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "txtOrdem", {
        get: function () {
            return window['txtOrdem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "txtVolume", {
        get: function () {
            return window['txtVolume_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "Vendas", {
        get: function () {
            return this.GetScope()["Vendas"];
        },
        set: function (value) {
            this.GetScope()["Vendas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "btnCusto", {
        // Modal Custos
        get: function () {
            return window['btnCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "lblCodigo", {
        get: function () {
            return window['lblCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "lblData", {
        get: function () {
            return window['lblData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "lblPlaca", {
        get: function () {
            return window['lblPlaca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "lblMotorista", {
        get: function () {
            return window['lblMotorista_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "mdCusto", {
        get: function () {
            return window['mdCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "btnSalvarDistancia", {
        get: function () {
            return window['btnSalvarDistancia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "txtItem", {
        get: function () {
            return window['txtItem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "txtConta", {
        get: function () {
            return window['txtConta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "txtValor", {
        get: function () {
            return window['txtValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "lblPorcentagemValor", {
        get: function () {
            return window['lblPorcentagemValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "txtObs", {
        get: function () {
            return window['txtObs_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "grdCusto", {
        get: function () {
            return window['grdCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "Custos", {
        get: function () {
            return this.GetScope()["Custos"];
        },
        set: function (value) {
            this.GetScope()["Custos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "btnSalvarCustos", {
        get: function () {
            return window['btnSalvarCustos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "lblValor_Vendas", {
        get: function () {
            return window['lblValor_Vendas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "lblCusto_Entrega", {
        get: function () {
            return window['lblCusto_Entrega_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "lblPorcentagem_Total", {
        get: function () {
            return window['lblPorcentagem_Total_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "mdImportarVendas", {
        //Modal Importar Vendas
        get: function () {
            return window['mdImportarVendas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "btnImportarVendas", {
        get: function () {
            return window['btnImportarVendas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "btnGerarVendas", {
        get: function () {
            return window['btnGerarVendas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "txtVendedor", {
        get: function () {
            return window['txtVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "txtCidade", {
        get: function () {
            return window['txtCidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "chkVendasOrcamento", {
        get: function () {
            return window['chkVendasOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "cboZonaVenda", {
        get: function () {
            return window['cboZonaVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "grdVendas", {
        get: function () {
            return window['grdVendas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "btnOk", {
        get: function () {
            return window['btnOk_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "mdImportarVendasNf", {
        //Modal Importar Vendas NF
        get: function () {
            return window['mdImportarVendasNf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "btnImportarVendasNf", {
        get: function () {
            return window['btnImportarVendasNf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "btnGerarVendasNf", {
        get: function () {
            return window['btnGerarVendasNf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "txtNf", {
        get: function () {
            return window['txtNf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "cboEmpresa", {
        get: function () {
            return $('#cboEmpresa_List')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "cboSerie", {
        get: function () {
            return window['cboSerie_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "grdVendasNf", {
        get: function () {
            return window['grdVendasNf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "btnOkNf", {
        get: function () {
            return window['btnOkNf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "btnImprimir", {
        //Impressão
        get: function () {
            return window['btnImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "btnImprimirProduto", {
        //Imprimir Produtos
        get: function () {
            return window['btnImprimirProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "btnImpressaoCompleta", {
        //Impressão Completa
        get: function () {
            return window['btnImpressaoCompleta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Entreg.prototype, "chkValorImpressao", {
        get: function () {
            return window['chkValorImpressao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Entreg.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.txtVenda) {
            adicionarEventoMoura(this.txtVenda.Procurou, this.OnPesquisouVenda, this);
        }
        if (this.txtOrcamento) {
            adicionarEventoMoura(this.txtOrcamento.Procurou, this.OnPesquisouOrcamento, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.AdicionandoItem, this.OnClickIncluirVenda, this);
            adicionarEventoMoura(this.grid.LimpouItem, this.OnGridLimpouItem, this);
        }
        if (this.cboTipo) {
            adicionarEventoDevExpress(this.cboTipo.SelectedIndexChanged, this.OnComboBoxTipoChange, this);
        }
        if (this.btnCusto) {
            adicionarEventoMoura(this.btnCusto.Click, this.MostrarModalCusto, this);
        }
        if (this.btnSalvarDistancia) {
            adicionarEventoMoura(this.btnSalvarDistancia.Click, this.SalvarDistancia, this);
        }
        if (this.txtItem) {
            adicionarEventoMoura(this.txtItem.TextChanged, this.CarregarItem, this);
        }
        if (this.txtValor) {
            adicionarEventoMoura(this.txtValor.TextChanged, this.AtribuiPorcentagem, this);
        }
        if (this.btnSalvarCustos) {
            adicionarEventoMoura(this.btnSalvarCustos.Click, this.SalvarCusto, this);
        }
        if (this.grdCusto) {
            adicionarEventoMoura(this.grdCusto.AdicionandoItem, this.OnClickIncluirCusto, this);
            adicionarEventoMoura(this.grdCusto.ItemAdicionado, this.OnCustoAdicionado, this);
        }
        if (this.btnImportarVendas) {
            adicionarEventoMoura(this.btnImportarVendas.Click, this.MostrarModalImpVendas, this);
        }
        if (this.btnGerarVendas) {
            adicionarEventoMoura(this.btnGerarVendas.Click, this.GerarVendas, this);
        }
        if (this.btnOk) {
            adicionarEventoMoura(this.btnOk.Click, this.ImportarVendasSelecionadas, this);
        }
        if (this.btnImportarVendasNf) {
            adicionarEventoMoura(this.btnImportarVendasNf.Click, this.MostrarModalImpVendasNf, this);
        }
        if (this.btnGerarVendasNf) {
            adicionarEventoMoura(this.btnGerarVendasNf.Click, this.GerarVendasNf, this);
        }
        if (this.btnOkNf) {
            adicionarEventoMoura(this.btnOkNf.Click, this.ImportarVendasNfSelecionadas, this);
        }
        if (this.btnImprimir) {
            adicionarEventoMoura(this.btnImprimir.Click, this.Imprimir, this);
        }
        if (this.btnImprimirProduto) {
            adicionarEventoMoura(this.btnImprimirProduto.Click, this.ImprimirProduto, this);
        }
        if (this.btnImpressaoCompleta) {
            adicionarEventoMoura(this.btnImpressaoCompleta.Click, this.ImprimirCompleta, this);
        }
        if (this.mdImportarVendas) {
            adicionarEventoMoura(this.mdImportarVendas.Fechou, this.OnFechouMdImportarVendas, this);
        }
        if (this.mdImportarVendasNf) {
            adicionarEventoMoura(this.mdImportarVendasNf.Fechou, this.OnFechouMdImportarVendasNf, this);
        }
    };
    C_Entreg.prototype.OnAntesGravarEntrega = function (s, e) {
        var vendas = "";
        vendas = JSON.stringify(this.Vendas);
        e.ParametrosAdicionais.Parametros.push(this.CriarItemParametro("vendas", vendas));
    };
    C_Entreg.prototype.OnPesquisouVenda = function (s, e) {
        this.hdnTipo.value = "0";
    };
    C_Entreg.prototype.OnPesquisouOrcamento = function (s, e) {
        this.hdnTipo.value = "1";
    };
    C_Entreg.prototype.OnComboBoxTipoChange = function () {
        var tipo = this.cboTipo.GetValue();
        if (tipo == 1) {
            this.txtOrcamento.Visible = true;
            this.txtVenda.Visible = false;
            if (this.txtVenda.GetText().CNum() > 0) {
                this.txtVenda.Limpar();
            }
        }
        else {
            this.txtOrcamento.Visible = false;
            if (this.txtOrcamento.GetText().CNum() > 0) {
                this.txtOrcamento.Limpar();
            }
            this.txtVenda.Visible = true;
        }
    };
    C_Entreg.prototype.CarregarVenda = function (codVenda, tipo, ordem, volume) {
        if (codVenda <= 0) {
            this.Vendas = [];
        }
        else {
            var retorno = void 0;
            var parametros = void 0;
            parametros = {
                codVenda: codVenda,
                tipo: tipo,
                ordem: ordem,
                volume: volume
            };
            retorno = this.ExecutarFuncaoServerSideSynch("GetDadosVenda", parametros);
            return retorno;
        }
    };
    C_Entreg.prototype.AtribuiPorcentagem = function () {
        var porcentagem = 0;
        var totalVenda = 0;
        for (var x = 0; x < this.Vendas.length; x++) {
            totalVenda += this.Vendas[x].Valor;
        }
        if (totalVenda == 0) {
            porcentagem = (this.txtValor.GetText().CNum() * 100) / 1;
        }
        else {
            porcentagem = (this.txtValor.GetText().CNum() * 100) / totalVenda;
        }
        this.lblPorcentagemValor.Text = porcentagem.Format(4);
    };
    C_Entreg.prototype.OnClickIncluirCusto = function (s, e) {
        if (this.txtConta.GetText().CNum() <= 0) {
            MostrarAlerta("Informe a Conta Contábil!");
            e.cancelar = true;
            return;
        }
        if (this.txtValor.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o Valor!");
            e.cancelar = true;
            return;
        }
        var custo = e.item;
        for (var x = 0; x < this.Custos.length; x++) {
            //if (custo.Cod_Conta_Contabil == this.Custos[x].Cod_Conta_Contabil) {
            this.Custos[x].Valor = custo.Valor;
            this.Custos[x].Porcentagem = custo.Porcentagem;
            this.Custos[x].Obs = custo.Obs;
            if (this.Custos[x].Id == 0) {
                this.Custos[x].Id = this.Custos[x - 1].Id + 1;
            }
            // e.cancelar = true;
            //return;
            //}
        }
    };
    C_Entreg.prototype.OnCustoAdicionado = function (s, e) {
        var entidade = e.item;
        entidade.Conta_Contabil = this.txtConta.GetResultado();
        entidade.Porcentagem = this.lblPorcentagemValor.Text.CNum();
        var values = [];
        //Não deixar incluir quando os valores forem iguais.
        for (var x = 0; x < this.Custos.length; x++) {
            if (this.Custos[x].Item == null || this.Custos[x].Item == undefined) {
                this.Custos[x].Item = 0;
            }
            else {
                values[x] = this.Custos[x].Item;
            }
        }
        if (values.length > 0) {
            entidade.Item = Math.max.apply(Math, values) + 1;
        }
        else {
            entidade.Item = 1;
        }
        this.lblPorcentagemValor.Text = "";
        this.CalculaLabels();
    };
    C_Entreg.prototype.OnGridLimpouItem = function (s, e) {
        var ven = e.item;
        ven.Tipo = this.hdnTipo.value;
        ven.Ordem = 0;
        ven.Volume = 0;
    };
    C_Entreg.prototype.OnClickIncluirVenda = function (s, e) {
        if ((this.txtVenda.GetText().CNum() || this.txtOrcamento.GetText().CNum()) > 0 && this.txtOrdem.GetText().CNum() > 0 && this.txtVolume.GetText().CNum() > 0) {
            var entidade = void 0;
            var venda = e.item;
            for (var x = 0; x < this.Vendas.length; x++) {
                if (venda.Venda == this.Vendas[x].Venda) {
                    MostrarAlerta("Venda já adicionada na entrega.");
                    e.cancelar = true;
                    return;
                }
            }
            if (this.cboTipo.GetValue() == 1) {
                entidade = this.CarregarVenda(this.txtOrcamento.GetText().CNum(), this.cboTipo.GetSelectedIndex(), this.txtOrdem.GetText().CNum(), this.txtVolume.GetText().CNum());
            }
            else {
                entidade = this.CarregarVenda(this.txtVenda.GetText().CNum(), this.cboTipo.GetSelectedIndex(), this.txtOrdem.GetText().CNum(), this.txtVolume.GetText().CNum());
            }
            venda.Venda = entidade.Venda;
            venda.Situacao = this.cboSituacao.GetText();
            venda.Volume = entidade.Volume;
            venda.Cliente = entidade.Cliente;
            venda.Cnpj = entidade.Cnpj;
            venda.Vendedor = entidade.Vendedor;
            venda.Valor = entidade.Valor;
            venda.Endereco = entidade.Endereco;
            venda.Bairro = entidade.Bairro;
            venda.Cidade = entidade.Cidade;
            venda.Cep = entidade.Cep;
            venda.Ordem = entidade.Ordem;
            venda.Zona_de_Venda = entidade.Zona_de_Venda;
            venda.Telefone = entidade.Telefone;
            venda.Tipo = entidade.Tipo;
            venda.Condicao_Pagamento = entidade.Condicao_Pagamento;
            //venda.Vencimentos = entidade.Telefone;
            venda.Documento_Bancario = entidade.Documento_Bancario;
            venda.NFe = entidade.NFe;
        }
        else {
            MostrarAlerta("Por favor informe o código da venda, ordem e volume corretamente.");
            e.cancelar = true;
        }
    };
    C_Entreg.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entidade = this.GetScope().Entity;
        entidade.Situacao = this.cboSituacao.GetValue();
        if (this.txtData.Date == null) {
            MostrarAlerta("Por favor, informe uma data!");
            return false;
        }
        if (this.txtMotorista.GetText().CNum() <= 0) {
            MostrarAlerta("Por favor, informe um motorista!");
            return false;
        }
        if (entidade.Situacao <= 0 || entidade.Situacao == undefined || entidade.Situacao == null) {
            MostrarAlerta("Por favor, informe uma situação!");
            return false;
        }
        this.PreencherGrupos(entidade);
        this.PreencherCustos(entidade);
        return true;
    };
    C_Entreg.prototype.PreencherGrupos = function (entidade) {
        var vendas = this.Vendas;
        var vendasExistentes = entidade.Entrega_Venda;
        entidade.Entrega_Venda = [];
        for (var x = 0; x < vendas.length; x++) {
            var novaVenda = {};
            var vendaGrid = void 0;
            if (!vendasExistentes)
                vendasExistentes = [];
            if (vendasExistentes[x]) {
                if (vendasExistentes[x].Id > 0) {
                    novaVenda = vendasExistentes[x];
                    //x = vendasExistentes.length;
                }
            }
            //for (let y = 0; y < vendasExistentes.length; y++) {
            //    if (vendasExistentes[y].Id > 0) {
            //        novaVenda = vendasExistentes[y];
            //        y = vendasExistentes.length;
            //    }
            //}
            vendaGrid = vendas[x];
            novaVenda.Volume = vendaGrid.Volume;
            novaVenda.Ordem = vendaGrid.Ordem;
            if (vendaGrid.Tipo != "O") {
                novaVenda.Venda = vendaGrid.Venda;
                novaVenda.Orcamento = 0;
            }
            else {
                novaVenda.Venda = 0;
                novaVenda.Orcamento = vendaGrid.Venda;
            }
            entidade.Entrega_Venda.push(novaVenda);
        }
    };
    C_Entreg.prototype.PreencherCustos = function (entidade) {
        var custos = this.Custos;
        var custosExistentes = entidade.Entrega_Custo;
        entidade.Entrega_Custo = [];
        for (var x = 0; x < custos.length; x++) {
            var novoCusto = {};
            var custoGrid = void 0;
            if (!custosExistentes)
                custosExistentes = [];
            for (var y = 0; y < custosExistentes.length; y++) {
                if (custosExistentes[y].Id == custos[x].Id) {
                    novoCusto = custosExistentes[y];
                    y = custosExistentes.length;
                }
            }
            custoGrid = custos[x];
            novoCusto.Item = custoGrid.Item;
            novoCusto.Conta_Contabil = custoGrid.Cod_Conta_Contabil;
            novoCusto.Valor = custoGrid.Valor;
            novoCusto.Porcentagem = custoGrid.Porcentagem;
            novoCusto.Obs = custoGrid.Obs;
            entidade.Entrega_Custo.push(novoCusto);
        }
    };
    C_Entreg.prototype.OnGravouSucesso = function (s, e) {
        this.cboTipo.SetValue("0");
        this.cboSituacao.SetSelectedIndex(0);
    };
    C_Entreg.prototype.OnExcluiuSucesso = function (s, e) {
    };
    C_Entreg.prototype.OnDepoisLimpar = function (Entity) {
        Entity.Data = new Date();
        Entity.Situacao = 1;
        this.cboSituacao.SetSelectedIndex(0);
        this.hdnTipo.value = "0";
        this.cboTipo.SetValue(0);
        if (this.txtVenda.GetText().CNum() > 0) {
            this.txtVenda.Limpar();
        }
        this.txtVenda.Visible = true;
        if (this.txtOrcamento.GetText().CNum() > 0) {
            this.txtOrcamento.Limpar();
        }
        this.txtOrcamento.Visible = false;
        this.txtOrdem.SetText("");
        this.txtVolume.SetText("");
        this.Vendas = [];
        this.Custos = [];
        this.chkValorImpressao.Check.checked = false;
    };
    C_Entreg.prototype.LimparModalImpVendas = function () {
        this.txtPeriodo.Iniciar();
        this.txtVendedor.Limpar();
        this.txtCidade.Limpar();
        this.chkVendasOrcamento.Check.checked = false;
        this.cboZonaVenda.SetSelectedIndex(0);
        this.grdVendas.PreencherGrid(null);
        this.grid.Limpar();
    };
    C_Entreg.prototype.LimparModalImpVendasNf = function () {
        this.txtNf.SetText("0");
        this.cboSerie.LimparSelecao();
        this.grdVendasNf.PreencherGrid(null);
        this.grid.Limpar();
    };
    C_Entreg.prototype.CarregarCusto = function (codEntrega) {
        var retorno;
        var parametros;
        parametros = {
            codEntrega: codEntrega
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetCustos", parametros);
        return retorno;
    };
    C_Entreg.prototype.MostrarModalCusto = function (s, e) {
        e.processOnServer = false;
        if (this.txtCodigo.GetText().CNum() > 0) {
            var entidade = this.CarregarCusto(this.txtCodigo.GetText().CNum());
            this.Custos = entidade;
            this.grdCusto.Grid.PreencherGrid(this.Custos);
            this.lblCodigo.Text = this.txtCodigo.GetText();
            this.lblData.Text = this.txtData.Date.FormataData();
            this.lblPlaca.Text = this.txtPlaca.GetText();
            this.lblMotorista.Text = this.txtMotorista.GetResultado();
            this.CalculaLabels();
            this.mdCusto.Show();
        }
        else {
            MostrarAlerta("Por favor, selecione uma entrega para adicionar os seus custos.");
        }
    };
    C_Entreg.prototype.CalculaLabels = function () {
        var totalVenda = 0;
        for (var x = 0; x < this.Vendas.length; x++) {
            totalVenda += this.Vendas[x].Valor;
        }
        this.lblValor_Vendas.Text = totalVenda.Format(2);
    };
    C_Entreg.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        //this.cboSituacao.SetValue(Entidade.Situacao);
        if (!Entidade.Entrega_Venda) {
            Entidade.Entrega_Venda = [];
        }
        var parametros = {
            codEntrega: Entidade.Codigo
        };
        var entregaVendas = this.ExecutarFuncaoServerSideSynch("CarregarEntrega", parametros);
        this.Vendas = entregaVendas;
    };
    C_Entreg.prototype.CarregarItem = function () {
        if (this.txtItem.GetText().CNum() > 0) {
            var parametros = {
                codEntrega: this.txtCodigo.GetText().CNum(),
                codItem: this.txtItem.GetText().CNum()
            };
            var item = this.ExecutarFuncaoServerSideSynch("CarregarItem", parametros);
            if (item) {
                this.txtConta.Procurar(item.Conta_Contabil);
                this.txtValor.SetText(item.Valor);
                this.txtObs.SetText(item.Valor);
                this.AtribuiPorcentagem();
            }
            else {
                MostrarAlerta("Item não encontrado.");
                this.txtItem.SetText("");
                this.txtConta.SetText("");
                this.txtValor.SetText("");
                this.lblPorcentagemValor.Text = "";
                this.txtObs.SetText("");
            }
        }
    };
    C_Entreg.prototype.SalvarDistancia = function () {
        this.ClicarGravar();
    };
    C_Entreg.prototype.SalvarCusto = function () {
        this.ClicarGravar();
    };
    C_Entreg.prototype.MostrarModalImpVendas = function (s, e) {
        e.processOnServer = false;
        this.mdImportarVendas.Show();
        this.grdVendas.AjustarWidth();
    };
    C_Entreg.prototype.GerarVendas = function (s, e) {
        e.processOnServer = false;
        var retorno;
        var parametros;
        parametros = {
            dataInicio: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
            dataFim: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
            codVendedor: this.txtVendedor.GetText().CNum(),
            codCidade: this.txtCidade.GetText().CNum(),
            vendaOrcamento: this.chkVendasOrcamento.Check.checked,
            codZonaVenda: this.cboZonaVenda.GetValue()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("ImportarVendas", parametros);
        this.grdVendas.PreencherGrid(retorno);
    };
    C_Entreg.prototype.ImportarVendasSelecionadas = function (s, e) {
        e.processOnServer = false;
        var vendasSelecionadas = this.grdVendas.GetSelectedRowsData;
        if (vendasSelecionadas.length <= 0) {
            MostrarAlerta("Por favor, selecione ao menos uma venda!");
            return;
        }
        var codigosVendas = [];
        for (var x = 0; x < vendasSelecionadas.length; x++) {
            if (vendasSelecionadas[x].Volume <= 0) {
                MostrarAlerta("Por favor, informe o Volume de cada venda selecionada!");
                return;
            }
            if (this.Vendas.length > 0) {
                if (vendasSelecionadas[x].Codigo == this.Vendas[x].Venda) {
                    MostrarAlerta("Venda <b>" + this.Vendas[x].Venda.toString() + "</b> já importada!");
                    return;
                }
            }
            codigosVendas[x] = vendasSelecionadas[x].Codigo;
        }
        var listaRetorno;
        var parametros;
        parametros = {
            codigosVendas: codigosVendas
        };
        listaRetorno = this.ExecutarFuncaoServerSideSynch("GetVendasInCodigos", parametros);
        var ordem = this.Vendas.length + 1;
        for (var x = 0; x < listaRetorno.length; x++) {
            listaRetorno[x].Volume = vendasSelecionadas[x].Volume;
            listaRetorno[x].Ordem = ordem;
            this.Vendas.push(listaRetorno[x]);
            ordem++;
        }
        this.grid.AtualizarGrid();
        this.mdImportarVendas.Hide();
    };
    C_Entreg.prototype.MostrarModalImpVendasNf = function (s, e) {
        e.processOnServer = false;
        this.mdImportarVendasNf.Show();
        this.grdVendasNf.AjustarWidth();
    };
    C_Entreg.prototype.GerarVendasNf = function (s, e) {
        e.processOnServer = false;
        var codNf = this.txtNf.GetText().CNum();
        var codEmpresa = this.cboEmpresa.value.CNum();
        if (codNf <= 0) {
            MostrarAlerta("Por favor, informe a Nota Fiscal.");
            return;
        }
        if (codEmpresa <= 0) {
            MostrarAlerta("Por favor, informe a empresa.");
            return;
        }
        var retorno;
        var parametros;
        var serie = this.cboSerie.GetValue();
        if (serie <= 0 || serie == null || serie == undefined) {
            serie = 0;
        }
        parametros = {
            codNf: codNf,
            codEmpresa: codEmpresa,
            codSerie: serie
        };
        retorno = this.ExecutarFuncaoServerSideSynch("ImportarVendasNf", parametros);
        if (retorno.length <= 0) {
            MostrarAlerta("Nenhuma venda foi encontrada com os filtros selecionados.");
            return;
        }
        this.grdVendasNf.PreencherGrid(retorno);
    };
    C_Entreg.prototype.ImportarVendasNfSelecionadas = function (s, e) {
        e.processOnServer = false;
        var vendasSelecionadas = this.grdVendasNf.GetSelectedRowsData;
        if (vendasSelecionadas.length <= 0) {
            MostrarAlerta("Por favor, selecione ao menos uma venda!");
            return;
        }
        var codigosVendas = [];
        for (var x = 0; x < vendasSelecionadas.length; x++) {
            if (vendasSelecionadas[x].Volume <= 0) {
                MostrarAlerta("Por favor, informe o Volume de cada venda selecionada!");
                return;
            }
            if (this.Vendas.length > 0) {
                if (vendasSelecionadas[x].Codigo == this.Vendas[x].Venda) {
                    MostrarAlerta("Venda <b>" + this.Vendas[x].Venda.toString() + "</b> já importada!");
                    return;
                }
            }
            codigosVendas[x] = vendasSelecionadas[x].Codigo;
        }
        var listaRetorno;
        var parametros;
        parametros = {
            codigosVendas: codigosVendas
        };
        listaRetorno = this.ExecutarFuncaoServerSideSynch("GetVendasInCodigos", parametros);
        var ordem = this.Vendas.length + 1;
        for (var x = 0; x < listaRetorno.length; x++) {
            listaRetorno[x].Volume = vendasSelecionadas[x].Volume;
            listaRetorno[x].Ordem = ordem;
            listaRetorno[x].Nfe = this.txtNf.GetText();
            listaRetorno[x].NFe = this.txtNf.GetText();
            this.Vendas.push(listaRetorno[x]);
            ordem++;
        }
        this.grid.AtualizarGrid();
        this.mdImportarVendasNf.Hide();
    };
    C_Entreg.prototype.Imprimir = function (s, e) {
        if (!this.txtCodigo.GetText().CNum()) {
            MostrarAlerta("Por favor, selecione uma entrega para impressão.");
            e.processOnServer = false;
        }
    };
    C_Entreg.prototype.ImprimirProduto = function (s, e) {
        if (!this.txtCodigo.GetText().CNum()) {
            MostrarAlerta("Por favor, selecione uma entrega para impressão.");
            e.processOnServer = false;
        }
    };
    C_Entreg.prototype.ImprimirCompleta = function (s, e) {
        if (!this.txtCodigo.GetText().CNum()) {
            MostrarAlerta("Por favor, selecione uma entrega para impressão.");
            e.processOnServer = false;
        }
    };
    C_Entreg.prototype.OnFechouMdImportarVendas = function (s, e) {
        this.LimparModalImpVendas();
        this.OnComboBoxTipoChange();
    };
    C_Entreg.prototype.OnFechouMdImportarVendasNf = function (s, e) {
        this.LimparModalImpVendasNf();
        this.OnComboBoxTipoChange();
    };
    return C_Entreg;
}(MouraPageCadastroAngular));
var c_Entreg = new C_Entreg();
//# sourceMappingURL=C_Entreg.js.map