let [a, b, c, d, e] = lines.shift().split(" ")

a = Number(a)
b = Number(b)
c = Number(c)
d = Number(d)
e = Number(e)

if (a === 1) {
    if (b % 2 === 0) {
        if ((c % 2) === 0) {
            if (d === 0) {
                console.log("Jogador 1 ganha!")
            } else if (d !== 0) {
                if (e === 0) {
                    console.log("Jogador 1 ganha!")
                } else {
                    console.log("Jogador 2 ganha!")
                }
            }
        } else {
            if (d === 0) {
                console.log("Jogador 2 ganha!")
            } else {
                if (e === 0) {
                    console.log("Jogador 1 ganha!")
                } else {
                    console.log("Jogador 2 ganha!")
                }
            }
        }
    } else {
        if ((c % 2) === 0) {
            if (d === 0) {
                console.log("Jogador 2 ganha!")
            } else {
                if (e === 0) {
                    console.log("Jogador 1 ganha!")
                } else {
                    console.log("Jogador 2 ganha!")
                }
            }
        } else {
            if (d === 0) {
                console.log("Jogador 1 ganha!")
            } else {
                if (e === 0) {
                    console.log("Jogador 1 ganha!")
                } else {
                    console.log("Jogador 2 ganha!")
                }
            }
        }
    }
}

if (a === 0) {
    if (b % 2 === 0) {
        if ((c % 2) === 0) {
            if (d === 0) {
                console.log("Jogador 2 ganha!")
            } else {
                if (e === 0) {
                    console.log("Jogador 1 ganha!")
                } else {
                    console.log("Jogador 2 ganha!")
                }
            }
        } else {
            if (d === 0) {
                console.log("Jogador 1 ganha!")
            } else {
                if (e === 0) {
                    console.log("Jogador 1 ganha!")
                } else {
                    console.log("Jogador 2 ganha!")
                }
            }
        }
    } else {
        if ((c % 2) === 0) {
            if (d === 0) {
                console.log("Jogador 1 ganha!")
            } else {
                if (e === 0) {
                    console.log("Jogador 1 ganha!")
                } else {
                    console.log("Jogador 2 ganha!")
                }
            }
        } else {
            if (d === 0) {
                console.log("Jogador 2 ganha!")
            } else {
                if (e === 0) {
                    console.log("Jogador 1 ganha!")
                } else {
                    console.log("Jogador 2 ganha!")
                }
            }
        }
    }
}