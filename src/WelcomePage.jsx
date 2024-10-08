import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Replace with actual username and password validation
        if (username === "yourUsername" && password === "yourPassword") {
            navigate("/quiz"); // Navigate to the quiz page on successful login
        } else {
            alert("Invalid credentials. Please try again.");
        }
    };

    return (
        <div>
            <h1>Welcome to HackerCon</h1>
            <p>Please enter your credentials to access the quiz.</p>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default WelcomePage;
