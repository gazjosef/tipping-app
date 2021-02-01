import React, { useEffect, useState } from 'react';
import "./Tips.css";

export const Tips2 = () => {
    const [fixtures, setFixtures] = useState([]);
    const [round, selectRound] = useState("");

    useEffect(() => {
        fetch("https://tipping-app-api.herokuapp.com/fixtures", {
            method: "get",
            headers: { "Content-Type": "application/json" }
          })
            .then(response => response.json())
            .then(fixtures => {
              // console.log("fixtures: ", fixtures);
              setFixtures(fixtures)
            });
            selectRound("Round 1")
    }, [])

    return (
        <div>
            
        </div>
    )
}
