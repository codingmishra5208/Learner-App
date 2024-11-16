// src/AskQuestion.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RxCross2 } from "react-icons/rx";

const img="https://downloads.intercomcdn.com/i/o/299002/b731a3f930a9ad910c9ee7e9/1a269b2104beaaafeea6644490b1e6eb.png";

const AskQuestion = () => {
    const [question, setQuestion] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false); // For toggle

    useEffect(() => {
        // Body overflow control
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/questions', { question });
            setSuccessMessage(response.data.message);
            setQuestion('');
            setErrorMessage('');
            setIsOpen(false); // Close textarea after submission
        } catch (error) {
            console.error('Error submitting question', error);
            setErrorMessage('Failed to submit question. Please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <div className="fixed right-4 bottom-4 z-50">
            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />
            )}
            
            {/* Main Content */}
            {!isOpen ? (
                <img
                    src={img} // Replace with your image URL
                    alt=""
                    onClick={() => setIsOpen(true)}
                    className="bg-[#001E2B] dark:text-slate-900 text-white w-12 px-2 py-2 rounded-full cursor-pointer"
                />
            ) : (
                <div className="bg-white shadow-lg rounded-lg p-4 fixed right-4 bottom-4 max-w-xs w-72 md:w-full z-50">
                    <h2 className="text-lg font-bold">Ask a Question</h2>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            className="border p-2 w-full"
                            rows="3"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="Type your question here..."
                            required
                        />
                        <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                            Submit
                        </button>
                    </form>
                    {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
                    {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
                    <RxCross2
                        onClick={() => setIsOpen(false)}
                        className="mt-2 absolute top-2 right-2 text-[22px] font-bold text-red-500 cursor-pointer"
                    />
                </div>
            )}
        </div>
    );
};

export default AskQuestion;