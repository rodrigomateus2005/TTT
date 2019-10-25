import { Component, ViewChild } from '@angular/core';
import { MouraPageComponent } from '../core/moura-page/moura-page.component';
import { MouraModalComponent } from '../../../controls/controles/dialogs/moura-modal/moura-modal.component';
import { MouraService } from '../../../controls/services/moura.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends MouraPageComponent {

  @ViewChild('modalSelecaoEmpresa', { static: true })
  public modalSelecaoEmpresa: MouraModalComponent;

  public usuario: string;
  public senha: string;
  public empresaPadrao: number;
  public tipoSelecionado: string;

  public get isLoginWindows(): boolean {
    return this.tipoSelecionado === 'windows';
  }

  public tiposLogins: any[];

  public constructor(mouraService: MouraService) {
    super(mouraService);

    this.tiposLogins = [{
      Tipo: 'windows'
      , Text: 'Login Windows'
    }, {
      Tipo: 'classico'
      , Text: 'Login Clássico'
    }];
  }

  public clickLogin(): void {
    if (String.IsNullOrWhiteSpace(this.usuario)) {
      MostrarAlerta('Preencha o campo corretamente: Usuário');
      return;
    }

    if (String.IsNullOrWhiteSpace(this.senha)) {
      MostrarAlerta('Preencha o campo corretamente: Senha');
      return;
    }

    this.preLogar();
  }

  public preLogar(): void {
    const parametros = {
      login: this.usuario,
      senha: this.senha,
      loginWindows: this.isLoginWindows,
      bancoSelecionado: null,
      windowWidth: $(window).width(),
      windowHeight: $(window).height()
    } as any;

    abrirEspera();
    try {
      this.mouraService.executarPostPagina<any>('PreLogin', parametros).then(retorno => {
        fecharEspera();

        if (retorno.data) {

          if (!retorno.data.Usuario) {
            MostrarAlerta('Operador ou senha inválida');
            return;
          }

          if (retorno.data.Demitido) {
            MostrarAlerta('Não é possível acessar o sistema, este usuário esta marcado como demitido');
            return;
          }

          if (retorno.data.PedirEmpresa) {
            // this.mouraService.preencherPreLogin(retorno.data.EmpresasPreLogin);
            this.modalSelecaoEmpresa.abrir().then(() => {
              if (this.empresaPadrao > 0) {
                this.logar();
              }
            });
          } else {
            this.logar();
          }
        } else {
          MostrarAlerta('Operador ou senha inválida');
        }
      }).catch(erro => {
        fecharEspera();
        LogarException(erro);
      });
    } catch (e) {
      fecharEspera();
      LogarException(e);
    }
  }

  public logar() {
    this.mouraService.logarSismoura(this.usuario, this.senha, this.isLoginWindows, this.empresaPadrao);
  }

  public selecionarEmpresa() {
    if (this.empresaPadrao) {
      this.modalSelecaoEmpresa.fechar();
      this.logar();
    }
  }

}
