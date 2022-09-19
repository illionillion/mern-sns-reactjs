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
            <div className="loginRight">
              <form className="loginBox">
                <p className="loginMsg">ログインはこちら</p>
                <input type="email" className="loginInput" placeholder='Eメール' required />
                <input type="password" className="loginInput" placeholder='パスワード' minLength="6" required />
                <input type="submit" value="ログイン" className="loginButton" />
                <span className="loginForgot">パスワードを忘れた場合</span>
                <input type="button" value="アカウント作成" className="loginRegisterButton" />
              </form>
            </div>
        </div>
    </div>
  )
}
