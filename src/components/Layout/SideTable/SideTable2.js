import React, { useEffect, useState } from 'react'

export const SideTable2 = (props) => {
    const [ fixtures, setFixtures ] = useState([]);
    const [ allTeamNames, setAllTeamNames ] = useState([]);
    const [ teamNames, setTeamNames ] = useState([]);
    const [ leagueTable, setLeagueTable ] = useState([]);

    useEffect(() => {
        fetch("https://tipping-app-api.herokuapp.com/table", {
            method: "get",
            headers: { "Content-Type": "application/json" }
          })
            .then(response => response.json())
            .then(fixtures => {
                setFixtures(fixtures)
            //   this.setState({
            //     fixtures: fixtures
            //   });
            });
    }, [])
    return (
        <div>
            
        </div>
    )
}
