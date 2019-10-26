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
var C_ProGru = /** @class */ (function (_super) {
    __extends(C_ProGru, _super);
    function C_ProGru() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ProGru.prototype, "Servico", {
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
    Object.defineProperty(C_ProGru.prototype, "Servicos", {
        get: function () {
            return this.GetScope()["Servicos"];
        },
        set: function (value) {
            this.GetScope()["Servicos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProGru.prototype, "txtTipoProfissional", {
        get: function () {
            return window['txtTipoProfissional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProGru.prototype, "txtGrupoServico", {
        get: function () {
            return window['txtGrupoServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProGru.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProGru.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProGru.prototype, "btnNovo", {
        get: function () {
            return window['btnNovo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ProGru.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionandoItem, this.OnGridSelecionouItem, this);
            adicionarEventoMoura(this.Grid.Validando, this.OnValidandoItemServico, this);
            adicionarEventoMoura(this.Grid.LimpouItem, this.LimparServico, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickGravar, this);
        }
        if (this.btnNovo) {
            adicionarEventoMoura(this.btnNovo.Click, this.OnClickNovo, this);
        }
        if (this.txtTipoProfissional && this.txtTipoProfissional.BotaoNovo) {
            adicionarEventoDevExpress(this.txtTipoProfissional.BotaoNovo.Click, this.OnClickNovoProfissional, this);
            adicionarEventoMoura(this.txtTipoProfissional.Procurou, this.OnProcurouTipoProfissional, this);
        }
        if (this.txtGrupoServico && this.txtGrupoServico.BotaoNovo) {
            adicionarEventoDevExpress(this.txtGrupoServico.BotaoNovo.Click, this.OnClickNovoGrupoServico, this);
        }
    };
    C_ProGru.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    C_ProGru.prototype.OnValidandoItemServico = function (s, e) {
        if (e.item.Grupo <= 0 || e.item.Grupo == null) {
            MostrarAlerta("Informe um serviço para ser adicionado");
            e.cancelar = true;
            this.txtGrupoServico.Focus();
            return;
        }
        for (var x = 0; x < this.Servicos.length; x++) {
            if (this.Servicos[x].Grupo == e.item.Grupo) {
                //this.Servico.Grupo = 0;
                //MostrarAlerta("Este Grupo de Serviço já foi adicionado");
                this.txtGrupoServico.Limpar();
                this.txtGrupoServico.Focus();
                e.cancelar = true;
                return;
            }
        }
        if (e.index < 0) {
            e.item.Descricao = this.txtGrupoServico.GetResultado();
        }
    };
    C_ProGru.prototype.LimparServico = function () {
        this.txtGrupoServico.Limpar();
    };
    C_ProGru.prototype.OnProcurouTipoProfissional = function () {
        this.GetCadastrados();
    };
    C_ProGru.prototype.OnClickNovoProfissional = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
    };
    C_ProGru.prototype.OnClickNovo = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
    };
    C_ProGru.prototype.OnClickNovoGrupoServico = function (s, e) {
        e.processOnServer = false;
        this.txtGrupoServico.SetText("");
        this.txtGrupoServico.Focus();
    };
    C_ProGru.prototype.OnClickGravar = function (s, e) {
        e.processOnServer = false;
        if (this.ValidarCamposObrigatorios()) {
            if (this.Servicos.length > 0) {
                try {
                    var parametros;
                    parametros = {
                        codProfissional: this.txtTipoProfissional.GetText().CNum(),
                        servicos: this.Servicos,
                        nomeTela: ValoresSismoura.NomeTela,
                        codUsuario: ValoresSismoura.UsuarioLogado
                    };
                    var retorno = this.ExecutarFuncaoServerSideSynch("Gravar", parametros);
                    if (retorno) {
                        MostrarMensagem("Registro gravado com sucesso!");
                    }
                }
                catch (ex) {
                    LogarException(ex);
                }
            }
            else {
                MostrarAlerta("Adicione ao menos um serviço!");
                this.txtGrupoServico.Focus();
            }
        }
        else {
            this.txtTipoProfissional.Focus();
        }
    };
    C_ProGru.prototype.OnGridSelecionouItem = function (s, e) {
        try {
            var parametros;
            parametros = {
                codigo: e.item.Grupo
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("OnSelecionou", parametros);
            if (retorno != 0) {
                this.txtGrupoServico.Procurar(retorno);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ProGru.prototype.LimparCampos = function () {
        this.txtTipoProfissional.Limpar();
        this.txtGrupoServico.Limpar();
        this.txtTipoProfissional.Focus();
        this.GetCadastrados();
    };
    C_ProGru.prototype.GetCadastrados = function () {
        try {
            if (this.txtTipoProfissional.GetText() != "") {
                var parametros;
                parametros = {
                    codProfissional: this.txtTipoProfissional.GetText().CNum()
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
                this.Servicos = retorno;
            }
            else {
                this.Servicos = [];
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_ProGru;
}(MouraPageAngular));
var c_ProGru = new C_ProGru();
//# sourceMappingURL=C_ProGru.js.map