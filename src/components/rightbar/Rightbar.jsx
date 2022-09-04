import React from 'react'
import './Rightbar.css'

export default function Rightbar() {
  return (
    <aside className='rightbar'>
      <div className="rightbarWrapper">
        <div className="eventContainer">
          <img src="./assets/star.png" alt="イベント星マーク" className='startImg' />
          <span className="eventText">
            <b>フォロワー限定イベント開催！！</b>
          </span>
        </div>
        <img src="./assets/event.jpeg" alt="イベント画像" className='' />
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="./assets/person/1.jpeg" alt="ユーザーアイコン" />
              <span className="rightbarOnline">{/* ピンクのやつなので空 */}</span>
            </div>
            <span className="rightbarUsername">illion</span>
          </li>
        </ul>
      </div>
    </aside>
  )
}
