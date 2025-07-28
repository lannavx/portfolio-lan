import "./slider-home.js"
import "./slider-projects.js"
import "./info-about.js"

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", (e) => {
    // Impede o comportamento padrão de pular direto para o ID
    e.preventDefault()

    const href = link.getAttribute("href")

    // Se o link for para a seção "Início" rola suavemente até o topo da página
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const sectionId = href.slice(1) // remove o "#"
      const section = document.getElementById(sectionId)

      // Se a seção existir, rola suavemente até ela
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  })
})
