let n = Number(lines[0].split(" "))
let cont = 1

for (let i = n; i > 0; i--) {
    cont = cont * i
}
console.log(cont)