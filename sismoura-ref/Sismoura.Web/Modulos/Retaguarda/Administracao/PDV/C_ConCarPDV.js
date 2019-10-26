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
var C_ConCarPDV = /** @class */ (function (_super) {
    __extends(C_ConCarPDV, _super);
    function C_ConCarPDV() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ConCarPDV.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCarPDV.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCarPDV.prototype, "txtCampo_Chave", {
        get: function () {
            return window['txtCampo_Chave_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCarPDV.prototype, "chkCarregarPDV", {
        get: function () {
            return window['chkCarregarPDV_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCarPDV.prototype, "chkPossuiCondicaoEmpresa", {
        get: function () {
            return window['chkPossuiCondicaoEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCarPDV.prototype, "txtCampoData", {
        get: function () {
            return window['txtCampo_Data_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConCarPDV.prototype, "txtOrdem", {
        get: function () {
            return window['txtOrdem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ConCarPDV.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_ConCarPDV.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_ConCarPDV.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_ConCarPDV.prototype.PreencherGrade = function () {
        try {
            var parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("GetRegistros", parametros);
            this.Grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConCarPDV.prototype.OnAntesGravar = function () {
        //super.OnAntesGravar();
        //Novos Registros não seram Inseridos
        if (this.EntityTela.Codigo == undefined || this.EntityTela.Codigo == 0) {
            //MostrarAlerta("Não podem ser Inseridos Novos Registros");
            return false;
        }
        if (this.chkCarregarPDV.Checked) {
            this.EntityTela.Carregar_PDV = "S";
        }
        else {
            this.EntityTela.Carregar_PDV = "N";
        }
        // PossuiCondicaoEmpresa
        if (this.chkPossuiCondicaoEmpresa.Checked) {
            this.EntityTela.PossuiCondicaoEmpresa = "S";
        }
        else {
            this.EntityTela.PossuiCondicaoEmpresa = "N";
        }
        // Se o campo data estiver vazio na tela, passar null para gravar no banco de dados
        if (this.txtCampoData.GetText() == "") {
            this.EntityTela.Campo_Data = null;
        }
        if (this.txtOrdem.GetText().trim() == "" || this.EntityTela.Ordem == 0) {
            this.EntityTela.Ordem = null;
        }
        return true;
    };
    C_ConCarPDV.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        if (Entity.Ordem == undefined) {
            this.txtOrdem.SetText("");
        }
        // Carregar_PDV
        if (Entity.Carregar_PDV == "S") {
            this.chkCarregarPDV.Checked = true;
        }
        else {
            this.chkCarregarPDV.Checked = false;
        }
        // PossuiCondicaoEmpresa
        if (Entity.PossuiCondicaoEmpresa == "S") {
            this.chkPossuiCondicaoEmpresa.Checked = true;
        }
        else {
            this.chkPossuiCondicaoEmpresa.Checked = false;
        }
    };
    C_ConCarPDV.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.chkCarregarPDV.Checked = false;
        this.chkPossuiCondicaoEmpresa.Checked = false;
    };
    C_ConCarPDV.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        this.Limpar();
        return true;
    };
    //Bloquear Exclusão
    C_ConCarPDV.prototype.OnAntesDeletar = function () {
        //super.OnAntesDeletar();
        if (this.EntityTela.Codigo != undefined && this.EntityTela.Codigo != 0) {
            MostrarAlerta("O registro selecionado não poderá ser excluido");
            return false;
        }
        return false;
    };
    return C_ConCarPDV;
}(MouraPageCadastroAngular));
var c_ConCarPDV = new C_ConCarPDV();
//# sourceMappingURL=C_ConCarPDV.js.map