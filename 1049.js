let a = (lines[0].split(" ")).toString()
let b = (lines[1].split(" ")).toString()
let c = (lines[2].split(" ")).toString()



if (a === "vertebrado") {
    if (b === "ave") {
        if (c === "carnivoro") {
            console.log("aguia")
        } else if (c === "onivoro") {
            console.log("pomba")
        }
    } else if (b === "mamifero") {
        if (c === "onivoro") {
            console.log("homem")
        } else if (c === "herbivoro") {
            console.log("vaca")
        }
    }
} else if (a === "invertebrado") {
    if (b === "inseto") {
        if (c === "hematofago") {
            console.log("pulga")
        } else if (c === "herbivoro") {
            console.log("lagarta")
        }
    } else if (b === "anelideo") {
        if (c === "hematofago") {
            console.log("sanguessuga")
        } else if (c === "onivoro") {
            console.log("minhoca")
        }
    }
}