import React from 'react'
import './Rightbar.css'

export default function Rightbar() {
  return (
    <aside className='rightbar'>
      <div className="rightbarWrapper">
        <div className="eventContainer">
          <img src="./assets/star.png" alt="イベント星マーク" className='starImg' />
          <span className="eventText">
            <b>フォロワー限定イベント開催！！</b>
          </span>
        </div>
        <img src="./assets/event.jpeg" alt="イベント画像" className='eventImg' />
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="./assets/person/1.jpeg" alt="ユーザーアイコン" className='rightbarProfileImg' />
              <span className="rightbarOnline">{/* ピンクのやつなので空 */}</span>
            </div>
            <span className="rightbarUsername">illion</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="./assets/person/1.jpeg" alt="ユーザーアイコン" className='rightbarProfileImg' />
              <span className="rightbarOnline">{/* ピンクのやつなので空 */}</span>
            </div>
            <span className="rightbarUsername">illion</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="./assets/person/2.jpeg" alt="ユーザーアイコン" className='rightbarProfileImg' />
              <span className="rightbarOnline">{/* ピンクのやつなので空 */}</span>
            </div>
            <span className="rightbarUsername">illion</span>
          </li>
        </ul>
        <p className="promotionTitle">プロモーション広告</p>
        <img src="./assets/promotion/promotion1.jpeg" alt="広告画像" className='rightbarPromotionImg' />
        <p className="promotionName">ショッピング</p>
        <img src="./assets/promotion/promotion2.jpeg" alt="広告画像" className='rightbarPromotionImg' />
        <p className="promotionName">カーショップ</p>
        <img src="./assets/promotion/promotion3.jpeg" alt="広告画像" className='rightbarPromotionImg' />
        <p className="promotionName">〇〇株式会社</p>
      </div>
    </aside>
  )
}
