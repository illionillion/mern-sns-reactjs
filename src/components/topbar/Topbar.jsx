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
                    {/* 画像フォルダはpublicディレクトリにある */}
                    <img src="./assets/person/1.jpeg" alt="アイコン" className='topbarImg' />
                </div>
            </div>
        </div>
    </div>
  )
}
