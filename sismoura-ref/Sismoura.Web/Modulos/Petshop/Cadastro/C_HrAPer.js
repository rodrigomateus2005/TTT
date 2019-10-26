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
var C_HrAPer = /** @class */ (function (_super) {
    __extends(C_HrAPer, _super);
    function C_HrAPer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_HrAPer.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrAPer.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrAPer.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrAPer.prototype, "txtProfissional", {
        get: function () {
            return window['txtProfissional_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrAPer.prototype, "txtSala", {
        get: function () {
            return window['txtSala_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrAPer.prototype, "lstDia", {
        get: function () {
            return window['lstDia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrAPer.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrAPer.prototype, "cboCategoriaPeriodo", {
        get: function () {
            return window['cboCategoriaPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrAPer.prototype, "txtHora", {
        get: function () {
            return window['txtHora_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrAPer.prototype, "txtHoraFinal", {
        get: function () {
            return window['txtHoraFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrAPer.prototype, "txtIntervalo", {
        get: function () {
            return window['txtIntervalo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrAPer.prototype, "dlgTelaModal", {
        get: function () {
            return window['dlgTelaModal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_HrAPer.prototype, "btnIndisponibilidade", {
        get: function () {
            return window['btnIndisponibilidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_HrAPer.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.txtProfissional) {
            adicionarEventoMoura(this.txtProfissional.Procurou, this.OnDepoisBuscarProfissional, this);
        }
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OncboEmpresaSelectedItemChanged, this);
        }
        if (this.btnIndisponibilidade) {
            adicionarEventoMoura(this.btnIndisponibilidade.Click, this.OnClickIndisponibilidade, this);
        }
    };
    C_HrAPer.prototype.OncboEmpresaSelectedItemChanged = function () {
        this.PreencherGrade();
        this.txtSala.LimparParametros();
        this.txtSala.AddParametro("codEmpresa", this.cboEmpresa.GetValue().toString());
    };
    C_HrAPer.prototype.OnClickIndisponibilidade = function (s, e) {
        e.processOnServer = false;
        if (this.txtProfissional.GetText().CNum() == 0) {
            MostrarAlerta("Selecione o profissional");
            return;
        }
        var params = [
            "CodProfissional=" + this.txtProfissional.GetText().CNum()
        ];
        abrirTelaNovaAbaParametros(URLTela.CadastroIndisponibilidadeProfissional, params);
    };
    C_HrAPer.prototype.OnDepoisBuscarProfissional = function () {
        var _this = this;
        this._codProfissional = this.txtProfissional.GetText().CNum();
        this.cboCategoriaPeriodo.Combo.ClearItems();
        if (this._codProfissional > 0) {
            var categorias = this.ExecutarFuncaoServerSideSynch("RetornaCategoriasProfissional", { codProfissional: this._codProfissional });
            if (categorias) {
                categorias.forEach(function (q) {
                    _this.cboCategoriaPeriodo.Combo.AddItem(q.Descricao, q.Value, "");
                });
            }
        }
        this.PreencherGrade();
    };
    C_HrAPer.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.EntityTela.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.txtCodigo.Enabled = false;
    };
    C_HrAPer.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.lstDia.LimparSelecao();
        this.txtHora.textBoxHorario.SetText("");
        this.txtHoraFinal.textBoxHorario.SetText("");
        this.txtIntervalo.Limpar();
        Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        Entity.Profissional = this._codProfissional;
        this.txtPeriodo.Iniciar();
        this.txtSala.LimparParametros();
        this.txtSala.AddParametro("codEmpresa", ValoresSismoura.EmpresaPadraoUsuario.toString());
        this.cboCategoriaPeriodo.ClearItems();
    };
    C_HrAPer.prototype.OnDepoisGravar = function () {
        try {
            _super.prototype.OnDepoisGravar.call(this);
            this.PreencherGrade();
            return true;
        }
        catch (ex) {
            LogarException(ex);
            return false;
        }
    };
    C_HrAPer.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_HrAPer.prototype.OnAntesGravar = function () {
        try {
            _super.prototype.OnAntesGravar.call(this);
            var codEntidade = 0;
            if (this.EntityTela.Codigo && this.EntityTela.Codigo > 0) {
                codEntidade = this.EntityTela.Codigo;
            }
            var parametros = {
                codProfissional: this.txtProfissional.GetText().CNum(),
                codEmpresa: this.cboEmpresa.GetValue(),
                codEntidade: codEntidade
            };
            var horario = this.ExecutarFuncaoServerSideSynch("VerificarExistenciaHorario", parametros);
            if (horario && !String.IsNullOrWhiteSpace(horario)) {
                MostrarAlerta(horario);
                return;
            }
            if (this.txtHora.textBoxHorario.GetDate().getTime() == this.txtHoraFinal.textBoxHorario.GetDate().getTime()) {
                MostrarAlerta("A hora inicial não pode ser igual a hora final");
                return;
            }
            if (this.txtHora.textBoxHorario.GetDate().getTime() > this.txtHoraFinal.textBoxHorario.GetDate().getTime()) {
                MostrarAlerta("A hora inicial não pode ser maior que a hora final");
                return;
            }
            if (this.txtIntervalo.GetText().CNum() == 0) {
                MostrarAlerta("Informe o intervalo");
                return;
            }
            this.EntityTela.Data_Inicial = this.txtPeriodo.textBoxCalendarioInicio.GetDate();
            this.EntityTela.Data_Final = this.txtPeriodo.textBoxCalendarioFim.GetDate();
            this.EntityTela.Horarios = [];
            for (var i = 0; i < this.lstDia.GetValues().length; i++) {
                var novoHorario = {};
                novoHorario.Dia = this.lstDia.GetValues()[i].CNum();
                novoHorario.Hora_Inicial = this.txtHora.textBoxHorario.GetDate();
                novoHorario.Hora_Final = this.txtHoraFinal.textBoxHorario.GetDate();
                novoHorario.Intervalo = this.txtIntervalo.GetText().CNum();
                this.EntityTela.Horarios.push(novoHorario);
            }
            return true;
        }
        catch (ex) {
            LogarException(ex);
            return false;
        }
    };
    C_HrAPer.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        this.txtHora.textBoxHorario.SetValue(e.data.Hora_Inicial);
        this.txtHoraFinal.textBoxHorario.SetValue(e.data.Hora_Final);
        this.txtPeriodo.textBoxCalendarioInicio.SetDate(e.data.Data_Inicial);
        this.txtPeriodo.textBoxCalendarioFim.SetDate(e.data.Data_Final);
        this.txtIntervalo.SetText(e.data.Intervalo);
        this.lstDia.LimparSelecao();
        var dias = e.data.Dias;
        var setar = [];
        if (dias.search("Domingo") != -1) {
            setar.push("1");
        }
        if (dias.search("Segunda") != -1) {
            setar.push("2");
        }
        if (dias.search("Terça") != -1) {
            setar.push("3");
        }
        if (dias.search("Quarta") != -1) {
            setar.push("4");
        }
        if (dias.search("Quinta") != -1) {
            setar.push("5");
        }
        if (dias.search("Sexta") != -1) {
            setar.push("6");
        }
        if (dias.search("Sábado") != -1) {
            setar.push("7");
        }
        this.lstDia.SetValues(setar);
    };
    C_HrAPer.prototype.PreencherGrade = function () {
        try {
            var parametros = {
                Profissional: this.txtProfissional.GetText().CNum(),
                Empresa: this.cboEmpresa.GetValue()
            };
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_HrAPer.prototype.OnDepoisBuscarExistente = function (Entidade) {
        try {
            _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
            this.PreencherGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_HrAPer;
}(MouraPageCadastroAngular));
var c_HrAPer = new C_HrAPer();
//# sourceMappingURL=C_HrAPer.js.map