export const SITE = {
  name: "Rede Saúde Mais",
  tagline: "Saúde para você e pra quem você ama!",
  since: 2018,
  resultadosUrl: "https://www.resultados.app.br/",
  email: "contato@redesaudemais.com",
};

export type Unit = {
  id: string;
  label: string;
  address: string;
  city: string;
  /** Foto real da unidade (WebP 1200x900). Vazio = renderiza placeholder tipográfico. */
  imageUrl?: string;
  phones: { display: string; href: string; whatsapp: boolean }[];
  instagram: string;
  facebook: string;
  mapsQuery: string;
};

export const HOURS = "Segunda a sexta, 07h às 18h. Sábado, 08h às 12h.";

export const UNITS: Unit[] = [
  {
    id: "mt-1",
    label: "Unidade Mato Grosso I",
    address: "Rua Vereadora Maria da Glória Favero, N 586 – MT",
    city: "Mato Grosso",
    imageUrl: "/unidades/unidade-mato-grosso-i.webp",
    phones: [
      { display: "(66) 99902-9531", href: "https://wa.me/5566999029531", whatsapp: true },
    ],
    instagram: "https://www.instagram.com/clinica_saudemaismt",
    facebook: "https://www.facebook.com/www.saudemaisdf.com.br/",
    mapsQuery: "Rua Vereadora Maria da Glória Favero, 586, Mato Grosso",
  },
  {
    id: "df-riacho",
    label: "Unidade Riacho Fundo I – DF",
    address: "CLN 05 Bloco G Lotes 1/4 – Riacho Fundo 1 – DF",
    city: "Riacho Fundo I – DF",
    imageUrl: "/unidades/unidade-riacho-fundo-i.webp",
    phones: [
      { display: "(61) 99695-2647", href: "https://wa.me/5561996952647", whatsapp: true },
      { display: "(61) 3264-6081", href: "tel:+556132646081", whatsapp: false },
    ],
    instagram: "https://www.instagram.com/saudemaisdf",
    facebook: "https://www.facebook.com/www.saudemaisdf.com.br/",
    mapsQuery: "CLN 05 Bloco G, Riacho Fundo I, Brasília DF",
  },
  {
    id: "mt-primavera",
    label: "Unidade Primavera do Leste – MT",
    address: "Av. David Riva, 1100 – Jardim Riva, Primavera do Leste – MT",
    city: "Primavera do Leste – MT",
    imageUrl: "/unidades/unidade-primavera-do-leste.webp",
    phones: [
      { display: "(66) 99937-2528", href: "https://wa.me/5566999372528", whatsapp: true },
    ],
    instagram: "https://www.instagram.com/clinica_saudemaismt",
    facebook: "https://www.facebook.com/www.saudemaisdf.com.br/",
    mapsQuery: "Av. David Riva, 1100, Jardim Riva, Primavera do Leste MT",
  },
];

export const SPECIALTIES = [
  { slug: "clinico-geral", name: "Clínico Geral", desc: "Identifica sintomas, solicita e analisa exames, prescreve medicamentos, encaminha a especialistas e trata doenças que não exigem cirurgia." },
  { slug: "cardiologia", name: "Cardiologia", desc: "Diagnóstico e tratamento de doenças do coração e do sistema circulatório, incluindo exames cardiológicos e risco cirúrgico." },
  { slug: "neurologia", name: "Neurologia", desc: "Prevenção, diagnóstico e tratamento de doenças do sistema nervoso: cérebro, medula, raízes nervosas e nervos." },
  { slug: "pediatria", name: "Pediatria", desc: "Cuidado da saúde de crianças e adolescentes, com orientação aos pais em cada fase." },
  { slug: "ginecologia", name: "Ginecologia", desc: "Saúde da mulher: consultas de rotina, prevenção e acompanhamento." },
  { slug: "nutricao", name: "Nutrição", desc: "Orientação alimentar e acompanhamento nutricional individualizado." },
  { slug: "dermatologia", name: "Dermatologia", desc: "Saúde da pele, cabelos e unhas." },
  { slug: "endocrinologia", name: "Endocrinologia", desc: "Distúrbios hormonais e metabólicos." },
  { slug: "ortopedia", name: "Ortopedia", desc: "Ossos, articulações e lesões musculoesqueléticas." },
  { slug: "psiquiatria", name: "Psiquiatria", desc: "Saúde mental: diagnóstico, tratamento e acompanhamento." },
  { slug: "urologia", name: "Urologia", desc: "Trato urinário e saúde do homem." },
];

