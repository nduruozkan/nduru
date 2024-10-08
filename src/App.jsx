import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; // Include useNavigate
import { useState } from 'react';
import LoginPage from './LoginPage'; // Import your LoginPage component
import QuizPage from './QuizPage'; // Import your QuizPage component
import LandingPage from './LandingPage'; // Assuming you have a LandingPage component


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
    const navigate = useNavigate(); // Define navigate

    const handleLogin = () => {
        setIsLoggedIn(true); // Set the user as logged in
    };

    return (
        <Router>
            <Routes>
                {/* Home Page */}
                <Route path="/" element={
                    <div>
                        <h1>Home Page</h1>
                        <p>Welcome to the homepage!</p>
                        <button onClick={() => navigate('/login')}>Go to Login Page</button>
                    </div>
                } />

                {/* Login Page */}
                <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

                {/* Quiz Page - only accessible if logged in */}
                <Route path="/quiz" element={isLoggedIn ? <QuizPage /> : <LandingPage />} />

                {/* Optionally, you can add a landing page for unauthorized access */}
                <Route path="/landing" element={<LandingPage />} />
            </Routes>
        </Router>
    );
};

export default App;
