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
var Comp_Atu = /** @class */ (function (_super) {
    __extends(Comp_Atu, _super);
    function Comp_Atu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Comp_Atu.prototype, "Dados", {
        get: function () {
            if (!this.GetScope()["Dados"]) {
                return [];
            }
            else {
                return this.GetScope()["Dados"];
            }
        },
        set: function (value) {
            this.GetScope()["Dados"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Comp_Atu.prototype, "hdnCodChave", {
        get: function () {
            return window['hdnCodChave'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Comp_Atu.prototype, "hdnCodDeposito", {
        get: function () {
            return window['hdnCodDeposito'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Comp_Atu.prototype, "hdnCodEmpresa", {
        get: function () {
            return window['hdnCodEmpresa'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Comp_Atu.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Comp_Atu.prototype, "txtSomarNoCusto", {
        get: function () {
            return window['txtSomarNoCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Comp_Atu.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grd) {
            adicionarEventoMoura(this.grd.Grid.RowValidating, this.OnAlterouItemGrade, this);
        }
    };
    Comp_Atu.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.txtSomarNoCusto.SetText("0,00");
        this.CarregarDados();
    };
    Comp_Atu.prototype.CarregarDados = function () {
        var _this = this;
        var parametros = {
            codChave: CNum(this.hdnCodChave.value),
            codDeposito: CNum(this.hdnCodDeposito.value),
            codEmpresa: CNum(this.hdnCodEmpresa.value)
        };
        abrirEspera("");
        this.ExecutarFuncaoServerSideAsynch("CarregarInformacoes", parametros, function (d) {
            fecharEspera();
            _this.Dados = GetRetornoAJAX(d);
            _this.AtualizarGrid();
        }, this.TratarErroFuncaoAsync, this);
    };
    Comp_Atu.prototype.AtualizarGrid = function () {
        //this.grd.Grid.PreencherGrid(this.Dados);
        if (ValoresSismoura.ConfiguracoesRetaguarda.Varios_Precos) {
            this.grd.Grid.GroupBy("Nome");
            this.grd.Grid.ExpandAll(0);
        }
        this.RefreshAngular();
    };
    Comp_Atu.prototype.MarcarTodos = function () {
        this.grd.Grid.selectAll();
    };
    Comp_Atu.prototype.DesmarcarTodos = function () {
        this.grd.Grid.deselectAll();
    };
    Comp_Atu.prototype.ClickSomar = function () {
        var _this = this;
        try {
            var parametros = {
                strListaPrecos: JSON.stringify(this.Dados),
                somarNoCusto: this.txtSomarNoCusto.GetText().CNum()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("SomarCusto", parametros, function (d) {
                try {
                    fecharEspera();
                    _this.Dados = GetRetornoAJAX(d).Dados;
                    _this.AtualizarGrid();
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Comp_Atu.prototype.ClickCorrigir = function () {
        var _this = this;
        MsgBoxJS("Deseja realmente atualizar os preços?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
            if (result.Resultado == MsgBoxResult.Yes) {
                _this.AtualizarPrecos();
            }
        }, null);
    };
    Comp_Atu.prototype.AtualizarPrecos = function () {
        try {
            var parametros = {
                strListaPrecos: JSON.stringify(this.grd.Grid.GetSelectedRowsData),
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("AtualizarPrecos", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (!String.IsNullOrWhiteSpace(retorno.MensagemAlerta)) {
                        MostrarAlerta(retorno.MensagemAlerta);
                    }
                    else {
                        MostrarMensagem("Preços atualizados com sucesso");
                        //this.CarregarDados();
                    }
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, this.TratarErroFuncaoAsync, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Comp_Atu.prototype.OnAlterouItemGrade = function (s, e) {
        try {
            var propriedade = "";
            for (var p in e.newData) {
                propriedade = p;
            }
            var item = cloneObject(e.oldData);
            if (!String.IsNullOrWhiteSpace(propriedade)) {
                item[propriedade] = e.newData[propriedade];
            }
            var parametros = {
                strItem: JSON.stringify(item),
                strListaPrecos: JSON.stringify(this.Dados),
                campoAlterado: propriedade,
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ValidarDadosPrecos", parametros);
            if (!String.IsNullOrWhiteSpace(retorno.MensagemAlerta)) {
                MostrarAlerta(retorno.MensagemAlerta);
                this.grd.Grid.CancelChanges();
            }
            else {
                this.Dados = retorno.Dados;
                this.RefreshAngular();
                //Não é necessário fazer a atualização pois quando seto no this.Dados a alteração já é adicionada na lista
                //this.AtualizarGrid();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Comp_Atu.prototype.Imprimir = function () {
        try {
            var parametros = {
                codChave: CNum(this.hdnCodChave.value),
                dadosGrade: JSON.stringify(this.grd.Grid.DataSource)
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("Imprimir", parametros, function (d) {
                fecharEspera();
                AbrirReport("~/Report/Fixos/", "Atualizar_Precos.REPX");
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return Comp_Atu;
}(MouraPageAngular));
var comp_Atu = new Comp_Atu();
//# sourceMappingURL=Comp_Atu.js.map