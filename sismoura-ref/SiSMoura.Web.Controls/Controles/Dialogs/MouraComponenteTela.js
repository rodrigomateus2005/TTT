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
var MouraComponenteTela = /** @class */ (function (_super) {
    __extends(MouraComponenteTela, _super);
    function MouraComponenteTela() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.idCHKVisivel = 'chkVisivel';
        _this.idCHKObrigatorio = 'chkObrigatorio';
        return _this;
    }
    Object.defineProperty(MouraComponenteTela.prototype, "cbComponente", {
        get: function () {
            return window[this.ID + "_cbComponente_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComponenteTela.prototype, "Grid", {
        get: function () {
            return window[this.ID + "_Grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComponenteTela.prototype, "Modal", {
        get: function () {
            return window[this.ID + "_Modal_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComponenteTela.prototype, "hdnIDCampoCodigo", {
        get: function () {
            return $("#" + this.ID + "_hdnIDCampoCodigo")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComponenteTela.prototype, "BotaoCancelar", {
        get: function () {
            return window[this.ID + '_BotaoCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComponenteTela.prototype, "BotaoSalvar", {
        get: function () {
            return window[this.ID + '_BotaoSalvar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComponenteTela.prototype, "hdnSource", {
        get: function () {
            return $("#" + this.ID + "_hdnSource")[0];
        },
        enumerable: true,
        configurable: true
    });
    MouraComponenteTela.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.BotaoCancelar) {
            adicionarEventoMoura(this.BotaoCancelar.Click, this.OnClickBotaoCancelar, this);
        }
        if (this.BotaoSalvar) {
            adicionarEventoMoura(this.BotaoSalvar.Click, this.OnClickSalvarComponente, this);
        }
        if (this.Grid && this.Grid.Grid) {
            adicionarEventoMoura(this.Grid.CellPrepared, this.OnGridCellPrepared, this);
        }
    };
    MouraComponenteTela.prototype.OnClickBotaoCancelar = function (s, e) {
        e.processOnServer = false;
        this.hdnSource.value = "";
        this.Fechar();
    };
    MouraComponenteTela.prototype.Fechar = function () {
        if (this.Modal) {
            this.Modal.Hide();
        }
    };
    MouraComponenteTela.prototype.Abrir = function (tipo, idCampoCodigo) {
        if (!this.Modal) {
            return;
        }
        this.Grid.PreencherGrid([]);
        if (this.hdnIDCampoCodigo && idCampoCodigo) {
            this.hdnIDCampoCodigo.value = idCampoCodigo;
        }
        this.hdnSource.value = "";
        //this.Modal.ModalDialog.PerformCallback(tipo);
        this.ProcurarCampos(idCampoCodigo);
        this.Modal.ModalDialog.Show();
        this.Grid.Refresh();
    };
    MouraComponenteTela.prototype.OnChangeCheckBox = function (checkbox, visibleIndex, idChk) {
        var chk = $(checkbox).find("input")[0];
        if (chk) {
            if (idChk == this.idCHKVisivel) {
                this.Modal.ModalDialog.PerformCallback('visivel|' + chk.checked + '|' + visibleIndex.toString());
            }
            if (idChk == this.idCHKObrigatorio) {
                this.Modal.ModalDialog.PerformCallback('obrigatorio|' + chk.checked + '|' + visibleIndex.toString());
            }
        }
    };
    MouraComponenteTela.prototype.ProcurarCampos = function (campoCodigo) {
        var listaCampos = [];
        for (var key in window) {
            var value = window[key];
            if (value instanceof MouraCampo && !(value instanceof MouraAgrupamento)) {
                var controle = value;
                if (controle.ExibirNaConfiguracaoDeCampos) {
                    this.AdicionarItemLista(controle, campoCodigo, listaCampos);
                }
            }
        }
        this.Grid.PreencherGrid(listaCampos);
    };
    MouraComponenteTela.prototype.OnGridCellPrepared = function (s, e) {
        if (e.rowType == "data") {
            var dataField = e.column.dataField;
            if (String.IsNullOrWhiteSpace(dataField)) {
                return;
            }
            var linha = e.row.data;
            if (dataField == "Visivel" || dataField == "Obrigatorio") {
                var obrigatorioEnable = true;
                var visibleEnable = true;
                if (!linha.PermitirObrigatorio) {
                    obrigatorioEnable = false;
                }
                if (!linha.PermitirOcultar) {
                    visibleEnable = false;
                }
                if (linha.IsCampoCodigo) {
                    visibleEnable = false;
                    e.row.data['Visivel'] = true;
                    obrigatorioEnable = false;
                    e.row.data['Obrigatorio'] = false;
                }
                else if (linha.CampoObrigatorioFixo) {
                    visibleEnable = false;
                    e.row.data['Visivel'] = true;
                    obrigatorioEnable = false;
                    e.row.data['Obrigatorio'] = true;
                }
                if (dataField == "Obrigatorio") {
                    e.cellElement.find('.dx-checkbox').dxCheckBox("instance").option("disabled", !obrigatorioEnable);
                }
                else if (dataField == "Visivel") {
                    e.cellElement.find('.dx-checkbox').dxCheckBox("instance").option("disabled", !visibleEnable);
                }
            }
        }
    };
    MouraComponenteTela.prototype.AdicionarItemLista = function (campo, idCampoCodigo, listaCampos) {
        var item = {};
        var captionCampo = "";
        var captionAgrupamento = "";
        var permitirObrigatorio = true;
        var isCampoCodigo = false;
        if (campo.LabelControl && !$(campo.LabelControl).hasClass("invisible")) { //propriedade OcultarLabelNoAgrupamento = False
            captionCampo = campo.GetTextLabelControl();
        }
        if (campo instanceof MouraCheckBox && String.IsNullOrWhiteSpace(captionCampo)) {
            captionCampo = campo.Text;
        }
        if ($("#" + campo.id).parents("[moura-campo]").length > 0) {
            var agrupamento = window[$("#" + campo.id).parents("[moura-campo]")[0].id + '_Object'];
            if (agrupamento && agrupamento instanceof MouraAgrupamento) {
                captionAgrupamento = agrupamento.GetTextLabelControl();
            }
        }
        if (String.IsNullOrWhiteSpace(captionCampo)) {
            captionCampo = captionAgrupamento;
        }
        else if (!String.IsNullOrWhiteSpace(captionAgrupamento)) {
            captionCampo = captionAgrupamento + " -> " + captionCampo;
        }
        if (String.IsNullOrWhiteSpace(captionCampo) && !String.IsNullOrWhiteSpace(campo.LabelInicial)) {
            captionCampo = campo.LabelInicial;
        }
        if (String.IsNullOrWhiteSpace(captionCampo)) {
            return;
        }
        var modalPai = null;
        var captionModal = "";
        if (!String.IsNullOrWhiteSpace(campo.ModalPai)) {
            modalPai = window[campo.ModalPai];
            if (modalPai && modalPai.ModalDialog) {
                if (!modalPai.ExibirNaConfiguracaoDeCampos) {
                    //Se o campo estiver em um modal ele só pode ser exibido na configuração de campos,
                    // se o programador configurar o modal para ser exibido
                    return;
                }
                if (!String.IsNullOrWhiteSpace(modalPai.ModalDialog.GetHeaderText())) {
                    captionModal = modalPai.ModalDialog.GetHeaderText();
                }
                else {
                    captionModal = modalPai.ID;
                    if (!String.IsNullOrWhiteSpace(captionModal) && captionModal.startsWith("dlg")) {
                        captionModal = captionModal.substring(3);
                    }
                }
            }
        }
        if (campo instanceof MouraCheckBox) {
            permitirObrigatorio = false;
        }
        if (!campo.PermitirConfigurarObrigatorio) {
            permitirObrigatorio = false;
        }
        if (idCampoCodigo == campo.ID) {
            isCampoCodigo = true;
        }
        if (!String.IsNullOrWhiteSpace(captionModal)) {
            captionCampo = captionModal + " -> " + captionCampo;
        }
        item.CampoObrigatorioFixo = campo.Obrigatorio;
        item.BloquearAlteracao = false;
        item.Contador = listaCampos.length + 1;
        item.IDCampo = campo.ID;
        item.Campo = captionCampo;
        item.Obrigatorio = (campo.Obrigatorio || campo.ObrigatorioUsuario);
        item.ObrigatorioUsuario = campo.ObrigatorioUsuario;
        item.IsCampoCodigo = isCampoCodigo;
        //Utiliza a property VisibleInicial, pois o campo pode estar invisível por estar
        // dentro de uma aba oculta, por exemplo, porém ele estará invisível
        item.Visivel = campo.VisibleInicial;
        item.PermitirObrigatorio = permitirObrigatorio;
        item.PermitirOcultar = campo.PermitirOcultar;
        listaCampos.push(item);
    };
    MouraComponenteTela.prototype.OnClickSalvarComponente = function (s, e) {
        var _this = this;
        try {
            e.processOnServer = false;
            var retornoSTR;
            // componentes As String, nomeTela As String, tituloTela As String, codUsuario As Long
            var param = {
                componentes: JSON.stringify(this.Grid.DataSource),
                nomeTela: ValoresSismoura.NomeTela,
                tituloTela: document.title,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera("");
            this.ExecutarHttpRequestAsyncPost("SalvarControleTela", param, function (d) {
                MostrarMensagem("Configurações salvas com sucesso");
                _this.Fechar();
                window.location.reload();
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    return MouraComponenteTela;
}(MouraControl));
//# sourceMappingURL=MouraComponenteTela.js.map