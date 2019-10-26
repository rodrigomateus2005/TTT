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
var C_AniCad = /** @class */ (function (_super) {
    __extends(C_AniCad, _super);
    function C_AniCad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_AniCad.prototype, "GridAniCad", {
        get: function () {
            return window['GridAniCad_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AniCad.prototype, "btnPlanoVacinacao", {
        //Comentar_Atualizacao_Microchip
        //get gridAlimentacao(): MouraGridViewJSEditavel {
        //    return window['gridAlimentacao_Object'];
        //}
        //FIM
        get: function () {
            return window['btnPlanoVacinacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AniCad.prototype, "txtProprietario", {
        //Comentar_Atualizacao_Microchip
        //get btnCancelar(): MouraButton {
        //    return window['btnCancelar_Object'];
        //}
        //get btnAvaliacao(): MouraButton {
        //    return window['btnAvaliacao_Object'];
        //}
        //get txtMucosa(): MouraTextBox {
        //    return window['txtMucosa_Object'];
        //}
        //get txtPA(): MouraTextBox {
        //    return window['txtPA_Object'];
        //}
        //get txtDenticao(): MouraTextBox {
        //    return window['txtDenticao_Object'];
        //}
        //get txtOrelhas(): MouraTextBox {
        //    return window['txtOrelhas_Object'];
        //}
        //get txtOlhos(): MouraTextBox {
        //    return window['txtOlhos_Object'];
        //}
        //get txtObservacao(): MouraTextBox {
        //    return window['txtObservacao_Object'];
        //}
        //get txtEctoparasitas(): MouraTextBox {
        //    return window['txtEctoparasitas_Object'];
        //}
        //get txtTesticulos(): MouraTextBox {
        //    return window['txtTesticulos_Object'];
        //}
        //get txtReflexoTosse(): MouraTextBox {
        //    return window['txtReflexoTosse_Object'];
        //}
        //get txtPele(): MouraTextBox {
        //    return window['txtPele_Object'];
        //}
        //get txtNutricao(): MouraTextBox {
        //    return window['txtNutricao_Object'];
        //}
        //get txtObservacaoAvaliacao(): MouraTextBox {
        //    return window['txtObservacaoAvaliacao_Object'];
        //}
        get: function () {
            return window['txtProprietario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    //FIM
    C_AniCad.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.GridAniCad) {
            adicionarEventoMoura(this.GridAniCad.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.btnPlanoVacinacao) {
            adicionarEventoMoura(this.btnPlanoVacinacao.Click, this.OnClickPlanoVacinacao, this);
        }
        if (this.txtProprietario) {
            adicionarEventoMoura(this.txtProprietario.Procurou, this.OnTxtProprietarioProcurou, this);
        }
        //Comentar_Atualizacao_Microchip
        //if (this.btnAvaliacao) {
        //    adicionarEventoDevExpress(this.btnAvaliacao.Botao.Click, this.OnClickAvaliacao, this);
        //}
        //FIM
    };
    C_AniCad.prototype.OnTxtProprietarioProcurou = function (s, e) {
        try {
            //Apenas clientes que foram cadastrados a partir da tela de fornecedores (ONG) podem realizar cadastros nesta tela.
            if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus && this.txtProprietario.GetText().CNum() > 0) {
                var parametros = {
                    codPessoa: this.txtProprietario.GetText().CNum()
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("IsONG", parametros);
                if (!retorno) {
                    MostrarAlerta('Este proprietário não é uma ONG');
                    this.Limpar();
                    return false;
                }
            }
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_AniCad.prototype.ProprietarioChange = function () {
        this.PreencherGrade(this.EntityTela);
    };
    C_AniCad.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_AniCad.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().ProprietarioChange) {
            this.GetScope().ProprietarioChange = $.proxy(this.ProprietarioChange, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Cod_Proprietario; }, this.GetScope().ProprietarioChange);
        }
        this.OnDepoisLimpar(this.EntityTela);
        if (this.ParametrosTela.proprietario) {
            this.EntityTela.Cod_Proprietario = this.ParametrosTela.proprietario;
            this.RefreshAngular();
        }
        else if (this.ParametrosTela.CodProprietario) {
            this.EntityTela.Cod_Proprietario = this.ParametrosTela.CodProprietario;
            this.RefreshAngular();
        }
    };
    C_AniCad.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        //Comentar_Atualizacao_Microchip
        //this.txtMucosa.SetText("");
        //this.txtPA.SetText("");
        //this.txtDenticao.SetText("");
        //this.txtOrelhas.SetText("");
        //this.txtOlhos.SetText("");
        //this.txtEctoparasitas.SetText("");
        //this.txtTesticulos.SetText("");
        //this.txtReflexoTosse.SetText("");
        //this.txtPele.SetText("");
        //this.txtNutricao.SetText("");
        //this.txtObservacaoAvaliacao.SetText("");
        //FIM
        this.PreencherGrade(Entity);
    };
    C_AniCad.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade(this.EntityTela);
        return true;
    };
    C_AniCad.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        //Comentar_Atualizacao_Microchip
        //var EntradaAnimal: SiSMoura.Core.Entity.Entrada_Animal;
        //try {
        //    if (Entidade.Codigo) {
        //        var parametros: any = {
        //            codAnimal: Entidade.Codigo
        //        };
        //        EntradaAnimal = this.ExecutarFuncaoServerSideSynch("GetEntradaAnimal", parametros);
        //        if (EntradaAnimal) {
        //            this.txtMucosa.SetText(EntradaAnimal.Mucosa);
        //            this.txtPA.SetText(EntradaAnimal.Palpacao_Abdominal);
        //            this.txtDenticao.SetText(EntradaAnimal.Denticao);
        //            this.txtOrelhas.SetText(EntradaAnimal.Orelhas);
        //            this.txtOlhos.SetText(EntradaAnimal.Olhos);
        //            this.txtEctoparasitas.SetText(EntradaAnimal.Ectoparasitas);
        //            this.txtTesticulos.SetText(EntradaAnimal.Testiculos);
        //            this.txtReflexoTosse.SetText(EntradaAnimal.Reflexo_Tosse);
        //            this.txtPele.SetText(EntradaAnimal.Pele);
        //            this.txtNutricao.SetText(EntradaAnimal.Nutricao);
        //            this.txtObservacaoAvaliacao.SetText(EntradaAnimal.Observacao);
        //        }
        //    }
        //    this.RefreshAngular();
        //} catch (ex) {
        //    LogarException(ex);
        //}
        //FIM
    };
    C_AniCad.prototype.OnAntesGravar = function () {
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus && CNum(this.GetScope().Entity.Codigo) == 0) {
            if (this.GetScope().Entity.Baia_Adocao > 0) {
                this.GetScope().Entity.Status_Adocao_Animal = 1 /* enANIMAL_AGUARDANDO_ADOCAO */;
                this.GetScope().Entity.Observacao_Servico = 'ENTRADA RETROATIVA PARA ADOÇÃO';
                this.RefreshAngular();
            }
        }
        return _super.prototype.OnAntesGravar.call(this);
    };
    C_AniCad.prototype.PreencherGrade = function (Entidade) {
        var parametros;
        var codProprietario = Entidade.Cod_Proprietario;
        if (!codProprietario) {
            codProprietario = 0;
        }
        try {
            parametros = {
                codProprietario: codProprietario
            };
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.GridAniCad.PreencherGrid(cad);
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AniCad.prototype.OnClickPlanoVacinacao = function (s, e) {
        try {
            e.processOnServer = false;
            var parametros = [];
            if (this.EntityTela.Codigo <= 0) {
                MostrarAlerta("Informe o animal!");
                return;
            }
            parametros.push("codAnimal=" + this.EntityTela.Codigo);
            abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.AgendamentoDeVacinasPlanoDeVacinacao), parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_AniCad;
}(MouraPageCadastroAngular));
var c_AniCad = new C_AniCad();
//# sourceMappingURL=C_AniCad.js.map