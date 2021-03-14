const express = require('express');
const app = express();


async function pennATenth(rqNo, p) {
    console.log(`   #${rqNo}, pt. ${p}`);
    let x = 1.0;
    for (let i = 0; i < 5_000; i++) {
        for (let j = 0; j < 1_430; j++) {
            x = Math.sin(x);
        }
    }
    //console.log("   ... 10th");
}

async function penn(secs, rqNo) {
    console.log(`penning on rq #${rqNo}...`);
    console.time('"calculation"');
    let tenths = secs * 10;
    for (let p = 0; p < tenths; p++) {
        setTimeout(() => pennATenth(rqNo, p), 1000);
    }
    console.log(`done penning on rq #${rqNo}`);
    let t = console.timeEnd('"calculation"');
    return `rs #${rqNo}`;
}

var cnt = 0;

function now() {
    return new Date().toISOString();
}

app.get('/', (req, res) => {
    (async () => {
        let rqNo = ++cnt;
        console.log(`received request #${rqNo} at ${now()}`);
        let v = await penn(3, rqNo);
        console.log(`serving response #${rqNo} at ${now()}`);
        res.contentType('text/text').send(`#${rqNo} -> ${v}\n`);
    })();
});


app.set('port', process.env.PORT || 3001);
app.listen(app.get('port'));
console.log('Listening on port: ' + app.get('port'));
