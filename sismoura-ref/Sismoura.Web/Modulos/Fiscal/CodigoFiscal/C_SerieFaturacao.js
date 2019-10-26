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
var C_SerieFaturacao = /** @class */ (function (_super) {
    __extends(C_SerieFaturacao, _super);
    function C_SerieFaturacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_SerieFaturacao.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SerieFaturacao.prototype, "cboDocumento", {
        get: function () {
            return window['cboDocumento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SerieFaturacao.prototype, "txtSerie", {
        get: function () {
            return window['txtSerie_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SerieFaturacao.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_SerieFaturacao.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboDocumento) {
            adicionarEventoMoura(this.cboDocumento.SelectedItemChanged, this.OnComboBoxDocumentoChange, this);
        }
    };
    C_SerieFaturacao.prototype.OnComboBoxDocumentoChange = function () {
        var parametros = {
            Documento: this.cboDocumento.GetValue()
        };
        var codigo = this.ExecutarFuncaoServerSideSynch("GetCodigoDocumento", parametros);
        if (codigo > 0) {
            this.PreencherEntidade(codigo);
        }
        this.RefreshAngular();
    };
    C_SerieFaturacao.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var Entidade = this.GetScope().Entity;
        if (this.lstEmpresa) {
            if (!Entidade.Fatura_Empresas) {
                Entidade.Fatura_Empresas = [];
            }
            var valores = this.lstEmpresa.GetValues();
            //Verifica as empresas que não estão na lista a ser salva
            for (var x = 0; x <= valores.length - 1; x++) {
                var serie = null;
                serie = {};
                serie.Codigo = 0;
                serie.Empresa = valores[x].CNum();
                Entidade.Fatura_Empresas.push(serie);
            }
            //Remove da lista as empresas que foram desmarcadas
            var count = 0;
            while (count <= Entidade.Fatura_Empresas.length - 1) {
                var temp = Entidade.Fatura_Empresas[count];
                var index = valores.indexOf("" + temp.Empresa);
                //Caso a empresa não esteja selecionada na lista, deve removê-la 
                if (index < 0) {
                    Entidade.Fatura_Empresas.splice(count, 1);
                    count -= 1;
                }
                count += 1;
            }
        }
        return true;
    };
    C_SerieFaturacao.prototype.OnDepoisBuscarExistente = function (Entidade) {
        try {
            _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
            var lista = [];
            for (var x = 0; x <= Entidade.Fatura_Empresas.length - 1; x++) {
                var empresa;
                empresa = Entidade.Fatura_Empresas[x];
                if (empresa) {
                    lista.push(empresa.Empresa.toString());
                }
            }
            this.lstEmpresa.SetValues(lista);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SerieFaturacao.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.lstEmpresa.LimparSelecao();
        this.RefreshAngular();
    };
    return C_SerieFaturacao;
}(MouraPageCadastroAngular));
var c_SerieFaturacao = new C_SerieFaturacao();
//# sourceMappingURL=C_SerieFaturacao.js.map