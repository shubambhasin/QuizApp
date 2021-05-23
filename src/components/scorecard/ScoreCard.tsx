import React from 'react'
import { NavLink } from 'react-router-dom'
import { useQuiz } from '../../context/QuizContext'
import { useUser } from '../../context/UserContext'
import { STOP_QUIZ } from '../../reducers/QuizReducer'

const ScoreCard = () => {

    const { state, dispatch } = useQuiz()
    const { guestUser} = useUser()

    const { username } = guestUser
    const stopQuiz = () => {

        dispatch({ type: STOP_QUIZ })

    }
    return (
        <div>

            <h1 className="h1 mtb1-rem">Hey, {username} You Scored: {state.score}</h1>

            <NavLink to='/home' className="btn btn-green btn-md m1-rem" ><button onClick={stopQuiz} className="btn">Go back to main menu</button></NavLink>

        </div>
    )
}

export default ScoreCard
