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
var C_ImpArP = /** @class */ (function (_super) {
    __extends(C_ImpArP, _super);
    function C_ImpArP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ImpArP.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpArP.prototype, "btnCarregar", {
        get: function () {
            return window['btnCarregar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpArP.prototype, "btnNovo", {
        get: function () {
            return window['btnNovo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpArP.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpArP.prototype, "cboLayout", {
        get: function () {
            return window['cboLayout_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpArP.prototype, "lblArquivo", {
        get: function () {
            return window['lblArquivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpArP.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpArP.prototype, "fileUpload", {
        get: function () {
            return window['fileUpload_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpArP.prototype, "hdnPath", {
        get: function () {
            return $('#hdnPath')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpArP.prototype, "Itens", {
        get: function () {
            return this.GetScope()["Itens"];
        },
        set: function (value) {
            this.GetScope()["Itens"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_ImpArP.prototype.Init = function () {
        _super.prototype.Init.call(this);
        //adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        //adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.fileUpload && this.fileUpload.FileUpload) {
            adicionarEventoDevExpress(this.fileUpload.FileUpload.FilesUploadStart, this.OnFilesUploadStart, this);
            adicionarEventoDevExpress(this.fileUpload.FileUpload.FileUploadComplete, this.OnFilesUploadComplete, this);
        }
        if (this.btnCarregar) {
            adicionarEventoMoura(this.btnCarregar.Click, this.OnClickCarregar, this);
        }
        if (this.cboLayout) {
            adicionarEventoMoura(this.cboLayout.SelectedItemChanged, this.OnComboChange, this);
        }
        if (this.btnNovo) {
            adicionarEventoMoura(this.btnNovo.Click, this.OnClickNovo, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickGravar, this);
        }
        if (this.Grid.Grid) {
            adicionarEventoMoura(this.Grid.Grid.CellPrepared, this.OnGridCellPrepared, this);
        }
    };
    C_ImpArP.prototype.OnFilesUploadStart = function (source, ev) {
        if (this.fileUpload.FileName.substr(-4) != ".txt") {
            MostrarAlerta("Informe um arquivo do tipo .txt");
            this.lblArquivo.Text = "";
        }
        else {
            this.lblArquivo.Text = this.fileUpload.FileName;
        }
        this.GetScope().$applyAsync();
        //this.PreencherGrade();
    };
    C_ImpArP.prototype.OnFilesUploadComplete = function (source, ev) {
        this.GetScope().$applyAsync();
    };
    C_ImpArP.prototype.OnClickGravar = function (s, e) {
        e.processOnServer = false;
        var parametros;
        var funcionarios;
        var funcionario;
        var dt;
        try {
            if (this.Grid) {
                dt = this.Grid.Grid.DataSource;
                if (dt.length <= 0) {
                    MostrarAlerta("Não há registros para atualizar!");
                    return;
                }
                funcionarios = [];
                for (var x = 0; x < dt.length; x++) {
                    funcionario = {};
                    funcionario.codFuncionario = dt[x].codFuncionario;
                    funcionario.data = dt[x].data;
                    funcionario.entrada1 = dt[x].entrada1;
                    funcionario.saida1 = dt[x].saida1;
                    funcionario.entrada2 = dt[x].entrada2;
                    funcionario.saida2 = dt[x].saida2;
                    funcionario.entrada3 = dt[x].entrada3;
                    funcionario.saida3 = dt[x].saida3;
                    funcionarios.push(funcionario);
                }
                parametros = {
                    listaFuncionarios: funcionarios,
                    tela: ValoresSismoura.NomeTela,
                    codUsuario: ValoresSismoura.UsuarioLogado
                };
                this.ExecutarFuncaoServerSideSynch("Gravar", parametros);
                MostrarMensagem("Arquivo importado com sucesso !");
                this.LimparGrade();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ImpArP.prototype.OnGridCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data != null) {
                if (e.data.ExisteHorario) {
                    e.cellElement.css("color", "#FF0000");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ImpArP.prototype.OnClickNovo = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
    };
    C_ImpArP.prototype.LimparCampos = function () {
        this.LimparGrade();
        this.cboLayout.LimparSelecao();
        this.lblArquivo.Text = "";
    };
    C_ImpArP.prototype.LimparGrade = function () {
        this.Itens = [];
        this.Grid.Grid.PreencherGrid([]);
        this.Grid.Grid.Refresh();
    };
    C_ImpArP.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad;
    };
    C_ImpArP.prototype.OnComboChange = function () {
        this.LimparGrade();
        //var parametros: any;
        //parametros = {
        //    codLayout: this.cboLayout.GetValue().CNum()
        //}
        //this.lblArquivo.Text = this.ExecutarFuncaoServerSideSynch("GetDiretorioArquivo", parametros);
    };
    C_ImpArP.prototype.OnClickCarregar = function (s, e) {
        e.processOnServer = false;
        var parametros;
        //var retorno;
        //parametros = {
        //    pathCaminho: this.hdnPath.value
        //}
        //retorno = this.ExecutarFuncaoServerSideSynch("ImportarArquivo", parametros);
        //if (retorno == "") {
        //    MostrarAlerta("Arquivo inválido!");
        //} else if (retorno == "Arquivo importado com sucesso") {
        //    MostrarMensagem(retorno);
        //    this.lblArquivo.Text = "";
        //    //this.BuscarGrade();
        //    this.PreencherGrade();
        //} else {
        //    MostrarAlerta(retorno);
        //}
        this.PreencherGrade();
    };
    //protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs) {
    //    var entidade = this.GetScope().Entity;
    //    this.PreencherItensGrade(entidade);
    //}
    //protected OnExcluiuSucesso(s: any, e: any) {
    //    var entidade = this.GetScope().Entity;
    //}
    C_ImpArP.prototype.PreencherGrade = function () {
        var parametros;
        try {
            if (this.cboLayout.GetSelectedIndex() == -1) {
                MostrarAlerta("Selecione o Layout de Importação !");
                this.cboLayout.Focus();
                this.lblArquivo.Text = "";
                return;
            }
            if (this.lblArquivo.Text == "") {
                MostrarAlerta("Selecione o arquivo de importação !");
                return;
            }
            parametros = {
                codLayout: this.cboLayout.GetValue().CNum()
            };
            var Dados = this.ExecutarFuncaoServerSideSynch("GetHorarios", parametros);
            this.Itens = Dados;
            this.Grid.Grid.PreencherGrid(Dados);
            this.Grid.Grid.Refresh();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_ImpArP;
}(MouraPageAngular));
var c_ImpArP = new C_ImpArP;
//# sourceMappingURL=C_ImpArP.js.map