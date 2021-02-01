import React, { useState } from 'react'

// LAYOUT
import { NavBar } from './components/Layout/NavBar/NavBar';
import { Header } from './components/Layout/Header/Header';
import { Footer } from './components/Layout/Footer/Footer';

// PAGES
import { Signin } from './components/Pages/Signin/Signin';
import { Register } from './components/Pages/Register/Register';
import { Home } from './components/Pages/Home/Home';

export const App2 = () => {
    const [ route, setRoute ] = useState("Signin");
    const [ signedIn, setSignedIn ] = useState(false);
    const [ user, setUser ] = useState({
        user: {
            id: '',
            name: '',
            email: '',
            entries: 0,
            joined: '',
        }
    });

    const loadUser = (data) => {
        setUser({
            user: {
                id: data.id,
                name: data.name,
                email: data.email,
                entries: data.entries,
                joined: data.joined,
            }
        })
    };

  const onRouteChange = (route) => {
    if (route === 'Signout') {
        setSignedIn(false)
    //   this.setState({ isSignedIn: false });
    } else if (route === 'Dashboard') {
        setSignedIn(true)
    //   this.setState({ isSignedIn: true });
    }
    setRoute(route)
    // this.setState({ route: route });
  };

    return (
        <div className="App">
            <NavBar
                isSignedIn={signedIn}
                name={user.name}
                onRouteChange={onRouteChange}
            />

            <Header />

            {route === 'Dashboard' ? (
            <Home />
            ) : route === 'Signin' ? (
            <Signin
                loadUser={loadUser}
                onRouteChange={onRouteChange}
            />
            ) : (
            <Register
                loadUser={loadUser}
                onRouteChange={onRouteChange}
            />
            )}
            
            <Footer />
        </div>
    )
}
