import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState(""); // For username input
    const [password, setPassword] = useState(""); // For password input
    const [errorMessage, setErrorMessage] = useState(""); // To display error messages

    // Hardcoded valid credentials
    const validCredentials = {
        username: "admin", // <-- This is the valid username
        password: "password123" // <-- This is the valid password
    };

    const handleLogin = () => {
        // Basic username and password validation
        if (username === validCredentials.username && password === validCredentials.password) {
            onLogin(); // Call the login function passed via props
            navigate("/landing"); // Navigate to the landing page after successful login
        } else {
            setErrorMessage("Invalid username or password. Please try again.");
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Update username on input change
            />
            <br />
            <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password on input change
            />
            <br />
            <button onClick={handleLogin}>Login</button>
            {/* Display error message if credentials are wrong */}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
    );
};

export default LoginPage;
