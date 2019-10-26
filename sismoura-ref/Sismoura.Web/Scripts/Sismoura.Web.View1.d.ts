
 
 

 

/// <reference path="EnumsView.ts" />

declare module SiSMoura.Core.Common {
	interface Configuracoes_Fiscal extends SiSMoura.Core.Common.Entity {
		Acrescimo_Outras_Despesas: boolean;
		Adicionar_Classificacao_Dados_Adicionais: boolean;
		Adicionar_Codigo_Orcamento_Dados_Adicionais: boolean;
		Adicionar_Condicao_Pagamento: boolean;
		Adicionar_CST_NF: boolean;
		Agrupar: boolean;
		Agrupar_Descricao: string;
		Agrupar_Produtos_NF: boolean;
		Agrupar_Servicos: boolean;
		Alterar_Documento_Mercantil_Receber: boolean;
		Alterar_Numero_NF: boolean;
		Ambiente_Envio_Nfe: string;
		Arquivo_CTe_XSd: string;
		Cabecalho_Recibo: boolean;
		Calcular_Peso: boolean;
		Calcular_Volume_NF: boolean;
		Caminho_AtoCotepe: string;
		Caminho_CTe: string;
		Caminho_NFe: string;
		Caminho_REDF: string;
		Caminho_XSD: string;
		Cancelar_Venda_NF: boolean;
		Casas_Decimais_Desconto_NF: number;
		Casas_Decimais_Truncar: number;
		Certificado_Padrao_Nfe: string;
		CFOP_Cliente: boolean;
		CFOP_Consignacao: string;
		CFOP_COO_Estadual: string;
		CFOP_COO_Interestadual: string;
		CFOP_Dados_Adicionais: boolean;
		CFOP_Devolucao_Consignacao: string;
		CFOP_Estadual_Padrao: string;
		CFOP_Interestadual_Padrao: string;
		Classificacao: boolean;
		Cliente_Consignacao: number;
		Cod_OS_Dados_Adicionais: boolean;
		Codigo: number;
		Conta_Contabil_Padrao: number;
		Conta_Corrente_Padrao: string;
		CTe_Homologacao: boolean;
		Dados_Adicionais_Padrao: string;
		Dados_Adicionais_ST_NFE: boolean;
		Dados_Adicionais_Troca: boolean;
		Desabilita_Fatura: boolean;
		Desconsiderar_Vasilhame: boolean;
		Desconto_Dados_Adicionais: boolean;
		Destac_PIS_COFINS: boolean;
		Digitar_BaseST: boolean;
		Discriminar_Controlado: boolean;
		Doc_Merc_Padrao: number;
		Email_Assunto: string;
		Email_Conta: string;
		Email_Copia: string;
		Email_Corpo: string;
		Email_Porta: string;
		Email_Senha: string;
		Email_SMTP: string;
		Email_SSl: boolean;
		Embutir_Acrescimo: boolean;
		Embutir_Desconto: boolean;
		Embutir_IPI_Frete: boolean;
		Emitir_Duplicata_NF: boolean;
		Emitir_NF_Calculo_Quantidade: string;
		Empresa_Deposito: boolean;
		Especie_NF_Paulista: string;
		Especie_Padrao: string;
		Estoque_Negativo: boolean;
		Executou_Conversao_Imposto: boolean;
		Fatura_NFe_Padrao: string;
		Gerar_NFe_Automaticamente: boolean;
		Gerar_Por_Carga: boolean;
		Gerar_Receber_Fiscal: boolean;
		ICMS_Produto: boolean;
		ICMS_ST_Dados_Adicionais: boolean;
		Imp_End_Entrega_NFe: boolean;
		Imp_Objeto_OS: boolean;
		Importar_Desconto_Orcamento: boolean;
		Importar_NF: number;
		Importar_Observacao_Produto: boolean;
		Importar_Volume_Venda: boolean;
		Impressao_Saltos_Recibo: number;
		Impressora_Padrao_Danfe: string;
		Imprimir_Codigo_Barras_Danfe: boolean;
		Imprimir_Descricao_Imposto: boolean;
		Imprimir_LOTE_Produto_Descricao: boolean;
		Imprimir_Referencia: boolean;
		Imprimir_Referencia_NF: boolean;
		Imprimir_Vencimentos_NFe: boolean;
		Imprimir_Vendedor_NF: boolean;
		Informar_Cliente_Devolucao: boolean;
		Marca_Padrao: string;
		Mensagem_Desconto_Venda: boolean;
		Modelo_Emissor_NFe: string;
		Modelo_NF: string;
		Modo_Impressao_Duplicata: number;
		Mostrar_CFOP_Secundario: boolean;
		Mostrar_Codigo_Cliente_NFe: boolean;
		Nao_Discriminar_Valores_Fatura: boolean;
		Nao_Emitir_Sem_Fatura: boolean;
		Nao_Excluir_Receber: boolean;
		Nao_Importar_Servicos: boolean;
		Nao_Imprimir_Fatura: boolean;
		NF_Simples_Nac_Emitir_Msg: boolean;
		NF_Travar_Cliente_Imp_Venda: boolean;
		NFeMoura: string;
		Observacao_Cliente: boolean;
		Observacao_Orcamento: boolean;
		Observacao_Venda_Produto: boolean;
		Ocultar_Codigo: boolean;
		Ocultar_Tipo_NF: boolean;
		Ordenar_Produto: boolean;
		Path_Contmatic: string;
		Path_FolhaMatic: string;
		Path_Programa_GNRE: string;
		Path_SEF: string;
		Path_Sped: string;
		PathSintegra: string;
		Permitir_Alterar_CFOP: boolean;
		Permitir_Mudar_Total_Produtos: boolean;
		Permitir_Produto_Troca: boolean;
		Permitir_Somar_Produtos: boolean;
		Permitir_Tipo_Presumida: boolean;
		Produto_Frete: number;
		ProdutoSpedNfse: number;
		Qtde_Vias_Duplicata: number;
		RatearDescontoST: boolean;
		Regra_Consumidor_Final: boolean;
		RegraImpDev: boolean;
		Regras_Simples: boolean;
		Selecionar_Prod_Fornecedor: boolean;
		Sempre_Enviar_St_Sped: boolean;
		Sempre_Importar_Quantidade: boolean;
		Sempre_Pedir_Lista: boolean;
		Serie_Padrao_NF: number;
		Sintegra_75_Serados: boolean;
		Sintegra_Cupom_Fiscal: boolean;
		Sintegra_Gerar_Notas_Zeradas: boolean;
		Sintegra_Lancar_Registro_50: boolean;
		Somar_Frete_SIMPLES: boolean;
		Sped_Fiscal_Versao: string;
		Sped_Inventario_Patrimonio: boolean;
		Sped_Pis_Versao: string;
		Tela_Emitir_Boleto: boolean;
		Texto_Padrao_Fatura: string;
		Tipo_Valor_Agrupado: string;
		Transportadora_Padrao: number;
		Valor_Despesas_Icms: boolean;
		Venda_Dados_Adicionais: boolean;
		Verificar_CFOP: boolean;
		Verificar_Regra_Imposto: boolean;
		Versao_CTe: string;
		Versao_Gia_RJ: string;
		Versao_NFe: string;
		Versao_NFe_Descricao: string;
		Versao_NFe_Enum: SiSMoura.Core.Common.Configuracoes_Fiscal.EnVersaoNFe;
	}
	interface Configuracoes_Pet extends SiSMoura.Core.Common.Entity {
		Adocao_Utilizar_Assinatura_Digital: boolean;
		Alterar_Profissional_Agenda_Servico_Pago: boolean;
		Animais_Adocao_Utilizar_MicroChip: boolean;
		Atendimento_Bloquear_Editar_ValorServico: boolean;
		Atendimento_Bloquear_Servicos_SemLista: boolean;
		Atendimento_Confirmar_Termos: boolean;
		Atendimento_Manter_Profissional: boolean;
		Atendimento_ObrigrarLote: boolean;
		Atendimento_Solicitar_Motivo_Desconto: boolean;
		Bloquear_Atendimento_Pdv: boolean;
		Bloquear_Usuario_Pet: boolean;
		CabeWEB: string;
		Checkin_Situacao_Finalizado: number;
		Checkin_Situacao_Iniciado: number;
		Checkin_TempoEsperaMaximo: number;
		CheckList_Avaliacao_Comportamento_Entrada: number;
		CheckList_Avaliacao_Diaria_Animais_Fila_Adocao: number;
		CheckList_Avaliacao_Entrada: number;
		Codigo: number;
		Codigo_Empresa_Animal: boolean;
		Comissao_Cartao: boolean;
		Comissao_Cheque: boolean;
		Comissao_Receber: boolean;
		Configuracao_Email_Exame_Recusado: number;
		Configuracao_Email_Padrao_Agendamento: number;
		Configuracao_Email_Resultado_Exame: number;
		Configuracao_Layout_Pdf_Exame: number;
		Consulta_Ocultar_Peso: boolean;
		Cor_Aganim_Concluidonaopago: number;
		Cor_Aganim_Concluidonaopago_Fundo: number;
		Cor_Aganim_Concluidopago: number;
		Cor_Aganim_Concluidopago_Fundo: number;
		Cor_Aganim_Emespera: number;
		Cor_Aganim_Naoconcluidonaopago: number;
		Cor_Aganim_Naoconcluidonaopago_Fundo: number;
		Cor_Aganim_Pago: number;
		Cor_Aganim_Pago_Fundo: number;
		Cor_Aganin_Indisponivel: number;
		Cor_Aganin_Indisponivel_Fundo: number;
		Cor_AgHora_Concluidonaopago: number;
		Cor_AgHora_Concluidopago: number;
		Cor_AgHora_Emespera: number;
		Cor_AgHora_Naoconcluidonaopago: number;
		Cor_AgHora_Pago: number;
		Cor_Checkin_LimiteMaximo: number;
		Cor_Checkin_Prioritario: number;
		Cor_R_Agehos_Hospedagens: number;
		Cor_R_Agehos_Reservas: number;
		Cor_R_Agehos_Reservashospedagens: number;
		Cor_R_LocOcu_Internacoes: number;
		Cor_Servicos_Pagos: string;
		Ddd_Bina: number;
		Destacar_Atendimento: boolean;
		Dias_Retorno: number;
		Documento_Padrao_Acidente: number;
		Documento_Padrao_Avaliacao_Espelho: number;
		Documento_Padrao_Avaliacao_Filhote: number;
		Dose_Agendada: boolean;
		Email_Config_Alter_Pag_Clubz: number;
		Email_Config_Cancelamento_Clubz: number;
		Email_Destinatario_Contrato_Adocao: string;
		Email_Enviar_Cancelamento_Clubz: string;
		Email_Enviar_Cancelamento_Reserva: number;
		Email_Enviar_Cancelamento_Reserva_Sem_Pagamento: number;
		Email_Enviar_Checkout_Hotel: number;
		Email_Enviar_Contrato_Adocao: number;
		Email_Enviar_Entrada_Adocao: number;
		Email_Enviar_Indicacao_Hotel_Parceiro: number;
		Email_Enviar_Reserva_DayCare: number;
		Email_Enviar_Reserva_Hotel: number;
		Email_Enviar_Reserva_Pagamento_DayCare: number;
		Email_Enviar_Reserva_Pagamento_Hotel: number;
		Email_Layout_Alter_Pag_Clubz: number;
		Email_Layout_Cancelamento_Clubz: number;
		Email_Rementente_Devolucao_Pet_ONG: number;
		Email_Remetente_Agendamento: number;
		Email_Remetente_Contrato_Adocao: number;
		Email_Remetente_Entrada_Adocao: number;
		Email_Remetente_Hospedagem: number;
		Email_Utilizar_Envio_Homologacao: string;
		Email_Utilizar_Envio_Homologacao_Adocao: string;
		Exame_Fisico_Clube_Vantagens: string;
		Exame_Listar_Independente_Animal: boolean;
		Exibir_Aba_Produto: boolean;
		Exibir_Atendimento_Pendente: boolean;
		Exibir_CIO_HistoricoCompleto: boolean;
		Exibir_Informacoes_Exame_HistoricoCompleto: boolean;
		Expediente_Fim: string;
		Expediente_Inicio: string;
		Finalizadora_Zanthus_App: number;
		Finalizadora_Zanthus_Hospedagem: number;
		Gerar_Varios_Atendimentos_Internacao: boolean;
		Hora_Entrada_Daycare: string;
		Hora_Saida_Daycare: string;
		Hospedagem_Checkin: string;
		Hospedagem_Checkout: string;
		Hospedagem_Codigo: number;
		Hospedagem_Modelo_Ficha: number;
		Hospedagem_Utilizar_Pagamento_Email: boolean;
		Imprimir_Animal: boolean;
		Imprimir_Bairro: boolean;
		Imprimir_Chegada_Loja: boolean;
		Imprimir_Data: boolean;
		Imprimir_Data_Inicio: boolean;
		Imprimir_Endereco: boolean;
		Imprimir_Especie: boolean;
		Imprimir_Fone: boolean;
		Imprimir_Idade: boolean;
		Imprimir_Inicio_Atendimento: boolean;
		Imprimir_Obs_Endereco: boolean;
		Imprimir_Obs_Servico: boolean;
		Imprimir_Pelagem: boolean;
		Imprimir_Profissional: boolean;
		Imprimir_Proprietario: boolean;
		Imprimir_Raca: boolean;
		Imprimir_Retirada_Cao: boolean;
		Imprimir_Sem_Valor: boolean;
		Imprimir_Sexo: boolean;
		Imprimir_Termino_Atendimento: boolean;
		Integracao_Zanthus: boolean;
		Internacao_Checkin: string;
		Internacao_Checkout: string;
		Internacao_Codigo: number;
		Limite_Tempo_Agendamento: number;
		Lista_Preco_App: number;
		Maiusculas: boolean;
		Microchip_Utilizar_Integracao_Entrada_Animal: boolean;
		Minutos_Expiracao_Atendimento_App: number;
		Modelo_Email_Contrato_Adocao_Adotante: number;
		Modelo_Email_Devolucao_Pet_ONG: number;
		Modelo_Impressao_Contrato_Castrado_ONG: number;
		Modelo_Impressao_Contrato_Nao_Castrado_ONG: number;
		Modificar_Proprietario_Atendimento: boolean;
		Modo_Impressao_Cadastro_Atendimento: string;
		Mostrar_Diagnostico: boolean;
		Nao_Abater_Desconto: boolean;
		Obrigar_Agendar_Vacina: boolean;
		Obrigar_Atendimento_Especie: boolean;
		Obrigar_Conferencia_Atendimento: boolean;
		Obrigar_Motivo_Desconto: boolean;
		Obrigar_Proprietario_Especie: boolean;
		Ocultar_Comissao_Servicos: boolean;
		Ocultar_Peso: boolean;
		Permitir_Alterar_Horario: boolean;
		Permitir_Checkout_Hospedagem_Sem_Pagamento: boolean;
		Permitir_Desconto_Convenio: boolean;
		Petz_App_Codigo_Config_Email: number;
		Petz_App_Desconto_Funcionario: number;
		Porcentagem_Desconto_Cliente_Novo: number;
		Porcentagem_Desconto_Fidelidade: number;
		Porcentagem_Desconto_Maximo_Atendimento: number;
		Porta_Bina: number;
		Profissional_Utilizar_Diaria_Hospedagem: number;
		Remetente_Email_Exame_Recusado: number;
		Remetente_Resultado_Exame: number;
		Rodape_Ticket: string;
		RodaWEB: string;
		Saltos: number;
		Servico_Codigo_Livre: boolean;
		Servicos_Agendados_Valor: boolean;
		Status_Exame_Execucao: number;
		Status_Exame_Finalizado: number;
		Status_Exame_Pendente: number;
		Status_Exame_Recusado: number;
		Stoom_App_Client_ID_Api: string;
		Stoom_App_Client_Secret_Api: string;
		Stoom_App_Senha_Basic_Api: string;
		Stoom_App_Senha_Bearer_Api: string;
		Stoom_App_URL_Api: string;
		Stoom_App_Usuario_Basic_Api: string;
		Stoom_App_Usuario_Bearer_Api: string;
		Tempo_Anterior: number;
		Tempo_Bloquear_Atendimento: number;
		Tempo_Minimo_AgendamentoAPP: number;
		Tempo_Posterior: number;
		Tempo_SessaoAPP: number;
		Tolerancia_Atraso: number;
		Usar_Bina: boolean;
		Usuario_Atendimento_App: number;
		Usuario_Logado_Relserv: boolean;
		Utilizar_Acidente_Atendimento: boolean;
		Utilizar_Data_Retorno: boolean;
		Utilizar_Envio_Email_Producao: boolean;
		Utilizar_Envio_Email_Producao_Adocao: boolean;
		Utilizar_Ficha_Clinica: boolean;
		Utilizar_Frequencia: boolean;
		Utilizar_Indicacao: boolean;
		Utilizar_laboratorio: boolean;
		Utilizar_Lista_Preco_Empresa: boolean;
		Utilizar_Procura_Animal: boolean;
	}
	interface ConfiguracoesRetaguarda {
		Abrir_Atualizacao_Preco: boolean;
		Abrir_Contas_Pagar: boolean;
		Abrir_Procura_Produto: boolean;
		Abrir_Tela_CadProduto: number;
		Agenda_Empresa: boolean;
		Agromoura_Utilizar_PSA: boolean;
		Agrupar_Estoque: boolean;
		Alterar_Consignacao_Existente: boolean;
		Alterar_Data_Emissao: boolean;
		Alterar_Estoque_Atualizar_Precos: boolean;
		Alterar_Pedido_Compra_Vinculado_Entrada: boolean;
		Alterar_Produtos_Mesma_Familia: boolean;
		Alterar_Receber_Troca: boolean;
		Ambiente_iMendes: number;
		Analise_Financeira_Somar_Lancamento: boolean;
		Anterior: number;
		Argox_Copia: boolean;
		Argox_Modelo: string;
		Arrendondar_Valor_Kit: boolean;
		Ativar_Troca_Empresa: boolean;
		Atualizar_Descricao_Produto: boolean;
		Atualizar_Fornecedor_Produto_Entrada: boolean;
		Atualizar_Kit: boolean;
		Atualizar_Todos_Precos: boolean;
		Autorizar_Novas_Telas: boolean;
		Baixa_Automatica_Cheque: boolean;
		Baixa_Rec_Residuo: boolean;
		Baixar_Cartao_Automatico: boolean;
		Baixar_CR_Automaticamente: boolean;
		Baixar_Estoque_Kit: boolean;
		baixar_servico_estoque: boolean;
		Baixar_Somente_KIT: boolean;
		Balanca_Bits_Dados: string;
		Balanca_Bits_Parada: string;
		Balanca_Gerar_Lista_Preco: boolean;
		Balanca_Grupo_Setor: boolean;
		Balanca_Orcamento: boolean;
		Balanca_Paridade: string;
		Balanca_Reduzido: boolean;
		Banco_AFAPI: string;
		Base_Lista_Preco: string;
		Bloquear_Cliente_Empresa: boolean;
		Bloquear_Custo_Novo: boolean;
		Bloquear_Devolucao_Deposito: boolean;
		Bloquear_Devolucao_Motivo: boolean;
		Bloquear_Dias_Atraso: number;
		Bloquear_Documento_Repetido: boolean;
		Bloquear_Gerar_Lancamento_Receber: number;
		Bloquear_Inserir_Produto: boolean;
		Bloquear_Produtos_Inexistentes: boolean;
		Bloquear_Produtos_Por_Fornecedor: boolean;
		Bloquear_Qtde_Caixa: boolean;
		Bloquear_Qtde_Divergente: boolean;
		bloquear_semestoque: number;
		Bloquear_Servico_RComissao: boolean;
		Bloquear_Unitario: boolean;
		Bloquear_Unitario_Consignacao: boolean;
		Bloquear_Venda_Crediario: boolean;
		BolDataVigen: boolean;
		Boleto_Unico_Vencimento_Tela: boolean;
		BOrcDataR: string;
		Bordero_Imp_Matricial_Meia_Folha: boolean;
		Bordero_Pre_Visualizar: boolean;
		buscar_cliente_banco_franqueador: boolean;
		Buscar_Clientes_ZonaVenda: boolean;
		Buscar_Vendedor_Cliente: boolean;
		C_PPromo: boolean;
		Cabecalho_Report: number;
		Cad_Cliente_Pessoa_Padrao: string;
		Cad_Consig_Campos_Obrigatorios: boolean;
		Cad_Orcamento_Inf_Quant: boolean;
		Cad_Orcamento_Produto_Grade: number;
		Cad_Prod_Ref_Etiq: number;
		Cadastro_KIT_Lista_Preco: boolean;
		CadProd_MateriaPrima_Preco: boolean;
		Calcular_Custo: boolean;
		Calcular_Custo_Total: boolean;
		Calcular_Digito: boolean;
		Calcular_Fator_Custo: boolean;
		Calcular_Margem: boolean;
		Calcular_Orcamento_Automatico: boolean;
		Calcular_Preco_Venda_Relacao: boolean;
		Calcular_Qtde_Peso: boolean;
		Calcular_Saldo_Lancamento: boolean;
		Calcular_Venda_Kit: boolean;
		Caminho_Importar_XML: string;
		Caminho_MouraMail: string;
		Caminho_Sintegra: string;
		Campo_Codigo_Internet: boolean;
		Campo_Comprador: number;
		Campo_Estoque_Fisico: string;
		Campo_Numero_Documento_Boleto: number;
		cancelar_comada_microterminal_bematech: boolean;
		Cancelar_Venda_Efetivada: boolean;
		Carencia: number;
		Carga_Dinamica: boolean;
		Carga_Limite_Pedido: number;
		Carga_Limite_Peso: number;
		Carga_Tipo_Corte: string;
		Carregar_PDV_Gravar: boolean;
		Carta_Frete: boolean;
		Cartao_Presente_Controlar_Por_Empresa: boolean;
		Cartao_Recebido_Sit_Confirmado: boolean;
		Casas_Decimais_Custo_Composto: number;
		Casas_Decimais_Estoque: number;
		Casas_Decimais_Manipulacao: number;
		Casas_Decimais_Valor: number;
		Casas_Pdv_3: boolean;
		CC_Orcame: string;
		CC_Padrao: boolean;
		Certificado_Download_XML: string;
		Cheque_Obriga_nome: boolean;
		Cheque_Troco: boolean;
		Cheques_GerarLancamento_Bloqueado: boolean;
		Cliente_Consig_Listar: boolean;
		Cliente_Exibir_Nome: string;
		Cliente_Pesquisar_Cartao: boolean;
		Cliente_Veiculo: boolean;
		CNPJ_Emissor: string;
		Codigo_Farmacia_Convenio_Zanin: number;
		Codigo_Livre_Produto: boolean;
		Codigo_Sequencial_Cliente: boolean;
		Codigo_Sequencial_Fornecedor: boolean;
		Codigo_Sequencial_Produto: boolean;
		Colunas_Matricial: number;
		Com_CC_Padrao_Lanc: string;
		Com_Ger_Lanc_Pago: boolean;
		Comando_Guilhotina: string;
		Comissao_Cartao: boolean;
		Comissao_Cheque: boolean;
		Comissao_Produto: boolean;
		Comissao_Receber: boolean;
		Compactar_ViewState: boolean;
		Conceito_Preco: string;
		Conferencia_Informar_Quantidade: boolean;
		Configuracao_Grade_Por_Usuario: boolean;
		Configurar_Grade_Usuario: boolean;
		Confirmar_Controlado_Lote: boolean;
		Cons_Informar_Doc: boolean;
		Considerar_Desconto: boolean;
		Considerar_Qtde_Embalagem: boolean;
		Consignacao: boolean;
		Consignacao_Cliente_Bloquear: boolean;
		Consignacao_Modelo_Impressao: string;
		Consignacao_Ocultar_Ajudante: boolean;
		Consignacao_Ocultar_Deposito: boolean;
		Consignacao_Ocultar_Documento: boolean;
		Consignacao_Organizar_Impressao: string;
		Consignacao_Permitir_Vendedor: boolean;
		Consignacao_Produto_Diferente: boolean;
		Consignacao_Situacao_Gera_Venda: boolean;
		Consistencia_Entrada: boolean;
		ConsulHistProd: boolean;
		Consulta_Venda_Preco_Custo: boolean;
		Conta_Contabil_Contrato: number;
		Conta_Fornecedor: boolean;
		Conta_Receber_Excluir_Observacao: boolean;
		Conta_Vendedor_Cliente: boolean;
		Contagem_Sequencial_Item_a_Item: boolean;
		Continuar_Cadastro_Produto: boolean;
		Contrato_Utilizar_Produtos: boolean;
		Controlar_Credito_Matriz: boolean;
		Controlar_Receber_Matriz: boolean;
		ControlCC: string;
		Convenio_Desconto_Etiqueta: string;
		Conversao_Moeda: boolean;
		Corte_Argox: number;
		Cotacao_Eletronica_Inserir_Produtos: string;
		Cotacao_Gravar_Zerado: boolean;
		Cotacao_Moeda: boolean;
		Cotacao_Trazer_Unitario: boolean;
		CPF_Transmissor: string;
		CR_EmissaoResiduo: boolean;
		Credito_aPartir_de: string;
		Credito_Cliente_Contas_Vencidas: boolean;
		CST_Zerar_ICMS: boolean;
		Curva_Agrupar: boolean;
		Curva_Tela_Simplificada: boolean;
		CurvaABC_Modificar_Ordenacao: boolean;
		CUSTO_MOVIMENTACAO: string;
		Data_Fixa_Final: Date;
		Data_Fixa_Inicial: Date;
		Data_Periodo_Fixo: boolean;
		Datareport_Margem_Esquerda: number;
		Datareport_Margem_Rodape: number;
		Datareport_Margem_Topo: number;
		DePadrao_DeTodos: boolean;
		Deposito_Padrao_por_Empresa: boolean;
		DescEmpresa: number;
		Desconsiderar_Frete: boolean;
		Desconto_Antes_Pagto: number;
		Desconto_Final_Promocao: string;
		Desconto_Orcamento: number;
		Descricao_Dependente: string;
		Dias_Alerta_Vencimento: number;
		Dias_Alt_Senha_Usuario: number;
		Dias_Aviso_Receber: number;
		Dias_Entrega: string;
		Dias_Entrega_Manipulacao: string;
		Digitar_Lote_Producao: boolean;
		Digitos_Cartao_Fidelidade: number;
		Discriminar_Juros_Resumo_Vendas: boolean;
		Dividir_materia: boolean;
		Doc_Merc_Bol: boolean;
		Dolar_Alterar_CustoMargem_Produto: boolean;
		dotz_codigo_campanha: string;
		dotz_codigo_loja: string;
		dotz_codigo_parceiro: string;
		dotz_diretorio_envio_ftp: string;
		dotz_diretorio_retorno_ftp: string;
		dotz_identificacao_parceiro: string;
		dotz_porta_ftp: string;
		dotz_senha_ftp: string;
		dotz_url_ftp: string;
		dotz_usuario_ftp: string;
		Duplicata_Automatica: boolean;
		Ecommerce_Banco_Dados: string;
		Ecommerce_Caminho_Imagens: string;
		Ecommerce_FTP_Endereco: string;
		Ecommerce_FTP_Senha: string;
		Ecommerce_FTP_Usuario: string;
		ecommerce_produto_frete: number;
		Ecommerce_SQLSERVER: string;
		Ecommerce_SQLSERVER_Senha: string;
		Ecommerce_SQLSERVER_Usuario: string;
		ecommerce_vendedor_padrao: number;
		Email: string;
		Email_POP3: string;
		Email_Porta_POP3: number;
		Email_Porta_SMTP: number;
		Email_Senha: string;
		Email_SMTP: string;
		Email_SSL: boolean;
		Email_TimeOut: number;
		Emissao_Contrato_Obrigar_Anexo: boolean;
		Empresa_Codigo_Entrada: boolean;
		Empresa_Codigo_Pagar: boolean;
		Empresa_Padrao_Buscar: number;
		Empresa_Padrao_Orcamento: string;
		Empresa_Padrao_Orcamento_Alterar: boolean;
		Empresas_CNPJS_Iguais: boolean;
		Entrada_Abrir_Tela_Cad_Prod: number;
		Entrada_Emissao: boolean;
		Entrada_Produto_Alterar_NCM: boolean;
		Entrada_Produto_Bloquear_Des_Dif: boolean;
		Entrada_Produto_Escriturar: boolean;
		Entrada_Produto_Obs_Pagar: boolean;
		Entrada_Produto_Utilizar_Data: boolean;
		Entrada_Referencia: boolean;
		Entrada_Tipo_Ordenacao: string;
		Entrega_Ordenar_Por: number;
		Entrega_Parcial: boolean;
		EntregaParc_Estoque_Negativo: boolean;
		EP_Arredondar_Preco_Venda: number;
		Est_Produt_Obrig: boolean;
		Estabelecimento: number;
		Estabelecimento_Ecommerce: boolean;
		EstabelecimentoEnum: SiSMoura.Core.Common.ConfiguracoesRetaguarda.tpEstabelecimento;
		Estoque_Inserir_Item_a_Item: boolean;
		Estoque_Minimo_Empresa: boolean;
		Etiq_Cabecalho: string;
		Etiq_Mensagem: string;
		EtiQuaImp: string;
		Etiqueta_Apos_Entrada: boolean;
		Etiqueta_Utilizada: string;
		Evitar_Produto_Referencia_Repetida: boolean;
		EVITAR_PRODUTO_REPETIDO: boolean;
		ExbtnRecalc: boolean;
		Exibe_Estoque_Unitario_Produto: boolean;
		exibir_abaixo_estoque_minimo: boolean;
		exibir_apenas_dep_vinc_empresa: boolean;
		Exibir_CancCaixa: boolean;
		Exibir_Cartao_Previsao_Fluxo: boolean;
		Exibir_Check_Impressao_Orcamento: boolean;
		Exibir_Conceito_Cliente: boolean;
		Exibir_Conciliacao_Completa: boolean;
		Exibir_Deposito_Empresa_Selecionada: boolean;
		Exibir_Dup_Pedido_Compra: boolean;
		Exibir_Entregas: boolean;
		Exibir_Grade_Lista_Orcamento: boolean;
		Exibir_Inconsistencia_Estoque: boolean;
		Exibir_Lista_Preco: boolean;
		Exibir_Lista_Procura: boolean;
		Exibir_Mensagem_Entrada: boolean;
		Exibir_msg_Zerado: boolean;
		Exibir_Ref_OBS: boolean;
		Exibir_Todos_Contagem: boolean;
		Exibir_Valor_Impressao_Matricial: boolean;
		Exigir_Alt_Senha_Usuario: boolean;
		Exigir_Fornecedor_Cadastro_Produto: boolean;
		ExMarImOrc: boolean;
		Farmacia_Menu_Personalizado: boolean;
		Fator_Quantidade: boolean;
		Filiais_Produt_Obrig: boolean;
		Filizola_Comunicacao: string;
		Filtro_Boleto_OnLine: boolean;
		Filtro_Localizacao1: string;
		Filtro_Localizacao2: string;
		Filtro_Localizacao3: string;
		Final_Etiqueta: number;
		Fonte_Impressao: string;
		Fonte_Impressao_Rodape: string;
		Fonte_Tamanho: number;
		Fonte_Tamanho_Rodape: number;
		Fonte_Tamanho_Titulo: number;
		Formatar_Telefone: boolean;
		Formato: string;
		formato_padrao_CB: number;
		Fornec_Produt_Obrig: boolean;
		Fornecedor_Busca_Email: boolean;
		Frete_Multiplicar_Qtde: boolean;
		Frete_Preco_Cliente: boolean;
		Funcionamento_ContaR: string;
		G_Remessa_Dia_Codigo: boolean;
		Gare_ICMS: boolean;
		Gerar_Analise: boolean;
		Gerar_Barra_Balanca: boolean;
		Gerar_Codigo_Barras: boolean;
		Gerar_Lanc_Cont_Automatico: boolean;
		gerar_lancamento_caixa_manutencao_venda: boolean;
		Gerar_Lancamento_Conta: number;
		Gerar_Lancamento_Fornecedor: boolean;
		Gerar_Lote_Entrada: boolean;
		Gerar_Ponto_Fidelidade_Orcamento: boolean;
		Gerar_Todos_Codigos_Barras_Produto: boolean;
		Gerar_Varios_Atendimentos_Internacao: boolean;
		GerT_Cred: boolean;
		Gravar_Consig_documento_Diferente: boolean;
		Grupo_Multiplicador_Venda: boolean;
		HabFiliacaoAnimal: boolean;
		Habilitar_Botao_Receita_Oculos: boolean;
		Habilitar_Campo_Obs_End: boolean;
		Habilitar_Consulta_SPC: boolean;
		Habilitar_DP: boolean;
		Historico_Exibir_Receber: boolean;
		Horarios_Abertos: boolean;
		I_Matric_ImpCab: boolean;
		IC_Situacao_Orcamento_Tablet: boolean;
		ICMS_Estado: number;
		IFOOD_Habilitar: boolean;
		Imagem_Prod_Referencia: boolean;
		Imp_Email_Orc: boolean;
		Imp_Produt_Obrig: boolean;
		Imp_Term_TLP_Modelo_Etiq: number;
		ImpCedentComp: boolean;
		ImpCredUtiCli: boolean;
		ImpG_Quebra_Linha_Auto: boolean;
		Import_Produto_Atualiza_Preco: SiSMoura.Core.Common.ConfiguracoesRetaguarda.enImportProdutoAtualizaPreco;
		Importar_Excel_Entrada_Produto: boolean;
		Importar_Obs_Servico: boolean;
		Importar_Pedido_Empresa: boolean;
		Impressao_Campo_Personalizado_Orcamento: boolean;
		Impressao_Orcamento: string;
		Impressao_Word: number;
		Impressora_Termina_TLP_2844: string;
		Impressora_Termina_TLP_Temperatura: number;
		Impressora_Zebra_Modelo_Padrao: string;
		Imprime_Endereco_Cliente_Entrega: boolean;
		Imprimir_Alterar_Situacao: boolean;
		Imprimir_Assinatura_Vendedor: boolean;
		Imprimir_Campo_Obs_End: boolean;
		Imprimir_Cod_Produto_Orcamento: boolean;
		Imprimir_Desconto_Unitario: boolean;
		Imprimir_Etiquetas_XML: boolean;
		Imprimir_FormaPag_OuFolha: boolean;
		Imprimir_Formas_Pagamento: boolean;
		Imprimir_Lista_Relacao: boolean;
		Imprimir_Orcamento_Ordem_Inserido: boolean;
		Imprimir_Produto_Caixa: boolean;
		Imprimir_Produtos_Bordero: boolean;
		Imprimir_Telefones_Vendedor: boolean;
		Imprimir_Zona_Venda: boolean;
		ImprRefeOrc: boolean;
		Inativo_Procura: boolean;
		Inf_Placa_Com_Mascara: boolean;
		Info_Preencher_Endereco: boolean;
		Informar_Decreto: boolean;
		Informar_Desconto_Medico: boolean;
		informar_entrada_saida_fechamento: boolean;
		Informar_Pedido_Saida: boolean;
		Inserir_Empresa_Cod_Cliente: boolean;
		Integracao_Systextil: boolean;
		Integrador_Automatico_iMendes: boolean;
		InValCreCli: boolean;
		IP_Servidor_MultiLoja: string;
		isVestCasa: boolean;
		Juros: number;
		Key_Google: string;
		Lancamento_Deposito: boolean;
		Layout_Argox: string;
		Layout_Sped: number;
		Limitar_Impressao_Orcamento: boolean;
		Limite_Produtos: number;
		Limpar_Doc_Bancario: boolean;
		LimparTela_Orcamento: boolean;
		Linguagem_Zebra: string;
		Linha1_Etiq: number;
		Linha2_Etiq: number;
		Linha3_Etiq: number;
		Linhas_Matricial: number;
		Lista_ABCFarma: number;
		Lista_Atualizar_Venda: boolean;
		Lista_Servico_Pet: boolean;
		Listar_Contato_Cliente_Procura: boolean;
		ListPrecOrc: boolean;
		Local_ANVISA: string;
		Login_Caminho_LDAP: string;
		Login_DominioRede: string;
		M_Func_Cred: number;
		Maiusculas: number;
		Mala_Direta_Email: boolean;
		Manip_Valor_Mao_Obra: number;
		Manip_Valor_Min_Orc: number;
		Manter_Dados_Produto: boolean;
		Manter_Entrada: boolean;
		Manter_Nosso_Numero_Boleto: boolean;
		Manter_Produto_Procura: boolean;
		Manter_Ultimo_Produto: boolean;
		Manutencao_Vendas_Bloquear_Crediario: boolean;
		Marca_Chave_Referencia: boolean;
		Margem_Seguranca: number;
		Matricial_Pre_Visualizacao: boolean;
		Mensagem_Bloqueio_Cheque: boolean;
		Mensagem_Orc_Estoque_Minimo: boolean;
		Mensagem_Residuo: boolean;
		Mensgem_Rodape_Hist_Consignacao: string;
		Mesa_Por_Garcom: boolean;
		microterminal_bematech_solicitar_senha: boolean;
		Min_In_Intinere: number;
		Mod_Conferencia_Estoque: string;
		Modelo_Balanca: string;
		Modelo_Balanca_Etiqueta: string;
		Modelo_Filizola: string;
		Modelo_Imp_Ficha_Pesagem: string;
		Modelo_Nota: string;
		Modificar_Estoque_Cad_Pro: boolean;
		modificar_venda_caixa_aberto: boolean;
		Modo_Autenticacao: number;
		Modo_Envio_Email: string;
		Modo_Fracionado: number;
		Modo_Ponto_Fidelidade: string;
		ModuloCredito: number;
		ModuloCreditoEnum: SiSMoura.Core.Common.ConfiguracoesRetaguarda.enModuloCredito;
		Mostrar_CabecalhoExcel: boolean;
		Mostrar_Giro_Mes_Pedido_Compra: boolean;
		Mostrar_Interesses_Cliente: boolean;
		Mostrar_Marca: boolean;
		Mostrar_Mensagem_Campo_Comisionado: boolean;
		Mostrar_Motivo_Produto: boolean;
		Mostrar_Peso_Pedido: boolean;
		Mostrar_PrecoCusto_Margem: boolean;
		Mostrar_Provisionado: boolean;
		Mostrar_Redes_Sociais: boolean;
		Mostrar_Venda_Gerada: boolean;
		Motivo_por_Produto: boolean;
		Motorista_Padrao: string;
		Movimentacao_Entrada_Produto: boolean;
		Movimentacao_Saida_Produto: boolean;
		Multiloja_Banco: string;
		Multiloja_IP: string;
		Multiloja_Senha: string;
		Nao_Abrir_Atualizacao_Preco: boolean;
		Nao_Add_Prod_Sem_PrecoCusto: boolean;
		Nao_Add_Servico: boolean;
		Nao_Alterar_Estoque: boolean;
		Nao_Calcular_Margem: boolean;
		Nao_Usar_Resolucao: boolean;
		NBanco_Franqueador: string;
		NF_NCM_msg_alerta_quando_incorreto: boolean;
		Nome_Cliente_Orcamento: string;
		Novo_Custo_Produto: string;
		Numero_Calcado: boolean;
		Obs_Produto_Orcamento: boolean;
		Observacao_Cliente: boolean;
		Observacao_Padrao_Romaneio: string;
		Ocultar_Desconto: boolean;
		Ocultar_Empresa_Orcamento: boolean;
		Ocultar_Preco_Normal: boolean;
		Ocultar_Totalizacao_Impressao: boolean;
		Ocultar_Vendedor_Devolucao: boolean;
		Orc_Assinatura_Email: boolean;
		Orc_Cabecalho_Imp: string;
		Orc_CampoL_Imprimir1: boolean;
		Orc_CampoL_Imprimir2: boolean;
		Orc_CampoL_Imprimir3: boolean;
		Orc_CampoL_Imprimir4: boolean;
		Orc_CampoL_Imprimir5: boolean;
		Orc_CampoL_Imprimir6: boolean;
		Orc_CampoL_Nome1: string;
		Orc_CampoL_Nome2: string;
		Orc_CampoL_Nome3: string;
		Orc_CampoL_Nome4: string;
		Orc_CampoL_Nome5: string;
		Orc_CampoL_Nome6: string;
		Orc_CampoL_Tamanho1: number;
		Orc_CampoL_Tamanho2: number;
		Orc_CampoL_Tamanho3: number;
		Orc_CampoL_Tamanho4: number;
		Orc_CampoL_Tamanho5: number;
		Orc_CampoL_Tamanho6: number;
		Orc_CampoL_Tipo1: string;
		Orc_CampoL_Tipo2: string;
		Orc_CampoL_Tipo3: string;
		Orc_CampoL_Tipo4: string;
		Orc_CampoL_Tipo5: string;
		Orc_CampoL_Tipo6: string;
		Orc_Data_Hora: boolean;
		Orc_Desc_Unitario: boolean;
		Orc_Exibir_Dep: boolean;
		Orc_Exibir_Margem_Lucro: boolean;
		Orc_Frete_Valor: boolean;
		Orc_Ignorar_Venc: boolean;
		Orc_Impr_Assinaturas: boolean;
		Orc_Imprimir_Peso_Unitario_Produto: boolean;
		Orc_Informar_Codigo: boolean;
		Orc_Ocultar_Operador: boolean;
		Orc_Parc_Calcular_Restante: boolean;
		Orc_Produto_Informar_Peso: boolean;
		Orc_Somar_Frete: boolean;
		Orc_Subst_Vendedor: boolean;
		Orc_Utilizar_Conversao_Unid_Produto: boolean;
		Orcamento_AbrirPesquisa: boolean;
		Orcamento_Arredondar_Peso: boolean;
		Orcamento_Assinatura_Cliente: string;
		Orcamento_Data_Igual_Entrega: boolean;
		Orcamento_Deposito_Por_Orcamento: boolean;
		Orcamento_Desc_Maximo: boolean;
		Orcamento_Exibir_Comissao_Produto: boolean;
		Orcamento_Exibir_Totais_Grade: boolean;
		Orcamento_Forma_Pagamento_Padrao: string;
		Orcamento_Imp_Matr_Meia_Folha: boolean;
		Orcamento_Imprimir_Devedor_Credito: boolean;
		Orcamento_Informar_Nome_Produto: boolean;
		Orcamento_Margem_Minima: number;
		Orcamento_Mesmo_Codigo: boolean;
		Orcamento_Mostrar_Cartao: boolean;
		Orcamento_Mostrar_Cdc: boolean;
		Orcamento_Mostrar_Cheque: boolean;
		Orcamento_Mostrar_Crediario: boolean;
		Orcamento_Mostrar_Dinheiro: boolean;
		Orcamento_Mostrar_Ticket: boolean;
		Orcamento_Mostrar_Valor_Desconto: boolean;
		Orcamento_Observacao: string;
		Orcamento_Ocultar_Linhas_Separadoras: boolean;
		Orcamento_OcultarSituacao: boolean;
		Orcamento_Ordenar_Produtos: boolean;
		Orcamento_Organizar_Impressao: string;
		Orcamento_Permitir_Deposito: boolean;
		Orcamento_Pesquisar_Produto_Lote: boolean;
		Orcamento_Rodape: string;
		Orcamento_Segunda_Via_Com_Valor: boolean;
		Orcamento_Segunda_Via_Sem_Valor: boolean;
		Orcamento_Sempre_Imprimir: boolean;
		Orcamento_Venda: boolean;
		Orcamento_Vendedor: boolean;
		Orcamento_Visualizar_Impressao: boolean;
		Orcamento_Zona_Entrega: boolean;
		OrcBloquearSub: boolean;
		OrcHabilitarAcrescimo: boolean;
		OrcPedCom: boolean;
		OrcPocOrdAlf: boolean;
		Ordernar_Ordem_Alfabetica: boolean;
		P_Limite_Credito: number;
		PAF_ECF_Codigo_DAV: number;
		PAF_ECF_Codigo_PV: number;
		Pag_Comis_Impostos: boolean;
		PaisEnum: SiSMoura.Core.Common.ConfiguracoesRetaguarda.tpPais;
		Papel_Consignacao: number;
		Parar_Quantidade: boolean;
		Parcela_Etiqueta: number;
		Path_Servidor: string;
		PathBalanca: string;
		PathExportacao: string;
		PathImportacao: string;
		PathLog: string;
		PedCompra_Status_Aprovado: boolean;
		Pedido_Cabecalho: string;
		Pedido_Compra_Endereco_Fornecedor: boolean;
		Pedido_Compra_Limpar_Tela: boolean;
		Pedido_Compra_PDF: boolean;
		Pedido_Tipo_Desc: number;
		Pedir_Empresa_Login: boolean;
		Pedir_Senha_Dar_Baixa: number;
		Pedir_Senha_DescUnit: boolean;
		Pedir_Senha_Diminuir_Valor: boolean;
		Pedir_Usuario_Tela: boolean;
		Permitir_Alterar_Orcamento_Vendedor: boolean;
		permitir_aprovar_ped_comp: boolean;
		Permitir_Conciliacao_Periodo: boolean;
		Permitir_Data_Baixa: boolean;
		Permitir_Escolher_Empresa_Utilizada: boolean;
		Permitir_Mesma_Localizacao: number;
		Pesquisa_Apenas_Referencia: boolean;
		Pesquisar_Observacao: boolean;
		Pesquisar_P_Terceiro_Campo: boolean;
		Pintar_Produto_Estoque: boolean;
		Planejamento_Email: boolean;
		Plano_Contabil_De_Para_Auto: boolean;
		Pocket_Gerar_Venda: boolean;
		Pocket_Imprimir_Cupons: boolean;
		Pocket_Ordem_Visita_Fixa: boolean;
		Pocket_Situacao_Padrao: string;
		Ponto_Bloquear_Entrada_Minutos: string;
		Ponto_In_Itinere: boolean;
		Ponto_Ocultar_Trabalhada: boolean;
		Ponto_Turno: boolean;
		Porta_Farmacia_Etiqueta: string;
		Porta_Farmacia_Ficha: string;
		Porta_Farmacia_Orcamento: string;
		Porta_Farmacia_Rotulo: string;
		Porta_Impressora: string;
		Porta_Impressora_Cheque: string;
		Porta_Impressora_Consignacao: string;
		Porta_Impressora_Orcamento: string;
		Porta_Toledo: number;
		PortaArgox: string;
		Posterior: string;
		Preco_Balanca: string;
		Preco_Diferenciado_Maior: boolean;
		Preco_Dolar: boolean;
		Primeira_Transportadora: boolean;
		Procura_Animal_Bloquear_Todos: boolean;
		Procura_Cliente_Bloquear_Todos: boolean;
		procura_cliente_campo_pesquisa: string;
		Procura_Fornecedor_Buscar_Empresa: boolean;
		Procura_Produto_Barras: boolean;
		Procura_Produto_Bloquear_Todos: boolean;
		Prod_Interno_Gerar_Movimentacoes_Estoque: boolean;
		Produto_Animal: number;
		Produto_Atualizar_Entrada: string;
		Produto_Aux1: string;
		Produto_Aux2: string;
		Produto_Aux3: string;
		Produto_Aux4: string;
		Produto_Busca_Lote: boolean;
		Produto_Cliente: boolean;
		Produto_Composto: boolean;
		Produto_Inativo_Pesquisa: boolean;
		Produto_Manipulacao: number;
		Produto_Pai: boolean;
		Produto_Repetido_Saida: string;
		Produto_Tamanho1: number;
		Produto_Tamanho2: number;
		Produto_Tamanho3: number;
		Produto_Tamanho4: number;
		Programa_SPC: string;
		Protocolo_Toledo: string;
		Qtde_Colunas_Cupom_Matricial: string;
		Qtde_Estoque: boolean;
		Qtde_Imp_Entrega: number;
		Qtde_Imp_Orcamento: number;
		Qtde_SaidaEstoque: number;
		Qtdes_Inteiras: string;
		QUEST_Utilizar: boolean;
		R_Frete_Medio: boolean;
		Receber_Automatico_Manutencao: boolean;
		Registro_MS_Obrigatorio: boolean;
		Rel_Ven_ProdV_Col_Unit: boolean;
		Relacionar_Materia_Atualizar_Preco: boolean;
		Remessa_Boletos_Emitidos: boolean;
		Remover_Zeros_Esquerda_Coletor: boolean;
		Retirar_DB_Trans: boolean;
		RFID_Utilizar: boolean;
		RH_Tempo_Tolerancia: number;
		Rodape_Report: number;
		Romaneio_Importar_Obs_Orcamento: boolean;
		Romaneio_Remover_Obs_Padrao: boolean;
		RS_Word: boolean;
		Sache_Dissecante: string;
		Saida_Obrigar_Sugestao: boolean;
		Saida_Sem_Estoque: boolean;
		Salto: number;
		Saltos_Imp_Pesagem: number;
		Saltos_Orcamento: number;
		Segundo_P_Produto: string;
		Sempre_Ratear_Frete: boolean;
		Sempre_Ratear_ICMS_ST: boolean;
		Sempre_Somar_Frete: boolean;
		Senha_AFAPI: string;
		Senha_Alterar_Juros: boolean;
		Senha_Franqueador: string;
		Senha_Inativo: boolean;
		senha_responsavel_conferencia: boolean;
		Separar_Mov_TEF_POS: boolean;
		Servidor_AFAPI: string;
		Similar: boolean;
		Sintegra_Agrupar_Cfop: boolean;
		SismouraWeb_Franqueador: string;
		SismouraWeb_LetrasMaiusculas: boolean;
		SismouraWEB_URLBASE: string;
		Sistema_Pais: number;
		Situacao_Orcamento_Ecommerce: string;
		Situacao_Orcamento_Venda_Cancelada: string;
		Solicar_Fatura_XML: boolean;
		Solicitar_Qtde_Copias_Matricial: boolean;
		Solicitar_Senha_Vendedor_Orcamento: boolean;
		Somar_Frete: boolean;
		Somar_Horas: boolean;
		Somar_Valor_Embalagem: boolean;
		SQLServer_Franqueador: string;
		sugestao_comprar: boolean;
		Tabela_Preco: boolean;
		Talao_Cheque_Forma_Pagamento: string;
		Taman_Fonte_Email: string;
		taxa_serv_zona_venda: string;
		Taxa_Tributaria_ACFarma: string;
		Taxa_Tributaria_Padrao: string;
		Tela_Consulta: boolean;
		Telefone_Filial: string;
		temperaturaargox: number;
		Terminal_Consulta_Local: string;
		Terminal_Consulta_Modelo: string;
		Texto_Consignacao: string;
		Texto_Entrega: string;
		Timeout_Session: number;
		Tipo_Cabecalho_Orcamento: string;
		Tipo_Conexao_Ecommerce: string;
		Tipo_Importacao_Cupom: string;
		Tipo_Impressao_Orcamento: number;
		Tipo_Leitor: string;
		Tipo_SNGPC: number;
		Transferencia_Realizada_Empresa_Responsavel: boolean;
		Transportadora_Cliente: boolean;
		Trazer_Vencimento_Baixa: boolean;
		U_Cred_CR: boolean;
		ultimo_cliente: number;
		Unidade_Padrao: string;
		URL_Site: string;
		Usar_Ativacao_Parcelas: boolean;
		Usar_Cadastro_Grade: boolean;
		Usar_Cadastro_Referencia: boolean;
		Usar_Campos_Personalizados: boolean;
		Usar_Credito_Orcamento: boolean;
		Usar_Data_Entrega_Base: boolean;
		Usar_LinkedServer: boolean;
		Usar_Modelo: boolean;
		Usar_MultiLoja: boolean;
		Usar_OpenOffice: boolean;
		Usar_OS: boolean;
		Usar_Produto_Balanca: boolean;
		Usar_Usuario_Logado_como_Vendedor: boolean;
		Usuario_AFAPI: string;
		Usuario_Franqueador: string;
		Util_Imp_Ambiente: boolean;
		Utilizar_Abertura_Fechamento_Insumo: boolean;
		Utilizar_Balanca_Compras: boolean;
		Utilizar_Campo_Linha: boolean;
		Utilizar_Cartao_Presente: boolean;
		Utilizar_Centro_Custo: boolean;
		Utilizar_Chefinho: boolean;
		Utilizar_Codigo_Empresa_Venda: boolean;
		Utilizar_CRM: boolean;
		Utilizar_Custo_Cheio: boolean;
		Utilizar_Custo_Lista_Preco: boolean;
		Utilizar_Desconto_Convenio: boolean;
		utilizar_dotz: boolean;
		Utilizar_Empresa_Selecionada: boolean;
		Utilizar_ICMS_IPI: boolean;
		Utilizar_iMendes: boolean;
		Utilizar_Integracao_CoteFacil: boolean;
		Utilizar_Lista_Preco_Empresa: boolean;
		Utilizar_Lista_Preco_PedCompra: boolean;
		Utilizar_Manipulacao: boolean;
		Utilizar_Modulo_Contabil: boolean;
		utilizar_modulo_franquia: boolean;
		Utilizar_Modulo_Locacao: boolean;
		Utilizar_Modulo_MouraBurger: boolean;
		Utilizar_Modulo_Prefeitura: boolean;
		Utilizar_Modulo_ProvadorPlugin: boolean;
		Utilizar_MouraFood: boolean;
		Utilizar_Pedido_Moura: boolean;
		Utilizar_Preco_Automatico_Atendimento: boolean;
		Utilizar_Promocao_Dia: boolean;
		Utilizar_Regra_CFOP: boolean;
		Utilizar_Sistema_Hospedagem: boolean;
		Utilizar_Sistema_Jazigo: boolean;
		Utilizar_Systax: boolean;
		Utilizar_TLP_Modelo2: boolean;
		Utilizar_Unitario_Distribuidora: boolean;
		Utilizar_Validade_Cartao_Presente: boolean;
		Utilizar_Validade_Credito: boolean;
		Validade_Cadastro_Entrada_Produto: boolean;
		Validade_Final_Credito: string;
		Validade_Inicial_Credito: string;
		Valor_Estorno: string;
		Valor_Padrao_Devolucao_Deposito: number;
		Valor_Padrao_Devolucao_Motivo: number;
		Varios_CodBarra: boolean;
		Varios_Precos: boolean;
		Veiculo_Identificacao1: string;
		Veiculo_Identificacao2: string;
		Velocidade_Toledo: string;
		Vendedor_Empresa: boolean;
		Verificar_Estoque_Pocket: boolean;
		Vincular_Produto_Fornecedor: number;
		Visualizar_Produzido: boolean;
	}
	interface Configurar_Financeiro extends SiSMoura.Core.Common.Entity {
		Boleto_Codigo: number;
		Boleto_Mensagem1: string;
		Boleto_Mensagem2: string;
		Boleto_Mensagem3: string;
		Boleto_Mensagem4: string;
		Boleto_Mensagem5: string;
		Centro_Custo: string;
		Codigo: number;
		Conta_Contabil: string;
		Conta_Contabil_Cheque: number;
		Conta_Contabil_Retorno: number;
		Conta_Corrente_Padrao_Cheque: string;
		Conta_Porcentagem: number;
		Contrato_Qtde_Tags: number;
		Especie_Doc: string;
		ID: number;
		Local_Pagamento: string;
		Parcelas_Word: number;
		Permitir_Resp_Imprimir: string;
		Porcentagem_Juros: number;
		Porcentagem_Multa: number;
		Selecionar_Respons_Imprimir: boolean;
	}
	interface Entity {
		IgnorarDuplicidade: boolean;
		IsInativo: boolean;
		PreencheuClasse: boolean;
	}
}
declare module SiSMoura.Core.Entity {
	interface Agenda extends SiSMoura.Core.Common.Entity {
		Abreviacao: string;
		Codigo: number;
		Compromisso: string;
		Data: Date;
		Empresa: number;
		Lida: string;
	}
	interface Agenda_Telefone extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Nome: string;
		Telefone: string;
	}
	interface Agenda_Usuario extends SiSMoura.Core.Common.Entity {
		Agenda: number;
		Codigo: number;
		Hora: string;
		Responsavel: number;
		Usuario: number;
	}
	interface AgendaRetorno {
		Abreviacao: string;
		Agenda: number;
		Alterou: boolean;
		Codigo_Agenda: number;
		Codigo_Agenda_Telefone: number;
		Codigo_Agenda_Usuario: number;
		Compromisso: string;
		Contador: number;
		Data: Date;
		Hora_Agenda: string;
		Letra_Agenda: string;
		Lida: boolean;
		Nome: string;
		Responsavel: number;
		Telefone: string;
		Usuario: number;
		Usuarios: SiSMoura.Core.Entity.Agenda_Usuario[];
	}
	interface Agromoura_Contrato_Romaneio extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Contrato: number;
		Romaneios: SiSMoura.Core.Entity.Agromoura_Contrato_Romaneio_Item[];
	}
	interface Agromoura_Contrato_Romaneio_Item extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Confirmado: number;
		Contrato: number;
		Data: Date;
		Data_Confirmacao: Date;
		Fazenda: number;
		Romaneio: number;
	}
	interface Agromoura_Contrato_RomaneioRetorno {
		CodFazenda: number;
		Codigo: number;
		Contador: number;
		Data: Date;
		Fazenda: string;
		Romaneio: number;
	}
	interface Agromoura_Fazenda_Cliente extends SiSMoura.Core.Common.Entity {
		Area_Total: number;
		Cep: string;
		Codigo: number;
		Cpf: string;
		Email: string;
		Endereco: string;
		Endereco_Cobranca: string;
		Gerente: string;
		Municipio: number;
		Nome: string;
		Proprietario: number;
		Talhoes: number;
		Telefone: string;
		Tipo: string;
	}
	interface Agromoura_Fazenda_ClienteRetorno extends SiSMoura.Core.Common.Entity {
		Area: number;
		CodFazenda: number;
		Fazenda: string;
		Proprietario: string;
		Talhoes: number;
	}
	interface Agromoura_Patrimonio extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Id: number;
		Localizacao: string;
		Maquina: number;
		N_Patrimonio: string;
		Situacao_Atual: string;
		Usuario: number;
		Valor_Patrimonio: number;
	}
	interface Agromoura_Patrimonio_Movimentacao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data: Date;
		Localizacao: string;
		Maquina: number;
		Observacao: string;
		Patrimonio: number;
		Situacao: string;
		Usuario: number;
	}
	interface Agromoura_PatrimonioRetorno {
		Cod_Movimentacao: number;
		Codigo: number;
		Data: Date;
		Descricao: string;
		ID: number;
		Localizacao: string;
		N_Patrimonio: string;
		Nome: string;
		Observacao: string;
		Situacao_Atual: string;
		Usuario: string;
		Valor_Patrimonio: number;
	}
	interface Agromoura_Programacao_Contrato extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Contrato: number;
		Data_Final_Prevista: Date;
		Data_inicial: Date;
		Fazenda: number;
		Hectares: number;
		Horas_Previstas: number;
		Maquina: number;
		Operacao: string;
		Talhao: string;
	}
	interface Agromoura_Programacao_ContratoRetorno {
		Codigo: number;
		Data_final_prevista: Date;
		Data_inicial: Date;
		Fazenda: string;
		Hectares: number;
		Horas_previstas: string;
		Operacao: string;
		Talhao: string;
	}
	interface Agromoura_Servico_Prestado extends SiSMoura.Core.Common.Entity {
		Area: number;
		Codigo: number;
		Colhedora: number;
		Contrato: number;
		Data: Date;
		Fazenda: number;
		Hora: Date;
		Operador_Colhedora: number;
		Operador_Transbordo: number;
		Romaneio: number;
		Safra: string;
		Talhao: string;
		Total_Cana_Carregada: number;
		Total_Cana_Colhida: number;
		Transbordo: number;
		Turno: string;
	}
	interface Agromoura_Servico_PrestadoRetorno {
		Area: number;
		CanaCarregada: number;
		CanaColhida: number;
		Cliente: string;
		Codigo: number;
		Colhedora: string;
		Contrato: number;
		Data: Date;
		Fazenda: string;
		Hora: Date;
		OperadorColhedora: string;
		OperadorTransbordo: string;
		Romaneio: number;
		Safra: string;
		Talhao: string;
		Transbordo: string;
		Turno: string;
	}
	interface Ambiente_Restaurante extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Micro_Resp: string;
	}
	interface Animais_Aceite_Escala_Prestador extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Final: Date;
		Data_Inicial: Date;
		Data_Ultimo_Status: Date;
		Descricao_Recusa: string;
		Prestador: number;
		Status: number;
	}
	interface Animais_Adocao_Avaliacao_Diaria extends SiSMoura.Core.Common.Entity {
		Animal: number;
		Codigo: number;
		Data: Date;
		Itens: SiSMoura.Core.Entity.Animais_Adocao_Avaliacao_Diaria_Item[];
		Microchip: string;
		Observacao: string;
		Usuario: number;
	}
	interface Animais_Adocao_Avaliacao_Diaria_Item extends SiSMoura.Core.Common.Entity {
		Adocao_Ficha_Avaliacao: number;
		Codigo: number;
		Ficha_Avaliacao_Item: number;
		Observacao: string;
		Resposta: boolean;
	}
	interface Animais_Adocao_Contrato_Assinatura extends SiSMoura.Core.Common.Entity {
		Assinatura: number[];
		Codigo: number;
		Contrato: number;
	}
	interface Animais_Adocao_Devolucao extends SiSMoura.Core.Common.Entity {
		Animal: number;
		Codigo: number;
		Data_Cadastro: Date;
		Data_Devolucao: Date;
		Empresa: number;
		MicroChip: string;
		Motivo_Devolucao: number;
		Motivo_Devolucao_Text: string;
		Proprietario: number;
		Usuario: number;
	}
	interface Animais_Adocao_Email extends SiSMoura.Core.Common.Entity {
		Assunto: string;
		Codigo: number;
		Descricao: string;
		Empresa: number;
		Mensagem: string;
	}
	interface Animais_Adocao_Motivo_Cancelamento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Devolver_Animal: boolean;
		Inativo: boolean;
		Motivo: string;
		Motivo_Devolucao_Codigo: number;
	}
	interface Animais_Adocao_Motivo_Devolucao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Inativo: boolean;
		Motivo: string;
	}
	interface Animais_Adocao_Movimento extends SiSMoura.Core.Common.Entity {
		Animal: number;
		Animal_Origem_ONG: number;
		Campo_Codigo_Movimento: number;
		Codigo: number;
		Data_Movimento: Date;
		Empresa: number;
		MicroChip: string;
		Motivo: string;
		Status_Adocao_Animal: SiSMoura.Core.Entity.Animais_Cadastro.enStatusAdocaoAnimal;
		Tela: string;
		Tipo_Movimento: SiSMoura.Core.Entity.Animais_Adocao_Movimento.enTipoMovimentoAdocao;
		Usuario_Movimento: number;
	}
	interface Animais_Agenda_EsperaRetorno extends SiSMoura.Core.Common.Entity {
		Codigo_Profissional: number;
		Data: Date;
		Hora: System.TimeSpan;
		Nome_Profissional: string;
		Tem_Horario_Trabalho: boolean;
		Tem_Indiponibilidade: boolean;
		Tem_Servico: number;
	}
	interface Animais_Agendamento_Tipo_Profissional extends SiSMoura.Core.Common.Entity {
		Codempresa_Agendamento: number;
		Id: number;
		Tipo_Profissional: number;
	}
	interface Animais_Alteracoes_Camposchave extends SiSMoura.Core.Common.Entity {
		Atendimento: number;
		Campo_Alterado: string;
		Cod_Servico: number;
		Data: Date;
		Id: number;
		Motivo_Alteracao: string;
		Usuario_Autorizou: number;
		Usuario_Logado: number;
		Valor_Anterior: string;
		Valor_Atual: string;
	}
	interface Animais_Anamnese extends SiSMoura.Core.Common.Entity {
		Anamnese: string;
		Codigo: number;
		Descricao: string;
	}
	interface Animais_APP_Empresa_Favorita extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Cliente: number;
		Codigo_Empresa: number;
	}
	interface Animais_Assunto extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Animais_Atendimento extends SiSMoura.Core.Common.Entity {
		Aceite_Prestador: number;
		AgendamentoNaoFinalizado: boolean;
		Alteracoes_CamposChave: SiSMoura.Core.Entity.Animais_Alteracoes_Camposchave[];
		App_Agendamento_Forma_Pagamento: SiSMoura.Core.Entity.Animais_Atendimento.FORMA_PAGTO;
		Assinatura: SiSMoura.Core.Entity.Animais_Atendimento_Checklist_Assinatura;
		Atendimento_Origem: number;
		Atendimento_Reagendamento: number;
		Autorizacao_Convenio: string;
		Bloqueado: boolean;
		CheckList: string;
		Checklist_Itens: SiSMoura.Core.Entity.Animais_Atendimento_Checklist_Item[];
		CheckListCodigo: number;
		Clinica: number;
		Clinica_Laboratorio: string;
		Cod_Animal: number;
		Cod_Hospedagem_Servico: number;
		Cod_Internacao_Produto: number;
		Cod_Internacao_Servico: number;
		Cod_Proprietario: number;
		Codigo: number;
		Codigo_Aceite_Terceiro: number;
		Codigo_Animais_Lista_Espera: number;
		Codigo_Sala: number;
		Coleta_Material: string;
		Concluido: boolean;
		Consulta_Originaria: number;
		Contrato_Plano_Data_Integracao_Mensalidade: Date;
		Contrato_Plano_Mensalidade: number;
		Convenio: number;
		Cortesia: number;
		Cuidados: string;
		Data: Date;
		Data_Cadastro: Date;
		Data_Expiracao_Atendimento: Date;
		Data_Nascimento: Date;
		Data_Reposta_Baixa_Zanthus: Date;
		Data_Resposta_Baixa_PrePagamento: Date;
		Data_Sistema_Enviou_PrePagamento: Date;
		Data_Sistema_Enviou_Zanthus: Date;
		Data_Usuario_Cancelou_Zanthus: Date;
		Data_Usuario_Solicitou_Zanthus: Date;
		Empresa: number;
		Encaminhamento: boolean;
		EntidadeEncaminhamento: SiSMoura.Core.Entity.Animais_Atendimento_Encaminhamento;
		Especie: number;
		Exame_Observacao: SiSMoura.Core.Entity.Animais_Exame_Observacao;
		Exames: SiSMoura.Core.Entity.Animais_Atendimento_Exame[];
		Finalizadora_Zanthus: number;
		Hora_Exame: Date;
		Hospedagem: number;
		Incidencias: SiSMoura.Core.Entity.Animais_Incidencia[];
		Internacao: number;
		IsAgendamentoPreferencial: boolean;
		IsAtendimentoIntegradoPrePagamentoZanthus: boolean;
		IsAtendimentoIntegradoZanthus: boolean;
		IsAtendimentoPagoOuIntegradoZanthus: boolean;
		IsAtendimentoPagoZanthus: boolean;
		isCortesia: boolean;
		IsIntegradoZanthus: boolean;
		IsMobile: boolean;
		IsPago: boolean;
		Lancamento_Prestador: number;
		Motivo_Desconto: string;
		Motivo_Reagendamento: number;
		NaoVerificarEscala: boolean;
		Nome_Animal: string;
		Nome_Proprietario: string;
		Observacao_Laboratorio: string;
		Observacao_Laboratorio_Codigo: number;
		Observacao_Servico: string;
		Operador: string;
		Pagamento_Bandeira: string;
		Pagamento_ID: string;
		Pagamento_NSU: string;
		Pagamento_Operadora: string;
		Pagamento_Parcela: number;
		Pagamento_Status_Stoom: number;
		Pagamento_Token: string;
		Pagamento_Valor: number;
		PetzFormaPagZanthus_Text: string;
		Produtos: SiSMoura.Core.Entity.Animais_Atendimento_Produto[];
		QuantidadeReagendamentosAPP: number;
		Raca: number;
		Reserva: number;
		Resultado_Exame: string;
		Rps_Automatico: boolean;
		Rps_Emitido: boolean;
		Sala_Descricao: string;
		Servicos: SiSMoura.Core.Entity.Animais_Servicos[];
		Sexo: string;
		Solicitante: number;
		Status_Envio_Zanthus: SiSMoura.Core.Entity.Animais_Atendimento.StatusEnvioZanthus;
		Status_Envio_Zanthus_Text: string;
		Status_Exame: number;
		Status_PrePagamento_Zanthus: SiSMoura.Core.Entity.Animais_Atendimento.StatusPrePagamentoZANTHUS;
		TempCodigoCheckIn: number;
		TempCodigoMotivoExclusao: number;
		TempMotivoExclusao: string;
		Tipo_Pagamento_Zanthus: SiSMoura.Core.Entity.Animais_Atendimento.PetzFormaPagZanthus;
		Usuario_Alterou: number;
		Usuario_Cadastro: number;
		Usuario_Cancelou_Zanthus: number;
		Usuario_Solicitou_Zanthus: number;
		Valor_Finalizadora_Zanthus: number;
		Valor_Total: number;
		Verificou_Exame_Recusado: boolean;
	}
	interface Animais_Atendimento_Aceite_Terceiro extends SiSMoura.Core.Common.Entity {
		Aceitou: boolean;
		Atendimento: number;
		Atendimento_Gerado: number;
		Codigo: number;
		Codigo_Animais_Servicos: number;
		Data_Recusa: Date;
		Motivo_Recusa: number;
		Observacao_Recusa: string;
		Profissional: number;
		Status_Aceite: SiSMoura.Core.Entity.Animais_Atendimento_Aceite_Terceiro.StatusAceite;
		Valor_Aceitado: number;
	}
	interface Animais_Atendimento_Checklist_Assinatura extends SiSMoura.Core.Common.Entity {
		Assinatura: number[];
		Atendimento: number;
	}
	interface Animais_Atendimento_Checklist_Item extends SiSMoura.Core.Common.Entity {
		Atendimento: number;
		Codigo: number;
		Codigo_Checklist_Item: number;
		Descricao_Item: string;
		Linha: number;
		Observacao: string;
		Resposta: boolean;
	}
	interface Animais_Atendimento_Documento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Modelo_Documento: string;
		Tipo: string;
	}
	interface Animais_Atendimento_Encaminhamento extends SiSMoura.Core.Common.Entity {
		Atendimento: number;
		Clinica_Encaminhou: string;
		Codigo: number;
		Crmv_Veterinario: string;
		Email_Veterinario: string;
		Empresa_Encaminhou: number;
		Profissional_Encaminhou: number;
		Profissional_Externo_Encaminhou: number;
		Telefone_Veterinario: string;
		Tipo_Encaminhamento: string;
		Veterinario_Encaminhou: string;
	}
	interface Animais_Atendimento_Exame extends SiSMoura.Core.Common.Entity {
		Animal: number;
		Atendimento: number;
		Codigo: number;
		Descricao: string;
		Email_Enviado: boolean;
		Exame: number;
		Formula_Calculo: string;
		Motivo_Recusa: number;
		Observacao_Recusa: string;
		Resultado_Calculo: number;
		Tipo_Exame: number;
	}
	interface Animais_Atendimento_Orcamento_Documento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Empresas: SiSMoura.Core.Entity.Animais_Orcamento_Documento_Empresa[];
		Modelo_Documento: string;
	}
	interface Animais_Atendimento_Produto extends SiSMoura.Core.Common.Entity {
		Cobrado: boolean;
		Cod_Atendimento: number;
		Cod_Produto: number;
		Codigo: number;
		Data_Utilizado: Date;
		Desconto: number;
		Desconto_Porcentagem: number;
		Hora_Utilizado: string;
		Item: number;
		Lote: string;
		Observacao: string;
		Profissional_Utilizou: number;
		Qtde: number;
		Usuario: number;
		Valor_Final: number;
		Valor_Unitario: number;
		Venda: number;
	}
	interface Animais_Avaliacao extends SiSMoura.Core.Common.Entity {
		Alimentacoes: SiSMoura.Core.Entity.Animais_Avaliacao_Alimento[];
		Cod_Animal: number;
		Cropoparasitologico_Data_Coleta: Date;
		Cropoparasitologico_Resultado: string;
		Drontal_CodAtendente: number;
		Drontal_Comprimido: number;
		Drontal_Data: Date;
		Effipro_Data: Date;
		Effipro_ML: number;
		Endogard_Dose: number;
		Glicopan_Dose: number;
		Id: number;
		Lista_Avaliacao_Periodica: SiSMoura.Core.Entity.Animais_Avaliacao_Periodica[];
		Lista_Effipro: SiSMoura.Core.Entity.Animais_Avaliacao_Effipro[];
		Lista_Endogard: SiSMoura.Core.Entity.Animais_Avaliacao_Endogard[];
		Lista_Glicopan: SiSMoura.Core.Entity.Animais_Avaliacao_Glicopan[];
		Lista_Outros: SiSMoura.Core.Entity.Animais_Avaliacao_Outros[];
		Medico: number;
		Observacao: string;
		Tipo: string;
	}
	interface Animais_Avaliacao_Alimento extends SiSMoura.Core.Common.Entity {
		Codigo_Avaliacao: number;
		Data: Date;
		Dia: number;
		Id: number;
		Manha: boolean;
		Noite: boolean;
		Tarde: boolean;
	}
	interface Animais_Avaliacao_Effipro extends SiSMoura.Core.Common.Entity {
		Codigo_Avaliacao: number;
		Data: Date;
		Id: number;
		Ml: number;
	}
	interface Animais_Avaliacao_Endogard extends SiSMoura.Core.Common.Entity {
		Atendente: number;
		Codigo_Avaliacao: number;
		Data: Date;
		Dose: number;
		Id: number;
		N_Dose: number;
		Nome_Atendente: string;
	}
	interface Animais_Avaliacao_Fezes extends SiSMoura.Core.Common.Entity {
		Amostra: number;
		Cod_Animal: number;
		Data: Date;
		Est: string;
		Id: number;
		Resultado: string;
	}
	interface Animais_Avaliacao_Glicopan extends SiSMoura.Core.Common.Entity {
		Codigo_Avaliacao: number;
		Data: Date;
		Dia: number;
		Id: number;
		Manha: boolean;
		Tarde: boolean;
	}
	interface Animais_Avaliacao_Outros extends SiSMoura.Core.Common.Entity {
		Codigo_Avaliacao: number;
		Data: Date;
		Dose: number;
		Id: number;
		Medicacao: string;
		Periodo: string;
	}
	interface Animais_Avaliacao_Periodica extends SiSMoura.Core.Common.Entity {
		Apatia: boolean;
		Atendente: number;
		Cirurgia: boolean;
		Codigo_Avaliacao: number;
		Contador: number;
		Data: Date;
		Data_Exibir: Date;
		Ectoparasitas: boolean;
		Fezes: boolean;
		Focinho: boolean;
		Higiene: boolean;
		Id: number;
		Mucosas: boolean;
		Nome_Atendente: string;
		Observacao: string;
		Olhos: boolean;
		Orelhas: boolean;
		Periodo: string;
		Ref_Tosse: boolean;
		Unhas: boolean;
	}
	interface Animais_Cadastro extends SiSMoura.Core.Common.Entity {
		Animal_Venda: boolean;
		Atestado: boolean;
		Baia_Adocao: number;
		Carteira_Vacinacao: boolean;
		Carterinha_Plano: string;
		Castrado: boolean;
		Chip: string;
		Cod_Especie: number;
		Cod_Proprietario: number;
		Cod_Raca: number;
		Codanimalmae: number;
		Codanimalpai: number;
		Codigo: number;
		Codigo_Proprietario_Anterior: number;
		Codigo_Venda: number;
		Cor: string;
		Criador: number;
		Data_Cadastro: Date;
		Data_Carga: Date;
		Data_Obito: Date;
		Data_Venda: Date;
		DDD_Veterinario_Responsavel: string;
		EspecieEntity: SiSMoura.Core.Entity.Animais_Especie;
		Fone_Veterinario_Responsavel: string;
		Idade_Formatada: string;
		Inativo: boolean;
		Nasc: Date;
		Nome_Animal: string;
		Nome_Mae: string;
		Nome_Pai: string;
		Nome_Pedigree: string;
		Obito: boolean;
		Obito_Extenso: string;
		Observacao_Exame: string;
		Observacao_Servico: string;
		Pelagem: number;
		Pelagem_Mae: number;
		Pelagem_Pai: number;
		PelagemEntity: SiSMoura.Core.Entity.Animais_Pelagem;
		Peso: number;
		Pesos: SiSMoura.Core.Entity.Animais_Peso[];
		Preco_Custo: number;
		Quantidade_Racao: string;
		RacaEntity: SiSMoura.Core.Entity.Animais_Raca;
		Racao_Utilizada: string;
		Restricao_Alimentar: boolean;
		Restricao_Alimentar_Text: string;
		Rga: string;
		Rga_Mae: string;
		Rga_Pai: string;
		Roteador_Enviou: boolean;
		Roteador_Puxou: boolean;
		Sexo: string;
		Sexo_Formatado: string;
		Status_Adocao_Animal: SiSMoura.Core.Entity.Animais_Cadastro.enStatusAdocaoAnimal;
		Temperamento: number;
		Temperamento_Obs: string;
		TemperamentoEntity: SiSMoura.Core.Entity.Animais_Temperamento;
		Tipo_Pelagem: number;
		Vacinacoes: SiSMoura.Core.Entity.Animais_Vacinacoes_Retroativas[];
		Valor: number;
		Vendido: boolean;
		Veterinario_Responsavel: string;
		X_INTEGR_ZANTHUS: number;
	}
	interface Animais_Causa_Obito extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Animais_Checkin extends SiSMoura.Core.Common.Entity {
		Animal: number;
		Assunto: number;
		Atend_Prioritario: boolean;
		Atendimento: number;
		Autorizacao_Convenio: string;
		Codigo: number;
		Convenio: number;
		Data_Alteracao_Status: Date;
		Data_Checkin: Date;
		Data_Fim: Date;
		Data_Inicio: Date;
		DDD_Indicacao: string;
		Empresa: number;
		Fone_Numero_Indicacao: string;
		Indicacao_Para: string;
		IsDesistencia: boolean;
		Local: number;
		MotivoDesistencia: string;
		Nome_Indicacao: string;
		Observacao: string;
		Profissional: number;
		Profissional_Indicado: number;
		Situacao: number;
		Situacao_Inicial: number;
		Usuario_Alteracao_Status: number;
	}
	interface Animais_Checkin_Local extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Padrao: boolean;
	}
	interface Animais_Checklist_Atendimento extends SiSMoura.Core.Common.Entity {
		Checklist: string;
		Codigo: number;
		Descricao: string;
		Itens: SiSMoura.Core.Entity.Animais_Checklist_Item[];
	}
	interface Animais_Checklist_Comportamento_Entrada_Adocao_Resposta extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Checklist_Entrada_Adocao_Item: number;
		Descricao_Item: string;
		Entrada_Adocao_Item: number;
		Entrada_Adocao_Item_Avaliacao: number;
		Linha: number;
		Observacao: string;
		Resposta: SiSMoura.Core.Entity.Animais_Checklist_Comportamento_Entrada_Adocao_Resposta.enRespostaCheckListAvaliacaoComportamento;
		Resposta_Texto: string;
	}
	interface Animais_Checklist_Entrada_Adocao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Inativo: boolean;
		Itens: SiSMoura.Core.Entity.Animais_Checklist_Entrada_Adocao_Item[];
	}
	interface Animais_Checklist_Entrada_Adocao_Item extends SiSMoura.Core.Common.Entity {
		Checklist_Entrada_Adocao: number;
		Codigo: number;
		Descricao: string;
		Linha: number;
		Observacao: string;
		Resposta: boolean;
	}
	interface Animais_Checklist_Entrada_Adocao_Resposta extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_CheckList_Entrada_Adocao_Item: number;
		Descricao_Item: string;
		Entrada_Adocao_Item: number;
		Entrada_Adocao_Item_Avaliacao: number;
		Linha: number;
		Observacao: string;
		Resposta: SiSMoura.Core.Entity.Animais_Checklist_Entrada_Adocao_Resposta.enRespostaCheckList;
		Resposta_Texto: string;
	}
	interface Animais_Checklist_Hospedagem extends SiSMoura.Core.Common.Entity {
		Checklist: string;
		Codigo: number;
		Descricao: string;
		Inativo: boolean;
		Itens: SiSMoura.Core.Entity.Animais_Checklist_Hospedagem_Item[];
	}
	interface Animais_Checklist_Hospedagem_Item extends SiSMoura.Core.Common.Entity {
		Checklist: number;
		Codigo: number;
		Descricao: string;
	}
	interface Animais_Checklist_Item extends SiSMoura.Core.Common.Entity {
		Checklist: number;
		Codigo: number;
		Descricao: string;
	}
	interface Animais_Cid extends SiSMoura.Core.Common.Entity {
		Ativo: boolean;
		CID: string;
		Codigo: number;
		Descricao: string;
		Grupo: number;
	}
	interface Animais_Cio extends SiSMoura.Core.Common.Entity {
		Animal: number;
		Codigo: number;
		Datafinal: Date;
		Datainicial: Date;
	}
	interface Animais_Clinica_Indicacao extends SiSMoura.Core.Common.Entity {
		Bairro: string;
		Celular: string;
		Cep: string;
		Cidade: number;
		Codigo: number;
		Complemento: string;
		Data_Cadastro: Date;
		Ddd: string;
		DDD_Celular: string;
		Ddd2: string;
		Email: string;
		Endereco: string;
		Fone: string;
		Fone_Numero: string;
		Fone2: string;
		Fone2_Numero: string;
		Fornecedor: number;
		Nome_Fantasia: string;
		Numero: string;
		Numero_Celular: string;
		Observacao: string;
		Razao_Social: string;
	}
	interface Animais_Comportamento_Avaliacao extends SiSMoura.Core.Common.Entity {
		Animal: number;
		Aprovado: string;
		Atendimento: number;
		Avaliacao_Itens: SiSMoura.Core.Entity.Animais_Comportamento_Avaliacao_Item[];
		Codigo: number;
		Data_Avaliacao: Date;
		Observacao: string;
		Profissional: number;
		Proprietario: number;
	}
	interface Animais_Comportamento_Avaliacao_Item extends SiSMoura.Core.Common.Entity {
		Animais_Comportamento_Avaliacao: number;
		Codigo: number;
		Codigo_Comportamento_Pergunta: number;
		Codigo_Comportamento_Resposta: number;
		Observacao_Resposta: string;
	}
	interface Animais_Comportamento_Pergunta extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Pergunta: string;
	}
	interface Animais_Comportamento_Respostas extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Contador: number;
		Resposta: string;
	}
	interface Animais_Configuracao_Email extends SiSMoura.Core.Common.Entity {
		Assunto: string;
		Codigo: number;
		Descricao: string;
		Mensagem: string;
	}
	interface Animais_Contrato_Ong extends SiSMoura.Core.Common.Entity {
		Animal: number;
		Animal_Origem_ONG: number;
		Assinatura: SiSMoura.Core.Entity.Animais_Adocao_Contrato_Assinatura;
		Cancelado: boolean;
		Codigo: number;
		Data_Adocao: Date;
		Data_Cadastro: Date;
		Data_Cancelado: Date;
		Empresa: number;
		Fornecedor: number;
		MicroChip: string;
		Motivo_Cancelamento: string;
		Motivo_Cancelamento_Codigo: number;
		Observacao: string;
		Possui_Outros_Animais_Quantidade: number;
		Proprietario: number;
		Proprietario_Origem_ONG: number;
		Usuario_Cadastro: number;
		Usuario_Cancelou: number;
	}
	interface Animais_Contrato_Plano extends SiSMoura.Core.Common.Entity {
		Anamnese: string;
		Animal: number;
		Carencias_Servicos: SiSMoura.Core.Entity.Animais_Contrato_Plano_Carencias[];
		Cod_Score: number;
		Codigo: number;
		Data_Cadastro: Date;
		Data_Cancelado: Date;
		Data_Consulta_Integracao: Date;
		Data_Fim: Date;
		Data_Inicio: Date;
		Data_Integracao_Pagamento: Date;
		Data_Solicitou_Pagamento: Date;
		Data_Triagem: Date;
		Detalhes_Doencas: string;
		Empresa: number;
		Exame_Fisico: string;
		Exames_Realizados: string;
		Motivo_Cancelamento: string;
		Observacao: string;
		Parcela_Atual: number;
		Parcelas_Devolver: number;
		Plano: number;
		Pontuacao_Idade: number;
		Profissional_Responsavel: number;
		Tipo_Cobranca: SiSMoura.Core.Entity.Animais_Contrato_Plano.enTipoPagamento;
		Tratamento_Anterior: string;
		Triagem: number;
		Triagem_Itens: SiSMoura.Core.Entity.Animais_Contrato_Plano_Triagem[];
		Usuario_Cadastro: number;
		Usuario_Cancelamento: number;
		Usuario_Solicitou_Pagamento: number;
		Valor_Devolvido: number;
		Valor_Mensalidade: number;
		Valor_Multa: number;
		Valor_Pago: number;
	}
	interface Animais_Contrato_Plano_Carencias extends SiSMoura.Core.Common.Entity {
		Carencia: number;
		Codigo: number;
		Codigo_Contrato: number;
		Codigo_Servico: number;
		Data_Autorizacao: Date;
		Nome_Servico: string;
		Usuario_Autorizacao: number;
	}
	interface Animais_Contrato_Plano_Pagamento extends SiSMoura.Core.Common.Entity {
		Atendimento: number;
		Codigo: number;
		Codigo_Contrato_Plano: number;
		Data_Pagamento: Date;
	}
	interface Animais_Contrato_Plano_Triagem extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Triagem_Item: number;
		Contrato_Plano: number;
		Descricao_Item: string;
		Linha: number;
		Observacao: string;
		Pontuacao_Item: number;
		Resposta: boolean;
		Tipo_Triagem: string;
	}
	interface Animais_Convenio extends SiSMoura.Core.Common.Entity {
		Bairro: string;
		Bloquear_Novos_Atendimentos: boolean;
		Cep: string;
		Cidade: number;
		Cnpj: string;
		Codigo: number;
		Convenio_Proprio: boolean;
		Email: string;
		Fone_Numero: string;
		Logradouro: string;
		Nome_Fantasia: string;
		Numero: string;
		Razao_Social: string;
		Registro_Ans: string;
		Sigla: string;
	}
	interface Animais_Criador extends SiSMoura.Core.Common.Entity {
		Alimentacao: string;
		Ambiente: string;
		Contactantes: string;
		Controle_Ectoparasitas: string;
		Controle_Endoparasitas: string;
		Data_Carga: Date;
		Pedigree: string;
		Pessoa: number;
		PessoaEntity: SiSMoura.Core.Entity.Pessoa;
		Piso: string;
	}
	interface Animais_De_Para_Log extends SiSMoura.Core.Common.Entity {
		Animal_De: number;
		Animal_Para: number;
		Data: Date;
		Id: number;
		Usuario: number;
	}
	interface Animais_Desconto_Maximo_Grupo extends SiSMoura.Core.Common.Entity {
		Grupo: number;
		Id: number;
		Porcentagem_Maxima: number;
	}
	interface Animais_Empresa_Agendamento extends SiSMoura.Core.Common.Entity {
		Empresa: number;
		Id: number;
		Tipos: SiSMoura.Core.Entity.Animais_Agendamento_Tipo_Profissional[];
		Utilizar_Melhoria: boolean;
	}
	interface Animais_Empresa_Faturamento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Empresa_Faturamento: number;
		Empresa_Origem: number;
	}
	interface Animais_Entrada_Adocao extends SiSMoura.Core.Common.Entity {
		Aprovada: boolean;
		Baia: number;
		Cancelada: boolean;
		Codigo: number;
		Data_Aprovada: Date;
		Data_Cancelamento: Date;
		Data_Entrada: Date;
		Empresa: number;
		EntradaItens: SiSMoura.Core.Entity.Animais_Entrada_Adocao_Item[];
		IsAprovandoEntrada: boolean;
		Motivo_Cancelamento: string;
		Proprietario: number;
		Status_Entrada: SiSMoura.Core.Entity.Animais_Entrada_Adocao.enStatusEntradaAdocao;
		Status_Entrada_Texto: string;
		Usuario_Aprovou: number;
		Usuario_Cancelou: number;
		Usuario_Entrada: number;
	}
	interface Animais_Entrada_Adocao_Avaliacao_Item extends SiSMoura.Core.Common.Entity {
		Alteracao_Exame_Fisico_Comportamento: boolean;
		Alteracoes_Exame_Fisico_Comportamental: string;
		CheckListAvaliacao: SiSMoura.Core.Entity.Animais_Checklist_Entrada_Adocao_Resposta[];
		CheckListAvaliacaoComportamento: SiSMoura.Core.Entity.Animais_Checklist_Comportamento_Entrada_Adocao_Resposta[];
		Codigo: number;
		Codigo_Exame_Fisico: number;
		Entrada_Adocao_Item: number;
		Exame_Fisico: string;
		Microchip: string;
		Motivo_Reprovacao_Entrada: string;
		Status_Avaliacao_Entrada: SiSMoura.Core.Entity.Animais_Entrada_Adocao_Avaliacao_Item.enStatusAvaliacaoPet;
		Tratamento_Anterior: string;
		Vacinas: SiSMoura.Core.Entity.Animais_Entrada_Adocao_Item_Vacinas[];
		Veterinario_Avaliacao_Entrada: number;
	}
	interface Animais_Entrada_Adocao_Baia extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Empresa: number;
		Inativo: boolean;
		Ocupacao: number;
	}
	interface Animais_Entrada_Adocao_Item extends SiSMoura.Core.Common.Entity {
		Animais_Cadastro_Codigo: number;
		Avaliacao_Item: SiSMoura.Core.Entity.Animais_Entrada_Adocao_Avaliacao_Item;
		Castrado: boolean;
		Codigo: number;
		Codigo_Avaliacao_Item: number;
		Data_Nascimento: Date;
		Empresa: number;
		Entrada_Animais_Adocao: number;
		Especie: number;
		Item: number;
		Microchip: string;
		Nome_Animal: string;
		Nome_Especie: string;
		Nome_Raca: string;
		Peso: number;
		Raca: number;
		Rga: string;
		Sexo: string;
		Sexo_Texto: string;
		Status_Avaliacao_Entrada: string;
		Status_Avaliacao_Entrada_Text: string;
	}
	interface Animais_Entrada_Adocao_Item_Vacinas extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Vacina: Date;
		Entrada_Adocao_Item_Avaliacao: number;
		Entrada_Item: number;
		Linha: number;
		Nome_Vacina: string;
		Servico: number;
	}
	interface Animais_Especie extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Documento_Avaliacao: number;
		IsBloqueadaHospedagem: boolean;
		IsHabilitadaAdocao: boolean;
		Nome: string;
		Nome_Comercial: string;
	}
	interface Animais_Exame extends SiSMoura.Core.Common.Entity {
		Calculo: string;
		Calculo_Casas: number;
		Codigo: number;
		Descricao: string;
		Especie: number;
		Idadeate: number;
		Idadede: number;
		Normal: string;
		TagWord: string;
		Tipo_Exame: number;
		Tipo_Valor: string;
		Unidade: string;
	}
	interface Animais_Exame_Fisico extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Exame_Fisico: string;
	}
	interface Animais_Exame_Observacao extends SiSMoura.Core.Common.Entity {
		Exame: number;
		Observacao: string;
		Tipo_Exame: string;
	}
	interface Animais_Ficha_Avaliacao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Inativo: boolean;
		Itens: SiSMoura.Core.Entity.Animais_Ficha_Avaliacao_Item[];
	}
	interface Animais_Ficha_Avaliacao_Item extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Ficha_Avaliacao: number;
		Linha: number;
		Observacao: string;
		Resposta: boolean;
	}
	interface Animais_Ficha_Clinica extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Ficha_Clinica: string;
	}
	interface Animais_Funcionamento_Empresa extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Empresa: number;
		Horarios: SiSMoura.Core.Entity.Animais_Funcionamento_Empresa_Horario[];
	}
	interface Animais_Funcionamento_Empresa_Horario extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Configuracao: number;
		Dia_Semana: number;
		Empresa: number;
		Hora_Final: Date;
		Hora_Inicial: Date;
	}
	interface Animais_Funcionamento_Empresa_HorarioRetorno extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data: Date;
		Dia: number;
		Dia_Nome: string;
		Hora_Final: Date;
		Hora_Inicial: Date;
	}
	interface Animais_Funcionamento_Horario_Diferenciado extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Configuracao: number;
		Data: Date;
		Hora_Final: Date;
		Hora_Inicial: Date;
	}
	interface Animais_Grupo_Cid extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Animais_Grupo_Servico extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		DescontoP: number;
		Descricao: string;
		Dose: boolean;
		Grupo: number;
		Grupo_Convenio: boolean;
		Produto: boolean;
		Roteador_Enviou: boolean;
		Roteador_Puxou: boolean;
	}
	interface Animais_Hospedagem extends SiSMoura.Core.Common.Entity {
		Animal: number;
		Animal_Temperamento: number;
		Animal_Temperamento_Obs: string;
		AnimalEntity: SiSMoura.Core.Entity.Animais_Cadastro;
		Assinatura: SiSMoura.Core.Entity.Animais_Hospedagem_Checklist_Assinatura;
		Avaliacao_Animal: SiSMoura.Core.Entity.Animais_Veterinaria;
		AvaliacaoComportamentalAnimal: SiSMoura.Core.Entity.Avaliacao_Comportamento_Retorno;
		Baia: number;
		Calculou_Diaria_Adicional_CheckOut: boolean;
		Cancelada: boolean;
		CheckList: string;
		Checklist_Itens: SiSMoura.Core.Entity.Animais_Hospedagem_Checklist_Item[];
		CheckListCodigo: number;
		Codigo: number;
		Codigo_Reserva: number;
		Data_Cadastro: Date;
		Data_Cancelamento: Date;
		Data_Checkout: Date;
		Data_Entrada: Date;
		Data_Saida: Date;
		DiasHospedagem: SiSMoura.Core.Entity.Animais_Hospedagem_Dias[];
		DiasSemana: number[];
		Empresa: number;
		enAcaoCheckout: SiSMoura.Core.Entity.Animais_Hospedagem.enAcaoCheckoutHospedagem;
		enDiaSemana: SiSMoura.Core.Entity.Animais_Hospedagem.enDiasSemana;
		enOperacaoEmail: SiSMoura.Core.Entity.Animais_Hospedagem.enOperacaoEmailHospedagem;
		Fichas_Avaliacao: SiSMoura.Core.Entity.Animais_Hospedagem_Ficha_Avaliacao[];
		Finalizado: boolean;
		isCortesia: boolean;
		isFazendoCheckout: boolean;
		isImportandoReserva: boolean;
		Local: number;
		Motivo_Cancelamento: string;
		Motivo_Cortesia: string;
		Observacao: string;
		Produtos: SiSMoura.Core.Entity.Animais_Hospedagem_Produto[];
		ProdutosConsumidos: SiSMoura.Core.Entity.Animais_Hospedagem_Produto_Petz[];
		Profissional_CheckList: number;
		Profissional_Servico_Hospedagem: number;
		Proprietario: number;
		Servico_Hospesdagem: number;
		Servicos: SiSMoura.Core.Entity.Animais_Hospedagem_Servico[];
		Status_Checkout: SiSMoura.Core.Entity.Animais_Hospedagem.enmRetornoCheckout;
		Tipo_Diaria: SiSMoura.Core.Entity.Animais_Hospedagem.TipoDiaria;
		Tipo_Hospedagem: SiSMoura.Core.Entity.Animais_Hospedagem.TipoHospedagem;
		Usuario_Aut_Cortesia: number;
		Usuario_Cadastro: number;
		Usuario_Entrada: number;
		Usuario_Saida: number;
	}
	interface Animais_Hospedagem_Baia extends SiSMoura.Core.Common.Entity {
		Animais_Baia: number;
		Capacidade: string;
		Codigo: number;
		Descricao: string;
		Hospedagens: string[];
		Inativo: boolean;
		Linha_Servico: number;
		Local: number;
		Lotacao_Maxima: number;
		Marcar: boolean;
		Periodo: string;
		Permitir_Pet_Proprietario_Diferente: boolean;
		Proprietario: number;
		Status: string;
		Tamanho_Baia: number;
	}
	interface Animais_Hospedagem_Baia_Servico extends SiSMoura.Core.Common.Entity {
		Baia: number;
		Id: number;
		Servico: number;
	}
	interface Animais_Hospedagem_Checklist_Assinatura extends SiSMoura.Core.Common.Entity {
		Assinatura: number[];
		Hospedagem: number;
		Reserva: number;
	}
	interface Animais_Hospedagem_Checklist_Item extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Checklist_Item: number;
		Descricao_Item: string;
		Hospedagem: number;
		Linha: number;
		Observacao: string;
		Reserva: number;
		Resposta: boolean;
	}
	interface Animais_Hospedagem_Desconto_Grupo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Desconto_Maximo: number;
		Grupo_Usuario: number;
	}
	interface Animais_Hospedagem_Dias extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Fim: Date;
		Data_Inicio: Date;
		Dia: Date;
		Hospedagem: number;
		Tipo_Hospedagem: number;
	}
	interface Animais_Hospedagem_Email extends SiSMoura.Core.Common.Entity {
		Anexos: SiSMoura.Core.Entity.Animais_Hospedagem_Email_Anexos[];
		Assinatura_Email: string;
		Assunto: string;
		Codigo: number;
		Descricao: string;
		Empresa: number;
		Mensagem: string;
		Tipo_Hospedagem: number;
	}
	interface Animais_Hospedagem_Email_Anexos extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao_Documento: string;
		Hospedagem_Email: number;
		Tipo_Documento: number;
	}
	interface Animais_Hospedagem_Espera_Reserva extends SiSMoura.Core.Common.Entity {
		Animal: number;
		Codigo: number;
		Data_Cadastro: Date;
		Data_Entrada: Date;
		Data_Saida: Date;
		Empresa: number;
		Proprietario: number;
		Reserva: number;
		Tamanho_Baia: number;
		Tipo_Hospedagem: number;
	}
	interface Animais_Hospedagem_Ficha_Avaliacao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data: Date;
		Hospedagem: number;
		Itens: SiSMoura.Core.Entity.Animais_Hospedagem_Ficha_Avaliacao_Item[];
		Observacao: string;
		Usuario: string;
		Usuario_Avaliacao: number;
	}
	interface Animais_Hospedagem_Ficha_Avaliacao_Item extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Ficha_Avaliacao_Item: number;
		Hospedagem_Ficha_Avaliacao: number;
		Observacao: string;
		Resposta: boolean;
	}
	interface Animais_Hospedagem_Local extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Empresa: number;
		Identificacao: string;
		Inativo: boolean;
		Inativo_Exibicao: string;
		Observacao: string;
		Tipo_Hospedagem: SiSMoura.Core.Entity.Animais_Hospedagem.TipoHospedagem;
	}
	interface Animais_Hospedagem_Parceiro_Especie extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Especie: number;
		Fornecedor: number;
	}
	interface Animais_Hospedagem_Parceiro_Indicacao extends SiSMoura.Core.Common.Entity {
		Animal: number;
		Codigo: number;
		Data_Indicacao: Date;
		Fornecedor: number;
		Proprietario: number;
		Usuario_Indicou: number;
	}
	interface Animais_Hospedagem_Produto extends SiSMoura.Core.Common.Entity {
		Animais_Atendimento_Produto: number;
		Atendimento: number;
		Cobrar: boolean;
		Codigo: number;
		Concluido: boolean;
		Data: Date;
		Desconto: number;
		Desconto_Porcentagem: number;
		Funcionario: number;
		Gerou_Atendimento: boolean;
		Hospedagem: number;
		Item: number;
		Nome_Produto: string;
		Nome_Profissional: string;
		Observacao: string;
		Produto: number;
		Profissional: number;
		Qtde: number;
		Total: number;
		Valor: number;
		Valor_Final: number;
		Venda: number;
	}
	interface Animais_Hospedagem_Produto_Petz extends SiSMoura.Core.Common.Entity {
		Atendimento: number;
		Codigo_Barras: string;
		Hospedagem: number;
		Id: number;
		Item: number;
		Nome_Produto: string;
		Pago: boolean;
		Pago_Text: string;
		Quantidade: number;
		Valor_Total: number;
		Valor_Unitario: number;
	}
	interface Animais_Hospedagem_Reserva extends SiSMoura.Core.Common.Entity {
		Animal: number;
		Assinatura: SiSMoura.Core.Entity.Animais_Hospedagem_Checklist_Assinatura;
		Atendimentos: SiSMoura.Core.Entity.Animais_Atendimento[];
		AvaliacaoAnimal: SiSMoura.Core.Entity.Avaliacao_Comportamento_Retorno;
		Baia: number;
		Cancelada: boolean;
		CheckList: string;
		Checklist_Itens: SiSMoura.Core.Entity.Animais_Hospedagem_Checklist_Item[];
		CheckListCodigo: number;
		Codigo: number;
		Data_Cadastro: Date;
		Data_Cancelamento: Date;
		Data_Entrada: Date;
		Data_Saida: Date;
		Diarias: SiSMoura.Core.Entity.Animais_Hospedagem_Servico[];
		DiasReserva: SiSMoura.Core.Entity.Animais_Reserva_Hospedagem_Dias[];
		DiasSemana: number[];
		Empresa: number;
		EsperaReserva: number;
		Funcionario: number;
		Hospedagem: number;
		Local: number;
		Meio_Pagamento: SiSMoura.Core.Entity.Animais_Hospedagem_Reserva.enMeioPagamento;
		Motivo_Cancelamento: string;
		Observacao: string;
		OperacaoEmail: SiSMoura.Core.Entity.Animais_Hospedagem_Reserva.enOperacaoEnvioEmail;
		Pagamento_Email_STOOM: SiSMoura.Core.Entity.Petz_Pagamento_Email_Stoom;
		Profissional_CheckList: number;
		Proprietario: number;
		Proprietario_Nome: string;
		Tipo_Hospedagem: number;
		Usuario_Cadastro: number;
		Usuario_Cancelou: number;
		Utilizado: boolean;
	}
	interface Animais_Hospedagem_Servico extends SiSMoura.Core.Common.Entity {
		Animais_Servicos_Codigo: number;
		Atendimento: number;
		AuxAgendamento: SiSMoura.Core.Entity.Animais_Marketing_Servicos;
		Codigo: number;
		Concluido: boolean;
		Concluido_Text: string;
		Data_Cadastro: Date;
		Data_Execucao: Date;
		Desconto: number;
		Desconto_Porcentagem: number;
		Dia_Semana: string;
		Dia_Servico: Date;
		Funcionario: number;
		Gerou_Atendimento: boolean;
		Hora_Servico: Date;
		Hospedagem: number;
		isDiariaAdicionalCheckout: boolean;
		IsPago: boolean;
		IsServicoHospedagem: boolean;
		Item: number;
		Nome_Profissional: string;
		Nome_Servico: string;
		Observacao: string;
		Pago_Text: string;
		Presenca: string;
		Presenca_Text: string;
		Profissional: number;
		Qtde: number;
		Reserva: number;
		Servico: number;
		statusAtendimentoZanthus: SiSMoura.Core.Entity.Animais_Atendimento.StatusEnvioZanthus;
		Valor: number;
		Valor_Final: number;
	}
	interface Animais_Imposto_Prestador extends SiSMoura.Core.Common.Entity {
		Aliquota: number;
		Codigo: number;
		Descricao: string;
	}
	interface Animais_Impressora_Nao_Fiscal extends SiSMoura.Core.Common.Entity {
		Caminho: string;
		Codigo: number;
		Descricao: string;
		Modelo: number;
		Remover_Acento: boolean;
		Saltos: number;
		UsarDLL: boolean;
	}
	interface Animais_Incidencia extends SiSMoura.Core.Common.Entity {
		Cod_Animal: number;
		Cod_Atendimento: number;
		Codigo: number;
		Datahora: Date;
		Descricao: string;
		Gravidade: number;
		Gravidade_Texto: string;
		Origem_Acidente: number;
		Origem_Acidente_Texto: string;
		Tipo_Acidente: number;
		Tipo_Acidente_Texto: string;
	}
	interface Animais_Indisponibilidade_Funcionario extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Final: Date;
		Data_Inicial: Date;
		Funcionario: number;
		Hora_Final: string;
		Hora_Inicial: string;
		Tipo_Indisponibilidade: string;
	}
	interface Animais_Internacao extends SiSMoura.Core.Common.Entity {
		Animal: number;
		Codigo: number;
		Data_Cadastro: Date;
		Data_Entrada: Date;
		Data_Saida: Date;
		Empresa: number;
		Finalizado: boolean;
		Hora_Visita_Final: string;
		Hora_Visita_Inicial: string;
		Leitos: SiSMoura.Core.Entity.Animais_Internacao_Item_Leito[];
		Local: number;
		Observacao: string;
		Produtos: SiSMoura.Core.Entity.Animais_Internacao_Produto[];
		Profissional_Servico_Internacao: number;
		Proprietario: number;
		Servico_Internacao: number;
		Servicos: SiSMoura.Core.Entity.Animais_Internacao_Servico[];
		Usuario_Cadastro: number;
		Usuario_Entrada: number;
		Usuario_Saida: number;
	}
	interface Animais_Internacao_Item_Leito extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Internacao: number;
		Leito: number;
	}
	interface Animais_Internacao_Leito extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Local: number;
	}
	interface Animais_Internacao_Local extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Empresa: number;
		Identificacao: string;
		Inativo: boolean;
		Inativo_Exibicao: string;
		Observacao: string;
	}
	interface Animais_Internacao_Produto extends SiSMoura.Core.Common.Entity {
		Animais_Atendimento_Produto: number;
		Atendimento: number;
		AuxAtendimentoConcluido: boolean;
		Cobrado: boolean;
		Cod_Produto: number;
		Data: Date;
		Data_Cadastro: Date;
		Desconto: number;
		Desconto_Porcentagem: number;
		Funcionario: number;
		Gerou_Atendimento: boolean;
		Hora: Date;
		Id: number;
		Internacao: number;
		Item: number;
		Observacao: string;
		Profissional: number;
		Quantidade: number;
		Total: number;
		Valor: number;
	}
	interface Animais_Internacao_Servico extends SiSMoura.Core.Common.Entity {
		Animais_Servicos_Codigo: number;
		Atendimento: number;
		AuxAgendamento: SiSMoura.Core.Entity.Animais_Marketing_Servicos;
		AuxAtendimentoConcluido: boolean;
		Codigo: number;
		Data_Cadastro: Date;
		Data_Execucao: Date;
		Desconto: number;
		Desconto_Porcentagem: number;
		Dia_Servico: Date;
		Funcionario: number;
		Gerou_Atendimento: boolean;
		Internacao: number;
		Item: number;
		Observacao: string;
		Profissional: number;
		Quantidade: number;
		Servico: number;
		Valor: number;
		Valor_Final: number;
	}
	interface Animais_Jazigo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Identificacao: string;
		Inativo: boolean;
		Observacao: string;
		Status: number;
	}
	interface Animais_Jazigo_Documento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Modelo_Documento: string;
	}
	interface Animais_Laboratorio_Exame_Observacao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Animais_Lista_Espera extends SiSMoura.Core.Common.Entity {
		Animais_Lista_Espera_Servico: SiSMoura.Core.Entity.Animais_Lista_Espera_Servico[];
		Animal: number;
		Atendimento: number;
		Codigo: number;
		Data_Cadastro: Date;
		Data_Fim: Date;
		Data_Inicio: Date;
		Empresa: number;
		Hora_Fim: string;
		Hora_Inicio: string;
		Profissional: number;
		Proprietario: number;
	}
	interface Animais_Lista_Espera_Servico extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Animais_Lista_Espera: number;
		Codigo_Servico: number;
	}
	interface Animais_Lista_Espera_ServicoRetorno extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Servico: number;
		Nome_Servico: string;
	}
	interface Animais_Lista_EsperaRetorno extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Animal: number;
		Codigo_Proprietario: number;
		Nome_Animal: string;
		Nome_Proprietario: string;
		Telefone_Proprietario: string;
	}
	interface Animais_Marketing_Servicos extends SiSMoura.Core.Common.Entity {
		Animal: number;
		Anual: boolean;
		Atendimento: number;
		Codigo: number;
		Data: Date;
		Dose: number;
		Empresa: number;
		Plano: number;
		Proprietario: number;
		Semestral: boolean;
		Servico: number;
		Servico_Atendimento: number;
		Servico_Descricao: string;
	}
	interface Animais_Microchip_Historico_Movimentacao extends SiSMoura.Core.Common.Entity {
		Cnpj_Destinatario: string;
		Cnpj_Emitente: string;
		Data_Emissao: Date;
		Data_Vencimento: Date;
		Fornecedor_Cep: string;
		Fornecedor_Cnpj: string;
		Fornecedor_Complemento: string;
		Fornecedor_Endereco: string;
		Fornecedor_Numero: string;
		Fornecedor_Razao_Social: string;
		Id: number;
		Movimentacoes: SiSMoura.Core.Entity.Animais_Microchip_Historico_Movimentacao_Item[];
		Nota_Fiscal: string;
		Serie: string;
		Tipo: string;
		Tipo_Nota: string;
	}
	interface Animais_Microchip_Historico_Movimentacao_Item extends SiSMoura.Core.Common.Entity {
		Id: number;
		Id_Historico: number;
		Microchip_Anilha: string;
		Obito: boolean;
		Observacao: string;
		Tipo_Controle: string;
		Valor_Compra: number;
		Valor_Venda: number;
	}
	interface Animais_Modelo_Contrato extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Modelo_Contrato: string;
	}
	interface Animais_Modelo_Contrato_Ong extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Modelo_Contrato: string;
	}
	interface Animais_Motivo_Cancelamento_Ag extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Exibir_Observacao: boolean;
		Tipo: number;
	}
	interface Animais_Motivo_Recusa_Laboratorio_Exames extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Animais_Motivo_Recusa_Prestador extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Animais_Orcamento_Atendimento extends SiSMoura.Core.Common.Entity {
		Cod_Animal: number;
		Cod_Proprietario: number;
		Codigo: number;
		Cpf: string;
		Data: Date;
		Ddd: number;
		Email: string;
		Empresa: number;
		Nome_Animal: string;
		Nome_Proprietario: string;
		Produtos: SiSMoura.Core.Entity.Animais_Orcamento_Atendimento_Produto[];
		Servicos: SiSMoura.Core.Entity.Animais_Orcamento_Atendimento_Item[];
		Telefone: string;
		Tipo: string;
		Usuario_Cadastrou: number;
		UsuarioCadastrouEntity: SiSMoura.Core.Entity.Usuario;
	}
	interface Animais_Orcamento_Atendimento_Item extends SiSMoura.Core.Common.Entity {
		Cod_Orcamento: number;
		Cod_Servico: number;
		Codigo: number;
		Contador: number;
		Desconto: number;
		Quantidade: number;
		TempNomeServico: string;
		Valor_Total: number;
		Valor_Unitario: number;
	}
	interface Animais_Orcamento_Atendimento_Produto extends SiSMoura.Core.Common.Entity {
		Cobrado: boolean;
		Cod_Orcamento: number;
		Cod_Produto: number;
		Codigo: number;
		Contador: number;
		Desconto: number;
		Quantidade: number;
		TempNomeProduto: string;
		Valor_Total: number;
		Valor_Unitario: number;
	}
	interface Animais_Orcamento_Documento_Empresa extends SiSMoura.Core.Common.Entity {
		Cod_Documento: number;
		Empresa: number;
		Id: number;
	}
	interface Animais_Pagamento_Prestador_Servico extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Prestador: number;
		ServicosValores: SiSMoura.Core.Entity.Animais_Prestador_Servico_Valor[];
		Valor_Hora: number;
	}
	interface Animais_Painel_Tipo_Exame extends SiSMoura.Core.Common.Entity {
		Id: number;
		Tipo_Exame: number;
		Tipo_Exame_Painel: number;
	}
	interface Animais_Pelagem extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Animais_Peso extends SiSMoura.Core.Common.Entity {
		Animal: number;
		Codigo: number;
		Data: Date;
		Peso: number;
	}
	interface Animais_Plano extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Servicos: SiSMoura.Core.Entity.Animais_Plano_Servico[];
	}
	interface Animais_Plano_Autorizacao extends SiSMoura.Core.Common.Entity {
		Animal: number;
		Atendimento: number;
		Codigo: number;
		Codigo_Retorno: number;
		Codigo_RetornoDescricao: string;
		Codigo_RetornoEnum: SiSMoura.Core.Entity.Animais_Plano_Autorizacao.enmCodigoRetornoPlanoAutorizacao;
		Codigo_Servico: number;
		Contrato: number;
		Data_Solicitacao: Date;
		Data_Status: Date;
		Data_Utilizacao_Servico: Date;
		Desconto_Servico: number;
		HistoricoAutorizacoes: SiSMoura.Core.Entity.Animais_Plano_Autorizacao_Historico[];
		Nivel_Autorizacao_Atual: number;
		Observacao_Status: string;
		Quantidade: number;
		Status: number;
		StatusDescricao: string;
		StatusEnum: SiSMoura.Core.Entity.Animais_Plano_Autorizacao.enmStatusPlanoAutorizacao;
		Tipo_Autorizacao: string;
		Usuario_Solicitacao: number;
		Usuario_Status: number;
		Usuario_Utilizacao_Servico: number;
		Valor_Aprovado: number;
		Valor_Coparticipacao: number;
	}
	interface Animais_Plano_Autorizacao_Historico extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Plano_Autorizacao: number;
		Data_Autorizou: Date;
		Isautorizado: boolean;
		Nivel_Autorizou: number;
		Usuario_Autorizou: number;
	}
	interface Animais_Plano_Email extends SiSMoura.Core.Common.Entity {
		Assinatura_Email: string;
		Assunto: string;
		Codigo: number;
		Descricao: string;
		Mensagem: string;
	}
	interface Animais_Plano_Nivel extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Email: string;
		Nivel: number;
		Usuarios: SiSMoura.Core.Entity.Animais_Plano_Nivel_Usuario[];
	}
	interface Animais_Plano_Nivel_Usuario extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Animais_Plano_Nivel: number;
		NomeUsuario: string;
		Usuario: number;
	}
	interface Animais_Plano_Pontuacao_Idade extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Contador: number;
		Descricao: string;
		Idade_Final: number;
		Idade_Inicial: number;
		Plano_Saude: number;
		Pontuacao_Final: number;
		Pontuacao_Inicial: number;
		Valor: number;
	}
	interface Animais_Plano_Saude extends SiSMoura.Core.Common.Entity {
		Carencia_Padrao: number;
		Codigo: number;
		Data_Cadastro: Date;
		Descontos: SiSMoura.Core.Entity.Animais_Plano_Saude_Descontos[];
		Descricao: string;
		Empresas: SiSMoura.Core.Entity.Animais_Plano_Saude_Empresa[];
		Especies: SiSMoura.Core.Entity.Animais_Plano_Saude_Especie[];
		IdadeMaximaFilhote: number;
		Inativo: boolean;
		isPlanoFilhotes: boolean;
		Limite_Dias_Compra: number;
		Parcelas_Descontar: number;
		Pontuacoes: SiSMoura.Core.Entity.Animais_Plano_Pontuacao_Idade[];
		Servicos: SiSMoura.Core.Entity.Animais_Plano_Saude_Servicos[];
		Tipo_Plano: number;
		Tipo_PlanoEnum: SiSMoura.Core.Entity.Animais_Plano_Saude.enmTipoPlanoSaude;
		TipoFilhote: number;
		Valor_Desconto_Multi_Contratos: number;
		Valor_Mensalidade_Padrao: number;
	}
	interface Animais_Plano_Saude_Descontos extends SiSMoura.Core.Common.Entity {
		Cod_Servico: number;
		Codigo: number;
		Codigo_Plano_Saude: number;
		Item: number;
		Porcentagem_Desconto: number;
		Tempo_Final: number;
		Tempo_Inicial: number;
	}
	interface Animais_Plano_Saude_Empresa extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Plano: number;
		Empresa: number;
		EmpresaEntity: SiSMoura.Core.Entity.Empresa;
	}
	interface Animais_Plano_Saude_Especie extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Plano: number;
		Especie: number;
		EspecieEntity: SiSMoura.Core.Entity.Animais_Especie;
	}
	interface Animais_Plano_Saude_Precos extends SiSMoura.Core.Common.Entity {
		Acrescimo_Mensalidade: number;
		Cod_Raca: number;
		Cod_Score: number;
		Codigo: number;
		Codigo_Plano_Saude: number;
		IdadeFinal: number;
		IdadeInicial: number;
		Item: number;
		Raca_Descricao: string;
		Score_Descricao: string;
	}
	interface Animais_Plano_Saude_Servicos extends SiSMoura.Core.Common.Entity {
		Carencia_Servico: number;
		Codigo: number;
		Codigo_Plano_Saude: number;
		Dias_Limite_Utilizacao: number;
		Lista_Preco: number;
		Lista_Preco_Descricao: string;
		Nivel_Autorizacao: number;
		Nivel_Autorizacao_Descricao: string;
		Porcentagem_Desconto: number;
		Quantidade_Limite: number;
		Servico: number;
		ServicoEntity: SiSMoura.Core.Entity.ServicoInfoRetorno;
		Tipo_Valor_Coparticipacao: string;
		Tipo_Valor_Coparticipacao_Descricao: string;
		Valor_Coparticipacao: number;
	}
	interface Animais_Plano_Score extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Animais_Plano_Servico extends SiSMoura.Core.Common.Entity {
		Anual: boolean;
		Anual_Extenso: string;
		Codigo: number;
		Descricao_Servico: string;
		Dias: number;
		Dose: number;
		Plano: number;
		Semestral: boolean;
		Semestral_Extenso: string;
		Servico: number;
	}
	interface Animais_Plano_Tipo_Triagem extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Animais_Plano_Triagem extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Cadastro: Date;
		Descricao: string;
		Inativo: boolean;
		Itens: SiSMoura.Core.Entity.Animais_Plano_Triagem_Item[];
		Usuario_Cadastro: number;
	}
	interface Animais_Plano_Triagem_Item extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Contador: number;
		Descricao: string;
		Pontuacao: number;
		Score: number;
		ScoreEntity: SiSMoura.Core.Entity.Animais_Plano_Score;
		Tipo_Triagem: number;
		TipoTriagemEntity: SiSMoura.Core.Entity.Animais_Plano_Tipo_Triagem;
		Triagem: number;
	}
	interface Animais_Prestador_Servico_Valor extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Pagamento: number;
		Lista_Preco: number;
		Porcentagem: number;
		Servico: number;
		Valor: number;
	}
	interface Animais_Profissional_Produtividade extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Itens: SiSMoura.Core.Entity.Animais_Profissional_Produtividade_Servico[];
		Profissional: number;
	}
	interface Animais_Profissional_Produtividade_Servico extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Produtividade: number;
		Hora: number;
		Minutos: number;
		Servico: number;
		Servico_Nome: string;
	}
	interface Animais_Profissional_Valor_Servico extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Profissional: number;
		Codigo_Servico: number;
		Valor_Servico: number;
	}
	interface Animais_Raca extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Especie: number;
		Foto: string;
		Porte: number;
		Porte_Descricao: string;
		Potencial: number;
		Raca: string;
	}
	interface Animais_Receitas extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Animais_Recusa_Servico_Faltante extends SiSMoura.Core.Common.Entity {
		Atendimento: number;
		Codigo: number;
		Codigo_Servico: number;
	}
	interface Animais_Reserva_Hospedagem_Dias extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_fim: Date;
		Data_Inicio: Date;
		Dia: Date;
		Reserva: number;
		Tipo_Hospedagem: number;
	}
	interface Animais_Sala extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Empresa: number;
		Grupos: SiSMoura.Core.Entity.Animais_Sala_Grupo[];
	}
	interface Animais_Sala_Grupo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Sala: number;
		Grupo: number;
	}
	interface Animais_Sala_Setor extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Setor: number;
		Sala: number;
		Sala_Descricao: string;
	}
	interface Animais_Sequencia_Servico extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Itens: SiSMoura.Core.Entity.Animais_Sequencia_Servico_Item[];
		Servico: number;
	}
	interface Animais_Sequencia_Servico_Item extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Sequencia: number;
		Ordem: number;
		Servico: number;
		Servico_Nome: string;
	}
	interface Animais_Servico_Atendimento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Configuracao: number;
		Empresa: number;
		Horarios: SiSMoura.Core.Entity.Animais_Servico_Atendimento_Horario[];
		Servico: number;
		Servico_Nome: string;
		Subgrupo: number;
		Subgrupo_Nome: string;
	}
	interface Animais_Servico_Atendimento_Horario extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Servico_Atendimento: number;
		Dia_Nome: string;
		Dia_Semana: number;
		Hora_Final: Date;
		Hora_Inicial: Date;
	}
	interface Animais_Servico_Ig extends SiSMoura.Core.Common.Entity {
		Codigo_Especie: number;
		Codigo_Servico: number;
		Id: number;
		Ig: string;
		Nome_Especie: string;
		Tipo: number;
		Tipo_Descricao: string;
	}
	interface Animais_Servico_Participante extends SiSMoura.Core.Common.Entity {
		Animais_Servico: number;
		Atendimento: number;
		AuxNomeProfissional: string;
		Codigo: number;
		Comissao: number;
		Profissional: number;
		Servico: number;
	}
	interface Animais_Servicos extends SiSMoura.Core.Common.Entity {
		AgendamentoNaoFinalizado: boolean;
		Atendimento: number;
		Cod_Animal: number;
		Codigo: number;
		Codigo_Autorizacao_Plano: number;
		Concluido: boolean;
		ConcluidoFormatado: string;
		Data: Date;
		Data_Alteracao: Date;
		Data_Entrega: Date;
		Data_Validade: Date;
		Desconto: number;
		Desconto_Porcentagem: number;
		Desconto_Verificado: boolean;
		Empresa: number;
		EnviouSMS: boolean;
		Finalizado: boolean;
		GerarSemData: boolean;
		Hora_Alteracao: string;
		Hora_Entrega: string;
		Hora_Pegar: string;
		Hora_Servico: string;
		Importado_Venda: boolean;
		isVendido: boolean;
		Item: number;
		Laboratorio: string;
		Lista_Preco: number;
		Lote: string;
		Obs: string;
		Participantes: SiSMoura.Core.Entity.Animais_Servico_Participante[];
		Partida: string;
		Posicao_Pacote: number;
		Presenca: string;
		Presenca_Text: string;
		Profi1: number;
		Profi2: number;
		Profi3: number;
		Profi4: number;
		Profissional_Responsavel: number;
		Qtde: number;
		Qtde_Pacote: number;
		Qtde_Serv: number;
		Servico: number;
		Servico_Gerado: string;
		Servico_Pai: number;
		ServicoConsulta_Origem: number;
		Tipo_Desconto: number;
		Usuario: number;
		VacinaAgendada: SiSMoura.Core.Entity.Animais_Marketing_Servicos;
		Valor: number;
		Valor_Repasse_Prestador: number;
		Valor_Total: number;
		Venda: number;
	}
	interface Animais_Servicos_Autorizar_Alteracao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Grupo: number;
	}
	interface Animais_Servicos_Prestador extends SiSMoura.Core.Common.Entity {
		Atendimento_Lancado: number;
		Codigo: number;
		Codigo_Animal: number;
		Data_Hora: Date;
		Empresa: number;
		Profissional: number;
		ServicosRealizados: SiSMoura.Core.Entity.Animais_Servicos_Realizados_Prestador[];
	}
	interface Animais_Servicos_Realizados_Prestador extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Animais_Servicos_Prestador: number;
		Codigo_Servico: number;
	}
	interface Animais_Status_Exame extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Cor_Fonte: number;
		Cor_Fundo: number;
		Descricao: string;
		Padrao: boolean;
		Padrao_Extenso: string;
	}
	interface Animais_Substituicao_Anilha extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Substituicao: Date;
		Motivo_Substituicao: string;
		Num_Identificacao_Anterior: string;
		Num_Identificacao_Atual: string;
		Tipo_Produto: string;
	}
	interface Animais_Temperamento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Inativo: boolean;
	}
	interface Animais_Tipo_Acidente extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Animais_Tipo_Cortesia extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Animais_Tipo_Documento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Empresas: SiSMoura.Core.Entity.Animais_Tipo_Documento_Empresa[];
		Modelo_Documento: string;
	}
	interface Animais_Tipo_Documento_Empresa extends SiSMoura.Core.Common.Entity {
		Empresa: number;
		Id: number;
		Tipo_Documento: number;
	}
	interface Animais_Tipo_Exame extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Inativo: boolean;
		Resultado_Consultorio: boolean;
		Tipo_Exames: SiSMoura.Core.Entity.Animais_Painel_Tipo_Exame[];
	}
	interface Animais_Tipo_Pelagem extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Animais_Tipo_Profissional extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Hora_Final_Atendimento: System.TimeSpan;
		Hora_Inicial_Atendimento: System.TimeSpan;
		Intervalo_Atendimento: number;
	}
	interface Animais_Tippro_Gruser extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Grupo_Servico: number;
		Tipo_Profissional: number;
	}
	interface Animais_Tratamento_Doenca extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Inativo: boolean;
		Tratamento: string;
	}
	interface Animais_Vacinacoes_Retroativas extends SiSMoura.Core.Common.Entity {
		Animal: number;
		Codigo: number;
		Data_Aplicacao: Date;
		Vacina: number;
	}
	interface Animais_Veterinaria extends SiSMoura.Core.Common.Entity {
		Anamnese: string;
		Assunto: number;
		Cid: number;
		Cod_Animal: number;
		Cod_Veteri: number;
		Codigo: number;
		Codigo_Receita: number;
		Data: Date;
		Data_Retorno: Date;
		Descricao: string;
		Empresa: number;
		Exame_Fisico: string;
		ExamesSolicitados: SiSMoura.Core.Entity.AnimaisExameRetorno[];
		Ficha_Clinica: string;
		Hospedagem: number;
		Mostrar_Diagnostico: boolean;
		Peso: number;
		Receita: string;
		TempCodigoCheckIn: number;
		Temperatura: number;
		Tratamento: string;
		Usuario: number;
		visualizouProtocolo: boolean;
	}
	interface Animais_Veterinaria_Documento extends SiSMoura.Core.Common.Entity {
		Caminho_Documento: string;
		Codigo: number;
		Descricao: string;
		Modelo_Documento: string;
	}
	interface Animais_Veterinaria_Documento_Exame extends SiSMoura.Core.Common.Entity {
		Caminho_Documento: string;
		Cod_Tipo_Exame: number;
		Codigo: number;
		Descricao: string;
		Modelo_Documento: string;
	}
	interface Animais_Veterinaria_Log_Protocolo extends SiSMoura.Core.Common.Entity {
		Cid: number;
		Consulta: number;
		Data_Hora: Date;
		Id: number;
		Usuario: number;
	}
	interface Animais_Veterinario extends SiSMoura.Core.Common.Entity {
		Apelido: string;
		Categorias: SiSMoura.Core.Entity.Profissional_Categoria[];
		Codigo: number;
		CPF: string;
		Crmv: string;
		Curriculo: string;
		Dia_Pagamento: number;
		Email: string;
		Empresas: SiSMoura.Core.Entity.Profissional_Empresa[];
		Endereco: string;
		Enviar_Aplicativo: boolean;
		Fone: string;
		Inativo: boolean;
		isProfissionalGenerico: boolean;
		Matricula: string;
		Modelo_Pagamento: number;
		Nome: string;
		Razao_Social: string;
		Terceirizado: boolean;
		Tipo: string;
		Tipo_Profissional: number;
		UrlFoto: string;
		Usuario: number;
		Valor_Hora: number;
	}
	interface Animais_Veterinario_Externo extends SiSMoura.Core.Common.Entity {
		Clinica: string;
		Codigo: number;
		Crmv: string;
		Email: string;
		Fone: string;
		Nome: string;
	}
	interface AnimaisCadastroApiRetorno {
		Cod_Especie: number;
		Cod_Proprietario: number;
		Cod_Raca: number;
		Codigo: number;
		Especie: string;
		Idade: number;
		Nome_Animal: string;
		Raca: string;
		Sexo: string;
	}
	interface AnimaisCadastroBasicoRetorno extends SiSMoura.Core.Common.Entity {
		Chip: string;
		Cod_Especie: number;
		Cod_Proprietario: string;
		Cod_Raca: number;
		Codigo: number;
		Data_Nascimento: Date;
		Descricao_Especie: string;
		Descricao_Raca: string;
		Idade_Formatada: string;
		Nome_Animal: string;
		Nome_Proprietario: string;
		Sexo: string;
		Sexo_Completo: string;
	}
	interface AnimaisCadastroRetorno {
		Animal_Venda: string;
		Carterinha_Plano: string;
		Castrado: string;
		Chip: string;
		Cod_Especie: number;
		Cod_Proprietario: number;
		Cod_Raca: number;
		Codigo: number;
		Codigo_Venda: number;
		Contador: number;
		Cor: string;
		Criador: number;
		Data_Cadastro: Date;
		Data_Obito: Date;
		Data_Venda: Date;
		Inativo: string;
		Nasc: Date;
		Nome_Animal: string;
		Nome_Pedigree: string;
		Obito: boolean;
		Obito_Extenso: string;
		Observacao_Exame: string;
		Observacao_Servico: string;
		Pelagem: number;
		Peso: number;
		Preco_Custo: number;
		Rga: string;
		Sexo: string;
		Tipo_Pelagem: number;
		Valor: number;
		Vendido: string;
	}
	interface AnimaisConfirmacaoAgendamentoRetorno extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Autorizacao_Plano: number;
		Concluido: boolean;
		Data: Date;
		Desconto: number;
		Desconto_Porcentagem: number;
		Empresa_Codigo: number;
		Empresa_Descricao: string;
		Hora: string;
		Lista_Preco: number;
		Profissional_Codigo: number;
		Profissional_Descricao: string;
		Quantidade: number;
		Servico_Codigo: number;
		Servico_Duracao: string;
		Servico_Nome: string;
		Servico_Valor: number;
		Tipo_Desconto: number;
		Total: number;
		VacinaAgendada: SiSMoura.Core.Entity.Animais_Marketing_Servicos;
		Valor_Repasse_Prestador: number;
		Venda: number;
	}
	interface AnimaisContratoPlanoBasico {
		Animal: number;
		Cod_Score: number;
		Codigo: number;
		Data_Cadastro: Date;
		Data_Cancelado: Date;
		Data_Consulta_Integracao: Date;
		Data_Fim: Date;
		Data_Inicio: Date;
		Data_Integracao_Pagamento: Date;
		Data_Solicitou_Pagamento: Date;
		Empresa: number;
		Plano: number;
		Tipo_Cobranca: number;
		Triagem: number;
		Valor_Mensalidade: number;
	}
	interface AnimaisEmailContratoONG extends SiSMoura.Core.Common.Entity {
		Anexos: string[];
		Assunto: string;
		Destinatarios: string[];
		Mensagem: string;
		Remetente: string;
	}
	interface AnimaisEmailDevolucaoONG extends SiSMoura.Core.Common.Entity {
		Anexos: string[];
		Assunto: string;
		Destinatarios: string[];
		Mensagem: string;
		Remetente: string;
	}
	interface AnimaisEmailEntradaAdocao extends SiSMoura.Core.Common.Entity {
		Anexos: string[];
		Assunto: string;
		Destinatarios: string[];
		Mensagem: string;
		Remetente: string;
	}
	interface AnimaisEmpresaFaturamentoRetorno {
		Codigo_Empresa_Origem: number;
		Empresa_Faturamento: number;
		Empresa_Origem: string;
	}
	interface AnimaisEnvioLaudoExameRetorno {
		Atendimento: number;
		Codigo_Exame: number;
		Laudo: string;
		Tipo_Exame: string;
	}
	interface AnimaisEsperaTotalRetorno {
		Codigo: number;
		Total_Hora: number;
	}
	interface AnimaisExameRetorno {
		Codigo: number;
		Data: Date;
		Item: number;
		LaboratorioCodigo: number;
		LaboratorioDescricao: string;
		Resultado: string;
		StatusCodigo: number;
		StatusDescricao: string;
		TipoExameCodigo: number;
		TipoExameDescricao: string;
	}
	interface AnimaisFilhotesRetorno extends SiSMoura.Core.Common.Entity {
		Data_Entrada: Date;
		Data_Nascimento: Date;
		Data_Venda: Date;
		IsFilhote: boolean;
		IsPassouPrazo: boolean;
		Numero_Nota: number;
		TipoFilhote: number;
	}
	interface AnimaisItensTriagens {
		Item_Triagem: string;
		Observacao: string;
		Resposta: string;
		Tipo_Triagem: string;
	}
	interface AnimaisPainelTipoExameRetorno {
		Codigo_Tipo_Exame: number;
		Tipo_Exame: string;
	}
	interface AnimaisPeriodoSelecionadoRetorno {
		Data: Date;
		DiaSemana: number;
		Empresa: number;
		Hora: string;
		Profissional: number;
		Tipo: string;
	}
	interface AnimaisPrestadorServicoValorRetorno {
		Contador: number;
		Lista_Preco: number;
		Lista_Preco_Descricao: string;
		Porcentagem: number;
		Prestador_Nome: string;
		Servico: number;
		Servico_Nome: string;
		Valor: number;
		Valor_Servico: number;
	}
	interface AnimaisProfissionalValorServicoRetorno {
		Codigo_Servico: number;
		Servico: string;
		Valor_Servico: number;
	}
	interface AnimaisRecusaServicoRetorno {
		Codigo_Servico: number;
		Nome_Servico: string;
	}
	interface AnimaisSalaGrupoRetorno extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Grupo: number;
		Grupo_Nome: string;
	}
	interface AnimaisServicosPrestadoresRetorno {
		Atendimento: number;
		Codigo_Servico: number;
		Cpf_Proprietario: string;
		Data_Atendimento: Date;
		Empresa: string;
		Hora_Atendimento: string;
		Proprietario: string;
		Servico: string;
		Valor_Servico: number;
	}
	interface AnimaisServicosRealizadosPrestadorRetorno {
		Codigo_Servico: number;
		Servico: string;
	}
	interface AnimaisTipoDescontoGrupoRetorno {
		Grupo_Usuario: number;
		Grupo_UsuarioDescricao: string;
	}
	interface AnimaisVacinaRetorno extends SiSMoura.Core.Common.Entity {
		Data: Date;
		Dose: number;
		Vacina: string;
	}
	interface AnimaisValorImpostoPrestadorRetorno {
		Imposto: string;
		Valor: number;
	}
	interface AnimaisVeterinarioApiRetorno {
		Apelido: string;
		Codigo: number;
		Mostrar: boolean;
		Nome: string;
		ServicosPrestados: number[];
		Tipo_Profissional: number;
		UrlFoto: string;
	}
	interface Animal_Produto_Anilha extends SiSMoura.Core.Common.Entity {
		Anilha: string;
		Codigo: number;
		Produto: number;
	}
	interface Animal_Produto_AnilhaRetorno {
		Anilha: string;
		Codigo: number;
		Contador: number;
		Produto: number;
	}
	interface Assinaturas_Orcamento extends SiSMoura.Core.Common.Entity {
		Assinaturas: string;
		Codigo: number;
		Descricao: string;
		Padrao: boolean;
	}
	interface Avaliacao_Comportamento_Item_Retorno {
		Codigo_Pergunta: number;
		Codigo_Resposta: number;
		Observacao: string;
		Pergunta: string;
	}
	interface Avaliacao_Comportamento_Retorno {
		Animal: number;
		Aprovado: string;
		Codigo: number;
		Data_Avaliacao: Date;
		itens: SiSMoura.Core.Entity.Avaliacao_Comportamento_Item_Retorno[];
		Motivo_Reprovacao: string;
		Observacao: string;
		Profissional: number;
	}
	interface Balancete_VerificacaoRetorno {
		Codigo_Contabil: string;
		Credito: number;
		DCA: string;
		DCT: string;
		Debito: number;
		Descricao: string;
		Empresa: number;
		Origem: string;
		Root_Conta: number;
		Saldo_Anterior: number;
		Saldo_Atual: number;
		Tipo: string;
	}
	interface CabecalhoMapaCarga {
		Bairro: string;
		Cep: string;
		Cidade: string;
		Cliente: string;
		CodPedido: number;
		Endereco: string;
		Telefone: string;
	}
	interface Cadastro_Cliente_Imendes extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Cliente: number;
		Data: Date;
		Tipo_Atividade: string;
		Usuario: number;
		Valor_Implantacao: number;
		Valor_Mensalidade: number;
	}
	interface Caixa_Movimentacao extends SiSMoura.Core.Common.Entity {
		Bloqueado: boolean;
		Caixa: number;
		Cartao_Recebido: number;
		Centro_Custo: number;
		CentrosCusto: SiSMoura.Core.Entity.Lancamento_Centro_Custo[];
		Cod_Conciliacao: number;
		Cod_Movimentacao: number;
		Codigo_Baixa_Pagar: number;
		Codigo_Baixa_Receber: number;
		Codigo_Cartao: number;
		Codigo_Cheque: number;
		Codigo_Desconto_Titulo: number;
		Codigo_Venda: number;
		Configuracao_Lancamento: number;
		Conta_Contabil: number;
		Conta_Corrente: string;
		Data_Alteracao: Date;
		Data_Desbloqueio: Date;
		Data_Movimento: Date;
		Descricao: string;
		Doc_Bancario: number;
		Doc_Merc: number;
		Documento: number;
		Entrada_Saida: string;
		Marcou_Conciliacao: boolean;
		N_Doc_Bancario: string;
		N_Doc_Merc: string;
		Numero_Documento: number;
		Operador: number;
		Pdv: number;
		Tela: string;
		Tipo: number;
		Valor: number;
	}
	interface CaixaRetorno {
		Caixa: string;
		Data: Date;
		Descricao_Caixa: string;
		PDV: number;
	}
	interface CalculaEstoqueMinMaxRetorno {
		Codigo_Produto: number;
		Descricao_Produto: string;
		Estoque_Atual: number;
		Estoque_Maximo_Anterior: number;
		Estoque_Maximo_Atual: number;
		Estoque_Maximo_Diario: number;
		Estoque_Minimo_Anterior: number;
		Estoque_Minimo_Atual: number;
		Estoque_Minimo_Diario: number;
	}
	interface Campo_Cliente extends SiSMoura.Core.Common.Entity {
		Campos_Item: SiSMoura.Core.Entity.Campo_Cliente_Item[];
		Codigo: number;
		Descricao: string;
		Mascara: string;
		Pessoa: number;
		Tipo_Campo: string;
		Tipo_CampoEnum: SiSMoura.Core.Entity.Campo_Cliente.enmTipoCampo;
	}
	interface Campo_Cliente_Item extends SiSMoura.Core.Common.Entity {
		Campo: number;
		Codigo: number;
		Descricao: string;
		Item: number;
	}
	interface Campo_Cliente_Valor extends SiSMoura.Core.Common.Entity {
		Campo: number;
		Cliente: number;
		Codigo: number;
		Itemdata: number;
		Valor: string;
	}
	interface Campo_Movimentacao_Estoque extends SiSMoura.Core.Common.Entity {
		Campos_Item: SiSMoura.Core.Entity.Campo_Movimentacao_Estoque_Item[];
		Codigo: number;
		Descricao: string;
		Exibir_Procura: boolean;
		Mascara: string;
		Tipo_Campo: string;
		Tipo_CampoEnum: SiSMoura.Core.Entity.Campo_Movimentacao_Estoque.enmTipoCampo;
		Tipo_Movimentacao: number;
		Tipo_MovimentacaoDescricao: string;
	}
	interface Campo_Movimentacao_Estoque_Item extends SiSMoura.Core.Common.Entity {
		Campo: number;
		Codigo: number;
		Descricao: string;
		Item: number;
	}
	interface Campo_Movimentacao_Estoque_Valor extends SiSMoura.Core.Common.Entity {
		Campo: number;
		Codigo: number;
		Itemdata: number;
		Movimentacao: number;
		Valor: string;
	}
	interface Campo_Produto_Valor extends SiSMoura.Core.Common.Entity {
		Campo: number;
		Codigo: number;
		Itemdata: number;
		Produto: number;
		Valor: string;
	}
	interface Campo_Receita_Oculos extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Cardapio_Adicional extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Nome: string;
		Nome_Es: string;
		Nome_Fr: string;
		Nome_Us: string;
		Valor: number;
	}
	interface Cardapio_Produto extends SiSMoura.Core.Common.Entity {
		Cardapio_Online_Exibir: boolean;
		Cardapio_Online_Imagem: string;
		Descricao_Br: string;
		Descricao_Es: string;
		Descricao_Fr: string;
		Descricao_Jp: string;
		Descricao_Us: string;
		Digitar_Opcionais: boolean;
		Figura_Md5: string;
		Foto_Obsoleta: string;
		Inf_Nutricional_Br: string;
		Inf_Nutricional_Es: string;
		Inf_Nutricional_Fr: string;
		Inf_Nutricional_Jp: string;
		Inf_Nutricional_Us: string;
		Link_Imagem: string;
		Nome_Br: string;
		Nome_Es: string;
		Nome_Fr: string;
		Nome_Jp: string;
		Nome_Us: string;
		Permitir_Alterar_Quantidade: boolean;
		Produto: number;
		Visivel: boolean;
	}
	interface Cardapio_Produto_Adicional extends SiSMoura.Core.Common.Entity {
		Adicional: number;
		Id: number;
		Produto: number;
	}
	interface Carga extends SiSMoura.Core.Common.Entity {
		Aprovada: boolean;
		Codigo: number;
		Data: Date;
		Data_Fechamento: Date;
		Fechada: boolean;
		Id: number;
		Impresso: boolean;
		Transportadora: number;
		Usuario: number;
		Vendas: SiSMoura.Core.Entity.Carga_Venda[];
		Vendedor: number;
	}
	interface Carga_Fechamento extends SiSMoura.Core.Common.Entity {
		Carga: number;
		Codigo: number;
		Codigo_Receber: number;
		Data_Fechamento: Date;
		Doc_Bancario: number;
		Operador: number;
		Valor_Original: number;
		Valor_Recebido: number;
	}
	interface Carga_Tabela_PDV extends SiSMoura.Core.Common.Entity {
		Campo_Chave: string;
		Campo_Data: string;
		Carregar_PDV: string;
		Codigo: number;
		Ordem: number;
		PossuiCondicaoEmpresa: string;
		Tabela: string;
	}
	interface Carga_Venda extends SiSMoura.Core.Common.Entity {
		Carga: number;
		Codigo: number;
		Concluida: boolean;
		Data_Concluida: Date;
		Peso_Total: number;
		Venda: number;
	}
	interface Cartao extends SiSMoura.Core.Common.Entity {
		Cartao_Bandeira_Vinculo: SiSMoura.Core.Entity.Cartao_Bandeira_Vinculo[];
		Cartao_Dias: SiSMoura.Core.Entity.Cartao_Dias[];
		Cartao_Especifico: string;
		Codigo: number;
		Conta_Contabil: number;
		Conta_Contabil_Cartao: number;
		Conta_Corrente: string;
		Data_Base_Movimentacao: Date;
		Data_Carga: Date;
		Descontado: number;
		Descricao: string;
		Dia: number;
		Dias_Movimentacao: number;
		Finalizador_Fiscal: string;
		Fornecedor: number;
		Inativo: boolean;
		Tipo: string;
		Tipo_Parcelamento: string;
		Vinculo_IFood: string;
	}
	interface Cartao_Bandeira_Vinculo extends SiSMoura.Core.Common.Entity {
		Bandeira: number;
		Cartao: number;
		Data_Carga: Date;
		Id: number;
		Parcelas: number;
	}
	interface Cartao_Dias extends SiSMoura.Core.Common.Entity {
		Cartao: number;
		Contador: number;
		Data_Carga: Date;
		Descontado_Parcela: number;
		Dias: number;
		Id: number;
		Juros: number;
		Porcentagem: number;
	}
	interface Cartao_Finalizador extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Cartao: number;
		Codigo_Ecf: number;
		Finalizador_Fiscal: string;
	}
	interface Cartao_Presente extends SiSMoura.Core.Common.Entity {
		Cartao_Numero: number;
		Codigo: number;
		Empresa: number;
		Produto: number;
		Validade: number;
		Venda_Saida: number;
	}
	interface Cartao_Recebido extends SiSMoura.Core.Common.Entity {
		Bandeira_Cartao_Tef_Dedicado: number;
		Cartao: number;
		Cliente: number;
		Codigo: number;
		Codigo_Baixa_Receber: number;
		Codigo_Troca: number;
		Conciliado: boolean;
		Data_Emissao: Date;
		Data_Pagamento_Comissao: Date;
		Descontado: number;
		Descontado_Parcela: number;
		Descricao_Cartao_Tef_Dedicado: string;
		Gerar_Lancamento: boolean;
		Juros: number;
		Lancamento: number;
		Lancamento_Codigo: number;
		Lancamento_Tipo: number;
		Nsu: string;
		Operadora_Cartao_Tef_Dedicado: string;
		Orcamento: number;
		Os: number;
		Parcela: number;
		Recebimento: number;
		Situacao: number;
		Valor: number;
		Valor_Bruto_Conciliado: number;
		Valor_Final: number;
		Valor_Liquido_Conciliado: number;
		Vencimento: Date;
		Venda: number;
	}
	interface CartaoManutencaoVendaRetorno {
		Cartao: string;
		Codigo_Cartao: number;
		Valor: number;
	}
	interface CartaoVendaRetorno {
		Cartao: number;
		Contador: number;
		Descricao: string;
		Valor: number;
	}
	interface Categoria extends SiSMoura.Core.Common.Entity {
		Descricao: string;
		Id: number;
		Ordem: number;
	}
	interface Categoria_Pagamento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Categoria_Profissional extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Escala_Prestador: boolean;
		Servicos: SiSMoura.Core.Entity.Categoria_Profissional_Servico[];
		Tipo_Profissional: number;
	}
	interface Categoria_Profissional_Servico extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Categoria: number;
		Descricao: string;
		Servico: number;
	}
	interface Cdc extends SiSMoura.Core.Common.Entity {
		Cdc_Dias: SiSMoura.Core.Entity.Cdc_Dia[];
		Codigo: number;
		Descontado: number;
		Descricao: string;
		Dias_Credito_Loja: number;
		Dias_Debito: number;
	}
	interface Cdc_Dia extends SiSMoura.Core.Common.Entity {
		Cdc: number;
		Dias: number;
		Fator: number;
		Id: number;
	}
	interface Centro_Custo extends SiSMoura.Core.Common.Entity {
		Cc: string;
		Codigo: number;
		Contato: string;
		Descricao: string;
		Empresas: SiSMoura.Core.Entity.Centro_Custo_Empresa[];
		Padrao: boolean;
		Telefone: string;
	}
	interface Centro_Custo_Empresa extends SiSMoura.Core.Common.Entity {
		Cod_Centro_Custo: number;
		Codigo: number;
		Empresa: number;
	}
	interface CentroDeCustoRetorno {
		Centro_Custo: string;
		Centro_Custo_Codigo: number;
		Centro_Custo_Descricao: string;
		Contador: number;
		Id: number;
		Porcentagem: number;
		Valor: number;
	}
	interface Cfop extends SiSMoura.Core.Common.Entity {
		Ativo: boolean;
		Bonificacao: boolean;
		Cfop: number;
		CFOP_Composto: string;
		Cfop_GrupoEntity: SiSMoura.Core.Entity.Cfop_Grupo;
		Cop: string;
		Decreto: number;
		Descricao: string;
		Detalhe: string;
		Duplicata: boolean;
		Exportacao_Especifica: boolean;
		Grupo: number;
		Icms: boolean;
		Icms_St: boolean;
		Id: number;
		Id_Cfop: string;
		Ipi: boolean;
		Mensagem_Simples: boolean;
		Nome_Resumo: string;
		Operacao_Exterior: boolean;
		Relacionar: string;
		Tipo_Movimento: string;
		Tipo_Preco_Produto: string;
		Totalizarproduto: boolean;
	}
	interface Cfop_Entrada extends SiSMoura.Core.Common.Entity {
		Cfop_Entrada: string;
		Cfop_Saida: string;
		Id: number;
	}
	interface Cfop_Entrada_Produto extends SiSMoura.Core.Common.Entity {
		Cfop_Entrada: string;
		Cfop_Saida: string;
		Id: number;
		Produto: number;
		Tipo_Regra_Imposto_Entrada: number;
		Tipo_Regra_Imposto_Saida: number;
	}
	interface Cfop_Grupo extends SiSMoura.Core.Common.Entity {
		Descricao: string;
		Grupo: number;
	}
	interface Cheque_Historico extends SiSMoura.Core.Common.Entity {
		Baixado: boolean;
		Bloquear_Cadastro_Cheque: boolean;
		Bloquear_Deposito_Cheque: boolean;
		Codigo: number;
		Descricao: string;
		Tipo_Lancamento: string;
	}
	interface Cheque_Situacao extends SiSMoura.Core.Common.Entity {
		Cheque: number;
		Codigo: number;
		Data: Date;
		Motivo: string;
		Situacao: number;
	}
	interface Cheques extends SiSMoura.Core.Common.Entity {
		Agencia: string;
		Baixa_Data: Date;
		Banco: number;
		Cheque: number;
		ChequeSituacoes: SiSMoura.Core.Entity.Cheque_Situacao[];
		Cliente: number;
		Cod_Enviado: number;
		CodEmpresa: number;
		Codigo: number;
		Codigo_Recebimento: number;
		Codigo_Troca: number;
		Configuracao_Lancamento: number;
		Conta: string;
		ContaContabilLancamento: number;
		ContaCorrenteDeposito: string;
		Contas_Pagar: number;
		Cpf: string;
		Data_Cadastro: Date;
		Data_Pagamento_Comissao: Date;
		Data_Situacao_Atual: Date;
		DataDeposito: Date;
		DataLancamento: Date;
		Dias: number;
		Endereco_Cliente: string;
		Enviado: string;
		Fone_Cliente: string;
		Nao_Gerar_Lancamento: boolean;
		Nome_Cliente: string;
		Observacao: string;
		Origem: string;
		Pessoa: string;
		Situacao_Anterior: number;
		Situacao_Atual: number;
		Situacao_Cc: string;
		Tipo_Cheque: string;
		TipoLancamentoBaixaCheque: number;
		Valor_Cheque: number;
		Vencimento: Date;
		Venda: number;
		Vendedor: number;
	}
	interface Cidade extends SiSMoura.Core.Common.Entity {
		Cidade: string;
		CidadeEstado: string;
		Codigo: number;
		Codigo_Cidade_IBGE: number;
		Codigo_Pais: number;
		Codigo_SIAFI: number;
		Codigo_UF_IBGE: number;
		DDD: string;
		DescricaoEstado: string;
		Estado: string;
		Nome_Pais: string;
		Regiao: number;
	}
	interface Cliente extends SiSMoura.Core.Common.Entity {
		Data_Carga: Date;
		Pessoa: number;
		PessoaEntity: SiSMoura.Core.Entity.Pessoa;
	}
	interface Cliente_Bloqueado extends SiSMoura.Core.Common.Entity {
		Cnpj: string;
		Codigo: number;
		Conta_Receber: number;
		Data_Bloqueado: Date;
		Inserido_Moura: string;
		Motivo: string;
		Usuario: number;
	}
	interface Cliente_Bloqueado_Log extends SiSMoura.Core.Common.Entity {
		Cnpj: string;
		Codcliente_Bloqueado_Log: number;
		Datacadastro: Date;
		Motivo: string;
		Tipo: number;
		Usuario: number;
	}
	interface Cliente_Boletos extends SiSMoura.Core.Common.Entity {
		Codigo_Receber: number;
		Conta_Corrente: number;
		Data_Vencimento: Date;
		Nosso_Numero: number;
		Parcela: number;
		Valor: number;
	}
	interface Cliente_Produto_Continuo extends SiSMoura.Core.Common.Entity {
		Animais: string;
		Cliente: number;
		Cod_Animais: number;
		Data_Carga: Date;
		Duracao: number;
		Id: number;
		Produto: number;
		Tipo: string;
	}
	interface Cliente_Senha extends SiSMoura.Core.Common.Entity {
		Atendente: number;
		Baixou: boolean;
		Cliente: number;
		Cnpj: string;
		Contato_Cliente: string;
		Data: Date;
		Data_Vencimento: Date;
		Id: number;
		Motivo: string;
		Senha: string;
		Tipo: string;
	}
	interface Cliente_Veiculo extends SiSMoura.Core.Common.Entity {
		Ano_Fabricacao: string;
		Ano_Modelo: string;
		Capacidade: string;
		Categoria: string;
		Chassi: string;
		Cliente: number;
		Codigo: number;
		Codigo_Municipio: number;
		Combustivel: number;
		Cor: string;
		Data_Carga: Date;
		Identificacao1: string;
		Identificacao2: string;
		Ipva: string;
		Licenciamento: string;
		Marca_Modelo: string;
		Nf_Compra: string;
		Placa: string;
		Proprietario: string;
		Renavam: string;
		Representante: number;
		Tipo_Especie: string;
	}
	interface ClienteIMendesRetorno extends SiSMoura.Core.Common.Entity {
		Bairro: string;
		Cidade: string;
		Codigo: number;
		Codigo_Cliente: number;
		Contato: string;
		Cpf: string;
		Data: Date;
		Email: string;
		Endereco_Nome: string;
		Fone_Numero: string;
		Nome_Fantasia: string;
		Numero: string;
		Obs: string;
		Regime_Tributario: string;
		status: string;
		Tipo_Atividade: string;
		UF: string;
		Usuario: number;
		Valor_Implantacao: number;
		Valor_Mensalidade: number;
	}
	interface ClienteNfseRetorno extends SiSMoura.Core.Common.Entity {
		Cliente: number;
		Contrato: number;
		Empresa: number;
		Id: number;
		Nome_Cliente: string;
		Prioritario: boolean;
	}
	interface ClienteProdutoContinuoRetorno {
		Animal: number;
		Animal_Nome: string;
		Cliente: number;
		Contador: number;
		Duracao: number;
		Id: number;
		Produto: number;
		Produto_Nome: string;
		Tipo: string;
		Tipo_Nome: string;
	}
	interface Comanda extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Cliente: number;
		Data: Date;
		Data_Cancelamento: Date;
		Empresa: number;
		Finalizada: boolean;
		Itens: SiSMoura.Core.Entity.Comanda_Item[];
		Nome_Comanda: string;
		Pagamentos: SiSMoura.Core.Entity.Comanda_Pagamento[];
		Usuario: number;
		Usuario_Cancelamento: number;
	}
	interface Comanda_Item extends SiSMoura.Core.Common.Entity {
		Acrescimo: number;
		Codigo: number;
		Codigo_Comanda_Membro: number;
		Codigo_Produto: number;
		Codigo_Venda: number;
		Data_Cadastro: Date;
		Data_Cancelamento: Date;
		Desconto: number;
		Quantidade: number;
		Total: number;
		Usuario_Cadastro: number;
		Usuario_Cancelamento: number;
	}
	interface Comanda_Pagamento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Comanda: number;
		Data_Cadastro: Date;
		Nome_Pagador: string;
		Usuário_Cadastro: number;
		Valor_Pago: number;
	}
	interface Comando_Carga extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Comando: string;
		ComandoItem: SiSMoura.Core.Entity.Comando_Item_Carga[];
		Data_Inserido: Date;
		Descricao: string;
		Inativo: boolean;
		Usuario: number;
	}
	interface Comando_CargaRetorno extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Comando: string;
		Data_Executado: Date;
		Descricao: string;
		Empresa: number;
		Empresa_Exibicao: string;
		Pdv: number;
		Pdv_Exibicao: string;
		Usuario: number;
	}
	interface Comando_Item_Carga extends SiSMoura.Core.Common.Entity {
		Comando: number;
		Data_Executado: Date;
		Empresa: number;
		Empresa_Exibicao: string;
		Id: number;
		Pdv: number;
		Pdv_Exibicao: string;
	}
	interface Comissao_Grupo_Subgrupo extends SiSMoura.Core.Common.Entity {
		Comissao: number;
		Grupo: number;
		Id: number;
		Subgrupo: number;
	}
	interface Compras_Importacao_Etapa extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Documento_Relacionado: string;
		Duracao_Dias: number;
		Tipo_Operacao: string;
	}
	interface Compras_Importacao_Processo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Abertura: Date;
		Data_Cambio: Date;
		Data_Encerramento: Date;
		Empresa: number;
		Forma_Realizacao: string;
		Fornecedor_Cliente: number;
		Moeda: number;
		Numero_Conhecimento_Embarque: string;
		Numero_Di: string;
		Numero_Fatura: string;
		Processo: string;
		Tipo_Operacao: string;
	}
	interface Compras_Importacao_Processo_Etapa extends SiSMoura.Core.Common.Entity {
		Chave: number;
		Codigo: number;
		Data_Inicio: Date;
		Data_Termino: Date;
		Documento: string;
		Etapa: number;
		Situacao: string;
		Tipo_Documento: string;
	}
	interface Compras_Importacao_Processo_Item extends SiSMoura.Core.Common.Entity {
		Chave: number;
		Codigo: number;
		Preco: number;
		Preco_Convertido: number;
		Produto: number;
		Quantidade: number;
	}
	interface Comunicados_Recebimento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Espacocabecalho: number;
		Msgaposparcelas: string;
		Msgcomunicado: string;
		Msgrodape: string;
	}
	interface Conceito_Cliente extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Desconto_Venda: number;
		Descricao: string;
	}
	interface Concorrente extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Concorrente_Produtos: SiSMoura.Core.Entity.Concorrente_Produto[];
		Descricao: string;
		Empresa: number;
		Fone1: string;
	}
	interface Concorrente_Produto extends SiSMoura.Core.Common.Entity {
		Concorrente: number;
		Data: Date;
		Id: number;
		Preco: number;
		Produto: number;
	}
	interface ConcorrenteProdutoRetorno {
		Codigo_Produto: number;
		Contador: number;
		Data: Date;
		DescricaoProduto: string;
		Id: number;
		Item: number;
		PrecoConcorrente: number;
	}
	interface ConferenciaPedidoRetorno {
		Codigo_Pedido: number;
		Descricao_Produto_NFe: string;
		Descricao_Produto_Pedido: string;
		NaoExisteEntrada: boolean;
		NaoExistePedido: boolean;
		Numero_NFe: string;
		PrecoDiferente: boolean;
		Produto_NFe: number;
		Produto_Pedido: number;
		Produto_Preco_NFe: number;
		Produto_Preco_Pedido: number;
		Produto_Quantidade_NFe: number;
		Produto_Quantidade_Pedido: number;
		QuantidadeDiferente: boolean;
	}
	interface Config_Cliente_Envio_Automatico extends SiSMoura.Core.Common.Entity {
		Contrato: number;
		Empresa: number;
		Id: number;
		Prioritario: boolean;
	}
	interface Config_Envio_Automatico extends SiSMoura.Core.Common.Entity {
		Cod_Empresa: number;
		DescricaoServico: string;
		Dia_Emissao: number;
		Emissao_Todos: boolean;
		EmissaoDia: number;
		ID: number;
		Inativo: boolean;
		Serie: number;
		Servico: number;
		ServicosEspecificos: SiSMoura.Core.Entity.Config_Envio_Automatico_Servico[];
		Tipo_Data_Competencia: number;
		Valor_Maximo_Emissao: number;
	}
	interface Config_Envio_Automatico_Servico extends SiSMoura.Core.Common.Entity {
		Codigo_Cidade: number;
		Codigo_Config: number;
		Id: number;
		ISS_Retido: boolean;
		Servico: number;
	}
	interface ConfigEmpresaApp {
		Empresa: number;
		Enviar: boolean;
		ListaPreco: number;
	}
	interface Configuracao_Campo extends SiSMoura.Core.Common.Entity {
		Campo: string;
		Codigo: number;
		Complemento: string;
		Descricao: string;
		Dicas: string;
		Funcao: string;
		Grupo: string;
		Tamanho: number;
		Tipo_Dados: string;
		Tipo_Registro: string;
		Valor: string;
	}
	interface Configuracao_Contabil_Venda_Grupo extends SiSMoura.Core.Common.Entity {
		Centro_Custo: number;
		Codigo: number;
		Codigo_Configuracao_Pagamento: number;
		Conta_Contabil: number;
		Grupo: number;
	}
	interface Configuracao_Contabil_Venda_Pagamento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Conta_Contabil: number;
		Conta_Corrente: string;
		Contabilizacao_Bandeira: boolean;
		Data_Carga: Date;
		Empresa: number;
		Forma_Pagamento: number;
		Grupos: SiSMoura.Core.Entity.Configuracao_Contabil_Venda_Grupo[];
	}
	interface Configuracao_Grupo_Impressao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Grupo_Produto: number;
		Id_Maquina: string;
		Impressora_Nao_Fiscal: number;
		Ipmanual: string;
	}
	interface Configuracao_Importacao_Produto extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Itens: SiSMoura.Core.Entity.Configuracao_Importacao_Produto_Item[];
	}
	interface Configuracao_Importacao_Produto_Campo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Configuracao_Importacao_Produto_Item extends SiSMoura.Core.Common.Entity {
		CampoEntity: SiSMoura.Core.Entity.Configuracao_Importacao_Produto_Campo;
		Cod_Campo: number;
		Cod_Configuracao: number;
		Codigo: number;
		Coluna: number;
		Nome_Campo: string;
	}
	interface Configuracao_Importacao_Tabela extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Itens: SiSMoura.Core.Entity.Configuracao_Importacao_Tabela_Campo[];
		Somente_Atualizacao: boolean;
		Tabela: string;
	}
	interface Configuracao_Importacao_Tabela_Campo extends SiSMoura.Core.Common.Entity {
		Campo: string;
		Codigo: number;
		Codigo_Configuracao: number;
		Coluna: number;
		isColunaChave: boolean;
		Tipo: SiSMoura.Core.Entity.Configuracao_Importacao_Tabela_Campo.enTipo;
		TipoDescricao: string;
	}
	interface Configuracao_Remessa_Pagamento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Conta_Corrente: string;
		Descricao: string;
	}
	interface Configuracao_Sms extends SiSMoura.Core.Common.Entity {
		AggregateId: number;
		Autorizacao: string;
		Codigo: number;
		Enviar_Atendimento_Concluido: boolean;
		Login: string;
		Senha: string;
	}
	interface ConfiguracaoImportacaoProdutoItemRetorno {
		Cod_Campo: number;
		Cod_Configuracao: number;
		Codigo: number;
		Coluna: number;
		Contador: number;
		Nome_Campo: string;
	}
	interface Configuracoes_Linha_Empresa extends SiSMoura.Core.Common.Entity {
		Empresa: number;
		Habilitar_Desconto_Agendamento: boolean;
		Habilitar_Novo_Agendamento: boolean;
		Id: number;
		Linha: number;
		Tipo_Configuracao: SiSMoura.Core.Entity.Configuracoes_Linha_Empresa.Configs;
		Utilizar_Lista_Preco_Automatica: boolean;
		Utilizar_Preco_Regra_Escala_Automatico: boolean;
	}
	interface ConfiguracoesLinhaEmpresaRetorno {
		Codigo_Linha: number;
		Habilitar_Desconto_Agendamento: boolean;
		Habilitar_Novo_Agendamento: boolean;
		Linha: string;
		Utilizar_Lista_Preco_Automatica: boolean;
		Utilizar_Preco_Regra_Escala_Automatico: boolean;
	}
	interface ConfiguracoesPDVRetorno extends SiSMoura.Core.Common.Entity {
		Alterada: boolean;
		Campo: string;
		Codigo: number;
		Descricao: string;
		Grupo: string;
		Valor: string;
	}
	interface Consig extends SiSMoura.Core.Common.Entity {
		Cliente: number;
		Codigo: number;
		Data_Cadastro: Date;
		Data_Vencimento: Date;
		Documento: string;
		ItensConsignacao: SiSMoura.Core.Entity.Consig_Item_Consignado[];
		Observacao: string;
		Tipo: number;
		User_Consig_Aberta: string;
		Usuario_Cadastrou: number;
	}
	interface Consig_Item_Consignado extends SiSMoura.Core.Common.Entity {
		Acrescimo: number;
		Ajudante: number;
		Codigo: number;
		Consignacao: number;
		Deposito: number;
		Desconto: number;
		Documento: string;
		Epc: string;
		Fornecedor: number;
		Lote: string;
		Preco_Unitario: number;
		Produto: number;
		Qtde_Consignada: number;
		Qtde_Devolvida: number;
		Qtde_Restante: number;
		Qtde_Vendida: number;
		Vendedor: number;
	}
	interface Console_Atividade extends SiSMoura.Core.Common.Entity {
		Acontece_Cliente: boolean;
		Analise_Segmento_Acao: number;
		Atividade_Pos_Venda_Lider: number;
		Atualizacao_Realizada: boolean;
		Banco_Dados: string;
		Banco_Nuvem: boolean;
		Caminho_Script: string;
		Categoria: number;
		Categoria_Atividade: number;
		Cliente: number;
		Codigo: number;
		Contato: string;
		Contato_Cliente: string;
		Contato_Cliente_Teste: string;
		Conv_Cod_Atendimento: number;
		Conv_Tela: number;
		Conv_Tela_Modulo: number;
		Conv_Tela_Nome: string;
		Correcao_Documentada: boolean;
		Data_Agendamento_Atualizacao: Date;
		Data_Alteracao_Situacao_Atual: Date;
		Data_Alterou_Responsavel: Date;
		Data_Analise_Enviou_Scrum: Date;
		Data_Analise_Recusou: Date;
		Data_Analise_Segmento: Date;
		Data_Analise_Transferiu_Programacao: Date;
		Data_Baixa_Desenvolvimento: Date;
		Data_Baixa_Teste: Date;
		Data_Baixa_Teste_Qualidade: Date;
		Data_Cadastro: Date;
		Data_Desenvolvimento: Date;
		Data_Devolucao_Teste_Qualidade: Date;
		Data_Termino: Date;
		Data_Urgencia: Date;
		Descricao_Analise: string;
		Descricao_Desenvolvimento: string;
		Descricao_Objetivo: string;
		Descricao_Realizado: string;
		Descricao_Solicitado: string;
		Descricao_Teste: string;
		Dt_Documentacao: Date;
		Email_Contato: string;
		Equipe_Desenvolvimento: number;
		Equipe_Responsavel: number;
		Eventos: SiSMoura.Core.Entity.Console_Evento_Atividades[];
		Evidencia: string;
		Funcionario_Treinado: string;
		Gerada_Por_Pos_Venda: boolean;
		Historicos: SiSMoura.Core.Entity.Console_Atividade_Historico[];
		Hora_Fim_Atualizacao: System.TimeSpan;
		Hora_Inicio_Atualizacao: System.TimeSpan;
		Horas_Analise: number;
		Horas_Desenvolvimento: number;
		Horas_Teste: number;
		Inativo: boolean;
		Inf_Modelo: string;
		Inf_Modelo_N_Fiscal: string;
		Liberacao_Mensal: boolean;
		Modelo_Certificado: number;
		Modelo_Imp_Fiscal: number;
		Modelo_Imp_N_Fiscal: number;
		Modulo: number;
		Modulo_Nfe: number;
		Modulo_Nfse: number;
		Modulo_Proprio: boolean;
		Nivel_Dificuldade: number;
		Objetivo_Resumido: string;
		Ordem_Desenvolvimento: number;
		Origem_Erro: string;
		Originou_Problema: string;
		Os_Assinada: string;
		Os_Usuario_Anexou: string;
		Parceiro: number;
		Posatendimento_Origem: number;
		Possui_Imp_Fiscal: boolean;
		Possui_Varios_Cnpj: boolean;
		Prioridade: boolean;
		Prioridade_Atualizar: number;
		Problema_Ocorre: number;
		Productbacklog: boolean;
		Programador_Conectou_Cliente: boolean;
		Programador_Errou: number;
		Qtde_Devolvido: number;
		Qtde_Devolvido_Teste: number;
		Qtde_Disp_Moveis: number;
		Regedit: string;
		Responsavel_Atividade: number;
		Responsavel_Atual: number;
		Responsavel_Cadastro: number;
		Responsavel_Desenvolvimento: number;
		Responsavel_Realizado: number;
		Responsavel_Recusa_Teste_Qualidade: number;
		Responsavel_Teste: number;
		Responsavel_Teste_Qualidade: number;
		Resumo: string;
		Sistema: number;
		Sistema_Operacional: number;
		Sistema_Roteado: boolean;
		Situacao_Atual: number;
		Situacao_Atual_Enum: SiSMoura.Core.Entity.Console_Atividade.enSituacaoAtividade;
		Solucionado: boolean;
		Status_Documentacao: number;
		Tela: number;
		Tipo_Atividade: number;
		Tipo_Erro: number;
		Tpa_Medio: number;
		Usuario_Alterou_Responsavel: number;
		Usuario_Analise_Recusou: number;
		Usuario_Analise_Transferiu_Programacao: number;
		Usuario_Documentacao: number;
		Usuario_Setor: number;
		Utiliza_Disp_Moveis: boolean;
		Utiliza_Imp_N_Fiscal: boolean;
		Utiliza_Nfce: boolean;
		Utiliza_Nfe: boolean;
		Utiliza_Nfse: boolean;
		Utiliza_Paf: boolean;
		Utiliza_Sat: boolean;
		Versao_Compilada: string;
		Versao_Compilada_Major: number;
		Versao_Compilada_Minor: number;
		Versao_Compilada_Revision: number;
		Versao_Console: string;
		Versao_Exe: string;
		Versao_Sistema: string;
		Versao_Sql: number;
		Versao_Teste_Analise: string;
	}
	interface Console_Atividade_Historico extends SiSMoura.Core.Common.Entity {
		Atividade: number;
		Codigo: number;
		Data_Cadastro: Date;
		Descricao: string;
		Origem_Devolucao: string;
		Responsavel_Anterior: number;
		Responsavel_Atual: number;
		Situacao: number;
		Tipo_Atividade: number;
	}
	interface Console_Banco_Cliente extends SiSMoura.Core.Common.Entity {
		Banco: string;
		Cliente: number;
		Codigo: number;
		Descricao: string;
		ExecutarAuditoria: boolean;
		Inativo: boolean;
		Permitir_Solicitar_Backup: boolean;
		Senha: string;
		Servidor_Banco: number;
		Servidor_BancoEntity: SiSMoura.Core.Entity.Console_Banco_Cliente_Servidor;
		Tipo_Banco: number;
		TipoBancoEntity: SiSMoura.Core.Entity.Console_Banco_Cliente_Tipo;
		Usuario: string;
	}
	interface Console_Banco_Cliente_Backup extends SiSMoura.Core.Common.Entity {
		Banco_Cliente: number;
		Codigo: number;
		Data: Date;
		Url_Backup: string;
		Usuario: number;
	}
	interface Console_Banco_Cliente_Servidor extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Compactar_Backup: boolean;
		Descricao: string;
		Path_Backup: string;
		Path_LDF: string;
		Path_MDF: string;
		Path_Restore: string;
		Permitir_Solicitar_Backup: boolean;
		Senha_SA: string;
		Url_Site: string;
		Usuario_SA: string;
	}
	interface Console_Banco_Cliente_Tipo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Console_Chat_Configuracao extends SiSMoura.Core.Common.Entity {
		Nome: string;
		Valor: string;
	}
	interface Console_Cliente_Azure extends SiSMoura.Core.Common.Entity {
		Clientes: SiSMoura.Core.Entity.Console_Cliente_Azure_Banco[];
		Codigo: number;
		Servidor: string;
	}
	interface Console_Cliente_Azure_Banco extends SiSMoura.Core.Common.Entity {
		Azure: number;
		Banco: string;
		Cliente: number;
		Codigo: number;
		Senha: string;
		senhaDecifrada: string;
		Usuario: string;
		usuarioDecifrado: string;
	}
	interface Console_Cliente_Site extends SiSMoura.Core.Common.Entity {
		Cliente: number;
		Data_Cadastro: Date;
		Descritivo: string;
		Destaque_Inicial: boolean;
		Exibir_Site: boolean;
		Nome_Site: string;
		Prioridade: number;
		Url_Facebook: string;
		Url_Instagram: string;
		Url_Logo: string;
		Url_Site: string;
		Url_Twitter: string;
		Usuario_Cadastro: number;
	}
	interface Console_Comunicado_Cliente extends SiSMoura.Core.Common.Entity {
		Cidade: number;
		Codigo: number;
		Console_Comunicado_Cliente_Enviado: SiSMoura.Core.Entity.Console_Comunicado_Cliente_Enviado[];
		Data_Cadastro: Date;
		Descricao: string;
		Estado: string;
		Exibido: boolean;
		Lido: boolean;
		Segmento: number;
		Titulo: string;
		Usuario_Cadastro: number;
	}
	interface Console_Comunicado_Cliente_Enviado extends SiSMoura.Core.Common.Entity {
		Cliente: number;
		Codigo: number;
		Comunicado: number;
		Data_Enviado: Date;
		Descricao: string;
	}
	interface Console_Contato_Parceiro_Site extends SiSMoura.Core.Common.Entity {
		Cargo: string;
		Celular: string;
		Cep: string;
		Cidade: string;
		Codigo: number;
		Como_Soube_Parceria: string;
		Complemento: string;
		Data_Visualizou: Date;
		Email: string;
		Endereco: string;
		Estado: string;
		Nome_Completo: string;
		Nome_Fantasia: string;
		Numero: string;
		Razao_Social: string;
		Skype: string;
		Telefone: string;
		Tipo_Parceria: string;
		Usuario_Visualizou: number;
		Visualizado: boolean;
		Website: string;
	}
	interface Console_Contato_Site extends SiSMoura.Core.Common.Entity {
		Celular: string;
		Cidade: string;
		Cnpj: string;
		Codigo: number;
		Contato: string;
		Data_Visualizou: Date;
		Email: string;
		Empresa: string;
		Informacoes: string;
		Produto: string;
		Segmento: string;
		Telefone: string;
		Usuario_Visualizou: number;
		Visualizado: boolean;
	}
	interface Console_DBA_Orcamento_Nuvem extends SiSMoura.Core.Common.Entity {
		CNPJ: string;
		Cod_Cliente: number;
		Codigo: number;
		Contato: string;
		Data_Cadastro: Date;
		DDD: string;
		Email: string;
		Observacao: string;
		Orcamento_Nuvem_Itens: SiSMoura.Core.Entity.Console_DBA_Orcamento_Nuvem_Item[];
		Razao_Social: string;
		Situacao_Orcamento_Nuvem: SiSMoura.Core.Entity.Console_DBA_Situacao_Orcamento_Nuvem;
		Telefone: string;
		Tipo_Cliente: boolean;
		Usuario_Cadastrou: number;
	}
	interface Console_DBA_Orcamento_Nuvem_Item extends SiSMoura.Core.Common.Entity {
		Adicional: number;
		Cod_Estabelecimento: number;
		Cod_Orcamento: number;
		Estabelecimento: string;
		ID: number;
		Mensalidade: number;
		Qtde_Maquinas: number;
	}
	interface Console_DBA_Orcamento_Nuvem_Situacao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Padrao: boolean;
		Padrao_Texto: string;
	}
	interface Console_DBA_Situacao_Orcamento_Nuvem extends SiSMoura.Core.Common.Entity {
		Cod_Orcamento: number;
		Data_Alteracao: Date;
		ID: number;
		Situacao: number;
		Usuario_Alterou: number;
	}
	interface Console_Download_Site extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Topico: number;
		Url: string;
	}
	interface Console_Download_Site_Topico extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Console_Evento_Atividades extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Atividade: number;
		Codigo_Evento: number;
		Data_Cadastro: Date;
		Data_Termino: Date;
		Tempo_Duracao: number;
	}
	interface Console_Exactsales_Mercado extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Console_Exactsales_Vendedor_Segmento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Segmento_Exactsales: number;
		Usuario_Console: number;
	}
	interface Console_ForcaVenda extends SiSMoura.Core.Common.Entity {
		Campos: SiSMoura.Core.Entity.Console_ForcaVenda_Campo[];
		Cliente: number;
		Data_Alterou: Date;
		Data_Habilitado: Date;
		Data_Inseriu: Date;
		Dispositivos: SiSMoura.Core.Entity.Console_ForcaVenda_Dispositivo[];
		Habilitado: boolean;
		ID: number;
		Qtde_Dispositivos: number;
		URL_API: string;
		URL_API_Homolog: string;
		Usuario_Alterou: number;
		Usuario_Inseriu: number;
	}
	interface Console_ForcaVenda_Campo extends SiSMoura.Core.Common.Entity {
		Campo: string;
		Codigo: number;
		Codigo_ForcaVenda: number;
		Codigo_Tela: SiSMoura.Core.Entity.Console_ForcaVenda_Campo.Tela_ForcaVenda;
	}
	interface Console_ForcaVenda_Dispositivo extends SiSMoura.Core.Common.Entity {
		Casas_Decimais_Qtde: number;
		Casas_Decimais_Valor: number;
		Cliente: number;
		Codigo: number;
		Data_Inclusao: Date;
		Deposito: number;
		Desconto_Utilizado: number;
		Descricao: string;
		Dispositivo: string;
		Empresa_Dispositivo: number;
		Exceder_Desconto: boolean;
		GravarSemForma: boolean;
		ID_Dispositivo: string;
		IsHabilitado: boolean;
		IsHomologacao: boolean;
		Status: number;
		Tipo: number;
		Vender_Clientes_Devedores: boolean;
		Vender_Sem_Estoque: boolean;
	}
	interface Console_Log_Selects extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Comando_Sql: string;
		Descricao: string;
	}
	interface Console_Modelo_Banco_Nuvem extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Modelo_Orcamento: string;
	}
	interface Console_Motivo_Bloqueio_Cliente extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Tipo: string;
	}
	interface Console_Pdvmovel extends SiSMoura.Core.Common.Entity {
		Cliente: number;
		Data_Alterou: Date;
		Data_Habilitado: Date;
		Data_Inseriu: Date;
		Dispositivos: SiSMoura.Core.Entity.Console_Pdvmovel_Dispositivo[];
		Habilitado: boolean;
		ID: number;
		Qtde_Dispositivos: number;
		Url_Api_Pdv: string;
		Url_Api_Pdv_Homologacao: string;
		Usuario_Alterou: number;
		Usuario_Inseriu: number;
	}
	interface Console_Pdvmovel_Dispositivo extends SiSMoura.Core.Common.Entity {
		Casa_Decimal_Qtde: number;
		Casa_Decimal_Valor: number;
		Cliente: number;
		Codigo: number;
		Codigo_PDV: number;
		Data_Inclusao: Date;
		Deposito: number;
		Descricao: string;
		Dispositivo: string;
		Dispositivo_AdicionaisTef: string;
		Dispositivo_EmpresaTef: string;
		Dispositivo_IpTef: string;
		Dispositivo_TerminalTef: string;
		Id: string;
		IsHabilitado: boolean;
		isPdvComanda: boolean;
		NFCe_EnviarContigencia: boolean;
		NFCe_IdToken: string;
		NFCe_IsHomologacao: boolean;
		NFCe_Serie: number;
		NFCe_Token: string;
		Status: number;
		Tipo: number;
		Tipo_Emissao_Fiscal: number;
	}
	interface Console_Pdvmovel_Tipo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Inclusao: Date;
		Descricao: string;
	}
	interface Console_Petapp_Animal extends SiSMoura.Core.Common.Entity {
		Castrado: boolean;
		Codigo: number;
		Codigo_Raca: number;
		Codigo_Usuario: number;
		Data_Cadastro: Date;
		Data_Nascimento: Date;
		Inativo: boolean;
		Microchip: string;
		Nome: string;
		Observacao: string;
		Sexo: string;
	}
	interface Console_Petapp_Empresa extends SiSMoura.Core.Common.Entity {
		Ativo_Homologacao: boolean;
		Ativo_Producao: boolean;
		Bairro: string;
		Celular: string;
		Cep: string;
		Cidade: number;
		Cnpj: string;
		Codigo_Cliente: number;
		Complemento_Endereco: string;
		Data_Cadastro: Date;
		Email: string;
		Endereco: string;
		Nome_Exibir: string;
		Numero_Endereco: string;
		Telefone: string;
		Url_Api: string;
		Url_Api_Homologacao: string;
		Url_Logo: string;
		Usuario_Cadastro: number;
	}
	interface Console_Petapp_Especie extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Inativo: boolean;
	}
	interface Console_Petapp_Raca extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Especie: number;
		Descricao: string;
		Inativo: boolean;
	}
	interface Console_Petapp_Usuario extends SiSMoura.Core.Common.Entity {
		Animais: SiSMoura.Core.Entity.Console_Petapp_Animal[];
		Bairro: string;
		Celular: string;
		Cep: string;
		Cidade: number;
		Codigo: number;
		Complemento_Endereco: string;
		Cpf: string;
		Data_Cadastro: Date;
		Data_Nascimento: Date;
		Email: string;
		Endereco: string;
		Nome: string;
		Numero_Endereco: string;
		Senha: string;
		Telefone: string;
	}
	interface Console_Priorizacao_Atividade extends SiSMoura.Core.Common.Entity {
		Aprovadas: SiSMoura.Core.Entity.Console_Priorizacao_Atividade_Aprovada[];
		Codigo: number;
		Data_Cadastro: Date;
		Data_Final: Date;
		Data_Inicial: Date;
		Usuario_Cadastro: number;
	}
	interface Console_Priorizacao_Atividade_Aprovada extends SiSMoura.Core.Common.Entity {
		Atividade: number;
		Codigo: number;
		Data_Cadastro: Date;
		Priorizacao: number;
		Semana_Anterior: boolean;
		Sequencia: number;
		Usuario: number;
	}
	interface Console_Priorizacao_Atividade_Reprovada extends SiSMoura.Core.Common.Entity {
		Atividade: number;
		Codigo: number;
		Data_Cadastro: Date;
		Motivo_Reprova: string;
		Priorizacao: number;
		Usuario: number;
	}
	interface Console_Reuniao extends SiSMoura.Core.Common.Entity {
		Atividade: number;
		Codigo: number;
		Data_Cadastro: Date;
		Data_Inicio_Atividade: Date;
		Data_Reuniao: Date;
		Equipe: number;
		Observacao: string;
		Priorizacao_Origem: number;
		Usuario_Cadastro: number;
	}
	interface Console_Rfid_Orcamento extends SiSMoura.Core.Common.Entity {
		Caixa_Leitura: boolean;
		Caixa_Leitura_Qtde: number;
		Celular: string;
		Cidade: string;
		Cliente: number;
		Cnpj: string;
		Codigo: number;
		Coletor_Dotr300: boolean;
		Contato: string;
		Controlar_Estoque: boolean;
		Data_Cadastro: Date;
		Detalhes: string;
		Email: string;
		Etiqueta: boolean;
		Etiqueta_Brinco: boolean;
		Etiqueta_Brinco_Qtdeinicial: number;
		Etiqueta_Brinco_Qtdemes: number;
		Etiqueta_Costura: boolean;
		Etiqueta_Costura_Qtdeincial: number;
		Etiqueta_Costura_Qtdemes: number;
		Etiqueta_Joia: boolean;
		Etiqueta_Joia_Qtdeinicial: number;
		Etiqueta_Joia_Qtdemes: number;
		Etiqueta_Lavanderia_Acutag_Uhf_Linen_Laundry_Chip_Costura_Bolsa: boolean;
		Etiqueta_Lavanderia_Acutag_Uhf_Linen_Laundry_Chip_Costura_Bolsa_Qtdeinicial: number;
		Etiqueta_Lavanderia_Acutag_Uhf_Linen_Laundry_Chip_Costura_Bolsa_Qtdemes: number;
		Etiqueta_Lavanderia_Acutag_Uhf_Linen_Laundry_Chip_Costura_Source: boolean;
		Etiqueta_Lavanderia_Acutag_Uhf_Linen_Laundry_Chip_Costura_Source_Qtdeinicial: number;
		Etiqueta_Lavanderia_Acutag_Uhf_Linen_Laundry_Chip_Costura_Source_Qtdemes: number;
		Etiqueta_Lavanderia_Acutag_Uhf_Linen_Laundry_Chip_Selo_Calor: boolean;
		Etiqueta_Lavanderia_Acutag_Uhf_Linen_Laundry_Chip_Selo_Calor_Qtdeinicial: number;
		Etiqueta_Lavanderia_Acutag_Uhf_Linen_Laundry_Chip_Selo_Calor_Qtdemes: number;
		Etiqueta_Lavanderia_Acutag_Uhf_Work_Laundry_Chip_Encapsulado_Silicone: boolean;
		Etiqueta_Lavanderia_Acutag_Uhf_Work_Laundry_Chip_Encapsulado_Silicone_Qtdeinicial: number;
		Etiqueta_Lavanderia_Acutag_Uhf_Work_Laundry_Chip_Encapsulado_Silicone_Qtdemes: number;
		Etiqueta_Lavanderia_Tag_Uhf_Flexible_Encapsulado_Silicone: boolean;
		Etiqueta_Lavanderia_Tag_Uhf_Flexible_Encapsulado_Silicone_Qtdeinicial: number;
		Etiqueta_Lavanderia_Tag_Uhf_Flexible_Encapsulado_Silicone_Qtdemes: number;
		Etiqueta_Metal_Acutag_Uhf_Ironside: boolean;
		Etiqueta_Metal_Acutag_Uhf_Ironside_Qtdeinicial: number;
		Etiqueta_Metal_Acutag_Uhf_Ironside_Qtdemes: number;
		Etiqueta_Metal_Acutag_Uhf_Titan_General: boolean;
		Etiqueta_Metal_Acutag_Uhf_Titan_General_Qtdeinicial: number;
		Etiqueta_Metal_Acutag_Uhf_Titan_General_Qtdemes: number;
		Etiqueta_Metal_Acutag_Uhf_Titan_Inch: boolean;
		Etiqueta_Metal_Acutag_Uhf_Titan_Inch_Inicial: number;
		Etiqueta_Metal_Acutag_Uhf_Titan_Inch_Qtdemes: number;
		Etiqueta_Metal_Tag_Uhf_Fit_200: boolean;
		Etiqueta_Metal_Tag_Uhf_Fit_200_Qtdeinicial: number;
		Etiqueta_Metal_Tag_Uhf_Fit_200_Qtdemes: number;
		Etiqueta_Metal_Tag_Uhf_Fit_400: boolean;
		Etiqueta_Metal_Tag_Uhf_Fit_400_Qtdeinicial: number;
		Etiqueta_Metal_Tag_Uhf_Fit_400_Qtdemes: number;
		Etiqueta_Metal_Tag_Uhf_Iq_150: boolean;
		Etiqueta_Metal_Tag_Uhf_Iq_150_Qtdeinicial: number;
		Etiqueta_Metal_Tag_Uhf_Iq_150_Qtdemes: number;
		Etiqueta_Metal_Tag_Uhf_Iq_600_R6: boolean;
		Etiqueta_Metal_Tag_Uhf_Iq_600_R6_Qtdeinicial: number;
		Etiqueta_Metal_Tag_Uhf_Iq_600_R6_Qtdemes: number;
		Etiqueta_Roupa: boolean;
		Etiqueta_Roupa_Qtdeinicial: number;
		Etiqueta_Roupa_Qtdemes: number;
		Imprimir_Etiquetas: boolean;
		Nome_Empresa: string;
		Nome_Objeto: string;
		Observacao: string;
		Observacao_Cliente: string;
		Pdv: boolean;
		Pdv_Qtde: number;
		Portalpassagem: boolean;
		Portalpassagem_Qtde: number;
		Portalpassgem_Qtdeantenas: number;
		Prevencao_Perda: boolean;
		Prevencao_Perda_Qtde: number;
		Produto: SiSMoura.Core.Entity.Console_Rfid_Orcamentoproduto[];
		Provador_Inteligente: boolean;
		Provador_Inteligenteqtde: number;
		Qtde_Coletor_Dados_Dotr300: number;
		Qtde_Impressoras: number;
		Qtde_Leitores: number;
		Servico_Impressaoetiqueta: boolean;
		Servico_Impressaoetiqueta_Qtde: number;
		Servico_Impressaoetiqueta_Qtdeinicial: number;
		Situacao: number;
		Telefone: string;
		Tipo: boolean;
		Usuario: number;
	}
	interface Console_Rfid_Orcamentoproduto extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Obs_Informada: string;
		Orcamento: number;
		Produto: number;
		Qtde: number;
	}
	interface Console_RFID_OrcamentoRetorno {
		codProduto: number;
		ObsInformada: string;
		ObsProduto: string;
		Produto: string;
		Qtde: number;
	}
	interface Console_Sprint extends SiSMoura.Core.Common.Entity {
		Atividades: SiSMoura.Core.Entity.Console_Sprint_Atividade[];
		Codigo: number;
		Data_Cadastro: Date;
		Data_Fim_Analise: Date;
		Data_Fim_Desenvolvimento: Date;
		Data_Fim_Sprint: Date;
		Data_Inicio_Analise: Date;
		Data_Inicio_Desenvolvimento: Date;
		Data_Inicio_Sprint: Date;
		Descricao: string;
		Horas_Disponiveis: number;
		Horas_Utilizadas: number;
		Liberacao_Mensal: boolean;
		Pontos_Disponiveis: number;
		Pontos_Utilizados: number;
		Programadores: SiSMoura.Core.Entity.Console_Sprint_Programador[];
		Projeto_Freelancer: boolean;
		Status: number;
		Usuario_Cadastro: number;
	}
	interface Console_Sprint_Atividade extends SiSMoura.Core.Common.Entity {
		Atividade: number;
		Codigo: number;
		Data_Cadastro: Date;
		Pode_Atrasar: boolean;
		Programador: number;
		Sprint: number;
		Transbordo_Sprint_Anterior: boolean;
		Usuario_Cadastro: number;
	}
	interface Console_Sprint_Programador extends SiSMoura.Core.Common.Entity {
		Categoria: number;
		Codigo: number;
		Data_Cadastro: Date;
		Dias_Baixa: number;
		Pontos: number;
		Porc_Tempo_Sprint: number;
		Programador: number;
		Sprint: number;
		Usuario_Cadastro: number;
	}
	interface Console_Sprint_Projeto extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Correcao: boolean;
		Data_Cadastro: Date;
		Data_Fim: Date;
		Data_Inicio: Date;
		Descricao: string;
		Observacao: string;
		Programador: number;
		Usuario_Cadastro: number;
	}
	interface Console_Tela_Conversao_Web extends SiSMoura.Core.Common.Entity {
		Atividade_Conversao: number;
		Codigo: number;
		Converter: boolean;
		Horas_Conversao: number;
		Isangular: boolean;
		Isweb: boolean;
		Modulo: string;
		Observacao: string;
		Prioridade_Conversao: number;
		Situacao_Atividade_Conversao: string;
		Tela: string;
		Tipo: string;
		Titulo: string;
	}
	interface Console_Vinculo_Adicional extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Cadastro_Produto: number;
		Descricao_Adicional: string;
		Valor_Minimo: number;
	}
	interface Console_Visita_Cliente extends SiSMoura.Core.Common.Entity {
		Bairro: string;
		Bairro_Cod: string;
		Cep: string;
		Cgc: string;
		Cidade: number;
		Cidade_Nome: string;
		Cidade_Uf: string;
		Codigo: number;
		Conhece_Moura: boolean;
		Consultor: number;
		Contato: string;
		Data_Cadastro: Date;
		Ddd: number;
		Email: string;
		Endereco: string;
		Fax: string;
		Fone: string;
		Franquia: boolean;
		Id_ExactSales: number;
		Inativo: boolean;
		Inscricao_Estadual: string;
		Lista_Prospeccao: boolean;
		Lista_Telefones: SiSMoura.Core.Entity.Console_Visita_Cliente_Telefone[];
		Mala_Direta: Date;
		Motivo_Insatisfacao: number;
		Nome_Fantasia: string;
		Obs: string;
		Onde_Conheceu: number;
		Porte: string;
		Possui_Sistema: boolean;
		Qtde_Lojas: number;
		Qtde_Micros: number;
		Qual_Sistema: string;
		Razao_Social: string;
		Segmento: number;
		Sistema_Utilizado: number;
		Tipo: string;
		Tipo_Acao: number;
		Ultima_Visita: Date;
		Urgencia_Atendimento: string;
		Vend_Parc_Prospectou: number;
		Vendedor: number;
		Verificado: string;
	}
	interface Console_Visita_Cliente_Telefone extends SiSMoura.Core.Common.Entity {
		Cliente: number;
		Codigo: number;
		Telefone: string;
	}
	interface Console_Visita_Historico extends SiSMoura.Core.Common.Entity {
		Cliente: number;
		Codigo: number;
		Contato: string;
		Data: Date;
		Email_Enviado: boolean;
		Email_Enviado_15: boolean;
		EmailCliente: string;
		Historico: string;
		Hora: Date;
		Hora_Reagendamento: string;
		Hora_ReagendamentoRetorno: Date;
		Id_Box_ExactSales: number;
		Motivo_Nao_Fechamento: number;
		Reagendamento: Date;
		Responsavel: number;
		Situacao: number;
		Tipo_Atendimento: number;
		Usu_Cadastro: number;
		Usuario_Alterou: number;
		Visita: number;
	}
	interface Console_Wiki_Categoria extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Cadastro: Date;
		Descricao: string;
		Usuario_Cadastro: number;
	}
	interface Console_Wiki_Documento extends SiSMoura.Core.Common.Entity {
		Categorias: SiSMoura.Core.Entity.Console_Wiki_Documento_Categoria[];
		Codigo: number;
		Conteudo: string;
		Data_Alteracao: Date;
		Data_Cadastro: Date;
		Descricao: string;
		Usuario_Alteracao: number;
		Usuario_Cadastro: number;
	}
	interface Console_Wiki_Documento_Categoria extends SiSMoura.Core.Common.Entity {
		Categoria: number;
		Codigo: number;
		Documento: number;
	}
	interface ConsoleAlertaChat {
		Chat: number;
		Cliente: string;
		Exibiu: boolean;
		IsTransferencia: boolean;
		UltimaVerificacao: number;
		VerificouCliente2Minutos: boolean;
	}
	interface ConsoleAtividadeInformacoesRetorno extends SiSMoura.Core.Common.Entity {
		Categoria_Atividade: number;
		Codigo: number;
		Codigo_Cliente: number;
		Data_Cadastro: Date;
		Historico: string;
		Horas_Desenvolvimento: number;
		IsProjeto: boolean;
		Modulo: string;
		Nome_Fantasia_Cliente: string;
		Pontos: number;
		Razao_Social_Cliente: string;
		Situacao_Atividade_Codigo: number;
		Situacao_Atividade_Descricao: string;
		Tipo_Atividade_Codigo: number;
		Tipo_Atividade_Descricao: string;
		Usuario_Atual_Abreviacao: string;
		Usuario_Atual_Codigo: number;
		Usuario_Atual_Nome: string;
		Usuario_Cadastro_Abreviacao: string;
		Usuario_Cadastro_Codigo: number;
		Usuario_Cadastro_Nome: string;
	}
	interface ConsoleClienteAzureBancoRetorno extends SiSMoura.Core.Common.Entity {
		Azure: number;
		Banco: string;
		Cliente: number;
		Codigo: number;
		Contador: number;
		Nome_Cliente: string;
		Senha: string;
		senhaDecifrada: string;
		Usuario: string;
	}
	interface ConsolePriorizarGradeRetorno extends SiSMoura.Core.Common.Entity {
		Atividade: number;
		Codigo_Equipe: number;
		Data_Inicio: Date;
		Equipe: string;
		Modulo: string;
		Nome_Cliente: string;
		Observacao: string;
		Responsavel_Atual: string;
		Situacao_Atual: string;
	}
	interface ConsolePriorizarProgramacaoRetorno {
		Grade: SiSMoura.Core.Entity.ConsolePriorizarGradeRetorno[];
		Modulo: string;
		Nome_Cliente: string;
		Reuniao: SiSMoura.Core.Entity.Console_Reuniao;
	}
	interface ConsoleSLAEmAndamento extends SiSMoura.Core.Common.Entity {
		Categoria: number;
		Codigo_Atividade: number;
		Codigo_Categoria: number;
		Codigo_Evento: number;
		Data_Cadastro: Date;
		Data_Termino: Date;
		Descricao_Categoria: string;
		Descricao_Prioridade: string;
		Nome: string;
		Tempo_Duracao: number;
		Tempo_Previsto: number;
	}
	interface Conta_Contabil extends SiSMoura.Core.Common.Entity {
		Buget: boolean;
		Cod_Contabil: string;
		Codigo: number;
		Codigo_Sped: string;
		Custo: string;
		Descricao: string;
		Destacar: boolean;
		Empresa: number;
		Empresas: SiSMoura.Core.Entity.Conta_Contabil_Empresa[];
		Inativa: boolean;
		Lancamento: boolean;
		Nivel: number;
		Ordem: number;
		Origem: string;
		Origem_Dados: number;
		Padrao_Baixa_Lote: boolean;
		Pagar: boolean;
		Plano_Contabil_Codigo: number;
		Receber: boolean;
		Sintetico: string;
		Sintetico_Descricao: string;
		Tipo_Conta: string;
	}
	interface Conta_Contabil_Empresa extends SiSMoura.Core.Common.Entity {
		Cod_Conta_Contabil: number;
		Empresa: number;
		Id: number;
	}
	interface Conta_Contabil_Estrutura extends SiSMoura.Core.Common.Entity {
		Conta: number;
		Id: number;
		Operacao: string;
		Subconta: number;
	}
	interface Conta_Corrente extends SiSMoura.Core.Common.Entity {
		Banco: string;
		BancoContaLista: string;
		Cidade: string;
		Cod_Empresa: number;
		Conta_Arquivo: string;
		Conta_Contabil_Cliente: number;
		Conta_Contabil_Desconto: number;
		Conta_Contabil_Fornecedor: number;
		Conta_Contabil_Juros: number;
		Conta_Contabil_Multa: number;
		Conta_Contabil_Parametro: number;
		Conta_Corrente: string;
		Contato: string;
		Convenio: string;
		Cpf: string;
		Data: Date;
		Data_Carga: Date;
		Desconsiderar_Lancamentos: boolean;
		Digito_Ag_Conta: string;
		Digito_Agencia: string;
		Digito_Conta: string;
		Ecommerce: boolean;
		Endereco: string;
		Historico_Baixa_Pagar: number;
		Historico_Baixa_Receber: number;
		Historico_Transferencia: number;
		ID: number;
		Inativo: boolean;
		Lancamento_Multiplo: boolean;
		Limite_Cheque_Especial: number;
		Nome_Banco: string;
		Nome_Titular: string;
		Nosso_Numero: number;
		Nosso_Numero_Boleto: boolean;
		Numero_Agencia: string;
		Padrao: boolean;
		Saldo: number;
		Saldo_Data_Atualizar: Date;
		Telefone: string;
		Tipo: string;
		Ultima_Remessa: string;
	}
	interface Contabil_BalVer_Resumo extends SiSMoura.Core.Common.Entity {
		DifAtvPsv: string;
		DifCredDeb: string;
		TotalAtivo: string;
		TotalCreditos: string;
		TotalCusto: string;
		TotalDebitos: string;
		TotalDespesa: string;
		TotalPassivo: string;
		TotalReceita: string;
		TotalXAcumuladoLabel: string;
		TotalXAcumuladoText: string;
		TotalXPeriodoLabel: string;
		TotalXPeriodoText: string;
	}
	interface Contabil_Configuracao extends SiSMoura.Core.Common.Entity {
		Conta_Contabil_Cheque_Depositar: number;
		Empresa: number;
		Id: number;
	}
	interface Contabil_Configuracao_Grupo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Conta_Custo: number;
		Conta_Estoque: number;
		Conta_Grupo: number;
		Desconsiderar_Custo: boolean;
		Empresa: number;
		Grupo: number;
		Historico_Custo: number;
		Historico_Entrada: number;
		Historico_Saida: number;
	}
	interface Contabil_Configuracao_Imposto_Venda extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Conta_Credito: number;
		Conta_Debito: number;
		Empresa: number;
		Forma_Escrituracao: string;
		Historico: number;
		Imposto: string;
	}
	interface Contabil_Configuracao_Lancamento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Desconsiderar_Lancamentos: boolean;
		Descricao: string;
		Empresa: number;
		Parametros: SiSMoura.Core.Entity.Contabil_Configuracao_Lancamento_Parametro[];
		Reduzido: number;
		Tipo_Configuracao: string;
		Tipo_Lancamento_Contas_Pagar: number;
	}
	interface Contabil_Configuracao_Lancamento_Parametro extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Configuracao_Lancamento: number;
		Conta_Credito: number;
		Conta_Debito: number;
		Historico_Padrao: number;
		Lancamento_Multiplo: boolean;
		Tipo_Parametro: string;
		Tipo_Parametro_Descricao: string;
	}
	interface Contabil_Configuracao_Pagamento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Conta_Contabil: number;
		Empresa: number;
		Forma_Pagamento: number;
		Forma_Pagamento_Descricao: string;
		Historico_Padrao: number;
		Listacartoes: SiSMoura.Core.Entity.ContabilFechamentoCaixaCartao[];
		Parametros: SiSMoura.Core.Entity.Contabil_Parametros;
	}
	interface Contabil_Consolidacao_Excecao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Conta: number;
		Empresa: number;
	}
	interface Contabil_Consolidacao_ExcecaoRetorno extends SiSMoura.Core.Common.Entity {
		Classificacao_Contabil: string;
		Codigo: number;
		Conta: number;
		Descricao_Conta: string;
		Empresa: number;
		Reduzido: number;
	}
	interface Contabil_ECF_Livro_Caixa extends SiSMoura.Core.Common.Entity {
		Credito: number;
		Data: Date;
		Debito: number;
		Documento: string;
		Historico: string;
		Saldo: number;
	}
	interface Contabil_Historico_Padrao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Descricoes: SiSMoura.Core.Entity.Contabil_Historico_Padrao_Descricao[];
	}
	interface Contabil_Historico_Padrao_Descricao extends SiSMoura.Core.Common.Entity {
		Campo: string;
		Historico_Padrao: number;
		Id: number;
	}
	interface Contabil_Lancamento extends SiSMoura.Core.Common.Entity {
		Caixa: number;
		Cartao: number;
		Cartao_Recebido: number;
		Chave_Entrada_Produto: number;
		Chave_Nota_Fiscal: number;
		Chave_Outros_Lancamentos: number;
		Cheque: number;
		Codigo: number;
		Codigo_Baixa_Pagar: number;
		Codigo_Baixa_Receber: number;
		Conta_Pagar: number;
		Conta_Receber: number;
		Contacredito: number;
		Contadebito: number;
		Data: Date;
		Data_Cadastro: Date;
		Descricao_Historico: string;
		Documento: string;
		Documento_Mercantil: string;
		Empresa: number;
		Encerramento: string;
		Grupo_Produto: number;
		Historico: number;
		isLancamento_Caixa: boolean;
		isLancamento_Custo: boolean;
		isLancamento_Manual_Caixa: boolean;
		isQuebra_Caixa: boolean;
		Lancamento_Financeiro: number;
		Lancamentos_Partida: SiSMoura.Core.Entity.Contabil_Lancamento_Partida[];
		Movimentacao_Item: number;
		Operador: number;
		Origem: number;
		Parametro: number;
		PDV: number;
		Pessoa: number;
		Preencher_DM_Com_Codigo: boolean;
		Produto: number;
		SaldoInicial: boolean;
		Tipo: number;
		Valor: number;
	}
	interface Contabil_Lancamento_Partida extends SiSMoura.Core.Common.Entity {
		Cod_Lancamento: number;
		Codigo: number;
		Conta_Credito: number;
		Conta_Debito: number;
		Descricao_Historico: string;
		Historico: number;
		Valor_Credito: number;
		Valor_Debito: number;
	}
	interface Contabil_Livro_CaixaRetorno extends SiSMoura.Core.Common.Entity {
		Conta: string;
		Credito: number;
		Data: Date;
		Debito: number;
		Documento: string;
		Historico: string;
		ID: number;
		LCTO: number;
		Saldo: number;
	}
	interface Contabil_ManutencaoLote_PesquisaRetorno {
		CodPartida: number;
		ContaCredito: number;
		ContaDebito: number;
		Data: Date;
		Descricao_Credito: string;
		Descricao_Debito: string;
		Descricao_Historico: string;
		Documento: string;
		Empresa: string;
		Historico: number;
		Lancamento: number;
		Pessoa: string;
		Seleciona: boolean;
		Valor: number;
	}
	interface Contabil_Parametros extends SiSMoura.Core.Common.Entity {
		Apuracao_ICMS_Historico: number;
		Codigo: number;
		Conta_Destino_Zeramento: number;
		Conta_Fornecedor_Individual: number;
		Conta_Lucro: number;
		Conta_Prejuizo: number;
		Conta_Quebra_Caixa: number;
		Conta_Sobra_Caixa: number;
		Conta_Taxa_Cartao: number;
		Csll_Conta_Credito: number;
		Csll_Conta_Debito: number;
		Csll_Historico: number;
		Diario_Livro: number;
		Diario_Pagina: number;
		Diario_Qtde_Paginas: number;
		Empresa: number;
		Empresa_Ativa: boolean;
		Historico_Quebra_Caixa: number;
		Historico_Sobra_Caixa: number;
		Historico_Taxa_Cartao: number;
		Integracao_Nota_Entrada: number;
		Integracao_Venda_Cartao: SiSMoura.Core.Entity.Parametros_Enum.Forma_Integracao_Cartao;
		Irpj_Conta_Credito: number;
		Irpj_Conta_Debito: number;
		Irpj_Historico: number;
		Taxa_Lancamento_Multiplo: boolean;
		Tela: string;
		Transfere: boolean;
		Transfere_Historico: number;
		Zeramento_Historico: number;
	}
	interface Contabil_Parametros_Ecf extends SiSMoura.Core.Common.Entity {
		Abril: string;
		Administradora_Fundos_Clubes_Investimento: string;
		Agosto: string;
		Aliquota_Csll: number;
		Apuracao_Csll_Imune_Isenta: string;
		Apuracao_Irpj_Csll: string;
		Apuracao_Irpj_Imune_Isenta: string;
		Area_Livre_Comercio: string;
		Atividade_Rural: string;
		Ativos_No_Exterior: string;
		Cnpj_Scp: string;
		Codigo: number;
		Codigo_Natureza_Juridica: string;
		Comercio_Eletronico_Tecnologia: string;
		Criterio_Reconhecimento_Receitas: number;
		Data_Situacao_Especial: Date;
		Dez: string;
		Doacoes_Campanhas_Eleitorais: string;
		Empresa: number;
		Escrituracao: string;
		Existencia_Lucro_Exploracao: string;
		Fev: string;
		Forma_Apuracao_Estimativa_Mensal: string;
		Forma_Tributacao: number;
		Forma_Tributacao_Periodo: string;
		Habilitada_Repes_Recap: string;
		Inclusao_Digital: string;
		Indicador_Inicio_Periodo: string;
		Indicador_Situacao_Especial: string;
		Indicativo_Finor_Finam: string;
		Inovacao_Tecnologica: string;
		Integrante_Grupo_Multinacional: string;
		Isencao_Reducao_Imposto_Lucro_Presumido: string;
		Jan: string;
		Julho: string;
		Junho: string;
		Maio: string;
		Marco: string;
		Nov: string;
		Numero_Recibo: string;
		Operacoes_Exterior: string;
		Operacoes_Pessoa_Vinculada: string;
		Optante_Paes: string;
		Optante_Refis: string;
		Out: string;
		Pagamentos_Exterior_Ou_Nao_Residentes: string;
		Pagamentos_Servicos_Juros_Dividendos: string;
		Participacao_Avaliada: string;
		Participacoes_Consorcios_Empresas: string;
		Participacoes_Exterior: string;
		Pj_Comercial_Exportadora: string;
		Pj_Efetuou_Vendas_Empresa_Comercial_Exportadora: string;
		Pj_Enquadrada_Artigos_48_49: string;
		Polo_Industrial_Manaus: string;
		Primeiro_Trimestre: string;
		Qualificacao_Pessoa_Juridica: string;
		Quantidade_Scp: number;
		Quarto_Trimestre: string;
		Recebimentos_Exterior_Ou_Nao_Residentes: string;
		Rendimentos_Servicos_Juros_Dividendos: string;
		Royalties_Pagos: string;
		Royalties_Recebidos: string;
		Segundo_Trimestre: string;
		Setem: string;
		Terceiro_Trimestre: string;
		Tipo_Ecf: string;
		Tipo_Escrituracao: string;
		Tipo_Pessoa_Juridica_Imune_Isenta: string;
		Utilizacao_Moeda_Estrangeira: string;
		Zona_Processamento_Exportacao: string;
	}
	interface Contabil_Parametros_Ecf_ContasRetorno extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		CodigoContabil: string;
		Conta: number;
		Descricao: string;
		Empresa: number;
	}
	interface Contabil_Parametros_Livro_Caixa_Contas extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Conta: number;
		Empresa: number;
	}
	interface Contabil_Plano_Contas extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigocontabil: string;
		CodSituacao: number;
		Contacredito: number;
		Data_Vigencia: Date;
		Descricao: string;
		Empresa: number;
		Inativo: boolean;
		Modalidade: string;
		ModalidadeEnum: SiSMoura.Core.Entity.Contabil_Plano_Contas.ModalidadeTipo;
		Natureza_Sped: string;
		NaturezaSpedEnum: SiSMoura.Core.Entity.Contabil_Plano_Contas.NaturezaSpedConta;
		Origem: string;
		OrigemEnum: SiSMoura.Core.Entity.Contabil_Plano_Contas.OrigemConta;
		Plano_Referencial_ECD: SiSMoura.Core.Entity.Contabil_Plano_Referencial;
		Planocontassped: string;
		Reduzido: number;
		Tipo: string;
	}
	interface Contabil_Plano_Referencial extends SiSMoura.Core.Common.Entity {
		Codigo: string;
		Codigo_Superior: string;
		Data_Fim: Date;
		Data_Inicio: Date;
		Descricao: string;
		Id: number;
		Natureza: number;
		Nivel: number;
		Ordem: number;
		Tipo: string;
	}
	interface Contabil_Razao_AnaliticoRetorno extends SiSMoura.Core.Common.Entity {
		Conta: string;
		Contra_Partida: string;
		Credito: number;
		Data: Date;
		DC: string;
		Debito: number;
		Dia: number;
		Documento: string;
		Historico: string;
		ID: number;
		LCTO: number;
		Origem_Conta: string;
		Saldo: number;
	}
	interface Contabil_Saldo_Inicial extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Conta: number;
		Credito: number;
		Debito: number;
		Empresa: number;
	}
	interface ContabilConfiguracaoLancamentoParametroRetorno {
		Cod_Conta_Credito: number;
		Cod_Conta_Debito: number;
		Cod_Grupo: string;
		Cod_Historico: number;
		Codigo: number;
		Contador: number;
		Desc_Conta_Credito: string;
		Desc_Conta_Debito: string;
		Desc_Grupo: string;
		Desc_Historico: string;
		Desconsiderar_Lancamentos: string;
		Lancamento_Multiplo: boolean;
		Tipo_Configuracao: string;
		Tipo_Lancamento_Contas_Pagar: number;
	}
	interface ContabilFechamentoCaixaCartao extends SiSMoura.Core.Common.Entity {
		CodContabilInterno: number;
		CodigoCartao: number;
		CodigoContabil: number;
		ContaContabil: number;
		ContaContabilDescricao: string;
		DescricaoCartao: string;
		Empresa: number;
	}
	interface ContabilLancamentoRetorno extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Contabil: number;
		Codigo_Credito: number;
		Codigo_Debito: number;
		Credito: number;
		Credito_Descricao: string;
		Debito: number;
		Debito_Descricao: string;
		Historico: number;
		Historico_Descricao: string;
		Tipo: string;
		Valor_Credito: number;
		Valor_Debito: number;
	}
	interface ContabilPesquisaRetorno {
		Codigo: number;
		Data: Date;
		Documento: string;
		Empresa: string;
		Pessoa: string;
		Selecionada: boolean;
		Tipo: string;
		Valor_Credito: number;
		Valor_Debito: number;
	}
	interface ContabilSaldoInicialRetorno extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		CodigoContabil: string;
		Descricao: string;
		Valor_Credito: number;
		Valor_Debito: number;
	}
	interface Contador extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Ddd: string;
		Email: string;
		Escritorio: number;
		Nome: string;
		Telefone: string;
	}
	interface Contas_Pagar extends SiSMoura.Core.Common.Entity {
		Caixa: number;
		CentrosCusto: SiSMoura.Core.Entity.Contas_Pagar_Centro_Custo[];
		Codigo: number;
		Codigo_Baixa: number;
		Codigo_Entrada: number;
		Codigo_Fornecedor: number;
		Codigo_Pedido_Compra: number;
		Configuracao_Lancamento: number;
		Conta_Contabil: number;
		Conta_Corrente: string;
		Conta_Dolar: boolean;
		Data_Compra: Date;
		Data_Credito: Date;
		Data_Emissao: Date;
		Data_Pagamento: Date;
		Data_Vencimento: Date;
		Desconto: number;
		Doc_Bancario: number;
		Doc_Merc: number;
		Empresa_Origem: number;
		Gerar: boolean;
		GerarCentroCusto: boolean;
		GerarContabil: boolean;
		isResiduo: boolean;
		Juros: number;
		Juros_Porc: number;
		Lancamento: number;
		Motivo_Exclusao: string;
		N_Doc_Bancario: string;
		N_Doc_Merc: string;
		Numero_Pedido: number;
		Observacao: string;
		Operador: number;
		Pago: boolean;
		Parcela: number;
		Pdv: number;
		Portador: string;
		Previsao: boolean;
		Replicado: number;
		Taxa_Juros: string;
		Taxa_Juros_AM: number;
		TipoDias: string;
		Usuario_Alterou: number;
		Usuario_Excluiu: number;
		Valor: number;
		Valor_Pago: number;
	}
	interface Contas_Pagar_Centro_Custo extends SiSMoura.Core.Common.Entity {
		Centro_Custo: number;
		Cod_Pagar: number;
		Id: number;
		Observacao: string;
		Valor: number;
		Valor_Pago: number;
	}
	interface Contas_Pagar_Excluida extends SiSMoura.Core.Common.Entity {
		Caixa: number;
		Codigo: number;
		Codigo_Baixa: number;
		Codigo_Entrada: number;
		Codigo_Fornecedor: number;
		Codigo_Pedido_Compra: number;
		Configuracao_Lancamento: number;
		Conta_Contabil: number;
		Conta_Corrente: string;
		Conta_Dolar: boolean;
		Data_Cadastro_Sistema: Date;
		Data_Compra: Date;
		Data_Credito: Date;
		Data_Emissao: Date;
		Data_Exclusao: Date;
		Data_Pagamento: Date;
		Data_Vencimento: Date;
		Desconto: number;
		Doc_Bancario: number;
		Doc_Merc: number;
		Empresa_Origem: number;
		Gerar: boolean;
		Juros: number;
		Juros_Porc: number;
		Lancamento: number;
		Motivo_Exclusao: string;
		N_Doc_Bancario: string;
		N_Doc_Merc: string;
		Numero_Pedido: number;
		Observacao: string;
		Operador: number;
		Pago: boolean;
		Parcela: number;
		Pdv: number;
		Portador: string;
		Previsao: boolean;
		Replicado: number;
		Taxa_Juros: string;
		Taxa_Juros_Am: number;
		Usuario_Excluiu: number;
		Valor: number;
		Valor_Pago: number;
	}
	interface Contas_Pagar_Pagamento extends SiSMoura.Core.Common.Entity {
		Cheque: number;
		Codigo: number;
		Codigo_Lancamento: number;
		Conta_Contabil_Lancamento: number;
		Conta_Corrente: string;
		Conta_Pagar: number;
		Data_Credito: Date;
		Doc_Bancario: number;
		Gerar_Lancamento: string;
		Id: number;
		N_Doc_Bancario: string;
		Valor: number;
	}
	interface Contas_Receber extends SiSMoura.Core.Common.Entity {
		Agrupada: boolean;
		Baixa: boolean;
		Baixa_Origem: number;
		Boleto: string;
		Bordero: number;
		Caixa: number;
		Centros_Custo: SiSMoura.Core.Entity.Contas_Receber_Centro_Custo[];
		Codigo: number;
		Codigo_Baixa: number;
		Codigo_Barras: string;
		Codigo_Cliente: number;
		Codigo_Faturamento_Agrupado: number;
		Codigo_Fechamento_Farmacia: number;
		Codigo_Promissoria: number;
		Codigo_Troca: number;
		Como_Recebeu: string;
		Configuracao_Lancamento: number;
		Conta_Contabil: number;
		Conta_Corrente: string;
		Contador: number;
		Contrato: number;
		Contrato_Pagamento: number;
		Convenio: string;
		Data_Baixa: Date;
		Data_Bordero: Date;
		Data_Credito: Date;
		Data_Emissao: Date;
		Data_Emissao_Boleto: Date;
		Data_Pagamento_Comissao: Date;
		Data_Promissoria: Date;
		Data_Vencimento: Date;
		Doc_Bancario: number;
		Doc_BancarioEntity: SiSMoura.Core.Entity.Documento_Bancario;
		Doc_Merc: number;
		Doc_MercEntity: SiSMoura.Core.Entity.Documento_Mercantil;
		Empresa: number;
		Gerar: boolean;
		GerarContabil: boolean;
		Impagavel: boolean;
		Lancamento: number;
		Locacao_Final: Date;
		Locacao_Indenizacao_Motivo: number;
		Locacao_Inicial: Date;
		Motivo_Exclusao: string;
		Multa: number;
		N_Doc_Bancario: string;
		N_Doc_Merc: string;
		Nosso_Numero: string;
		Nosso_Numero_Boleto: string;
		Nosso_Numero_Boleto_Site: string;
		Nota_Fiscal: number;
		Numero_Documento: number;
		Numero_Orcamento: number;
		Numero_Os: number;
		Observacao: string;
		Operador: number;
		Parcela: number;
		Pdv: number;
		Posicao_Titulo: number;
		Previsao: boolean;
		Remessa: string;
		Replicado: number;
		Responsavel_Impressao: string;
		Retorno: string;
		Ruim: boolean;
		Segunda_Via_Online: boolean;
		Usuario: number;
		Usuario_Alteracao: number;
		Usuario_Exclusao: number;
		Usuario_Responsavel: number;
		Valor: number;
		Valor_Abatimento: number;
		Valor_Juros: number;
		Valor_Recebido: number;
		Vendas_Fechamento_Personalizado: string;
	}
	interface Contas_Receber_Centro_Custo extends SiSMoura.Core.Common.Entity {
		Centro_Custo: number;
		Cod_Receber: number;
		Id: number;
		Observacao: string;
		Valor: number;
	}
	interface ContasPagarCentroCustoRetorno {
		Centro_Custo: number;
		Centro_Custo_Descricao: string;
		Contador: number;
		Contas_Pagar_Centro_Custo_Codigo: number;
		Valor: number;
		Valor_Pagar: number;
	}
	interface ContasPagarPagamento {
		Cheque_Alterar_Situacao: number;
		Cheque_Codigo: number;
		Cheque_Conta_Corrente: string;
		Conta_Contabil_Codigo: number;
		Conta_Contabil_Descricao: string;
		Conta_Corrente: string;
		Conta_Pagar: number;
		Contador: number;
		Data_Credito: Date;
		Doc_Bancario_Codigo: number;
		Doc_Bancario_Descricao: string;
		Gerar: string;
		InformouCheque: boolean;
		N_Doc_Bancario: string;
		Valor: number;
	}
	interface ContasPagarReplicadoRetorno {
		Contador: number;
		Data_Emissao: Date;
		Data_Vencimento: Date;
		N_Doc_Bancario: string;
		Parcela: number;
		Valor: number;
	}
	interface ContasReceberFaturamentoRetorno {
		Atraso: string;
		Codigo_Cliente: number;
		Conta_Corrente: string;
		Conta_Receber: number;
		Contador: number;
		Cupom_Fiscal: number;
		Data_Emissao: Date;
		Data_Vencimento: Date;
		Dias_Atraso: number;
		Empresa: number;
		Juros: number;
		Nome_Cliente: string;
		Parcela: number;
		Valor: number;
		Valor_Final: number;
		Venda: number;
	}
	interface ContasReceberPagamento {
		Cartao_Codigo: number;
		Cheque_Alterar_Situacao: number;
		Cheque_Codigo: number;
		Cheque_Conta_Corrente: string;
		Conta_Contabil_Codigo: number;
		Conta_Contabil_Descricao: string;
		Conta_Corrente: string;
		Contador: number;
		Data_Credito: Date;
		Doc_Bancario_Codigo: number;
		Doc_Bancario_Descricao: string;
		Gerar: string;
		InformouCheque: boolean;
		N_Doc_Bancario: string;
		Valor: number;
	}
	interface ContasReceberReplicadoRetorno {
		Contador: number;
		Data_Vencimento: Date;
		Parcela: number;
		Valor: number;
	}
	interface Contrato extends SiSMoura.Core.Common.Entity {
		Agencia: string;
		Animal: number;
		Banco: string;
		Cliente: number;
		Codigo: number;
		Codigo_Os: number;
		Conta: string;
		Conta_Corrente: number;
		Conta_Corrente_String: string;
		Cortesia: boolean;
		Data_Cancelado: Date;
		Data_Emissao: Date;
		Data_Inicio: Date;
		Data_Realizado_Cancelamento: Date;
		Data_Termino: Date;
		DesconsiderarAtributosEspecificos: boolean;
		Dias_Vigencia: number;
		Empresa: number;
		Gerado: boolean;
		Inss: number;
		Irrf: number;
		Iss: number;
		Lancamento: number;
		Modelo_Contrato: number;
		Motivo_Cancelado: number;
		N_Cheque: string;
		N_Nota_Promissoria: string;
		N_Promissoria: boolean;
		Nota: boolean;
		Obs: string;
		Observacao: string;
		Pagamentos: SiSMoura.Core.Entity.Contrato_Pagamento[];
		PagamentosPendentesGravar: SiSMoura.Core.Entity.Contrato_Pagamento[];
		Pis_Cofins: number;
		Qtde: number;
		Servico: number;
		Total: number;
		Usuario_Realizou_Cancelamento: number;
		Valor_Cheque: number;
		Valor_Unitario: number;
	}
	interface Contrato_Motivo_Cancelamento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Contrato_Pagamento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Conta_Contabil: number;
		Contrato: number;
		Cortesia: boolean;
		Data_Pagamento: Date;
		Doc_Bancario: number;
		Doc_Merc: number;
		Parcela: number;
		Valor: number;
	}
	interface ContratoContasPendentesRetorno {
		Codigo_Contrato_Pagamento: number;
		Codigo_Forma_Recebimento: number;
		Codigo_Receber: number;
		Conta_Contabil: number;
		Conta_Contabil_Descricao: string;
		Contador: number;
		Contrato: number;
		Cortesia: boolean;
		CortesiaExtenso: string;
		CortesiaSN: string;
		Data_Vencimento: Date;
		Forma_Recebimento: string;
		Parcela: number;
		Valor: number;
	}
	interface Controle_Vasilhame extends SiSMoura.Core.Common.Entity {
		Cliente: number;
		Codigo: number;
		Data_Cadastro: Date;
		FiscalNfEntity: SiSMoura.Core.Entity.Fiscal_Nf;
		Nota_Fiscal: number;
		Usuario: number;
		VasilhameProdutoEntity: SiSMoura.Core.Entity.Controle_Vasilhame_Produto[];
	}
	interface Controle_Vasilhame_Produto extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Controle_Vasilhame: number;
		Produto: number;
		Quantidade_Entregue: number;
		Quantidade_Retirada: number;
	}
	interface Convenio extends SiSMoura.Core.Common.Entity {
		Acrescimo: number;
		Afapi: boolean;
		Bairro: string;
		Cep: string;
		Cidade: number;
		Cnpj: string;
		Codigo: number;
		Codigo_Cliente: number;
		Codigo_Layout: string;
		Complemento: string;
		Contato: string;
		Contribuinte_ICMS: number;
		Convenio_Grupo: SiSMoura.Core.Entity.Convenio_Grupo[];
		Data_Carga: Date;
		Ddd: string;
		Desconto: number;
		Descricao: string;
		Dia_Fechamento: number;
		Dia_Pagamento: number;
		Email: string;
		Embutir_Preco: boolean;
		Endereco: string;
		Fone: string;
		Ie: string;
		Inativo: boolean;
		Numero: string;
		Obs: string;
		Operador: number;
		Operadora: number;
		Permitir_Desconto_Unitario: boolean;
		Porcentagem_Paga: number;
		Somente_Cartao: boolean;
		Tipo: string;
		Tipo_Custo: string;
		Ultima_Alteracao: Date;
		Usar_Em_Filial: boolean;
		Vender_Preco_Custo: boolean;
		Vinculo_Afapi: number;
	}
	interface Convenio_Grupo extends SiSMoura.Core.Common.Entity {
		Acrescimo: number;
		Convenio: number;
		Data_Carga: Date;
		Desconto: number;
		Grupo: number;
		Id: number;
		Vender: boolean;
	}
	interface ConvenioFranquiaRetorno extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface ConvenioGrupoRetorno {
		Acrescimo: number;
		Contador: number;
		Convenio: number;
		Desconto: number;
		Descricao: string;
		Grupo: number;
		Id: number;
		Vender: boolean;
	}
	interface Conversao_Tipo_Moeda extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Tipo_Calculo: number;
	}
	interface Cores extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Cor_Ecommerce: string;
		Data_Carga: Date;
		Nome: string;
		Padrao: boolean;
		Roteador_Enviou: boolean;
		Roteador_Puxou: boolean;
	}
	interface Cotacao extends SiSMoura.Core.Common.Entity {
		Cif_Fob: string;
		Cod_Endereco_Entrega: number;
		Codigo: number;
		Condicao: string;
		Contato: string;
		Data: Date;
		Finalizada: boolean;
		Fornecedor: number;
		Itens: SiSMoura.Core.Entity.Cotacao_Item[];
		Obs: string;
		Pagamento: string;
		Pessoa_Entrega: number;
		Solicitacao: number;
	}
	interface Cotacao_Cotefacil_Remessa extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data: Date;
		Empresas: SiSMoura.Core.Entity.Cotacao_CoteFacil_Remessa_Empresa[];
		Itens: SiSMoura.Core.Entity.Cotacao_Cotefacil_Remessa_Item[];
		Situacao: number;
	}
	interface Cotacao_CoteFacil_Remessa_Empresa extends SiSMoura.Core.Common.Entity {
		Cod_Cotefacil_Remessa: number;
		Empresa: number;
		Id: number;
	}
	interface Cotacao_Cotefacil_Remessa_Item extends SiSMoura.Core.Common.Entity {
		Cod_Cotefacil_Remessa: number;
		Codigo_Barra: string;
		Fabricante: number;
		Id: number;
		Preco_Referencia: number;
		Produto: number;
		Quantidade: number;
	}
	interface Cotacao_Cotefacil_Remessa_ItemRetorno extends SiSMoura.Core.Common.Entity {
		Cod_Cotefacil_Remessa: number;
		Codigo_Barra: string;
		Fabricante: number;
		Id: number;
		Nome_Fornecedor: string;
		Preco_Referencia: number;
		Produto: number;
		Produto_Nome: string;
		Quantidade: number;
	}
	interface Cotacao_Cotefacil_Retorno extends SiSMoura.Core.Common.Entity {
		Cnpj_Comprador: string;
		Cnpj_Fornecedor: string;
		Cnpj_Matriz: string;
		Cod_Cotefacil_Remessa: number;
		Codigo: number;
		Codigo_Cotacao: number;
		Codigo_Fornecedor_Cotefacil: number;
		Codigo_Pedido_Cotefacil: number;
		Prazo_Pagamento: number;
		Produtos: SiSMoura.Core.Entity.Cotacao_Cotefacil_Retorno_Item[];
		Razao_Social: string;
	}
	interface Cotacao_Cotefacil_Retorno_Item extends SiSMoura.Core.Common.Entity {
		Cod_Cotefacil_Retorno: number;
		Codigo_Barra: string;
		Codigo_Cotefacil: number;
		Id: number;
		Percentual_Desconto: number;
		Preco: number;
		Preco_Referencia: number;
		Produto: number;
		Quantidade: number;
	}
	interface Cotacao_Eletronica extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Cadastro: Date;
		Data_Finalizada: Date;
		Finalizada: boolean;
		Mensagem: string;
		Usuario_Cadastro: number;
		Usuario_Finalizou: number;
	}
	interface Cotacao_Item extends SiSMoura.Core.Common.Entity {
		Aprovador: number;
		Codigo: number;
		Cotacao: number;
		Data_Aprovacao: Date;
		Desconto: number;
		Icms: number;
		Ipi: number;
		Prazo_Entrega: number;
		Produto: number;
		Produto_Nome: string;
		Qtde: number;
		Valor: number;
	}
	interface CotacaoCoteFacilRetorno extends SiSMoura.Core.Common.Entity {
		Erro: string;
		Produtos: SiSMoura.Core.Entity.Cotacao_Cotefacil_Retorno[];
	}
	interface CriadorRetorno {
		CNPJ: string;
		Criador: number;
		Razao_Social: string;
		RG: string;
	}
	interface Cst_Entrada extends SiSMoura.Core.Common.Entity {
		Cst_Entrada: string;
		Cst_Saida: string;
		Id: number;
	}
	interface Curso_Usuario extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Contador: number;
		Curso: string;
		Data_Matricula: Date;
		Formacao_Atual: boolean;
		Formacao_Atual_Text: string;
		Observacao: string;
		Situacao: string;
		Usuario: number;
	}
	interface Declaracao_Conteudo extends SiSMoura.Core.Common.Entity {
		Bairro: string;
		Cep: string;
		Codigo: number;
		Complemento: string;
		Considerar_Peso_Produto: boolean;
		Cpf: string;
		DeclaracaoConteudoItem: SiSMoura.Core.Entity.Declaracao_Conteudo_Item[];
		Destinatario: number;
		Empresa: number;
		Endereco: string;
		Municipio: string;
		Numero: string;
		Peso_Total: number;
		Uf: string;
	}
	interface Declaracao_Conteudo_Item extends SiSMoura.Core.Common.Entity {
		Cod_Declaracao: number;
		Codigo_Consig: number;
		Codigo_Fiscal_Nf: number;
		Codigo_Orcamento: number;
		Codigo_OS: number;
		Codigo_Venda: number;
		ID: number;
		Numero_Item: number;
		Peso_Item: number;
		Produto: number;
		Qtde: number;
		Total: number;
		Valor_Unitario: number;
	}
	interface DeclaracaoConteudoConsigRetorno {
		Cliente: string;
		Codigo_Consig: number;
		Data: Date;
		Destinatario: number;
		Empresa: number;
		Tipo: string;
		Vencimento: Date;
	}
	interface DeclaracaoConteudoItemRetorno {
		Cod_Declaracao: number;
		Codigo_Consig: number;
		Codigo_Fiscal_Nf: number;
		Codigo_Orcamento: number;
		Codigo_OS: number;
		Codigo_Venda: number;
		Descricao: string;
		ID: number;
		Numero_Item: number;
		Peso_Item: number;
		Produto: number;
		Qtde: number;
		Total: number;
		Valor_Unitario: number;
	}
	interface DeclaracaoConteudoNFeRetorno {
		Codigo_Empresa: number;
		CodigoNF: number;
		CodigoPessoa: number;
		Data: Date;
		Destinatario: string;
		Empresa: string;
		NF: number;
		Situacao: string;
	}
	interface DeclaracaoConteudoOrcamentoRetorno {
		Cliente: string;
		Data: Date;
		Destinatario: number;
		Empresa: number;
		ID: number;
		Orcamento: number;
		Situacao: string;
		Valor_Acrescimo: number;
		Valor_Desconto: number;
		Valor_Produtos: number;
		Valor_Total: number;
		Vendedor: string;
	}
	interface DeclaracaoConteudoOSRetorno {
		Cliente: string;
		Codigo_OS: number;
		Data: Date;
		Destinatario: number;
		Empresa: number;
		Situacao: string;
		Total_Produtos: number;
		Valor_Desconto: number;
		Valor_Total: number;
	}
	interface DeclaracaoConteudoVendaRetorno {
		Codigo_Cupom: number;
		Data: Date;
		Destinatario: number;
		Empresa: number;
		ID: number;
		Tipo: string;
		Valor_Acrescimo: number;
		Valor_Desconto: number;
		Valor_Produtos: number;
		Valor_Total: number;
		Venda: number;
	}
	interface Demonstrativo_ResultadoRetorno {
		Codigo_Contabil: number;
		Conta_Contabil: string;
		Descricao: string;
		Saldo_Atual: number;
	}
	interface Deposito extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Carga: Date;
		Descricao: string;
		Empresa: number;
		Inativa: boolean;
		Obs: string;
		Padrao: boolean;
	}
	interface DepositoEstoqueProdutoRetorno {
		Codigo: number;
		Deposito: string;
		Empresa: string;
		Estoque_Unitario: string;
		Quantidade: number;
	}
	interface Desconto_Faixa_Valor extends SiSMoura.Core.Common.Entity {
		Data_Carga: Date;
		Desconto_Faixa_Valor_Empresa: SiSMoura.Core.Entity.Desconto_Faixa_Valor_Empresa[];
		Descricao: string;
		Id: number;
		Valor_Ate: number;
		Valor_De: number;
		Valor_Desconto_Porcentagem: number;
	}
	interface Desconto_Faixa_Valor_Empresa extends SiSMoura.Core.Common.Entity {
		Data_Carga: Date;
		Desconto_Faixa_Valor: number;
		Empresa: number;
		Id: number;
	}
	interface Desconto_Titulo extends SiSMoura.Core.Common.Entity {
		Cheque: number;
		Codigo: number;
		Conta_Contabil: number;
		Conta_Corrente: string;
		Conta_Receber: number;
		Descontado: number;
		Descontado_Porcentagem: number;
		Documento_Bancario: number;
		Documento_Mercantil: number;
		Fornecedor: number;
		Valor_Final: number;
		Valor_Titulo: number;
	}
	interface Documento_Bancario extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Pedir_Bandeira_Cartao: boolean;
		Pedir_Dados_Cheque: boolean;
	}
	interface Documento_Mercantil extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Documento_Transporte extends SiSMoura.Core.Common.Entity {
		Anulado: boolean;
		Chave_Controle: string;
		Cidade: string;
		Cidade_Destino: string;
		Cliente: number;
		Codigo: number;
		Codigo_Postal: string;
		Codigo_Postal_Destino: string;
		Data_cancelamento: Date;
		Data_Destino: Date;
		Data_Emissao: Date;
		Data_Fatura: Date;
		Data_Origem: Date;
		Documento: string;
		Empresa: number;
		Fatura: boolean;
		Hora_Destino: Date;
		Hora_Origem: Date;
		Impressao_Realizada: boolean;
		Local_Carga: string;
		Morada: string;
		Morada_Destino: string;
		Numeracao: string;
		Numero: number;
		Pais: string;
		Pais_Destino: string;
		Porto: string;
		Porto_Destino: string;
		Produtos: SiSMoura.Core.Entity.Documento_Transporte_Produto[];
		Serie: string;
		Tipo: string;
	}
	interface Documento_Transporte_Produto extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Desconto: number;
		Documento_Transporte: number;
		Iva_Porcentagem: number;
		Iva_Valor: number;
		Produto: number;
		Qtde: number;
		Total: number;
		UnitPrice: number;
		Valor: number;
	}
	interface DocumentoTransporteItemRetorno extends SiSMoura.Core.Common.Entity {
		Contador: number;
		Desconto: number;
		Desconto_Impressao: string;
		IVA: number;
		IVA_Impressao: string;
		Nome_Produto: string;
		Preco_Custo: number;
		Produto: number;
		Quantidade: number;
		SubTotal: number;
		Total: number;
		Total_Impressao: string;
		Unidade: string;
		Unitario_Desconto: number;
		Valor: number;
		Valor_Unitario_Impressao: string;
	}
	interface Duplicata extends SiSMoura.Core.Common.Entity {
		Conta_Corrente: string;
		Data_Vencimento: string;
		Descricao_Conta_Contabil: string;
		Dias: string;
		Doc_Merc: string;
		Obs: string;
		Parcela: string;
		Valor: string;
	}
	interface EmissaoComunicadoRetorno {
		Bairro: string;
		CEP: string;
		Cidade: string;
		Codigo_Cliente: number;
		Email: string;
		Endereco: string;
		Estado: string;
		Fone: string;
		Nome_Cliente: string;
		Parcelas: number;
		Primeiro_Vencimento: Date;
		Ultimo_Pagamento: Date;
		Ultimo_Vencimento: Date;
		Valor: number;
	}
	interface Empresa extends SiSMoura.Core.Common.Entity {
		Apuracao_Pis_Cofins: number;
		Bairro: string;
		Bairro_Contabilista: string;
		Caminho_Multiloja_Xml: string;
		Capital_Social: number;
		Cep: string;
		Cep_Contabilista: string;
		Cidade: number;
		Cidade_Contabilista: number;
		CidadeEntity: SiSMoura.Core.Entity.Cidade;
		Cnpj: string;
		Cnpj_Escritorio_Contabilista: string;
		Cod_Atividade: number;
		Codigo: number;
		Codigo_Cliente: number;
		Codigo_Folhamatic: string;
		Codigo_Fornecedor: number;
		Codigointernoedi: string;
		Cofins: number;
		Complemento: string;
		Complemento_Endereco_Contabilista: string;
		Contato: string;
		Contrato: string;
		Covisa_Conferido_Estoque: boolean;
		Cpf_Contabilista: string;
		Cpf_Transmissor_Sngpc: string;
		Crc_Contabilista: string;
		Criterio_Apuracao_Pis_Cofins: number;
		Cro_Cadastro_Ecf: number;
		Csl: number;
		Dados_Procon: string;
		Data_Cadastro_Ecf: Date;
		Data_Carga: Date;
		Data_Fechamento_Atual: Date;
		Data_Jucesp: Date;
		Data_Junta: Date;
		Data_Venda: Date;
		Decreto_Padrao: number;
		Desconto_Issqn: number;
		Dia_Cofins: number;
		Dia_Csl: number;
		Dia_Ir: number;
		Dia_Iss: number;
		Dia_Pis: number;
		Dia_Simples: number;
		Email_Contabilista: string;
		Email_Contato: string;
		Email_Fiscal: string;
		Empresa_Contador: string;
		Empresa_Matriz: number;
		Endereco: string;
		Endereco_Contabilista: string;
		Exibir_CockPit: boolean;
		Fantasia: string;
		Fax: string;
		Fax_Contabilista: string;
		Fk_Empresa_Fiscal_Serie_Nf: number;
		Fone: string;
		Fone_Contabilista: string;
		Franquia_Perfil_Cadastro: number;
		Funrural_Aliquota: number;
		Funrural_Mensagem: string;
		Icms_Nf: boolean;
		Ie: string;
		IE_OutrosEstados: SiSMoura.Core.Entity.Empresa_Ie_Outros_Estados[];
		Inativo: boolean;
		Inscricao_Cadastro_Contribuinte: string;
		Inscricao_Municipal: string;
		IntegracaoSuperOn: boolean;
		Ir: number;
		Iss: number;
		Iss_Maior_Que: number;
		Jucesp: number;
		Licenca_Sanitaria: string;
		Licencas: number;
		Lista_Preco_APP: number;
		Login_Nfp: string;
		Logotipo: string;
		Multiloja_Banco: string;
		Multiloja_Ip: string;
		Multiloja_Senha: string;
		N_Ordem: number;
		Nfe_Msg_Logotipo: string;
		Nome_Contabilista: string;
		Numero: number;
		Numero_Endereco_Contabilista: string;
		Numero_Suframa: string;
		Padrao: boolean;
		Pais: number;
		Petz_Sigla: string;
		Pis: number;
		Qtde_Maquinas: string;
		Ramo_Atividade: string;
		Razao_Social: string;
		Reg_Trib: number;
		Reg_Trib_iMendes: number;
		Regime_Incidencia: number;
		Registro_Junta: string;
		Retencao_Iss: boolean;
		Senha_At: string;
		Senha_Nfp: string;
		Simples: number;
		Site_Empresa: string;
		Slogan: string;
		Sped_Pis_Cofins_Utilizar: boolean;
		Timeout_Conexao: number;
		Tipo: string;
		Tipo_Atividade: number;
		Tipo_Empresa: number;
		Tipo_Nfp: number;
		UrlFoto: string;
		Usuario_AT: string;
	}
	interface Empresa_Configuracoes extends SiSMoura.Core.Common.Entity {
		Cluster: number;
		Codigo: number;
		Empresa: number;
		Horarios: SiSMoura.Core.Entity.Animais_Funcionamento_Empresa_Horario[];
		HorariosDiferenciados: SiSMoura.Core.Entity.Animais_Funcionamento_Horario_Diferenciado[];
		Servicos: SiSMoura.Core.Entity.Animais_Servico_Atendimento[];
		Setores: SiSMoura.Core.Entity.Empresa_Setor[];
		Tipo: number;
	}
	interface Empresa_Ie_Outros_Estados extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Dados_Adicionais: string;
		Empresa: number;
		IE: string;
		UF: string;
	}
	interface Empresa_Setor extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Configuracao: number;
		Empresa: number;
		Salas: SiSMoura.Core.Entity.Animais_Sala_Setor[];
		Setor: number;
		Setor_Descricao: string;
	}
	interface EmpresaRetorno {
		Codigo: number;
		Fantasia: string;
		Padrao: boolean;
		Razao_Social: string;
	}
	interface EmpresasApiRetorno {
		Bairro: string;
		Cidade_Codigo: number;
		Cidade_Estado: string;
		Cidade_Nome: string;
		CNPJ: string;
		Codigo: number;
		Distancia: number;
		Endereco: string;
		EnderecoOrigemResolvido: string;
		Fantasia: string;
		Favorita: boolean;
		Mostrar: boolean;
		Numero_Endereco: string;
		Padrao: boolean;
		Razao_Social: string;
		UrlFoto: string;
	}
	interface Encomenda extends SiSMoura.Core.Common.Entity {
		Cliente: number;
		Codigo: number;
		Emissao: Date;
		Fabricante: number;
		Produto: string;
		Qtde: number;
		Situacao: number;
	}
	interface Entrada_Animal extends SiSMoura.Core.Common.Entity {
		Animais: SiSMoura.Core.Entity.Entrada_Animal_Item[];
		Chave: number;
		Criador: number;
		Data: Date;
		Data_Vencimento: Date;
		Denticao: string;
		Ectoparasitas: string;
		Empresa: number;
		Mucosa: string;
		Nota: string;
		Nutricao: string;
		Observacao: string;
		Olhos: string;
		Orelhas: string;
		Palpacao_Abdominal: string;
		Pele: string;
		Proprietario: number;
		Reflexo_Tosse: string;
		Serie: string;
		Testiculos: string;
		Tipo: string;
		Valor_Total: number;
	}
	interface Entrada_Animal_Item extends SiSMoura.Core.Common.Entity {
		Bonificacao: string;
		Castrado: boolean;
		Chave: number;
		Chip: string;
		Codigo_Cadastro: number;
		Especie: number;
		Id: number;
		Item: number;
		Nascimento: Date;
		Nome: string;
		Nome_Pedigree: string;
		Observacao: string;
		Pelagem: number;
		Peso: number;
		Preco_Custo: number;
		Preco_Produto: number;
		Raca: number;
		Rga: string;
		Sexo: string;
	}
	interface Entrada_Produto extends SiSMoura.Core.Common.Entity {
		Aberto_Data: Date;
		Aberto_Micro: string;
		Aberto_Usuario: number;
		Alterar_Estoque: boolean;
		AlterouEstoque: boolean;
		Base_Icms: number;
		Centro_Custo: number;
		Centros_Custo: SiSMoura.Core.Entity.CentroDeCustoRetorno[];
		Cfop: string;
		Chave: number;
		Chave_Nfe: string;
		Cliente_Retorno_Parcial: number;
		Cnpj_Transportadora: string;
		Codigo_Fornecedor: number;
		Condicao_Pagamento: string;
		Configuracao_Lancamento: number;
		Conta_Contabil: number;
		ContasPagar: SiSMoura.Core.Entity.Contas_Pagar[];
		Conteudo_Arquivo_Xml: string;
		Data_Cadastro: Date;
		Data_Emissao: Date;
		Data_Entrada: Date;
		Deposito: number;
		Desconto: number;
		Despesas: number;
		Empresa: number;
		EntradaPedidos: SiSMoura.Core.Entity.Entrada_Produto_Pedido[];
		EntradaProdutoAjustes: SiSMoura.Core.Entity.Entrada_Produto_Ajustes[];
		EntradaProdutoControladoEntity: SiSMoura.Core.Entity.Entrada_Produto_Controlado;
		EntradaProdutoItens: SiSMoura.Core.Entity.Entrada_Produto_Itens[];
		EntradaProdutoItensTanque: SiSMoura.Core.Entity.Entrada_Produto_Item_Tanque[];
		EntradaServicos: SiSMoura.Core.Entity.Entrada_Servico[];
		Fat_Direto: string;
		Forma_Pagamento: number;
		Frete_Incluso: boolean;
		Gravado_Web: boolean;
		Hora_Emissao: string;
		Ie_Transportadora: string;
		Indicador1: string;
		Modelo_Nota: number;
		Nao_Alterar_Estoque: boolean;
		Nome_Fornecedor: string;
		Nota_Fiscal: string;
		Observacao: string;
		Operador: number;
		Pedido: number;
		Perm_Aprov_Icms: boolean;
		Peso_Bruto: number;
		Peso_Liq: number;
		Placa: string;
		QuantidadeItensRatearICMSST: number;
		Serie: string;
		Solicitacao: number;
		Sped_Enviar_Icms: boolean;
		Subserie: string;
		Tipo_Entrada: number;
		Tipo_Nf: number;
		Uf_Placa: string;
		Uf_Transportadora: string;
		Ulti_Vseguro: boolean;
		Valor_Ajuste: number;
		Valor_Frete: number;
		Valor_Icms: number;
		Valor_Ipi: number;
		Valor_Nf_Dolar: number;
		Valor_Nota: number;
		Valor_Produtos: number;
		Valor_Seguro: number;
		Valor_Servico: number;
		Valor_Subst: number;
	}
	interface Entrada_Produto_Ajustes extends SiSMoura.Core.Common.Entity {
		Aliquota: number;
		Base_Calculo: number;
		Chave: number;
		Cod_Ajuste: number;
		Cod_Ajuste_Descricao: string;
		Codigo: number;
		Codigo_Ajuste_CAT: string;
		Cst: string;
		Fiscal_Tipo_AjusteEntidade: SiSMoura.Core.Entity.Fiscal_Tipo_Ajuste;
		IsXML: boolean;
		Motivo: number;
		Motivo_Descricao: string;
		Num_Nota: string;
		Origem: number;
		Origem_Descricao: string;
		Valor: number;
		Valor_Outros: number;
	}
	interface Entrada_Produto_Anilha extends SiSMoura.Core.Common.Entity {
		Anilha: string;
		Chave: number;
		CodAnilha: number;
		Codigo: number;
		Codigo_Produto_Item: number;
	}
	interface Entrada_Produto_Controlado extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data: Date;
		Entrada: number;
		Fornecedor: number;
	}
	interface Entrada_Produto_Controlado_Item extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Conferido: boolean;
		Contador: number;
		Data_Fabricacao: Date;
		Data_Recebimento: Date;
		Entrada: number;
		Entrada_Item: number;
		Entrada_Produto_Controlado: number;
		informacoesAdicionais: SiSMoura.Core.Entity.EntradaControladoItemInfAdicionais;
		Lote: string;
		Peso: number;
		Produto: number;
		Quantidade: number;
		Usuario_Conferiu: number;
		Validade: Date;
	}
	interface Entrada_Produto_Item_Tanque extends SiSMoura.Core.Common.Entity {
		Chave: number;
		Codigo: number;
		Produto: number;
		Quantidade: number;
		Tanque: number;
	}
	interface Entrada_Produto_Itens extends SiSMoura.Core.Common.Entity {
		Aliquota_Cofins: number;
		Aliquota_Pis: number;
		Base_Cofins: number;
		Base_Icms: number;
		Base_Icms_St: number;
		Base_Pis: number;
		Cfop: string;
		Chave: number;
		Codigo: number;
		Codigo_Empresa: number;
		Codigo_Fornecedor: number;
		Codigo_Pedido: number;
		Codigo_Produto: number;
		Codigo_Produto_Fornecedor: string;
		Conta_Contabil: number;
		Cst: string;
		Custo: number;
		Custo_Sem_Imposto: number;
		Data_Validade: Date;
		Desconto: number;
		Diferenca_Icms: number;
		Encargos_Financeiros: number;
		Estoque_Anterior: number;
		Etiquetas_Emitidas: number;
		Fornecedor: number;
		Frete: number;
		Icms: number;
		Icms_Rs: number;
		Icms_St: number;
		Ipi: number;
		IsCstRateio: boolean;
		Item: number;
		Lotes: SiSMoura.Core.Entity.Entrada_Produto_Controlado_Item[];
		MovEntradaDesag: SiSMoura.Core.Entity.Movimentacao_Entrada_Desagregacao[];
		Ncm: string;
		Ordem: number;
		Porc_Base_Icms: number;
		ProdutoAnilhas: SiSMoura.Core.Entity.Entrada_Produto_Anilha[];
		Qtde_Conversao: number;
		Quantidade: number;
		Quantidade_Cx: number;
		Rfid_Epc: string;
		Seguro: number;
		St_Cofins: number;
		St_Ipi: number;
		St_Pis: number;
		Tanque: number;
		Unidade: number;
		Unidade_Conversao: string;
		Unitario_Conversao: number;
		Valor_Ajuste: number;
		Valor_Cofins: number;
		Valor_Custo_Calculado: number;
		Valor_Desconto: number;
		Valor_Ipi: number;
		Valor_Pis: number;
		Valor_Total: number;
		Valor_Total_Dolar: number;
		Valor_Unit_Dolar: number;
		Valor_Unitario: number;
	}
	interface Entrada_Produto_Pedido extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Entrada: number;
		Pedido: number;
	}
	interface Entrada_Servico extends SiSMoura.Core.Common.Entity {
		Aliq_Cofins: number;
		Aliq_Pis: number;
		Cfop: string;
		Chave: number;
		Cif_Fob: number;
		Codigo: number;
		Cofins_Valor: number;
		Csll_Valor: number;
		Frete: boolean;
		Inss_Valor: number;
		Irrf_Valor: number;
		Perc_Iss: number;
		Pis_Valor: number;
		Porc_Icms: number;
		Produto: number;
		Quantidade: number;
		Servico: string;
		St_Cofinsserv: string;
		St_Pisserv: string;
		Tipo_Servico: number;
		Valor_Icms: number;
		Valor_Iss: number;
		Valor_Total: number;
		Valor_Unitario: number;
	}
	interface EntradaControladoItemInfAdicionais {
		DataFabricacao: Date;
		DataRecebimento: Date;
		Localizacao1: number;
		Localizacao2: number;
		Localizacao3: number;
	}
	interface EntradaPedidoRetorno extends SiSMoura.Core.Common.Entity {
		CFOP: string;
		Codigo: number;
		Codigo_Empresa: number;
		Codigo_Pedido: number;
		Cor: string;
		CST: string;
		Desconto_Dinheiro_Pedido: number;
		Desconto_P: number;
		Desconto_P2: number;
		Desconto_P3: number;
		Desconto_Porcentagem_Pedido: number;
		Desconto_Porcentagem2_Pedido: number;
		Desconto_Porcentagem3_Pedido: number;
		Desconto_V: number;
		Icms_St: number;
		Ipi: number;
		Ipi_P: number;
		Produto: string;
		Quantidade: number;
		Quantidade_Entrada: number;
		Quantidade_Restante: number;
		Quantidade_Utilizar: number;
		Referencia: string;
		Tamanho: string;
		Total_Comdesconto_Pedido: number;
		Valor_Total: number;
		Valor_Total_Unitario: number;
		Valor_Unitario: number;
		Valorsemdesconto: number;
	}
	interface EntradaProdutoDuplicata {
		Calculado_Dolar: boolean;
		Codigo_Conta_Contabil: number;
		Codigo_Parcela: number;
		Conta_Corrente: string;
		Contador: number;
		Data_Emissao: Date;
		Data_Vencimento: Date;
		Descricao_Conta_Contabil: string;
		Descricao_Doc_Merc: string;
		Dias: number;
		Doc_Bancario: number;
		Doc_Merc: number;
		N_Doc_Bancario: string;
		Observacao: string;
		Pago: boolean;
		Parcela: number;
		previsao: boolean;
		Tipo_Lancamento_Contabil: number;
		Valor: number;
	}
	interface EntradaProdutoItemTanqueRetorno {
		Codigo: number;
		Codigo_Produto: number;
		Codigo_Tanque: number;
		Contador: number;
		Descricao_Produto: string;
		Descricao_Tanque: string;
		Quantidade: number;
	}
	interface EntradaProdutoItensRetorno extends SiSMoura.Core.Common.Entity {
		Aliquota_Cofins: number;
		Aliquota_Icms: number;
		Aliquota_Ipi: number;
		Aliquota_Pis: number;
		Animal_Silvestre: boolean;
		Base_Cofins: number;
		Base_Icms_St: number;
		Base_Pis: number;
		Cfop: string;
		Codigo: number;
		Codigo_Localizacao: number;
		Codigo_Pedido_Compra: number;
		Codigo_Produto: number;
		Codigo_Produto_Fornecedor: string;
		Codigo_Unidade: number;
		Combustivel: boolean;
		Conta_Contabil: number;
		Conta_Contabil_Descricao: string;
		Conta_Contabil_Financeira: number;
		Contador: number;
		Cst: string;
		Custo: number;
		Custo_Calculado: number;
		Data_Validade: Date;
		Desconto_P: number;
		Descricao_Cor: string;
		Descricao_Localizacao: string;
		Descricao_Produto: string;
		Descricao_Unidade: string;
		Diferenca_Icms: number;
		Encargos_Financeiros: number;
		EntradaProdutoAjuste: SiSMoura.Core.Entity.Entrada_Produto_Ajustes;
		Fornecedor: number;
		Frete_Rateado: number;
		Icms_St_Un: number;
		Icms_Subst: number;
		IsCstRateio: boolean;
		MovEntradaDesag: SiSMoura.Core.Entity.Movimentacao_Entrada_Desagregacao[];
		Ncm: string;
		Pintar_Linha_Controlado: boolean;
		Porc_Base_Icms: number;
		Preco_Venda: number;
		ProdutoAnilhas: SiSMoura.Core.Entity.Entrada_Produto_Anilha[];
		Qtde_Conversao: number;
		Quantidade: number;
		Quantidade_Cx: number;
		Referencia: string;
		Seguro: number;
		St_Cofins: string;
		St_Cofins_Int: number;
		St_Ipi: string;
		St_Ipi_Int: number;
		St_Pis: string;
		St_Pis_Int: number;
		Tamanho: string;
		Tanque: number;
		Unidade_Conversao: string;
		Unitario_Conversao: number;
		Valor_Ajuste: number;
		Valor_Base_Icms: number;
		Valor_Bruto: number;
		Valor_Cofins: number;
		Valor_Desconto: number;
		Valor_Icms: number;
		Valor_Ipi: number;
		Valor_Pis: number;
		Valor_Total: number;
		Valor_Total_Dolar: number;
		Valor_Unit_Dolar: number;
		Valor_Unitario: number;
	}
	interface EntradaServicoRetorno {
		Aliq_Cofins: number;
		Aliq_Pis: number;
		Cfop: string;
		Cif_Fob: number;
		Codigo: number;
		Codigo_Servico: number;
		Cofins_V: number;
		Contador: number;
		Csll_Valor: number;
		Descricao_Servico: string;
		Descricao_Tipo_Servico: string;
		Icms_P: number;
		Icms_V: number;
		Inss_Valor: number;
		Irrf_Valor: number;
		Iss_P: number;
		Iss_V: number;
		Pis_V: number;
		Quantidade: number;
		St_Cofinsserv: string;
		St_Pisserv: string;
		Tipo_Servico: number;
		Valor_Total: number;
		Valor_Unitario: number;
	}
	interface Entrega extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Combustivel: number;
		Data: Date;
		Entrega_Custo: SiSMoura.Core.Entity.Entrega_Custo[];
		Entrega_Venda: SiSMoura.Core.Entity.Entrega_Venda[];
		Impresso: string;
		Km_Final: number;
		Km_Inicial: number;
		Motorista: number;
		Observacao: string;
		Placa: string;
		Qtde_Impresso: number;
		Situacao: number;
		Transportadora: number;
	}
	interface Entrega_Custo extends SiSMoura.Core.Common.Entity {
		Conta_Contabil: number;
		Entrega: number;
		Id: number;
		Item: number;
		Obs: string;
		Porcentagem: number;
		Valor: number;
	}
	interface Entrega_CustoRetorno {
		Cod_Conta_Contabil: number;
		Conta_Contabil: string;
		Entrega: number;
		Id: number;
		Item: number;
		Obs: string;
		Porcentagem: number;
		Valor: number;
	}
	interface Entrega_Parcial extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Cadastro: Date;
		Data_Entrega: Date;
		Entrega_Itens: SiSMoura.Core.Entity.Entrega_Parcial_Item[];
		Lista_Contas_Receber: SiSMoura.Core.Entity.Contas_Receber[];
		Orcamento: number;
		Usuario: number;
		Venda: number;
	}
	interface Entrega_Parcial_Item extends SiSMoura.Core.Common.Entity {
		Deposito: number;
		Entrega: number;
		Id: number;
		Item: number;
		Produto: number;
		Quantidade_Entregue: number;
	}
	interface Entrega_Situacao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Entrega_Venda extends SiSMoura.Core.Common.Entity {
		Entrega: number;
		Id: number;
		Orcamento: number;
		Ordem: number;
		Venda: number;
		Volume: number;
	}
	interface EscalaPeriodoSelecionadoRetorno {
		Animais_Servicos: number;
		Codigo_Alteracao: number;
		Profissional_Selecionado: number;
	}
	interface Escritorio extends SiSMoura.Core.Common.Entity {
		Cidade: number;
		Codigo: number;
		Ddd: string;
		Descricao: string;
		Telefone: string;
	}
	interface Estoque_Fechamento_Item extends SiSMoura.Core.Common.Entity {
		Assinatura_Digital_Registro: string;
		Custo_Medio: number;
		Custo_Medio_Sem_Imposto: number;
		Custo_Sem_Imposto: number;
		Data_Carga: Date;
		Deposito: number;
		Estoque_Fechamento: number;
		Id: number;
		Preco_Custo: number;
		Preco_Venda: number;
		Produto: number;
		Qtde: number;
	}
	interface EstornoConvenioRetorno {
		Cliente: string;
		Codigo_Receber: number;
		Convenio: number;
		Valor: number;
	}
	interface ExamesAtendimento {
		Atendimento: number;
		Calculo_Casas: number;
		Codigo_Atendimento_Exame: number;
		Codigo_Exame: number;
		Contador: number;
		Exame: string;
		Formula: string;
		Idade: string;
		Normal: string;
		Resultado: string;
		TipoExame: number;
		TipoValor: string;
		Unidade: string;
		Valor: string;
	}
	interface ExecucaoRelatorioRetorno {
		Dados: System.Collections.Generic.KeyValuePair<string, any>[][];
		Erro: boolean;
		Exception: string;
		QueryExecutada: string;
	}
	interface Farmacia_Emprestimo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data: Date;
		EmprestimoItem: SiSMoura.Core.Entity.Farmacia_Emprestimo_Item[];
		Farmacia: number;
		Hora: Date;
		Tipo: boolean;
	}
	interface Farmacia_Emprestimo_Item extends SiSMoura.Core.Common.Entity {
		Data_Baixa: Date;
		Emprestimo: number;
		Id: number;
		Produto: number;
		Quantidade: number;
	}
	interface Farmacia_Produto_Excipiente extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Excipiente: number;
		Prioridade: number;
		Produto: number;
	}
	interface Farmacia_Produto_Sinonimo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Contador: number;
		Descricao: string;
		Produto: number;
	}
	interface FarmaciaProdutoExcipienteRetorno {
		Codigo: number;
		Codigo_Excipiente: number;
		Codigo_Prioridade: number;
		Contador: number;
		Descricao_Excipiente: string;
		Descricao_Prioridade: string;
	}
	interface FatorConversaoUnidadeRetorno {
		Calculo: string;
		Fator: number;
		Preco_Custo: number;
		Preco_Venda: number;
		Unidade: string;
	}
	interface Fatura_Serie extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Fatura_Empresas: SiSMoura.Core.Entity.Fatura_Serie_Empresa[];
		Serie: string;
		Tipo_Documento: string;
	}
	interface Fatura_Serie_Empresa extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Empresa: number;
		Serie_Fatura: number;
	}
	interface Faturamento_Agrupado extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Cadastro: Date;
	}
	interface Fechamento_Convenio extends SiSMoura.Core.Common.Entity {
		Arquivo_Fechamento: boolean;
		Codigo: number;
		Conta_Receber: number;
		Convenio: number;
		Data_Fechamento: Date;
		Data_Vencimento: Date;
		Desconto_Fechamento: number;
		Juros_Fechamento: number;
		Valor_Fechamento: number;
	}
	interface FechamentoConvenioRetorno {
		Acumulado: number;
		Codigo_Cliente: number;
		Conta_Receber: number;
		Data_Emissao: Date;
		Data_Vencimento: Date;
		Nome_Cliente: string;
		Numero_Documento: number;
		Valor: number;
	}
	interface Feriado_Ponto extends SiSMoura.Core.Common.Entity {
		Cidades: SiSMoura.Core.Entity.Feriado_Ponto_Cidade[];
		Data: Date;
		Descricao: string;
		Id: number;
		Tipo: string;
	}
	interface Feriado_Ponto_Cidade extends SiSMoura.Core.Common.Entity {
		Cidade: number;
		Codigo: number;
		Feriado_Ponto: number;
	}
	interface Filtro_Relacao extends SiSMoura.Core.Common.Entity {
		Campos: SiSMoura.Core.Entity.Filtro_Relacao_Campo[];
		Codigo: number;
		Data_Cadastro: Date;
		Tela: string;
		Usuario: number;
	}
	interface Filtro_Relacao_Campo extends SiSMoura.Core.Common.Entity {
		Campo: string;
		Codigo: number;
		Componente: string;
		Filtro: number;
		Valor: string;
	}
	interface Financeiro_Aplicacao extends SiSMoura.Core.Common.Entity {
		Aplicacao_Parcelas: SiSMoura.Core.Entity.Financeiro_Aplicacao_Parcela[];
		Codigo: number;
		Conta_Corrente_Destino: number;
		Conta_Corrente_Origem: number;
		Data: Date;
		Data_Parcela: Date;
		Dias: number;
		Empresa: number;
		Empresa_Destino: number;
		Fornecedor: number;
		Juros: number;
		Parcelas: number;
		Tipo: number;
		Tipo_Captacao: number;
		Valor: number;
	}
	interface Financeiro_Aplicacao_Parcela extends SiSMoura.Core.Common.Entity {
		Cod_Aplicacao: number;
		Codigo: number;
		Conta_Pagar: number;
		Lancamento_Entrada: number;
		Lancamento_Saida: number;
		Parcela: number;
		Valor: number;
		Vencimento: Date;
	}
	interface Financeiro_Log_Email extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Cliente: number;
		Data_Executou: Date;
		Email_Destino: string;
		Issucesso: boolean;
		Mensagem_Erro: string;
		Tipo_Email: number;
	}
	interface Financeiro_Modelo_Documento extends SiSMoura.Core.Common.Entity {
		Assunto: string;
		Codigo: number;
		Descricao: string;
		Mensagem: string;
	}
	interface Financeiro_Tipo_Aplicacao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Fiscal_Codigo_Receita extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Receita: string;
		Descricao: string;
		Uf: string;
		Validade_Final: Date;
		Validade_Inicial: Date;
	}
	interface Fiscal_Dapi_Compensacao_Creditos extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Lancamento: number;
		Data_Emissao: Date;
		Data_Visto: Date;
		Inscricao_Estadual: string;
		Nota_Fiscal: number;
		Serie: string;
		Valor: number;
	}
	interface Fiscal_Dapi_Creditos_Recebidos extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Lancamento: number;
		Data_Emissao: Date;
		Data_Visto: Date;
		Inscricao_Estadual: string;
		Motivo: string;
		Nota_Fiscal: number;
		Serie: string;
		Uf: string;
		Valor: number;
	}
	interface Fiscal_Dapi_Creditos_Transferidos extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Lancamento: number;
		Data_Emissao: Date;
		Data_Visto: Date;
		Inscricao_Estadual: string;
		Motivo: string;
		Nota_Fiscal: number;
		Serie: string;
		Uf: string;
		Valor: number;
	}
	interface Fiscal_Dapi_Estorno_Creditos extends SiSMoura.Core.Common.Entity {
		Auto_Infracao: string;
		Codigo: number;
		Codigo_Estorno: string;
		Codigo_Lancamento: number;
		Data_Emissao: Date;
		Nota_Fiscal: number;
		Serie: string;
		Valor: number;
	}
	interface Fiscal_Dapi_Estorno_Debitos extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Lancamento: number;
		Data_Emissao: Date;
		Justificativa: string;
		Motivo: string;
		Nota_Fiscal: number;
		Serie: string;
		Valor: number;
	}
	interface Fiscal_Dapi_Incentivo extends SiSMoura.Core.Common.Entity {
		Aliquota: number;
		Codigo: number;
		Codigo_Lancamento: number;
		Estorno_Saldo: number;
		Saldo_Anterior: number;
		Tipo_Incentivo: number;
		Valor_Deduzir: number;
	}
	interface Fiscal_Dapi_Incentivo_Detalhe extends SiSMoura.Core.Common.Entity {
		Certificado_Aprovacao: string;
		Codigo: number;
		Codigo_Incentivo: number;
		Data_Autorizacao: Date;
		Valor_Incentivado: number;
	}
	interface Fiscal_Dapi_Remetente_Creditos extends SiSMoura.Core.Common.Entity {
		Cod_Identificador: number;
		Codigo: number;
		Codigo_Lancamento: number;
		Data_Emissao: Date;
		Data_Visto: Date;
		Inscricao_Estadual: string;
		Nota_Fiscal: number;
		Serie: string;
		Valor: number;
	}
	interface Fiscal_Dapi_Ressarcimento_St extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Lancamento: number;
		Data_Emissao: Date;
		Data_Visto: Date;
		Motivo: string;
		Nota_Fiscal: number;
		Serie: string;
		Valor: number;
	}
	interface Fiscal_Dapi_Utilizacao_Creditos extends SiSMoura.Core.Common.Entity {
		Cod_Identificador: number;
		Codigo: number;
		Codigo_Lancamento: number;
		Data_Emissao: Date;
		Data_Visto: Date;
		Motivo: string;
		Nota_Fiscal: number;
		Serie: string;
		Valor: number;
	}
	interface Fiscal_Decreto extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Editavel: boolean;
	}
	interface Fiscal_Duplicata extends SiSMoura.Core.Common.Entity {
		Ate: Date;
		Cancelada_Data: Date;
		Cliente: number;
		Codigo: number;
		Condicoes: string;
		Controle: string;
		DadosClientes: SiSMoura.Core.Entity.Pessoa[];
		Desconto: number;
		Duplicata: number;
		Emissao: Date;
		Fatura: number;
		Nf: number;
		Parcela: number;
		Sobre: number;
		Ultima_Impressao: Date;
		Valor: number;
		Valor_Fatura: number;
		Vencimento: Date;
		Venda: number;
	}
	interface Fiscal_Grupo_Cliente extends SiSMoura.Core.Common.Entity {
		Calcular_Iva: string;
		Codigo: number;
		Descricao: string;
	}
	interface Fiscal_Grupo_Produto extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Fiscal_Mdfe extends SiSMoura.Core.Common.Entity {
		Carrega_Posterior: boolean;
		Chave_Acesso: string;
		Codigo: number;
		CodigoBarras: System.Drawing.Image;
		Data_Emissao: Date;
		Data_Inicio_Viagem: Date;
		Empresa: number;
		FiscalMdfeXML: SiSMoura.Core.Entity.Fiscal_Mdfe_XML[];
		Formulario: number;
		Modalidade: SiSMoura.Core.Entity.Fiscal_Mdfe_Enum.Modalidade;
		Peso_Carga: number;
		Qtde_CTe_Ref: number;
		Qtde_NF_Ref: number;
		Qtde_NFe_Ref: number;
		Serie: number;
		Situacao: string;
		UN_Medida: string;
		Valor_Total: number;
	}
	interface Fiscal_Mdfe_Aquaviario extends SiSMoura.Core.Common.Entity {
		cEmbar: string;
		Codigo: number;
		cPrtDest: string;
		cPrtEmb: string;
		irin: string;
		ListaCargaVazia: SiSMoura.Core.Entity.FiscalMDFeCargaVaziaRetorno[];
		ListaCarregamento: SiSMoura.Core.Entity.FiscalMDFeCarregamentoRetorno[];
		ListaComboio: SiSMoura.Core.Entity.FiscalMDFeComboioRetorno[];
		ListaDescarregamento: SiSMoura.Core.Entity.FiscalMDFeDescarregamentoRetorno[];
		nViag: number;
		prtTrans: string;
		tpEmb: number;
		tpNav: SiSMoura.Core.Entity.Fiscal_Mdfe_Enum.Tipo_Navegacao;
		xEmbar: string;
	}
	interface Fiscal_Mdfe_Rodoviario extends SiSMoura.Core.Common.Entity {
		capKG: number;
		capM3: number;
		codAgPorto: string;
		Codigo: number;
		CodigoInterno: string;
		CPFCNPJ: string;
		IE: string;
		ListaCIOT: SiSMoura.Core.Entity.FiscalMDFeCIOTRetorno[];
		ListaCondutor: SiSMoura.Core.Entity.FiscalMDFeCNPJRetorno[];
		ListaContratantes: SiSMoura.Core.Entity.FiscalMDFeContratanteRetorno[];
		ListaPedagio: SiSMoura.Core.Entity.FiscalMDFeValePedagioRetorno[];
		ListaReboque: SiSMoura.Core.Entity.FiscalMDFeReboqueRetorno[];
		placa: string;
		prop: boolean;
		RENAVAM: string;
		RNTRC: string;
		RNTRCProp: string;
		tara: number;
		tpCar: number;
		tpProp: SiSMoura.Core.Entity.Fiscal_Mdfe_Enum.Tipo_Proprietario;
		tpRod: number;
		UF: string;
		UFProp: string;
		xNome: string;
	}
	interface Fiscal_Mdfe_XML extends SiSMoura.Core.Common.Entity {
		Cod_Fiscal_MDFe: number;
		Evento: string;
		Id: number;
		Protocolo_Evento: string;
		XML: string;
	}
	interface Fiscal_Ncm_Unidade_Tributavel extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Ncm: string;
		Unidade_Tributavel: string;
		Vigencia_Alteracao_Utrib: Date;
		Vigencia_Siscomex_Final: Date;
		Vigencia_Siscomex_Inicial: Date;
	}
	interface Fiscal_Nf extends SiSMoura.Core.Common.Entity {
		Artigo_Simples: string;
		Bairro: string;
		Base_icms: number;
		Base_Subst: number;
		Cancelada: boolean;
		Centro_Custo: number;
		Cep: string;
		Cfop: string;
		Cfop2: string;
		Chave_Nf_Referenciada: string;
		ChavesReferenciadas: SiSMoura.Core.Entity.FiscalNFChaveReferenciaRetorno[];
		Codigo: number;
		Codigo_Cliente: number;
		Codigo_Fornecedor: number;
		Codigo_Saida: number;
		Codigo_Transportadora: number;
		Comprador: string;
		Configuracao_Lancamento: number;
		Consumidor_Final: string;
		Conta: number;
		Cpf_Cgc: string;
		Cpf_Cgc_Transp: string;
		Credito_Icms: boolean;
		Cupom_Fiscal: string;
		Dados_Adicionais: string;
		Dados_Adicionais_Fisco_Nfe: string;
		Dados_Adicionais_Manuais: string;
		Dados_Adicionais_Nfe: string;
		Dar_St: number;
		Data_Cancelado: Date;
		Data_Emissao: Date;
		Data_Es: Date;
		Data_Recebimento: Date;
		Deposito: number;
		Desconto: number;
		Descricao_Cf: string;
		Devolvida: string;
		E_S: string;
		Empresa: number;
		Endereco: string;
		Endereco_Cobranca: string;
		Endereco_Complemento: string;
		Endereco_Entrega: string;
		Endereco_Numero: string;
		Endereco_Transp: string;
		Especie: string;
		Estoque: number;
		Fatura_NFe: string;
		FaturaRetorno: SiSMoura.Core.Entity.FiscalNFPagamentoRetorno[];
		FicalNFChavesImportadas: SiSMoura.Core.Entity.Fiscal_Nf_Chave_Referencia[];
		FiscalNFPagamentos: SiSMoura.Core.Entity.Fiscal_Nf_Pagamento[];
		FiscalNFProdutoDI: SiSMoura.Core.Entity.Fiscal_Nf_Produto_Di[];
		FiscalNFProdutoII: SiSMoura.Core.Entity.Fiscal_Nf_Produto_Ii[];
		FiscalNFProdutos: SiSMoura.Core.Entity.Fiscal_Nf_Produto[];
		FiscalNFServicos: SiSMoura.Core.Entity.Fiscal_Nf_Servico[];
		FiscalNFVendas: SiSMoura.Core.Entity.Fiscal_Nf_Venda[];
		Fone: string;
		Fone_Ddd: string;
		Fone_Numero: string;
		Formulario: number;
		Frete: number;
		Hora_Emissao: Date;
		Hora_Saida: Date;
		Ie: string;
		Ie_Transp: string;
		Impressao: string;
		Ipi: number;
		Local_Embarque: string;
		Marca: string;
		Mensagem: string;
		Mensagem_Ibpt: string;
		Modelo: number;
		Modelo_Nf: number;
		Municipio: string;
		Municipio_Transp: string;
		Natureza: number;
		Natureza_Operacao_Nfe: string;
		Nf_Referenciada: number;
		NFCe: SiSMoura.Core.Entity.Fiscal_Nfce;
		NFe: SiSMoura.Core.Entity.Fiscal_Nfe[];
		Nome: string;
		Numero: string;
		Outras_Despesas: number;
		Pedido_Cliente: string;
		Peso_Bruto: number;
		Peso_Liquido: number;
		Placa: string;
		ProdutosRetorno: SiSMoura.Core.Entity.FiscalNFProdutoRetorno[];
		Qtde: number;
		Qtde_Transp: number;
		Receber: string;
		Redespacho: string;
		Rntc: string;
		Seguro: number;
		Serie: number;
		ServicosRetorno: SiSMoura.Core.Entity.FiscalNFServicoRetorno[];
		Subst_Tribut: string;
		Tara: number;
		Tipo: string;
		Tipo_Nf: number;
		Tipo_Nota: string;
		Tipo_Operacao: number;
		Tiponf: string;
		Total_IPI_Devolvido: number;
		Total_Iss: number;
		Total_Nf: number;
		Total_Produtos: number;
		Total_Servicos: number;
		Transportadora: string;
		Uf: string;
		Uf_Embarque: string;
		Uf_Placa: string;
		Uf_Transp: string;
		Valor_Desconto: number;
		Valor_F1: number;
		Valor_F2: number;
		Valor_F3: number;
		Valor_F4: number;
		Valor_icms: number;
		Valor_ICMS_Desonerado: number;
		Valor_Iss: number;
		Valor_Subst: number;
		Valor_Total_Servicos: number;
		Vencimento_F1: Date;
		Vencimento_F2: Date;
		Vencimento_F3: Date;
		Vencimento_F4: Date;
		Venda: number;
		VendasImportadas: string;
		Vendedor: number;
		Xml_Nfe: string;
	}
	interface Fiscal_Nf_Chave_Referencia extends SiSMoura.Core.Common.Entity {
		Chave_Acesso: string;
		Codigo: number;
		Codigo_Nf_Fiscal: number;
	}
	interface Fiscal_Nf_Pagamento extends SiSMoura.Core.Common.Entity {
		Agencia: number;
		Banco: number;
		Cheque: number;
		Cliente: number;
		Cod_Forma_Pagamento_XML: number;
		Cod_Ind_Pagamento_XML: number;
		Conta_Contabil: number;
		Conta_Corrente: string;
		Cpf: string;
		DDD_Titular: string;
		Doc_Bancario: number;
		Documento: string;
		Documento_Mercantil: number;
		Endereco_Titular: string;
		Fone_Titular: string;
		Forma_Pagamento: number;
		Id: number;
		Linha: number;
		Nf: number;
		Nome_Titular: string;
		Origem: string;
		Parcela: string;
		Tipo: string;
		Troco: number;
		Valor: number;
		Vencimento: Date;
	}
	interface Fiscal_Nf_Produto extends SiSMoura.Core.Common.Entity {
		Aliquota_Cofins: number;
		Aliquota_FCP: number;
		Aliquota_FCP_ST: number;
		Aliquota_Pis: number;
		Base_Cofins: number;
		Base_Icms: number;
		Base_Icms_St: number;
		Base_Pis: number;
		Base_St_060: number;
		Cest: string;
		Cfop: string;
		Classificacao_Fiscal: string;
		Codif: string;
		Codigo: number;
		Codigo_Barra: string;
		Codigo_Beneficio_Fiscal: string;
		Dar_St: number;
		Dar_St_Valor: number;
		Desconto: number;
		Descricao: string;
		Embalagem: number;
		Fabricacao: Date;
		Icms: number;
		Icms_St: number;
		Icms_St_060: number;
		Inserido_Manualmente: boolean;
		Ipi: number;
		Item: number;
		Iva: number;
		Lote: string;
		Motivo_Desoneracao_ICMS: number;
		Ncm: string;
		Nf: number;
		Observacao: string;
		Pedido_Compra_Item: number;
		Pedido_Compra_Numero: string;
		Percentual_IPI_Devolvido: number;
		Porc_Base_Icms: number;
		Porcentagem_Credito_Sn: number;
		Preco_Maximo: number;
		Produto: number;
		ProdutoAnilhas: SiSMoura.Core.Entity.Fiscal_Nf_Produto_Anilha[];
		Qtde_Ant: number;
		Quantidade: number;
		Situacao_Tributaria: string;
		St_Cofins: number;
		St_Ipi: string;
		St_Pis: number;
		Total: number;
		Unidade: string;
		Unitario: number;
		Validade: Date;
		Valor_Ant: number;
		Valor_Cofins: number;
		Valor_Credito_Sn: number;
		Valor_FCP: number;
		Valor_FCP_ST: number;
		Valor_Frete: number;
		Valor_Icms: number;
		Valor_Icms_St: number;
		Valor_Ipi: number;
		Valor_IPI_Devolvido: number;
		Valor_Outros: number;
		Valor_Pis: number;
		Valor_Total_Tributado: number;
		Vlr_ICMS_Desonerado: number;
	}
	interface Fiscal_Nf_Produto_Anilha extends SiSMoura.Core.Common.Entity {
		Anilha: string;
		CodAnilha: number;
		Codigo: number;
		Codigo_NF_Produto: number;
		NF: number;
		Produto: number;
	}
	interface Fiscal_Nf_Produto_Di extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Exportador: string;
		Codigo_Nf: number;
		Data_Aduaneiro: Date;
		Data_Registro: Date;
		FiscalNFProdutoDIAdicao: SiSMoura.Core.Entity.Fiscal_Nf_Produto_Di_Adicao[];
		Local: string;
		Numero_Di: string;
		Produto: number;
		Uf: string;
	}
	interface Fiscal_Nf_Produto_Di_Adicao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Di: number;
		Codigo_Fabricante: string;
		Desconto: number;
		Numero: number;
	}
	interface Fiscal_Nf_Produto_Ii extends SiSMoura.Core.Common.Entity {
		Base_Ii: number;
		Codigo_Nf: number;
		Despesas_Aduaneiras: number;
		ID: number;
		Produto: number;
		Valor_Ii: number;
		Valor_Iof: number;
	}
	interface Fiscal_Nf_Servico extends SiSMoura.Core.Common.Entity {
		Aliquota_Cofins: number;
		Aliquota_Pis: number;
		Cfop: string;
		Codigo: number;
		Desconto: number;
		Desconto_Porcentagem: number;
		Id: number;
		Iss: number;
		Nf: number;
		Qtde: number;
		Servico: string;
		St_Cofins: number;
		St_Pis: number;
		Total: number;
		Unitario: number;
		Valor_Cofins: number;
		Valor_Iss: number;
		Valor_Pis: number;
	}
	interface Fiscal_Nf_Venda extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Nf: number;
		Venda: number;
		VendaEntity: SiSMoura.Core.Entity.Venda;
	}
	interface Fiscal_Nfce extends SiSMoura.Core.Common.Entity {
		Ambiente: string;
		Chave_Acesso: string;
		Codigo: number;
		Codigo_Fiscal_Nf: number;
		Data_Arquivo: Date;
		Data_Autorizacao: Date;
		Data_Envio: Date;
		Data_Situacao: Date;
		Digest_Envio: string;
		Digito_Chave: number;
		Empresa: number;
		Mensagem_Envio: string;
		Nf: number;
		Nome_Arquivo: string;
		Protocolo_Autorizacao: string;
		Protocolo_Envio: string;
		Situacao: string;
	}
	interface Fiscal_Nfe extends SiSMoura.Core.Common.Entity {
		Ambiente: string;
		Arquivo_Carta_Correcao: string;
		Chave_Acesso: string;
		Cod_Evento_Carta_Correcao: number;
		Codigo: number;
		Codigo_Fiscal_Nf: number;
		Codigo_Interno: number;
		CodigoBarras: System.Drawing.Image;
		Data_Arquivo: Date;
		Data_Autorizacao: Date;
		Data_Envio: Date;
		Data_Envio_Email: Date;
		Data_Situacao: Date;
		Digest_Envio: string;
		Digito_Chave: number;
		Email_Enviado_Para: string;
		Empresa: number;
		Mensagem_Envio: string;
		Nf: number;
		Nome_Arquivo: string;
		Protocolo_Autorizacao: string;
		Protocolo_Envio: string;
		Protocolo_Evento: string;
		Situacao: string;
	}
	interface Fiscal_Nfse extends SiSMoura.Core.Common.Entity {
		Aliquotaservico: number;
		Ambiente: number;
		Bairro: string;
		Basecalculo: number;
		Cancelado: string;
		Cep: string;
		Cidade: number;
		Cidadeoperacao: number;
		Cnae: string;
		Cod_Tributacao: string;
		Codart: string;
		Codigo: number;
		Codigocliente: number;
		Codobra: string;
		Codservico: string;
		Codverificacaonfse: string;
		Cofins: number;
		Complemento: string;
		Contrato: number;
		Cpfcnpj: string;
		Csll: number;
		Dataemissao: Date;
		Ddd1: number;
		Desccondicionado: number;
		Descincondicionado: number;
		Descricaoatividade: string;
		Descricaoservico: string;
		Email: string;
		Empresa: number;
		Endereco: string;
		Im_Tomador: string;
		Inss: number;
		Ir: number;
		Isspagar: number;
		Issretido: boolean;
		Localoperacao: number;
		Nomecliente: string;
		Numero: string;
		Numeronfse: number;
		Numerorps: number;
		Outrasretencoes: number;
		Pis: number;
		Protocolo: string;
		Protocolo_Saovicente: string;
		Rg: string;
		Serie: number;
		Situacaolote: number;
		Telefone: string;
		Tipo_Importacao: number;
		Tipotomador: number;
		Valor: number;
		Valordeducao: number;
		Valorissretido: number;
		Valorliquido: number;
		Venda: number;
		Xmlgerado: boolean;
	}
	interface Fiscal_Nfse_Parametros extends SiSMoura.Core.Common.Entity {
		Atendimento_Pet: boolean;
		Codigo: number;
		Contratos: boolean;
		Empresa: number;
		Etransp_Codigo_Contribuinte: string;
		Etransp_Cpf_Responsavel: string;
		Etransp_Email_Responsavel: string;
		Etransp_Login: string;
		Etransp_Movimento_Prestados: string;
		Etransp_Movimento_Tomados: string;
		Etransp_Nome_Responsavel: string;
		Exibir_Msg_Simples: boolean;
		Nova_Lima_Frase: string;
		Nova_Lima_Senha: string;
		Orcamento: boolean;
		OS: boolean;
		Osasco_Chave_Autenticacao: string;
		Vendas: boolean;
	}
	interface Fiscal_Outros_Lancamentos extends SiSMoura.Core.Common.Entity {
		Ajuste: number;
		Ajustes_Contabil: SiSMoura.Core.Entity.Fiscal_Tipo_Ajuste_Contabil;
		Codigo: number;
		Creditar: number;
		Data: Date;
		Debitar: number;
		Descricao: string;
		Descricao_Historico: string;
		Descricao_Ocorrencia: string;
		Empresa: number;
		Fundamentacao_Legal: string;
		Historico: number;
		Tipo_Credito: number;
		Tipo_Debito: number;
		Tipo_Deducao: number;
		Valor: number;
	}
	interface Fiscal_Outros_Lancamentos_Cr25 extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Lancamento: number;
		IE_Centralizador: string;
		Valor_Transferencia: number;
	}
	interface Fiscal_Outros_Lancamentos_Cr26 extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Lancamento: number;
		Final_Periodo: Date;
		IE_Substituto: string;
		Inicio_Periodo: Date;
		Numero_NF: number;
		Valor_NF: number;
	}
	interface Fiscal_Outros_Lancamentos_Cr27 extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Lancamento: number;
		IE_Substituido: string;
		Numero_NF: number;
		Valor_NF: number;
	}
	interface Fiscal_Outros_Lancamentos_Cr28 extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Lancamento: number;
		Valor: number;
		Visto_Eletronico: string;
	}
	interface Fiscal_Plano_Contas_Sped extends SiSMoura.Core.Common.Entity {
		Cnpj: string;
		Codigo: number;
		Conta_Contabil: string;
		Conta_Contabil_Rfb: string;
		Data: Date;
		Descricao: string;
		Empresa: number;
		Natureza: string;
		Nivel: number;
		Tipo: string;
	}
	interface Fiscal_Regra_Imposto extends SiSMoura.Core.Common.Entity {
		Aliquota_Cofins_Entrada: number;
		Aliquota_Cofins_P: number;
		Aliquota_Cofins_R: number;
		Aliquota_FCP: number;
		Aliquota_FCP_ST: number;
		Aliquota_Icms: number;
		Aliquota_Icms_St: number;
		Aliquota_Interna_ICMS: number;
		Aliquota_Ipi: number;
		Aliquota_Ipi_Saida: number;
		Aliquota_Issqn: number;
		Aliquota_Pis_Entrada: number;
		Aliquota_Pis_P: number;
		Aliquota_Pis_R: number;
		Base_Cofins: number;
		Base_Cofins_Entrada: number;
		Base_Icms: number;
		Base_Icms_St: number;
		Base_Pis: number;
		Base_Pis_Entrada: number;
		Calcular_St_Iva: boolean;
		Cfop: string;
		Cfop_Entrada: string;
		CFOP_Entrada_Devolucao: string;
		Cfop_Servico: string;
		Classe_Ipi: string;
		Cod_Servico_Iss: string;
		Cod_Suframa: string;
		Codigo: number;
		Codigo_Enquadramento_Ipi: string;
		Codigo_Enquadramento_Ipi_Legal: string;
		Codigo_Selo_Controle: string;
		Contador: number;
		Csosn: string;
		Csosn_Entrada: string;
		Cst: string;
		Cst_Entrada: string;
		Dar_St: number;
		Data_Carga: Date;
		Decreto: number;
		Exigibilidade_Iss: number;
		Grupo_Fiscal_Cliente: number;
		Incentivo_Fiscal_Iss: number;
		IPI_Devolvido_Base_ICMS: boolean;
		Ipi_Zerado: boolean;
		isIMendes: boolean;
		ISS_Retido: boolean;
		Iva: number;
		Modalidade_St: number;
		Natureza_Receita_Isenta_PISCOFINS: number;
		Preco_Medio_Antigo: number;
		Qtde_Embalagem: number;
		Qtde_Selo_Controle: string;
		Sempre_Calcular_Ipi: string;
		St_Cofins: number;
		St_Cofins_Entrada: number;
		St_Ipi: string;
		St_Ipi_Saida: string;
		St_Pis: number;
		St_Pis_Entrada: number;
		Taxa_Tributaria: number;
		Tipo_Calculo_Cofins: string;
		Tipo_Calculo_Ipi: string;
		Tipo_Calculo_Ipi_Saida: string;
		Tipo_Calculo_Pis: string;
		Tipo_Regra_Imposto: number;
		Tributacao_Issqn: string;
		Uf_Destino: string;
		Uf_Origem: string;
		Valor_Unidade_Ipi: number;
		Valor_Unidade_Ipi_Saida: number;
	}
	interface Fiscal_Regra_Imposto_Geral extends SiSMoura.Core.Common.Entity {
		Aliquota_Cofins_Entrada: number;
		Aliquota_Cofins_P: number;
		Aliquota_Cofins_R: number;
		Aliquota_Ipi: number;
		Aliquota_Ipi_Saida: number;
		Aliquota_Issqn: number;
		Aliquota_Pis_Entrada: number;
		Aliquota_Pis_P: number;
		Aliquota_Pis_R: number;
		Base_Cofins: number;
		Base_Cofins_Entrada: number;
		Base_Pis: number;
		Base_Pis_Entrada: number;
		Cfop_Servico: string;
		Classe_Ipi: string;
		Cod_Servico_Iss: string;
		Cod_Suframa: string;
		Codigo_Enquadramento_Ipi: string;
		Codigo_Enquadramento_Ipi_Legal: string;
		Codigo_Selo_Controle: string;
		Dar_St: number;
		Data_Carga: Date;
		Decreto: number;
		Exigibilidade_Iss: number;
		Grupo_Fiscal_Cliente: number;
		Id: number;
		Incentivo_Fiscal_Iss: number;
		IPI_Devolvido_Base_ICMS: boolean;
		Ipi_Zerado: boolean;
		ISS_Retido: boolean;
		Preco_Medio_Antigo: number;
		Qtde_Selo_Controle: string;
		regras: SiSMoura.Core.Entity.Fiscal_Regra_Imposto[];
		Sempre_Calcular_Ipi: boolean;
		St_Cofins: number;
		St_Cofins_Entrada: number;
		St_Ipi: string;
		St_Ipi_Saida: string;
		St_Pis: number;
		St_Pis_Entrada: number;
		Taxa_Tributaria: number;
		Tipo_Calculo_Cofins: string;
		Tipo_Calculo_Ipi: string;
		Tipo_Calculo_Ipi_Saida: string;
		Tipo_Calculo_Pis: string;
		Tipo_Regra_Imposto: number;
		Tributacao_Issqn: string;
		Valor_Unidade_Ipi: number;
		Valor_Unidade_Ipi_Saida: number;
	}
	interface Fiscal_Saldos extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Credito: number;
		Debito: number;
		Deducao: number;
		Empresa: number;
		Imposto: number;
		Imposto_Recolher: number;
		Outros_ICMS_Devido: number;
		Periodo: Date;
		Saldo_Credor: number;
		Saldo_Devedor: number;
		Tipo: string;
	}
	interface Fiscal_Serie_Nf extends SiSMoura.Core.Common.Entity {
		Ambiente: string;
		Codigo: number;
		Data_carga: Date;
		Descricao: string;
		Fiscal_Nf_Config_Impressao: number;
		Modelo: number;
		Serie_Nfp: string;
		Serie_Sped: string;
		SeriesEmpresa: SiSMoura.Core.Entity.Fiscal_Serie_Nf_Empresa[];
	}
	interface Fiscal_Serie_Nf_Empresa extends SiSMoura.Core.Common.Entity {
		Cod_Serie_Nf: number;
		Codigo: number;
		DescEmpresa: string;
		Empresa: number;
		Modelo: number;
		Serie: string;
		Ultima_Nota: number;
	}
	interface Fiscal_Simples_Nacional extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Empresa: number;
		Icms: number;
		Vigencia: Date;
	}
	interface Fiscal_Tipo_Ajuste extends SiSMoura.Core.Common.Entity {
		Ajustes_Contabil: SiSMoura.Core.Entity.Fiscal_Tipo_Ajuste_Contabil[];
		Codigo: number;
		Codigo_Ajuste: string;
		Codigo_Subitem_GIA: string;
		Descricao: string;
		Imposto: number;
		Operacao: string;
		Tipo_Operacao: string;
	}
	interface Fiscal_Tipo_Ajuste_Contabil extends SiSMoura.Core.Common.Entity {
		Cod_Ajuste: number;
		Codigo: number;
		Conta_Credito: number;
		Conta_Debito: number;
		Empresa: number;
		Historico: number;
	}
	interface Fiscal_Tipo_Ajuste_ContabilRetorno extends SiSMoura.Core.Common.Entity {
		Cod_Ajuste: number;
		Codigo: number;
		Conta_Credito: number;
		Conta_Credito_Exibicao: string;
		Conta_Debito: number;
		Conta_Debito_Exibicao: string;
		Empresa: number;
		Empresa_Exibicao: string;
		Historico: number;
		Historico_Exibicao: string;
	}
	interface Fiscal_Tipo_AjusteRetorno {
		Codigo: number;
		Codigo_Ajuste: string;
		Codigo_Subitem_GIA: string;
		Conta_Credito: string;
		Conta_Debito: string;
		Descricao: string;
		Historico: string;
		Imposto: string;
		Operacao: string;
		Tipo_Operacao: string;
	}
	interface Fiscal_Tipo_Regra_Imposto extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Carga: Date;
		Descricao: string;
		Tipo: string;
	}
	interface FiscalCertificadoRetorno extends SiSMoura.Core.Common.Entity {
		Base64: string;
		ConteudoArquivo: number[];
		Nome: string;
		NomeAmigavel: string;
		NumeroSerial: string;
	}
	interface FiscalMDFeCargaVaziaRetorno {
		IdentCarga: string;
		Item: number;
		TipoCarga: SiSMoura.Core.Entity.Fiscal_Mdfe_Enum.Tipo_Unidade_Carga_Vazia;
	}
	interface FiscalMDFeCarregamentoRetorno {
		CodigoCarregamento: string;
		Item: number;
		NomeCarregamento: string;
	}
	interface FiscalMDFeCIOTRetorno {
		CIOT: string;
		CpfCnpj: string;
		ItemCIOT: number;
	}
	interface FiscalMDFeCNPJRetorno {
		CPF: string;
		Item: number;
		Nome: string;
	}
	interface FiscalMDFeComboioRetorno {
		Balsa: string;
		Comboio: string;
		Item: number;
	}
	interface FiscalMDFeContratanteRetorno {
		CpfCnpj: string;
		ItemContratante: number;
	}
	interface FiscalMDFeCTeRetorno {
		chCTe: string;
		IndReentrega: boolean;
		infUnidTransp: SiSMoura.Core.Entity.FiscalMDFeTransporteRetorno[];
		Item: number;
		quantTransporte: number;
		SegCodBarra: string;
	}
	interface FiscalMDFeDescarregamentoRetorno {
		CodigoDescarregamento: string;
		Item: number;
		NomeDescarregamento: string;
	}
	interface FiscalMDFeLacreRetorno {
		ItemLacre: number;
		Lacre: string;
	}
	interface FiscalMDFeMunRetorno {
		Item: number;
		Municipio: string;
		UF: string;
	}
	interface FiscalMDFeNFeRetorno {
		chNFe: string;
		IndReentrega: boolean;
		infUnidTransp: SiSMoura.Core.Entity.FiscalMDFeTransporteRetorno[];
		Item: number;
		quantTransporte: number;
	}
	interface FiscalMDFeReboqueRetorno {
		CapKG: number;
		CapM: number;
		CodigoProprietario: string;
		CpfCnpj: string;
		IE: string;
		Item: number;
		Nome: string;
		Placa: string;
		Propriedade: string;
		Proprietario: boolean;
		Renavam: string;
		RNTRC: number;
		Tara: number;
		TipoCarroceria: string;
		TipoProp: string;
		UF: string;
		UFVeiculo: string;
	}
	interface FiscalMDFeRefRetorno {
		chMDFe: string;
		IndReentrega: boolean;
		infUnidTransp: SiSMoura.Core.Entity.FiscalMDFeTransporteRetorno[];
		Item: number;
		quantTransporte: number;
	}
	interface FiscalMDFeSeguroRetorno {
		CNPJ_Seguradora: string;
		CPF_CNPJ_Responsavel: string;
		Item: number;
		Nome_Seguradora: string;
		Numero_Apolice: number;
		Numero_Averbacao: number;
		Responsavel_Seguro: number;
		Responsavel_Seguro_Descricao: string;
		Tipo_Responsavel: string;
	}
	interface FiscalMDFeTransporteRetorno {
		idUnidCarga: string;
		idUnidTransp: string;
		Item: number;
		lacUnidCarga: SiSMoura.Core.Entity.FiscalMDFeLacreRetorno[];
		lacUnidTransp: SiSMoura.Core.Entity.FiscalMDFeLacreRetorno[];
		qtCarga: number;
		qtdRat: number;
		qtLacres: number;
		tpUnidCarga: string;
		tpUnidTransp: SiSMoura.Core.Entity.Fiscal_Mdfe_Enum.Tipo_Unidade_Transporte;
	}
	interface FiscalMDFeUfRetorno {
		Item: number;
		UF: string;
	}
	interface FiscalMDFeValePedagioRetorno {
		CNPJfornecedor: string;
		CpfCnpjPagamento: string;
		Item: number;
		NComprovante: string;
		Valor: number;
	}
	interface FiscalMDFeXMLRetorno {
		Carrega_Posterior: boolean;
		Codigo: number;
		DadosAdicionaisContribuinte: string;
		DadosAdicionaisFisco: string;
		Empresa: number;
		ListaAutDownload: SiSMoura.Core.Entity.FiscalMDFeCNPJRetorno[];
		ListaCTe: SiSMoura.Core.Entity.FiscalMDFeCTeRetorno[];
		ListaLacre: SiSMoura.Core.Entity.FiscalMDFeLacreRetorno[];
		ListaMDFe: SiSMoura.Core.Entity.FiscalMDFeRefRetorno[];
		ListaNFe: SiSMoura.Core.Entity.FiscalMDFeNFeRetorno[];
		ListaSeguro: SiSMoura.Core.Entity.FiscalMDFeSeguroRetorno[];
		MunDescDocs: string;
		Municipio: string;
		Serie: number;
		tipoEmitente: number;
		tipoTrasportador: number;
		UFCarregamento: SiSMoura.Core.Entity.FiscalMDFeMunRetorno[];
		UFDescarregamento: SiSMoura.Core.Entity.FiscalMDFeMunRetorno[];
		UFDescDocs: string;
		UFFim: string;
		UFIni: string;
		UFPercuso: SiSMoura.Core.Entity.FiscalMDFeUfRetorno[];
	}
	interface FiscalNFChaveReferenciaRetorno {
		Chave_Acesso: string;
		Id: string;
		Item: number;
		Venda: number;
	}
	interface FiscalNFCupomVinculadoRetorno {
		COO: number;
		Id: string;
		Item: number;
		Numero_ECF: number;
		Numero_Serie: string;
		Venda: number;
	}
	interface FiscalNFeEnvioRetorno {
		CodCertificado: string;
		MensagemRetorno: string;
		SituacaoAtual: string;
	}
	interface FiscalNFGradeEventoRetorno {
		Data: Date;
		Evento: string;
		Id: number;
		Protocolo: number;
	}
	interface FiscalNFImportacaoRetorno {
		Codigo: number;
		dataDesembaraco: string;
		dataRegistro: string;
		Especie: string;
		EspecieTransp: string;
		Formulario: number;
		LocalImportacao: string;
		Marca: string;
		NFe: SiSMoura.Core.Entity.Fiscal_Nfe;
		PesoBrutoXml: number;
		PesoLiquidoXml: number;
		Produtos: SiSMoura.Core.Entity.FiscalProdutoImportacao[];
		QuantidadeTransp: string;
		UFImportacao: string;
		ValorFreteXml: number;
		ValorProdutosXml: number;
		ValorTotalXml: number;
	}
	interface FiscalNFOrcamentoRetorno {
		Cliente: string;
		CodCliente: number;
		Data: Date;
		ID: number;
		Nota_Fiscal: number;
		Orcamento: number;
		Situacao: string;
		Valor_Acrescimo: number;
		Valor_Desconto: number;
		Valor_Produtos: number;
		Valor_Total: number;
		Vendedor: string;
	}
	interface FiscalNFPagamentoRetorno {
		Conta_Contabil: number;
		Conta_Corrente: string;
		Documento_Mercantil: string;
		Forma_Pagamento: string;
		Numero_Documento: string;
		Origem: string;
		Parcela: string;
		Valor: number;
		Vencimento: Date;
	}
	interface FiscalNFProdutoRetorno {
		Adicao: string;
		Aliquota_Cofins: number;
		Aliquota_FCP: number;
		Aliquota_FCP_ST: number;
		Aliquota_ICMS: number;
		Aliquota_ICMS_ST: number;
		Aliquota_II: number;
		Aliquota_IPI: number;
		Aliquota_Pis: number;
		Base_Cofins: number;
		Base_Icms: number;
		Base_Icms_ST: number;
		Base_II: number;
		Base_IPI: number;
		Base_Pis: number;
		CEST: string;
		Cfop: string;
		Cod_enquadramento_IPI: string;
		CodExportador: number;
		CodFabricante: string;
		Codigo_Beneficio_Fiscal: string;
		Codigo_Produto: number;
		Cst: string;
		dataDesembaraco: string;
		DataRegistro: string;
		DescontoImportacao: number;
		Descricao_Produto: string;
		Id: string;
		Item: number;
		IVA: number;
		Local: string;
		Modalidade_Base_ICMS: number;
		Modalidade_Base_ICMS_ST: number;
		Motivo_Desoneracao: number;
		Motivo_Desoneracao_ICMS: number;
		Motivo_Desoneracao_ICMS_Descricao: string;
		Ncm: string;
		NumeroDI: string;
		Percentual_IPI_Devolvido: number;
		Porcentagem_Base_ICMS_ST: number;
		Porcentagem_Credito_SN: number;
		ProdutoAnilhas: SiSMoura.Core.Entity.Fiscal_Nf_Produto_Anilha[];
		Quantidade: number;
		RegraImposto: SiSMoura.Core.Entity.Fiscal_Regra_Imposto;
		St_Cofins: string;
		St_Ipi: string;
		St_Pis: string;
		UF: string;
		Unidade: string;
		Valor_Cofins: number;
		Valor_Credito_SN: number;
		Valor_Desconto: number;
		Valor_Desconto_Porcentagem: number;
		Valor_FCP: number;
		Valor_FCP_ST: number;
		Valor_Icms: number;
		Valor_Icms_ST: number;
		Valor_II: number;
		Valor_Ipi: number;
		Valor_IPI_Devolvido: number;
		Valor_Outros: number;
		Valor_Pis: number;
		Valor_SubTotal: number;
		Valor_Total: number;
		Valor_Tributos: number;
		Valor_Unitario: number;
		ValorAliqEst: number;
		ValorAliqFed: number;
		ValorAliqMun: number;
		Vlr_ICMS_Desonerado: number;
	}
	interface FiscalNFServicoRetorno {
		Aliquota_Cofins: number;
		Aliquota_ISSQN: number;
		Aliquota_Pis: number;
		Base_Cofins: number;
		Base_ISSQN: number;
		Base_Pis: number;
		Cfop: string;
		Codigo_Produto: number;
		Descricao_Produto: string;
		Exigibilidade_ISS: number;
		Id: string;
		Incentivo_Fiscal: number;
		Item: number;
		Lista_Servico: string;
		Quantidade: number;
		St_Cofins: string;
		St_Pis: string;
		Valor_Cofins: number;
		Valor_Desconto: number;
		Valor_Desconto_Porcentagem: number;
		Valor_ISSQN: number;
		Valor_Outros: number;
		Valor_Pis: number;
		Valor_SubTotal: number;
		Valor_Total: number;
		Valor_Unitario: number;
	}
	interface FiscalNFVendaRetorno {
		Codigo_Cupom: number;
		Data: Date;
		ID: number;
		Tipo: string;
		Valor_Acrescimo: number;
		Valor_Desconto: number;
		Valor_Produtos: number;
		Valor_Total: number;
		Venda: number;
	}
	interface FiscalProdutoImportacao {
		Adicao: string;
		Aliquota_COFINS: number;
		Aliquota_ICMS: number;
		Aliquota_II: number;
		Aliquota_IPI: number;
		Aliquota_PIS: number;
		Base_COFINS: number;
		Base_ICMS: number;
		Base_II: number;
		Base_IPI: number;
		Base_PIS: number;
		CFOP: string;
		CodExportador: number;
		CodFabricante: string;
		Codigo_Fornecedor: number;
		Codigo_Produto: number;
		Contador: number;
		CST: string;
		dataDesembaraco: string;
		DataRegistro: string;
		DescontoImportacao: number;
		Descricao_Produto: string;
		Descricao_Produto_Fornecedor: string;
		Local: string;
		NCM: string;
		NumeroDI: string;
		Outras_Despesas: number;
		Quantidade: number;
		ST_COFINS: string;
		ST_IPI: string;
		ST_PIS: string;
		UF: string;
		Unidade: string;
		Valor_COFINS: number;
		Valor_FOB: number;
		Valor_Frete: number;
		Valor_ICMS: number;
		Valor_II: number;
		Valor_IPI: number;
		Valor_PIS: number;
		Valor_Siscomex: number;
		Valor_Total: number;
		Valor_Unitario: number;
	}
	interface Food_Combo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Inativo: boolean;
		Preco_Combo: number;
		Produto_Combo: number;
		Produto_Principal: number;
		ProdutosCombo: SiSMoura.Core.Entity.Food_Combo_Produto[];
		Qtde_Maxima_Acompanhamento: number;
		Qtde_Maxima_Bebida: number;
		Qtde_Maxima_Sobremesa: number;
		Qtde_Minima_Acompanhamento: number;
		Qtde_Minima_Bebida: number;
		Qtde_Minima_Sobremesa: number;
		Tipo: number;
	}
	interface Food_Combo_Produto extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Coluna: number;
		Combo: number;
		Linha: number;
		Produto: number;
		Somar_Valor: number;
	}
	interface Food_Cupom_Desconto extends SiSMoura.Core.Common.Entity {
		Atingir_Valor: number;
		Codigo: number;
		Data_Cadastro: Date;
		Data_Final_Cupom: Date;
		Data_Inicio_Cupom: Date;
		Descricao: string;
		Empresas: SiSMoura.Core.Entity.Food_Cupom_Desconto_Empresa[];
		Foto_Fundo_Cupom: number[];
		Foto_Fundo_Cupom_Convertida: string;
		IngredientesDobro: SiSMoura.Core.Entity.Food_Cupom_Desconto_Tipo[];
		N_Cupom: string;
		Porcentagem_Desconto_Final: number;
		Produtos: SiSMoura.Core.Entity.Food_Cupom_Desconto_Produto[];
		Tipo_Cupom_Desconto: number;
		Usuario_Cadastro: number;
	}
	interface Food_Cupom_Desconto_Empresa extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Cupom_Desconto: number;
		Empresa: number;
	}
	interface Food_Cupom_Desconto_Produto extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Cupom_Desconto: number;
		Preco: number;
		Produto: number;
	}
	interface Food_Cupom_Desconto_Tipo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Cupom_Desconto: number;
		Tipo: number;
	}
	interface Food_Fluxo extends SiSMoura.Core.Common.Entity {
		Altura_Botao_Modal_Sugestao: number;
		Codigo: number;
		Codigo_Tela: number;
		Descricao: string;
		Empresas: SiSMoura.Core.Entity.Food_Fluxo_Empresa[];
		Exibir_Visualizar_Remover: boolean;
		FluxoTelas: SiSMoura.Core.Entity.Food_Fluxo_Tela[];
		Img_Fundo_CPF_Nota: number[];
		Img_Fundo_CPF_Nota_Convertida: string;
		Img_Fundo_Digitar_CPF: number[];
		Img_Fundo_Digitar_CPF_Convertida: string;
		Img_Fundo_Modal_Pedido: number[];
		Img_Fundo_Modal_Pedido_Convertida: string;
		Img_Fundo_Sugestao: number[];
		Img_Fundo_Sugestao_Convertida: string;
		Inserir_CPF_Nota: boolean;
		Largura_Botao_Modal_Sugestao: number;
		Permitir_Remover_Acompanhamento_Combo: boolean;
		Quantidade_Maxima_Exclusao_Ingrediente_Combo: number;
		Tela_Busca_Pedido: number;
		Tela_Cadastro_Pedido: number;
		Tela_Cupom_Numerico: number;
		Tela_Editar_Pedido: number;
		Tela_Qrcode: number;
	}
	interface Food_Fluxo_Empresa extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Empresa: number;
		Fluxo: number;
	}
	interface Food_Fluxo_Tela extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Exibir_Sugestao: boolean;
		Fluxo: number;
		Posicao: number;
		Tela: number;
	}
	interface Food_Pedido_Favorito extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Cpf: string;
		Data_Cadastro: Date;
		Data_Nascimento: Date;
		Descricao_Pedido: string;
		Email: string;
		Empresa: number;
		Itens: SiSMoura.Core.Entity.Food_Pedido_Favorito_Item[];
		Nome: string;
		Telefone: string;
		Toten: number;
	}
	interface Food_Pedido_Favorito_Item extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Produto: number;
		Ordem: number;
		Pedido_Favorito: number;
		Quantidade: number;
	}
	interface Food_Produto extends SiSMoura.Core.Common.Entity {
		Data_Carga: Date;
		Descricao_Exibir: string;
		Foto: number[];
		Foto_Inferior: number[];
		Foto_Lateral: number[];
		Foto_Lateral_Flat: number[];
		Foto_Superior: number[];
		Issugestao: boolean;
		Ordem_Sugestao: number;
		Posicao: number;
		Posicao_Chapeiro_Fritadeira: number;
		Produto: number;
		Tempo: number;
		Tipo_Preparo: number;
		Tipo_Produto: number;
	}
	interface Food_Promocao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Cadastro: Date;
		Data_Final_Promocao: Date;
		Data_Inicio_Promocao: Date;
		Descricao: string;
		DiasSemana: SiSMoura.Core.Entity.Food_Promocao_Dia_Semana[];
		Empresas: SiSMoura.Core.Entity.Food_Promocao_Empresa[];
		Exibir_Informativo: boolean;
		Img_Informativo: number[];
		Img_Informativo_Convertida: string;
		Img_Retorno: number[];
		Img_Retorno_Convertida: string;
		Inativo: boolean;
		Porcentagem_Desconto: number;
		ProdutosRequisito: SiSMoura.Core.Entity.Food_Promocao_Requisito_Produto[];
		ProdutosRetorno: SiSMoura.Core.Entity.Food_Promocao_Retorno_Produto[];
		ProdutosRetornoPrecoDiferenciado: SiSMoura.Core.Entity.Food_Promocao_Retorno_Produto[];
		Requisito_Promocao: number;
		Retorno_Promocao: number;
		Tipo_Escolha_Retorno: number;
		TiposRequisito: SiSMoura.Core.Entity.Food_Promocao_Requisito_Tipo[];
		TiposRetorno: SiSMoura.Core.Entity.Food_Promocao_Retorno_Tipo[];
		Valor_Minimo_Pedido: number;
	}
	interface Food_Promocao_Dia_Semana extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Dia_Semana: number;
		Promocao: number;
	}
	interface Food_Promocao_Empresa extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Empresa: number;
		Promocao: number;
	}
	interface Food_Promocao_Requisito_Produto extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Produto: number;
		Promocao: number;
	}
	interface Food_Promocao_Requisito_Tipo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Promocao: number;
		Tipo: number;
	}
	interface Food_Promocao_Retorno_Produto extends SiSMoura.Core.Common.Entity {
		Altura_Botao_Modal_Retorno_Promocao: number;
		Codigo: number;
		Largura_Botao_Modal_Retorno_Promocao: number;
		Preco: number;
		Produto: number;
		Promocao: number;
		Quantidade: number;
	}
	interface Food_Promocao_Retorno_Tipo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Promocao: number;
		Tipo: number;
	}
	interface Food_Sequencia_Ingredientes extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Sequencia: number;
		SubGrupo: number;
		SubGrupoEntity: SiSMoura.Core.Entity.Subgrupo;
	}
	interface Food_Sincronizar_Venda_Totem extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Sincronizado: boolean;
		Venda: number;
	}
	interface Food_Tela extends SiSMoura.Core.Common.Entity {
		Altura_Botao_Avancar: number;
		Altura_Botao_Menu: number;
		Altura_Botao_Menu_Lateral: number;
		Altura_Botao_Modal: number;
		Altura_Botao_Modal_Adicionais: number;
		Altura_Botao_Pagamento: number;
		Altura_Botao_Rodape: number;
		Altura_Botao_Senha: number;
		Altura_Botao_Voltar: number;
		Altura_Img_Botao: number;
		Altura_Titulo: number;
		Botao_Menu_Acompanhamento: number[];
		Botao_Menu_Acompanhamento_Convertida: string;
		Botao_Menu_Buscar_Pedido: number[];
		Botao_Menu_Buscar_Pedido_Convertida: string;
		Botao_Menu_Combo: number[];
		Botao_Menu_Combo_Convertida: string;
		Botao_Menu_Ingrediente: number[];
		Botao_Menu_Ingrediente_Convertida: string;
		Botao_Menu_QRCode: number[];
		Botao_Menu_QRCode_Convertida: string;
		Codigo: number;
		Colunas: number;
		Cor_Borda_Campo: string;
		Cor_Borda_Rodape: string;
		Cor_Descricao_Rodape: string;
		Cor_Fundo_Botao_Rodape: string;
		Cor_Fundo_Senha: string;
		Cor_Linha_Impar: string;
		Cor_Linha_Par: string;
		Cor_Nome_Produto: string;
		Cor_Nome_Produto_Modal_Adicionais: string;
		Cor_Preco_Modal_Adicionais: string;
		Cor_Preco_Produto: string;
		Cor_Selecao_Rodape: string;
		Cor_Subtitulo1_Modal_Adicionais: string;
		Cor_Subtitulo2_Modal_Adicionais: string;
		Cor_Texto_Senha: string;
		Cor_Titulo: string;
		Cor_Titulo_Modal_Adicionais: string;
		Cor_Total: string;
		Descricao: string;
		Exibir_Botao_Agora: boolean;
		Exibir_Botao_Cadastrar_Pedido: boolean;
		Exibir_Botao_Ok: boolean;
		Exibir_Botao_Viagem: boolean;
		Fonte_Nome_Produto: number;
		Fonte_Preco_Modal_Adicionais: number;
		Fonte_Preco_Produto: number;
		Fonte_Produto_Modal_Adicionais: number;
		Fonte_Subtitulo1_Modal_Adicionais: number;
		Fonte_Subtitulo2_Modal_Adicionais: number;
		Fonte_Titulo_Modal_Adicionais: number;
		Foto_Botao_Cupom: number[];
		Foto_Botao_Cupom_Convertida: string;
		Foto_Fundo: number[];
		Foto_Fundo_Convertida: string;
		Img_Botao_Agora: number[];
		Img_Botao_Agora_Convertida: string;
		Img_Botao_Avancar: number[];
		Img_Botao_Avancar_Convertida: string;
		Img_Botao_Cadastrar_Pedido: number[];
		Img_Botao_Cadastrar_Pedido_Convertida: string;
		Img_Botao_Caixa: number[];
		Img_Botao_Caixa_Convertida: string;
		Img_Botao_Credito: number[];
		Img_Botao_Credito_Convertida: string;
		Img_Botao_Debito: number[];
		Img_Botao_Debito_Convertida: string;
		Img_Botao_Dinheiro: number[];
		Img_Botao_Dinheiro_Convertida: string;
		Img_Botao_Editar_Pedido: number[];
		Img_Botao_Editar_Pedido_Convertida: string;
		Img_Botao_Ok: number[];
		Img_Botao_Ok_Convertida: string;
		Img_Botao_Vale: number[];
		Img_Botao_Vale_Convertida: string;
		Img_Botao_Viagem: number[];
		Img_Botao_Viagem_Convertida: string;
		Img_Botao_Voltar: number[];
		Img_Botao_Voltar_Convertida: string;
		Img_Fundo_Modal: number[];
		Img_Fundo_Modal_Adicionais_Combo: number[];
		Img_Fundo_Modal_Adicionais_Combo_Convertida: string;
		Img_Fundo_Modal_Confirmacao_Combo: number[];
		Img_Fundo_Modal_Confirmacao_Combo_Convertida: string;
		Img_Fundo_Modal_Convertida: string;
		Img_Pedido_Efetuado: number[];
		Img_Pedido_Efetuado_Convertida: string;
		Img_Rodape: number[];
		Img_Rodape_Convertida: string;
		Largura_Botao_Avancar: number;
		Largura_Botao_Menu: number;
		Largura_Botao_Menu_Lateral: number;
		Largura_Botao_Modal: number;
		Largura_Botao_Modal_Adicionais: number;
		Largura_Botao_Pagamento: number;
		Largura_Botao_Rodape: number;
		Largura_Botao_Senha: number;
		Largura_Botao_Voltar: number;
		Largura_Img_Botao: number;
		Largura_Img_Pedido: number;
		Largura_Pedido: number;
		Linhas: number;
		Margem_Topo_Menu: number;
		Proxima_Tela: boolean;
		Selecao_Maxima: number;
		Selecao_Minima: number;
		Tam_Fonte_Senha: number;
		Tamanho_Fonte_Rodape: number;
		Tamanho_Fonte_Titulo: number;
		Tamanho_Fonte_Total: number;
		TelaCombos: SiSMoura.Core.Entity.Food_Tela_Combo[];
		TelaCombosRetorno: SiSMoura.Core.Entity.Food_Tela_Combo_Retorno[];
		TelaProdutos: SiSMoura.Core.Entity.Food_Tela_Produto[];
		Texto_Rodape: string;
		Tipo: number;
		Tipo_Informativo: number;
		Titulo: string;
		Zoom_Teclado: number;
	}
	interface Food_Tela_Combo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Coluna: number;
		Combo: number;
		Linha: number;
		Tela: number;
	}
	interface Food_Tela_Combo_Retorno {
		Codigo: number;
		Coluna: number;
		Combo: number;
		ComboEntity: SiSMoura.Core.Entity.Food_Combo;
		Linha: number;
		Tela: number;
	}
	interface Food_Tela_Produto extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Tela: number;
		Coluna: number;
		Linha: number;
		Produto: number;
	}
	interface Food_Toten extends SiSMoura.Core.Common.Entity {
		Cartao_Credito: boolean;
		Cartao_Debito: boolean;
		Codigo: number;
		Deposito: number;
		Descricao: string;
		NFCe_EnviarContigencia: boolean;
		NFCe_IdToken: string;
		NFCe_IsHomologacao: boolean;
		NFCe_Reduzido: boolean;
		NFCe_Serie: number;
		NFCe_Token: string;
		NFCe_Utilizar: boolean;
		Pdv: number;
		PdvEntity: SiSMoura.Core.Entity.Pdv;
		Timeout: number;
		Toten_Configuracao: SiSMoura.Core.Entity.Food_Toten_Configuracao;
		Vale_Refeicao: boolean;
	}
	interface Food_Toten_Configuracao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Toten: number;
		Cor_Fonte_Tef: string;
		Img_Fundo_Tef: number[];
		Img_Fundo_Tef_Convertida: string;
		Posicao_Fonte_Tef: number;
		Tamanho_Fonte_Tef: number;
	}
	interface Forma_Pagamento extends SiSMoura.Core.Common.Entity {
		Categoria: number;
		Cdc: boolean;
		Cdc_Valor: number;
		Codigo: number;
		Coeficiente: number;
		Data_Carga: Date;
		Desconto: number;
		Descricao: string;
		Forma_Pagamento_DiasEntity: SiSMoura.Core.Entity.Forma_Pagamento_Dias[];
		Imprimir_Carne: boolean;
		Obs: string;
		Retirar_Centavos: boolean;
		Tipo: number;
		Tipo_Dia: number;
		Ultimo_Dia: boolean;
		Valor: number;
	}
	interface Forma_Pagamento_Dias extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Carga: Date;
		Dia_Ate: number;
		Dia_Da_Semana: number;
		Dia_Da_Semana_Texto: string;
		Dia_De: number;
		Dia_Fixo: number;
		Dia_Semana: number;
		Dia_Semana_Texto: string;
		Dias: number;
		Dias_Semana: string;
		Dias_Semana_Texto: string;
		Id: number;
		Porcentagem: number;
		Proximo_Mes: boolean;
	}
	interface Formula_Receita_Oculos extends SiSMoura.Core.Common.Entity {
		Campo_Resultado: string;
		Codigo: number;
		Formula: string;
	}
	interface Fornecedor extends SiSMoura.Core.Common.Entity {
		Comprador: number;
		Data_Carga: Date;
		Descer_Carga: boolean;
		Distribuidora: boolean;
		Email: string;
		Empresas: SiSMoura.Core.Entity.Fornecedor_Empresa[];
		Especies: SiSMoura.Core.Entity.Animais_Hospedagem_Parceiro_Especie[];
		Fabricante: boolean;
		Fornecedor_Contatos: SiSMoura.Core.Entity.Fornecedor_Contato[];
		Franqueador: boolean;
		Inativo: boolean;
		isHotelParceiro: boolean;
		isONG: boolean;
		Pedido_Semanal: boolean;
		Pessoa: number;
		PessoaEntity: SiSMoura.Core.Entity.Pessoa;
		Tipo_Hospedagem: number;
		Utilizar_CoteFacil: boolean;
		Valor_Minimo_Compra: number;
	}
	interface Fornecedor_Contato extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Contato: string;
		Data_Carga: Date;
		Email: string;
		Fax: string;
		Fone: string;
		Fone2: string;
		Fornecedor: number;
		Id: number;
	}
	interface Fornecedor_Empresa extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Carga: Date;
		Empresa: number;
		Fornecedor: number;
	}
	interface FornecedorProdutoReferenciaRetorno {
		Codigo_Fornecedor: number;
		Data_Entrada: Date;
		Quantidade: number;
		Razao_Social: string;
		Valor_Unitario: number;
	}
	interface FornecedorProdutoRetorno {
		Codigo_Fornecedor: number;
		Razao_Social: string;
	}
	interface FornecedorRetorno {
		CNPJ: string;
		Contador: number;
		Fornecedor: number;
		Razao_Social: string;
		RG: string;
	}
	interface Franquia_Anexo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Franquia: number;
		Nomearquivo: string;
		Nomearquivocompleto: string;
		Tipo: string;
	}
	interface Franquia_Campo_Personalizado_Valor extends SiSMoura.Core.Common.Entity {
		Campo: number;
		Cliente: number;
		Codigo: number;
		Itemdata: number;
		Valor: string;
	}
	interface Franquia_Comunicado extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Cadastro: Date;
		Descricao: string;
		Exibido: boolean;
		Franquia_Comunicado_Enviado: SiSMoura.Core.Entity.Franquia_Comunicado_Enviado[];
		Lido: boolean;
		Titulo: string;
	}
	interface Franquia_Comunicado_Enviado extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Comunicado: number;
		Data_Enviado: Date;
		Descricao: string;
		Franquia: number;
	}
	interface Franquia_Configuracao_Listavez extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Inativo: boolean;
	}
	interface Franquia_Informacao_Analise extends SiSMoura.Core.Common.Entity {
		Analise_Dedicacao_Exclusiva: string;
		Analise_Disponibilidade_Mudanca: string;
		Analise_Faturamento: number;
		Analise_Financiamento: string;
		Analise_Financiamento_Valor: number;
		Analise_Franquia_Fonte: string;
		Analise_Investimento: number;
		Analise_Ponto: string;
		Analise_Retirada: number;
		Analise_Retorno: number;
		Analise_Sociedade: string;
		Analise_Socios: number;
		Analise_Venda_Bem: number;
		Ativar: boolean;
		Codigo: number;
		Descricao: string;
	}
	interface Franquia_Listavez extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Registro: Date;
		Motivo: number;
		Observacao: string;
		Usuario: number;
		Venda: boolean;
	}
	interface Franquia_Pessoa extends SiSMoura.Core.Common.Entity {
		Agencia: number;
		Banco: string;
		ClienteEntity: SiSMoura.Core.Entity.Cliente;
		Codigo: number;
		Codigo_Candidato: number;
		Conta: string;
		Data_Cadastro: Date;
		Dia_Vencimento: number;
		Franquia_Anexos: SiSMoura.Core.Entity.Franquia_Anexo[];
		Franquia_Prospeccao_Anexos: SiSMoura.Core.Entity.Franquia_Prospeccao_Anexo[];
		Franquia_Socios: SiSMoura.Core.Entity.Franquia_Socios[];
		Gerente: string;
		Inativo: boolean;
		Pessoa: number;
		Royalte_Tipo: number;
		Royalte_Valor: number;
		Taxa_Propaganda_Tipo: number;
		Taxa_Propaganda_Valor: number;
		Tipo_Conta: number;
	}
	interface Franquia_Prospeccao extends SiSMoura.Core.Common.Entity {
		Agencia: number;
		Bairro: string;
		Banco: string;
		Campos_Valor: SiSMoura.Core.Entity.Franquia_Campo_Personalizado_Valor[];
		Cep: string;
		Cidade: number;
		Codigo: number;
		Complemento: string;
		Conta: string;
		Cpf: string;
		Cpf_Conjuge: string;
		Data_Cadastro: Date;
		Data_Nascimento: Date;
		Data_Nascimento_Conjuge: Date;
		Ddd_Celular: string;
		Ddd_Comercial: string;
		Ddd_Residencial: string;
		Email: string;
		Email_Conjuge: string;
		Empresarial_Desligamento: string;
		Empresarial_Experiencia: boolean;
		Empresarial_Faturamento: number;
		Empresarial_Franquia: boolean;
		Empresarial_Funcionario: number;
		Empresarial_Periodo: Date;
		Empresarial_Ramo: string;
		Escolaridade: number;
		Fone_Celular: string;
		Fone_Comercial: string;
		Fone_Residencial: string;
		Franquia_Prospeccao_Anexo: SiSMoura.Core.Entity.Franquia_Prospeccao_Anexo[];
		Franquia_Prospeccao_Bens: SiSMoura.Core.Entity.Franquia_Prospeccao_Bens[];
		Franquia_Prospeccao_Curso: SiSMoura.Core.Entity.Franquia_Prospeccao_Curso[];
		Franquia_Prospeccao_Dependente: SiSMoura.Core.Entity.Franquia_Prospeccao_Dependente[];
		Gerente: string;
		Loradouro: string;
		Nome: string;
		Nome_Conjuge: string;
		Numero: string;
		Observacao: string;
		Origem: string;
		Profissao: string;
		Profissao_Conjuge: string;
		Profissional_Admissao: Date;
		Profissional_Cargo: string;
		Profissional_Demissao: Date;
		Profissional_Empresa: string;
		Profissional_Ramo: string;
		Qualificacao_Conhecimento: number;
		Qualificacao_Dedicacao: string;
		Qualificacao_Dedicacao_Exclusiva: boolean;
		Qualificacao_Disponibilidade: string;
		Qualificacao_Disponibilidade_Compra: string;
		Qualificacao_Disponibilidade_Mudanca: boolean;
		Qualificacao_Faturamento: number;
		Qualificacao_Financiamento: boolean;
		Qualificacao_Financiamento_Valor: number;
		Qualificacao_Franquia_Fonte: boolean;
		Qualificacao_Implantacao: string;
		Qualificacao_Inauguracao: string;
		Qualificacao_Interesse: string;
		Qualificacao_Investimento: number;
		Qualificacao_Local: string;
		Qualificacao_Local_Motivo: string;
		Qualificacao_Outra_Atividade: string;
		Qualificacao_Parceria: string;
		Qualificacao_Ponto: boolean;
		Qualificacao_Ponto_Descricao: string;
		Qualificacao_Retirada: number;
		Qualificacao_Retorno: number;
		Qualificacao_Sociedade: boolean;
		Qualificacao_Socios: number;
		Qualificacao_Venda_Bem: number;
		Rg: string;
		Rg_Conjuge: string;
		Sexo: string;
		Situacao: number;
		SituacaoAnterior: number;
		Tipo: number;
	}
	interface Franquia_Prospeccao_Anexo extends SiSMoura.Core.Common.Entity {
		Cod_Prospeccao: number;
		Codigo: number;
		NomeArquivo: string;
		NomeArquivoCompleto: string;
		Tipo: string;
	}
	interface Franquia_Prospeccao_Bens extends SiSMoura.Core.Common.Entity {
		Cod_Prospeccao: number;
		Codigo: number;
		Contador: number;
		Descricao: string;
		Quitado: boolean;
		Tipo: number;
		Valor: number;
	}
	interface Franquia_Prospeccao_Curso extends SiSMoura.Core.Common.Entity {
		Cod_Prospeccao: number;
		Codigo: number;
		Contador: number;
		Curso: string;
		Inicio: Date;
		Instituicao: string;
		Situacao: number;
		Situacao_Descricao: string;
		Termino: Date;
	}
	interface Franquia_Prospeccao_Dependente extends SiSMoura.Core.Common.Entity {
		Cod_Prospeccao: number;
		Codigo: number;
		Contador: number;
		Data_Nascimento: Date;
		Grau_Parentesco: string;
		Nome: string;
	}
	interface Franquia_Situacao extends SiSMoura.Core.Common.Entity {
		Acao: number;
		Assunto: string;
		Codigo: number;
		Codigo_Configuracao_Email: number;
		Descricao: string;
		Mensagem: string;
		Permitir_Importar: boolean;
		Prazo: number;
	}
	interface Franquia_Socios extends SiSMoura.Core.Common.Entity {
		Bairro: string;
		Cep: string;
		Cidade: number;
		Complemento: string;
		Contador: number;
		Ddd_Telefone: string;
		Endereco: string;
		Franquia: number;
		Id: number;
		Nome: string;
		NomeCidade: string;
		Numero: number;
		Percentual_Capital: number;
		Telefone: string;
		Valor_Capital: number;
	}
	interface Franquia_Tipo_Checklist extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Franquia_Tipo_Ocorrencia extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Planoacao: string;
	}
	interface Franquia_Treinamento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Franquia: number;
		Franquia_Treinamento_Realizados: SiSMoura.Core.Entity.Franquia_Treinamento_Realizado[];
	}
	interface Franquia_Treinamento_Realizado extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Cadastro: Date;
		Data_Concluido: Date;
		Data_Inicio: Date;
		Data_Termino: Date;
		Prazo: number;
		Tipo_Treinamento: number;
		Treinamento: number;
	}
	interface Franquia_Veiculacao_Tipo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface FranquiaProspeccao_Email_Retorno {
		Anexo: string[];
		Assunto: string;
		Config: number;
		Email: string[];
		Mensagem: string;
	}
	interface Frequencia extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Indicador: string;
		Qtde_Dias: number;
	}
	interface GerarParcelasRetorno {
		Boleto: string;
		Cliente: string;
		Codigo_Cliente: number;
		Contador: number;
		Contrato: number;
		Obs: string;
		Receber: number;
		Sem_Atualizar: string;
		Servico: string;
		Valor: number;
		Vencimento: Date;
	}
	interface Grade extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Carga: Date;
		Descricao: string;
		Tamanho: SiSMoura.Core.Entity.Grade_Tamanho[];
	}
	interface Grade_Tamanho extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Grade: number;
		Tamanho: string;
	}
	interface Grupo_Empresa extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Grupo_Produto extends SiSMoura.Core.Common.Entity {
		Acrescimo_Embutido_Porcentagem: number;
		Codigo: number;
		Comissao: number;
		Contas: SiSMoura.Core.Entity.Grupo_Produto_Conta_Contabil[];
		Data_Carga: Date;
		Descmax: number;
		Desconto_Embutido_Porcentagem: number;
		Descricao: string;
		Grupo_Big: number;
		Grupo_Internet: number;
		Grupo_MouraBurger: string;
		Impressora_Nao_Fiscal: number;
		Inativo: boolean;
		Local_Retirada: string;
		Mostrar_Procura: boolean;
		Multiplicador_Venda: number;
		PartesManequim: SiSMoura.Core.Entity.Provador_Grupo_Corpo[];
		Provador_Empresa: number;
		Roteador_Enviou: boolean;
		Roteador_Puxou: boolean;
		SegundaVia_Ficha: boolean;
		Taxa_Tributaria: number;
		Vias: number;
	}
	interface Grupo_Produto_Conta_Contabil extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Conta_Contabil: number;
		Empresa: number;
		Grupo: number;
	}
	interface Grupo_Usuario extends SiSMoura.Core.Common.Entity {
		Autorizar_Entr_Prod_Manual: boolean;
		Codigo: number;
		Data_Carga: Date;
		Descricao: string;
	}
	interface Historico_Imendes_Alteracao_Manual extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data: Date;
		Descricao: string;
		Tipo: number;
		Usuario_Logado: number;
	}
	interface Historico_Imendes_Usuario extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data: Date;
		Tela: string;
		Transacao: string;
		Usuario_Logado: number;
	}
	interface Historico_Procedimento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Computador: string;
		Data_Final: Date;
		Data_Inicial: Date;
		Duracao: number;
		Parametros: string;
		Procedimento: string;
		Tela: string;
		Usuario: number;
	}
	interface IFood_Parametros extends SiSMoura.Core.Common.Entity {
		Acess_Token: string;
		Empresa: number;
		Expires_in: number;
		Id: number;
		Password: string;
		Scope: string;
		Token_Type: string;
		Username: string;
	}
	interface Ifood_Pedido extends SiSMoura.Core.Common.Entity {
		Bairro_Delivery: string;
		Cep_Delivery: string;
		Cidade_Delivery: string;
		Cod_Forma_Pgto: string;
		Data_Delivery: Date;
		Datapedido: Date;
		Email_Cliente: string;
		Empresa: number;
		Endereco_Delivery: string;
		Externalcode: number;
		Fone_Cliente: string;
		Id: number;
		Id_Cliente: number;
		Id_Ifood: string;
		Id_Restaurante: number;
		Itens: SiSMoura.Core.Entity.Ifood_Pedido_Item[];
		Json: SiSMoura.Core.Entity.Ifood_Pedido_Json;
		Latitude_Delivery: string;
		Longitude_Delivery: string;
		Nome_Cliente: string;
		Pago: boolean;
		Pais_Delivery: string;
		Reference: number;
		Shortreference: number;
		Status: SiSMoura.Core.Entity.Ifood_Pedido.Ifood_Pedido_Status;
		Status_Descricao: string;
		Subtotal: number;
		Taxa_Delivery: number;
		TaxPayerIdentificationNumber: string;
		Tipo: string;
		Total_Pedido: number;
		Troco_Para: number;
		Uf_Delivery: string;
		Valor: number;
		Venda: number;
	}
	interface Ifood_Pedido_Item extends SiSMoura.Core.Common.Entity {
		Cod_Externo: number;
		Desconto: number;
		Id: number;
		Id_Ifood_Pedido: number;
		Nome_Externo: string;
		Observacao: string;
		Qtde: number;
		Valor_Subitens: number;
		Valor_Total: number;
		Valor_Unitario: number;
	}
	interface Ifood_Pedido_Json extends SiSMoura.Core.Common.Entity {
		Id: number;
		Id_Ifood: string;
		Json: string;
	}
	interface Importacao_Historico extends SiSMoura.Core.Common.Entity {
		Data: Date;
		Id: number;
		Usuario: number;
	}
	interface Impressora_Nao_Fiscal extends SiSMoura.Core.Common.Entity {
		Ambiente: number;
		Caminho: string;
		Codigo: number;
		Descricao: string;
		Empresa: number;
		Saltos: number;
	}
	interface Indice_Economico_Financeiro extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Valor: number;
	}
	interface InformacaoClienteAtualizadoRetorno extends SiSMoura.Core.Common.Entity {
		Bairro: string;
		Cidade: string;
		Codigo: number;
		Cpf: string;
		Endereco: string;
		EnderecoCompleto: string;
		Estado: string;
		Inativo: boolean;
		Matriz: number;
		Nome: string;
		Sistema_Atualizado: boolean;
		Ultimo_Pagamento: Date;
		Valor: number;
		Vencimento: Date;
	}
	interface InformacoesVendaRetorno {
		Caixa: number;
		Configuracoes: SiSMoura.Core.Entity.Venda_Perfil;
		DepositoPadrao: number;
		Empresa: number;
		Mensagem_Retorno: string;
		PDV: number;
	}
	interface Interno_Configuracao_Integracao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Financeiro_Tempo_Integrar_Aviso_Venc: number;
		Financeiro_Tempo_Integrar_Cobranca: number;
		Financeiro_Tempo_Integrar_Desbloqueio: number;
		Fiscal_Tempo_Envio_NFSe: number;
		RH_Caminho_Arq_Ponto: string;
		RH_Integrar_Arq_Ponto: boolean;
		RH_Tempo_Integrar_Ponto: number;
	}
	interface Interno_Integracao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Alteracao_status: Date;
		Descricao: string;
		Status: number;
	}
	interface ItemMovimentacao {
		Codigo: number;
		Contador: number;
		Cor: string;
		Documento: number;
		EPC: string;
		Lote: string;
		Lotes: SiSMoura.Core.Entity.ItemMovimentacaoLote[];
		Lotes_Extenso: string;
		Marca: string;
		Motivo_Codigo: number;
		Motivo_Descricao: string;
		MovEntradaDesag: SiSMoura.Core.Entity.Movimentacao_Entrada_Desagregacao[];
		Obs: string;
		Preco_Custo: number;
		Preco_Venda: number;
		Produto_Codigo: number;
		Produto_CodigoBarras: string;
		Produto_Descricao: string;
		Qtde: number;
		Referencia: string;
		Tamanho: string;
		Unidade: string;
	}
	interface ItemMovimentacaoLote {
		DataFabricacao: Date;
		DataRecebimento: Date;
		Deposito_Codigo: number;
		Deposito_Descricao: string;
		EPC: string;
		Fornecedor_Codigo: number;
		Fornecedor_Nome: string;
		ID: number;
		InformacoesAdicionais: boolean;
		ItemMovimentacao: number;
		Localizacao1_Codigo: number;
		Localizacao1_Descricao: string;
		Localizacao2_Codigo: number;
		Localizacao2_Descricao: string;
		Localizacao3_Codigo: number;
		Localizacao3_Descricao: string;
		Lote: string;
		Peso: number;
		Produto_Codigo: number;
		Produto_Descricao: string;
		Quantidade: number;
		Validade: Date;
	}
	interface ItemParametro {
		Item: string;
		Valor: string;
	}
	interface Lancamento_Centro_Custo extends SiSMoura.Core.Common.Entity {
		Centro_Custo: number;
		Codigo: number;
		Codigo_Lancamento: number;
		Valor: number;
	}
	interface Lancamento_Comissao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Conta_Corrente: string;
		Data: Date;
		Funcionario: number;
		Observacao: string;
		Valor: number;
	}
	interface Lancamento_ContabilRetorno {
		Complemento: string;
		Credito: number;
		CreditoDescricao: string;
		Data: Date;
		Debito: number;
		DebitoDescricao: string;
		Digitador: string;
		Erro: string;
		Historico: number;
		Usuario: number;
		Valor: number;
	}
	interface Layout_Arquivo_Convenio extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Empresa: number;
		Itens: SiSMoura.Core.Entity.Layout_Arquivo_Convenio_Item[];
		Separador: string;
	}
	interface Layout_Arquivo_Convenio_Campo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Layout_Arquivo_Convenio_Item extends SiSMoura.Core.Common.Entity {
		Alinhamento: number;
		Alinhamento_Texto: string;
		Codigo_Campo: number;
		Codigo_Item: number;
		Codigo_Layout_Arquivo_Convenio: number;
		Formatacao: string;
		Posicao_Final: number;
		Posicao_Inicial: number;
		Texto_Livre: string;
	}
	interface Layout_Coletor extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Delimitador: string;
		Descricao: string;
		Imprimir_Etiqueta: boolean;
		Layout_Coletor_Campos: SiSMoura.Core.Entity.Layout_Coletor_Campo[];
		Tipo: number;
		Tipo_Procura: string;
	}
	interface Layout_Coletor_Campo extends SiSMoura.Core.Common.Entity {
		Alinhamento: string;
		AlinhamentoTexto: string;
		Campo: string;
		Caracter_Alinhamento: string;
		Caracter_AlinhamentoTexto: string;
		Codigo: number;
		Layout_Coletor: number;
		Tamanho: number;
	}
	interface Layout_Coletor_Campo_Exp extends SiSMoura.Core.Common.Entity {
		Alinhamento: string;
		AlinhamentoTexto: string;
		Campo: string;
		Caracter_Alinhamento: string;
		Caracter_AlinhamentoTexto: string;
		Codigo: number;
		Layout_Coletor: number;
		Separador_Casas_Decimais: string;
		Separador_Casas_DecimaisTexto: string;
		Tamanho: number;
	}
	interface Layout_Coletor_Exp extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Delimitador: string;
		Descricao: string;
		Layout_Coletor_Campos_Exp: SiSMoura.Core.Entity.Layout_Coletor_Campo_Exp[];
		Tipo: number;
		Tipo_Procura: string;
	}
	interface Layout_Exportacao_Coletor extends SiSMoura.Core.Common.Entity {
		Alinhamento: string;
		Campo: string;
		Id: number;
		Tamanho_Delimitador: string;
		Tipo_Delimitador: string;
		Tipo_Preenchimento: string;
	}
	interface Layout_Grade extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Coluna_Order: string;
		Colunas: SiSMoura.Core.Entity.Layout_Grade_Coluna[];
		Data_Cadastro: Date;
		Nomegrid: string;
		Tela: string;
		Tipo_Order: string;
		Usuario: number;
	}
	interface Layout_Grade_Coluna extends SiSMoura.Core.Common.Entity {
		Captioncoluna: string;
		Codigo: number;
		Datafield: string;
		Layout: number;
		Nomecoluna: string;
		Posicao: number;
		Tamanho: number;
		Visible: boolean;
	}
	interface Layout_Pivot_Grid extends SiSMoura.Core.Common.Entity {
		Campos: string;
		Codigo: number;
		Data_Cadastro: Date;
		Descricao: string;
		NomeBI: string;
		Tela: string;
		Usuario_Cadastro: number;
	}
	interface Layout_Ponto extends SiSMoura.Core.Common.Entity {
		Caminho_Arquivo: string;
		Codigo: number;
		Descricao: string;
		Diretorio_Arquivo: string;
		Formato_Data: string;
		Formato_Func: string;
		Formato_Hora: string;
		Formato_Status: string;
		Inicio_Data: number;
		Inicio_Func: number;
		Inicio_Hora: number;
		Inicio_Status: number;
		Linha_Fim: boolean;
		Linha_Inicio: boolean;
		Nome_Arquivo: string;
		Separador_Campo: string;
		Separador_Registro: string;
		Status_Entrada: string;
		Status_Saida: string;
		Tamanho_Data: number;
		Tamanho_Func: number;
		Tamanho_Hora: number;
		Tamanho_Status: number;
		Tipo_Busca_Funcionario: number;
	}
	interface Linha extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Carga: Date;
		Nome: string;
		Padrao: boolean;
		Roteador_Enviou: boolean;
		Roteador_Puxou: boolean;
		Tipo_Linha: number;
	}
	interface Lista_Preco extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Carga: Date;
		Descricao: string;
		Dias: SiSMoura.Core.Entity.Lista_Preco_Dias[];
		Empresa: number;
		Empresas: SiSMoura.Core.Entity.Lista_Preco_Empresa[];
		Margem: number;
		Operacao: number;
		Operacao_Descricao: string;
		Preco_Base: string;
		Tabela_Especial: boolean;
		Tipo: number;
		Tipo_Descricao: string;
	}
	interface Lista_Preco_Dias extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Dia_Semana: number;
		Hora_Fim: string;
		Hora_Fim_Dois: string;
		Hora_Inicio: string;
		Hora_Inicio_Dois: string;
		Lista_Preco: number;
	}
	interface Lista_Preco_Empresa extends SiSMoura.Core.Common.Entity {
		Empresa: number;
		Id: number;
		Lista: number;
	}
	interface ListaPrecoDiasRetorno {
		Codigo: number;
		Descricao_Dia: string;
		Dia_Semana: number;
		Hora_Fim: string;
		Hora_Fim_Dois: string;
		Hora_Inicio: string;
		Hora_Inicio_Dois: string;
	}
	interface Locacao_Cliente_Obra extends SiSMoura.Core.Common.Entity {
		Bairro: string;
		Cep: string;
		Cidade: number;
		Cod_Cliente: number;
		Codigo: number;
		Complemento: string;
		Contato: string;
		Ddd_Fone: string;
		Endereco: string;
		Inativo: boolean;
		Nome: string;
		Nome_Cidade: string;
		Nome_Cliente: string;
		Numero: number;
		Obra_Inativa: string;
		Telefone: string;
		Telefone_Obra: string;
	}
	interface Locacao_Equipamento extends SiSMoura.Core.Common.Entity {
		Bairro_Obra: string;
		Cep_Obra: string;
		Cidade_Obra: number;
		Codigo_Cliente: number;
		Codigo_Empresa: number;
		Codigo_Usuario: number;
		Complemento_Obra: string;
		Contas_Receber: SiSMoura.Core.Entity.Contas_Receber[];
		Contas_Receber_Indenizacao: SiSMoura.Core.Entity.Contas_Receber[];
		Contato_Obra: string;
		Data_Locacao: Date;
		Ddd_Telefone_Obra: string;
		Desconto_Perc: number;
		Desconto_Valor: number;
		Deslocamento_Entrega: number;
		Deslocamento_Retirada: number;
		DevolucaoEntity: SiSMoura.Core.Entity.Locacao_Equipamento_Devolucao;
		Endereco_Obra: string;
		Horario_Funcionamento: string;
		Id: number;
		Locacao_Cobranca: SiSMoura.Core.Entity.Locacao_Equipamento_Receber[];
		Locacao_Final: Date;
		Locacao_Inicial: Date;
		ManutencaoEntity: SiSMoura.Core.Entity.Locacao_Equipamento_Manutencao;
		Nome_Obra: string;
		Numero_Obra: number;
		Obra_Cliente: number;
		Observacao_Contrato: string;
		Observacao_Retirada: string;
		PessoaEntity: SiSMoura.Core.Entity.Pessoa;
		Previsao_Devolucao: Date;
		Produtos: SiSMoura.Core.Entity.Locacao_Equipamento_Item[];
		Situacao: number;
		SituacaoEntity: SiSMoura.Core.Entity.Locacao_Equipamento_Situacao;
		SubstituicaoEntity: SiSMoura.Core.Entity.Locacao_Equipamento_Substituicao;
		Telefone_Obra: string;
		Tipo_Cobranca: number;
		Total_Geral: number;
	}
	interface Locacao_Equipamento_Devolucao extends SiSMoura.Core.Common.Entity {
		Avaria: number;
		Data: Date;
		Descricao_Avaria: string;
		Id: number;
		Itens: SiSMoura.Core.Entity.Locacao_Equipamento_Devolucao_Item[];
		Locacao: number;
		Observacao_Devolucao: string;
		Representante_Locadora_Nome: string;
		Representante_Locadora_Rg: string;
		Representante_Locataria_Nome: string;
		Representante_Locataria_Rg: string;
	}
	interface Locacao_Equipamento_Devolucao_Item extends SiSMoura.Core.Common.Entity {
		Devolucao: number;
		Id: number;
		Produto: number;
		Quantidade: number;
	}
	interface Locacao_Equipamento_Indenizacao extends SiSMoura.Core.Common.Entity {
		Codigo_Receber: number;
		Id: number;
		Locacao: number;
		Motivo: number;
	}
	interface Locacao_Equipamento_Indenizacao_Motivo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Locacao_Equipamento_Item extends SiSMoura.Core.Common.Entity {
		Codigo_Receber: number;
		Data_Devolucao: Date;
		Deposito: number;
		Desc_Perc: number;
		Desc_Valor: number;
		Id: number;
		Interno: number;
		Locacao: number;
		Preco_Locacao: number;
		Produto: number;
		Qtde_Devolvida: number;
		Qtde_Locada: number;
		Substituido: boolean;
		Valor_Custo: number;
		Valor_Venda: number;
	}
	interface Locacao_Equipamento_Manutencao extends SiSMoura.Core.Common.Entity {
		Data_Manutencao: Date;
		Id: number;
		Itens: SiSMoura.Core.Entity.Locacao_Equipamento_Manutencao_Item[];
		Kilometragem: number;
		Locacao: number;
		Peca_Substutida: string;
		Pedagio: number;
		Responsavel_Obra: string;
		Servico_Realizado: string;
		Tecnico_Manutencao: string;
	}
	interface Locacao_Equipamento_Manutencao_Item extends SiSMoura.Core.Common.Entity {
		Id: number;
		Manutencao: number;
		Produto: number;
	}
	interface Locacao_Equipamento_Modelo extends SiSMoura.Core.Common.Entity {
		Id: number;
		Modelo_Locacao: string;
		Tipo_Modelo: number;
	}
	interface Locacao_Equipamento_Parametro extends SiSMoura.Core.Common.Entity {
		Horario_Funcionamento: string;
		Id: number;
		Observacao_Contrato: string;
		Observacao_Renovacao: string;
	}
	interface Locacao_Equipamento_Receber extends SiSMoura.Core.Common.Entity {
		Codigo_Locacao: number;
		Codigo_Parcela: number;
		Codigo_Receber: number;
		Id: number;
		Locacao_Final: Date;
		Locacao_Inicial: Date;
	}
	interface Locacao_Equipamento_Situacao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Finalizado: boolean;
		Padrao: boolean;
	}
	interface Locacao_Equipamento_Substituicao extends SiSMoura.Core.Common.Entity {
		Data_Substituicao: Date;
		Id: number;
		Itens: SiSMoura.Core.Entity.Locacao_Equipamento_Substituicao_Item[];
		Locacao: number;
		Motivo: string;
		Representante_Locadora_Nome: string;
		Representante_Locadora_Rg: string;
		Representante_Locataria_Nome: string;
		Representante_Locataria_Rg: string;
	}
	interface Locacao_Equipamento_Substituicao_Item extends SiSMoura.Core.Common.Entity {
		Id: number;
		Produto: number;
		Substituicao: number;
		Tipo_Movimentacao: string;
	}
	interface Locacao_Equipamento_Tipo extends SiSMoura.Core.Common.Entity {
		Desconto: number;
		Descricao: string;
		Id: number;
		Qtde_Dias: number;
	}
	interface Log_Cotacao_Eletronica extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Cotacao: number;
		Datacadastro: Date;
		Descricao: string;
		Fornecedor: number;
		Tipo: number;
	}
	interface Log_Cotefacil extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Evento: Date;
		Tipo_Arquivo: string;
		Usuario: number;
	}
	interface Maquina extends SiSMoura.Core.Common.Entity {
		Cap_Tanque_Combustivel: number;
		Capacidade: number;
		Capacidade_Tanque: number;
		Chassis: string;
		Codigo: number;
		Consumo: number;
		Data_Cadastro: Date;
		Fabricacao: string;
		Inativo: boolean;
		Marca: string;
		Modelo: string;
		N_Serie: string;
		Nome: string;
		Observacao: string;
		Potencia_Motor: string;
		Tipo: string;
		Valor_Mercado: number;
	}
	interface Marca extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Carga: Date;
		Inativo: boolean;
		Marca_Internet: number;
		Nome: string;
		Padrao: boolean;
		Roteador_Enviou: boolean;
		Roteador_Puxou: boolean;
	}
	interface Mesa extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Fechamento: string;
		Garcons: SiSMoura.Core.Entity.Mesa_Garcom[];
		Ultimo_Pedido: Date;
	}
	interface Mesa_Garcom extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Garcom: number;
		Mesa: number;
	}
	interface Meta_Faturamento extends SiSMoura.Core.Common.Entity {
		Data_Meta: Date;
		Empresa: number;
		Id: number;
		MetasDias: SiSMoura.Core.Entity.Meta_Faturamento_Dias[];
		Valor_Faturamento: number;
	}
	interface Meta_Faturamento_Dias extends SiSMoura.Core.Common.Entity {
		Codigo_Meta: number;
		Contador: number;
		Data: Date;
		Id: number;
		Valor_Faturamento_Data: number;
	}
	interface Meta_Faturamento_Dias_Grupo extends SiSMoura.Core.Common.Entity {
		Codigo_Meta: number;
		Contador: number;
		Data: Date;
		Id: number;
		Valor_Faturamento_Data: number;
	}
	interface Meta_Faturamento_Grupo extends SiSMoura.Core.Common.Entity {
		Data_Meta: Date;
		Empresa: number;
		Grupo: number;
		Id: number;
		MetasDias: SiSMoura.Core.Entity.Meta_Faturamento_Dias_Grupo[];
		Valor_Faturamento: number;
	}
	interface Modelo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Roteador_Enviou: boolean;
		Roteador_Puxou: boolean;
	}
	interface Modelo_Cobranca extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Documento: string;
	}
	interface Modelo_Entrega_Parcial extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Modelo: number;
		Modelo_Entrega_Parcial: string;
	}
	interface Modelo_Orcamento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Modelo: number;
		Modelo_Orcamento: string;
	}
	interface Motorista extends SiSMoura.Core.Common.Entity {
		Bairro: string;
		Cep: string;
		Cidade: number;
		Cliente: number;
		CNH: string;
		Codigo: number;
		Cpf: string;
		Endereco: string;
		Fone: string;
		Fornecedor: number;
		Nome: string;
		Numero: string;
		Observacao: string;
		Rg: string;
	}
	interface Mouraburger_Pedido extends SiSMoura.Core.Common.Entity {
		Chave_NFCe: string;
		Impresso: boolean;
		Impresso_Nfce: boolean;
		NFCe: boolean;
		Pedido: number;
		Pedidos: SiSMoura.Core.Entity.Mouraburger_Venda[];
		QRCode_NFCe: string;
		Senha: string;
		Toten: number;
	}
	interface Mouraburger_Venda extends SiSMoura.Core.Common.Entity {
		Cancelado: boolean;
		Cancelado_Automatico: boolean;
		Codigo_Pedido_Favorito: number;
		Cupom_Desconto: number;
		Data: Date;
		Data_Entregue: Date;
		Data_Fim_Chapa: Date;
		Data_Inicio_Chapa: Date;
		Data_Pago: Date;
		Desconto: number;
		Empresa: number;
		Entregue: boolean;
		Finalizado: boolean;
		Id: number;
		Impresso: boolean;
		Impresso_Nfce: boolean;
		Iniciado: boolean;
		Isbrinde: boolean;
		Isparaviagem: boolean;
		Montado: boolean;
		Ordem: number;
		Pago: boolean;
		Pedido: number;
		Produto: number;
		ProdutoEntity: SiSMoura.Core.Entity.Food_Produto;
		Quantidade: number;
		Senha: string;
		Senhasvinculadas: string;
		Status: boolean;
		Substituido: boolean;
		Total: number;
		Toten: number;
		Unitario: number;
		Venda: number;
	}
	interface MouraChromeRetorno {
		isExtensaoInstalada: boolean;
		isSucesso: boolean;
		jsonRetorno: any;
	}
	interface MouraFiltroTelaDSFiltros {
		Componente: string;
		Contador: number;
		IDCampo: string;
		Label: string;
		Valor: string;
		Valor_Exibir: string;
	}
	interface MouraGridColumn {
		ButtonText: string;
		Caption: string;
		CasasDecimais: number;
		CommandName: string;
		DataSourceCombo: string;
		FieldName: string;
		FormatString: string;
		GroupIndex: number;
		Index: number;
		IsColunaAgrupamento: boolean;
		IsColunaSelecao: boolean;
		IsEditavel: boolean;
		IsObrigatorio: boolean;
		MaxLength: number;
		MaxValue: number;
		MinValue: number;
		Name: string;
		TextFieldName: string;
		Tipo: string;
		TipoBotao: string;
		ValueFieldName: string;
		Visible: boolean;
		Width: number;
	}
	interface MouraGridSummary {
		CasasDecimais: number;
		DisplayFormat: string;
		FieldName: string;
		FormatString: string;
		MostrarNaColuna: string;
		MostrarNoRodape: boolean;
		TipoDado: string;
		TipoTotalizacao: string;
	}
	interface MouraGridViewCustomButton {
		FieldName: string;
		IDBotao: string;
		URL: string;
	}
	interface MouraGridViewCustomButtonLista {
		Botoes: SiSMoura.Core.Entity.MouraGridViewCustomButton[];
	}
	interface MouraProcuraResultado {
		CampoID: string;
		CampoOrder: string;
		ColunasGrade: SiSMoura.Core.Entity.MouraGridColumn[];
		Resultado: System.Collections.Generic.KeyValuePair<string, any>[][];
		TipoOrder: string;
		Totalizacoes: SiSMoura.Core.Entity.MouraGridSummary[];
	}
	interface MouraTextBoxCEPRetornoPesquisa {
		Bairro: string;
		CidadeCodigo: number;
		CidadeDescricao: string;
		EncontrouEndereco: boolean;
		Endereco: string;
		Erro: boolean;
		Estado: string;
		MensagemErro: string;
	}
	interface Mov_Desc extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		E_S: string;
		E_S_Descricao: string;
		Inativo: boolean;
		InativoSelecao: string;
		Padrao: boolean;
		PadraoSelecao: string;
		Produtos_Vencidos: boolean;
		Solicitar_Documento: boolean;
		Solicitar_Obs: boolean;
	}
	interface Movimentacao extends SiSMoura.Core.Common.Entity {
		Aprovado: boolean;
		Campos_Valor: SiSMoura.Core.Entity.Campo_Movimentacao_Estoque_Valor[];
		Codigo: number;
		Codigo_Entrada: number;
		Codigo_Pedido: number;
		Codigo_Saida_Originou: number;
		Data: Date;
		Data_Aprovacao: Date;
		Deposito: number;
		Deposito_Destino: number;
		Deposito_Origem: number;
		Empresa_Destino: number;
		Empresa_Origem: number;
		Filial_Destino: number;
		Gravado_Web: boolean;
		Gravou_Web: boolean;
		Hora: string;
		isContagemColetor: boolean;
		Itens: SiSMoura.Core.Entity.Movimentacao_Item[];
		Localizacao: string;
		Loja_Destino: number;
		Movimentacao_Filial: number;
		MovimentoControladoEntity: SiSMoura.Core.Entity.Movimento_Controlado;
		Nota_Fiscal: number;
		Responsavel: number;
		Responsavel_Transferencia: number;
		Sugestoes: SiSMoura.Core.Entity.Movimentacao_Sugestao[];
		Tela: string;
		Tipo: number;
		Transferido: boolean;
		Usuario: number;
	}
	interface Movimentacao_Entrada_Desagregacao extends SiSMoura.Core.Common.Entity {
		Cod_Movimentacao: number;
		Codigo: number;
		Contador: number;
		Custo_Total: number;
		Custo_Unitario: number;
		Descricao_Produto: string;
		Media_Ponderada: number;
		Percentual_Peso_Ajustado: number;
		Produto: number;
		Quantidade: number;
		Subproduto: number;
		Tipo_Movimentacao: SiSMoura.Core.Entity.Movimentacao_Entrada_Desagregacao.EnTipoMovimentacaoDesag;
	}
	interface Movimentacao_Excluida_Pdv extends SiSMoura.Core.Common.Entity {
		Caixa: number;
		Data_Exclusao: Date;
		Entrada_Saida: string;
		Id: number;
		Motivo: string;
		Pdv: number;
		Usuario: number;
		Valor: number;
	}
	interface Movimentacao_Item extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Confirmado: boolean;
		Custo_Medio: number;
		Documento: number;
		E_S: string;
		Estoque: number;
		Estoque_Anterior: number;
		Item_Contagem: number;
		Motivo: number;
		MovEntradaDesag: SiSMoura.Core.Entity.Movimentacao_Entrada_Desagregacao[];
		Movimentacao: number;
		MovimentoLote: SiSMoura.Core.Entity.Movimento_Controlado_Item[];
		Obs: string;
		Preco_Custo: number;
		Preco_Venda: number;
		Produto: number;
		Produto2: number;
		Qtde: number;
		Responsavel_Conferencia: number;
		Transferido: boolean;
	}
	interface Movimentacao_Sugestao extends SiSMoura.Core.Common.Entity {
		Id: number;
		Movimentacao: number;
		Sugestao: number;
	}
	interface Movimento_Controlado extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data: Date;
		Movimento: number;
		Tela: string;
		Tipo: string;
	}
	interface Movimento_Controlado_Item extends SiSMoura.Core.Common.Entity {
		Chave: number;
		Fornecedor: number;
		Id: number;
		InformacoesAdicionaisLote: SiSMoura.Core.Entity.ItemMovimentacaoLote;
		Lote: string;
		Movimento: number;
		Movimento_Item: number;
		Produto: number;
		Qtde: number;
	}
	interface Municipio_Homologado_Nfse extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Municipio_Ibge: number;
		Estado: string;
		Homologado_Pdv: boolean;
		Modelo: string;
		Nome: string;
		Permite_Cancelamento: boolean;
		Permite_Consulta: boolean;
		Permite_Multiplos_Servicos: string;
		Provedor: string;
		Versao_Homologada: string;
		Ws_Homologacao: string;
		Ws_Producao: string;
	}
	interface Nfse_Servico extends SiSMoura.Core.Common.Entity {
		Codigo: string;
		Descricao: string;
		Id: number;
	}
	interface Nota_Credito_Fatura extends SiSMoura.Core.Common.Entity {
		Anulada: boolean;
		Codigo: number;
		Data_Emissao: Date;
		Hash: string;
		Motivo: string;
		Numeracao: string;
		Numero: number;
		Serie: string;
	}
	interface Operacoes_Tef_Dedicado extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Cupom: string;
		Data: string;
		Hora: string;
		Imprimiu_Cupom_Fiscal: string;
		Nome_Maquina: string;
		Nsu_Host: string;
		Operadora: string;
	}
	interface Operadora_Sitef extends SiSMoura.Core.Common.Entity {
		Abreviacao: string;
		Codigo: number;
		Codigo_Sitef: string;
		Descricao: string;
		Taxa: number;
	}
	interface Orcamento extends SiSMoura.Core.Common.Entity {
		Acrescimo: number;
		Acrescimo_Forma_Pagamento: number;
		AcrescimoAux: number;
		Antes_Correcao_Desconto: boolean;
		Bairro_Cliente: string;
		Campo_Livre1: string;
		Campo_Livre2: string;
		Campo_Livre3: string;
		Campo_Livre4: string;
		Campo_Livre5: string;
		Campo_Livre6: string;
		Cartoes: SiSMoura.Core.Entity.Orcamento_Cartao[];
		Cdc: number;
		Cdc_Dias: number;
		Cheques: SiSMoura.Core.Entity.Orcamento_Cheques[];
		Cidade_Cliente: number;
		Cliente_Vender_Preco_Custo: boolean;
		Cnpj_Cpf: string;
		Codigo: number;
		Codigo_Cliente: number;
		Codigo_Internet: number;
		Comissao_Comissionado: number;
		Comissionado: number;
		Condicao_Pagamento: number;
		Conta_Corrente: string;
		ContasReceber: SiSMoura.Core.Entity.Contas_Receber[];
		Credito_Utilizado: number;
		Data: Date;
		Data_Alteracao: Date;
		Data_Cadastro: Date;
		Data_Entrega: Date;
		Data_Recebimento: Date;
		Data_Situacao: Date;
		Dependente: string;
		Desconto: number;
		Desconto_Forma_Pagamento: number;
		DescontoAux: number;
		Descontop: number;
		Devolucao: number;
		Doc_Mercantil: number;
		Duplicata: number;
		Empresa: number;
		Endereco_Cliente: string;
		Entrega: number;
		Fator2: number;
		Fator3: number;
		Fazenda: number;
		Fone_Cliente: string;
		Frete: number;
		Hora_Entrega: string;
		Importado: boolean;
		Impresso: string;
		Internet: string;
		Lista: number;
		Lista_Preco: number;
		Motorista: number;
		N_Doc_Mercantil: string;
		Nome_Cliente: string;
		Nota_Fiscal: number;
		Observacao: string;
		Operador: number;
		Orcamento_Distribuidora: string;
		Ordem: number;
		Paf_Dav: string;
		Paf_Dav_Ccf: number;
		Paf_Dav_Ccf_Ecf: number;
		Paf_Dav_Coo: number;
		Paf_Dav_Ecf: number;
		Paf_Dav_Mesclado: string;
		Pagamentos: SiSMoura.Core.Entity.Orcamento_Pagamento[];
		Pocket: string;
		Prazo_Entrega: Date;
		Primeiro_Operador: number;
		Produtos: SiSMoura.Core.Entity.Orcamento_Item[];
		Qtde_Impresso: number;
		Situacao: number;
		Talhao: number;
		Tipo_Entrega: number;
		Tipo_Nf: number;
		Total_Produtos: number;
		Transportadora: number;
		Transportadora_Placa: string;
		Valor_Cartao: number;
		Valor_Cheque: number;
		Valor_Cliente: number;
		Valor_Comissao: number;
		Valor_Custo: number;
		Valor_Devolucao: number;
		Valor_Dinheiro: number;
		Valor_Impostos: number;
		Valor_Pago_Encomenda: number;
		Valor_Tabela: number;
		Valor_Ticket: number;
		Valor_Total: number;
		Venda: number;
		Venda_Original: number;
		Vendedor: number;
		Volume: number;
		Zona_Venda: number;
	}
	interface Orcamento_Cartao extends SiSMoura.Core.Common.Entity {
		Acrescimo: number;
		Cartao: string;
		Codigo_Cartao: number;
		Id: number;
		Orcamento: number;
		Valor: number;
		Venda: number;
	}
	interface Orcamento_Cheques extends SiSMoura.Core.Common.Entity {
		Agencia: number;
		Baixa_Data: Date;
		Banco: number;
		Cheque: number;
		Cliente: number;
		Cod_Enviado: number;
		Codigo: number;
		Codigo_Recebimento: number;
		Codigo_Troca: number;
		Conta: number;
		Contas_Pagar: number;
		Cpf: string;
		Data_Cadastro: Date;
		Data_Situacao_Atual: Date;
		Dias: number;
		Endereco_Cliente: string;
		Enviado: string;
		Fone_Cliente: string;
		Nome_Cliente: string;
		Observacao: string;
		Orcamento: number;
		Origem: string;
		Pessoa: string;
		Situacao_Atual: number;
		Situacao_Cc: string;
		Tipo_Cheque: string;
		Valor_Cheque: number;
		Vencimento: Date;
	}
	interface Orcamento_Item extends SiSMoura.Core.Common.Entity {
		Aliquota_Icms: number;
		Aliquota_Ipi: number;
		Altura: number;
		Assinatura_Digital_Registro: string;
		AtualizarEstoqueLote: boolean;
		Cancelado: boolean;
		Cod_Abastecimento: number;
		Comissao: number;
		Comissao_Porcentagem: number;
		Comissao_Valor: number;
		Custo: number;
		Data_Situacao_Producao: Date;
		Deposito: number;
		Desconto: number;
		Farmacia_Receita: number;
		Fator: number;
		Fator2: number;
		Fator3: number;
		Fornecedor: number;
		Icms_St: number;
		Id: number;
		Indicacao_Origem_Indicado: number;
		Item: number;
		Kit: string;
		Largura: number;
		Lista_Preco: number;
		Localizacao1: string;
		Localizacao2: string;
		Localizacao3: string;
		Lote: string;
		Nome_Produto: string;
		Nota: number;
		Observacao: string;
		Orcamento: number;
		Ordem_Produto: number;
		Pedido_Compra_Item: number;
		Pedido_Compra_Numero: string;
		Peso_Total: number;
		Peso_Unit: number;
		Peso_Unitario: number;
		Produto: number;
		Produto_Indicacao_Origem: number;
		Profundidade: number;
		Qtde_Fator: number;
		Qtde_Unit: number;
		Quantidade: number;
		Quantidade_Entregue: number;
		Rfid_Epc: string;
		Situacao_Producao: number;
		Subtotal: number;
		Tipo: number;
		Tipo_Comissao: boolean;
		Transferencia: boolean;
		Transferencia_Estoque: boolean;
		Und_Conversao_Qtde: number;
		Und_Conversao_Unidade: string;
		Und_Conversao_Valor: number;
		Unidade_Imprimir: string;
		Valor: number;
		Valor_Acrescimo_Item: number;
		Valor_Campo_Personalizado: string;
		Valor_Comissao: number;
		Valor_Desconto_Item: number;
		Valor_Icms: number;
		Valor_Ipi: number;
		Valor_Tabela: number;
		Valor_Total: number;
		Volume: number;
	}
	interface Orcamento_Ocorrencia_Status extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Orcamento_Ocorrencia_Tipo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Orcamento_Pagamento extends SiSMoura.Core.Common.Entity {
		Cdc: boolean;
		Doc_Bancario: number;
		Doc_Bancario_Descricao: string;
		Doc_Mercantil: number;
		Id: number;
		N_Doc_Mer: string;
		Orcamento: number;
		Parcela: number;
		Valor: number;
		Vencimento: Date;
	}
	interface Orcamento_Produto_Conferencia extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data: Date;
		Orcamento: SiSMoura.Core.Entity.Orcamento_Produto_Conferencia_Orcamento;
		Produtos: SiSMoura.Core.Entity.Orcamento_Produto_Conferencia_Produto[];
		Usuario_Responsavel: number;
	}
	interface Orcamento_Produto_Conferencia_Orcamento extends SiSMoura.Core.Common.Entity {
		Conferencia: number;
		Id: number;
		Orcamento: number;
	}
	interface Orcamento_Produto_Conferencia_Produto extends SiSMoura.Core.Common.Entity {
		Conferencia: number;
		Id: number;
		Produto: number;
		Qtde_Conferida: number;
		Qtde_Orcamento: number;
	}
	interface Orcamento_Tablet extends SiSMoura.Core.Common.Entity {
		Bonificado: boolean;
		Cartoes: SiSMoura.Core.Entity.Orcamento_Tablet_Cartao[];
		Cheques: SiSMoura.Core.Entity.Orcamento_Tablet_Cheques[];
		Codigo: number;
		Codigo_Cliente: number;
		Codigo_Orcamento: number;
		Condicao_Pagamento: number;
		Data: Date;
		Data_Envio: Date;
		Desconto: number;
		Descontop: number;
		Empresa: number;
		Itens: SiSMoura.Core.Entity.Orcamento_Tablet_Item[];
		Lista: number;
		Lista_Preco: number;
		Observacao: string;
		Pagamentos: SiSMoura.Core.Entity.Orcamento_Tablet_Pagamento[];
		Situacao: number;
		Tablet_Fabricante: string;
		Tablet_Id: string;
		Tablet_Modelo: string;
		Total_Produtos: number;
		Valor_Dinheiro: number;
		Valor_Tabela: number;
		Valor_Ticket: number;
		Valor_Total: number;
		Vendedor: number;
	}
	interface Orcamento_Tablet_Cartao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Cartao: number;
		Orcamento: number;
		Valor: number;
	}
	interface Orcamento_Tablet_Cheques extends SiSMoura.Core.Common.Entity {
		Agencia: number;
		Banco: number;
		Cheque: number;
		Cliente: number;
		Codigo: number;
		Conta: number;
		Cpf: string;
		Data_Cadastro: Date;
		Endereco_Cliente: string;
		Fone_Cliente: string;
		Nome_Cliente: string;
		Orcamento: number;
		Tipo_Pessoa: string;
		Valor_Cheque: number;
		Vencimento: Date;
	}
	interface Orcamento_Tablet_Item extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Desconto: number;
		Lista_Preco: number;
		Orcamento: number;
		Ordem_Produto: number;
		Produto: number;
		Quantidade: number;
		Subtotal: number;
		Valor: number;
		Valor_Tabela: number;
		Valor_Total: number;
	}
	interface Orcamento_Tablet_Pagamento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Orcamento: number;
		Parcela: number;
		Valor: number;
		Vencimento: Date;
	}
	interface OrcamentoCampoLivres {
		Codigo: string;
		Nome: string;
		Tipo_Campo: string;
		Tipo_CampoEnum: SiSMoura.Core.Entity.OrcamentoCampoLivres.enmTipoCampo;
		Valor: string;
	}
	interface OrcamentoClienteRetorno extends SiSMoura.Core.Common.Entity {
		Apelido: string;
		Bairro: string;
		Bairro_Entrega: string;
		Bloquear_Crediario: string;
		Cidade: string;
		Cidade_Entrega: string;
		Codigo: number;
		Comissionado: number;
		Complemento: string;
		Conceito: string;
		Conceito_Cliente: number;
		Condicao_Pagamento: number;
		Cpf: string;
		Desconto_Venda: number;
		Doc_Mercantil: number;
		Endereco_Nome: string;
		Exibir_Observacao: string;
		Fone: string;
		Fone_Entrega: string;
		Nome: string;
		Nome_Fantasia: string;
		Numero: string;
		Obs: string;
		Observacao_Endereco: string;
		Situacao_Orcamento: number;
		Tipo: string;
		Vendedor: number;
		Vender_Preco_Custo: string;
		Zona_Entrega: number;
		Zona_Entrega_Descricao: string;
		Zona_Venda: number;
		Zona_Venda_Descricao: string;
	}
	interface OrcamentoItemRetorno extends SiSMoura.Core.Common.Entity {
		Aliquota_ICMS: number;
		Aliquota_IPI: number;
		Altura: number;
		Assinatura_Digital_Registro: string;
		Cancelado: string;
		Cod_Abastecimento: number;
		Codigo_Barra: string;
		Comissao: number;
		Comissao_Porcentagem: number;
		Comissao_Valor: number;
		Controlado: boolean;
		Cor: string;
		Custo: number;
		Data_Situacao_Producao: Date;
		Deposito: number;
		Desc_Marca: string;
		Desconto: number;
		Desconto_Porcentagem: number;
		DescontoISSQN: number;
		Estoque: number;
		Estoque_Total: number;
		Farmacia_Receita: string;
		Fator: number;
		Fator2: string;
		Fator3: string;
		Fornecedor: string;
		Frete_Rateado: number;
		ICMS_ST: number;
		Id: number;
		Indicacao_Origem_Indicado: string;
		Item: number;
		Kit: string;
		Largura: string;
		Lista_Preco: number;
		Localizacao: string;
		Localizacao1: string;
		Localizacao2: string;
		Localizacao3: string;
		Lote: string;
		Margem: number;
		NCM: string;
		Nome_Produto: string;
		Nota: string;
		Orcamento: number;
		Ordem_Produto: number;
		Pedido_Compra_Item: number;
		Pedido_Compra_Numero: string;
		Peso_Produto: number;
		Peso_Total: number;
		Peso_Unit: number;
		Peso_Unitario: number;
		Preco_Custo: number;
		Produto: number;
		Produto_Indicacao_Origem: string;
		Profundidade: string;
		Qtde_Fator: number;
		Qtde_Unit: number;
		Quantidade: number;
		Quantidade_Entregue: number;
		Referencia: string;
		RFID_EPC: string;
		Servico: string;
		Situacao_Producao: string;
		SubTotal: number;
		Tamanho: string;
		Texto_Fatorial1: number;
		Texto_Fatorial2: number;
		Texto_Fatorial3: number;
		Tipo: string;
		Tipo_Comissao: string;
		Tipo_Produto: number;
		Total: number;
		Total_Custo: number;
		Und_Conversao_Qtde: number;
		Und_Conversao_Unidade: number;
		Und_Conversao_Valor: number;
		Unidade: string;
		Unidade_Imprimir: string;
		Unitario_Desconto: number;
		Valor: number;
		Valor_Acrescimo_Item: number;
		Valor_Campo_Personalizado: string;
		Valor_Comissao: number;
		Valor_Desconto_Item: number;
		Valor_ICMS: number;
		Valor_IPI: number;
		Valor_Tabela: number;
		Valor_Total: number;
		Volume: number;
		Volume_Caixa: number;
	}
	interface OrcamentoProdutoConferenciaProdutoRetorno {
		Codigo: number;
		Contador: number;
		Cor: string;
		Diferenca: number;
		Linha: string;
		Marca: string;
		Nome_Produto: string;
		Orcamento: number;
		Produto: number;
		Qtde_Conferida: number;
		Qtde_Orcamento: number;
		Referencia: string;
		Tamanho: string;
	}
	interface Os_Modelo_Contrato extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Modelo_Contrato: string;
		Modulo: number;
	}
	interface Os_Situacao extends SiSMoura.Core.Common.Entity {
		Baixar_Estoque: boolean;
		Baixar_Mat_Prima: boolean;
		Bloquear_Os: boolean;
		Bloquear_Sem_Estoque: boolean;
		Calcular_Imposto: boolean;
		Codigo: number;
		Consistir_Limite_Contas_Receber: boolean;
		Deposito_Destino: number;
		Deposito_Origem: number;
		Descricao: string;
		Entrar_Prod_Acabado: boolean;
		Entrega_Parcial: boolean;
		Gerar_Receber: boolean;
		Gerar_Venda: boolean;
		Nao_Imprimir_Parcelas: boolean;
		Obrigar_Lote: boolean;
		Padrao: boolean;
		Reservar_Materiais: boolean;
		Rodape: string;
		Transferencia_Estoque: boolean;
	}
	interface PagamentoComissaoRetorno extends SiSMoura.Core.Common.Entity {
		Codigo_Fornecedor: number;
		Codigo_Venda: number;
		Data_Pagamento: Date;
		Item: number;
		Produto: number;
		Valor: number;
		Valor_Comissao_Cartao: number;
		Valor_Comissao_Cheque: number;
		Valor_Crediario: number;
		Vendedor: number;
	}
	interface PagamentoRetorno extends SiSMoura.Core.Common.Entity {
		Descricao: string;
		Valor: number;
	}
	interface Pagamentos_Transmitidos extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Remessa: number;
		Conta_Pagar: number;
		Retorno: number;
		Retorno_Mensagem: string;
	}
	interface Pais extends SiSMoura.Core.Common.Entity {
		Cod_Esocial: string;
		Codigo: number;
		Descricao: string;
		Padrao: boolean;
	}
	interface Parametrizacao_Conta_Contabil_Sped extends SiSMoura.Core.Common.Entity {
		Aliquota: number;
		Codigo: number;
		Conta_Contabil: number;
		Cst: string;
		Empresa: number;
		Tipo: SiSMoura.Core.Entity.Fiscal_Enum.Tipo_Apuracao;
		Tipo_Format: string;
	}
	interface Parametro_Pedido_Compra extends SiSMoura.Core.Common.Entity {
		Data_Registro: Date;
		Dia_Semana: number;
		Empresa: number;
		Hora: System.TimeSpan;
		Id: number;
		Prazo_Resposta: number;
		Usuario: number;
	}
	interface Parametro_Royalty_Propaganda extends SiSMoura.Core.Common.Entity {
		Data_Registro: Date;
		Dia_Vencimento: number;
		Empresa: number;
		Empresa_Exibicao: string;
		Id: number;
		Intervalo_Entre_Parcelas: number;
		Qtde_Parcela: number;
		Royalty_Tipo: number;
		Royalty_Tipo_Exibicao: string;
		Royalty_Valor: number;
		Taxa_Propaganda_Tipo: number;
		Taxa_Propaganda_Tipo_Exibicao: string;
		Taxa_Propaganda_Valor: number;
		Usuario: number;
	}
	interface ParametrosAngular {
		Parametros: SiSMoura.Core.Entity.ItemParametro[];
	}
	interface ParcelaAgruparContasReceber {
		Codigo_Cliente: number;
		Contador: number;
		Data_Vencimento: Date;
		Forma_Recebimento: number;
		Nome_Cliente: string;
		Parcela: number;
		Valor: number;
	}
	interface ParcelaContasPagar {
		Data_Vencimento: Date;
		Parcela: number;
		Valor: number;
	}
	interface Payment_Transacao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Cupom_Fiscal: string;
		Data_Cadastro: Date;
		Data_Cupom: string;
		Data_Ping: Date;
		Data_Solicitou_Cancelamento_Toten: Date;
		Hora_Cupom: string;
		Status: number;
		Tipo: number;
		Toten: number;
		Valor: number;
	}
	interface Payment_Transacao_Efetivada extends SiSMoura.Core.Common.Entity {
		Bandeira_Codigo: string;
		Bandeira_Descricao: string;
		Codigo: number;
		Codigo_Transacao: number;
		Data_Cadastro: Date;
		Modalidade_Pagamento: string;
		Modalidade_Pagamento_Descricao: string;
		Nsu_Host: string;
		Nsu_Sitef: string;
		Operadora_Codigo: string;
		Parcelas: number;
		Valor: number;
		Via_Cliente: string;
		Via_Estabelecimento: string;
	}
	interface Pdv extends SiSMoura.Core.Common.Entity {
		Buscar_Vendas_Roteador: boolean;
		Caminho_Backup: string;
		Carregar_Pdv: boolean;
		Codigo: number;
		Data_Carga: Date;
		Descricao: string;
		Empresa: number;
		N_Banco: string;
		Padrao: boolean;
		Pathbanco: string;
		Pathvenda: string;
		Perfil_Venda: number;
		Senha: string;
		Senha_Branco: string;
		Tipo_PDV: number;
		Usuario_SQL: string;
	}
	interface Pdv_Configuracao_Lote extends SiSMoura.Core.Common.Entity {
		Campo: string;
		Codigo: number;
		Pdv: number;
		Pendente_Atualizacao: boolean;
		Valor: string;
	}
	interface Pdv_Configuracao_Lote_Historico extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Configuracao_Lote: number;
		Data_Cadastro: Date;
		Usuario: number;
		Valor_Antigo: string;
		Valor_Novo: string;
	}
	interface Pedido_Compra extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Envio: number;
		Comprador: number;
		Condicao: string;
		Condicao_Pagamento_Dias: string;
		Cotacao: number;
		Data_Aprovacao: Date;
		Data_Emissao: Date;
		Data_Entrega: Date;
		Desconto_Dinheiro: number;
		Desconto_Financeiro: boolean;
		Desconto_Porcentagem: number;
		Desconto_Porcentagem2: number;
		Desconto_Porcentagem3: number;
		Empresa_Destino: number;
		Finalizado: boolean;
		Fone_Representante: string;
		Forma_Pagamento: number;
		Fornecedor: number;
		Nf_Entrada: number;
		Nome_Solicitante: string;
		Observacao: string;
		Origem_Desconto: string;
		Previsao_Entrega: Date;
		Produtos: SiSMoura.Core.Entity.Pedido_Compra_Item[];
		Representante: string;
		Situacao: number;
		Total_Comdesconto: number;
		Ultima_Verificacao_Retorno: string;
		Usuario_Aprovou: number;
		Usuario_Desaprovou: number;
		Valor_Frete: number;
		Vencimento_Compra: Date;
	}
	interface Pedido_Compra_Item extends SiSMoura.Core.Common.Entity {
		Aliquota_Icms: number;
		Campo_Personalizado: string;
		Codigo: number;
		Codigo_Produto_Fornecedor: string;
		Deposito: number;
		Desconto_P: number;
		Desconto_P2: number;
		Desconto_P3: number;
		Desconto_V: number;
		Icms_St: number;
		Ipi: number;
		Ipi_Porcentagem: number;
		Observacao: string;
		Pedido: number;
		Produto: number;
		Produto_Caracteristica: string;
		Produto_Nome: string;
		Qtde: number;
		Valor: number;
		Valor_Icms: number;
	}
	interface Pedido_Semanal extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Comprador: number;
		Data_Emissao: Date;
		Grade_Semanal: number;
		Hora_Limite_Resposta: System.TimeSpan;
		ListaEmpresas: SiSMoura.Core.Entity.Pedido_Semanal_Empresa[];
		ListaItens: SiSMoura.Core.Entity.Pedido_Semanal_Item[];
		Prazo_Resposta: number;
	}
	interface Pedido_Semanal_Empresa extends SiSMoura.Core.Common.Entity {
		Cod_Pedido_Semanal: number;
		Empresa: number;
		Forma_Pagamento: number;
		Id: number;
	}
	interface Pedido_Semanal_Item extends SiSMoura.Core.Common.Entity {
		Cod_Empresa: number;
		Cod_Pedido_Semanal: number;
		Cod_Produto: number;
		Cod_Produto_Fabrica: number;
		Codigo: number;
		Custo: number;
		Deposito: number;
		Descricao_Produto: string;
		Forma_Pgto: number;
		Fornecedor: number;
		Linha: number;
		Local_Deposito: string;
		Motivo: string;
		Pack: number;
		Quantidade: number;
		Situacao_Atual: string;
		Sortimento: string;
		Valor: number;
		Veiculacao: string;
		Venda: number;
	}
	interface Pedido_Semanal_Retorno extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Comprador: number;
		Data_Emissao: Date;
		Grade_Semanal: number;
		Hora_Limite_Resposta: System.TimeSpan;
		Prazo_Resposta: number;
	}
	interface PedidoCompra_Retorno extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Barra: string;
		Codigo_Produto_Fornecedor: string;
		Contador: number;
		Cor: string;
		Deposito: number;
		Desconto_Unitario: number;
		Desconto_Unitario_Porcentagem: number;
		Desconto_Unitario_Porcentagem_2: number;
		Desconto_Unitario_Porcentagem_3: number;
		Estoque_Atual: number;
		Estoque_Minimo: number;
		ICMS: number;
		Ipi: number;
		Ipi_Porcentagem: number;
		Marca: string;
		Modelo: string;
		Multiplo: string;
		Observacao: string;
		Pedido_Codigo: number;
		Peso_Produto: number;
		Preco_Custo: number;
		Produto_Codigo: number;
		Produto_Descricao: string;
		Quantidade: number;
		Referencia: string;
		Tamanho: string;
		Total: number;
		Unidade: number;
		Valor_Unitario_Final: number;
	}
	interface PedidoCompraDuplicata {
		Data_Vencimento: Date;
		Dias: number;
		Observacao: string;
		Pago: number;
		Parcela: number;
		Valor: number;
	}
	interface PedidoCompraPagamentoRetorno {
		Codigo_Fornecedor: number;
		Conta_Contabil: number;
		Conta_Corrente: string;
		Data_Emissao: Date;
		Doc_Bancario: number;
		Doc_Merc: number;
		N_Doc_Bancario: string;
		N_Doc_Merc: string;
	}
	interface PedidoCompraRetorno {
		Deposito: number;
		Empresa_Destino: number;
		Fornecedor: number;
		Produto: number;
		Produto_Nome: string;
		Quantidade: number;
		Valor: number;
	}
	interface PedidoProdutoRetorno {
		Campo_Personalizado: string;
		Codigo: number;
		Codigo_Barra: string;
		Codigo_Produto_Fornecedor: string;
		Contador: number;
		Cor: string;
		Deposito: number;
		Deposito_Descricao: string;
		Desconto_Unitario: number;
		Desconto_Unitario_Porcentagem: number;
		Desconto_Unitario_Porcentagem_2: number;
		Desconto_Unitario_Porcentagem_3: number;
		Estoque_Atual: number;
		Estoque_Minimo: number;
		ICMS: number;
		Ipi: number;
		Ipi_Porcentagem: number;
		Linha: string;
		Localizacao: string;
		Marca: string;
		Modelo: string;
		Multiplo: number;
		Observacao: string;
		Pedido_Codigo: number;
		Peso_Produto: number;
		Preco_Custo: number;
		Produto_Caracteristica: string;
		Produto_Codigo: number;
		Produto_Descricao: string;
		Quantidade: number;
		Referencia: string;
		Tamanho: string;
		Total: number;
		Unidade: string;
		Valor_Unitario_Final: number;
	}
	interface PerformanceSprintRetorno {
		Baixada_Programacao_Prazo: string;
		Codigo_Atividade: number;
		Codigo_Situacao_Atual: number;
		Contador: number;
		Data_Fim_Desenvolvimento_Sprint: Date;
		Data_Fim_Sprint: Date;
		Data_Finalizacao: Date;
		Data_Inicio_Desenvolvimento_Sprint: Date;
		Data_Primeira_Baixa_Programacao: Date;
		Descricao_Objetivo: string;
		Finalizada: string;
		Finalizada_Prazo: string;
		Horas_Desenvolvimento: number;
		Horas_Gastas: number;
		Justificativa_Atividade_Sprint: string;
		Pode_Atrasar: string;
		Porcentagem_Tempo_Gasto: number;
		Programador_Responsavel: string;
		Quantidade_Devolvida_Programacao: number;
		Quantidade_Recusa_Analise: number;
		Quantidade_Recusa_Teste: number;
		Quantidade_Total_Devolvida_Programacao: number;
		Situacao_Atual: string;
		Sprint: string;
		Transbordo_Sprint_Anterior: string;
	}
	interface Pessoa extends SiSMoura.Core.Common.Entity {
		Agencia: string;
		Agencia_DV: number;
		Apelido: string;
		Assinatura: SiSMoura.Core.Entity.Pessoa_Assinatura;
		Avaliacao: string;
		Bairro: string;
		Bairro_Entrega: string;
		Bairro_Pagamento: string;
		Banco: string;
		Bloq: string;
		Bloquear_Alterar_Dependente: boolean;
		Bloquear_Alterar_Placa: boolean;
		Bloquear_Cartao: boolean;
		Bloquear_Consignacao: boolean;
		Bloquear_Crediario: boolean;
		Bloquear_Credito: boolean;
		Bloquear_Ponto_Fidelidade: boolean;
		Bloquear_Ticket: boolean;
		Bloquear_Venda_Cheque: boolean;
		Bloquear_Venda_Dinheiro: boolean;
		Bloquear_Venda_Sem_Km: boolean;
		Bloquear_Vender_Orcamento: boolean;
		Campos_Valor: SiSMoura.Core.Entity.Campo_Cliente_Valor[];
		Categoria_Cartao: number;
		Celular: string;
		Cep: string;
		Cep_Entrega: string;
		Cep_Pagamento: string;
		Cidade: number;
		Cidade_D: string;
		Cidade_Entrega: number;
		Cidade_Pagamento: number;
		Classe: string;
		Cliente_Internet: number;
		Clinica: boolean;
		Clinica_Indicou: number;
		Codigo: number;
		Codigo_Cliente_Pessoa: number;
		Codigo_Fornecedor_Pessoa: number;
		Codigo_TOTVS: string;
		Codigo_Transportadora_Pessoa: number;
		Comissao: number;
		Comissionado: number;
		Complemento: string;
		Conceito_Cliente: number;
		Condicao_Pagamento: number;
		Conjuge: string;
		Consumidor_Final: boolean;
		Conta: string;
		Conta_Contabil: number;
		Conta_DV: number;
		Conta_Integracao_Contabil: number;
		Conta_Particular: boolean;
		Contato: string;
		Contato_Cliente: string;
		Contato_Entrega: string;
		Contato_Pagamento: string;
		Contribuinte_Icms: string;
		Convenio: number;
		Cpf: string;
		Data_Admissao: Date;
		Data_Alteracao: Date;
		Data_Cadastro: Date;
		Data_Carga: Date;
		Data_Expedicao_Rg: Date;
		Data_Indicacao: Date;
		Data_Nasc: Date;
		Data_Ultima_Venda: Date;
		DDD_Celular: string;
		Ddd1: string;
		Ddd2: string;
		Dddfax: string;
		Desconto_Venda: number;
		Dia_Pgto: number;
		Doc_Mercantil: number;
		Duplicata: boolean;
		Email: string;
		Emails_Promocionais: boolean;
		Empresa_Origem: number;
		Empresas_Ong: number[];
		Endereco: string;
		Endereco_Entrega: string;
		Endereco_Nome: string;
		Endereco_Pagamento: string;
		Estado_Civil: string;
		Exibir_Observacao: boolean;
		Fax: string;
		Fax_Numero: string;
		Fechamento: string;
		Fone: string;
		Fone_Entrega: string;
		Fone_Numero: string;
		Fone_Pagamento: string;
		Fone_Trabalho: string;
		Fone2: string;
		Fone2_Numero: string;
		Forma_Pagamento: number;
		Frete_Padrao: number;
		Grupo_Fiscal: number;
		Grupo_Fornecedor_Contabil: number;
		Id_IFood: number;
		IgnorarValidacaoCPF: boolean;
		Impagavel: boolean;
		Inativo: boolean;
		Informativo: string;
		Inscricao_Municipal: string;
		IsFuncionario: boolean;
		IsOng: boolean;
		Limite_Cheque_Pendente: number;
		Limite_Consignacao: number;
		Limite_Credito: number;
		Lista_Padrao: number;
		Local_Trabalho: string;
		Mae: string;
		Matricula: string;
		Matriz: number;
		Mensagem_Convenio: string;
		N_Cartao: string;
		Naturalidade: string;
		Nome: string;
		Nome_Fantasia: string;
		Numero: string;
		Numero_Calcado: string;
		Numero_Cartao: string;
		Numero_Celular: string;
		Numero_Suframa: string;
		Obs: string;
		Observacao: string;
		Observacao_Endereco: string;
		Operacao_Conta_Corrente: string;
		Ordem_Visita: number;
		Padrao: boolean;
		Pai: string;
		Pontos_Fidelidade: number;
		Preco_Custo: string;
		Produtos_Continuos: SiSMoura.Core.Entity.Cliente_Produto_Continuo[];
		Profissao: string;
		Profissional_Indicou: number;
		Referencia1: string;
		Referencia2: string;
		Referencia3: string;
		Regime_Tributario: number;
		Renda: number;
		Representante: number;
		Rg: string;
		Roteador_Puxou: boolean;
		Saldo_Devedor: number;
		Segmento: number;
		Senha: string;
		Servico_Delivery: number;
		Sexo: string;
		Situacao_Afapi: string;
		Situacao_Orcamento: number;
		Stoom_Cliente_ID: number;
		Stoom_Cliente_Token: string;
		Sujeito_Passivo: boolean;
		Tipo: string;
		Tipo_Conta_Corrente: string;
		Titular_Conta_Corrente: string;
		Transportadora: number;
		Uf_D: string;
		Usuario: number;
		Usuario_Alteracao: number;
		Valor_Cheque_Pendente: number;
		Valor_Credito: number;
		Valor_Frete: number;
		Vendedor: number;
		Vender_Preco_Custo: boolean;
		Vender_Taxa_Grupo: boolean;
		Zona_Entrega: number;
		Zona_Venda: number;
	}
	interface Pessoa_Assinatura extends SiSMoura.Core.Common.Entity {
		Assinatura: number[];
		Pessoa: number;
	}
	interface Pessoa_Endereco_Entrega extends SiSMoura.Core.Common.Entity {
		Bairro: string;
		Cep: string;
		Cidade: number;
		Codigo: number;
		Codigo_Cliente: number;
		Complemento: string;
		Ddd: string;
		Descricao: string;
		Destinatario: string;
		Endereco: string;
		Id_Endereco_Ecommerce: number;
		Nome_Cidade: string;
		Nome_Cliente: string;
		Numero: number;
		Telefone: string;
	}
	interface PessoaBasicoRetorno extends SiSMoura.Core.Common.Entity {
		Bairro: string;
		BearerLogin: string;
		Celular: string;
		CEP: string;
		Cidade_Codigo: number;
		Cidade_Codigo_IBGE: number;
		Cidade_Estado: string;
		Cidade_Nome: string;
		Codigo: number;
		Codigo_TOTVS: string;
		Complemento: string;
		Consumidor_Final: string;
		CPF: string;
		Data_Nascimento: Date;
		Email: string;
		Empresa_Origem: number;
		Endereco: string;
		Endereco_Nome: string;
		Fone: string;
		Fone2: string;
		isCliente: boolean;
		isCriador: boolean;
		isFabricante: boolean;
		isFornecedor: boolean;
		isFuncionario: boolean;
		isTransportadora: boolean;
		Nome: string;
		Nome_Fantasia: string;
		Numero: string;
		Obs: string;
		Rg: string;
		SenhaAPP: string;
		SenhaAPPResetar: boolean;
		Sexo: string;
		Tipo: string;
		Vendedor: number;
	}
	interface PessoaNfseRetorno {
		Bairro: string;
		CEP: string;
		Cidade: number;
		Codigo: number;
		Complemento: string;
		Cpf: string;
		DDD1: string;
		Email: string;
		Endereco_Nome: string;
		Fone_Numero: string;
		Inscricao_Municipal: string;
		Nome: string;
		Numero: string;
		Rg: string;
		Tipo: string;
	}
	interface PetAppAnimalRetorno {
		Castrado: boolean;
		Codigo: number;
		Codigo_Especie: number;
		Codigo_Raca: number;
		Data_Nascimento: Date;
		Inativo: boolean;
		Microchip: string;
		Nome: string;
		Observacao: string;
		Sexo: string;
	}
	interface PetAppEmpresaRetorno {
		Bairro: string;
		Cidade_Codigo: number;
		Cidade_Estado: string;
		Cidade_Nome: string;
		CNPJ: string;
		Codigo: number;
		Distancia: number;
		Endereco: string;
		EnderecoOrigemResolvido: string;
		Nome: string;
		Numero_Endereco: string;
		UrlApiHomologacao: string;
		UrlApiProducao: string;
		UrlFoto: string;
	}
	interface PetAppUsuarioRetorno {
		Bairro: string;
		BearerLogin: string;
		Celular: string;
		Cep: string;
		Cidade_Estado: string;
		Cidade_Nome: string;
		Codigo: number;
		CodigoCidade: number;
		Complemento_Endereco: string;
		Cpf: string;
		Data_Nascimento: Date;
		Email: string;
		Endereco: string;
		EnderecoFormatado: string;
		Nome: string;
		Numero_Endereco: string;
		Senha: string;
		Telefone: string;
	}
	interface Petz_Configuracao_Integracao extends SiSMoura.Core.Common.Entity {
		Atendimento_Pago_Dias_Consulta: number;
		Atendimento_Pago_Hora_Fim: Date;
		Atendimento_Pago_Hora_FimTimeOfDay: System.TimeSpan;
		Atendimento_Pago_Hora_Inicio: Date;
		Atendimento_Pago_Hora_InicioTimeOfDay: System.TimeSpan;
		Atendimento_Pago_Inativo: boolean;
		Atendimento_Pago_Intervalo: number;
		Banco_Matriz: string;
		Cod_PDV: number;
		Cod_Vendedor: number;
		Codigo: number;
		Data_Juliana_Convenio: Date;
		Dias_Integracao_Automatica_Convenio: number;
		Envio_Atendimento_Hora_Fim: Date;
		Envio_Atendimento_Hora_FimTimeOfDay: System.TimeSpan;
		Envio_Atendimento_Hora_Inicio: Date;
		Envio_Atendimento_Hora_InicioTimeOfDay: System.TimeSpan;
		Envio_Atendimento_Inativo: boolean;
		Envio_Atendimento_Intervalo: number;
		Habilitar_Trace: boolean;
		Insere_Cliente_Hora_Fim: Date;
		Insere_Cliente_Hora_FimTimeOfDay: System.TimeSpan;
		Insere_Cliente_Hora_Inicio: Date;
		Insere_Cliente_Hora_InicioTimeOfDay: System.TimeSpan;
		Insere_Cliente_Inativo: boolean;
		Insere_Cliente_Intervalo: number;
		Insere_Servico_Hora_Fim: Date;
		Insere_Servico_Hora_FimTimeOfDay: System.TimeSpan;
		Insere_Servico_Hora_Inicio: Date;
		Insere_Servico_Hora_InicioTimeOfDay: System.TimeSpan;
		Insere_Servico_Inativo: boolean;
		Insere_Servico_Intervalo: number;
		Insere_Servico_Usar_Stage: boolean;
		Integrar_Convenio_Hora_Fim: Date;
		Integrar_Convenio_Hora_FimTimeOfDay: System.TimeSpan;
		Integrar_Convenio_Hora_Inicio: Date;
		Integrar_Convenio_Hora_InicioTimeOfDay: System.TimeSpan;
		Integrar_Convenio_Inativo: boolean;
		Integrar_Convenio_Intervalo: number;
		Senha_Matriz: string;
		Server_Matriz: string;
		Stage_Host: string;
		Stage_Porta: string;
		Stage_Pwd: string;
		Stage_Sid: string;
		Stage_User: string;
		Stoom_Cod_Config_Email_Workflow: number;
		Stoom_Email_Workflow_Pagamento_Negado: string;
		Stoom_Empresa_Mensalidade: number;
		Stoom_Finalizador_Mensalidade: number;
		Stoom_Hora_Fim: Date;
		Stoom_Hora_FimTimeOfDay: System.TimeSpan;
		Stoom_Hora_Inicio: Date;
		Stoom_Hora_InicioTimeOfDay: System.TimeSpan;
		Stoom_Inativo: boolean;
		Stoom_Intervalo: number;
		Stoom_Layout_Email_Cliente: number;
		Stoom_Layout_Email_Cordenacao: number;
		Stoom_Pagamento_Email_Inativo: boolean;
		Stoom_Pagamento_Email_Intervalo: number;
		Stoom_Profissional_Mensalidade: number;
		Stoom_Servico_Mensalidade: number;
		Stoom_Tempo_Cancelar_Reserva_Nao_Autorizada: number;
		Stoom_Tempo_Envio_Email_Workflow: number;
		Stoom_Tipo_Pagamento: number;
		Stoom_URL_WS_Pagamento_Email: string;
		Stoom_WS_Pagamento_Email_Senha: string;
		Stoom_WS_Pagamento_Email_Usuario: string;
		Stoom_Ws_Senha: string;
		Stoom_Ws_Usuario: string;
		Url_Ws_Cliente: string;
		Url_Ws_Moura: string;
		URL_WS_STOOM: string;
		Url_Ws_Zanthus: string;
		Usuario_Matriz: string;
	}
	interface Petz_Pagamento_Email_Stoom extends SiSMoura.Core.Common.Entity {
		Atendimento: number;
		Bandeira: string;
		Cancelado: boolean;
		Codigo: number;
		Codigo_Reserva: number;
		Data_Captura_Pagamento: Date;
		Data_Enviou_Email_Pagamento: Date;
		Data_Ultima_Atualizacao: Date;
		Enviou_Pagamento_Captura: boolean;
		Mensagem_Mundi_Pagg: string;
		NSU: string;
		Operadora: string;
		Parcelas: number;
		Status_Pagamento_Stoom: SiSMoura.Core.Entity.Petz_Pagamento_Email_Stoom.enSTOOMStatusPagamento;
		Tipo_Reserva_Stoom: SiSMoura.Core.Entity.Petz_Pagamento_Email_Stoom.enSTOOMTipoReserva;
		Valor: number;
	}
	interface Petz_Retorno_Cancelamento_Multa {
		mensagemMundiPagg: string;
		msg: string;
		sucesso: boolean;
	}
	interface Petz_Retorno_Pagamento_Plano {
		bandeira: string;
		data: Date;
		mensagemMundiPagg: string;
		nsu: string;
		operadora: string;
		parcelas: number;
		status: number;
		valor: number;
	}
	interface Petz_Retorno_Pagamento_Plano_Erro {
		erro: string;
	}
	interface PetzAtendimentoPrePagamento {
		CNPJ_LOJA: string;
		CODIGO_ATENDIMENTO: number;
		CPF_CLIENTE: string;
		SERVICOS: SiSMoura.Core.Entity.PetzServicoPrePagamento[];
		VALOR_TOTAL: number;
	}
	interface PetzServicoPrePagamento {
		CODIGO: number;
		CODIGO_TOTVS: string;
		NOME: string;
		VALOR_SERVICO: number;
	}
	interface PetzServicoRetorno extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_TOTVS: string;
		Nome: string;
	}
	interface PlanoAutorizacaoRetorno {
		Codigo: number;
		Codigo_Retorno: number;
		Contrato: number;
		Data_Solicitacao: Date;
		Data_Utilizacao_Servico: Date;
		Desconto_Servico: number;
		Desconto_Valor: number;
		Empresa_Descricao: string;
		Mensagem_Retorno: string;
		Nome_Animal: string;
		Nome_Grupo: string;
		Nome_Servico: string;
		Nome_SubGrupo: string;
		Proprietario: string;
		Status: number;
		StatusString: string;
		Total: number;
		Usuario_Solicitacao: string;
		Usuario_Utilizacao: string;
		Valor: number;
	}
	interface PontoImportacaoRetorno {
		codFuncionario: number;
		contador: number;
		data: Date;
		entrada1: string;
		entrada2: string;
		entrada3: string;
		Erro: string;
		ExisteHorario: boolean;
		nomeFuncionario: string;
		pisFuncionario: string;
		saida1: string;
		saida2: string;
		saida3: string;
	}
	interface Portugal_Motivo_Isencao extends SiSMoura.Core.Common.Entity {
		Codigo: string;
		Motivo: string;
	}
	interface Posicao_Titulo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Posto_Bico extends SiSMoura.Core.Common.Entity {
		Bico: number;
		Bicologico: string;
		Bombafisica: number;
		Bombalogica: number;
		Combustivel: number;
		Data_Carga: Date;
		Digito_Encerrante: number;
		Empresa: number;
		Fatordivisaoqtde: number;
		Fatordivisaounitario: number;
		Id: number;
		Legenda_Pdv: string;
		Lista_Preco: number;
		Tanque: number;
	}
	interface Posto_Bomba_Abastecimento extends SiSMoura.Core.Common.Entity {
		Assinatura_Digital_Registro: string;
		Bico: number;
		Bomba: number;
		Bombalogica: number;
		Codigo: number;
		Codigo_Venda: number;
		Codigoabastecimentomemoria: number;
		Combustivel: number;
		Coo: number;
		Data: Date;
		Data_Abertura: string;
		Empresa: number;
		Encerranteqtde: number;
		Encerranteqtdeinicial: number;
		Encerrantevalor: number;
		Erro: boolean;
		Erro_Automacao: boolean;
		Impresso: string;
		Litros: number;
		Micro_Abertura: string;
		Nota_Fiscal: number;
		Numero_Serie_Ecf: string;
		Programar: string;
		Tanque: number;
		Usado: boolean;
		Usuario_Abertura: number;
		Valor: number;
		Valor_Unitario: number;
		Venda: boolean;
		Vendedor: number;
		Vender: string;
	}
	interface Posto_Cartao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Empresa: number;
		Numerocartao: string;
		Vendedor: number;
	}
	interface Posto_Placa extends SiSMoura.Core.Common.Entity {
		Data_Cadastro: Date;
		Id: number;
		Observacao: string;
		Placa: string;
		Situacao: number;
		SituacaoTexto: string;
	}
	interface Posto_Status_Bico extends SiSMoura.Core.Common.Entity {
		Bico: number;
		Estado: number;
	}
	interface Posto_Tanque extends SiSMoura.Core.Common.Entity {
		Capacidade: number;
		Codigo: number;
		Combustivel: number;
		Data_Carga: Date;
		Descricao: string;
		Empresa: number;
		Estoque: number;
	}
	interface PrecoEntradaRetorno extends SiSMoura.Core.Common.Entity {
		Chave: number;
		Cod_Lista_Preco: number;
		Cod_Subst_Trib_Contr_Social: string;
		Cod_Taxa_Tributaria: number;
		Codigo: number;
		Codigo_Fornecedor: number;
		Codigo_Incidencia_Monofasica: string;
		Contador: number;
		Custo_Anterior: number;
		Custo_Calculado: number;
		Custo_Entrada: number;
		Custo_Medio: number;
		Custo_Novo: number;
		Custo_Novo_Original: number;
		Desc_Taxa_Tributaria: string;
		Estoque: number;
		Icms_St: number;
		IsKit: boolean;
		Margem: number;
		Margem_Original: number;
		Media_Venda: number;
		Media_Vendas_Mensal: number;
		Ncm: string;
		Nome: string;
		Nome_Localizacao: string;
		Nota_Fiscal: string;
		Observacao: string;
		Ordem: number;
		Porc_Diferenca: number;
		Produto_Filho: number;
		Quantidade_Cx_Entrada: number;
		Quantidade_Entrada: number;
		Quantidade_Materia: number;
		Razao_Social: string;
		Referencia: string;
		Tipo_Preco: string;
		Valor_Unit_Dolar_Entrada: number;
		Valor_Unitario_Entrada: number;
		Venda_Anterior: number;
		Venda_Novo: number;
	}
	interface Produto extends SiSMoura.Core.Common.Entity {
		A1: boolean;
		A2: boolean;
		A3: boolean;
		Acumula_Quest: boolean;
		Adicional_1: string;
		Adicional_2: string;
		Adicional_3: string;
		Adicional_4: string;
		Altura_Produto_Ecommerce: number;
		Anilhas: SiSMoura.Core.Entity.Animal_Produto_Anilha[];
		Animal_Silvestre: boolean;
		Anorexigeno: boolean;
		Assinatura_Digital_Registro: string;
		Assunto: number;
		Atualizar_Abcfarma: boolean;
		Atualizar_Custo: string;
		Autor: number;
		AuxIsGerarCodBarras: boolean;
		B1: boolean;
		B2: boolean;
		Balanca: number;
		Bmpo: boolean;
		Bspo: boolean;
		C1: boolean;
		C2: boolean;
		C3: boolean;
		C4: boolean;
		C5: boolean;
		Campos_Valor: SiSMoura.Core.Entity.Campo_Produto_Valor[];
		Carregado: boolean;
		Cartao_Presente: boolean;
		Classe_Risco: number;
		Classificacao_Fiscal: string;
		CNPJ_Fabricante: string;
		Cod_Sem_Incidencia_Contrib: string;
		Cod_Subst_Trib_Contr_Social: string;
		Cod_Suj_Aliquota_Zero: string;
		Codigo: number;
		Codigo_Anp: string;
		Codigo_Barra: string;
		Codigo_Beneficio_Fiscal: string;
		Codigo_CEST: string;
		Codigo_Externo: number;
		Codigo_Fabricante: number;
		Codigo_Grf: number;
		Codigo_Incidencia_Monofasica: string;
		Codigo_Integracao: string;
		Codigo_Localizacao: number;
		Codigo_Onu: string;
		Codigo_Referencia: number;
		Codigo_TOTVS: string;
		Codigos_Barras: SiSMoura.Core.Entity.Produto_Barra[];
		codiMendes: number;
		Cofins: number;
		Colecao: number;
		Combustivel: boolean;
		Comissao: number;
		Comprador: number;
		Comprimento_Produto_Ecommerce: number;
		Conta_Contabil_Financeira: number;
		Controlado: boolean;
		Controlar_Preco_Maximo: boolean;
		Controle_Interno: string;
		Cor: number;
		Cor_Modelo: number;
		CorEntity: SiSMoura.Core.Entity.Cores;
		Cover_Artistico: boolean;
		Csosn: string;
		Cst: string;
		Custo_Entrada: number;
		Custo_Medio: number;
		Custo_Sem_Imposto: number;
		Custo_Ult_Compra: number;
		Custo_Unitario: number;
		Custos: SiSMoura.Core.Entity.Produto_Custo[];
		Data_Alteracao: Date;
		Data_Cadastro: Date;
		Data_Carga: Date;
		Data_Entrada_Abcfarma: Date;
		Data_Envio_Ecommerce: Date;
		Data_Saida_Abcfarma: Date;
		Data_Ult_Compra: Date;
		Data_Ultima_Venda: Date;
		Data_Vigencia: Date;
		Dcb: string;
		Decreto: number;
		Densidade_Farmacia: number;
		Deposito_Kit: number;
		Desconto_Maximo: number;
		Descricao: string;
		Descricao_Produto_Ecommerce: string;
		Descricao_Reduzida: string;
		Destacado: boolean;
		Diluicao_Farmacia: number;
		Discriminacao_Dcb: string;
		Dosagem_Max_Farmacia: number;
		Dosagem_Min_Farmacia: number;
		Dun_14: string;
		Ecommerce_Metatag: string;
		Enquadramento_Ipi: string;
		Enviar_Pedidos_Moura: boolean;
		Enviar_Pocket: boolean;
		Enviou_Foto_Ecommerce: boolean;
		Estoque_Fracao: number;
		Estoque_Maximo: number;
		Estoque_Maximo_Dias: number;
		Estoque_Minimo: number;
		Estoque_Minimo_Dias: number;
		Estoque_Status: string;
		EstoqueProduto: SiSMoura.Core.Entity.DepositoEstoqueProdutoRetorno[];
		Estoques: SiSMoura.Core.Entity.Produto_Minimo_Empresa[];
		Excipientes: SiSMoura.Core.Entity.Farmacia_Produto_Excipiente[];
		Fabricante: number;
		Farmacia_Popular: boolean;
		Fator: number;
		Fator_Custo: number;
		Fator_Venda: number;
		Fornecedor_Ult_Compra: number;
		Fornecedor_Ultima_Compra: number;
		Fornecedores: SiSMoura.Core.Entity.Produto_Fornecedor[];
		Fracionado: boolean;
		Frete_Gratis: boolean;
		Generico: boolean;
		Grupo: number;
		Grupo_Fiscal: number;
		Iat: string;
		Identificacao: string;
		Inativo: boolean;
		Inativo_Empresas: SiSMoura.Core.Entity.Produto_Inativo[];
		Inconsistencia: boolean;
		Indicador_Escala_Relevante: string;
		Informar_Preco: boolean;
		Insumo: boolean;
		Isbn: string;
		isConsumoInterno: boolean;
		IsControlado: boolean;
		isMateriaPrima: boolean;
		IsProdutoReferencia: boolean;
		Iva: number;
		Laboratorio: string;
		Largura_Produto_Ecommerce: number;
		Linha: number;
		Lista: string;
		Lista_Farmacia: string;
		Lista_Preco: boolean;
		Lista_Produto_Barra_Dun14: SiSMoura.Core.Entity.Produto_Barra_Dun14[];
		Listar: boolean;
		Lmp: boolean;
		Localizacao: string;
		Manip_Bloquear_Un_Orcamento: boolean;
		Manipulacao_Fator_Correcao: number;
		Marca: number;
		MarcaEntity: SiSMoura.Core.Entity.Marca;
		Margem: number;
		Material: number;
		Meq_Ui_Mg_Farmacia: number;
		Modelo: number;
		ModeloEntity: SiSMoura.Core.Entity.Modelo;
		Ncm: string;
		Nf_Unidade_Emitir: string;
		Nome: string;
		Nome_Abcfarma: string;
		Observacao: string;
		Ocultar_Procura: boolean;
		Onu: number;
		Origem_Mercadoria: number;
		Pack: number;
		Pacote: boolean;
		Pagamento: string;
		Permitir_Desconto: boolean;
		Pesado_Caixa: boolean;
		Peso_Mol_Base_Farmacia: number;
		Peso_Mol_Sal_Farmacia: number;
		Peso_Produto: number;
		Pharmasystem: boolean;
		Pis: number;
		Pontos: number;
		Porcentagem_IVA: number;
		Porcentagem_Perda_Farmacia: number;
		Portugal_Motivo_Isencao: string;
		Posicao_Fiscal: string;
		Preco_Custo: number;
		Preco_Custo_Abcfarma: number;
		Preco_Desconto: number;
		Preco_Dolar: number;
		Preco_Fracao: number;
		Preco_Fracao_Custo: number;
		Preco_Locacao: number;
		Preco_Maximo: number;
		Preco_Porcentagem: number;
		Preco_Produto: number;
		Preco_Produto_Ecommerce: number;
		Preco_Promocao: number;
		Preco_Venda_Abcfarma: number;
		Precos: SiSMoura.Core.Entity.Produto_Preco[];
		Produto_Balanca_Inf_Extra: string;
		Produto_Combo: SiSMoura.Core.Entity.Produto_Combo[];
		Produto_Importado: number;
		Produto_Integrado: boolean;
		Produto_Internet: number;
		Produto_Pai: number;
		ProdutoFarmaciaEntity: SiSMoura.Core.Entity.Produto_Farmacia;
		Promocao: string;
		Provador_CodEcommerce: string;
		Provador_Empresa: number;
		ProvadorEmpresas: SiSMoura.Core.Entity.Provador_Produto_Empresa[];
		ProvadorManequins: SiSMoura.Core.Entity.Provador_Produto_Manequim[];
		Qtde_Caixa_Farmacia_Popular: number;
		Quantidade: number;
		Referencia: string;
		Registro_Ms: string;
		Regras_Imposto_CFOP: SiSMoura.Core.Entity.Produto_Regra_Imposto_Cfop[];
		Regras_Imposto_Finalidade: SiSMoura.Core.Entity.Produto_Regra_Imposto_Finalidade[];
		RegrasImposto: SiSMoura.Core.Entity.Produto_Regra_Imposto[];
		Roteador_Puxou: boolean;
		Self_Service: number;
		Servico: boolean;
		Servico_Pet: boolean;
		Similar: string;
		Similares: SiSMoura.Core.Entity.Produto_Similar[];
		Sinonimos: SiSMoura.Core.Entity.Farmacia_Produto_Sinonimo[];
		Sit_Trib: number;
		Sped_Cfop_Cupom_Fiscal: string;
		Status: string;
		Subgrupo: number;
		SuperOn_ID: string;
		Tabela_Preco: number;
		Tamanho: string;
		Tara: number;
		Taxa_Tributaria: number;
		Tipo_Comissao: string;
		Tipo_Produto: number;
		Tipo_Recipiente_Farmacia: number;
		Top10: string;
		Unidade: string;
		Unidade_Estoque_Farmacia: number;
		Unidade_Orcamento_Farmacia: number;
		Unidades_Conversao: SiSMoura.Core.Entity.Produto_Unidade_Conversao[];
		Usuario: number;
		Utilizar_Orcamento: boolean;
		Utr_Ui_Mg_Farmacia: number;
		Validade: number;
		Validade_Desconto: Date;
		Validade_Desconto_Final: Date;
		Valor_Comissao: number;
		Valor_Custo_Abcfarma: number;
		Valor_Royaltie: number;
		VenderSemEstoque: boolean;
		Volume_Caixa: number;
		Volume_Excipiente: number;
		Volume_Farmacia: number;
	}
	interface Produto_Barra extends SiSMoura.Core.Common.Entity {
		Codigo_Barra: string;
		Data_Carga: Date;
		Id: number;
		Produto: number;
	}
	interface Produto_Barra_Dun14 extends SiSMoura.Core.Common.Entity {
		Codigo_Barras: string;
		Data_Carga: Date;
		Id: number;
		Produto: number;
		Qtde_Vinculada: number;
	}
	interface Produto_Classe_Risco extends SiSMoura.Core.Common.Entity {
		Classe_Risco: number;
		Codigo: number;
		Descricao: string;
	}
	interface Produto_Combo extends SiSMoura.Core.Common.Entity {
		Codigo_Participante: number;
		Id: number;
		Nome: string;
		Ordem_Combo: number;
		Produto_Combo: number;
		Qtde_Participante: number;
		Tipo_Participante: string;
		Valor_Unitario: number;
	}
	interface Produto_Custo extends SiSMoura.Core.Common.Entity {
		Acrescimo_Desconto: string;
		Codigo: number;
		Descricao: string;
		Operacao: string;
		Produto: number;
		Sequencia: number;
		Tipo_Valor: string;
		Tipo_Valor_Text: string;
		Valor: number;
	}
	interface Produto_Desagregacao extends SiSMoura.Core.Common.Entity {
		Cod_Produto: number;
		Codigo: number;
		Descricao: string;
		Realizar_Desagregacao: string;
		SubProdutos: SiSMoura.Core.Entity.Produto_Desagregacao_Item[];
	}
	interface Produto_Desagregacao_Item extends SiSMoura.Core.Common.Entity {
		Cod_Desagregacao: number;
		Cod_Subproduto: number;
		Codigo: number;
		Descricao_Perda: string;
		Descricao_Subproduto: string;
		Percentual_Custo: number;
		Percentual_Peso: number;
		Perda: boolean;
	}
	interface Produto_Farmacia extends SiSMoura.Core.Common.Entity {
		Antimicrobiano: boolean;
		Apresentacao_Concentracao: string;
		Codigo: number;
		Controle_Especial: boolean;
		Data_Carga: Date;
		Farmacia_Popular: boolean;
		Fator_Correcao: number;
		Fp_Qtde_Caixa: number;
		Fp_Valor_Unitario: number;
		Gratuidade: boolean;
		Pmc: number;
		Produto: number;
		Teor: number;
	}
	interface Produto_Formula extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Carga: Date;
		Id: number;
		Lista_Preco: number;
		Materia: number;
		Observacao: string;
		Ordem: number;
		Produto: number;
		Qtde: number;
	}
	interface Produto_Fornecedor extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Produto_Fornecedor: string;
		Data_Carga: Date;
		Empresa: number;
		Entr_Prod_Converter_Calculo: string;
		Entr_Prod_Converter_Unidade: string;
		Entr_Prod_Converter_Valor: number;
		Fornecedor: number;
		Produto: number;
		Ressuprimento: number;
	}
	interface Produto_Fracionado extends SiSMoura.Core.Common.Entity {
		Adicional_Valor: number;
		Cod_Produto_Fracionado: number;
		Cod_Produto_Pai: number;
		Id: number;
		Inativo: boolean;
		ProdutoEntity: SiSMoura.Core.Entity.Produto;
		Qtde_Apos_Fracionado: number;
		Qtde_Transf_Automaticamente: number;
		Un_Apos_Fracionado: string;
	}
	interface Produto_FracionadoRetorno extends SiSMoura.Core.Common.Entity {
		Cfop: string;
		Codigo_CEST: number;
		Empresa: number;
		Grupo: number;
		Marca: number;
		NCM: string;
		Produto_Codigo: number;
		SubGrupo: number;
		Tipo_Regra_Imposto: number;
	}
	interface Produto_Imendes extends SiSMoura.Core.Common.Entity {
		Codigo_Imendes: number;
		Data_Envio: Date;
		Data_Hora_Consulta: Date;
		Id: number;
		Mensagem: string;
		Produto: number;
		Transacao: string;
		UF: string;
	}
	interface Produto_Inativo extends SiSMoura.Core.Common.Entity {
		Data_Carga: Date;
		Empresa: number;
		Id: number;
		Produto: number;
	}
	interface Produto_Informacao_Nutricional extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Unidade_Porcao: number;
		Glutem: boolean;
		Medida_Caseira: number;
		Porcao: number;
		Produto: number;
		Qtde_Decimal_Medida: number;
		Qtde_Inteira_Medida: number;
		Unidade: string;
	}
	interface Produto_Informacao_Nutricional_Itens extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Inf_Nutricional: number;
		Produto: number;
		Qtde: number;
		Quilojoule_Kj: number;
		Vd: number;
	}
	interface Produto_Localizacao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Metro2: number;
		Produto_Localizacao_Tipo: number;
		Valor: number;
	}
	interface Produto_Localizacao_Tipo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Produto_Margem extends SiSMoura.Core.Common.Entity {
		Id: number;
		Maximo: number;
		Minimo: number;
		Produto: number;
	}
	interface Produto_Minimo_Empresa extends SiSMoura.Core.Common.Entity {
		Custo_Medio: number;
		Empresa: number;
		Estoque_Maximo: number;
		Estoque_Maximo_Dias: number;
		Estoque_Minimo: number;
		Estoque_Minimo_Dias: number;
		Id: number;
		Produto: number;
	}
	interface Produto_Onu extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		ONU: number;
	}
	interface Produto_Preco extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Comissao: number;
		Data_Carga: Date;
		Lista_Preco: number;
		Margem: number;
		Preco_Custo: number;
		Produto: number;
		Qtde_Minima: number;
		Valor: number;
	}
	interface Produto_Promocao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Cadastro: Date;
		Data_Carga: Date;
		Preco_Produto: number;
		Preco_Promocao: number;
		Produto: number;
		promocaoEmpresa: SiSMoura.Core.Entity.Promocao_Empresa[];
		promocaoSemana: SiSMoura.Core.Entity.Promocao_Semana[];
		Prorrogada: boolean;
		Quantidade_Minima: number;
		Usuario: number;
		Validade_Final: Date;
		Validade_Inicial: Date;
	}
	interface Produto_PromocaoRetorno {
		Codigo_Barra: string;
		Desconto: number;
		Novo_Termino: Date;
		Preco_Custo: number;
		Preco_Produto: number;
		Preco_Promocao: number;
		Produto: string;
		Promocao: number;
		Prorrogada: string;
		Razao_Social: string;
		Semana: string;
		Usuario: string;
		Usuario_Prorrogou: string;
		Validade_Final: Date;
		Validade_Inicial: Date;
	}
	interface Produto_Quantidade_Maxima_Permitida extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Cadastro: Date;
		Data_Carga: Date;
		Produto: number;
		Quantidade_Maxima: number;
	}
	interface Produto_Regra_Imposto extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Carga: Date;
		Data_Vigencia: Date;
		Empresa: number;
		Pauta_Valor_Money: number;
		Produto: number;
		Tipo_Regra_Imposto: number;
	}
	interface Produto_Regra_Imposto_Cfop extends SiSMoura.Core.Common.Entity {
		Cfop: string;
		Codigo: number;
		Data_Carga: Date;
		Empresa: number;
		Produto: number;
		Tipo_Regra_Imposto: number;
	}
	interface Produto_Regra_Imposto_Finalidade extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Carga: Date;
		Descricao_Empresa: string;
		Descricao_Finalidade: string;
		Descricao_Regra_Imposto: string;
		Empresa: number;
		Finalidade: number;
		Produto: number;
		Tipo_Regra_Imposto: number;
	}
	interface Produto_Similar extends SiSMoura.Core.Common.Entity {
		Id: number;
		Produto: number;
		Similar: number;
	}
	interface Produto_Status extends SiSMoura.Core.Common.Entity {
		Dias_Estoque: number;
		Dias_Ressuprimento: number;
		Id: number;
		Prazo_Entrega: number;
		Status: string;
		Status_Prazo: string;
	}
	interface Produto_Unidade_Conversao extends SiSMoura.Core.Common.Entity {
		Calculo: string;
		Id: number;
		Preco_Custo: number;
		Preco_Venda: number;
		Produto: number;
		Unidade: string;
		Valor: number;
	}
	interface ProdutoBasicoRetorno {
		Animal_Silvestre: boolean;
		Codigo: number;
		Codigo_Anp: string;
		Codigo_Barra: string;
		Codigo_CEST: string;
		Codigo_Cor: number;
		Codigo_Grupo: number;
		Codigo_Linha: number;
		Codigo_Marca: number;
		Codigo_SubGrupo: number;
		Custo_Medio: number;
		Data_Alteracao: Date;
		Data_Carga: Date;
		Data_Vigencia: Date;
		Descricao_Cor: string;
		Descricao_Grupo: string;
		Descricao_Linha: string;
		Descricao_Marca: string;
		Descricao_SubGrupo: string;
		Fator: number;
		Inativo: boolean;
		isCombustivel: boolean;
		isControlado: boolean;
		isServico: boolean;
		IVA: number;
		Localizacao: string;
		Margem: number;
		Ncm: string;
		Nome: string;
		Peso_Produto: number;
		Preco_Custo: number;
		Preco_Porcentagem: number;
		Preco_Produto: number;
		Preco_Promocao: number;
		Produto_Importado: boolean;
		Quantidade: number;
		Referencia: string;
		Roteador_Puxou: boolean;
		Servico_Pet: boolean;
		Tamanho: string;
		Taxa_Tributaria: number;
		Tipo_Comissao: string;
		Tipo_Produto: number;
		Unidade: string;
		Validade_Desconto: Date;
		Validade_Desconto_Final: Date;
		Valor_Comissao: number;
		Volume_Caixa: number;
	}
	interface ProdutoCamposPersonalizadosRetorno {
		Codigo: number;
		Descricao: string;
		Item_Data: number;
		Mascara: string;
		Tipo_Campo: string;
		Valor: string;
	}
	interface ProdutoCMVRetorno {
		Codigo: number;
		Estoque_Fechamento: number;
		Grupo: string;
		isEstoque_Negativo: boolean;
		Nome: string;
		Preco_Custo: number;
		Quantidade: number;
		Regra_Imposto: string;
		SubGrupo: string;
		Total_Custo: number;
	}
	interface ProdutoComboRetorno {
		Codigo_Participante: number;
		Id: number;
		Nome: string;
		Ordem_Combo: number;
		Produto_Combo: number;
		Qtde_Participante: number;
		Tipo_Participante: string;
		Valor_Unitario: number;
	}
	interface ProdutoConsistenciaRetorno {
		Cod_Produto: number;
		Motivo: string;
		Nome: string;
	}
	interface ProdutoCotacaoBaseRetorno {
		Codigo: number;
		Codigo_Barra: string;
		Codigo_Fornecedor: string;
		Nome: string;
		Nome_Fornecedor: string;
	}
	interface ProdutoDadosRetorno {
		AuxIsGerarCodBarras: boolean;
		Cod_Cor: number;
		Codigo: number;
		Codigo_Barra: string;
		Cor: string;
		Cor_Modelo: number;
		Data_Alteracao: Date;
		Data_Cadastro: Date;
		Estoque: number;
		Estoque_Minimo: number;
		Inativo: boolean;
		Observacao: string;
		Tamanho: string;
	}
	interface ProdutoFornecedorRetorno {
		Calculo: string;
		Calculo_Descricao: string;
		Codigo: number;
		Codigo_Empresa: number;
		Codigo_Fornecedor: number;
		Codigo_Produto_Fornecedor: string;
		Contador: number;
		Data_Ultima_Compra: Date;
		Descricao_Empresa: string;
		Descricao_Fornecedor: string;
		Produto_Valor_Unitario: number;
		Quantidade_Compra: number;
		Ressuprimento: number;
		Ultima_Nota_Fiscal: string;
		Unidade_Calculo: string;
		Valor_Calculo: number;
	}
	interface ProdutoHospedagem {
		Animais_Atendimento_Produto: number;
		Cobrado: boolean;
		Cod_Atendimento: number;
		Cod_Profissional: number;
		Codigo: number;
		Codigo_Produto: number;
		Concluido: boolean;
		Contador: number;
		Data_Cadastro: Date;
		Data_Execucao: Date;
		Desconto: number;
		DescontoP: number;
		Dia_Diaria: Date;
		Funcionario: number;
		Hora_Execucao: Date;
		Hospedagem: number;
		Nome_Produto: string;
		Nome_Profissional: string;
		Observacao: string;
		Preco_Produto: number;
		Quantidade: number;
		Valor: number;
		Valor_Total: number;
		Venda: number;
	}
	interface ProdutoIdentificarOrcamentoRetorno {
		Codigo: number;
		Cor: string;
		Descricao: string;
		Grupo: string;
		Linha: string;
		Marca: string;
		Preco_Custo: number;
		Preco_Venda: number;
		Referencia: string;
		Utilizar_Orcamento: boolean;
	}
	interface ProdutoImportadoNfe {
		Aliquota_COFINS: number;
		Aliquota_ICMS: number;
		Aliquota_ICMS_ST: number;
		Aliquota_IPI: number;
		Aliquota_PIS: number;
		Base_COFINS: number;
		Base_ICMS: number;
		Base_ICMS_ST: number;
		Base_IPI: number;
		Base_PIS: number;
		CEST: string;
		CFOP: string;
		Codigo_Barras: string;
		Codigo_Fornecedor: number;
		Codigo_Pedido: number;
		Codigo_Produto: number;
		Codigo_Produto_Fornecedor: string;
		Contador: number;
		Controlado: boolean;
		CST: string;
		Data_Fabricacao: Date;
		Data_Validade: Date;
		Descricao_Cor: string;
		Descricao_Produto: string;
		Descricao_Produto_Fornecedor: string;
		EntradaProdutoAjuste: SiSMoura.Core.Entity.Entrada_Produto_Ajustes;
		Inativo: boolean;
		IVA: number;
		Lote: string;
		Lote_Quantidade: number;
		NCM: string;
		PMC: number;
		PossuiVariosVinculos: boolean;
		Preco_Custo: number;
		Preco_Venda: number;
		ProdutoAnilhas: SiSMoura.Core.Entity.Entrada_Produto_Anilha[];
		Qtde_Caixa: number;
		Quantidade: number;
		Referencia: string;
		ST_COFINS: string;
		ST_IPI: string;
		ST_PIS: string;
		Tamanho: string;
		Unidade: string;
		Validade: Date;
		Valor_Ajuste: number;
		Valor_COFINS: number;
		Valor_Desconto: number;
		Valor_Frete: number;
		Valor_ICMS: number;
		Valor_ICMS_ST: number;
		Valor_IPI: number;
		Valor_Outros: number;
		Valor_PIS: number;
		Valor_Total: number;
		Valor_Unitario: number;
	}
	interface ProdutoInativoRetorno {
		Contador: number;
		Empresa: number;
		Id: number;
		Inativo: boolean;
		Razao_Social: string;
	}
	interface ProdutoIvaPautaRetorno {
		Codigo_Empresa: number;
		Codigo_Estado: number;
		Descricao_Empresa: string;
		Descricao_Estado: string;
		Iva: number;
		Pauta: number;
	}
	interface ProdutoMinimoEmpresaRetorno {
		Codigo_Empresa: number;
		Custo_Medio: number;
		Descricao_Empresa: string;
		Estoque_Maximo: number;
		Estoque_Maximo_Dias: number;
		Estoque_Minimo: number;
		Estoque_Minimo_Dias: number;
	}
	interface ProdutoPrecoRetorno {
		Codigo_Lista: number;
		Codigo_Produto_Preco: number;
		Comissao_Produto_Preco: number;
		Custo_Produto_Preco: number;
		Data_Carga_Produto_Preco: Date;
		Descricao_Lista: string;
		Margem_Lista: number;
		Margem_Produto_Preco: number;
		Margem_Real: number;
		Operacao_Subtrair_Lista: boolean;
		Preco_Base_Lista: string;
		Produto: number;
		Quantidade_Minima_Produto_Preco: number;
		Tipo_Lista: number;
		Valor_Produto_Preco: number;
	}
	interface ProdutoRegraImpostoCFOP {
		CFOP: string;
		Codigo: number;
		Codigo_Empresa: number;
		Contador: number;
		Descricao_Empresa: string;
		Descricao_Regra_Imposto: string;
		Tipo_Regra_Imposto: number;
	}
	interface ProdutoRegraImpostoRetorno {
		Codigo: number;
		Codigo_Empresa: number;
		Codigo_Tipo_Regra: number;
		Descricao_Empresa: string;
		Pauta_Valor: number;
		Utiliza_SPED: boolean;
	}
	interface ProdutoRejeitadoRetorno {
		Aliquota_COFINS: number;
		Aliquota_IPI: number;
		Aliquota_PIS: number;
		CFOP: string;
		Codigo_Produto: number;
		CST: string;
		Empresa: number;
		Item: number;
		Marcar: boolean;
		NCM: string;
		NF_Formulario: number;
		Nome_Produto: string;
		Rejeicao: string;
		ST_COFINS: string;
		ST_IPI: string;
		ST_PIS: string;
	}
	interface ProdutoSaftRetorno extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Barra: string;
		Nome: string;
		Tipo: string;
	}
	interface ProdutosAtendimento {
		Cobrado: boolean;
		Cobrado_Text: string;
		Cod_Atendimento: number;
		Codigo: number;
		Contador: number;
		Data: Date;
		Desconto: number;
		Desconto_Porcentagem: number;
		Hora: Date;
		Lote: string;
		Observacao: string;
		Produto_Codigo: number;
		Produto_Descricao: string;
		Profissional_Codigo: number;
		Profissional_Descricao: string;
		Quantidade: number;
		Total: number;
		Valor: number;
	}
	interface ProdutoSimilarRetorno {
		Codigo_Produto: number;
		Contador: number;
		Estoque_Produto: number;
		ID: number;
		Nome_Produto: string;
	}
	interface ProdutoTerminalConsultaRetorno {
		Codigo_Barra: string;
		Codigo_Produto: number;
		Codigos_Barra: SiSMoura.Core.Entity.Produto_Barra[];
		Nome: string;
		Preco_Desconto: number;
		Preco_Produto: number;
		Unidade: string;
		Validade_Desconto_Final: Date;
	}
	interface Profissional_Alteracao_Horario extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data: Date;
		Dia: number;
		Empresa: number;
		Hora: string;
		Profissional: number;
		Status: number;
		Tipo: string;
	}
	interface Profissional_Categoria extends SiSMoura.Core.Common.Entity {
		Categoria: number;
		Codigo: number;
		Profissional: number;
	}
	interface Profissional_Empresa extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Empresa: number;
		Profissional: number;
	}
	interface Profissional_Horario extends SiSMoura.Core.Common.Entity {
		Codigo_Profissional_Periodo: number;
		Dia: number;
		Empresa: number;
		Horario: string;
		Id: number;
		Profissional: number;
	}
	interface Profissional_Horario_Dia extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Profissional_Periodo: number;
		Dia: number;
		Hora_Final: Date;
		Hora_Inicial: Date;
		Intervalo: number;
	}
	interface Profissional_Horario_Periodo extends SiSMoura.Core.Common.Entity {
		Categoria_Periodo: number;
		Codigo: number;
		Data_Final: Date;
		Data_Inicial: Date;
		Empresa: number;
		Horarios: SiSMoura.Core.Entity.Profissional_Horario_Dia[];
		Profissional: number;
		Profissional_Horario: SiSMoura.Core.Entity.Profissional_Horario[];
		Sala: number;
	}
	interface Programa extends SiSMoura.Core.Common.Entity {
		Area: string;
		Arquivo_Help: string;
		Autorizar: boolean;
		Codigo: number;
		Contexto: number;
		Data_Carga: Date;
		Descricao: string;
		Nome: string;
		Roteador_Puxou: boolean;
		Senha_Ao_Abrir: boolean;
		Sistema: number;
		Tipo: string;
		Usar_Log: boolean;
	}
	interface Programar_Alteracao_Preco extends SiSMoura.Core.Common.Entity {
		Codigo_Produto: number;
		Data: Date;
		ID: number;
		Lista_Preco: number;
		Preco_Alterado: boolean;
		Valor: number;
		Valor_Produto: number;
	}
	interface Promissoria extends SiSMoura.Core.Common.Entity {
		Cliente: number;
		Codigo: number;
		Data_Emissao: Date;
		Data_Vencimento: Date;
		PromissoriaContasReceber: SiSMoura.Core.Entity.Promissoria_Contas_Receber[];
		Tipo_Impressao: string;
		Valor: number;
		Venda: number;
		Vendedor: number;
	}
	interface Promissoria_Contas_Receber extends SiSMoura.Core.Common.Entity {
		Contas_Receber: number;
		Id: number;
		Promissoria: number;
	}
	interface Promissoria_Modelo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Modelo: string;
	}
	interface PromissoriaRetorno {
		Codigo_Cliente: number;
		Codigo_Empresa: number;
		Codigo_Vendedor: number;
		Data: Date;
		Data_Formatada: string;
		Nome_Cliente: string;
		Nome_Vendedor: string;
		Orcamento: number;
		Venda: number;
	}
	interface Promocao_Empresa extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Carga: Date;
		Empresa: number;
		Promocao: number;
	}
	interface Promocao_Semana extends SiSMoura.Core.Common.Entity {
		Cod_Promocao: number;
		Cod_Promocao_Empresa: number;
		Codigo: number;
		Data_Carga: Date;
		Dia: number;
	}
	interface Provador_Cor_Produto extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Empresa: number;
		Id: number;
	}
	interface Provador_Grupo_Corpo extends SiSMoura.Core.Common.Entity {
		Cod_Corpo: number;
		Cod_Grupo: number;
		Id: number;
	}
	interface Provador_Grupo_Empresa extends SiSMoura.Core.Common.Entity {
		Cod_Empresa: number;
		Cod_Grupo: number;
		Id: number;
	}
	interface Provador_Grupo_Produto extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Empresa: number;
		Id: number;
	}
	interface Provador_Manequim extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Empresa: number;
		ImagemBytes: number[];
		Inativo: boolean;
		Url_Imagem: string;
	}
	interface Provador_Manequim_Corpo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Provador_Manequim_Empresa extends SiSMoura.Core.Common.Entity {
		Cod_Empresa: number;
		Cod_Manequim: number;
		Id: number;
	}
	interface Provador_Produto extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Cor: number;
		Descricao: string;
		Empresa: number;
		Grupo: number;
		Id: number;
		Peso: number;
		Preco: number;
		Produto_Pai: number;
		SubGrupo: number;
		Tamanho: string;
	}
	interface Provador_Produto_Empresa extends SiSMoura.Core.Common.Entity {
		Cod_Empresa: number;
		Cod_Produto: number;
		Id: number;
	}
	interface Provador_Produto_Manequim extends SiSMoura.Core.Common.Entity {
		Cod_Manequim: number;
		Cod_Produto: number;
		Id: number;
		Imagem_Height: number;
		Imagem_Left: number;
		Imagem_Rotation: number;
		Imagem_Top: number;
		Imagem_Width: number;
		Url_Imagem: string;
	}
	interface Provador_Subgrupo_Produto extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Empresa: number;
		Id: number;
	}
	interface Quest_Perfil_Cliente extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Inativo: boolean;
		Ref_Quest: number;
	}
	interface RankingProdutoRetorno extends SiSMoura.Core.Common.Entity {
		Codigo_Produto: number;
		Custo_Icms: number;
		Custo_Icms_Saida: number;
		Custo_Ultima_Compra: number;
		Marca: string;
		NCM: string;
		Nome_Produto: string;
		Porcentagem_Markup: number;
		Porcentagem_Total: number;
		Quantidade_Faturada: number;
		Ranking: number;
		Valor_Faturado: number;
		Valor_Medio_Venda: number;
	}
	interface Recibo extends SiSMoura.Core.Common.Entity {
		Cod_Cliente: number;
		Codigo: number;
		Codigo_Receber: number;
		Data: Date;
		Descricao: string;
		Empresa: number;
		Excluido: string;
		Mensagem_Pagamento: string;
		Nome_Cliente: string;
		Parcela: number;
		Valor: number;
		Vencimento: Date;
		Venda: number;
	}
	interface Recibo_Configuracoes extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Imprimirprodutos_Recibo: boolean;
		Imprimirvendedor_Recibo: boolean;
		Recibo_Impressao_Modelo: number;
		ReciboObs: SiSMoura.Core.Entity.Recibo_Observacao[];
	}
	interface Recibo_Observacao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Modelo: number;
		Descricao: string;
		Observacao: string;
	}
	interface Referencia extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Regiao extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Regiao_Cidades extends SiSMoura.Core.Common.Entity {
		Cidade: number;
		Cidade_Descricao: string;
		Codigo: number;
		Regiao: number;
		Regiao_Descricao: string;
	}
	interface RelacaoCMVRetorno {
		ProdutosCMV: SiSMoura.Core.Entity.ProdutoCMVRetorno[];
		ValorCMV: number;
		ValorEntrada: number;
		ValorEstoqueFinal: number;
		ValorEstoqueInicial: number;
	}
	interface RelacaoServicoApiRetorno extends SiSMoura.Core.Common.Entity {
		Cod_Especie: number;
		Codigo_Animal: number;
		Codigo_Atendimento: number;
		Codigo_Empresa: number;
		Concluido: boolean;
		Data: Date;
		Fantasia_Empresa: string;
		Hora_Servico: string;
		Nome_Animal: string;
		Pago: boolean;
		QuantidadeReagendamentos: number;
	}
	interface Relatorio_Personalizado extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Colunas: SiSMoura.Core.Entity.Relatorio_Personalizado_Coluna[];
		Filtros: SiSMoura.Core.Entity.Relatorio_Personalizado_Filtro[];
		Menu: number;
		Nome: string;
		Permitir_Agrupar: boolean;
		Permitir_Mover: boolean;
		Permitir_Ordernar: boolean;
		Script: string;
		Totalizadores: SiSMoura.Core.Entity.Relatorio_Personalizado_Totalizador[];
	}
	interface Relatorio_Personalizado_Coluna extends SiSMoura.Core.Common.Entity {
		Agrupar: boolean;
		Casas_Decimais: number;
		Codigo: number;
		Fieldname: string;
		Ordem: number;
		Relatorio: number;
		Tamanho: number;
		Tipo: SiSMoura.Core.Entity.Relatorio_Personalizado_Coluna.TipoColuna;
		Titulo: string;
	}
	interface Relatorio_Personalizado_Filtro extends SiSMoura.Core.Common.Entity {
		Campo_Codigo: string;
		Campo_Descricao: string;
		Casas_Decimais: number;
		Codigo: number;
		Descricao: string;
		Engine_Procura: string;
		Exibir_Todos: boolean;
		Maxlength: number;
		Obrigatorio: boolean;
		Ordem: number;
		Relatorio: number;
		Script: string;
		Tipo: SiSMoura.Core.Entity.Relatorio_Personalizado_Filtro.TipoFiltro;
		Variavel_Fim: string;
		Variavel_Inicio: string;
	}
	interface Relatorio_Personalizado_Menu extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Menu_Pai: number;
	}
	interface Relatorio_Personalizado_Totalizador extends SiSMoura.Core.Common.Entity {
		Casas_Decimais: number;
		Codigo: number;
		DisplayFormat: string;
		Fieldname: string;
		Mostrar_Rodape: boolean;
		MostrarNaColuna: string;
		Relatorio: number;
		Tipo: SiSMoura.Core.Entity.Relatorio_Personalizado_Totalizador.TipoTotalizador;
		Totalizar_Agrupamento: boolean;
	}
	interface RelatorioVoz_Ativacao extends SiSMoura.Core.Common.Entity {
		AbrUsuario: string;
		Cancelado: boolean;
		CepEmpresa: string;
		CnpjEmpresa: string;
		Codigo: string;
		DataAcesso: Date;
		DataCadastro: Date;
		Dispositivo: string;
		IdEmpresa: number;
		IdUsuario: number;
		IeEmpresa: string;
		NomeEmpresa: string;
		NomeUsuario: string;
		UrlServidor: string;
	}
	interface RelatorioVoz_Cancelamento extends SiSMoura.Core.Common.Entity {
		Cancelado: boolean;
		Codigo: string;
		Empresa: number;
		Usuario: number;
	}
	interface RelatorioVoz_Relatorio extends SiSMoura.Core.Common.Entity {
	}
	interface Remessa_Pagamento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Transmissao: Date;
		Pagamentos: SiSMoura.Core.Entity.Pagamentos_Transmitidos[];
	}
	interface Representante extends SiSMoura.Core.Common.Entity {
		Apelido: string;
		Avaliacao: string;
		Bairro: string;
		Bloq: string;
		Cep: string;
		Cidade: number;
		Cidade_D: string;
		Cidade_Nome: string;
		Codigo: number;
		Codigo_Antigo: number;
		Comissao: number;
		Conjuge: string;
		Conta_Particular: string;
		Contato: string;
		Cpf: string;
		Data_Admissao: Date;
		Data_Alteracao: Date;
		Data_Cadastro: Date;
		Data_Carga: Date;
		Data_Nasc: Date;
		Duplicata: string;
		Email: string;
		Empresa: string;
		Endereco: string;
		Fone: string;
		Fone_Trabalho: string;
		Fone2: string;
		Inativo: boolean;
		Local_Trabalho: string;
		Mae: string;
		Naturalidade: string;
		Nome: string;
		Nome_Fantasia: string;
		Obs: string;
		Observacao: string;
		Observacao_Endereco: string;
		Pai: string;
		Profissao: string;
		Renda: number;
		Rg: string;
		Tipo: string;
		Uf_D: string;
		Usuario: number;
	}
	interface ResumoCarga {
		Cliente: string;
		CodCarga: number;
		Data: Date;
		Documento: string;
		Endereco: string;
		Peso_Total: number;
		Valor_Total: number;
		Venda: number;
		Zona_Venda: string;
	}
	interface RetornoAgendaHospedagem {
		Baia: number;
		Data_Fim: Date;
		Data_Inicio: Date;
		Dia: Date;
		Disponibilidade: string;
		Lotacao_Maxima: number;
		Nome_Baia: string;
		Permitir_Pet_Proprietario_Diferente: boolean;
		Quantidade_Animais_Baia: number;
		Tipo_Hospedagem: string;
	}
	interface RetornoAngular {
		AtributoFoco: string;
		CodigoErro: number;
		Entidade: any;
		Erro: boolean;
		IsSessaoExpirada: boolean;
		MensagemAlerta: string;
		MensagemErro: string;
		MensagemRetorno: string;
		ScriptExecutar: string;
		StackTrace: string;
	}
	interface RetornoCombo<tipoValue> {
		Codigo: tipoValue;
		Descricao: string;
	}
	interface RetornoConsultaCNPJ {
		AtividadeEconomicaPrimaria: string;
		AtividadeEconomicaSecundaria: string;
		CodigoCidadeSismoura: number;
		DataSituacaoCadastral: string;
		Email: string;
		EnderecoBairro: string;
		EnderecoCEP: string;
		EnderecoCidade: string;
		EnderecoComplemento: string;
		EnderecoEstado: string;
		EnderecoLogradouro: string;
		EnderecoNumero: string;
		MatrizFilial: string;
		MotivoSituacaoCadastral: string;
		NaturezaJuridica: string;
		NomeFantasia: string;
		NumeroDaInscricao: string;
		RazaoSocial: string;
		SituacaoCadastral: string;
	}
	interface RetornoFinanceiroClienteMoura {
		Cliente: SiSMoura.Core.Entity.InformacaoClienteAtualizadoRetorno;
		ClienteDesatualizado: boolean;
		ClienteInativo: boolean;
		ClienteNaoCadastrado: boolean;
		ClienteSemContrato: boolean;
		DiasDebitos: number;
		SenhaNormal: string;
		SenhaNormalAntiga: string;
		SenhaTresDias: string;
		ValorDebitos: number;
	}
	interface RetornoGenerico extends SiSMoura.Core.Common.Entity {
		Codigo: string;
		Descricao: string;
	}
	interface RetornoPlanejamento {
		Consolidado: System.Collections.Generic.KeyValuePair<string, any>[][];
		Individualizado: System.Collections.Generic.KeyValuePair<string, any>[][];
		Permitir: boolean;
	}
	interface RetornoVendaControladoFarmacia {
		Cid: string;
		Codigo: number;
		Conselho_Profissional: string;
		Data_Nascimento: Date;
		Data_Prescricao: Date;
		Idade_Paciente: number;
		Nome_Comprador: string;
		Nome_Paciente: string;
		Nome_Prescritor: string;
		Numero_Documento: string;
		Numero_Notificacao: string;
		Orgao_Expedidor: string;
		Produto: number;
		Qtde_Dispensada: number;
		Qtde_Prescrita: number;
		Registro_Profissional: string;
		Sexo: string;
		Tipo_Documento: string;
		Tipo_Receita: string;
		Uf_Conselho: string;
		Uf_Emissao_Documento: string;
		Unidade_Idade: string;
		Uso_Medicamento: string;
		Uso_Prolongado: string;
		Venda: number;
	}
	interface Rfidmoura_Contagem extends SiSMoura.Core.Common.Entity {
		Codcontagem: number;
		Datacadastro: Date;
		Deposito: number;
		Observacao: string;
		Usuario: number;
	}
	interface Rfidmoura_Contagemproduto extends SiSMoura.Core.Common.Entity {
		Codcontagem: number;
		Codproduto: number;
		Epc: string;
		Estoque: number;
	}
	interface Rh_Adicional_Banco_Horas extends SiSMoura.Core.Common.Entity {
		Adicional: number;
		Codigo: number;
		Dia: string;
	}
	interface Rh_Campo_Personalizado extends SiSMoura.Core.Common.Entity {
		Campos_Item: SiSMoura.Core.Entity.Rh_Campo_Personalizado_Item[];
		Codigo: number;
		Descricao: string;
		Inativo: boolean;
		Tipo: number;
		Tipo_Campo: string;
		Tipo_CampoEnum: SiSMoura.Core.Entity.Rh_Campo_Personalizado.enmTipoCampo;
	}
	interface Rh_Campo_Personalizado_Item extends SiSMoura.Core.Common.Entity {
		Campo: number;
		Codigo: number;
		Descricao: string;
		Item: number;
	}
	interface Rh_Campo_Personalizado_Valor extends SiSMoura.Core.Common.Entity {
		Campo: number;
		Cliente: number;
		Codigo: number;
		Itemdata: number;
		Valor: string;
	}
	interface Rh_Funcionario_Horario extends SiSMoura.Core.Common.Entity {
		Cod_Funcionario: number;
		Cod_Horario: number;
		Codigo: number;
		Contador: number;
		Dia_Semana: number;
		Dia_Semana_Texto: string;
	}
	interface Rh_Horario extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Duracao_Jornada: number;
		Hora_Entrada: string;
		Hora_Saida: string;
		Permite_Flexibilidade: boolean;
		Rh_Horario_Intervalo: SiSMoura.Core.Entity.Rh_Horario_Intervalo[];
		Tipo: number;
		Tipo_Intervalo: number;
		Validade_Final: Date;
		Validade_Inicio: Date;
	}
	interface Rh_Horario_Intervalo extends SiSMoura.Core.Common.Entity {
		Cod_Horario: number;
		Codigo: number;
		Contador: number;
		Duracao_Intervalo: number;
		Hora_Fim: string;
		Hora_Inicio: string;
		Intervalo_Principal: boolean;
		Intervalo_Principal_Texto: string;
	}
	interface Rh_Perfil extends SiSMoura.Core.Common.Entity {
		Caracteristica: string;
		Codigo: number;
		Como_Agir: string;
		Como_No_Trabalho: string;
		Descricao: string;
		Padrao_Tomada_Decisao: string;
		Ponto_Forte: string;
		Que_Procura: string;
	}
	interface Rh_Perfil_Anexo extends SiSMoura.Core.Common.Entity {
		Cod_Perfil: number;
		Codigo: number;
		Nome_Arquivo: string;
		Nome_Arquivo_Completo: string;
		Tipo: string;
	}
	interface Rh_Perfil_Funcionario extends SiSMoura.Core.Common.Entity {
		Campos_Valor: SiSMoura.Core.Entity.Rh_Campo_Personalizado_Valor[];
		Codigo: number;
		Data_Cadastro: Date;
		Funcionario: number;
		Funcionario_Perfil: SiSMoura.Core.Entity.RH_Perfil_Funcionario_Item[];
		Funcionario_Perfil_Anexo: SiSMoura.Core.Entity.Rh_Perfil_Anexo[];
	}
	interface RH_Perfil_Funcionario_Item extends SiSMoura.Core.Common.Entity {
		Caracteristica: string;
		Cod_Perfil: number;
		Codigo: number;
		Como_Agir: string;
		Como_No_Trabalho: string;
		Descricao: string;
		Padrao_Tomada_Decisao: string;
		Perfil: number;
		Ponto_Forte: string;
		Que_Procura: string;
	}
	interface RhPerfilFuncionarioItemRetorno {
		Caracteristica: string;
		Cod_Perfil: number;
		Codigo: number;
		Como_Agir: string;
		Como_No_Trabalho: string;
		Descricao: string;
		Padrao_Tomada_Decisao: string;
		Perfil: number;
		Ponto_Forte: string;
		Que_Procura: string;
	}
	interface Rota_Venda extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data: Date;
		Dia_Fixo: boolean;
		Dia_Semana: number;
		Rota_Venda_Cliente: SiSMoura.Core.Entity.Rota_Venda_Cliente[];
		Vendedor: number;
	}
	interface Rota_Venda_Cliente extends SiSMoura.Core.Common.Entity {
		Cliente: number;
		Id: number;
		Observacao: string;
		Ordem: number;
		Rota: number;
	}
	interface Saft_Enviado extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data: Date;
		Empresa: number;
	}
	interface Saldo extends SiSMoura.Core.Common.Entity {
		Conciliado: boolean;
		Conciliado_Data: Date;
		Conta_Corrente: string;
		Data: Date;
		Dc: string;
		Id: number;
		Saldo: number;
	}
	interface Sat_Cadastro extends SiSMoura.Core.Common.Entity {
		Assinatura_Aplicativo_Comercial: string;
		Codigo: number;
		Codigo_Ativacao: string;
		Data_Cadastro: Date;
		Data_Carga: Date;
		Descricao: string;
		Inativo: boolean;
		Numero_Serie: string;
		Pdv_Instalacao: number;
	}
	interface Sat_Nf extends SiSMoura.Core.Common.Entity {
		Assinatura_Qrcode: string;
		Bairro: string;
		Base_Icms: number;
		Base_Subst: number;
		Cancelado: boolean;
		Cep: string;
		Chave_Acesso_Cancelamento: string;
		Chave_Cfe: string;
		Cod_Cfe: string;
		Cod_Cfe_Cancelamento: string;
		Cod_Cliente: number;
		Cod_Pdv: number;
		Cod_Sat: number;
		Codigo: number;
		Cpf_Cnpj: string;
		Data_Emissao: Date;
		Endereco: string;
		Importado: boolean;
		Ispendenteenvio: boolean;
		Mensagem_Retorno: string;
		Municipio: string;
		Nome: string;
		Numero: string;
		Outras_Despesas: number;
		Sat_Itens: SiSMoura.Core.Entity.Sat_Nf_Item[];
		Sat_Nf_Xml: SiSMoura.Core.Entity.Sat_Nf_Xml;
		Sat_Pagamentos: SiSMoura.Core.Entity.Sat_Nf_Pagamento[];
		Situacao: string;
		Total_Produto: number;
		Uf: string;
		Valor_Base_Iss: number;
		Valor_Cofins: number;
		Valor_Desconto: number;
		Valor_Icms: number;
		Valor_Iss: number;
		Valor_Pis: number;
		Valor_Subst: number;
		Valor_Total: number;
		Valor_Total_Ibpt: number;
		Valor_Troco: number;
		Venda: number;
		Vendedor: number;
	}
	interface Sat_Nf_Item extends SiSMoura.Core.Common.Entity {
		Aliquota_Cofins: number;
		Aliquota_Pis: number;
		Base_Cofins: number;
		Base_Icms: number;
		Base_Icms_St: number;
		Base_Pis: number;
		Cfop: string;
		Cod_Anp: string;
		Codigo: number;
		Codigo_Barra: string;
		Codigo_Sat_Nf: number;
		Cst_Icms: string;
		Descricao: string;
		Num_Item: number;
		Observacao: string;
		Observacao_Produto: string;
		Porcentagem_Icms: number;
		Porcentagem_Icms_St: number;
		Produto: number;
		Quantidade: number;
		St_Cofins: string;
		St_Pis: string;
		Total: number;
		Unidade: string;
		Unitario: number;
		Valor_Cofins: number;
		Valor_Desconto: number;
		Valor_Icms: number;
		Valor_Icms_St: number;
		Valor_Outras_Despesas: number;
		Valor_Pis: number;
		Vracresrat: number;
		Vrdescrat: number;
	}
	interface Sat_Nf_Pagamento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Sat_Nf: number;
		Pagamento: number;
		Valor: number;
	}
	interface Sat_Nf_Xml extends SiSMoura.Core.Common.Entity {
		Cod_Cfe: string;
		Cod_Sat: number;
		Codigo: number;
		Codigo_Sat_Nf: number;
		Dados_Adicionais: string;
		Data: Date;
		Iscancelamento: boolean;
		Xml_Cfe: string;
	}
	interface Sat_Requisicao_Nf extends SiSMoura.Core.Common.Entity {
		Assinatura_Qrcode: string;
		Bairro: string;
		Base_Icms: number;
		Base_Subst: number;
		Cancelado: boolean;
		Cep: string;
		Chave_Cfe: string;
		Cod_Cfe: string;
		Cod_Cliente: number;
		Cod_Pdv: number;
		Cod_Sat: number;
		Codigo: number;
		Cpf_Cnpj: string;
		Dados_Adicionais: string;
		Data_Emissao: Date;
		Endereco: string;
		Gerar: boolean;
		Mensagem_Retorno: string;
		Municipio: string;
		Nome: string;
		Nome_Computador: string;
		Numero: string;
		Outras_Despesas: number;
		Pagamentos: SiSMoura.Core.Entity.Sat_Requisicao_Nf_Pagamento[];
		Produtos: SiSMoura.Core.Entity.Sat_Requisicao_Nf_Item[];
		Situacao: string;
		Status: number;
		Total_Produto: number;
		Uf: string;
		Valor_Base_Iss: number;
		Valor_Cofins: number;
		Valor_Desconto: number;
		Valor_Icms: number;
		Valor_Iss: number;
		Valor_Pis: number;
		Valor_Subst: number;
		Valor_Total: number;
		Valor_Total_Ibpt: number;
		Valor_Troco: number;
		Venda: number;
		Vendedor: number;
		Xml_Cfe: string;
	}
	interface Sat_Requisicao_Nf_Item extends SiSMoura.Core.Common.Entity {
		Aliquota_Cofins: number;
		Aliquota_Pis: number;
		Base_Cofins: number;
		Base_Icms: number;
		Base_Icms_St: number;
		Base_Pis: number;
		Cfop: string;
		Cod_Anp: string;
		Codigo: number;
		Codigo_Barra: string;
		Codigo_Sat_Nf: number;
		Cst_Icms: string;
		Descricao: string;
		Num_Item: number;
		Observacao: string;
		Observacao_Produto: string;
		Porcentagem_Icms: number;
		Porcentagem_Icms_St: number;
		Produto: number;
		Quantidade: number;
		St_Cofins: string;
		St_Pis: string;
		Total: number;
		Unidade: string;
		Unitario: number;
		Valor_Cofins: number;
		Valor_Desconto: number;
		Valor_Icms: number;
		Valor_Icms_St: number;
		Valor_Outras_Despesas: number;
		Valor_Pis: number;
		Vracresrat: number;
		Vrdescrat: number;
	}
	interface Sat_Requisicao_Nf_Pagamento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Sat_Nf: number;
		Pagamento: number;
		Valor: number;
	}
	interface Segmento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Serienfse extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Servico extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Comissao: number;
		Custo_Servico: number;
		Data_Carga: Date;
		Descricao: string;
		Descricao_APP: string;
		Doses: number;
		Duracao: System.TimeSpan;
		Enviar_Aplicativo: boolean;
		Grupo_Produto: number;
		Grupo_Servico: number;
		Horas: number;
		Ig: SiSMoura.Core.Entity.Animais_Servico_Ig[];
		Impostos: SiSMoura.Core.Entity.Produto_Regra_Imposto[];
		Inativo: boolean;
		Informacoes_APP: string;
		IsAtendimentoContinuo: boolean;
		IsDiariaAvulsa: boolean;
		IsEscala: boolean;
		IsHospedagem: boolean;
		IsInternacao: boolean;
		Linha: number;
		Minutos: number;
		Ncm: string;
		Nome: string;
		Periodo: number;
		Precos: SiSMoura.Core.Entity.Produto_Preco[];
		ProdutoEntity: SiSMoura.Core.Entity.Produto;
		Racas: SiSMoura.Core.Entity.Servico_Raca[];
		Roteador_Enviou: boolean;
		Roteador_Puxou: boolean;
		Servico_Consulta: boolean;
		Servico_Retorno: boolean;
		Servico_Zerado: boolean;
		Solicitar_Participante: boolean;
		Subgrupo: number;
		Taxa_Tributaria: number;
		Valor: number;
		Valor_Base: number;
	}
	interface Servico_Raca extends SiSMoura.Core.Common.Entity {
		Id: number;
		Raca: number;
		Servico: number;
	}
	interface Servicoempresa extends SiSMoura.Core.Common.Entity {
		Aliquota: number;
		Cnae: string;
		Cod_Tributacao: string;
		Codigotoken: string;
		Codservico: string;
		Cofins: number;
		Csll: number;
		Empresa: number;
		Id: number;
		Inss: number;
		Ir: number;
		Pis: number;
		Senha: string;
		Valor_Aprox_Tributos: number;
	}
	interface ServicoInfoRetorno extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Nome: string;
	}
	interface ServicoPetApiRetorno {
		Codigo: number;
		Duracao: System.TimeSpan;
		Fixo: boolean;
		Informacoes: string;
		Nome: string;
		Precos: SiSMoura.Core.Entity.ServicoPetListaPrecosApiRetorno[];
		Subgrupo_Codigo: number;
		Subgrupo_Nome: string;
		Valor: number;
	}
	interface ServicoPetBasicoRetorno {
		Codigo: number;
		Codigo_Grupo_Servico: number;
		Doses: number;
		Horas: number;
		IsHospedagem: boolean;
		IsInternacao: boolean;
		Minutos: number;
		Nome: string;
		Servico_Retorno: boolean;
		Solicitar_Participante: boolean;
	}
	interface ServicoPetListaPrecosApiRetorno {
		Codigo: number;
		Descricao: string;
		Preco: number;
	}
	interface ServicoRacaRetorno extends SiSMoura.Core.Common.Entity {
		Contador: number;
		Descricao_Raca: string;
		Id: number;
		Raca: number;
		Servico: number;
	}
	interface ServicoRegraEscalaRetorno {
		Codigo_Servico: number;
		Grupo_Servico: string;
		IsEscala: boolean;
		Servico: string;
	}
	interface ServicosAtendimento {
		Codigo: number;
		Codigo_Autorizacao_Plano: number;
		Codigo_Retorno_Plano: number;
		Concluido: boolean;
		Concluido_Text: string;
		Contador: number;
		Data: Date;
		Data_Entrega: Date;
		Data_Validade: Date;
		Desconto: number;
		Desconto_Autorizado: boolean;
		Desconto_Porcentagem: number;
		Entregar: Date;
		Especie: string;
		GerarSemData: boolean;
		Grupo: string;
		IsRetorno: boolean;
		Laboratorio: string;
		Linha: number;
		Lista_Preco: number;
		Lote: string;
		Observacao: string;
		Observacao_Plano: string;
		Participantes: SiSMoura.Core.Entity.Animais_Servico_Participante[];
		ParticipantesNomes: string;
		Partida: string;
		Pegar: Date;
		Previsao: Date;
		Profissional_Codigo: number;
		Profissional_Descricao: string;
		Profissional_Responsavel: number;
		Profissional_ResponsavelNome: string;
		Quantidade: number;
		Servico_Atendimento: number;
		Servico_Codigo: number;
		Servico_Descricao: string;
		ServicoConsulta_Origem: number;
		ServicoDuracao: string;
		ServicoDuracaoMinutos: number;
		Status_Plano: number;
		Status_Plano_Descricao: string;
		Tipo_Desconto: number;
		Tipo_Desconto_Descricao: string;
		Total: number;
		VacinaAgendada: SiSMoura.Core.Entity.Animais_Marketing_Servicos;
		Valor: number;
		Valor_Repasse_Prestador: number;
		Zerado: boolean;
	}
	interface ServicosContrato {
		Atendimento: number;
		Data_Cadastro: Date;
		Data_Pagamento: Date;
		Nome: string;
		Pago: string;
		Valor: number;
	}
	interface ServicosHospedagem {
		Animais_Servicos_Codigo: number;
		Cod_Atendimento: number;
		Cod_Profissional: number;
		Codigo: number;
		Codigo_Servico: number;
		Concluido: boolean;
		Contador: number;
		Data_Cadastro: Date;
		Data_Execucao: Date;
		Desconto: number;
		Dia_Diaria: Date;
		Funcionario: number;
		Hora_Execucao: Date;
		Hospedagem: number;
		Nome_Profissional: string;
		Nome_Servico: string;
		Observacao: string;
		Preco_Produto: number;
		Qtde: number;
		VacinaAgendada: SiSMoura.Core.Entity.Animais_Marketing_Servicos;
		Valor: number;
		Valor_Total: number;
		Venda: number;
	}
	interface Setor_Empresa extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Sindicato extends SiSMoura.Core.Common.Entity {
		Cnpj: string;
		Codigo: number;
		Codigo_Sindical: string;
		Descricao: string;
	}
	interface Situacao_Encomenda extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Mensagem: string;
		Padrao: boolean;
	}
	interface Situacao_Orcamento extends SiSMoura.Core.Common.Entity {
		Baixar_Estoque: boolean;
		Bloquear_Orcamento: boolean;
		Bonificado: boolean;
		Calcular_Imposto: boolean;
		Cancelou_Venda: boolean;
		Codigo: number;
		Consistir_Contas_Vencidas: boolean;
		Consistir_Limite_Contas_Receber: boolean;
		Controlar_Usuarios: boolean;
		Deposito_Destino: number;
		Deposito_Origem: number;
		Descricao: string;
		Entrega_Parcial: boolean;
		Finalizar_Vender_PDV: boolean;
		Gerar_Receber: boolean;
		Gerar_Venda: boolean;
		Ic_Tablet: boolean;
		Impressora_Matricial: number;
		Imprimir_Matricial: boolean;
		Mensagem: string;
		Nao_Imprimir_Parcelas: boolean;
		Obrigar_Lote: boolean;
		Padrao: boolean;
		Provisionado: boolean;
		Qtde_Vias_Impressao: number;
		Situacao_Orcamento_Grupo: SiSMoura.Core.Entity.Situacao_Orcamento_Grupo[];
		Situacao_Orcamento_Usuario: SiSMoura.Core.Entity.Situacao_Orcamento_Usuario[];
		Transferencia_Estoque: boolean;
	}
	interface Situacao_Orcamento_Grupo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Grupo: number;
		Situacao: number;
	}
	interface Situacao_Orcamento_Usuario extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Situacao: number;
		Usuario: number;
	}
	interface Situacao_Pedido extends SiSMoura.Core.Common.Entity {
		Ao_Aprovar_Mudar_Para: boolean;
		Atualizar_Estoque: boolean;
		Auto_Aprovar: boolean;
		Codigo: number;
		Gerar_Pagar: boolean;
		Provisionado: boolean;
		Situacao: string;
	}
	interface Solicitacao extends SiSMoura.Core.Common.Entity {
		Centro_Custo: number;
		Codigo: number;
		Contador: number;
		Data: Date;
		Data_Aprovacao: Date;
		Obs: string;
		Observacao: string;
		Para_Quando: Date;
		Solicitacao_Itens: SiSMoura.Core.Entity.Solicitacao_Item[];
		Solicitacao_Origem: number;
		Solicitante: number;
		Status: string;
		Unidade: string;
		Urgencia: string;
		Usuario: number;
	}
	interface Solicitacao_Item extends SiSMoura.Core.Common.Entity {
		Aprovador: number;
		Centro_Custo: number;
		Codigo: number;
		Data_Aprovacao: Date;
		Finalizado: string;
		Fornecedor1: number;
		Fornecedor2: number;
		Fornecedor3: number;
		Fornecedor4: number;
		Fornecedor5: number;
		Item: number;
		Obs: string;
		Produto: number;
		Produto_Nome: string;
		Qtde: number;
		Qtde_Aprovada: number;
		Similar: string;
		Solicitacao: number;
		Unidade: string;
		Valor: number;
	}
	interface Sped_Periodo_Sem_Movimento extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Mes: number;
		Mes_Descricao: string;
		Motivo: number;
		Motivo_Descricao: string;
	}
	interface SprintAtividadeRetorno extends SiSMoura.Core.Common.Entity {
		Atividade: number;
		Categoria_Atividade: number;
		Cliente: string;
		Codigo_Sprint_Atividade: number;
		Horas_Desenvolvimento: number;
		Modulo: string;
		Pode_Atrasar: boolean;
		Pontos: number;
		Programador: number;
		Programador_Nome: string;
		Transbordo_Sprint_Anterior: boolean;
	}
	interface SprintKanbamRetorno extends SiSMoura.Core.Common.Entity {
		Cliente: string;
		Codigo_Atividade: number;
		Codigo_Programador_Responsavel: number;
		Descricao_Objetivo: string;
		DescricaoSprint: string;
		Equipe_Responsavel: string;
		Modulo: string;
		Pode_Atrasar: boolean;
		Programador_Responsavel: string;
		Responsavel_Atual: string;
		Setor: string;
		Setor_Descricao: string;
		Situacao_Atividade: string;
		Situacao_Atual: number;
		Sprint: number;
		Testador_Responsavel: string;
		Transbordo_Sprint_Anterior: boolean;
	}
	interface SprintProgramadorRetorno extends SiSMoura.Core.Common.Entity {
		Categoria: number;
		Codigo: number;
		Codigo_Sprint_Programador: number;
		Dias_Baixa: number;
		Horas_Disponiveis: number;
		Horas_Restantes: number;
		Horas_Utilizadas: number;
		Pontos: number;
		Porc_Tempo_Sprint: number;
		Programador: string;
	}
	interface Subgrupo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Comissao: number;
		Descricao: string;
		Inativo: boolean;
		Roteador_Enviou: boolean;
		Roteador_Puxou: boolean;
		Subgrupo_Internet: number;
	}
	interface Superon_Order_Client extends SiSMoura.Core.Common.Entity {
		City: string;
		Codigo: number;
		Cpf_Cnpj: string;
		Detail: string;
		Id_Client_Erp: number;
		Idcliente: string;
		Name: string;
		Neighbourhood: string;
		Superon_Order: number;
		Text_Address: string;
	}
	interface Superon_Order_Payment_Method extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Description: string;
		Id_Cobranca_Erp: number;
		Id_Payment_Method_Erp: number;
		Id_Supplier_Erp: number;
		Price_Factor: number;
		Superon_Order: number;
	}
	interface Superon_Order_Products extends SiSMoura.Core.Common.Entity {
		Barcode: string;
		Codigo: number;
		Description: string;
		Id_Product_Erp: number;
		Idproduct: string;
		Internalcode: number;
		Maxitensperorder: number;
		Netvalue: number;
		Price: number;
		Quantity: number;
		Superon_Order: number;
		Unit: string;
	}
	interface Superon_Orders extends SiSMoura.Core.Common.Entity {
		Cliente: SiSMoura.Core.Entity.Superon_Order_Client;
		Codigo: number;
		Date: Date;
		Deliveryfee: number;
		Discounttotal: number;
		FormaPagamento: SiSMoura.Core.Entity.Superon_Order_Payment_Method;
		Id_Order_Erp: number;
		Idorder: string;
		Idsuppliererp: number;
		Netvalue: number;
		Numorder: number;
		Ordertotal: number;
		Produtos: SiSMoura.Core.Entity.Superon_Order_Products[];
		Status_Order: string;
	}
	interface Systax_Cenario extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Id: number;
	}
	interface Systax_Origem extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Id: number;
	}
	interface Systax_Parametro extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		ParametrosEmpresa: SiSMoura.Core.Entity.Systax_Parametro_Empresa[];
		SQL_Banco: string;
		SQL_Senha: string;
		SQL_Servidor: string;
		SQL_Usuario: string;
	}
	interface Systax_Parametro_Empresa extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Origem_Systax: number;
		Codigo_Parametro: number;
		Empresa: number;
		EmpresaDesc: string;
		OrigemDesc: string;
	}
	interface Systax_Produto extends SiSMoura.Core.Common.Entity {
		Codigoproduto: number;
		Id: number;
	}
	interface Systax_Regra_Imposto extends SiSMoura.Core.Common.Entity {
		CFOP_Entrada: string;
		CFOP_Saida: string;
		Codigo_Cenario: number;
		Cofins_Aliq_Entrada: number;
		Cofins_Aliq_Saida: number;
		Cofins_CST_Entrada: string;
		Cofins_CST_Saida: string;
		Data_Alteracao: Date;
		ENT_SAI: string;
		Icms_Aliq: number;
		Icms_Base_Reducao: number;
		Icms_Cst: string;
		Icms_FCP_Aliq: number;
		Icms_ST_Aliq: number;
		Icms_ST_Base_Reducao: number;
		Icms_ST_FCP_Aliq: number;
		Icms_ST_IVA: number;
		ID: number;
		Ipi_Aliq_Entrada: number;
		Ipi_Aliq_Saida: number;
		Ipi_Cod_Enquad: string;
		Ipi_CST_Entrada: string;
		Ipi_CST_Saida: string;
		isRetornoSystax: boolean;
		Pis_Aliq_Entrada: number;
		Pis_Aliq_Saida: number;
		Pis_CST_Entrada: string;
		Pis_CST_Saida: string;
		Produto_CEST: string;
		Produto_Codigo: number;
		Produto_Descricao: string;
		Produto_NCM: string;
		UF_DESTINO: string;
		UF_ORIGEM: string;
	}
	interface Systextil_Tabela_Preco extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Desconto: number;
		ID: number;
		Preco: number;
		Tabela: string;
	}
	interface Tabela_Descricao extends SiSMoura.Core.Common.Entity {
		Codigo: string;
		Descricao: string;
		Id: number;
	}
	interface Tabela_Ibpt extends SiSMoura.Core.Common.Entity {
		Data_Carga: Date;
		Estadual: number;
		Id: number;
		Importados_Federal: number;
		Municipal: number;
		Nacional_Federal: number;
		Ncm: string;
		Origem: number;
		Uf: string;
		Versao: string;
		Vigencia_Fim: Date;
		Vigencia_Inicio: Date;
	}
	interface Tabela_Ncm_Cest extends SiSMoura.Core.Common.Entity {
		Cest: string;
		Descricao_Cest: string;
		Id: number;
		ID_CEST: number;
		Ncm: string;
	}
	interface Tabela_Preco_Empresa extends SiSMoura.Core.Common.Entity {
		Empresa: number;
		Id: number;
		Lista_Padrao: boolean;
		Tabela_Preco: number;
	}
	interface Tablet_Rota_Venda extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data: Date;
		Dia_Semana: number;
		Latitude_Destino: string;
		Longitude_Destino: string;
		Vendedor: number;
	}
	interface Tablet_Rota_Venda_Cliente extends SiSMoura.Core.Common.Entity {
		Cliente: number;
		Codigo: number;
		Data_Hora: Date;
		Distancia: string;
		Latitude_Destino: string;
		Latitude_Visita: string;
		Longitude_Destino: string;
		Longitude_Visita: string;
		Observacao: string;
		Observacao_Visita: string;
		Ordem: number;
		Rota: number;
		Visitado: boolean;
	}
	interface Tef_Auttar_Bandeira extends SiSMoura.Core.Common.Entity {
		Bandeira: string;
		Codigo: number;
	}
	interface Tipo_Empresa extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface Tipo_Servico_Os extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
	}
	interface TipoOrcamentoInfoRetorno {
		Codigo_Cliente: number;
		IsValorCreditoIgualTotal: boolean;
		ValorCreditoBaixar: number;
		ValorCreditoCliente: number;
		ValorCreditoUtilizado: number;
	}
	interface Transportadora extends SiSMoura.Core.Common.Entity {
		Delivery: boolean;
		Pessoa: number;
		PessoaEntity: SiSMoura.Core.Entity.Pessoa;
		Tipo: string;
		Transportadora_PlacaEntity: SiSMoura.Core.Entity.Transportadora_Placa[];
	}
	interface Transportadora_Placa extends SiSMoura.Core.Common.Entity {
		ID: number;
		Placa: string;
		Rntc: string;
		Transportadora: number;
		Uf: string;
	}
	interface TransportadoraRetorno extends SiSMoura.Core.Common.Entity {
		Cliente: string;
		Transportadora: string;
	}
	interface TSConfiguracoes {
		ConfiguacoesRetaguarda: SiSMoura.Core.Common.ConfiguracoesRetaguarda;
		Configuracoes_Fiscal: SiSMoura.Core.Common.Configuracoes_Fiscal;
		Configuracoes_Pet: SiSMoura.Core.Common.Configuracoes_Pet;
		Configurar_Financeiro: SiSMoura.Core.Common.Configurar_Financeiro;
	}
	interface UltimaCompraRetorno extends SiSMoura.Core.Common.Entity {
		Bairro: string;
		Cidade: string;
		Cliente: number;
		Data: Date;
		Endereco: string;
		Nome: string;
		Observacao: string;
		Ordem: number;
		Saldo_Devedor: number;
		Telefone: string;
		Valor_Ultima_Compra: number;
	}
	interface Usuario extends SiSMoura.Core.Common.Entity {
		Abreviacao: string;
		Agencia: string;
		Autonomo: boolean;
		Bairro: string;
		Banco: string;
		Bloquear_Finalizar_Venda: boolean;
		Carteira_Habilitacao: string;
		Celular: string;
		Cep: string;
		Cidade: number;
		CNH_Categoria: string;
		CNH_Orgao: number;
		CNH_Validade: Date;
		Codigo: number;
		Codigo_Admissao: number;
		Codigo_Barra: string;
		Comissao_Venda: number;
		Complemento: string;
		Conta_Corrente: string;
		Contador: boolean;
		Contrato_Experiencia_Ate: Date;
		Contrato_Experiencia_De: Date;
		Cpf: string;
		Ctps: string;
		Cursos: SiSMoura.Core.Entity.Curso_Usuario[];
		Data_Admissao: Date;
		Data_Cadastro: Date;
		Data_Carga: Date;
		Data_Demissao: Date;
		Data_Emissao: Date;
		Data_Nasc_Mae: Date;
		Data_Nascimento: Date;
		Data_Senha: Date;
		Deficiencia: number;
		Demitido: boolean;
		Departamento: number;
		Deposito_Padrao: number;
		Dias_Prorrogacao: number;
		Dt_Admissao: Date;
		Dt_Nasc: Date;
		Email: string;
		Emissao_Ctps: Date;
		Emissao_Pis: Date;
		Empresa: number;
		Empresa_Contratual: number;
		Empresas_Usuario: SiSMoura.Core.Entity.Usuario_Empresa[];
		Endereco: string;
		Entregador: boolean;
		Estado_Civil: string;
		Ex_Medico: Date;
		Farmaceutico: boolean;
		Filho: boolean;
		Folha_Ficha: string;
		Fone: string;
		Forma_pagamento: number;
		Formacao_Academica: string;
		Franqueado: boolean;
		Franqueador: boolean;
		Freelancer: boolean;
		Funcao: number;
		Grau_Instrucao: number;
		Grau_Risco: number;
		Grupos_Usuario: SiSMoura.Core.Entity.Usuario_Grupo[];
		Hora_Entrada_1: string;
		Hora_Entrada_2: string;
		Hora_Saida_1: string;
		Hora_Saida_2: string;
		Horas_Trabalhar: string;
		Hrs_Mensais: string;
		Hrs_Semanais: string;
		isMoura: boolean;
		Naturalidade: number;
		Nivel: string;
		Nome: string;
		Nome_Banco: string;
		Nome_Conjugue: string;
		Nome_Mae: string;
		Numero_Residencia: string;
		Observacao: string;
		Orgao_Exp: string;
		Perfil_Administrativo: boolean;
		Pis: string;
		Qtde_Passe_Dia: number;
		Raca_Cor: number;
		Reservista: string;
		Rg: string;
		Rh_Funcionario_Horario: SiSMoura.Core.Entity.Rh_Funcionario_Horario[];
		Roteador_Puxou: boolean;
		Salario_Encript: string;
		SalarioDecript: string;
		Secao: string;
		Senha: string;
		Serie_Ctps: string;
		Setor: number;
		Sexo: number;
		Sindicato: number;
		Situacao: string;
		Socio: boolean;
		Termino_Contribuicao_Prorrogacao: Date;
		Tipo_Conta_Bancaria: number;
		Tipo_Contrato: number;
		Tipo_Tributacao_Sindical: number;
		Titulo_Eleitor: string;
		Trabalhador_Categoria: string;
		UF_CTPS: string;
		Usuario_Secao: number;
		Usuario_Todas_Empresas: boolean;
		Usuario_Windows: string;
		Valor_Passe: number;
		Vendedor: boolean;
		Vinculo_Empregatico: number;
		Zona: string;
		Zonas_Venda: SiSMoura.Core.Entity.Usuario_Zonavenda[];
	}
	interface Usuario_Bonificacao extends SiSMoura.Core.Common.Entity {
		Bonificacao: number;
		Codigo: number;
		Funcionario: number;
		Meta_Maxima: number;
		Meta_Minima: number;
		Tipo_Bonificacao: number;
	}
	interface Usuario_Empresa extends SiSMoura.Core.Common.Entity {
		Data_Carga: Date;
		Empresa: number;
		Id: number;
		Usuario: number;
	}
	interface Usuario_Grupo extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data_Carga: Date;
		Grupo: number;
		Usuario: number;
	}
	interface Usuario_Meta extends SiSMoura.Core.Common.Entity {
		Bonificacao: number;
		Codigo: number;
		Data: Date;
		Funcionario: number;
		Meta: number;
		Tipo_Bonificacao: number;
		Tipo_Meta: number;
	}
	interface Usuario_Os_Configuracao extends SiSMoura.Core.Common.Entity {
		Desconto_Maximo_Os: number;
		Desconto_Maximo_Produto: number;
		Desconto_Maximo_Servico: number;
		Funcionario: number;
	}
	interface Usuario_Zonavenda extends SiSMoura.Core.Common.Entity {
		Contador: number;
		Id: number;
		Usuario: number;
		Zona_Venda: number;
	}
	interface Usuario_ZonavendaRetorno {
		Codigo_Zona_Venda: number;
		Contador: number;
		Descricao_Zona_Venda: string;
		ID: number;
		Zona_Venda: number;
	}
	interface UsuarioBasicoRetorno {
		Codigo: number;
		Codigo_Barra: string;
		Nome: string;
		PIS: string;
	}
	interface ValorPagamentoRetorno extends SiSMoura.Core.Common.Entity {
		Item: number;
		Valor: number;
	}
	interface Venda extends SiSMoura.Core.Common.Entity {
		Acrescimo: number;
		Autorizacao_Datasus: string;
		Autorizacao_Redecon: string;
		Caixa: number;
		Caixa_Interno: number;
		Cancelada: boolean;
		Carro: string;
		Cartoes: SiSMoura.Core.Entity.Cartao_Recebido[];
		Ccf: number;
		Cdc: number;
		Cdc_Dias: number;
		Cdc_Fator: number;
		Cheques: SiSMoura.Core.Entity.Cheques[];
		Cliente: number;
		Cliente_Delivery: number;
		ClienteEntity: SiSMoura.Core.Entity.Pessoa;
		Cod_Veiculo: number;
		Codigo: number;
		Codigo_CFe: number;
		Codigo_Cupom_Fiscal: number;
		Codigo_Entrega: number;
		Codigo_Orcamento: number;
		Comanda_Mesa: string;
		Comissao_Comissionado: number;
		Comissionado: number;
		Condicao_Pagamento: number;
		Conta_Receber_Baixada: boolean;
		Cpf_Cliente: string;
		Cpf_Cnpj_Participante: string;
		Crm_Prescritor: string;
		Cupom_Fiscal: boolean;
		Data: Date;
		Data_Cancelada: Date;
		Data_Cupom: Date;
		Data_Emissao_Prescricao: Date;
		Dependente: string;
		Deposito: number;
		Desconto: number;
		Desconto_Manual: boolean;
		Desconto_Porcentagem: number;
		Ecf: number;
		Ecf_Gt: string;
		Emitiu_Vinculado: string;
		Empresa: number;
		Encomenda_Semanal: boolean;
		Endereco_Cliente: string;
		Entrega: boolean;
		Entregue: boolean;
		Fiscal_Nf: SiSMoura.Core.Entity.Fiscal_Nf;
		Fone_Cliente: string;
		FormaPagamentoString: string;
		Hash: string;
		isVendaPdvNet: boolean;
		Itens: number;
		Km: number;
		Mensagem_Final_Informada: string;
		Motivo_Cancelamento: string;
		Motorista: string;
		Nome_Cliente: string;
		Nome_Computador: string;
		Nome_Participante: string;
		Nota_Fiscal: number;
		Numero_Chamada: number;
		Numero_Entrega: number;
		Operador: number;
		Paf_Cupom_Fiscal_Dav: string;
		Paf_Dav: string;
		Paf_Dav_Titulo: string;
		Paf_Md5: string;
		Paf_Pv: string;
		Pdv: number;
		Pedido_Externo: string;
		Placa: string;
		Pontos_Utilizados: number;
		PostoBombaAbastecimentoList: SiSMoura.Core.Entity.Posto_Bomba_Abastecimento[];
		Produtos: SiSMoura.Core.Entity.Venda_Item[];
		Qtde_Ponto: number;
		Quantidade_Pessoas_Mesa: number;
		Roteador_Puxou: boolean;
		Sat_Nf: SiSMoura.Core.Entity.Sat_Nf;
		Tef_Passou: string;
		TefDedicadoList: SiSMoura.Core.Entity.Venda_Tef_Dedicado[];
		TefDiscadoList: SiSMoura.Core.Entity.Venda_Tef_Discado[];
		Texto_Final: string;
		Texto_Ibpt: string;
		Tipo_Impressao: string;
		Troca_Origem: number;
		Uf_Prescritor: string;
		Usuario_Cancelou: number;
		Usuario_Liberou_Desconto: number;
		UsuarioLogadoEntity: SiSMoura.Core.Entity.Usuario;
		Valor: number;
		Valor_Cartao: number;
		Valor_Cartao_Credito: number;
		Valor_Cartao_Debito: number;
		Valor_Cheque_Prazo: number;
		Valor_Cheque_Vista: number;
		Valor_Cliente: number;
		Valor_Contra_Vale: number;
		Valor_Credito: number;
		Valor_Credito_Utilizado: number;
		Valor_Dinheiro: number;
		Valor_Final: number;
		Valor_Fp_Cliente: number;
		Valor_Fp_Governo: number;
		Valor_Impostos: number;
		Valor_Pago: number;
		Valor_Ponto: number;
		Valor_Ticket: number;
		Valor_Troca: number;
		Valor_Troco: number;
		Venda_Crediario: SiSMoura.Core.Entity.Venda_Crediario;
		Venda_Preco_Custo: string;
		VendaPagamentos: SiSMoura.Core.Entity.Venda_Pagamento[];
		Vendedor: number;
		VendedorEntity: SiSMoura.Core.Entity.Usuario;
		Versao_Sistema: string;
		Vista_Prazo: string;
		Volumes: number;
	}
	interface Venda_Crediario {
		Conta_Corrente: number;
		Doc_Mercantil: number;
		N_Doc_Mercantil: string;
		Parcelas: SiSMoura.Core.Entity.Venda_Crediario_Parcelas[];
	}
	interface Venda_Crediario_Parcelas {
		Parcela: number;
		Valor: number;
		Vencimento: Date;
	}
	interface Venda_Espera extends SiSMoura.Core.Common.Entity {
		Aberto_Data: Date;
		Aberto_Micro: string;
		Aberto_Usuario: number;
		Assinatura_Digital_Registro: string;
		Atendimento: number;
		Bico: number;
		Bomba: number;
		Cancelado: boolean;
		Cardapio_Online_Mesa: number;
		Cardapio_Online_Pedido: number;
		Cliente: number;
		Cliente_Entrega: number;
		Cod_Abastecimento: number;
		Cod_Seq: number;
		Codigo: string;
		Codigo_Fornecedor: number;
		Codigo_Os: number;
		Codigo_Pocket: number;
		Codigo_Troca: number;
		Comanda_Microterminal: string;
		Comissao: number;
		Cupom_Conferencia_Coo: number;
		Cupom_Conferencia_Numero_Ecf: number;
		Data: Date;
		Data_Abertura: Date;
		Dependente: number;
		Deposito: number;
		Desconto_Fechamento: number;
		Desconto_Troca: number;
		Empresa: number;
		Entrega: boolean;
		Fator2: number;
		Fator3: number;
		Finalizar_Atendimento: boolean;
		IdMouraBurger_Venda: number;
		Impresso: boolean;
		Impresso_Ambiente: boolean;
		Impresso_Comanda: boolean;
		IsVendaDiferenciada: boolean;
		Item: number;
		Kit: boolean;
		Lote: string;
		Mesa: number;
		Mesa_Anterior: number;
		Mesa_Originou_Pedido: number;
		Numero_Chamada: number;
		Numero_Entrega: number;
		Numero_Mesa: number;
		Observacao: string;
		Observacao_Fechamento: string;
		Pdv: number;
		Preco_Custo: number;
		Prevenda: string;
		Produto: number;
		Programa_Desconto: string;
		Quantidade: number;
		Servico_Tela_Fechamento: string;
		Taxa_Tributaria: number;
		Texto_Final: string;
		Total: number;
		Unidade: string;
		Unitario: number;
		Valor_Acrescimo_Item: number;
		Valor_Desconto_Item: number;
		Valor_Desconto_Item_Porcentagem: number;
		Venda_Controlado: number;
		Vendedor: number;
	}
	interface Venda_Fatura extends SiSMoura.Core.Common.Entity {
		Cancelada: boolean;
		Codigo: number;
		Data_Cancelamento: Date;
		Guia_Remessa: string;
		Guia_Transporte: string;
		Nota_Credito: string;
		Numeracao: string;
		Numero: number;
		Serie: string;
		Tipo_Documento: string;
		Venda: number;
	}
	interface Venda_Item extends SiSMoura.Core.Common.Entity {
		Acrescimo: number;
		Atendimento: number;
		Bico: number;
		Bomba: number;
		Brinde: boolean;
		Cancelado: boolean;
		Cliente_Cartao_Presente: number;
		Codigo_Abastecimento: number;
		Codigo_Fornecedor: number;
		Comanda: string;
		Comissao: number;
		Comissao_Valor: number;
		Data_Comissao_Paga: Date;
		Deposito: number;
		Desconto: number;
		Encerranteqtde: number;
		Encerrantevalor: number;
		Farmacia_Receita: number;
		Fator: number;
		Fator2: number;
		Fator3: number;
		Finalizar_Atendimento: boolean;
		Id: number;
		Indicacao_Origem_Indicado: number;
		Item: number;
		IVA_Porcentagem: number;
		IVA_Valor: number;
		Kit: boolean;
		Lista_Preco: number;
		Lote: string;
		Numero_Cartao_Presente: number;
		Observacao: string;
		Observacao_Cartao_Presente: string;
		Pago_Comissao: boolean;
		Pontos_Produto: number;
		Preco_Desconto: number;
		Preco_Produto_Normal: number;
		Produto: number;
		Promocao: boolean;
		Qtde_Prescrita: number;
		Qtde_Solicitada: number;
		Quantidade: number;
		Quantidade_Entregue: number;
		Taxa_Tributaria: number;
		Tipo_Comissao: string;
		Truncar_Total: number;
		Und_Conversao_Qtde: number;
		Und_Conversao_Unidade: string;
		Und_Conversao_Valor: number;
		Valor_Custo: number;
		Valor_Total: number;
		Valor_Unitario: number;
		Valor_Venda: number;
		Venda: number;
		Vendedor: number;
		Volume: number;
	}
	interface Venda_Pagamento extends SiSMoura.Core.Common.Entity {
		Autorizacao_Afapi: number;
		Autorizacao_Orgcard: string;
		Cdc: boolean;
		Conta_Corrente: number;
		Data_Vencimento: Date;
		Documento_Bancario: number;
		Documento_Mercantil: number;
		Id: number;
		N_Doc_Merc: string;
		Parcela: number;
		Valor: number;
		Venda: number;
	}
	interface Venda_Perfil extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		Documento_Descricao: string;
		Documento_Fiscal_Venda: number;
		Utilizar_Codigo_Empresa_Venda: boolean;
		Venda_3_Casas: boolean;
	}
	interface Venda_Produto_Conferencia extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Data: Date;
		Produtos: SiSMoura.Core.Entity.Venda_Produto_Conferencia_Produto[];
		Usuario_Responsavel: number;
		Venda: SiSMoura.Core.Entity.Venda_Produto_Conferencia_Venda;
	}
	interface Venda_Produto_Conferencia_Produto extends SiSMoura.Core.Common.Entity {
		Conferencia: number;
		Id: number;
		Produto: number;
		Qtde_Conferida: number;
		Qtde_Venda: number;
	}
	interface Venda_Produto_Conferencia_Venda extends SiSMoura.Core.Common.Entity {
		Conferencia: number;
		Id: number;
		Venda: number;
	}
	interface Venda_Tef_Dedicado extends SiSMoura.Core.Common.Entity {
		Bandeira: string;
		Bandeira_Numero: number;
		Bandeira_Original: number;
		Bin: string;
		Codigo_Autorizacao: string;
		Codigo_Estabelecimento: string;
		Codigo_Recebimento: number;
		Data_Transacao: Date;
		Grupo_Modalidade: string;
		Id: number;
		Instituicao_Transacao: string;
		Modalidade_Pagamento: string;
		Modalidade_Pagamento_Texto: string;
		Nome_Instituicao: string;
		Nsu_Host: string;
		Nsu_Sitef: string;
		Operadora: string;
		Parcelas: number;
		Subgrupo_Modalidade: string;
		Tipo_Cartao_Lido: number;
		Valor_Aprovado: number;
		Valor_Desconto_Tef: number;
		Valor_Saque_Tef: number;
		Venda: number;
		Via_Cliente: string;
		Via_Estabelecimento: string;
	}
	interface Venda_Tef_Discado extends SiSMoura.Core.Common.Entity {
		Autorizacao: string;
		Bandeira: string;
		Coo: string;
		Data_Transacao: Date;
		Empresa: number;
		Id: number;
		Nsu: string;
		Operadora: string;
		Qtde_Parcelas: number;
		Valor_Transacao: number;
		Venda: number;
	}
	interface VendaItemRetorno {
		Caixa: number;
		Codigo: number;
		Codigo_Produto: number;
		Data_Cancelada: Date;
		Pdv: number;
		Quantidade: number;
		Valor_Total: number;
		Valor_Unitario: number;
	}
	interface VendaItemWebRetorno {
		Acrescimo: number;
		Alteracao: string;
		Alterado: string;
		Atendimento: number;
		Bico: number;
		Bomba: number;
		Brinde: boolean;
		Cancelado: boolean;
		Cliente_Cartao_Presente: number;
		Codigo_Abastecimento: number;
		Codigo_Fornecedor: number;
		CodProduto: number;
		Comanda: string;
		Comissao: number;
		Comissao_Valor: number;
		Data_Comissao_Paga: Date;
		Deposito: number;
		Desconto: number;
		Encerranteqtde: number;
		Encerrantevalor: number;
		Farmacia_Receita: number;
		Fator: number;
		Fator2: number;
		Fator3: number;
		Finalizar_Atendimento: boolean;
		Id: number;
		Item: number;
		Kit: boolean;
		Lista_Preco: number;
		Lote: string;
		Nome_Produto: string;
		Numero_Cartao_Presente: number;
		Observacao: string;
		Observacao_Cartao_Presente: string;
		Pago_Comissao: boolean;
		Pontos_Produto: number;
		Preco_Desconto: number;
		Preco_Produto_Normal: number;
		Produto: string;
		Promocao: boolean;
		Qtde_Prescrita: number;
		Qtde_Solicitada: number;
		Qtde_Unit: number;
		Quantidade: number;
		Taxa_Tributaria: number;
		Tipo_Comissao: string;
		Truncar_Total: number;
		Valor_Custo: number;
		Valor_Total: number;
		Valor_Unitario: number;
		Valor_Venda: number;
		Venda: number;
		Vendedor: number;
	}
	interface VendaProdutoConferenciaProdutoRetorno {
		Codigo: number;
		Contador: number;
		Cor: string;
		Diferenca: number;
		Linha: string;
		Marca: string;
		Nome_Produto: string;
		Produto: number;
		Qtde_Conferida: number;
		Qtde_Venda: number;
		Referencia: string;
		Tamanho: string;
		Venda: number;
	}
	interface VendaRetorno extends SiSMoura.Core.Common.Entity {
		Bairro: string;
		Cancelada: boolean;
		Cep: string;
		Cidade: string;
		Cliente: string;
		Cnpj: string;
		Codigo_Cliente: number;
		Condicao_Pagamento: string;
		Data: Date;
		Desconto: number;
		DescontoP: number;
		Documento_Bancario: string;
		Endereco: string;
		Hash: string;
		NFe: string;
		Orcamento: number;
		Ordem: number;
		Situacao: string;
		Telefone: string;
		Tipo: string;
		Valor: number;
		Valor_IVA: number;
		Vencimentos: string;
		Venda: number;
		Vendedor: string;
		Volume: number;
		Zona_de_Venda: string;
	}
	interface VendaWebRetorno extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Codigo_Barra: string;
		Controlado: boolean;
		Descricao: string;
		ExibirSemEstoque: boolean;
		Inativo: boolean;
		Item: number;
		Preco_Custo: number;
		Preco_Desconto: number;
		Preco_Venda_Original: number;
		Quantidade: number;
		QuantidadeEstoque: number;
		Servico: boolean;
		Servico_Pet: boolean;
		Taxa_Tributaria: number;
		Total: number;
		Unidade: string;
		Unitario: number;
		Vendedor: number;
	}
	interface Ybg_Adicionais extends SiSMoura.Core.Common.Entity {
		Data_Carga: Date;
		Descricao: string;
		Exibir_Grupo_Correspondente: boolean;
		Id: number;
		Nome_Produto: string;
		Ordem_Exibir: number;
		Produto: number;
	}
	interface Zona_Entrega extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Descricao: string;
		ZonasEntregaSemanal: SiSMoura.Core.Entity.Zona_Entrega_Semanal[];
	}
	interface Zona_Entrega_Semanal extends SiSMoura.Core.Common.Entity {
		Codigo: number;
		Dia_Semana: number;
		Zona_Entrega: number;
	}
	interface Zona_Venda extends SiSMoura.Core.Common.Entity {
		Cod_Responsavel: number;
		Cod_Taxa_Servico: number;
		Codigo: number;
		Comissao: number;
		Data_Carga: Date;
		Descricao: string;
		Zona_Venda_Comissao_Itens: SiSMoura.Core.Entity.Zona_Venda_Comissao[];
	}
	interface Zona_Venda_Comissao extends SiSMoura.Core.Common.Entity {
		Cod_Conta_Contabil: number;
		Cod_Zona_Venda: number;
		Codigo: number;
		Comissao: number;
	}
	interface ZonaVendaComissaoRetorno {
		Cod_Zona_Venda: number;
		Comissao: number;
		Conta_Contabil_Codigo: number;
		Conta_Contabil_Descricao: string;
		Contador: number;
	}
}
declare module SiSMoura.Core.Entity.ReceitaWS {
	interface AtividadePrincipal {
		code: string;
		text: string;
	}
	interface AtividadesSecundaria {
		code: string;
		text: string;
	}
	interface Billing {
		database: boolean;
		free: boolean;
	}
	interface Qsa {
		nome: string;
		qual: string;
	}
	interface RetornoConsultaCNPJApi {
		abertura: string;
		atividade_principal: SiSMoura.Core.Entity.ReceitaWS.AtividadePrincipal[];
		atividades_secundarias: SiSMoura.Core.Entity.ReceitaWS.AtividadesSecundaria[];
		bairro: string;
		billing: SiSMoura.Core.Entity.ReceitaWS.Billing;
		capital_social: string;
		cep: string;
		cnpj: string;
		complemento: string;
		data_situacao: string;
		data_situacao_especial: string;
		efr: string;
		email: string;
		extra: any;
		fantasia: string;
		logradouro: string;
		motivo_situacao: string;
		municipio: string;
		natureza_juridica: string;
		nome: string;
		numero: string;
		porte: string;
		qsa: SiSMoura.Core.Entity.ReceitaWS.Qsa[];
		situacao: string;
		situacao_especial: string;
		status: string;
		telefone: string;
		tipo: string;
		uf: string;
		ultima_atualizacao: Date;
	}
}
declare module Sismoura.Web.View {
	interface EntradaInformacoesProduto {
		Animal_Silvestre: boolean;
		Codigo_Produto: number;
		Conta_Contabil_Financeira: number;
		Fornecedor: number;
		Localizacao: string;
		Mensagem_Alerta: string;
		NCM: string;
		Quantiade_Estoque: number;
		Quantidade_Caixa: number;
		RegraImposto: Sismoura.Web.View.EntradaInformacoesProdutoRegraImposto;
		Unidade: string;
		Valor_Unitario: number;
	}
	interface EntradaInformacoesProdutoRegraImposto {
		Aliquota_COFINS: number;
		Aliquota_PIS: number;
		Base_COFINS: number;
		Base_ICMS: number;
		Base_ICMS_ST: number;
		Base_PIS: number;
		CFOP: string;
		CST: string;
		ST_COFINS: string;
		ST_PIS: string;
	}
	interface EntradaProdutoXMLRetorno {
		Carregado: boolean;
		Chave_Entrada: number;
		CNPJ_Fornecedor: string;
		Duplicatas: SiSMoura.Core.Entity.EntradaProdutoDuplicata[];
		Empresa_Codigo: number;
		Fornecedor_Bairro: string;
		Fornecedor_CEP: string;
		Fornecedor_Cidade_IBGE: string;
		Fornecedor_CNPJ: string;
		Fornecedor_Codigo: number;
		Fornecedor_Fantasia: string;
		Fornecedor_IE: string;
		Fornecedor_Logradouro: string;
		Fornecedor_Numero_Endereco: string;
		Fornecedor_Razao_Social: string;
		Fornecedor_Tipo: string;
		Mensagem_Alerta: string;
		Nome_Arquivo: string;
		Nota_Base_ICMS: number;
		Nota_Chave_Acesso: string;
		Nota_Conteudo_XML: string;
		Nota_Data_Emissao: Date;
		Nota_Data_Entrada: Date;
		Nota_Informacoes_Adicionais: string;
		Nota_Numero: string;
		Nota_Outras_Despesas: number;
		Nota_Peso_Bruto: number;
		Nota_Peso_Liquido: number;
		Nota_Serie: string;
		Nota_Valor_Desconto: number;
		Nota_Valor_Frete: number;
		Nota_Valor_ICMS: number;
		Nota_Valor_ICMS_ST: number;
		Nota_Valor_IPI: number;
		Nota_Valor_Produtos: number;
		Nota_Valor_Seguro: number;
		Nota_Valor_Total: number;
		Pedidos: number[];
		Produtos: SiSMoura.Core.Entity.ProdutoImportadoNfe[];
	}
	interface MouraPagePermissoesTela {
		Alterar: boolean;
		Excluir: boolean;
		Gravar: boolean;
		Imprimir: boolean;
	}
}
declare module Sismoura.Web.View.Sprint {
	interface Item {
		id: string;
		podeAtrasar: boolean;
		title: string;
		transbordo: boolean;
	}
	interface RetornoSprint {
		class: string;
		dragTo: string;
		id: string;
		item: Sismoura.Web.View.Sprint.Item[];
		title: string;
	}
}
declare module System {
	interface Guid {
	}
	interface MarshalByRefObject {
	}
	interface TimeSpan {
		Days: number;
		Hours: number;
		Milliseconds: number;
		Minutes: number;
		Seconds: number;
		Ticks: number;
		TotalDays: number;
		TotalHours: number;
		TotalMilliseconds: number;
		TotalMinutes: number;
		TotalSeconds: number;
	}
}
declare module System.Collections.Generic {
	interface KeyValuePair<TKey, TValue> {
		Key: TKey;
		Value: TValue;
	}
}
declare module System.Drawing {
	interface Color {
		A: number;
		AliceBlue: System.Drawing.Color;
		AntiqueWhite: System.Drawing.Color;
		Aqua: System.Drawing.Color;
		Aquamarine: System.Drawing.Color;
		Azure: System.Drawing.Color;
		B: number;
		Beige: System.Drawing.Color;
		Bisque: System.Drawing.Color;
		Black: System.Drawing.Color;
		BlanchedAlmond: System.Drawing.Color;
		Blue: System.Drawing.Color;
		BlueViolet: System.Drawing.Color;
		Brown: System.Drawing.Color;
		BurlyWood: System.Drawing.Color;
		CadetBlue: System.Drawing.Color;
		Chartreuse: System.Drawing.Color;
		Chocolate: System.Drawing.Color;
		Coral: System.Drawing.Color;
		CornflowerBlue: System.Drawing.Color;
		Cornsilk: System.Drawing.Color;
		Crimson: System.Drawing.Color;
		Cyan: System.Drawing.Color;
		DarkBlue: System.Drawing.Color;
		DarkCyan: System.Drawing.Color;
		DarkGoldenrod: System.Drawing.Color;
		DarkGray: System.Drawing.Color;
		DarkGreen: System.Drawing.Color;
		DarkKhaki: System.Drawing.Color;
		DarkMagenta: System.Drawing.Color;
		DarkOliveGreen: System.Drawing.Color;
		DarkOrange: System.Drawing.Color;
		DarkOrchid: System.Drawing.Color;
		DarkRed: System.Drawing.Color;
		DarkSalmon: System.Drawing.Color;
		DarkSeaGreen: System.Drawing.Color;
		DarkSlateBlue: System.Drawing.Color;
		DarkSlateGray: System.Drawing.Color;
		DarkTurquoise: System.Drawing.Color;
		DarkViolet: System.Drawing.Color;
		DeepPink: System.Drawing.Color;
		DeepSkyBlue: System.Drawing.Color;
		DimGray: System.Drawing.Color;
		DodgerBlue: System.Drawing.Color;
		Firebrick: System.Drawing.Color;
		FloralWhite: System.Drawing.Color;
		ForestGreen: System.Drawing.Color;
		Fuchsia: System.Drawing.Color;
		G: number;
		Gainsboro: System.Drawing.Color;
		GhostWhite: System.Drawing.Color;
		Gold: System.Drawing.Color;
		Goldenrod: System.Drawing.Color;
		Gray: System.Drawing.Color;
		Green: System.Drawing.Color;
		GreenYellow: System.Drawing.Color;
		Honeydew: System.Drawing.Color;
		HotPink: System.Drawing.Color;
		IndianRed: System.Drawing.Color;
		Indigo: System.Drawing.Color;
		IsEmpty: boolean;
		IsKnownColor: boolean;
		IsNamedColor: boolean;
		IsSystemColor: boolean;
		Ivory: System.Drawing.Color;
		Khaki: System.Drawing.Color;
		Lavender: System.Drawing.Color;
		LavenderBlush: System.Drawing.Color;
		LawnGreen: System.Drawing.Color;
		LemonChiffon: System.Drawing.Color;
		LightBlue: System.Drawing.Color;
		LightCoral: System.Drawing.Color;
		LightCyan: System.Drawing.Color;
		LightGoldenrodYellow: System.Drawing.Color;
		LightGray: System.Drawing.Color;
		LightGreen: System.Drawing.Color;
		LightPink: System.Drawing.Color;
		LightSalmon: System.Drawing.Color;
		LightSeaGreen: System.Drawing.Color;
		LightSkyBlue: System.Drawing.Color;
		LightSlateGray: System.Drawing.Color;
		LightSteelBlue: System.Drawing.Color;
		LightYellow: System.Drawing.Color;
		Lime: System.Drawing.Color;
		LimeGreen: System.Drawing.Color;
		Linen: System.Drawing.Color;
		Magenta: System.Drawing.Color;
		Maroon: System.Drawing.Color;
		MediumAquamarine: System.Drawing.Color;
		MediumBlue: System.Drawing.Color;
		MediumOrchid: System.Drawing.Color;
		MediumPurple: System.Drawing.Color;
		MediumSeaGreen: System.Drawing.Color;
		MediumSlateBlue: System.Drawing.Color;
		MediumSpringGreen: System.Drawing.Color;
		MediumTurquoise: System.Drawing.Color;
		MediumVioletRed: System.Drawing.Color;
		MidnightBlue: System.Drawing.Color;
		MintCream: System.Drawing.Color;
		MistyRose: System.Drawing.Color;
		Moccasin: System.Drawing.Color;
		Name: string;
		NavajoWhite: System.Drawing.Color;
		Navy: System.Drawing.Color;
		OldLace: System.Drawing.Color;
		Olive: System.Drawing.Color;
		OliveDrab: System.Drawing.Color;
		Orange: System.Drawing.Color;
		OrangeRed: System.Drawing.Color;
		Orchid: System.Drawing.Color;
		PaleGoldenrod: System.Drawing.Color;
		PaleGreen: System.Drawing.Color;
		PaleTurquoise: System.Drawing.Color;
		PaleVioletRed: System.Drawing.Color;
		PapayaWhip: System.Drawing.Color;
		PeachPuff: System.Drawing.Color;
		Peru: System.Drawing.Color;
		Pink: System.Drawing.Color;
		Plum: System.Drawing.Color;
		PowderBlue: System.Drawing.Color;
		Purple: System.Drawing.Color;
		R: number;
		Red: System.Drawing.Color;
		RosyBrown: System.Drawing.Color;
		RoyalBlue: System.Drawing.Color;
		SaddleBrown: System.Drawing.Color;
		Salmon: System.Drawing.Color;
		SandyBrown: System.Drawing.Color;
		SeaGreen: System.Drawing.Color;
		SeaShell: System.Drawing.Color;
		Sienna: System.Drawing.Color;
		Silver: System.Drawing.Color;
		SkyBlue: System.Drawing.Color;
		SlateBlue: System.Drawing.Color;
		SlateGray: System.Drawing.Color;
		Snow: System.Drawing.Color;
		SpringGreen: System.Drawing.Color;
		SteelBlue: System.Drawing.Color;
		Tan: System.Drawing.Color;
		Teal: System.Drawing.Color;
		Thistle: System.Drawing.Color;
		Tomato: System.Drawing.Color;
		Transparent: System.Drawing.Color;
		Turquoise: System.Drawing.Color;
		Violet: System.Drawing.Color;
		Wheat: System.Drawing.Color;
		White: System.Drawing.Color;
		WhiteSmoke: System.Drawing.Color;
		Yellow: System.Drawing.Color;
		YellowGreen: System.Drawing.Color;
	}
	interface Image extends System.MarshalByRefObject {
		Flags: number;
		FrameDimensionsList: System.Guid[];
		Height: number;
		HorizontalResolution: number;
		Palette: System.Drawing.Imaging.ColorPalette;
		PhysicalDimension: System.Drawing.SizeF;
		PixelFormat: System.Drawing.Imaging.PixelFormat;
		PropertyIdList: number[];
		PropertyItems: System.Drawing.Imaging.PropertyItem[];
		RawFormat: System.Drawing.Imaging.ImageFormat;
		Size: System.Drawing.Size;
		Tag: any;
		VerticalResolution: number;
		Width: number;
	}
	interface Size {
		Height: number;
		IsEmpty: boolean;
		Width: number;
	}
	interface SizeF {
		Height: number;
		IsEmpty: boolean;
		Width: number;
	}
}
declare module System.Drawing.Imaging {
	interface ColorPalette {
		Entries: System.Drawing.Color[];
		Flags: number;
	}
	interface ImageFormat {
		Bmp: System.Drawing.Imaging.ImageFormat;
		Emf: System.Drawing.Imaging.ImageFormat;
		Exif: System.Drawing.Imaging.ImageFormat;
		Gif: System.Drawing.Imaging.ImageFormat;
		Guid: System.Guid;
		Icon: System.Drawing.Imaging.ImageFormat;
		Jpeg: System.Drawing.Imaging.ImageFormat;
		MemoryBmp: System.Drawing.Imaging.ImageFormat;
		Png: System.Drawing.Imaging.ImageFormat;
		Tiff: System.Drawing.Imaging.ImageFormat;
		Wmf: System.Drawing.Imaging.ImageFormat;
	}
	interface PropertyItem {
		Id: number;
		Len: number;
		Type: number;
		Value: number[];
	}
}


 
