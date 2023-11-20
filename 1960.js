let N = lines[0].split(" ").toString()
let U
let D
let C
let numero = ""

if (N <= 9) {
    U = Number(N[0])
} else if (N > 9 && N <= 99) {
    U = Number(N[1])
    D = Number(N[0])
} else {
    U = Number(N[2])
    D = Number(N[1])
    C = Number(N[0])
}



if (C === 1) {
    numero += "C"
} else if (C === 2) {
    numero += "CC"
} else if (C === 3) {
    numero += "CCC"
} else if (C === 4) {
    numero += "CD"
} else if (C === 5) {
    numero += "D"
} else if (C === 6) {
    numero += "DC"
} else if (C === 7) {
    numero += "DCC"
} else if (C === 8) {
    numero += "DCCC"
} else if (C === 9) {
    numero += "CM"
}

if (D === 1) {
    numero += "X"
} else if (D === 2) {
    numero += "XX"
} else if (D === 3) {
    numero += "XXX"
} else if (D === 4) {
    numero += "XL"
} else if (D === 5) {
    numero += "L"
} else if (D === 6) {
    numero += "LX"
} else if (D === 7) {
    numero += "LXX"
} else if (D === 8) {
    numero += "LXXX"
} else if (D === 9) {
    numero += "XC"
}

if (U === 1) {
    numero += "I"
} else if (U === 2) {
    numero += "II"
} else if (U === 3) {
    numero += "III"
} else if (U === 4) {
    numero += "IV"
} else if (U === 5) {
    numero += "V"
} else if (U === 6) {
    numero += "VI"
} else if (U === 7) {
    numero += "VII"
} else if (U === 8) {
    numero += "VIII"
} else if (U === 9) {
    numero += "IX"
}

console.log(numero)