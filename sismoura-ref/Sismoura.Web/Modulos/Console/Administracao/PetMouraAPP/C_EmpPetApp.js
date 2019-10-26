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
var C_EmpPetApp = /** @class */ (function (_super) {
    __extends(C_EmpPetApp, _super);
    function C_EmpPetApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_EmpPetApp.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EmpPetApp.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EmpPetApp.prototype, "chkAtivoProd", {
        get: function () {
            return window['chkAtivoProd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EmpPetApp.prototype, "chkAtivoHom", {
        get: function () {
            return window['chkAtivoHom_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EmpPetApp.prototype, "txtApiProd", {
        get: function () {
            return window['txtApiProd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_EmpPetApp.prototype, "txtApiHom", {
        get: function () {
            return window['txtApiHom_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_EmpPetApp.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_EmpPetApp.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.Procurou, this.OnProcurouCliente, this);
        }
        if (this.chkAtivoHom) {
            adicionarEventoMoura(this.chkAtivoHom.CheckChanged, this.OnCheckChanged, this);
        }
        if (this.chkAtivoProd) {
            adicionarEventoMoura(this.chkAtivoProd.CheckChanged, this.OnCheckChanged, this);
        }
    };
    C_EmpPetApp.prototype.Limpar = function () {
        _super.prototype.Limpar.call(this);
    };
    C_EmpPetApp.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_EmpPetApp.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_EmpPetApp.prototype.OnProcurouCliente = function (s, e) {
        var codCliente = CNum(this.txtCodigo.GetText());
        if (codCliente > 0) {
            if (!this.VerificaEmpresaExistente(codCliente)) {
                this.PreencherDadosCliente(codCliente);
            }
        }
    };
    C_EmpPetApp.prototype.PreencherGrade = function () {
        var parametros;
        try {
            parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_EmpPetApp.prototype.OnSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.data["Codigo_Cliente"]);
    };
    C_EmpPetApp.prototype.VerificaEmpresaExistente = function (codCliente) {
        var parametros;
        try {
            parametros = {
                codCliente: codCliente
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("VerificaEmpresaPetApp", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_EmpPetApp.prototype.PreencherDadosCliente = function (codCliente) {
        var _this = this;
        var parametros;
        try {
            parametros = {
                codCliente: codCliente
            };
            this.ExecutarFuncaoServerSideAsynch("GetDadosCliente", parametros, function (d) {
                fecharEspera();
                var dados = GetRetornoAJAX(d);
                if (dados) {
                    _this.EntityTela.Nome_Exibir = dados.Nome_Exibir;
                    _this.EntityTela.Cnpj = dados.Cnpj;
                    _this.EntityTela.Endereco = dados.Endereco_Nome;
                    _this.EntityTela.Numero_Endereco = dados.Numero_Endereco;
                    _this.EntityTela.Complemento_Endereco = dados.Complemento_Endereco;
                    _this.EntityTela.Bairro = dados.Bairro;
                    _this.EntityTela.Cidade = dados.Cidade;
                    _this.EntityTela.Cep = dados.Cep;
                    _this.EntityTela.Telefone = dados.Telefone;
                    _this.EntityTela.Celular = dados.Celular;
                    _this.EntityTela.Email = dados.Email;
                }
                _this.RefreshAngular();
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    C_EmpPetApp.prototype.OnCheckChanged = function (s, e) {
        var check = s;
        if (check.ID == "chkAtivoProd") {
            this.txtApiProd.Obrigatorio = check.Checked;
        }
        else if (check.ID == "chkAtivoHom") {
            this.txtApiHom.Obrigatorio = check.Checked;
        }
    };
    return C_EmpPetApp;
}(MouraPageCadastroAngular));
var c_EmpPetApp = new C_EmpPetApp();
//# sourceMappingURL=C_EmpPetApp.js.map