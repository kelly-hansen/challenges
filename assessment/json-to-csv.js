const leaguesData = {
  "leagues": [
    {
      "id": 103,
      "name": "American League",
      "abbreviation": "AL",
      "nameShort": "American",
      "seasonState": "offseason",
      "hasWildCard": true,
      "hasSplitSeason": false,
      "numGames": 162,
      "hasPlayoffPoints": false,
      "numTeams": 15,
      "numWildcardTeams": 2,
      "seasonDateInfo": {
        "seasonId": "2019",
        "regularSeasonStartDate": "2019-03-20",
        "regularSeasonEndDate": "2019-09-29",
        "preSeasonStartDate": "2019-02-21",
        "preSeasonEndDate": "2019-03-26",
        "postSeasonStartDate": "2019-10-02",
        "postSeasonEndDate": "2019-10-30",
        "lastDate1stHalf": "2019-07-07",
        "firstDate2ndHalf": "2019-07-11",
        "allStarDate": "2019-07-09"
      },
      "season": "2019",
      "orgCode": "AL",
      "conferencesInUse": false,
      "divisionsInUse": true,
      "sortOrder": 21
    },
    {
      "id": 104,
      "name": "National League",
      "abbreviation": "NL",
      "nameShort": "National",
      "seasonState": "offseason",
      "hasWildCard": true,
      "hasSplitSeason": false,
      "numGames": 162,
      "hasPlayoffPoints": false,
      "numTeams": 15,
      "numWildcardTeams": 2,
      "seasonDateInfo": {
        "seasonId": "2019",
        "regularSeasonStartDate": "2019-03-28",
        "regularSeasonEndDate": "2019-09-29",
        "preSeasonStartDate": "2019-02-23",
        "preSeasonEndDate": "2019-03-26",
        "postSeasonStartDate": "2019-10-01",
        "postSeasonEndDate": "2019-10-30",
        "lastDate1stHalf": "2019-07-07",
        "firstDate2ndHalf": "2019-07-11",
        "allStarDate": "2019-07-09"
      },
      "season": "2019",
      "orgCode": "NL",
      "conferencesInUse": false,
      "divisionsInUse": true,
      "sortOrder": 31
    },
    {
      "id": 114,
      "name": "Cactus League",
      "abbreviation": "CL",
      "nameShort": "Cactus",
      "seasonState": "preseason",
      "hasWildCard": false,
      "hasSplitSeason": false,
      "hasPlayoffPoints": false,
      "seasonDateInfo": {
        "seasonId": "2019",
        "preSeasonStartDate": "2019-02-21",
        "preSeasonEndDate": "2019-03-26"
      },
      "season": "2019",
      "orgCode": "CL",
      "conferencesInUse": false,
      "divisionsInUse": false,
      "sortOrder": 51
    },
    {
      "id": 115,
      "name": "Grapefruit League",
      "abbreviation": "GL",
      "nameShort": "Grapefruit",
      "seasonState": "preseason",
      "hasWildCard": false,
      "hasSplitSeason": false,
      "hasPlayoffPoints": false,
      "seasonDateInfo": {
        "seasonId": "2019",
        "preSeasonStartDate": "2019-02-23",
        "preSeasonEndDate": "2019-03-26"
      },
      "season": "2019",
      "orgCode": "GL",
      "conferencesInUse": false,
      "divisionsInUse": false,
      "sortOrder": 52
    }
  ]
}

const jsonData = JSON.stringify(leaguesData);

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
  console.log(headers)
  let csv = headers.join(',') + '\n';
  leaguesArr.forEach(league => {
    let leagueCSVData = '';
    for (let i = 0; i < headers.length; i++) {
      leagueCSVData += league[headers[i]] !== undefined ? league[headers[i]] : 'N/A';
      if (i !== headers.length - 1) {
        leagueCSVData += ',';
      }
    }
    csv += leagueCSVData + '\n';
  });
}

convertJSONToCSV(jsonData);
