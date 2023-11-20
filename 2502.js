while (lines[0]) {
    let [c, n] = lines.shift().split(" ")
    c = Number(c)
    n = Number(n)
    let c1 = (lines.shift()).toString()
    let c2 = (lines.shift()).toString()
    let texto = ""

    for (let i = 0; i < n; i++) {
        texto = lines.shift().toString()
        texto = texto.toString().split("")
        for (let j = 0; j < texto.length; j++) {
            for (let k = 0; k < c; k++) {

                if (texto[j] === c1[k].toLowerCase()) {
                    texto[j] = c2[k].toLowerCase()
                } else if (texto[j] === c1[k].toUpperCase()) {
                    texto[j] = c2[k].toUpperCase()
                } else if (texto[j] === c2[k].toLowerCase()) {
                    texto[j] = c1[k].toLowerCase()
                } else if (texto[j] === c2[k].toUpperCase()) {
                    texto[j] = c1[k].toUpperCase()

                }
            }
        }
        console.log(texto.join(""))
    }
    console.log()
}