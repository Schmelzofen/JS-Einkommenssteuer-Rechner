let splitting = document.getElementsByName("splitting")
let jahr = document.getElementById("jahr")
let betragVorSteuer = document.getElementById("betragVorSteuer")
let steuerBetrag = document.getElementById("steuerBetrag")
let anteil = document.getElementById("anteil")

let steuern = function(){
    switch(splitting[0].checked){
        case true:
            switch(jahr.options[0].selected){
                case true:
                    switch(true){
                        case betragVorSteuer.value<9744:
                            taxes = 0
                            break;
                        case (betragVorSteuer.value > 9745 && betragVorSteuer.value < 14753):
                            taxes = (((((betragVorSteuer.value-9744)/10000)*995.21)+1400))
                            break;
                        case (betragVorSteuer.value > 14754 && betragVorSteuer.value < 57918):
                            taxes = (((((((betragVorSteuer.value-14753)/10000)*208.86)+2397)*2)+950.96)/2)
                            break;
                        case (betragVorSteuer.value > 57919 && betragVorSteuer.value < 274612):
                            taxes = (((betragVorSteuer.value*0.42)-9136.63)/2)
                            break;
                        case (betragVorSteuer.value > 274613):
                            taxes = (((betragVorSteuer.value*0.45)-17374.99)/2)
                            break;
                    }
                    break;
                case false:
                    switch(jahr.options[1].selected){
                        case true:
                            switch(true){
                                case betragVorSteuer.value<9408:
                                    taxes = 0
                                    break;
                                case (betragVorSteuer.value > 9409 && betragVorSteuer.value < 14532):
                                    taxes = (((((betragVorSteuer.value-9408)/10000)*972.87)+1400)/2)
                                    break;
                                case (betragVorSteuer.value > 14533 && betragVorSteuer.value < 57051):
                                    taxes = (((((((betragVorSteuer.value-14532)/10000)*212.02)+2397)*2)+972.79)/2)
                                    break;
                                case (betragVorSteuer.value > 57052 && betragVorSteuer.value < 270500):
                                    taxes = (((betragVorSteuer.value*0.42)-8963.74)/2)
                                    break;
                                case (betragVorSteuer.value > 270501):
                                    taxes = (((betragVorSteuer.value*0.45)-17078.74)/2)
                                    break;
                            }
                            break;
                        case false:
                            switch(jahr.options[2].selected){
                                case true:
                                    switch(true){
                                        case betragVorSteuer.value<9168:
                                            taxes = 0
                                            break;
                                        case (betragVorSteuer.value > 9169 && betragVorSteuer.value < 14254):
                                            taxes = (((((betragVorSteuer.value-9168)/10000)*980.14)+1400))
                                            break;
                                        case (betragVorSteuer.value > 14255 && betragVorSteuer.value < 55960):
                                            taxes = (((((((betragVorSteuer.value-14254)/10000)*216.16)+2397)*2)+965.58)/2)
                                            break;
                                        case (betragVorSteuer.value > 55961 && betragVorSteuer.value < 265326):
                                            taxes = (((betragVorSteuer.value*0.42)-8780.9)/2)
                                            break;
                                        case (betragVorSteuer.value > 270501):
                                            taxes = (((betragVorSteuer.value*0.45)-16740.68)/2)
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
                        case betragVorSteuer.value<9744:
                            taxes = 0
                            break;
                        case (betragVorSteuer.value > 9745 && betragVorSteuer.value < 14753):
                            taxes = (((((betragVorSteuer.value-9744)/10000)*995.21)+1400)*2)
                            break;
                        case (betragVorSteuer.value > 14754 && betragVorSteuer.value < 57918):
                            taxes = ((((((betragVorSteuer.value-14753)/10000)*208.86)+2397)*2)+950.96)
                            break;
                        case (betragVorSteuer.value > 57919 && betragVorSteuer.value < 274612):
                            taxes = ((betragVorSteuer.value*0.42)-9136.63)
                            break;
                        case (betragVorSteuer.value > 274613):
                            taxes = ((betragVorSteuer.value*0.45)-17374.99)
                            break;
                    }
                case false:
                    switch(jahr.options[1].selected){
                        case true:
                            switch(true){
                                case betragVorSteuer.value<9408:
                                    taxes = 0
                                    break;
                                case (betragVorSteuer.value > 9409 && betragVorSteuer.value < 14532):
                                    taxes = (((((betragVorSteuer.value-9408)/10000)*972.87)+1400)*2)
                                    break;
                                case (betragVorSteuer.value > 14533 && betragVorSteuer.value < 57051):
                                    taxes = ((((((betragVorSteuer.value-14532)/10000)*212.02)+2397)*2)+972.79)
                                    break;
                                case (betragVorSteuer.value > 57052 && betragVorSteuer.value < 270500):
                                    taxes = ((betragVorSteuer.value*0.42)-8963.74)
                                    break;
                                case (betragVorSteuer.value > 270501):
                                    taxes = ((betragVorSteuer.value*0.45)-17078.74)
                                    break;
                            }
                            case false:
                                switch(jahr.options[2].selected){
                                    case true:
                                        switch(true){
                                            case betragVorSteuer.value<9168:
                                                taxes = 0
                                                break;
                                            case (betragVorSteuer.value > 9169 && betragVorSteuer.value < 14254):
                                                taxes = (((((betragVorSteuer.value-9168)/10000)*980.14)+1400)*2)
                                                break;
                                            case (betragVorSteuer.value > 14255 && betragVorSteuer.value < 55960):
                                                taxes = ((((((betragVorSteuer.value-14254)/10000)*216.16)+2397)*2)+965.58)
                                                break;
                                            case (betragVorSteuer.value > 55961 && betragVorSteuer.value < 265326):
                                                taxes = ((betragVorSteuer.value*0.42)-8780.9)
                                                break;
                                            case (betragVorSteuer.value > 270501):
                                                taxes = ((betragVorSteuer.value*0.45)-16740.68)
                                                break;
                                        }
                                }
                    }
            }
    }
    anteil.innerHTML = betragVorSteuer.value - taxes.toFixed(2)+"€"
    steuerBetrag.innerHTML = taxes.toFixed(2)+"€"
}