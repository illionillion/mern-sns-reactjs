import React, { useRef } from 'react'
import './Register.css'

export default function Register() {

  const username = useRef()
  const email = useRef()
  const password = useRef()
  const passwordConfirmation = useRef()


  /**
   * フォーム送信
   * 
   * ログインボタンを押した時
   * 
   * @param {Event} e イベント
   */
  const handleSubmit = e => {
    e.preventDefault()

    console.log(username);
    console.log(email);
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
                <p className="loginMsg">新規登録はこちら</p>
                <input type="text" className="loginInput" placeholder='ユーザー名' ref={username} autoComplete='username' required/>
                <input type="email" className="loginInput" placeholder='Eメール' ref={email} autoComplete='email' required/>
                <input type="password" className="loginInput" placeholder='パスワード' minLength={6} ref={password} autoComplete='new-passsword' required/>
                <input type="password" className="loginInput" placeholder='確認用パスワード' minLength={6} ref={passwordConfirmation} autoComplete='current-passsword' required/>
                <input type="submit" value="サインアップ" className="loginButton" />
                <input type="button" value="ログイン" className="loginRegisterButton" />
              </form>
            </div>
        </div>
    </div>
  )
}
