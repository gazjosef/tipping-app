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
    res.send({schedule: schedule});
  } catch (err) {
    next(err);
  }
})

app.listen(4000, () => console.log('Example app listening on port 4000!'))