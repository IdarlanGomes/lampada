//const liga = document.getElementById ('liga')
//const desliga = document.getElementById ('desliga')
const ligaDesliga = document.getElementById ('ligaDesliga')
const lamp = document.getElementById ('lamp')

function isLampBroken (){
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn(){
    if (!isLampBroken ()){
    lamp.src = 'img/ligada.jpg'
    }
}

function lampOff(){
    if (!isLampBroken ()){
    lamp.src = 'img/desligada.jpg'
    }
}

function lampBroken(){
    lamp.src = 'img/quebrada.jpg'
}

function lampOnOff(){
    if (ligaDesliga.textContent == 'Liga'){ //.textContent quando usado com == (igual a) verifica se o conteúdo do texto na const ligaDesliga é igual a 'Liga'
        lampOn ()
        ligaDesliga.textContent = 'Desliga' //.textContent quando usado com = (recebe) altera o conteúdo do texto na consta ligaDesliga para 'Desliga'

    }else{
        lampOff ()
        ligaDesliga.textContent = 'Liga'

    }
}


//liga.addEventListener ('click', lampOn)
//desliga.addEventListener ('click', lampOff)
ligaDesliga.addEventListener ('click', lampOnOff)
lamp.addEventListener ('dblclick', lampBroken)
lamp.addEventListener ('mouseover' , lampOn )
lamp.addEventListener ('mouseout', lampOff)

