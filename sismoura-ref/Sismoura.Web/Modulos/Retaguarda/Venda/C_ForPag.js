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
var C_ForPag = /** @class */ (function (_super) {
    __extends(C_ForPag, _super);
    function C_ForPag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ForPag.prototype, "cboTipoVencimento", {
        get: function () {
            return window['cboTipoVencimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "cboCategoria", {
        get: function () {
            return window['cboCategoria_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "txtValor", {
        get: function () {
            return window['txtValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "txtTodosDias", {
        get: function () {
            return window['txtTodosDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "txtTodosDiasPorc", {
        get: function () {
            return window['txtTodosDiasPorc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "cboTodoDia", {
        get: function () {
            return window['cboTodoDia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "txtDias", {
        get: function () {
            return window['txtDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "txtPorc", {
        get: function () {
            return window['txtPorc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "cboDia", {
        get: function () {
            return window['cboDia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "txtDiaDe", {
        get: function () {
            return window['txtDiaDe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "txtDiaAte", {
        get: function () {
            return window['txtDiaAte_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "txtDiaFixo", {
        get: function () {
            return window['txtDiaFixo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "txtCoeficiente", {
        get: function () {
            return window['txtCoeficiente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "chkImprimir", {
        get: function () {
            return window['chkImprimir'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "chkCentavos", {
        get: function () {
            return window['chkCentavos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "chkUltimo_Dia", {
        get: function () {
            return window['chkUltimo_Dia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "chkProximoMes", {
        get: function () {
            return window['chkProximoMes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "lstDiaSemana", {
        get: function () {
            return window['lstDiaSemana_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "cboDiaSemana", {
        get: function () {
            return window['cboDiaSemana_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "grdDias", {
        get: function () {
            return window['grdDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "grdTodosDias", {
        get: function () {
            return window['grdTodosDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "grdPeriodos", {
        get: function () {
            return window['grdPeriodos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "grdDiaSemanas", {
        get: function () {
            return window['grdDiaSemanas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "FormaPagamentoDias", {
        get: function () {
            return this.GetScope()["FormaPagamentoDias"];
        },
        set: function (value) {
            this.GetScope()["FormaPagamentoDias"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "FormaPagamentoTodosDias", {
        get: function () {
            return this.GetScope()["FormaPagamentoTodosDias"];
        },
        set: function (value) {
            this.GetScope()["FormaPagamentoTodosDias"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "FormaPagamentoPeriodos", {
        get: function () {
            return this.GetScope()["FormaPagamentoPeriodos"];
        },
        set: function (value) {
            this.GetScope()["FormaPagamentoPeriodos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ForPag.prototype, "FormaPagamentoDiaSemanas", {
        get: function () {
            return this.GetScope()["FormaPagamentoDiaSemanas"];
        },
        set: function (value) {
            this.GetScope()["FormaPagamentoDiaSemanas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_ForPag.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.cboTipoVencimento) {
            adicionarEventoDevExpress(this.cboTipoVencimento.Combo.SelectedIndexChanged, this.OnSelecionouTipoVencimento, this);
        }
        if (this.cboTipo) {
            adicionarEventoDevExpress(this.cboTipo.Combo.SelectedIndexChanged, this.OnSelecionouTipo, this);
        }
        if (this.grdDias) {
            adicionarEventoMoura(this.grdDias.AdicionandoItem, this.OnClickIncluirFormaPagamentoDia, this);
        }
        if (this.grdDias) {
            adicionarEventoMoura(this.grdDias.ExcluindoItem, this.OnClickExcluirFormaPagamentoDia, this);
        }
        if (this.grdTodosDias) {
            adicionarEventoMoura(this.grdTodosDias.AdicionandoItem, this.OnClickIncluirFormaPagamentoTodoDia, this);
        }
        if (this.grdTodosDias) {
            adicionarEventoMoura(this.grdTodosDias.ExcluindoItem, this.OnClickExcluirFormaPagamentoTodoDia, this);
        }
        if (this.grdPeriodos) {
            adicionarEventoMoura(this.grdPeriodos.AdicionandoItem, this.OnClickIncluirFormaPagamentoPeriodo, this);
        }
        if (this.grdPeriodos) {
            adicionarEventoMoura(this.grdPeriodos.ExcluindoItem, this.OnClickExcluirFormaPagamentoPeriodo, this);
        }
        if (this.grdDiaSemanas) {
            adicionarEventoMoura(this.grdDiaSemanas.AdicionandoItem, this.OnClickIncluirFormaPagamentoDiaSemana, this);
        }
        if (this.grdDiaSemanas) {
            adicionarEventoMoura(this.grdDiaSemanas.ExcluindoItem, this.OnClickExcluirFormaPagamentoDiaSemana, this);
        }
    };
    C_ForPag.prototype.OnGravouSucesso = function (s, e) {
    };
    C_ForPag.prototype.OnExcluiuSucesso = function (s, e) {
    };
    C_ForPag.prototype.OnSelecionouTipoVencimento = function () {
        if (this.cboTipoVencimento.GetValue().CNum() == 0 || this.cboTipoVencimento.GetValue().CNum() == 1) {
            if (this.cboTipoVencimento.GetValue().CNum() == 1) {
                this.tab.AlterarVisibleAba("AbaDias", false);
                this.tab.AlterarVisibleAba("AbaTodosDias", true);
                this.txtTodosDias.Textbox.maxLength = 2;
                this.grdTodosDias;
            }
            else {
                this.txtDias.Textbox.maxLength = 4;
                this.tab.AlterarVisibleAba("AbaDias", true);
                this.tab.AlterarVisibleAba("AbaTodosDias", false);
            }
        }
        if (this.cboTipoVencimento.GetValue().CNum() == 2) {
            this.tab.AlterarVisibleAba("AbaPeridoDia", true);
            this.tab.AlterarVisibleAba("AbaDias", false);
            this.tab.AlterarVisibleAba("AbaTodosDias", false);
        }
        else {
            this.tab.AlterarVisibleAba("AbaPeridoDia", false);
        }
        if (this.cboTipoVencimento.GetValue().CNum() == 3) {
            this.tab.AlterarVisibleAba("AbaDias", false);
            this.tab.AlterarVisibleAba("AbaTodosDias", false);
            this.tab.AlterarVisibleAba("AbaDiaSemana", true);
            this.tab.AlterarVisibleAba("AbaPeridoDia", false);
        }
        else {
            this.tab.AlterarVisibleAba("AbaDiaSemana", false);
        }
        this.LimparCampos();
        this.FormaPagamentoDias = [];
        this.FormaPagamentoDiaSemanas = [];
        this.FormaPagamentoTodosDias = [];
        this.FormaPagamentoPeriodos = [];
    };
    C_ForPag.prototype.OnSelecionouTipo = function () {
        if (this.cboTipo.GetValue() != null && this.cboTipo.GetValue() != undefined) {
            if (this.cboTipo.GetValue().CNum() == 0) {
                this.txtValor.SetText("0,00");
                //$("#" + this.txtValor.ID).attr("disabled", "true");
                this.txtValor.ReadOnly = true;
            }
            else {
                this.txtValor.SetText("0,00");
                //$("#" + this.txtValor.ID).removeAttr("disabled");
                this.txtValor.ReadOnly = false;
            }
        }
    };
    C_ForPag.prototype.selecionarCheck = function (chk, valor) {
        if (chk && chk.Check) {
            chk.Check.checked = valor;
        }
    };
    C_ForPag.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        if (Entidade.Codigo != 0) {
            $("#tab_Painel").removeClass("invisible");
            if (Entidade.Tipo == 0) {
                this.txtValor.Textbox.textContent = "0,00";
                this.txtValor.ReadOnly = true;
                //$("#" + this.txtValor.ID).attr("disabled", "true");
            }
            else {
                this.txtValor.ReadOnly = false;
                //$("#" + this.txtValor.ID).removeAttr("disabled");
            }
            this.OnSelecionouTipo();
            if (Entidade.Tipo_Dia == 0) {
                this.tab.AlterarVisibleAba("AbaDias", true);
                this.BuscarGridDias();
            }
            else {
                this.tab.AlterarVisibleAba("AbaDias", false);
            }
            if (Entidade.Tipo_Dia == 1) {
                this.tab.AlterarVisibleAba("AbaTodosDias", true);
                this.BuscarGridTodosDias();
            }
            else {
                this.tab.AlterarVisibleAba("AbaTodosDias", false);
            }
            if (Entidade.Tipo_Dia == 2) {
                this.tab.AlterarVisibleAba("AbaPeridoDia", true);
                this.BuscarGridPeriodos();
            }
            else {
                this.tab.AlterarVisibleAba("AbaPeridoDia", false);
            }
            if (Entidade.Tipo_Dia == 3) {
                this.tab.AlterarVisibleAba("AbaDiaSemana", true);
                this.BuscarGridDiaSemanas();
            }
            else {
                this.tab.AlterarVisibleAba("AbaDiaSemana", false);
            }
        }
    };
    C_ForPag.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.LimparCampos();
        this.LimparEntidade();
        return true;
    };
    C_ForPag.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var entidade = this.GetScope().Entity;
        if (entidade.Tipo_Dia == undefined) {
            entidade.Tipo_Dia = -1;
        }
        if (entidade.Tipo == undefined) {
            entidade.Tipo = -1;
        }
        if (this.FormaPagamentoDias.length == 0 && this.FormaPagamentoTodosDias.length == 0 && this.FormaPagamentoPeriodos.length == 0 && this.FormaPagamentoDiaSemanas.length == 0) {
            entidade.Forma_Pagamento_DiasEntity = [];
        }
        else {
            if (entidade.Tipo_Dia == 0) {
                if (this.FormaPagamentoDias.length > 0) {
                    if (entidade.Tipo_Dia == 0) {
                        var porcentagem = 0;
                        for (var x = 0; x < this.FormaPagamentoDias.length; x++) {
                            porcentagem += this.FormaPagamentoDias[x].Porcentagem;
                        }
                        if (porcentagem < 100) {
                            MostrarAlerta("O Total da Porcentagem: " + porcentagem + " não pode ser inferior à 100% !!");
                            return false;
                        }
                        else if (porcentagem > 100) {
                            MostrarAlerta("O Total da Porcentagem: " + porcentagem + " não pode ser superior à 100% !!");
                            return false;
                        }
                    }
                    entidade.Forma_Pagamento_DiasEntity = this.FormaPagamentoDias;
                }
                else {
                    entidade.Forma_Pagamento_DiasEntity = [];
                }
            }
            else if (entidade.Tipo_Dia == 1) {
                if (this.FormaPagamentoTodosDias.length > 0) {
                    if (entidade.Tipo_Dia == 1) {
                        var porcentagem = 0;
                        for (var x = 0; x < this.FormaPagamentoTodosDias.length; x++) {
                            porcentagem += this.FormaPagamentoTodosDias[x].Porcentagem;
                        }
                        if (porcentagem < 100) {
                            MostrarAlerta("O Total da Porcentagem: " + porcentagem + " não pode ser inferior à 100% !!");
                            return false;
                        }
                        else if (porcentagem > 100) {
                            MostrarAlerta("O Total da Porcentagem: " + porcentagem + " não pode ser superior à 100% !!");
                            return false;
                        }
                    }
                    entidade.Forma_Pagamento_DiasEntity = this.FormaPagamentoTodosDias;
                }
                else {
                    entidade.Forma_Pagamento_DiasEntity = [];
                }
            }
            else if (entidade.Tipo_Dia == 2) {
                if (this.FormaPagamentoPeriodos.length > 0) {
                    entidade.Forma_Pagamento_DiasEntity = this.FormaPagamentoPeriodos;
                }
                else {
                    entidade.Forma_Pagamento_DiasEntity = [];
                }
            }
            else if (entidade.Tipo_Dia == 3) {
                if (this.FormaPagamentoDiaSemanas.length > 0) {
                    entidade.Forma_Pagamento_DiasEntity = this.FormaPagamentoDiaSemanas;
                }
                else {
                    entidade.Forma_Pagamento_DiasEntity = [];
                }
            }
        }
        return true;
    };
    C_ForPag.prototype.OnDepoisLimpar = function () {
        this.LimparCampos();
        this.LimparEntidade();
        return true;
    };
    C_ForPag.prototype.BuscarGridDias = function () {
        var parametros = {
            codigo: this.txtCodigo.GetText()
        };
        var formaPagamento = this.ExecutarFuncaoServerSideSynch("CarregarFormaPagamentoDias", parametros);
        this.GetScope().Entity = formaPagamento;
        this.FormaPagamentoDias = formaPagamento.Forma_Pagamento_DiasEntity;
        this.grdDias.Grid.PreencherGrid(formaPagamento.Forma_Pagamento_DiasEntity);
    };
    C_ForPag.prototype.BuscarGridTodosDias = function () {
        var parametros = {
            codigo: this.txtCodigo.GetText()
        };
        var formaPagamento = this.ExecutarFuncaoServerSideSynch("CarregarFormaPagamentoDias", parametros);
        this.GetScope().Entity = formaPagamento;
        this.FormaPagamentoTodosDias = formaPagamento.Forma_Pagamento_DiasEntity;
        this.grdTodosDias.Grid.PreencherGrid(formaPagamento.Forma_Pagamento_DiasEntity);
    };
    C_ForPag.prototype.BuscarGridPeriodos = function () {
        var parametros = {
            codigo: this.txtCodigo.GetText()
        };
        var formaPagamento = this.ExecutarFuncaoServerSideSynch("CarregarFormaPagamentoPeriodos", parametros);
        this.GetScope().Entity = formaPagamento;
        this.FormaPagamentoPeriodos = formaPagamento.Forma_Pagamento_DiasEntity;
        this.grdPeriodos.Grid.PreencherGrid(formaPagamento.Forma_Pagamento_DiasEntity);
    };
    C_ForPag.prototype.BuscarGridDiaSemanas = function () {
        var parametros = {
            codigo: this.txtCodigo.GetText()
        };
        var formaPagamento = this.ExecutarFuncaoServerSideSynch("CarregarFormaPagamentoDiaSemanas", parametros);
        this.GetScope().Entity = formaPagamento;
        this.FormaPagamentoDiaSemanas = formaPagamento.Forma_Pagamento_DiasEntity;
        this.grdDiaSemanas.Grid.PreencherGrid(formaPagamento.Forma_Pagamento_DiasEntity);
    };
    C_ForPag.prototype.OnClickIncluirFormaPagamentoDia = function (s, e) {
        if (this.cboCategoria.Combo.GetValue() == null) {
            MostrarAlerta("Informe o campo Categoria");
            e.cancelar = true;
            return true;
        }
        if (this.cboTipo.Combo.GetValue() == null) {
            MostrarAlerta("Informe o campo Aplicar");
            e.cancelar = true;
            return true;
        }
        if (this.cboTipoVencimento.Combo.GetValue() == null) {
            MostrarAlerta("Informe o campo Tipo");
            e.cancelar = true;
            return true;
        }
        if (this.txtDias.GetText() == "") {
            e.item.Dias = -1.00000;
        }
        else {
            e.item.Dias = this.txtDias.GetText().CNum();
        }
        if (this.txtPorc.GetText() == "") {
            e.item.Porcentagem = -1.00000;
        }
        else {
            e.item.Porcentagem = this.txtPorc.GetText().CNum();
        }
        if (this.txtPorc.GetText() == "") {
            e.item.Porcentagem = -1.00000;
        }
        else {
            e.item.Porcentagem = this.txtPorc.GetText().CNum();
        }
        e.item.Dia_Semana = this.cboDia.Combo.GetValue();
        var parametros = {
            formaPagamentoDia: e.item,
            tipo: this.cboTipo.Combo.GetValue(),
            valor: this.txtValor.GetText(),
            tipoDia: this.cboTipoVencimento.Combo.GetValue(),
            descricao: this.txtDescricao.GetText(),
            categoria: this.cboCategoria.Combo.GetValue()
        };
        if (e.item.Codigo == undefined) {
            e.item.Codigo = 0;
        }
        var retorno = this.ExecutarFuncaoServerSideSynch("ValidarCampos", parametros);
        if (retorno != "") {
            MostrarAlerta(retorno);
            e.cancelar = true;
        }
        else {
            var formaPagamentoDias = e.item;
            var count = 0;
            for (var x = 0; x < this.FormaPagamentoDias.length; x++) {
                if (this.FormaPagamentoDias[x].Dias == formaPagamentoDias.Dias) {
                    count++;
                    if (count == 1) {
                        this.LimparCampos();
                        MostrarAlerta("Já existe este dia na tabela");
                        e.cancelar = true;
                    }
                }
            }
            e.item.Dia_Semana_Texto = this.cboDia.GetText();
            this.LimparCampos();
        }
        if (this.FormaPagamentoDias.length > 0) {
            var values = [];
            if (this.FormaPagamentoDias.length != 0) {
                for (var x = 0; x < this.FormaPagamentoDias.length; x++) {
                    values[x] = this.FormaPagamentoDias[x].Codigo;
                }
            }
            var codigo = Math.max.apply(Math, values);
            if (e.item.Codigo == 0) {
                e.item.Codigo = codigo + 1;
            }
        }
        else {
            var parametros_1 = {
                codigo: this.txtCodigo.GetText().CNum()
            };
            var codigo = this.ExecutarFuncaoServerSideSynch("GetByMaxCodigoFormaPagamento", parametros_1);
            if (codigo == null) {
                codigo = 1;
                e.item.Codigo = codigo;
            }
            else {
                e.item.Codigo = codigo.CNum() + 1;
            }
        }
        return true;
    };
    C_ForPag.prototype.OnClickIncluirFormaPagamentoTodoDia = function (s, e) {
        if (this.cboCategoria.Combo.GetValue() == null) {
            MostrarAlerta("Informe o campo Categoria");
            e.cancelar = true;
            return true;
        }
        if (this.cboTipo.Combo.GetValue() == null) {
            MostrarAlerta("Informe o campo Aplicar");
            e.cancelar = true;
            return true;
        }
        if (this.cboTipoVencimento.Combo.GetValue() == null) {
            MostrarAlerta("Informe o campo Tipo");
            e.cancelar = true;
            return true;
        }
        if (this.txtTodosDias.GetText() == "") {
            e.item.Dias = -1.00000;
        }
        else {
            e.item.Dias = this.txtTodosDias.GetText().CNum();
        }
        if (this.txtTodosDiasPorc.GetText() == "") {
            e.item.Porcentagem = -1.00000;
        }
        else {
            e.item.Porcentagem = this.txtTodosDiasPorc.GetText().CNum();
        }
        e.item.Dia_Semana = this.cboTodoDia.Combo.GetValue();
        var parametros = {
            formaPagamentoDia: e.item,
            tipo: this.cboTipo.Combo.GetValue(),
            valor: this.txtValor.GetText(),
            tipoDia: this.cboTipoVencimento.Combo.GetValue(),
            descricao: this.txtDescricao.GetText(),
            categoria: this.cboCategoria.Combo.GetValue()
        };
        if (e.item.Codigo == undefined) {
            e.item.Codigo = 0;
        }
        var retorno = this.ExecutarFuncaoServerSideSynch("ValidarCampos", parametros);
        if (retorno != "") {
            MostrarAlerta(retorno);
            e.cancelar = true;
        }
        else {
            var formaPagamentoTodosDias = e.item;
            var count = 0;
            for (var x = 0; x < this.FormaPagamentoTodosDias.length; x++) {
                if (this.FormaPagamentoTodosDias[x].Dias == formaPagamentoTodosDias.Dias) {
                    count++;
                    if (count == 1) {
                        this.LimparCampos();
                        MostrarAlerta("Já existe este dia na tabela");
                        e.cancelar = true;
                    }
                }
            }
            e.item.Dia_Semana_Texto = this.cboTodoDia.GetText();
            this.LimparCampos();
        }
        if (this.FormaPagamentoTodosDias.length > 0) {
            var values = [];
            if (this.FormaPagamentoTodosDias.length != 0) {
                for (var x = 0; x < this.FormaPagamentoTodosDias.length; x++) {
                    values[x] = this.FormaPagamentoTodosDias[x].Codigo;
                }
            }
            var codigo = Math.max.apply(Math, values);
            if (e.item.Codigo == 0) {
                e.item.Codigo = codigo + 1;
            }
        }
        else {
            var parametros_2 = {
                codigo: this.txtCodigo.GetText().CNum()
            };
            var codigo = this.ExecutarFuncaoServerSideSynch("GetByMaxCodigoFormaPagamento", parametros_2);
            if (codigo == null) {
                codigo = 1;
                e.item.Codigo = codigo;
            }
            else {
                e.item.Codigo = codigo.CNum() + 1;
            }
        }
        return true;
    };
    C_ForPag.prototype.OnClickIncluirFormaPagamentoPeriodo = function (s, e) {
        if (this.cboCategoria.Combo.GetValue() == null) {
            MostrarAlerta("Informe o campo Categoria");
            e.cancelar = true;
            return true;
        }
        if (this.cboTipo.Combo.GetValue() == null) {
            MostrarAlerta("Informe o campo Aplicar");
            e.cancelar = true;
            return true;
        }
        if (this.cboTipoVencimento.Combo.GetValue() == null) {
            MostrarAlerta("Informe o campo Tipo");
            e.cancelar = true;
            return true;
        }
        if (this.txtDiaDe.GetText() == "") {
            e.item.Dia_De = -1.00000;
        }
        else {
            e.item.Dia_De = this.txtDiaDe.GetText().CNum();
        }
        if (this.txtDiaAte.GetText() == "") {
            e.item.Dia_Ate = -1.00000;
        }
        else {
            e.item.Dia_Ate = this.txtDiaAte.GetText().CNum();
        }
        if (this.txtDiaFixo.GetText() == "") {
            e.item.Dia_Fixo = -1.00000;
        }
        else {
            e.item.Dia_Fixo = this.txtDiaFixo.GetText().CNum();
        }
        e.item.Proximo_Mes = this.chkProximoMes.Check.checked;
        var parametroValidacao = {
            formaPagamentoDia: e.item,
            tipo: this.cboTipo.Combo.GetValue(),
            tipoDia: this.cboTipoVencimento.Combo.GetValue(),
            descricao: this.txtDescricao.GetText(),
            categoria: this.cboCategoria.Combo.GetValue()
        };
        if (e.item.Codigo == undefined) {
            e.item.Codigo = 0;
        }
        var retorno = this.ExecutarFuncaoServerSideSynch("ValidarCamposPeriodo", parametroValidacao);
        if (retorno != "") {
            MostrarAlerta(retorno);
            e.cancelar = true;
        }
        else {
            if (this.txtDiaDe.GetText().CNum() > 31 || this.txtDiaAte.GetText().CNum() > 31 || this.txtDiaFixo.GetText().CNum() > 31) {
                MostrarAlerta("Não pode ser informado um dia maior que 31, informe corretamente os dias!");
                e.cancelar = true;
            }
            else if (this.txtDiaDe.GetText().CNum() > this.txtDiaAte.GetText().CNum() && !this.chkProximoMes.Check.checked) {
                MostrarAlerta("O DIA - DE é maior que o DIA - ATÉ, Marque a opção para jogar para o próximo mês.");
                e.cancelar = true;
            }
            else {
                var formaPagamentoPeriodos = e.item;
                var count = 0;
                for (var x = 0; x < this.FormaPagamentoPeriodos.length; x++) {
                    if (formaPagamentoPeriodos.Dia_De >= this.FormaPagamentoPeriodos[x].Dia_De && formaPagamentoPeriodos.Dia_Ate <= this.FormaPagamentoPeriodos[x].Dia_Ate) {
                        count++;
                        if (count == 1) {
                            MostrarAlerta("Já existe um período para os dias informados");
                            e.cancelar = true;
                        }
                        this.LimparCampos();
                    }
                }
                this.LimparCampos();
            }
        }
        if (this.FormaPagamentoPeriodos.length > 0) {
            var values = [];
            if (this.FormaPagamentoPeriodos.length != 0) {
                for (var x = 0; x < this.FormaPagamentoPeriodos.length; x++) {
                    values[x] = this.FormaPagamentoPeriodos[x].Codigo;
                }
            }
            var codigo = Math.max.apply(Math, values);
            if (e.item.Codigo == 0) {
                e.item.Codigo = codigo + 1;
            }
        }
        else {
            var parametros = {
                codigo: this.txtCodigo.GetText().CNum()
            };
            var codigo = this.ExecutarFuncaoServerSideSynch("GetByMaxCodigoFormaPagamento", parametros);
            if (codigo == null) {
                codigo = 1;
                e.item.Codigo = codigo;
            }
            else {
                e.item.Codigo = codigo.CNum() + 1;
            }
        }
        return true;
    };
    C_ForPag.prototype.OnClickIncluirFormaPagamentoDiaSemana = function (s, e) {
        if (this.cboCategoria.Combo.GetValue() == null) {
            MostrarAlerta("Informe o campo Categoria");
            e.cancelar = true;
            return true;
        }
        if (this.cboTipo.Combo.GetValue() == null) {
            MostrarAlerta("Informe o campo Aplicar");
            e.cancelar = true;
            return true;
        }
        if (this.cboTipoVencimento.Combo.GetValue() == null) {
            MostrarAlerta("Informe o campo Tipo");
            e.cancelar = true;
            return true;
        }
        e.item.Dias_Semana = this.lstDiaSemana.SelectedValues.join(",");
        e.item.Dia_Da_Semana = this.cboDiaSemana.Combo.GetValue();
        var parametrosValidacao = {
            formaPagamentoDia: e.item,
            tipo: this.cboTipo.Combo.GetValue(),
            tipoDia: this.cboTipoVencimento.Combo.GetValue(),
            descricao: this.txtDescricao.GetText(),
            categoria: this.cboCategoria.Combo.GetValue()
        };
        if (e.item.Codigo == undefined) {
            e.item.Codigo = 0;
        }
        var retorno = this.ExecutarFuncaoServerSideSynch("ValidarCamposDiaSemana", parametrosValidacao);
        if (retorno != "") {
            MostrarAlerta(retorno);
            e.cancelar = true;
        }
        else {
            var formaPagamentoDiaSemana = e.item;
            var count = 0;
            for (var x = 0; x < this.FormaPagamentoDiaSemanas.length; x++) {
                if (this.FormaPagamentoDiaSemanas[x].Dias_Semana.indexOf(formaPagamentoDiaSemana.Dias_Semana) > -1) {
                    count++;
                    if (count == 1) {
                        this.LimparCampos();
                        MostrarAlerta("Já existe um período cadastrado para esse dia da semana!");
                        e.cancelar = true;
                    }
                }
            }
            e.item.Dias_Semana_Texto = this.lstDiaSemana.SelectedTextes.join(",");
            e.item.Dia_Da_Semana_Texto = this.cboDiaSemana.GetText();
            this.LimparCampos();
        }
        if (this.FormaPagamentoDiaSemanas.length > 0) {
            var values = [];
            if (this.FormaPagamentoDiaSemanas.length != 0) {
                for (var x = 0; x < this.FormaPagamentoDiaSemanas.length; x++) {
                    values[x] = this.FormaPagamentoDiaSemanas[x].Codigo;
                }
            }
            var codigo = Math.max.apply(Math, values);
            if (e.item.Codigo == 0) {
                e.item.Codigo = codigo + 1;
            }
        }
        else {
            var parametros = {
                codigo: this.txtCodigo.GetText().CNum()
            };
            var codigo = this.ExecutarFuncaoServerSideSynch("GetByMaxCodigoFormaPagamento", parametros);
            if (codigo == null) {
                codigo = 1;
                e.item.Codigo = codigo;
            }
            else {
                e.item.Codigo = codigo.CNum() + 1;
            }
        }
        return true;
    };
    C_ForPag.prototype.OnClickExcluirFormaPagamentoDia = function (s, e) {
        var lista = [];
        for (var x = 0; x < this.FormaPagamentoDias.length; x++) {
            if (this.FormaPagamentoDias.length == 1) {
                this.FormaPagamentoDias = [];
            }
            else {
                if (this.FormaPagamentoDias[x] != e.item) {
                    lista.push(this.FormaPagamentoDias[x]);
                }
            }
        }
        this.FormaPagamentoDiaSemanas = [];
        this.FormaPagamentoDiaSemanas = lista;
    };
    C_ForPag.prototype.OnClickExcluirFormaPagamentoPeriodo = function (s, e) {
        var lista = [];
        for (var x = 0; x < this.FormaPagamentoPeriodos.length; x++) {
            if (this.FormaPagamentoPeriodos.length == 1) {
                this.FormaPagamentoPeriodos = [];
            }
            else {
                if (this.FormaPagamentoPeriodos[x] != e.item) {
                    lista.push(this.FormaPagamentoPeriodos[x]);
                }
            }
        }
        this.FormaPagamentoPeriodos = [];
        this.FormaPagamentoPeriodos = lista;
    };
    C_ForPag.prototype.OnClickExcluirFormaPagamentoTodoDia = function (s, e) {
        var lista = [];
        for (var x = 0; x < this.FormaPagamentoTodosDias.length; x++) {
            if (this.FormaPagamentoTodosDias.length == 1) {
                this.FormaPagamentoTodosDias = [];
            }
            else {
                if (this.FormaPagamentoTodosDias[x] != e.item) {
                    lista.push(this.FormaPagamentoTodosDias[x]);
                }
            }
        }
        this.FormaPagamentoTodosDias = [];
        this.FormaPagamentoTodosDias = lista;
    };
    C_ForPag.prototype.OnClickExcluirFormaPagamentoDiaSemana = function (s, e) {
        var lista = [];
        for (var x = 0; x < this.FormaPagamentoDiaSemanas.length; x++) {
            if (this.FormaPagamentoDiaSemanas.length == 1) {
                this.FormaPagamentoDiaSemanas = [];
            }
            else {
                if (this.FormaPagamentoDiaSemanas[x] != e.item) {
                    lista.push(this.FormaPagamentoDiaSemanas[x]);
                }
            }
        }
        this.FormaPagamentoDiaSemanas = [];
        this.FormaPagamentoDiaSemanas = lista;
    };
    C_ForPag.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.cboDia.SetSelectedIndex(0);
        this.cboTodoDia.SetSelectedIndex(0);
    };
    C_ForPag.prototype.LimparCampos = function () {
        this.txtDias.Limpar();
        this.txtPorc.Limpar();
        this.cboDia.LimparSelecao();
        this.txtTodosDias.Limpar();
        this.txtTodosDiasPorc.Limpar();
        this.cboTodoDia.LimparSelecao();
        this.txtDiaDe.Limpar();
        this.txtDiaAte.Limpar();
        this.txtDiaFixo.Limpar();
        this.lstDiaSemana.LimparSelecao();
        this.cboDiaSemana.LimparSelecao();
        this.selecionarCheck(this.chkProximoMes, false);
        this.cboDia.SetSelectedIndex(0);
        this.cboTodoDia.SetSelectedIndex(0);
        this.txtValor.ReadOnly = false;
    };
    C_ForPag.prototype.LimparEntidade = function () {
        this.GetScope().Entity = {};
        this.FormaPagamentoDias = [];
        this.FormaPagamentoTodosDias = [];
        this.FormaPagamentoDiaSemanas = [];
        this.FormaPagamentoPeriodos = [];
        this.tab.AlterarVisibleAba("AbaDias", false);
        this.tab.AlterarVisibleAba("AbaTodosDias", false);
        this.tab.AlterarVisibleAba("AbaPeridoDia", false);
        this.tab.AlterarVisibleAba("AbaDiaSemana", false);
    };
    return C_ForPag;
}(MouraPageCadastroAngular));
var c_ForPag = new C_ForPag();
//# sourceMappingURL=C_ForPag.js.map