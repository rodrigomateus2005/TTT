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
var C_Manequim = /** @class */ (function (_super) {
    __extends(C_Manequim, _super);
    function C_Manequim() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._tamImage = 1048576; //atual: 2MB | 400KB = 409600 
        return _this;
    }
    Object.defineProperty(C_Manequim.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Manequim.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Manequim.prototype, "imgUploadManequim", {
        get: function () {
            return window['imgUploadManequim_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Manequim.prototype, "grdManequinsDuplicados", {
        //get imgManequim(): HTMLImageElement {
        //    return <HTMLImageElement>$("#imgManequim")[0];
        //}
        get: function () {
            return window['grdManequinsDuplicados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Manequim.prototype, "mdManequinsDuplicados", {
        get: function () {
            return window['mdManequinsDuplicados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Manequim.prototype, "grdManequim", {
        get: function () {
            return window['grdManequim_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Manequim.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grdManequim) {
            adicionarEventoMoura(this.grdManequim.SelecionouLinha, this.OnGridSelecionouLinha, this);
        }
        if (this.imgUploadManequim) {
            adicionarEventoMoura(this.imgUploadManequim.ImgUploadStart, this.OnStartUploadManequim, this);
        }
    };
    C_Manequim.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_Manequim.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var manequim = this.EntityTela;
        if (!this.ValidarAntesGravar(manequim)) {
            return false;
        }
        return true;
    };
    C_Manequim.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        var gravouSucesso;
        var parametros;
        parametros = {
            codManequim: CNum(this.EntityTela.Codigo),
            urlImagem: this.CaminhoCompletoImagem(this.EntityTela.Codigo),
            arquivoImagem: Sting64ToByteArray(this.FormatImg(this.imgUploadManequim.Img.src))
        };
        gravouSucesso = this.ExecutarFuncaoServerSideSynch("GravarImagem", parametros);
        if (gravouSucesso == false) {
            MostrarAlerta("Ocorreu um erro ao enviar a imagem para o servidor, por favor contate o Suporte Online!");
        }
        this.PreencherGrade();
        return true;
    };
    C_Manequim.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Descricao = '';
        Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.LimparFotoManequim();
        this.RefreshAngular();
    };
    C_Manequim.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar;
        this.PreencherGrade();
        return true;
    };
    C_Manequim.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        this.CarregarFotoManequim(Entidade);
        this.RefreshAngular();
    };
    C_Manequim.prototype.OnGridSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_Manequim.prototype.ProcuraEmpresa = function (codEmpresa, lista) {
        var retorno = null;
        if (!lista) {
            lista = [];
        }
        for (var x = 0; x <= lista.length - 1; x++) {
            if (lista[x].Cod_Empresa == codEmpresa) {
                retorno = lista[x];
                break;
            }
        }
        return retorno;
    };
    C_Manequim.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {
                somenteAtivos: false
            };
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.grdManequim.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Manequim.prototype.ValidarAntesGravar = function (entity) {
        try {
            var parametros = {
                Entidade: JSON.stringify(entity)
            };
            var retornoAntesGravar = this.ExecutarFuncaoServerSideSynch("ValidarAntesGravar", parametros);
            if (!String.IsNullOrWhiteSpace(retornoAntesGravar)) {
                MostrarAlerta(retornoAntesGravar);
                return false;
            }
            var foto = this.FormatImg(this.imgUploadManequim.Img.src);
            if (foto == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Foto do Manequim.");
                return false;
            }
            return true;
        }
        catch (ex) {
            LogarException(ex);
            return false;
        }
    };
    C_Manequim.prototype.FormatImg = function (img) {
        var foto = img.split(",");
        return foto[1];
    };
    C_Manequim.prototype.OnStartUploadManequim = function (s, e) {
        this.imgUploadManequim.Img.removeAttribute("style");
        this.imgUploadManequim.Img.setAttribute("style", "display:block; max-height: 400px");
    };
    C_Manequim.prototype.CarregarFotoManequim = function (Entity) {
        if (Entity.Url_Imagem != undefined && Entity.Url_Imagem.length > 0) {
            var imgBytes;
            var parametros;
            parametros = {
                codManequim: CNum(Entity.Codigo),
            };
            imgBytes = this.ExecutarFuncaoServerSideSynch("LerImagem", parametros);
            if (imgBytes != null) {
                this.imgUploadManequim.Img.src = "data:image/png;base64," + ByteArrayToSting64(imgBytes);
                this.imgUploadManequim.Img.removeAttribute("style");
                this.imgUploadManequim.Img.setAttribute("style", "display:block; max-height: 400px");
                this.imgUploadManequim.Img.hidden = false;
            }
            else {
                MostrarAlerta("A imagem deste manequim não foi encontrada na pasta, por favor contate o Suporte Online!");
                return;
            }
        }
        else {
            this.imgUploadManequim.Img.hidden = true;
        }
    };
    C_Manequim.prototype.CaminhoCompletoImagem = function (codManequim) {
        var caminhoImagem;
        var PATH_FOTOS = "~/ProvadorVirtual/Fotos/Manequim/";
        var digitosCodigo = 6;
        caminhoImagem = "000000" + codManequim.toString();
        caminhoImagem = caminhoImagem.slice(caminhoImagem.length - digitosCodigo);
        caminhoImagem = PATH_FOTOS + caminhoImagem + ".png";
        return caminhoImagem;
    };
    C_Manequim.prototype.LimparFotoManequim = function () {
        this.imgUploadManequim.Img.src = "";
        this.imgUploadManequim.Limpar();
        this.imgUploadManequim.Img.hidden = true;
    };
    return C_Manequim;
}(MouraPageCadastroAngular));
var c_Manequim = new C_Manequim();
// ******* Múltiplas Empresas *******
//protected OnDepoisSetEntidade(Entidade: SiSMoura.Core.Entity.Provador_Manequim): void {
//if (!Entidade.Empresas) {
//    Entidade.Empresas = [];
//}
//if (this.lstEmpresa) {
//    var selecionar: string[] = [];
//    for (var x = 0; x <= Entidade.Empresas.length - 1; x++) {
//        selecionar.push("" + Entidade.Empresas[x].Cod_Empresa);
//    }
//    this.lstEmpresa.LimparSelecao();
//    this.lstEmpresa.SetValues(selecionar);
//}
//}
//    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Provador_Manequim): void {
//    super.OnDepoisBuscarExistente(Entidade);
//    if (!Entidade.Empresas) {
//        Entidade.Empresas = [];
//    }
//    if (this.lstEmpresa) {
//        var selecionar: string[] = [];
//        for (var x = 0; x <= Entidade.Empresas.length - 1; x++) {
//            selecionar.push("" + Entidade.Empresas[x].Cod_Empresa);
//        }
//        this.lstEmpresa.LimparSelecao();
//        this.lstEmpresa.SetValues(selecionar);
//    }
//    this.CarregarFotoManequim(Entidade);
//    this.RefreshAngular();
//}
//    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Provador_Manequim) {
//    super.OnDepoisLimpar(Entity);
//    Entity.Descricao = '';
//    Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
//    Entity.Empresas = []
//    if (this.lstEmpresa) {
//        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
//    }
//    this.LimparFotoManequim();
//    this.RefreshAngular();
//}
//protected OnAntesGravar(): boolean {
//super.OnAntesGravar();
//var foto = this.FormatImg(this.imgUploadManequim.Img.src);
//var Entidade: SiSMoura.Core.Entity.Provador_Manequim = this.GetScope().Entity;
//Entidade.Extensao = this.imgUploadManequim.Imagem.type;
// **** Múltiplas Empresas ****
//if (this.lstEmpresa) {
//    if (!Entidade.Empresas) {
//        Entidade.Empresas = [];
//    }
//    var valores: string[] = this.lstEmpresa.GetValues();
//    //Verifica as empresas que não estão na lista a ser salva
//    for (var x = 0; x <= valores.length - 1; x++) {
//        var empresa: SiSMoura.Core.Entity.Provador_Manequim_Empresa = this.ProcuraEmpresa(valores[x].CNum(), Entidade.Empresas);
//        if (!empresa) {
//            empresa = <any>{};
//            empresa.Id = 0;
//            empresa.Cod_Empresa = valores[x].CNum();
//            Entidade.Empresas.push(empresa);
//        }
//    }
//    //Remove da lista as empresas que foram desmarcadas
//    var count = 0;
//    while (count <= Entidade.Empresas.length - 1) {
//        var temp = Entidade.Empresas[count];
//        var index = valores.indexOf("" + temp.Cod_Empresa);
//        //Caso a empresa não esteja selecionada na lista, deve removê-la 
//        if (index < 0) {
//            Entidade.Empresas.splice(count, 1);
//            count -= 1;
//        }
//        count += 1;
//    }
//}
//this.GetScope().Entity = Entidade;
//return true;
//}
//protected ValidarCampos(): boolean {
//    if (this.EntityTela.Descricao == undefined) {
//        MostrarAlerta("Preencha corretamente o campo: Descrição.");
//        return false;
//    }
//    if (this.OnTextBoxDescricaoChange() == false) {
//        return false;
//    }
//    if (this.EntityTela.Empresa <= 0) {
//        MostrarAlerta("Preencha corretamente o campo: Empresa.");
//        return false;
//    }
//    var foto = this.FormatImg(this.imgUploadManequim.Img.src);
//    if (foto == undefined) {
//        MostrarAlerta("Preencha o campo corretamente: Foto do Manequim.");
//        return false;
//    }
//}
//# sourceMappingURL=C_Manequim.js.map