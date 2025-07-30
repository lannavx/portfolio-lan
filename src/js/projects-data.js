import { createIcons } from "./utils.js"
import { createImages } from "./utils.js"

// Especificações de cada projeto do portfolio
export const projects = [
  {
    project: "Mundo Pet", 
    stack: "Full-stack", 
    description: "Aplicação completa para agendamento de serviços em pet shop, com gerenciamento de dados via JSON Server e interface interativa",
    technologies: [createIcons("html"), createIcons("css"), createIcons("js")],
    cover_image: createImages("mundo-pet-banner.webp"),
    link: "https://github.com/lannavx/fullstack_studies/tree/main/projeto_mundo_pet",
    video: "projeto-mundo-pet.mp4",
    imgs: [
      createImages("mundo-pet-1.png", "Mundo Pet"),
      createImages("mundo-pet-2.png", "Mundo Pet"),
      createImages("mundo-pet-3.png", "Mundo Pet"),
      createImages("mundo-pet-4.png", "Mundo Pet")
    ]
  }, 
  {
    project: "Clube do Livro", 
    stack: "Front-end", 
    description: "Landing page com identidade visual inspirada em clubes de assinatura, destacando animações em CSS e transições suaves para uma experiência envolvente",
    technologies: [createIcons("html"), createIcons("css")],
    cover_image: createImages("clube-livro-banner.webp"),
    link: "https://lannavx.github.io/fullstack_studies/projeto_clube_assinatura/",
    video: "projeto-clube-do-livro.mp4",
    imgs: [
      createImages("clube-livro-1.png", "Clube do livro"),
      createImages("clube-livro-2.png", "Clube do livro"),
      createImages("clube-livro-3.png", "Clube do livro"),
      createImages("clube-livro-4.png", "Clube do livro")
    ]
  },
  {
    project: "Sorteador", 
    stack: "Front-end", 
    description: "Ferramenta visual para sorteio de números, com foco em animações e efeitos visuais dinâmicos que destacam a interação em tempo real",
    technologies: [createIcons("html"), createIcons("css"), createIcons("js")],
    cover_image: createImages("numbers-banner.webp"),
    link: "https://lannavx.github.io/fullstack_studies/projeto_sorteador_numeros/",
    video: "projeto-sorteador-numeros.mp4",
    imgs: [
      createImages("numbers-1.png", "Sorteador"),
      createImages("numbers-2.png", "Sorteador"),
      createImages("numbers-3.png", "Sorteador"),
      createImages("numbers-4.png", "Sorteador")
    ]
  },
  {
    project: "API Chamados", 
    stack: "Back-end", 
    description: "API RESTful desenvolvida em Node.js puro, com operações CRUD completas e persistência de dados utilizando um banco em JSON local",
    technologies: [createIcons("js"), createIcons("node.js")],
    cover_image: createImages("tickets-banner.webp"),
    link: "https://github.com/lannavx/fullstack_studies/tree/main/projeto_api_ticket_suporte",
    video: "projeto-api-ticket.mp4",
    imgs: [
      createImages("tickets-1.png", "API Chamados"),
      createImages("tickets-2.png", "API Chamados"),
      createImages("tickets-3.png", "API Chamados"),
      createImages("tickets-4.png", "API Chamados")
    ]
  }, 
  {
    project: "Real Trust", 
    stack: "Front-end", 
    description: "Landing Page para agência imobiliária fictícia desenvolvida com foco no aprendizado dos principais pontos de acessibilidade e SEO",
    technologies: [createIcons("html"), createIcons("css"), createIcons("js")],
    cover_image: createImages("real-trust-banner.webp"),
    link: "https://lannavx.github.io/lp-real-trust/",
    video: "projeto-lp-real-trust.mp4",
    imgs: [
      createImages("real-trust-1.png", "Real Trust"),
      createImages("real-trust-2.png", "Real Trust"),
      createImages("real-trust-3.png", "Real Trust"),
      createImages("real-trust-4.png", "Real Trust")
    ]
  }
]