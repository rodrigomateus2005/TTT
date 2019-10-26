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
var C_Baia = /** @class */ (function (_super) {
    __extends(C_Baia, _super);
    function C_Baia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Baia.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Baia.prototype, "cboTamanhoBaia", {
        //get lstServicos(): MouraCheckBoxList {
        //    return window['lstServicos_Object'];
        //}
        get: function () {
            return window['cboTamanhoBaia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Baia.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.AntesGravar, this.OnAntesGravar, this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        adicionarEventoMoura(this.DepoisPesquisar, this.OnDepoisPesquisar, this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.SelecionarRegistro, this);
        }
        this.AtualizarGrid();
    };
    C_Baia.prototype.OnGravouSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_Baia.prototype.OnExcluiuSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_Baia.prototype.AtualizarGrid = function () {
        try {
            var parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("AtualizarGrade", parametros);
            this.Grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Baia.prototype.SelecionarRegistro = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
    };
    C_Baia.prototype.OnDepoisPesquisar = function (s, e) {
        try {
            //var parametros: any = {
            //    codBaia: e.Entity.Codigo
            //}
            //var servicos: SiSMoura.Core.Entity.Servico[] = this.ExecutarFuncaoServerSideSynch("GetServicosVinculadosBaia", parametros);
            //var IdsServicos: string[] = [];
            //for (var i = 0; i < servicos.length; i++) {
            //    IdsServicos.push(servicos[i].Codigo.toString());
            //}
            //if (IdsServicos && IdsServicos.length > 0) {
            //    this.lstServicos.SetValues(IdsServicos)
            //}
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_Baia.prototype.OnAntesGravar = function () {
        var entidade = this.GetScope().Entity;
        //var servicosSelecionados: any[] = this.lstServicos.GetValues();
        //var servicos: SiSMoura.Core.Entity.Animais_Hospedagem_Baia_Servico[] = [];
        //for (var i = 0; i < servicosSelecionados.length; i++) {
        //    let item = <SiSMoura.Core.Entity.Animais_Hospedagem_Baia_Servico>{};
        //    item.Servico = servicosSelecionados[i];
        //    servicos.push(item);
        //}
        //this.GetScope().Entity.Servicos = servicos;
        this.RefreshAngular();
        return _super.prototype.OnAntesGravar.call(this);
    };
    C_Baia.prototype.OnDepoisLimpar = function () {
        //this.lstServicos.LimparSelecao();
        this.cboTamanhoBaia.LimparSelecao;
        _super.prototype.OnDepoisLimpar.call(this, this.GetScope().Entity);
    };
    return C_Baia;
}(MouraPageCadastroAngular));
var c_Baia = new C_Baia();
//# sourceMappingURL=C_Baia.js.map