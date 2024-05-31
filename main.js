function contar(){
    let start = parseInt(document.querySelector("#start").value)
    let endd = parseInt(document.querySelector("#endd").value)
    let step = parseInt(document.querySelector("#step").value)
    
    if (endd < start || endd == start){
        window.alert("Algo está errado, reescreva os números.")
    }
    else{
        let num = endd - start
        let num1 = num / step
        
        if (Number.isInteger(num1)){
            let current = Number(start)
            let resultado = ` `
            while (current < endd){
                resultado += `${current} &#x1F4E2 `
                current += step
            }
            document.querySelector("#resultado").innerHTML = resultado + "&#x1F47B"
        }
        else{
            window.alert("Algo está errado, reescreva o passo.")
        }
        }
    }