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
var MouraGravouSucessoEventArgs = /** @class */ (function () {
    function MouraGravouSucessoEventArgs() {
    }
    return MouraGravouSucessoEventArgs;
}());
var MouraAntesGravarEventArgs = /** @class */ (function () {
    function MouraAntesGravarEventArgs() {
    }
    return MouraAntesGravarEventArgs;
}());
var MouraAntesExcluirEventArgs = /** @class */ (function () {
    function MouraAntesExcluirEventArgs() {
    }
    return MouraAntesExcluirEventArgs;
}());
var MouraLimpouEventArgs = /** @class */ (function () {
    function MouraLimpouEventArgs() {
    }
    return MouraLimpouEventArgs;
}());
var MouraDepoisPesquisarEventArgs = /** @class */ (function (_super) {
    __extends(MouraDepoisPesquisarEventArgs, _super);
    function MouraDepoisPesquisarEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraDepoisPesquisarEventArgs;
}(MouraEventArgs));
var MouraEntidadeCancelavel = /** @class */ (function () {
    function MouraEntidadeCancelavel() {
    }
    return MouraEntidadeCancelavel;
}());
var MouraPageCadastroAngular = /** @class */ (function (_super) {
    __extends(MouraPageCadastroAngular, _super);
    function MouraPageCadastroAngular() {
        var _this = _super.call(this) || this;
        _this.AntesGravar = new MouraGenericEventHandler();
        _this.GravouSucesso = new MouraGenericEventHandler();
        _this.AntesExcluir = new MouraGenericEventHandler();
        _this.ExcluiuSucesso = new MouraEventHandler();
        _this.LimpouRegistro = new MouraGenericEventHandler();
        _this.AntesClickBotaoNovo = new MouraGenericEventHandler();
        _this.connectionString = {};
        _this.DepoisPesquisar = new MouraGenericEventHandler();
        return _this;
    }
    MouraPageCadastroAngular.prototype.GetScope = function () {
        return angular.element(document.getElementsByTagName("form")).scope();
    };
    Object.defineProperty(MouraPageCadastroAngular.prototype, "EntityTela", {
        get: function () {
            if (this.GetScope()) {
                return this.GetScope().Entity;
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPageCadastroAngular.prototype, "IsRegistroNovo", {
        get: function () {
            return this._isRegistroNovo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPageCadastroAngular.prototype, "BotoesCadastro", {
        //public SelecionouExistente: boolean;
        get: function () {
            return window["BotoesCadastro_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPageCadastroAngular.prototype, "hdnCampoCodigoAngular", {
        get: function () {
            return $("#hdnCampoCodigoAngular")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPageCadastroAngular.prototype, "hdnCodigoCheckIn", {
        get: function () {
            return $("#hdnCodigoCheckIn")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPageCadastroAngular.prototype, "hdnCodigoConvenio", {
        get: function () {
            return $("#hdnCodigoConvenio")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPageCadastroAngular.prototype, "hdnAutorizacaoConvenio", {
        get: function () {
            return $("#hdnAutorizacaoConvenio")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPageCadastroAngular.prototype, "hdnIsModalAg", {
        get: function () {
            return $("#hdnIsModalAg")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPageCadastroAngular.prototype, "hdnIdUpdPanel", {
        get: function () {
            return $("#hdnIdUpdPanel")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPageCadastroAngular.prototype, "hdnIdHdnRetorno", {
        get: function () {
            return $("#hdnIdHdnRetorno")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPageCadastroAngular.prototype, "hdnIdMouraTelaModal", {
        get: function () {
            return $("#hdnIdMouraTelaModal")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPageCadastroAngular.prototype, "hdnIDAbrir", {
        get: function () {
            return $("#hdnIDAbrir")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPageCadastroAngular.prototype, "IsModal", {
        get: function () {
            if (this.hdnIsModalAg) {
                if (this.hdnIsModalAg.value == "S") {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPageCadastroAngular.prototype, "CampoCodigoID", {
        get: function () {
            if (this.hdnCampoCodigoAngular) {
                return this.hdnCampoCodigoAngular.value;
            }
            else {
                return "";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPageCadastroAngular.prototype, "CodigoValor", {
        get: function () {
            var retorno = "";
            if (!String.IsNullOrWhiteSpace(this.CampoCodigoID)) {
                retorno = $("#" + this.CampoCodigoID).val();
            }
            if (String.IsNullOrWhiteSpace(retorno)) {
                retorno = "";
            }
            return retorno;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPageCadastroAngular.prototype, "AtributoID", {
        get: function () {
            var retorno = $("#hdnAtributoID").val();
            if (String.IsNullOrWhiteSpace(retorno)) {
                retorno = "Codigo";
            }
            return retorno;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPageCadastroAngular.prototype, "CampoCodigoProcura", {
        get: function () {
            var campoIDProcura = $("#hdnCampoIdProcura")[0];
            if (campoIDProcura && campoIDProcura.value != "") {
                return window[campoIDProcura.value + "_Object"];
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    MouraPageCadastroAngular.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.BotoesCadastro) {
            adicionarEventoMoura(this.BotoesCadastro.ClickGravar, this.OnClickGravar, this);
            adicionarEventoMoura(this.BotoesCadastro.ClickExcluir, this.OnClickExcluir, this);
            adicionarEventoMoura(this.BotoesCadastro.ClickNovo, this.OnClickNovo, this);
        }
        if (this.CampoCodigoProcura && this.CampoCodigoProcura.BotaoNovo) {
            adicionarEventoDevExpress(this.CampoCodigoProcura.BotaoNovo.Click, this.OnClickNovoProcura, this);
        }
        if (this.Gravou) {
            this.OnDepoisGravar();
            this.Gravou = false;
        }
        //this.Limpar();
    };
    MouraPageCadastroAngular.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        setTimeout(function () {
            if (_this.GetScope() && _this.hdnIDAbrir && !String.IsNullOrWhiteSpace(_this.hdnIDAbrir.value)) {
                // this.OnAtualizouID(this.hdnIDAbrir.value, "", this.GetScope());
                _this.EntityTela[_this.AtributoID] = _this.hdnIDAbrir.value.CNum();
                _this.hdnIDAbrir.value = "";
                _this.GetScope().$apply();
            }
        }, 500);
    };
    MouraPageCadastroAngular.prototype.OnClickGravar = function (s, e) {
        e.cancelar = true;
        this.ClicarGravar();
    };
    MouraPageCadastroAngular.prototype.OnClickExcluir = function (s, e) {
        if (this.OnAntesDeletar()) {
            this.ExcluirAngular();
        }
        e.cancelar = true;
    };
    MouraPageCadastroAngular.prototype.OnClickNovo = function (s, e) {
        if (this.OnAntesNovo()) {
            this.ClicouBotaoNovo();
        }
        e.cancelar = true;
    };
    MouraPageCadastroAngular.prototype.ClicouBotaoNovo = function () {
        this.AntesClickBotaoNovo.FireEvent(this, new MouraEventArgs());
        this.Limpar();
        RecebeFoco(this.CampoCodigoID);
    };
    MouraPageCadastroAngular.prototype.OnClickNovoProcura = function (s, e) {
        e.processOnServer = false;
        this.ClicouBotaoNovo();
    };
    MouraPageCadastroAngular.prototype.OnAntesGravar = function () {
        return true;
    };
    MouraPageCadastroAngular.prototype.OnAntesDeletar = function () {
        return true;
    };
    MouraPageCadastroAngular.prototype.OnAntesNovo = function () {
        return true;
    };
    MouraPageCadastroAngular.prototype.OnDepoisGravar = function () {
        return true;
    };
    MouraPageCadastroAngular.prototype.OnDepoisDeletar = function () {
        return true;
    };
    MouraPageCadastroAngular.prototype.OnDepoisClickNovo = function () {
        return true;
    };
    MouraPageCadastroAngular.prototype.Limpar = function () {
        var ee = {};
        var ec;
        if (this.GetScope().Entity) {
            ec = angular.copy(this.GetScope().Entity);
            if (ec[this.AtributoID] != undefined) {
                delete ec[this.AtributoID];
            }
        }
        if (ec) {
            if (JSON.stringify(ee) == JSON.stringify(ec)) {
                delete this.GetScope().Entity[this.AtributoID];
                this.GetScope().$applyAsync();
                return;
            }
        }
        this._isRegistroNovo = false;
        this.OnDepoisLimpar(ee);
        if (this.LimpouRegistro) {
            var args = new MouraLimpouEventArgs();
            args.Entity = ee;
            this.LimpouRegistro.FireEvent(this, args);
        }
        //Cria o atributo ID da classe
        if (!String.IsNullOrWhiteSpace(this.AtributoID)) {
            ee[this.AtributoID] = 0;
        }
        //this.GetScope().Entity = ee; 
        //this.GetScope().$applyAsync(); //Comentado para sempre passar no OnDepoisSetEntidade
        this.SetEntity(ee);
    };
    MouraPageCadastroAngular.prototype.GetValueEntity = function (property) {
        var entity = this.GetScope().Entity;
        var retorno = null;
        if (!entity || entity[property] == undefined || entity[property] == null) {
            retorno = null;
        }
        else {
            retorno = entity[property];
        }
        return retorno;
    };
    MouraPageCadastroAngular.prototype.OnAntesBuscarExistente = function () {
    };
    MouraPageCadastroAngular.prototype.OnDepoisBuscarExistente = function (Entity) {
    };
    MouraPageCadastroAngular.prototype.OnAntesSetEntidade = function (eventArg) {
    };
    MouraPageCadastroAngular.prototype.SetEntity = function (Entidade) {
        var ee = Entidade;
        var evtArg = new MouraEntidadeCancelavel();
        if (ee == null || ee == undefined) {
            ee = {};
        }
        evtArg.Cancelar = false;
        evtArg.Entidade = ee;
        this.OnAntesSetEntidade(evtArg);
        if (!evtArg.Cancelar) {
            this.GetScope().Entity = ee;
        }
        this.GetScope().$applyAsync();
    };
    MouraPageCadastroAngular.prototype.OnDepoisLimpar = function (Entity) {
    };
    MouraPageCadastroAngular.prototype.IsSessaoExpirada = function (retorno) {
        if (retorno && retorno.IsSessaoExpirada &&
            this.hdnLoginURL && !String.IsNullOrWhiteSpace(this.hdnLoginURL.value)) {
            window.location.href = this.hdnLoginURL.value;
            return true;
        }
        return false;
    };
    MouraPageCadastroAngular.prototype.MostrarMensagemRetorno = function (retorno) {
        if (retorno.Erro) {
            if (!String.IsNullOrWhiteSpace(retorno.MensagemAlerta)) {
                MostrarAlerta(retorno.MensagemAlerta);
            }
            if (!String.IsNullOrWhiteSpace(retorno.MensagemErro)) {
                MostrarError(retorno.MensagemErro);
            }
        }
        else {
            if (!String.IsNullOrWhiteSpace(retorno.MensagemRetorno)) {
                MostrarMensagem(retorno.MensagemRetorno);
            }
        }
        erroSistema = retorno.StackTrace;
        if (!String.IsNullOrWhiteSpace(retorno.AtributoFoco)) {
            var retrono = $("[ng-model='" + retorno.AtributoFoco + "'], [ng-model='Entity." + retorno.AtributoFoco + "']");
            retrono.focus();
        }
    };
    MouraPageCadastroAngular.prototype.GravarAngular = function () {
        var _this = this;
        try {
            var retorno;
            var parametros;
            var parAdicionais;
            var entidade = this.GetScope().Entity;
            parAdicionais = {};
            parAdicionais.Parametros = [];
            var codigoRegistro = this.CodigoValor;
            //verifica as permissões da tela
            if (CNum(codigoRegistro) > 0) { //alterando
                if (!this.PermissoesTela.Alterar) {
                    MostrarAlerta("Usuário não tem permissão para alterar");
                    return false;
                }
            }
            else { //gravando
                if (!this.PermissoesTela.Gravar) {
                    MostrarAlerta("Usuário não tem permissão para gravar");
                    return false;
                }
            }
            if (this.AntesGravar) {
                var ag = new MouraAntesGravarEventArgs();
                ag.Entity = entidade;
                ag.ParametrosAdicionais = parAdicionais;
                if (this.connectionString && this.connectionString.Valor != null && !String.IsNullOrWhiteSpace(this.connectionString.Valor)) {
                    ag.ParametrosAdicionais.Parametros.push(this.connectionString);
                }
                this.AntesGravar.FireEvent(this, ag);
            }
            var hdnRet = "";
            var hdnUpd = "";
            var idMouraModal = "";
            if (this.hdnIdHdnRetorno) {
                hdnRet = this.hdnIdHdnRetorno.value;
            }
            if (this.hdnIdUpdPanel) {
                hdnUpd = this.hdnIdUpdPanel.value;
            }
            if (this.hdnIdMouraTelaModal) {
                idMouraModal = this.hdnIdMouraTelaModal.value;
            }
            parametros = {
                nomeTela: ValoresSismoura.NomeTela,
                Entidade: JSON.stringify(entidade),
                ParametrosAdicionais: JSON.stringify(parAdicionais),
                isModal: this.IsModal,
                idHdnRetorno: hdnRet,
                idUPDPanel: hdnUpd,
                idMouraTelaModal: idMouraModal,
            };
            abrirEspera("Aguarde. Gravando o registro");
            this.ExecutarFuncaoServerSideAsynch("GravarAngular", parametros, function (d) {
                fecharEspera();
                retorno = GetRetornoAJAX(d);
                if (_this.IsSessaoExpirada(retorno)) {
                    return false;
                }
                if (retorno.Erro) {
                    if (retorno.CodigoErro == 1) {
                        MsgBoxJS(retorno.MensagemAlerta, MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(_this.OnSelecionouOpcaoGravarDuplicado, _this));
                        return false;
                    }
                    _this.MostrarMensagemRetorno(retorno);
                    return false;
                }
                else {
                    _this.SetEntity(retorno.Entidade);
                    if (retorno.MensagemRetorno != '') {
                        _this.MostrarMensagemRetorno(retorno);
                    }
                    if (_this.GravouSucesso) {
                        var args = new MouraGravouSucessoEventArgs();
                        args.IsRegistroNovo = true;
                        _this.GravouSucesso.FireEvent(_this, args);
                        _this.OnDepoisGravar();
                    }
                    try {
                        if (!String.IsNullOrWhiteSpace(retorno.ScriptExecutar)) {
                            eval(retorno.ScriptExecutar);
                        }
                    }
                    catch (ex) {
                        LogarException(ex);
                    }
                }
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
            return true;
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    MouraPageCadastroAngular.prototype.ExcluirAngular = function () {
        if (this.CodigoValor.CNum() <= 0) {
            MostrarAlerta("Informe o registro que será excluído");
            return;
        }
        if (!this.PermissoesTela.Excluir) {
            MostrarAlerta("Usuário não tem permissão para excluir");
            return;
        }
        MsgBoxJS("Deseja realmente excluir o registro?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouOpcaoExcluir, this));
    };
    MouraPageCadastroAngular.prototype.OnSelecionouOpcaoExcluir = function (result) {
        try {
            if (result.Resultado == MsgBoxResult.Yes) {
                var retorno;
                var parametros;
                var id = "";
                var scope = this.GetScope();
                var parAdicionais;
                parAdicionais = {};
                parAdicionais.Parametros = [];
                if (scope.Entity[this.AtributoID] != undefined && scope.Entity[this.AtributoID] != null) {
                    id = scope.Entity[this.AtributoID];
                }
                if (this.AntesExcluir) {
                    var ag = new MouraAntesExcluirEventArgs();
                    ag.Entity = scope.Entity;
                    ag.ParametrosAdicionais = parAdicionais;
                    if (this.connectionString && this.connectionString.Valor != null && !String.IsNullOrWhiteSpace(this.connectionString.Valor)) {
                        ag.ParametrosAdicionais.Parametros.push(this.connectionString);
                    }
                    this.AntesExcluir.FireEvent(this, ag);
                }
                parametros = {
                    nomeTela: ValoresSismoura.NomeTela,
                    Codigo: id,
                    ParametrosAdicionais: JSON.stringify(parAdicionais),
                };
                retorno = this.ExecutarFuncaoServerSideSynch("ExcluirAngular", parametros);
                if (this.IsSessaoExpirada(retorno)) {
                    return;
                }
                if (retorno.Erro) {
                    this.MostrarMensagemRetorno(retorno);
                    if (!retorno.Entidade && this.CampoCodigoProcura.PermitirInexistente) {
                        this.Limpar();
                        this.Limpar();
                    }
                }
                else {
                    if (this.OnDepoisDeletar()) {
                        this.excluindoNaoLimpar = true;
                        this.Limpar();
                        if (!this.GetScope().$$phase) {
                            this.GetScope().$apply();
                        }
                        this.excluindoNaoLimpar = false;
                    }
                    if (retorno.MensagemRetorno != '') {
                        this.MostrarMensagemRetorno(retorno);
                    }
                    if (this.ExcluiuSucesso) {
                        this.ExcluiuSucesso.FireEvent(this, new MouraEventArgs());
                    }
                    RecebeFoco(this.CampoCodigoID);
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraPageCadastroAngular.prototype.OnSelecionouOpcaoGravarDuplicado = function (result) {
        try {
            if (result.Resultado == MsgBoxResult.Yes) {
                var retorno;
                var parametros;
                var parAdicionais;
                var entidade = this.GetScope().Entity;
                var Entity;
                Entity = entidade;
                Entity.IgnorarDuplicidade = true;
                parAdicionais = {};
                parAdicionais.Parametros = [];
                if (this.AntesGravar) {
                    var ag = new MouraAntesGravarEventArgs();
                    ag.Entity = entidade;
                    ag.ParametrosAdicionais = parAdicionais;
                    if (this.connectionString && this.connectionString.Valor != null && !String.IsNullOrWhiteSpace(this.connectionString.Valor)) {
                        ag.ParametrosAdicionais.Parametros.push(this.connectionString);
                    }
                    this.AntesGravar.FireEvent(this, ag);
                }
                var hdnRet = "";
                var hdnUpd = "";
                var idMouraModal = "";
                if (this.hdnIdHdnRetorno) {
                    hdnRet = this.hdnIdHdnRetorno.value;
                }
                if (this.hdnIdUpdPanel) {
                    hdnUpd = this.hdnIdUpdPanel.value;
                }
                if (this.hdnIdMouraTelaModal) {
                    idMouraModal = this.hdnIdMouraTelaModal.value;
                }
                parametros = {
                    nomeTela: ValoresSismoura.NomeTela,
                    Entidade: JSON.stringify(Entity),
                    ParametrosAdicionais: JSON.stringify(parAdicionais),
                    isModal: this.IsModal,
                    idHdnRetorno: hdnRet,
                    idUPDPanel: hdnUpd,
                    idMouraTelaModal: idMouraModal,
                };
                retorno = this.ExecutarFuncaoServerSideSynch("GravarAngular", parametros);
                if (this.IsSessaoExpirada(retorno)) {
                    return false;
                }
                if (retorno.Erro) {
                    this.MostrarMensagemRetorno(retorno);
                    return false;
                }
                else {
                    this.SetEntity(retorno.Entidade);
                    if (retorno.MensagemRetorno != '') {
                        this.MostrarMensagemRetorno(retorno);
                    }
                    if (this.GravouSucesso) {
                        var args = new MouraGravouSucessoEventArgs();
                        args.IsRegistroNovo = true;
                        this.GravouSucesso.FireEvent(this, args);
                        this.OnDepoisGravar();
                    }
                    try {
                        if (!String.IsNullOrWhiteSpace(retorno.ScriptExecutar)) {
                            eval(retorno.ScriptExecutar);
                        }
                    }
                    catch (ex) {
                        LogarException(ex);
                    }
                    return true;
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraPageCadastroAngular.prototype.OnSelecionouOpcaoInexistente = function (result) {
        try {
            if (result.Resultado == MsgBoxResult.Yes) {
                return;
            }
            //this.SelecionouExistente = true;
            this.Limpar();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraPageCadastroAngular.prototype.ClicarGravar = function () {
        try {
            if (!this.ValidarCamposObrigatorios())
                return false;
            if (this.OnAntesGravar()) {
                return this.GravarAngular();
            }
            else {
                return false;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraPageCadastroAngular.prototype.ClicarExcluir = function () {
        this.BotoesCadastro.BotaoExcluir.DoClick();
    };
    MouraPageCadastroAngular.prototype.ClicarNovo = function () {
        if (this.BotoesCadastro && this.BotoesCadastro.BotaoNovo) {
            this.BotoesCadastro.BotaoNovo.DoClick();
        }
    };
    MouraPageCadastroAngular.prototype.OnAtualizouID = function (newValue, oldValue, scope) {
        if (this.excluindoNaoLimpar)
            return;
        if (!newValue && !oldValue)
            return;
        if (newValue == oldValue)
            return;
        var codigo;
        try {
            //codigo = scope.Entity[this.AtributoID];
            codigo = newValue;
        }
        catch (e) {
            codigo = null;
        }
        this.PreencherEntidade(codigo);
    };
    MouraPageCadastroAngular.prototype.PreencherEntidade = function (Codigo) {
        try {
            var retorno;
            var parametros;
            var parAdicionais;
            parAdicionais = {};
            parAdicionais.Parametros = [];
            //if (this.AntesExcluir) {
            //    var ag = new MouraAntesExcluirEventArgs();
            //    ag.Entity = scope.Entity;
            //    ag.ParametrosAdicionais = parAdicionais;
            //    this.AntesExcluir.FireEvent(this, ag);
            //}
            if (this.connectionString && this.connectionString.Valor != null && !String.IsNullOrWhiteSpace(this.connectionString.Valor)) {
                parAdicionais.Parametros.push(this.connectionString);
            }
            if (Codigo == undefined || Codigo == null || Codigo == "0") {
                Codigo = "";
            }
            Codigo = "" + Codigo;
            if (String.IsNullOrWhiteSpace(Codigo)) {
                this.Limpar();
                return;
            }
            parametros = {
                id: Codigo,
                ParametrosAdicionais: JSON.stringify(parAdicionais)
            };
            this.OnAntesBuscarExistente();
            retorno = this.ExecutarFuncaoServerSideSynch("ObterPorCodigoAngular", parametros);
            if (this.IsSessaoExpirada(retorno)) {
                return;
            }
            if (retorno) {
                if (retorno.Erro) {
                    this.MostrarMensagemRetorno(retorno);
                }
                else {
                    if (!retorno.Entidade) {
                        if (this.CampoCodigoProcura.PermitirInexistente && (!String.IsNullOrWhiteSpace(Codigo) && Codigo.CNum() != 0)) {
                            MsgBoxJS("Deseja realmente informar o código manualmente do registro?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouOpcaoInexistente, this));
                            return;
                            //if (Codigo.CNum() <= 32767) {
                            //    MsgBoxJS("Deseja realmente informar o código manualmente do registro?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouOpcaoInexistente, this));
                            //    //this.SelecionouExistente = false;
                            //    return;
                            //}
                            //else {
                            //    MostrarAlerta("Por favor, digite um número até 32767!");
                            //    this.ClicarNovo();
                            //    return;
                            //}
                        }
                        this._isRegistroNovo = false;
                        this.Limpar();
                        if (!String.IsNullOrWhiteSpace(Codigo) && Codigo.CNum() > 0) {
                            //MostrarAlerta('Registro não encontrado ou inativo');
                            this.CampoCodigoProcura.RegistroInexistente();
                            RecebeFoco(this.CampoCodigoID);
                        }
                    }
                    else {
                        if (JSON.stringify(this.EntityTela) != JSON.stringify(retorno.Entidade)) {
                            this._isRegistroNovo = true;
                            this.OnDepoisBuscarExistente(retorno.Entidade);
                            this.SetEntity(retorno.Entidade);
                            var eArg = {};
                            eArg.Entity = retorno.Entidade;
                            this.DepoisPesquisar.FireEvent(this, eArg);
                        }
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraPageCadastroAngular.prototype.CriarItemParametro = function (item, valor) {
        var aux = {};
        aux.Item = item;
        aux.Valor = valor;
        return aux;
    };
    return MouraPageCadastroAngular;
}(MouraPageAngular));
//# sourceMappingURL=MouraPageCadastroAngular.js.map