declare module SiSMoura.Core.Common.Configuracoes_Fiscal {
    const enum EnVersaoNFe {
        en310 = 0,
        en400 = 1
    }
}
declare module SiSMoura.Core.Common.ConfiguracoesRetaguarda {
    const enum enImportProdutoAtualizaPreco {
        enListaPreco = 0,
        enCadastroProduto = 1
    }
    const enum enModuloCredito {
        enPDV = 0,
        enRetaguarda = 1,
        enFinanceiro = 3
    }
    const enum tpEstabelecimento {
        Nenhum = 0,
        Supermercado = 1,
        LojaRoupa = 2,
        PetShop = 3,
        LojaVarejo = 4,
        AutoPosto = 5,
        Restaurante = 6,
        Distribuidora = 7,
        Livraria = 8,
        Farmacia = 9,
        Fazenda = 10
    }
    const enum tpPais {
        Brasil = 105,
        Portugal = 607,
        Paraguai = 586
    }
}
declare module SiSMoura.Core.Entity.Animais_Adocao_Movimento {
    const enum enTipoMovimentoAdocao {
        enEntrada = 1,
        enSaida = 2
    }
}
declare module SiSMoura.Core.Entity.Animais_Atendimento {
    const enum FORMA_PAGTO {
        CARTAO = 1,
        LOJA = 2
    }
    const enum PetzFormaPagZanthus {
        ClubeVantagens = 0,
        Aplicativo = 1,
        HotelDayCare = 2,
        ClinicaVeterinaria = 3,
        CentroEstetica = 4
    }
    const enum StatusEnvioZanthus {
        Pendente = 0,
        AguardandoEnvio = 1,
        EnvioEfetuado = 2,
        AtendimentoPago = 3,
        AtendimentoCancelado = 4,
        SolicitadaIntegracaoConvenio = 10,
        ConvenioIntegrado = 11,
        ConvenioEstornado = 12,
        CortesiaFinalizada = 99
    }
    const enum StatusPrePagamentoZANTHUS {
        NenhumaAcao = 0,
        AguardandoEnvio = 1,
        EnvioEfetuado = 2,
        PrePagamentoRealizado = 3
    }
}
declare module SiSMoura.Core.Entity.Animais_Atendimento_Aceite_Terceiro {
    const enum StatusAceite {
        Aceite = 1,
        Recusado = 2,
        Devolvido = 3
    }
}
declare module SiSMoura.Core.Entity.Animais_Cadastro {
    const enum enStatusAdocaoAnimal {
        enNENHUM = 0,
        enANIMAL_AGUARDANDO_ADOCAO = 1,
        enANIMAL_ADOTADO = 2,
        enANIMAL_DEVOLVIDO_ONG = 3
    }
}
declare module SiSMoura.Core.Entity.Animais_Checklist_Comportamento_Entrada_Adocao_Resposta {
    const enum enRespostaCheckListAvaliacaoComportamento {
        enSIM = 1,
        enNAO = 2,
        enNAO_INFORMADO = 3
    }
}
declare module SiSMoura.Core.Entity.Animais_Checklist_Entrada_Adocao_Resposta {
    const enum enRespostaCheckList {
        enSIM = 1,
        enNAO = 2,
        enNAO_INFORMADO = 3
    }
}
declare module SiSMoura.Core.Entity.Animais_Contrato_Plano {
    const enum enTipoPagamento {
        enMensal = 1,
        enAnual = 2
    }
}
declare module SiSMoura.Core.Entity.Animais_Entrada_Adocao {
    const enum enStatusEntradaAdocao {
        enEmAberto = 1,
        enAprovada = 2
    }
}
declare module SiSMoura.Core.Entity.Animais_Entrada_Adocao_Avaliacao_Item {
    const enum enStatusAvaliacaoPet {
        enNaoAvaliado = 1,
        enReprovado = 2,
        enAprovado = 3,
        enNaoCompareceu = 4
    }
}
declare module SiSMoura.Core.Entity.Animais_Hospedagem {
    const enum enAcaoCheckoutHospedagem {
        enNAO_COBRAR = 1,
        enADICIONAR_VALOR_SERVICO = 2,
        enADICIONAR_DIARIA = 3
    }
    const enum enDiasSemana {
        DOMINGO = 0,
        SEGUNDA = 1,
        TERCA = 2,
        QUARTA = 3,
        QUINTA = 4,
        SEXTA = 5,
        SABADO = 6
    }
    const enum enmRetornoCheckout {
        nenhumaAcao = 0,
        saindoAposPrevisto = 1,
        saindoAntesPrevisto = 2
    }
    const enum enOperacaoEmailHospedagem {
        enCheckout = 1,
        enCancelamento = 2
    }
    const enum TipoDiaria {
        NENHUMA = 0,
        MENSAL = 1,
        AVULSA = 2
    }
    const enum TipoHospedagem {
        TODAS = 0,
        HOTEL = 1,
        DAYCARE = 2
    }
}
declare module SiSMoura.Core.Entity.Animais_Hospedagem_Reserva {
    const enum enMeioPagamento {
        enPagamentoPresencial = 1,
        enLinkEmail = 2
    }
    const enum enOperacaoEnvioEmail {
        enCadastroReserva = 0,
        enCancelamentoReserva = 1,
        enCancelamentoAutomaticoReservaSemPagamento = 2,
        enIndicacaoParceiro = 3
    }
}
declare module SiSMoura.Core.Entity.Animais_Plano_Autorizacao {
    const enum enmCodigoRetornoPlanoAutorizacao {
        Nenhum = 0,
        ServicoNaoCobertoPeloPlano = 1,
        ServicoNaoAtingiuCarencia = 2,
        ServicoAtingiuQtdeMaximaUtilizacao = 3
    }
    const enum enmStatusPlanoAutorizacao {
        Nenhum = 0,
        Autorizado = 1,
        Negado = 2,
        DescontoProgressivo = 3,
        Pendente = 4
    }
}
declare module SiSMoura.Core.Entity.Animais_Plano_Saude {
    const enum enmTipoPlanoSaude {
        Integral = 1,
        CoParticipativo = 2,
        Desconto = 3
    }
}
declare module SiSMoura.Core.Entity.Campo_Cliente {
    const enum enmTipoCampo {
        Nenhum = 0,
        Combo = 1,
        Data = 2,
        Máscara = 3,
        Moeda = 4,
        Número = 5,
        Texto = 6,
        Telefone = 7
    }
}
declare module SiSMoura.Core.Entity.Campo_Movimentacao_Estoque {
    const enum enmTipoCampo {
        Nenhum = 0,
        Combo = 1,
        Data = 2,
        Máscara = 3,
        Moeda = 4,
        Número = 5,
        Texto = 6
    }
}
declare module SiSMoura.Core.Entity.Configuracao_Importacao_Tabela_Campo {
    const enum enTipo {
        Int = 1,
        Numerico = 2,
        Data = 3,
        Bit = 4,
        Texto = 5
    }
}
declare module SiSMoura.Core.Entity.Configuracoes_Linha_Empresa {
    const enum Configs {
        Utilizar_Preco_Regra_Escala_Automatico = 1,
        Habilitar_Desconto_Agendamento = 2,
        Utilizar_Lista_Preco_Automatica = 3,
        Habilitar_Novo_Agendamento = 4
    }
}
declare module SiSMoura.Core.Entity.Console_Atividade {
    const enum enSituacaoAtividade {
        Cadastrada = 1,
        Analise = 2,
        Recusou_análise = 3,
        Kanban = 4,
        Teste = 5,
        Recusou_teste = 6,
        Desenvolvida = 7,
        Finalizada = 8,
        Repassada = 9,
        Retorno = 10,
        Inativada = 11,
        ProductBacklo = 12,
        Realizado_Procedimento = 13,
        Com_o_Programador = 14,
        Banco_dados = 15,
        Devolvida_Teste = 16,
        Pendente_Atualizar = 17,
        Fila_para_Atualizar = 18,
        Atualizando_Cliente = 19,
        Teste_Qualidade = 20,
        Devolvida_Teste_Qualidade = 21,
        Recusou_Teste_Qualidade = 22,
        Teste_Quem_Cadastrou = 23,
        Devolvido_Programacao = 24,
        Analise_Segmento = 25,
        Recusou_Liberacao = 26,
        Recusou_Para_Analise = 27,
        Com_o_DBA = 28,
        Recusada_DBA = 29,
        Aguardando_Aprovacao_Diretoria = 30,
        Retornou_da_Aprovacao = 31,
        Aguardando_Aprovacao_Financeiro = 32,
        Freelancer = 33,
        NaoIdentificado = 99999999
    }
}
declare module SiSMoura.Core.Entity.Console_ForcaVenda_Campo {
    const enum Tela_ForcaVenda {
        Produto = 1,
        Cliente = 2
    }
}
declare module SiSMoura.Core.Entity.Contabil_Plano_Contas {
    const enum ModalidadeTipo {
        Credito = 0,
        Debito = 1
    }
    const enum NaturezaSpedConta {
        Ativo = 0,
        Passivo = 1,
        Liquido = 2,
        Resultado = 3,
        Compensacao = 4,
        Outras = 5
    }
    const enum OrigemConta {
        Ativo = 0,
        Passivo = 1,
        Resultado = 2,
        Encerramento = 3
    }
}
declare module SiSMoura.Core.Entity.Fiscal_Enum {
    const enum Tipo_Apuracao {
        PIS = 1,
        COFINS = 2
    }
}
declare module SiSMoura.Core.Entity.Fiscal_Mdfe_Enum {
    const enum Modalidade {
        Rodoviario = 1,
        Aereo = 2,
        Aquaviario = 3,
        Ferroviario = 4
    }
    const enum Tipo_Navegacao {
        Interior = 0,
        Cabotagem = 1
    }
    const enum Tipo_Proprietario {
        TAC_Agregado = 0,
        TAC_Independente = 1,
        Outros = 2
    }
    const enum Tipo_Unidade_Carga_Vazia {
        Container = 1,
        ULD = 2,
        Pallet = 3,
        Outros = 4
    }
    const enum Tipo_Unidade_Transporte {
        Rodoviario_Tracao = 1,
        Rodoviario_Reboque = 2,
        Navio = 3,
        Balsa = 4,
        Aeronave = 5,
        Vagao = 6,
        Outros = 7
    }
}
declare module SiSMoura.Core.Entity.Ifood_Pedido {
    const enum Ifood_Pedido_Status {
        Realizado = 1,
        Confirmado = 2,
        Saiu_Entrega = 3,
        Entregue = 4
    }
}
declare module SiSMoura.Core.Entity.Movimentacao_Entrada_Desagregacao {
    const enum EnTipoMovimentacaoDesag {
        EntradaProduto = 1,
        SaidaEstoque = 2
    }
}
declare module SiSMoura.Core.Entity.OrcamentoCampoLivres {
    const enum enmTipoCampo {
        Nenhum = 0,
        Combo = 1,
        Data = 2,
        Máscara = 3,
        Moeda = 4,
        Número = 5,
        Texto = 6,
        Telefone = 7
    }
}
declare module SiSMoura.Core.Entity.Parametros_Enum {
    const enum Forma_Integracao_Cartao {
        Por_Tipo = 1,
        Por_Bandeira = 2
    }
}
declare module SiSMoura.Core.Entity.Petz_Pagamento_Email_Stoom {
    const enum enSTOOMStatusPagamento {
        enNaoAutorizado = 0,
        enAutorizado = 1,
        enCapturado = 2
    }
    const enum enSTOOMTipoReserva {
        enAutorizarPagamento = 1,
        enAutorizar_E_CapturarPagamento = 2
    }
}
declare module SiSMoura.Core.Entity.Relatorio_Personalizado_Coluna {
    const enum TipoColuna {
        Texto = 0,
        Numero_Inteiro = 1,
        Numero_Decimal = 2,
        Data = 3,
        Data_Hora = 4,
        Data_Mes_Ano = 5
    }
}
declare module SiSMoura.Core.Entity.Relatorio_Personalizado_Filtro {
    const enum TipoFiltro {
        Texto = 0,
        Numero_Inteiro = 1,
        Numero_Decimal = 2,
        Periodo_Data = 3,
        Periodo_Hora = 4,
        Data = 5,
        Hora = 6,
        CheckboxList = 7,
        Combobox = 8,
        ProcuraComLista = 9,
        Procura = 10,
        ContaCorrente = 11,
        EmpresaCombo = 12,
        EmpresaList = 13,
        ComboCaixa = 14
    }
}
declare module SiSMoura.Core.Entity.Relatorio_Personalizado_Totalizador {
    const enum TipoTotalizador {
        Soma = 0,
        Contagem = 1,
        Media = 2,
        Maximo = 3,
        Minimo = 4
    }
}
declare module SiSMoura.Core.Entity.Rh_Campo_Personalizado {
    const enum enmTipoCampo {
        Nenhum = 0,
        Combo = 1,
        Data = 2,
        Moeda = 3,
        Número = 4,
        Texto = 5,
        Telefone = 6
    }
}
declare module System.Drawing.Imaging {
    const enum PixelFormat {
        Indexed = 65536,
        Gdi = 131072,
        Alpha = 262144,
        PAlpha = 524288,
        Extended = 1048576,
        Canonical = 2097152,
        Undefined = 0,
        DontCare = 0,
        Format1bppIndexed = 196865,
        Format4bppIndexed = 197634,
        Format8bppIndexed = 198659,
        Format16bppGrayScale = 1052676,
        Format16bppRgb555 = 135173,
        Format16bppRgb565 = 135174,
        Format16bppArgb1555 = 397319,
        Format24bppRgb = 137224,
        Format32bppRgb = 139273,
        Format32bppArgb = 2498570,
        Format32bppPArgb = 925707,
        Format48bppRgb = 1060876,
        Format64bppArgb = 3424269,
        Format64bppPArgb = 1851406,
        Max = 15
    }
}
//# sourceMappingURL=EnumsView.d.ts.map