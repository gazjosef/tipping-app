import React, { useEffect, useState } from 'react'

export const SideTable2 = () => {
    const [ fixtures, setFixtures ] = useState([]);
    // eslint-disable-next-line
    const [ teamNames, setTeamNames ] = useState(["Broncos", "Knights", "Sharks", "Storm", "Roosters", "Rabbitohs", "Warriors", "Bulldogs", "Tigers", "Sea Eagles", "Cowboys", "Dragons", "Panthers", "Eels", "Titans", "Raiders"]);
    const [ leagueTable, setLeagueTable ] = useState([]);
    
    useEffect(() => {
        async function getFixtures() {
            const response = await fetch("https://tipping-app-api.herokuapp.com/table", {
                method: "get",
                headers: { "Content-Type": "application/json" }
            })
            response.json()
            .then(fixtures => {
                setFixtures(fixtures)
            });
        }
        getFixtures()

        teamNames.forEach(name => {
            let teamScore = {
                name: name,
                wins: 0,
                losses: 0,
                homePointsScored: 0,
                homePointsConceded: 0,
                awayPointsScored: 0,
                awayPointsConceded: 0,
                points: 0
            };

            setLeagueTable((oldArray) => [...oldArray, teamScore])
        });

        // Sort league table by points
        leagueTable.sort((a, b) => {
            return a.points < b.points ? 1 : -1;
        });

        // const leagueRow = leagueTable.map((team, index) => {
        //     return (
        //         <tr key={index}>
        //         <th scope="row">{index + 1}</th>
        //         <td />
        //         <td>{team.name}</td>
        //         <td>{team.wins}</td>
        //         <td>{team.losses}</td>
        //         <td>{team.points}</td>
        //         </tr>
        //     );
        // });

        // setLeagueRow(leagueRow)
        
    }, [])

    console.log(leagueTable);
    console.log(fixtures);

    return (
        <div className="SideTable">
            {/* Side Table */}
            <div className="col-md-3">
                <div className="panel panel-default">
                    {/* Heading */}
                    <div className="panel-heading main-color-bg">
                        <h3 className="panel-title">League Table</h3>
                    </div>

                    {/* League Table */}
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">P</th>
                                <th scope="col" />
                                <th scope="col">Team</th>
                                <th scope="col">W</th>
                                <th scope="col">L</th>
                                <th scope="col">Pts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                leagueTable.map((team, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td />
                                            <td>{team.name}</td>
                                            <td>{team.wins}</td>
                                            <td>{team.losses}</td>
                                            <td>{team.points}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
