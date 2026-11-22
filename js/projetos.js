/* =====================================================================
   MUV STUDIO — CONFIGURAÇÃO + PROJETOS
   Este é o ÚNICO arquivo que você precisa editar pra atualizar o site.
   ===================================================================== */

/* ---------- 1) CONTATO / WHATSAPP ----------
   Formato: DDI + DDD + número, só dígitos. */
window.MUV_CONFIG = {
  whatsappNumero: "5571996068535",
  whatsappMensagem: "Olá, Neri! Vi o portfólio da MUV STUDIO e quero conversar sobre um projeto de vídeo.",

  /* Showreel do hero: usando o vídeo curto de showreel 2025. */
  showreelUrl: "https://www.youtube.com/watch?v=jUb9o0bnirE",

  /* Redes e contato */
  redes: {
    instagram: "https://www.instagram.com/muv.studio/",
    youtube:   "https://www.youtube.com/@Muv.Studio",
    email:     "prodmuvstudio@gmail.com"
  }
};

/* ---------- 2) PROJETOS ----------
   Para adicionar um trabalho, copie um bloco { ... } e mude os campos.
   Categorias disponíveis: "reels" | "comerciais" | "documentario" | "motion"
   aspectRatio: "9/16" (vertical) ou "16/9" (horizontal)
   thumb: capa automática do YouTube (troque por "assets/thumbs/..." quando quiser usar capa própria)
   previewVideo: mp4 curto (3–6s, sem áudio, <2MB) em assets/previews/ para tocar no hover. "" = usa fallback visual */
