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
var C_Food_Toten = /** @class */ (function (_super) {
    __extends(C_Food_Toten, _super);
    function C_Food_Toten() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Food_Toten.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Food_Toten.prototype, "Totens", {
        get: function () {
            return this.GetScope()["Totens"];
        },
        set: function (value) {
            this.GetScope()["Totens"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Food_Toten.prototype, "ToTenConf", {
        get: function () {
            return this.GetScope()["ToTenConf"];
        },
        set: function (value) {
            this.GetScope()["ToTenConf"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Food_Toten.prototype, "fotoFundoTef", {
        get: function () {
            return window['fotoFundoTef_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Food_Toten.prototype, "CorFonteTef", {
        get: function () {
            return window['CorFonteTef_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Food_Toten.prototype, "cboPosicao", {
        get: function () {
            return window['cboPosicao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Food_Toten.prototype, "txtTamFonteTef", {
        get: function () {
            return window['txtTamFonteTef_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Food_Toten.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grd) {
            adicionarEventoMoura(this.grd.Grid.SelecionouLinha, this.OnGrdSelecionouItem, this);
        }
    };
    C_Food_Toten.prototype.OnGrdSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.data.Codigo);
        this.RefreshAngular();
    };
    C_Food_Toten.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_Food_Toten.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.fotoFundoTef.Limpar();
        this.PreencherGrade();
        this.txtTamFonteTef.Limpar();
        this.CorFonteTef.Limpar();
        this.cboPosicao.LimparSelecao();
    };
    C_Food_Toten.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (!this.EntityTela.Cartao_Credito || !this.EntityTela.Cartao_Debito || !this.EntityTela.Vale_Refeicao) {
            if (this.EntityTela.NFCe_Utilizar) {
                /*if (!this.EntityTela.NFCe_EnviarContigencia) {
                    MostrarAlerta("Preencha o campo corretamente: Enviar Contingência NFCe.");
                    return false;
                }*/
                if (this.EntityTela.NFCe_Serie == null || this.EntityTela.NFCe_Serie == undefined || this.EntityTela.NFCe_Serie == 0) {
                    MostrarAlerta("Preencha o campo corretamente: Série da NFCe.");
                    return false;
                }
                if (this.EntityTela.NFCe_IdToken == null || this.EntityTela.NFCe_IdToken == undefined || this.EntityTela.NFCe_IdToken == "") {
                    MostrarAlerta("Preencha o campo corretamente: Id Token NFCe.");
                    return false;
                }
                if (this.EntityTela.NFCe_Token == null || this.EntityTela.NFCe_Token == undefined || this.EntityTela.NFCe_Token == "") {
                    MostrarAlerta("Preencha o campo corretamente: Token NFCe.");
                    return false;
                }
            }
            var fotoTef = this.fotoFundoTef.FormatImg();
            if (fotoTef == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Imagem de Fundo do TEF.");
                return false;
            }
            if (!this.ToTenConf) {
                this.ToTenConf = {};
            }
            if (fotoTef.length > 0) {
                this.ToTenConf.Img_Fundo_Tef = this.fotoFundoTef.OnConvertStringToByteArray();
            }
            if (this.ToTenConf.Tamanho_Fonte_Tef == null || this.ToTenConf.Tamanho_Fonte_Tef == undefined || this.ToTenConf.Tamanho_Fonte_Tef == 0) {
                MostrarAlerta("Preencha o campo corretamente: Tamanho da Fonte no TEF.");
                return false;
            }
            if (this.ToTenConf.Posicao_Fonte_Tef == null || this.ToTenConf.Posicao_Fonte_Tef == undefined || this.ToTenConf.Posicao_Fonte_Tef == 0) {
                MostrarAlerta("Preencha o campo corretamente: Posição da Mensagem no TEF.");
                return false;
            }
            if (this.CorFonteTef.GetColor() == null || this.CorFonteTef.GetColor() == "") {
                MostrarAlerta("Preencha o campo corretamente: Cor do Fonte no TEF.");
                return false;
            }
            this.ToTenConf.Cor_Fonte_Tef = this.CorFonteTef.GetColor();
        }
        this.EntityTela.Toten_Configuracao = this.ToTenConf;
        return true;
    };
    C_Food_Toten.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Food_Toten.prototype.PreencherGrade = function () {
        try {
            var retorno = this.ExecutarFuncaoServerSideSynch("GetFoodToten", {});
            this.Totens = retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Food_Toten.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        this.fotoFundoTef.Limpar();
        this.CorFonteTef.Limpar();
        var parametros = {
            codToten: Entidade.Codigo
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetByTotenConfig", parametros);
        this.ToTenConf = retorno;
        if (retorno != null) {
            if (retorno.Img_Fundo_Tef.length > 0) {
                this.fotoFundoTef.Img.src = this.fotoFundoTef.OnConvertByteArrayToString(retorno.Img_Fundo_Tef);
            }
            this.CorFonteTef.SetColor(retorno.Cor_Fonte_Tef);
        }
    };
    return C_Food_Toten;
}(MouraPageCadastroAngular));
var c_Food_Toten = new C_Food_Toten();
//# sourceMappingURL=C_Food_Toten.js.map