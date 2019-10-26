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
var MouraPageRelacaoAngular = /** @class */ (function (_super) {
    __extends(MouraPageRelacaoAngular, _super);
    function MouraPageRelacaoAngular() {
        return _super.call(this) || this;
    }
    Object.defineProperty(MouraPageRelacaoAngular.prototype, "Filtro", {
        get: function () {
            if (this.GetScope()) {
                return this.GetScope().Filtro;
            }
            else {
                return null;
            }
        },
        set: function (value) {
            if (this.GetScope()) {
                this.GetScope()['Filtro'] = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPageRelacaoAngular.prototype, "BotaoRelacao_BotaoGerar", {
        get: function () {
            return window["BotaoRelacao_BotaoGerar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPageRelacaoAngular.prototype, "BotaoRelacao_BotaoLimpar", {
        get: function () {
            return window["BotaoRelacao_BotaoLimpar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPageRelacaoAngular.prototype, "BotaoSalvarFiltros", {
        get: function () {
            return window["BotaoSalvarFiltros"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraPageRelacaoAngular.prototype, "selFiltro", {
        get: function () {
            return window["selFiltro_Object"];
        },
        enumerable: true,
        configurable: true
    });
    MouraPageRelacaoAngular.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.BotaoRelacao_BotaoLimpar) {
            adicionarEventoMoura(this.BotaoRelacao_BotaoLimpar.Click, this.BotaoRelacao_BotaoLimparClick, this);
        }
        if (this.BotaoRelacao_BotaoGerar) {
            adicionarEventoMoura(this.BotaoRelacao_BotaoGerar.Click, this.BotaoRelacao_BotaoGerarClick, this);
        }
        if (this.BotaoSalvarFiltros) {
            this.BotaoSalvarFiltros.onclick = null;
            adicionarEventoJQuery(this.BotaoSalvarFiltros, "click", this.BotaoSalvarFiltros_Click, this);
        }
    };
    MouraPageRelacaoAngular.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        setTimeout(function () {
            _this.LimparCampos();
            _this.PreencherFiltrosSalvos();
        }, 500);
    };
    MouraPageRelacaoAngular.prototype.BotaoRelacao_BotaoGerarClick = function (s, e) {
        e.processOnServer = false;
        if (this.ValidarCamposObrigatorios()) {
            this.PreencherGrade();
        }
    };
    MouraPageRelacaoAngular.prototype.BotaoRelacao_BotaoLimparClick = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
    };
    MouraPageRelacaoAngular.prototype.PreencherGrade = function () {
    };
    MouraPageRelacaoAngular.prototype.LimparCampos = function () {
        this.Filtro = {};
    };
    MouraPageRelacaoAngular.prototype.BotaoSalvarFiltros_Click = function (e) {
        this.selFiltro.Abrir(this.AccordionFiltros);
    };
    MouraPageRelacaoAngular.prototype.PreencherFiltrosSalvos = function () {
        var filtro;
        var exibirMensagem = false;
        var parametros = {
            nomeTela: ValoresSismoura.NomeTela
        };
        filtro = this.ExecutarFuncaoServerSideSynch("RetornarFiltrosSalvos", parametros);
        if (!filtro || !filtro.Campos || filtro.Campos.length <= 0) {
            return;
        }
        var campo;
        for (var i = 0; i < filtro.Campos.length; i++) {
            var item = filtro.Campos[i];
            campo = window[item.Campo + "_Object"];
            if (campo) {
                exibirMensagem = true;
                if (campo instanceof MouraTextBoxProcura) {
                    try {
                        if (item.Valor.CNum() > 0) {
                            if (String.IsNullOrWhiteSpace(campo.NgModel)) {
                                campo.Procurar(item.Valor);
                            }
                            else {
                                this.setNgModelValue(campo.NgModel, item.Valor);
                            }
                        }
                    }
                    catch (e) {
                    }
                }
                else if (campo instanceof MouraRadioButtonList) {
                    try {
                        if (String.IsNullOrWhiteSpace(campo.NgModel)) {
                            campo.SetValue(item.Valor);
                        }
                        else {
                            this.setNgModelValue(campo.NgModel, item.Valor);
                        }
                    }
                    catch (e) {
                    }
                }
                else if (campo instanceof MouraComboBoxEmpresa) {
                    try {
                        if (String.IsNullOrWhiteSpace(campo.NgModel)) {
                            campo.SetValue(item.Valor.CNum());
                        }
                        else {
                            this.setNgModelValue(campo.NgModel, item.Valor.CNum());
                        }
                    }
                    catch (e) {
                    }
                }
                else if (campo instanceof MouraContaCorrenteLista) {
                    campo.Lista.LimparSelecao();
                    if (!String.IsNullOrWhiteSpace(item.Valor)) {
                        campo.Lista.SetValues(item.Valor.split(";"));
                    }
                }
                else if (campo instanceof MouraListBoxEmpresa) {
                    campo.LimparSelecao();
                    if (!String.IsNullOrWhiteSpace(item.Valor)) {
                        campo.SetValues(item.Valor.split(";"));
                    }
                }
                else if (campo instanceof MouraCheckBoxList) {
                    try {
                        campo.LimparSelecao();
                        if (!String.IsNullOrWhiteSpace(item.Valor)) {
                            campo.SetValues(item.Valor.split(";"));
                        }
                    }
                    catch (e) {
                    }
                }
                else if (campo instanceof MouraListBox) {
                    try {
                        campo.Lista.selectedIndex = -1;
                        if (!String.IsNullOrWhiteSpace(item.Valor)) {
                            campo.SelectedValue(item.Valor);
                        }
                    }
                    catch (e) {
                    }
                }
                else if (campo instanceof MouraTextBoxPeriodo) {
                    if (!String.IsNullOrWhiteSpace(item.Valor)) {
                        try {
                            var aux = item.Valor.split("|");
                            if (aux) {
                                var dataInicial;
                                var dataFinal;
                                if (aux.length > 0 && !String.IsNullOrWhiteSpace(aux[0])) {
                                    dataInicial = ConvertToDate(aux[0]);
                                }
                                if (aux.length > 1 && !String.IsNullOrWhiteSpace(aux[1])) {
                                    dataFinal = ConvertToDate(aux[1]);
                                }
                                if (dataInicial) {
                                    if (String.IsNullOrWhiteSpace(campo.NgModelInicial)) {
                                        campo.textBoxCalendarioInicio.SetDate(dataInicial);
                                    }
                                    else {
                                        this.setNgModelValue(campo.NgModelInicial, dataInicial);
                                    }
                                }
                                if (dataFinal) {
                                    if (String.IsNullOrWhiteSpace(campo.NgModelFinal)) {
                                        campo.textBoxCalendarioFim.SetDate(dataFinal);
                                    }
                                    else {
                                        this.setNgModelValue(campo.NgModelFinal, dataFinal);
                                    }
                                }
                            }
                        }
                        catch (e) {
                        }
                    }
                }
                else if (campo instanceof MouraTextBoxData) {
                    if (!String.IsNullOrWhiteSpace(item.Valor)) {
                        try {
                            var data = ConvertToDate(item.Valor);
                            if (data) {
                                if (String.IsNullOrWhiteSpace(campo.NgModel)) {
                                    campo.Date = data;
                                }
                                else {
                                    this.setNgModelValue(campo.NgModel, data);
                                }
                            }
                        }
                        catch (e) {
                        }
                    }
                }
                else if (campo instanceof MouraCheckBox) {
                    try {
                        var auxCheck;
                        if (item.Valor && item.Valor.trim().toLowerCase() == "marcado") {
                            auxCheck = true;
                        }
                        else {
                            auxCheck = false;
                        }
                        if (String.IsNullOrWhiteSpace(campo.NgModel)) {
                            campo.Checked = auxCheck;
                        }
                        else {
                            this.setNgModelValue(campo.NgModel, auxCheck);
                        }
                    }
                    catch (e) {
                    }
                }
                else if (campo instanceof MouraContaCorrenteCombo) {
                    try {
                        if (!String.IsNullOrWhiteSpace(item.Valor)) {
                            if (String.IsNullOrWhiteSpace(campo.NgModel)) {
                                campo.SetContaCorrente(item.Valor);
                            }
                            else {
                                this.setNgModelValue(campo.NgModel, item.Valor);
                            }
                        }
                    }
                    catch (e) {
                    }
                }
                else if (campo instanceof MouraComboBox) {
                    try {
                        if (!String.IsNullOrWhiteSpace(item.Valor)) {
                            if (String.IsNullOrWhiteSpace(campo.NgModel)) {
                                campo.SetValue(item.Valor);
                            }
                            else {
                                this.setNgModelValue(campo.NgModel, item.Valor);
                            }
                        }
                    }
                    catch (e) {
                    }
                }
                else if (campo instanceof MouraTextBox) {
                    try {
                        if (String.IsNullOrWhiteSpace(campo.NgModel)) {
                            campo.SetText(item.Valor);
                        }
                        else {
                            this.setNgModelValue(campo.NgModel, item.Valor);
                        }
                    }
                    catch (e) {
                    }
                }
            }
        }
        if (exibirMensagem) {
            this.GetScope().$applyAsync();
            MostrarMensagem("Filtros personalizados foram aplicados na tela");
        }
    };
    MouraPageRelacaoAngular.prototype.setNgModelValue = function (ngModel, value) {
        if (ngModel) {
            var arrNgModel = ngModel.split(".");
            var obj;
            if (arrNgModel.length > 0) {
                for (var i = 0; i < arrNgModel.length; i++) {
                    if (i == arrNgModel.length - 1) {
                        obj[arrNgModel[i]] = value;
                    }
                    else {
                        if (!obj) {
                            obj = this.GetScope()[arrNgModel[i]];
                        }
                        else {
                            obj = obj[arrNgModel[i]];
                        }
                    }
                }
            }
            else {
                this.GetScope()[ngModel] = value;
            }
        }
    };
    return MouraPageRelacaoAngular;
}(MouraPageAngular));
//# sourceMappingURL=MouraPageRelacaoAngular.js.map