window.MUV_PROJETOS = [
  {
    id: 1,
    titulo: "Showreel Vertical 2024",
    categoria: "reels",
    aspectRatio: "9/16",
    thumb: "https://img.youtube.com/vi/m0OHFvZ-LsY/hqdefault.jpg",
    previewVideo: "",
    fullVideoUrl: "https://youtu.be/m0OHFvZ-LsY?si=guVgpLE8PzjWzxVf",
    descricao: "Compilado vertical com ritmo, cortes rápidos e direção visual para redes sociais."
  },
  {
    id: 2,
    titulo: "Short — Projeto 01",
    categoria: "reels",
    aspectRatio: "9/16",
    thumb: "https://img.youtube.com/vi/-wjwru3vd7g/hqdefault.jpg",
    previewVideo: "",
    fullVideoUrl: "https://www.youtube.com/shorts/-wjwru3vd7g?feature=share",
    descricao: "Conteúdo vertical curto editado para retenção e leitura rápida."
  },
  {
    id: 3,
    titulo: "Short — Projeto 02",
    categoria: "reels",
    aspectRatio: "9/16",
    thumb: "https://img.youtube.com/vi/H-q1ZySdvGk/hqdefault.jpg",
    previewVideo: "",
    fullVideoUrl: "https://www.youtube.com/shorts/H-q1ZySdvGk",
    descricao: "Edição dinâmica em formato vertical para redes sociais."
  },
  {
    id: 4,
    titulo: "Evento Corporativo — Congresso SBOT 2025 (Stand TovCare)",
    categoria: "comerciais",
    aspectRatio: "16/9",
    thumb: "https://img.youtube.com/vi/bJOB2RWKSv8/hqdefault.jpg",
    previewVideo: "",
    fullVideoUrl: "https://youtu.be/bJOB2RWKSv8?si=epyxSmewEtSgdCcu",
    descricao: "Cobertura de evento corporativo com foco na presença de marca no Congresso SBOT 2025."
  },
  {
    id: 5,
    titulo: "Evento Corporativo — Montagem SBOT 2025 (Making Of)",
    categoria: "comerciais",
    aspectRatio: "16/9",
    thumb: "https://img.youtube.com/vi/UBHmCXvLJSM/hqdefault.jpg",
    previewVideo: "",
    fullVideoUrl: "https://youtu.be/UBHmCXvLJSM?si=4kyzqnrdlsZW5vIl",
    descricao: "Bastidores e montagem do estande para o Congresso SBOT 2025."
  },
  {
    id: 6,
    titulo: "Evento Corporativo — Stand NOS",
    categoria: "comerciais",
    aspectRatio: "16/9",
    thumb: "https://img.youtube.com/vi/Cq4VlPD0kiU/hqdefault.jpg",
    previewVideo: "",
    fullVideoUrl: "https://youtu.be/Cq4VlPD0kiU?si=NGn5MBUz5k8wxhJt",
    descricao: "Registro de ativação e estande em evento corporativo."
  },
  {
    id: 7,
    titulo: "Publicidade Corporativa",
    categoria: "comerciais",
    aspectRatio: "16/9",
    thumb: "https://img.youtube.com/vi/5DNgsd0NdDU/hqdefault.jpg",
    previewVideo: "",
    fullVideoUrl: "https://youtu.be/5DNgsd0NdDU?si=qv0U26NeZILzFJV0",
    descricao: "Filme publicitário corporativo com narrativa e acabamento comercial."
  },
  {
    id: 8,
    titulo: "Saboritta",
    categoria: "documentario",
    aspectRatio: "16/9",
    thumb: "https://img.youtube.com/vi/lO40VolH1Ck/hqdefault.jpg",
    previewVideo: "",
    fullVideoUrl: "https://www.youtube.com/watch?v=lO40VolH1Ck&t=1s",
    descricao: "Projeto documental com direção de edição e construção de narrativa."
  },
  {
    id: 9,
    titulo: "Documentário Colégio — Parte 01",
    categoria: "documentario",
    aspectRatio: "16/9",
    thumb: "https://img.youtube.com/vi/Yqt7-2BUPsc/hqdefault.jpg",
    previewVideo: "",
    fullVideoUrl: "https://youtu.be/Yqt7-2BUPsc?si=u991uS9U_yey1k7k",
    descricao: "Registro documental escolar com foco em história e atmosfera."
  },
  {
    id: 10,
    titulo: "Documentário Colégio — Parte 02",
    categoria: "documentario",
    aspectRatio: "16/9",
    thumb: "https://img.youtube.com/vi/HVrjnIPMIEI/hqdefault.jpg",
    previewVideo: "",
    fullVideoUrl: "https://youtu.be/HVrjnIPMIEI?si=gze6SpSc_clLm345",
    descricao: "Continuidade documental com ritmo e edição narrativa."
  },
  {
    id: 11,
    titulo: "Documentário Colégio — Parte 03",
    categoria: "documentario",
    aspectRatio: "16/9",
    thumb: "https://img.youtube.com/vi/R9ni2vcGt-A/hqdefault.jpg",
    previewVideo: "",
    fullVideoUrl: "https://youtu.be/R9ni2vcGt-A?si=zEHc7wE5xNw6PaME",
    descricao: "Episódio documental com montagem e trilha."
  },
  {
    id: 12,
    titulo: "Documentário Colégio — Parte 04",
    categoria: "documentario",
    aspectRatio: "16/9",
    thumb: "https://img.youtube.com/vi/_Qf7FxDOplw/hqdefault.jpg",
    previewVideo: "",
    fullVideoUrl: "https://youtu.be/_Qf7FxDOplw?si=v3j3RlSKAxPOteKX",
    descricao: "Capítulo documental editado com foco em clareza e emoção."
  },
  {
    id: 13,
    titulo: "Documentário Colégio — Parte 05",
    categoria: "documentario",
    aspectRatio: "16/9",
    thumb: "https://img.youtube.com/vi/2lTgHOTmGOI/hqdefault.jpg",
    previewVideo: "",
    fullVideoUrl: "https://youtu.be/2lTgHOTmGOI?si=nO2k6lEd6FRN20Vl",
    descricao: "Encerramento documental com finalização de som e imagem."
  },
  {
    id: 14,
    titulo: "Institucional — Projeto 01",
    categoria: "comerciais",
    aspectRatio: "16/9",
    thumb: "https://img.youtube.com/vi/F3U-KzARDzE/hqdefault.jpg",
    previewVideo: "",
    fullVideoUrl: "https://youtu.be/F3U-KzARDzE?si=At48MmuW5mSevGmG",
    descricao: "Vídeo institucional para apresentação de marca e propósito."
  },
  {
    id: 15,
    titulo: "Institucional — Projeto 02",
    categoria: "comerciais",
    aspectRatio: "16/9",
    thumb: "https://img.youtube.com/vi/hUsGIprtMMk/hqdefault.jpg",
    previewVideo: "",
    fullVideoUrl: "https://youtu.be/hUsGIprtMMk?si=JCboW8O1C1k_lI6X",
    descricao: "Edição institucional com ritmo equilibrado e identidade visual."
  },
  {
    id: 16,
    titulo: "Institucional — Projeto 03",
    categoria: "comerciais",
    aspectRatio: "16/9",
    thumb: "https://img.youtube.com/vi/h0itm4XTCc4/hqdefault.jpg",
    previewVideo: "",
    fullVideoUrl: "https://youtu.be/h0itm4XTCc4?si=Lzp-68LIZ3YE4Vlx",
    descricao: "Filme institucional focado em credibilidade e comunicação direta."
  },
  {
    id: 17,
    titulo: "Institucional — Projeto 04",
    categoria: "comerciais",
    aspectRatio: "16/9",
    thumb: "https://img.youtube.com/vi/BY2tWiKyWEs/hqdefault.jpg",
    previewVideo: "",
    fullVideoUrl: "https://youtu.be/BY2tWiKyWEs?si=XiMgcF6sRirjGB30",
    descricao: "Entrega institucional com cortes limpos e finalização."
  }
];

/* Rótulos dos filtros (a chave "todos" é fixa). */
window.MUV_CATEGORIAS = {
  todos: "Todos",
  reels: "Reels & Shorts",
  comerciais: "Comerciais & Eventos",
  documentario: "Documentário",
  motion: "Motion & Edição"
};
