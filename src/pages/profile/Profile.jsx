import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Timeline from '../../components/timeline/TimeLine'
import Topbar from '../../components/topbar/Topbar'
import imageRequire from '../../imageRequire'
import './Profile.css'

export default function Profile() {

  const [user, setUser] = useState([])
  const username = useParams().username

    // useEffectでDOMにマウント時に一回だけ実行
    useEffect(() => {

    const fetchUser = async () => {
        // プロキシ設定してるのでhttp~は省略
        const response = await axios.get(`/users?username=${username}`)
        console.log(response);
        setUser(response.data) // 中身を取り出す
    }

    fetchUser()

    }, [username]) // usernameを監視・これが変われば再レンダリング

  return (
    <>
      <Topbar />
      <div className="profile">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img src={imageRequire(user.coverPicture || "assets/post/3.jpeg")} alt="画像" className='profileCoverImg' />
                <img src={imageRequire(user.profilePicture || "assets/person/noAvatar.png")} alt="アイコン" className='profileUserImg' />
              </div>
              <div className="profileInfo">
                <h4 className='profileInfoName'>{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Timeline username = {username}/>
              <Rightbar user = {user}/>
            </div>
          </div>
      </div> 
    </>
  )
}
