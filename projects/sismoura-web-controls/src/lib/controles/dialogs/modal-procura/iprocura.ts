export interface IProcura {
  Nome: string;
  ExibirCheckBoxInativo: boolean;
  CampoDescricao: string;
  CamposProcura: CamposProcura[];
  ColunasProcura: ColunaProcura[];
  UrlCadastro: string;
  ExibirInformacoesAdicionais: boolean;
  CampoID: string;
  MensagemNaoEncontrou?: any;
  UsarComboEmpresa: boolean;
}

export interface CamposProcura {
  Tipo: number;
  DescricaoCampo: string;
  Valor: any;
}

export interface ColunaProcura {
  DataField: string;
  CaptionColuna: string;
  TamanhoColuna: number;
  TipoColuna: number;
  CasasDecimais: number;
}

export interface ProcuraRetorno {
  Id: number;
  Descricao: string;
}
