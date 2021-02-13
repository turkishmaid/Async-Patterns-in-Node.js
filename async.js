const fs = require('fs')
const fsp = require("fs").promises
const datafile = 'server/data/clothing.json'

function returnsAPromise() {
    return new Promise((resolve, reject) => {
        fs.readFile(datafile, (err, data) => {
            if (err) {
                reject(err)
            } else {
                //resolve(data.toString("utf-8"))
                let resu = data.toString("utf-8")
                console.log(`returnsAPromise(): resolves as ${resu.constructor.name} of length ${resu.length}`)
                resolve(resu)
            }
        })
    })
}

function getData() {
    console.log("in getData()")
    return returnsAPromise()
        .then(rawData => {
            data = JSON.parse(rawData.toString("utf-8"))
            console.log(`out getData(): a ${data.constructor.name} of length ${data.length}`)
            return data
        })
}

getData()
    .then(a => console.log("getData ->", a))
    .catch(err => console.error(err))




// asymc wraps in Promise
async function getDataAsync() {
    console.log("in getDataAsync()")
    // await unpacks Promise
    let rawData = await returnsAPromise();
    let data = JSON.parse(rawData.toString())
    console.log(`out getDataAsync(): a ${data.constructor.name} of length ${data.length}`)
    return data
}

getDataAsync()
    .then(a => console.log("getDataAsync ->", a))
    .catch(err => console.error(err))





// asymc wraps in Promise
async function getDataDirect() {
    console.log("in getDataDirect()")
    // await unpacks Promise
    let rawData = await fsp.readFile(datafile)
    let data = JSON.parse(rawData.toString())
    console.log(`out getDataDirect(): a ${data.constructor.name} of length ${data.length}`)
    return data
}

// asymc wraps in Promise
async function getDataDirect1() {
    console.log("in getDataDirect()")
    // await unpacks Promise
    let rawData = await fsp.readFile(datafile)
    return JSON.parse(rawData.toString("utf-8"))
}

// asymc wraps in Promise
async function getDataDirect2() {
    console.log("in getDataDirect()")
    // await unpacks Promise
    return JSON.parse((await fsp.readFile(datafile)).toString("utf-8"))
}

getDataDirect2()
    .then(a => console.log("getDataDirect ->", a))
    .catch(err => console.error(err))

