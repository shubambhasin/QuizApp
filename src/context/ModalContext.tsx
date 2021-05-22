import React, { useContext, useState } from "react";

const ModalContext = React.createContext<any>(null);



export const ModalContextProvider = ({ children }: any) => {

    const [modal, setModal] = useState<boolean>(false)



    return (
        <ModalContext.Provider value={{ modal, setModal }}>
            {children}
        </ModalContext.Provider>

    )

};

export const useModal = () => useContext(ModalContext)