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
var C_GruCli_Angular = /** @class */ (function (_super) {
    __extends(C_GruCli_Angular, _super);
    function C_GruCli_Angular() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isContinuar = false;
        return _this;
    }
    Object.defineProperty(C_GruCli_Angular.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruCli_Angular.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruCli_Angular.prototype, "gridGrupoFiscal", {
        get: function () {
            return window['gridGrupoFiscal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruCli_Angular.prototype, "txtGrupoFiscal", {
        get: function () {
            return window['txtGrupoFiscal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruCli_Angular.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruCli_Angular.prototype, "btnIncluirCliente", {
        get: function () {
            return window['btnIncluirCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruCli_Angular.prototype, "btnRemoverCliente", {
        get: function () {
            return window['btnRemoverCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruCli_Angular.prototype, "btnNovoCliente", {
        get: function () {
            return window['btnNovoCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_GruCli_Angular.prototype, "gridCliente", {
        get: function () {
            return window['gridCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_GruCli_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        this.PreencherGridGrupoFiscal();
    };
    C_GruCli_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnNovoCliente) {
            adicionarEventoMoura(this.btnNovoCliente.Click, this.OnClicouBotaoNovoCliente, this);
        }
        if (this.btnIncluirCliente) {
            adicionarEventoMoura(this.btnIncluirCliente.Click, this.OnClicouBotaoIncluirCliente, this);
        }
        if (this.btnRemoverCliente) {
            adicionarEventoMoura(this.btnRemoverCliente.Click, this.OnClicouBotaoRemoverCliente, this);
        }
        if (this.gridCliente) {
            adicionarEventoMoura(this.gridCliente.SelecionouLinha, this.OnSelecionouLinhaCliente, this);
        }
        if (this.gridGrupoFiscal) {
            adicionarEventoMoura(this.gridGrupoFiscal.SelecionouLinha, this.OnSelecionouLinhaGrupoFiscal, this);
        }
        if (this.txtGrupoFiscal) {
            adicionarEventoMoura(this.txtGrupoFiscal.LostFocus, this.OnDepoisBuscarGrupoFiscal, this);
        }
    };
    C_GruCli_Angular.prototype.OnDepoisBuscarGrupoFiscal = function () {
        if (this.txtGrupoFiscal.GetText() === '' || this.txtGrupoFiscal.GetText().startsWith('0')) {
            this.txtCliente.Limpar();
            this.gridCliente.PreencherGrid(null);
        }
        else {
            this.PreencherGridCliente();
        }
    };
    C_GruCli_Angular.prototype.OnSelecionouLinhaCliente = function (s, e) {
        this.txtCliente.Procurar(e.data['Codigo']);
    };
    C_GruCli_Angular.prototype.OnSelecionouLinhaGrupoFiscal = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_GruCli_Angular.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.PreencherGridGrupoFiscal();
        this.RefreshAngular();
    };
    C_GruCli_Angular.prototype.OnAntesGravar = function () {
        var _this = this;
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Calcular_Iva = 'S';
        try {
            if (!this.isContinuar && !this.EntityTela.Codigo) {
                var parametros = void 0;
                var retorno = void 0;
                parametros = {
                    Descricao: this.EntityTela.Descricao
                };
                retorno = this.ExecutarFuncaoServerSideSynch('GetCodigoGrupoFiscalByDescricao', parametros);
                if (retorno.length === 0) {
                    return true;
                }
                else {
                    var mensagem = void 0;
                    var codigos = retorno.map(function (grupoFiscal) { return grupoFiscal.Codigo; }).join(', ');
                    mensagem = "J\u00E1 existe uma descri\u00E7\u00E3o \"" + this.EntityTela.Descricao + "\" com o(s) c\u00F3digo(s) a seguir: <br/>";
                    mensagem += codigos + "<br/><br/>Deseja continuar?";
                    MsgBoxJS(mensagem, MsgBoxOptions.YesNo, MsgBoxIcon.Alert, function (result) {
                        if (result.Resultado === MsgBoxResult.No) {
                            _this.isContinuar = false;
                            return;
                        }
                        _this.ClicarGravar();
                    });
                    this.isContinuar = true;
                    return false;
                }
            }
            else {
                return true;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_GruCli_Angular.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.isContinuar = false;
        this.PreencherGridGrupoFiscal();
        return true;
    };
    C_GruCli_Angular.prototype.PreencherGridGrupoFiscal = function () {
        try {
            var parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch('GetRegistrosGrupoFiscal', parametros);
            this.gridGrupoFiscal.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_GruCli_Angular.prototype.OnClicouBotaoNovoCliente = function (s, e) {
        e.processOnServer = false;
        this.LimparCamposCliente();
    };
    C_GruCli_Angular.prototype.OnClicouBotaoIncluirCliente = function (s, e) {
        e.processOnServer = false;
        this.GravarCliente();
    };
    C_GruCli_Angular.prototype.OnClicouBotaoRemoverCliente = function (s, e) {
        e.processOnServer = false;
        try {
            var retorno = void 0;
            var parametros = void 0;
            if (this.txtGrupoFiscal.GetText() === '') {
                MostrarAlerta(this.CampoObrigatorio('Grupo Fiscal'));
                return false;
            }
            if (this.txtCliente.GetText() === '') {
                MostrarAlerta(this.CampoObrigatorio('Cliente'));
                return false;
            }
            parametros = {
                GrupoFiscal: this.txtGrupoFiscal.GetText().CNum(),
                Cliente: this.txtCliente.GetText().CNum(),
                NomeTela: ValoresSismoura.NomeTela
            };
            retorno = this.ExecutarFuncaoServerSideSynch('RemoverCliente', parametros);
            if (!retorno) {
                MostrarAlerta('Este cliente não esta vinculado a esse grupo fiscal!');
                return false;
            }
            MostrarMensagem('Cliente removido com sucesso!');
            this.txtCliente.Limpar();
            this.PreencherGridCliente();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_GruCli_Angular.prototype.GravarCliente = function () {
        var pessoa;
        var parametros;
        try {
            if (this.txtGrupoFiscal.GetText() === '') {
                MostrarAlerta(this.CampoObrigatorio('Grupo Fiscal'));
                return false;
            }
            if (this.txtCliente.GetText() === '') {
                MostrarAlerta(this.CampoObrigatorio('Cliente'));
                return false;
            }
            parametros = {
                Cliente: this.txtCliente.GetText().CNum(),
                GrupoFiscal: this.txtGrupoFiscal.GetText().CNum(),
                NomeTela: ValoresSismoura.NomeTela
            };
            pessoa = this.ExecutarFuncaoServerSideSynch('GravarAlterarCliente', parametros);
            MostrarMensagem('Cliente vinculado com sucesso!');
            this.txtCliente.Limpar();
            this.PreencherGridCliente();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_GruCli_Angular.prototype.PreencherGridCliente = function () {
        try {
            var parametros = void 0;
            var retorno = void 0;
            parametros = {
                GrupoFiscal: this.txtGrupoFiscal.GetText().CNum()
            };
            if (this.txtGrupoFiscal.GetText()) {
                retorno = this.ExecutarFuncaoServerSideSynch('GetByGrupoFiscalLista', parametros);
                this.gridCliente.PreencherGrid(retorno);
            }
            else {
                this.LimparCamposCliente();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_GruCli_Angular.prototype.LimparCampos = function () {
        this.txtCodigo.SetText('');
        this.txtDescricao.SetText('');
    };
    C_GruCli_Angular.prototype.LimparCamposCliente = function () {
        this.txtCliente.Limpar();
        this.txtGrupoFiscal.Limpar();
        this.gridCliente.PreencherGrid(null);
    };
    C_GruCli_Angular.prototype.CampoObrigatorio = function (campo) {
        return 'Preencha o campo corretamente: ' + campo;
    };
    return C_GruCli_Angular;
}(MouraPageCadastroAngular));
var c_GruCli_Angular = new C_GruCli_Angular();
//# sourceMappingURL=C_GruCli_Angular.js.map