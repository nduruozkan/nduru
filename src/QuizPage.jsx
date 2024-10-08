import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
    const navigate = useNavigate();

    // State to store user's answers
    const [answers, setAnswers] = useState({
        q1: '',
        q2: '',
        q3: ''
    });

    // State to track if the quiz is submitted
    const [submitted, setSubmitted] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    // Quiz questions and answers
    const questions = [
        {
            question: "What is the purpose of a RESTful API?",
            options: [
                "To create a database",
                "To handle HTTP requests",
                "To style web pages",
                "To store session data"
            ],
            answer: "To handle HTTP requests" // Correct answer
        },
        {
            question: "Which of the following is a front-end JavaScript framework?",
            options: [
                "Django",
                "Flask",
                "React",
                "Node.js"
            ],
            answer: "React" // Correct answer
        },
        {
            question: "What does SQL stand for?",
            options: [
                "Structured Query Language",
                "Style Question Language",
                "Simple Query Language",
                "Structured Question Language"
            ],
            answer: "Structured Query Language" // Correct answer
        }
    ];

    // Handle answer change
    const handleChange = (question, value) => {
        setAnswers({
            ...answers,
            [question]: value
        });
    };

    // Handle quiz submission
    const handleSubmit = (e) => {
        e.preventDefault();
        let score = 0;

        // Check answers
        questions.forEach((q, index) => {
            if (answers[`q${index + 1}`] === q.answer) {
                score++;
            }
        });

        setCorrectAnswers(score);
        setSubmitted(true);
    };

    return (
        <div>
            <h1>Quiz Page</h1>
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    {questions.map((q, index) => (
                        <div key={index}>
                            <h3>{q.question}</h3>
                            {q.options.map((option, i) => (
                                <label key={i}>
                                    <input
                                        type="radio"
                                        name={`q${index + 1}`}
                                        value={option}
                                        onChange={() => handleChange(`q${index + 1}`, option)}
                                        checked={answers[`q${index + 1}`] === option}
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    ))}
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                    <h2>{correctAnswers === questions.length ? "Congratulations!" : "You did not pass the quiz."}</h2>
                    <p>You answered {correctAnswers} out of {questions.length} questions correctly.</p>
                    {correctAnswers === questions.length && (
                        <button onClick={() => navigate('/hackathon-info')}>Go to Hackathon Info Page</button>
                    )}
                </div>
            )}
        </div>
    );
};

export default QuizPage;
