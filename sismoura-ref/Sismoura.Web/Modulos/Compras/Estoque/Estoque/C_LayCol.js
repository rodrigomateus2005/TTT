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
var C_LayCol = /** @class */ (function (_super) {
    __extends(C_LayCol, _super);
    function C_LayCol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_LayCol.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayCol.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayCol.prototype, "chkAlinhamento", {
        get: function () {
            return window['chkAlinhamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayCol.prototype, "cboAlinhamento", {
        get: function () {
            return window['cboAlinhamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayCol.prototype, "cboCampo", {
        get: function () {
            return window['cboCampo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayCol.prototype, "cboTipoProcura", {
        get: function () {
            return window['cboTipoProcura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayCol.prototype, "cboTipoDelimitacao", {
        get: function () {
            return window['cboTipoDelimitacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayCol.prototype, "txtAlinhar", {
        get: function () {
            return window['txtAlinhar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayCol.prototype, "txtDelimitador", {
        get: function () {
            return window['txtDelimitador_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayCol.prototype, "txtTamanho", {
        get: function () {
            return window['txtTamanho_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayCol.prototype, "Campos", {
        get: function () {
            return this.GetScope()["Campos"];
        },
        set: function (value) {
            this.GetScope()["Campos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayCol.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_LayCol.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.cboAlinhamento.Visible = false;
        this.txtAlinhar.Visible = false;
    };
    C_LayCol.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.chkAlinhamento.CheckChanged, this.OnCheckChangedAlinhamento, this);
        adicionarEventoDevExpress(this.cboTipoDelimitacao.Combo.SelectedIndexChanged, this.OnSelectedIndexChangedTipoDelimitacao, this);
        adicionarEventoMoura(this.txtCodigo.Procurou, this.OnProcurou, this);
        adicionarEventoDevExpress(this.cboCampo.Combo.SelectedIndexChanged, this.OnSelectedIndexChangedCampo, this);
        if (this.grd) {
            adicionarEventoMoura(this.grd.AdicionandoItem, this.OnClickIncluir, this);
        }
        if (this.grd) {
            adicionarEventoMoura(this.grd.ExcluindoItem, this.OnClickExcluirCampos, this);
        }
        this.AtualizarGrid();
        if (this.Campos.length == 0) {
            this.Campos = [];
            this.GetScope().Entity.Layout_Coletor_Campos = this.Campos;
        }
    };
    C_LayCol.prototype.OnSelectedIndexChangedCampo = function () {
        this.txtTamanho.SetText("");
    };
    C_LayCol.prototype.OnCheckChangedAlinhamento = function () {
        if (this.chkAlinhamento.Check.checked) {
            this.cboAlinhamento.Visible = true;
            this.txtAlinhar.Visible = true;
        }
        else {
            this.cboAlinhamento.Visible = false;
            this.txtAlinhar.Visible = false;
            this.txtAlinhar.Limpar();
            this.cboAlinhamento.LimparSelecao();
        }
    };
    C_LayCol.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar;
        this.OnDepoisLimpar(this.GetScope().Entity);
        return true;
    };
    C_LayCol.prototype.OnExcluiuSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_LayCol.prototype.AtualizarGrid = function () {
        var parametros = {
            codigo: this.txtCodigo.GetText().CNum()
        };
        this.Campos = this.ExecutarFuncaoServerSideSynch("CarregarLayoutColetores", parametros);
        this.grd.Grid.PreencherGrid(this.Campos);
    };
    C_LayCol.prototype.OnProcurou = function () {
        this.AtualizarGrid();
        if (this.GetScope().Entity.Tipo == 1) {
            this.txtTamanho.Visible = false;
            this.txtTamanho.Limpar();
        }
        else {
            this.txtTamanho.Visible = true;
            this.txtDelimitador.Limpar();
        }
        if (this.GetScope().Entity.Tipo == 2) {
            this.txtDelimitador.Visible = false;
            this.txtDelimitador.Limpar();
        }
        else {
            this.txtDelimitador.Visible = true;
            this.txtTamanho.Limpar();
        }
    };
    C_LayCol.prototype.OnClickIncluir = function (s, e) {
        var values = [];
        e.item.Codigo = 0;
        e.item.Layout_Coletor = 0;
        if (this.txtAlinhar.GetText() == "") {
            e.item.Caracter_AlinhamentoTexto = "Espaço";
            e.item.Caracter_Alinhamento = "E";
        }
        else {
            e.item.Caracter_AlinhamentoTexto = this.txtAlinhar.GetText();
            e.item.Caracter_Alinhamento = this.txtAlinhar.GetText();
        }
        if (this.cboAlinhamento.GetValue() != undefined) {
            if (this.cboAlinhamento.GetValue() == 0) {
                e.item.AlinhamentoTexto = "Direita";
                e.item.Alinhamento = 0;
            }
            else {
                e.item.AlinhamentoTexto = "Esquerda";
                e.item.Alinhamento = 1;
            }
        }
        else {
            e.item.Alinhamento = 1;
        }
        if (this.Campos.length > 0) {
            var values = [];
            if (this.Campos.length != 0) {
                for (var x = 0; x < this.Campos.length; x++) {
                    values[x] = this.Campos[x].Codigo;
                }
            }
            var codigo = Math.max.apply(Math, values);
            if (e.item.Codigo == 0) {
                e.item.Codigo = codigo + 1;
            }
        }
        else {
            var parametros = {};
            var codigo = this.ExecutarFuncaoServerSideSynch("CarregarLayoutColetorCampos", parametros);
            if (codigo == null) {
                codigo = 1;
                e.item.Codigo = codigo;
            }
            else {
                e.item.Codigo = codigo.CNum() + 1;
            }
        }
        e.item.Tamanho = this.txtTamanho.GetText().CNum();
        e.item.Campo = this.cboCampo.Combo.GetText();
        var layoutColetorCampo = e.item;
        var retorno = this.PreencherGrupos(layoutColetorCampo);
        if (retorno != undefined) {
            if (retorno != "true") {
                MostrarAlerta(retorno);
            }
            e.cancelar = true;
            this.grd.Limpar();
        }
        else {
            this.txtTamanho.Limpar();
        }
    };
    C_LayCol.prototype.PreencherGrupos = function (entidade) {
        var posicao = 0;
        var count = 0;
        for (var x = 0; x < this.Campos.length; x++) {
            if (this.GetScope().Entity.Codigo != null) {
                if (this.Campos[x].Campo == entidade.Campo) {
                    count = 1;
                    posicao = x;
                    if (this.txtTamanho.GetText() == "") {
                        entidade.Tamanho = this.Campos[x].Tamanho;
                    }
                }
            }
            else {
                if (this.Campos[x].Campo == entidade.Campo) {
                    count = 1;
                    posicao = x;
                    if (this.txtTamanho.GetText() == "") {
                        entidade.Tamanho = this.Campos[x].Tamanho;
                    }
                }
            }
        }
        if (count == 0) {
            if (entidade.Tamanho == "" && this.cboTipoDelimitacao.GetValue() != 1) {
                return "Preencha o campo corretamente: Tamanho";
            }
            if (entidade.Campo == null) {
                return "Preencha o campo corretamente: Campo";
            }
            if (this.chkAlinhamento.Check.checked && this.cboAlinhamento.GetValue() == undefined) {
                return "Preencha o campo corretamente: Alinhamento";
            }
        }
        else {
            if (this.chkAlinhamento.Check.checked && this.cboAlinhamento.GetValue() == undefined) {
                return "Preencha o campo corretamente: Alinhamento";
            }
            this.Campos[posicao] = entidade;
            return "true";
        }
    };
    C_LayCol.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar;
        if (this.txtDescricao.GetText() == "") {
            MostrarAlerta("Preencha o campo corretamente: Descrição");
            return false;
        }
        if (this.cboTipoProcura.GetValue() == null) {
            MostrarAlerta("Preencha o campo corretamente: Tipo de Procura");
            return false;
        }
        if (this.txtDelimitador.GetText() == "" && this.cboTipoDelimitacao.GetValue() != "2") {
            MostrarAlerta("Preencha o campo corretamente: Delimitador");
            return false;
        }
        if (this.txtTamanho.GetText() == "" && this.cboTipoDelimitacao.GetValue() != 2 && this.Campos.length == 0) {
            MostrarAlerta("Insira pelo menos um campo na grade!");
            return false;
        }
        this.GetScope().Entity.Layout_Coletor_Campos = this.Campos;
        this.GetScope().Entity.Tipo_Procura = this.cboTipoProcura.GetText();
        if (this.GetScope().Entity.Tipo == 2) {
            this.GetScope().Entity.Delimitador = "";
        }
        for (var x = 0; x < this.Campos.length; x++) {
            if (this.Campos[x].Alinhamento == null) {
                if (this.Campos[x].AlinhamentoTexto == "Esquerda") {
                    this.Campos[x].Alinhamento = "1";
                }
                else {
                    this.Campos[x].Alinhamento = "0";
                }
            }
            if (this.Campos[x].Caracter_Alinhamento == null) {
                if (this.Campos[x].Caracter_AlinhamentoTexto == "Espaço") {
                    this.Campos[x].Caracter_Alinhamento = "E";
                }
                else {
                    this.Campos[x].Caracter_Alinhamento = this.Campos[x].Caracter_AlinhamentoTexto;
                }
            }
        }
        return true;
    };
    C_LayCol.prototype.OnSelectedIndexChangedTipoDelimitacao = function () {
        if (this.cboTipoDelimitacao.GetValue() == 1) {
            this.txtTamanho.Visible = false;
            this.txtTamanho.Limpar();
        }
        else {
            this.txtTamanho.Visible = true;
            this.txtDelimitador.Limpar();
        }
        if (this.cboTipoDelimitacao.GetValue() == 2) {
            this.txtDelimitador.Visible = false;
            this.txtDelimitador.Limpar();
        }
        else {
            this.txtDelimitador.Visible = true;
            this.txtTamanho.Limpar();
        }
    };
    C_LayCol.prototype.selecionarCheck = function (chk, valor) {
        if (chk && chk.Check) {
            chk.Check.checked = valor;
        }
    };
    C_LayCol.prototype.OnDepoisLimpar = function (entidade) {
        this.GetScope().Entity = {};
        this.Campos = [];
        this.selecionarCheck(this.chkAlinhamento, false);
        this.cboTipoProcura.SetValue("Ambos(Cód. Barra/Produto)");
        this.cboTipoDelimitacao.SetValue(0);
        this.cboCampo.SetSelectedIndex(0);
        if (this.chkAlinhamento.Check.checked == false) {
            this.cboAlinhamento.Visible = false;
            this.txtAlinhar.Visible = false;
            this.txtAlinhar.Limpar();
            this.cboAlinhamento.LimparSelecao();
        }
    };
    C_LayCol.prototype.OnClickExcluirCampos = function (s, e) {
        var lista = [];
        for (var x = 0; x < this.Campos.length; x++) {
            if (this.Campos.length == 1) {
                this.Campos = [];
            }
            else {
                if (this.Campos[x] != e.item) {
                    lista.push(this.Campos[x]);
                }
            }
        }
        this.Campos = [];
        this.Campos = lista;
    };
    return C_LayCol;
}(MouraPageCadastroAngular));
var c_LayCol = new C_LayCol();
//# sourceMappingURL=C_LayCol.js.map