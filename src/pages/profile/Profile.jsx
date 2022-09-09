import React from 'react'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Timeline from '../../components/timeline/TimeLine'
import Topbar from '../../components/topbar/Topbar'
import './Profile.css'

export default function Profile() {
  const REACT_APP_PUBLIC_FOLDER = window.location.origin // url取得
  // console.log(REACT_APP_PUBLIC_FOLDER);
  return (
    <>
      <Topbar />
      <div className="profile">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img src={REACT_APP_PUBLIC_FOLDER + "/assets/post/3.jpeg"} alt="画像" className='profileCoverImg' />
                <img src={REACT_APP_PUBLIC_FOLDER + "/assets/person/1.jpeg"} alt="アイコン" className='profileUserImg' />
              </div>
              <div className="profileInfo">
                <h4 className='profileInfoName'>illion</h4>
                <span className="profileInfoDesc">学生プログラマー</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Timeline />
              <Rightbar profile={true}/>
            </div>
          </div>
      </div> 
    </>
  )
}
