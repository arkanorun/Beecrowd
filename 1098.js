let c = 0
for (let i = 0; i < 1; i = i) {
    for (let j = 1; j < 99; j++) {

        if (c % 3 === 0 && c !== 0) {
            i = parseFloat((i + 0.2).toFixed(1))
            j = parseFloat((1 + i).toFixed(1))
        }
        if (i > 2) {
            break;
        }
        c++
        console.log(`I=${i} J=${j}`)
    }
}