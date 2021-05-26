import React from 'react'
import Submit from './Components/Submit.js'

export default function ForgotPassword() {
    return(
        <div>
            <div>
                <form className="forgotPasswordForm">
                <ul className="forgotPasswordContainer">
                    <li className="forgotPasswordContainerOne">
                        <input type="text" className="forgotPasswordBoxOne"></input>
                        <label className="forgotPasswordLabel">Username</label>
                    </li>
                    <li className="forgotPasswordContainerTwo">
                        <input type="text" className="forgotPasswordBoxTwo"></input>
                        <label className="forgotPasswordLabel">Email</label>
                    </li>
                </ul>
                </form>
            </div>
            <Submit />
        </div>
    )
}