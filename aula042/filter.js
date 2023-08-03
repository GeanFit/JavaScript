//const filterMaior18=(valor,indice,arr)=>{
const filterMaior18=(valor)=>{
    if(valor >= 18)
        return valor
}

const idades=[15,21,30,17,18,44,12,50]
const maior=idades.filter((val,ind,arr)=>{
    if(val >= 28)
        return val
})
const menor=idades.filter((val,ind,arr)=>{
    if(val < 18)
        return val
})

console.log(idades)
console.log(maior)
console.log(menor)