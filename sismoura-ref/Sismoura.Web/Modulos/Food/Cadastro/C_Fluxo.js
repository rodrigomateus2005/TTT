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
var C_Fluxo = /** @class */ (function (_super) {
    __extends(C_Fluxo, _super);
    function C_Fluxo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.codigos = [];
        return _this;
    }
    Object.defineProperty(C_Fluxo.prototype, "grdTelas", {
        get: function () {
            return window['grdTelas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fluxo.prototype, "grdFluxoTelas", {
        get: function () {
            return window['grdFluxoTelas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fluxo.prototype, "txtPosicao", {
        get: function () {
            return window['txtPosicao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fluxo.prototype, "txtAlturaBotaoModalSugestao", {
        get: function () {
            return window['txtAlturaBotaoModalSugestao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fluxo.prototype, "txtLarguraBotaoModalSugestao", {
        get: function () {
            return window['txtLarguraBotaoModalSugestao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fluxo.prototype, "Tela", {
        get: function () {
            if (!this.GetScope()["Tela"]) {
                this.GetScope()["Tela"] = {};
            }
            return this.GetScope()["Tela"];
        },
        set: function (value) {
            this.GetScope()["Tela"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fluxo.prototype, "Telas", {
        get: function () {
            if (!this.GetScope()["Telas"]) {
                this.GetScope()["Telas"] = [];
            }
            return this.GetScope()["Telas"];
        },
        set: function (value) {
            this.GetScope()["Telas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fluxo.prototype, "Fluxos", {
        get: function () {
            return this.GetScope()["Fluxos"];
        },
        set: function (value) {
            this.GetScope()["Fluxos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fluxo.prototype, "cboFluxoTela", {
        get: function () {
            return window['cboFluxoTela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fluxo.prototype, "cboTela", {
        get: function () {
            return window['cboTela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fluxo.prototype, "chkInserirCPFNota", {
        get: function () {
            return window['chkInserirCPFNota_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fluxo.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fluxo.prototype, "fotoFundoSugestao", {
        get: function () {
            return window['fotoFundoSugestao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fluxo.prototype, "fotoFundoCPFNota", {
        get: function () {
            return window['fotoFundoCPFNota_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fluxo.prototype, "fotoFundoDigitarCPF", {
        get: function () {
            return window['fotoFundoDigitarCPF_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Fluxo.prototype, "fotoFundoPedido", {
        get: function () {
            return window['fotoFundoPedido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Fluxo.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grdFluxoTelas) {
            adicionarEventoMoura(this.grdFluxoTelas.Grid.SelecionouLinha, this.OnGrdSelecionouFluxoTelas, this);
        }
        if (this.grdTelas) {
            adicionarEventoMoura(this.grdTelas.Validando, this.OnClickIncluirTela, this);
        }
        if (this.grdTelas) {
            adicionarEventoMoura(this.grdTelas.Validando, this.OnClickIncluirTela, this);
        }
        if (this.chkInserirCPFNota) {
            adicionarEventoMoura(this.chkInserirCPFNota.CheckChanged, this.OnInserirCPF, this);
        }
    };
    C_Fluxo.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (this.Telas.length > 0) {
            this.txtPosicao.SetText(this.Telas[length - 1].Posicao + 1);
        }
        else {
            this.txtPosicao.SetText("1");
        }
    };
    C_Fluxo.prototype.PreencherEmpresas = function (empresas) {
        debugger;
        if (empresas) {
            for (var x = 0; x < empresas.length; x++) {
                this.codigos.push(empresas[x].Empresa.toString());
            }
            if (this.lstEmpresa) {
                this.lstEmpresa.SetValues(this.codigos);
            }
        }
        else {
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        }
    };
    C_Fluxo.prototype.OnGrdSelecionouFluxoTelas = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
        this.cboTela.SetValue(e.data.Codigo_Tela);
        this.RefreshAngular();
    };
    C_Fluxo.prototype.OnInserirCPF = function () {
        if (this.chkInserirCPFNota.Checked) {
            $("#fotoFundoCPFNota_Panel").show();
            $("#fotoFundoDigitarCPF_Panel").show();
        }
        else {
            this.fotoFundoCPFNota.Limpar();
            this.fotoFundoDigitarCPF.Limpar();
            $("#fotoFundoCPFNota_Panel").hide();
            $("#fotoFundoDigitarCPF_Panel").hide();
        }
    };
    C_Fluxo.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Codigo_Tela = this.cboTela.GetValue();
        if (this.Telas.length > 0) {
            this.EntityTela.FluxoTelas = this.Telas;
        }
        this.GetScope().Entity.Empresas = [];
        for (var x = 0; x < this.lstEmpresa.GetValues().length; x++) {
            var empresa = {};
            empresa.Empresa = +this.lstEmpresa.GetValues()[x];
            this.GetScope().Entity.Empresas.push(empresa);
        }
        var foto = this.fotoFundoSugestao.FormatImg();
        if (foto == undefined) {
            MostrarAlerta("Preencha o campo corretamente: Imagem de Fundo do Modal de Sugestão.");
            return false;
        }
        var fotoPedido = this.fotoFundoPedido.FormatImg();
        if (fotoPedido == undefined) {
            MostrarAlerta("Preencha o campo corretamente: Imagem de Fundo do Modal de Finalizar/Editar Pedido.");
            return false;
        }
        if (this.GetScope().Entity.Empresas.length <= 0) {
            MostrarAlerta("O Fluxo deve ser vinculado a pelo menos uma Empresa");
            return false;
        }
        if (this.Telas.length == 0) {
            MostrarAlerta("Adicione pelo menos uma Tela ao fluxo");
            return false;
        }
        this.EntityTela.Img_Fundo_Sugestao = this.fotoFundoSugestao.OnConvertStringToByteArray();
        this.EntityTela.Img_Fundo_Modal_Pedido = this.fotoFundoPedido.OnConvertStringToByteArray();
        //for (var x = 0; x < this.Fluxos.length; x++) {
        //    for (var y = 0; y < this.GetScope().Entity.Empresas.length; y++) {
        //        if (this.GetScope().Entity.Empresas[y].Empresa == this.EntityTela.Empresas[y].Empresa) {
        //            MostrarAlerta("Não é possível adicionar mais de uma fluxo para a mesma empresa");
        //            return false;
        //        }
        //    }
        //}
        var sugestao = this.Telas.filter(function (item) { return item.Exibir_Sugestao == true; });
        if (sugestao.length > 0) {
            if (this.txtAlturaBotaoModalSugestao.GetText() == undefined || this.txtAlturaBotaoModalSugestao.GetText() == "" || this.txtAlturaBotaoModalSugestao.GetText() == "0") {
                MostrarAlerta("Preencha o campo corretamente: Altura em px do Botão do Modal de Sugestão dentro da AbaFoto Fundo Modal.");
                return false;
            }
            if (this.txtLarguraBotaoModalSugestao.GetText() == undefined || this.txtLarguraBotaoModalSugestao.GetText() == "" || this.txtLarguraBotaoModalSugestao.GetText() == "0") {
                MostrarAlerta("Preencha o campo corretamente: Largura em px do Botão do Modal de Sugestão dentro da AbaFoto Fundo Modal.");
                return false;
            }
        }
        if (this.chkInserirCPFNota.Checked) {
            var foto = this.fotoFundoDigitarCPF.FormatImg();
            if (foto == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Imagem de Fundo do Modal de Digitar CPF Cliente.");
                return false;
            }
            var fotoCPF = this.fotoFundoCPFNota.FormatImg();
            if (fotoCPF == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Imagem de Fundo do Modal de Inserir CPF Cliente.");
                return false;
            }
            this.EntityTela.Img_Fundo_CPF_Nota = this.fotoFundoCPFNota.OnConvertStringToByteArray();
            this.EntityTela.Img_Fundo_Digitar_CPF = this.fotoFundoDigitarCPF.OnConvertStringToByteArray();
        }
        else {
            debugger;
            this.fotoFundoDigitarCPF.Limpar();
            this.fotoFundoCPFNota.Limpar();
            if (this.EntityTela.Img_Fundo_CPF_Nota) {
                this.EntityTela.Img_Fundo_CPF_Nota = this.fotoFundoCPFNota.OnConvertStringToByteArray();
            }
            if (this.EntityTela.Img_Fundo_Digitar_CPF) {
                this.EntityTela.Img_Fundo_Digitar_CPF = this.fotoFundoDigitarCPF.OnConvertStringToByteArray();
            }
        }
        return true;
    };
    C_Fluxo.prototype.OnAntesDeletar = function () {
        _super.prototype.OnAntesDeletar.call(this);
        var parametros = {
            codFluxo: this.EntityTela.Codigo
        };
        var retornoEmpresas = this.ExecutarFuncaoServerSideSynch("GetByFluxoEmpresas", parametros);
        this.EntityTela.Empresas = retornoEmpresas;
        return true;
    };
    C_Fluxo.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.PreencherGrade();
        this.PreencherEmpresas(Entity.Empresas);
        this.cboTela.LimparSelecao();
        this.fotoFundoSugestao.Limpar();
        this.fotoFundoPedido.Limpar();
        this.Telas = [];
        this.fotoFundoCPFNota.Limpar();
        this.fotoFundoDigitarCPF.Limpar();
        $("#fotoFundoCPFNota_Panel").hide();
        $("#fotoFundoDigitarCPF_Panel").hide();
    };
    C_Fluxo.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Fluxo.prototype.PreencherGrade = function () {
        try {
            var retorno = this.ExecutarFuncaoServerSideSynch("GetFoodFluxo", {});
            this.Fluxos = retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Fluxo.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        var parametros = {
            codFluxo: Entidade.Codigo
        };
        var retornoEmpresas = this.ExecutarFuncaoServerSideSynch("GetByFluxoEmpresas", parametros);
        this.EntityTela.Empresas = retornoEmpresas;
        this.PreencherEmpresas(Entidade.Empresas);
        var retornoTelas = this.ExecutarFuncaoServerSideSynch("GetFluxoTelas", parametros);
        this.Telas = retornoTelas;
        this.chkInserirCPFNota.Checked = Entidade.Inserir_CPF_Nota;
        this.OnInserirCPF();
        this.fotoFundoSugestao.Img.src = this.fotoFundoSugestao.OnConvertByteArrayToString(Entidade.Img_Fundo_Sugestao);
        this.fotoFundoPedido.Img.src = this.fotoFundoPedido.OnConvertByteArrayToString(Entidade.Img_Fundo_Modal_Pedido);
        if (Entidade.Img_Fundo_CPF_Nota) {
            if (Entidade.Img_Fundo_CPF_Nota.length > 0) {
                this.fotoFundoCPFNota.Img.src = this.fotoFundoCPFNota.OnConvertByteArrayToString(Entidade.Img_Fundo_CPF_Nota);
            }
        }
        if (Entidade.Img_Fundo_Digitar_CPF) {
            if (Entidade.Img_Fundo_Digitar_CPF.length > 0) {
                this.fotoFundoDigitarCPF.Img.src = this.fotoFundoDigitarCPF.OnConvertByteArrayToString(Entidade.Img_Fundo_Digitar_CPF);
            }
        }
    };
    C_Fluxo.prototype.OnClickIncluirTela = function (s, e) {
        try {
            e.item.Tela_Titulo = this.cboFluxoTela.GetText();
            e.item.Tela = this.cboFluxoTela.GetValue();
            for (var x = 0; x < this.Telas.length; x++) {
                if (this.Telas[x].Tela == e.item.Tela) {
                    MostrarAlerta("Não é possível adicionar duas vezes a mesma Tela");
                    e.cancelar = true;
                    return;
                }
            }
            if (e.index < 0) {
                e.item.Codigo = 0;
            }
            var maiorContador;
            var posicao = 0;
            var counter = this.Telas.length;
            if (this.EntityTela.Codigo == null) {
                this.EntityTela.Codigo = 0;
            }
            var parametros = {
                codFluxo: this.EntityTela.Codigo
            };
            if (e.item.Codigo == 0) {
                var retorno = this.ExecutarFuncaoServerSideSynch("GetMaximoTela", parametros);
                maiorContador = retorno.Max("Codigo") + 1;
                if (this.Telas.length == 0) {
                    e.item.Codigo = maiorContador;
                }
                else {
                    e.item.Codigo = (this.Telas[counter - 1].Codigo + 1);
                }
            }
            var posicaoIgual = -1;
            var posicaoCalculo = 0;
            for (var x = 0; x < counter; x++) {
                if (this.txtPosicao.GetText().CNum() == this.Telas[x].Posicao) {
                    posicaoIgual = x;
                }
            }
            if (posicaoIgual != -1) {
                for (var x = posicaoIgual; x < counter; x++) {
                    if (posicaoIgual > 0) {
                        posicao = this.Telas[posicaoIgual].Posicao;
                        this.Telas[posicaoIgual].Posicao = (posicao + 1);
                    }
                    else {
                        posicao = this.txtPosicao.GetText().CNum();
                        this.Telas[posicaoIgual].Posicao = (posicao + 1);
                    }
                    posicaoIgual = posicaoIgual + 1;
                }
            }
            if (this.Telas.length > 0 && posicaoIgual > -1) {
                posicaoCalculo = this.Telas[this.Telas.length - 1].Posicao;
            }
            else {
                posicaoCalculo = this.txtPosicao.GetText().CNum();
            }
            e.item.Posicao = this.txtPosicao.GetText().CNum();
            this.CalcularPosicao(posicaoCalculo);
            this.cboFluxoTela.LimparSelecao();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Fluxo.prototype.CalcularPosicao = function (posicaoCalculada) {
        if (posicaoCalculada >= 1) {
            this.txtPosicao.SetText((posicaoCalculada + 1).toString());
        }
        else if (this.txtPosicao.GetText().CNum() == posicaoCalculada && posicaoCalculada == 0) {
            this.txtPosicao.SetText("1");
        }
    };
    return C_Fluxo;
}(MouraPageCadastroAngular));
var c_Fluxo = new C_Fluxo();
//# sourceMappingURL=C_Fluxo.js.map