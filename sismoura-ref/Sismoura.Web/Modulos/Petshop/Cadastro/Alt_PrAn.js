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
var Alt_PrAn = /** @class */ (function (_super) {
    __extends(Alt_PrAn, _super);
    function Alt_PrAn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Alt_PrAn.prototype, "txtAnimal", {
        get: function () {
            return window['txtAnimal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alt_PrAn.prototype, "txtPet", {
        get: function () {
            return window['txtPet_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alt_PrAn.prototype, "btnAtualizar", {
        get: function () {
            return window['btnAtualizar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alt_PrAn.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alt_PrAn.prototype, "txtProprietario", {
        get: function () {
            return window['txtProprietario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alt_PrAn.prototype, "lblProprietario", {
        get: function () {
            return window['lblProprietario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Alt_PrAn.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnAtualizar) {
            adicionarEventoMoura(this.btnAtualizar.Click, this.OnClickAtualizar, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.LimparCampos, this);
        }
        if (this.txtAnimal && this.txtAnimal.Procurou) {
            adicionarEventoMoura(this.txtAnimal.Procurou, this.OnProcurouAnimal, this);
        }
    };
    Alt_PrAn.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    Alt_PrAn.prototype.OnProcurouAnimal = function () {
        var parametros;
        var retorno;
        parametros = {
            codAnimalMoura: this.txtAnimal.GetText().CNum()
        };
        retorno = this.ExecutarFuncaoServerSideSynch("txtAnimal_Pesquisou", parametros);
        if (retorno != null) {
            this.lblProprietario.Text = retorno.Nome;
        }
        else {
            this.lblProprietario.Text = "";
        }
    };
    Alt_PrAn.prototype.OnClickAtualizar = function (s, e) {
        e.processOnServer = false;
        var validar;
        if (!ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            if (this.txtAnimal.GetText() == "" || this.txtProprietario.GetText() == "") {
                MostrarAlerta("Preencha todos os campos  corretamente!");
                validar = false;
            }
            else {
                validar = true;
            }
        }
        else {
            if (this.txtAnimal.GetText() == "" || this.txtPet.TextBoxAnimal.LabelResultado.textContent == "" || this.txtPet.TextBoxProprietario.LabelResultado.textContent == "") {
                MostrarAlerta("Preencha todos os campos  corretamente!");
                validar = false;
            }
            else {
                validar = true;
            }
        }
        if (validar) {
            var msg = "";
            if (!ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
                msg = "Deseja realmente executar a operação?";
            }
            else {
                msg = "ATENÇÃO !!!! O animal " + this.txtAnimal.LabelResultado.textContent;
                msg = msg + " será vinculado ao animal " + this.txtPet.TextBoxAnimal.LabelResultado.textContent + " do proprietário ";
                msg = msg + this.txtPet.TextBoxProprietario.LabelResultado.textContent;
                msg = msg + "<br/>Deseja realmente atualizar?";
                msg = msg + "<br/>Esse é um processo que não pode ser desfeito!!!";
            }
            MsgBoxJS(msg, MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouAtualizar, this));
        }
    };
    Alt_PrAn.prototype.OnSelecionouAtualizar = function (result) {
        try {
            if (result.Resultado == MsgBoxResult.Yes) {
                var parametros;
                var retorno;
                if (!ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
                    parametros = {
                        codNovoproprietario: this.txtProprietario.GetText().CNum(),
                        codAnimal: this.txtAnimal.GetText().CNum()
                    };
                    retorno = this.ExecutarFuncaoServerSideSynch("AlterarProprietario", parametros);
                }
                else {
                    parametros = {
                        codNovoproprietario: this.txtPet.TextBoxProprietario.GetText().CNum(),
                        codAnimalMoura: this.txtAnimal.GetText().CNum(),
                        codAnimalZanthus: this.txtPet.TextBoxAnimal.GetText().CNum()
                    };
                    retorno = this.ExecutarFuncaoServerSideSynch("AlterarProprietarioZanthus", parametros);
                }
                if (retorno) {
                    MostrarMensagem("Operação realizada com sucesso!");
                    this.LimparCampos();
                }
                else {
                    MostrarAlerta("Não foi possível alterar o proprietário!");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    Alt_PrAn.prototype.LimparCampos = function () {
        this.txtAnimal.Limpar();
        this.txtProprietario.Limpar();
        this.lblProprietario.Text = "";
        this.txtPet.Limpar();
        //this.txtPet.TextBoxAnimal.SetText("");
        //this.txtPet.Limpar();
    };
    return Alt_PrAn;
}(MouraPageAngular));
var alt_PrAn = new Alt_PrAn();
//# sourceMappingURL=Alt_PrAn.js.map