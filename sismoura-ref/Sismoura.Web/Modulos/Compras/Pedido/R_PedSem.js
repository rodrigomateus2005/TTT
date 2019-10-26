//class R_PedSem extends MouraPageRelacaoAngular {
//    get optTipo(): MouraRadioButtonList {
//        return window['optTipo_Object'];
//    }
//    get txtPeriodo(): MouraTextBoxPeriodo {
//        return window['txtPeriodo_Object'];
//    }
//    get cboDia(): MouraComboBox {
//        return window['cboDia_Object'];
//    }
//    get lstEmpresa(): MouraListBoxEmpresa {
//        return window['lstEmpresa_Object'];
//    }
//    get lstFornecedor(): MouraCheckBoxList {
//        return window['lstFornecedor_Object'];
//    }
//    get cboSituacao(): MouraComboBox {
//        return window['cboSituacao_Object'];
//    }
//    get GridPrincipal(): MouraGridViewJS {
//        return window['GridPrincipal_Object'];
//    }
//    public OnPageLoad() {
//        super.OnPageLoad();
//        this.optTipo.SetValue('D');
//        this.cboSituacao.SetSelectedIndex(0);
//    }
//    protected PreencherGrade() {
//        super.PreencherGrade();
//        //var parametros: any;
//        try {
//            if (this.txtPeriodo) {
//                if (this.txtPeriodo.textBoxCalendarioInicio.GetDate() == null || this.txtPeriodo.textBoxCalendarioFim.GetDate() == null) {
//                    MostrarAlerta("As Datas do Período são de preenchimento Obrigatório!");
//                    return;
//                }
//            }
//            if (this.cboDia.GetSelectedIndex() < 0) {
//                MostrarAlerta("Dia da Grade Semanal é de preenchimento Obrigatório!");
//                return;
//            }
//            if (!this.lstFornecedor.SelectedValues || this.lstFornecedor.SelectedValues.length == 0) {
//                MostrarAlerta("Um ou mais Fornecedores são de preenchimento Obrigatório!");
//                return; 
//            } 
//        //    parametros = {
//        //        tipo: this.optTipo.GetValue(),
//        //        dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
//        //        dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
//        //        gradeSemanal: this.cboDia.GetValue(),
//        //        empresa: this.lstEmpresa.GetValuesRelacao(),
//        //        fornecedor: this.lstFornecedor.GetValuesRelacao(),
//        //        situacao: this.cboSituacao.GetValue()
//        //    }
//        //    var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
//        //    this.GridPrincipal.PreencherGrid(retorno);
//        } catch (ex) {
//            LogarException(ex);
//            fecharEspera();
//        }
//    }
//    protected LimparCampos() {
//        this.optTipo.SetValue('D');
//        this.txtPeriodo.textBoxCalendarioInicio.SetDate(new Date)
//        this.txtPeriodo.textBoxCalendarioFim.SetDate(new Date)
//        this.cboDia.SetSelectedIndex(0);
//        this.lstEmpresa.LimparSelecao();
//        this.lstFornecedor.LimparSelecao();
//        this.cboSituacao.SetSelectedIndex(0);
//        this.GridPrincipal.PreencherGrid([]);
//        this.RefreshAngular();
//    }
//}
//const r_PedSem = new R_PedSem();
//# sourceMappingURL=R_PedSem.js.map