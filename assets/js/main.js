let splitting = document.getElementsByName("splitting")
let jahr = document.getElementById("jahr")
let kirche = document.getElementById("kirche")
let betragVorSteuer = document.getElementById("betragVorSteuer")
let steuerBetrag = document.getElementById("steuerBetrag")
let anteil = document.getElementById("anteil")
let kirchenAnteil = document.getElementById("kirchenAnteil")
let simpsons = document.getElementById("image")
let button = document.getElementById("button")


const target = document.getElementById("simpsons");
button.addEventListener('click', () => target.style.opacity = '1');
target.addEventListener('transitionend', () => target.style.opacity = '0');

let steuern = function(){
    switch(splitting[0].checked){
        case true:
            switch(jahr.options[0].selected){
                case true:
                    switch(true){
                        case betragVorSteuer.value<9744:
                            steuerAbzug = 0
                            break;
                        case (betragVorSteuer.value > 9745 && betragVorSteuer.value < 14753):
                            steuerBerechnung = ((Number(betragVorSteuer.value)-9744)/10000)
                            steuerAbzug = ((995.21*Number(steuerBerechnung)+1400)*Number(steuerBerechnung))
                            break;
                        case (betragVorSteuer.value > 14754 && betragVorSteuer.value < 57918):
                            steuerBerechnung = ((Number(betragVorSteuer.value)-14753)/10000)
                            steuerAbzug = (((208.85*Number(steuerBerechnung)+2397)*Number(steuerBerechnung))+950.96)
                            break;
                        case (betragVorSteuer.value > 57919 && betragVorSteuer.value < 274612):
                            steuerAbzug = (0.42*Number(betragVorSteuer.value)-9136.63)
                            break;
                        case (betragVorSteuer.value > 274613):
                            steuerAbzug = (0.45*Number(betragVorSteuer.value)-17374.99)
                            break;
                    }
                    break;
                case false:
                    switch(jahr.options[1].selected){
                        case true:
                            switch(true){
                                case betragVorSteuer.value<9408:
                                    steuerAbzug = 0
                                    break;
                                case (betragVorSteuer.value > 9409 && betragVorSteuer.value < 14532):
                                    steuerBerechnung = ((Number(betragVorSteuer.value)-9408)/10000)
                                    steuerAbzug = ((972.87*Number(steuerBerechnung)+1400)*Number(steuerBerechnung))
                                    break;
                                case (betragVorSteuer.value > 14533 && betragVorSteuer.value < 57051):
                                    steuerBerechnung = ((Number(betragVorSteuer.value)-14532)/10000)
                                    steuerAbzug = (((212.02*Number(steuerBerechnung)+2397)*Number(steuerBerechnung))+972.79)
                                    break;
                                case (betragVorSteuer.value > 57052 && betragVorSteuer.value < 270500):
                                    steuerAbzug = (0.42*Number(betragVorSteuer.value)-8963.74)
                                    break;
                                case (betragVorSteuer.value > 270501):
                                    steuerAbzug = (0.45*Number(betragVorSteuer.value)-17078.74)
                                    break;
                            }
                            break;
                        case false:
                            switch(jahr.options[2].selected){
                                case true:
                                    switch(true){
                                        case betragVorSteuer.value<9168:
                                            steuerAbzug = 0
                                            break;
                                        case (betragVorSteuer.value > 9169 && betragVorSteuer.value < 14254):
                                            steuerBerechnung = ((Number(betragVorSteuer.value)-9168)/10000)
                                            steuerAbzug = ((980.14*Number(steuerBerechnung)+1400)*Number(steuerBerechnung))
                                            break;
                                        case (betragVorSteuer.value > 14255 && betragVorSteuer.value < 55960):
                                            steuerBerechnung = ((Number(betragVorSteuer.value)-14254)/10000)
                                            steuerAbzug = (((216.16*Number(steuerBerechnung)+2397)*Number(steuerBerechnung))+965.58)
                                            break;
                                        case (betragVorSteuer.value > 55961 && betragVorSteuer.value < 265326):
                                            steuerAbzug = (0.42*Number(betragVorSteuer.value)-8780.9)
                                            break;
                                        case (betragVorSteuer.value > 265327):
                                            steuerAbzug = (0.45*Number(betragVorSteuer.value)-16740.68)
                                            break;
                                    }
                            }
                    }
            }
        break;
        case false:
            switch(jahr.options[0].selected){
                case true:
                    switch(true){
                        case betragVorSteuer.value/2 <9744:
                            steuerAbzug = 0
                            break;
                        case betragVorSteuer.value/2 > 9745 && betragVorSteuer.value/2 < 14753:
                            steuerBerechnung = ((Number(betragVorSteuer.value/2)-9744)/10000)
                            steuerAbzug = (((995.21*Number(steuerBerechnung)+1400)*Number(steuerBerechnung))*2)
                            break;
                        case betragVorSteuer.value/2 > 14754 && betragVorSteuer.value/2 < 57918:
                            steuerBerechnung = ((Number(betragVorSteuer.value/2)-14753)/10000)
                            steuerAbzug = ((((208.85*Number(steuerBerechnung)+2397)*Number(steuerBerechnung))+950.96)*2)
                            break;
                        case betragVorSteuer.value/2 > 57919 && betragVorSteuer.value/2 < 274612:
                            steuerAbzug = ((0.42*(Number(betragVorSteuer.value)/2)-9136.63)*2)
                            break;
                        case betragVorSteuer.value/2 > 274613:
                            steuerAbzug = ((0.45*(Number(betragVorSteuer.value)/2)-17374.99)*2)
                            break;
                    }
                case false:
                    switch(jahr.options[1].selected){
                        case true:
                            switch(true){
                                case betragVorSteuer.value/2 <9408:
                                    steuerAbzug = 0
                                    break;
                                case betragVorSteuer.value/2 > 9409 && betragVorSteuer.value/2 < 14532:
                                    steuerBerechnung = ((Number(betragVorSteuer.value/2)-9408)/10000)
                                    steuerAbzug = (((972.87*Number(steuerBerechnung)+1400)*Number(steuerBerechnung))*2)
                                    break;
                                case betragVorSteuer.value/2 > 14533 && betragVorSteuer.value/2 < 57051:
                                    steuerBerechnung = ((Number(betragVorSteuer.value/2)-14532)/10000)
                                    steuerAbzug = ((((212.02*Number(steuerBerechnung)+2397)*Number(steuerBerechnung))+972.79)*2)
                                    break;
                                case betragVorSteuer.value/2 > 57052 && betragVorSteuer.value/2 < 270500:
                                    steuerAbzug = ((0.42*Number(betragVorSteuer.value/2)-8963.74)*2)
                                    break;
                                case betragVorSteuer.value/2 > 270501:
                                    steuerAbzug = ((0.45*Number(betragVorSteuer.value/2)-17078.74)*2)
                                    break;
                            }
                            case false:
                                switch(jahr.options[2].selected){
                                    case true:
                                        switch(true){
                                            case betragVorSteuer.value/2 <9168:
                                                steuerAbzug = 0
                                                break;
                                            case betragVorSteuer.value/2 > 9169 && betragVorSteuer.value/2 < 14254:
                                                steuerBerechnung = ((Number(betragVorSteuer.value/2)-9168)/10000)
                                                steuerAbzug = (((980.14*Number(steuerBerechnung)+1400)*Number(steuerBerechnung))*2)
                                                break;
                                            case betragVorSteuer.value/2 > 14255 && betragVorSteuer.value/2 < 55960:
                                                steuerBerechnung = ((Number(betragVorSteuer.value/2)-14254)/10000)
                                                steuerAbzug = ((((216.16*Number(steuerBerechnung)+2397)*Number(steuerBerechnung))+965.58)*2)
                                                break;
                                            case betragVorSteuer.value/2 > 55961 && betragVorSteuer.value/2 < 265326:
                                                steuerAbzug = ((0.42*Number(betragVorSteuer.value/2)-8780.9)*2)
                                                break;
                                            case betragVorSteuer.value/2 > 265327:
                                                steuerAbzug = ((0.45*Number(betragVorSteuer.value/2)-16740.68))
                                                break;
                                        }
                                }
                    }
            }
    }

    if(splitting[0].checked == false && splitting[1].checked == false){
        return alert("Bitte Tarif auswählen!")
    }
    if(kirche.options[0].selected == true){
        anteil.innerHTML = (betragVorSteuer.value - steuerAbzug).toFixed(2)+"€"
        kirchenAnteil.innerHTML = "0,00€"
    } else if(kirche.options[1].selected == true){
        anteil.innerHTML = betragVorSteuer.value - (steuerAbzug*1.08).toFixed(2)+"€"
        kirchenAnteil.innerHTML = (steuerAbzug*0.08).toFixed(2)+"€"
    }   else{
        anteil.innerHTML = betragVorSteuer.value - (steuerAbzug*1.09).toFixed(2)+"€"
        kirchenAnteil.innerHTML = (steuerAbzug*0.09).toFixed(2)+"€"
    }

    steuerBetrag.innerHTML = steuerAbzug.toFixed(2)+"€"
}
