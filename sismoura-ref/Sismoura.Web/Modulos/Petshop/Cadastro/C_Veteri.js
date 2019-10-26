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
var C_Veteri = /** @class */ (function (_super) {
    __extends(C_Veteri, _super);
    function C_Veteri() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PATH_CONTRATOS_PRESTADORES = "~/Documentos/ContratosPrestadoresServicos/";
        _this._preencherCategoria = false;
        return _this;
        //protected consultarCPF() {
        //         var retorno: string;
        //         var parametros: any;
        //         if (!this.txtCNPJ.GetText() || this.txtCNPJ.GetText().trim() == "") {
        //             return;
        //         }
        //         parametros = {                 
        //             cpfCliente: this.txtCNPJ.GetText()
        //         }
        //         retorno = this.ExecutarFuncaoServerSideSynch("ValidarCPF", parametros);
        //         if (!retorno || retorno == '') {
        //             return;
        //         }
        //         if (retorno.toLowerCase().substring(0, 4) == 'erro' && retorno.indexOf("|") > 0) {
        //             MsgBoxJS(retorno.split("|")[1], MsgBoxOptions.OkOnly, MsgBoxIcon.Alert, $.proxy(this.OnClicouOKMsgBoxCPFInvalido, this));
        //         }
        //         if (retorno.toLowerCase().substring(0, 7) == 'cliente' && retorno.indexOf("|") > 0) {
        //             //this.hdnCodigo.value = retorno.split("|")[1];
        //             var msg: string;
        //             msg = "Este CPF/CNPJ já está cadastrado para outro cliente: <br />" + retorno.split("|")[1];
        //             msg += "-" + retorno.split("|")[2];
        //             msg += "<br /><br />Deseja ver os dados do cliente?";
        //             MsgBoxJS(msg, MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnClicouOpcaoMsgBoxCPF, this), retorno.split("|")[1]);
        //         }
        //     }
        // protected OnClicouOpcaoMsgBoxCPF(resultado: MsgBoxResultEventArgs) {
        //         if (resultado.Resultado == MsgBoxResult.Yes && this.AntesGravar) {
        //             var codigo = ("" + resultado.Argument).CNum();
        //             if (codigo > 0) {
        //                 var entidade: SiSMoura.Core.Entity.Cliente = this.GetScope().Entity;
        //                 entidade.Pessoa = codigo;
        //                 this.GetScope().$applyAsync();
        //             }           
        //             //this.btnConsultarCliente.DoClick();
        //         }
        //     }
        //     protected OnClicouOKMsgBoxCPFInvalido(resultado: MsgBoxResultEventArgs) {
        //         this.txtCNPJ.Textbox.focus();
        //         var entidade: SiSMoura.Core.Entity.Cliente = this.GetScope().Entity;
        //         entidade.PessoaEntity.Cpf = '';
        //         this.GetScope().$applyAsync();
        //     }
    }
    Object.defineProperty(C_Veteri.prototype, "txtCNPJ", {
        //get Animais_Veterinario(): SiSMoura.Core.Entity.AnimaisCadastroRetorno[] {
        //    return this.Grid.DataSource;
        //}
        //set Animais_Veterinario(value: SiSMoura.Core.Entity.AnimaisCadastroRetorno[]) {
        //    this.Grid.PreencherGradeRegistrosCadastrados(value);
        //}
        get: function () {
            return window['txtCNPJ_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Veteri.prototype, "txtRazaoSocial", {
        get: function () {
            return window['txtRazaoSocial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Veteri.prototype, "txtDiaPagamento", {
        get: function () {
            return window['txtDiaPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Veteri.prototype, "txtCRMV", {
        get: function () {
            return window['txtCRMV_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Veteri.prototype, "txtEmail", {
        get: function () {
            return window['txtEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Veteri.prototype, "txtTipo", {
        get: function () {
            return window['txtTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Veteri.prototype, "Grid", {
        get: function () {
            return window['GridJS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Veteri.prototype, "cboEmpresFiltro", {
        get: function () {
            return window['cboEmpresFiltro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Veteri.prototype, "chkInativo", {
        get: function () {
            return window['chkInativo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Veteri.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Veteri.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Veteri.prototype, "chkCategoria", {
        get: function () {
            return window['chkCategoria_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Veteri.prototype, "lstTipo", {
        get: function () {
            return window['listTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Veteri.prototype, "chkEnviarAplicativo", {
        get: function () {
            return window['chkEnviarAplicativo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Veteri.prototype, "chkTerceirizado", {
        get: function () {
            return window['chkTerceirizado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Veteri.prototype, "cboModeloPagamento", {
        get: function () {
            return window['cboModeloPagamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Veteri.prototype, "txtValorHora", {
        get: function () {
            return window['txtValorHora_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Veteri.prototype, "txtUsuario", {
        get: function () {
            return window['txtUsuario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Veteri.prototype, "btnAnexos", {
        get: function () {
            return window['btnAnexos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Veteri.prototype, "dlgAnexo", {
        get: function () {
            return window['dlgAnexo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Veteri.prototype.Init = function () {
        _super.prototype.Init.call(this);
        //adicionarEventoMoura(this.AntesGravar, this.PreencherEntidade, this);
        //if (this.txtCNPJ) {
        //  adicionarEventoMoura(this.txtCNPJ.LostFocus, this.consultarCPF, this)
        //}
        if (this.txtTipo) {
            adicionarEventoMoura(this.txtTipo.Procurou, this.OnProcurouTxtTipo, this);
            adicionarEventoMoura(this.txtTipo.AntesAbrirProcura, this.OnAntesAbrirProcuraTipoProfissional, this);
            adicionarEventoMoura(this.txtTipo.TextChanged, this.preencherCategoriasCadastradas, this);
        }
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.CellPrepared, this.OnGridCellPrepared, this);
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.cboEmpresFiltro) {
            adicionarEventoMoura(this.cboEmpresFiltro.SelectedItemChanged, this.OnEmpresChange, this);
        }
        if (this.chkTerceirizado)
            adicionarEventoMoura(this.chkTerceirizado.CheckChanged, this.OnCheckTerceirizado, this);
        if (this.txtDiaPagamento)
            adicionarEventoMoura(this.txtDiaPagamento.TextChanged, this.OnTxtDiaPagamentoChange, this);
        if (this.btnAnexos) {
            adicionarEventoMoura(this.btnAnexos.Click, this.OnBtnAnexoClick, this);
        }
    };
    C_Veteri.prototype.OnAntesAbrirProcuraTipoProfissional = function (s, e) {
        this._preencherCategoria = true;
    };
    C_Veteri.prototype.OnProcurouTxtTipo = function (s, e) {
        try {
            if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
                var tipoProfissional = this.txtTipo.GetText().CNum();
                (tipoProfissional == 1) ? this.txtCRMV.Obrigatorio = true : this.txtCRMV.Obrigatorio = false;
                this.preencherCategorias(this.txtTipo.GetText().CNum());
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Veteri.prototype.OnEmpresChange = function () {
        this.PreencherGrade();
    };
    C_Veteri.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var Entidade = this.GetScope().Entity;
        if (this.lstEmpresa) {
            if (!Entidade.Empresas) {
                Entidade.Empresas = [];
            }
            var valores = this.lstEmpresa.GetValues();
            //Verifica as empresas que não estão na lista a ser salva
            for (var x = 0; x <= valores.length - 1; x++) {
                var empresa = this.ProcuraEmpresa(valores[x].CNum(), Entidade.Empresas);
                if (!empresa) {
                    empresa = {};
                    empresa.Codigo = 0;
                    empresa.Empresa = valores[x].CNum();
                    Entidade.Empresas.push(empresa);
                }
            }
            //Remove da lista as empresas que foram desmarcadas
            var count = 0;
            while (count <= Entidade.Empresas.length - 1) {
                var temp = Entidade.Empresas[count];
                var index = valores.indexOf("" + temp.Empresa);
                //Caso a empresa não esteja selecionada na lista, deve removê-la 
                if (index < 0) {
                    Entidade.Empresas.splice(count, 1);
                    count -= 1;
                }
                count += 1;
            }
        }
        Entidade.Categorias = [];
        var categorias = this.chkCategoria.GetValues();
        for (var y = 0; y < categorias.length; y++) {
            var cat = {};
            cat.Categoria = categorias[y].CNum();
            this.EntityTela.Categorias.push(cat);
        }
        return true;
    };
    C_Veteri.prototype.ProcuraEmpresa = function (codEmpresa, lista) {
        var retorno = null;
        if (!lista) {
            lista = [];
        }
        for (var x = 0; x <= lista.length - 1; x++) {
            if (lista[x].Empresa == codEmpresa) {
                retorno = lista[x];
                break;
            }
        }
        return retorno;
    };
    C_Veteri.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_Veteri.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus)
            this.txtTipo.Obrigatorio = true;
        if (!this.GetScope().MudouTipo) {
            this.GetScope().MudouTipo = $.proxy(this.MudouTipo, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Tipo; }, this.GetScope().MudouTipo);
        }
        if (!ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            if (this.chkEnviarAplicativo) {
                this.chkEnviarAplicativo.Visible = false;
            }
        }
        this.PreencherGrade();
        this.LimparCampos();
    };
    C_Veteri.prototype.OnGridCellPrepared = function (s, e) {
        if (e.rowType == "data") {
            var item = e.row.data;
            var Inativo = "" + item.Inativo;
            if (Inativo == "S") {
                e.cellElement.css("color", "red");
            }
        }
    };
    C_Veteri.prototype.MudouTipo = function (newValue, oldValue) {
        if (String.IsNullOrWhiteSpace(newValue)) {
            newValue = "F";
        }
        if (newValue == "F") {
            this.txtCNPJ.IsCPF = true;
            this.GetScope().Entity.Razao_Social = "";
            this.GetScope().$applyAsync();
            this.txtRazaoSocial.Visible = false;
        }
        else {
            this.txtCNPJ.IsCPF = false;
            this.txtRazaoSocial.Visible = true;
        }
        this.txtCNPJ.SetText(this.GetScope().Entity.CPF);
    };
    C_Veteri.prototype.OnDepoisLimpar = function (Entity) {
        Entity.Tipo = "F";
        this.PreencherGrade();
        this.LimparCampos();
        this.txtRazaoSocial.Visible = false;
        this.txtDiaPagamento.Visible = false; //AJUSTAR
        if (!ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus)
            this.chkTerceirizado.Visible = false;
        this.cboModeloPagamento.Visible = false;
        this.cboModeloPagamento.Obrigatorio = false;
        this.txtValorHora.Visible = false;
        this.dlgAnexo.CarregarAnexos("");
    };
    C_Veteri.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Veteri.prototype.preencherCategoriasCadastradas = function (tipoProfissional) {
        this._preencherCategoria = true;
        this.preencherCategorias(this.txtTipo.GetText().CNum());
    };
    C_Veteri.prototype.preencherCategorias = function (tipoProfissional) {
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus && this._preencherCategoria) {
            $("#chkCategoria_List").find('tr').remove();
            var parametros = {
                tipoProfissional: tipoProfissional
            };
            var Categorias = this.ExecutarFuncaoServerSideSynch("GetCategoriaByTipoProfissional", parametros);
            if (Categorias) {
                for (var x = 0; x < Categorias.length; x++) {
                    this.chkCategoria.AdicionarItem(Categorias[x].Descricao.toString(), Categorias[x].Codigo);
                }
            }
        }
    };
    C_Veteri.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.cboModeloPagamento.Visible = Entity.Terceirizado;
        this.cboModeloPagamento.Obrigatorio = Entity.Terceirizado;
        this.txtValorHora.Visible = Entity.Terceirizado;
        this.PreencherEmpresa(Entity);
        var parametros = {
            codProfissional: Entity.Codigo
        };
        this._preencherCategoria = true;
        this.preencherCategorias(Entity.Tipo_Profissional);
        var cat = this.ExecutarFuncaoServerSideSynch("GetCategoriasProfissional", parametros);
        this._preencherCategoria = false;
        this.EntityTela.Categorias = cat;
        if (this.EntityTela.Categorias) {
            var categorias = [];
            for (var x = 0; x < this.EntityTela.Categorias.length; x++) {
                categorias.push(this.EntityTela.Categorias[x].Categoria.toString());
            }
            this.chkCategoria.SetValues(categorias);
        }
        this.dlgAnexo.CarregarAnexos(this.PATH_CONTRATOS_PRESTADORES + Entity.Codigo);
    };
    C_Veteri.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {
                codEmpresa: this.cboEmpresFiltro.GetValue()
            };
            var cad = this.ExecutarFuncaoServerSideSynch("GetProfissionaisCadastro", parametros);
            this.Grid.PreencherGrid(cad);
            this.Grid.Refresh();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Veteri.prototype.PreencherEmpresa = function (Entidade) {
        try {
            var parametros;
            parametros = {
                codProfissional: Entidade.Codigo
            };
            var emp = this.ExecutarFuncaoServerSideSynch("GetEmpresaProfissional", parametros);
            this.EntityTela.Empresas = emp;
            var empresas = [];
            for (var x = 0; x < this.EntityTela.Empresas.length; x++) {
                empresas.push(this.EntityTela.Empresas[x].Empresa.toString());
            }
            this.lstEmpresa.SetValues(empresas);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Veteri.prototype.LimparCampos = function () {
        this.txtCRMV.Obrigatorio = false;
        this.txtUsuario.Obrigatorio = false;
        this.cboEmpresFiltro.SetValue(0);
        this.lstEmpresa.LimparSelecao();
        this.chkCategoria.LimparSelecao();
        $("#chkCategoria_List").find('tr').remove();
        this._preencherCategoria = false;
    };
    C_Veteri.prototype.OnCheckTerceirizado = function (s, e) {
        this.txtUsuario.Obrigatorio = s.Checked;
        if (!s.Checked) {
            this.GetScope().Entity.Modelo_Pagamento = null;
            this.GetScope().Entity.Valor_Hora = 0;
            this.GetScope().$applyAsync();
            this.cboModeloPagamento.SetSelectedIndex(0);
            this.txtValorHora.Limpar();
        }
        this.cboModeloPagamento.Visible = s.Checked;
        this.cboModeloPagamento.Obrigatorio = s.Checked;
        this.txtValorHora.Visible = s.Checked;
    };
    C_Veteri.prototype.OnTxtDiaPagamentoChange = function (s, e) {
        if (this.GetScope().Entity.Dia_Pagamento > 31)
            this.GetScope().Entity.Dia_Pagamento = 31;
        else if (this.GetScope().Entity.Dia_Pagamento < 0)
            this.GetScope().Entity.Dia_Pagamento = 0;
        this.GetScope().$applyAsync();
    };
    C_Veteri.prototype.OnBtnAnexoClick = function (s, e) {
        e.processOnServer = false;
        if (this.EntityTela.Codigo <= 0) {
            MostrarAlerta("Informe um profissional já cadastrado");
            return;
        }
        this.dlgAnexo.MostrarClient(this.PATH_CONTRATOS_PRESTADORES + this.EntityTela.Codigo);
    };
    return C_Veteri;
}(MouraPageCadastroAngular));
var c_Veteri = new C_Veteri();
//# sourceMappingURL=C_Veteri.js.map