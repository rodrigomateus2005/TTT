import { Component, ViewChild, ElementRef } from '@angular/core';
import { MouraCampoComponent } from '../moura-campo/moura-campo.component';
import { ModalProcuraComponent } from '../../dialogs/modal-procura/modal-procura.component';
import { IProcura, ProcuraRetorno } from '../../dialogs/modal-procura/iprocura';
import { MouraService } from '../../../services/moura.service';

@Component({
  selector: 'moura-text-box-procura',
  templateUrl: './moura-text-box-procura.component.html',
  styleUrls: ['./moura-text-box-procura.component.scss']
})
export class MouraTextBoxProcuraComponent extends MouraCampoComponent {

  public engine: IProcura;

  private $engineName: string;
  public get engineName(): string {
    return this.$engineName;
  }
  public set engineName(value: string) {
    this.$engineName = value;
    this.engine = null;
    this.carregarEngine();
  }

  private $ngModelMoura: ProcuraRetorno;
  public get ngModelMoura(): ProcuraRetorno {
    return this.$ngModelMoura;
  }
  public set ngModelMoura(value: ProcuraRetorno) {
    this.$ngModelMoura = value;
  }

  public get ngModelMouraCodigo(): number {
    if (this.ngModelMoura) {
      return this.ngModelMoura.Id;
    } else {
      return null;
    }
  }
  public set ngModelMouraCodigo(value: number) {
    if (typeof value === 'string') {
      value = parseFloat(value);
    }

    if (value && !isNaN(value)) {
      if (!this.ngModelMoura || this.ngModelMoura.Id !== value) {
        this.mouraService.getByIDProcura(this.engineName, value.toString(), true).then(resultado => {
          if (resultado) {
            this.ngModelMoura = resultado;
          } else {
            this.ngModelMoura = null;
          }
        });
      }
    } else {
      this.ngModelMoura = null;
    }
  }

  public get ngModelMouraLabel(): string {
    if (this.ngModelMoura) {
      return this.ngModelMoura.Descricao;
    } else {
      return null;
    }
  }
  public set ngModelMouraLabel(value: string) {
  }

  @ViewChild('modalProcura', { static: false })
  public modalProcura: ModalProcuraComponent;

  private $permitirProcurar: boolean;
  public get permitirProcurar(): boolean {
    return this.$permitirProcurar;
  }
  public set permitirProcurar(value: boolean) {
    if (value == null || value === undefined) {
      value = true;
    }
    this.$permitirProcurar = value;
  }

  public constructor(elementRef: ElementRef, public mouraService: MouraService) {
    super(elementRef);

    this.permitirProcurar = true;
    this.carregarEngine();
  }

  public abrirProcura(textoCampoProcura: string) {
    this.modalProcura.abrir().then(resultado => {
      if (resultado) {
        this.ngModelMoura = resultado;
      }
    });
  }

  private carregarEngine() {
    if (!this.engine) {
      this.mouraService.getEngineProcura(this.engineName).then((engine) => {
        this.engine = engine;
      }).catch(e => {
        this.$engineName = null;
      });
    }
  }

  public onKeyDown(event) {
    if (this.permitirProcurar) {
      let abrirPesquisa = false;

      if (event.keyCode === 113) { abrirPesquisa = true; } // F2

      if (abrirPesquisa) {
        this.abrirProcura('');
      }
    }
  }

}
