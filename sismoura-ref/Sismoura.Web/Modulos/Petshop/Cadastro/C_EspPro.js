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
var C_EspPro = /** @class */ (function (_super) {
    __extends(C_EspPro, _super);
    function C_EspPro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_EspPro.prototype, "Servicos", {
        get: function () {
            if (!this.GetScope()["Servicos"]) {
                return [];
            }
            else {
                return this.GetScope()["Servicos"];
            }
        },
        set: function (value) {
            this.GetScope()["Servicos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EspPro.prototype, "Servico", {
        get: function () {
            if (!this.GetScope()["Servico"]) {
                return null;
            }
            else {
                return this.GetScope()["Servico"];
            }
        },
        set: function (value) {
            this.GetScope()["Servico"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EspPro.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EspPro.prototype, "txtServico", {
        get: function () {
            return window["txtServico_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EspPro.prototype, "txtGrupo", {
        get: function () {
            return window["txtGrupo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EspPro.prototype, "txtSubgrupo", {
        get: function () {
            return window["txtSubgrupo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EspPro.prototype, "mdGrupo", {
        get: function () {
            return window['mdGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EspPro.prototype, "btnFechar", {
        get: function () {
            return window['btnFechar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EspPro.prototype, "btnOk", {
        get: function () {
            return window['btnOk_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EspPro.prototype, "btnAdicionarGrupo", {
        get: function () {
            return window['btnAdicionarGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_EspPro.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.Validando, this.OnValidandoAlteracao, this);
        }
        if (this.btnFechar) {
            adicionarEventoMoura(this.btnFechar.Click, this.OnClickFechar, this);
        }
        if (this.btnOk) {
            adicionarEventoMoura(this.btnOk.Click, this.OnClickOk, this);
        }
        if (this.btnAdicionarGrupo) {
            adicionarEventoMoura(this.btnAdicionarGrupo.Click, this.OnClickAdicionar, this);
        }
    };
    C_EspPro.prototype.OnClickAdicionar = function (s, e) {
        e.processOnServer = false;
        this.mdGrupo.ModalDialog.Show();
    };
    C_EspPro.prototype.OnClickOk = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        if (this.txtGrupo.GetText().CNum() == 0 && this.txtSubgrupo.GetText().CNum() == 0) {
            MostrarAlerta("Informe um grupo e/ou um subgrupo");
            return;
        }
        var parametros = {
            grupo: this.txtGrupo.GetText().CNum(),
            subgrupo: this.txtSubgrupo.GetText().CNum()
        };
        abrirEspera("");
        this.ExecutarFuncaoServerSideAsynch("RetornarServicosGrupo", parametros, function (d) {
            try {
                var lista = GetRetornoAJAX(d);
                if (!lista) {
                    MostrarAlerta("Ocorreu um erro ao obter os serviços");
                    fecharEspera();
                    return;
                }
                if (lista) {
                    for (var i = 0; i < lista.length; i++) {
                        var servico = _this.Servicos.FindAll("Servico", lista[i].Codigo);
                        var item = {};
                        if (!servico || servico.length == 0) {
                            item.Servico = lista[i].Codigo;
                            item.Descricao = lista[i].Nome;
                            _this.Servicos.push(item);
                        }
                    }
                    _this.grid.Grid.PreencherGrid(_this.Servicos);
                    _this.grid.AtualizarGrid;
                    _this.txtGrupo.Limpar();
                    _this.txtSubgrupo.Limpar();
                }
                _this.mdGrupo.Hide();
                fecharEspera();
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
    };
    C_EspPro.prototype.OnClickFechar = function (s, e) {
        e.processOnServer = false;
        this.mdGrupo.Hide();
    };
    C_EspPro.prototype.OnValidandoAlteracao = function (s, e) {
        try {
            if (!this.Servico) {
                return;
            }
            var servico = this.Servicos.FirstOrDefault("Servico", this.Servico.Servico);
            if (servico) {
                this.Servico = null;
                this.RefreshAngular();
                MostrarAlerta("Este serviço já foi adicionado");
                e.cancelar = true;
                return;
            }
            this.Servico.Descricao = this.txtServico.GetResultado();
            e.item = this.Servico;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_EspPro.prototype.OnAntesGravar = function () {
        try {
            _super.prototype.OnAntesGravar.call(this);
            this.EntityTela.Servicos = this.Servicos;
            return true;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_EspPro.prototype.OnDepoisLimpar = function (Entity) {
        this.Servico = null;
        this.Servicos = [];
        this.RefreshAngular();
    };
    C_EspPro.prototype.OnDepoisBuscarExistente = function (Entidade) {
        var _this = this;
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        try {
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("RetornarServicos", { codigo: Entidade.Codigo }, function (d) {
                try {
                    fecharEspera();
                    _this.Servicos = GetRetornoAJAX(d);
                    _this.RefreshAngular();
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (e) {
                LogarExceptionAjax(e);
                fecharEspera();
            }, this);
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_EspPro;
}(MouraPageCadastroAngular));
var c_EspPro = new C_EspPro();
//# sourceMappingURL=C_EspPro.js.map