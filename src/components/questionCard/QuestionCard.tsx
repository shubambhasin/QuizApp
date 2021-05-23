import React from 'react'
import { useQuiz } from '../../context/QuizContext'
import { INCREMENT_SCORE, NEXT_QUESTION, SET_OPTIONS, STOP_QUIZ } from '../../reducers/QuizReducer'

const QuestionCard = () => {

    const { state, dispatch } = useQuiz()

    const { questionNumber } = state


    const nextQuestion = (option: any) => {


        if (questionNumber < state.quiz.length - 1) {
            console.log(state.quiz[state.questionNumber])
            if (option.isRight === true) {

                dispatch({ type: INCREMENT_SCORE, payload: 10 })

                dispatch({ type: NEXT_QUESTION })
                dispatch({ type: SET_OPTIONS })
            }
            else {
                dispatch({ type: INCREMENT_SCORE, payload: -5 })
                dispatch({ type: NEXT_QUESTION })
                dispatch({ type: SET_OPTIONS })
            }
        }
        else {
            dispatch({ type: STOP_QUIZ })
        }


    }

    return (
        <div className="question-card">

            <p className="bold"></p>
            {/* <p>{state.quiz.length}</p> */}
            <p>Q{state.questionNumber + 1}. {state.quiz[questionNumber]?.question}</p>
            <ol className="options no-list-pad">

                {state.options.map((option: any, index: any) => {

                    return (
                        <li
                            className={`option-answer no-style  mtb1-rem`}
                            onClick={() => nextQuestion(option)}
                            key={index}
                        >{ index + 1}. {option.value}</li>
                    )

                })}

                {/* {state.quiz[questionNumber].options.map((option: any, index: number) => {
                    return(
                       <div> {option.map((data: any) => {

                        return(
                            <li>{data.value}</li>
                        )
                            
                    })}</div>
                    )
                })} */}
                {/* {
                    state.quiz[questionNumber].options((option: any, index: number) => {

                        return(
                            <p key={index}> {index}</p>
                        )

                    })
                } */}

            </ol>



        </div>
    )
}

export default QuestionCard
