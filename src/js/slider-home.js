// Importa os dados de cada projeto
import { projects } from "./projects-data.js"

const projectStack = document.querySelectorAll(".stack")
const verticalName = document.getElementById("text-vertical")
const projectName = document.getElementById("project-name")
const projectDescription = document.getElementById("description-project")
const techStack = document.getElementById("tech-stack")
const maskImage = document.getElementById("mask-image")
const btnTopArrow = document.querySelector("[aria-label='Projeto anterior']")
const btnBottomArrow = document.querySelector("[aria-label='Próximo projeto']")
const btnLink = document.querySelector(".view-project")

let currentIndex = 0 // Inicia o indice em 0
let autoPlay // ID do setInterval para troca automatica
let resumeTimeout // ID do setTimeout que retoma o autoplay após interação
const time = 4000 // Tempo base para autoplay e delay

// Limpa a lista de tecnologias
function clearCurrentTechStack() {
  techStack.innerHTML = ""
}

// Limpa o container de imagens
function clearCurrentImage() {
  maskImage.innerHTML = ""
}

// Atualiza as informações do projeto atual com base no índice recebido
function showProject(i) {
  // Limpa o conteúdo anterior antes de atualizar com o novo projeto
  clearCurrentTechStack()
  clearCurrentImage()

  // Atualiza todos os elementos da interface relacionados ao projeto atual
  projectStack.forEach((stack) => {
    stack.innerText = projects[i].stack
  })
  verticalName.innerText = projects[i].project
  projectName.innerText = projects[i].project
  projectDescription.innerText = projects[i].description
  projects[i].technologies.forEach((icon) => {
    techStack.appendChild(icon)
  })
  maskImage.appendChild(projects[i].cover_image)
  btnLink.href = projects[i].link
}

// Avança para o próximo projeto
function nextProject() {
  // Se o índice passar do final da lista, reinicia no primeiro item
  currentIndex++
  if (currentIndex >= projects.length) {
    currentIndex = 0
  }
  showProject(currentIndex)
}

// Volta para o projeto anterior
function prevProject() {
  // Se o índice for menor que zero, reinicia a contagem no último item do array
  currentIndex--
  if (currentIndex < 0) {
    currentIndex = projects.length - 1
  }
  showProject(currentIndex)
}

// Inicia a troca automatica de projeto
function startAutoPlay() {
  autoPlay = setInterval(nextProject, time)
}

// Para o autoplay
function stopAutoPlay() {
  clearInterval(autoPlay)
}

// Retoma o autoplay após um tempo e cancela o timeout anterior se houver
function resumeAutoPlay() {
  clearTimeout(resumeTimeout)
  resumeTimeout = setTimeout(startAutoPlay, time)
}

// Começa a troca automatica ao abrir a página
startAutoPlay()

// Captura o clique nas setas e mostra as informações do projeto atual
btnTopArrow.addEventListener("click", () => {
  stopAutoPlay()
  prevProject()
  resumeAutoPlay()
})

btnBottomArrow.addEventListener("click", () => {
  stopAutoPlay()
  nextProject()
  resumeAutoPlay()
})
