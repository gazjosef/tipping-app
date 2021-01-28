import React, { useEffect, useState } from 'react'

export const Comp = () => {
    // const [ tips, setTips ] = useState();
    const [ users, setUsers ] = useState(["Dan","Kain","Rony","Sam","Tom","Gareth"]);
    const [ userTable, setUserTable ] = useState([]);

    useEffect(() => {
        // // Get Tips
        // fetch("http://localhost:5000/comp", {
        // method: "get",
        // headers: { "Content-Type": "application/json" }
        // })
        // .then(response => response.json())
        // .then(tips => {
        //     console.log("tips: ", tips);
        //     this.setState({
        //     tips: tips
        //     });
        // });
        // // Get Fixtures
        // fetch("https://tipping-app-api.herokuapp.com/fixtures", {
        // method: "get",
        // headers: { "Content-Type": "application/json" }
        // })
        // .then(response => response.json())
        // .then(fixtures => {
        //     console.log("fixtures: ", fixtures);
        //     this.setState({
        //     fixtures: fixtures
        //     });
        // });
        // // Get Users
        // fetch("http://localhost:5000/users", {
        // method: "get",
        // headers: { "Content-Type": "application/json" }
        // })
        // .then(response => response.json())
        // .then(users => {
        //     console.log("users: ", users);
        //     this.setState({
        //     users: users
        //     });
        // });

        users.forEach(user => {
            let userScore = {
                name: user,
                correctTips: 0,
                favTeam: "",
                paid: false
            }

            setUserTable((oldArray) => [...oldArray, userScore])
        })
    }, [])
    
    return (
        <section className="section-comp">
            {/* Comp Results */}
            <div className="col-md-9">
                <div className="panel panel-default">
                    {/* Heading */}
                    <div className="panel-heading main-color-bg">
                        <h3 className="panel-title">Competition Table</h3>
                    </div>
                    {/* Comp Table */}
                    <div className="panel panel-default">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">P</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Last Week</th>
                                <th scope="col">Total</th>
                                <th scope="col">Paid</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                userTable.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.wins}</td>
                                            <td>{user.losses}</td>
                                            <td>{user.points}</td>
                                        </tr>
                                        );
                                })
                            }
                            </tbody>
                        </table>
                        </div>
                </div>
            </div>
           
        </section>
    )
}
