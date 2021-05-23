import React from "react";
import { GuestUserForm } from "../components/GuestUserForm";
import { useModal } from "../context/ModalContext";

const LandingPage = () => {
  const { modal, setModal } = useModal();

  const setGuestModal = () => {
    setModal(!modal);
  };
  return (
    <div>
      {modal && <GuestUserForm />}
      <div className="center-block">
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
            <li className="list-items">5 negative points if answer is wrong</li>
            {/* //TODO: <li className="list-items">Each question will have a 25sec of time to answer, after that it will be marked as unanswered.</li> */}
          </ul>
        </div>
          <div className="flex jcc aic">
            <button className="btn btn-red m1-rem" onClick={setGuestModal}>
              Enter as guest
            </button>
            <button className="btn btn-green m1-rem"> Login</button>
          </div>
      </div>
    </div>
  );
};

export default LandingPage;
