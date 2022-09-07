import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Real-SNS</h3>
                <span className="loginDesc">自作のSNS</span>
            </div>
            <div className="loginRight">フォーム</div>
        </div>
    </div>
  )
}
