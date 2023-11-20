let a = (lines.shift().split(" "))
a = a.toString()

let count = 0
for (let i = 0; i < a.length; i++) {
    count++
}

if (count <= 140) {
    console.log("TWEET")
} else {
    console.log("MUTE")
}