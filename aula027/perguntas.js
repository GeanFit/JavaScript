function* perguntas(){
    const nome=yield 'Qaul seu nome?'
    const esporte=yield 'Qual seu esporte favorito?'
    return 'Seu nome é' + nome + ', seu esporte favotirp é' + esporte
}

const itp=perguntas()
console.log(itp=next().value)
console.log(itp=next('Beuno').value)
console.log(itp=next('Powerlifting').value)