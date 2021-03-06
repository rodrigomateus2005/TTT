import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MouraService {

  private enginesCarregadas: { [engine: string]: any };

  private $sessao: {
    usuario: {
      Codigo: number
      , Nome: string
      , Abreviacao: string
      , Usuario_Windows: string
      , Demitido: boolean
      , Contador: boolean
      , Franqueador: boolean
      , Franqueado: boolean
      , Freelancer: boolean
      , isMoura: boolean
    }
    , empresa: {
      Codigo: number
      , Nome: string
      , Fantasia: string
    }
    , empresas: any[]
    , menus: any[]
    , versao_sistema
    , banco: {
      Nome: string
      Servidor: string
      Usuario: string
    }
  };

  public get sessao() {
    return this.$sessao;
  }

  private get absoluteUrl(): string {
    return window.location.href;
  }


  constructor(private http: HttpClient, private router: Router) {

  }

  public navegar(path: string) {
    this.router.navigate([path]);
  }

  public executarGet<T>(path: string, metodo: string, parametros: any): Promise<T> {
    return new Promise((resolve, reject) => {
      this.http.get<T>(path + '/' + metodo, {
        params: parametros
      }).toPromise().then(resolve).catch(reject).finally(() => {
        // this.$rootScope.$applyAsync();
      });
    });
  }

  public executarPost<T>(path: string, metodo: string, parametros: any): Promise<T> {
    return new Promise((resolve, reject) => {
      return this.http.post<T>(path + '/' + metodo, parametros).toPromise().then(resolve).catch(reject).finally(() => {
        // this.$rootScope.$applyAsync();
      });
    });

  }

  public executarGetPagina<T>(metodo: string, parametros: any): Promise<T> {
    return this.executarGet<T>(this.absoluteUrl, metodo, parametros);
  }

  public executarPostPagina<T>(metodo: string, parametros: any): Promise<T> {
    return this.executarPost<T>(this.absoluteUrl, metodo, parametros);
  }

  public getEngineProcura(engine: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.enginesCarregadas) {
        this.enginesCarregadas = {};
      }

      if (!engine || engine === '') {
        resolve(null);
        return;
      }

      if (this.enginesCarregadas[engine]) {
        resolve(this.enginesCarregadas[engine]);
        return;
      } else {
        this.executarGet<any>('/controles/Campos/MouraTextBoxProcura', 'GetProcuraEngine', { engine }).then((retorno) => {
          this.enginesCarregadas[engine] = retorno.data;
          resolve(retorno.data);
        }).catch(err => {
          reject(err);
        });
      }
    });
  }

  public getByIDProcura(engine: string, id: string, somenteAtivos: boolean): Promise<any> {
    return new Promise((resolve, reject) => {
      this.executarGet<any>('/controles/Campos/MouraTextBoxProcura', 'GetByIDProcura', {
        engine
        , id
        , somenteAtivos
      }).then((retorno) => {
        resolve(retorno.data);
      }).catch(err => {
        reject(err);
      });
    });
  }

  public executarProcura(engine: string, filtro: any, somenteAtivos: boolean): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.executarPost<any[]>('/controles/Dialogs/ModalProcura', 'ExecutarProcura', {
        engine
        , filtro
        , somenteAtivos
      }).then((retorno) => {
        resolve(retorno);
      }).catch(err => {
        reject(err);
      });
    });
  }

  public executarConsultaPorCodigo(id: string, parametrosAdicionais): Promise<any> {
    return new Promise((resolve, reject) => {
      this.executarPost<any[]>(this.absoluteUrl, 'ObterPorCodigo', {
        id
        , ParametrosAdicionais: parametrosAdicionais
      }).then((retorno) => {
        resolve(retorno);
      }).catch(err => {
        reject(err);
      });
    });
  }

  public executarConsultaCEP(cep: string): Promise<SiSMoura.Core.Entity.MouraTextBoxCEPRetornoPesquisa> {
    return new Promise((resolve, reject) => {
      this.executarGet<SiSMoura.Core.Entity.MouraTextBoxCEPRetornoPesquisa>('/controles/Campos/MouraTextBoxCep', 'PesquisarEndereco', {
        cep
      }).then((retorno) => {
        resolve(retorno);
      }).catch(err => {
        reject(err);
      });
    });
  }

  public executarPostComArquivo<T>(path: string, metodo: string, parametros: any): Promise<T> {
    return this.executarRequestComArquivo<T>('POST', path + '/' + metodo, parametros);
  }

  private executarRequestComArquivo<T>(method: string, url: string, data: any): Promise<T> {
    return new Promise((resolve, reject) => {

      let formData: FormData;
      if (data instanceof FormData) {
        formData = data;
      } else {
        formData = new FormData();
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const value = data[key];

            formData.append(key, value);
          }
        }
      }

      if (method === 'POST') {
        return this.http.post<T>(method, formData).toPromise().then(resolve).catch(reject);
      } else {
        return null;
      }
    });
  }

  public logarSismoura(usuario: string, senha: string, isLoginWindows: boolean, empresaSelecionada: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let parametros: any;

      parametros = {
        usuario,
        senha,
        isLoginWindows,
        empresaSelecionada
      };

      abrirEspera();
      try {
        this.executarPost<any>('Login', 'Login', parametros).then((d) => {
          try {
            const retorno = d.data;

            fecharEspera();
            if (retorno) {
              // if (String.IsNullOrWhiteSpace(this.QueryString.PageRedirect)) {
              //     window.location.href = formataURLRelativa("/Principal.aspx");
              // } else {
              //     window.location.href = this.QueryString.PageRedirect;
              // }

              this.preencherSessao(retorno);

              resolve(true);
              this.navegar('Principal');
            } else {
              resolve(false);
            }
          } catch (e) {
            fecharEspera();
            LogarException(e);
            reject();
          }
        }).catch((erro) => {
          fecharEspera();
          LogarException(erro);
          reject();
        });
      } catch (e) {
        fecharEspera();
        LogarException(e);
        reject();
      }
    });
  }

  public checkarLoginSessao(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.executarPost<any>('Login', 'CheckLoginSessao', null).then((d) => {
        if (!d.data) {
          reject();
        } else {
          const retorno = d.data;

          this.preencherSessao(retorno);

          resolve(this.sessao);
        }
      }).catch(reject);
    });
  }

  public deslogarSismoura() {
    this.$sessao = null;
    this.executarPost('/Login', 'Logout', {}).then(() => {
        this.navegar('Login');
    }).catch(() => {
        this.navegar('Login');
    });
  }

  private preencherSessao(retorno: any) {
    this.$sessao = {
      usuario: retorno.usuario
      , empresa: {
        Codigo: retorno.empresa.Codigo
        , Nome: retorno.empresa.Razao_Social
        , Fantasia: retorno.empresa.Fantasia
      }
      , menus: retorno.menus
      , empresas: retorno.empresas
      , versao_sistema: retorno.versao
      , banco: {
        Nome: retorno.banco.NomeBanco
        , Servidor: retorno.banco.Servidor
        , Usuario: retorno.banco.Usuario
      }
    };

    this.preencherMenuParent(this.sessao.menus, null);
  }

  private preencherMenuParent(menus: any[], menuParent: any) {
    if (menus) {
      for (let i = 0; i < menus.length; i++) {
        const menu = menus[i];

        menu.parent = menuParent;
        this.preencherMenuParent(menu.MenusFilhos, menu);
      }
    }
  }

}
