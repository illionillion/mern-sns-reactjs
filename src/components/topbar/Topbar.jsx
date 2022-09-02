import { Chat, Notifications, Search } from '@mui/icons-material'
import React from 'react'
import './Topbar.css'

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            {/* トップバーの左のところのアイコンを作っている */}
            <span className='logo'>Real-SNS</span>
        </div>
        <div className="topbarCenter">
            {/* 真ん中のサーチバー */}
            <div className="searchbar">
                <Search className='searchIcon'/>
                <input
                 type="text"
                 className='searchInput'
                 placeholder='何を探しますか？'
                />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarIconIyem">
                {/* マテリアルUI使う */}
                <Chat />
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconIyem">
                <Notifications />
                <span className="topbarIconBadge">2</span>
            </div>
        </div>
        {/* 画像フォルダはpublicディレクトリにある */}
        <img src="./assets/person/1.jpeg" alt="アイコン" className='topbarImg' />
    </div>
  )
}
