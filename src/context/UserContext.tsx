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

    const [guestUser, setGuestUser] = useState<GuestUser>({
        username: "",
        score: 0
    })
    const [user, setUser] = useState<User>({

        username: "",
        score: 0,
        password: ""

    })

    const [greet, setGreet] = useState("Welcome");

    return (
        <UserContext.Provider value={{ guestUser, setGuestUser, user, setUser, greet, setGreet }}>{children}</UserContext.Provider>

    )

};

export const useUser = () => useContext(UserContext)