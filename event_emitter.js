const EE = require("events")

let myEE = new EE()

myEE.on("evt", (hurz) => {
    console.log("evt happened.", hurz)
})

myEE.on("evt", () => {
    console.log("evt happened and listened twice.")
})

myEE.emit("evt", "Hurz.")
