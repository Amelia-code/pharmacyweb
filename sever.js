const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const moment = require('moment');
const FILE_NAME = "data/data";
const csvPath = path.join(__dirname, '.', FILE_NAME + '.csv'); // 두번째 인
console.log(csvPath);
const csv = fs.readFileSync(csvPath, "utf-8");
moment.locale();
//서버 응답여부
app.listen(5500, function() {
    console.log('hello')

});

app.get('/', function(_요청, 응답) {
    응답.sendFile(__dirname + '/index.html')
});


// 끝

const rows = csv.split("\r\n")
if (rows[rows.length - 1] === '') {
    console.log("'' has been found");
    rows.pop();
}

console.log(rows)

let results = []
let columnTitle = []

for (const i in rows) {
    const row = rows[i]
    const data = row.split(",")
    if (i === "0") {
        columnTitle = data
    } else {
        let row_data = {}
        for (const index in columnTitle) {
            const title = columnTitle[index]
            row_data[title] = data[index]

        }

        results.push(row_data)


    }


}

var result = results.filter(results => results.dutyTime1c, results.dutyTime1s = moment().format('LT'));
var markerPosition = new kakao.maps.LatLng(results.Lat, results.Lon);
console.log(result)

function addMarker(_onClick, _soliddata) {

    // 마커를 생성합니다
    kakao.maps.event.addListener(marker, 'custom_action', function(_markerPosition) {
        console.log(result + '가 발생했습니다.');
    });

    // 마커 객체에 등록한 사용자 이벤트를 발생시킨다
    kakao.maps.event.trigger(result, 'custom_action', '사용자 이벤트');
};
console.log(addMarker)