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
var MouraListBoxEmpresa = /** @class */ (function (_super) {
    __extends(MouraListBoxEmpresa, _super);
    function MouraListBoxEmpresa(id) {
        var _this = _super.call(this, id) || this;
        _this.SelectionChanged = new MouraEventHandler();
        _this.BlurProcura = new MouraEventHandler();
        _this.KeyupProcura = new MouraEventHandler();
        _this.AntesAbrirProcuraEmpresa = new MouraGenericEventHandler();
        return _this;
    }
    Object.defineProperty(MouraListBoxEmpresa.prototype, "AutoPostBack", {
        get: function () {
            return this._AutoPostBack;
        },
        set: function (value) {
            this._AutoPostBack = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraListBoxEmpresa.prototype, "Lista", {
        get: function () {
            return $('#' + this.ID + '_List')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraListBoxEmpresa.prototype, "PainelList", {
        get: function () {
            return $('#' + this.ID + '_painelList')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraListBoxEmpresa.prototype, "SelectorJQuery", {
        get: function () {
            return "[mouralistcontrolid='" + this.ID + "'] input[type='checkbox']";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraListBoxEmpresa.prototype, "txtProcura", {
        get: function () {
            return $('#' + this.ID + '_txtProcura')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraListBoxEmpresa.prototype, "CheckBoxList", {
        get: function () {
            return $(this.SelectorJQuery);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraListBoxEmpresa.prototype, "btnMarcar", {
        get: function () {
            return window[this.ID + '_btnMarcar_Botao'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraListBoxEmpresa.prototype, "btnDesmarcar", {
        get: function () {
            return window[this.ID + '_btnDesmarcar_Botao'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraListBoxEmpresa.prototype, "btnProcurar", {
        get: function () {
            return window[this.ID + '_btnProcurar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraListBoxEmpresa.prototype, "mdProcuraEmpresa", {
        get: function () {
            return window[this.ID + '_mdProcuraEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraListBoxEmpresa.prototype, "grdProcuraEmpresa", {
        get: function () {
            return window[this.ID + '_grdProcuraEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraListBoxEmpresa.prototype, "btnOKModal", {
        get: function () {
            return window[this.ID + '_btnOKModal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraListBoxEmpresa.prototype, "btnAtualizar", {
        get: function () {
            return window[this.ID + '_btnAtualizar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraListBoxEmpresa.prototype, "txtCEP", {
        get: function () {
            return window[this.ID + '_txtCEP_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraListBoxEmpresa.prototype, "txtEndereco", {
        get: function () {
            return window[this.ID + '_txtEndereco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraListBoxEmpresa.prototype, "btnCancelarModal", {
        get: function () {
            return window[this.ID + '_btnCancelarModal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraListBoxEmpresa.prototype, "dvConteudoModal", {
        get: function () {
            return window[this.ID + '_dvConteudoModal'];
        },
        enumerable: true,
        configurable: true
    });
    MouraListBoxEmpresa.prototype.LimparSelecao = function () {
        if (this.CheckBoxList) {
            var sel = $(this.SelectorJQuery);
            if (sel) {
                for (var x = 0; x <= sel.length - 1; x++) {
                    $(sel[x]).prop('checked', false);
                }
            }
        }
    };
    MouraListBoxEmpresa.prototype.SelecionarEmpresaPadraoUsuario = function () {
        if (ValoresSismoura.EmpresaPadraoUsuario > 0) {
            this.LimparSelecao();
            this.SetValues(["" + ValoresSismoura.EmpresaPadraoUsuario]);
        }
    };
    MouraListBoxEmpresa.prototype.GetValues = function () {
        if (!this.CheckBoxList) {
            return [];
        }
        else {
            var retorno = [];
            var sel = $(this.SelectorJQuery + ":checked");
            if (sel) {
                for (var x = 0; x <= sel.length - 1; x++) {
                    retorno.push(sel[x].value);
                }
            }
            return retorno;
        }
    };
    MouraListBoxEmpresa.prototype.GetTexts = function () {
        if (!this.CheckBoxList) {
            return [];
        }
        else {
            var retorno = [];
            var sel = $(this.SelectorJQuery + ":checked");
            if (sel) {
                for (var x = 0; x <= sel.length - 1; x++) {
                    var empresaNome = $(sel[x].parentElement).find("label").text();
                    retorno.push(empresaNome);
                }
            }
            return retorno;
        }
    };
    MouraListBoxEmpresa.prototype.GetValuesNumber = function () {
        if (!this.CheckBoxList) {
            return [];
        }
        else {
            var retorno = [];
            var sel = $(this.SelectorJQuery + ":checked");
            if (sel) {
                for (var x = 0; x <= sel.length - 1; x++) {
                    retorno.push((sel[x].value).CNum());
                }
            }
            return retorno;
        }
    };
    MouraListBoxEmpresa.prototype.GetValuesRelacao = function () {
        var retorno = [];
        retorno = this.GetValues();
        if (retorno) {
            if (retorno.length <= 0) {
                if (this.CheckBoxList) {
                    var sel = $(this.SelectorJQuery);
                    for (var x = 0; x <= sel.length - 1; x++) {
                        retorno.push($(sel[x]).val());
                    }
                }
            }
        }
        return retorno;
    };
    MouraListBoxEmpresa.prototype.GetValuesRelacaoNumber = function () {
        var retorno = [];
        retorno = this.GetValuesNumber();
        if (retorno) {
            if (retorno.length <= 0) {
                if (this.CheckBoxList) {
                    var sel = $(this.SelectorJQuery);
                    for (var x = 0; x <= sel.length - 1; x++) {
                        retorno.push(($(sel[x]).val()).CNum());
                    }
                }
            }
        }
        return retorno;
    };
    MouraListBoxEmpresa.prototype.GetAllValues = function () {
        var retorno = [];
        if (this.CheckBoxList) {
            var sel = $(this.SelectorJQuery);
            for (var x = 0; x <= sel.length - 1; x++) {
                retorno.push(($(sel[x]).val()).CNum());
            }
        }
        return retorno;
    };
    MouraListBoxEmpresa.prototype.SetValues = function (values) {
        if (values == null || values == undefined) {
            values = [];
        }
        if (this.CheckBoxList) {
            var sel = $(this.SelectorJQuery);
            this.LimparSelecao();
            if (sel) {
                for (var x = 0; x <= sel.length - 1; x++) {
                    for (var i = 0; i <= values.length - 1; i++) {
                        if ($(sel[x]).val() == values[i]) {
                            $(sel[x]).prop('checked', true);
                        }
                    }
                }
            }
        }
    };
    MouraListBoxEmpresa.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        adicionarEventoJQuery($("#" + this.ID + "_List").find("input"), "change", this.OnListChanged, this);
        if (this.btnMarcar) {
            adicionarEventoDevExpress(this.btnMarcar.Click, this.OnClickMarcar, this);
        }
        if (this.btnDesmarcar) {
            adicionarEventoDevExpress(this.btnDesmarcar.Click, this.OnClickDesmarcar, this);
        }
        if (this.txtProcura) {
            adicionarEventoJQuery(this.txtProcura, "keyup", this.OnKeyupProcura, this);
            adicionarEventoJQuery(this.txtProcura, "blur", this.OnBlurProcura, this);
        }
        if (this.btnProcurar) {
            adicionarEventoMoura(this.btnProcurar.Click, this.OnClickProcurar, this);
        }
        if (this.btnCancelarModal) {
            adicionarEventoMoura(this.btnCancelarModal.Click, this.OnClickCancelarModal, this);
        }
        if (this.btnOKModal) {
            adicionarEventoMoura(this.btnOKModal.Click, this.OnClickOKModal, this);
        }
        if (this.btnAtualizar) {
            adicionarEventoMoura(this.btnAtualizar.Click, this.OnClickAtualizarModal, this);
        }
        if (this.txtCEP) {
            adicionarEventoMoura(this.txtCEP.PesquisouCEP, this.OnPesquisouCEP, this);
        }
        if (this.txtProcura) {
            $(this.PainelList).css("margin-left", "0");
        }
        debugger;
    };
    MouraListBoxEmpresa.prototype.OnClickMarcar = function (s, e) {
        e.processOnServer = false;
        $(this.txtProcura).val('');
        this.procurarItemLista();
        $('input[id^="' + this.ID + '_List"]').prop('checked', true);
        this.OnListChanged();
        if (this.AutoPostBack) {
            __doPostBack(this.AspUniqueId, "marcar");
        }
    };
    MouraListBoxEmpresa.prototype.OnClickDesmarcar = function (s, e) {
        e.processOnServer = false;
        $(this.txtProcura).val('');
        this.procurarItemLista();
        $('input[id^="' + this.ID + '_List"]').prop('checked', false);
        this.OnListChanged();
        if (this.AutoPostBack) {
            __doPostBack(this.AspUniqueId, "desmarcar");
        }
    };
    MouraListBoxEmpresa.prototype.OnListChanged = function () {
        this.SelectionChanged.FireEvent(this, new MouraEventArgs());
    };
    MouraListBoxEmpresa.prototype.OnListProcuraBlur = function () {
        debugger;
        this.BlurProcura.FireEvent(this, new MouraEventArgs());
    };
    MouraListBoxEmpresa.prototype.OnListProcuraKeyup = function () {
        debugger;
        this.KeyupProcura.FireEvent(this, new MouraEventArgs());
    };
    MouraListBoxEmpresa.prototype.OnBlurProcura = function (e) {
        debugger;
        e.processOnServer = false;
        this.procurarItemLista();
        this.OnListProcuraBlur();
    };
    MouraListBoxEmpresa.prototype.OnKeyupProcura = function (e) {
        debugger;
        e.processOnServer = false;
        this.procurarItemLista();
        this.OnListProcuraKeyup();
    };
    MouraListBoxEmpresa.prototype.Limpar = function () {
        this.txtProcura.value = "";
        this.procurarItemLista();
    };
    MouraListBoxEmpresa.prototype.procurarItemLista = function () {
        var txtSearch = this.txtProcura;
        var checkBoxList = this.Lista;
        var valorProcura = ("" + $(txtSearch).val()).toUpperCase().ConverterCaracter();
        if (!String.IsNullOrWhiteSpace(valorProcura)) {
            var count = 0;
            $(checkBoxList).children('tbody').children('tr').each(function () {
                var match = false;
                $(this).children('td').find('label').each(function () {
                    if ($(this).text().toUpperCase().ConverterCaracter().indexOf(valorProcura) > -1)
                        match = true;
                });
                if (match) {
                    $(this).show();
                    count++;
                }
                else {
                    $(this).hide();
                }
            });
        }
        else {
            $(checkBoxList).children('tbody').children('tr').each(function () {
                $(this).show();
            });
        }
    };
    MouraListBoxEmpresa.prototype.IsValido = function () {
        if (this.GetValues().length <= 0) {
            return false;
        }
        return _super.prototype.IsValido.call(this);
    };
    MouraListBoxEmpresa.prototype.OnClickProcurar = function (s, e) {
        try {
            e.processOnServer = false;
            this.txtEndereco.Limpar();
            this.txtCEP.Limpar();
            var args = {};
            args.EnderecoPesquisa = "";
            args.CepPesquisa = "";
            this.AntesAbrirProcuraEmpresa.FireEvent(this, args);
            if (!String.IsNullOrWhiteSpace(args.EnderecoPesquisa)) {
                this.txtEndereco.SetText(args.EnderecoPesquisa);
            }
            if (!String.IsNullOrWhiteSpace(args.CepPesquisa)) {
                this.txtCEP.SetText(args.CepPesquisa);
            }
            this.mdProcuraEmpresa.Show();
            this.mdProcuraEmpresa.ModalDialog.SetMaximized(true);
            this.AtualizarGradeModal();
            this.txtEndereco.Focus();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraListBoxEmpresa.prototype.OnClickAtualizarModal = function (s, e) {
        try {
            e.processOnServer = false;
            this.AtualizarGradeModal();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraListBoxEmpresa.prototype.AtualizarGradeModal = function () {
        debugger;
        try {
            this.PreencherEmpresasModal(this.GetAllValues());
            this.CorrigirTamanhoDiv();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraListBoxEmpresa.prototype.CorrigirTamanhoDiv = function () {
        var tamanho = $(window).innerHeight();
        $(this.dvConteudoModal).css("height", (tamanho - 100) + "px");
    };
    MouraListBoxEmpresa.prototype.OnClickCancelarModal = function (s, e) {
        try {
            e.processOnServer = false;
            this.mdProcuraEmpresa.Hide();
            this.grdProcuraEmpresa.PreencherGrid([]);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraListBoxEmpresa.prototype.OnClickOKModal = function (s, e) {
        try {
            e.processOnServer = false;
            var valoresSelecionados = this.grdProcuraEmpresa.GetSelectedRowsData;
            if (!valoresSelecionados || valoresSelecionados.length <= 0) {
                MostrarAlerta("Selecione ao menos uma empresa");
                return;
            }
            var array = [];
            for (var x = 0; x <= valoresSelecionados.length - 1; x++) {
                array.push("" + valoresSelecionados[x].Codigo);
            }
            this.LimparSelecao();
            this.SetValues(array);
            this.OnListChanged();
            this.mdProcuraEmpresa.Hide();
            this.grdProcuraEmpresa.PreencherGrid([]);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraListBoxEmpresa.prototype.PreencherEmpresasModal = function (empresas) {
        var _this = this;
        try {
            this.grdProcuraEmpresa.PreencherGrid([]);
            this.grdProcuraEmpresa.LimparFiltros();
            this.grdProcuraEmpresa.LimparSelecao();
            if (!empresas) {
                empresas = [];
            }
            var param = {
                codEmpresas: JSON.stringify(empresas),
                enderecoPesquisa: this.txtEndereco.GetText()
            };
            abrirEspera("");
            this.ExecutarHttpRequestAsync("GetEmpresasModal", param, function (d) {
                try {
                    fecharEspera();
                    var retornoSTR = DecodeTextoJSON(d);
                    var retorno = null;
                    if (!String.IsNullOrWhiteSpace(retornoSTR)) {
                        retorno = JSON.parse(DecodeTextoJSON(retornoSTR));
                        _this.grdProcuraEmpresa.PreencherGrid(retorno.Dados);
                        _this.grdProcuraEmpresa.deselectAll();
                        if (!String.IsNullOrWhiteSpace(retorno.EnderecoOrigemGoogle)) {
                            _this.txtEndereco.SetText(retorno.EnderecoOrigemGoogle);
                            _this.grdProcuraEmpresa.OrderBy("Fantasia", undefined);
                            _this.grdProcuraEmpresa.OrderBy("Distancia", "asc");
                        }
                        else {
                            _this.grdProcuraEmpresa.OrderBy("Distancia", undefined);
                            _this.grdProcuraEmpresa.OrderBy("Fantasia", "asc");
                        }
                    }
                    if (String.IsNullOrWhiteSpace(ValoresSismoura.ConfiguracoesRetaguarda.Key_Google) && !String.IsNullOrWhiteSpace(_this.txtEndereco.GetText())) {
                        MostrarAlerta("Para pesquisar a distância do endereço é necessário configurar a API de comunicação. Entre em contato com a Moura Informática caso deseje utilizar este recurso");
                    }
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
    MouraListBoxEmpresa.prototype.OnPesquisouCEP = function (s, e) {
        var _this = this;
        try {
            if (e.EncontrouEndereco) {
                InputBoxJS("SisMoura", "Informe o número do endereço <br />" + e.Endereco, null, function (result) {
                    var endereco = e.Endereco + " " + result.Valor + " " + e.CidadeDescricao + " " + e.Estado;
                    _this.txtEndereco.SetText(endereco);
                    _this.txtEndereco.Focus();
                }, this);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraListBoxEmpresa.prototype.Preencher = function (codigoUsuario, regioes, estados, cidades) {
        if (!codigoUsuario) {
            codigoUsuario = 0;
        }
        if (!regioes) {
            regioes = "";
        }
        if (!estados) {
            estados = "";
        }
        if (!cidades) {
            cidades = "";
        }
        var retorno;
        var retornoString;
        var param = {
            codigoUsuario: codigoUsuario,
            regioes: regioes,
            estados: estados,
            cidades: cidades
        };
        retornoString = this.ExecutarHttpRequest("GetEmpresas", param);
        retorno = [];
        if (!String.IsNullOrWhiteSpace(retornoString)) {
            retorno = JSON.parse(DecodeTextoJSON(retornoString));
        }
        for (var i = 0; i < retorno.length; i++) {
            var empresa = retorno[i];
            if (ValoresSismoura.ConfiguracoesRetaguarda.DescEmpresa == 0) {
                this.AdicionarItem(empresa.Razao_Social, empresa.Codigo.toString());
            }
            else {
                this.AdicionarItem(empresa.Fantasia, empresa.Codigo.toString());
            }
        }
    };
    MouraListBoxEmpresa.prototype.AdicionarItem = function (texto, valor) {
        if ($("#" + this.ID + "_List")) {
            if ($("#" + this.ID + "_List").length == 0) {
                $(this.PainelList).append("<table id=\"" + this.ID + "_List\" class=\"input-block-level\" mouralistcontrolid=\"" + this.ID + "\" style=\"height:100px;\"> </table>");
            }
            var table = $("#" + this.ID + "_List")[0];
            var linha = table.insertRow(-1);
            var idItem = this.ID + "_List" + "_" + linha.rowIndex;
            var nameItem = this.AspUniqueId + "_List" + "_" + linha.rowIndex;
            linha.innerHTML = "<td><input id=\"" + idItem + "\" name=\"" + nameItem + "\" type=\"checkbox\" value=\"" + valor + "\" ><label for=\"" + idItem + "\">" + texto + "</label></td>";
        }
    };
    MouraListBoxEmpresa.prototype.RemoverTodosItens = function (remover) {
        $("#" + this.ID + "_List").find('tr').remove();
    };
    return MouraListBoxEmpresa;
}(MouraCampo));
var MouraListBoxEmpresaAbriuProcuraEventArgs = /** @class */ (function (_super) {
    __extends(MouraListBoxEmpresaAbriuProcuraEventArgs, _super);
    function MouraListBoxEmpresaAbriuProcuraEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraListBoxEmpresaAbriuProcuraEventArgs;
}(MouraEventArgs));
//# sourceMappingURL=MouraListBoxEmpresa.js.map