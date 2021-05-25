import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { GuestUserForm } from "../components/GuestUserForm";
import { useModal } from "../context/ModalContext";
import { useUser } from "../context/UserContext";

const LandingPage = () => {
  const { modal, setModal } = useModal();
  const navigate = useNavigate();
  const { guestUser, setGuestUser, setGreet } = useUser()
  const setGuestModal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    // localStorage.getItem('user', JSON.stringify(person));
    if (JSON.parse(window.localStorage.getItem("userQuizUser"))) {
      setGuestUser(JSON.parse(window.localStorage.getItem("userQuizUser")))
      setGreet("Welcome")
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
                Each questions if asnwered right gives 10 points
              </li>
              <li className="list-items">
                5 negative points if answer is wrong
              </li>
              {/* //TODO: <li className="list-items">Each question will have a 25sec of time to answer, after that it will be marked as unanswered.</li> */}
            </ul>
          </div>
          <div className="flex jcc aic">
            <button className="btn btn-purple" onClick={setGuestModal}>
              Guest
            </button>
            <button className="btn btn-purple-outline m1-rem"> Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
