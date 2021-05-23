import React, { useEffect } from 'react'
import { useQuiz } from '../context/QuizContext'
import axios from 'axios'
import { INITIALIZE_QUIZ_DATA } from '../reducers/QuizReducer'
import { useParams } from 'react-router'
import ScoreCard from '../components/scorecard/ScoreCard'
import QuestionCard from '../components/questionCard/QuestionCard'
const Quiz = () => {

    const { state, dispatch }: any = useQuiz()
    const query = useParams()

    useEffect(() => {


        (async (req, res) => {

            const response = await axios.get(`https://quizappbackend.shubambhasin.repl.co/quiz/${query.quizName}`)

            console.log(response)

            dispatch({ type: INITIALIZE_QUIZ_DATA, payload: response.data.quiz }
            )

            console.log(state.quiz)

        })()

    }, [])

    return (
        <div className="quiz-page">

            <h1 className="h1 center">Quiz Name: {state.quizName}</h1>
            <p className="center">Level: {state.level}</p>
            {/* <p>{state.quiz.length}</p> */}

            {!state.startQuiz && <ScoreCard />}
            {state.startQuiz && <QuestionCard />}






        </div>
    )
}

export default Quiz
