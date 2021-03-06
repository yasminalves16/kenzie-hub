import { Route, Switch, Redirect } from "react-router-dom";

import { useEffect, useState } from "react";

import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";

const Routes = () => {

    const [authenticated, setAuthenticated] = useState();

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

        if (token) {
            return setAuthenticated(true);
        }
    }, [authenticated]);

    
    return (
        <Switch>
            <Route exact path="/">
                <Home authenticated ={authenticated}/>
            </Route>
            <Route exact path="/signup">
                <Signup authenticated ={authenticated}/>
            </Route>
            <Route exact path="/login">
                <Login authenticated ={authenticated} setAuthenticated = {setAuthenticated}/>
            </Route>
            <Route exact path="/dashboard">
                {authenticated ? <Dashboard setAuthenticated = {setAuthenticated}/> : <Redirect to="/"/>}
            </Route>
        </Switch>
    );
};

export default Routes;
