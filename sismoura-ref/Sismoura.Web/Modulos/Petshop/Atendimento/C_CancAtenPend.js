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
var C_CancAtenPend = /** @class */ (function (_super) {
    __extends(C_CancAtenPend, _super);
    function C_CancAtenPend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CancAtenPend.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CancAtenPend.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CancAtenPend.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CancAtenPend.prototype, "rdbTipoData", {
        get: function () {
            return window['rdbTipoData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CancAtenPend.prototype, "btnExcluir", {
        get: function () {
            return window['btnExcluir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CancAtenPend.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CancAtenPend.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CancAtenPend.prototype, "lblTotalAtendimentos", {
        get: function () {
            return window['lblTotalAtendimentos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_CancAtenPend.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnExcluir) {
            adicionarEventoMoura(this.btnExcluir.Click, this.OnClickExcluir, this);
        }
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnClickGerar, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.OnClickLimpar, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
            //adicionarEventoMoura(this.grid.CellPrepared, this.OnGridCellPrepared, this);
        }
    };
    C_CancAtenPend.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    C_CancAtenPend.prototype.OnSelecionouLinha = function (s, e) {
        this.grid.Grid.element().find("tr").css("font-weight", "normal");
        for (var x = 0; x < this.grid.Grid.getSelectedRowKeys().length; x++) {
            var index = this.grid.Grid.getRowIndexByKey(this.grid.Grid.getSelectedRowKeys()[x]);
            this.grid.Grid.getRowElement(index).css("font-weight", "bold");
        }
    };
    C_CancAtenPend.prototype.OnGridCellPrepared = function (s, e) {
        try {
            //var corFonte: string = ;
            if (e.rowType == "data" && e.data != null) {
                //if ((<any>e.data)) {
                e.cellElement.css("color", "#FF0000");
                //}
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CancAtenPend.prototype.OnClickGerar = function (s, e) {
        e.processOnServer = false;
        this.GetRegistros();
    };
    C_CancAtenPend.prototype.OnClickExcluir = function (s, e) {
        e.processOnServer = false;
        if (this.grid.GetSelectedRowsData.length <= 0) {
            MostrarAlerta("Selecione os registros que deseja excluir!");
            return;
        }
        else {
            var msg = "Deseja realmente excluir o(s) atendimento(s) selecionado(s) ?";
            MsgBoxJS(msg, MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouExcluir, this));
        }
    };
    C_CancAtenPend.prototype.OnSelecionouExcluir = function (result) {
        try {
            if (result.Resultado == MsgBoxResult.Yes) {
                var selecionados = this.grid.GetSelectedRowsData;
                var atendimentos = [];
                var parametros;
                for (var x = 0; x < selecionados.length; x++) {
                    atendimentos.push(selecionados[x].Atendimento);
                }
                parametros = {
                    atendimentos: atendimentos,
                    nomeTela: ValoresSismoura.NomeTela,
                    codUsuario: ValoresSismoura.UsuarioLogado
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("ExcluirRegistros", parametros);
                if (retorno) {
                    this.GetRegistros();
                    MostrarMensagem("Atendimento(s) excluído(s) com sucesso!");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CancAtenPend.prototype.OnClickLimpar = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
    };
    C_CancAtenPend.prototype.LimparCampos = function () {
        this.txtPet.Limpar();
        this.txtPeriodo.Iniciar();
        this.rdbTipoData.SetValue("1");
        this.lblTotalAtendimentos.Text = "0";
        this.grid.deselectAll();
        this.grid.PreencherGrid(null);
    };
    C_CancAtenPend.prototype.GetRegistros = function () {
        try {
            var porAtendimento = false;
            if (this.rdbTipoData.GetValue() == "1") {
                porAtendimento = true;
            }
            var parametros;
            parametros = {
                porDataAtendimento: porAtendimento,
                dataInicio: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFim: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                codProprietario: this.txtPet.TextBoxProprietario.GetText().CNum(),
                codAnimal: this.txtPet.TextBoxAnimal.GetText().CNum()
            };
            var registros = this.ExecutarFuncaoServerSideSynch("GetRegistros", parametros);
            this.grid.deselectAll();
            this.grid.PreencherGrid(registros.Dados);
            this.lblTotalAtendimentos.Text = registros.Atendimento;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_CancAtenPend;
}(MouraPageAngular));
var c_CancAtenPend = new C_CancAtenPend();
//# sourceMappingURL=C_CancAtenPend.js.map