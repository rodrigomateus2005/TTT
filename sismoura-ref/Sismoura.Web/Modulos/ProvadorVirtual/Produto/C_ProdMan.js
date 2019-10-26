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
var C_ProdMan = /** @class */ (function (_super) {
    __extends(C_ProdMan, _super);
    function C_ProdMan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PATH_DOCUMENTOS = "~/Documentos/Produtos/";
        return _this;
    }
    Object.defineProperty(C_ProdMan.prototype, "Similares", {
        get: function () {
            return this.GridProdutosSimilares.DataSource;
        },
        set: function (value) {
            this.GridProdutosSimilares.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "txtPrecoCusto", {
        //get lstEmpresa(): MouraListBoxEmpresa {
        //    return window['lstEmpresa_Object'];
        //}
        get: function () {
            return window['txtPrecoCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "lblDataCadastro", {
        get: function () {
            return window['lblDataCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "lblDataAlteracao", {
        get: function () {
            return window['lblDataAlteracao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "txtMarkup_P", {
        get: function () {
            return window['txtMarkup_P_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "txtPrecoVenda", {
        get: function () {
            return window['txtPrecoVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "txtPrecoPorcentagem", {
        get: function () {
            return window['txtPrecoPorcentagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "hdnCampoAtualizar", {
        get: function () {
            return $('#hdnCampoAtualizar')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "hdnCalcularMargem", {
        get: function () {
            return $('#hdnCalcularMargem')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "mdConfigManequim", {
        get: function () {
            return window['mdConfigManequim_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "mdImportarDados", {
        get: function () {
            return window['mdImportarDados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "txtProdutoImportar", {
        get: function () {
            return window['txtProdutoImportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "txtProdutoSimilar", {
        get: function () {
            return window['txtProdutoSimilar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "hdnURLConsulta", {
        get: function () {
            return $('#hdnURLConsulta')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "btnHistoricoPreco", {
        get: function () {
            return window['btnHistoricoPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "btnGerarHistoricoPreco", {
        get: function () {
            return window['btnGerarHistoricoPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "cboHistoricoTipo", {
        get: function () {
            return window['cboHistoricoTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "cboHistoricoCampoAlterado", {
        get: function () {
            return window['cboHistoricoCampoAlterado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "mdHistoricoPreco", {
        get: function () {
            return window['mdHistoricoPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "txtPeriodoHistoricoPreco", {
        get: function () {
            return window['txtPeriodoHistoricoPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "grdHistoricoPreco", {
        get: function () {
            return window['grdHistoricoPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "btnInativos", {
        get: function () {
            return window['btnInativos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "mdInativosEmpresa", {
        get: function () {
            return window['mdInativosEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "grdInativosporEmpresas", {
        get: function () {
            return window['grdInativosporEmpresas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "lblProduto", {
        get: function () {
            return window['lblProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "btnOKInativo", {
        get: function () {
            return window['btnOKInativo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "GridProdutosSimilares", {
        get: function () {
            return window['GridProdutosSimilares_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "btnProdutosSimilares", {
        get: function () {
            return window['btnProdutosSimilares_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "mdSimilares", {
        get: function () {
            return window['mdSimilares_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "btnOkSimilares", {
        get: function () {
            return window['btnOkSimilares_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "btnAdicionarSimilar", {
        get: function () {
            return window['btnAdicionarSimilar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "btnConfigManequim", {
        get: function () {
            return window['btnConfigManequim_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "btnImportarDados", {
        get: function () {
            return window['btnImportarDados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "btnImportarProduto", {
        get: function () {
            return window['btnImportarProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "btnCancelarImportar", {
        get: function () {
            return window['btnCancelarImportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "txtMarca", {
        get: function () {
            return window['txtMarca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "lblInfFoto", {
        get: function () {
            return window['lblInfFoto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "Tab", {
        get: function () {
            return window['Tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "cboPrioridade", {
        get: function () {
            return window['cboPrioridade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "Manequim", {
        get: function () {
            var that = this.GetScope()["Manequim"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Manequim"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "Manequins", {
        get: function () {
            return this.GetScope()["Manequins"];
        },
        set: function (value) {
            this.GetScope()["Manequins"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "grdFotos", {
        get: function () {
            return window['grdFotos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "btnFotos", {
        get: function () {
            return window['btnFotos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "imgProduto", {
        get: function () {
            return window['imgProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "cboManequim", {
        get: function () {
            return window['cboManequim_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "btnAddManequim", {
        get: function () {
            return window['btnAddManequim_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "btnRemoverRoupa", {
        get: function () {
            return window['btnRemoverRoupa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "txtProvadorCodEcommerce", {
        get: function () {
            return window['txtProvadorCodEcommerce_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "btnFecharMdFotos", {
        get: function () {
            return window['btnFecharMdFotos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdMan.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ProdMan.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtMarkup_P) {
            adicionarEventoMoura(this.txtMarkup_P.TextChanged, this.OnTextBoxMarkupChange, this);
        }
        if (this.txtPrecoCusto) {
            adicionarEventoMoura(this.txtPrecoCusto.TextChanged, this.OnTextBoxPrecoCustoChange, this);
        }
        if (this.txtPrecoVenda) {
            adicionarEventoMoura(this.txtPrecoVenda.TextChanged, this.OnTextBoxPrecoVendaChange, this);
        }
        if (this.mdImportarDados && this.mdImportarDados.ModalDialog) {
            adicionarEventoDevExpress(this.mdImportarDados.ModalDialog.EndCallback, this.OnEndCallBackModalImportarDados, this);
        }
        if (this.btnInativos) {
            adicionarEventoMoura(this.btnInativos.Click, this.OnClickInativosPorEmpresa, this);
        }
        if (this.btnHistoricoPreco) {
            adicionarEventoMoura(this.btnHistoricoPreco.Click, this.OnClickHistoricoPreco, this);
        }
        if (this.btnGerarHistoricoPreco) {
            adicionarEventoMoura(this.btnGerarHistoricoPreco.Click, this.OnClickGerarHistorico, this);
        }
        if (this.btnOKInativo) {
            adicionarEventoMoura(this.btnOKInativo.Click, this.OnClickBotaoOKInativo, this);
        }
        if (this.btnProdutosSimilares) {
            adicionarEventoMoura(this.btnProdutosSimilares.Click, this.OnClickBotaoSimilares, this);
        }
        if (this.btnOkSimilares) {
            adicionarEventoMoura(this.btnOkSimilares.Click, this.OnClickOKSimilares, this);
        }
        if (this.btnAdicionarSimilar) {
            adicionarEventoMoura(this.btnAdicionarSimilar.Click, this.OnClickAdicionarSimilar, this);
        }
        if (this.btnConfigManequim) {
            adicionarEventoMoura(this.btnConfigManequim.Click, this.OnClickBtnConfigManequim, this);
        }
        if (this.btnImportarDados) {
            adicionarEventoMoura(this.btnImportarDados.Click, this.OnClickBotaoImportarDados, this);
        }
        if (this.btnCancelarImportar) {
            adicionarEventoMoura(this.btnCancelarImportar.Click, this.OnClickBotaoCancelarImportarDados, this);
        }
        if (this.btnImportarProduto) {
            adicionarEventoMoura(this.btnImportarProduto.Click, this.OnClickBotaoImportarProduto, this);
        }
        if (this.imgProduto) {
            adicionarEventoMoura(this.imgProduto.ImgUploadComplete, this.OnCarregouImagemRoupa, this);
        }
        if (this.btnAddManequim) {
            adicionarEventoMoura(this.btnAddManequim.Click, this.OnClickBtnAddManequim, this);
        }
        if (this.btnRemoverRoupa) {
            adicionarEventoMoura(this.btnRemoverRoupa.Click, this.LimparCanvasRoupa, this);
        }
        if (this.grdFotos) {
            adicionarEventoMoura(this.grdFotos.Grid.SelecionouLinha, this.OnGridFotosSelecionouItem, this);
            adicionarEventoMoura(this.grdFotos.Grid.ExcluiuLinhaGrade, this.OnGridFotosExcluiuItem, this);
        }
        if (this.btnFecharMdFotos) {
            adicionarEventoMoura(this.btnFecharMdFotos.Click, this.OnClickFecharModalFotos, this);
        }
        adicionarEventoJQuery(document, "DevExpressEndCallback", this.OnGlobalEndCallback, this);
    };
    C_ProdMan.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        var parametros;
        this.Limpar();
        //this.OnSelecionouEmpresa();
        if (this.Tab) {
            var visivel;
            if (ValoresSismoura.Sistema_Pais == 607 /* Portugal */) {
                visivel = true;
            }
            else {
                visivel = false;
            }
        }
        //var MarcaPadrao = this.ExecutarFuncaoServerSideSynch("GetMarcaPadrao", parametros);
        //this.txtMarca.Procurar(MarcaPadrao);
        setTimeout(function () {
            if (CNum(_this.ParametrosTela.Codigo) > 0 || CNum(_this.ParametrosTela.codigo) > 0) {
                return;
            }
            if (!String.IsNullOrWhiteSpace(_this.ParametrosTela.nome)) {
                _this.EntityTela.Nome = _this.ParametrosTela.nome;
            }
            if (!String.IsNullOrWhiteSpace(_this.ParametrosTela.custo)) {
                _this.EntityTela.Preco_Custo = CNum(_this.ParametrosTela.custo);
            }
            _this.RefreshAngular();
        }, 700);
        this.STAGE = new Konva.Stage({
            container: "cvManequim",
            width: 600,
            height: 600
        });
        this.LAYER = new Konva.Layer();
        this.STAGE.add(this.LAYER);
        this.imgProduto.btnLimpar.Visible = false;
        //if (!(<any>this.GetScope()).OnSelecionouEmpresa) {
        //    (<any>this.GetScope()).OnSelecionouEmpresa = $.proxy(this.OnSelecionouEmpresa, this);
        //    var that = this;
        //    this.GetScope().$watch(function () { return that.EntityTela.Provador_Empresa; }, (<any>this.GetScope()).OnSelecionouEmpresa);
        //}
        if (!this.GetScope().OnSelecionouManequim) {
            this.GetScope().OnSelecionouManequim = $.proxy(this.OnSelecionouManequim, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Manequim.Cod_Manequim; }, this.GetScope().OnSelecionouManequim);
        }
    };
    C_ProdMan.prototype.OnGlobalEndCallback = function () {
        var entity = this.EntityTela;
    };
    C_ProdMan.prototype.OnSelecionouEmpresa = function () {
        try {
            var empresaSelecionada = CNum(this.EntityTela.Provador_Empresa).toString();
            var parametros = {
                empresas: empresaSelecionada
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetManequimByEmpresa", parametros);
            this.cboManequim.ClearItems();
            for (var x = 0; x <= retorno.length - 1; x++) {
                this.cboManequim.AddItem(retorno[x].Descricao, retorno[x].Codigo, null);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        // ********* Múltiplas empresas *********
        //try {
        //    if (this.EntityTela) {
        //        var empresasSelecionadas = this.lstEmpresa.GetValues();
        //        if (empresasSelecionadas.length > 0) {
        //            var parametros: any = {
        //                empresas: empresasSelecionadas,
        //            }
        //            var retorno = this.ExecutarFuncaoServerSideSynch("GetManequimByEmpresa", parametros);
        //            this.cboManequim.ClearItems();
        //            for (var x = 0; x <= retorno.length - 1; x++) {
        //                this.cboManequim.AddItem(retorno[x].Descricao, retorno[x].Codigo, null);
        //            }
        //        }
        //    }
        //} catch (ex) {
        //    LogarException(ex);
        //}
    };
    C_ProdMan.prototype.OnSelecionouManequim = function () {
        if (!this.EntityTela || this.EntityTela.Codigo <= 0 || this.Manequim.Cod_Manequim == 0) {
            return;
        }
        if ((this.Manequim.Cod_Manequim == null || this.Manequim.Cod_Manequim <= 0) && this.EntityTela.Codigo > 0) {
            MostrarAlerta("Não foi possível encontrar este manequim, por favor contate o Suporte.");
            return;
        }
        try {
            var parametros;
            this.LimparCanvasManequim();
            this.LimparCanvasRoupa();
            parametros = {
                codProduto: this.EntityTela.Codigo,
                codManequim: this.Manequim.Cod_Manequim,
                validarUnico: true
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetManequinsByProduto", parametros);
            var imgBytes = retorno.imgManequim;
            var imgManequim = new Image();
            imgManequim.src = 'data:image/png;base64,' + ByteArrayToSting64(imgBytes);
            imgManequim.onload = function () {
                var width = imgManequim.width;
                var height = imgManequim.height;
                if (width > 400 || height > 600) {
                    var hRatio = 400 / imgManequim.width;
                    var vRatio = 600 / imgManequim.height;
                    var ratio = Math.min(hRatio, vRatio);
                    width = Math.ceil(width * ratio);
                    height = Math.ceil(height * ratio);
                }
                var manequim = new Konva.Image({
                    x: 0,
                    y: 0,
                    image: imgManequim,
                    width: width,
                    height: height,
                    name: 'manequim'
                });
                c_ProdMan.LAYER.add(manequim);
                c_ProdMan.LAYER.draw();
            };
            if (retorno.Classe) {
                this.Manequim = retorno.Classe;
                var imgProduto = new Image();
                imgProduto.src = 'data:image/png;base64,' + ByteArrayToSting64(retorno.imgRoupa);
                this.DrawRoupa(imgProduto, this.Manequim.Imagem_Width, this.Manequim.Imagem_Height, this.Manequim.Imagem_Rotation, this.Manequim.Imagem_Left, this.Manequim.Imagem_Top, false);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ProdMan.prototype.OnCarregouImagemRoupa = function () {
        try {
            $('#imgProduto_Img').hide();
            this.imgProduto.Img.onload = function () {
                var imgProduto = new Image();
                imgProduto = c_ProdMan.imgProduto.Img;
                c_ProdMan.DrawRoupa(imgProduto, imgProduto.width, imgProduto.height, 0, 0, 0, true);
            };
        }
        catch (ex) {
            LogarException(ex);
        }
        //try {
        //    $('#imgProduto_Img').hide();
        //    var imgProduto = new Image();
        //    imgProduto = this.imgProduto.Img;
        //    setTimeout(() => {
        //        imgProduto.onload = function () {
        //            c_ProdMan.DrawRoupa(imgProduto, imgProduto.width, imgProduto.height, 0, 0, 0, true);
        //        };
        //    }, 1000);
        //} catch (ex) {
        //    LogarException(ex);
        //}
    };
    C_ProdMan.prototype.DrawRoupa = function (imgProduto, width, height, rotation, left, top, upload) {
        var _this = this;
        console.log(imgProduto.width + ' / ' + imgProduto.height);
        setTimeout(function () {
            var roupa;
            var imgRoupa = new Image();
            imgRoupa.src = imgProduto.src;
            _this.LimparCanvasRoupa();
            imgRoupa.onload = function () {
                console.log('Width: ' + width + ' / Height: ' + height);
                console.log('Width: ' + imgRoupa.width + ' / Height: ' + imgRoupa.height);
                if (upload && (width > 400 || height > 600)) {
                    var hRatio = 400 / imgRoupa.width;
                    var vRatio = 600 / imgRoupa.height;
                    var ratio = Math.min(hRatio, vRatio);
                    width = Math.ceil(width * ratio);
                    height = Math.ceil(height * ratio);
                    console.log('hRatio: ' + hRatio, ' / vRatio: ' + vRatio, ' / Ratio: ' + ratio);
                }
                roupa = new Konva.Image({
                    x: left,
                    y: top,
                    image: imgRoupa,
                    width: width,
                    height: height,
                    rotation: rotation,
                    name: 'roupa',
                    draggable: true
                });
                console.log(roupa.attrs);
                roupa.on('mouseenter', function () {
                    c_ProdMan.STAGE.container().style.cursor = 'move';
                });
                roupa.on('mouseleave', function () {
                    c_ProdMan.STAGE.container().style.cursor = 'default';
                });
                c_ProdMan.STAGE.on('click tap', function (e) {
                    //if click on empty area - remove all transformers
                    //if (e.target === c_ProdMan.STAGE) {
                    //    c_ProdMan.STAGE.find('Transformer').destroy();
                    //    c_ProdMan.LAYER.draw();
                    //    return;
                    //}
                    // do nothing if clicked NOT on our rectangles
                    if (!e.target.hasName('roupa')) {
                        //c_ProdMan.STAGE.find('Transformer').destroy();
                        //c_ProdMan.LAYER.draw();
                        return;
                    }
                    // remove old transformers
                    // TODO: we can skip it if current rect is already selected
                    c_ProdMan.STAGE.find('Transformer').destroy();
                    // create new transformer
                    var tr = new Konva.Transformer();
                    c_ProdMan.LAYER.add(tr);
                    tr.attachTo(e.target);
                    c_ProdMan.LAYER.draw();
                });
                c_ProdMan.LAYER.add(roupa);
                c_ProdMan.LAYER.draw();
                var roupaTeste = c_ProdMan.LAYER.find('.roupa')[0];
                if (roupaTeste) {
                    c_ProdMan.STAGE.fire("click", { target: roupaTeste });
                }
            };
        }, 500);
    };
    C_ProdMan.prototype.LimparCanvasRoupa = function () {
        try {
            this.imgProduto.Limpar();
            if (this.LAYER) {
                this.LAYER.find('.roupa').destroy();
                this.LAYER.draw();
            }
            if (this.STAGE) {
                this.STAGE.find('Transformer').destroy();
                this.LAYER.draw();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ProdMan.prototype.LimparCanvasManequim = function () {
        try {
            if (this.LAYER) {
                this.LAYER.find('.manequim').destroy();
                this.LAYER.draw();
            }
            if (this.STAGE) {
                this.STAGE.find('Transformer').destroy();
                this.LAYER.draw();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ProdMan.prototype.OnDepoisLimpar = function (Entity) {
        try {
            _super.prototype.OnDepoisLimpar.call(this, Entity);
            Entity.Data_Vigencia = new Date();
            Entity.Tipo_Produto = 1; //Revenda
            Entity.Provador_Empresa = ValoresSismoura.EmpresaPadraoUsuario;
            Entity.ProvadorEmpresas = [];
            Entity.ProvadorManequins = [];
            Entity.Fornecedores = [];
            Entity.Similares = [];
            Entity.Estoques = [];
            Entity.Inativo_Empresas = [];
            Entity.Codigos_Barras = [];
            Entity.RegrasImposto = [];
            Entity.Regras_Imposto_CFOP = [];
            Entity.Sinonimos = [];
            Entity.Excipientes = [];
            Entity.Anilhas = [];
            Entity.EstoqueProduto = [];
            this.Similares = [];
            this.Manequins = [];
            this.LimparManequim();
            this.LimparCanvasRoupa();
            this.LimparCanvasManequim();
            this.criarEntidadePersonalizados(Entity);
            this.lblDataCadastro.Text = "";
            this.lblDataAlteracao.Text = "";
            Entity.Balanca = 0;
            //if (this.lstEmpresa) {
            //    this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
            //}
            if (!String.IsNullOrWhiteSpace(ValoresSismoura.ConfiguracoesRetaguarda.Unidade_Padrao) && ValoresSismoura.ConfiguracoesRetaguarda.Unidade_Padrao != "#Nenhuma") {
                Entity.Unidade = ValoresSismoura.ConfiguracoesRetaguarda.Unidade_Padrao;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ProdMan.prototype.ValidaEmpresaUnico = function () {
        try {
            var empresas = CNum(this.EntityTela.Provador_Empresa).toString();
            var parametros = {
                codProduto: CNum(this.EntityTela.Codigo),
                codEcommerce: "",
                empresas: empresas
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ValidaEmpresaUnico", parametros);
            if (retorno.length <= 0) {
                return false;
            }
            return true;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ProdMan.prototype.OnDepoisBuscarExistente = function (Entidade) {
        try {
            _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
            var tela = this;
            var parametros;
            //if (Entidade.Carregado) {
            //    this.lblProdutoEcommerce.Visible = true;
            //} else {
            //    this.lblProdutoEcommerce.Visible = false;
            //}
            //if (!Entidade.ProvadorEmpresas) {
            //    Entidade.ProvadorEmpresas = [];
            //}
            //if (this.lstEmpresa) {
            //    var selecionar: string[] = [];
            //    for (var x = 0; x <= Entidade.ProvadorEmpresas.length - 1; x++) {
            //        selecionar.push("" + Entidade.ProvadorEmpresas[x].Cod_Empresa);
            //    }
            //    this.lstEmpresa.LimparSelecao();
            //    this.lstEmpresa.SetValues(selecionar);
            //}
            //this.OnSelecionouEmpresa();
            this.PreencherGradeManequins(Entidade);
            var pCusto = 0, pProduto = 0, pUnidade = "", pPeso = 0;
            if (Entidade.Preco_Custo) {
                pCusto = Entidade.Preco_Custo;
            }
            if (Entidade.Preco_Produto) {
                pProduto = Entidade.Preco_Produto;
            }
            if (Entidade.Unidade) {
                pUnidade = Entidade.Unidade;
            }
            if (Entidade.Peso_Produto) {
                pPeso = Entidade.Peso_Produto;
            }
            //parametros = {
            //    codProduto: ("" + Entidade.Codigo).CNum(),
            //    precoCusto: pCusto,
            //    precoProduto: pProduto,
            //    unidadeProduto: pUnidade,
            //    pesoProduto: pPeso,
            //}
            //var InformacoesAdicionais = this.ExecutarFuncaoServerSideSynch("GetInformacoesAdicionaisProduto", parametros);
            //this.Fornecedores = InformacoesAdicionais.Fornecedores;
            //this.Similares = InformacoesAdicionais.Similares;
            //this.RegrasCFOP = InformacoesAdicionais.RegrasCFOP;
            //this.Excipientes = InformacoesAdicionais.Excipientes;
            //this.Anilhas = InformacoesAdicionais.Anilhas;
            //this.DepositoEstoques = InformacoesAdicionais.Estoques;
            //Entidade.Margem = InformacoesAdicionais.Margem;
            //this.txtMargemReal.SetText((<number>InformacoesAdicionais.MargemReal).Format(this.txtMargemReal.QuantidadeCasas));
            if (Entidade.Data_Cadastro) {
                this.lblDataCadastro.Text = Entidade.Data_Cadastro.toString().ToDate().FormataData();
            }
            if (Entidade.Data_Alteracao) {
                this.lblDataAlteracao.Text = Entidade.Data_Alteracao.toString().ToDate().FormataData();
            }
            this.criarEntidadePersonalizados(Entidade);
            //Carregar grade de manequins vinculados
            this.LimparCanvasManequim();
            var parametros;
            parametros = {
                codPlano: Entidade.Codigo
            };
            //var retorno = this.ExecutarFuncaoServerSideSynch("GetServicos", parametros);
            //this.Manequins = retorno.Servicos;
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
            this.Limpar();
        }
    };
    C_ProdMan.prototype.LimparManequim = function () {
        this.Manequim.Id = 0;
        this.Manequim.Cod_Manequim = 0;
        this.Manequim.Cod_Produto = 0;
        this.Manequim.Url_Imagem = '';
        this.Manequim.Imagem_Height = 0;
        this.Manequim.Imagem_Width = 0;
        this.Manequim.Imagem_Left = 0;
        this.Manequim.Imagem_Top = 0;
        this.Manequim.Imagem_Rotation = 0;
        this.Manequim.Desc_Manequim = '';
        this.RefreshAngular();
    };
    C_ProdMan.prototype.OnAntesGravar = function () {
        try {
            _super.prototype.OnAntesGravar.call(this);
            var produto = this.GetScope().Entity;
            produto.Unidade = "UN";
            produto.Data_Vigencia = this.DataServidor();
            produto.Status = "1";
            produto.Balanca = 0;
            produto.Self_Service = 0;
            produto.Estoque_Minimo_Dias = null;
            produto.Estoque_Maximo_Dias = null;
            //if (this.chkProdutoImportado.Checked) {
            //    produto.Produto_Importado = 1;
            //} else {
            //    produto.Produto_Importado = 0;
            //}
            //if (!produto.Produto_Internet || produto.Produto_Internet <= 0) {
            //    produto.txtCodigoInternet = null;
            //}
            this.PreencherListaInativos(produto); //Inativos por Empresa
            this.PreencherListaSimilares(produto);
            //this.PreencherListaEmpresas(produto);
            this.PreencherListaManequins(produto);
            if (!this.ValidarAntesGravar(produto)) {
                return false;
            }
            return true;
        }
        catch (ex) {
            LogarException(ex);
            return false;
        }
    };
    C_ProdMan.prototype.ValidarAntesGravar = function (produto) {
        try {
            var retornoAntesGravar;
            var parametros;
            parametros = {
                Entidade: JSON.stringify(produto),
                strListaRegrasImposto: null,
            };
            retornoAntesGravar = this.ExecutarFuncaoServerSideSynch("ValidarAntesGravar", parametros);
            if (!String.IsNullOrWhiteSpace(retornoAntesGravar)) {
                MostrarAlerta(retornoAntesGravar);
                return false;
            }
            //var foto = this.imgProduto.FormatImg();
            //if (foto == undefined) {
            //    MostrarAlerta("Preencha o campo corretamente: Foto do Produto.");
            //    return false;
            //}
            //TO-DO: Usar a verificação abaixo na validação dos componentes do provador
            //var tela = this;
            //if (!produto.AuxIsGerarCodBarras) {
            //    if ((!this.chkProdutoBalanca.Check) || (!produto.Balanca) || ValoresSismoura.ConfiguracoesRetaguarda.Gerar_Barra_Balanca) {
            //        if (ValoresSismoura.ConfiguracoesRetaguarda.Gerar_Codigo_Barras && String.IsNullOrWhiteSpace(produto.Codigo_Barra)) {
            //            if (!this.ConfiguracoesGravarProduto.PerguntouCodigoBarra) {
            //                MsgBoxJS("O produto não possui código de barras.Deseja que o sistema gere?",
            //                    MsgBoxOptions.YesNo,
            //                    MsgBoxIcon.Question,
            //                    function (e: MsgBoxResultEventArgs) {
            //                        tela.ConfiguracoesGravarProduto.PerguntouCodigoBarra = true;
            //                        produto.AuxIsGerarCodBarras = (e.Resultado == MsgBoxResult.Yes ? true : false);
            //                        tela.ExecutarGravar();
            //                    }, null);
            //                return false
            //            } else {
            //                this.ConfiguracoesGravarProduto.PerguntouCodigoBarra = false;
            //            }
            //        }
            //    }
            //}
            return true;
        }
        catch (ex) {
            LogarException(ex);
            return false;
        }
    };
    C_ProdMan.prototype.ExecutarGravar = function () {
        this.ClicarGravar();
    };
    C_ProdMan.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGradeManequins(this.EntityTela);
        this.EntityTela.AuxIsGerarCodBarras = false;
        //this.AtualizarFotosProduto(this.EntityTela);
        return true;
    };
    C_ProdMan.prototype.PreencherFornecedoresEntity = function (Entity) {
        Entity.Fornecedores = [];
        //Usar esta função para preencher as listas da tela
        //for (var x = 0; x <= this.Fornecedores.length - 1; x++) {
        //    var pf = <SiSMoura.Core.Entity.Produto_Fornecedor>{};
        //    var item = this.Fornecedores[x];
        //    pf.Codigo = item.Codigo;
        //    pf.Codigo_Produto_Fornecedor = item.Codigo_Produto_Fornecedor;
        //    pf.Data_Carga = new Date();
        //    pf.Empresa = item.Codigo_Empresa;
        //    pf.Entr_Prod_Converter_Calculo = item.Calculo;
        //    pf.Entr_Prod_Converter_Unidade = item.Unidade_Calculo;
        //    pf.Entr_Prod_Converter_Valor = item.Valor_Calculo;
        //    pf.Fornecedor = item.Codigo_Fornecedor;
        //    pf.Ressuprimento = item.Ressuprimento;
        //    Entity.Fornecedores.push(pf);
        //}
    };
    C_ProdMan.prototype.OnClickHistoricoPreco = function (s, e) {
        e.processOnServer = false;
        this.txtPeriodoHistoricoPreco.Iniciar();
        this.cboHistoricoTipo.SetValue(0);
        this.cboHistoricoCampoAlterado.SetValue(0);
        this.mdHistoricoPreco.Show();
    };
    C_ProdMan.prototype.OnClickGerarHistorico = function (s, e) {
        try {
            e.processOnServer = false;
            var parametros;
            var Historico;
            if (this.txtCodigo.GetText().CNum() <= 0) {
                return;
            }
            parametros = {
                codProduto: this.txtCodigo.GetText().CNum(),
                dataInicio: this.txtPeriodoHistoricoPreco.textBoxCalendarioInicio.GetDate(),
                dataFim: this.txtPeriodoHistoricoPreco.textBoxCalendarioFim.GetDate(),
                tipoRegistro: this.cboHistoricoTipo.GetValue().CNum(),
                campoAlterado: this.cboHistoricoCampoAlterado.GetValue().CNum()
            };
            Historico = this.ExecutarFuncaoServerSideSynch("PreencherGradeHistorico", parametros);
            if (Historico) {
                this.grdHistoricoPreco.PreencherGrid(Historico);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ProdMan.prototype.OnClickBtnConfigManequim = function (s, e) {
        var _this = this;
        try {
            if (this.EntityTela.Codigo > 0) {
                e.processOnServer = false;
                setTimeout(function () {
                    _this.grdFotos.AtualizarGrid();
                }, 200);
                this.OnSelecionouEmpresa();
                this.mdConfigManequim.Show();
            }
            else {
                MostrarAlerta("É necessário gravar o produto antes de vincular manequins! Por favor, finalize o cadastro ou busque um produto existente.");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ProdMan.prototype.OnClickInativosPorEmpresa = function (s, e) {
        try {
            e.processOnServer = false;
            var parametros;
            var empresas;
            this.lblProduto.Text = this.txtDescricao.GetText();
            this.mdInativosEmpresa.Show();
            this.grdInativosporEmpresas.Refresh();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ProdMan.prototype.selecionarCheck = function (atributoAngular, valor) {
        this.EntityTela[atributoAngular] = valor;
        this.RefreshAngular();
    };
    C_ProdMan.prototype.OnEndCallBackModalImportarDados = function () {
        this.txtProdutoImportar.Focus();
    };
    C_ProdMan.prototype.OnTextBoxMarkupChange = function () {
        return this.AtualizarValorVenda();
    };
    //protected OnPesquisouFornecedor(s: MouraTextBoxProcura, e: MouraEventArgs) {
    //    var parametros: any;
    //    var retorno: boolean;
    //    if (this.txtFornecedor.GetText().CNum() <= 0) {
    //        return;
    //    }
    //    parametros = {
    //        codFornecedor: this.txtFornecedor.GetText().CNum()
    //        , codEmpresa: this.cboEmpresaFornecedor.GetValue()
    //    }
    //    retorno = this.ExecutarFuncaoServerSideSynch("isFornecedorPertenceEmpresa", parametros);
    //    if (!retorno) {
    //        this.txtFornecedor.Limpar();
    //        this.txtFornecedor.LimparParametros();
    //        MostrarAlerta("Este fornecedor não pertence a empresa selecionada!");
    //        this.txtFornecedor.Focus();
    //        return;
    //    }
    //}
    C_ProdMan.prototype.OnTextBoxPrecoCustoChange = function () {
        return this.AtualizarValoresProduto();
    };
    C_ProdMan.prototype.OnTextBoxPrecoVendaChange = function () {
        this.AtualizarMargem();
        this.AtualizarMarkup();
        if (this.txtPrecoVenda.Textbox.value.CNum() == 0) {
            this.txtPrecoVenda.Textbox.value = "";
        }
        else if (this.txtPrecoPorcentagem && this.txtPrecoPorcentagem.Textbox) {
            this.txtPrecoPorcentagem.Textbox.value = "";
        }
    };
    //protected OnAdicionouCodigoECommerce() {
    //    try {
    //        if ((!this.EntityTela.Provador_CodEcommerce || this.EntityTela.Provador_CodEcommerce <= 0)) {
    //            return;
    //        }
    //        var parametros: any = {
    //            codProduto: this.EntityTela.Codigo,
    //            codEcommerce: this.EntityTela.Provador_CodEcommerce
    //        }
    //        var retorno: any = this.ExecutarFuncaoServerSideSynch("ValidaCodEcommerce", parametros);
    //        //if (retorno.length > 0) {
    //        //    MostrarAlerta("");
    //        //    this.txtProvadorCodEcommerce.Focus();
    //        //    return;
    //        //}
    //    } catch (ex) {
    //        LogarException(ex);
    //    }
    //}
    C_ProdMan.prototype.AtualizarValoresProduto = function () {
        var parametros;
        if (this.hdnCampoAtualizar.value == "M") {
            this.AtualizarMargem();
            this.AtualizarMarkup();
        }
        else {
            this.AtualizarValorVenda();
        }
    };
    C_ProdMan.prototype.AtualizarValorVenda = function () {
        try {
            var precoVenda;
            var parametros;
            //if (ValoresSismoura.Sistema_Pais == SiSMoura.Core.Common.ConfiguracoesRetaguarda.tpPais.Portugal) {
            //    var IVA = this.cboTaxa_IVA.GetValue();
            //    var precoCusto = this.txtPrecoCusto.GetText().CNum();
            //    var margem = this.txtMarkup_P.GetText().CNum();
            //    if (margem > 0) {
            //        margem += 100;
            //    }
            //    var PVP = (precoCusto / 100) * margem;
            //    PVP = PVP * (IVA / 100 + 1);
            //    this.EntityTela.Preco_Produto = PVP;
            //} else {
            parametros = {
                precoCusto: this.txtPrecoCusto.GetText().CNum(),
                margem: this.txtMarkup_P.GetText().CNum()
            };
            precoVenda = this.ExecutarFuncaoServerSideSynch("ObterPrecoVenda", parametros);
            this.EntityTela.Preco_Produto = precoVenda;
            //}
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ProdMan.prototype.AtualizarMarkup = function () {
        var MarkUp;
        var Lucro;
        var Custo;
        Custo = this.txtPrecoCusto.GetText().CNum();
        Lucro = this.txtPrecoVenda.GetText().CNum() - Custo;
        if (Custo > 0) {
            MarkUp = ((Lucro / Custo) * 100);
        }
        ;
        this.txtMarkup_P.SetText(MarkUp.Format(2));
    };
    C_ProdMan.prototype.AtualizarMargem = function () {
        try {
            var parametros;
            //if (ValoresSismoura.Sistema_Pais == SiSMoura.Core.Common.ConfiguracoesRetaguarda.tpPais.Portugal) {
            //    var IVA = this.cboTaxa_IVA.GetValue();
            //    var precoCusto = this.txtPrecoCusto.GetText().CNum();
            //    var PVP = this.txtPrecoVenda.GetText().CNum();
            //    var PvpSIva = PVP / (IVA / 100 + 1);
            //    var margem = (PvpSIva - precoCusto) * 100 / precoCusto;
            //    this.EntityTela.Margem = margem;
            //} else {
            var margem;
            parametros = {
                precoCusto: this.txtPrecoCusto.GetText().CNum(),
                precoVenda: this.txtPrecoVenda.GetText().CNum()
            };
            margem = this.ExecutarFuncaoServerSideSynch("ObterMargemProduto", parametros);
            //if (this.hdnCalcularMargem.value == "1") {
            //    this.EntityTela.Margem = margem
            //}
            //}
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    //protected PreencherGradeRegraImposto(entity: SiSMoura.Core.Entity.Produto) {
    //    this.LimparGradeRegraImposto();
    //    if (!entity.RegrasImposto) {
    //        entity.RegrasImposto = [];
    //    }
    //    var lista = this.RegrasLimpo;
    //    for (var x = 0; x <= entity.RegrasImposto.length - 1; x++) {
    //        var result = $.grep(lista, function (e) { return e.Codigo_Empresa == entity.RegrasImposto[x].Empresa; });
    //        if (result && result.length > 0) {
    //            result[0].Codigo_Empresa = entity.RegrasImposto[x].Empresa;
    //            result[0].Codigo_Tipo_Regra = entity.RegrasImposto[x].Tipo_Regra_Imposto;
    //            result[0].Pauta_Valor = entity.RegrasImposto[x].Pauta_Valor_Money;
    //        }
    //    }
    //    this.RegrasImposto = lista;
    //}
    //protected PreencherGradeInativos(entity: SiSMoura.Core.Entity.Produto) {
    //    this.LimparGradeInativos();
    //    if (!entity.Inativo_Empresas) {
    //        entity.Inativo_Empresas = [];
    //    }
    //    var lista = this.EmpresasLimpo;
    //    for (var x = 0; x <= entity.Inativo_Empresas.length - 1; x++) {
    //        var result = $.grep(lista, function (e) { return e.Empresa == entity.Inativo_Empresas[x].Empresa; });
    //        if (result && result.length > 0) {
    //            result[0].Id = entity.Inativo_Empresas[x].Id;
    //            result[0].Empresa = entity.Inativo_Empresas[x].Empresa;
    //            result[0].Inativo = true;
    //        }
    //    }
    //    this.grdInativosporEmpresas.PreencherGrid(lista);
    //}
    C_ProdMan.prototype.PreencherListaInativos = function (entity) {
        entity.Inativo_Empresas = [];
        var lista = this.grdInativosporEmpresas.DataSource;
        for (var x = 0; x <= lista.length - 1; x++) {
            if (lista[x].Inativo) {
                var item = {};
                item.Data_Carga = new Date();
                item.Empresa = lista[x].Empresa;
                item.Id = lista[x].Id;
                item.Produto = this.txtCodigo.GetText().CNum();
                entity.Inativo_Empresas.push(item);
            }
        }
    };
    //protected PreencherListaEmpresas(entity: SiSMoura.Core.Entity.Produto) {
    //    if (this.lstEmpresa) {
    //        if (!entity.ProvadorEmpresas) {
    //            entity.ProvadorEmpresas = [];
    //        }
    //        var valores: string[] = this.lstEmpresa.GetValues();
    //        //Verifica as empresas que não estão na lista a ser salva
    //        for (var x = 0; x <= valores.length - 1; x++) {
    //            var empresa: SiSMoura.Core.Entity.Provador_Produto_Empresa = this.ProcuraEmpresa(valores[x].CNum(), entity.ProvadorEmpresas);
    //            if (!empresa) {
    //                empresa = <any>{};
    //                empresa.Id = 0;
    //                empresa.Cod_Empresa = valores[x].CNum();
    //                //empresa.Cod_Produto = entity.Codigo;
    //                entity.ProvadorEmpresas.push(empresa);
    //            }
    //        }
    //        //Remove da lista as empresas que foram desmarcadas
    //        var count = 0;
    //        while (count <= entity.ProvadorEmpresas.length - 1) {
    //            var temp = entity.ProvadorEmpresas[count];
    //            var index = valores.indexOf("" + temp.Cod_Empresa);
    //            //Caso a empresa não esteja selecionada na lista, deve removê-la 
    //            if (index < 0) {
    //                entity.ProvadorEmpresas.splice(count, 1);
    //                count -= 1;
    //            }
    //            count += 1;
    //        }
    //    }
    //    this.GetScope().Entity = entity;
    //}
    C_ProdMan.prototype.ProcuraEmpresa = function (codEmpresa, lista) {
        var retorno = null;
        if (!lista) {
            lista = [];
        }
        for (var x = 0; x <= lista.length - 1; x++) {
            if (lista[x].Cod_Empresa == codEmpresa) {
                retorno = lista[x];
                break;
            }
        }
        return retorno;
    };
    //public VerificaManequimAntesGravar() {
    //    let x = this.EntityTela.ProvadorEmpresas.length - 1;
    //    for each empresa in this.EntityTela.ProvadorEmpresas{
    //    }
    //}
    C_ProdMan.prototype.OnClickBtnAddManequim = function () {
        if (this.LAYER.find('.roupa').length <= 0) {
            MostrarAlerta("Não foi encontrada nenhuma roupa sobre o manequim!");
            return;
        }
        try {
            this.Manequim.Cod_Manequim = CNum(this.Manequim.Cod_Manequim);
            this.Manequim.Cod_Produto = CNum(this.EntityTela.Codigo);
            this.Manequim.Imagem_Height = CNum(this.LAYER.find('Transformer')[0].children[0].attrs.height);
            this.Manequim.Imagem_Width = CNum(this.LAYER.find('Transformer')[0].children[0].attrs.width);
            this.Manequim.Imagem_Left = CNum(this.LAYER.find('.roupa')[0].attrs.x);
            this.Manequim.Imagem_Top = CNum(this.LAYER.find('.roupa')[0].attrs.y);
            this.Manequim.Imagem_Rotation = CNum(this.LAYER.find('.roupa')[0].attrs.rotation);
            var parImagem = {
                codProduto: this.Manequim.Cod_Produto,
                codManequim: this.Manequim.Cod_Manequim,
            };
            this.Manequim.Url_Imagem = this.ExecutarFuncaoServerSideSynch("GetCaminhoImagem", parImagem);
            //this.Manequins.push(this.Manequim);
            var parametros = {
                strClasse: JSON.stringify(this.Manequim),
                arquivoImagem: Sting64ToByteArray(this.FormatImg(this.LAYER.find('.roupa')[0].attrs.image.src)),
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            this.ExecutarFuncaoServerSideSynch("GravarProdutoManequim", parametros);
            this.LimparCanvasRoupa();
            this.LimparCanvasManequim();
            this.LimparManequim();
            this.PreencherGradeManequins(this.EntityTela);
            MostrarMensagem("Manequim adicionado com sucesso!");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ProdMan.prototype.PreencherListaManequins = function (entity) {
        entity.ProvadorManequins = this.Manequins;
    };
    C_ProdMan.prototype.PreencherGradeManequins = function (entity) {
        try {
            this.Manequins = [];
            var parametros;
            var retorno;
            parametros = {
                codProduto: entity.Codigo,
                codManequim: 0,
                validarUnico: false
            };
            retorno = this.ExecutarFuncaoServerSideSynch("GetManequinsByProduto", parametros);
            if (retorno) {
                this.Manequins = retorno.Manequins;
                this.RefreshAngular();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ProdMan.prototype.OnGridFotosSelecionouItem = function (s, e) {
        //this.cboManequim.SetValue(this.Manequim.Cod_Manequim);
        this.OnSelecionouManequim();
    };
    C_ProdMan.prototype.OnGridFotosExcluiuItem = function (s, e) {
        this.Manequim = e.item;
        var parametros = {
            strClasse: JSON.stringify(this.Manequim),
            nomeTela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        this.ExecutarFuncaoServerSideSynch("ExcluirProdutoManequim", parametros);
        this.LimparManequim();
        this.LimparCanvasManequim();
        this.LimparCanvasRoupa();
        MostrarAlerta("Vínculo com o manequim excluído com sucesso!");
    };
    C_ProdMan.prototype.OnClickBotaoOKInativo = function (s, e) {
        e.processOnServer = false;
        this.mdInativosEmpresa.Hide();
    };
    C_ProdMan.prototype.OnClickBotaoSimilares = function (s, e) {
        e.processOnServer = false;
        this.mdSimilares.Show();
        this.txtProdutoSimilar.Limpar();
        this.txtProdutoSimilar.Focus();
        this.GridProdutosSimilares.Refresh();
    };
    C_ProdMan.prototype.OnClickOKSimilares = function (s, e) {
        e.processOnServer = false;
        this.mdSimilares.Hide();
    };
    C_ProdMan.prototype.OnClickAdicionarSimilar = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.txtProdutoSimilar.GetText().CNum() <= 0) {
                MostrarAlerta("Informe o produto");
                this.txtProdutoSimilar.Focus();
                return;
            }
            var item = {};
            var lista = this.Similares;
            var codigoProduto = this.txtProdutoSimilar.GetText().CNum();
            var result = [];
            if (lista.length > 0) {
                result = $.grep(lista, function (e) { return e.Codigo_Produto == codigoProduto; });
            }
            if (result && result.length > 0) {
                MostrarAlerta("Este produto já foi informado");
                this.txtProdutoSimilar.Focus();
                return;
            }
            var parametros = {
                codProduto: codigoProduto
            };
            var qtdeEstoque = this.ExecutarFuncaoServerSideSynch("GetEstoqueProduto", parametros);
            var maiorContador;
            if (lista.length > 0) {
                maiorContador = Math.max.apply(Math, lista.map(function (o) { return o.Contador; })) + 1;
            }
            else {
                maiorContador = 1;
            }
            item.ID = 0;
            item.Contador = maiorContador;
            item.Nome_Produto = this.txtProdutoSimilar.GetResultado();
            item.Estoque_Produto = qtdeEstoque;
            item.Codigo_Produto = codigoProduto;
            lista.push(item);
            this.Similares = lista;
            this.txtProdutoSimilar.Limpar();
            this.txtProdutoSimilar.Focus();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ProdMan.prototype.PreencherListaSimilares = function (entity) {
        entity.Similares = [];
        var lista = this.GridProdutosSimilares.DataSource;
        for (var x = 0; x <= lista.length - 1; x++) {
            var item = {};
            item.Produto = this.txtCodigo.GetText().CNum();
            item.Similar = lista[x].Codigo_Produto;
            item.Id = lista[x].ID;
            entity.Similares.push(item);
        }
    };
    C_ProdMan.prototype.OnClickBotaoImportarDados = function (s, e) {
        e.processOnServer = false;
        this.mdImportarDados.Show();
        this.txtProdutoImportar.Limpar();
        this.txtProdutoImportar.Focus();
    };
    C_ProdMan.prototype.OnClickBotaoCancelarImportarDados = function (s, e) {
        e.processOnServer = false;
        this.mdImportarDados.Hide();
    };
    C_ProdMan.prototype.OnClickBotaoImportarProduto = function (s, e) {
        e.processOnServer = false;
        if (this.txtProdutoImportar.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o produto que deseja importar!");
            this.txtProdutoImportar.Focus();
            return;
        }
        this.Limpar();
        this.PreencherEntidade(this.txtProdutoImportar.GetText());
        this.GetScope().Entity.Codigo = 0;
        this.GetScope().$applyAsync();
        this.mdImportarDados.Hide();
        return false;
    };
    //protected OnClickBotaoNovoFoto(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs) {
    //    try {
    //        e.processOnServer = false;
    //        //var parametros: any;
    //        //var empresas: any;
    //        setTimeout(() => {
    //            this.grdFotos.AtualizarGrid();
    //        }, 500);
    //        this.mdConfigManequim.Show();
    //    } catch (ex) {
    //        LogarException(ex);
    //    }
    //}
    C_ProdMan.prototype.OnClickFecharModalFotos = function (s, e) {
        try {
            e.processOnServer = false;
            this.LimparCanvasManequim();
            this.LimparCanvasRoupa();
            this.LimparManequim();
            this.mdConfigManequim.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ProdMan.prototype.OnAlterouProdutoPreco = function (s, e) {
        try {
            var item = e.item;
            var margemAnterior = 0, valorAnterior = 0, precoCusto = 0;
            var fieldAlterado = e.fieldNameAlterado;
            if (e.oldRowValue.Margem_Produto_Preco) {
                margemAnterior = e.oldRowValue.Margem_Produto_Preco;
            }
            if (e.oldRowValue.Valor_Produto_Preco) {
                valorAnterior = e.oldRowValue.Valor_Produto_Preco;
            }
            if (ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Custo_Lista_Preco) {
                if (item.Custo_Produto_Preco) {
                    precoCusto = item.Custo_Produto_Preco;
                }
            }
            else {
                precoCusto = this.txtPrecoCusto.GetText().CNum();
            }
            var parametros = {
                strItem: JSON.stringify(item),
                margemAnterior: margemAnterior,
                valorAnterior: valorAnterior,
                precoCusto: precoCusto,
                txtPrecoVenda: this.txtPrecoVenda.GetText().CNum(),
                txtQtdEmbalagem: 0,
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("CalcularGradePrecos", parametros);
            if (retorno && retorno.Atualizar) {
                var itemAtualizado = retorno.Item;
                item.Valor_Produto_Preco = itemAtualizado.Valor_Produto_Preco;
                item.Margem_Produto_Preco = itemAtualizado.Margem_Produto_Preco;
                item.Margem_Real = itemAtualizado.Margem_Real;
                item.Custo_Produto_Preco = itemAtualizado.Custo_Produto_Preco;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ProdMan.prototype.criarEntidadePersonalizados = function (Entidade) {
        var listaOrdem = [];
        if (!Entidade.Campos_Valor) {
            Entidade.Campos_Valor = [];
        }
        $("[moura-personalizado-campo]").each(function (index, element) {
            var campo = parseInt($(element).attr("moura-personalizado-campo"));
            var encontrado;
            for (var x = 0; x < Entidade.Campos_Valor.length; x++) {
                if (Entidade.Campos_Valor[x].Campo == campo) {
                    encontrado = Entidade.Campos_Valor[x];
                    break;
                }
            }
            if (!encontrado) {
                encontrado = {};
                encontrado.Campo = campo;
                encontrado.Produto = Entidade.Codigo;
            }
            listaOrdem.push(encontrado);
        });
        Entidade.Campos_Valor = listaOrdem;
    };
    C_ProdMan.prototype.FormatImg = function (img) {
        var foto = img.split(",");
        return foto[1];
    };
    return C_ProdMan;
}(MouraPageCadastroAngular));
var c_ProdMan = new C_ProdMan;
//# sourceMappingURL=C_ProdMan.js.map