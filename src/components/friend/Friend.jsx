import React from 'react'
import imageRequire from '../../imageRequire'

/**
 * フレンド
 * @param {object} param0 ユーザー
 * @returns {JSX.Element}
 */
export default function Friend({user}) {
  return (
    <li className="sidebarFriend">
        <img 
            src={imageRequire(user.profilePicture)} 
            alt={user.username + "フレンドアイコン"} 
            className='sidebarFriendImg'
        />
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}
