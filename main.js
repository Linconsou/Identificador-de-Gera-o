// O código recebe o ano de nascimento do usuário, verifica se é válido, calcula a idade, determina o gênero e a geração da pessoa, e exibe essas informações no HTML da página. Além disso, altera a cor de fundo da página com base no gênero selecionado.

function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById("txtano")
    let res = document.getElementById("res")

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!")
        // Verifica se o usuário não digitou nada ou se o ano informado é maior que o ano atual. Se uma dessas condições for verdadeira, exibe uma mensagem de erro.
        // Caso o ano informado seja válido, o código prossegue para determinar a idade e o gênero da pessoa.

    } else {
        let fsex = document.getElementsByName("radsex")
        // O COMANDO ACIMA IRÁ PEGAR A INFORMAÇÃO SELECIONADA PELO USUÁRIO ENTRE MASCULINO E FEMININO
        let idade = ano - Number(fAno.value)
        // O COMANDO ACIMA IRÁ PEGAR O VALOR DO ANO ATUAL MENOS O VALOR DO ANO INFORMADO PELO USUÁRIO
        let gênero = ""
        let img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsex[0].checked) {
            gênero = "Homem"
            if (idade >= 0 && idade < 10) {
                // Criança
            } else if (idade < 21) {
                // Jovem
            } else if (idade < 50) {
                // Adulto
            } else {
                // Idoso
            }
            document.body.style.background = "#000"
        } else if (fsex[1].checked) {
            gênero = "Mulher"
            if (idade >= 0 && idade < 10) {
                // Criança
            } else if (idade < 21) {
                // Jovem
            } else if (idade < 50) {
                // Adulta
            } else {
                // Idosa
            }
            document.body.style.background = "#fafa"
            document.body.style.transition = ""

        }

        // DETERMINAR GERAÇÃO
        let geração = ""
        let anoNascimento = Number(fAno.value)

        if (anoNascimento >= 2010) {
            geração = "Geração Alpha"
        } else if (anoNascimento >= 1997 && anoNascimento <= 2009) {
            geração = "Geração Z"
        } else if (anoNascimento >= 1981 && anoNascimento <= 1996) {
            geração = "Millennials"
        } else if (anoNascimento >= 1965 && anoNascimento <= 1980) {
            geração = "Geração X"
        } else if (anoNascimento >= 1946 && anoNascimento <= 1964) {
            geração = "Baby Boomers"
        } else if (anoNascimento <= 1945) {
            geração = "Geração Silenciosa"
        }

        res.style.textAlign = "center"
        res.innerHTML = `<p>Detectamos que você é um ${gênero} com ${idade} anos.</p>` + `<p>Você faz parte da ${geração}.</p>`
    }
}