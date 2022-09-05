import React from 'react'
import './Rightbar.css'
import Online from '../online/Online'
import { Users } from '../../dummyData'

/**
 * ライトバー
 * @param {boolean} param0 切り分け用フラグ
 * @returns {JSX.Element}
 */
export default function Rightbar({profile}) {

  /**
   * ホームのライトバー
   * @returns {JSX.Element}
   */
  const HomeRightbar = () => (
        <>
          <div className="eventContainer">
            <img src="./assets/star.png" alt="イベント星マーク" className='starImg' />
            <span className="eventText">
              <b>フォロワー限定イベント開催！！</b>
            </span>
          </div>
          <img src="./assets/event.jpeg" alt="イベント画像" className='eventImg' />
          <h4 className="rightbarTitle">オンラインの友達</h4>
          <ul className="rightbarFriendList">
            {Users.map(user => (
              <Online user={user} key={user.id} />
            ))}
          </ul>
          <p className="promotionTitle">プロモーション広告</p>
          <img src="./assets/promotion/promotion1.jpeg" alt="広告画像" className='rightbarPromotionImg' />
          <p className="promotionName">ショッピング</p>
          <img src="./assets/promotion/promotion2.jpeg" alt="広告画像" className='rightbarPromotionImg' />
          <p className="promotionName">カーショップ</p>
          <img src="./assets/promotion/promotion3.jpeg" alt="広告画像" className='rightbarPromotionImg' />
          <p className="promotionName">〇〇株式会社</p>
        </>
  )

  /**
   * プロフィールのライトバー
   * @returns {JSX.Element}
   */
  const ProfileRightbar = () => (
    <>
      ProfileのRightbarです。
    </>
  )

  return (
    <aside className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </aside>
  )
}
