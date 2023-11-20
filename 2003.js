while (lines[0]) {

    let a = lines.shift().split(":")
    let h = Number(a[0]) + 1
    let m = Number(a[1])

    let hora = (h - 8) * 60

    let tempo = hora + m
    if (tempo > 0) {
        console.log("Atraso maximo:", tempo)
    } else {
        console.log("Atraso maximo: 0")
    }
}
