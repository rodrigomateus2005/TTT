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
var C_LayArqConv = /** @class */ (function (_super) {
    __extends(C_LayArqConv, _super);
    function C_LayArqConv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_LayArqConv.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayArqConv.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayArqConv.prototype, "cboSeparador", {
        get: function () {
            return window['cboSeparador_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayArqConv.prototype, "cboFormata", {
        get: function () {
            return window['cboFormata_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayArqConv.prototype, "cboAlinhamento", {
        get: function () {
            return window['cboAlinhamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayArqConv.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayArqConv.prototype, "cboCodCampo", {
        get: function () {
            return window['cboCodCampo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayArqConv.prototype, "txtTextoLivre", {
        get: function () {
            return window['txtTextoLivre_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayArqConv.prototype, "txtPosIni", {
        get: function () {
            return window['txtPosIni_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayArqConv.prototype, "txtPosFim", {
        get: function () {
            return window['txtPosFim_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayArqConv.prototype, "Item", {
        get: function () {
            var a = this.GetScope()['Item'];
            if (!a) {
                a = {};
            }
            return a;
        },
        set: function (value) {
            this.GetScope()['Item'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayArqConv.prototype, "Itens", {
        get: function () {
            return this.GetScope()['Itens'];
        },
        set: function (value) {
            this.GetScope()['Itens'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_LayArqConv.prototype, "grdItemLay", {
        get: function () {
            return window['grdItemLay_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_LayArqConv.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboCodCampo) {
            adicionarEventoMoura(this.cboCodCampo.SelectedItemChanged, this.OnSelectedItemChangeCampo, this);
        }
        if (this.txtPosIni) {
            adicionarEventoMoura(this.txtPosIni.TextChanged, this.ValidarPosicaoInicial, this);
        }
        if (this.txtPosFim) {
            adicionarEventoMoura(this.txtPosFim.TextChanged, this.ValidarPosicaoInicial, this);
        }
        if (this.grdItemLay) {
            adicionarEventoMoura(this.grdItemLay.Validando, this.OnValidando, this);
            adicionarEventoMoura(this.grdItemLay.Grid.SelecionouLinha, this.OnSelecionouLinha, this);
            adicionarEventoMoura(this.grdItemLay.LimpouItem, this.OnLimpouItens, this);
        }
    };
    C_LayArqConv.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.txtTextoLivre.Visible = false;
    };
    C_LayArqConv.prototype.OnSelectedItemChangeCampo = function (s, e) {
        this.cboFormata.Enabled = true;
        this.txtTextoLivre.Visible = this.cboCodCampo.GetValue() == '12';
        this.cboFormata.ClearItems();
        if (['1', '3', '13'].indexOf(this.cboCodCampo.GetValue()) !== -1) {
            this.MontarComboFormatacaoPorData();
        }
        if (['2', '4'].indexOf(this.cboCodCampo.GetValue()) !== -1) {
            this.MontarComboFormatacaoPorHora();
        }
        if (['5', '14'].indexOf(this.cboCodCampo.GetValue()) !== -1) {
            this.MontarComboFormatacaoPorValor();
        }
        if (['6', '7', '8', '9', '10', '11', '12'].indexOf(this.cboCodCampo.GetValue()) !== -1) {
            this.cboFormata.Enabled = false;
        }
    };
    C_LayArqConv.prototype.OnAntesDeletar = function () {
        _super.prototype.OnAntesDeletar.call(this);
        this.EntityTela.Itens = this.GetItens(this.EntityTela.Codigo);
        return true;
    };
    C_LayArqConv.prototype.GetItens = function (Codigo) {
        var parametros = { Codigo: this.EntityTela.Codigo };
        var cad = this.ExecutarFuncaoServerSideSynch('GetItensDB', parametros);
        this.EntityTela.Itens = cad;
        return this.EntityTela.Itens;
    };
    C_LayArqConv.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.Itens.length <= 0) {
            MostrarAlerta("Informe as informações do Campo Layout!");
            return false;
        }
        switch (this.cboSeparador.GetValue()) {
            case "0": {
                this.EntityTela.Separador = ".";
                break;
            }
            case "1": {
                this.EntityTela.Separador = ",";
                break;
            }
            case "2": {
                this.EntityTela.Separador = ";";
                break;
            }
            case "3": {
                this.EntityTela.Separador = ":";
                break;
            }
            case "4": {
                this.EntityTela.Separador = "|";
                break;
            }
            default: {
                this.EntityTela.Separador = " ";
                break;
            }
        }
        this.EntityTela.Itens = this.Itens;
        return true;
    };
    C_LayArqConv.prototype.MontarComboFormatacaoPorData = function () {
        var _this = this;
        var opcoes = [
            'DD/MM/AA',
            'DD/MM/AAAA',
            'DDMMAA',
            'DDMMAAAA',
            'AAAAMMDD',
            'AAAA-MM-DD',
            'MM/AA'
        ];
        opcoes.forEach(function (opcao, index) { return _this.cboFormata.AddItem(opcao, index, ''); });
    };
    C_LayArqConv.prototype.MontarComboFormatacaoPorHora = function () {
        var _this = this;
        var opcoes = [
            { Formato: 'HH:MM:SS', index: 7 },
            { Formato: 'HH:MM', index: 8 },
            { Formato: 'HHMM', index: 9 },
            { Formato: 'HHMMSS', index: 10 }
        ];
        opcoes.forEach(function (item) { return _this.cboFormata.AddItem(item.Formato, item.index, ''); });
    };
    C_LayArqConv.prototype.MontarComboFormatacaoPorValor = function () {
        var _this = this;
        var opcoes = [
            { Formato: '9.99', index: 11 },
            { Formato: '9,99', index: 12 },
            { Formato: '999', index: 13 },
        ];
        opcoes.forEach(function (item) { return _this.cboFormata.AddItem(item.Formato, item.index, ''); });
    };
    C_LayArqConv.prototype.OnSelecionouLinha = function (e, s) {
        var _this = this;
        this.PreencherEntidade('' + s.rowKey);
        this.Item.Codigo_Campo = s.data.Codigo_Campo;
        this.Item.Texto_Livre = s.data.Texto_Livre;
        this.Item.Posicao_Inicial = s.data.Posicao_Inicial;
        this.Item.Posicao_Final = s.data.Posicao_Final;
        this.txtTextoLivre.Visible = s.data.Codigo_Campo == '12';
        this.cboFormata.Enabled = true;
        this.cboFormata.ClearItems();
        if ([1, 3].indexOf(s.data.Codigo_Campo) !== -1) {
            this.MontarComboFormatacaoPorData();
        }
        if ([2, 4].indexOf(s.data.Codigo_Campo) !== -1) {
            this.MontarComboFormatacaoPorHora();
        }
        if ([5].indexOf(s.data.Codigo_Campo) !== -1) {
            this.MontarComboFormatacaoPorValor();
        }
        if ([6, 7, 8, 9, 10, 11, 12].indexOf(s.data.Codigo_Campo) !== -1) {
            this.cboFormata.Enabled = false;
        }
        this.Item.Formatacao = s.data.Formatacao;
        var alinhamentos = [
            'Zeros a Esquerda',
            'Zeros a Direita',
            'Brancos a Esquerda',
            'Brancos a Direita'
        ];
        alinhamentos.forEach(function (alinhamento, index) {
            if (s.data.Alinhamento === alinhamento) {
                _this.Item.Alinhamento = index;
            }
        });
    };
    C_LayArqConv.prototype.OnValidando = function (s, e) {
        if (e.item.Codigo_Campo == 0) {
            this.ValidarItensLayout('Informe o campo do layout!', e);
            return;
        }
        if (e.item.Posicao_Inicial <= 0) {
            this.ValidarItensLayout('Informe a posição inicial do campo do layout!', e);
            this.txtPosIni.Focus;
            return;
        }
        if (e.item.Posicao_Final <= 0) {
            this.ValidarItensLayout('Informe a posição final do campo do layout!', e);
            this.txtPosFim.Focus;
            return;
        }
        e.item.Formatacao = this.cboFormata.GetText();
        e.item.Alinhamento = +this.cboAlinhamento.GetValue();
        this.RefreshAngular();
    };
    C_LayArqConv.prototype.ValidarItensLayout = function (mensagem, e) {
        MostrarAlerta(mensagem);
        e.cancelar = true;
        this.cboCodCampo.Focus();
    };
    C_LayArqConv.prototype.LimparCampos = function () {
        this.txtDescricao.Limpar();
        //this.txtSeparador.Limpar();
        this.txtCodigo.Limpar();
        this.grdItemLay.Limpar();
        this.RefreshAngular();
    };
    C_LayArqConv.prototype.OnLimpouItens = function () {
        this.Item.Formatacao = '';
        this.Item.Posicao_Inicial = 0;
        this.Item.Posicao_Final = 0;
        this.Item.Codigo_Campo = 0;
        this.Item.Texto_Livre = '';
        //this.Item.Alinhamento = -1;
        this.RefreshAngular();
    };
    C_LayArqConv.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Itens = [];
        this.Itens = Entity.Itens;
        //this.PreencherGrade(this.EntityTela);
        this.grdItemLay.Grid.PreencherGrid(Entity.Itens);
    };
    C_LayArqConv.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade(this.EntityTela); //Preenche a grade depois da gravação
        //this.LimparCampos();
        //this.OnLimpouItens();
        return true;
    };
    C_LayArqConv.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        switch (Entity.Separador) {
            case ".": {
                this.cboSeparador.SetValue("0");
                break;
            }
            case ",": {
                this.cboSeparador.SetValue("1");
                break;
            }
            case ";": {
                this.cboSeparador.SetValue("2");
                break;
            }
            case ":": {
                this.cboSeparador.SetValue("3");
                break;
            }
            case "|": {
                this.cboSeparador.SetValue("4");
                break;
            }
            default: {
                this.cboSeparador.SetValue("5");
                break;
            }
        }
        this.Itens = this.GetItens(Entity.Codigo);
        this.RefreshAngular();
    };
    C_LayArqConv.prototype.PreencherGrade = function (Codigo) {
        var _this = this;
        try {
            var parametros = { Codigo: Codigo.Codigo };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch('GetItensDB', parametros, function (d) {
                _this.EntityTela.Itens = GetRetornoAJAX(d);
                _this.grdItemLay.Grid.PreencherGrid(_this.EntityTela.Itens);
                fecharEspera();
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_LayArqConv.prototype.ValidarPosicaoInicial = function () {
        if (this.txtPosFim.GetText().CNum() > 0) {
            if (this.txtPosIni.GetText().CNum() > 0) {
                if (this.txtPosIni.GetText().CNum() > this.txtPosFim.GetText().CNum()) {
                    MostrarAlerta('Posição final tem que ser maior que a Posição Inicial');
                    this.txtPosFim.Focus();
                    return;
                }
            }
        }
    };
    return C_LayArqConv;
}(MouraPageCadastroAngular));
var c_LayArqConv = new C_LayArqConv();
//# sourceMappingURL=C_LayArqConv.js.map