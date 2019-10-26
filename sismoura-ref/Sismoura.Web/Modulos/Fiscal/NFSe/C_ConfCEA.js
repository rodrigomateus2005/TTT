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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var C_ConfCEA = /** @class */ (function (_super) {
    __extends(C_ConfCEA, _super);
    function C_ConfCEA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ConfCEA.prototype, "cboEmpresaEnvio", {
        get: function () {
            return window['cboEmpresaEnvio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfCEA.prototype, "txtContrato", {
        get: function () {
            return window['txtContrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfCEA.prototype, "chkPrioritario", {
        get: function () {
            return window['chkPrioritario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfCEA.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ConfCEA.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
            adicionarEventoMoura(this.grid.ExcluiuLinhaGrade, this.OnExcluiuRegistroGrade, this);
        }
    };
    C_ConfCEA.prototype.OnSelecionouLinha = function (e, s) {
        this.PreencherEntidade("" + s.rowKey);
        this.EntityTela.Id = s.rowKey;
    };
    C_ConfCEA.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        this.txtContrato.AddParametro("Nome", "S");
        if (!this.GetScope().OnPreencherGrade) {
            this.GetScope().OnPreencherGrade = $.proxy(this.PreencherGrade, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Empresa; }, this.GetScope().OnPreencherGrade);
        }
    };
    C_ConfCEA.prototype.PreencherGrade = function () {
        try {
            var parametros = {
                Id: this.cboEmpresaEnvio.GetValue() || 0
            };
            abrirEspera();
            this.VerificarConfigEnvioAutomatico(parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConfCEA.prototype.VerificarConfigEnvioAutomatico = function (parametros) {
        var _this = this;
        try {
            this.ExecutarFuncaoServerSideAsynch('VerificarConfigEnvioA', parametros, function (d) {
                var lista = GetRetornoAJAX(d);
                if (lista) {
                    parametros = __assign(__assign({}, parametros), { Competencia: lista.Tipo_Data_Competencia });
                    _this.GetCadastrados(parametros);
                }
                else {
                    fecharEspera();
                }
            }, this.TratarErro, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConfCEA.prototype.GetCadastrados = function (parametros) {
        var _this = this;
        try {
            this.ExecutarFuncaoServerSideAsynch('GetCadastrados', parametros, function (d) {
                var cadastros = GetRetornoAJAX(d);
                if (cadastros) {
                    _this.txtContrato.Limpar();
                    _this.grid.PreencherGrid(cadastros);
                }
                fecharEspera();
            }, this.TratarErro, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConfCEA.prototype.TratarErro = function (erro) {
        fecharEspera();
        LogarException(erro);
    };
    C_ConfCEA.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entidade = this.EntityTela;
        var total = 0;
        var adicionar = 0;
        var lista;
        var parametros = {
            codEmpresa: entidade.Empresa
        };
        lista = this.ExecutarFuncaoServerSideSynch("VerificarConfigEnvioA", parametros);
        if (!(lista.Emissao_Todos)) {
            total = this.grid.DataSource.reduce(function (acumulado, atual) { return acumulado + atual.Valor_Contrato; }, 0);
            entidade = this.EntityTela;
            parametros = {
                CodContrato: entidade.Contrato,
                Competencia: lista.Tipo_Data_Competencia
            };
            adicionar = this.ExecutarFuncaoServerSideSynch("BuscaValorContrato", parametros);
            parametros = {
                codEmpresa: entidade.Empresa
            };
            var valorMax = this.ExecutarFuncaoServerSideSynch("BuscaValorMaximoEmissaoPorEmpresa", parametros);
            if (total + adicionar > valorMax) {
                MostrarAlerta("O valor máximo de emissão configurado na tela 'Configurações Envio Automático' foi atingido! ");
                return false;
            }
        }
        parametros = {
            codEmpresa: entidade.Empresa,
            Competencia: lista.Tipo_Data_Competencia
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
        if (this.EntityTela.Id == null) {
            for (var x = 0; x < retorno.length; x++) {
                if (this.EntityTela.Contrato == retorno[x].Codigo_Contrato) {
                    MostrarAlerta("Contrato já configurado!");
                    return false;
                }
            }
        }
        this.RefreshAngular();
        return true;
    };
    C_ConfCEA.prototype.OnExcluiuRegistroGrade = function (s, e) {
        try {
            if (e.item['ID']) {
                var parametros = {
                    codTela: CNum(e.item['ID']),
                    tela: ValoresSismoura.NomeTela,
                    codUsuario: ValoresSismoura.UsuarioLogado
                };
                var resultado = this.ExecutarFuncaoServerSideSynch("ExcluirCst", parametros);
                if (resultado) {
                    MostrarMensagem("Registro excluído com sucesso!");
                }
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_ConfCEA.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_ConfCEA.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        this.LimparCampos();
        return true;
    };
    C_ConfCEA.prototype.OnDepoisLimpar = function () {
        //this.cboEmpresa.Get = this.EntityTela.Empresa;
        _super.prototype.OnDepoisLimpar.call(this, this.EntityTela);
        this.LimparCampos();
    };
    C_ConfCEA.prototype.LimparCampos = function () {
        var entidade = {};
        if (this.EntityTela && this.EntityTela.Empresa) {
            entidade.Empresa = this.EntityTela.Empresa;
        }
        else {
            entidade.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        }
        this.SetEntity(entidade);
        //this.grid.PreencherGrid([]);
    };
    return C_ConfCEA;
}(MouraPageCadastroAngular));
var c_ConfCEA = new C_ConfCEA();
//# sourceMappingURL=C_ConfCEA.js.map