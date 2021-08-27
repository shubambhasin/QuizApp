import React, { useContext, useState } from "react";

const UserContext = React.createContext<any>(null);
type GuestUser = {
    username: string,
    score: number
}
type User = {
    username: string,
    score: number,
    password: any
}
export const UserContextProvider = ({ children }: any) => {

    const userinfo = JSON.parse(localStorage?.getItem("user")!) || {
        isUserLoggedIn: false,
        username: null,
        authToken: null
    }
    console.log(userinfo)

    const { isUserLoggedIn, username, authToken } = userinfo
    const [guestUser, setGuestUser] = useState<GuestUser>({
        username: "",
        score: 0
    })
    const [user, setUser] = useState<User>({
        username: username,
        score: 0,
        password: ""
    })
    const [login, setLogin] = useState(isUserLoggedIn)
    const [token, setToken] = useState(authToken)
    const [greet, setGreet] = useState("Welcome");

    console.log(login, token)

    return (
        <UserContext.Provider value={{ guestUser, setGuestUser, user, setUser, greet, setGreet, login, setLogin, token, setToken }}>{children}</UserContext.Provider>
    )
};
export const useUser = () => useContext(UserContext)