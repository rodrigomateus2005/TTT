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
var C_SeqVis = /** @class */ (function (_super) {
    __extends(C_SeqVis, _super);
    function C_SeqVis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_SeqVis.prototype, "grid", {
        //Visitas
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqVis.prototype, "Clientes", {
        get: function () {
            return this.GetScope()["Clientes"];
        },
        set: function (value) {
            this.GetScope()["Clientes"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqVis.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqVis.prototype, "chkDiaFixo", {
        get: function () {
            return window['chkDiaFixo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqVis.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqVis.prototype, "cboDiaSemana", {
        get: function () {
            return window['cboDiaSemana_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqVis.prototype, "txtOrdem", {
        get: function () {
            return window['txtOrdem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqVis.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqVis.prototype, "lblSaldoDevedor", {
        get: function () {
            return window['lblSaldoDevedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqVis.prototype, "hdnDiaFixo", {
        get: function () {
            return $('#hdnDiaFixo')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqVis.prototype, "btnImportarClientes", {
        //Importar Clientes
        get: function () {
            return window['btnImportarClientes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqVis.prototype, "mdImportarClientes", {
        get: function () {
            return window['mdImportarClientes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqVis.prototype, "txtVendedor", {
        get: function () {
            return window['txtVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqVis.prototype, "txtZonaVenda", {
        get: function () {
            return window['txtZonaVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqVis.prototype, "txtCidade", {
        get: function () {
            return window['txtCidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqVis.prototype, "chkClientesVendedor", {
        get: function () {
            return window['chkClientesVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqVis.prototype, "btnGerarClientes", {
        get: function () {
            return window['btnGerarClientes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqVis.prototype, "grdClientes", {
        get: function () {
            return window['grdClientes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SeqVis.prototype, "btnImportar", {
        get: function () {
            return window['btnImportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_SeqVis.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.txtCliente) {
            adicionarEventoMoura(this.txtCliente.Procurou, this.CarregarSaldoDevedor, this);
        }
        if (this.chkDiaFixo) {
            adicionarEventoMoura(this.chkDiaFixo.CheckChanged, this.OnChkDiaFixoCheckedChange, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.AdicionandoItem, this.OnClickIncluirCliente, this);
        }
        if (this.btnImportarClientes) {
            adicionarEventoMoura(this.btnImportarClientes.Click, this.MostrarModalImpClientes, this);
        }
        if (this.btnGerarClientes) {
            adicionarEventoMoura(this.btnGerarClientes.Click, this.GerarClientes, this);
        }
        if (this.btnImportar) {
            adicionarEventoMoura(this.btnImportar.Click, this.ImportarClientesSelecionados, this);
        }
    };
    C_SeqVis.prototype.OnGravouSucesso = function (s, e) {
    };
    C_SeqVis.prototype.OnExcluiuSucesso = function (s, e) {
    };
    C_SeqVis.prototype.OnChkDiaFixoCheckedChange = function () {
        (this.chkDiaFixo.Check.checked) ? this.hdnDiaFixo.value = "S" : this.hdnDiaFixo.value = "N";
        this.VerificaChkDiaFixo(this.chkDiaFixo.Check.checked);
    };
    C_SeqVis.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        if (Entidade.Dia_Semana <= 0 || Entidade.Dia_Semana == undefined || Entidade.Dia_Semana == null) {
            this.chkDiaFixo.Check.checked = false;
        }
        else {
            this.chkDiaFixo.Check.checked = true;
        }
        this.VerificaChkDiaFixo(this.chkDiaFixo.Check.checked);
        if (!Entidade.Rota_Venda_Cliente) {
            Entidade.Rota_Venda_Cliente = [];
        }
        var parametros = {
            codRota: Entidade.Codigo
        };
        var clienteVendas = this.ExecutarFuncaoServerSideSynch("CarregarClientesVendas", parametros);
        this.Clientes = clienteVendas;
    };
    C_SeqVis.prototype.VerificaChkDiaFixo = function (is) {
        if (is) {
            this.txtData.Visible = false;
            this.txtData.Text = "";
            this.cboDiaSemana.Visible = true;
        }
        else {
            this.txtData.Visible = true;
            this.cboDiaSemana.Visible = false;
        }
    };
    C_SeqVis.prototype.OnDepoisLimpar = function (Entity) {
        Entity.Data = new Date();
        this.txtVendedor.Limpar();
        this.Clientes = [];
        this.chkDiaFixo.Check.checked = false;
        this.VerificaChkDiaFixo(this.chkDiaFixo.Check.checked);
        this.grid.btnNovo.DoClick();
        this.LimparModalImportarClientes();
    };
    C_SeqVis.prototype.LimparModalImportarClientes = function () {
        this.txtZonaVenda.Limpar();
        this.txtCidade.Limpar();
        this.chkClientesVendedor.Check.checked = false;
        this.grdClientes.PreencherGrid(null);
    };
    C_SeqVis.prototype.CarregarSaldoDevedor = function () {
        var parametros;
        parametros = {
            codCliente: this.txtCliente.GetText().CNum()
        };
        var saldoDevedor = this.ExecutarFuncaoServerSideSynch("GetSaldoDevedor", parametros);
        this.lblSaldoDevedor.Text = saldoDevedor.Format(2);
    };
    C_SeqVis.prototype.CarregarVenda = function (codCliente, saldoDevedor) {
        var retorno;
        var parametros;
        parametros = {
            codCliente: codCliente,
            saldoDevedor: saldoDevedor
        };
        retorno = this.ExecutarFuncaoServerSideSynch("GetDadosVendaByCliente", parametros);
        return retorno;
    };
    C_SeqVis.prototype.OnClickIncluirCliente = function (s, e) {
        if (this.txtOrdem.GetText().CNum() > 0 && this.txtCliente.GetText().CNum() > 0) {
            var entidade = this.CarregarVenda(this.txtCliente.GetText().CNum(), this.lblSaldoDevedor.Text.CNum());
            var venda = e.item;
            var listaVenda = this.Clientes;
            venda.Nome = entidade.Nome;
            venda.Saldo_Devedor = entidade.Saldo_Devedor;
            venda.Data = entidade.Data;
            venda.Valor_Ultima_Compra = entidade.Valor_Ultima_Compra;
            venda.Telefone = entidade.Telefone;
            venda.Endereco = entidade.Endereco;
            venda.Bairro = entidade.Bairro;
            venda.Cidade = entidade.Cidade;
        }
        else {
            MostrarAlerta("Informe os campos Ordem e Cliente corretamente.");
            e.cancelar = true;
        }
    };
    C_SeqVis.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entidade = this.GetScope().Entity;
        entidade.Dia_Fixo = this.chkDiaFixo.Check.checked;
        if (entidade.Dia_Fixo) {
            if (entidade.Dia_Semana <= 0) {
                MostrarAlerta("Informe o dia da Semana!");
                return false;
            }
            entidade.Data = null;
        }
        else {
            if (!entidade.Data) {
                MostrarAlerta("Informe a Data!");
                return false;
            }
            entidade.Dia_Semana = null;
        }
        this.PreencherClientes(entidade);
        if (entidade.Rota_Venda_Cliente.length <= 0 || !entidade.Rota_Venda_Cliente) {
            MostrarAlerta("Informe ao menos um Cliente!");
            return false;
        }
        //Validacoes aqui
        return true;
    };
    C_SeqVis.prototype.PreencherClientes = function (entidade) {
        var clientes = this.Clientes;
        var clientesExistentes = entidade.Rota_Venda_Cliente;
        entidade.Rota_Venda_Cliente = [];
        for (var x = 0; x < clientes.length; x++) {
            var novoCliente = {};
            var clienteGrid = void 0;
            if (!clientesExistentes)
                clientesExistentes = [];
            for (var y = 0; y < clientesExistentes.length; y++) {
                if (clientesExistentes[y].Id == clientes[x].Cliente) {
                    novoCliente = clientesExistentes[y];
                    y = clientesExistentes.length;
                }
            }
            clienteGrid = clientes[x];
            novoCliente.Cliente = clienteGrid.Cliente;
            novoCliente.Ordem = clienteGrid.Ordem;
            novoCliente.Observacao = clienteGrid.Observacao;
            entidade.Rota_Venda_Cliente.push(novoCliente);
        }
    };
    C_SeqVis.prototype.MostrarModalImpClientes = function (s, e) {
        e.processOnServer = false;
        if (this.txtVendedor.GetText().CNum()) {
            this.mdImportarClientes.Show();
        }
        else {
            MostrarAlerta("Por favor, selecione um vendedor.");
        }
    };
    C_SeqVis.prototype.GerarClientes = function (s, e) {
        e.processOnServer = false;
        var retorno;
        var parametros;
        parametros = {
            codVendedor: this.txtVendedor.GetText().CNum(),
            codZonaVenda: this.txtZonaVenda.GetText().CNum(),
            codCidade: this.txtCidade.GetText().CNum(),
            clientesVendedor: this.chkClientesVendedor.Check.checked
        };
        retorno = this.ExecutarFuncaoServerSideSynch("ImportarClientes", parametros);
        this.grdClientes.PreencherGrid(retorno);
    };
    C_SeqVis.prototype.ImportarClientesSelecionados = function () {
        var _this = this;
        var listaRetorno = this.grdClientes.GetSelectedRowsData;
        var ordem = 1;
        for (var x = 0; x < listaRetorno.length; x++) {
            this.Clientes.push(listaRetorno[x]);
            this.Clientes[x].Ordem = ordem;
            ordem++;
        }
        setTimeout(function () { return _this.mdImportarClientes.Hide(); }, 1500);
    };
    return C_SeqVis;
}(MouraPageCadastroAngular));
var c_SeqVis = new C_SeqVis();
//# sourceMappingURL=C_SeqVis.js.map