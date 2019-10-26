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
var C_LayColExp = /** @class */ (function (_super) {
    __extends(C_LayColExp, _super);
    function C_LayColExp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_LayColExp.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayColExp.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayColExp.prototype, "chkAlinhamento", {
        get: function () {
            return window['chkAlinhamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayColExp.prototype, "cboAlinhamento", {
        get: function () {
            return window['cboAlinhamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayColExp.prototype, "cboCampo", {
        get: function () {
            return window['cboCampo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayColExp.prototype, "cboSeparador", {
        get: function () {
            return window['cboSeparador_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayColExp.prototype, "cboTipoProcura", {
        get: function () {
            return window['cboTipoProcura_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayColExp.prototype, "cboTipoDelimitacao", {
        get: function () {
            return window['cboTipoDelimitacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayColExp.prototype, "txtAlinhar", {
        get: function () {
            return window['txtAlinhar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayColExp.prototype, "txtDelimitador", {
        get: function () {
            return window['txtDelimitador_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayColExp.prototype, "txtTamanho", {
        get: function () {
            return window['txtTamanho_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayColExp.prototype, "CamposExp", {
        get: function () {
            return this.GetScope()["CamposExp"];
        },
        set: function (value) {
            this.GetScope()["CamposExp"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayColExp.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_LayColExp.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.cboAlinhamento.Visible = false;
        this.txtAlinhar.Visible = false;
        this.cboSeparador.Visible = false;
    };
    C_LayColExp.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.chkAlinhamento.CheckChanged, this.OnCheckChangedAlinhamento, this);
        adicionarEventoDevExpress(this.cboTipoDelimitacao.Combo.SelectedIndexChanged, this.OnSelectedIndexChangedTipoDelimitacao, this);
        adicionarEventoMoura(this.txtCodigo.Procurou, this.OnProcurou, this);
        adicionarEventoDevExpress(this.cboCampo.Combo.SelectedIndexChanged, this.OnSelecionouSeparador, this);
        adicionarEventoDevExpress(this.cboCampo.Combo.SelectedIndexChanged, this.OnSelectedIndexChangedCampo, this);
        if (this.grd) {
            adicionarEventoMoura(this.grd.AdicionandoItem, this.OnClickIncluir, this);
        }
        if (this.grd) {
            adicionarEventoMoura(this.grd.ExcluindoItem, this.OnClickExcluirCampos, this);
        }
        this.AtualizarGrid();
        if (this.CamposExp.length == 0) {
            this.CamposExp = [];
            this.GetScope().Entity.Layout_Coletor_Campos_Exp = this.CamposExp;
        }
    };
    C_LayColExp.prototype.OnSelecionouSeparador = function () {
        if (this.cboCampo.GetValue() == "5") {
            this.cboSeparador.Visible = true;
        }
        else {
            this.cboSeparador.Visible = false;
            this.cboSeparador.LimparSelecao();
        }
    };
    C_LayColExp.prototype.OnCheckChangedAlinhamento = function () {
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
    C_LayColExp.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar;
        this.OnDepoisLimpar(this.GetScope().Entity);
        return true;
    };
    C_LayColExp.prototype.OnExcluiuSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_LayColExp.prototype.AtualizarGrid = function () {
        var parametros = {
            codigo: this.txtCodigo.GetText().CNum()
        };
        this.CamposExp = this.ExecutarFuncaoServerSideSynch("CarregarLayoutColetores", parametros);
        this.grd.Grid.PreencherGrid(this.CamposExp);
    };
    C_LayColExp.prototype.OnProcurou = function () {
        this.cboSeparador.Visible = false;
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
    C_LayColExp.prototype.OnSelectedIndexChangedCampo = function () {
        this.txtTamanho.SetText("");
    };
    C_LayColExp.prototype.OnClickIncluir = function (s, e) {
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
        if (this.CamposExp.length > 0) {
            var values = [];
            if (this.CamposExp.length != 0) {
                for (var x = 0; x < this.CamposExp.length; x++) {
                    values[x] = this.CamposExp[x].Codigo;
                }
            }
            var codigo = Math.max.apply(Math, values);
            if (e.item.Codigo == 0) {
                e.item.Codigo = codigo + 1;
            }
        }
        else {
            var parametros = {};
            var codigo = this.ExecutarFuncaoServerSideSynch("CarregarLayoutColetorCamposExp", parametros);
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
        if (this.cboSeparador.Combo.GetValue() != null && this.cboCampo.GetValue() == "5") {
            if (this.cboSeparador.GetValue() == 0) {
                e.item.Separador_Casas_DecimaisTexto = "Ponto";
                e.item.Separador_Casas_Decimais = 0;
            }
            else {
                e.item.Separador_Casas_DecimaisTexto = "Virgula";
                e.item.Separador_Casas_Decimais = 1;
            }
        }
        if (this.chkAlinhamento.Check.checked) {
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
        var layoutColetorCampoExp = e.item;
        var retorno = this.PreencherGrupos(layoutColetorCampoExp);
        if (retorno != undefined) {
            if (retorno != "true") {
                MostrarAlerta(retorno);
            }
            e.cancelar = true;
            this.grd.Limpar();
        }
        else {
            this.txtTamanho.Limpar();
            this.cboSeparador.LimparSelecao();
        }
    };
    C_LayColExp.prototype.PreencherGrupos = function (entidade) {
        var posicao = 0;
        var count = 0;
        for (var x = 0; x < this.CamposExp.length; x++) {
            if (this.GetScope().Entity.Codigo != null) {
                if (this.CamposExp[x].Campo == entidade.Campo) {
                    count = 1;
                    posicao = x;
                    if (this.txtTamanho.GetText() == "") {
                        entidade.Tamanho = this.CamposExp[x].Tamanho;
                    }
                    if (this.cboSeparador.Combo.GetValue() == undefined) {
                        entidade.Separador_Casas_Decimais = this.CamposExp[x].Separador_Casas_Decimais;
                    }
                }
            }
            else {
                if (this.CamposExp[x].Campo == entidade.Campo) {
                    count = 1;
                    posicao = x;
                    if (this.txtTamanho.GetText() == "") {
                        entidade.Tamanho = this.CamposExp[x].Tamanho;
                    }
                    if (this.cboSeparador.Combo.GetValue() == undefined) {
                        entidade.Separador_Casas_Decimais = this.CamposExp[x].Separador_Casas_Decimais;
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
            if (entidade.Separador_Casas_Decimais == null && entidade.Campo == "5") {
                return "Preencha o campo corretamente: Separador para as casas decimais";
            }
            if (this.cboAlinhamento.Combo.GetValue() == null && this.chkAlinhamento.Check.checked) {
                return "Preencha o campo corretamente: Alinhamento";
            }
            if (entidade.Campo == "Preço" && entidade.Separador_Casas_Decimais == undefined) {
                return "Preencha o campo corretamente: Separador para as casas decimais";
            }
        }
        else {
            if (entidade.Campo == "Preço" && entidade.Separador_Casas_Decimais == undefined) {
                return "Preencha o campo corretamente: Separador para as casas decimais";
            }
            if (this.chkAlinhamento.Check.checked && this.cboAlinhamento.GetValue() == null) {
                return "Preencha o campo corretamente: Alinhamento";
            }
            this.CamposExp[posicao] = entidade;
            return "true";
        }
    };
    C_LayColExp.prototype.OnAntesGravar = function () {
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
        if (this.txtTamanho.GetText() == "" && this.cboTipoDelimitacao.GetValue() != 2 && this.CamposExp.length == 0) {
            MostrarAlerta("Insira pelo menos um campo na grade!");
            return false;
        }
        this.GetScope().Entity.Layout_Coletor_Campos_Exp = this.CamposExp;
        this.GetScope().Entity.Tipo_Procura = this.cboTipoProcura.GetText();
        if (this.GetScope().Entity.Tipo == 2) {
            this.GetScope().Entity.Delimitador = "";
        }
        for (var x = 0; x < this.CamposExp.length; x++) {
            if (this.CamposExp[x].Alinhamento == null) {
                if (this.CamposExp[x].AlinhamentoTexto == "Esquerda") {
                    this.CamposExp[x].Alinhamento = "1";
                }
                else {
                    this.CamposExp[x].Alinhamento = "0";
                }
            }
            if (this.CamposExp[x].Caracter_Alinhamento == null) {
                if (this.CamposExp[x].Caracter_AlinhamentoTexto == "Espaço") {
                    this.CamposExp[x].Caracter_Alinhamento = "E";
                }
                else {
                    this.CamposExp[x].Caracter_Alinhamento = this.CamposExp[x].Caracter_AlinhamentoTexto;
                }
            }
        }
        return true;
    };
    C_LayColExp.prototype.OnSelectedIndexChangedTipoDelimitacao = function () {
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
    C_LayColExp.prototype.selecionarCheck = function (chk, valor) {
        if (chk && chk.Check) {
            chk.Check.checked = valor;
        }
    };
    C_LayColExp.prototype.OnDepoisLimpar = function (entidade) {
        this.GetScope().Entity = {};
        this.CamposExp = [];
        this.selecionarCheck(this.chkAlinhamento, false);
        this.cboTipoDelimitacao.SetValue(0);
        this.cboCampo.SetSelectedIndex(0);
        if (this.chkAlinhamento.Check.checked == false) {
            this.cboAlinhamento.Visible = false;
            this.txtAlinhar.Visible = false;
            this.txtAlinhar.Limpar();
            this.cboAlinhamento.LimparSelecao();
        }
    };
    C_LayColExp.prototype.OnClickExcluirCampos = function (s, e) {
        var lista = [];
        for (var x = 0; x < this.CamposExp.length; x++) {
            if (this.CamposExp.length == 1) {
                this.CamposExp = [];
            }
            else {
                if (this.CamposExp[x] != e.item) {
                    lista.push(this.CamposExp[x]);
                }
            }
        }
        this.CamposExp = [];
        this.CamposExp = lista;
    };
    return C_LayColExp;
}(MouraPageCadastroAngular));
var c_LayColExp = new C_LayColExp();
//# sourceMappingURL=C_LayColExp.js.map