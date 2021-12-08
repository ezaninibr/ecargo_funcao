

const interval = setInterval(() => {
    const header = document.querySelector(".v-toolbar__content")
    if (header) {
        clearInterval(interval)
        
        const button = document.createElement("button")
        button.innerHTML = "FUNCAO_ID"
        button.classList.add("botaoFuncao")
        header.appendChild(button)

        button.addEventListener("click",()=>{
            const funcao = document.querySelector("iframe")

            var texto = funcao.src.split("/")
            texto = texto[4].split("?")
            texto = texto[1].split("&") 

            window.alert(texto[0])
        })
    }
}, 1000)



