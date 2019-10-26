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
var C_DescProg = /** @class */ (function (_super) {
    __extends(C_DescProg, _super);
    function C_DescProg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_DescProg.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DescProg.prototype, "grdEmpresas", {
        get: function () {
            return window['grdEmpresas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DescProg.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DescProg.prototype, "mdEmpresas", {
        get: function () {
            return window['mdEmpresas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_DescProg.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
            adicionarEventoMoura(this.Grid.ClickBotaoLinha, this.OnGridClicouBotao, this);
        }
    };
    C_DescProg.prototype.OnGridSelecionouItem = function (s, e) {
        this.lstEmpresa.LimparSelecao();
        this.PreencherEntidade(e.rowKey);
    };
    C_DescProg.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_DescProg.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
        this.PreencherEmpresas(Entity.Desconto_Faixa_Valor_Empresa);
    };
    C_DescProg.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.GetScope().Entity.Desconto_Faixa_Valor_Empresa = [];
        for (var x = 0; x < this.lstEmpresa.GetValues().length; x++) {
            var empresa = {};
            empresa.Empresa = +this.lstEmpresa.GetValues()[x];
            this.GetScope().Entity.Desconto_Faixa_Valor_Empresa.push(empresa);
        }
        if (this.GetScope().Entity.Desconto_Faixa_Valor_Empresa.length <= 0) {
            MostrarAlerta("Nenhuma empresa foi selecionada");
            return false;
        }
        if (this.VerificarFaixaValores(this.EntityTela)) {
            MostrarAlerta("A faixa de desconto informada: R$" + this.EntityTela.Valor_De + " até R$" + this.EntityTela.Valor_Ate + " encontra-se dentro de outra faixa de valor já cadastrada");
            return false;
        }
        if (this.EntityTela.Valor_Desconto_Porcentagem > 100) {
            MostrarAlerta("O desconto não deve ser superior a 100%");
            return false;
        }
        if (this.EntityTela.Valor_Ate < this.EntityTela.Valor_De) {
            MostrarAlerta("O quantia do campo 'Valor Até (R$)' deve ser superior a quantia do campo 'Valor De (R$)'");
            return false;
        }
        if (this.VerificarFaixaValores(this.EntityTela)) {
            MostrarAlerta("A faixa de desconto informada: R$" + this.EntityTela.Valor_De + " até R$" + this.EntityTela.Valor_Ate + " encontra-se dentro de outra faixa de valor já cadastrada");
            return false;
        }
        return true;
    };
    C_DescProg.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_DescProg.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.PreencherEmpresas(Entity.Desconto_Faixa_Valor_Empresa);
    };
    C_DescProg.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_DescProg.prototype.PreencherEmpresas = function (empresas) {
        var codigos = [];
        if (empresas) {
            for (var x = 0; x < empresas.length; x++) {
                codigos.push(empresas[x].Empresa.toString());
            }
            if (this.lstEmpresa) {
                this.lstEmpresa.SetValues(codigos);
            }
        }
        else {
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        }
    };
    C_DescProg.prototype.VerificarFaixaValores = function (Entity) {
        try {
            var parametros;
            var codDesc = 0;
            if (Entity.Id != null || Entity.Id != undefined) {
                codDesc = Entity.Id;
            }
            parametros = {
                codDesc: codDesc,
                valorDe: Entity.Valor_De,
                valorAte: Entity.Valor_Ate
            };
            var faixaExistente = this.ExecutarFuncaoServerSideSynch("VerificarFaixaValor", parametros);
            if (faixaExistente) {
                return true;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return false;
    };
    C_DescProg.prototype.OnGridClicouBotao = function (s, e) {
        if (e.commandName == "btnEmpresa") {
            try {
                var codDesc = ("" + e.data['Id']).CNum();
                var parametros;
                parametros = {
                    codDesc: codDesc
                };
                var empresas = this.ExecutarFuncaoServerSideSynch("GetEmpresasDesconto", parametros);
                this.grdEmpresas.PreencherGrid(empresas);
                this.mdEmpresas.Show();
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    return C_DescProg;
}(MouraPageCadastroAngular));
var c_DescProg = new C_DescProg();
//# sourceMappingURL=C_DescProg.js.map