 let num = document.querySelector('input#fnum')
 let lista = document.querySelector('select#flista')
 let res = document.querySelector('div#res')
 let valores = []  // VETOR PARA ANALIZAR OS DADOS

 // SÓ VAI ACEITAR NÚMEROS ENTRE 1 E 100
 function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
 }

 function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
 }

 // SÓ VAI ADICIONAR NÚMEROS OU SE NÃO JÁ ESTIVER PRESENTE NA LISTA
 function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) // ADICIONAR O NÚMERO NA LISTA
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.` // MOSTRAR O NÚMERO NA LISTA
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
 }

 // ASSIM QUE CLICAR EM ADICIONAR, O NÚMERO VAI SUMIR E FICARÁ LIVRE PARA ADICIONAR OUTRO...
 num.value = ''
 num.focus()

 // MOSTRANDO AS FUNCIONALIDADES
 function finalizar() {
    if (valores.length == 0) { // SE O VETOR ESTIVER VAZIO
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}.</p>`
    }
 }

