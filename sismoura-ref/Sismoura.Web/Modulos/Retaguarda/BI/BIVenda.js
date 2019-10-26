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
var BIVenda = /** @class */ (function (_super) {
    __extends(BIVenda, _super);
    function BIVenda() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.BIVENDA = "BIVenda";
        _this.BICOMPRAS = "BICompras";
        _this.BICONTASRECEBER = "ContasReceber";
        _this.BICONTASRECEBIDAS = "ContasRecebidas";
        _this.BICONTASPAGAR = "ContasPagar";
        _this.BICONTASPAGAS = "ContasPagas";
        _this.BIATENDIMENTOPET = "AtendimentosPet";
        _this.dadosGrade = [];
        return _this;
    }
    Object.defineProperty(BIVenda.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIVenda.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIVenda.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIVenda.prototype, "grdBI", {
        get: function () {
            return window['grdBI_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIVenda.prototype, "cboTipoBI", {
        get: function () {
            return window['cboTipoBI_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIVenda.prototype, "mdVenda", {
        get: function () {
            return window['mdVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIVenda.prototype, "grdVenda", {
        get: function () {
            return window['grdVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIVenda.prototype, "mdCompra", {
        get: function () {
            return window['mdCompra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIVenda.prototype, "grdCompra", {
        get: function () {
            return window['grdCompra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIVenda.prototype, "mdAtendimento", {
        get: function () {
            return window['mdAtendimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIVenda.prototype, "grdAtendimento", {
        get: function () {
            return window['grdAtendimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIVenda.prototype, "mdReceber", {
        get: function () {
            return window['mdReceber_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIVenda.prototype, "grdReceber", {
        get: function () {
            return window['grdReceber_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIVenda.prototype, "mdRecebido", {
        get: function () {
            return window['mdRecebido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIVenda.prototype, "grdRecebido", {
        get: function () {
            return window['grdRecebido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIVenda.prototype, "mdPagar", {
        get: function () {
            return window['mdPagar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIVenda.prototype, "grdPagar", {
        get: function () {
            return window['grdPagar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIVenda.prototype, "mdPago", {
        get: function () {
            return window['mdPago_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BIVenda.prototype, "grdPago", {
        get: function () {
            return window['grdPago_Object'];
        },
        enumerable: true,
        configurable: true
    });
    BIVenda.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    BIVenda.prototype.Init = function () {
        _super.prototype.Init.call(this);
        //var dataInicial = new Date().addMonths(-12);
        //dataInicial = dataInicial.firstDayOfMonth();
        //this.txtPeriodo.textBoxCalendarioInicio.SetDate(dataInicial);
        //var dataFinal = new Date().addMonths(12);
        //dataFinal = dataFinal.lastDayOfMonth()
        //this.txtPeriodo.textBoxCalendarioFim.SetDate(dataFinal);          
        if (this.cboTipoBI) {
            adicionarEventoMoura(this.cboTipoBI.SelectedItemChanged, this.OnAlterouTipoBI, this);
        }
        if (this.grdBI) {
            adicionarEventoMoura(this.grdBI.CellClick, this.OnCellClick, this);
        }
        if (this.grdVenda) {
            adicionarEventoMoura(this.grdVenda.SelecionouLinha, this.SelecionouLinhaGrdVenda, this);
        }
        if (this.grdCompra) {
            adicionarEventoMoura(this.grdCompra.SelecionouLinha, this.SelecionouLinhaGrdCompra, this);
        }
        if (this.mdCompra) {
            adicionarEventoMoura(this.mdCompra.Fechou, this.OnFechouModalDetalhe, this);
        }
        if (this.mdVenda) {
            adicionarEventoMoura(this.mdVenda.Fechou, this.OnFechouModalDetalhe, this);
        }
        if (this.mdAtendimento) {
            adicionarEventoMoura(this.mdAtendimento.Fechou, this.OnFechouModalDetalhe, this);
        }
        if (this.grdAtendimento) {
            adicionarEventoMoura(this.grdAtendimento.SelecionouLinha, this.SelecionouLinhaGrdAtendimento, this);
        }
        if (this.mdReceber) {
            adicionarEventoMoura(this.mdReceber.Fechou, this.OnFechouModalDetalhe, this);
        }
        if (this.grdReceber) {
            adicionarEventoMoura(this.grdReceber.SelecionouLinha, this.SelecionouLinhaGrdReceber, this);
        }
        if (this.mdRecebido) {
            adicionarEventoMoura(this.mdRecebido.Fechou, this.OnFechouModalDetalhe, this);
        }
        if (this.grdRecebido) {
            adicionarEventoMoura(this.grdRecebido.SelecionouLinha, this.SelecionouLinhaGrdRecebidos, this);
        }
        if (this.mdPago) {
            adicionarEventoMoura(this.mdPago.Fechou, this.OnFechouModalDetalhe, this);
        }
        if (this.grdPago) {
            adicionarEventoMoura(this.grdPago.SelecionouLinha, this.SelecionouLinhaGrdPago, this);
        }
        if (this.mdPagar) {
            adicionarEventoMoura(this.mdPagar.Fechou, this.OnFechouModalDetalhe, this);
        }
        if (this.grdPagar) {
            adicionarEventoMoura(this.grdPagar.SelecionouLinha, this.SelecionouLinhaGrdPagar, this);
        }
        this.CriarColunasGrade();
    };
    BIVenda.prototype.OnAlterouTipoBI = function (s, e) {
        this.grdBI.NomeBI = this.cboTipoBI.GetValue();
        this.CriarColunasGrade();
    };
    BIVenda.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtPeriodo.Iniciar();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.cboTipoBI.LimparSelecao();
        this.OnAlterouTipoBI(null, null);
        this.dadosGrade = [];
        this.setDataSourceGridBI();
    };
    BIVenda.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        this.gerarDados();
    };
    BIVenda.prototype.CriarColunasGrade = function () {
        this.grdBI.LimparGrid(true);
        if (!this.cboTipoBI.Combo.isInitialized) {
            return;
        }
        var tipoBI = this.cboTipoBI.GetValue();
        switch (tipoBI) {
            case this.BIVENDA: {
                this.CriarColunasVenda();
                break;
            }
            case this.BICOMPRAS: {
                this.CriarColunasCompras();
                break;
            }
            case this.BICONTASRECEBER: {
                this.CriarColunasContasReceber();
                break;
            }
            case this.BICONTASRECEBIDAS: {
                this.CriarColunasContasRecebidas();
                break;
            }
            case this.BICONTASPAGAR: {
                this.CriarColunasContasAPagar();
                break;
            }
            case this.BICONTASPAGAS: {
                this.CriarColunasContasPagas();
                break;
            }
            case this.BIATENDIMENTOPET: {
                this.CriarColunasAtendimentoPet();
                break;
            }
        }
    };
    BIVenda.prototype.CriarColunasVenda = function () {
        var colunas = [
            { caption: "Empresa (Fantasia)", dataField: "Empresa_Nome_Fantasia", area: "row" },
            {
                caption: "Produto",
                dataField: "Nome_Produto",
                area: "filter"
            },
            { dataField: "Data_Venda", caption: "Data da Venda", dataType: "date", area: "column", groupName: "DataVenda" },
            { groupName: "DataVenda", groupInterval: "year", groupIndex: 0, caption: "Ano" },
            { groupName: "DataVenda", groupInterval: "month", groupIndex: 1, caption: "Mês" },
            { groupName: "DataVenda", groupInterval: "day", groupIndex: 2, caption: "Dia" },
            {
                caption: "Total Vendido (R$)",
                dataField: "Total_Final",
                dataType: "number",
                summaryType: "sum",
                customizeText: this.grdBI.FuncaoFormataNumeroGrid(2),
                area: "data",
                isMeasure: true
            },
            {
                caption: "% Total Vendido",
                dataField: "Total_Final",
                dataType: "number",
                summaryType: "sum",
                summaryDisplayMode: "percentOfGrandTotal",
                format: { type: 'percent', precision: 2 },
                area: undefined,
                isMeasure: true
            },
            {
                caption: "Custo (Prod Vendido)",
                dataField: "Custo_Produto_Vendido",
                dataType: "number",
                summaryType: "sum",
                customizeText: this.grdBI.FuncaoFormataNumeroGrid(2),
                area: undefined,
                isMeasure: true
            },
            {
                caption: "Qtde Vendida",
                dataField: "Quantidade",
                dataType: "number",
                summaryType: "sum",
                customizeText: this.grdBI.FuncaoFormataNumeroGrid(ValoresSismoura.CasasDecimaisEstoque),
                area: "data",
                isMeasure: true
            },
            {
                caption: "% Qtde Vendida",
                dataField: "Quantidade",
                dataType: "number",
                summaryType: "sum",
                summaryDisplayMode: "percentOfGrandTotal",
                format: { type: 'percent', precision: 2 },
                area: undefined,
                isMeasure: true
            },
            { caption: "Vendedor", dataField: "Vendedor_Nome", area: "filter" },
            { caption: "Grupo", dataField: "Grupo_Descricao", area: "filter" },
            { caption: "Marca", dataField: "Marca_Descricao", area: undefined },
            { caption: "Cor", dataField: "Cor_Descricao", area: undefined },
            { caption: "SubGrupo", dataField: "SubGrupo_Descricao", area: "filter" },
            { caption: "Linha", dataField: "Linha_Descricao", area: undefined },
            { caption: "Referência", dataField: "Referencia", area: "filter" },
            { caption: "Hora da Venda", dataField: "Hora_Venda", area: "filter" },
            { caption: "Ano - Venda", dataField: "Ano_Venda", area: undefined },
            { caption: "Cód de Barras", dataField: "Codigo_Barra", area: undefined },
            { caption: "Cód da Venda", dataField: "Codigo_Venda", area: undefined },
            { caption: "Tamanho", dataField: "Tamanho", area: undefined },
            { caption: "Cidade", dataField: "Cidade_Nome", area: undefined },
            { caption: "Estado", dataField: "Cidade_Estado", area: undefined },
            { caption: "PDV", dataField: "PDV_Descricao", area: undefined },
        ];
        this.grdBI.IniciarGrade(colunas);
    };
    BIVenda.prototype.CriarColunasCompras = function () {
        var colunas = [
            { caption: "Empresa (Fantasia)", dataField: "Empresa_Fantasia", area: "row" },
            { caption: "Fornecedor", dataField: "Fornecedor", area: "filter" },
            { caption: "Referência", dataField: "Referencia", area: undefined },
            { caption: "Produto", dataField: "Produto", area: "filter", },
            { caption: "Tamanho", dataField: "Tamanho", area: undefined },
            { caption: "Cód de Barras", dataField: "Codigo_Barra", area: undefined },
            { caption: "Nota Fiscal", dataField: "Nota_Fiscal", area: undefined },
            { dataField: "Data_Entrada", caption: "Data Entrada", dataType: "date", area: "column", groupName: "DataEntrada" },
            { groupName: "DataEntrada", groupInterval: "year", groupIndex: 0, caption: "Ano" },
            { groupName: "DataEntrada", groupInterval: "month", groupIndex: 1, caption: "Mês" },
            { groupName: "DataEntrada", groupInterval: "day", groupIndex: 2, caption: "Dia" },
            { dataField: "Data_Emissao", caption: "Data Emissão", dataType: "date", area: "filter", groupName: "DataEmissao" },
            { groupName: "DataEmissao", groupInterval: "year", groupIndex: 0, caption: "Ano (Emissão)" },
            { groupName: "DataEmissao", groupInterval: "month", groupIndex: 1, caption: "Mês (Emissão)" },
            { groupName: "DataEmissao", groupInterval: "day", groupIndex: 2, caption: "Dia (Emissão)" },
            { caption: "CFOP", dataField: "CFOP", area: undefined },
            { caption: "Tipo", dataField: "Tipo", area: "filter" },
            { caption: "Grupo", dataField: "Grupo", area: "filter" },
            { caption: "SubGrupo", dataField: "SubGrupo", area: "filter" },
            { caption: "Cor", dataField: "Cor", area: undefined },
            { caption: "Marca", dataField: "Marca", area: undefined },
            { caption: "Linha", dataField: "Linha", area: undefined },
            { caption: "Depósito", dataField: "Deposito", area: "filter" },
            { caption: "Tipo de Entrada", dataField: "Tipo_Entrada", area: undefined },
            { caption: "Modelo da NF", dataField: "Modelo_Nota", area: "filter" },
            {
                caption: "Valor Total (R$)",
                dataField: "Total",
                dataType: "number",
                summaryType: "sum",
                customizeText: this.grdBI.FuncaoFormataNumeroGrid(2),
                area: "data",
                isMeasure: true
            },
            {
                caption: "% Valor Total",
                dataField: "Total",
                dataType: "number",
                summaryType: "sum",
                summaryDisplayMode: "percentOfGrandTotal",
                format: { type: 'percent', precision: 2 },
                area: undefined,
                isMeasure: true
            },
            {
                caption: "Quantidade",
                dataField: "Quantidade",
                dataType: "number",
                summaryType: "sum",
                customizeText: this.grdBI.FuncaoFormataNumeroGrid(ValoresSismoura.CasasDecimaisEstoque),
                area: "data",
                isMeasure: true
            },
            {
                caption: "% Quantidade",
                dataField: "Quantidade",
                dataType: "number",
                summaryType: "sum",
                summaryDisplayMode: "percentOfGrandTotal",
                format: { type: 'percent', precision: 2 },
                area: undefined,
                isMeasure: true
            },
            {
                caption: "Custo Calculado (média R$)",
                dataField: "Custo_Calculado",
                dataType: "number",
                summaryType: "avg",
                customizeText: this.grdBI.FuncaoFormataNumeroGrid(2),
                area: undefined,
                isMeasure: true
            },
            {
                caption: "Desconto Unitário (R$)",
                dataField: "Desconto_Unitario",
                dataType: "number",
                summaryType: "sum",
                customizeText: this.grdBI.FuncaoFormataNumeroGrid(2),
                area: undefined,
                isMeasure: true
            },
            {
                caption: "Encargos Financeiros (R$)",
                dataField: "Encargos_Financeiros",
                dataType: "number",
                summaryType: "sum",
                customizeText: this.grdBI.FuncaoFormataNumeroGrid(2),
                area: undefined,
                isMeasure: true
            },
        ];
        this.grdBI.IniciarGrade(colunas);
    };
    BIVenda.prototype.CriarColunasContasReceber = function () {
        var colunas = [
            { caption: "Empresa", dataField: "Empresa_Fantasia", area: "row" },
            { dataField: "Data_Vencimento", caption: "Vencimento", dataType: "date", area: "column", groupName: "DataVencimento" },
            { groupName: "DataVencimento", groupInterval: "year", groupIndex: 0, caption: "Ano" },
            { groupName: "DataVencimento", groupInterval: "month", groupIndex: 1, caption: "Mês" },
            { groupName: "DataVencimento", groupInterval: "day", groupIndex: 2, caption: "Dia" },
            { dataField: "Data_Emissao", caption: "Data Emissão", dataType: "date", area: "filter", groupName: "DataEmissao" },
            { groupName: "DataEmissao", groupInterval: "year", groupIndex: 0, caption: "Ano (Emissão)" },
            { groupName: "DataEmissao", groupInterval: "month", groupIndex: 1, caption: "Mês (Emissão)" },
            { groupName: "DataEmissao", groupInterval: "day", groupIndex: 2, caption: "Dia (Emissão)" },
            {
                caption: "Valor (R$)",
                dataField: "Valor",
                dataType: "number",
                summaryType: "sum",
                customizeText: this.grdBI.FuncaoFormataNumeroGrid(2),
                area: "data",
                isMeasure: true
            },
            {
                caption: "% Participação",
                dataField: "Valor",
                dataType: "number",
                summaryType: "sum",
                summaryDisplayMode: "percentOfGrandTotal",
                format: { type: 'percent', precision: 2 },
                area: "data",
                isMeasure: true
            },
            { caption: "Cliente", dataField: "Nome_Cliente", area: "filter" },
            { caption: "Cidade", dataField: "Cidade_Nome", area: "filter" },
            { caption: "Estado", dataField: "Cidade_Estado", area: "filter" },
            { caption: "Vencido", dataField: "Vencido", area: "filter" },
            { caption: "Impagável", dataField: "Impagavel", area: undefined },
            { caption: "Código", dataField: "Codigo", area: undefined },
            { caption: "Doc. Bancário", dataField: "Documento_Bancario", area: undefined },
            { caption: "Doc. Mercantil", dataField: "Documento_Mercantil", area: undefined },
            { caption: "Conta Contábil", dataField: "Conta_Contabil", area: "filter" },
            { caption: "Nº C. Corrente", dataField: "Conta_Corrente", area: undefined },
            { caption: "Agência", dataField: "Conta_Corrente_Agencia", area: undefined },
            { caption: "Conta Corrente", dataField: "Conta_Corrente_Descricao", area: "filter" },
            { caption: "Zona de Venda", dataField: "Zona_Venda", area: undefined },
            { caption: "Convênio", dataField: "Convenio", area: "filter" },
        ];
        this.grdBI.IniciarGrade(colunas);
    };
    BIVenda.prototype.CriarColunasContasRecebidas = function () {
        var colunas = [
            { caption: "Empresa", dataField: "Empresa_Fantasia", area: "row" },
            { dataField: "Data_Baixa", caption: "Data Recebimento", dataType: "date", area: "column", groupName: "DataBaixa" },
            { groupName: "DataBaixa", groupInterval: "year", groupIndex: 0, caption: "Ano" },
            { groupName: "DataBaixa", groupInterval: "month", groupIndex: 1, caption: "Mês" },
            { groupName: "DataBaixa", groupInterval: "day", groupIndex: 2, caption: "Dia" },
            { dataField: "Data_Vencimento", caption: "Vencimento", dataType: "date", area: "filter", groupName: "DataVencimento" },
            { groupName: "DataVencimento", groupInterval: "year", groupIndex: 0, caption: "Ano" },
            { groupName: "DataVencimento", groupInterval: "month", groupIndex: 1, caption: "Mês" },
            { groupName: "DataVencimento", groupInterval: "day", groupIndex: 2, caption: "Dia" },
            { dataField: "Data_Emissao", caption: "Data Emissão", dataType: "date", area: "filter", groupName: "DataEmissao" },
            { groupName: "DataEmissao", groupInterval: "year", groupIndex: 0, caption: "Ano (Emissão)" },
            { groupName: "DataEmissao", groupInterval: "month", groupIndex: 1, caption: "Mês (Emissão)" },
            { groupName: "DataEmissao", groupInterval: "day", groupIndex: 2, caption: "Dia (Emissão)" },
            {
                caption: "Valor Recebido (R$)",
                dataField: "Valor_Recebido",
                dataType: "number",
                summaryType: "sum",
                customizeText: this.grdBI.FuncaoFormataNumeroGrid(2),
                area: "data",
                isMeasure: true
            },
            {
                caption: "% Participação",
                dataField: "Valor_Recebido",
                dataType: "number",
                summaryType: "sum",
                summaryDisplayMode: "percentOfGrandTotal",
                format: { type: 'percent', precision: 2 },
                area: "data",
                isMeasure: true
            },
            {
                caption: "Valor Original (R$)",
                dataField: "Valor",
                dataType: "number",
                summaryType: "sum",
                customizeText: this.grdBI.FuncaoFormataNumeroGrid(2),
                area: undefined,
                isMeasure: true
            },
            {
                caption: "Valor Abatimento (R$)",
                dataField: "Valor_Abatimento",
                dataType: "number",
                summaryType: "sum",
                customizeText: this.grdBI.FuncaoFormataNumeroGrid(2),
                area: undefined,
                isMeasure: true
            },
            {
                caption: "Valor Juros (R$)",
                dataField: "Valor_Juros",
                dataType: "number",
                summaryType: "sum",
                customizeText: this.grdBI.FuncaoFormataNumeroGrid(2),
                area: undefined,
                isMeasure: true
            },
            { caption: "Cliente", dataField: "Nome_Cliente", area: "filter" },
            { caption: "Cidade", dataField: "Cidade_Nome", area: "filter" },
            { caption: "Estado", dataField: "Cidade_Estado", area: "filter" },
            { caption: "Código", dataField: "Codigo", area: undefined },
            { caption: "Doc. Bancário", dataField: "Documento_Bancario", area: undefined },
            { caption: "Doc. Mercantil", dataField: "Documento_Mercantil", area: undefined },
            { caption: "Conta Contábil", dataField: "Conta_Contabil", area: "filter" },
            { caption: "Nº C. Corrente", dataField: "Conta_Corrente", area: undefined },
            { caption: "Agência", dataField: "Conta_Corrente_Agencia", area: undefined },
            { caption: "Conta Corrente", dataField: "Conta_Corrente_Descricao", area: "filter" },
            { caption: "Zona de Venda", dataField: "Zona_Venda", area: undefined },
            { caption: "Convênio", dataField: "Convenio", area: "filter" },
        ];
        this.grdBI.IniciarGrade(colunas);
    };
    BIVenda.prototype.CriarColunasContasAPagar = function () {
        var colunas = [
            { caption: "Empresa", dataField: "Empresa_Fantasia", area: "row" },
            { dataField: "Data_Vencimento", caption: "Vencimento", dataType: "date", area: "column", groupName: "DataVencimento" },
            { groupName: "DataVencimento", groupInterval: "year", groupIndex: 0, caption: "Ano" },
            { groupName: "DataVencimento", groupInterval: "month", groupIndex: 1, caption: "Mês" },
            { groupName: "DataVencimento", groupInterval: "day", groupIndex: 2, caption: "Dia" },
            { dataField: "Data_Emissao", caption: "Data Emissão", dataType: "date", area: "filter", groupName: "DataEmissao" },
            { groupName: "DataEmissao", groupInterval: "year", groupIndex: 0, caption: "Ano (Emissão)" },
            { groupName: "DataEmissao", groupInterval: "month", groupIndex: 1, caption: "Mês (Emissão)" },
            { groupName: "DataEmissao", groupInterval: "day", groupIndex: 2, caption: "Dia (Emissão)" },
            {
                caption: "Valor (R$)",
                dataField: "Valor",
                dataType: "number",
                summaryType: "sum",
                customizeText: this.grdBI.FuncaoFormataNumeroGrid(2),
                area: "data",
                isMeasure: true
            },
            {
                caption: "% Participação",
                dataField: "Valor",
                dataType: "number",
                summaryType: "sum",
                summaryDisplayMode: "percentOfGrandTotal",
                format: { type: 'percent', precision: 2 },
                area: "data",
                isMeasure: true
            },
            { caption: "Fornecedor", dataField: "Nome_Fornecedor", area: "filter" },
            { caption: "Cidade", dataField: "Cidade_Nome", area: "filter" },
            { caption: "Estado", dataField: "Cidade_Estado", area: "filter" },
            { caption: "Código", dataField: "Codigo", area: undefined },
            { caption: "Doc. Bancário", dataField: "Documento_Bancario", area: undefined },
            { caption: "Doc. Mercantil", dataField: "Documento_Mercantil", area: undefined },
            { caption: "Conta Contábil", dataField: "Conta_Contabil", area: "filter" },
            { caption: "Nº C. Corrente", dataField: "Conta_Corrente", area: undefined },
            { caption: "Agência", dataField: "Conta_Corrente_Agencia", area: undefined },
            { caption: "Conta Corrente", dataField: "Conta_Corrente_Descricao", area: "filter" },
            { caption: "Segmento", dataField: "Segmento", area: undefined }
        ];
        this.grdBI.IniciarGrade(colunas);
    };
    BIVenda.prototype.CriarColunasContasPagas = function () {
        var colunas = [
            { caption: "Empresa", dataField: "Empresa_Fantasia", area: "row" },
            { dataField: "Data_Baixa", caption: "Data Pagamento", dataType: "date", area: "column", groupName: "DataBaixa" },
            { groupName: "DataBaixa", groupInterval: "year", groupIndex: 0, caption: "Ano" },
            { groupName: "DataBaixa", groupInterval: "month", groupIndex: 1, caption: "Mês" },
            { groupName: "DataBaixa", groupInterval: "day", groupIndex: 2, caption: "Dia" },
            { dataField: "Data_Vencimento", caption: "Vencimento", dataType: "date", area: "filter", groupName: "DataVencimento" },
            { groupName: "DataVencimento", groupInterval: "year", groupIndex: 0, caption: "Ano (Vencimento)" },
            { groupName: "DataVencimento", groupInterval: "month", groupIndex: 1, caption: "Mês (Vencimento)" },
            { groupName: "DataVencimento", groupInterval: "day", groupIndex: 2, caption: "Dia (Vencimento)" },
            { dataField: "Data_Emissao", caption: "Data Emissão", dataType: "date", area: "filter", groupName: "DataEmissao" },
            { groupName: "DataEmissao", groupInterval: "year", groupIndex: 0, caption: "Ano (Emissão)" },
            { groupName: "DataEmissao", groupInterval: "month", groupIndex: 1, caption: "Mês (Emissão)" },
            { groupName: "DataEmissao", groupInterval: "day", groupIndex: 2, caption: "Dia (Emissão)" },
            {
                caption: "Valor Pago (R$)",
                dataField: "Valor_Pago",
                dataType: "number",
                summaryType: "sum",
                customizeText: this.grdBI.FuncaoFormataNumeroGrid(2),
                area: "data",
                isMeasure: true
            },
            {
                caption: "% Participação",
                dataField: "Valor_Pago",
                dataType: "number",
                summaryType: "sum",
                summaryDisplayMode: "percentOfGrandTotal",
                format: { type: 'percent', precision: 2 },
                area: "data",
                isMeasure: true
            },
            {
                caption: "Valor Original (R$)",
                dataField: "Valor",
                dataType: "number",
                summaryType: "sum",
                customizeText: this.grdBI.FuncaoFormataNumeroGrid(2),
                area: undefined,
                isMeasure: true
            },
            {
                caption: "Valor Desconto (R$)",
                dataField: "Desconto",
                dataType: "number",
                summaryType: "sum",
                customizeText: this.grdBI.FuncaoFormataNumeroGrid(2),
                area: undefined,
                isMeasure: true
            },
            { caption: "Fornecedor", dataField: "Nome_Fornecedor", area: "filter" },
            { caption: "Cidade", dataField: "Cidade_Nome", area: "filter" },
            { caption: "Estado", dataField: "Cidade_Estado", area: "filter" },
            { caption: "Código", dataField: "Codigo", area: undefined },
            { caption: "Doc. Bancário", dataField: "Documento_Bancario", area: undefined },
            { caption: "Doc. Mercantil", dataField: "Documento_Mercantil", area: undefined },
            { caption: "Conta Contábil", dataField: "Conta_Contabil", area: "filter" },
            { caption: "Nº C. Corrente", dataField: "Conta_Corrente", area: undefined },
            { caption: "Agência", dataField: "Conta_Corrente_Agencia", area: undefined },
            { caption: "Conta Corrente", dataField: "Conta_Corrente_Descricao", area: "filter" },
            { caption: "Segmento", dataField: "Segmento", area: undefined }
        ];
        this.grdBI.IniciarGrade(colunas);
    };
    BIVenda.prototype.CriarColunasAtendimentoPet = function () {
        var colunas = [
            { caption: "Empresa", dataField: "Empresa", area: "row" },
            { dataField: "Data_Servico", caption: "Data Serviço", dataType: "date", area: "column", groupName: "DataServico" },
            { groupName: "DataServico", groupInterval: "year", groupIndex: 0, caption: "Ano" },
            { groupName: "DataServico", groupInterval: "month", groupIndex: 1, caption: "Mês" },
            { groupName: "DataServico", groupInterval: "day", groupIndex: 2, caption: "Dia" },
            {
                caption: "Total Serviço (R$)",
                dataField: "Total_Servico",
                dataType: "number",
                summaryType: "sum",
                customizeText: this.grdBI.FuncaoFormataNumeroGrid(2),
                area: "data",
                isMeasure: true
            },
            {
                caption: "% Participação",
                dataField: "Total_Servico",
                dataType: "number",
                summaryType: "sum",
                summaryDisplayMode: "percentOfGrandTotal",
                format: { type: 'percent', precision: 2 },
                area: "data",
                isMeasure: true
            },
            {
                caption: "Quantidade",
                dataField: "Quantidade",
                dataType: "number",
                summaryType: "sum",
                customizeText: this.grdBI.FuncaoFormataNumeroGrid(ValoresSismoura.CasasDecimaisEstoque),
                area: undefined,
                isMeasure: true
            },
            {
                caption: "Desconto Serviço (R$)",
                dataField: "Desconto_Servico",
                dataType: "number",
                summaryType: "sum",
                customizeText: this.grdBI.FuncaoFormataNumeroGrid(2),
                area: undefined,
                isMeasure: true
            },
            { caption: "Concluído", dataField: "Concluido", area: "filter" },
            { caption: "Pago", dataField: "Pago", area: "filter" },
            { caption: "Profissional", dataField: "Profissional", area: "filter" },
            { caption: "Cliente", dataField: "Cliente", area: "filter" },
            { caption: "Animal", dataField: "Nome_Animal", area: "filter" },
            { caption: "Serviço", dataField: "Servico", area: "filter" },
            { caption: "Grupo", dataField: "Grupo", area: "filter" },
            { caption: "SubGrupo", dataField: "SubGrupo", area: undefined },
            { caption: "Linha", dataField: "Linha", area: undefined },
            { caption: "Hora Serviço", dataField: "Hora_Servico", area: undefined },
            { caption: "Cidade", dataField: "Cidade_Cliente", area: undefined },
            { caption: "Estado", dataField: "Estado_Cliente", area: undefined },
            { caption: "Usuário Cadastro", dataField: "Usuario_Cadastro", area: undefined },
            { caption: "Cód. Atendimento", dataField: "Atendimento", area: undefined },
            { caption: "Sexo", dataField: "Sexo", area: undefined },
            { caption: "Idade Animal", dataField: "Idade_Animal", area: undefined },
            { caption: "Raça", dataField: "Raca", area: "filter" },
            { caption: "Espécie", dataField: "Especie", area: "filter" },
        ];
        this.grdBI.IniciarGrade(colunas);
    };
    BIVenda.prototype.gerarDados = function () {
        var _this = this;
        if (String.IsNullOrWhiteSpace(this.cboTipoBI.GetValue())) {
            MostrarAlerta("Informe o Tipo de Relatório Dinâmico");
            return;
        }
        if (!this.txtPeriodo.textBoxCalendarioInicio.GetDate()) {
            MostrarAlerta("Informe a Data Inicial");
            return;
        }
        if (!this.txtPeriodo.textBoxCalendarioFim.GetDate()) {
            MostrarAlerta("Informe a Data Final");
            return;
        }
        var parametros = {
            tipoBI: this.cboTipoBI.GetValue(),
            dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
            dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
            codUsuario: ValoresSismoura.UsuarioLogado,
            empresas: this.lstEmpresa.GetValuesRelacaoNumber()
        };
        this.dadosGrade = [];
        this.setDataSourceGridBI();
        abrirEspera("Obtendo os registros do banco de dados...");
        this.ExecutarFuncaoServerSideAsynch("GetDados", parametros, function (d) {
            try {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                var idLista = retorno.idLista;
                var paginas = retorno.Paginas;
                if (!String.IsNullOrWhiteSpace(idLista)) {
                    _this.DownloadDados(idLista, paginas, 1);
                }
                //this.grdBI.PreencherGrade(retorno);   
                //this.accCadastro.SetExpanded(false);
            }
            catch (ex) {
                fecharEspera();
                LogarException(ex);
            }
        }, function (erro) {
            fecharEspera();
            LogarException(erro);
        }, this);
    };
    BIVenda.prototype.OnClicGerar = function () {
        this.gerarDados();
    };
    BIVenda.prototype.DownloadDados = function (idLista, paginas, paginaAtual) {
        var _this = this;
        try {
            var parametros = {
                idLista: idLista,
            };
            if (paginaAtual > paginas) {
                paginaAtual = paginas;
            }
            abrirEspera("Fazendo download dos registros. Página " + paginaAtual + " de " + paginas);
            this.ExecutarFuncaoServerSideAsynch("GetPagina", parametros, function (d) {
                var _a;
                try {
                    var retorno = GetRetornoAJAX(d);
                    if (retorno && retorno.length > 0) {
                        (_a = _this.dadosGrade).push.apply(_a, retorno);
                        _this.DownloadDados(idLista, paginas, paginaAtual + 1);
                    }
                    else {
                        fecharEspera();
                        _this.setDataSourceGridBI();
                        _this.AccordionFiltros.SetExpanded(false);
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
            fecharEspera();
            LogarException(ex);
        }
    };
    BIVenda.prototype.setDataSourceGridBI = function () {
        this.grdBI.PreencherGrade(this.dadosGrade);
    };
    BIVenda.prototype.OnCellClick = function (s, e) {
        var _this = this;
        if (!String.IsNullOrWhiteSpace(e.area) && e.area == "data") {
            var tipoBI = this.cboTipoBI.GetValue();
            var pivotGridDataSource = e.component.getDataSource();
            var drillDownDataSource = pivotGridDataSource.createDrillDownDataSource(e.cell);
            switch (tipoBI) {
                case this.BIVENDA: {
                    this.grdVenda.SetDrillDownDataSource(drillDownDataSource);
                    this.mdVenda.Show();
                    setTimeout(function () {
                        _this.grdVenda.Refresh();
                    }, 200);
                    break;
                }
                case this.BICOMPRAS: {
                    this.grdCompra.SetDrillDownDataSource(drillDownDataSource);
                    this.mdCompra.Show();
                    setTimeout(function () {
                        _this.grdCompra.Refresh();
                    }, 200);
                    break;
                }
                case this.BICONTASRECEBER: {
                    this.grdReceber.SetDrillDownDataSource(drillDownDataSource);
                    this.mdReceber.Show();
                    setTimeout(function () {
                        _this.grdReceber.Refresh();
                    }, 200);
                    break;
                }
                case this.BICONTASRECEBIDAS: {
                    this.grdRecebido.SetDrillDownDataSource(drillDownDataSource);
                    this.mdRecebido.Show();
                    setTimeout(function () {
                        _this.grdRecebido.Refresh();
                    }, 200);
                    break;
                }
                case this.BICONTASPAGAR: {
                    this.grdPagar.SetDrillDownDataSource(drillDownDataSource);
                    this.mdPagar.Show();
                    setTimeout(function () {
                        _this.grdPagar.Refresh();
                    }, 200);
                    break;
                }
                case this.BICONTASPAGAS: {
                    this.grdPago.SetDrillDownDataSource(drillDownDataSource);
                    this.mdPago.Show();
                    setTimeout(function () {
                        _this.grdPago.Refresh();
                    }, 200);
                    break;
                }
                case this.BIATENDIMENTOPET: {
                    this.grdAtendimento.SetDrillDownDataSource(drillDownDataSource);
                    this.mdAtendimento.Show();
                    setTimeout(function () {
                        _this.grdAtendimento.Refresh();
                    }, 200);
                    break;
                }
            }
        }
    };
    BIVenda.prototype.SelecionouLinhaGrdVenda = function (s, e) {
        try {
            var venda = e.data["Codigo_Venda"];
            consultarVenda(venda);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    BIVenda.prototype.OnFechouModalDetalhe = function (s, e) {
        this.grdCompra.PreencherGrid([]);
        this.grdVenda.PreencherGrid([]);
    };
    BIVenda.prototype.SelecionouLinhaGrdCompra = function (s, e) {
        try {
            var codigo = e.data["Chave"];
            abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDeEntradaDeProdutos), codigo);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    BIVenda.prototype.SelecionouLinhaGrdAtendimento = function (s, e) {
        try {
            var codigo = e.data["Atendimento"];
            abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDeAtendimento), codigo);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    BIVenda.prototype.SelecionouLinhaGrdReceber = function (s, e) {
        try {
            var codigo = e.data["Codigo"];
            abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDeContasAReceber), codigo);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    BIVenda.prototype.SelecionouLinhaGrdRecebidos = function (s, e) {
        try {
            var codigo = e.data["Codigo"];
            abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDeContasAReceber), codigo);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    BIVenda.prototype.SelecionouLinhaGrdPagar = function (s, e) {
        try {
            var codigo = e.data["Codigo"];
            abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDeContasAPagar), codigo);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    BIVenda.prototype.SelecionouLinhaGrdPago = function (s, e) {
        try {
            var codigo = e.data["Codigo"];
            abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDeContasAPagar), codigo);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return BIVenda;
}(MouraPageRelacaoAngular));
var bIVenda = new BIVenda();
//# sourceMappingURL=BIVenda.js.map