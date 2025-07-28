// Importa os dados de cada projeto
import { projects } from "./projects-data.js"

const projectWraper = document.getElementById("project-line-wrapper")
const videoProject = document.getElementById("video-wrapper")
const imgsProject = document.getElementsByClassName("img-cntr")
const leftArrow = document.getElementById("left-arrow")
const rightArrow = document.getElementById("right-arrow")

const allProjectBoxes = [] // Armazena todos os articles criados
let actuaIndex = 0 // Índice do projeto ativo

// Adiciona suporte a gesto de deslize (swipe)
let touchStartX = 0
let touchEndX = 0

// Cria dinamicamente o elemento video com o video de exibição do projeto
function createVideo(projectVideo) {
  const video = document.createElement("video")

  // Define o caminho do video usando o nome recebido
  video.src = `src/assets/videos/${projectVideo}`

  // Adiciona os atributos necessários
  video.autoplay = true
  video.muted = true
  video.loop = true
  video.playsInline = true
  video.preload = "auto"

  return video
}

// Limpa o video antigo
function clearCurrentVideo() {
  const currentVideo = videoProject.querySelector("video")
  if (currentVideo) {
    currentVideo.remove()
  }
}

// Limpa as imagens antigas
function clearImages() {
  for (let i = 0; i < imgsProject.length; i++) {
    imgsProject[i].innerHTML = ""
  }
}

// Cria e insere um novo box de projeto no slider com header e descrição
function createProjectBox(index) {
  const projectData = projects[index] // Dados do projeto atual
  const rightArrowCntr = document.querySelector(".project-line-arrows.right")

  const header = createProjectHeader(projectData)
  const descriptionBox = createDescriptionBox(projectData)

  const projectContent = document.createElement("div")
  projectContent.classList.add("pbw-content")
  projectContent.append(header, descriptionBox)

  const projectBox = document.createElement("article")
  projectBox.classList.add("project-box-wrapper")
  projectBox.appendChild(projectContent)

  // Adiciona evento de clique no carrossel 
  projectBox.addEventListener("click", () => {
    if (actuaIndex !== index) {
      actuaIndex = index
      updateCarouselView(actuaIndex)
    }
  })

  projectWraper.insertBefore(projectBox, rightArrowCntr)
  allProjectBoxes.push(projectBox)
}

// Cria o cabeçalho do projeto (título e tecnologias usadas)
function createProjectHeader(data) {
  const title = document.createElement("p")
  title.innerText = "projeto"

  const projectTitle = document.createElement("h1")
  projectTitle.innerText = data.project

  const nameBox = document.createElement("div")
  nameBox.classList.add("name-box")
  nameBox.append(title, projectTitle)

  const techBox = document.createElement("div")
  techBox.classList.add("tech-box")
  data.technologies.forEach((icon) => {
    techBox.appendChild(icon.cloneNode(true))
  })

  const header = document.createElement("header")
  header.classList.add("name-and-tech")
  header.append(nameBox, techBox)

  return header
}

// Cria a seção de descrição do projeto (texto, botão e decorações)
function createDescriptionBox(data) {
  const description = document.createElement("p")
  description.classList.add("description")
  description.innerText = data.description

  const linkButton = document.createElement("a")
  linkButton.classList.add("view-project", "white")
  linkButton.innerText = "Ver projeto"
  linkButton.href = data.link
  linkButton.target = "_blank"

  const imgButton = document.createElement("img")
  imgButton.src = "src/assets/icons/arrow-project-white.svg"
  linkButton.appendChild(imgButton)

  const imgDecorationBox = document.createElement("div")
  imgDecorationBox.classList.add("img-decoration")

  const decorations = [
    "lines_block_white.svg",
    "lines_holder_white.svg",
    "wave_lines_white.svg",
  ]

  decorations.forEach((src) => {
    const img = document.createElement("img")
    img.src = `src/assets/icons/${src}`
    imgDecorationBox.appendChild(img)
  })

  const btnAndDecoration = document.createElement("div")
  btnAndDecoration.classList.add("btn-and-decoration")
  btnAndDecoration.append(linkButton, imgDecorationBox)

  const descriptionBox = document.createElement("section")
  descriptionBox.classList.add("project-box-description")
  descriptionBox.append(description, btnAndDecoration)

  return descriptionBox
}

