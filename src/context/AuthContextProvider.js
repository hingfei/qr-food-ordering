import React, { createContext, useState} from 'react'

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
const [authUser, setAuthUser] = useState(null)

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {props.children}
        </AuthContext.Provider>
    )
}
