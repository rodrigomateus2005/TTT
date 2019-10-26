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
var C_Usuari_Angular = /** @class */ (function (_super) {
    __extends(C_Usuari_Angular, _super);
    function C_Usuari_Angular() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.codigos = [];
        _this.codigosGrupoUsuario = [];
        return _this;
    }
    Object.defineProperty(C_Usuari_Angular.prototype, "chkFranqueado", {
        get: function () {
            return window['chkFranqueado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "chkFranqueador", {
        get: function () {
            return window['chkFranqueador_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "chkAutonomo", {
        get: function () {
            return window["chkAutonomo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "chkContador", {
        get: function () {
            return window["chkContador_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "chkSocio", {
        get: function () {
            return window["chkSocio_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "mdMensagem", {
        get: function () {
            return window['mdMensagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "txtMensagem", {
        get: function () {
            return window['txtMensagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "btnOK", {
        get: function () {
            return window['btnOK_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "CursosUsuario", {
        get: function () {
            if (!this.GetScope()["CursosUsuario"]) {
                return [];
            }
            else {
                return this.GetScope()["CursosUsuario"];
            }
        },
        set: function (value) {
            this.GetScope()["CursosUsuario"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "CursoUsuario", {
        get: function () {
            if (!this.GetScope()["CursoUsuario"]) {
                return null;
            }
            else {
                return this.GetScope()["CursoUsuario"];
            }
        },
        set: function (value) {
            this.GetScope()["CursoUsuario"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "ZonaVendas", {
        get: function () {
            if (!this.GetScope()["ZonaVendas"]) {
                return [];
            }
            else {
                return this.GetScope()["ZonaVendas"];
            }
        },
        set: function (value) {
            this.GetScope()["ZonaVendas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "ZonaVenda", {
        get: function () {
            if (!this.GetScope()["ZonaVenda"]) {
                return null;
            }
            else {
                return this.GetScope()["ZonaVenda"];
            }
        },
        set: function (value) {
            this.GetScope()["ZonaVenda"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "HorariosFuncionario", {
        get: function () {
            if (!this.GetScope()["HorariosFuncionario"]) {
                return [];
            }
            else {
                return this.GetScope()["HorariosFuncionario"];
            }
        },
        set: function (value) {
            this.GetScope()["HorariosFuncionario"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "HorarioFuncionario", {
        get: function () {
            if (!this.GetScope()["HorarioFuncionario"]) {
                return null;
            }
            else {
                return this.GetScope()["HorarioFuncionario"];
            }
        },
        set: function (value) {
            this.GetScope()["HorarioFuncionario"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "txtNome", {
        get: function () {
            return window['txtNome_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "txtSenhaAtual", {
        get: function () {
            return window['txtSenhaAtual_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "txtNovaSenha", {
        get: function () {
            return window['txtNovaSenha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "txtSenhaConfirmada", {
        get: function () {
            return window['txtSenhaConfirmada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "txtSalarioContratual", {
        get: function () {
            return window['txtSalarioContratual_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "imgUsuario", {
        get: function () {
            return window['imgUsuario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "lstGrupoUsuario", {
        get: function () {
            return window['lstGrupoUsuario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "hdnPathImgs", {
        get: function () {
            return $('#hdnPathImgs')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "cboSituacao", {
        get: function () {
            return window['cboSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "cboSexo", {
        get: function () {
            return window['cboSexo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "cboEstadoCivil", {
        get: function () {
            return window['cboEstadoCivil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "cboDepositoPadrao", {
        get: function () {
            return window['cboDepositoPadrao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "cboDeficiencia", {
        get: function () {
            return window['cboDeficiencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "cboRacaCor", {
        get: function () {
            return window['cboRacaCor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "cboTipoTribSindical", {
        get: function () {
            return window['cboTipoTribSindical_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "cboFormaPag", {
        get: function () {
            return window['cboFormaPag_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "cboTipoContrato", {
        get: function () {
            return window['cboTipoContrato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "cboTipoContaBancaria", {
        get: function () {
            return window['cboTipoContaBancaria_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "cboVinculoEmpregaticio", {
        get: function () {
            return window['cboVinculoEmpregaticio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "cboGrauInstrucao", {
        get: function () {
            return window['cboGrauInstrucao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "cboCodigoAdmissao", {
        get: function () {
            return window['cboCodigoAdmissao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "cboUF_CTPS", {
        get: function () {
            return window['cboUF_CTPS_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "cboSituacaoCurso", {
        get: function () {
            return window['cboSituacaoCurso_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "cboOrgaoEmissorCNH", {
        get: function () {
            return window['cboOrgaoEmissorCNH_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "cboEmpresaContratual", {
        get: function () {
            return window['cboEmpresaContratual_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "cboDiaSemana", {
        get: function () {
            return window['cboDiaSemana_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "txtCep", {
        get: function () {
            return window['txtCep_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "btnSenha", {
        get: function () {
            return window['btnSenha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "btnCancelarSenha", {
        get: function () {
            return window['btnCancelarSenha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "btnConfirmarSenha", {
        get: function () {
            return window['btnConfirmarSenha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "btnApagarSenha", {
        get: function () {
            return window['btnApagarSenha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "mdSenha", {
        get: function () {
            return window['mdSenha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "txtZonaVenda", {
        get: function () {
            return window['txtZonaVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "txtDataCurso", {
        get: function () {
            return window['txtDataCurso_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "txtDataCadastro", {
        get: function () {
            return window['txtDataCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "GridZonaVenda", {
        get: function () {
            return window['GridZonaVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "GridCursos", {
        get: function () {
            return window['GridCursos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "GridHorarioFunc", {
        get: function () {
            return window['GridHorarioFunc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "txtBanco", {
        get: function () {
            return window['txtBanco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Usuari_Angular.prototype, "txtNomeBanco", {
        get: function () {
            return window['txtNomeBanco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Usuari_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtCep) {
            adicionarEventoMoura(this.txtCep.PesquisouCEP, this.OnConsultarCEP, this);
        }
        if (this.btnSenha) {
            adicionarEventoMoura(this.btnSenha.Click, this.OnClickSenha, this);
            adicionarEventoMoura(this.btnCancelarSenha.Click, this.OnClickCancelarSenha, this);
            adicionarEventoMoura(this.btnConfirmarSenha.Click, this.OnClickConfirmarSenha, this);
            adicionarEventoMoura(this.btnApagarSenha.Click, this.OnClickApagarSenha, this);
        }
        if (this.GridZonaVenda) {
            adicionarEventoMoura(this.GridZonaVenda.Validando, this.OnClickIncluirZonaVenda, this);
        }
        if (this.GridCursos) {
            adicionarEventoMoura(this.GridCursos.Validando, this.OnClickIncluirCurso, this);
            adicionarEventoMoura(this.GridCursos.LimpouItem, this.OnLimpouItemCurso, this);
        }
        if (this.GridHorarioFunc) {
            adicionarEventoMoura(this.GridHorarioFunc.Validando, this.OnClickIncluirHorarioFunc, this);
        }
        this.AdicionarEventosPagina();
        this.VerificaCheckBoxAutonomo();
    };
    C_Usuari_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (ValoresSismoura.ConfiguracoesRetaguarda.utilizar_modulo_franquia || ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus) {
            this.chkFranqueado.Visible = true;
            this.chkFranqueador.Visible = true;
        }
        else {
            this.chkFranqueado.Visible = false;
            this.chkFranqueador.Visible = false;
        }
        if (this.txtBanco) {
            adicionarEventoMoura(this.txtBanco.Procurou, this.OnConsultarBanco, this);
        }
        this.AtualizarImgFuncionario(this.EntityTela);
        this.CamposPreenchidos(this.EntityTela);
    };
    C_Usuari_Angular.prototype.OnCheckBoxSelectedIndexChangedAutonomo = function () {
        if (this.chkFranqueado.Check != undefined) {
            this.chkFranqueado.Check.checked = false;
            this.chkFranqueador.Check.checked = false;
        }
        this.chkSocio.Check.checked = false;
        this.chkContador.Check.checked = false;
        this.VerificaCheckBoxAutonomo();
    };
    C_Usuari_Angular.prototype.VerificaCheckBoxAutonomo = function () {
        if (this.chkAutonomo.Check.checked == true) {
            if (this.chkFranqueado.Check != undefined) {
                this.chkFranqueado.Check.disabled = true;
                this.chkFranqueador.Check.disabled = true;
            }
            this.chkSocio.Check.disabled = true;
            this.chkContador.Check.disabled = true;
        }
        else {
            if (this.chkFranqueado.Check != undefined) {
                this.chkFranqueado.Check.disabled = false;
                this.chkFranqueador.Check.disabled = false;
            }
            this.chkSocio.Check.disabled = false;
            this.chkContador.Check.disabled = false;
        }
    };
    C_Usuari_Angular.prototype.OnCheckBoxSelectedIndexChangedContador = function () {
        if (this.chkContador.Check.checked) {
            var texto;
            texto = "Usuários marcados com esse perfil, só terão acesso as seguintes telas: \r\n\r\n";
            texto = texto + "- Relação de Produtos Vinculados a Regra de Imposto  ";
            texto = texto + "- Relação de Produtos Vinculados a Regra de Imposto \r\n";
            texto = texto + "- Relação de Produtos Vinculados a Regra de Imposto por CFOP \r\n";
            texto = texto + "- Relação de Regra de Imposto \r\n";
            texto = texto + "- Relação Analítica de Apuração do ICMS \r\n";
            texto = texto + "- Resumo das Operações com ICMS \r\n";
            texto = texto + "- Relação de Apuração do IPI \r\n";
            texto = texto + "- Relação de Notas Fiscais no Período - Cliente / Fornecedor  \r\n";
            texto = texto + "- Relação de Notas Fiscais no Período - Grupo / SubGrupo / Diária  \r\n";
            texto = texto + "- Relação de Notas Fiscais Agrupadas por Produtos  \r\n";
            texto = texto + "- Relação de Vendas com Nota Fiscal do Consumidor NFC-e \r\n";
            texto = texto + "- Relação Para Escrituração Fiscal NFCe \r\n";
            texto = texto + "- Relação de Vendas por Grupo de Produto NFC-e \r\n";
            texto = texto + "- Relação de Vendas com Cupom Fiscal Eletrônico SAT \r\n";
            texto = texto + "- Relação para Escrituração Fiscal SAT \r\n";
            texto = texto + "- Relação de Vendas por Grupo de Produto SAT \r\n";
            texto = texto + "- Relação de Redução Z \r\n";
            texto = texto + "- Relação de NFS-e emitidas \r\n";
            texto = texto + "- Relação de Compras no Período \r\n";
            texto = texto + "- Relação de Compras por Produto \r\n\r\n";
            texto = texto + "Para que o usuário tenha acesso a mais telas, coloque um outro perfil para o mesmo e atribua permissões a partir das funções administrativas do sistema.";
            this.txtMensagem.SetText(texto);
            this.mdMensagem.Show();
        }
    };
    C_Usuari_Angular.prototype.AdicionarEventosPagina = function () {
        if (this.chkAutonomo.Check) {
            adicionarEventoJQuery(this.chkAutonomo.Check, "change", this.OnCheckBoxSelectedIndexChangedAutonomo, this);
        }
        if (this.chkContador.Check) {
            adicionarEventoJQuery(this.chkContador.Check, "change", this.OnCheckBoxSelectedIndexChangedContador, this);
        }
        if (this.btnOK) {
            adicionarEventoMoura(this.btnOK.Click, this.ONClickOK, this);
        }
    };
    C_Usuari_Angular.prototype.MostrarModalMensagem = function (s, e) {
        e.processOnServer = false;
        if (this.chkContador.Check.checked) {
            this.mdMensagem.Show();
        }
    };
    C_Usuari_Angular.prototype.ONClickOK = function (s, e) {
        e.processOnServer = false;
        this.mdMensagem.Hide();
    };
    C_Usuari_Angular.prototype.CamposPreenchidos = function (entity) {
        //$("#txtBanco_divLabel")[0].hidden = true;
        if (this.GetScope()) {
            this.GetScope().Entity = entity;
            this.EntityTela.Data_Cadastro = this.DataServidor();
            this.EntityTela.Situacao = "1";
            this.EntityTela.Deposito_Padrao = 0;
            this.EntityTela.Raca_Cor = 9;
            this.EntityTela.Deficiencia = 0;
            this.EntityTela.Empresa_Contratual = ValoresSismoura.EmpresaPadraoUsuario;
            // this.cboEmpresaContratual.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
            this.cboSexo.SetSelectedIndex("-1");
            this.cboEstadoCivil.SetSelectedIndex("-1");
            this.EntityTela.Tipo_Tributacao_Sindical = 1;
            this.EntityTela.Forma_pagamento = 1;
            this.EntityTela.Tipo_Contrato = 1;
            this.EntityTela.Tipo_Conta_Bancaria = 0;
            this.EntityTela.Vinculo_Empregatico = 10;
            this.EntityTela.Grau_Instrucao = 5;
            this.EntityTela.Codigo_Admissao = 9;
            this.EntityTela.UF_CTPS = "AL";
            this.EntityTela.CNH_Orgao = 1;
            this.cboDiaSemana.SetSelectedIndex("-1");
            this.EntityTela.CNH_Validade = this.DataServidor();
            this.imgUsuario.Limpar();
            this.imgUsuario.Pasta = "";
            this.RefreshAngular();
        }
    };
    C_Usuari_Angular.prototype.OnLimpouItemCurso = function (s, e) {
        try {
            if (this.CursoUsuario == null) {
                this.CursoUsuario = e.item;
            }
            this.CursoUsuario.Data_Matricula = this.DataServidor();
            this.CursoUsuario.Situacao = "Concluido";
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Usuari_Angular.prototype.AtualizarImgFuncionario = function (Entity) {
        this.imgUsuario.SetEnabled(true);
        this.imgUsuario.Pasta = this.hdnPathImgs.value + ("" + Entity.Codigo);
        this.imgUsuario.Atualizar();
    };
    C_Usuari_Angular.prototype.OnAntesGravar = function () {
        try {
            _super.prototype.OnAntesGravar.call(this);
            var parametros = {
                setor: this.EntityTela.Setor == null ? 0 : this.EntityTela.Setor,
                secao: this.EntityTela.Usuario_Secao == null ? 0 : this.EntityTela.Usuario_Secao
            };
            var retornoInf = this.ExecutarFuncaoServerSideSynch("GetSetorSecao", parametros);
            if (retornoInf.UsuarioSetor != undefined && this.EntityTela.Departamento <= 0) {
                MostrarAlerta("Informe o Departamento");
                return false;
            }
            if (retornoInf.UsuarioSecao && retornoInf.UsuarioSetor == undefined) {
                MostrarAlerta("Informe o Setor");
                return false;
            }
            if (retornoInf.UsuarioSetor != undefined && retornoInf.UsuarioSetor.Cod_Departamento != this.EntityTela.Departamento) {
                MostrarAlerta("O setor não pertence ao departamento informado");
                return false;
            }
            if (retornoInf.UsuarioSecao != undefined && retornoInf.UsuarioSecao.Cod_Setor != retornoInf.UsuarioSetor.Codigo) {
                MostrarAlerta("A seção não pertence ao setor informado");
                return false;
            }
            if (this.CursosUsuario.length > 0) {
                this.EntityTela.Cursos = this.CursosUsuario;
            }
            else {
                this.EntityTela.Cursos = [];
            }
            if (this.ZonaVendas != undefined) {
                if (this.ZonaVendas.length > 0) {
                    this.EntityTela.Zonas_Venda = this.ZonaVendas;
                }
                else {
                    this.EntityTela.Zonas_Venda = [];
                }
            }
            else {
                this.EntityTela.Zonas_Venda = [];
            }
            if (this.HorariosFuncionario.length > 0) {
                this.EntityTela.Rh_Funcionario_Horario = this.HorariosFuncionario;
            }
            else {
                this.EntityTela.Rh_Funcionario_Horario = [];
            }
            this.EntityTela.Empresas_Usuario = [];
            for (var x = 0; x < this.lstEmpresa.GetValues().length; x++) {
                var empresa = {};
                empresa.Empresa = +this.lstEmpresa.GetValues()[x];
                this.EntityTela.Empresas_Usuario.push(empresa);
            }
            this.EntityTela.Grupos_Usuario = [];
            for (var x = 0; x < this.lstGrupoUsuario.GetValues().length; x++) {
                var grupo = {};
                grupo.Grupo = +this.lstGrupoUsuario.GetValues()[x];
                this.EntityTela.Grupos_Usuario.push(grupo);
            }
            this.EntityTela.Data_Admissao = ConvertToDate(this.EntityTela.Data_Admissao);
            this.EntityTela.Data_Cadastro = ConvertToDate(this.EntityTela.Data_Cadastro);
            this.EntityTela.Data_Carga = ConvertToDate(this.EntityTela.Data_Carga);
            this.EntityTela.Data_Demissao = ConvertToDate(this.EntityTela.Data_Demissao);
            this.EntityTela.Data_Emissao = ConvertToDate(this.EntityTela.Data_Emissao);
            this.EntityTela.Data_Nascimento = ConvertToDate(this.EntityTela.Data_Nascimento);
            this.EntityTela.Data_Nasc_Mae = ConvertToDate(this.EntityTela.Data_Nasc_Mae);
            this.EntityTela.Data_Senha = ConvertToDate(this.EntityTela.Data_Senha);
            this.EntityTela.Dt_Admissao = ConvertToDate(this.EntityTela.Dt_Admissao);
            this.EntityTela.Dt_Nasc = ConvertToDate(this.EntityTela.Data_Nasc_Mae);
            this.EntityTela.Empresa_Contratual = this.cboEmpresaContratual.GetValue();
            this.EntityTela.Cep = this.txtCep.GetText();
            return true;
        }
        catch (ex) {
            LogarException(ex);
            return false;
        }
    };
    C_Usuari_Angular.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        var parametros = {
            codFuncionario: this.EntityTela.Codigo
        };
        if (String.IsNullOrWhiteSpace(Entidade.Senha)) {
            this.txtSenhaAtual.Visible = false;
        }
        else {
            this.txtSenhaAtual.Visible = true;
        }
        this.txtSalarioContratual.Enabled = false;
        var retornoInfFunc = this.ExecutarFuncaoServerSideSynch("GetInfFuncionario", parametros);
        this.ZonaVendas = retornoInfFunc.ZonaVendas;
        this.CursosUsuario = retornoInfFunc.CursosUsuario;
        this.HorariosFuncionario = retornoInfFunc.RhFuncionarioHorarios;
        this.EntityTela.Empresas_Usuario = retornoInfFunc.Empresas;
        this.txtNome.Focus();
        this.PreencherEmpresas(retornoInfFunc.Empresas);
        this.PreencherGruposUsuario(retornoInfFunc.GruposUsuario);
        this.AtualizarImgFuncionario(Entidade);
        this.txtBanco.Procurar(Entidade.Banco);
        Entidade.Nome_Banco = this.txtBanco.GetResultado();
    };
    C_Usuari_Angular.prototype.OnConsultarBanco = function () {
        var nomeBanco = this.txtBanco.GetResultado();
        $("#txtBanco_divLabel")[0].hidden = true;
        this.txtNomeBanco.SetText(nomeBanco);
    };
    C_Usuari_Angular.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.AtualizarImgFuncionario(this.EntityTela);
        return true;
    };
    C_Usuari_Angular.prototype.OnDepoisLimpar = function (Entity) {
        this.CursosUsuario = [];
        this.ZonaVendas = [];
        this.HorariosFuncionario = [];
        this.lstGrupoUsuario.LimparSelecao();
        this.PreencherEmpresas(Entity.Empresas_Usuario);
        this.PreencherGruposUsuario(Entity.Grupos_Usuario);
        //this.cboEmpresaContratual.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.CamposPreenchidos(Entity);
    };
    C_Usuari_Angular.prototype.PreencherEmpresas = function (empresas) {
        if (empresas) {
            for (var x = 0; x < empresas.length; x++) {
                this.codigos.push(empresas[x].Empresa.toString());
            }
            if (this.lstEmpresa) {
                this.lstEmpresa.SetValues(this.codigos);
            }
        }
        else {
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        }
    };
    C_Usuari_Angular.prototype.PreencherGruposUsuario = function (grupos) {
        if (grupos) {
            for (var x = 0; x < grupos.length; x++) {
                this.codigosGrupoUsuario.push(grupos[x].Grupo.toString());
            }
            if (this.lstGrupoUsuario) {
                this.lstGrupoUsuario.SetValues(this.codigosGrupoUsuario);
            }
        }
        else {
            this.lstGrupoUsuario.LimparSelecao();
        }
    };
    C_Usuari_Angular.prototype.OnClickConfirmarSenha = function (s, e) {
        if (this.EntityTela.Codigo == 0) {
            MostrarAlerta("Usuário não cadastrado");
            return;
        }
        if (!String.IsNullOrWhiteSpace(this.EntityTela.Senha)) {
            if (this.txtSenhaAtual.GetText() == null || this.txtSenhaAtual.GetText() == "" || this.txtSenhaAtual.GetText() == undefined) {
                MostrarAlerta("Informe a Senha Atual");
                return;
            }
            var retornoLetra = this.VerificaLetra(this.txtSenhaAtual.GetText());
            if (!retornoLetra) {
                MostrarAlerta("A senha permite apenas caracteres numéricos");
                return false;
            }
            //if (isNaN(this.txtSenhaAtual.GetText().CNum()) || this.txtSenhaAtual.GetText().CNum() == 0) {
            //    MostrarAlerta("A senha permite apenas caracteres numéricos");
            //    e.cancelar = true;
            //    return;
            //}
            var parametros = {
                codUsuario: this.EntityTela.Codigo,
                senhaAtual: this.txtSenhaAtual.GetText()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetSenhaCriptografada", parametros);
            if (!retorno) {
                MostrarAlerta("Senha atual incorreta");
                return;
            }
        }
        if (this.txtNovaSenha.GetText() == null || this.txtNovaSenha.GetText() == "" || this.txtNovaSenha.GetText() == undefined) {
            MostrarAlerta("Informe a Nova Senha");
            return;
        }
        var retornoLetra = this.VerificaLetra(this.txtNovaSenha.GetText());
        if (!retornoLetra) {
            MostrarAlerta("A senha permite apenas caracteres numéricos");
            return false;
        }
        //if (isNaN(this.txtNovaSenha.GetText().CNum()) || this.txtNovaSenha.GetText().CNum() == 0) {
        //    MostrarAlerta("A senha permite apenas caracteres numéricos");
        //    e.cancelar = true;
        //    return;
        //}
        if (this.txtSenhaConfirmada.GetText() == null || this.txtSenhaConfirmada.GetText() == "" || this.txtSenhaConfirmada.GetText() == undefined) {
            MostrarAlerta("Confirme a Senha");
            return;
        }
        var retornoLetra = this.VerificaLetra(this.txtSenhaConfirmada.GetText());
        if (!retornoLetra) {
            MostrarAlerta("A senha permite apenas caracteres numéricos");
            return false;
        }
        //if (isNaN(this.txtSenhaConfirmada.GetText().CNum()) || this.txtSenhaConfirmada.GetText().CNum() == 0) {
        //    MostrarAlerta("A senha permite apenas caracteres numéricos");
        //    e.cancelar = true;
        //    return;
        //}
        if (!(this.txtNovaSenha.GetText() == this.txtSenhaConfirmada.GetText())) {
            MostrarAlerta("A confirmação deve ser idêntica a senha digitada.");
            return;
        }
        if (this.txtNovaSenha.GetText().length != 6) {
            MostrarAlerta("A senha deve conter 6 dígitos numéricos");
            return;
        }
        var parametros = {
            codUsuario: this.EntityTela.Codigo,
            senha: this.txtNovaSenha.GetText(),
            tela: ValoresSismoura.NomeTela
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetGravarSenha", parametros);
        if (retorno) {
            MostrarMensagem("Senha alterada com sucesso");
            this.mdSenha.Hide();
            return;
        }
        this.LimparSenha();
        this.mdSenha.Hide();
    };
    C_Usuari_Angular.prototype.VerificaLetra = function (senha) {
        for (var x = 0; x <= senha.length - 1; x++) {
            if (senha[x].CNum() <= 0) {
                return false;
            }
        }
        return true;
    };
    C_Usuari_Angular.prototype.OnClickApagarSenha = function (s, e) {
        MsgBoxJS("Deseja mesmo apagar a senha deste funcionário", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.ApagarSenhaUsuario, this));
    };
    C_Usuari_Angular.prototype.VerificarAutorizacao = function (retorno) {
        if (retorno.Autorizado) {
            if (this.EntityTela.Codigo == 0) {
                MostrarAlerta("Usuário não cadastrado");
                return false;
            }
            this.EntityTela.Senha = "";
            var parametros = {
                codUsuario: this.EntityTela.Codigo,
                senha: this.EntityTela.Senha,
                tela: ValoresSismoura.NomeTela
            };
            var retornoSenha = this.ExecutarFuncaoServerSideSynch("GetGravarSenha", parametros);
            if (retornoSenha) {
                MostrarMensagem("Senha apagada com sucesso");
                return true;
            }
        }
    };
    C_Usuari_Angular.prototype.ApagarSenhaUsuario = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.dlgFuncaoAdm.Verificar("ApgSnFun", ValoresSismoura.UsuarioLogado, false, this.VerificarAutorizacao, this);
        }
    };
    C_Usuari_Angular.prototype.OnClickSenha = function (s, e) {
        debugger;
        if (this.EntityTela.Codigo == 0 || this.EntityTela.Codigo == null) {
            MostrarAlerta("Cadastre o usuário antes de informar a senha");
            return;
        }
        if (String.IsNullOrWhiteSpace(this.EntityTela.Senha)) {
            this.txtSenhaAtual.Visible = false;
        }
        else {
            this.txtSenhaAtual.Visible = true;
        }
        this.mdSenha.Show();
    };
    C_Usuari_Angular.prototype.OnClickCancelarSenha = function (s, e) {
        this.LimparSenha();
        this.mdSenha.Hide();
    };
    C_Usuari_Angular.prototype.LimparSenha = function () {
        this.txtSenhaAtual.Limpar();
        this.txtSenhaConfirmada.Limpar();
        this.txtNovaSenha.Limpar();
    };
    C_Usuari_Angular.prototype.OnConsultarCEP = function (s, e) {
        if (e.EncontrouEndereco) {
            var entidade = this.EntityTela;
            entidade.Bairro = e.Bairro;
            entidade.Endereco = e.Endereco;
            entidade.Cidade = e.CidadeCodigo;
            this.GetScope().$applyAsync();
        }
        else {
            this.txtCep.Focus();
        }
    };
    C_Usuari_Angular.prototype.OnClickIncluirZonaVenda = function (s, e) {
        try {
            debugger;
            if ((this.ZonaVenda.Zona_Venda == 0 || this.ZonaVenda.Zona_Venda == undefined || this.ZonaVenda.Zona_Venda == null)) {
                MostrarAlerta("Preencha o campo corretamente: Zona Venda.");
                e.cancelar = true;
                return false;
            }
            if (e.index < 0) {
                e.item.Contador = 0;
                var maiorContador;
                if (e.item.Contador == null) {
                    e.item.Contador = 0;
                }
                var parametros = {
                    codUsuario: this.EntityTela.Codigo
                };
                var count = this.ZonaVendas.length;
                if (e.item.Contador == 0) {
                    if (this.EntityTela.Codigo > 0) {
                        var retorno = this.ExecutarFuncaoServerSideSynch("GetMaximoZonaVenda", parametros);
                        maiorContador = retorno.Max("Id") + 1;
                        if (this.ZonaVendas.length == 0) {
                            e.item.Contador = maiorContador;
                        }
                        else {
                            e.item.Contador = (this.ZonaVendas[count - 1].Id + 1);
                        }
                    }
                    else {
                        if (this.ZonaVendas.length) {
                            e.item.Contador = (this.ZonaVendas[count - 1].Contador + 1);
                        }
                        else {
                            e.item.Contador = 1;
                        }
                    }
                }
                e.item.Codigo_Zona_Venda = this.txtZonaVenda.GetText();
                e.item.Descricao_Zona_Venda = this.txtZonaVenda.GetResultado();
                this.ZonaVenda = {};
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Usuari_Angular.prototype.OnClickIncluirCurso = function (s, e) {
        try {
            if ((this.CursoUsuario.Curso == undefined || this.CursoUsuario.Curso == "" || String.IsNullOrWhiteSpace(this.CursoUsuario.Curso))) {
                MostrarAlerta("Preencha o campo corretamente: Curso.");
                e.cancelar = true;
                return false;
            }
            if ((this.txtDataCurso.Date == undefined || this.txtDataCurso.Date == null)) {
                MostrarAlerta("Preencha o campo corretamente: Data.");
                e.cancelar = true;
                return false;
            }
            if ((this.cboSituacaoCurso.GetValue() == "" || this.cboSituacaoCurso.GetValue() == undefined || this.cboSituacaoCurso.GetValue() == null)) {
                MostrarAlerta("Preencha o campo corretamente: Situação.");
                e.cancelar = true;
                return false;
            }
            if (e.index < 0) {
                e.item.Contador = 0;
                var maiorContador;
                if (e.item.Contador == null) {
                    e.item.Contador = 0;
                }
                var parametros = {
                    codUsuario: this.EntityTela.Codigo
                };
                var count = this.CursosUsuario.length;
                if (e.item.Contador == 0) {
                    if (this.EntityTela.Codigo > 0) {
                        var retorno = this.ExecutarFuncaoServerSideSynch("GetMaximoCursoUsuario", parametros);
                        maiorContador = retorno.Max("Codigo") + 1;
                        if (this.CursosUsuario.length == 0) {
                            e.item.Contador = maiorContador;
                        }
                        else {
                            e.item.Contador = (this.CursosUsuario[count - 1].Codigo + 1);
                        }
                    }
                    else {
                        if (this.CursosUsuario.length) {
                            e.item.Contador = (this.CursosUsuario[count - 1].Contador + 1);
                        }
                        else {
                            e.item.Contador = 1;
                        }
                    }
                }
                debugger;
                e.item.Codigo = e.item.Contador;
                e.item.Data_Matricula = this.txtDataCurso.Date;
                e.item.Formacao_Atual = this.CursoUsuario.Formacao_Atual;
                e.item.Curso = this.CursoUsuario.Curso;
                if (e.item.Formacao_Atual) {
                    e.item.Formacao_Atual_Descricao = "Sim";
                }
                else {
                    e.item.Formacao_Atual_Descricao = "Não";
                }
                e.item.Curso = this.CursoUsuario.Curso;
                e.item.Observacao = this.CursoUsuario.Observacao;
                e.item.Situacao = this.cboSituacaoCurso.GetValue();
                e.item.Situacao_Descricao = this.cboSituacaoCurso.GetText();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Usuari_Angular.prototype.OnClickIncluirHorarioFunc = function (s, e) {
        var _this = this;
        try {
            if ((this.HorarioFuncionario.Dia_Semana == 0 || this.HorarioFuncionario.Dia_Semana == undefined)) {
                MostrarAlerta("Preencha o campo corretamente: Dia da Semana.");
                e.cancelar = true;
                return false;
            }
            if (!this.HorarioFuncionario.Cod_Horario) {
                MostrarAlerta("Preencha o campo corretamente: Código do Horário.");
                e.cancelar = true;
                return false;
            }
            if (this.EntityTela.Codigo > 0) {
                var parametros = {
                    codUsuario: this.EntityTela.Codigo
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("GetMaximoHorariosFuncionario", parametros);
            }
            var horaFuncionario = this.HorariosFuncionario.filter(function (item) { return item.Dia_Semana == _this.HorarioFuncionario.Dia_Semana; });
            if (horaFuncionario.length > 0) {
                MostrarAlerta("Já existe um horário para este dia da semana!");
                e.cancelar = true;
                return false;
            }
            if (e.index < 0) {
                e.item.Contador = 0;
                var maiorContador;
                if (e.item.Contador == null) {
                    e.item.Contador = 0;
                }
                var count = this.HorariosFuncionario.length;
                if (this.EntityTela.Codigo > 0) {
                    if (e.item.Contador == 0) {
                        maiorContador = retorno.Max("Codigo") + 1;
                        if (this.HorariosFuncionario.length == 0) {
                            e.item.Contador = maiorContador;
                        }
                        else {
                            e.item.Contador = (this.HorariosFuncionario[count - 1].Codigo + 1);
                        }
                    }
                }
                else {
                    if (this.HorariosFuncionario.length) {
                        e.item.Contador = (this.HorariosFuncionario[count - 1].Contador + 1);
                    }
                    else {
                        e.item.Contador = 1;
                    }
                }
                e.item.Dia_Semana_Texto = this.cboDiaSemana.GetText();
                e.item.Dia_Semana = this.cboDiaSemana.GetValue();
                e.item.Cod_Horario = this.HorarioFuncionario.Cod_Horario;
                this.GridHorarioFunc.Grid.OrderBy("Dia_Semana_Texto", "asc");
                this.HorarioFuncionario = {};
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_Usuari_Angular;
}(MouraPageCadastroAngular));
var c_Usuari_Angular = new C_Usuari_Angular();
//# sourceMappingURL=C_Usuari_Angular.js.map