// Exibe as midias (video/imagens) de cada projeto
function showMidia(i) {
  // Atualiza todas as midias relacionados ao projeto atual
  const videoElement = createVideo(projects[i].video)
  videoProject.insertBefore(videoElement, videoProject.firstChild)

  for (let j = 0; j < projects[i].imgs.length && j < imgsProject.length; j++) {
    imgsProject[j].appendChild(projects[i].imgs[j])
  }
}

// Atualiza os projetos visíveis no carrossel com base no índice central/ativo
function updateCarouselView(centerIndex) {
  const rightArrowCntr = document.querySelector(".project-line-arrows.right")
  allProjectBoxes.forEach((box) => box.remove())

  const total = allProjectBoxes.length
  let indexesToShow

  // Se estiver no modo mobile, só exibe o projeto central
  if (isMobile()) {
    indexesToShow = [centerIndex]
  } else {
    // Caso desktop, calcula os índices do projeto anterior e do próximo
    let leftIndex = centerIndex - 1
    if (leftIndex < 0) {
      leftIndex = total - 1
    }
    let rightIndex = centerIndex + 1
    if (rightIndex >= total) {
      rightIndex = 0
    }

    // Armazena os 3 projetos a serem exibidos
    indexesToShow = [leftIndex, centerIndex, rightIndex]
  }

  // Insere os projetos calculados no carrossel
  indexesToShow.forEach((i, position) => {
    const box = allProjectBoxes[i]
    box.classList.remove("active")

    // Define se este projeto é o central/ativo
    const isActive = isMobile() || position === 1
    if (isActive) {
      box.classList.add("active")
      clearCurrentVideo()
      clearImages()
      showMidia(i)
    }

    projectWraper.insertBefore(box, rightArrowCntr)
  })

  updateDots(centerIndex) // atualiza os dots com base no projeto ativo
}

// Verifica se o dispositivo é considerado mobile
function isMobile() {
  return window.innerWidth <= 768
}

// Cria os dots dinamicamente com base na quantidade de projects
function createDots() {
  const dotContainer = document.querySelector(".dots")
  dotContainer.innerHTML = "" // limpa qualquer dot existente

  projects.forEach((_, i) => {
    const dot = document.createElement("button")
    dot.classList.add("dot-btn")

    dot.addEventListener("click", () => {
      actuaIndex = i
      updateCarouselView(actuaIndex)
    })

    dotContainer.appendChild(dot)
  })
}

// Marca o dot ativo conforme o slide atual
function updateDots(activeIndex) {
  const allDots = document.querySelectorAll(".dot-btn")
  allDots.forEach((dot, i) => {
    dot.classList.toggle("active-dot", i === activeIndex)
  })
}

// Espera o carregamento completo do DOM antes de executar a lógica
document.addEventListener("DOMContentLoaded", () => {

  // Para cada projeto, cria e insere um article no carrossel
  for (let indexProject = 0; indexProject < projects.length; indexProject++) {
    createProjectBox(indexProject)
  }

  // Cria os botões de navegação com base na quantidade de projetos
  createDots()
  updateCarouselView(actuaIndex) // Exibe os projetos iniciais no carrossel
})

// Evento de início do toque
projectWraper.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX
  }, false
)

// Evento de final do toque
projectWraper.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX
    handleSwipe()
  }, false
)

// Verifica o gesto de swipe e altera o slide do carrossel com base na direção
function handleSwipe() {
  const deltaX = touchEndX - touchStartX

  // Só considera um swipe válido se o movimento for maior que 50px
  if (Math.abs(deltaX) > 50) {
    if (deltaX > 0) {
      actuaIndex--
      if (actuaIndex < 0) {
        actuaIndex = projects.length - 1
      }
    } else {
      actuaIndex++
      if (actuaIndex >= projects.length) {
        actuaIndex = 0
      }
    }
    // Atualiza a visualização do carrossel com o novo índice
    updateCarouselView(actuaIndex)
  }
}

leftArrow.addEventListener("click", () => {
  actuaIndex--
  if (actuaIndex < 0) {
    actuaIndex = projects.length - 1
  }

  updateCarouselView(actuaIndex)
})

rightArrow.addEventListener("click", () => {
  actuaIndex++
  if (actuaIndex >= projects.length) {
    actuaIndex = 0
  }

  updateCarouselView(actuaIndex)
})

