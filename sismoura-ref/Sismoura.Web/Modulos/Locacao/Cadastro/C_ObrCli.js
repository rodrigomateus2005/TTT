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
var C_ObrCli = /** @class */ (function (_super) {
    __extends(C_ObrCli, _super);
    function C_ObrCli() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ObrCli.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ObrCli.prototype, "Obras", {
        get: function () {
            if (!this.GetScope()["Obras"]) {
                this.GetScope()["Obras"] = [];
            }
            return this.GetScope()["Obras"];
        },
        set: function (value) {
            this.GetScope()["Obras"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ObrCli.prototype, "txtCep", {
        get: function () {
            return window['txtCep_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ObrCli.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ObrCli.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ObrCli.prototype, "txtNomeObra", {
        get: function () {
            return window['txtNomeObra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ObrCli.prototype, "txtEndereco", {
        get: function () {
            return window['txtEndereco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ObrCli.prototype, "txtNumero", {
        get: function () {
            return window['txtNumero_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ObrCli.prototype, "txtComplemento", {
        get: function () {
            return window['txtComplemento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ObrCli.prototype, "txtBairro", {
        get: function () {
            return window['txtBairro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ObrCli.prototype, "txtCidade", {
        get: function () {
            return window['txtCidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ObrCli.prototype, "txtContato", {
        get: function () {
            return window['txtContato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ObrCli.prototype, "txtTelefone", {
        get: function () {
            return window['txtTelefone_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ObrCli.prototype, "chkInativo", {
        get: function () {
            return window['chkInativo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ObrCli.prototype, "Obra", {
        get: function () {
            return this.GetScope()["Obra"];
        },
        set: function (value) {
            this.GetScope()["Obra"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ObrCli.prototype, "Entity", {
        get: function () {
            return this.GetScope()["Entity"];
        },
        set: function (value) {
            this.GetScope()["Entity"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ObrCli.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ObrCli.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ObrCli.prototype, "btnNovo", {
        get: function () {
            return window['btnNovo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ObrCli.prototype.Init = function () {
        _super.prototype.Init.call(this);
        this.txtCliente.Focus();
        this.txtTelefone.TextBoxTelefone.maxLength = 12;
        var codCliente = "0";
        if (this.ParametrosTela.CodCliente != undefined) {
            codCliente = this.ParametrosTela.CodCliente.CNum() != 0 ? this.ParametrosTela.CodCliente : this.txtCliente.GetText().CNum();
            this.txtCliente.SetText(codCliente);
            this.txtCliente.Procurar(codCliente);
        }
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.Validando, this.OnClickIncluirObra, this);
            adicionarEventoMoura(this.Grid.SelecionouItem, this.OnGridSelecionarItem, this);
        }
        if (this.txtCep) {
            adicionarEventoMoura(this.txtCep.PesquisouCEP, this.OnConsultarCEP, this);
        }
        if (this.btnNovo) {
            adicionarEventoMoura(this.btnNovo.Click, this.OnClickBtnNovo, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickBtnGravar, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.OnClickBtnLimpar, this);
        }
        if (this.txtCliente) {
            adicionarEventoMoura(this.txtCliente.Procurou, this.PreencherGrade, this);
        }
    };
    C_ObrCli.prototype.OnGridSelecionarItem = function (s, e) {
        var entidadeObra = e.item;
        if (entidadeObra) {
            this.Obra = entidadeObra;
        }
    };
    C_ObrCli.prototype.PreencherGrade = function () {
        try {
            var parametros = {
                codCliente: this.ParametrosTela.CodCliente != undefined ? this.ParametrosTela.CodCliente : this.txtCliente.GetText().CNum(),
                inativo: this.ParametrosTela.Inativo != undefined ? this.ParametrosTela.Inativo : ""
            };
            var obras = [];
            this.Obras = [];
            this.RefreshAngular();
            var obras = this.ExecutarFuncaoServerSideSynch("GetObras", parametros);
            for (var z = 0; z < obras.length; z++) {
                if (this.Obras.length > 0 && this.Obras.length == obras.length) {
                    if (this.Obras[z].Codigo != obras[z].Codigo) {
                        this.Obras.push(obras[z]);
                    }
                }
                else {
                    this.Obras.push(obras[z]);
                }
            }
            this.RefreshAngular();
            if (this.ParametrosTela.CodCliente != undefined) {
                this.Entity.Cod_Cliente = this.ParametrosTela.CodCliente;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ObrCli.prototype.OnConsultarCEP = function (s, e) {
        if (e.EncontrouEndereco) {
            this.Obra.Cep = this.txtCep.GetText();
            this.Obra.Endereco = e.Endereco;
            this.Obra.Bairro = e.Bairro;
            this.Obra.Cidade = e.CidadeCodigo.toString();
            this.GetScope().$applyAsync();
        }
        else {
            if (this.txtCep)
                this.txtCep.Focus();
        }
    };
    C_ObrCli.prototype.OnClickIncluirObra = function (s, e) {
        try {
            if (this.txtCliente.GetText() == "") {
                MostrarAlerta("Preencha o campo corretamente: Cliente.");
                e.cancelar = true;
                return;
            }
            if (e.item.Nome == "" || this.Obra.Nome == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Nome da Obra.");
                e.cancelar = true;
                return;
            }
            if (e.item.Endereco == "" || this.Obra.Endereco == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Endereço.");
                e.cancelar = true;
                return;
            }
            if (e.item.Numero == "" || this.Obra.Numero == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Número.");
                e.cancelar = true;
                return;
            }
            if (e.item.Bairro == "" || this.Obra.Bairro == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Bairro.");
                e.cancelar = true;
                return;
            }
            if (e.item.Cidade == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Cidade.");
                e.cancelar = true;
                return;
            }
            if (e.item.Contato == "" || this.Obra.Contato == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Contato.");
                e.cancelar = true;
                return;
            }
            if (e.index < 0) {
                e.item.Codigo = 0;
            }
            var maiorContador;
            var parametros = {
                codCliente: 0,
                inativo: ""
            };
            if (e.item.Codigo == 0) {
                var retorno = this.ExecutarFuncaoServerSideSynch("GetObras", parametros);
                maiorContador = retorno.Max("Codigo") + 1;
                e.item.Codigo = maiorContador;
            }
            this.Obra.Codigo = e.item.Codigo;
            e.item.Nome_Cliente = this.txtCliente.GetResultado();
            e.item.Telefone_Obra = "(" + this.Obra.DDD_Fone + ")" + this.Obra.Telefone;
            e.item.Nome_Cidade = this.txtCidade.GetResultado();
            e.item.Cod_Cliente = this.txtCliente.GetText().CNum();
            if (this.chkInativo.Checked == true) {
                this.Obra.Inativo = true;
            }
            else {
                this.Obra.Inativo = false;
            }
            if (this.Obra.Inativo == false || this.Obra.Inativo == undefined) {
                e.item.Obra_Inativa = 'Não';
            }
            else {
                e.item.Obra_Inativa = 'Sim';
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ObrCli.prototype.OnClickBtnLimpar = function (s, e) {
        this.LimparCampos();
        this.Obras = [];
        this.RefreshAngular();
    };
    C_ObrCli.prototype.OnClickBtnNovo = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
        this.Obras = [];
        this.RefreshAngular();
    };
    C_ObrCli.prototype.OnClickBtnGravar = function (s, e) {
        e.processOnServer = false;
        var retorno = this.ValidarCampos();
        if (retorno == true) {
            this.Gravar();
        }
    };
    C_ObrCli.prototype.Gravar = function () {
        try {
            var Entity = this.GetScope()["Obras"];
            var parametros = {
                obras: Entity,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("Gravar", parametros);
            (retorno == "Sucesso") ? MostrarMensagem("Registro gravado com sucesso!") : MostrarAlerta("Erro ao gravar o registro!");
            this.PreencherGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ObrCli.prototype.LimparCampos = function () {
        this.txtCodigo.Limpar();
        this.txtCidade.Limpar();
        this.txtCliente.Limpar();
        this.txtBairro.Limpar();
        this.txtCep.Limpar();
        this.txtComplemento.Limpar();
        this.txtContato.Limpar();
        this.txtEndereco.Limpar();
        this.txtNomeObra.Limpar();
        this.txtNumero.Limpar();
        this.txtTelefone.TextBoxDDD.value = "";
        this.txtTelefone.TextBoxTelefone.value = "";
        this.chkInativo.Checked = false;
    };
    C_ObrCli.prototype.ValidarCampos = function () {
        if (this.Obras.length == 0) {
            if (this.txtCliente.GetText().CNum() <= 0) {
                MostrarAlerta("Preencha o campo corretamente: Cliente.");
                return false;
            }
            if (this.txtNomeObra.GetText() == "") {
                MostrarAlerta("Preencha o campo corretamente: Nome da Obra.");
                return false;
            }
            if (this.txtEndereco.GetText() == "") {
                MostrarAlerta("Preencha o campo corretamente: Endereço.");
                return false;
            }
            if (this.txtNumero.GetText() == "") {
                MostrarAlerta("Preencha o campo corretamente: Número.");
                return false;
            }
            if (this.txtBairro.GetText() == "") {
                MostrarAlerta("Preencha o campo corretamente: Bairro.");
                return;
            }
            if (this.txtCidade.GetText().CNum() <= 0) {
                MostrarAlerta("Preencha o campo corretamente: Cidade.");
                return false;
            }
            if (this.txtContato.GetText() == "") {
                MostrarAlerta("Preencha o campo corretamente: Contato.");
                return false;
            }
        }
        return true;
    };
    return C_ObrCli;
}(MouraPageAngular));
var c_ObrCli = new C_ObrCli();
//# sourceMappingURL=C_ObrCli.js.map