import React from 'react'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Timeline from '../../components/timeline/TimeLine'
import Topbar from '../../components/topbar/Topbar'
import imageRequire from '../../imageRequire'
import './Profile.css'

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img src={imageRequire("assets/post/3.jpeg")} alt="画像" className='profileCoverImg' />
                <img src={imageRequire("assets/person/1.jpeg")} alt="アイコン" className='profileUserImg' />
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
