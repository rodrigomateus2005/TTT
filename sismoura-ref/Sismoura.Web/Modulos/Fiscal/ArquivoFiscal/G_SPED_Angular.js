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
var G_SPED_Angular = /** @class */ (function (_super) {
    __extends(G_SPED_Angular, _super);
    function G_SPED_Angular() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.devExpressIniciado = false;
        return _this;
    }
    Object.defineProperty(G_SPED_Angular.prototype, "grdInventario", {
        get: function () {
            return window['grdInventario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "grdCartao", {
        get: function () {
            return window['grdCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "txtVencimentoICMS", {
        get: function () {
            return window['txtVencimentoICMS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "cboCodigoReceita", {
        get: function () {
            return window['cboCodigoReceita_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "cboPerfil", {
        get: function () {
            return window['cboPerfil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "cboTipoArq", {
        get: function () {
            return window['cboTipoArq_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "cboMotivoInventario", {
        get: function () {
            return window['cboMotivoInventario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "cboDeposito", {
        get: function () {
            return window['cboDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "txtMesAno", {
        get: function () {
            return window['txtMesAno_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "txtFornecedor", {
        get: function () {
            return window['txtFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "txtValorDebito", {
        get: function () {
            return window['txtValorDebito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "txtValorCredito", {
        get: function () {
            return window['txtValorCredito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "txtValidacao", {
        get: function () {
            return window['txtValidacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "txtDataEstoque", {
        get: function () {
            return window['txtDataEstoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "txtDataSegundoEstoque", {
        get: function () {
            return window['txtDataSegundoEstoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "chkNaoEnviar5929", {
        get: function () {
            return window['chkNaoEnviar5929_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "chkDesconsiderarNFContinuo", {
        get: function () {
            return window['chkDesconsiderarNFContinuo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "chkEnviarConsumoInterno", {
        get: function () {
            return window['chkEnviarConsumoInterno_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "chkEnviarDescontoEmbutido", {
        get: function () {
            return window['chkEnviarDescontoEmbutido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "chkEnviarInventario", {
        get: function () {
            return window['chkEnviarInventario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "chkEstoqueAtual", {
        get: function () {
            return window['chkEstoqueatual_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "btnExportar", {
        get: function () {
            return window['btnExportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "btnGerarInventario", {
        get: function () {
            return window['btnGerarInventario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "btnLimparInventario", {
        get: function () {
            return window['btnLimparInventario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "btnAdicionar", {
        get: function () {
            return window['btnAdicionar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "mdValidacao", {
        get: function () {
            return window['mdValidacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "lstGrupo", {
        get: function () {
            return window['lstGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "lstSubGrupo", {
        get: function () {
            return window['lstSubGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SPED_Angular.prototype, "chkEnviarBlocoK", {
        get: function () {
            return window['chkEnviarBlocoK_Object'];
        },
        enumerable: true,
        configurable: true
    });
    G_SPED_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        if (this.devExpressIniciado) {
            if (this.cboCodigoReceita) {
                this.PreencherComboCodigoReceita();
            }
        }
    };
    G_SPED_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnExportar) {
            adicionarEventoMoura(this.btnExportar.Click, this.AntesExportar, this);
        }
        if (this.btnGerarInventario) {
            adicionarEventoMoura(this.btnGerarInventario.Click, this.AposClicarBotaoGerar, this);
        }
        if (this.btnAdicionar) {
            adicionarEventoMoura(this.btnAdicionar.Click, this.Gravar_Cartao_Manual, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.alterouEmpresa, this);
        }
        if (this.txtMesAno) {
            adicionarEventoMoura(this.txtMesAno.ValueChanged, this.alterouData, this);
        }
        if (this.btnLimparInventario) {
            adicionarEventoMoura(this.btnLimparInventario.Click, this.LimparInventario, this);
        }
        if (this.cboPerfil) {
            adicionarEventoMoura(this.cboPerfil.SelectedItemChanged, this.alterouComboPerfil, this);
        }
    };
    G_SPED_Angular.prototype.alterouEmpresa = function () {
        this.PreencherGradeInventario();
        this.PreencherGradeCartao(false);
        this.PreencherComboCodigoReceita();
        this.validarPerfil();
    };
    G_SPED_Angular.prototype.alterouData = function () {
        this.PreencherGradeInventario();
        this.PreencherGradeCartao(false);
        this.PreencherComboCodigoReceita();
    };
    G_SPED_Angular.prototype.alterouComboPerfil = function () {
        this.validarPerfil();
    };
    G_SPED_Angular.prototype.PreencherComboCodigoReceita = function () {
        var _this = this;
        var parametros;
        var MesAno;
        if (this.txtMesAno.Date) {
            MesAno = this.txtMesAno.Date.FormataData();
        }
        else {
            MesAno = new Date();
        }
        parametros = {
            MesAno: MesAno,
            CodigoEmpresa: this.cboEmpresa.GetValue()
        };
        try {
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch('GetUFOrigem', parametros, function (d) {
                var ufOrigem = JSON.parse(d).d;
                _this.GetCodigosReceitaByUfCombo(MesAno, ufOrigem);
            }, function (e) {
                fecharEspera();
                LogarException(e);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    G_SPED_Angular.prototype.GetCodigosReceitaByUfCombo = function (MesAno, ufOrigem) {
        var _this = this;
        try {
            var parametros = {
                MesAno: MesAno,
                ufOrigem: ufOrigem
            };
            if (!String.IsNullOrWhiteSpace(ufOrigem)) {
                this.ExecutarFuncaoServerSideAsynch('GetCodigosReceitaByUfCombo', parametros, function (d) {
                    var codigosReceitaByUfCombo = JSON.parse(d).d;
                    _this.cboCodigoReceita.ClearItems();
                    codigosReceitaByUfCombo.forEach(function (codigo) {
                        _this.cboCodigoReceita.AddItem(codigo.Descricao, codigo.codigo, null);
                    });
                    fecharEspera();
                }, function (e) {
                    fecharEspera();
                    LogarException(e);
                }, this);
            }
            else {
                fecharEspera();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    G_SPED_Angular.prototype.PreencherGradeInventario = function () {
        var _this = this;
        var date;
        var parametros;
        date = this.txtMesAno.Date;
        try {
            if (date != null || date != undefined) {
                abrirEspera();
                parametros = {
                    mesAno: date,
                    empresa: this.cboEmpresa.GetValue(),
                    deposito: Number(this.cboDeposito.GetValue())
                };
                this.ExecutarFuncaoServerSideAsynch('GetRelacaoInventarioSPED', parametros, function (d) {
                    var relacaoInventarioSPED = JSON.parse(d).d;
                    _this.grdInventario.PreencherGrid(relacaoInventarioSPED);
                    _this.grdInventario.ExpandAll(0);
                    if (_this.grdInventario.DataSource.length > 0) {
                        _this.chkEnviarInventario.Checked = true;
                        _this.txtDataEstoque.Date = relacaoInventarioSPED[0].Data_Inventario;
                    }
                    fecharEspera();
                }, function (e) {
                    fecharEspera();
                    LogarException(e);
                }, this);
            }
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    G_SPED_Angular.prototype.PreencherGradeCartao = function (isManual) {
        var _this = this;
        var date;
        date = this.txtMesAno.Date;
        try {
            if (date != null || date != undefined) {
                var validacaoCartao_1;
                var parametros = void 0;
                parametros = {
                    Empresa: this.cboEmpresa.GetValue()
                };
                abrirEspera();
                this.ExecutarFuncaoServerSideAsynch('GetValidacaoCartao', parametros, function (d) {
                    validacaoCartao_1 = JSON.parse(d).d;
                    if (validacaoCartao_1) {
                        var mensagem = void 0;
                        mensagem = "Foram encontrados erros ao gerar as movimentações de cartão: \n\n" + validacaoCartao_1;
                        _this.txtValidacao.SetText(mensagem);
                        fecharEspera();
                        _this.mdValidacao.Show();
                    }
                    else {
                        _this.InserirCartaoSped(isManual, date);
                    }
                }, function (e) {
                    fecharEspera();
                    LogarException(e);
                }, this);
            }
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    G_SPED_Angular.prototype.InserirCartaoSped = function (isManual, date) {
        try {
            var parametros = {
                MesAno: date,
                Empresa: this.cboEmpresa.GetValue()
            };
            if (!isManual) {
                var inserirCartaoSPED_1;
                this.ExecutarFuncaoServerSideAsynch('InserirCartaoSPED', parametros, function (d) {
                    inserirCartaoSPED_1 = JSON.parse(d).d;
                    if (inserirCartaoSPED_1) {
                        MostrarMensagem('Movimentação de Cartão no período importada com sucesso!', 50000);
                    }
                    fecharEspera();
                }, function (e) {
                    fecharEspera();
                    LogarException(e);
                }, this);
            }
            this.gerarGradeCartao();
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    G_SPED_Angular.prototype.gerarGradeCartao = function () {
        var _this = this;
        var parametros;
        parametros = {
            MesAno: this.txtMesAno.Date,
            Empresa: this.cboEmpresa.GetValue()
        };
        try {
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("GetRelacaoCartaoSPED", parametros, function (d) {
                var relacaoCartaoSPED = JSON.parse(d).d;
                if (relacaoCartaoSPED) {
                    _this.grdCartao.Grid.PreencherGrid(relacaoCartaoSPED);
                    _this.grdCartao.Grid.ExpandAll(0);
                }
            }, function (e) {
                LogarException(e);
                fecharEspera();
            }, this);
            fecharEspera();
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    G_SPED_Angular.prototype.AntesExportar = function (s, e) {
        e.processOnServer = false;
        if (this.txtMesAno.Date) {
            this.ValidarExportacao();
        }
        else {
            MostrarAlerta('Informe o período de escrituração do SPED antes de realizar a exportação do arquivo.', 50000);
        }
    };
    G_SPED_Angular.prototype.ValidarExportacao = function () {
        try {
            var codReceita = this.cboCodigoReceita.GetSelectedIndex();
            var motivoInventario = this.cboMotivoInventario.GetText();
            var dataInventario = void 0;
            var retorno;
            if (this.txtMesAno.GetDate().getTime() > Date.now()) {
                MostrarAlerta('Data inválida. Não é possível gerar o SPED Fiscal com mês de apuração superior ao mês da data atual.', 50000);
                return false;
            }
            if (this.cboPerfil.GetSelectedIndex() == -1) {
                MostrarAlerta('Informe o Perfil!');
                this.cboPerfil.Focus();
                return false;
            }
            if (this.cboTipoArq.GetSelectedIndex() == -1) {
                MostrarAlerta('Informe o Tipo do Arquivo!');
                this.cboTipoArq.Focus();
                return false;
            }
            if (String.IsNullOrWhiteSpace(this.cboCodigoReceita.GetText())) {
                MostrarAlerta('Informe o Código de Receita! (Registro cadastrado em Fiscal > Códigos Fiscais > Cadastro de Código da Receita).', 50000);
                this.cboCodigoReceita.Focus();
                return false;
            }
            if (this.txtMesAno.GetDate().getMonth() == 1) {
                if (!this.chkEnviarInventario.Checked) {
                    var msgInventario = "Atenção: O inventário não foi gerado!\n\n";
                    msgInventario += "No arquivo SPED referente ao mês de Fevereiro o envio dessa informação é obrigatório.\n\n";
                    msgInventario += "Se o inventário não for enviado, o validador do governo acusará erro no arquivo (registro H005).\n";
                    MostrarAlerta(msgInventario, 50000);
                    return false;
                }
            }
            if (this.chkEnviarInventario.Checked) {
                if (this.grdInventario.DataSource.length === 0) {
                    var mensagem = void 0;
                    mensagem = "<b>SPED Fiscal - Inventário</b><br>";
                    mensagem += "Atenção: A opção 'Enviar Inventário' foi marcada na aba '2 - Gerar Inventário', porém,";
                    mensagem += " o Inventário não foi gerado.<br> Com essa opção marcada é necessário gerar o";
                    mensagem += " Inventário antes de exportar o arquivo!";
                    MostrarAlerta(mensagem, 50000);
                    return false;
                }
                dataInventario = this.txtDataEstoque.Date ?
                    this.txtDataEstoque.Date : '';
            }
            else {
                dataInventario = '';
            }
            this.Exportar(codReceita, dataInventario, motivoInventario);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    G_SPED_Angular.prototype.Exportar = function (codReceita, dataInventario, motivoInventario) {
        var _this = this;
        try {
            var parametros = void 0;
            parametros = {
                CodigoEmpresa: this.cboEmpresa.GetValue(),
                Perfil: this.cboPerfil.GetText(),
                TipoArquivo: this.cboTipoArq.GetValue(),
                CodigoDeposito: Number(this.cboDeposito.GetValue()),
                enviarConsumoInterno: this.chkEnviarConsumoInterno.Checked,
                DataSegundoEstoque: this.txtDataSegundoEstoque.Date
                    ? this.txtDataSegundoEstoque.Date : '',
                VencimentoICMS: this.txtVencimentoICMS.Date
                    ? this.txtVencimentoICMS.Date : '',
                codReceita: codReceita,
                dataInventario: dataInventario,
                motivoInventario: motivoInventario.CNum(),
                enviarNFCont: !this.chkDesconsiderarNFContinuo.Checked,
                enviarCFOP5929: this.chkNaoEnviar5929.Checked,
                verificaDesconto: this.chkEnviarDescontoEmbutido.Checked,
                MesAno: this.txtMesAno.Date,
                MesAnoPadraoBrasileiro: this.txtMesAno.Date.FormataData().slice(3, 10),
                gerarBlocoK: this.chkEnviarBlocoK.Checked
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("Exportar", parametros, function (d) {
                var retorno = JSON.parse(d).d;
                if (typeof retorno === 'string') {
                    if (retorno.startsWith('Arquivo pré-validado')) {
                        fecharEspera();
                        MostrarMensagem('<b>Gerar Arquivo EFD</b><br/>' + retorno);
                        return false;
                    }
                    _this.txtValidacao.SetText(retorno);
                    _this.mdValidacao.Show();
                }
                fecharEspera();
            }, function (e) {
                LogarException(e);
                fecharEspera();
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    G_SPED_Angular.prototype.Gerar_Inventario = function () {
        var _this = this;
        var parametros;
        var dataSegundoInventario;
        var grupoItensValues;
        var subGrupoItensValues;
        var retorno;
        try {
            if (!this.txtMesAno.Date) {
                MostrarAlerta('Informe o período de escrituração do SPED antes de gerar o Inventário.', 50000);
                return false;
            }
            if (this.txtDataSegundoEstoque.Date) {
                dataSegundoInventario = this.txtDataSegundoEstoque.Date;
            }
            else {
                dataSegundoInventario = this.txtDataEstoque.Text;
            }
            grupoItensValues = this.lstGrupo.SourceLista.map(function (grupo) { return grupo.Value; });
            subGrupoItensValues = this.lstSubGrupo.SourceLista.map(function (subGrupo) { return subGrupo.Value; });
            abrirEspera();
            parametros = {
                MesAno: this.txtMesAno.Date,
                DataEstoque: this.txtDataEstoque.Date,
                Empresa: this.cboEmpresa.GetValue(),
                GrupoItensValues: grupoItensValues,
                SubGrupoItensValues: subGrupoItensValues,
                EstoqueAtual: this.chkEstoqueAtual.Checked,
                EnviarInventario: this.chkEnviarInventario.Checked,
                DataSegundoInventario: dataSegundoInventario,
                Deposito: Number(this.cboDeposito.GetValue())
            };
            this.ExecutarFuncaoServerSideAsynch('GerarInventarioSPED', parametros, function (d) {
                retorno = JSON.parse(d).d;
                if (retorno) {
                    _this.PreencherGradeInventario();
                }
                fecharEspera();
            }, function (e) {
                fecharEspera();
                LogarException(e);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    G_SPED_Angular.prototype.LimparInventario = function (s, e) {
        e.processOnServer = false;
        var retorno;
        var parametros;
        if (!this.txtMesAno.Date) {
            MostrarAlerta('Informe o período de escrituração do SPED antes de gerar ou limpar o Inventário.', 50000);
            return false;
        }
        try {
            abrirEspera();
            parametros = {
                MesAno: this.txtMesAno.Date,
                Deposito: Number(this.cboDeposito.GetValue())
            };
            this.ExecutarFuncaoServerSideAsynch('LimparInventario', parametros, function (d) {
                retorno = JSON.parse(d).d;
                if (typeof (retorno) === 'string') {
                    var mensagem = void 0;
                    mensagem = '<b>Gerar Arquivo EFD - Inventário </b><br>';
                    mensagem += retorno;
                    MostrarMensagem(mensagem);
                }
                fecharEspera();
            }, function (e) {
                fecharEspera();
                LogarException(e);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    G_SPED_Angular.prototype.LimparCampos = function () {
        this.txtVencimentoICMS.Date = null;
        this.cboPerfil.SetSelectedIndex(0);
        this.cboTipoArq.SetSelectedIndex(0);
        this.cboMotivoInventario.SetSelectedIndex(0);
        if (this.cboDeposito.GetItemCount() > 0) {
            this.cboDeposito.SetSelectedIndex(0);
        }
        else {
            this.cboDeposito.LimparSelecao();
        }
    };
    G_SPED_Angular.prototype.AposClicarBotaoGerar = function (s, e) {
        e.processOnServer = false;
        if (this.txtDataEstoque.Date) {
            this.Gerar_Inventario();
        }
    };
    G_SPED_Angular.prototype.Gravar_Cartao_Manual = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        var fornecedor = this.txtFornecedor.GetText();
        var credito = this.txtValorCredito.GetText();
        var debito = this.txtValorDebito.GetText();
        if (!String.IsNullOrWhiteSpace(fornecedor)
            && (!String.IsNullOrWhiteSpace(credito)
                || !String.IsNullOrWhiteSpace(debito))) {
            if (this.txtMesAno.Date) {
                var retorno_1;
                var parametros = void 0;
                parametros = {
                    MesAno: this.txtMesAno.Date,
                    Empresa: this.cboEmpresa.GetValue(),
                    Fornecedor: this.txtFornecedor.GetText().CNum(),
                    ValorDebito: this.txtValorDebito.GetText().CNum(),
                    ValorCredito: this.txtValorCredito.GetText().CNum()
                };
                try {
                    abrirEspera();
                    this.ExecutarFuncaoServerSideAsynch('Gravar_Cartao_Manual', parametros, function (d) {
                        retorno_1 = JSON.parse(d).d;
                        if (retorno_1) {
                            _this.PreencherGradeCartao(true);
                            _this.txtValorCredito.SetText('');
                            _this.txtValorDebito.SetText('');
                            _this.txtFornecedor.Limpar();
                        }
                        fecharEspera();
                    }, function (e) {
                        fecharEspera();
                        LogarException(e);
                    }, this);
                }
                catch (ex) {
                    LogarException(ex);
                    fecharEspera();
                }
            }
            else {
                var mensagem = 'Informe o período de escrituração do SPED antes';
                mensagem += ' de gerar a movimentação dos cartões.';
                MostrarAlerta(mensagem, 50000);
            }
        }
    };
    G_SPED_Angular.prototype.validarPerfil = function () {
        var _this = this;
        var regimeTributario = 0;
        var parametros;
        parametros = {
            codEmpresa: this.cboEmpresa.GetValue()
        };
        try {
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch('getRegimeTributario', parametros, function (d) {
                regimeTributario = JSON.parse(d).d;
                if (regimeTributario != null) {
                    if (_this.cboPerfil.GetText() == 'C') {
                        _this.chkEnviarBlocoK.Checked = false;
                        _this.chkEnviarBlocoK.Enabled = false;
                        if ((regimeTributario != 2) && (regimeTributario != 3)) {
                            MostrarAlerta('Não é possível utilizar o Perfil C para empresas que não se enquandram no Regime Tributário Simples Nacional!', 50000);
                            _this.cboPerfil.SetSelectedIndex(0);
                            _this.chkEnviarBlocoK.Enabled = true;
                        }
                    }
                }
                fecharEspera();
            }, function (e) {
                fecharEspera();
                LogarException(e);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    G_SPED_Angular.prototype.DevExpressInit = function () {
        _super.prototype.DevExpressInit.call(this);
        this.LimparCampos();
    };
    return G_SPED_Angular;
}(MouraPageAngular));
var g_SPED_Angular = new G_SPED_Angular();
//# sourceMappingURL=G_SPED_Angular.js.map