import React, { useEffect, useState } from "react";
import { div, NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useQuiz } from "../context/QuizContext";
import founder from "../assests/founder.svg";
import startup from "../assests/startup.svg";
import gadgets from "../assests/gadgets.svg";

const Home = () => {
  const { guestUser, user, greet, setGreet, login, setToken, setLogin } = useUser();

  const { state } = useQuiz();
  const navigate = useNavigate();

  useEffect(() => {
    // if (guestUser) {
    //   setGreet("Welcome back");
    // }

    // if (user.username === "") {
    //   if (guestUser.username === "") {
    //     navigate("/");
    //   }
    // }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setLogin(false)
    setToken(null)
    navigate("/");
  };

  return (
    <div className="home">
      <div className="main">
        <div className="user-info flex  jcc aic center">
          <p className="h4 user-info-div">
            <>
              <span className="h4 bold">
             <span className="lighter"> {greet + ", "}</span>
                {guestUser.username !== "" && (guestUser?.username.toUpperCase() || user?.username.toUpperCase())}
              </span>
              
            </>{" "}
            Score: {guestUser.username !== "" && state.score}
          </p>{" "}
          <span> </span>
          {login && (
            <button className="btn btn-red logout" onClick={logout}>
              {" "}
              Logout{" "}
            </button>
          )}
        </div>
        <h1 className="h2 mtb1-rem">Popular Quizzes</h1>
        <div className="quiz-3">
          <div className="flex f-wrap jcc aic gap-3">
            <NavLink to="/quiz/startup-quiz">
              <div className="quiz2 rounded-div">
                <h1 className="h3 center">Startup - Quiz</h1>
                <img src={startup} alt="startup-img" className="rounded-div" />
              </div>
            </NavLink>
            <NavLink to="/quiz/founders-quiz">
              <div className="quiz1  rounded-div">
                <h1 className="h3 center">Founders Quiz</h1>
                <img src={founder} alt="founder-img" className="rounded-div" />
              </div>
            </NavLink>

            <NavLink to="/quiz/tech-quiz">
              <div className="quiz3 rounded-div">
                <h1 className="h3 center">Gadgets Quiz</h1>
                <img src={gadgets} alt="gadget-img" className="rounded-div" />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
