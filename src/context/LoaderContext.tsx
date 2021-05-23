import React, { useContext, useState } from "react";

const LoaderContext = React.createContext<any>(null);

export const LoaderContextProvider = ({ children }: any) => {
    const [Loader, setLoader] = useState<boolean>(false)
    return (
        <LoaderContext.Provider value={{ Loader, setLoader }}>
            {children}
        </LoaderContext.Provider>
    )

};
export const useLoader = () => useContext(LoaderContext)