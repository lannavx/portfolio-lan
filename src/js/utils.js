// Cria um ícone com classes específicas, baseado no nome da tecnologia informada
export function createIcons(iconName) {
  const icon = document.createElement('i')

  switch (iconName) {
    case "html":
      icon.classList.add("bxl", "bx-html5")
      return icon
    case "css": 
      icon.classList.add("bxl", "bx-css3")
      return icon
    case "js": 
      icon.classList.add("bxl", "bx-javascript")
      return icon
    case "node.js": 
      icon.classList.add("bxl", "bx-nodejs")
      return icon      
  }
}

// Cria dinamicamente o elemento img com as imagens do projeto
export function createImages(projectImages) {
  const images = document.createElement("img")

  // Define o caminho das imagens usando o nome recebido
  images.src = `src/assets/img/${projectImages}`

  return images
}
