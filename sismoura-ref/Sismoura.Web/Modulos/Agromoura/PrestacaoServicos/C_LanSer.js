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
var C_LanSer = /** @class */ (function (_super) {
    __extends(C_LanSer, _super);
    function C_LanSer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_LanSer.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "grdRomaneio", {
        get: function () {
            return window['grdRomaneio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "txtContrato", {
        get: function () {
            return window['txtContrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "txtFazenda", {
        get: function () {
            return window['txtFazenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "mdRomaneio", {
        get: function () {
            return window['mdRomaneio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "txtTurno", {
        get: function () {
            return window['txtTurno_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "txtSafra", {
        get: function () {
            return window['txtSafra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "txtTalhao", {
        get: function () {
            return window['txtTalhao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "txtArea", {
        get: function () {
            return window['txtArea_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "txtColhedora", {
        get: function () {
            return window['txtColhedora_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "lblTotalCarregada", {
        get: function () {
            return window['lblTotalCarregada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "lblTotalColhido", {
        get: function () {
            return window['lblTotalColhido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "lblNomeArquivo", {
        get: function () {
            return window['lblNomeArquivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "txtOperadorColhedora", {
        get: function () {
            return window['txtOperadorColhedora_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "txtTransbordo", {
        get: function () {
            return window['txtTransbordo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "txtOperadorTransbordo", {
        get: function () {
            return window['txtOperadorTransbordo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "txtCanaCarregada", {
        get: function () {
            return window['txtCanaCarregada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "txtCanaColhida", {
        get: function () {
            return window['txtCanaColhida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "txtRomaneio", {
        get: function () {
            return window['txtRomaneio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "hdnPath", {
        get: function () {
            return $('#hdnPath')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "btnRomaneio", {
        get: function () {
            return window['btnRomaneio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "btnImportar", {
        get: function () {
            return window['btnImportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "Dados", {
        get: function () {
            return this.GetScope()["Dados"];
        },
        set: function (value) {
            this.GetScope()["Dados"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "codigo", {
        set: function (value) {
            this.codigo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LanSer.prototype, "fileUpload", {
        get: function () {
            return window['fileUpload_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_LanSer.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.fileUpload && this.fileUpload.FileUpload) {
            adicionarEventoDevExpress(this.fileUpload.FileUpload.FilesUploadStart, this.OnFilesUploadStart, this);
            adicionarEventoDevExpress(this.fileUpload.FileUpload.FileUploadComplete, this.OnFilesUploadComplete, this);
        }
        if (this.txtContrato) {
            adicionarEventoMoura(this.txtContrato.Procurou, this.BuscarTotal, this);
        }
        if (this.btnRomaneio) {
            adicionarEventoMoura(this.btnRomaneio.Click, this.OnClickRomaneio, this);
            this.btnRomaneio.Visible = false;
        }
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.BuscarGrade, this);
        }
        if (this.btnImportar) {
            adicionarEventoMoura(this.btnImportar.Click, this.OnClickImportar, this);
        }
        if (this.txtFazenda) {
            adicionarEventoMoura(this.txtFazenda.Procurou, this.VerificarPreenchimento, this);
        }
        if (this.grd) {
            adicionarEventoMoura(this.grd.SelecionouItem, this.OnGrdSelecionouItem, this);
        }
    };
    C_LanSer.prototype.OnFilesUploadStart = function (source, ev) {
        if (this.fileUpload.FileName.substr(-4) != ".txt") {
            MostrarAlerta("Informe um arquivo do tipo .txt");
            this.lblNomeArquivo.Text = "";
        }
        else {
            this.lblNomeArquivo.Text = this.fileUpload.FileName;
        }
        this.GetScope().$applyAsync();
    };
    C_LanSer.prototype.OnFilesUploadComplete = function (source, ev) {
        this.GetScope().$applyAsync();
    };
    C_LanSer.prototype.OnGrdSelecionouItem = function (s, e) {
        var servico = e.item;
        if (servico) {
            this.txtCodigo.Procurar(e.item.Codigo);
        }
    };
    C_LanSer.prototype.OnClickRomaneio = function (s, e) {
        e.processOnServer = false;
        var parametros;
        var Romaneios;
        parametros = {
            contrato: this.txtContrato.GetText().CNum(),
            fazenda: this.txtFazenda.GetText().CNum()
        };
        Romaneios = this.ExecutarFuncaoServerSideSynch("CarregarRomaneios", parametros);
        if (Romaneios) {
            this.grdRomaneio.PreencherGrid(Romaneios);
        }
        this.mdRomaneio.Show();
    };
    C_LanSer.prototype.OnClickImportar = function (s, e) {
        e.processOnServer = false;
        if (this.txtContrato.GetText().CNum() == 0) {
            MostrarAlerta("Selecione o contrato!");
        }
        else if (this.txtFazenda.GetText().CNum() == 0) {
            MostrarAlerta("Selecione a fazenda!");
        }
        else if (this.lblNomeArquivo.Text == "") {
            MostrarAlerta("Selecione um arquivo!");
        }
        else {
            var parametros;
            var retorno;
            var pathCaminho;
            var contrato;
            var fazenda;
            var usuario;
            parametros = {
                pathCaminho: this.hdnPath.value,
                contrato: this.txtContrato.GetText().CNum(),
                fazenda: this.txtFazenda.GetText().CNum(),
                usuario: 1
            };
            retorno = this.ExecutarFuncaoServerSideSynch("ImportarArquivo", parametros);
            if (retorno == "") {
                MostrarAlerta("Arquivo inválido!");
            }
            else if (retorno == "Arquivo importado com sucesso") {
                MostrarMensagem(retorno);
                this.lblNomeArquivo.Text = "";
                this.BuscarGrade();
            }
            else {
                MostrarAlerta(retorno);
            }
        }
    };
    C_LanSer.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar;
        Entity.Hora = new Date();
        this.GetScope().$applyAsync();
    };
    C_LanSer.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entidade = this.GetScope().Entity;
        entidade.Hora = new Date();
        return true;
    };
    C_LanSer.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.BuscarGrade();
        return true;
    };
    C_LanSer.prototype.VerificarPreenchimento = function () {
        if (this.txtContrato.GetText().CNum() > 0 && this.txtFazenda.GetText().CNum() > 0) {
            this.btnRomaneio.Visible = true;
        }
        else {
            this.btnRomaneio.Visible = false;
        }
    };
    C_LanSer.prototype.LimparGrade = function () {
        this.Dados = null;
        this.grd.Grid.PreencherGrid(this.Dados);
    };
    C_LanSer.prototype.BuscarGrade = function () {
        if (this.txtContrato.GetText().CNum() > 0) {
            var parametros = {
                contrato: this.txtContrato.GetText().CNum()
            };
            var Itens = this.ExecutarFuncaoServerSideSynch("CarregarItens", parametros);
            this.Dados = Itens;
            this.grd.Grid.PreencherGrid(this.Dados);
        }
        else {
            this.Dados = null;
            this.grd.Limpar();
        }
        this.VerificarPreenchimento();
    };
    C_LanSer.prototype.BuscarTotal = function () {
        if (this.txtContrato.GetText().CNum() > 0) {
            var parametros = {
                contrato: this.txtContrato.GetText().CNum()
            };
            var totalColhido = this.ExecutarFuncaoServerSideSynch("totalColhido", parametros);
            var totalCarregado = this.ExecutarFuncaoServerSideSynch("totalCarregado", parametros);
            this.lblTotalColhido.Text = totalColhido;
            this.lblTotalColhido.Text = this.lblTotalColhido.Text.replace(".", ",").FormatNumber(2);
            this.lblTotalCarregada.Text = totalCarregado;
            this.lblTotalCarregada.Text = this.lblTotalCarregada.Text.replace(".", ",").FormatNumber(2);
            this.LimparGrade();
        }
        else {
            this.lblTotalColhido.Text = "";
            this.lblTotalCarregada.Text = "";
        }
    };
    return C_LanSer;
}(MouraPageCadastroAngular));
var c_LanSer = new C_LanSer();
//# sourceMappingURL=C_LanSer.js.map