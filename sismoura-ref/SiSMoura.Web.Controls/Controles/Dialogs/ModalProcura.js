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
var ModalProcura = /** @class */ (function (_super) {
    __extends(ModalProcura, _super);
    function ModalProcura(id) {
        var _this = _super.call(this, id) || this;
        _this.COOKIE_CLIENTE = "ProcuraCliente";
        return _this;
    }
    Object.defineProperty(ModalProcura.prototype, "Campos", {
        get: function () {
            return this.campos;
        },
        set: function (campos) {
            this.campos = campos;
            //$(this.DivCampos).empty();
            //this.criarCampo();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "BotaoPesquisar", {
        get: function () {
            return $("#" + this.ID + " .botaoPesquisar")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "HiddenBackup", {
        get: function () {
            return $("#" + this.ID + " #hdnBackup")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "hdnEngine", {
        get: function () {
            return window[this.ID + "_hdnEngine"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "Engine", {
        get: function () {
            return this.hdnEngine.value;
        },
        set: function (valor) {
            this.hdnEngine.value = valor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "hdnComboClientID", {
        get: function () {
            return $("#" + this.ID + "_hdnComboClientID")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "ComboClientID", {
        get: function () {
            return this.hdnComboClientID.value;
        },
        set: function (valor) {
            this.hdnComboClientID.value = valor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "hdnUsarCallBackPanel", {
        get: function () {
            return $("#" + this.ID + "_hdnUsarCallBackPanel")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "cboEmpresa", {
        get: function () {
            return window[this.ID + "_cboEmpresa_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "UsarCallBackPanel", {
        get: function () {
            if (this.hdnUsarCallBackPanel.value == 'S')
                return true;
            else
                return false;
        },
        set: function (valor) {
            if (valor == true) {
                this.hdnUsarCallBackPanel.value = 'S';
            }
            else {
                this.hdnUsarCallBackPanel.value = 'N';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "hdnUsarComboEmpresa", {
        get: function () {
            return $("#" + this.ID + "_hdnUsarComboEmpresa")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "UsarComboEmpresa", {
        get: function () {
            if (this.hdnUsarComboEmpresa && this.hdnUsarComboEmpresa.value == 'S')
                return true;
            else
                return false;
        },
        set: function (valor) {
            if (this.hdnUsarComboEmpresa) {
                if (valor == true) {
                    this.hdnUsarComboEmpresa.value = 'S';
                }
                else {
                    this.hdnUsarComboEmpresa.value = 'N';
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "hdnExibirCheckInativo", {
        get: function () {
            return $("#" + this.ID + "_hdnExibirCheckInativo")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "ExibirCheckBoxInativo", {
        get: function () {
            if (this.hdnExibirCheckInativo.value == 'S')
                return true;
            else
                return false;
        },
        set: function (valor) {
            if (valor == true) {
                this.hdnExibirCheckInativo.value = 'S';
            }
            else {
                this.hdnExibirCheckInativo.value = 'N';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "hdnSomenteAtivos", {
        get: function () {
            return $("#" + this.ID + "_hdnSomenteAtivos")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "SomenteAtivos", {
        get: function () {
            if (this.hdnSomenteAtivos.value == 'S')
                return true;
            else
                return false;
        },
        set: function (valor) {
            if (valor == true) {
                this.hdnSomenteAtivos.value = 'S';
            }
            else {
                this.hdnSomenteAtivos.value = 'N';
            }
            this.ExibirCheckBoxInativo = !valor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "hdnCriouColunas", {
        get: function () {
            return window[this.ID + "_hdnCriouColunas"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "CriouColunas", {
        get: function () {
            if (this.hdnCriouColunas.value == 'S')
                return true;
            else
                return false;
        },
        set: function (valor) {
            if (valor == true) {
                this.hdnCriouColunas.value = 'S';
            }
            else {
                this.hdnCriouColunas.value = 'N';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "Modal", {
        get: function () {
            return window[this.ID + "_Modal_Modal"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "HiddenParametros", {
        get: function () {
            return window[this.ID + "_hdnParametros"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "hdnParametrosProcura", {
        get: function () {
            return window[this.ID + "_hdnParametrosProcura"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "hdnCampoID", {
        get: function () {
            return window[this.ID + "_hdnCampoID"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "hdnEmpresaVisible", {
        get: function () {
            return window[this.ID + "_hdnEmpresaVisible"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "DivCampos", {
        get: function () {
            return $("#" + this.ID + " .campos")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "divGrade", {
        get: function () {
            return $("#divGrade.grade")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "grdProc", {
        get: function () {
            return window[this.ID + "_grdProc_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "Callback", {
        get: function () {
            return window[this.ID + "_cbGridProcura"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "chkInativos", {
        get: function () {
            return window[this.ID + '_chkConsiderarInativos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalProcura.prototype, "dvLabelCliente", {
        get: function () {
            return $("#dvLegendaClienteProcura");
        },
        enumerable: true,
        configurable: true
    });
    ModalProcura.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        this.BotaoPesquisar.value = this.BotaoPesquisar.value.GetString();
        this.OnKeyDownModal();
        if (this.BotaoPesquisar) {
            adicionarEventoJQuery(this.BotaoPesquisar, "click", this.OnPesquisarClick, this);
        }
        if (this.grdProc) {
            adicionarEventoMoura(this.grdProc.KeyDown, this.OnKeyDownGridJS, this);
            adicionarEventoMoura(this.grdProc.SelecionouLinha, this.OnSelecionouLinhaJS, this);
            adicionarEventoMoura(this.grdProc.RowDblClick, this.OnRowsDblClickJS, this);
            adicionarEventoMoura(this.grdProc.CellClick, this.OnCellClickJS, this);
            adicionarEventoMoura(this.grdProc.CellPrepared, this.OnGridCellPrepared, this);
            this.CorrigirHeightGradeJS();
        }
        if ($(this.DivCampos).children().length == 0) {
            this.IniciarCamposProcura();
        }
        if (this.chkInativos && this.chkInativos.Check) {
            adicionarEventoJQuery(this.chkInativos.Check, "change", this.OnSelecionouCheckBoxInativo, this);
        }
        if (this.Modal) {
            adicionarEventoDevExpress(this.Modal.Closing, this.Modal_Closing, this);
        }
        //if (this.Callback) {
        //    adicionarEventoDevExpress(this.Callback.EndCallback, this.OnCallbackEndCallBack, this);
        //    adicionarEventoDevExpress(this.Callback.CallbackError, this.OnCallbackCallBackError, this);
        //}
    };
    ModalProcura.prototype.Modal_Closing = function (s, e) {
        this.grdProc.hdnSource.value = "";
    };
    ModalProcura.prototype.Abrir = function (engine) {
        if (!this.Modal)
            return;
        if (engine && engine != '') {
            this.hdnEngine.value = engine;
        }
        this.hdnCampoID.value = "";
        this.HiddenBackup.value = "";
        this.IniciarCamposProcura();
        //remove todas as colunas da grid
        this.grdProc.CampoID = "";
        this.grdProc.CampoOrder = "";
        this.grdProc.TipoOrder = "";
        this.grdProc.Colunas = [];
        this.grdProc.TotalizacoesColunas = [];
        this.grdProc.iniciarGrid();
        this.grdProc.PreencherGrid([]);
        if (this.IsProcuraCliente()) {
            this.dvLabelCliente.removeClass("invisible");
        }
        else {
            this.dvLabelCliente.addClass("invisible");
        }
        this.Modal.SetMaximized(true);
        this.Modal.Show();
        this.setFocoCampoProcura();
        this.CorrigirHeightGradeJS();
    };
    ModalProcura.prototype.IniciarCamposProcura = function () {
        if (!this.UsarComboEmpresa) {
            $('#' + this.ID + '_cboEmpresa').hide();
        }
        else {
            $('#' + this.ID + '_cboEmpresa').show();
        }
        if (!this.ExibirCheckBoxInativo) {
            $('#' + this.ID + '_chkConsiderarInativos').hide();
            if (this.chkInativos) {
                this.chkInativos.Visible = false;
            }
        }
        else {
            $('#' + this.ID + '_chkConsiderarInativos').show();
            if (this.SomenteAtivos) {
                if (this.chkInativos) {
                    this.chkInativos.Visible = false;
                }
            }
            else {
                if (this.chkInativos) {
                    this.chkInativos.Visible = true;
                }
            }
        }
        $(this.DivCampos).empty();
        this.criarCampo();
    };
    ModalProcura.prototype.setFocoCampoProcura = function () {
        $($(this.DivCampos).find("input")[0]).focus();
    };
    ModalProcura.prototype.criarCampo = function () {
        if (!this.campos || this.campos == null || this.campos.length == 0)
            return;
        var div = $('<div class="campo"></div>');
        var divSelect = $('<div class="col-md-2"></div>');
        var comboCampo = $('<select class="input-block-level hidden-xs hidden-sm" select-tipo></select>');
        var divTipo = $('<div class="tipo col-md-10"></div>');
        divSelect.append(comboCampo);
        div.append(divSelect);
        div.append(divTipo);
        $(this.DivCampos).append(div);
        $.each(this.campos, $.proxy(function (index, value) {
            comboCampo.append($('<option>', {
                value: value.Valor,
                text: value.Descricao.GetString(),
                tipo: value.Tipo
            }));
            if (index == 0)
                this.criarCampoTipo(divTipo, value.Tipo);
            comboCampo.change($.proxy(this.OnComboChange, this));
        }, this));
        //Se for procura de cliente, deve obter o valor do cookie
        if (this.IsProcuraCliente()) {
            var valor = readCookie(this.COOKIE_CLIENTE);
            if (valor) {
                comboCampo.val(valor);
                comboCampo.change();
            }
        }
    };
    ModalProcura.prototype.criarCampoTipo = function (divTipo, tipo) {
        divTipo.empty();
        if (tipo == 0) { //Campo texto
            var textolike0 = "Exatamente igual".GetString();
            var textolike1 = "Começar com".GetString();
            var textolike2 = "Terminar com".GetString();
            var textolike3 = "Qualquer parte".GetString();
            var htmlCampo = "\n                <div class=\"col-md-10\">\n                    <input type=\"text\" class=\"input-block-level\" tipo=\"texto-text\">\n                </div>\n                <div class=\"col-md-2\">\n                    <select class=\"input-block-level hidden-xs hidden-sm\" tipo=\"texto-like\">\n                        <option value=\"0\">" + textolike0 + "</option>\n                        <option value=\"1\">" + textolike1 + "</option>\n                        <option value=\"2\">" + textolike2 + "</option>\n                        <option value=\"3\" selected>" + textolike3 + "</option>\n                    </select>\n                </div>\n            ";
            var campo = $(htmlCampo);
            var text = campo.find("input");
            text.blur($.proxy(this.OnTextboxBlur, this));
            divTipo.append(campo);
        }
        else if (tipo == 1) { //Campo CPF
            var htmlCampo = '\
                <div class="col-md-12">\
                    <input type="text" class="input-block-level" tipo="cpf" data-inputmask="\'mask\': \'999.999.999-99\'">\
                </div>\
            ';
            var campo = $(htmlCampo);
            var text = campo.find("input");
            text.blur($.proxy(this.OnTextboxBlur, this));
            divTipo.append(campo);
            $("[data-inputmask]").inputmask();
        }
        else if (tipo == 2) { //Campo Telefone
            var htmlCampo = '\
                <div class="col-md-2">\
                    <input type="text" class="input-block-level" tipo="telefone-ddd" maxlength="2">\
                </div>\
                <div class="col-md-6">\
                    <input type="text" class="input-block-level" tipo="telefone-numero" maxlength="10">\
                </div>\
            ';
            var campo = $(htmlCampo);
            var text = $(campo.find("input")[1]);
            text.blur($.proxy(this.OnTextboxBlur, this));
            var campo = $(htmlCampo);
            divTipo.append(campo);
        }
        else if (tipo == 3) { //Campo CNPJ
            var htmlCampo = '\
                <div class="col-md-12">\
                    <input type="text" class="input-block-level" tipo="cnpj" data-inputmask="\'mask\': \'99.999.999/9999-99\'">\
                </div>\
            ';
            var campo = $(htmlCampo);
            var text = campo.find("input");
            text.blur($.proxy(this.OnTextboxBlur, this));
            divTipo.append(campo);
            $("[data-inputmask]").inputmask();
        }
        else if (tipo == 99) { //Campo qualquer
            var campo = $('<input type="text" class="input-block-level" tipo="qualquer-texto" />');
            var text = campo.find("input");
            text.blur($.proxy(this.OnTextboxBlur, this));
            divTipo.append(campo);
        }
    };
    ModalProcura.prototype.GetValoresCampos = function () {
        var valores = [];
        var componentes = $(this.DivCampos).children();
        var isProcuraCliente = this.IsProcuraCliente();
        var nomeCokie = this.COOKIE_CLIENTE;
        $.each(componentes, function (index, value) {
            var valor = {};
            valor.Valor = $($(value).children()[0]).find("[select-tipo]").val();
            valor.Tipo = $($(value).children()[0]).find(":selected").attr("tipo");
            if (isProcuraCliente) {
                createCookie(nomeCokie, valor.Valor, 99999999);
            }
            if (valor.Tipo == 0) {
                valor.Conteudo = {};
                valor.Conteudo.Texto = $($(value).find('[tipo="texto-text"]')[0]).val();
                valor.Conteudo.Like = $($(value).find('[tipo="texto-like"]')[0]).val();
            }
            else if (valor.Tipo == 1) {
                valor.Conteudo = {};
                valor.Conteudo.Texto = $($(value).find('[tipo="cpf"]')[0]).val();
            }
            else if (valor.Tipo == 2) {
                valor.Conteudo = {};
                valor.Conteudo.DDD = $($(value).find('[tipo="telefone-ddd"]')[0]).val();
                valor.Conteudo.Numero = $($(value).find('[tipo="telefone-numero"]')[0]).val();
            }
            else if (valor.Tipo == 3) {
                valor.Conteudo = {};
                valor.Conteudo.Texto = $($(value).find('[tipo="cnpj"]')[0]).val();
            }
            else if (valor.Tipo == 99) {
                valor.Conteudo = {};
                valor.Conteudo.Texto = $($(value).find('[tipo="qualquer-texto"]')[0]).val();
            }
            valores.push(valor);
        });
        return valores;
    };
    ModalProcura.prototype.isSomenteAtivosProcura = function () {
        if (!this.ExibirCheckBoxInativo) {
            return this.SomenteAtivos;
        }
        else {
            if (this.chkInativos && this.chkInativos.Check) {
                return !this.chkInativos.Check.checked;
            }
            else {
                return this.SomenteAtivos;
            }
        }
    };
    ModalProcura.prototype.pesquisar = function () {
        var parametros = this.HiddenParametros.value;
        var validos = false;
        this.GetValoresCampos().forEach(function (value, index) {
            if (value != "") {
                validos = true;
            }
        });
        if (validos) {
            this.HiddenBackup.value = $(this.DivCampos).find('[type="text"]').val();
            abrirEspera();
            this.HiddenParametros.value = EncodeTextoJSON(JSON.stringify({ Valores: this.GetValoresCampos() }));
            var atualizarColunas;
            if (this.grdProc.Grid.columnCount() <= 0) {
                atualizarColunas = "S";
            }
            else {
                atualizarColunas = "N";
            }
            //var param: any = {
            //    hdnParametrosProcuraValue: this.hdnParametrosProcura.value,
            //    hiddenParametros: this.HiddenParametros.value,
            //    engine: this.Engine,
            //    somenteAtivos: (this.isSomenteAtivosProcura() ? "S" : "N"),
            //    empresaVisible: (this.UsarComboEmpresa ? "S" : "N"),
            //    codUsuario: ValoresSismoura.UsuarioLogado,
            //    atualizarColunasGrade: atualizarColunas,
            //    codEmpresa: this.cboEmpresa.GetValue()
            //};
            //this.ExecutarHttpRequestAsync("GetResultadoProcura", param, this.OnPesquisouSucesso, this.OnPesquisouErro, this);        
            //hdnParametrosProcuraValue As String, ByVal parametros As String, engine As String,
            //empresaVisible As Boolean, codEmpresa As Long, codUsuario As Long,
            //atualizarColunasGrade As Boolean, somenteAtivos As Boolean
            var codEmpresa = 0;
            if ($('#' + this.ID + '_cboEmpresa').is(":visible")) {
                codEmpresa = this.cboEmpresa.GetValue();
            }
            var param = {
                hdnParametrosProcuraValue: this.hdnParametrosProcura.value,
                parametros: this.HiddenParametros.value,
                engine: this.Engine,
                empresaVisible: this.UsarComboEmpresa,
                codEmpresa: codEmpresa,
                codUsuario: ValoresSismoura.UsuarioLogado,
                atualizarColunasGrade: (atualizarColunas == "S" ? true : false),
                somenteAtivos: this.isSomenteAtivosProcura(),
            };
            this.ExecutarHttpRequestWebMethodPageAsync("GetResultadoProcura", param, this.OnPesquisouSucesso, this.OnPesquisouErro, this);
        }
    };
    ModalProcura.prototype.OnPesquisouSucesso = function (retorno) {
        try {
            var resultado = null;
            var retornoString;
            //retornoString = retorno
            retornoString = GetRetornoAJAX(retorno);
            if (!String.IsNullOrWhiteSpace(retornoString)) {
                resultado = JSON.parse(retornoString);
                if (resultado) {
                    this.hdnCampoID.value = resultado.CampoID;
                    this.grdProc.CampoID = resultado.CampoID;
                    //Cria as colunas da grade caso ainda não tenha sido criada. 
                    //Só pode criar uma vez para que não perca ordenação que o usuário tenha feito
                    if (this.grdProc.Grid.columnCount() <= 0) {
                        this.grdProc.Colunas = resultado.ColunasGrade;
                        this.grdProc.TotalizacoesColunas = resultado.Totalizacoes;
                        this.grdProc.CampoOrder = resultado.CampoOrder;
                        this.grdProc.TipoOrder = resultado.TipoOrder;
                        this.grdProc.iniciarGrid();
                    }
                    //Preencher grade
                    this.grdProc.PreencherGrid(resultado.Resultado);
                    try {
                        setTimeout($.proxy(function () {
                            this.grdProc.Focus(0, 1);
                        }, this), 200);
                    }
                    catch (ex2) {
                    }
                }
                if (this.grdProc.VisibleRowsCount() <= 0) {
                    $(".campos").find("input")[0].focus();
                }
                this.CorrigirHeightGradeJS();
            }
            fecharEspera();
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    ModalProcura.prototype.OnPesquisouErro = function (erro) {
        fecharEspera();
        LogarExceptionAjax(erro);
    };
    ModalProcura.prototype.OnSelecionouLinhaJS = function (s, e) {
        var campoID = this.hdnCampoID.value;
        if (String.IsNullOrWhiteSpace(campoID)) {
            return;
        }
        try {
            var valorCampoID = "" + e.data[campoID];
            this.SelecionarRegistro(valorCampoID);
            selecionarProximoFocus();
        }
        catch (ex) {
        }
    };
    ModalProcura.prototype.OnCellClickJS = function (s, e) {
        try {
            var col = e.columnIndex;
            var row = e.rowIndex;
            this.grdProc.Focus(row, col);
        }
        catch (ex) {
        }
    };
    ModalProcura.prototype.SelecionarRegistro = function (valorSelecionado) {
        selecionarRegistroProcura(this.Modal, valorSelecionado, $('#' + this.ComboClientID)[0], this.UsarCallBackPanel);
    };
    ModalProcura.prototype.OnKeyDownGridJS = function (s, e) {
        //clicou enter
        try {
            var tecla = getTeclaCodeEvent(e.jQueryEvent);
            if (tecla == 13) {
                e.jQueryEvent.stopPropagation();
                //obtém a celula que está com o foco (célula que está com a classe dx-focused)
                var elemento = $(e.element).find(".dx-focused").first();
                var elementoPai = elemento.parent();
                var index = elementoPai.index();
                if (index != null && index != undefined) {
                    var valorCampoID = "" + this.grdProc.Grid.getKeyByRowIndex(index);
                    //Precisa ser feito desta forma, pois por algum motivo quando faz com o ENTER o sistema
                    //não estava fechando o modal corretamente
                    setTimeout($.proxy(function () {
                        this.SelecionarRegistro(valorCampoID);
                        selecionarProximoFocus();
                    }, this), 0);
                }
                //if (elementoPai) {
                //    //procura o botão selecionar da linha da celula que está com o foco
                //    var botao = $(elementoPai).find(".gridDevExtremeBotaoSelecionar").first();
                //    if (botao) {
                //        botao.click();
                //    }
                //}                                  
            }
            else if (tecla == 27) {
                this.OnESCTela();
            }
        }
        catch (ex) {
        }
    };
    ModalProcura.prototype.OnRowsDblClickJS = function (s, e) {
        var campoID = this.hdnCampoID.value;
        if (String.IsNullOrWhiteSpace(campoID)) {
            return;
        }
        try {
            var valorCampoID = "" + e.data[campoID];
            this.SelecionarRegistro(valorCampoID);
            selecionarProximoFocus();
        }
        catch (ex) {
        }
    };
    ModalProcura.prototype.OnComboChange = function (ev) {
        this.criarCampoTipo($(ev.target).parent().parent().find(".tipo"), $(ev.target).find(":selected").attr("tipo"));
    };
    ModalProcura.prototype.OnPesquisarClick = function () {
        this.pesquisar();
    };
    ModalProcura.prototype.OnTextboxBlur = function () {
        if ($(this.DivCampos).find('[type="text"]').val() != this.HiddenBackup.value) {
            this.pesquisar();
        }
    };
    ModalProcura.prototype.CorrigirHeightGradeJS = function () {
        if (this.divGrade) {
            var tamanho = $(this.divGrade).height() - 30;
            if (tamanho < 100) {
                tamanho = 100;
            }
            this.grdProc.SetHeightGrid(tamanho);
        }
    };
    ModalProcura.prototype.OnGridCallBackError = function (s, e) {
        console.log(e.message);
    };
    ModalProcura.prototype.OnSelecionouCheckBoxInativo = function () {
        this.BotaoPesquisar.click();
    };
    ModalProcura.prototype.OnKeyDownModal = function () {
        shortcut.remove("esc");
        shortcut.add("esc", $.proxy(function () {
            this.OnESCTela();
        }, this), {
            'type': 'keydown',
            'propagate': false,
            'target': $("#" + this.ID)[0]
        });
    };
    ModalProcura.prototype.OnESCTela = function () {
        $(this.DivCampos).find('[type="text"]').val("");
        this.Modal.Hide();
        //var TextBoxProcura = <any>window[this.ComboClientID];
        var TextBoxProcura = $('#' + this.ComboClientID)[0];
        if (TextBoxProcura) {
            TextBoxProcura.focus();
        }
    };
    ModalProcura.prototype.IsProcuraCliente = function () {
        try {
            if (!String.IsNullOrWhiteSpace(this.Engine) && this.Engine.toLowerCase().indexOf("clienteprocura") > 0) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (ex) {
            return false;
        }
    };
    ModalProcura.prototype.OnGridCellPrepared = function (s, e) {
        try {
            if (this.IsProcuraCliente()) {
                if (e.rowType == "data" && e.data) {
                    //Dar prioridade de cor no BLOQUEADO. Isso acontece para farmácias que os usuários
                    //cadastram 3 clientes, um para cada tipo
                    var convenio = ("" + e.data["Convenio"]).CNum();
                    if (convenio > 0) {
                        e.cellElement.css("color", "red");
                    }
                    var bloquearCrediario = ("" + e.data["Bloquear_Crediario"]);
                    if (bloquearCrediario == "S") {
                        e.cellElement.css("color", "green");
                    }
                }
            }
        }
        catch (ex) {
        }
    };
    return ModalProcura;
}(MouraControl));
//# sourceMappingURL=ModalProcura.js.map