let a = 1

while (a) {
    let b = lines.shift().split(" ")
    b = Number(b)

    if (b !== 2002) {
        console.log("Senha Invalida")
    } else {
        console.log("Acesso Permitido")
        break;
    }
}