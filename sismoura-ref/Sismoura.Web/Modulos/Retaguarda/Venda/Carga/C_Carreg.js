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
var C_Carreg = /** @class */ (function (_super) {
    __extends(C_Carreg, _super);
    function C_Carreg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Carreg.prototype, "Entity", {
        get: function () {
            if (!this.GetScope()["Entity"]) {
                this.GetScope()["Entity"] = {};
            }
            return this.GetScope()["Entity"];
        },
        set: function (value) {
            this.GetScope()["Entity"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Carreg.prototype, "Filtro", {
        get: function () {
            if (!this.GetScope()["Filtro"]) {
                this.GetScope()["Filtro"] = {};
            }
            return this.GetScope()["Filtro"];
        },
        set: function (value) {
            this.GetScope()["Filtro"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Carreg.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Carreg.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Carreg.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Carreg.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Carreg.prototype, "btnTransferir", {
        get: function () {
            return window['btnTransferir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Carreg.prototype, "btnAprovar", {
        get: function () {
            return window['btnAprovar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Carreg.prototype, "btnConcluir", {
        get: function () {
            return window['btnConcluir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Carreg.prototype, "btnCancelar", {
        get: function () {
            return window['btnCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Carreg.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Carreg.prototype, "cboTransf", {
        get: function () {
            return window['cboTransf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Carreg.prototype, "txtVendaTransf", {
        get: function () {
            return window['txtVendaTransf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Carreg.prototype, "mdTransferencia", {
        get: function () {
            return window['mdTransferencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Carreg.prototype, "btnImprimirResumo", {
        get: function () {
            return window['btnImprimirResumo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Carreg.prototype, "btnImprimirMapa", {
        get: function () {
            return window['btnImprimirMapa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Carreg.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.Limpar();
    };
    C_Carreg.prototype.Limpar = function () {
        this.Entity.Codigo = 0;
        this.Filtro.Venda = 0;
        this.Entity.Vendedor = 0;
        this.Entity.Data = this.DataServidor();
        this.Filtro.Periodo_Inicial = null;
        this.Filtro.Periodo_Final = null;
        this.Filtro.Hora_Inicial = null;
        this.Filtro.Hora_Final = null;
        this.accCadastro.SetExpanded(true);
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    C_Carreg.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.Gerar, this);
        }
        if (this.txtData) {
            adicionarEventoMoura(this.txtData.ValueChanged, this.OnLostFocusData, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.btnAprovar) {
            adicionarEventoMoura(this.btnAprovar.Click, this.OnClickAprovar, this);
        }
        if (this.btnConcluir) {
            adicionarEventoMoura(this.btnConcluir.Click, this.ConcluirTransferencia, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnClickCancelar, this);
        }
        if (this.btnTransferir) {
            adicionarEventoMoura(this.btnTransferir.Click, this.OnClickTransferir, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.Limpar, this);
        }
        if (this.btnImprimirResumo) {
            adicionarEventoMoura(this.btnImprimirResumo.Click, this.OnClickImprimirResumo, this);
        }
        if (this.btnImprimirMapa) {
            adicionarEventoMoura(this.btnImprimirMapa.Click, this.OnClickImprimirMapa, this);
        }
    };
    C_Carreg.prototype.PreencherGrade = function () {
        var _this = this;
        var parametros;
        this.selecionando = false;
        if (!this.txtData.Date) {
            MostrarAlerta("Preencha o campo corretamente: Data");
            return;
        }
        try {
            parametros = {
                codigo: CNum(this.Entity.Codigo),
                data: ConvertToDate(this.txtData.Date.FormataData())
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrade", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (retorno.length) {
                    _this.Entity.Vendedor = retorno[0].Vendedor;
                    _this.accCadastro.SetExpanded(false);
                }
                _this.grid.PreencherGrid(retorno);
                _this.grid.GroupBy("Codigo");
                _this.grid.Grid.selectAll();
                _this.RefreshAngular();
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
    C_Carreg.prototype.Gerar = function (s, e) {
        var _this = this;
        if (this.ValidarCampos()) {
            MsgBoxJS("Deseja mesmo gerar a carga com vendas deste período ?", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, function (r) {
                if (r.Resultado == MsgBoxResult.Yes) {
                    _this.GerarCarga();
                }
            });
        }
    };
    C_Carreg.prototype.ConcatenarDataHora = function (data, hora) {
        var hour = hora.FormataHoraMinSegSismoura();
        var date = data.FormataData();
        return ConvertToDate(date + " " + hour);
    };
    C_Carreg.prototype.GerarCarga = function () {
        var _this = this;
        var parametros;
        if (!this.txtData.Date) {
            MostrarMensagemCampoObrigatorio("Data");
            return;
        }
        try {
            parametros = {
                venda: CNum(this.Filtro.Venda),
                data: ConvertToDate(this.txtData.Date.FormataData()),
                dataInicio: this.ConcatenarDataHora(this.Filtro.Periodo_Inicial, this.Filtro.Hora_Inicial),
                dataFim: this.ConcatenarDataHora(this.Filtro.Periodo_Final, this.Filtro.Hora_Final),
                //horaInicio: this.Filtro.HoraInicial,
                //horaFinal: this.Filtro.HoraFinal,
                vendedor: CNum(this.Entity.Vendedor),
                limitePeso: ValoresSismoura.ConfiguracoesRetaguarda.Carga_Limite_Peso,
                limiteQtde: ValoresSismoura.ConfiguracoesRetaguarda.Carga_Limite_Pedido,
                usuario: ValoresSismoura.UsuarioLogado,
                tela: ValoresSismoura.NomeTela
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarCarga", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (retorno) {
                    MostrarAlerta(retorno);
                }
                else {
                    _this.PreencherGrade();
                }
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
    C_Carreg.prototype.ValidarCampos = function () {
        var retorno = true;
        if (!ValidarPeriodo(ConvertToDate(this.Filtro.Periodo_Inicial), ConvertToDate(this.Filtro.Periodo_Final))) {
            retorno = false;
        }
        else if (!this.ValidarPeriodoHora(this.Filtro.HoraInicial, this.Filtro.HoraFinal)) {
            retorno = false;
        }
        else if (CNum(this.Filtro.Venda) > 0) {
            retorno = !this.VerificaVendaCarga(CNum(this.Filtro.Venda));
        }
        return retorno;
    };
    C_Carreg.prototype.ValidarPeriodoHora = function (horaInicial, horaFinal) {
        var retorno = true;
        if (!horaInicial) {
            horaInicial = new Date();
            horaInicial.setHours(0, 0, 0);
            this.Filtro.Hora_Inicial = new Date();
            this.Filtro.Hora_Inicial.setHours(0, 0, 0);
        }
        if (!horaFinal) {
            horaFinal = new Date();
            horaFinal.setHours(23, 59, 59);
            this.Filtro.Hora_Final = new Date();
            this.Filtro.Hora_Final.setHours(23, 59, 59);
        }
        if (horaInicial > horaFinal) {
            retorno = false;
            MostrarAlerta("A hora inicial tem que ser menor que a hora final!");
        }
        this.RefreshAngular();
        return retorno;
    };
    C_Carreg.prototype.VerificaVendaCarga = function (venda) {
        var retorno = true;
        var parametros;
        try {
            parametros = {
                venda: venda
            };
            var cad = this.ExecutarFuncaoServerSideSynch("VerificaVendaCarga", parametros);
            retorno = cad.Validador;
            if (retorno) {
                MostrarAlerta("Esta venda já está incluída na carga " + cad.Carga);
            }
        }
        catch (ex) {
            MostrarError("Ocorreu um erro no sistema!");
            return true;
        }
        return retorno;
    };
    C_Carreg.prototype.OnLostFocusData = function (s, e) {
        this.RefreshAngular();
        this.PreencherGrade();
    };
    C_Carreg.prototype.OnSelecionouLinha = function (s, e) {
        var _this = this;
        if (!this.selecionando) {
            this.selecionando = true;
            var selecionados = this.grid.DataSource.filter(function (item) { return item.Codigo == _this.grid.DataSource[e.rowIndex - 1].Codigo; });
            var keySelecionados = selecionados.map(function (item) { return item.Contador; });
            if (this.grid.Grid.isRowSelected(e.rowKey)) {
                this.grid.Grid.selectRows(keySelecionados, true);
            }
            else {
                this.grid.Grid.deselectRows(keySelecionados);
            }
            this.grid.Refresh();
        }
        this.selecionando = false;
    };
    C_Carreg.prototype.OnClickAprovar = function (s, e) {
        var _this = this;
        if (this.grid.DataSource.length > 0) {
            if (this.grid.GetSelectedRowsData.length > 0) {
                MsgBoxJS("Confirma a aprovação das cargas selecionadas ?", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, function (r) {
                    if (r.Resultado == MsgBoxResult.Yes) {
                        _this.Aprovar();
                    }
                });
            }
            else {
                MostrarAlerta("Selecione a(s) carga(s) que deseja aprovar!");
            }
        }
        else {
            MostrarAlerta("Nenhuma venda encontrada para ser aprovada !");
        }
    };
    C_Carreg.prototype.Aprovar = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                cargas: this.grid.GetSelectedRowsData.map(function (item) { return item.Codigo; })
            };
            this.ExecutarFuncaoServerSideAsynch("AprovarCargas", parametros, function (d) {
                fecharEspera();
                MostrarMensagem("Carga(s) aprovada(s) com sucesso !");
                _this.PreencherGrade();
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
    C_Carreg.prototype.OnClickTransferir = function (s, e) {
        this.PreencherComboTransf();
        this.mdTransferencia.Show();
        this.txtVendaTransf.SetText("");
    };
    C_Carreg.prototype.PreencherComboTransf = function () {
        if (this.cboTransf) {
            this.cboTransf.ClearItems();
            var itens = this.grid.GetSelectedRowsData.map(function (item) { return item.Codigo; });
            itens = itens.filter(function (item, index) { return itens.indexOf(item) == index; });
            this.cboTransf.AddItem("EXCLUIR", 0, "");
            for (var x = 0; x < itens.length; x++) {
                this.cboTransf.AddItem(itens[x].toString(), itens[x], "");
            }
            this.cboTransf.SetSelectedIndex(0);
        }
    };
    C_Carreg.prototype.ConcluirTransferencia = function (s, e) {
        if (CNum(this.txtVendaTransf.GetText()) <= 0) {
            MostrarAlerta("Informe o código da venda!");
        }
        else if (this.VerificaCargaAprovada()) {
            this.Filtro.Venda = 0;
            this.RefreshAngular();
        }
        else {
            this.Transferir();
        }
    };
    C_Carreg.prototype.VerificaCargaAprovada = function () {
        var retorno = false;
        var parametros;
        try {
            parametros = {
                venda: CNum(this.txtVendaTransf.GetText())
            };
            var cad = this.ExecutarFuncaoServerSideSynch("VerificaCargaAprovadaByVenda", parametros);
            if (cad) {
                if (cad.Erro) {
                    MostrarAlerta(cad.Erro);
                    retorno = true;
                }
                else if (cad.Verificar) {
                    MostrarAlerta("Esta venda pertence a uma carga já aprovada. Não será possível alterá-la !");
                    retorno = cad.Verificar;
                }
                else {
                    retorno = cad.Verificar;
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return retorno;
    };
    C_Carreg.prototype.Transferir = function () {
        if (this.cboTransf.GetValue() == 0) {
            this.ExcluirVendaCarga();
        }
        else if (this.cboTransf.GetSelectedIndex() > 0) {
            this.AtualizarVendaCarga();
        }
        else {
            MostrarAlerta("Selecione uma carga de destino!");
            return;
        }
        this.PreencherGrade();
        this.mdTransferencia.Hide();
    };
    C_Carreg.prototype.ExcluirVendaCarga = function () {
        var parametros;
        try {
            parametros = {
                venda: CNum(this.txtVendaTransf.GetText()),
                tela: ValoresSismoura.NomeTela
            };
            this.ExecutarFuncaoServerSideSynch("ExcluirVendaCarga", parametros);
            MostrarMensagem("Venda " + this.txtVendaTransf.GetText() + " foi excluída da carga.");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Carreg.prototype.AtualizarVendaCarga = function () {
        var parametros;
        try {
            parametros = {
                venda: CNum(this.txtVendaTransf.GetText()),
                carga: this.cboTransf.GetValue()
            };
            this.ExecutarFuncaoServerSideSynch("AtualizarVendaCarga", parametros);
            MostrarMensagem("Venda transferida com sucesso!");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Carreg.prototype.OnClickCancelar = function (s, e) {
        this.mdTransferencia.Hide();
    };
    C_Carreg.prototype.OnClickImprimirResumo = function (s, e) {
        var parametros;
        var dadosSelecionados = this.grid.GetSelectedRowsData;
        if (dadosSelecionados.length <= 0) {
            MostrarAlerta("Não há nada para imprimir !");
            return;
        }
        try {
            var arrayAux = [];
            var aux;
            for (var x = 0; x < dadosSelecionados.length; x++) {
                aux = {};
                aux.Cliente = dadosSelecionados[x].Cliente;
                aux.CodCarga = dadosSelecionados[x].Codigo;
                aux.Data = dadosSelecionados[x].Data;
                aux.Documento = dadosSelecionados[x].Documento;
                aux.Endereco = dadosSelecionados[x].Endereco;
                aux.Peso_Total = dadosSelecionados[x].Peso_Total;
                aux.Valor_Total = dadosSelecionados[x].Valor_Total;
                aux.Venda = dadosSelecionados[x].Venda;
                aux.Zona_Venda = dadosSelecionados[x].Zona_Venda;
                arrayAux.push(aux);
            }
            parametros = {
                codigosCarga: arrayAux.map(function (item) { return item.CodCarga; }),
                dataCarga: ConvertToDate(this.Entity.Data),
                itens: arrayAux
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PrepararImpressaoResumo", parametros, function (d) {
                fecharEspera();
                AbrirReport("~/Report/Fixos/Retaguarda", "Resumo_Carga.REPX");
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
    C_Carreg.prototype.OnClickImprimirMapa = function (s, e) {
        var parametros;
        var dadosSelecionados = this.grid.GetSelectedRowsData;
        if (dadosSelecionados.length <= 0) {
            MostrarAlerta("Não há nada para imprimir !");
            return;
        }
        try {
            parametros = {
                dados: dadosSelecionados.map(function (_a) {
                    var Codigo = _a.Codigo, Venda = _a.Venda;
                    return ({ Codigo: Codigo, Venda: Venda });
                })
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PrepararImpressaoMapa", parametros, function (d) {
                fecharEspera();
                AbrirReport("~/Report/Fixos/Retaguarda", "Mapa_Carga.REPX");
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
    return C_Carreg;
}(MouraPageAngular));
var c_Carreg = new C_Carreg();
//# sourceMappingURL=C_Carreg.js.map