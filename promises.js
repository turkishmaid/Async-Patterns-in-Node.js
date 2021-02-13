function doAsyncWork(resolve, reject) {
    if (success) {
        resolve(data)
    } else {
        reject(reason)
    }
}

// let myPromise = new Promise(doAsyncWork)

let myPromise = new Promise((resolve, reject) => {
   if (success) {
        resolve(data)
    } else {
        reject(reason)
    }

})