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
var C_SalaAten = /** @class */ (function (_super) {
    __extends(C_SalaAten, _super);
    function C_SalaAten() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_SalaAten.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalaAten.prototype, "GridCadastrados", {
        get: function () {
            return window['GridCadastrados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalaAten.prototype, "Grupos", {
        get: function () {
            if (!this.GetScope()["Grupos"]) {
                return [];
            }
            else {
                return this.GetScope()["Grupos"];
            }
        },
        set: function (value) {
            this.GetScope()["Grupos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalaAten.prototype, "Grupo", {
        get: function () {
            if (!this.GetScope()["Grupo"]) {
                return null;
            }
            else {
                return this.GetScope()["Grupo"];
            }
        },
        set: function (value) {
            this.GetScope()["Grupo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalaAten.prototype, "txtServico", {
        get: function () {
            return window["txtServico_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalaAten.prototype, "cboEmpresa", {
        get: function () {
            return window["cboEmpresa_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalaAten.prototype, "lstEmpresaDestino", {
        get: function () {
            return window["lstEmpresaDestino_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalaAten.prototype, "lstSalas", {
        get: function () {
            return window["lstSalas_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalaAten.prototype, "mdReplicar", {
        get: function () {
            return window["mdReplicar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalaAten.prototype, "lblEmpresaOrigem", {
        get: function () {
            return window["lblEmpresaOrigem_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalaAten.prototype, "btnOK", {
        get: function () {
            return window["btnOK_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalaAten.prototype, "btnReplicar", {
        get: function () {
            return window["btnReplicar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalaAten.prototype, "btnCancelar", {
        get: function () {
            return window["btnCancelar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SalaAten.prototype, "txtCodigo", {
        get: function () {
            return window["txtCodigo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    C_SalaAten.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.Validando, this.OnValidandoAlteracao, this);
        }
        if (this.GridCadastrados) {
            adicionarEventoMoura(this.GridCadastrados.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnMudouEmpresa, this);
        }
        if (this.btnReplicar) {
            adicionarEventoMoura(this.btnReplicar.Click, this.OnClickBotaoReplicar, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnClickBotaoCancelar, this);
        }
        if (this.btnOK) {
            adicionarEventoMoura(this.btnOK.Click, this.OnClickBotaoOk, this);
        }
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.AntesAbrirProcura, this.OnCodigoAntesAbrirProcura, this);
        }
    };
    C_SalaAten.prototype.OnCodigoAntesAbrirProcura = function (s, ev) {
        this.txtCodigo.LimparParametros();
        this.txtCodigo.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
    };
    C_SalaAten.prototype.OnExpanded = function () {
        this.Grid.AtualizarGrid();
    };
    C_SalaAten.prototype.OnClickBotaoOk = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        if (this.lstEmpresaDestino.GetValues().length == 0) {
            return;
        }
        if (this.lstSalas.GetValues().length == 0) {
            return;
        }
        var parametros = {
            EmpresaOrigem: this.cboEmpresa.GetValue(),
            EmpresaDestino: this.lstEmpresaDestino.GetValuesRelacaoNumber(),
            Salas: this.lstSalas.GetValuesRelacao()
        };
        abrirEspera("");
        this.ExecutarFuncaoServerSideAsynch("Replicar", parametros, function (d) {
            try {
                var retorno = GetRetornoAJAX(d);
                fecharEspera();
                if (!retorno) {
                    MostrarAlerta("Ocorreu um erro ao replicar");
                    return;
                }
                else {
                    MostrarMensagem("Salas replicadas com sucesso");
                }
                _this.mdReplicar.ModalDialog.Hide();
                _this.RefreshAngular();
            }
            catch (ex) {
                fecharEspera();
                LogarException(ex);
            }
        }, function (erro) {
            fecharEspera();
            LogarException(erro);
        }, this);
        return false;
    };
    C_SalaAten.prototype.OnClickBotaoCancelar = function (s, e) {
        e.processOnServer = false;
        this.mdReplicar.ModalDialog.Hide();
        return false;
    };
    C_SalaAten.prototype.OnClickBotaoReplicar = function (s, e) {
        e.processOnServer = false;
        if (!this.GridCadastrados.DataSource || this.GridCadastrados.DataSource.length == 0) {
            MostrarAlerta("Esta empresa origem não possui salas cadastradas");
            return false;
        }
        if (this.mdReplicar) {
            this.lblEmpresaOrigem.Text = this.cboEmpresa.GetText();
            this.lstSalas.RemoverTodosItens();
            var parametros = {
                Empresa: this.cboEmpresa.GetValue()
            };
            var cadastrados = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            if (cadastrados) {
                for (var i = 0; i < cadastrados.length; i++) {
                    this.lstSalas.AdicionarItem(cadastrados[i].Descricao, cadastrados[i].Codigo);
                }
            }
            this.lstEmpresaDestino.LimparSelecao();
            this.mdReplicar.ModalDialog.Show();
        }
        return false;
    };
    C_SalaAten.prototype.OnMudouEmpresa = function () {
        this.PreencherGrade(this.cboEmpresa.GetValue());
    };
    C_SalaAten.prototype.OnValidandoAlteracao = function (s, e) {
        try {
            if (!this.Grupo) {
                return;
            }
            var grupo = this.Grupos.FirstOrDefault("Grupo", this.Grupo.Grupo);
            if (grupo) {
                this.Grupo = null;
                this.RefreshAngular();
                MostrarAlerta("Este serviço já foi adicionado");
                e.cancelar = true;
                return;
            }
            this.Grupo.Grupo_Nome = this.txtServico.GetResultado();
            e.item = this.Grupo;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SalaAten.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
    };
    C_SalaAten.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.EntityTela.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.PreencherGrade(ValoresSismoura.EmpresaPadraoUsuario);
    };
    C_SalaAten.prototype.OnDepoisLimpar = function (Entity) {
        this.Grupos = [];
        this.PreencherGrade(ValoresSismoura.EmpresaPadraoUsuario);
        Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.RefreshAngular();
    };
    C_SalaAten.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade(this.EntityTela.Empresa);
        return true;
    };
    C_SalaAten.prototype.PreencherGrade = function (empresa) {
        try {
            var parametros;
            parametros = {
                Empresa: empresa
            };
            var cadastrados = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.GridCadastrados.PreencherGrid(cadastrados);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SalaAten.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        try {
            var parametros = {
                codigo: Entidade.Codigo
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("RetornarGrupos", parametros);
            this.PreencherGrade(Entidade.Empresa);
            this.Grupos = retorno;
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SalaAten.prototype.OnAntesGravar = function () {
        try {
            _super.prototype.OnAntesGravar.call(this);
            //if (!this.Grupos || this.Grupos.length == 0) {
            //    MostrarAlerta("Informe ao menos um serviço");
            //    return false;
            //}
            this.EntityTela.Grupos = [];
            for (var i = 0; i < this.Grupos.length; i++) {
                var grupo = {};
                grupo.Codigo = this.Grupos[i].Codigo;
                grupo.Grupo = this.Grupos[i].Grupo;
                this.EntityTela.Grupos.push(grupo);
            }
            return true;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_SalaAten;
}(MouraPageCadastroAngular));
var c_SalaAten = new C_SalaAten();
//# sourceMappingURL=C_SalaAten.js.map