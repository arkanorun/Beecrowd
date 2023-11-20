let n = Number(lines.shift())
let a = lines.shift().split(" ")
let padrao1 = 0
let padrao2 = 0

for (let i = 0; i < n - 1; i++) {

    if (i % 2 === 0) {
        if (Number(a[i + 1]) > Number(a[i])) {
            padrao1++
        } else if (Number(a[i + 1]) < Number(a[i])) {
            padrao2++
        }
    }

    if (i % 2 !== 0) {
        if (Number(a[i]) < Number(a[i + 1])) {
            padrao2++
        } else if (Number(a[i]) > Number(a[i + 1])) {
            padrao1++
        }
    }
}

if (padrao1 === n - 1 || padrao2 === n - 1) {
    console.log(1)
} else {
    console.log(0)
}