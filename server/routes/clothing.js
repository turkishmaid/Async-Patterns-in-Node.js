const express = require('express');
const fs = require('fs');
const datafile = 'server/data/clothing.json';
const router = express.Router();

function getClothingData() {

    return new Promise((resolve, reject) => {
        fs.readFile(datafile, (err, data) => {
            if (err) {
                reject(err)
            } else {
                let clothingData = JSON.parse(data.toString("utf-8"));
                resolve(clothingData)
            }
        })
    })

}

/* GET all clothing */
router.route('/')
    .get(function (req, res) {
        // 3. Promise
        getClothingData()
            // 1st
            .then(data => {
                console.log("serving clothing data")
                res.send(data)
            })
            // 3rd
            .catch(err => {
                console.error(err)
                res.status(500).send(err)
            })
            // 2nd
            .finally(() => {
                console.log("finally done")
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
