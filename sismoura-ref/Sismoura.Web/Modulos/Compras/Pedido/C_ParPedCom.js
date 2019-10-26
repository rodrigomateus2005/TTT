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
var C_ParPedCom = /** @class */ (function (_super) {
    __extends(C_ParPedCom, _super);
    function C_ParPedCom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ParPedCom.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParPedCom.prototype, "cboGradeSemana", {
        get: function () {
            return window['cboGradeSemana_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParPedCom.prototype, "cboPrazoResposta", {
        get: function () {
            return window['cboPrazoResposta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParPedCom.prototype, "txtHorarioLimite", {
        get: function () {
            return window['txtHorarioLimite_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParPedCom.prototype, "btnAdicionar", {
        get: function () {
            return window['btnAdicionar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParPedCom.prototype, "gridPrazoResposta", {
        get: function () {
            return window['gridPrazoResposta_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ParPedCom.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ParPedCom.prototype.Init = function () {
        _super.prototype.Init.call(this);
        this.MostraPrazoRespostaHora();
        this.ListarCamposNaGrade();
        this.lstEmpresa.LimparSelecao();
        if (this.gridPrazoResposta) {
            adicionarEventoMoura(this.gridPrazoResposta.ExcluiuLinhaGrade, this.ClicouBotaoAdicionar, this);
        }
    };
    C_ParPedCom.prototype.MostraPrazoRespostaHora = function () {
        if (this.gridPrazoResposta.DataSource.length > 0) {
            this.txtHorarioLimite.Enabled = false;
            this.cboPrazoResposta.Enabled = false;
        }
        else {
            this.txtHorarioLimite.Enabled = true;
            this.cboPrazoResposta.Enabled = true;
        }
    };
    C_ParPedCom.prototype.ClicouBotaoAdicionar = function () {
        if (this.gridPrazoResposta.DataSource.length >= 1) {
            this.txtHorarioLimite.Enabled = false;
            this.cboPrazoResposta.Enabled = false;
        }
        else {
            this.txtHorarioLimite.Enabled = true;
            this.cboPrazoResposta.Enabled = true;
        }
    };
    C_ParPedCom.prototype.ListarCamposNaGrade = function () {
        var _this = this;
        var param = {};
        var pedidos = this.ExecutarFuncaoServerSideSynch("ListarNaGrade", param);
        var dia = null;
        var listItem = new Array();
        pedidos.forEach(function (pedido) {
            var item = {};
            if (pedido.Prazo_Resposta == pedido.Dia_Semana) {
                dia = pedido.Dia_Semana;
            }
            else if (pedido.Dia_Semana <= pedido.Prazo_Resposta) {
                if ((pedido.Dia_Semana + pedido.Prazo_Resposta) <= 7) {
                    dia = (dia + pedido.Prazo_Resposta) - 7;
                }
                else {
                    dia = (pedido.Dia_Semana + pedido.Prazo_Resposta);
                }
            }
            else {
                if ((pedido.Dia_Semana + pedido.Prazo_Resposta) <= 7) {
                    dia = (pedido.Dia_Semana + pedido.Prazo_Resposta);
                }
                else {
                    dia = (pedido.Dia_Semana + pedido.Prazo_Resposta) - 7;
                }
            }
            param = {
                empresa: pedido.Empresa
            };
            item.Id = pedido.Id;
            item.Codigo_Empresa = pedido.Empresa;
            item.Empresa = _this.ExecutarFuncaoServerSideSynch("ObterPorCodigo", param);
            item.Dia_Semana = _this.cboGradeSemana.Combo.GetItem(pedido.Dia_Semana - 1).text;
            item.Prazo_Resposta = _this.cboPrazoResposta.Combo.GetItem(dia - 1).text;
            if (pedido.Hora.Minutes >= 10) {
                pedido.Hora = pedido.Hora.Hours + ":" + pedido.Hora.Minutes;
            }
            else {
                pedido.Hora = pedido.Hora.Hours + ":0" + pedido.Hora.Minutes;
            }
            item.Hora = pedido.Hora;
            _this.cboPrazoResposta.Combo.SetSelectedIndex(dia - 1);
            _this.txtHorarioLimite.textBoxHorario.SetText(item.Hora);
            listItem.push(item);
        });
        this.gridPrazoResposta.PreencherGrid(listItem);
    };
    C_ParPedCom.prototype.validaPrazoResposta = function (prazoResposta, diaSemana) {
        var param = {
            prazoResposta: prazoResposta + 1,
            diaSemana: diaSemana + 1
        };
        // pega a data
        return this.ExecutarFuncaoServerSideSynch("ValidaData", param);
    };
    C_ParPedCom.prototype.OnClickAdicionarBotao = function () {
        if (this.ValidarCamposObrigatorios()) {
            var id;
            var retorno = this.ExecutarFuncaoServerSideSynch("GerarProximoId", id);
            var listaGrade = this.gridPrazoResposta.DataSource;
            var listaEmpresas = this.lstEmpresa.GetValuesNumber();
            var iniciaZero = listaGrade.length == 0;
            var erro = new String();
            var cont = 0;
            var feriadoFlag = true;
            for (var i = 0; i < listaEmpresas.length; i++) {
                var item = {};
                var parametro = {
                    empresa: listaEmpresas[i]
                };
                var empresaJaCadastrada = this.ExecutarFuncaoServerSideSynch("EmpresaJaCadastrada", parametro);
                if (empresaJaCadastrada) {
                    erro += listaEmpresas[i] + ", ";
                    cont++;
                }
                else {
                    this.InsereItens(item, listaEmpresas, retorno, i);
                    if (listaGrade.length != 0 && !iniciaZero && !this.VerificaInseridos(listaGrade, item)) {
                        this.CampoJaExiste(item, listaGrade, listaEmpresas);
                    }
                    else {
                        this.PreencherItemEInserirNaGrid(listaGrade, item);
                    }
                    retorno++;
                }
            }
            if (erro.length > 0) {
                if (cont == 1) {
                    MostrarAlerta("A Empresa: " + erro + "Já está cadastrada!");
                }
                else {
                    MostrarAlerta("As Empresas: " + erro + "Já estão cadastradas!");
                }
            }
        }
    };
    C_ParPedCom.prototype.VerificaInseridos = function (listaGrade, item) {
        var CodigoExistenteLinha = new Array();
        var cont = 0;
        for (var i = 0; i < listaGrade.length; i++) {
            if (listaGrade[i].Codigo_Empresa == item.Codigo_Empresa) {
                cont++;
            }
        }
        return cont == 0;
    };
    C_ParPedCom.prototype.InsereItens = function (item, listaEmpresas, retorno, i) {
        item.Id = retorno;
        item.Codigo_Empresa = listaEmpresas[i];
        item.Empresa = this.lstEmpresa.GetTexts()[i];
        item.Dia_Semana = this.cboGradeSemana.GetValue();
        item.Prazo_Resposta = this.cboPrazoResposta.GetValue();
        item.Hora = this.txtHorarioLimite.textBoxHorario.GetText();
    };
    C_ParPedCom.prototype.CampoJaExiste = function (item, listaGrade, listaEmpresas) {
        if (listaEmpresas.length == 1) {
            this.InserirCampoUnicoNaGrid(item, listaGrade);
        }
        else {
            this.inserirVariosCamposNaGrid(item, listaGrade, listaEmpresas);
        }
    };
    C_ParPedCom.prototype.InserirCampoUnicoNaGrid = function (item, listaGrade) {
        var CodigoExistenteLinha = new Array();
        for (var i = 0; i < listaGrade.length; i++) {
            if (listaGrade[i].Codigo_Empresa == item.Codigo_Empresa) {
                CodigoExistenteLinha.push(i);
            }
        }
        this.AlteraDiaSemana(CodigoExistenteLinha, item, listaGrade);
    };
    C_ParPedCom.prototype.inserirVariosCamposNaGrid = function (item, listaGrade, listaEmpresas) {
        var CodigoExistenteLinha = new Array();
        for (var i = 0; i < listaGrade.length; i++) {
            for (var j = 0; j < listaEmpresas.length; j++) {
                if (listaGrade[i].Codigo_Empresa == listaEmpresas[j]) {
                    CodigoExistenteLinha.push(i);
                }
            }
        }
        this.AlteraDiaSemana(CodigoExistenteLinha, item, listaGrade);
    };
    C_ParPedCom.prototype.onRespostaAlterarDiaSemana = function (Resultado, listaGrade, item, codigo) {
        var listaEmpresas = this.lstEmpresa.GetValuesNumber();
        var dia = this.cboGradeSemana.GetValue();
        var prazo = this.cboPrazoResposta.GetValue();
        var hora = this.txtHorarioLimite.textBoxHorario.GetText();
        if (Resultado.Resultado == MsgBoxResult.Yes) {
            listaGrade.forEach(function (item) {
                for (var j = 0; j < listaEmpresas.length; j++) {
                    if (item.Codigo_Empresa == listaEmpresas[j]) {
                        item.Dia_Semana = dia;
                        item.Prazo_Resposta = prazo;
                        item.Hora = hora;
                    }
                }
            });
            this.gridPrazoResposta.PreencherGrid(listaGrade);
            this.ClicouBotaoAdicionar();
        }
    };
    C_ParPedCom.prototype.PreencherItemEInserirNaGrid = function (listaGrade, item) {
        listaGrade.push(item);
        this.gridPrazoResposta.PreencherGrid(listaGrade);
        this.ClicouBotaoAdicionar();
    };
    C_ParPedCom.prototype.AlteraDiaSemana = function (CodigoExistenteLinha, item, listaGrade) {
        if (CodigoExistenteLinha.length > 0) {
            this.MostrarPerguntaItem(0, CodigoExistenteLinha, item, listaGrade);
        }
        else {
            this.PreencherItemEInserirNaGrid(listaGrade, item);
        }
    };
    C_ParPedCom.prototype.MostrarPerguntaItem = function (index, CodigoExistenteLinha, item, listaGrade) {
        var _this = this;
        MsgBoxJS('Esta(s) empresa(s) está(ão) vinculada(s) ao dia ' +
            listaGrade[CodigoExistenteLinha[index]].Dia_Semana + '. Deseja alterar para o dia ' +
            item.Dia_Semana + '? ', MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (resultado) {
            _this.onRespostaAlterarDiaSemana(resultado, listaGrade, item, CodigoExistenteLinha[index]);
        });
    };
    C_ParPedCom.prototype.OnClickGravar = function () {
        if (this.gridPrazoResposta.DataSource.length > 0) {
            var parametros = {
                listaGrade: this.gridPrazoResposta.DataSource,
                nomeTela: ValoresSismoura.NomeTela,
                usuario: ValoresSismoura.UsuarioLogado,
                data: this.DataServidor()
            };
            this.ExecutarFuncaoServerSideSynch("GravarAlterar", parametros);
            MostrarMensagem("Parâmetros de Pedidos de Compra salvos com Sucesso!");
            this.LimpaCampos();
        }
        else {
            MostrarAlerta("Preencha a Grade Primeiro!");
        }
    };
    C_ParPedCom.prototype.LimpaCampos = function () {
        this.cboGradeSemana.SetSelectedIndex(-1);
        this.cboPrazoResposta.SetSelectedIndex(-1);
        this.txtHorarioLimite.textBoxHorario.SetText("");
        this.lstEmpresa.btnDesmarcar.DoClick();
        this.lstEmpresa.txtProcura.focus();
        this.gridPrazoResposta.PreencherGrid(null);
    };
    return C_ParPedCom;
}(MouraPageAngular));
var c_ParPedCom = new C_ParPedCom();
//# sourceMappingURL=C_ParPedCom.js.map