let a
let b = ""
let c
let d

while (1) {

    a = lines.shift()

    if (lines.length > 2) {

        if (a > 99999999999) {
            c = a.slice(-10)
            d = a.slice(0, -10)

            if ((c > 0)) {
                c = ("1" + (c).toString() - 1).toString()
                c = c.slice(1)
                d = d.toString()
                b += `${d + c}\n`
            } else {
                c = (parseInt("1" + c) - 1).toString()
                if (d > 1) {
                    d = (parseInt(d - 1)).toString()
                    b += `${d + c}\n`
                } else {
                    b += `${c}\n`
                }
            }
        } else {

            if (a > 0) {
                b += `${a - 1}\n`
            } else if (a == 0) {
                b += '0\n'
            }
        }

    } else {

        if (a > 99999999999) {
            c = a.slice(-10)
            d = a.slice(0, -10)

            if ((c > 0)) {
                c = ("1" + (c).toString() - 1).toString()
                c = c.slice(1)
                d = d.toString()
                b += `${d + c}`
            } else {
                c = (parseInt("1" + c) - 1).toString()
                if (d > 1) {
                    d = (parseInt(d - 1)).toString()
                    b += `${d + c}`
                } else {
                    b += `${c}`
                }
            }
        } else {

            if (a > 0) {
                b += `${a - 1}`
            } else if (a == 0) {
                b += '0'
            } else if (a == -1) {
                break;
            }
        }
    }
}
console.log(b)