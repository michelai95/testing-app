import React from "react";

export default function SignUp() {
    return (
        <div>
            <div>
                <p>Sign up for the NSA Test App</p>
            </div>
            <div>
                <form className="signUpForm">
                    <ul className="signUpFormContainer">
                        <li className="signUpForm">
                            <input id="signUpInput" className="signUpName" type="text"></input>
                            <label className="labelText" for="name">
                                Name
                            </label>
                        </li>
                        <li className="signUpForm">
                            <input id="signUpInput" className="signUpEmail" type="text"></input>
                            <label className="labelText" for="email">
                                Email
                            </label>
                        </li>
                        <li className="signUpForm">
                            <input id="signUpInput" className="signUpPassword" type="text"></input>
                            <label className="labelText" for="password">
                                Password
                            </label>
                        </li>
                        <li className="signUpForm">
                            <input id="signUpInput" className="signUpPosition" type="text"></input>
                            <label className="labelText" for="position">
                                Position
                            </label>
                        </li>
                    </ul>
                </form>
                <div className="signUpButtonContainer">
                    <button type="submit" className="signUpButton">Sign Up</button>
                </div>
            </div>
        </div>
    );
}
