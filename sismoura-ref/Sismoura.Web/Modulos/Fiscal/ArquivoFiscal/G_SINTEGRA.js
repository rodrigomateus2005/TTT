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
var G_SINTEGRA = /** @class */ (function (_super) {
    __extends(G_SINTEGRA, _super);
    function G_SINTEGRA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(G_SINTEGRA.prototype, "txtMesAno", {
        get: function () {
            return window['txtMesAno_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SINTEGRA.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SINTEGRA.prototype, "chkEnviarInventario", {
        get: function () {
            return window['chkEnviarInventario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SINTEGRA.prototype, "txtDataEstoque", {
        get: function () {
            return window['txtDataEstoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SINTEGRA.prototype, "cboDeposito", {
        get: function () {
            return window['cboDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SINTEGRA.prototype, "chkReg53", {
        get: function () {
            return window['chkReg53_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SINTEGRA.prototype, "chkEnviar5929", {
        get: function () {
            return window['chkEnviar5929_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SINTEGRA.prototype, "btnExportar", {
        get: function () {
            return window['btnExportar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SINTEGRA.prototype, "txtValidacao", {
        get: function () {
            return window['txtValidacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_SINTEGRA.prototype, "mdValidacao", {
        get: function () {
            return window['mdValidacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    G_SINTEGRA.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    G_SINTEGRA.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnExportar) {
            adicionarEventoMoura(this.btnExportar.Click, this.OnClickBtnExportar, this);
        }
    };
    G_SINTEGRA.prototype.LimparCampos = function () {
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        if (this.cboDeposito.GetItemCount() > 0) {
            this.cboDeposito.SetSelectedIndex(0);
        }
        else {
            this.cboDeposito.LimparSelecao();
        }
    };
    G_SINTEGRA.prototype.OnClickBtnExportar = function (s, e) {
        e.processOnServer = false;
        if (this.txtMesAno.Date) {
            this.Exportar();
        }
        else {
            MostrarAlerta('Informe o período de escrituração do SINTEGRA antes de realizar a exportação do arquivo.');
        }
    };
    G_SINTEGRA.prototype.Exportar = function () {
        try {
            var enviarInventario = this.chkEnviarInventario.Checked;
            var parametros = void 0;
            var retorno = void 0;
            var dataEstoque = void 0;
            if (this.txtMesAno.GetDate() > new Date()) {
                MostrarAlerta('Data inválida. Não é possível gerar o arquivo SINTEGRA com mês de apuração superior ao mês da data atual.');
                return false;
            }
            if (enviarInventario) {
                if (!this.txtDataEstoque.Date) {
                    MostrarAlerta('Informe a Data do Estoque do Inventário.');
                    return false;
                }
                if (this.txtDataEstoque.Date > new Date()) {
                    MostrarAlerta('Data do Estoque inválida. Não é possível gerar o arquivo SINTEGRA com a data do Estoque superior a data atual.');
                    return false;
                }
                if (this.cboDeposito.GetSelectedIndex() === -1) {
                    MostrarAlerta('Informe o Depósito do Inventário.');
                    return false;
                }
            }
            if (!this.txtDataEstoque.Date) {
                dataEstoque = this.txtDataEstoque.Text;
            }
            else {
                dataEstoque = this.txtDataEstoque.Date;
            }
            parametros = {
                EnviarInventario: enviarInventario,
                GerarReg53: this.chkReg53.Checked,
                Enviar5929: this.chkEnviar5929.Checked,
                DataEstoque: dataEstoque,
                Deposito: this.cboDeposito.GetSelectedIndex(),
                CodigoEmpresa: this.cboEmpresa.GetValue(),
                MesAno: this.txtMesAno.Date,
                EmpresaTexto: this.cboEmpresa.GetText()
            };
            retorno = this.ExecutarFuncaoServerSideSynch('Exportar', parametros);
            if (retorno.startsWith('Sem movimentação')) {
                MostrarAlerta(retorno);
                return false;
            }
            if (retorno.startsWith('Arquivo pré-validado')) {
                MostrarMensagem('<b>Gerar Arquivo SINTEGRA</b><br/>' + retorno);
                return false;
            }
            if (retorno.startsWith('O arquivo SINTEGRA')) {
                this.txtValidacao.SetText(retorno);
                this.mdValidacao.Show();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return G_SINTEGRA;
}(MouraPageAngular));
var g_SINTEGRA = new G_SINTEGRA();
//# sourceMappingURL=G_SINTEGRA.js.map