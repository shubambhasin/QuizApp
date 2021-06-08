import React, { useContext, useState } from "react";

const LoaderContext = React.createContext<any>(null);

export const LoaderContextProvider = ({ children }: any) => {
    const [loader, setLoader] = useState<boolean>(false)
    return (
        <LoaderContext.Provider value={{ loader, setLoader }}>
            {children}
        </LoaderContext.Provider>
    )

};
export const useLoader = () => useContext(LoaderContext)