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
var C_PgtSer = /** @class */ (function (_super) {
    __extends(C_PgtSer, _super);
    function C_PgtSer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_PgtSer.prototype, "txtPrestador", {
        get: function () {
            return window['txtPrestador_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PgtSer.prototype, "Servicos", {
        get: function () {
            return this.GetScope()["Servicos"];
        },
        set: function (value) {
            this.GetScope()["Servicos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PgtSer.prototype, "Servico", {
        get: function () {
            return this.GetScope()["Servico"];
        },
        set: function (value) {
            this.GetScope()["Servico"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PgtSer.prototype, "accServicos", {
        get: function () {
            return window['accServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PgtSer.prototype, "txtServico", {
        get: function () {
            return window['txtServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PgtSer.prototype, "cboListaPreco", {
        get: function () {
            return window['cboListaPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PgtSer.prototype, "grdServicos", {
        get: function () {
            return window['grdServicos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PgtSer.prototype, "btnReplicar", {
        //Réplica
        get: function () {
            return window['btnReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PgtSer.prototype, "dlgReplicar", {
        get: function () {
            return window['dlgReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PgtSer.prototype, "txtPrestadorReplicar", {
        get: function () {
            return window['txtPrestadorReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PgtSer.prototype, "grdServicosReplicar", {
        get: function () {
            return window['grdServicosReplicar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PgtSer.prototype, "btnReplicarSelecionado", {
        get: function () {
            return window['btnReplicarSelecionado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_PgtSer.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtPrestador) {
            adicionarEventoMoura(this.txtPrestador.AntesAbrirProcura, this.OnAntesAbrirProcuraPrestador, this);
            adicionarEventoMoura(this.txtPrestador.Procurou, this.OnTxtPrestadorProcurou, this);
        }
        if (this.txtServico) {
            adicionarEventoMoura(this.txtServico.Procurou, this.OnTxtServicoProcurou, this);
        }
        if (this.grdServicos) {
            adicionarEventoMoura(this.grdServicos.Validando, this.ValidandoGrdServicos, this);
            adicionarEventoMoura(this.grdServicos.AdicionandoItem, this.OnAdicionandoGrdServicos, this);
            adicionarEventoMoura(this.grdServicos.AlterandoItem, this.OnAlterandoItem, this);
        }
        //Réplica
        if (this.btnReplicar) {
            adicionarEventoMoura(this.btnReplicar.Click, this.OnClickReplicar, this);
        }
        if (this.txtPrestadorReplicar) {
            adicionarEventoMoura(this.txtPrestadorReplicar.AntesAbrirProcura, this.OnAntesAbrirProcuraPrestadorReplicar, this);
            adicionarEventoMoura(this.txtPrestadorReplicar.Procurou, this.OnTxtPrestadorProcurouReplicar, this);
        }
        if (this.btnReplicarSelecionado) {
            adicionarEventoMoura(this.btnReplicarSelecionado.Click, this.OnClickReplicarSelecionado, this);
        }
    };
    C_PgtSer.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.Servicos = [];
        this.txtServico.Limpar();
        this.cboListaPreco.ClearItems();
        this.accServicos.Visible = false;
    };
    C_PgtSer.prototype.OnAntesAbrirProcuraPrestador = function (s, e) {
        e.Cancelar = false;
        this.txtPrestador.AddParametro("isTerceirizado", "1");
    };
    C_PgtSer.prototype.OnTxtPrestadorProcurou = function (s, e) {
        try {
            if (this.txtPrestador.GetText().CNum() <= 0) {
                this.Limpar();
                return;
            }
            var param = {
                codPrestador: this.txtPrestador.GetText().CNum()
            };
            var prestador = this.ExecutarFuncaoServerSideSynch("GetPrestador", param);
            if (!prestador) {
                return;
            }
            if (!prestador.Terceirizado) {
                MostrarAlerta("O Profissional informado não é um Prestador de Serviço");
                this.Limpar();
                return;
            }
            var codigoEntidade = this.ExecutarFuncaoServerSideSynch("GetCodigoEntidade", param);
            if (codigoEntidade > 0) {
                this.PreencherEntidade(codigoEntidade.toString());
                param = {
                    codPagamento: codigoEntidade
                };
                this.Servicos = this.ExecutarFuncaoServerSideSynch("GetServicos", param);
                var contador_1 = 1;
                if (this.Servicos && this.Servicos.length > 0) {
                    this.Servicos.forEach(function (q) {
                        q.Contador = contador_1;
                        contador_1 += 1;
                    });
                }
            }
            this.accServicos.Visible = prestador.Modelo_Pagamento == 2;
            this.grdServicos.Grid.Refresh();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PgtSer.prototype.OnTxtServicoProcurou = function (s, e) {
        var _this = this;
        try {
            this.cboListaPreco.ClearItems();
            if (this.txtServico.GetText().CNum() <= 0) {
                return;
            }
            if (this.txtPrestador.GetText().CNum() <= 0) {
                MostrarAlerta("Informe o prestador de serviço.");
                this.txtServico.Limpar();
                this.txtPrestador.Focus();
            }
            var param = {
                codServico: this.txtServico.GetText().CNum(),
                codPrestador: this.txtPrestador.GetText().CNum()
            };
            var listasPrecos = this.ExecutarFuncaoServerSideSynch("GetListasPrecos", param);
            if (listasPrecos) {
                listasPrecos.forEach(function (q) {
                    if (("" + q.Codigo).CNum() > 0) {
                        _this.cboListaPreco.AddItem(q.Descricao, ("" + q.Codigo) + "|" + ("" + q.Preco), "");
                    }
                });
                this.cboListaPreco.SetSelectedIndex(0);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PgtSer.prototype.ValidandoGrdServicos = function (s, e) {
        var entidade = e.item;
        try {
            if (e.fieldNameAlterado == 'Porcentagem') {
                if (entidade.Valor > 0) {
                    e.errorText = "Já existe um repasse em valor inserido";
                    e.cancelar = true;
                    return;
                }
            }
            if (e.fieldNameAlterado == "Valor") {
                if (entidade.Porcentagem > 0) {
                    e.errorText = "Já existe um repasse em porcentagem inserido";
                    e.cancelar = true;
                    return;
                }
                if (entidade.Valor > entidade.Valor_Servico) {
                    e.errorText = "O valor de repasse não pode ser maior que o valor do serviço";
                    e.cancelar = true;
                    return;
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PgtSer.prototype.OnAdicionandoGrdServicos = function (s, e) {
        var entidade = e.item;
        try {
            if (!this.ValidarAdicionarServico(entidade)) {
                e.cancelar = true;
                return;
            }
            entidade.Prestador_Nome = this.txtPrestador.GetResultado();
            entidade.Servico_Nome = this.txtServico.GetResultado();
            entidade.Valor_Servico = ("" + this.cboListaPreco.GetValue()).split("|")[1].replace('.', ',').CNum();
            entidade.Lista_Preco = ("" + this.cboListaPreco.GetValue()).split("|")[0].CNum();
            entidade.Lista_Preco_Descricao = this.cboListaPreco.GetText();
            (this.Servicos.length > 0) ? entidade.Contador = this.Servicos.Max('Contador') : entidade.Contador = 1;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PgtSer.prototype.ValidarAdicionarServico = function (entidade) {
        var _this = this;
        try {
            if (this.txtPrestador.GetText().CNum() <= 0) {
                MostrarAlerta("Informe o Prestador de Serviço");
                return false;
            }
            if (entidade.Servico <= 0) {
                MostrarAlerta("Informe um serviço");
                return false;
            }
            if (String.IsNullOrWhiteSpace(("" + this.cboListaPreco.GetValue()))) {
                MostrarAlerta("Serviço sem lista de preço");
                return false;
            }
            if (!entidade.Valor && !entidade.Porcentagem) {
                MostrarAlerta("Informe o valor ou a porcentagem do serviço");
                return false;
            }
            if (entidade.Valor <= 0 && entidade.Porcentagem <= 0) {
                MostrarAlerta("Informe o valor ou a porcentagem do serviço");
                return false;
            }
            if (entidade.Valor > 0 && entidade.Porcentagem > 0) {
                MostrarAlerta("Só é possível inserir um tipo de repasse, por valor ou porcentagem");
                return false;
            }
            if (entidade.Valor > ("" + this.cboListaPreco.GetValue()).split("|")[1].replace(".", ",").CNum()) {
                MostrarAlerta("O valor de repasse não pode ser maior que o valor do serviço");
                return false;
            }
            if (entidade.Porcentagem > 100) {
                MostrarAlerta("Porcentagem máxima é 100");
                return false;
            }
            var hasServicoLista_1 = false;
            if (this.Servicos) {
                this.Servicos.forEach(function (q) {
                    if (q.Servico == entidade.Servico && ("" + _this.cboListaPreco.GetValue()).split("|")[0].CNum() == q.Lista_Preco && !hasServicoLista_1) {
                        hasServicoLista_1 = true;
                    }
                });
            }
            if (hasServicoLista_1) {
                MostrarAlerta("Valor de repasse já adicionado nesta Lista de Preço para este Prestador de Serviço");
                return false;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return true;
    };
    C_PgtSer.prototype.OnAlterandoItem = function (s, e) {
        if (e.fieldNameAlterado == "Valor") {
            if (("" + e.item.Valor).replace('.', ',').CNum() > ("" + e.item.Valor_Servico).replace('.', ',').CNum()) {
                e.cancelar = true;
                return;
            }
        }
    };
    C_PgtSer.prototype.OnClickReplicar = function (s, e) {
        e.processOnServer = false;
        try {
            if (this.txtPrestador.GetText().CNum() <= 0) {
                MostrarAlerta("Informe o Prestador que irá receber os valores dos serviços replicados");
                return;
            }
            if (!this.accServicos.Visible) {
                MostrarAlerta("Prestador não configurado para receber por serviço");
                return;
            }
            this.dlgReplicar.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PgtSer.prototype.OnFechouModalHistoricoServico = function (s, e) {
        this.txtPrestadorReplicar.Limpar();
        this.grdServicosReplicar.PreencherGrid([]);
    };
    C_PgtSer.prototype.OnAntesAbrirProcuraPrestadorReplicar = function (s, e) {
        e.Cancelar = false;
        this.txtPrestadorReplicar.AddParametro("isTerceirizado", "1");
    };
    C_PgtSer.prototype.OnTxtPrestadorProcurouReplicar = function (s, e) {
        var _this = this;
        try {
            if (this.txtPrestadorReplicar.GetText().CNum() <= 0) {
                this.grdServicosReplicar.PreencherGrid([]);
                return;
            }
            var param = {
                codPrestador: this.txtPrestadorReplicar.GetText().CNum()
            };
            var prestadorReplicar = this.ExecutarFuncaoServerSideSynch("GetPrestador", param);
            if (!prestadorReplicar) {
                return;
            }
            if (!prestadorReplicar.Terceirizado) {
                MostrarAlerta("O Profissional informado não é um Prestador de Serviço");
                this.txtPrestadorReplicar.Limpar();
                this.txtPrestadorReplicar.Focus();
                return;
            }
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetServicosPrestadorReplica", param, function (d) {
                try {
                    fecharEspera();
                    _this.grdServicosReplicar.PreencherGrid(GetRetornoAJAX(d));
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    C_PgtSer.prototype.OnClickReplicarSelecionado = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            if (this.grdServicosReplicar.DataSource.length <= 0) {
                MostrarAlerta("Nenhum serviço listado para replicar");
                return;
            }
            MsgBoxJS("Deseja realmente replicar o(s) serviço(s) listado(s)?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.No)
                    return;
                _this.Servicos = [];
                _this.grdServicosReplicar.DataSource.forEach(function (q) {
                    var novoServico = {
                        Prestador_Nome: _this.txtPrestador.GetResultado(),
                        Servico: ("" + q.Servico).CNum(),
                        Servico_Nome: q.Servico_Nome,
                        Valor: ("" + q.Valor).CNum(),
                        Valor_Servico: ("" + q.Valor_Servico).replace('.', ',').CNum(),
                        Lista_Preco: ("" + q.Lista_Preco).CNum(),
                        Lista_Preco_Descricao: q.Lista_Preco_Descricao
                    };
                    _this.Servicos.push(novoServico);
                });
                _this.GetScope().$applyAsync();
                _this.grdServicos.Grid.Refresh();
                _this.dlgReplicar.Hide();
            });
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PgtSer.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        try {
            var entidade_1 = this.GetScope().Entity;
            var servicosValores = this.Servicos;
            var servicosExistentes = entidade_1.ServicosValores;
            entidade_1.ServicosValores = [];
            servicosValores.forEach(function (q) {
                var novoServico = {};
                novoServico.Servico = q.Servico;
                novoServico.Valor = q.Valor;
                novoServico.Porcentagem = q.Porcentagem;
                novoServico.Lista_Preco = q.Lista_Preco;
                entidade_1.ServicosValores.push(novoServico);
            });
        }
        catch (ex) {
            LogarException(ex);
        }
        return true;
    };
    return C_PgtSer;
}(MouraPageCadastroAngular));
var c_PgtSer = new C_PgtSer();
//# sourceMappingURL=C_PgtSer.js.map