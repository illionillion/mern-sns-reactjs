import React from 'react'
import { useRef } from 'react'
import './Login.css'

export default function Login() {

  const email = useRef()
  const password = useRef()
  
  /**
   * フォーム送信
   * @param {Event} e イベント
   */
  const handleSubmit = e => {
    e.preventDefault()
    console.log(email.current.value);
    console.log(password.current.value);
  }

  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className='loginLogo'>Real-SNS</h3>
          <span className="loginDesc">自作のSNS</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <p className="loginMsg">ログインはこちら</p>
            <input type="email" className="loginInput" placeholder='Eメール' required ref={email} />
            <input type="password" className="loginInput" placeholder='パスワード' minLength="6" required ref={password} autoComplete='current-passsword' />
            <input type="submit" value="ログイン" className="loginButton" />
            <span className="loginForgot">パスワードを忘れた場合</span>
            <input type="button" value="アカウント作成" className="loginRegisterButton" />
          </form>
        </div>
      </div>
    </div>
  )
}
