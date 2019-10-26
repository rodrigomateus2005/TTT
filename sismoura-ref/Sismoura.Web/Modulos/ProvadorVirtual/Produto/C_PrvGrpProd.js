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
var C_PrvGrpProd = /** @class */ (function (_super) {
    __extends(C_PrvGrpProd, _super);
    function C_PrvGrpProd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_PrvGrpProd.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PrvGrpProd.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PrvGrpProd.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PrvGrpProd.prototype, "lstPartesManequim", {
        get: function () {
            return window['lstPartesManequim_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_PrvGrpProd.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_PrvGrpProd.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        //if (this.txtCodigo) {
        //    this.txtCodigo.AddParametro("codEmpresasPermitidas", "teste");
        //}
        this.PreencherGrade();
    };
    C_PrvGrpProd.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_PrvGrpProd.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Descricao = '';
        //Entity.Empresas = [];
        Entity.PartesManequim = [];
        if (this.cboEmpresa) {
            this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        }
        if (this.lstPartesManequim) {
            this.lstPartesManequim.LimparSelecao();
        }
        this.RefreshAngular();
    };
    C_PrvGrpProd.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_PrvGrpProd.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var grupo = this.EntityTela;
        if (!this.ValidarAntesGravar(grupo)) {
            return false;
        }
        //this.AntesGravarEmpresa(this.GetScope().Entity);
        this.AntesGravarPartesManequim(this.GetScope().Entity);
        return true;
    };
    C_PrvGrpProd.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_PrvGrpProd.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        //if (!Entity.Empresas) {
        //    Entity.Empresas = [];
        //}
        //if (this.lstEmpresa) {
        //    var selecionar: string[] = [];
        //    for (var x = 0; x <= Entity.Empresas.length - 1; x++) {
        //        selecionar.push("" + Entity.Empresas[x].Cod_Empresa);
        //    }
        //    this.lstEmpresa.LimparSelecao();
        //    this.lstEmpresa.SetValues(selecionar);
        //}
        if (!Entity.PartesManequim) {
            Entity.PartesManequim = [];
        }
        if (this.lstPartesManequim) {
            var selecionar = [];
            for (var x = 0; x <= Entity.PartesManequim.length - 1; x++) {
                selecionar.push("" + Entity.PartesManequim[x].Cod_Corpo);
            }
            this.lstPartesManequim.LimparSelecao();
            this.lstPartesManequim.SetValues(selecionar);
        }
        this.RefreshAngular();
    };
    C_PrvGrpProd.prototype.OnDepoisSetEntidade = function (Entity) {
        //if (!Entity.Empresas) {
        //    Entity.Empresas = [];
        //}
        //if (this.lstEmpresa) {
        //    var selecionar: string[] = [];
        //    for (var x = 0; x <= Entity.Empresas.length - 1; x++) {
        //        selecionar.push("" + Entity.Empresas[x].Cod_Empresa);
        //    }
        //    this.lstEmpresa.LimparSelecao();
        //    this.lstEmpresa.SetValues(selecionar);
        //}
        if (!Entity.PartesManequim) {
            Entity.PartesManequim = [];
        }
        if (this.lstPartesManequim) {
            var selecionar = [];
            for (var x = 0; x <= Entity.PartesManequim.length - 1; x++) {
                selecionar.push("" + Entity.PartesManequim[x].Cod_Corpo);
            }
            this.lstPartesManequim.LimparSelecao();
            this.lstPartesManequim.SetValues(selecionar);
        }
    };
    C_PrvGrpProd.prototype.ValidarAntesGravar = function (entity) {
        try {
            var parametros = {
                Entidade: JSON.stringify(entity)
            };
            var retornoAntesGravar = this.ExecutarFuncaoServerSideSynch("ValidarAntesGravar", parametros);
            if (!String.IsNullOrWhiteSpace(retornoAntesGravar)) {
                MostrarAlerta(retornoAntesGravar);
                return false;
            }
            return true;
        }
        catch (ex) {
            LogarException(ex);
            return false;
        }
    };
    //protected AntesGravarEmpresa(entidade: SiSMoura.Core.Entity.Grupo_Produto) {
    //    if (this.lstEmpresa) {
    //        if (!entidade.Empresas) {
    //            entidade.Empresas = [];
    //        }
    //        var valores: string[] = this.lstEmpresa.GetValues();
    //        //Verifica as empresas que não estão na lista a ser salva
    //        for (var x = 0; x <= valores.length - 1; x++) {
    //            var empresa: SiSMoura.Core.Entity.Provador_Grupo_Empresa = this.ProcuraEmpresa(valores[x].CNum(), entidade.Empresas);
    //            if (!empresa) {
    //                empresa = <any>{};
    //                empresa.Id = 0;
    //                empresa.Cod_Empresa = valores[x].CNum();
    //                entidade.Empresas.push(empresa);
    //            }
    //        }
    //        //Remove da lista as empresas que foram desmarcadas
    //        var count = 0;
    //        while (count <= entidade.Empresas.length - 1) {
    //            var temp = entidade.Empresas[count];
    //            var index = valores.indexOf("" + temp.Cod_Empresa);
    //            //Caso a empresa não esteja selecionada na lista, deve removê-la 
    //            if (index < 0) {
    //                entidade.Empresas.splice(count, 1);
    //                count -= 1;
    //            }
    //            count += 1;
    //        }
    //    }
    //    this.GetScope().Entity = entidade;
    //}
    C_PrvGrpProd.prototype.ProcuraEmpresa = function (codEmpresa, lista) {
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
    C_PrvGrpProd.prototype.AntesGravarPartesManequim = function (entidade) {
        if (this.lstPartesManequim) {
            if (!entidade.PartesManequim) {
                entidade.PartesManequim = [];
            }
            var valores = this.lstPartesManequim.GetValues();
            //Verifica as empresas que não estão na lista a ser salva
            for (var x = 0; x <= valores.length - 1; x++) {
                var partesManequim = this.ProcuraPartesManequim(valores[x].CNum(), entidade.PartesManequim);
                if (!partesManequim) {
                    partesManequim = {};
                    partesManequim.Id = 0;
                    partesManequim.Cod_Corpo = valores[x].CNum();
                    entidade.PartesManequim.push(partesManequim);
                }
            }
            //Remove da lista as PartesManequim que foram desmarcadas
            var count = 0;
            while (count <= entidade.PartesManequim.length - 1) {
                var temp = entidade.PartesManequim[count];
                var index = valores.indexOf("" + temp.Cod_Corpo);
                //Caso a empresa não esteja selecionada na lista, deve removê-la 
                if (index < 0) {
                    entidade.PartesManequim.splice(count, 1);
                    count -= 1;
                }
                count += 1;
            }
        }
        this.GetScope().Entity = entidade;
    };
    C_PrvGrpProd.prototype.ProcuraPartesManequim = function (codParteManequim, lista) {
        var retorno = null;
        if (!lista) {
            lista = [];
        }
        for (var x = 0; x <= lista.length - 1; x++) {
            if (lista[x].Cod_Corpo == codParteManequim) {
                retorno = lista[x];
                break;
            }
        }
        return retorno;
    };
    C_PrvGrpProd.prototype.PreencherGrade = function () {
        try {
            var parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("GetCadastradosProvador", parametros);
            this.Grid.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_PrvGrpProd;
}(MouraPageCadastroAngular));
var c_PrvGrpProd = new C_PrvGrpProd();
//# sourceMappingURL=C_PrvGrpProd.js.map