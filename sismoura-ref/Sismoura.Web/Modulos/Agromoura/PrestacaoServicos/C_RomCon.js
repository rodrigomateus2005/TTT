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
var C_RomCon = /** @class */ (function (_super) {
    __extends(C_RomCon, _super);
    function C_RomCon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_RomCon.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RomCon.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RomCon.prototype, "txtContrato", {
        get: function () {
            return window['txtContrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RomCon.prototype, "txtFazenda", {
        get: function () {
            return window['txtFazenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RomCon.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RomCon.prototype, "txtRomaneio", {
        get: function () {
            return window['txtRomaneio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RomCon.prototype, "Dados", {
        get: function () {
            return this.GetScope()["Dados"];
        },
        set: function (value) {
            this.GetScope()["Dados"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_RomCon.prototype, "codigo", {
        set: function (value) {
            this.codigo = value;
        },
        enumerable: true,
        configurable: true
    });
    C_RomCon.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtContrato) {
            adicionarEventoMoura(this.txtContrato.TextChanged, this.BuscarGrade, this);
            adicionarEventoMoura(this.txtContrato.Procurou, this.BuscarGrade, this);
        }
        if (this.grd) {
            adicionarEventoMoura(this.grd.SetouItem, this.OnSetouItem, this);
            adicionarEventoMoura(this.grd.LimpouItem, this.OnLimpouItem, this);
            adicionarEventoMoura(this.grd.ItemAdicionado, this.OnAdiciouItem, this);
            adicionarEventoMoura(this.grd.AdicionandoItem, this.OnAdicionandoItem, this);
            adicionarEventoMoura(this.grd.Validando, this.OnValidandoItem, this);
            adicionarEventoMoura(this.grd.ExcluindoItem, this.OnExcluindoItem, this);
            adicionarEventoMoura(this.grd.ItemExcluido, this.OnExcluindoItem, this);
            //adicionarEventoMoura(this.grd.Grid.ClickBotaoLinha, this.OnGrdProdutosClickBotaoLinha, this);
            adicionarEventoMoura(this.grd.SelecionouItem, this.OnGrdSelecionouItem, this);
            this.grd.Limpar();
        }
    };
    //protected LimparCampos(): void {
    //    var entidade: SiSMoura.Core.Entity.Agromoura_Contrato_Romaneio;
    //    this.GetScope().Entity = entidade;
    //}
    C_RomCon.prototype.OnGrdSelecionouItem = function (s, e) {
        var romaneio = e.item;
        if (romaneio) {
            this.txtFazenda.Procurar(romaneio.CodFazenda);
            this.txtData.Date = romaneio.Data;
            this.txtRomaneio.SetText(romaneio.Romaneio);
        }
    };
    C_RomCon.prototype.OnAdiciouItem = function (s, e) {
        this.GetScope().$applyAsync();
    };
    C_RomCon.prototype.OnLimpouItem = function (s, e) {
        //var entidade: SiSMoura.Core.Entity.Agromoura_Contrato_RomaneioRetorno;
        //entidade = e.item;
        //entidade.Contador = 1;
    };
    C_RomCon.prototype.OnSetouItem = function (s, e) {
        //var entidade: SiSMoura.Core.Entity.Agromoura_Contrato_RomaneioRetorno;
        //entidade = e.item;
        //entidade.Contador = 1;
    };
    C_RomCon.prototype.OnValidandoItem = function (s, e) {
        if (this.txtFazenda.GetText().CNum() == 0) {
            MostrarAlerta("Preencha o campo corretamente: Fazenda");
            e.cancelar = true;
        }
        if (this.txtData.Date == null) {
            MostrarAlerta("Preencha o campo corretamente: Data");
            e.cancelar = true;
        }
        if (this.txtRomaneio.GetText().CNum() == 0) {
            MostrarAlerta("Preencha o campo corretamente: Romaneio");
            e.cancelar = true;
        }
        e.item.Fazenda = this.txtFazenda.GetResultado();
        var Itens = this.Dados;
        for (var x = 0; x < Itens.length; x++) {
            var Romaneio = {};
            if (Itens[x].Romaneio == this.txtRomaneio.GetText().CNum() && Itens[x].CodFazenda == this.txtFazenda.GetText().CNum() && Itens[x].Contador != e.item.Contador) {
                MostrarAlerta("O romaneio informado já está vinculado ao contrato e fazenda informada!");
                e.cancelar = true;
            }
            else if (Itens[x].Romaneio == this.txtRomaneio.GetText().CNum() && Itens[x].CodFazenda == this.txtFazenda.GetText().CNum()) {
                Itens[x].Data = this.txtData.Date;
            }
        }
    };
    C_RomCon.prototype.OnAdicionandoItem = function (s, e) {
        var Itens = this.Dados;
        for (var x = 0; x < Itens.length; x++) {
            var Romaneio = {};
            if (Itens[x].Romaneio == this.txtRomaneio.GetText().CNum() && Itens[x].CodFazenda == this.txtFazenda.GetText().CNum()) {
                MostrarAlerta("O romaneio informado já está vinculado ao contrato e fazenda informada!");
                e.cancelar = true;
            }
        }
        e.item.Contador = Itens.length + 1;
        this.GetScope().$applyAsync();
    };
    C_RomCon.prototype.OnExcluindoItem = function (s, e) {
        var entidade = this.GetScope().Entity;
        this.PreencherRomaneios(entidade);
        this.GetScope().$applyAsync();
    };
    C_RomCon.prototype.OnAntesExcluir = function () {
        _super.prototype.OnAntesDeletar.call(this);
        var entidade = this.GetScope().Entity;
        this.PreencherRomaneios(entidade);
        return true;
    };
    C_RomCon.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        //if (this.txtContrato.GetText().CNum() == 0) {
        //    MostrarAlerta("Preencha o campo corretamente: Contrato");
        //    return false;
        //}
        var entidade = this.GetScope().Entity;
        this.PreencherRomaneios(entidade);
        return true;
    };
    C_RomCon.prototype.PreencherRomaneios = function (entidade) {
        var parametros = {
            Contrato: this.txtContrato.GetText().CNum()
        };
        var codigo = this.ExecutarFuncaoServerSideSynch("BuscarCodigoContrato", parametros);
        entidade.Codigo = codigo;
        entidade.Romaneios = [];
        var romaneios = this.Dados;
        for (var x = 0; x < romaneios.length; x++) {
            var Romaneio = {};
            Romaneio.Codigo = romaneios[x].Codigo;
            Romaneio.Contrato = this.txtContrato.GetText().CNum();
            Romaneio.Fazenda = romaneios[x].CodFazenda;
            Romaneio.Data = romaneios[x].Data;
            Romaneio.Romaneio = romaneios[x].Romaneio;
            Romaneio.Confirmado = 0;
            Romaneio.Data_Confirmacao = null;
            entidade.Romaneios.push(Romaneio);
        }
    };
    C_RomCon.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.BuscarGrade();
        return true;
    };
    C_RomCon.prototype.BuscarGrade = function () {
        if (this.txtContrato.GetText().CNum() > 0) {
            var parametros = {
                Contrato: this.txtContrato.GetText().CNum()
            };
            var entidade = this.GetScope().Entity;
            var codigo = this.ExecutarFuncaoServerSideSynch("BuscarCodigoContrato", parametros);
            if (codigo > 0) {
                entidade.Codigo = codigo;
                this.txtCodigo.SetText(codigo);
                var Itens = this.ExecutarFuncaoServerSideSynch("CarregarItens", parametros);
                this.Dados = Itens;
                this.PreencherRomaneios(entidade);
                this.GetScope().Entity = entidade;
            }
            else {
                this.Dados = null;
                this.grd.Limpar();
                this.txtCodigo.SetText("");
            }
        }
        else {
            this.Dados = null;
            this.grd.Limpar();
        }
    };
    return C_RomCon;
}(MouraPageCadastroAngular));
var c_RomCon = new C_RomCon();
//# sourceMappingURL=C_RomCon.js.map