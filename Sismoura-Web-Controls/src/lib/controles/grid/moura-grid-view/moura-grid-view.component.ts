import { Component, OnInit, ElementRef } from '@angular/core';
import { MouraControlComponent } from 'sismoura-web-controls/src/lib/controles/core/moura-control/moura-control.component';

@Component({
  selector: 'moura-grid-view',
  templateUrl: './moura-grid-view.component.html',
  styleUrls: ['./moura-grid-view.component.scss']
})
export class MouraGridViewComponent extends MouraControlComponent {

  private paginacoesPermitidas: number[] = [50, 100, 200];

  private $devExtremeGridView: DevExtremeGridViewDirective;
  public get devExtremeGridView(): DevExtremeGridViewDirective {
    return this.$devExtremeGridView;
  }
  public set devExtremeGridView(value: DevExtremeGridViewDirective) {
    this.$devExtremeGridView = value;

    this.atualizarGrid();
  }

  private $colunas: MouraGridColumn[];
  public get colunas(): MouraGridColumn[] {
    return this.$colunas;
  }
  public set colunas(value: MouraGridColumn[]) {
    this.$colunas = value;

    this.atualizarGrid();
  }

  private $ngDataSource: any[];
  public get ngDataSource(): any[] {
    return this.$ngDataSource;
  }
  public set ngDataSource(value: any[]) {
    this.$ngDataSource = value;

    this.setInstanceProperty((x) => x.ngDataSource = value);
  }

  private $alturaGrade: number;
  public get alturaGrade(): number {
    return this.$alturaGrade;
  }
  public set alturaGrade(value: number) {
    if (!value) {
      value = 0;
    }

    this.$alturaGrade = value;

    this.setInstanceProperty((x) => x.alturaGrade = value);
  }

  private $permitirMoverColunas: boolean;
  public get permitirMoverColunas(): boolean {
    return this.$permitirMoverColunas;
  }
  public set permitirMoverColunas(value: boolean) {
    this.$permitirMoverColunas = value;

    this.setInstanceProperty((x) => x.permitirMoverColunas = value);
  }

  private $permitirOrdenacao: boolean;
  public get permitirOrdenacao(): boolean {
    return this.$permitirOrdenacao;
  }
  public set permitirOrdenacao(value: boolean) {
    this.$permitirOrdenacao = value;

    this.setInstanceProperty((x) => x.permitirOrdenacao = value);
  }

  private $permitirEditarGrid: boolean;
  public get permitirEditarGrid(): boolean {
    return this.$permitirEditarGrid;
  }
  public set permitirEditarGrid(value: boolean) {
    this.$permitirEditarGrid = value;

    this.setInstanceProperty((x) => x.permitirEditarGrid = value);
  }

  private $exibirLinhaFiltro: boolean;
  public get exibirLinhaFiltro(): boolean {
    return this.$exibirLinhaFiltro;
  }
  public set exibirLinhaFiltro(value: boolean) {
    this.$exibirLinhaFiltro = value;

    this.setInstanceProperty((x) => x.exibirLinhaFiltro = value);
  }

  private $exibirPainelPesquisa: boolean;
  public get exibirPainelPesquisa(): boolean {
    return this.$exibirPainelPesquisa;
  }
  public set exibirPainelPesquisa(value: boolean) {
    this.$exibirPainelPesquisa = value;

    this.setInstanceProperty((x) => x.exibirPainelPesquisa = value);
  }

  private $exibirAgrupamento: boolean;
  public get exibirAgrupamento(): boolean {
    return this.$exibirAgrupamento;
  }
  public set exibirAgrupamento(value: boolean) {
    this.$exibirAgrupamento = value;

    this.setInstanceProperty((x) => x.exibirAgrupamento = value);
  }

  private $exibirPaginacao: boolean;
  public get exibirPaginacao(): boolean {
    return this.$exibirPaginacao;
  }
  public set exibirPaginacao(value: boolean) {
    this.$exibirPaginacao = value;

    this.setInstanceProperty((x) => x.exibirPaginacao = value);
  }

  private $tamahoPaginacao: number;
  public get tamahoPaginacao(): number {
    return this.$tamahoPaginacao;
  }
  public set tamahoPaginacao(value: number) {
    if (this.paginacoesPermitidas.filter(x => x === value).length === 0) {
      value = this.paginacoesPermitidas[0];
    }

    this.$tamahoPaginacao = value;

    this.setInstanceProperty((x) => x.tamahoPaginacao = value);
  }

  public onSelecionouLinha: ($options) => void;

  constructor(elementRef: ElementRef) {
    super(elementRef);

    $scope.$watchCollection(() => this.ngDataSource, () => {
      if (this.devExtremeGridView) {
        this.devExtremeGridView.atualizar();
      }
    });
  }

  private setInstanceProperty<T>(propriedadeSet: (x: DevExtremeGridViewDirective) => void): void {
    if (!this.devExtremeGridView) {
      return;
    }

    if (!propriedadeSet) {
      return;
    }

    propriedadeSet(this.devExtremeGridView);
  }

  public atualizarGrid() {
    if (this.devExtremeGridView) {
      if (this.colunas) {
        for (let i = 0; i < this.colunas.length; i++) {
          this.colunas[i].mouraGridViewController = this;
        }
      }
    }
  }

}
