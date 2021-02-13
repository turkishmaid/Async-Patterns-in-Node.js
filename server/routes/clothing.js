const express = require('express');
const fs = require('fs');
const datafile = 'server/data/clothing.json';
const router = express.Router();

function getClothingData(cb) {
    fs.readFile(datafile, (err, data) => {
        if (err) {
            cb(err, null )
        } else {
            let clothingData = JSON.parse(data.toString("utf-8"));
            cb(null, clothingData)
        }
    })
}

/* GET all clothing */
router.route('/')
    .get(function (req, res) {

        // let rawData = fs.readFileSync(datafile, 'utf8');
        // let clothingData = JSON.parse(rawData);
        // console.log("returning clothing data")
        // res.send(clothingData);
        let clothngData = getClothingData((err, data) => {
            if (err) {
                console.error(err)
            } else {
                console.log("serving clothing data")
                res.send(data)

            }
        });
        console.log("doing more work")
    });

module.exports = router;
