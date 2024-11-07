// src/components/HomePage.js
import React, { useState } from 'react';
import './Homepage.css';
const HomePage = () => {
    // State to manage whether we're in Login or Sign Up form
    const [isLogin, setIsLogin] = useState(true);
    
    // Handler to toggle between login and signup forms
    const toggleForm = () => setIsLogin(!isLogin);

    return (
        <div>
            <h1>Welcome to Proviz School of AI</h1>

            {/* Add your content here */}
            <div className="section blue">
                <h2>About Us</h2>
                <p>We are dedicated to advancing AI education!</p>
            </div>

            <div className="section green">
                <h2>Our Programs</h2>
                <p>Explore our diverse AI programs and courses.</p>
            </div>

            <div className="section orange">
                <h2>Contact Us</h2>
                <p>Reach out to us for any inquiries.</p>
            </div>

            {/* Login / SignUp Form Section */}
            <div className="auth-container">
                {isLogin ? (
                    <div className="login-form">
                        <h2>Login</h2>
                        <form>
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <button type="submit">Login</button>
                        </form>
                        <p>
                            Don't have an account? <button onClick={toggleForm}>Sign Up</button>
                        </p>
                    </div>
                ) : (
                    <div className="signup-form">
                        <h2>Sign Up</h2>
                        <form>
                            <input type="text" placeholder="Name" required />
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <input type="password" placeholder="Confirm Password" required />
                            <button type="submit">Sign Up</button>
                        </form>
                        <p>
                            Already have an account? <button onClick={toggleForm}>Login</button>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;
