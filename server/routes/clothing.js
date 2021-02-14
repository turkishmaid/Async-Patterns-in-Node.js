const express = require('express');
const fs = require('fs');
const fsp = require("fs").promises
const datafile = 'server/data/clothing.json';
const router = express.Router();

let hurz = "nix"

// asymc wraps in Promise
async function getClothingData() {
    // 4. await
    let rawData = await fsp.readFile(datafile)  // await unpacks Promise
    return JSON.parse(rawData.toString("utf-8"))

    // 3. Promis
    // return new Promise((resolve, reject) => {
    //     fs.readFile(datafile, (err, data) => {
    //         if (err) {
    //             reject(err)
    //         } else {
    //             let clothingData = JSON.parse(data.toString("utf-8"));
    //             resolve(clothingData)
    //         }
    //     })
    // })
}

/* GET all clothing */
router.route('/')
    .get(function (req, res) {
        // 3. Promise
        getClothingData()
            // 1st
            .then(data => {
                hurz = "then"
                console.log("serving clothing data")
                res.send(data)
            })
            // 3rd -> nein, 2nd -- nur die Ausgabe erfolgt verspätet
            .catch(err => {
                hurz = "catch"
                console.error(err)
                //res.status(500).send(err)  <-- don't do that. Not even in trainings.
                res.status(500).send("Sorry.")
            })
            // 2nd
            .finally(() => {
                console.log(`finally done. ${hurz}`)  // druckt im Fehlerfall "catch"
            })

        // 2. callback
        // let clothngData = getClothingData((err, data) => {
        //     if (err) {
        //         console.error(err)
        //     } else {
        //         console.log("serving clothing data")
        //         res.send(data)
        //
        //     }
        // });

        // 1. syncronous
        // let rawData = fs.readFileSync(datafile, 'utf8');
        // let clothingData = JSON.parse(rawData);
        // console.log("returning clothing data")
        // res.send(clothingData);

        console.log("doing more work")
    });

module.exports = router;
