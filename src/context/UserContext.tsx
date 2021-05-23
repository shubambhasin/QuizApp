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

    return (
        <UserContext.Provider value={{ guestUser, setGuestUser, user, setUser }}>{children}</UserContext.Provider>

    )

};

export const useUser = () => useContext(UserContext)