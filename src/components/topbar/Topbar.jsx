import { Chat, Notifications, Search } from '@mui/icons-material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import imageRequire from '../../imageRequire'
import { AuthContext } from '../../state/AuthContext'
import './Topbar.css'

export default function Topbar() {
    const { user } = useContext(AuthContext)
  return (
    <header className='topbarContainer'>
        <div className="topbarLeft">
            {/* トップバーの左のところのアイコンを作っている */}
            <Link to="/" style={{textDecoration:"none"}}>
                <span className='logo'>Real-SNS</span>
            </Link>
        </div>
        <div className="topbarCenter">
            {/* 真ん中のサーチバー */}
            <div className="searchbar">
                {/* <label htmlFor="searchInput"> */}
                    <Search className='searchIcon'/>
                {/* </label> */}
                <input
                 type="text"
                 id='searchInput'
                 className='searchInput'
                 placeholder='何を探しますか？'
                />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarItemIcons">
                <div className="topbarIconItem">
                    {/* マテリアルUI使う */}
                    <Chat />
                    <span className="topbarIconBadge">4</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications />
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <Link to={`/profile/${user.username}`}>
                        {/* 画像フォルダはpublicディレクトリにある */}
                        <img src={imageRequire(user.profilePicture || 'assets/person/noAvatar.png')} alt="アイコン" className='topbarImg' />
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}
