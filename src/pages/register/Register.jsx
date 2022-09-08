import React from 'react'
import './Register.css'

export default function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>Real-SNS</h3>
                <span className="loginDesc">自作のSNS</span>
            </div>
            <div className="loginRight">
              <div className="loginBox">
                <p className="loginMsg">新規登録はこちら</p>
                <input type="text" className="loginInput" placeholder='ユーザー名' />
                <input type="text" className="loginInput" placeholder='Eメール' />
                <input type="text" className="loginInput" placeholder='パスワード' />
                <input type="text" className="loginInput" placeholder='確認用パスワード' />
                <input type="button" value="サインアップ" className="loginButton" />
                <input type="button" value="ログイン" className="loginRegisterButton" />
              </div>
            </div>
        </div>
    </div>
  )
}
