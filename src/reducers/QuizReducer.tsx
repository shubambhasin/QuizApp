export const initialQuizState = {
    quizName: "",
    score: 0,
    level: "",
    playerName: "",
    quiz: [],
    options: [],
    questionNumber: 0,
    clickedRight: "",
    clickedWrong: "",
    incrementScore: 0,
    decrementScore: 0,
    startQuiz: true
}

export const INITIALIZE_QUIZ_NAME = "INITIALIZE_QUIZ_NAME"
export const INCREMENT_SCORE = "INCREMENT_SCORE"
export const INITIALIZE_PLAYER_NAME = "INITIALIZE_PLAYER_NAME"
export const INITIALIZE_QUIZ_DATA = "INITIALIZE_QUIZ_DATA"
export const SET_QUESTION_NUMBER = "SET_QUESTION_NUMBER"
export const CLICKED_RIGHT = "CLICKED_RIGHT"
export const CLICKED_WRONG = "CLICKED_WRONG"
export const DECREMENT_SCORE = "DECREMENT_SCORE"
export const SET_LEVEL = "SET_LEVEL"
export const STOP_QUIZ = "STOP_QUIZ"
export const SET_OPTIONS = "SET_OPTIONS"
export const NEXT_QUESTION = "NEXT_QUESTION"
export const RESET_SCORE = "RESET_SCORE"


export type ACTIONTYPE =
    | { type: "INITIALIZE_QUIZ_NAME"; payload: string }
    | { type: "INITIALIZE_PLAYER_NAME"; payload: string }
    | { type: "INITIALIZE_QUIZ_DATA"; payload: any }
    | { type: "SET_QUESTION_NUMBER"; payload: number }
    | { type: "CLICKED_RIGHT"; payload: string }
    | { type: "CLICKED_WRONG"; payload: string }
    | { type: "INCREMENT_SCORE"; payload: number }
    | { type: "DECREMENT_SCORE"; payload: number }
    | { type: "SET_LEVEL"; payload: string }
    | { type: "STOP_QUIZ"; payload: boolean }
    | { type: "SET_OPTIONS"; payload: any }
    | { type: "NEXT_QUESTION"; payload: any }
    | { type: "RESET_SCORE"; payload: any}

export const QuizReducer = (state: any, action: ACTIONTYPE) => {
    switch (action.type) {
        case INITIALIZE_QUIZ_DATA:
            return {
                ...state,
                quizName: action.payload.quizName,
                level: action.payload.level,
                quiz: action.payload.questions,
                options: action.payload.questions[state.questionNumber].options
            }
        case SET_OPTIONS:
            return {
                ...state,
                options: state.quiz[state.questionNumber].options.map((option: any) => {

                    return option;

                })
            }
        case NEXT_QUESTION:
            return {
                ...state,
                questionNumber: state.questionNumber + 1

            }
        case STOP_QUIZ:
            return {
                ...state,
                startQuiz: false
                // questionNumber: 0
            }
        case INCREMENT_SCORE:
            return {
                ...state,
                score: state.score + action.payload
            }
        case RESET_SCORE: 
        return {
            ...state,
            score: 0
        }




        default:

            { return state }
    }
}