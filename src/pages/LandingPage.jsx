import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { GuestUserForm } from "../components/GuestUserForm";
import { useModal } from "../context/ModalContext";
import { useUser } from "../context/UserContext";

const LandingPage = () => {
  const { modal, setModal } = useModal();
  const navigate = useNavigate();
  const { guestUser, setGuestUser, setGreet, login, setLogin } = useUser();
  const setGuestModal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    // localStorage.getItem('user', JSON.stringify(person));
    if (JSON.parse(window.localStorage.getItem("userQuizUser"))) {
      setGuestUser(JSON.parse(window.localStorage.getItem("userQuizUser")));
      setGreet("Welcome");
      navigate("/home");
    }
  }, []);
  return (
    <div>
      {modal && <GuestUserForm />}
      <div className="center-block">
        <div className="bg">
          <header className="flex flex-col jcc aic">
            <h1 className="h1">Hey I am Quizzy</h1>
            <small>I will be testing your knowledge</small>
          </header>
          <div className="instructions mtb1-rem t-center  p2-rem">
            <h1 className="h3">Instructions</h1>
            <ul className="no-list-pad">
              <li className="list-items">
                Each questions if answered right gives 10 points.
              </li>
              <li className="list-items">
                5 negative points if answer is wrong
              </li>
              {/* //TODO: <li className="list-items">Each question will have a 25sec of time to answer, after that it will be marked as unanswered.</li> */}
            </ul>
          </div>
          <div className="flex jcc aic">
            <NavLink to="/home">
            {login &&   <button className="btn btn-purple-outline m1-rem">
                Go to Home
              </button>}
            </NavLink>
            {!login && (
              <>
                {/* <button className="btn btn-purple" onClick={setGuestModal}>
                  Guest
                </button> */}
                <NavLink to="/login">
                  <button className="btn btn-purple-outline m1-rem">
                    {" "}
                    Login
                  </button>
                </NavLink>

                <NavLink to="/signup">
                  <button className="btn btn-purple-outline">Signup</button>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
