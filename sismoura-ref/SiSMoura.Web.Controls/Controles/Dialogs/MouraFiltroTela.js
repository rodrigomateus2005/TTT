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
var MouraFiltroTela = /** @class */ (function (_super) {
    __extends(MouraFiltroTela, _super);
    function MouraFiltroTela() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idCHKVisivel = 'chkVisivel';
        _this.idCHKObrigatorio = 'chkObrigatorio';
        return _this;
    }
    Object.defineProperty(MouraFiltroTela.prototype, "Modal", {
        get: function () {
            return window[this.ID + "_Modal_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFiltroTela.prototype, "Grid", {
        get: function () {
            return window[this.ID + "_Grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFiltroTela.prototype, "BotaoCancelar", {
        get: function () {
            return window[this.ID + "_BotaoCancelar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFiltroTela.prototype, "BotaoSalvar", {
        get: function () {
            return window[this.ID + "_BotaoSalvar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFiltroTela.prototype, "hdnSource", {
        get: function () {
            return $("#" + this.ID + "_hdnSource")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraFiltroTela.prototype, "hdnSelecionar", {
        get: function () {
            return $("#" + this.ID + "_hdnSelecionar")[0];
        },
        enumerable: true,
        configurable: true
    });
    MouraFiltroTela.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.Modal && this.Modal.ModalDialog) {
            adicionarEventoDevExpress(this.Modal.ModalDialog.EndCallback, this.OnEndCallBackModal, this);
            adicionarEventoDevExpress(this.Modal.ModalDialog.Closing, this.OnCloseDialog, this);
        }
        if (this.BotaoCancelar) {
            adicionarEventoMoura(this.BotaoCancelar.Click, this.OnClickBotaoCancelar, this);
        }
        if (this.BotaoSalvar) {
            adicionarEventoMoura(this.BotaoSalvar.Click, this.OnClickBotaoSalvar, this);
        }
    };
    MouraFiltroTela.prototype.Abrir = function (accordionFiltros) {
        if (!accordionFiltros) {
            console.warn("Accordion de filtros não encontrado para esta relação");
            return;
        }
        var data = [];
        var itens = accordionFiltros.getControles();
        for (var i = 0; i < itens.length; i++) {
            var item = itens[i];
            //Itens ocultos não serão salvos
            if (!item.Visible) {
                continue;
            }
            var itemCampo = {
                id: "",
                valor: "",
                exibir: ""
            };
            var labelCampo = this.GetControlLabelCorreta(item);
            if (item instanceof MouraTextBoxProcura) {
                itemCampo.id = item.ID;
                itemCampo.valor = item.GetText();
                itemCampo.exibir = itemCampo.valor;
                if (!String.IsNullOrWhiteSpace(itemCampo.valor)) {
                    itemCampo.exibir = itemCampo.valor + " - " + item.GetResultado();
                }
            }
            else if (item instanceof MouraRadioButtonList) {
                itemCampo.id = item.ID;
                itemCampo.valor = item.GetValue();
                itemCampo.exibir = item.GetSelectedText();
            }
            else if (item instanceof MouraComboBoxEmpresa) {
                itemCampo.id = item.ID;
                itemCampo.valor = item.GetValue().toString();
                itemCampo.exibir = item.GetText();
            }
            else if (item instanceof MouraContaCorrenteLista) {
                itemCampo.id = item.ID;
                itemCampo.valor = item.Lista.GetValues().join(";");
                itemCampo.exibir = item.Lista.SelectedTextes.join("; ");
            }
            else if (item instanceof MouraListBoxEmpresa) {
                itemCampo.id = item.ID;
                itemCampo.valor = item.GetValues().join(";");
                itemCampo.exibir = item.GetTexts().join("; ");
            }
            else if (item instanceof MouraCheckBoxList) {
                itemCampo.id = item.ID;
                itemCampo.valor = item.GetValues().join(";");
                itemCampo.exibir = item.SelectedTextes.join("; ");
            }
            else if (item instanceof MouraListBox) {
                itemCampo.id = item.ID;
                itemCampo.valor = item.SelectedValue;
                itemCampo.exibir = item.SelectedValue;
            }
            else if (item instanceof MouraTextBoxPeriodo) {
                itemCampo.id = item.ID;
                var aux = [];
                if (item.textBoxCalendarioInicio.GetDate()) {
                    aux.push(item.textBoxCalendarioInicio.GetDate().toISOString());
                }
                if (item.textBoxCalendarioFim.GetDate()) {
                    aux.push(item.textBoxCalendarioFim.GetDate().toISOString());
                }
                itemCampo.valor = aux.join("|");
                itemCampo.exibir = itemCampo.valor;
            }
            else if (item instanceof MouraTextBoxData) {
                itemCampo.id = item.ID;
                itemCampo.valor = item.Date.toISOString();
                itemCampo.exibir = itemCampo.valor;
            }
            else if (item instanceof MouraCheckBox) {
                itemCampo.id = item.ID;
                itemCampo.valor = item.Checked ? "Marcado" : "Desmarcado";
                itemCampo.exibir = itemCampo.valor;
            }
            else if (item instanceof MouraContaCorrenteCombo) {
                itemCampo.id = item.ID;
                itemCampo.valor = item.Combo.GetValue();
                itemCampo.exibir = item.GetContaCorrenteText();
            }
            else if (item instanceof MouraComboBox) {
                itemCampo.id = item.ID;
                itemCampo.valor = item.GetValue();
                itemCampo.exibir = item.GetText();
            }
            else if (item instanceof MouraTextBox) {
                itemCampo.id = item.ID;
                itemCampo.valor = item.GetText();
                itemCampo.exibir = itemCampo.valor;
            }
            if (!String.IsNullOrWhiteSpace(itemCampo.id) && !String.IsNullOrWhiteSpace(labelCampo)) {
                data.push({
                    Contador: data.length + 1,
                    IDCampo: itemCampo.id,
                    Label: labelCampo,
                    Valor: itemCampo.valor,
                    Componente: typeof item,
                    Valor_Exibir: itemCampo.exibir
                });
            }
        }
        this.Grid.PreencherGrid(data);
        this.Modal.Show();
        //if (this.Modal) {
        //    this.Modal.ModalDialog.PerformCallback('filtros');
        //    this.Modal.ModalDialog.Show();
        //}
    };
    MouraFiltroTela.prototype.GetControlLabelCorreta = function (componente) {
        if (componente instanceof MouraCheckBox) {
            return componente.Text;
        }
        else {
            var retorno = componente.GetTextLabelControl();
            if (String.IsNullOrWhiteSpace(retorno)) {
                //var aux As Control = componente.Parent
                //Do While Not aux Is Nothing
                //If TypeOf aux Is MouraAgrupamento AndAlso CType(aux, MouraAgrupamento).Label <> "" Then
                //retorno = CType(aux, MouraAgrupamento).Label
                //aux = Nothing
                //Else
                //aux = aux.Parent
                //End If
                //Loop
            }
            return retorno;
        }
    };
    MouraFiltroTela.prototype.OnEndCallBackModal = function (s, e) {
        this.Grid.PreencherGrid(JSON.parse(DecodeTextoJSON(this.hdnSource.value)));
        if (this.hdnSelecionar && !String.IsNullOrWhiteSpace(this.hdnSelecionar.value)) {
            var lista = [];
            var aux = this.hdnSelecionar.value.split(",");
            for (var x = 0; x <= aux.length - 1; x++) {
                lista.push(aux[x]);
            }
            setTimeout($.proxy(function () { this.Grid.SelectRows(lista, false); }, this), 100);
        }
    };
    MouraFiltroTela.prototype.OnCloseDialog = function (s, e) {
        this.Grid.PreencherGrid([]);
    };
    MouraFiltroTela.prototype.OnClickBotaoCancelar = function (s, e) {
        e.processOnServer = false;
        this.Esconder();
    };
    MouraFiltroTela.prototype.Esconder = function () {
        this.Grid.PreencherGrid([]);
        this.Modal.Hide();
    };
    MouraFiltroTela.prototype.OnClickBotaoSalvar = function (s, e) {
        e.processOnServer = false;
        var selecionados = JSON.stringify(this.Grid.GetSelectedRowsData);
        var retornoSTR;
        var param = {
            nomePagina: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado,
            filtrosSelecionados: selecionados
        };
        retornoSTR = this.ExecutarHttpRequest("SalvarFiltroTelaRelacao", param);
        if (!String.IsNullOrWhiteSpace(retornoSTR)) {
            MostrarMensagem(retornoSTR);
        }
        this.Esconder();
        return false;
    };
    return MouraFiltroTela;
}(MouraControl));
//# sourceMappingURL=MouraFiltroTela.js.map