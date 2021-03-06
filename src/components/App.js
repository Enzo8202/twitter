import React from 'react';
import Layout from "./layout/Layout";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "../pages/home/Home";
import Page404 from '../pages/404/404'
import TweetByHashTag from "../pages/tweetsByHashtag/TweetByHashTag";
import TweetsByUser from "../pages/tweetsByUser/TweetsByUser";
import AuthPage from "../pages/auth/AuthPage";
import {TweetProvider} from "../context/TweetContext";
import '../i18n'
import {LayoutProvider} from "../context/LayoutContext";

const App = () => {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <PublicRoute path="/login" component={AuthPage}/>
                    <PrivateRoute path={"/"} render={() =>
                        <LayoutProvider>
                            <TweetProvider>
                                <Layout>
                                    <Switch>
                                        <Route exact path={"/"} component={Home}/>
                                        <Route exact path={"/hashtags/:hashtag"} component={TweetByHashTag}/>
                                        <Route exact path={"/users/:id/:name"} component={TweetsByUser}/>
                                        <Route component={Page404}></Route>
                                    </Switch>
                                </Layout>
                            </TweetProvider>
                        </LayoutProvider>
                    }/>
                </Switch>
            </BrowserRouter>
            <ToastContainer rtl/>
        </>
    );
};

const isLogin = () => !!localStorage.getItem("x-auth-token");
// public route(login page)
const PublicRoute = ({component, ...props}) => {
    return <Route {...props} render={(props) => {
        if (isLogin())
            return <Redirect to={"/"}/>
        else {
            return React.createElement(component, props);
        }
    }}/>
};
// private route(except login page)
const PrivateRoute = ({render, ...props}) => {
    return <Route {...props} render={(props) => {
        if (isLogin())
            return render(props);
        else return <Redirect to={"/login"}/>
    }}/>
}

export default App;