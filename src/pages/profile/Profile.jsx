import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Timeline from '../../components/timeline/TimeLine'
import Topbar from '../../components/topbar/Topbar'
import imageRequire from '../../imageRequire'
import './Profile.css'

export default function Profile() {

  const [user, setUser] = useState([])

    // useEffectでDOMにマウント時に一回だけ実行
    useEffect(() => {

    const fetchUser = async () => {
        // プロキシ設定してるのでhttp~は省略
        const response = await axios.get(`/users?username=illion2`) // なぜか3000番にリクエスト送られて取れない
        console.log(response);
        setUser(response.data) // 中身を取り出す
    }

    fetchUser()

    }, [])

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
                <h4 className='profileInfoName'>{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
              </div>
            </div>
            <div className="profileRightBottom">
              {/* <Timeline username = {"illion"}/> */}
              <Timeline username = {"山中"}/>
              <Rightbar user = {user}/>
            </div>
          </div>
      </div> 
    </>
  )
}
