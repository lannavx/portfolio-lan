import { createIcons } from "./utils.js"
import { createImages } from "./utils.js"

// Especificações de cada projeto do portfolio
export const projects = [
  {
    project: "Mundo Pet", 
    stack: "FullStack", 
    description: "Aplicação completa para agendamento de serviços em pet shop, com gerenciamento de dados via JSON Server e interface interativa",
    technologies: [createIcons("html"), createIcons("css"), createIcons("js")],
    cover_image: createImages("18d2f70d630cd065b7875d5721170d62.jpg"),
    link: "https://github.com/lannavx/fullstack_studies/tree/main/projeto_mundo_pet",
    video: "Stray Kids ＂CHEESE＂ Video.mp4",
    imgs: [
      createImages("21356bdb9feac4a9d5eee8b84196f1ac.jpg"),
      createImages("GwfiduRbEAAeON_.png"),
      createImages("Gu2i6RLWkAAzecY.jpeg"),
      createImages("18d2f70d630cd065b7875d5721170d62.jpg")
    ]
  }, 
  {
    project: "Clube do Livro", 
    stack: "Front-end", 
    description: "Landing page com identidade visual inspirada em clubes de assinatura, destacando animações em CSS e transições suaves para uma experiência envolvente",
    technologies: [createIcons("html"), createIcons("css")],
    cover_image: createImages("5062ca04223bd95388e15853c7c889d4.jpg"),
    link: "https://lannavx.github.io/fullstack_studies/projeto_clube_assinatura/",
    video: "Stray Kids ＂CHEESE＂ Video.mp4",
    imgs: [
      createImages("Gu2i6RLWkAAzecY.jpeg"),
      createImages("GwfiduRbEAAeON_.png"),
      createImages("18d2f70d630cd065b7875d5721170d62.jpg"),
      createImages("21356bdb9feac4a9d5eee8b84196f1ac.jpg")
    ]
  },
  {
    project: "Sorteador", 
    stack: "Front-end", 
    description: "Ferramenta visual para sorteio de números, com foco em animações e efeitos visuais dinâmicos que destacam a interação em tempo real",
    technologies: [createIcons("html"), createIcons("css"), createIcons("js")],
    cover_image: createImages("21356bdb9feac4a9d5eee8b84196f1ac.jpg"),
    link: "https://lannavx.github.io/fullstack_studies/projeto_sorteador_numeros/",
    video: "Stray Kids ＂CHEESE＂ Video.mp4",
    imgs: [
      createImages("21356bdb9feac4a9d5eee8b84196f1ac.jpg"),
      createImages("21356bdb9feac4a9d5eee8b84196f1ac.jpg"),
      createImages("21356bdb9feac4a9d5eee8b84196f1ac.jpg"),
      createImages("21356bdb9feac4a9d5eee8b84196f1ac.jpg")
    ]
  },
  {
    project: "API Chamados", 
    stack: "Back-end", 
    description: "API RESTful desenvolvida em Node.js puro, com operações CRUD completas e persistência de dados utilizando um banco em JSON local",
    technologies: [createIcons("js"), createIcons("node.js")],
    cover_image: createImages("f55efad10ba2d4a2eb8209a0350adcde.jpg"),
    link: "https://github.com/lannavx/fullstack_studies/tree/main/projeto_api_ticket_suporte",
    video: "Stray Kids ＂CHEESE＂ Video.mp4",
    imgs: [
      createImages("21356bdb9feac4a9d5eee8b84196f1ac.jpg"),
      createImages("GwfiduRbEAAeON_.png"),
      createImages("Gu2i6RLWkAAzecY.jpeg"),
      createImages("18d2f70d630cd065b7875d5721170d62.jpg")
    ]
  }, 
  {
    project: "Real Trust", 
    stack: "Front-end", 
    description: "Landing Page para agência imobiliária fictícia desenvolvida com foco no aprendizado dos principais pontos de acessibilidade e SEO (Search Engine Optimization)",
    technologies: [createIcons("html"), createIcons("css"), createIcons("js")],
    cover_image: createImages("f55efad10ba2d4a2eb8209a0350adcde.jpg"),
    link: "https://lannavx.github.io/lp-real-trust/",
    video: "Stray Kids ＂CHEESE＂ Video.mp4",
    imgs: [
      createImages("21356bdb9feac4a9d5eee8b84196f1ac.jpg"),
      createImages("GwfiduRbEAAeON_.png"),
      createImages("Gu2i6RLWkAAzecY.jpeg"),
      createImages("18d2f70d630cd065b7875d5721170d62.jpg")
    ]
  }
]