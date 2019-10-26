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
var G_CliAzu = /** @class */ (function (_super) {
    __extends(G_CliAzu, _super);
    function G_CliAzu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(G_CliAzu.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_CliAzu.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_CliAzu.prototype, "Clientes", {
        get: function () {
            return this.GetScope()["Clientes"];
        },
        set: function (value) {
            this.GetScope()["Clientes"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_CliAzu.prototype, "Cliente", {
        get: function () {
            return this.GetScope()["Cliente"];
        },
        set: function (value) {
            this.GetScope()["Cliente"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_CliAzu.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_CliAzu.prototype, "txtServidor", {
        get: function () {
            return window['txtServidor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_CliAzu.prototype, "txtUsuario", {
        get: function () {
            return window['txtUsuario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_CliAzu.prototype, "txtSenha", {
        get: function () {
            return window['txtSenha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_CliAzu.prototype, "txtBanco", {
        get: function () {
            return window['txtBanco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    G_CliAzu.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.txtServidor) {
            adicionarEventoMoura(this.txtServidor.TextChanged, this.OnServidorTextChanged, this);
        }
        if (this.grd) {
            adicionarEventoMoura(this.grd.SetouItem, this.OnSetouItemCliente, this);
            adicionarEventoMoura(this.grd.LimpouItem, this.OnLimpouItemCliente, this);
            adicionarEventoMoura(this.grd.Validando, this.OnValidandoItemCliente, this);
            adicionarEventoMoura(this.grd.ItemAdicionado, this.OnItemAdicionado, this);
            adicionarEventoMoura(this.grd.SelecionouItem, this.OnGrdSelecionouItem, this);
            this.grd.Limpar();
        }
    };
    G_CliAzu.prototype.OnGravouSucesso = function (s, e) {
    };
    G_CliAzu.prototype.OnExcluiuSucesso = function (s, e) {
    };
    G_CliAzu.prototype.OnDepoisLimpar = function (Entity) {
        Entity.Clientes = [];
        this.Clientes = [];
        this.txtCliente.Limpar();
        this.txtUsuario.Limpar();
        this.txtSenha.Limpar();
        this.txtBanco.Limpar();
        if (this.grd) {
            this.grd.Grid.Refresh();
        }
    };
    G_CliAzu.prototype.OnSetouItemCliente = function (s, e) {
        var entidade;
        entidade = e.item;
        this.GetScope().$applyAsync();
    };
    G_CliAzu.prototype.OnLimpouItemCliente = function (s, e) {
        //var entidade: SiSMoura.Core.Entity.ConsoleClienteAzureBancoRetorno;
        //entidade = e.item;
        //entidade.Cliente = 0.0;
        //entidade.Nome_Cliente = "";
        //entidade.Usuario = "";
        //entidade.Senha = "";
        //entidade.Banco = "";
        //this.GetScope().$applyAsync();
    };
    G_CliAzu.prototype.OnItemAdicionado = function (s, e) {
        var entidade = e.item;
        var values = [];
        //Não deixar incluir quando os valores forem iguais.
        for (var x = 0; x < this.Clientes.length; x++) {
            if (this.Clientes[x].Contador == null || this.Clientes[x].Contador == undefined) {
                this.Clientes[x].Contador = 0;
            }
            else {
                values[x] = this.Clientes[x].Contador;
            }
        }
        //entidade.senhaDecifrada = entidade.Senha;
        if (values.length > 0) {
            entidade.Contador = Math.max.apply(Math, values) + 1;
        }
        else {
            entidade.Contador = 1;
        }
        this.GetScope().$applyAsync();
    };
    G_CliAzu.prototype.OnValidandoItemCliente = function (s, e) {
        var entidade = this.GetScope().Entity;
        var entidadeCliente;
        //var parametros: any;
        entidadeCliente = e.item;
        if (entidadeCliente.Cliente <= 0) {
            MostrarAlerta("Preencha corretamente o campo cliente!");
            e.cancelar = true;
            return;
        }
        if (entidadeCliente.Usuario == "" || entidadeCliente.Usuario == null) {
            MostrarAlerta("Preencha corretamente o campo usuário!");
            e.cancelar = true;
            return;
        }
        if (entidadeCliente.Senha == "" || entidadeCliente.Senha == null) {
            MostrarAlerta("Preencha corretamente o campo senha!");
            e.cancelar = true;
            return;
        }
        if (entidadeCliente.Banco == "" || entidadeCliente.Banco == null) {
            MostrarAlerta("Preencha corretamente o campo banco!");
            e.cancelar = true;
            return;
        }
        //parametros = {
        //    Cliente: entidadeCliente.Cliente
        //}
        entidadeCliente.Nome_Cliente = this.txtCliente.GetResultado();
        if (this.Clientes && this.Clientes.length > 0) {
            for (var x = 0; x < this.Clientes.length; x++) {
                if (this.Clientes[x].Cliente == entidadeCliente.Cliente && this.Clientes[x].Banco == entidadeCliente.Banco) {
                    e.cancelar = true;
                    MostrarAlerta("Já existe um cliente com o banco informado nada grade!");
                    return;
                }
            }
        }
        this.GetScope().$applyAsync();
    };
    G_CliAzu.prototype.OnGrdSelecionouItem = function (s, e) {
        var cliente = e.item;
        if (cliente) {
            this.Cliente = cliente;
        }
        this.Cliente = this.Cliente;
        this.GetScope().$applyAsync();
    };
    G_CliAzu.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entidade = this.GetScope().Entity;
        this.PreencherBancos(entidade);
        return true;
    };
    G_CliAzu.prototype.PreencherBancos = function (entidade) {
        var clientes = this.Clientes;
        var clientesExistentes = entidade.Clientes;
        entidade.Clientes = [];
        for (var x = 0; x < clientes.length; x++) {
            var novoCliente = {};
            var clienteGrid;
            for (var y = 0; y < clientesExistentes.length; y++) {
                if (clientesExistentes[y].Codigo == clientes[x].Codigo) {
                    novoCliente = clientesExistentes[y];
                    y = clientesExistentes.length;
                }
            }
            clienteGrid = clientes[x];
            novoCliente.Codigo = clienteGrid.Codigo;
            novoCliente.Azure = clienteGrid.Azure;
            novoCliente.Banco = clienteGrid.Banco;
            novoCliente.Cliente = clienteGrid.Cliente;
            novoCliente.Senha = clienteGrid.Senha;
            novoCliente.Usuario = clienteGrid.Usuario;
            entidade.Clientes.push(novoCliente);
        }
    };
    G_CliAzu.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        if (!Entidade.Clientes) {
            Entidade.Clientes = [];
        }
        var parametros = {
            codAzure: Entidade.Codigo
        };
        var Clientes = this.ExecutarFuncaoServerSideSynch("GetClientesAzure", parametros);
        this.Clientes = Clientes;
    };
    G_CliAzu.prototype.OnServidorTextChanged = function () {
        var entidade = this.GetScope().Entity;
        var verificar;
        if (String.IsNullOrWhiteSpace(entidade.Servidor)) {
            return;
        }
        var param = {
            servidor: entidade.Servidor
        };
        verificar = this.ExecutarFuncaoServerSideSynch("verificaServidor", param);
        if (verificar) {
            this.Limpar();
            this.txtServidor.Focus();
            MostrarAlerta("O servidor informado já está cadastrado!");
            return;
        }
        this.GetScope().$applyAsync();
    };
    return G_CliAzu;
}(MouraPageCadastroAngular));
var g_CliAzu = new G_CliAzu();
//# sourceMappingURL=G_CliAzu.js.map