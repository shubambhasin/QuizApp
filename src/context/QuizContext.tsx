import React, { useContext, useReducer, useState } from "react";
import { initialQuizState, QuizReducer } from "../reducers/QuizReducer";

export const QuizContext = React.createContext<any>(null);


export const QuizProvider = ({ children }: any) => {

    const [ state, dispatch ]: any = useReducer<any>(QuizReducer, initialQuizState)
    return (
        <QuizContext.Provider value={{ state, dispatch }}>{children}</QuizContext.Provider>

    )

};

export const useQuiz = () => useContext(QuizContext)