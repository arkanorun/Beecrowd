for (let i = 1; i < 2; i++) {
    for (let j = 7; j >= 4; j--) {
        if (j < 5) {
            j = 7
            i += 2
        }
        if (i > 9) {
            break;
        }
        console.log(`I=${i} J=${j}`)
    }
}