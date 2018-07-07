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

app.listen(3001, () => console.log('Example app listening on port 3001!'))