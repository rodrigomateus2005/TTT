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
var C_LayTLP = /** @class */ (function (_super) {
    __extends(C_LayTLP, _super);
    function C_LayTLP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_LayTLP.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayTLP.prototype, "txtNome", {
        get: function () {
            return window['txtNome_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayTLP.prototype, "txtLinha", {
        get: function () {
            return window['txtLinha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayTLP.prototype, "txtHorizontal", {
        get: function () {
            return window['txtHorizontal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayTLP.prototype, "txtVertical", {
        get: function () {
            return window['txtVertical_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayTLP.prototype, "txtDescricaoCampo", {
        get: function () {
            return window['txtDescricaoCampo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayTLP.prototype, "txtQtdeEtiquetas", {
        get: function () {
            return window['txtQtdeEtiquetas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayTLP.prototype, "cboCampo", {
        get: function () {
            return window['cboCampo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayTLP.prototype, "cboTamanhoCodBarra", {
        get: function () {
            return window['cboTamanhoCodBarra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayTLP.prototype, "gridEtiquetas", {
        get: function () {
            return window['gridEtiquetas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayTLP.prototype, "agpCampos", {
        get: function () {
            return window['agpCampos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayTLP.prototype, "agpCodBarra", {
        get: function () {
            return window['agpCodBarra_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayTLP.prototype, "agpImagem", {
        get: function () {
            return window['agpImagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayTLP.prototype, "agpFormatar", {
        get: function () {
            return window['agpFormatar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayTLP.prototype, "agpRetangulo", {
        get: function () {
            return window['agpRetangulo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayTLP.prototype, "Campos", {
        get: function () {
            if (!this.GetScope()["Campos"]) {
                this.GetScope()["Campos"] = [];
            }
            return this.GetScope()["Campos"];
        },
        set: function (value) {
            this.GetScope()["Campos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayTLP.prototype, "Campo", {
        get: function () {
            if (!this.GetScope()["Campo"]) {
                this.GetScope()["Campo"] = {};
            }
            return this.GetScope()["Campo"];
        },
        set: function (value) {
            this.GetScope()["Campo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_LayTLP.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.gridEtiquetas.btnAdiconar) {
            adicionarEventoMoura(this.gridEtiquetas.Validando, this.ValidarCampos, this);
            adicionarEventoMoura(this.gridEtiquetas.LimpouItem, this.LimpouCampos, this);
        }
    };
    C_LayTLP.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        setTimeout(function () {
            _this.CamposPadrao();
        }, 100);
        if (!this.GetScope().OncboCampoChange) {
            this.GetScope().OncboCampoChange = $.proxy(this.OncboCampoChange, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Campo.Campo; }, this.GetScope().OncboCampoChange);
        }
        if (!this.GetScope().PreencheComboBarraTamanho) {
            this.GetScope().PreencheComboBarraTamanho = $.proxy(this.PreencheComboBarraTamanho, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Campo.Cod_Barra_Tipo; }, this.GetScope().PreencheComboBarraTamanho);
        }
        if (!this.GetScope().OncboTipoChange) {
            this.GetScope().OncboTipoChange = $.proxy(this.OncboTipoChange, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Campo.Tipo; }, this.GetScope().OncboTipoChange);
        }
    };
    C_LayTLP.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.PeencherGrade(Entity);
        if (CNum(this.Campo.Linha) > 0) {
            this.Campo.Linha = this.Campos.slice(-1)[0].Linha;
        }
        this.RefreshAngular();
    };
    C_LayTLP.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Qtde_Etiquetas = 1;
        this.Campos = [];
        this.CamposPadrao();
        this.RefreshAngular();
    };
    C_LayTLP.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (!this.EntityTela.Qtde_Etiquetas) {
            MostrarAlerta("Informe a quantidade de etiquetas por linha!");
            this.txtQtdeEtiquetas.Focus();
            return false;
        }
        if (this.Campos.length == 0) {
            MostrarAlerta("Informe ao menos um campo!");
            return false;
        }
        this.EntityTela.Campo = this.Campos;
        return true;
    };
    C_LayTLP.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PeencherGrade(this.EntityTela);
        return true;
    };
    C_LayTLP.prototype.PeencherGrade = function (Entity) {
        var parametros = {
            codLayout: Entity.Codigo
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetLayouts", parametros);
        if (!retorno) {
            return;
        }
        this.Campos = retorno;
        this.RefreshAngular();
    };
    C_LayTLP.prototype.OncboCampoChange = function () {
        if (this.Campo.Campo) {
            if (this.Campo.Campo == "Preco_Vista" || this.Campo.Campo == "Preco_Prazo" || this.Campo.Campo == "Preco_Custo" ||
                this.Campo.Campo == "Preco_Produto" || this.Campo.Campo == "Preco_Promocao" || this.Campo.Campo.indexOf("Lst.") == 0 ||
                this.Campo.Campo.indexOf("Vlr.") == 0) {
                this.ExibirOcultarCampos(true, "agpFormatar");
            }
            else {
                this.ExibirOcultarCampos(false, "agpFormatar");
            }
            if (this.Campo.Campo == "Retângulo") {
                this.ExibirOcultarCampos(true, "Retângulo");
            }
            else {
                this.ExibirOcultarCampos(false, "Retângulo");
            }
            this.RefreshAngular();
        }
    };
    C_LayTLP.prototype.PreencheComboBarraTamanho = function () {
        this.cboTamanhoCodBarra.ClearItems();
        if (this.Campo.Cod_Barra_Tipo == 0) {
            for (var i = 1; i <= 10; i++) {
                this.cboTamanhoCodBarra.AddItem(i + "", i, "");
            }
            this.cboTamanhoCodBarra.SetSelectedIndex(1);
        }
        else if (this.Campo.Cod_Barra_Tipo == 1) {
            for (var i = 2; i <= 4; i++) {
                this.cboTamanhoCodBarra.AddItem(i + "", i, "");
            }
            this.cboTamanhoCodBarra.SetSelectedIndex(0);
        }
        else if (this.Campo.Cod_Barra_Tipo == 2) {
            for (var i = 1; i <= 10; i++) {
                this.cboTamanhoCodBarra.AddItem(i + "", i, "");
            }
            this.cboTamanhoCodBarra.SetSelectedIndex(1);
        }
    };
    C_LayTLP.prototype.OncboTipoChange = function () {
        if (this.Campo.Tipo == 0) {
            this.ExibirOcultarCampos(true, "Texto");
        }
        else if (this.Campo.Tipo == 1) {
            this.ExibirOcultarCampos(true, "Código de Barra");
        }
        else if (this.Campo.Tipo == 2) {
            this.ExibirOcultarCampos(true, "Imagem");
        }
        this.RefreshAngular();
    };
    C_LayTLP.prototype.CamposPadrao = function () {
        this.Campo.Campo = "Codigo";
        this.Campo.Tipo = 0;
        this.Campo.Orientacao = 0;
        this.Campo.Texto_Tamanho = 1;
        this.Campo.Texto_Largura = 1;
        this.Campo.Texto_Altura = 1;
        this.Campo.Cod_Barra_Largura = 2;
        this.Campo.Cod_Barra_Altura = 70;
        this.RefreshAngular();
    };
    C_LayTLP.prototype.ExibirOcultarCampos = function (bool, flag) {
        if (flag == "Texto") {
            this.agpCampos.Visible = bool;
            this.agpCodBarra.Visible = !bool;
            this.agpImagem.Visible = !bool;
        }
        else if (flag == "Código de Barra") {
            this.agpCampos.Visible = !bool;
            this.agpCodBarra.Visible = bool;
            this.agpImagem.Visible = !bool;
            this.Campo.Cod_Barra_Tipo = 0;
        }
        else if (flag == "Imagem") {
            this.agpCampos.Visible = !bool;
            this.agpCodBarra.Visible = !bool;
            this.agpImagem.Visible = bool;
        }
        if (flag == "agpFormatar") {
            this.agpFormatar.Visible = bool;
            this.txtDescricaoCampo.Visible = bool;
        }
        if (flag == "Retângulo") {
            this.agpRetangulo.Visible = bool;
        }
    };
    C_LayTLP.prototype.ValidarCampos = function (s, e) {
        this.NormalizacaoGrid();
        if (!this.EntityTela.Nome) {
            MostrarAlerta("Informe um nome para a etiqueta!");
            e.cancelar = true;
            this.txtNome.Focus();
            return false;
        }
        if (!this.Campo.Linha) {
            if (this.Campos.length > 0) {
                this.Campo.Linha = this.Campos.reduce(function (max, campo) { return Math.max(max, campo.Linha); }, this.Campos[0].Linha) + 1;
            }
            else {
                this.Campo.Linha = 1;
            }
        }
        return true;
    };
    C_LayTLP.prototype.LimpouCampos = function (s, e) {
        this.CamposPadrao();
    };
    C_LayTLP.prototype.NormalizacaoGrid = function () {
        if (this.Campo.Tipo == 0) {
            this.Campo.Tipo_Descricao = "Texto";
        }
        else if (this.Campo.Tipo == 1) {
            this.Campo.Tipo_Descricao = "Código de Barra";
        }
        else if (this.Campo.Tipo == 2) {
            this.Campo.Tipo_Descricao = "Imagem";
        }
        if (this.Campo.Orientacao == 0) {
            this.Campo.Orientacao_Descricao = "Horizontal";
        }
        else if (this.Campo.Orientacao == 1) {
            this.Campo.Orientacao_Descricao = "Vertical";
        }
        else if (this.Campo.Orientacao == 2) {
            this.Campo.Orientacao_Descricao = "Horizontal Invertido";
        }
        else if (this.Campo.Orientacao == 3) {
            this.Campo.Orientacao_Descricao = "Vertical Invertido";
        }
        if (this.Campo.Cod_Barra_Tipo == 0) {
            this.Campo.Cod_Barra_Tipo_Descricao = "CODE 39";
        }
        else if (this.Campo.Cod_Barra_Tipo == 1) {
            this.Campo.Cod_Barra_Tipo_Descricao = "EAN 13";
        }
        else if (this.Campo.Cod_Barra_Tipo == 2) {
            this.Campo.Cod_Barra_Tipo_Descricao = "CODE 128";
        }
    };
    return C_LayTLP;
}(MouraPageCadastroAngular));
var c_LayTLP = new C_LayTLP();
//# sourceMappingURL=C_LayTLP.js.map