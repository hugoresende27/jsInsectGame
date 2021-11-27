const ecras = document.querySelectorAll('.screen')
const botoesEscolhe = document.querySelectorAll('.escolheBtn')
const start = document.getElementById('start')
const conteudo = document.querySelector('.gameMain')
const tempoEL = document.getElementById('tempo')
const scoreEL = document.getElementById('score')
const msgEL = document.getElementById('msg')

let seg = 0
let score = 0
let escolha = {}

// ecras[0].classList.add('up')
start.addEventListener('click', () => {
    ecras[0].classList.add('up')
})

botoesEscolhe.forEach ( btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src  = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        escolha = {src,alt}
        ecras[1].classList.add('up')
        setTimeout(criarInseto,1000)
        startGame()
    })
})

function startGame(){
    setInterval(aumTempo,1000)
}

function aumTempo(){
    let m = Math.floor(seg / 60)
    let s = seg % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    tempoEL.innerHTML = `Tempo: ${m}:${s}`
    seg++
}

function criarInseto(){
    const i = document.createElement('div')
    i.classList.add('inseto')
    const { x,y } = getRandomLocal()
    i.style.top= `${y}px`
    i.style.left= `${x}px`
    i.innerHTML = `<img src="${escolha.src}" alt="${escolha.alt}" style="transform: rotate(${Math.random() * 360}deg"/>`

    i.addEventListener('click', apanhaInseto)


    conteudo.appendChild(i)

}

function getRandomLocal () {
    const wid = window.innerWidth
    const hei = window.innerHeight
    const x = Math.random() * (wid - 200) + 100
    const y = Math.random() * (hei - 200) + 100
    return { x, y }
}

function apanhaInseto(){
    //console.log(123)
    aumentaScore()
    this.classList.add('off')
    setTimeout(() => this.remove(), 2000)
    addInsetos()
}

function aumentaScore(){
    score++
    if (score > 19){
        msgEL.classList.add('visivel')
    }
    scoreEL.innerHTML=`Score: ${score}`
}

function addInsetos() {
    setTimeout(criarInseto, 1000)
    setTimeout(criarInseto, 1500)
}