import React from 'react'
import {
    Routes,
    Route
} from 'react-router-dom';
import Quiz from '../pages/Quiz';
import Home from '../pages/Home';
import LandingPage from '../pages/LandingPage';

const MyRoutes = () => {
    return (
        <div>

            <Routes>

                <Route path="/home" element={<Home />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/quiz/:quizName" element={<Quiz/>}/>

            </Routes>

        </div>
    )
}

export default MyRoutes
