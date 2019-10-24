import { Component, ViewChild, ElementRef } from '@angular/core';
import { MouraControlComponent } from '../../core/moura-control/moura-control.component';
import { MouraModalComponent } from '../moura-modal/moura-modal.component';
import { MouraService } from 'src/lib/services/moura.service';
import { ProcuraRetorno } from '../modal-procura/iprocura';

@Component({
  selector: 'moura-email',
  templateUrl: './moura-email.component.html',
  styleUrls: ['./moura-email.component.scss']
})
export class MouraEmailComponent extends MouraControlComponent {

  public colunasGridAnexo: MouraGridColumn[];

  @ViewChild('modalMouraEmail', { static: false })
  public modalMouraEmail: MouraModalComponent;

  private $ngFiles: FileList;
  public get ngFiles(): FileList {
    return this.$ngFiles;
  }
  public set ngFiles(value: FileList) {
    this.$ngFiles = value;

    if (value && value.length > 0) {
      this.anexos.push({
        nome: value[0].name
        , content: value[0]
      });
    }
  }

  private $anexos: any[];
  public get anexos(): any[] {
    return this.$anexos;
  }
  public set anexos(value: any[]) {
    this.$anexos = value;
  }

  public remetentes: any[];
  public remetente: any;
  public emailDestinatario: string;
  public assunto: string;
  public mensagem: string;

  public constructor(elementRef: ElementRef, public mouraService: MouraService) {
    super(elementRef);

    this.anexos = [];
    this.colunasGridAnexo = [];

    if (!this.remetente || !this.remetente.Codigo) {
      MostrarAlerta('Informe um Remetente');
      return;
    }

    if (String.IsNullOrWhiteSpace(this.emailDestinatario)) {
      MostrarAlerta('Informe um E-Mail de Destino');
      return;
    }

    if (String.IsNullOrWhiteSpace(this.assunto)) {
      MostrarAlerta('Informe um assunto');
      return;
    }

    if (String.IsNullOrWhiteSpace(this.mensagem)) {
      MostrarAlerta('Informe uma mensagem');
      return;
    }

    const colunaNome = new MouraGridColumn('');
    colunaNome.caption = 'Anexo';
    colunaNome.fieldName = 'nome';

    this.colunasGridAnexo.push(colunaNome);

    this.mouraService.executarGet<any[]>('/controles/Dialogs/MouraEmail', 'GetRemetentes', null).then((remetentes) => {
      this.remetentes = remetentes;
    });
  }

  public $postLink() {

  }

  public abrir(): Promise<ProcuraRetorno> {
    this.anexos = [];

    return this.modalMouraEmail.abrir();
  }

  public onClickCancelar() {
    this.modalMouraEmail.fechar();
  }

  public onClickEnviar() {
    const parametros = {
      codigoRementente: this.remetente ? this.remetente.Codigo : 0
      , mensagem: this.mensagem
      , assunto: this.assunto
      , destinatarios: this.emailDestinatario
    };

    for (let i = 0; i < this.anexos.length; i++) {
      const anexo = this.anexos[i];

      parametros['anexo' + i] = anexo.content;
    }

    this.mouraService.executarPostComArquivo('/controles/Dialogs/MouraEmail', 'EnviarEmail', parametros).then(() => {
      MostrarMensagem('E-mail enviado com sucesso');

      this.modalMouraEmail.fechar();
    }).catch(() => {
      MostrarAlerta('Erro ao enviar email, tente novamente');
    });
  }

}
