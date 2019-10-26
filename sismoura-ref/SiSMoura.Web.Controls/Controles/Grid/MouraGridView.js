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
var MouraGridViewSelecionouEventArgs = /** @class */ (function (_super) {
    __extends(MouraGridViewSelecionouEventArgs, _super);
    function MouraGridViewSelecionouEventArgs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MouraGridViewSelecionouEventArgs;
}(MouraEventArgs));
var MouraGridView = /** @class */ (function (_super) {
    __extends(MouraGridView, _super);
    function MouraGridView(id) {
        var _this = _super.call(this, id) || this;
        _this.SelecionouCodigo = new MouraGenericEventHandler();
        return _this;
    }
    Object.defineProperty(MouraGridView.prototype, "Grid", {
        get: function () {
            return window[this.ID + "_Grid"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridView.prototype, "ModalGrafico", {
        get: function () {
            return window[this.ID + "_ModalGrafico_Modal"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridView.prototype, "botaoFullScreen", {
        get: function () {
            return window[this.ID + "_botaoFullScreen"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridView.prototype, "hdnCustomButton", {
        get: function () {
            return $("#" + this.ID + "_hdnCustomButton")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridView.prototype, "hdnTam", {
        get: function () {
            return $("#" + this.ID + "_hdnTam")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridView.prototype, "hdnIsFull", {
        get: function () {
            return $("#" + this.ID + "_hdnIsFull")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridView.prototype, "Painel", {
        get: function () {
            return $("#" + this.ID + "_Painel")[0];
        },
        enumerable: true,
        configurable: true
    });
    MouraGridView.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.Grid && this.Grid != null)
            adicionarEventoDevExpress(this.Grid.CustomButtonClick, this.GridCustomButtonClick, this);
        if (this.botaoFullScreen) {
            adicionarEventoDevExpress(this.botaoFullScreen.Click, this.onClickFullScreen, this);
        }
        if (this.Painel) {
            var pnGrade = $('#' + this.Painel.id);
            //No postback a grade está perdendo o fullscreen. O sistema deve voltar ela para fullscreen ao final de um postbak
            if (this.hdnIsFull && this.hdnIsFull.value == 'S' && !this.IsGradeFullScreen(pnGrade)) {
                this.GrdFullScreen();
            }
        }
    };
    MouraGridView.prototype.PerformCallback = function (args) {
        if (this.Grid) {
            if (!this.Grid.InCallback()) {
                this.Grid.PerformCallback(args);
            }
        }
    };
    MouraGridView.prototype.InCallback = function () {
        if (this.Grid) {
            return this.Grid.InCallback();
        }
        else {
            return false;
        }
    };
    MouraGridView.prototype.GridCustomButtonClick = function (s, e) {
        var lista;
        var x;
        if ((!this.hdnCustomButton) || (this.hdnCustomButton == null)) {
            return;
        }
        if (this.hdnCustomButton.value == '') {
            return;
        }
        lista = JSON.parse(this.hdnCustomButton.value.split("'").join('"'));
        if (lista.Botoes) {
            for (var x = 0; x < lista.Botoes.length; x++) {
                if (e.buttonID == lista.Botoes[x].IDBotao) {
                    this.urlPagina = lista.Botoes[x].URL;
                    s.GetRowValues(e.visibleIndex, lista.Botoes[x].FieldName, $.proxy(this.abrirURLPagina, this));
                }
            }
        }
    };
    MouraGridView.prototype.abrirURLPagina = function (id) {
        this.abrirTelaNovaAbaCampoCodigo(this.urlPagina, id);
    };
    MouraGridView.prototype.abrirPainelGrafico = function () {
        if (!this.ModalGrafico) {
            return;
        }
        if (!this.Grid) {
            return;
        }
        if (this.Grid.GetVisibleRowsOnPage() <= 0) {
            toastr.warning("Nenhum registro na grade");
            return;
        }
        this.ModalGrafico.PerformCallback('');
        this.ModalGrafico.Show();
    };
    MouraGridView.prototype.GrdFullScreen = function () {
        var pnGrade;
        var cssClass = 'DivGridfullscreen';
        var tam = $('#' + this.hdnTam.id).val();
        if (!tam) {
            tam = '300';
        }
        pnGrade = $('#' + this.Painel.id);
        //Se a div da grid estiver sem a classe fulscreen, quer dizer que 
        //ela está no tamanho original
        if (!this.IsGradeFullScreen(pnGrade)) {
            //Armazena o tamanho original da grid
            //pnGrade.val(this.Grid.GetHeight());
            $('#' + this.hdnTam.id).val(this.Grid.GetHeight());
        }
        //Altera a classe para deixa full screen ou remover a classe
        pnGrade.toggleClass(cssClass);
        var height;
        if (this.IsGradeFullScreen(pnGrade)) {
            //Se estiver com a classe FullScreen, aumenta o tamanho da grade
            height = Math.max(0, document.documentElement.clientHeight);
            height = height - 70;
            //hidden que armazena se a grade deve estar maximizada ou não
            this.hdnIsFull.value = 'S';
        }
        else {
            //Volta a grade ao tamanho original
            height = tam;
            //hidden que armazena se a grade deve estar maximizada ou não
            this.hdnIsFull.value = '';
        }
        //Altera o tamanho da grade
        this.Grid.SetHeight(height);
        this.Grid.AdjustControl();
    };
    MouraGridView.prototype.IsGradeFullScreen = function (pnGrade) {
        var cssClass = 'DivGridfullscreen';
        if (pnGrade.hasClass(cssClass)) {
            return true;
        }
        else {
            return false;
        }
    };
    MouraGridView.prototype.onClickFullScreen = function (s, e) {
        e.processOnServer = false;
        this.GrdFullScreen();
        return false;
    };
    MouraGridView.prototype.SelecionarCodigo = function (id) {
        if (this.SelecionouCodigo) {
            var args = new MouraGridViewSelecionouEventArgs();
            args.CodigoSelecionado = id;
            this.SelecionouCodigo.FireEvent(this, args);
        }
    };
    return MouraGridView;
}(MouraControl));
//# sourceMappingURL=MouraGridView.js.map