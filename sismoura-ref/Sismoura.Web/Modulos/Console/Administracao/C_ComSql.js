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
var C_ComSql = /** @class */ (function (_super) {
    __extends(C_ComSql, _super);
    function C_ComSql() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ComSql.prototype, "Comandos", {
        get: function () {
            if (!this.GetScope()["Comandos"]) {
                this.GetScope()["Comandos"] = [];
            }
            return this.GetScope()["Comandos"];
        },
        set: function (value) {
            this.GetScope()["Comandos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComSql.prototype, "Pdvs", {
        get: function () {
            if (!this.GetScope()["Pdvs"]) {
                this.GetScope()["Pdvs"] = [];
            }
            return this.GetScope()["Pdvs"];
        },
        set: function (value) {
            this.GetScope()["Pdvs"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComSql.prototype, "Item", {
        get: function () {
            if (!this.GetScope()["Item"]) {
                this.GetScope()["Item"] = [];
            }
            return this.GetScope()["Item"];
        },
        set: function (value) {
            this.GetScope()["Item"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComSql.prototype, "Comando", {
        get: function () {
            if (!this.GetScope()["Comando"]) {
                this.GetScope()["Comando"] = [];
            }
            return this.GetScope()["Comando"];
        },
        set: function (value) {
            this.GetScope()["Comando"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComSql.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComSql.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComSql.prototype, "chkInativo", {
        get: function () {
            return window['chkInativo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComSql.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComSql.prototype, "txtComando", {
        get: function () {
            return window['txtComando_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComSql.prototype, "lstPdv", {
        get: function () {
            return window['lstPdv_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComSql.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ComSql.prototype, "btnAdicionar", {
        get: function () {
            return window['btnAdicionar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ComSql.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.lstEmpresa) {
            adicionarEventoMoura(this.lstEmpresa.SelectionChanged, this.OnAlterouEmpresa, this);
        }
        if (this.btnAdicionar) {
            adicionarEventoMoura(this.btnAdicionar.Click, this.OnAdicionandoComando, this);
        }
        if (this.grd) {
            adicionarEventoMoura(this.grd.CellPrepared, this.OnGerouLinhaExecutado, this);
            adicionarEventoMoura(this.grd.SelecionouLinha, this.onGridSelecionouLinha, this);
        }
    };
    C_ComSql.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.carregarPdvs();
        this.preencherGrade();
    };
    C_ComSql.prototype.OnAlterouEmpresa = function () {
        var pdvsSelecionados = this.lstPdv.GetValues();
        this.carregarPdvs();
        this.lstPdv.SetValues(pdvsSelecionados);
    };
    C_ComSql.prototype.preencherGrade = function () {
        var params = {};
        var retorno = this.ExecutarFuncaoServerSideSynch("getComandosCadastrados", params);
        this.Comandos = retorno;
        if (retorno.length > 0) {
            this.grd.PreencherGrid(this.Comandos);
            this.grd.GroupBy("Pdv_Exibicao");
            this.grd.GroupBy("Empresa_Exibicao");
        }
        else {
            this.grd.PreencherGrid([]);
        }
    };
    C_ComSql.prototype.OnGerouLinhaExecutado = function (s, e) {
        if (e.rowType == "data") {
            e.cellElement.css("font-weight", "bold");
            if (ConvertToDate(e.row.data['Data_executado']) != null) {
                e.cellElement.css("color", "#009933");
            }
            else if (ConvertToDate(e.row.data['Data_executado']) == null) {
                e.cellElement.css("color", "#ff0000");
            }
        }
    };
    C_ComSql.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.preencherGrade();
        this.respondeuMsgbox = false;
        return true;
    };
    C_ComSql.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.preencherGrade();
        return true;
    };
    C_ComSql.prototype.OnAntesDeletar = function () {
        var _this = this;
        _super.prototype.OnAntesDeletar.call(this);
        if (this.respondeuMsgbox) {
            return true;
        }
        else {
            MsgBoxJS("Ao excluir um comando, o mesmo será deletado para todos os PDV's a ele relacionados.", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.Yes) {
                    _this.respondeuMsgbox = true;
                    _this.ClicarExcluir();
                }
            });
        }
        return false;
    };
    C_ComSql.prototype.OnAntesGravar = function () {
        var _this = this;
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.ComandoItem = [];
        this.EntityTela.Data_Inserido = ConvertToDate(new Date());
        var comando = {};
        if (this.Comandos.length <= 0) {
            MostrarAlerta("Para gravar um registro, será necessário adicioná-lo a grade primeramente!");
            return false;
        }
        for (var i = 0; i < this.Comandos.length; i++) {
            if (this.Comandos[i].Codigo == null || this.Comandos[i].Codigo == undefined) {
                var item = {};
                item.Empresa = this.Comandos[i].Empresa;
                item.Pdv = this.Comandos[i].PDV;
                item.Comando = this.Comandos[i].Codigo;
                this.EntityTela.ComandoItem.push(item);
            }
            else if (this.EntityTela.Codigo == this.Comandos[i].Codigo) {
                var item = {};
                item.Id = this.Comandos[i].Id;
                item.Empresa = this.Comandos[i].Empresa;
                item.Pdv = this.Comandos[i].PDV;
                item.Comando = this.Comandos[i].Codigo;
                this.EntityTela.ComandoItem.push(item);
            }
        }
        if (this.respondeuMsgbox) {
            return true;
        }
        else if (this.txtCodigo.GetText().CNum() > 0 || this.EntityTela.Codigo > 0) {
            //ALTERAR
            MsgBoxJS("Ao alterar os dados de um comando, o mesmo será alterado para todos os PDV's relacionados.", MsgBoxOptions.YesNo, MsgBoxIcon.Info, function (result) {
                if (result.Resultado == MsgBoxResult.Yes) {
                    _this.respondeuMsgbox = true;
                    _this.ClicarGravar();
                }
            });
            return false;
        }
        else {
            return true;
        }
    };
    C_ComSql.prototype.onGridSelecionouLinha = function (s, e) {
        var selecionou = e.data;
        if (e.data.Codigo > 0) {
            this.PreencherEntidade(e.data.Codigo);
            this.GetScope().$applyAsync();
        }
        else {
            return;
        }
    };
    C_ComSql.prototype.OnAdicionandoComando = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        if (this.txtDescricao.GetText() == "") {
            MostrarAlerta("Informe uma descrição para o comando!");
            this.txtDescricao.Limpar();
            this.txtDescricao.Focus();
            return;
        }
        if (this.txtComando.GetText() == "") {
            MostrarAlerta("Informe uma descrição para o comando!");
            this.txtComando.Limpar();
            this.txtComando.Focus();
            return;
        }
        if (this.lstEmpresa.GetValuesNumber() == null) {
            MostrarAlerta("Informe ao menos uma empresa!");
            return;
        }
        if (String.IsNullOrWhiteSpace(this.lstPdv.GetValues().toString())) {
            MostrarAlerta("Informe ao menos um PDV!");
            return;
        }
        var empresasSelecionadas = this.lstEmpresa.GetValues();
        var empresas = this.lstEmpresa.GetTexts();
        var pdvsSelecionados = this.lstPdv.GetValues();
        if (this.Comandos.length > 0 && this.EntityTela.Codigo > 0) {
            for (var y = 0; y < this.Comandos.length; y++) {
                if (this.EntityTela.Codigo == this.Comandos[y].Codigo) {
                    this.Comandos[y].Descricao = this.EntityTela.Descricao;
                    this.Comandos[y].Comando = this.EntityTela.Comando;
                    //this.Comandos[y].Pdv = pdvsSelecionados[y];
                }
            }
        }
        for (var i = 0; i < this.Pdvs.length; i++) {
            for (var x = 0; x < empresasSelecionadas.length; x++) {
                for (var j = 0; j < pdvsSelecionados.length; j++) {
                    this.Comando = {};
                    if (this.Pdvs[i].Empresa == empresasSelecionadas[x].CNum() && this.Pdvs[i].Codigo == pdvsSelecionados[j].CNum()) {
                        if (!this.ValidarAntesInserirGrade(empresasSelecionadas[x].CNum(), this.EntityTela.Descricao, this.Pdvs[i].Descricao, this.Pdvs[i].Codigo)) {
                            if (this.EntityTela.Codigo > 0) {
                                this.Comando.Codigo = this.EntityTela.Codigo;
                            }
                            this.Comando.Descricao = this.EntityTela.Descricao;
                            this.Comando.Comando = this.EntityTela.Comando;
                            this.Comando.Empresa = this.Pdvs[i].Empresa;
                            //this.Comando.Empresa_Exibicao = empresasSelecionadas[x];
                            this.Comando.Empresa_Exibicao = empresas[x];
                            this.Comando.PDV = this.Pdvs[i].Codigo;
                            this.Comando.Pdv_Exibicao = this.Pdvs[i].Descricao;
                            this.Comando.Data_Executado = "";
                            this.Comando.Inativo = this.EntityTela.Inativo;
                            this.Comandos.push(this.Comando);
                        }
                    }
                }
            }
        }
        if (this.EntityTela.Codigo > 0 || this.txtCodigo.GetText().CNum() > 0) {
            MsgBoxJS("Ao alterar os dados de um comando, o mesmo será alterado para todos os PDV's relacionados.", MsgBoxOptions.OkOnly, MsgBoxIcon.Info, function (result) {
                _this.grd.PreencherGrid(_this.Comandos);
            });
        }
        else {
            this.grd.PreencherGrid(this.Comandos);
        }
    };
    C_ComSql.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        try {
            var parametros = {
                codigo: Entidade.Codigo
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("getComando", parametros);
            if (retorno.length > 1) {
                var pdvs = [];
                var empresas = [];
                retorno.forEach(function (q) {
                    pdvs.push(q.Pdv.toString());
                });
                retorno.forEach(function (x) {
                    empresas.push(x.Empresa.toString());
                });
                this.lstEmpresa.LimparSelecao();
                this.lstEmpresa.SetValues(empresas);
                this.carregarPdvs();
                this.lstPdv.SetValues(pdvs);
            }
            else {
                this.lstEmpresa.SetValues([retorno[0].Empresa.toString()]);
                this.carregarPdvs();
                this.lstPdv.SetValues([retorno[0].Pdv.toString()]);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ComSql.prototype.carregarPdvs = function () {
        var listaEmpresas = this.lstEmpresa.GetValues();
        this.lstPdv.RemoverTodosItens();
        if (listaEmpresas.length > 0) {
            var empresas = this.lstEmpresa.GetValues().join(",");
            var parametros = {
                empresas: empresas
            };
            abrirEspera("Carregando registros...");
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherListaPdvs", parametros);
            fecharEspera();
            this.Pdvs = [];
            this.Pdvs = retorno;
            for (var i = 0; i < retorno.length; i++) {
                this.lstPdv.AdicionarItem(retorno[i].Descricao, retorno[i].Codigo);
            }
        }
    };
    C_ComSql.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.lstPdv.LimparSelecao();
        this.lstPdv.RemoverTodosItens();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.txtComando.Limpar();
        this.txtDescricao.Limpar();
        this.respondeuMsgbox = false;
    };
    C_ComSql.prototype.ValidarAntesInserirGrade = function (empresa, descricao, nomePdv, codigoPDV) {
        var retorno;
        retorno = this.grd.DataSource.filter(function (y) { return y.Empresa == empresa && y.Pdv_Exibicao == nomePdv; }).length > 0;
        if (retorno == true) {
            retorno = this.grd.DataSource.filter(function (z) { return z.Descricao == descricao && z.PDV == codigoPDV; }).length > 0;
        }
        return retorno;
    };
    return C_ComSql;
}(MouraPageCadastroAngular));
var c_ComSql = new C_ComSql();
//# sourceMappingURL=C_ComSql.js.map