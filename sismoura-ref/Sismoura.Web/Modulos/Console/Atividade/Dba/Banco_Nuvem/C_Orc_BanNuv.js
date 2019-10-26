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
var C_Orc_BanNuv = /** @class */ (function (_super) {
    __extends(C_Orc_BanNuv, _super);
    function C_Orc_BanNuv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Orc_BanNuv.prototype, "grdOrcNuvItem", {
        get: function () {
            return window['grdOrcNuvItem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "lblUsuario_Cadastrou", {
        get: function () {
            return window['lblUsuario_Cadastrou_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "lblData_Cadastro", {
        get: function () {
            return window['lblData_Cadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "txtCod_Cliente", {
        get: function () {
            return window['txtCod_Cliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "txtContatoCliente", {
        get: function () {
            return window['txtContatoCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "txtEmailCliente", {
        get: function () {
            return window['txtEmailCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "txtRazao_Social", {
        get: function () {
            return window['txtRazao_Social_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "txtCNPJ", {
        get: function () {
            return window['txtCNPJ_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "txtContato", {
        get: function () {
            return window['txtContato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "txtEmail", {
        get: function () {
            return window['txtEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "txtQtde_Estabelecimento", {
        get: function () {
            return window['txtQtde_Estabelecimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "txtTelefoneCliente", {
        get: function () {
            return window['txtTelefoneCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "txtTelefone", {
        get: function () {
            return window['txtTelefone_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "optTipo_Cliente", {
        get: function () {
            return window['optTipo_Cliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "OrcamentoNuvemItens", {
        get: function () {
            return this.GetScope()["OrcamentoNuvemItens"];
        },
        set: function (value) {
            this.GetScope()["OrcamentoNuvemItens"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "OrcamentoNuvemItem", {
        get: function () {
            return this.GetScope()["OrcamentoNuvemItem"];
        },
        set: function (value) {
            this.GetScope()["OrcamentoNuvemItem"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "btnAdicionar", {
        get: function () {
            return window['btnAdicionar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "mdImprimir", {
        get: function () {
            return window['mdImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "btnEscolherModelo", {
        get: function () {
            return window['btnEscolherModelo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "btnImprimir", {
        get: function () {
            return window['btnImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "cboModelo", {
        get: function () {
            return window['cboModelo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "hdnUsuario_Cadastrou", {
        get: function () {
            return $('#hdnUsuario_Cadastrou')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "cboSituacao", {
        get: function () {
            return window['cboSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Orc_BanNuv.prototype, "htmlEditor", {
        get: function () {
            return window['htmlEditor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Orc_BanNuv.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.txtCod_Cliente.Procurou, this.OnProcurouCliente, this);
        adicionarEventoMoura(this.txtCodigo.Procurou, this.OnProcurou, this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.optTipo_Cliente) {
            adicionarEventoMoura(this.optTipo_Cliente.SelectionChanged, this.OnSelecionarTipoCliente, this);
        }
        if (this.btnAdicionar) {
            adicionarEventoMoura(this.btnAdicionar.Click, this.OnClickOrdemNuvemItens, this);
        }
        if (this.grdOrcNuvItem) {
            adicionarEventoMoura(this.grdOrcNuvItem.AlterandoItem, this.OnClickAlterarOrcamentoNuvemItem, this);
        }
        if (this.btnEscolherModelo) {
            adicionarEventoMoura(this.btnEscolherModelo.Click, this.OnModalImprimir, this);
        }
        if (this.btnImprimir) {
            adicionarEventoMoura(this.btnImprimir.Click, this.OnClickImprimir, this);
        }
        this.AtualizarGrid();
    };
    C_Orc_BanNuv.prototype.OnGravouSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_Orc_BanNuv.prototype.OnExcluiuSucesso = function (s, e) {
        this.AtualizarGrid();
    };
    C_Orc_BanNuv.prototype.AtualizarGrid = function () {
        var parametros = {
            codOrcamento: this.txtCodigo.GetText().CNum()
        };
        this.OrcamentoNuvemItens = this.ExecutarFuncaoServerSideSynch("CarregarOrcamentoItens", parametros);
        this.grdOrcNuvItem.Grid.PreencherGrid(this.OrcamentoNuvemItens);
    };
    C_Orc_BanNuv.prototype.OnProcurou = function () {
        if (this.txtCodigo.GetText().CNum() != 0) {
            var parametros = {
                codigo: this.txtCodigo.GetText().CNum()
            };
            var orcamentoNuvem = this.ExecutarFuncaoServerSideSynch("CarregarOrcamentoNuvem", parametros);
            if (orcamentoNuvem.Usuario_Cadastrou != 0) {
                var parametros = {
                    codigo: orcamentoNuvem.Usuario_Cadastrou
                };
                var usuario = this.ExecutarFuncaoServerSideSynch("CarregarUsuario", parametros);
                this.lblUsuario_Cadastrou.Text = usuario.Abreviacao;
                this.hdnUsuario_Cadastrou.value = orcamentoNuvem.Usuario_Cadastrou.toString();
            }
            else {
                this.lblUsuario_Cadastrou.Text = "Moura";
                this.hdnUsuario_Cadastrou.value = orcamentoNuvem.Usuario_Cadastrou.toString();
            }
            if (orcamentoNuvem.Data_Cadastro) {
                this.lblData_Cadastro.Text = orcamentoNuvem.Data_Cadastro.FormataData();
            }
            this.OrcamentoNuvemItens = orcamentoNuvem.Orcamento_Nuvem_Itens;
            if (orcamentoNuvem.Tipo_Cliente == true) {
                $("#ClienteMoura").removeAttr("style");
                $("#SemCadastro").css("display", "none");
            }
            else {
                $("#SemCadastro").removeAttr("style");
                $("#ClienteMoura").css("display", "none");
            }
            this.cboSituacao.SetValue(orcamentoNuvem.Situacao_Orcamento_Nuvem.Situacao);
            this.AtualizarGrid();
        }
    };
    C_Orc_BanNuv.prototype.OnProcurouCliente = function () {
        var parametros = {
            codCliente: this.txtCod_Cliente.GetText().CNum()
        };
        var cliente = this.ExecutarFuncaoServerSideSynch("CarregarInfCliente", parametros);
        if (cliente != null) {
            if (cliente.Contato != null) {
                this.txtContatoCliente.SetText(cliente.Contato);
            }
            if (cliente.Email != null) {
                this.txtEmailCliente.SetText(cliente.Email);
            }
            if (cliente.Fone != null) {
                if (cliente.Ddd1 != null) {
                    this.txtTelefoneCliente.TextBoxDDD.value = cliente.Ddd1;
                }
                this.txtTelefoneCliente.TextBoxTelefone.value = cliente.Fone;
            }
        }
    };
    C_Orc_BanNuv.prototype.OnClickAlterarOrcamentoNuvemItem = function (s, e) {
        if (e.item.Qtde_Maquinas != undefined) {
            if (e.item.Qtde_Maquinas.toString().CNum() <= 3) {
                e.item.Mensalidade = 140.00;
            }
            else {
                var qtdeAcima = e.item.Qtde_Maquinas - 3;
                var totalAcima = qtdeAcima * 20.00;
                var total = 140.00 + totalAcima;
                e.item.Mensalidade = total;
                e.item.Adicional = totalAcima;
            }
        }
    };
    C_Orc_BanNuv.prototype.OnClickOrdemNuvemItens = function (s, e) {
        e.processOnServer = false;
        var entidade = this.GetScope().Entity;
        entidade.Orcamento_Nuvem_Itens = [];
        var values = [];
        var counter = 0;
        if (this.OrcamentoNuvemItens.length != 0) {
            for (var x = 0; x < this.OrcamentoNuvemItens.length; x++) {
                values[x] = this.OrcamentoNuvemItens[x].Cod_Estabelecimento;
            }
        }
        if (this.txtQtde_Estabelecimento.GetText().CNum() != 0) {
            var maxPosicao = 0;
            if (this.OrcamentoNuvemItens.length > 0) {
                maxPosicao = Math.max.apply(Math, values) - 1;
            }
            for (var x = 0; x < this.txtQtde_Estabelecimento.GetText().CNum(); x++) {
                var novoOrcamentoNuvemItem = {};
                if (maxPosicao == 0) {
                    novoOrcamentoNuvemItem.Cod_Estabelecimento = x + 1;
                }
                else {
                    var maxCodEstabelecimento = this.OrcamentoNuvemItens[maxPosicao].Cod_Estabelecimento;
                    if (x > 0) {
                        counter = counter + 1;
                    }
                    else {
                        counter = maxCodEstabelecimento + 1;
                    }
                    novoOrcamentoNuvemItem.Cod_Estabelecimento = counter;
                }
                this.OrcamentoNuvemItens.push(novoOrcamentoNuvemItem);
                this.grdOrcNuvItem.Grid.PreencherGrid(this.OrcamentoNuvemItens);
            }
        }
        else {
            MostrarAlerta("Informe a quantidade de estabelecimento");
            return false;
        }
        return true;
    };
    C_Orc_BanNuv.prototype.OnSelecionarTipoCliente = function () {
        if (this.GetScope().Entity.Tipo_Cliente == false) {
            $("#SemCadastro").removeAttr("style");
            $("#ClienteMoura").css("display", "none");
            this.txtCod_Cliente.Limpar();
            this.txtContatoCliente.Limpar();
            this.txtEmailCliente.Limpar();
            this.txtTelefoneCliente.TextBoxDDD.value = "";
            this.txtTelefoneCliente.TextBoxTelefone.value = "";
            this.txtContato.Limpar();
            this.txtEmail.Limpar();
            this.txtTelefone.TextBoxDDD.value = "";
            this.txtTelefone.TextBoxTelefone.value = "";
        }
        else if (this.GetScope().Entity.Tipo_Cliente == true) {
            $("#ClienteMoura").removeAttr("style");
            $("#SemCadastro").css("display", "none");
            this.txtRazao_Social.Limpar();
            this.txtCNPJ.Limpar();
            this.txtContato.Limpar();
            this.txtEmail.Limpar();
            this.txtTelefone.TextBoxDDD.value = "";
            this.txtTelefone.TextBoxTelefone.value = "";
            this.txtEmailCliente.Limpar();
            this.txtTelefoneCliente.TextBoxDDD.value = "";
            this.txtTelefoneCliente.TextBoxTelefone.value = "";
        }
    };
    C_Orc_BanNuv.prototype.OnModalImprimir = function (s, e) {
        e.processOnServer = false;
        this.mdImprimir.Show();
    };
    C_Orc_BanNuv.prototype.OnClickImprimir = function (s, e) {
        e.processOnServer = false;
        if (this.cboModelo.Combo.GetValue() <= 0) {
            MostrarAlerta("Selecione um modelo para ser impresso!");
            return;
        }
        var parametros;
        parametros = {
            codOrcamento: this.txtCodigo.GetText().CNum(),
            codModelo: this.cboModelo.Combo.GetValue()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetImpressaoModelo", parametros);
        this.ImprimirDocumentoWord(retorno.Itens, retorno.Documento, "N");
        this.mdImprimir.Hide();
    };
    C_Orc_BanNuv.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.GetScope().Entity.Tipo_Cliente == true) {
            if (this.txtCod_Cliente.GetText().CNum() == 0) {
                MostrarAlerta("Informe um cliente");
                return false;
            }
            if (this.txtContatoCliente.GetText() == "") {
                MostrarAlerta("Informe o contato do Cliente");
                return false;
            }
            if (this.txtEmailCliente.GetText() == "") {
                MostrarAlerta("Informe o e-mail do cliente");
                return false;
            }
            if (this.txtTelefoneCliente.TextBoxTelefone.value == "" || this.txtTelefoneCliente.TextBoxDDD.value == "") {
                MostrarAlerta("Informe o telefone e o DDD do cliente");
                return false;
            }
        }
        else {
            if (this.txtRazao_Social.GetText() == "") {
                MostrarAlerta("Informe a razão social do cliente");
                return false;
            }
            if (this.txtCNPJ.GetText() == "") {
                MostrarAlerta("Informe o CNPJ do cliente");
                return false;
            }
            if (this.txtContato.GetText() == "") {
                MostrarAlerta("Informe o contato do Cliente");
                return false;
            }
            if (this.txtEmail.GetText() == "") {
                MostrarAlerta("Informe o e-mail do cliente");
                return false;
            }
            if (this.txtTelefone.TextBoxTelefone.value == "" || this.txtTelefone.TextBoxDDD.value == "") {
                MostrarAlerta("Informe o telefone e o DDD do cliente");
                return false;
            }
        }
        if (this.txtQtde_Estabelecimento.GetText().CNum() == 0 && this.OrcamentoNuvemItens.length == 0) {
            MostrarAlerta("Informe a quantidade de estabelecimento");
            return false;
        }
        if (this.GetScope().Entity.Codigo == null || this.GetScope().Entity.Codigo == 0) {
            this.GetScope().Entity.Usuario_Cadastrou = this.hdnUsuario_Cadastrou.value.CNum();
            this.GetScope().Entity.Data_Cadastro = this.lblData_Cadastro.Text.ToDate();
        }
        this.GetScope().Entity.Situacao_Orcamento_Nuvem = {};
        this.GetScope().Entity.Situacao_Orcamento_Nuvem.Situacao = this.cboSituacao.Combo.GetValue().CNum();
        if (this.GetScope().Entity.Tipo_Cliente == true) {
            this.GetScope().Entity.Contato = this.txtContatoCliente.GetText();
            this.GetScope().Entity.Email = this.txtEmailCliente.GetText();
            this.GetScope().Entity.Telefone = this.txtTelefoneCliente.TextBoxTelefone.value;
            this.GetScope().Entity.DDD = this.txtTelefoneCliente.TextBoxDDD.value;
        }
        else {
            this.GetScope().Entity.Contato = this.txtContato.GetText();
            this.GetScope().Entity.Email = this.txtEmail.GetText();
            this.GetScope().Entity.Telefone = this.txtTelefone.TextBoxTelefone.value;
            this.GetScope().Entity.DDD = this.txtTelefone.TextBoxDDD.value;
            this.GetScope().Entity.Tipo_Cliente = false;
        }
        this.GetScope().Entity.Orcamento_Nuvem_Itens = this.OrcamentoNuvemItens;
        return true;
    };
    C_Orc_BanNuv.prototype.OnDepoisLimpar = function (entidade) {
        this.GetScope().Entity = {};
        this.GetScope().Entity.Tipo_Cliente = true;
        this.OrcamentoNuvemItens = [];
        var parametros = {};
        var situacaoPadrao = this.ExecutarFuncaoServerSideSynch("CarregarSituacaoPadrao", parametros);
        this.cboSituacao.SetValue(situacaoPadrao.Codigo);
        this.txtQtde_Estabelecimento.Limpar();
        this.cboModelo.LimparSelecao();
    };
    C_Orc_BanNuv.prototype.SetEntity = function (Entidade) {
        _super.prototype.SetEntity.call(this, Entidade);
        if (Entidade.Tipo_Cliente == undefined) {
            Entidade.Tipo_Cliente = true;
            $("#ClienteMoura").removeAttr("style");
            $("#SemCadastro").css("display", "none");
        }
    };
    return C_Orc_BanNuv;
}(MouraPageCadastroAngular));
var c_Orc_BanNuv = new C_Orc_BanNuv();
//# sourceMappingURL=C_Orc_BanNuv.js.map