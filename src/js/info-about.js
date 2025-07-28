// Lista com as mensagens a serem exibidas
const descriptions = [
  { description: "▶ Iniciando conexão neural com você..."},
  { description: "▶ Olá, humano. Eu sou a IA da Lan" },
  { description: "▶ Nome de identificação: Lan (Culpa da criadora, criatividade: sistema offline)" },
  { description: "▶ Obrigado por acessar este ponto da rede. Você chegou longe!" },
  { description: "▶ Lan é uma desenvolvedora full stack em transição de carreira"},
  { description: "▶ Atuou por mais de 5 anos na área administrativa, até se apaixonar por programação. Conversão para código: concluída" },
  { description: "▶ Pacote de habilidades carregado: HTML • CSS • JavaScript • Node.js." },
  { description: "▶ Status atual: em busca de uma missão oficial no universo dev. Pronta para onboarding"},
  { description: "▶ Se você detectou valor neste sistema, envie sinal via LinkedIn ou e-mail. Comunicação segura ativada." },
  { description: "▶ Confidencial: você vai gostar dela. (Não fui forçada a dizer isso. [mentira.exe])" }
]



const descriptionAbout = document.getElementById("description-about")
const dots = document.getElementById("dots-animation")

// Garante que a animação só comece uma vez
let animationStarted = false

// Cria dinamicamente o HTML de uma linha de descrição
function createDescriptionItem(text) {
  const container = document.createElement("div")
  container.classList.add("description-itens")

  const vector = document.createElement("span")
  vector.classList.add("vector")

  const paragraph = document.createElement("p")
  paragraph.innerText = text

  container.appendChild(vector)
  container.appendChild(paragraph)

  descriptionAbout.insertBefore(container, dots)
}

// Inicia a animação de chat, exibindo uma nova descrição a cada intervalo
function startChatAnimation() {
  let index = 0
  const interval = 2500

  // Chama a função repetidamente
  const timer = setInterval(() => {
    createDescriptionItem(descriptions[index].description)
    index++

    // Quando todas as mensagens forem exibidas, para a execução e esconde os dots
    if (index >= descriptions.length) {
      clearInterval(timer)
      dots.style.display = "none"
    }
  }, interval)
}

// Verifica se a seção está visível na tela
function checkVisibility() {
  const section = descriptionAbout.getBoundingClientRect()

  const isVisible = section.top < window.innerHeight && section.bottom >= 0

  if (isVisible && !animationStarted) {
    animationStarted = true
    startChatAnimation()
    window.removeEventListener("scroll", checkVisibility)
  }
}

// Escuta o scroll e verifica se a seção entrou na tela
window.addEventListener("scroll", checkVisibility)
window.addEventListener("load", checkVisibility)
