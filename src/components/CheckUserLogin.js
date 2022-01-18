import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import LoadingSpinner from "./LoadingSpinner";
import axios from 'axios';

const CheckUserLogin = () => {
    const history = useHistory();

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
                history.push("/login");
            });
        }
    });

    if (isLoading) {
        return (
            <>
                <LoadingSpinner />
            </>
        )
    } else {
        return <></>
    }
};

export default CheckUserLogin;
