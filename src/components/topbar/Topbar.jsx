import React from 'react'

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
                <input
                 type="text"
                 className='searchInput'
                 placeholder='何を探しますか？'
                />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarIconIyem">{/* マテリアルUI使う */}1</div>
            <div className="topbarIconIyem">2</div>
        </div>
        <img src="./assets/person/1.jpeg" alt="アイコン" className='topbarImg' />
    </div>
  )
}
