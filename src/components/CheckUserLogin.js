import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import LoadingSpinner from "./LoadingSpinner";
import axios from "axios";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

const CheckUserLogin = ({ children, ...rest }) => {
    const [authUser, setAuthUser] = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(true);

    const AuthConfig = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    };
    useEffect(() => {
        //EXAMPLE OF HOW TO SEND REQUEST WITH JWT TOKEN
        if (isLoading) {
            axios
                .get("/restaurant/profile", AuthConfig)
                .then((response) => {
                    // set AuthUser for the state to use
                    setAuthUser(response.data._id);
                    setIsLoading(false);
                    console.log(authUser);
                })
                .catch((error) => {
                    console.log(error);
                    setIsLoading(false);
                });
        }
    });

    if (isLoading) {
        return (
            <>
                <LoadingSpinner />
            </>
        );
    } else {
        return (
            <Route
                {...rest}
                render={() => (authUser ? children : <Redirect to="/login" />)}
            />
        );
    }
};

export default CheckUserLogin;
