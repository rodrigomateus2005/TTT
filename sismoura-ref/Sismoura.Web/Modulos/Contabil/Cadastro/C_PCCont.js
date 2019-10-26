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
var C_PCCont = /** @class */ (function (_super) {
    __extends(C_PCCont, _super);
    function C_PCCont() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_PCCont.prototype, "txtcodigo_hdnempresacontabil", {
        get: function () {
            return $("#txtcodigo_hdnempresacontabil")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont.prototype, "txtCodigoContabil", {
        get: function () {
            return window['txtCodigoContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont.prototype, "cboOrigem", {
        get: function () {
            return window['cboOrigem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont.prototype, "cboModalidade", {
        get: function () {
            return window['cboModalidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont.prototype, "cboNaturezaSped", {
        get: function () {
            return window['cboNaturezaSped_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont.prototype, "txtPlanoContasSped", {
        get: function () {
            return window['txtPlanoContasSped_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont.prototype, "ckbInativo", {
        get: function () {
            return window['ckbInativo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont.prototype, "btnReplicar", {
        get: function () {
            return window['btnReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont.prototype, "btnCancelar", {
        get: function () {
            return window['btnCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont.prototype, "btnReplicarConfirmar", {
        get: function () {
            return window['btnReplicarConfirmar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont.prototype, "grdReplicar", {
        get: function () {
            return window['grdReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont.prototype, "mdReplicar", {
        get: function () {
            return window['mdReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont.prototype, "Contas", {
        get: function () {
            return this.GetScope()["Contas"];
        },
        set: function (value) {
            this.GetScope()["Contas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PCCont.prototype, "Empresas", {
        get: function () {
            return this.GetScope()["Empresas"];
        },
        set: function (value) {
            this.GetScope()["Empresas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_PCCont.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.AntesAbrirProcura, this.oncodigoantesabrirprocura, this);
            adicionarEventoMoura(this.txtCodigo.PesquisandoContabil, this.oncodigopesquisando, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.preencherempresacontabil, this);
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.onEmpresaChange, this);
        }
        this.preencherempresacontabil();
        if (this.txtcodigo_hdnempresacontabil != undefined) {
            this.txtcodigo_hdnempresacontabil.value = this.cboEmpresa.GetValue();
        }
        if (this.grd) {
            adicionarEventoMoura(this.grd.SelecionouItem, this.onGridSelecionouLinha, this);
            adicionarEventoMoura(this.grd.Grid.CellPrepared, this.OnGerouLinhaSintetica, this);
        }
        if (this.btnReplicar) {
            adicionarEventoMoura(this.btnReplicar.Click, this.OnClickReplicar, this);
        }
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.gerarSituacaoClick, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnClickCancelar, this);
        }
        if (this.btnReplicarConfirmar) {
            adicionarEventoMoura(this.btnReplicarConfirmar.Click, this.replicarConfirmar, this);
        }
        if (this.grdReplicar) {
            adicionarEventoMoura(this.grdReplicar.Grid.CellPrepared, this.OnGerouReplicar, this);
        }
    };
    C_PCCont.prototype.OnGerouReplicar = function (s, e) {
        if (e.rowType == "data") {
            if (e.row.data["Situacao"] != 'OK') {
                if (e.row.data["CodSituacao"] != 3) {
                    e.cellElement.css("color", "#ff0000");
                }
            }
        }
    };
    C_PCCont.prototype.OnGerouLinhaSintetica = function (s, e) {
        if (e.rowType == "data") {
            if (e.row.data['Tipo'] == "Sintético") {
                e.cellElement.css("font-weight", "bold");
            }
        }
    };
    C_PCCont.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.EntityTela.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.btnReplicar.Visible = false;
        this.BuscarGrid();
    };
    C_PCCont.prototype.onEmpresaChange = function () {
        this.preencherempresacontabil();
        var parametros;
        var empresa = this.cboEmpresa.GetValue();
        parametros = {
            codEmpresa: empresa
        };
        var cad = this.ExecutarFuncaoServerSideSynch("GetByEmpresa", parametros);
        if (cad > 0) {
            this.PreencherEntidade(cad);
        }
        else {
            this.txtCodigo.Limpar();
            this.cboEmpresa.SetValue(empresa);
        }
    };
    C_PCCont.prototype.BuscarGrid = function () {
        var parametros = {
            codEmpresa: this.cboEmpresa.GetValue()
        };
        var Itens = this.ExecutarFuncaoServerSideSynch("GetRegistrosCadastrados", parametros);
        this.Contas = Itens;
    };
    C_PCCont.prototype.validaTipo = function () {
        if (this.cboTipo.GetValue() == "A" || this.cboTipo.GetValue() == "S") {
            this.btnReplicar.Visible = true;
        }
        else {
            this.btnReplicar.Visible = false;
        }
    };
    C_PCCont.prototype.preencherempresacontabil = function () {
        if (this.txtcodigo_hdnempresacontabil != undefined) {
            this.txtcodigo_hdnempresacontabil.value = this.cboEmpresa.GetValue();
        }
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.AntesAbrirProcura, this.oncodigoantesabrirprocura, this);
        }
        if (this.txtCodigo) {
            adicionarEventoMoura(this.txtCodigo.PesquisandoContabil, this.oncodigopesquisando, this);
        }
    };
    C_PCCont.prototype.onGridSelecionouLinha = function (s, e) {
        var selecionou = e.item;
        if (selecionou) {
            this.txtCodigo.Procurar(e.item.Codigo);
            if (e.item.Tipo == "Analítico" || e.item.Tipo == "Sintético") {
                this.btnReplicar.Visible = true;
            }
            else {
                this.btnReplicar.Visible = false;
            }
        }
    };
    C_PCCont.prototype.OnClickReplicar = function (s, e) {
        try {
            e.processOnServer = false;
            this.grdReplicar.AtualizarGrid;
            this.grdReplicar.Grid.Refresh();
            this.GetScope().$apply();
            this.mdReplicar.ModalDialog.Show();
            this.lstEmpresa.LimparSelecao();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PCCont.prototype.cancelarModalClick = function () {
        this.lstEmpresa.LimparSelecao;
        this.grdReplicar.Grid.Refresh();
        this.grdReplicar.Limpar();
        this.mdReplicar.ModalDialog.Hide();
    };
    C_PCCont.prototype.replicarConfirmar = function (s, e) {
        e.processOnServer = false;
        try {
            this.ReplicarPlanoContas();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PCCont.prototype.ReplicarPlanoContas = function () {
        var parametros;
        var lista = this.Empresas.FindAll("CodSituacao", 3);
        var list = this.Empresas.FindAll("CodSituacao", 5);
        var empresas = [];
        for (var x = 0; x < lista.length; x++) {
            empresas.push(lista[x].Codigo);
        }
        for (var y = 0; y < list.length; y++) {
            empresas.push(list[y].Codigo);
        }
        parametros = {
            empresaOrigem: this.cboEmpresa.GetValue(),
            Empresas: empresas,
            CodigoConta: this.txtCodigo.TextBoxAdicional.value
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("ReplicarPlanoContas", parametros);
        if (retorno == true) {
            MostrarMensagem("Plano de Contas " + this.txtCodigo.TextBoxAdicional.value + " replicado com sucesso!");
            this.btnCancelar.DoClick();
            this.LimparCampos();
        }
        else {
            MostrarAlerta("Não foi possível replicar o Plano de Contas");
        }
    };
    C_PCCont.prototype.oncodigoantesabrirprocura = function (s, ev) {
        this.txtCodigo.AddParametro("codempresa", this.cboEmpresa.GetValue());
        this.btnReplicar.Visible = true;
    };
    C_PCCont.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.BuscarGrid();
        this.validaTipo();
        return true;
    };
    C_PCCont.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        //this.validaTipo();
        this.EntityTela.Empresa = this.cboEmpresa.GetValue();
        return true;
    };
    C_PCCont.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.BuscarGrid();
        return true;
    };
    C_PCCont.prototype.OnDepoisBuscarExistente = function (Entidade) {
        try {
            _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PCCont.prototype.OnDepoisLimpar = function (Entidade) {
        _super.prototype.OnDepoisLimpar.call(this, Entidade);
        this.btnReplicar.Visible = false;
        Entidade.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.BuscarGrid();
    };
    C_PCCont.prototype.LimparCampos = function () {
        this.txtCodigo.Limpar();
        this.txtDescricao.Limpar();
        this.txtCodigoContabil.Limpar();
        this.cboTipo.LimparSelecao();
        this.cboOrigem.LimparSelecao();
        this.cboModalidade.LimparSelecao();
        this.cboNaturezaSped.LimparSelecao();
        this.txtPlanoContasSped.Limpar();
        this.ckbInativo.Checked = false;
        this.btnReplicar.Visible = false;
    };
    C_PCCont.prototype.gerarSituacaoClick = function (s, e) {
        try {
            e.processOnServer = false;
            this.gerarSituacao();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PCCont.prototype.OnClickCancelar = function (s, e) {
        try {
            e.processOnServer = false;
            this.Empresas = [];
            this.grdReplicar.Limpar();
            this.mdReplicar.ModalDialog.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PCCont.prototype.gerarSituacao = function () {
        var parametros = {
            Empresas: this.lstEmpresa.GetValues(),
            EmpresaOrigem: this.cboEmpresa.GetValue(),
            tipoConta: this.cboTipo.GetValue(),
            codContabil: this.txtCodigo.TextBoxAdicional.value
        };
        if (parametros.Empresas.length <= 0) {
            MostrarAlerta("Selecione ao menos uma Empresa Destino!");
        }
        else {
            var contaSituacao = this.ExecutarFuncaoServerSideSynch("GetSituacaoPlanoContas", parametros);
            this.Empresas = contaSituacao;
            this.grdReplicar.AtualizarGrid();
        }
    };
    C_PCCont.prototype.oncodigopesquisando = function (s, ev) {
        this.txtCodigo.AddParametro("codempresa", this.cboEmpresa.GetValue());
        var retorno = {};
        var retornocontacontabilexiste = false;
        var parametros;
        var parametroreduzido;
        parametros = {
            codigoContaContabil: this.txtCodigo.TextBoxAdicional.value.CNum(),
            empresa: this.cboEmpresa.GetValue()
        };
        parametroreduzido = {
            reduzido: this.txtCodigo.TextBoxAdicional.value.CNum(),
        };
        if (this.txtCodigo.TextBoxAdicional.value.CNum() > 0) {
            retorno = this.ExecutarFuncaoServerSideSynch("VerificarContaContabilEmpresa", parametros);
            if (retorno == null) {
                retornocontacontabilexiste = this.ExecutarFuncaoServerSideSynch("VerificarContaContabil", parametroreduzido);
                if (retornocontacontabilexiste) {
                    ev.Cancelar = true;
                    MostrarAlerta('A conta contábil não pertence a empresa selecionada!');
                    this.txtCodigo.Limpar();
                    this.txtCodigo.Focus();
                }
            }
            else {
                this.txtDescricao.SetText(retorno.descricao);
                this.txtCodigoContabil.SetText(retorno.codigocontabil);
                this.cboTipo.SetValue(retorno.tipo);
                this.cboOrigem.SetValue(retorno.origemenum);
                this.cboModalidade.SetValue(retorno.modalidadeenum);
                this.cboNaturezaSped.SetValue(retorno.naturezaspedenum);
                //var tipo = ;
                if (retorno.Tipo == "A" || retorno.Tipo == "S") {
                    this.btnReplicar.Visible = true;
                }
                else {
                    this.btnReplicar.Visible = false;
                }
                if (retorno.planocontassped != undefined) {
                    this.txtPlanoContasSped.Procurar(retorno.planocontassped);
                }
                this.ckbInativo.Checked = retorno.inativo;
            }
        }
    };
    return C_PCCont;
}(MouraPageCadastroAngular));
var c_PCCont = new C_PCCont();
//# sourceMappingURL=C_PCCont.js.map