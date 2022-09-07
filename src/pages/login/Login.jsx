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
              <div className="loginBox">
                <p className="loginMsg">ログインはこちら</p>
                <input type="text" className="loginInput" placeholder='Eメール' />
                <input type="text" className="loginInput" placeholder='パスワード' />
                <input type="button" value="ログイン" className="loginButton" />
                <span className="loginForgot">パスワードを忘れた場合</span>
                <input type="button" value="アカウント作成" className="loginRegisterButton" />
              </div>
            </div>
        </div>
    </div>
  )
}
