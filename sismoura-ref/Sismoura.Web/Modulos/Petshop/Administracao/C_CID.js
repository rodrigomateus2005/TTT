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
var C_CID = /** @class */ (function (_super) {
    __extends(C_CID, _super);
    function C_CID() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CID.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CID.prototype, "txtGrupo", {
        get: function () {
            return window['txtGrupoo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CID.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CID.prototype, "chkAtivo", {
        get: function () {
            return window['chkAtivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CID.prototype, "btnProtocolo", {
        get: function () {
            return window["btnProtocolo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CID.prototype, "mdAnexo", {
        get: function () {
            return window["mdAnexo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    C_CID.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
            adicionarEventoMoura(this.Grid.CellPrepared, this.OnGridCellPrepared, this);
        }
        if (this.btnProtocolo)
            adicionarEventoMoura(this.btnProtocolo.Click, this.btnProtocolo_ClickBotao, this);
    };
    C_CID.prototype.btnProtocolo_ClickBotao = function (s, e) {
        e.processOnServer = false;
        if (this.txtCodigo.GetText().CNum() == 0) {
            MostrarAlerta("Informe um CID antes de anexar um protocolo!");
            return;
        }
        var path;
        try {
            var parametros = void 0;
            if (this.EntityTela.Codigo > 0) {
                parametros = {
                    codigo: this.EntityTela.Codigo
                };
            }
            else {
                parametros = {
                    codigo: 0
                };
            }
            path = this.ExecutarFuncaoServerSideSynch("ObterPath", parametros);
            this.mdAnexo.MostrarClient(path);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CID.prototype.OnGridCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data != null) {
                if (!e.data.Ativo) {
                    e.cellElement.css("color", "#FF0000");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CID.prototype.OnDepoisBuscarExistente = function (Entidade) {
        try {
            _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CID.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.GetCadastrados();
        return true;
    };
    C_CID.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_CID.prototype.OnDepoisLimpar = function (Entity) {
        this.GetCadastrados();
        Entity.Ativo = true;
        this.GetScope().$applyAsync();
    };
    C_CID.prototype.GetCadastrados = function () {
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
    return C_CID;
}(MouraPageCadastroAngular));
var c_CID = new C_CID();
//# sourceMappingURL=C_CID.js.map