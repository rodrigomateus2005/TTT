import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { MouraControlComponent } from '../../core/moura-control/moura-control.component';
import { MouraModalComponent } from '../moura-modal/moura-modal.component';
import { MouraService } from '../../../services/moura.service';
import { ProcuraRetorno, IProcura, CamposProcura } from './iprocura';
import { MouraGridColumn } from '../../grid/moura-grid-view/moura-grid-column';
import { MouraGridColumnBotaoSelecionar } from '../../grid/moura-grid-view/moura-grid-column-botao-selecionar';

@Component({
  selector: 'modal-procura',
  templateUrl: './modal-procura.component.html',
  styleUrls: ['./modal-procura.component.scss']
})
export class ModalProcuraComponent extends MouraControlComponent {

  private resolve: (ret: ProcuraRetorno) => void;
  private reject: (err) => void;

  public likeText = [
      {
          Valor: 0
          , Descricao: 'Exatamente igual'
      },
      {
          Valor: 1
          , Descricao: 'Começar com'
      },
      {
          Valor: 2
          , Descricao: 'Terminar com'
      },
      {
          Valor: 3
          , Descricao: 'Qualquer parte'
      }
  ];

  @ViewChild('modalMouraProcura', { static: false })
  public modalMouraProcura: MouraModalComponent;

  private $engine: IProcura;
  public get engine(): IProcura {
      return this.$engine;
  }
  @Input()
  public set engine(value: IProcura) {
      this.$engine = value;

      if (value) {
          if (value.CamposProcura && value.CamposProcura.length > 0) {
              this.itemSelecionado = value.CamposProcura[0];
          }

          if (value.ColunasProcura && value.ColunasProcura.length > 0) {
              const colunasProcura = this.engine.ColunasProcura.map((item) => {
                  const coluna = new MouraGridColumn(item.DataField);

                  coluna.fieldName = item.DataField;
                  coluna.caption = item.CaptionColuna;
                  coluna.width = item.TamanhoColuna;

                  return coluna;
              });
              colunasProcura.unshift(new MouraGridColumnBotaoSelecionar());

              this.colunasProcura = colunasProcura;
          }
      }
  }

  public colunasProcura: MouraGridColumn[];
  public resultado: any[];

  public itemSelecionado: CamposProcura;
  public likeSelecionado: any = this.likeText[3];

  public constructor(public mouraService: MouraService) {
    super();
  }
  public abrir(): Promise<ProcuraRetorno> {
      return new Promise((resolve, reject) => {
          this.resolve = resolve;
          this.reject = reject;
          this.modalMouraProcura.abrir().then(() => {
              if (this.resolve) {
                  this.resolve(null);
                  this.resolve = null;
              }
          }).catch(reject);
      });
  }

  public pesquisar(): void {
      this.mouraService.executarProcura(this.engine.Nome, this.getFiltroSelecionado(), true).then((retorno) => {
          this.resultado = retorno;
      });
  }

  public getFiltroSelecionado(): any {
      return {
          Valor: this.itemSelecionado.Valor
          , TipoLike: this.likeSelecionado.Valor
          , Campo: this.itemSelecionado.DescricaoCampo
      };
  }

  public onSelecinouLinha($options) {
      this.resolve({
          Id: $options.data[this.engine.CampoID]
          , Descricao: $options.data[this.engine.CampoDescricao]
      });
      this.resolve = null;
      this.modalMouraProcura.fechar();
  }

}
