const fixtures = [
  {
    fixtureid: 1,
    round: "Round 1",
    day: "Thursday",
    date: "20190314",
    home: "Storm",
    away: "Broncos",
    stadium: "AAMI Park",
    time: "1950",
    resulthome: "22",
    resultaway: "12"
  },
  {
    fixtureid: 2,
    round: "Round 1",
    day: "Friday",
    date: "20190315",
    home: "Knights",
    away: "Sharks",
    stadium: "McDonald Jones Stadium",
    time: "1800",
    resulthome: "14",
    resultaway: "8"
  },
  {
    fixtureid: 3,
    round: "Round 1",
    day: "Friday",
    date: "20190315",
    home: "Roosters",
    away: "Rabbitohs",
    stadium: "Sydney Cricket Ground",
    time: "1955",
    resulthome: "16",
    resultaway: "26"
  },
  {
    fixtureid: 4,
    round: "Round 1",
    day: "Saturday",
    date: "20190316",
    home: "Warriors",
    away: "Bulldogs",
    stadium: "Mt Smart Stadium",
    time: "1500",
    resulthome: "40",
    resultaway: "6"
  },
  {
    fixtureid: 5,
    round: "Round 1",
    day: "Saturday",
    date: "20190316",
    home: "Tigers",
    away: "Sea Eagles",
    stadium: "Leichhardt Oval",
    time: "1730",
    resulthome: "20",
    resultaway: "6"
  },
  {
    fixtureid: 6,
    round: "Round 1",
    day: "Saturday",
    date: "20190316",
    home: "Cowboys",
    away: "Dragons",
    stadium: "1300Smiles Stadium",
    time: "1935",
    resulthome: "24",
    resultaway: "12"
  },
  {
    fixtureid: 7,
    round: "Round 1",
    day: "Sunday",
    date: "20190317",
    home: "Panthers",
    away: "Eels",
    stadium: "Panthers Stadium",
    time: "1605",
    resulthome: "12",
    resultaway: "20"
  },
  {
    fixtureid: 8,
    round: "Round 1",
    day: "Sunday",
    date: "20190317",
    home: "Titans",
    away: "Raiders",
    stadium: "CBus Super Stadium",
    time: "1810",
    resulthome: "0",
    resultaway: "21"
  }
];

let tablehtml = "<table>";
// // Create Header Row
tablehtml += "<tr><th>Round</th><th>Home</th><th>Away</th><th>Date</th></tr>";

for (let i = 0; i < fixtures.length; i++) {
  tablehtml +=
    "<tr><td>" +
    fixtures[i].round +
    "</td><td>" +
    fixtures[i].home +
    "</td><td>" +
    fixtures[i].away +
    "</td><td>" +
    fixtures[i].date +
    "</td></tr>";
}
tablehtml += "</table>";

document.getElementById("tipping-table").innerHTML = tablehtml;