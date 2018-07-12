const express = require('express');
const sqlite = require('sqlite');
const app = express();
const dbPromise = sqlite.open('./tipping.db', { Promise });

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/teams', async (req, res) => 
{
  try {
    const db = await dbPromise;
    const teams = await db.all('SELECT * FROM teams');
    console.log(teams);
    res.send({teams: teams});
  } catch (err) {
    next(err);
  }
})

app.get('/schedule', async (req, res) => 
{
  try {
    const db = await dbPromise;
    const schedule = await db.all('SELECT * FROM schedule');
    console.log(schedule);
    res.send({result: schedule});
  } catch (err) {
    next(err);
  }
})

app.get('/results', async (req, res, next) => 
{
  try {
    const db = await dbPromise;
    const schedule = await db.all('SELECT * FROM schedule');

    var result = {};
    for(var key in schedule)
    {
      var item = schedule[key];
      console.log(item);

      //home team
      getResult(result, item.HomeTeam, item.HomeResult, item.AwayResult);
      //away team
      getResult(result, item.AwayTeam, item.AwayResult, item.HomeResult);
    }

    var arr = [];
    for(var key in result)
    {
      arr.push({
        TeamName: key,
        Wins: result[key].Wins,
        Losses: result[key].Losses,
        Difference: result[key].Difference,
        Points: result[key].Points
      });
    }
    res.send(arr);
  } catch (err) {
    next(err);
  }
})
function getResult(result, teamName, teamResult, opponentResult)
{
  //won / lost
  //difference points
  
  // var points = 2;
  // if(won == false)
  // {
  //   points = 0;
  // }
  //ternary

  //initialize the teams results if it doesnt exist
  if(result[teamName] === undefined)
  {
    result[teamName] = {
      Wins: 0,
      Losses: 0,
      Points: 0,
      Difference: 0
    };
  }

  var won = teamResult > opponentResult ? true : false;
  var points = won ? 2 : 0;
  var difference = teamResult - opponentResult;

  result[teamName].Wins += won ? 1 : 0;
  result[teamName].Losses += won ? 0 : 1;
  result[teamName].Points += points;
  result[teamName].Difference += difference;
}

app.listen(4000, () => console.log('Example app listening on port 4000!'))