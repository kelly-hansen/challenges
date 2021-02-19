const fs = require('fs');

function convertJSONToCSV(jsonData) {
  const data = JSON.parse(jsonData);
  const leaguesArr = data.leagues;
  const headers = [];
  for (const key in leaguesArr[0]) {
    if (typeof leaguesArr[0][key] === 'object') {
      for (const subKey in leaguesArr[0][key]) {
        headers.push(subKey);
      }
    } else {
      headers.push(key);
    }
  }
  let csv = headers.join(',') + '\n';
  leaguesArr.forEach(league => {
    let leagueCSVData = '';
    for (let i = 0; i < headers.length; i++) {
      if (league[headers[i]] !== undefined) {
        leagueCSVData += league[headers[i]];
      } else if (league.seasonDateInfo[headers[i]] !== undefined) {
        leagueCSVData += league.seasonDateInfo[headers[i]];
      } else {
        leagueCSVData += 'N/A';
      }
      if (i !== headers.length - 1) {
        leagueCSVData += ',';
      }
    }
    csv += leagueCSVData + '\n';
  });
  fs.writeFile('./leagues-data.csv', csv, err => {
    if (err) throw err;
  });
}

fs.readFile('./Angels_SWE_Question_1.json', (err, data) => {
  if (err) throw err;
  convertJSONToCSV(data);
});
