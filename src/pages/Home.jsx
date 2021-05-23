import React, { useEffect } from "react";
import { div, NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import axios from "axios";
import { useQuiz } from "../context/QuizContext";

const Home = () => {
  const { guestUser, user } = useUser();
  const { state } = useQuiz();
  const navigate = useNavigate();

  return (
    <div className="home">

      <div className="main">
        <div className="user-info">
          UserInfo: {guestUser.username !== "" && guestUser.username} score:{" "}
          {guestUser.username !== "" && state.score}
        </div>
        <h1 className="h2 mtb1-rem">Popular Quizzes</h1>
        <div className="quiz-3">
          <div className="flex f-wrap jcc aic gap-3">
            <NavLink to="/quiz/founders-quiz">
              <div className="quiz1">
                <h1 className="h3">Founders Quiz</h1>
              </div>
            </NavLink>
            <div path="/quiz/quiz2" className="quiz2">
              <NavLink to="/quiz/startup-quiz">
                <div className="quiz2">
                  <h1 className="h3">Startup - Quiz</h1>
                </div>
              </NavLink>
            </div>
            <div path="/quiz/quiz3" className="quiz3">
            <NavLink to="/quiz/gadgets-quiz">
                <div className="quiz3">
                  <h1 className="h3">Gadgets Quiz</h1>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
