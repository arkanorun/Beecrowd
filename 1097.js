let c = 0
for (let i = 1; i < 2; i++) {
    for (let j = 7; j <= 15; j--) {

        if (c % 3 === 0 && c !== 0) {
            i += 2
            j = i + 6
        }
        if (i > 9) {
            break;
        }
        c++
        console.log(`I=${i} J=${j}`)

    }
}