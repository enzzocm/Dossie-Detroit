//REVEAL DE ELEMENTOS
window.sr = ScrollReveal({ reset: true })

sr.reveal(".area-1", { duration: 5000 })
sr.reveal(".menu", { duration: 5000 })
sr.reveal(".indicator", { duration: 5000 })
sr.reveal(".seta", { duration: 2000 })
sr.reveal(".conteudo1", { duration: 2000 })
sr.reveal(".conteudo2", { duration: 2000 })
sr.reveal(".imagem1", { duration: 7000,
 origin: 'bottom', distance: '50px' })
sr.reveal(".imagem2", { duration: 3000,
 origin: 'bottom', distance: '50px' })
sr.reveal(".imagem3", { duration: 5000,
 origin: 'bottom', distance: '50px' })
sr.reveal(".relacionamento", { duration: 5000, origin: 'bottom', distance: '50px' })
sr.reveal(".jogabilidadep", { duration: 2000 })
sr.reveal(".conteudo2", { duration: 2000 })
sr.reveal(".conteudo4", { duration: 2000 })
sr.reveal(".conteudo5", { duration: 2000 })
sr.reveal(".requisitos1", { duration: 2000 })
sr.reveal(".control", { duration: 4000, origin: 'bottom', distance: '50px' })
sr.reveal(".requisitos", { duration: 3000, origin: 'bottom', distance: '50px'})
sr.reveal(".text", { duration: 2000 })
//SCROLL SUAVE
function scrollSmoothTo(target) {
    const targetElement = document.querySelector(target)
    let targetPosition = targetElement.offsetTop

    if (target === '#personagens') {
        targetPosition += 180
    } 
  if (target === '#inicio') {
      targetPosition += -300
  }
  if (target === '#historias') {
      targetPosition += -200
  }
  if (target === '#jogabilidade') {
      targetPosition += -200
  }
  if (target === '#escolhas') {
      targetPosition += -160
  }


    const currentPosition = window.pageYOffset
    const distance = targetPosition - currentPosition
    const duration = 1000
    let start = null

    function step(timestamp) {
        if (!start) start = timestamp
        const progress = timestamp - start
        window.scrollTo(0, easeInOutCubic(progress, currentPosition, distance, duration))
        if (progress < duration) {
            window.requestAnimationFrame(step)
        }
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2
        if (t < 1) return (c / 2) * t * t * t + b
        t -= 2
        return (c / 2) * (t * t * t + 2) + b
    }

    window.requestAnimationFrame(step)
}

const navLinks = document.querySelectorAll('.menu a')
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        const targetId = e.target.getAttribute('href')
        if (targetId.startsWith('#')) {
            scrollSmoothTo(targetId)
        }
    })
})
//ANIMAÇÃO DA NAVBAR
const menu = document.querySelector('.menu');
let isMouseAtTop = false;
let timeout;
let isNavBarHidden = false;

menu.style.transition = 'transform 0.3s ease';
menu.style.transform = 'translateY(0)';

function hideMenu() {
    if (!isMouseAtTop && isNavBarHidden) {
        menu.style.transition = 'transform 0.3s ease';
        menu.style.transform = 'translateY(-100%)';
    }
}

window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        isNavBarHidden = false;
        if (!isMouseAtTop) {
            clearTimeout(timeout);
            timeout = setTimeout(hideMenu, 500);
        }
    } else {
        isNavBarHidden = true;
        menu.style.transition = 'transform 0.3s ease';
        menu.style.transform = 'translateY(-100%)';
    }
});


window.addEventListener('mousemove', (e) => {
    const mouseY = e.clientY;
    if (mouseY < 100) {
        isMouseAtTop = true;
        menu.style.transition = 'transform 0.3s ease';
        menu.style.transform = 'translateY(0)';
    } else {
        isMouseAtTop = false;
        if (!isNavBarHidden) {
            clearTimeout(timeout);
            timeout = setTimeout(hideMenu, 500);
        }
    }
});


//SLIDE DE FOTOS
let count = 1
document.getElementById("radio1").checked = true

setInterval( function(){
  nextImage()
}, 13000)

function nextImage(){
  count++
  if(count > 3){
    count = 1
  }
  document.getElementById("radio"+count).checked = true
}

