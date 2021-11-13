const liga = document.getElementById ('liga')
const desliga = document.getElementById ('desliga')
const lamp = document.getElementById ('lamp')

function lampOn(){
    lamp.src = 'img/ligada.jpg'
}

function lampOff(){
    lamp.src = 'img/desligada.jpg'
}

function lampBroken(){
    lamp.src = 'img/quebrada.jpg'
}


liga.addEventListener ('click', lampOn)
desliga.addEventListener ('click', lampOff)
lamp.addEventListener ('dblclick', lampBroken)
lamp.addEventListener ('mouseover' , lampOn )
lamp.addEventListener ('mouseout', lampOff)

