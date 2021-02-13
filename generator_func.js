
// generator function
function *g() {
    console.log("g running")

    let x = 5
    while (x < 7) {
        yield x++
    }
    console.log("gxit", x)
    return(x)  // ignore in for, returned when next() is called
}

console.log("one by one")
let it = g()
console.log(it.next())
console.log(it.next())
console.log(it.next())
// 7 IS printed

console.log("for")
for (const i of g()) {
    console.log(i)
}
// 7 is NOT printed

console.log("done")