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
var C_ContaC = /** @class */ (function (_super) {
    __extends(C_ContaC, _super);
    function C_ContaC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ContaC.prototype, "gridCadastrados", {
        get: function () {
            return window['gridCadastrados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContaC.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ContaC.prototype, "txtCodContabil", {
        get: function () {
            return window['txtCodContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ContaC.prototype.Init = function () {
        _super.prototype.Init.call(this);
        //adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        //adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.gridCadastrados) {
            adicionarEventoMoura(this.gridCadastrados.SelecionouLinha, this.OnGridSelecionouItem, this);
            adicionarEventoMoura(this.gridCadastrados.CellPrepared, this.OnGridCellPrepared, this);
        }
    };
    C_ContaC.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        this.OnDepoisLimpar(this.GetScope().Entity);
        if (!this.GetScope().GetCadastrados) {
            this.GetScope().GetCadastrados = $.proxy(this.GetCadastrados, this);
            this.GetScope().$watch(function (scope) { return _this.GetScope().Entity.Empresa; }, function (newValue, oldValue, scope) {
                if (newValue != oldValue) {
                    _this.GetCadastrados();
                }
            });
        }
        this.GetCadastrados();
    };
    C_ContaC.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_ContaC.prototype.OnDepoisLimpar = function (Entity) {
        //Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.lstEmpresa.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
    };
    C_ContaC.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.GetCadastrados();
        return true;
    };
    C_ContaC.prototype.GetCadastrados = function () {
        try {
            var parametros;
            var codEmpresa = 0;
            if (this.GetScope().Entity) {
                //if (this.GetScope().Entity.Empresa != null && this.GetScope().Entity.Empresa != undefined) {
                //    codEmpresa = this.GetScope().Entity.Empresa;
                //}
            }
            parametros = {
                //codEmpresa: ValoresSismoura.EmpresaPadraoUsuario
                codEmpresa: codEmpresa
            };
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.gridCadastrados.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ContaC.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.PreencherEmpresa(Entity);
    };
    C_ContaC.prototype.PreencherEmpresa = function (Entidade) {
        try {
            if (!Entidade.Empresas) {
                Entidade.Empresas = [];
            }
            var empresas = [];
            for (var x = 0; x < Entidade.Empresas.length; x++) {
                empresas.push(Entidade.Empresas[x].Empresa.toString());
            }
            this.lstEmpresa.SetValues(empresas);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ContaC.prototype.ProcuraEmpresa = function (codEmpresa, lista) {
        var retorno = null;
        if (!lista) {
            lista = [];
        }
        for (var x = 0; x <= lista.length - 1; x++) {
            if (lista[x].Empresa == codEmpresa) {
                retorno = lista[x];
                break;
            }
        }
        return retorno;
    };
    C_ContaC.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var Entidade = this.GetScope().Entity;
        if (!this.ValidarMascara(this.txtCodContabil.GetText())) {
            MostrarAlerta("O Código Contábil está divergente da máscara configurada!");
            return false;
        }
        if (this.lstEmpresa) {
            if (!Entidade.Empresas) {
                Entidade.Empresas = [];
            }
            var valores = this.lstEmpresa.GetValues();
            //Verifica as empresas que não estão na lista a ser salva
            for (var x = 0; x <= valores.length - 1; x++) {
                var empresa = this.ProcuraEmpresa(valores[x].CNum(), Entidade.Empresas);
                if (!empresa) {
                    empresa = {};
                    empresa.Id = 0;
                    empresa.Empresa = valores[x].CNum();
                    Entidade.Empresas.push(empresa);
                }
            }
            //Remove da lista as empresas que foram desmarcadas
            var count = 0;
            while (count <= Entidade.Empresas.length - 1) {
                var temp = Entidade.Empresas[count];
                var index = valores.indexOf("" + temp.Empresa);
                //Caso a empresa não esteja selecionada na lista, deve removê-la 
                if (index < 0) {
                    Entidade.Empresas.splice(count, 1);
                    count -= 1;
                }
                count += 1;
            }
        }
        return true;
    };
    C_ContaC.prototype.OnGridCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data != null) {
                if (e.data.Sintetico_Descricao == "Sintético") {
                    e.cellElement.css("font-weight", "bold");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ContaC.prototype.ValidarMascara = function (codContaContabil) {
        var parametros;
        try {
            parametros = {
                codContaContabil: codContaContabil
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ValidarMascara", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_ContaC;
}(MouraPageCadastroAngular));
var c_ContaC = new C_ContaC();
//# sourceMappingURL=C_ContaC.js.map