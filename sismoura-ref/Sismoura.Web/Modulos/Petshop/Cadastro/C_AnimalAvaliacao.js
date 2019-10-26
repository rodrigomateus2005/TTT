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
var C_AnimalAvaliacao = /** @class */ (function (_super) {
    __extends(C_AnimalAvaliacao, _super);
    function C_AnimalAvaliacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_AnimalAvaliacao.prototype, "gridAlimentacao", {
        get: function () {
            return window['gridAlimentacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "gridEndogard", {
        get: function () {
            return window['gridEndogard_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "gridAvalicao", {
        get: function () {
            return window['gridAvalicao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "gridVacinas", {
        get: function () {
            return window['gridVacinas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "gridGlicopan", {
        get: function () {
            return window['gridGlicopan_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "gridOutros", {
        get: function () {
            return window['gridOutros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "gridEffipro", {
        get: function () {
            return window['gridEffipro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "btnImprimir", {
        get: function () {
            return window['btnImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "btnCancelar", {
        get: function () {
            return window['btnCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "btnOK", {
        get: function () {
            return window['btnOK_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "btnImprimirBranco", {
        get: function () {
            return window['btnImprimirBranco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "lstPeriodo", {
        get: function () {
            return window['lstPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "btnAvaliacao", {
        get: function () {
            return window['btnAvaliacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "tabAvaliacao", {
        get: function () {
            return window['tabAvaliacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "btnMarcar", {
        get: function () {
            return window['btnMarcar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "btnDesmarcar", {
        get: function () {
            return window['btnDesmarcar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "Alimentacoes", {
        get: function () {
            if (!this.GetScope()["Alimentacoes"]) {
                return [];
            }
            else {
                return this.GetScope()["Alimentacoes"];
            }
        },
        set: function (value) {
            this.GetScope()["Alimentacoes"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "Avaliacao_Periodica", {
        get: function () {
            if (!this.GetScope()["Avaliacao_Periodica"]) {
                return [];
            }
            else {
                return this.GetScope()["Avaliacao_Periodica"];
            }
        },
        set: function (value) {
            this.GetScope()["Avaliacao_Periodica"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "Lista_Effipro", {
        get: function () {
            if (!this.GetScope()["Lista_Effipro"]) {
                return [];
            }
            else {
                return this.GetScope()["Lista_Effipro"];
            }
        },
        set: function (value) {
            this.GetScope()["Lista_Effipro"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "Effipro", {
        get: function () {
            if (!this.GetScope()["Effipro"]) {
                return null;
            }
            else {
                return this.GetScope()["Effipro"];
            }
        },
        set: function (value) {
            this.GetScope()["Effipro"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "Lista_Glicopan", {
        get: function () {
            if (!this.GetScope()["Lista_Glicopan"]) {
                return [];
            }
            else {
                return this.GetScope()["Lista_Glicopan"];
            }
        },
        set: function (value) {
            this.GetScope()["Lista_Glicopan"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "Vacinas", {
        get: function () {
            if (!this.GetScope()["Vacinas"]) {
                return [];
            }
            else {
                return this.GetScope()["Vacinas"];
            }
        },
        set: function (value) {
            this.GetScope()["Vacinas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "Lista_Endogard", {
        get: function () {
            if (!this.GetScope()["Lista_Endogard"]) {
                return [];
            }
            else {
                return this.GetScope()["Lista_Endogard"];
            }
        },
        set: function (value) {
            this.GetScope()["Lista_Endogard"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "Lista_Outros", {
        get: function () {
            if (!this.GetScope()["Lista_Outros"]) {
                return [];
            }
            else {
                return this.GetScope()["Lista_Outros"];
            }
        },
        set: function (value) {
            this.GetScope()["Lista_Outros"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "Avaliacao", {
        get: function () {
            if (!this.GetScope()["Avaliacao"]) {
                return null;
            }
            else {
                return this.GetScope()["Avaliacao"];
            }
        },
        set: function (value) {
            this.GetScope()["Avaliacao"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "Alimentacao", {
        get: function () {
            if (!this.GetScope()["Alimentacao"]) {
                return null;
            }
            else {
                return this.GetScope()["Alimentacao"];
            }
        },
        set: function (value) {
            this.GetScope()["Alimentacao"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "Endogard", {
        get: function () {
            if (!this.GetScope()["Endogard"]) {
                return null;
            }
            else {
                return this.GetScope()["Endogard"];
            }
        },
        set: function (value) {
            this.GetScope()["Endogard"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "Glicopan", {
        get: function () {
            if (!this.GetScope()["Glicopan"]) {
                return null;
            }
            else {
                return this.GetScope()["Glicopan"];
            }
        },
        set: function (value) {
            this.GetScope()["Glicopan"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "txtObservacao", {
        get: function () {
            return window['txtObservacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "txtAnimal", {
        get: function () {
            return window['txtAnimal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "txtAtendenteAvaliacaoPeriodica", {
        get: function () {
            return window['txtAtendenteAvaliacaoPeriodica_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "txtAtendenteEndogard", {
        get: function () {
            return window['txtAtendenteEndogard_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "txtAtendenteDrontal", {
        get: function () {
            return window['txtAtendenteDrontal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "txtDataEndogard", {
        get: function () {
            return window['txtDataEndogard_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "txtDataGlicopan", {
        get: function () {
            return window['txtDataGlicopan_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "lstNDose", {
        get: function () {
            return window['lstNDose_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "mdAvaliacao", {
        get: function () {
            return window['mdAvaliacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "chkOlhos", {
        get: function () {
            return window['chkOlhos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "chkOrelhas", {
        get: function () {
            return window['chkOrelhas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "chkUnhas", {
        get: function () {
            return window['chkUnhas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "chkCirurgia", {
        get: function () {
            return window['chkCirurgia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "chkFocinho", {
        get: function () {
            return window['chkFocinho_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "chkMucosas", {
        get: function () {
            return window['chkMucosas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "chkHigiene", {
        get: function () {
            return window['chkHigiene_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "chkFezes", {
        get: function () {
            return window['chkFezes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "chkApatia", {
        get: function () {
            return window['chkApatia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "chkEctoparasitas", {
        get: function () {
            return window['chkEctoparasitas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "chkRef_Tosse", {
        get: function () {
            return window['chkRef_Tosse_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_AnimalAvaliacao.prototype, "lblData", {
        get: function () {
            return window['lblData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_AnimalAvaliacao.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnImprimir) {
            adicionarEventoMoura(this.btnImprimir.Click, this.OnClickImprimirAvaliacao, this);
        }
        if (this.txtAnimal) {
            adicionarEventoMoura(this.txtAnimal.Procurou, this.VerificarAvaliacaoExistente, this);
        }
        if (this.btnImprimirBranco) {
            adicionarEventoMoura(this.btnImprimirBranco.Click, this.OnClickImprimirAvaliacaoBranco, this);
        }
        if (this.cboTipo) {
            adicionarEventoMoura(this.cboTipo.SelectedItemChanged, this.OnComboBoxTipoChange, this);
        }
        if (this.gridEndogard) {
            adicionarEventoMoura(this.gridEndogard.ClicouAdicionar, this.OnClickAdicionar, this);
            adicionarEventoMoura(this.gridEndogard.Validando, this.OnValidandoEndogardGrade, this);
            adicionarEventoMoura(this.gridEndogard.LimpouItem, this.OnLimpouEndogard, this);
        }
        if (this.gridGlicopan) {
            adicionarEventoMoura(this.gridGlicopan.ClicouAdicionar, this.OnClickAdicionarGlicopan, this);
        }
        if (this.gridOutros) {
            adicionarEventoMoura(this.gridOutros.ClicouAdicionar, this.OnClickAdicionarOutros, this);
        }
        if (this.gridEffipro) {
            adicionarEventoMoura(this.gridEffipro.ClicouAdicionar, this.OnClickAdicionarEffipro, this);
        }
        if (this.gridAlimentacao) {
            adicionarEventoMoura(this.gridAlimentacao.ClicouAdicionar, this.OnClickAdicionarAlimentacao, this);
        }
        if (this.gridAvalicao) {
            adicionarEventoMoura(this.gridAvalicao.ClicouAdicionar, this.OnClickAdicionarAvaliacao, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnClickCancelar, this);
        }
        if (this.btnMarcar) {
            adicionarEventoMoura(this.btnMarcar.Click, this.OnClickMarcar, this);
        }
        if (this.btnDesmarcar) {
            adicionarEventoMoura(this.btnDesmarcar.Click, this.OnClickDesmarcar, this);
        }
    };
    C_AnimalAvaliacao.prototype.OnClickEndogardNovo = function () {
        if (this.Endogard) {
            this.Endogard.Atendente = ValoresSismoura.UsuarioLogado;
        }
        this.txtAtendenteEndogard.Procurar(ValoresSismoura.UsuarioLogado.toString());
    };
    C_AnimalAvaliacao.prototype.OnClickAdicionarAvaliacao = function (s, e) {
        this.Avaliacao.Atendente = this.txtAtendenteAvaliacaoPeriodica.GetText().CNum();
        this.Avaliacao.Nome_Atendente = this.txtAtendenteAvaliacaoPeriodica.GetResultado();
        if (this.Avaliacao_Periodica && this.Avaliacao_Periodica.length > 0) {
            for (var x = 0; x <= this.Avaliacao_Periodica.length - 1; x++) {
                if (this.Avaliacao_Periodica[x]) {
                    var parametros = {
                        DataInicial: this.Avaliacao_Periodica[x].Data,
                        DataFinal: this.Avaliacao.Data
                    };
                    var MesmaData = this.ExecutarFuncaoServerSideSynch("CompararData", parametros);
                    if (MesmaData && this.Avaliacao_Periodica[x].Periodo == this.Avaliacao.Periodo) {
                        e.cancelar = true;
                        this.Avaliacao_Periodica[x].Apatia = this.Avaliacao.Apatia;
                        this.Avaliacao_Periodica[x].Cirurgia = this.Avaliacao.Cirurgia;
                        this.Avaliacao_Periodica[x].Ectoparasitas = this.Avaliacao.Ectoparasitas;
                        this.Avaliacao_Periodica[x].Fezes = this.Avaliacao.Fezes;
                        this.Avaliacao_Periodica[x].Focinho = this.Avaliacao.Focinho;
                        this.Avaliacao_Periodica[x].Higiene = this.Avaliacao.Higiene;
                        this.Avaliacao_Periodica[x].Mucosas = this.Avaliacao.Mucosas;
                        this.Avaliacao_Periodica[x].Olhos = this.Avaliacao.Olhos;
                        this.Avaliacao_Periodica[x].Orelhas = this.Avaliacao.Orelhas;
                        this.Avaliacao_Periodica[x].Ref_Tosse = this.Avaliacao.Ref_Tosse;
                        this.Avaliacao_Periodica[x].Unhas = this.Avaliacao.Unhas;
                    }
                }
            }
            if (e.cancelar) {
                this.gridAvalicao.AtualizarGrid();
                this.Avaliacao = null;
                this.RefreshAngular();
            }
        }
    };
    C_AnimalAvaliacao.prototype.OnClickAdicionarAlimentacao = function (s, e) {
        if (this.Alimentacoes && this.Alimentacoes.length > 0) {
            for (var x = 0; x <= this.Alimentacoes.length - 1; x++) {
                if (this.Alimentacoes[x]) {
                    var parametros = {
                        DataInicial: this.Alimentacoes[x].Data,
                        DataFinal: this.Alimentacao.Data
                    };
                    var MesmaData = this.ExecutarFuncaoServerSideSynch("CompararData", parametros);
                    if (MesmaData) {
                        e.cancelar = true;
                        this.Alimentacoes[x].Tarde = this.Alimentacao.Tarde;
                        this.Alimentacoes[x].Manha = this.Alimentacao.Manha;
                        this.Alimentacoes[x].Noite = this.Alimentacao.Noite;
                    }
                }
            }
            if (e.cancelar) {
                this.gridAlimentacao.AtualizarGrid();
                this.Alimentacao = null;
                this.RefreshAngular();
            }
        }
    };
    C_AnimalAvaliacao.prototype.OnClickAdicionarOutros = function (s, e) {
        if (!this.lstPeriodo.GetValue() || this.lstPeriodo.GetValue() == "") {
            MostrarAlerta("Informe o período!");
            e.cancelar = true;
            return;
        }
    };
    C_AnimalAvaliacao.prototype.OnClickAdicionarGlicopan = function (s, e) {
        if (this.Lista_Glicopan && this.Lista_Glicopan.length > 0) {
            if (this.Lista_Glicopan.length > 10) {
                MostrarAlerta("Não é possível adicionar mais doses!");
                e.cancelar = true;
                return;
            }
            for (var x = 0; x <= this.Lista_Glicopan.length - 1; x++) {
                if (this.Lista_Glicopan[x]) {
                    var parametros = {
                        DataInicial: this.Lista_Glicopan[x].Data,
                        DataFinal: this.Glicopan.Data
                    };
                    var MesmaData = this.ExecutarFuncaoServerSideSynch("CompararData", parametros);
                    if (MesmaData) {
                        e.cancelar = true;
                        this.Lista_Glicopan[x].Tarde = this.Glicopan.Tarde;
                        this.Lista_Glicopan[x].Manha = this.Glicopan.Manha;
                    }
                }
            }
            if (e.cancelar) {
                this.gridGlicopan.AtualizarGrid();
                this.Glicopan = null;
                this.RefreshAngular();
            }
        }
    };
    C_AnimalAvaliacao.prototype.OnClickAdicionarEffipro = function (s, e) {
        if (this.Lista_Effipro && this.Lista_Effipro.length > 0) {
            if (this.Lista_Effipro.length == 5) {
                MostrarAlerta("Não é possível adicionar mais doses!");
                e.cancelar = true;
                return;
            }
            for (var x = 0; x <= this.Lista_Effipro.length - 1; x++) {
                if (this.Lista_Effipro[x]) {
                    var parametros = {
                        DataInicial: this.Lista_Effipro[x].Data,
                        DataFinal: this.Effipro.Data
                    };
                    var MesmaData = this.ExecutarFuncaoServerSideSynch("CompararMes", parametros);
                    if (MesmaData) {
                        MostrarAlerta("Já foi adicionado uma dose para este mês!");
                        e.cancelar = true;
                        return;
                    }
                }
            }
        }
    };
    C_AnimalAvaliacao.prototype.OnClickAdicionar = function (s, e) {
        if (!this.lstNDose.GetValue()) {
            MostrarAlerta("Informe o Nº da dose");
            e.cancelar = true;
            return;
        }
        var prod = this.gridEndogard.Grid.DataSource.FirstOrDefault("N_Dose", this.lstNDose.GetValue().CNum());
        this.Endogard.Nome_Atendente = this.txtAtendenteEndogard.GetResultado();
        this.Endogard.Atendente = this.txtAtendenteEndogard.GetText().CNum();
        this.Endogard.N_Dose = this.lstNDose.GetValue().CNum();
        if (prod) {
            e.cancelar = true;
            var lista = this.gridEndogard.Grid.DataSource;
            lista.FirstOrDefault("N_Dose", this.lstNDose.GetValue().CNum()).Data = this.Endogard.Data;
            lista.FirstOrDefault("N_Dose", this.lstNDose.GetValue().CNum()).Atendente = this.txtAtendenteEndogard.GetText().CNum();
            lista.FirstOrDefault("N_Dose", this.lstNDose.GetValue().CNum()).Nome_Atendente = this.txtAtendenteEndogard.GetResultado();
            this.Endogard = {};
            this.Endogard.Data = this.DataServidor();
            this.RefreshAngular();
            this.gridEndogard.Grid.PreencherGrid(lista);
        }
    };
    C_AnimalAvaliacao.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (this.ParametrosURL.Cod_Animal) {
            this.GetScope().Entity.Cod_Animal = this.ParametrosURL.Cod_Animal;
            this.GetScope().$applyAsync();
        }
        this.preencherDataAtual(this.EntityTela);
    };
    C_AnimalAvaliacao.prototype.OnClickMarcar = function (s, e) {
        e.processOnServer = false;
        this.MarcarDesmarcar(true);
    };
    C_AnimalAvaliacao.prototype.OnClickDesmarcar = function (s, e) {
        e.processOnServer = false;
        this.MarcarDesmarcar(false);
    };
    C_AnimalAvaliacao.prototype.MarcarDesmarcar = function (checked) {
        this.Avaliacao.Apatia = checked;
        this.Avaliacao.Cirurgia = checked;
        this.Avaliacao.Ectoparasitas = checked;
        this.Avaliacao.Fezes = checked;
        this.Avaliacao.Focinho = checked;
        this.Avaliacao.Higiene = checked;
        this.Avaliacao.Mucosas = checked;
        this.Avaliacao.Olhos = checked;
        this.Avaliacao.Orelhas = checked;
        this.Avaliacao.Ref_Tosse = checked;
        this.Avaliacao.Unhas = checked;
        this.RefreshAngular();
    };
    C_AnimalAvaliacao.prototype.OnClickCancelar = function (s, e) {
        try {
            e.processOnServer = false;
            this._Contador = 0;
            this.mdAvaliacao.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AnimalAvaliacao.prototype.OnLimpouEndogard = function (s, e) {
        this.Endogard = {};
        this.Endogard.Data = this.DataServidor();
    };
    C_AnimalAvaliacao.prototype.OnValidandoEndogardGrade = function (s, e) {
        try {
            var Dose = this.gridEndogard.Grid.DataSource.FirstOrDefault("N_Dose", this.lstNDose.GetValue().CNum());
            this.Endogard.Nome_Atendente = this.txtAtendenteEndogard.GetResultado();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AnimalAvaliacao.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_AnimalAvaliacao.prototype.OnComboBoxTipoChange = function () {
        this.AlterarAbas(this.cboTipo.GetValue());
    };
    C_AnimalAvaliacao.prototype.AlterarAbas = function (Tipo) {
        if (Tipo === "C") {
            this.tabAvaliacao.AlterarVisibleAba("AbaGlicopan", true);
            this.tabAvaliacao.AlterarVisibleAba("AbaEndogard", true);
            this.tabAvaliacao.AlterarVisibleAba("AbaDrontalGatos", false);
            this.tabAvaliacao.AlterarVisibleAba("abaGlicopan", true);
        }
        else if (Tipo === "G") {
            this.tabAvaliacao.AlterarVisibleAba("AbaGlicopan", false);
            this.tabAvaliacao.AlterarVisibleAba("AbaEndogard", false);
            this.tabAvaliacao.AlterarVisibleAba("AbaDrontalGatos", true);
            this.tabAvaliacao.AlterarVisibleAba("abaGlicopan", false);
        }
        else {
            this.tabAvaliacao.AlterarVisibleAba("AbaGlicopan", true);
            this.tabAvaliacao.AlterarVisibleAba("AbaEndogard", true);
            this.tabAvaliacao.AlterarVisibleAba("AbaDrontalGatos", true);
            this.tabAvaliacao.AlterarVisibleAba("abaGlicopan", true);
        }
        this.RefreshAngular();
    };
    C_AnimalAvaliacao.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.AlterarAbas(Entity.Tipo);
        this.Alimentacoes = [];
        this.gridVacinas.PreencherGrid(null);
        if (ValoresSismoura.UsuarioLogado > 0) {
            if (this.Endogard) {
                this.Endogard.Atendente = ValoresSismoura.UsuarioLogado;
            }
            if (this.Avaliacao) {
                this.Avaliacao.Atendente = ValoresSismoura.UsuarioLogado;
            }
            if (this.EntityTela) {
                this.EntityTela.Drontal_CodAtendente = ValoresSismoura.UsuarioLogado;
            }
            this.txtAtendenteAvaliacaoPeriodica.Procurar(ValoresSismoura.UsuarioLogado.toString());
            this.txtAtendenteEndogard.Procurar(ValoresSismoura.UsuarioLogado.toString());
            this.txtAtendenteDrontal.Procurar(ValoresSismoura.UsuarioLogado.toString());
        }
        this.preencherDataAtual(Entity);
    };
    C_AnimalAvaliacao.prototype.preencherDataAtual = function (Entity) {
        Entity.Drontal_Data = this.DataServidor();
        this.Endogard = {};
        this.Endogard.Data = this.DataServidor();
    };
    C_AnimalAvaliacao.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        return true;
    };
    C_AnimalAvaliacao.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        try {
            this.PreencherAvaliacao(Entidade.Cod_Animal);
            this.AlterarAbas(Entidade.Tipo);
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AnimalAvaliacao.prototype.PreencherVacinas = function () {
        var parametros = {
            codAnimal: this.txtAnimal.GetText().CNum()
        };
        var vacinas = this.ExecutarFuncaoServerSideSynch("GetVacinas", parametros);
        if (vacinas) {
            this.gridVacinas.PreencherGrid(vacinas);
        }
    };
    C_AnimalAvaliacao.prototype.VerificarAvaliacaoExistente = function () {
        var parametros = {
            codAnimal: this.txtAnimal.GetText().CNum()
        };
        var Avaliacao = this.ExecutarFuncaoServerSideSynch("GetAvaliacao", parametros);
        if (Avaliacao > 0) {
            this.PreencherEntidade(Avaliacao);
        }
        else {
            var parametros = {
                codAnimal: this.txtAnimal.GetText().CNum()
            };
            var CodEntrada = this.ExecutarFuncaoServerSideSynch("GetCodigoEntradaAnimal", parametros);
            if (CodEntrada == 0 && this.txtAnimal.GetText().CNum() > 0) {
                MostrarAlerta("Este animal não possui entrada!");
                this.EntityTela.Cod_Animal = 0;
                this.txtAnimal.Focus();
                this.gridVacinas.PreencherGrid(null);
                return;
            }
            else {
                this.gridVacinas.PreencherGrid(null);
                this.gridAlimentacao.Grid.PreencherGrid(null);
                this.gridEndogard.Grid.PreencherGrid(null);
                this.gridGlicopan.Grid.PreencherGrid(null);
                this.gridOutros.Grid.PreencherGrid(null);
                this.PreencherAvaliacao(this.txtAnimal.GetText().CNum());
                if (ValoresSismoura.UsuarioLogado > 0) {
                    if (this.Endogard) {
                        this.Endogard.Atendente = ValoresSismoura.UsuarioLogado;
                    }
                    if (this.Avaliacao) {
                        this.Avaliacao.Atendente = ValoresSismoura.UsuarioLogado;
                    }
                    if (this.EntityTela) {
                        this.EntityTela.Drontal_CodAtendente = ValoresSismoura.UsuarioLogado;
                    }
                    this.txtAtendenteAvaliacaoPeriodica.Procurar(ValoresSismoura.UsuarioLogado.toString());
                    this.txtAtendenteEndogard.Procurar(ValoresSismoura.UsuarioLogado.toString());
                    this.txtAtendenteDrontal.Procurar(ValoresSismoura.UsuarioLogado.toString());
                }
            }
        }
        this.RefreshAngular();
    };
    C_AnimalAvaliacao.prototype.PreencherAvaliacao = function (Animal) {
        var _this = this;
        try {
            var parametros = {
                codAnimal: Animal
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherAvaliacao", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.Alimentacoes = retorno.Alimentacoes;
                    _this.Lista_Glicopan = retorno.Lista_Glicopan;
                    _this.Avaliacao_Periodica = retorno.Lista_Avaliacao_Periodica;
                    _this.Lista_Endogard = retorno.Lista_Endogard;
                    _this.Lista_Outros = retorno.Lista_Outros;
                    _this.Lista_Effipro = retorno.Lista_Effipro;
                    _this.gridGlicopan.AtualizarGrid();
                    _this.gridAlimentacao.AtualizarGrid();
                    _this.gridAvalicao.AtualizarGrid();
                    _this.gridEndogard.AtualizarGrid();
                    _this.gridOutros.AtualizarGrid();
                    _this.gridEffipro.AtualizarGrid();
                    if (!_this.EntityTela.Effipro_Data) {
                        _this.EntityTela.Drontal_Data = _this.DataServidor();
                    }
                    _this.Endogard = {};
                    _this.Endogard.Data = _this.DataServidor();
                    _this.PreencherVacinas();
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AnimalAvaliacao.prototype.OnClickImprimirAvaliacao = function (s, e) {
        e.processOnServer = false;
        this.Imprimir(false);
    };
    C_AnimalAvaliacao.prototype.OnClickImprimirAvaliacaoBranco = function (s, e) {
        e.processOnServer = false;
        this.Imprimir(true);
    };
    C_AnimalAvaliacao.prototype.Imprimir = function (emBranco) {
        try {
            var parametros = [];
            if (this.EntityTela.Cod_Animal <= 0) {
                MostrarAlerta("Informe o animal!");
                return;
            }
            if (this.EntityTela.Id <= 0 && emBranco == false) {
                MostrarAlerta("É necessário gravar a avaliação primeiro!");
                return;
            }
            if (ValoresSismoura.ConfiguracoesPetshop.Documento_Padrao_Avaliacao_Filhote <= 0) {
                MostrarAlerta("Documento padrão de Avaliação não foi configurado. Configurar na Tela: Configurações do PET");
                return;
            }
            var paramDocumento = {
                codAnimal: this.GetScope().Entity.Cod_Animal
            };
            var docPadraoEspecie = this.ExecutarFuncaoServerSideSynch("GetDocumentoEspecieAnimal", paramDocumento);
            if (docPadraoEspecie == 0) {
                MostrarAlerta("Documento padrão de Avaliação não foi configurado para a espécie do animal. Configurar na Tela: Cadastro de Espécie");
                return;
            }
            var paramEspelho = {};
            var docPadraoEspelho = this.ExecutarFuncaoServerSideSynch("GetDocumentoEspelho", paramEspelho);
            if (docPadraoEspelho == 0) {
                MostrarAlerta("Documento padrão de Avaliação Espelho não foi configurado. Configurar na Tela: Configurações do PET");
                return;
            }
            var paramAvaliacao = {
                codAnimal: this.GetScope().Entity.Cod_Animal,
                docPadrao: ValoresSismoura.ConfiguracoesPetshop.Documento_Padrao_Avaliacao_Filhote,
                emBranco: emBranco
            };
            var Avaliacao = this.ExecutarFuncaoServerSideSynch("GetImpressaoAvaliacao", paramAvaliacao);
            var param = {
                codAnimal: this.GetScope().Entity.Cod_Animal,
                docPadrao: docPadraoEspecie,
                emBranco: emBranco,
                Tipo: this.cboTipo.GetValue()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetImpressaoAvaliacaoFilhote", param);
            var paramEspelhoDocumento = {
                codAnimal: this.GetScope().Entity.Cod_Animal,
                docPadrao: docPadraoEspelho,
                emBranco: emBranco
            };
            var espelho = this.ExecutarFuncaoServerSideSynch("GetImpressaoEspelho", paramEspelhoDocumento);
            this.ImprimirDocumentoWordAnimal(espelho.Itens, espelho.Documento, "N", "Espelho");
            this.ImprimirDocumentoWordAnimal(retorno.Itens, retorno.Documento, "N", "Avaliacao_Filhote");
            this.ImprimirDocumentoWordAnimal(Avaliacao.Itens, Avaliacao.Documento, "N", "Avaliacao_Periodica");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_AnimalAvaliacao.prototype.OnAntesGravar = function () {
        try {
            _super.prototype.OnAntesGravar.call(this);
            this.EntityTela.Lista_Avaliacao_Periodica = this.Avaliacao_Periodica;
            this.EntityTela.Lista_Endogard = this.Lista_Endogard;
            this.EntityTela.Lista_Glicopan = this.Lista_Glicopan;
            this.EntityTela.Lista_Outros = this.Lista_Outros;
            this.EntityTela.Alimentacoes = this.Alimentacoes;
            this.EntityTela.Lista_Effipro = this.Lista_Effipro;
            return true;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_AnimalAvaliacao;
}(MouraPageCadastroAngular));
var c_AnimalAvaliacao = new C_AnimalAvaliacao();
//# sourceMappingURL=C_AnimalAvaliacao.js.map