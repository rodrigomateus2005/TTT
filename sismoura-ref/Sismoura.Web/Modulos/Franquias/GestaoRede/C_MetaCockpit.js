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
var C_MetaCockpit = /** @class */ (function (_super) {
    __extends(C_MetaCockpit, _super);
    function C_MetaCockpit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_MetaCockpit.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MetaCockpit.prototype, "btnProjetarMeta", {
        get: function () {
            return window['btnProjetarMeta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MetaCockpit.prototype, "bntReporjetarMeta", {
        get: function () {
            return window['bntReporjetarMeta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MetaCockpit.prototype, "btnVisualizarMeta", {
        get: function () {
            return window['btnVisualizarMeta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MetaCockpit.prototype, "btnVoltar", {
        get: function () {
            return window['btnVoltar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MetaCockpit.prototype, "mdMetaCadastrada", {
        get: function () {
            return window['mdMetaCadastrada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MetaCockpit.prototype, "hndCodigoMeta", {
        get: function () {
            return $('#hndCodigoMeta')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MetaCockpit.prototype, "txtMetaDiaria", {
        get: function () {
            return window['txtMetaDiaria_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MetaCockpit.prototype, "txtMetaSemanal", {
        get: function () {
            return window['txtMetaSemanal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MetaCockpit.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_MetaCockpit.prototype, "txtValorFaturamento", {
        get: function () {
            return window['txtValorFaturamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_MetaCockpit.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnProjetarMeta) {
            adicionarEventoMoura(this.btnProjetarMeta.Click, this.OnClickProjetarMeta, this);
        }
        if (this.bntReporjetarMeta) {
            adicionarEventoMoura(this.bntReporjetarMeta.Click, this.OnClickReprojetarMeta, this);
        }
        if (this.btnVisualizarMeta) {
            adicionarEventoMoura(this.btnVisualizarMeta.Click, this.OnClickVisualizarMeta, this);
        }
        if (this.btnVoltar) {
            adicionarEventoMoura(this.btnVoltar.Click, this.OnClickVoltar, this);
        }
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.EditouItemGrade, this.OnEditouItem, this);
        }
    };
    C_MetaCockpit.prototype.OnEditouItem = function (s, e) {
        this.EntityTela.Valor_Faturamento = this.itens.Sum("Valor_Faturamento_Data");
        this.RefreshAngular();
    };
    C_MetaCockpit.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.PreencherGrade(Entity);
        this.setLabelFaturamento(Entity);
    };
    C_MetaCockpit.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade(this.EntityTela);
    };
    C_MetaCockpit.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade(Entity);
        this.txtMetaDiaria.Limpar();
        this.txtMetaSemanal.Limpar();
        Entity.Data_Meta = this.DataServidor();
    };
    C_MetaCockpit.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade(this.EntityTela);
        return true;
    };
    C_MetaCockpit.prototype.PreencherGrade = function (Entity) {
        try {
            var codEmpresa = 0;
            var parametros;
            if (Entity.Data_Meta != undefined) {
                if (Entity.Empresa != null || Entity.Empresa != undefined) {
                    codEmpresa = Entity.Empresa;
                }
                parametros = {
                    codEmpresa: codEmpresa,
                    dataMeta: Entity.Data_Meta.ToDate()
                };
                var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
                this.itens = cad;
                this.Grid.PreencherGrid(this.itens);
            }
            else {
                this.Grid.PreencherGrid(null);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_MetaCockpit.prototype.ValidarCampos = function (Entity) {
        if (Entity.Empresa == null || Entity.Empresa == undefined) {
            MostrarAlerta("A Empresa não foi informada");
            return false;
        }
        if (Entity.Data_Meta == null || Entity.Data_Meta == undefined) {
            MostrarAlerta("Informe uma data válida");
            return false;
        }
        if (Entity.Valor_Faturamento == null || Entity.Valor_Faturamento == undefined) {
            MostrarAlerta("O Valor do Faturamento não foi informado");
            return false;
        }
        return true;
    };
    C_MetaCockpit.prototype.OnClickProjetarMeta = function (s, e) {
        e.processOnServer = false;
        var tempMes = this.EntityTela.Data_Meta.ToDate().getMonth();
        var idMeta = this.MetaCadastrada();
        tempMes += 1;
        if (!this.ValidarCampos(this.EntityTela)) {
            return false;
        }
        if (this.EntityTela.Id != null || this.EntityTela.Id == undefined) {
            if (idMeta > 0) {
                var empresa = this.GetRazaoSocial();
                MostrarAlerta("A empresa " + empresa + "já possui a meta código " + idMeta + " cadastrada para período informado: " + tempMes + "/" +
                    this.EntityTela.Data_Meta.ToDate().getFullYear());
                this.hndCodigoMeta.value = idMeta + "";
                this.mdMetaCadastrada.Show();
                return false;
            }
            else {
                this.CalcularMetas(this.EntityTela);
            }
        }
    };
    C_MetaCockpit.prototype.OnClickReprojetarMeta = function (s, e) {
        e.processOnServer = false;
        try {
            if (this.ValidarCampos) {
                this.txtCodigo.Procurar(this.hndCodigoMeta.value);
                this.EntityTela.Valor_Faturamento = this.txtValorFaturamento.GetText().CNum();
                this.CalcularMetas(this.EntityTela);
                this.RefreshAngular();
                this.mdMetaCadastrada.Hide();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_MetaCockpit.prototype.OnClickVisualizarMeta = function (s, e) {
        e.processOnServer = false;
        try {
            this.txtCodigo.Procurar(this.hndCodigoMeta.value);
            this.mdMetaCadastrada.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_MetaCockpit.prototype.OnClickVoltar = function (s, e) {
        e.processOnServer = false;
        this.mdMetaCadastrada.Hide();
    };
    C_MetaCockpit.prototype.MetaCadastrada = function () {
        var metaExistente = 0;
        try {
            var codEmpresa = 0;
            var parametros;
            if (this.EntityTela.Empresa != null || this.EntityTela.Empresa != undefined) {
                codEmpresa = this.EntityTela.Empresa;
            }
            parametros = {
                codEmpresa: codEmpresa,
                mes: this.EntityTela.Data_Meta.ToDate().getMonth(),
                ano: this.EntityTela.Data_Meta.ToDate().getFullYear()
            };
            metaExistente = this.ExecutarFuncaoServerSideSynch("MetaCadastradaExistente", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
        return metaExistente;
    };
    C_MetaCockpit.prototype.GetRazaoSocial = function () {
        try {
            var codEmpresa = 0;
            var parametros;
            if (this.EntityTela.Empresa != null || this.EntityTela.Empresa != undefined) {
                codEmpresa = this.EntityTela.Empresa;
            }
            parametros = {
                codEmpresa: codEmpresa
            };
            var empresa = this.ExecutarFuncaoServerSideSynch("GetRazaoSocial", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
        return empresa;
    };
    C_MetaCockpit.prototype.CalcularMetas = function (Entity) {
        var diasMes = this.RetornarDiasMes(Entity);
        var meta;
        this.setLabelFaturamento(Entity);
        var x;
        this.itens = [];
        for (x = 1; x <= diasMes; x++) {
            meta = {};
            if (this.itens.length > 0) {
                meta.Contador = this.itens.length + 1;
            }
            else {
                meta.Contador = 1;
            }
            meta.Valor_Faturamento_Data = this.txtMetaDiaria.GetText().CNum();
            meta.Data = new Date(Entity.Data_Meta.ToDate().getFullYear(), Entity.Data_Meta.ToDate().getMonth(), x);
            this.itens.push(meta);
        }
        this.Grid.PreencherGrid(this.itens);
        this.Grid.Refresh();
    };
    C_MetaCockpit.prototype.RetornarDiasMes = function (Entity) {
        try {
            var parametros;
            parametros = {
                mes: Entity.Data_Meta.ToDate().getMonth(),
                ano: Entity.Data_Meta.ToDate().getFullYear()
            };
            var dias = this.ExecutarFuncaoServerSideSynch("GetDiasMes", parametros);
            if (dias != null) {
                return dias;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return 0;
    };
    C_MetaCockpit.prototype.setLabelFaturamento = function (Entity) {
        var diasMes = this.RetornarDiasMes(Entity);
        var valorFaturamentoMensal = Entity.Valor_Faturamento;
        var valorFaturamentoDiario = valorFaturamentoMensal / diasMes;
        var valorFaturamentoSemanal = valorFaturamentoDiario * 7;
        this.txtMetaDiaria.SetText(valorFaturamentoDiario.Format(2));
        this.txtMetaSemanal.SetText(valorFaturamentoSemanal.Format(2));
        this.GetScope().$applyAsync();
    };
    C_MetaCockpit.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.MetasDias = this.itens;
        return true;
    };
    return C_MetaCockpit;
}(MouraPageCadastroAngular));
var c_MetaCockpit = new C_MetaCockpit();
//# sourceMappingURL=C_MetaCockpit.js.map