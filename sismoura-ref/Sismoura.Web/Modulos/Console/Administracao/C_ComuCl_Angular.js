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
var C_ComuCl_Angular = /** @class */ (function (_super) {
    __extends(C_ComuCl_Angular, _super);
    function C_ComuCl_Angular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ComuCl_Angular.prototype, "lblUsuario", {
        get: function () {
            return window['lblUsuario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComuCl_Angular.prototype, "cboCidade", {
        get: function () {
            return window['cboCidade_comboBox'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComuCl_Angular.prototype, "cboEstado", {
        get: function () {
            return window['cboEstado_comboBox'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComuCl_Angular.prototype, "cboSegmento", {
        get: function () {
            return window['cboSegmento_comboBox'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComuCl_Angular.prototype, "lstClientes", {
        get: function () {
            return window['lstClientes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ComuCl_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.Limpar();
        this.PreencherComboSegmento();
        //this.PreencherComboPessoa(0, "", 0);
        //this.PreencherComboCidade("");
    };
    C_ComuCl_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboCidade) {
            adicionarEventoDevExpress(this.cboCidade.SelectedIndexChanged, this.SelectedIndexChanged, this);
        }
        if (this.cboSegmento) {
            adicionarEventoDevExpress(this.cboSegmento.SelectedIndexChanged, this.SelectedIndexChanged, this);
        }
        if (this.cboEstado) {
            adicionarEventoDevExpress(this.cboEstado.SelectedIndexChanged, this.SelectedIndexChangedEstado, this);
        }
        if (this.lstClientes.btnMarcar) {
            adicionarEventoDevExpress(this.lstClientes.btnMarcar.Click, this.ClickMarcar, this);
        }
        if (this.lstClientes.btnDesmarcar) {
            adicionarEventoDevExpress(this.lstClientes.btnDesmarcar.Click, this.ClickDesmarcar, this);
        }
    };
    C_ComuCl_Angular.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        return true;
    };
    C_ComuCl_Angular.prototype.Limpar = function () {
        _super.prototype.Limpar.call(this);
        var parametros;
        if (ValoresSismoura.UsuarioLogado > 0) {
            this.lblUsuario.Text = ValoresSismoura.UsuarioLogadoAbreviacao;
        }
        this.cboSegmento.ClearItems();
        this.cboCidade.ClearItems();
        this.lstClientes.RemoverTodosItens();
    };
    C_ComuCl_Angular.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        return true;
    };
    C_ComuCl_Angular.prototype.OnDepoisGravar = function () {
        MsgBoxJS("Deseja enviar o comunicado?", MsgBoxOptions.YesNo, MsgBoxIcon.Question);
        _super.prototype.OnDepoisGravar.call(this);
        return true;
    };
    C_ComuCl_Angular.prototype.OnSelecionouMsgBox = function (s, e) {
        var parametros;
        var novo;
        try {
            if (e.Argument = "exluir") {
                this.EntityTela.Codigo = 0;
            }
            else if (e.Argument = "enviar") {
                if (e.Resultado = MsgBoxResult.Yes) {
                    parametros = {
                        codigo: CNum(this.EntityTela.Codigo)
                    };
                    var entity = this.ExecutarFuncaoServerSideSynch("GetByComunicado", parametros);
                    for (var i = 0; i < entity.length; i++) {
                        if (entity["item"].Data_Enviada != null || !ValidarPeriodo(ConvertToDate(entity["Data_Enviada"]), this.DataServidor())) {
                            entity["item"].Data_Enviada = this.DataServidor();
                            parametros = {
                                item: entity["item"],
                                nomeTela: "Cadastro de Comunicado ao Cliente",
                                usuario: ValoresSismoura.UsuarioLogado,
                                novo: novo
                            };
                            this.ExecutarFuncaoServerSideSynch("GravarAlterar", parametros);
                        }
                    }
                    MostrarMensagem("Comunicado enviado com sucesso!");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ComuCl_Angular.prototype.OnDepoisBuscarExistente = function () {
        _super.prototype.OnDepoisBuscarExistente.call(this, this.EntityTela);
        this.PreencherTela();
        if (this.EntityTela.Codigo != 0) {
            RecebeFoco("txtTitulo_Object");
        }
        else {
            this.Limpar();
        }
    };
    C_ComuCl_Angular.prototype.PreencherTela = function () {
        var parametros;
        parametros = {
            codigo: this.EntityTela.Codigo.toString()
        };
        var entity = this.ExecutarFuncaoServerSideSynch("ObterEntidade", parametros);
        if (entity) {
            try {
                parametros = {
                    codigo: this.EntityTela.Usuario_Cadastro
                };
                var usuario = this.ExecutarFuncaoServerSideSynch("ObterEntidadeUsuario", parametros);
                this.OnDepoisLimpar(this.EntityTela);
                this.EntityTela.Codigo = usuario.Codigo;
                this.EntityTela.Titulo = usuario.Titulo;
                this.EntityTela.Descricao = usuario.Descricao;
                if (ValoresSismoura.UsuarioLogado > 0) {
                    this.lblUsuario.Text = usuario.Nome.ToString();
                }
                this.EntityTela.Estado = usuario.Estado;
                if (entity.Cidade > 0) {
                    this.PreencherComboCidade(this.cboEstado.GetValue());
                    this.cboCidade.SetValue(entity.Cidade);
                }
                if (entity.Segmento > 0) {
                    this.cboSegmento.SetValue(entity.Segmento);
                }
                this.PreencherComboPessoa(this.cboCidade.GetValue(), this.cboEstado.GetValue(), this.cboSegmento.GetValue());
                for (var _i = 0, _a = entity.Console_Comunicado_Cliente_Enviado; _i < _a.length; _i++) {
                    var cliente = _a[_i];
                    this.lstClientes.SetValues(cliente.Cliente);
                }
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    C_ComuCl_Angular.prototype.PreencherComboCidade = function (estado) {
        this.cboCidade.ClearItems();
        var parametros;
        parametros = {
            estado: estado
        };
        var itens;
        try {
            itens = this.ExecutarFuncaoServerSideSynch("PreencherComboCidade", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
        //r
        if (this.cboCidade) {
            for (var x = 0; x < itens.length; x++) {
                this.cboCidade.AddItem(itens[x].cidade, itens[x].codigo, "");
            }
            //this.cboCidade.SetSelectedIndex(0);
        }
    };
    C_ComuCl_Angular.prototype.PreencherComboPessoa = function (cidade, estado, segmento) {
        this.lstClientes.RemoverTodosItens();
        var parametros;
        parametros = {
            cidade: cidade,
            estado: estado + "",
            segmento: segmento
        };
        var itens;
        try {
            itens = this.ExecutarFuncaoServerSideSynch("PreencherComboPessoa", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
        //
        if (this.lstClientes) {
            for (var x = 0; x < itens.length; x++) {
                this.lstClientes.AdicionarItem(itens[x].Nome, itens[x].Codigo);
            }
            //this.cboCidade.SetSelectedIndex(0);
        }
    };
    C_ComuCl_Angular.prototype.PreencherComboSegmento = function () {
        var parametros;
        parametros = {};
        var itens;
        try {
            itens = this.ExecutarFuncaoServerSideSynch("PreencherComboSegmento", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
        //
        if (this.cboSegmento) {
            for (var x = 0; x < itens.length; x++) {
                this.cboSegmento.AddItem(itens[x].Descricao, itens[x].Codigo, "");
            }
        }
    };
    C_ComuCl_Angular.prototype.SelectedIndexChanged = function (s, e) {
        var estado;
        if (String.IsNullOrWhiteSpace(this.cboEstado.GetValue())) {
            estado = "";
        }
        else {
            estado = this.cboEstado.GetValue();
        }
        this.PreencherComboPessoa(CNum(this.cboCidade.GetValue()), estado, CNum(this.cboSegmento.GetValue()));
    };
    C_ComuCl_Angular.prototype.SelectedIndexChangedEstado = function (s, e) {
        this.cboCidade.SetSelectedIndex(-1);
        this.PreencherComboCidade(this.cboEstado.GetValue() + "");
        this.PreencherComboPessoa(CNum(this.cboCidade.GetValue()), this.cboEstado.GetValue() + "", CNum(this.cboSegmento.GetValue()));
    };
    C_ComuCl_Angular.prototype.ClickMarcar = function (s, e) {
        this.lstClientes.CheckBoxList.prop("checked", true);
    };
    C_ComuCl_Angular.prototype.ClickDesmarcar = function (s, e) {
        this.lstClientes.CheckBoxList.prop("checked", false);
    };
    return C_ComuCl_Angular;
}(MouraPageCadastroAngular));
var c_ComuCl_Angular = new C_ComuCl_Angular();
//# sourceMappingURL=C_ComuCl_Angular.js.map