export const EXAMS = [
  { name: "Mapa e Holter", desc: "MAPA verifica a pressão arterial ao longo do dia; HOLTER registra a atividade elétrica do coração para investigar desmaios, arritmias e palpitações." },
  { name: "Ecodoppler de Carótidas e Vertebrais", desc: "Avalia o fluxo das artérias carótidas e vertebrais, identificando placas de gordura (ateroma). Indolor e não invasivo." },
  { name: "Ecocardiograma", desc: "Ultrassonografia do coração em tempo real: espessura do músculo, funcionamento e fluxo sanguíneo. Dura 15 a 20 minutos." },
  { name: "Ultrassonografia", desc: "Ecografia por ondas ultrassônicas para visualizar estruturas internas do organismo." },
  { name: "Teste Ergométrico Computadorizado", desc: "Teste de esforço em esteira ou bicicleta, com aumento gradual de velocidade, para avaliar capacidade física e funcionamento cardíaco." },
  { name: "Risco Cirúrgico", desc: "Avaliação pré-operatória (cardiológica) com idade, doenças crônicas e histórico familiar para reduzir complicações." },
  { name: "Polissonografia", desc: "Exame do sono: mede atividade respiratória, muscular e cerebral para diagnosticar distúrbios do sono." },
  { name: "Eletroencefalograma (EEG)", desc: "Avalia a atividade elétrica cerebral por eletrodos no couro cabeludo. Indolor, não invasivo, todas as idades." },
  { name: "Ecodoppler de MMII", desc: "Ultrassom do sistema venoso superficial e profundo dos membros inferiores." },
  { name: "Ergoespirometria", desc: "Teste ergométrico combinado à análise dos gases expirados durante o exercício." },
];

export const CONVENIOS = [
  { name: "Postal Saúde", img: "/convenios/postal-saude.png" },
  { name: "Vivaz", img: "/convenios/vivaz.jpg" },
  { name: "Affego – Associação do Fisco de Goiás", img: "/convenios/affego.jpg" },
  { name: "Fascal", img: "/convenios/fascal.png" },
  { name: "Saúde BRB", img: "/convenios/brb-saude.jpg" },
  { name: "Pró-Saúde TJDFT", img: "/convenios/pro-saude-tjdft.jpg" },
  { name: "CNTI", img: "/convenios/cnti.jpg" },
  { name: "AFEB Brasal", img: "/convenios/afeb-brasal.jpg" },
  { name: "PLAS/JMU", img: "/convenios/plas-jmu.jpg" },
  { name: "UniCEUB", img: "/convenios/uniceub.jpg" },
  { name: "GEAP Saúde", img: "/convenios/geap.png" },
  { name: "E-Vida", img: "/convenios/evida.png" },
  { name: "Care Plus", img: "/convenios/careplus.jpg" },
  { name: "Camed", img: "/convenios/camed.jpg" },
];

export const FAQ = [
  { q: "A clínica realiza consultas, tratamentos e exames?", a: "Sim. Realizamos exames, consultas e tratamentos — de casos simples a complexos." },
  { q: "Quais são as especialidades?", a: "Cardiologia, Dermatologia, Endocrinologia, Ginecologia, Neurologia, Ortopedia, Pediatria, Psiquiatria, Urologia, além de Clínico Geral e Nutrição." },
  { q: "Qual o valor dos exames?", a: "Cada caso é avaliado individualmente. Orçamentos somente mediante agendamento de consulta." },
  { q: "Consulta de retorno é cobrada?", a: "Retorno particular em até 30 dias corridos sem nova cobrança; por convênio, em até 15 dias corridos." },
  { q: "Vocês aceitam convênios?", a: "Sim, atendemos diversos convênios e particular. Consulte nossos canais de atendimento." },
  { q: "Quais as formas de pagamento?", a: "Dinheiro, cartão e Pix." },
  { q: "Qual o horário de funcionamento?", a: "Todas as unidades: segunda a sexta, 07h às 18h; sábado, 08h às 12h." },
];

export const NAV = [
  { href: "/", label: "Início" },
  { href: "/especialidades", label: "Especialidades" },
  { href: "/exames", label: "Exames" },
  { href: "/convenios", label: "Convênios" },
  { href: "/unidades", label: "Unidades" },
  { href: "/contato", label: "Contato" },
];
