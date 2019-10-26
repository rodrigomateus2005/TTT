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
var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    return Cliente;
}());
var ClientePendente = /** @class */ (function (_super) {
    __extends(ClientePendente, _super);
    function ClientePendente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClientePendente;
}(Cliente));
var ClienteBloqueado = /** @class */ (function (_super) {
    __extends(ClienteBloqueado, _super);
    function ClienteBloqueado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClienteBloqueado;
}(Cliente));
var ClienteBloqueadoLog = /** @class */ (function (_super) {
    __extends(ClienteBloqueadoLog, _super);
    function ClienteBloqueadoLog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ClienteBloqueadoLog;
}(Cliente));
var C_CliBlo = /** @class */ (function (_super) {
    __extends(C_CliBlo, _super);
    function C_CliBlo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isContinuar = false;
        return _this;
    }
    Object.defineProperty(C_CliBlo.prototype, "txtPeriodoContasReceber", {
        get: function () {
            return window['txtPeriodoContasReceber_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliBlo.prototype, "txtPeriodoRelatorio", {
        get: function () {
            return window['txtPeriodoRelatorio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliBlo.prototype, "txtDataPrevisao", {
        get: function () {
            return window['txtDataPrevisao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliBlo.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliBlo.prototype, "txtContato", {
        get: function () {
            return window['txtContato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliBlo.prototype, "txtObservacao", {
        get: function () {
            return window['txtObservacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliBlo.prototype, "chkSegmentoBloquear", {
        get: function () {
            return window['chkSegmentoBloquear_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliBlo.prototype, "chkSegmentoRelatorio", {
        get: function () {
            return window['chkSegmentoRelatorio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliBlo.prototype, "grdClientes", {
        get: function () {
            return window['grdClientes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliBlo.prototype, "grdBloqueados", {
        get: function () {
            return window['grdBloqueados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliBlo.prototype, "grdBloqueadosRelatorio", {
        get: function () {
            return window['grdBloqueadosRelatorio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliBlo.prototype, "btnBloquear", {
        get: function () {
            return window['btnBloquear_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliBlo.prototype, "btnDesbloquear", {
        get: function () {
            return window['btnDesbloquear_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliBlo.prototype, "btnGerarBloquear", {
        get: function () {
            return window['btnGerarBloquear_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliBlo.prototype, "btnGerarRelatorio", {
        get: function () {
            return window['btnGerarRelatorio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliBlo.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliBlo.prototype, "cboMotivoBloqueio", {
        get: function () {
            return window['cboMotivoBloqueio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CliBlo.prototype, "cboMotivoDesbloqueio", {
        get: function () {
            return window['cboMotivoDesbloqueio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_CliBlo.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGradeBloqueados();
        this.LimparCampos();
    };
    C_CliBlo.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.btnBloquear.Click, this.OnClickBtnBloquear, this);
        adicionarEventoMoura(this.btnDesbloquear.Click, this.OnClickBtnDesbloquear, this);
        adicionarEventoMoura(this.btnGerarBloquear.Click, this.OnClickBtnGerarBloquear, this);
        adicionarEventoMoura(this.btnGerarRelatorio.Click, this.OnClickBtnGerarRelatorio, this);
        adicionarEventoMoura(this.grdClientes.CellPrepared, this.OnGerouLinhaCliente, this);
    };
    C_CliBlo.prototype.OnClickBtnBloquear = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        var mensagem;
        var motivoBloqueio = this.cboMotivoBloqueio.GetText().trim();
        try {
            if (String.IsNullOrWhiteSpace(motivoBloqueio)) {
                this.MostrarMensagemObrigatorio('Motivo do bloqueio');
                return;
            }
            var todosClientesSelecionados_1 = this.grdClientes.GetSelectedRowsData;
            if (this.MostrarMensagemNenhumClienteSelecionado(todosClientesSelecionados_1)) {
                return;
            }
            var clientesDeRedeOuFranquia = todosClientesSelecionados_1.filter(function (cliente) {
                return !String.IsNullOrWhiteSpace(cliente.Rede_Franqueador);
            });
            if (!this.isContinuar) {
                if (clientesDeRedeOuFranquia.length > 0) {
                    mensagem = 'Atenção, existem clientes de rede ou franquia selecionados: ';
                    mensagem += clientesDeRedeOuFranquia.map(function (cliente) { return cliente.Nome_Fantasia; }).join(', ');
                    mensagem += '.<br/><br/>Deseja continuar?';
                    MsgBoxJS(mensagem, MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                        if (result.Resultado === MsgBoxResult.No) {
                            return;
                        }
                        _this.isContinuar = true;
                        _this.btnBloquear.DoClick();
                    });
                }
                else {
                    this.isContinuar = true;
                }
            }
            if (this.isContinuar) {
                this.isContinuar = false;
                abrirEspera();
                todosClientesSelecionados_1.map(function (cliente, index) {
                    var parametros = {
                        Codigo_Cliente: cliente.Codigo_Cliente,
                        Conta_Receber: cliente.Conta_Receber,
                        Motivo: motivoBloqueio,
                        Nome_Tela: ValoresSismoura.NomeTela,
                        codUsuario: ValoresSismoura.UsuarioLogado
                    };
                    _this.ExecutarFuncaoServerSideAsynch('BloquearCliente', parametros, function (d) {
                        if (index === todosClientesSelecionados_1.length - 1) {
                            _this.btnGerarBloquear.DoClick();
                            _this.cboMotivoBloqueio.Combo.SetSelectedIndex(0);
                            _this.PreencherGradeBloqueados();
                            _this.LimparCampos();
                            fecharEspera();
                            MostrarMensagem('Cliente(s) bloqueado(s) com sucesso');
                        }
                    }, function (e) {
                        LogarException(e);
                        fecharEspera();
                    }, _this);
                });
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CliBlo.prototype.OnClickBtnDesbloquear = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        var clientesBloqueados = this.grdBloqueados.GetSelectedRowsData;
        var dataPrevisao;
        if (this.cboMotivoDesbloqueio.GetText().trim() === '') {
            this.MostrarMensagemObrigatorio('Motivo do desbloqueio');
            return;
        }
        if (this.MostrarMensagemNenhumClienteSelecionado(clientesBloqueados)) {
            return;
        }
        if (this.txtDataPrevisao.Date !== null) {
            dataPrevisao = this.txtDataPrevisao.Date;
        }
        else {
            dataPrevisao = this.txtDataPrevisao.Text;
        }
        abrirEspera();
        clientesBloqueados.map(function (cliente, index) {
            var parametros = {
                Codigo_Cliente: cliente.Codigo_Cliente,
                Motivo: _this.cboMotivoDesbloqueio.GetText(),
                Nome_Tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado,
                DataPrevisao: dataPrevisao,
                ContatoCliente: _this.txtContato.GetText(),
                Observacao: _this.txtObservacao.GetText(),
                Conta_Receber: cliente.Conta_Receber
            };
            _this.ExecutarFuncaoServerSideAsynch('DesbloquearCliente', parametros, function (d) {
                if (index === clientesBloqueados.length - 1) {
                    _this.cboMotivoDesbloqueio.Combo.SetSelectedIndex(0);
                    _this.PreencherGradeBloqueados();
                    _this.LimparCamposDesbloquearClientes();
                    fecharEspera();
                    MostrarMensagem('Cliente(s) desbloqueado(s) com sucesso');
                }
            }, function (e) {
                LogarException(e);
                fecharEspera();
            }, _this);
        });
    };
    C_CliBlo.prototype.OnClickBtnGerarBloquear = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            var parametros = void 0;
            var periodoInicial = this.txtPeriodoContasReceber.textBoxCalendarioInicio.GetDate();
            var periodoFinal = this.txtPeriodoContasReceber.textBoxCalendarioFim.GetDate();
            if (periodoInicial === null || periodoFinal === null) {
                this.MostrarMensagemObrigatorio('Período');
                return;
            }
            parametros = {
                PeriodoInicial: periodoInicial,
                PeriodoFinal: periodoFinal,
                Segmentos: this.chkSegmentoBloquear.GetValues().join(),
                Cliente: this.txtCliente.GetText().CNum()
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch('GetClientesComContaPendente', parametros, function (d) {
                var retorno = JSON.parse(d).d;
                _this.grdClientes.PreencherGrid(retorno);
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
    C_CliBlo.prototype.MostrarMensagemNenhumClienteSelecionado = function (clientes) {
        if (clientes.length === 0) {
            MostrarAlerta('Nenhum cliente foi informado');
            return true;
        }
        return false;
    };
    C_CliBlo.prototype.OnClickBtnGerarRelatorio = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            var parametros = void 0;
            var periodoInicial = this.txtPeriodoRelatorio.textBoxCalendarioInicio.GetDate();
            var periodoFinal = this.txtPeriodoRelatorio.textBoxCalendarioFim.GetDate();
            var tipo = this.cboTipo.Combo.GetItem(this.cboTipo.GetSelectedIndex());
            if (periodoInicial === null || periodoFinal === null) {
                this.MostrarMensagemObrigatorio('Período');
                return;
            }
            parametros = {
                PeriodoInicial: periodoInicial,
                PeriodoFinal: periodoFinal,
                Tipo: tipo === null ? '' : tipo.value,
                Segmentos: this.chkSegmentoRelatorio.GetValues().join()
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch('GetCadastrados', parametros, function (d) {
                var retorno = JSON.parse(d).d;
                _this.grdBloqueadosRelatorio.PreencherGrid(retorno);
                fecharEspera();
            }, function (e) {
                LogarException(e);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CliBlo.prototype.MostrarMensagemObrigatorio = function (campo) {
        MostrarAlerta('Preencha o campo corretamente: ' + campo);
    };
    C_CliBlo.prototype.OnGerouLinhaCliente = function (s, e) {
        if (e.rowType === 'data') {
            var item = e.row.data;
            if (!String.IsNullOrWhiteSpace(item.Rede_Franqueador)) {
                e.cellElement.css('background-color', 'lightblue');
            }
        }
    };
    C_CliBlo.prototype.PreencherGradeBloqueados = function () {
        var _this = this;
        var parametros = {};
        try {
            this.ExecutarFuncaoServerSideAsynch('GetBloqueados', parametros, function (d) {
                var retorno = JSON.parse(d).d;
                _this.grdBloqueados.PreencherGrid(retorno);
            }, function (e) {
                LogarException(e);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CliBlo.prototype.LimparCampos = function () {
        this.txtCliente.Limpar();
        this.chkSegmentoBloquear.LimparSelecao();
        this.txtPeriodoContasReceber.Iniciar();
        this.txtPeriodoRelatorio.Iniciar();
    };
    C_CliBlo.prototype.LimparCamposDesbloquearClientes = function () {
        this.txtDataPrevisao.Date = new Date();
        this.txtContato.Limpar();
        this.txtObservacao.Limpar();
    };
    return C_CliBlo;
}(MouraPageAngular));
var c_CliBlo = new C_CliBlo();
//# sourceMappingURL=C_CliBlo.js.map