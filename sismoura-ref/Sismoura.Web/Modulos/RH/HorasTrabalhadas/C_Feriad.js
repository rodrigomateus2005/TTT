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
var C_Feriad = /** @class */ (function (_super) {
    __extends(C_Feriad, _super);
    function C_Feriad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Feriad.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Feriad.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Feriad.prototype, "lstCidade", {
        get: function () {
            return window['lstCidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Feriad.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grd) {
            adicionarEventoMoura(this.grd.SelecionouLinha, this.OnGrdSelecionouItem, this);
        }
        if (this.cboTipo) {
            adicionarEventoDevExpress(this.cboTipo.Combo.SelectedIndexChanged, this.OnCboTipoChange, this);
        }
    };
    C_Feriad.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Tipo = "N";
        this.lstCidade.Limpar();
        this.lstCidade.SetVisible(false);
        this.PreencherGrade(Entity);
        this.GetScope().$applyAsync();
    };
    C_Feriad.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entidade = this.GetScope().Entity;
        if (entidade.Tipo == "M") {
            if (this.lstCidade.SourceLista.length <= 0) {
                MostrarAlerta("Informe ao menos uma cidade para gravar um feriado como Municipio");
                return false;
            }
            entidade.Cidades = [];
            this.lstCidade.SourceLista.forEach(function (q) {
                entidade.Cidades.push({
                    Cidade: q.Value
                });
            });
        }
        return true;
    };
    C_Feriad.prototype.OnDepoisGravar = function () {
        var _this = this;
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade(this.EntityTela);
        MsgBoxJS("Deseja replicar para outros anos?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
            if (result.Resultado == MsgBoxResult.No)
                return;
            var anoReplicar = "";
            while (String.IsNullOrWhiteSpace(anoReplicar)) {
                anoReplicar = prompt("Digite até qual ano deseja replicar: <br>Obs: o deve ser superior ao ano presente: " + new Date().getFullYear().toString() + " e inferior a 2050.");
                if (!_this.ValidarAnoReplicar(anoReplicar)) {
                    anoReplicar = "";
                }
            }
            var param = {
                entidadeStr: JSON.stringify(_this.EntityTela),
                anoReplicar: anoReplicar.CNum(),
                codUsuario: ValoresSismoura.UsuarioLogado,
                tela: ValoresSismoura.NomeTela
            };
            abrirEspera("");
            _this.ExecutarFuncaoServerSideAsynch("ReplicarFeriado", param, function (d) {
                try {
                    fecharEspera();
                    if (d) {
                        MostrarMensagem("Os feriados foram replicados com sucesso");
                        _this.PreencherGrade(_this.EntityTela);
                    }
                    else {
                        MostrarError("Ocorreu um erro no sistema");
                    }
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, _this);
        });
        return true;
    };
    C_Feriad.prototype.ValidarAnoReplicar = function (anoReplicar) {
        if (anoReplicar.length != 4) {
            MostrarAlerta("Informe um ano válido");
            return false;
        }
        if (!/^\d+$/.test(anoReplicar)) {
            MostrarAlerta("Informe um ano válido");
            return false;
        }
        if (anoReplicar.CNum() <= new Date().getFullYear() || anoReplicar.CNum() > 2050) {
            MostrarAlerta("Informe um ano válido");
            return false;
        }
        return true;
    };
    C_Feriad.prototype.OnDepoisBuscarExistente = function (Entidade) {
        var _this = this;
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        try {
            if (Entidade.Tipo == "M") {
                if (Entidade.Cidades) {
                    this.lstCidade.Limpar();
                    this.lstCidade.SetVisible(true);
                    Entidade.Cidades.forEach(function (q) {
                        _this.lstCidade.txtProcura.Procurar(q.Cidade.toString());
                        _this.lstCidade.btnAdicionar.DoClick();
                    });
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Feriad.prototype.OnGrdSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_Feriad.prototype.PreencherGrade = function (Entidade) {
        try {
            var cadastrados = this.ExecutarFuncaoServerSideSynch("GetCadastrados", {});
            this.grd.PreencherGrid(cadastrados);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Feriad.prototype.OnCboTipoChange = function (s, e) {
        try {
            if (this.cboTipo.GetValue() == "M") {
                this.lstCidade.SetVisible(true);
            }
            else {
                this.lstCidade.Limpar();
                this.lstCidade.SetVisible(false);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_Feriad;
}(MouraPageCadastroAngular));
var c_Feriad = new C_Feriad();
//# sourceMappingURL=C_Feriad.js.map