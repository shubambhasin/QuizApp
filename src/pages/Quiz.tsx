import React, { useEffect, useState } from 'react'
import { useQuiz } from '../context/QuizContext'
import axios from 'axios'
import { INITIALIZE_QUIZ_DATA, NEXT_QUESTION, RESET_SCORE, SET_OPTIONS, STOP_QUIZ } from '../reducers/QuizReducer'
import { useNavigate, useParams } from 'react-router'
import ScoreCard from '../components/scorecard/ScoreCard'
import QuestionCard from '../components/questionCard/QuestionCard'
import { useLoader } from '../context/LoaderContext'
import Loader from '../components/loader/Loader'
import { useUser } from '../context/UserContext'
const Quiz = () => {

    const { guestUser, user } = useUser()
    const { state, dispatch }: any = useQuiz()
    const [loader, setLoader] = useState<any>(false)
    const quizName = useParams()
    const navigate = useNavigate()

    console.log(quizName.quizName)

    useEffect(() => {

        dispatch({ type: RESET_SCORE })

        if (user.username === "") {
            if (guestUser.username === "") {
                navigate("/")
            }
        }

        (async (req, res) => {
            setLoader(true)
            console.log(loader)
            const response = await axios.get(`https://quizappbackend.shubambhasin.repl.co/quiz/${quizName.quizName}`)
            console.log(response.data.quiz)
            setLoader(false)
            dispatch({ type: INITIALIZE_QUIZ_DATA, payload: response.data.quiz }
            )
            console.log(state.quiz)
        })()




    }, [])

    const passQuestion = () => {
        if (state.questionNumber < state.quiz.length - 1) {
            console.log(state.quiz[state.questionNumber])
            dispatch({ type: NEXT_QUESTION })
            dispatch({ type: SET_OPTIONS })
        }
        else {
            dispatch({ type: STOP_QUIZ })
        }
    }
    return (
        <div className="quiz-page">
            {loader && <Loader />}
            {!loader && <>
                <h1 className="h1 center">Quiz Name: {state.quizName}</h1>
                <p className="center">Level: {state.level}</p>
                {state.startQuiz && <QuestionCard />}
                <div className="flex jcc aic">

                    {!state.startQuiz && <ScoreCard /> }

                    {state.questionNumber < state.quiz.length  && state.startQuiz && <button className="btn btn-pass mtb1-rem" onClick={passQuestion}>Pass</button>}
                </div>
                    {!state.startQuiz && <small className="smaller">Note: Refresh to play again</small> }
            </>}

        </div>
    )
}

export default Quiz
