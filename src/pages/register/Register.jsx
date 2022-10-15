import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

export default function Register() {

  const username = useRef()
  const email = useRef()
  const password = useRef()
  const passwordConfirmation = useRef()
  const navigate = useNavigate()

  /**
   * フォーム送信
   * 
   * ログインボタンを押した時
   * 
   * @param {Event} e イベント
   */
  const handleSubmit = async e => {
    e.preventDefault()

    // パスワードと確認用のパスワードが合っているか確認
    if (password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValidity('パスワードが違います')
    } else {
      try {
        // データ取得
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        }
        // registerApiを叩く
        await axios.post("/auth/register", user)
        // /loginへnavigateでリダイレクト
        navigate("/login")
      } catch (err) {
        console.log(err);
      }
    }
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
                <input type="button" value="ログイン" onClick={() => navigate("/login")} className="loginRegisterButton" />
              </form>
            </div>
        </div>
    </div>
  )
}
