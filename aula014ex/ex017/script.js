function tabuada() {
     let num = document.getElementById('txtn')
     let tabuada = document.getElementById('seltab')
     if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
     } else {
        let n = Number(num.value)
        let c = 1
        tabuada.innerHTML = ''  //APENAS PARA LIMPAR A TABELA
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tabuada${c}`
            tabuada.appendChild(item)
            c++
        }
     }
}