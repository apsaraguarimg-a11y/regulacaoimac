const protocolos = [
    // ===== REGULAÇÃO ELETIVA =====
    {
        id: 1,
        titulo: "Audiometria e Imitanciometria",
        descricao: "Critérios para solicitação de audiometria e imitanciometria, garantindo uso racional e efetivo dos exames auditivos.",
        categoria: "regulacao-eletiva",
        categoriaLabel: "Regulação Eletiva",
        data: "13/02/2025",
        paginas: 5,
        arquivo: "../Audiometria-imitanciometria - ok.pdf",
        palavrasChave: ["audiometria", "imitanciometria", "audição", "ouvido", "exame auditivo"]
    },
    {
        id: 2,
        titulo: "Biópsia de Próstata",
        descricao: "Protocolo para solicitação de biópsia de próstata, visando diagnóstico precoce e priorização conforme risco clínico.",
        categoria: "regulacao-eletiva",
        categoriaLabel: "Regulação Eletiva",
        data: "13/02/2025",
        paginas: 5,
        arquivo: "../Biópsia de próstata - ok.pdf",
        palavrasChave: ["biópsia", "próstata", "urologia", "PSA", "câncer"]
    },
    {
        id: 3,
        titulo: "Cateterismo e Angioplastia (Eletivo)",
        descricao: "Organização do processo de solicitação, avaliação e autorização de cateterismo cardíaco e angioplastia coronariana eletivos.",
        categoria: "regulacao-eletiva",
        categoriaLabel: "Regulação Eletiva",
        data: "13/02/2025",
        paginas: 5,
        arquivo: "../CATE-ANGIO_-_ok_assinado.pdf",
        palavrasChave: ["cateterismo", "angioplastia", "coração", "cardiologia", "coronária"]
    },
    {
        id: 4,
        titulo: "Cintilografia",
        descricao: "Fluxo padronizado para solicitação e autorização de exames de cintilografia, priorizando conforme gravidade clínica.",
        categoria: "regulacao-eletiva",
        categoriaLabel: "Regulação Eletiva",
        data: "13/02/2025",
        paginas: 5,
        arquivo: "../Cintilografia_-_ok_assinado.pdf",
        palavrasChave: ["cintilografia", "medicina nuclear", "imagem", "diagnóstico"]
    },
    {
        id: 5,
        titulo: "Cistoscopia",
        descricao: "Diretrizes para solicitação e autorização de cistoscopia, assegurando uso racional e criterioso do exame.",
        categoria: "regulacao-eletiva",
        categoriaLabel: "Regulação Eletiva",
        data: "13/02/2025",
        paginas: 4,
        arquivo: "../Cistoscopia - ok.pdf",
        palavrasChave: ["cistoscopia", "urologia", "bexiga", "hematúria"]
    },
    {
        id: 6,
        titulo: "Densitometria Óssea",
        descricao: "Regulação e autorização de densitometria óssea para diagnóstico precoce de osteoporose e doenças ósseas.",
        categoria: "regulacao-eletiva",
        categoriaLabel: "Regulação Eletiva",
        data: "13/02/2025",
        paginas: 4,
        arquivo: "../Densitometria óssea - ok.pdf",
        palavrasChave: ["densitometria", "osso", "osteoporose", "reumatologia"]
    },
    {
        id: 7,
        titulo: "Doppler Arterial e Venoso",
        descricao: "Padronização do processo de solicitação e autorização de Doppler para diagnóstico de condições vasculares.",
        categoria: "regulacao-eletiva",
        categoriaLabel: "Regulação Eletiva",
        data: "13/02/2025",
        paginas: 6,
        arquivo: "../Doppler_-_ok_assinado.pdf",
        palavrasChave: ["doppler", "vascular", "arterial", "venoso", "circulação"]
    },
    {
        id: 8,
        titulo: "Endoscopia e Colonoscopia (EDA-Colono)",
        descricao: "Diretrizes para solicitação de endoscopia digestiva alta e colonoscopia, promovendo uso racional dos recursos.",
        categoria: "regulacao-eletiva",
        categoriaLabel: "Regulação Eletiva",
        data: "13/02/2025",
        paginas: 5,
        arquivo: "../EDA-COLONO - ok.pdf",
        palavrasChave: ["endoscopia", "colonoscopia", "digestivo", "gastrointestinal", "EDA"]
    },
    {
        id: 9,
        titulo: "Eletroneuromiografia",
        descricao: "Regulamentação da solicitação de eletroneuromiografia, priorizando oncologia e doenças neurológicas graves.",
        categoria: "regulacao-eletiva",
        categoriaLabel: "Regulação Eletiva",
        data: "13/02/2025",
        paginas: 5,
        arquivo: "../Eletroneuro_-_ok_assinado.pdf",
        palavrasChave: ["eletroneuromiografia", "neurologia", "nervo", "EMG", "condução nervosa"]
    },
    {
        id: 10,
        titulo: "Holter 24 Horas",
        descricao: "Padronização do processo de solicitação e autorização do Holter 24h para diagnóstico de alterações cardíacas.",
        categoria: "regulacao-eletiva",
        categoriaLabel: "Regulação Eletiva",
        data: "13/02/2025",
        paginas: 4,
        arquivo: "../Holter_-_ok_assinado.pdf",
        palavrasChave: ["holter", "arritmia", "coração", "monitorização", "ECG"]
    },
    {
        id: 11,
        titulo: "MAPA (Monitorização Ambulatorial de Pressão Arterial)",
        descricao: "Padronização da solicitação e autorização do MAPA para diagnóstico de hipertensão arterial.",
        categoria: "regulacao-eletiva",
        categoriaLabel: "Regulação Eletiva",
        data: "13/02/2025",
        paginas: 4,
        arquivo: "../MAPA_-_ok_assinado.pdf",
        palavrasChave: ["MAPA", "pressão arterial", "hipertensão", "monitorização"]
    },
    {
        id: 12,
        titulo: "Marca-passo e Troca de Gerador",
        descricao: "Organização do processo de solicitação e autorização para implantação de marca-passo, priorizando casos graves.",
        categoria: "regulacao-eletiva",
        categoriaLabel: "Regulação Eletiva",
        data: "13/02/2025",
        paginas: 6,
        arquivo: "../Marca-passo_-_ok_assinado.pdf",
        palavrasChave: ["marca-passo", "gerador", "bradicardia", "cardiologia", "implante"]
    },
    {
        id: 13,
        titulo: "PAAF e Biópsias Ambulatoriais",
        descricao: "Regulamentação da punção aspirativa por agulha fina (PAAF) e biópsias ambulatoriais para diagnóstico de lesões.",
        categoria: "regulacao-eletiva",
        categoriaLabel: "Regulação Eletiva",
        data: "13/02/2025",
        paginas: 6,
        arquivo: "../PAAF - ok.pdf",
        palavrasChave: ["PAAF", "punção", "biópsia", "nódulo", "citologia"]
    },
    {
        id: 14,
        titulo: "Ressonância Magnética",
        descricao: "Normatização do processo de solicitação e autorização de ressonância magnética no SUS municipal.",
        categoria: "regulacao-eletiva",
        categoriaLabel: "Regulação Eletiva",
        data: "13/02/2025",
        paginas: 6,
        arquivo: "../Ressonancia_-_ok_assinado.pdf",
        palavrasChave: ["ressonância", "magnética", "RM", "imagem", "diagnóstico"]
    },
    {
        id: 15,
        titulo: "Teste Ergométrico",
        descricao: "Organização do processo de solicitação e autorização do teste ergométrico para avaliação cardiovascular.",
        categoria: "regulacao-eletiva",
        categoriaLabel: "Regulação Eletiva",
        data: "13/02/2025",
        paginas: 4,
        arquivo: "../Teste_ergometrico_-_ok_assinado.pdf",
        palavrasChave: ["teste ergométrico", "esforço", "esteira", "cardiologia", "angina"]
    },
    {
        id: 16,
        titulo: "Tomografia",
        descricao: "Diretrizes para solicitação e regulação de tomografias, assegurando atendimento prioritário por necessidade clínica.",
        categoria: "regulacao-eletiva",
        categoriaLabel: "Regulação Eletiva",
        data: "13/02/2025",
        paginas: 5,
        arquivo: "../Tomografia - ok.pdf",
        palavrasChave: ["tomografia", "TC", "imagem", "diagnóstico", "contraste"]
    },
    {
        id: 17,
        titulo: "Oncologia — Encaminhamento",
        descricao: "Protocolo de encaminhamento ao serviço de oncologia, organizando acesso a consultas, diagnósticos e tratamentos.",
        categoria: "regulacao-eletiva",
        categoriaLabel: "Regulação Eletiva",
        data: "22/11/2024",
        paginas: 13,
        arquivo: "../PROTOCOLO_DE_ENCAMINHAMENTO_PARA_ONCOLOGIA_-_ok_assinado_assinado.pdf",
        palavrasChave: ["oncologia", "câncer", "tumor", "quimioterapia", "encaminhamento"]
    },

    // ===== URGÊNCIA =====
    {
        id: 18,
        titulo: "CPRE de Urgência",
        descricao: "Fluxo para autorização de Colangiopancreatografia Retrógrada Endoscópica (CPRE) de urgência no HUSF.",
        categoria: "urgencia",
        categoriaLabel: "Urgência",
        data: "17/04/2024",
        paginas: 1,
        arquivo: "../Fluxo_CPRE URGÊNCIA_assinado_241125_114008.pdf",
        palavrasChave: ["CPRE", "urgência", "endoscopia", "biliar", "pancreatite"]
    },
    {
        id: 19,
        titulo: "Cateterismo de Urgência — Vaga Zero SAMU",
        descricao: "Fluxo para autorização de cateterismo e angioplastia de urgência via SAMU (vaga zero) para IAM com supra ST.",
        categoria: "urgencia",
        categoriaLabel: "Urgência",
        data: "18/05/2024",
        paginas: 1,
        arquivo: "../FLUXO CATETERSMO URGÊNCIA VAGA ZERO SAMU DR RODRIGO.pdf",
        palavrasChave: ["cateterismo", "urgência", "SAMU", "infarto", "IAM", "vaga zero"]
    },
    {
        id: 20,
        titulo: "Cateterismo e Angioplastia — Pacientes da Rede Hospitalar/UPA",
        descricao: "Fluxo para autorização de cateterismo e angioplastia eletivos de pacientes internados na rede hospitalar e UPA.",
        categoria: "urgencia",
        categoriaLabel: "Urgência",
        data: "02/07/2024",
        paginas: 2,
        arquivo: "../FLUXO_OFICIAL_CATETERISMO-_ANGIOPLASTIA_CENTRAL_DE_241125_113852.pdf",
        palavrasChave: ["cateterismo", "angioplastia", "internado", "UPA", "hospital"]
    },
    {
        id: 21,
        titulo: "Fluxo UPA → Leitos CAPS-AD e CAPS III",
        descricao: "Critérios para encaminhamento de pacientes da UPA aos leitos de hospitalidade do CAPS-AD e CAPS III municipal.",
        categoria: "urgencia",
        categoriaLabel: "Urgência",
        data: "27/02/2026",
        paginas: 6,
        arquivo: "../PROTOCOLO DE HOSPITALIDADE_CAPS_ASSINADO_THEREZA.pdf",
        palavrasChave: ["CAPS", "saúde mental", "hospitalidade", "UPA", "psicossocial", "álcool", "drogas"]
    },
    {
        id: 22,
        titulo: "Fluxo UPA → Hospital Santo Antônio",
        descricao: "Fluxo regulado de encaminhamento de pacientes da UPA para internação no Hospital Santo Antônio de Araguari.",
        categoria: "urgencia",
        categoriaLabel: "Urgência",
        data: "27/02/2026",
        paginas: 4,
        arquivo: "../PROTOCOLO-FLUXO_DE_ENCAMINHAMENTO_PACIENTES_UPA_HSA ASSINADO THEREZA.pdf",
        palavrasChave: ["UPA", "Hospital Santo Antônio", "internação", "regulação", "leito"]
    },

    // ===== FLUXOS ASSISTENCIAIS =====
    {
        id: 23,
        titulo: "Pré-Natal e Parto — RAS Araguari",
        descricao: "Estratificação de risco gestacional com tabela de pontuação para classificação em risco habitual, intermediário e alto risco.",
        categoria: "fluxo-assistencial",
        categoriaLabel: "Fluxo Assistencial",
        data: "18/06/2024",
        paginas: 7,
        arquivo: "../FLUXO PRÉ NATAL E PARTO RAS ARAGUARI - atualizado.pdf",
        palavrasChave: ["pré-natal", "parto", "gestante", "risco gestacional", "obstetrícia"]
    },
    {
        id: 24,
        titulo: "Blefaroplastia",
        descricao: "Fluxo para encaminhamento à blefaroplastia (blefarocalase/dermatocalase) com critérios de idade e campimetria.",
        categoria: "fluxo-assistencial",
        categoriaLabel: "Fluxo Assistencial",
        data: "02/08/2024",
        paginas: 1,
        arquivo: "../FLUXO E PROCEDIMENTO PARA ENCAMINHAMENTO À BLEFAROPLASTIA.pdf",
        palavrasChave: ["blefaroplastia", "oftalmologia", "pálpebra", "cirurgia", "campimetria"]
    },
    {
        id: 25,
        titulo: "Doença Renal Crônica — Terapia Renal Substitutiva (Original)",
        descricao: "Fluxo para autorização e regulação de pacientes com DRC e indicação de hemodiálise no município.",
        categoria: "fluxo-assistencial",
        categoriaLabel: "Fluxo Assistencial",
        data: "22/10/2024",
        paginas: 4,
        arquivo: "../Fluxo_DRC_Araguari_assinado_241125_114826_241125_1_241125_121315.pdf",
        palavrasChave: ["DRC", "renal", "hemodiálise", "diálise", "TRS", "rim"]
    },
    {
        id: 26,
        titulo: "Doença Renal Crônica — TRS (1ª Revisão)",
        descricao: "Revisão do protocolo DRC-TRS com inclusão de mudança de domicílio e pacientes internados em urgência.",
        categoria: "fluxo-assistencial",
        categoriaLabel: "Fluxo Assistencial",
        data: "24/03/2026",
        paginas: 5,
        arquivo: "../DCR-TRS - ok.pdf",
        palavrasChave: ["DRC", "renal", "hemodiálise", "diálise", "TRS", "revisão"]
    },
    {
        id: 27,
        titulo: "Cirurgia Bariátrica — Obesidade",
        descricao: "Fluxo para atendimento de alta complexidade ao indivíduo com obesidade, via endocrinologia e equipe multidisciplinar.",
        categoria: "fluxo-assistencial",
        categoriaLabel: "Fluxo Assistencial",
        data: "27/10/2024",
        paginas: 2,
        arquivo: "../FLUXO DE BARIÁTRICA.pdf",
        palavrasChave: ["bariátrica", "obesidade", "cirurgia", "endocrinologia", "IMC"]
    },
    {
        id: 28,
        titulo: "Gastrostomia (GTT) — Inserção, Troca e Retirada",
        descricao: "Fluxo para solicitação de gastrostomia: inserção (1ª vez), troca ou retirada de sonda por via endoscópica.",
        categoria: "fluxo-assistencial",
        categoriaLabel: "Fluxo Assistencial",
        data: "14/04/2025",
        paginas: 3,
        arquivo: "../Protocolo_de_GTT[1]_assinado_assinado_assinado.pdf",
        palavrasChave: ["gastrostomia", "GTT", "sonda", "nutrição enteral", "endoscopia"]
    },
    {
        id: 29,
        titulo: "Bolsas de Colostomia",
        descricao: "Protocolo para disponibilização de bolsas de colostomia, com cadastro, avaliação e dispensação organizada.",
        categoria: "fluxo-assistencial",
        categoriaLabel: "Fluxo Assistencial",
        data: "13/02/2025",
        paginas: 5,
        arquivo: "../FLUXO BOLSAS COLOSTOMIA.pdf",
        palavrasChave: ["colostomia", "bolsa", "ostomia", "estoma", "cirurgia"]
    },
    {
        id: 30,
        titulo: "Cateter Port-A-Cath — Pacientes Oncológicos",
        descricao: "Fluxo para colocação de cateter de longa permanência em pacientes oncológicos em quimioterapia no HUSF.",
        categoria: "fluxo-assistencial",
        categoriaLabel: "Fluxo Assistencial",
        data: "14/04/2025",
        paginas: 2,
        arquivo: "../PROTOCOLO_FLUXO_PARA_COLOCACAO_DE_CATETER_DE_LONGA_PERMANENCIA_(PORT-A-CATH)_-_PACIENTES_ONCOLOGICOS_assinado_assinado.pdf",
        palavrasChave: ["port-a-cath", "cateter", "oncologia", "quimioterapia", "vascular"]
    },
    {
        id: 31,
        titulo: "Cirurgia Cardíaca — Envio de Documentação (Municípios)",
        descricao: "Protocolo de regulação para envio de documentação de cirurgia cardíaca pelos municípios conveniados.",
        categoria: "fluxo-assistencial",
        categoriaLabel: "Fluxo Assistencial",
        data: "16/06/2025",
        paginas: 4,
        arquivo: "../PROTOCOLO CIRURGIA CARDÍACA - ENVIO DE DOCS MUNICÍPIOS.pdf",
        palavrasChave: ["cirurgia cardíaca", "documentação", "municípios", "convênio", "pré-operatório"]
    },

    // ===== CLÍNICOS E NUTRICIONAIS =====
    {
        id: 32,
        titulo: "Fórmulas e Suplementos Alimentares 2025",
        descricao: "Protocolo completo para concessão de fórmulas e suplementos alimentares pelo Departamento de Nutrição.",
        categoria: "clinico-nutricional",
        categoriaLabel: "Clínico/Nutricional",
        data: "01/01/2025",
        paginas: 29,
        arquivo: "../Protocolo Fórmulas  versão 2025.pdf",
        palavrasChave: ["fórmulas", "suplementos", "nutrição", "alimentação", "dieta"]
    },
    {
        id: 33,
        titulo: "Suplementos Pós-Cirurgia Bariátrica",
        descricao: "Critérios para concessão de suplementos alimentares (whey protein, polivitamínicos) a pacientes pós-bariátrica.",
        categoria: "clinico-nutricional",
        categoriaLabel: "Clínico/Nutricional",
        data: "15/04/2025",
        paginas: 7,
        arquivo: "../PROTOCOLO_para_concessao_de_suplementos_alimentares_a_pacientes_pos_cirurgia_bariatrica_15.04.25.pdf",
        palavrasChave: ["suplementos", "bariátrica", "whey", "vitaminas", "nutrição"]
    },
    {
        id: 34,
        titulo: "POP — Uso de AAS na Gestação (Pré-eclâmpsia)",
        descricao: "Procedimento operacional padrão para uso de ácido acetilsalicílico em gestantes com fatores de risco para pré-eclâmpsia.",
        categoria: "clinico-nutricional",
        categoriaLabel: "Clínico/Nutricional",
        data: "02/10/2025",
        paginas: 4,
        arquivo: "../POP_AAS_assinado_assinado_assinado (1).pdf",
        palavrasChave: ["AAS", "aspirina", "pré-eclâmpsia", "gestação", "hipertensão"]
    },
    {
        id: 35,
        titulo: "Fisioterapia Hospitalar pelo SUS",
        descricao: "Protocolo de atendimento hospitalar em fisioterapia, com fluxo padronizado para internações em média/alta complexidade.",
        categoria: "clinico-nutricional",
        categoriaLabel: "Clínico/Nutricional",
        data: "03/02/2025",
        paginas: 8,
        arquivo: "../PROTOCOLO_OFICIAL_ASSINADO_DE_ATENDIMENTO_HOSPITALAR_EM_FIS_250217_105435_assinado.pdf",
        palavrasChave: ["fisioterapia", "hospitalar", "internação", "reabilitação", "COFFITO"]
    },

    // ===== MANUAIS =====
    {
        id: 36,
        titulo: "Manual de Preenchimento — APAC",
        descricao: "Orientações para preenchimento da Autorização de Procedimentos Ambulatoriais de Alta Complexidade/Custo.",
        categoria: "manual",
        categoriaLabel: "Manual",
        data: "05/05/2025",
        paginas: 6,
        arquivo: "../Manual de preenchimento - APAC.pdf",
        palavrasChave: ["APAC", "manual", "preenchimento", "formulário", "alta complexidade"]
    },
    {
        id: 37,
        titulo: "Manual de Procedimentos — TFD",
        descricao: "Manual do Tratamento Fora do Domicílio: fluxo de solicitação, documentação e acompanhamento de pacientes.",
        categoria: "manual",
        categoriaLabel: "Manual",
        data: "05/05/2025",
        paginas: 8,
        arquivo: "../Manual de preenchimento - TFD.pdf",
        palavrasChave: ["TFD", "tratamento fora domicílio", "manual", "encaminhamento", "UFU"]
    },
    {
        id: 38,
        titulo: "Formulário Padrão de Solicitação de Procedimentos",
        descricao: "Formulário padrão da SMS para solicitação de procedimentos, com dados do paciente, histórico e autorização.",
        categoria: "manual",
        categoriaLabel: "Manual",
        data: "2024",
        paginas: 2,
        arquivo: "../CR_FORMULÁRIO PADRÃO PARA SOLICITAÇÃO DE PROCEDIMENTOS SMS 2024.pdf",
        palavrasChave: ["formulário", "solicitação", "procedimento", "padrão", "SMS"]
    },

    // ===== ESPECIALIZADOS =====
    {
        id: 39,
        titulo: "Terapia ABA — Encaminhamento para TEA",
        descricao: "Protocolo de encaminhamento para Terapia ABA (Análise do Comportamento Aplicada) para pacientes com Transtorno do Espectro Autista.",
        categoria: "especializado",
        categoriaLabel: "Especializado",
        data: "25/03/2025",
        paginas: 6,
        arquivo: "../PROTOCOLO_DE_ENCAMINHAMENTO_PARA_TERAPIA_ABA_-assinado.pdf",
        palavrasChave: ["ABA", "autismo", "TEA", "comportamento", "neuropediatria", "reabilitação"]
    }
];
